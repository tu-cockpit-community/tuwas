---
nummer: 8
titel: Wellen, Überlagerung und Akustik
kurz: Was eine Welle transportiert, c = λ·f, die harmonische Welle y(x, t), Interferenz mit dem Gangunterschied, stehende Wellen auf Saiten und in Pfeifen, Schwebung, Reflexion, Brechung, Beugung, Doppler-Effekt, Mach-Kegel und Schall mit Tonhöhe, Klangfarbe und Schallpegel in Dezibel.
teil: wellen
stunden: 10
pruefungsgewicht: 3
voraussetzungen: [schwingungen, kinematik, groessen-einheiten-messen]
lernziele:
  - erklären, dass eine mechanische Welle Energie, aber keinen Stoff transportiert, und Transversal- von Longitudinalwellen an Beispielen unterscheiden
  - mit der Grundgleichung c = λ·f Wellenlänge, Frequenz oder Ausbreitungsgeschwindigkeit berechnen, auch beim Wechsel des Mediums
  - die Wellenfunktion y(x, t) einer harmonischen Welle deuten und aus Momentaufnahmen, Zeitverläufen und Funktionsgleichungen Amplitude, Wellenlänge, Periodendauer, Richtung und Phasendifferenz ablesen
  - mit dem Gangunterschied vorhersagen, ob zwei kohärente Wellen an einem Ort konstruktiv oder destruktiv interferieren
  - stehende Wellen von laufenden Wellen unterscheiden und die Eigenfrequenzen von Saiten, offenen und gedackten Pfeifen berechnen
  - die Schwebung erklären, die Schwebungsfrequenz berechnen und mit ihr ein Instrument stimmen
  - Reflexion, Brechung und Beugung mit dem Huygensschen Prinzip begründen und mit Echo- und Brechungsgesetz rechnen
  - den Doppler-Effekt für bewegte Quelle und bewegten Beobachter berechnen und den Mach-Kegel beim Überschallflug erklären
  - Schall als Druckwelle beschreiben und Tonhöhe, Klangfarbe, Hörbereich, Ultraschall und Tonintervalle erklären und berechnen
  - Schallintensität und Schallpegel in Dezibel berechnen und begründen, warum die Dezibelskala logarithmisch ist
---

Wirf einen Stein in einen Teich. Ringe laufen nach außen, aber ein Blatt auf dem Wasser schaukelt nur
auf und ab und bleibt an seinem Platz. Etwas wandert also über den Teich, und trotzdem fließt kein Wasser
mit. Dieses „Etwas“ ist eine **Welle**. Sie bringt **Energie** von einem Ort zum anderen, aber keinen
Stoff. Genau diese Idee trägt das ganze Kapitel.

Mit ihr verstehst du Seilwellen, Wasserwellen, Erdbeben und vor allem den **Schall**. Später, in den
Kapiteln über Optik, erklärt dieselbe Mathematik auch das Licht. Die Welle ist eines der wichtigsten
Modelle der Physik.

**Was kommt in der Prüfung?** Die Verordnung zur Studienberechtigungsprüfung nennt die Stoffpunkte
„harmonische Welle; Überlagerung von Wellen; Akustik“. In der schriftlichen Prüfung kommen
typischerweise diese Aufgaben vor:

- Mit $c = \lambda\cdot f$ eine Wellenlänge oder Frequenz berechnen.
- Die Grundfrequenz und die Obertöne einer Saite oder einer Pfeife berechnen.
- Entscheiden, ob zwei Lautsprecher an einem Ort laut oder leise klingen.
- Die Schwebungsfrequenz zweier Töne angeben.
- Mit dem Doppler-Effekt die Frequenz eines vorbeifahrenden Martinshorns berechnen.
- Schallpegel in Dezibel berechnen, auch für mehrere Quellen oder andere Abstände.

In der mündlichen Prüfung hörst du oft Fragen wie diese:

- „Was ist der Unterschied zwischen einer Schwingung und einer Welle?“
- „Wie entsteht auf einer Gitarrensaite ein Ton?“
- „Warum klingt das Martinshorn tiefer, nachdem der Wagen vorbeigefahren ist?“

**Die drei Hürden dieses Kapitels.** Erfahrungsgemäß stolpern fast alle an denselben drei Stellen.
Wir nehmen uns für jede viel Zeit.

1. **Eine Welle transportiert Energie, keinen Stoff.** Das Bauchgefühl sagt, dass der Schall „Luft zum
   Ohr bläst“. Das stimmt nicht. Jedes Luftteilchen zittert nur ein winziges Stück hin und her.
2. **Stehende und laufende Wellen sind verschieden.** Eine stehende Welle sieht aus wie eine Welle,
   wandert aber nicht und transportiert keine Energie.
3. **Dezibel sind logarithmisch.** Zwei gleich laute Maschinen mit je $80\,\text{dB}$ ergeben zusammen
   nicht $160\,\text{dB}$, sondern $83\,\text{dB}$.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Schwingungen:** Amplitude, Periodendauer $T$, Frequenz $f = 1/T$, Kreisfrequenz $\omega = 2\pi f$ und
  Phase aus dem [Kapitel Schwingungen](/lernen/physik1/schwingungen). Eine Welle ist im Grunde eine
  Schwingung, die sich im Raum ausbreitet.
- **Gleichförmige Bewegung:** Weg gleich Geschwindigkeit mal Zeit, $s = v\cdot t$, aus dem
  [Kapitel Kinematik](/lernen/physik1/kinematik/geschwindigkeit).
- **Einheiten und Zehnerpotenzen:** Vorsilben wie kHz und MHz umrechnen, aus dem
  [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen).
- **Sinusfunktion und Bogenmaß** aus dem Mathematikkurs, Kapitel Trigonometrie:
  [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass) und
  [Die allgemeine Sinusfunktion](/lernen/mathe3/trigonometrie/die-allgemeine-sinusfunktion).
- **Den Zehnerlogarithmus** $\lg$ aus dem Mathematikkurs, Kapitel Zahlen, Lektion
  [Logarithmen](/lernen/mathe3/zahlen/logarithmen).
  Ihn brauchst du erst für den Schallpegel am Ende des Kapitels.
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Wenn du bei einer Frage unsicher bist, folge dem
Link in der Lösung und wiederhole den Abschnitt. Das kostet zehn Minuten und spart dir später viel Mühe.

```aufgabe
id: p8-e-periode
art: check
titel: Periodendauer aus der Frequenz
niveau: 1
angabe: |
  Ein Federpendel schwingt mit der Frequenz $f = 5{,}0\,\text{Hz}$. Wie groß ist seine Periodendauer $T$ in Sekunden?
teile:
  - typ: zahl
    loesung: "1/5"
    einheit: "s"
    anzeige: '0{,}2'
    fehler:
      - wert: "5"
        meldung: Das ist die Frequenz selbst. Die Frequenz zählt Schwingungen **pro Sekunde**, die Periodendauer ist die Dauer **einer** Schwingung. Die beiden sind Kehrwerte voneinander.
hinweise:
  - 'Die Frequenz gibt an, wie viele Schwingungen in einer Sekunde stattfinden. Es gilt $T = 1/f$.'
loesung: |
  Bei $5$ Schwingungen pro Sekunde dauert eine Schwingung den fünften Teil einer Sekunde. Darum gilt $T = 1/f$.
  ---
  $T = \dfrac{1}{5{,}0\,\text{Hz}} = \dfrac{1}{5{,}0\,\text{s}^{-1}} = 0{,}20\,\text{s}$. Wiederholen kannst du das in der Lektion [Periodische Bewegungen: Amplitude, Periode und Frequenz](/lernen/physik1/schwingungen/periodische-bewegungen-amplitude-periode-und-frequenz) im Kapitel Schwingungen.
```

```aufgabe
id: p8-e-kreisfrequenz
art: check
titel: Kreisfrequenz
niveau: 1
angabe: |
  Eine Schwingung hat die Frequenz $f = 50\,\text{Hz}$. Wie groß ist ihre Kreisfrequenz $\omega$ in $\text{s}^{-1}$? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "2*pi*50"
    einheit: "1/s"
    anzeige: '314{,}2'
    fehler:
      - wert: "50/(2*pi)"
        meldung: Du hast durch $2\pi$ geteilt. Die Kreisfrequenz ist größer als die Frequenz, denn eine volle Schwingung entspricht dem Winkel $2\pi$. Es gilt $\omega = 2\pi f$.
      - wert: "pi*50"
        meldung: Der Faktor $2$ fehlt. Eine volle Schwingung entspricht dem Vollwinkel $2\pi$, nicht $\pi$.
hinweise:
  - 'Eine volle Schwingung entspricht im Bogenmaß dem Winkel $2\pi$. Daher $\omega = 2\pi f$.'
loesung: |
  Die Kreisfrequenz zählt, wie viel Winkel (im Bogenmaß) pro Sekunde durchlaufen wird. Eine Schwingung ist $2\pi$, also gilt $\omega = 2\pi f$.
  ---
  $\omega = 2\pi\cdot 50\,\text{s}^{-1} = 314{,}2\,\text{s}^{-1}$. Wiederholen: [Die harmonische Schwingung: lineares Kraftgesetz und Sinusfunktion](/lernen/physik1/schwingungen/die-harmonische-schwingung-lineares-kraftgesetz-und-sinusfunktion) im Kapitel Schwingungen.
```

```aufgabe
id: p8-e-weg
art: check
titel: Weg bei konstanter Geschwindigkeit
niveau: 1
angabe: |
  Schall breitet sich in Luft mit $340\,\text{m/s}$ aus. Wie weit kommt er in $2{,}5\,\text{s}$? Antwort in Metern.
teile:
  - typ: zahl
    loesung: "340*2.5"
    einheit: "m"
    anzeige: '850'
    fehler:
      - wert: "340/2.5"
        meldung: Du hast geteilt. Bei konstanter Geschwindigkeit wächst der Weg mit der Zeit, also gilt $s = v\cdot t$. Prüfe die Einheit, $\text{m/s}$ geteilt durch $\text{s}$ ergibt keine Länge.
hinweise:
  - 'Bei konstanter Geschwindigkeit gilt $s = v\cdot t$.'
loesung: |
  Die Ausbreitungsgeschwindigkeit ist konstant, also gilt die Formel der gleichförmigen Bewegung $s = v\cdot t$.
  ---
  $s = 340\,\text{m/s}\cdot 2{,}5\,\text{s} = 850\,\text{m}$. Die Sekunden kürzen sich. Wiederholen: [Kapitel Kinematik](/lernen/physik1/kinematik/geschwindigkeit).
```

```aufgabe
id: p8-e-bogenmass
art: check
titel: Grad ins Bogenmaß
niveau: 1
angabe: |
  Rechne den Winkel $180^\circ$ ins Bogenmaß um. Gib das Ergebnis als Dezimalzahl auf zwei Nachkommastellen an.
teile:
  - typ: zahl
    loesung: "pi"
    einheit: "rad"
    anzeige: '3{,}14'
    fehler:
      - wert: "2*pi"
        meldung: $2\pi$ ist der volle Kreis, also $360^\circ$. Ein halber Kreis, $180^\circ$, ist $\pi$.
hinweise:
  - 'Der volle Kreis $360^\circ$ entspricht $2\pi$ im Bogenmaß.'
loesung: |
  Der volle Kreis hat $360^\circ$ oder $2\pi$. Ein halber Kreis ist halb so viel.
  ---
  $180^\circ = \pi \approx 3{,}14$. Diese Umrechnung brauchst du für die Phasendifferenz zweier Wellen. Wiederholen: Mathematik, [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
```

```aufgabe
id: p8-e-lg
art: check
titel: Zehnerlogarithmus
niveau: 1
angabe: |
  Berechne $\lg\left(10^{7}\right)$, also den Logarithmus zur Basis $10$ von zehn Millionen.
teile:
  - typ: zahl
    loesung: "lg(10^7)"
    anzeige: '7'
    fehler:
      - wert: "70"
        meldung: Du hast schon mit $10$ multipliziert. Der Logarithmus selbst fragt nur nach der **Hochzahl**. $\lg(10^7)$ ist die Zahl, mit der man $10$ potenzieren muss, um $10^7$ zu erhalten.
hinweise:
  - Der Zehnerlogarithmus fragt, mit welcher Hochzahl man $10$ potenzieren muss.
loesung: |
  $\lg b$ ist die Hochzahl $x$, für die $10^x = b$ gilt.
  ---
  Man muss $10$ mit der Hochzahl $7$ potenzieren, um $10^7$ zu erhalten. Also ist $\lg(10^7) = 7$. Diese Rechnung steckt später im Schallpegel. Wiederholen: Mathematik, Kapitel Zahlen, Lektion [Logarithmen](/lernen/mathe3/zahlen/logarithmen).
```

```aufgabe
id: p8-e-zehnerpotenz
art: check
titel: Mit Zehnerpotenzen teilen
niveau: 1
angabe: |
  Berechne $\dfrac{3{,}0\cdot 10^{8}}{1{,}5\cdot 10^{6}}$.
teile:
  - typ: zahl
    loesung: "3.0e8/1.5e6"
    anzeige: '200'
    fehler:
      - wert: "2e14"
        meldung: |
          Beim Teilen werden die Hochzahlen **subtrahiert**, nicht addiert. $10^8 : 10^6 = 10^{8-6} = 10^2$.
hinweise:
  - Teile die Zahlen vor den Zehnerpotenzen und subtrahiere die Hochzahlen.
loesung: |
  Vorfaktoren teilen: $3{,}0 : 1{,}5 = 2{,}0$. Zehnerpotenzen teilen: $10^8 : 10^6 = 10^{2}$.
  ---
  Zusammen $2{,}0\cdot 10^{2} = 200$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

## Was ist eine Welle? Energie wandert, Stoff bleibt

```aufgabe
id: p8-1-check
art: check
titel: "Vorwissen: Energie einer Schwingung"
niveau: 1
angabe: |
  Die Energie eines Federpendels ist $E = \tfrac12 D A^2$. Dabei ist $D$ die Federkonstante und $A$ die Amplitude, also die größte Auslenkung. Auf das Wievielfache steigt die Energie, wenn man die Amplitude verdoppelt?
teile:
  - typ: zahl
    loesung: "2^2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: Die Amplitude steht in der Formel **im Quadrat**. Verdoppelt man $A$, wird $A^2$ viermal so groß, also auch die Energie.
hinweise:
  - 'Setze $2A$ statt $A$ in $E = \tfrac12 D A^2$ ein.'
loesung: |
  Mit doppelter Amplitude gilt $E' = \tfrac12 D(2A)^2 = \tfrac12 D\cdot 4A^2 = 4\cdot\tfrac12 D A^2$.
  ---
  Die Energie steigt auf das Vierfache. Dieselbe Regel gilt gleich für Wellen. Wiederholen: [Energie in der Schwingung](/lernen/physik1/schwingungen/energie-in-der-schwingung).
```

Bevor wir rechnen, klären wir, was eine Welle überhaupt ist. Dafür beginnen wir mit einem Bild, das
du aus dem Fußballstadion kennst.

### Die Stadionwelle: Etwas läuft, aber niemand geht mit

Bei einer **La-Ola-Welle** steht jede Person kurz auf und setzt sich wieder hin. Sie tut das ein
wenig später als ihr linker Nachbar. Dadurch läuft ein „Buckel“ aus stehenden Menschen um das ganze
Stadion. Keine einzige Person verlässt dabei ihren Platz. Was wandert, ist nur der **Zustand**
„gerade aufgestanden“.

Genau so funktioniert eine mechanische Welle. Stell dir eine lange Reihe kleiner Kugeln vor, die durch
Federn verbunden sind. Lenkst du die erste Kugel aus, zieht sie über die Feder an der zweiten. Diese zieht
an der dritten und so weiter. Jede Kugel schwingt um ihre eigene Ruhelage, aber jede etwas später als ihre
Vorgängerin. Der Schwingungszustand wandert die Reihe entlang.

:::definition[Mechanische Welle]
Eine **mechanische Welle** ist eine Schwingung, die sich in einem **Medium** ausbreitet. Ein Medium ist
ein Stoff, dessen Teilchen miteinander gekoppelt sind, zum Beispiel Luft, Wasser, ein Seil oder Stahl.
Jedes Teilchen schwingt nur um seine Ruhelage. Von Ort zu Ort wandern **Energie** und der
**Schwingungszustand**, aber **kein Stoff**.

**Beispiel:** Schall in Luft. Die Luft vor deinem Mund wird zusammengedrückt und gibt den Druck an die
nächste Luftschicht weiter. Beim Ohr kommt nach kurzer Zeit die Druckschwankung an, nicht die Luft aus
deinem Mund.

**Kein Beispiel:** Wind ist **keine** Welle. Beim Wind strömt die Luft selbst von einem Ort zum anderen.
Das ist Stofftransport.
:::

Damit eine mechanische Welle entstehen kann, braucht das Medium zwei Eigenschaften. Die Teilchen müssen
eine **Masse** haben, damit sie träge sind und über ihre Ruhelage hinausschwingen. Und sie müssen
**gekoppelt** sein, damit eine Auslenkung den Nachbarn mitzieht. Im Vakuum fehlt beides. Deshalb gibt es
im leeren Weltraum keinen Schall. Licht und Radiowellen sind dagegen **elektromagnetische Wellen**. Bei
ihnen schwingen elektrische und magnetische Felder, und sie brauchen kein Medium (siehe
[Kapitel Magnetismus und Wechselstrom](/lernen/physik1/magnetismus-wechselstrom/hochspannung-drehstrom-und-elektromagnetische-wellen)).

:::beispiel[Wie schnell läuft eine Stadionwelle?]
In einem Stadion stehen die Sitze $0{,}50\,\text{m}$ nebeneinander. Die Welle erfasst pro Sekunde
$20$ Sitze. Das Stadion hat einen Umfang von $600\,\text{m}$. Wie schnell läuft die Welle, und wie lange
braucht sie für eine Runde?

**Schritt 1, Modell:** Die Welle rückt pro Sekunde um $20$ Sitzbreiten vor. Ihre Geschwindigkeit ist
also Weg pro Zeit.

**Schritt 2, Geschwindigkeit:**
$c = \dfrac{20\cdot 0{,}50\,\text{m}}{1\,\text{s}} = 10\,\text{m/s}$.

**Schritt 3, Zeit für eine Runde:** Bei konstanter Geschwindigkeit gilt $t = s/c$:
$t = \dfrac{600\,\text{m}}{10\,\text{m/s}} = 60\,\text{s}$. Die Einheit m kürzt sich, es bleiben Sekunden.

**Antwort:** Die Welle läuft mit $10\,\text{m/s}$ und braucht eine Minute pro Runde. Jede einzelne
Person hat sich in dieser Minute aber nur etwa einen halben Meter auf und ab bewegt.
:::

:::achtung[Fehler: „Die Welle nimmt das Wasser mit“]
Wasserwellen laufen mit $1{,}5\,\text{m/s}$ auf das Ufer zu. Ein Korken schwimmt $90\,\text{m}$ vor dem
Ufer. Ein Schüler rechnet: „Der Korken wird von der Welle mitgenommen und ist nach
$t = 90\,\text{m} / 1{,}5\,\text{m/s} = 60\,\text{s}$ am Ufer.“

Das ist falsch. Die Welle transportiert keinen Stoff, also auch keinen Korken. Der Korken tanzt auf und
ab und bewegt sich dabei auf einer kleinen Kreisbahn. Nach einer Minute ist er fast noch an derselben
Stelle. An das Ufer treibt ihn höchstens der Wind oder eine Strömung, nicht die Welle selbst.
:::

### Transversalwellen und Longitudinalwellen

Wellen unterscheiden sich darin, in welche Richtung die Teilchen schwingen. Man vergleicht die
Schwingungsrichtung mit der **Ausbreitungsrichtung**, also der Richtung, in die die Welle läuft.

:::definition[Transversalwelle und Longitudinalwelle]
Bei einer **Transversalwelle** (Querwelle, von lateinisch *transversus*, quer) schwingen die Teilchen
**senkrecht** zur Ausbreitungsrichtung. Beispiel: Du schüttelst das Ende eines langen Seils auf und ab.
Die Welle läuft waagrecht, jedes Seilstück bewegt sich senkrecht.

Bei einer **Longitudinalwelle** (Längswelle, von lateinisch *longitudo*, Länge) schwingen die Teilchen
**in** Ausbreitungsrichtung hin und her. Dabei entstehen abwechselnd **Verdichtungen** (Teilchen
gedrängt) und **Verdünnungen** (Teilchen weiter auseinander). Beispiel: Schall in Luft.

**Kein Beispiel für eine Longitudinalwelle:** die Welle auf einer Gitarrensaite. Die Saite schwingt
quer zu ihrer Länge, also ist das eine Transversalwelle.
:::

```plot
x: [0, 12]
y: [-2.4, 2.4]
hoehe: 260
achsen: { x: "Ort x", y: "Auslenkung" }
graphen:
  - { f: "1.2*sin(2*pi*x/6)", label: "Seil (transversal)", farbe: 0, von: 0, bis: 12 }
punkte:
  - { x: 1.5, y: 1.2, farbe: 1 }
  - { x: 4.5, y: -1.2, farbe: 1 }
vektoren:
  - { von: [7.2, -1.9], nach: [10.5, -1.9], label: "Ausbreitung", farbe: 2 }
  - { von: [1.5, 0], nach: [1.5, 1.1], label: "Schwingung", farbe: 1 }
beschriftung: "Transversalwelle auf einem Seil. Der grüne Pfeil zeigt die Ausbreitungsrichtung (nach rechts), der orange Pfeil die Schwingungsrichtung eines Seilstücks (auf und ab). Beide stehen senkrecht aufeinander. Die orange markierten Seilstücke bleiben an ihrem x-Wert und bewegen sich nur senkrecht."
```

Warum ist Schall in Luft immer longitudinal? Für eine Querwelle muss eine Luftschicht ihre Nachbarschicht
**seitlich** mitziehen. Dafür bräuchte das Medium einen Widerstand gegen Scherung, also gegen
seitliches Verschieben. Gase und Flüssigkeiten haben ihn nicht, sie fließen einfach seitlich weg. Sie
können nur Druck weitergeben. Deshalb laufen in Luft und Wasser nur Longitudinalwellen. Festkörper wie
Stahl oder Gestein widerstehen Scherung, darum gibt es in ihnen beide Wellenarten.

Wasserwellen an der Oberfläche sind eine Mischform. Die Wasserteilchen bewegen sich dort auf kleinen
Kreisbahnen, gleichzeitig auf und ab und vor und zurück.


:::beispiel[Erdbeben: Wie weit ist das Epizentrum entfernt?]
Bei einem Erdbeben laufen zwei Wellenarten durch das Gestein. Die **P-Welle** (primär) ist longitudinal
und läuft mit $6{,}0\,\text{km/s}$. Die **S-Welle** (sekundär) ist transversal und läuft mit
$3{,}5\,\text{km/s}$. Eine Messstation registriert die S-Welle $20\,\text{s}$ nach der P-Welle. Wie weit
ist das Erdbeben entfernt?

**Schritt 1, Modell:** Beide Wellen legen dieselbe Strecke $d$ zurück, aber verschieden schnell. Die
Laufzeit jeder Welle ist Strecke durch Geschwindigkeit, $t = d/c$.

**Schritt 2, Gleichung aufstellen:** Die Differenz der Laufzeiten ist $20\,\text{s}$:
$$\frac{d}{3{,}5\,\text{km/s}} - \frac{d}{6{,}0\,\text{km/s}} = 20\,\text{s}.$$

**Schritt 3, $d$ herausheben:** $d\cdot\left(\dfrac{1}{3{,}5} - \dfrac{1}{6{,}0}\right)\,\text{s/km} = 20\,\text{s}$.
Die Klammer ist $0{,}2857 - 0{,}1667 = 0{,}1190$.

**Schritt 4, durch die Klammer teilen:** $d = \dfrac{20\,\text{s}}{0{,}1190\,\text{s/km}} = 168\,\text{km}$.
Die Sekunden kürzen sich, es bleiben Kilometer.

**Antwort:** Das Epizentrum ist etwa $170\,\text{km}$ entfernt. Mit drei Stationen kann man so den Ort
des Bebens bestimmen. Dass S-Wellen den äußeren Erdkern nicht durchqueren, verriet übrigens, dass dieser
flüssig ist. Flüssigkeiten tragen keine Querwellen.
:::

### Polarisation: ein Kennzeichen der Querwelle

Bei einer Querwelle kann die Schwingungsrichtung verschieden liegen, zum Beispiel senkrecht oder
waagrecht, immer quer zur Ausbreitung. Diese Eigenschaft heißt **Polarisation**. Führst du ein
schwingendes Seil durch einen senkrechten Schlitz, kommen nur senkrechte Schwingungen durch.
Eine Längswelle hat keine solche Wahl, denn ihre Schwingung liegt immer in Ausbreitungsrichtung. Sie lässt
sich daher nicht polarisieren. Dass Licht polarisierbar ist (Sonnenbrillen, Bildschirme), beweist also,
dass Licht eine Querwelle ist. Mehr dazu im
[Kapitel Wellenoptik](/lernen/physik1/wellenoptik-atom-kernphysik/duenne-schichten-und-polarisation).

```aufgabe
id: p8-1-polarisation-check
art: check
titel: Welche Welle lässt sich polarisieren?
niveau: 1
angabe: |
  Eine Welle läuft durch einen schmalen, senkrechten Schlitz. Bei welcher Welle kann der Schlitz eine Schwingungsrichtung herausfiltern?
teile:
  - typ: auswahl
    optionen:
      - "bei einer Seilwelle, deren Seil kreuz und quer geschüttelt wird"
      - "bei einer Schallwelle in Luft"
      - "bei einer Verdichtungswelle in einer Schraubenfeder"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Schall in Luft ist eine Längswelle. Die Luft schwingt in Laufrichtung, es gibt keine Querrichtung, die der Schlitz auswählen könnte.
      - wert: 2
        meldung: Die Verdichtungswelle ist eine Längswelle. Ihre Schwingung liegt immer in Laufrichtung, der Schlitz kann nichts auswählen.
hinweise:
  - Nur bei einer Querwelle gibt es verschiedene Schwingungsrichtungen quer zur Laufrichtung.
loesung: |
  Polarisation gibt es nur bei Querwellen. Nur dort kann die Schwingung in verschiedene Richtungen quer zur Ausbreitung zeigen.
  ---
  Die Seilwelle ist eine Querwelle. Der senkrechte Schlitz lässt nur ihre senkrechten Schwingungen durch.
```

### Eine Welle transportiert Energie

Eine Welle bringt Energie an weit entfernte Orte. Ein Sturm über dem Atlantik erzeugt Wellen, die Tage
später an einer Küste mit ruhigem Wetter ankommen. Ein Tsunami trägt die Energie eines Seebebens über
tausende Kilometer. Wasser wandert dabei kaum mit, aber an der Küste setzt die Welle ihre Energie frei.

Wie bei der Schwingung gilt: **Die Energie einer Welle ist proportional zum Quadrat der Amplitude.**
Doppelte Amplitude bedeutet vierfache Energie. Breitet sich eine Welle von einem Punkt nach allen Seiten
aus, verteilt sich die Energie auf eine immer größere Fläche. Deshalb wird die Amplitude mit dem Abstand
kleiner, auch ganz ohne Reibung. Bei Kreiswellen auf Wasser verteilt sich die Energie auf den
Kreisumfang $2\pi r$, bei Schall im Raum auf die Kugeloberfläche $4\pi r^2$. Diesen Gedanken brauchst
du beim Schallpegel wieder.

:::achtung[Fehler: doppelte Amplitude, doppelte Energie]
Eine Wasserwelle mit $20\,\text{cm}$ Amplitude trägt pro Meter Wellenfront eine bestimmte Energie.
Eine Schülerin schreibt: „Eine Welle mit $60\,\text{cm}$ Amplitude trägt das Dreifache.“

Falsch. Die Energie wächst mit dem **Quadrat** der Amplitude. Dreifache Amplitude bedeutet
$3^2 = 9$-fache Energie. Deshalb richten hohe Sturmwellen so viel mehr Schaden an, als ihre Höhe
vermuten lässt.
:::

```reflexion
frage: Eine Welle transportiert keinen Stoff. Wie kann dann ein Tsunami ganze Häuser zerstören? Erkläre in zwei bis drei Sätzen.
antwort: |
  Die Welle transportiert Energie. Über dem tiefen Ozean ist die Amplitude klein, aber die Welle ist sehr lang und trägt
  deshalb sehr viel Energie. An der flachen Küste wird die Welle langsamer und türmt sich auf. Die Energie steckt dann in
  einer großen Wassermasse, die sich heftig bewegt und dabei Häuser zerstört. Das Wasser, das an Land schlägt, stammt aus
  der Küstennähe, nicht vom Ort des Seebebens.
```

### Aufgaben zu Wellenarten und Energietransport

```aufgabe
id: p8-transversal-longitudinal
titel: Transversal oder longitudinal?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Wellen sind **Longitudinalwellen**, schwingen also in Ausbreitungsrichtung? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Schall in Luft"
      - "Welle auf einer Gitarrensaite"
      - "Licht"
      - "Verdichtungswelle in einer langen, gestauchten Schraubenfeder"
      - "Schall in Wasser"
    richtig: [0, 3, 4]
    fehler:
      - wert: [0, 3]
        meldung: Auch Schall in Wasser ist longitudinal. Wasser widersteht keiner Scherung, es kann wie Luft nur Druck weitergeben. Querwellen gibt es darin nicht.
      - wert: [0, 2, 3, 4]
        meldung: Licht ist eine Querwelle. Das zeigt die Polarisation, die es nur bei Querwellen gibt.
      - wert: [0, 1, 3, 4]
        meldung: Die Gitarrensaite schwingt quer zu ihrer Länge, die Welle läuft aber entlang der Saite. Das ist eine Transversalwelle.
hinweise:
  - Frage bei jeder Welle, ob die Teilchen in Laufrichtung hin und her schwingen oder quer dazu. Gase und Flüssigkeiten können nur Druck weitergeben.
loesung: |
  **Ansatz:** Gase und Flüssigkeiten widerstehen keiner Scherung. In ihnen gibt es nur Längswellen, also Verdichtungen und Verdünnungen.
  ---
  Schall in Luft, Schall in Wasser und die Verdichtungswelle in der Feder sind longitudinal. Saitenwelle und Licht schwingen quer zur Ausbreitung, sie sind transversal.
```

```aufgabe
id: p8-1-korken
titel: Was macht der Korken?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Auf einem ruhigen See schwimmt ein Korken. Ein Boot fährt in großer Entfernung vorbei, und seine Wellen laufen unter dem Korken hindurch. Es weht kein Wind, und es gibt keine Strömung. Was macht der Korken?
teile:
  - typ: auswahl
    optionen:
      - "Er bewegt sich auf und ab (auf einer kleinen Kreisbahn) und bleibt im Wesentlichen an seinem Platz."
      - "Er wird mit der Geschwindigkeit der Welle zum Ufer getragen."
      - "Er bleibt völlig in Ruhe, weil eine Welle nur Energie und keinen Stoff transportiert."
      - "Er bewegt sich zum Boot hin, weil die Welle von dort kommt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die typische Fehlvorstellung. Eine Welle transportiert keinen Stoff. Die Wasserteilchen und mit ihnen der Korken schwingen nur um ihren Platz.
      - wert: 2
        meldung: Kein Stofftransport heißt nicht „keine Bewegung“. Die Teilchen des Mediums schwingen, sonst gäbe es keine Welle. Der Korken schwingt mit.
      - wert: 3
        meldung: Auch zum Boot hin wandert der Korken nicht. Er schwingt um seinen Platz, egal aus welcher Richtung die Welle kommt.
hinweise:
  - Unterscheide zwischen der Bewegung der Welle und der Bewegung der Wasserteilchen.
loesung: |
  **Ansatz:** Eine Welle transportiert Energie, keinen Stoff. Die Teilchen des Mediums schwingen nur um ihre Ruhelage.
  ---
  Bei Wasserwellen laufen die Oberflächenteilchen auf kleinen Kreisbahnen. Der Korken macht diese Bewegung mit: auf und ab und ein wenig vor und zurück. Er bleibt im Wesentlichen an seinem Platz.
```

```aufgabe
id: p8-1-stadion
titel: Eine Runde La-Ola
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  In einem anderen Stadion stehen die Sitze $0{,}60\,\text{m}$ nebeneinander. Die La-Ola-Welle erfasst $15$ Sitze pro Sekunde. Der Umfang der Tribüne beträgt $720\,\text{m}$. Wie viele Sekunden braucht die Welle für eine Runde?
teile:
  - typ: zahl
    loesung: "720/(0.6*15)"
    einheit: "s"
    anzeige: '80'
    fehler:
      - wert: "720/15"
        meldung: Du hast durch die Zahl der Sitze pro Sekunde geteilt. Das ist aber keine Geschwindigkeit in m/s. Rechne zuerst, wie viele **Meter** die Welle pro Sekunde vorankommt.
      - wert: "720/0.6"
        meldung: Das ist die Zahl der Sitze auf der Tribüne, keine Zeit. Teile sie noch durch die Sitze pro Sekunde, oder rechne zuerst die Geschwindigkeit in m/s aus.
hinweise:
  - Berechne zuerst die Geschwindigkeit der Welle in m/s.
loesung: |
  **Geschwindigkeit:** Pro Sekunde rückt die Welle um $15$ Sitze zu je $0{,}60\,\text{m}$ vor, also $c = 15\cdot 0{,}60\,\text{m}/1\,\text{s} = 9{,}0\,\text{m/s}$.
  ---
  **Zeit:** $t = \dfrac{720\,\text{m}}{9{,}0\,\text{m/s}} = 80\,\text{s}$. Die Meter kürzen sich.
  ---
  **Deutung:** Die Welle braucht $80\,\text{s}$ für eine Runde, obwohl kein Zuschauer seinen Platz verlässt.
```

```aufgabe
id: p8-1-erdbeben
titel: Abstand eines Erdbebens
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  In einem anderen Gestein läuft die P-Welle eines Erdbebens mit $8{,}0\,\text{km/s}$, die S-Welle mit $4{,}5\,\text{km/s}$. Eine Station misst zwischen der Ankunft der beiden Wellen $35\,\text{s}$. Wie weit ist das Erdbeben entfernt? Antwort in km.
teile:
  - typ: zahl
    loesung: "35/(1/4.5 - 1/8.0)"
    einheit: "km"
    anzeige: '360'
    fehler:
      - wert: "35*8.0"
        meldung: Du hast nur die P-Welle betrachtet. Die $35\,\text{s}$ sind aber die **Differenz** der beiden Laufzeiten, nicht die Laufzeit der P-Welle.
      - wert: "35*(8.0-4.5)"
        meldung: Man darf hier nicht einfach die Geschwindigkeiten subtrahieren. Gegeben ist ein Unterschied der **Zeiten**. Stelle für jede Welle die Laufzeit $t = d/c$ auf und bilde die Differenz.
      - wert: "35*4.5"
        meldung: Du hast nur die S-Welle betrachtet. Die $35\,\text{s}$ sind die **Differenz** der Laufzeiten beider Wellen.
hinweise:
  - Beide Wellen legen dieselbe Strecke $d$ zurück. Die Laufzeit ist jeweils $t = d/c$.
  - 'Stelle die Gleichung $\dfrac{d}{4{,}5} - \dfrac{d}{8{,}0} = 35$ auf ($d$ in km, Zeit in s) und hebe $d$ heraus.'
gefuehrt:
  - text: Wie lange braucht die S-Welle für die Strecke $d$? Überlege dir den Term.
    erklaerung: 'Laufzeit gleich Strecke durch Geschwindigkeit: $t_S = d/(4{,}5\,\text{km/s})$. Ebenso $t_P = d/(8{,}0\,\text{km/s})$.'
  - text: Berechne den Wert der Klammer $\dfrac{1}{4{,}5} - \dfrac{1}{8{,}0}$ (Einheit s/km).
    teil: { typ: zahl, loesung: "1/4.5 - 1/8.0" }
    erklaerung: $0{,}2222 - 0{,}1250 = 0{,}0972$. So viele Sekunden mehr braucht die S-Welle pro Kilometer.
  - text: Teile die gemessene Zeitdifferenz durch diesen Wert. Wie groß ist $d$ in km?
    teil: { typ: zahl, loesung: "35/(1/4.5 - 1/8.0)" }
    erklaerung: |
      $d = 35\,\text{s} : 0{,}0972\,\text{s/km} = 360\,\text{km}$.
  - text: Prüfe dein Ergebnis mit den beiden Laufzeiten.
    erklaerung: $t_S = 360/4{,}5 = 80\,\text{s}$ und $t_P = 360/8{,}0 = 45\,\text{s}$. Die Differenz ist $35\,\text{s}$, wie gemessen.
loesung: |
  **Modell:** Beide Wellen laufen die Strecke $d$ mit konstanter Geschwindigkeit. Laufzeit $t = d/c$. Gemessen wird die Differenz der Laufzeiten.
  ---
  **Gleichung:** $\dfrac{d}{4{,}5\,\text{km/s}} - \dfrac{d}{8{,}0\,\text{km/s}} = 35\,\text{s}$. Herausheben: $d\cdot 0{,}0972\,\text{s/km} = 35\,\text{s}$.
  ---
  **Auflösen:** $d = \dfrac{35\,\text{s}}{0{,}0972\,\text{s/km}} = 360\,\text{km}$.
  ---
  **Probe:** S-Welle $80\,\text{s}$, P-Welle $45\,\text{s}$, Differenz $35\,\text{s}$. Das passt.
```

```aufgabe
id: p8-1-amplitude-energie
titel: Was passiert mit der Energie?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Die Amplitude einer Seilwelle sinkt durch Reibung auf ein Drittel. Die Frequenz bleibt gleich. Auf welchen Bruchteil sinkt die Energie, die die Welle pro Sekunde transportiert? Gib das Ergebnis als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "(1/3)^2"
    anzeige: '0{,}111'
    fehler:
      - wert: "1/3"
        meldung: Die Energie ist proportional zum **Quadrat** der Amplitude, nicht zur Amplitude selbst. Ein Drittel der Amplitude bedeutet ein Neuntel der Energie.
      - wert: "1/6"
        meldung: Quadrieren heißt nicht verdoppeln. $\left(\tfrac13\right)^2 = \tfrac13\cdot\tfrac13 = \tfrac19$.
hinweise:
  - Wie hängt die Energie einer Welle von der Amplitude ab?
  - 'Es gilt $E \propto A^2$. Setze $A/3$ ein.'
loesung: |
  **Ansatz:** Bei gleicher Frequenz ist die transportierte Energie proportional zum Quadrat der Amplitude, $E \propto A^2$.
  ---
  **Proportionalitätsschluss:** $A$ wird mit $\tfrac13$ multipliziert, also wird $A^2$ mit $\left(\tfrac13\right)^2 = \tfrac19$ multipliziert.
  ---
  **Antwort:** Die Energie sinkt auf $\tfrac19 \approx 0{,}111$, also auf etwa $11\,\%$.
```

```aufgabe
id: p8-1-weltraum
titel: Explosion im Weltraum
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  In vielen Filmen hört man ein lautes Krachen, wenn im Weltraum ein Raumschiff explodiert. Ein Astronaut schwebt $1\,\text{km}$ entfernt. Was hört er wirklich, und warum?
teile:
  - typ: auswahl
    optionen:
      - "Nichts, denn im Vakuum gibt es kein Medium, das die Schwingung weitergibt."
      - "Den Knall, aber leiser, weil die Energie sich verteilt."
      - "Den Knall, aber erst nach etwa 3 Sekunden, weil Schall 340 m/s schnell ist."
      - "Den Knall sofort, weil Schall im Vakuum ungebremst läuft."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Leiser wäre der Knall nur, wenn er überhaupt ankäme. Schall braucht aber ein Medium aus gekoppelten Teilchen. Im Vakuum gibt es keine.
      - wert: 2
        meldung: $340\,\text{m/s}$ gilt für Luft. Im Vakuum gibt es keine Luft, und damit gibt es dort überhaupt keinen Schall.
      - wert: 3
        meldung: Schall ist keine Strahlung, die „ungebremst“ fliegt. Er ist eine Schwingung von Teilchen, die einander anstoßen. Ohne Teilchen gibt es keinen Schall.
hinweise:
  - Was braucht eine mechanische Welle, um sich auszubreiten?
  - Denke an die Kette aus Kugeln und Federn. Was passiert, wenn es die Kugeln nicht gibt?
loesung: |
  **Ansatz:** Schall ist eine mechanische Welle. Sie braucht ein Medium aus Teilchen mit Masse, die miteinander gekoppelt sind.
  ---
  Im Vakuum gibt es keine solchen Teilchen. Die Druckschwankung der Explosion kann nicht weitergegeben werden.
  ---
  **Antwort:** Der Astronaut hört nichts. Er sieht nur den Lichtblitz, denn Licht ist eine elektromagnetische Welle und braucht kein Medium. Treffen ihn später Trümmer, ist das Stofftransport, keine Welle.
```

```aufgabe
id: p8-1-kreiswelle
titel: Kreiswelle auf dem Teich
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Stein erzeugt auf einem Teich eine Kreiswelle. In $2{,}0\,\text{m}$ Abstand vom Einschlag misst man eine Amplitude von $4{,}0\,\text{cm}$. Reibung vernachlässigen wir. Wie groß ist die Amplitude in $8{,}0\,\text{m}$ Abstand? Antwort in cm.
teile:
  - typ: zahl
    loesung: "4.0*sqrt(2.0/8.0)"
    einheit: "cm"
    anzeige: '2{,}0'
    fehler:
      - wert: "4.0*2.0/8.0"
        meldung: Du hast die Amplitude umgekehrt proportional zum Abstand gesetzt. Umgekehrt proportional zum Abstand ist aber die **Energie** pro Meter Wellenfront, denn sie verteilt sich auf den Kreisumfang. Die Amplitude geht mit der **Wurzel** der Energie.
      - wert: "4.0*(2.0/8.0)^2"
        meldung: Das Quadrat des Abstands gilt für Wellen im Raum (Kugeloberfläche). Eine Wasserwelle breitet sich in der Fläche aus, die Energie verteilt sich auf einen Kreisumfang.
hinweise:
  - Die Energie verteilt sich auf den Kreisumfang $2\pi r$. Wie ändert sich die Energie pro Meter Wellenfront, wenn $r$ viermal so groß wird?
  - 'Die Energie ist proportional zu $A^2$. Also gilt $A^2 \propto 1/r$, und $A \propto 1/\sqrt r$.'
loesung: |
  **Modell:** Die Energie der Welle verteilt sich auf den Kreisumfang $2\pi r$. Pro Meter Wellenfront ist sie daher proportional zu $1/r$.
  ---
  **Amplitude:** Die Energie ist proportional zu $A^2$. Aus $A^2 \propto 1/r$ folgt $A \propto 1/\sqrt r$.
  ---
  **Rechnung:** $A_2 = A_1\sqrt{\dfrac{r_1}{r_2}} = 4{,}0\,\text{cm}\cdot\sqrt{\dfrac{2{,}0\,\text{m}}{8{,}0\,\text{m}}} = 4{,}0\,\text{cm}\cdot 0{,}5 = 2{,}0\,\text{cm}$. Die Meter kürzen sich unter der Wurzel.
  ---
  **Plausibilität:** Viermal so weit weg, halbe Amplitude, also ein Viertel der Energie pro Meter. Der vierfache Kreisumfang nimmt genau die gleiche Gesamtenergie auf.
```

```aufgabe
id: p8-1-polarisation
titel: Warum lässt sich Schall nicht polarisieren?
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Begründe, warum man Licht polarisieren kann, Schall in Luft aber nicht. Erkläre dabei, was Polarisation bedeutet und was man daraus über die Art der Welle schließen kann.
teile:
  - typ: text
    muster: |
      Polarisation heißt: Bei einer Welle ist nur eine bestimmte Schwingungsrichtung quer zur Ausbreitung vorhanden.
      Das gibt es nur bei Querwellen, denn nur dort kann die Schwingung in verschiedene Richtungen quer zur Laufrichtung
      zeigen. Ein Polarisationsfilter lässt nur eine dieser Richtungen durch. Schall in Luft ist eine Längswelle. Die
      Luftteilchen schwingen immer in Ausbreitungsrichtung, es gibt also keine Richtung, die man herausfiltern könnte.
      Weil sich Licht polarisieren lässt, muss Licht eine Querwelle sein.
hinweise:
  - In welche Richtungen kann bei einer Querwelle die Schwingung zeigen, in welche bei einer Längswelle?
  - Ein Polarisationsfilter wirkt wie ein Schlitz für ein schwingendes Seil.
loesung: |
  **Begriff:** Polarisation bedeutet, dass die Schwingung einer Welle nur in einer bestimmten Richtung quer zur Ausbreitung erfolgt.
  ---
  **Querwelle:** Bei einer Querwelle sind viele Schwingungsrichtungen quer zur Laufrichtung möglich. Ein Filter, zum Beispiel ein Schlitz beim Seil, lässt nur eine davon durch.
  ---
  **Längswelle:** Bei Schall in Luft liegt die Schwingung immer in Laufrichtung. Es gibt nichts auszuwählen, also lässt sich Schall nicht polarisieren.
  ---
  **Schluss:** Da Licht polarisierbar ist, ist Licht eine Querwelle.
```

## Wellenlänge, Frequenz und Ausbreitungsgeschwindigkeit

```aufgabe
id: p8-2-check
art: check
titel: "Vorwissen: Geschwindigkeit als Weg pro Zeit"
niveau: 1
angabe: |
  Ein Wellenberg legt in $0{,}40\,\text{s}$ eine Strecke von $1{,}2\,\text{m}$ zurück. Wie groß ist seine Geschwindigkeit in m/s?
teile:
  - typ: zahl
    loesung: "1.2/0.40"
    einheit: "m/s"
    anzeige: '3'
    fehler:
      - wert: "1.2*0.40"
        meldung: Du hast multipliziert. Geschwindigkeit ist Weg **geteilt** durch Zeit. Die Einheit zeigt es, m/s heißt „Meter pro Sekunde“.
hinweise:
  - 'Geschwindigkeit ist Weg pro Zeit, $v = s/t$.'
loesung: |
  Bei gleichförmiger Bewegung gilt $v = s/t$.
  ---
  $v = \dfrac{1{,}2\,\text{m}}{0{,}40\,\text{s}} = 3{,}0\,\text{m/s}$. Wiederholen: [Kapitel Kinematik](/lernen/physik1/kinematik/geschwindigkeit).
```

Jetzt beschreiben wir eine Welle mit Zahlen. Wir betrachten dazu eine Welle, deren Quelle gleichmäßig
sinusförmig schwingt, zum Beispiel ein Lautsprecher mit einem reinen Ton. So eine Welle heißt
**harmonische Welle**. Jeder Punkt des Mediums schwingt dann ebenfalls sinusförmig, mit derselben
Frequenz wie die Quelle, nur zeitlich versetzt. Ohne Reibung bleibt auf einem Seil auch die Amplitude
überall gleich.

### Die drei Kenngrößen

:::definition[Wellenlänge, Frequenz und Ausbreitungsgeschwindigkeit]
- Die **Wellenlänge** $\lambda$ (griechisch „lambda“) ist der kürzeste Abstand zweier Punkte, die
  genau im Gleichtakt schwingen. Am einfachsten misst man sie von Wellenberg zu Wellenberg. Einheit:
  Meter.
- Die **Periodendauer** $T$ ist die Dauer einer Schwingung eines Punktes. Die **Frequenz** $f = 1/T$
  zählt die Schwingungen pro Sekunde, Einheit Hertz, $1\,\text{Hz} = 1\,\text{s}^{-1}$.
- Die **Ausbreitungsgeschwindigkeit** $c$ gibt an, wie schnell ein Wellenberg vorankommt. Einheit: m/s.

**Beispiel:** Bei Meereswellen mit $30\,\text{m}$ Abstand von Kamm zu Kamm ist $\lambda = 30\,\text{m}$.

**Kein Beispiel für die Wellenlänge:** der Abstand von einem Wellenberg zum nächsten Wellental. Das ist
nur eine **halbe** Wellenlänge, denn Berg und Tal schwingen genau entgegengesetzt.
:::

Wie hängen die drei Größen zusammen? Beobachte einen Punkt des Mediums während einer Periodendauer $T$.
In dieser Zeit macht er genau eine volle Schwingung, vom Berg über das Tal wieder zum Berg. Währenddessen
ist der nächste Wellenberg genau bis zu ihm vorgerückt. Der Berg hat also in der Zeit $T$ den Weg
$\lambda$ zurückgelegt. Geschwindigkeit ist Weg durch Zeit:

:::satz[Grundgleichung der Wellenlehre]
$$c = \frac{\lambda}{T} = \lambda\cdot f.$$
Dabei ist $c$ die Ausbreitungsgeschwindigkeit, $\lambda$ die Wellenlänge, $T$ die Periodendauer und
$f$ die Frequenz.
:::

Die Einheiten passen: $\text{m}\cdot\text{Hz} = \text{m}\cdot\text{s}^{-1} = \text{m/s}$. Ein
Zahlenbeispiel: Eine Seilwelle mit $\lambda = 0{,}80\,\text{m}$ und $f = 5{,}0\,\text{Hz}$ läuft mit
$c = 0{,}80\,\text{m}\cdot 5{,}0\,\text{Hz} = 4{,}0\,\text{m/s}$.

### Die Quelle bestimmt die Frequenz, das Medium die Geschwindigkeit

Die **Frequenz** legt die **Quelle** fest. Wie
oft pro Sekunde eine Lautsprechermembran schwingt, entscheidet der Verstärker, nicht die Luft. Die
**Geschwindigkeit** legt das **Medium** fest. Schall läuft in Luft mit etwa $340\,\text{m/s}$, egal ob er
hoch oder tief ist. Die **Wellenlänge** ergibt sich dann aus beiden: $\lambda = c/f$.

Wechselt eine Welle das Medium, schwingt die Grenzfläche im Takt der ankommenden Welle. Die Frequenz
bleibt also gleich. Die Geschwindigkeit ändert sich, und mit ihr die Wellenlänge.

:::beispiel[Der Kammerton in Luft und in Wasser]
Eine Stimmgabel schwingt mit $440\,\text{Hz}$ (dem Kammerton a). Wie lang sind die Schallwellen in Luft
($c = 343\,\text{m/s}$) und in Wasser ($c = 1480\,\text{m/s}$)?

**Schritt 1, Ansatz:** Die Frequenz ist in beiden Medien dieselbe, denn sie kommt von der Stimmgabel. Aus
$c = \lambda f$ folgt durch Teilen durch $f$ die Formel $\lambda = c/f$.

**Schritt 2, Luft:** $\lambda_{\text{Luft}} = \dfrac{343\,\text{m/s}}{440\,\text{s}^{-1}} = 0{,}780\,\text{m}$.
Die Sekunden kürzen sich, es bleiben Meter.

**Schritt 3, Wasser:** $\lambda_{\text{Wasser}} = \dfrac{1480\,\text{m/s}}{440\,\text{s}^{-1}} = 3{,}36\,\text{m}$.

**Antwort:** Im Wasser ist die Welle über viermal so lang, weil der Schall dort über viermal so schnell
ist. Die Tonhöhe, also die Frequenz, ist gleich.
:::

:::achtung[Fehler: beim Mediumwechsel die Frequenz verändern]
Ein Ton mit $500\,\text{Hz}$ geht von Luft ($340\,\text{m/s}$) in Wasser ($1480\,\text{m/s}$) über. Ein
Schüler rechnet: „In Luft ist $\lambda = 0{,}68\,\text{m}$. Diese Wellenlänge bleibt, also ist im Wasser
$f = 1480/0{,}68\,\text{Hz} = 2176\,\text{Hz}$.“

Das ist falsch. Beim Übergang bleibt die **Frequenz** erhalten, denn die Grenzfläche schwingt im Takt
der ankommenden Welle. Richtig ist $f = 500\,\text{Hz}$ und
$\lambda_{\text{Wasser}} = 1480\,\text{m/s} : 500\,\text{Hz} = 2{,}96\,\text{m}$. Ein Taucher hört
den Ton daher in derselben Tonhöhe.
:::

### Wovon die Ausbreitungsgeschwindigkeit abhängt

Grundsätzlich gilt: Eine Welle ist umso schneller, je **stärker die Kopplung** zwischen den Teilchen ist
und je **kleiner ihre Trägheit**. Stärkere Kopplung bedeutet, dass ein Teilchen seinen Nachbarn kräftiger
mitzieht. Kleinere Trägheit bedeutet, dass der Nachbar schneller reagiert.

**Gespannte Saite oder Seil.** Die Kopplung ist hier die Spannkraft $F$, die Trägheit die Masse pro
Meter Länge, $\mu$ (griechisch „mü“), in kg/m. Es gilt
$$c = \sqrt{\frac{F}{\mu}}.$$
Dabei ist $c$ die Wellengeschwindigkeit auf der Saite, $F$ die Spannkraft in N und $\mu$ die
Massenbelegung in kg/m. Die Einheit stimmt: $\sqrt{\text{N}/(\text{kg/m})} = \sqrt{\text{kg}\cdot\text{m/s}^2\cdot\text{m}/\text{kg}} = \text{m/s}$.

:::beispiel[Wellengeschwindigkeit auf einer Saite]
Eine Stahlsaite hat eine Massenbelegung von $0{,}60\,\text{g}$ pro Meter und ist mit $60\,\text{N}$
gespannt. Wie schnell laufen Wellen auf ihr?

**Schritt 1, Einheit umrechnen:** Die Formel verlangt kg/m. Also
$\mu = 0{,}60\,\text{g/m} = 0{,}60\cdot 10^{-3}\,\text{kg/m} = 6{,}0\cdot 10^{-4}\,\text{kg/m}$.

**Schritt 2, einsetzen:**
$c = \sqrt{\dfrac{60\,\text{N}}{6{,}0\cdot 10^{-4}\,\text{kg/m}}} = \sqrt{1{,}0\cdot 10^{5}\,\text{m}^2/\text{s}^2} = 316\,\text{m/s}$.

**Antwort:** Die Wellen laufen mit rund $316\,\text{m/s}$ über die Saite. Das ist fast Schallgeschwindigkeit
in Luft, aber das ist Zufall. Die Saitenwelle und die Schallwelle sind zwei verschiedene Wellen.
:::

:::achtung[Fehler: Gramm pro Meter direkt einsetzen]
Für dieselbe Saite rechnet eine Schülerin $c = \sqrt{60/0{,}60}\,\text{m/s} = 10\,\text{m/s}$. Sie hat
$0{,}60\,\text{g/m}$ direkt als $0{,}60$ eingesetzt. Die Formel liefert aber nur mit kg/m eine
Geschwindigkeit in m/s. Mit $6{,}0\cdot 10^{-4}\,\text{kg/m}$ kommt $316\,\text{m/s}$ heraus. Der Fehler
ist ein Faktor $\sqrt{1000} \approx 32$. Ein Ergebnis von $10\,\text{m/s}$ für eine Stahlsaite sollte dich
stutzig machen.
:::

**Schall in Gasen.** Hier hängt $c$ von der Temperatur ab. Wärmere Luftmoleküle sind schneller und geben
eine Druckschwankung schneller weiter (siehe
[Kapitel Temperatur, Wärme, Gase](/lernen/physik1/temperatur-waerme-gase/kinetische-gastheorie)). Für Luft
gilt näherungsweise
$$c \approx \left(331{,}3 + 0{,}6\cdot\frac{\vartheta}{{}^\circ\text{C}}\right)\,\text{m/s}.$$
Dabei ist $\vartheta$ (griechisch „theta“) die Temperatur in Grad Celsius. Bei $20\,^\circ\text{C}$ ergibt
das $331{,}3 + 12 = 343{,}3\,\text{m/s}$. Der Luftdruck spielt bei gleicher Temperatur keine Rolle. In
Rechnungen nehmen wir meist $c = 340\,\text{m/s}$, wenn nichts anderes angegeben ist.

Typische Werte für Schall: Luft etwa $340\,\text{m/s}$, Wasser etwa $1480\,\text{m/s}$, Körpergewebe
etwa $1540\,\text{m/s}$, Stahl etwa $5100\,\text{m/s}$. Festkörper sind viel stärker gekoppelt als Gase,
deshalb ist Schall in ihnen schneller, obwohl sie dichter sind.

:::intuition
Verwechsle die Ausbreitungsgeschwindigkeit $c$ nicht mit der Geschwindigkeit der Teilchen. Selbst in
einem sehr lauten $1000$-Hz-Ton (etwa so laut wie ein Presslufthammer aus der Nähe) schwingt ein
Luftteilchen nur um etwa einen Mikrometer hin und her. Seine
größte Geschwindigkeit ist dann $2\pi\cdot 1000\,\text{s}^{-1}\cdot 10^{-6}\,\text{m} \approx 6\,\text{mm/s}$.
Die Welle läuft trotzdem mit $340\,\text{m/s}$. Was so schnell ist, ist das Weitergeben, nicht das Teilchen.
:::

```reflexion
frage: Eine Lautsprechermembran schwingt mit 200 Hz. Der Schall läuft durch Luft und trifft dann auf eine Wasseroberfläche. Warum ändert sich dabei die Wellenlänge, aber nicht die Frequenz? Erkläre in zwei bis drei Sätzen.
antwort: |
  Die Frequenz legt die Quelle fest. Die Wasseroberfläche wird von der ankommenden Schallwelle 200-mal pro Sekunde
  angestoßen und gibt diesen Takt an das Wasser weiter. Die Geschwindigkeit legt dagegen das Medium fest. Im Wasser ist
  Schall schneller, und bei gleicher Frequenz bedeutet das nach λ = c/f eine größere Wellenlänge.
```

### Aufgaben zu c = λ·f

```aufgabe
id: p8-c-lambda-f
titel: Wellenlänge eines Tons
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Der Ton c' hat die Frequenz $262\,\text{Hz}$. Wie groß ist seine Wellenlänge in Luft bei $20\,^\circ\text{C}$ ($c = 343\,\text{m/s}$)? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "343/262"
    einheit: "m"
    anzeige: '1{,}31'
    fehler:
      - wert: "262/343"
        meldung: Du hast den Kehrwert berechnet. Aus $c = \lambda f$ folgt $\lambda = c/f$. Prüfe mit der Einheit, $\text{Hz}/(\text{m/s})$ ist keine Länge.
      - wert: "343*262"
        meldung: Multipliziert man $c$ und $f$, erhält man keine Länge. Stelle $c = \lambda f$ durch Teilen durch $f$ nach $\lambda$ um.
hinweise:
  - 'Stelle $c = \lambda\cdot f$ nach $\lambda$ um.'
loesung: |
  **Ansatz:** Aus $c = \lambda f$ folgt durch Teilen durch $f$ die Formel $\lambda = c/f$.
  ---
  $\lambda = \dfrac{343\,\text{m/s}}{262\,\text{s}^{-1}} = 1{,}31\,\text{m}$. Die Wellen des mittleren c auf dem Klavier sind also gut einen Meter lang.
```

```aufgabe
id: p8-radio
titel: Wellenlänge eines UKW-Senders
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein UKW-Sender strahlt auf $92{,}0\,\text{MHz}$. Radiowellen breiten sich mit $c = 3{,}00\cdot 10^{8}\,\text{m/s}$ aus. Wie groß ist die Wellenlänge in Metern?
teile:
  - typ: zahl
    loesung: "3.00e8/92.0e6"
    einheit: "m"
    anzeige: '3{,}26'
    fehler:
      - wert: "3.00e8/92.0"
        meldung: Du hast die Vorsilbe „Mega“ vergessen. $92{,}0\,\text{MHz} = 92{,}0\cdot 10^{6}\,\text{Hz}$.
      - wert: "92.0e6/3.00e8"
        meldung: Das ist der Kehrwert. Es gilt $\lambda = c/f$, die Geschwindigkeit steht im Zähler.
hinweise:
  - 'Mega bedeutet $10^6$. Rechne die Frequenz zuerst in Hz um.'
loesung: |
  **Umrechnen:** $f = 92{,}0\,\text{MHz} = 9{,}20\cdot 10^{7}\,\text{Hz}$.
  ---
  **Rechnung:** $\lambda = \dfrac{c}{f} = \dfrac{3{,}00\cdot 10^{8}\,\text{m/s}}{9{,}20\cdot 10^{7}\,\text{s}^{-1}} = 3{,}26\,\text{m}$.
  ---
  **Deutung:** UKW-Antennen sind etwa einen Meter lang, also ein Viertel bis eine halbe Wellenlänge.
```

```aufgabe
id: p8-wasserwelle
titel: Wellen am See
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Am Ufer beobachtest du, dass die Wellenberge $2{,}5\,\text{m}$ auseinanderliegen. In $10\,\text{s}$ laufen genau $4$ volle Wellen an einem Pfahl vorbei, das Wasser am Pfahl schwingt in dieser Zeit also $4$-mal ganz auf und ab. Wie schnell breiten sich die Wellen aus?
teile:
  - typ: zahl
    loesung: "2.5*4/10"
    einheit: "m/s"
    anzeige: '1'
    fehler:
      - wert: "2.5*10/4"
        meldung: Du hast mit der Periodendauer $T = 2{,}5\,\text{s}$ multipliziert statt durch sie zu teilen. Es gilt $c = \lambda/T = \lambda\cdot f$.
      - wert: "2.5/4"
        meldung: Teile nicht durch die Anzahl der Berge. Bestimme zuerst die Frequenz, also Berge **pro Sekunde**.
hinweise:
  - Die Frequenz ist die Zahl der Wellenberge pro Sekunde.
loesung: |
  **Frequenz:** $f = \dfrac{4}{10\,\text{s}} = 0{,}40\,\text{Hz}$.
  ---
  **Geschwindigkeit:** $c = \lambda f = 2{,}5\,\text{m}\cdot 0{,}40\,\text{s}^{-1} = 1{,}0\,\text{m/s}$.
```

```aufgabe
id: p8-2-ultraschall-medium
titel: Ultraschall wechselt das Medium
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Ultraschallsender arbeitet mit $40\,\text{kHz}$. Seine Wellen laufen zuerst durch Luft ($340\,\text{m/s}$) und treten dann in Wasser ($1480\,\text{m/s}$) über. Berechne die Wellenlänge in beiden Medien in Millimetern.
teile:
  - typ: zahl
    label: Wellenlänge in Luft
    loesung: "340/40e3*1000"
    einheit: "mm"
    anzeige: '8{,}5'
    fehler:
      - wert: "340/40e3"
        meldung: Das ist die Wellenlänge in Metern. Gefragt sind Millimeter, also noch mit $1000$ multiplizieren.
  - typ: zahl
    label: Wellenlänge in Wasser
    loesung: "1480/40e3*1000"
    einheit: "mm"
    anzeige: '37'
    fehler:
      - wert: "8.5"
        meldung: Die Wellenlänge bleibt beim Mediumwechsel nicht gleich. Gleich bleibt die **Frequenz**. Im schnelleren Wasser wird die Welle länger.
      - wert: "1480/(340/40e3)/1000"
        meldung: Du hast die Wellenlänge festgehalten und eine neue Frequenz ausgerechnet. Beim Übergang bleibt aber die Frequenz gleich, die Wellenlänge ändert sich.
hinweise:
  - Welche Größe bleibt beim Übergang in ein anderes Medium gleich?
  - 'Die Frequenz bleibt $40\,000\,\text{Hz}$. Berechne in jedem Medium $\lambda = c/f$ und rechne in mm um.'
gefuehrt:
  - text: Welche Größe bleibt beim Übergang von Luft in Wasser gleich?
    teil:
      typ: auswahl
      optionen: ["die Frequenz", "die Wellenlänge", "die Ausbreitungsgeschwindigkeit"]
      richtig: [0]
    erklaerung: Die Frequenz kommt von der Quelle. Die Grenzfläche schwingt im Takt der ankommenden Welle und gibt ihn weiter.
  - text: Berechne die Wellenlänge in Luft in Millimetern.
    teil: { typ: zahl, loesung: "340/40e3*1000" }
    erklaerung: |
      $\lambda = 340\,\text{m/s} : 40\,000\,\text{Hz} = 0{,}0085\,\text{m} = 8{,}5\,\text{mm}$.
  - text: Berechne die Wellenlänge in Wasser in Millimetern.
    teil: { typ: zahl, loesung: "1480/40e3*1000" }
    erklaerung: |
      $\lambda = 1480\,\text{m/s} : 40\,000\,\text{Hz} = 0{,}037\,\text{m} = 37\,\text{mm}$.
  - text: Um welchen Faktor ist die Welle im Wasser länger, und woher kommt dieser Faktor?
    erklaerung: |
      $37 : 8{,}5 = 4{,}35$. Das ist genau das Verhältnis der Geschwindigkeiten $1480 : 340$, weil die Frequenz gleich bleibt.
loesung: |
  **Ansatz:** Die Frequenz bleibt beim Mediumwechsel gleich, $f = 40\,\text{kHz} = 4{,}0\cdot 10^{4}\,\text{Hz}$. In jedem Medium gilt $\lambda = c/f$.
  ---
  **Luft:** $\lambda = \dfrac{340\,\text{m/s}}{4{,}0\cdot 10^{4}\,\text{s}^{-1}} = 8{,}5\cdot 10^{-3}\,\text{m} = 8{,}5\,\text{mm}$.
  ---
  **Wasser:** $\lambda = \dfrac{1480\,\text{m/s}}{4{,}0\cdot 10^{4}\,\text{s}^{-1}} = 3{,}7\cdot 10^{-2}\,\text{m} = 37\,\text{mm}$.
  ---
  **Probe:** Das Verhältnis $37 : 8{,}5 \approx 4{,}35$ ist das Verhältnis der Geschwindigkeiten. So muss es bei gleicher Frequenz sein.
```

```aufgabe
id: p8-schallgeschw-temperatur
titel: Schall an einem kalten Wintertag
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Berechne mit der Näherung $c \approx (331{,}3 + 0{,}6\cdot\vartheta/{}^\circ\text{C})\,\text{m/s}$ die Schallgeschwindigkeit bei $-10\,^\circ\text{C}$. Wie lang ist dann die Welle eines Tons mit $1000\,\text{Hz}$? Runde die Wellenlänge auf drei Nachkommastellen.
teile:
  - typ: zahl
    label: Schallgeschwindigkeit
    loesung: "331.3+0.6*(-10)"
    einheit: "m/s"
    anzeige: '325{,}3'
    fehler:
      - wert: "331.3+0.6*10"
        meldung: Das Vorzeichen der Temperatur fehlt. Bei $-10\,^\circ\text{C}$ ist der Zusatzterm $0{,}6\cdot(-10) = -6$. Kalte Luft leitet Schall langsamer.
  - typ: zahl
    label: Wellenlänge
    loesung: "(331.3+0.6*(-10))/1000"
    einheit: "m"
    anzeige: '0{,}325'
    fehler:
      - wert: "1000/(331.3+0.6*(-10))"
        meldung: Das ist der Kehrwert. Die Wellenlänge ist $\lambda = c/f$.
hinweise:
  - Setze $\vartheta = -10$ mit Vorzeichen ein.
  - 'Danach gilt $\lambda = c/f$.'
loesung: |
  **Ansatz:** Erst die Geschwindigkeit aus der Temperatur, dann die Wellenlänge aus $\lambda = c/f$.
  ---
  **Geschwindigkeit:** $c = (331{,}3 + 0{,}6\cdot(-10))\,\text{m/s} = (331{,}3 - 6)\,\text{m/s} = 325{,}3\,\text{m/s}$.
  ---
  **Wellenlänge:** $\lambda = \dfrac{325{,}3\,\text{m/s}}{1000\,\text{s}^{-1}} = 0{,}325\,\text{m}$.
  ---
  **Vergleich:** Bei $20\,^\circ\text{C}$ wären es $0{,}343\,\text{m}$. Die Kälte verkürzt die Welle um etwa $5\,\%$, die Tonhöhe bleibt gleich.
```

```aufgabe
id: p8-2-spannkraft
titel: Spannkraft und Wellengeschwindigkeit
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Eine Saite wird von $40\,\text{N}$ auf $90\,\text{N}$ nachgespannt. Ihre Masse pro Meter bleibt gleich. Um welchen Faktor ändert sich die Wellengeschwindigkeit auf der Saite?
teile:
  - typ: zahl
    loesung: "sqrt(90/40)"
    anzeige: '1{,}5'
    fehler:
      - wert: "90/40"
        meldung: Die Geschwindigkeit wächst nicht proportional zur Kraft, sondern mit der **Wurzel** der Kraft, $c = \sqrt{F/\mu}$.
      - wert: "(90/40)^2"
        meldung: Du hast quadriert statt die Wurzel zu ziehen. Es gilt $c = \sqrt{F/\mu}$.
hinweise:
  - 'Wie hängt $c$ in $c = \sqrt{F/\mu}$ von $F$ ab?'
  - Bilde das Verhältnis der Geschwindigkeiten. Die Massenbelegung kürzt sich heraus.
loesung: |
  **Ansatz:** $c = \sqrt{F/\mu}$. Bei gleichem $\mu$ ist $c$ proportional zu $\sqrt F$.
  ---
  **Verhältnis:** $\dfrac{c_2}{c_1} = \sqrt{\dfrac{F_2}{F_1}} = \sqrt{\dfrac{90\,\text{N}}{40\,\text{N}}} = \sqrt{2{,}25} = 1{,}5$. Die Newton kürzen sich.
  ---
  **Antwort:** Die Wellen laufen $1{,}5$-mal so schnell. Für die doppelte Geschwindigkeit bräuchte man die vierfache Kraft.
```

```aufgabe
id: p8-2-schiene
titel: Zwei Knalle von einer Schiene
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Bahnarbeiter schlägt mit einem Hammer auf eine lange Stahlschiene. Eine Kollegin hält ihr Ohr an die Schiene und hört zwei Knalle im Abstand von $0{,}50\,\text{s}$: einen durch den Stahl ($5100\,\text{m/s}$) und einen durch die Luft ($340\,\text{m/s}$). Wie weit ist der Bahnarbeiter entfernt? Runde auf ganze Meter.
teile:
  - typ: zahl
    loesung: "0.50/(1/340 - 1/5100)"
    einheit: "m"
    anzeige: '182'
    fehler:
      - wert: "0.50*340"
        meldung: Die $0{,}50\,\text{s}$ sind nicht die Laufzeit durch die Luft, sondern der **Unterschied** der Laufzeiten. Der Schall durch den Stahl braucht auch etwas Zeit.
      - wert: "0.50*(5100-340)"
        meldung: Die Geschwindigkeiten darf man nicht einfach subtrahieren. Stelle für jeden Weg die Laufzeit $t = d/c$ auf und bilde die Differenz der Zeiten.
hinweise:
  - Beide Knalle legen dieselbe Strecke $d$ zurück. Welcher kommt zuerst an?
  - 'Stelle $\dfrac{d}{340} - \dfrac{d}{5100} = 0{,}50$ auf ($d$ in m, Zeit in s) und hebe $d$ heraus.'
loesung: |
  **Modell:** Beide Knalle legen die Strecke $d$ zurück, der eine durch Stahl, der andere durch Luft. Der Stahlknall kommt zuerst, weil Stahl schneller leitet. Gemessen wird der Unterschied der Laufzeiten.
  ---
  **Gleichung:** $\dfrac{d}{340\,\text{m/s}} - \dfrac{d}{5100\,\text{m/s}} = 0{,}50\,\text{s}$, also $d\cdot(0{,}002941 - 0{,}000196)\,\text{s/m} = 0{,}50\,\text{s}$.
  ---
  **Auflösen:** $d = \dfrac{0{,}50\,\text{s}}{0{,}002745\,\text{s/m}} = 182\,\text{m}$.
  ---
  **Probe:** Luft: $182/340 = 0{,}535\,\text{s}$. Stahl: $182/5100 = 0{,}036\,\text{s}$. Differenz $0{,}50\,\text{s}$. Das passt.
```

## Die harmonische Welle als Funktion von Ort und Zeit

```aufgabe
id: p8-3-check
art: check
titel: "Vorwissen: Periode einer Sinusfunktion"
niveau: 1
angabe: |
  Eine Schwingung wird durch $y(t) = 3\,\text{cm}\cdot\sin\left(2\pi\cdot\dfrac{t}{0{,}5\,\text{s}}\right)$ beschrieben. Nach welcher Zeit wiederholt sie sich zum ersten Mal, wie groß ist also die Periodendauer in s?
teile:
  - typ: zahl
    loesung: "0.5"
    einheit: "s"
    anzeige: '0{,}5'
    fehler:
      - wert: "2*pi*0.5"
        meldung: Der Sinus wiederholt sich, wenn sein Argument um $2\pi$ wächst. Das passiert, wenn $t/0{,}5\,\text{s}$ um $1$ wächst, also nach $0{,}5\,\text{s}$.
      - wert: "2"
        meldung: Das ist die Frequenz, also die Zahl der Schwingungen pro Sekunde. Gefragt ist die Dauer einer Schwingung.
hinweise:
  - 'Vergleiche mit $y = A\sin(2\pi t/T)$.'
loesung: |
  Die Form $y = A\sin(2\pi t/T)$ wiederholt sich, sobald $t$ um $T$ gewachsen ist, denn dann wächst das Argument um $2\pi$.
  ---
  In der gegebenen Formel steht $0{,}5\,\text{s}$ an der Stelle von $T$. Also ist $T = 0{,}5\,\text{s}$. Wiederholen: [Die harmonische Schwingung: lineares Kraftgesetz und Sinusfunktion](/lernen/physik1/schwingungen/die-harmonische-schwingung-lineares-kraftgesetz-und-sinusfunktion) und Mathematik, [Die allgemeine Sinusfunktion](/lernen/mathe3/trigonometrie/die-allgemeine-sinusfunktion).
```

Eine Schwingung hängt nur von der Zeit ab. Eine Welle hängt von **zwei** Größen ab: vom Ort $x$, an
dem du hinschaust, und von der Zeit $t$, zu der du hinschaust. Diese Stelle ist für fast alle
ungewohnt. Wir bauen die Formel deshalb Schritt für Schritt aus dem auf, was du schon kennst.

### Zwei Blickwinkel auf dieselbe Welle

Es gibt zwei Arten, eine Welle zu zeichnen.

- **Momentaufnahme:** Du hältst die Zeit fest und fotografierst das ganze Seil. Auf der waagrechten Achse
  steht der Ort $x$. Der Abstand zweier Berge ist die **Wellenlänge** $\lambda$.
- **Zeitverlauf:** Du hältst den Ort fest und beobachtest einen einzelnen Punkt. Auf der waagrechten
  Achse steht die Zeit $t$. Der Abstand zweier Berge ist die **Periodendauer** $T$.

Beide Bilder sehen wie Sinuskurven aus. Sie zeigen aber Verschiedenes. Schau darum immer zuerst auf die
Beschriftung der waagrechten Achse.

```plot
x: [0, 4]
y: [-1.5, 1.5]
hoehe: 240
achsen: { x: "x in m", y: "y in cm" }
graphen:
  - { f: "sin(2*pi*x/1.6)", label: "t = 0", farbe: 0 }
strecken:
  - { von: [0.4, 1.2], nach: [2.0, 1.2], farbe: 1 }
punkte:
  - { x: 0.4, y: 1, farbe: 1 }
  - { x: 2.0, y: 1, label: "λ = 1,6 m", farbe: 1 }
beschriftung: "Momentaufnahme einer Seilwelle zur Zeit t = 0. Waagrecht steht der Ort x. Zwei benachbarte Wellenberge liegen bei x = 0,4 m und x = 2,0 m, die Wellenlänge ist also 1,6 m. Die Amplitude ist 1 cm."
```

### Die Formel aus einer einfachen Überlegung

Die Quelle bei $x = 0$ schwingt harmonisch, $y_Q(t) = A\sin(\omega t)$. Dabei ist $A$ die Amplitude und
$\omega = 2\pi f$ die Kreisfrequenz. Die Welle läuft mit der Geschwindigkeit $c$ nach rechts. Ein Punkt im
Abstand $x$ macht genau dieselbe Bewegung wie die Quelle, aber **später**. Die Verspätung ist die Zeit,
die die Welle bis zu ihm braucht, also $x/c$. Der Punkt bei $x$ macht zur Zeit $t$ das, was die Quelle
zur Zeit $t - x/c$ gemacht hat:
$$y(x, t) = A\sin\bigl(\omega\,(t - x/c)\bigr) = A\sin(\omega t - k x).$$
Im letzten Schritt haben wir ausmultipliziert und $\omega/c$ abgekürzt. Es ist
$\omega/c = 2\pi f/(\lambda f) = 2\pi/\lambda$. Diese Größe heißt **Wellenzahl** $k = 2\pi/\lambda$.

:::satz[Wellenfunktion der harmonischen Welle]
Eine harmonische Welle, die in $+x$-Richtung läuft, wird beschrieben durch
$$y(x, t) = A\sin\left(2\pi\left(\frac{t}{T} - \frac{x}{\lambda}\right)\right) = A\sin(\omega t - k x).$$
Dabei ist $y$ die Auslenkung am Ort $x$ zur Zeit $t$, $A$ die Amplitude, $T$ die Periodendauer,
$\lambda$ die Wellenlänge, $\omega = 2\pi/T$ die Kreisfrequenz und $k = 2\pi/\lambda$ die Wellenzahl.
Läuft die Welle in $-x$-Richtung, steht $+kx$ statt $-kx$. Die Geschwindigkeit ist $c = \omega/k = \lambda/T$.
:::

Warum bedeutet das Minuszeichen „nach rechts“? Verfolge einen Wellenberg. Für ihn hat das Argument
$\omega t - kx$ immer denselben Wert. Wenn $t$ wächst, muss also auch $x$ wachsen, damit die Differenz
gleich bleibt. Der Berg wandert zu größeren $x$. Bei $\omega t + kx$ müsste $x$ dagegen kleiner werden.

:::beispiel[Eine Wellenfunktion lesen und auswerten]
Eine Seilwelle wird beschrieben durch
$y(x, t) = 0{,}05\,\text{m}\cdot\sin\left(2\pi\left(\dfrac{t}{0{,}40\,\text{s}} - \dfrac{x}{2{,}0\,\text{m}}\right)\right)$.

**Schritt 1, ablesen durch Vergleich mit der allgemeinen Form:** $A = 0{,}05\,\text{m}$,
$T = 0{,}40\,\text{s}$, $\lambda = 2{,}0\,\text{m}$. Das Minuszeichen zeigt die Laufrichtung $+x$.

**Schritt 2, Geschwindigkeit:** $c = \dfrac{\lambda}{T} = \dfrac{2{,}0\,\text{m}}{0{,}40\,\text{s}} = 5{,}0\,\text{m/s}$.

**Schritt 3, einen Wert berechnen:** Wo ist das Seilstück bei $x = 1{,}0\,\text{m}$ zur Zeit
$t = 0{,}30\,\text{s}$? Das Argument ist
$2\pi\left(\dfrac{0{,}30}{0{,}40} - \dfrac{1{,}0}{2{,}0}\right) = 2\pi\cdot(0{,}75 - 0{,}50) = \dfrac{\pi}{2}$.
Die Einheiten kürzen sich in jedem Bruch. Also ist $y = 0{,}05\,\text{m}\cdot\sin\dfrac{\pi}{2} = 0{,}05\,\text{m}$.

**Antwort:** Die Welle läuft mit $5{,}0\,\text{m/s}$ nach rechts. Das Seilstück bei $1{,}0\,\text{m}$ ist
zu diesem Zeitpunkt gerade ganz oben auf einem Wellenberg.
:::

:::achtung[Fehler: Wellenlänge und Periodendauer verwechselt]
Ein Schüler sieht ein Diagramm, auf dessen waagrechter Achse „$x$ in m“ steht. Die Wellenberge liegen
$0{,}8\,\text{m}$ auseinander. Er schreibt: „$T = 0{,}8\,\text{s}$, also $f = 1{,}25\,\text{Hz}$.“

Das ist falsch. In einer **Momentaufnahme** ist der Abstand der Berge die **Wellenlänge**,
$\lambda = 0{,}8\,\text{m}$. Die Periodendauer kann man aus einer Momentaufnahme allein gar nicht ablesen.
Dafür braucht man einen Zeitverlauf oder zusätzlich die Geschwindigkeit, $T = \lambda/c$.
:::

### Phasendifferenz zwischen zwei Orten

Zwei Punkte im Abstand $\Delta x$ machen dieselbe Bewegung, aber zeitversetzt. Diesen Versatz misst man
als Winkel im Bogenmaß, als **Phasendifferenz** $\Delta\varphi$ (griechisch „Delta phi“). Aus der
Wellenfunktion liest man ab: Der Abstand $\Delta x$ ändert das Argument um $k\,\Delta x$. Also gilt
$$\Delta\varphi = 2\pi\,\frac{\Delta x}{\lambda}.$$
Dabei ist $\Delta x$ der Abstand der beiden Punkte in Laufrichtung und $\lambda$ die Wellenlänge.

- Abstand $\lambda$: $\Delta\varphi = 2\pi$. Die Punkte schwingen **gleichphasig**, also im Gleichtakt.
- Abstand $\lambda/2$: $\Delta\varphi = \pi$. Die Punkte schwingen **gegenphasig**. Ist der eine oben, ist
  der andere unten.
- Abstand $\lambda/4$: $\Delta\varphi = \pi/2$. Ist der eine oben, geht der andere gerade durch die Ruhelage.

:::beispiel[Zwei Momentaufnahmen: Richtung und Geschwindigkeit bestimmen]
Eine Seilwelle wird zweimal fotografiert. Bei $t = 0$ liegt ein Wellenberg bei $x = 0{,}5\,\text{m}$, bei
$t = 0{,}10\,\text{s}$ liegt er bei $x = 0{,}8\,\text{m}$. Der Abstand zweier Berge beträgt in beiden Bildern
$2{,}0\,\text{m}$. Wir nehmen an, dass die Welle zwischen den Aufnahmen weniger als eine Wellenlänge
gewandert ist.

**Schritt 1, Richtung:** Der Berg ist zu größeren $x$ gewandert. Die Welle läuft also in $+x$-Richtung.

**Schritt 2, Geschwindigkeit:** Der Berg hat $\Delta x = 0{,}8\,\text{m} - 0{,}5\,\text{m} = 0{,}3\,\text{m}$
in $\Delta t = 0{,}10\,\text{s}$ zurückgelegt. Also $c = \dfrac{0{,}3\,\text{m}}{0{,}10\,\text{s}} = 3{,}0\,\text{m/s}$.

**Schritt 3, Frequenz:** Aus $c = \lambda f$ folgt
$f = \dfrac{c}{\lambda} = \dfrac{3{,}0\,\text{m/s}}{2{,}0\,\text{m}} = 1{,}5\,\text{Hz}$.

**Antwort:** Die Welle läuft mit $3{,}0\,\text{m/s}$ nach rechts und hat die Frequenz $1{,}5\,\text{Hz}$. Die
Annahme „weniger als eine Wellenlänge“ ist nötig, denn ein Berg, der um $2{,}3\,\text{m}$ gewandert ist,
sähe auf den Fotos genauso aus.
:::

```plot
x: [0, 4]
y: [-1.5, 1.5]
hoehe: 240
achsen: { x: "x in m", y: "y" }
graphen:
  - { f: "cos(2*pi*(x-0.5)/2)", label: "t = 0", farbe: 0 }
  - { f: "cos(2*pi*(x-0.8)/2)", label: "t = 0,10 s", farbe: 1, gestrichelt: true }
vektoren:
  - { von: [0.5, 1.25], nach: [0.8, 1.25], farbe: 2 }
beschriftung: "Zwei Momentaufnahmen derselben Welle. Durchgezogen bei t = 0 mit einem Berg bei x = 0,5 m, gestrichelt bei t = 0,10 s mit dem Berg bei x = 0,8 m. Der grüne Pfeil zeigt die Verschiebung um 0,3 m nach rechts."
```

:::achtung[Fehler: die Laufrichtung aus dem Vorzeichen falsch abgelesen]
Gegeben ist $y = 0{,}02\,\text{m}\cdot\sin(6{,}0\,\text{s}^{-1}\cdot t + 3{,}0\,\text{m}^{-1}\cdot x)$. Eine
Schülerin schreibt: „Plus heißt vorwärts, die Welle läuft in $+x$-Richtung.“

Falsch. Ein Wellenberg hat einen festen Wert des Arguments $6{,}0\,t + 3{,}0\,x$. Wächst $t$, muss $x$
**kleiner** werden, damit die Summe gleich bleibt. Die Welle läuft also in $-x$-Richtung, mit
$c = \omega/k = 6{,}0\,\text{s}^{-1} : 3{,}0\,\text{m}^{-1} = 2{,}0\,\text{m/s}$.
:::

### Die Welle in Bewegung sehen

```aufgabe
id: p8-3-vorhersage
art: check
titel: "Vorhersage: Wie weit wandert ein Berg?"
niveau: 1
angabe: |
  Bevor du die Animation startest: Wie weit ist ein bestimmter Wellenberg nach **einer** Periodendauer $T$ gewandert?
teile:
  - typ: auswahl
    optionen:
      - "um eine halbe Wellenlänge"
      - "um genau eine Wellenlänge"
      - "um zwei Wellenlängen"
      - "gar nicht, der Berg schwingt nur auf und ab"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In einer halben Periode wandert er um eine halbe Wellenlänge. Nach einer ganzen Periode ist er doppelt so weit.
      - wert: 3
        meldung: Die **Teilchen** schwingen nur auf und ab. Der Wellenberg ist aber ein Zustand, und der wandert mit der Geschwindigkeit $c$.
      - wert: 2
        meldung: Zu weit. Aus $c = \lambda/T$ folgt, dass der Berg in der Zeit $T$ genau den Weg $\lambda$ zurücklegt.
hinweise:
  - 'Denk an $c = \lambda/T$.'
loesung: |
  Aus $c = \lambda/T$ folgt: In der Zeit $T$ legt ein Wellenberg den Weg $c\cdot T = \lambda$ zurück.
  ---
  Prüfe es im Widget. Halte die Animation an, merke dir einen Berg und lass sie eine Periode weiterlaufen.
```

```widget
name: wellen
titel: Eine laufende Welle
props:
  modus: raum
  A1: 1
  A2: 0
  lambda1: 2
  lambda2: 2
  f1: 0.5
  f2: 0.5
  xmax: 8
```

**Beobachte:** Mit $\lambda_1 = 2\,\text{m}$ und $f_1 = 0{,}5\,\text{Hz}$ ist $T = 2\,\text{s}$. Starte die
Animation und setze sie mit „t = 0“ zurück. Nach zwei Sekunden steht der Berg genau dort, wo vorher der
nächste Berg war. **Erkläre:** Er ist um eine Wellenlänge gewandert, wie $c = \lambda/T$ verlangt. Ändere
danach die Frequenz bei gleicher Wellenlänge. Die Anzeige $c_1$ ändert sich mit. Im Widget wählst du
$\lambda$ und $f$ frei, das entspricht einem anderen Medium.

### Ausblick: Wie schnell bewegt sich ein Seilstück?

Die Geschwindigkeit eines einzelnen Seilstücks ist die Ableitung der Auslenkung nach der Zeit (siehe
Mathematik, [Anwendungen der Ableitung in der Physik](/lernen/mathe3/differentialrechnung/anwendungen-in-physik-und-biologie-bewegung-und-wachstum)).
Leitet man $y = A\sin(\omega t - kx)$ bei festem $x$ nach $t$ ab, erhält man mit der Kettenregel
$v_y = A\omega\cos(\omega t - kx)$. Die größte Geschwindigkeit eines Seilstücks ist also $A\omega$. Sie
hat mit der Ausbreitungsgeschwindigkeit $c$ nichts zu tun.

```reflexion
frage: Die Wellenfunktion hängt von x und t ab. Was beschreibt sie, wenn du x festhältst, und was, wenn du t festhältst? Erkläre in zwei Sätzen.
antwort: |
  Hält man x fest, beschreibt y die Schwingung eines einzelnen Punktes über die Zeit, also einen Zeitverlauf mit der
  Periode T. Hält man t fest, beschreibt y die Form des ganzen Mediums in diesem Moment, also eine Momentaufnahme mit der
  Periode λ im Ort.
```

### Aufgaben zur Wellenfunktion

```aufgabe
id: p8-3-momentaufnahme
titel: Eine Momentaufnahme ablesen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt eine Momentaufnahme einer Seilwelle. Lies die Wellenlänge in m und die Amplitude in cm ab.
plot:
  x: [0, 3.6]
  y: [-4, 4]
  hoehe: 240
  achsen: { x: "x in m", y: "y in cm" }
  graphen:
    - { f: "3*sin(2*pi*x/1.2)", farbe: 0 }
  strecken:
    - { von: [0, 3], nach: [3.6, 3], gestrichelt: true, farbe: 3 }
    - { von: [0, -3], nach: [3.6, -3], gestrichelt: true, farbe: 3 }
teile:
  - typ: zahl
    label: Wellenlänge
    loesung: "1.2"
    einheit: "m"
    anzeige: '1{,}2'
    fehler:
      - wert: "0.6"
        meldung: Das ist der Abstand von einem Berg zum nächsten Tal, also nur eine halbe Wellenlänge. Miss von Berg zu Berg.
      - wert: "3.6"
        meldung: Das ist die Breite des ganzen Ausschnitts, in den drei Wellenlängen passen. Miss von einem Berg zum nächsten.
  - typ: zahl
    label: Amplitude
    loesung: "3"
    einheit: "cm"
    anzeige: '3'
    fehler:
      - wert: "6"
        meldung: Du hast von Tal bis Berg gemessen. Die Amplitude ist die größte Auslenkung aus der **Ruhelage**, also von der Mittellinie bis zum Berg.
hinweise:
  - Auf der waagrechten Achse steht der Ort. Der Abstand zweier Berge ist dann die Wellenlänge.
loesung: |
  **Wellenlänge:** Die Berge liegen bei $x = 0{,}3\,\text{m}$, $1{,}5\,\text{m}$ und $2{,}7\,\text{m}$. Der Abstand ist $\lambda = 1{,}2\,\text{m}$.
  ---
  **Amplitude:** Die Kurve reicht von $-3\,\text{cm}$ bis $+3\,\text{cm}$. Die Auslenkung aus der Ruhelage ist höchstens $A = 3\,\text{cm}$.
```

```aufgabe
id: p8-3-zeitverlauf
titel: Einen Zeitverlauf ablesen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt, wie sich ein einzelner Punkt eines Seils im Lauf der Zeit bewegt, während eine Welle vorbeiläuft. Wie groß ist die Frequenz der Welle in Hz?
plot:
  x: [0, 1]
  y: [-3, 3]
  hoehe: 240
  achsen: { x: "t in s", y: "y in cm" }
  graphen:
    - { f: "2*sin(2*pi*x/0.25)", farbe: 1 }
teile:
  - typ: zahl
    loesung: "1/0.25"
    einheit: "Hz"
    anzeige: '4'
    fehler:
      - wert: "0.25"
        meldung: $0{,}25\,\text{s}$ ist die Periodendauer, also der Abstand zweier Berge auf der Zeitachse. Die Frequenz ist ihr Kehrwert.
      - wert: "2"
        meldung: $2\,\text{cm}$ ist die Amplitude. Gefragt ist die Frequenz, die du aus dem Abstand der Berge auf der Zeitachse bestimmst.
hinweise:
  - Auf der waagrechten Achse steht die Zeit. Der Abstand zweier Berge ist dann die Periodendauer.
loesung: |
  **Ablesen:** Im Zeitraum von $0$ bis $1\,\text{s}$ liegen genau vier volle Schwingungen. Eine Schwingung dauert $T = 0{,}25\,\text{s}$.
  ---
  **Frequenz:** $f = \dfrac{1}{T} = \dfrac{1}{0{,}25\,\text{s}} = 4{,}0\,\text{Hz}$. Die Wellenlänge kann man aus diesem Diagramm nicht ablesen.
```

```aufgabe
id: p8-wellengleichung-ablesen
titel: Wellenfunktion lesen
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Seilwelle wird durch $y(x,t) = 0{,}02\,\text{m}\cdot\sin\left(2\pi\left(\dfrac{t}{0{,}5\,\text{s}} - \dfrac{x}{1{,}5\,\text{m}}\right)\right)$ beschrieben. Lies Amplitude, Periodendauer und Wellenlänge ab und berechne die Ausbreitungsgeschwindigkeit.
teile:
  - typ: zahl
    label: Amplitude
    loesung: "0.02"
    einheit: "m"
    anzeige: '0{,}02'
    fehler:
      - wert: "0.04"
        meldung: Die Amplitude ist der Vorfaktor vor dem Sinus. Doppelt so viel wäre der Abstand von Tal zu Berg.
  - typ: zahl
    label: Periodendauer
    loesung: "0.5"
    einheit: "s"
    anzeige: '0{,}5'
    fehler:
      - wert: "2"
        meldung: $2\,\text{Hz}$ wäre die Frequenz. Die Periodendauer steht in der Form $t/T$ direkt im Nenner.
  - typ: zahl
    label: Wellenlänge
    loesung: "1.5"
    einheit: "m"
    anzeige: '1{,}5'
    fehler:
      - wert: "0.5"
        meldung: Das ist die Periodendauer. Die Wellenlänge steht unter dem $x$.
  - typ: zahl
    label: Ausbreitungsgeschwindigkeit
    loesung: "1.5/0.5"
    einheit: "m/s"
    anzeige: '3'
    fehler:
      - wert: "0.5/1.5"
        meldung: Das ist der Kehrwert. Es gilt $c = \lambda/T$.
      - wert: "1.5*0.5"
        meldung: Du hast Wellenlänge und Periodendauer multipliziert. Es gilt $c = \lambda/T = \lambda\cdot f$.
hinweise:
  - 'Vergleiche Stück für Stück mit $y = A\sin\left(2\pi\left(\tfrac{t}{T} - \tfrac{x}{\lambda}\right)\right)$.'
  - 'Die Geschwindigkeit ist $c = \lambda/T$.'
gefuehrt:
  - text: Welche Zahl steht vor dem Sinus? Das ist die Amplitude in m.
    teil: { typ: zahl, loesung: "0.02" }
    erklaerung: $A = 0{,}02\,\text{m} = 2\,\text{cm}$.
  - text: Welche Zahl steht unter dem $t$? Das ist die Periodendauer in s.
    teil: { typ: zahl, loesung: "0.5" }
    erklaerung: In der allgemeinen Form steht $t/T$. Also ist $T = 0{,}5\,\text{s}$.
  - text: Welche Zahl steht unter dem $x$? Das ist die Wellenlänge in m.
    teil: { typ: zahl, loesung: "1.5" }
    erklaerung: In der allgemeinen Form steht $x/\lambda$. Also ist $\lambda = 1{,}5\,\text{m}$.
  - text: Berechne die Ausbreitungsgeschwindigkeit in m/s.
    teil: { typ: zahl, loesung: "1.5/0.5" }
    erklaerung: |
      $c = \lambda/T = 1{,}5\,\text{m} : 0{,}5\,\text{s} = 3{,}0\,\text{m/s}$. Das Minuszeichen zeigt die Richtung $+x$.
loesung: |
  **Ansatz:** Wir vergleichen mit der allgemeinen Form $y = A\sin\left(2\pi\left(\tfrac{t}{T} - \tfrac{x}{\lambda}\right)\right)$.
  ---
  **Ablesen:** $A = 0{,}02\,\text{m}$, $T = 0{,}5\,\text{s}$, $\lambda = 1{,}5\,\text{m}$. Das Minuszeichen zeigt die Ausbreitung in $+x$-Richtung.
  ---
  **Geschwindigkeit:** $c = \dfrac{\lambda}{T} = \dfrac{1{,}5\,\text{m}}{0{,}5\,\text{s}} = 3{,}0\,\text{m/s}$.
```

```aufgabe
id: p8-phasendifferenz
titel: Phasenverschiebung zweier Punkte
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Welle mit $\lambda = 1{,}0\,\text{m}$ läuft an zwei Punkten vorbei, die in Ausbreitungsrichtung $25\,\text{cm}$ auseinanderliegen. Wie groß ist ihre Phasendifferenz im Bogenmaß? Runde auf drei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "2*pi*0.25/1.0"
    einheit: "rad"
    anzeige: '1{,}571'
    fehler:
      - wert: "2*pi*25/1.0"
        meldung: Du hast Zentimeter und Meter gemischt. Rechne $25\,\text{cm} = 0{,}25\,\text{m}$, dann kürzt sich die Einheit.
      - wert: "0.25"
        meldung: Der Faktor $2\pi$ fehlt. $0{,}25$ ist der Bruchteil einer Wellenlänge. Eine ganze Wellenlänge entspricht der Phase $2\pi$.
hinweise:
  - Welchen Bruchteil einer Wellenlänge beträgt der Abstand?
  - 'Es gilt $\Delta\varphi = 2\pi\,\Delta x/\lambda$ mit beiden Längen in derselben Einheit.'
loesung: |
  **Ansatz:** Eine ganze Wellenlänge Abstand entspricht der Phasendifferenz $2\pi$. Also gilt $\Delta\varphi = 2\pi\,\Delta x/\lambda$.
  ---
  **Rechnung:** $\Delta\varphi = 2\pi\cdot\dfrac{0{,}25\,\text{m}}{1{,}0\,\text{m}} = \dfrac{\pi}{2} \approx 1{,}571$.
  ---
  **Deutung:** Ein Viertel Wellenlänge Abstand ist eine Viertelperiode Zeitversatz. Ist der erste Punkt oben, geht der zweite gerade durch die Ruhelage.
```

```aufgabe
id: p8-3-richtung
titel: Richtung und Geschwindigkeit aus der Gleichung
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine Welle wird beschrieben durch $y = 0{,}03\,\text{m}\cdot\sin(10\,\text{s}^{-1}\cdot t + 2{,}0\,\text{m}^{-1}\cdot x)$.

  a) In welche Richtung läuft die Welle?

  b) Wie groß ist ihre Ausbreitungsgeschwindigkeit in m/s?
teile:
  - typ: auswahl
    label: a) Richtung
    optionen:
      - "in $+x$-Richtung"
      - "in $-x$-Richtung"
      - "Man kann es nicht sagen, beide Richtungen sind möglich."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein Wellenberg hat einen festen Wert von $10\,t + 2{,}0\,x$. Wenn $t$ wächst, muss $x$ kleiner werden. Das Pluszeichen bedeutet also die Richtung $-x$.
      - wert: 2
        meldung: Das Vorzeichen zwischen dem Zeitterm und dem Ortsterm legt die Richtung eindeutig fest.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "10/2.0"
    einheit: "m/s"
    anzeige: '5'
    fehler:
      - wert: "10*2.0"
        meldung: |
          Du hast multipliziert. Es gilt $c = \omega/k$. Prüfe mit der Einheit, $\text{s}^{-1} : \text{m}^{-1} = \text{m/s}$.
      - wert: "2.0/10"
        meldung: Das ist der Kehrwert. Es gilt $c = \omega/k$.
hinweise:
  - Verfolge einen Wellenberg, für den das Argument des Sinus konstant bleibt.
  - 'Hier ist $\omega = 10\,\text{s}^{-1}$ und $k = 2{,}0\,\text{m}^{-1}$. Die Geschwindigkeit ist $c = \omega/k$.'
loesung: |
  **Richtung:** Für einen Wellenberg bleibt $10\,t + 2{,}0\,x$ konstant. Wächst $t$, muss $x$ abnehmen. Die Welle läuft in $-x$-Richtung.
  ---
  **Geschwindigkeit:** $c = \dfrac{\omega}{k} = \dfrac{10\,\text{s}^{-1}}{2{,}0\,\text{m}^{-1}} = 5{,}0\,\text{m/s}$.
  ---
  **Probe:** $\lambda = 2\pi/k = 3{,}14\,\text{m}$ und $T = 2\pi/\omega = 0{,}628\,\text{s}$. Dann ist $\lambda/T = 5{,}0\,\text{m/s}$, dasselbe Ergebnis.
```

```aufgabe
id: p8-3-zwei-aufnahmen
titel: Welle aus zwei Fotos
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt zwei Momentaufnahmen derselben Seilwelle: durchgezogen bei $t = 0$, gestrichelt bei $t = 0{,}20\,\text{s}$. Zwischen den Aufnahmen ist die Welle weniger als eine Wellenlänge gewandert. Bestimme Wellenlänge, Geschwindigkeit und Frequenz.
plot:
  x: [0, 8]
  y: [-1.5, 1.5]
  hoehe: 240
  achsen: { x: "x in m", y: "y" }
  graphen:
    - { f: "cos(2*pi*(x-1)/4)", farbe: 0 }
    - { f: "cos(2*pi*(x-1.6)/4)", farbe: 1, gestrichelt: true }
teile:
  - typ: zahl
    label: Wellenlänge
    loesung: "4"
    einheit: "m"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: Das ist der Abstand von einem Berg zum nächsten Tal, nur eine halbe Wellenlänge.
  - typ: zahl
    label: Geschwindigkeit
    loesung: "0.6/0.20"
    einheit: "m/s"
    anzeige: '3'
    fehler:
      - wert: "1.6/0.20"
        meldung: Du hast die neue Lage des Berges durch die Zeit geteilt. Es zählt aber die **Verschiebung**, also neue Lage minus alte Lage.
      - wert: "4/0.20"
        meldung: Die Welle ist nicht um eine ganze Wellenlänge gewandert, sondern nur um die Verschiebung eines Berges zwischen den beiden Kurven.
  - typ: zahl
    label: Frequenz
    loesung: "(0.6/0.20)/4"
    einheit: "Hz"
    anzeige: '0{,}75'
    fehler:
      - wert: "4/(0.6/0.20)"
        meldung: Das ist die Periodendauer $T = \lambda/c$. Die Frequenz ist ihr Kehrwert, $f = c/\lambda$.
hinweise:
  - Suche in beiden Kurven denselben Wellenberg. Wo liegt er bei $t = 0$, wo bei $t = 0{,}20\,\text{s}$?
  - 'Geschwindigkeit ist Verschiebung durch Zeit. Danach $f = c/\lambda$.'
loesung: |
  **Wellenlänge:** Die durchgezogene Kurve hat Berge bei $x = 1\,\text{m}$ und $x = 5\,\text{m}$. Also ist $\lambda = 4\,\text{m}$.
  ---
  **Verschiebung:** Der Berg bei $1\,\text{m}$ liegt in der gestrichelten Kurve bei $1{,}6\,\text{m}$. Er ist um $0{,}6\,\text{m}$ nach rechts gewandert.
  ---
  **Geschwindigkeit:** $c = \dfrac{0{,}6\,\text{m}}{0{,}20\,\text{s}} = 3{,}0\,\text{m/s}$, Richtung $+x$.
  ---
  **Frequenz:** $f = \dfrac{c}{\lambda} = \dfrac{3{,}0\,\text{m/s}}{4\,\text{m}} = 0{,}75\,\text{Hz}$. Probe: In $T = 1{,}33\,\text{s}$ wandert der Berg um $3{,}0\cdot 1{,}33 = 4\,\text{m}$, also genau eine Wellenlänge.
```

```aufgabe
id: p8-3-schnelle
titel: Seilstück gegen Wellenberg
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Auf einem Seil läuft eine harmonische Welle mit der Amplitude $2{,}0\,\text{cm}$, der Frequenz $5{,}0\,\text{Hz}$ und der Wellenlänge $0{,}80\,\text{m}$.

  a) Wie groß ist die größte Geschwindigkeit eines einzelnen Seilstücks in m/s? Runde auf drei Nachkommastellen.

  b) Wie schnell läuft die Welle?
teile:
  - typ: zahl
    label: a) größte Geschwindigkeit eines Seilstücks
    loesung: "2*pi*5.0*0.020"
    einheit: "m/s"
    anzeige: '0{,}628'
    fehler:
      - wert: "5.0*0.020"
        meldung: Der Faktor $2\pi$ fehlt. Die größte Geschwindigkeit ist $A\omega$ mit der Kreisfrequenz $\omega = 2\pi f$, nicht mit $f$.
      - wert: "0.80*5.0"
        meldung: Das ist die Ausbreitungsgeschwindigkeit der Welle. Ein einzelnes Seilstück bewegt sich nur auf und ab, mit höchstens $A\omega$.
  - typ: zahl
    label: b) Ausbreitungsgeschwindigkeit
    loesung: "0.80*5.0"
    einheit: "m/s"
    anzeige: '4'
    fehler:
      - wert: "0.80/5.0"
        meldung: Es gilt $c = \lambda\cdot f$, nicht $\lambda/f$.
hinweise:
  - Ein Seilstück schwingt harmonisch. Seine Geschwindigkeit ist die Ableitung der Auslenkung nach der Zeit.
  - 'Für $y = A\sin(\omega t - kx)$ ist die größte Geschwindigkeit $A\omega$. Für die Welle gilt $c = \lambda f$.'
loesung: |
  **Ansatz:** Die Geschwindigkeit eines Seilstücks ist die Ableitung von $y = A\sin(\omega t - kx)$ nach $t$, also $A\omega\cos(\omega t - kx)$. Ihr größter Wert ist $A\omega$.
  ---
  **a)** $\omega = 2\pi\cdot 5{,}0\,\text{s}^{-1} = 31{,}4\,\text{s}^{-1}$. Also $v_{\max} = 0{,}020\,\text{m}\cdot 31{,}4\,\text{s}^{-1} = 0{,}628\,\text{m/s}$.
  ---
  **b)** $c = \lambda f = 0{,}80\,\text{m}\cdot 5{,}0\,\text{s}^{-1} = 4{,}0\,\text{m/s}$.
  ---
  **Vergleich:** Die Welle ist gut sechsmal so schnell wie das schnellste Seilstück. Das Seil selbst wandert gar nicht mit, es bewegt sich nur quer.
```

## Überlagerung und Interferenz: der Gangunterschied entscheidet

```aufgabe
id: p8-4-check
art: check
titel: "Vorwissen: Gegenphasige Schwingungen addieren"
niveau: 1
angabe: |
  Zwei Schwingungen haben beide die Amplitude $2\,\text{cm}$ und dieselbe Frequenz. Sie sind **gegenphasig**: Wenn die eine ganz oben ist, ist die andere ganz unten. Wie groß ist die Auslenkung ihrer Summe in jedem Augenblick (in cm)?
teile:
  - typ: zahl
    loesung: "0"
    einheit: "cm"
    fehler:
      - wert: "4"
        meldung: $4\,\text{cm}$ ergibt sich nur, wenn beide im **Gleichtakt** schwingen. Gegenphasig ist die eine bei $+2\,\text{cm}$, wenn die andere bei $-2\,\text{cm}$ ist.
hinweise:
  - Addiere die beiden Auslenkungen in einem Moment, in dem die erste ganz oben ist.
loesung: |
  Ist die erste bei $+2\,\text{cm}$, ist die zweite bei $-2\,\text{cm}$. Die Summe ist $0$. Das gilt zu jedem Zeitpunkt, denn die beiden Auslenkungen sind immer entgegengesetzt gleich.
  ---
  Die Summe ist also dauernd null. Wiederholen: Phase und Phasendifferenz in [Auslenkung, Geschwindigkeit und Beschleunigung: die Phasenlage](/lernen/physik1/schwingungen/auslenkung-geschwindigkeit-und-beschleunigung-die-phasenlage) und in [Die harmonische Welle als Funktion von Ort und Zeit](/lernen/physik1/wellen-akustik/die-harmonische-welle-als-funktion-von-ort-und-zeit).
```

Was passiert, wenn sich zwei Wellen am selben Ort treffen? Wirf zwei Steine nebeneinander in einen Teich.
Ihre Ringe laufen durcheinander hindurch und danach unverändert weiter, als hätten sie sich nie getroffen.
Wo sie sich überlappen, entsteht für kurze Zeit ein kompliziertes Muster. Wie man dieses Muster
berechnet, sagt ein einfaches Prinzip.

:::satz[Superpositionsprinzip]
Treffen mehrere Wellen am selben Ort zusammen, **addieren** sich ihre Auslenkungen, an jedem Ort und zu
jeder Zeit:
$$y(x, t) = y_1(x, t) + y_2(x, t).$$
Dabei sind $y_1$ und $y_2$ die Auslenkungen, die jede Welle allein hervorrufen würde. Nach der Begegnung
laufen die Wellen ungestört weiter.
:::

**Superposition** heißt auf Deutsch „Überlagerung“. Das Prinzip gilt, solange die Auslenkungen klein sind,
und das ist bei Schall im Alltag immer der Fall. Es erklärt, warum sich die Radiowellen aller Sender nicht
gegenseitig verbiegen und warum du in einem Raum voller Gespräche eine einzelne Stimme heraushören kannst.

:::beispiel[Zwei Wellenpulse begegnen sich]
Auf einem Seil läuft von links ein Wellenberg mit $3\,\text{cm}$ Höhe, von rechts ein Wellenberg mit
$2\,\text{cm}$ Höhe. Beide haben dieselbe Form und Breite. Wie hoch ist das Seil in dem Moment, in dem die
beiden Gipfel genau übereinanderliegen?

**Schritt 1, Prinzip:** Nach dem Superpositionsprinzip addieren sich die Auslenkungen.

**Schritt 2, addieren:** $y = 3\,\text{cm} + 2\,\text{cm} = 5\,\text{cm}$.

**Schritt 3, danach:** Einen Augenblick später laufen die Pulse weiter. Der $3$-cm-Berg ist wieder
$3\,\text{cm}$ hoch und läuft nach rechts, der $2$-cm-Berg nach links.

**Gegenstück:** Wäre der zweite Puls ein **Tal** von $2\,\text{cm}$ Tiefe, also $-2\,\text{cm}$, ergäbe die
Summe $3\,\text{cm} - 2\,\text{cm} = 1\,\text{cm}$. Auch danach liefen beide Pulse unverändert weiter.
:::

### Interferenz: Verstärkung und Auslöschung

Überlagern sich zwei Wellen **gleicher Frequenz** mit einer zeitlich **festen** Phasenbeziehung, entsteht ein
stabiles Muster aus lauten und leisen Stellen. Das nennt man **Interferenz**.

- **Konstruktive Interferenz:** Die Wellen kommen **gleichphasig** an, Berg auf Berg und Tal auf Tal. Die
  Amplituden addieren sich. Zwei gleiche Wellen ergeben die doppelte Amplitude.
- **Destruktive Interferenz:** Die Wellen kommen **gegenphasig** an, Berg auf Tal. Die Amplituden
  ziehen sich voneinander ab. Zwei gleiche Wellen löschen sich aus.

Kommen zwei Wellen von zwei Quellen, die im Gleichtakt schwingen, hängt die Phasenlage am Treffpunkt nur
von den Wegen ab. Die Differenz der beiden Wege heißt **Gangunterschied** $\Delta s = |s_2 - s_1|$. Dabei ist
$s_1$ der Abstand des Treffpunkts von der ersten Quelle und $s_2$ der von der zweiten. Ist der
Gangunterschied eine ganze Wellenlänge, kommt die eine Welle genau eine Periode später an. Berg trifft auf
Berg. Ist er eine halbe Wellenlänge, trifft Berg auf Tal.

:::satz[Interferenzbedingungen für zwei gleichphasige Quellen]
Am Ort mit dem Gangunterschied $\Delta s$ gilt
$$\text{Maximum (konstruktiv):}\quad \Delta s = n\cdot\lambda, \qquad \text{Minimum (destruktiv):}\quad \Delta s = \left(n + \tfrac12\right)\lambda,$$
mit $n = 0, 1, 2, \dots$ und der Wellenlänge $\lambda$. Merkregel: Teile den Gangunterschied durch die
Wellenlänge. Ganze Zahl heißt laut, „Komma fünf“ heißt leise.
:::

```plot
x: [-1, 5]
y: [-1.5, 2]
gleich: true
hoehe: 260
punkte:
  - { x: 0, y: 0.5, label: "L₁", farbe: 0 }
  - { x: 0, y: -0.5, label: "L₂", farbe: 0 }
  - { x: 4, y: 1.4, label: "Hörer P", farbe: 1 }
strecken:
  - { von: [0, 0.5], nach: [4, 1.4], farbe: 2 }
  - { von: [0, -0.5], nach: [4, 1.4], farbe: 3 }
beschriftung: "Zwei Lautsprecher L₁ und L₂ spielen im Gleichtakt denselben Ton. Zum Hörer P führen zwei verschieden lange Wege (grün und violett). Ihre Differenz ist der Gangunterschied. Er entscheidet, ob P ein Maximum oder ein Minimum hört."
```

:::beispiel[Laut oder leise vor zwei Lautsprechern?]
Zwei Lautsprecher spielen gleichphasig einen Ton von $850\,\text{Hz}$ ($c = 340\,\text{m/s}$). Ein Hörer
sitzt $4{,}0\,\text{m}$ vom ersten und $4{,}6\,\text{m}$ vom zweiten Lautsprecher entfernt. Hört er dort
ein Maximum oder ein Minimum?

**Schritt 1, Wellenlänge:** $\lambda = \dfrac{c}{f} = \dfrac{340\,\text{m/s}}{850\,\text{s}^{-1}} = 0{,}40\,\text{m}$.

**Schritt 2, Gangunterschied:** $\Delta s = 4{,}6\,\text{m} - 4{,}0\,\text{m} = 0{,}6\,\text{m}$.

**Schritt 3, in Wellenlängen ausdrücken:** $\dfrac{\Delta s}{\lambda} = \dfrac{0{,}6\,\text{m}}{0{,}40\,\text{m}} = 1{,}5$.
Die Einheit kürzt sich.

**Antwort:** Der Gangunterschied ist eineinhalb Wellenlängen, also $\left(1 + \tfrac12\right)\lambda$. Berg
trifft auf Tal, der Hörer sitzt in einem Minimum. Bei gleich lauten Lautsprechern hört er dort fast nichts
von diesem Ton.
:::

:::achtung[Fehler: den Gangunterschied nicht durch λ geteilt]
Zwei gleichphasige Lautsprecher senden $680\,\text{Hz}$, also $\lambda = 0{,}50\,\text{m}$. Der
Gangunterschied an einem Platz ist $1{,}5\,\text{m}$. Ein Schüler sagt: „Komma fünf, also ein Minimum.“

Das ist falsch. „Komma fünf“ muss für $\Delta s/\lambda$ gelten, nicht für den Gangunterschied in Metern.
Hier ist $\Delta s/\lambda = 1{,}5\,\text{m} : 0{,}50\,\text{m} = 3$, eine ganze Zahl. Der Platz liegt in
einem **Maximum**.
:::

### Kohärenz: Wann ein stabiles Muster entsteht

Damit ein Muster aus lauten und leisen Stellen stehen bleibt, müssen die Wellen **kohärent** sein. Das
heißt: gleiche Frequenz und eine feste Phasenbeziehung. Zwei Lautsprecher an demselben Verstärker sind
kohärent. Ebenso eine Welle und ihre eigene Reflexion an einer Wand. Zwei Menschen, die denselben Ton
singen, sind es nicht. Ihre Frequenzen weichen ein wenig ab, und ihre Phasen wandern ständig gegeneinander.
Das Muster verschiebt sich ständig, kein Ort bleibt dauerhaft laut oder leise. Im zeitlichen Mittel
addieren sich nur die **Intensitäten** der beiden Stimmen (die Intensität ist die Leistung pro Fläche).

Im Wasserbecken mit zwei Stiften, die im Gleichtakt eintauchen, sieht man das Muster direkt. Auf der
Mittellinie ist der Gangunterschied null, dort schwingt das Wasser kräftig. Daneben folgen fächerförmig
ruhige und bewegte Streifen. Genau dieses Muster findet man beim Doppelspaltversuch mit Licht wieder (siehe
[Kapitel Wellenoptik](/lernen/physik1/wellenoptik-atom-kernphysik/interferenz-licht-als-welle-und-der-doppelspalt)).

```aufgabe
id: p8-4-vorhersage
art: check
titel: "Vorhersage: Gegenphasige Wellen"
niveau: 1
angabe: |
  Im Widget laufen zwei gleich starke Wellen gleicher Wellenlänge in dieselbe Richtung. Was zeigt die Summe (durchgezogene Linie), wenn du die Phasendifferenz $\Delta\varphi$ auf $\pi \approx 3{,}14$ stellst?
teile:
  - typ: auswahl
    optionen:
      - "eine Welle mit doppelter Amplitude"
      - "eine flache Linie: Die Wellen löschen sich überall aus"
      - "eine Welle mit derselben Amplitude wie jede einzelne"
      - "eine Welle mit doppelter Wellenlänge"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die doppelte Amplitude gibt es bei $\Delta\varphi = 0$, also im Gleichtakt. Bei $\pi$ trifft jeder Berg auf ein Tal.
      - wert: 3
        meldung: Die Überlagerung zweier Wellen gleicher Wellenlänge hat wieder dieselbe Wellenlänge. Nur die Amplitude hängt von der Phasendifferenz ab.
      - wert: 2
        meldung: Die Amplitude der Summe hängt von der Phasendifferenz ab. Bei $\pi$ sind die Auslenkungen überall entgegengesetzt gleich.
hinweise:
  - Eine Phasendifferenz von $\pi$ bedeutet „gegenphasig“, Berg auf Tal.
loesung: |
  Bei $\Delta\varphi = \pi$ ist an jedem Ort die Auslenkung der zweiten Welle entgegengesetzt gleich der ersten.
  ---
  Die Summe ist überall null. Das ist vollständige destruktive Interferenz.
```

```widget
name: wellen
titel: Zwei Wellen überlagern
props:
  modus: raum
  A1: 1
  A2: 1
  lambda1: 2
  lambda2: 2
  f1: 0.5
  f2: 0.5
  phi: 0
  xmax: 8
```

**Beobachte:** Stelle $\Delta\varphi$ zuerst auf $0$. Die Summe hat die doppelte Amplitude. Stelle dann
$3{,}14$ ein. Die Summe verschwindet. **Erkläre:** Die Phasendifferenz entspricht dem Gangunterschied,
$\Delta\varphi = 2\pi\,\Delta s/\lambda$. Ein halbes $\lambda$ Gangunterschied bedeutet $\pi$. Gib danach der
zweiten Welle eine andere Wellenlänge. Das Summenbild wird unregelmäßig, denn die Phasenbeziehung ist dann
nicht mehr überall gleich.

### Wohin geht die Energie bei der Auslöschung?

Destruktive Interferenz vernichtet keine Energie. Sie **verteilt** sie nur um. Wo sich die Wellen
auslöschen, ist es leise. An den Maxima ist es dafür entsprechend lauter. Gehst du vor zwei Lautsprechern
mit demselben Ton entlang, hörst du abwechselnd laute und leise Stellen. Über alle Plätze gemittelt
kommt genau die Energie beider Lautsprecher an.

:::achtung[Fehler: konstruktiv heißt doppelte Intensität]
Zwei gleiche Lautsprecher erzeugen an einem Ort je die Intensität $I$, also die Leistung pro Fläche. Eine
Schülerin schreibt: „Im Maximum ist die Intensität $2I$.“

Das ist falsch. Im Maximum verdoppelt sich die **Amplitude**. Die Intensität ist proportional zum Quadrat
der Amplitude, also wird sie $2^2 = 4$-mal so groß, $4I$. Im Minimum ist sie $0$. Im Mittel über Maxima und
Minima ergibt sich $\tfrac{4I + 0}{2} = 2I$. So bleibt die Energie erhalten.
:::

**Anwendungen.** Kopfhörer mit Geräuschunterdrückung (*Noise Cancelling*) messen den Umgebungslärm mit einem
Mikrofon und spielen ihn gegenphasig ab. Am Trommelfell löschen sich Lärm und Gegenschall weitgehend aus.
Das klappt bei tiefen, gleichmäßigen Tönen wie Motorbrummen am besten.

:::beispiel[Bei welchen Frequenzen löschen sich direkter Weg und Umweg aus?]
In einem Messaufbau kommt Schall auf zwei Wegen zu einem Mikrofon. Der Umweg ist $0{,}85\,\text{m}$ länger als
der direkte Weg ($c = 340\,\text{m/s}$). Für welche Frequenzen unter $1100\,\text{Hz}$ löschen sich die beiden
Anteile aus?

**Schritt 1, Bedingung:** Auslöschung bei $\Delta s = \left(n + \tfrac12\right)\lambda$. Mit
$\lambda = c/f$ folgt durch Umstellen nach $f$: $f = \left(n + \tfrac12\right)\dfrac{c}{\Delta s}$.

**Schritt 2, Grundwert:** $\dfrac{c}{\Delta s} = \dfrac{340\,\text{m/s}}{0{,}85\,\text{m}} = 400\,\text{Hz}$.

**Schritt 3, einsetzen:** $n = 0$ ergibt $200\,\text{Hz}$, $n = 1$ ergibt $600\,\text{Hz}$, $n = 2$ ergibt
$1000\,\text{Hz}$. Der nächste Wert, $1400\,\text{Hz}$, liegt über der Grenze.

**Antwort:** Ausgelöscht werden $200$, $600$ und $1000\,\text{Hz}$. Probe für $600\,\text{Hz}$:
$\lambda = 0{,}567\,\text{m}$ und $0{,}85 : 0{,}567 = 1{,}5$.
:::

### Aufgaben zur Interferenz

```aufgabe
id: p8-4-pulse
titel: Berg trifft Tal
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Auf einem Seil laufen ein Wellenberg mit $4\,\text{cm}$ Höhe und ein Wellental mit $1{,}5\,\text{cm}$ Tiefe aufeinander zu. Beide haben dieselbe Form. Wie groß ist die Auslenkung in dem Moment, in dem Gipfel und tiefste Stelle genau übereinanderliegen? Gib das Ergebnis mit Vorzeichen in cm an (nach oben positiv).
teile:
  - typ: zahl
    loesung: "4 - 1.5"
    einheit: "cm"
    anzeige: '2{,}5'
    fehler:
      - wert: "4 + 1.5"
        meldung: Ein Tal ist eine Auslenkung nach **unten**, also negativ. Du musst $4\,\text{cm} + (-1{,}5\,\text{cm})$ rechnen.
      - wert: "-2.5"
        meldung: Der Berg ist größer als das Tal tief ist. Die Summe ist also positiv.
hinweise:
  - Ein Tal zählt als negative Auslenkung. Addiere mit Vorzeichen.
loesung: |
  **Ansatz:** Nach dem Superpositionsprinzip addieren sich die Auslenkungen mit Vorzeichen.
  ---
  $y = 4\,\text{cm} + (-1{,}5\,\text{cm}) = 2{,}5\,\text{cm}$. Danach laufen Berg und Tal unverändert weiter.
```

```aufgabe
id: p8-4-minima-auswahl
titel: Welche Plätze sind leise?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Zwei gleichphasige Lautsprecher senden einen Ton mit $\lambda = 0{,}40\,\text{m}$. Bei welchen Gangunterschieden liegt ein **Minimum**? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "$\\Delta s = 0{,}20\\,\\text{m}$"
      - "$\\Delta s = 0{,}40\\,\\text{m}$"
      - "$\\Delta s = 0{,}60\\,\\text{m}$"
      - "$\\Delta s = 0{,}80\\,\\text{m}$"
      - "$\\Delta s = 1{,}00\\,\\text{m}$"
    richtig: [0, 2, 4]
    fehler:
      - wert: [1, 3]
        meldung: Ganzzahlige Vielfache von $\lambda$ ergeben **Maxima**, nicht Minima. Bei $0{,}40\,\text{m}$ trifft Berg auf Berg.
      - wert: [0]
        meldung: $0{,}20\,\text{m}$ ist richtig. Aber auch $0{,}60\,\text{m} = 1{,}5\,\lambda$ und $1{,}00\,\text{m} = 2{,}5\,\lambda$ sind halbzahlige Vielfache.
hinweise:
  - Teile jeden Gangunterschied durch $\lambda = 0{,}40\,\text{m}$. Halbzahlige Ergebnisse bedeuten ein Minimum.
loesung: |
  **Ansatz:** Minimum bei $\Delta s/\lambda = 0{,}5;\ 1{,}5;\ 2{,}5;\ \dots$
  ---
  $0{,}20 : 0{,}40 = 0{,}5$, $0{,}60 : 0{,}40 = 1{,}5$ und $1{,}00 : 0{,}40 = 2{,}5$ sind halbzahlig, also Minima. $0{,}40$ und $0{,}80$ ergeben $1$ und $2$, also Maxima.
```

```aufgabe
id: p8-interferenz-gangunterschied
titel: Zwei Lautsprecher im Wohnzimmer
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Zwei Lautsprecher spielen gleichphasig einen Ton von $680\,\text{Hz}$ ($c = 340\,\text{m/s}$). Ein Hörer ist vom einen $3{,}00\,\text{m}$, vom anderen $3{,}75\,\text{m}$ entfernt. Hört er dort ein Maximum oder ein Minimum?
teile:
  - typ: auswahl
    optionen:
      - "Maximum (konstruktive Interferenz)"
      - "Minimum (destruktive Interferenz)"
      - "weder noch, eine mittlere Lautstärke"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Teile den Gangunterschied durch die Wellenlänge. $0{,}75\,\text{m} : 0{,}50\,\text{m} = 1{,}5$ ist halbzahlig. Das bedeutet Berg auf Tal.
      - wert: 2
        meldung: Mittlere Lautstärke gibt es bei Zwischenwerten wie $\Delta s/\lambda = 1{,}25$. Hier ergibt sich genau ein halbzahliger Wert.
hinweise:
  - Berechne zuerst die Wellenlänge.
  - Drücke den Gangunterschied in Wellenlängen aus, also $\Delta s/\lambda$.
gefuehrt:
  - text: Berechne die Wellenlänge in m.
    teil: { typ: zahl, loesung: "340/680" }
    erklaerung: |
      $\lambda = c/f = 340\,\text{m/s} : 680\,\text{Hz} = 0{,}50\,\text{m}$.
  - text: Wie groß ist der Gangunterschied in m?
    teil: { typ: zahl, loesung: "3.75-3.00" }
    erklaerung: $\Delta s = 3{,}75\,\text{m} - 3{,}00\,\text{m} = 0{,}75\,\text{m}$.
  - text: Wie viele Wellenlängen sind das?
    teil: { typ: zahl, loesung: "0.75/0.50" }
    erklaerung: |
      $0{,}75 : 0{,}50 = 1{,}5$.
  - text: Entscheide nun, ob ein Maximum oder ein Minimum vorliegt.
    erklaerung: $1{,}5$ ist halbzahlig. Berg trifft auf Tal, also liegt ein Minimum vor.
loesung: |
  **Wellenlänge:** $\lambda = \dfrac{c}{f} = \dfrac{340\,\text{m/s}}{680\,\text{s}^{-1}} = 0{,}50\,\text{m}$.
  ---
  **Gangunterschied:** $\Delta s = 3{,}75\,\text{m} - 3{,}00\,\text{m} = 0{,}75\,\text{m} = 1{,}5\,\lambda$.
  ---
  **Entscheidung:** Ein halbzahliges Vielfaches von $\lambda$ bedeutet destruktive Interferenz. Der Hörer sitzt in einem Minimum.
```

```aufgabe
id: p8-interferenz-minimum
titel: Kleinster Gangunterschied für Auslöschung
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Zwei gleichphasige Schallquellen senden $1000\,\text{Hz}$ aus ($c = 340\,\text{m/s}$). Wie groß muss der Gangunterschied mindestens sein, damit sich die Wellen auslöschen? Antwort in m.
teile:
  - typ: zahl
    loesung: "340/1000/2"
    einheit: "m"
    anzeige: '0{,}17'
    fehler:
      - wert: "340/1000"
        meldung: Das ist eine ganze Wellenlänge. Bei $\Delta s = \lambda$ trifft Berg auf Berg, es entsteht ein Maximum. Für Auslöschung braucht man eine halbe Wellenlänge.
      - wert: "0"
        meldung: Bei Gangunterschied null kommen beide Wellen gleichphasig an. Das ist ein Maximum.
hinweise:
  - Welches ist der kleinste halbzahlige Wert in $\Delta s = (n + \tfrac12)\lambda$?
  - Für $n = 0$ ist $\Delta s = \lambda/2$. Berechne zuerst $\lambda$.
loesung: |
  **Ansatz:** Auslöschung bei $\Delta s = \left(n + \tfrac12\right)\lambda$. Der kleinste Wert ergibt sich für $n = 0$, also $\Delta s = \lambda/2$.
  ---
  **Wellenlänge:** $\lambda = \dfrac{340\,\text{m/s}}{1000\,\text{s}^{-1}} = 0{,}34\,\text{m}$.
  ---
  **Ergebnis:** $\Delta s = \dfrac{0{,}34\,\text{m}}{2} = 0{,}17\,\text{m}$. Schon ein Umweg von $17\,\text{cm}$ kann diesen Ton auslöschen.
```

```aufgabe
id: p8-4-energie
titel: Wo bleibt die Energie?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Zwei Lautsprecher spielen denselben Ton. An einem Platz löschen sich ihre Wellen aus. Was geschieht mit der Energie, die die beiden Lautsprecher zu diesem Platz geschickt hätten?
teile:
  - typ: auswahl
    optionen:
      - "Sie wird vernichtet. Destruktive Interferenz verletzt den Energieerhaltungssatz."
      - "Sie wird an diesem Platz in Wärme umgewandelt."
      - "Sie wird umverteilt: An den Maxima ist es entsprechend lauter."
      - "Die Lautsprecher geben automatisch weniger Leistung ab."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Energie geht nie verloren. Die Interferenz legt nur fest, **wo** die Energie ankommt.
      - wert: 1
        meldung: Im Minimum schwingt die Luft gar nicht. Es gibt dort also auch nichts, was Wärme erzeugen könnte.
      - wert: 3
        meldung: Die Lautsprecher wissen nichts von einem Platz, an dem sich ihre Wellen auslöschen. Sie strahlen dieselbe Leistung ab.
hinweise:
  - Denke an den Energieerhaltungssatz.
  - Vergleiche die Intensität im Maximum (doppelte Amplitude) mit der Summe der Einzelintensitäten.
loesung: |
  **Ansatz:** Der Energieerhaltungssatz gilt auch für Wellen.
  ---
  Im Maximum ist die Amplitude doppelt, die Intensität also vierfach. Im Minimum ist sie null. Im Mittel kommt die doppelte Intensität eines Lautsprechers an, genau so viel, wie beide zusammen abstrahlen.
  ---
  **Antwort:** Die Energie wird umverteilt, nicht vernichtet.
```

```aufgabe
id: p8-4-frequenzen
titel: Welche Töne verschwinden?
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Zwei gleichphasige Lautsprecher spielen nacheinander verschiedene Töne. An einem Platz ist der Weg zum einen Lautsprecher $0{,}51\,\text{m}$ länger als zum anderen ($c = 340\,\text{m/s}$).

  a) Welches ist die tiefste Frequenz, die an diesem Platz ausgelöscht wird? Runde auf ganze Hz.

  b) Welches ist die nächsthöhere Frequenz mit Auslöschung?
teile:
  - typ: zahl
    label: a) tiefste Frequenz mit Auslöschung
    loesung: "0.5*340/0.51"
    einheit: "Hz"
    anzeige: '333'
    fehler:
      - wert: "340/0.51"
        meldung: Bei dieser Frequenz ist der Gangunterschied genau eine Wellenlänge. Das ergibt ein Maximum. Für Auslöschung muss der Gangunterschied eine **halbe** Wellenlänge sein.
  - typ: zahl
    label: b) nächste Frequenz mit Auslöschung
    loesung: "1.5*340/0.51"
    einheit: "Hz"
    anzeige: '1000'
    fehler:
      - wert: "2*0.5*340/0.51"
        meldung: Das ist das Doppelte der tiefsten Frequenz. Dort ist $\Delta s = \lambda$, also ein Maximum. Die nächste Auslöschung gibt es bei $\Delta s = 1{,}5\,\lambda$, also beim Dreifachen.
hinweise:
  - 'Auslöschung bei $\Delta s = (n + \tfrac12)\lambda$. Ersetze $\lambda$ durch $c/f$.'
  - 'Stelle nach $f$ um: $f = (n + \tfrac12)\,c/\Delta s$. Setze $n = 0$ und $n = 1$ ein.'
loesung: |
  **Modell:** Auslöschung tritt auf, wenn $\Delta s = \left(n + \tfrac12\right)\lambda$ gilt. Mit $\lambda = c/f$ und Umstellen nach $f$ folgt $f = \left(n + \tfrac12\right)\dfrac{c}{\Delta s}$.
  ---
  **Grundwert:** $\dfrac{c}{\Delta s} = \dfrac{340\,\text{m/s}}{0{,}51\,\text{m}} = 666{,}7\,\text{Hz}$.
  ---
  **a)** $n = 0$: $f = 0{,}5\cdot 666{,}7\,\text{Hz} = 333\,\text{Hz}$.
  ---
  **b)** $n = 1$: $f = 1{,}5\cdot 666{,}7\,\text{Hz} = 1000\,\text{Hz}$. Probe: $\lambda = 0{,}34\,\text{m}$, und $0{,}51 : 0{,}34 = 1{,}5$. Halbzahlig, also Auslöschung.
```

```aufgabe
id: p8-4-kohaerenz
titel: Warum zwei Sänger kein Interferenzmuster erzeugen
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Zwei Lautsprecher an demselben Verstärker erzeugen im Raum feste laute und leise Stellen. Zwei Sänger, die denselben Ton singen, erzeugen dagegen kein solches Muster. Erkläre den Unterschied mit dem Begriff Kohärenz.
teile:
  - typ: text
    muster: |
      Ein festes Interferenzmuster entsteht nur, wenn die Wellen kohärent sind: gleiche Frequenz und eine feste
      Phasenbeziehung. Die beiden Lautsprecher bekommen dasselbe Signal vom Verstärker, sie schwingen also immer im
      selben Takt. An jedem Ort ist der Gangunterschied fest, und damit ist es dort dauerhaft laut oder leise. Zwei
      Sänger treffen die Frequenz nie ganz genau, und ihre Phasen ändern sich ständig. Die lauten und leisen Stellen
      wandern deshalb ständig durch den Raum, und im Mittel hört das Ohr nur die Summe der beiden Intensitäten.
hinweise:
  - Was muss für die Phasenbeziehung der beiden Wellen gelten, damit ein Ort dauerhaft laut oder leise ist?
  - Vergleiche, woher die Schwingungen der Lautsprecher und der Sänger kommen.
loesung: |
  **Begriff:** Kohärent heißt gleiche Frequenz und zeitlich feste Phasenbeziehung.
  ---
  **Lautsprecher:** Sie werden vom selben Signal angetrieben und sind kohärent. Der Gangunterschied an einem Ort legt dauerhaft fest, ob es dort laut oder leise ist.
  ---
  **Sänger:** Ihre Frequenzen weichen leicht ab, die Phasenbeziehung ändert sich ständig. Das Muster wandert, kein Ort bleibt dauerhaft laut oder leise. Im zeitlichen Mittel addieren sich nur die Intensitäten der beiden Stimmen.
```

## Stehende Wellen: Saiten und Pfeifen

```aufgabe
id: p8-5-check
art: check
titel: "Vorwissen: Frequenz aus c und λ"
niveau: 1
angabe: |
  Auf einer Saite laufen Wellen mit $c = 300\,\text{m/s}$. Eine Welle hat die Wellenlänge $1{,}2\,\text{m}$. Welche Frequenz hat sie in Hz?
teile:
  - typ: zahl
    loesung: "300/1.2"
    einheit: "Hz"
    anzeige: '250'
    fehler:
      - wert: "300*1.2"
        meldung: Aus $c = \lambda f$ folgt $f = c/\lambda$. Du hast multipliziert.
      - wert: "1.2/300"
        meldung: Das ist die Periodendauer $T = \lambda/c$, nicht die Frequenz.
hinweise:
  - 'Stelle $c = \lambda f$ nach $f$ um.'
loesung: |
  Aus $c = \lambda f$ folgt durch Teilen durch $\lambda$ die Formel $f = c/\lambda$.
  ---
  $f = 300\,\text{m/s} : 1{,}2\,\text{m} = 250\,\text{Hz}$. Wiederholen: [Wellenlänge, Frequenz und Ausbreitungsgeschwindigkeit](/lernen/physik1/wellen-akustik/wellenlaenge-frequenz-und-ausbreitungsgeschwindigkeit).
```

Zupfst du eine Gitarrensaite, schwingt sie hin und her, aber keine Welle läuft sichtbar die Saite
entlang. Trotzdem ist das eine Welle, und zwar eine besondere: eine **stehende Welle**. Sie ist die
zweite Hürde dieses Kapitels. Eine stehende Welle sieht aus wie eine Welle, wandert aber nicht.

### Wie eine stehende Welle entsteht

Eine Welle, die auf ein festes Ende trifft, wird zurückgeworfen, also **reflektiert**. Die hinlaufende und
die zurücklaufende Welle haben dieselbe Frequenz und dieselbe Amplitude, laufen aber entgegengesetzt.
Nach dem Superpositionsprinzip addieren sich ihre Auslenkungen. Das Ergebnis ist ein Muster, das am Ort
bleibt:

- An manchen Stellen treffen die beiden Wellen **immer** gegenphasig zusammen. Dort bleibt das Medium
  dauernd in Ruhe. Diese Stellen heißen **Knoten**.
- Dazwischen liegen Stellen, an denen sich die beiden Wellen immer wieder verstärken. Dort schwingt das
  Medium mit der doppelten Amplitude einer Einzelwelle. Diese Stellen heißen **Bäuche**.

:::definition[Stehende Welle]
Eine **stehende Welle** entsteht durch Überlagerung zweier gleicher Wellen, die in entgegengesetzte
Richtungen laufen. Sie hat **ortsfeste** Knoten und Bäuche. Benachbarte Knoten liegen $\lambda/2$
auseinander, von einem Knoten zum nächsten Bauch sind es $\lambda/4$. Dabei ist $\lambda$ die Wellenlänge
der beiden laufenden Wellen.

**Beispiel:** die schwingende Gitarrensaite. Die Enden sind Knoten, in der Mitte liegt ein Bauch.

**Kein Beispiel:** eine Welle, die vom Ufer weg über den See läuft. Ihre Berge wandern, es gibt keine
Punkte, die dauernd in Ruhe bleiben. Das ist eine **laufende** Welle.
:::

```aufgabe
id: p8-5-vorhersage
art: check
titel: "Vorhersage: Was bleibt in Ruhe?"
niveau: 1
angabe: |
  Im Widget laufen zwei gleiche Wellen mit $\lambda = 4\,\text{m}$ gegeneinander. Was erwartest du für die Summe, wenn du die Animation startest?
teile:
  - typ: auswahl
    optionen:
      - "Die Summe läuft mit doppelter Geschwindigkeit nach rechts."
      - "Es gibt feste Punkte im Abstand von 2 m, die dauernd in Ruhe bleiben."
      - "Die Summe ist überall null, weil sich die Wellen aufheben."
      - "Die Summe läuft nach links, weil die zweite Welle nach links läuft."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Zwei gleich schnelle, entgegengesetzt laufende Wellen schieben das Muster in keine Richtung. Es entsteht eine stehende Welle.
      - wert: 2
        meldung: Die Wellen löschen sich nur an bestimmten Stellen dauernd aus, den Knoten. Dazwischen schwingt die Summe sogar stärker als jede Einzelwelle.
      - wert: 3
        meldung: Keine der beiden Richtungen ist bevorzugt, beide Wellen sind gleich stark. Das Muster bleibt stehen.
hinweise:
  - Knoten liegen im Abstand einer halben Wellenlänge.
loesung: |
  Die beiden gegenläufigen Wellen bilden eine stehende Welle. Ihre Knoten bleiben dauernd in Ruhe.
  ---
  Benachbarte Knoten liegen $\lambda/2 = 2\,\text{m}$ auseinander.
```

```widget
name: wellen
titel: Stehende Welle aus hin- und rücklaufender Welle
props:
  modus: raum
  A1: 1
  A2: 1
  lambda1: 4
  lambda2: 4
  f1: 0.5
  f2: 0.5
  gegenlaeufig: true
  xmax: 8
```

**Beobachte:** Die beiden gestrichelten Wellen laufen gegeneinander. Ihre Summe schwingt an festen Stellen auf
und ab. **Erkläre:** An den Knoten bei $x = 1$, $3$, $5$ und $7\,\text{m}$ treffen die beiden Wellen zu jeder
Zeit gegenphasig zusammen. Genau in der Mitte dazwischen, bei $x = 0$, $2$, $4$, $6$ und $8\,\text{m}$, liegen
die Bäuche. Nimm das Häkchen „Welle 2 läuft in −x-Richtung“ heraus. Die Summe wird wieder
eine laufende Welle.

### Stehend oder laufend: der entscheidende Unterschied

Die beiden Wellenarten unterscheiden sich in vier Punkten. Präge sie dir gut ein, sie werden gern geprüft.

1. **Bewegung des Musters:** Die Berge einer laufenden Welle wandern mit $c$. Das Muster der stehenden Welle
   bleibt am Ort. Es wird nur größer und kleiner und klappt um.
2. **Amplitude:** Bei der laufenden Welle schwingen alle Punkte gleich weit aus. Bei der stehenden Welle hängt
   die Amplitude vom Ort ab, von null im Knoten bis zum Höchstwert im Bauch.
3. **Phase:** Bei der laufenden Welle schwingt jeder Punkt etwas später als sein Vorgänger. Bei der stehenden
   Welle schwingen alle Punkte zwischen zwei Knoten im Gleichtakt. Jenseits eines Knotens schwingen sie genau
   gegenphasig.
4. **Energie:** Eine laufende Welle transportiert Energie. Eine stehende Welle transportiert im Mittel
   **keine**, denn die beiden Teilwellen tragen gleich viel Energie in entgegengesetzte Richtungen. Die Energie
   pendelt nur zwischen Bewegung und Verformung hin und her.

### Die schwingende Saite

Eine Saite der Länge $L$ ist an beiden Enden eingespannt. Dort kann sie sich nicht bewegen, also liegen dort
**Knoten**. Eine stehende Welle passt nur hinein, wenn eine ganze Zahl von halben Wellenlängen genau die
Saitenlänge ergibt:
$$L = n\cdot\frac{\lambda_n}{2}, \qquad n = 1, 2, 3, \dots$$
Dabei ist $\lambda_n$ die Wellenlänge der $n$-ten Schwingungsform. Löst man nach $\lambda_n$ auf und setzt
$f = c/\lambda$ ein, folgt

:::satz[Eigenfrequenzen einer beidseitig eingespannten Saite]
$$f_n = n\cdot\frac{c}{2L}, \qquad n = 1, 2, 3, \dots$$
Dabei ist $c$ die Wellengeschwindigkeit auf der Saite, $L$ die schwingende Länge und $n$ die Anzahl der
Bäuche. Die tiefste Frequenz $f_1 = c/(2L)$ heißt **Grundfrequenz** oder **Grundton**. Die Frequenzen
$f_2 = 2f_1$, $f_3 = 3f_1, \dots$ heißen **Obertöne**. Alle zusammen heißen **Teiltöne** oder **Harmonische**.
:::

Achtung bei der Zählung: Der erste Oberton ist der zweite Teilton, also $n = 2$.

```plot
x: [0, 1]
y: [-1.4, 1.4]
hoehe: 280
achsen: { x: "x / L", y: "Auslenkung" }
graphen:
  - { f: "sin(pi*x)", label: "n = 1", farbe: 0 }
  - { f: "-sin(pi*x)", farbe: 0, gestrichelt: true }
  - { f: "0.8*sin(2*pi*x)", label: "n = 2", farbe: 1 }
  - { f: "-0.8*sin(2*pi*x)", farbe: 1, gestrichelt: true }
  - { f: "0.6*sin(3*pi*x)", label: "n = 3", farbe: 2 }
  - { f: "-0.6*sin(3*pi*x)", farbe: 2, gestrichelt: true }
beschriftung: "Die ersten drei Schwingungsformen einer beidseitig eingespannten Saite, jeweils mit den beiden äußersten Lagen (durchgezogen und gestrichelt). Grundschwingung mit einem Bauch, n = 2 mit zwei Bäuchen und einem Knoten in der Mitte, n = 3 mit drei Bäuchen. An beiden Enden liegen Knoten."
```

:::beispiel[Die A-Saite einer Geige]
Die A-Saite einer Geige schwingt auf $L = 32{,}5\,\text{cm}$ und klingt im Grundton mit $440\,\text{Hz}$. Wie
schnell laufen die Wellen auf der Saite, und welche Frequenzen haben die ersten beiden Obertöne?

**Schritt 1, Modell:** Im Grundton passt eine halbe Wellenlänge auf die Saite, also
$\lambda_1 = 2L = 0{,}650\,\text{m}$.

**Schritt 2, Geschwindigkeit:** $c = \lambda_1 f_1 = 0{,}650\,\text{m}\cdot 440\,\text{s}^{-1} = 286\,\text{m/s}$.

**Schritt 3, Obertöne:** $f_2 = 2\cdot 440\,\text{Hz} = 880\,\text{Hz}$ und $f_3 = 3\cdot 440\,\text{Hz} = 1320\,\text{Hz}$.

**Antwort:** Die Wellen laufen mit $286\,\text{m/s}$. Die ersten Obertöne liegen bei $880$ und
$1320\,\text{Hz}$. Die Saite schwingt meist in vielen dieser Formen gleichzeitig. Ihre Mischung bestimmt den
Klang der Geige.
:::

:::achtung[Fehler: Wellenlänge gleich Saitenlänge gesetzt]
Eine Saite ist $0{,}60\,\text{m}$ lang, die Wellen laufen mit $240\,\text{m/s}$. Ein Schüler rechnet:
„$\lambda = L = 0{,}60\,\text{m}$, also $f_1 = 240 : 0{,}60\,\text{Hz} = 400\,\text{Hz}$.“

Das ist falsch. Im Grundton liegt nur **eine halbe** Wellenlänge auf der Saite: Knoten, Bauch, Knoten.
Also $\lambda_1 = 2L = 1{,}20\,\text{m}$ und $f_1 = 240 : 1{,}20\,\text{Hz} = 200\,\text{Hz}$. Zeichne dir die
Grundschwingung auf, dann siehst du es sofort.
:::

Mit $c = \sqrt{F/\mu}$ aus dem Abschnitt
[Wellenlänge, Frequenz und Ausbreitungsgeschwindigkeit](/lernen/physik1/wellen-akustik/wellenlaenge-frequenz-und-ausbreitungsgeschwindigkeit)
verstehst du, wie man ein Saiteninstrument stimmt und spielt:

- **Länge verkürzen** (Finger aufs Griffbrett): $f_1 = c/(2L)$ steigt. Halbe Länge ergibt doppelte Frequenz,
  das ist eine Oktave höher.
- **Spannkraft erhöhen** (am Wirbel drehen): $c$ und damit $f_1$ steigen. Doppelte Frequenz verlangt die
  vierfache Kraft.
- **Dickere, schwerere Saite** (größeres $\mu$): $c$ und $f_1$ sinken. Darum sind Basssaiten dick und oft mit
  Draht umwickelt.

```aufgabe
id: p8-5-greifen-check
art: check
titel: Den Finger aufs Griffbrett
niveau: 1
angabe: |
  Eine leere Gitarrensaite klingt mit $110\,\text{Hz}$. Du drückst sie so auf das Griffbrett, dass nur noch zwei Drittel ihrer Länge schwingen. Spannkraft und Saite bleiben gleich. Welche Frequenz hat der Grundton jetzt?
teile:
  - typ: zahl
    loesung: "110*3/2"
    einheit: "Hz"
    anzeige: '165'
    fehler:
      - wert: "110*2/3"
        meldung: Eine kürzere Saite klingt **höher**, nicht tiefer. Die Grundfrequenz ist umgekehrt proportional zur Länge, $f_1 = c/(2L)$.
hinweise:
  - 'In $f_1 = c/(2L)$ steht die Länge im Nenner.'
loesung: |
  Bei gleichem $c$ ist $f_1 = c/(2L)$ umgekehrt proportional zu $L$. Zwei Drittel der Länge ergeben das $\tfrac32$-fache der Frequenz.
  ---
  $f_1' = 110\,\text{Hz}\cdot\tfrac32 = 165\,\text{Hz}$. Das ist musikalisch eine Quinte über dem leeren Ton.
```

Eine Saite allein ist sehr leise, weil sie kaum Luft bewegt. Erst der hölzerne Körper der Gitarre oder Geige
strahlt den Klang ab. Er wird über den Steg zum Mitschwingen gezwungen, eine erzwungene Schwingung wie in der Lektion
[Erzwungene Schwingungen und Resonanz](/lernen/physik1/schwingungen/erzwungene-schwingungen-und-resonanz).

### Pfeifen und Luftsäulen

In Blasinstrumenten und Orgelpfeifen schwingt die **Luftsäule** im Rohr, und zwar longitudinal. Für die
Randbedingungen gilt:

- An einem **offenen** Ende kann die Luft frei hin und her schwingen. Dort liegt ein **Bauch**.
- An einem **geschlossenen** Ende kann sie sich nicht bewegen. Dort liegt ein **Knoten**.

Daraus folgen zwei Pfeifentypen.

- **Offene Pfeife** (beide Enden offen, zum Beispiel die Querflöte): Bauch, Knoten, Bauch. Auf die Länge
  passen wie bei der Saite ganze Vielfache von $\lambda/2$. Also $f_n = n\cdot\dfrac{c}{2L}$ mit allen
  Harmonischen.
- **Gedackte Pfeife** (ein Ende geschlossen, zum Beispiel die Panflöte): Knoten am geschlossenen, Bauch am
  offenen Ende. Auf die Länge passen $\lambda/4$, $3\lambda/4$, $5\lambda/4$ und so weiter. Also
  $f = (2n - 1)\cdot\dfrac{c}{4L}$ mit $n = 1, 2, 3, \dots$ Es gibt nur die ungeraden Vielfachen des Grundtons.

Dabei ist $c$ hier die Schallgeschwindigkeit in Luft und $L$ die Länge der Pfeife. Der Grundton einer gedackten
Pfeife liegt eine Oktave tiefer als bei einer offenen Pfeife gleicher Länge.

```plot
x: [0, 1]
y: [-1.3, 1.3]
hoehe: 240
achsen: { x: "x / L (links geschlossen, rechts offen)", y: "Bewegung der Luft" }
graphen:
  - { f: "sin(pi*x/2)", label: "Grundton", farbe: 0 }
  - { f: "-sin(pi*x/2)", farbe: 0, gestrichelt: true }
  - { f: "0.7*sin(3*pi*x/2)", label: "3·f₁", farbe: 1 }
  - { f: "-0.7*sin(3*pi*x/2)", farbe: 1, gestrichelt: true }
beschriftung: "Gedackte Pfeife: links das geschlossene Ende mit einem Knoten der Luftbewegung, rechts das offene Ende mit einem Bauch. Im Grundton passt eine Viertelwellenlänge in das Rohr (blau), in der nächsten Eigenschwingung drei Viertel (orange), mit dreifacher Frequenz."
```

:::beispiel[Eine gedackte Orgelpfeife]
Eine gedackte Orgelpfeife ist $0{,}85\,\text{m}$ lang ($c = 340\,\text{m/s}$). Berechne ihren Grundton und die
nächste Eigenfrequenz. Wie klänge eine offene Pfeife gleicher Länge?

**Schritt 1, gedackt, Grundton:** Knoten am verschlossenen Ende, Bauch am offenen Ende, also $L = \lambda/4$ und $\lambda = 4L = 3{,}40\,\text{m}$.
$f_1 = \dfrac{c}{4L} = \dfrac{340\,\text{m/s}}{3{,}40\,\text{m}} = 100\,\text{Hz}$.

**Schritt 2, nächste Eigenfrequenz:** Die nächste Schwingungsform hat $L = 3\lambda/4$, also das Dreifache:
$300\,\text{Hz}$. Eine Schwingung mit $200\,\text{Hz}$ gibt es nicht, denn dann läge am offenen Ende ein Knoten.

**Schritt 3, offen:** $\lambda = 2L = 1{,}70\,\text{m}$ und $f_1 = 340 : 1{,}70\,\text{Hz} = 200\,\text{Hz}$.

**Antwort:** Gedackt klingt die Pfeife mit $100\,\text{Hz}$, offen mit $200\,\text{Hz}$. Orgelbauer sparen mit
gedackten Pfeifen also die halbe Länge für tiefe Töne.
:::

:::achtung[Fehler: bei der gedackten Pfeife die geraden Obertöne mitgezählt]
Eine gedackte Pfeife hat den Grundton $170\,\text{Hz}$. Eine Schülerin schreibt: „Der erste Oberton liegt bei
$2\cdot 170\,\text{Hz} = 340\,\text{Hz}$.“

Das ist falsch. Bei $340\,\text{Hz}$ wäre die Länge eine halbe Wellenlänge, und dann müsste an beiden Enden
dasselbe liegen. Ein Ende ist aber geschlossen (Knoten), das andere offen (Bauch). Möglich sind nur ungerade
Vielfache, der erste Oberton liegt bei $3\cdot 170\,\text{Hz} = 510\,\text{Hz}$.
:::

Auch über eine Flasche zu blasen ergibt eine gedackte Pfeife. Je mehr Wasser in der Flasche ist, desto kürzer
ist die Luftsäule und desto höher der Ton. Bei echten Pfeifen schwingt die Luft etwas über das offene Ende
hinaus. Darum rechnet man genau genommen mit einer etwas größeren wirksamen Länge. In Aufgaben vernachlässigen
wir diese Endkorrektur, wenn nichts anderes gesagt ist.

```reflexion
frage: Eine stehende Welle entsteht aus zwei laufenden Wellen. Jede laufende Welle transportiert Energie. Warum transportiert die stehende Welle trotzdem keine Energie?
antwort: |
  Die beiden laufenden Wellen haben dieselbe Amplitude und laufen in entgegengesetzte Richtungen. Jede trägt gleich viel
  Energie pro Sekunde, aber in die jeweils andere Richtung. Im Mittel heben sich die beiden Energieströme auf. Die Energie
  bleibt im Bereich zwischen den Knoten gefangen und pendelt dort zwischen Bewegungsenergie und Verformungsenergie hin
  und her. Durch einen Knoten fließt keine Energie, denn dort bewegt sich nichts.
```

### Aufgaben zu stehenden Wellen

```aufgabe
id: p8-stehende-knoten
titel: Abstand der Knoten
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine stehende Welle hat die Wellenlänge $0{,}80\,\text{m}$. Wie weit sind zwei benachbarte Knoten voneinander entfernt?
teile:
  - typ: zahl
    loesung: "0.80/2"
    einheit: "m"
    anzeige: '0{,}4'
    fehler:
      - wert: "0.80"
        meldung: Eine ganze Wellenlänge ist der Abstand von einem Knoten zum **übernächsten**. Benachbarte Knoten liegen eine halbe Wellenlänge auseinander.
      - wert: "0.80/4"
        meldung: $\lambda/4$ ist der Abstand von einem Knoten zum nächsten **Bauch**. Von Knoten zu Knoten ist es doppelt so weit.
hinweise:
  - Zeichne eine Schwingungsform mit zwei Bäuchen und zähle, wie viele halbe Wellenlängen sie lang ist.
loesung: |
  **Ansatz:** Zwischen zwei benachbarten Knoten liegt genau ein Bauch, also eine halbe Wellenlänge.
  ---
  $d = \lambda/2 = 0{,}80\,\text{m} : 2 = 0{,}40\,\text{m}$.
```

```aufgabe
id: p8-saite-grundton
titel: Grundton einer Saite
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Auf einer $70\,\text{cm}$ langen, an beiden Enden eingespannten Saite breiten sich Wellen mit $308\,\text{m/s}$ aus. Wie groß ist die Grundfrequenz?
teile:
  - typ: zahl
    loesung: "308/(2*0.70)"
    einheit: "Hz"
    anzeige: '220'
    fehler:
      - wert: "308/0.70"
        meldung: Du hast $\lambda = L$ gesetzt. Im Grundton liegt nur eine halbe Wellenlänge auf der Saite, also $\lambda = 2L$.
      - wert: "308/70"
        meldung: Rechne die Länge in Meter um, $70\,\text{cm} = 0{,}70\,\text{m}$. Denke außerdem an $\lambda = 2L$.
hinweise:
  - 'Im Grundton gilt $L = \lambda/2$.'
loesung: |
  **Ansatz:** Grundschwingung: Knoten an beiden Enden, ein Bauch in der Mitte. Also $\lambda_1 = 2L = 1{,}40\,\text{m}$.
  ---
  $f_1 = \dfrac{c}{\lambda_1} = \dfrac{308\,\text{m/s}}{1{,}40\,\text{m}} = 220\,\text{Hz}$. Das ist der Ton a eine Oktave unter dem Kammerton.
```

```aufgabe
id: p8-saite-obertoene
titel: Obertöne zählen
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Die Grundfrequenz einer Saite ist $147\,\text{Hz}$. Welche Frequenz hat ihr **zweiter Oberton**?
teile:
  - typ: zahl
    loesung: "3*147"
    einheit: "Hz"
    anzeige: '441'
    fehler:
      - wert: "2*147"
        meldung: Das ist der **erste** Oberton. Der Grundton ist der erste Teilton ($n = 1$), der erste Oberton der zweite Teilton ($n = 2$). Der zweite Oberton ist also $n = 3$.
      - wert: "147+2"
        meldung: Obertöne sind Vielfache der Grundfrequenz, nicht um wenige Hertz verschoben.
hinweise:
  - 'Der Grundton ist $n = 1$, der erste Oberton $n = 2$. Welches $n$ hat der zweite Oberton?'
loesung: |
  **Zählung:** Grundton $n = 1$, erster Oberton $n = 2$, zweiter Oberton $n = 3$.
  ---
  $f_3 = 3\cdot 147\,\text{Hz} = 441\,\text{Hz}$.
```

```aufgabe
id: p8-pfeife-offen
titel: Offene und gedackte Pfeife
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine Orgelpfeife ist $50\,\text{cm}$ lang ($c = 340\,\text{m/s}$). Berechne die Grundfrequenz, wenn sie an beiden Enden offen ist, und wenn sie an einem Ende geschlossen (gedackt) ist.
teile:
  - typ: zahl
    label: offen
    loesung: "340/(2*0.50)"
    einheit: "Hz"
    anzeige: '340'
    fehler:
      - wert: "340/0.50"
        meldung: Du hast $\lambda = L$ gesetzt. Bei der offenen Pfeife liegt im Grundton eine halbe Wellenlänge im Rohr, Bauch, Knoten, Bauch. Also $\lambda = 2L$.
  - typ: zahl
    label: gedackt
    loesung: "340/(4*0.50)"
    einheit: "Hz"
    anzeige: '170'
    fehler:
      - wert: "340/(2*0.50)"
        meldung: Das ist die Formel der offenen Pfeife. Bei der gedackten liegt ein Knoten am geschlossenen und ein Bauch am offenen Ende. Das ist nur eine Viertelwellenlänge, $\lambda = 4L$.
hinweise:
  - Überlege für jeden Typ, was an den Enden liegt, Knoten oder Bauch.
  - 'Offen: $L = \lambda/2$. Gedackt: $L = \lambda/4$.'
loesung: |
  **Ansatz:** Offene Enden sind Bäuche, geschlossene Enden Knoten. Daraus folgt, welcher Bruchteil einer Wellenlänge in das Rohr passt.
  ---
  **Offen:** $\lambda = 2L = 1{,}0\,\text{m}$, $f = \dfrac{340\,\text{m/s}}{1{,}0\,\text{m}} = 340\,\text{Hz}$.
  ---
  **Gedackt:** $\lambda = 4L = 2{,}0\,\text{m}$, $f = \dfrac{340\,\text{m/s}}{2{,}0\,\text{m}} = 170\,\text{Hz}$, eine Oktave tiefer.
```

```aufgabe
id: p8-5-stehend-laufend
titel: Stehende oder laufende Welle?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Aussagen gelten für eine **stehende** Welle auf einer Saite? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Alle Punkte zwischen zwei benachbarten Knoten schwingen im Gleichtakt."
      - "Die Wellenberge wandern mit der Geschwindigkeit c entlang der Saite."
      - "Die Amplitude hängt vom Ort ab und ist in den Knoten null."
      - "Sie transportiert Energie von einem Ende der Saite zum anderen."
      - "Sie entsteht aus zwei gleichen Wellen, die gegeneinander laufen."
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: Das Muster einer stehenden Welle wandert nicht. Die Berge bleiben am Ort und klappen nur zwischen oben und unten um.
      - wert: [0, 2, 3, 4]
        meldung: Eine stehende Welle transportiert im Mittel keine Energie. Die beiden Teilwellen tragen gleich viel Energie in entgegengesetzte Richtungen.
      - wert: [2, 4]
        meldung: Auch die erste Aussage stimmt. Zwischen zwei Knoten schwingen alle Punkte gleichzeitig nach oben und gleichzeitig nach unten, nur verschieden weit.
hinweise:
  - Vergleiche Bewegung des Musters, Amplitude, Phase und Energie von stehender und laufender Welle.
  - Zwei der fünf Aussagen beschreiben eine laufende Welle.
loesung: |
  **Ansatz:** Eine stehende Welle besteht aus zwei gegenläufigen, gleichen Wellen. Ihr Muster bleibt am Ort.
  ---
  Richtig sind: Gleichtakt zwischen zwei Knoten, ortsabhängige Amplitude mit null in den Knoten, Entstehung aus zwei gegenläufigen Wellen.
  ---
  Falsch sind die wandernden Wellenberge und der Energietransport. Beides kennzeichnet eine laufende Welle.
```

```aufgabe
id: p8-5-flasche
titel: Über eine Flasche blasen
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  In einer Flasche ist über dem Wasser eine Luftsäule von $20\,\text{cm}$ Länge. Bläst man über die Öffnung, schwingt sie wie eine gedackte Pfeife ($c = 340\,\text{m/s}$). Die Endkorrektur vernachlässigen wir.

  a) Wie hoch ist der Grundton?

  b) Man gießt Wasser nach, bis die Luftsäule nur noch $15\,\text{cm}$ lang ist. Wie hoch ist der Ton jetzt? Runde auf ganze Hz.
teile:
  - typ: zahl
    label: a) Grundton bei 20 cm
    loesung: "340/(4*0.20)"
    einheit: "Hz"
    anzeige: '425'
    fehler:
      - wert: "340/(2*0.20)"
        meldung: Das ist die Formel der offenen Pfeife. Die Flasche ist unten durch das Wasser geschlossen. Dort liegt ein Knoten, oben ein Bauch. Also $L = \lambda/4$.
  - typ: zahl
    label: b) Grundton bei 15 cm
    loesung: "340/(4*0.15)"
    einheit: "Hz"
    anzeige: '567'
    fehler:
      - wert: "340/(4*0.20)*0.15/0.20"
        meldung: Kürzere Luftsäule heißt **höherer** Ton, nicht tieferer. Die Frequenz ist umgekehrt proportional zur Länge.
hinweise:
  - Wo liegt in der Flasche ein Knoten, wo ein Bauch?
  - 'Gedackte Pfeife: $f_1 = c/(4L)$.'
loesung: |
  **Modell:** Unten begrenzt das Wasser die Luftsäule (Knoten), oben ist die offene Mündung (Bauch). Das ist eine gedackte Pfeife mit $f_1 = c/(4L)$.
  ---
  **a)** $f_1 = \dfrac{340\,\text{m/s}}{4\cdot 0{,}20\,\text{m}} = \dfrac{340\,\text{m/s}}{0{,}80\,\text{m}} = 425\,\text{Hz}$.
  ---
  **b)** $f_1 = \dfrac{340\,\text{m/s}}{4\cdot 0{,}15\,\text{m}} = 567\,\text{Hz}$. Der Ton steigt, weil die Luftsäule kürzer wird. Probe mit dem Verhältnis: $425\cdot\tfrac{20}{15} = 567$.
```

```aufgabe
id: p8-saite-wellengeschw
titel: Eine Saite stimmen
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine $63\,\text{cm}$ lange Saite hat eine Masse von $1{,}0\,\text{g}$ pro Meter und ist mit $80\,\text{N}$ gespannt.

  a) Berechne die Wellengeschwindigkeit auf der Saite. Runde auf eine Nachkommastelle.

  b) Berechne die Grundfrequenz. Runde auf eine Nachkommastelle.

  c) Um welchen Faktor muss man die Spannkraft erhöhen, damit der Ton eine Oktave höher wird?
teile:
  - typ: zahl
    label: a) Wellengeschwindigkeit
    loesung: "sqrt(80/1.0e-3)"
    einheit: "m/s"
    anzeige: '282{,}8'
    fehler:
      - wert: "sqrt(80/1.0)"
        meldung: Die Massenbelegung muss in kg/m eingesetzt werden. $1{,}0\,\text{g/m} = 1{,}0\cdot 10^{-3}\,\text{kg/m}$.
  - typ: zahl
    label: b) Grundfrequenz
    loesung: "sqrt(80/1.0e-3)/(2*0.63)"
    einheit: "Hz"
    anzeige: '224{,}5'
    fehler:
      - wert: "sqrt(80/1.0e-3)/0.63"
        meldung: Im Grundton ist $\lambda = 2L$, nicht $L$.
  - typ: zahl
    label: c) Faktor der Spannkraft
    loesung: "2^2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: Die Frequenz ist proportional zu $c = \sqrt{F/\mu}$, also zur **Wurzel** der Kraft. Für die doppelte Frequenz braucht man die vierfache Kraft.
hinweise:
  - 'Rechne $\mu$ in kg/m um und verwende $c = \sqrt{F/\mu}$.'
  - 'Im Grundton gilt $f_1 = c/(2L)$. Eine Oktave höher heißt doppelte Frequenz.'
gefuehrt:
  - text: Rechne die Massenbelegung in kg/m um.
    teil: { typ: zahl, loesung: "1.0e-3" }
    erklaerung: $1{,}0\,\text{g/m} = 1{,}0\cdot 10^{-3}\,\text{kg/m}$, weil ein Gramm ein Tausendstel Kilogramm ist.
  - text: Berechne die Wellengeschwindigkeit in m/s.
    teil: { typ: zahl, loesung: "sqrt(80/1.0e-3)" }
    erklaerung: |
      $c = \sqrt{80\,\text{N} : 10^{-3}\,\text{kg/m}} = \sqrt{80\,000\,\text{m}^2/\text{s}^2} = 282{,}8\,\text{m/s}$.
  - text: Berechne die Grundfrequenz in Hz.
    teil: { typ: zahl, loesung: "sqrt(80/1.0e-3)/(2*0.63)" }
    erklaerung: |
      $f_1 = c/(2L) = 282{,}8\,\text{m/s} : 1{,}26\,\text{m} = 224{,}5\,\text{Hz}$.
  - text: Überlege, wie die Frequenz von der Kraft abhängt.
    erklaerung: $f_1 \propto c \propto \sqrt F$. Doppelte Frequenz verlangt $\sqrt F$ doppelt, also $F$ vierfach.
loesung: |
  **a)** $\mu = 1{,}0\cdot 10^{-3}\,\text{kg/m}$, also $c = \sqrt{\dfrac{80\,\text{N}}{1{,}0\cdot 10^{-3}\,\text{kg/m}}} = 282{,}8\,\text{m/s}$.
  ---
  **b)** Grundton mit $\lambda_1 = 2L = 1{,}26\,\text{m}$: $f_1 = \dfrac{282{,}8\,\text{m/s}}{1{,}26\,\text{m}} = 224{,}5\,\text{Hz}$.
  ---
  **c)** $f_1 \propto \sqrt F$. Für die doppelte Frequenz braucht man $\sqrt{F'} = 2\sqrt F$, also $F' = 4F = 320\,\text{N}$.
  ---
  **Deutung:** Das ist eine enorme Kraft. Deshalb verkürzt man beim Spielen lieber die Saite: Halbe Länge ergibt ebenfalls die Oktave.
```

```aufgabe
id: p8-5-kundt
titel: Schallgeschwindigkeit aus Knotenabständen messen
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  In einem Rohr wird mit einem Lautsprecher eine stehende Schallwelle erzeugt. Die Frequenz ist $f = (1000 \pm 5)\,\text{Hz}$. Mit einem kleinen Mikrofon findest du fünf aufeinanderfolgende Knoten. Der Abstand zwischen dem ersten und dem fünften Knoten beträgt $(68{,}0 \pm 0{,}4)\,\text{cm}$.

  a) Wie groß ist die Wellenlänge in m?

  b) Wie groß ist die Schallgeschwindigkeit?

  c) Wie groß ist deren absolute Unsicherheit? Addiere dazu die relativen Unsicherheiten von Wellenlänge und Frequenz. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Wellenlänge
    loesung: "0.680/4*2"
    einheit: "m"
    anzeige: '0{,}34'
    fehler:
      - wert: "0.680/5*2"
        meldung: Zwischen fünf Knoten liegen nur **vier** Abstände. Zähle die Lücken, nicht die Knoten.
      - wert: "0.680/4"
        meldung: Ein Knotenabstand ist nur eine **halbe** Wellenlänge. Die Wellenlänge ist doppelt so groß.
  - typ: zahl
    label: b) Schallgeschwindigkeit
    loesung: "0.680/4*2*1000"
    einheit: "m/s"
    anzeige: '340'
    fehler:
      - wert: "0.680/4*1000"
        meldung: Du hast den Knotenabstand als Wellenlänge genommen. Er ist aber nur $\lambda/2$.
  - typ: zahl
    label: c) absolute Unsicherheit
    loesung: "340*(0.4/68.0 + 5/1000)"
    einheit: "m/s"
    toleranz: 0.05
    anzeige: '3{,}7'
    fehler:
      - wert: "0.4+5"
        meldung: Absolute Unsicherheiten in cm und Hz kann man nicht addieren. Bei einem Produkt addiert man die **relativen** Unsicherheiten.
      - wert: "340*(0.4/68.0)"
        meldung: |
          Du hast die Unsicherheit der Frequenz vergessen. Sie beträgt $5 : 1000 = 0{,}5\,\%$.
hinweise:
  - Zwischen fünf Knoten liegen vier halbe Wellenlängen.
  - 'Danach $c = \lambda f$. Für die Unsicherheit: relative Unsicherheiten $0{,}4/68{,}0$ und $5/1000$ addieren und mit $c$ multiplizieren.'
loesung: |
  **Modell:** Benachbarte Knoten liegen $\lambda/2$ auseinander. Zwischen dem ersten und fünften Knoten liegen vier solche Abstände.
  ---
  **a)** $4\cdot\dfrac{\lambda}{2} = 0{,}680\,\text{m}$, also $\lambda = 2\cdot\dfrac{0{,}680\,\text{m}}{4} = 0{,}340\,\text{m}$.
  ---
  **b)** $c = \lambda f = 0{,}340\,\text{m}\cdot 1000\,\text{s}^{-1} = 340\,\text{m/s}$.
  ---
  **c)** Relative Unsicherheit der Länge: $0{,}4 : 68{,}0 = 0{,}59\,\%$. Der Faktor $2/4$ ist exakt und ändert die relative Unsicherheit nicht. Relative Unsicherheit der Frequenz: $5 : 1000 = 0{,}50\,\%$. Summe $1{,}09\,\%$. Also $\Delta c = 340\,\text{m/s}\cdot 0{,}0109 = 3{,}7\,\text{m/s}$.
  ---
  **Ergebnis:** $c = (340 \pm 4)\,\text{m/s}$. Wiederholen kannst du Messunsicherheiten im [Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung) im Kapitel Größen, Einheiten, Messen.
```

## Schwebung: zwei fast gleiche Töne

```aufgabe
id: p8-6-check
art: check
titel: "Vorwissen: Periodendauer"
niveau: 1
angabe: |
  Die Lautstärke eines Tons schwankt $2{,}5$-mal pro Sekunde. Wie lange dauert eine Schwankung, also von einem lauten Moment bis zum nächsten? Antwort in s.
teile:
  - typ: zahl
    loesung: "1/2.5"
    einheit: "s"
    anzeige: '0{,}4'
    fehler:
      - wert: "2.5"
        meldung: $2{,}5$ ist die Zahl der Schwankungen pro Sekunde, also eine Frequenz. Die Dauer einer Schwankung ist ihr Kehrwert.
hinweise:
  - 'Es gilt $T = 1/f$.'
loesung: |
  Eine Häufigkeit pro Sekunde ist eine Frequenz. Die Dauer eines Vorgangs ist ihr Kehrwert, $T = 1/f$.
  ---
  $T = 1 : 2{,}5\,\text{s}^{-1} = 0{,}4\,\text{s}$. Wiederholen: [Periodische Bewegungen: Amplitude, Periode und Frequenz](/lernen/physik1/schwingungen/periodische-bewegungen-amplitude-periode-und-frequenz).
```

Schlag zwei Stimmgabeln an, deren Frequenzen sich nur um wenige Hertz unterscheiden. Du hörst einen Ton, dessen
Lautstärke regelmäßig an- und abschwillt: „wua, wua, wua“. Dieses Pulsieren heißt **Schwebung**. Musiker nutzen
es täglich, um ihre Instrumente zu stimmen.

### Woher das Pulsieren kommt

Die Schwebung ist ein Sonderfall der Überlagerung. Wir betrachten zwei Schwingungen gleicher Amplitude mit den
Frequenzen $f_1$ und $f_2$ an **einem** Ort, zum Beispiel an deinem Trommelfell.

Ein Zahlenbeispiel zeigt die Idee. Die eine Stimmgabel schwingt mit $440\,\text{Hz}$, die andere mit
$443\,\text{Hz}$. Starten beide im Gleichtakt, verstärken sie sich. Pro Sekunde macht die zweite Gabel
$3$ Schwingungen mehr als die erste. Nach $1/6$ Sekunde ist sie also eine halbe Schwingung voraus. Jetzt trifft
Berg auf Tal, die beiden löschen sich fast aus, es ist leise. Nach $1/3$ Sekunde ist sie eine ganze Schwingung
voraus. Die beiden sind wieder im Gleichtakt, es ist laut. Dieses Spiel wiederholt sich $3$-mal pro Sekunde.

:::satz[Schwebungsfrequenz]
Überlagern sich zwei Schwingungen mit den nahe beieinanderliegenden Frequenzen $f_1$ und $f_2$, so hört man einen
Ton der mittleren Frequenz $\tfrac12(f_1 + f_2)$, dessen Lautstärke mit der **Schwebungsfrequenz**
$$f_S = |f_1 - f_2|$$
an- und abschwillt. Die Zeit von einem Lautstärkemaximum zum nächsten ist die Schwebungsdauer $T_S = 1/f_S$.
:::

Die Betragsstriche $|\ |$ sorgen dafür, dass $f_S$ immer positiv ist, egal welche Frequenz größer ist.

:::beispiel[Zwei Stimmgabeln]
Zwei Stimmgabeln mit $440\,\text{Hz}$ und $443\,\text{Hz}$ werden gleichzeitig angeschlagen. Berechne
Schwebungsfrequenz, Schwebungsdauer und die Frequenz des gehörten Tons.

**Schritt 1, Schwebungsfrequenz:** $f_S = |440\,\text{Hz} - 443\,\text{Hz}| = 3\,\text{Hz}$.

**Schritt 2, Schwebungsdauer:** $T_S = \dfrac{1}{f_S} = \dfrac{1}{3\,\text{s}^{-1}} = 0{,}33\,\text{s}$.

**Schritt 3, gehörter Ton:** Die Tonhöhe ist die mittlere Frequenz,
$\tfrac12(440 + 443)\,\text{Hz} = 441{,}5\,\text{Hz}$.

**Antwort:** Man hört einen Ton von $441{,}5\,\text{Hz}$, dessen Lautstärke dreimal pro Sekunde anschwillt, also
alle $0{,}33\,\text{s}$.
:::

```plot
x: [0, 1.5]
y: [-2.4, 2.4]
hoehe: 260
achsen: { x: "t in s", y: "y" }
graphen:
  - { f: "sin(2*pi*10*x) + sin(2*pi*12*x)", farbe: 0 }
  - { f: "2*cos(pi*2*x)", farbe: 1, gestrichelt: true }
  - { f: "-2*cos(pi*2*x)", farbe: 1, gestrichelt: true }
beschriftung: "Schwebung aus zwei Schwingungen mit 10 Hz und 12 Hz (zur besseren Sichtbarkeit sehr tiefe Frequenzen). Die blaue Summe schwingt schnell, ihre Amplitude folgt der gestrichelten Hüllkurve. Die Lautstärke ist bei t = 0; 0,5; 1,0 und 1,5 s am größten, also zweimal pro Sekunde: f_S = 12 Hz − 10 Hz = 2 Hz."
```

### Die mathematische Begründung

Mit dem Additionstheorem für die Summe zweier Sinusfunktionen aus dem Mathematikkurs
([Trigonometrische Identitäten](/lernen/mathe3/trigonometrie/trigonometrische-identitaeten) im Kapitel Trigonometrie) gilt
$$\sin a + \sin b = 2\sin\frac{a + b}{2}\cdot\cos\frac{a - b}{2}.$$
Setzt man $a = 2\pi f_1 t$ und $b = 2\pi f_2 t$ ein, folgt für zwei Schwingungen der Amplitude $A$
$$y(t) = \underbrace{2A\cos\left(2\pi\,\frac{f_1 - f_2}{2}\,t\right)}_{\text{langsam veränderliche Amplitude}}\cdot\sin\left(2\pi\,\frac{f_1 + f_2}{2}\,t\right).$$
Der Sinusfaktor schwingt schnell mit der mittleren Frequenz, das ist der Ton, den du hörst. Der Kosinusfaktor
ändert sich langsam und wirkt wie eine Amplitude.

Jetzt kommt die feine Stelle, die fast alle zuerst übersehen. Der Kosinusfaktor hat die Frequenz
$\tfrac12|f_1 - f_2|$, also nur die **halbe** Schwebungsfrequenz. Laut ist es aber immer dann, wenn der Kosinus
groß ist, egal ob bei $+1$ oder bei $-1$. Während einer Periode des Kosinus erreicht er $+1$ **und** $-1$, die
Lautstärke ist also zweimal maximal. Darum ist die Schwebungsfrequenz doppelt so groß wie die Frequenz des
Kosinusfaktors, $f_S = |f_1 - f_2|$.

:::achtung[Fehler: die Frequenz des Kosinusfaktors für die Schwebungsfrequenz gehalten]
Zwei Töne haben $440\,\text{Hz}$ und $443\,\text{Hz}$. Eine Schülerin liest aus dem Additionstheorem den Faktor
$\cos\left(2\pi\cdot 1{,}5\,\text{Hz}\cdot t\right)$ ab und schreibt: „Die Lautstärke schwankt $1{,}5$-mal pro Sekunde.“

Das ist falsch. Der Kosinus hat zwar die Frequenz $1{,}5\,\text{Hz}$. Das Ohr hört aber den **Betrag** der
Amplitude, und der wird pro Kosinusperiode zweimal maximal. Die Lautstärke schwankt also
$2\cdot 1{,}5 = 3$-mal pro Sekunde, wie $f_S = |f_1 - f_2|$ sagt.
:::

```aufgabe
id: p8-6-vorhersage
art: check
titel: "Vorhersage: Was passiert, wenn die Frequenzen gleich werden?"
niveau: 1
angabe: |
  Im Widget überlagern sich zwei Schwingungen mit $f_1 = 10\,\text{Hz}$ und $f_2 = 11\,\text{Hz}$. Was passiert mit der Schwebung, wenn du $f_2$ langsam auf $10\,\text{Hz}$ verkleinerst?
teile:
  - typ: auswahl
    optionen:
      - "Das An- und Abschwellen wird immer langsamer und verschwindet bei gleichen Frequenzen."
      - "Das An- und Abschwellen wird immer schneller."
      - "Die Schwebung bleibt gleich, nur der Ton wird tiefer."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Schwebungsfrequenz ist der **Unterschied** der Frequenzen. Wird der Unterschied kleiner, wird auch die Schwebung langsamer.
      - wert: 2
        meldung: Die Schwebung hängt direkt vom Frequenzunterschied ab. Sie bleibt nicht gleich, wenn sich $f_2$ der Frequenz $f_1$ nähert.
hinweise:
  - 'Es gilt $f_S = |f_1 - f_2|$.'
loesung: |
  Mit $f_S = |f_1 - f_2|$ wird die Schwebung umso langsamer, je näher die Frequenzen beieinanderliegen.
  ---
  Bei gleichen Frequenzen ist $f_S = 0$. Es gibt kein Pulsieren mehr, nur einen gleichmäßigen Ton. Genau darauf achtet man beim Stimmen.
```

```widget
name: wellen
titel: Schwebung zweier Töne
props:
  modus: schwebung
  A1: 1
  A2: 1
  f1: 10
  f2: 11
  tmax: 2
```

**Beobachte:** Bei $10$ und $11\,\text{Hz}$ liegen die Lautstärkemaxima bei $t = 0$, $1$ und $2\,\text{s}$, also
eine Sekunde auseinander. Die Anzeige meldet $1\,\text{Hz}$. Stelle $f_2$ auf $12\,\text{Hz}$, dann liegen die Maxima
nur noch $0{,}5\,\text{s}$ auseinander. **Erkläre:** Der Unterschied hat sich
verdoppelt, also auch die Schwebungsfrequenz. Schiebe $f_2$ langsam auf $10\,\text{Hz}$ zurück und beobachte, wie
die Schwebung immer langsamer wird.

### Instrumente stimmen mit der Schwebung

Beim Stimmen spielt man den Ton des Instruments zusammen mit einem Referenzton, etwa einer Stimmgabel mit
$440\,\text{Hz}$. Hört man eine Schwebung, stimmen die Frequenzen nicht überein. Man dreht am Wirbel, bis die
Schwebung immer langsamer wird und schließlich verschwindet.

Die Schwebungsfrequenz verrät allerdings nur den **Betrag** des Unterschieds. Ob die Saite zu hoch oder zu tief ist,
sagt sie nicht. Das erfährt man erst, wenn man die Saite ein wenig verstellt und beobachtet, ob die Schwebung
schneller oder langsamer wird.

:::beispiel[Ist die Saite zu hoch oder zu tief?]
Eine Gitarrensaite und eine $440$-Hz-Stimmgabel erklingen zusammen. Man hört $2$ Schwebungen pro Sekunde. Nun spannt
man die Saite ein klein wenig stärker. Danach hört man nur noch $1$ Schwebung pro Sekunde. Welche Frequenz hatte die
Saite zuerst?

**Schritt 1, zwei Möglichkeiten:** Aus $f_S = 2\,\text{Hz}$ folgt $f = 440 - 2 = 438\,\text{Hz}$ oder
$f = 440 + 2 = 442\,\text{Hz}$.

**Schritt 2, was das Spannen bewirkt:** Mehr Spannkraft bedeutet eine größere Wellengeschwindigkeit und damit eine
**höhere** Frequenz.

**Schritt 3, entscheiden:** Wäre die Saite bei $442\,\text{Hz}$, entfernte sie sich durch das Spannen von
$440\,\text{Hz}$, und die Schwebung würde schneller. Sie wurde aber langsamer. Also lag die Saite unter der Stimmgabel.

**Antwort:** Die Saite hatte $438\,\text{Hz}$. Sie war zu tief, und man muss sie noch ein wenig weiter spannen.
:::

:::achtung[Fehler: nur eine der beiden Möglichkeiten betrachtet]
Ein Klavierstimmer hört zwischen einer Saite und einer $523$-Hz-Stimmgabel $4$ Schwebungen pro Sekunde. Ein Lehrling
sagt sofort: „Die Saite hat $527\,\text{Hz}$, sie ist zu hoch.“

Das ist voreilig. $f_S = 4\,\text{Hz}$ bedeutet nur $|f - 523\,\text{Hz}| = 4\,\text{Hz}$. Möglich sind
$527\,\text{Hz}$ **und** $519\,\text{Hz}$. Erst ein Versuch entscheidet: Man spannt die Saite ein wenig nach. Wird die
Schwebung langsamer, war sie zu tief.
:::

```reflexion
frage: Warum ist die Schwebungsfrequenz |f₁ − f₂| doppelt so groß wie die Frequenz des Kosinusfaktors im Additionstheorem? Erkläre es in zwei Sätzen.
antwort: |
  Der Kosinusfaktor wirkt wie eine langsam veränderliche Amplitude. Laut ist es immer dann, wenn sein Betrag groß ist, also
  sowohl bei +1 als auch bei −1. In einer Periode des Kosinus kommt beides einmal vor, deshalb gibt es pro Kosinusperiode zwei
  Lautstärkemaxima. Die Schwebungsfrequenz ist daher das Doppelte von ½|f₁ − f₂|, also |f₁ − f₂|.
```

### Aufgaben zur Schwebung

```aufgabe
id: p8-schwebung
titel: Schwebungsfrequenz
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Zwei Stimmgabeln mit $440\,\text{Hz}$ und $444\,\text{Hz}$ werden gleichzeitig angeschlagen. Wie oft pro Sekunde schwankt die Lautstärke?
teile:
  - typ: zahl
    loesung: "444-440"
    einheit: "Hz"
    anzeige: '4'
    fehler:
      - wert: "(444-440)/2"
        meldung: Das ist die Frequenz des Kosinusfaktors im Additionstheorem. Die Lautstärke ist aber pro Kosinusperiode zweimal maximal. Die Schwebungsfrequenz ist der volle Unterschied.
      - wert: "(444+440)/2"
        meldung: Das ist die mittlere Frequenz, also die Tonhöhe, die man hört. Gefragt ist, wie oft die **Lautstärke** schwankt.
hinweise:
  - 'Die Schwebungsfrequenz ist $f_S = |f_1 - f_2|$.'
loesung: |
  **Ansatz:** Die Lautstärke schwankt mit der Schwebungsfrequenz $f_S = |f_1 - f_2|$.
  ---
  $f_S = |440\,\text{Hz} - 444\,\text{Hz}| = 4\,\text{Hz}$. Die Lautstärke schwillt viermal pro Sekunde an. Der gehörte Ton hat $442\,\text{Hz}$.
```

```aufgabe
id: p8-6-schwebungsdauer
titel: Wie lange dauert eine Schwebung?
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Zwei Orgelpfeifen klingen mit $330\,\text{Hz}$ und $335\,\text{Hz}$. Wie viel Zeit vergeht zwischen zwei Lautstärkemaxima? Antwort in s.
teile:
  - typ: zahl
    loesung: "1/(335-330)"
    einheit: "s"
    anzeige: '0{,}2'
    fehler:
      - wert: "335-330"
        meldung: $5\,\text{Hz}$ ist die Schwebungsfrequenz. Gefragt ist die Zeit zwischen zwei Maxima, also ihr Kehrwert.
      - wert: "2/(335-330)"
        meldung: Du hast die Periode des Kosinusfaktors berechnet. Zwischen zwei Lautstärkemaxima liegt nur die halbe Kosinusperiode, also $1/f_S$.
hinweise:
  - Berechne zuerst die Schwebungsfrequenz, dann ihren Kehrwert.
loesung: |
  **Schwebungsfrequenz:** $f_S = |330 - 335|\,\text{Hz} = 5\,\text{Hz}$.
  ---
  **Schwebungsdauer:** $T_S = \dfrac{1}{f_S} = \dfrac{1}{5\,\text{s}^{-1}} = 0{,}2\,\text{s}$.
```

```aufgabe
id: p8-schwebung-stimmen
titel: Gitarre stimmen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Gitarrensaite wird mit einer Stimmgabel ($440\,\text{Hz}$) verglichen. Man hört $3$ Schwebungen pro Sekunde. Spannt man die Saite etwas stärker, werden es mehr Schwebungen pro Sekunde. Welche Frequenz hatte die Saite ursprünglich?
teile:
  - typ: zahl
    loesung: "440+3"
    einheit: "Hz"
    anzeige: '443'
    fehler:
      - wert: "440-3"
        meldung: Bei $437\,\text{Hz}$ käme die Saite durch das Spannen näher an $440\,\text{Hz}$, und die Schwebung würde **langsamer**. Sie wird aber schneller.
      - wert: "3"
        meldung: $3\,\text{Hz}$ ist nur der Unterschied zur Stimmgabel. Gefragt ist die Frequenz der Saite selbst.
hinweise:
  - 'Möglich sind $437\,\text{Hz}$ oder $443\,\text{Hz}$.'
  - Was macht das Spannen mit der Frequenz der Saite? Kommt sie dadurch näher an $440\,\text{Hz}$ oder weiter weg?
gefuehrt:
  - text: Welche Frequenz hat die Saite, wenn sie **unter** der Stimmgabel liegt?
    teil: { typ: zahl, loesung: "440-3" }
    erklaerung: $440\,\text{Hz} - 3\,\text{Hz} = 437\,\text{Hz}$.
  - text: Welche Frequenz hat sie, wenn sie **über** der Stimmgabel liegt?
    teil: { typ: zahl, loesung: "440+3" }
    erklaerung: $440\,\text{Hz} + 3\,\text{Hz} = 443\,\text{Hz}$.
  - text: Was macht stärkeres Spannen mit der Frequenz?
    teil:
      typ: auswahl
      optionen: ["Sie steigt.", "Sie sinkt.", "Sie bleibt gleich."]
      richtig: [0]
    erklaerung: Mehr Spannkraft heißt größere Wellengeschwindigkeit $c = \sqrt{F/\mu}$ und damit höhere Frequenz.
  - text: Entscheide jetzt, welche der beiden Möglichkeiten zur Beobachtung passt.
    erklaerung: Die Schwebung wird schneller, die Saite entfernt sich also von $440\,\text{Hz}$. Steigt die Frequenz und entfernt sich dabei, lag sie schon darüber. Also $443\,\text{Hz}$.
loesung: |
  **Zwei Möglichkeiten:** Aus $f_S = 3\,\text{Hz}$ folgt $f = 437\,\text{Hz}$ oder $f = 443\,\text{Hz}$.
  ---
  **Wirkung des Spannens:** Mehr Spannkraft erhöht die Frequenz der Saite.
  ---
  **Entscheidung:** Bei $437\,\text{Hz}$ käme die Saite näher an $440\,\text{Hz}$ heran, die Schwebung würde langsamer. Sie wird aber schneller. Also war die Saite bei $443\,\text{Hz}$ und zu hoch. Man muss sie entspannen.
```

```aufgabe
id: p8-6-diagramm
titel: Schwebung im Diagramm
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Sensor zeichnet die Überlagerung zweier Schwingungen auf. Von der einen weißt du, dass sie die tiefere Frequenz hat, nämlich $f_1 = 20\,\text{Hz}$. Lies aus dem Diagramm die Schwebungsfrequenz ab und bestimme $f_2$.
plot:
  x: [0, 1]
  y: [-2.4, 2.4]
  hoehe: 240
  achsen: { x: "t in s", y: "y" }
  graphen:
    - { f: "sin(2*pi*20*x) + sin(2*pi*23*x)", farbe: 0 }
teile:
  - typ: zahl
    label: Schwebungsfrequenz
    loesung: "3"
    einheit: "Hz"
    anzeige: '3'
    fehler:
      - wert: "4"
        meldung: Zähle die **Abstände** zwischen den Lautstärkemaxima in einer Sekunde, nicht die Maxima selbst. Bei $t = 0$ und $t = 1\,\text{s}$ liegen beide Male Maxima.
      - wert: "1.5"
        meldung: Ein Maximum und das nächste Minimum sind nur eine halbe Schwebungsdauer voneinander entfernt. Miss von Maximum zu Maximum.
  - typ: zahl
    label: Frequenz f₂
    loesung: "20+3"
    einheit: "Hz"
    anzeige: '23'
    fehler:
      - wert: "20-3"
        meldung: Laut Angabe ist $f_1$ die **tiefere** Frequenz. Also liegt $f_2$ darüber.
hinweise:
  - Suche die Stellen, an denen die Kurve am weitesten ausschlägt. Wie viel Zeit liegt zwischen zweien davon?
  - 'Danach $f_2 = f_1 + f_S$, weil $f_2$ die höhere Frequenz ist.'
loesung: |
  **Ablesen:** Die Lautstärkemaxima liegen bei $t = 0$, $\tfrac13$, $\tfrac23$ und $1\,\text{s}$. Die Schwebungsdauer ist $T_S = \tfrac13\,\text{s}$.
  ---
  **Schwebungsfrequenz:** $f_S = \dfrac{1}{T_S} = 3\,\text{Hz}$.
  ---
  **Zweite Frequenz:** $|f_2 - 20\,\text{Hz}| = 3\,\text{Hz}$ und $f_2 > f_1$, also $f_2 = 23\,\text{Hz}$.
```

```aufgabe
id: p8-6-zwei-moeglichkeiten
titel: Zwei mögliche Frequenzen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Eine Flöte und eine Stimmgabel mit $512\,\text{Hz}$ erklingen zusammen. Man hört $6$ Schwebungen pro Sekunde. Welche Frequenzen kann die Flöte haben? Gib beide Werte an.
teile:
  - typ: menge
    loesung: ["506", "518"]
    fehler:
      - wert: ["518"]
        meldung: Es gibt noch eine zweite Möglichkeit. Die Schwebung verrät nur den **Betrag** des Unterschieds. Die Flöte kann auch $6\,\text{Hz}$ tiefer liegen.
      - wert: ["509", "515"]
        meldung: Du hast den Unterschied halbiert. Die Schwebungsfrequenz ist der volle Unterschied, $|f - 512\,\text{Hz}| = 6\,\text{Hz}$.
hinweise:
  - 'Die Schwebungsfrequenz ist $f_S = |f - 512\,\text{Hz}|$.'
  - Ein Betrag hat zwei Lösungen, eine über und eine unter $512$.
loesung: |
  **Ansatz:** $|f - 512\,\text{Hz}| = 6\,\text{Hz}$.
  ---
  **Zwei Lösungen:** $f = 512 + 6 = 518\,\text{Hz}$ oder $f = 512 - 6 = 506\,\text{Hz}$.
  ---
  **Deutung:** Ohne weiteren Versuch lässt sich nicht entscheiden, welche stimmt. Man müsste die Flöte ein wenig verstellen und beobachten, ob die Schwebung schneller oder langsamer wird.
```

```aufgabe
id: p8-6-dritte-gabel
titel: Eine unbekannte Stimmgabel mit zwei bekannten bestimmen
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Stimmgabel B hat eine unbekannte Frequenz. Zusammen mit Gabel A ($440\,\text{Hz}$) hört man $4$ Schwebungen pro Sekunde. Zusammen mit Gabel C ($452\,\text{Hz}$) hört man $8$ Schwebungen pro Sekunde. Welche Frequenz hat B?
teile:
  - typ: zahl
    loesung: "444"
    einheit: "Hz"
    anzeige: '444'
    fehler:
      - wert: "436"
        meldung: $436\,\text{Hz}$ passt zur Gabel A, aber nicht zu C. Mit C ergäbe es $|436 - 452| = 16$ Schwebungen pro Sekunde, nicht $8$.
      - wert: "460"
        meldung: $460\,\text{Hz}$ passt zur Gabel C, aber nicht zu A. Mit A ergäbe es $20$ Schwebungen pro Sekunde, nicht $4$.
hinweise:
  - Schreibe für jede bekannte Gabel die zwei möglichen Frequenzen von B auf.
  - Nur ein Wert kommt in beiden Listen vor.
loesung: |
  **Mit A:** $|f_B - 440| = 4$, also $f_B = 436\,\text{Hz}$ oder $444\,\text{Hz}$.
  ---
  **Mit C:** $|f_B - 452| = 8$, also $f_B = 444\,\text{Hz}$ oder $460\,\text{Hz}$.
  ---
  **Gemeinsamer Wert:** Nur $444\,\text{Hz}$ erfüllt beide Bedingungen. Probe: $444 - 440 = 4$ und $452 - 444 = 8$.
```

```aufgabe
id: p8-6-additionstheorem
titel: Schwebung mit dem Additionstheorem
niveau: 3
lernziel: 5
kompetenz: verstehen
angabe: |
  Zwei Schwingungen werden überlagert: $y = \sin(2\pi\cdot 100\,\text{Hz}\cdot t) + \sin(2\pi\cdot 104\,\text{Hz}\cdot t)$. Schreibe die Summe mit dem Additionstheorem $\sin a + \sin b = 2\sin\frac{a+b}{2}\cos\frac{a-b}{2}$ als Produkt.

  a) Welche Frequenz hat der schnell schwingende Sinusfaktor?

  b) Welche Frequenz hat der Kosinusfaktor? (Gib den Betrag an.)

  c) Wie oft pro Sekunde ist die Lautstärke maximal?
teile:
  - typ: zahl
    label: a) Frequenz des Sinusfaktors
    loesung: "(100+104)/2"
    einheit: "Hz"
    anzeige: '102'
    fehler:
      - wert: "100+104"
        meldung: Im Additionstheorem steht $\frac{a+b}{2}$. Die Summe der Frequenzen wird also halbiert.
  - typ: zahl
    label: b) Frequenz des Kosinusfaktors
    loesung: "(104-100)/2"
    einheit: "Hz"
    anzeige: '2'
    fehler:
      - wert: "104-100"
        meldung: Im Kosinus steht $\frac{a-b}{2}$. Seine Frequenz ist der **halbe** Unterschied.
  - typ: zahl
    label: c) Lautstärkemaxima pro Sekunde
    loesung: "104-100"
    einheit: "Hz"
    anzeige: '4'
    fehler:
      - wert: "(104-100)/2"
        meldung: Das ist die Frequenz des Kosinus. Laut ist es aber bei $\cos = +1$ **und** bei $\cos = -1$, also zweimal pro Kosinusperiode.
hinweise:
  - 'Setze $a = 2\pi\cdot 100\,\text{Hz}\cdot t$ und $b = 2\pi\cdot 104\,\text{Hz}\cdot t$ ein.'
  - Das Ohr hört den Betrag der Amplitude. Wie oft pro Periode erreicht ein Kosinus den Betrag $1$?
loesung: |
  **Umformen:** $\dfrac{a+b}{2} = 2\pi\cdot 102\,\text{Hz}\cdot t$ und $\dfrac{a-b}{2} = -2\pi\cdot 2\,\text{Hz}\cdot t$. Also $y = 2\cos(2\pi\cdot 2\,\text{Hz}\cdot t)\cdot\sin(2\pi\cdot 102\,\text{Hz}\cdot t)$. Das Vorzeichen im Kosinus spielt keine Rolle, weil $\cos(-u) = \cos u$.
  ---
  **a)** Der Sinusfaktor schwingt mit $102\,\text{Hz}$. Das ist die Tonhöhe, die man hört.
  ---
  **b)** Der Kosinusfaktor hat $2\,\text{Hz}$, also eine Periode von $0{,}5\,\text{s}$.
  ---
  **c)** In jeder Kosinusperiode ist der Betrag zweimal $1$. Also ist die Lautstärke $2\cdot 2 = 4$-mal pro Sekunde maximal. Das ist $f_S = |104 - 100|\,\text{Hz} = 4\,\text{Hz}$.
```

## Reflexion, Brechung und Beugung

```aufgabe
id: p8-7-check
art: check
titel: "Vorwissen: Winkel aus dem Sinus"
niveau: 1
angabe: |
  Für einen Winkel $\alpha$ zwischen $0^\circ$ und $90^\circ$ gilt $\sin\alpha = 0{,}5$. Wie groß ist $\alpha$ in Grad?
teile:
  - typ: zahl
    loesung: "inGrad(asin(0.5))"
    einheit: "°"
    anzeige: '30'
    fehler:
      - wert: "60"
        meldung: $60^\circ$ gehört zu $\cos\alpha = 0{,}5$. Für den Sinus ist es $30^\circ$.
      - wert: "inGrad(1/0.5)"
        meldung: Die Umkehrfunktion $\sin^{-1}$ ist nicht der Kehrwert $1/\sin$. Verwende die Taste $\sin^{-1}$ im Gradmodus.
hinweise:
  - 'Verwende die Umkehrfunktion $\sin^{-1}$ (arcsin) im Gradmodus.'
loesung: |
  Gesucht ist der Winkel, dessen Sinus $0{,}5$ ist. Das liefert die Umkehrfunktion $\alpha = \sin^{-1}(0{,}5)$.
  ---
  $\alpha = 30^\circ$. Wiederholen: Mathematik, [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck) im Kapitel Trigonometrie.
```

Bisher liefen unsere Wellen ungestört geradeaus. Jetzt treffen sie auf Hindernisse, auf Grenzen zwischen zwei
Medien und auf Öffnungen. Dabei geschehen drei Dinge: Die Welle wird zurückgeworfen, sie ändert beim Übergang
ihre Richtung, oder sie läuft um Ecken herum. Ein einziges Prinzip erklärt alle drei.

### Wellenfronten und das Huygenssche Prinzip

Eine **Wellenfront** ist eine Linie (im Raum eine Fläche), auf der alle Punkte gleichphasig schwingen, zum
Beispiel die Linie entlang eines Wellenkamms. Senkrecht auf ihr steht die Ausbreitungsrichtung. Diese zeichnet
man als Pfeil und nennt sie **Wellenstrahl**. Bei Kreiswellen im Teich sind die Wellenfronten Kreise, die Strahlen
zeigen radial nach außen. Weit weg von der Quelle sind die Fronten fast gerade, man spricht dann von einer
**ebenen Welle**.

:::satz[Huygenssches Prinzip]
Jeder Punkt einer Wellenfront ist Ausgangspunkt einer neuen kleinen Kreiswelle (im Raum Kugelwelle), einer
**Elementarwelle**. Die neue Wellenfront ist die **Einhüllende** aller Elementarwellen, also die Linie, die
alle diese Kreise von außen berührt.
:::

Der Niederländer Christiaan Huygens hat dieses Prinzip 1678 aufgestellt. Es ist ein Konstruktionsrezept: Man
setzt auf die alte Front viele kleine Kreise mit dem Radius $c\cdot\Delta t$ und zeichnet die gemeinsame
Berührlinie. So erhält man die Front nach der Zeit $\Delta t$.

```plot
x: [-0.5, 3]
y: [-2.2, 2.2]
gleich: true
hoehe: 280
strecken:
  - { von: [0.5, -2], nach: [0.5, 2], farbe: 0 }
  - { von: [1.3, -2], nach: [1.3, 2], farbe: 1, gestrichelt: true }
kurven:
  - { x: "0.5+0.8*cos(t)", y: "-1.5+0.8*sin(t)", t: ["-pi/2", "pi/2"], farbe: 2 }
  - { x: "0.5+0.8*cos(t)", y: "-0.5+0.8*sin(t)", t: ["-pi/2", "pi/2"], farbe: 2 }
  - { x: "0.5+0.8*cos(t)", y: "0.5+0.8*sin(t)", t: ["-pi/2", "pi/2"], farbe: 2 }
  - { x: "0.5+0.8*cos(t)", y: "1.5+0.8*sin(t)", t: ["-pi/2", "pi/2"], farbe: 2 }
vektoren:
  - { von: [1.6, 0], nach: [2.6, 0], label: "Ausbreitung", farbe: 3 }
beschriftung: "Huygens-Konstruktion für eine ebene Welle. Von vier Punkten der alten Wellenfront (blau) gehen Elementarwellen aus (grüne Halbkreise mit Radius c·Δt). Die Linie, die alle Halbkreise vorn berührt, ist die neue Wellenfront (orange gestrichelt). Die Welle ist um c·Δt nach rechts gewandert."
```

### Reflexion und Echo

Trifft eine Welle auf eine Wand, wird sie zurückgeworfen. Man misst die Winkel gegen das **Lot**, eine gedachte
Linie senkrecht zur Wand. Es gilt das **Reflexionsgesetz**: Einfallswinkel gleich Reflexionswinkel. Mit Huygens
versteht man das so: Die Teile der Front, die zuerst an der Wand ankommen, senden ihre Elementarwellen zuerst
zurück. Der Teil, der später ankommt, folgt später. Die neue Front kippt dadurch genau spiegelbildlich.

Beim Schall nennt man die Reflexion **Echo**. Das Ohr trennt zwei Schallereignisse erst, wenn etwa $0{,}1\,\text{s}$
zwischen ihnen liegen. Hin- und Rückweg müssen also zusammen mindestens $34\,\text{m}$ lang sein, die Wand muss
mindestens $17\,\text{m}$ entfernt sein. Bei kürzeren Abständen verschmelzen Schall und Echo zum **Nachhall**.
Fledermäuse, Delfine, das Echolot von Schiffen und Ultraschallgeräte nutzen die Laufzeit des Echos zur Ortung.

:::beispiel[Echo an einer Felswand]
Du stehst $85\,\text{m}$ vor einer Felswand und klatschst in die Hände ($c = 340\,\text{m/s}$). Wann hörst du das
Echo?

**Schritt 1, Modell:** Der Schall läuft zur Wand **und** zurück. Der Weg ist $s = 2\cdot 85\,\text{m} = 170\,\text{m}$.

**Schritt 2, Zeit:** $t = \dfrac{s}{c} = \dfrac{170\,\text{m}}{340\,\text{m/s}} = 0{,}50\,\text{s}$. Die Meter kürzen sich.

**Antwort:** Das Echo kommt nach einer halben Sekunde. Das ist deutlich mehr als $0{,}1\,\text{s}$, du hörst es also
getrennt vom Klatschen.
:::

:::achtung[Fehler: den Rückweg vergessen]
Ein Echolot empfängt das Echo vom Meeresgrund nach $1{,}2\,\text{s}$ ($c_{\text{Wasser}} = 1480\,\text{m/s}$). Ein
Schüler rechnet: „Tiefe $= 1480\,\text{m/s}\cdot 1{,}2\,\text{s} = 1776\,\text{m}$.“

Das ist doppelt so viel wie richtig. In $1{,}2\,\text{s}$ läuft der Schall hinunter **und** wieder hinauf. Die
Tiefe ist der halbe Weg: $d = \tfrac12\cdot 1480\,\text{m/s}\cdot 1{,}2\,\text{s} = 888\,\text{m}$.
:::

Bei Seilwellen gibt es noch eine Besonderheit. An einem **festen** Ende kommt ein Wellenberg als Wellental
zurück. Das Seilende kann sich nicht bewegen, es zieht das Seil nach unten. Man sagt, die Welle erleidet einen
**Phasensprung** um $\pi$. An einem **losen** Ende, etwa einem Ring, der reibungsfrei an einer Stange gleitet,
kommt ein Berg als Berg zurück.

### Brechung: Die Welle ändert ihre Richtung

Trifft eine Welle schräg auf die Grenze zu einem Medium, in dem sie eine andere Geschwindigkeit hat, ändert sie
ihre Richtung. Das heißt **Brechung**. Huygens erklärt sie mit einem Bild: Eine Marschkolonne läuft schräg von
einer Wiese auf tiefen Sand. Die Reihe, die zuerst im Sand ist, wird langsamer. Die anderen laufen noch schnell
weiter. Die ganze Reihe schwenkt dadurch zur Grenze hin ein.

:::satz[Brechungsgesetz für Wellen]
$$\frac{\sin\alpha_1}{\sin\alpha_2} = \frac{c_1}{c_2}.$$
Dabei ist $\alpha_1$ der Einfallswinkel im Medium 1, $\alpha_2$ der Brechungswinkel im Medium 2 (beide gegen das
Lot gemessen), $c_1$ und $c_2$ sind die Ausbreitungsgeschwindigkeiten in den beiden Medien.
:::

Daraus liest man ab: Wird die Welle **langsamer**, wird sie **zum Lot hin** gebrochen, der Winkel wird kleiner.
Wird sie schneller, wird sie vom Lot weg gebrochen. Die Frequenz bleibt beim Übergang gleich, die Wellenlänge
ändert sich im selben Verhältnis wie die Geschwindigkeit. Wasserwellen werden im flachen Wasser langsamer.
Deshalb laufen sie fast immer parallel zum Strand an, auch wenn sie draußen schräg kommen.

:::beispiel[Schall trifft schräg auf eine Wasseroberfläche]
Ein Ton trifft aus der Luft ($c_1 = 340\,\text{m/s}$) unter $10^\circ$ gegen das Lot auf eine ruhige
Wasseroberfläche ($c_2 = 1480\,\text{m/s}$). Unter welchem Winkel läuft er im Wasser weiter?

**Schritt 1, Gesetz umstellen:** Aus $\dfrac{\sin\alpha_1}{\sin\alpha_2} = \dfrac{c_1}{c_2}$ folgt durch
Überkreuzmultiplizieren $\sin\alpha_2 = \sin\alpha_1\cdot\dfrac{c_2}{c_1}$.

**Schritt 2, einsetzen:** $\sin\alpha_2 = \sin 10^\circ\cdot\dfrac{1480\,\text{m/s}}{340\,\text{m/s}} = 0{,}1736\cdot 4{,}353 = 0{,}756$.

**Schritt 3, Winkel:** $\alpha_2 = \sin^{-1}(0{,}756) = 49{,}1^\circ$.

**Antwort:** Der Schall wird stark **vom Lot weg** gebrochen, weil er im Wasser schneller ist. Schon ab
$\alpha_1 = \sin^{-1}(340/1480) = 13{,}3^\circ$ wäre $\sin\alpha_2$ größer als $1$. Dann dringt kein Schall mehr ins
Wasser ein, er wird ganz reflektiert. Auch bei steilerem Einfall wird an der Wasseroberfläche fast der ganze
Schall zurückgeworfen, weil Luft und Wasser so verschieden sind. Beides zusammen erklärt, warum ein Taucher
Gespräche am Ufer kaum hört.
:::

:::achtung[Fehler: das Geschwindigkeitsverhältnis umgedreht]
Wasserwellen laufen aus tiefem Wasser ($c_1 = 1{,}8\,\text{m/s}$) unter $35^\circ$ in flaches Wasser
($c_2 = 1{,}2\,\text{m/s}$). Eine Schülerin rechnet $\sin\alpha_2 = \sin 35^\circ\cdot\dfrac{1{,}8}{1{,}2} = 0{,}860$, also
$\alpha_2 = 59^\circ$.

Das kann nicht stimmen. Die Welle wird langsamer, also muss sie zum Lot **hin** gebrochen werden, der Winkel muss
kleiner werden. Richtig ist $\sin\alpha_2 = \sin 35^\circ\cdot\dfrac{1{,}2}{1{,}8} = 0{,}382$, also $\alpha_2 = 22{,}5^\circ$.
Prüfe nach jeder Brechungsrechnung, ob die Richtung der Änderung stimmt.
:::

```aufgabe
id: p8-7-brechung-check
art: check
titel: "Zum Lot hin oder vom Lot weg?"
niveau: 1
angabe: |
  Schall läuft aus warmer Luft ($350\,\text{m/s}$) schräg in kalte Luft ($330\,\text{m/s}$). Wie ändert sich seine Richtung?
teile:
  - typ: auswahl
    optionen:
      - "Er wird zum Lot hin gebrochen."
      - "Er wird vom Lot weg gebrochen."
      - "Die Richtung bleibt gleich."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Vom Lot weg geht es nur, wenn die Welle schneller wird. In der kalten Luft ist sie langsamer.
      - wert: 2
        meldung: |
          Die Richtung bleibt nur bei senkrechtem Einfall oder gleicher Geschwindigkeit gleich.
hinweise:
  - |
    Wird die Welle langsamer oder schneller?
loesung: |
  Im kalten Medium ist der Schall langsamer, also ist $\sin\alpha_2 < \sin\alpha_1$.
  ---
  Er wird zum Lot hin gebrochen. So biegt sich Schall abends über kühlem Boden wieder nach unten und trägt weit.
```

### Beugung: Wellen laufen um Ecken

Wellen breiten sich auch hinter Hindernissen und hinter Öffnungen in den „Schattenraum“ aus. Das heißt
**Beugung**. Nach Huygens ist jeder Punkt in einer Öffnung Ausgangspunkt einer Elementarwelle. Am Rand der
Öffnung fehlt der Nachbar, der die seitlichen Teile auslöschen könnte. Deshalb läuft die Welle dort seitlich weiter.

Wie stark die Beugung ist, hängt vom Verhältnis der Wellenlänge zur Größe der Öffnung ab:

- Ist die Öffnung **etwa so groß wie die Wellenlänge oder kleiner**, breitet sich die Welle dahinter fast in
  alle Richtungen aus. Die Beugung ist stark.
- Ist die Öffnung **viel größer** als die Wellenlänge, geht die Welle fast geradlinig durch. Es entsteht ein
  scharfer Schatten.

Darum hörst du jemanden, der hinter einer offenen Tür um die Ecke spricht, aber du siehst ihn nicht. Schallwellen
der Sprache sind Dezimeter bis Meter lang, so groß wie eine Tür. Lichtwellen sind kürzer als ein Mikrometer. Und
darum hört man von einer fernen Musikanlage vor allem die Bässe. Tiefe Töne haben große Wellenlängen und werden um
Häuser herumgebeugt, hohe nicht. Beugung von Licht am Spalt und am Gitter behandelt das
[Kapitel Wellenoptik](/lernen/physik1/wellenoptik-atom-kernphysik/beugung-am-einzelspalt-und-am-gitter).

```reflexion
frage: Warum wird eine Welle zum Lot hin gebrochen, wenn sie in ein Medium mit kleinerer Ausbreitungsgeschwindigkeit übertritt? Erkläre es mit dem Huygensschen Prinzip in zwei bis drei Sätzen.
antwort: |
  Trifft die Wellenfront schräg auf die Grenze, erreicht ein Ende der Front das neue Medium zuerst. Seine Elementarwellen
  breiten sich dort langsamer aus, während der Rest der Front im alten Medium noch schnell weiterläuft. Die neue Front,
  die Einhüllende, kippt dadurch so, dass sie flacher zur Grenze liegt. Die Ausbreitungsrichtung steht senkrecht auf
  der Front und zeigt deshalb steiler ins neue Medium, also näher am Lot.
```

### Aufgaben zu Reflexion, Brechung und Beugung

```aufgabe
id: p8-7-echo
titel: Echo im Gebirge
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Wanderin ruft gegen eine Felswand und hört das Echo nach $1{,}2\,\text{s}$ ($c = 340\,\text{m/s}$). Wie weit ist die Wand entfernt?
teile:
  - typ: zahl
    loesung: "340*1.2/2"
    einheit: "m"
    anzeige: '204'
    fehler:
      - wert: "340*1.2"
        meldung: In $1{,}2\,\text{s}$ läuft der Schall zur Wand **und** zurück. Die Entfernung ist der halbe Weg.
hinweise:
  - Der Schall legt den Weg zweimal zurück.
loesung: |
  **Modell:** In der Echozeit legt der Schall den Weg zur Wand zweimal zurück, also $2d = c\,t$.
  ---
  $d = \dfrac{c\,t}{2} = \dfrac{340\,\text{m/s}\cdot 1{,}2\,\text{s}}{2} = 204\,\text{m}$.
```

```aufgabe
id: p8-beugung-auswahl
titel: Wann wird stark gebeugt?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine ebene Welle trifft auf einen Spalt in einer Wand. In welchem Fall breitet sie sich hinter dem Spalt am stärksten seitlich aus?
teile:
  - typ: auswahl
    optionen:
      - "Die Spaltbreite ist viel größer als die Wellenlänge."
      - "Die Spaltbreite ist etwa so groß wie die Wellenlänge."
      - "Die Beugung hängt nicht von der Spaltbreite ab."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Durch eine sehr breite Öffnung läuft die Welle fast geradlinig, mit scharfem Schatten. Beugung ist stark, wenn die Öffnung etwa so groß wie die Wellenlänge oder kleiner ist.
      - wert: 2
        meldung: Es kommt gerade auf das Verhältnis von Spaltbreite zu Wellenlänge an. Darum hört man um Ecken, sieht aber nicht um Ecken.
hinweise:
  - Vergleiche Spaltbreite und Wellenlänge. Denke an Schall an einer Tür und Licht an derselben Tür.
loesung: |
  **Ansatz:** Die Stärke der Beugung hängt vom Verhältnis Wellenlänge zu Öffnungsgröße ab.
  ---
  Ist die Öffnung etwa so groß wie die Wellenlänge, wirkt sie fast wie eine einzige Quelle einer Elementarwelle. Die Welle breitet sich stark seitlich aus. Bei sehr breiten Öffnungen geht sie praktisch geradlinig durch.
```

```aufgabe
id: p8-brechung-wasser
titel: Brechung von Wasserwellen
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Wasserwellen laufen aus tiefem Wasser ($c_1 = 2{,}0\,\text{m/s}$) unter dem Einfallswinkel $40^\circ$ in flaches Wasser ($c_2 = 1{,}5\,\text{m/s}$). Unter welchem Winkel gegen das Lot laufen sie weiter? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "inGrad(asin(sin(inRad(40))*1.5/2.0))"
    einheit: "°"
    anzeige: '28{,}8'
    fehler:
      - wert: "inGrad(asin(sin(inRad(40))*2.0/1.5))"
        meldung: Du hast das Verhältnis umgedreht. Die Welle wird langsamer, also muss der Winkel kleiner werden als $40^\circ$. Es gilt $\sin\alpha_2 = \sin\alpha_1\cdot c_2/c_1$.
      - wert: "40*1.5/2.0"
        meldung: Das Brechungsgesetz gilt für die **Sinuswerte** der Winkel, nicht für die Winkel selbst.
hinweise:
  - Wird die Welle langsamer oder schneller? Muss der Winkel also kleiner oder größer werden?
  - 'Stelle das Brechungsgesetz nach $\sin\alpha_2$ um: $\sin\alpha_2 = \sin\alpha_1\cdot c_2/c_1$.'
gefuehrt:
  - text: Wird die Welle beim Übergang langsamer oder schneller, und was folgt für den Winkel?
    teil:
      typ: auswahl
      optionen: ["langsamer, Winkel wird kleiner", "langsamer, Winkel wird größer", "schneller, Winkel wird größer"]
      richtig: [0]
    erklaerung: Im flachen Wasser ist $c_2 = 1{,}5\,\text{m/s}$ kleiner. Die Welle wird zum Lot hin gebrochen, der Winkel wird kleiner.
  - text: Berechne $\sin\alpha_2$. Runde auf drei Nachkommastellen.
    teil: { typ: zahl, loesung: "sin(inRad(40))*1.5/2.0" }
    erklaerung: $\sin\alpha_2 = \sin 40^\circ\cdot 1{,}5/2{,}0 = 0{,}643\cdot 0{,}75 = 0{,}482$.
  - text: Berechne den Winkel $\alpha_2$ in Grad.
    teil: { typ: zahl, loesung: "inGrad(asin(sin(inRad(40))*1.5/2.0))" }
    erklaerung: $\alpha_2 = \sin^{-1}(0{,}482) = 28{,}8^\circ$.
  - text: Was passiert mit der Wellenlänge?
    erklaerung: |
      Die Frequenz bleibt gleich. Also ändert sich $\lambda$ im selben Verhältnis wie $c$, sie sinkt auf $1{,}5 : 2{,}0 = 75\,\%$.
loesung: |
  **Ansatz:** Brechungsgesetz $\dfrac{\sin\alpha_1}{\sin\alpha_2} = \dfrac{c_1}{c_2}$, umgestellt $\sin\alpha_2 = \sin\alpha_1\cdot\dfrac{c_2}{c_1}$.
  ---
  **Rechnung:** $\sin\alpha_2 = \sin 40^\circ\cdot\dfrac{1{,}5\,\text{m/s}}{2{,}0\,\text{m/s}} = 0{,}643\cdot 0{,}75 = 0{,}482$. Die Einheiten kürzen sich.
  ---
  **Winkel:** $\alpha_2 = 28{,}8^\circ$. Die Welle wird zum Lot hin gebrochen, weil sie langsamer wird. Die Wellenlänge sinkt auf drei Viertel.
```

```aufgabe
id: p8-7-tuer
titel: Ab wann wird Schall an einer Tür kaum gebeugt?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine offene Tür ist $0{,}85\,\text{m}$ breit ($c = 340\,\text{m/s}$). Ab welcher Frequenz ist die Wellenlänge des Schalls kleiner als die Türbreite?
teile:
  - typ: zahl
    loesung: "340/0.85"
    einheit: "Hz"
    anzeige: '400'
    fehler:
      - wert: "0.85/340"
        meldung: Das ist der Kehrwert. Aus $\lambda = c/f$ folgt $f = c/\lambda$.
      - wert: "340*0.85"
        meldung: Aus $c = \lambda f$ folgt durch Teilen durch $\lambda$ die Formel $f = c/\lambda$, nicht $c\cdot\lambda$.
hinweise:
  - Setze die Wellenlänge gleich der Türbreite.
  - 'Dann $f = c/\lambda$. Höhere Frequenz heißt kleinere Wellenlänge.'
loesung: |
  **Ansatz:** Die Grenze liegt bei $\lambda = 0{,}85\,\text{m}$. Mit $f = c/\lambda$ erhalten wir die zugehörige Frequenz.
  ---
  $f = \dfrac{340\,\text{m/s}}{0{,}85\,\text{m}} = 400\,\text{Hz}$.
  ---
  **Deutung:** Über $400\,\text{Hz}$ ist die Wellenlänge kleiner als die Tür, und der Schall läuft eher geradlinig hindurch. Tiefe Töne unter $400\,\text{Hz}$ werden stark gebeugt und sind auch seitlich hinter der Tür gut zu hören.
```

```aufgabe
id: p8-7-festes-ende
titel: Ein Wellenberg trifft auf ein festes Ende
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Auf einem Seil läuft ein einzelner Wellenberg auf eine Wand zu, an der das Seil fest angebunden ist. Was kommt zurück?
teile:
  - typ: auswahl
    optionen:
      - "ein Wellenberg, gleich hoch"
      - "ein Wellental, etwa gleich tief"
      - "nichts, die Wand nimmt die ganze Energie auf"
      - "ein Wellenberg mit doppelter Höhe"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: So verhält sich ein **loses** Ende, etwa ein Ring an einer glatten Stange. Das feste Ende kann sich nicht heben, es zieht das Seil nach unten. Der Berg kommt als Tal zurück.
      - wert: 2
        meldung: Eine starre Wand nimmt kaum Energie auf, weil sie sich nicht bewegt. Die Welle wird fast vollständig reflektiert.
      - wert: 3
        meldung: Die reflektierte Welle kann nicht mehr Energie haben als die einlaufende. Die doppelte Höhe gibt es nur kurz, wenn sich einlaufender und reflektierter Puls am losen Ende überlagern.
hinweise:
  - Das Seilende an der Wand kann sich nicht bewegen. In welche Richtung zieht es das Seil, wenn der Berg ankommt?
  - Am festen Ende gibt es einen Phasensprung um $\pi$.
loesung: |
  **Ansatz:** Am festen Ende kann sich das Seil nicht bewegen. Die Wand übt beim Eintreffen des Berges eine Kraft nach unten auf das Seil aus.
  ---
  Diese Kraft erzeugt einen Puls nach unten, der zurückläuft. Der Berg kommt als Tal zurück. Das ist der Phasensprung um $\pi$.
  ---
  Genau deshalb liegt am festen Ende einer Saite immer ein Knoten: Einlaufende und reflektierte Welle sind dort stets gegenphasig.
```

```aufgabe
id: p8-7-flaches-wasser
titel: Wellen laufen ins flache Wasser
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Wasserwellen haben im tiefen Wasser die Geschwindigkeit $1{,}6\,\text{m/s}$ und die Wellenlänge $2{,}4\,\text{m}$. Sie laufen unter $50^\circ$ gegen das Lot auf eine Zone mit flachem Wasser zu, in der sie nur $1{,}0\,\text{m/s}$ schnell sind.

  a) Welche Frequenz haben die Wellen? Runde auf drei Nachkommastellen.

  b) Wie groß ist die Wellenlänge im flachen Wasser?

  c) Unter welchem Winkel gegen das Lot laufen sie im flachen Wasser weiter? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Frequenz
    loesung: "1.6/2.4"
    einheit: "Hz"
    anzeige: '0{,}667'
    fehler:
      - wert: "2.4/1.6"
        meldung: Das ist die Periodendauer $T = \lambda/c$ in Sekunden. Die Frequenz ist $f = c/\lambda$.
  - typ: zahl
    label: b) Wellenlänge im flachen Wasser
    loesung: "1.0/(1.6/2.4)"
    einheit: "m"
    anzeige: '1{,}5'
    fehler:
      - wert: "2.4"
        meldung: Die Wellenlänge bleibt nicht gleich. Gleich bleibt die Frequenz. Mit kleinerem $c$ wird auch $\lambda = c/f$ kleiner.
  - typ: zahl
    label: c) Brechungswinkel
    loesung: "inGrad(asin(sin(inRad(50))*1.0/1.6))"
    einheit: "°"
    anzeige: '28{,}6'
    fehler:
      - wert: "50*1.0/1.6"
        meldung: Das Brechungsgesetz verbindet die **Sinuswerte** der Winkel, nicht die Winkel selbst.
hinweise:
  - Die Frequenz ändert sich beim Übergang nicht. Berechne sie im tiefen Wasser.
  - 'Danach $\lambda_2 = c_2/f$ und $\sin\alpha_2 = \sin\alpha_1\cdot c_2/c_1$.'
loesung: |
  **a)** Im tiefen Wasser gilt $f = \dfrac{c_1}{\lambda_1} = \dfrac{1{,}6\,\text{m/s}}{2{,}4\,\text{m}} = 0{,}667\,\text{Hz}$.
  ---
  **b)** Die Frequenz bleibt gleich. $\lambda_2 = \dfrac{c_2}{f} = \dfrac{1{,}0\,\text{m/s}}{0{,}667\,\text{s}^{-1}} = 1{,}5\,\text{m}$.
  ---
  **c)** $\sin\alpha_2 = \sin 50^\circ\cdot\dfrac{1{,}0}{1{,}6} = 0{,}766\cdot 0{,}625 = 0{,}479$, also $\alpha_2 = 28{,}6^\circ$.
  ---
  **Plausibilität:** Die Welle wird langsamer und zum Lot hin gebrochen, der Winkel sinkt von $50^\circ$ auf $28{,}6^\circ$. Probe: $\lambda_2/\lambda_1 = 1{,}5 : 2{,}4 = 0{,}625 = c_2/c_1$.
```

```aufgabe
id: p8-7-huygens-text
titel: Brechung mit Huygens erklären
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Eine ebene Schallwelle trifft schräg auf eine Grenze, hinter der sie **schneller** läuft. Erkläre mit dem Huygensschen Prinzip, in welche Richtung sie gebrochen wird. Fertige dazu in Gedanken oder auf Papier eine Skizze an und beschreibe sie in Worten.
teile:
  - typ: text
    muster: |
      Die Wellenfront trifft schräg auf die Grenze. Der Teil der Front, der die Grenze zuerst erreicht, sendet seine
      Elementarwellen ins neue Medium. Dort sind sie schneller, ihre Kreise werden in derselben Zeit größer als die der
      Elementarwellen im alten Medium. Die Einhüllende, also die neue Front, steht deshalb steiler zur Grenze. Die
      Ausbreitungsrichtung steht senkrecht auf der Front und zeigt flacher ins neue Medium. Die Welle wird vom Lot weg
      gebrochen, der Brechungswinkel ist größer als der Einfallswinkel.
hinweise:
  - Welcher Teil der Front kommt zuerst ins neue Medium? Wie groß werden dort die Elementarwellen in derselben Zeit?
  - Die Ausbreitungsrichtung steht immer senkrecht auf der Wellenfront.
loesung: |
  **Ansatz:** Nach Huygens ist jeder Punkt der Front Quelle einer Elementarwelle. Die neue Front ist ihre Einhüllende.
  ---
  **Schneller im neuen Medium:** Der Teil der Front, der zuerst an der Grenze ist, sendet Elementarwellen, die im neuen Medium schneller wachsen. Der Rest der Front hinkt im alten Medium hinterher.
  ---
  **Schluss:** Die Front dreht sich so, dass die Ausbreitungsrichtung vom Lot weg zeigt. Der Brechungswinkel ist größer als der Einfallswinkel, wie es $\sin\alpha_2 = \sin\alpha_1\cdot c_2/c_1$ mit $c_2 > c_1$ verlangt.
```

## Der Doppler-Effekt und der Überschallknall

```aufgabe
id: p8-8-check
art: check
titel: "Vorwissen: km/h in m/s"
niveau: 1
angabe: |
  Ein Krankenwagen fährt mit $108\,\text{km/h}$. Wie schnell ist das in m/s?
teile:
  - typ: zahl
    loesung: "108/3.6"
    einheit: "m/s"
    anzeige: '30'
    fehler:
      - wert: "108*3.6"
        meldung: Du hast mit $3{,}6$ multipliziert. In m/s ist die Zahl immer **kleiner**, denn in einer Sekunde kommt man weniger weit als in einer Stunde.
hinweise:
  - '$1\,\text{m/s} = 3{,}6\,\text{km/h}$.'
loesung: |
  $1\,\text{km/h} = 1000\,\text{m} : 3600\,\text{s} = \tfrac{1}{3{,}6}\,\text{m/s}$. Deshalb teilt man durch $3{,}6$.
  ---
  $108\,\text{km/h} = 108 : 3{,}6\,\text{m/s} = 30\,\text{m/s}$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

Ein Krankenwagen mit Martinshorn fährt an dir vorbei. Während er näher kommt, klingt der Ton höher. In dem
Moment, in dem er vorbeifährt, springt der Ton nach unten. Das ist der **Doppler-Effekt**. Christian Doppler hat
ihn 1842 beschrieben, damals Professor in Prag, später in Wien.

Die wichtigste Einsicht gleich vorweg: Das Horn selbst ändert seinen Ton nicht. Es schwingt die ganze Zeit mit
derselben Frequenz. Was sich ändert, ist, **wie viele Wellenberge pro Sekunde bei dir ankommen**. Und das hängt
davon ab, ob sich Quelle oder Beobachter bewegen.

### Die Quelle bewegt sich

Die Quelle sendet in jeder Periodendauer $T$ einen Wellenberg aus. Jeder Berg läuft von dem Ort, an dem er
ausgesandt wurde, als Kreis mit der Geschwindigkeit $c$ nach außen. Die Quelle bewegt sich aber mit der
Geschwindigkeit $v_Q$ weiter. Bis sie den nächsten Berg aussendet, ist sie um $v_Q\cdot T$ vorgerückt.

```plot
x: [-5.5, 7]
y: [-4.5, 4.5]
gleich: true
hoehe: 300
kurven:
  - { x: "0+4*cos(t)", y: "4*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "0.5+3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "1+2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "1.5+1*cos(t)", y: "1*sin(t)", t: [0, "2*pi"], farbe: 0 }
punkte:
  - { x: 2, y: 0, label: "Quelle", farbe: 1 }
  - { x: 5.5, y: 0, label: "B vorn", farbe: 3 }
  - { x: -5, y: 0, label: "B hinten", farbe: 3 }
vektoren:
  - { von: [2, -2.6], nach: [3.5, -2.6], label: "v_Q", farbe: 1 }
beschriftung: "Wellenfronten einer Schallquelle, die mit halber Schallgeschwindigkeit nach rechts fährt. Jeder Kreis wurde ausgesandt, als die Quelle in seinem Mittelpunkt war. Vor der Quelle (Beobachter B vorn) liegen die Fronten dichter: kürzere Wellenlänge, höhere Frequenz. Hinter ihr (B hinten) liegen sie weiter auseinander: tieferer Ton."
```

Vor der Quelle liegen die Wellenberge deshalb dichter. Der Abstand zweier Berge ist dort nicht $\lambda = c\,T$,
sondern nur $\lambda' = (c - v_Q)\,T$. Hinter der Quelle ist er größer, $\lambda' = (c + v_Q)\,T$. Ein ruhender
Beobachter empfängt die Berge mit der Schallgeschwindigkeit $c$, also hört er $f' = c/\lambda'$. Mit $T = 1/f$ folgt:

:::satz[Doppler-Effekt bei bewegter Quelle, ruhender Beobachter]
$$f' = f\cdot\frac{c}{c - v_Q}\ \ \text{(Quelle nähert sich)}, \qquad f' = f\cdot\frac{c}{c + v_Q}\ \ \text{(Quelle entfernt sich)}.$$
Dabei ist $f$ die Frequenz der Quelle, $f'$ die gehörte Frequenz, $c$ die Schallgeschwindigkeit in der ruhenden
Luft und $v_Q$ die Geschwindigkeit der Quelle relativ zur Luft.
:::

Eine Kontrolle hilft immer: **Annähern macht den Ton höher, Entfernen macht ihn tiefer.** Prüfe nach jeder
Rechnung, ob dein Ergebnis dazu passt.

:::beispiel[Ein Motorrad fährt vorbei]
Ein Motorrad fährt mit $30\,\text{m/s}$ an dir vorbei. Sein Motor brummt mit $600\,\text{Hz}$ ($c = 340\,\text{m/s}$).
Welche Frequenz hörst du vorher und nachher?

**Schritt 1, Modell:** Die Quelle bewegt sich, du stehst. Beim Annähern steht $c - v_Q$ im Nenner, beim Entfernen
$c + v_Q$.

**Schritt 2, Annähern:** $f' = 600\,\text{Hz}\cdot\dfrac{340\,\text{m/s}}{340\,\text{m/s} - 30\,\text{m/s}} = 600\,\text{Hz}\cdot\dfrac{340}{310} = 658\,\text{Hz}$.
Die Einheiten m/s kürzen sich im Bruch.

**Schritt 3, Entfernen:** $f' = 600\,\text{Hz}\cdot\dfrac{340}{370} = 551\,\text{Hz}$.

**Antwort:** Der Ton springt beim Vorbeifahren von $658\,\text{Hz}$ auf $551\,\text{Hz}$. Beide Werte passen zur
Kontrolle: vorher höher, nachher tiefer als $600\,\text{Hz}$.
:::

:::achtung[Fehler: das Vorzeichen vertauscht]
Ein Zug nähert sich mit $40\,\text{m/s}$ und pfeift mit $500\,\text{Hz}$. Ein Schüler rechnet
$f' = 500\,\text{Hz}\cdot\dfrac{340}{340 + 40} = 447\,\text{Hz}$.

Das ist falsch, denn ein sich nähernder Zug klingt **höher**, nicht tiefer. Beim Annähern liegen die Berge dichter,
also steht $c - v_Q$ im Nenner: $f' = 500\,\text{Hz}\cdot\dfrac{340}{300} = 567\,\text{Hz}$. Merke dir nicht die
Vorzeichen, sondern prüfe das Ergebnis mit „Annähern heißt höher“.
:::

### Der Beobachter bewegt sich

Jetzt steht die Quelle, und du läufst auf sie zu. Die Wellenberge liegen im Raum ganz normal, im Abstand
$\lambda = c/f$. Weil du ihnen entgegenläufst, triffst du aber pro Sekunde mehr von ihnen. Zu den $f$ Bergen, die
ohnehin an einem ruhenden Ort vorbeikommen, kommen noch $v_B/\lambda$ Berge dazu, die du durch deine eigene Bewegung
„einsammelst“:

:::satz[Doppler-Effekt bei bewegtem Beobachter, ruhende Quelle]
$$f' = f\cdot\frac{c + v_B}{c}\ \ \text{(Beobachter nähert sich)}, \qquad f' = f\cdot\frac{c - v_B}{c}\ \ \text{(Beobachter entfernt sich)}.$$
Dabei ist $v_B$ die Geschwindigkeit des Beobachters relativ zur Luft. Die übrigen Größen sind wie bei der bewegten Quelle.
:::

:::intuition
Ein Vergleich mit Paketen auf einem Förderband hilft. Jemand legt jede Sekunde ein Paket auf ein gleichmäßig
laufendes Band. Geht er dabei in Laufrichtung mit, landen die Pakete dichter beieinander. Am Ende kommen mehr pro
Sekunde an. Das ist die bewegte Quelle. Läuft dagegen am Ende jemand dem Band entgegen, nimmt er pro Sekunde mehr
Pakete ab, obwohl sie ganz normal dicht liegen. Das ist der bewegte Beobachter.
:::

```aufgabe
id: p8-8-beobachter-check
art: check
titel: "Läuferin und Glocke"
niveau: 1
angabe: |
  Eine Glocke läutet still stehend. Eine Läuferin rennt auf sie zu. Was hört sie im Vergleich zur Frequenz der Glocke?
teile:
  - typ: auswahl
    optionen:
      - "einen höheren Ton"
      - "einen tieferen Ton"
      - "denselben Ton, weil die Quelle ruht"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Wer der Quelle entgegenläuft, trifft pro Sekunde **mehr** Wellenberge.
      - wert: 2
        meldung: |
          Auch ein bewegter Beobachter hört eine verschobene Frequenz. Er sammelt durch seine Bewegung zusätzliche Wellenberge ein.
hinweise:
  - |
    Zählt die Läuferin pro Sekunde mehr oder weniger Wellenberge als eine ruhende Person?
loesung: |
  Die Wellenberge liegen normal dicht, aber die Läuferin kommt ihnen entgegen.
  ---
  Sie trifft mehr Berge pro Sekunde und hört einen höheren Ton, $f' = f(c + v_B)/c$.
```

Bei kleinen Geschwindigkeiten liefern beide Formeln fast dasselbe. Bei großen Geschwindigkeiten unterscheiden sie
sich deutlich. Beim Schall kommt es darauf an, **wer sich relativ zur Luft bewegt**. Für die Prüfung genügt es meist,
dass sich nur einer der beiden bewegt. Bewegen sich beide, kombiniert man die Formeln zu
$f' = f\cdot\dfrac{c \pm v_B}{c \mp v_Q}$, wobei die oberen Zeichen für „aufeinander zu“ stehen.

:::achtung[Fehler: die Formel des bewegten Beobachters für eine bewegte Quelle verwendet]
Eine Quelle mit $1000\,\text{Hz}$ fliegt mit $100\,\text{m/s}$ auf eine ruhende Person zu. Eine Schülerin rechnet
mit der Beobachterformel $f' = 1000\,\text{Hz}\cdot\dfrac{340 + 100}{340} = 1294\,\text{Hz}$.

Das ist falsch, denn hier bewegt sich die **Quelle**. Die Wellenberge liegen im Raum dichter, also gilt
$f' = 1000\,\text{Hz}\cdot\dfrac{340}{340 - 100} = 1417\,\text{Hz}$. Der Unterschied von über $120\,\text{Hz}$ ist
deutlich hörbar. Frage dich darum immer zuerst: Wer bewegt sich relativ zur Luft?
:::

Wichtig ist außerdem: Für den Doppler-Effekt zählt nur die Bewegung **auf den Beobachter zu oder von ihm weg**.
Fährt ein Auto in großem Abstand quer an dir vorbei, ist die Änderung im Moment der größten Nähe null. Darum
„rutscht“ der Ton des Martinshorns, statt plötzlich zu springen, wenn der Wagen in einigen Metern Abstand vorbeifährt.

```aufgabe
id: p8-8-quer-check
art: check
titel: "Quer vorbei"
niveau: 1
angabe: |
  Ein Auto mit laufender Hupe fährt in $50\,\text{m}$ Abstand an dir vorbei. Welche Frequenz hörst du in dem Moment, in dem es dir am nächsten ist (abgesehen von der Laufzeit des Schalls)?
teile:
  - typ: auswahl
    optionen:
      - "ungefähr die Frequenz der Hupe"
      - "die höchste Frequenz der ganzen Vorbeifahrt"
      - "die tiefste Frequenz der ganzen Vorbeifahrt"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Am nächsten Punkt bewegt sich das Auto quer zu dir, weder auf dich zu noch von dir weg. Dann gibt es keine Verschiebung.
      - wert: 2
        meldung: |
          Die tiefste Frequenz hörst du erst, wenn sich das Auto direkt von dir entfernt.
hinweise:
  - |
    Welche Geschwindigkeitskomponente zählt für den Doppler-Effekt?
loesung: |
  Es zählt nur die Bewegung auf den Beobachter zu oder von ihm weg.
  ---
  Am nächsten Punkt ist diese Komponente null, also hörst du ungefähr die Frequenz der Hupe.
```

**Anwendungen.** Radarfallen messen die Frequenzverschiebung reflektierter Radiowellen und berechnen daraus die
Geschwindigkeit. Ultraschall-Doppler misst, wie schnell Blut in den Adern fließt. Astronomen sehen, dass das Licht
ferner Galaxien zu größeren Wellenlängen verschoben ist. Diese **Rotverschiebung** zeigt, dass sie sich von uns
entfernen.

### Schneller als der Schall: der Mach-Kegel

Was passiert, wenn die Quelle so schnell wie der Schall fliegt? Dann läuft sie mit ihren eigenen Wellenbergen mit.
Alle Fronten drängen sich vor ihr zu einer einzigen, sehr starken Druckfront zusammen. Ist sie noch schneller,
$v_Q > c$, fliegt sie ihren Wellen davon. Die Kreise liegen dann hinter ihr und haben eine gemeinsame Einhüllende in
Form eines Kegels, den **Mach-Kegel**.

```plot
x: [-1, 7]
y: [-3.5, 3.5]
gleich: true
hoehe: 280
kurven:
  - { x: "0+3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "2+2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 0 }
  - { x: "4+1*cos(t)", y: "1*sin(t)", t: [0, "2*pi"], farbe: 0 }
strecken:
  - { von: [6, 0], nach: [0, 3.464], farbe: 1 }
  - { von: [6, 0], nach: [0, -3.464], farbe: 1 }
punkte:
  - { x: 6, y: 0, label: "Flugzeug", farbe: 1 }
beschriftung: "Überschallflug: Das Flugzeug (rechts) ist schneller als seine Schallwellen (blaue Kreise, ausgesandt an den Kreismittelpunkten). Die Kreise haben eine gemeinsame Einhüllende, den Mach-Kegel (orange). Auf ihm drängt sich die Druckänderung zusammen, das ist der Überschallknall. Hier ist v_Q = 2c, deshalb ist der halbe Öffnungswinkel 30°."
```

Den halben Öffnungswinkel $\alpha$ des Kegels liest man aus einem rechtwinkligen Dreieck ab. In der Zeit $t$ ist die
älteste Welle um $c\,t$ gewachsen, die Quelle aber um $v_Q\,t$ geflogen. Es gilt
$$\sin\alpha = \frac{c}{v_Q} = \frac{1}{Ma}.$$
Dabei ist $Ma = v_Q/c$ die **Machzahl**, also die Geschwindigkeit in Vielfachen der Schallgeschwindigkeit. Wo der
Kegel über den Boden streicht, hört man den **Überschallknall**. Er entsteht nicht nur einmal beim „Durchbrechen der
Schallmauer“, sondern begleitet das Flugzeug, solange es schneller als der Schall fliegt. Ein Schiff, das schneller
als seine Wasserwellen fährt, zieht aus demselben Grund eine V-förmige Bugwelle hinter sich her.

:::beispiel[Wann hört man den Knall?]
Ein Flugzeug fliegt mit $510\,\text{m/s}$ in $6000\,\text{m}$ Höhe genau über dich hinweg ($c = 340\,\text{m/s}$).
Wie groß ist der halbe Öffnungswinkel des Mach-Kegels, und wann nach dem Überflug hörst du den Knall?

**Schritt 1, Machzahl und Winkel:** $Ma = 510 : 340 = 1{,}5$. Also $\sin\alpha = \dfrac{1}{1{,}5} = 0{,}667$ und
$\alpha = 41{,}8^\circ$.

**Schritt 2, Geometrie:** Der Knall erreicht dich, wenn die Kegelfläche über dich streicht. Dann ist das Flugzeug
schon um die waagrechte Strecke $x$ weitergeflogen, mit $\tan\alpha = h/x$. Also
$x = \dfrac{h}{\tan\alpha} = \dfrac{6000\,\text{m}}{0{,}894} = 6710\,\text{m}$.

**Schritt 3, Zeit:** $t = \dfrac{x}{v_Q} = \dfrac{6710\,\text{m}}{510\,\text{m/s}} = 13{,}2\,\text{s}$.

**Antwort:** Der Kegel hat einen halben Öffnungswinkel von etwa $42^\circ$. Den Knall hörst du gut $13\,\text{s}$
nachdem das Flugzeug genau über dir war. Bis dahin hörst du vom Flugzeug gar nichts.
:::

```reflexion
frage: Beim Doppler-Effekt ändert sich die gehörte Frequenz, die Quelle schwingt aber immer gleich. Wie passt das zusammen? Erkläre es für eine Quelle, die auf dich zukommt.
antwort: |
  Die Quelle sendet die Wellenberge immer im gleichen Takt aus. Weil sie sich zwischen zwei Bergen auf mich zubewegt,
  startet jeder neue Berg näher bei mir als der vorige. Die Berge liegen im Raum also dichter, die Wellenlänge vor der
  Quelle ist kleiner. Sie laufen alle mit derselben Schallgeschwindigkeit zu mir, deshalb kommen mehr Berge pro Sekunde
  an. Ich höre eine höhere Frequenz, obwohl die Quelle selbst unverändert schwingt.
```

### Aufgaben zum Doppler-Effekt

```aufgabe
id: p8-8-vorbeifahrt
titel: Was hört man beim Vorbeifahren?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Rettungswagen mit eingeschaltetem Horn fährt mit konstanter Geschwindigkeit dicht an dir vorbei. Was hörst du?
teile:
  - typ: auswahl
    optionen:
      - "Beim Annähern einen gleichbleibend höheren Ton, nach dem Vorbeifahren einen gleichbleibend tieferen Ton als die Frequenz des Horns."
      - "Beim Annähern einen Ton, der immer höher wird, weil der Wagen näher kommt."
      - "Immer denselben Ton, nur lauter und dann leiser."
      - "Beim Annähern einen tieferen Ton, weil die Wellen gegen den Fahrtwind ankämpfen müssen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Frequenzverschiebung hängt von der **Geschwindigkeit** ab, nicht vom Abstand. Bei konstanter Geschwindigkeit bleibt der höhere Ton gleich hoch. Lauter wird er beim Näherkommen, aber nicht höher.
      - wert: 2
        meldung: Lautstärke und Tonhöhe sind verschiedene Dinge. Die Tonhöhe ändert sich wirklich, weil beim Annähern mehr Wellenberge pro Sekunde ankommen.
      - wert: 3
        meldung: Annähern verdichtet die Wellenberge vor dem Wagen. Es kommen mehr pro Sekunde an, der Ton ist **höher**.
hinweise:
  - Hängt die Frequenzverschiebung vom Abstand oder von der Geschwindigkeit der Quelle ab?
loesung: |
  **Ansatz:** Beim Annähern liegen die Wellenberge vor dem Wagen dichter, beim Entfernen weiter auseinander.
  ---
  Bei konstanter Geschwindigkeit ist die Verdichtung immer gleich. Man hört also vorher einen konstant höheren und nachher einen konstant tieferen Ton. Nur die Lautstärke ändert sich mit dem Abstand.
```

```aufgabe
id: p8-8-quelle-naht
titel: Eine Quelle nähert sich
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Schallquelle mit $1000\,\text{Hz}$ bewegt sich mit $20\,\text{m/s}$ auf einen ruhenden Beobachter zu ($c = 340\,\text{m/s}$). Welche Frequenz hört er? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "1000*340/(340-20)"
    einheit: "Hz"
    anzeige: '1062{,}5'
    toleranz: 0.1
    fehler:
      - wert: "1000*340/(340+20)"
        meldung: Dein Ergebnis ist tiefer als $1000\,\text{Hz}$. Eine sich nähernde Quelle klingt aber höher. Beim Annähern steht $c - v_Q$ im Nenner.
      - wert: "1000*(340+20)/340"
        meldung: Das ist die Formel für einen bewegten **Beobachter**. Hier bewegt sich die Quelle, also gilt $f' = f\cdot c/(c - v_Q)$.
hinweise:
  - 'Bewegte Quelle, Annähern: $f'' = f\cdot c/(c - v_Q)$.'
loesung: |
  **Ansatz:** Die Quelle bewegt sich auf den ruhenden Beobachter zu. Also $f' = f\cdot\dfrac{c}{c - v_Q}$.
  ---
  $f' = 1000\,\text{Hz}\cdot\dfrac{340\,\text{m/s}}{320\,\text{m/s}} = 1062{,}5\,\text{Hz}$. Kontrolle: höher als $1000\,\text{Hz}$, wie es beim Annähern sein muss.
```

```aufgabe
id: p8-doppler-annaehern
titel: Martinshorn
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Krankenwagen fährt mit $25\,\text{m/s}$ an einem stehenden Passanten vorbei. Sein Horn sendet $700\,\text{Hz}$ ($c = 340\,\text{m/s}$). Welche Frequenz hört der Passant beim Herannahen und beim Wegfahren? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Herannahen
    loesung: "700*340/(340-25)"
    einheit: "Hz"
    anzeige: '755{,}6'
    fehler:
      - wert: "700*340/(340+25)"
        meldung: Das ist die Frequenz beim **Wegfahren**. Beim Herannahen liegen die Wellenberge dichter, der Ton ist höher als $700\,\text{Hz}$.
      - wert: "700*(340+25)/340"
        meldung: Das ist die Formel des bewegten Beobachters. Hier fährt die Quelle, der Passant steht.
  - typ: zahl
    label: Wegfahren
    loesung: "700*340/(340+25)"
    einheit: "Hz"
    anzeige: '652{,}1'
    fehler:
      - wert: "700*340/(340-25)"
        meldung: Beim Wegfahren muss der Ton **tiefer** als $700\,\text{Hz}$ sein. Im Nenner steht dann $c + v_Q$.
      - wert: "700*(340-25)/340"
        meldung: Das ist die Formel des bewegten Beobachters. Hier fährt die Quelle.
hinweise:
  - Wer bewegt sich relativ zur Luft, Quelle oder Beobachter?
  - 'Bewegte Quelle: $f'' = f\cdot c/(c \mp v_Q)$, Minus beim Annähern.'
gefuehrt:
  - text: Wer bewegt sich relativ zur Luft?
    teil:
      typ: auswahl
      optionen: ["die Quelle (der Krankenwagen)", "der Beobachter (der Passant)", "beide"]
      richtig: [0]
    erklaerung: Der Krankenwagen fährt, der Passant steht. Wir brauchen die Formel der bewegten Quelle.
  - text: Berechne die Frequenz beim Herannahen in Hz.
    teil: { typ: zahl, loesung: "700*340/(340-25)" }
    erklaerung: $f' = 700\,\text{Hz}\cdot 340/315 = 755{,}6\,\text{Hz}$.
  - text: Berechne die Frequenz beim Wegfahren in Hz.
    teil: { typ: zahl, loesung: "700*340/(340+25)" }
    erklaerung: $f' = 700\,\text{Hz}\cdot 340/365 = 652{,}1\,\text{Hz}$.
  - text: Wie groß ist der Sprung der Tonhöhe beim Vorbeifahren?
    teil: { typ: zahl, loesung: "700*340/(340-25) - 700*340/(340+25)" }
    erklaerung: $755{,}6\,\text{Hz} - 652{,}1\,\text{Hz} = 103{,}5\,\text{Hz}$. Das sind etwa zweieinhalb Halbtöne (ein Halbton ist der Abstand zweier benachbarter Klaviertasten), deutlich hörbar.
loesung: |
  **Modell:** Die Quelle bewegt sich, der Beobachter ruht. Beim Herannahen steht $c - v_Q$ im Nenner, beim Wegfahren $c + v_Q$.
  ---
  **Herannahen:** $f' = 700\,\text{Hz}\cdot\dfrac{340\,\text{m/s}}{315\,\text{m/s}} = 755{,}6\,\text{Hz}$.
  ---
  **Wegfahren:** $f' = 700\,\text{Hz}\cdot\dfrac{340\,\text{m/s}}{365\,\text{m/s}} = 652{,}1\,\text{Hz}$.
  ---
  **Kontrolle:** vorher höher, nachher tiefer als $700\,\text{Hz}$. Der Sprung von etwa $100\,\text{Hz}$ entspricht etwa zweieinhalb Halbtönen, also zweieinhalb Schritten von einer Klaviertaste zur nächsten.
```

```aufgabe
id: p8-doppler-beobachter
titel: Ein Motorradfahrer fährt auf eine Sirene zu
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine ruhende Sirene sendet $500\,\text{Hz}$ aus. Ein Motorradfahrer fährt mit $30\,\text{m/s}$ direkt auf sie zu ($c = 340\,\text{m/s}$, Windstille). Welche Frequenz hört er? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "500*(340+30)/340"
    einheit: "Hz"
    anzeige: '544{,}1'
    fehler:
      - wert: "500*340/(340-30)"
        meldung: Das ist die Formel der bewegten **Quelle**. Hier steht die Sirene still, und der Fahrer bewegt sich durch die Luft. Er sammelt zusätzliche Wellenberge ein, $f' = f\cdot(c + v_B)/c$.
      - wert: "500*(340-30)/340"
        meldung: Das Ergebnis ist tiefer als $500\,\text{Hz}$. Wer auf die Quelle zufährt, trifft aber **mehr** Wellenberge pro Sekunde.
hinweise:
  - Wer bewegt sich relativ zur Luft?
  - 'Bewegter Beobachter, Annähern: $f'' = f\cdot(c + v_B)/c$.'
loesung: |
  **Modell:** Die Quelle ruht, der Beobachter bewegt sich durch die Luft auf sie zu. Die Wellenberge liegen normal dicht, er trifft aber pro Sekunde zusätzlich $v_B/\lambda$ davon.
  ---
  **Formel:** $f' = f\cdot\dfrac{c + v_B}{c}$.
  ---
  **Rechnung:** $f' = 500\,\text{Hz}\cdot\dfrac{370\,\text{m/s}}{340\,\text{m/s}} = 544{,}1\,\text{Hz}$. Kontrolle: höher als $500\,\text{Hz}$, wie beim Annähern erwartet.
```

```aufgabe
id: p8-8-mach
titel: Der Mach-Kegel eines Kampfjets
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Flugzeug fliegt mit $680\,\text{m/s}$ ($c = 340\,\text{m/s}$). Berechne die Machzahl und den halben Öffnungswinkel des Mach-Kegels in Grad.
teile:
  - typ: zahl
    label: Machzahl
    loesung: "680/340"
    anzeige: '2'
    fehler:
      - wert: "340/680"
        meldung: Die Machzahl ist die Geschwindigkeit in Vielfachen der Schallgeschwindigkeit, $Ma = v_Q/c$. Bei Überschall ist sie größer als $1$.
  - typ: zahl
    label: halber Öffnungswinkel
    loesung: "inGrad(asin(340/680))"
    einheit: "°"
    anzeige: '30'
    fehler:
      - wert: "inGrad(acos(340/680))"
        meldung: Im Dreieck aus Schallweg $c\,t$ und Flugweg $v_Q\,t$ ist $c\,t$ die Gegenkathete zum Winkel $\alpha$. Also gilt $\sin\alpha = c/v_Q$, nicht der Kosinus.
hinweise:
  - 'Die Machzahl ist $Ma = v_Q/c$.'
  - 'Für den Kegel gilt $\sin\alpha = c/v_Q = 1/Ma$.'
loesung: |
  **Machzahl:** $Ma = \dfrac{v_Q}{c} = \dfrac{680\,\text{m/s}}{340\,\text{m/s}} = 2$.
  ---
  **Winkel:** $\sin\alpha = \dfrac{1}{Ma} = 0{,}5$, also $\alpha = 30^\circ$.
  ---
  **Deutung:** Je schneller das Flugzeug, desto schlanker der Kegel. Bei $Ma = 1$ wäre $\alpha = 90^\circ$, die Front stünde senkrecht vor dem Flugzeug.
```

```aufgabe
id: p8-8-zug-umkehr
titel: Geschwindigkeit aus dem Tonsprung
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Zug hupt mit konstanter Frequenz, während er an einem Bahnsteig vorbeifährt. Eine Messung ergibt beim Annähern $480\,\text{Hz}$ und beim Entfernen $400\,\text{Hz}$ ($c = 340\,\text{m/s}$).

  a) Wie schnell fährt der Zug? Runde auf eine Nachkommastelle.

  b) Mit welcher Frequenz hupt er wirklich? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Geschwindigkeit des Zuges
    loesung: "340*(480-400)/(480+400)"
    einheit: "m/s"
    anzeige: '30{,}9'
    fehler:
      - wert: "340*(480-400)/400"
        meldung: Du hast $400\,\text{Hz}$ als Ruhefrequenz angenommen und $480 = 400\cdot(c + v)/c$ gerechnet, also mit der Formel des bewegten Beobachters. $400\,\text{Hz}$ ist aber schon verschoben, und hier bewegt sich die Quelle. Teile die beiden Gleichungen durcheinander, dann fällt die unbekannte Frequenz heraus.
  - typ: zahl
    label: b) wahre Frequenz der Hupe
    loesung: "480*(340-340*(480-400)/(480+400))/340"
    einheit: "Hz"
    anzeige: '436{,}4'
    fehler:
      - wert: "(480+400)/2"
        meldung: Der Mittelwert liegt nahe, ist aber nicht genau. Die beiden Verschiebungen sind nicht gleich groß, weil $c - v$ und $c + v$ im **Nenner** stehen.
hinweise:
  - 'Schreibe beide Gleichungen auf: $480 = f\cdot\dfrac{c}{c - v}$ und $400 = f\cdot\dfrac{c}{c + v}$.'
  - 'Teile die erste durch die zweite. Dann kürzt sich $f$, und es bleibt $\dfrac{480}{400} = \dfrac{c + v}{c - v}$.'
loesung: |
  **Modell:** Bewegte Quelle, ruhender Beobachter. Annähern: $480\,\text{Hz} = f\cdot\dfrac{c}{c - v}$. Entfernen: $400\,\text{Hz} = f\cdot\dfrac{c}{c + v}$.
  ---
  **Teilen:** $\dfrac{480}{400} = \dfrac{c + v}{c - v} = 1{,}2$. Also $c + v = 1{,}2c - 1{,}2v$, umgeformt $2{,}2v = 0{,}2c$.
  ---
  **a)** $v = \dfrac{0{,}2}{2{,}2}\cdot 340\,\text{m/s} = 30{,}9\,\text{m/s}$, also rund $111\,\text{km/h}$.
  ---
  **b)** Aus der ersten Gleichung: $f = 480\,\text{Hz}\cdot\dfrac{c - v}{c} = 480\,\text{Hz}\cdot\dfrac{309{,}1}{340} = 436{,}4\,\text{Hz}$. Probe mit der zweiten: $436{,}4\cdot 340/370{,}9 = 400\,\text{Hz}$.
```

```aufgabe
id: p8-8-gedankenexperiment
titel: "Gedankenexperiment: Mit Schallgeschwindigkeit davonfliegen"
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Eine Glocke läutet ununterbrochen mit $500\,\text{Hz}$. Du sitzt in einem Flugzeug, das genau mit Schallgeschwindigkeit von der Glocke wegfliegt (Windstille). Was hörst du von der Glocke? Begründe mit der Formel des bewegten Beobachters und mit einem Bild der Wellenberge. Was wäre, wenn du schneller als der Schall wegfliegst?
teile:
  - typ: text
    muster: |
      Für einen Beobachter, der sich entfernt, gilt f' = f·(c − v_B)/c. Mit v_B = c folgt f' = 0. Anschaulich: Die
      Wellenberge laufen mit Schallgeschwindigkeit hinter mir her, ich fliege genauso schnell vor ihnen weg. Kein neuer
      Berg holt mich ein, also höre ich nichts von der Glocke. Fliege ich schneller als der Schall, entferne ich mich sogar
      von allen Wellenbergen, die schon vor mir lagen. Auch dann erreicht mich kein Ton. Die Formel würde eine negative
      Frequenz liefern, sie gilt dann nicht mehr.
hinweise:
  - 'Setze $v_B = c$ in $f'' = f\cdot(c - v_B)/c$ ein.'
  - Stell dir einen Wellenberg vor, der hinter dir herläuft. Holt er dich ein?
loesung: |
  **Formel:** Entfernt sich der Beobachter, gilt $f' = f\cdot\dfrac{c - v_B}{c}$. Mit $v_B = c$ wird $f' = 0$.
  ---
  **Bild:** Jeder Wellenberg läuft mit $c$ hinter dir her, du fliegst mit $c$ davon. Der Abstand bleibt gleich, kein Berg erreicht dich. Du hörst nichts.
  ---
  **Schneller als der Schall:** Du entfernst dich von allen Wellenbergen. Wieder erreicht dich kein Ton. Die Formel ergäbe eine negative Frequenz und verliert dort ihren Sinn. Das Gedankenexperiment zeigt: Der Doppler-Effekt beschreibt, wie oft Wellenberge ankommen.
```

## Schall, Tonhöhe, Klangfarbe und Instrumente

```aufgabe
id: p8-9-check
art: check
titel: "Vorwissen: Druck in Pascal"
niveau: 1
angabe: |
  Der normale Luftdruck beträgt etwa $1013\,\text{hPa}$ (Hektopascal). Wie viel ist das in Pascal?
teile:
  - typ: zahl
    loesung: "1013*100"
    einheit: "Pa"
    anzeige: '101\,300'
    fehler:
      - wert: "1013/100"
        meldung: Hekto bedeutet $100$. Ein Hektopascal sind **hundert** Pascal, die Zahl in Pascal ist also größer.
      - wert: "1013*1000"
        meldung: Das wäre Kilopascal. Hekto bedeutet $100$, nicht $1000$.
hinweise:
  - 'Die Vorsilbe Hekto bedeutet $10^2 = 100$.'
loesung: |
  $1\,\text{hPa} = 100\,\text{Pa}$, weil Hekto für den Faktor $100$ steht.
  ---
  $1013\,\text{hPa} = 101\,300\,\text{Pa}$. Druck ist Kraft pro Fläche, $1\,\text{Pa} = 1\,\text{N/m}^2$. Wiederholen: [Druck: Kraft pro Fläche](/lernen/physik1/hydro-aeromechanik/druck-kraft-pro-flaeche) im Kapitel Hydro- und Aeromechanik.
```

Die **Akustik** ist die Lehre vom Schall. Jetzt wenden wir alles, was wir über Wellen wissen, auf das an, was
wir hören. Der Stoffpunkt „Akustik“ der Prüfungsverordnung umfasst Schallausbreitung, Tonhöhe, Klangfarbe,
Lautstärke und die Erzeugung von Tönen in Instrumenten. Die Lautstärke bekommt einen eigenen Abschnitt.

### Schall ist eine Druckwelle

Eine Lautsprechermembran schiebt beim Vorschwingen die Luft vor sich zusammen. Es entsteht eine **Verdichtung**,
der Druck ist dort ein wenig höher als der normale Luftdruck. Beim Zurückschwingen entsteht eine **Verdünnung**
mit etwas geringerem Druck. Diese Druckschwankungen laufen als Longitudinalwelle durch die Luft.

:::definition[Schall]
**Schall** ist eine mechanische Welle in Gasen, Flüssigkeiten oder Festkörpern. In Luft besteht er aus kleinen,
periodischen Schwankungen des Luftdrucks um den Normaldruck. Hörbar ist Schall mit Frequenzen zwischen etwa
$16\,\text{Hz}$ und $20\,\text{kHz}$.

**Beispiel:** Bei einem normalen Gespräch schwankt der Druck am Ohr nur um etwa $0{,}02\,\text{Pa}$. Das ist
ungefähr ein Fünfmillionstel des Luftdrucks von $101\,300\,\text{Pa}$.

**Kein Beispiel:** Ein Luftstoß aus einem Föhn ist kein Schall. Dort strömt Luft als Ganzes, das ist Stofftransport.
Das Rauschen, das der Föhn **macht**, ist dagegen Schall.
:::

Das Ohr ist ein erstaunliches Messinstrument. Die Ohrmuschel sammelt den Schall, der Gehörgang leitet ihn zum
**Trommelfell**. Diese dünne Membran folgt den Druckschwankungen. Drei winzige **Gehörknöchelchen** (Hammer, Amboss,
Steigbügel) bilden einen Hebel und übertragen die Schwingung auf das viel kleinere ovale Fenster des Innenohrs. Weil
dieselbe Kraft dort auf eine kleinere Fläche wirkt, steigt der Druck etwa um den Faktor $20$. In der **Schnecke**
läuft dann eine Welle entlang einer Membran, die an verschiedenen Stellen für verschiedene Frequenzen in Resonanz
gerät. Haarzellen wandeln die Bewegung in Nervensignale um. Laute Geräusche können sie dauerhaft schädigen, und sie
wachsen nicht nach.

```aufgabe
id: p8-9-ohr-check
art: check
titel: "Was bewegt das Trommelfell?"
niveau: 1
angabe: |
  Was erreicht dein Trommelfell, wenn ein $3\,\text{m}$ entfernter Freund spricht?
teile:
  - typ: auswahl
    optionen:
      - "eine Druckschwankung, die durch die Luft weitergegeben wird"
      - "die Luft aus seinem Mund"
      - "ein Luftstrom, der vom Freund zu dir fließt"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Luft aus seinem Mund bleibt bei ihm. Schall transportiert keinen Stoff, nur die Druckschwankung wandert.
      - wert: 2
        meldung: |
          Ein Luftstrom wäre Wind, also Stofftransport. Schall ist eine Welle.
hinweise:
  - |
    Was transportiert eine Welle, und was nicht?
loesung: |
  Schall ist eine Longitudinalwelle. Jede Luftschicht schwingt nur ein winziges Stück hin und her.
  ---
  Am Trommelfell kommt die Druckschwankung an, nicht die Luft aus dem Mund.
```

Wie schnell der Schall läuft, hängt nur vom Medium und seiner Temperatur ab, **nicht** von der Frequenz. Wäre es
anders, kämen bei einem fernen Konzert die hohen und tiefen Töne nacheinander an, und Musik klänge verzerrt.

:::achtung[Fehler: hohe Töne sind schneller]
Bei einem Open-Air-Konzert stehst du $170\,\text{m}$ von der Bühne entfernt. Eine Schülerin meint: „Die hohe Flöte
mit $2000\,\text{Hz}$ hört man früher als den Kontrabass mit $50\,\text{Hz}$, weil hohe Töne schneller schwingen.“

Das ist falsch. Beide Töne laufen mit derselben Schallgeschwindigkeit, $340\,\text{m/s}$. Beide brauchen
$t = 170\,\text{m} : 340\,\text{m/s} = 0{,}50\,\text{s}$. Die Flöte schwingt schneller, aber ihre Welle ist dafür
kürzer: $\lambda = 0{,}17\,\text{m}$ gegen $6{,}8\,\text{m}$ beim Bass. Das Produkt $\lambda f = c$ ist gleich.
:::

### Hörbereich, Infraschall und Ultraschall

- **Infraschall:** unter etwa $16\,\text{Hz}$. Ihn erzeugen Erdbeben, Wind und Meeresbrandung. Elefanten
  verständigen sich damit über Kilometer.
- **Hörschall:** etwa $16\,\text{Hz}$ bis $20\,\text{kHz}$. Die Sprache liegt etwa zwischen $100\,\text{Hz}$ und
  $4\,\text{kHz}$. Ein Klavier reicht von $27{,}5\,\text{Hz}$ bis etwa $4{,}2\,\text{kHz}$ im Grundton.
- **Ultraschall:** über etwa $20\,\text{kHz}$. Fledermäuse, Delfine und medizinische Geräte nutzen ihn.

Die obere Hörgrenze sinkt mit dem Alter. Mit sechzig Jahren hören viele Menschen nur noch bis etwa
$10$ bis $12\,\text{kHz}$.

```aufgabe
id: p8-9-bereich-check
art: check
titel: "Hundepfeife"
niveau: 1
angabe: |
  Eine Hundepfeife erzeugt $25\,\text{kHz}$. Wie nennt man diesen Schall?
teile:
  - typ: auswahl
    optionen:
      - "Ultraschall"
      - "Infraschall"
      - "Hörschall"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Infraschall liegt **unter** etwa $16\,\text{Hz}$.
      - wert: 2
        meldung: |
          Der Hörbereich endet bei etwa $20\,\text{kHz}$. Darum hörst du die Pfeife nicht, der Hund schon.
hinweise:
  - |
    Der Hörbereich reicht etwa von $16\,\text{Hz}$ bis $20\,\text{kHz}$.
loesung: |
  $25\,\text{kHz}$ liegt über der oberen Hörgrenze.
  ---
  Das ist Ultraschall.
```

### Ton, Klang und Geräusch

:::definition[Ton, Klang, Geräusch]
- Ein **Ton** ist eine reine Sinusschwingung mit einer einzigen Frequenz, etwa von einer Stimmgabel.
- Ein **Klang** besteht aus einem Grundton und Obertönen, deren Frequenzen ganzzahlige Vielfache der
  Grundfrequenz sind. Musikinstrumente und gesungene Vokale erzeugen Klänge.
- Ein **Geräusch** ist ein unregelmäßiges Gemisch sehr vieler Frequenzen, etwa Rauschen oder Wind. Ein **Knall**
  ist ein kurzer, heftiger Druckstoß.

**Beispiel für einen Klang:** Eine Geige spielt das a mit $440\,\text{Hz}$ und gleichzeitig Obertöne mit $880$,
$1320$, $1760\,\text{Hz}$ und so weiter.

**Kein Klang:** Das Zischen einer Dampflok hat keinen Grundton mit Obertönen, es ist ein Geräusch.
:::

Die **Tonhöhe**, die wir hören, wird von der **Grundfrequenz** bestimmt. Die **Klangfarbe** dagegen hängt davon ab,
**wie stark** die einzelnen Obertöne vertreten sind. Darum klingt ein a auf der Geige anders als auf der Flöte, obwohl
beide dieselbe Grundfrequenz haben. Die Flöte hat schwache Obertöne und klingt weich. Die Geige hat kräftige Obertöne
und klingt hell und scharf. Die **Lautstärke** schließlich hängt von der Amplitude der Druckschwankung ab.

```plot
x: [0, 0.01]
y: [-1.8, 1.8]
hoehe: 260
achsen: { x: "t in s", y: "Druckschwankung" }
graphen:
  - { f: "sin(2*pi*200*x)", label: "Grundton 200 Hz", farbe: 1, gestrichelt: true }
  - { f: "sin(2*pi*200*x) + 0.5*sin(2*pi*400*x) + 0.3*sin(2*pi*600*x)", label: "Klang", farbe: 0 }
beschriftung: "Ein Klang (blau) aus einem Grundton mit 200 Hz und zwei Obertönen mit 400 Hz und 600 Hz. Er wiederholt sich im Takt des Grundtons, alle 5 ms, deshalb hört man die Tonhöhe 200 Hz. Die Form innerhalb einer Periode bestimmt die Obertonmischung, also die Klangfarbe. Gestrichelt zum Vergleich der reine Grundton."
```

### Oktave und Halbton: das Ohr hört Verhältnisse

Wenn sich die Frequenz verdoppelt, klingt der Ton eine **Oktave** höher. Von $220$ auf $440\,\text{Hz}$ ist eine
Oktave, von $440$ auf $880\,\text{Hz}$ wieder eine. Obwohl der zweite Schritt in Hertz doppelt so groß ist, empfinden
wir beide als gleich groß. Unser Gehör nimmt also **Frequenzverhältnisse** wahr, nicht Frequenzdifferenzen.

Die westliche Tonleiter teilt die Oktave in $12$ gleiche **Halbtonschritte**. Gleich heißt hier: gleiches
Verhältnis. Zwölfmal derselbe Faktor muss $2$ ergeben, also ist ein Halbton der Faktor
$$\sqrt[12]{2} = 2^{1/12} \approx 1{,}0595.$$
$k$ Halbtöne über einem Ton mit der Frequenz $f$ liegt die Frequenz $f\cdot 2^{k/12}$.

:::beispiel[Drei Halbtöne über dem Kammerton]
Der Kammerton a hat $440\,\text{Hz}$. Welche Frequenz hat der Ton drei Halbtöne darüber (das c)?

**Schritt 1, Ansatz:** Jeder Halbton multipliziert die Frequenz mit $2^{1/12}$. Drei Halbtöne multiplizieren mit
$2^{3/12} = 2^{1/4}$.

**Schritt 2, rechnen:** $2^{1/4} = 1{,}1892$, also $f = 440\,\text{Hz}\cdot 1{,}1892 = 523{,}3\,\text{Hz}$.

**Antwort:** Das c liegt bei $523{,}3\,\text{Hz}$. Probe: Zwölf Halbtöne ergäben $440\cdot 2 = 880\,\text{Hz}$, eine
Oktave.
:::

:::achtung[Fehler: Halbtöne als gleiche Hertz-Schritte gerechnet]
Ein Schüler teilt die Oktave von $440$ bis $880\,\text{Hz}$ in zwölf gleiche Stücke zu je $440 : 12 = 36{,}7\,\text{Hz}$.
Drei Halbtöne über $440\,\text{Hz}$ liegen für ihn bei $440 + 3\cdot 36{,}7 = 550\,\text{Hz}$.

Das ist falsch. Das Ohr hört Verhältnisse, darum sind Halbtöne gleiche **Faktoren**, nicht gleiche Summanden.
Richtig ist $440\,\text{Hz}\cdot 2^{3/12} = 523{,}3\,\text{Hz}$. Der Fehler von über $26\,\text{Hz}$ ist fast ein ganzer
Halbton, denn $550 : 523{,}3 \approx 1{,}051$, und ein Halbton ist der Faktor $1{,}0595$.
:::

### Wie Instrumente Töne erzeugen

Fast jedes Musikinstrument besteht aus zwei Teilen: einem **Schwinger**, der eine stehende Welle mit bestimmten
Eigenfrequenzen bildet, und einem **Resonator**, der den Schall wirksam an die Luft abgibt.

- **Saiteninstrumente:** Die Saite schwingt als stehende Welle mit $f_n = n\,c/(2L)$. Der hölzerne Körper strahlt ab.
- **Blasinstrumente:** Die Luftsäule im Rohr schwingt als stehende Welle. Offene Rohre wie die Flöte haben alle
  Harmonischen, Rohre mit einem geschlossenen Ende nur die ungeraden. Mit Grifflöchern oder Ventilen ändert man die
  wirksame Länge.
- **Schlaginstrumente:** Fell oder Platte schwingen in Eigenschwingungen, deren Frequenzen meist keine ganzzahligen
  Vielfachen sind. Darum klingt eine Trommel eher nach Geräusch als nach Ton.
- **Stimme:** Die Stimmbänder schwingen und erzeugen einen obertonreichen Klang. Rachen, Mund und Nase formen ihn.
  Verschiedene Mundstellungen verstärken verschiedene Obertöne, so entstehen die Vokale.

Mehr dazu, wie man Eigenfrequenzen berechnet, steht in
[Stehende Wellen: Saiten und Pfeifen](/lernen/physik1/wellen-akustik/stehende-wellen-saiten-und-pfeifen).

```aufgabe
id: p8-9-instrument-check
art: check
titel: "Greifen bei der Flöte"
niveau: 1
angabe: |
  Bei einer Flöte öffnest du ein Griffloch nahe am Mundstück. Die schwingende Luftsäule wird dadurch kürzer. Wie ändert sich der Ton?
teile:
  - typ: auswahl
    optionen:
      - "Er wird höher."
      - "Er wird tiefer."
      - "Er bleibt gleich, nur die Klangfarbe ändert sich."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Eine kürzere Luftsäule hat eine kürzere Wellenlänge und damit eine höhere Frequenz, $f = c/(2L)$.
      - wert: 2
        meldung: |
          Die wirksame Länge bestimmt die Grundfrequenz, also die Tonhöhe.
hinweise:
  - |
    Wie hängt die Grundfrequenz einer Pfeife von ihrer Länge ab?
loesung: |
  Für die offene Pfeife gilt $f_1 = c/(2L)$.
  ---
  Kürzere Luftsäule, höherer Ton.
```

### Ultraschall: Sehen mit Schall

Ultraschall hat kurze Wellenlängen. Er wird deshalb kaum gebeugt, lässt sich gut bündeln und wird schon an kleinen
Strukturen reflektiert. **Fledermäuse** orten Insekten mit Rufen um $50\,\text{kHz}$. In der **Medizin** schickt man
Ultraschall mit $1$ bis $15\,\text{MHz}$ in den Körper. An jeder Grenze zwischen zwei Gewebearten wird ein Teil
reflektiert, und aus den Laufzeiten der Echos berechnet ein Computer ein Bild. Das heißt **Sonographie**. Anders als
Röntgenstrahlung ist Ultraschall nicht ionisierend. Bei den Intensitäten, die Diagnosegeräte verwenden, schadet er
den Zellen nach heutigem Wissen nicht. Deshalb eignet er sich auch in der
Schwangerschaft. In der Technik findet man mit Ultraschall Risse in Schienen, misst mit dem **Echolot** die
Wassertiefe und reinigt Brillen und Schmuck.

:::beispiel[Ein Organ im Ultraschall]
Ein Sonographiegerät arbeitet mit $5{,}0\,\text{MHz}$. Im Gewebe ist $c = 1540\,\text{m/s}$. Wie lang sind die
Wellen, und nach welcher Zeit kommt das Echo von einer Grenzfläche in $6{,}0\,\text{cm}$ Tiefe zurück?

**Schritt 1, Wellenlänge:** $\lambda = \dfrac{c}{f} = \dfrac{1540\,\text{m/s}}{5{,}0\cdot 10^{6}\,\text{s}^{-1}} = 3{,}08\cdot 10^{-4}\,\text{m} = 0{,}31\,\text{mm}$.

**Schritt 2, Weg des Echos:** Der Schall läuft hin und zurück, $s = 2\cdot 0{,}060\,\text{m} = 0{,}120\,\text{m}$.

**Schritt 3, Laufzeit:** $t = \dfrac{s}{c} = \dfrac{0{,}120\,\text{m}}{1540\,\text{m/s}} = 7{,}8\cdot 10^{-5}\,\text{s} = 78\,\mu\text{s}$.

**Antwort:** Die Wellen sind etwa $0{,}3\,\text{mm}$ lang, so fein kann das Gerät auflösen. Das Echo kommt nach
$78$ Mikrosekunden. Ein Gerät misst Tausende solcher Laufzeiten pro Sekunde und setzt daraus das Bild zusammen.
:::

```reflexion
frage: Eine Flöte und eine Geige spielen beide das a mit 440 Hz, gleich laut. Was ist an den beiden Schallwellen gleich, was verschieden? Erkläre in zwei bis drei Sätzen.
antwort: |
  Gleich ist die Grundfrequenz von 440 Hz. Deshalb hört man dieselbe Tonhöhe, und beide Klänge wiederholen sich im selben
  Takt. Verschieden ist die Mischung der Obertöne mit 880, 1320, 1760 Hz und so weiter. Die Geige hat kräftigere Obertöne
  als die Flöte. Diese Mischung bestimmt die Form der Druckkurve innerhalb einer Periode und damit die Klangfarbe.
```

### Aufgaben zu Schall und Tönen

```aufgabe
id: p8-hoerbereich
titel: Hörbereich
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche dieser Frequenzen kann ein junger Mensch hören? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "$10\\,\\text{Hz}$"
      - "$440\\,\\text{Hz}$"
      - "$15\\,\\text{kHz}$"
      - "$40\\,\\text{kHz}$"
      - "$3\\,\\text{MHz}$"
    richtig: [1, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: $10\,\text{Hz}$ ist Infraschall. Man kann ihn manchmal als Vibration spüren, aber nicht als Ton hören. Die untere Hörgrenze liegt bei etwa $16\,\text{Hz}$.
      - wert: [1, 2, 3]
        meldung: $40\,\text{kHz}$ ist Ultraschall. Hunde und Fledermäuse hören ihn, Menschen nicht. Die obere Grenze liegt bei etwa $20\,\text{kHz}$.
      - wert: [1]
        meldung: Auch $15\,\text{kHz}$ hört ein junger Mensch noch, denn die obere Hörgrenze liegt bei etwa $20\,\text{kHz}$.
hinweise:
  - Der Hörbereich reicht etwa von $16\,\text{Hz}$ bis $20\,\text{kHz}$.
loesung: |
  **Ansatz:** Hörschall liegt etwa zwischen $16\,\text{Hz}$ und $20\,\text{kHz}$.
  ---
  $440\,\text{Hz}$ und $15\,\text{kHz}$ liegen darin. $10\,\text{Hz}$ ist Infraschall, $40\,\text{kHz}$ und $3\,\text{MHz}$ sind Ultraschall.
```

```aufgabe
id: p8-oktave
titel: Eine Oktave höher
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Ton hat $330\,\text{Hz}$. Welche Frequenz hat der Ton eine Oktave höher, und wie lang ist seine Welle in Luft ($c = 340\,\text{m/s}$)? Runde die Wellenlänge auf drei Nachkommastellen.
teile:
  - typ: zahl
    label: Frequenz
    loesung: "2*330"
    einheit: "Hz"
    anzeige: '660'
    fehler:
      - wert: "330+12"
        meldung: Eine Oktave sind zwar zwölf Halbtöne, aber keine zwölf Hertz. Eine Oktave höher heißt **doppelte** Frequenz.
      - wert: "330*8"
        meldung: Das Wort Oktave kommt von „acht“ (acht Stufen der Tonleiter), physikalisch bedeutet es aber eine Verdopplung der Frequenz.
  - typ: zahl
    label: Wellenlänge
    loesung: "340/660"
    einheit: "m"
    anzeige: '0{,}515'
    fehler:
      - wert: "340/330"
        meldung: Das ist die Wellenlänge des ursprünglichen Tons. Der höhere Ton hat die doppelte Frequenz und damit die halbe Wellenlänge.
hinweise:
  - Eine Oktave höher heißt doppelte Frequenz. Danach $\lambda = c/f$.
loesung: |
  **Frequenz:** Eine Oktave ist eine Verdopplung, $f = 2\cdot 330\,\text{Hz} = 660\,\text{Hz}$.
  ---
  **Wellenlänge:** $\lambda = \dfrac{340\,\text{m/s}}{660\,\text{s}^{-1}} = 0{,}515\,\text{m}$, halb so lang wie beim Ausgangston.
```

```aufgabe
id: p8-ultraschall-wellenlaenge
titel: Ultraschall im Gewebe
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein medizinisches Ultraschallgerät arbeitet mit $3{,}0\,\text{MHz}$. Im Körpergewebe ist $c = 1540\,\text{m/s}$. Berechne die Wellenlänge in Millimetern. Runde auf drei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "1540/3.0e6*1000"
    einheit: "mm"
    anzeige: '0{,}513'
    fehler:
      - wert: "1540/3.0e6"
        meldung: Das ist die Wellenlänge in **Metern**. Gefragt sind Millimeter, also mal $1000$.
      - wert: "1540/3.0*1000"
        meldung: Die Vorsilbe Mega fehlt. $3{,}0\,\text{MHz} = 3{,}0\cdot 10^{6}\,\text{Hz}$.
hinweise:
  - 'Rechne die Frequenz in Hz um: Mega bedeutet $10^6$.'
  - 'Berechne $\lambda = c/f$ in Metern und rechne dann in Millimeter um.'
gefuehrt:
  - text: Rechne die Frequenz in Hz um.
    teil: { typ: zahl, loesung: "3.0e6" }
    erklaerung: $3{,}0\,\text{MHz} = 3{,}0\cdot 10^{6}\,\text{Hz}$.
  - text: Berechne die Wellenlänge in Metern.
    teil: { typ: zahl, loesung: "1540/3.0e6" }
    erklaerung: |
      $\lambda = 1540\,\text{m/s} : 3{,}0\cdot 10^{6}\,\text{Hz} = 5{,}13\cdot 10^{-4}\,\text{m}$.
  - text: Rechne in Millimeter um.
    teil: { typ: zahl, loesung: "1540/3.0e6*1000" }
    erklaerung: Ein Meter hat $1000\,\text{mm}$, also $0{,}513\,\text{mm}$.
  - text: Was bedeutet das für die Bildschärfe?
    erklaerung: Strukturen, die deutlich kleiner als etwa eine Wellenlänge sind, kann das Gerät nicht auflösen. Bei $3\,\text{MHz}$ liegt die Grenze also bei etwa einem halben Millimeter.
loesung: |
  **Umrechnen:** $f = 3{,}0\,\text{MHz} = 3{,}0\cdot 10^{6}\,\text{Hz}$.
  ---
  **Wellenlänge:** $\lambda = \dfrac{1540\,\text{m/s}}{3{,}0\cdot 10^{6}\,\text{s}^{-1}} = 5{,}13\cdot 10^{-4}\,\text{m} = 0{,}513\,\text{mm}$.
  ---
  **Deutung:** Strukturen ab etwa einem halben Millimeter lassen sich damit auflösen. Für feinere Bilder nimmt man höhere Frequenzen, die aber weniger tief eindringen.
```

```aufgabe
id: p8-fledermaus
titel: Eine Fledermaus ortet ein Insekt
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Eine Fledermaus empfängt das Echo ihres Rufs nach $20\,\text{ms}$ ($c = 340\,\text{m/s}$). Wie weit ist das Insekt entfernt?
teile:
  - typ: zahl
    loesung: "340*0.020/2"
    einheit: "m"
    anzeige: '3{,}4'
    fehler:
      - wert: "340*0.020"
        meldung: Der Ruf läuft zum Insekt **und** zurück. Die Entfernung ist der halbe Weg.
      - wert: "340*20/2"
        meldung: Rechne die Millisekunden in Sekunden um, $20\,\text{ms} = 0{,}020\,\text{s}$.
hinweise:
  - Rechne die Zeit in Sekunden um.
  - Der Schall legt den Weg hin und zurück.
loesung: |
  **Modell:** Der Ruf läuft zum Insekt und als Echo zurück. In der Zeit $t$ legt er also die doppelte Entfernung zurück, $2d = c\,t$.
  ---
  **Umrechnen:** $t = 20\,\text{ms} = 0{,}020\,\text{s}$.
  ---
  **Rechnung:** $d = \dfrac{340\,\text{m/s}\cdot 0{,}020\,\text{s}}{2} = 3{,}4\,\text{m}$.
```

```aufgabe
id: p8-9-klangfarbe
titel: Was unterscheidet Flöte und Geige?
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Eine Flöte und eine Geige spielen gleich laut denselben Ton a. Trotzdem erkennst du die Instrumente sofort. Worin unterscheiden sich die beiden Schallwellen?
teile:
  - typ: auswahl
    optionen:
      - "in der Grundfrequenz"
      - "in der Stärke der einzelnen Obertöne"
      - "in der Schallgeschwindigkeit, mit der sie dich erreichen"
      - "in der Lautstärke"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Grundfrequenz bestimmt die Tonhöhe. Beide spielen dasselbe a, also haben sie dieselbe Grundfrequenz.
      - wert: 2
        meldung: Die Schallgeschwindigkeit hängt nur von der Luft ab, nicht vom Instrument oder von der Frequenz.
      - wert: 3
        meldung: Laut Angabe spielen beide gleich laut. Der Unterschied liegt in der Mischung der Obertöne.
hinweise:
  - Tonhöhe, Lautstärke und Klangfarbe hängen von verschiedenen Eigenschaften der Welle ab.
  - Gleiche Tonhöhe heißt gleiche Grundfrequenz. Gleiche Lautstärke heißt etwa gleiche Amplitude. Was bleibt übrig?
loesung: |
  **Ansatz:** Tonhöhe kommt von der Grundfrequenz, Lautstärke von der Amplitude, Klangfarbe von der Obertonmischung.
  ---
  Gleiche Tonhöhe und gleiche Lautstärke lassen nur die Obertöne als Unterschied.
  ---
  Die Geige hat kräftigere Obertöne als die Flöte, ihre Druckkurve sieht innerhalb einer Periode anders aus. Das ist die Klangfarbe.
```

```aufgabe
id: p8-9-halbton
titel: Ein Tritonus
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Ton hat $300\,\text{Hz}$. Welche Frequenz hat der Ton, der sechs Halbtöne höher liegt (ein sogenannter Tritonus)? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "300*2^(6/12)"
    einheit: "Hz"
    anzeige: '424{,}3'
    fehler:
      - wert: "300*1.5"
        meldung: Du hast die halbe Oktave als „halbe Frequenzverdopplung“, also $+50\,\%$, gerechnet. Halbtöne sind aber gleiche **Faktoren**. Sechs Halbtöne sind der Faktor $2^{6/12} = \sqrt 2$.
      - wert: "300*2^6"
        meldung: Ein Halbton ist der Faktor $2^{1/12}$, nicht $2$. Sechs Halbtöne sind $2^{6/12}$.
hinweise:
  - 'Ein Halbton ist der Faktor $2^{1/12}$.'
  - 'Sechs Halbtöne: $2^{6/12} = \sqrt 2$.'
loesung: |
  **Ansatz:** Jeder Halbton multipliziert die Frequenz mit $2^{1/12}$. Sechs Halbtöne ergeben den Faktor $2^{6/12} = \sqrt 2 \approx 1{,}414$.
  ---
  **Rechnung:** $f = 300\,\text{Hz}\cdot 1{,}414 = 424{,}3\,\text{Hz}$.
  ---
  **Probe:** Noch einmal sechs Halbtöne ergäben $424{,}3\cdot 1{,}414 = 600\,\text{Hz}$, die Oktave. Das passt.
```

```aufgabe
id: p8-9-fermi
titel: "Abschätzung: Wie viele Menschen für ein Watt Schall?"
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Eine Person, die in normaler Lautstärke spricht, strahlt eine Schallleistung von etwa $10\,\mu\text{W}$ ab. Wie viele Menschen müssten gleichzeitig sprechen, damit ihre Schallleistung zusammen $5\,\text{W}$ ergibt, so viel elektrische Leistung wie eine kleine LED-Lampe braucht? Wähle die passende Größenordnung.
teile:
  - typ: auswahl
    optionen:
      - "etwa 50"
      - "etwa 5000"
      - "etwa 500 000"
      - "etwa 50 Millionen"
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Prüfe die Vorsilbe. $10\,\mu\text{W} = 10\cdot 10^{-6}\,\text{W} = 10^{-5}\,\text{W}$, nicht $10^{-3}\,\text{W}$.
      - wert: 0
        meldung: Das wäre richtig, wenn jeder Mensch $0{,}1\,\text{W}$ Schall abstrahlen würde. Das ist zehntausendmal zu viel.
      - wert: 3
        meldung: Ein Faktor $100$ zu viel. Teile $5\,\text{W}$ durch $10^{-5}\,\text{W}$. Das ergibt $5\cdot 10^{5}$.
hinweise:
  - 'Rechne $10\,\mu\text{W}$ in Watt um. Mikro bedeutet $10^{-6}$.'
  - Teile die Gesamtleistung durch die Leistung pro Person.
loesung: |
  **Modell:** Alle Sprecher strahlen gleich viel ab, die Leistungen addieren sich. Gesucht ist $N = P_{\text{ges}}/P_1$.
  ---
  **Umrechnen:** $P_1 = 10\,\mu\text{W} = 10^{-5}\,\text{W}$.
  ---
  **Rechnung:** $N = \dfrac{5\,\text{W}}{10^{-5}\,\text{W}} = 5\cdot 10^{5}$, also etwa eine halbe Million Menschen.
  ---
  **Deutung:** Schall transportiert erstaunlich wenig Leistung. Dass wir ihn trotzdem gut hören, liegt an der enormen Empfindlichkeit des Ohrs. Selbst ein Fußballstadion mit $50\,000$ schreienden Fans bringt es nur auf einige zehn Watt, wenn man grob $1\,\text{mW}$ pro schreiender Person schätzt.
```

```aufgabe
id: p8-9-sonographie
titel: Wie dick ist das Organ?
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Ultraschallgerät empfängt von einem Organ zwei Echos: von der Vorderseite nach $52\,\mu\text{s}$ und von der Rückseite nach $78\,\mu\text{s}$. Im Gewebe ist $c = 1540\,\text{m/s}$.

  a) In welcher Tiefe liegt die Vorderseite? Antwort in cm.

  b) Wie dick ist das Organ? Antwort in cm.
teile:
  - typ: zahl
    label: a) Tiefe der Vorderseite
    loesung: "1540*52e-6/2*100"
    einheit: "cm"
    anzeige: '4{,}0'
    fehler:
      - wert: "1540*52e-6*100"
        meldung: Die Laufzeit gilt für Hin- und Rückweg. Die Tiefe ist der halbe Weg.
  - typ: zahl
    label: b) Dicke des Organs
    loesung: "1540*(78e-6-52e-6)/2*100"
    einheit: "cm"
    anzeige: '2{,}0'
    fehler:
      - wert: "1540*(78e-6-52e-6)*100"
        meldung: Der Zeitunterschied enthält den Weg durch das Organ **zweimal**, hin und zurück. Teile durch $2$.
      - wert: "1540*78e-6/2*100"
        meldung: Das ist die Tiefe der Rückseite, nicht die Dicke. Ziehe die Tiefe der Vorderseite ab.
hinweise:
  - Jedes Echo legt die Tiefe zweimal zurück.
  - 'Die Dicke folgt aus dem Zeitunterschied der beiden Echos: $d = c\,\Delta t/2$.'
loesung: |
  **Modell:** Ein Echo aus der Tiefe $s$ braucht $t = 2s/c$. Also ist $s = c\,t/2$.
  ---
  **a)** $s_1 = \dfrac{1540\,\text{m/s}\cdot 52\cdot 10^{-6}\,\text{s}}{2} = 0{,}040\,\text{m} = 4{,}0\,\text{cm}$.
  ---
  **b)** Der Zeitunterschied ist $\Delta t = 26\,\mu\text{s}$. Darin läuft der Schall durch das Organ hin und zurück: $d = \dfrac{1540\,\text{m/s}\cdot 26\cdot 10^{-6}\,\text{s}}{2} = 0{,}020\,\text{m} = 2{,}0\,\text{cm}$.
  ---
  **Probe:** Rückseite in $s_2 = 1540\cdot 78\cdot 10^{-6}/2\,\text{m} = 6{,}0\,\text{cm}$. Und $6{,}0 - 4{,}0 = 2{,}0\,\text{cm}$.
```

## Schallintensität und Schallpegel: warum Dezibel logarithmisch sind

```aufgabe
id: p8-10-check
art: check
titel: "Vorwissen: Logarithmus eines Produkts"
niveau: 1
angabe: |
  Es gilt $\lg 2 \approx 0{,}301$. Berechne $\lg 200$, ohne die Logarithmustaste für $200$ zu benutzen. Runde auf drei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "lg(200)"
    anzeige: '2{,}301'
    fehler:
      - wert: "100*0.301"
        meldung: Der Logarithmus eines Produkts ist die **Summe** der Logarithmen, nicht das Produkt. $\lg(100\cdot 2) = \lg 100 + \lg 2$.
      - wert: "0.301"
        meldung: Du hast den Faktor $100$ vergessen. $\lg 100 = 2$ muss noch dazu.
hinweise:
  - '$200 = 100\cdot 2$ und $\lg(a\cdot b) = \lg a + \lg b$.'
loesung: |
  Nach dem Logarithmengesetz ist $\lg(100\cdot 2) = \lg 100 + \lg 2$.
  ---
  $\lg 200 = 2 + 0{,}301 = 2{,}301$. Wiederholen: Mathematik, Kapitel Zahlen, Lektion [Logarithmen](/lernen/mathe3/zahlen/logarithmen).
```

Wie laut ist ein Schall? Diese Frage beantworten zwei Größen. Die **Intensität** ist eine physikalische Größe mit
Einheit. Der **Schallpegel** ist ihr Logarithmus und passt zu unserem Hörempfinden. Hier liegt die dritte Hürde des
Kapitels: Dezibel rechnen anders als gewöhnliche Zahlen.

### Die Schallintensität

:::definition[Schallintensität]
Die **Schallintensität** $I$ ist die Schallleistung, die senkrecht durch eine Fläche von $1\,\text{m}^2$ tritt:
$$I = \frac{P}{A}, \qquad [I] = \text{W/m}^2.$$
Dabei ist $P$ die Leistung in Watt und $A$ die Fläche in Quadratmetern.

**Beispiel:** Ein normales Gespräch erzeugt am Ohr etwa $10^{-6}\,\text{W/m}^2$.

**Kein Beispiel:** Die elektrische Leistung eines Lautsprechers, zum Beispiel $50\,\text{W}$, ist keine
Schallintensität. Sie ist eine Leistung ohne Bezug auf eine Fläche, und nur etwa ein Prozent davon wird überhaupt zu Schall.
:::

Eine kleine Schallquelle, die gleichmäßig in alle Richtungen abstrahlt, verteilt ihre Leistung auf Kugeloberflächen
$4\pi r^2$. Im Abstand $r$ gilt deshalb
$$I = \frac{P}{4\pi r^2}.$$
Doppelter Abstand bedeutet vierfache Fläche, also ein Viertel der Intensität. Zehnfacher Abstand bedeutet ein
Hundertstel. Das ist das **Abstandsgesetz** für Punktquellen. Es gilt im Freien ohne Reflexionen.

### Warum man eine logarithmische Skala braucht

Das Ohr hört noch Intensitäten ab etwa $I_0 = 10^{-12}\,\text{W/m}^2$, der **Hörschwelle** bei $1\,\text{kHz}$. Die
**Schmerzgrenze** liegt bei etwa $1\,\text{W/m}^2$. Dazwischen liegen zwölf Zehnerpotenzen, ein Faktor von einer
Billion. Auf einer gewöhnlichen Skala wäre ein Gespräch von einem Flüstern kaum zu unterscheiden.

Dazu kommt das Empfinden. Eine zehnfache Intensität klingt nicht zehnmal so laut, sondern nur etwa doppelt so laut.
Das Ohr bewertet wie bei der Tonhöhe **Verhältnisse**. Ein Logarithmus macht aus Verhältnissen gleiche Schritte. Darum
misst man Schall mit einer logarithmischen Skala (Logarithmen siehe Mathematik, Kapitel Zahlen, Lektion
[Logarithmen](/lernen/mathe3/zahlen/logarithmen)).

:::definition[Schallpegel]
Der **Schallpegel** (genauer Schallintensitätspegel) ist
$$L = 10\cdot\lg\frac{I}{I_0}\ \text{dB}, \qquad I_0 = 10^{-12}\,\text{W/m}^2.$$
Dabei ist $I$ die Intensität am Messort, $I_0$ die Hörschwelle und $\lg$ der Zehnerlogarithmus. Die Einheit
**Dezibel** (dB) ist ein Zehntel Bel, daher der Faktor $10$.

**Beispiel:** $I = 10^{-6}\,\text{W/m}^2$ ergibt $L = 10\cdot\lg 10^{6}\,\text{dB} = 60\,\text{dB}$, ein normales Gespräch.

**Kein Beispiel für eine Intensität:** $60\,\text{dB}$ sind **kein** Sechzigfaches von irgendetwas. Der Pegel zählt
Zehnerpotenzen. Zwei Quellen mit je $60\,\text{dB}$ ergeben nicht $120\,\text{dB}$.
:::

Umgekehrt erhält man die Intensität aus dem Pegel, indem man durch $10$ teilt und $10$ damit potenziert:
$$I = I_0\cdot 10^{L/10\,\text{dB}}.$$

:::beispiel[Pegel an einer Kreuzung]
An einer Kreuzung misst man die Intensität $3{,}2\cdot 10^{-5}\,\text{W/m}^2$. Wie groß ist der Schallpegel?

**Schritt 1, Verhältnis:** $\dfrac{I}{I_0} = \dfrac{3{,}2\cdot 10^{-5}\,\text{W/m}^2}{10^{-12}\,\text{W/m}^2} = 3{,}2\cdot 10^{7}$.
Die Einheiten kürzen sich, der Logarithmus braucht eine reine Zahl.

**Schritt 2, Logarithmus:** $\lg(3{,}2\cdot 10^{7}) = \lg 3{,}2 + 7 = 0{,}505 + 7 = 7{,}505$.

**Schritt 3, Pegel:** $L = 10\cdot 7{,}505\,\text{dB} = 75{,}1\,\text{dB}$.

**Antwort:** An der Kreuzung herrschen etwa $75\,\text{dB}$. Die Zahl vor dem Komma von $7{,}505$ zählt die
Zehnerpotenzen über der Hörschwelle.
:::

### Die wichtigsten Rechenregeln

Aus dem Logarithmengesetz $\lg(a\cdot b) = \lg a + \lg b$ folgt: Wird die Intensität mit einem Faktor $k$ multipliziert,
steigt der Pegel um $10\cdot\lg k$ Dezibel.

:::merke
- Zehnfache Intensität: $+10\,\text{dB}$. Hundertfache: $+20\,\text{dB}$. Tausendfache: $+30\,\text{dB}$.
- Doppelte Intensität, zum Beispiel zwei gleich laute Quellen: $+10\lg 2 = +3\,\text{dB}$.
- $n$ gleich laute Quellen: $+10\lg n$ Dezibel.
- Doppelter Abstand von einer Punktquelle: ein Viertel der Intensität, also $-6\,\text{dB}$.
- Zehnfacher Abstand: ein Hundertstel, also $-20\,\text{dB}$.
- Ab etwa $85\,\text{dB}$ über viele Stunden drohen bleibende Gehörschäden.
:::

Einige typische Werte zur Orientierung: Blätterrauschen etwa $20\,\text{dB}$, ruhiges Wohnzimmer $30\,\text{dB}$,
Gespräch $50$ bis $60\,\text{dB}$, Straßenverkehr $70$ bis $80\,\text{dB}$, Disco $100$ bis $110\,\text{dB}$,
Düsenflugzeug in $30\,\text{m}$ Abstand etwa $130\,\text{dB}$.

:::achtung[Fehler: Dezibel einfach addiert]
Zwei gleich laute Maschinen erzeugen je $80\,\text{dB}$. Ein Schüler schreibt: „Zusammen $80 + 80 = 160\,\text{dB}$.“

Das ist falsch, $160\,\text{dB}$ würden das Trommelfell zerreißen. Addieren darf man nur die **Intensitäten**. Zwei
gleiche Quellen ergeben die doppelte Intensität, also $L = 80\,\text{dB} + 10\lg 2\,\text{dB} = 83\,\text{dB}$.
:::

:::achtung[Fehler: doppelter Abstand, halbe Intensität]
In $3\,\text{m}$ Abstand von einer kleinen Quelle misst man $90\,\text{dB}$. Eine Schülerin rechnet für $6\,\text{m}$:
„Halbe Intensität, also $90 - 3 = 87\,\text{dB}$.“

Das ist falsch. Die Intensität fällt mit $1/r^2$. Doppelter Abstand ergibt ein **Viertel** der Intensität:
$L = 90\,\text{dB} + 10\lg\tfrac14\,\text{dB} = 90\,\text{dB} - 6\,\text{dB} = 84\,\text{dB}$.
:::

:::beispiel[Ein Lautsprecher bei einem Straßenfest]
Ein Lautsprecher strahlt eine Schallleistung von $0{,}20\,\text{W}$ gleichmäßig in alle Richtungen ab. Welcher Pegel
herrscht in $5{,}0\,\text{m}$ und in $50\,\text{m}$ Abstand?

**Schritt 1, Intensität in 5 m:** $I = \dfrac{P}{4\pi r^2} = \dfrac{0{,}20\,\text{W}}{4\pi\cdot(5{,}0\,\text{m})^2} = \dfrac{0{,}20\,\text{W}}{314\,\text{m}^2} = 6{,}37\cdot 10^{-4}\,\text{W/m}^2$.

**Schritt 2, Pegel in 5 m:** $L = 10\cdot\lg\dfrac{6{,}37\cdot 10^{-4}}{10^{-12}}\,\text{dB} = 10\cdot\lg(6{,}37\cdot 10^{8})\,\text{dB} = 10\cdot 8{,}80\,\text{dB} = 88{,}0\,\text{dB}$.

**Schritt 3, in 50 m:** Zehnfacher Abstand bedeutet ein Hundertstel der Intensität, also $-20\,\text{dB}$:
$L = 88{,}0\,\text{dB} - 20\,\text{dB} = 68{,}0\,\text{dB}$.

**Antwort:** Nahe am Lautsprecher $88\,\text{dB}$, in $50\,\text{m}$ noch $68\,\text{dB}$, etwa so laut wie
Straßenverkehr. Ein Fünftel Watt Schall reicht für ein ganzes Fest.
:::

### Lautstärke und Frequenz: Kurven gleicher Lautstärke

Das Ohr ist nicht für alle Frequenzen gleich empfindlich. Ein tiefer Ton mit $50\,\text{Hz}$ braucht einen viel
höheren Pegel als ein Ton mit $1000\,\text{Hz}$, damit er gleich laut wirkt. Man misst die **empfundene Lautstärke**
deshalb in einer eigenen Einheit, dem **Phon**. Ein Ton hat $40\,\text{phon}$, wenn er so laut wirkt wie ein
$1000$-Hz-Ton mit $40\,\text{dB}$. Verbindet man alle Töne gleicher Lautstärke, erhält man eine **Kurve gleicher
Lautstärke**.

```plot
x: [1.5, 4.2]
y: [20, 100]
hoehe: 300
achsen: { x: "lg(f / Hz)", y: "Schallpegel L in dB" }
graphen:
  - { f: "4.0827*x^4 - 44.0785*x^3 + 186.4867*x^2 - 384.2072*x + 372.988", label: "40 phon", farbe: 0 }
punkte:
  - { x: 3, y: 39.3, label: "1 kHz", farbe: 1 }
  - { x: 1.699, y: 76.4, label: "50 Hz", farbe: 2 }
beschriftung: "Vereinfachte Kurve gleicher Lautstärke für 40 phon. Waagrecht steht der Zehnerlogarithmus der Frequenz: 2 bedeutet 100 Hz, 3 bedeutet 1000 Hz, 4 bedeutet 10 000 Hz. Jeder Punkt der Kurve klingt gleich laut wie ein 1-kHz-Ton mit 40 dB. Am tiefsten liegt die Kurve bei etwa 3 kHz, dort ist das Ohr am empfindlichsten."
```

Die waagrechte Achse ist logarithmisch geteilt, damit man den großen Frequenzbereich übersichtlich zeigen kann. Lies
ab: Bei $50\,\text{Hz}$ (bei $\lg 50 = 1{,}70$) liegt die Kurve bei etwa $76\,\text{dB}$. Ein $50$-Hz-Brummen braucht
also rund $76\,\text{dB}$, um so laut zu wirken wie ein $1$-kHz-Ton mit $40\,\text{dB}$. Am empfindlichsten ist das
Ohr zwischen $2$ und $5\,\text{kHz}$, genau im Bereich, in dem wichtige Teile der Sprache liegen. Schallpegelmesser
bewerten deshalb die Frequenzen mit einem Filter, das diese Empfindlichkeit grob nachbildet. Ihre Anzeige trägt die
Einheit **dB(A)**.

```reflexion
frage: Ein Freund sagt, 60 dB sei doppelt so laut wie 30 dB, weil 60 doppelt so viel wie 30 ist. Was antwortest du ihm? Rechne mit Intensitäten und mit dem Empfinden.
antwort: |
  Der Unterschied ist 30 dB, das sind drei Zehnerpotenzen. Die Intensität ist also tausendmal so groß, nicht doppelt.
  Für das Empfinden gilt die Faustregel: +10 dB klingt etwa doppelt so laut. 30 dB mehr klingt daher etwa 2·2·2 = 8-mal
  so laut. Dezibel sind keine gewöhnlichen Zahlen, sie zählen Zehnerpotenzen der Intensität.
```

### Aufgaben zum Schallpegel

```aufgabe
id: p8-pegel-zehnfach
titel: Hundertfache Intensität
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Die Schallintensität an einem Ort steigt auf das Hundertfache. Um wie viele Dezibel steigt der Schallpegel?
teile:
  - typ: zahl
    loesung: "10*lg(100)"
    einheit: "dB"
    anzeige: '20'
    fehler:
      - wert: "100"
        meldung: Der Pegel wächst nicht proportional zur Intensität. Er wächst um $10\cdot\lg 100 = 10\cdot 2$ Dezibel.
      - wert: "lg(100)"
        meldung: Der Faktor $10$ vor dem Logarithmus fehlt. Ohne ihn erhältst du Bel, nicht Dezibel.
hinweise:
  - 'Faktor $k$ in der Intensität bedeutet $+10\cdot\lg k$ Dezibel.'
loesung: |
  **Ansatz:** Aus $L = 10\lg(I/I_0)$ und $\lg(100\,I) = \lg 100 + \lg I$ folgt: Der Pegel steigt um $10\lg 100\,\text{dB}$.
  ---
  $\Delta L = 10\cdot 2\,\text{dB} = 20\,\text{dB}$. Subjektiv klingt das etwa viermal so laut.
```

```aufgabe
id: p8-schallpegel
titel: Schallpegel berechnen
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  An einer Straße wird die Schallintensität $1{,}0\cdot 10^{-5}\,\text{W/m}^2$ gemessen. Wie groß ist der Schallpegel?
teile:
  - typ: zahl
    loesung: "10*lg(1.0e-5/1e-12)"
    einheit: "dB"
    anzeige: '70'
    fehler:
      - wert: "10*lg(1.0e-5)"
        meldung: Du hast vergessen, durch die Hörschwelle $I_0 = 10^{-12}\,\text{W/m}^2$ zu teilen. Ein negativer Pegel wäre leiser als die Hörschwelle.
      - wert: "lg(1.0e-5/1e-12)"
        meldung: Der Faktor $10$ fehlt. $7$ ist der Pegel in Bel, in Dezibel sind es $70$.
hinweise:
  - '$L = 10\cdot\lg(I/I_0)$ mit $I_0 = 10^{-12}\,\text{W/m}^2$.'
loesung: |
  **Verhältnis:** $\dfrac{I}{I_0} = \dfrac{10^{-5}\,\text{W/m}^2}{10^{-12}\,\text{W/m}^2} = 10^{7}$.
  ---
  **Pegel:** $L = 10\cdot\lg 10^{7}\,\text{dB} = 70\,\text{dB}$. Das entspricht lautem Straßenverkehr.
```

```aufgabe
id: p8-pegel-verdoppeln
titel: Zwei Rasenmäher
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Rasenmäher erzeugt an einem Ort $70\,\text{dB}$. Wie groß ist der Pegel dort, wenn zwei gleich laute Rasenmäher laufen? Runde auf ganze dB.
teile:
  - typ: zahl
    loesung: "70+10*lg(2)"
    einheit: "dB"
    toleranz: 0.5
    anzeige: '73'
    fehler:
      - wert: "140"
        meldung: Dezibel darf man nicht addieren. Addieren darf man die Intensitäten. Doppelte Intensität bedeutet $+3\,\text{dB}$.
      - wert: "70"
        meldung: Zwei Rasenmäher sind lauter als einer. Die Intensitäten addieren sich, aus zwei gleichen wird die doppelte.
hinweise:
  - Die Intensitäten addieren sich, nicht die Pegel.
  - 'Doppelte Intensität: $+10\lg 2 \approx +3\,\text{dB}$.'
loesung: |
  **Ansatz:** Die beiden Quellen liefern zusammen die doppelte Intensität. Der Pegel steigt um $10\lg 2\,\text{dB}$.
  ---
  **Rechnung:** $L = 70\,\text{dB} + 10\cdot 0{,}301\,\text{dB} = 73\,\text{dB}$.
  ---
  **Deutung:** Nicht $140\,\text{dB}$! Der zweite Mäher macht es nur wenig lauter. Erst zehn Mäher ergäben $+10\,\text{dB}$.
```

```aufgabe
id: p8-pegel-abstand
titel: Pegel und Abstand
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  In $2\,\text{m}$ Abstand von einer kleinen Schallquelle misst man $90\,\text{dB}$. Welcher Pegel herrscht in $20\,\text{m}$ Abstand? Die Quelle strahlt gleichmäßig ab, Reflexionen gibt es keine.
teile:
  - typ: zahl
    loesung: "90+10*lg((2/20)^2)"
    einheit: "dB"
    anzeige: '70'
    fehler:
      - wert: "90-10"
        meldung: Die Intensität fällt nicht mit $1/r$, sondern mit $1/r^2$. Zehnfacher Abstand ergibt ein **Hundertstel** der Intensität, also $-20\,\text{dB}$.
      - wert: "9"
        meldung: Den Pegel darf man nicht durch das Abstandsverhältnis teilen. Rechne mit der Intensität und dann mit $10\lg$.
hinweise:
  - 'Für eine Punktquelle gilt $I \propto 1/r^2$.'
  - Zehnfacher Abstand ergibt ein Hundertstel der Intensität. Wie viele Dezibel sind das?
loesung: |
  **Modell:** Abstandsgesetz $I \propto 1/r^2$. Also $\dfrac{I_2}{I_1} = \left(\dfrac{2\,\text{m}}{20\,\text{m}}\right)^2 = \dfrac{1}{100}$.
  ---
  **Pegeländerung:** $10\lg\tfrac{1}{100}\,\text{dB} = -20\,\text{dB}$.
  ---
  **Ergebnis:** $L_2 = 90\,\text{dB} - 20\,\text{dB} = 70\,\text{dB}$.
```

```aufgabe
id: p8-intensitaet-leistung
titel: Lautsprecher im Freien
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Lautsprecher strahlt eine Schallleistung von $0{,}10\,\text{W}$ gleichmäßig in alle Richtungen ab. Berechne Intensität und Schallpegel in $10\,\text{m}$ Abstand. Runde den Pegel auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Intensität
    loesung: "0.10/(4*pi*10^2)"
    einheit: "W/m²"
    anzeige: '7{,}96\cdot 10^{-5}'
    fehler:
      - wert: "0.10/(4*pi*10)"
        meldung: Der Abstand muss quadriert werden. Die Kugeloberfläche ist $4\pi r^2$.
      - wert: "0.10/(pi*10^2)"
        meldung: Das ist die Fläche eines Kreises, $\pi r^2$. Die Leistung verteilt sich aber auf eine Kugeloberfläche, $4\pi r^2$.
  - typ: zahl
    label: Schallpegel
    loesung: "10*lg(0.10/(4*pi*10^2)/1e-12)"
    einheit: "dB"
    anzeige: '79{,}0'
    fehler:
      - wert: "10*lg(0.10/1e-12)"
        meldung: Du hast die Leistung statt der Intensität eingesetzt. In den Pegel gehört $I = P/(4\pi r^2)$.
hinweise:
  - 'Die Leistung verteilt sich auf eine Kugeloberfläche $4\pi r^2$.'
  - 'Danach $L = 10\lg(I/I_0)$ mit $I_0 = 10^{-12}\,\text{W/m}^2$.'
gefuehrt:
  - text: Wie groß ist die Kugeloberfläche in $10\,\text{m}$ Abstand, in $\text{m}^2$?
    teil: { typ: zahl, loesung: "4*pi*10^2" }
    erklaerung: $A = 4\pi r^2 = 4\pi\cdot 100\,\text{m}^2 = 1257\,\text{m}^2$.
  - text: Berechne die Intensität in $\text{W/m}^2$.
    teil: { typ: zahl, loesung: "0.10/(4*pi*10^2)" }
    erklaerung: |
      $I = 0{,}10\,\text{W} : 1257\,\text{m}^2 = 7{,}96\cdot 10^{-5}\,\text{W/m}^2$.
  - text: Wie groß ist das Verhältnis $I/I_0$?
    teil: { typ: zahl, loesung: "0.10/(4*pi*10^2)/1e-12" }
    erklaerung: |
      $7{,}96\cdot 10^{-5} : 10^{-12} = 7{,}96\cdot 10^{7}$.
  - text: Berechne den Pegel in dB.
    teil: { typ: zahl, loesung: "10*lg(0.10/(4*pi*10^2)/1e-12)" }
    erklaerung: $L = 10\cdot\lg(7{,}96\cdot 10^{7})\,\text{dB} = 10\cdot 7{,}90\,\text{dB} = 79{,}0\,\text{dB}$.
loesung: |
  **Intensität:** $I = \dfrac{P}{4\pi r^2} = \dfrac{0{,}10\,\text{W}}{4\pi\cdot 100\,\text{m}^2} = 7{,}96\cdot 10^{-5}\,\text{W/m}^2$.
  ---
  **Pegel:** $L = 10\lg\dfrac{7{,}96\cdot 10^{-5}}{10^{-12}}\,\text{dB} = 10\cdot 7{,}90\,\text{dB} = 79{,}0\,\text{dB}$.
  ---
  **Deutung:** Ein Zehntel Watt Schallleistung reicht für eine laute Beschallung. Das Ohr ist extrem empfindlich.
```

```aufgabe
id: p8-10-phon
titel: Eine Kurve gleicher Lautstärke ablesen
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die vereinfachte Kurve gleicher Lautstärke für $40\,\text{phon}$. Waagrecht steht $\lg(f/\text{Hz})$.

  a) Welchen Schallpegel braucht ein Ton mit $100\,\text{Hz}$, damit er so laut wirkt wie ein $1$-kHz-Ton mit $40\,\text{dB}$? Lies auf ganze dB genau ab.

  b) Bei welcher dieser Frequenzen ist das Ohr am empfindlichsten?
plot:
  x: [1.5, 4.2]
  y: [20, 100]
  hoehe: 280
  achsen: { x: "lg(f / Hz)", y: "Schallpegel L in dB" }
  graphen:
    - { f: "4.0827*x^4 - 44.0785*x^3 + 186.4867*x^2 - 384.2072*x + 372.988", farbe: 0 }
teile:
  - typ: zahl
    label: a) Pegel bei 100 Hz
    loesung: "63"
    einheit: "dB"
    toleranz: 3
    anzeige: '63'
    fehler:
      - wert: "40"
        meldung: $40\,\text{dB}$ gilt nur bei $1000\,\text{Hz}$. Suche die Stelle $\lg 100 = 2$ auf der waagrechten Achse und lies dort die Kurve ab.
      - wert: "88"
        meldung: Das ist der Wert bei $\lg f = 1{,}5$, also bei etwa $32\,\text{Hz}$. Für $100\,\text{Hz}$ ist $\lg f = 2$.
  - typ: auswahl
    label: b) größte Empfindlichkeit
    optionen: ["100 Hz", "1 kHz", "3 kHz", "10 kHz"]
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Bei $1\,\text{kHz}$ ist der Bezugspunkt der Phon-Skala, aber nicht das Minimum. Die Kurve liegt bei etwa $3\,\text{kHz}$ ($\lg f \approx 3{,}5$) noch tiefer.
      - wert: 0
        meldung: Bei $100\,\text{Hz}$ braucht man einen hohen Pegel. Am empfindlichsten ist das Ohr dort, wo die Kurve am **tiefsten** liegt.
      - wert: 3
        meldung: Bei $10\,\text{kHz}$ ($\lg f = 4$) steigt die Kurve schon wieder an. Suche den tiefsten Punkt.
hinweise:
  - 'Rechne die Frequenz zuerst in $\lg f$ um: $\lg 100 = 2$, $\lg 3000 \approx 3{,}5$.'
  - Ein tiefer Kurvenpunkt bedeutet, dass schon ein kleiner Pegel genügt.
loesung: |
  **a)** Bei $\lg f = 2$ liegt die Kurve bei etwa $63\,\text{dB}$. Ein $100$-Hz-Ton braucht also rund $23\,\text{dB}$ mehr als ein $1$-kHz-Ton, um gleich laut zu wirken.
  ---
  **b)** Am tiefsten liegt die Kurve bei $\lg f \approx 3{,}5$, also bei etwa $3\,\text{kHz}$. Dort genügt der kleinste Pegel.
  ---
  **Deutung:** Tiefe Töne hört das Ohr schlecht. Deshalb drehen Musikanlagen bei leiser Wiedergabe oft die Bässe hoch.
```

```aufgabe
id: p8-10-presslufthammer
titel: Wie weit weg ist es erträglich?
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Presslufthammer erzeugt in $5{,}0\,\text{m}$ Abstand $100\,\text{dB}$. Er strahlt näherungsweise wie eine Punktquelle im Freien ab. In welchem Abstand ist der Pegel auf $70\,\text{dB}$ gesunken? Runde auf ganze Meter.
teile:
  - typ: zahl
    loesung: "5.0*sqrt(10^(30/10))"
    einheit: "m"
    anzeige: '158'
    fehler:
      - wert: "5.0*10^(30/10)"
        meldung: Du hast den Abstand um den ganzen Intensitätsfaktor $1000$ vergrößert. Die Intensität fällt aber mit $r^2$. Der Abstand wächst nur um $\sqrt{1000}$.
      - wert: "5.0*30/6"
        meldung: Die Regel „$-6\,\text{dB}$ pro Verdopplung“ bedeutet nicht, dass der Abstand linear mit den Dezibel wächst. Rechne über den Intensitätsfaktor.
hinweise:
  - 'Wie groß ist der Intensitätsfaktor zu $-30\,\text{dB}$?'
  - 'Aus $I \propto 1/r^2$ folgt $r_2/r_1 = \sqrt{I_1/I_2}$.'
loesung: |
  **Intensitätsfaktor:** $-30\,\text{dB}$ bedeutet $I_2/I_1 = 10^{-30/10} = 10^{-3}$, ein Tausendstel.
  ---
  **Abstandsgesetz:** $I \propto 1/r^2$, also $\dfrac{r_2}{r_1} = \sqrt{\dfrac{I_1}{I_2}} = \sqrt{1000} = 31{,}6$.
  ---
  **Ergebnis:** $r_2 = 5{,}0\,\text{m}\cdot 31{,}6 = 158\,\text{m}$.
  ---
  **Probe:** $10\lg\left(\tfrac{5}{158}\right)^2\,\text{dB} = 20\lg 0{,}0316\,\text{dB} = -30\,\text{dB}$. In der Stadt dämpfen Häuser und Bäume zusätzlich, dort reicht meist weniger Abstand.
```

```aufgabe
id: p8-10-dezibel-text
titel: Warum misst man in Dezibel?
niveau: 3
lernziel: 9
kompetenz: begruenden
angabe: |
  Begründe, warum man Schall in Dezibel und nicht einfach in $\text{W/m}^2$ angibt. Gehe auf den Umfang der hörbaren Intensitäten und auf das Hörempfinden ein. Erkläre an einem Zahlenbeispiel, warum zwei gleiche Quellen nur $3\,\text{dB}$ mehr ergeben.
teile:
  - typ: text
    muster: |
      Das Ohr hört Intensitäten von etwa 10⁻¹² W/m² bis 1 W/m², also über zwölf Zehnerpotenzen. Auf einer linearen Skala
      wären leise Geräusche nicht unterscheidbar. Außerdem empfindet das Ohr Verhältnisse: Zehnfache Intensität klingt
      etwa doppelt so laut. Der Logarithmus macht aus gleichen Verhältnissen gleiche Schritte, L = 10·lg(I/I₀) dB. Jede
      Zehnerpotenz sind 10 dB. Zwei gleiche Quellen verdoppeln die Intensität. Der Pegel steigt um 10·lg 2 ≈ 3 dB,
      zum Beispiel von 70 dB auf 73 dB und nicht auf 140 dB.
hinweise:
  - Wie viele Zehnerpotenzen liegen zwischen Hörschwelle und Schmerzgrenze?
  - Was macht ein Logarithmus aus einem Produkt?
loesung: |
  **Umfang:** Zwischen Hörschwelle und Schmerzgrenze liegen zwölf Zehnerpotenzen. Eine logarithmische Skala macht daraus übersichtliche $0$ bis $120\,\text{dB}$.
  ---
  **Empfinden:** Das Ohr bewertet Verhältnisse. Der Logarithmus übersetzt gleiche Verhältnisse in gleiche Schritte, ähnlich wie bei Halbtönen.
  ---
  **Beispiel:** Zwei gleiche Quellen ergeben die doppelte Intensität. Der Pegel steigt um $10\lg 2 \approx 3\,\text{dB}$, von $70$ auf $73\,\text{dB}$.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus den Kapiteln
[Kinematik](/lernen/physik1/kinematik), [Dynamik](/lernen/physik1/dynamik),
[Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls), [Schwingungen](/lernen/physik1/schwingungen) und
[Temperatur, Wärme, Gase](/lernen/physik1/temperatur-waerme-gase) gemischt. Das ist Absicht. In der Prüfung steht
nicht dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren passt?“ musst du nichts
rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p8-gewitter
titel: Wie weit ist das Gewitter?
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Zwischen Blitz und Donner vergehen $4{,}5\,\text{s}$ ($c = 340\,\text{m/s}$, das Licht kommt praktisch sofort an). Wie weit ist der Blitz entfernt? Gib das Ergebnis in km an.
teile:
  - typ: zahl
    loesung: "340*4.5/1000"
    einheit: "km"
    anzeige: '1{,}53'
    fehler:
      - wert: "340*4.5/1000/2"
        meldung: Hier gibt es kein Echo. Der Donner läuft nur einmal vom Blitz zu dir, also nicht durch $2$ teilen.
      - wert: "340*4.5"
        meldung: Das ist das Ergebnis in Metern. Gefragt sind Kilometer, also durch $1000$ teilen.
hinweise:
  - 'Gleichförmige Bewegung: $s = c\cdot t$. Danach in km umrechnen.'
loesung: |
  **Modell:** Der Schall läuft mit konstanter Geschwindigkeit vom Blitz zu dir, $s = c\,t$ (siehe [Kapitel Kinematik](/lernen/physik1/kinematik/geschwindigkeit)).
  ---
  $s = 340\,\text{m/s}\cdot 4{,}5\,\text{s} = 1530\,\text{m} = 1{,}53\,\text{km}$.
  ---
  **Faustregel:** Sekunden durch $3$ ergibt ungefähr Kilometer: $4{,}5 : 3 = 1{,}5$.
```

```aufgabe
id: p8-mix-federpendel
titel: Ein Federpendel erzeugt eine Seilwelle
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Federpendel mit $m = 0{,}20\,\text{kg}$ und $D = 20\,\text{N/m}$ ist an einem langen Seil befestigt und regt darauf eine Welle an. Auf dem Seil laufen Wellen mit $4{,}0\,\text{m/s}$.

  a) Mit welcher Frequenz schwingt das Pendel? Runde auf zwei Nachkommastellen.

  b) Welche Wellenlänge hat die Seilwelle? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Frequenz
    loesung: "sqrt(20/0.20)/(2*pi)"
    einheit: "Hz"
    anzeige: '1{,}59'
    fehler:
      - wert: "sqrt(20/0.20)"
        meldung: Das ist die Kreisfrequenz $\omega = \sqrt{D/m}$. Die Frequenz ist $f = \omega/(2\pi)$.
  - typ: zahl
    label: b) Wellenlänge
    loesung: "4.0/(sqrt(20/0.20)/(2*pi))"
    einheit: "m"
    anzeige: '2{,}51'
    fehler:
      - wert: "4.0/sqrt(20/0.20)"
        meldung: Du hast durch die Kreisfrequenz geteilt. Es gilt $\lambda = c/f$ mit der Frequenz $f$, nicht mit $\omega$.
hinweise:
  - 'Federpendel: $\omega = \sqrt{D/m}$ und $f = \omega/(2\pi)$.'
  - 'Die Quelle bestimmt die Frequenz der Welle. Danach $\lambda = c/f$.'
loesung: |
  **a)** Aus dem [Das Federpendel: Schwingungsdauer und Federkonstante](/lernen/physik1/schwingungen/das-federpendel-schwingungsdauer-und-federkonstante): $\omega = \sqrt{D/m} = \sqrt{20\,\text{N/m} : 0{,}20\,\text{kg}} = 10\,\text{s}^{-1}$, also $f = \omega/(2\pi) = 1{,}59\,\text{Hz}$.
  ---
  **b)** Das Pendel ist die Quelle und legt die Frequenz fest. $\lambda = c/f = 4{,}0\,\text{m/s} : 1{,}59\,\text{s}^{-1} = 2{,}51\,\text{m}$.
  ---
  **Deutung:** Ein schwereres Pendel schwingt langsamer und erzeugt längere Wellen. Die Geschwindigkeit legt das Seil fest.
```

```aufgabe
id: p8-mix-saite-gewicht
titel: Eine Saite, die ein Gewicht spannt
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Eine Saite mit $2{,}0\,\text{g}$ pro Meter ist über eine Rolle geführt. An ihrem Ende hängt ein Körper mit $2{,}0\,\text{kg}$ und spannt sie ($g = 9{,}81\,\text{m/s}^2$). Zwischen Befestigung und Rolle schwingen $1{,}2\,\text{m}$ der Saite.

  a) Wie groß ist die Spannkraft? Runde auf zwei Nachkommastellen.

  b) Welche Grundfrequenz hat die Saite? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Spannkraft
    loesung: "2.0*9.81"
    einheit: "N"
    anzeige: '19{,}62'
    fehler:
      - wert: "2.0"
        meldung: Das ist die Masse in kg. Die Spannkraft ist die Gewichtskraft des ruhenden Körpers, $F = m g$.
  - typ: zahl
    label: b) Grundfrequenz
    loesung: "sqrt(2.0*9.81/2.0e-3)/(2*1.2)"
    einheit: "Hz"
    anzeige: '41{,}3'
    fehler:
      - wert: "sqrt(2.0*9.81/2.0)/(2*1.2)"
        meldung: Die Massenbelegung muss in kg/m stehen, $2{,}0\,\text{g/m} = 2{,}0\cdot 10^{-3}\,\text{kg/m}$.
      - wert: "sqrt(2.0*9.81/2.0e-3)/1.2"
        meldung: Im Grundton liegt nur eine halbe Wellenlänge auf der Saite, also $\lambda = 2L$.
hinweise:
  - Der Körper hängt in Ruhe. Was folgt daraus für die Seilkraft?
  - 'Danach $c = \sqrt{F/\mu}$ und $f_1 = c/(2L)$.'
loesung: |
  **a)** Der Körper ruht, die resultierende Kraft auf ihn ist null. Die Seilkraft gleicht die Gewichtskraft aus: $F = m g = 2{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 19{,}62\,\text{N}$ (siehe [Kapitel Dynamik](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft)).
  ---
  **Wellengeschwindigkeit:** $c = \sqrt{\dfrac{19{,}62\,\text{N}}{2{,}0\cdot 10^{-3}\,\text{kg/m}}} = 99{,}0\,\text{m/s}$.
  ---
  **b)** $f_1 = \dfrac{c}{2L} = \dfrac{99{,}0\,\text{m/s}}{2{,}4\,\text{m}} = 41{,}3\,\text{Hz}$.
  ---
  **Kontrolle:** Hängt man die vierfache Masse an, verdoppeln sich $c$ und $f_1$. So hat schon Galilei Saitengesetze untersucht.
```

```aufgabe
id: p8-mix-energie
titel: Wie viel Energie wird zu Schall?
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Lautsprecher nimmt $50\,\text{W}$ elektrische Leistung auf und gibt $0{,}50\,\text{W}$ als Schall ab.

  a) Wie groß ist sein Wirkungsgrad in Prozent?

  b) Wie viel Schallenergie gibt er in $2{,}0\,\text{h}$ ab? Antwort in J.
teile:
  - typ: zahl
    label: a) Wirkungsgrad
    loesung: "0.50/50*100"
    einheit: "%"
    anzeige: '1'
    fehler:
      - wert: "50/0.50*100"
        meldung: Der Wirkungsgrad ist Nutzen durch Aufwand. Die Schallleistung steht im Zähler, er kann nie über $100\,\%$ liegen.
  - typ: zahl
    label: b) Schallenergie
    loesung: "0.50*2.0*3600"
    einheit: "J"
    anzeige: '3600'
    fehler:
      - wert: "0.50*2.0"
        meldung: Das ist das Ergebnis in Wattstunden. Für Joule musst du die Zeit in Sekunden einsetzen, $2{,}0\,\text{h} = 7200\,\text{s}$.
hinweise:
  - 'Wirkungsgrad $\eta = P_{\text{nutz}}/P_{\text{auf}}$.'
  - 'Energie ist Leistung mal Zeit, $E = P\,t$ mit $t$ in Sekunden.'
loesung: |
  **a)** $\eta = \dfrac{0{,}50\,\text{W}}{50\,\text{W}} = 0{,}010 = 1\,\%$. Der Rest wird zu Wärme (siehe [Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad)).
  ---
  **b)** $E = P\,t = 0{,}50\,\text{W}\cdot 7200\,\text{s} = 3600\,\text{J}$.
  ---
  **Deutung:** Zwei Stunden laute Musik enthalten so viel Schallenergie, wie eine $60$-W-Lampe in einer Minute aufnimmt. Schall ist energetisch sehr sparsam.
```

```aufgabe
id: p8-mix-temperatur
titel: Schallgeschwindigkeit an einem heißen Tag
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Nach der kinetischen Gastheorie ist die Schallgeschwindigkeit in einem Gas proportional zur Wurzel der absoluten Temperatur, $c \propto \sqrt T$. Bei $0\,^\circ\text{C}$ ($273\,\text{K}$) ist $c = 331\,\text{m/s}$. Wie groß ist $c$ bei $35\,^\circ\text{C}$? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "331*sqrt(308/273)"
    einheit: "m/s"
    anzeige: '351{,}6'
    fehler:
      - wert: "331*sqrt(35/1)"
        meldung: Die Temperatur muss in Kelvin stehen. $35\,^\circ\text{C} = 308\,\text{K}$, und man bildet das Verhältnis zu $273\,\text{K}$.
      - wert: "331*308/273"
        meldung: Die Geschwindigkeit wächst mit der **Wurzel** der Temperatur, nicht linear.
hinweise:
  - Rechne beide Temperaturen in Kelvin um.
  - '$c_2 = c_1\sqrt{T_2/T_1}$.'
loesung: |
  **Ansatz:** $c \propto \sqrt T$ mit $T$ in Kelvin, also $c_2 = c_1\sqrt{T_2/T_1}$ (siehe [Kapitel Temperatur, Wärme, Gase](/lernen/physik1/temperatur-waerme-gase/kinetische-gastheorie)).
  ---
  **Kelvin:** $T_2 = 35 + 273 = 308\,\text{K}$.
  ---
  **Rechnung:** $c_2 = 331\,\text{m/s}\cdot\sqrt{308/273} = 331\,\text{m/s}\cdot 1{,}062 = 351{,}6\,\text{m/s}$. Die Näherungsformel $331{,}3 + 0{,}6\cdot 35 = 352{,}3\,\text{m/s}$ liefert fast dasselbe.
```

```aufgabe
id: p8-mix-dezibel-umkehr
titel: Vom Pegel zur Intensität
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Schallpegelmesser zeigt $90\,\text{dB}$. Wie groß ist die Intensität in $\text{W/m}^2$?
teile:
  - typ: zahl
    loesung: "1e-12*10^(90/10)"
    einheit: "W/m²"
    anzeige: '0{,}001'
    fehler:
      - wert: "1e-12*10^90"
        meldung: Du hast vergessen, den Pegel durch $10$ zu teilen. Der Pegel ist $10\cdot\lg(I/I_0)$, die Hochzahl ist also $L/10$.
      - wert: "90/10"
        meldung: $9$ ist nur die Hochzahl. Die Intensität ist $I_0\cdot 10^{9}$.
hinweise:
  - '$I = I_0\cdot 10^{L/10}$ mit $I_0 = 10^{-12}\,\text{W/m}^2$.'
loesung: |
  **Ansatz:** Aus $L = 10\lg(I/I_0)$ folgt durch Teilen durch $10$ und Potenzieren: $I = I_0\cdot 10^{L/10}$ (Logarithmus und Potenz heben sich auf, siehe Mathematik, Lektion [Logarithmen](/lernen/mathe3/zahlen/logarithmen)).
  ---
  $I = 10^{-12}\,\text{W/m}^2\cdot 10^{9} = 10^{-3}\,\text{W/m}^2$.
```

```aufgabe
id: p8-mix-verfahren-1
titel: "Welches Verfahren passt? Der leise Platz"
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Zwei Lautsprecher spielen denselben Sinuston. Du gehst durch den Raum und merkst, dass es an manchen Stellen fast still ist. Mit welchem Verfahren berechnest du, wo diese Stellen liegen? Du musst nicht rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Gangunterschied der beiden Wege durch die Wellenlänge teilen"
      - "Schwebungsfrequenz aus dem Frequenzunterschied"
      - "Doppler-Formel für eine bewegte Quelle"
      - "Pegel zweier Quellen mit +3 dB"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Schwebung entsteht bei zwei **verschiedenen** Frequenzen und schwankt in der Zeit. Hier ist es ein Ton, und die Stille hängt vom Ort ab.
      - wert: 2
        meldung: Nichts bewegt sich. Der Doppler-Effekt passt nicht.
      - wert: 3
        meldung: Die $+3\,\text{dB}$ gelten für Quellen ohne feste Phasenbeziehung, gemittelt. Bei kohärenten Quellen entscheidet die Interferenz, ob es laut oder leise ist.
hinweise:
  - Hängt die Stille vom Ort oder von der Zeit ab?
loesung: |
  **Erkennen:** Gleiche Frequenz, feste Phasenbeziehung, ortsabhängige Lautstärke. Das ist Interferenz.
  ---
  **Verfahren:** Gangunterschied $\Delta s$ bestimmen und durch $\lambda$ teilen. Halbzahlige Werte ergeben die stillen Stellen.
```

```aufgabe
id: p8-mix-verfahren-2
titel: "Welches Verfahren passt? Zwei Stimmgabeln"
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ordne jeder Situation das passende Verfahren zu. Wähle die Liste, in der alle drei Zuordnungen stimmen.

  (1) Zwei Stimmgabeln klingen zusammen, die Lautstärke schwankt rhythmisch.

  (2) Ein Feuerwehrauto fährt vorbei, der Ton springt nach unten.

  (3) Eine Gitarrensaite wird am 12. Bund gegriffen.
teile:
  - typ: auswahl
    optionen:
      - "(1) Schwebung, (2) Doppler-Effekt, (3) Eigenfrequenz der Saite mit halber Länge"
      - "(1) Interferenz mit Gangunterschied, (2) Doppler-Effekt, (3) Schwebung"
      - "(1) Schwebung, (2) Brechung, (3) Eigenfrequenz der Saite mit halber Länge"
      - "(1) Doppler-Effekt, (2) Schwebung, (3) Pegeladdition"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Rhythmisches An- und Abschwellen an einem festen Ort ist eine Schwebung, kein räumliches Interferenzmuster. Und beim Greifen ändert sich die Saitenlänge.
      - wert: 2
        meldung: Der Tonsprung beim Vorbeifahren entsteht durch die Bewegung der Quelle, das ist der Doppler-Effekt. Brechung ändert die Richtung, nicht die Frequenz.
      - wert: 3
        meldung: Der Doppler-Effekt braucht Bewegung. Zwei ruhende Stimmgabeln ergeben eine Schwebung.
hinweise:
  - Frage bei jeder Situation, was sich ändert, die Zeit, der Ort, eine Bewegung oder eine Länge.
loesung: |
  **(1)** Zwei nahe Frequenzen, Lautstärke schwankt in der Zeit: Schwebung, $f_S = |f_1 - f_2|$.
  ---
  **(2)** Bewegte Quelle: Doppler-Effekt. **(3)** Halbe Länge: Grundfrequenz $f_1 = c/(2L)$ verdoppelt sich, eine Oktave.
```

```aufgabe
id: p8-mix-verfahren-3
titel: "Welches Verfahren passt? Lärm einer Baustelle"
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Auf einer Baustelle laufen vier gleiche Kompressoren. Ein Anrainer will wissen, um wie viele Dezibel es lauter ist als mit einem. Welcher Ansatz ist richtig? Du musst nicht rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Den Pegel eines Kompressors mit 4 multiplizieren"
      - "Zum Pegel eines Kompressors 10·lg 4 dB addieren"
      - "Zum Pegel eines Kompressors 4 dB addieren"
      - "Den Pegel mit dem Abstandsgesetz durch 4² teilen"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Pegel multipliziert man nicht. Vier Quellen vervierfachen die **Intensität**, und das bedeutet $+10\lg 4$ Dezibel.
      - wert: 2
        meldung: Der Pegel wächst mit dem Logarithmus der Anzahl, nicht mit der Anzahl selbst. Es sind $10\lg 4 \approx 6\,\text{dB}$.
      - wert: 3
        meldung: Das Abstandsgesetz gilt, wenn sich der Abstand ändert. Hier ändert sich die Zahl der Quellen.
hinweise:
  - Was addiert sich bei mehreren Quellen, die Intensitäten oder die Pegel?
loesung: |
  **Erkennen:** Mehrere gleiche, nicht kohärente Quellen: Die Intensitäten addieren sich.
  ---
  **Verfahren:** Vierfache Intensität bedeutet $+10\lg 4 \approx +6\,\text{dB}$.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Punkte und ein Sachkontext. Der
Zeitrichtwert steht bei jeder Aufgabe, als Faustregel gelten etwa zwei Minuten pro Punkt. Schreib bei jeder Rechnung
zuerst die Formel, dann die Zahlen mit Einheiten, dann das Ergebnis mit sinnvoller Rundung.

```aufgabe
id: p8-pruefung-gitarre
titel: Die C-Saite eines Cellos
niveau: 3
punkte: 10
lernziel: 4
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 20 Minuten.* Die C-Saite eines Cellos schwingt zwischen Sattel und Steg auf $69{,}0\,\text{cm}$ und hat die Grundfrequenz $65{,}4\,\text{Hz}$ ($c_{\text{Luft}} = 340\,\text{m/s}$).

  a) Wie schnell breiten sich die Wellen auf der Saite aus? (2 P)

  b) Welche Wellenlänge hat der erzeugte Schall in der Luft? (2 P)

  c) Wie lang muss der schwingende Teil der Saite sein, damit sie das G mit $98{,}1\,\text{Hz}$ spielt? Antwort in cm. (2 P)

  d) Welche Frequenz hat der dritte Teilton ($n = 3$) der leeren Saite? (2 P)

  e) Die Saite hat eine Massenbelegung von $13\,\text{g/m}$. Mit welcher Kraft ist sie gespannt? (2 P)
teile:
  - typ: zahl
    label: a) Wellengeschwindigkeit auf der Saite
    loesung: "2*0.690*65.4"
    einheit: "m/s"
    anzeige: '90{,}3'
  - typ: zahl
    label: b) Wellenlänge in Luft
    loesung: "340/65.4"
    einheit: "m"
    anzeige: '5{,}20'
  - typ: zahl
    label: c) Saitenlänge
    loesung: "69.0*65.4/98.1"
    einheit: "cm"
    anzeige: '46{,}0'
  - typ: zahl
    label: d) dritter Teilton
    loesung: "3*65.4"
    einheit: "Hz"
    anzeige: '196{,}2'
  - typ: zahl
    label: e) Spannkraft
    loesung: "0.013*(2*0.690*65.4)^2"
    einheit: "N"
    anzeige: '106'
hinweise:
  - 'a) Im Grundton ist $\lambda = 2L$, dann $c = \lambda f$.'
  - 'b) Beim Übergang in die Luft bleibt die Frequenz gleich, die Geschwindigkeit ändert sich. c) $f_1 \propto 1/L$. e) Aus $c = \sqrt{F/\mu}$ folgt $F = \mu c^2$.'
loesung: |
  **a)** Grundton: $\lambda_{\text{Saite}} = 2L = 1{,}38\,\text{m}$. Also $c = \lambda f = 1{,}38\,\text{m}\cdot 65{,}4\,\text{s}^{-1} = 90{,}3\,\text{m/s}$.
  ---
  **b)** Die Frequenz bleibt $65{,}4\,\text{Hz}$: $\lambda_{\text{Luft}} = \dfrac{340\,\text{m/s}}{65{,}4\,\text{s}^{-1}} = 5{,}20\,\text{m}$. Die Schallwelle ist viel länger als die Saitenwelle, weil der Schall schneller ist.
  ---
  **c)** Bei gleichem $c$ ist $f_1 = c/(2L)$ umgekehrt proportional zu $L$: $L' = 69{,}0\,\text{cm}\cdot\dfrac{65{,}4}{98{,}1} = 46{,}0\,\text{cm}$.
  ---
  **d)** $f_3 = 3\cdot 65{,}4\,\text{Hz} = 196{,}2\,\text{Hz}$, der zweite Oberton.
  ---
  **e)** $F = \mu c^2 = 0{,}013\,\text{kg/m}\cdot(90{,}3\,\text{m/s})^2 = 106\,\text{N}$. Die Einheit: $\text{kg/m}\cdot\text{m}^2/\text{s}^2 = \text{kg}\cdot\text{m/s}^2 = \text{N}$. Das entspricht der Gewichtskraft von knapp $11\,\text{kg}$, für eine Cellosaite ein plausibler Wert.
```

```aufgabe
id: p8-pruefung-zug
titel: Hupender Zug
niveau: 3
punkte: 8
lernziel: 7
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Zug fährt mit $144\,\text{km/h}$ an einem Bahnübergang vorbei und hupt dabei mit $400\,\text{Hz}$ ($c = 340\,\text{m/s}$, Windstille). Runde auf eine Nachkommastelle.

  a) Welche Frequenz hört eine Person am Bahnübergang, während der Zug sich nähert? (3 P)

  b) Welche, während er sich entfernt? (2 P)

  c) Welche Wellenlänge hat der Schall vor dem Zug? Runde auf zwei Nachkommastellen. (3 P)
teile:
  - typ: zahl
    label: a) Annäherung
    loesung: "400*340/(340-40)"
    einheit: "Hz"
    anzeige: '453{,}3'
  - typ: zahl
    label: b) Entfernen
    loesung: "400*340/(340+40)"
    einheit: "Hz"
    anzeige: '357{,}9'
  - typ: zahl
    label: c) Wellenlänge vor dem Zug
    loesung: "(340-40)/400"
    einheit: "m"
    anzeige: '0{,}75'
hinweise:
  - '$144\,\text{km/h} = 144 : 3{,}6\,\text{m/s} = 40\,\text{m/s}$.'
  - 'Bewegte Quelle: $f'' = f\cdot c/(c \mp v_Q)$. Für c) rückt der Zug pro Periode um $v_Q T$ vor, also $\lambda'' = (c - v_Q)/f$.'
loesung: |
  **Umrechnen:** $v_Q = 144\,\text{km/h} : 3{,}6 = 40\,\text{m/s}$. Die Quelle bewegt sich, die Person steht.
  ---
  **a)** $f' = 400\,\text{Hz}\cdot\dfrac{340}{340 - 40} = 400\,\text{Hz}\cdot\dfrac{340}{300} = 453{,}3\,\text{Hz}$.
  ---
  **b)** $f' = 400\,\text{Hz}\cdot\dfrac{340}{380} = 357{,}9\,\text{Hz}$.
  ---
  **c)** In einer Periode $T = 1/400\,\text{s}$ läuft der Schall $340/400 = 0{,}85\,\text{m}$, der Zug rückt um $40/400 = 0{,}10\,\text{m}$ nach. Vor dem Zug ist $\lambda' = (340 - 40)\,\text{m/s} : 400\,\text{s}^{-1} = 0{,}75\,\text{m}$. Probe: $340 : 0{,}75 = 453{,}3\,\text{Hz}$, wie in a).
```

```aufgabe
id: p8-pruefung-laerm
titel: Verkehrslärm
niveau: 3
punkte: 8
lernziel: 9
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 15 Minuten.* An einer Straße erzeugt ein einzelnes Auto beim Vorbeifahren $75\,\text{dB}$.

  a) Welcher Pegel ergibt sich, wenn $10$ gleich laute Autos gleichzeitig vorbeifahren? (2 P)

  b) Ein Schallschutzfenster senkt den Pegel um $30\,\text{dB}$. Auf welchen Bruchteil sinkt dadurch die Intensität? Ergebnis als Dezimalzahl. (2 P)

  c) Welche Intensität in $\text{W/m}^2$ entspricht $75\,\text{dB}$? (2 P)

  d) Die $10$ Autos sind als Gruppe näherungsweise eine Punktquelle. Welcher Pegel herrscht in doppelt so großem Abstand? Runde auf ganze dB. (2 P)
teile:
  - typ: zahl
    label: a) Pegel
    loesung: "75+10*lg(10)"
    einheit: "dB"
    anzeige: '85'
  - typ: zahl
    label: b) Bruchteil
    loesung: "10^(-30/10)"
    anzeige: '0{,}001'
  - typ: zahl
    label: c) Intensität
    loesung: "1e-12*10^(75/10)"
    einheit: "W/m²"
    anzeige: '3{,}16\cdot 10^{-5}'
  - typ: zahl
    label: d) Pegel im doppelten Abstand
    loesung: "75+10*lg(10)+10*lg(1/4)"
    einheit: "dB"
    toleranz: 0.5
    anzeige: '79'
hinweise:
  - 'Zehnfache Intensität bedeutet $+10\,\text{dB}$. Umgekehrt gilt $I = I_0\cdot 10^{L/10}$.'
  - 'Doppelter Abstand: ein Viertel der Intensität, also $-6\,\text{dB}$.'
loesung: |
  **a)** Zehn gleiche Quellen ergeben die zehnfache Intensität: $L = 75\,\text{dB} + 10\lg 10\,\text{dB} = 85\,\text{dB}$. Das klingt nicht zehnmal, sondern etwa doppelt so laut.
  ---
  **b)** $-30\,\text{dB}$ bedeutet den Faktor $10^{-30/10} = 10^{-3} = 0{,}001$, ein Tausendstel der Intensität.
  ---
  **c)** $I = 10^{-12}\,\text{W/m}^2\cdot 10^{7{,}5} = 3{,}16\cdot 10^{-5}\,\text{W/m}^2$.
  ---
  **d)** Doppelter Abstand gibt nach $I \propto 1/r^2$ ein Viertel der Intensität: $85\,\text{dB} + 10\lg\tfrac14\,\text{dB} = 85\,\text{dB} - 6\,\text{dB} = 79\,\text{dB}$.
```

```aufgabe
id: p8-pruefung-lautsprecher
titel: Zwei Lautsprecher auf einer Bühne
niveau: 3
punkte: 10
lernziel: 3
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Zwei Lautsprecher stehen auf einer Bühne und spielen gleichphasig einen Ton von $170\,\text{Hz}$ ($c = 340\,\text{m/s}$). Eine Zuhörerin sitzt $3{,}0\,\text{m}$ vom linken und $4{,}0\,\text{m}$ vom rechten Lautsprecher entfernt.

  a) Wie groß ist die Wellenlänge? (1 P)

  b) Hört die Zuhörerin an ihrem Platz ein Maximum oder ein Minimum? (3 P)

  c) Welches ist die tiefste Frequenz, bei der sie an ihrem Platz ein Maximum hört, wenn man $f = 0$ ausschließt? (3 P)

  d) Nur der linke Lautsprecher spielt. Er strahlt $0{,}050\,\text{W}$ gleichmäßig in alle Richtungen ab. Welcher Pegel herrscht an ihrem Platz? Runde auf eine Nachkommastelle. (3 P)
teile:
  - typ: zahl
    label: a) Wellenlänge
    loesung: "340/170"
    einheit: "m"
    anzeige: '2'
  - typ: auswahl
    label: b) Maximum oder Minimum?
    optionen: ["Maximum", "Minimum"]
    richtig: [1]
  - typ: zahl
    label: c) tiefste Frequenz mit Maximum
    loesung: "340/(4.0-3.0)"
    einheit: "Hz"
    anzeige: '340'
  - typ: zahl
    label: d) Pegel
    loesung: "10*lg(0.050/(4*pi*3.0^2)/1e-12)"
    einheit: "dB"
    anzeige: '86{,}5'
hinweise:
  - 'b) Drücke den Gangunterschied in Wellenlängen aus. c) Für das erste Maximum muss der Gangunterschied genau eine Wellenlänge sein.'
  - 'd) $I = P/(4\pi r^2)$, dann $L = 10\lg(I/I_0)$.'
loesung: |
  **a)** $\lambda = \dfrac{c}{f} = \dfrac{340\,\text{m/s}}{170\,\text{s}^{-1}} = 2{,}0\,\text{m}$.
  ---
  **b)** $\Delta s = 4{,}0\,\text{m} - 3{,}0\,\text{m} = 1{,}0\,\text{m} = 0{,}5\,\lambda$. Halbzahlig: Berg trifft auf Tal, ein **Minimum**.
  ---
  **c)** Maximum bei $\Delta s = n\lambda$. Das kleinste $n \geq 1$ ist $n = 1$: $\lambda = 1{,}0\,\text{m}$, also $f = 340\,\text{m/s} : 1{,}0\,\text{m} = 340\,\text{Hz}$. Das ist genau die Oktave des gespielten Tons.
  ---
  **d)** $I = \dfrac{0{,}050\,\text{W}}{4\pi\cdot(3{,}0\,\text{m})^2} = 4{,}42\cdot 10^{-4}\,\text{W/m}^2$. Damit $L = 10\lg\dfrac{4{,}42\cdot 10^{-4}}{10^{-12}}\,\text{dB} = 10\cdot 8{,}65\,\text{dB} = 86{,}5\,\text{dB}$.
  ---
  **Hinweis zur Realität:** In einem Saal überlagern sich zusätzlich viele Reflexionen. Ganz still wird es im Minimum deshalb nie.
```

```aufgabe
id: p8-pruefung-resonanzrohr
titel: Schallgeschwindigkeit mit dem Resonanzrohr messen
niveau: 3
punkte: 10
lernziel: 4
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Über einem senkrechten Rohr, das unten durch Wasser verschlossen ist, schwingt eine Stimmgabel mit $500\,\text{Hz}$. Man verschiebt den Wasserspiegel und findet laute Resonanzen bei den Luftsäulenlängen $L_1 = (16{,}8 \pm 0{,}3)\,\text{cm}$ und $L_2 = (50{,}8 \pm 0{,}3)\,\text{cm}$. Die Frequenz gilt als exakt.

  a) Welcher Bruchteil einer Wellenlänge liegt zwischen den beiden Resonanzlängen? Begründe kurz und gib die Wellenlänge in m an. (3 P)

  b) Berechne die Schallgeschwindigkeit. (2 P)

  c) Die Unsicherheit jeder Länge ist $\pm 0{,}3\,\text{cm}$. Wie groß ist die absolute Unsicherheit der Schallgeschwindigkeit, wenn sich die Unsicherheiten der beiden Längen im ungünstigsten Fall addieren? (3 P)

  d) Berechne mit $c \approx (331{,}3 + 0{,}6\cdot\vartheta/{}^\circ\text{C})\,\text{m/s}$ die Lufttemperatur. Runde auf eine Nachkommastelle. (2 P)
teile:
  - typ: zahl
    label: a) Wellenlänge
    loesung: "2*(0.508-0.168)"
    einheit: "m"
    anzeige: '0{,}68'
  - typ: zahl
    label: b) Schallgeschwindigkeit
    loesung: "500*2*(0.508-0.168)"
    einheit: "m/s"
    anzeige: '340'
  - typ: zahl
    label: c) absolute Unsicherheit
    loesung: "500*2*(0.003+0.003)"
    einheit: "m/s"
    anzeige: '6'
  - typ: zahl
    label: d) Temperatur
    loesung: "(500*2*(0.508-0.168)-331.3)/0.6"
    einheit: "°C"
    anzeige: '14{,}5'
hinweise:
  - Die Luftsäule ist eine gedackte Pfeife. Die Resonanzlängen liegen bei $\lambda/4$, $3\lambda/4$ und so weiter.
  - 'Der Unterschied zweier benachbarter Resonanzlängen ist $\lambda/2$. Die Endkorrektur fällt bei der Differenz heraus.'
loesung: |
  **a)** Unten liegt ein Knoten (Wasser), oben ein Bauch (offenes Ende). Resonanzen gibt es bei $\lambda/4$, $3\lambda/4, \dots$ Benachbarte Längen unterscheiden sich um $\lambda/2$. Also $\lambda/2 = 50{,}8\,\text{cm} - 16{,}8\,\text{cm} = 34{,}0\,\text{cm}$ und $\lambda = 0{,}68\,\text{m}$. Eine Endkorrektur am offenen Ende fällt bei der Differenz weg.
  ---
  **b)** $c = \lambda f = 0{,}68\,\text{m}\cdot 500\,\text{s}^{-1} = 340\,\text{m/s}$.
  ---
  **c)** Die Differenz hat im ungünstigsten Fall die Unsicherheit $0{,}3 + 0{,}3 = 0{,}6\,\text{cm}$. Die Wellenlänge ist doppelt so groß, also $\Delta\lambda = 1{,}2\,\text{cm} = 0{,}012\,\text{m}$. Damit $\Delta c = 500\,\text{s}^{-1}\cdot 0{,}012\,\text{m} = 6\,\text{m/s}$. Ergebnis: $c = (340 \pm 6)\,\text{m/s}$.
  ---
  **d)** $\vartheta = \dfrac{340 - 331{,}3}{0{,}6}\,{}^\circ\text{C} = 14{,}5\,^\circ\text{C}$.
  ---
  **Kritik:** Eine Unsicherheit von $6\,\text{m/s}$ entspricht $6 : 0{,}6 = 10\,^\circ\text{C}$. Als Thermometer taugt dieser Versuch also kaum. Man sollte das Ergebnis als $(15 \pm 10)\,^\circ\text{C}$ angeben.
```

```aufgabe
id: p8-pruefung-erklaeren
titel: Schwingung, Welle, stehende Welle
niveau: 3
punkte: 6
lernziel: 0
kompetenz: begruenden
angabe: |
  *Zeitrichtwert: 10 Minuten.*

  a) Erkläre den Unterschied zwischen einer Schwingung und einer Welle. Was transportiert eine Welle? (3 P)

  b) Erkläre, wie auf einer Gitarrensaite eine stehende Welle entsteht und warum nur bestimmte Frequenzen möglich sind. (3 P)
teile:
  - typ: text
    label: a)
    muster: |
      Eine Schwingung ist die periodische Bewegung eines einzelnen Körpers um seine Ruhelage. Sie hängt nur von der Zeit ab.
      Eine Welle ist eine Schwingung, die sich in einem Medium gekoppelter Teilchen ausbreitet. Jedes Teilchen schwingt um
      seine Ruhelage, aber zeitversetzt, sodass der Schwingungszustand mit der Geschwindigkeit c wandert. Die Welle hängt von
      Ort und Zeit ab. Sie transportiert Energie, aber keinen Stoff.
  - typ: text
    label: b)
    muster: |
      Eine Störung läuft als Welle zu den eingespannten Enden, wird dort reflektiert und überlagert sich mit der hinlaufenden
      Welle. Es entsteht eine stehende Welle mit Knoten an den festen Enden. Das ist nur möglich, wenn die Saitenlänge ein
      ganzzahliges Vielfaches der halben Wellenlänge ist, L = n·λ/2. Daraus folgen die Eigenfrequenzen f_n = n·c/(2L):
      Grundton und Obertöne.
hinweise:
  - Wer schwingt, und was breitet sich aus?
  - Reflexion an den Enden, Überlagerung, Knoten an den Enden.
loesung: |
  **a)** Schwingung: ein Körper, eine Funktion der Zeit. Welle: Ausbreitung der Schwingung durch gekoppelte Teilchen, eine Funktion von Ort und Zeit. Sie transportiert Energie, keinen Stoff.
  ---
  **b)** Reflexion an den festen Enden, Überlagerung zur stehenden Welle mit Knoten an den Enden.
  ---
  Nur $L = n\lambda/2$ passt, also $f_n = n\,c/(2L)$. Der Grundton ist $n = 1$, die Obertöne sind ganzzahlige Vielfache.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Eine Welle ist eine Schwingung, die sich ausbreitet. Sie transportiert Energie, aber keinen Stoff, und
  es gilt c = λ·f, wobei die Quelle die Frequenz und das Medium die Geschwindigkeit bestimmt. (2) Wellen überlagern sich
  durch Addition der Auslenkungen. Der Gangunterschied entscheidet über Verstärkung oder Auslöschung, gegenläufige Wellen
  bilden stehende Wellen mit Eigenfrequenzen f_n = n·c/(2L). (3) Der Schallpegel ist logarithmisch: Zehnfache Intensität
  sind +10 dB, doppelte Intensität +3 dB.
```

:::zusammenfassung
- **Welle:** eine Schwingung, die sich in einem Medium gekoppelter Teilchen ausbreitet. Transportiert werden Energie
  und Schwingungszustand, **kein Stoff**. Transversal: Schwingung quer zur Ausbreitung, polarisierbar. Longitudinal:
  Schwingung in Ausbreitungsrichtung, so ist Schall in Gasen und Flüssigkeiten. Die Energie ist proportional zu $A^2$.
- **Grundgleichung:** $c = \lambda f$. Die Quelle bestimmt $f$, das Medium bestimmt $c$. Beim Mediumwechsel bleibt
  $f$ gleich, $\lambda$ ändert sich. Saite: $c = \sqrt{F/\mu}$.
- **Harmonische Welle:** $y(x, t) = A\sin(\omega t - kx)$ mit $k = 2\pi/\lambda$. Momentaufnahme zeigt $\lambda$,
  Zeitverlauf zeigt $T$. Phasendifferenz $\Delta\varphi = 2\pi\,\Delta x/\lambda$.
- **Interferenz:** Auslenkungen addieren sich. Gleichphasige Quellen ergeben Maxima bei $\Delta s = n\lambda$ und Minima
  bei $\Delta s = (n + \tfrac12)\lambda$. Energie wird umverteilt, nicht vernichtet.
- **Stehende Welle:** zwei gegenläufige gleiche Wellen, ortsfeste Knoten im Abstand $\lambda/2$, kein Energietransport.
  Saite und offene Pfeife: $f_n = n\,c/(2L)$. Gedackte Pfeife: nur ungerade Vielfache von $c/(4L)$.
- **Schwebung:** zwei nahe Frequenzen ergeben eine Lautstärkeschwankung mit $f_S = |f_1 - f_2|$.
- **Huygens, Doppler, Mach:** Reflexion, Brechung ($\sin\alpha_1/\sin\alpha_2 = c_1/c_2$) und Beugung folgen aus den
  Elementarwellen. Doppler: Annähern macht den Ton höher, bewegte Quelle $f c/(c \mp v_Q)$, bewegter Beobachter
  $f(c \pm v_B)/c$. Mach-Kegel: $\sin\alpha = c/v_Q$.
- **Akustik:** Tonhöhe = Grundfrequenz, Klangfarbe = Obertonmischung, Oktave = Faktor $2$, Halbton = Faktor $2^{1/12}$.
  Schallpegel $L = 10\lg(I/I_0)\,\text{dB}$: Zehnfache Intensität $+10\,\text{dB}$, doppelte $+3\,\text{dB}$, doppelter
  Abstand $-6\,\text{dB}$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir wiedererkennst,
rechne die genannte Aufgabe noch einmal.

1. **„Die Welle nimmt das Medium mit.“** Eine Welle transportiert Energie, keinen Stoff. Training: „Was macht der Korken?“.
2. **Doppelte Amplitude für doppelte Energie gehalten.** Die Energie geht mit $A^2$. Training: „Was passiert mit der Energie?“.
3. **Beim Mediumwechsel die Frequenz verändert.** Die Frequenz bleibt, die Wellenlänge ändert sich. Training:
   „Ultraschall wechselt das Medium“.
4. **Gramm pro Meter nicht in kg/m umgerechnet.** Training: „Eine Saite stimmen“.
5. **Wellenlänge und Periodendauer im Diagramm verwechselt.** Erst die Achsenbeschriftung lesen. Training:
   „Eine Momentaufnahme ablesen“ und „Einen Zeitverlauf ablesen“.
6. **Gangunterschied nicht durch λ geteilt.** Training: „Zwei Lautsprecher im Wohnzimmer“.
7. **Im Grundton λ = L statt λ = 2L gesetzt.** Training: „Grundton einer Saite“.
8. **Bei der gedackten Pfeife gerade Obertöne mitgezählt** oder die Formel der offenen Pfeife verwendet. Training:
   „Offene und gedackte Pfeife“ und „Über eine Flasche blasen“.
9. **Stehende Welle für eine laufende gehalten.** Training: „Stehende oder laufende Welle?“.
10. **Schwebungsfrequenz halbiert.** $f_S = |f_1 - f_2|$, nicht die Frequenz des Kosinusfaktors. Training:
    „Schwebung mit dem Additionstheorem“.
11. **Beim Echo den Rückweg vergessen.** Training: „Echo im Gebirge“ und „Wie dick ist das Organ?“.
12. **Doppler-Vorzeichen vertauscht oder Quelle und Beobachter verwechselt.** Training: „Martinshorn“ und
    „Ein Motorradfahrer fährt auf eine Sirene zu“.
13. **Dezibel addiert.** Training: „Zwei Rasenmäher“.
14. **Doppelter Abstand als −3 dB gerechnet.** Richtig sind −6 dB. Training: „Pegel und Abstand“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“, **3** „sicher,
auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf Niveau 3.

1. Erklären, dass eine Welle Energie und keinen Stoff transportiert, und Wellenarten unterscheiden.
2. Mit $c = \lambda f$ rechnen, auch beim Mediumwechsel.
3. Die Wellenfunktion und Wellendiagramme lesen.
4. Interferenz mit dem Gangunterschied vorhersagen.
5. Stehende Wellen erklären und Eigenfrequenzen von Saiten und Pfeifen berechnen.
6. Die Schwebung erklären und berechnen.
7. Reflexion, Brechung und Beugung mit Huygens begründen und berechnen.
8. Den Doppler-Effekt berechnen und den Mach-Kegel erklären.
9. Tonhöhe, Klangfarbe, Hörbereich, Ultraschall und Tonintervalle erklären.
10. Schallpegel in Dezibel berechnen und die logarithmische Skala begründen.

## Mündliche Prüfung

```karten
- id: p8-k-welle
  frage: Was ist eine Welle, und was transportiert sie?
  antwort: |
    Eine mechanische Welle ist eine Schwingung, die sich in einem Medium gekoppelter Teilchen ausbreitet. Jedes Teilchen
    schwingt nur um seine Ruhelage, aber zeitversetzt zu seinem Nachbarn. Transportiert werden Energie und der
    Schwingungszustand, aber kein Stoff. Ein Korken auf dem Wasser schaukelt, wird aber nicht von der Welle mitgenommen.
  kernpunkte: ["Schwingung breitet sich aus", "Teilchen schwingen um Ruhelage", "Energie ja, Stoff nein", "Beispiel Korken oder Stadionwelle"]
- id: p8-k-schwingung-welle
  frage: Was ist der Unterschied zwischen einer Schwingung und einer Welle?
  antwort: |
    Eine Schwingung ist die periodische Bewegung eines einzelnen Körpers, etwa eines Federpendels aus dem Kapitel
    Schwingungen. Sie hängt nur von der Zeit ab. Eine Welle entsteht, wenn viele gekoppelte Schwinger nacheinander
    angeregt werden. Sie hängt von Ort und Zeit ab, $y(x, t) = A\sin(\omega t - kx)$. Jeder Punkt der Welle führt
    dieselbe Schwingung aus, nur verspätet um $x/c$.
  kernpunkte: ["Schwingung: ein Körper, nur Zeit", "Welle: viele gekoppelte Schwinger, Ort und Zeit", "Verspätung x/c", "Verbindung zum Kapitel Schwingungen"]
- id: p8-k-transversal
  frage: Was unterscheidet Transversal- und Longitudinalwellen, und warum ist Schall in Luft longitudinal?
  antwort: |
    Bei Transversalwellen schwingen die Teilchen quer zur Ausbreitung (Seil, Saite, Licht), bei Longitudinalwellen in
    Ausbreitungsrichtung mit Verdichtungen und Verdünnungen. Gase und Flüssigkeiten widerstehen keiner Scherung und
    können nur Druck weitergeben, deshalb ist Schall dort longitudinal. Nur Querwellen lassen sich polarisieren.
  kernpunkte: ["quer gegen längs", "Gase ohne Scherkräfte", "Polarisation nur bei Querwellen"]
- id: p8-k-c-lambda-f
  frage: Erkläre die Gleichung c = λ·f. Was ändert sich, wenn Schall von Luft in Wasser übertritt?
  antwort: |
    In einer Periodendauer $T$ schwingt jeder Punkt einmal, und ein Wellenberg rückt genau um eine Wellenlänge vor. Also
    gilt $c = \lambda/T = \lambda f$. Die Frequenz bestimmt die Quelle, die Geschwindigkeit das Medium. Beim Übergang
    in Wasser bleibt die Frequenz gleich, die Geschwindigkeit steigt auf gut das Vierfache ($1480 : 340 \approx 4{,}4$), und genauso wächst
    die Wellenlänge.
  kernpunkte: ["Herleitung über eine Periode", "Quelle bestimmt f, Medium bestimmt c", "beim Mediumwechsel bleibt f"]
- id: p8-k-wellenfunktion
  frage: Wie lautet die Wellenfunktion einer harmonischen Welle, und wie liest man aus ihr die Laufrichtung ab?
  antwort: |
    $y(x, t) = A\sin(\omega t - kx)$ mit $\omega = 2\pi/T$ und $k = 2\pi/\lambda$. Für einen Wellenberg ist das Argument
    konstant. Wächst $t$, muss bei $\omega t - kx$ auch $x$ wachsen, die Welle läuft in $+x$-Richtung. Bei
    $\omega t + kx$ läuft sie in $-x$-Richtung. Die Geschwindigkeit ist $c = \omega/k$.
  kernpunkte: ["Formel mit ω und k", "konstantes Argument für einen Wellenberg", "Vorzeichen bestimmt Richtung", "c = ω/k"]
- id: p8-k-interferenz
  frage: Was ist Interferenz, und wann entstehen Verstärkung und Auslöschung?
  antwort: |
    Interferenz ist die Überlagerung kohärenter Wellen, also Wellen gleicher Frequenz mit fester Phasenbeziehung. Die
    Auslenkungen addieren sich. Bei gleichphasigen Quellen gibt es Verstärkung, wenn der Gangunterschied ein ganzzahliges
    Vielfaches von $\lambda$ ist, und Auslöschung bei halbzahligen Vielfachen. Dasselbe Prinzip erklärt den
    Doppelspaltversuch mit Licht im Kapitel Wellenoptik.
  kernpunkte: ["Superposition", "Kohärenz", "Maximum bei Δs = nλ, Minimum bei Δs = (n + ½)λ", "Verbindung zum Doppelspalt"]
- id: p8-k-energie-interferenz
  frage: Verletzt destruktive Interferenz den Energieerhaltungssatz?
  antwort: |
    Nein. An den Minima ist es leise, an den Maxima dafür lauter. Im Maximum verdoppelt sich die Amplitude, die
    Intensität vervierfacht sich. Im Mittel über Maxima und Minima kommt genau die Summe der beiden Einzelintensitäten
    an. Die Energie wird nur umverteilt.
  kernpunkte: ["Umverteilung", "Maximum: vierfache Intensität", "Mittelwert: doppelte Intensität"]
- id: p8-k-stehend
  frage: Wie entsteht eine stehende Welle, und worin unterscheidet sie sich von einer laufenden?
  antwort: |
    Sie entsteht aus zwei gleichen, gegenläufigen Wellen, meist einer Welle und ihrer Reflexion. Sie hat ortsfeste Knoten
    im Abstand $\lambda/2$ und Bäuche dazwischen. Anders als bei der laufenden Welle wandert das Muster nicht, die
    Amplitude hängt vom Ort ab, alle Punkte zwischen zwei Knoten schwingen im Gleichtakt, und es wird keine Energie
    transportiert.
  kernpunkte: ["zwei gegenläufige Wellen", "Knoten im Abstand λ/2", "Muster wandert nicht", "kein Energietransport"]
- id: p8-k-saite
  frage: Warum kann eine Gitarrensaite nur bestimmte Töne erzeugen, und wie stimmt man sie?
  antwort: |
    An den eingespannten Enden liegen Knoten. Es passen nur stehende Wellen mit $L = n\lambda/2$, also
    $f_n = n\,c/(2L)$ mit $c = \sqrt{F/\mu}$. Höher wird der Ton durch Verkürzen (Greifen), durch mehr Spannkraft
    (Wirbel) oder durch eine leichtere Saite. Die doppelte Frequenz verlangt die halbe Länge oder die vierfache Kraft.
  kernpunkte: ["Knoten an den Enden", "f_n = n·c/(2L)", "c = √(F/μ)", "Länge, Spannung, Masse"]
- id: p8-k-pfeife
  frage: Was unterscheidet eine offene von einer gedackten Pfeife?
  antwort: |
    Am offenen Ende liegt ein Bauch, am geschlossenen ein Knoten. Die offene Pfeife hat Bäuche an beiden Enden,
    $L = n\lambda/2$, und alle Harmonischen. Die gedackte hat Knoten und Bauch, $L = \lambda/4, 3\lambda/4, \dots$ Ihr
    Grundton $c/(4L)$ liegt eine Oktave tiefer, und es fehlen die geraden Vielfachen.
  kernpunkte: ["offen: Bauch, geschlossen: Knoten", "offen f = n·c/(2L)", "gedackt nur ungerade Vielfache von c/(4L)"]
- id: p8-k-schwebung
  frage: Was ist eine Schwebung, und warum ist die Schwebungsfrequenz |f₁ − f₂|?
  antwort: |
    Zwei Schwingungen mit nahe beieinanderliegenden Frequenzen laufen abwechselnd in und aus der Phase. Pro Sekunde gewinnt
    die schnellere $|f_1 - f_2|$ Schwingungen. Jedes Mal, wenn sie eine ganze Schwingung voraus ist, sind beide wieder im
    Gleichtakt und es ist laut. Mit dem Additionstheorem erhält man einen Kosinusfaktor mit der halben Frequenz. Dessen
    Betrag wird pro Periode zweimal maximal. Man nutzt die Schwebung zum Stimmen.
  kernpunkte: ["Phase läuft auseinander", "|f₁ − f₂| Maxima pro Sekunde", "Additionstheorem, Betrag", "Stimmen"]
- id: p8-k-huygens
  frage: Was sagt das Huygenssche Prinzip, und was erklärt es?
  antwort: |
    Jeder Punkt einer Wellenfront ist Ausgangspunkt einer Elementarwelle. Die neue Front ist die Einhüllende aller
    Elementarwellen. Damit erklärt man Reflexion (Einfallswinkel gleich Reflexionswinkel), Brechung
    ($\sin\alpha_1/\sin\alpha_2 = c_1/c_2$, ins langsamere Medium zum Lot hin) und Beugung.
  kernpunkte: ["Elementarwellen", "Einhüllende", "Reflexion, Brechung, Beugung"]
- id: p8-k-beugung
  frage: Warum hört man um Ecken, sieht aber nicht um Ecken?
  antwort: |
    Beugung ist stark, wenn die Öffnung etwa so groß wie die Wellenlänge oder kleiner ist. Schallwellen der Sprache sind
    Dezimeter bis Meter lang, so groß wie Türen. Sie werden um die Ecke gebeugt. Licht hat Wellenlängen unter einem
    Mikrometer und läuft durch eine Tür praktisch geradlinig. Darum hört man von fernen Anlagen auch vor allem die Bässe.
  kernpunkte: ["Beugung hängt von λ im Vergleich zur Öffnung ab", "Schall: λ wie Türbreite", "Licht: λ sehr klein"]
- id: p8-k-doppler
  frage: Erkläre den Doppler-Effekt am Beispiel eines Martinshorns.
  antwort: |
    Das Horn schwingt immer mit derselben Frequenz. Fährt der Wagen auf mich zu, startet jeder Wellenberg näher bei mir,
    die Berge liegen dichter, und es kommen mehr pro Sekunde an. Ich höre einen höheren Ton, $f' = f\,c/(c - v_Q)$.
    Beim Wegfahren liegen die Berge weiter auseinander, der Ton ist tiefer. Bewegt sich der Beobachter, gilt
    $f' = f(c \pm v_B)/c$, weil er Wellenberge zusätzlich einsammelt. Über der Schallgeschwindigkeit entsteht ein
    Mach-Kegel mit $\sin\alpha = c/v_Q$.
  kernpunkte: ["Quellfrequenz unverändert", "Wellenberge vorn dichter", "Formeln Quelle und Beobachter", "Mach-Kegel"]
- id: p8-k-klang
  frage: Wodurch unterscheiden sich Tonhöhe, Lautstärke und Klangfarbe?
  antwort: |
    Die Tonhöhe hängt von der Grundfrequenz ab, die Lautstärke von der Amplitude der Druckschwankung, also der Intensität.
    Die Klangfarbe hängt von der Mischung der Obertöne ab. Darum klingt ein a mit $440\,\text{Hz}$ auf Geige und Flöte
    gleich hoch, aber verschieden. Das Ohr hört Verhältnisse: Eine Oktave ist der Faktor $2$, ein Halbton $2^{1/12}$.
  kernpunkte: ["Tonhöhe: Grundfrequenz", "Lautstärke: Amplitude", "Klangfarbe: Obertöne", "Oktave und Halbton"]
- id: p8-k-dezibel
  frage: Was ist der Schallpegel, und warum misst man in Dezibel?
  antwort: |
    $L = 10\lg(I/I_0)\,\text{dB}$ mit der Hörschwelle $I_0 = 10^{-12}\,\text{W/m}^2$. Das Ohr umfasst zwölf
    Zehnerpotenzen der Intensität und empfindet Verhältnisse. Der Logarithmus macht daraus 0 bis 120 dB. Zehnfache
    Intensität sind $+10\,\text{dB}$, doppelte $+3\,\text{dB}$, doppelter Abstand $-6\,\text{dB}$. Pegel darf man nicht
    addieren, nur Intensitäten.
  kernpunkte: ["Formel mit I₀", "zwölf Zehnerpotenzen, Empfinden logarithmisch", "+10 dB, +3 dB, −6 dB", "Intensitäten addieren"]
- id: p8-k-ultraschall
  frage: Was ist Ultraschall, und wie entsteht ein Sonographiebild?
  antwort: |
    Schall über etwa $20\,\text{kHz}$. Wegen der kurzen Wellenlänge wird er kaum gebeugt und schon an kleinen Strukturen
    reflektiert. Das Gerät sendet kurze Pulse mit einigen MHz in den Körper und misst die Laufzeiten der Echos von den
    Gewebegrenzen. Aus $s = c\,t/2$ berechnet es die Tiefen. Ultraschall ist nicht ionisierend.
  kernpunkte: ["über 20 kHz", "kurze Wellenlänge, gute Auflösung", "Laufzeit, Hin- und Rückweg", "nicht ionisierend"]
```
