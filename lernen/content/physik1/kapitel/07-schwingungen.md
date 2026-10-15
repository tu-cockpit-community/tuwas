---
nummer: 7
titel: Harmonische Schwingungen
kurz: Periodische Bewegungen und ihre Kenngrößen, die harmonische Schwingung mit Auslenkung, Geschwindigkeit und Beschleunigung, Feder- und Fadenpendel, Energie in der Schwingung, Dämpfung, erzwungene Schwingung und Resonanz.
teil: wellen
stunden: 9
pruefungsgewicht: 3
voraussetzungen: [groessen-einheiten-messen, kinematik, dynamik, arbeit-energie-impuls, kreisbewegung-gravitation]
lernziele:
  - Amplitude, Periodendauer, Frequenz, Kreisfrequenz und Nullphasenwinkel aus Angaben, Messwerten und Zeitdiagrammen bestimmen und ineinander umrechnen
  - begründen, warum eine zur Auslenkung proportionale Rückstellkraft zu einer sinusförmigen (harmonischen) Schwingung führt, und harmonische von nicht harmonischen Schwingungen unterscheiden
  - Auslenkung, Geschwindigkeit und Beschleunigung einer harmonischen Schwingung als Funktionen der Zeit aufstellen, zu gegebenen Zeiten berechnen und ihre Phasenlage im Diagramm ablesen und erklären
  - die Schwingungsdauer des Federpendels berechnen, nach Masse oder Federkonstante umstellen, auch für kombinierte Federn, und begründen, warum sie weder von der Amplitude noch von g abhängt
  - die Schwingungsdauer des Fadenpendels berechnen, die Kleinwinkelnäherung begründen und die Fallbeschleunigung aus Messdaten mit Messunsicherheit bestimmen
  - die Energieumwandlung in einer Schwingung beschreiben und mit dem Energiesatz Geschwindigkeiten, Amplituden und Energien berechnen
  - die Abklingkonstante und die Halbwertszeit der Amplitude einer gedämpften Schwingung aus Messwerten oder einer Messkurve bestimmen und die Dämpfungsfälle unterscheiden
  - erzwungene Schwingungen beschreiben, Resonanzkurven lesen, Resonanzbedingungen berechnen und Resonanz an Beispielen aus Technik und Alltag erklären
---

Eine Kinderschaukel, die Federung eines Autos, die Saite einer Gitarre, der Quarz in deiner Armbanduhr:
Alle diese Dinge **schwingen**. Sie bewegen sich immer wieder hin und her, um eine Mittellage herum.
Das Muster dahinter ist jedes Mal dasselbe. Ein Körper wird aus seiner Ruhelage gebracht. Eine Kraft
zieht ihn zurück. Wegen seiner Trägheit schießt er über die Ruhelage hinaus. Dann zieht ihn die Kraft
wieder zurück, und das Spiel beginnt von vorn.

In diesem Kapitel lernst du, solche Bewegungen genau zu beschreiben und zu berechnen. Die
Prüfungsordnung nennt das Thema ausdrücklich: „harmonische Schwingung“. Eine Schwingung heißt
**harmonisch**, wenn sie sich mit einer Sinusfunktion beschreiben lässt. Was das genau bedeutet und
warum so viele Schwingungen harmonisch sind, ist der rote Faden des Kapitels.

**Wozu brauchst du das?** Schwingungen sind eine gemeinsame Sprache für große Teile der Physik. Im
[Kapitel Wellen und Akustik](/lernen/physik1/wellen-akustik) ist eine Welle nichts anderes als viele
Schwingungen, die nacheinander ablaufen. Im [Kapitel Magnetismus und Wechselstrom](/lernen/physik1/magnetismus-wechselstrom)
schwingen Spannung und Strom mit denselben Sinusfunktionen. Wer die Begriffe hier einmal sicher
verstanden hat, erkennt sie dort sofort wieder.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung sind typische Aufgaben:

- Ein Körper hängt an einer Feder. Gesucht sind die Federkonstante, die Schwingungsdauer, die größte Geschwindigkeit und die Energie.
- Mit einem Fadenpendel wird die Fallbeschleunigung $g$ gemessen.
- Aus einem Zeitdiagramm werden Amplitude, Periodendauer und Frequenz abgelesen.
- Eine Federung oder eine Brücke wird im Takt angeregt. Bei welcher Geschwindigkeit oder Drehzahl tritt Resonanz auf?

In der mündlichen Prüfung sind Erklärungen gefragt. Klassiker sind: „Was ist eine harmonische
Schwingung?“, „Wovon hängt die Schwingungsdauer eines Pendels ab?“ und „Was ist Resonanz?“.

**Die zwei eigentlichen Hürden.** Die erste Hürde ist die **Phasenlage** von Auslenkung, Geschwindigkeit
und Beschleunigung. Im Umkehrpunkt steht der Körper kurz still, und trotzdem ist seine Beschleunigung
dort am größten. Das widerspricht dem Bauchgefühl. Die zweite Hürde ist die Aussage, dass die
Schwingungsdauer eines Federpendels **nicht** von der Amplitude abhängt. Ein weiter Ausschlag dauert also
genauso lange wie ein kleiner. Beide Gedanken bekommen in diesem Kapitel viel Platz. Lass dir dort Zeit.

:::vorwissen
Für dieses Kapitel brauchst du:

- das **Hookesche Gesetz** $F = D\cdot s$ für Federn und das Kombinieren von Federn aus der Lektion
  [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
- das **Grundgesetz** $F = m\cdot a$ aus der Lektion
  [3.2 Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung).
- **Bewegungsenergie** $\tfrac12 m v^2$ und **Spannenergie** $\tfrac12 D s^2$ aus der Lektion
  [4.3 Energie](/lernen/physik1/arbeit-energie-impuls/energie).
- die Geschwindigkeit als **Steigung im Weg-Zeit-Diagramm** aus der Lektion
  [2.5 Bewegungsdiagramme ineinander übersetzen](/lernen/physik1/kinematik/bewegungsdiagramme-ineinander-uebersetzen).
- **Winkel im Bogenmaß**, den **Einheitskreis** und die **Sinusfunktion** aus dem Mathematikkapitel
  [Trigonometrie](/lernen/mathe3/trigonometrie).
- das **Ableiten** von $\sin$ und $\cos$ mit der **Kettenregel** aus der Mathematiklektion
  [9.7 Kettenregel, höhere Ableitungen und die Wahl der richtigen Regel](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
  Ableitungen sind hilfreich, aber nicht zwingend: Jede Formel wird zusätzlich ohne sie begründet.
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen das Vorwissen. Wenn du bei einer Frage unsicher bist, folge dem Link
in der Lösung und wiederhole die Lektion kurz. Das kostet zehn Minuten und erspart dir später viel Ärger.

```aufgabe
id: p7-e-hooke
art: check
titel: Federkonstante aus Kraft und Verlängerung
niveau: 1
angabe: |
  Eine Feder verlängert sich um $2{,}5\,\text{cm}$, wenn man mit $1{,}5\,\text{N}$ an ihr zieht. Wie groß ist ihre Federkonstante $D$ in N/m?
teile:
  - typ: zahl
    loesung: "1.5/0.025"
    einheit: "N/m"
    anzeige: '60'
    fehler:
      - wert: "1.5/2.5"
        meldung: Du hast die Verlängerung in Zentimetern eingesetzt. Die Einheit N/m verlangt Meter, also $2{,}5\,\text{cm} = 0{,}025\,\text{m}$.
      - wert: "1.5*0.025"
        meldung: Du hast multipliziert. Die Federkonstante sagt, wie viel Kraft **pro** Meter Verlängerung nötig ist, also Kraft geteilt durch Verlängerung.
hinweise:
  - 'Hookesches Gesetz: $F = D\cdot s$. Stelle nach $D$ um und rechne die Verlängerung in Meter um.'
loesung: |
  Nach dem Hookeschen Gesetz ist $F = D\cdot s$. Wir teilen beide Seiten durch $s$ und erhalten $D = F/s$.
  ---
  $D = \dfrac{1{,}5\,\text{N}}{0{,}025\,\text{m}} = 60\,\text{N/m}$. Wiederholen: [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

```aufgabe
id: p7-e-bogenmass
art: check
titel: Grad in Bogenmaß umrechnen
niveau: 1
angabe: |
  Rechne den Winkel $60^\circ$ ins Bogenmaß um. Gib das Ergebnis als Dezimalzahl auf drei Nachkommastellen an.
teile:
  - typ: zahl
    loesung: "pi/3"
    anzeige: '1{,}047'
    fehler:
      - wert: "60/180"
        meldung: Du hast durch $180$ geteilt, aber nicht mit $\pi$ multipliziert. Der volle Kreis hat $360^\circ$ und im Bogenmaß $2\pi$. Also entspricht $180^\circ$ dem Wert $\pi$, nicht dem Wert $1$.
      - wert: "60*pi"
        meldung: Du hast mit $\pi$ multipliziert, aber nicht durch $180$ geteilt. Die Umrechnung lautet $\alpha_{\text{Bogenmaß}} = \alpha_{\text{Grad}}\cdot\dfrac{\pi}{180^\circ}$.
hinweise:
  - '$180^\circ$ entsprechen im Bogenmaß genau $\pi$.'
loesung: |
  Ein halber Kreis hat $180^\circ$ und im Bogenmaß die Länge $\pi$ (am Kreis mit Radius $1$). Darum multiplizieren wir mit $\dfrac{\pi}{180^\circ}$.
  ---
  $60^\circ\cdot\dfrac{\pi}{180^\circ} = \dfrac{\pi}{3} \approx 1{,}047$. Wiederholen: Mathematiklektion [5.5 Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
```

```aufgabe
id: p7-e-sinus
art: check
titel: Sinus eines Winkels im Bogenmaß
niveau: 1
angabe: |
  Berechne $\sin\left(\dfrac{\pi}{6}\right)$. Der Winkel ist im Bogenmaß angegeben.
teile:
  - typ: zahl
    loesung: "sin(pi/6)"
    anzeige: '0{,}5'
    fehler:
      - wert: "sin(inRad(pi/6))"
        meldung: Dein Taschenrechner steht im **Gradmodus**. Er hat den Sinus von $0{,}52^\circ$ berechnet. Stelle ihn auf **RAD** (Bogenmaß) um. In diesem Kapitel brauchst du fast immer das Bogenmaß.
hinweise:
  - '$\dfrac{\pi}{6}$ im Bogenmaß entspricht $30^\circ$.'
loesung: |
  $\dfrac{\pi}{6}$ im Bogenmaß ist derselbe Winkel wie $30^\circ$. Der Sinus von $30^\circ$ ist ein besonderer Wert, den man sich merken kann.
  ---
  $\sin\left(\dfrac{\pi}{6}\right) = \sin 30^\circ = 0{,}5$. Wer $0{,}009$ erhält, rechnet im Gradmodus. Wiederholen: Mathematiklektion [5.6 Besondere Werte und Quadrantenbeziehungen](/lernen/mathe3/trigonometrie/besondere-werte-und-quadrantenbeziehungen).
```

```aufgabe
id: p7-e-grundgesetz
art: check
titel: Beschleunigung aus der Kraft
niveau: 1
angabe: |
  Eine gespannte Feder zieht mit $6{,}0\,\text{N}$ an einem Wagen der Masse $2{,}0\,\text{kg}$. Andere Kräfte in Bewegungsrichtung gibt es nicht. Wie groß ist die Beschleunigung des Wagens in $\text{m/s}^2$?
teile:
  - typ: zahl
    loesung: "6/2"
    einheit: "m/s²"
    anzeige: '3'
    fehler:
      - wert: "6*2"
        meldung: Du hast Kraft und Masse multipliziert. Aus $F = m\cdot a$ folgt durch Teilen durch $m$ die Beschleunigung $a = F/m$.
      - wert: "2/6"
        meldung: Du hast den Kehrwert gebildet. Prüfe die Einheit, $\text{kg}/\text{N}$ ist keine Beschleunigung. Richtig ist $a = F/m$.
hinweise:
  - 'Grundgesetz der Mechanik: $F = m\cdot a$.'
loesung: |
  Nach dem Grundgesetz ist $F = m\cdot a$. Wir teilen durch $m$: $a = \dfrac{F}{m}$.
  ---
  $a = \dfrac{6{,}0\,\text{N}}{2{,}0\,\text{kg}} = 3{,}0\,\text{m/s}^2$, denn $1\,\text{N}/\text{kg} = 1\,\text{m/s}^2$. Wiederholen: [3.2 Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung).
```

```aufgabe
id: p7-e-spannenergie
art: check
titel: Energie einer gespannten Feder
niveau: 1
angabe: |
  Eine Feder mit $D = 400\,\text{N/m}$ ist um $5{,}0\,\text{cm}$ zusammengedrückt. Wie viel Spannenergie steckt in ihr (in J)?
teile:
  - typ: zahl
    loesung: "0.5*400*0.05^2"
    einheit: "J"
    anzeige: '0{,}5'
    fehler:
      - wert: "400*0.05^2"
        meldung: Der Faktor $\tfrac12$ fehlt. Die Spannenergie ist $\tfrac12 D s^2$, weil die Federkraft beim Zusammendrücken von $0$ an gleichmäßig wächst. Im Mittel wirkt nur die halbe Endkraft.
      - wert: "0.5*400*0.05"
        meldung: Du hast die Stauchung nicht quadriert. In der Formel $\tfrac12 D s^2$ steht $s^2$.
      - wert: "0.5*400*5^2"
        meldung: Du hast Zentimeter eingesetzt. Für Joule muss $s$ in Metern stehen, $5{,}0\,\text{cm} = 0{,}050\,\text{m}$.
hinweise:
  - 'Spannenergie: $E_{\text{sp}} = \tfrac12 D s^2$ mit $s$ in Metern.'
loesung: |
  Die Spannenergie einer Feder ist $E_{\text{sp}} = \tfrac12 D s^2$. Dabei ist $s$ die Verlängerung oder Stauchung in Metern.
  ---
  $E_{\text{sp}} = \tfrac12\cdot 400\,\text{N/m}\cdot(0{,}050\,\text{m})^2 = 200\,\text{N/m}\cdot 0{,}0025\,\text{m}^2 = 0{,}50\,\text{J}$. Wiederholen: [4.3 Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

```aufgabe
id: p7-e-ableitung
art: check
titel: Sinus mit innerer Funktion ableiten
niveau: 1
angabe: |
  Leite $f(t) = \sin(3t)$ nach $t$ ab.
teile:
  - typ: term
    variable: t
    label: "$f'(t) =$"
    loesung: "3*cos(3*t)"
    fehler:
      - wert: "cos(3*t)"
        meldung: Die **innere Ableitung** fehlt. Nach der Kettenregel wird die Ableitung der äußeren Funktion ($\cos$) mit der Ableitung der inneren Funktion $3t$ multipliziert. Die ist $3$.
      - wert: "-3*cos(3*t)"
        meldung: Das Minus gehört zur Ableitung des **Kosinus**. Die Ableitung des Sinus ist der Kosinus ohne Minus.
hinweise:
  - 'Kettenregel: äußere Ableitung mal innere Ableitung. Die innere Funktion ist $3t$.'
loesung: |
  Die äußere Funktion ist $\sin$, ihre Ableitung ist $\cos$. Die innere Funktion ist $3t$, ihre Ableitung ist $3$.
  ---
  Kettenregel: $f'(t) = \cos(3t)\cdot 3 = 3\cos(3t)$. Wiederholen: Mathematiklektion [9.7 Kettenregel, höhere Ableitungen und die Wahl der richtigen Regel](/lernen/mathe3/differentialrechnung/kettenregel-hoehere-ableitungen-und-die-wahl-der-richtigen-regel).
```

```aufgabe
id: p7-e-kreis
art: check
titel: Winkelgeschwindigkeit einer Kreisbewegung
niveau: 1
angabe: |
  Ein Punkt läuft gleichförmig im Kreis und braucht für eine Umdrehung $2{,}0\,\text{s}$. Wie groß ist seine Winkelgeschwindigkeit $\omega$ in $\text{s}^{-1}$?
teile:
  - typ: zahl
    loesung: "2*pi/2.0"
    einheit: "1/s"
    anzeige: '\pi \approx 3{,}14'
    fehler:
      - wert: "2*pi*2.0"
        meldung: Du hast mit der Umlaufzeit multipliziert. Die Winkelgeschwindigkeit ist der Winkel **pro** Zeit, also der volle Winkel $2\pi$ geteilt durch die Umlaufzeit.
      - wert: "1/2.0"
        meldung: Das ist die Drehzahl (Umdrehungen pro Sekunde). Für die Winkelgeschwindigkeit musst du noch mit dem Winkel einer Umdrehung, $2\pi$, multiplizieren.
hinweise:
  - 'Eine Umdrehung ist der Winkel $2\pi$ (im Bogenmaß).'
loesung: |
  In einer Umlaufzeit $T$ überstreicht der Punkt den vollen Winkel $2\pi$. Also ist $\omega = \dfrac{2\pi}{T}$.
  ---
  $\omega = \dfrac{2\pi}{2{,}0\,\text{s}} = \pi\,\text{s}^{-1} \approx 3{,}14\,\text{s}^{-1}$. Wiederholen: [6.1 Kreisbewegung beschreiben: Periode, Frequenz, Winkelgeschwindigkeit](/lernen/physik1/kreisbewegung-gravitation/kreisbewegung-beschreiben-periode-frequenz-winkelgeschwindigkeit).
```

## Periodische Bewegungen: Amplitude, Periode und Frequenz

```aufgabe
id: p7-1-check
art: check
titel: "Vorwissen: Millisekunden und Kehrwert"
niveau: 1
angabe: |
  Ein Vorgang wiederholt sich alle $20\,\text{ms}$ (Millisekunden). Wie oft wiederholt er sich in einer Sekunde?
teile:
  - typ: zahl
    loesung: "1/0.020"
    anzeige: '50'
    fehler:
      - wert: "1/20"
        meldung: Du hast mit $20$ statt mit $0{,}020$ gerechnet. Die Vorsilbe „Milli“ bedeutet ein Tausendstel, also $20\,\text{ms} = 0{,}020\,\text{s}$.
hinweise:
  - Rechne zuerst in Sekunden um. Dann frage dich, wie oft $0{,}020\,\text{s}$ in $1\,\text{s}$ hineinpassen.
loesung: |
  $20\,\text{ms} = 20\cdot 0{,}001\,\text{s} = 0{,}020\,\text{s}$.
  ---
  In einer Sekunde passt dieser Abschnitt $\dfrac{1\,\text{s}}{0{,}020\,\text{s}} = 50$-mal hinein. Wiederholen: [1.3 Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

Eine Bewegung heißt **periodisch**, wenn sie sich nach einer festen Zeit genau wiederholt. „Periodisch“
kommt vom griechischen Wort für „Umlauf“. Der Zeiger einer Uhr läuft periodisch, und auch dein
Herzschlag ist fast periodisch. Eine **Schwingung** (auch **Oszillation**) ist eine besondere
periodische Bewegung: Der Körper bewegt sich hin und her, um eine feste Mittellage herum. Diese
Mittellage heißt **Ruhelage**. Dort würde der Körper liegen bleiben, wenn man ihn nicht anstößt.

**Beispiele:** Eine Kinderschaukel, ein Körper an einer Feder, die Zinken einer Stimmgabel, die
Karosserie eines Autos nach einer Bodenwelle.

**Nicht-Beispiele:** Eine Kugel, die eine Rampe hinunterrollt und weiterrollt, schwingt nicht, weil sie
nicht zurückkommt. Ein Planet auf seiner Bahn bewegt sich zwar periodisch, aber nicht hin und her um
eine Ruhelage. Er läuft im Kreis herum. Ein Ball, der auf dem Boden hüpft und dabei immer niedriger
springt, ist ebenfalls nicht periodisch: Jeder Sprung sieht anders aus.

Jede Schwingung braucht zwei Zutaten:

1. Eine **Rückstellkraft**. Das ist eine Kraft, die den Körper immer zur Ruhelage zurückzieht. Bei
   einer Feder ist es die Federkraft, bei einer Schaukel ein Teil der Gewichtskraft.
2. **Trägheit**. Der Körper hat eine Masse und bleibt deshalb in Bewegung, wenn er die Ruhelage
   erreicht. Er schießt über sie hinaus. Ohne Trägheit würde er einfach in der Ruhelage stehen bleiben.

Das Wechselspiel dieser beiden Zutaten erzeugt die Schwingung. Die Trägheit hast du in der Lektion
[3.1 Kraft und Trägheit: das erste Newtonsche Axiom](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom)
kennengelernt.

```aufgabe
id: p7-1-check-schwingung
art: check
titel: Schwingung oder nicht?
niveau: 1
angabe: |
  Welche dieser Bewegungen ist eine Schwingung im Sinn der Definition? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Kind auf einer Schaukel, das immer wieder vor und zurück schwingt."
      - "Ein Auto, das mit konstanter Geschwindigkeit geradeaus fährt."
      - "Die Zinken einer angeschlagenen Stimmgabel."
      - "Die Erde auf ihrer Bahn um die Sonne."
    richtig: [0, 2]
    fehler:
      - wert: [0, 2, 3]
        meldung: Die Erde bewegt sich periodisch, aber nicht hin und her um eine Ruhelage. Sie läuft im Kreis herum. Eine Schwingung braucht eine Ruhelage und eine Rückstellkraft, die zu ihr zurückzieht.
      - wert: [0]
        meldung: Auch die Zinken einer Stimmgabel schwingen. Sie bewegen sich sehr schnell hin und her, ungefähr $440$-mal pro Sekunde. Deshalb siehst du die Bewegung nicht, aber du hörst sie.
hinweise:
  - Prüfe bei jeder Bewegung, ob es eine Ruhelage gibt, um die sich der Körper hin und her bewegt.
loesung: |
  Schaukel und Stimmgabel bewegen sich hin und her um eine Ruhelage. Eine Rückstellkraft zieht sie zurück, die Trägheit lässt sie überschießen.
  ---
  Das Auto bewegt sich nicht periodisch. Die Erde bewegt sich periodisch, aber im Kreis und nicht hin und her. Beides sind keine Schwingungen.
```

### Die Kenngrößen einer Schwingung

Um eine Schwingung zu beschreiben, braucht man ein paar Zahlen. Wir legen eine Achse durch die Ruhelage
und nennen den Ort des Körpers auf dieser Achse $x$. In der Ruhelage ist $x = 0$.

:::definition[Kenngrößen einer Schwingung]
- **Auslenkung** (auch Elongation) $x$: der momentane Abstand von der Ruhelage, **mit Vorzeichen**.
  Liegt der Körper $3\,\text{cm}$ rechts der Ruhelage, ist $x = +3\,\text{cm}$. Liegt er $3\,\text{cm}$ links, ist $x = -3\,\text{cm}$.
- **Amplitude** $A$ (auch $\hat x$, gelesen „x Dach“): die **größte** Auslenkung. Sie ist immer positiv.
- **Umkehrpunkte**: die beiden Stellen $x = +A$ und $x = -A$. Dort kehrt der Körper um.
- **Periodendauer** (auch Schwingungsdauer) $T$: die Zeit für **eine vollständige Schwingung**, in Sekunden.
- **Frequenz** $f = \dfrac{1}{T}$: die Zahl der vollständigen Schwingungen pro Sekunde. Ihre Einheit ist
  das **Hertz**, $1\,\text{Hz} = 1\,\text{s}^{-1}$, also „eins pro Sekunde“.
- **Kreisfrequenz** $\omega = 2\pi f = \dfrac{2\pi}{T}$ (gelesen „omega“), Einheit $\text{s}^{-1}$.
  Warum man sie braucht, klärt die Lektion [7.2 Die harmonische Schwingung](/lernen/physik1/schwingungen/die-harmonische-schwingung-lineares-kraftgesetz-und-sinusfunktion).
:::

Eine **vollständige Schwingung** führt den Körper von einem Zustand zurück in **genau denselben Zustand**,
also an denselben Ort mit derselben Bewegungsrichtung. Ein Beispiel ist der Weg vom rechten
Umkehrpunkt über die Ruhelage zum linken Umkehrpunkt und wieder zurück zum rechten. Der Weg von einem
Umkehrpunkt zum anderen ist dagegen nur eine **halbe** Schwingung.

Frequenz und Periodendauer sind Kehrwerte voneinander. Eine Schwingung mit $T = 0{,}25\,\text{s}$ läuft
in einer Sekunde viermal ab, also ist $f = 4\,\text{Hz}$. Eine große Periodendauer bedeutet eine kleine Frequenz.

:::beispiel[Eine Schaukel zählen]
Ein Kind schaukelt. Du zählst $12$ vollständige Schwingungen in $30\,\text{s}$.

**Schritt 1, Periodendauer:** Eine Schwingung dauert den zwölften Teil der Gesamtzeit,
$T = \dfrac{30\,\text{s}}{12} = 2{,}5\,\text{s}$.

**Schritt 2, Frequenz:** $f = \dfrac{1}{T} = \dfrac{1}{2{,}5\,\text{s}} = 0{,}40\,\text{s}^{-1} = 0{,}40\,\text{Hz}$.
Zur Kontrolle: $12$ Schwingungen in $30\,\text{s}$ sind auch direkt $12/30 = 0{,}40$ Schwingungen pro Sekunde. ✓

**Schritt 3, Kreisfrequenz:** $\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{2{,}5\,\text{s}} = 2{,}51\,\text{s}^{-1}$.
:::

:::achtung[Fehler: halbe Periode für eine ganze gehalten]
Ein Pendel braucht $0{,}80\,\text{s}$ vom linken zum rechten Umkehrpunkt. Falsch gerechnet:
$T = 0{,}80\,\text{s}$ und $f = 1{,}25\,\text{Hz}$.

Von Umkehrpunkt zu Umkehrpunkt ist nur eine **halbe** Schwingung. Erst der Rückweg schließt sie ab.
Richtig ist $T = 2\cdot 0{,}80\,\text{s} = 1{,}6\,\text{s}$ und $f = \dfrac{1}{1{,}6\,\text{s}} = 0{,}625\,\text{Hz}$.
:::

### Das Zeitdiagramm

Trägt man die Auslenkung $x$ über der Zeit $t$ auf, entsteht das **Zeitdiagramm** der Schwingung (auch
Weg-Zeit-Diagramm oder $x$-$t$-Diagramm). Es ist das wichtigste Bild dieses Kapitels. Aus ihm liest man
alle Kenngrößen ab:

- Die **Amplitude** ist der Abstand von der Nulllinie bis zum höchsten Punkt. Sie ist **nicht** der
  Abstand vom höchsten zum tiefsten Punkt, denn der beträgt $2A$.
- Die **Periodendauer** ist der zeitliche Abstand zweier gleichartiger Punkte. Das sind zum Beispiel zwei
  aufeinanderfolgende Maxima, also zwei höchste Punkte.
- Auch zwei Nulldurchgänge **in derselben Richtung** (beide steigend) sind eine Periode auseinander.
  Ein steigender und der nächste fallende Nulldurchgang liegen nur eine halbe Periode auseinander.

Im Experiment zeichnet man solche Diagramme heute mit einem Bewegungssensor oder mit einer Videoanalyse
auf. Ein Smartphone kann das mit seinem eingebauten Beschleunigungssensor ebenfalls.

```plot
x: [0, 4]
y: [-3.5, 3.5]
achsen: { x: "t in s", y: "x in cm" }
graphen:
  - { f: "2.5*sin(2*pi*x/1.6)", label: "x(t)", farbe: 0 }
strecken:
  - { von: [0.4, 2.5], nach: [2.0, 2.5], gestrichelt: true, farbe: 1 }
  - { von: [0.4, 0], nach: [0.4, 2.5], gestrichelt: true, farbe: 2 }
punkte:
  - { x: 0.4, y: 2.5, label: "Maximum" }
  - { x: 2.0, y: 2.5, label: "nächstes Maximum" }
beschriftung: "Zeitdiagramm einer Schwingung mit der Amplitude 2,5 cm und der Periodendauer 1,6 s. Die orange gestrichelte Strecke zwischen zwei Maxima ist eine Periode T. Die grüne Strecke von der Nulllinie zum Maximum ist die Amplitude A."
```

:::beispiel[Kenngrößen aus dem Zeitdiagramm ablesen]
Wir lesen das Diagramm darüber aus.

**Schritt 1, Amplitude:** Der höchste Punkt liegt bei $x = 2{,}5\,\text{cm}$, der tiefste bei
$x = -2{,}5\,\text{cm}$. Die Amplitude ist der Abstand von der Nulllinie, also $A = 2{,}5\,\text{cm}$.

**Schritt 2, Periodendauer:** Die Maxima liegen bei $t = 0{,}4\,\text{s}$ und $t = 2{,}0\,\text{s}$.
Ihr Abstand ist $T = 2{,}0\,\text{s} - 0{,}4\,\text{s} = 1{,}6\,\text{s}$. Probe mit den Nulldurchgängen: Die
Kurve steigt bei $t = 0$ und bei $t = 1{,}6\,\text{s}$ durch null. ✓

**Schritt 3, Frequenz und Kreisfrequenz:** $f = \dfrac{1}{1{,}6\,\text{s}} = 0{,}625\,\text{Hz}$ und
$\omega = 2\pi f = 3{,}93\,\text{s}^{-1}$.
:::

:::achtung[Fehler: Abstand von Berg zu Tal als Amplitude]
Im Diagramm liegt der höchste Punkt bei $+2{,}5\,\text{cm}$ und der tiefste bei $-2{,}5\,\text{cm}$.
Falsch: $A = 2{,}5\,\text{cm} - (-2{,}5\,\text{cm}) = 5{,}0\,\text{cm}$.

Die Amplitude wird von der **Ruhelage** aus gemessen, also von der Nulllinie. Richtig ist
$A = 2{,}5\,\text{cm}$. Der Abstand von Berg zu Tal heißt Spitze-Spitze-Wert und ist $2A$.
:::

### Viele Perioden auf einmal messen

Eine einzelne Periode mit der Hand zu stoppen, ist ungenau. Du drückst beim Start und beim Stopp
jeweils etwas zu früh oder zu spät. Zusammen ergibt das eine Unsicherheit von ungefähr $0{,}2\,\text{s}$.
Der Trick: Man stoppt **viele** Perioden am Stück und teilt dann durch ihre Zahl. Die Unsicherheit beim
Start und Stopp kommt nur einmal vor, wird aber auf viele Perioden verteilt. Messunsicherheiten hast du
in der Lektion [1.7 Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen)
kennengelernt.

:::beispiel[Eine Periode oder zwanzig?]
Ein Pendel hat eine Periodendauer von etwa $1{,}6\,\text{s}$. Die Handmessung hat eine Unsicherheit von $0{,}2\,\text{s}$.

**Eine Periode gestoppt:** Die relative Unsicherheit ist $\dfrac{0{,}2\,\text{s}}{1{,}6\,\text{s}} = 0{,}125 = 12{,}5\,\%$.
Das ist viel zu ungenau für eine Berechnung.

**Zwanzig Perioden gestoppt:** Die Uhr zeigt $32{,}0\,\text{s}$. Also ist
$T = \dfrac{32{,}0\,\text{s}}{20} = 1{,}60\,\text{s}$. Die Unsicherheit $0{,}2\,\text{s}$ verteilt sich auf
$20$ Perioden: $\Delta T = \dfrac{0{,}2\,\text{s}}{20} = 0{,}01\,\text{s}$. Relativ sind das nur noch
$\dfrac{0{,}01\,\text{s}}{1{,}60\,\text{s}} \approx 0{,}6\,\%$. Das Ergebnis lautet $T = (1{,}60 \pm 0{,}01)\,\text{s}$.
:::

:::pruefung
**So formulierst du Messaufgaben richtig.** In Aufgaben steht oft ein Satz wie „20 Schwingungen dauern
$31{,}4\,\text{s}$“. Teile als Erstes durch die Zahl der Schwingungen und schreibe die Periodendauer
hin: „$T = 31{,}4\,\text{s} : 20 = 1{,}57\,\text{s}$“. In der mündlichen Prüfung wird gern gefragt, warum
man viele Perioden stoppt. Die Antwort lautet: „Die Reaktionszeit beim Starten und Stoppen fällt nur
einmal an und verteilt sich auf alle Perioden. Dadurch wird die relative Unsicherheit kleiner.“
:::

Zum Abschluss ein Gefühl für die Größenordnungen. Eine Kinderschaukel schwingt mit ungefähr
$0{,}4\,\text{Hz}$. Dein Herz schlägt in Ruhe mit etwa $1{,}2\,\text{Hz}$, also gut einmal pro Sekunde. Die
Stimmgabel für den Kammerton a schwingt mit $440\,\text{Hz}$. Der Quarz in einer Armbanduhr schwingt mit
$32\,768\,\text{Hz}$, und der Takt eines Computerprozessors liegt bei einigen Gigahertz, also Milliarden
Schwingungen pro Sekunde.

```reflexion
frage: Warum stoppt man bei einem Pendel die Zeit für zwanzig Schwingungen und nicht für eine? Erkläre es so, dass es jemand ohne Formeln versteht.
antwort: |
  Beim Stoppen mit der Hand entsteht ein Fehler beim Drücken am Anfang und am Ende, zusammen etwa
  $0{,}2\,\text{s}$. Dieser Fehler entsteht nur einmal, egal ob ich eine oder zwanzig Schwingungen stoppe. Bei
  einer Schwingung von $1{,}6\,\text{s}$ ist $0{,}2\,\text{s}$ ein großer Anteil. Bei zwanzig Schwingungen
  ($32\,\text{s}$) ist derselbe Fehler nur noch ein winziger Anteil. Teile ich am Ende durch $20$, wird auch der
  Fehler durch $20$ geteilt. Die Periodendauer wird dadurch etwa zwanzigmal genauer.
```

### Aufgaben zu den Kenngrößen

```aufgabe
id: p7-periode-frequenz
titel: Periode und Frequenz
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Pendel macht in $15\,\text{s}$ genau 20 vollständige Schwingungen. Berechne die Periodendauer in s und die Frequenz in Hz. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Periodendauer
    loesung: "15/20"
    einheit: "s"
    anzeige: '0{,}750'
    fehler:
      - wert: "20/15"
        meldung: Du hast Schwingungen durch Zeit geteilt. Das ist die Frequenz. Die Periodendauer ist die Zeit **für eine** Schwingung, also Gesamtzeit geteilt durch die Zahl der Schwingungen.
  - typ: zahl
    label: Frequenz
    loesung: "20/15"
    einheit: "Hz"
    anzeige: '1{,}33'
    fehler:
      - wert: "15/20"
        meldung: Das ist die Periodendauer. Die Frequenz ist ihr Kehrwert, also die Zahl der Schwingungen pro Sekunde.
hinweise:
  - Die Periodendauer ist die Zeit für eine einzige Schwingung. Die Frequenz ist ihr Kehrwert.
loesung: |
  **Periodendauer:** 20 Schwingungen dauern $15\,\text{s}$, eine Schwingung also $T = \dfrac{15\,\text{s}}{20} = 0{,}75\,\text{s}$.
  ---
  **Frequenz:** $f = \dfrac{1}{T} = \dfrac{1}{0{,}75\,\text{s}} = 1{,}33\,\text{Hz}$. Kontrolle: 20 Schwingungen in 15 Sekunden sind gut eine Schwingung pro Sekunde. ✓
```

```aufgabe
id: p7-kreisfrequenz
titel: Netzfrequenz
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Wechselspannung im europäischen Stromnetz hat die Frequenz $50\,\text{Hz}$. Berechne die Periodendauer in s und die Kreisfrequenz in $\text{s}^{-1}$ (auf eine Nachkommastelle).
teile:
  - typ: zahl
    label: Periodendauer
    loesung: "1/50"
    einheit: "s"
    anzeige: '0{,}02'
    fehler:
      - wert: "50"
        meldung: Das ist die Frequenz. Die Periodendauer ist ihr Kehrwert, $T = 1/f$.
  - typ: zahl
    label: Kreisfrequenz
    loesung: "2*pi*50"
    einheit: "1/s"
    anzeige: '314{,}2'
    fehler:
      - wert: "2*pi/50"
        meldung: Du hast durch die Frequenz geteilt. Es gilt $\omega = 2\pi f$ oder gleichwertig $\omega = 2\pi/T$. Durch $T$ teilen heißt mit $f$ multiplizieren.
      - wert: "50"
        meldung: Frequenz und Kreisfrequenz sind verschiedene Größen. Die Kreisfrequenz ist $2\pi$-mal so groß wie die Frequenz.
hinweise:
  - '$T = 1/f$ und $\omega = 2\pi f$.'
loesung: |
  **Periodendauer:** $T = \dfrac{1}{f} = \dfrac{1}{50\,\text{s}^{-1}} = 0{,}020\,\text{s} = 20\,\text{ms}$.
  ---
  **Kreisfrequenz:** $\omega = 2\pi f = 2\pi\cdot 50\,\text{s}^{-1} = 314{,}2\,\text{s}^{-1}$. Probe: $\omega T = 314{,}2\,\text{s}^{-1}\cdot 0{,}020\,\text{s} = 6{,}28 = 2\pi$. ✓
```

```aufgabe
id: p7-1-quarz
titel: Der Quarz in der Uhr
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Der Quarz einer Armbanduhr schwingt mit $32\,768\,\text{Hz}$. Wie lange dauert eine einzige Schwingung? Gib das Ergebnis in Mikrosekunden ($1\,\mu\text{s} = 10^{-6}\,\text{s}$) auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "1/32768*10^6"
    einheit: "µs"
    anzeige: '30{,}5'
    fehler:
      - wert: "1/32768"
        meldung: Das ist die Periodendauer in **Sekunden**. Gefragt sind Mikrosekunden. Multipliziere mit $10^6$, weil eine Sekunde eine Million Mikrosekunden hat.
hinweise:
  - '$T = 1/f$, dann von Sekunden in Mikrosekunden umrechnen.'
loesung: |
  **Periodendauer:** $T = \dfrac{1}{f} = \dfrac{1}{32\,768\,\text{s}^{-1}} = 3{,}05\cdot 10^{-5}\,\text{s}$.
  ---
  **Umrechnen:** $3{,}05\cdot 10^{-5}\,\text{s} = 30{,}5\cdot 10^{-6}\,\text{s} = 30{,}5\,\mu\text{s}$. Die Zahl $32\,768 = 2^{15}$ ist kein Zufall: Ein Zähler halbiert sie fünfzehnmal und erhält genau einen Puls pro Sekunde.
```

```aufgabe
id: p7-1-diagramm
titel: Kenngrößen aus einem Diagramm ablesen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Auslenkung eines schwingenden Körpers über der Zeit. Bei A und B liegen zwei aufeinanderfolgende Maxima. Lies die Amplitude (in cm) und die Periodendauer (in s) ab und berechne die Frequenz (in Hz).
plot:
  x: [0, 2]
  y: [-5, 5]
  achsen: { x: "t in s", y: "x in cm" }
  graphen:
    - { f: "4*sin(2*pi*x/0.8)", farbe: 0 }
  punkte:
    - { x: 0.2, y: 4, label: "A" }
    - { x: 1.0, y: 4, label: "B" }
  strecken:
    - { von: [0.2, 0], nach: [0.2, 4], gestrichelt: true, farbe: 2 }
    - { von: [1.0, 0], nach: [1.0, 4], gestrichelt: true, farbe: 2 }
teile:
  - typ: zahl
    label: Amplitude
    loesung: "4"
    einheit: "cm"
    fehler:
      - wert: "8"
        meldung: Du hast den Abstand vom höchsten zum tiefsten Punkt genommen. Die Amplitude misst man von der Nulllinie (der Ruhelage) aus.
  - typ: zahl
    label: Periodendauer
    loesung: "1.0-0.2"
    einheit: "s"
    anzeige: '0{,}8'
    fehler:
      - wert: "0.4"
        meldung: Das ist der Abstand zweier benachbarter Nulldurchgänge, einer steigend und einer fallend. Das ist nur eine halbe Periode. Nimm den Abstand der beiden Maxima A und B.
      - wert: "1.0"
        meldung: Du hast die Zeit von B abgelesen, aber nicht die von A abgezogen. Die Periode ist der **Abstand** der beiden Maxima.
  - typ: zahl
    label: Frequenz
    loesung: "1/0.8"
    einheit: "Hz"
    anzeige: '1{,}25'
    fehler:
      - wert: "0.8"
        meldung: Das ist die Periodendauer. Die Frequenz ist ihr Kehrwert.
hinweise:
  - Die Amplitude misst man von der Nulllinie bis zum Maximum.
  - Die Periode ist der zeitliche Abstand der Maxima A und B. Lies beide Zeiten an der Achse ab und subtrahiere.
gefuehrt:
  - text: Bei welcher Auslenkung liegen die Maxima? Das ist die Amplitude in cm.
    teil: { typ: zahl, loesung: "4", einheit: "cm" }
    erklaerung: Die Maxima liegen bei $x = 4\,\text{cm}$. Gemessen von der Nulllinie aus ist $A = 4\,\text{cm}$.
  - text: Bei welcher Zeit liegt das Maximum A, bei welcher B? Gib den Abstand in s ein.
    teil: { typ: zahl, loesung: "0.8", einheit: "s" }
    erklaerung: A liegt bei $0{,}2\,\text{s}$, B bei $1{,}0\,\text{s}$. Der Abstand ist $T = 0{,}8\,\text{s}$.
  - text: Berechne die Frequenz in Hz.
    teil: { typ: zahl, loesung: "1/0.8", einheit: "Hz" }
    erklaerung: $f = 1/T = 1/0{,}8\,\text{s} = 1{,}25\,\text{Hz}$.
  - text: Berechne zum Schluss die Kreisfrequenz in $\text{s}^{-1}$.
    teil: { typ: zahl, loesung: "2*pi/0.8", einheit: "1/s" }
    erklaerung: $\omega = 2\pi/T = 2\pi/0{,}8\,\text{s} = 7{,}85\,\text{s}^{-1}$.
loesung: |
  **Amplitude:** Die Maxima liegen bei $x = 4\,\text{cm}$, die Minima bei $x = -4\,\text{cm}$. Von der Nulllinie aus gemessen ist $A = 4\,\text{cm}$.
  ---
  **Periodendauer:** A liegt bei $t = 0{,}2\,\text{s}$, B bei $t = 1{,}0\,\text{s}$. Zwei aufeinanderfolgende Maxima sind genau eine Periode auseinander: $T = 1{,}0\,\text{s} - 0{,}2\,\text{s} = 0{,}8\,\text{s}$.
  ---
  **Frequenz:** $f = \dfrac{1}{T} = \dfrac{1}{0{,}8\,\text{s}} = 1{,}25\,\text{Hz}$. Kontrolle im Diagramm: In $2\,\text{s}$ laufen zweieinhalb Schwingungen ab, und $2{,}5 : 2\,\text{s} = 1{,}25\,\text{Hz}$. ✓
```

```aufgabe
id: p7-1-fehler-finden
titel: Fehler finden beim Pendel
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Mitschüler beobachtet ein Pendel. Es braucht $0{,}90\,\text{s}$ vom linken bis zum rechten Umkehrpunkt. Er schreibt: „$T = 0{,}90\,\text{s}$, also $f = 1/0{,}90\,\text{s} = 1{,}11\,\text{Hz}$.“ Welche Frequenz hat das Pendel wirklich? Gib sie in Hz auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "1/(2*0.90)"
    einheit: "Hz"
    anzeige: '0{,}556'
    fehler:
      - wert: "1/0.90"
        meldung: Das ist das Ergebnis des Mitschülers. Von einem Umkehrpunkt zum anderen ist aber nur eine **halbe** Schwingung. Erst der Rückweg schließt die Schwingung ab.
      - wert: "1/(0.5*0.90)"
        meldung: Du hast die Zeit halbiert statt verdoppelt. Eine ganze Schwingung dauert **länger** als eine halbe, nämlich doppelt so lange.
hinweise:
  - Was ist eine vollständige Schwingung? Kommt das Pendel am rechten Umkehrpunkt wieder in seinen Anfangszustand?
  - Eine vollständige Schwingung führt vom linken Umkehrpunkt zum rechten und wieder zurück zum linken.
loesung: |
  **Ansatz:** Eine vollständige Schwingung endet erst, wenn das Pendel wieder am **selben** Ort mit derselben Bewegungsrichtung ist. Am rechten Umkehrpunkt ist erst die Hälfte geschafft.
  ---
  **Periodendauer:** Der Rückweg dauert ebenfalls $0{,}90\,\text{s}$. Also ist $T = 2\cdot 0{,}90\,\text{s} = 1{,}80\,\text{s}$.
  ---
  **Frequenz:** $f = \dfrac{1}{1{,}80\,\text{s}} = 0{,}556\,\text{Hz}$. Der Mitschüler hat eine doppelt so große Frequenz angegeben, weil er nur eine halbe Schwingung gezählt hat.
```

```aufgabe
id: p7-1-kreisfrequenz-umkehr
titel: Von der Kreisfrequenz zurück
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine Schwingung hat die Kreisfrequenz $\omega = 12{,}0\,\text{s}^{-1}$. Berechne die Periodendauer in s auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "2*pi/12"
    einheit: "s"
    anzeige: '0{,}524'
    fehler:
      - wert: "1/12"
        meldung: Du hast $\omega$ wie eine Frequenz behandelt. Für die Frequenz gilt $T = 1/f$. Für die Kreisfrequenz gilt aber $T = 2\pi/\omega$.
      - wert: "12/(2*pi)"
        meldung: Das ist die Frequenz $f = \omega/(2\pi)$. Gesucht ist die Periodendauer, ihr Kehrwert.
hinweise:
  - 'Die Kreisfrequenz ist $\omega = 2\pi/T$.'
  - 'Multipliziere beide Seiten mit $T$ und teile dann durch $\omega$.'
loesung: |
  **Ansatz:** Die Kreisfrequenz ist definiert als $\omega = \dfrac{2\pi}{T}$. Wir lösen nach $T$ auf: mit $T$ multiplizieren und durch $\omega$ teilen ergibt $T = \dfrac{2\pi}{\omega}$.
  ---
  **Rechnung:** $T = \dfrac{2\pi}{12{,}0\,\text{s}^{-1}} = 0{,}524\,\text{s}$.
  ---
  **Kontrolle:** $f = 1/T = 1{,}91\,\text{Hz}$ und $2\pi\cdot 1{,}91\,\text{Hz} = 12{,}0\,\text{s}^{-1}$. ✓
```

```aufgabe
id: p7-1-herzschlag
titel: Herzschläge in einem Leben
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Schätze ab: Wie oft schlägt ein menschliches Herz in einem 80 Jahre langen Leben? Rechne mit einer mittleren Frequenz von etwa 70 Schlägen pro Minute. Wähle die passende Größenordnung.
teile:
  - typ: auswahl
    optionen:
      - "etwa $1\\cdot 10^{5}$"
      - "etwa $4\\cdot 10^{7}$"
      - "etwa $3\\cdot 10^{9}$"
      - "etwa $2\\cdot 10^{11}$"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: So oft schlägt das Herz an **einem Tag**. Du musst noch mit der Zahl der Tage in 80 Jahren multiplizieren.
      - wert: 1
        meldung: So oft schlägt das Herz in **einem Jahr**. Für ein ganzes Leben fehlt der Faktor $80$.
      - wert: 3
        meldung: Du hast vermutlich 70 Schläge pro **Sekunde** statt pro Minute gerechnet. Das ist um den Faktor $60$ zu viel.
hinweise:
  - Rechne Schritt für Schritt hoch, von Minute auf Stunde, Tag, Jahr und Leben.
  - 'Eine Stunde hat $60$ Minuten, ein Tag $24$ Stunden, ein Jahr etwa $365$ Tage.'
loesung: |
  **Ansatz:** Eine Größenordnung schätzt man, indem man eine bekannte Rate mit einer langen Zeit multipliziert. Genauigkeit auf eine Stelle genügt.
  ---
  **Pro Tag:** $70\cdot 60\cdot 24 \approx 1{,}0\cdot 10^{5}$ Schläge. **Pro Jahr:** $1{,}0\cdot 10^{5}\cdot 365 \approx 3{,}7\cdot 10^{7}$ Schläge.
  ---
  **Pro Leben:** $3{,}7\cdot 10^{7}\cdot 80 \approx 2{,}9\cdot 10^{9}$, also etwa drei Milliarden Herzschläge. Die Frequenz von gut $1\,\text{Hz}$ macht es leicht nachzuprüfen: Ein Leben hat etwa $2{,}5\cdot 10^{9}\,\text{s}$.
```

```aufgabe
id: p7-1-messunsicherheit
titel: Wie viele Perioden muss man stoppen?
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Du misst die Periodendauer eines Pendels mit der Hand-Stoppuhr. Die Unsicherheit einer Zeitmessung beträgt etwa $0{,}2\,\text{s}$, und das Pendel hat ungefähr $T = 1{,}2\,\text{s}$.

  a) Wie groß ist die relative Unsicherheit von $T$ in Prozent, wenn du nur eine einzige Periode stoppst? Runde auf eine Nachkommastelle.

  b) Wie viele Perioden musst du mindestens am Stück stoppen, damit die relative Unsicherheit von $T$ höchstens $1\,\%$ beträgt? Gib eine ganze Zahl an.
teile:
  - typ: zahl
    label: a) relative Unsicherheit
    loesung: "0.2/1.2*100"
    einheit: "%"
    anzeige: '16{,}7'
    fehler:
      - wert: "1.2/0.2*100"
        meldung: Du hast den Kehrwert gebildet. Die relative Unsicherheit ist Unsicherheit **geteilt durch** den Messwert.
  - typ: zahl
    label: b) Zahl der Perioden
    loesung: "17"
    toleranz: 0.1
    fehler:
      - wert: "16"
        meldung: Mit $16$ Perioden ist die relative Unsicherheit $0{,}2/(16\cdot 1{,}2) = 1{,}04\,\%$, also noch knapp über $1\,\%$. Weil man nur ganze Perioden stoppen kann, musst du **aufrunden**.
      - wert: "100"
        meldung: Mit $100$ Perioden bist du auf der sicheren Seite, aber gefragt ist die **kleinste** Zahl, die genügt. Rechne nach, ab welcher Zahl $n$ die Bedingung erfüllt ist.
hinweise:
  - 'Relative Unsicherheit heißt: Unsicherheit geteilt durch den Messwert.'
  - 'Bei $n$ Perioden misst du die Zeit $n\cdot 1{,}2\,\text{s}$ mit derselben Unsicherheit $0{,}2\,\text{s}$. Löse $0{,}2/(n\cdot 1{,}2) \le 0{,}01$ nach $n$ auf.'
loesung: |
  **Ansatz:** Die Unsicherheit $0{,}2\,\text{s}$ entsteht beim Starten und Stoppen. Sie hängt nicht davon ab, wie lange man misst. Die relative Unsicherheit ist sie geteilt durch die gemessene Zeit.
  ---
  **a)** Eine Periode: $\dfrac{0{,}2\,\text{s}}{1{,}2\,\text{s}} = 0{,}167 = 16{,}7\,\%$.
  ---
  **b)** Bei $n$ Perioden misst man $n\cdot 1{,}2\,\text{s}$. Bedingung: $\dfrac{0{,}2\,\text{s}}{n\cdot 1{,}2\,\text{s}} \le 0{,}01$. Wir multiplizieren mit $n$ und teilen durch $0{,}01$: $n \ge \dfrac{0{,}2}{0{,}012} = 16{,}7$.
  ---
  **Antwort:** Man braucht mindestens $n = 17$ Perioden, denn $16$ reichen knapp nicht. Probe: $0{,}2/(17\cdot 1{,}2) = 0{,}0098 = 0{,}98\,\%$. ✓
```

## Die harmonische Schwingung: lineares Kraftgesetz und Sinusfunktion

```aufgabe
id: p7-2-check
art: check
titel: "Vorwissen: Richtung der Federkraft"
niveau: 1
angabe: |
  Ein Wagen steht auf einer waagrechten Schiene und ist an einer Feder mit $D = 80\,\text{N/m}$ befestigt. Er wird aus der Ruhelage um $5{,}0\,\text{cm}$ nach rechts gezogen. Welche Kraft übt die Feder jetzt auf den Wagen aus?
teile:
  - typ: auswahl
    optionen:
      - "$4{,}0\\,\\text{N}$ nach rechts"
      - "$4{,}0\\,\\text{N}$ nach links"
      - "$400\\,\\text{N}$ nach links"
      - "keine Kraft, weil der Wagen festgehalten wird"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Betrag stimmt, die Richtung nicht. Eine gedehnte Feder will sich wieder zusammenziehen. Sie zieht den Wagen also zurück zur Ruhelage, nach links.
      - wert: 2
        meldung: Du hast die Dehnung in Zentimetern eingesetzt. Mit $s = 0{,}050\,\text{m}$ ergibt sich $80\,\text{N/m}\cdot 0{,}050\,\text{m} = 4{,}0\,\text{N}$.
      - wert: 3
        meldung: Die Feder zieht, sobald sie gedehnt ist, egal ob der Wagen festgehalten wird. Das Festhalten ist eine zweite Kraft, die der Federkraft das Gleichgewicht hält.
hinweise:
  - 'Hookesches Gesetz $F = D\cdot s$. Eine gedehnte Feder zieht zur Ruhelage zurück.'
loesung: |
  **Betrag:** $F = D\cdot s = 80\,\text{N/m}\cdot 0{,}050\,\text{m} = 4{,}0\,\text{N}$.
  ---
  **Richtung:** Die Feder ist gedehnt und zieht den Wagen zurück zur Ruhelage, also nach links. Wiederholen: [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

Bisher haben wir Schwingungen nur beschrieben. Jetzt fragen wir nach der Ursache: Welche Kraft erzeugt
eine Schwingung, und welche Form hat dann das Zeitdiagramm? Die Antwort führt auf die wichtigste Art
von Schwingung, die **harmonische Schwingung**.

### Das lineare Kraftgesetz

Wir betrachten einen Wagen auf einer waagrechten, reibungsfreien Schiene. Er ist an einer Feder befestigt,
deren anderes Ende an einer Wand sitzt. In der Ruhelage ist die Feder entspannt. Ziehen wir den Wagen
um $x$ nach rechts, zieht die Feder ihn mit der Kraft
$$F = -D\cdot x$$
zurück. Dabei ist $D$ die **Federkonstante** in N/m und $x$ die Auslenkung aus der Ruhelage in m. Das ist
das Hookesche Gesetz aus der Lektion
[3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
Neu ist nur das **Minuszeichen**. Es sagt, dass die Kraft immer **entgegen** der Auslenkung zeigt, also zur
Ruhelage hin.

Zahlenbeispiel mit $D = 50\,\text{N/m}$: Bei $x = +0{,}10\,\text{m}$ (rechts) ist $F = -5{,}0\,\text{N}$, die
Kraft zeigt nach links. Bei $x = -0{,}10\,\text{m}$ (links) ist $F = +5{,}0\,\text{N}$, die Kraft zeigt nach
rechts. Bei $x = 0$ ist $F = 0$. Bei doppelter Auslenkung ist die Kraft doppelt so groß.

Eine Kraft dieser Art nennt man **lineare Rückstellkraft**. „Linear“ heißt: Die Kraft ist proportional zur
Auslenkung, ihr Graph über $x$ ist eine Gerade durch den Ursprung. „Rückstellkraft“ heißt: Sie zeigt
immer zur Ruhelage zurück.

```plot
x: [-6, 6]
y: [0, 7.5]
gleich: true
strecken:
  - { von: [-5.5, 0.3], nach: [-5.5, 7.2] }
  - { von: [0, 0.3], nach: [0, 7.2], gestrichelt: true, farbe: 2 }
  - { von: [-5.5, 6], nach: [1.6, 6], gestrichelt: true }
  - { von: [1.6, 5.6], nach: [2.4, 5.6] }
  - { von: [2.4, 5.6], nach: [2.4, 6.4] }
  - { von: [2.4, 6.4], nach: [1.6, 6.4] }
  - { von: [1.6, 6.4], nach: [1.6, 5.6] }
  - { von: [-5.5, 3.5], nach: [-0.4, 3.5], gestrichelt: true }
  - { von: [-0.4, 3.1], nach: [0.4, 3.1] }
  - { von: [0.4, 3.1], nach: [0.4, 3.9] }
  - { von: [0.4, 3.9], nach: [-0.4, 3.9] }
  - { von: [-0.4, 3.9], nach: [-0.4, 3.1] }
  - { von: [-5.5, 1], nach: [-2.4, 1], gestrichelt: true }
  - { von: [-2.4, 0.6], nach: [-1.6, 0.6] }
  - { von: [-1.6, 0.6], nach: [-1.6, 1.4] }
  - { von: [-1.6, 1.4], nach: [-2.4, 1.4] }
  - { von: [-2.4, 1.4], nach: [-2.4, 0.6] }
vektoren:
  - { von: [2, 6], nach: [0.5, 6], label: "F = −D·x", farbe: 1 }
  - { von: [2, 6], nach: [2, 6.9], label: "F_N", farbe: 2 }
  - { von: [2, 6], nach: [2, 5.1], label: "F_G", farbe: 0 }
  - { von: [-2, 1], nach: [-0.5, 1], label: "F = −D·x", farbe: 1 }
punkte:
  - { x: 3.6, y: 6, label: "x = +2" }
  - { x: 1.6, y: 3.5, label: "x = 0, F = 0" }
  - { x: -3.6, y: 1.8, label: "x = −2" }
beschriftung: "Freikörperbilder eines Wagens an einer Feder (gestrichelt) in drei Lagen, die grüne Linie ist die Ruhelage. Oben ist der Wagen nach rechts ausgelenkt, die Federkraft (orange) zeigt nach links. Gewichtskraft (blau) und Normalkraft (grün) heben sich auf. In der Mitte ist die Federkraft null. Unten ist der Wagen nach links ausgelenkt, die Federkraft zeigt nach rechts."
```

Senkrecht heben sich Gewichtskraft und Normalkraft auf. Waagrecht wirkt nur die Federkraft. Sie ist also
die resultierende Kraft. Nach dem Grundgesetz $F = m\cdot a$ gilt
$$m\cdot a = -D\cdot x \qquad\text{also}\qquad a = -\frac{D}{m}\cdot x.$$
Dabei ist $m$ die Masse des Wagens und $a$ seine Beschleunigung. In Worten: **Die Beschleunigung ist
proportional zur Auslenkung und zeigt ihr entgegen.** Dieser Satz ist der Kern des ganzen Kapitels.

:::definition[Harmonische Schwingung]
Eine Schwingung heißt **harmonisch**, wenn die Rückstellkraft proportional zur Auslenkung ist und ihr
entgegen zeigt, also wenn das **lineare Kraftgesetz** $F = -D\cdot x$ gilt. Dann ist die Auslenkung eine
Sinusfunktion der Zeit:
$$x(t) = A\cdot\sin(\omega t + \varphi_0).$$
Dabei ist $A$ die Amplitude, $\omega$ die Kreisfrequenz, $t$ die Zeit und $\varphi_0$ (gelesen „phi null“)
der **Nullphasenwinkel**. Er legt fest, wo die Schwingung zur Zeit $t = 0$ steht.
:::

**Beispiel:** Ein Wagen an einer Feder auf einer reibungsfreien Schiene schwingt harmonisch.
**Nicht-Beispiel:** Ein Ball, der auf dem Boden springt, schwingt nicht harmonisch. Während des Flugs wirkt
auf ihn die konstante Gewichtskraft, egal wie hoch er ist. Die Kraft ist also nicht proportional zum
Abstand von einer Ruhelage.

### Warum gerade der Sinus? Das Schattenbild der Kreisbewegung

Diese Stelle ist für viele ungewohnt, weil hier Kreis und Schwingung zusammenkommen. Lies sie langsam.

**Worum geht es?** Wir suchen eine Bewegung, bei der die Beschleunigung immer $-\omega^2$-mal die
Auslenkung ist, mit einer festen Zahl $\omega^2$. Wir zeigen, dass der Sinus genau das leistet.

**Das Bild:** Ein Punkt läuft gleichförmig auf einem Kreis mit dem Radius $A$. Er braucht für eine Runde die
Zeit $T$, seine Winkelgeschwindigkeit ist also $\omega = 2\pi/T$. Neben dem Kreis steht eine Lampe und
wirft den Schatten des Punktes auf eine senkrechte Wand. Der Schatten bewegt sich auf der Wand auf und
ab, zwischen $+A$ und $-A$.

```plot
x: [-3, 4]
y: [-2.6, 2.6]
gleich: true
kurven:
  - { x: "2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0 }
strecken:
  - { von: [3.2, -2.4], nach: [3.2, 2.4] }
  - { von: [1.2856, 1.5321], nach: [3.2, 1.5321], gestrichelt: true, farbe: 1 }
  - { von: [-2.6, 0], nach: [3.2, 0], gestrichelt: true }
vektoren:
  - { von: [0, 0], nach: [1.2856, 1.5321], label: "A", farbe: 0 }
punkte:
  - { x: 1.2856, y: 1.5321, label: "Punkt" }
  - { x: 3.2, y: 1.5321, label: "Schatten y" }
  - { x: 0.7, y: 0.3, label: "ωt" }
beschriftung: "Ein Punkt läuft auf einem Kreis mit dem Radius A. Sein Schatten auf der Wand rechts hat die Höhe y = A·sin(ωt). Dabei ist ωt der Winkel, den der Radius nach der Zeit t mit der Waagrechten bildet."
```

**In kleinen Schritten:**

1. Nach der Zeit $t$ hat der Radius den Winkel $\omega t$ überstrichen. Der Punkt liegt dann auf der Höhe
   $y = A\cdot\sin(\omega t)$, wie im Einheitskreis aus dem Mathematikkapitel
   [5.4 Der Einheitskreis](/lernen/mathe3/trigonometrie/der-einheitskreis). Das ist die Höhe des Schattens.
2. Ein Punkt auf einer gleichförmigen Kreisbahn hat eine **Zentripetalbeschleunigung** zum Mittelpunkt
   hin. Ihr Betrag ist $A\cdot\omega^2$. Das kennst du aus der Lektion
   [6.2 Die Zentripetalbeschleunigung](/lernen/physik1/kreisbewegung-gravitation/die-zentripetalbeschleunigung).
3. Der Schatten zeigt nur die **senkrechte** Komponente dieser Beschleunigung. Sie ist
   $-A\omega^2\cdot\sin(\omega t)$. Das Minus steht dort, weil die Beschleunigung zum Mittelpunkt zeigt.
   Ist der Punkt oben, zeigt sie nach unten.
4. Wir vergleichen mit Schritt 1: $-A\omega^2\sin(\omega t) = -\omega^2\cdot y$. Die Beschleunigung des
   Schattens ist also $-\omega^2$-mal seine Auslenkung.

**In Worten zurückübersetzt:** Der Schatten einer gleichförmigen Kreisbewegung erfüllt genau die
Bedingung „Beschleunigung proportional zur Auslenkung und ihr entgegen“. Ein Wagen an der Feder erfüllt
dieselbe Bedingung, mit $\omega^2 = D/m$. Beide bewegen sich deshalb gleich: sinusförmig. Daher kommt
auch der Name **Kreisfrequenz** für $\omega$.

**Typisches Missverständnis:** „Der Wagen läuft doch nicht im Kreis.“ Richtig, das tut er nicht. Der Kreis
ist nur ein Rechenbild. Er liefert eine Bewegung, die dieselbe Gleichung erfüllt wie der Wagen.

### Der Nullphasenwinkel: Wo startet die Schwingung?

Die Gleichung $x(t) = A\sin(\omega t + \varphi_0)$ hat drei Bausteine. $A$ sagt, wie weit der Körper
ausschlägt. $\omega$ sagt, wie schnell er schwingt. Der Nullphasenwinkel $\varphi_0$ sagt, wo er zur Zeit
$t = 0$ ist. Den ganzen Ausdruck $\omega t + \varphi_0$ nennt man die **Phase**. Er ist ein Winkel im
**Bogenmaß**. Drei Startlagen kommen in Aufgaben immer wieder vor:

- **Start in der Ruhelage nach oben** (oder nach rechts): $\varphi_0 = 0$, also $x(t) = A\sin(\omega t)$.
- **Start im oberen Umkehrpunkt** (man lenkt aus und lässt los): $\varphi_0 = \frac{\pi}{2}$. Wegen
  $\sin(\alpha + \frac{\pi}{2}) = \cos\alpha$ schreibt man einfacher $x(t) = A\cos(\omega t)$.
- **Start im unteren Umkehrpunkt** (man zieht nach unten und lässt los): $x(t) = -A\cos(\omega t)$.

Zwei Schwingungen gleicher Frequenz heißen **gleichphasig**, wenn ihre Phasen gleich sind. Sie heißen
**gegenphasig**, wenn sich die Phasen um $\pi$ unterscheiden. Dann ist die eine oben, wenn die andere
unten ist.

:::beispiel[Auslenkung bei Start in der Ruhelage]
Ein Körper schwingt mit $A = 3{,}0\,\text{cm}$ und $T = 0{,}60\,\text{s}$. Bei $t = 0$ geht er durch die
Ruhelage nach oben. Wo ist er bei $t = 0{,}10\,\text{s}$?

**Schritt 1, Kreisfrequenz:** $\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{0{,}60\,\text{s}} = 10{,}5\,\text{s}^{-1}$.

**Schritt 2, Phase:** Start in der Ruhelage nach oben heißt $\varphi_0 = 0$. Die Phase ist
$\omega t = 10{,}5\,\text{s}^{-1}\cdot 0{,}10\,\text{s} = 1{,}047$. Das ist $\frac{\pi}{3}$, also $60^\circ$.

**Schritt 3, Auslenkung:** $x = 3{,}0\,\text{cm}\cdot\sin(1{,}047) = 3{,}0\,\text{cm}\cdot 0{,}866 = 2{,}60\,\text{cm}$.

**Plausibilität:** Nach einem Sechstel der Periode ist der Körper schon weit oben, aber noch nicht im
Umkehrpunkt. Den erreicht er nach einem Viertel der Periode, bei $t = 0{,}15\,\text{s}$. ✓
:::

:::beispiel[Auslenkung bei Start im Umkehrpunkt]
Ein Körper wird $5{,}0\,\text{cm}$ nach oben ausgelenkt und bei $t = 0$ losgelassen. Er schwingt mit
$T = 2{,}0\,\text{s}$. Wo ist er bei $t = 0{,}25\,\text{s}$?

**Schritt 1, Funktion wählen:** Er startet im oberen Umkehrpunkt, also $x(t) = A\cos(\omega t)$.

**Schritt 2, Phase:** $\omega = \dfrac{2\pi}{2{,}0\,\text{s}} = \pi\,\text{s}^{-1}$ und
$\omega t = \pi\,\text{s}^{-1}\cdot 0{,}25\,\text{s} = \dfrac{\pi}{4}$.

**Schritt 3, Auslenkung:** $x = 5{,}0\,\text{cm}\cdot\cos\left(\dfrac{\pi}{4}\right) = 5{,}0\,\text{cm}\cdot 0{,}707 = 3{,}54\,\text{cm}$.
Der Körper ist also schon $1{,}46\,\text{cm}$ nach unten gefallen.
:::

:::achtung[Fehler: Taschenrechner im Gradmodus]
Im ersten Beispiel ist $x = 3{,}0\,\text{cm}\cdot\sin(1{,}047)$. Steht der Rechner auf **DEG**, rechnet er
$\sin(1{,}047^\circ)$ und liefert $x = 0{,}055\,\text{cm}$. Das kann nicht stimmen, denn nach einem Sechstel
der Periode ist der Körper sicher nicht fast noch in der Ruhelage.

Die Phase $\omega t$ ist ein Winkel im **Bogenmaß**. Stelle den Rechner auf **RAD**. Dann ergibt sich richtig
$\sin(1{,}047) = 0{,}866$ und $x = 2{,}60\,\text{cm}$.
:::

:::achtung[Fehler: Frequenz statt Kreisfrequenz in den Sinus]
Eine Schwingung hat $f = 2{,}0\,\text{Hz}$ und $A = 4{,}0\,\text{cm}$. Falsch aufgestellt:
$x(t) = 4{,}0\,\text{cm}\cdot\sin(2{,}0\cdot t)$. Mit diesem Term wäre die Periode $2\pi/2{,}0 = 3{,}14\,\text{s}$
statt $0{,}50\,\text{s}$.

In den Sinus gehört die Kreisfrequenz $\omega = 2\pi f = 12{,}6\,\text{s}^{-1}$. Richtig ist
$x(t) = 4{,}0\,\text{cm}\cdot\sin(12{,}6\,\text{s}^{-1}\cdot t)$. Probe: Nach $t = 0{,}50\,\text{s}$ ist die Phase
$6{,}28 = 2\pi$, eine volle Schwingung ist vorbei. ✓
:::

### Nicht jede Schwingung ist harmonisch

Viele periodische Bewegungen sind keine Sinuskurven. Drei Beispiele:

- Ein Ball springt auf dem Boden auf und ab. Sein Zeitdiagramm besteht aus Parabelbögen.
- Ein Puck gleitet zwischen zwei Banden hin und her. Seine Auslenkung wächst und fällt gleichmäßig, das
  Diagramm ist eine Zickzacklinie.
- Ein Fadenpendel bei großen Ausschlägen ist nur noch ungefähr harmonisch. Das zeigt die Lektion
  [7.5 Das Fadenpendel](/lernen/physik1/schwingungen/das-fadenpendel-kleinwinkelnaeherung-und-schwingungsdauer).

Trotzdem ist die harmonische Schwingung der Baustein aller Schwingungen. Der Mathematiker Joseph Fourier
zeigte um 1807, dass sich praktisch **jede** periodische Schwingung als Summe von Sinusschwingungen schreiben lässt.
Ihre Frequenzen sind $f$, $2f$, $3f$ und so weiter. In der Lektion
[8.9 Schall, Tonhöhe, Klangfarbe und Instrumente](/lernen/physik1/wellen-akustik/schall-tonhoehe-klangfarbe-und-instrumente)
bestimmt diese Mischung die Klangfarbe eines Instruments.

### Aufgaben zur harmonischen Schwingung

```aufgabe
id: p7-harmonisch-kriterium
titel: Was macht eine Schwingung harmonisch?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche Bedingung ist notwendig und hinreichend dafür, dass eine Schwingung harmonisch ist?
teile:
  - typ: auswahl
    optionen:
      - "Die Rückstellkraft ist proportional zur Auslenkung und ihr entgegengerichtet."
      - "Die Rückstellkraft ist konstant."
      - "Die Schwingung ist ungedämpft."
      - "Die Amplitude ist klein."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine konstante Kraft, die immer zur Mitte zeigt, gibt eine Zickzack- oder Parabelbewegung, keine Sinusform. Entscheidend ist, dass die Kraft **mit der Auslenkung wächst**.
      - wert: 2
        meldung: Auch eine gedämpfte Schwingung kann eine abklingende Sinusform haben. Umgekehrt muss eine ungedämpfte Schwingung nicht sinusförmig sein, denk an den springenden Ball. Harmonisch bezieht sich auf das Kraftgesetz, nicht auf die Dämpfung.
      - wert: 3
        meldung: Kleine Amplituden braucht man beim Fadenpendel, damit es **näherungsweise** harmonisch schwingt. Ein Federpendel schwingt aber bei jeder Amplitude im elastischen Bereich harmonisch. Die Bedingung betrifft das Kraftgesetz.
hinweise:
  - Welches Kraftgesetz führt zu einer Beschleunigung, die proportional zur Auslenkung ist?
loesung: |
  **Kraftgesetz:** Gilt $F = -D x$, dann folgt mit $F = m a$ die Gleichung $a = -\dfrac{D}{m}x$. Genau diese Gleichung erfüllt eine Sinusfunktion.
  ---
  **Die anderen Antworten:** Eine konstante Kraft gibt keine Sinusform. Dämpfung und kleine Amplitude sind andere Eigenschaften und für sich weder notwendig noch hinreichend.
```

```aufgabe
id: p7-2-kraftgesetz
titel: Rückstellkraft mit Vorzeichen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Feder hat die Federkonstante $D = 120\,\text{N/m}$. Der Körper an ihr ist um $x = -4{,}0\,\text{cm}$ ausgelenkt (also nach links, wenn rechts positiv ist). Berechne die Rückstellkraft $F$ in N **mit Vorzeichen**.
teile:
  - typ: zahl
    loesung: "-120*(-0.04)"
    einheit: "N"
    anzeige: '4{,}8'
    fehler:
      - wert: "-4.8"
        meldung: Das Vorzeichen stimmt nicht. Der Körper ist nach links ausgelenkt, die Feder zieht ihn also nach **rechts** zurück. In $F = -D x$ ergibt minus mal minus plus.
      - wert: "480"
        meldung: Du hast die Auslenkung in Zentimetern eingesetzt. Rechne $-4{,}0\,\text{cm} = -0{,}040\,\text{m}$.
hinweise:
  - 'Setze in $F = -D\cdot x$ ein und achte auf beide Minuszeichen.'
loesung: |
  **Ansatz:** Lineares Kraftgesetz $F = -D\cdot x$ mit $x$ in Metern, also $x = -0{,}040\,\text{m}$.
  ---
  **Rechnung:** $F = -120\,\text{N/m}\cdot(-0{,}040\,\text{m}) = +4{,}8\,\text{N}$. Das positive Vorzeichen bedeutet: Die Kraft zeigt nach rechts, zur Ruhelage hin. ✓
```

```aufgabe
id: p7-auslenkung-zeit
titel: Kenngrößen aus der Gleichung ablesen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Schwingung wird durch $x(t) = 0{,}05\,\text{m}\cdot\sin(4\pi\,\text{s}^{-1}\cdot t)$ beschrieben. Bestimme die Amplitude in m, die Frequenz in Hz und die Auslenkung zur Zeit $t = 0{,}10\,\text{s}$ in m (auf drei signifikante Stellen).
teile:
  - typ: zahl
    label: Amplitude
    loesung: "0.05"
    einheit: "m"
    anzeige: '0{,}05'
    fehler:
      - wert: "0.1"
        meldung: Die Amplitude ist der Vorfaktor vor dem Sinus, nicht der Abstand vom tiefsten zum höchsten Punkt.
  - typ: zahl
    label: Frequenz
    loesung: "4*pi/(2*pi)"
    einheit: "Hz"
    anzeige: '2'
    fehler:
      - wert: "4*pi"
        meldung: Die Zahl vor $t$ ist die **Kreisfrequenz** $\omega$. Die Frequenz ist $f = \omega/(2\pi)$.
      - wert: "4"
        meldung: Das $\pi$ gehört zur Kreisfrequenz dazu. $\omega = 4\pi\,\text{s}^{-1}$, also $f = 4\pi/(2\pi)\,\text{Hz}$.
  - typ: zahl
    label: Auslenkung bei 0,10 s
    loesung: "0.05*sin(4*pi*0.10)"
    einheit: "m"
    anzeige: '0{,}0476'
    fehler:
      - wert: "0.05*sin(inRad(4*pi*0.10))"
        meldung: Dein Rechner steht im Gradmodus. Die Phase $0{,}4\pi = 1{,}257$ ist im Bogenmaß gemeint. Stelle auf RAD.
hinweise:
  - 'Vergleiche mit $x(t) = A\sin(\omega t)$. Die Zahl vor $t$ ist $\omega$.'
  - 'Es gilt $f = \omega/(2\pi)$. Für die Auslenkung setze $t = 0{,}10\,\text{s}$ ein, Rechner auf Bogenmaß.'
loesung: |
  **Ansatz:** Wir vergleichen mit der allgemeinen Form $x(t) = A\sin(\omega t)$. Dann ist $A = 0{,}05\,\text{m}$ und $\omega = 4\pi\,\text{s}^{-1}$.
  ---
  **Frequenz:** $f = \dfrac{\omega}{2\pi} = \dfrac{4\pi\,\text{s}^{-1}}{2\pi} = 2\,\text{Hz}$.
  ---
  **Auslenkung:** Die Phase ist $4\pi\,\text{s}^{-1}\cdot 0{,}10\,\text{s} = 0{,}4\pi = 1{,}257$. Also $x = 0{,}05\,\text{m}\cdot\sin(1{,}257) = 0{,}05\,\text{m}\cdot 0{,}951 = 0{,}0476\,\text{m}$.
  ---
  **Plausibilität:** $0{,}10\,\text{s}$ ist ein Fünftel der Periode $0{,}5\,\text{s}$, also kurz vor dem Umkehrpunkt bei $T/4 = 0{,}125\,\text{s}$. Der Körper ist fast ganz oben. ✓
```

```aufgabe
id: p7-2-nullphase
titel: Die passende Zeitfunktion wählen
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Körper an einer senkrechten Feder wird nach unten gezogen und zur Zeit $t = 0$ losgelassen. Die $x$-Achse zeigt nach oben. Welche Funktion beschreibt seine Auslenkung?
teile:
  - typ: auswahl
    optionen:
      - "$x(t) = A\\sin(\\omega t)$"
      - "$x(t) = A\\cos(\\omega t)$"
      - "$x(t) = -A\\cos(\\omega t)$"
      - "$x(t) = -A\\sin(\\omega t)$"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Diese Funktion startet bei $t = 0$ in der Ruhelage ($\sin 0 = 0$). Der Körper startet aber im unteren Umkehrpunkt.
      - wert: 1
        meldung: Diese Funktion startet bei $x = +A$, also im **oberen** Umkehrpunkt. Der Körper wurde aber nach unten gezogen.
      - wert: 3
        meldung: Diese Funktion startet in der Ruhelage und bewegt sich nach unten. Der Körper ist bei $t = 0$ aber schon ganz unten und in Ruhe.
hinweise:
  - Setze $t = 0$ in jede Funktion ein. Wo liegt der Körper dann?
  - Der Körper startet bei $x = -A$ und ist dort in Ruhe.
loesung: |
  **Ansatz:** Wir prüfen den Startwert $x(0)$. Der Körper startet ganz unten, also bei $x(0) = -A$.
  ---
  **Prüfen:** $\sin 0 = 0$ und $\cos 0 = 1$. Nur $-A\cos(\omega t)$ liefert $x(0) = -A$.
  ---
  **Kontrolle der Richtung:** Nach einer Viertelperiode ist $-A\cos(\pi/2) = 0$. Der Körper ist von unten zur Ruhelage hinaufgelaufen, wie es sein muss. ✓
```

```aufgabe
id: p7-2-zeitfunktion
titel: Zeitfunktion aufstellen
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Körper wird $2{,}0\,\text{cm}$ aus der Ruhelage nach oben ausgelenkt und bei $t = 0$ losgelassen. Er schwingt mit der Frequenz $f = 0{,}50\,\text{Hz}$. Gib die Auslenkung $x(t)$ in cm an, mit $t$ in Sekunden.
teile:
  - typ: term
    variable: t
    label: "$x(t) =$"
    loesung: "2*cos(pi*t)"
    fehler:
      - wert: "2*sin(pi*t)"
        meldung: Mit dem Sinus startet der Körper in der Ruhelage. Er startet aber im oberen Umkehrpunkt, und dort beginnt der Kosinus.
      - wert: "2*cos(0.5*t)"
        meldung: In die Klammer gehört die Kreisfrequenz $\omega = 2\pi f$, nicht die Frequenz $f$.
      - wert: "-2*cos(pi*t)"
        meldung: Mit dem Minus startet der Körper im **unteren** Umkehrpunkt. Er wurde aber nach oben ausgelenkt.
hinweise:
  - Wo startet der Körper, und welche Funktion hat bei $t = 0$ ihren größten Wert?
  - 'Berechne $\omega = 2\pi f$ und setze in $x(t) = A\cos(\omega t)$ ein.'
gefuehrt:
  - text: Berechne die Kreisfrequenz $\omega$ in $\text{s}^{-1}$.
    teil: { typ: zahl, loesung: "2*pi*0.5", einheit: "1/s" }
    erklaerung: $\omega = 2\pi f = 2\pi\cdot 0{,}50\,\text{s}^{-1} = \pi\,\text{s}^{-1}\approx 3{,}14\,\text{s}^{-1}$.
  - text: Der Körper startet ganz oben in Ruhe. Welche Grundfunktion hat bei $t = 0$ ihren größten Wert?
    teil:
      typ: auswahl
      optionen: ["$\\sin$", "$\\cos$"]
      richtig: [1]
    erklaerung: $\cos 0 = 1$ ist der größte Wert. Der Sinus startet dagegen bei $0$.
  - text: Welches Vorzeichen braucht der Vorfaktor, wenn der Körper oben startet und die Achse nach oben zeigt?
    teil:
      typ: auswahl
      optionen: ["plus", "minus"]
      richtig: [0]
    erklaerung: Oben heißt $x(0) = +A$, also positiver Vorfaktor.
  - text: Schreibe jetzt die ganze Zeitfunktion in cm.
    teil: { typ: term, variable: t, loesung: "2*cos(pi*t)" }
    erklaerung: $x(t) = 2{,}0\,\text{cm}\cdot\cos(\pi\,\text{s}^{-1}\cdot t)$.
loesung: |
  **Kreisfrequenz:** $\omega = 2\pi f = 2\pi\cdot 0{,}50\,\text{s}^{-1} = \pi\,\text{s}^{-1}$.
  ---
  **Funktion wählen:** Start im oberen Umkehrpunkt heißt $x(0) = +A$. Das liefert der Kosinus, denn $\cos 0 = 1$.
  ---
  **Ergebnis:** $x(t) = 2{,}0\,\text{cm}\cdot\cos(\pi\,\text{s}^{-1}\cdot t)$. Probe: Bei $t = 1{,}0\,\text{s}$ (halbe Periode) ist $x = 2\cos\pi = -2{,}0\,\text{cm}$, der untere Umkehrpunkt. ✓
```

```aufgabe
id: p7-2-ball-text
titel: Ist ein springender Ball harmonisch?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Gummiball springt auf einem harten Boden ohne Energieverlust immer wieder gleich hoch. Ist diese Bewegung periodisch? Ist sie harmonisch? Begründe beide Antworten mit der Kraft, die während des Flugs auf den Ball wirkt.
teile:
  - typ: text
    muster: |
      Periodisch ist sie, denn jeder Sprung sieht gleich aus und dauert gleich lange. Harmonisch ist sie nicht. Während des
      Flugs wirkt nur die Gewichtskraft $m g$. Sie ist konstant und hängt nicht davon ab, wie hoch der Ball ist. Für eine
      harmonische Schwingung müsste die Kraft proportional zum Abstand von einer Ruhelage sein und zu ihr zurück zeigen.
      Das Zeitdiagramm besteht deshalb aus Parabelbögen und nicht aus einer Sinuskurve.
hinweise:
  - Wiederholt sich die Bewegung genau? Dann ist sie periodisch.
  - Hängt die Kraft auf den Ball während des Flugs von seiner Höhe ab?
loesung: |
  **Periodisch:** Ja. Ohne Energieverlust wiederholt sich jeder Sprung genau, mit gleicher Höhe und gleicher Dauer.
  ---
  **Kraft prüfen:** Im Flug wirkt nur die Gewichtskraft. Sie ist in jeder Höhe gleich groß. Sie ist also nicht proportional zur Auslenkung.
  ---
  **Ergebnis:** Nicht harmonisch. Das Zeitdiagramm besteht aus Parabelbögen wie beim senkrechten Wurf, nicht aus einer Sinuskurve.
```

```aufgabe
id: p7-2-umkehr-zeit
titel: Wann ist die halbe Amplitude erreicht?
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Körper schwingt mit $A = 6{,}0\,\text{cm}$ und $T = 2{,}4\,\text{s}$. Zur Zeit $t = 0$ geht er durch die Ruhelage nach oben. Zu welcher Zeit ist er zum ersten Mal bei $x = 3{,}0\,\text{cm}$? Gib das Ergebnis in s auf zwei Nachkommastellen an.
teile:
  - typ: zahl
    loesung: "asin(0.5)/(2*pi/2.4)"
    einheit: "s"
    anzeige: '0{,}20'
    fehler:
      - wert: "0.3"
        meldung: Du hast angenommen, dass der Körper gleichmäßig schnell läuft. Nach $T/4 = 0{,}6\,\text{s}$ ist er oben, und die Hälfte davon wäre $0{,}3\,\text{s}$. Er ist aber in der Ruhelage am schnellsten. Die erste Hälfte des Weges schafft er deshalb in **weniger** als der halben Zeit.
      - wert: "30/(2*pi/2.4)"
        meldung: Du hast den Winkel $30^\circ$ statt $\pi/6$ verwendet. Die Phase $\omega t$ ist ein Winkel im Bogenmaß.
hinweise:
  - 'Setze $x(t) = A\sin(\omega t) = 3{,}0\,\text{cm}$ an und teile durch $A$.'
  - 'Aus $\sin(\omega t) = 0{,}5$ folgt $\omega t = \arcsin(0{,}5)$ im Bogenmaß. Teile dann durch $\omega$.'
loesung: |
  **Ansatz:** Start in der Ruhelage nach oben, also $x(t) = A\sin(\omega t)$. Gesucht ist die kleinste Zeit $t > 0$ mit $x(t) = 3{,}0\,\text{cm}$. Das ist eine Umkehraufgabe: Das Ergebnis ist gegeben, die Zeit gesucht.
  ---
  **Sinus isolieren:** $6{,}0\,\text{cm}\cdot\sin(\omega t) = 3{,}0\,\text{cm}$. Wir teilen durch $6{,}0\,\text{cm}$: $\sin(\omega t) = 0{,}5$.
  ---
  **Phase:** Die kleinste positive Lösung ist $\omega t = \arcsin(0{,}5) = \dfrac{\pi}{6} = 0{,}524$ (Bogenmaß).
  ---
  **Zeit:** $\omega = \dfrac{2\pi}{2{,}4\,\text{s}} = 2{,}62\,\text{s}^{-1}$, also $t = \dfrac{0{,}524}{2{,}62\,\text{s}^{-1}} = 0{,}20\,\text{s}$. Das ist genau $T/12$. Der Körper braucht für die erste Hälfte des Weges nur ein Drittel der Zeit bis zum Umkehrpunkt ($0{,}6\,\text{s}$), weil er in der Ruhelage am schnellsten ist.
```

## Auslenkung, Geschwindigkeit und Beschleunigung: die Phasenlage

```aufgabe
id: p7-3-check
art: check
titel: "Vorwissen: Geschwindigkeit als Steigung"
niveau: 1
angabe: |
  In einem Weg-Zeit-Diagramm ist die Tangente an den Graphen zu einem bestimmten Zeitpunkt **waagrecht**. Was weißt du über den Körper zu diesem Zeitpunkt?
teile:
  - typ: auswahl
    optionen:
      - "Er ist gerade am Ort $x = 0$."
      - "Seine Geschwindigkeit ist null."
      - "Seine Beschleunigung ist null."
      - "Er bewegt sich mit konstanter Geschwindigkeit weiter."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Tangente sagt etwas über die **Steigung** des Graphen, nicht über seine Höhe. Eine waagrechte Tangente kann in jeder Höhe liegen.
      - wert: 2
        meldung: Die Steigung im Weg-Zeit-Diagramm ist die **Geschwindigkeit**, nicht die Beschleunigung. Die Beschleunigung ist die Steigung im Geschwindigkeit-Zeit-Diagramm.
      - wert: 3
        meldung: Eine waagrechte Tangente gilt hier nur für einen Zeitpunkt. Ob der Körper danach stehen bleibt oder umkehrt, sagt sie nicht.
hinweise:
  - Die Steigung im Weg-Zeit-Diagramm hat die Einheit m/s.
loesung: |
  Die Steigung der Tangente im Weg-Zeit-Diagramm ist die momentane Geschwindigkeit.
  ---
  Eine waagrechte Tangente hat die Steigung null, also ist $v = 0$. Wiederholen: [2.5 Bewegungsdiagramme ineinander übersetzen](/lernen/physik1/kinematik/bewegungsdiagramme-ineinander-uebersetzen).
```

Diese Lektion behandelt die schwierigste Stelle des Kapitels. **Worum geht es in einem Satz?** Wir wollen
für jeden Zeitpunkt einer harmonischen Schwingung wissen, wo der Körper ist, wie schnell er ist und wie
stark er beschleunigt wird. Außerdem wollen wir verstehen, wie diese drei Größen zusammenhängen.

Das Bauchgefühl führt hier oft in die Irre. Viele denken: „Wo der Körper stillsteht, wirkt keine Kraft.“
Im Umkehrpunkt steht er aber still, und genau dort zieht die Feder am stärksten. Wir gehen deshalb
langsam vor und schauen uns die drei Größen erst im Bild an, dann in Formeln.

### Die Geschichte einer Schwingung

Stell dir einen Körper an einer senkrechten Feder vor. Er geht zur Zeit $t = 0$ durch die Ruhelage nach
oben. Wir verfolgen eine ganze Periode in vier Vierteln. Auf den Körper wirken Federkraft und
Gewichtskraft. Wichtig ist nur ihre Summe, die **resultierende Kraft**. Sie wirkt genauso wie die Federkraft
beim waagrechten Wagen. Warum das so ist, zeigt die Lektion
[7.4 Das Federpendel](/lernen/physik1/schwingungen/das-federpendel-schwingungsdauer-und-federkonstante).

- **Bei $t = 0$** ist der Körper in der Ruhelage. Federkraft und Gewichtskraft heben sich auf, die
  resultierende Kraft ist null, also ist $a = 0$. Er ist hier am schnellsten und läuft nach oben.
- **Bis $t = T/4$** steigt er. Je höher er kommt, desto größer wird die resultierende Kraft nach unten. Er wird
  gebremst. Bei $t = T/4$ steht er im oberen Umkehrpunkt kurz still: $v = 0$. Die resultierende Kraft nach
  unten ist dort am größten.
- **Bis $t = T/2$** fällt er zurück und wird dabei schneller. Bei $t = T/2$ ist er wieder in der Ruhelage,
  diesmal mit größter Geschwindigkeit nach unten. Die Beschleunigung ist null.
- **Bis $t = 3T/4$** läuft er nach unten und wird gebremst. Im unteren Umkehrpunkt steht er kurz still.
  Jetzt zeigt die resultierende Kraft am stärksten nach **oben**. Danach beginnt alles von vorn.

Die Merkregel daraus: **Im Umkehrpunkt** ist die Geschwindigkeit null und die Beschleunigung am
größten. **In der Ruhelage** ist die Beschleunigung null und die Geschwindigkeit am größten.

```aufgabe
id: p7-3-check-vorhersage
art: check
titel: "Vorhersage: Was passiert bei doppelter Frequenz?"
niveau: 1
angabe: |
  Im Widget darunter kannst du die Frequenz einer Schwingung verändern, während die Amplitude gleich bleibt. **Sag vorher:** Was passiert mit der größten Geschwindigkeit $\hat v$ und der größten Beschleunigung $\hat a$, wenn du die Frequenz verdoppelst?
teile:
  - typ: auswahl
    optionen:
      - "Beide verdoppeln sich."
      - "$\\hat v$ verdoppelt sich, $\\hat a$ vervierfacht sich."
      - "$\\hat v$ bleibt gleich, $\\hat a$ verdoppelt sich."
      - "Beide bleiben gleich, weil die Amplitude gleich bleibt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Für die Geschwindigkeit stimmt das. Die Beschleunigung wächst aber stärker. Der Körper muss in der halben Zeit umkehren **und** ist dabei doppelt so schnell. Beide Faktoren $2$ kommen zusammen.
      - wert: 2
        meldung: Bei doppelter Frequenz legt der Körper denselben Weg in der halben Zeit zurück. Er muss also schneller sein.
      - wert: 3
        meldung: Gleiche Amplitude heißt gleicher Weg. Bei doppelter Frequenz läuft er diesen Weg aber in der halben Zeit, also schneller.
hinweise:
  - Bei doppelter Frequenz läuft der Körper denselben Weg in der halben Zeit.
loesung: |
  Bei doppelter Frequenz läuft der Körper denselben Weg in der halben Zeit. Seine Geschwindigkeit verdoppelt sich: $\hat v = A\omega$.
  ---
  Die Beschleunigung ist die Geschwindigkeitsänderung pro Zeit. Die Änderung ist doppelt so groß und passiert in der halben Zeit. Also wächst $\hat a = A\omega^2$ auf das Vierfache. Prüfe es im Widget.
```

```widget
name: schwingung
titel: Auslenkung, Geschwindigkeit und Beschleunigung
props:
  A: 1
  f: 0.5
  phi: 0
  delta: 0
  tmax: 6
  groesse: x
```

**Beobachte im Widget:** Schalte zwischen $x(t)$, $v(t)$ und $a(t)$ um. Lies an den Kennwerten unter dem
Diagramm $\hat v$ und $\hat a$ ab. Verdopple dann die Frequenz von $0{,}5\,\text{Hz}$ auf $1{,}0\,\text{Hz}$.
$\hat v$ verdoppelt sich, $\hat a$ vervierfacht sich. **Erklärung:** Beide Formeln enthalten $\omega$, aber
$\hat a$ enthält es im Quadrat. Achte außerdem darauf, wo der Punkt auf der $v$-Kurve null ist: immer
dann, wenn er auf der $x$-Kurve oben oder unten ist.

### Die Zeitfunktionen

Jetzt fassen wir die Geschichte in Formeln. Es gibt zwei Wege dorthin.

**Weg 1, ohne Ableitungen:** Die Geschwindigkeit ist die Steigung im $x$-$t$-Diagramm. In der Ruhelage ist die
Sinuskurve am steilsten, in den Umkehrpunkten ist sie waagrecht. Die Kurve der Steigung startet also oben
und ist bei $T/4$ null. Das ist genau eine Kosinuskurve.

**Weg 2, mit Ableitungen:** Die Geschwindigkeit ist die Ableitung des Ortes nach der Zeit, $v = x'(t)$. Die
Beschleunigung ist die Ableitung der Geschwindigkeit, $a = v'(t)$. Das kennst du aus der Mathematiklektion
[9.15 Anwendungen in Physik und Biologie](/lernen/mathe3/differentialrechnung/anwendungen-in-physik-und-biologie-bewegung-und-wachstum).
Mit $(\sin u)' = \cos u$ und $(\cos u)' = -\sin u$ aus der Lektion
[9.5 Grundregeln](/lernen/mathe3/differentialrechnung/grundregeln-potenz-faktor-und-summenregel-und-die-wichtigsten-ableitungen)
und der Kettenregel (innere Ableitung $\omega$) ergibt sich:

:::satz[Zeitfunktionen der harmonischen Schwingung]
Für $x(t) = A\sin(\omega t)$ gilt
$$v(t) = A\omega\cos(\omega t) \qquad\text{und}\qquad a(t) = -A\omega^2\sin(\omega t) = -\omega^2\cdot x(t).$$
Dabei ist $A$ die Amplitude, $\omega$ die Kreisfrequenz und $t$ die Zeit. Die Höchstwerte sind
$$\hat v = A\cdot\omega \quad\text{(in der Ruhelage)} \qquad\text{und}\qquad \hat a = A\cdot\omega^2 \quad\text{(in den Umkehrpunkten).}$$
:::

Die Einheiten passen: $A$ in m mal $\omega$ in $\text{s}^{-1}$ ergibt m/s, und $A\omega^2$ ergibt
$\text{m/s}^2$. Die letzte Gleichung $a = -\omega^2 x$ ist dieselbe wie in der Lektion
[7.2 Die harmonische Schwingung](/lernen/physik1/schwingungen/die-harmonische-schwingung-lineares-kraftgesetz-und-sinusfunktion):
Die Beschleunigung ist proportional zur Auslenkung und zeigt ihr entgegen.

```plot
x: [0, 1.25]
y: [-1.3, 1.3]
achsen: { x: "t in Perioden T", y: "relativ zum Höchstwert" }
graphen:
  - { f: "sin(2*pi*x)", label: "x/A", farbe: 0 }
  - { f: "cos(2*pi*x)", label: "v/v̂", farbe: 1 }
  - { f: "-sin(2*pi*x)", label: "a/â", farbe: 2, gestrichelt: true }
strecken:
  - { von: [0.25, -1.3], nach: [0.25, 1.3], gestrichelt: true }
  - { von: [0.5, -1.3], nach: [0.5, 1.3], gestrichelt: true }
  - { von: [0.75, -1.3], nach: [0.75, 1.3], gestrichelt: true }
beschriftung: "Auslenkung (blau), Geschwindigkeit (orange) und Beschleunigung (grün gestrichelt) einer harmonischen Schwingung über gut einer Periode, jeweils bezogen auf ihren Höchstwert. Die Geschwindigkeit läuft der Auslenkung um eine Viertelperiode voraus. Die Beschleunigung ist das Spiegelbild der Auslenkung."
```

### Die Phasenlage ablesen

Im Diagramm siehst du drei Kurven mit derselben Periode, aber gegeneinander verschoben. Diese Verschiebung
heißt **Phasenverschiebung**.

- **Geschwindigkeit und Auslenkung** sind um eine Viertelperiode $T/4$ verschoben. Das entspricht dem
  Phasenwinkel $\frac{\pi}{2}$, also $90^\circ$. Die Geschwindigkeitskurve erreicht ihr Maximum eine
  Viertelperiode **früher** als die Auslenkung.
- **Beschleunigung und Auslenkung** sind **gegenphasig**, also um eine halbe Periode verschoben. Ist $x$
  oben, ist $a$ unten. Das sagt $a = -\omega^2 x$.

Lies die Zeitpunkte im Diagramm einzeln ab:

- **Bei $t = 0$** gilt $x = 0$, $v = +\hat v$ und $a = 0$. Der Körper ist in der Ruhelage und am schnellsten.
- **Bei $t = T/4$** gilt $x = +A$, $v = 0$ und $a = -\hat a$. Der Körper ist oben und wird am stärksten nach unten beschleunigt.
- **Bei $t = T/2$** gilt $x = 0$, $v = -\hat v$ und $a = 0$. Der Körper läuft am schnellsten nach unten.
- **Bei $t = 3T/4$** gilt $x = -A$, $v = 0$ und $a = +\hat a$. Der Körper ist unten und wird am stärksten nach oben beschleunigt.

:::beispiel[Ort, Geschwindigkeit und Beschleunigung nach einem Achtel der Periode]
Ein Körper schwingt mit $A = 4{,}0\,\text{cm}$ und $T = 1{,}2\,\text{s}$. Bei $t = 0$ geht er durch die
Ruhelage nach oben. Gesucht sind $x$, $v$ und $a$ bei $t = 0{,}15\,\text{s}$.

**Schritt 1, Kreisfrequenz und Höchstwerte:** $\omega = \dfrac{2\pi}{1{,}2\,\text{s}} = 5{,}24\,\text{s}^{-1}$.
Mit $A = 0{,}040\,\text{m}$ ist $\hat v = A\omega = 0{,}040\,\text{m}\cdot 5{,}24\,\text{s}^{-1} = 0{,}209\,\text{m/s}$ und
$\hat a = A\omega^2 = 0{,}040\,\text{m}\cdot(5{,}24\,\text{s}^{-1})^2 = 1{,}10\,\text{m/s}^2$.

**Schritt 2, Phase:** $\omega t = 5{,}24\,\text{s}^{-1}\cdot 0{,}15\,\text{s} = 0{,}785 = \frac{\pi}{4}$. Es gilt
$\sin\frac{\pi}{4} = \cos\frac{\pi}{4} = 0{,}707$.

**Schritt 3, einsetzen:** $x = 4{,}0\,\text{cm}\cdot 0{,}707 = 2{,}83\,\text{cm}$,
$v = 0{,}209\,\text{m/s}\cdot 0{,}707 = 0{,}148\,\text{m/s}$ und
$a = -1{,}10\,\text{m/s}^2\cdot 0{,}707 = -0{,}775\,\text{m/s}^2$.

**Deutung:** Die Geschwindigkeit ist noch positiv, der Körper steigt. Die Beschleunigung ist schon negativ,
die Feder bremst ihn. Bei $t = 0{,}30\,\text{s}$ erreicht er den Umkehrpunkt.
:::

:::achtung[Fehler: Im Umkehrpunkt sei auch die Beschleunigung null]
Im Beispiel ist der Körper bei $t = T/4 = 0{,}30\,\text{s}$ im oberen Umkehrpunkt. Falsch geschlossen:
„Dort ist $v = 0$, also ist auch $a = 0$.“

Wäre die Beschleunigung null, bliebe die Geschwindigkeit null, und der Körper bliebe oben stehen. Er kehrt
aber um. Richtig: $a = -\omega^2 x = -(5{,}24\,\text{s}^{-1})^2\cdot 0{,}040\,\text{m} = -1{,}10\,\text{m/s}^2$. Das ist
der **größte** Betrag der ganzen Schwingung. Dieselbe Falle kennst du vom senkrechten Wurf: Im höchsten
Punkt ist $v = 0$, aber die Beschleunigung ist weiter $g = 9{,}81\,\text{m/s}^2$ nach unten.
:::

### Geschwindigkeit an einem bestimmten Ort

Oft ist nicht die Zeit gegeben, sondern der Ort. Dann hilft eine Formel ohne $t$. Wir quadrieren
$x = A\sin(\omega t)$ und $v = A\omega\cos(\omega t)$ und nutzen $\sin^2 u + \cos^2 u = 1$ (der
„trigonometrische Pythagoras“ aus der Mathematiklektion
[5.12 Trigonometrische Identitäten](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten)).
Wir teilen $x$ durch $A$ und $v$ durch $A\omega$, quadrieren und addieren:
$$\left(\frac{x}{A}\right)^2 + \left(\frac{v}{A\omega}\right)^2 = 1 \qquad\text{also}\qquad v = \pm\,\omega\sqrt{A^2 - x^2}.$$
Dabei ist $x$ der Ort, $A$ die Amplitude und $\omega$ die Kreisfrequenz. Das Vorzeichen hängt davon ab, in
welche Richtung der Körper gerade läuft. Bei $x = 0$ ergibt sich $\hat v = \omega A$, bei $x = \pm A$ ergibt
sich $v = 0$. In der Lektion [7.6 Energie in der Schwingung](/lernen/physik1/schwingungen/energie-in-der-schwingung)
kommen wir mit dem Energiesatz auf dieselbe Formel.

:::beispiel[Wie schnell ist der Körper an einer bestimmten Stelle?]
Ein Körper schwingt mit $A = 8{,}0\,\text{cm}$ und $\omega = 5{,}0\,\text{s}^{-1}$. Wie schnell ist er bei
$x = 4{,}8\,\text{cm}$?

**Schritt 1, Formel wählen:** Der Ort ist gegeben, die Zeit nicht. Also $v = \omega\sqrt{A^2 - x^2}$.

**Schritt 2, einsetzen:** $A^2 - x^2 = 64\,\text{cm}^2 - 23{,}04\,\text{cm}^2 = 40{,}96\,\text{cm}^2$, und die
Wurzel daraus ist $6{,}4\,\text{cm}$.

**Schritt 3, Ergebnis:** $v = 5{,}0\,\text{s}^{-1}\cdot 6{,}4\,\text{cm} = 32\,\text{cm/s} = 0{,}32\,\text{m/s}$.
Die Höchstgeschwindigkeit wäre $\omega A = 40\,\text{cm/s}$. Bei $60\,\%$ der Amplitude hat er also noch
$80\,\%$ der Höchstgeschwindigkeit.
:::

:::achtung[Fehler: Doppelte Frequenz, doppelte Beschleunigung]
Im Beispiel mit $A = 4{,}0\,\text{cm}$ und $T = 1{,}2\,\text{s}$ war $\hat a = 1{,}10\,\text{m/s}^2$. Die Frequenz wird
verdoppelt. Falsch: „$\hat a$ wird $2{,}2\,\text{m/s}^2$.“

In $\hat a = A\omega^2$ steht $\omega$ im **Quadrat**. Doppelte Frequenz heißt doppeltes $\omega$ und
vierfaches $\hat a$. Richtig: $\hat a = 4\cdot 1{,}10\,\text{m/s}^2 = 4{,}39\,\text{m/s}^2$.
:::

```reflexion
frage: Warum ist die Beschleunigung in der Ruhelage null, obwohl der Körper dort am schnellsten ist? Und warum ist sie im Umkehrpunkt am größten, obwohl er dort stillsteht?
antwort: |
  Die Beschleunigung hängt nicht von der Geschwindigkeit ab, sondern von der resultierenden Kraft. In der Ruhelage ist
  sie null (beim waagrechten Wagen ist die Feder dort entspannt), also gibt es keine Beschleunigung. Der Körper läuft
  dort nur wegen seiner Trägheit weiter. Im Umkehrpunkt ist die Auslenkung am größten, also nach $F = -D x$ auch die
  Rückstellkraft. Dass er dort kurz stillsteht, ändert daran nichts. Die große Kraft sorgt gerade dafür, dass er umkehrt.
```

### Aufgaben zu den Zeitfunktionen

```aufgabe
id: p7-gegenphasig
titel: Phasenlage von x, v und a
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Aussagen über eine harmonische Schwingung sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Beschleunigung und Auslenkung sind gegenphasig."
      - "In der Ruhelage ist die Geschwindigkeit null."
      - "Im Umkehrpunkt ist die Beschleunigung betragsmäßig am größten."
      - "Geschwindigkeit und Auslenkung sind um eine Viertelperiode verschoben."
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: In der Ruhelage ist die Geschwindigkeit nicht null, sondern am **größten**. Null ist sie in den Umkehrpunkten.
      - wert: [0, 2]
        meldung: Auch die letzte Aussage stimmt. Die Geschwindigkeit hat ihr Maximum in der Ruhelage, die Auslenkung eine Viertelperiode später.
      - wert: [2, 3]
        meldung: Auch die erste Aussage stimmt. Aus $a = -\omega^2 x$ folgt, dass $a$ immer das entgegengesetzte Vorzeichen von $x$ hat.
hinweise:
  - 'Denk an $a = -\omega^2 x$ und an das Diagramm der drei Kurven.'
loesung: |
  **Beschleunigung:** $a = -\omega^2 x$ ist gegenphasig zu $x$ und in den Umkehrpunkten betragsmäßig am größten. Aussagen 1 und 3 stimmen.
  ---
  **Geschwindigkeit:** $v = A\omega\cos(\omega t)$ ist gegenüber $x = A\sin(\omega t)$ um $T/4$ verschoben. In der Ruhelage ist $v$ am größten, nicht null. Aussage 4 stimmt, Aussage 2 ist falsch.
```

```aufgabe
id: p7-3-umkehrpunkt
titel: Im oberen Umkehrpunkt
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Körper schwingt an einer senkrechten Feder. Was gilt in dem Moment, in dem er im **oberen** Umkehrpunkt ist?
teile:
  - typ: auswahl
    optionen:
      - "$v = 0$ und $a = 0$"
      - "$v = 0$, und die Beschleunigung ist am größten und zeigt nach unten."
      - "$v$ ist am größten, und $a = 0$."
      - "$v = 0$, und die Beschleunigung ist am größten und zeigt nach oben."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist die häufigste Fehlvorstellung. Wäre auch $a = 0$, bliebe der Körper oben stehen. Die resultierende Kraft aus Feder- und Gewichtskraft zieht ihn aber gerade dort am stärksten zurück.
      - wert: 2
        meldung: Das gilt in der **Ruhelage**. Im Umkehrpunkt kehrt der Körper um, dort ist er kurz in Ruhe.
      - wert: 3
        meldung: Der Betrag stimmt, die Richtung nicht. Die Beschleunigung zeigt immer zur Ruhelage. Oben heißt das nach unten.
hinweise:
  - Wohin zeigt die Rückstellkraft, wenn der Körper oben ist?
loesung: |
  **Geschwindigkeit:** Im Umkehrpunkt kehrt der Körper die Richtung um, also ist $v = 0$.
  ---
  **Beschleunigung:** Nach $a = -\omega^2 x$ ist $|a|$ bei der größten Auslenkung am größten. Weil $x$ positiv ist, ist $a$ negativ, zeigt also nach unten zur Ruhelage.
```

```aufgabe
id: p7-3-proportional
titel: Dreifache Frequenz
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine harmonische Schwingung wird mit gleicher Amplitude, aber mit dreifacher Frequenz wiederholt. Um welchen Faktor ändert sich die größte Beschleunigung?
teile:
  - typ: zahl
    loesung: "3^2"
    anzeige: '9'
    fehler:
      - wert: "3"
        meldung: So ändert sich die größte **Geschwindigkeit** $\hat v = A\omega$. In $\hat a = A\omega^2$ steht $\omega$ im Quadrat.
      - wert: "6"
        meldung: Du hast verdoppelt statt quadriert. Der Faktor für $\omega$ ist $3$, der Faktor für $\omega^2$ ist $3^2$.
hinweise:
  - '$\hat a = A\omega^2$ und $\omega = 2\pi f$.'
loesung: |
  **Ansatz:** $\hat a = A\omega^2$. $A$ bleibt gleich, und $\omega = 2\pi f$ wird dreimal so groß.
  ---
  **Faktor:** $\omega^2$ wird $3^2 = 9$-mal so groß, also auch $\hat a$. Die größte Geschwindigkeit wird dagegen nur dreimal so groß.
```

```aufgabe
id: p7-vmax-amax
titel: Höchstgeschwindigkeit und Höchstbeschleunigung
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Körper schwingt harmonisch mit der Amplitude $3{,}0\,\text{cm}$ und der Frequenz $5{,}0\,\text{Hz}$. Berechne die größte Geschwindigkeit in m/s und die größte Beschleunigung in $\text{m/s}^2$ (auf drei signifikante Stellen).
teile:
  - typ: zahl
    label: größte Geschwindigkeit
    loesung: "0.03*2*pi*5"
    einheit: "m/s"
    anzeige: '0{,}942'
    fehler:
      - wert: "3*2*pi*5"
        meldung: Du hast die Amplitude in Zentimetern eingesetzt. Für m/s muss $A$ in Metern stehen, $3{,}0\,\text{cm} = 0{,}030\,\text{m}$.
      - wert: "0.03*5"
        meldung: Du hast die Frequenz statt der Kreisfrequenz genommen. Es gilt $\hat v = A\omega$ mit $\omega = 2\pi f$.
  - typ: zahl
    label: größte Beschleunigung
    loesung: "0.03*(2*pi*5)^2"
    einheit: "m/s²"
    anzeige: '29{,}6'
    fehler:
      - wert: "0.03*2*pi*5"
        meldung: Das ist $A\omega$, die größte Geschwindigkeit. Für die Beschleunigung braucht man $\omega$ im Quadrat.
      - wert: "0.03*5^2"
        meldung: Du hast $f^2$ statt $\omega^2$ genommen. Es fehlt der Faktor $(2\pi)^2 \approx 39{,}5$.
hinweise:
  - '$\hat v = A\omega$ und $\hat a = A\omega^2$, mit $A$ in Metern.'
  - 'Berechne zuerst $\omega = 2\pi f$.'
loesung: |
  **Kreisfrequenz:** $\omega = 2\pi f = 2\pi\cdot 5{,}0\,\text{s}^{-1} = 31{,}4\,\text{s}^{-1}$.
  ---
  **Geschwindigkeit:** $\hat v = A\omega = 0{,}030\,\text{m}\cdot 31{,}4\,\text{s}^{-1} = 0{,}942\,\text{m/s}$. Sie tritt in der Ruhelage auf.
  ---
  **Beschleunigung:** $\hat a = A\omega^2 = 0{,}030\,\text{m}\cdot(31{,}4\,\text{s}^{-1})^2 = 29{,}6\,\text{m/s}^2$. Sie tritt in den Umkehrpunkten auf und beträgt etwa das Dreifache der Fallbeschleunigung.
```

```aufgabe
id: p7-3-diagramm-phase
titel: Zeitpunkte im Diagramm finden
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Auslenkung eines Körpers. Die Achse zeigt nach oben.

  a) Zu welchem Zeitpunkt in der ersten Periode bewegt sich der Körper am schnellsten **nach unten**?

  b) Zu welchem Zeitpunkt in der ersten Periode ist seine Beschleunigung am größten und zeigt **nach oben**?
plot:
  x: [0, 4]
  y: [-4, 4]
  achsen: { x: "t in s", y: "x in cm" }
  graphen:
    - { f: "3*sin(pi*x)", farbe: 0 }
teile:
  - typ: auswahl
    label: a) am schnellsten nach unten
    optionen: ["$t = 0$", "$t = 0{,}5\\,\\text{s}$", "$t = 1{,}0\\,\\text{s}$", "$t = 1{,}5\\,\\text{s}$"]
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Bei $t = 0$ ist der Körper zwar am schnellsten, aber er läuft nach **oben**. Die Kurve steigt dort.
      - wert: 3
        meldung: Bei $t = 1{,}5\,\text{s}$ ist der Körper ganz unten. Dort steht er kurz still, die Kurve ist waagrecht.
      - wert: 1
        meldung: Bei $t = 0{,}5\,\text{s}$ ist der Körper im oberen Umkehrpunkt und steht kurz still.
  - typ: auswahl
    label: b) größte Beschleunigung nach oben
    optionen: ["$t = 0$", "$t = 0{,}5\\,\\text{s}$", "$t = 1{,}0\\,\\text{s}$", "$t = 1{,}5\\,\\text{s}$"]
    richtig: [3]
    fehler:
      - wert: 1
        meldung: Oben ist die Beschleunigung zwar betragsmäßig am größten, aber sie zeigt nach **unten**, zur Ruhelage hin.
      - wert: 2
        meldung: Bei $t = 1{,}0\,\text{s}$ ist der Körper in der Ruhelage. Dort ist die Beschleunigung null, weil dort keine resultierende Kraft wirkt ($a = -\omega^2 x$ mit $x = 0$).
      - wert: 0
        meldung: Bei $t = 0$ ist der Körper in der Ruhelage. Dort ist die Beschleunigung null, weil dort keine resultierende Kraft wirkt ($a = -\omega^2 x$ mit $x = 0$).
hinweise:
  - Die Geschwindigkeit ist die Steigung der Kurve. Wo fällt sie am steilsten?
  - 'Die Beschleunigung ist $a = -\omega^2 x$. Wo ist $x$ am stärksten negativ?'
loesung: |
  **Ablesen:** Die Periode ist $T = 2\,\text{s}$. Der Körper ist bei $0{,}5\,\text{s}$ oben, bei $1{,}5\,\text{s}$ unten und bei $0$ und $1{,}0\,\text{s}$ in der Ruhelage.
  ---
  **a)** Am schnellsten ist er in der Ruhelage. Nach unten läuft er dort, wo die Kurve fällt, also bei $t = 1{,}0\,\text{s}$.
  ---
  **b)** Nach $a = -\omega^2 x$ ist $a$ am größten und positiv, wo $x$ am stärksten negativ ist. Das ist der untere Umkehrpunkt bei $t = 1{,}5\,\text{s}$.
```

```aufgabe
id: p7-3-ableitung
titel: Geschwindigkeit und Beschleunigung durch Ableiten
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Körper schwingt nach $x(t) = 0{,}04\,\text{m}\cdot\sin(5\,\text{s}^{-1}\cdot t)$. Gib $v(t)$ in m/s und $a(t)$ in $\text{m/s}^2$ an (mit $t$ in Sekunden, ohne Einheiten im Term).
teile:
  - typ: term
    variable: t
    label: "$v(t) =$"
    loesung: "0.2*cos(5*t)"
    fehler:
      - wert: "0.04*cos(5*t)"
        meldung: Die innere Ableitung fehlt. Nach der Kettenregel kommt der Faktor $5$ hinzu, also $0{,}04\cdot 5 = 0{,}2$.
      - wert: "-0.2*cos(5*t)"
        meldung: Die Ableitung des Sinus ist der Kosinus **ohne** Minus. Das Minus kommt erst beim Ableiten des Kosinus.
  - typ: term
    variable: t
    label: "$a(t) =$"
    loesung: "-1*sin(5*t)"
    fehler:
      - wert: "sin(5*t)"
        meldung: Das Minus fehlt. Die Ableitung des Kosinus ist $-\sin$. Die Beschleunigung zeigt immer gegen die Auslenkung.
      - wert: "-0.2*sin(5*t)"
        meldung: Beim zweiten Ableiten kommt die innere Ableitung $5$ noch einmal dazu. $0{,}2\cdot 5 = 1$.
hinweise:
  - 'Kettenregel: Die innere Funktion $5t$ hat die Ableitung $5$.'
  - '$(\sin u)'' = \cos u$ und $(\cos u)'' = -\sin u$. Leite zweimal ab und multipliziere jedes Mal mit $5$.'
gefuehrt:
  - text: Wie groß ist die innere Ableitung von $5t$?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Die Ableitung von $5t$ nach $t$ ist $5$. Das ist die Kreisfrequenz $\omega$.
  - text: Leite $x(t)$ einmal ab. Gib $v(t)$ an.
    teil: { typ: term, variable: t, loesung: "0.2*cos(5*t)" }
    erklaerung: $v(t) = 0{,}04\cdot\cos(5t)\cdot 5 = 0{,}2\cos(5t)$. Der Vorfaktor $0{,}2\,\text{m/s}$ ist $\hat v = A\omega$.
  - text: Leite $v(t)$ noch einmal ab. Gib $a(t)$ an.
    teil: { typ: term, variable: t, loesung: "-sin(5*t)" }
    erklaerung: $a(t) = 0{,}2\cdot(-\sin(5t))\cdot 5 = -1{,}0\sin(5t)$. Der Betrag des Vorfaktors ist $\hat a = A\omega^2 = 0{,}04\cdot 25 = 1{,}0\,\text{m/s}^2$.
  - text: Teile $a(t)$ durch $x(t)$. Welche Zahl erhältst du?
    teil: { typ: zahl, loesung: "-25" }
    erklaerung: $a/x = -1{,}0/0{,}04 = -25 = -\omega^2$. Das ist die Gleichung $a = -\omega^2 x$.
loesung: |
  **Ansatz:** Die Geschwindigkeit ist die Ableitung des Ortes, die Beschleunigung die Ableitung der Geschwindigkeit. Die innere Funktion $5t$ liefert jedes Mal den Faktor $5$.
  ---
  **Geschwindigkeit:** $v(t) = 0{,}04\cdot 5\cdot\cos(5t) = 0{,}2\cos(5t)$ in m/s.
  ---
  **Beschleunigung:** $a(t) = 0{,}2\cdot 5\cdot(-\sin(5t)) = -1{,}0\sin(5t)$ in $\text{m/s}^2$.
  ---
  **Probe:** $a(t) = -25\cdot x(t)$, und $25\,\text{s}^{-2} = \omega^2$. Das ist das lineare Kraftgesetz in der Form $a = -\omega^2 x$. ✓
```

```aufgabe
id: p7-3-amplitude-aus-a
titel: Amplitude aus dem Beschleunigungssensor
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Smartphone ist auf einem schwingenden Brett befestigt. Sein Beschleunigungssensor zeigt eine harmonische Schwingung mit der Frequenz $1{,}5\,\text{Hz}$ und der größten Beschleunigung $4{,}0\,\text{m/s}^2$. Wie groß ist die Amplitude in cm? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "4.0/(2*pi*1.5)^2*100"
    einheit: "cm"
    anzeige: '4{,}50'
    fehler:
      - wert: "4.0/(2*pi*1.5)*100"
        meldung: Du hast nur durch $\omega$ geteilt. Es gilt $\hat a = A\omega^2$, also musst du durch $\omega^2$ teilen.
      - wert: "4.0/1.5^2*100"
        meldung: Du hast durch $f^2$ statt durch $\omega^2$ geteilt. Es fehlt der Faktor $(2\pi)^2$.
hinweise:
  - 'Stelle $\hat a = A\omega^2$ nach $A$ um.'
  - 'Berechne $\omega = 2\pi f$, teile $\hat a$ durch $\omega^2$ und rechne von Metern in Zentimeter um.'
loesung: |
  **Ansatz:** Gegeben ist der Höchstwert der Beschleunigung, gesucht die Amplitude. Aus $\hat a = A\omega^2$ folgt durch Teilen durch $\omega^2$: $A = \dfrac{\hat a}{\omega^2}$.
  ---
  **Kreisfrequenz:** $\omega = 2\pi\cdot 1{,}5\,\text{s}^{-1} = 9{,}42\,\text{s}^{-1}$, also $\omega^2 = 88{,}8\,\text{s}^{-2}$.
  ---
  **Amplitude:** $A = \dfrac{4{,}0\,\text{m/s}^2}{88{,}8\,\text{s}^{-2}} = 0{,}0450\,\text{m} = 4{,}50\,\text{cm}$. Plausibel: Ein Brett, das gut viermal in drei Sekunden um einige Zentimeter wippt. ✓
```

```aufgabe
id: p7-geschwindigkeit-ort
titel: Geschwindigkeit bei halber Amplitude
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Körper schwingt harmonisch mit $A = 10\,\text{cm}$ und $\omega = 10\,\text{s}^{-1}$. Wie schnell ist er, wenn er gerade bei $x = 5{,}0\,\text{cm}$ ist? Gib das Ergebnis in m/s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "10*sqrt(0.1^2-0.05^2)"
    einheit: "m/s"
    anzeige: '0{,}866'
    fehler:
      - wert: "0.5"
        meldung: Du hast angenommen, dass bei halber Amplitude die halbe Höchstgeschwindigkeit herrscht. Die Geschwindigkeit hängt aber nicht linear vom Ort ab. Nahe der Ruhelage ändert sie sich kaum.
      - wert: "1"
        meldung: Das ist die Höchstgeschwindigkeit $A\omega$ in der Ruhelage. Bei $x = 5\,\text{cm}$ ist der Körper schon etwas langsamer.
hinweise:
  - 'Hier ist der Ort gegeben, nicht die Zeit. Verwende die Formel ohne $t$.'
  - 'Mit $\sin^2 + \cos^2 = 1$ folgt $v = \omega\sqrt{A^2 - x^2}$. Rechne in Metern.'
loesung: |
  **Ansatz:** Die Zeit ist unbekannt, der Ort gegeben. Aus $x = A\sin\varphi$ und $v = A\omega\cos\varphi$ folgt mit $\sin^2\varphi + \cos^2\varphi = 1$ die Formel $v = \omega\sqrt{A^2 - x^2}$.
  ---
  **Einsetzen:** $A^2 - x^2 = (0{,}10\,\text{m})^2 - (0{,}050\,\text{m})^2 = 0{,}0075\,\text{m}^2$. Die Wurzel ist $0{,}0866\,\text{m}$.
  ---
  **Ergebnis:** $v = 10\,\text{s}^{-1}\cdot 0{,}0866\,\text{m} = 0{,}866\,\text{m/s}$.
  ---
  **Deutung:** Das sind $86{,}6\,\%$ der Höchstgeschwindigkeit $A\omega = 1{,}0\,\text{m/s}$. Auf halbem Weg zum Umkehrpunkt ist der Körper noch fast so schnell wie in der Ruhelage.
```

## Das Federpendel: Schwingungsdauer und Federkonstante

```aufgabe
id: p7-4-check
art: check
titel: "Vorwissen: Dehnung durch ein angehängtes Gewicht"
niveau: 1
angabe: |
  An eine Feder mit $D = 40\,\text{N/m}$ wird ein Körper mit $200\,\text{g}$ gehängt. Um wie viele Zentimeter dehnt sie sich, bis der Körper ruhig hängt?
teile:
  - typ: zahl
    loesung: "0.2*9.81/40*100"
    einheit: "cm"
    anzeige: '4{,}91'
    fehler:
      - wert: "0.2/40*100"
        meldung: Du hast die Masse statt der Kraft durch $D$ geteilt. An der Feder zieht die Gewichtskraft $m g$.
hinweise:
  - 'Im Gleichgewicht ist die Federkraft gleich der Gewichtskraft: $D\cdot\Delta l = m g$.'
loesung: |
  Der Körper hängt in Ruhe, also halten sich Federkraft und Gewichtskraft das Gleichgewicht: $D\cdot\Delta l = m g$.
  ---
  $\Delta l = \dfrac{m g}{D} = \dfrac{0{,}200\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{40\,\text{N/m}} = 0{,}0491\,\text{m} = 4{,}91\,\text{cm}$. Wiederholen: [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

Ein **Federpendel** (auch Feder-Masse-System) besteht aus einem Körper der Masse $m$ an einer Feder mit
der Federkonstanten $D$. Die Feder selbst soll so leicht sein, dass wir ihre Masse vernachlässigen
können. Es ist das Standardmodell der harmonischen Schwingung, und es kommt in fast jeder Prüfung vor.

### Die Formel für die Schwingungsdauer

Für den Wagen an der Feder haben wir in der Lektion
[7.2 Die harmonische Schwingung](/lernen/physik1/schwingungen/die-harmonische-schwingung-lineares-kraftgesetz-und-sinusfunktion)
aus dem Grundgesetz die Gleichung $a = -\frac{D}{m}x$ gewonnen. In der Lektion
[7.3 Auslenkung, Geschwindigkeit und Beschleunigung](/lernen/physik1/schwingungen/auslenkung-geschwindigkeit-und-beschleunigung-die-phasenlage)
haben wir für jede Sinusschwingung $a = -\omega^2 x$ gefunden. Beide Gleichungen beschreiben dieselbe
Bewegung, also müssen die Vorfaktoren gleich sein:
$$\omega^2 = \frac{D}{m} \qquad\text{also}\qquad \omega = \sqrt{\frac{D}{m}}.$$
Mit $T = 2\pi/\omega$ und $f = 1/T$ folgt der wichtigste Satz dieser Lektion.

:::satz[Schwingungsdauer des Federpendels]
$$T = 2\pi\sqrt{\frac{m}{D}}, \qquad f = \frac{1}{2\pi}\sqrt{\frac{D}{m}}.$$
Dabei ist $T$ die Schwingungsdauer in s, $f$ die Frequenz in Hz, $m$ die schwingende Masse in kg und
$D$ die Federkonstante in N/m. Die Schwingungsdauer hängt **nicht** von der Amplitude ab und **nicht**
von der Fallbeschleunigung $g$.
:::

Zur Einheit: $\sqrt{\text{kg}/(\text{N/m})} = \sqrt{\text{kg}\cdot\text{m}/(\text{kg}\cdot\text{m/s}^2)} = \sqrt{\text{s}^2} = \text{s}$. ✓

**Ist das plausibel?** Eine **größere Masse** ist träger. Dieselbe Feder beschleunigt sie schwächer, also
dauert eine Schwingung länger. Eine **härtere Feder** (großes $D$) zieht kräftiger zurück, also wird die
Schwingung schneller. Beides steckt in $m/D$ unter der Wurzel. Wegen der Wurzel wirkt eine Änderung aber
abgeschwächt: Vierfache Masse gibt nur doppelte Schwingungsdauer.

:::beispiel[Schwingungsdauer eines Federpendels]
Ein Körper mit $m = 0{,}80\,\text{kg}$ hängt an einer Feder mit $D = 32\,\text{N/m}$.

**Schritt 1, Quotient unter der Wurzel:** $\dfrac{m}{D} = \dfrac{0{,}80\,\text{kg}}{32\,\text{N/m}} = 0{,}025\,\text{s}^2$.

**Schritt 2, Wurzel und $2\pi$:** $T = 2\pi\cdot\sqrt{0{,}025\,\text{s}^2} = 2\pi\cdot 0{,}158\,\text{s} = 0{,}993\,\text{s}$.

**Schritt 3, Frequenz:** $f = \dfrac{1}{0{,}993\,\text{s}} = 1{,}01\,\text{Hz}$. Der Körper schwingt also ungefähr einmal pro Sekunde.
:::

:::achtung[Fehler: Masse in Gramm eingesetzt]
Ein Körper mit $250\,\text{g}$ hängt an einer Feder mit $D = 40\,\text{N/m}$. Falsch gerechnet:
$T = 2\pi\sqrt{250/40}\,\text{s} = 15{,}7\,\text{s}$. Eine leichte Masse an einer gewöhnlichen Feder schwingt aber
nicht eine Viertelminute lang hin und her.

Die Formel liefert Sekunden nur mit SI-Einheiten. Richtig: $m = 0{,}250\,\text{kg}$ und
$T = 2\pi\sqrt{0{,}250/40}\,\text{s} = 0{,}497\,\text{s}$.
:::

### Warum die Amplitude keine Rolle spielt

Diese Aussage ist eine der zwei großen Hürden des Kapitels. Fast alle erwarten zuerst, dass ein weiterer
Ausschlag länger dauert. Lies den Gedanken deshalb in Ruhe.

**Worum geht es?** Wir zeigen: Lenkt man ein Federpendel doppelt so weit aus, braucht es für eine
Schwingung **genau gleich lang**. Diese Eigenschaft heißt **Isochronie**, von griechisch *isos* („gleich“) und *chronos* („Zeit“),
also etwa „gleiche Dauer“.

**Ein Bild:** Zwei gleiche Federpendel hängen nebeneinander. Das linke wird $2\,\text{cm}$ ausgelenkt, das
rechte $4\,\text{cm}$. Beide werden gleichzeitig losgelassen.

**In kleinen Schritten:**

1. Beim rechten Pendel ist die Auslenkung doppelt so groß. Nach $F = -D x$ zieht die Feder also mit
   **doppelter** Kraft.
2. Doppelte Kraft bei gleicher Masse heißt nach $F = m a$ **doppelte** Beschleunigung.
3. Doppelte Beschleunigung heißt: In jeder kleinen Zeitspanne gewinnt das rechte Pendel doppelt so viel
   Geschwindigkeit und legt doppelt so viel Weg zurück.
4. Das rechte Pendel muss zwar einen doppelt so langen Weg zur Ruhelage zurücklegen, ist dabei aber in
   jedem Moment doppelt so schnell. Beide kommen **gleichzeitig** in der Ruhelage an.

**In Worten zurückübersetzt:** Der längere Weg und die größere Kraft gleichen sich genau aus. Das gilt aber
nur, weil die Kraft **proportional** zur Auslenkung wächst. Bei einem anderen Kraftgesetz klappt der
Ausgleich nicht, und die Periode hängt dann von der Amplitude ab.

**Typisches Missverständnis:** „Ein weiterer Ausschlag braucht mehr Zeit, weil der Weg länger ist.“ Der Weg
ist tatsächlich länger, aber die Geschwindigkeit ist im selben Verhältnis größer. In der Formel
$T = 2\pi\sqrt{m/D}$ kommt $A$ gar nicht vor.

```aufgabe
id: p7-4-check-isochronie
art: check
titel: "Vorhersage: zwei Auslenkungen"
niveau: 1
angabe: |
  Ein Federpendel wird einmal $2\,\text{cm}$ und einmal $6\,\text{cm}$ weit ausgelenkt und losgelassen. Wie verhalten sich die beiden Schwingungsdauern?
teile:
  - typ: auswahl
    optionen:
      - "Bei $6\\,\\text{cm}$ ist die Schwingungsdauer dreimal so groß."
      - "Bei $6\\,\\text{cm}$ ist die Schwingungsdauer etwas größer, aber nicht dreimal so groß."
      - "Beide Schwingungsdauern sind gleich."
      - "Bei $6\\,\\text{cm}$ ist die Schwingungsdauer kleiner, weil die Feder stärker zieht."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Der Weg ist dreimal so lang, aber die Feder zieht auch dreimal so stark. Der Körper ist in jedem Moment dreimal so schnell. Das gleicht sich genau aus.
      - wert: 1
        meldung: Beim Federpendel gilt $F = -D x$ exakt. Darum ist die Schwingungsdauer bei jeder Amplitude im elastischen Bereich **genau** gleich, nicht nur ungefähr.
      - wert: 3
        meldung: Die stärkere Kraft macht den Körper schneller, aber er muss auch einen längeren Weg zurücklegen. Beides gleicht sich aus.
hinweise:
  - Kommt die Amplitude in der Formel für die Schwingungsdauer vor?
loesung: |
  Bei dreifacher Auslenkung zieht die Feder mit dreifacher Kraft. Der Körper wird dreimal so stark beschleunigt und ist in jedem Moment dreimal so schnell.
  ---
  Der dreifache Weg wird also in derselben Zeit zurückgelegt. Die Formel $T = 2\pi\sqrt{m/D}$ enthält keine Amplitude. Beide Schwingungsdauern sind gleich.
```

### Das senkrecht hängende Federpendel

Hängt der Körper senkrecht an der Feder, wirkt zusätzlich die Gewichtskraft. Spielt sie für die
Schwingungsdauer eine Rolle? Die Antwort ist nein, und das Freikörperbild zeigt, warum.

```plot
x: [-4, 4]
y: [-5.2, 1]
gleich: true
strecken:
  - { von: [-3.5, 0.5], nach: [3.5, 0.5] }
  - { von: [-1.5, 0.5], nach: [-1.5, -2.1], gestrichelt: true }
  - { von: [-1.9, -2.1], nach: [-1.1, -2.1] }
  - { von: [-1.1, -2.1], nach: [-1.1, -2.9] }
  - { von: [-1.1, -2.9], nach: [-1.9, -2.9] }
  - { von: [-1.9, -2.9], nach: [-1.9, -2.1] }
  - { von: [1.5, 0.5], nach: [1.5, -2.9], gestrichelt: true }
  - { von: [1.1, -2.9], nach: [1.9, -2.9] }
  - { von: [1.9, -2.9], nach: [1.9, -3.7] }
  - { von: [1.9, -3.7], nach: [1.1, -3.7] }
  - { von: [1.1, -3.7], nach: [1.1, -2.9] }
  - { von: [-3.5, -2.5], nach: [3.5, -2.5], gestrichelt: true, farbe: 2 }
vektoren:
  - { von: [-1.7, -2.5], nach: [-1.7, -1.0], label: "F_Feder", farbe: 1 }
  - { von: [-1.3, -2.5], nach: [-1.3, -4.0], label: "F_G", farbe: 0 }
  - { von: [1.3, -3.3], nach: [1.3, -1.3], label: "F_Feder", farbe: 1 }
  - { von: [1.7, -3.3], nach: [1.7, -4.8], label: "F_G", farbe: 0 }
punkte:
  - { x: -3.2, y: -2.2, label: "Ruhelage" }
beschriftung: "Freikörperbilder eines Körpers an einer senkrechten Feder. Links hängt er in der Ruhelage (grüne Linie): Federkraft (orange) und Gewichtskraft (blau) sind gleich groß. Rechts ist er unter die Ruhelage gezogen: Die Feder ist stärker gedehnt und zieht stärker, die Gewichtskraft bleibt gleich. Die resultierende Kraft zeigt nach oben, zur Ruhelage."
```

**Schritt 1, die neue Ruhelage:** Hängt man den Körper an, dehnt seine Gewichtskraft die Feder um
$\Delta l = \dfrac{m g}{D}$. Dort halten sich Federkraft und Gewichtskraft das Gleichgewicht. Das ist die
**Ruhelage** des senkrechten Pendels.

**Schritt 2, Auslenkung aus der Ruhelage:** Zieht man den Körper um $x$ weiter nach unten, wird die Feder
um $\Delta l + x$ gedehnt. Sie zieht mit $D(\Delta l + x)$ nach oben, die Gewichtskraft $m g = D\Delta l$
zieht nach unten. Die resultierende Kraft ist $D\Delta l + D x - D\Delta l = D x$ und zeigt nach oben, also
entgegen der Auslenkung. Zählen wir die Richtung der Auslenkung (hier nach unten) positiv, dann ist das $F = -D x$.

**Schritt 3, das Ergebnis:** Um die neue Ruhelage herum gilt wieder genau $F = -D x$. Die Gewichtskraft
verschiebt nur die Ruhelage nach unten. Die Schwingung selbst ist dieselbe wie waagrecht auf einer
reibungsfreien Schiene. Ein Federpendel schwingt deshalb auf dem Mond genauso schnell wie auf der Erde.

**Ein nützlicher Trick:** Aus $m g = D\Delta l$ folgt $\dfrac{m}{D} = \dfrac{\Delta l}{g}$. Damit ist
$$T = 2\pi\sqrt{\frac{\Delta l}{g}}.$$
Dabei ist $\Delta l$ die Dehnung durch das Anhängen in m. Wer die statische Dehnung kennt, kennt also die
Schwingungsdauer, auch ohne $m$ und $D$ einzeln zu wissen.

:::beispiel[Die Federung eines Autos]
Vier Personen mit zusammen $300\,\text{kg}$ steigen in ein Auto. Die Karosserie sinkt dabei um
$3{,}0\,\text{cm}$ ein. Die gefederte Masse des beladenen Autos ist $1500\,\text{kg}$.

**Schritt 1, Federkonstante:** Die zusätzliche Gewichtskraft $300\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 2943\,\text{N}$
drückt die Federn um $0{,}030\,\text{m}$ zusammen. Alle Federn zusammen haben also
$D = \dfrac{2943\,\text{N}}{0{,}030\,\text{m}} = 9{,}81\cdot 10^{4}\,\text{N/m}$.

**Schritt 2, Schwingungsdauer:** $T = 2\pi\sqrt{\dfrac{1500\,\text{kg}}{9{,}81\cdot 10^{4}\,\text{N/m}}} = 2\pi\cdot 0{,}124\,\text{s} = 0{,}777\,\text{s}$.

**Schritt 3, Frequenz:** $f = \dfrac{1}{0{,}777\,\text{s}} = 1{,}29\,\text{Hz}$. Autobauer zielen auf etwa $1$ bis
$1{,}5\,\text{Hz}$. Das entspricht dem Takt beim Gehen und wird als angenehm empfunden.
:::

:::achtung[Fehler: statische Dehnung zur Amplitude gezählt]
Ein Körper mit $0{,}30\,\text{kg}$ dehnt eine Feder mit $D = 30\,\text{N/m}$ um $9{,}8\,\text{cm}$. Dann wird er
$4{,}0\,\text{cm}$ weiter nach unten gezogen und losgelassen. Falsch: „Die Amplitude ist
$9{,}8\,\text{cm} + 4{,}0\,\text{cm} = 13{,}8\,\text{cm}$, also $E = \tfrac12\cdot 30\cdot 0{,}138^2\,\text{J} = 0{,}29\,\text{J}$.“

Der Körper schwingt um die **neue** Ruhelage. Die Amplitude ist nur die Auslenkung aus ihr:
$A = 4{,}0\,\text{cm}$ und $E = \tfrac12\cdot 30\,\text{N/m}\cdot(0{,}040\,\text{m})^2 = 0{,}024\,\text{J}$.
:::

### Federn kombinieren

Zwei Federn kann man nebeneinander (parallel) oder hintereinander (in Reihe) anbringen. Wie man die
**Ersatzfederkonstante** berechnet, steht in der Lektion
[3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
Kurz zur Erinnerung:

- **Parallel** teilen sich die Federn die Last und dehnen sich gleich weit. Die Kräfte addieren sich:
  $D = D_1 + D_2$. Das Paar ist härter als jede einzelne Feder.
- **In Reihe** trägt jede Feder die volle Last, und die Dehnungen addieren sich. Dann addieren sich die
  Kehrwerte: $\dfrac{1}{D} = \dfrac{1}{D_1} + \dfrac{1}{D_2}$. Die Kette ist weicher als jede einzelne Feder.

Für die Schwingungsdauer setzt man einfach die Ersatzfederkonstante in $T = 2\pi\sqrt{m/D}$ ein.

:::beispiel[Zwei Federn, zwei Anordnungen]
Ein Körper mit $0{,}50\,\text{kg}$ hängt an zwei Federn mit $D_1 = 60\,\text{N/m}$ und $D_2 = 120\,\text{N/m}$.

**Parallel:** $D = 60\,\text{N/m} + 120\,\text{N/m} = 180\,\text{N/m}$ und
$T = 2\pi\sqrt{\dfrac{0{,}50\,\text{kg}}{180\,\text{N/m}}} = 0{,}331\,\text{s}$.

**In Reihe:** $\dfrac{1}{D} = \dfrac{1}{60\,\text{N/m}} + \dfrac{1}{120\,\text{N/m}} = \dfrac{2 + 1}{120\,\text{N/m}} = \dfrac{3}{120\,\text{N/m}}$,
also $D = 40\,\text{N/m}$ und $T = 2\pi\sqrt{\dfrac{0{,}50\,\text{kg}}{40\,\text{N/m}}} = 0{,}702\,\text{s}$.

**Vergleich:** Die Federkonstanten unterscheiden sich um den Faktor $180/40 = 4{,}5$, die
Schwingungsdauern nur um den Faktor $\sqrt{4{,}5} = 2{,}12$.
:::

:::achtung[Fehler: Federkonstanten in Reihe addiert]
Zwei Federn mit je $400\,\text{N/m}$ hängen hintereinander. Falsch: $D = 800\,\text{N/m}$, die Schwingung
wäre schneller. Eine doppelt so lange Federkette gibt aber stärker nach, nicht schwächer.

Richtig ist $\dfrac{1}{D} = \dfrac{2}{400\,\text{N/m}}$, also $D = 200\,\text{N/m}$. Die Schwingungsdauer wird
um den Faktor $\sqrt 2$ **größer** als mit einer Feder.
:::

### Die Federkonstante messen

Es gibt zwei Wege, $D$ zu bestimmen. **Statisch:** Man hängt bekannte Gewichte an und misst die
Verlängerung, dann ist $D = F/\Delta l$. **Dynamisch:** Man misst die Schwingungsdauer bei bekannter Masse
und rechnet $D = \dfrac{4\pi^2 m}{T^2}$. Diese Formel entsteht, wenn man $T = 2\pi\sqrt{m/D}$ quadriert und
nach $D$ auflöst. Auf der Raumstation ISS nutzt man den dynamischen Weg umgekehrt: Astronauten bestimmen
ihre Masse mit einem Sitz an Federn, denn eine Waage funktioniert in der Schwerelosigkeit nicht.

Bei einer ganzen Messreihe trägt man $T^2$ über $m$ auf. Nach $T^2 = \dfrac{4\pi^2}{D}\cdot m$ liegen die
Punkte auf einer Geraden durch den Ursprung mit der Steigung $\dfrac{4\pi^2}{D}$. Wie man Daten so
linearisiert, zeigt die Lektion
[1.10 Diagramme, Ausgleichsgerade und Linearisierung](/lernen/physik1/groessen-einheiten-messen/diagramme-ausgleichsgerade-und-linearisierung).

```reflexion
frage: Erkläre in eigenen Worten, warum ein Federpendel auf dem Mond genauso schnell schwingt wie auf der Erde, ein Fadenpendel aber nicht.
antwort: |
  Beim Federpendel kommt die Rückstellkraft von der Feder. Die Gewichtskraft verschiebt nur die Ruhelage nach unten,
  um die neue Ruhelage herum gilt wieder $F = -D x$. Die Schwingungsdauer hängt deshalb nur von $m$ und $D$ ab,
  und beide sind auf dem Mond gleich. Beim Fadenpendel ist die Rückstellkraft dagegen ein Teil der Gewichtskraft
  selbst. Auf dem Mond ist sie kleiner, das Pendel wird schwächer zurückgezogen und schwingt langsamer.
```

### Aufgaben zum Federpendel

```aufgabe
id: p7-federkonstante
titel: Federkonstante messen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Hängt man an eine Feder ein Gewicht von $2{,}0\,\text{N}$, so verlängert sie sich um $4{,}0\,\text{cm}$. Wie groß ist die Federkonstante in N/m?
teile:
  - typ: zahl
    loesung: "2.0/0.04"
    einheit: "N/m"
    anzeige: '50'
    fehler:
      - wert: "2.0/4.0"
        meldung: Du hast die Verlängerung in Zentimetern eingesetzt. Für N/m muss sie in Metern stehen, $4{,}0\,\text{cm} = 0{,}040\,\text{m}$.
      - wert: "2.0*0.04"
        meldung: Du hast multipliziert. Die Federkonstante ist Kraft **pro** Verlängerung, also $D = F/\Delta l$.
hinweise:
  - 'Hookesches Gesetz $F = D\cdot\Delta l$, Verlängerung in Metern.'
loesung: |
  **Ansatz:** Nach dem Hookeschen Gesetz ist $F = D\cdot\Delta l$, also $D = F/\Delta l$.
  ---
  **Rechnung:** $D = \dfrac{2{,}0\,\text{N}}{0{,}040\,\text{m}} = 50\,\text{N/m}$. Für einen Meter Verlängerung bräuchte man also $50\,\text{N}$.
```

```aufgabe
id: p7-federpendel-t
titel: Schwingungsdauer eines Federpendels
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Masse von $0{,}50\,\text{kg}$ hängt an einer Feder mit $D = 50\,\text{N/m}$. Berechne die Schwingungsdauer in s auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "2*pi*sqrt(0.50/50)"
    einheit: "s"
    anzeige: '0{,}628'
    fehler:
      - wert: "2*pi*sqrt(50/0.50)"
        meldung: Du hast den Bruch umgedreht. Unter der Wurzel steht $m/D$. Eine größere Masse muss eine **längere** Schwingungsdauer geben.
      - wert: "sqrt(0.50/50)"
        meldung: Der Faktor $2\pi$ fehlt. Die Wurzel allein ist $1/\omega$, nicht die Schwingungsdauer.
      - wert: "2*pi*0.50/50"
        meldung: Die Wurzel fehlt. Es gilt $T = 2\pi\sqrt{m/D}$.
hinweise:
  - '$T = 2\pi\sqrt{m/D}$ mit SI-Einheiten.'
loesung: |
  **Ansatz:** Für das Federpendel gilt $T = 2\pi\sqrt{m/D}$.
  ---
  **Rechnung:** $\dfrac{m}{D} = \dfrac{0{,}50\,\text{kg}}{50\,\text{N/m}} = 0{,}010\,\text{s}^2$, die Wurzel ist $0{,}10\,\text{s}$. Also $T = 2\pi\cdot 0{,}10\,\text{s} = 0{,}628\,\text{s}$.
```

```aufgabe
id: p7-vierfache-masse
titel: Masse vervierfachen
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Die Masse eines Federpendels wird vervierfacht, die Feder bleibt dieselbe. Was passiert mit der Schwingungsdauer?
teile:
  - typ: auswahl
    optionen:
      - "Sie vervierfacht sich."
      - "Sie verdoppelt sich."
      - "Sie halbiert sich."
      - "Sie bleibt gleich."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Schwingungsdauer ist nicht proportional zur Masse, sondern zur **Wurzel** der Masse. $\sqrt 4 = 2$.
      - wert: 2
        meldung: Eine größere Masse ist träger und schwingt **langsamer**, die Schwingungsdauer wird also größer.
      - wert: 3
        meldung: Die Masse steht in $T = 2\pi\sqrt{m/D}$. Nur die Amplitude und $g$ spielen keine Rolle.
hinweise:
  - 'Wie hängt $T$ von $m$ ab? Schau auf die Wurzel in $T = 2\pi\sqrt{m/D}$.'
loesung: |
  **Ansatz:** $T = 2\pi\sqrt{m/D}$, also ist $T$ proportional zu $\sqrt m$.
  ---
  **Faktor:** Vierfache Masse ergibt den Faktor $\sqrt 4 = 2$. Die Schwingungsdauer verdoppelt sich.
```

```aufgabe
id: p7-4-trampolin
titel: Kind auf dem Trampolin
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Kind wippt auf einem Trampolin, ohne abzuheben. Das Trampolin verhält sich wie eine Feder. Nun steigt ein zweites, gleich schweres Kind dazu. Beide wippen gemeinsam. Um welchen Faktor ändert sich die Schwingungsdauer? Gib den Faktor auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "sqrt(2)"
    anzeige: '1{,}41'
    fehler:
      - wert: "2"
        meldung: Die Schwingungsdauer wächst nicht proportional zur Masse, sondern mit ihrer Wurzel.
      - wert: "sqrt(0.5)"
        meldung: Mehr Masse macht die Schwingung **langsamer**. Der Faktor muss größer als $1$ sein.
hinweise:
  - 'Die Masse verdoppelt sich, die Federkonstante bleibt. $T$ ist proportional zu $\sqrt m$.'
loesung: |
  **Ansatz:** Das Trampolin ist die Feder, ihr $D$ bleibt gleich. Die schwingende Masse verdoppelt sich. Nach $T = 2\pi\sqrt{m/D}$ ist $T$ proportional zu $\sqrt m$.
  ---
  **Faktor:** $\dfrac{T_2}{T_1} = \sqrt{\dfrac{2m}{m}} = \sqrt 2 = 1{,}41$. Die Schwingungsdauer wird um gut $40\,\%$ länger.
```

```aufgabe
id: p7-masse-aus-t
titel: Masse aus der Schwingungsdauer
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Körper schwingt an einer Feder mit $D = 80\,\text{N/m}$ mit der Periodendauer $1{,}20\,\text{s}$. Welche Masse hat er? Gib das Ergebnis in kg auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "80*1.20^2/(4*pi^2)"
    einheit: "kg"
    anzeige: '2{,}92'
    fehler:
      - wert: "80*1.20/(4*pi^2)"
        meldung: Du hast $T$ nicht quadriert. Beim Quadrieren von $T = 2\pi\sqrt{m/D}$ wird auch die linke Seite quadriert, $T^2$.
      - wert: "80*1.20^2/(2*pi)"
        meldung: Auch $2\pi$ muss quadriert werden, $(2\pi)^2 = 4\pi^2 \approx 39{,}5$.
      - wert: "4*pi^2*80/1.20^2"
        meldung: Das ist die Formel für $D$ bei gegebener Masse, mit vertauschten Rollen. Löse $T^2 = 4\pi^2 m/D$ nach $m$ auf.
hinweise:
  - 'Quadriere $T = 2\pi\sqrt{m/D}$, damit die Wurzel verschwindet.'
  - 'Aus $T^2 = 4\pi^2\dfrac{m}{D}$ folgt durch Multiplizieren mit $D$ und Teilen durch $4\pi^2$ die Masse.'
gefuehrt:
  - text: Überlege zuerst, wie du die Wurzel loswirst, ohne zu rechnen.
    erklaerung: Wir quadrieren beide Seiten. Aus $T = 2\pi\sqrt{m/D}$ wird $T^2 = 4\pi^2\dfrac{m}{D}$.
  - text: Berechne $T^2$ in $\text{s}^2$.
    teil: { typ: zahl, loesung: "1.20^2", einheit: "s²" }
    erklaerung: $T^2 = (1{,}20\,\text{s})^2 = 1{,}44\,\text{s}^2$.
  - text: Berechne $4\pi^2$ auf zwei Nachkommastellen.
    teil: { typ: zahl, loesung: "4*pi^2" }
    erklaerung: $4\pi^2 = 39{,}48$.
  - text: Löse nach $m$ auf und berechne die Masse in kg.
    teil: { typ: zahl, loesung: "80*1.44/(4*pi^2)", einheit: "kg" }
    erklaerung: $m = \dfrac{D T^2}{4\pi^2} = \dfrac{80\,\text{N/m}\cdot 1{,}44\,\text{s}^2}{39{,}48} = 2{,}92\,\text{kg}$.
loesung: |
  **Ansatz:** Wir quadrieren $T = 2\pi\sqrt{m/D}$ und erhalten $T^2 = 4\pi^2\dfrac{m}{D}$. Multiplizieren mit $D$ und Teilen durch $4\pi^2$ ergibt $m = \dfrac{D T^2}{4\pi^2}$.
  ---
  **Rechnung:** $m = \dfrac{80\,\text{N/m}\cdot(1{,}20\,\text{s})^2}{4\pi^2} = \dfrac{115{,}2\,\text{kg}}{39{,}48} = 2{,}92\,\text{kg}$, denn $\text{N}\cdot\text{s}^2/\text{m} = \text{kg}$.
  ---
  **Probe:** $2\pi\sqrt{2{,}92/80}\,\text{s} = 2\pi\cdot 0{,}191\,\text{s} = 1{,}20\,\text{s}$. ✓ So bestimmen Astronauten auf der ISS ihre Masse.
```

```aufgabe
id: p7-statische-dehnung
titel: Frequenz aus der Dehnung
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Körper dehnt eine Feder beim Anhängen um $5{,}0\,\text{cm}$. Mit welcher Frequenz schwingt er, wenn man ihn anstößt? Masse und Federkonstante sind nicht gegeben. Gib das Ergebnis in Hz auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "1/(2*pi*sqrt(0.050/9.81))"
    einheit: "Hz"
    anzeige: '2{,}23'
    fehler:
      - wert: "2*pi*sqrt(0.050/9.81)"
        meldung: Das ist die Schwingungsdauer $T$. Gefragt ist die Frequenz $f = 1/T$.
      - wert: "1/(2*pi*sqrt(5.0/9.81))"
        meldung: Du hast die Dehnung in Zentimetern eingesetzt. Mit $g$ in $\text{m/s}^2$ muss $\Delta l$ in Metern stehen.
hinweise:
  - 'Im Gleichgewicht gilt $m g = D\,\Delta l$. Was folgt daraus für $m/D$?'
  - 'Setze $m/D = \Delta l/g$ in $T = 2\pi\sqrt{m/D}$ ein.'
loesung: |
  **Ansatz:** Im Gleichgewicht hält die Federkraft der Gewichtskraft stand: $D\,\Delta l = m g$. Teilen durch $D$ und durch $g$ ergibt $\dfrac{m}{D} = \dfrac{\Delta l}{g}$.
  ---
  **Schwingungsdauer:** $T = 2\pi\sqrt{\dfrac{\Delta l}{g}} = 2\pi\sqrt{\dfrac{0{,}050\,\text{m}}{9{,}81\,\text{m/s}^2}} = 0{,}449\,\text{s}$.
  ---
  **Frequenz:** $f = \dfrac{1}{T} = 2{,}23\,\text{Hz}$. Das Federpendel „weiß“ über seine Dehnung, wie schnell es schwingt.
```

```aufgabe
id: p7-zwei-federn
titel: Zwei gleiche Federn
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Masse von $1{,}0\,\text{kg}$ wird an zwei gleiche Federn mit je $D = 100\,\text{N/m}$ gehängt, einmal nebeneinander (parallel), einmal hintereinander (in Reihe). Berechne beide Schwingungsdauern in s auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: parallel
    loesung: "2*pi*sqrt(1.0/200)"
    einheit: "s"
    anzeige: '0{,}444'
    fehler:
      - wert: "2*pi*sqrt(1.0/50)"
        meldung: Das ist das Ergebnis für die Reihenschaltung. Parallel teilen sich die Federn die Last, das Paar ist **härter**, und die Schwingung wird schneller.
  - typ: zahl
    label: in Reihe
    loesung: "2*pi*sqrt(1.0/50)"
    einheit: "s"
    anzeige: '0{,}889'
    fehler:
      - wert: "2*pi*sqrt(1.0/200)"
        meldung: In Reihe addieren sich nicht die Federkonstanten, sondern ihre Kehrwerte. Die Kette ist weicher, $D = 50\,\text{N/m}$.
hinweise:
  - 'Parallel gilt $D = D_1 + D_2$, in Reihe $\dfrac1D = \dfrac1{D_1} + \dfrac1{D_2}$.'
  - 'Setze jede Ersatzfederkonstante in $T = 2\pi\sqrt{m/D}$ ein.'
loesung: |
  **Parallel:** Die Federn dehnen sich gleich weit, die Kräfte addieren sich: $D = 200\,\text{N/m}$. Also $T = 2\pi\sqrt{\dfrac{1{,}0\,\text{kg}}{200\,\text{N/m}}} = 0{,}444\,\text{s}$.
  ---
  **In Reihe:** Jede Feder trägt die volle Kraft, die Dehnungen addieren sich: $\dfrac{1}{D} = \dfrac{2}{100\,\text{N/m}}$, also $D = 50\,\text{N/m}$ und $T = 2\pi\sqrt{\dfrac{1{,}0\,\text{kg}}{50\,\text{N/m}}} = 0{,}889\,\text{s}$.
  ---
  **Vergleich:** Die Federkonstanten unterscheiden sich um den Faktor $4$, die Schwingungsdauern wegen der Wurzel nur um den Faktor $2$.
```

```aufgabe
id: p7-auto-federung
titel: Eigenfrequenz eines Kleinwagens
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Zwei Personen mit zusammen $160\,\text{kg}$ und $80\,\text{kg}$ Gepäck steigen in einen Kleinwagen. Die Karosserie senkt sich dabei um $2{,}5\,\text{cm}$. Die gefederte Gesamtmasse des beladenen Wagens beträgt $1300\,\text{kg}$. Berechne die Federkonstante der Federung in N/m (auf drei signifikante Stellen) und die Eigenfrequenz des beladenen Wagens in Hz.
teile:
  - typ: zahl
    label: Federkonstante
    loesung: "240*9.81/0.025"
    einheit: "N/m"
    anzeige: '9{,}42\cdot 10^{4}'
    fehler:
      - wert: "240*9.81/2.5"
        meldung: Du hast die Absenkung in Zentimetern eingesetzt. Rechne $2{,}5\,\text{cm} = 0{,}025\,\text{m}$.
      - wert: "1300*9.81/0.025"
        meldung: Die Absenkung um $2{,}5\,\text{cm}$ kommt nur von der **zusätzlichen** Last ($240\,\text{kg}$), nicht vom ganzen Auto. Das leere Auto hatte die Federn schon vorher zusammengedrückt.
  - typ: zahl
    label: Eigenfrequenz
    loesung: "1/(2*pi)*sqrt(240*9.81/0.025/1300)"
    einheit: "Hz"
    anzeige: '1{,}35'
    fehler:
      - wert: "1/(2*pi)*sqrt(240*9.81/0.025/240)"
        meldung: Für die Schwingung zählt die **ganze** gefederte Masse, also $1300\,\text{kg}$. Die $240\,\text{kg}$ brauchst du nur für die Federkonstante.
      - wert: "sqrt(240*9.81/0.025/1300)"
        meldung: Das ist die Kreisfrequenz $\omega$. Für die Frequenz musst du noch durch $2\pi$ teilen.
hinweise:
  - Die zusätzliche Gewichtskraft der Ladung drückt die Federn um $2{,}5\,\text{cm}$ zusammen.
  - '$D = \Delta F/\Delta l$, dann $f = \dfrac{1}{2\pi}\sqrt{D/m}$ mit der gesamten gefederten Masse.'
loesung: |
  **Modell:** Alle Federn zusammen wirken wie eine Feder. Die Ladung ist eine zusätzliche Kraft, die sie um $\Delta l$ zusammendrückt. Für die Schwingung zählt die ganze Masse, die auf den Federn ruht.
  ---
  **Federkonstante:** $\Delta F = 240\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 2354\,\text{N}$, also $D = \dfrac{2354\,\text{N}}{0{,}025\,\text{m}} = 9{,}42\cdot 10^{4}\,\text{N/m}$.
  ---
  **Kreisfrequenz:** $\omega = \sqrt{\dfrac{9{,}42\cdot 10^{4}\,\text{N/m}}{1300\,\text{kg}}} = \sqrt{72{,}4\,\text{s}^{-2}} = 8{,}51\,\text{s}^{-1}$.
  ---
  **Eigenfrequenz:** $f = \dfrac{\omega}{2\pi} = \dfrac{8{,}51\,\text{s}^{-1}}{2\pi} = 1{,}35\,\text{Hz}$. Das liegt im angenehmen Bereich von $1$ bis $1{,}5\,\text{Hz}$. ✓
```

```aufgabe
id: p7-4-messreihe
titel: Federkonstante aus einer Messreihe
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  An einer Feder werden verschiedene Massen in Schwingung versetzt. Gemessen wird jeweils die Schwingungsdauer.

  | $m$ in kg | 0,10 | 0,20 | 0,30 | 0,40 |
  |---|---|---|---|---|
  | $T$ in s | 0,44 | 0,63 | 0,77 | 0,89 |

  Trage $T^2$ über $m$ auf. Bestimme die Steigung der Ursprungsgeraden in $\text{s}^2/\text{kg}$ und daraus die Federkonstante in N/m. Runde beide auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Steigung
    loesung: "0.89^2/0.40"
    einheit: "s²/kg"
    toleranz: 0.06
    anzeige: '1{,}98'
    fehler:
      - wert: "0.89/0.40"
        meldung: Du hast $T$ statt $T^2$ durch $m$ geteilt. Nur $T^2$ ist proportional zu $m$, die Punkte von $T$ über $m$ liegen nicht auf einer Geraden.
  - typ: zahl
    label: Federkonstante
    loesung: "4*pi^2/(0.89^2/0.40)"
    einheit: "N/m"
    toleranz: 0.6
    anzeige: '19{,}9'
    fehler:
      - wert: "4*pi^2/(0.89/0.40)"
        meldung: Du hast die Steigung aus $T$ statt aus $T^2$ berechnet. Die Gerade entsteht erst, wenn man $T^2$ aufträgt.
      - wert: "0.89^2/0.40"
        meldung: Das ist die Steigung selbst. Sie ist $\dfrac{4\pi^2}{D}$, also musst du noch $D = \dfrac{4\pi^2}{\text{Steigung}}$ rechnen.
hinweise:
  - 'Quadriere jedes $T$. Nach $T^2 = \dfrac{4\pi^2}{D}\cdot m$ liegen die Punkte $(m\,|\,T^2)$ auf einer Ursprungsgeraden.'
  - 'Die Steigung ist $\dfrac{4\pi^2}{D}$. Lies sie zum Beispiel am letzten Punkt ab und löse nach $D$ auf.'
loesung: |
  **Modell:** Aus $T = 2\pi\sqrt{m/D}$ folgt durch Quadrieren $T^2 = \dfrac{4\pi^2}{D}\cdot m$. Trägt man $T^2$ über $m$ auf, erwartet man eine Ursprungsgerade mit der Steigung $k = 4\pi^2/D$. Das nennt man Linearisieren.
  ---
  **Quadrieren:** $T^2$ ist $0{,}194$, $0{,}397$, $0{,}593$ und $0{,}792$, jeweils in $\text{s}^2$. Geteilt durch $m$ ergibt das $1{,}94$, $1{,}98$, $1{,}98$ und $1{,}98$, jeweils in $\text{s}^2/\text{kg}$. Die Punkte liegen also gut auf einer Ursprungsgeraden.
  ```plot
  x: [0, 0.45]
  y: [0, 0.9]
  achsen: { x: "m in kg", y: "T² in s²" }
  graphen:
    - { f: "1.98*x", farbe: 0, von: 0, bis: 0.44 }
  punkte:
    - { x: 0.1, y: 0.1936 }
    - { x: 0.2, y: 0.3969 }
    - { x: 0.3, y: 0.5929 }
    - { x: 0.4, y: 0.7921 }
  ```
  ---
  **Steigung:** Am letzten Punkt $k = \dfrac{0{,}792\,\text{s}^2}{0{,}40\,\text{kg}} = 1{,}98\,\text{s}^2/\text{kg}$. Eine Ausgleichsgerade durch alle Punkte liefert praktisch dasselbe.
  ---
  **Federkonstante:** $D = \dfrac{4\pi^2}{k} = \dfrac{39{,}48}{1{,}98\,\text{s}^2/\text{kg}} = 19{,}9\,\text{N/m}$, also rund $20\,\text{N/m}$. Einheitenkontrolle: $\text{kg}/\text{s}^2 = \text{N/m}$. ✓
```

## Das Fadenpendel: Kleinwinkelnäherung und Schwingungsdauer

```aufgabe
id: p7-5-check
art: check
titel: "Vorwissen: Hangabtrieb auf der schiefen Ebene"
niveau: 1
angabe: |
  Ein Körper mit $2{,}0\,\text{kg}$ liegt auf einer reibungsfreien Ebene, die um $10^\circ$ geneigt ist. Wie groß ist die Komponente der Gewichtskraft **parallel** zur Ebene (die Hangabtriebskraft) in N?
teile:
  - typ: zahl
    loesung: "2.0*9.81*sin(inRad(10))"
    einheit: "N"
    anzeige: '3{,}41'
    fehler:
      - wert: "2.0*9.81*cos(inRad(10))"
        meldung: Du hast den Kosinus genommen. Das ist die Komponente **senkrecht** zur Ebene. Parallel zur Ebene wirkt $m g\sin\alpha$. Bei flacher Ebene muss sie klein sein.
hinweise:
  - 'Hangabtriebskraft $F_H = m g\sin\alpha$, Rechner hier im Gradmodus oder Winkel umrechnen.'
loesung: |
  Die Gewichtskraft wird in eine Komponente parallel und eine senkrecht zur Ebene zerlegt. Parallel wirkt $F_H = m g\sin\alpha$.
  ---
  $F_H = 2{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot\sin 10^\circ = 19{,}6\,\text{N}\cdot 0{,}174 = 3{,}41\,\text{N}$. Wiederholen: [3.7 Die schiefe Ebene](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze).
```

Ein **Fadenpendel** (auch mathematisches Pendel) ist ein Modell: ein punktförmiger Körper der Masse $m$
an einem masselosen, nicht dehnbaren Faden der Länge $l$. Reale Pendel kommen dem nahe, wenn der Faden
leicht und der Körper klein gegen die Fadenlänge ist. Eine schwere Kugel an einer dünnen Schnur ist ein
gutes Fadenpendel, eine Schaukel mit Kind schon weniger.

### Die Rückstellkraft beim Pendel

Lenkt man das Pendel um den Winkel $\alpha$ aus, wirken zwei Kräfte auf den Körper: die Gewichtskraft
$F_G = m g$ senkrecht nach unten und die **Fadenkraft** $F_S$ entlang des Fadens zum Aufhängepunkt. Wir
zerlegen die Gewichtskraft wie auf der schiefen Ebene, die du aus der Lektion
[3.7 Die schiefe Ebene](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze) kennst:

- Die Komponente **in Fadenrichtung** ist $m g\cos\alpha$. Sie zieht am Faden und wird von der Fadenkraft
  ausgeglichen.
- Die Komponente **quer zum Faden**, also entlang der Kreisbahn, ist $m g\sin\alpha$. Sie zieht den Körper
  zum tiefsten Punkt zurück. Das ist die Rückstellkraft.

```plot
x: [-2.5, 3.5]
y: [-6, 0.5]
gleich: true
strecken:
  - { von: [-1, 0], nach: [1, 0] }
  - { von: [0, 0], nach: [1.6905, -3.6252] }
  - { von: [0, 0], nach: [0, -4.4], gestrichelt: true }
kurven:
  - { x: "4*sin(t)", y: "-4*cos(t)", t: [-0.6, 0.6], farbe: 3 }
vektoren:
  - { von: [1.6905, -3.6252], nach: [1.6905, -5.6252], label: "F_G", farbe: 0 }
  - { von: [1.6905, -3.6252], nach: [0.9245, -1.9824], label: "F_S", farbe: 2 }
  - { von: [1.6905, -3.6252], nach: [0.9245, -3.9824], label: "m·g·sin α", farbe: 1 }
punkte:
  - { x: 1.6905, y: -3.6252 }
  - { x: 0.35, y: -1.3, label: "α" }
beschriftung: "Freikörperbild eines Fadenpendels, das um α = 25° ausgelenkt ist und gerade im Umkehrpunkt steht. Auf den Körper wirken die Gewichtskraft F_G (blau) und die Fadenkraft F_S (grün). Die orange Komponente m·g·sin α der Gewichtskraft zeigt entlang der Kreisbahn (violett) zum tiefsten Punkt zurück. Die andere Komponente gleicht die Fadenkraft aus."
```

Die Rückstellkraft ist also
$$F = -m g\sin\alpha.$$
Das Minus bedeutet wieder: Sie zeigt zum tiefsten Punkt zurück. Diese Kraft ist **nicht** proportional zur
Auslenkung, denn der Sinus ist keine Gerade. Das Fadenpendel schwingt deshalb streng genommen **nicht**
harmonisch. Für kleine Winkel aber doch, und das zeigen wir jetzt.

### Die Kleinwinkelnäherung

Für kleine Winkel **im Bogenmaß** gilt $\sin\alpha \approx \alpha$. Der Graph des Sinus schmiegt sich nahe
null an die Gerade $y = \alpha$ an. Diese Gerade ist die Tangente an den Sinus im Ursprung, denn
$\sin'(0) = \cos 0 = 1$. Mehr dazu steht in der Mathematiklektion
[9.10 Die Tangente als Näherung: Linearisierung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung).

```plot
x: [0, 1.2]
y: [0, 1.2]
gleich: true
achsen: { x: "α im Bogenmaß", y: "Wert" }
graphen:
  - { f: "x", label: "α", farbe: 1, gestrichelt: true }
  - { f: "sin(x)", label: "sin α", farbe: 0 }
strecken:
  - { von: [0.1745, 0], nach: [0.1745, 0.1745], gestrichelt: true, farbe: 2 }
beschriftung: "Der Sinus (blau) und die Gerade y = α (orange gestrichelt). Bis etwa α = 0,17, das sind 10°, liegen beide praktisch aufeinander (grüne Markierung). Für größere Winkel bleibt der Sinus deutlich unter der Geraden."
```

Wie gut ist die Näherung? Der relative Fehler von $\alpha$ gegenüber $\sin\alpha$ beträgt:

- bei $5^\circ$ (also $\alpha = 0{,}0873$) nur $0{,}13\,\%$.
- bei $10^\circ$ ($\alpha = 0{,}1745$) etwa $0{,}5\,\%$.
- bei $20^\circ$ ($\alpha = 0{,}3491$) etwa $2{,}1\,\%$.
- bei $45^\circ$ ($\alpha = 0{,}7854$) schon $11\,\%$.

Bis etwa $10^\circ$ ist die Näherung also ausgezeichnet.

**Was bringt uns die Näherung?** Der Körper bewegt sich auf einem Kreisbogen. Seine Auslenkung entlang des
Bogens ist $x = l\cdot\alpha$, also $\alpha = x/l$. Damit wird die Rückstellkraft für kleine Winkel
$$F \approx -m g\,\alpha = -\frac{m g}{l}\cdot x.$$
Das ist ein **lineares Kraftgesetz** $F = -D x$ mit der „Federkonstanten“ $D = \dfrac{m g}{l}$. Wir setzen
sie in die Formel des Federpendels $T = 2\pi\sqrt{m/D}$ ein. Die Masse kürzt sich:
$\dfrac{m}{D} = \dfrac{m\cdot l}{m\cdot g} = \dfrac{l}{g}$.

:::satz[Schwingungsdauer des Fadenpendels für kleine Auslenkungen]
$$T = 2\pi\sqrt{\frac{l}{g}}.$$
Dabei ist $l$ die Länge vom Aufhängepunkt bis zum Schwerpunkt des Körpers in m und $g$ die
Fallbeschleunigung in $\text{m/s}^2$. Die Schwingungsdauer hängt **nicht** von der Masse ab und, solange die
Auslenkung klein ist, **nicht** von der Amplitude.
:::

:::beispiel[Ein Pendel von 60 Zentimetern]
Eine kleine Stahlkugel hängt an einem Faden. Vom Aufhängepunkt bis zur Kugelmitte sind es $0{,}60\,\text{m}$.

**Schritt 1, Quotient:** $\dfrac{l}{g} = \dfrac{0{,}60\,\text{m}}{9{,}81\,\text{m/s}^2} = 0{,}0612\,\text{s}^2$.

**Schritt 2, Schwingungsdauer:** $T = 2\pi\sqrt{0{,}0612\,\text{s}^2} = 2\pi\cdot 0{,}247\,\text{s} = 1{,}55\,\text{s}$.

**Schritt 3, Frequenz:** $f = \dfrac{1}{1{,}55\,\text{s}} = 0{,}644\,\text{Hz}$. Eine Masse brauchten wir nicht.
:::

### Warum die Masse herausfällt

Dass die Masse keine Rolle spielt, überrascht viele. Ein schweres Pendel wird doch stärker nach unten
gezogen. Das stimmt, aber es ist auch träger. Die Rückstellkraft $m g\sin\alpha$ wächst mit der **schweren
Masse** (wie stark die Erde zieht). Der Widerstand gegen die Beschleunigung wächst mit der **trägen Masse**.
Beide sind gleich, das kennst du aus der Lektion
[3.9 Beschleunigte Bezugssysteme](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).
Deshalb kürzt sich $m$, genauso wie beim freien Fall. Eine Eisenkugel und eine gleich große Holzkugel an
gleich langen Fäden schwingen im Gleichtakt. Nur der Luftwiderstand bremst die leichte Holzkugel etwas
schneller ab.

Bei **großen** Ausschlägen wird die Schwingungsdauer etwas länger als $2\pi\sqrt{l/g}$. Bei $10^\circ$ ist
der Unterschied $0{,}2\,\%$, bei $30^\circ$ etwa $1{,}7\,\%$ und bei $90^\circ$ schon $18\,\%$. Die Schwingung
ist dann nicht mehr harmonisch. Deshalb lässt man Pendel im Experiment nur wenig ausschlagen.

:::achtung[Fehler: Länge bis zur Unterkante gemessen]
Eine Kugel mit $6{,}0\,\text{cm}$ Durchmesser hängt an einem $0{,}90\,\text{m}$ langen Faden. Falsch:
$l = 0{,}90\,\text{m} + 0{,}06\,\text{m} = 0{,}96\,\text{m}$ bis zur Unterkante, also $T = 1{,}97\,\text{s}$.

Die Länge reicht bis zum **Schwerpunkt**, also zur Kugelmitte: $l = 0{,}90\,\text{m} + 0{,}03\,\text{m} = 0{,}93\,\text{m}$
und $T = 2\pi\sqrt{0{,}93/9{,}81}\,\text{s} = 1{,}93\,\text{s}$. Wer mit dem Pendel $g$ misst, macht mit der falschen
Länge einen Fehler von über $3\,\%$.
:::

:::achtung[Fehler: Kleinwinkelnäherung im Gradmaß]
Jemand schreibt für einen Ausschlag von $10^\circ$: „$\sin 10^\circ \approx 10$“. Das ist sinnlos, denn ein
Sinus ist nie größer als $1$.

Die Näherung gilt nur im **Bogenmaß**: $10^\circ = 0{,}1745$ und $\sin 10^\circ = 0{,}1736$. Erst die Zahlen
im Bogenmaß liegen nahe beieinander.
:::

### Die Fallbeschleunigung mit dem Pendel messen

Weil $T$ von $g$ abhängt, kann man mit einem Pendel die Fallbeschleunigung messen. Man quadriert
$T = 2\pi\sqrt{l/g}$ und löst nach $g$ auf:
$$g = \frac{4\pi^2 l}{T^2}.$$
Dabei misst man $l$ mit einem Maßband und $T$ über viele Perioden. Früher haben Geologen so winzige
Unterschiede von $g$ gemessen und damit dichtes Erz oder leichte Salzstöcke im Untergrund aufgespürt.

:::beispiel[Fallbeschleunigung aus einer Pendelmessung]
Ein Pendel ist bis zur Kugelmitte $1{,}20\,\text{m}$ lang. 15 Schwingungen dauern $33{,}0\,\text{s}$.

**Schritt 1, Periodendauer:** $T = \dfrac{33{,}0\,\text{s}}{15} = 2{,}20\,\text{s}$.

**Schritt 2, quadrieren:** $T^2 = (2{,}20\,\text{s})^2 = 4{,}84\,\text{s}^2$.

**Schritt 3, einsetzen:** $g = \dfrac{4\pi^2\cdot 1{,}20\,\text{m}}{4{,}84\,\text{s}^2} = \dfrac{47{,}4\,\text{m}}{4{,}84\,\text{s}^2} = 9{,}79\,\text{m/s}^2$.

**Kontrolle:** Der Tabellenwert ist $9{,}81\,\text{m/s}^2$. Die Abweichung von $0{,}2\,\%$ liegt im Rahmen
einer Handmessung. ✓
:::

Wie genau ist so ein Ergebnis? In $g = 4\pi^2 l/T^2$ steht $T$ im **Quadrat**. Eine relative Unsicherheit
von $1\,\%$ in $T$ wird deshalb zu $2\,\%$ in $g$. Die relative Unsicherheit von $l$ geht einfach ein. Diese
Regel für Potenzen steht in der Lektion
[1.9 Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung).

Zum Schluss ein Anwendungsbild: Auch dein Bein schwingt beim Gehen wie ein Pendel. Es ist zwar kein
Fadenpendel, sondern ein ausgedehnter Körper (ein **physikalisches Pendel**). Es verhält sich aber ungefähr
wie ein Fadenpendel mit einer Länge bis knapp unter den Schwerpunkt. Lange Beine sind längere Pendel. Deshalb
gehen große Menschen und große Tiere mit gemütlicherem Schritt.

```reflexion
frage: Ein Freund sagt, eine Schaukel mit einem schweren Erwachsenen müsse langsamer schwingen als mit einem leichten Kind, weil der Erwachsene „schwerer in Gang kommt“. Was antwortest du?
antwort: |
  Der Erwachsene ist tatsächlich träger, er kommt schwerer in Gang. Er wird aber auch im selben Verhältnis stärker
  zurückgezogen, weil die Rückstellkraft ein Teil seiner Gewichtskraft ist. Beides wächst mit der Masse und kürzt sich
  heraus. Die Schwingungsdauer hängt nur von der Länge der Ketten und von $g$ ab. Kleine Unterschiede gibt es nur, weil
  ein sitzender Mensch kein punktförmiger Körper ist und sein Schwerpunkt anders liegen kann.
```

### Aufgaben zum Fadenpendel

```aufgabe
id: p7-fadenpendel-t
titel: Pendel von einem Meter
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Wie groß ist die Schwingungsdauer eines Fadenpendels der Länge $1{,}00\,\text{m}$ bei kleinen Ausschlägen? Gib das Ergebnis in s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "2*pi*sqrt(1.00/9.81)"
    einheit: "s"
    anzeige: '2{,}01'
    fehler:
      - wert: "2*pi*sqrt(9.81/1.00)"
        meldung: Du hast den Bruch umgedreht. Ein längeres Pendel schwingt langsamer, also steht $l$ im Zähler.
      - wert: "sqrt(1.00/9.81)"
        meldung: Der Faktor $2\pi$ fehlt.
      - wert: "2*pi*1.00/9.81"
        meldung: Die Wurzel fehlt. Es gilt $T = 2\pi\sqrt{l/g}$.
hinweise:
  - '$T = 2\pi\sqrt{l/g}$.'
loesung: |
  **Ansatz:** Für kleine Ausschläge gilt $T = 2\pi\sqrt{l/g}$.
  ---
  **Rechnung:** $T = 2\pi\sqrt{\dfrac{1{,}00\,\text{m}}{9{,}81\,\text{m/s}^2}} = 2\pi\cdot 0{,}319\,\text{s} = 2{,}01\,\text{s}$. Ein Meterpendel braucht also ziemlich genau zwei Sekunden.
```

```aufgabe
id: p7-laenge-vervierfachen
titel: Pendellänge ändern
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Fadenpendel schwingt mit $T = 1{,}5\,\text{s}$. Die Fadenlänge wird vervierfacht. Wie groß ist die neue Schwingungsdauer in s?
teile:
  - typ: zahl
    loesung: "1.5*sqrt(4)"
    einheit: "s"
    anzeige: '3'
    fehler:
      - wert: "6"
        meldung: Die Schwingungsdauer ist nicht proportional zur Länge, sondern zur **Wurzel** der Länge.
      - wert: "0.75"
        meldung: Ein längeres Pendel schwingt **langsamer**, die Schwingungsdauer wird also größer.
hinweise:
  - '$T$ ist proportional zu $\sqrt l$.'
loesung: |
  **Ansatz:** Nach $T = 2\pi\sqrt{l/g}$ ist $T$ proportional zu $\sqrt l$. Vierfache Länge ergibt den Faktor $\sqrt 4 = 2$.
  ---
  **Ergebnis:** $T' = 2\cdot 1{,}5\,\text{s} = 3{,}0\,\text{s}$.
```

```aufgabe
id: p7-sekundenpendel
titel: Das Sekundenpendel
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Bei einem Sekundenpendel dauert jede **Halbschwingung** (von einem Umkehrpunkt zum anderen) genau $1\,\text{s}$. Wie lang muss es sein? Gib das Ergebnis in m auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "9.81*2^2/(4*pi^2)"
    einheit: "m"
    anzeige: '0{,}994'
    fehler:
      - wert: "9.81*1^2/(4*pi^2)"
        meldung: Du hast $T = 1\,\text{s}$ eingesetzt. Eine Halbschwingung dauert $1\,\text{s}$, die volle Periode also $2\,\text{s}$.
hinweise:
  - Wie lange dauert eine volle Schwingung, wenn jede Halbschwingung $1\,\text{s}$ dauert?
  - 'Quadriere $T = 2\pi\sqrt{l/g}$ und löse nach $l$ auf.'
loesung: |
  **Periode:** Eine volle Schwingung besteht aus zwei Halbschwingungen, also $T = 2{,}0\,\text{s}$.
  ---
  **Umstellen:** Quadrieren ergibt $T^2 = 4\pi^2\dfrac{l}{g}$. Mit $g$ multiplizieren und durch $4\pi^2$ teilen: $l = \dfrac{g T^2}{4\pi^2}$.
  ---
  **Rechnung:** $l = \dfrac{9{,}81\,\text{m/s}^2\cdot 4{,}0\,\text{s}^2}{39{,}48} = 0{,}994\,\text{m}$. Ein Sekundenpendel ist also knapp einen Meter lang. Darum tickt eine große Standuhr im Sekundentakt.
```

```aufgabe
id: p7-g-messen
titel: Fallbeschleunigung mit dem Pendel messen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Pendel der Länge $0{,}800\,\text{m}$ braucht für 20 Schwingungen $35{,}9\,\text{s}$. Berechne daraus $g$ in $\text{m/s}^2$ auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "4*pi^2*0.800/(35.9/20)^2"
    einheit: "m/s²"
    anzeige: '9{,}80'
    fehler:
      - wert: "4*pi^2*0.800/(35.9/20)"
        meldung: Du hast $T$ nicht quadriert. In $g = 4\pi^2 l/T^2$ steht $T^2$.
      - wert: "4*pi^2*0.800/35.9^2"
        meldung: Du hast die Zeit für alle 20 Schwingungen eingesetzt. Teile zuerst durch $20$, um die Periodendauer zu erhalten.
hinweise:
  - Bestimme zuerst die Periodendauer einer einzigen Schwingung.
  - 'Löse $T = 2\pi\sqrt{l/g}$ nach $g$ auf: $g = 4\pi^2 l/T^2$.'
gefuehrt:
  - text: Wie lange dauert eine einzige Schwingung? Gib $T$ in s an.
    teil: { typ: zahl, loesung: "35.9/20", einheit: "s" }
    erklaerung: '$T = 35{,}9\,\text{s} : 20 = 1{,}795\,\text{s}$.'
  - text: Überlege, wie du $T = 2\pi\sqrt{l/g}$ nach $g$ umstellst.
    erklaerung: Quadrieren gibt $T^2 = 4\pi^2 l/g$. Mit $g$ multiplizieren und durch $T^2$ teilen ergibt $g = 4\pi^2 l/T^2$.
  - text: Berechne $T^2$ in $\text{s}^2$ (drei Nachkommastellen).
    teil: { typ: zahl, loesung: "1.795^2", einheit: "s²" }
    erklaerung: $T^2 = (1{,}795\,\text{s})^2 = 3{,}222\,\text{s}^2$.
  - text: Berechne jetzt $g$ in $\text{m/s}^2$.
    teil: { typ: zahl, loesung: "4*pi^2*0.8/1.795^2", einheit: "m/s²" }
    erklaerung: $g = \dfrac{39{,}48\cdot 0{,}800\,\text{m}}{3{,}222\,\text{s}^2} = 9{,}80\,\text{m/s}^2$.
loesung: |
  **Periodendauer:** $T = \dfrac{35{,}9\,\text{s}}{20} = 1{,}795\,\text{s}$.
  ---
  **Umstellen:** Aus $T = 2\pi\sqrt{l/g}$ folgt durch Quadrieren und Auflösen $g = \dfrac{4\pi^2 l}{T^2}$.
  ---
  **Rechnung:** $g = \dfrac{39{,}48\cdot 0{,}800\,\text{m}}{(1{,}795\,\text{s})^2} = \dfrac{31{,}58\,\text{m}}{3{,}222\,\text{s}^2} = 9{,}80\,\text{m/s}^2$. Das passt sehr gut zum Tabellenwert $9{,}81\,\text{m/s}^2$. ✓
```

```aufgabe
id: p7-pendel-mond
titel: Zwei Pendel auf dem Mond
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Astronautin nimmt ein $1{,}00\,\text{m}$ langes Fadenpendel und ein Federpendel mit $T = 0{,}50\,\text{s}$ zum Mond mit ($g_M = 1{,}62\,\text{m/s}^2$). Wie groß ist dort die Schwingungsdauer des Fadenpendels und die des Federpendels? Gib beide in s an.
teile:
  - typ: zahl
    label: Fadenpendel
    loesung: "2*pi*sqrt(1.00/1.62)"
    einheit: "s"
    anzeige: '4{,}94'
    fehler:
      - wert: "2*pi*sqrt(1.00/9.81)"
        meldung: Das ist die Schwingungsdauer auf der Erde. Auf dem Mond musst du $g_M = 1{,}62\,\text{m/s}^2$ einsetzen.
  - typ: zahl
    label: Federpendel
    loesung: "0.50"
    einheit: "s"
    anzeige: '0{,}5'
    fehler:
      - wert: "0.50*sqrt(9.81/1.62)"
        meldung: Du hast das Federpendel wie ein Fadenpendel behandelt. In $T = 2\pi\sqrt{m/D}$ kommt $g$ nicht vor. Die Gewichtskraft verschiebt nur die Ruhelage.
hinweise:
  - Welche der beiden Formeln enthält $g$?
  - 'Fadenpendel: $T = 2\pi\sqrt{l/g}$. Federpendel: $T = 2\pi\sqrt{m/D}$.'
loesung: |
  **Ansatz:** Beim Fadenpendel ist die Rückstellkraft ein Teil der Gewichtskraft, $T$ hängt von $g$ ab. Beim Federpendel kommt sie von der Feder, $T$ hängt nicht von $g$ ab.
  ---
  **Fadenpendel:** $T = 2\pi\sqrt{\dfrac{1{,}00\,\text{m}}{1{,}62\,\text{m/s}^2}} = 4{,}94\,\text{s}$, fast zweieinhalbmal so lang wie auf der Erde ($2{,}01\,\text{s}$).
  ---
  **Federpendel:** Unverändert $0{,}50\,\text{s}$, weil $m$ und $D$ auf dem Mond dieselben sind.
```

```aufgabe
id: p7-pendel-masse-text
titel: Schweres und leichtes Pendel
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Zwei Fadenpendel gleicher Länge tragen eine Eisenkugel und eine gleich große Holzkugel. Erkläre, warum sie (ohne Luftwiderstand) gleich schnell schwingen. Nenne dabei die beiden Rollen, die die Masse spielt.
teile:
  - typ: text
    muster: |
      Die Rückstellkraft ist die Komponente $m g\sin\alpha$ der Gewichtskraft, also proportional zur schweren Masse.
      Die Trägheit, die sich der Beschleunigung widersetzt, ist proportional zur trägen Masse. Beide Massen sind gleich,
      darum kürzt sich $m$: $a = -g\sin\alpha \approx -\frac{g}{l}x$. Die Schwingungsdauer $T = 2\pi\sqrt{l/g}$ hängt nur von
      $l$ und $g$ ab.
hinweise:
  - Wie hängt die Rückstellkraft von der Masse ab?
  - Wie hängt die Trägheit von der Masse ab? Setze beides in $F = m a$ ein.
loesung: |
  **Rückstellkraft:** $F = -m g\sin\alpha$ ist proportional zur Masse. Die Eisenkugel wird stärker zurückgezogen.
  ---
  **Trägheit:** In $F = m a$ steht dieselbe Masse. Die Eisenkugel ist im selben Verhältnis träger.
  ---
  **Ergebnis:** $m$ kürzt sich, $a = -g\sin\alpha$ ist für beide gleich. Deshalb gilt $T = 2\pi\sqrt{l/g}$ ohne Masse. Mit Luftwiderstand wird die leichte Holzkugel schneller gedämpft, ihre Periode bleibt aber fast gleich.
```

```aufgabe
id: p7-5-gedankenexperiment
titel: Pendel im frei fallenden Aufzug
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Gedankenexperiment: In einem Aufzug hängen ein Fadenpendel und ein Federpendel, beide schwingen. Plötzlich reißt das Seil, und der Aufzug fällt frei. Was beobachtet eine Person im Aufzug, solange er fällt?
teile:
  - typ: auswahl
    optionen:
      - "Beide Pendel schwingen unverändert weiter."
      - "Das Fadenpendel schwingt nicht mehr zurück, das Federpendel schwingt mit derselben Schwingungsdauer weiter."
      - "Beide Pendel hören sofort auf zu schwingen."
      - "Das Fadenpendel schwingt schneller, weil der Aufzug beschleunigt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Im frei fallenden Aufzug wirkt die Gewichtskraft für die Person im Aufzug wie aufgehoben. Ohne sie fehlt dem Fadenpendel die Rückstellkraft.
      - wert: 2
        meldung: Die Feder zieht weiter, egal ob man schwerelos ist. Die Rückstellkraft des Federpendels kommt von der Feder, nicht von der Gewichtskraft.
      - wert: 3
        meldung: Im Aufzug wirkt effektiv $g_{\text{eff}} = 0$. Nach $T = 2\pi\sqrt{l/g}$ würde die Schwingungsdauer unendlich groß, das Pendel kehrt also gar nicht mehr um.
hinweise:
  - Woher kommt beim Fadenpendel die Rückstellkraft, woher beim Federpendel?
  - Im frei fallenden Aufzug ist alles schwerelos, als wäre $g = 0$.
loesung: |
  **Ansatz:** Im frei fallenden Aufzug fallen alle Körper gleich schnell mit. Für die Person im Aufzug ist alles schwerelos, als wäre $g = 0$. Das kennst du aus der Lektion [3.9 Beschleunigte Bezugssysteme](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).
  ---
  **Fadenpendel:** Seine Rückstellkraft ist ein Teil der Gewichtskraft. Bei $g = 0$ fehlt sie. Die Kugel bewegt sich gleichförmig auf ihrer Kreisbahn weiter oder bleibt stehen, sie schwingt nicht mehr zurück.
  ---
  **Federpendel:** Seine Rückstellkraft kommt von der Feder. Die Schwingungsdauer $2\pi\sqrt{m/D}$ bleibt gleich. Darum benutzen Astronauten auf der ISS Federn, um ihre Masse zu messen.
```

```aufgabe
id: p7-5-messunsicherheit
titel: g mit Messunsicherheit
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  In einem Schülerversuch misst man die Pendellänge $l = (0{,}750 \pm 0{,}005)\,\text{m}$ und für 30 Schwingungen die Zeit $(52{,}2 \pm 0{,}3)\,\text{s}$.

  a) Berechne $g$ in $\text{m/s}^2$ auf drei signifikante Stellen.

  b) Berechne die absolute Unsicherheit $\Delta g$ in $\text{m/s}^2$ auf zwei Nachkommastellen. Addiere dazu die relativen Unsicherheiten, wobei $T$ wegen des Quadrats doppelt zählt.

  c) Ist das Ergebnis mit dem Tabellenwert $9{,}81\,\text{m/s}^2$ verträglich?
teile:
  - typ: zahl
    label: a) g
    loesung: "4*pi^2*0.750/(52.2/30)^2"
    einheit: "m/s²"
    anzeige: '9{,}78'
    fehler:
      - wert: "4*pi^2*0.750/52.2^2"
        meldung: Teile die Zeit zuerst durch $30$, um die Periodendauer zu erhalten.
  - typ: zahl
    label: b) Unsicherheit
    loesung: "(0.005/0.750 + 2*0.3/52.2)*4*pi^2*0.750/(52.2/30)^2"
    einheit: "m/s²"
    toleranz: 0.01
    anzeige: '0{,}18'
    fehler:
      - wert: "(0.005/0.750 + 0.3/52.2)*4*pi^2*0.750/(52.2/30)^2"
        meldung: Du hast die Unsicherheit von $T$ nur einfach gezählt. In $g = 4\pi^2 l/T^2$ steht $T$ im Quadrat, deshalb zählt seine relative Unsicherheit doppelt.
      - wert: "0.005 + 0.3"
        meldung: Absolute Unsicherheiten verschiedener Größen (Meter und Sekunden) darf man nicht addieren. Addiere die **relativen** Unsicherheiten und multipliziere am Ende mit $g$.
  - typ: auswahl
    label: c) verträglich?
    optionen:
      - "Ja, $9{,}81$ liegt im Bereich $g \\pm \\Delta g$."
      - "Nein, weil $9{,}78 \\ne 9{,}81$."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein Messwert stimmt nie exakt. Verträglich heißt, dass der Tabellenwert innerhalb des Unsicherheitsbereichs liegt. Prüfe, ob $9{,}81$ zwischen $g - \Delta g$ und $g + \Delta g$ liegt.
hinweise:
  - 'Zuerst $T = 52{,}2\,\text{s} : 30$, dann $g = 4\pi^2 l/T^2$.'
  - 'Relativ: $\dfrac{\Delta g}{g} = \dfrac{\Delta l}{l} + 2\cdot\dfrac{\Delta T}{T}$. Die relative Unsicherheit von $T$ ist dieselbe wie die der Gesamtzeit.'
loesung: |
  **Modell:** Für kleine Ausschläge gilt $g = \dfrac{4\pi^2 l}{T^2}$. Für ein Produkt aus Potenzen addieren sich die relativen Unsicherheiten, jeweils mal dem Betrag des Exponenten. Siehe [1.9 Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung).
  ---
  **a)** $T = \dfrac{52{,}2\,\text{s}}{30} = 1{,}74\,\text{s}$ und $g = \dfrac{39{,}48\cdot 0{,}750\,\text{m}}{(1{,}74\,\text{s})^2} = \dfrac{29{,}61\,\text{m}}{3{,}028\,\text{s}^2} = 9{,}78\,\text{m/s}^2$.
  ---
  **b)** Relativ: $\dfrac{\Delta l}{l} = \dfrac{0{,}005}{0{,}750} = 0{,}67\,\%$ und $\dfrac{\Delta T}{T} = \dfrac{0{,}3}{52{,}2} = 0{,}57\,\%$. Zusammen $0{,}67\,\% + 2\cdot 0{,}57\,\% = 1{,}82\,\%$. Also $\Delta g = 0{,}0182\cdot 9{,}78\,\text{m/s}^2 = 0{,}18\,\text{m/s}^2$.
  ---
  **c)** Das Ergebnis lautet $g = (9{,}78 \pm 0{,}18)\,\text{m/s}^2$, also zwischen $9{,}60$ und $9{,}96\,\text{m/s}^2$. Der Tabellenwert $9{,}81\,\text{m/s}^2$ liegt darin. Die Messung ist verträglich. Den größten Beitrag liefert die Zeitmessung, weil sie doppelt zählt.
```

## Energie in der Schwingung

```aufgabe
id: p7-6-check
art: check
titel: "Vorwissen: Spannenergie"
niveau: 1
angabe: |
  Eine Feder mit $D = 300\,\text{N/m}$ ist um $4{,}0\,\text{cm}$ gedehnt. Wie viel Spannenergie speichert sie (in J)?
teile:
  - typ: zahl
    loesung: "0.5*300*0.04^2"
    einheit: "J"
    anzeige: '0{,}24'
    fehler:
      - wert: "300*0.04^2"
        meldung: Der Faktor $\tfrac12$ fehlt. Die Federkraft wächst beim Dehnen von null an. Im Mittel wirkt nur die halbe Endkraft, darum $E_{\text{sp}} = \tfrac12 D s^2$.
      - wert: "0.5*300*0.04"
        meldung: Die Dehnung muss quadriert werden, $E_{\text{sp}} = \tfrac12 D s^2$.
hinweise:
  - '$E_{\text{sp}} = \tfrac12 D s^2$ mit $s$ in Metern.'
loesung: |
  Die Spannenergie ist die Arbeit, die man zum Dehnen braucht: $E_{\text{sp}} = \tfrac12 D s^2$.
  ---
  $E_{\text{sp}} = \tfrac12\cdot 300\,\text{N/m}\cdot(0{,}040\,\text{m})^2 = 0{,}24\,\text{J}$. Wiederholen: [4.3 Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

Eine ungedämpfte Schwingung läuft ewig weiter. Woher nimmt sie ihre Energie? Die Antwort: Sie verbraucht
keine. Die Energie wird nur ständig zwischen zwei Formen hin- und hergeschoben, und ihre Summe bleibt
gleich. Das ist der Energieerhaltungssatz aus der Lektion
[4.4 Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz), angewendet
auf eine Schwingung.

### Energie beim Federpendel

Beim Federpendel gibt es zwei Energieformen:

- Die **Spannenergie** der Feder $E_{\text{sp}} = \tfrac12 D x^2$. Sie hängt von der Auslenkung $x$ ab und
  ist in den Umkehrpunkten am größten.
- Die **Bewegungsenergie** (kinetische Energie) des Körpers $E_{\text{kin}} = \tfrac12 m v^2$. Sie hängt von
  der Geschwindigkeit $v$ ab und ist in der Ruhelage am größten.

Beim senkrechten Federpendel misst man $x$ von der neuen Ruhelage aus. Dann fassen sich Lageenergie und
Spannenergie genau zu $\tfrac12 D x^2$ zusammen, und alles Folgende gilt unverändert.

Verfolgen wir eine halbe Schwingung. Im Umkehrpunkt steht der Körper still: Alles ist Spannenergie. Auf
dem Weg zur Ruhelage wird $x$ kleiner, und der Körper wird schneller: Spannenergie wird zu
Bewegungsenergie. In der Ruhelage ist $x = 0$, also auch $\tfrac12 D x^2 = 0$: Alles ist Bewegungsenergie.
Danach läuft der Vorgang rückwärts.

:::satz[Energie der harmonischen Schwingung]
Für ein ungedämpftes Federpendel gilt zu jeder Zeit
$$E = \tfrac12 D x^2 + \tfrac12 m v^2 = \tfrac12 D A^2 = \tfrac12 m\hat v^2 = \text{konstant}.$$
Dabei ist $E$ die Gesamtenergie, $D$ die Federkonstante, $m$ die Masse, $x$ und $v$ die momentane
Auslenkung und Geschwindigkeit, $A$ die Amplitude und $\hat v$ die Höchstgeschwindigkeit. Die Gesamtenergie
ist proportional zum **Quadrat der Amplitude**.
:::

```plot
x: [-0.1, 0.1]
y: [0, 0.6]
achsen: { x: "x in m", y: "E in J" }
graphen:
  - { f: "75*x^2", label: "E_sp", farbe: 0, von: -0.08, bis: 0.08 }
  - { f: "0.48-75*x^2", label: "E_kin", farbe: 1, von: -0.08, bis: 0.08 }
  - { f: "0.48", label: "E", farbe: 2, gestrichelt: true, von: -0.08, bis: 0.08 }
strecken:
  - { von: [0.04, 0], nach: [0.04, 0.48], gestrichelt: true }
punkte:
  - { x: 0.04, y: 0.12, label: "¼ E" }
  - { x: 0.04, y: 0.36, label: "¾ E" }
beschriftung: "Energie eines Federpendels mit D = 150 N/m und A = 8 cm über dem Ort x. Die Spannenergie (blau) ist eine Parabel, die Bewegungsenergie (orange) ergänzt sie zur konstanten Gesamtenergie 0,48 J (grün). Bei halber Amplitude, x = 4 cm, ist erst ein Viertel der Energie Spannenergie."
```

:::beispiel[Energie und Höchstgeschwindigkeit]
Ein Federpendel hat $D = 150\,\text{N/m}$ und $m = 0{,}60\,\text{kg}$. Es schwingt mit $A = 8{,}0\,\text{cm}$.

**Schritt 1, Gesamtenergie im Umkehrpunkt:** Dort ist $v = 0$, also ist alles Spannenergie:
$E = \tfrac12 D A^2 = \tfrac12\cdot 150\,\text{N/m}\cdot(0{,}080\,\text{m})^2 = 0{,}48\,\text{J}$.

**Schritt 2, Höchstgeschwindigkeit in der Ruhelage:** Dort ist alles Bewegungsenergie:
$\tfrac12 m\hat v^2 = 0{,}48\,\text{J}$. Wir multiplizieren mit $2$, teilen durch $m$ und ziehen die Wurzel:
$\hat v = \sqrt{\dfrac{2\cdot 0{,}48\,\text{J}}{0{,}60\,\text{kg}}} = \sqrt{1{,}6\,\text{m}^2/\text{s}^2} = 1{,}26\,\text{m/s}$.

**Schritt 3, Probe mit der Zeitfunktion:** $\omega = \sqrt{D/m} = \sqrt{250\,\text{s}^{-2}} = 15{,}8\,\text{s}^{-1}$ und
$\hat v = A\omega = 0{,}080\,\text{m}\cdot 15{,}8\,\text{s}^{-1} = 1{,}26\,\text{m/s}$. ✓
:::

Die Probe im Beispiel ist kein Zufall. Aus $\tfrac12 D A^2 = \tfrac12 m\hat v^2$ folgt allgemein
$\hat v = A\sqrt{D/m}$. Aus den Zeitfunktionen wissen wir $\hat v = A\omega$. Der Vergleich liefert wieder
$\omega = \sqrt{D/m}$. Zwei völlig verschiedene Wege führen also zur selben Formel für das Federpendel.

Für jeden anderen Ort $x$ liefert der Energiesatz die Geschwindigkeit. Aus
$\tfrac12 D A^2 = \tfrac12 D x^2 + \tfrac12 m v^2$ folgt $v = \sqrt{\dfrac{D}{m}(A^2 - x^2)} = \omega\sqrt{A^2 - x^2}$.
Das ist dieselbe Formel wie in der Lektion
[7.3 Auslenkung, Geschwindigkeit und Beschleunigung](/lernen/physik1/schwingungen/auslenkung-geschwindigkeit-und-beschleunigung-die-phasenlage).

:::achtung[Fehler: Bei halber Amplitude sei die Energie halb und halb verteilt]
Im Beispiel ($E = 0{,}48\,\text{J}$, $A = 8{,}0\,\text{cm}$) ist der Körper bei $x = 4{,}0\,\text{cm}$. Falsch:
„Er ist auf halbem Weg, also sind $0{,}24\,\text{J}$ Spannenergie und $0{,}24\,\text{J}$ Bewegungsenergie.“

Die Spannenergie wächst mit $x^2$. Halbe Auslenkung gibt ein Viertel der Spannenergie:
$\tfrac12\cdot 150\,\text{N/m}\cdot(0{,}040\,\text{m})^2 = 0{,}12\,\text{J}$. Die Bewegungsenergie ist dort
$0{,}48\,\text{J} - 0{,}12\,\text{J} = 0{,}36\,\text{J}$, also drei Viertel. Im Diagramm über dem Ort siehst du das an der Parabel.
:::

:::achtung[Fehler: Amplitude in Zentimetern eingesetzt]
Falsch: $E = \tfrac12\cdot 150\cdot 8^2 = 4800\,\text{J}$. So viel Bewegungsenergie hat ein Auto mit
gut einer Tonne bei $10\,\text{km/h}$, aber kein kleines Federpendel.

Joule erhält man nur mit Metern: $E = \tfrac12\cdot 150\,\text{N/m}\cdot(0{,}080\,\text{m})^2 = 0{,}48\,\text{J}$.
Einheitenkontrolle: $\text{N/m}\cdot\text{m}^2 = \text{N}\cdot\text{m} = \text{J}$.
:::

### Die Energie im Zeitverlauf

Trägt man die beiden Energieformen über der Zeit auf, sieht man zwei gegenläufige Kurven. Ihre Summe ist
eine waagrechte Linie.

```plot
x: [0, 2]
y: [0, 1.2]
achsen: { x: "t in Perioden T", y: "Anteil an E" }
graphen:
  - { f: "sin(2*pi*x)^2", label: "E_sp", farbe: 0 }
  - { f: "cos(2*pi*x)^2", label: "E_kin", farbe: 1 }
  - { f: "1", label: "E", farbe: 2, gestrichelt: true }
beschriftung: "Anteile von Spannenergie (blau) und Bewegungsenergie (orange) an der Gesamtenergie eines Federpendels über zwei Perioden. Jede Energieform erreicht in einer Periode zweimal ihr Maximum. Die Summe (grün) bleibt konstant."
```

Achte auf eine Besonderheit: Die Energien schwanken mit der **doppelten** Frequenz der Auslenkung. In einer
Periode ist die Feder zweimal am stärksten gespannt, einmal oben und einmal unten. Der Körper ist zweimal
am schnellsten, einmal nach oben und einmal nach unten. Für die Energie ist die Richtung egal, weil $x$ und
$v$ quadriert werden.

### Energie beim Fadenpendel

Beim Fadenpendel wechseln **Lageenergie** $m g h$ und Bewegungsenergie. Dabei ist $h$ die Höhe über dem
tiefsten Punkt. Lässt man das Pendel aus der Höhe $h$ los, ist es im tiefsten Punkt am schnellsten. Aus
$m g h = \tfrac12 m v^2$ folgt
$$v = \sqrt{2 g h}.$$
Die Masse kürzt sich, und auch die Fadenlänge spielt keine Rolle, nur die Fallhöhe. Ist statt der Höhe der
Winkel $\alpha$ gegeben, braucht man die Geometrie: Der Körper hängt im tiefsten Punkt $l$ unter dem
Aufhängepunkt, ausgelenkt nur $l\cos\alpha$. Also ist
$$h = l - l\cos\alpha = l\,(1 - \cos\alpha).$$

:::beispiel[Wie schnell ist das Pendel unten?]
Ein Pendel mit $l = 2{,}0\,\text{m}$ wird um $25^\circ$ ausgelenkt und losgelassen.

**Schritt 1, Höhe:** $h = 2{,}0\,\text{m}\cdot(1 - \cos 25^\circ) = 2{,}0\,\text{m}\cdot(1 - 0{,}906) = 0{,}187\,\text{m}$.

**Schritt 2, Energiesatz:** $m g h = \tfrac12 m v^2$, also $v = \sqrt{2 g h}$.

**Schritt 3, Geschwindigkeit:** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}187\,\text{m}} = \sqrt{3{,}68\,\text{m}^2/\text{s}^2} = 1{,}92\,\text{m/s}$.
:::

:::merke
**Energiesatz statt Zeitfunktion.** Ist nach einer Geschwindigkeit an einem bestimmten **Ort** gefragt und
die Zeit unbekannt, nimm den Energiesatz:
$$\tfrac12 D A^2 = \tfrac12 D x^2 + \tfrac12 m v^2 \qquad\text{beziehungsweise}\qquad m g h_{\max} = m g h + \tfrac12 m v^2.$$
Ist nach einem bestimmten **Zeitpunkt** gefragt, nimm die Zeitfunktionen $x(t)$ und $v(t)$.
:::

```reflexion
frage: Warum schwanken die Energien eines Federpendels mit der doppelten Frequenz der Auslenkung? Erkläre es mit dem Weg durch eine ganze Periode.
antwort: |
  In einer Periode kommt der Körper zweimal in einen Umkehrpunkt, einmal oben und einmal unten. Beide Male ist die Feder
  maximal verformt, und die Spannenergie ist am größten. Dazwischen läuft er zweimal durch die Ruhelage, einmal nach oben
  und einmal nach unten. Beide Male ist die Bewegungsenergie am größten. Weil die Energie von $x^2$ und $v^2$ abhängt, spielt
  das Vorzeichen keine Rolle. Darum wiederholt sich der Energieverlauf schon nach einer halben Periode.
```

### Aufgaben zur Energie

```aufgabe
id: p7-umkehrpunkt-energie
titel: Energie im Umkehrpunkt
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Federpendel mit $D = 40\,\text{N/m}$ wird $5{,}0\,\text{cm}$ ausgelenkt und losgelassen. Wie viel Energie steckt in der Schwingung (in J)?
teile:
  - typ: zahl
    loesung: "0.5*40*0.05^2"
    einheit: "J"
    anzeige: '0{,}05'
    fehler:
      - wert: "0.5*40*5^2"
        meldung: Du hast die Auslenkung in Zentimetern eingesetzt. Für Joule muss $A$ in Metern stehen.
      - wert: "40*0.05^2"
        meldung: Der Faktor $\tfrac12$ fehlt. Die Spannenergie ist $\tfrac12 D A^2$.
      - wert: "0.5*40*0.05"
        meldung: Die Amplitude muss quadriert werden.
hinweise:
  - Im Umkehrpunkt steht der Körper still. Welche Energieform hat er dort?
loesung: |
  **Ansatz:** Beim Loslassen steht der Körper im Umkehrpunkt still. Die ganze Schwingungsenergie steckt in der Feder: $E = \tfrac12 D A^2$.
  ---
  **Rechnung:** $E = \tfrac12\cdot 40\,\text{N/m}\cdot(0{,}050\,\text{m})^2 = 0{,}050\,\text{J}$. Diese Energie bleibt ohne Reibung während der ganzen Schwingung erhalten.
```

```aufgabe
id: p7-energie-amplitude
titel: Doppelte Amplitude
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Amplitude einer harmonischen Schwingung wird verdoppelt. Feder und Masse bleiben gleich. Um welchen Faktor ändert sich die Schwingungsenergie?
teile:
  - typ: zahl
    loesung: "2^2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: 'Die Energie ist nicht proportional zur Amplitude, sondern zu ihrem **Quadrat**: $E = \tfrac12 D A^2$.'
      - wert: "1"
        meldung: Die Schwingungs**dauer** bleibt gleich. Die Energie hängt aber von der Amplitude ab.
hinweise:
  - '$E = \tfrac12 D A^2$.'
loesung: |
  **Ansatz:** $E = \tfrac12 D A^2$ ist proportional zu $A^2$.
  ---
  **Faktor:** Doppelte Amplitude gibt $2^2 = 4$, also vierfache Energie. Die Schwingungsdauer bleibt dabei gleich.
```

```aufgabe
id: p7-6-viertel
titel: Energie bei halber Auslenkung
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Federpendel schwingt ungedämpft mit der Amplitude $A$. Welcher Anteil der Gesamtenergie ist Bewegungsenergie, wenn der Körper gerade bei $x = A/2$ ist?
teile:
  - typ: auswahl
    optionen: ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac34$", "$1$"]
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Das wäre richtig, wenn die Spannenergie proportional zu $x$ wäre. Sie wächst aber mit $x^2$. Bei halber Auslenkung ist erst ein Viertel der Energie in der Feder.
      - wert: 0
        meldung: Ein Viertel ist der Anteil der **Spannenergie**. Gefragt ist der Rest, die Bewegungsenergie.
      - wert: 3
        meldung: Die ganze Energie ist nur in der Ruhelage ($x = 0$) Bewegungsenergie. Bei $x = A/2$ ist die Feder schon etwas gespannt.
hinweise:
  - 'Berechne den Anteil der Spannenergie: $\tfrac12 D (A/2)^2$ verglichen mit $\tfrac12 D A^2$.'
loesung: |
  **Spannenergie:** $\tfrac12 D\left(\tfrac{A}{2}\right)^2 = \tfrac14\cdot\tfrac12 D A^2 = \tfrac14 E$.
  ---
  **Bewegungsenergie:** Der Rest, $E - \tfrac14 E = \tfrac34 E$. Deshalb ist der Körper bei halber Auslenkung noch fast so schnell wie in der Ruhelage.
```

```aufgabe
id: p7-energie-feder
titel: Energie und Höchstgeschwindigkeit
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Federpendel ($D = 200\,\text{N/m}$, $m = 0{,}50\,\text{kg}$) schwingt mit der Amplitude $10\,\text{cm}$. Berechne die Gesamtenergie in J und die Höchstgeschwindigkeit in m/s.
teile:
  - typ: zahl
    label: Gesamtenergie
    loesung: "0.5*200*0.10^2"
    einheit: "J"
    anzeige: '1'
    fehler:
      - wert: "0.5*200*10^2"
        meldung: Du hast die Amplitude in Zentimetern eingesetzt. Rechne $10\,\text{cm} = 0{,}10\,\text{m}$.
      - wert: "200*0.10^2"
        meldung: Der Faktor $\tfrac12$ fehlt.
  - typ: zahl
    label: Höchstgeschwindigkeit
    loesung: "sqrt(2*0.5*200*0.10^2/0.50)"
    einheit: "m/s"
    anzeige: '2'
    fehler:
      - wert: "sqrt(0.5*200*0.10^2/0.50)"
        meldung: Du hast beim Umstellen von $E = \tfrac12 m\hat v^2$ den Faktor $2$ verloren. Es gilt $\hat v = \sqrt{2E/m}$.
      - wert: "2*0.5*200*0.10^2/0.50"
        meldung: Die Wurzel fehlt. $2E/m$ ist $\hat v^2$.
hinweise:
  - Im Umkehrpunkt steckt alles in der Spannenergie, in der Ruhelage alles in der Bewegungsenergie.
  - '$E = \tfrac12 D A^2$, dann $\tfrac12 m\hat v^2 = E$ nach $\hat v$ auflösen.'
gefuehrt:
  - text: Berechne die Gesamtenergie im Umkehrpunkt in J.
    teil: { typ: zahl, loesung: "0.5*200*0.1^2", einheit: "J" }
    erklaerung: $E = \tfrac12\cdot 200\,\text{N/m}\cdot(0{,}10\,\text{m})^2 = 1{,}0\,\text{J}$.
  - text: Überlege, wo die Geschwindigkeit am größten ist und welche Gleichung dort gilt.
    erklaerung: In der Ruhelage ist $x = 0$, also ist alles Bewegungsenergie. Dort gilt $\tfrac12 m\hat v^2 = E$.
  - text: Löse nach $\hat v$ auf und berechne den Wert in m/s.
    teil: { typ: zahl, loesung: "sqrt(2*1/0.5)", einheit: "m/s" }
    erklaerung: $\hat v = \sqrt{2E/m} = \sqrt{2\cdot 1{,}0\,\text{J}/0{,}50\,\text{kg}} = 2{,}0\,\text{m/s}$.
  - text: Probe mit der Kreisfrequenz. Berechne $\omega = \sqrt{D/m}$ in $\text{s}^{-1}$.
    teil: { typ: zahl, loesung: "sqrt(200/0.5)", einheit: "1/s" }
    erklaerung: $\omega = 20\,\text{s}^{-1}$ und $A\omega = 0{,}10\,\text{m}\cdot 20\,\text{s}^{-1} = 2{,}0\,\text{m/s}$. ✓
loesung: |
  **Gesamtenergie:** Im Umkehrpunkt ist alles Spannenergie: $E = \tfrac12 D A^2 = \tfrac12\cdot 200\,\text{N/m}\cdot(0{,}10\,\text{m})^2 = 1{,}0\,\text{J}$.
  ---
  **Höchstgeschwindigkeit:** In der Ruhelage ist alles Bewegungsenergie: $\tfrac12 m\hat v^2 = E$. Also $\hat v = \sqrt{\dfrac{2E}{m}} = \sqrt{\dfrac{2\cdot 1{,}0\,\text{J}}{0{,}50\,\text{kg}}} = \sqrt{4{,}0\,\text{m}^2/\text{s}^2} = 2{,}0\,\text{m/s}$.
  ---
  **Probe:** $\omega = \sqrt{D/m} = 20\,\text{s}^{-1}$ und $\hat v = A\omega = 0{,}10\,\text{m}\cdot 20\,\text{s}^{-1} = 2{,}0\,\text{m/s}$. ✓
```

```aufgabe
id: p7-energie-pendel
titel: Schaukel
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Kind auf einer Schaukel wird so weit ausgelenkt, dass es $50\,\text{cm}$ über dem tiefsten Punkt ist, und losgelassen. Wie schnell ist es im tiefsten Punkt (ohne Reibung)? Gib das Ergebnis in m/s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*0.50)"
    einheit: "m/s"
    anzeige: '3{,}13'
    fehler:
      - wert: "sqrt(9.81*0.50)"
        meldung: Der Faktor $2$ fehlt. Aus $m g h = \tfrac12 m v^2$ folgt $v^2 = 2 g h$.
      - wert: "2*9.81*0.50"
        meldung: Das ist $v^2$. Du musst noch die Wurzel ziehen.
hinweise:
  - 'Energieerhaltung: Lageenergie oben wird zu Bewegungsenergie unten.'
  - '$m g h = \tfrac12 m v^2$. Die Masse kürzt sich.'
loesung: |
  **Ansatz:** Ohne Reibung bleibt die Energie erhalten. Oben ist alles Lageenergie $m g h$, unten alles Bewegungsenergie $\tfrac12 m v^2$.
  ---
  **Umstellen:** $m g h = \tfrac12 m v^2$. Wir kürzen $m$, multiplizieren mit $2$ und ziehen die Wurzel: $v = \sqrt{2 g h}$.
  ---
  **Rechnung:** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}50\,\text{m}} = 3{,}13\,\text{m/s}$, unabhängig von der Kettenlänge und der Masse des Kindes.
```

```aufgabe
id: p7-6-pendel-winkel
titel: Pendel aus einem Winkel loslassen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Pendel mit $l = 1{,}5\,\text{m}$ wird um $40^\circ$ ausgelenkt und losgelassen. Wie schnell ist es im tiefsten Punkt? Gib das Ergebnis in m/s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*1.5*(1-cos(inRad(40))))"
    einheit: "m/s"
    anzeige: '2{,}62'
    fehler:
      - wert: "sqrt(2*9.81*1.5*cos(inRad(40)))"
        meldung: Du hast $h = l\cos\alpha$ gesetzt. Das ist die Höhe des ausgelenkten Körpers **unter dem Aufhängepunkt**. Die Fallhöhe ist der Unterschied zur tiefsten Lage, $h = l - l\cos\alpha$.
      - wert: "sqrt(2*9.81*1.5*sin(inRad(40)))"
        meldung: '$l\sin\alpha$ ist die **waagrechte** Auslenkung. Für die Energie zählt die Höhe, $h = l(1 - \cos\alpha)$.'
      - wert: "sqrt(2*9.81*1.5*(1-cos(40)))"
        meldung: Dein Rechner steht im Bogenmaß, die Angabe ist aber in Grad. Hier brauchst du den Gradmodus oder $40^\circ = 0{,}698$ im Bogenmaß.
hinweise:
  - 'Bestimme zuerst die Fallhöhe aus Länge und Winkel: $h = l(1 - \cos\alpha)$.'
  - 'Dann Energiesatz: $v = \sqrt{2 g h}$.'
loesung: |
  **Höhe:** Ausgelenkt hängt der Körper $l\cos\alpha$ unter dem Aufhängepunkt, unten hängt er $l$ darunter. Die Fallhöhe ist $h = 1{,}5\,\text{m}\cdot(1 - \cos 40^\circ) = 1{,}5\,\text{m}\cdot(1 - 0{,}766) = 0{,}351\,\text{m}$.
  ---
  **Energiesatz:** $m g h = \tfrac12 m v^2$, also $v = \sqrt{2 g h}$.
  ---
  **Rechnung:** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}351\,\text{m}} = \sqrt{6{,}89\,\text{m}^2/\text{s}^2} = 2{,}62\,\text{m/s}$. Bei $40^\circ$ ist das Pendel übrigens nicht mehr genau harmonisch. Für den Energiesatz spielt das aber keine Rolle.
```

```aufgabe
id: p7-6-diagramm
titel: Periode aus dem Energiediagramm
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Bewegungsenergie eines Federpendels über der Zeit. Wie groß ist die Periodendauer der **Schwingung** in s?
plot:
  x: [0, 1.6]
  y: [0, 0.35]
  achsen: { x: "t in s", y: "E_kin in J" }
  graphen:
    - { f: "0.3*cos(2*pi*x/0.8)^2", farbe: 1 }
teile:
  - typ: zahl
    loesung: "0.8"
    einheit: "s"
    anzeige: '0{,}8'
    fehler:
      - wert: "0.4"
        meldung: Das ist der Abstand zweier Maxima der **Energie**. Die Energie schwankt aber mit der doppelten Frequenz der Auslenkung, denn der Körper ist in jeder Periode zweimal am schnellsten.
      - wert: "0.2"
        meldung: Das ist der Abstand von einem Maximum zum nächsten Minimum der Energie. Miss zuerst den Abstand zweier benachbarter Maxima der Energie. Eine Periode der Schwingung umfasst zwei solche Abstände.
hinweise:
  - Lies den Abstand zweier Maxima der Bewegungsenergie ab.
  - Wie oft ist der Körper in einer Periode am schnellsten?
loesung: |
  **Ablesen:** Die Bewegungsenergie hat Maxima bei $t = 0$, $0{,}4\,\text{s}$, $0{,}8\,\text{s}$ und $1{,}2\,\text{s}$. Ihr Abstand ist $0{,}4\,\text{s}$.
  ---
  **Deuten:** Die Bewegungsenergie ist maximal, wenn der Körper durch die Ruhelage läuft. Das passiert zweimal pro Periode, einmal in jede Richtung.
  ---
  **Ergebnis:** Die Periode der Schwingung ist doppelt so lang wie der Abstand der Energiemaxima: $T = 2\cdot 0{,}4\,\text{s} = 0{,}8\,\text{s}$.
```

```aufgabe
id: p7-6-amplitude-aus-v
titel: Amplitude aus einer Momentaufnahme
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Körper ($m = 0{,}25\,\text{kg}$) schwingt an einer Feder mit $D = 100\,\text{N/m}$. In einem Moment ist er $3{,}0\,\text{cm}$ von der Ruhelage entfernt und hat die Geschwindigkeit $0{,}80\,\text{m/s}$. Wie groß ist die Amplitude in cm?
teile:
  - typ: zahl
    loesung: "sqrt((0.5*100*0.03^2 + 0.5*0.25*0.8^2)*2/100)*100"
    einheit: "cm"
    anzeige: '5'
    fehler:
      - wert: "4"
        meldung: Du hast nur die Bewegungsenergie in die Amplitude umgerechnet. Im betrachteten Moment ist die Feder aber schon um $3\,\text{cm}$ gedehnt und speichert ebenfalls Energie. Addiere beide Energien.
      - wert: "7"
        meldung: Du hast die Strecken $3\,\text{cm}$ und $4\,\text{cm}$ addiert. Addieren darf man aber die **Energien**, nicht die Auslenkungen. Die Amplitude folgt dann aus $E = \tfrac12 D A^2$.
hinweise:
  - Berechne die Gesamtenergie in diesem Moment. Sie besteht aus Spannenergie und Bewegungsenergie.
  - 'Im Umkehrpunkt ist alles Spannenergie: $E = \tfrac12 D A^2$. Löse nach $A$ auf.'
loesung: |
  **Ansatz:** Die Gesamtenergie ist zu jeder Zeit gleich. Wir berechnen sie aus dem gegebenen Moment und setzen sie mit der Energie im Umkehrpunkt gleich. Das ist eine Umkehraufgabe mit dem Energiesatz.
  ---
  **Energie jetzt:** $E_{\text{sp}} = \tfrac12\cdot 100\,\text{N/m}\cdot(0{,}030\,\text{m})^2 = 0{,}045\,\text{J}$ und $E_{\text{kin}} = \tfrac12\cdot 0{,}25\,\text{kg}\cdot(0{,}80\,\text{m/s})^2 = 0{,}080\,\text{J}$. Zusammen $E = 0{,}125\,\text{J}$.
  ---
  **Amplitude:** Im Umkehrpunkt gilt $\tfrac12 D A^2 = E$, also $A = \sqrt{\dfrac{2E}{D}} = \sqrt{\dfrac{0{,}25\,\text{J}}{100\,\text{N/m}}} = \sqrt{0{,}0025\,\text{m}^2} = 0{,}050\,\text{m} = 5{,}0\,\text{cm}$.
  ---
  **Probe:** $\omega = \sqrt{D/m} = 20\,\text{s}^{-1}$ und $\omega\sqrt{A^2 - x^2} = 20\,\text{s}^{-1}\cdot\sqrt{0{,}0025 - 0{,}0009}\,\text{m} = 20\,\text{s}^{-1}\cdot 0{,}040\,\text{m} = 0{,}80\,\text{m/s}$. ✓
```

## Gedämpfte Schwingungen: Abklingkonstante aus der Messkurve

```aufgabe
id: p7-7-check
art: check
titel: "Vorwissen: immer wieder halbieren"
niveau: 1
angabe: |
  Eine Größe halbiert sich alle $4\,\text{s}$. Welcher Bruchteil des Anfangswerts ist nach $12\,\text{s}$ noch übrig? Gib ihn als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "0.5^3"
    anzeige: '0{,}125'
    fehler:
      - wert: "1/6"
        meldung: Du hast durch $2\cdot 3 = 6$ geteilt. Dreimal halbieren heißt aber dreimal **nacheinander** durch $2$ teilen, also durch $2\cdot 2\cdot 2 = 8$.
      - wert: "0.25"
        meldung: In $12\,\text{s}$ passt die Halbierungszeit von $4\,\text{s}$ dreimal, nicht zweimal.
hinweise:
  - Wie oft passen $4\,\text{s}$ in $12\,\text{s}$? So oft wird halbiert.
loesung: |
  In $12\,\text{s}$ wird $12 : 4 = 3$-mal halbiert.
  ---
  Übrig bleibt $\left(\tfrac12\right)^3 = \tfrac18 = 0{,}125$. Das ist exponentielle Abnahme. Wiederholen: Mathematiklektion [4.10 Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).
```

Jede reale Schwingung kommt irgendwann zur Ruhe. Eine angestoßene Schaukel schwingt immer weniger weit,
bis sie stillsteht. Der Grund ist **Reibung**: Luftwiderstand, Reibung in den Lagern, innere Reibung in der
Feder. Sie wandelt bei jeder Schwingung einen Teil der Schwingungsenergie in Wärme um. Die Amplitude nimmt
ab. Man spricht von einer **gedämpften Schwingung**. Die Energie ist dabei nicht „verbraucht“. Sie steckt
danach als innere Energie in Luft und Bauteilen, wie in der Lektion
[4.5 Energieerhaltung mit Reibung](/lernen/physik1/arbeit-energie-impuls/energieerhaltung-mit-reibung-energie-wird-umgewandelt-nicht-verbraucht).

### Exponentielle Abnahme der Amplitude

Bei Bewegung in Luft oder Öl ist die Reibungskraft bei kleinen Geschwindigkeiten ungefähr **proportional
zur Geschwindigkeit**. Für diesen wichtigen Fall gilt:

:::definition[Gedämpfte Schwingung mit geschwindigkeitsproportionaler Reibung]
Die Auslenkung ist
$$x(t) = A_0\,e^{-\delta t}\cdot\sin(\omega t), \qquad\text{mit der Amplitude}\qquad A(t) = A_0\,e^{-\delta t}.$$
Dabei ist $A_0$ die Anfangsamplitude, $e \approx 2{,}718$ die Eulersche Zahl und $t$ die Zeit. Die Größe
$\delta$ (gelesen „delta“) heißt **Abklingkonstante**, Einheit $\text{s}^{-1}$. Je größer $\delta$, desto
schneller klingt die Schwingung ab.
:::

Die Amplitude folgt also einer fallenden Exponentialfunktion, wie du sie aus der Mathematiklektion
[4.10 Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen) kennst. Das Kennzeichen: **In gleichen Zeitabständen sinkt die
Amplitude um den gleichen Faktor.** Ein Beispiel: Sie sinkt in einer Periode auf $80\,\%$. Dann sinkt sie in
der nächsten wieder auf $80\,\%$ davon, also auf $64\,\%$ des Anfangswerts.

**Beispiel:** Eine Stimmgabel klingt viele Sekunden lang, ihr $\delta$ ist klein. **Nicht-Beispiel:** Ein
Körper, der auf einem Tisch mit trockener Reibung an einer Feder schwingt. Dort ist die Reibungskraft
konstant. Die Amplitude nimmt pro Periode um den gleichen **Betrag** ab, also linear, und der Körper bleibt
nach endlich vielen Schwingungen stehen.

Die Zeit, in der sich die Amplitude halbiert, heißt **Halbwertszeit der Amplitude** $t_{1/2}$. Aus
$e^{-\delta t_{1/2}} = \tfrac12$ folgt durch Logarithmieren $-\delta t_{1/2} = \ln\tfrac12 = -\ln 2$, also
$$t_{1/2} = \frac{\ln 2}{\delta} \approx \frac{0{,}693}{\delta}.$$
Dabei ist $\ln$ der natürliche Logarithmus. Dieselbe Formel gilt für den radioaktiven Zerfall in der Lektion
[16.12 Das Zerfallsgesetz](/lernen/physik1/wellenoptik-atom-kernphysik/das-zerfallsgesetz-halbwertszeit-und-aktivitaet).

:::beispiel[Halbierung alle drei Sekunden]
Die Amplitude eines Pendels halbiert sich alle $3{,}0\,\text{s}$. Am Anfang beträgt sie $12\,\text{cm}$.

**Schritt 1, Amplitude nach 9 s:** $9\,\text{s}$ sind drei Halbwertszeiten. Also
$A = 12\,\text{cm}\cdot\left(\tfrac12\right)^3 = 12\,\text{cm} : 8 = 1{,}5\,\text{cm}$.

**Schritt 2, Abklingkonstante:** Aus $t_{1/2} = \ln 2/\delta$ folgt durch Umstellen
$\delta = \dfrac{\ln 2}{t_{1/2}} = \dfrac{0{,}693}{3{,}0\,\text{s}} = 0{,}231\,\text{s}^{-1}$.

**Probe:** $A(9\,\text{s}) = 12\,\text{cm}\cdot e^{-0{,}231\cdot 9} = 12\,\text{cm}\cdot e^{-2{,}08} = 12\,\text{cm}\cdot 0{,}125 = 1{,}5\,\text{cm}$. ✓
:::

:::intuition
Warum gerade exponentiell? Bei geschwindigkeitsproportionaler Reibung verliert eine große Schwingung pro
Periode viel Energie, weil der Körper schnell ist. Eine kleine Schwingung verliert wenig, weil er langsam
ist. In jeder Periode geht deshalb der gleiche **Bruchteil** der vorhandenen Energie verloren. Ein fester
Bruchteil pro Zeitschritt ist genau das Kennzeichen einer Exponentialfunktion, wie der Zinseszins, nur
rückwärts.
:::

:::achtung[Fehler: pro Periode den gleichen Betrag abgezogen]
Die Amplitude sinkt in der ersten Periode von $8{,}0\,\text{cm}$ auf $6{,}0\,\text{cm}$. Falsch: „Pro Periode
gehen $2{,}0\,\text{cm}$ verloren, nach drei Perioden bleiben $2{,}0\,\text{cm}$.“

Bei geschwindigkeitsproportionaler Reibung sinkt die Amplitude pro Periode um den gleichen **Faktor**
$6{,}0/8{,}0 = 0{,}75$. Richtig: $8{,}0\,\text{cm}\cdot 0{,}75^3 = 3{,}4\,\text{cm}$. Abgezogen wird nur bei
trockener Reibung.
:::

### Die Abklingkonstante aus einer Messkurve

In der Praxis zeichnet man eine gedämpfte Schwingung auf und will $\delta$ bestimmen. Dafür braucht man
nur zwei Maxima. Liegen zwei Maxima $A_1$ und $A_2$ genau $n$ Perioden auseinander, also im Zeitabstand
$\Delta t = n T$, dann gilt
$$\frac{A_2}{A_1} = e^{-\delta\,\Delta t} \qquad\text{also}\qquad \delta = \frac{\ln(A_1/A_2)}{\Delta t}.$$
Dabei ist $A_1$ das frühere, größere Maximum. Man logarithmiert das Verhältnis und teilt durch den
Zeitabstand. So erhält man $\delta$ in $\text{s}^{-1}$.

:::beispiel[Abklingkonstante aus zwei Maxima]
In einer Messkurve liegt ein Maximum bei $6{,}0\,\text{cm}$. Eine Periode später, nach $1{,}2\,\text{s}$, liegt
das nächste Maximum bei $4{,}5\,\text{cm}$.

**Schritt 1, Verhältnis:** $\dfrac{A_1}{A_2} = \dfrac{6{,}0\,\text{cm}}{4{,}5\,\text{cm}} = 1{,}333$.

**Schritt 2, logarithmieren:** $\ln 1{,}333 = 0{,}288$.

**Schritt 3, durch den Zeitabstand teilen:** $\delta = \dfrac{0{,}288}{1{,}2\,\text{s}} = 0{,}240\,\text{s}^{-1}$.

**Schritt 4, Halbwertszeit:** $t_{1/2} = \dfrac{0{,}693}{0{,}240\,\text{s}^{-1}} = 2{,}89\,\text{s}$. Die Amplitude
halbiert sich also etwa alle zweieinhalb Perioden.
:::

:::achtung[Fehler: dekadischen statt natürlichen Logarithmus genommen]
Die Amplitude halbiert sich alle $4{,}0\,\text{s}$. Falsch gerechnet: $\delta = \dfrac{\lg 2}{4{,}0\,\text{s}} = 0{,}075\,\text{s}^{-1}$
mit der Taste „log“.

Die Basis von $e^{-\delta t}$ ist $e$, also braucht man den **natürlichen** Logarithmus $\ln$. Richtig:
$\delta = \dfrac{\ln 2}{4{,}0\,\text{s}} = 0{,}173\,\text{s}^{-1}$. Mit „log“ ist das Ergebnis um den Faktor
$2{,}3$ zu klein.
:::

```aufgabe
id: p7-7-check-vorhersage
art: check
titel: "Vorhersage: doppelte Abklingkonstante"
niveau: 1
angabe: |
  Im Widget darunter kannst du die Abklingkonstante $\delta$ verändern. **Sag vorher:** Was passiert mit der Halbwertszeit der Amplitude, wenn du $\delta$ verdoppelst?
teile:
  - typ: auswahl
    optionen:
      - "Sie verdoppelt sich."
      - "Sie halbiert sich."
      - "Sie bleibt gleich, nur die Anfangsamplitude ändert sich."
      - "Sie wird viermal so klein."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein größeres $\delta$ heißt stärkere Dämpfung, die Schwingung klingt **schneller** ab. Die Halbwertszeit wird also kürzer.
      - wert: 2
        meldung: Die Anfangsamplitude $A_0$ hängt nicht von $\delta$ ab. $\delta$ bestimmt, wie schnell die Amplitude sinkt.
      - wert: 3
        meldung: In $t_{1/2} = \ln 2/\delta$ steht $\delta$ einfach im Nenner, nicht im Quadrat.
hinweise:
  - '$t_{1/2} = \dfrac{\ln 2}{\delta}$.'
loesung: |
  Nach $t_{1/2} = \ln 2/\delta$ ist die Halbwertszeit umgekehrt proportional zu $\delta$.
  ---
  Doppeltes $\delta$ gibt halbe Halbwertszeit: Bei $\delta = 0{,}3\,\text{s}^{-1}$ ist $t_{1/2} = 2{,}3\,\text{s}$, bei $\delta = 0{,}6\,\text{s}^{-1}$ nur noch $1{,}2\,\text{s}$. Prüfe es im Widget an der gestrichelten Hüllkurve: Sie fällt von $1{,}5\,\text{m}$ auf die Hälfte, $0{,}75\,\text{m}$, bei $\delta = 0{,}3\,\text{s}^{-1}$ nach etwa $2{,}3\,\text{s}$ und bei $\delta = 0{,}6\,\text{s}^{-1}$ schon nach etwa $1{,}2\,\text{s}$.
```

```widget
name: schwingung
titel: Gedämpfte Schwingung
props:
  A: 1.5
  f: 1
  phi: 0
  delta: 0.3
  tmax: 8
  groesse: x
```

**Beobachte im Widget:** Die orange gestrichelte **Hüllkurve** ist $\pm A_0 e^{-\delta t}$. Die Schwingung
berührt sie in jedem Maximum. Verdopple $\delta$ von $0{,}3$ auf $0{,}6\,\text{s}^{-1}$. Die Hüllkurve fällt
steiler, die Amplitude halbiert sich in der halben Zeit. **Erklärung:** Im Exponenten steht das Produkt
$\delta t$. Doppeltes $\delta$ erreicht denselben Wert in der halben Zeit. Achte auch darauf, dass die
Periode bei schwacher Dämpfung fast gleich bleibt.

### Schwach, gerade richtig oder zu stark gedämpft

Je nach Stärke der Dämpfung verhält sich ein ausgelenkter Körper sehr verschieden:

- **Schwache Dämpfung:** Er schwingt viele Male mit langsam abnehmender Amplitude. Beispiele sind die
  Stimmgabel, die Pendeluhr und die Gitarrensaite.
- **Aperiodischer Grenzfall:** Die Dämpfung ist gerade so stark, dass der Körper **ohne Überschwingen** am
  schnellsten in die Ruhelage zurückkehrt. „Aperiodisch“ heißt „nicht periodisch“. Das ist das Ziel bei
  Stoßdämpfern im Auto und bei Zeigermessgeräten.
- **Kriechfall:** Bei sehr starker Dämpfung kriecht der Körper langsam in die Ruhelage zurück. Ein Beispiel
  ist ein Türschließer, der die Tür sanft zuzieht.

```plot
x: [0, 3]
y: [-1, 1.1]
achsen: { x: "t in s", y: "x relativ" }
graphen:
  - { f: "exp(-0.5*x)*cos(2*pi*x)", label: "schwach gedämpft", farbe: 0 }
  - { f: "(1+2*pi*x)*exp(-2*pi*x)", label: "aperiodischer Grenzfall", farbe: 1 }
  - { f: "1.0303*exp(-1.078*x) - 0.0303*exp(-36.62*x)", label: "Kriechfall", farbe: 2 }
beschriftung: "Drei Federpendel mit gleicher Eigenfrequenz (1 Hz), alle aus derselben Auslenkung losgelassen. Schwach gedämpft (blau) schwingt das Pendel mehrmals. Im aperiodischen Grenzfall (orange) kehrt es am schnellsten ohne Überschwingen zurück. Im Kriechfall (grün) braucht es viel länger."
```

Um eine Schwingung trotz Dämpfung aufrechtzuerhalten, muss man die verlorene Energie im richtigen Takt
nachliefern. Das tut die Feder oder Batterie im Uhrwerk, das Kind auf der Schaukel mit seinen Beinen oder
der Bogen bei der Geige. Solche Schwingungen heißen **selbsterregt**.

```reflexion
frage: Warum endet eine Schwingung mit geschwindigkeitsproportionaler Reibung theoretisch nie ganz, eine mit trockener Reibung aber nach endlich vielen Perioden?
antwort: |
  Bei geschwindigkeitsproportionaler Reibung geht pro Periode immer derselbe Bruchteil verloren, etwa ein Viertel der
  Amplitude. Von einer positiven Zahl bleibt nach jedem Schritt wieder eine kleinere positive Zahl übrig. Die Amplitude
  nähert sich null, erreicht sie aber nie. Praktisch wird sie irgendwann unmessbar klein. Bei trockener Reibung wird pro
  Periode ein fester Betrag abgezogen. Nach endlich vielen Abzügen ist nichts mehr übrig, und die Haftreibung hält den
  Körper fest.
```

### Aufgaben zur Dämpfung

```aufgabe
id: p7-daempfung
titel: Abklingende Amplitude
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Die Amplitude eines gedämpften Pendels halbiert sich alle $5{,}0\,\text{s}$. Zu Beginn beträgt sie $8{,}0\,\text{cm}$. Wie groß ist sie nach $15\,\text{s}$ (in cm)?
teile:
  - typ: zahl
    loesung: "8.0*0.5^(15/5.0)"
    einheit: "cm"
    anzeige: '1'
    fehler:
      - wert: "8.0/6"
        meldung: Du hast durch $2\cdot 3$ geteilt. Dreimal halbieren heißt dreimal nacheinander durch $2$ teilen, also durch $8$.
      - wert: "4"
        meldung: Das ist die Amplitude nach **einer** Halbwertszeit. In $15\,\text{s}$ passen drei Halbwertszeiten.
hinweise:
  - In gleichen Zeiten sinkt die Amplitude um den gleichen Faktor.
loesung: |
  **Ansatz:** $15\,\text{s}$ sind drei „Halbwertszeiten“ der Amplitude. In jeder halbiert sie sich.
  ---
  **Rechnung:** $A = 8{,}0\,\text{cm}\cdot\left(\tfrac12\right)^3 = 8{,}0\,\text{cm} : 8 = 1{,}0\,\text{cm}$.
```

```aufgabe
id: p7-7-halbwertszeit
titel: Halbwertszeit aus der Abklingkonstante
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Stimmgabel klingt mit der Abklingkonstante $\delta = 0{,}050\,\text{s}^{-1}$ ab. Nach welcher Zeit hat sich die Amplitude halbiert? Gib das Ergebnis in s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "ln(2)/0.050"
    einheit: "s"
    anzeige: '13{,}9'
    fehler:
      - wert: "1/0.050"
        meldung: Das ist die Zeit, nach der die Amplitude auf $1/e \approx 37\,\%$ gesunken ist. Für die Hälfte brauchst du $\ln 2 \approx 0{,}693$ im Zähler.
      - wert: "0.050*ln(2)"
        meldung: Du hast multipliziert statt geteilt. Ein kleines $\delta$ (schwache Dämpfung) muss eine **lange** Halbwertszeit geben.
hinweise:
  - '$t_{1/2} = \dfrac{\ln 2}{\delta}$.'
loesung: |
  **Ansatz:** Aus $e^{-\delta t_{1/2}} = \tfrac12$ folgt $t_{1/2} = \dfrac{\ln 2}{\delta}$.
  ---
  **Rechnung:** $t_{1/2} = \dfrac{0{,}693}{0{,}050\,\text{s}^{-1}} = 13{,}9\,\text{s}$. Eine Stimmgabel klingt also wirklich lange nach.
```

```aufgabe
id: p7-7-stossdaempfer
titel: Der richtige Stoßdämpfer
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Auto fährt über eine Bodenwelle. Welches Verhalten der Federung wünscht man sich, und wie heißt dieser Fall?
teile:
  - typ: auswahl
    optionen:
      - "Schwache Dämpfung: Das Auto schwingt noch einige Male nach."
      - "Aperiodischer Grenzfall: Das Auto kehrt ohne Nachschwingen schnell in die Ruhelage zurück."
      - "Kriechfall: Das Auto kehrt ganz langsam in die Ruhelage zurück."
      - "Keine Dämpfung: Die Federung schluckt die Energie vollständig."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Nachschwingen ist unangenehm und gefährlich, weil die Räder dabei weniger fest auf die Straße drücken. Die Stoßdämpfer sollen es verhindern.
      - wert: 2
        meldung: Im Kriechfall wäre die Federung bei der nächsten Bodenwelle noch nicht zurück. Man will die **schnellste** Rückkehr ohne Überschwingen.
      - wert: 3
        meldung: Ohne Dämpfung wird keine Energie in Wärme umgewandelt. Das Auto würde nach jeder Bodenwelle immer weiter schaukeln.
hinweise:
  - Gesucht ist die schnellste Rückkehr in die Ruhelage ohne Überschwingen.
loesung: |
  **Ziel:** Nach der Bodenwelle soll die Karosserie möglichst schnell wieder ruhig liegen, ohne nachzuschwingen.
  ---
  **Fall:** Das leistet der aperiodische Grenzfall. Schwache Dämpfung schwingt nach, der Kriechfall ist zu langsam. Abgenutzte Stoßdämpfer erkennt man daran, dass das Auto nach einem Druck auf die Karosserie nachwippt.
```

```aufgabe
id: p7-daempfung-delta
titel: Abklingkonstante und Abklingzeit
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Die Amplitude eines gedämpften Pendels halbiert sich alle $5{,}0\,\text{s}$, es gilt $A(t) = A_0 e^{-\delta t}$. Berechne die Abklingkonstante $\delta$ in $\text{s}^{-1}$ (drei signifikante Stellen). Nach welcher Zeit ist die Amplitude auf $1\,\%$ des Anfangswerts gesunken (in s)?
teile:
  - typ: zahl
    label: Abklingkonstante
    loesung: "ln(2)/5.0"
    einheit: "1/s"
    anzeige: '0{,}139'
    fehler:
      - wert: "lg(2)/5.0"
        meldung: Du hast den dekadischen Logarithmus (Taste „log“) genommen. Zur Basis $e$ gehört der natürliche Logarithmus $\ln$.
      - wert: "5.0/ln(2)"
        meldung: Du hast den Bruch umgedreht. Aus $e^{-\delta\cdot 5\,\text{s}} = \tfrac12$ folgt $\delta = \ln 2/(5\,\text{s})$.
  - typ: zahl
    label: Zeit bis 1 %
    loesung: "ln(100)/(ln(2)/5.0)"
    einheit: "s"
    anzeige: '33{,}2'
    fehler:
      - wert: "ln(10)/(ln(2)/5.0)"
        meldung: Das ist die Zeit bis $10\,\%$. Für $1\,\%$ brauchst du $e^{-\delta t} = 0{,}01$, also $\ln 100$.
hinweise:
  - '$e^{-\delta\cdot 5{,}0\,\text{s}} = \tfrac12$. Logarithmiere beide Seiten mit $\ln$.'
  - 'Für $1\,\%$: $e^{-\delta t} = 0{,}01$, also $\delta t = \ln 100$.'
gefuehrt:
  - text: Schreibe die Bedingung für die Halbierung auf und überlege, wie du $\delta$ aus dem Exponenten holst.
    erklaerung: $e^{-\delta\cdot 5{,}0\,\text{s}} = 0{,}5$. Wir logarithmieren mit $\ln$, denn $\ln(e^u) = u$.
  - text: Berechne $\ln(0{,}5)$ auf drei Nachkommastellen.
    teil: { typ: zahl, loesung: "ln(0.5)" }
    erklaerung: $\ln 0{,}5 = -0{,}693$. Also $-\delta\cdot 5{,}0\,\text{s} = -0{,}693$.
  - text: Berechne $\delta$ in $\text{s}^{-1}$.
    teil: { typ: zahl, loesung: "ln(2)/5", einheit: "1/s" }
    erklaerung: '$\delta = 0{,}693 : 5{,}0\,\text{s} = 0{,}139\,\text{s}^{-1}$.'
  - text: Löse jetzt $e^{-\delta t} = 0{,}01$ nach $t$ auf und berechne $t$ in s.
    teil: { typ: zahl, loesung: "ln(100)/(ln(2)/5)", einheit: "s" }
    erklaerung: $t = \dfrac{\ln 100}{\delta} = \dfrac{4{,}61}{0{,}139\,\text{s}^{-1}} = 33{,}2\,\text{s}$.
loesung: |
  **Ansatz:** Nach einer Halbwertszeit gilt $e^{-\delta\cdot 5{,}0\,\text{s}} = 0{,}5$. Wir logarithmieren mit $\ln$: $-\delta\cdot 5{,}0\,\text{s} = \ln 0{,}5 = -\ln 2$.
  ---
  **Abklingkonstante:** $\delta = \dfrac{\ln 2}{5{,}0\,\text{s}} = 0{,}139\,\text{s}^{-1}$.
  ---
  **Zeit bis 1 %:** $e^{-\delta t} = 0{,}01$ ergibt $\delta t = \ln 100$, also $t = \dfrac{\ln 100}{\delta} = \dfrac{4{,}61}{0{,}139\,\text{s}^{-1}} = 33{,}2\,\text{s}$.
  ---
  **Kontrolle:** $1\,\%$ ist etwa $2^{-6{,}6}$, also etwa $6{,}6$ Halbwertszeiten: $6{,}6\cdot 5\,\text{s} = 33\,\text{s}$. ✓
```

```aufgabe
id: p7-7-messkurve
titel: Abklingkonstante aus der Messkurve
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die aufgezeichnete Auslenkung eines gedämpften Pendels. Die Werte zweier Maxima sind eingetragen. Bestimme die Abklingkonstante $\delta$ in $\text{s}^{-1}$ auf zwei Nachkommastellen.
plot:
  x: [0, 4]
  y: [-5, 5.5]
  achsen: { x: "t in s", y: "x in cm" }
  graphen:
    - { f: "5*exp(-0.25*x)*sin(2*pi*x)", farbe: 0 }
    - { f: "5*exp(-0.25*x)", farbe: 1, gestrichelt: true }
  punkte:
    - { x: 0.25, y: 4.70, label: "4,70 cm" }
    - { x: 2.25, y: 2.85, label: "2,85 cm" }
teile:
  - typ: zahl
    loesung: "ln(4.70/2.85)/2.0"
    einheit: "1/s"
    toleranz: 0.01
    anzeige: '0{,}25'
    fehler:
      - wert: "ln(4.70/2.85)"
        meldung: Du hast vergessen, durch den Zeitabstand zu teilen. Die beiden Maxima liegen $2{,}0\,\text{s}$ auseinander, also zwei Perioden.
      - wert: "(4.70-2.85)/2.0"
        meldung: Du hast die Differenz der Amplituden genommen. Bei exponentieller Abnahme zählt das **Verhältnis**, und $\delta$ folgt aus seinem Logarithmus.
hinweise:
  - Lies die Zeiten der beiden markierten Maxima ab. Wie groß ist ihr Abstand?
  - '$\delta = \dfrac{\ln(A_1/A_2)}{\Delta t}$.'
loesung: |
  **Ablesen:** Die Maxima liegen bei $t = 0{,}25\,\text{s}$ mit $4{,}70\,\text{cm}$ und bei $t = 2{,}25\,\text{s}$ mit $2{,}85\,\text{cm}$. Der Abstand ist $\Delta t = 2{,}0\,\text{s}$, also zwei Perioden von je $1{,}0\,\text{s}$.
  ---
  **Ansatz:** $\dfrac{A_2}{A_1} = e^{-\delta\Delta t}$, also $\delta = \dfrac{\ln(A_1/A_2)}{\Delta t}$.
  ---
  **Rechnung:** $\delta = \dfrac{\ln(4{,}70/2{,}85)}{2{,}0\,\text{s}} = \dfrac{\ln 1{,}649}{2{,}0\,\text{s}} = \dfrac{0{,}500}{2{,}0\,\text{s}} = 0{,}25\,\text{s}^{-1}$. Die Halbwertszeit der Amplitude ist damit $0{,}693/0{,}25\,\text{s}^{-1} = 2{,}8\,\text{s}$.
```

```aufgabe
id: p7-7-trockene-reibung
titel: Welche Reibung bremst hier?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Wagen schwingt an einer Feder auf einem Tisch. Die Punkte zeigen die Maxima der Auslenkung in jeder Periode ($T = 1{,}0\,\text{s}$).
plot:
  x: [0, 9]
  y: [0, 9]
  achsen: { x: "t in s", y: "Maximum in cm" }
  graphen:
    - { f: "8-x", farbe: 1, gestrichelt: true, von: 0, bis: 8 }
  punkte:
    - { x: 0, y: 8 }
    - { x: 1, y: 7 }
    - { x: 2, y: 6 }
    - { x: 3, y: 5 }
    - { x: 4, y: 4 }
teile:
  - typ: auswahl
    label: a) Welche Art von Reibung liegt vor?
    optionen:
      - "Reibung proportional zur Geschwindigkeit (wie Luftwiderstand bei kleinen Geschwindigkeiten)"
      - "konstante Reibungskraft (trockene Gleitreibung)"
      - "keine Reibung"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Bei geschwindigkeitsproportionaler Reibung würden die Maxima in jeder Periode um den gleichen **Faktor** sinken. Hier sinken sie um den gleichen **Betrag**, nämlich $1\,\text{cm}$.
      - wert: 2
        meldung: Ohne Reibung blieben die Maxima gleich hoch.
  - typ: zahl
    label: b) Nach wie vielen Perioden ab Beginn ist die Amplitude null?
    loesung: "8"
    fehler:
      - wert: "4"
        meldung: Das ist der letzte eingezeichnete Punkt. Setze die gerade Linie fort, bis sie die Achse erreicht.
hinweise:
  - Vergleiche die Differenzen und die Verhältnisse aufeinanderfolgender Maxima.
  - Die Maxima sinken pro Periode um denselben Betrag. Wann ist von $8\,\text{cm}$ nichts mehr übrig?
loesung: |
  **Muster:** Die Maxima sinken von $8$ auf $7$, $6$, $5$ und $4\,\text{cm}$. Die Differenz ist immer $1\,\text{cm}$, das Verhältnis wächst dagegen von $0{,}875$ auf $0{,}8$.
  ---
  **a)** Gleicher Betrag pro Periode heißt lineare Abnahme. Das ist das Kennzeichen einer konstanten Reibungskraft, also trockener Gleitreibung.
  ---
  **b)** Bei $1\,\text{cm}$ pro Periode ist die Amplitude nach $8$ Perioden null. Der Wagen bleibt dann stehen, praktisch oft schon etwas früher, wenn die Federkraft die Haftreibung nicht mehr überwindet.
```

```aufgabe
id: p7-7-energieverlust
titel: Energieverlust pro Periode
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Die Amplitude eines schwach gedämpften Federpendels sinkt in jeder Periode um $10\,\%$.

  a) Wie viel Prozent der Schwingungsenergie gehen pro Periode verloren? Runde auf ganze Prozent.

  b) Nach wie vielen vollen Perioden ist die Energie zum ersten Mal unter die Hälfte des Anfangswerts gesunken?
teile:
  - typ: zahl
    label: a) Energieverlust pro Periode
    loesung: "(1-0.9^2)*100"
    einheit: "%"
    anzeige: '19'
    fehler:
      - wert: "10"
        meldung: Die Energie ist nicht proportional zur Amplitude, sondern zu ihrem Quadrat. Rechne $0{,}9^2$.
      - wert: "20"
        meldung: Fast. Du hast $2\cdot 10\,\%$ gerechnet. Genau ist es $1 - 0{,}9^2 = 0{,}19$.
  - typ: zahl
    label: b) Zahl der Perioden
    loesung: "4"
    fehler:
      - wert: "3"
        meldung: Nach drei Perioden sind noch $0{,}81^3 = 0{,}53$, also $53\,\%$ der Energie übrig. Das ist noch über der Hälfte.
      - wert: "7"
        meldung: Nach sieben Perioden ist die **Amplitude** auf etwa die Hälfte gesunken ($0{,}9^7 = 0{,}48$). Gefragt ist die Energie, und die sinkt schneller.
hinweise:
  - '$E = \tfrac12 D A^2$. Wenn $A$ auf $90\,\%$ sinkt, auf welchen Anteil sinkt $E$?'
  - 'Pro Periode wird die Energie mit $0{,}81$ multipliziert. Suche das kleinste $n$ mit $0{,}81^n < 0{,}5$.'
loesung: |
  **Ansatz:** Die Energie ist proportional zum Quadrat der Amplitude, $E = \tfrac12 D A^2$. Ein fester Faktor für $A$ gibt einen festen Faktor für $E$.
  ---
  **a)** Pro Periode wird $A$ mit $0{,}9$ multipliziert, $E$ also mit $0{,}9^2 = 0{,}81$. Es gehen $1 - 0{,}81 = 0{,}19 = 19\,\%$ verloren.
  ---
  **b)** Wir suchen $0{,}81^n < 0{,}5$. Logarithmieren ergibt $n\cdot\ln 0{,}81 < \ln 0{,}5$. Wir teilen durch die negative Zahl $\ln 0{,}81 = -0{,}211$. Dabei dreht sich das Ungleichheitszeichen um: $n > \dfrac{-0{,}693}{-0{,}211} = 3{,}3$. Die kleinste ganze Zahl ist $n = 4$.
  ---
  **Probe:** $0{,}81^3 = 0{,}53$ ist noch über der Hälfte, $0{,}81^4 = 0{,}43$ darunter. ✓
```

## Erzwungene Schwingungen und Resonanz

```aufgabe
id: p7-8-check
art: check
titel: "Vorwissen: Eigenfrequenz eines Federpendels"
niveau: 1
angabe: |
  Ein Körper mit $0{,}50\,\text{kg}$ hängt an einer Feder mit $D = 50\,\text{N/m}$. Mit welcher Frequenz schwingt er, wenn man ihn einmal anstößt und dann in Ruhe lässt? Gib die Frequenz in Hz auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "sqrt(50/0.5)/(2*pi)"
    einheit: "Hz"
    anzeige: '1{,}59'
    fehler:
      - wert: "sqrt(50/0.5)"
        meldung: Das ist die Kreisfrequenz $\omega = \sqrt{D/m}$. Die Frequenz ist $f = \omega/(2\pi)$.
hinweise:
  - '$f = \dfrac{1}{2\pi}\sqrt{\dfrac{D}{m}}$.'
loesung: |
  Ein angestoßenes Federpendel schwingt mit $\omega = \sqrt{D/m} = \sqrt{50\,\text{N/m}/0{,}50\,\text{kg}} = 10\,\text{s}^{-1}$.
  ---
  $f = \dfrac{\omega}{2\pi} = \dfrac{10\,\text{s}^{-1}}{2\pi} = 1{,}59\,\text{Hz}$. Wiederholen: [7.4 Das Federpendel](/lernen/physik1/schwingungen/das-federpendel-schwingungsdauer-und-federkonstante).
```

Bisher haben wir Schwingungen betrachtet, die man einmal anstößt und dann sich selbst überlässt. Viele
Schwingungen im Alltag werden aber **dauernd von außen angetrieben**. Eine Lautsprechermembran folgt dem
elektrischen Signal. Ein Auto wird auf einer holprigen Straße im Takt der Unebenheiten auf und ab bewegt.
Ein Gebäude wird bei einem Erdbeben im Takt der Bodenbewegung geschüttelt.

### Eigenfrequenz und Erregerfrequenz

Jedes schwingungsfähige System hat eine **Eigenfrequenz** $f_0$. Mit ihr schwingt es, wenn man es einmal
anstößt und dann in Ruhe lässt. Beim Federpendel ist $f_0 = \frac{1}{2\pi}\sqrt{D/m}$, beim Fadenpendel
$f_0 = \frac{1}{2\pi}\sqrt{g/l}$.

Treibt man das System dagegen von außen periodisch an, zum Beispiel mit einem Motor, spricht man von einer
**erzwungenen Schwingung**. Der Antrieb heißt **Erreger**, seine Frequenz **Erregerfrequenz** $f_E$. Nach
einer kurzen Anlaufzeit, dem **Einschwingen**, schwingt das System mit der **Erregerfrequenz**, nicht mit
seiner Eigenfrequenz.

```plot
x: [-3, 3]
y: [-5.4, 2]
gleich: true
kurven:
  - { x: "0.7*cos(t)", y: "1+0.7*sin(t)", t: [0, "2*pi"], farbe: 3 }
strecken:
  - { von: [0.5, 1.49], nach: [0, -0.5] }
  - { von: [-0.5, -0.5], nach: [0.5, -0.5] }
  - { von: [0, -0.5], nach: [0, -3.3], gestrichelt: true }
  - { von: [-0.4, -3.3], nach: [0.4, -3.3] }
  - { von: [0.4, -3.3], nach: [0.4, -4.1] }
  - { von: [0.4, -4.1], nach: [-0.4, -4.1] }
  - { von: [-0.4, -4.1], nach: [-0.4, -3.3] }
vektoren:
  - { von: [1.2, -0.5], nach: [1.2, 0.3], label: "Erreger", farbe: 3 }
  - { von: [1.2, -0.5], nach: [1.2, -1.3], farbe: 3 }
  - { von: [0.2, -3.7], nach: [0.2, -2.3], label: "F_Feder", farbe: 1 }
  - { von: [-0.2, -3.7], nach: [-0.2, -5.0], label: "F_G", farbe: 0 }
punkte:
  - { x: -1.4, y: 1, label: "Motor" }
beschriftung: "Versuch zur erzwungenen Schwingung mit Freikörperbild. Ein Motor (violett) bewegt über eine Stange den Aufhängepunkt der Feder periodisch auf und ab. Auf den Körper wirken die Gewichtskraft (blau) und die Federkraft (orange). Weil der Aufhängepunkt sich bewegt, ändert sich die Federkraft im Takt des Motors. Das ist die periodische Erregerkraft."
```

Wie stark das System mitschwingt, hängt davon ab, wie die Erregerfrequenz zur Eigenfrequenz liegt:

- **$f_E$ viel kleiner als $f_0$:** Das System folgt dem Erreger fast im Gleichtakt (gleichphasig), mit
  ungefähr der Amplitude des Erregers. Bewegt man den Aufhängepunkt sehr langsam, wandert der Körper
  einfach mit.
- **$f_E$ ungefähr gleich $f_0$:** Die Amplitude wird sehr groß, bei schwacher Dämpfung riesig. Das ist die
  **Resonanz**. Der Schwinger hinkt dem Erreger um eine Viertelperiode hinterher.
- **$f_E$ viel größer als $f_0$:** Das System ist zu träge, um zu folgen. Die Amplitude wird klein, und der
  Körper schwingt gegenphasig zum Erreger.

```plot
x: [0, 3]
y: [0, 6]
achsen: { x: "f_E / f_0", y: "Amplitude relativ" }
graphen:
  - { f: "1/sqrt((1-x^2)^2+(0.2*x)^2)", label: "schwach gedämpft", farbe: 0 }
  - { f: "1/sqrt((1-x^2)^2+(0.6*x)^2)", label: "mittel", farbe: 1 }
  - { f: "1/sqrt((1-x^2)^2+(1.4*x)^2)", label: "stark", farbe: 2 }
beschriftung: "Resonanzkurven: die Amplitude der erzwungenen Schwingung, bezogen auf die Amplitude bei sehr langsamer Erregung, über dem Verhältnis von Erregerfrequenz zu Eigenfrequenz. Je schwächer die Dämpfung, desto höher und schmaler das Maximum bei f_E ≈ f_0. Bei starker Dämpfung (grün) gibt es kein ausgeprägtes Maximum mehr."
```

:::definition[Resonanz]
**Resonanz** tritt auf, wenn ein schwingungsfähiges System ungefähr mit seiner Eigenfrequenz angeregt wird.
Die Amplitude der erzwungenen Schwingung wird dann am größten. Sie ist umso größer, je schwächer die
Dämpfung ist. „Resonanz“ kommt vom lateinischen Wort für „Widerhall“.
:::

**Beispiel:** Eine Schaukel, die man immer im richtigen Moment anstößt, schwingt immer höher.
**Nicht-Beispiel:** Ein Auto, das gegen eine Wand fährt, wird stark verformt. Das ist ein einzelner Stoß und
keine periodische Erregung, also keine Resonanz.

### Warum gerade bei der Eigenfrequenz?

Denk an die Schaukel. Stößt du sie genau dann an, wenn sie sich von dir wegbewegt, wirkt deine Kraft in
Bewegungsrichtung. Sie verrichtet positive Arbeit, und die Schaukel gewinnt Energie. Stößt du im falschen
Moment, wenn sie auf dich zukommt, bremst du sie. Nur wenn dein Takt zum Takt der Schaukel passt, passt das
Anstoßen jedes Mal. Bei jeder anderen Frequenz wechseln Antreiben und Bremsen einander ab, und es kommt
im Mittel wenig Energie hinein.

Im Resonanzfall wächst die Amplitude so lange, bis die Dämpfung pro Periode genau so viel Energie in Wärme
umwandelt, wie der Erreger zuführt. Je schwächer die Dämpfung, desto größer muss die Amplitude dafür
werden. Deshalb bestimmt die Dämpfung die Höhe des Resonanzmaximums. Die Phasenverschiebung von einer
Viertelperiode passt dazu: Dann ist die Erregerkraft am größten, wenn der Schwinger am schnellsten ist. Die
Kraft zeigt also immer in Bewegungsrichtung.

```reflexion
frage: Warum wird bei Resonanz in jeder Periode Energie zugeführt, bei einer viel höheren Erregerfrequenz aber kaum? Erkläre es mit der Arbeit, die die Erregerkraft verrichtet.
antwort: |
  Eine Kraft verrichtet positive Arbeit, wenn sie in Bewegungsrichtung zeigt, und negative, wenn sie gegen die
  Bewegung zeigt. Bei Resonanz passt der Takt: Die Erregerkraft ist am größten, wenn der Körper am schnellsten ist, und
  zeigt dabei in seine Bewegungsrichtung. In jeder Periode kommt also Energie dazu. Bei einer viel höheren Frequenz
  schwingt der Körper zwar im Takt des Erregers, aber fast gegenphasig. Dann zeigt die Kraft in jeder Periode etwa
  eine halbe Periode lang in Bewegungsrichtung und eine halbe Periode lang dagegen. Antreiben und Bremsen heben sich
  fast auf, und im Mittel kommt kaum Energie hinein.
```

:::beispiel[Eine Resonanzkurve auswerten]
Wir lesen die blaue Kurve (schwach gedämpft) ab.

**Schritt 1, langsame Erregung:** Für $f_E/f_0$ nahe $0$ ist die relative Amplitude $1$. Der Körper wandert
mit dem Aufhängepunkt mit.

**Schritt 2, Resonanz:** Das Maximum liegt fast genau bei $f_E/f_0 = 1$ und hat die Höhe $5{,}0$. Der Körper
schwingt also fünfmal so weit, wie der Erreger auslenkt.

**Schritt 3, schnelle Erregung:** Bei $f_E = 2 f_0$ ist die Amplitude nur noch $0{,}33$, also ein Drittel der
Erregeramplitude.

**Deutung:** Schon eine kleine Erregung im richtigen Takt erzeugt eine große Schwingung. Weit weg von $f_0$
bleibt die Schwingung klein.
:::


:::achtung[Fehler: Bei Resonanz werde die Amplitude unendlich]
Falsch: „Im Resonanzfall wächst die Amplitude ohne Grenze, bis das System zerbricht.“

Die Dämpfung begrenzt die Amplitude immer. Bei der blauen Kurve ist das Maximum $5{,}0$, bei der mittleren
nur $1{,}7$, bei der grünen gibt es kein Maximum mehr. Zerstörerisch wird Resonanz erst, wenn die begrenzte
Amplitude größer ist, als das Bauteil aushält.
:::

:::achtung[Fehler: Das System schwinge mit seiner Eigenfrequenz]
Die Membran eines Lautsprechers hat eine Eigenfrequenz von $50\,\text{Hz}$. Sie wird mit einem Ton von
$440\,\text{Hz}$ angesteuert. Falsch: „Die Membran schwingt mit $50\,\text{Hz}$.“

Nach dem Einschwingen schwingt jedes erzwungene System mit der **Erregerfrequenz**, hier mit $440\,\text{Hz}$.
Sonst würde jeder Lautsprecher nur einen einzigen Ton spielen. Nur im Resonanzfall sind beide Frequenzen
gleich.
:::

:::beispiel[Die wandernde Waschmaschine]
Das Gehäuse einer Waschmaschine hat auf seinen Füßen und Federn eine Eigenfrequenz von $12\,\text{Hz}$. Die
Trommel dreht beim Schleudern bis $1400$ Umdrehungen pro Minute hoch. Eine ungleich verteilte Wäsche wirkt
wie ein Erreger mit der Drehfrequenz der Trommel.

**Schritt 1, Resonanzbedingung:** Resonanz tritt auf, wenn die Trommel $12$ Umdrehungen pro Sekunde macht,
also $f_E = f_0 = 12\,\text{Hz}$.

**Schritt 2, in Umdrehungen pro Minute:** $12\,\text{s}^{-1}\cdot 60\,\text{s/min} = 720$ Umdrehungen pro Minute.

**Deutung:** Beim Hochfahren durchläuft die Trommel diese Drehzahl. Kurz rüttelt die Maschine heftig, und
danach wird es wieder ruhiger. Die Steuerung fährt diesen Bereich deshalb schnell durch.
:::

### Resonanz in Technik und Alltag

Resonanz ist oft erwünscht:

- Eine Schaukel stößt man im richtigen Takt an.
- Der Resonanzkörper einer Gitarre verstärkt den Ton der Saite.
- Ein Radio wählt mit einem elektrischen Schwingkreis genau den Sender aus, dessen Frequenz mit der
  Eigenfrequenz übereinstimmt.
- Der Quarz einer Uhr wird in Resonanz gehalten und gibt so einen sehr genauen Takt vor.

Resonanz kann aber auch gefährlich sein:

- Marschierende Soldaten gehen auf Brücken aus dem Gleichschritt.
- Die Londoner Millennium Bridge schwankte im Jahr 2000 seitlich, weil die Fußgänger unbewusst im Takt der
  Schwankung gingen.
- Autos schaukeln auf Pisten mit Querrillen bei bestimmten Geschwindigkeiten heftig auf.

Ingenieurinnen und Ingenieure verhindern solche Fälle auf zwei Arten. Sie legen die Eigenfrequenz weit weg
von allen möglichen Erregerfrequenzen, oder sie bauen starke Dämpfung ein. Hochhäuser tragen dafür oft
riesige Pendel als **Schwingungstilger**.

```aufgabe
id: p7-8-check-abhilfe
art: check
titel: Resonanz vermeiden
niveau: 1
angabe: |
  Eine Fußgängerbrücke hat eine seitliche Eigenfrequenz von $1{,}0\,\text{Hz}$. Das liegt genau im Takt, in dem Menschen beim Gehen seitlich schwanken. Welche Maßnahme hilft gegen das Aufschaukeln? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Die Brücke steifer bauen, damit ihre Eigenfrequenz deutlich steigt."
      - "Dämpfer einbauen, die Schwingungsenergie in Wärme umwandeln."
      - "Die Brücke schwerer machen, ohne sonst etwas zu ändern, damit sie sicher ruhig bleibt."
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: Mehr Masse senkt die Eigenfrequenz nur mit der Wurzel, denn $f_0$ ist proportional zu $1/\sqrt m$. Selbst doppelte Masse senkt sie erst auf etwa $0{,}71\,\text{Hz}$. Das ist teuer und kann trotzdem noch im Bereich der Schritttakte liegen, denn Menschen gehen nicht alle im selben Takt. Resonanz verschwindet dadurch nicht sicher.
      - wert: [1]
        meldung: Auch eine steifere Brücke hilft. Ein größeres $D$ verschiebt die Eigenfrequenz weg vom Takt der Fußgänger.
hinweise:
  - Es gibt zwei Wege gegen Resonanz. Welche Größe verschiebt man, welche begrenzt man?
loesung: |
  Gegen Resonanz hilft, die Eigenfrequenz weit vom Erregertakt wegzulegen, etwa durch eine steifere Konstruktion.
  ---
  Oder man dämpft stärker, dann bleibt das Resonanzmaximum niedrig. Bei der Londoner Millennium Bridge baute man Dämpfer ein.
```

### Gekoppelte Schwingungen (Vertiefung)

Dieser Unterabschnitt geht über den Prüfungsstoff hinaus. Er schlägt die Brücke zu den Wellen.

Verbindet man zwei gleiche Pendel mit einer weichen Feder, sind sie **gekoppelt**. Stößt man nur das erste
an, überträgt es seine Schwingung nach und nach auf das zweite. Nach einer Weile steht das erste fast still,
und das zweite schwingt mit voller Amplitude. Dann läuft der Vorgang rückwärts. Die Energie wandert also
zwischen den Pendeln hin und her.

```plot
x: [0, 40]
y: [0, 1.15]
achsen: { x: "t in s", y: "Amplitude relativ" }
graphen:
  - { f: "abs(cos(pi*0.05*x))", label: "Pendel 1", farbe: 0 }
  - { f: "abs(sin(pi*0.05*x))", label: "Pendel 2", farbe: 1, gestrichelt: true }
beschriftung: "Amplituden zweier gekoppelter Pendel, deren Grundschwingungen 1,00 Hz und 1,05 Hz haben. Nur Pendel 1 (blau) wurde angestoßen. Nach 10 s steht es still, und Pendel 2 (orange) schwingt mit voller Amplitude. Nach 20 s ist die Energie wieder bei Pendel 1."
```

Dahinter stecken zwei Grundschwingungen des Paares mit leicht verschiedenen Frequenzen $f_1$ und $f_2$. Ihre
Überlagerung ergibt eine **Schwebung**, die in der Lektion
[8.6 Schwebung: zwei fast gleiche Töne](/lernen/physik1/wellen-akustik/schwebung-zwei-fast-gleiche-toene)
genauer behandelt wird. Das erste Pendel steht zum ersten Mal still nach der Zeit
$$t = \frac{1}{2\,(f_2 - f_1)}.$$
Viele gekoppelte Schwinger in einer Reihe geben eine Schwingung von einem zum nächsten weiter. So entsteht
eine **Welle**. Eine Welle ist also nichts anderes als viele gekoppelte Schwingungen, die zeitversetzt ablaufen.


### Aufgaben zu Resonanz

```aufgabe
id: p7-resonanz-auswahl
titel: Resonanz erkennen
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  In welchen Fällen spielt Resonanz die entscheidende Rolle? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Kind wird auf der Schaukel im richtigen Takt angestoßen."
      - "Eine Kugel fällt frei aus $10\\,\\text{m}$ Höhe."
      - "Ein Radio empfängt genau einen Sender."
      - "Ein Weinglas zerspringt beim lauten Ton einer Sängerin."
      - "Ein Auto bremst auf trockener Straße."
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 2]
        meldung: Auch das Weinglas gehört dazu. Es hat eine Eigenfrequenz, man hört sie beim Anschlagen. Trifft die Sängerin genau diesen Ton, wächst die Schwingung des Glases, bis es bricht.
      - wert: [0, 2, 3, 4]
        meldung: Beim Bremsen schwingt nichts periodisch. Es gibt weder eine Eigenfrequenz noch einen periodischen Erreger.
      - wert: [0, 3]
        meldung: Auch das Radio nutzt Resonanz. Sein Schwingkreis wird von allen Sendern angeregt, schwingt aber nur bei der Frequenz stark mit, die zu seiner Eigenfrequenz passt.
hinweise:
  - Resonanz braucht ein schwingungsfähiges System und einen Erreger im passenden Takt.
loesung: |
  **Resonanz:** Schaukel, Radioschwingkreis und Weinglas werden jeweils ungefähr mit ihrer Eigenfrequenz angeregt.
  ---
  **Keine Resonanz:** Freier Fall und Bremsen sind keine Schwingungen, es gibt keinen periodischen Erreger.
```

```aufgabe
id: p7-8-erregerfrequenz
titel: Mit welcher Frequenz schwingt es?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Federpendel mit der Eigenfrequenz $2{,}0\,\text{Hz}$ wird von einem Motor mit $5{,}0\,\text{Hz}$ angetrieben. Mit welcher Frequenz schwingt es nach dem Einschwingen?
teile:
  - typ: auswahl
    optionen: ["$2{,}0\\,\\text{Hz}$", "$3{,}0\\,\\text{Hz}$", "$5{,}0\\,\\text{Hz}$", "$7{,}0\\,\\text{Hz}$"]
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Mit der Eigenfrequenz schwingt ein System nur, wenn man es in Ruhe lässt. Ein dauernd angetriebenes System folgt dem Takt des Erregers.
      - wert: 1
        meldung: Die Differenz der Frequenzen spielt bei der Schwebung eine Rolle, nicht hier. Das System schwingt im Takt des Motors.
      - wert: 3
        meldung: Die Frequenzen addieren sich nicht. Das System schwingt im Takt des Motors.
hinweise:
  - Wer gibt bei einer erzwungenen Schwingung den Takt vor?
loesung: |
  **Regel:** Nach dem Einschwingen schwingt ein erzwungenes System mit der Erregerfrequenz.
  ---
  **Ergebnis:** $5{,}0\,\text{Hz}$. Weil das weit über $f_0 = 2{,}0\,\text{Hz}$ liegt, ist die Amplitude klein, und das Pendel schwingt gegenphasig zum Erreger.
```

```aufgabe
id: p7-8-schaukel
titel: Im Takt anschaukeln
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Schaukel hat $2{,}0\,\text{m}$ lange Ketten und verhält sich wie ein Fadenpendel. In welchem zeitlichen Abstand musst du sie anstoßen, wenn du jedes Mal von derselben Seite stößt? Gib das Ergebnis in s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "2*pi*sqrt(2.0/9.81)"
    einheit: "s"
    anzeige: '2{,}84'
    fehler:
      - wert: "pi*sqrt(2.0/9.81)"
        meldung: Das ist eine halbe Periode. Von derselben Seite kommt die Schaukel aber erst nach einer **ganzen** Periode wieder vorbei.
hinweise:
  - 'Die Schaukel kommt nach einer vollen Periode wieder bei dir vorbei. $T = 2\pi\sqrt{l/g}$.'
loesung: |
  **Ansatz:** Resonanz heißt: Erregerfrequenz gleich Eigenfrequenz. Du musst also genau einmal pro Periode der Schaukel stoßen.
  ---
  **Rechnung:** $T = 2\pi\sqrt{\dfrac{2{,}0\,\text{m}}{9{,}81\,\text{m/s}^2}} = 2{,}84\,\text{s}$. Also etwa alle drei Sekunden einmal anstoßen.
```

```aufgabe
id: p7-wellblech
titel: Regelmäßige Bodenwellen
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Auto hat eine Eigenfrequenz der Federung von $1{,}3\,\text{Hz}$. Es fährt über eine Straße mit regelmäßigen Bodenwellen im Abstand von $10\,\text{m}$. Bei welcher Geschwindigkeit in km/h schaukelt es sich am stärksten auf? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "1.3*10*3.6"
    einheit: "km/h"
    anzeige: '46{,}8'
    fehler:
      - wert: "1.3*10"
        meldung: Das ist die Geschwindigkeit in m/s. Gefragt sind km/h, also mal $3{,}6$.
      - wert: "1.3*10/3.6"
        meldung: Beim Umrechnen von m/s in km/h multipliziert man mit $3{,}6$. Die Zahl in km/h ist immer die größere.
      - wert: "10/1.3*3.6"
        meldung: Du hast Abstand durch Frequenz geteilt. Die Erregerfrequenz ist die Zahl der Bodenwellen pro Sekunde, $f_E = v/d$. Also ist $v = f_E\cdot d$.
hinweise:
  - 'Die Erregerfrequenz ist die Zahl der Bodenwellen, die das Auto pro Sekunde überfährt: $f_E = v/d$.'
  - 'Setze $f_E = f_0$ und löse nach $v$ auf. Rechne dann in km/h um.'
gefuehrt:
  - text: Überlege, wann das Auto am stärksten schaukelt.
    erklaerung: Bei Resonanz, also wenn die Bodenwellen genau im Takt der Eigenfrequenz kommen, $f_E = 1{,}3\,\text{Hz}$.
  - text: Wie viel Zeit darf zwischen zwei Bodenwellen vergehen? Gib sie in s an.
    teil: { typ: zahl, loesung: "1/1.3", einheit: "s" }
    erklaerung: Eine Periode, $T = 1/f_0 = 1/1{,}3\,\text{Hz} = 0{,}769\,\text{s}$.
  - text: Wie schnell muss das Auto sein, um in dieser Zeit $10\,\text{m}$ zurückzulegen? Gib $v$ in m/s an.
    teil: { typ: zahl, loesung: "10*1.3", einheit: "m/s" }
    erklaerung: $v = \dfrac{10\,\text{m}}{0{,}769\,\text{s}} = 13\,\text{m/s}$.
  - text: Rechne in km/h um.
    teil: { typ: zahl, loesung: "13*3.6", einheit: "km/h" }
    erklaerung: $13\,\text{m/s}\cdot 3{,}6 = 46{,}8\,\text{km/h}$.
loesung: |
  **Modell:** Jede Bodenwelle gibt dem Auto einen Stoß. Die Stöße bilden einen periodischen Erreger mit $f_E = v/d$. Am stärksten schaukelt es bei Resonanz, $f_E = f_0$.
  ---
  **Bedingung:** $\dfrac{v}{d} = 1{,}3\,\text{s}^{-1}$, also $v = 1{,}3\,\text{s}^{-1}\cdot 10\,\text{m} = 13\,\text{m/s}$.
  ---
  **Umrechnen:** $13\,\text{m/s}\cdot 3{,}6 = 46{,}8\,\text{km/h}$. Deutlich schneller oder langsamer zu fahren, hilft gegen das Aufschaukeln.
```

```aufgabe
id: p7-8-resonanzkurve
titel: Resonanzkurven lesen
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Resonanzkurven derselben Feder mit drei verschiedenen Dämpfungen. Die Amplitude ist auf die Amplitude bei sehr langsamer Erregung bezogen.

  a) Welche Kurve gehört zur schwächsten Dämpfung?

  b) Lies für die Kurve A die relative Amplitude bei $f_E = 2 f_0$ ab (auf eine Nachkommastelle).
plot:
  x: [0, 3]
  y: [0, 6]
  achsen: { x: "f_E / f_0", y: "Amplitude relativ" }
  graphen:
    - { f: "1/sqrt((1-x^2)^2+(0.2*x)^2)", label: "A", farbe: 0 }
    - { f: "1/sqrt((1-x^2)^2+(0.6*x)^2)", label: "B", farbe: 1 }
    - { f: "1/sqrt((1-x^2)^2+(1.4*x)^2)", label: "C", farbe: 2 }
  strecken:
    - { von: [2, 0], nach: [2, 1], gestrichelt: true }
teile:
  - typ: auswahl
    label: a) schwächste Dämpfung
    optionen: ["Kurve A", "Kurve B", "Kurve C"]
    richtig: [0]
    fehler:
      - wert: 2
        meldung: Kurve C hat das kleinste Maximum. Starke Dämpfung wandelt viel Energie in Wärme um und hält die Amplitude klein. Schwache Dämpfung gibt das **höchste** Maximum.
      - wert: 1
        meldung: Kurve B liegt in der Mitte. Die schwächste Dämpfung erkennst du am höchsten und schmalsten Maximum.
  - typ: zahl
    label: b) relative Amplitude bei f_E = 2 f_0
    loesung: "1/sqrt((1-4)^2+(0.4)^2)"
    toleranz: 0.06
    anzeige: '0{,}3'
    fehler:
      - wert: "1"
        meldung: Den Wert $1$ hat die Kurve nur bei sehr kleiner Erregerfrequenz. Lies an der gestrichelten Linie bei $f_E/f_0 = 2$ ab.
hinweise:
  - Je schwächer die Dämpfung, desto höher das Resonanzmaximum.
  - Gehe auf der waagrechten Achse zu $2$ und lies die Höhe der blauen Kurve ab.
loesung: |
  **a)** Die Dämpfung begrenzt die Amplitude bei Resonanz. Das höchste und schmalste Maximum (etwa $5$) hat Kurve A, sie gehört zur schwächsten Dämpfung.
  ---
  **b)** Bei $f_E/f_0 = 2$ liegt Kurve A bei etwa $0{,}3$. Der Körper schwingt also nur mit einem Drittel der Erregeramplitude.
  ---
  **Deutung:** Weit über der Eigenfrequenz ist das System zu träge, um dem Erreger zu folgen. Dort liegen alle drei Kurven niedrig, und die Dämpfung spielt kaum eine Rolle.
```

```aufgabe
id: p7-resonanz-text
titel: Warum Soldaten aus dem Tritt gehen
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Erkläre, warum Soldaten beim Überqueren einer Brücke den Gleichschritt aufgeben sollen. Erkläre dabei, was eine Erregung „im Takt“ mit der Energie der Schwingung zu tun hat.
teile:
  - typ: text
    muster: |
      Eine Brücke ist ein schwingungsfähiges System mit einer Eigenfrequenz. Im Gleichschritt üben die Soldaten eine periodische
      Kraft mit der Schrittfrequenz aus. Liegt diese nahe der Eigenfrequenz, tritt Resonanz auf. Die Kraft wirkt dann jedes Mal in
      Bewegungsrichtung und führt der Brücke in jeder Periode Energie zu. Die Amplitude wächst, bis die Dämpfung so viel Energie
      abführt, wie zugeführt wird. Das kann die Brücke beschädigen. Ohne Gleichschritt kommen die Stöße zu zufälligen Zeiten und
      führen im Mittel kaum Energie zu.
hinweise:
  - Wann führt eine periodische Kraft einem Schwinger ständig Energie zu?
  - Was begrenzt die Amplitude, und was passiert, wenn diese Grenze über der Belastbarkeit liegt?
loesung: |
  **Erreger:** Der Gleichschritt ist eine periodische Kraft mit der Schrittfrequenz. Die Brücke hat eine Eigenfrequenz.
  ---
  **Resonanz:** Liegt die Schrittfrequenz nahe der Eigenfrequenz, wirkt die Kraft jedes Mal in Bewegungsrichtung. In jeder Periode wird Energie zugeführt, und die Amplitude wächst, bis die Dämpfung ebenso viel Energie abführt.
  ---
  **Abhilfe:** Ohne Gleichschritt kommen die Stöße zu zufälligen Zeiten. Antreiben und Bremsen gleichen sich im Mittel aus, eine Resonanz entsteht nicht.
```

```aufgabe
id: p7-8-gekoppelt
titel: Zwei gekoppelte Pendel (Vertiefung)
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Zwei gleiche Pendel sind durch eine weiche Feder gekoppelt. Die beiden Grundschwingungen des Paares haben die Frequenzen $1{,}00\,\text{Hz}$ und $1{,}05\,\text{Hz}$. Man stößt nur das erste Pendel an. Nach welcher Zeit steht es zum ersten Mal still (in s)?
teile:
  - typ: zahl
    loesung: "1/(2*(1.05-1.00))"
    einheit: "s"
    anzeige: '10'
    fehler:
      - wert: "1/(1.05-1.00)"
        meldung: Nach dieser Zeit ist die ganze Energie **zurück** beim ersten Pendel. Still steht es schon nach der Hälfte dieser Zeit.
hinweise:
  - Die Energie wandert im Takt der Schwebung zwischen den Pendeln hin und her.
  - '$t = \dfrac{1}{2\,(f_2 - f_1)}$.'
loesung: |
  **Modell:** Die Bewegung des ersten Pendels ist die Überlagerung der zwei Grundschwingungen. Sie gibt eine Schwebung mit der Schwebungsfrequenz $f_2 - f_1$.
  ---
  **Rechnung:** $f_2 - f_1 = 0{,}05\,\text{Hz}$. Das erste Pendel steht still nach $t = \dfrac{1}{2\cdot 0{,}05\,\text{Hz}} = 10\,\text{s}$.
  ---
  **Deutung:** In dieser Zeit ist die ganze Energie zum zweiten Pendel gewandert. Nach weiteren $10\,\text{s}$ ist sie wieder beim ersten.
```

```aufgabe
id: p7-8-maschine
titel: Eine Maschine schwingungsarm lagern
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine Maschine mit $40\,\text{kg}$ steht auf Federn. Ihr Motor läuft im Betrieb mit $1500$ Umdrehungen pro Minute und regt die Maschine dabei mit seiner Drehfrequenz an. Damit kaum Schwingungen auf den Boden übertragen werden, soll die Eigenfrequenz der Lagerung höchstens ein Drittel der Erregerfrequenz betragen.

  a) Wie groß darf die Federkonstante der Lagerung höchstens sein? Gib sie in N/m auf drei signifikante Stellen an.

  b) Ein Techniker wählt Federn mit zusammen $D = 6{,}0\cdot 10^{4}\,\text{N/m}$. Bei welcher Drehzahl (in Umdrehungen pro Minute) tritt beim Hochfahren Resonanz auf? Runde auf ganze Umdrehungen.
teile:
  - typ: zahl
    label: a) größte Federkonstante
    loesung: "40*(2*pi*1500/60/3)^2"
    einheit: "N/m"
    anzeige: '1{,}10\cdot 10^{5}'
    fehler:
      - wert: "40*(2*pi*1500/60)^2"
        meldung: Das ist die Federkonstante für Resonanz bei Betriebsdrehzahl. Genau die will man vermeiden. Die Eigenfrequenz soll höchstens ein Drittel davon sein.
      - wert: "40*(1500/60/3)^2"
        meldung: Du hast die Frequenz statt der Kreisfrequenz quadriert. Aus $f_0 = \frac{1}{2\pi}\sqrt{D/m}$ folgt $D = m\,(2\pi f_0)^2$.
  - typ: zahl
    label: b) Resonanzdrehzahl
    loesung: "sqrt(60000/40)/(2*pi)*60"
    einheit: "1/min"
    toleranz: 1
    anzeige: '370'
    fehler:
      - wert: "sqrt(60000/40)*60"
        meldung: Du hast mit der Kreisfrequenz gerechnet. Die Drehzahl entspricht der Frequenz $f_0 = \omega_0/(2\pi)$, nicht $\omega_0$.
      - wert: "sqrt(60000/40)/(2*pi)"
        meldung: Das ist die Frequenz in Umdrehungen pro **Sekunde**. Für Umdrehungen pro Minute mal $60$.
hinweise:
  - 'Rechne die Drehzahl in Hz um: $1500$ Umdrehungen pro Minute sind $25$ pro Sekunde.'
  - 'Aus $f_0 = \dfrac{1}{2\pi}\sqrt{\dfrac{D}{m}}$ folgt $D = m\,(2\pi f_0)^2$. Für b) berechne $f_0$ der gewählten Lagerung.'
loesung: |
  **Modell:** Die Maschine auf Federn ist ein Federpendel. Der Motor ist ein Erreger mit seiner Drehfrequenz. Liegt die Eigenfrequenz weit unter der Erregerfrequenz, ist die Maschine zu träge, um mitzuschwingen. Das nutzt man bei der Lagerung.
  ---
  **Erregerfrequenz:** $f_E = \dfrac{1500}{60\,\text{s}} = 25\,\text{Hz}$. Erlaubt ist $f_0 \le \dfrac{25\,\text{Hz}}{3} = 8{,}33\,\text{Hz}$.
  ---
  **a)** Aus $f_0 = \dfrac{1}{2\pi}\sqrt{D/m}$ folgt durch Quadrieren $D = m\,(2\pi f_0)^2 = 40\,\text{kg}\cdot(52{,}4\,\text{s}^{-1})^2 = 1{,}10\cdot 10^{5}\,\text{N/m}$. Weichere Federn sind noch besser.
  ---
  **b)** $f_0 = \dfrac{1}{2\pi}\sqrt{\dfrac{6{,}0\cdot 10^{4}\,\text{N/m}}{40\,\text{kg}}} = \dfrac{38{,}7\,\text{s}^{-1}}{2\pi} = 6{,}16\,\text{Hz}$. Das sind $6{,}16\cdot 60 = 370$ Umdrehungen pro Minute. Beim Hochfahren durchläuft der Motor diese Drehzahl kurz, ähnlich wie die Waschmaschine. Im Betrieb bei $1500$ Umdrehungen ist man weit über der Resonanz. ✓
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus den Kapiteln
[Kinematik](/lernen/physik1/kinematik), [Dynamik](/lernen/physik1/dynamik),
[Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls) und
[Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation) gemischt. Das ist Absicht: In der
Prüfung steht nicht dabei, zu welchem Kapitel eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren
passt?“ musst du nichts rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p7-mix-wurf
titel: Ein Stein senkrecht nach oben
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Stein wird mit $12\,\text{m/s}$ senkrecht nach oben geworfen. Luftwiderstand vernachlässigen wir.

  a) Wie hoch steigt er? Gib das Ergebnis in m auf drei signifikante Stellen an.

  b) Wie groß ist der Betrag seiner Beschleunigung am höchsten Punkt (in $\text{m/s}^2$)?
teile:
  - typ: zahl
    label: a) Steighöhe
    loesung: "12^2/(2*9.81)"
    einheit: "m"
    anzeige: '7{,}34'
    fehler:
      - wert: "12^2/9.81"
        meldung: Der Faktor $2$ fehlt. Aus $v_0^2 = 2 g h$ folgt $h = v_0^2/(2g)$.
  - typ: zahl
    label: b) Beschleunigung oben
    loesung: "9.81"
    einheit: "m/s²"
    fehler:
      - wert: "0"
        meldung: Am höchsten Punkt ist die **Geschwindigkeit** null, die Beschleunigung nicht. Es ist dieselbe Falle wie im Umkehrpunkt einer Schwingung. Die Gewichtskraft wirkt weiter, sonst bliebe der Stein oben stehen.
hinweise:
  - 'Für a) die zeitfreie Gleichung $v_0^2 = 2 g h$, denn oben ist $v = 0$.'
loesung: |
  **a)** Oben ist $v = 0$. Aus $v_0^2 = 2 g h$ folgt $h = \dfrac{v_0^2}{2g} = \dfrac{(12\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = 7{,}34\,\text{m}$.
  ---
  **b)** Auf den Stein wirkt die ganze Zeit nur die Gewichtskraft. Also ist $a = g = 9{,}81\,\text{m/s}^2$, auch oben. Wiederholen: [2.8 Senkrechter Wurf](/lernen/physik1/kinematik/senkrechter-wurf).
```

```aufgabe
id: p7-mix-federn-reihe
titel: Ersatzfeder für zwei Federn in Reihe
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Zwei Federn mit $D_1 = 200\,\text{N/m}$ und $D_2 = 300\,\text{N/m}$ werden hintereinander gehängt. Wie groß ist die Federkonstante der Ersatzfeder in N/m?
teile:
  - typ: zahl
    loesung: "1/(1/200+1/300)"
    einheit: "N/m"
    anzeige: '120'
    fehler:
      - wert: "500"
        meldung: Du hast die Federkonstanten addiert. Das gilt für Federn **nebeneinander**. Hintereinander addieren sich die Dehnungen, also die Kehrwerte der Federkonstanten.
hinweise:
  - 'In Reihe gilt $\dfrac{1}{D} = \dfrac{1}{D_1} + \dfrac{1}{D_2}$.'
loesung: |
  **Ansatz:** Hintereinander trägt jede Feder die volle Kraft, und die Dehnungen addieren sich. Deshalb gilt $\dfrac{1}{D} = \dfrac{1}{D_1} + \dfrac{1}{D_2}$.
  ---
  **Rechnung:** $\dfrac{1}{D} = \dfrac{3 + 2}{600\,\text{N/m}} = \dfrac{5}{600\,\text{N/m}}$, also $D = 120\,\text{N/m}$. Die Kette ist weicher als jede einzelne Feder. Wiederholen: [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

```aufgabe
id: p7-mix-federkanone
titel: Eine Federkanone
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Spielzeugkanone hat eine Feder mit $D = 500\,\text{N/m}$. Sie wird um $6{,}0\,\text{cm}$ zusammengedrückt und schießt dann eine Kugel mit $20\,\text{g}$ waagrecht ab. Mit welcher Geschwindigkeit verlässt die Kugel die Kanone (Reibung vernachlässigt)? Gib das Ergebnis in m/s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "0.06*sqrt(500/0.020)"
    einheit: "m/s"
    anzeige: '9{,}49'
    fehler:
      - wert: "sqrt(500*0.06/0.020)"
        meldung: Du hast $\tfrac12 D s$ statt $\tfrac12 D s^2$ verwendet. Die Spannenergie wächst mit dem **Quadrat** der Stauchung.
      - wert: "6*sqrt(500/0.020)"
        meldung: Du hast die Stauchung in Zentimetern eingesetzt. Rechne $6{,}0\,\text{cm} = 0{,}060\,\text{m}$.
hinweise:
  - Die Spannenergie der Feder wird vollständig zu Bewegungsenergie der Kugel.
  - '$\tfrac12 D s^2 = \tfrac12 m v^2$. Kürze $\tfrac12$ und löse nach $v$ auf.'
loesung: |
  **Ansatz:** Energieerhaltung. Die Spannenergie $\tfrac12 D s^2$ der Feder wird zur Bewegungsenergie $\tfrac12 m v^2$ der Kugel.
  ---
  **Umstellen:** $\tfrac12 D s^2 = \tfrac12 m v^2$ ergibt $v = s\sqrt{\dfrac{D}{m}}$.
  ---
  **Rechnung:** $v = 0{,}060\,\text{m}\cdot\sqrt{\dfrac{500\,\text{N/m}}{0{,}020\,\text{kg}}} = 0{,}060\,\text{m}\cdot 158\,\text{s}^{-1} = 9{,}49\,\text{m/s}$. Die Formel hat dieselbe Gestalt wie $\hat v = A\omega$ beim Federpendel. Wiederholen: [4.4 Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
```

```aufgabe
id: p7-mix-kreis
titel: Kreisbewegung und Schattenbild
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Punkt läuft auf einem Kreis mit dem Radius $0{,}50\,\text{m}$ und braucht für eine Runde $2{,}0\,\text{s}$.

  a) Wie groß ist seine Zentripetalbeschleunigung in $\text{m/s}^2$ (drei signifikante Stellen)?

  b) Sein Schatten auf einer Wand schwingt harmonisch. Wie groß ist die größte Beschleunigung des Schattens?
teile:
  - typ: zahl
    label: a) Zentripetalbeschleunigung
    loesung: "(2*pi/2.0)^2*0.50"
    einheit: "m/s²"
    anzeige: '4{,}93'
    fehler:
      - wert: "(2*pi/2.0)*0.50"
        meldung: Das ist die Bahngeschwindigkeit $v = \omega r$ in m/s. Die Zentripetalbeschleunigung ist $\omega^2 r$.
  - typ: zahl
    label: b) größte Beschleunigung des Schattens
    loesung: "(2*pi/2.0)^2*0.50"
    einheit: "m/s²"
    anzeige: '4{,}93'
    fehler:
      - wert: "0"
        meldung: Der Schatten hat in den Umkehrpunkten eine Beschleunigung. Dort zeigt die Zentripetalbeschleunigung des Punktes genau in Schwingungsrichtung.
hinweise:
  - '$\omega = 2\pi/T$ und $a_Z = \omega^2 r$.'
  - 'Die Schwingung des Schattens hat die Amplitude $A = r$ und dieselbe Kreisfrequenz. Ihr Höchstwert ist $\hat a = A\omega^2$.'
loesung: |
  **a)** $\omega = \dfrac{2\pi}{2{,}0\,\text{s}} = \pi\,\text{s}^{-1}$ und $a_Z = \omega^2 r = \pi^2\,\text{s}^{-2}\cdot 0{,}50\,\text{m} = 4{,}93\,\text{m/s}^2$.
  ---
  **b)** Der Schatten schwingt mit $A = 0{,}50\,\text{m}$ und $\omega = \pi\,\text{s}^{-1}$. Also ist $\hat a = A\omega^2 = 4{,}93\,\text{m/s}^2$.
  ---
  **Deutung:** Im Umkehrpunkt des Schattens zeigt die Zentripetalbeschleunigung genau parallel zur Wand. Dann sieht der Schatten sie ganz. Wiederholen: [6.2 Die Zentripetalbeschleunigung](/lernen/physik1/kreisbewegung-gravitation/die-zentripetalbeschleunigung).
```

```aufgabe
id: p7-mix-ballistisch
titel: Das ballistische Pendel
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Geschoss mit $10\,\text{g}$ fliegt mit $300\,\text{m/s}$ waagrecht in einen Holzklotz mit $2{,}0\,\text{kg}$, der an langen Fäden hängt, und bleibt darin stecken. Wie hoch steigt der Klotz mit dem Geschoss? Gib das Ergebnis in cm auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "(0.010*300/2.010)^2/(2*9.81)*100"
    einheit: "cm"
    anzeige: '11{,}4'
    fehler:
      - wert: "0.010*300^2/(2*9.81*2.010)*100"
        meldung: Du hast die Bewegungsenergie des Geschosses vollständig in Lageenergie umgerechnet. Beim Steckenbleiben geht aber der allergrößte Teil in Wärme und Verformung über. Für den Stoß gilt nur die Impulserhaltung.
hinweise:
  - Teile die Aufgabe in zwei Vorgänge, den Stoß und das Hochschwingen. Welcher Erhaltungssatz gilt jeweils?
  - 'Stoß: $m v = (m + M) V$. Hochschwingen: $\tfrac12 V^2 = g h$.'
loesung: |
  **Modell:** Zwei Vorgänge. Beim **Stoß** bleibt das Geschoss stecken, das ist ein vollständig unelastischer Stoß. Dort gilt nur die Impulserhaltung. Beim **Hochschwingen** gilt der Energiesatz wie bei einem Pendel.
  ---
  **Stoß:** $0{,}010\,\text{kg}\cdot 300\,\text{m/s} = 2{,}010\,\text{kg}\cdot V$, also $V = 1{,}49\,\text{m/s}$.
  ---
  **Hochschwingen:** $\tfrac12 V^2 = g h$, also $h = \dfrac{V^2}{2g} = \dfrac{(1{,}49\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = 0{,}114\,\text{m} = 11{,}4\,\text{cm}$.
  ---
  **Kontrolle:** Vor dem Stoß hatte das Geschoss $450\,\text{J}$, danach der Klotz nur $2{,}2\,\text{J}$. Mehr als $99\,\%$ wurden beim Eindringen in Wärme umgewandelt. Wiederholen: [4.9 Stöße: elastisch und unelastisch](/lernen/physik1/arbeit-energie-impuls/stoesse-elastisch-und-unelastisch).
```

```aufgabe
id: p7-mix-verfahren-ort
titel: "Welches Verfahren passt? Geschwindigkeit an einem Ort"
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Federpendel ($m$, $D$ und die Amplitude $A$ sind bekannt) läuft gerade durch die Stelle $x = 2\,\text{cm}$. Gesucht ist seine Geschwindigkeit. Die Zeit ist nicht bekannt. Welcher Weg ist am direktesten? Du musst nicht rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Energiesatz: $\\tfrac12 D A^2 = \\tfrac12 D x^2 + \\tfrac12 m v^2$"
      - "Bewegungsgleichung mit konstanter Beschleunigung: $v^2 = 2 a s$"
      - "Impulserhaltung"
      - "Zuerst $T = 2\\pi\\sqrt{m/D}$, dann $v = x/T$"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Beschleunigung einer Schwingung ist **nicht** konstant, sie ändert sich mit der Auslenkung. Formeln der gleichmäßig beschleunigten Bewegung gelten hier nicht.
      - wert: 2
        meldung: Der Impuls des Körpers bleibt nicht erhalten, denn die Feder übt dauernd eine Kraft aus. Erhalten bleibt die Energie.
      - wert: 3
        meldung: Weg durch Zeit ergäbe höchstens eine mittlere Geschwindigkeit, und auch die nicht für diese Stelle. Die Geschwindigkeit ändert sich während der Schwingung ständig.
hinweise:
  - Welche Größe bleibt bei einer ungedämpften Schwingung erhalten?
loesung: |
  **Kennzeichen:** Gegeben ist ein **Ort**, nicht eine Zeit. Die Beschleunigung ist nicht konstant.
  ---
  **Verfahren:** Der Energiesatz verbindet Ort und Geschwindigkeit direkt, ohne Zeit. Man löst $\tfrac12 D A^2 = \tfrac12 D x^2 + \tfrac12 m v^2$ nach $v$ auf.
```

```aufgabe
id: p7-mix-verfahren-federkonstante
titel: "Welches Verfahren passt? Federkonstante aus der Dehnung"
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Körper der Masse $m$ wird vorsichtig an eine Feder gehängt und langsam abgesenkt, bis er ruhig hängt. Die Feder ist dann um $\Delta l$ gedehnt. Gesucht ist die Federkonstante. Welcher Ansatz ist richtig? Du musst nicht rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Kräftegleichgewicht: $D\\,\\Delta l = m g$"
      - "Energiesatz: $m g\\,\\Delta l = \\tfrac12 D\\,\\Delta l^2$"
      - "Schwingungsdauer: $T = 2\\pi\\sqrt{m/D}$"
      - "Grundgesetz mit $a = g$: $D\\,\\Delta l = m\\cdot 2g$"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Energiesatz gilt hier nicht, weil die Hand beim langsamen Absenken Energie aufnimmt. Er würde $D = 2 m g/\Delta l$ liefern, das Doppelte des richtigen Werts. Für einen **ruhig hängenden** Körper gilt das Kräftegleichgewicht.
      - wert: 2
        meldung: Für diese Formel bräuchte man eine gemessene Schwingungsdauer. Gegeben ist aber nur die Dehnung im Gleichgewicht.
      - wert: 3
        meldung: Der Körper hängt in Ruhe, seine Beschleunigung ist null. Dann ist die Summe der Kräfte null.
hinweise:
  - Der Körper hängt am Ende in Ruhe. Was gilt dann für die Kräfte?
  - Ist beim langsamen Absenken mit der Hand die mechanische Energie erhalten?
loesung: |
  **Kennzeichen:** Der Körper ruht. Also ist die resultierende Kraft null.
  ---
  **Verfahren:** Kräftegleichgewicht $D\,\Delta l = m g$, also $D = m g/\Delta l$.
  ---
  **Warum nicht der Energiesatz?** Beim langsamen Absenken bremst die Hand. Sie nimmt dabei Energie auf. Lässt man den Körper dagegen einfach fallen, schwingt er um die Ruhelage, und sein tiefster Punkt liegt bei $2\Delta l$. Genau dort stimmt $m g\cdot 2\Delta l = \tfrac12 D(2\Delta l)^2$.
```

```aufgabe
id: p7-mix-verfahren-viertelperiode
titel: "Welches Verfahren passt? Zeit bis zur Ruhelage"
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Körper an einer Feder wird ausgelenkt und losgelassen. Gesucht ist die Zeit, bis er zum ersten Mal durch die Ruhelage läuft. $m$, $D$ und die Auslenkung sind bekannt. Welcher Weg ist richtig? Du musst nicht rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Mit $s = \\tfrac12 a t^2$ und $a = D A/m$ die Zeit für den Weg $A$ berechnen."
      - "Ein Viertel der Schwingungsdauer: $t = \\tfrac14\\cdot 2\\pi\\sqrt{m/D}$."
      - "Die halbe Schwingungsdauer: $t = \\tfrac12\\cdot 2\\pi\\sqrt{m/D}$."
      - "Mit dem Energiesatz die Höchstgeschwindigkeit und dann $t = A/\\hat v$."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Formel $s = \tfrac12 a t^2$ gilt nur bei **konstanter** Beschleunigung. Bei der Schwingung wird die Beschleunigung auf dem Weg zur Ruhelage immer kleiner.
      - wert: 2
        meldung: Nach einer halben Periode ist der Körper im **anderen** Umkehrpunkt. Vom Umkehrpunkt bis zur Ruhelage ist es nur ein Viertel der Periode.
      - wert: 3
        meldung: $A/\hat v$ setzt voraus, dass der Körper die ganze Zeit mit der Höchstgeschwindigkeit läuft. Er startet aber aus der Ruhe und wird erst allmählich schneller.
hinweise:
  - Ist die Beschleunigung auf dem Weg zur Ruhelage konstant?
  - Welchen Bruchteil einer ganzen Schwingung legt der Körper vom Umkehrpunkt bis zur Ruhelage zurück?
loesung: |
  **Kennzeichen:** Die Beschleunigung ändert sich mit dem Ort. Formeln für konstante Beschleunigung scheiden aus.
  ---
  **Verfahren:** Vom Umkehrpunkt bis zur Ruhelage ist ein Viertel der Schwingung. Also $t = T/4$ mit $T = 2\pi\sqrt{m/D}$.
  ---
  **Beispielzahl:** Mit $m = 0{,}50\,\text{kg}$ und $D = 50\,\text{N/m}$ ist $T = 0{,}628\,\text{s}$ und $t = 0{,}157\,\text{s}$, unabhängig von der Auslenkung.
```

```aufgabe
id: p7-mix-energie-aus-gleichung
titel: Energie aus der Zeitfunktion
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Körper mit $0{,}50\,\text{kg}$ schwingt nach $x(t) = 0{,}03\,\text{m}\cdot\sin(8\,\text{s}^{-1}\cdot t)$. Wie groß ist seine Schwingungsenergie in J?
teile:
  - typ: zahl
    loesung: "0.5*0.50*(0.03*8)^2"
    einheit: "J"
    anzeige: '0{,}0144'
    fehler:
      - wert: "0.5*0.50*0.03^2*8"
        meldung: In $\hat v = A\omega$ steht $\omega$ nur einmal, aber in $\tfrac12 m\hat v^2$ wird $\hat v$ quadriert. Also braucht man $\omega^2$.
      - wert: "0.5*0.50*0.03^2"
        meldung: Du hast die Amplitude statt der Höchstgeschwindigkeit eingesetzt. Berechne zuerst $\hat v = A\omega$.
hinweise:
  - 'Lies $A$ und $\omega$ ab. Die Energie ist die Bewegungsenergie in der Ruhelage.'
  - '$E = \tfrac12 m\hat v^2$ mit $\hat v = A\omega$.'
loesung: |
  **Ablesen:** $A = 0{,}03\,\text{m}$ und $\omega = 8\,\text{s}^{-1}$.
  ---
  **Höchstgeschwindigkeit:** $\hat v = A\omega = 0{,}03\,\text{m}\cdot 8\,\text{s}^{-1} = 0{,}24\,\text{m/s}$.
  ---
  **Energie:** $E = \tfrac12 m\hat v^2 = \tfrac12\cdot 0{,}50\,\text{kg}\cdot(0{,}24\,\text{m/s})^2 = 0{,}0144\,\text{J}$. Probe über die Federkonstante: $D = m\omega^2 = 32\,\text{N/m}$ und $\tfrac12 D A^2 = 0{,}0144\,\text{J}$. ✓
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Punkte und ein
Sachkontext. Der Zeitrichtwert steht bei jeder Aufgabe. Als Faustregel gilt etwa zwei Minuten pro Punkt.
Schreib bei jeder Aufgabe zuerst das Modell hin (Federpendel, Fadenpendel, Energiesatz, Resonanz), dann
die Formel, dann die Zahlen mit Einheiten.

```aufgabe
id: p7-pruefung-federpendel
titel: Federpendel vollständig
niveau: 3
punkte: 10
lernziel: 3
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 20 Minuten.* Hängt man einen Körper der Masse $250\,\text{g}$ an eine Schraubenfeder, so verlängert sie sich um $10{,}0\,\text{cm}$. Dann wird der Körper um weitere $4{,}0\,\text{cm}$ nach unten gezogen und losgelassen. Runde auf drei signifikante Stellen.

  a) Berechne die Federkonstante in N/m. (2 P)

  b) Berechne die Schwingungsdauer in s. (2 P)

  c) Wie groß ist die Höchstgeschwindigkeit in m/s, und wo wird sie erreicht? (3 P)

  d) Berechne die Schwingungsenergie in J. (3 P)
teile:
  - typ: zahl
    label: a) Federkonstante
    loesung: "0.250*9.81/0.100"
    einheit: "N/m"
    anzeige: '24{,}5'
    fehler:
      - wert: "0.250*9.81/0.140"
        meldung: Für die Federkonstante zählt nur die Dehnung durch die Gewichtskraft, $10{,}0\,\text{cm}$. Die weiteren $4{,}0\,\text{cm}$ zieht die Hand.
  - typ: zahl
    label: b) Schwingungsdauer
    loesung: "2*pi*sqrt(0.250/(0.250*9.81/0.100))"
    einheit: "s"
    anzeige: '0{,}634'
  - typ: zahl
    label: c) Höchstgeschwindigkeit
    loesung: "0.040*2*pi/(2*pi*sqrt(0.250/(0.250*9.81/0.100)))"
    einheit: "m/s"
    anzeige: '0{,}396'
    fehler:
      - wert: "0.140*2*pi/(2*pi*sqrt(0.250/(0.250*9.81/0.100)))"
        meldung: Die Amplitude ist die Auslenkung aus der **neuen** Ruhelage, also $4{,}0\,\text{cm}$, nicht $14\,\text{cm}$.
  - typ: zahl
    label: d) Energie
    loesung: "0.5*(0.250*9.81/0.100)*0.040^2"
    einheit: "J"
    anzeige: '0{,}0196'
    fehler:
      - wert: "0.5*(0.250*9.81/0.100)*0.140^2"
        meldung: Die statische Dehnung gehört nicht zur Amplitude. Um die neue Ruhelage herum schwingt der Körper mit $A = 4{,}0\,\text{cm}$.
hinweise:
  - 'a) Im Gleichgewicht hält die Federkraft der Gewichtskraft stand: $D\,\Delta l = m g$.'
  - 'c) und d) Die Amplitude ist $4{,}0\,\text{cm}$, gemessen von der neuen Ruhelage. Dann $\hat v = A\omega$ und $E = \tfrac12 D A^2$.'
loesung: |
  **Modell:** Senkrechtes Federpendel. Die Gewichtskraft verschiebt nur die Ruhelage um $10{,}0\,\text{cm}$ nach unten. Um sie herum schwingt der Körper harmonisch mit $A = 4{,}0\,\text{cm}$.
  ---
  **a)** $D = \dfrac{m g}{\Delta l} = \dfrac{0{,}250\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}100\,\text{m}} = 24{,}5\,\text{N/m}$.
  ---
  **b)** $T = 2\pi\sqrt{\dfrac{m}{D}} = 2\pi\sqrt{\dfrac{0{,}250\,\text{kg}}{24{,}5\,\text{N/m}}} = 0{,}634\,\text{s}$. Gleichwertig ist $2\pi\sqrt{\Delta l/g}$.
  ---
  **c)** $\omega = \dfrac{2\pi}{T} = 9{,}90\,\text{s}^{-1}$ und $\hat v = A\omega = 0{,}040\,\text{m}\cdot 9{,}90\,\text{s}^{-1} = 0{,}396\,\text{m/s}$. Sie wird beim Durchgang durch die Ruhelage erreicht, also $10\,\text{cm}$ unter der ungedehnten Lage.
  ---
  **d)** $E = \tfrac12 D A^2 = \tfrac12\cdot 24{,}5\,\text{N/m}\cdot(0{,}040\,\text{m})^2 = 0{,}0196\,\text{J}$. Probe: $\tfrac12 m\hat v^2 = \tfrac12\cdot 0{,}250\,\text{kg}\cdot(0{,}396\,\text{m/s})^2 = 0{,}0196\,\text{J}$. ✓
```

```aufgabe
id: p7-pruefung-pendeluhr
titel: Pendeluhr im Sommer
niveau: 3
punkte: 8
lernziel: 4
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 15 Minuten.* Eine Pendeluhr soll eine Schwingungsdauer von genau $2{,}000\,\text{s}$ haben.

  a) Wie lang muss das Pendel sein? Gib das Ergebnis in m auf drei signifikante Stellen an. (2 P)

  b) Im Sommer dehnt sich die Pendelstange durch die Wärme um $0{,}050\,\%$ aus. Um welchen Faktor ändert sich die Schwingungsdauer? Gib ihn auf fünf Nachkommastellen an. (3 P)

  c) Wie viele Sekunden geht die Uhr pro Tag nach? Runde auf eine Nachkommastelle. (3 P)
teile:
  - typ: zahl
    label: a) Länge
    loesung: "9.81*2^2/(4*pi^2)"
    einheit: "m"
    anzeige: '0{,}994'
  - typ: zahl
    label: b) Faktor
    loesung: "sqrt(1.0005)"
    toleranz: 0.000005
    anzeige: '1{,}00025'
    fehler:
      - wert: "1.0005"
        meldung: Die Schwingungsdauer ist proportional zur **Wurzel** der Länge. Eine relative Änderung von $0{,}05\,\%$ in $l$ gibt nur etwa $0{,}025\,\%$ in $T$.
  - typ: zahl
    label: c) Nachgehen pro Tag
    loesung: "86400*(1-1/sqrt(1.0005))"
    einheit: "s"
    anzeige: '21{,}6'
    fehler:
      - wert: "86400*(1-1/1.0005)"
        meldung: Du hast mit dem Faktor der Länge gerechnet. Für die Uhr zählt der Faktor der Schwingungsdauer, $\sqrt{1{,}0005}$.
hinweise:
  - '$T$ ist proportional zu $\sqrt l$. Eine kleine relative Längenänderung ändert $T$ etwa um die Hälfte davon.'
  - 'Die Uhr zählt Schwingungen. In einem echten Tag macht sie weniger Schwingungen als vorgesehen und zeigt nur $86\,400\,\text{s}/1{,}00025$ an.'
loesung: |
  **Modell:** Das Uhrpendel ist ein Fadenpendel mit kleiner Auslenkung, $T = 2\pi\sqrt{l/g}$. Die Uhr zählt Schwingungen und rückt pro Schwingung um $2{,}000\,\text{s}$ vor.
  ---
  **a)** Aus $T^2 = 4\pi^2 l/g$ folgt $l = \dfrac{g T^2}{4\pi^2} = \dfrac{9{,}81\,\text{m/s}^2\cdot 4{,}000\,\text{s}^2}{39{,}48} = 0{,}994\,\text{m}$.
  ---
  **b)** $\dfrac{T'}{T} = \sqrt{\dfrac{l'}{l}} = \sqrt{1{,}0005} = 1{,}00025$. Jede Schwingung dauert also $0{,}025\,\%$ länger.
  ---
  **c)** In $86\,400\,\text{s}$ macht das Pendel nur $\dfrac{86\,400\,\text{s}}{2{,}000\,\text{s}\cdot 1{,}00025}$ Schwingungen. Die Uhr zeigt deshalb $\dfrac{86\,400\,\text{s}}{1{,}00025} = 86\,378{,}4\,\text{s}$ an. Sie geht $21{,}6\,\text{s}$ pro Tag nach.
  ---
  **Plausibilität:** $0{,}025\,\%$ von einem Tag sind $0{,}00025\cdot 86\,400\,\text{s} = 21{,}6\,\text{s}$. ✓ Präzisionspendel haben deshalb Stangen aus Invar, einer Legierung mit sehr kleiner Wärmeausdehnung.
```

```aufgabe
id: p7-pruefung-diagramm
titel: Schwingung aus einem Diagramm auswerten
niveau: 3
punkte: 10
lernziel: 2
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 20 Minuten.* Ein Körper mit $200\,\text{g}$ schwingt an einer Feder. Das Diagramm zeigt seine Auslenkung. Runde auf drei signifikante Stellen.

  a) Lies Amplitude (in cm) und Periodendauer (in s) ab. (2 P)

  b) Berechne die Federkonstante in N/m. (3 P)

  c) Berechne die größte Geschwindigkeit in m/s und die größte Beschleunigung in $\text{m/s}^2$. (3 P)

  d) Berechne die Schwingungsenergie in J. (2 P)
plot:
  x: [0, 1.5]
  y: [-4, 4]
  achsen: { x: "t in s", y: "x in cm" }
  graphen:
    - { f: "3*cos(4*pi*x)", farbe: 0 }
  punkte:
    - { x: 0, y: 3 }
    - { x: 0.5, y: 3 }
    - { x: 1.0, y: 3 }
teile:
  - typ: zahl
    label: a) Amplitude
    loesung: "3"
    einheit: "cm"
    fehler:
      - wert: "6"
        meldung: Das ist der Abstand vom höchsten zum tiefsten Punkt. Die Amplitude misst man von der Nulllinie aus.
  - typ: zahl
    label: a) Periodendauer
    loesung: "0.5"
    einheit: "s"
    fehler:
      - wert: "0.25"
        meldung: Von einem Maximum zum nächsten Minimum ist nur eine halbe Periode. Miss von Maximum zu Maximum.
  - typ: zahl
    label: b) Federkonstante
    loesung: "4*pi^2*0.200/0.5^2"
    einheit: "N/m"
    anzeige: '31{,}6'
    fehler:
      - wert: "4*pi^2*200/0.5^2"
        meldung: Du hast die Masse in Gramm eingesetzt. Rechne $200\,\text{g} = 0{,}200\,\text{kg}$.
  - typ: zahl
    label: c) größte Geschwindigkeit
    loesung: "0.03*2*pi/0.5"
    einheit: "m/s"
    anzeige: '0{,}377'
  - typ: zahl
    label: c) größte Beschleunigung
    loesung: "0.03*(2*pi/0.5)^2"
    einheit: "m/s²"
    anzeige: '4{,}74'
    fehler:
      - wert: "0.03*2*pi/0.5"
        meldung: Das ist die größte Geschwindigkeit. Für die Beschleunigung braucht man $\omega^2$.
  - typ: zahl
    label: d) Energie
    loesung: "0.5*4*pi^2*0.200/0.5^2*0.03^2"
    einheit: "J"
    anzeige: '0{,}0142'
hinweise:
  - Die markierten Punkte sind aufeinanderfolgende Maxima. Ihr zeitlicher Abstand ist die Periodendauer.
  - '$D = 4\pi^2 m/T^2$, $\omega = 2\pi/T$, $\hat v = A\omega$, $\hat a = A\omega^2$ und $E = \tfrac12 D A^2$, alles in SI-Einheiten.'
loesung: |
  **Modell:** Federpendel, harmonisch. Der Körper startet bei $t = 0$ im oberen Umkehrpunkt, also $x(t) = A\cos(\omega t)$.
  ---
  **a)** Die Maxima liegen bei $3\,\text{cm}$, also $A = 3{,}0\,\text{cm}$. Sie folgen im Abstand $T = 0{,}50\,\text{s}$ aufeinander.
  ---
  **b)** Aus $T = 2\pi\sqrt{m/D}$ folgt $D = \dfrac{4\pi^2 m}{T^2} = \dfrac{39{,}48\cdot 0{,}200\,\text{kg}}{(0{,}50\,\text{s})^2} = 31{,}6\,\text{N/m}$.
  ---
  **c)** $\omega = \dfrac{2\pi}{0{,}50\,\text{s}} = 12{,}6\,\text{s}^{-1}$. Dann $\hat v = A\omega = 0{,}030\,\text{m}\cdot 12{,}6\,\text{s}^{-1} = 0{,}377\,\text{m/s}$ und $\hat a = A\omega^2 = 0{,}030\,\text{m}\cdot 158\,\text{s}^{-2} = 4{,}74\,\text{m/s}^2$.
  ---
  **d)** $E = \tfrac12 D A^2 = \tfrac12\cdot 31{,}6\,\text{N/m}\cdot(0{,}030\,\text{m})^2 = 0{,}0142\,\text{J}$. Probe: $\tfrac12 m\hat v^2 = \tfrac12\cdot 0{,}200\,\text{kg}\cdot(0{,}377\,\text{m/s})^2 = 0{,}0142\,\text{J}$. ✓
```

```aufgabe
id: p7-pruefung-motorrad
titel: Das Federbein eines Motorrads
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Setzt sich ein Fahrer mit $80\,\text{kg}$ auf ein Motorrad, wird die Federung um $2{,}0\,\text{cm}$ zusammengedrückt. Die gefederte Masse mit Fahrer beträgt $250\,\text{kg}$. Runde auf drei signifikante Stellen.

  a) Berechne die Federkonstante der Federung in N/m. (2 P)

  b) Berechne die Eigenfrequenz in Hz. (2 P)

  c) Nach einer Bodenwelle sinkt die Amplitude innerhalb einer Periode von $3{,}0\,\text{cm}$ auf $0{,}60\,\text{cm}$. Berechne die Abklingkonstante in $\text{s}^{-1}$. (3 P)

  d) Auf einer Straße liegen Querfugen im Abstand von $8{,}0\,\text{m}$. Bei welcher Geschwindigkeit in km/h tritt Resonanz auf? (3 P)
teile:
  - typ: zahl
    label: a) Federkonstante
    loesung: "80*9.81/0.020"
    einheit: "N/m"
    anzeige: '3{,}92\cdot 10^{4}'
  - typ: zahl
    label: b) Eigenfrequenz
    loesung: "sqrt(80*9.81/0.020/250)/(2*pi)"
    einheit: "Hz"
    anzeige: '1{,}99'
    fehler:
      - wert: "sqrt(80*9.81/0.020/80)/(2*pi)"
        meldung: Für die Schwingung zählt die ganze gefederte Masse, $250\,\text{kg}$. Die $80\,\text{kg}$ braucht man nur für die Federkonstante.
  - typ: zahl
    label: c) Abklingkonstante
    loesung: "ln(3.0/0.60)*sqrt(80*9.81/0.020/250)/(2*pi)"
    einheit: "1/s"
    anzeige: '3{,}21'
    fehler:
      - wert: "ln(3.0/0.60)"
        meldung: Du hast den Logarithmus nicht durch den Zeitabstand geteilt. Die beiden Maxima liegen eine Periode $T = 1/f_0$ auseinander.
  - typ: zahl
    label: d) Resonanzgeschwindigkeit
    loesung: "8.0*sqrt(80*9.81/0.020/250)/(2*pi)*3.6"
    einheit: "km/h"
    anzeige: '57{,}4'
    fehler:
      - wert: "8.0*sqrt(80*9.81/0.020/250)/(2*pi)"
        meldung: Das ist die Geschwindigkeit in m/s. Multipliziere mit $3{,}6$ für km/h.
hinweise:
  - 'a) und b): Die Last des Fahrers drückt die Federn zusammen, $D = \Delta F/\Delta l$. Für $f_0$ zählt die gesamte gefederte Masse.'
  - 'c) $\delta = \ln(A_1/A_2)/T$ mit $T = 1/f_0$. d) Resonanz bei $f_E = v/d = f_0$.'
loesung: |
  **Modell:** Die gefederte Masse auf dem Federbein ist ein Federpendel, die Stoßdämpfer dämpfen geschwindigkeitsproportional, die Fugen sind ein periodischer Erreger.
  ---
  **a)** $D = \dfrac{80\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}020\,\text{m}} = 3{,}92\cdot 10^{4}\,\text{N/m}$.
  ---
  **b)** $f_0 = \dfrac{1}{2\pi}\sqrt{\dfrac{3{,}92\cdot 10^{4}\,\text{N/m}}{250\,\text{kg}}} = \dfrac{12{,}5\,\text{s}^{-1}}{2\pi} = 1{,}99\,\text{Hz}$, also $T = 0{,}502\,\text{s}$.
  ---
  **c)** $\delta = \dfrac{\ln(3{,}0/0{,}60)}{T} = \dfrac{\ln 5}{0{,}502\,\text{s}} = \dfrac{1{,}61}{0{,}502\,\text{s}} = 3{,}21\,\text{s}^{-1}$. Die Federung ist also kräftig gedämpft: Nach einer Periode ist nur noch ein Fünftel der Amplitude übrig. Den aperiodischen Grenzfall erreicht sie aber nicht, sie schwingt noch etwas nach.
  ---
  **d)** $f_E = v/d = f_0$ ergibt $v = d\cdot f_0 = 8{,}0\,\text{m}\cdot 1{,}99\,\text{s}^{-1} = 16{,}0\,\text{m/s} = 57{,}4\,\text{km/h}$. Wegen der kräftigen Dämpfung bleibt das Aufschaukeln aber begrenzt.
```

```aufgabe
id: p7-pruefung-tilger
titel: Der Schwingungstilger im Hochhaus
niveau: 3
punkte: 8
lernziel: 7
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Hochhaus schwankt im Wind mit seiner Eigenfrequenz $0{,}15\,\text{Hz}$. Im obersten Stockwerk hängt eine riesige Stahlkugel als Pendel. Sie soll mit derselben Frequenz schwingen und dem Gebäude Schwingungsenergie entziehen.

  a) Wie lang muss das Pendel sein? Gib das Ergebnis in m auf drei signifikante Stellen an. (3 P)

  b) Windböen kommen in regelmäßigen Abständen. Bei welchem zeitlichen Abstand der Böen schaukelt sich das Gebäude ohne Tilger am stärksten auf (in s)? (2 P)

  c) Ohne Tilger halbiert sich die Amplitude des Gebäudes erst nach 20 Perioden. Berechne die Abklingkonstante in $\text{s}^{-1}$ auf zwei signifikante Stellen. (3 P)
teile:
  - typ: zahl
    label: a) Pendellänge
    loesung: "9.81/(2*pi*0.15)^2"
    einheit: "m"
    anzeige: '11{,}0'
    fehler:
      - wert: "9.81/0.15^2"
        meldung: Du hast $f$ statt $\omega = 2\pi f$ verwendet. Aus $f = \frac{1}{2\pi}\sqrt{g/l}$ folgt $l = g/(2\pi f)^2$.
  - typ: zahl
    label: b) Abstand der Böen
    loesung: "1/0.15"
    einheit: "s"
    anzeige: '6{,}67'
  - typ: zahl
    label: c) Abklingkonstante
    loesung: "ln(2)/(20/0.15)"
    einheit: "1/s"
    anzeige: '0{,}0052'
    fehler:
      - wert: "ln(2)/20"
        meldung: Die $20$ sind Perioden, keine Sekunden. Rechne die Zeit aus, $20\cdot T = 20/0{,}15\,\text{Hz}$.
hinweise:
  - 'a) Löse $f = \dfrac{1}{2\pi}\sqrt{g/l}$ nach $l$ auf.'
  - 'b) Resonanz bei $f_E = f_0$. c) $t_{1/2} = 20\,T$ und $\delta = \ln 2/t_{1/2}$.'
loesung: |
  **Modell:** Gebäude und Pendel sind zwei Schwinger mit gleicher Eigenfrequenz. Das Pendel ist ein Fadenpendel, die Böen sind ein Erreger.
  ---
  **a)** Quadrieren von $2\pi f = \sqrt{g/l}$ ergibt $l = \dfrac{g}{(2\pi f)^2} = \dfrac{9{,}81\,\text{m/s}^2}{(0{,}942\,\text{s}^{-1})^2} = 11{,}0\,\text{m}$. Solche Pendel reichen tatsächlich über mehrere Stockwerke.
  ---
  **b)** Resonanz tritt auf, wenn die Böen im Takt der Eigenfrequenz kommen: $T = \dfrac{1}{0{,}15\,\text{Hz}} = 6{,}67\,\text{s}$.
  ---
  **c)** $t_{1/2} = 20\cdot 6{,}67\,\text{s} = 133\,\text{s}$ und $\delta = \dfrac{\ln 2}{133\,\text{s}} = 0{,}0052\,\text{s}^{-1}$. So schwache Dämpfung bedeutet ein hohes Resonanzmaximum. Genau deshalb baut man den Tilger ein.
```

```aufgabe
id: p7-pruefung-begriffe
titel: Schwingungen erklären
niveau: 3
punkte: 6
lernziel: 1
kompetenz: begruenden
angabe: |
  *Zeitrichtwert: 12 Minuten.*

  a) Was ist eine harmonische Schwingung? Begründe, warum das Federpendel harmonisch schwingt, das Fadenpendel nur näherungsweise. (3 P)

  b) Beschreibe den Energieverlauf bei einem ungedämpften und bei einem gedämpften Federpendel. (3 P)
teile:
  - typ: text
    label: a)
    muster: |
      Bei einer harmonischen Schwingung ist die Rückstellkraft proportional zur Auslenkung und ihr entgegengesetzt ($F = -D x$).
      Die Auslenkung ist dann eine Sinusfunktion der Zeit, und die Periode hängt nicht von der Amplitude ab. Beim Federpendel gilt
      das Hookesche Gesetz exakt (im elastischen Bereich). Beim Fadenpendel ist die Rückstellkraft $m g\sin\alpha$. Nur für kleine
      Winkel gilt $\sin\alpha \approx \alpha$ und damit $F \approx -(m g/l)\,x$.
  - typ: text
    label: b)
    muster: |
      Ungedämpft wandelt sich Spannenergie ($\tfrac12 D x^2$, am größten in den Umkehrpunkten) ständig in Bewegungsenergie
      ($\tfrac12 m v^2$, am größten in der Ruhelage) um und zurück. Die Summe $\tfrac12 D A^2$ bleibt konstant. Gedämpft wird bei
      jeder Schwingung ein Teil in Wärme umgewandelt. Die Gesamtenergie und damit die Amplitude nehmen ab, bei
      geschwindigkeitsproportionaler Reibung exponentiell.
hinweise:
  - Nenne das lineare Kraftgesetz und die Kleinwinkelnäherung.
  - Für b) nenne die beiden Energieformen, wo sie jeweils am größten sind, und was die Reibung mit der Energie macht.
loesung: |
  **a) Definition:** Harmonisch heißt: Es gilt das lineare Kraftgesetz $F = -D x$. Daraus folgt $a = -\omega^2 x$ und eine Sinusschwingung.
  ---
  **a) Pendel:** Beim Federpendel gilt $F = -D x$ exakt. Beim Fadenpendel ist $F = -m g\sin\alpha$, erst mit $\sin\alpha \approx \alpha$ (Bogenmaß, kleine Winkel) wird die Kraft linear.
  ---
  **b)** Ungedämpft pendelt die Energie zwischen $E_{\text{sp}}$ und $E_{\text{kin}}$, ihre Summe bleibt konstant. Gedämpft geht Energie als Wärme an die Umgebung, und die Amplitude sinkt.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Eine Schwingung ist harmonisch, wenn die Rückstellkraft proportional zur Auslenkung ist und ihr
  entgegen zeigt. Dann ist $x(t)$ eine Sinusfunktion. (2) Im Umkehrpunkt ist die Geschwindigkeit null und die
  Beschleunigung am größten, in der Ruhelage ist es umgekehrt. (3) Federpendel: $T = 2\pi\sqrt{m/D}$, Fadenpendel:
  $T = 2\pi\sqrt{l/g}$, beide unabhängig von der Amplitude. Resonanz entsteht, wenn man mit der Eigenfrequenz anregt.
```

:::zusammenfassung
- **Kenngrößen:** Amplitude $A$ (von der Ruhelage aus), Periodendauer $T$ (eine **ganze** Schwingung),
  Frequenz $f = 1/T$ in Hz, Kreisfrequenz $\omega = 2\pi f$. Messen: viele Perioden stoppen und teilen.
- **Harmonische Schwingung:** Lineares Kraftgesetz $F = -D x$, also $a = -\omega^2 x$. Dann ist
  $x(t) = A\sin(\omega t + \varphi_0)$, das Schattenbild einer gleichförmigen Kreisbewegung.
- **Phasenlage:** $v(t) = A\omega\cos(\omega t)$ läuft $x$ um $T/4$ voraus, $a(t) = -\omega^2 x(t)$ ist gegenphasig.
  $\hat v = A\omega$ in der Ruhelage, $\hat a = A\omega^2$ in den Umkehrpunkten.
- **Federpendel:** $T = 2\pi\sqrt{m/D}$, unabhängig von Amplitude und $g$. Senkrecht gilt $T = 2\pi\sqrt{\Delta l/g}$.
  Federn parallel: $D_1 + D_2$, in Reihe: Kehrwerte addieren.
- **Fadenpendel:** Rückstellkraft $-m g\sin\alpha$, für kleine Winkel (Bogenmaß) $\sin\alpha \approx \alpha$. Dann
  $T = 2\pi\sqrt{l/g}$, unabhängig von der Masse. Damit misst man $g = 4\pi^2 l/T^2$.
- **Energie:** $E = \tfrac12 D x^2 + \tfrac12 m v^2 = \tfrac12 D A^2$ bleibt konstant und ist proportional zu $A^2$.
  Die Energieformen schwanken mit doppelter Frequenz.
- **Dämpfung:** Bei geschwindigkeitsproportionaler Reibung $A(t) = A_0 e^{-\delta t}$, gleicher Faktor in gleichen
  Zeiten, $t_{1/2} = \ln 2/\delta$, $\delta = \ln(A_1/A_2)/\Delta t$. Stoßdämpfer: aperiodischer Grenzfall.
- **Erzwungene Schwingung:** Das System schwingt mit der Erregerfrequenz. Bei $f_E \approx f_0$ tritt Resonanz auf.
  Die Amplitude wird groß, begrenzt nur durch die Dämpfung.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **Halbe Periode für eine ganze gehalten** (von Umkehrpunkt zu Umkehrpunkt ist nur $T/2$).
   Training: „Fehler finden beim Pendel“ und „Das Sekundenpendel“.
2. **Abstand von Berg zu Tal als Amplitude genommen.** Training: „Kenngrößen aus einem Diagramm ablesen“.
3. **Frequenz und Kreisfrequenz verwechselt.** Training: „Von der Kreisfrequenz zurück“ und „Kenngrößen aus
   der Gleichung ablesen“.
4. **Taschenrechner im Gradmodus.** Training: „Kenngrößen aus der Gleichung ablesen“ und „Wann ist die halbe
   Amplitude erreicht?“.
5. **Im Umkehrpunkt auch $a = 0$ gesetzt.** Training: „Im oberen Umkehrpunkt“ und „Ein Stein senkrecht nach oben“.
6. **Doppelte Frequenz gleich doppelte Beschleunigung angenommen.** Training: „Dreifache Frequenz“.
7. **Geglaubt, ein weiterer Ausschlag dauere länger.** Training: „Vorhersage: zwei Auslenkungen“.
8. **$T$ proportional zu $m$ oder $l$ statt zu ihrer Wurzel.** Training: „Masse vervierfachen“ und „Pendellänge ändern“.
9. **Statische Dehnung zur Amplitude gezählt.** Training: „Federpendel vollständig“.
10. **Federkonstanten in Reihe addiert.** Training: „Zwei gleiche Federn“ und „Ersatzfeder für zwei Federn in Reihe“.
11. **Bei halber Amplitude halbe Energie angenommen.** Training: „Energie bei halber Auslenkung“ und
    „Geschwindigkeit bei halber Amplitude“.
12. **Formeln der gleichmäßig beschleunigten Bewegung auf eine Schwingung angewendet.** Training:
    „Welches Verfahren passt? Zeit bis zur Ruhelage“.
13. **Abnahme der Amplitude linear statt exponentiell gerechnet, oder „log“ statt „ln“.** Training: „Abklingende
    Amplitude“ und „Abklingkonstante und Abklingzeit“.
14. **Gedacht, ein erzwungenes System schwinge mit seiner Eigenfrequenz.** Training: „Mit welcher Frequenz schwingt es?“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“,
**3** „sicher, auch in der Prüfung“. Bei einer 1 wiederhole die Lektion und rechne ihre Aufgabe auf
Niveau 3.

1. Amplitude, Periode, Frequenz, Kreisfrequenz und Phase bestimmen und umrechnen, auch aus Diagrammen.
2. Begründen, warum $F = -D x$ zu einer Sinusschwingung führt.
3. $x(t)$, $v(t)$ und $a(t)$ aufstellen, berechnen und ihre Phasenlage erklären.
4. Die Schwingungsdauer des Federpendels berechnen und umstellen, auch mit kombinierten Federn.
5. Mit dem Fadenpendel rechnen, die Kleinwinkelnäherung begründen und $g$ mit Unsicherheit bestimmen.
6. Mit dem Energiesatz Geschwindigkeiten, Amplituden und Energien berechnen.
7. Abklingkonstante und Halbwertszeit bestimmen und die Dämpfungsfälle unterscheiden.
8. Resonanzkurven lesen, Resonanzbedingungen berechnen und Resonanz erklären.

## Mündliche Prüfung

```karten
- id: p7-k-schwingung
  frage: Was ist eine Schwingung, und welche zwei Zutaten braucht sie?
  antwort: |
    Eine Schwingung ist eine periodische Bewegung hin und her um eine Ruhelage. Man braucht eine Rückstellkraft, die den
    Körper zur Ruhelage zurückzieht, und Trägheit, durch die er über die Ruhelage hinausschießt. Bei einer Feder ist die
    Rückstellkraft die Federkraft, bei einem Pendel ein Teil der Gewichtskraft.
  kernpunkte: ["periodisch, hin und her um eine Ruhelage", "Rückstellkraft", "Trägheit lässt überschießen"]
- id: p7-k-kenngroessen
  frage: Erkläre Amplitude, Periodendauer, Frequenz und Kreisfrequenz. Wie misst man die Periodendauer genau?
  antwort: |
    Die Amplitude ist die größte Auslenkung, gemessen von der Ruhelage. Die Periodendauer $T$ ist die Zeit für eine
    vollständige Schwingung, also bis derselbe Zustand wieder erreicht ist. Die Frequenz $f = 1/T$ ist die Zahl der
    Schwingungen pro Sekunde in Hertz, die Kreisfrequenz $\omega = 2\pi f$. Genau misst man $T$, indem man viele Perioden
    stoppt und durch ihre Zahl teilt. Die Reaktionszeit verteilt sich dann auf alle Perioden.
  kernpunkte: ["A von der Ruhelage aus", "T = eine ganze Schwingung", "f = 1/T, ω = 2πf", "viele Perioden stoppen"]
- id: p7-k-harmonisch
  frage: Wann ist eine Schwingung harmonisch? Nenne ein Beispiel und ein Gegenbeispiel.
  antwort: |
    Wenn die Rückstellkraft proportional zur Auslenkung ist und ihr entgegen zeigt, $F = -D x$. Mit $F = m a$ folgt
    $a = -\omega^2 x$, und die Lösung ist $x(t) = A\sin(\omega t + \varphi_0)$. Beispiel: ein Körper an einer Feder.
    Gegenbeispiel: ein springender Ball, auf den im Flug die konstante Gewichtskraft wirkt. Er bewegt sich periodisch, aber in
    Parabelbögen.
  kernpunkte: ["F = −D·x", "Sinusfunktion", "Beispiel Federpendel", "Gegenbeispiel springender Ball"]
- id: p7-k-kreisbewegung
  frage: Wie hängt die harmonische Schwingung mit der Kreisbewegung zusammen?
  antwort: |
    Die harmonische Schwingung ist das Schattenbild einer gleichförmigen Kreisbewegung auf einen Durchmesser. Der Schatten
    hat die Höhe $A\sin(\omega t)$. Die Zentripetalbeschleunigung $A\omega^2$ des Punktes liefert als Komponente
    $-\omega^2$ mal die Auslenkung. Das ist genau das lineare Kraftgesetz. Daher heißt $\omega$ Kreisfrequenz.
  kernpunkte: ["Projektion einer gleichförmigen Kreisbewegung", "Zentripetalbeschleunigung gibt a = −ω²x", "Name Kreisfrequenz"]
- id: p7-k-phasenlage
  frage: Wo ist ein schwingender Körper am schnellsten, wo am stärksten beschleunigt? Warum ist die Beschleunigung im Umkehrpunkt am größten, obwohl der Körper dort stillsteht?
  antwort: |
    Am schnellsten ist er in der Ruhelage, $\hat v = A\omega$, dort ist die Beschleunigung null. Am stärksten beschleunigt
    ist er in den Umkehrpunkten, $\hat a = A\omega^2$, dort ist die Geschwindigkeit null. Die Beschleunigung hängt von der
    Kraft ab, nicht von der Geschwindigkeit. Im Umkehrpunkt ist die Auslenkung am größten, also nach $F = -D x$ auch die Rückstellkraft. Die
    Geschwindigkeit läuft der Auslenkung um eine Viertelperiode voraus, die Beschleunigung ist gegenphasig.
  kernpunkte: ["v̂ = Aω in der Ruhelage", "â = Aω² im Umkehrpunkt", "Beschleunigung folgt der Kraft", "Phasen: T/4 und gegenphasig"]
- id: p7-k-federpendel
  frage: Wovon hängt die Schwingungsdauer eines Federpendels ab? Leite die Formel her.
  antwort: |
    Aus $F = -D x$ und $F = m a$ folgt $a = -\frac{D}{m}x$. Für eine Sinusschwingung gilt $a = -\omega^2 x$, also
    $\omega^2 = D/m$ und $T = 2\pi\sqrt{m/D}$. Die Schwingungsdauer wächst mit der Masse und sinkt mit der Federkonstanten,
    jeweils mit der Wurzel. Sie hängt nicht von der Amplitude und nicht von $g$ ab.
  kernpunkte: ["a = −(D/m)·x", "ω² = D/m", "T = 2π√(m/D)", "nicht von A und g abhängig"]
- id: p7-k-isochronie
  frage: Warum braucht ein Federpendel für einen weiten Ausschlag genauso lange wie für einen kleinen?
  antwort: |
    Bei doppelter Auslenkung zieht die Feder nach $F = -D x$ mit doppelter Kraft. Der Körper wird doppelt so stark
    beschleunigt und ist in jedem Moment doppelt so schnell. Den doppelten Weg legt er also in derselben Zeit zurück. Das
    gilt nur, weil die Kraft genau proportional zur Auslenkung ist. Diese Eigenschaft heißt Isochronie.
  kernpunkte: ["doppelte Auslenkung, doppelte Kraft", "doppelte Geschwindigkeit in jedem Moment", "nur bei linearem Kraftgesetz"]
- id: p7-k-senkrecht-mond
  frage: Warum schwingt ein Federpendel auf dem Mond gleich schnell wie auf der Erde, ein Fadenpendel aber langsamer?
  antwort: |
    Beim senkrechten Federpendel verschiebt die Gewichtskraft nur die Ruhelage um $\Delta l = m g/D$. Um die neue Ruhelage
    gilt wieder $F = -D x$, und $T = 2\pi\sqrt{m/D}$ enthält kein $g$. Beim Fadenpendel ist die Rückstellkraft ein Teil der
    Gewichtskraft. Auf dem Mond ist sie kleiner, deshalb ist $T = 2\pi\sqrt{l/g}$ dort etwa zweieinhalbmal so groß. Das
    verbindet dieses Kapitel mit dem Kapitel Dynamik.
  kernpunkte: ["Gewichtskraft verschiebt nur die Ruhelage", "Federpendel ohne g", "Fadenpendel: Rückstellkraft aus der Gewichtskraft", "Mond: T größer"]
- id: p7-k-fadenpendel
  frage: Wovon hängt die Schwingungsdauer eines Fadenpendels ab, und welche Näherung steckt in der Formel?
  antwort: |
    Die Rückstellkraft ist $-m g\sin\alpha$. Für kleine Winkel im Bogenmaß gilt $\sin\alpha \approx \alpha$, und mit dem
    Bogen $x = l\alpha$ wird die Kraft linear, $F \approx -\frac{m g}{l}x$. Daraus folgt $T = 2\pi\sqrt{l/g}$. Die
    Schwingungsdauer hängt nur von der Länge bis zum Schwerpunkt und von $g$ ab. Bis etwa $10^\circ$ ist die Näherung sehr
    gut, bei großen Winkeln wird $T$ etwas länger.
  kernpunkte: ["F = −mg·sin α", "sin α ≈ α im Bogenmaß", "T = 2π√(l/g)", "gilt für kleine Winkel"]
- id: p7-k-masse-faellt-heraus
  frage: Warum hängt die Schwingungsdauer eines Fadenpendels nicht von der Masse ab?
  antwort: |
    Die Rückstellkraft $m g\sin\alpha$ ist proportional zur schweren Masse. Die Trägheit, die sich der Beschleunigung
    widersetzt, ist proportional zur trägen Masse. Beide Massen sind gleich, das ist ein Ergebnis aus dem Kapitel Dynamik.
    Deshalb kürzt sich $m$, genau wie beim freien Fall, bei dem alle Körper gleich schnell fallen.
  kernpunkte: ["Rückstellkraft ∝ schwere Masse", "Trägheit ∝ träge Masse", "beide gleich, m kürzt sich", "wie beim freien Fall"]
- id: p7-k-g-messen
  frage: Wie misst man mit einem Pendel die Fallbeschleunigung, und welche Messung bestimmt die Genauigkeit am stärksten?
  antwort: |
    Man misst die Länge bis zum Schwerpunkt und die Zeit für viele Schwingungen, berechnet $T$ und daraus $g = 4\pi^2 l/T^2$.
    Die Ausschläge hält man klein. Weil $T$ im Quadrat steht, zählt die relative Unsicherheit von $T$ doppelt. Deshalb stoppt
    man möglichst viele Perioden.
  kernpunkte: ["Länge bis zum Schwerpunkt", "viele Perioden stoppen", "g = 4π²l/T²", "Unsicherheit von T zählt doppelt"]
- id: p7-k-energie
  frage: Wie verteilt sich die Energie bei einer Schwingung, und wie hängt sie von der Amplitude ab?
  antwort: |
    Spannenergie $\tfrac12 D x^2$ und Bewegungsenergie $\tfrac12 m v^2$ wandeln sich ständig ineinander um. In den
    Umkehrpunkten ist alles Spannenergie, in der Ruhelage alles Bewegungsenergie. Die Summe $\tfrac12 D A^2$ bleibt
    erhalten, wie es der Energieerhaltungssatz aus dem Kapitel „Arbeit, Energie, Impuls“ verlangt. Sie ist proportional zum Quadrat der
    Amplitude. Bei halber Auslenkung ist erst ein Viertel der Energie in der Feder.
  kernpunkte: ["E_sp und E_kin wechseln", "E = ½DA² konstant", "E ∝ A²", "bei A/2 nur ¼ Spannenergie"]
- id: p7-k-gedaempft
  frage: Was ist eine gedämpfte Schwingung, und wie bestimmt man die Abklingkonstante aus einer Messkurve?
  antwort: |
    Reibung wandelt Schwingungsenergie in Wärme um, die Amplitude nimmt ab. Ist die Reibung proportional zur
    Geschwindigkeit, gilt $A(t) = A_0 e^{-\delta t}$: In gleichen Zeiten sinkt die Amplitude um den gleichen Faktor. Aus
    zwei Maxima im Zeitabstand $\Delta t$ folgt $\delta = \ln(A_1/A_2)/\Delta t$, und die Halbwertszeit ist $\ln 2/\delta$.
    Bei trockener Reibung nimmt die Amplitude dagegen linear ab.
  kernpunkte: ["Energie wird zu Wärme", "A = A₀·e^(−δt)", "δ aus zwei Maxima", "Gegenbeispiel trockene Reibung: linear"]
- id: p7-k-grenzfall
  frage: Welche Dämpfungsfälle unterscheidet man, und welcher ist beim Stoßdämpfer gewünscht?
  antwort: |
    Bei schwacher Dämpfung schwingt der Körper viele Male mit abnehmender Amplitude. Im aperiodischen Grenzfall kehrt er am
    schnellsten ohne Überschwingen in die Ruhelage zurück. Im Kriechfall kriecht er langsam zurück. Stoßdämpfer und
    Zeigermessgeräte sollen im aperiodischen Grenzfall arbeiten.
  kernpunkte: ["schwach: viele Schwingungen", "aperiodischer Grenzfall: schnellste Rückkehr ohne Überschwingen", "Kriechfall: langsam", "Stoßdämpfer"]
- id: p7-k-erzwungen
  frage: Was ist eine erzwungene Schwingung? Mit welcher Frequenz schwingt das System?
  antwort: |
    Ein schwingungsfähiges System wird von außen periodisch angetrieben. Nach dem Einschwingen schwingt es mit der
    Erregerfrequenz, nicht mit seiner Eigenfrequenz. Ist die Erregerfrequenz klein, folgt es gleichphasig. Bei der
    Eigenfrequenz wird die Amplitude groß. Bei hoher Erregerfrequenz schwingt es mit kleiner Amplitude gegenphasig.
  kernpunkte: ["periodischer Antrieb von außen", "schwingt mit der Erregerfrequenz", "drei Bereiche: gleichphasig, Resonanz, gegenphasig"]
- id: p7-k-resonanz
  frage: Was ist Resonanz, warum ist sie bei der Eigenfrequenz am stärksten, und was begrenzt sie? Nenne Beispiele.
  antwort: |
    Resonanz tritt auf, wenn ein System ungefähr mit seiner Eigenfrequenz angeregt wird. Dann wirkt die Erregerkraft immer in
    Bewegungsrichtung und führt in jeder Periode Energie zu. Die Amplitude wächst, bis die Dämpfung genauso viel Energie
    abführt. Sie wird also nie unendlich. Erwünscht: Schaukel, Resonanzkörper, Radioempfang. Gefährlich: Brücken im
    Gleichschritt, Maschinen bei bestimmten Drehzahlen, Wellblechpisten.
  kernpunkte: ["Anregung mit der Eigenfrequenz", "Kraft in Bewegungsrichtung, Energiezufuhr", "Dämpfung begrenzt", "erwünschte und gefährliche Beispiele"]
```
