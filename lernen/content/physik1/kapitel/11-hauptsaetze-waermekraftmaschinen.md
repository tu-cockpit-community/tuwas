---
nummer: 11
titel: Hauptsätze, Wärmekraftmaschinen und Meteorologie
kurz: Volumenarbeit und erster Hauptsatz, die vier Zustandsänderungen im p-V-Diagramm, Kreisprozesse und Carnot-Grenze, Motoren, Kraftwerk, Kühlschrank und Wärmepumpe, zweiter und dritter Hauptsatz mit Entropie sowie Wetter und Klima als angewandte Thermodynamik.
teil: waerme
stunden: 12
pruefungsgewicht: 2
voraussetzungen: [temperatur-waerme-gase, arbeit-energie-impuls, hydro-aeromechanik, dynamik, kreisbewegung-gravitation]
lernziele:
  - den ersten Hauptsatz ΔU = Q + W mit der Vorzeichenkonvention des Kurses aufstellen und daraus innere Energie, Wärme oder Arbeit berechnen
  - Volumenarbeit als Fläche im p-V-Diagramm ablesen und für Prozesse mit konstantem oder gleichmäßig veränderlichem Druck berechnen
  - isochore, isobare, isotherme und adiabatische Zustandsänderungen unterscheiden und für jede Q, W und ΔU berechnen, auch mit den Poisson-Gleichungen
  - Kreisprozesse mit einer Tabelle für Q, W und ΔU auswerten, den Wirkungsgrad berechnen und mit dem Carnot-Wirkungsgrad vergleichen
  - Otto- und Dieselmotor, Dampfkraftwerk, Kühlschrank und Wärmepumpe beschreiben und Wirkungsgrade, Abwärme und Leistungszahlen berechnen
  - den zweiten Hauptsatz nach Clausius und nach Kelvin-Planck erklären, Perpetua mobilia erster und zweiter Art unterscheiden und Behauptungen über Maschinen prüfen
  - Entropieänderungen mit ΔS = Q/T berechnen, die Entropie als Zahl der Möglichkeiten deuten und den dritten Hauptsatz erklären
  - relative Luftfeuchtigkeit, Taupunkt, Wolkenuntergrenze und Föhn mit den adiabatischen Temperaturgradienten berechnen und erklären
  - Hoch und Tief, Wind, Corioliskraft, Fronten, Inversion und Treibhauseffekt physikalisch erklären und einfache Abschätzungen dazu rechnen
---

Im [Kapitel Temperatur, Wärme und Gasgesetze](/lernen/physik1/temperatur-waerme-gase) hast du Wärme
gemessen und Gase mit der Zustandsgleichung $pV = nRT$ beschrieben. Dieses Kapitel stellt die großen
Fragen der Wärmelehre. Wie verwandelt man Wärme in Bewegung? Wie viel davon ist bestenfalls möglich?
Warum fließt Wärme nie von selbst vom kalten zum warmen Körper?

Die Antworten stecken in den **Hauptsätzen der Wärmelehre**. Ein Hauptsatz ist ein Grundgesetz, das
aus sehr vielen Experimenten gewonnen wurde und nie widerlegt worden ist. Die Hauptsätze bestimmen,
wie gut ein Automotor, ein Kraftwerk oder eine Wärmepumpe höchstens sein kann. Diese Grenze kann
keine Technik der Welt überwinden.

**Wozu brauchst du das?** Jedes Kraftwerk, jedes Auto und jeder Kühlschrank folgt diesen Gesetzen. In
der Informatik begegnet dir die Wärmelehre ebenfalls. Ein Rechenzentrum muss seine gesamte elektrische
Leistung als Abwärme wieder loswerden. Der Begriff **Entropie** taucht dort als Informationsentropie
wieder auf.

**Was kommt in der Prüfung?** Schriftlich sind diese Aufgaben typisch:

- Wirkungsgrad und Abwärme eines Kraftwerks oder Motors berechnen.
- Den Carnot-Wirkungsgrad, also die theoretische Obergrenze, berechnen und mit einer realen Maschine vergleichen.
- Die Leistungszahl einer Wärmepumpe und die Heizkosten berechnen.
- Arbeit, Wärme und innere Energie bei einer Zustandsänderung oder in einem Kreisprozess bestimmen.
- Relative Luftfeuchtigkeit, Taupunkt oder Föhn in Zahlen behandeln.

In der mündlichen Prüfung sind die Hauptsätze ein Klassiker. Typische Fragen lauten:

- „Formulieren Sie den zweiten Hauptsatz.“
- „Warum gibt es kein Perpetuum mobile?“
- „Wie funktioniert ein Kühlschrank?“
- „Was ist Föhn?“

Nach diesem Kapitel kannst du jede dieser Fragen in ganzen Sätzen beantworten.

**Warum steht das Wetter in diesem Kapitel?** Die Prüfungsordnung nennt den Stoffpunkt
**Meteorologie** ausdrücklich. Das Wetter ist angewandte Wärmelehre. Aufsteigende Luft dehnt sich aus
und kühlt dabei ab. Wasserdampf kondensiert und gibt Wärme frei. Druckunterschiede treiben die Winde an.
Wer die ersten Abschnitte verstanden hat, versteht auch Wolken und Föhn.

**So ist das Kapitel aufgebaut:** Zuerst lernst du die Arbeit kennen, die ein Gas verrichtet. Dann
folgen der erste Hauptsatz und die vier Grundtypen von Zustandsänderungen. Danach geht es um Maschinen:
Kreisprozesse, Carnot-Grenze, Motoren, Kühlschrank und Wärmepumpe. Es folgen der zweite und dritte
Hauptsatz mit der Entropie. Am Ende stehen Luftfeuchtigkeit, Wolken, Föhn, Wind und Treibhauseffekt.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Temperatur in Kelvin** ($T = \vartheta + 273{,}15$), die **Zustandsgleichung** $pV = nRT$ und die
  **innere Energie** eines idealen Gases $U = \tfrac f2\,nRT$ aus dem
  [Kapitel Temperatur, Wärme und Gasgesetze](/lernen/physik1/temperatur-waerme-gase).
- **Wärme**, spezifische Wärmekapazität und **latente Wärme** (Schmelz- und Verdampfungswärme) aus
  demselben Kapitel.
- **Arbeit** als Kraft mal Weg, **Leistung** und **Wirkungsgrad** aus dem
  [Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls).
- **Druck** als Kraft pro Fläche und den **Luftdruck** aus dem
  [Kapitel Hydro- und Aeromechanik](/lernen/physik1/hydro-aeromechanik).
- **Logarithmen** und **Potenzen mit Kommazahlen als Hochzahl** aus dem Mathematikkurs:
  [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen) und [1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen).
- Die Idee **„Integral gleich Fläche unter der Kurve“** aus dem Mathematikkurs:
  [10.2 Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Bist du bei einer Frage unsicher, folge dem Link in
der Lösung und wiederhole den Abschnitt kurz. Das kostet zehn Minuten und spart dir später viel Ärger.

```aufgabe
id: p11-e-kelvin
art: check
titel: Celsius in Kelvin
niveau: 1
angabe: |
  Rechne $27\,^\circ\text{C}$ in Kelvin um. Gib das Ergebnis mit zwei Nachkommastellen an.
teile:
  - typ: zahl
    loesung: "27+273.15"
    einheit: "K"
    anzeige: '300{,}15'
    fehler:
      - wert: "27-273.15"
        meldung: Du hast $273{,}15$ abgezogen. Kelvin-Werte sind aber immer **größer** als die Celsius-Werte, denn $0\,\text{K}$ liegt bei $-273{,}15\,^\circ\text{C}$. Also wird addiert.
      - wert: "27"
        meldung: Das ist noch der Celsius-Wert. Die Kelvin-Skala beginnt am absoluten Nullpunkt, deshalb musst du $273{,}15$ dazuzählen.
hinweise:
  - Der absolute Nullpunkt $0\,\text{K}$ liegt bei $-273{,}15\,^\circ\text{C}$. Ein Kelvin ist gleich groß wie ein Grad Celsius.
loesung: |
  Die Kelvin-Skala ist gegenüber der Celsius-Skala nur verschoben, und zwar um $273{,}15$. Deshalb gilt $T = \vartheta + 273{,}15$.
  ---
  $T = 27 + 273{,}15 = 300{,}15\,\text{K}$. Wiederholen kannst du das in [10.1 Temperatur und Temperaturskalen](/lernen/physik1/temperatur-waerme-gase/temperatur-und-temperaturskalen).
```

```aufgabe
id: p11-e-gasgleichung
art: check
titel: Volumen aus der Zustandsgleichung
niveau: 1
angabe: |
  $2{,}0\,\text{mol}$ eines idealen Gases haben $300\,\text{K}$ und den Druck $1{,}0\,\text{bar}$. Welches Volumen nehmen sie ein? Gib das Ergebnis in Litern an ($R = 8{,}314\,\text{J/(mol K)}$, $1\,\text{bar} = 10^5\,\text{Pa}$).
teile:
  - typ: zahl
    loesung: "2*8.314*300/1e5*1000"
    einheit: "L"
    anzeige: '49{,}9'
    fehler:
      - wert: "2*8.314*300/1e5"
        meldung: Das ist das Volumen in Kubikmetern. Ein Kubikmeter sind $1000$ Liter, also musst du noch mit $1000$ multiplizieren.
      - wert: "2*8.314*300/1"
        meldung: Du hast den Druck in bar eingesetzt. Die Gaskonstante $R$ passt nur zu SI-Einheiten, also musst du $1{,}0\,\text{bar} = 10^5\,\text{Pa}$ einsetzen.
hinweise:
  - Stelle $pV = nRT$ nach $V$ um und rechne in SI-Einheiten. Das Ergebnis kommt dann in Kubikmetern heraus.
loesung: |
  Wir stellen $pV = nRT$ nach $V$ um, indem wir beide Seiten durch $p$ teilen: $V = \dfrac{nRT}{p}$.
  ---
  $V = \dfrac{2{,}0\,\text{mol}\cdot 8{,}314\,\text{J/(mol K)}\cdot 300\,\text{K}}{10^5\,\text{Pa}} = 0{,}0499\,\text{m}^3 = 49{,}9\,\text{L}$. Die Einheit stimmt, weil $\text{J}/\text{Pa} = \text{N m}/(\text{N/m}^2) = \text{m}^3$. Wiederholen: [10.10 Die Zustandsgleichung des idealen Gases](/lernen/physik1/temperatur-waerme-gase/die-zustandsgleichung-des-idealen-gases).
```

```aufgabe
id: p11-e-innere-energie
art: check
titel: Innere Energie eines Edelgases
niveau: 1
angabe: |
  Die innere Energie eines idealen Gases ist $U = \tfrac f2\,nRT$. Dabei ist $f$ die Zahl der Freiheitsgrade, für einatomige Gase wie Helium ist $f = 3$. Wie groß ist die innere Energie von $1{,}0\,\text{mol}$ Helium bei $300\,\text{K}$?
teile:
  - typ: zahl
    loesung: "1.5*8.314*300"
    einheit: "J"
    anzeige: '3741'
    fehler:
      - wert: "2.5*8.314*300"
        meldung: Du hast $f = 5$ verwendet. Das gilt für zweiatomige Gase wie Stickstoff oder Luft. Helium ist einatomig, also $f = 3$.
      - wert: "8.314*300"
        meldung: Du hast den Faktor $\tfrac f2 = \tfrac 32$ vergessen. Jeder der drei Freiheitsgrade trägt $\tfrac12 RT$ pro Mol bei.
hinweise:
  - Setze $f = 3$, $n = 1{,}0\,\text{mol}$, $R = 8{,}314\,\text{J/(mol K)}$ und $T = 300\,\text{K}$ ein.
loesung: |
  Helium ist einatomig, also gilt $f = 3$ und $U = \tfrac32\,nRT$.
  ---
  $U = 1{,}5\cdot 1{,}0\,\text{mol}\cdot 8{,}314\,\text{J/(mol K)}\cdot 300\,\text{K} = 3741\,\text{J}$. Mol und Kelvin kürzen sich, es bleibt Joule. Wiederholen: [10.11 Kinetische Gastheorie](/lernen/physik1/temperatur-waerme-gase/kinetische-gastheorie).
```

```aufgabe
id: p11-e-arbeit
art: check
titel: Arbeit als Kraft mal Weg
niveau: 1
angabe: |
  Du schiebst eine Kiste mit der konstanten Kraft $150\,\text{N}$ in Kraftrichtung $4{,}0\,\text{m}$ weit. Wie viel Arbeit verrichtest du?
teile:
  - typ: zahl
    loesung: "150*4"
    einheit: "J"
    anzeige: '600'
    fehler:
      - wert: "150/4"
        meldung: Du hast geteilt. Arbeit ist Kraft **mal** Weg. Je weiter du schiebst, desto mehr Arbeit verrichtest du.
hinweise:
  - Wenn Kraft und Weg in dieselbe Richtung zeigen, gilt $W = F\cdot s$.
loesung: |
  Kraft und Weg zeigen in dieselbe Richtung, also gilt $W = F\cdot s$.
  ---
  $W = 150\,\text{N}\cdot 4{,}0\,\text{m} = 600\,\text{N m} = 600\,\text{J}$. Wiederholen: [4.1 Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).
```

```aufgabe
id: p11-e-druck
art: check
titel: Kraft auf einen Kolben
niveau: 1
angabe: |
  Ein Gas drückt mit $2{,}0\,\text{bar}$ auf einen Kolben mit der Fläche $50\,\text{cm}^2$. Wie groß ist die Kraft auf den Kolben?
teile:
  - typ: zahl
    loesung: "2e5*50e-4"
    einheit: "N"
    anzeige: '1000'
    fehler:
      - wert: "2e5*50"
        meldung: Du hast die Fläche in $\text{cm}^2$ eingesetzt. Ein Quadratzentimeter ist $10^{-4}\,\text{m}^2$, weil $1\,\text{cm} = 10^{-2}\,\text{m}$ ist und beim Quadrieren $10^{-4}$ entsteht.
      - wert: "2*50"
        meldung: Du hast bar und $\text{cm}^2$ direkt multipliziert. Rechne zuerst in Pascal und Quadratmeter um, dann kommt die Kraft in Newton heraus.
hinweise:
  - 'Druck ist Kraft pro Fläche, $p = F/A$. Also ist $F = p\cdot A$. Rechne vorher in SI-Einheiten um: $1\,\text{bar} = 10^5\,\text{Pa}$, $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$.'
loesung: |
  Wir stellen $p = F/A$ nach der Kraft um: $F = p\cdot A$. Dafür brauchen wir SI-Einheiten: $p = 2{,}0\cdot 10^5\,\text{Pa}$ und $A = 50\cdot 10^{-4}\,\text{m}^2 = 5{,}0\cdot 10^{-3}\,\text{m}^2$.
  ---
  $F = 2{,}0\cdot 10^5\,\text{N/m}^2\cdot 5{,}0\cdot 10^{-3}\,\text{m}^2 = 1000\,\text{N}$. Wiederholen: [9.1 Druck: Kraft pro Fläche](/lernen/physik1/hydro-aeromechanik/druck-kraft-pro-flaeche).
```

```aufgabe
id: p11-e-wirkungsgrad
art: check
titel: Wirkungsgrad eines Elektromotors
niveau: 1
angabe: |
  Ein Elektromotor nimmt $800\,\text{W}$ elektrische Leistung auf und gibt $600\,\text{W}$ mechanische Leistung ab. Wie groß ist sein Wirkungsgrad in Prozent?
teile:
  - typ: zahl
    loesung: "600/800*100"
    einheit: "%"
    anzeige: '75'
    fehler:
      - wert: "800/600*100"
        meldung: Du hast aufgenommene durch abgegebene Leistung geteilt. Ein Wirkungsgrad über $100\,\%$ ist unmöglich. Es heißt immer „Nutzen durch Aufwand“.
      - wert: "200/800*100"
        meldung: Das ist der Anteil, der als Wärme verloren geht. Der Wirkungsgrad ist der **genutzte** Anteil.
hinweise:
  - Wirkungsgrad ist abgegebene Nutzleistung geteilt durch aufgenommene Leistung.
loesung: |
  Der Wirkungsgrad vergleicht den Nutzen mit dem Aufwand: $\eta = P_\text{nutz}/P_\text{zu}$.
  ---
  $\eta = \dfrac{600\,\text{W}}{800\,\text{W}} = 0{,}75 = 75\,\%$. Die restlichen $200\,\text{W}$ werden zu Wärme. Wiederholen: [4.6 Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

```aufgabe
id: p11-e-logarithmus
art: check
titel: Natürlicher Logarithmus
niveau: 1
angabe: |
  Für welche Zahl $x$ gilt $e^x = 4$? Runde auf drei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "ln(4)"
    anzeige: '1{,}386'
    fehler:
      - wert: "log(4, 10)"
        meldung: Du hast den Zehnerlogarithmus ($\lg$, Taste „log“) verwendet. Zur Basis $e$ gehört der natürliche Logarithmus, die Taste „ln“.
      - wert: "4/e"
        meldung: Durch $e$ zu teilen hilft nicht, weil $e$ hier in der Hochzahl steht. Die Umkehrung von „$e$ hoch“ ist der natürliche Logarithmus.
hinweise:
  - Der natürliche Logarithmus $\ln$ macht „$e$ hoch“ rückgängig. Also ist $x = \ln 4$.
loesung: |
  Wir wenden auf beide Seiten von $e^x = 4$ den natürlichen Logarithmus an. Weil $\ln(e^x) = x$ ist, bleibt $x = \ln 4$.
  ---
  $x = \ln 4 \approx 1{,}386$. Probe: $e^{1{,}386} \approx 4{,}00$. Wiederholen: Mathematik, [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen).
```

## Arbeit am Gas: Volumenarbeit und das p-V-Diagramm

```aufgabe
id: p11-1-check
art: check
titel: "Vorwissen: bar mal Liter"
niveau: 1
angabe: |
  In der Wärmelehre multipliziert man oft einen Druck mit einem Volumen. Wie viel Joule sind $1\,\text{bar}\cdot 1\,\text{L}$? ($1\,\text{bar} = 10^5\,\text{Pa}$, $1\,\text{L} = 10^{-3}\,\text{m}^3$)
teile:
  - typ: zahl
    loesung: "1e5*1e-3"
    einheit: "J"
    anzeige: '100'
    fehler:
      - wert: "1"
        meldung: Du hast die Zahlen ohne Umrechnung multipliziert. Bar und Liter sind keine SI-Einheiten. Erst $\text{Pa}\cdot\text{m}^3$ ergibt Joule.
      - wert: "1000"
        meldung: Ein Liter ist ein Tausendstel Kubikmeter, also $10^{-3}\,\text{m}^3$. Prüfe die Hochzahlen noch einmal.
hinweise:
  - 'Rechne beide Größen in SI-Einheiten um. Es gilt $1\,\text{Pa}\cdot\text{m}^3 = 1\,\tfrac{\text{N}}{\text{m}^2}\cdot\text{m}^3 = 1\,\text{N m} = 1\,\text{J}$.'
loesung: |
  In SI-Einheiten ist $1\,\text{bar}\cdot 1\,\text{L} = 10^5\,\text{Pa}\cdot 10^{-3}\,\text{m}^3$.
  ---
  $10^5\cdot 10^{-3} = 10^2 = 100$, und $\text{Pa}\cdot\text{m}^3 = \text{N m} = \text{J}$. Also ist $1\,\text{bar}\cdot 1\,\text{L} = 100\,\text{J}$. Diese Umrechnung brauchst du in diesem Kapitel ständig. Wiederholen: [9.1 Druck: Kraft pro Fläche](/lernen/physik1/hydro-aeromechanik/druck-kraft-pro-flaeche).
```

**Worum geht es in diesem Abschnitt?** Ein Gas kann Arbeit verrichten, wenn es sich gegen einen Druck
ausdehnt. Genau so arbeiten Dampfmaschine und Automotor. Diese Arbeit heißt **Volumenarbeit**. Wir
leiten ihre Formel her und lernen, sie als Fläche in einem Diagramm abzulesen.

### Wie ein Gas Arbeit verrichtet

Stell dir einen Zylinder vor, der mit Gas gefüllt ist. Oben schließt ihn ein beweglicher **Kolben** ab,
eine dichte Scheibe mit der Fläche $A$. Das Gas drückt mit dem Druck $p$ von innen gegen den Kolben.
Weil Druck Kraft pro Fläche ist (siehe [9.1 Druck: Kraft pro Fläche](/lernen/physik1/hydro-aeromechanik/druck-kraft-pro-flaeche)),
wirkt auf den Kolben die Kraft $F = p\cdot A$.

Nun dehnt sich das Gas aus und schiebt den Kolben um die kleine Strecke $\Delta s$ nach außen. Dabei
verrichtet das Gas Arbeit, nämlich Kraft mal Weg (siehe [4.1 Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit)).
Das Volumen wächst dabei um $\Delta V = A\cdot\Delta s$, denn der Kolben überstreicht einen flachen
Zylinder mit Grundfläche $A$ und Höhe $\Delta s$. Zusammen ergibt das:
$$W_\text{vom Gas} = F\cdot\Delta s = p\cdot A\cdot\Delta s = p\cdot\Delta V.$$
Dabei ist $p$ der Druck des Gases, $\Delta V$ die Volumenzunahme und $W_\text{vom Gas}$ die Arbeit,
die das Gas an seiner Umgebung verrichtet. Die Formel gilt, solange sich der Druck während der
Verschiebung nicht ändert.

```plot
x: [0, 10]
y: [0, 7]
gleich: true
hoehe: 300
strecken:
  - { von: [2, 0.5], nach: [2, 6.5], farbe: 0 }
  - { von: [6, 0.5], nach: [6, 6.5], farbe: 0 }
  - { von: [2, 0.5], nach: [6, 0.5], farbe: 0 }
  - { von: [2, 3.5], nach: [6, 3.5], farbe: 1 }
  - { von: [2, 4.5], nach: [6, 4.5], farbe: 1, gestrichelt: true }
vektoren:
  - { von: [4, 3.5], nach: [4, 5.8], label: "F = p·A", farbe: 2 }
punkte:
  - { x: 3, y: 2, label: "Gas mit Druck p" }
  - { x: 6.3, y: 4, label: "Δs" }
beschriftung: "Gas in einem Zylinder mit beweglichem Kolben (orange). Das Gas drückt mit der Kraft F = p·A nach oben. Schiebt es den Kolben um Δs bis zur gestrichelten Linie, wächst das Volumen um ΔV = A·Δs, und das Gas verrichtet die Arbeit p·ΔV."
```

:::beispiel[Ein Gas hebt einen Kolben]
In einem Zylinder mit der Kolbenfläche $A = 100\,\text{cm}^2$ hat ein Gas den konstanten Druck
$1{,}2\,\text{bar}$. Es schiebt den Kolben um $5{,}0\,\text{cm}$ nach außen. Wie viel Arbeit verrichtet es?

**Schritt 1, in SI-Einheiten umrechnen:** $p = 1{,}2\cdot 10^5\,\text{Pa}$,
$A = 100\cdot 10^{-4}\,\text{m}^2 = 0{,}010\,\text{m}^2$ und $\Delta s = 0{,}050\,\text{m}$.

**Schritt 2, Kraft mal Weg:** Die Kraft auf den Kolben ist
$F = pA = 1{,}2\cdot 10^5\,\text{N/m}^2\cdot 0{,}010\,\text{m}^2 = 1200\,\text{N}$. Die Arbeit ist
$W = F\,\Delta s = 1200\,\text{N}\cdot 0{,}050\,\text{m} = 60\,\text{J}$.

**Schritt 3, derselbe Weg über das Volumen:** $\Delta V = A\,\Delta s = 0{,}010\,\text{m}^2\cdot 0{,}050\,\text{m}
= 5{,}0\cdot 10^{-4}\,\text{m}^3 = 0{,}50\,\text{L}$. Dann ist
$p\,\Delta V = 1{,}2\cdot 10^5\,\text{Pa}\cdot 5{,}0\cdot 10^{-4}\,\text{m}^3 = 60\,\text{J}$.

**Antwort:** Das Gas verrichtet $60\,\text{J}$ Arbeit. Beide Rechenwege liefern dasselbe, weil $p\,\Delta V$
nur eine andere Schreibweise für Kraft mal Weg ist.
:::

:::merke[Praktische Umrechnung]
$1\,\text{bar}\cdot 1\,\text{L} = 10^5\,\text{Pa}\cdot 10^{-3}\,\text{m}^3 = 100\,\text{J}$. Im Beispiel:
$1{,}2\,\text{bar}\cdot 0{,}50\,\text{L} = 0{,}60\,\text{bar L} = 60\,\text{J}$.
:::

```aufgabe
id: p11-1-proportional
titel: Was passiert bei doppeltem Druck?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Gas dehnt sich bei konstantem Druck um $\Delta V$ aus und verrichtet dabei die Arbeit $W_\text{vom Gas}$. Nun wiederholt man den Versuch mit **doppeltem** Druck und **derselben** Volumenzunahme. Wie ändert sich die Arbeit des Gases?
teile:
  - typ: auswahl
    optionen:
      - "Sie verdoppelt sich."
      - "Sie vervierfacht sich."
      - "Sie bleibt gleich, weil sich das Volumen gleich stark ändert."
      - "Sie halbiert sich."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Quadrat kommt in $W_\text{vom Gas} = p\,\Delta V$ nicht vor. Die Arbeit ist proportional zum Druck, nicht zu seinem Quadrat.
      - wert: 2
        meldung: Die Volumenänderung ist gleich, aber der Kolben wird jetzt mit doppelter Kraft $F = pA$ über dieselbe Strecke geschoben. Doppelte Kraft mal gleicher Weg heißt doppelte Arbeit.
      - wert: 3
        meldung: Hier hast du Druck und Volumen verwechselt. Bei Boyle-Mariotte halbiert sich das Volumen, wenn sich der Druck verdoppelt. Hier ist aber $\Delta V$ fest vorgegeben.
hinweise:
  - 'Schau, wie $p$ in $W_\text{vom Gas} = p\,\Delta V$ vorkommt: als Faktor, im Quadrat oder im Nenner?'
loesung: |
  **Ansatz:** Bei konstantem Druck gilt $W_\text{vom Gas} = p\,\Delta V$. Die Arbeit ist also proportional zu $p$, wenn $\Delta V$ gleich bleibt.
  ---
  Doppelter Druck bedeutet doppelte Kraft auf den Kolben bei gleichem Weg. Die Arbeit verdoppelt sich. Im p-V-Diagramm wird das Rechteck doppelt so hoch und bleibt gleich breit.
```

### Die Vorzeichenkonvention dieses Kurses

Bei Wärme und Arbeit muss man immer sagen, in welche Richtung die Energie fließt. In der Wärmelehre gibt
es dafür zwei verbreitete Konventionen. Eine **Konvention** ist eine Vereinbarung, die man festlegt und
dann konsequent einhält. Wir verwenden durchgehend die in der Physik übliche Sicht des Gases: **Alles, was
dem Gas zugeführt wird, zählt positiv.** Man kann sich das Gas wie ein Bankkonto vorstellen. Einzahlungen
sind positiv, Abhebungen negativ.

:::definition[Vorzeichen von Wärme und Arbeit]
**Wärme $Q$:** $Q > 0$ heißt, dem Gas wird Wärme **zugeführt**. $Q < 0$ heißt, das Gas gibt Wärme ab.

**Arbeit $W$:** $W > 0$ heißt, **am** Gas wird Arbeit verrichtet. $W < 0$ heißt, das Gas verrichtet
selbst Arbeit nach außen.

Bei konstantem Druck gilt deshalb $W = -p\,\Delta V$. Das Minuszeichen sorgt dafür, dass eine Ausdehnung
($\Delta V > 0$) ein negatives $W$ ergibt.

**Beispiel:** In einer Fahrradpumpe drückst du die Luft zusammen. Das Volumen nimmt ab, also ist
$\Delta V < 0$ und $W = -p\,\Delta V > 0$. Du verrichtest Arbeit am Gas.

**Kein Beispiel für $W > 0$:** Im Motor schiebt das heiße Gas den Kolben hinaus. Das Gas „leistet“ hier
Arbeit, aber in unserer Konvention ist $W < 0$, weil das Gas Energie abgibt.
:::

In Technikbüchern zählt man oft die **vom** Gas verrichtete Arbeit positiv, weil man bei Motoren diese
Arbeit nutzen will. Wir schreiben sie, wenn wir sie brauchen, ausdrücklich als
$W_\text{vom Gas} = -W$. Das interaktive p-V-Diagramm in [11.4 Adiabatische Zustandsänderungen: ohne Wärmeaustausch](/lernen/physik1/hauptsaetze-waermekraftmaschinen/adiabatische-zustandsaenderungen-ohne-waermeaustausch) zeigt ebenfalls $W_\text{vom Gas}$.
Wichtig ist nur: Du entscheidest dich für **eine** Konvention und schreibst sie zu Beginn jeder Rechnung hin.

```aufgabe
id: p11-volumenarbeit-isobar
titel: Isobare Ausdehnung
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Gas dehnt sich bei konstantem Druck $p = 2{,}0\,\text{bar}$ von $3{,}0\,\text{L}$ auf $5{,}0\,\text{L}$ aus. Wie viel Arbeit verrichtet das Gas? Gib außerdem $W$ in der Konvention des Kurses (Arbeit am Gas) an.
teile:
  - typ: zahl
    label: vom Gas verrichtete Arbeit
    loesung: "2.0e5*(5.0e-3-3.0e-3)"
    einheit: "J"
    anzeige: '400'
    fehler:
      - wert: "2*2"
        meldung: Du hast bar und Liter direkt multipliziert. Das ergibt nicht Joule. Es gilt $1\,\text{bar}\cdot 1\,\text{L} = 100\,\text{J}$.
      - wert: "2.0e5*5.0e-3"
        meldung: Du hast mit dem Endvolumen gerechnet. Die Arbeit hängt von der **Volumenänderung** $\Delta V = V_2 - V_1$ ab.
  - typ: zahl
    label: W (am Gas)
    loesung: "-2.0e5*(5.0e-3-3.0e-3)"
    einheit: "J"
    anzeige: '-400'
    fehler:
      - wert: "400"
        meldung: Das Gas dehnt sich aus und gibt Energie ab. In der Kurskonvention ist die Arbeit **am** Gas dann negativ.
hinweise:
  - 'Bei konstantem Druck gilt $W_\text{vom Gas} = p\,\Delta V$. Rechne in SI-Einheiten oder nutze $1\,\text{bar L} = 100\,\text{J}$.'
loesung: |
  **Ansatz:** Der Druck ist konstant, also gilt $W_\text{vom Gas} = p\,\Delta V$ mit $\Delta V = 5{,}0\,\text{L} - 3{,}0\,\text{L} = 2{,}0\,\text{L}$.
  ---
  $W_\text{vom Gas} = 2{,}0\cdot 10^5\,\text{Pa}\cdot 2{,}0\cdot 10^{-3}\,\text{m}^3 = 400\,\text{J}$.
  ---
  In der Kurskonvention ist $W = -p\,\Delta V = -400\,\text{J}$. Das Gas hat Energie als Arbeit abgegeben, deshalb ist das Vorzeichen negativ.
```

:::achtung[Fehler: Vorzeichen der Arbeit bei der Ausdehnung]
Ein Gas dehnt sich bei konstant $1{,}0\,\text{bar}$ um $2{,}0\,\text{L}$ aus. Ein Schüler schreibt:
„$W = p\,\Delta V = 1{,}0\,\text{bar}\cdot 2{,}0\,\text{L} = +200\,\text{J}$, also wird am Gas Arbeit verrichtet.“

Die Zahl $200\,\text{J}$ stimmt, das Vorzeichen nicht. Das Gas schiebt die Umgebung weg und gibt dabei
Energie ab. Richtig ist $W = -p\,\Delta V = -200\,\text{J}$ (am Gas) beziehungsweise
$W_\text{vom Gas} = +200\,\text{J}$. Frag dich bei jeder Rechnung: Bekommt das Gas Energie oder gibt es welche ab?
:::

:::achtung[Fehler: bar und Liter nicht umgerechnet]
Eine Schülerin rechnet für eine Ausdehnung bei $3{,}0\,\text{bar}$ um $2{,}0\,\text{L}$:
„$W_\text{vom Gas} = 3{,}0\cdot 2{,}0 = 6{,}0\,\text{J}$.“

Bar mal Liter ist aber nicht Joule. Richtig ist
$3{,}0\cdot 10^5\,\text{Pa}\cdot 2{,}0\cdot 10^{-3}\,\text{m}^3 = 600\,\text{J}$. Das Ergebnis ist hundertmal
größer. Wer die Merkregel „$1\,\text{bar L} = 100\,\text{J}$“ kennt, findet den Fehler sofort.
:::

```aufgabe
id: p11-1-kompression
titel: Ein Gas wird zusammengedrückt
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Gas wird bei konstant $1{,}5\,\text{bar}$ von $6{,}0\,\text{L}$ auf $4{,}0\,\text{L}$ zusammengedrückt. Wie groß ist die Arbeit $W$ am Gas (Kurskonvention)?
teile:
  - typ: zahl
    loesung: "-1.5e5*(4.0e-3-6.0e-3)"
    einheit: "J"
    anzeige: '300'
    fehler:
      - wert: "-300"
        meldung: Das Vorzeichen stimmt nicht. Bei einer Kompression wird **am** Gas Arbeit verrichtet, also ist $W$ positiv. Beachte $\Delta V = V_2 - V_1 < 0$.
      - wert: "3"
        meldung: Du hast bar mal Liter als Joule genommen. Es gilt $1\,\text{bar L} = 100\,\text{J}$.
hinweise:
  - '$W = -p\,\Delta V$ mit $\Delta V = V_\text{Ende} - V_\text{Anfang}$. Hier ist $\Delta V$ negativ.'
loesung: |
  **Ansatz:** Konstanter Druck, also $W = -p\,\Delta V$. Die Volumenänderung ist $\Delta V = 4{,}0\,\text{L} - 6{,}0\,\text{L} = -2{,}0\,\text{L} = -2{,}0\cdot 10^{-3}\,\text{m}^3$.
  ---
  $W = -1{,}5\cdot 10^5\,\text{Pa}\cdot(-2{,}0\cdot 10^{-3}\,\text{m}^3) = +300\,\text{J}$. Am Gas werden $300\,\text{J}$ Arbeit verrichtet, das passt zu einer Kompression.
```

### Arbeit als Fläche im p-V-Diagramm

Ein **p-V-Diagramm** trägt den Druck $p$ nach oben und das Volumen $V$ nach rechts auf. Jeder Punkt
darin ist ein **Zustand** des Gases, also eine Kombination aus Druck und Volumen. Kennt man die
Stoffmenge, liegt damit über $pV = nRT$ auch die Temperatur fest. Ändert das Gas seinen Zustand,
wandert der Punkt entlang einer Kurve. Diese Kurve beschreibt den **Prozess**.

Bei konstantem Druck ist die Kurve eine waagrechte Linie. Die Arbeit $p\cdot\Delta V$ ist dann genau die
Fläche des Rechtecks unter dieser Linie: Höhe $p$ mal Breite $\Delta V$. Ändert sich der Druck während
der Ausdehnung, zerlegt man den Weg in viele schmale Streifen. In jedem Streifen ist der Druck fast
konstant, und seine Arbeit ist die Streifenfläche. Die Summe aller Streifen ist die Fläche unter der
Kurve. Mathematisch ist das ein Integral:
$$W_\text{vom Gas} = \int_{V_1}^{V_2} p\,\dd V.$$
Dabei ist $V_1$ das Anfangs- und $V_2$ das Endvolumen. Das Integral liest man „Integral von $p$ nach $V$
von $V_1$ bis $V_2$“. Es bedeutet nichts anderes als „Fläche unter der Kurve $p(V)$“. Mehr dazu steht im
Mathematikkurs in
[10.9 Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit).

```plot
x: [0, 7]
y: [0, 5]
hoehe: 300
achsen: { x: "V in L", y: "p in bar" }
graphen:
  - { f: "6/x", label: "p(V)", farbe: 0, von: 1.5, bis: 6 }
flaechen:
  - { f: "6/x", g: "0", von: 1.5, bis: 5, farbe: 0 }
punkte:
  - { x: 1.5, y: 4, label: "Anfang" }
  - { x: 5, y: 1.2, label: "Ende" }
strecken:
  - { von: [1.5, 0], nach: [1.5, 4], gestrichelt: true }
  - { von: [5, 0], nach: [5, 1.2], gestrichelt: true }
beschriftung: "Ein Gas dehnt sich vom Anfangs- zum Endzustand aus, der Druck fällt dabei. Die blau gefärbte Fläche unter der Kurve zwischen Anfangs- und Endvolumen ist die Arbeit, die das Gas verrichtet."
```

Daraus folgen drei Regeln, die du in jeder Aufgabe brauchst:

1. **Nach rechts** (Ausdehnung): Das Gas verrichtet Arbeit, also ist $W < 0$ und $W_\text{vom Gas} > 0$.
2. **Nach links** (Kompression): Am Gas wird Arbeit verrichtet, also ist $W > 0$.
3. **Senkrecht** (Volumen konstant): Es gibt keine Fläche, also ist $W = 0$. Ohne Volumenänderung keine Volumenarbeit.

:::beispiel[Zwei Wege, verschiedene Arbeit]
Ein Gas soll vom Zustand A ($2{,}0\,\text{L}$, $3{,}0\,\text{bar}$) in den Zustand B ($5{,}0\,\text{L}$,
$1{,}0\,\text{bar}$) gebracht werden. Wir vergleichen zwei Wege.

**Weg I:** Zuerst dehnt sich das Gas bei konstant $3{,}0\,\text{bar}$ von $2{,}0$ auf $5{,}0\,\text{L}$ aus.
Dann wird es bei konstantem Volumen abgekühlt, bis der Druck auf $1{,}0\,\text{bar}$ gefallen ist. Arbeit
gibt es nur im ersten Teil:
$W_\text{vom Gas} = 3{,}0\cdot 10^5\,\text{Pa}\cdot 3{,}0\cdot 10^{-3}\,\text{m}^3 = 900\,\text{J}$.

**Weg II:** Zuerst wird das Gas bei konstantem Volumen abgekühlt, bis der Druck $1{,}0\,\text{bar}$ beträgt.
Dann dehnt es sich bei $1{,}0\,\text{bar}$ auf $5{,}0\,\text{L}$ aus. Jetzt ist
$W_\text{vom Gas} = 1{,}0\cdot 10^5\,\text{Pa}\cdot 3{,}0\cdot 10^{-3}\,\text{m}^3 = 300\,\text{J}$.

**Ergebnis:** Gleicher Anfang, gleiches Ende, aber dreimal so viel Arbeit auf Weg I. Im Diagramm sieht man
es sofort: Unter Weg I liegt ein hohes Rechteck, unter Weg II ein flaches.
:::

```plot
x: [0, 6]
y: [0, 4]
hoehe: 280
achsen: { x: "V in L", y: "p in bar" }
strecken:
  - { von: [2, 3], nach: [5, 3], farbe: 0 }
  - { von: [5, 3], nach: [5, 1], farbe: 0 }
  - { von: [2, 3], nach: [2, 1], farbe: 1, gestrichelt: true }
  - { von: [2, 1], nach: [5, 1], farbe: 1, gestrichelt: true }
punkte:
  - { x: 2, y: 3, label: "A" }
  - { x: 5, y: 1, label: "B" }
  - { x: 3.5, y: 3.3, label: "Weg I" }
  - { x: 3.5, y: 0.7, label: "Weg II" }
beschriftung: "Zwei Wege von A nach B im p-V-Diagramm. Weg I (blau) dehnt sich bei 3 bar aus und kühlt dann ab, die Fläche darunter entspricht 900 J. Weg II (orange, gestrichelt) kühlt zuerst ab und dehnt sich bei 1 bar aus, die Fläche entspricht nur 300 J."
```

Was zeigt das Beispiel? Die Arbeit hängt vom **Weg** ab, nicht nur von Anfang und Ende. Eine Größe mit
dieser Eigenschaft heißt **Prozessgröße**. Arbeit und Wärme sind Prozessgrößen. Ein Gas „hat“ deshalb
keine Arbeit und keine Wärme. Es tauscht sie nur aus, während sich sein Zustand ändert.

Das Gegenstück heißt **Zustandsgröße**. Ihr Wert hängt nur vom momentanen Zustand ab, nicht davon, wie
das Gas dorthin gekommen ist. Beispiele sind Druck, Volumen, Temperatur und innere Energie. Ein Bild aus
dem Alltag hilft: Bei einer Wanderung hängt der **Höhenunterschied** zwischen Start und Gipfel nur von
den beiden Orten ab. Die **gegangene Strecke** hängt dagegen vom gewählten Weg ab. Der Höhenunterschied
entspricht einer Zustandsgröße, die Strecke einer Prozessgröße.

```reflexion
frage: Ein Gas strömt aus einer Hälfte eines isolierten Behälters durch ein Loch in die andere, leere Hälfte (Vakuum). Sein Volumen verdoppelt sich. Wie viel Volumenarbeit verrichtet das Gas dabei? Begründe mit der Herleitung von $W_\text{vom Gas} = p\,\Delta V$ aus „Kraft mal Weg“.
antwort: |
  Keine. Die Formel $W = F\cdot\Delta s$ setzt voraus, dass das Gas gegen eine Kraft drückt, etwa gegen einen Kolben.
  Im Vakuum gibt es nichts, was dagegenhält. Das Gas schiebt keinen Kolben und hebt kein Gewicht, also überträgt es
  keine Energie als Arbeit. Entscheidend ist der Druck, **gegen** den sich das Gas ausdehnt, und der ist hier null.
  Diesen Vorgang nennt man freie Expansion. Er spielt beim zweiten Hauptsatz noch eine Rolle.
```

:::merke[Volumenarbeit berechnen]
1. Lege die Konvention fest: $W$ ist die Arbeit **am** Gas, $W_\text{vom Gas} = -W$.
2. Rechne Druck und Volumen in Pa und $\text{m}^3$ um oder nutze $1\,\text{bar L} = 100\,\text{J}$.
3. Bei konstantem Druck: $W_\text{vom Gas} = p\,\Delta V$. Sonst: Fläche unter der Kurve im p-V-Diagramm.
4. Vorzeichen prüfen: Ausdehnung bedeutet $W < 0$, Kompression $W > 0$, konstantes Volumen $W = 0$.
:::

### Aufgaben zur Volumenarbeit

```aufgabe
id: p11-1-diagramm-lesen
titel: Arbeit aus einem p-V-Diagramm ablesen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Gas dehnt sich so aus, dass sein Zustand im p-V-Diagramm auf einer geraden Linie von $(1{,}0\,\text{L}\mid 4{,}0\,\text{bar})$ nach $(4{,}0\,\text{L}\mid 1{,}0\,\text{bar})$ wandert. Wie viel Arbeit verrichtet das Gas? Gib das Ergebnis in Joule an.
plot:
  x: [0, 5]
  y: [0, 5]
  achsen: { x: "V in L", y: "p in bar" }
  graphen:
    - { f: "5 - x", farbe: 0, von: 1, bis: 4 }
  flaechen:
    - { f: "5 - x", g: "0", von: 1, bis: 4, farbe: 0 }
  punkte:
    - { x: 1, y: 4, label: "Anfang" }
    - { x: 4, y: 1, label: "Ende" }
teile:
  - typ: zahl
    loesung: "(4+1)/2*1e5*(4-1)*1e-3"
    einheit: "J"
    anzeige: '750'
    fehler:
      - wert: "4e5*3e-3"
        meldung: Du hast das Rechteck mit dem Anfangsdruck $4\,\text{bar}$ genommen. Der Druck fällt aber während der Ausdehnung. Die Fläche unter der schrägen Linie ist ein Trapez.
      - wert: "1e5*3e-3"
        meldung: Du hast nur mit dem Enddruck gerechnet. Die Fläche unter der Linie ist größer, sie ist ein Trapez zwischen $1$ und $4\,\text{bar}$ hoch.
      - wert: "7.5"
        meldung: Die Fläche ist $7{,}5\,\text{bar L}$. Das musst du noch in Joule umrechnen, $1\,\text{bar L} = 100\,\text{J}$.
hinweise:
  - Die Arbeit ist die Fläche unter der Linie. Welche Form hat diese Fläche?
  - 'Die Fläche ist ein Trapez. Ihr Inhalt ist mittlere Höhe mal Breite: $\tfrac{p_1 + p_2}{2}\cdot\Delta V$.'
gefuehrt:
  - text: Wie groß ist die Volumenänderung in Litern?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: $\Delta V = 4{,}0\,\text{L} - 1{,}0\,\text{L} = 3{,}0\,\text{L}$. Das ist die Breite der Fläche.
  - text: Welcher Druck in bar ist der Mittelwert aus Anfangs- und Enddruck?
    teil: { typ: zahl, loesung: "(4+1)/2" }
    erklaerung: Weil die Linie gerade ist, ist die Trapezfläche so groß wie ein Rechteck mit der mittleren Höhe $\tfrac{4{,}0 + 1{,}0}{2} = 2{,}5\,\text{bar}$.
  - text: Wie groß ist die Fläche in bar mal Liter?
    teil: { typ: zahl, loesung: "2.5*3" }
    erklaerung: $2{,}5\,\text{bar}\cdot 3{,}0\,\text{L} = 7{,}5\,\text{bar L}$.
  - text: Rechne in Joule um.
    teil: { typ: zahl, loesung: "7.5*100" }
    erklaerung: Mit $1\,\text{bar L} = 100\,\text{J}$ ergibt das $750\,\text{J}$. Weil sich das Gas ausdehnt, gibt es diese Arbeit ab.
loesung: |
  **Ansatz:** Die vom Gas verrichtete Arbeit ist die Fläche unter der Kurve im p-V-Diagramm. Unter einer geraden Linie ist diese Fläche ein Trapez.
  ---
  **Fläche:** Mittlere Höhe $\tfrac{4{,}0 + 1{,}0}{2}\,\text{bar} = 2{,}5\,\text{bar}$, Breite $3{,}0\,\text{L}$. Also $2{,}5\,\text{bar}\cdot 3{,}0\,\text{L} = 7{,}5\,\text{bar L}$.
  ---
  **Umrechnung:** $7{,}5\,\text{bar L} = 2{,}5\cdot 10^5\,\text{Pa}\cdot 3{,}0\cdot 10^{-3}\,\text{m}^3 = 750\,\text{J}$.
  ---
  **Plausibilität:** Das Ergebnis liegt zwischen dem kleinen Rechteck mit $1\,\text{bar}$ ($300\,\text{J}$) und dem großen mit $4\,\text{bar}$ ($1200\,\text{J}$). Das muss so sein, weil die Linie zwischen diesen beiden Drücken verläuft.
```

```aufgabe
id: p11-1-wegabhaengig
titel: Welcher Weg liefert mehr Arbeit?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Gas soll vom Zustand P ($1\,\text{L}$, $2\,\text{bar}$) in den Zustand Q ($4\,\text{L}$, $2\,\text{bar}$) gebracht werden. Weg 1 ist die waagrechte Linie bei $2\,\text{bar}$. Weg 2 führt zuerst senkrecht hinauf auf $4\,\text{bar}$, dann waagrecht nach $4\,\text{L}$ und zuletzt senkrecht hinunter nach Q. Welche Aussage stimmt?
plot:
  x: [0, 5]
  y: [0, 5]
  achsen: { x: "V in L", y: "p in bar" }
  strecken:
    - { von: [1, 2], nach: [4, 2], farbe: 0 }
    - { von: [1, 2], nach: [1, 4], farbe: 1, gestrichelt: true }
    - { von: [1, 4], nach: [4, 4], farbe: 1, gestrichelt: true }
    - { von: [4, 4], nach: [4, 2], farbe: 1, gestrichelt: true }
  punkte:
    - { x: 1, y: 2, label: "P" }
    - { x: 4, y: 2, label: "Q" }
teile:
  - typ: auswahl
    optionen:
      - "Beide Wege liefern dieselbe Arbeit, weil Anfang und Ende gleich sind."
      - "Auf Weg 2 verrichtet das Gas doppelt so viel Arbeit wie auf Weg 1."
      - "Auf Weg 2 verrichtet das Gas mehr Arbeit, weil der Weg im Diagramm länger ist."
      - "Auf Weg 1 verrichtet das Gas mehr Arbeit, weil der Druck dort konstant bleibt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das gilt für Zustandsgrößen wie die Temperatur. Arbeit ist eine Prozessgröße und hängt vom Weg ab. Vergleiche die Flächen unter den beiden Wegen.
      - wert: 2
        meldung: Die Länge der Linie im Diagramm zählt nicht. Die senkrechten Stücke liefern gar keine Arbeit. Entscheidend ist die Fläche unter dem waagrechten Stück.
      - wert: 3
        meldung: Ein konstanter Druck bedeutet nicht mehr Arbeit. Auf Weg 2 dehnt sich das Gas bei $4\,\text{bar}$ aus, also gegen den höheren Druck.
hinweise:
  - Senkrechte Stücke im p-V-Diagramm liefern keine Arbeit, weil sich das Volumen nicht ändert.
  - Vergleiche die Rechtecke unter den waagrechten Stücken. Beide sind $3\,\text{L}$ breit.
loesung: |
  **Ansatz:** Arbeit ist die Fläche unter dem Weg. Senkrechte Stücke tragen nichts bei, weil dort $\Delta V = 0$ ist.
  ---
  **Weg 1:** Rechteck $2\,\text{bar}\cdot 3\,\text{L} = 6\,\text{bar L} = 600\,\text{J}$. **Weg 2:** Die Ausdehnung geschieht bei $4\,\text{bar}$, also $4\,\text{bar}\cdot 3\,\text{L} = 12\,\text{bar L} = 1200\,\text{J}$.
  ---
  **Antwort:** Auf Weg 2 verrichtet das Gas doppelt so viel Arbeit. Anfang und Ende sind gleich, die Arbeit nicht. Arbeit ist eine Prozessgröße.
```

```aufgabe
id: p11-1-kolben-hub
titel: Ein Gas hebt einen schweren Kolben
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein senkrechter Zylinder ist oben offen. Ein frei beweglicher Kolben mit der Masse $20\,\text{kg}$ und der Fläche $50\,\text{cm}^2$ schließt das Gas darunter ab. Außen herrscht der Luftdruck $1{,}0\,\text{bar}$. Das Gas wird langsam erwärmt, und der Kolben steigt um $10\,\text{cm}$ ($g = 9{,}81\,\text{m/s}^2$).

  a) Welcher Druck herrscht im Gas, solange der Kolben in Ruhe oder gleichförmig bewegt ist? Gib ihn in Pa an.

  b) Wie viel Arbeit verrichtet das Gas insgesamt?

  c) Welcher Teil davon steckt in der Lageenergie des Kolbens?
teile:
  - typ: zahl
    label: a) Druck im Gas
    loesung: "1e5+20*9.81/50e-4"
    einheit: "Pa"
    anzeige: '1{,}39\cdot 10^{5}'
  - typ: zahl
    label: b) Arbeit des Gases
    loesung: "(1e5+20*9.81/50e-4)*50e-4*0.10"
    einheit: "J"
    anzeige: '69{,}6'
  - typ: zahl
    label: c) Hubarbeit am Kolben
    loesung: "20*9.81*0.10"
    einheit: "J"
    anzeige: '19{,}6'
hinweise:
  - 'Zeichne die Kräfte auf den Kolben: Gas drückt nach oben, Luft drückt nach unten, die Erde zieht nach unten. Der Kolben ist im Gleichgewicht.'
  - 'Aus dem Gleichgewicht folgt $p\,A = p_0\,A + m g$. Die Arbeit ist dann $p\,\Delta V$ mit $\Delta V = A\cdot\Delta s$.'
loesung: |
  **Modell:** Der Kolben bewegt sich langsam und gleichförmig. Nach dem ersten Newtonschen Axiom ist die resultierende Kraft auf ihn null (siehe [3.1 Kraft und Trägheit: das erste Newtonsche Axiom](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom)). Nach oben drückt das Gas mit $pA$. Nach unten drücken die Luft mit $p_0A$ und die Gewichtskraft $mg$.
  ---
  **a)** Aus $pA = p_0A + mg$ folgt $p = p_0 + \dfrac{mg}{A} = 1{,}0\cdot 10^5\,\text{Pa} + \dfrac{20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{5{,}0\cdot 10^{-3}\,\text{m}^2} = 1{,}0\cdot 10^5\,\text{Pa} + 39\,240\,\text{Pa} = 1{,}39\cdot 10^5\,\text{Pa}$.
  ---
  **b)** Der Druck bleibt konstant. $\Delta V = A\,\Delta s = 5{,}0\cdot 10^{-3}\,\text{m}^2\cdot 0{,}10\,\text{m} = 5{,}0\cdot 10^{-4}\,\text{m}^3$. Also $W_\text{vom Gas} = p\,\Delta V = 1{,}392\cdot 10^5\,\text{Pa}\cdot 5{,}0\cdot 10^{-4}\,\text{m}^3 = 69{,}6\,\text{J}$.
  ---
  **c)** Die Hubarbeit am Kolben ist $m g\,\Delta s = 20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}10\,\text{m} = 19{,}6\,\text{J}$.
  ---
  **Deutung:** Die übrigen $69{,}6\,\text{J} - 19{,}6\,\text{J} = 50{,}0\,\text{J}$ verrichtet das Gas gegen die äußere Luft, nämlich $p_0\,\Delta V = 10^5\,\text{Pa}\cdot 5{,}0\cdot 10^{-4}\,\text{m}^3 = 50\,\text{J}$. Die Summe stimmt, die Rechnung ist also konsistent.
```

## Der erste Hauptsatz: Energiebilanz eines Gases

```aufgabe
id: p11-2-check
art: check
titel: "Vorwissen: Wärme oder innere Energie?"
niveau: 1
angabe: |
  Welche Aussage verwendet die Begriffe **Wärme** und **innere Energie** physikalisch richtig?
teile:
  - typ: auswahl
    optionen:
      - "Eine Tasse Tee enthält viel Wärme."
      - "Die heiße Herdplatte überträgt Wärme auf den Topf, dadurch steigt die innere Energie des Wassers."
      - "Ein Eisblock hat keine innere Energie, weil er kalt ist."
      - "Wärme und innere Energie sind zwei Namen für dasselbe."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein Körper **enthält** keine Wärme, er hat innere Energie. Wärme ist nur die Energie, die gerade wegen eines Temperaturunterschieds übertragen wird.
      - wert: 2
        meldung: Auch kaltes Eis hat innere Energie, denn seine Teilchen schwingen um ihre Plätze. Erst am absoluten Nullpunkt wäre die Teilchenbewegung so klein wie überhaupt möglich.
      - wert: 3
        meldung: Innere Energie ist der Energievorrat eines Körpers, Wärme ist ein Energiefluss. Bei einem Bankkonto entspricht die innere Energie dem Kontostand und die Wärme einer Überweisung.
hinweise:
  - Wärme ist Energie, die **unterwegs** ist. Innere Energie ist Energie, die ein Körper **hat**.
loesung: |
  Innere Energie ist die gesamte Energie der Teilchen eines Körpers, also ein Vorrat. Wärme ist die Energie, die wegen eines Temperaturunterschieds von einem Körper zum anderen fließt.
  ---
  Richtig ist deshalb: Die Herdplatte überträgt Wärme, und die innere Energie des Wassers steigt. Wiederholen: [10.3 Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme).
```

**Worum geht es?** Die innere Energie eines Gases lässt sich auf genau zwei Wegen ändern: durch Wärme
und durch Arbeit. Der erste Hauptsatz schreibt diese Bilanz als Formel. Er ist nichts anderes als der
Energieerhaltungssatz aus der Mechanik, erweitert um die Wärme.

### Zwei Wege zur warmen Luft

Du willst die Luft in einer Fahrradpumpe erwärmen. Du hast zwei Möglichkeiten. Du kannst die Pumpe in
die Sonne legen, dann fließt Wärme hinein. Oder du drückst den Kolben schnell hinunter, dann verrichtest
du Arbeit an der Luft. In beiden Fällen wird die Luft wärmer, ihre innere Energie steigt.

Am Ende kann man der Luft nicht ansehen, auf welchem Weg sie warm geworden ist. Die innere Energie ist
eine **Zustandsgröße**, ihr Wert hängt nur vom Zustand ab. Wärme und Arbeit sind dagegen **Prozessgrößen**:
Sie beschreiben, wie Energie über die Grenze des Gases fließt (siehe
[11.1 Arbeit am Gas](/lernen/physik1/hauptsaetze-waermekraftmaschinen/arbeit-am-gas-volumenarbeit-und-das-p-v-diagramm)).

:::satz[Erster Hauptsatz der Wärmelehre]
Die Änderung der inneren Energie eines Systems ist gleich der zugeführten Wärme plus der am System
verrichteten Arbeit:
$$\Delta U = Q + W.$$
Dabei ist $\Delta U = U_\text{Ende} - U_\text{Anfang}$ die Änderung der inneren Energie, $Q$ die
zugeführte Wärme und $W$ die **am** System verrichtete Arbeit. Energie wird weder erzeugt noch vernichtet,
sie wird nur übertragen oder umgewandelt.
:::

Das Bankkonto-Bild aus [11.1 Arbeit am Gas](/lernen/physik1/hauptsaetze-waermekraftmaschinen/arbeit-am-gas-volumenarbeit-und-das-p-v-diagramm) passt genau. Der Kontostand ist die innere Energie $U$.
Wärme und Arbeit sind zwei Arten von Überweisungen. Was hineinkommt, zählt positiv, was hinausgeht,
negativ. Die Änderung des Kontostands ist die Summe aller Überweisungen.

```plot
x: [0, 10]
y: [0, 6]
gleich: true
hoehe: 260
strecken:
  - { von: [3.5, 1.5], nach: [6.5, 1.5], farbe: 0 }
  - { von: [6.5, 1.5], nach: [6.5, 4.5], farbe: 0 }
  - { von: [6.5, 4.5], nach: [3.5, 4.5], farbe: 0 }
  - { von: [3.5, 4.5], nach: [3.5, 1.5], farbe: 0 }
vektoren:
  - { von: [0.5, 3.8], nach: [3.4, 3.8], label: "Q > 0 (zugeführt)", farbe: 1 }
  - { von: [0.5, 2.2], nach: [3.4, 2.2], label: "W > 0 (am Gas)", farbe: 2 }
  - { von: [6.6, 3], nach: [9.5, 3], label: "Abgabe: negativ", farbe: 3 }
punkte:
  - { x: 5, y: 3, label: "Gas: U" }
beschriftung: "Energiebilanz eines Gases. Zugeführte Wärme und am Gas verrichtete Arbeit zählen positiv. Was das Gas abgibt, zählt negativ. Die Summe ist die Änderung ΔU der inneren Energie."
```

:::beispiel[Energiebilanz beim Erwärmen und Ausdehnen]
Einem Gas werden $800\,\text{J}$ Wärme zugeführt. Gleichzeitig dehnt es sich aus und verrichtet dabei
$300\,\text{J}$ Arbeit an seiner Umgebung. Wie ändert sich seine innere Energie?

**Schritt 1, Vorzeichen festlegen:** Die Wärme wird zugeführt, also $Q = +800\,\text{J}$. Das Gas gibt
Arbeit ab, also ist die Arbeit **am** Gas negativ: $W = -300\,\text{J}$.

**Schritt 2, erster Hauptsatz:** $\Delta U = Q + W = 800\,\text{J} + (-300\,\text{J}) = 500\,\text{J}$.

**Antwort:** Die innere Energie steigt um $500\,\text{J}$. Von der zugeführten Wärme bleiben $500\,\text{J}$
im Gas, $300\,\text{J}$ gibt es als Arbeit weiter. Die Temperatur steigt, weil $\Delta U > 0$ ist.
:::

:::achtung[Fehler: zwei Vorzeichenkonventionen gemischt]
Ein Schüler rechnet für das Gas aus dem Beispiel: „$\Delta U = Q + W = 800\,\text{J} + 300\,\text{J} = 1100\,\text{J}$.“

Er hat die Formel der Kurskonvention verwendet, aber für $W$ die Arbeit **vom** Gas eingesetzt. So zählt
die abgegebene Arbeit, als wäre sie hineingeflossen. Richtig ist $W = -300\,\text{J}$ und
$\Delta U = 500\,\text{J}$. Die Probe mit Hausverstand hilft: Ein Gas, das Arbeit abgibt, kann dadurch
nicht mehr Energie bekommen.
:::

Viele Technikbücher schreiben den ersten Hauptsatz als $\Delta U = Q - W_\text{vom Gas}$. Weil
$W_\text{vom Gas} = -W$ ist, sagt diese Form genau dasselbe. Du darfst jede der beiden Formen verwenden.
Du darfst sie nur nicht in einer Rechnung mischen.

### Die innere Energie des idealen Gases

Für ein ideales Gas weißt du aus
[10.11 Kinetische Gastheorie](/lernen/physik1/temperatur-waerme-gase/kinetische-gastheorie),
dass die innere Energie **nur von der Temperatur** abhängt:
$$U = \frac f2\,nRT, \qquad \Delta U = \frac f2\,nR\,\Delta T = n\,C_V\,\Delta T.$$
Dabei ist $n$ die Stoffmenge in mol, $R = 8{,}314\,\text{J/(mol K)}$ die Gaskonstante und $T$ die
Temperatur in Kelvin. Die Zahl $f$ zählt die **Freiheitsgrade**, also die Arten, wie ein Teilchen Energie
speichern kann. Für einatomige Gase wie Helium und Argon ist $f = 3$. Für zweiatomige Gase wie Stickstoff,
Sauerstoff und Luft ist bei Zimmertemperatur $f = 5$.

Die Abkürzung $C_V = \tfrac f2 R$ heißt **molare Wärmekapazität bei konstantem Volumen**. Sie gibt an, wie
viel Energie ein Mol Gas pro Kelvin Erwärmung aufnimmt, wenn sein Volumen gleich bleibt. Für einatomige
Gase ist $C_V = \tfrac32 R = 12{,}5\,\text{J/(mol K)}$, für Luft $C_V = \tfrac52 R = 20{,}8\,\text{J/(mol K)}$.

:::beispiel[Wie viel innere Energie gewinnt Luft beim Erwärmen?]
$0{,}50\,\text{mol}$ Luft werden um $30\,\text{K}$ erwärmt. Um wie viel steigt ihre innere Energie?

**Schritt 1, Freiheitsgrade:** Luft ist zweiatomig, also $f = 5$ und $C_V = \tfrac52 R$.

**Schritt 2, einsetzen:** $\Delta U = \tfrac52\cdot 0{,}50\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 30\,\text{K}
= 311{,}8\,\text{J} \approx 312\,\text{J}$. Mol und Kelvin kürzen sich, es bleibt Joule.

**Schritt 3, Deutung:** Das Ergebnis gilt für **jeden** Weg, auf dem die Luft um $30\,\text{K}$ wärmer
wird. Ob durch Wärme, durch Arbeit oder durch beides, ist für $\Delta U$ gleichgültig. Wie sich die
$312\,\text{J}$ auf $Q$ und $W$ aufteilen, hängt dagegen vom Weg ab.
:::

Eine wichtige Folgerung: Bleibt die Temperatur eines idealen Gases gleich, dann ändert sich seine innere
Energie nicht, $\Delta U = 0$. Das gilt auch, wenn dabei Wärme und Arbeit fließen. Dann gleichen sie
sich genau aus.

:::achtung[Fehler: „Keine Wärme, also keine Erwärmung“]
In einem gut isolierten Zylinder wird Luft schnell zusammengedrückt. Am Gas werden $150\,\text{J}$ Arbeit
verrichtet, Wärme fließt keine. Eine Schülerin schreibt: „$Q = 0$, also bleibt die Temperatur gleich.“

Das verwechselt Wärme mit Temperatur. Nach dem ersten Hauptsatz ist $\Delta U = Q + W = 0 + 150\,\text{J}
= +150\,\text{J}$. Die innere Energie steigt, also wird die Luft wärmer. Temperatur kann man auch durch
Arbeit erhöhen, ganz ohne Wärme. Genau deshalb wird eine Fahrradpumpe beim Pumpen warm.
:::

### Kein Perpetuum mobile erster Art

Ein **Perpetuum mobile** (lateinisch „das sich ständig Bewegende“) ist eine erträumte Maschine, die
ohne Ende Arbeit liefert. Ein **Perpetuum mobile erster Art** würde diese Arbeit abgeben, ohne dass man
ihr Energie zuführt. Der erste Hauptsatz verbietet das.

Die Begründung: Eine Maschine, die dauernd laufen soll, muss immer wieder in ihren Anfangszustand
zurückkehren. Man sagt, sie durchläuft einen **Kreisprozess**. Nach einem vollen Umlauf ist die innere
Energie wieder dieselbe, also $\Delta U = 0$. Aus $0 = Q + W$ folgt $W_\text{vom Gas} = -W = Q$. Jedes
Joule Arbeit, das die Maschine abgibt, muss also vorher als Wärme hineingeflossen sein. Ohne Zufuhr gibt
es keine Arbeit.

```reflexion
frage: Ein Gas wird bei konstanter Temperatur langsam zusammengedrückt. Am Gas werden dabei $200\,\text{J}$ Arbeit verrichtet. Gibt das Gas Wärme ab oder nimmt es Wärme auf, und wie viel? Begründe mit dem ersten Hauptsatz.
antwort: |
  Bei konstanter Temperatur ändert sich die innere Energie eines idealen Gases nicht, also ist $\Delta U = 0$. Aus
  $0 = Q + W$ folgt $Q = -W = -200\,\text{J}$. Das Gas gibt also $200\,\text{J}$ Wärme an die Umgebung ab. Die Energie,
  die als Arbeit hineinkommt, fließt sofort als Wärme wieder hinaus. Nur deshalb kann die Temperatur gleich bleiben.
```

:::merke[Mit dem ersten Hauptsatz rechnen]
1. Schreib die Konvention hin: $\Delta U = Q + W$, $Q$ zugeführt, $W$ am Gas.
2. Gib jeder Größe ihr Vorzeichen: zugeführt oder am Gas positiv, abgegeben oder vom Gas negativ.
3. Beim idealen Gas gilt zusätzlich $\Delta U = \tfrac f2\,nR\,\Delta T$, mit $f = 3$ oder $f = 5$.
4. Probe: Passt das Vorzeichen von $\Delta U$ dazu, ob das Gas wärmer oder kälter wird?
:::

### Aufgaben zum ersten Hauptsatz

```aufgabe
id: p11-erster-hauptsatz
titel: Energiebilanz eines Gases
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Einem Gas werden $500\,\text{J}$ Wärme zugeführt. Gleichzeitig dehnt es sich aus und verrichtet dabei $200\,\text{J}$ Arbeit an der Umgebung. Um wie viel ändert sich seine innere Energie?
teile:
  - typ: zahl
    loesung: "500-200"
    einheit: "J"
    anzeige: '300'
    fehler:
      - wert: "500+200"
        meldung: Du hast die abgegebene Arbeit positiv gezählt. Das Gas verrichtet Arbeit, also verliert es Energie. Die Arbeit **am** Gas ist $W = -200\,\text{J}$.
      - wert: "200-500"
        meldung: Das Vorzeichen ist umgedreht. Die Wärme wird **zugeführt**, sie zählt positiv.
hinweise:
  - 'Lege die Vorzeichen fest: zugeführte Wärme positiv, vom Gas verrichtete Arbeit negativ. Dann $\Delta U = Q + W$.'
loesung: |
  **Vorzeichen:** $Q = +500\,\text{J}$, weil die Wärme zugeführt wird. $W = -200\,\text{J}$, weil das Gas Arbeit abgibt.
  ---
  $\Delta U = Q + W = 500\,\text{J} - 200\,\text{J} = 300\,\text{J}$. Die innere Energie steigt, das Gas wird wärmer.
```

```aufgabe
id: p11-vorzeichen
titel: Vorzeichen bei der schnellen Kompression
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Gas wird in einem gut isolierten Zylinder rasch zusammengedrückt. Es fließt keine Wärme. Welche Aussage stimmt in der Kurskonvention?
teile:
  - typ: auswahl
    optionen:
      - '$Q = 0$, $W > 0$, $\Delta U > 0$: Das Gas wird wärmer.'
      - '$Q = 0$, $W < 0$, $\Delta U < 0$: Das Gas wird kälter.'
      - '$Q > 0$, $W = 0$, $\Delta U > 0$: Das Gas nimmt Wärme auf.'
      - '$Q = 0$, $W > 0$, $\Delta U = 0$: Ohne Wärme bleibt die Temperatur gleich.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Beim Zusammendrücken wird **am** Gas Arbeit verrichtet. In der Kurskonvention ist $W$ dann positiv.
      - wert: 2
        meldung: Der Zylinder ist isoliert, also fließt keine Wärme. Die Energie kommt als Arbeit hinein, nicht als Wärme.
      - wert: 3
        meldung: Das ist die Verwechslung von Wärme und Temperatur. Auch ohne Wärme steigt $U$, wenn Arbeit am Gas verrichtet wird. Aus $\Delta U = 0 + W$ folgt $\Delta U > 0$.
hinweise:
  - Was bedeutet „isoliert“ für $Q$? Wird beim Zusammendrücken Arbeit am Gas oder vom Gas verrichtet?
loesung: |
  Isoliert heißt $Q = 0$. Beim Zusammendrücken wird am Gas Arbeit verrichtet, also $W > 0$.
  ---
  Nach dem ersten Hauptsatz ist $\Delta U = Q + W = W > 0$. Die innere Energie und damit die Temperatur steigen. So wird eine Fahrradpumpe warm.
```

```aufgabe
id: p11-2-waerme-abgabe
titel: Ein Gas wird gekühlt und zusammengedrückt
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Gas wird zusammengedrückt. Dabei werden $450\,\text{J}$ Arbeit am Gas verrichtet. Gleichzeitig gibt das Gas $600\,\text{J}$ Wärme an das Kühlwasser ab.

  a) Wie groß ist $\Delta U$?

  b) Wird das Gas dabei wärmer oder kälter?
teile:
  - typ: zahl
    label: a) ΔU
    loesung: "-600+450"
    einheit: "J"
    anzeige: '-150'
    fehler:
      - wert: "600+450"
        meldung: Die abgegebene Wärme hast du positiv gezählt. Was das Gas abgibt, zählt negativ, also $Q = -600\,\text{J}$.
      - wert: "-600-450"
        meldung: Die Arbeit wird **am** Gas verrichtet, sie bringt Energie hinein. Also $W = +450\,\text{J}$.
  - typ: auswahl
    label: b) Temperatur
    optionen:
      - "Das Gas wird wärmer, weil es zusammengedrückt wird."
      - "Das Gas wird kälter, weil seine innere Energie abnimmt."
      - "Die Temperatur bleibt gleich, weil sich Wärme und Arbeit ausgleichen."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Zusammendrücken allein erwärmt nur, wenn keine größere Wärmemenge abfließt. Hier fließen $600\,\text{J}$ hinaus und nur $450\,\text{J}$ herein.
      - wert: 2
        meldung: Ausgleichen würden sie sich nur bei gleichem Betrag. $600\,\text{J}$ und $450\,\text{J}$ sind verschieden.
hinweise:
  - 'Lege die Vorzeichen fest: Die Wärme verlässt das Gas, die Arbeit wird am Gas verrichtet.'
  - 'Setze $Q = -600\,\text{J}$ und $W = +450\,\text{J}$ in $\Delta U = Q + W$ ein. Beim idealen Gas gehört zu $\Delta U < 0$ eine sinkende Temperatur.'
gefuehrt:
  - text: Welchen Wert hat $Q$ in Joule (mit Vorzeichen)?
    teil: { typ: zahl, loesung: "-600" }
    erklaerung: Das Gas gibt Wärme ab, also ist $Q$ negativ, $Q = -600\,\text{J}$.
  - text: Welchen Wert hat $W$ in Joule (mit Vorzeichen)?
    teil: { typ: zahl, loesung: "450" }
    erklaerung: Die Arbeit wird am Gas verrichtet, also $W = +450\,\text{J}$.
  - text: Berechne $\Delta U$.
    teil: { typ: zahl, loesung: "-150" }
    erklaerung: $\Delta U = -600\,\text{J} + 450\,\text{J} = -150\,\text{J}$.
  - text: Überlege, was das negative Vorzeichen für die Temperatur bedeutet.
    erklaerung: Die innere Energie eines idealen Gases ist proportional zur Temperatur. Nimmt $U$ ab, sinkt auch $T$. Das Gas wird kälter, obwohl es zusammengedrückt wird.
loesung: |
  **Vorzeichen:** Das Gas gibt Wärme ab, also $Q = -600\,\text{J}$. Am Gas wird Arbeit verrichtet, also $W = +450\,\text{J}$.
  ---
  **a)** $\Delta U = Q + W = -600\,\text{J} + 450\,\text{J} = -150\,\text{J}$.
  ---
  **b)** Die innere Energie nimmt um $150\,\text{J}$ ab. Beim idealen Gas hängt $U$ nur von $T$ ab, also sinkt die Temperatur. Es fließt mehr Energie als Wärme hinaus, als durch die Arbeit hereinkommt.
```

```aufgabe
id: p11-2-kreisprozess-bilanz
titel: Energiebilanz nach einem vollen Umlauf
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Das Gas in einer Maschine durchläuft einen Kreisprozess und kehrt in seinen Anfangszustand zurück. Pro Umlauf nimmt es $1200\,\text{J}$ Wärme auf und gibt $900\,\text{J}$ Wärme ab. Wie viel Arbeit verrichtet das Gas pro Umlauf netto nach außen?
teile:
  - typ: zahl
    loesung: "1200-900"
    einheit: "J"
    anzeige: '300'
    fehler:
      - wert: "1200+900"
        meldung: Die abgegebene Wärme verlässt das Gas. Sie kann nicht zur Arbeit beitragen. Netto bleibt nur die Differenz.
      - wert: "1200"
        meldung: Das Gas behält nicht die ganze aufgenommene Wärme für die Arbeit. $900\,\text{J}$ gibt es wieder als Wärme ab.
hinweise:
  - Nach einem vollen Umlauf ist das Gas wieder im Anfangszustand. Wie groß ist dann $\Delta U$?
  - 'Aus $\Delta U = 0$ folgt $Q_\text{netto} + W = 0$. Die netto zugeführte Wärme ist $1200\,\text{J} - 900\,\text{J}$.'
loesung: |
  **Ansatz:** Nach einem vollen Umlauf ist der Zustand wieder derselbe. Die innere Energie ist eine Zustandsgröße, also ist $\Delta U = 0$.
  ---
  **Bilanz:** Netto zugeführte Wärme $Q = 1200\,\text{J} - 900\,\text{J} = 300\,\text{J}$. Aus $0 = Q + W$ folgt $W = -300\,\text{J}$ am Gas.
  ---
  **Antwort:** Das Gas verrichtet pro Umlauf netto $300\,\text{J}$ Arbeit nach außen. Das ist ein Viertel der aufgenommenen Wärme.
```

```aufgabe
id: p11-2-helium-abkuehlen
titel: Helium kühlt ab
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  $1{,}5\,\text{mol}$ Helium kühlen von $350\,\text{K}$ auf $290\,\text{K}$ ab. Um wie viel ändert sich die innere Energie? Gib das Ergebnis mit Vorzeichen in Joule an.
teile:
  - typ: zahl
    loesung: "1.5*1.5*8.314*(290-350)"
    einheit: "J"
    anzeige: '-1122'
    fehler:
      - wert: "2.5*1.5*8.314*(290-350)"
        meldung: Du hast $f = 5$ verwendet. Helium ist ein Edelgas und einatomig, also $f = 3$.
      - wert: "1.5*1.5*8.314*(350-290)"
        meldung: Der Betrag stimmt, das Vorzeichen nicht. Das Gas kühlt ab, also ist $\Delta T = T_\text{Ende} - T_\text{Anfang}$ negativ.
      - wert: "1.5*1.5*8.314*290"
        meldung: Das ist die innere Energie bei $290\,\text{K}$, nicht ihre Änderung. Setze die Temperaturdifferenz ein.
hinweise:
  - Helium ist einatomig. Welcher Wert für $f$ gehört dazu?
  - '$\Delta U = \tfrac f2\,nR\,\Delta T$ mit $\Delta T = T_\text{Ende} - T_\text{Anfang}$.'
loesung: |
  **Ansatz:** Beim idealen Gas gilt $\Delta U = \tfrac f2\,nR\,\Delta T$. Helium ist einatomig, also $f = 3$.
  ---
  **Temperaturänderung:** $\Delta T = 290\,\text{K} - 350\,\text{K} = -60\,\text{K}$.
  ---
  $\Delta U = 1{,}5\cdot 1{,}5\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot(-60\,\text{K}) = -1122\,\text{J}$. Das Minus passt zum Abkühlen: Das Gas verliert innere Energie.
```

```aufgabe
id: p11-2-perpetuum1
titel: Eine Erfindung prüfen
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Erfinder stellt eine Maschine vor, deren Gas einen Kreisprozess durchläuft. Pro Umlauf soll sie $500\,\text{J}$ Arbeit abgeben. Dafür nimmt sie nur $300\,\text{J}$ Wärme auf und gibt keine Wärme ab. Andere Energiezufuhr gibt es nicht. Prüfe die Behauptung mit dem ersten Hauptsatz. Wie viel Energie fehlt pro Umlauf, und was müsste mit der inneren Energie geschehen?
teile:
  - typ: text
    muster: |
      Nach einem Umlauf ist das Gas wieder im Anfangszustand, also ist $\Delta U = 0$. Aus $\Delta U = Q + W$ folgt
      dann $W_\text{vom Gas} = Q = 300\,\text{J}$. Die Maschine kann also höchstens $300\,\text{J}$ abgeben, nicht $500\,\text{J}$.
      Pro Umlauf fehlen $200\,\text{J}$. Sie könnten nur aus der inneren Energie stammen. Dann würde $U$ bei jedem Umlauf
      um $200\,\text{J}$ sinken, das Gas wäre nicht im Anfangszustand, und die Maschine könnte nicht dauernd laufen.
      Die Erfindung ist ein Perpetuum mobile erster Art und verstößt gegen den ersten Hauptsatz.
hinweise:
  - Welchen Wert hat $\Delta U$ nach einem vollen Umlauf?
  - 'Setze $\Delta U = 0$, $Q = +300\,\text{J}$ und $W = -500\,\text{J}$ in die Bilanz ein. Geht die Rechnung auf?'
loesung: |
  **Ansatz:** Ein Kreisprozess endet im Anfangszustand. Die innere Energie ist eine Zustandsgröße, also gilt nach jedem Umlauf $\Delta U = 0$.
  ---
  **Bilanz:** Mit den Angaben wäre $Q + W = 300\,\text{J} + (-500\,\text{J}) = -200\,\text{J}$. Das widerspricht $\Delta U = 0$.
  ---
  **Folgerung:** Die fehlenden $200\,\text{J}$ müssten bei jedem Umlauf aus der inneren Energie kommen. Dann sinkt $U$ ständig, und das Gas kehrt nie in den Anfangszustand zurück. Spätestens wenn das Gas ausgekühlt ist, steht die Maschine.
  ---
  **Antwort:** Die Maschine kann höchstens $300\,\text{J}$ pro Umlauf liefern. Die Behauptung beschreibt ein Perpetuum mobile erster Art, das der erste Hauptsatz verbietet.
```

## Isochor, isobar, isotherm: drei Zustandsänderungen

```aufgabe
id: p11-3-check
art: check
titel: "Vorwissen: Boyle-Mariotte"
niveau: 1
angabe: |
  Ein ideales Gas wird bei konstanter Temperatur auf das doppelte Volumen ausgedehnt. Was passiert mit seinem Druck?
teile:
  - typ: auswahl
    optionen:
      - "Er halbiert sich."
      - "Er verdoppelt sich."
      - "Er bleibt gleich, weil die Temperatur gleich bleibt."
      - "Er sinkt auf ein Viertel."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Mehr Platz bedeutet weniger Stöße pro Fläche und Sekunde. Der Druck sinkt also, er steigt nicht.
      - wert: 2
        meldung: Bei gleicher Temperatur bleibt das Produkt $pV$ gleich, nicht der Druck. Wächst $V$, muss $p$ kleiner werden.
      - wert: 3
        meldung: Druck und Volumen sind hier umgekehrt proportional, nicht quadratisch. Doppeltes Volumen ergibt halben Druck.
hinweise:
  - Bei konstanter Temperatur gilt das Gesetz von Boyle-Mariotte, $p\cdot V = \text{konstant}$.
loesung: |
  Bei konstanter Temperatur gilt $p_1V_1 = p_2V_2$ (Boyle-Mariotte).
  ---
  Mit $V_2 = 2V_1$ folgt $p_2 = p_1V_1/(2V_1) = p_1/2$. Der Druck halbiert sich. Wiederholen: [10.9 Die Gasgesetze](/lernen/physik1/temperatur-waerme-gase/die-gasgesetze).
```

**Worum geht es?** Bei einer **Zustandsänderung** ändern sich Druck, Volumen und Temperatur eines Gases.
Hält man eine dieser Größen fest, entstehen einfache Grundfälle mit eigenen Namen. Für jeden Grundfall
lernst du, wie sich die zugeführte Energie auf Arbeit und innere Energie aufteilt. Drei Fälle stehen in
diesem Abschnitt, den vierten, den adiabatischen, behandelt
[11.4 Adiabatische Zustandsänderungen](/lernen/physik1/hauptsaetze-waermekraftmaschinen/adiabatische-zustandsaenderungen-ohne-waermeaustausch).

Die Namen kommen aus dem Griechischen. „Iso“ heißt gleich. **Isochor** heißt „gleiches Volumen“,
**isobar** „gleicher Druck“ und **isotherm** „gleiche Temperatur“. Für alle drei Fälle verwenden wir
dieselben zwei Werkzeuge: den ersten Hauptsatz $\Delta U = Q + W$ und die innere Energie des idealen
Gases $\Delta U = \tfrac f2\,nR\,\Delta T$.

### Isochor: Das Volumen bleibt gleich

Ein Gas in einem starren Behälter, etwa in einer Gasflasche oder Spraydose, kann sein Volumen nicht
ändern. Ohne Volumenänderung gibt es keine Volumenarbeit, also $W = 0$. Der erste Hauptsatz wird zu
$$Q = \Delta U = \tfrac f2\,nR\,\Delta T = n\,C_V\,\Delta T.$$
Dabei ist $C_V = \tfrac f2 R$ die molare Wärmekapazität bei konstantem Volumen. Die gesamte zugeführte
Wärme bleibt als innere Energie im Gas. Im p-V-Diagramm ist ein isochorer Prozess eine senkrechte Linie.

:::beispiel[Eine Dose in der Sonne]
In einer verschlossenen Dose befinden sich $0{,}40\,\text{mol}$ Stickstoff ($f = 5$). Die Sonne erwärmt die
Dose von $20\,^\circ\text{C}$ auf $50\,^\circ\text{C}$. Wie viel Wärme hat der Stickstoff aufgenommen?

**Schritt 1, Prozess erkennen:** Die Dose ist starr, also isochor. Es gilt $W = 0$ und $Q = \Delta U$.

**Schritt 2, Temperaturänderung:** $\Delta T = 30\,\text{K}$. Eine Differenz ist in Kelvin und Grad Celsius
gleich groß, deshalb muss man hier nicht umrechnen.

**Schritt 3, einsetzen:** $Q = \tfrac52\cdot 0{,}40\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 30\,\text{K} = 249\,\text{J}$.

**Antwort:** Der Stickstoff nimmt rund $250\,\text{J}$ auf. Sein Druck steigt dabei um den Faktor
$323{,}15/293{,}15 \approx 1{,}10$, also um zehn Prozent. Das folgt aus dem Gesetz von Amontons: Bei
konstantem Volumen ist der Druck proportional zur Temperatur in Kelvin.
:::

### Isobar: Der Druck bleibt gleich

Ein Gas unter einem frei beweglichen Kolben hat immer denselben Druck. Erwärmt man es, dehnt es sich aus
und schiebt den Kolben hinaus. Es verrichtet die Arbeit
$$W_\text{vom Gas} = p\,\Delta V = nR\,\Delta T.$$
Die zweite Form folgt aus der Zustandsgleichung: Bei konstantem Druck ist $p\,\Delta V = nR\,\Delta T$,
weil $pV = nRT$ vor und nach der Erwärmung gilt.

Die zugeführte Wärme muss jetzt zwei Dinge bezahlen: die Erwärmung und die Arbeit. Aus dem ersten
Hauptsatz folgt mit $W = -nR\,\Delta T$:
$$Q = \Delta U - W = \tfrac f2\,nR\,\Delta T + nR\,\Delta T = n\,(C_V + R)\,\Delta T = n\,C_p\,\Delta T.$$
Dabei ist $C_p = C_V + R$ die **molare Wärmekapazität bei konstantem Druck**. Für einatomige Gase ist
$C_p = \tfrac52 R = 20{,}8\,\text{J/(mol K)}$, für Luft $C_p = \tfrac72 R = 29{,}1\,\text{J/(mol K)}$. Im
p-V-Diagramm ist ein isobarer Prozess eine waagrechte Linie.

:::beispiel[Helium im Zylinder mit beweglichem Kolben]
$1{,}5\,\text{mol}$ Helium werden bei konstantem Druck um $40\,\text{K}$ erwärmt. Berechne $\Delta U$, die
Arbeit des Gases und die zugeführte Wärme.

**Schritt 1, innere Energie:** Helium ist einatomig, $f = 3$.
$\Delta U = \tfrac32\cdot 1{,}5\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 40\,\text{K} = 748\,\text{J}$.

**Schritt 2, Arbeit:** $W_\text{vom Gas} = nR\,\Delta T = 1{,}5\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 40\,\text{K}
= 499\,\text{J}$. In der Kurskonvention ist $W = -499\,\text{J}$.

**Schritt 3, Wärme:** $Q = \Delta U - W = 748\,\text{J} + 499\,\text{J} = 1247\,\text{J}$.

**Probe:** $Q = n\,C_p\,\Delta T = 1{,}5\cdot\tfrac52\cdot 8{,}314\cdot 40\,\text{J} = 1247\,\text{J}$. Von der Wärme
werden drei Fünftel zu innerer Energie und zwei Fünftel zu Arbeit.
:::

```reflexion
frage: Warum ist $C_p$ größer als $C_V$? Erkläre ohne Formel, was mit der zugeführten Energie in beiden Fällen geschieht.
antwort: |
  Bei konstantem Volumen geht die gesamte Wärme in die innere Energie, also in die Erwärmung. Bei konstantem Druck
  dehnt sich das Gas beim Erwärmen aus und schiebt die Umgebung weg. Dafür braucht es zusätzlich Energie, nämlich die
  Volumenarbeit $nR\,\Delta T$. Für dieselbe Temperaturerhöhung muss man also mehr Wärme zuführen. Pro Mol und Kelvin ist
  das genau $R$ mehr, deshalb gilt $C_p = C_V + R$.
```

### Isotherm: Die Temperatur bleibt gleich

Dehnt sich ein Gas sehr langsam aus und hat es dabei guten Wärmekontakt zur Umgebung, bleibt seine
Temperatur gleich. Beim idealen Gas bleibt dann auch die innere Energie gleich, $\Delta U = 0$. Der erste
Hauptsatz liefert $0 = Q + W$, also $Q = -W = W_\text{vom Gas}$. Die gesamte aufgenommene Wärme wird zu
Arbeit.

Die Arbeit selbst ist die Fläche unter der Kurve im p-V-Diagramm. Bei konstanter Temperatur gilt
$p = nRT/V$, das ist eine **Hyperbel**. Die Fläche unter einer Hyperbel berechnet man mit einem Integral.
Weil die Stammfunktion von $1/V$ der natürliche Logarithmus $\ln V$ ist, ergibt sich
$$W_\text{vom Gas} = \int_{V_1}^{V_2}\frac{nRT}{V}\,\dd V = nRT\,\bigl(\ln V_2 - \ln V_1\bigr) = nRT\,\ln\frac{V_2}{V_1}.$$
Dabei ist $T$ die konstante Temperatur in Kelvin, $V_1$ das Anfangs- und $V_2$ das Endvolumen. Im letzten
Schritt haben wir das Logarithmengesetz $\ln a - \ln b = \ln\tfrac ab$ verwendet. Wiederholen kannst du es
im Mathematikkurs in [1.11 Logarithmen](/lernen/mathe3/zahlen/logarithmen). Wie man Flächen mit
Stammfunktionen berechnet, steht in [10.3 Der Hauptsatz der Differential- und Integralrechnung](/lernen/mathe3/integralrechnung/der-hauptsatz-der-differential-und-integralrechnung).

```plot
x: [0, 14]
y: [0, 400]
hoehe: 300
achsen: { x: "V in L", y: "p in kPa" }
graphen:
  - { f: "1205.6/x", label: "Isotherme 290 K", farbe: 0, von: 3, bis: 14 }
flaechen:
  - { f: "1205.6/x", g: "0", von: 4, bis: 12, farbe: 0 }
punkte:
  - { x: 4, y: 301.4, label: "Anfang" }
  - { x: 12, y: 100.5, label: "Ende" }
beschriftung: "Isotherme Ausdehnung von 0,50 mol Gas bei 290 K von 4 L auf 12 L. Die Kurve ist eine Hyperbel, der Druck sinkt auf ein Drittel. Die gefärbte Fläche ist die Arbeit des Gases, rund 1,3 kJ."
```

:::beispiel[Isotherme Ausdehnung um den Faktor drei]
$0{,}50\,\text{mol}$ Gas dehnen sich bei $290\,\text{K}$ isotherm von $4{,}0\,\text{L}$ auf $12\,\text{L}$ aus.
Wie viel Arbeit verrichtet das Gas, und wie viel Wärme nimmt es auf?

**Schritt 1, Formel wählen:** Die Temperatur ist konstant, also $W_\text{vom Gas} = nRT\ln(V_2/V_1)$.

**Schritt 2, Volumenverhältnis:** $V_2/V_1 = 12/4{,}0 = 3$. Die Einheit Liter kürzt sich, man muss hier nicht
in Kubikmeter umrechnen.

**Schritt 3, einsetzen:** $W_\text{vom Gas} = 0{,}50\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 290\,\text{K}\cdot\ln 3
= 1205{,}5\,\text{J}\cdot 1{,}0986 = 1324\,\text{J}$.

**Schritt 4, Wärme:** Wegen $\Delta U = 0$ ist $Q = W_\text{vom Gas} = 1324\,\text{J}$. Die Wärme aus der
Umgebung wird vollständig zu Arbeit.
:::

:::achtung[Fehler: „Isotherm heißt ohne Wärmeaustausch“]
Für das Gas aus dem Beispiel schreibt eine Schülerin: „Die Temperatur bleibt gleich, also fließt keine
Wärme: $Q = 0$.“

Das ist eine der häufigsten Verwechslungen. Gleiche Temperatur heißt nicht „keine Wärme“. Das Gas
verrichtet $1324\,\text{J}$ Arbeit. Damit es dabei nicht abkühlt, muss genau so viel Wärme nachfließen,
also $Q = +1324\,\text{J}$. „Ohne Wärmeaustausch“ heißt **adiabatisch**. Dabei ändert sich die Temperatur gerade.
:::

:::achtung[Fehler: Zehnerlogarithmus statt natürlicher Logarithmus]
Ein Schüler rechnet für dasselbe Beispiel mit der Taste „log“:
$0{,}50\cdot 8{,}314\cdot 290\cdot\lg 3\,\text{J} = 575\,\text{J}$.

Die Formel enthält aber den **natürlichen** Logarithmus $\ln$, denn sie stammt aus der Stammfunktion von
$1/V$. Mit $\ln 3 = 1{,}099$ statt $\lg 3 = 0{,}477$ ergibt sich richtig $1324\,\text{J}$. Merke: Taste
„ln“, nicht „log“.
:::

### Die drei Fälle im Vergleich

:::merke[Isochor, isobar, isotherm auf einen Blick]
- **Isochor** ($V$ konstant): $W = 0$, $Q = \Delta U = n\,C_V\,\Delta T$. Senkrechte Linie im p-V-Diagramm.
- **Isobar** ($p$ konstant): $W = -p\,\Delta V = -nR\,\Delta T$, $\Delta U = n\,C_V\,\Delta T$, $Q = n\,C_p\,\Delta T$. Waagrechte Linie.
- **Isotherm** ($T$ konstant): $\Delta U = 0$, $Q = -W = nRT\ln(V_2/V_1)$. Hyperbel.
- Für jedes ideale Gas: $C_V = \tfrac f2 R$, $C_p = C_V + R$, mit $f = 3$ (einatomig) oder $f = 5$ (Luft).
:::

Ein Rezept, das immer funktioniert: Zuerst den Prozess erkennen. Dann die Größe aufschreiben, die null
ist ($W$, $\Delta U$ oder später $Q$). Dann die beiden anderen über den ersten Hauptsatz verbinden.

### Aufgaben zu den drei Zustandsänderungen

```aufgabe
id: p11-isochor
titel: Isochore Erwärmung von Helium
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  $2{,}0\,\text{mol}$ Helium (einatomig) werden in einem starren Behälter von $300\,\text{K}$ auf $400\,\text{K}$ erwärmt. Wie viel Wärme ist nötig?
teile:
  - typ: zahl
    loesung: "1.5*2.0*8.314*100"
    einheit: "J"
    anzeige: '2494'
    fehler:
      - wert: "2.5*2.0*8.314*100"
        meldung: Du hast $\tfrac52 R$ verwendet. Das wäre $C_V$ für Luft oder $C_p$ für Helium. Hier ist das Gas einatomig und das Volumen konstant, also $C_V = \tfrac32 R$.
      - wert: "1.5*2.0*8.314*400"
        meldung: Du hast die Endtemperatur statt der Temperaturänderung eingesetzt. Die Wärme hängt von $\Delta T = 100\,\text{K}$ ab.
hinweise:
  - 'Isochor heißt $W = 0$. Also ist $Q = \Delta U = n\cdot\tfrac32 R\cdot\Delta T$.'
loesung: |
  **Ansatz:** Starrer Behälter, also isochor: $W = 0$ und $Q = \Delta U = n\,C_V\,\Delta T$ mit $C_V = \tfrac32 R$ für Helium.
  ---
  $Q = 2{,}0\,\text{mol}\cdot 1{,}5\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 100\,\text{K} = 2494\,\text{J} \approx 2{,}5\,\text{kJ}$.
```

```aufgabe
id: p11-3-zuordnen
titel: Wann wird alle Wärme zu Arbeit?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Bei welcher Zustandsänderung eines idealen Gases wird die gesamte zugeführte Wärme in Arbeit umgewandelt, ohne dass sich die innere Energie ändert?
teile:
  - typ: auswahl
    optionen:
      - "isochor"
      - "isobar"
      - "isotherm"
      - "adiabatisch"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Isochor wird gar keine Arbeit verrichtet, weil sich das Volumen nicht ändert. Die Wärme geht vollständig in die innere Energie.
      - wert: 1
        meldung: Isobar wird nur ein Teil der Wärme zu Arbeit. Der Rest erhöht die innere Energie, denn das Gas wird wärmer.
      - wert: 3
        meldung: Adiabatisch heißt, dass gar keine Wärme fließt. Dann kann auch keine Wärme zu Arbeit werden.
hinweise:
  - Die innere Energie eines idealen Gases ändert sich nicht, wenn eine bestimmte Größe konstant bleibt. Welche?
loesung: |
  Beim idealen Gas hängt $U$ nur von der Temperatur ab. $\Delta U = 0$ bedeutet also konstante Temperatur, und das heißt isotherm.
  ---
  Dann folgt aus $0 = Q + W$, dass $Q = W_\text{vom Gas}$ ist. Die gesamte Wärme wird zu Arbeit.
```

```aufgabe
id: p11-isobar
titel: Isobare Erwärmung von Luft
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  $1{,}0\,\text{mol}$ Luft ($f = 5$) wird bei konstantem Druck von $300\,\text{K}$ auf $350\,\text{K}$ erwärmt. Berechne $\Delta U$, die vom Gas verrichtete Arbeit und die zugeführte Wärme.
teile:
  - typ: zahl
    label: ΔU
    loesung: "2.5*8.314*50"
    einheit: "J"
    anzeige: '1039'
    fehler:
      - wert: "1.5*8.314*50"
        meldung: Du hast $f = 3$ verwendet. Luft besteht fast nur aus zweiatomigen Molekülen, also $f = 5$.
  - typ: zahl
    label: vom Gas verrichtete Arbeit
    loesung: "8.314*50"
    einheit: "J"
    anzeige: '416'
    fehler:
      - wert: "8.314*350"
        meldung: Du hast die Temperatur statt der Temperaturänderung eingesetzt. Die Arbeit ist $nR\,\Delta T$.
  - typ: zahl
    label: Q
    loesung: "3.5*8.314*50"
    einheit: "J"
    anzeige: '1455'
    fehler:
      - wert: "2.5*8.314*50"
        meldung: Das ist nur $\Delta U$. Bei konstantem Druck muss die Wärme zusätzlich die Arbeit des Gases liefern.
      - wert: "2.5*8.314*50-8.314*50"
        meldung: Du hast die Arbeit abgezogen statt addiert. Das Gas gibt Arbeit ab, also $W = -416\,\text{J}$, und $Q = \Delta U - W$.
hinweise:
  - '$\Delta U = n\,\tfrac52 R\,\Delta T$ und $W_\text{vom Gas} = p\,\Delta V = nR\,\Delta T$.'
  - 'Aus $\Delta U = Q + W$ mit $W = -W_\text{vom Gas}$ folgt $Q = \Delta U + W_\text{vom Gas}$.'
loesung: |
  **Ansatz:** Isobar, Luft mit $f = 5$, $\Delta T = 50\,\text{K}$.
  ---
  $\Delta U = 1{,}0\,\text{mol}\cdot 2{,}5\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 50\,\text{K} = 1039\,\text{J}$.
  ---
  $W_\text{vom Gas} = nR\,\Delta T = 1{,}0\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 50\,\text{K} = 416\,\text{J}$. In der Kurskonvention ist $W = -416\,\text{J}$.
  ---
  $Q = \Delta U - W = 1039\,\text{J} + 416\,\text{J} = 1455\,\text{J}$. Probe: $n\,C_p\,\Delta T = \tfrac72\cdot 8{,}314\cdot 50\,\text{J} = 1455\,\text{J}$.
```

```aufgabe
id: p11-isotherm
titel: Isotherme Expansion
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  $1{,}0\,\text{mol}$ ideales Gas dehnt sich bei $300\,\text{K}$ isotherm von $10\,\text{L}$ auf $25\,\text{L}$ aus. Wie viel Arbeit verrichtet das Gas, und wie viel Wärme nimmt es auf?
teile:
  - typ: zahl
    label: vom Gas verrichtete Arbeit
    loesung: "8.314*300*ln(25/10)"
    einheit: "J"
    anzeige: '2285'
    fehler:
      - wert: "8.314*300*log(25/10, 10)"
        meldung: Du hast den Zehnerlogarithmus verwendet. Die Formel braucht den natürlichen Logarithmus, Taste „ln“.
      - wert: "8.314*300*ln(10/25)"
        meldung: Das Volumenverhältnis ist umgedreht. Es heißt $V_\text{Ende}/V_\text{Anfang}$, bei einer Ausdehnung ist es größer als $1$.
  - typ: zahl
    label: aufgenommene Wärme
    loesung: "8.314*300*ln(25/10)"
    einheit: "J"
    anzeige: '2285'
    fehler:
      - wert: "0"
        meldung: Isotherm heißt nicht „ohne Wärme“. Damit das Gas beim Arbeiten nicht abkühlt, muss Wärme nachfließen.
hinweise:
  - 'Isotherm: $\Delta U = 0$, also $Q = W_\text{vom Gas}$.'
  - '$W_\text{vom Gas} = nRT\ln(V_2/V_1)$. Das Volumenverhältnis darf in Litern bleiben.'
gefuehrt:
  - text: Wie groß ist das Volumenverhältnis $V_2/V_1$?
    teil: { typ: zahl, loesung: "25/10" }
    erklaerung: $V_2/V_1 = 25\,\text{L}/10\,\text{L} = 2{,}5$. Die Einheit kürzt sich.
  - text: Berechne $\ln 2{,}5$ auf drei Nachkommastellen.
    teil: { typ: zahl, loesung: "ln(2.5)" }
    erklaerung: $\ln 2{,}5 \approx 0{,}916$. Achte auf die Taste „ln“.
  - text: Berechne die Arbeit des Gases in Joule.
    teil: { typ: zahl, loesung: "8.314*300*ln(2.5)" }
    erklaerung: $1{,}0\cdot 8{,}314\cdot 300\cdot 0{,}916\,\text{J} = 2285\,\text{J}$.
  - text: Überlege, wie groß die aufgenommene Wärme ist.
    erklaerung: Bei konstanter Temperatur ist $\Delta U = 0$. Aus dem ersten Hauptsatz folgt $Q = W_\text{vom Gas} = 2285\,\text{J}$.
loesung: |
  **Ansatz:** Isotherm, also $W_\text{vom Gas} = nRT\ln(V_2/V_1)$ und $\Delta U = 0$.
  ---
  $W_\text{vom Gas} = 1{,}0\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 300\,\text{K}\cdot\ln 2{,}5 = 2494\,\text{J}\cdot 0{,}916 = 2285\,\text{J}$.
  ---
  Wegen $\Delta U = 0$ ist $Q = W_\text{vom Gas} = 2285\,\text{J}$. Die gesamte aufgenommene Wärme wird zu Arbeit.
```

```aufgabe
id: p11-3-isotherm-kompression
titel: Isotherme Kompression
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  $0{,}20\,\text{mol}$ Gas werden bei $280\,\text{K}$ langsam und isotherm von $6{,}0\,\text{L}$ auf $2{,}0\,\text{L}$ zusammengedrückt. Wie groß ist die Wärme $Q$ (mit Vorzeichen in der Kurskonvention)?
teile:
  - typ: zahl
    loesung: "0.2*8.314*280*ln(2/6)"
    einheit: "J"
    anzeige: '-511{,}5'
    fehler:
      - wert: "0.2*8.314*280*ln(6/2)"
        meldung: Der Betrag stimmt. Aber bei einer Kompression gibt das Gas Wärme ab, also ist $Q$ negativ. Mit $\ln(V_2/V_1) = \ln(2/6) < 0$ kommt das Minus von selbst.
      - wert: "0"
        meldung: Gleiche Temperatur bedeutet nicht „keine Wärme“. Am Gas wird Arbeit verrichtet. Diese Energie muss als Wärme hinaus, sonst würde das Gas heißer.
hinweise:
  - 'Isotherm ist $\Delta U = 0$, also $Q = W_\text{vom Gas} = nRT\ln(V_2/V_1)$.'
  - Bei einer Kompression ist $V_2 < V_1$. Welches Vorzeichen hat dann der Logarithmus?
loesung: |
  **Ansatz:** Isotherm, also $\Delta U = 0$ und $Q = -W = W_\text{vom Gas} = nRT\ln(V_2/V_1)$.
  ---
  $Q = 0{,}20\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 280\,\text{K}\cdot\ln\tfrac{2{,}0}{6{,}0} = 465{,}6\,\text{J}\cdot(-1{,}0986) = -511{,}5\,\text{J}$.
  ---
  **Deutung:** Am Gas werden $511{,}5\,\text{J}$ Arbeit verrichtet, und genau so viel Wärme gibt es an die Umgebung ab. Nur so bleibt die Temperatur gleich.
```

```aufgabe
id: p11-3-proportional
titel: Proportionalität bei der isothermen Arbeit
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Gas dehnt sich isotherm vom Volumen $V_1$ auf $2V_1$ aus und verrichtet dabei die Arbeit $W_0$.

  a) Man nimmt die **doppelte Stoffmenge** bei gleicher Temperatur und gleichen Volumina. Wie groß ist die Arbeit jetzt?

  b) Man nimmt die ursprüngliche Stoffmenge, lässt das Gas aber auf $4V_1$ statt auf $2V_1$ ausdehnen. Wie groß ist die Arbeit jetzt?
teile:
  - typ: auswahl
    label: a) doppelte Stoffmenge
    optionen:
      - '$2\,W_0$'
      - '$W_0$'
      - '$4\,W_0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Volumina sind zwar gleich, aber doppelt so viele Teilchen drücken doppelt so stark. In $nRT\ln(V_2/V_1)$ steht $n$ als Faktor.
      - wert: 2
        meldung: $n$ kommt in der Formel nur einmal als Faktor vor, nicht im Quadrat.
  - typ: auswahl
    label: b) Ausdehnung auf das Vierfache
    optionen:
      - '$2\,W_0$'
      - '$4\,W_0$'
      - '$W_0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Volumenverhältnis verdoppelt sich, aber es steht im Logarithmus. Es gilt $\ln 4 = 2\ln 2$, nicht $4\ln 2$.
      - wert: 2
        meldung: Das Gas dehnt sich weiter aus und schiebt den Kolben ein längeres Stück. Die Arbeit wird also größer.
hinweise:
  - 'Schau in $W = nRT\ln(V_2/V_1)$, wie $n$ und wie das Volumenverhältnis vorkommen.'
  - 'Benutze das Logarithmengesetz $\ln(a^2) = 2\ln a$, also $\ln 4 = 2\ln 2$.'
loesung: |
  **Ansatz:** $W_0 = nRT\ln 2$. Wir vergleichen die neuen Fälle mit dieser Formel.
  ---
  **a)** $n$ ist ein Faktor. Mit $2n$ wird die Arbeit $2nRT\ln 2 = 2\,W_0$.
  ---
  **b)** Jetzt ist $W = nRT\ln 4 = nRT\cdot 2\ln 2 = 2\,W_0$. Das vierfache Endvolumen ergibt nur die doppelte Arbeit, weil das Volumen im Logarithmus steht. Der zusätzliche Weg von $2V_1$ auf $4V_1$ liefert dieselbe Arbeit wie der erste von $V_1$ auf $2V_1$. Er ist zwar doppelt so lang, aber der Druck ist dort nur noch halb so groß.
```

```aufgabe
id: p11-3-luft-isobar
titel: Luft im Zylinder ohne gegebene Stoffmenge
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Zylinder mit frei beweglichem Kolben enthält $2{,}4\,\text{L}$ Luft ($f = 5$) bei $1{,}0\,\text{bar}$ und $20\,^\circ\text{C}$. Die Luft wird bei konstantem Druck auf $80\,^\circ\text{C}$ erwärmt.

  a) Welche Stoffmenge Luft ist im Zylinder?

  b) Welches Volumen hat die Luft am Ende?

  c) Wie viel Arbeit verrichtet sie, und wie viel Wärme muss man zuführen?
teile:
  - typ: zahl
    label: a) Stoffmenge
    loesung: "1e5*2.4e-3/(8.314*293.15)"
    einheit: "mol"
    anzeige: '0{,}0985'
  - typ: zahl
    label: b) Endvolumen
    loesung: "2.4*353.15/293.15"
    einheit: "L"
    anzeige: '2{,}89'
  - typ: zahl
    label: c) Arbeit der Luft
    loesung: "1e5*(2.4*353.15/293.15-2.4)*1e-3"
    einheit: "J"
    anzeige: '49{,}1'
  - typ: zahl
    label: c) zugeführte Wärme
    loesung: "3.5*1e5*(2.4*353.15/293.15-2.4)*1e-3"
    einheit: "J"
    anzeige: '172'
hinweise:
  - 'a) Aus $pV = nRT$ mit SI-Einheiten und $T$ in Kelvin. b) Bei konstantem Druck ist $V$ proportional zu $T$ (Gay-Lussac).'
  - 'c) $W_\text{vom Gas} = p\,\Delta V$. Für die Wärme gilt $Q = n\,\tfrac72 R\,\Delta T$, und $nR\,\Delta T$ ist genau $p\,\Delta V$.'
loesung: |
  **Modell:** Freier Kolben, also isobar. Temperaturen in Kelvin: $T_1 = 293{,}15\,\text{K}$, $T_2 = 353{,}15\,\text{K}$.
  ---
  **a)** $n = \dfrac{pV}{RT} = \dfrac{10^5\,\text{Pa}\cdot 2{,}4\cdot 10^{-3}\,\text{m}^3}{8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 293{,}15\,\text{K}} = \dfrac{240\,\text{J}}{2437\,\text{J/mol}} = 0{,}0985\,\text{mol}$.
  ---
  **b)** Bei konstantem Druck gilt $V_2/V_1 = T_2/T_1$, also $V_2 = 2{,}4\,\text{L}\cdot\dfrac{353{,}15\,\text{K}}{293{,}15\,\text{K}} = 2{,}89\,\text{L}$.
  ---
  **c)** $W_\text{vom Gas} = p\,\Delta V = 10^5\,\text{Pa}\cdot 0{,}491\cdot 10^{-3}\,\text{m}^3 = 49{,}1\,\text{J}$. Die Wärme ist $Q = \tfrac72\,nR\,\Delta T = \tfrac72\,p\,\Delta V = 3{,}5\cdot 49{,}1\,\text{J} = 172\,\text{J}$.
  ---
  **Probe:** $\Delta U = \tfrac52\,p\,\Delta V = 123\,\text{J}$, und $Q - W_\text{vom Gas} = 172\,\text{J} - 49\,\text{J} = 123\,\text{J}$. Der erste Hauptsatz ist erfüllt.
```

## Adiabatische Zustandsänderungen: ohne Wärmeaustausch

```aufgabe
id: p11-4-check
art: check
titel: "Vorhersage: isotherm oder adiabatisch?"
niveau: 1
angabe: |
  Zwei gleiche Gasportionen starten im selben Zustand und dehnen sich auf dasselbe Endvolumen aus. Die eine bleibt dabei durch Wärmekontakt auf konstanter Temperatur (isotherm). Die andere ist perfekt isoliert, es fließt keine Wärme. Welche Portion hat am Ende den **kleineren** Druck? Sag es voraus, bevor du weiterliest.
teile:
  - typ: auswahl
    optionen:
      - "Die isolierte Portion, weil sie sich beim Ausdehnen zusätzlich abkühlt."
      - "Die isotherme Portion, weil sie Wärme aufnimmt."
      - "Beide haben denselben Druck, weil das Endvolumen gleich ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die aufgenommene Wärme hält die isotherme Portion warm. Wärmeres Gas drückt stärker, nicht schwächer.
      - wert: 2
        meldung: Gleiches Volumen heißt nur dann gleicher Druck, wenn auch die Temperatur gleich ist. Nach $pV = nRT$ hängt der Druck bei festem Volumen von $T$ ab.
hinweise:
  - Die isolierte Portion verrichtet Arbeit, bekommt aber keine Wärme nach. Was passiert mit ihrer inneren Energie und damit mit ihrer Temperatur?
loesung: |
  Die isolierte Portion verrichtet Arbeit, ohne Wärme zu bekommen. Ihre innere Energie und damit ihre Temperatur sinken.
  ---
  Bei gleichem Volumen bedeutet tiefere Temperatur nach $pV = nRT$ kleineren Druck. Die isolierte Portion hat also den kleineren Druck. Die Grundlagen stehen in [11.3 Isochor, isobar, isotherm](/lernen/physik1/hauptsaetze-waermekraftmaschinen/isochor-isobar-isotherm-drei-zustandsaenderungen).
```

**Worum geht es?** Viele Vorgänge laufen so schnell ab, dass keine Zeit für Wärmeaustausch bleibt. Dann
ändert sich die Temperatur eines Gases allein durch Arbeit. Solche Vorgänge heißen **adiabatisch**, vom
griechischen Wort für „nicht hindurchgehend“: Keine Wärme geht durch die Wand. Sie erklären, warum ein
Dieselmotor ohne Zündkerze zündet und warum es auf Bergen kalt ist.

### Die Energiebilanz ohne Wärme

Adiabatisch heißt $Q = 0$. Das erreicht man auf zwei Arten. Entweder ist das Gas gut isoliert, etwa in
einer Thermoskanne. Oder der Vorgang ist so schnell, dass kaum Wärme fließen kann, etwa beim Verdichten im
Motor. Der erste Hauptsatz wird dann zu
$$\Delta U = W.$$
Wird das Gas zusammengedrückt, ist $W > 0$, also steigt die innere Energie, und das Gas wird **heiß**.
Dehnt es sich aus, ist $W < 0$, und es wird **kalt**. Beim idealen Gas gilt zusätzlich
$\Delta U = n\,C_V\,\Delta T$. Damit ist die **adiabatische Arbeit**
$$W = n\,C_V\,(T_2 - T_1).$$
Dabei sind $T_1$ und $T_2$ Anfangs- und Endtemperatur in Kelvin und $C_V = \tfrac f2 R$.

:::intuition
Warum kühlt ein Gas ab, wenn es sich ausdehnt? Stell dir ein Molekül vor, das gegen einen zurückweichenden
Kolben prallt. Es kommt langsamer zurück, so wie ein Tennisball, den du mit nachgebendem Schläger
auffängst. Bewegt sich der Kolben dem Molekül entgegen, prallt es schneller zurück. Langsamere Moleküle
bedeuten tiefere Temperatur. Das ist das Teilchenbild zu $\Delta U = W$.
:::

:::beispiel[Wie viel Arbeit gibt ein adiabatisch expandierendes Gas ab?]
$0{,}10\,\text{mol}$ Luft ($f = 5$) dehnen sich adiabatisch aus und kühlen dabei von $300\,\text{K}$ auf
$240\,\text{K}$ ab. Wie viel Arbeit verrichtet die Luft?

**Schritt 1, Prozess:** Adiabatisch, also $Q = 0$ und $W = \Delta U = n\,C_V\,\Delta T$.

**Schritt 2, einsetzen:** $W = 0{,}10\,\text{mol}\cdot\tfrac52\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot(-60\,\text{K}) = -125\,\text{J}$.

**Antwort:** Die Arbeit am Gas ist $-125\,\text{J}$, die Luft verrichtet also $125\,\text{J}$ Arbeit nach
außen. Diese Energie stammt vollständig aus ihrer inneren Energie. Deshalb kühlt sie ab.
:::

### Die Adiabatengleichungen nach Poisson

Wie hängen Druck, Volumen und Temperatur bei einer adiabatischen Zustandsänderung zusammen? Die Antwort
fand der französische Mathematiker Siméon Denis Poisson. Für das ideale Gas gilt:
$$p\,V^\kappa = \text{konstant}, \qquad T\,V^{\kappa - 1} = \text{konstant}, \qquad \kappa = \frac{C_p}{C_V} = \frac{f + 2}{f}.$$
Dabei ist $\kappa$ (griechisch „kappa“) der **Adiabatenexponent**. Für einatomige Gase ist
$\kappa = \tfrac53 \approx 1{,}67$, für Luft $\kappa = \tfrac75 = 1{,}4$. Die Herleitung braucht
Differentialrechnung und ist für die Prüfung nicht nötig. Die Gleichungen anwenden musst du aber können.

In der Praxis schreibt man sie als Vergleich von Anfang und Ende:
$$p_2 = p_1\left(\frac{V_1}{V_2}\right)^{\kappa}, \qquad T_2 = T_1\left(\frac{V_1}{V_2}\right)^{\kappa - 1}.$$
Die Hochzahlen sind Kommazahlen wie $1{,}4$ oder $0{,}4$. Der Taschenrechner kann das mit der
Potenz-Taste. Wie Potenzen mit solchen Hochzahlen funktionieren, steht im Mathematikkurs in
[1.10 Potenzen mit rationalen Hochzahlen](/lernen/mathe3/zahlen/potenzen-mit-rationalen-hochzahlen).

:::beispiel[Luft wird auf ein Achtel verdichtet]
Luft mit $300\,\text{K}$ und $1{,}0\,\text{bar}$ wird schnell auf ein Achtel ihres Volumens zusammengedrückt.
Welche Temperatur und welchen Druck hat sie danach?

**Schritt 1, Verhältnis:** $V_1/V_2 = 8$, und für Luft ist $\kappa = 1{,}4$.

**Schritt 2, Temperatur:** $T_2 = 300\,\text{K}\cdot 8^{0{,}4} = 300\,\text{K}\cdot 2{,}297 = 689\,\text{K}$, also rund $416\,^\circ\text{C}$.

**Schritt 3, Druck:** $p_2 = 1{,}0\,\text{bar}\cdot 8^{1{,}4} = 1{,}0\,\text{bar}\cdot 18{,}4 = 18{,}4\,\text{bar}$.

**Probe mit der Zustandsgleichung:** $\dfrac{p_2V_2}{T_2} = \dfrac{18{,}4\cdot\tfrac18}{689} = \dfrac{1}{300}$, und das ist
derselbe Wert wie $\dfrac{p_1V_1}{T_1} = \dfrac{1\cdot 1}{300}$. Die Stoffmenge bleibt gleich, die Rechnung stimmt.
:::

Bei einer isothermen Verdichtung auf ein Achtel wäre der Druck nur auf $8\,\text{bar}$ gestiegen. Bei der
adiabatischen Verdichtung kommt die Erwärmung dazu, deshalb ist der Druck mehr als doppelt so hoch. Im
p-V-Diagramm verläuft die **Adiabate** deshalb steiler als die **Isotherme** durch denselben Punkt.

:::achtung[Fehler: Temperatur in Grad Celsius eingesetzt]
Luft mit $20\,^\circ\text{C}$ wird adiabatisch auf ein Achtel verdichtet. Ein Schüler rechnet:
„$T_2 = 20\,^\circ\text{C}\cdot 8^{0{,}4} = 46\,^\circ\text{C}$.“

Die Poisson-Gleichung ist ein Verhältnis, und Verhältnisse von Temperaturen gelten nur in Kelvin.
Richtig: $T_2 = 293{,}15\,\text{K}\cdot 8^{0{,}4} = 673\,\text{K} = 400\,^\circ\text{C}$. Der Fehler ist riesig. Mit
$0\,^\circ\text{C}$ am Anfang käme sogar $0\,^\circ\text{C}$ heraus, als würde sich gar nichts erwärmen.
:::

:::achtung[Fehler: Boyle-Mariotte bei schneller Verdichtung]
Eine Schülerin soll den Druck nach der schnellen Verdichtung von $1{,}0\,\text{bar}$ auf ein Achtel des
Volumens berechnen. Sie schreibt: „$p_1V_1 = p_2V_2$, also $p_2 = 8{,}0\,\text{bar}$.“

Boyle-Mariotte gilt nur bei **konstanter Temperatur**. Bei schneller Verdichtung wird die Luft heiß.
Richtig ist $p_2 = p_1(V_1/V_2)^{1{,}4} = 18{,}4\,\text{bar}$. Frag dich vor jeder Rechnung: Bleibt die
Temperatur gleich, oder fließt keine Wärme?
:::

### Isotherme und Adiabate im Vergleich

Im folgenden Werkzeug kannst du beide Prozesse vergleichen. Arbeitsauftrag in drei Schritten:

1. **Vorhersage:** Wähle „adiabatisch“. Welche Kurve wird steiler sein, die Adiabate oder die gestrichelte
   Isotherme? Notiere deine Vermutung.
2. **Beobachtung:** Vergrößere $V_2$ von $25$ auf $40\,\text{L}$. Lies die Endtemperatur und die Arbeit ab.
3. **Erklärung:** Begründe mit $\Delta U = W$, warum die Temperatur sinkt, obwohl keine Wärme abfließt.

```widget
name: pv-diagramm
titel: Adiabate und Isotherme im p-V-Diagramm
props:
  prozess: adiabatisch
  n: 1
  f: 3
  V1: 10
  T1: 400
  V2: 25
```

Die adiabatische Kurve fällt steiler, weil das Gas ohne Wärmenachschub abkühlt. Der Druck sinkt also
aus zwei Gründen: wegen des größeren Volumens und wegen der tieferen Temperatur. Das Werkzeug zeigt die
Arbeit als $W_\text{vom Gas}$, also positiv bei einer Ausdehnung.

**Adiabatische Vorgänge im Alltag:**

- **Dieselmotor:** Luft wird etwa auf ein Zwanzigstel verdichtet und dabei über $600\,^\circ\text{C}$ heiß.
  Der eingespritzte Kraftstoff zündet von selbst.
- **Sektflasche:** Beim Öffnen dehnt sich das Gas im Hals schlagartig aus und kühlt so stark ab, dass
  ein kleiner Nebel entsteht.
- **Wolken:** Aufsteigende Luft dehnt sich aus und kühlt um etwa $1\,\text{K}$ pro $100\,\text{m}$ ab.
  Mehr dazu in [11.11 Luftfeuchtigkeit, Taupunkt, Wolken und Föhn](/lernen/physik1/hauptsaetze-waermekraftmaschinen/luftfeuchtigkeit-taupunkt-wolken-und-foehn).

```reflexion
frage: Warum verläuft die Adiabate im p-V-Diagramm steiler als die Isotherme durch denselben Anfangspunkt? Erkläre mit dem ersten Hauptsatz und der Zustandsgleichung.
antwort: |
  Bei der isothermen Ausdehnung fließt Wärme nach, die Temperatur bleibt gleich, und der Druck sinkt nur, weil das
  Volumen wächst ($p \sim 1/V$). Bei der adiabatischen Ausdehnung fließt keine Wärme. Die Arbeit des Gases geht ganz zu
  Lasten der inneren Energie, also sinkt die Temperatur. Nach $p = nRT/V$ sinkt der Druck dann zusätzlich wegen der
  kleineren Temperatur. Deshalb fällt die Adiabate schneller ab.
```

:::merke[Adiabatische Zustandsänderung]
- $Q = 0$, also $\Delta U = W = n\,C_V\,(T_2 - T_1)$.
- $p\,V^\kappa$ und $T\,V^{\kappa-1}$ bleiben konstant, $\kappa = \tfrac{f+2}{f}$: $1{,}67$ für Edelgase, $1{,}4$ für Luft.
- Temperaturen immer in Kelvin. Kompression erwärmt, Expansion kühlt.
:::

### Aufgaben zu adiabatischen Vorgängen

```aufgabe
id: p11-fahrradpumpe
titel: Warme Fahrradpumpe
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Beim schnellen Aufpumpen eines Reifens wird die Pumpe unten warm. Welche Erklärung ist physikalisch richtig?
teile:
  - typ: auswahl
    optionen:
      - "Nur durch die Reibung des Kolbens."
      - "Die Luft wird nahezu adiabatisch verdichtet. Die am Gas verrichtete Arbeit erhöht ihre innere Energie."
      - "Weil der Druck steigt, steigt automatisch die Temperatur, auch bei sehr langsamem Pumpen."
      - "Die Luft nimmt Wärme von der Hand auf."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Reibung trägt etwas bei, ist aber nicht die Hauptursache. Die Pumpe wird genau dort am wärmsten, wo die Luft am stärksten verdichtet wird, nämlich unten.
      - wert: 2
        meldung: Bei sehr langsamem Pumpen fließt die Wärme laufend an die Umgebung ab. Dann steigt der Druck, die Temperatur aber kaum (isotherm).
      - wert: 3
        meldung: Die Hand ist kühler als die heiße Pumpe. Wärme fließt von der Pumpe zur Hand, nicht umgekehrt.
hinweise:
  - Beim schnellen Pumpen bleibt kaum Zeit für Wärmeaustausch. Welcher Prozesstyp ist das, und was sagt der erste Hauptsatz dazu?
loesung: |
  Beim schnellen Pumpen bleibt kaum Zeit für Wärmeaustausch, der Vorgang ist fast adiabatisch: $Q \approx 0$ und $\Delta U = W > 0$.
  ---
  Die innere Energie der Luft steigt, also auch ihre Temperatur. Bei sehr langsamem Pumpen (isotherm) bliebe die Luft kühl, Reibung spielt nur eine Nebenrolle.
```

```aufgabe
id: p11-4-vorzeichen-adiabat
titel: Innere Energie bei adiabatischer Ausdehnung
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Gas dehnt sich in einem isolierten Zylinder aus und verrichtet dabei $250\,\text{J}$ Arbeit am Kolben. Wie groß ist $\Delta U$?
teile:
  - typ: zahl
    loesung: "-250"
    einheit: "J"
    fehler:
      - wert: "250"
        meldung: Das Gas gibt Arbeit ab, also verliert es Energie. Die Arbeit **am** Gas ist $W = -250\,\text{J}$, und $\Delta U = W$.
      - wert: "0"
        meldung: Ohne Wärme ändert sich die innere Energie trotzdem, nämlich durch die Arbeit. Nur bei konstanter Temperatur wäre $\Delta U = 0$.
hinweise:
  - Isoliert heißt $Q = 0$. Dann ist $\Delta U = W$ mit der Arbeit **am** Gas.
loesung: |
  **Ansatz:** Isolierter Zylinder, also adiabatisch: $Q = 0$ und $\Delta U = W$.
  ---
  Das Gas verrichtet $250\,\text{J}$, also ist $W = -250\,\text{J}$ und $\Delta U = -250\,\text{J}$. Das Gas kühlt ab.
```

```aufgabe
id: p11-4-adiabat-arbeit
titel: Arbeit bei adiabatischer Expansion
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  $0{,}50\,\text{mol}$ Helium dehnen sich adiabatisch aus. Die Temperatur sinkt dabei von $400\,\text{K}$ auf $250\,\text{K}$. Wie viel Arbeit verrichtet das Gas nach außen?
teile:
  - typ: zahl
    loesung: "1.5*0.5*8.314*150"
    einheit: "J"
    anzeige: '935'
    fehler:
      - wert: "2.5*0.5*8.314*150"
        meldung: Du hast $f = 5$ verwendet. Helium ist einatomig, also $C_V = \tfrac32 R$.
      - wert: "0.5*8.314*150"
        meldung: Das wäre die isobare Arbeit $nR\,\Delta T$. Adiabatisch stammt die Arbeit aus der inneren Energie, also $n\,C_V\,\Delta T$.
hinweise:
  - Ohne Wärme stammt die gesamte Arbeit aus der inneren Energie. Wie groß ist $\Delta U$?
  - '$W_\text{vom Gas} = -\Delta U = n\,C_V\,(T_1 - T_2)$ mit $C_V = \tfrac32 R$.'
loesung: |
  **Ansatz:** Adiabatisch, also $Q = 0$ und $\Delta U = W$. Die Arbeit des Gases ist $W_\text{vom Gas} = -\Delta U$.
  ---
  $\Delta U = n\,C_V\,\Delta T = 0{,}50\,\text{mol}\cdot 1{,}5\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot(-150\,\text{K}) = -935\,\text{J}$.
  ---
  Also $W_\text{vom Gas} = +935\,\text{J}$. Das Gas verrichtet $935\,\text{J}$ Arbeit und kühlt dafür um $150\,\text{K}$ ab.
```

```aufgabe
id: p11-4-poisson-volumen
titel: Wie weit muss sich Luft ausdehnen?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  $2{,}0\,\text{L}$ Luft ($\kappa = 1{,}4$) mit $350\,\text{K}$ dehnen sich adiabatisch aus, bis sie nur noch $280\,\text{K}$ hat. Wie groß ist das Endvolumen in Litern?
teile:
  - typ: zahl
    loesung: "2*(350/280)^(1/0.4)"
    einheit: "L"
    anzeige: '3{,}49'
    fehler:
      - wert: "2*350/280"
        meldung: Du hast das Volumen proportional zur Temperatur gesetzt. Das gilt nur bei konstantem Druck (Gay-Lussac). Adiabatisch gilt $TV^{\kappa-1} = \text{konstant}$.
      - wert: "2*(350/280)^(1/1.4)"
        meldung: Du hast mit dem Exponenten $1/\kappa$ gerechnet. Für die Temperatur gilt aber $TV^{\kappa - 1}$, also brauchst du $1/(\kappa - 1) = 2{,}5$.
hinweise:
  - 'Verwende $T_1V_1^{\kappa-1} = T_2V_2^{\kappa-1}$ und stelle nach $V_2$ um.'
  - 'Teile durch $T_2$ und ziehe dann die $(\kappa - 1)$-te Wurzel: $V_2 = V_1\,(T_1/T_2)^{1/(\kappa - 1)}$.'
gefuehrt:
  - text: Wie groß ist $\kappa - 1$ für Luft?
    teil: { typ: zahl, loesung: "0.4" }
    erklaerung: $\kappa - 1 = 1{,}4 - 1 = 0{,}4$.
  - text: Wie groß ist das Temperaturverhältnis $T_1/T_2$?
    teil: { typ: zahl, loesung: "350/280" }
    erklaerung: $350/280 = 1{,}25$. Beide Temperaturen sind schon in Kelvin.
  - text: Berechne den Faktor $(T_1/T_2)^{1/0{,}4}$.
    teil: { typ: zahl, loesung: "1.25^2.5" }
    erklaerung: $1/0{,}4 = 2{,}5$ und $1{,}25^{2{,}5} = 1{,}747$. Um diesen Faktor wächst das Volumen.
  - text: Berechne das Endvolumen in Litern.
    teil: { typ: zahl, loesung: "2*1.25^2.5" }
    erklaerung: $V_2 = 2{,}0\,\text{L}\cdot 1{,}747 = 3{,}49\,\text{L}$.
loesung: |
  **Ansatz:** Adiabatisch gilt $T_1V_1^{\kappa - 1} = T_2V_2^{\kappa - 1}$.
  ---
  **Umstellen:** Wir teilen durch $T_2$: $V_2^{\kappa-1} = V_1^{\kappa-1}\cdot T_1/T_2$. Dann ziehen wir auf beiden Seiten die $(\kappa-1)$-te Wurzel, das heißt hoch $1/(\kappa-1)$: $V_2 = V_1\,(T_1/T_2)^{1/(\kappa-1)}$.
  ---
  $V_2 = 2{,}0\,\text{L}\cdot 1{,}25^{2{,}5} = 2{,}0\,\text{L}\cdot 1{,}747 = 3{,}49\,\text{L}$.
  ---
  **Plausibilität:** Um $20\,\%$ abzukühlen, muss sich die Luft um $75\,\%$ ausdehnen. Das ist viel, weil die gesamte Abkühlung aus der Arbeit des Gases stammen muss. Probe: $350\cdot 2{,}0^{0{,}4} = 461{,}8$ und $280\cdot 3{,}494^{0{,}4} = 461{,}8$, also ist $TV^{0{,}4}$ gleich geblieben.
```

```aufgabe
id: p11-4-isotherm-vs-adiabat
titel: Welche Kurve ist die Adiabate?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt zwei Ausdehnungen von Luft, die im selben Punkt beginnen. Die eine ist isotherm, die andere adiabatisch. Welche Aussage stimmt?
plot:
  x: [0, 30]
  y: [0, 450]
  achsen: { x: "V in L", y: "p in kPa" }
  graphen:
    - { f: "400*(10/x)^1.4", label: "Kurve 1", farbe: 0, von: 10, bis: 28 }
    - { f: "4000/x", label: "Kurve 2", farbe: 1, von: 10, bis: 28 }
  punkte:
    - { x: 10, y: 400, label: "Start" }
teile:
  - typ: auswahl
    optionen:
      - "Kurve 1 ist die Adiabate, weil das Gas ohne Wärmenachschub zusätzlich abkühlt."
      - "Kurve 2 ist die Adiabate, weil ohne Wärmeaustausch der Druck langsamer sinkt."
      - "Kurve 1 ist die Isotherme, weil bei konstanter Temperatur der Druck am stärksten fällt."
      - "Man kann es nicht entscheiden, weil beide im selben Punkt beginnen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ohne Wärmeaustausch kühlt das Gas ab. Tiefere Temperatur bedeutet bei gleichem Volumen kleineren Druck. Die Adiabate liegt also tiefer.
      - wert: 2
        meldung: Bei konstanter Temperatur sinkt der Druck nur wegen des Volumens. Bei der Adiabate kommt die Abkühlung dazu, deshalb fällt sie stärker.
      - wert: 3
        meldung: Der gemeinsame Startpunkt ist gerade die Voraussetzung für den Vergleich. Entscheidend ist, welche Kurve danach schneller fällt.
hinweise:
  - Vergleiche die Drücke bei $25\,\text{L}$. Welches Gas ist dort kälter?
  - Isotherm gilt $pV = $ konstant, adiabatisch $pV^{1{,}4} = $ konstant. Welche Kurve fällt schneller?
loesung: |
  **Ansatz:** Beide Gase haben am Ende dasselbe Volumen. Das adiabatische Gas hat keine Wärme bekommen und ist kälter.
  ---
  Nach $p = nRT/V$ hat das kältere Gas bei gleichem Volumen den kleineren Druck. Bei $25\,\text{L}$ liest man ab: Kurve 1 etwa $111\,\text{kPa}$, Kurve 2 etwa $160\,\text{kPa}$.
  ---
  **Antwort:** Kurve 1 fällt steiler, sie ist die Adiabate. Kurve 2 ist die Isotherme $p = 4000\,\text{kPa L}/V$.
```

```aufgabe
id: p11-diesel-temperatur
titel: Zündung im Dieselmotor
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Im Dieselmotor wird Luft ($\kappa = 1{,}4$) mit $20\,^\circ\text{C}$ und $1{,}0\,\text{bar}$ adiabatisch auf $1/18$ ihres Volumens verdichtet. Berechne die Endtemperatur in °C und den Enddruck in bar. Dieselkraftstoff entzündet sich ab etwa $250\,^\circ\text{C}$. Reicht die Verdichtung zur Selbstzündung?
teile:
  - typ: zahl
    label: Endtemperatur
    loesung: "293.15*18^0.4-273.15"
    einheit: "°C"
    anzeige: '658'
    fehler:
      - wert: "20*18^0.4"
        meldung: Du hast in Grad Celsius gerechnet. Die Poisson-Gleichung ist ein Verhältnis und gilt nur für Kelvin-Temperaturen.
  - typ: zahl
    label: Enddruck
    loesung: "1.0*18^1.4"
    einheit: "bar"
    anzeige: '57{,}2'
    fehler:
      - wert: "18"
        meldung: Das wäre Boyle-Mariotte, also isotherm. Bei der schnellen Verdichtung wird die Luft heiß, deshalb gilt $p_2 = p_1(V_1/V_2)^\kappa$.
hinweise:
  - '$TV^{\kappa-1} = $ konstant, also $T_2 = T_1(V_1/V_2)^{\kappa - 1}$ mit $T_1$ in Kelvin.'
  - '$pV^\kappa = $ konstant, also $p_2 = p_1(V_1/V_2)^{\kappa}$.'
loesung: |
  **Modell:** Die Verdichtung im Motor dauert nur Hundertstelsekunden, also adiabatisch. $V_1/V_2 = 18$, $T_1 = 293{,}15\,\text{K}$.
  ---
  **Temperatur:** $T_2 = 293{,}15\,\text{K}\cdot 18^{0{,}4} = 293{,}15\,\text{K}\cdot 3{,}178 = 932\,\text{K} = 658\,^\circ\text{C}$.
  ---
  **Druck:** $p_2 = 1{,}0\,\text{bar}\cdot 18^{1{,}4} = 57{,}2\,\text{bar}$.
  ---
  **Probe und Antwort:** $\dfrac{p_2V_2}{T_2} = \dfrac{57{,}2\cdot\tfrac{1}{18}}{932} = \dfrac{1}{293}$ stimmt mit $\dfrac{p_1V_1}{T_1}$ überein. Mit $658\,^\circ\text{C}$ liegt die Luft weit über $250\,^\circ\text{C}$. Der Kraftstoff zündet sicher von selbst.
```

## Kreisprozesse und der Wirkungsgrad

```aufgabe
id: p11-5-check
art: check
titel: "Vorwissen: Wohin geht die Energie?"
niveau: 1
angabe: |
  Ein Kranmotor nimmt $20\,\text{kJ}$ elektrische Energie auf und hebt damit eine Last. Die Hubarbeit beträgt $15\,\text{kJ}$. Wie viel Energie wird dabei zu Wärme (Reibung, Erwärmung der Wicklungen)?
teile:
  - typ: zahl
    loesung: "20-15"
    einheit: "kJ"
    anzeige: '5'
    fehler:
      - wert: "15/20*100"
        meldung: Das ist der Wirkungsgrad in Prozent. Gefragt ist die Energie, die nicht genutzt wird.
      - wert: "0"
        meldung: Energie geht nicht verloren, aber sie wird nicht vollständig zu Hubarbeit. Der Rest erscheint als Wärme.
hinweise:
  - Nach dem Energieerhaltungssatz ist aufgenommene Energie gleich Nutzenergie plus Wärme.
loesung: |
  Energie bleibt erhalten: $E_\text{zu} = E_\text{nutz} + E_\text{Wärme}$.
  ---
  $E_\text{Wärme} = 20\,\text{kJ} - 15\,\text{kJ} = 5\,\text{kJ}$. Der Wirkungsgrad ist $15/20 = 75\,\%$. Wiederholen: [4.6 Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

**Worum geht es?** Ein Motor soll nicht nur einmal Arbeit verrichten, sondern immer wieder. Dafür muss
sein Gas nach jeder Arbeitsrunde in den Anfangszustand zurückkehren. In diesem Abschnitt lernst du,
warum dabei immer Abwärme entsteht und wie man den Wirkungsgrad einer solchen Maschine berechnet.

### Wärmekraftmaschinen und Kreisprozesse

Eine **Wärmekraftmaschine** ist eine Maschine, die dauerhaft Wärme in mechanische Arbeit umwandelt.
Beispiele sind die Dampfmaschine, der Automotor, die Dampfturbine im Kraftwerk und das Strahltriebwerk.
Ein Elektromotor ist dagegen **keine** Wärmekraftmaschine. Er wandelt elektrische Energie in Arbeit um,
ohne den Umweg über Wärme.

Damit die Maschine dauerhaft läuft, muss das **Arbeitsmittel** (Gas oder Dampf) immer wieder in seinen
Anfangszustand zurückkehren. Es durchläuft einen **Kreisprozess**. Im p-V-Diagramm ist das eine
geschlossene Kurve. Nach einem Umlauf hat das Gas wieder dieselbe innere Energie, also gilt $\Delta U = 0$.

Wird die Kurve **im Uhrzeigersinn** durchlaufen, dehnt sich das Gas bei hohem Druck aus und gibt dabei
viel Arbeit ab. Zurückgedrückt wird es bei niedrigem Druck, das kostet weniger Arbeit. Netto bleibt
Arbeit übrig. Sie ist genau die **von der Kurve eingeschlossene Fläche**: Fläche unter dem oberen Weg
minus Fläche unter dem unteren Weg.

```plot
x: [0, 6]
y: [0, 2.6]
hoehe: 280
achsen: { x: "V in L", y: "p in bar" }
flaechen:
  - { f: "2", g: "1", von: 2, bis: 5, farbe: 0 }
strecken:
  - { von: [2, 1], nach: [2, 2], farbe: 0 }
  - { von: [2, 2], nach: [5, 2], farbe: 0 }
  - { von: [5, 2], nach: [5, 1], farbe: 0 }
  - { von: [5, 1], nach: [2, 1], farbe: 0 }
vektoren:
  - { von: [3, 2], nach: [4, 2], farbe: 1 }
  - { von: [4, 1], nach: [3, 1], farbe: 1 }
punkte:
  - { x: 2, y: 1, label: "A" }
  - { x: 2, y: 2, label: "B" }
  - { x: 5, y: 2, label: "C" }
  - { x: 5, y: 1, label: "D" }
beschriftung: "Rechteckiger Kreisprozess A–B–C–D im Uhrzeigersinn. Oben dehnt sich das Gas bei 2 bar aus, unten wird es bei 1 bar zurückgedrückt. Die eingeschlossene, gefärbte Fläche ist die Nettoarbeit pro Umlauf."
```

### Warum es zwei Wärmebehälter braucht

Damit das Gas bei der Rückkehr einen **kleineren** Druck hat, muss es zwischendurch abgekühlt werden. Jede
Wärmekraftmaschine braucht deshalb zwei **Reservoire** (Wärmebehälter). Aus einem **heißen** Reservoir
nimmt sie die Wärme $Q_\text{zu}$ auf, etwa aus einer Flamme. An ein **kaltes** Reservoir gibt sie die
Wärme $|Q_\text{ab}|$ ab, etwa an Kühlwasser oder an die Umgebungsluft. Die Betragsstriche bedeuten: Wir
rechnen hier mit der positiven Menge, die abgegeben wird.

Weil nach einem Umlauf $\Delta U = 0$ gilt, ist die Nutzarbeit genau die Differenz der beiden Wärmen:
$$W_\text{nutz} = Q_\text{zu} - |Q_\text{ab}|.$$
Dabei ist $W_\text{nutz}$ die netto vom Gas verrichtete Arbeit pro Umlauf.

```plot
x: [0, 10]
y: [0, 8]
gleich: true
hoehe: 300
strecken:
  - { von: [2, 7], nach: [8, 7], farbe: 1 }
  - { von: [2, 1], nach: [8, 1], farbe: 0 }
  - { von: [4, 3.2], nach: [6, 3.2], farbe: 2 }
  - { von: [6, 3.2], nach: [6, 4.8], farbe: 2 }
  - { von: [6, 4.8], nach: [4, 4.8], farbe: 2 }
  - { von: [4, 4.8], nach: [4, 3.2], farbe: 2 }
vektoren:
  - { von: [5, 6.9], nach: [5, 4.9], label: "Q_zu", farbe: 1 }
  - { von: [5, 3.1], nach: [5, 1.1], label: "|Q_ab|", farbe: 0 }
  - { von: [6.1, 4], nach: [9, 4], label: "W_nutz", farbe: 3 }
punkte:
  - { x: 3, y: 7.4, label: "heißes Reservoir" }
  - { x: 3, y: 0.6, label: "kaltes Reservoir" }
  - { x: 5, y: 4, label: "Maschine" }
beschriftung: "Energieflussbild einer Wärmekraftmaschine. Aus dem heißen Reservoir fließt Q_zu in die Maschine. Ein Teil verlässt sie als Nutzarbeit, der Rest fließt als Abwärme in das kalte Reservoir."
```

:::definition[Wirkungsgrad einer Wärmekraftmaschine]
Der **Wirkungsgrad** $\eta$ (griechisch „eta“) ist der Anteil der zugeführten Wärme, der zu Arbeit wird:
$$\eta = \frac{W_\text{nutz}}{Q_\text{zu}} = 1 - \frac{|Q_\text{ab}|}{Q_\text{zu}}.$$
Dabei ist $Q_\text{zu}$ nur die Wärme, die in den Teilschritten mit $Q > 0$ **hineinfließt**.

**Beispiel:** Ein Motor nimmt pro Takt $2{,}0\,\text{kJ}$ Wärme auf und gibt $1{,}4\,\text{kJ}$ ab. Dann ist
$W_\text{nutz} = 0{,}6\,\text{kJ}$ und $\eta = 0{,}6/2{,}0 = 30\,\%$.

**Kein Beispiel:** Ein Elektroheizstab wandelt Strom zu $100\,\%$ in Wärme um. Das ist kein Wirkungsgrad
einer Wärmekraftmaschine. Er wandelt nicht Wärme in Arbeit um, sondern umgekehrt.
:::

Weil jede Wärmekraftmaschine Abwärme abgeben muss, ist ihr Wirkungsgrad immer kleiner als $1$. Wie
groß er höchstens werden kann, zeigt [11.6 Der Carnot-Prozess](/lernen/physik1/hauptsaetze-waermekraftmaschinen/der-carnot-prozess-die-obergrenze-des-wirkungsgrads).

### Die Standardaufgabe: ein Kreisprozess Schritt für Schritt

In Prüfungen kommt oft ein Kreisprozess aus mehreren Teilschritten vor. Man berechnet für jeden Schritt
$W$, $\Delta U$ und $Q$, trägt alles in eine Tabelle ein und bestimmt dann den Wirkungsgrad. Ein Trick
spart dabei Arbeit: Weil $pV = nRT$ ist, gilt $U = \tfrac f2\,nRT = \tfrac f2\,pV$. Man kann die innere
Energie also direkt aus Druck und Volumen ablesen, ohne die Stoffmenge zu kennen.

:::beispiel[Rechteckiger Kreisprozess mit einem einatomigen Gas]
Ein einatomiges Gas ($f = 3$) durchläuft den Kreisprozess aus dem Diagramm dieses Abschnitts: A
($2{,}0\,\text{L}$, $1{,}0\,\text{bar}$), B ($2{,}0\,\text{L}$, $2{,}0\,\text{bar}$), C ($5{,}0\,\text{L}$,
$2{,}0\,\text{bar}$), D ($5{,}0\,\text{L}$, $1{,}0\,\text{bar}$). Berechne Nettoarbeit und Wirkungsgrad.

**Schritt 1, $pV$ in jeder Ecke:** Mit $1\,\text{bar L} = 100\,\text{J}$ ist $pV$ in A $200\,\text{J}$, in B
$400\,\text{J}$, in C $1000\,\text{J}$ und in D $500\,\text{J}$. Die innere Energie ist jeweils $\tfrac32\,pV$.

**Schritt 2, Tabelle:** $W$ ist die Arbeit am Gas, $\Delta U = \tfrac32\,\Delta(pV)$ und $Q = \Delta U - W$.

| Schritt | Art | $W$ | $\Delta U$ | $Q$ | Bedeutung |
|---|---|---|---|---|---|
| A → B | isochor | $0$ | $+300\,\text{J}$ | $+300\,\text{J}$ | Wärme fließt hinein. |
| B → C | isobar | $-600\,\text{J}$ | $+900\,\text{J}$ | $+1500\,\text{J}$ | Wärme fließt hinein. |
| C → D | isochor | $0$ | $-750\,\text{J}$ | $-750\,\text{J}$ | Wärme fließt hinaus. |
| D → A | isobar | $+300\,\text{J}$ | $-450\,\text{J}$ | $-750\,\text{J}$ | Wärme fließt hinaus. |
| Summe | | $-300\,\text{J}$ | $0$ | $+300\,\text{J}$ | Probe stimmt. |

**Schritt 3, Probe:** Die Spalte $\Delta U$ ergibt in Summe null, wie es für einen Kreisprozess sein muss.
Die Nettoarbeit des Gases ist $300\,\text{J}$, genau die Rechteckfläche $1{,}0\,\text{bar}\cdot 3{,}0\,\text{L}$.

**Schritt 4, Wirkungsgrad:** Zugeführt wird Wärme nur in A → B und B → C, zusammen
$Q_\text{zu} = 1800\,\text{J}$. Also ist $\eta = 300\,\text{J}/1800\,\text{J} = 16{,}7\,\%$.
:::

:::achtung[Fehler: Wirkungsgrad mit der Netto-Wärme berechnet]
Ein Schüler liest in der Summenzeile $Q = 300\,\text{J}$ ab und rechnet:
„$\eta = W_\text{nutz}/Q = 300\,\text{J}/300\,\text{J} = 100\,\%$.“

Die Summenzeile enthält aber die zugeführte **minus** die abgegebene Wärme. Netto-Wärme und Nettoarbeit sind
nach dem ersten Hauptsatz immer gleich, das Verhältnis wäre also immer $100\,\%$. In den Nenner gehört nur
die **zugeführte** Wärme, die Summe der positiven $Q$-Werte: $1800\,\text{J}$. Richtig ist $\eta = 16{,}7\,\%$.
:::

:::achtung[Fehler: nur die Fläche unter dem oberen Weg genommen]
Eine Schülerin bestimmt die Nettoarbeit des Rechteckprozesses als Fläche unter der oberen Linie:
„$W = 2{,}0\,\text{bar}\cdot 3{,}0\,\text{L} = 600\,\text{J}$.“

Das ist nur die Arbeit, die das Gas beim Ausdehnen abgibt. Beim Zurückdrücken auf der unteren Linie muss
man $1{,}0\,\text{bar}\cdot 3{,}0\,\text{L} = 300\,\text{J}$ wieder hineinstecken. Netto bleibt die
**eingeschlossene** Fläche, also $600\,\text{J} - 300\,\text{J} = 300\,\text{J}$.
:::

### Wohin die Energie im Auto geht

:::beispiel[Energieflussdiagramm eines Ottomotors]
Ein Ottomotor bekommt aus dem Benzin $100\,\text{kJ}$ chemische Energie. Typische Werte für die Aufteilung
sind: $30\,\text{kJ}$ mechanische Arbeit, $35\,\text{kJ}$ Wärme an das Kühlwasser, $30\,\text{kJ}$ mit den
heißen Abgasen und $5\,\text{kJ}$ durch Reibung und Strahlung.

**Schritt 1, Bilanz prüfen:** $30 + 35 + 30 + 5 = 100$. Keine Energie geht verloren, sie wird nur verteilt.

**Schritt 2, Wirkungsgrad:** $\eta = 30\,\text{kJ}/100\,\text{kJ} = 30\,\%$.

**Schritt 3, Deutung:** Mehr als zwei Drittel der Energie heizen Kühler und Umgebung. Im Stadtverkehr
wird auch ein großer Teil der $30\,\text{kJ}$ Arbeit beim Bremsen wieder zu Wärme. Ein Elektroauto
umgeht die Grenze der Wärmekraftmaschine im Fahrzeug. Sein Motor erreicht über $90\,\%$, ob es insgesamt
besser ist, hängt aber davon ab, wie der Strom erzeugt wurde.
:::

```plot
x: [-0.5, 3.5]
y: [0, 40]
hoehe: 260
achsen: { x: "Arbeit, Kühlwasser, Abgas, Reibung", y: "Energie in kJ" }
balken:
  - { x: 0, y: 30 }
  - { x: 1, y: 35 }
  - { x: 2, y: 30 }
  - { x: 3, y: 5 }
beschriftung: "Aufteilung von 100 kJ Benzinenergie im Ottomotor: 30 kJ Arbeit, 35 kJ an das Kühlwasser, 30 kJ mit dem Abgas, 5 kJ Reibung und Strahlung."
```

**Ein Blick in die Geschichte.** Die ersten Dampfmaschinen von Thomas Newcomen (ab 1712) pumpten Wasser
aus Bergwerken. Ihr Wirkungsgrad lag unter $1\,\%$. James Watt verbesserte sie ab 1769 entscheidend. Er
kühlte den Dampf in einem eigenen, ständig kalten **Kondensator**, statt den heißen Zylinder bei jedem Takt
abzukühlen. Damit trennte er heißes und kaltes Reservoir sauber. Genau diese Trennung erkannte die Theorie
später als Voraussetzung jeder Wärmekraftmaschine.

```reflexion
frage: Warum kann eine Wärmekraftmaschine nicht mit nur einem einzigen Reservoir arbeiten, etwa nur mit der Wärme der Umgebungsluft? Denk an den Kreisprozess im p-V-Diagramm.
antwort: |
  Damit netto Arbeit übrig bleibt, muss das Gas auf dem Rückweg bei kleinerem Druck zusammengedrückt werden als auf dem
  Hinweg. Bei gleichem Volumen heißt kleinerer Druck tiefere Temperatur. Das Gas muss also zwischendurch abgekühlt
  werden, und dafür braucht es einen kälteren Körper, der Wärme aufnimmt. Mit nur einem Reservoir gäbe es keinen
  Temperaturunterschied. Hin- und Rückweg lägen dann aufeinander, und die eingeschlossene Fläche wäre null. Das ist der
  Kern des zweiten Hauptsatzes.
```

:::merke[Kreisprozess auswerten]
1. In jeder Ecke $pV$ bestimmen (in J), daraus $U = \tfrac f2\,pV$.
2. Für jeden Schritt $W$ (Fläche, Vorzeichen), $\Delta U$ und $Q = \Delta U - W$ in eine Tabelle eintragen.
3. Probe: Summe der $\Delta U$ ist null, Summe der $Q$ ist gleich der Nettoarbeit.
4. $Q_\text{zu}$ ist die Summe der **positiven** $Q$. Dann $\eta = W_\text{nutz}/Q_\text{zu}$.
:::

### Aufgaben zu Kreisprozessen

```aufgabe
id: p11-wirkungsgrad
titel: Wirkungsgrad eines Motors
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Motor nimmt pro Zyklus $1000\,\text{J}$ Wärme auf und gibt $300\,\text{J}$ mechanische Arbeit ab. Berechne den Wirkungsgrad in Prozent und die abgegebene Wärme.
teile:
  - typ: zahl
    label: Wirkungsgrad
    loesung: "300/1000*100"
    einheit: "%"
    anzeige: '30'
    fehler:
      - wert: "300/700*100"
        meldung: Du hast die Arbeit durch die Abwärme geteilt. Der Wirkungsgrad vergleicht die Arbeit mit der **zugeführten** Wärme.
  - typ: zahl
    label: abgegebene Wärme
    loesung: "1000-300"
    einheit: "J"
    anzeige: '700'
    fehler:
      - wert: "1000+300"
        meldung: Die Arbeit verlässt die Maschine ebenfalls. Von der zugeführten Wärme bleibt für die Abwärme nur, was nicht zu Arbeit wurde.
hinweise:
  - '$\eta = W_\text{nutz}/Q_\text{zu}$ und $|Q_\text{ab}| = Q_\text{zu} - W_\text{nutz}$.'
loesung: |
  $\eta = \dfrac{W_\text{nutz}}{Q_\text{zu}} = \dfrac{300\,\text{J}}{1000\,\text{J}} = 0{,}30 = 30\,\%$.
  ---
  $|Q_\text{ab}| = Q_\text{zu} - W_\text{nutz} = 1000\,\text{J} - 300\,\text{J} = 700\,\text{J}$. Diese Wärme geht an Kühler und Auspuff.
```

```aufgabe
id: p11-kreisprozess-flaeche
titel: Nettoarbeit aus dem Diagramm ablesen
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Gas durchläuft im p-V-Diagramm im Uhrzeigersinn ein Rechteck mit den Ecken $(1\,\text{L}\mid 1\,\text{bar})$, $(1\,\text{L}\mid 3\,\text{bar})$, $(3\,\text{L}\mid 3\,\text{bar})$ und $(3\,\text{L}\mid 1\,\text{bar})$. Wie groß ist die Nettoarbeit des Gases pro Umlauf?
plot:
  x: [0, 4]
  y: [0, 4]
  achsen: { x: "V in L", y: "p in bar" }
  strecken:
    - { von: [1, 1], nach: [1, 3], farbe: 0 }
    - { von: [1, 3], nach: [3, 3], farbe: 0 }
    - { von: [3, 3], nach: [3, 1], farbe: 0 }
    - { von: [3, 1], nach: [1, 1], farbe: 0 }
teile:
  - typ: zahl
    loesung: "(3e5-1e5)*(3e-3-1e-3)"
    einheit: "J"
    anzeige: '400'
    fehler:
      - wert: "3e5*2e-3"
        meldung: Das ist nur die Fläche unter der oberen Linie. Beim Zurückdrücken unten muss Arbeit hineingesteckt werden. Netto zählt die eingeschlossene Fläche.
      - wert: "4"
        meldung: Die Fläche ist $4\,\text{bar L}$. Rechne noch in Joule um, $1\,\text{bar L} = 100\,\text{J}$.
hinweise:
  - Die Nettoarbeit ist die eingeschlossene Fläche. Rechne sie in SI-Einheiten oder mit $1\,\text{bar L} = 100\,\text{J}$.
loesung: |
  **Fläche:** $\Delta p\cdot\Delta V = 2\,\text{bar}\cdot 2\,\text{L} = 4\,\text{bar L} = 2\cdot 10^5\,\text{Pa}\cdot 2\cdot 10^{-3}\,\text{m}^3 = 400\,\text{J}$.
  ---
  Im Uhrzeigersinn gibt das Gas diese Arbeit netto ab. Bei der oberen Ausdehnung ($3\,\text{bar}$) verrichtet es $600\,\text{J}$. Bei der unteren Kompression ($1\,\text{bar}$) werden $200\,\text{J}$ am Gas verrichtet. Netto bleiben $600\,\text{J} - 200\,\text{J} = 400\,\text{J}$.
```

```aufgabe
id: p11-5-kreis-tabelle
titel: Kreisprozess mit Luft in einer Tabelle auswerten
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Luft ($f = 5$) durchläuft im Uhrzeigersinn das Rechteck A ($1{,}0\,\text{L}$, $2{,}0\,\text{bar}$), B ($1{,}0\,\text{L}$, $4{,}0\,\text{bar}$), C ($4{,}0\,\text{L}$, $4{,}0\,\text{bar}$), D ($4{,}0\,\text{L}$, $2{,}0\,\text{bar}$).

  a) Wie viel Wärme nimmt die Luft im Schritt B → C auf?

  b) Wie groß ist die Nettoarbeit pro Umlauf?

  c) Wie groß ist der Wirkungsgrad in Prozent?
teile:
  - typ: zahl
    label: a) Q von B nach C
    loesung: "2.5*(1600-400)+4e5*3e-3"
    einheit: "J"
    anzeige: '4200'
    fehler:
      - wert: "2.5*(1600-400)"
        meldung: Das ist nur $\Delta U$. Bei der isobaren Ausdehnung verrichtet das Gas zusätzlich $1200\,\text{J}$ Arbeit, die auch als Wärme hineinkommen müssen.
  - typ: zahl
    label: b) Nettoarbeit
    loesung: "(4e5-2e5)*3e-3"
    einheit: "J"
    anzeige: '600'
    fehler:
      - wert: "4e5*3e-3"
        meldung: Das ist die Fläche unter der oberen Linie. Netto zählt nur die eingeschlossene Fläche.
  - typ: zahl
    label: c) Wirkungsgrad
    loesung: "600/(2.5*200+4200)*100"
    einheit: "%"
    anzeige: '12{,}8'
    fehler:
      - wert: "600/4200*100"
        meldung: Auch im isochoren Schritt A → B fließt Wärme hinein, nämlich $500\,\text{J}$. Zu $Q_\text{zu}$ gehören alle positiven $Q$-Werte.
hinweise:
  - 'Bestimme $pV$ in jeder Ecke in Joule. Dann ist $U = \tfrac52\,pV$.'
  - 'Wärme fließt in A → B und B → C hinein. $Q_\text{zu}$ ist ihre Summe, die Nettoarbeit die Rechteckfläche.'
gefuehrt:
  - text: Wie groß ist $pV$ in den Ecken B und C in Joule? Gib den Wert für C an.
    teil: { typ: zahl, loesung: "4*4*100" }
    erklaerung: In B ist $pV = 4{,}0\,\text{bar}\cdot 1{,}0\,\text{L} = 400\,\text{J}$, in C $4{,}0\,\text{bar}\cdot 4{,}0\,\text{L} = 1600\,\text{J}$.
  - text: Wie groß ist $\Delta U$ von B nach C?
    teil: { typ: zahl, loesung: "2.5*(1600-400)" }
    erklaerung: $\Delta U = \tfrac52\,(1600 - 400)\,\text{J} = 3000\,\text{J}$.
  - text: Wie groß ist die Arbeit am Gas $W$ von B nach C (mit Vorzeichen)?
    teil: { typ: zahl, loesung: "-4e5*3e-3" }
    erklaerung: Das Gas dehnt sich bei $4{,}0\,\text{bar}$ um $3{,}0\,\text{L}$ aus, also $W = -1200\,\text{J}$.
  - text: Berechne die zugeführte Wärme von B nach C.
    teil: { typ: zahl, loesung: "3000+1200" }
    erklaerung: $Q = \Delta U - W = 3000\,\text{J} + 1200\,\text{J} = 4200\,\text{J}$.
  - text: Überlege, welche weiteren Schritte Wärme aufnehmen, und berechne dann den Wirkungsgrad.
    erklaerung: Im isochoren Schritt A → B ist $Q = \tfrac52\,(400 - 200)\,\text{J} = 500\,\text{J}$. Also $Q_\text{zu} = 4700\,\text{J}$ und $\eta = 600/4700 = 12{,}8\,\%$.
loesung: |
  **Ansatz:** $pV$ in den Ecken: A $200\,\text{J}$, B $400\,\text{J}$, C $1600\,\text{J}$, D $800\,\text{J}$. Die innere Energie ist $\tfrac52\,pV$.
  ---
  **a)** B → C ist isobar: $\Delta U = \tfrac52\cdot 1200\,\text{J} = 3000\,\text{J}$, $W = -4{,}0\cdot 10^5\,\text{Pa}\cdot 3{,}0\cdot 10^{-3}\,\text{m}^3 = -1200\,\text{J}$, also $Q = 4200\,\text{J}$.
  ---
  **b)** Nettoarbeit gleich eingeschlossene Fläche: $2{,}0\,\text{bar}\cdot 3{,}0\,\text{L} = 600\,\text{J}$.
  ---
  **c)** A → B ist isochor mit $Q = \tfrac52\cdot 200\,\text{J} = 500\,\text{J}$. C → D ($-2000\,\text{J}$) und D → A ($-2100\,\text{J}$) geben Wärme ab. $Q_\text{zu} = 500\,\text{J} + 4200\,\text{J} = 4700\,\text{J}$, also $\eta = 600/4700 = 12{,}8\,\%$.
  ---
  **Probe:** Summe aller $Q$: $500 + 4200 - 2000 - 2100 = 600\,\text{J}$, gleich der Nettoarbeit.
```

```aufgabe
id: p11-5-umlaufsinn
titel: Kreisprozess gegen den Uhrzeigersinn
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Gas durchläuft im p-V-Diagramm einen Kreisprozess **gegen** den Uhrzeigersinn. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Netto wird Arbeit am Gas verrichtet. So arbeiten Kühlschrank und Wärmepumpe."
      - "Netto gibt das Gas Arbeit ab, genau wie im Uhrzeigersinn. Die Richtung spielt keine Rolle."
      - "Die Nettoarbeit ist null, weil das Gas wieder am Anfang ankommt."
      - "Das Gas erzeugt dabei Energie aus seiner inneren Energie."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Gegen den Uhrzeigersinn dehnt sich das Gas auf dem **unteren** Weg aus und wird auf dem oberen zusammengedrückt. Das Zusammendrücken kostet mehr, als die Ausdehnung bringt.
      - wert: 2
        meldung: Null ist $\Delta U$, nicht die Arbeit. Die Arbeit ist eine Prozessgröße und hängt vom Weg ab. Netto bleibt die eingeschlossene Fläche.
      - wert: 3
        meldung: Nach einem Umlauf ist die innere Energie wieder gleich. Das Gas kann auf Dauer keine Energie aus ihr beziehen.
hinweise:
  - Auf welchem Weg dehnt sich das Gas aus, auf dem oberen oder dem unteren? Welcher Weg hat mehr Fläche darunter?
  - Wenn netto Arbeit am Gas verrichtet wird, welche Maschine ist das dann?
loesung: |
  **Ansatz:** Gegen den Uhrzeigersinn dehnt sich das Gas bei niedrigem Druck aus (unten) und wird bei hohem Druck zusammengedrückt (oben).
  ---
  Das Zusammendrücken kostet mehr Arbeit, als die Ausdehnung liefert. Netto wird also Arbeit **am** Gas verrichtet, im Betrag der eingeschlossenen Fläche.
  ---
  **Antwort:** Das ist ein umgekehrter Kreisprozess. Kühlschrank und Wärmepumpe arbeiten so. Sie nutzen Arbeit, um Wärme vom Kalten zum Warmen zu pumpen.
```

```aufgabe
id: p11-5-messdaten
titel: Wirkungsgrad eines Modell-Stirlingmotors mit Messunsicherheit
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  An einem Modell-Stirlingmotor misst eine Schülergruppe die zugeführte Heizleistung $P_\text{zu} = (50 \pm 2)\,\text{W}$ und die abgegebene mechanische Leistung $P_\text{mech} = (6{,}0 \pm 0{,}3)\,\text{W}$.

  a) Berechne den Wirkungsgrad in Prozent.

  b) Wie groß ist seine absolute Unsicherheit in Prozentpunkten? Verwende die Regel: Bei einem Quotienten addieren sich die relativen Unsicherheiten.
teile:
  - typ: zahl
    label: a) Wirkungsgrad
    loesung: "6/50*100"
    einheit: "%"
    anzeige: '12'
    fehler:
      - wert: "50/6*100"
        meldung: Du hast den Kehrwert gebildet. Ein Wirkungsgrad über $100\,\%$ ist unmöglich. Nutzen durch Aufwand.
  - typ: zahl
    label: b) Unsicherheit
    loesung: "6/50*100*(0.3/6+2/50)"
    einheit: "%"
    anzeige: '1{,}1'
    toleranz: 0.06
    fehler:
      - wert: "2.3"
        meldung: Du hast die absoluten Unsicherheiten $2\,\text{W}$ und $0{,}3\,\text{W}$ addiert. Bei einem Quotienten addiert man die **relativen** Unsicherheiten.
      - wert: "9"
        meldung: $9\,\%$ ist die **relative** Unsicherheit des Wirkungsgrads. Gefragt ist die absolute, also $9\,\%$ von $12\,\%$.
hinweise:
  - 'Relative Unsicherheiten: $0{,}3/6{,}0$ und $2/50$. Addiere sie.'
  - 'Die absolute Unsicherheit ist die relative Unsicherheit mal dem Wert, also $0{,}09\cdot 12\,\%$.'
loesung: |
  **a)** $\eta = \dfrac{P_\text{mech}}{P_\text{zu}} = \dfrac{6{,}0\,\text{W}}{50\,\text{W}} = 0{,}12 = 12\,\%$.
  ---
  **b) Relative Unsicherheiten:** $\dfrac{0{,}3\,\text{W}}{6{,}0\,\text{W}} = 5\,\%$ und $\dfrac{2\,\text{W}}{50\,\text{W}} = 4\,\%$. Für den Quotienten ist die relative Unsicherheit $5\,\% + 4\,\% = 9\,\%$.
  ---
  **Absolut:** $0{,}09\cdot 12\,\% = 1{,}08\,\%$, gerundet $1{,}1$ Prozentpunkte. Ergebnis: $\eta = (12{,}0 \pm 1{,}1)\,\%$, grob gerundet $(12 \pm 1)\,\%$.
  ---
  **Deutung:** Die Messung ist auf etwa ein Zehntel genau. Mehr als zwei signifikante Stellen beim Wirkungsgrad selbst wären deshalb nicht sinnvoll. Die Regel steht in [1.9 Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung).
```

```aufgabe
id: p11-5-standard-kreis
titel: Kreisprozess aus Isobare, Isochore und Isotherme
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  $0{,}50\,\text{mol}$ eines einatomigen idealen Gases durchlaufen einen Kreisprozess. Im Zustand 1 hat das Gas $300\,\text{K}$.

  - 1 → 2: isobare Ausdehnung auf das doppelte Volumen,
  - 2 → 3: isochore Abkühlung zurück auf $300\,\text{K}$,
  - 3 → 1: isotherme Kompression zurück in den Anfangszustand.

  a) Welche Temperatur hat das Gas im Zustand 2, und wie viel Wärme nimmt es im Schritt 1 → 2 auf?

  b) Wie groß ist die Nettoarbeit pro Umlauf?

  c) Wie groß ist der Wirkungsgrad in Prozent?
teile:
  - typ: zahl
    label: a) Wärme 1 → 2
    loesung: "2.5*0.5*8.314*300"
    einheit: "J"
    anzeige: '3118'
  - typ: zahl
    label: b) Nettoarbeit
    loesung: "0.5*8.314*300-0.5*8.314*300*ln(2)"
    einheit: "J"
    anzeige: '383'
  - typ: zahl
    label: c) Wirkungsgrad
    loesung: "(0.5*8.314*300-0.5*8.314*300*ln(2))/(2.5*0.5*8.314*300)*100"
    einheit: "%"
    anzeige: '12{,}3'
hinweise:
  - 'Bei konstantem Druck ist $V \sim T$. Doppeltes Volumen heißt $T_2 = 600\,\text{K}$. Für die Wärme gilt $Q = n\,C_p\,\Delta T$ mit $C_p = \tfrac52 R$.'
  - 'Arbeit: Isobar gibt das Gas $nR\,\Delta T$ ab, isochor ist $W = 0$, bei der isothermen Kompression nimmt es $nRT\ln 2$ auf. Wärme fließt nur in 1 → 2 hinein.'
loesung: |
  **a)** Isobar gilt $V/T = $ konstant, also $T_2 = 2\cdot 300\,\text{K} = 600\,\text{K}$. $Q_{12} = n\,C_p\,\Delta T = 0{,}50\cdot\tfrac52\cdot 8{,}314\cdot 300\,\text{J} = 3118\,\text{J}$.
  ---
  **Tabelle der Arbeit des Gases:** 1 → 2: $nR\,\Delta T = 0{,}50\cdot 8{,}314\cdot 300\,\text{J} = 1247\,\text{J}$. 2 → 3: isochor, $0$. 3 → 1: isotherme Kompression, das Gas nimmt $nRT\ln 2 = 1247\,\text{J}\cdot 0{,}693 = 864\,\text{J}$ auf.
  ---
  **b)** Nettoarbeit $1247\,\text{J} - 864\,\text{J} = 383\,\text{J}$.
  ---
  **Wärmen prüfen:** 2 → 3 gibt $n\,C_V\cdot 300\,\text{K} = 1871\,\text{J}$ ab, 3 → 1 gibt $864\,\text{J}$ ab. Summe aller $Q$: $3118 - 1871 - 864 = 383\,\text{J}$, gleich der Nettoarbeit.
  ---
  **c)** Nur 1 → 2 führt Wärme zu, also $\eta = 383/3118 = 12{,}3\,\%$. Eine Carnot-Maschine zwischen $600\,\text{K}$ und $300\,\text{K}$ käme auf $50\,\%$. Dieser Prozess nutzt den Temperaturunterschied also schlecht.
```

## Der Carnot-Prozess: die Obergrenze des Wirkungsgrads

```aufgabe
id: p11-6-check
art: check
titel: "Vorhersage: Was bringt eine kältere Kühlung?"
niveau: 1
angabe: |
  Eine Wärmekraftmaschine arbeitet zwischen einer heißen Flamme und kaltem Kühlwasser. Man macht das Kühlwasser **kälter**, die Flamme bleibt gleich. Was erwartest du für den bestmöglichen Wirkungsgrad? Sag es voraus, bevor du weiterliest.
teile:
  - typ: auswahl
    optionen:
      - "Er steigt, weil der Temperaturunterschied größer wird."
      - "Er sinkt, weil kälteres Wasser mehr Wärme schluckt."
      - "Er bleibt gleich, weil nur die Flamme Energie liefert."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Abwärme ist kein Verlust, den man durch wärmeres Kühlwasser verkleinern könnte. Je kälter das kalte Reservoir, desto weniger Wärme muss man abgeben, um das Gas zurückzubringen.
      - wert: 2
        meldung: Die Flamme liefert die Energie, aber das kalte Reservoir bestimmt mit, wie viel davon zu Arbeit werden kann. Ohne Temperaturunterschied gäbe es gar keine Arbeit.
hinweise:
  - Erinnere dich an [11.5 Kreisprozesse](/lernen/physik1/hauptsaetze-waermekraftmaschinen/kreisprozesse-und-der-wirkungsgrad). Das Gas muss abgekühlt werden, damit es bei kleinerem Druck zurückgedrückt werden kann.
loesung: |
  Je kälter das kalte Reservoir, desto kleiner ist der Druck auf dem Rückweg. Die eingeschlossene Fläche im p-V-Diagramm und damit die Arbeit werden größer.
  ---
  Der bestmögliche Wirkungsgrad steigt also. Wie genau, zeigt die Carnot-Formel in diesem Abschnitt.
```

**Worum geht es?** 1824 stellte der junge französische Ingenieur Sadi Carnot eine einfache Frage: Wie gut
kann eine Wärmekraftmaschine zwischen zwei Temperaturen **höchstens** sein? Die Antwort ist eine der
wichtigsten Formeln der Physik. Sie hängt nur von zwei Temperaturen ab und gilt für jede denkbare Maschine.

### Der Carnot-Kreisprozess in vier Schritten

Carnot dachte sich eine ideale Maschine aus. Sie arbeitet zwischen einem heißen Reservoir mit der
Temperatur $T_h$ und einem kalten mit $T_k$. Die Indizes stehen für „heiß“ und „kalt“. Ihr Gas tauscht
Wärme nur aus, wenn es gerade dieselbe Temperatur hat wie das jeweilige Reservoir. Dazwischen ist es
isoliert. Damit besteht der Kreisprozess aus zwei Isothermen und zwei Adiabaten:

1. **Isotherme Expansion bei $T_h$** (1 → 2): Das Gas nimmt die Wärme $Q_\text{zu} = nRT_h\ln(V_2/V_1)$ auf
   und gibt sie als Arbeit ab.
2. **Adiabatische Expansion** (2 → 3): Das Gas dehnt sich isoliert weiter aus und kühlt dabei von $T_h$ auf $T_k$ ab.
3. **Isotherme Kompression bei $T_k$** (3 → 4): Das Gas wird zusammengedrückt und gibt die Wärme
   $|Q_\text{ab}| = nRT_k\ln(V_3/V_4)$ an das kalte Reservoir ab.
4. **Adiabatische Kompression** (4 → 1): Das Gas wird isoliert zusammengedrückt und erwärmt sich zurück auf $T_h$.

```plot
x: [0, 60]
y: [0, 450]
hoehe: 320
achsen: { x: "V in L", y: "p in kPa" }
graphen:
  - { f: "4157/x", label: "Isotherme T_h", farbe: 1, von: 10, bis: 20 }
  - { f: "207.85*(20/x)^(5/3)", label: "Adiabate", farbe: 2, von: 20, bis: 56.57 }
  - { f: "2078.5/x", label: "Isotherme T_k", farbe: 0, von: 28.28, bis: 56.57 }
  - { f: "73.49*(28.28/x)^(5/3)", farbe: 2, von: 10, bis: 28.28 }
punkte:
  - { x: 10, y: 415.7, label: "1" }
  - { x: 20, y: 207.85, label: "2" }
  - { x: 56.57, y: 36.74, label: "3" }
  - { x: 28.28, y: 73.49, label: "4" }
beschriftung: "Carnot-Kreisprozess für 1 mol Helium zwischen 500 K und 250 K. Oben die heiße Isotherme 1 → 2, rechts die Adiabate 2 → 3, unten die kalte Isotherme 3 → 4, links die Adiabate 4 → 1 zurück. Die eingeschlossene Fläche ist die Nutzarbeit."
```

### Herleitung des Carnot-Wirkungsgrads

Diese Herleitung ist die schwierigste Rechnung des Kapitels. Lies sie langsam, jeder Schritt ist klein.
Das Ziel in einem Satz: Wir zeigen, dass das Verhältnis von abgegebener zu aufgenommener Wärme genau das
Verhältnis der beiden Temperaturen ist.

**Schritt 1, die beiden Wärmen hinschreiben.** Auf den Isothermen ist $\Delta U = 0$, also ist die
ausgetauschte Wärme gleich der Arbeit (siehe [11.3 Isochor, isobar, isotherm](/lernen/physik1/hauptsaetze-waermekraftmaschinen/isochor-isobar-isotherm-drei-zustandsaenderungen)):
$Q_\text{zu} = nRT_h\ln\tfrac{V_2}{V_1}$ und $|Q_\text{ab}| = nRT_k\ln\tfrac{V_3}{V_4}$. Auf den Adiabaten fließt keine Wärme.

**Schritt 2, die Adiabaten verbinden die Volumina.** Für jede Adiabate gilt $TV^{\kappa-1} = $ konstant:
$$T_hV_2^{\kappa-1} = T_kV_3^{\kappa-1} \qquad\text{und}\qquad T_hV_1^{\kappa-1} = T_kV_4^{\kappa-1}.$$

**Schritt 3, teilen.** Wir teilen die linke Gleichung durch die rechte. Dabei kürzen sich $T_h$ und $T_k$:
$$\left(\frac{V_2}{V_1}\right)^{\kappa-1} = \left(\frac{V_3}{V_4}\right)^{\kappa-1}, \qquad\text{also}\qquad \frac{V_2}{V_1} = \frac{V_3}{V_4}.$$

**Schritt 4, ins Verhältnis setzen.** Weil die beiden Volumenverhältnisse gleich sind, sind auch die
Logarithmen gleich. Im Quotienten der Wärmen kürzen sich $nR$ und der Logarithmus:
$$\frac{|Q_\text{ab}|}{Q_\text{zu}} = \frac{nRT_k\ln(V_3/V_4)}{nRT_h\ln(V_2/V_1)} = \frac{T_k}{T_h}.$$

**Was haben wir gezeigt?** Bei der Carnot-Maschine verhalten sich die Wärmen wie die absoluten
Temperaturen. Mit $\eta = 1 - |Q_\text{ab}|/Q_\text{zu}$ folgt der Carnot-Wirkungsgrad.

:::satz[Carnot-Wirkungsgrad]
Keine Wärmekraftmaschine, die zwischen den absoluten Temperaturen $T_h$ und $T_k$ arbeitet, kann einen
größeren Wirkungsgrad haben als
$$\eta_C = 1 - \frac{T_k}{T_h}.$$
Dabei ist $T_h$ die Temperatur des heißen und $T_k$ die des kalten Reservoirs, beide in Kelvin.

**Beispiel:** Zwischen $900\,\text{K}$ und $300\,\text{K}$ ist $\eta_C = 1 - 300/900 = 66{,}7\,\%$. Eine Maschine
kann dort bestenfalls zwei Drittel der aufgenommenen Wärme in Arbeit umwandeln.

**Gegenbeispiel:** Ein Erfinder behauptet, seine Maschine erreiche zwischen $450\,\text{K}$ und
$300\,\text{K}$ einen Wirkungsgrad von $50\,\%$. Das ist unmöglich, denn $\eta_C = 1 - 300/450 = 33{,}3\,\%$.
:::

Dass **keine** Maschine besser sein kann als die Carnot-Maschine, folgt aus dem zweiten Hauptsatz. Das
Argument steht in [11.9 Der zweite Hauptsatz](/lernen/physik1/hauptsaetze-waermekraftmaschinen/der-zweite-hauptsatz-warum-vorgaenge-eine-richtung-haben).
Hier genügt: Die Grenze ist eine Naturgrenze, keine technische. Sie hängt weder vom Gas noch von der
Bauart ab, nur von den beiden Temperaturen.

:::beispiel[Carnot-Grenze eines Dampfkraftwerks]
Ein Kraftwerk erhitzt Dampf auf $600\,^\circ\text{C}$. Das Kühlwasser aus dem Fluss hat $20\,^\circ\text{C}$.
Wie groß ist der Carnot-Wirkungsgrad?

**Schritt 1, in Kelvin umrechnen:** $T_h = 873{,}15\,\text{K}$, $T_k = 293{,}15\,\text{K}$.

**Schritt 2, einsetzen:** $\eta_C = 1 - \dfrac{293{,}15\,\text{K}}{873{,}15\,\text{K}} = 1 - 0{,}336 = 0{,}664 = 66{,}4\,\%$.

**Schritt 3, mit der Wirklichkeit vergleichen:** Moderne Dampfkraftwerke erreichen etwa $45\,\%$, also rund
zwei Drittel der Grenze. Den Rest verlieren sie durch Reibung, Wärmeverluste und vor allem dadurch, dass
die Wärme nicht vollständig bei der Höchsttemperatur aufgenommen wird.
:::

:::beispiel[Was bringt mehr: heißer heizen oder kälter kühlen?]
Eine Maschine arbeitet zwischen $T_h = 700\,\text{K}$ und $T_k = 350\,\text{K}$, also mit $\eta_C = 50\,\%$.
Man kann entweder $T_h$ um $100\,\text{K}$ erhöhen oder $T_k$ um $100\,\text{K}$ senken.

**Fall 1, heißer:** $\eta_C = 1 - 350/800 = 56{,}25\,\%$.

**Fall 2, kälter:** $\eta_C = 1 - 250/700 = 64{,}3\,\%$.

**Ergebnis:** Dieselbe Änderung um $100\,\text{K}$ wirkt auf der kalten Seite stärker. Der Grund: $T_k$
steht im Zähler und wird direkt kleiner, $T_h$ steht im Nenner und ist schon groß. Deshalb kühlen
Kraftwerke ihren Dampf so stark wie möglich, mit Flusswasser und hohen Kühltürmen.
:::

```aufgabe
id: p11-6-kalt-oder-heiss
titel: Heißer heizen oder kälter kühlen?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Eine Maschine arbeitet zwischen $T_h = 600\,\text{K}$ und $T_k = 300\,\text{K}$.

  a) Wie groß wird der Carnot-Wirkungsgrad, wenn man $T_h$ um $50\,\text{K}$ erhöht?

  b) Wie groß wird er, wenn man stattdessen $T_k$ um $50\,\text{K}$ senkt?
teile:
  - typ: zahl
    label: a) T_h erhöht
    loesung: "(1-300/650)*100"
    einheit: "%"
    anzeige: '53{,}8'
    fehler:
      - wert: "(1-300/600)*100"
        meldung: Das ist der Ausgangswert. Setze die neue heiße Temperatur $650\,\text{K}$ ein.
  - typ: zahl
    label: b) T_k gesenkt
    loesung: "(1-250/600)*100"
    einheit: "%"
    anzeige: '58{,}3'
    fehler:
      - wert: "(1-300/550)*100"
        meldung: Du hast $T_h$ gesenkt statt $T_k$. Die kalte Temperatur wird $250\,\text{K}$.
hinweise:
  - Setze die neuen Temperaturen jeweils in $\eta_C = 1 - T_k/T_h$ ein.
  - Vergleiche die beiden Ergebnisse mit dem Ausgangswert $50\,\%$.
loesung: |
  **Ausgangswert:** $\eta_C = 1 - 300/600 = 50\,\%$.
  ---
  **a)** $\eta_C = 1 - 300/650 = 1 - 0{,}462 = 53{,}8\,\%$.
  ---
  **b)** $\eta_C = 1 - 250/600 = 1 - 0{,}417 = 58{,}3\,\%$.
  ---
  **Deutung:** Dieselben $50\,\text{K}$ bringen auf der kalten Seite mehr. $T_k$ steht im Zähler und wird direkt kleiner. Eine Erhöhung von $T_h$ im Nenner wirkt schwächer, weil $T_h$ schon groß ist.
```

:::achtung[Fehler: Temperaturen in Grad Celsius]
Für das Kraftwerk mit $600\,^\circ\text{C}$ und $20\,^\circ\text{C}$ rechnet ein Schüler:
„$\eta_C = 1 - 20/600 = 96{,}7\,\%$.“

Die Carnot-Formel ist ein Temperaturverhältnis. Verhältnisse von Temperaturen haben nur mit der
absoluten Temperatur einen Sinn, denn erst dort bedeutet $0$ wirklich „keine thermische Bewegung“. Richtig
ist $1 - 293{,}15/873{,}15 = 66{,}4\,\%$. Mit $0\,^\circ\text{C}$ Kühlwasser käme mit Celsius sogar $100\,\%$
heraus, was unmöglich ist.
:::

### Reale Maschinen und ihre Carnot-Grenze

Bei Motoren muss man genau überlegen, welche Temperatur das **kalte Reservoir** ist. Das kalte Reservoir
ist die **Umgebung**, an die die Maschine am Ende ihre Wärme abgibt, also die Luft oder das Kühlwasser mit
etwa $300\,\text{K}$. Das heiße Abgas ist **kein** Reservoir. Es ist ein Verlust: Die Maschine wirft Gas
weg, das noch viel Energie enthält.

| Maschine | $T_h$ | $T_k$ (Umgebung) | $\eta_C$ | real erreicht |
|---|---|---|---|---|
| Kohlekraftwerk (Dampf) | $820\,\text{K}$ | $300\,\text{K}$ | $63\,\%$ | $40$ bis $45\,\%$. |
| Gas-und-Dampf-Kraftwerk | $1600\,\text{K}$ | $300\,\text{K}$ | $81\,\%$ | bis $60\,\%$. |
| Ottomotor | $2300\,\text{K}$ | $300\,\text{K}$ | $87\,\%$ | $25$ bis $35\,\%$. |
| Dieselmotor | $2300\,\text{K}$ | $300\,\text{K}$ | $87\,\%$ | $35$ bis $45\,\%$. |
| Dampflokomotive | $450\,\text{K}$ | $300\,\text{K}$ | $33\,\%$ | $5$ bis $10\,\%$. |

Bei den Motoren ist $T_h$ die kurzzeitige Spitzentemperatur der Verbrennung. Die Wärme wird aber nicht
die ganze Zeit bei dieser Temperatur zugeführt, und das Abgas verlässt den Zylinder noch sehr heiß. Deshalb
liegen reale Motoren weit unter ihrer Carnot-Grenze. Die Grenze von $87\,\%$ sagt nur: Mehr ist mit
diesen Temperaturen auf keinen Fall möglich.

:::achtung[Fehler: die Abgastemperatur als kaltes Reservoir]
Eine Schülerin will die Carnot-Grenze eines Ottomotors bestimmen. Sie setzt die Verbrennungstemperatur
$2300\,\text{K}$ und die Abgastemperatur $900\,\text{K}$ ein: „$\eta_C = 1 - 900/2300 = 61\,\%$.“

Das Abgas ist kein kaltes Reservoir, sondern eine verschwendete Wärme. Man könnte sie mit einer weiteren
Maschine noch nutzen, bis hinunter zur Umgebungstemperatur. Genau das tun Gas-und-Dampf-Kraftwerke. Die
Carnot-Grenze rechnet deshalb mit der Umgebung: $\eta_C = 1 - 300/2300 = 87\,\%$. Die hohe Abgastemperatur
ist einer der Gründe, warum reale Motoren so weit darunter bleiben.
:::

```aufgabe
id: p11-6-otto-grenze
titel: Die Carnot-Grenze eines Ottomotors
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  In einem Ottomotor erreicht das verbrennende Gas kurzzeitig $2300\,\text{K}$. Das Abgas verlässt den Zylinder mit $900\,\text{K}$, die Umgebungsluft hat $300\,\text{K}$. Welche Carnot-Grenze gilt für diesen Motor?
teile:
  - typ: auswahl
    optionen:
      - "etwa 87 %, mit der Umgebung als kaltem Reservoir"
      - "etwa 61 %, mit dem Abgas als kaltem Reservoir"
      - "etwa 39 %, das Verhältnis von Abgas- zu Verbrennungstemperatur"
      - "etwa 67 %, mit dem Abgas als heißem und der Umgebung als kaltem Reservoir"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Abgas ist kein Reservoir, sondern weggeworfene Wärme. Man könnte sie mit einer zweiten Maschine noch bis zur Umgebungstemperatur nutzen. Die Grenze rechnet deshalb mit der Umgebung.
      - wert: 2
        meldung: $900/2300 = 39\,\%$ ist nur ein Temperaturverhältnis. Der Wirkungsgrad ist $1$ minus $T_k/T_h$, und $T_k$ ist die Umgebung.
      - wert: 3
        meldung: Das wäre die Grenze einer zweiten Maschine, die nur das Abgas nutzt. Für den Motor selbst ist die heiße Seite die Verbrennung.
hinweise:
  - Welcher Körper nimmt am Ende die gesamte Abwärme auf? Das ist das kalte Reservoir.
loesung: |
  **Ansatz:** Heißes Reservoir ist die Verbrennung mit $2300\,\text{K}$, kaltes Reservoir die Umgebung mit $300\,\text{K}$. Das Abgas ist ein Verlust.
  ---
  $\eta_C = 1 - 300/2300 = 0{,}87 = 87\,\%$. Reale Ottomotoren erreichen $25$ bis $35\,\%$, unter anderem weil das Abgas noch so heiß ist.
```

### Den Carnot-Prozess erkunden

Arbeitsauftrag mit dem Werkzeug:

1. **Vorhersage:** Was passiert mit der eingeschlossenen Fläche, wenn du $T_k$ von $300$ auf $150\,\text{K}$ senkst?
2. **Beobachtung:** Senke $T_k$ von $300$ auf $150\,\text{K}$ und lies Nutzarbeit und Wirkungsgrad ab. Stelle
   $T_k$ dann wieder auf $300\,\text{K}$ und erhöhe stattdessen $T_h$ um denselben Betrag, also von $600$ auf $750\,\text{K}$.
3. **Erklärung:** Begründe mit $\eta_C = 1 - T_k/T_h$, warum die Änderung auf der kalten Seite mehr bringt.

```widget
name: pv-diagramm
titel: Carnot-Kreisprozess
props:
  prozess: carnot
  n: 1
  f: 3
  V1: 10
  T1: 600
  V2: 20
  T2: 300
```

Wenn du $T_k$ senkst, rückt die untere Isotherme nach unten. Die Fläche zwischen den Isothermen und damit
die Nutzarbeit wachsen. Ein Wirkungsgrad von $100\,\%$ würde $T_k = 0\,\text{K}$ verlangen. Den absoluten
Nullpunkt kann man aber nicht erreichen, wie [11.10 Entropie und der dritte Hauptsatz](/lernen/physik1/hauptsaetze-waermekraftmaschinen/entropie-und-der-dritte-hauptsatz)
zeigt. Darum hat jedes Kraftwerk Kühltürme oder steht an einem Fluss.

```reflexion
frage: Warum hängt der Carnot-Wirkungsgrad nicht davon ab, ob die Maschine mit Helium, Luft oder Wasserdampf arbeitet? Was in der Herleitung sorgt dafür?
antwort: |
  In der Herleitung kürzt sich alles heraus, was das Gas beschreibt: die Stoffmenge $n$, die Gaskonstante $R$ und über
  das Gleichsetzen der Volumenverhältnisse auch der Adiabatenexponent $\kappa$. Übrig bleiben nur die beiden Temperaturen
  der Reservoire. Physikalisch steckt dahinter der zweite Hauptsatz: Gäbe es ein Arbeitsmittel, mit dem eine umkehrbare
  Maschine besser wäre, könnte man damit Wärme ohne Aufwand von kalt nach warm schaffen. Das ist unmöglich.
```

:::merke[Carnot-Grenze anwenden]
1. Beide Temperaturen in Kelvin umrechnen.
2. Kaltes Reservoir ist die Umgebung oder das Kühlwasser, nie das Abgas.
3. $\eta_C = 1 - T_k/T_h$. Ein realer Wirkungsgrad muss darunter liegen, sonst ist die Angabe falsch.
:::

### Aufgaben zum Carnot-Wirkungsgrad

```aufgabe
id: p11-carnot
titel: Carnot-Wirkungsgrad berechnen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine ideale Wärmekraftmaschine arbeitet zwischen $800\,\text{K}$ und $300\,\text{K}$. Welchen Wirkungsgrad in Prozent kann sie höchstens erreichen?
teile:
  - typ: zahl
    loesung: "(1-300/800)*100"
    einheit: "%"
    anzeige: '62{,}5'
    fehler:
      - wert: "300/800*100"
        meldung: Das ist das Verhältnis $T_k/T_h$, also der Anteil, der als Abwärme abgegeben werden muss. Der Wirkungsgrad ist $1$ minus dieses Verhältnis.
      - wert: "(1-800/300)*100"
        meldung: Du hast die Temperaturen vertauscht. Ein negativer Wirkungsgrad ist unmöglich. Im Zähler steht die **kalte** Temperatur.
hinweise:
  - '$\eta_C = 1 - T_k/T_h$, beide Temperaturen sind schon in Kelvin.'
loesung: |
  **Ansatz:** Carnot-Formel $\eta_C = 1 - T_k/T_h$ mit Kelvin-Temperaturen.
  ---
  $\eta_C = 1 - \dfrac{300\,\text{K}}{800\,\text{K}} = 1 - 0{,}375 = 0{,}625 = 62{,}5\,\%$. Mehr als $62{,}5\,\%$ der Wärme kann keine Maschine zwischen diesen Temperaturen in Arbeit umwandeln.
```

```aufgabe
id: p11-6-erfinder
titel: Eine Werbeangabe prüfen
niveau: 1
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Hersteller wirbt für einen Motor, der zwischen $227\,^\circ\text{C}$ und $27\,^\circ\text{C}$ arbeitet, mit einem Wirkungsgrad von $45\,\%$. Ist das möglich?
teile:
  - typ: auswahl
    optionen:
      - "Nein, denn die Carnot-Grenze liegt bei etwa 40 %."
      - "Ja, denn 45 % sind weniger als 100 %."
      - "Ja, denn die Carnot-Grenze liegt bei etwa 88 %."
      - "Nein, denn ein Motor kann nie mehr als 30 % erreichen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Unter $100\,\%$ zu liegen reicht nicht. Der zweite Hauptsatz verlangt mehr, nämlich höchstens $\eta_C = 1 - T_k/T_h$.
      - wert: 2
        meldung: $1 - 27/227 = 88\,\%$ ist mit Grad Celsius gerechnet. Die Formel braucht Kelvin.
      - wert: 3
        meldung: Eine feste Grenze von $30\,\%$ gibt es nicht. Gute Dieselmotoren und Kraftwerke liegen deutlich darüber. Die Grenze hängt von den Temperaturen ab.
hinweise:
  - Rechne beide Temperaturen in Kelvin um und berechne $\eta_C$.
loesung: |
  **Ansatz:** $T_h = 500{,}15\,\text{K}$, $T_k = 300{,}15\,\text{K}$, also $\eta_C = 1 - 300{,}15/500{,}15 = 0{,}400 = 40{,}0\,\%$.
  ---
  **Antwort:** $45\,\%$ liegt über der Carnot-Grenze von $40\,\%$. Die Werbeangabe ist physikalisch unmöglich.
```

```aufgabe
id: p11-carnot-kraftwerk
titel: Grenze eines Dampfkraftwerks
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Der Frischdampf eines Kraftwerks hat $550\,^\circ\text{C}$, das Kühlwasser $30\,^\circ\text{C}$. Berechne den Carnot-Wirkungsgrad in Prozent.
teile:
  - typ: zahl
    loesung: "(1-(30+273.15)/(550+273.15))*100"
    einheit: "%"
    anzeige: '63{,}2'
    fehler:
      - wert: "(1-30/550)*100"
        meldung: Du hast in Grad Celsius gerechnet. Temperaturverhältnisse gelten nur in Kelvin.
hinweise:
  - Rechne die Temperaturen zuerst in Kelvin um.
  - '$\eta_C = 1 - T_k/T_h$ mit $T_h = 823{,}15\,\text{K}$.'
loesung: |
  **Umrechnen:** $T_h = 550 + 273{,}15 = 823{,}15\,\text{K}$, $T_k = 30 + 273{,}15 = 303{,}15\,\text{K}$.
  ---
  $\eta_C = 1 - \dfrac{303{,}15\,\text{K}}{823{,}15\,\text{K}} = 1 - 0{,}368 = 0{,}632 = 63{,}2\,\%$.
  ---
  **Einordnung:** Reale Kraftwerke erreichen etwa zwei Drittel davon, also gut $40\,\%$. Mit Celsius wäre fälschlich $1 - 30/550 = 94{,}5\,\%$ herausgekommen.
```

```aufgabe
id: p11-6-umkehr
titel: Wie heiß muss der Dampf sein?
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Maschine gibt ihre Abwärme an Flusswasser mit $15\,^\circ\text{C}$ ab. Welche Temperatur muss das heiße Reservoir mindestens haben, damit der Carnot-Wirkungsgrad $50\,\%$ erreicht? Gib das Ergebnis in Grad Celsius an.
teile:
  - typ: zahl
    loesung: "288.15/(1-0.5)-273.15"
    einheit: "°C"
    anzeige: '303'
    fehler:
      - wert: "15/(1-0.5)"
        meldung: Du hast mit Grad Celsius gerechnet. Stelle die Formel mit Kelvin-Temperaturen um und rechne erst am Ende zurück in Grad Celsius.
      - wert: "288.15/(1-0.5)"
        meldung: Das ist die Temperatur in Kelvin. Gefragt ist der Wert in Grad Celsius, also musst du noch $273{,}15$ abziehen.
hinweise:
  - 'Aus $\eta_C = 1 - T_k/T_h$ folgt $T_k/T_h = 1 - \eta_C$.'
  - 'Stelle nach $T_h$ um: $T_h = T_k/(1 - \eta_C)$. Setze $T_k$ in Kelvin ein.'
gefuehrt:
  - text: Wie groß ist $T_k$ in Kelvin?
    teil: { typ: zahl, loesung: "288.15" }
    erklaerung: $T_k = 15 + 273{,}15 = 288{,}15\,\text{K}$.
  - text: Welchen Wert muss das Verhältnis $T_k/T_h$ haben?
    teil: { typ: zahl, loesung: "0.5" }
    erklaerung: Aus $0{,}5 = 1 - T_k/T_h$ folgt $T_k/T_h = 0{,}5$.
  - text: Berechne $T_h$ in Kelvin.
    teil: { typ: zahl, loesung: "288.15/0.5" }
    erklaerung: $T_h = 288{,}15\,\text{K}/0{,}5 = 576{,}3\,\text{K}$.
  - text: Rechne in Grad Celsius um.
    teil: { typ: zahl, loesung: "576.3-273.15" }
    erklaerung: $576{,}3 - 273{,}15 = 303{,}15$, also rund $303\,^\circ\text{C}$.
loesung: |
  **Ansatz:** Das ist eine Umkehraufgabe. Wir stellen $\eta_C = 1 - T_k/T_h$ nach $T_h$ um. Zuerst bringen wir $T_k/T_h$ auf eine Seite: $T_k/T_h = 1 - \eta_C$.
  ---
  **Umstellen:** Wir multiplizieren mit $T_h$ und teilen durch $1 - \eta_C$: $T_h = \dfrac{T_k}{1 - \eta_C} = \dfrac{288{,}15\,\text{K}}{0{,}5} = 576{,}3\,\text{K}$.
  ---
  **Antwort:** $576{,}3\,\text{K} - 273{,}15 = 303\,^\circ\text{C}$. Probe: $1 - 288{,}15/576{,}3 = 0{,}5$. Für $50\,\%$ muss die absolute Temperatur der heißen Seite doppelt so hoch sein wie die der kalten.
```

```aufgabe
id: p11-6-carnot-zyklus
titel: Ein Carnot-Prozess mit Stickstoff
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  $0{,}80\,\text{mol}$ Stickstoff ($\kappa = 1{,}4$) durchlaufen einen Carnot-Prozess zwischen $500\,\text{K}$ und $300\,\text{K}$. Die isotherme Expansion führt von $5{,}0\,\text{L}$ auf $12\,\text{L}$.

  a) Wie viel Wärme nimmt das Gas pro Umlauf auf?

  b) Wie groß sind Nutzarbeit und abgegebene Wärme pro Umlauf?

  c) Auf welches Volumen dehnt sich das Gas in der anschließenden adiabatischen Expansion aus?
teile:
  - typ: zahl
    label: a) aufgenommene Wärme
    loesung: "0.8*8.314*500*ln(12/5)"
    einheit: "J"
    anzeige: '2911'
  - typ: zahl
    label: b) Nutzarbeit
    loesung: "(1-300/500)*0.8*8.314*500*ln(12/5)"
    einheit: "J"
    anzeige: '1165'
  - typ: zahl
    label: b) abgegebene Wärme
    loesung: "300/500*0.8*8.314*500*ln(12/5)"
    einheit: "J"
    anzeige: '1747'
  - typ: zahl
    label: c) Volumen nach der Adiabate
    loesung: "12*(500/300)^(1/0.4)"
    einheit: "L"
    anzeige: '43{,}0'
hinweise:
  - 'a) Auf der heißen Isotherme ist $Q_\text{zu} = nRT_h\ln(V_2/V_1)$. b) $\eta_C$ berechnen, dann $W = \eta_C\,Q_\text{zu}$.'
  - 'c) Auf der Adiabate gilt $T_hV_2^{\kappa-1} = T_kV_3^{\kappa-1}$, also $V_3 = V_2\,(T_h/T_k)^{1/(\kappa-1)}$.'
loesung: |
  **a)** $Q_\text{zu} = nRT_h\ln\tfrac{V_2}{V_1} = 0{,}80\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 500\,\text{K}\cdot\ln 2{,}4 = 3326\,\text{J}\cdot 0{,}875 = 2911\,\text{J}$.
  ---
  **b)** $\eta_C = 1 - 300/500 = 40\,\%$. Nutzarbeit $W = 0{,}40\cdot 2911\,\text{J} = 1165\,\text{J}$. Abgegeben werden $|Q_\text{ab}| = 2911\,\text{J} - 1165\,\text{J} = 1747\,\text{J}$, das ist $\tfrac{300}{500}\,Q_\text{zu}$.
  ---
  **c)** $V_3 = 12\,\text{L}\cdot\left(\tfrac{500}{300}\right)^{2{,}5} = 12\,\text{L}\cdot 3{,}586 = 43{,}0\,\text{L}$.
  ---
  **Probe:** Nach der Herleitung muss $V_3/V_4 = V_2/V_1 = 2{,}4$ sein. Mit $V_4 = 5{,}0\,\text{L}\cdot 3{,}586 = 17{,}9\,\text{L}$ ist $43{,}0/17{,}9 = 2{,}4$. Die Rechnung ist stimmig.
```

## Motoren und Kraftwerke

```aufgabe
id: p11-7-check
art: check
titel: "Vorwissen: Energie und Leistung"
niveau: 1
angabe: |
  Ein Gerät setzt in $4{,}0\,\text{h}$ gleichmäßig $2{,}0\,\text{kWh}$ Energie um. Wie groß ist seine Leistung in Kilowatt?
teile:
  - typ: zahl
    loesung: "2/4"
    einheit: "kW"
    anzeige: '0{,}5'
    fehler:
      - wert: "2*4"
        meldung: Du hast Energie mal Zeit gerechnet. Leistung ist Energie **pro** Zeit, also teilen.
hinweise:
  - Leistung ist umgesetzte Energie geteilt durch die Zeit, $P = E/t$.
loesung: |
  Leistung ist Energie pro Zeit: $P = E/t$.
  ---
  $P = 2{,}0\,\text{kWh}/4{,}0\,\text{h} = 0{,}50\,\text{kW}$. Die Stunden kürzen sich. Wiederholen: [4.6 Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

**Worum geht es?** Jetzt wird es praktisch. Du lernst, wie Ottomotor, Dieselmotor und Dampfkraftwerk
arbeiten, und du ordnest ihre Arbeitsschritte den Zustandsänderungen aus diesem Kapitel zu. Außerdem
berechnest du, wie viel Abwärme ein Kraftwerk loswerden muss.

### Der Ottomotor im Viertakt

Ein Ottomotor ist ein Benzinmotor. Er arbeitet in vier **Takten**. Ein Takt ist eine Bewegung des Kolbens
vom einen Ende des Zylinders zum anderen.

1. **Ansaugen:** Der Kolben fährt nach unten und saugt ein Gemisch aus Luft und Benzindampf an.
2. **Verdichten:** Der Kolben fährt nach oben und drückt das Gemisch schnell zusammen, etwa auf ein Zehntel.
   Das geschieht fast **adiabatisch**, das Gemisch wird heiß.
3. **Arbeitstakt:** Die Zündkerze zündet. Das Gemisch verbrennt so schnell, dass Druck und Temperatur fast
   bei konstantem Volumen steigen (**isochor**). Dann drückt das heiße Gas den Kolben nach unten und dehnt
   sich dabei fast **adiabatisch** aus. Nur in diesem Takt gibt das Gas Arbeit ab.
4. **Ausstoßen:** Der Kolben fährt wieder nach oben und schiebt die Abgase hinaus.

Die Physik vereinfacht diesen Ablauf zum **Otto-Kreisprozess**: zwei Adiabaten und zwei Isochoren. Das
Ausstoßen und Ansaugen ersetzt man durch eine isochore Abkühlung, so als würde dasselbe Gas abgekühlt und
wiederverwendet. Das wichtigste Maß ist das **Verdichtungsverhältnis** $\varepsilon = V_\text{max}/V_\text{min}$
(griechisch „epsilon“), also das größte durch das kleinste Zylindervolumen.

```plot
x: [0, 9]
y: [0, 42]
hoehe: 300
achsen: { x: "V in Vielfachen von V_min", y: "p in bar" }
graphen:
  - { f: "18.38*(1/x)^1.4", label: "Verdichten", farbe: 0, von: 1, bis: 8 }
  - { f: "40*(1/x)^1.4", label: "Arbeitstakt", farbe: 1, von: 1, bis: 8 }
strecken:
  - { von: [1, 18.38], nach: [1, 40], farbe: 1 }
  - { von: [8, 2.18], nach: [8, 1], farbe: 0 }
punkte:
  - { x: 8, y: 1, label: "1" }
  - { x: 1, y: 18.4, label: "2" }
  - { x: 1, y: 40, label: "3 Zündung" }
  - { x: 8, y: 2.18, label: "4" }
beschriftung: "Idealisierter Otto-Kreisprozess mit Verdichtungsverhältnis 8. Von 1 nach 2 adiabatische Verdichtung, von 2 nach 3 isochore Verbrennung, von 3 nach 4 adiabatischer Arbeitstakt, von 4 nach 1 isochore Abkühlung. Die eingeschlossene Fläche ist die Arbeit pro Umlauf."
```

Für den idealen Otto-Prozess kann man den Wirkungsgrad mit den Poisson-Gleichungen ausrechnen. Es ergibt
sich
$$\eta_\text{Otto} = 1 - \varepsilon^{\,1-\kappa} = 1 - \frac{1}{\varepsilon^{\,\kappa - 1}}.$$
Dabei ist $\varepsilon$ das Verdichtungsverhältnis und $\kappa = 1{,}4$ der Adiabatenexponent von Luft. Je
stärker die Verdichtung, desto besser der Wirkungsgrad.

:::beispiel[Wirkungsgrad eines Otto-Prozesses mit ε = 8]
Ein älterer Ottomotor hat das Verdichtungsverhältnis $\varepsilon = 8$. Wie groß ist der ideale Wirkungsgrad?

**Schritt 1, Hochzahl:** $1 - \kappa = 1 - 1{,}4 = -0{,}4$.

**Schritt 2, Potenz:** $8^{-0{,}4} = 1/8^{0{,}4} = 1/2{,}297 = 0{,}435$.

**Schritt 3, Wirkungsgrad:** $\eta = 1 - 0{,}435 = 0{,}565 = 56{,}5\,\%$.

**Einordnung:** Reale Ottomotoren erreichen nur etwa die Hälfte davon. Sie verlieren Wärme an die
Zylinderwand, haben Reibung, und das Benzin verbrennt nicht ganz bei konstantem Volumen.
:::

Warum verdichtet man dann nicht beliebig stark? Beim Ottomotor wird das Gemisch aus Luft **und** Benzin
verdichtet. Bei zu starker Verdichtung wird es so heiß, dass es sich von selbst entzündet, bevor die
Zündkerze zündet. Diese unkontrollierten Explosionen heißen **Klopfen** und können den Motor beschädigen.
Deshalb liegt $\varepsilon$ beim Ottomotor meist zwischen $8$ und $12$.

:::achtung[Fehler: Hochzahl κ statt 1 − κ]
Ein Schüler rechnet für $\varepsilon = 8$: „$\eta = 1 - 8^{-1{,}4} = 1 - 0{,}054 = 94{,}6\,\%$.“

Er hat $-\kappa$ statt $1 - \kappa$ in die Hochzahl geschrieben. Die Formel stammt aus $TV^{\kappa - 1} = $
konstant, also gehört $\kappa - 1 = 0{,}4$ in die Hochzahl. Richtig ist $56{,}5\,\%$. Eine Probe hilft
immer: Ein Motor mit über $90\,\%$ Wirkungsgrad wäre besser als jedes Kraftwerk der Welt.
:::

```aufgabe
id: p11-7-takte
titel: In welchem Takt arbeitet der Motor?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  In welchem der vier Takte eines Ottomotors gibt das Gas Arbeit an den Kolben ab?
teile:
  - typ: auswahl
    optionen:
      - "im ersten Takt, beim Ansaugen"
      - "im zweiten Takt, beim Verdichten"
      - "im dritten Takt, dem Arbeitstakt nach der Zündung"
      - "im vierten Takt, beim Ausstoßen"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Beim Ansaugen bewegt sich der Kolben nach außen, aber der Druck im Zylinder ist klein. Der Kolben wird von der Kurbelwelle gezogen, das Gas leistet fast keine Arbeit.
      - wert: 1
        meldung: Beim Verdichten wird Arbeit **am** Gas verrichtet. Das Schwungrad muss den Kolben gegen den steigenden Druck hinaufschieben.
      - wert: 3
        meldung: Beim Ausstoßen schiebt der Kolben die Abgase hinaus. Auch hier wird Arbeit am Gas verrichtet, nicht vom Gas.
hinweise:
  - Arbeit gibt das Gas ab, wenn es sich bei hohem Druck ausdehnt. Wann ist der Druck am höchsten?
loesung: |
  Das Gas gibt Arbeit ab, wenn es sich ausdehnt und dabei hohen Druck hat. Der Druck ist direkt nach der Zündung am höchsten.
  ---
  Das ist der dritte Takt, der Arbeitstakt. Die anderen drei Takte kosten Arbeit. Sie wird vom Schwungrad geliefert, das im Arbeitstakt Schwung bekommen hat.
```

### Der Dieselmotor

Der Dieselmotor verdichtet **nur Luft**, und zwar viel stärker, etwa auf ein Sechzehntel bis
Zweiundzwanzigstel. Die Luft wird dabei über $600\,^\circ\text{C}$ heiß, wie die Aufgabe „Zündung im
Dieselmotor“ in [11.4 Adiabatische Zustandsänderungen](/lernen/physik1/hauptsaetze-waermekraftmaschinen/adiabatische-zustandsaenderungen-ohne-waermeaustausch)
zeigt. Erst dann spritzt eine Düse den Kraftstoff ein, und er zündet von selbst. Eine Zündkerze braucht
der Diesel nicht.

Weil nur Luft verdichtet wird, kann nichts vorzeitig zünden. Der Diesel darf deshalb viel stärker
verdichten als der Ottomotor. Das ist der Hauptgrund für seinen besseren Wirkungsgrad von $35$ bis $45\,\%$.

### Das Dampfkraftwerk

In einem Dampfkraftwerk läuft Wasser in einem geschlossenen Kreislauf:

1. Im **Kessel** verbrennt Kohle, Gas oder Müll. Die Wärme verdampft Wasser unter hohem Druck und
   überhitzt den Dampf auf etwa $550$ bis $600\,^\circ\text{C}$.
2. Der Dampf strömt durch eine **Turbine**, ein Schaufelrad, und dehnt sich dabei aus. Die Turbine treibt
   einen Generator an, der Strom erzeugt.
3. Im **Kondensator** kühlt Flusswasser oder Luft aus dem Kühlturm den Dampf, bis er wieder zu Wasser wird.
   Hier wird die Abwärme abgegeben, das kalte Reservoir.
4. Eine **Pumpe** drückt das Wasser zurück in den Kessel.

Ein **Gas-und-Dampf-Kraftwerk** schaltet zwei Maschinen hintereinander. Zuerst treibt sehr heißes
Verbrennungsgas eine Gasturbine an. Ihr noch rund $600\,^\circ\text{C}$ heißes Abgas erzeugt dann Dampf für
eine Dampfturbine. So nutzt man die Abgaswärme, die sonst verloren wäre, und erreicht bis $60\,\%$.

:::beispiel[Wie viel Kühlwasser braucht ein Kraftwerk?]
Ein Kraftwerk liefert $400\,\text{MW}$ elektrische Leistung mit einem Gesamtwirkungsgrad von $38\,\%$. Das
Kühlwasser darf sich um höchstens $8{,}0\,\text{K}$ erwärmen. Wie viel Wasser braucht es pro Sekunde?

**Schritt 1, zugeführte Leistung:** Aus $\eta = P_\text{el}/P_\text{zu}$ folgt
$P_\text{zu} = 400\,\text{MW}/0{,}38 = 1053\,\text{MW}$.

**Schritt 2, Abwärme:** $P_\text{ab} = P_\text{zu} - P_\text{el} = 1053\,\text{MW} - 400\,\text{MW} = 653\,\text{MW}$.

**Schritt 3, Wassermenge:** Pro Sekunde nimmt das Wasser die Wärme $P_\text{ab} = \dot m\,c\,\Delta T$ auf.
Dabei ist $\dot m$ die Wassermasse pro Sekunde und $c = 4190\,\text{J/(kg K)}$ die spezifische
Wärmekapazität von Wasser. Also
$\dot m = \dfrac{6{,}53\cdot 10^8\,\text{W}}{4190\,\tfrac{\text{J}}{\text{kg K}}\cdot 8{,}0\,\text{K}} = 1{,}95\cdot 10^4\,\text{kg/s}$.

**Antwort:** Rund $19{,}5$ Tonnen Wasser pro Sekunde, das sind fast $20\,\text{m}^3$. Ein großer Fluss
führt einige hundert Kubikmeter pro Sekunde. Deshalb dürfen Kraftwerke im Sommer bei warmem, niedrigem
Fluss oft nicht voll laufen.
:::

:::achtung[Fehler: Abwärme als Nutzleistung mal (1 − η)]
Eine Schülerin rechnet für das Kraftwerk aus dem Beispiel: „Abwärme $= 400\,\text{MW}\cdot(1 - 0{,}38) = 248\,\text{MW}$.“

Der Anteil $1 - \eta = 62\,\%$ bezieht sich auf die **zugeführte** Leistung, nicht auf die elektrische.
Richtig ist $P_\text{ab} = 0{,}62\cdot 1053\,\text{MW} = 653\,\text{MW}$. Bei Wirkungsgraden unter $50\,\%$
ist die Abwärme immer größer als die Nutzleistung. Das ist eine gute Probe.
:::

```reflexion
frage: Warum hat der Dieselmotor einen besseren Wirkungsgrad als der Ottomotor, obwohl beide denselben Kraftstofftyp, nämlich Kohlenwasserstoffe, verbrennen?
antwort: |
  Der Wirkungsgrad des idealen Prozesses wächst mit dem Verdichtungsverhältnis, $\eta = 1 - \varepsilon^{1-\kappa}$.
  Der Ottomotor verdichtet ein Benzin-Luft-Gemisch und darf nicht zu stark verdichten, sonst zündet es von selbst
  (Klopfen). Der Dieselmotor verdichtet nur Luft und spritzt den Kraftstoff erst danach ein. Er kann deshalb auf ein
  Zwanzigstel verdichten statt auf ein Zehntel. Die höhere Verdichtung bedeutet eine höhere Temperatur bei der
  Verbrennung und damit einen besseren Wirkungsgrad.
```

:::merke[Wärmekraftmaschinen im Vergleich]
- Ottomotor: Gemisch verdichten ($\varepsilon \approx 8$ bis $12$), Zündkerze, real $25$ bis $35\,\%$.
- Dieselmotor: nur Luft verdichten ($\varepsilon \approx 16$ bis $22$), Selbstzündung, real $35$ bis $45\,\%$.
- Idealer Otto-Prozess: $\eta = 1 - \varepsilon^{1-\kappa}$ mit $\kappa = 1{,}4$.
- Kraftwerk: $P_\text{zu} = P_\text{el}/\eta$, Abwärme $P_\text{ab} = P_\text{zu} - P_\text{el}$, Kühlwasser $\dot m = P_\text{ab}/(c\,\Delta T)$.
:::

### Aufgaben zu Motoren und Kraftwerken

```aufgabe
id: p11-otto
titel: Wirkungsgrad des Otto-Prozesses
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne den idealen Wirkungsgrad eines Otto-Prozesses mit dem Verdichtungsverhältnis $\varepsilon = 10$ und $\kappa = 1{,}4$ in Prozent.
teile:
  - typ: zahl
    loesung: "(1-10^(-0.4))*100"
    einheit: "%"
    anzeige: '60{,}2'
    fehler:
      - wert: "(1-10^(-1.4))*100"
        meldung: In der Hochzahl steht $1 - \kappa = -0{,}4$, nicht $-\kappa$. Ein Wirkungsgrad von $96\,\%$ wäre unrealistisch hoch.
      - wert: "10^(-0.4)*100"
        meldung: Das ist der Anteil, der als Abwärme verloren geht. Der Wirkungsgrad ist $1$ minus diesen Anteil.
hinweise:
  - '$\eta = 1 - \varepsilon^{1 - \kappa}$ mit der Hochzahl $1 - 1{,}4 = -0{,}4$.'
loesung: |
  **Ansatz:** $\eta = 1 - \varepsilon^{1-\kappa} = 1 - 10^{-0{,}4}$.
  ---
  $10^{-0{,}4} = 0{,}398$, also $\eta = 1 - 0{,}398 = 0{,}602 = 60{,}2\,\%$. Reale Ottomotoren erreichen wegen Reibung und Wärmeverlusten nur etwa die Hälfte.
```

```aufgabe
id: p11-kraftwerk-abwaerme
titel: Abwärme eines Kraftwerks
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Kraftwerk liefert $1000\,\text{MW}$ elektrische Leistung bei einem Gesamtwirkungsgrad von $40\,\%$.

  Berechne die zugeführte Wärmeleistung, die Abwärmeleistung und den Kühlwasserstrom in kg/s, wenn sich das Kühlwasser um $10\,\text{K}$ erwärmen darf ($c = 4190\,\text{J/(kg K)}$).
teile:
  - typ: zahl
    label: zugeführte Leistung
    loesung: "1000/0.40"
    einheit: "MW"
    anzeige: '2500'
    fehler:
      - wert: "1000*0.40"
        meldung: Du hast mit dem Wirkungsgrad multipliziert. Die zugeführte Leistung muss **größer** sein als die elektrische, also teilen.
  - typ: zahl
    label: Abwärme
    loesung: "1000/0.40-1000"
    einheit: "MW"
    anzeige: '1500'
    fehler:
      - wert: "1000*0.60"
        meldung: Die $60\,\%$ Verlust beziehen sich auf die zugeführte Leistung, nicht auf die elektrische.
  - typ: zahl
    label: Kühlwasserstrom
    loesung: "1500e6/(4190*10)"
    einheit: "kg/s"
    anzeige: '35\,800'
    toleranz: 100
    fehler:
      - wert: "1500/(4190*10)"
        meldung: Du hast die Leistung in Megawatt eingesetzt. Mit $c$ in $\text{J/(kg K)}$ brauchst du Watt, $1\,\text{MW} = 10^6\,\text{W}$.
hinweise:
  - '$P_\text{zu} = P_\text{el}/\eta$. Die Abwärme ist die Differenz $P_\text{zu} - P_\text{el}$.'
  - 'Pro Sekunde nimmt das Wasser $P_\text{ab} = \dot m\,c\,\Delta T$ auf. Stelle nach $\dot m$ um.'
gefuehrt:
  - text: Berechne die zugeführte Leistung in MW.
    teil: { typ: zahl, loesung: "1000/0.4" }
    erklaerung: $P_\text{zu} = 1000\,\text{MW}/0{,}40 = 2500\,\text{MW}$.
  - text: Berechne die Abwärme in MW.
    teil: { typ: zahl, loesung: "2500-1000" }
    erklaerung: $P_\text{ab} = 2500\,\text{MW} - 1000\,\text{MW} = 1500\,\text{MW}$, mehr als die Nutzleistung.
  - text: Rechne die Abwärme in Watt um und teile durch $c\,\Delta T$.
    teil: { typ: zahl, loesung: "1500e6/(4190*10)", toleranz: 100 }
    erklaerung: $\dot m = 1{,}5\cdot 10^9\,\text{W}/(4190\cdot 10\,\text{J/kg}) \approx 35\,800\,\text{kg/s}$.
loesung: |
  **Zufuhr:** $P_\text{zu} = P_\text{el}/\eta = 1000\,\text{MW}/0{,}40 = 2500\,\text{MW}$.
  ---
  **Abwärme:** $P_\text{ab} = 2500\,\text{MW} - 1000\,\text{MW} = 1500\,\text{MW}$, also mehr als die Nutzleistung.
  ---
  **Kühlwasser:** $\dot m = \dfrac{P_\text{ab}}{c\,\Delta T} = \dfrac{1{,}5\cdot 10^{9}\,\text{W}}{4190\,\tfrac{\text{J}}{\text{kg K}}\cdot 10\,\text{K}} \approx 35\,800\,\text{kg/s}$. Das sind rund $36$ Kubikmeter Wasser pro Sekunde.
```

```aufgabe
id: p11-7-verdichtung
titel: Was bringt eine höhere Verdichtung?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Hersteller erhöht das Verdichtungsverhältnis eines Ottomotors von $\varepsilon = 9$ auf $\varepsilon = 13$. Um wie viele Prozentpunkte steigt der ideale Wirkungsgrad ($\kappa = 1{,}4$)?
teile:
  - typ: zahl
    loesung: "((1-13^(-0.4))-(1-9^(-0.4)))*100"
    einheit: "%"
    anzeige: '5{,}7'
    toleranz: 0.1
    fehler:
      - wert: "(1-13^(-0.4))*100"
        meldung: Das ist der neue Wirkungsgrad selbst. Gefragt ist die Zunahme, also die Differenz zum alten Wert.
      - wert: "(13-9)/9*100"
        meldung: Der Wirkungsgrad wächst nicht proportional zu $\varepsilon$. Er hängt über die Potenz $\varepsilon^{-0{,}4}$ davon ab.
hinweise:
  - Berechne beide Wirkungsgrade mit $\eta = 1 - \varepsilon^{-0{,}4}$.
  - Ziehe den alten vom neuen Wert ab. Das Ergebnis in Prozentpunkten ist die Differenz der beiden Prozentwerte.
loesung: |
  **Alt:** $\eta_9 = 1 - 9^{-0{,}4} = 1 - 0{,}415 = 58{,}5\,\%$.
  ---
  **Neu:** $\eta_{13} = 1 - 13^{-0{,}4} = 1 - 0{,}358 = 64{,}2\,\%$.
  ---
  **Zunahme:** $64{,}2\,\% - 58{,}5\,\% = 5{,}7$ Prozentpunkte. Eine Steigerung der Verdichtung um fast die Hälfte bringt also nur knapp ein Zehntel mehr Wirkungsgrad. Die Grenze setzt das Klopfen.
```

```aufgabe
id: p11-7-fermi-kuehlturm
titel: "Abschätzung: Wie viel Wasser verdunstet ein Kühlturm?"
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein großes Kraftwerk gibt etwa $1{,}5\,\text{GW}$ Abwärme über einen Nasskühlturm ab. Nimm an, dass die gesamte Abwärme dazu dient, Wasser zu verdunsten. Die Verdampfungswärme von Wasser bei Umgebungstemperatur ist etwa $2{,}4\,\text{MJ/kg}$. Schätze ab, wie viele Kilogramm Wasser pro Sekunde verdunsten. Gib das Ergebnis mit zwei signifikanten Stellen an.
teile:
  - typ: zahl
    loesung: "1.5e9/2.4e6"
    einheit: "kg/s"
    anzeige: '625'
    toleranz: 31
    fehler:
      - wert: "1.5/2.4"
        meldung: Achte auf die Vorsilben. Giga bedeutet $10^9$, Mega $10^6$. Das Verhältnis ist also $10^3$ mal größer.
      - wert: "1.5e9*2.4e6"
        meldung: Du hast multipliziert. Die Wassermenge pro Sekunde ist Wärme pro Sekunde **geteilt** durch die Wärme pro Kilogramm.
hinweise:
  - 'Pro Sekunde muss die Wärme $1{,}5\cdot 10^9\,\text{J}$ abgeführt werden. Wie viel Kilogramm Wasser nimmt diese Wärme beim Verdunsten auf?'
  - '$\dot m = P_\text{ab}/q_v$ mit der Verdampfungswärme $q_v = 2{,}4\cdot 10^6\,\text{J/kg}$.'
loesung: |
  **Modell:** Jedes Kilogramm verdunstendes Wasser nimmt $2{,}4\,\text{MJ}$ auf. Die Abwärme pro Sekunde ist $1{,}5\cdot 10^9\,\text{J}$.
  ---
  **Rechnung:** $\dot m = \dfrac{1{,}5\cdot 10^9\,\text{J/s}}{2{,}4\cdot 10^6\,\text{J/kg}} \approx 625\,\text{kg/s}$.
  ---
  **Einordnung:** Rund eine halbe bis eine Tonne Wasser pro Sekunde steigt als Dampfwolke auf. Das ist die sichtbare weiße Fahne über einem Kühlturm. In Wirklichkeit geht ein Teil der Wärme auch durch Erwärmung der Luft weg, die Größenordnung stimmt aber.
```

```aufgabe
id: p11-auto-verbrauch
titel: Benzinverbrauch eines Autos
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Auto braucht bei $100\,\text{km/h}$ eine Antriebsleistung von $20\,\text{kW}$. Der Motor hat einen Wirkungsgrad von $25\,\%$. Benzin hat einen Heizwert von $43\,\text{MJ/kg}$ und eine Dichte von $0{,}75\,\text{kg/L}$. Wie viele Liter verbraucht das Auto auf $100\,\text{km}$?
teile:
  - typ: zahl
    loesung: "20e3/0.25*3600/43e6/0.75"
    einheit: "L"
    anzeige: '8{,}93'
    fehler:
      - wert: "20e3*3600/43e6/0.75"
        meldung: Du hast den Wirkungsgrad vergessen. Der Motor braucht viermal so viel chemische Energie, wie er an Antrieb liefert.
      - wert: "20e3/0.25*3600/43e6"
        meldung: Das ist die Masse in Kilogramm. Mit der Dichte $0{,}75\,\text{kg/L}$ musst du noch in Liter umrechnen.
hinweise:
  - Bei $100\,\text{km/h}$ dauern $100\,\text{km}$ genau eine Stunde.
  - 'Chemische Leistung $= 20\,\text{kW}/0{,}25$. Daraus die Energie in einer Stunde, dann Masse über den Heizwert und Volumen über die Dichte.'
loesung: |
  **Zugeführte Leistung:** $P = 20\,\text{kW}/0{,}25 = 80\,\text{kW}$.
  ---
  **Energie in einer Stunde:** $E = 80\,000\,\text{W}\cdot 3600\,\text{s} = 2{,}88\cdot 10^{8}\,\text{J}$.
  ---
  **Masse und Volumen:** $m = \dfrac{2{,}88\cdot 10^8\,\text{J}}{43\cdot 10^6\,\text{J/kg}} = 6{,}70\,\text{kg}$ und $V = \dfrac{6{,}70\,\text{kg}}{0{,}75\,\text{kg/L}} = 8{,}93\,\text{L}$.
  ---
  **Plausibilität:** Knapp $9\,\text{L}$ auf $100\,\text{km}$ ist ein realistischer Verbrauch. Drei Viertel dieser Energie heizen Kühler und Auspuff.
```

## Kühlschrank und Wärmepumpe

```aufgabe
id: p11-8-check
art: check
titel: "Vorwissen: Warum kühlt Verdunsten?"
niveau: 1
angabe: |
  Nach dem Baden fröstelt man im Wind, auch an einem warmen Tag. Warum?
teile:
  - typ: auswahl
    optionen:
      - "Das verdunstende Wasser entzieht der Haut die Verdampfungswärme."
      - "Das Wasser ist kälter als die Luft und gibt Kälte an die Haut ab."
      - "Der Wind bringt kalte Luft aus großer Höhe mit."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Kälte ist kein Stoff, den man abgeben kann. Es fließt immer Wärme, und zwar hier von der Haut ins Wasser, das dabei verdunstet.
      - wert: 2
        meldung: Auch ganz ohne kalte Luft fröstelt man, solange man nass ist. Der Wind beschleunigt nur das Verdunsten.
hinweise:
  - Um Wasser zu verdampfen, braucht man Energie. Woher nimmt das Wasser auf der Haut diese Energie?
loesung: |
  Zum Verdunsten braucht Wasser die Verdampfungswärme, rund $2{,}4\,\text{MJ}$ pro Kilogramm bei Hauttemperatur.
  ---
  Diese Wärme kommt aus der Haut, sie kühlt ab. Genau dieses Prinzip nutzt der Kühlschrank im Inneren. Wiederholen: [10.6 Phasenübergänge und latente Wärme](/lernen/physik1/temperatur-waerme-gase/phasenuebergaenge-und-latente-waerme).
```

**Worum geht es?** Ein Kühlschrank und eine Wärmepumpe bringen Wärme vom Kalten zum Warmen, also gegen
ihre natürliche Richtung. Das geht, aber nur mit Arbeit. Du lernst, wie das technisch funktioniert, wie
man die Effizienz mit der **Leistungszahl** misst und warum eine Wärmepumpe mehr Wärme liefert, als sie
Strom verbraucht.

### Der umgekehrte Kreisprozess

Durchläuft ein Gas einen Kreisprozess **gegen** den Uhrzeigersinn, wird netto Arbeit **am** Gas
verrichtet (siehe [11.5 Kreisprozesse](/lernen/physik1/hauptsaetze-waermekraftmaschinen/kreisprozesse-und-der-wirkungsgrad)).
Aus der Wärmekraftmaschine wird eine **Kältemaschine**. Sie entnimmt einem **kalten** Bereich die Wärme
$Q_k$. Mit Hilfe der Arbeit $W$, etwa eines elektrischen Kompressors, gibt sie an einen **warmen** Bereich
die Wärme $Q_h$ ab. Nach dem ersten Hauptsatz ist
$$Q_h = Q_k + W.$$
Dabei sind $Q_h$, $Q_k$ und $W$ hier als positive Beträge gemeint. Die abgegebene Wärme ist also immer
größer als die entnommene, weil die Arbeit dazukommt.

```plot
x: [0, 10]
y: [0, 8]
gleich: true
hoehe: 300
strecken:
  - { von: [2, 7], nach: [8, 7], farbe: 1 }
  - { von: [2, 1], nach: [8, 1], farbe: 0 }
  - { von: [4, 3.2], nach: [6, 3.2], farbe: 2 }
  - { von: [6, 3.2], nach: [6, 4.8], farbe: 2 }
  - { von: [6, 4.8], nach: [4, 4.8], farbe: 2 }
  - { von: [4, 4.8], nach: [4, 3.2], farbe: 2 }
vektoren:
  - { von: [5, 1.1], nach: [5, 3.1], label: "Q_k", farbe: 0 }
  - { von: [5, 4.9], nach: [5, 6.9], label: "Q_h = Q_k + W", farbe: 1 }
  - { von: [9, 4], nach: [6.1, 4], label: "W", farbe: 3 }
punkte:
  - { x: 3, y: 7.4, label: "warm (Küche, Haus)" }
  - { x: 3, y: 0.6, label: "kalt (Kühlraum, Außenluft)" }
  - { x: 5, y: 4, label: "Maschine" }
beschriftung: "Energieflussbild einer Kältemaschine. Aus dem kalten Bereich fließt Q_k in die Maschine, dazu kommt die Arbeit W. Die Summe Q_h fließt in den warmen Bereich. Alle Pfeile sind umgekehrt wie bei der Wärmekraftmaschine."
```

### So funktioniert ein Kühlschrank

In einem geschlossenen Rohrsystem kreist ein **Kältemittel**, eine Flüssigkeit mit sehr niedrigem Siedepunkt.
Der Kreislauf hat vier Stationen:

1. **Verdampfer** (innen, an der Rückwand des Kühlraums): Das Kältemittel steht unter niedrigem Druck und
   verdampft schon bei etwa $-20\,^\circ\text{C}$. Dafür braucht es die Verdampfungswärme. Diese Wärme
   nimmt es aus dem Kühlraum auf. So entsteht die Kühlung.
2. **Kompressor** (der Motor unten hinten): Er saugt den Dampf ab und verdichtet ihn. Dabei wird der Dampf
   heiß, ähnlich wie Luft in der Fahrradpumpe. Hier wird die elektrische Arbeit $W$ zugeführt.
3. **Verflüssiger** (das schwarze Gitter an der Rückseite): Der heiße Dampf gibt Wärme an die Küchenluft ab
   und wird wieder flüssig.
4. **Drosselventil** (eine enge Stelle): Die Flüssigkeit strömt hindurch, ihr Druck fällt, sie kühlt stark
   ab. Dann beginnt der Kreislauf von vorn.

Ein Kühlschrank „erzeugt“ also keine Kälte. Er **pumpt Wärme** aus dem Innenraum in die Küche. Die Küche
bekommt dabei mehr Wärme, als der Innenraum verliert, nämlich zusätzlich die Arbeit des Kompressors.

:::achtung[Fehler: „Der offene Kühlschrank kühlt die Küche“]
An einem heißen Tag lässt jemand die Kühlschranktür offen, um die Küche zu kühlen. Er überlegt: „Der
Kühlschrank entzieht dem Innenraum $300\,\text{W}$ Wärme, also kühlt er die Küche mit $300\,\text{W}$.“

Bei offener Tür ist der Innenraum ein Teil der Küche. Der Kühlschrank nimmt die $300\,\text{W}$ aus der Küche
und gibt sie hinten an die Küche zurück, plus die elektrische Leistung des Kompressors, etwa
$100\,\text{W}$. Netto heizt er die Küche mit $100\,\text{W}$. Ein Kühlschrank erzeugt keine Kälte. Er
verschiebt Wärme, und dabei kommt immer die Arbeit dazu.
:::

```aufgabe
id: p11-8-offener-kuehlschrank
titel: "Gedankenexperiment: Kühlschrank im geschlossenen Raum"
niveau: 1
lernziel: 4
kompetenz: begruenden
angabe: |
  Ein laufender Kühlschrank steht in einem gut isolierten, geschlossenen Raum. Seine Tür steht offen. Was passiert mit der Temperatur im Raum nach einigen Stunden?
teile:
  - typ: auswahl
    optionen:
      - "Sie steigt, weil die elektrische Arbeit als Wärme im Raum bleibt."
      - "Sie sinkt, weil der Kühlschrank Kälte in den Raum abgibt."
      - "Sie bleibt gleich, weil der Kühlschrank vorne kühlt und hinten heizt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Kälte ist kein Stoff, der abgegeben werden kann. Der Kühlschrank verschiebt nur Wärme. Bei offener Tür verschiebt er sie innerhalb desselben Raums.
      - wert: 2
        meldung: Vorne entnimmt er $Q_k$, hinten gibt er $Q_h = Q_k + W$ ab. Hinten kommt also mehr heraus, nämlich zusätzlich die elektrische Arbeit.
hinweise:
  - Stelle die Energiebilanz für den ganzen Raum auf. Welche Energie kommt von außen herein?
loesung: |
  **Bilanz für den Raum:** Der Raum ist isoliert. Von außen kommt nur die elektrische Energie in den Kompressor.
  ---
  Der Kühlschrank nimmt $Q_k$ aus dem Raum und gibt $Q_k + W$ an den Raum ab. Netto bleibt $W$ im Raum, als Wärme. Die Temperatur steigt.
```

### Die Wärmepumpe

Eine **Wärmepumpe** ist dieselbe Maschine mit einem anderen Ziel. Sie nimmt Wärme aus der Außenluft, dem
Erdreich oder dem Grundwasser und heizt damit ein Haus. Beim Kühlschrank interessiert die entnommene Wärme
$Q_k$, bei der Wärmepumpe die abgegebene Wärme $Q_h$. Dafür misst man die Effizienz mit der Leistungszahl.

:::definition[Leistungszahl]
Die **Leistungszahl** $\varepsilon$ (englisch COP, „coefficient of performance“) gibt an, wie viel
gewünschte Wärme man pro Joule Arbeit bekommt:
$$\varepsilon_\text{WP} = \frac{Q_h}{W} \quad\text{(Wärmepumpe)}, \qquad \varepsilon_\text{K} = \frac{Q_k}{W} \quad\text{(Kühlschrank)}.$$
Wegen $Q_h = Q_k + W$ ist immer $\varepsilon_\text{WP} = \varepsilon_\text{K} + 1$ für dieselbe Maschine.
Vorsicht: Beim Ottomotor stand $\varepsilon$ für das Verdichtungsverhältnis. Hier bedeutet dasselbe Zeichen die
Leistungszahl. Die Indizes WP (Wärmepumpe) und K (Kühlschrank) zeigen, welche gemeint ist.

**Beispiel:** Eine Wärmepumpe liefert aus $1{,}0\,\text{kWh}$ Strom $4{,}0\,\text{kWh}$ Heizwärme. Ihre
Leistungszahl ist $4{,}0$. Davon stammen $3{,}0\,\text{kWh}$ aus der Umgebung.

**Kein Beispiel:** Ein Elektroheizstab liefert aus $1\,\text{kWh}$ Strom genau $1\,\text{kWh}$ Wärme. Er pumpt
keine Umgebungswärme, seine „Leistungszahl“ ist $1$. Er ist keine Wärmepumpe.
:::

```aufgabe
id: p11-kuehlschrank
titel: Leistungszahl eines Kühlschranks
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Kühlschrank entzieht dem Innenraum $300\,\text{W}$ Wärmeleistung. Der Kompressor nimmt $100\,\text{W}$ elektrische Leistung auf. Berechne die Leistungszahl und die an die Küche abgegebene Wärmeleistung.
teile:
  - typ: zahl
    label: Leistungszahl
    loesung: "300/100"
    anzeige: '3'
    fehler:
      - wert: "400/100"
        meldung: Das wäre die Leistungszahl als Wärmepumpe, $Q_h/W$. Beim Kühlschrank interessiert die Wärme, die dem Innenraum entzogen wird, also $Q_k/W$.
  - typ: zahl
    label: Wärmeleistung an die Küche
    loesung: "300+100"
    einheit: "W"
    anzeige: '400'
    fehler:
      - wert: "300-100"
        meldung: Die Arbeit des Kompressors verschwindet nicht. Sie wird ebenfalls an die Küche abgegeben, also $Q_h = Q_k + W$.
hinweise:
  - 'Kühlschrank: $\varepsilon_\text{K} = Q_k/W$. Energieerhaltung: $Q_h = Q_k + W$.'
loesung: |
  $\varepsilon_\text{K} = Q_k/W = 300\,\text{W}/100\,\text{W} = 3$.
  ---
  $P_h = 300\,\text{W} + 100\,\text{W} = 400\,\text{W}$. Die Küche wird stärker geheizt, als der Innenraum gekühlt wird.
```

Eine Leistungszahl größer als $1$ widerspricht **nicht** der Energieerhaltung. Die Energie wird nicht
erzeugt, sondern aus der Umgebung „hinaufgepumpt“. Die Bilanz $Q_h = Q_k + W$ geht immer genau auf.

### Die ideale Leistungszahl

Die beste denkbare Kältemaschine ist ein rückwärts laufender Carnot-Prozess. Für ihn gilt wieder
$Q_k/Q_h = T_k/T_h$ (siehe [11.6 Der Carnot-Prozess](/lernen/physik1/hauptsaetze-waermekraftmaschinen/der-carnot-prozess-die-obergrenze-des-wirkungsgrads)).
Mit $W = Q_h - Q_k$ folgt in drei Schritten:
$$\varepsilon_\text{WP,C} = \frac{Q_h}{Q_h - Q_k} = \frac{1}{1 - Q_k/Q_h} = \frac{1}{1 - T_k/T_h} = \frac{T_h}{T_h - T_k}.$$
Zuerst haben wir Zähler und Nenner durch $Q_h$ geteilt. Dann haben wir $Q_k/Q_h$ durch $T_k/T_h$ ersetzt.
Zuletzt haben wir Zähler und Nenner mit $T_h$ multipliziert. Für den
Kühlschrank ergibt sich ebenso
$$\varepsilon_\text{K,C} = \frac{T_k}{T_h - T_k}.$$
Dabei sind $T_h$ und $T_k$ die Temperaturen der warmen und der kalten Seite in Kelvin. Die ideale
Leistungszahl der Wärmepumpe ist genau der **Kehrwert** des Carnot-Wirkungsgrads.

:::beispiel[Eine Erdwärmepumpe]
Eine Wärmepumpe holt Wärme aus dem Erdreich mit $5\,^\circ\text{C}$ und heizt eine Fußbodenheizung mit
$40\,^\circ\text{C}$ Vorlauf. Die reale Leistungszahl beträgt $4{,}0$, die Heizleistung $8{,}0\,\text{kW}$.

**Schritt 1, ideale Leistungszahl:** $T_h = 313{,}15\,\text{K}$, $T_h - T_k = 35\,\text{K}$ (eine Differenz ist
in Kelvin und Grad Celsius gleich). Also $\varepsilon_\text{WP,C} = 313{,}15/35 = 8{,}95$.

**Schritt 2, elektrische Leistung:** $P_\text{el} = P_h/\varepsilon = 8{,}0\,\text{kW}/4{,}0 = 2{,}0\,\text{kW}$.

**Schritt 3, Umgebungswärme:** $P_k = P_h - P_\text{el} = 6{,}0\,\text{kW}$ kommen aus dem Erdreich.

**Einordnung:** Die reale Pumpe erreicht knapp die Hälfte des Idealwerts. Das ist ein typischer Wert.
:::

Je **kleiner** der Temperaturunterschied, desto größer die ideale Leistungszahl. Deshalb passt die
Wärmepumpe gut zur Fußbodenheizung mit $35$ bis $40\,^\circ\text{C}$ Vorlauf. Zu alten Heizkörpern, die
$70\,^\circ\text{C}$ brauchen, passt sie schlecht. Und im Winter, wenn die Außenluft sehr kalt ist, sinkt ihre
Leistungszahl.

:::beispiel[Wie gut kann ein Kühlschrank sein?]
Ein Kühlschrank hält innen $5\,^\circ\text{C}$, die Luft hinter ihm hat $35\,^\circ\text{C}$.

**Schritt 1, Kelvin:** $T_k = 278{,}15\,\text{K}$, $T_h - T_k = 30\,\text{K}$.

**Schritt 2, ideal:** $\varepsilon_\text{K,C} = 278{,}15/30 = 9{,}27$. Ein idealer Kühlschrank könnte also mit
$1\,\text{J}$ Strom $9{,}27\,\text{J}$ Wärme aus dem Innenraum holen.

**Schritt 3, Wirklichkeit:** Reale Kühlschränke erreichen etwa $2$ bis $3$. Sie brauchen für den Verdampfer
ein deutlich kälteres Kältemittel als $5\,^\circ\text{C}$ und im Verflüssiger ein wärmeres als
$35\,^\circ\text{C}$. Der wirksame Temperaturunterschied ist also viel größer.
:::

:::achtung[Fehler: Grad Celsius in der Leistungszahl]
Für eine Wärmepumpe zwischen $5\,^\circ\text{C}$ und $45\,^\circ\text{C}$ rechnet eine Schülerin:
„$\varepsilon_\text{C} = \dfrac{45}{45 - 5} = 1{,}1$, die Wärmepumpe lohnt sich kaum.“

Im Zähler steht eine absolute Temperatur, dafür braucht man Kelvin. Nur die Differenz im Nenner ist in
beiden Skalen gleich. Richtig ist $\varepsilon_\text{C} = 318{,}15/40 = 7{,}95$. Der Fehler unterschätzt die
Wärmepumpe um den Faktor sieben.
:::

```reflexion
frage: Warum ist es sinnvoller, mit Strom eine Wärmepumpe zu betreiben, als denselben Strom in einem Heizstab in Wärme umzuwandeln? Gilt das bei jeder Außentemperatur gleich stark?
antwort: |
  Der Heizstab macht aus $1\,\text{kWh}$ Strom genau $1\,\text{kWh}$ Wärme. Die Wärmepumpe nutzt den Strom, um zusätzlich
  Wärme aus der Umgebung ins Haus zu pumpen. Mit einer Leistungszahl von $3$ bis $4$ bekommt man aus $1\,\text{kWh}$ Strom
  $3$ bis $4\,\text{kWh}$ Wärme. Der Vorteil hängt aber vom Temperaturunterschied ab. Je kälter es draußen ist, desto
  größer ist $T_h - T_k$, und desto kleiner wird die Leistungszahl. An sehr kalten Tagen schrumpft der Vorteil.
```

:::merke[Kältemaschine und Wärmepumpe]
1. Energiebilanz: $Q_h = Q_k + W$, die warme Seite bekommt immer mehr als die kalte verliert.
2. Leistungszahl: Wärmepumpe $\varepsilon = Q_h/W$, Kühlschrank $\varepsilon = Q_k/W$.
3. Ideal: $\varepsilon_\text{WP,C} = T_h/(T_h - T_k)$, $\varepsilon_\text{K,C} = T_k/(T_h - T_k)$, Zähler in Kelvin.
4. Kleiner Temperaturunterschied bedeutet große Leistungszahl.
:::

### Aufgaben zu Kühlschrank und Wärmepumpe

```aufgabe
id: p11-waermepumpe
titel: Wärmepumpe mit Grundwasser
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Wärmepumpe holt Wärme aus Grundwasser mit $10\,^\circ\text{C}$ und heizt eine Fußbodenheizung mit $35\,^\circ\text{C}$.

  a) Wie groß ist die ideale (Carnot-)Leistungszahl?

  b) Welche elektrische Leistung braucht eine reale Wärmepumpe mit der Leistungszahl $4{,}5$ für $7{,}2\,\text{kW}$ Heizleistung?
teile:
  - typ: zahl
    label: a) Carnot-Leistungszahl
    loesung: "308.15/25"
    anzeige: '12{,}3'
    fehler:
      - wert: "35/25"
        meldung: Im Zähler steht die absolute Temperatur. Mit Grad Celsius wird die Leistungszahl viel zu klein.
      - wert: "283.15/25"
        meldung: Das ist die ideale Leistungszahl eines Kühlschranks, $T_k/(T_h - T_k)$. Für die Wärmepumpe steht $T_h$ im Zähler.
  - typ: zahl
    label: b) elektrische Leistung
    loesung: "7.2/4.5"
    einheit: "kW"
    anzeige: '1{,}6'
    fehler:
      - wert: "7.2*4.5"
        meldung: Die elektrische Leistung muss **kleiner** sein als die Heizleistung, denn der Großteil kommt aus dem Grundwasser. Teile durch die Leistungszahl.
hinweise:
  - '$\varepsilon_\text{WP,C} = T_h/(T_h - T_k)$ mit $T_h$ in Kelvin. Die Differenz ist $25\,\text{K}$.'
  - 'Aus $\varepsilon = P_h/P_\text{el}$ folgt $P_\text{el} = P_h/\varepsilon$.'
gefuehrt:
  - text: Wie groß ist $T_h$ in Kelvin?
    teil: { typ: zahl, loesung: "308.15" }
    erklaerung: $T_h = 35 + 273{,}15 = 308{,}15\,\text{K}$.
  - text: Wie groß ist die Temperaturdifferenz $T_h - T_k$ in Kelvin?
    teil: { typ: zahl, loesung: "25" }
    erklaerung: $35\,^\circ\text{C} - 10\,^\circ\text{C} = 25\,\text{K}$. Eine Differenz ist in beiden Skalen gleich.
  - text: Berechne die ideale Leistungszahl.
    teil: { typ: zahl, loesung: "308.15/25" }
    erklaerung: $308{,}15/25 = 12{,}3$.
  - text: Berechne die elektrische Leistung der realen Pumpe in kW.
    teil: { typ: zahl, loesung: "7.2/4.5" }
    erklaerung: $P_\text{el} = 7{,}2\,\text{kW}/4{,}5 = 1{,}6\,\text{kW}$. Die übrigen $5{,}6\,\text{kW}$ stammen aus dem Grundwasser.
loesung: |
  **a)** $\varepsilon_\text{WP,C} = \dfrac{T_h}{T_h - T_k} = \dfrac{308{,}15\,\text{K}}{25\,\text{K}} = 12{,}3$.
  ---
  **b)** $P_\text{el} = \dfrac{P_h}{\varepsilon} = \dfrac{7{,}2\,\text{kW}}{4{,}5} = 1{,}6\,\text{kW}$.
  ---
  **Deutung:** $7{,}2\,\text{kW} - 1{,}6\,\text{kW} = 5{,}6\,\text{kW}$ kommen aus dem Grundwasser. Die reale Pumpe erreicht gut ein Drittel des Idealwerts.
```

```aufgabe
id: p11-8-kuehlschrank-carnot
titel: Mindeststrom für einen Kühlschrank
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Kühlschrank hält innen $4\,^\circ\text{C}$, die Küche hat $30\,^\circ\text{C}$.

  a) Wie groß ist die ideale Leistungszahl?

  b) Wie viel elektrische Energie braucht ein idealer Kühlschrank mindestens, um dem Innenraum $1000\,\text{J}$ Wärme zu entziehen?
teile:
  - typ: zahl
    label: a) ideale Leistungszahl
    loesung: "277.15/26"
    anzeige: '10{,}7'
    fehler:
      - wert: "303.15/26"
        meldung: Das ist die ideale Leistungszahl einer Wärmepumpe. Beim Kühlschrank steht die **kalte** Temperatur im Zähler.
      - wert: "4/26"
        meldung: Im Zähler steht eine absolute Temperatur. Rechne $4\,^\circ\text{C}$ in Kelvin um.
  - typ: zahl
    label: b) Mindestenergie
    loesung: "1000/(277.15/26)"
    einheit: "J"
    anzeige: '93{,}8'
    fehler:
      - wert: "1000*277.15/26"
        meldung: Du hast mit der Leistungszahl multipliziert. Die Arbeit ist die entzogene Wärme **geteilt** durch die Leistungszahl.
hinweise:
  - '$\varepsilon_\text{K,C} = T_k/(T_h - T_k)$, $T_k$ in Kelvin.'
  - 'Aus $\varepsilon = Q_k/W$ folgt $W = Q_k/\varepsilon$.'
loesung: |
  **a)** $T_k = 277{,}15\,\text{K}$, $T_h - T_k = 26\,\text{K}$. $\varepsilon_\text{K,C} = 277{,}15/26 = 10{,}7$.
  ---
  **b)** $W = Q_k/\varepsilon = 1000\,\text{J}/10{,}66 = 93{,}8\,\text{J}$.
  ---
  **Einordnung:** Mindestens $94\,\text{J}$ Strom pro $1000\,\text{J}$ Kühlung. Ein realer Kühlschrank mit $\varepsilon = 2{,}5$ braucht $400\,\text{J}$, also rund das Vierfache.
```

```aufgabe
id: p11-8-vergleich-heizstab
titel: Heizstab oder Wärmepumpe?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Für eine Heizung stehen $3{,}0\,\text{kW}$ elektrische Leistung zur Verfügung. Wie viel Heizleistung liefert ein elektrischer Heizstab, und wie viel eine Wärmepumpe mit der Leistungszahl $3{,}5$? Gib die Heizleistung der Wärmepumpe an.
teile:
  - typ: zahl
    loesung: "3*3.5"
    einheit: "kW"
    anzeige: '10{,}5'
    fehler:
      - wert: "3"
        meldung: Das ist die Heizleistung des Heizstabs. Die Wärmepumpe pumpt zusätzlich Umgebungswärme ins Haus.
      - wert: "3/3.5"
        meldung: Die Heizleistung ist größer als die elektrische Leistung. Multipliziere mit der Leistungszahl, statt zu teilen.
hinweise:
  - Der Heizstab wandelt Strom eins zu eins in Wärme um.
  - 'Für die Wärmepumpe gilt $P_h = \varepsilon\cdot P_\text{el}$.'
loesung: |
  **Heizstab:** $3{,}0\,\text{kW}$ Strom ergeben $3{,}0\,\text{kW}$ Wärme.
  ---
  **Wärmepumpe:** $P_h = \varepsilon\cdot P_\text{el} = 3{,}5\cdot 3{,}0\,\text{kW} = 10{,}5\,\text{kW}$.
  ---
  **Vergleich:** Die Wärmepumpe liefert $3{,}5$-mal so viel Wärme. Die zusätzlichen $7{,}5\,\text{kW}$ stammen aus der Umgebung, nicht aus dem Stromnetz.
```

```aufgabe
id: p11-8-eiswuerfel
titel: Eiswürfel im Gefrierfach
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  In ein Gefrierfach werden $0{,}50\,\text{kg}$ Wasser mit $20\,^\circ\text{C}$ gestellt. Das Wasser wird auf $0\,^\circ\text{C}$ abgekühlt und gefriert dann vollständig ($c = 4190\,\text{J/(kg K)}$, Schmelzwärme $334\,\text{kJ/kg}$). Das Gerät hat die Leistungszahl $2{,}0$.

  a) Wie viel Wärme muss dem Wasser entzogen werden?

  b) Wie viel elektrische Energie braucht das Gerät dafür, in kWh?

  c) Wie viel Wärme gibt das Gerät an die Küche ab?
teile:
  - typ: zahl
    label: a) entzogene Wärme
    loesung: "0.5*4190*20+0.5*334000"
    einheit: "J"
    anzeige: '2{,}09\cdot 10^{5}'
  - typ: zahl
    label: b) elektrische Energie
    loesung: "(0.5*4190*20+0.5*334000)/2/3.6e6"
    einheit: "kWh"
    anzeige: '0{,}029'
  - typ: zahl
    label: c) Wärme an die Küche
    loesung: "(0.5*4190*20+0.5*334000)*1.5"
    einheit: "J"
    anzeige: '3{,}13\cdot 10^{5}'
hinweise:
  - 'a) Zwei Anteile: Abkühlen $m\,c\,\Delta T$ und Gefrieren $m\,q_s$ mit der spezifischen Schmelzwärme $q_s = 334\,\text{kJ/kg}$. Die Schmelzwärme wird beim Gefrieren wieder frei und muss abgeführt werden.'
  - 'b) $W = Q_k/\varepsilon$, dann $1\,\text{kWh} = 3{,}6\cdot 10^6\,\text{J}$. c) $Q_h = Q_k + W$.'
loesung: |
  **Modell:** Das Gefrierfach ist eine Kältemaschine. Die entzogene Wärme besteht aus der Abkühlung auf $0\,^\circ\text{C}$ und der Gefrierwärme ([10.6 Phasenübergänge und latente Wärme](/lernen/physik1/temperatur-waerme-gase/phasenuebergaenge-und-latente-waerme)).
  ---
  **a)** Abkühlen: $0{,}50\,\text{kg}\cdot 4190\,\tfrac{\text{J}}{\text{kg K}}\cdot 20\,\text{K} = 41\,900\,\text{J}$. Gefrieren: $0{,}50\,\text{kg}\cdot 334\,000\,\text{J/kg} = 167\,000\,\text{J}$. Zusammen $Q_k = 208\,900\,\text{J}$.
  ---
  **b)** $W = Q_k/\varepsilon = 208\,900\,\text{J}/2{,}0 = 104\,450\,\text{J} = 104\,450/3{,}6\cdot 10^6\,\text{kWh} = 0{,}029\,\text{kWh}$.
  ---
  **c)** $Q_h = Q_k + W = 208\,900\,\text{J} + 104\,450\,\text{J} = 313\,350\,\text{J} \approx 3{,}13\cdot 10^5\,\text{J}$.
  ---
  **Einordnung:** Die Eiswürfel kosten weniger als ein Cent Strom. Die Küche bekommt eineinhalbmal so viel Wärme, wie dem Wasser entzogen wurde.
```

## Der zweite Hauptsatz: Warum Vorgänge eine Richtung haben

```aufgabe
id: p11-9-check
art: check
titel: "Vorwissen: In welche Richtung fließt Wärme?"
niveau: 1
angabe: |
  Eine Tasse Kaffee mit $80\,^\circ\text{C}$ steht in einem Zimmer mit $20\,^\circ\text{C}$. Was passiert?
teile:
  - typ: auswahl
    optionen:
      - "Wärme fließt vom Kaffee in die Luft, bis beide gleich warm sind."
      - "Kälte fließt von der Luft in den Kaffee."
      - "Wärme fließt in beide Richtungen gleich stark, deshalb ändert sich nichts."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Kälte ist kein Stoff, der fließen kann. Es fließt immer Wärme, und zwar vom wärmeren zum kälteren Körper.
      - wert: 2
        meldung: Dann würde der Kaffee nie abkühlen. Netto fließt Wärme immer vom Warmen zum Kalten, bis die Temperaturen gleich sind.
hinweise:
  - Erinnere dich an das thermische Gleichgewicht. Was ist am Ende gleich?
loesung: |
  Wärme fließt von selbst vom wärmeren zum kälteren Körper, hier vom Kaffee in die Zimmerluft.
  ---
  Das geht so lange, bis beide dieselbe Temperatur haben, das thermische Gleichgewicht. Wiederholen: [10.1 Temperatur und Temperaturskalen](/lernen/physik1/temperatur-waerme-gase/temperatur-und-temperaturskalen).
```

**Worum geht es?** Der erste Hauptsatz verbietet nur, Energie aus dem Nichts zu gewinnen. Er hätte nichts
dagegen, wenn sich ein Kaffee von selbst erwärmte und die Tischplatte dafür abkühlte. Er hätte auch nichts
gegen ein Schiff, das dem Meer Wärme entzieht und damit fährt. Beides passiert nie. Der zweite Hauptsatz
sagt, warum, und er gibt allen Vorgängen in der Natur eine Richtung.

### Zwei Formulierungen eines Gesetzes

Der zweite Hauptsatz wurde im 19. Jahrhundert von Rudolf Clausius und von William Thomson, dem späteren
Lord Kelvin, gefunden. Beide haben ihn verschieden formuliert. Max Planck hat die zweite Form später
verfeinert, deshalb heißt sie Kelvin-Planck-Formulierung.

:::satz[Zweiter Hauptsatz der Wärmelehre]
**Nach Clausius:** Wärme fließt von selbst nur vom wärmeren zum kälteren Körper, nie umgekehrt.

**Nach Kelvin und Planck:** Es gibt keine periodisch arbeitende Maschine, die Wärme aus einem einzigen
Reservoir aufnimmt und vollständig in Arbeit umwandelt.

Beide Formulierungen sind gleichwertig. Eine Maschine, die gegen die zweite Formulierung verstößt, heißt
**Perpetuum mobile zweiter Art**.

**Beispiel:** Ein Eiswürfel in warmem Tee schmilzt. Wärme fließt vom Tee ins Eis, wie Clausius es verlangt.

**Gegenbeispiel:** Dass sich der Eiswürfel von selbst weiter abkühlt und der Tee dabei wärmer wird, gibt es
nicht. Die Energie bliebe zwar erhalten, aber die Richtung wäre verboten.
:::

„Periodisch arbeitend“ heißt, die Maschine kehrt immer wieder in ihren Anfangszustand zurück. Einmalig
kann man Wärme durchaus vollständig in Arbeit umwandeln, etwa bei der isothermen Ausdehnung eines Gases
(siehe [11.3 Isochor, isobar, isotherm](/lernen/physik1/hauptsaetze-waermekraftmaschinen/isochor-isobar-isotherm-drei-zustandsaenderungen)).
Dabei bleibt aber eine Veränderung zurück, nämlich das größere Volumen. Um das Gas zurückzudrücken,
braucht man Arbeit, und netto bleibt ohne kaltes Reservoir nichts übrig.

```aufgabe
id: p11-zweiter-hauptsatz
titel: Was der zweite Hauptsatz verbietet
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche der folgenden Maschinen oder Vorgänge widersprechen dem **zweiten** Hauptsatz, aber nicht dem ersten? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Schiff entzieht dem Meerwasser Wärme und treibt damit seine Schraube an. Zurück bleibt etwas kälteres Wasser."
      - "Ein Motor gibt mehr Arbeit ab, als ihm an Energie zugeführt wird."
      - "Ein Eiswürfel in einem warmen Getränk wird von selbst kälter, das Getränk wärmer."
      - "Ein Kühlschrank kühlt den Innenraum unter Aufwand elektrischer Arbeit."
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: Mehr Arbeit als zugeführte Energie verletzt schon den **ersten** Hauptsatz, die Energieerhaltung. Gesucht sind Vorgänge, bei denen die Energie stimmt, aber die Richtung verboten ist.
      - wert: [0, 2, 3]
        meldung: Der Kühlschrank ist erlaubt. Er bringt Wärme nicht **von selbst** vom Kalten zum Warmen, sondern mit Arbeitsaufwand.
      - wert: [2]
        meldung: Auch das Schiff gehört dazu. Es wäre ein Perpetuum mobile zweiter Art, denn es wandelt Wärme aus einem einzigen Reservoir vollständig in Arbeit um.
hinweise:
  - Prüfe bei jeder Aussage zuerst, ob die Energie erhalten bleibt. Prüfe dann, ob die Richtung von selbst erlaubt ist.
loesung: |
  **Zweiter Hauptsatz verletzt:** Das Schiff wandelt Wärme aus einem einzigen Reservoir vollständig in Arbeit um, ein Perpetuum mobile zweiter Art. Beim Eiswürfel flösse Wärme von selbst vom Kalten zum Warmen.
  ---
  **Nicht gemeint:** Mehr Arbeit als zugeführte Energie verletzt den **ersten** Hauptsatz. Der Kühlschrank ist erlaubt, weil Arbeit aufgewendet wird.
```

### Perpetuum mobile erster und zweiter Art

Die beiden Arten unterscheiden sich darin, welchen Hauptsatz sie verletzen:

- Ein **Perpetuum mobile erster Art** gibt Arbeit ab, ohne dass ihm Energie zugeführt wird. Es verletzt den
  **ersten** Hauptsatz, die Energieerhaltung (siehe [11.2 Der erste Hauptsatz](/lernen/physik1/hauptsaetze-waermekraftmaschinen/der-erste-hauptsatz-energiebilanz-eines-gases)).
- Ein **Perpetuum mobile zweiter Art** hält die Energieerhaltung ein. Es nimmt Wärme aus einem einzigen
  Reservoir, etwa dem Meer oder der Luft, und wandelt sie vollständig in Arbeit um. Es verletzt den **zweiten**
  Hauptsatz.

Ein Schiff, das dem Meerwasser Wärme entzieht und damit seine Schraube antreibt, wäre ein Perpetuum mobile
zweiter Art. Im Meer steckt riesig viel innere Energie, aber es fehlt ein kälteres Reservoir. Ohne
Temperaturunterschied lässt sich keine Arbeit gewinnen.

:::beispiel[Eine Herstellerangabe prüfen]
Eine Firma bietet eine Maschine an, die zwischen $400\,\text{K}$ und $300\,\text{K}$ arbeitet. Pro Umlauf
nimmt sie $1000\,\text{J}$ Wärme auf, gibt $700\,\text{J}$ Arbeit ab und $300\,\text{J}$ Wärme an das kalte
Reservoir. Ist das möglich?

**Schritt 1, erster Hauptsatz:** $1000\,\text{J} = 700\,\text{J} + 300\,\text{J}$. Die Energiebilanz stimmt.

**Schritt 2, zweiter Hauptsatz:** Die Carnot-Grenze ist $\eta_C = 1 - 300/400 = 25\,\%$. Mehr als
$0{,}25\cdot 1000\,\text{J} = 250\,\text{J}$ Arbeit sind nicht möglich.

**Antwort:** Behauptet werden $70\,\%$, also fast das Dreifache der Grenze. Die Maschine verstößt nicht gegen den
ersten, aber gegen den zweiten Hauptsatz. Die Angabe ist falsch.
:::

:::achtung[Fehler: „Der zweite Hauptsatz verbietet Kühlschränke“]
Ein Schüler argumentiert: „Ein Kühlschrank bringt Wärme vom kalten Innenraum in die warme Küche. Das
widerspricht dem zweiten Hauptsatz, also kann er nur mit einem Trick funktionieren.“

Der zweite Hauptsatz verbietet nur, dass Wärme **von selbst** vom Kalten zum Warmen fließt. Der Kühlschrank
braucht dafür Arbeit, etwa $100\,\text{J}$ Strom für $300\,\text{J}$ entzogene Wärme. Mit Arbeitsaufwand ist der
Transport erlaubt. „Von selbst“ ist das entscheidende Wort in der Formulierung von Clausius.
:::

:::achtung[Fehler: „Ein Heizstab mit 100 % Wirkungsgrad verletzt den zweiten Hauptsatz“]
Eine Schülerin schreibt: „Ein Heizstab wandelt $2000\,\text{J}$ Strom in $2000\,\text{J}$ Wärme um. Das sind $100\,\%$,
und der zweite Hauptsatz verbietet $100\,\%$.“

Der zweite Hauptsatz verbietet nur die vollständige Umwandlung von **Wärme in Arbeit**. Die umgekehrte
Richtung, Arbeit oder Strom vollständig in Wärme, ist immer erlaubt. Reibung, Bremsen und Heizdrähte tun
genau das. Arbeit ist sozusagen die „wertvollere“ Energieform, man kann sie ganz entwerten, aber Wärme nicht
ganz aufwerten.
:::

```aufgabe
id: p11-perpetuum
titel: Perpetuum mobile erster und zweiter Art
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Erkläre den Unterschied zwischen einem Perpetuum mobile erster und zweiter Art. Nenne jeweils den Hauptsatz, der es verbietet, und gib zu jeder Art ein Beispiel.
teile:
  - typ: text
    muster: |
      Ein Perpetuum mobile erster Art würde Arbeit abgeben, ohne dass ihm Energie zugeführt wird, also Energie aus dem
      Nichts erzeugen. Das verbietet der erste Hauptsatz, die Energieerhaltung. Beispiel: ein Rad, das sich durch
      verschobene Gewichte von selbst immer schneller dreht und dabei Strom liefert. Ein Perpetuum mobile zweiter Art
      hält die Energieerhaltung ein, wandelt aber Wärme aus einem einzigen Reservoir vollständig in Arbeit um. Das
      verbietet der zweite Hauptsatz. Beispiel: ein Schiff, das dem Meer Wärme entzieht und damit fährt. Jede
      Wärmekraftmaschine braucht ein heißes und ein kaltes Reservoir und muss Abwärme abgeben.
hinweise:
  - Welches der beiden würde die Energieerhaltung verletzen, welches nicht?
  - Beim zweiten Typ stimmt die Energiebilanz. Was fehlt ihm, damit eine echte Wärmekraftmaschine daraus wird?
loesung: |
  **Erste Art:** Arbeit ohne Energiezufuhr, also Energie aus dem Nichts. Das widerspricht dem ersten Hauptsatz.
  ---
  **Zweite Art:** Wärme aus einem einzigen Reservoir vollständig in Arbeit. Die Energie bleibt erhalten, aber das widerspricht dem zweiten Hauptsatz.
  ---
  **Der Unterschied in einem Satz:** Die erste Art scheitert an der Energiemenge, die zweite an der Richtung der Umwandlung. Einer echten Maschine fehlt beim zweiten Typ das kalte Reservoir.
```

### Das Gedankenexperiment: Warum beide Formulierungen dasselbe sagen

Diese Stelle ist für viele ungewohnt. Lies sie zweimal. Das Ziel: Wir zeigen, dass jede Maschine, die gegen
Kelvin-Planck verstößt, auch einen Verstoß gegen Clausius ermöglichen würde.

:::beispiel[Das Gedankenexperiment mit Zahlen]
1. **Annahme:** Es gäbe eine Maschine X, die $300\,\text{J}$ Wärme aus einem heißen Reservoir nimmt und
   vollständig in $300\,\text{J}$ Arbeit umwandelt. Das wäre ein Verstoß gegen Kelvin-Planck.
2. **Kopplung:** Mit diesen $300\,\text{J}$ Arbeit treiben wir einen gewöhnlichen Kühlschrank mit Leistungszahl
   $2$ an. Er entzieht dem kalten Reservoir $600\,\text{J}$ und gibt $600\,\text{J} + 300\,\text{J} = 900\,\text{J}$
   an das heiße Reservoir ab.
3. **Bilanz beider Maschinen zusammen:** Das heiße Reservoir verliert $300\,\text{J}$ an X und bekommt
   $900\,\text{J}$ vom Kühlschrank, netto $+600\,\text{J}$. Das kalte Reservoir verliert $600\,\text{J}$. Von
   außen wird keine Arbeit zugeführt.
4. **Folgerung:** Die beiden Maschinen zusammen schaffen $600\,\text{J}$ Wärme ohne jeden Aufwand vom Kalten
   zum Warmen. Das verbietet Clausius.
:::

Was haben wir gezeigt? Gäbe es ein Perpetuum mobile zweiter Art, gäbe es auch einen Wärmefluss von selbst
vom Kalten zum Warmen. Mit derselben Kopplungsidee beweist man umgekehrt, dass aus einem Verstoß gegen
Clausius einer gegen Kelvin-Planck folgt. Und man beweist damit auch, dass keine Maschine besser sein kann
als die Carnot-Maschine.

```plot
x: [0, 12]
y: [0, 8]
gleich: true
hoehe: 300
strecken:
  - { von: [1, 7], nach: [11, 7], farbe: 1 }
  - { von: [1, 1], nach: [11, 1], farbe: 0 }
  - { von: [2, 3.3], nach: [4, 3.3], farbe: 3 }
  - { von: [4, 3.3], nach: [4, 4.7], farbe: 3 }
  - { von: [4, 4.7], nach: [2, 4.7], farbe: 3 }
  - { von: [2, 4.7], nach: [2, 3.3], farbe: 3 }
  - { von: [8, 3.3], nach: [10, 3.3], farbe: 2 }
  - { von: [10, 3.3], nach: [10, 4.7], farbe: 2 }
  - { von: [10, 4.7], nach: [8, 4.7], farbe: 2 }
  - { von: [8, 4.7], nach: [8, 3.3], farbe: 2 }
vektoren:
  - { von: [3, 6.9], nach: [3, 4.8], label: "300 J", farbe: 1 }
  - { von: [4.1, 4], nach: [7.9, 4], label: "W = 300 J", farbe: 3 }
  - { von: [9, 1.1], nach: [9, 3.2], label: "600 J", farbe: 0 }
  - { von: [9, 4.8], nach: [9, 6.9], label: "900 J", farbe: 1 }
punkte:
  - { x: 6, y: 7.4, label: "heißes Reservoir" }
  - { x: 6, y: 0.6, label: "kaltes Reservoir" }
  - { x: 3, y: 4, label: "X" }
  - { x: 9, y: 4, label: "Kühlschrank" }
beschriftung: "Gedankenexperiment: Die verbotene Maschine X verwandelt 300 J Wärme vollständig in Arbeit und treibt damit einen Kühlschrank an. Zusammen bringen beide netto 600 J vom kalten ins heiße Reservoir, ohne äußere Arbeit."
```

### Reversibel und irreversibel

Ein Vorgang heißt **reversibel** (umkehrbar), wenn er rückwärts ablaufen könnte, ohne dass irgendwo eine
Veränderung zurückbleibt. Ein Vorgang, bei dem das nicht geht, heißt **irreversibel** (nicht umkehrbar).

- **Beispiele für irreversible Vorgänge:** Wärmeleitung von heiß nach kalt, Reibung, das Vermischen von Milch
  und Kaffee, Verbrennung, das Ausströmen eines Gases ins Vakuum. Alle natürlichen Vorgänge sind irreversibel.
- **Näherungsweise reversibel:** ein Pendel ohne Reibung, eine sehr langsame Ausdehnung eines Gases mit
  einem Kolben ohne Reibung, die vier Schritte des Carnot-Prozesses. Das sind Idealisierungen.

Einen Film, in dem sich Scherben zu einer Tasse zusammensetzen, erkennt jeder sofort als rückwärts
laufend. Der zweite Hauptsatz gibt der Zeit eine Richtung. Diese Richtung misst eine eigene Größe, die
**Entropie**. Sie ist das Thema von
[11.10 Entropie und der dritte Hauptsatz](/lernen/physik1/hauptsaetze-waermekraftmaschinen/entropie-und-der-dritte-hauptsatz).

```reflexion
frage: Warum ist ein reibungsfrei schwingendes Pendel (näherungsweise) reversibel, ein Pendel mit Luftreibung aber nicht? Was müsste beim Rückwärtsablauf passieren?
antwort: |
  Beim reibungsfreien Pendel wandeln sich nur Lageenergie und Bewegungsenergie ineinander um. Ein rückwärts laufender Film
  zeigt wieder eine erlaubte Schwingung, es bleibt keine Spur zurück. Mit Luftreibung wird Bewegungsenergie zu Wärme in der
  Luft. Rückwärts müssten die ungeordnet bewegten Luftmoleküle von selbst zusammenarbeiten und das Pendel anschieben, und
  die Luft würde dabei kälter. Das wäre eine vollständige Umwandlung von Wärme in Arbeit aus einem Reservoir, also
  verboten. Deshalb ist der Vorgang irreversibel.
```

:::merke[Den zweiten Hauptsatz anwenden]
1. Clausius: Wärme fließt **von selbst** nur von warm nach kalt. Mit Arbeit geht es auch umgekehrt.
2. Kelvin-Planck: Keine periodische Maschine verwandelt Wärme aus **einem** Reservoir vollständig in Arbeit.
3. Behauptung prüfen: zuerst die Energiebilanz (erster Hauptsatz), dann $\eta \le \eta_C$ (zweiter Hauptsatz).
4. Arbeit lässt sich vollständig in Wärme umwandeln, Wärme nicht vollständig in Arbeit.
:::

### Aufgaben zum zweiten Hauptsatz

```aufgabe
id: p11-9-reversibel
titel: Reversibel oder irreversibel?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Vorgänge sind **irreversibel**, laufen also nie von selbst rückwärts ab? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Auto bremst, die Bremsscheiben werden heiß."
      - "Ein Tropfen Tinte verteilt sich in einem Glas Wasser."
      - "Ein Satellit umkreist die Erde auf einer Bahn ohne Luftreibung."
      - "Ein heißer Stein kühlt im kalten Bach ab."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: Der Satellit ohne Reibung ist eine reine Bewegung. Rückwärts abgespielt wäre es wieder eine erlaubte Umlaufbahn. Dieser Vorgang ist reversibel.
      - wert: [0, 3]
        meldung: Auch die Tinte gehört dazu. Sie entmischt sich nie von selbst wieder zu einem Tropfen.
      - wert: [1, 3]
        meldung: Auch das Bremsen gehört dazu. Die heißen Bremsscheiben schieben das Auto nie von selbst wieder an.
hinweise:
  - Stell dir den Film rückwärts vor. Würde jemand sofort merken, dass er rückwärts läuft?
loesung: |
  **Irreversibel:** Bremsen (Reibung wandelt Bewegungsenergie in Wärme um), Tinte (Vermischen), Stein im Bach (Wärmeleitung von warm nach kalt). Rückwärts sähe man sofort, dass etwas nicht stimmt.
  ---
  **Reversibel:** Der Satellit ohne Reibung. Rückwärts ist es eine Umlaufbahn in Gegenrichtung, ebenfalls erlaubt.
```

```aufgabe
id: p11-9-behauptung
titel: Eine Maschine auf dem Prüfstand
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Erfinder behauptet: Seine Maschine nimmt bei $480\,\text{K}$ pro Umlauf $2000\,\text{J}$ Wärme auf, gibt $800\,\text{J}$ Arbeit ab und $1200\,\text{J}$ Wärme an die Umgebung mit $300\,\text{K}$.

  a) Wie viel Arbeit pro Umlauf ist nach dem zweiten Hauptsatz höchstens möglich?

  b) Wie ist die Behauptung zu beurteilen?
teile:
  - typ: zahl
    label: a) größtmögliche Arbeit
    loesung: "2000*(1-300/480)"
    einheit: "J"
    anzeige: '750'
    fehler:
      - wert: "2000*300/480"
        meldung: Das ist die Wärme, die mindestens abgegeben werden muss. Die Arbeit ist der Rest, also $Q_\text{zu}\cdot(1 - T_k/T_h)$.
      - wert: "2000"
        meldung: Nach dem ersten Hauptsatz wären höchstens $2000\,\text{J}$ möglich. Der zweite Hauptsatz verlangt aber Abwärme, also weniger.
  - typ: auswahl
    label: b) Urteil
    optionen:
      - "Unmöglich: Die Energiebilanz stimmt, aber der Wirkungsgrad liegt über der Carnot-Grenze."
      - "Unmöglich: Die Energiebilanz geht nicht auf."
      - "Möglich: Die Energie bleibt erhalten, und Abwärme wird abgegeben."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Rechne nach, $800\,\text{J} + 1200\,\text{J} = 2000\,\text{J}$. Der erste Hauptsatz ist erfüllt. Das Problem liegt woanders.
      - wert: 2
        meldung: Dass überhaupt Abwärme abgegeben wird, reicht nicht. Sie muss mindestens $T_k/T_h$ der zugeführten Wärme betragen.
hinweise:
  - 'Berechne den Carnot-Wirkungsgrad $\eta_C = 1 - T_k/T_h$ und daraus die größte mögliche Arbeit.'
  - 'Vergleiche mit der behaupteten Arbeit. Prüfe außerdem die Energiebilanz: $Q_\text{zu} = W + |Q_\text{ab}|$?'
gefuehrt:
  - text: Prüfe zuerst den ersten Hauptsatz. Wie viel Energie verlässt die Maschine pro Umlauf insgesamt, in Joule?
    teil: { typ: zahl, loesung: "800+1200" }
    erklaerung: $800\,\text{J} + 1200\,\text{J} = 2000\,\text{J}$, genau so viel wie zugeführt. Der erste Hauptsatz ist erfüllt.
  - text: Wie groß ist der Carnot-Wirkungsgrad in Prozent?
    teil: { typ: zahl, loesung: "(1-300/480)*100" }
    erklaerung: $\eta_C = 1 - 300/480 = 37{,}5\,\%$.
  - text: Wie viel Arbeit wäre damit höchstens möglich?
    teil: { typ: zahl, loesung: "2000*0.375" }
    erklaerung: $0{,}375\cdot 2000\,\text{J} = 750\,\text{J}$.
  - text: Vergleiche mit der Behauptung und formuliere ein Urteil.
    erklaerung: Behauptet werden $800\,\text{J}$, also $40\,\%$. Das liegt über der Grenze von $37{,}5\,\%$. Die Maschine verstößt gegen den zweiten Hauptsatz.
loesung: |
  **Erster Hauptsatz:** $800\,\text{J} + 1200\,\text{J} = 2000\,\text{J}$. Die Energiebilanz stimmt.
  ---
  **Zweiter Hauptsatz:** $\eta_C = 1 - 300/480 = 37{,}5\,\%$, also $W_\text{max} = 0{,}375\cdot 2000\,\text{J} = 750\,\text{J}$.
  ---
  **Urteil:** Behauptet werden $800\,\text{J}$, das sind $40\,\%$. Die Maschine müsste mindestens $1250\,\text{J}$ Abwärme abgeben, nicht nur $1200\,\text{J}$. Die Behauptung ist unmöglich.
```

```aufgabe
id: p11-9-meer
titel: Warum fährt kein Schiff mit Meereswärme?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Das Meer enthält eine riesige Menge innerer Energie. Warum kann ein Schiff diese Energie nicht einfach nutzen, indem es Wasser ansaugt, ihm Wärme entzieht und damit seine Schraube antreibt?
teile:
  - typ: auswahl
    optionen:
      - "Weil eine Maschine dafür ein kälteres Reservoir bräuchte. Wärme aus einem einzigen Reservoir lässt sich nicht vollständig in Arbeit umwandeln."
      - "Weil das Meer zu wenig Energie enthält."
      - "Weil das die Energieerhaltung verletzen würde."
      - "Weil Wasser Wärme zu schlecht leitet."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Meer enthält mehr Energie, als die Menschheit je brauchen wird. Die Menge ist nicht das Problem, sondern die fehlende Temperaturdifferenz.
      - wert: 2
        meldung: Die Energie bliebe erhalten, das Wasser würde genau um die gewonnene Arbeit kälter. Das ist erlaubt nach dem ersten Hauptsatz. Verboten ist es nach dem zweiten.
      - wert: 3
        meldung: Mit besseren Wärmetauschern ließe sich das Problem sonst lösen. Es ist aber grundsätzlich und hat mit der Wärmeleitung nichts zu tun.
hinweise:
  - Welcher Hauptsatz verbietet ein Perpetuum mobile zweiter Art?
  - Was bräuchte eine Wärmekraftmaschine außer dem warmen Meer noch?
loesung: |
  **Ansatz:** Die Energiebilanz wäre in Ordnung: Das Wasser kühlt um so viel ab, wie Arbeit gewonnen wird. Der erste Hauptsatz ist erfüllt.
  ---
  **Problem:** Eine Wärmekraftmaschine braucht ein kälteres Reservoir, an das sie Abwärme abgibt. Das Schiff hat nur das Meer, also gilt $T_k = T_h$ und $\eta_C = 0$.
  ---
  **Antwort:** Das Schiff wäre ein Perpetuum mobile zweiter Art und verstößt gegen den zweiten Hauptsatz. Mit einem kälteren Reservoir, etwa kaltem Tiefenwasser, ginge es dagegen. Solche Meereswärmekraftwerke gibt es tatsächlich, mit kleinem Wirkungsgrad.
```

```aufgabe
id: p11-9-gedankenexperiment
titel: "Gedankenexperiment: Zwei Maschinen gekoppelt"
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Angenommen, es gäbe eine Maschine X, die pro Umlauf $400\,\text{J}$ Wärme aus einem heißen Reservoir aufnimmt und vollständig in Arbeit umwandelt. Mit dieser Arbeit treibt man einen Kühlschrank mit der Leistungszahl $3$ an, der zwischen demselben heißen und einem kalten Reservoir arbeitet.

  a) Wie viel Wärme bekommt das heiße Reservoir pro Umlauf netto?

  b) Erkläre, warum damit gezeigt ist, dass aus einem Verstoß gegen Kelvin-Planck ein Verstoß gegen Clausius folgt.
teile:
  - typ: zahl
    label: a) Netto-Wärme an das heiße Reservoir
    loesung: "400*3+400-400"
    einheit: "J"
    anzeige: '1200'
  - typ: text
    label: b) Begründung
    muster: |
      Der Kühlschrank entzieht dem kalten Reservoir $3\cdot 400\,\text{J} = 1200\,\text{J}$ und gibt
      $1200\,\text{J} + 400\,\text{J} = 1600\,\text{J}$ an das heiße ab. Die Maschine X entnimmt dem heißen Reservoir
      $400\,\text{J}$. Netto bekommt das heiße Reservoir $1200\,\text{J}$, das kalte verliert $1200\,\text{J}$, und von
      außen wird keine Arbeit zugeführt. Beide Maschinen zusammen bringen also Wärme von selbst vom Kalten zum Warmen.
      Das verbietet Clausius. Weil Clausius gilt, kann es die Maschine X nicht geben.
hinweise:
  - 'Was entnimmt der Kühlschrank dem kalten Reservoir? Nutze $\varepsilon_\text{K} = Q_k/W$ mit $W = 400\,\text{J}$.'
  - 'Bilanz für das heiße Reservoir: Es gibt $400\,\text{J}$ an X ab und bekommt $Q_h = Q_k + W$ vom Kühlschrank.'
loesung: |
  **Maschine X:** Sie nimmt $400\,\text{J}$ aus dem heißen Reservoir und liefert $W = 400\,\text{J}$ Arbeit.
  ---
  **Kühlschrank:** $Q_k = \varepsilon_\text{K}\cdot W = 3\cdot 400\,\text{J} = 1200\,\text{J}$ aus dem kalten Reservoir. An das heiße Reservoir gibt er $Q_h = 1200\,\text{J} + 400\,\text{J} = 1600\,\text{J}$ ab.
  ---
  **a) Bilanz:** Das heiße Reservoir bekommt netto $1600\,\text{J} - 400\,\text{J} = 1200\,\text{J}$. Das kalte verliert $1200\,\text{J}$. Die Energie stimmt.
  ---
  **b) Folgerung:** Die Kombination braucht keine Arbeit von außen und bringt trotzdem Wärme vom Kalten zum Warmen. Das ist ein Verstoß gegen Clausius. Also würde jeder Verstoß gegen Kelvin-Planck auch Clausius verletzen. Weil Clausius gilt, gibt es keine Maschine X.
```

## Entropie und der dritte Hauptsatz

```aufgabe
id: p11-10-check
art: check
titel: "Vorwissen: Schmelzwärme"
niveau: 1
angabe: |
  Wie viel Wärme braucht man, um $0{,}20\,\text{kg}$ Eis von $0\,^\circ\text{C}$ vollständig zu schmelzen? Die Schmelzwärme von Eis ist $334\,\text{kJ/kg}$. Gib das Ergebnis in kJ an.
teile:
  - typ: zahl
    loesung: "0.2*334"
    einheit: "kJ"
    anzeige: '66{,}8'
    fehler:
      - wert: "334/0.2"
        meldung: Du hast geteilt. Die Schmelzwärme gilt pro Kilogramm, für $0{,}20\,\text{kg}$ braucht man ein Fünftel davon.
      - wert: "0"
        meldung: Die Temperatur bleibt beim Schmelzen zwar bei $0\,^\circ\text{C}$, aber man muss trotzdem Wärme zuführen. Sie löst die Bindungen im Eisgitter.
hinweise:
  - 'Beim Schmelzen gilt $Q = m\cdot q_s$ mit der Schmelzwärme $q_s$.'
loesung: |
  Beim Schmelzen bleibt die Temperatur gleich, die Wärme löst die Bindungen: $Q = m\cdot q_s$.
  ---
  $Q = 0{,}20\,\text{kg}\cdot 334\,\text{kJ/kg} = 66{,}8\,\text{kJ}$. Wiederholen: [10.6 Phasenübergänge und latente Wärme](/lernen/physik1/temperatur-waerme-gase/phasenuebergaenge-und-latente-waerme).
```

**Worum geht es?** Der zweite Hauptsatz sagt, in welche Richtung Vorgänge ablaufen. Rudolf Clausius hat
dafür 1865 eine eigene Größe erfunden, die **Entropie**. Sie wächst bei jedem natürlichen Vorgang. In
diesem Abschnitt lernst du, wie man Entropieänderungen berechnet und was Entropie anschaulich bedeutet.
Zum Schluss kommt der dritte Hauptsatz, der vom absoluten Nullpunkt handelt.

### Entropie als Zahl: ΔS = Q/T

Das Wort **Entropie** ist griechisch und heißt etwa „Umwandlung“. Ein erstes Bild: Die Entropie misst, wie
stark Energie in einem Körper „verteilt“ oder „zerstreut“ ist. Je mehr Möglichkeiten die Teilchen haben,
die Energie untereinander aufzuteilen, desto größer die Entropie.

:::definition[Entropieänderung bei konstanter Temperatur]
Nimmt ein Körper bei der konstanten absoluten Temperatur $T$ auf umkehrbarem Weg die Wärme $Q$ auf, so steigt
seine **Entropie** $S$ um
$$\Delta S = \frac{Q}{T}, \qquad [S] = \text{J/K}.$$
Dabei ist $Q$ die zugeführte Wärme (bei Abgabe negativ) und $T$ die Temperatur in Kelvin. Die Entropie ist
eine **Zustandsgröße** wie die innere Energie.

**Beispiel:** Schmelzendes Eis nimmt bei $273{,}15\,\text{K}$ Wärme auf, seine Entropie steigt.

**Kein Beispiel:** Beim Erwärmen von Wasser von $20$ auf $80\,^\circ\text{C}$ ist die Temperatur nicht konstant.
Dann darf man nicht einfach $Q/T$ rechnen, man müsste über viele kleine Schritte summieren.
:::

Warum steht $T$ im Nenner? Dieselbe Wärme verändert einen kalten Körper „mehr“ als einen heißen. In einem
kalten Körper sind die Teilchen fast in Ruhe, zusätzliche Energie schafft viele neue Möglichkeiten. In
einem heißen Körper wimmelt es schon, dieselbe Energie fällt kaum ins Gewicht.

:::beispiel[Entropie beim Schmelzen von Eis]
$0{,}50\,\text{kg}$ Eis schmelzen bei $0\,^\circ\text{C}$. Um wie viel steigt seine Entropie?

**Schritt 1, Wärme:** $Q = m\,q_s = 0{,}50\,\text{kg}\cdot 334\,000\,\text{J/kg} = 167\,000\,\text{J}$.

**Schritt 2, Temperatur in Kelvin:** Beim Schmelzen bleibt $T = 273{,}15\,\text{K}$ konstant.

**Schritt 3, einsetzen:** $\Delta S = \dfrac{167\,000\,\text{J}}{273{,}15\,\text{K}} = 611\,\text{J/K}$.

**Deutung:** Im flüssigen Wasser können sich die Moleküle frei gegeneinander bewegen. Es gibt viel mehr
Anordnungen als im starren Eisgitter. Die Entropie ist größer.
:::

:::achtung[Fehler: Temperatur in Grad Celsius]
Für das schmelzende Eis rechnet ein Schüler: „$\Delta S = 167\,000\,\text{J}/0\,^\circ\text{C}$.“ Der
Taschenrechner meldet einen Fehler, weil man nicht durch null teilen kann.

Die Formel braucht die absolute Temperatur. $0\,^\circ\text{C}$ sind $273{,}15\,\text{K}$, und
$\Delta S = 167\,000\,\text{J}/273{,}15\,\text{K} = 611\,\text{J/K}$. Bei Entropie, Carnot und Gasgesetzen gilt
immer: Steht eine Temperatur allein oder im Nenner, dann in Kelvin.
:::

### Der zweite Hauptsatz in der Sprache der Entropie

Jetzt sehen wir, warum Wärme nur von warm nach kalt fließt. Fließt die Wärme $Q$ von einem heißen Körper
mit $T_h$ zu einem kalten mit $T_k$, ändern sich die Entropien so:

- Der heiße Körper verliert die Entropie $Q/T_h$.
- Der kalte Körper gewinnt die Entropie $Q/T_k$.

Weil $T_k < T_h$ ist, ist $Q/T_k$ größer als $Q/T_h$. Der Gewinn ist größer als der Verlust, die
Gesamtentropie steigt. Flösse die Wärme umgekehrt, würde die Gesamtentropie sinken.

:::beispiel[Wärmeleitung erzeugt Entropie]
$600\,\text{J}$ Wärme fließen von einem Körper mit $500\,\text{K}$ zu einem Körper mit $300\,\text{K}$. Beide
Körper sind so groß, dass sich ihre Temperaturen dabei kaum ändern.

**Schritt 1, heißer Körper:** $\Delta S_h = -\dfrac{600\,\text{J}}{500\,\text{K}} = -1{,}20\,\text{J/K}$.

**Schritt 2, kalter Körper:** $\Delta S_k = +\dfrac{600\,\text{J}}{300\,\text{K}} = +2{,}00\,\text{J/K}$.

**Schritt 3, Summe:** $\Delta S_\text{ges} = -1{,}20\,\text{J/K} + 2{,}00\,\text{J/K} = +0{,}80\,\text{J/K}$.

**Antwort:** Die Gesamtentropie steigt um $0{,}80\,\text{J/K}$. Genau das verlangt der zweite Hauptsatz für
einen irreversiblen Vorgang. In umgekehrter Richtung wäre $\Delta S_\text{ges} = -0{,}80\,\text{J/K}$, und das ist verboten.
:::

:::merke[Zweiter Hauptsatz mit Entropie]
In einem **abgeschlossenen** System, also ohne Austausch mit der Umgebung, nimmt die Entropie nie ab:
$\Delta S \ge 0$. Bei reversiblen Vorgängen bleibt sie gleich, bei irreversiblen wächst sie.
:::

Bei der isothermen Ausdehnung eines idealen Gases nimmt das Gas die Wärme $Q = nRT\ln(V_2/V_1)$ auf (siehe
[11.3 Isochor, isobar, isotherm](/lernen/physik1/hauptsaetze-waermekraftmaschinen/isochor-isobar-isotherm-drei-zustandsaenderungen)).
Seine Entropie steigt also um
$$\Delta S = \frac{Q}{T} = nR\ln\frac{V_2}{V_1}.$$
Die Temperatur kürzt sich heraus. Für $1\,\text{mol}$, das sein Volumen verdoppelt, ergibt das
$8{,}314\,\text{J/(mol K)}\cdot 1\,\text{mol}\cdot\ln 2 = 5{,}76\,\text{J/K}$. Mehr Volumen bedeutet mehr
Platz für die Teilchen und damit mehr Entropie.

```aufgabe
id: p11-10-isotherm-entropie
titel: Entropie bei isothermer Ausdehnung
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  $0{,}50\,\text{mol}$ eines idealen Gases dehnen sich bei $350\,\text{K}$ langsam und isotherm von $3{,}0\,\text{L}$ auf $9{,}0\,\text{L}$ aus.

  a) Um wie viel steigt die Entropie des Gases?

  b) Wie viel Wärme nimmt das Gas dabei auf?
teile:
  - typ: zahl
    label: a) ΔS
    loesung: "0.5*8.314*ln(3)"
    einheit: "J/K"
    anzeige: '4{,}57'
    fehler:
      - wert: "0.5*8.314*log(3, 10)"
        meldung: Du hast den Zehnerlogarithmus verwendet. In $nR\ln(V_2/V_1)$ steht der natürliche Logarithmus.
      - wert: "0.5*8.314*350*ln(3)"
        meldung: Das ist die Wärme $Q$, nicht die Entropieänderung. Teile noch durch die Temperatur.
  - typ: zahl
    label: b) Q
    loesung: "350*0.5*8.314*ln(3)"
    einheit: "J"
    anzeige: '1598'
    fehler:
      - wert: "0"
        meldung: Isotherm heißt nicht ohne Wärme. Das Gas verrichtet Arbeit und braucht dafür genau so viel Wärme.
hinweise:
  - 'Isotherm ist $Q = nRT\ln(V_2/V_1)$, und weil $T$ konstant ist, gilt $\Delta S = Q/T$.'
  - 'Daraus folgt $\Delta S = nR\ln(V_2/V_1)$. Die Temperatur kürzt sich.'
gefuehrt:
  - text: Wie groß ist das Volumenverhältnis?
    teil: { typ: zahl, loesung: "3" }
    erklaerung: $9{,}0\,\text{L}/3{,}0\,\text{L} = 3$.
  - text: Berechne $nR\ln(V_2/V_1)$ in J/K.
    teil: { typ: zahl, loesung: "0.5*8.314*ln(3)" }
    erklaerung: $0{,}50\cdot 8{,}314\cdot\ln 3\,\text{J/K} = 4{,}157\cdot 1{,}0986\,\text{J/K} = 4{,}57\,\text{J/K}$.
  - text: Wie viel Wärme gehört dazu? Multipliziere mit der Temperatur.
    teil: { typ: zahl, loesung: "350*0.5*8.314*ln(3)" }
    erklaerung: $Q = T\,\Delta S = 350\,\text{K}\cdot 4{,}57\,\text{J/K} = 1598\,\text{J}$.
loesung: |
  **Ansatz:** Bei konstanter Temperatur gilt $\Delta S = Q/T$. Isotherm ist $Q = nRT\ln(V_2/V_1)$, also $\Delta S = nR\ln(V_2/V_1)$.
  ---
  **a)** $\Delta S = 0{,}50\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot\ln 3 = 4{,}57\,\text{J/K}$.
  ---
  **b)** $Q = T\,\Delta S = 350\,\text{K}\cdot 4{,}57\,\text{J/K} = 1598\,\text{J}$. Probe: $nRT\ln 3 = 0{,}50\cdot 8{,}314\cdot 350\cdot 1{,}0986\,\text{J} = 1598\,\text{J}$.
```

:::achtung[Fehler: „Die Entropie darf nirgends abnehmen“]
Ein Kühlschrank entzieht dem Innenraum bei $270\,\text{K}$ die Wärme $1000\,\text{J}$. Eine Schülerin sagt:
„Die Entropie im Innenraum sinkt um $1000/270 = 3{,}70\,\text{J/K}$. Das verbietet der zweite Hauptsatz.“

Der zweite Hauptsatz gilt für das **abgeschlossene** Gesamtsystem. Der Kühlschrank gibt hinten
$1300\,\text{J}$ (Wärme plus $300\,\text{J}$ Arbeit) an die Küche mit $300\,\text{K}$ ab. Dort steigt die Entropie um
$1300/300 = 4{,}33\,\text{J/K}$. Insgesamt: $-3{,}70 + 4{,}33 = +0{,}63\,\text{J/K}$. Örtlich darf die Entropie
sinken, wenn sie anderswo stärker steigt. So entstehen auch Kristalle und Lebewesen.
:::

```aufgabe
id: p11-10-kuehlschrank-entropie
titel: Entropiebilanz eines Kühlschranks
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Kühlschrank entzieht dem Innenraum bei $260\,\text{K}$ die Wärme $600\,\text{J}$ und gibt $900\,\text{J}$ an die Küche mit $295\,\text{K}$ ab. Wie ändert sich die Gesamtentropie von Innenraum und Küche?
teile:
  - typ: zahl
    loesung: "900/295-600/260"
    einheit: "J/K"
    anzeige: '0{,}743'
    fehler:
      - wert: "600/295-600/260"
        meldung: An die Küche gehen nicht nur die $600\,\text{J}$ aus dem Innenraum, sondern auch die $300\,\text{J}$ Arbeit des Kompressors, zusammen $900\,\text{J}$.
      - wert: "600/260-900/295"
        meldung: Die Vorzeichen sind vertauscht. Der Innenraum verliert Wärme, seine Entropie sinkt. Die Küche bekommt Wärme, ihre Entropie steigt.
hinweise:
  - Der Innenraum gibt Wärme ab, also ist sein $\Delta S$ negativ. Die Küche nimmt Wärme auf, ihr $\Delta S$ ist positiv.
  - '$\Delta S_\text{ges} = +\dfrac{900\,\text{J}}{295\,\text{K}} - \dfrac{600\,\text{J}}{260\,\text{K}}$.'
loesung: |
  **Innenraum:** $\Delta S_k = -\dfrac{600\,\text{J}}{260\,\text{K}} = -2{,}308\,\text{J/K}$.
  ---
  **Küche:** $\Delta S_h = +\dfrac{900\,\text{J}}{295\,\text{K}} = +3{,}051\,\text{J/K}$.
  ---
  **Summe:** $\Delta S_\text{ges} = +0{,}743\,\text{J/K} > 0$. Die Entropie im Innenraum sinkt, aber insgesamt steigt sie. Der Kühlschrank erfüllt den zweiten Hauptsatz, und zwar nur dank der zusätzlichen Arbeit.
```

### Entropie als Zahl der Möglichkeiten

Ludwig Boltzmann, Professor in Wien, fand die anschauliche Bedeutung der Entropie. Ein Gas mit vielen
Teilchen kann sich in einem bestimmten **Makrozustand** befinden, zum Beispiel „alle Teilchen in der linken
Hälfte“. Ein Makrozustand ist das, was man von außen misst. Jeder Makrozustand lässt sich durch viele
**Mikrozustände** verwirklichen, also durch viele genaue Anordnungen der einzelnen Teilchen. Boltzmann zeigte:
$$S = k_B\ln\Omega.$$
Dabei ist $\Omega$ (griechisch „Omega“) die Zahl der Mikrozustände und $k_B = 1{,}381\cdot 10^{-23}\,\text{J/K}$
die Boltzmann-Konstante. Diese Formel steht auf seinem Grab am Wiener Zentralfriedhof.

Ein kleines Beispiel macht die Idee greifbar. Vier unterscheidbare Teilchen A, B, C, D verteilen sich auf
die linke und rechte Hälfte eines Kastens. Jedes ist mit Wahrscheinlichkeit $\tfrac12$ links. Es gibt
$2^4 = 16$ gleich wahrscheinliche Anordnungen. Der Zustand „alle vier links“ hat nur eine Anordnung. Der
Zustand „zwei links, zwei rechts“ hat dagegen $\binom42 = 6$ Anordnungen: AB, AC, AD, BC, BD und CD links.

```plot
x: [-0.5, 4.5]
y: [0, 7]
hoehe: 260
achsen: { x: "Zahl der Teilchen links", y: "Anzahl der Anordnungen Ω" }
balken:
  - { x: 0, y: 1 }
  - { x: 1, y: 4 }
  - { x: 2, y: 6 }
  - { x: 3, y: 4 }
  - { x: 4, y: 1 }
beschriftung: "Vier Teilchen in zwei Hälften: Die gleichmäßige Verteilung (2 links, 2 rechts) lässt sich auf 6 Arten verwirklichen, alle links nur auf eine Art. Bei sehr vielen Teilchen wird der Unterschied unvorstellbar groß."
```

Bei vier Teilchen findet man sie noch in einem von 16 Fällen alle links. Bei $100$ Teilchen ist die
Wahrscheinlichkeit dafür $2^{-100} \approx 8\cdot 10^{-31}$. Bei den rund $2{,}5\cdot 10^{22}$ Teilchen in einem Liter Luft ist sie
so klein, dass es im ganzen Alter des Universums nie passiert. Der zweite Hauptsatz ist also ein Gesetz der
**Wahrscheinlichkeit**: Entropieabnahme ist nicht streng unmöglich, aber unvorstellbar unwahrscheinlich. Das
Abzählen mit Binomialkoeffizienten kennst du aus dem Mathematikkurs in
[16.4 Zählen ohne Reihenfolge: Kombinationen und Binomialkoeffizient](/lernen/mathe3/wahrscheinlichkeit/zaehlen-ohne-reihenfolge-kombinationen-und-binomialkoeffizient).

:::intuition
Gießt man Milch in den Kaffee, gibt es unvorstellbar viel mehr Anordnungen der Moleküle, in denen die Milch
gleichmäßig verteilt ist, als solche, in denen sie als Klecks beisammenbleibt. Deshalb vermischt sie sich,
und deshalb entmischt sie sich nie von selbst. In der Informatik begegnet dir derselbe Gedanke als
**Informationsentropie** nach Claude Shannon. Sie misst, wie viele Ja-Nein-Fragen man im Mittel braucht, um
einen Zustand zu erraten.
:::

```aufgabe
id: p11-10-mikrozustaende
titel: Teilchen im Kasten abzählen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Vier unterscheidbare Gasteilchen bewegen sich zufällig in einem Kasten mit zwei gleich großen Hälften. Jedes Teilchen ist mit Wahrscheinlichkeit $\tfrac12$ links.

  a) Auf wie viele Arten können genau **zwei** Teilchen links und zwei rechts sein?

  b) Wie groß ist die Wahrscheinlichkeit, dass alle vier links sind?
teile:
  - typ: zahl
    label: a) Anordnungen
    loesung: "binom(4,2)"
    fehler:
      - wert: "2"
        meldung: Es kommt darauf an, **welche** zwei Teilchen links sind. Zähle alle Paare auf, nämlich AB, AC, AD, BC, BD und CD.
      - wert: "4"
        meldung: Vier ist die Zahl der Anordnungen mit genau **einem** Teilchen links. Für zwei Teilchen gibt es mehr Möglichkeiten.
  - typ: zahl
    label: b) Wahrscheinlichkeit alle links
    loesung: "0.5^4"
    anzeige: '0{,}0625'
    fehler:
      - wert: "1/4"
        meldung: Du hast durch die Zahl der Teilchen geteilt. Es gibt aber $2^4 = 16$ gleich wahrscheinliche Anordnungen, und nur eine hat alle links.
      - wert: "0.5"
        meldung: $\tfrac12$ gilt für ein einzelnes Teilchen. Für vier unabhängige Teilchen muss man die Wahrscheinlichkeiten multiplizieren.
hinweise:
  - Für a) zähle die Paare, die links sein können, oder nutze den Binomialkoeffizienten $\binom42$.
  - 'Für b) gilt die Produktregel: $\tfrac12\cdot\tfrac12\cdot\tfrac12\cdot\tfrac12$.'
loesung: |
  **a)** Wir wählen aus vier Teilchen die zwei aus, die links sind: $\binom42 = \dfrac{4\cdot 3}{2\cdot 1} = 6$. Ausgeschrieben: AB, AC, AD, BC, BD, CD.
  ---
  **b)** Jedes Teilchen ist unabhängig mit $\tfrac12$ links: $\left(\tfrac12\right)^4 = \tfrac{1}{16} = 0{,}0625$.
  ---
  **Deutung:** Die gleichmäßige Verteilung ist sechsmal so wahrscheinlich wie „alle links“. Bei $10^{23}$ Teilchen wird dieses Verhältnis unvorstellbar groß. Deshalb füllt ein Gas immer den ganzen Raum aus.
```

### Der dritte Hauptsatz

Kann man einen Körper bis auf den absoluten Nullpunkt abkühlen? Walther Nernst fand 1906 die Antwort.

:::satz[Dritter Hauptsatz (Nernstsches Wärmetheorem)]
Der absolute Nullpunkt $T = 0\,\text{K}$ ist durch keinen Prozess in endlich vielen Schritten erreichbar. Die
Entropie eines perfekten Kristalls strebt bei $T \to 0$ gegen null.

**Beispiel:** Physiker kühlen Atomwolken heute auf weniger als ein Milliardstel Kelvin, aber nie auf genau null.

**Gegenbeispiel:** Ein Gefrierfach, das „so lange kühlt, bis es $0\,\text{K}$ erreicht“, gibt es nicht. Je kälter
es innen wird, desto mehr Arbeit braucht jedes weitere Joule, das man entzieht.
:::

Warum wird es immer schwieriger? Die ideale Leistungszahl eines Kühlschranks ist $T_k/(T_h - T_k)$ (siehe
[11.8 Kühlschrank und Wärmepumpe](/lernen/physik1/hauptsaetze-waermekraftmaschinen/kuehlschrank-und-waermepumpe)).
Für $T_k \to 0$ geht sie gegen null. Um bei sehr tiefer Temperatur noch Wärme zu entziehen, braucht man
also immer mehr Arbeit pro Joule. In der Prüfung genügt die qualitative Aussage.

Zusammen mit dem **nullten Hauptsatz** ergibt sich das vollständige Bild. Der nullte Hauptsatz sagt: Sind
zwei Körper jeweils mit einem dritten im thermischen Gleichgewicht, dann auch miteinander. Erst er macht
die Temperatur messbar, denn das Thermometer ist der dritte Körper.

:::merke[Die vier Hauptsätze in je einem Satz]
- **0.** Körper im thermischen Gleichgewicht haben dieselbe Temperatur. Damit wird Temperatur messbar.
- **1.** Energie bleibt erhalten, $\Delta U = Q + W$. Kein Perpetuum mobile erster Art.
- **2.** Wärme fließt von selbst nur von warm nach kalt, die Entropie nimmt nicht ab. Kein Perpetuum mobile zweiter Art.
- **3.** Der absolute Nullpunkt ist unerreichbar.
:::

```reflexion
frage: Eine Pflanze baut aus Kohlendioxid und Wasser geordnete Zuckermoleküle und Zellen auf. Ihre Entropie sinkt dabei. Warum widerspricht das nicht dem zweiten Hauptsatz?
antwort: |
  Die Pflanze ist kein abgeschlossenes System. Sie nimmt Sonnenlicht auf, das von einem sehr heißen Körper (der Sonne,
  etwa $5800\,\text{K}$) kommt, und gibt Wärme bei Umgebungstemperatur ab. Wärme, die bei tiefer Temperatur abgegeben wird,
  trägt viel Entropie in die Umgebung, nämlich $Q/T$ mit kleinem $T$. Die Entropie der Umgebung steigt dabei stärker, als
  die der Pflanze sinkt. Insgesamt wächst die Entropie, wie es der zweite Hauptsatz verlangt.
```

### Aufgaben zu Entropie und drittem Hauptsatz

```aufgabe
id: p11-dritter
titel: Was sagt der dritte Hauptsatz?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Welche Aussage ist der dritte Hauptsatz der Wärmelehre?
teile:
  - typ: auswahl
    optionen:
      - "Bei 0 K hat ein ideales Gas den Druck null."
      - "Der absolute Nullpunkt ist in endlich vielen Schritten nicht erreichbar."
      - "Die innere Energie ist bei 0 °C null."
      - "Wärme fließt von selbst immer von warm nach kalt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das folgt aus dem Gasgesetz, ist aber nur eine Extrapolation. Reale Gase werden vorher flüssig. Der dritte Hauptsatz handelt von der Erreichbarkeit des Nullpunkts.
      - wert: 2
        meldung: Bei $0\,^\circ\text{C}$ haben die Teilchen noch reichlich Energie. $0\,^\circ\text{C}$ sind $273{,}15\,\text{K}$, weit weg vom absoluten Nullpunkt.
      - wert: 3
        meldung: Das ist der zweite Hauptsatz in der Formulierung von Clausius.
hinweise:
  - Der dritte Hauptsatz handelt vom absoluten Nullpunkt und davon, ob man ihn erreichen kann.
loesung: |
  Der dritte Hauptsatz (Nernst): $0\,\text{K}$ ist in endlich vielen Schritten unerreichbar, und die Entropie eines perfekten Kristalls geht dort gegen null.
  ---
  „Wärme fließt von warm nach kalt“ ist der zweite Hauptsatz. Die übrigen Aussagen verwechseln Kelvin und Celsius oder beschreiben eine Extrapolation des Gasgesetzes.
```

```aufgabe
id: p11-10-vorzeichen
titel: Wasser gefriert
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  In einer Gefriertruhe gefriert Wasser bei $0\,^\circ\text{C}$ zu Eis. Was gilt für die Entropie des Wassers?
teile:
  - typ: auswahl
    optionen:
      - "Sie sinkt. Das ist erlaubt, weil die Umgebung dabei mehr Entropie bekommt."
      - "Sie steigt, weil die Entropie immer steigen muss."
      - "Sie sinkt. Das verstößt gegen den zweiten Hauptsatz."
      - "Sie bleibt gleich, weil die Temperatur gleich bleibt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Wasser gibt Wärme ab, also ist $Q < 0$ und $\Delta S = Q/T < 0$. „Immer steigen“ gilt nur für das abgeschlossene Gesamtsystem.
      - wert: 2
        meldung: Der zweite Hauptsatz gilt für das abgeschlossene Gesamtsystem. Das Wasser allein ist nicht abgeschlossen. Die Truhe gibt hinten Wärme an den Raum ab, und dort steigt die Entropie stärker.
      - wert: 3
        meldung: Gleiche Temperatur heißt nicht gleiche Entropie. Es fließt Wärme ab, und $\Delta S = Q/T$ ist nicht null.
hinweise:
  - Gibt das Wasser beim Gefrieren Wärme ab oder nimmt es welche auf? Welches Vorzeichen hat dann $Q/T$?
loesung: |
  Beim Gefrieren gibt das Wasser die Schmelzwärme ab, also $Q < 0$ und $\Delta S = Q/T < 0$. Seine Entropie sinkt, die Moleküle werden im Gitter geordnet.
  ---
  Das ist erlaubt, weil das Wasser kein abgeschlossenes System ist. Die Gefriertruhe gibt die Wärme plus ihre Arbeit an den wärmeren Raum ab, und dort wächst die Entropie stärker.
```

```aufgabe
id: p11-entropie
titel: Entropie beim Schmelzen und bei der Wärmeleitung
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  a) Um wie viel steigt die Entropie von $1{,}0\,\text{kg}$ Eis, das bei $0\,^\circ\text{C}$ schmilzt ($q_s = 334\,\text{kJ/kg}$)?

  b) $1000\,\text{J}$ Wärme fließen von einem großen Körper mit $400\,\text{K}$ zu einem großen Körper mit $300\,\text{K}$. Wie ändert sich die Gesamtentropie?

  c) Begründe mit dem Ergebnis von b), warum die Wärme nicht von selbst in die Gegenrichtung fließt.
teile:
  - typ: zahl
    label: a) ΔS beim Schmelzen
    loesung: "334000/273.15"
    einheit: "J/K"
    anzeige: '1223'
  - typ: zahl
    label: b) ΔS gesamt
    loesung: "1000/300-1000/400"
    einheit: "J/K"
    anzeige: '0{,}833'
  - typ: text
    label: c) Begründung
    muster: |
      In der Gegenrichtung würde der kalte Körper $1000/300\,\text{J/K}$ verlieren und der heiße nur $1000/400\,\text{J/K}$
      gewinnen. Die Gesamtentropie würde um $0{,}833\,\text{J/K}$ sinken. In einem abgeschlossenen System verbietet der
      zweite Hauptsatz eine Abnahme der Entropie. Deshalb fließt Wärme von selbst nur vom heißen zum kalten Körper.
hinweise:
  - 'a) Beim Schmelzen bleibt $T$ konstant, also $\Delta S = Q/T$ mit $T$ in Kelvin.'
  - 'b) Der heiße Körper verliert $Q/T_h$, der kalte gewinnt $Q/T_k$. c) Was käme bei umgekehrter Richtung heraus?'
loesung: |
  **a)** $\Delta S = \dfrac{m\,q_s}{T} = \dfrac{334\,000\,\text{J}}{273{,}15\,\text{K}} = 1223\,\text{J/K}$.
  ---
  **b)** $\Delta S = -\dfrac{1000\,\text{J}}{400\,\text{K}} + \dfrac{1000\,\text{J}}{300\,\text{K}} = -2{,}500\,\text{J/K} + 3{,}333\,\text{J/K} = +0{,}833\,\text{J/K}$.
  ---
  **c)** In Gegenrichtung kehren sich beide Vorzeichen um, $\Delta S = -0{,}833\,\text{J/K}$. Eine Abnahme der Gesamtentropie verbietet der zweite Hauptsatz. Deshalb fließt Wärme von selbst nur von heiß nach kalt.
```

## Luftfeuchtigkeit, Taupunkt, Wolken und Föhn

```aufgabe
id: p11-11-check
art: check
titel: "Vorwissen: Luftdruck in der Höhe"
niveau: 1
angabe: |
  Wie ändert sich der Luftdruck, wenn man von Wien (etwa $200\,\text{m}$) auf einen $3000\,\text{m}$ hohen Berg steigt?
teile:
  - typ: auswahl
    optionen:
      - "Er sinkt, weil über dem Berg weniger Luft liegt, die drückt."
      - "Er steigt, weil man der Sonne näher ist."
      - "Er bleibt gleich, weil die Luft überall dieselbe ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Nähe zur Sonne spielt bei ein paar Kilometern keine Rolle. Der Luftdruck entsteht durch das Gewicht der Luftsäule darüber.
      - wert: 2
        meldung: Der Luftdruck ist das Gewicht der Luft über einem Quadratmeter. Oben am Berg ist die Luftsäule kürzer, also ist der Druck kleiner.
hinweise:
  - Der Luftdruck entsteht durch das Gewicht der Luft, die über einem Ort liegt.
loesung: |
  Der Luftdruck ist das Gewicht der darüber liegenden Luftsäule pro Fläche. Oben am Berg liegt weniger Luft darüber.
  ---
  Er sinkt deshalb, in $3000\,\text{m}$ auf etwa $70\,\%$ des Werts im Tal. Wiederholen: [9.6 Luftdruck und die barometrische Höhenformel](/lernen/physik1/hydro-aeromechanik/luftdruck-und-die-barometrische-hoehenformel).
```

**Worum geht es?** Das Wetter ist angewandte Wärmelehre. Aufsteigende Luft dehnt sich aus und kühlt
adiabatisch ab. Kühlt sie weit genug ab, kondensiert ihr Wasserdampf zu Wolken. In diesem Abschnitt lernst
du, wie viel Wasser Luft tragen kann, wann sich Tau und Wolken bilden und warum der Föhn so warm ist.

### Die Atmosphäre im Überblick

Die Luft besteht zu $78\,\%$ aus Stickstoff, zu $21\,\%$ aus Sauerstoff, zu knapp $1\,\%$ aus Argon und zu
etwa $0{,}04\,\%$ aus Kohlendioxid. Dazu kommt ein schwankender Anteil Wasserdampf von $0$ bis $4\,\%$. Das
Wetter spielt sich in der untersten Schicht ab, der **Troposphäre**. Sie reicht bei uns bis etwa
$12\,\text{km}$ Höhe. Darin nimmt die Temperatur nach oben ab, im Mittel um $0{,}65\,\text{K}$ pro $100\,\text{m}$.
Darüber liegt die **Stratosphäre** mit der Ozonschicht, die ultraviolettes Licht der Sonne absorbiert.

### Wie viel Wasser trägt die Luft?

Luft kann nur eine begrenzte Menge Wasserdampf aufnehmen. Diese **Sättigungsmenge** steigt stark mit der
Temperatur. Warme Luft kann viel mehr Wasser tragen als kalte:

| Temperatur | Sättigungsmenge | typische Lage |
|---|---|---|
| $0\,^\circ\text{C}$ | $4{,}8\,\text{g/m}^3$ | Frost im Winter. |
| $5\,^\circ\text{C}$ | $6{,}8\,\text{g/m}^3$ | kühler Herbstmorgen. |
| $10\,^\circ\text{C}$ | $9{,}4\,\text{g/m}^3$ | Frühlingstag. |
| $15\,^\circ\text{C}$ | $12{,}8\,\text{g/m}^3$ | milder Tag. |
| $20\,^\circ\text{C}$ | $17{,}3\,\text{g/m}^3$ | Zimmertemperatur. |
| $25\,^\circ\text{C}$ | $23{,}0\,\text{g/m}^3$ | Sommertag. |
| $30\,^\circ\text{C}$ | $30{,}4\,\text{g/m}^3$ | Hitzetag. |

```plot
x: [0, 32]
y: [0, 32]
hoehe: 300
achsen: { x: "Temperatur in °C", y: "Sättigungsmenge in g/m³" }
strecken:
  - { von: [0, 4.8], nach: [5, 6.8], farbe: 0 }
  - { von: [5, 6.8], nach: [10, 9.4], farbe: 0 }
  - { von: [10, 9.4], nach: [15, 12.8], farbe: 0 }
  - { von: [15, 12.8], nach: [20, 17.3], farbe: 0 }
  - { von: [20, 17.3], nach: [25, 23.0], farbe: 0 }
  - { von: [25, 23.0], nach: [30, 30.4], farbe: 0 }
punkte:
  - { x: 0, y: 4.8 }
  - { x: 5, y: 6.8 }
  - { x: 10, y: 9.4 }
  - { x: 15, y: 12.8 }
  - { x: 20, y: 17.3 }
  - { x: 25, y: 23.0 }
  - { x: 30, y: 30.4 }
beschriftung: "Sättigungskurve: die größte Masse Wasserdampf, die ein Kubikmeter Luft bei einer Temperatur aufnehmen kann. Die Kurve steigt immer steiler an. Luft mit 30 °C trägt mehr als sechsmal so viel Wasser wie Luft mit 0 °C."
```

:::definition[Absolute und relative Luftfeuchtigkeit, Taupunkt]
Die **absolute Feuchte** $f$ ist die Masse Wasserdampf pro Kubikmeter Luft, in $\text{g/m}^3$. Dieses $f$ hat
nichts mit der Zahl der Freiheitsgrade $f$ aus der inneren Energie zu tun. Es ist nur derselbe Buchstabe. Die
**relative Feuchte** $\varphi$ (griechisch „phi“) vergleicht sie mit der Sättigungsmenge $f_\text{max}$ bei der
herrschenden Temperatur:
$$\varphi = \frac{f}{f_\text{max}(T)}\cdot 100\,\%.$$
Der **Taupunkt** ist die Temperatur, auf die man die Luft abkühlen muss, damit sie gesättigt ist, also
$\varphi = 100\,\%$. Kühlt sie weiter ab, kondensiert Wasser: Tau, Nebel, Wolken, beschlagene Brillen.

**Beispiel:** Luft mit $20\,^\circ\text{C}$ und $8{,}65\,\text{g/m}^3$ hat $\varphi = 8{,}65/17{,}3 = 50\,\%$.

**Kein Beispiel:** „$50\,\%$ Luftfeuchtigkeit“ heißt **nicht**, dass die Luft zur Hälfte aus Wasser besteht.
Es heißt, dass sie halb so viel Wasserdampf enthält, wie sie bei ihrer Temperatur höchstens tragen könnte.
:::

:::beispiel[Relative Feuchte und Taupunkt an einem Sommertag]
Luft mit $25\,^\circ\text{C}$ enthält $11{,}5\,\text{g}$ Wasserdampf pro Kubikmeter.

**Schritt 1, relative Feuchte:** Bei $25\,^\circ\text{C}$ ist $f_\text{max} = 23{,}0\,\text{g/m}^3$. Also
$\varphi = 11{,}5/23{,}0 = 0{,}50 = 50\,\%$.

**Schritt 2, Taupunkt suchen:** Gesucht ist die Temperatur, bei der $11{,}5\,\text{g/m}^3$ die Sättigungsmenge
ist. Der Wert liegt zwischen $9{,}4\,\text{g/m}^3$ bei $10\,^\circ\text{C}$ und $12{,}8\,\text{g/m}^3$ bei $15\,^\circ\text{C}$.

**Schritt 3, linear interpolieren:** Zwischen zwei Tabellenwerten nehmen wir eine gerade Verbindung an:
$\tau = 10\,^\circ\text{C} + 5\,\text{K}\cdot\dfrac{11{,}5 - 9{,}4}{12{,}8 - 9{,}4} = 10\,^\circ\text{C} + 3{,}1\,\text{K} = 13{,}1\,^\circ\text{C}$.

**Antwort:** Die Luft hat $50\,\%$ relative Feuchte und einen Taupunkt von etwa $13\,^\circ\text{C}$. Kühlt sie
nachts unter $13\,^\circ\text{C}$ ab, bildet sich Tau. Lineare Interpolation kennst du aus dem Mathematikkurs in
[4.3 Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
:::

```aufgabe
id: p11-relative-feuchte
titel: Relative Luftfeuchtigkeit
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Luft mit $20\,^\circ\text{C}$ enthält $10\,\text{g}$ Wasserdampf pro $\text{m}^3$. Bei $20\,^\circ\text{C}$ beträgt die Sättigungsmenge $17{,}3\,\text{g/m}^3$. Wie groß ist die relative Luftfeuchtigkeit in Prozent?
teile:
  - typ: zahl
    loesung: "10/17.3*100"
    einheit: "%"
    anzeige: '57{,}8'
    fehler:
      - wert: "17.3/10*100"
        meldung: Du hast den Bruch umgedreht. Eine relative Feuchte über $100\,\%$ gibt es nicht. Im Nenner steht die Sättigungsmenge.
      - wert: "10"
        meldung: Das ist die absolute Feuchte in $\text{g/m}^3$. Die relative Feuchte vergleicht sie mit der Sättigungsmenge.
hinweise:
  - '$\varphi = f/f_\text{max}$ mit $f_\text{max}(20\,^\circ\text{C}) = 17{,}3\,\text{g/m}^3$.'
loesung: |
  Bei $20\,^\circ\text{C}$ ist $f_\text{max} = 17{,}3\,\text{g/m}^3$.
  ---
  $\varphi = \dfrac{10\,\text{g/m}^3}{17{,}3\,\text{g/m}^3} = 0{,}578 = 57{,}8\,\%$. Die Luft trägt etwas mehr als die Hälfte dessen, was sie tragen könnte.
```

Weil die Sättigungsmenge mit der Temperatur sinkt, **steigt** die relative Feuchte beim Abkühlen, obwohl
der Wassergehalt gleich bleibt. Deshalb bildet sich nachts Tau, und deshalb beschlagen im Winter kalte
Fensterscheiben. Umgekehrt wird Winterluft sehr trocken, wenn man sie im Zimmer erwärmt.

:::achtung[Fehler: relative Feuchte beim Erwärmen gleich gelassen]
Draußen hat die Luft $0\,^\circ\text{C}$ und $80\,\%$ relative Feuchte. Sie wird ins Zimmer gelüftet und auf
$20\,^\circ\text{C}$ erwärmt. Ein Schüler sagt: „Die Luft bleibt bei $80\,\%$, Lüften im Winter macht feucht.“

Beim Erwärmen bleibt die **absolute** Feuchte gleich: $0{,}80\cdot 4{,}8\,\text{g/m}^3 = 3{,}84\,\text{g/m}^3$. Bei
$20\,^\circ\text{C}$ könnte die Luft aber $17{,}3\,\text{g/m}^3$ tragen. Also $\varphi = 3{,}84/17{,}3 = 22\,\%$. Die
gelüftete Winterluft ist im Zimmer sehr trocken. Deshalb hilft Lüften im Winter gegen Schimmel.
:::

Gemessen wird die Feuchte mit dem **Haarhygrometer** oder dem **Psychrometer**. Im Haarhygrometer werden
Haare bei Feuchtigkeit länger und bewegen einen Zeiger. Das Psychrometer vergleicht ein trockenes mit
einem feuchten Thermometer. Das feuchte kühlt durch Verdunstung umso stärker ab, je trockener die Luft ist.

```aufgabe
id: p11-kondenswasser
titel: Beschlagene Fenster
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  In einem Schlafzimmer mit $40\,\text{m}^3$ hat die Luft $20\,^\circ\text{C}$ und $70\,\%$ relative Feuchte. Wie viel Wasser in Gramm würde kondensieren, wenn die gesamte Raumluft auf $10\,^\circ\text{C}$ abgekühlt würde? Die Sättigungsmengen sind $17{,}3\,\text{g/m}^3$ bei $20\,^\circ\text{C}$ und $9{,}4\,\text{g/m}^3$ bei $10\,^\circ\text{C}$.
teile:
  - typ: zahl
    loesung: "(0.70*17.3-9.4)*40"
    einheit: "g"
    anzeige: '108'
    fehler:
      - wert: "0.70*17.3*40"
        meldung: Das ist das ganze Wasser in der Raumluft. Bei $10\,^\circ\text{C}$ bleibt aber ein Teil als Dampf in der Luft, nämlich die Sättigungsmenge.
      - wert: "(17.3-9.4)*40"
        meldung: Du hast mit gesättigter Luft gerechnet. Die Luft hat nur $70\,\%$, also $0{,}70\cdot 17{,}3\,\text{g/m}^3$.
hinweise:
  - 'Wassergehalt jetzt: $0{,}70\cdot 17{,}3\,\text{g/m}^3$.'
  - 'Bei $10\,^\circ\text{C}$ passen nur $9{,}4\,\text{g/m}^3$. Der Überschuss pro Kubikmeter kondensiert.'
loesung: |
  **Absolute Feuchte:** $0{,}70\cdot 17{,}3\,\text{g/m}^3 = 12{,}11\,\text{g/m}^3$.
  ---
  **Überschuss:** Bei $10\,^\circ\text{C}$ passen höchstens $9{,}4\,\text{g/m}^3$. Es bleiben $12{,}11 - 9{,}4 = 2{,}71\,\text{g/m}^3$ übrig.
  ---
  **Im ganzen Raum:** $2{,}71\,\text{g/m}^3\cdot 40\,\text{m}^3 \approx 108\,\text{g}$. Deshalb soll man lüften, sonst sammelt sich das Wasser an kalten Wänden, und es bildet sich Schimmel.
```

### Warum aufsteigende Luft abkühlt

Warme Luft am Boden steigt auf, etwa über einem sonnigen Feld oder wenn Wind sie über ein Gebirge drückt.
Beim Aufsteigen kommt sie in Höhen mit kleinerem Luftdruck. Sie dehnt sich aus und verrichtet dabei Arbeit
an der umgebenden Luft. Luft leitet Wärme sehr schlecht. Deshalb fließt kaum Wärme nach, der Vorgang ist
fast **adiabatisch** (siehe [11.4 Adiabatische Zustandsänderungen](/lernen/physik1/hauptsaetze-waermekraftmaschinen/adiabatische-zustandsaenderungen-ohne-waermeaustausch)).
Die Luft kühlt ab, und zwar um etwa **$1\,\text{K}$ pro $100\,\text{m}$**. Diese Rate heißt
**trockenadiabatischer Temperaturgradient**.

:::intuition
Woher kommt die Zahl $1\,\text{K}$ pro $100\,\text{m}$? Eine Energiebilanz gibt die Antwort. Ein Kilogramm Luft
gewinnt beim Aufsteigen um $100\,\text{m}$ die Lageenergie $m g h = 1\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 100\,\text{m} = 981\,\text{J}$.
Diese Energie stammt aus seinem Wärmeinhalt. Die spezifische Wärmekapazität von Luft bei konstantem
Druck ist $c_p = 1005\,\text{J/(kg K)}$: Ein Kilogramm Luft gibt pro Kelvin Abkühlung $1005\,\text{J}$ ab. Also kühlt die Luft um $981/1005 \approx 0{,}98\,\text{K}$ ab, fast genau $1\,\text{K}$.
Die Lageenergie kennst du aus [4.3 Energie](/lernen/physik1/arbeit-energie-impuls/energie).
:::

### Wolkenbildung und die Wolkenuntergrenze

Erreicht die aufsteigende Luft ihren Taupunkt, kondensiert der Wasserdampf an winzigen Staub- und
Salzteilchen, den **Kondensationskeimen**. Eine Wolke entsteht. Ihre Untergrenze lässt sich abschätzen. Der
Taupunkt der aufsteigenden Luft sinkt nur um etwa $0{,}2\,\text{K}$ pro $100\,\text{m}$, weil die Luft dünner wird.
Die Temperatur sinkt um $1\,\text{K}$ pro $100\,\text{m}$. Beide nähern sich also um $0{,}8\,\text{K}$ pro $100\,\text{m}$.
Daraus folgt die Faustregel
$$h_\text{Wolke} \approx 125\,\text{m}\cdot\frac{T - \tau}{1\,\text{K}}.$$
Dabei ist $T$ die Temperatur und $\tau$ (griechisch „tau“) der Taupunkt am Boden. Die $125\,\text{m}$ kommen
aus $100\,\text{m}/0{,}8$.

```aufgabe
id: p11-wolkenbasis
titel: Wie hoch liegen die Wolken?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Am Boden misst man $25\,^\circ\text{C}$ und einen Taupunkt von $13\,^\circ\text{C}$. In welcher Höhe über dem Boden bilden sich Quellwolken?
teile:
  - typ: zahl
    loesung: "125*(25-13)"
    einheit: "m"
    anzeige: '1500'
    fehler:
      - wert: "100*(25-13)"
        meldung: Du hast nur die Abkühlung um $1\,\text{K}$ pro $100\,\text{m}$ berücksichtigt. Der Taupunkt sinkt aber auch, um $0{,}2\,\text{K}$ pro $100\,\text{m}$. Beide nähern sich nur um $0{,}8\,\text{K}$ pro $100\,\text{m}$.
hinweise:
  - 'Temperatur und Taupunkt nähern sich beim Aufsteigen um etwa $0{,}8\,\text{K}$ pro $100\,\text{m}$.'
loesung: |
  Differenz von Temperatur und Taupunkt am Boden: $25 - 13 = 12\,\text{K}$.
  ---
  $h = \dfrac{12\,\text{K}}{0{,}8\,\text{K}/100\,\text{m}} = 1500\,\text{m}$ über Grund. Das entspricht der Faustregel $125\,\text{m}$ pro Kelvin Differenz.
```

Steigt gesättigte Luft weiter, kondensiert immer mehr Wasserdampf. Dabei wird die **Verdampfungswärme**
wieder frei (siehe
[10.6 Phasenübergänge und latente Wärme](/lernen/physik1/temperatur-waerme-gase/phasenuebergaenge-und-latente-waerme)). Sie heizt die Luft von innen und bremst die Abkühlung.
Feuchte Luft kühlt nur noch um etwa **$0{,}6\,\text{K}$ pro $100\,\text{m}$** ab. Das ist der
**feuchtadiabatische Temperaturgradient**. Ist die aufsteigende Luft dabei wärmer als ihre Umgebung, steigt
sie immer weiter. So entstehen hoch aufgetürmte Gewitterwolken. Die frei werdende latente Wärme ist die
Energiequelle von Gewittern und tropischen Wirbelstürmen.

:::beispiel[Warum ist es auf Bergen kalt?]
Man könnte meinen, oben sei es wärmer, weil man der Sonne näher ist und warme Luft aufsteigt. An einem
Sommertag hat es in Wien auf $200\,\text{m}$ Seehöhe $25\,^\circ\text{C}$. Welche Temperatur erwartest du am
selben Tag auf dem Sonnblick in $3106\,\text{m}$ Höhe?

**Schritt 1, Höhenunterschied:** $3106\,\text{m} - 200\,\text{m} = 2906\,\text{m}$, also rund $29{,}06$ Hundertmeterstufen.

**Schritt 2, mittlerer Gradient:** Die Temperatur in der Troposphäre nimmt im Mittel um $0{,}65\,\text{K}$ pro
$100\,\text{m}$ ab. Das liegt zwischen trocken- und feuchtadiabatisch.

**Schritt 3, rechnen:** $25\,^\circ\text{C} - 0{,}65\,\text{K}\cdot 29{,}06 = 25\,^\circ\text{C} - 18{,}9\,\text{K} = 6{,}1\,^\circ\text{C}$.

**Antwort:** Etwa $6\,^\circ\text{C}$. Das ist ein Modellwert für denselben Tag, gemessene Werte schwanken mit der
Wetterlage. Der Grund für die Kälte: Die Atmosphäre wird vom Boden her geheizt, nicht direkt von der Sonne.
Aufsteigende Luft kühlt durch Ausdehnung ab.
:::

### Der Föhn

Der **Föhn** ist ein warmer, trockener Fallwind auf der windabgewandten Seite eines Gebirges. Die dem Wind
zugewandte Seite heißt **Luv**, die abgewandte **Lee**. In Österreich weht Föhn typisch bei Südwind im
Inntal und in Salzburg. Er läuft in drei Schritten ab:

1. Feuchte Luft wird auf der Luvseite (im Süden) zum Aufsteigen gezwungen. Sie kühlt zuerst
   trockenadiabatisch um $1\,\text{K}$ pro $100\,\text{m}$ ab, bis sie den Taupunkt erreicht.
2. Ab dann kühlt sie nur noch feuchtadiabatisch um $0{,}6\,\text{K}$ pro $100\,\text{m}$ ab. Es bilden sich
   Wolken, es regnet, und die Luft verliert Wasser.
3. Auf der Leeseite sinkt die nun trockene Luft ab und wird zusammengedrückt. Sie erwärmt sich
   trockenadiabatisch um $1\,\text{K}$ pro $100\,\text{m}$ auf dem ganzen Weg nach unten.

:::beispiel[Föhn über einem Gebirgskamm]
Luft mit $20\,^\circ\text{C}$ strömt in $400\,\text{m}$ Seehöhe an ein Gebirge. Ab $1200\,\text{m}$ bilden sich
Wolken. Der Kamm liegt auf $2800\,\text{m}$. Auf der Nordseite sinkt die Luft wieder auf $400\,\text{m}$.

**Schritt 1, trocken hinauf:** $400$ bis $1200\,\text{m}$ sind $800\,\text{m}$, also $-8\,\text{K}$. Die Luft hat $12\,^\circ\text{C}$.

**Schritt 2, feucht hinauf:** $1200$ bis $2800\,\text{m}$ sind $1600\,\text{m}$, also $-0{,}6\cdot 16 = -9{,}6\,\text{K}$.
Am Kamm hat die Luft $2{,}4\,^\circ\text{C}$.

**Schritt 3, trocken hinunter:** $2800$ bis $400\,\text{m}$ sind $2400\,\text{m}$, also $+24\,\text{K}$. Unten hat die
Luft $26{,}4\,^\circ\text{C}$.

**Antwort:** Auf der Nordseite ist die Luft um $6{,}4\,\text{K}$ wärmer als auf gleicher Höhe im Süden. Die Wärme
stammt aus der Kondensation, das Wasser ist als Regen auf der Südseite geblieben.
:::

```plot
x: [0, 30]
y: [0, 3]
hoehe: 300
achsen: { x: "Temperatur in °C", y: "Höhe in km" }
strecken:
  - { von: [20, 0.4], nach: [12, 1.2], farbe: 0 }
  - { von: [12, 1.2], nach: [2.4, 2.8], farbe: 2 }
  - { von: [2.4, 2.8], nach: [26.4, 0.4], farbe: 1 }
punkte:
  - { x: 20, y: 0.4, label: "Süd 20 °C" }
  - { x: 12, y: 1.2, label: "Wolkenbasis" }
  - { x: 2.4, y: 2.8, label: "Kamm" }
  - { x: 26.4, y: 0.4, label: "Nord 26,4 °C" }
beschriftung: "Temperatur der Luft beim Föhn. Blau: trockener Aufstieg mit 1 K pro 100 m. Grün: feuchter Aufstieg mit 0,6 K pro 100 m. Orange: trockener Abstieg mit 1 K pro 100 m. Weil die Luft auf der grünen Strecke weniger abkühlt, als sie beim Abstieg wieder gewinnt, kommt sie unten wärmer an."
```

:::achtung[Fehler: beim Abstieg feuchtadiabatisch gerechnet]
Ein Schüler rechnet im Föhn-Beispiel den Abstieg mit $0{,}6\,\text{K}$ pro $100\,\text{m}$:
„$2{,}4\,^\circ\text{C} + 0{,}6\cdot 24\,\text{K} = 16{,}8\,^\circ\text{C}$, also ist es im Norden kälter.“

Der feuchtadiabatische Gradient gilt nur, solange Wasser kondensiert und Wärme freisetzt. Die absteigende
Luft ist trocken, denn sie hat ihr Wasser im Süden abgeregnet. Beim Absinken wird sie wärmer, ihre relative
Feuchte sinkt, und es kondensiert nichts. Deshalb gilt $1\,\text{K}$ pro $100\,\text{m}$, und es kommen
$26{,}4\,^\circ\text{C}$ heraus.
:::

```reflexion
frage: Warum ist Föhnluft nicht nur warm, sondern auch sehr trocken? Erkläre mit der relativen Feuchte und dem Wasser, das die Luft auf ihrem Weg verloren hat.
antwort: |
  Auf der Südseite hat die Luft ihren Wasserdampf zum Teil als Regen verloren. Am Kamm ist sie gerade gesättigt, aber
  sehr kalt, und trägt deshalb nur wenig Wasser. Beim Absinken erwärmt sie sich stark. Warme Luft könnte viel mehr Wasser
  tragen, ihre absolute Feuchte bleibt aber klein. Also ist ihre relative Feuchte sehr niedrig. Föhnluft ist darum warm,
  trocken und klar, mit guter Fernsicht.
```

:::merke[Feuchte und adiabatische Gradienten]
1. $\varphi = f/f_\text{max}(T)$. Beim Abkühlen steigt $\varphi$, beim Erwärmen sinkt es.
2. Taupunkt: Temperatur, bei der $f$ gerade die Sättigungsmenge ist. Zwischen Tabellenwerten linear interpolieren.
3. Trockene Luft: $1\,\text{K}$ pro $100\,\text{m}$. Gesättigte Luft: etwa $0{,}6\,\text{K}$ pro $100\,\text{m}$.
4. Wolkenuntergrenze: etwa $125\,\text{m}$ pro Kelvin Unterschied zwischen Temperatur und Taupunkt.
:::

### Aufgaben zu Feuchte, Wolken und Föhn

```aufgabe
id: p11-taupunkt
titel: Taupunkt bestimmen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Luft hat $25\,^\circ\text{C}$ und $55\,\%$ relative Feuchte. Die Sättigungsmengen sind $9{,}4\,\text{g/m}^3$ bei $10\,^\circ\text{C}$, $12{,}8\,\text{g/m}^3$ bei $15\,^\circ\text{C}$ und $23{,}0\,\text{g/m}^3$ bei $25\,^\circ\text{C}$. Bestimme den Taupunkt durch lineare Interpolation und runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "10+5*(0.55*23.0-9.4)/(12.8-9.4)"
    toleranz: 0.3
    einheit: "°C"
    anzeige: '14{,}8'
    fehler:
      - wert: "0.55*25"
        meldung: Du hast die relative Feuchte auf die Temperatur angewendet. Der Taupunkt ergibt sich aus der **Wassermenge**, nicht aus einem Bruchteil der Temperatur.
      - wert: "0.55*23"
        meldung: Das ist die absolute Feuchte in $\text{g/m}^3$. Suche jetzt in der Tabelle die Temperatur, bei der diese Menge die Sättigungsmenge ist.
hinweise:
  - Berechne zuerst die absolute Feuchte. Suche dann, bei welcher Temperatur diese Menge die Sättigungsmenge ist.
  - 'Die absolute Feuchte liegt zwischen $9{,}4\,\text{g/m}^3$ ($10\,^\circ\text{C}$) und $12{,}8\,\text{g/m}^3$ ($15\,^\circ\text{C}$). Interpoliere linear.'
gefuehrt:
  - text: Wie groß ist die absolute Feuchte in $\text{g/m}^3$?
    teil: { typ: zahl, loesung: "0.55*23.0" }
    erklaerung: $f = 0{,}55\cdot 23{,}0\,\text{g/m}^3 = 12{,}65\,\text{g/m}^3$.
  - text: Zwischen welchen Tabellentemperaturen liegt der Taupunkt? Gib die untere an.
    teil: { typ: zahl, loesung: "10" }
    erklaerung: $12{,}65$ liegt zwischen $9{,}4$ (bei $10\,^\circ\text{C}$) und $12{,}8$ (bei $15\,^\circ\text{C}$).
  - text: Welcher Anteil der Strecke von $9{,}4$ bis $12{,}8$ ist bis $12{,}65$ zurückgelegt?
    teil: { typ: zahl, loesung: "(12.65-9.4)/(12.8-9.4)" }
    erklaerung: $(12{,}65 - 9{,}4)/(12{,}8 - 9{,}4) = 3{,}25/3{,}4 = 0{,}956$.
  - text: Berechne den Taupunkt.
    teil: { typ: zahl, loesung: "10+5*0.956", toleranz: 0.3 }
    erklaerung: $10\,^\circ\text{C} + 0{,}956\cdot 5\,\text{K} = 14{,}8\,^\circ\text{C}$.
loesung: |
  **Absolute Feuchte:** $f = 0{,}55\cdot 23{,}0\,\text{g/m}^3 = 12{,}65\,\text{g/m}^3$.
  ---
  **Einordnen:** In der Tabelle liegt $12{,}65$ zwischen $9{,}4$ ($10\,^\circ\text{C}$) und $12{,}8$ ($15\,^\circ\text{C}$), knapp unter $15\,^\circ\text{C}$.
  ---
  **Interpolieren:** $\tau = 10\,^\circ\text{C} + 5\,\text{K}\cdot\dfrac{12{,}65 - 9{,}4}{12{,}8 - 9{,}4} = 14{,}8\,^\circ\text{C}$. Unter etwa $15\,^\circ\text{C}$ bildet sich Tau.
```

```aufgabe
id: p11-11-saettigungskurve
titel: Aus der Sättigungskurve ablesen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Luft mit $15\,^\circ\text{C}$ enthält $8{,}0\,\text{g}$ Wasserdampf pro Kubikmeter. Lies aus der Sättigungskurve ab.

  a) Wie groß ist die relative Feuchte?

  b) Bei welcher Temperatur liegt ungefähr der Taupunkt? Interpoliere linear zwischen den Messpunkten und runde auf ganze Grad.
plot:
  x: [0, 32]
  y: [0, 32]
  achsen: { x: "Temperatur in °C", y: "Sättigungsmenge in g/m³" }
  strecken:
    - { von: [0, 4.8], nach: [5, 6.8], farbe: 0 }
    - { von: [5, 6.8], nach: [10, 9.4], farbe: 0 }
    - { von: [10, 9.4], nach: [15, 12.8], farbe: 0 }
    - { von: [15, 12.8], nach: [20, 17.3], farbe: 0 }
    - { von: [20, 17.3], nach: [25, 23.0], farbe: 0 }
    - { von: [25, 23.0], nach: [30, 30.4], farbe: 0 }
    - { von: [0, 8], nach: [15, 8], farbe: 1, gestrichelt: true }
  punkte:
    - { x: 5, y: 6.8, label: "6,8" }
    - { x: 10, y: 9.4, label: "9,4" }
    - { x: 15, y: 12.8, label: "12,8" }
teile:
  - typ: zahl
    label: a) relative Feuchte
    loesung: "8/12.8*100"
    einheit: "%"
    anzeige: '62{,}5'
    fehler:
      - wert: "8/15*100"
        meldung: Du hast durch die Temperatur geteilt. Im Nenner steht die Sättigungsmenge bei $15\,^\circ\text{C}$, also $12{,}8\,\text{g/m}^3$.
  - typ: zahl
    label: b) Taupunkt
    loesung: "5+5*(8-6.8)/(9.4-6.8)"
    einheit: "°C"
    anzeige: '7'
    toleranz: 0.5
    fehler:
      - wert: "15"
        meldung: Bei $15\,^\circ\text{C}$ wäre die Luft erst bei $12{,}8\,\text{g/m}^3$ gesättigt. Suche die Temperatur, bei der die Kurve den Wert $8{,}0$ erreicht.
hinweise:
  - Für a) lies bei $15\,^\circ\text{C}$ die Sättigungsmenge ab.
  - Für b) folge der gestrichelten Linie bei $8\,\text{g/m}^3$ nach rechts, bis sie die Kurve trifft. Der Punkt liegt zwischen $5$ und $10\,^\circ\text{C}$.
loesung: |
  **a)** Bei $15\,^\circ\text{C}$ zeigt die Kurve $12{,}8\,\text{g/m}^3$. Also $\varphi = 8{,}0/12{,}8 = 0{,}625 = 62{,}5\,\%$.
  ---
  **b)** Die Kurve erreicht $8{,}0\,\text{g/m}^3$ zwischen $5\,^\circ\text{C}$ ($6{,}8$) und $10\,^\circ\text{C}$ ($9{,}4$). Interpoliert: $5\,^\circ\text{C} + 5\,\text{K}\cdot\dfrac{8{,}0 - 6{,}8}{9{,}4 - 6{,}8} = 5\,^\circ\text{C} + 2{,}3\,\text{K} = 7{,}3\,^\circ\text{C}$.
  ---
  **Antwort:** Taupunkt etwa $7\,^\circ\text{C}$. Kühlt die Luft nachts unter $7\,^\circ\text{C}$ ab, bildet sich Tau oder Nebel.
```

```aufgabe
id: p11-foehn
titel: Föhn über den Alpen
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Luft mit $15\,^\circ\text{C}$ strömt in $500\,\text{m}$ Seehöhe von Süden an die Alpen und wird auf $3000\,\text{m}$ gehoben. Ab $1000\,\text{m}$ bilden sich Wolken, und es regnet sich aus. Auf der Nordseite sinkt die Luft wieder auf $500\,\text{m}$ ab. Rechne mit $1\,\text{K}/100\,\text{m}$ trocken und $0{,}6\,\text{K}/100\,\text{m}$ feucht.

  a) Welche Temperatur hat die Luft auf dem Kamm?

  b) Welche Temperatur hat sie nach dem Abstieg?

  c) Erkläre, woher der Temperaturgewinn stammt.
teile:
  - typ: zahl
    label: a) Temperatur auf 3000 m
    loesung: "15-5-0.6*20"
    einheit: "°C"
    anzeige: '-2'
  - typ: zahl
    label: b) Temperatur auf der Nordseite in 500 m
    loesung: "15-5-0.6*20+25"
    einheit: "°C"
    anzeige: '23'
  - typ: text
    label: c) Erklärung
    muster: |
      Beim Aufstieg im Süden kondensiert Wasserdampf. Dabei wird Verdampfungswärme frei, deshalb kühlt die Luft dort nur
      um $0{,}6\,\text{K}$ pro $100\,\text{m}$ ab. Das Wasser fällt als Regen und bleibt im Süden. Beim Abstieg ist die Luft
      trocken und erwärmt sich um $1\,\text{K}$ pro $100\,\text{m}$. Der Gewinn von $8\,\text{K}$ ist die freigesetzte
      Kondensationswärme.
hinweise:
  - 'Aufstieg: $500$ bis $1000\,\text{m}$ trocken, $1000$ bis $3000\,\text{m}$ feucht.'
  - 'Abstieg: die ganzen $2500\,\text{m}$ trockenadiabatisch, denn die Luft hat ihr Wasser verloren.'
loesung: |
  **Trocken hinauf:** $500$ auf $1000\,\text{m}$ sind $-5\,\text{K}$, also $10\,^\circ\text{C}$.
  ---
  **a) Feucht hinauf:** $1000$ auf $3000\,\text{m}$ sind $-0{,}6\cdot 20 = -12\,\text{K}$, also $-2\,^\circ\text{C}$ am Kamm.
  ---
  **b) Trocken hinunter:** $3000$ auf $500\,\text{m}$ sind $+25\,\text{K}$, also $23\,^\circ\text{C}$.
  ---
  **c) Deutung:** Die Luft ist im Norden $8\,\text{K}$ wärmer als im Süden auf gleicher Höhe. Beim Aufstieg wurde Kondensationswärme frei, und das Wasser blieb als Regen im Süden zurück.
```

## Hoch, Tief, Wind, Fronten und Treibhauseffekt

```aufgabe
id: p11-12-check
art: check
titel: "Vorwissen: Kraft aus einem Druckunterschied"
niveau: 1
angabe: |
  Auf der einen Seite einer $1{,}0\,\text{m}^2$ großen Luftschicht herrscht ein um $2{,}0\,\text{hPa}$ höherer Druck als auf der anderen. Wie groß ist die Kraft, die diese Luftschicht in Richtung des kleineren Drucks schiebt? ($1\,\text{hPa} = 100\,\text{Pa}$)
teile:
  - typ: zahl
    loesung: "2*100*1"
    einheit: "N"
    anzeige: '200'
    fehler:
      - wert: "2"
        meldung: Du hast Hektopascal wie Pascal behandelt. Ein Hektopascal sind $100\,\text{Pa}$.
hinweise:
  - 'Kraft ist Druckunterschied mal Fläche, $F = \Delta p\cdot A$.'
loesung: |
  $F = \Delta p\cdot A$. Der Druckunterschied ist $2{,}0\,\text{hPa} = 200\,\text{Pa} = 200\,\text{N/m}^2$.
  ---
  $F = 200\,\text{N/m}^2\cdot 1{,}0\,\text{m}^2 = 200\,\text{N}$. Solche Kräfte treiben den Wind an. Wiederholen: [9.1 Druck: Kraft pro Fläche](/lernen/physik1/hydro-aeromechanik/druck-kraft-pro-flaeche).
```

**Worum geht es?** Warum weht der Wind? Warum bringen Tiefs Regen und Hochs Sonne? Warum drehen sich
Wirbelstürme? Und warum ist die Erde überhaupt so warm, dass Leben möglich ist? Die Antworten verbinden die
Wärmelehre mit der Mechanik der rotierenden Erde.

### Hoch und Tief

Der Luftdruck am Boden schwankt von Tag zu Tag um einige Hektopascal um den Mittelwert $1013\,\text{hPa}$.
Gebiete mit höherem Druck heißen **Hoch**, Gebiete mit tieferem Druck **Tief**.

- In einem **Tief** strömt Luft am Boden zusammen und steigt auf. Beim Aufsteigen dehnt sie sich aus und
  kühlt adiabatisch ab. Erreicht sie den Taupunkt, bilden sich Wolken und Niederschlag. Tiefs bringen
  meist schlechtes Wetter.
- In einem **Hoch** sinkt Luft von oben ab. Sie wird zusammengedrückt und erwärmt sich adiabatisch. Ihre
  relative Feuchte sinkt, Wolken lösen sich auf. Hochs bringen meist schönes Wetter.

Die Vorgänge stehen genauer in [11.11 Luftfeuchtigkeit, Taupunkt, Wolken und Föhn](/lernen/physik1/hauptsaetze-waermekraftmaschinen/luftfeuchtigkeit-taupunkt-wolken-und-foehn).
Auf einer **Wetterkarte** verbinden **Isobaren** Orte mit gleichem Luftdruck, wie Höhenlinien auf einer
Landkarte. Wind entsteht, weil Luft vom hohen zum tiefen Druck geschoben wird. Je enger die Isobaren
beieinanderliegen, desto größer ist der Druckunterschied pro Kilometer, und desto stärker weht der Wind.

```plot
x: [-6, 4]
y: [-4.5, 4.5]
gleich: true
hoehe: 320
kurven:
  - { x: "-0.4 + 1*cos(t)", y: "1*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "-0.8 + 2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "-1.2 + 3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "-1.6 + 4*cos(t)", y: "4*sin(t)", t: [0, "2*pi"], farbe: 0 }
punkte:
  - { x: -0.3, y: 0, label: "T 995 hPa" }
  - { x: -4.4, y: 0, label: "A" }
  - { x: 2.0, y: 0, label: "B" }
  - { x: -0.8, y: 2.2, label: "1005" }
  - { x: -1.6, y: 4.2, label: "1015" }
beschriftung: "Wetterkarte eines Tiefs (T) mit Isobaren im Abstand von 5 hPa, von innen 1000, 1005, 1010 und 1015 hPa. Im Osten bei B liegen die Isobaren eng beieinander, im Westen bei A weit auseinander."
```

### Die Corioliskraft: Warum der Wind nicht geradeaus weht

Auf einer ruhenden Erde würde die Luft geradewegs vom Hoch ins Tief strömen. Die Erde dreht sich aber.
Von der Erde aus gesehen wird jede großräumige Bewegung abgelenkt. Man beschreibt das mit einer
**Scheinkraft**, der **Corioliskraft**. Eine Scheinkraft hat keinen Körper, der sie ausübt. Sie tritt nur auf,
wenn man in einem beschleunigten oder rotierenden Bezugssystem rechnet (siehe
[3.9 Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit)).

Die Ablenkregel lässt sich mit der Kreisbewegung verstehen. Jeder Punkt der Erde läuft in einem Tag einmal
um die Erdachse. Seine Bahngeschwindigkeit nach Osten ist $v = \omega r$. Dabei ist $\omega = 2\pi/T$ die
Winkelgeschwindigkeit der Erde und $r = R\cos\varphi$ der Abstand von der Erdachse in der geografischen Breite
$\varphi$ (siehe [6.1 Kreisbewegung beschreiben: Periode, Frequenz, Winkelgeschwindigkeit](/lernen/physik1/kreisbewegung-gravitation/kreisbewegung-beschreiben-periode-frequenz-winkelgeschwindigkeit)).

:::beispiel[Wie schnell bewegt sich der Boden nach Osten?]
Die Erde hat den Radius $R = 6371\,\text{km}$ und dreht sich in $T = 86\,164\,\text{s}$ einmal um sich selbst. Wie
schnell bewegt sich der Boden am Äquator und in Wien ($\varphi = 48{,}2^\circ$) nach Osten?

**Schritt 1, Äquator:** $r = R$, also $v = \dfrac{2\pi\cdot 6{,}371\cdot 10^6\,\text{m}}{86\,164\,\text{s}} = 465\,\text{m/s}$.

**Schritt 2, Wien:** $r = R\cos 48{,}2^\circ = 0{,}666\,R$, also $v = 0{,}666\cdot 465\,\text{m/s} = 310\,\text{m/s}$.

**Schritt 3, Deutung:** Luft, die vom Äquator nach Norden strömt, bringt ihre große Ostgeschwindigkeit mit.
Der Boden unter ihr ist weiter nördlich langsamer. Die Luft eilt dem Boden also nach Osten voraus. Für jemanden,
der nach Norden schaut, ist Osten rechts: Die Luft wird **nach rechts** abgelenkt.
:::

Strömt Luft nach Süden, kommt sie in Gebiete mit größerer Ostgeschwindigkeit. Sie bleibt zurück, wird also
nach Westen abgelenkt. Wer nach Süden schaut, hat Westen rechts. Auch hier wird die Luft nach rechts
abgelenkt. Allgemein gilt die **Ablenkregel**: Auf der Nordhalbkugel lenkt die Corioliskraft jede Bewegung
nach **rechts** ab, auf der Südhalbkugel nach **links**.

Die Folge für ein Tief: Die Luft strömt von allen Seiten hinein und wird jeweils nach rechts abgelenkt.
Dadurch kreist sie auf der Nordhalbkugel **gegen den Uhrzeigersinn** spiralförmig ins Tief hinein. Aus einem
Hoch strömt sie **im Uhrzeigersinn** heraus. In großer Höhe, wo kaum Reibung bremst, weht der Wind sogar fast
parallel zu den Isobaren.

:::achtung[Fehler: Drehrichtung eines Tiefs verwechselt]
Ein Schüler argumentiert: „Die Corioliskraft lenkt nach rechts ab, also dreht sich die Luft im Tief nach
rechts herum, im Uhrzeigersinn.“

„Nach rechts abgelenkt“ gilt für die Bewegung **jedes einzelnen Luftpakets**, bezogen auf seine eigene
Richtung. Ein Paket, das von Süden auf das Tief zuströmt, wird nach Osten abgelenkt. Ein Paket von Norden
wird nach Westen abgelenkt. Zeichnet man das für alle Seiten, kreist die Luft **gegen** den Uhrzeigersinn um
das Zentrum. Zeichne die Pfeile selbst, dann siehst du es.
:::

```aufgabe
id: p11-coriolis
titel: Winde um ein Tief
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Wie strömt die Luft auf der Nordhalbkugel in Bodennähe um ein Tiefdruckgebiet?
teile:
  - typ: auswahl
    optionen:
      - "geradlinig zum Zentrum hin"
      - "gegen den Uhrzeigersinn, spiralförmig hinein"
      - "im Uhrzeigersinn, spiralförmig hinein"
      - "gegen den Uhrzeigersinn, spiralförmig heraus"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ohne Erddrehung wäre das so. Die Corioliskraft lenkt aber jede großräumige Bewegung auf der Nordhalbkugel nach rechts ab.
      - wert: 2
        meldung: Das ist die Drehrichtung auf der **Südhalbkugel**. Zeichne ein Paket, das von Süden kommt. Nach rechts abgelenkt heißt nach Osten, und so entsteht eine Drehung gegen den Uhrzeigersinn.
      - wert: 3
        meldung: Aus einem Tief strömt am Boden keine Luft heraus. Luft fließt vom hohen zum tiefen Druck, also hinein.
hinweise:
  - Luft strömt vom hohen zum tiefen Druck. Wird sie auf der Nordhalbkugel nach rechts oder links abgelenkt?
loesung: |
  Die Luft strömt vom hohen zum tiefen Druck, also hinein.
  ---
  Die Corioliskraft lenkt sie auf der Nordhalbkugel nach rechts ab. Dadurch entsteht eine Drehung gegen den Uhrzeigersinn, spiralförmig nach innen.
```

Ein bekanntes Gerücht behauptet, das Wasser in Badewannen laufe auf Nord- und Südhalbkugel verschieden herum
ab. Das stimmt nicht. Die Corioliskraft ist so klein, dass sie nur bei Bewegungen über Hunderte von
Kilometern und viele Stunden spürbar wird. In der Badewanne bestimmen die Form des Beckens und kleine
Restströmungen die Drehrichtung.

### Fronten

Wo eine warme und eine kalte Luftmasse aufeinandertreffen, entsteht eine **Front**. Warme Luft ist leichter
als kalte und gleitet über sie hinweg.

- An einer **Warmfront** schiebt sich warme Luft langsam auf kalte Luft hinauf. Sie steigt flach und
  gleichmäßig auf. Es entstehen ausgedehnte Schichtwolken und lang anhaltender, leichter Landregen.
- An einer **Kaltfront** schiebt sich kalte Luft keilförmig unter warme Luft und hebt sie schnell an. Es
  entstehen hohe Quellwolken, Schauer und Gewitter. Danach wird es kühler und klarer.

### Inversion und Smog

Normalerweise wird es nach oben kälter. Manchmal liegt aber eine wärmere Luftschicht über kälterer Luft. Das
heißt **Inversion** (lateinisch „Umkehrung“), weil die Temperatur dort nach oben zunimmt. Inversionen
entstehen vor allem im Winter bei Hochdruck. Der Boden kühlt nachts stark aus, die Kaltluft sammelt sich in
Tälern und Becken, und darüber liegt absinkende, erwärmte Luft aus dem Hoch.

Eine Inversion wirkt wie ein Deckel. Steigt ein Abgaspaket vom Boden auf, kühlt es adiabatisch ab. In der
warmen Schicht darüber ist es kälter als seine Umgebung, also schwerer, und sinkt zurück. Abgase und Feinstaub
sammeln sich am Boden. So entsteht **Smog** (aus englisch „smoke“ und „fog“) und im Winter oft Hochnebel.

:::beispiel[Ein Abgaspaket unter einer Inversion]
Am Morgen hat die Luft am Boden eines Beckens $-2\,^\circ\text{C}$. In $300\,\text{m}$ Höhe beginnt eine warme
Schicht mit $+3\,^\circ\text{C}$. Ein Abgaspaket mit $+4\,^\circ\text{C}$ steigt vom Boden auf.

**Schritt 1, Abkühlung beim Aufsteigen:** Trockenadiabatisch $1\,\text{K}$ pro $100\,\text{m}$, also hat das Paket in
$300\,\text{m}$ nur noch $4\,^\circ\text{C} - 3\,\text{K} = 1\,^\circ\text{C}$.

**Schritt 2, Vergleich:** Die Umgebung hat dort $3\,^\circ\text{C}$. Das Paket ist kälter als die Umgebung und
damit dichter.

**Antwort:** Das Paket kann die warme Schicht nicht durchdringen. Es sinkt zurück, die Abgase bleiben im Becken.
Erst wenn die Sonne den Boden erwärmt oder Wind die Schichtung aufmischt, löst sich die Inversion auf.
:::

```plot
x: [-6, 8]
y: [0, 1]
hoehe: 280
achsen: { x: "Temperatur in °C", y: "Höhe in km" }
strecken:
  - { von: [-2, 0], nach: [3, 0.3], farbe: 1 }
  - { von: [3, 0.3], nach: [-1.5, 1], farbe: 1 }
  - { von: [4, 0], nach: [-6, 1], farbe: 0, gestrichelt: true }
punkte:
  - { x: 3, y: 0.3, label: "Obergrenze der Inversion" }
  - { x: 4, y: 0, label: "Abgaspaket" }
beschriftung: "Temperaturprofil bei Inversion (orange): Bis 300 m wird es nach oben wärmer, darüber wieder kälter. Ein aufsteigendes Abgaspaket (blau gestrichelt) kühlt um 1 K pro 100 m ab und ist in 300 m kälter als die Umgebung. Es sinkt zurück."
```

### Der Treibhauseffekt

Die Erde bekommt Energie von der Sonne, vor allem als sichtbares Licht. Etwa $30\,\%$ davon werden von Wolken,
Eis und Boden sofort zurückgeworfen. Dieser Anteil heißt **Albedo** (lateinisch „Weißheit“). Den Rest nimmt
die Erde auf. Gleichzeitig strahlt sie selbst Wärmestrahlung ab, und zwar als unsichtbares **Infrarot**. Im
Gleichgewicht ist die abgestrahlte Leistung gleich der aufgenommenen.

Für die Abstrahlung gilt das **Stefan-Boltzmann-Gesetz**: Ein Körper mit der Temperatur $T$ strahlt pro
Quadratmeter die Leistung $\sigma T^4$ ab. Dabei ist $\sigma = 5{,}67\cdot 10^{-8}\,\text{W/(m}^2\text{K}^4)$ die
Stefan-Boltzmann-Konstante. Die Erde fängt das Sonnenlicht mit ihrer Querschnittsfläche $\pi R^2$ ein, strahlt
aber mit ihrer ganzen Oberfläche $4\pi R^2$ ab. Mit der Sonnenleistung $S$ pro Quadratmeter und der Albedo $a$
lautet das Gleichgewicht
$$S\,(1 - a)\cdot\pi R^2 = \sigma T^4\cdot 4\pi R^2, \qquad\text{also}\qquad T = \left(\frac{S\,(1-a)}{4\sigma}\right)^{1/4}.$$

:::beispiel[Wie warm wäre der Mars ohne Treibhauseffekt?]
Am Mars kommen $S = 586\,\text{W/m}^2$ Sonnenleistung an, seine Albedo ist etwa $0{,}25$.

**Schritt 1, aufgenommene Leistung pro Quadratmeter Oberfläche:** $\dfrac{S(1 - a)}{4} = \dfrac{586\cdot 0{,}75}{4}\,\text{W/m}^2 = 110\,\text{W/m}^2$.

**Schritt 2, Temperatur:** $T^4 = \dfrac{110\,\text{W/m}^2}{5{,}67\cdot 10^{-8}\,\text{W/(m}^2\text{K}^4)} = 1{,}94\cdot 10^9\,\text{K}^4$, also
$T = 210\,\text{K} = -63\,^\circ\text{C}$.

**Antwort:** Der Mars hat eine sehr dünne Atmosphäre und kaum Treibhauseffekt. Gemessen werden im Mittel
tatsächlich etwa $-60\,^\circ\text{C}$. Das einfache Modell passt also gut.
:::

Für die Erde liefert dieselbe Rechnung etwa $-18\,^\circ\text{C}$. Gemessen wird aber eine mittlere
Oberflächentemperatur von etwa $+15\,^\circ\text{C}$. Den Unterschied von rund $33\,\text{K}$ nennt man den
**natürlichen Treibhauseffekt**. Er entsteht so: Wasserdampf, Kohlendioxid, Methan und andere
**Treibhausgase** lassen sichtbares Licht fast ungehindert durch. Das Infrarot der Erdoberfläche absorbieren sie
aber zum großen Teil und strahlen einen Teil davon zurück zum Boden. Der Boden bekommt dadurch zusätzliche
Energie und muss wärmer werden, um im Gleichgewicht genauso viel abzustrahlen, wie ankommt. Ohne diesen
Effekt wäre die Erde ein Eisball.

Seit etwa 1850 hat die Verbrennung von Kohle, Öl und Gas den Kohlendioxidanteil der Luft von rund $0{,}028\,\%$
auf über $0{,}042\,\%$ erhöht. Dieser **verstärkte** Treibhauseffekt hat die mittlere Temperatur bereits um mehr als
$1\,\text{K}$ steigen lassen. Das ist der menschengemachte Klimawandel.

:::achtung[Fehler: den Faktor 4 vergessen]
Eine Schülerin berechnet die mittlere Gleichgewichtstemperatur des Mondes ($S = 1361\,\text{W/m}^2$, Albedo $0{,}12$) so:
„$T = \left(\dfrac{1361\cdot 0{,}88}{5{,}67\cdot 10^{-8}}\right)^{1/4} = 381\,\text{K} = 108\,^\circ\text{C}$.“

Sie hat so getan, als würde jeder Quadratmeter ständig senkrecht von der Sonne beschienen. Ein Himmelskörper
fängt aber nur mit seiner Querschnittsfläche $\pi R^2$ Licht ein und strahlt mit der vierfach so großen Oberfläche
$4\pi R^2$ ab. Mit dem Faktor $4$ im Nenner ergibt sich richtig $270\,\text{K} \approx -4\,^\circ\text{C}$ als Mittelwert.
:::

```reflexion
frage: Warum laufen Badewannen auf beiden Erdhälften nicht zuverlässig verschieden herum ab, obwohl Tiefdruckgebiete das tun? Vergleiche die Größenordnungen von Strecke und Zeit.
antwort: |
  Die Corioliskraft entsteht durch die Erddrehung, und die Erde dreht sich nur einmal am Tag. Ihre Wirkung wird erst
  spürbar, wenn eine Bewegung viele Stunden dauert und Hunderte von Kilometern lang ist. Ein Tief hat einen Durchmesser von
  über tausend Kilometern, und seine Luft ist tagelang unterwegs. Das Wasser in der Badewanne fließt in Sekunden über
  wenige Zentimeter. Dort sind kleine Strömungen vom Einlassen und die Form des Beckens viel stärker als die
  Corioliskraft.
```

:::merke[Wetter und Klima physikalisch]
1. Tief: Luft steigt auf, kühlt adiabatisch ab, Wolken. Hoch: Luft sinkt ab, erwärmt sich, Wolken lösen sich auf.
2. Wind weht vom Hoch zum Tief, umso stärker, je enger die Isobaren liegen.
3. Corioliskraft: Nordhalbkugel nach rechts. Tief gegen den Uhrzeigersinn, Hoch im Uhrzeigersinn.
4. Inversion: warme Schicht über kalter, wirkt wie ein Deckel, Smog und Hochnebel.
5. Strahlungsgleichgewicht: $T = \bigl(S(1-a)/(4\sigma)\bigr)^{1/4}$. Der Treibhauseffekt hebt die Erde um rund $33\,\text{K}$ an.
:::

### Aufgaben zu Wind, Fronten und Treibhauseffekt

```aufgabe
id: p11-12-inversion
titel: Woran erkennt man eine Inversion?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Beobachtung zeigt eine **Inversionswetterlage** an?
teile:
  - typ: auswahl
    optionen:
      - "Auf dem Berg ist es wärmer als im Tal, und im Tal hängen Nebel und Abgase."
      - "Es wird mit jedem Höhenmeter gleichmäßig kälter."
      - "Starker Wind bläst die Täler frei."
      - "Hohe Gewitterwolken türmen sich am Nachmittag auf."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die normale Schichtung der Troposphäre. Bei einer Inversion kehrt sich der Temperaturverlauf um, es wird nach oben wärmer.
      - wert: 2
        meldung: Starker Wind mischt die Luft durch und zerstört eine Inversion. Inversionen gibt es vor allem bei ruhigem Hochdruckwetter.
      - wert: 3
        meldung: Gewitterwolken entstehen, wenn Luft ungehindert aufsteigen kann. Bei einer Inversion ist das Aufsteigen gerade blockiert.
hinweise:
  - Inversion heißt Umkehrung. Was kehrt sich im Temperaturverlauf mit der Höhe um?
loesung: |
  Bei einer Inversion liegt warme Luft über kalter Luft. Auf dem Berg ist es dann wärmer als im Tal.
  ---
  Die warme Schicht wirkt wie ein Deckel. Abgase und Nebel bleiben im Tal, oft sieht man vom Berg auf ein Nebelmeer hinunter.
```

```aufgabe
id: p11-12-fronten
titel: Wetter an einer Kaltfront
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welches Wetter ist beim Durchzug einer **Kaltfront** typisch?
teile:
  - typ: auswahl
    optionen:
      - "kräftige Schauer oder Gewitter, danach Abkühlung und klare Luft"
      - "tagelanger leichter Landregen aus einer geschlossenen Wolkendecke"
      - "wolkenloser Himmel mit steigenden Temperaturen"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist typisch für eine **Warmfront**. Dort gleitet warme Luft langsam und flach auf. An der Kaltfront wird die warme Luft dagegen schnell angehoben.
      - wert: 2
        meldung: Das passt zu einem Hoch. An einer Front treffen Luftmassen aufeinander, und Luft wird gehoben. Das bringt Wolken.
hinweise:
  - An einer Kaltfront schiebt sich kalte Luft keilförmig unter warme Luft. Wie schnell wird die warme Luft dabei gehoben?
loesung: |
  Die kalte Luft schiebt sich unter die warme und hebt sie steil und schnell an. Die Luft kühlt rasch ab, es entstehen hohe Quellwolken.
  ---
  Typisch sind deshalb Schauer und Gewitter. Danach liegt man in der kalten Luftmasse, es wird kühler und klarer.
```

```aufgabe
id: p11-12-isobaren
titel: Wo weht der Wind am stärksten?
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Die Wetterkarte zeigt ein Tief mit Isobaren im Abstand von $5\,\text{hPa}$. An welchem der beiden Orte A oder B weht der Wind stärker, und warum?
plot:
  x: [-6, 4]
  y: [-4.5, 4.5]
  gleich: true
  kurven:
    - { x: "-0.4 + 1*cos(t)", y: "1*sin(t)", t: [0, "2*pi"], farbe: 0 }
    - { x: "-0.8 + 2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0 }
    - { x: "-1.2 + 3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 0 }
    - { x: "-1.6 + 4*cos(t)", y: "4*sin(t)", t: [0, "2*pi"], farbe: 0 }
  punkte:
    - { x: -0.3, y: 0, label: "T" }
    - { x: -4.4, y: 0, label: "A" }
    - { x: 2.0, y: 0, label: "B" }
teile:
  - typ: auswahl
    optionen:
      - "Bei B, weil die Isobaren dort enger liegen und der Druck sich auf kurzer Strecke stark ändert."
      - "Bei A, weil dort mehr Isobaren zwischen Ort und Zentrum liegen."
      - "Bei A, weil A weiter vom Tief entfernt ist und die Luft mehr Anlauf hat."
      - "An beiden gleich stark, weil zwischen Rand und Zentrum derselbe Druckunterschied liegt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Zwischen A und dem Zentrum liegen genauso viele Isobaren wie zwischen B und dem Zentrum. Entscheidend ist der Abstand der Linien, also der Druckunterschied pro Kilometer.
      - wert: 2
        meldung: Wind entsteht durch die Kraft aus dem Druckunterschied. Diese Kraft ist dort groß, wo sich der Druck auf kurzer Strecke stark ändert, nicht dort, wo die Luft „Anlauf“ hat.
      - wert: 3
        meldung: Der gesamte Druckunterschied ist gleich, aber bei B verteilt er sich auf eine viel kürzere Strecke. Das ist wie bei Höhenlinien auf einer Wanderkarte, wo eng beieinander steil bedeutet.
hinweise:
  - Isobaren sind wie Höhenlinien. Wo liegen sie eng beieinander?
  - Die antreibende Kraft hängt vom Druckunterschied pro Strecke ab.
loesung: |
  **Ansatz:** Die Kraft auf die Luft hängt vom Druckunterschied pro Strecke ab, also davon, wie eng die Isobaren liegen.
  ---
  **Ablesen:** Bei B liegen die Isobaren etwa $0{,}6$ Kästchen auseinander, bei A etwa $1{,}4$. Der Druck ändert sich bei B also mehr als doppelt so schnell.
  ---
  **Antwort:** Bei B weht der Wind deutlich stärker. Wie auf einer Wanderkarte: Eng liegende Höhenlinien bedeuten einen steilen Hang.
```

```aufgabe
id: p11-12-erdgeschwindigkeit
titel: Ostgeschwindigkeit des Bodens in verschiedenen Breiten
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Erde hat den Radius $6371\,\text{km}$ und dreht sich in $86\,164\,\text{s}$ einmal um ihre Achse.

  a) Wie schnell bewegt sich der Boden in $45^\circ$ nördlicher Breite nach Osten?

  b) Um wie viel langsamer ist er in $60^\circ$ nördlicher Breite?
teile:
  - typ: zahl
    label: a) Geschwindigkeit bei 45°
    loesung: "2*pi*6371e3*cos(inRad(45))/86164"
    einheit: "m/s"
    anzeige: '329'
    fehler:
      - wert: "2*pi*6371e3/86164"
        meldung: Das ist die Geschwindigkeit am Äquator. In $45^\circ$ Breite ist der Abstand zur Erdachse nur $R\cos 45^\circ$.
  - typ: zahl
    label: b) Unterschied zu 60°
    loesung: "2*pi*6371e3*(cos(inRad(45))-cos(inRad(60)))/86164"
    einheit: "m/s"
    anzeige: '96'
    fehler:
      - wert: "2*pi*6371e3*cos(inRad(60))/86164"
        meldung: Das ist die Geschwindigkeit bei $60^\circ$. Gefragt ist der Unterschied zur Geschwindigkeit bei $45^\circ$.
hinweise:
  - 'Der Boden läuft in einem Tag auf einem Kreis mit dem Radius $r = R\cos\varphi$ um die Erdachse.'
  - '$v = 2\pi R\cos\varphi/T$. Achte darauf, dass der Taschenrechner im Gradmaß rechnet.'
gefuehrt:
  - text: Wie groß ist der Abstand zur Erdachse bei $45^\circ$, in km?
    teil: { typ: zahl, loesung: "6371*cos(inRad(45))" }
    erklaerung: $r = 6371\,\text{km}\cdot\cos 45^\circ = 6371\,\text{km}\cdot 0{,}707 = 4505\,\text{km}$.
  - text: Berechne die Geschwindigkeit bei $45^\circ$ in m/s.
    teil: { typ: zahl, loesung: "2*pi*6371e3*cos(inRad(45))/86164" }
    erklaerung: $v = 2\pi\cdot 4{,}505\cdot 10^6\,\text{m}/86\,164\,\text{s} = 329\,\text{m/s}$.
  - text: Berechne die Geschwindigkeit bei $60^\circ$ in m/s.
    teil: { typ: zahl, loesung: "2*pi*6371e3*cos(inRad(60))/86164" }
    erklaerung: $\cos 60^\circ = 0{,}5$, also $v = 0{,}5\cdot 465\,\text{m/s} = 232\,\text{m/s}$.
  - text: Überlege, was der Unterschied für Luft bedeutet, die von $45^\circ$ nach $60^\circ$ strömt.
    erklaerung: Die Luft bringt rund $96\,\text{m/s}$ mehr Ostgeschwindigkeit mit als der Boden bei $60^\circ$. Sie eilt nach Osten voraus, also nach rechts abgelenkt.
loesung: |
  **Ansatz:** Ein Punkt in der Breite $\varphi$ läuft pro Tag auf einem Kreis mit Radius $R\cos\varphi$, also $v = 2\pi R\cos\varphi/T$.
  ---
  **a)** $v_{45} = \dfrac{2\pi\cdot 6{,}371\cdot 10^6\,\text{m}\cdot 0{,}707}{86\,164\,\text{s}} = 329\,\text{m/s}$.
  ---
  **b)** $v_{60} = \dfrac{2\pi\cdot 6{,}371\cdot 10^6\,\text{m}\cdot 0{,}5}{86\,164\,\text{s}} = 232\,\text{m/s}$, Unterschied $329 - 232 = 96\,\text{m/s}$ (mit ungerundeten Werten).
  ---
  **Deutung:** Luft, die nach Norden strömt, ist schneller nach Osten unterwegs als der Boden unter ihr. Sie wird nach rechts abgelenkt, genau wie die Ablenkregel sagt.
```

```aufgabe
id: p11-hoch-tief
titel: Warum bringen Hochs schönes Wetter?
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Erkläre physikalisch, warum ein Hochdruckgebiet meist wolkenloses Wetter bringt und ein Tiefdruckgebiet Wolken und Regen. Verwende die Begriffe adiabatisch, relative Feuchte und Taupunkt.
teile:
  - typ: text
    muster: |
      In einem Hoch sinkt Luft ab. Beim Absinken kommt sie unter höheren Druck, wird adiabatisch zusammengedrückt und
      erwärmt sich. Ihre relative Feuchte sinkt, vorhandene Wolkentröpfchen verdunsten. In einem Tief steigt Luft auf,
      dehnt sich adiabatisch aus und kühlt ab. Erreicht sie den Taupunkt, kondensiert Wasserdampf, und es bilden sich
      Wolken und Niederschlag.
hinweise:
  - Was passiert mit der Temperatur von absinkender und von aufsteigender Luft?
  - Wie hängt die relative Feuchte von der Temperatur ab, wenn der Wassergehalt gleich bleibt?
loesung: |
  **Hoch:** Die Luft sinkt ab, wird adiabatisch zusammengedrückt und erwärmt sich. Weil warme Luft mehr Wasser tragen kann, sinkt ihre relative Feuchte. Wolken lösen sich auf.
  ---
  **Tief:** Die Luft steigt auf, dehnt sich adiabatisch aus und kühlt ab. Ihre relative Feuchte steigt, bis der Taupunkt erreicht ist.
  ---
  **Folge:** Dann kondensiert Wasserdampf an Kondensationskeimen, Wolken und Niederschlag entstehen. Deshalb bringen Tiefs Regen und Hochs Sonne.
```

```aufgabe
id: p11-treibhaus
titel: Temperatur der Erde ohne Treibhauseffekt
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Die Sonne liefert $S = 1361\,\text{W/m}^2$, die Erde reflektiert $30\,\%$ (Albedo). Im Strahlungsgleichgewicht gilt ohne Treibhauseffekt
  $$S\,(1 - 0{,}30)\cdot\pi R^2 = \sigma T^4\cdot 4\pi R^2$$
  mit $\sigma = 5{,}67\cdot 10^{-8}\,\text{W/(m}^2\text{K}^4)$.

  a) Berechne die Gleichgewichtstemperatur in °C.

  b) Wie groß ist der natürliche Treibhauseffekt, wenn die tatsächliche Mitteltemperatur $15\,^\circ\text{C}$ beträgt?
teile:
  - typ: zahl
    label: a) Gleichgewichtstemperatur
    loesung: "(1361*0.70/(4*5.67e-8))^0.25-273.15"
    einheit: "°C"
    anzeige: '-18{,}6'
    fehler:
      - wert: "(1361*0.70/(5.67e-8))^0.25-273.15"
        meldung: Du hast den Faktor $4$ vergessen. Die Erde fängt mit $\pi R^2$ ein und strahlt mit $4\pi R^2$ ab.
  - typ: zahl
    label: b) Treibhauseffekt
    loesung: "15-((1361*0.70/(4*5.67e-8))^0.25-273.15)"
    einheit: "K"
    anzeige: '33{,}6'
hinweise:
  - 'Die Erde fängt Strahlung mit der Querschnittsfläche $\pi R^2$ ein, strahlt aber über die ganze Oberfläche $4\pi R^2$ ab. $R$ kürzt sich.'
  - '$T = \left(\dfrac{S(1 - a)}{4\sigma}\right)^{1/4}$. Ziehe zweimal die Quadratwurzel oder rechne hoch $0{,}25$.'
loesung: |
  **Ansatz:** $\pi R^2$ kürzt sich auf beiden Seiten, es bleibt $S(1 - a) = 4\sigma T^4$.
  ---
  **Umstellen:** $T^4 = \dfrac{1361\,\text{W/m}^2\cdot 0{,}70}{4\cdot 5{,}67\cdot 10^{-8}\,\text{W/(m}^2\text{K}^4)} = 4{,}20\cdot 10^{9}\,\text{K}^4$.
  ---
  **a)** $T = (4{,}20\cdot 10^9\,\text{K}^4)^{1/4} = 254{,}6\,\text{K} = -18{,}6\,^\circ\text{C}$.
  ---
  **b)** Treibhauseffekt: $15\,^\circ\text{C} - (-18{,}6\,^\circ\text{C}) = 33{,}6\,\text{K}$. Ohne Treibhausgase wäre die Erde ein Eisball.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus den Kapiteln
[Temperatur, Wärme und Gasgesetze](/lernen/physik1/temperatur-waerme-gase),
[Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls),
[Hydro- und Aeromechanik](/lernen/physik1/hydro-aeromechanik) und
[Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation) gemischt. Das ist Absicht: In der
Prüfung steht nicht dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren
passt?“ musst du nichts rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p11-mix-mischung
titel: Heißes und kaltes Wasser mischen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  $0{,}30\,\text{kg}$ Wasser mit $80\,^\circ\text{C}$ werden mit $0{,}20\,\text{kg}$ Wasser mit $20\,^\circ\text{C}$ gemischt. Wärmeverluste an die Umgebung vernachlässigen wir. Welche Mischtemperatur stellt sich ein?
teile:
  - typ: zahl
    loesung: "(0.3*80+0.2*20)/0.5"
    einheit: "°C"
    anzeige: '56'
    fehler:
      - wert: "(80+20)/2"
        meldung: Das einfache Mittel gilt nur bei gleichen Massen. Hier ist mehr heißes Wasser da, also liegt die Mischtemperatur näher bei $80\,^\circ\text{C}$.
hinweise:
  - 'Die vom heißen Wasser abgegebene Wärme ist gleich der vom kalten aufgenommenen: $m_1 c(80 - T_m) = m_2 c(T_m - 20)$.'
loesung: |
  **Ansatz:** Energieerhaltung, abgegebene gleich aufgenommene Wärme. Die spezifische Wärmekapazität $c$ kürzt sich, weil beide Portionen Wasser sind.
  ---
  $0{,}30\,(80 - T_m) = 0{,}20\,(T_m - 20)$, also $24 - 0{,}30\,T_m = 0{,}20\,T_m - 4$ und $T_m = 28/0{,}50 = 56\,^\circ\text{C}$.
  ---
  Probe: Das heiße Wasser kühlt um $24\,\text{K}$ ab, das kalte erwärmt sich um $36\,\text{K}$. Das Verhältnis $36:24 = 3:2$ ist das umgekehrte Massenverhältnis. Wiederholen: [10.5 Mischungsrechnung und Kalorimeter](/lernen/physik1/temperatur-waerme-gase/mischungsrechnung-und-kalorimeter).
```

```aufgabe
id: p11-mix-reifen
titel: Reifendruck an einem heißen Tag
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Autoreifen hat bei $10\,^\circ\text{C}$ einen Druck von $2{,}2\,\text{bar}$. Nach einer Fahrt in der Sonne hat die Luft im Reifen $40\,^\circ\text{C}$. Das Volumen bleibt fast gleich. Wie groß ist der Druck jetzt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "2.2*313.15/283.15"
    einheit: "bar"
    anzeige: '2{,}43'
    fehler:
      - wert: "2.2*40/10"
        meldung: Du hast mit Grad Celsius gerechnet. Der Druck ist proportional zur absoluten Temperatur in Kelvin.
hinweise:
  - Bei konstantem Volumen gilt $p/T = $ konstant (Amontons), mit $T$ in Kelvin.
loesung: |
  **Ansatz:** Isochor, also $p_2 = p_1\cdot T_2/T_1$ mit Kelvin-Temperaturen.
  ---
  $p_2 = 2{,}2\,\text{bar}\cdot\dfrac{313{,}15\,\text{K}}{283{,}15\,\text{K}} = 2{,}43\,\text{bar}$. Der Druck steigt um gut $10\,\%$. Wiederholen: [10.9 Die Gasgesetze](/lernen/physik1/temperatur-waerme-gase/die-gasgesetze).
```

```aufgabe
id: p11-mix-omega
titel: Winkelgeschwindigkeit der Erde
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Erde dreht sich in $86\,164\,\text{s}$ einmal um ihre Achse. Wie groß ist ihre Winkelgeschwindigkeit in $1/\text{s}$? Gib das Ergebnis in wissenschaftlicher Schreibweise an.
teile:
  - typ: zahl
    loesung: "2*pi/86164"
    einheit: "1/s"
    anzeige: '7{,}29\cdot 10^{-5}'
    fehler:
      - wert: "2*pi/24"
        meldung: Du hast die Zeit in Stunden eingesetzt. Für die Einheit $1/\text{s}$ brauchst du Sekunden.
      - wert: "1/86164"
        meldung: Das ist die Drehfrequenz. Die Winkelgeschwindigkeit ist $2\pi$ mal so groß, denn eine Umdrehung sind $2\pi$ im Bogenmaß.
hinweise:
  - '$\omega = 2\pi/T$, wobei eine volle Umdrehung $2\pi$ im Bogenmaß ist.'
loesung: |
  **Ansatz:** $\omega = \dfrac{2\pi}{T}$ für eine gleichförmige Kreisbewegung.
  ---
  $\omega = \dfrac{2\pi}{86\,164\,\text{s}} = 7{,}29\cdot 10^{-5}\,\text{1/s}$. Dieser kleine Wert erklärt, warum die Corioliskraft nur bei großräumigen Bewegungen auffällt. Wiederholen: [6.1 Kreisbewegung beschreiben: Periode, Frequenz, Winkelgeschwindigkeit](/lernen/physik1/kreisbewegung-gravitation/kreisbewegung-beschreiben-periode-frequenz-winkelgeschwindigkeit).
```

```aufgabe
id: p11-mix-verfahren-1
titel: "Welches Verfahren passt? Spraydose in der Sonne"
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine verschlossene Spraydose liegt in der Sonne. Gesucht ist die Wärme, die das Gas darin aufnimmt, wenn es sich um $\Delta T$ erwärmt. Welcher Ansatz passt? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - '$Q = n\,C_V\,\Delta T$, weil das Volumen konstant ist und keine Arbeit verrichtet wird.'
      - '$Q = n\,C_p\,\Delta T$, weil der Druck steigt.'
      - '$Q = nRT\ln(V_2/V_1)$, weil sich das Gas ausdehnen will.'
      - '$Q = 0$, weil die Dose geschlossen ist.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: $C_p$ gilt bei konstantem **Druck**. Hier ist das Volumen konstant, der Druck ändert sich gerade.
      - wert: 2
        meldung: Diese Formel gilt für isotherme Prozesse mit Volumenänderung. Die starre Dose ändert ihr Volumen nicht.
      - wert: 3
        meldung: Geschlossen heißt nicht isoliert. Die Sonne überträgt Wärme durch die Wand.
hinweise:
  - Welche Größe bleibt bei einer starren, verschlossenen Dose konstant?
loesung: |
  Die Dose ist starr, das Volumen bleibt gleich. Das ist ein isochorer Prozess mit $W = 0$.
  ---
  Also $Q = \Delta U = n\,C_V\,\Delta T$. Siehe [11.3 Isochor, isobar, isotherm](/lernen/physik1/hauptsaetze-waermekraftmaschinen/isochor-isobar-isotherm-drei-zustandsaenderungen).
```

```aufgabe
id: p11-mix-verfahren-2
titel: "Welches Verfahren passt? Eine Werbeangabe zur Wärmepumpe"
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Ein Hersteller gibt für seine Wärmepumpe an: „Leistungszahl 9 bei $0\,^\circ\text{C}$ Außenluft und $50\,^\circ\text{C}$ Vorlauf.“ Mit welchem Werkzeug prüfst du am schnellsten, ob das überhaupt möglich ist? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - 'Mit der idealen Leistungszahl $T_h/(T_h - T_k)$: Kein Wert darf darüber liegen.'
      - 'Mit dem ersten Hauptsatz $Q_h = Q_k + W$.'
      - 'Mit dem Carnot-Wirkungsgrad $1 - T_k/T_h$: Er muss größer als 9 sein.'
      - 'Gar nicht, Leistungszahlen über 1 sind immer unmöglich.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der erste Hauptsatz gilt für jede Leistungszahl. Er sagt nur, woher die Energie kommt, nicht wie groß die Leistungszahl höchstens sein darf.
      - wert: 2
        meldung: Ein Wirkungsgrad ist immer kleiner als 1. Für Wärmepumpen gibt es die eigene Grenze $T_h/(T_h - T_k)$, den Kehrwert des Carnot-Wirkungsgrads.
      - wert: 3
        meldung: Leistungszahlen über 1 sind gerade der Vorteil einer Wärmepumpe. Die Umgebungswärme kommt dazu.
hinweise:
  - Gibt es eine Obergrenze für die Leistungszahl, die nur von Temperaturen abhängt?
loesung: |
  Das passende Werkzeug ist die ideale Leistungszahl $\varepsilon_\text{C} = T_h/(T_h - T_k)$, also der Kehrwert des Carnot-Wirkungsgrads.
  ---
  Zur Kontrolle: $323{,}15/50 = 6{,}5$. Die Angabe $9$ liegt darüber und ist unmöglich. Siehe [11.8 Kühlschrank und Wärmepumpe](/lernen/physik1/hauptsaetze-waermekraftmaschinen/kuehlschrank-und-waermepumpe).
```

```aufgabe
id: p11-mix-verfahren-3
titel: "Welches Verfahren passt? Luft über dem Pass"
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Feuchte Luft strömt über einen Alpenpass. Gegeben sind die Temperatur im Tal, die Höhe der Wolkenuntergrenze und die Passhöhe. Gesucht ist die Temperatur der Luft, wenn sie auf der anderen Seite wieder im Tal ankommt. Welcher Weg passt? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Aufstieg bis zur Wolkenuntergrenze mit 1 K pro 100 m, darüber mit 0,6 K pro 100 m, Abstieg ganz mit 1 K pro 100 m."
      - "Überall mit 0,65 K pro 100 m, dem mittleren Gradienten der Atmosphäre."
      - "Aufstieg und Abstieg jeweils mit 1 K pro 100 m. Die Luft kommt mit derselben Temperatur an."
      - "Mit der barometrischen Höhenformel."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der mittlere Gradient beschreibt die ruhende Atmosphäre, nicht ein aufsteigendes Luftpaket. Hier ändert die Luft ihre Temperatur adiabatisch, mit der Kondensation als Sonderfall.
      - wert: 2
        meldung: Oberhalb der Wolkenuntergrenze wird Kondensationswärme frei. Dort kühlt die Luft nur um etwa $0{,}6\,\text{K}$ pro $100\,\text{m}$ ab. Gerade das macht den Föhn warm.
      - wert: 3
        meldung: Die barometrische Höhenformel liefert den Druck, nicht die Temperatur eines aufsteigenden Luftpakets.
hinweise:
  - Wo kondensiert Wasser, und was bedeutet das für die Abkühlung?
loesung: |
  Das ist eine Föhnaufgabe. Bis zur Wolkenuntergrenze kühlt die Luft trockenadiabatisch ab, darüber feuchtadiabatisch.
  ---
  Beim Abstieg ist sie trocken und erwärmt sich um $1\,\text{K}$ pro $100\,\text{m}$. Siehe [11.11 Luftfeuchtigkeit, Taupunkt, Wolken und Föhn](/lernen/physik1/hauptsaetze-waermekraftmaschinen/luftfeuchtigkeit-taupunkt-wolken-und-foehn).
```

```aufgabe
id: p11-mix-hubarbeit
titel: Eine Wärmekraftmaschine hebt eine Last
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Wärmekraftmaschine mit dem Wirkungsgrad $20\,\%$ hebt eine Last von $50\,\text{kg}$ um $12\,\text{m}$ ($g = 9{,}81\,\text{m/s}^2$).

  a) Wie groß ist die Hubarbeit?

  b) Wie viel Wärme muss die Maschine dafür aufnehmen?
teile:
  - typ: zahl
    label: a) Hubarbeit
    loesung: "50*9.81*12"
    einheit: "J"
    anzeige: '5886'
    fehler:
      - wert: "50*12"
        meldung: Du hast die Masse statt der Gewichtskraft genommen. Die Hubarbeit ist $m\,g\,h$.
  - typ: zahl
    label: b) aufgenommene Wärme
    loesung: "50*9.81*12/0.2"
    einheit: "J"
    anzeige: '29\,430'
    fehler:
      - wert: "50*9.81*12*0.2"
        meldung: Die aufgenommene Wärme muss **größer** sein als die Arbeit. Teile durch den Wirkungsgrad.
hinweise:
  - 'Die Hubarbeit ist Gewichtskraft mal Hubhöhe, $W = m g h$, siehe [4.1 Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).'
  - 'Aus $\eta = W/Q_\text{zu}$ folgt $Q_\text{zu} = W/\eta$.'
loesung: |
  **a)** $W = m g h = 50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 12\,\text{m} = 5886\,\text{J}$. Wiederholen: [4.1 Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).
  ---
  **b)** $Q_\text{zu} = W/\eta = 5886\,\text{J}/0{,}20 = 29\,430\,\text{J}$.
  ---
  **Deutung:** Vier Fünftel davon, $23\,544\,\text{J}$, gibt die Maschine als Abwärme ab.
```

```aufgabe
id: p11-mix-barometer
titel: Luftdruck an der Wolkenuntergrenze
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Wolkenuntergrenze liegt $1500\,\text{m}$ über dem Meer. Am Meer herrschen $1013\,\text{hPa}$. Schätze den Luftdruck an der Wolkenuntergrenze mit der barometrischen Höhenformel $p = p_0\,e^{-h/H}$ und der Skalenhöhe $H = 8{,}0\,\text{km}$ ab.
teile:
  - typ: zahl
    loesung: "1013*exp(-1500/8000)"
    einheit: "hPa"
    anzeige: '840'
    fehler:
      - wert: "1013*exp(-1500/8)"
        meldung: Du hast Meter durch Kilometer geteilt. Im Exponenten müssen Höhe und Skalenhöhe dieselbe Einheit haben, also $1{,}5\,\text{km}/8{,}0\,\text{km}$.
      - wert: "1013*(1-1500/8000)"
        meldung: Das ist eine lineare Näherung. Die Höhenformel verlangt die Exponentialfunktion, auch wenn der Unterschied hier klein ist.
hinweise:
  - Bringe Höhe und Skalenhöhe in dieselbe Einheit.
  - '$h/H = 1{,}5/8{,}0 = 0{,}1875$, dann $p = 1013\,\text{hPa}\cdot e^{-0{,}1875}$.'
loesung: |
  **Ansatz:** $p = p_0\,e^{-h/H}$ mit $h/H = 1{,}5\,\text{km}/8{,}0\,\text{km} = 0{,}1875$.
  ---
  $p = 1013\,\text{hPa}\cdot e^{-0{,}1875} = 1013\,\text{hPa}\cdot 0{,}829 = 840\,\text{hPa}$.
  ---
  **Deutung:** Die Luft, die zur Wolkenuntergrenze aufsteigt, kommt unter einen um gut $170\,\text{hPa}$ kleineren Druck. Sie dehnt sich aus und kühlt dabei adiabatisch ab. Wiederholen: [9.6 Luftdruck und die barometrische Höhenformel](/lernen/physik1/hydro-aeromechanik/luftdruck-und-die-barometrische-hoehenformel), und zur Exponentialfunktion Mathematik, [4.10 Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).
```

```aufgabe
id: p11-mix-verdampfen
titel: Wasser verdampfen und Entropie
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  $0{,}10\,\text{kg}$ Wasser von $100\,^\circ\text{C}$ werden bei Normaldruck vollständig verdampft. Die Verdampfungswärme beträgt $2257\,\text{kJ/kg}$.

  a) Wie viel Wärme ist nötig?

  b) Um wie viel steigt die Entropie des Wassers?
teile:
  - typ: zahl
    label: a) Wärme
    loesung: "0.1*2257"
    einheit: "kJ"
    anzeige: '225{,}7'
    fehler:
      - wert: "2257/0.1"
        meldung: Die Verdampfungswärme gilt pro Kilogramm. Für $0{,}10\,\text{kg}$ braucht man ein Zehntel davon.
  - typ: zahl
    label: b) Entropiezunahme
    loesung: "0.1*2257000/373.15"
    einheit: "J/K"
    anzeige: '605'
    fehler:
      - wert: "0.1*2257000/100"
        meldung: Du hast durch $100\,^\circ\text{C}$ geteilt. In $\Delta S = Q/T$ steht die absolute Temperatur, $373{,}15\,\text{K}$.
hinweise:
  - 'a) $Q = m\cdot q_v$ mit der spezifischen Verdampfungswärme $q_v = 2257\,\text{kJ/kg}$. b) Beim Sieden bleibt die Temperatur konstant, also $\Delta S = Q/T$.'
  - Rechne die Wärme in Joule um und die Temperatur in Kelvin.
loesung: |
  **a)** $Q = 0{,}10\,\text{kg}\cdot 2257\,\text{kJ/kg} = 225{,}7\,\text{kJ}$. Wiederholen: [10.6 Phasenübergänge und latente Wärme](/lernen/physik1/temperatur-waerme-gase/phasenuebergaenge-und-latente-waerme).
  ---
  **b)** $\Delta S = \dfrac{225\,700\,\text{J}}{373{,}15\,\text{K}} = 605\,\text{J/K}$.
  ---
  **Deutung:** Der Dampf hat viel mehr Möglichkeiten, seine Moleküle anzuordnen, als das Wasser. Die Entropie steigt stark.
```

```aufgabe
id: p11-mix-bremsen
titel: Ein Auto bremst bis zum Stillstand
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Auto mit $1200\,\text{kg}$ fährt mit $72\,\text{km/h}$ und bremst bis zum Stillstand. Die gesamte Bewegungsenergie wird zu Wärme, die schließlich an die Umgebungsluft mit $20\,^\circ\text{C}$ geht.

  a) Wie viel Wärme entsteht?

  b) Um wie viel steigt die Entropie der Umgebung?

  c) Warum kann man das Auto nicht mit dieser Wärme wieder auf $72\,\text{km/h}$ beschleunigen?
teile:
  - typ: zahl
    label: a) Wärme
    loesung: "0.5*1200*20^2"
    einheit: "J"
    anzeige: '2{,}4\cdot 10^{5}'
  - typ: zahl
    label: b) Entropiezunahme
    loesung: "0.5*1200*20^2/293.15"
    einheit: "J/K"
    anzeige: '819'
  - typ: text
    label: c) Begründung
    muster: |
      Die Wärme ist an die Umgebung mit einer einzigen Temperatur abgegeben worden. Um sie wieder vollständig in
      Bewegungsenergie zu verwandeln, bräuchte man eine Maschine, die Wärme aus einem einzigen Reservoir vollständig in
      Arbeit umwandelt. Das wäre ein Perpetuum mobile zweiter Art. Außerdem müsste die Entropie der Umgebung wieder um
      $819\,\text{J/K}$ sinken, ohne dass sie woanders steigt. Das verbietet der zweite Hauptsatz. Das Bremsen ist irreversibel.
hinweise:
  - 'a) $E_\text{kin} = \tfrac12 m v^2$, dazu $72\,\text{km/h} = 20\,\text{m/s}$.'
  - 'b) Die Wärme geht an Luft mit fast konstanter Temperatur, also $\Delta S = Q/T$ mit $T = 293{,}15\,\text{K}$. c) Denk an Kelvin-Planck.'
loesung: |
  **a)** $v = 72/3{,}6\,\text{m/s} = 20\,\text{m/s}$. $E_\text{kin} = \tfrac12\cdot 1200\,\text{kg}\cdot(20\,\text{m/s})^2 = 2{,}4\cdot 10^5\,\text{J}$. Diese Energie wird zu Wärme. Wiederholen: [4.3 Energie](/lernen/physik1/arbeit-energie-impuls/energie).
  ---
  **b)** $\Delta S = \dfrac{2{,}4\cdot 10^5\,\text{J}}{293{,}15\,\text{K}} = 819\,\text{J/K}$.
  ---
  **c)** Zurück ginge es nur, wenn Wärme aus einem einzigen Reservoir vollständig zu Arbeit würde, also mit einem Perpetuum mobile zweiter Art. Die Entropie der Umgebung müsste dabei sinken. Beides verbietet der zweite Hauptsatz. Elektroautos gewinnen beim Bremsen einen Teil zurück, aber nur, weil sie die Energie gar nicht erst zu Wärme werden lassen.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Punkte und ein
Sachkontext. Für jede gilt: zuerst den Prozess oder die Maschine erkennen, die Vorzeichenkonvention
hinschreiben, Temperaturen in Kelvin umrechnen und am Ende das Ergebnis auf Plausibilität prüfen. Der
Zeitrichtwert steht bei jeder Aufgabe, als Faustregel gelten etwa zwei Minuten pro Punkt.

```aufgabe
id: p11-pruefung-carnot
titel: Carnot-Maschine mit Helium
niveau: 3
punkte: 10
lernziel: 3
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 20 Minuten.* $1{,}0\,\text{mol}$ Helium (einatomig, $\kappa = 5/3$) durchläuft einen Carnot-Prozess zwischen $T_h = 700\,\text{K}$ und $T_k = 350\,\text{K}$. Die isotherme Expansion führt von $10\,\text{L}$ auf $25\,\text{L}$. Gib Energien auf ganze Joule, den Wirkungsgrad in Prozent und das Volumen auf eine Nachkommastelle an.

  a) Wie viel Wärme nimmt das Gas pro Umlauf auf? (3 P)

  b) Wie groß sind Wirkungsgrad und Nutzarbeit pro Umlauf? (3 P)

  c) Auf welches Volumen dehnt sich das Gas bei der anschließenden adiabatischen Expansion aus? (4 P)
teile:
  - typ: zahl
    label: a) aufgenommene Wärme
    loesung: "8.314*700*ln(2.5)"
    einheit: "J"
    anzeige: '5333'
  - typ: zahl
    label: b) Wirkungsgrad
    loesung: "(1-350/700)*100"
    einheit: "%"
    anzeige: '50'
  - typ: zahl
    label: b) Nutzarbeit
    loesung: "0.5*8.314*700*ln(2.5)"
    einheit: "J"
    anzeige: '2666'
  - typ: zahl
    label: c) Volumen nach der Adiabate
    loesung: "25*(700/350)^(1/(5/3-1))"
    einheit: "L"
    anzeige: '70{,}7'
hinweise:
  - 'a) Auf der heißen Isotherme ist $\Delta U = 0$, also $Q = nRT_h\ln(V_2/V_1)$.'
  - 'b) $\eta_C = 1 - T_k/T_h$, $W = \eta_C\,Q_\text{zu}$. c) $TV^{\kappa-1} = $ konstant mit $\kappa - 1 = 2/3$.'
loesung: |
  **a)** $Q_\text{zu} = nRT_h\ln\tfrac{V_2}{V_1} = 1{,}0\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 700\,\text{K}\cdot\ln 2{,}5 = 5820\,\text{J}\cdot 0{,}916 = 5333\,\text{J}$.
  ---
  **b)** $\eta_C = 1 - 350/700 = 50\,\%$. $W = 0{,}50\cdot 5333\,\text{J} = 2666\,\text{J}$. Die andere Hälfte wird bei $350\,\text{K}$ abgegeben.
  ---
  **c)** $T_hV_2^{2/3} = T_kV_3^{2/3}$, also $V_3 = V_2\left(\tfrac{T_h}{T_k}\right)^{3/2} = 25\,\text{L}\cdot 2^{1{,}5} = 70{,}7\,\text{L}$.
  ---
  **Probe:** $V_4 = 10\,\text{L}\cdot 2^{1{,}5} = 28{,}3\,\text{L}$ und $V_3/V_4 = 2{,}5 = V_2/V_1$, wie es die Herleitung des Carnot-Wirkungsgrads verlangt.
```

```aufgabe
id: p11-pruefung-heizung
titel: Wärmepumpe oder Gasheizung?
niveau: 3
punkte: 8
lernziel: 4
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Haus braucht im Mittel $12\,\text{kW}$ Heizleistung, an $2000$ Volllaststunden pro Jahr.

  a) Welche elektrische Leistung braucht eine Wärmepumpe mit der Leistungszahl $3{,}5$? (2 P)

  b) Strom kostet $0{,}30$ Euro pro kWh. Was kostet die Heizung mit Wärmepumpe pro Jahr? (3 P)

  c) Eine Gasheizung hat einen Wirkungsgrad von $95\,\%$, Gas kostet $0{,}12$ Euro pro kWh. Was kostet sie pro Jahr? (3 P)
teile:
  - typ: zahl
    label: a) elektrische Leistung
    loesung: "12/3.5"
    einheit: "kW"
    anzeige: '3{,}43'
  - typ: zahl
    label: b) Kosten Wärmepumpe
    loesung: "12/3.5*2000*0.30"
    einheit: "Euro"
    anzeige: '2057'
  - typ: zahl
    label: c) Kosten Gasheizung
    loesung: "12/0.95*2000*0.12"
    einheit: "Euro"
    anzeige: '3032'
hinweise:
  - '$P_\text{el} = P_\text{Heiz}/\varepsilon$. Energie in kWh ist Leistung in kW mal Stunden.'
  - 'Die Gasheizung braucht mehr Gas, als sie Wärme liefert: $E_\text{Gas} = E_\text{Heiz}/0{,}95$.'
loesung: |
  **a)** $P_\text{el} = 12\,\text{kW}/3{,}5 = 3{,}43\,\text{kW}$.
  ---
  **b)** $E_\text{el} = 3{,}43\,\text{kW}\cdot 2000\,\text{h} = 6857\,\text{kWh}$. Kosten $6857\cdot 0{,}30$ Euro $= 2057$ Euro.
  ---
  **c)** Gasbedarf $12\,\text{kW}/0{,}95\cdot 2000\,\text{h} = 25\,263\,\text{kWh}$. Kosten $25\,263\cdot 0{,}12$ Euro $= 3032$ Euro.
  ---
  **Vergleich:** Die Wärmepumpe ist trotz des teureren Stroms um rund $1000$ Euro im Jahr günstiger. Sie holt gut $70\,\%$ der Heizwärme aus der Umgebung.
```

```aufgabe
id: p11-pruefung-zylinder
titel: Isobare Erwärmung im Zylinder
niveau: 3
punkte: 9
lernziel: 2
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 18 Minuten.* In einem Zylinder mit frei beweglichem Kolben befinden sich $0{,}40\,\text{mol}$ Luft ($f = 5$) bei $1{,}0\,\text{bar}$ und $27\,^\circ\text{C}$. Die Luft wird bei konstantem Druck auf $177\,^\circ\text{C}$ erwärmt.

  a) Berechne Anfangs- und Endvolumen in Litern. (3 P)

  b) Wie viel Arbeit verrichtet das Gas? (2 P)

  c) Wie viel Wärme muss zugeführt werden, und um wie viel steigt die innere Energie? (4 P)
teile:
  - typ: zahl
    label: a) Anfangsvolumen
    loesung: "0.4*8.314*300.15/1e5*1000"
    einheit: "L"
    anzeige: '9{,}98'
  - typ: zahl
    label: a) Endvolumen
    loesung: "0.4*8.314*450.15/1e5*1000"
    einheit: "L"
    anzeige: '15{,}0'
  - typ: zahl
    label: b) Arbeit des Gases
    loesung: "0.4*8.314*150"
    einheit: "J"
    anzeige: '499'
  - typ: zahl
    label: c) zugeführte Wärme
    loesung: "3.5*0.4*8.314*150"
    einheit: "J"
    anzeige: '1746'
  - typ: zahl
    label: c) ΔU
    loesung: "2.5*0.4*8.314*150"
    einheit: "J"
    anzeige: '1247'
hinweise:
  - 'a) $V = nRT/p$ in SI-Einheiten, $T$ in Kelvin. b) $W_\text{vom Gas} = p\,\Delta V = nR\,\Delta T$.'
  - 'c) $\Delta U = n\,\tfrac52 R\,\Delta T$ und $Q = \Delta U + W_\text{vom Gas} = n\,\tfrac72 R\,\Delta T$.'
loesung: |
  **a)** $V_1 = \dfrac{0{,}40\cdot 8{,}314\cdot 300{,}15}{10^5}\,\text{m}^3 = 9{,}98\cdot 10^{-3}\,\text{m}^3 = 9{,}98\,\text{L}$. Isobar gilt $V \sim T$: $V_2 = 9{,}98\,\text{L}\cdot\dfrac{450{,}15}{300{,}15} = 15{,}0\,\text{L}$.
  ---
  **b)** $W_\text{vom Gas} = nR\,\Delta T = 0{,}40\,\text{mol}\cdot 8{,}314\,\tfrac{\text{J}}{\text{mol K}}\cdot 150\,\text{K} = 499\,\text{J}$. In der Kurskonvention ist $W = -499\,\text{J}$.
  ---
  **c)** $\Delta U = 0{,}40\cdot 2{,}5\cdot 8{,}314\cdot 150\,\text{J} = 1247\,\text{J}$. $Q = \Delta U - W = 1247\,\text{J} + 499\,\text{J} = 1746\,\text{J}$.
  ---
  **Probe:** $Q = n\,\tfrac72 R\,\Delta T = 1746\,\text{J}$, und $p\,\Delta V = 10^5\,\text{Pa}\cdot 4{,}99\cdot 10^{-3}\,\text{m}^3 = 499\,\text{J}$ passt zu b).
```

```aufgabe
id: p11-pruefung-stirling
titel: Ein Stirling-Kreisprozess
niveau: 3
punkte: 12
lernziel: 3
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 25 Minuten.* $0{,}25\,\text{mol}$ Helium ($f = 3$) durchlaufen einen Kreisprozess aus zwei Isothermen und zwei Isochoren:

  1. isotherme Expansion bei $600\,\text{K}$ von $1{,}0\,\text{L}$ auf $3{,}0\,\text{L}$,
  2. isochore Abkühlung auf $300\,\text{K}$,
  3. isotherme Kompression bei $300\,\text{K}$ auf $1{,}0\,\text{L}$,
  4. isochore Erwärmung zurück auf $600\,\text{K}$.

  a) Welchen Druck in bar hat das Gas zu Beginn der isothermen Expansion? (2 P)

  b) Wie viel Wärme nimmt das Gas bei der isothermen Expansion auf? (2 P)

  c) Wie groß ist die Nettoarbeit pro Umlauf? (3 P)

  d) Wie groß ist der Wirkungsgrad, wenn die Wärme für die isochore Erwärmung von außen zugeführt wird? (3 P)

  e) Vergleiche mit dem Carnot-Wirkungsgrad. Echte Stirlingmotoren speichern die Wärme der isochoren Abkühlung in einem Regenerator und geben sie bei der isochoren Erwärmung zurück. Was folgt daraus? (2 P)
teile:
  - typ: zahl
    label: a) Anfangsdruck
    loesung: "0.25*8.314*600/1e-3/1e5"
    einheit: "bar"
    anzeige: '12{,}5'
  - typ: zahl
    label: b) Wärme isotherme Expansion
    loesung: "0.25*8.314*600*ln(3)"
    einheit: "J"
    anzeige: '1370'
  - typ: zahl
    label: c) Nettoarbeit
    loesung: "0.25*8.314*(600-300)*ln(3)"
    einheit: "J"
    anzeige: '685'
  - typ: zahl
    label: d) Wirkungsgrad
    loesung: "0.25*8.314*300*ln(3)/(0.25*8.314*600*ln(3)+1.5*0.25*8.314*300)*100"
    einheit: "%"
    anzeige: '29{,}7'
  - typ: text
    label: e) Vergleich
    muster: |
      Der Carnot-Wirkungsgrad zwischen $600\,\text{K}$ und $300\,\text{K}$ ist $50\,\%$. Ohne Regenerator erreicht der
      Prozess nur $29{,}7\,\%$, weil zusätzlich $935\,\text{J}$ für die isochore Erwärmung zugeführt werden müssen. Mit
      Regenerator kommt diese Wärme aus der vorherigen isochoren Abkühlung zurück. Dann muss von außen nur die Wärme der
      heißen Isotherme zugeführt werden, also $1370\,\text{J}$, und $\eta = 685/1370 = 50\,\%$. Der ideale Stirlingprozess
      erreicht so den Carnot-Wirkungsgrad.
hinweise:
  - 'a) $p = nRT/V$ in SI. b) Isotherm $Q = nRT\ln(V_2/V_1)$. c) Isochore Schritte liefern keine Arbeit, die Nettoarbeit ist die Differenz der beiden isothermen Arbeiten.'
  - 'd) Zugeführt wird Wärme auf der heißen Isotherme und bei der isochoren Erwärmung, $n\,C_V\cdot 300\,\text{K}$. e) Carnot: $1 - T_k/T_h$.'
loesung: |
  **a)** $p = \dfrac{nRT}{V} = \dfrac{0{,}25\cdot 8{,}314\cdot 600}{1{,}0\cdot 10^{-3}}\,\text{Pa} = 1{,}25\cdot 10^6\,\text{Pa} = 12{,}5\,\text{bar}$.
  ---
  **b)** $Q_h = nRT_h\ln 3 = 0{,}25\cdot 8{,}314\cdot 600\cdot 1{,}0986\,\text{J} = 1370\,\text{J}$.
  ---
  **c)** Bei $300\,\text{K}$ gibt das Gas $Q_k = 0{,}25\cdot 8{,}314\cdot 300\cdot\ln 3\,\text{J} = 685\,\text{J}$ ab. Die Isochoren liefern keine Arbeit. Nettoarbeit $1370\,\text{J} - 685\,\text{J} = 685\,\text{J}$.
  ---
  **d)** Isochore Erwärmung: $Q = n\,C_V\,\Delta T = 0{,}25\cdot 1{,}5\cdot 8{,}314\cdot 300\,\text{J} = 935\,\text{J}$. $Q_\text{zu} = 1370\,\text{J} + 935\,\text{J} = 2305\,\text{J}$, also $\eta = 685/2305 = 29{,}7\,\%$.
  ---
  **e)** $\eta_C = 1 - 300/600 = 50\,\%$. Mit Regenerator stammen die $935\,\text{J}$ aus der vorherigen Abkühlung. Von außen kommen nur $1370\,\text{J}$, und $\eta = 685/1370 = 50\,\%$, genau die Carnot-Grenze.
```

```aufgabe
id: p11-pruefung-foehn
titel: Föhntag im Inntal
niveau: 3
punkte: 10
lernziel: 7
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Südlich des Alpenhauptkamms misst man in $300\,\text{m}$ Seehöhe $22\,^\circ\text{C}$ und einen Taupunkt von $14\,^\circ\text{C}$. Die Luft wird über einen Kamm in $2700\,\text{m}$ Höhe gehoben und sinkt auf der Nordseite bis ins Tal auf $600\,\text{m}$. Rechne mit $1\,\text{K}$ pro $100\,\text{m}$ trocken, $0{,}6\,\text{K}$ pro $100\,\text{m}$ feucht und $125\,\text{m}$ pro Kelvin für die Wolkenuntergrenze.

  a) In welcher Seehöhe liegt die Wolkenuntergrenze auf der Südseite? (2 P)

  b) Welche Temperatur hat die Luft auf dem Kamm? (3 P)

  c) Welche Temperatur hat sie im Tal auf der Nordseite in $600\,\text{m}$? (3 P)

  d) Warum ist die Luft im Norden trotz höherer Temperatur sehr trocken? (2 P)
teile:
  - typ: zahl
    label: a) Wolkenuntergrenze (Seehöhe)
    loesung: "300+125*(22-14)"
    einheit: "m"
    anzeige: '1300'
  - typ: zahl
    label: b) Temperatur am Kamm
    loesung: "22-10-0.6*14"
    einheit: "°C"
    anzeige: '3{,}6'
  - typ: zahl
    label: c) Temperatur im Norden auf 600 m
    loesung: "22-10-0.6*14+21"
    einheit: "°C"
    anzeige: '24{,}6'
  - typ: text
    label: d) Begründung
    muster: |
      Auf der Südseite hat die Luft einen Teil ihres Wasserdampfs als Regen verloren. Beim Absinken erwärmt sie sich stark,
      ihre absolute Feuchte bleibt aber klein. Warme Luft könnte viel mehr Wasser tragen, deshalb ist die relative Feuchte sehr
      niedrig. Die Luft ist warm und trocken.
hinweise:
  - 'a) Die Wolkenuntergrenze liegt $125\,\text{m}\cdot(T - \tau)$ über dem Messort. b) Bis dorthin trocken, dann feucht bis zum Kamm.'
  - 'c) Der Abstieg von $2700$ auf $600\,\text{m}$ geht ganz trockenadiabatisch. d) Denk an absolute und relative Feuchte.'
loesung: |
  **a)** $125\,\text{m}\cdot(22 - 14) = 1000\,\text{m}$ über dem Messort, also in $1300\,\text{m}$ Seehöhe.
  ---
  **b)** Trocken von $300$ auf $1300\,\text{m}$: $-10\,\text{K}$, also $12\,^\circ\text{C}$. Feucht von $1300$ auf $2700\,\text{m}$: $-0{,}6\cdot 14 = -8{,}4\,\text{K}$, also $3{,}6\,^\circ\text{C}$ am Kamm.
  ---
  **c)** Trocken hinunter von $2700$ auf $600\,\text{m}$: $+21\,\text{K}$, also $24{,}6\,^\circ\text{C}$.
  ---
  **d)** Die Luft hat im Süden Wasser verloren und ist am Kamm kalt gesättigt. Beim Absinken bleibt ihre absolute Feuchte klein, während die Sättigungsmenge stark wächst. Die relative Feuchte ist deshalb sehr niedrig.
```

```aufgabe
id: p11-pruefung-kraftwerk
titel: Ein Gas-und-Dampf-Kraftwerk am Fluss
niveau: 3
punkte: 10
lernziel: 4
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Ein Gas-und-Dampf-Kraftwerk liefert $800\,\text{MW}$ elektrische Leistung mit einem Wirkungsgrad von $58\,\%$. Die höchste Gastemperatur ist $1500\,\text{K}$, die Umgebung hat $300\,\text{K}$.

  a) Welche Leistung muss das Erdgas liefern? (2 P)

  b) Wie groß ist die Abwärmeleistung? (2 P)

  c) Wie groß ist der Carnot-Wirkungsgrad, und welchen Anteil davon erreicht das Kraftwerk? (3 P)

  d) Die Abwärme geht vollständig in einen Fluss, der $300\,\text{m}^3$ Wasser pro Sekunde führt. Um wie viel erwärmt sich der Fluss im Mittel? ($c = 4190\,\text{J/(kg K)}$, $1\,\text{m}^3$ Wasser $= 1000\,\text{kg}$) (3 P)
teile:
  - typ: zahl
    label: a) zugeführte Leistung
    loesung: "800/0.58"
    einheit: "MW"
    anzeige: '1379'
  - typ: zahl
    label: b) Abwärme
    loesung: "800/0.58-800"
    einheit: "MW"
    anzeige: '579'
  - typ: zahl
    label: c) Carnot-Wirkungsgrad
    loesung: "(1-300/1500)*100"
    einheit: "%"
    anzeige: '80'
  - typ: zahl
    label: c) erreichter Anteil
    loesung: "0.58/0.8*100"
    einheit: "%"
    anzeige: '72{,}5'
  - typ: zahl
    label: d) Erwärmung des Flusses
    loesung: "(800/0.58-800)*1e6/(300*1000*4190)"
    einheit: "K"
    anzeige: '0{,}46'
hinweise:
  - 'a) $P_\text{zu} = P_\text{el}/\eta$. b) $P_\text{ab} = P_\text{zu} - P_\text{el}$. c) $\eta_C = 1 - T_k/T_h$, dann $\eta/\eta_C$.'
  - 'd) Pro Sekunde fließen $3{,}0\cdot 10^5\,\text{kg}$ Wasser vorbei. Aus $P_\text{ab} = \dot m\,c\,\Delta T$ folgt $\Delta T$.'
loesung: |
  **a)** $P_\text{zu} = 800\,\text{MW}/0{,}58 = 1379\,\text{MW}$.
  ---
  **b)** $P_\text{ab} = 1379\,\text{MW} - 800\,\text{MW} = 579\,\text{MW}$. Hier ist die Abwärme kleiner als die Nutzleistung, weil $\eta > 50\,\%$.
  ---
  **c)** $\eta_C = 1 - 300/1500 = 80\,\%$. Das Kraftwerk erreicht $58/80 = 72{,}5\,\%$ der Grenze. Möglich ist das, weil zwei Maschinen hintereinandergeschaltet sind.
  ---
  **d)** $\dot m = 300\,\text{m}^3/\text{s}\cdot 1000\,\text{kg/m}^3 = 3{,}0\cdot 10^5\,\text{kg/s}$. $\Delta T = \dfrac{P_\text{ab}}{\dot m\,c} = \dfrac{5{,}79\cdot 10^8\,\text{W}}{3{,}0\cdot 10^5\,\tfrac{\text{kg}}{\text{s}}\cdot 4190\,\tfrac{\text{J}}{\text{kg K}}} = 0{,}46\,\text{K}$.
  ---
  **Einordnung:** Ein halbes Kelvin im Mittel klingt wenig. Direkt an der Einleitung ist die Erwärmung aber viel stärker. Deshalb begrenzen Behörden im Sommer die Leistung von Kraftwerken an kleinen Flüssen.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Die innere Energie ändert sich durch Wärme und Arbeit, $\Delta U = Q + W$, und Energie bleibt
  erhalten. (2) Jede Wärmekraftmaschine braucht ein heißes und ein kaltes Reservoir und kann höchstens den
  Carnot-Wirkungsgrad $1 - T_k/T_h$ erreichen. (3) Wärme fließt von selbst nur von warm nach kalt, und die Entropie
  eines abgeschlossenen Systems nimmt nie ab.
```

:::zusammenfassung
- **Volumenarbeit:** $W_\text{vom Gas} = p\,\Delta V$ bei konstantem Druck, allgemein die Fläche unter der Kurve im
  p-V-Diagramm. Arbeit und Wärme sind Prozessgrößen, die innere Energie ist eine Zustandsgröße. $1\,\text{bar L} = 100\,\text{J}$.
- **Erster Hauptsatz:** $\Delta U = Q + W$, mit $Q$ zugeführt und $W$ am Gas verrichtet. Beim idealen Gas
  $\Delta U = \tfrac f2\,nR\,\Delta T$. Kein Perpetuum mobile erster Art.
- **Zustandsänderungen:** isochor $W = 0$; isobar $Q = n\,C_p\,\Delta T$ mit $C_p = C_V + R$; isotherm $\Delta U = 0$,
  $Q = nRT\ln(V_2/V_1)$; adiabatisch $Q = 0$, $pV^\kappa$ und $TV^{\kappa-1}$ konstant.
- **Kreisprozesse:** Nach einem Umlauf ist $\Delta U = 0$. Die Nettoarbeit ist die eingeschlossene Fläche,
  $\eta = W_\text{nutz}/Q_\text{zu}$ mit $Q_\text{zu}$ als Summe der zugeführten Wärmen.
- **Carnot-Grenze:** $\eta \le \eta_C = 1 - T_k/T_h$, Temperaturen in Kelvin, das kalte Reservoir ist die Umgebung.
  Otto-Prozess $\eta = 1 - \varepsilon^{1-\kappa}$ mit dem Verdichtungsverhältnis $\varepsilon$.
- **Kühlschrank und Wärmepumpe:** $Q_h = Q_k + W$. Leistungszahl beim Kühlschrank $Q_k/W$, ideal $T_k/(T_h - T_k)$.
  Leistungszahl bei der Wärmepumpe $Q_h/W$, ideal $T_h/(T_h - T_k)$.
- **Zweiter und dritter Hauptsatz:** Wärme fließt von selbst nur von warm nach kalt (Clausius). Keine periodische
  Maschine wandelt Wärme aus einem Reservoir vollständig in Arbeit um (Kelvin-Planck). $\Delta S = Q/T$, im
  abgeschlossenen System $\Delta S \ge 0$, $S = k_B\ln\Omega$. Der absolute Nullpunkt ist unerreichbar.
- **Wetter:** $\varphi = f/f_\text{max}$; trocken $1\,\text{K}$, feucht $0{,}6\,\text{K}$ pro $100\,\text{m}$;
  Wolkenuntergrenze $125\,\text{m}$ pro Kelvin; Föhn; Corioliskraft lenkt auf der Nordhalbkugel nach rechts ab;
  natürlicher Treibhauseffekt rund $33\,\text{K}$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **Vorzeichen der Arbeit verwechselt.** Ausdehnung heißt $W < 0$ am Gas. Training: „Isobare Ausdehnung“ und
   „Energiebilanz eines Gases“.
2. **Bar und Liter nicht umgerechnet.** $1\,\text{bar L} = 100\,\text{J}$. Training: „Ein Gas wird zusammengedrückt“
   und „Arbeit aus einem p-V-Diagramm ablesen“.
3. **Arbeit für eine Zustandsgröße gehalten.** Training: „Welcher Weg liefert mehr Arbeit?“.
4. **„Isotherm heißt ohne Wärme“.** Isotherm ist $\Delta U = 0$, nicht $Q = 0$. Training: „Isotherme Expansion“ und
   „Isotherme Kompression“.
5. **„Keine Wärme, also keine Erwärmung“.** Adiabatische Kompression erwärmt durch Arbeit. Training: „Vorzeichen bei
   der schnellen Kompression“ und „Warme Fahrradpumpe“.
6. **Zehnerlogarithmus statt natürlichem Logarithmus.** Training: „Isotherme Expansion“ und „Entropie bei isothermer
   Ausdehnung“.
7. **Grad Celsius in Poisson, Carnot, Leistungszahl oder Entropie.** Training: „Zündung im Dieselmotor“, „Grenze eines
   Dampfkraftwerks“, „Wärmepumpe mit Grundwasser“ und „Wasser verdampfen und Entropie“.
8. **Boyle-Mariotte bei schneller Verdichtung.** Training: „Zündung im Dieselmotor“.
9. **Wirkungsgrad mit der Netto-Wärme berechnet.** In den Nenner gehört nur die zugeführte Wärme. Training:
   „Kreisprozess mit Luft in einer Tabelle auswerten“.
10. **Abgastemperatur als kaltes Reservoir.** Das kalte Reservoir ist die Umgebung. Training: „Die Carnot-Grenze eines Ottomotors“.
11. **Abwärme als Nutzleistung mal $(1 - \eta)$.** Training: „Abwärme eines Kraftwerks“.
12. **Leistungszahlen von Kühlschrank und Wärmepumpe vertauscht.** Training: „Leistungszahl eines Kühlschranks“ und
    „Mindeststrom für einen Kühlschrank“.
13. **„Der Kühlschrank erzeugt Kälte“.** Training: „Gedankenexperiment: Kühlschrank im geschlossenen Raum“.
14. **Zweiten Hauptsatz auf ein offenes Teilsystem angewendet.** Training: „Wasser gefriert“ und „Entropiebilanz eines
    Kühlschranks“.
15. **Beim Föhn-Abstieg feuchtadiabatisch gerechnet.** Training: „Föhn über den Alpen“.
16. **Drehrichtung eines Tiefs verwechselt.** Training: „Winde um ein Tief“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“,
**3** „sicher, auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf
Niveau 3.

1. Den ersten Hauptsatz mit der Vorzeichenkonvention anwenden.
2. Volumenarbeit berechnen und als Fläche im p-V-Diagramm ablesen.
3. Die vier Zustandsänderungen unterscheiden und Q, W, ΔU berechnen.
4. Einen Kreisprozess in einer Tabelle auswerten und mit Carnot vergleichen.
5. Motoren, Kraftwerk, Kühlschrank und Wärmepumpe beschreiben und berechnen.
6. Den zweiten Hauptsatz erklären und Behauptungen über Maschinen prüfen.
7. Entropieänderungen berechnen und den dritten Hauptsatz erklären.
8. Relative Feuchte, Taupunkt, Wolkenuntergrenze und Föhn berechnen.
9. Hoch, Tief, Coriolis, Fronten, Inversion und Treibhauseffekt erklären.

## Mündliche Prüfung

```karten
- id: p11-k-erster-hauptsatz
  frage: Wie lautet der erste Hauptsatz der Wärmelehre, und was verbietet er?
  antwort: |
    Die Änderung der inneren Energie eines Systems ist gleich der zugeführten Wärme plus der am System verrichteten
    Arbeit, $\Delta U = Q + W$. Er ist der Energieerhaltungssatz für thermische Vorgänge. Er verbietet ein Perpetuum
    mobile erster Art, also eine Maschine, die Arbeit ohne Energiezufuhr abgibt. Wichtig ist, die Vorzeichenkonvention
    zu nennen: Bei uns zählt alles positiv, was dem Gas zugeführt wird.
  kernpunkte: ["ΔU = Q + W", "Energieerhaltung", "Vorzeichenkonvention nennen", "kein Perpetuum mobile erster Art"]
- id: p11-k-volumenarbeit
  frage: Was ist Volumenarbeit, und wie liest man sie im p-V-Diagramm ab?
  antwort: |
    Dehnt sich ein Gas gegen einen Druck aus, schiebt es einen Kolben mit der Kraft $pA$ um eine Strecke und verrichtet
    die Arbeit $p\,\Delta V$. Im p-V-Diagramm ist die Arbeit die Fläche unter der Kurve. Bei einem Kreisprozess ist die
    Nettoarbeit die eingeschlossene Fläche. Weil verschiedene Wege verschiedene Flächen haben, ist Arbeit eine Prozessgröße.
  kernpunkte: ["W = p·ΔV aus Kraft mal Weg", "Fläche unter der Kurve", "Kreisprozess: eingeschlossene Fläche", "Prozessgröße"]
- id: p11-k-zustandsaenderungen
  frage: Beschreibe die vier Zustandsänderungen eines idealen Gases mit ihrer Energiebilanz.
  antwort: |
    Isochor: Volumen konstant, keine Arbeit, die Wärme ändert nur die innere Energie. Isobar: Druck konstant, die Wärme
    erhöht die innere Energie und leistet Volumenarbeit, $Q = n\,C_p\,\Delta T$. Isotherm: Temperatur konstant,
    $\Delta U = 0$, die aufgenommene Wärme wird ganz zu Arbeit. Adiabatisch: kein Wärmeaustausch, $\Delta U = W$, bei
    Kompression wird das Gas heiß, bei Expansion kalt.
  kernpunkte: ["isochor W = 0", "isobar Q = n·Cp·ΔT", "isotherm ΔU = 0, Q = W vom Gas", "adiabatisch Q = 0, ΔU = W"]
- id: p11-k-cp-cv
  frage: Warum ist die Wärmekapazität bei konstantem Druck größer als bei konstantem Volumen?
  antwort: |
    Bei konstantem Druck dehnt sich das Gas beim Erwärmen aus und verrichtet Volumenarbeit an der Umgebung. Diese
    Energie muss zusätzlich als Wärme zugeführt werden. Für ein Mol und ein Kelvin ist das genau $R$, also gilt
    $C_p = C_V + R$. Bei konstantem Volumen geht die ganze Wärme in die innere Energie.
  kernpunkte: ["Ausdehnung kostet Arbeit", "zusätzliche Wärme nötig", "Cp = Cv + R"]
- id: p11-k-isotherm-adiabat
  frage: Warum ist „isotherm“ nicht dasselbe wie „ohne Wärmeaustausch“, und warum ist die Adiabate steiler?
  antwort: |
    Isotherm heißt gleiche Temperatur. Damit ein Gas beim Ausdehnen nicht abkühlt, muss gerade Wärme nachfließen, so
    viel, wie es an Arbeit abgibt. Ohne Wärmeaustausch heißt adiabatisch. Dann bezahlt das Gas die Arbeit aus seiner
    inneren Energie und kühlt ab. Deshalb sinkt der Druck bei der Adiabate stärker, sie ist im p-V-Diagramm steiler.
  kernpunkte: ["isotherm: Wärme fließt nach", "adiabatisch: Q = 0, Gas kühlt ab", "Druck sinkt zusätzlich durch Abkühlung"]
- id: p11-k-waermekraftmaschine
  frage: Wie funktioniert eine Wärmekraftmaschine, und warum braucht sie zwei Reservoire?
  antwort: |
    Ein Arbeitsmittel durchläuft einen Kreisprozess. Es nimmt aus einem heißen Reservoir Wärme auf, gibt einen Teil als
    Arbeit ab und den Rest als Abwärme an ein kaltes Reservoir. Das kalte Reservoir ist nötig, damit das Gas auf dem
    Rückweg bei kleinerem Druck zusammengedrückt werden kann. Sonst bliebe keine Nettoarbeit übrig. Der Wirkungsgrad ist
    $\eta = W/Q_\text{zu} = 1 - |Q_\text{ab}|/Q_\text{zu}$.
  kernpunkte: ["Kreisprozess", "heißes und kaltes Reservoir", "Abwärme unvermeidbar", "η = W/Q_zu"]
- id: p11-k-carnot
  frage: Was ist der Carnot-Wirkungsgrad, und welche Temperatur setzt man bei einem Automotor als kalte Seite ein?
  antwort: |
    $\eta_C = 1 - T_k/T_h$ ist der höchstmögliche Wirkungsgrad einer Wärmekraftmaschine zwischen zwei Temperaturen in
    Kelvin. Er folgt aus dem zweiten Hauptsatz und hängt nicht vom Arbeitsmittel ab. Beim Automotor ist das kalte Reservoir
    die Umgebung mit etwa $300\,\text{K}$, nicht das Abgas. Das heiße Abgas ist ein Verlust. Mit $2300\,\text{K}$ Spitzentemperatur
    liegt die Grenze bei etwa $87\,\%$, reale Motoren erreichen $25$ bis $45\,\%$.
  kernpunkte: ["η_C = 1 − T_k/T_h in Kelvin", "Obergrenze aus dem zweiten Hauptsatz", "kaltes Reservoir ist die Umgebung", "Abgas ist Verlust"]
- id: p11-k-viertakt
  frage: Erkläre den Viertakt-Ottomotor und den Unterschied zum Dieselmotor.
  antwort: |
    Ansaugen des Benzin-Luft-Gemisches, Verdichten (fast adiabatisch), Zünden mit der Zündkerze und Arbeitstakt (das
    heiße Gas dehnt sich aus und treibt den Kolben), Ausstoßen der Abgase. Der Dieselmotor verdichtet nur Luft, und zwar
    viel stärker. Sie wird dabei so heiß, dass der eingespritzte Kraftstoff von selbst zündet. Wegen der höheren
    Verdichtung hat der Diesel den besseren Wirkungsgrad, denn ideal gilt $\eta = 1 - \varepsilon^{1-\kappa}$.
  kernpunkte: ["vier Takte", "adiabatische Verdichtung", "Diesel: nur Luft, Selbstzündung", "höhere Verdichtung, besserer Wirkungsgrad"]
- id: p11-k-kuehlschrank
  frage: Wie funktionieren Kühlschrank und Wärmepumpe, und warum ist ihre Leistungszahl größer als 1?
  antwort: |
    Es ist ein umgekehrter Kreisprozess. Ein Kältemittel verdampft bei niedrigem Druck und nimmt dabei Wärme aus dem
    kalten Bereich auf. Ein Kompressor verdichtet den Dampf, er kondensiert im warmen Bereich und gibt dort Wärme ab. Ein
    Drosselventil senkt den Druck wieder. Die Leistungszahl ist größer als 1, weil die Arbeit nur Wärme pumpt. Die Energie
    kommt zum größten Teil aus der kalten Umgebung, es gilt $Q_h = Q_k + W$.
  kernpunkte: ["umgekehrter Kreisprozess", "Verdampfer, Kompressor, Verflüssiger, Drossel", "Q_h = Q_k + W", "Leistungszahl größer als 1 ohne Widerspruch"]
- id: p11-k-zweiter-hauptsatz
  frage: Formuliere den zweiten Hauptsatz auf zwei Arten und erkläre, warum beide dasselbe sagen.
  antwort: |
    Clausius: Wärme fließt von selbst nur vom wärmeren zum kälteren Körper. Kelvin-Planck: Keine periodisch arbeitende
    Maschine kann Wärme aus einem einzigen Reservoir vollständig in Arbeit umwandeln. Gäbe es eine solche Maschine, könnte
    man mit ihrer Arbeit einen Kühlschrank antreiben. Beide zusammen würden Wärme ohne Aufwand vom Kalten zum Warmen
    bringen, gegen Clausius. Umgekehrt geht es ebenso.
  kernpunkte: ["Clausius", "Kelvin-Planck", "Kopplung mit Kühlschrank", "beide gleichwertig"]
- id: p11-k-perpetuum
  frage: Was ist ein Perpetuum mobile erster und zweiter Art, und warum gibt es beide nicht?
  antwort: |
    Ein Perpetuum mobile erster Art liefert Arbeit ohne Energiezufuhr, das verbietet der erste Hauptsatz. Eines zweiter
    Art hält die Energieerhaltung ein, wandelt aber Wärme aus einem einzigen Reservoir vollständig in Arbeit um, etwa ein
    Schiff, das dem Meer Wärme entzieht. Das verbietet der zweite Hauptsatz, weil ein kälteres Reservoir fehlt.
  kernpunkte: ["erste Art: Energie aus nichts", "zweite Art: Wärme aus einem Reservoir ganz in Arbeit", "jeweils der zugehörige Hauptsatz"]
- id: p11-k-entropie
  frage: Was ist Entropie, und wie hängt sie mit dem zweiten Hauptsatz zusammen?
  antwort: |
    Die Entropie ist eine Zustandsgröße. Nimmt ein Körper bei der Temperatur $T$ umkehrbar die Wärme $Q$ auf, steigt sie um
    $Q/T$. Nach Boltzmann misst sie die Zahl der Mikrozustände, $S = k_B\ln\Omega$. Im abgeschlossenen System nimmt sie nie
    ab. Fließt Wärme von heiß nach kalt, gewinnt der kalte Körper mehr Entropie, als der heiße verliert. Örtlich darf sie
    sinken, etwa im Kühlschrank, wenn sie anderswo stärker steigt.
  kernpunkte: ["ΔS = Q/T", "S = k_B ln Ω", "abgeschlossen: ΔS ≥ 0", "örtliche Abnahme erlaubt"]
- id: p11-k-dritter-hauptsatz
  frage: Was sagt der dritte Hauptsatz, und warum erreicht man den absoluten Nullpunkt nie?
  antwort: |
    Der absolute Nullpunkt ist in endlich vielen Schritten nicht erreichbar, und die Entropie eines perfekten Kristalls
    geht dort gegen null. Anschaulich: Die ideale Leistungszahl eines Kühlschranks ist $T_k/(T_h - T_k)$. Sie geht für
    $T_k \to 0$ gegen null. Jedes weitere Joule, das man entziehen will, kostet also immer mehr Arbeit.
  kernpunkte: ["0 K unerreichbar", "Entropie des Kristalls gegen null", "Leistungszahl geht gegen null"]
- id: p11-k-wolken-foehn
  frage: Wie entstehen Wolken, und warum ist der Föhn warm und trocken?
  antwort: |
    Aufsteigende Luft dehnt sich adiabatisch aus und kühlt um etwa $1\,\text{K}$ pro $100\,\text{m}$ ab. Erreicht sie den
    Taupunkt, kondensiert Wasserdampf an Kondensationskeimen, eine Wolke entsteht. Darüber kühlt sie nur noch um etwa
    $0{,}6\,\text{K}$ pro $100\,\text{m}$ ab, weil Kondensationswärme frei wird. Beim Föhn regnet die Luft auf der Luvseite
    aus und sinkt auf der Leeseite trocken ab. Sie erwärmt sich dabei um $1\,\text{K}$ pro $100\,\text{m}$, also schneller,
    als sie oberhalb der Wolkenuntergrenze abgekühlt ist. Ihre relative Feuchte ist sehr klein.
  kernpunkte: ["adiabatische Abkühlung 1 K pro 100 m", "Taupunkt und Kondensation", "feucht 0,6 K pro 100 m", "Föhn: Wasser bleibt im Luv"]
- id: p11-k-coriolis
  frage: Warum drehen sich Tiefdruckgebiete auf der Nordhalbkugel gegen den Uhrzeigersinn? Verbinde mit der Kreisbewegung.
  antwort: |
    Luft strömt vom Hoch ins Tief. Auf der rotierenden Erde hat der Boden am Äquator eine größere Ostgeschwindigkeit als
    weiter nördlich, denn $v = \omega R\cos\varphi$. Luft, die nach Norden strömt, eilt dem Boden voraus und wird nach
    rechts abgelenkt. Diese Ablenkung beschreibt man mit der Corioliskraft, einer Scheinkraft im rotierenden
    Bezugssystem. Weil jedes Luftpaket nach rechts abgelenkt wird, strömt die Luft gegen den Uhrzeigersinn ins Tief.
  kernpunkte: ["Luft strömt vom Hoch ins Tief", "v = ω·R·cos φ", "Ablenkung nach rechts", "Scheinkraft im rotierenden System"]
- id: p11-k-treibhaus
  frage: Erkläre den Treibhauseffekt mit dem Strahlungsgleichgewicht der Erde.
  antwort: |
    Die Erde nimmt Sonnenlicht mit ihrer Querschnittsfläche auf und strahlt mit der ganzen Oberfläche Infrarot ab, nach
    Stefan-Boltzmann mit $\sigma T^4$. Ohne Atmosphäre ergäbe das etwa $-18\,^\circ\text{C}$. Treibhausgase wie Wasserdampf und
    Kohlendioxid lassen Licht durch, absorbieren aber Infrarot und strahlen einen Teil zurück. Der Boden muss wärmer werden,
    um im Gleichgewicht zu bleiben. So steigt die Mitteltemperatur um rund $33\,\text{K}$ auf $+15\,^\circ\text{C}$.
    Zusätzliches Kohlendioxid verstärkt den Effekt.
  kernpunkte: ["Einstrahlung gleich Abstrahlung", "Faktor 4 aus Querschnitt und Oberfläche", "Infrarot wird absorbiert", "rund 33 K natürlicher Effekt"]
```
