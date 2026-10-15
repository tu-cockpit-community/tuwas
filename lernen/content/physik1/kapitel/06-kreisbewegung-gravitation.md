---
nummer: 6
titel: Kreisbewegung und Gravitation
kurz: Winkelgeschwindigkeit und Zentripetalbeschleunigung, die Zentripetalkraft als Rolle echter Kräfte in Kurve, Looping und Karussell, die Zentrifugalkraft als Scheinkraft, das Gravitationsgesetz, Satelliten und Schwerelosigkeit, die Keplerschen Gesetze und die Fluchtgeschwindigkeit.
teil: grundlagen
stunden: 9
pruefungsgewicht: 2
voraussetzungen: [groessen-einheiten-messen, kinematik, dynamik, arbeit-energie-impuls]
lernziele:
  - Periodendauer, Frequenz, Winkelgeschwindigkeit und Bahngeschwindigkeit einer Kreisbewegung ineinander umrechnen, auch aus Drehzahlen in Umdrehungen pro Minute
  - die Zentripetalbeschleunigung aus der Richtungsänderung der Geschwindigkeit begründen, ihre Richtung angeben und mit a = v²/r = ω²r berechnen
  - erkennen, welche echte Kraft (Seilkraft, Reibung, Normalkraft, Gravitation) die Rolle der Zentripetalkraft spielt, und F = m·v²/r berechnen
  - Kurve, überhöhte Kurve, Looping und Kettenkarussell mit einem Freikörperbild und dem Ansatz „Summe der Kräfte zum Mittelpunkt = m·v²/r“ berechnen
  - erklären, warum die Zentrifugalkraft eine Scheinkraft des rotierenden Bezugssystems ist, beide Beschreibungen sauber trennen und die Corioliskraft qualitativ deuten
  - das Newtonsche Gravitationsgesetz anwenden, auch als Proportionalitätsschluss bei geänderten Massen und Abständen
  - die Gravitationsfeldstärke und die Fallbeschleunigung in beliebiger Höhe und auf anderen Himmelskörpern berechnen, daraus Massen bestimmen und die Gezeiten qualitativ erklären
  - Bahngeschwindigkeit, Umlaufzeit und Bahnradius von Satelliten berechnen, die geostationäre Bahn begründen und Schwerelosigkeit als freien Fall erklären
  - die drei Keplerschen Gesetze formulieren, den Flächensatz quantitativ nutzen und mit dem dritten Gesetz Umlaufzeiten, Bahnradien und Zentralmassen berechnen
  - die potentielle Energie im Gravitationsfeld, die Energie einer Satellitenbahn und die Fluchtgeschwindigkeit berechnen und Bahnwechsel energetisch erklären
---

Ein Auto in der Kurve, ein Kettenkarussell, die Wäsche in der Schleuder, der Mond um die Erde und die
Erde um die Sonne: Alle diese Bewegungen sind, zumindest näherungsweise, **Kreisbewegungen**. Sie haben
etwas Rätselhaftes. Der Körper wird nicht schneller und nicht langsamer, und trotzdem braucht er eine
Kraft. Ohne diese Kraft würde er nach dem Trägheitssatz geradeaus weiterfliegen.

In der zweiten Hälfte des Kapitels geht es um die Kraft, die Mond, Planeten und Satelliten auf ihren
Bahnen hält: die **Gravitation**. Isaac Newton hatte um 1666 einen kühnen Gedanken. Der Apfel, der vom
Baum fällt, und der Mond, der um die Erde kreist, gehorchen **demselben** Gesetz. Damit galten zum ersten
Mal dieselben Naturgesetze auf der Erde und am Himmel.

**Wozu brauchst du das?** Kreisbewegungen stecken in Motoren, Zentrifugen, Festplatten, Kurven und
Achterbahnen. Das Gravitationsgesetz erklärt, warum GPS-Satelliten in $20\,000\,\text{km}$ Höhe fliegen,
warum Astronauten schweben und warum es Ebbe und Flut gibt. Das Muster „Kraft nimmt mit dem Quadrat des
Abstands ab“ begegnet dir im Kapitel Elektrostatik in der Lektion
[Das Coulomb-Gesetz](/lernen/physik1/elektrostatik/das-coulomb-gesetz-die-kraft-zwischen-zwei-ladungen) fast unverändert wieder.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung sind typisch:

- Die Höchstgeschwindigkeit in einer Kurve oder der Neigungswinkel einer überhöhten Kurve.
- Die Mindestgeschwindigkeit im Looping und die nötige Starthöhe.
- Die Umlaufzeit, die Geschwindigkeit oder die Höhe eines Satelliten, besonders der geostationären Bahn.
- Die Fallbeschleunigung auf einem anderen Himmelskörper oder in großer Höhe.
- Die Fluchtgeschwindigkeit.

In der mündlichen Prüfung hört man oft diese Fragen. Warum fällt der Mond nicht auf die Erde? Warum sind
Astronauten schwerelos, obwohl die Erde sie anzieht? Gibt es die Fliehkraft wirklich? Wie lauten die
Keplerschen Gesetze?

**Die eigentlichen Hürden.** Erstens ist die Zentripetalkraft **keine neue Kraft**, sondern eine Rolle,
die eine bekannte Kraft übernimmt. Zweitens ist die Zentrifugalkraft eine **Scheinkraft**, die nur auftaucht,
wenn man sich selbst mitdreht. Drittens heißt **Schwerelosigkeit** nicht „keine Schwerkraft“, sondern
„freier Fall“. Diese drei Stellen sind für fast alle ungewohnt. Das Kapitel nimmt sich dort viel Zeit.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Geschwindigkeit und Beschleunigung als Vektoren** aus dem Kapitel Kinematik, Lektion
  [Beschleunigung](/lernen/physik1/kinematik/beschleunigung).
- **Das Grundgesetz** $F_{\text{res}} = m\cdot a$ aus der Lektion
  [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung)
  und das **Freikörperbild** aus der Lektion
  [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
- **Scheinkräfte und den Lift** aus der Lektion
  [Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).
- **Haftreibung** aus der Lektion [Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand).
- **Energieerhaltung** aus der Lektion [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
- Aus dem Mathematikkurs das **Bogenmaß**, Lektion
  [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass), und das
  Rechnen mit **Zehnerpotenzen und Wurzeln**, Lektion [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Wenn du bei einer Frage unsicher bist, folge dem Link
in der Lösung und wiederhole die Lektion kurz. Das kostet zehn Minuten und spart dir später viel Ärger.

```aufgabe
id: p6-e-kmh
art: check
titel: Kilometer pro Stunde in Meter pro Sekunde
niveau: 1
angabe: |
  Ein Auto fährt mit $90\,\text{km/h}$. Wie schnell ist das in m/s?
teile:
  - typ: zahl
    loesung: "90/3.6"
    einheit: "m/s"
    anzeige: '25'
    fehler:
      - wert: "90*3.6"
        meldung: Du hast mit $3{,}6$ multipliziert. Von km/h nach m/s wird die Zahl **kleiner**, weil ein Meter pro Sekunde schon $3{,}6\,\text{km/h}$ sind. Also teilen.
      - wert: "90/60"
        meldung: Du hast nur durch $60$ geteilt. Eine Stunde hat aber $3600\,\text{s}$, und ein Kilometer hat $1000\,\text{m}$. Zusammen ergibt das den Faktor $3{,}6$.
hinweise:
  - '$1\,\text{m/s} = 3600\,\text{m}/3600\,\text{s} = 3{,}6\,\text{km/h}$. Also teilst du durch $3{,}6$.'
loesung: |
  Ein Meter pro Sekunde sind in einer Stunde $3600\,\text{m} = 3{,}6\,\text{km}$, also $1\,\text{m/s} = 3{,}6\,\text{km/h}$.
  ---
  $v = 90\,\text{km/h} : 3{,}6 = 25\,\text{m/s}$. Wiederholen: [Geschwindigkeit](/lernen/physik1/kinematik/geschwindigkeit).
```

```aufgabe
id: p6-e-bogenmass
art: check
titel: Grad ins Bogenmaß
niveau: 1
angabe: |
  Wie groß ist ein Winkel von $90^\circ$ im Bogenmaß (in rad)?
teile:
  - typ: zahl
    loesung: "pi/2"
    einheit: "rad"
    anzeige: '\tfrac{\pi}{2} \approx 1{,}571'
    fehler:
      - wert: "90"
        meldung: Das ist der Winkel in Grad. Im Bogenmaß entspricht ein voller Kreis $2\pi$, ein Viertelkreis also $\tfrac{2\pi}{4}$.
      - wert: "pi"
        meldung: $\pi$ ist ein **halber** Kreis, also $180^\circ$. Gefragt ist ein Viertelkreis.
hinweise:
  - 'Ein voller Kreis hat $360^\circ$ oder $2\pi$. Welcher Bruchteil davon sind $90^\circ$?'
loesung: |
  Ein voller Kreis sind $360^\circ = 2\pi\,\text{rad}$. $90^\circ$ ist ein Viertel davon.
  ---
  $\varphi = \tfrac14\cdot 2\pi = \tfrac{\pi}{2} \approx 1{,}571\,\text{rad}$. Wiederholen: Mathematik, [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
```

```aufgabe
id: p6-e-richtung
art: check
titel: In welche Richtung zeigt die resultierende Kraft?
niveau: 1
angabe: |
  Ein Körper wird beschleunigt. In welche Richtung zeigt nach dem Grundgesetz die **resultierende Kraft** auf ihn?
teile:
  - typ: auswahl
    optionen:
      - "immer in Richtung der Geschwindigkeit"
      - "immer in Richtung der Beschleunigung"
      - "immer entgegen der Geschwindigkeit"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das ist die Vorstellung „Bewegung braucht eine Kraft in Bewegungsrichtung“. Ein bremsendes Auto fährt nach vorn, die resultierende Kraft zeigt aber nach hinten. Kraft und **Beschleunigung** zeigen in dieselbe Richtung.
      - wert: 2
        meldung: Das gilt nur beim Bremsen. Beim Anfahren zeigt die Kraft in Fahrtrichtung. Allgemein zeigt sie in Richtung der **Beschleunigung**.
hinweise:
  - 'Das Grundgesetz $\vec F_{\text{res}} = m\cdot\vec a$ ist eine Gleichung zwischen Vektoren. Die Masse ist eine positive Zahl.'
loesung: |
  Im Grundgesetz $\vec F_{\text{res}} = m\,\vec a$ ist $m$ eine positive Zahl. Ein Vektor mal eine positive Zahl behält seine Richtung.
  ---
  Die resultierende Kraft zeigt also immer in Richtung der Beschleunigung, nicht unbedingt in Richtung der Bewegung. Genau das brauchen wir bei der Kreisbewegung. Wiederholen: [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung).
```

```aufgabe
id: p6-e-wurf-kraefte
art: check
titel: Kräfte auf einen geworfenen Ball
niveau: 1
angabe: |
  Ein Ball fliegt nach dem Abwurf schräg nach oben durch die Luft. Den Luftwiderstand vernachlässigen wir. Welche Kräfte wirken während des Flugs auf den Ball?
teile:
  - typ: auswahl
    optionen:
      - "nur die Gewichtskraft"
      - "die Gewichtskraft und eine Kraft in Flugrichtung"
      - "die Gewichtskraft und die Wurfkraft der Hand"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Kraft „in Flugrichtung“ übt niemand aus. Der Ball fliegt weiter, weil er träge ist, nicht weil ihn etwas schiebt.
      - wert: 2
        meldung: Die Hand berührt den Ball nach dem Abwurf nicht mehr. Kräfte brauchen einen Körper, der sie ausübt. In der Luft bleibt nur die Erde.
hinweise:
  - Frag bei jeder Kraft, welcher Körper sie ausübt.
loesung: |
  Kräfte üben Körper aufeinander aus. Nach dem Abwurf berührt den Ball nichts mehr, nur die Erde zieht ihn an.
  ---
  Also wirkt nur die Gewichtskraft. Dieselbe Frage „Wer übt die Kraft aus?“ entlarvt später die Zentrifugalkraft. Wiederholen: [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
```

```aufgabe
id: p6-e-haftreibung
art: check
titel: Größte Haftreibungskraft
niveau: 1
angabe: |
  Ein Auto ($1000\,\text{kg}$) steht auf einer waagrechten Straße. Die Haftreibungszahl zwischen Reifen und Straße ist $\mu_H = 0{,}50$. Wie groß ist die größte Haftreibungskraft in N?
teile:
  - typ: zahl
    loesung: "0.5*1000*9.81"
    einheit: "N"
    anzeige: '4905 \approx 4{,}91\cdot 10^{3}'
    fehler:
      - wert: "0.5*1000"
        meldung: Du hast die Reibungszahl mit der Masse multipliziert. Die Haftreibung hängt von der **Normalkraft** ab, hier $F_N = m g$ in Newton.
hinweise:
  - 'Größte Haftreibung: $F_{H,\max} = \mu_H F_N$ mit $F_N = m g$ auf waagrechter Straße.'
loesung: |
  Auf waagrechter Straße trägt die Straße das ganze Gewicht: $F_N = m g = 1000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 9810\,\text{N}$.
  ---
  $F_{H,\max} = 0{,}50\cdot 9810\,\text{N} = 4905\,\text{N} \approx 4{,}9\,\text{kN}$. Wiederholen: [Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand).
```

```aufgabe
id: p6-e-energie
art: check
titel: Geschwindigkeit nach einem Höhenunterschied
niveau: 1
angabe: |
  Ein Wagen rollt reibungsfrei aus der Ruhe eine $5{,}0\,\text{m}$ hohe Rampe hinab. Wie schnell ist er unten (in m/s)?
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*5)"
    einheit: "m/s"
    anzeige: '9{,}90'
    fehler:
      - wert: "2*9.81*5"
        meldung: Das ist $v^2$. Zieh noch die Wurzel.
      - wert: "sqrt(9.81*5)"
        meldung: Der Faktor $2$ fehlt. Er kommt aus dem $\tfrac12$ in $\tfrac12 m v^2$.
hinweise:
  - 'Lageenergie oben gleich Bewegungsenergie unten: $m g h = \tfrac12 m v^2$.'
loesung: |
  Ohne Reibung bleibt die mechanische Energie erhalten: $m g h = \tfrac12 m v^2$. Die Masse kürzt sich, also $v = \sqrt{2 g h}$.
  ---
  $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 5{,}0\,\text{m}} = \sqrt{98{,}1\,\text{m}^2/\text{s}^2} = 9{,}90\,\text{m/s}$. Wiederholen: [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
```

```aufgabe
id: p6-e-potenzen
art: check
titel: Eine Zehnerpotenz quadrieren
niveau: 1
angabe: |
  Berechne $(6{,}0\cdot 10^{6})^2$. Gib das Ergebnis in Zehnerpotenzschreibweise an.
teile:
  - typ: zahl
    loesung: "(6.0e6)^2"
    anzeige: '3{,}6\cdot 10^{13}'
    fehler:
      - wert: "6.0^2*1e6"
        meldung: Du hast nur die $6{,}0$ quadriert. Auch die Zehnerpotenz wird quadriert, $(10^6)^2 = 10^{12}$.
      - wert: "6.0e12"
        meldung: Die Zehnerpotenz ist richtig quadriert, aber die $6{,}0$ nicht. $6{,}0^2 = 36$.
hinweise:
  - 'Ein Produkt wird quadriert, indem man jeden Faktor quadriert: $(a\cdot b)^2 = a^2\cdot b^2$.'
loesung: |
  Jeder Faktor wird quadriert: $(6{,}0\cdot 10^6)^2 = 6{,}0^2\cdot(10^6)^2 = 36\cdot 10^{12}$.
  ---
  $36\cdot 10^{12} = 3{,}6\cdot 10^{13}$. Solche Rechnungen brauchst du bei jedem Erdradius im Quadrat. Wiederholen: Mathematik, [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

## Kreisbewegung beschreiben: Periode, Frequenz, Winkelgeschwindigkeit

```aufgabe
id: p6-1-check
art: check
titel: "Vorwissen: der Umfang eines Kreises"
niveau: 1
angabe: |
  Ein Punkt auf dem Rand eines Rades ist $0{,}30\,\text{m}$ von der Achse entfernt. Welchen Weg legt er bei **einer** vollen Umdrehung zurück (in m)?
teile:
  - typ: zahl
    loesung: "2*pi*0.30"
    einheit: "m"
    anzeige: '1{,}885'
    fehler:
      - wert: "pi*0.30"
        meldung: Du hast $\pi r$ gerechnet, das ist nur ein **halber** Umfang. Der ganze Kreisumfang ist $2\pi r$.
      - wert: "pi*0.30^2"
        meldung: Das ist die **Fläche** des Kreises, $\pi r^2$. Gefragt ist der Weg entlang des Randes, also der Umfang $2\pi r$.
hinweise:
  - 'Der Umfang eines Kreises mit Radius $r$ ist $U = 2\pi r$.'
loesung: |
  Bei einer vollen Umdrehung läuft der Punkt einmal den ganzen Kreisrand entlang. Dieser Weg ist der Umfang $U = 2\pi r$.
  ---
  $U = 2\pi\cdot 0{,}30\,\text{m} = 1{,}885\,\text{m}$. Der Weg wächst mit dem Radius. Wiederholen: Mathematik, [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
```

Ein Kinderkarussell dreht sich gleichmäßig. Ein Kind sitzt außen auf einem Pferd. Es wird weder schneller
noch langsamer und läuft immer auf demselben Kreis. So eine Bewegung heißt **gleichförmige
Kreisbewegung**: Der Körper bewegt sich auf einer Kreisbahn, und der Betrag seiner Geschwindigkeit bleibt
gleich. Ein **Nicht-Beispiel** ist ein Karussell, das gerade anläuft. Dort wird das Kind schneller, die
Kreisbewegung ist also nicht gleichförmig.

Wir behandeln den Körper als **Massenpunkt**, also als Punkt, der die ganze Masse trägt (siehe
[Bezugssystem, Massenpunkt und Ort](/lernen/physik1/kinematik/bezugssystem-massenpunkt-und-ort)). Um die
Bewegung zu beschreiben, brauchen wir vier Größen. Sie beantworten vier verschiedene Fragen: Wie lange
dauert eine Runde? Wie viele Runden pro Sekunde? Wie schnell dreht sich der Winkel? Wie schnell ist der
Körper auf seiner Bahn?

### Periode, Frequenz und Drehzahl

Die **Periodendauer** $T$ (auch Umlaufzeit) ist die Zeit für **eine** volle Runde. Das Karussell braucht
zum Beispiel $T = 8{,}0\,\text{s}$ für eine Umdrehung.

Die **Frequenz** $f$ zählt die Runden pro Sekunde. Braucht eine Runde $8{,}0\,\text{s}$, dann schafft das
Karussell in einer Sekunde ein Achtel Runde, also $f = 1/(8{,}0\,\text{s}) = 0{,}125\,\text{s}^{-1}$.
Allgemein gilt $f = 1/T$. Die Einheit $\text{s}^{-1}$ heißt auch **Hertz** (Hz). Bei Maschinen gibt man
die Frequenz oft als **Drehzahl** in Umdrehungen pro **Minute** an, geschrieben $\text{min}^{-1}$ oder U/min.

### Winkelgeschwindigkeit im Bogenmaß

Beim Drehen überstreicht die Verbindungslinie vom Mittelpunkt zum Körper einen Winkel $\varphi$
(gelesen „phi“). In der Physik misst man diesen Winkel im **Bogenmaß**: Man teilt die Länge $b$ des
zurückgelegten Kreisbogens durch den Radius $r$,
$$\varphi = \frac{b}{r}.$$
Ein voller Umlauf hat den Bogen $2\pi r$ und damit den Winkel $2\pi$. Die Einheit „Radiant“ (rad) ist
eigentlich nur die Zahl $1$, denn Meter durch Meter kürzt sich (siehe Mathematik,
[Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass)).

```plot
x: [-1.6, 1.6]
y: [-1.3, 1.5]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
  - { x: "cos(t)", y: "sin(t)", t: [0, 1.0], farbe: 1 }
  - { x: "0.3*cos(t)", y: "0.3*sin(t)", t: [0, 1.0], farbe: 0 }
vektoren:
  - { von: [0, 0], nach: [1, 0], label: "r", farbe: 3 }
  - { von: [0, 0], nach: [0.540, 0.841], label: "r", farbe: 3 }
punkte:
  - { x: 1, y: 0, label: "Start" }
  - { x: 0.540, y: 0.841, label: "nach der Zeit t" }
  - { x: 0.40, y: 0.17, label: "φ" }
  - { x: 1.12, y: 0.55, label: "Bogen b" }
beschriftung: "Bogenmaß: Der Körper läuft vom Startpunkt auf dem Kreis mit Radius r den Bogen b (orange). Der Winkel φ (blauer Bogen) ist das Verhältnis b durch r. Hier ist b genau so lang wie r, also ist φ = 1 rad, das sind etwa 57 Grad."
```

Die **Winkelgeschwindigkeit** $\omega$ (gelesen „omega“) sagt, wie schnell der Winkel wächst:
$$\omega = \frac{\Delta\varphi}{\Delta t}.$$
Dabei ist $\Delta\varphi$ der überstrichene Winkel und $\Delta t$ die dafür nötige Zeit. In einer
Periode $T$ überstreicht der Körper genau $2\pi$. Daraus folgt
$$\omega = \frac{2\pi}{T} = 2\pi f.$$
Für das Karussell mit $T = 8{,}0\,\text{s}$ ist $\omega = 2\pi/8{,}0\,\text{s} = 0{,}785\,\text{s}^{-1}$.

### Bahngeschwindigkeit

Die **Bahngeschwindigkeit** $v$ ist die gewöhnliche Geschwindigkeit des Körpers entlang seiner Bahn. In
einer Periode legt er den Umfang $2\pi r$ zurück, also gilt $v = 2\pi r/T$. Weil $2\pi/T = \omega$ ist,
lässt sich das kürzer schreiben:
$$v = \omega\, r.$$
Dabei ist $v$ die Bahngeschwindigkeit in m/s, $\omega$ die Winkelgeschwindigkeit in $\text{s}^{-1}$ und
$r$ der Radius in m. Sitzt das Kind $3{,}0\,\text{m}$ von der Achse entfernt, ist es
$v = 0{,}785\,\text{s}^{-1}\cdot 3{,}0\,\text{m} = 2{,}36\,\text{m/s}$ schnell.

Die Richtung der Geschwindigkeit ist in jedem Moment **tangential**, also entlang der Kreislinie und
senkrecht zum Radius. Ihr Betrag bleibt gleich, ihre Richtung ändert sich ständig. Diese Richtungsänderung
ist das Thema der Lektion [Die Zentripetalbeschleunigung](/lernen/physik1/kreisbewegung-gravitation/die-zentripetalbeschleunigung).

:::definition[Kenngrößen der gleichförmigen Kreisbewegung]
- **Periodendauer** $T$: Zeit für einen vollen Umlauf, Einheit s.
- **Frequenz** $f = \dfrac1T$: Umläufe pro Sekunde, Einheit $\text{s}^{-1} = \text{Hz}$.
- **Winkelgeschwindigkeit** $\omega = \dfrac{\Delta\varphi}{\Delta t} = \dfrac{2\pi}{T} = 2\pi f$, Einheit $\text{s}^{-1}$ (oder rad/s).
- **Bahngeschwindigkeit** $v = \dfrac{2\pi r}{T} = \omega\, r$, Einheit m/s.
:::

:::beispiel[Der Minutenzeiger einer Kirchturmuhr]
Der Minutenzeiger einer Turmuhr ist $2{,}0\,\text{m}$ lang. Wie schnell bewegt sich seine Spitze?

**Schritt 1, Periodendauer:** Der Minutenzeiger braucht eine Stunde für eine Runde:
$T = 60\cdot 60\,\text{s} = 3600\,\text{s}$.

**Schritt 2, Winkelgeschwindigkeit:** $\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{3600\,\text{s}} = 1{,}75\cdot 10^{-3}\,\text{s}^{-1}$.

**Schritt 3, Bahngeschwindigkeit:** $v = \omega r = 1{,}75\cdot 10^{-3}\,\text{s}^{-1}\cdot 2{,}0\,\text{m} = 3{,}5\cdot 10^{-3}\,\text{m/s} = 3{,}5\,\text{mm/s}$.

**Deutung:** Das ist zu langsam, um es zu sehen. In einer Minute wandert die Spitze aber
$3{,}5\,\text{mm/s}\cdot 60\,\text{s} = 21\,\text{cm}$ weit. Darum merkt man nach einer Minute, dass
sich der Zeiger bewegt hat.
:::

:::beispiel[Ein Bohrer mit 3000 Umdrehungen pro Minute]
Eine Bohrmaschine dreht einen Bohrer mit $10\,\text{mm}$ Durchmesser mit $3000\,\text{min}^{-1}$. Wie
schnell bewegt sich die Schneide am Rand des Bohrers?

**Schritt 1, Frequenz in Sekunden:** Eine Minute hat $60\,\text{s}$. Also
$f = 3000/(60\,\text{s}) = 50\,\text{s}^{-1}$ und $T = 1/f = 0{,}020\,\text{s}$.

**Schritt 2, Winkelgeschwindigkeit:** $\omega = 2\pi f = 2\pi\cdot 50\,\text{s}^{-1} = 314\,\text{s}^{-1}$.

**Schritt 3, Bahngeschwindigkeit:** Der Radius ist der halbe Durchmesser, $r = 5{,}0\,\text{mm} = 0{,}0050\,\text{m}$.
$v = \omega r = 314\,\text{s}^{-1}\cdot 0{,}0050\,\text{m} = 1{,}57\,\text{m/s}$.

**Probe über den Umfang:** In einer Sekunde dreht der Bohrer $50$ Runden zu je $2\pi\cdot 5{,}0\,\text{mm} = 31{,}4\,\text{mm}$,
also $50\cdot 31{,}4\,\text{mm} = 1570\,\text{mm} = 1{,}57\,\text{m}$ pro Sekunde. ✓
:::

:::merke[So rechnest du die Kenngrößen um]
1. Drehzahl in $\text{min}^{-1}$ zuerst durch $60$ teilen: Das ergibt die Frequenz $f$ in $\text{s}^{-1}$.
2. $T = 1/f$ und $\omega = 2\pi f = 2\pi/T$.
3. $v = \omega r$, der Radius in Metern.
4. Kontrolle: Ein Punkt weiter außen ist schneller, $\omega$ ist für alle Punkte gleich.
:::

Der letzte Punkt verdient einen eigenen Satz. Alle Punkte einer starren Scheibe drehen sich in derselben
Zeit einmal herum. Sie haben also dieselbe Periode und dieselbe Winkelgeschwindigkeit. Ein Punkt weiter
außen läuft aber auf einem größeren Kreis und muss in derselben Zeit einen längeren Weg schaffen. Seine
Bahngeschwindigkeit ist deshalb größer. Am Äquator bewegst du dich wegen der Erddrehung mit über
$460\,\text{m/s}$, am Nordpol drehst du dich nur auf der Stelle.

:::achtung[Fehler: Drehzahl pro Minute direkt in die Formel eingesetzt]
Ein Ventilator dreht sich mit $1500\,\text{min}^{-1}$.

Falsch gerechnet: $\omega = 2\pi\cdot 1500 = 9425\,\text{s}^{-1}$.

Die $1500$ sind Umdrehungen pro **Minute**. Die Formel $\omega = 2\pi f$ braucht Umdrehungen pro
**Sekunde**. Richtig ist $f = 1500/(60\,\text{s}) = 25\,\text{s}^{-1}$ und
$\omega = 2\pi\cdot 25\,\text{s}^{-1} = 157\,\text{s}^{-1}$. Der falsche Wert ist genau $60$-mal zu groß.
:::

:::achtung[Fehler: Winkelgeschwindigkeit in Grad pro Sekunde]
Ein Karussell braucht $8{,}0\,\text{s}$ für eine Runde, ein Sitz ist $3{,}0\,\text{m}$ von der Achse entfernt.

Falsch gerechnet: $\omega = 360^\circ/8{,}0\,\text{s} = 45\,^\circ\text{/s}$, also $v = \omega r = 45\cdot 3{,}0\,\text{m/s} = 135\,\text{m/s}$.

Die Formel $v = \omega r$ gilt nur im **Bogenmaß**, denn nur dort ist der Winkel „Bogen durch Radius“.
Richtig ist $\omega = 2\pi/8{,}0\,\text{s} = 0{,}785\,\text{s}^{-1}$ und $v = 0{,}785\,\text{s}^{-1}\cdot 3{,}0\,\text{m} = 2{,}36\,\text{m/s}$.
Ein Karussell mit $135\,\text{m/s}$, also fast $500\,\text{km/h}$, hätte jeden Plausibilitätscheck verfehlt.
:::

```reflexion
frage: Zwei Kinder sitzen auf derselben Drehscheibe, eines am Rand, eines in der Mitte zwischen Achse und Rand. Erkläre, welche der vier Größen T, f, ω und v für beide gleich sind und welche nicht, und begründe es.
antwort: |
  Die Scheibe ist starr. Beide Kinder brauchen deshalb gleich lang für eine Runde: $T$ ist gleich, also auch
  $f = 1/T$ und $\omega = 2\pi/T$. Verschieden ist die Bahngeschwindigkeit $v = \omega r$. Das äußere Kind
  läuft auf einem doppelt so großen Kreis und legt in derselben Zeit den doppelten Weg zurück. Es ist also
  doppelt so schnell. Die Winkelgeschwindigkeit beschreibt die ganze Scheibe, die Bahngeschwindigkeit nur
  einen einzelnen Punkt.
```

### Aufgaben zu den Kenngrößen

```aufgabe
id: p6-umrechnen-omega
titel: Drehzahl umrechnen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Autorad dreht sich mit $1200$ Umdrehungen pro Minute. Berechne die Periodendauer (in s) und die Winkelgeschwindigkeit (in $\text{s}^{-1}$, auf vier signifikante Stellen).
teile:
  - typ: zahl
    label: Periodendauer
    loesung: "60/1200"
    einheit: "s"
    anzeige: '0{,}05'
    fehler:
      - wert: "1/1200"
        meldung: Du hast die Drehzahl pro **Minute** wie eine Frequenz pro Sekunde behandelt. Rechne zuerst $1200/60$ Umdrehungen pro Sekunde aus.
      - wert: "1200/60"
        meldung: Das ist die Frequenz $f$, also Umdrehungen pro Sekunde. Die Periodendauer ist ihr Kehrwert.
  - typ: zahl
    label: Winkelgeschwindigkeit
    loesung: "2*pi*1200/60"
    einheit: "1/s"
    anzeige: '125{,}7'
    fehler:
      - wert: "2*pi*1200"
        meldung: Hier fehlt die Umrechnung von Minuten in Sekunden. Dein Wert ist $60$-mal zu groß.
      - wert: "1200/60"
        meldung: Das ist die Frequenz $f$. Die Winkelgeschwindigkeit ist $2\pi$-mal so groß, $\omega = 2\pi f$.
hinweise:
  - 'Teile die Drehzahl durch $60$, dann hast du $f$ in $\text{s}^{-1}$. Danach $T = 1/f$ und $\omega = 2\pi f$.'
loesung: |
  **Frequenz:** $f = \dfrac{1200}{60\,\text{s}} = 20\,\text{s}^{-1}$, also $T = \dfrac{1}{f} = \dfrac{1}{20\,\text{s}^{-1}} = 0{,}05\,\text{s}$.
  ---
  **Winkelgeschwindigkeit:** $\omega = 2\pi f = 2\pi\cdot 20\,\text{s}^{-1} = 125{,}7\,\text{s}^{-1}$. Kontrolle: $\omega\cdot T = 125{,}7\,\text{s}^{-1}\cdot 0{,}05\,\text{s} = 6{,}28 = 2\pi$, also genau eine Runde. ✓
```

```aufgabe
id: p6-bahngeschw-erde
titel: Wie schnell bist du am Äquator?
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Erde (Radius $6370\,\text{km}$) dreht sich in $24\,\text{h}$ einmal um ihre Achse. Mit welcher Geschwindigkeit bewegt sich ein Punkt am Äquator? Gib das Ergebnis in m/s auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "2*pi*6.37e6/86400"
    einheit: "m/s"
    anzeige: '463'
    fehler:
      - wert: "2*pi*6370/24"
        meldung: Das sind Kilometer pro Stunde, nicht Meter pro Sekunde. Rechne den Radius in Meter und die Zeit in Sekunden um.
      - wert: "2*pi*6.37e6/24"
        meldung: Der Radius ist in Metern, die Zeit aber noch in Stunden. $24\,\text{h} = 86\,400\,\text{s}$.
hinweise:
  - 'In $24\,\text{h} = 86\,400\,\text{s}$ läuft der Punkt einmal den Umfang $2\pi R$ entlang.'
loesung: |
  **Ansatz:** In einer Periode legt der Punkt den Erdumfang zurück: $v = \dfrac{2\pi R}{T}$ mit $R = 6{,}37\cdot 10^6\,\text{m}$ und $T = 86\,400\,\text{s}$.
  ---
  $v = \dfrac{2\pi\cdot 6{,}37\cdot 10^{6}\,\text{m}}{86\,400\,\text{s}} = 463\,\text{m/s} \approx 1670\,\text{km/h}$. Wir spüren das nicht, weil Boden, Luft und wir selbst uns gemeinsam bewegen.
```

```aufgabe
id: p6-riesenrad
titel: Riesenrad
niveau: 1
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine Gondel eines Riesenrads ist $30\,\text{m}$ von der Achse entfernt. Für eine Umdrehung braucht das Rad $15\,\text{min}$. Wie schnell bewegt sich die Gondel (in m/s, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "2*pi*30/(15*60)"
    einheit: "m/s"
    anzeige: '0{,}209'
    fehler:
      - wert: "2*pi*30/15"
        meldung: Die Zeit muss in Sekunden stehen. $15\,\text{min} = 900\,\text{s}$.
      - wert: "pi*30/(15*60)"
        meldung: Für eine ganze Runde läuft die Gondel den ganzen Umfang $2\pi r$, nicht nur $\pi r$.
hinweise:
  - '$v = \dfrac{2\pi r}{T}$, die Zeit in Sekunden.'
loesung: |
  **Ansatz:** In einer Periode $T = 15\,\text{min} = 900\,\text{s}$ legt die Gondel den Umfang $2\pi r$ zurück.
  ---
  $v = \dfrac{2\pi\cdot 30\,\text{m}}{900\,\text{s}} = 0{,}209\,\text{m/s}$. Das ist langsamer als gemütliches Gehen ($1\,\text{m/s}$) und passt dazu, dass man bequem ein- und aussteigen kann.
```

```aufgabe
id: p6-1-konzept-drehscheibe
titel: Innen oder außen schneller?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Auf einer gleichmäßig drehenden Scheibe sitzen eine Ameise A im Abstand $5\,\text{cm}$ und eine Ameise B im Abstand $15\,\text{cm}$ von der Achse. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Beide haben dieselbe Winkelgeschwindigkeit, B hat die dreifache Bahngeschwindigkeit."
      - "Beide haben dieselbe Bahngeschwindigkeit, A hat die dreifache Winkelgeschwindigkeit."
      - "B hat die dreifache Winkelgeschwindigkeit und die dreifache Bahngeschwindigkeit."
      - "Beide haben dieselbe Winkel- und dieselbe Bahngeschwindigkeit, weil sie auf derselben Scheibe sitzen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Auf einer starren Scheibe brauchen alle Punkte gleich lang für eine Runde. Also ist $\omega = 2\pi/T$ für beide gleich, nicht die Bahngeschwindigkeit.
      - wert: 2
        meldung: B braucht für eine Runde genauso lange wie A. Die Winkelgeschwindigkeit hängt nur von $T$ ab und ist deshalb gleich. Nur $v = \omega r$ wächst mit dem Radius.
      - wert: 3
        meldung: Gleich ist nur die Winkelgeschwindigkeit. B läuft auf einem dreimal so großen Kreis und muss in derselben Zeit den dreifachen Weg schaffen.
hinweise:
  - Wie lange braucht jede Ameise für eine Runde? Und wie lang ist ihr Weg?
loesung: |
  **Gleich:** Die Scheibe ist starr, beide Ameisen brauchen dieselbe Zeit $T$ für eine Runde. Also ist $\omega = 2\pi/T$ gleich.
  ---
  **Verschieden:** $v = \omega r$. B hat den dreifachen Radius ($15\,\text{cm}$ statt $5\,\text{cm}$), also die dreifache Bahngeschwindigkeit.
```

```aufgabe
id: p6-cd
titel: Innen und außen auf einer CD
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine CD dreht sich mit $500$ Umdrehungen pro Minute. Berechne die Bahngeschwindigkeit eines Punktes ganz innen ($2{,}5\,\text{cm}$ von der Achse) und ganz außen ($6{,}0\,\text{cm}$ von der Achse), jeweils in m/s auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: innen
    loesung: "2*pi*500/60*0.025"
    einheit: "m/s"
    anzeige: '1{,}31'
    fehler:
      - wert: "2*pi*500*0.025"
        meldung: Die Drehzahl ist pro Minute angegeben. Teile sie zuerst durch $60$.
      - wert: "2*pi*500/60*2.5"
        meldung: Der Radius muss in Metern stehen, $2{,}5\,\text{cm} = 0{,}025\,\text{m}$.
  - typ: zahl
    label: außen
    loesung: "2*pi*500/60*0.06"
    einheit: "m/s"
    anzeige: '3{,}14'
    fehler:
      - wert: "2*pi*500/60*0.025"
        meldung: Das ist der Wert für innen. Außen ist der Radius $0{,}060\,\text{m}$, und die Bahngeschwindigkeit ist größer.
hinweise:
  - 'Zuerst $\omega$ in $\text{s}^{-1}$: $f = 500/60\,\text{s}^{-1}$, dann $\omega = 2\pi f$.'
  - '$v = \omega r$ mit dem jeweiligen Radius in Metern. $\omega$ ist für beide Punkte gleich.'
loesung: |
  **Ansatz:** Die CD ist starr, also haben beide Punkte dieselbe Winkelgeschwindigkeit. Nur der Radius in $v = \omega r$ ist verschieden.
  ---
  **Winkelgeschwindigkeit:** $f = 500/(60\,\text{s}) = 8{,}33\,\text{s}^{-1}$, $\omega = 2\pi f = 52{,}4\,\text{s}^{-1}$.
  ---
  **Innen:** $v = 52{,}4\,\text{s}^{-1}\cdot 0{,}025\,\text{m} = 1{,}31\,\text{m/s}$. **Außen:** $v = 52{,}4\,\text{s}^{-1}\cdot 0{,}060\,\text{m} = 3{,}14\,\text{m/s}$.
  ---
  **Kontrolle:** Das Verhältnis $3{,}14/1{,}31 = 2{,}4$ ist genau das Verhältnis der Radien $6{,}0/2{,}5$. ✓
```

```aufgabe
id: p6-1-fahrrad
titel: Wie schnell dreht sich das Fahrradrad?
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Fahrrad fährt mit $18\,\text{km/h}$. Seine Räder haben einen Durchmesser von $0{,}70\,\text{m}$ und rollen ohne zu rutschen. Dann ist die Bahngeschwindigkeit des Reifens gegenüber der Achse gleich der Fahrgeschwindigkeit.

  a) Wie groß ist die Winkelgeschwindigkeit eines Rades (in $\text{s}^{-1}$)?

  b) Wie viele Umdrehungen macht ein Rad pro Minute? Runde auf ganze Umdrehungen.
teile:
  - typ: zahl
    label: a) Winkelgeschwindigkeit
    loesung: "(18/3.6)/0.35"
    einheit: "1/s"
    anzeige: '14{,}3'
    fehler:
      - wert: "(18/3.6)/0.70"
        meldung: In $v = \omega r$ steht der **Radius**, also der halbe Durchmesser, $0{,}35\,\text{m}$.
      - wert: "18/0.35"
        meldung: Die Geschwindigkeit muss in m/s stehen. $18\,\text{km/h} = 5{,}0\,\text{m/s}$.
  - typ: zahl
    label: b) Umdrehungen pro Minute
    loesung: "(18/3.6)/0.35/(2*pi)*60"
    einheit: "1/min"
    anzeige: '136'
    toleranz: 1
    fehler:
      - wert: "(18/3.6)/0.35*60"
        meldung: Du hast $\omega$ mit $60$ multipliziert. Umdrehungen zählt die Frequenz $f = \omega/(2\pi)$, nicht $\omega$.
hinweise:
  - 'Umrechnen: $v = 18/3{,}6\,\text{m/s}$, $r = 0{,}35\,\text{m}$. Dann $\omega = v/r$.'
  - 'Umdrehungen pro Sekunde: $f = \omega/(2\pi)$. Pro Minute mal $60$.'
gefuehrt:
  - text: Wie schnell fährt das Rad in m/s?
    teil: { typ: zahl, loesung: "18/3.6", einheit: "m/s" }
    erklaerung: '$18\,\text{km/h} : 3{,}6 = 5{,}0\,\text{m/s}$.'
  - text: Wie groß ist der Radius des Rades in m?
    teil: { typ: zahl, loesung: "0.35", einheit: "m" }
    erklaerung: Der Radius ist der halbe Durchmesser, $0{,}70\,\text{m}/2 = 0{,}35\,\text{m}$.
  - text: Berechne die Winkelgeschwindigkeit aus $v = \omega r$.
    teil: { typ: zahl, loesung: "5/0.35", einheit: "1/s" }
    erklaerung: '$\omega = v/r = 5{,}0\,\text{m/s} : 0{,}35\,\text{m} = 14{,}3\,\text{s}^{-1}$.'
  - text: Wie viele Umdrehungen sind das pro Sekunde?
    teil: { typ: zahl, loesung: "5/0.35/(2*pi)", einheit: "1/s" }
    erklaerung: '$f = \omega/(2\pi) = 14{,}3\,\text{s}^{-1}/6{,}28 = 2{,}27\,\text{s}^{-1}$.'
  - text: Und pro Minute?
    teil: { typ: zahl, loesung: "5/0.35/(2*pi)*60", einheit: "1/min", toleranz: 1 }
    erklaerung: '$2{,}27\,\text{s}^{-1}\cdot 60\,\text{s/min} = 136\,\text{min}^{-1}$.'
loesung: |
  **Ansatz:** Beim Rollen ohne Rutschen ist die Bahngeschwindigkeit des Reifens gleich der Fahrgeschwindigkeit. Aus $v = \omega r$ folgt $\omega = v/r$.
  ---
  **a)** $v = 18/3{,}6\,\text{m/s} = 5{,}0\,\text{m/s}$, $r = 0{,}35\,\text{m}$. $\omega = \dfrac{5{,}0\,\text{m/s}}{0{,}35\,\text{m}} = 14{,}3\,\text{s}^{-1}$.
  ---
  **b)** $f = \dfrac{\omega}{2\pi} = \dfrac{14{,}3\,\text{s}^{-1}}{2\pi} = 2{,}27\,\text{s}^{-1}$. Pro Minute: $2{,}27\cdot 60 = 136$ Umdrehungen.
  ---
  **Probe:** Ein Umfang ist $2\pi\cdot 0{,}35\,\text{m} = 2{,}20\,\text{m}$. $136$ Umdrehungen ergeben $299\,\text{m}$ pro Minute, das sind $5{,}0\,\text{m/s}$. ✓
```

```aufgabe
id: p6-1-messung
titel: Die Umlaufzeit mit der Stoppuhr messen
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Du willst die Winkelgeschwindigkeit eines Plattentellers messen. Mit der Stoppuhr misst du für $10$ Umdrehungen die Zeit $12{,}4\,\text{s}$. Wegen deiner Reaktionszeit schätzt du die Unsicherheit dieser Zeitmessung auf $\pm 0{,}2\,\text{s}$.

  a) Wie groß ist die Periodendauer (in s)?

  b) Wie groß ist die Winkelgeschwindigkeit (in $\text{s}^{-1}$, drei signifikante Stellen)?

  c) Wie groß ist die absolute Unsicherheit der Winkelgeschwindigkeit (in $\text{s}^{-1}$)? Die relative Unsicherheit von $\omega$ ist dieselbe wie die der gemessenen Zeit.
teile:
  - typ: zahl
    label: a) Periodendauer
    loesung: "12.4/10"
    einheit: "s"
    anzeige: '1{,}24'
    fehler:
      - wert: "12.4"
        meldung: $12{,}4\,\text{s}$ ist die Zeit für **zehn** Umdrehungen. Eine Periode ist ein Zehntel davon.
  - typ: zahl
    label: b) Winkelgeschwindigkeit
    loesung: "2*pi/1.24"
    einheit: "1/s"
    anzeige: '5{,}07'
    fehler:
      - wert: "1/1.24"
        meldung: Das ist die Frequenz $f = 1/T$. Die Winkelgeschwindigkeit ist $2\pi$-mal so groß.
  - typ: zahl
    label: c) Unsicherheit von ω
    loesung: "2*pi/1.24*0.2/12.4"
    einheit: "1/s"
    anzeige: '0{,}08'
    toleranz: 0.01
    fehler:
      - wert: "0.2"
        meldung: $0{,}2$ ist die Unsicherheit der **Zeit** in Sekunden. Für $\omega$ brauchst du die relative Unsicherheit $0{,}2/12{,}4$, angewandt auf $\omega$.
hinweise:
  - 'Die Periode ist die gemessene Zeit durch die Zahl der Umdrehungen.'
  - 'Relative Unsicherheit der Zeit: $0{,}2\,\text{s}/12{,}4\,\text{s}$. Mit diesem Anteil multiplizierst du $\omega$.'
loesung: |
  **Ansatz:** Man misst zehn Umläufe, weil die Reaktionszeit beim Starten und Stoppen nur einmal anfällt. Ihr Einfluss verteilt sich so auf zehn Perioden.
  ---
  **a)** $T = 12{,}4\,\text{s}/10 = 1{,}24\,\text{s}$.
  ---
  **b)** $\omega = \dfrac{2\pi}{T} = \dfrac{2\pi}{1{,}24\,\text{s}} = 5{,}07\,\text{s}^{-1}$.
  ---
  **c)** Relative Unsicherheit: $\dfrac{0{,}2\,\text{s}}{12{,}4\,\text{s}} = 1{,}6\,\%$. Sie überträgt sich auf $T$ und auf $\omega = 2\pi/T$ (siehe [Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung)). $\Delta\omega = 0{,}016\cdot 5{,}07\,\text{s}^{-1} = 0{,}08\,\text{s}^{-1}$.
  ---
  **Ergebnis:** $\omega = (5{,}07 \pm 0{,}08)\,\text{s}^{-1}$. Mit nur einer gemessenen Umdrehung wäre die Unsicherheit zehnmal so groß.
```

```aufgabe
id: p6-1-erdbahn-wien
titel: Wie schnell bist du in Wien unterwegs?
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Du stehst in Wien auf der geographischen Breite $48{,}2^\circ$. Die Erde (Radius $6370\,\text{km}$) dreht sich in $24\,\text{h}$ einmal um ihre Achse und läuft in $365{,}25$ Tagen auf einer fast kreisförmigen Bahn mit Radius $1{,}496\cdot 10^{11}\,\text{m}$ um die Sonne.

  a) Wie groß ist der Radius des Kreises, auf dem Wien um die Erdachse läuft (in km)?

  b) Wie schnell bewegt sich Wien wegen der Erddrehung (in m/s, drei signifikante Stellen)?

  c) Wie schnell läuft die Erde um die Sonne (in km/s, drei signifikante Stellen)?
plot:
  x: [-1.5, 1.6]
  y: [-1.3, 1.4]
  gleich: true
  kurven:
    - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
  strecken:
    - { von: [0, -1.25], nach: [0, 1.25], gestrichelt: true }
    - { von: [0, 0], nach: [0.667, 0.745] }
    - { von: [0, 0.745], nach: [0.667, 0.745], farbe: 1 }
    - { von: [-1.0, 0], nach: [1.0, 0], gestrichelt: true }
  punkte:
    - { x: 0.667, y: 0.745, label: "Wien" }
    - { x: 0.25, y: 0.12, label: "48,2°" }
    - { x: 0.33, y: 0.85, label: "r" }
    - { x: 0, y: 1.25, label: "Erdachse" }
teile:
  - typ: zahl
    label: a) Radius des Breitenkreises
    loesung: "6370*cos(inRad(48.2))"
    einheit: "km"
    anzeige: '4246'
    fehler:
      - wert: "6370*sin(inRad(48.2))"
        meldung: Der Radius des Breitenkreises ist der **waagrechte** Abstand von der Achse. Er liegt am Breitenwinkel an, also Kosinus.
      - wert: "6370"
        meldung: Nur am Äquator ist der Kreis so groß wie der Erdradius. Wien liegt näher an der Achse.
  - typ: zahl
    label: b) Geschwindigkeit durch die Erddrehung
    loesung: "2*pi*6.37e6*cos(inRad(48.2))/86400"
    einheit: "m/s"
    anzeige: '309'
    fehler:
      - wert: "2*pi*6.37e6/86400"
        meldung: Das ist die Geschwindigkeit am Äquator. Wien läuft auf dem kleineren Breitenkreis.
  - typ: zahl
    label: c) Bahngeschwindigkeit der Erde
    loesung: "2*pi*1.496e11/(365.25*86400)/1000"
    einheit: "km/s"
    anzeige: '29{,}8'
    fehler:
      - wert: "2*pi*1.496e11/(365.25*86400)"
        meldung: Das ist das Ergebnis in m/s. Teile noch durch $1000$ für km/s.
hinweise:
  - 'Zeichne den Schnitt durch die Erde: Wien liegt auf einem Kreis um die Achse. Sein Radius ist die Ankathete am Breitenwinkel.'
  - 'Danach jeweils $v = 2\pi r/T$, alle Größen in Metern und Sekunden. Ein Jahr hat $365{,}25\cdot 86\,400\,\text{s}$.'
loesung: |
  **Modell:** Jeder Punkt der Erde läuft auf einem Kreis um die Erdachse. Für Wien ist das der Breitenkreis. Sein Radius $r$ ist der Abstand von der Achse, im Bild die orange Strecke.
  ---
  **a)** Im rechtwinkligen Dreieck aus Erdradius (Hypotenuse), Breitenkreisradius und Achse liegt $r$ am Winkel $48{,}2^\circ$ an: $r = R\cos 48{,}2^\circ = 6370\,\text{km}\cdot 0{,}667 = 4246\,\text{km}$ (siehe Mathematik, [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck)).
  ---
  **b)** $v = \dfrac{2\pi r}{T} = \dfrac{2\pi\cdot 4{,}246\cdot 10^{6}\,\text{m}}{86\,400\,\text{s}} = 309\,\text{m/s}$, also etwa $1110\,\text{km/h}$.
  ---
  **c)** $T = 365{,}25\cdot 86\,400\,\text{s} = 3{,}156\cdot 10^7\,\text{s}$. $v = \dfrac{2\pi\cdot 1{,}496\cdot 10^{11}\,\text{m}}{3{,}156\cdot 10^{7}\,\text{s}} = 2{,}98\cdot 10^4\,\text{m/s} = 29{,}8\,\text{km/s}$.
  ---
  **Deutung:** Um die Sonne bist du fast hundertmal schneller unterwegs als durch die Erddrehung. Du spürst beides nicht, weil sich die Geschwindigkeit kaum ändert. Spürbar ist nur eine Beschleunigung.
```

## Die Zentripetalbeschleunigung

```aufgabe
id: p6-2-check
art: check
titel: "Vorwissen: Ist das eine Beschleunigung?"
niveau: 1
angabe: |
  Ein Auto fährt mit konstant $50\,\text{km/h}$ durch einen Kreisverkehr. Der Tacho zeigt die ganze Zeit dieselbe Zahl. Ist das Auto beschleunigt?
teile:
  - typ: auswahl
    optionen:
      - "Nein, denn der Betrag der Geschwindigkeit bleibt gleich."
      - "Ja, denn die Richtung der Geschwindigkeit ändert sich."
      - "Nur wenn der Fahrer Gas gibt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Geschwindigkeit ist ein **Vektor** mit Betrag und Richtung. Ändert sich nur die Richtung, ändert sich der Vektor trotzdem, und das ist eine Beschleunigung.
      - wert: 2
        meldung: Gas geben ändert den Betrag. Aber auch das Lenken ändert die Geschwindigkeit, nämlich ihre Richtung. Beides ist eine Beschleunigung.
hinweise:
  - 'Beschleunigung ist die Änderung des **Geschwindigkeitsvektors** pro Zeit, $\vec a = \Delta\vec v/\Delta t$.'
loesung: |
  Die Beschleunigung ist definiert als Änderung des Geschwindigkeitsvektors pro Zeit. Ein Vektor ändert sich auch dann, wenn nur seine Richtung wechselt.
  ---
  Im Kreisverkehr dreht sich die Fahrtrichtung ständig. Also ist das Auto beschleunigt, obwohl der Tacho konstant bleibt. Wiederholen: [Beschleunigung](/lernen/physik1/kinematik/beschleunigung).
```

Im Alltag heißt „beschleunigen“ schneller werden. In der Physik ist der Begriff weiter. Die
**Beschleunigung** $\vec a = \Delta\vec v/\Delta t$ misst jede Änderung des Geschwindigkeitsvektors, also
eine Änderung des Betrags **oder** der Richtung. Bei der gleichförmigen Kreisbewegung bleibt der Betrag
gleich, aber die Richtung ändert sich ohne Pause. Deshalb ist auch diese Bewegung beschleunigt.

### Woher die Beschleunigung kommt: eine Herleitung in kleinen Schritten

**Worum geht es in einem Satz?** Ein Körper läuft mit konstantem Tempo $v$ auf einem Kreis mit Radius $r$.
Wir wollen herausfinden, wie groß seine Beschleunigung ist und wohin sie zeigt.

**Bild:** Stell dir den Geschwindigkeitspfeil als Uhrzeiger vor, der immer gleich lang bleibt, sich aber
mitdreht. Die Beschleunigung ist das, was man in jedem Augenblick zum alten Pfeil dazugeben muss, damit
der neue herauskommt.

**Schritt 1, zwei Momente vergleichen:** Zur Zeit $t$ hat der Körper die Geschwindigkeit $\vec v_1$, kurz
danach, zur Zeit $t + \Delta t$, die Geschwindigkeit $\vec v_2$. Beide sind gleich lang, nämlich $v$.

**Schritt 2, den Drehwinkel bestimmen:** Die Geschwindigkeit steht immer senkrecht auf dem Radius. Dreht
sich der Radius in der Zeit $\Delta t$ um den Winkel $\Delta\varphi = \omega\,\Delta t$, dann dreht sich der
Geschwindigkeitspfeil um genau denselben Winkel.

**Schritt 3, die Änderung zeichnen:** Wir zeichnen $\vec v_1$ und $\vec v_2$ vom selben Punkt aus. Die
Änderung $\Delta\vec v = \vec v_2 - \vec v_1$ ist der Pfeil von der Spitze von $\vec v_1$ zur Spitze von
$\vec v_2$ (Vektorsubtraktion, siehe Mathematik, [Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze)).

```plot
x: [-0.6, 2.6]
y: [-0.5, 1.6]
gleich: true
vektoren:
  - { von: [0, 0], nach: [2, 0], label: "v₁", farbe: 0 }
  - { von: [0, 0], nach: [1.732, 1.0], label: "v₂", farbe: 0 }
  - { von: [2, 0], nach: [1.732, 1.0], label: "Δv", farbe: 1 }
kurven:
  - { x: "0.5*cos(t)", y: "0.5*sin(t)", t: [0, 0.5236], farbe: 3 }
punkte:
  - { x: 0.62, y: 0.17, label: "Δφ" }
beschriftung: "Die zwei Geschwindigkeiten v₁ und v₂ (blau) sind gleich lang und um den Winkel Δφ gegeneinander gedreht. Ihre Differenz Δv (orange) verbindet die beiden Pfeilspitzen. Je kleiner Δφ wird, desto genauer steht Δv senkrecht auf v und zeigt zum Kreismittelpunkt. Zur Deutlichkeit ist Δφ hier mit 30 Grad groß gezeichnet."
```

**Schritt 4, die Länge von Δv:** Die beiden Pfeile bilden mit $\Delta\vec v$ ein gleichschenkeliges
Dreieck. Für einen kleinen Winkel ist die dritte Seite fast ein Kreisbogen mit Radius $v$ und Winkel
$\Delta\varphi$. Ein Bogen ist Radius mal Winkel im Bogenmaß, also
$$|\Delta\vec v| \approx v\,\Delta\varphi = v\,\omega\,\Delta t.$$

**Schritt 5, durch die Zeit teilen:** $a = \dfrac{|\Delta\vec v|}{\Delta t} = v\,\omega$. Mit $\omega = v/r$
aus der Lektion [Kreisbewegung beschreiben](/lernen/physik1/kreisbewegung-gravitation/kreisbewegung-beschreiben-periode-frequenz-winkelgeschwindigkeit)
wird daraus $a = v^2/r$, mit $v = \omega r$ wird daraus $a = \omega^2 r$.

**Schritt 6, die Richtung:** Je kleiner $\Delta t$, desto genauer steht $\Delta\vec v$ senkrecht auf $\vec v$.
Senkrecht zur Bahn und nach innen gerichtet heißt: zum Kreismittelpunkt.

**In Worten zurückübersetzt:** Ein Körper auf einer Kreisbahn wird ständig zur Mitte hin beschleunigt.
Diese Beschleunigung macht ihn nicht schneller. Sie biegt nur seine Bahn. Das Wort **zentripetal** heißt
„zum Zentrum strebend“.

:::satz[Zentripetalbeschleunigung]
Bewegt sich ein Körper gleichförmig mit der Bahngeschwindigkeit $v$ auf einem Kreis mit Radius $r$, so
zeigt seine Beschleunigung in jedem Moment zum **Kreismittelpunkt** und hat den Betrag
$$a_z = \frac{v^2}{r} = \omega^2 r = \omega\, v.$$
Dabei ist $\omega$ die Winkelgeschwindigkeit. Die Einheit ist $\text{m/s}^2$, denn $(\text{m/s})^2/\text{m} = \text{m/s}^2$.
:::

```plot
x: [-1.6, 1.6]
y: [-1.4, 1.4]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
vektoren:
  - { von: [0, 0], nach: [0.866, 0.5], label: "r", farbe: 3 }
  - { von: [0.866, 0.5], nach: [0.366, 1.366], label: "v", farbe: 0 }
  - { von: [0.866, 0.5], nach: [0.433, 0.25], label: "a_z", farbe: 1 }
  - { von: [-0.707, -0.707], nach: [-0.21, -1.2], label: "v", farbe: 0 }
  - { von: [-0.707, -0.707], nach: [-0.354, -0.354], label: "a_z", farbe: 1 }
beschriftung: "Gleichförmige Kreisbewegung gegen den Uhrzeigersinn. Die Geschwindigkeit v (blau) zeigt tangential, die Zentripetalbeschleunigung a_z (orange) zum Mittelpunkt. Beide stehen immer senkrecht aufeinander. Deshalb ändert die Beschleunigung nur die Richtung von v, nicht den Betrag."
```

**Das typische Missverständnis:** „Wenn sich der Tacho nicht bewegt, ist die Beschleunigung null.“ Das
stimmt nur für geradlinige Bewegungen. Der Tacho zeigt nur den Betrag der Geschwindigkeit, nicht ihre
Richtung. Für die Richtungsänderung hat das Auto keine Anzeige, aber du spürst sie im Körper.

:::beispiel[Ein Auto im Kreisverkehr]
Ein Auto fährt mit $36\,\text{km/h}$ durch einen Kreisverkehr mit Radius $20\,\text{m}$. Wie groß ist
seine Zentripetalbeschleunigung?

**Schritt 1, Einheiten:** $v = 36\,\text{km/h} : 3{,}6 = 10\,\text{m/s}$.

**Schritt 2, Formel:** $a_z = \dfrac{v^2}{r} = \dfrac{(10\,\text{m/s})^2}{20\,\text{m}} = \dfrac{100\,\text{m}^2/\text{s}^2}{20\,\text{m}} = 5{,}0\,\text{m/s}^2$.

**Schritt 3, Deutung:** Das ist etwa die Hälfte der Fallbeschleunigung $g = 9{,}81\,\text{m/s}^2$. Die
Beschleunigung zeigt in jedem Moment zur Mitte des Kreisverkehrs.
:::

:::beispiel[Eine Laborzentrifuge]
Eine Laborzentrifuge dreht Proben im Abstand $10\,\text{cm}$ von der Achse mit $6000\,\text{min}^{-1}$.
Wie groß ist die Zentripetalbeschleunigung, und das Wievielfache von $g$ ist das?

**Schritt 1, Winkelgeschwindigkeit:** $f = 6000/(60\,\text{s}) = 100\,\text{s}^{-1}$, also
$\omega = 2\pi\cdot 100\,\text{s}^{-1} = 628\,\text{s}^{-1}$.

**Schritt 2, Beschleunigung:** Hier ist $\omega$ bekannt, also nehmen wir $a_z = \omega^2 r$:
$a_z = (628\,\text{s}^{-1})^2\cdot 0{,}10\,\text{m} = 3{,}95\cdot 10^{4}\,\text{m/s}^2$.

**Schritt 3, Vergleich mit g:** $\dfrac{3{,}95\cdot 10^4\,\text{m/s}^2}{9{,}81\,\text{m/s}^2} = 4020$.
Man sagt, die Zentrifuge erzeugt rund $4000\,g$. Wie sie damit Blutbestandteile trennt, zeigt die Lektion
[Die Zentrifugalkraft: eine Scheinkraft](/lernen/physik1/kreisbewegung-gravitation/die-zentrifugalkraft-eine-scheinkraft).
:::

:::merke[So berechnest du die Zentripetalbeschleunigung]
1. Alle Größen in SI-Einheiten: $v$ in m/s, $r$ in m, Drehzahl in $\text{s}^{-1}$.
2. Ist $v$ gegeben, nimm $a_z = v^2/r$. Ist $\omega$ oder die Drehzahl gegeben, nimm $a_z = \omega^2 r$.
3. Die Richtung ist immer „zum Kreismittelpunkt“, egal wo der Körper gerade ist.
:::

:::intuition[Warum steht v im Quadrat?]
Doppelte Geschwindigkeit wirkt zweimal. Erstens kommt der Körper doppelt so schnell um die Kurve, die
Richtung ändert sich also doppelt so schnell. Zweitens ist der Pfeil, der gedreht werden muss, doppelt so
lang. Zusammen ergibt das den Faktor $2\cdot 2 = 4$. Deshalb sind schnelle Kurven so gefährlich:
$130\,\text{km/h}$ statt $90\,\text{km/h}$ verlangen $(130/90)^2 = 2{,}1$-mal so viel.
:::

```aufgabe
id: p6-2-check-formel
art: check
titel: "Kurz geprüft: die Formel anwenden"
niveau: 1
angabe: |
  Ein Spielzeugauto fährt mit $2{,}0\,\text{m/s}$ auf einer Kreisbahn mit Radius $4{,}0\,\text{m}$. Wie groß ist seine Zentripetalbeschleunigung (in $\text{m/s}^2$)?
teile:
  - typ: zahl
    loesung: "2.0^2/4.0"
    einheit: "m/s²"
    anzeige: '1{,}0'
    fehler:
      - wert: "2.0/4.0"
        meldung: Die Geschwindigkeit steht im Quadrat, $a_z = v^2/r$.
hinweise:
  - '$a_z = v^2/r$.'
loesung: |
  $a_z = \dfrac{v^2}{r} = \dfrac{(2{,}0\,\text{m/s})^2}{4{,}0\,\text{m}}$.
  ---
  $a_z = 1{,}0\,\text{m/s}^2$, zum Kreismittelpunkt gerichtet.
```

**Ungleichförmige Kreisbewegung.** Wird der Körper auf dem Kreis zusätzlich schneller oder langsamer,
etwa ein anfahrendes Karussell, hat die Beschleunigung zwei Anteile. Der **zentripetale** Anteil $v^2/r$
zeigt zur Mitte und ändert die Richtung. Der **tangentiale** Anteil $a_t = \Delta v/\Delta t$ zeigt entlang
der Bahn und ändert den Betrag. Beide stehen senkrecht aufeinander. In diesem Kapitel bleiben wir meist
bei $a_t = 0$. Beim Looping betrachten wir nur einzelne Punkte und holen uns $v$ aus dem Energiesatz.

:::achtung[Fehler: km/h in die Formel eingesetzt]
Ein Auto fährt mit $72\,\text{km/h}$ durch eine Kurve mit Radius $50\,\text{m}$.

Falsch gerechnet: $a_z = \dfrac{72^2}{50}\,\text{m/s}^2 = 104\,\text{m/s}^2$.

Das wären mehr als $10\,g$, kein Auto schafft das. In $v^2/r$ muss $v$ in m/s stehen:
$v = 72/3{,}6\,\text{m/s} = 20\,\text{m/s}$ und $a_z = \dfrac{(20\,\text{m/s})^2}{50\,\text{m}} = 8{,}0\,\text{m/s}^2$.
Der falsche Wert ist um den Faktor $3{,}6^2 = 13$ zu groß.
:::

:::achtung[Fehler: ω·r statt ω²·r]
Ein Karussellsitz dreht sich mit $\omega = 2{,}0\,\text{s}^{-1}$ im Abstand $3{,}0\,\text{m}$ von der Achse.

Falsch gerechnet: $a_z = \omega r = 2{,}0\,\text{s}^{-1}\cdot 3{,}0\,\text{m} = 6{,}0\,\text{m/s}^2$.

Die Einheit verrät den Fehler: $\text{s}^{-1}\cdot\text{m} = \text{m/s}$ ist eine Geschwindigkeit. Das
Produkt $\omega r$ ist die Bahngeschwindigkeit $v$. Richtig ist $a_z = \omega^2 r = (2{,}0\,\text{s}^{-1})^2\cdot 3{,}0\,\text{m} = 12\,\text{m/s}^2$.
:::

```reflexion
frage: Eine Kugel rollt mit konstantem Tempo in einer kreisförmigen Rinne. Erkläre in eigenen Worten, warum sie beschleunigt ist und warum diese Beschleunigung sie trotzdem nicht schneller macht.
antwort: |
  Beschleunigung ist jede Änderung des Geschwindigkeitsvektors. In der Rinne ändert sich ständig die Richtung der
  Bewegung, also ist die Kugel beschleunigt. Die Beschleunigung zeigt in jedem Moment zum Mittelpunkt und steht damit
  senkrecht auf der Geschwindigkeit. Ein Anteil der Beschleunigung, der senkrecht zur Bewegung steht, kann den
  Betrag der Geschwindigkeit nicht ändern, er dreht nur ihre Richtung. Deshalb bleibt das Tempo gleich.
```

### Aufgaben zur Zentripetalbeschleunigung

```aufgabe
id: p6-2-zug
titel: Ein Zug in der Kurve
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Zug fährt mit $108\,\text{km/h}$ durch eine Kurve mit Radius $500\,\text{m}$. Wie groß ist seine Zentripetalbeschleunigung (in $\text{m/s}^2$)?
teile:
  - typ: zahl
    loesung: "(108/3.6)^2/500"
    einheit: "m/s²"
    anzeige: '1{,}8'
    fehler:
      - wert: "108^2/500"
        meldung: Die Geschwindigkeit muss in m/s stehen. $108\,\text{km/h} = 30\,\text{m/s}$.
      - wert: "(108/3.6)/500"
        meldung: Du hast $v/r$ gerechnet. In der Formel steht $v^2/r$, die Geschwindigkeit im Quadrat.
hinweise:
  - 'Erst $v$ in m/s umrechnen, dann $a_z = v^2/r$.'
loesung: |
  **Umrechnen:** $v = 108\,\text{km/h} : 3{,}6 = 30\,\text{m/s}$.
  ---
  **Einsetzen:** $a_z = \dfrac{v^2}{r} = \dfrac{(30\,\text{m/s})^2}{500\,\text{m}} = \dfrac{900\,\text{m}^2/\text{s}^2}{500\,\text{m}} = 1{,}8\,\text{m/s}^2$. Das ist knapp ein Fünftel von $g$, im Zug gut spürbar.
```

```aufgabe
id: p6-2-richtung
titel: Wohin zeigt die Beschleunigung?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Kind sitzt auf einem gleichmäßig drehenden Karussell. Gerade befindet es sich genau nördlich der Achse und bewegt sich nach Osten. Wohin zeigt seine Beschleunigung in diesem Moment?
teile:
  - typ: auswahl
    optionen:
      - "nach Osten, in Bewegungsrichtung"
      - "nach Süden, zur Achse"
      - "nach Norden, von der Achse weg"
      - "nirgendwohin, die Beschleunigung ist null"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: In Bewegungsrichtung zeigt eine Beschleunigung nur, wenn der Körper schneller wird. Hier bleibt das Tempo gleich, nur die Richtung ändert sich.
      - wert: 2
        meldung: Nach außen „fühlt“ es sich an, das ist aber die Trägheit des Kindes. Die Beschleunigung zeigt zum Mittelpunkt des Kreises, also zur Achse.
      - wert: 3
        meldung: Das Tempo ist konstant, die Richtung aber nicht. Jede Richtungsänderung ist eine Beschleunigung.
hinweise:
  - Bei der gleichförmigen Kreisbewegung zeigt die Beschleunigung immer zum Kreismittelpunkt.
loesung: |
  Die Bewegung ist eine gleichförmige Kreisbewegung um die Achse. Ihre Beschleunigung ist die Zentripetalbeschleunigung.
  ---
  Sie zeigt zum Kreismittelpunkt. Das Kind ist nördlich der Achse, also zeigt die Beschleunigung nach Süden.
```

```aufgabe
id: p6-2-diagramm
titel: Den Radius aus einem Diagramm ablesen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Bei Testfahrten durch dieselbe Kurve wurde die Zentripetalbeschleunigung für verschiedene Geschwindigkeiten gemessen. Das Diagramm zeigt die Messkurve. Lies einen Punkt ab und bestimme daraus den Kurvenradius (in m).
plot:
  x: [0, 16]
  y: [0, 10]
  achsen: { x: "v in m/s", y: "a_z in m/s²" }
  graphen:
    - { f: "x^2/25", von: 0, bis: 15.8, farbe: 0 }
  punkte:
    - { x: 10, y: 4, label: "(10 | 4)" }
  strecken:
    - { von: [10, 0], nach: [10, 4], gestrichelt: true }
    - { von: [0, 4], nach: [10, 4], gestrichelt: true }
teile:
  - typ: zahl
    loesung: "10^2/4"
    einheit: "m"
    anzeige: '25'
    fehler:
      - wert: "10/4"
        meldung: Du hast $v/a$ gerechnet. Aus $a = v^2/r$ folgt aber $r = v^2/a$, die Geschwindigkeit im Quadrat.
      - wert: "4/10"
        meldung: Du hast $a/v$ gerechnet. Stelle $a = v^2/r$ nach $r$ um.
hinweise:
  - 'Lies den markierten Punkt ab und stelle $a_z = v^2/r$ nach $r$ um.'
loesung: |
  **Ablesen:** Bei $v = 10\,\text{m/s}$ ist $a_z = 4\,\text{m/s}^2$. Die Kurve ist eine Parabel, denn $a_z$ wächst mit $v^2$.
  ---
  **Umstellen:** $r = \dfrac{v^2}{a_z} = \dfrac{(10\,\text{m/s})^2}{4\,\text{m/s}^2} = 25\,\text{m}$.
  ---
  **Probe an einem zweiten Punkt:** Bei $v = 15\,\text{m/s}$ müsste $a_z = 225/25\,\text{m/s}^2 = 9\,\text{m/s}^2$ sein. Das zeigt auch der Graph. ✓
```

```aufgabe
id: p6-schleuder
titel: Wäscheschleuder
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Die Trommel einer Waschmaschine (Radius $25\,\text{cm}$) schleudert mit $1200$ Umdrehungen pro Minute. Wie groß ist die Zentripetalbeschleunigung an der Trommelwand (in $\text{m/s}^2$, drei signifikante Stellen), und das Wievielfache von $g$ ist das?
teile:
  - typ: zahl
    label: Beschleunigung
    loesung: "(2*pi*1200/60)^2*0.25"
    einheit: "m/s²"
    anzeige: '3948 \approx 3{,}95\cdot 10^{3}'
    fehler:
      - wert: "(2*pi*1200/60)*0.25"
        meldung: Das ist $\omega r$, also die Bahngeschwindigkeit in m/s. Für die Beschleunigung brauchst du $\omega^2 r$.
      - wert: "(2*pi*1200)^2*0.25"
        meldung: Die Drehzahl ist pro Minute angegeben. Teile sie zuerst durch $60$.
  - typ: zahl
    label: Vielfaches von g
    loesung: "(2*pi*1200/60)^2*0.25/9.81"
    anzeige: '402'
    fehler:
      - wert: "(2*pi*1200/60)^2*0.25*9.81"
        meldung: Für „das Wievielfache von g“ teilst du durch $g$.
hinweise:
  - '$f = 1200/60\,\text{s}^{-1}$ und $\omega = 2\pi f$.'
  - '$a_z = \omega^2 r$ mit $r = 0{,}25\,\text{m}$, danach durch $9{,}81\,\text{m/s}^2$ teilen.'
loesung: |
  **Winkelgeschwindigkeit:** $f = 20\,\text{s}^{-1}$, $\omega = 2\pi\cdot 20\,\text{s}^{-1} = 125{,}7\,\text{s}^{-1}$.
  ---
  **Beschleunigung:** $a_z = \omega^2 r = (125{,}7\,\text{s}^{-1})^2\cdot 0{,}25\,\text{m} = 3948\,\text{m/s}^2$.
  ---
  **Vergleich:** $3948\,\text{m/s}^2 : 9{,}81\,\text{m/s}^2 = 402$. Die Trommelwand muss jedes Wassertröpfchen mit dem $400$-Fachen seiner Gewichtskraft auf die Kreisbahn zwingen. Das Wasser an den Löchern wird nicht gehalten und fliegt tangential hinaus.
```

```aufgabe
id: p6-2-proportional
titel: Doppelt so schnell, halber Radius
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Auto fährt durch eine Kurve. Gib jeweils an, um welchen Faktor sich die Zentripetalbeschleunigung ändert.

  a) Das Auto fährt doppelt so schnell durch **dieselbe** Kurve.

  b) Das Auto fährt mit **derselben** Geschwindigkeit durch eine Kurve mit halbem Radius.
teile:
  - typ: zahl
    label: a) Faktor
    loesung: "2^2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: Die Geschwindigkeit steht im Quadrat. Doppelte Geschwindigkeit ergibt $2^2 = 4$-fache Beschleunigung.
      - wert: "0.5"
        meldung: Schneller durch dieselbe Kurve heißt mehr Beschleunigung, nicht weniger. $v$ steht im Zähler.
  - typ: zahl
    label: b) Faktor
    loesung: "2"
    anzeige: '2'
    fehler:
      - wert: "0.5"
        meldung: Der Radius steht im **Nenner**. Halber Radius heißt doppelte Beschleunigung.
      - wert: "4"
        meldung: Der Radius steht nicht im Quadrat. Halber Radius ergibt nur den Faktor $2$.
hinweise:
  - '$a_z = v^2/r$: $v$ steht im Quadrat im Zähler, $r$ einfach im Nenner.'
  - 'Setze die doppelte Geschwindigkeit $2v$ oder den halben Radius $r/2$ ein und vergleiche mit dem ursprünglichen Wert.'
loesung: |
  **Ansatz:** Proportionalitätsschluss aus $a_z = v^2/r$. Man setzt die geänderte Größe ein und teilt durch den alten Wert.
  ---
  **a)** $a' = \dfrac{(2v)^2}{r} = 4\cdot\dfrac{v^2}{r}$, also Faktor $4$.
  ---
  **b)** $a' = \dfrac{v^2}{r/2} = 2\cdot\dfrac{v^2}{r}$, also Faktor $2$. Enge Kurven und hohe Geschwindigkeit verlangen beide mehr, die Geschwindigkeit aber viel stärker.
```

```aufgabe
id: p6-2-testfahrt
titel: Wie schnell durch die Kurve?
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Testfahrer erreicht in einer Kurve mit Radius $40\,\text{m}$ eine Zentripetalbeschleunigung von $9{,}0\,\text{m/s}^2$. Wie schnell fährt er (in km/h, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "sqrt(9*40)*3.6"
    einheit: "km/h"
    anzeige: '68{,}3'
    fehler:
      - wert: "sqrt(9*40)"
        meldung: Das ist die Geschwindigkeit in m/s. Gefragt ist km/h, also mal $3{,}6$.
      - wert: "9*40*3.6"
        meldung: $a\cdot r$ ist $v^2$. Du musst noch die Wurzel ziehen.
hinweise:
  - 'Stelle $a_z = v^2/r$ nach $v$ um: $v^2 = a_z r$.'
  - 'Wurzel ziehen, dann von m/s in km/h umrechnen (mal $3{,}6$).'
gefuehrt:
  - text: Stelle die Formel $a_z = v^2/r$ nach $v^2$ um. Was ergibt $v^2$ in $\text{m}^2/\text{s}^2$?
    teil: { typ: zahl, loesung: "9*40" }
    erklaerung: 'Mit $r$ multiplizieren: $v^2 = a_z r = 9{,}0\,\text{m/s}^2\cdot 40\,\text{m} = 360\,\text{m}^2/\text{s}^2$.'
  - text: Wie groß ist $v$ in m/s?
    teil: { typ: zahl, loesung: "sqrt(360)", einheit: "m/s" }
    erklaerung: '$v = \sqrt{360}\,\text{m/s} = 19{,}0\,\text{m/s}$.'
  - text: Rechne in km/h um.
    teil: { typ: zahl, loesung: "sqrt(360)*3.6", einheit: "km/h" }
    erklaerung: '$19{,}0\,\text{m/s}\cdot 3{,}6 = 68{,}3\,\text{km/h}$.'
  - text: Überlege, ob das Ergebnis plausibel ist. Wie viel g sind $9{,}0\,\text{m/s}^2$?
    erklaerung: Fast $1\,g$. Das schaffen nur sehr gute Reifen auf trockener Straße. Für eine enge Kurve mit $40\,\text{m}$ Radius sind knapp $70\,\text{km/h}$ also schon sehr schnell.
loesung: |
  **Ansatz:** Umkehraufgabe. Die Beschleunigung ist gegeben, gesucht ist $v$. Aus $a_z = v^2/r$ folgt $v = \sqrt{a_z r}$.
  ---
  **Einsetzen:** $v = \sqrt{9{,}0\,\text{m/s}^2\cdot 40\,\text{m}} = \sqrt{360\,\text{m}^2/\text{s}^2} = 19{,}0\,\text{m/s}$.
  ---
  **Umrechnen:** $19{,}0\,\text{m/s}\cdot 3{,}6 = 68{,}3\,\text{km/h}$. Probe: $(19{,}0\,\text{m/s})^2/40\,\text{m} = 9{,}0\,\text{m/s}^2$. ✓
```

```aufgabe
id: p6-2-fehler-finden
titel: Wo steckt der Denkfehler?
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Ein Mitschüler schreibt: „Ein Satellit läuft mit konstant $7{,}7\,\text{km/s}$ auf einer Kreisbahn. Seine Geschwindigkeit ändert sich nicht, also ist seine Beschleunigung null. Deshalb wirkt auch keine resultierende Kraft auf ihn.“

  Finde den Fehler und stelle die Aussage richtig.
teile:
  - typ: text
    muster: |
      Der Fehler steckt im ersten Schluss. Konstant ist nur der **Betrag** der Geschwindigkeit, ihre Richtung ändert sich
      ständig. Die Geschwindigkeit ist ein Vektor, also ändert sie sich doch. Der Satellit hat die Zentripetalbeschleunigung
      $v^2/r$ zum Erdmittelpunkt. Nach dem Grundgesetz braucht er dafür eine resultierende Kraft zum Erdmittelpunkt, und die
      liefert die Gravitation der Erde.
hinweise:
  - Ist die Geschwindigkeit ein Skalar oder ein Vektor?
  - Was sagt das Grundgesetz $\vec F = m\vec a$, wenn $\vec a$ nicht null ist?
loesung: |
  **Fehler:** „Konstant $7{,}7\,\text{km/s}$“ beschreibt nur den Betrag. Die Richtung dreht sich auf der Kreisbahn ständig.
  ---
  **Richtig:** Weil sich der Geschwindigkeitsvektor ändert, ist der Satellit beschleunigt, und zwar mit $a_z = v^2/r$ zum Erdmittelpunkt.
  ---
  **Folgerung:** Nach dem Grundgesetz wirkt eine resultierende Kraft zum Erdmittelpunkt. Sie heißt Zentripetalkraft und wird hier von der Gravitation geliefert.
```

```aufgabe
id: p6-2-astronautenzentrifuge
titel: Training in der Astronautenzentrifuge
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Astronauten trainieren in einer Zentrifuge die hohen Beschleunigungen beim Raketenstart. Die Kabine läuft auf einem Kreis mit Radius $8{,}0\,\text{m}$. Die Zentripetalbeschleunigung soll $6\,g$ betragen ($g = 9{,}81\,\text{m/s}^2$). Runde auf drei signifikante Stellen.

  a) Welche Winkelgeschwindigkeit ist nötig (in $\text{s}^{-1}$)?

  b) Wie viele Umdrehungen pro Minute sind das?

  c) Wie schnell ist die Kabine (in m/s)?
teile:
  - typ: zahl
    label: a) Winkelgeschwindigkeit
    loesung: "sqrt(6*9.81/8)"
    einheit: "1/s"
    anzeige: '2{,}71'
    fehler:
      - wert: "6*9.81/8"
        meldung: Das ist $\omega^2$. Zieh noch die Wurzel.
      - wert: "sqrt(6/8)"
        meldung: $6\,g$ heißt $6\cdot 9{,}81\,\text{m/s}^2$. Du hast die Fallbeschleunigung vergessen.
  - typ: zahl
    label: b) Umdrehungen pro Minute
    loesung: "sqrt(6*9.81/8)/(2*pi)*60"
    einheit: "1/min"
    anzeige: '25{,}9'
    fehler:
      - wert: "sqrt(6*9.81/8)*60"
        meldung: Umdrehungen zählt die Frequenz $f = \omega/(2\pi)$. Teile $\omega$ zuerst durch $2\pi$.
  - typ: zahl
    label: c) Bahngeschwindigkeit
    loesung: "sqrt(6*9.81/8)*8"
    einheit: "m/s"
    anzeige: '21{,}7'
hinweise:
  - 'Die geforderte Beschleunigung ist $a_z = 6\cdot 9{,}81\,\text{m/s}^2 = 58{,}9\,\text{m/s}^2$.'
  - 'Aus $a_z = \omega^2 r$ folgt $\omega = \sqrt{a_z/r}$. Dann $f = \omega/(2\pi)$ und $v = \omega r$.'
loesung: |
  **Modell:** Die Kabine läuft gleichförmig auf einem Kreis. Gegeben sind die gewünschte Zentripetalbeschleunigung und der Radius, gesucht ist die Drehung. Wir nehmen $a_z = \omega^2 r$.
  ---
  **a)** $a_z = 6\cdot 9{,}81\,\text{m/s}^2 = 58{,}9\,\text{m/s}^2$. $\omega = \sqrt{\dfrac{58{,}9\,\text{m/s}^2}{8{,}0\,\text{m}}} = \sqrt{7{,}36\,\text{s}^{-2}} = 2{,}71\,\text{s}^{-1}$.
  ---
  **b)** $f = \dfrac{\omega}{2\pi} = \dfrac{2{,}71\,\text{s}^{-1}}{2\pi} = 0{,}432\,\text{s}^{-1}$, also $0{,}432\cdot 60 = 25{,}9$ Umdrehungen pro Minute.
  ---
  **c)** $v = \omega r = 2{,}71\,\text{s}^{-1}\cdot 8{,}0\,\text{m} = 21{,}7\,\text{m/s}$, das sind $78\,\text{km/h}$. **Probe:** $v^2/r = (21{,}7\,\text{m/s})^2/8{,}0\,\text{m} = 58{,}9\,\text{m/s}^2 = 6\,g$. ✓
```

## Die Zentripetalkraft

```aufgabe
id: p6-3-check
art: check
titel: "Vorwissen: die resultierende Kraft"
niveau: 1
angabe: |
  Auf eine Kiste wirken waagrecht zwei Kräfte: $50\,\text{N}$ nach rechts und $20\,\text{N}$ nach links. Wie groß ist die resultierende Kraft (Betrag in N)?
teile:
  - typ: zahl
    loesung: "50-20"
    einheit: "N"
    anzeige: '30'
    fehler:
      - wert: "50+20"
        meldung: Die Kräfte zeigen in entgegengesetzte Richtungen. Sie heben sich teilweise auf, du musst sie also abziehen.
hinweise:
  - Lege eine Richtung als positiv fest. Kräfte in Gegenrichtung zählen negativ.
loesung: |
  Rechts zählt positiv: $F_{\text{res}} = +50\,\text{N} - 20\,\text{N} = +30\,\text{N}$.
  ---
  Die resultierende Kraft ist $30\,\text{N}$ nach rechts. Nur sie bestimmt die Beschleunigung. Wiederholen: [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
```

In der Lektion [Die Zentripetalbeschleunigung](/lernen/physik1/kreisbewegung-gravitation/die-zentripetalbeschleunigung)
haben wir gesehen: Ein Körper auf einer Kreisbahn ist ständig zum Mittelpunkt hin beschleunigt. Das
Grundgesetz $\vec F_{\text{res}} = m\,\vec a$ sagt dann sofort: Es muss auch eine resultierende Kraft zum
Mittelpunkt wirken. Ohne sie gäbe es keine Beschleunigung, und der Körper würde nach dem Trägheitssatz
geradeaus weiterfliegen.

:::satz[Zentripetalkraft]
Damit sich ein Körper der Masse $m$ mit der Bahngeschwindigkeit $v$ gleichförmig auf einem Kreis mit
Radius $r$ bewegt, muss auf ihn eine **resultierende Kraft zum Kreismittelpunkt** wirken. Ihr Betrag ist
$$F_z = m\,a_z = \frac{m\,v^2}{r} = m\,\omega^2 r.$$
Diese Kraft heißt **Zentripetalkraft**. Ihre Einheit ist das Newton: $\text{kg}\cdot(\text{m/s})^2/\text{m} = \text{kg}\cdot\text{m/s}^2 = \text{N}$.
:::

### Die Zentripetalkraft ist keine neue Kraft

Diese Stelle ist für fast alle ungewohnt. Lies sie langsam.

**Worum geht es in einem Satz?** „Zentripetalkraft“ ist kein neuer Kraftart-Name wie Gewichtskraft oder
Reibung, sondern der Name für eine **Aufgabe**, die eine echte Kraft übernimmt.

**Bild:** Denk an eine Fußballmannschaft. „Torwart“ ist keine eigene Person, die zusätzlich auf dem Feld
steht. Es ist eine Rolle, die einer der elf Spieler übernimmt. Genauso ist „Zentripetalkraft“ eine Rolle.
Am Seil übernimmt sie die Seilkraft, beim Mond die Gravitation, in der Kurve die Haftreibung.

**In Schritten:**

1. Du zeichnest im Freikörperbild nur die **echten** Kräfte. Bei jeder fragst du: Welcher Körper übt sie
   aus? (Siehe [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).)
2. Du suchst den Kreismittelpunkt und zerlegst die Kräfte in Anteile zum Mittelpunkt und quer dazu.
3. Du verlangst: Die Summe der Anteile zum Mittelpunkt ist genau $m v^2/r$.

**In Worten zurückübersetzt:** Die Formel $m v^2/r$ sagt, **wie viel** Kraft zur Mitte nötig ist. Welche
Kraft das liefert, musst du in jeder Aufgabe selbst herausfinden.

**Das typische Missverständnis:** Viele zeichnen eine zusätzliche „Zentripetalkraft“ ins Freikörperbild,
neben Seilkraft und Gewicht. Dann ist dieselbe Kraft doppelt gezählt.

```plot
x: [-1.5, 1.9]
y: [-1.3, 1.6]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
vektoren:
  - { von: [1, 0], nach: [0.35, 0], label: "F_S (Seilkraft)", farbe: 1 }
  - { von: [1, 0], nach: [1, 0.8], label: "v", farbe: 0 }
strecken:
  - { von: [1, 0], nach: [1, 1.5], gestrichelt: true, farbe: 2 }
  - { von: [0, 0], nach: [1, 0], gestrichelt: true }
punkte:
  - { x: 1, y: 0, label: "Stein" }
  - { x: 0, y: 0, label: "Hand" }
  - { x: 1.0, y: 1.5, label: "Bahn, wenn die Schnur reißt" }
beschriftung: "Freikörperbild eines Steins an einer Schnur, von oben gesehen (Gewicht vernachlässigt). Die einzige Kraft ist die Seilkraft F_S (orange), sie zeigt zur Hand im Mittelpunkt und spielt die Rolle der Zentripetalkraft. Der blaue Pfeil ist keine Kraft, sondern die Geschwindigkeit. Reißt die Schnur, fliegt der Stein tangential weiter (grün gestrichelt), nicht nach außen."
```

Wer liefert die Zentripetalkraft? Hier sind typische Fälle, jeweils mit der echten Kraft, die die Rolle übernimmt.

- **Stein an der Schnur:** die Seilkraft.
- **Auto in der flachen Kurve:** die Haftreibung zwischen Reifen und Straße.
- **Mond um die Erde, Satellit:** die Gravitationskraft.
- **Zug in der Kurve:** die Normalkraft der Schiene auf den Spurkranz.
- **Überhöhte Kurve, Radrennbahn:** der waagrechte Anteil der Normalkraft.
- **Kettenkarussell:** die Summe aus Kettenkraft und Gewichtskraft.
- **Elektron im Magnetfeld:** die Lorentzkraft (Lektion [Geladene Teilchen im Magnetfeld: Lorentzkraft und Kreisbahn](/lernen/physik1/magnetismus-wechselstrom/geladene-teilchen-im-magnetfeld-lorentzkraft-und-kreisbahn)).

Fällt die Zentripetalkraft plötzlich weg, weil die Schnur reißt oder die Straße vereist ist, wirkt keine
Kraft mehr zur Mitte. Nach dem Trägheitssatz bewegt sich der Körper dann **geradlinig in Richtung seiner
momentanen Geschwindigkeit** weiter, also tangential. Er fliegt **nicht** radial nach außen. Die Funken
einer Schleifscheibe zeigen das schön: Sie fliegen tangential davon.

:::beispiel[Ein Kind hält sich am Karussell fest]
Ein Kind ($30\,\text{kg}$) steht auf einer Drehscheibe im Abstand $2{,}0\,\text{m}$ von der Achse und
hält sich an einer Stange fest. Die Scheibe dreht sich in $4{,}0\,\text{s}$ einmal. Wie stark muss das
Kind ziehen? Reibung an den Schuhen vernachlässigen wir.

**Schritt 1, echte Kräfte:** Gewichtskraft nach unten, Normalkraft der Scheibe nach oben (beide heben sich
auf) und die Kraft der Stange auf das Kind. Nur diese zeigt waagrecht, also muss sie zur Achse zeigen.

**Schritt 2, Winkelgeschwindigkeit:** $\omega = 2\pi/T = 2\pi/4{,}0\,\text{s} = 1{,}57\,\text{s}^{-1}$.

**Schritt 3, nötige Kraft:** $F_z = m\omega^2 r = 30\,\text{kg}\cdot(1{,}57\,\text{s}^{-1})^2\cdot 2{,}0\,\text{m} = 148\,\text{N}$.

**Deutung:** Das Kind zieht mit seinen Händen an der Stange. Nach dem dritten Axiom zieht die Stange mit
$148\,\text{N}$ am Kind, zur Achse hin. Diese Kraft übernimmt die Rolle der Zentripetalkraft.
:::

:::beispiel[Der Hammerwurf]
Ein Hammerwerfer dreht einen Hammer ($7{,}26\,\text{kg}$) kurz vor dem Abwurf auf einem Kreis mit Radius
$2{,}0\,\text{m}$ mit $25\,\text{m/s}$. Mit welcher Kraft muss er am Draht ziehen? Das Gewicht des Hammers
vernachlässigen wir, denn es ist viel kleiner.

**Schritt 1, Rolle:** Der Draht zieht den Hammer zur Mitte. Die Drahtkraft ist die Zentripetalkraft.

**Schritt 2, Rechnung:** $F_z = \dfrac{m v^2}{r} = \dfrac{7{,}26\,\text{kg}\cdot(25\,\text{m/s})^2}{2{,}0\,\text{m}} = 2270\,\text{N}$.

**Schritt 3, Plausibilität:** Das ist mehr als das Dreifache der Gewichtskraft eines $70$-kg-Sportlers
($687\,\text{N}$). Darum lehnen sich Hammerwerfer beim Drehen weit nach hinten. Das Gewicht des Hammers
($71\,\text{N}$) ist dagegen tatsächlich klein.
:::

:::merke[So gehst du bei jeder Kreisbewegung vor]
1. Freikörperbild mit den **echten** Kräften. Bei jeder Kraft: Wer übt sie aus?
2. Kreismittelpunkt suchen, die Richtung „zum Mittelpunkt“ als positiv festlegen.
3. Ansatz: Summe der Kraftanteile zum Mittelpunkt $= m v^2/r$. Quer dazu, falls nötig: Summe $= 0$.
4. Auflösen und prüfen, ob die verlangte Kraft überhaupt aufgebracht werden kann.
:::

:::achtung[Fehler: die Zentripetalkraft als zusätzliche Kraft eingezeichnet]
Ein Stein ($0{,}50\,\text{kg}$) wird an einer $1{,}0\,\text{m}$ langen Schnur auf einem **senkrechten**
Kreis geschleudert. Im tiefsten Punkt ist er $4{,}0\,\text{m/s}$ schnell. Wie groß ist die Seilkraft?

Falsch gerechnet: „Seilkraft und Zentripetalkraft nach oben, Gewicht nach unten, alles im Gleichgewicht:
$F_S + \dfrac{m v^2}{r} = m g$, also $F_S = 4{,}9\,\text{N} - 8{,}0\,\text{N} = -3{,}1\,\text{N}$.“

Eine negative Seilkraft ist unmöglich, eine Schnur kann nur ziehen. Der Fehler: Die Zentripetalkraft wurde
als eigene Kraft eingezeichnet, und der Stein wurde als „im Gleichgewicht“ behandelt. Er ist aber zur Mitte
hin beschleunigt. Richtig: Die echten Kräfte sind Seilkraft (nach oben, zur Mitte) und Gewicht (nach unten).
Ihre Summe zur Mitte ist $m v^2/r$:
$F_S - m g = \dfrac{m v^2}{r}$, also $F_S = 4{,}9\,\text{N} + 8{,}0\,\text{N} = 12{,}9\,\text{N}$.
:::

:::achtung[Fehler: den Durchmesser statt des Radius eingesetzt]
Eine Drehscheibe hat $6{,}0\,\text{m}$ Durchmesser. Ein Kind ($40\,\text{kg}$) läuft am Rand mit $3{,}0\,\text{m/s}$ mit.

Falsch gerechnet: $F_z = \dfrac{40\,\text{kg}\cdot(3{,}0\,\text{m/s})^2}{6{,}0\,\text{m}} = 60\,\text{N}$.

Im Nenner steht der **Radius**, der Abstand vom Mittelpunkt. Richtig ist $r = 3{,}0\,\text{m}$ und
$F_z = \dfrac{40\,\text{kg}\cdot 9{,}0\,\text{m}^2/\text{s}^2}{3{,}0\,\text{m}} = 120\,\text{N}$. Der falsche Wert ist genau halb so groß.
:::

```reflexion
frage: Erkläre einer Freundin, warum man im Freikörperbild eines Steins an der Schnur keine eigene „Zentripetalkraft“ einzeichnet. Verwende das Wort „Rolle“.
antwort: |
  Ins Freikörperbild gehören nur Kräfte, die ein anderer Körper ausübt. Auf den Stein wirken die Gewichtskraft (von der
  Erde) und die Seilkraft (von der Schnur). „Zentripetalkraft“ ist kein dritter Körper und keine dritte Kraft, sondern die
  Rolle, die hier die Seilkraft spielt: Sie zieht den Stein zur Mitte und hält ihn auf der Kreisbahn. Würde ich zusätzlich
  eine Zentripetalkraft zeichnen, hätte ich die Seilkraft doppelt gezählt. Die Formel $m v^2/r$ sagt nur, wie groß die
  Summe der echten Kräfte zur Mitte sein muss.
```

### Aufgaben zur Zentripetalkraft

```aufgabe
id: p6-zentripetal-auto
titel: Auto in der Kurve
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Auto ($1200\,\text{kg}$) fährt mit $54\,\text{km/h}$ durch eine flache Kurve mit Radius $45\,\text{m}$. Wie groß ist die nötige Zentripetalkraft (in N), und welche echte Kraft liefert sie?
teile:
  - typ: zahl
    loesung: "1200*(54/3.6)^2/45"
    einheit: "N"
    anzeige: '6000'
    fehler:
      - wert: "1200*54^2/45"
        meldung: Die Geschwindigkeit muss in m/s stehen. $54\,\text{km/h} = 15\,\text{m/s}$.
      - wert: "1200*(54/3.6)/45"
        meldung: In der Formel steht $v^2$. Du hast die Geschwindigkeit nicht quadriert.
hinweise:
  - '$v$ in m/s umrechnen, dann $F_z = m v^2/r$.'
loesung: |
  **Umrechnen:** $v = 54\,\text{km/h} : 3{,}6 = 15\,\text{m/s}$.
  ---
  **Kraft:** $F_z = \dfrac{m v^2}{r} = \dfrac{1200\,\text{kg}\cdot(15\,\text{m/s})^2}{45\,\text{m}} = \dfrac{270\,000\,\text{kg}\cdot\text{m}^2/\text{s}^2}{45\,\text{m}} = 6000\,\text{N}$.
  ---
  **Wer liefert sie?** In der flachen Kurve zeigt nur die Haftreibung zwischen Reifen und Straße waagrecht. Sie übernimmt die Rolle der Zentripetalkraft.
```

```aufgabe
id: p6-stein-schnur
titel: Stein an der Schnur
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Stein ($200\,\text{g}$) wird an einer $80\,\text{cm}$ langen Schnur auf einem waagrechten Kreis mit $4{,}0\,\text{m/s}$ herumgeschleudert. Das Gewicht vernachlässigen wir. Wie groß ist die Kraft in der Schnur (in N)?
teile:
  - typ: zahl
    loesung: "0.200*4.0^2/0.80"
    einheit: "N"
    anzeige: '4{,}0'
    fehler:
      - wert: "200*4.0^2/80"
        meldung: Masse und Länge müssen in SI-Einheiten stehen, $200\,\text{g} = 0{,}200\,\text{kg}$ und $80\,\text{cm} = 0{,}80\,\text{m}$.
      - wert: "0.200*4.0/0.80"
        meldung: Die Geschwindigkeit steht im Quadrat.
hinweise:
  - Die Schnurkraft ist die einzige Kraft zur Mitte. Sie übernimmt die Rolle der Zentripetalkraft.
loesung: |
  **Ansatz:** Ohne Gewicht wirkt nur die Schnurkraft, und sie zeigt zur Hand. Also ist sie die Zentripetalkraft.
  ---
  $F = \dfrac{m v^2}{r} = \dfrac{0{,}200\,\text{kg}\cdot(4{,}0\,\text{m/s})^2}{0{,}80\,\text{m}} = 4{,}0\,\text{N}$. Bei doppelter Geschwindigkeit wäre sie viermal so groß.
```

```aufgabe
id: p6-3-mond-rolle
titel: Was hält den Mond auf seiner Bahn?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Der Mond läuft fast auf einem Kreis um die Erde. Welche Kraft übernimmt dabei die Rolle der Zentripetalkraft?
teile:
  - typ: auswahl
    optionen:
      - "die Gravitationskraft der Erde auf den Mond"
      - "die Zentrifugalkraft"
      - "keine, der Mond bewegt sich von selbst im Kreis"
      - "eine Kraft in Bewegungsrichtung, die den Mond antreibt"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Zentrifugalkraft zeigt nach **außen** und ist eine Scheinkraft. Für die Kreisbahn braucht der Mond eine echte Kraft nach **innen**.
      - wert: 2
        meldung: Von selbst bewegt sich ein Körper nach dem Trägheitssatz geradeaus. Für jede Kurve braucht er eine Kraft.
      - wert: 3
        meldung: In Bewegungsrichtung braucht der Mond keine Kraft, er ist träge. Nötig ist eine Kraft **zur Mitte**, die seine Bahn biegt.
hinweise:
  - Welche echte Kraft zeigt vom Mond zur Erde, also zum Kreismittelpunkt?
loesung: |
  Für eine Kreisbahn braucht der Mond eine resultierende Kraft zum Mittelpunkt, also zur Erde.
  ---
  Die einzige echte Kraft, die das leistet, ist die Gravitationskraft der Erde. Sie übernimmt die Rolle der Zentripetalkraft. Mehr dazu in der Lektion [Das Gravitationsgesetz](/lernen/physik1/kreisbewegung-gravitation/das-gravitationsgesetz).
```

```aufgabe
id: p6-3-schnur-reisst
titel: Die Schnur reißt
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Stein wird von oben gesehen gegen den Uhrzeigersinn an einer Schnur im Kreis geschleudert. Genau in dem Moment, in dem er sich östlich der Hand befindet und sich nach Norden bewegt, reißt die Schnur. Wie bewegt sich der Stein danach (von oben gesehen, ohne Luftwiderstand)?
teile:
  - typ: auswahl
    optionen:
      - "geradlinig nach Norden, also tangential weiter"
      - "geradlinig nach Osten, also radial nach außen"
      - "auf einem Kreisbogen weiter, der langsam größer wird"
      - "schräg nach Nordosten, zwischen tangential und radial"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Radial nach außen würde eine Kraft nach außen verlangen. Nach dem Reißen wirkt waagrecht aber gar keine Kraft mehr.
      - wert: 2
        meldung: Für jede gekrümmte Bahn braucht man eine Kraft zur Seite. Ohne Schnur gibt es keine solche Kraft, also wird die Bahn gerade.
      - wert: 3
        meldung: Eine Abweichung nach außen bräuchte eine Kraft nach außen. Es gibt keine. Der Stein behält einfach seine letzte Geschwindigkeit.
hinweise:
  - Welche waagrechte Kraft wirkt nach dem Reißen noch auf den Stein?
  - Ohne Kraft gilt der Trägheitssatz. In welche Richtung zeigte die Geschwindigkeit im Moment des Reißens?
loesung: |
  **Ansatz:** Nach dem Reißen wirkt waagrecht keine Kraft mehr. Nach dem Trägheitssatz bewegt sich der Stein geradlinig gleichförmig weiter.
  ---
  **Richtung:** Er behält die Geschwindigkeit, die er im Moment des Reißens hatte. Sie zeigte tangential, also nach Norden.
  ---
  **Deutung:** Das Gefühl „nach außen gezogen“ ist die Trägheit. Weil sich der Kreis unter dem geradeaus fliegenden Stein wegkrümmt, entfernt er sich zwar von der Hand, aber auf einer geraden Linie nach Norden.
```

```aufgabe
id: p6-3-reissfestigkeit
titel: Wie schnell darf der Stein sein?
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Schnur reißt bei einer Kraft von $50\,\text{N}$. An ihr wird ein Stein ($0{,}40\,\text{kg}$) auf einem waagrechten Kreis mit Radius $0{,}60\,\text{m}$ geschleudert, das Gewicht vernachlässigen wir. Wie schnell darf der Stein höchstens sein (in m/s, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "sqrt(50*0.60/0.40)"
    einheit: "m/s"
    anzeige: '8{,}66'
    fehler:
      - wert: "50*0.60/0.40"
        meldung: Das ist $v^2$ in $\text{m}^2/\text{s}^2$. Zieh noch die Wurzel.
      - wert: "sqrt(50*0.40/0.60)"
        meldung: Masse und Radius sind vertauscht. Aus $F = m v^2/r$ folgt $v^2 = F r/m$.
hinweise:
  - 'Die Schnurkraft ist die Zentripetalkraft. Im Grenzfall ist sie genau $50\,\text{N}$.'
  - 'Stelle $F = m v^2/r$ nach $v$ um: $v = \sqrt{F r/m}$.'
gefuehrt:
  - text: Welche Kraft übernimmt die Rolle der Zentripetalkraft, und wie groß ist sie im Grenzfall (in N)?
    teil: { typ: zahl, loesung: "50", einheit: "N" }
    erklaerung: Die Schnurkraft. Im Grenzfall ist sie gerade so groß, wie die Schnur aushält, also $50\,\text{N}$.
  - text: Stelle $F = m v^2/r$ nach $v^2$ um und rechne $v^2$ aus (in $\text{m}^2/\text{s}^2$).
    teil: { typ: zahl, loesung: "50*0.60/0.40" }
    erklaerung: '$v^2 = \dfrac{F r}{m} = \dfrac{50\,\text{N}\cdot 0{,}60\,\text{m}}{0{,}40\,\text{kg}} = 75\,\text{m}^2/\text{s}^2$.'
  - text: Wie groß ist die Höchstgeschwindigkeit in m/s?
    teil: { typ: zahl, loesung: "sqrt(75)", einheit: "m/s" }
    erklaerung: '$v = \sqrt{75}\,\text{m/s} = 8{,}66\,\text{m/s}$.'
  - text: Was passiert, wenn der Stein schneller wird?
    erklaerung: Dann wäre $m v^2/r$ größer als $50\,\text{N}$. Die Schnur kann diese Kraft nicht liefern, sie reißt, und der Stein fliegt tangential davon.
loesung: |
  **Ansatz:** Die Schnurkraft ist die einzige Kraft zur Mitte, also die Zentripetalkraft. Im Grenzfall gilt $\dfrac{m v^2}{r} = 50\,\text{N}$.
  ---
  **Umstellen:** $v^2 = \dfrac{F r}{m} = \dfrac{50\,\text{N}\cdot 0{,}60\,\text{m}}{0{,}40\,\text{kg}} = 75\,\text{m}^2/\text{s}^2$ (siehe Mathematik, [Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen)).
  ---
  **Ergebnis:** $v_{\max} = \sqrt{75}\,\text{m/s} = 8{,}66\,\text{m/s}$. Probe: $0{,}40\,\text{kg}\cdot 75\,\text{m}^2/\text{s}^2/0{,}60\,\text{m} = 50\,\text{N}$. ✓
```

```aufgabe
id: p6-3-aequator-kraft
titel: Die Zentripetalkraft auf dich am Äquator
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Du ($70\,\text{kg}$) stehst am Äquator. Die Erde (Radius $6{,}37\cdot 10^6\,\text{m}$) dreht sich in $86\,400\,\text{s}$ einmal. Runde auf drei signifikante Stellen.

  a) Welche resultierende Kraft zum Erdmittelpunkt brauchst du, um die Kreisbewegung mitzumachen (in N)?

  b) Wie viel Prozent deiner Gewichtskraft $m g$ mit $g = 9{,}81\,\text{m/s}^2$ ist das?
teile:
  - typ: zahl
    label: a) Zentripetalkraft
    loesung: "70*(2*pi/86400)^2*6.37e6"
    einheit: "N"
    anzeige: '2{,}36'
    fehler:
      - wert: "70*(2*pi/86400)*6.37e6"
        meldung: Du hast $m\omega r$ gerechnet. Die Winkelgeschwindigkeit steht in $m\omega^2 r$ im Quadrat.
      - wert: "70*(2*pi/24)^2*6.37e6"
        meldung: Die Periode muss in Sekunden stehen, $86\,400\,\text{s}$, nicht in Stunden.
  - typ: zahl
    label: b) Anteil
    loesung: "(2*pi/86400)^2*6.37e6/9.81*100"
    einheit: "%"
    anzeige: '0{,}343'
    fehler:
      - wert: "(2*pi/86400)^2*6.37e6/9.81"
        meldung: Das ist der Anteil als Dezimalzahl. Für Prozent mal $100$.
hinweise:
  - '$\omega = 2\pi/T$ mit $T = 86\,400\,\text{s}$.'
  - '$F_z = m\omega^2 R$. Danach durch $m g$ teilen.'
loesung: |
  **Ansatz:** Am Äquator läufst du in $86\,400\,\text{s}$ auf einem Kreis mit dem Erdradius. Nötig ist $F_z = m\omega^2 R$.
  ---
  **a)** $\omega = \dfrac{2\pi}{86\,400\,\text{s}} = 7{,}27\cdot 10^{-5}\,\text{s}^{-1}$. $F_z = 70\,\text{kg}\cdot(7{,}27\cdot 10^{-5}\,\text{s}^{-1})^2\cdot 6{,}37\cdot 10^{6}\,\text{m} = 2{,}36\,\text{N}$.
  ---
  **b)** $m g = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 686{,}7\,\text{N}$. $\dfrac{2{,}358\,\text{N}}{686{,}7\,\text{N}} = 0{,}00343 = 0{,}343\,\%$.
  ---
  **Deutung:** Diese Kraft liefert die Erdanziehung selbst. Der Boden muss dich deshalb etwas weniger stark tragen, eine Waage zeigt am Äquator um rund $0{,}3\,\%$ weniger an.
```

```aufgabe
id: p6-3-karussell-text
titel: Drückt die Zentripetalkraft nach außen?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Nach einer Karussellfahrt sagt ein Kind: „Die Zentripetalkraft hat mich ganz fest nach außen gegen die Lehne gedrückt.“

  Erkläre, was an diesem Satz falsch ist, und beschreibe richtig, welche Kraft auf das Kind wirkt und wohin sie zeigt.
teile:
  - typ: text
    muster: |
      Die Zentripetalkraft zeigt definitionsgemäß zum Mittelpunkt, also nach innen, nicht nach außen. Sie ist auch keine
      eigene Kraft, sondern eine Rolle. Hier übernimmt sie die Kraft der Lehne: Die Lehne drückt das Kind nach innen und
      zwingt es auf die Kreisbahn. Das Kind will wegen seiner Trägheit geradeaus weiter. Deshalb presst es sich gegen die
      Lehne und empfindet das als Druck „nach außen“. Nach dem dritten Axiom drückt das Kind tatsächlich mit gleich großer
      Kraft nach außen auf die Lehne, aber diese Kraft wirkt auf die Lehne, nicht auf das Kind.
hinweise:
  - In welche Richtung zeigt eine Zentripetalkraft immer?
  - Welcher Körper drückt auf das Kind? Und auf welchen Körper drückt das Kind?
loesung: |
  **Fehler 1:** Die Zentripetalkraft zeigt immer **zum Mittelpunkt**, nie nach außen.
  ---
  **Fehler 2:** Sie ist keine eigene Kraft. Hier übernimmt die Kraft der Lehne auf das Kind diese Rolle. Sie drückt das Kind nach innen.
  ---
  **Das Gefühl nach außen:** Das Kind ist träge und will geradeaus. Es presst sich gegen die Lehne. Die Kraft „nach außen“ übt das Kind auf die Lehne aus, sie wirkt also auf die Lehne, nicht auf das Kind.
```

```aufgabe
id: p6-3-windrad
titel: Kräfte am Rotorblatt einer Windkraftanlage
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Die Rotorblätter einer Windkraftanlage reichen bis $55\,\text{m}$ von der Drehachse und drehen sich mit $14$ Umdrehungen pro Minute. Wir betrachten ein Stück Blattspitze mit $20\,\text{kg}$, das am äußersten Ende sitzt, also $55\,\text{m}$ von der Achse entfernt. Runde auf drei signifikante Stellen.

  a) Wie schnell bewegt sich die Blattspitze (in m/s)?

  b) Wie groß ist ihre Zentripetalbeschleunigung, als Vielfaches von $g = 9{,}81\,\text{m/s}^2$?

  c) Welche Kraft muss das restliche Blatt auf das Spitzenstück ausüben (in N)? Das Gewicht vernachlässigen wir.
teile:
  - typ: zahl
    label: a) Geschwindigkeit
    loesung: "2*pi*14/60*55"
    einheit: "m/s"
    anzeige: '80{,}6'
    fehler:
      - wert: "2*pi*14*55"
        meldung: Die Drehzahl ist pro Minute angegeben. Teile sie zuerst durch $60$.
  - typ: zahl
    label: b) Vielfaches von g
    loesung: "(2*pi*14/60)^2*55/9.81"
    anzeige: '12{,}1'
    fehler:
      - wert: "(2*pi*14/60)^2*55"
        meldung: Das ist die Beschleunigung in $\text{m/s}^2$. Für das Vielfache von $g$ teile durch $9{,}81\,\text{m/s}^2$.
  - typ: zahl
    label: c) Kraft
    loesung: "20*(2*pi*14/60)^2*55"
    einheit: "N"
    anzeige: '2364 \approx 2{,}36\cdot 10^{3}'
    fehler:
      - wert: "20*9.81"
        meldung: Das ist die Gewichtskraft des Stücks. Gefragt ist die Kraft, die es auf der Kreisbahn hält, also $m\omega^2 r$.
hinweise:
  - '$\omega = 2\pi\cdot 14/(60\,\text{s})$. Dann $v = \omega r$ und $a_z = \omega^2 r$.'
  - 'Die Kraft des restlichen Blattes ist die einzige Kraft zur Achse, also gilt $F = m a_z$.'
loesung: |
  **Modell:** Das Spitzenstück läuft gleichförmig auf einem Kreis mit $r = 55\,\text{m}$. Nur das restliche Blatt hält es fest, also spielt die Kraft des Blattes die Rolle der Zentripetalkraft.
  ---
  **a)** $\omega = \dfrac{2\pi\cdot 14}{60\,\text{s}} = 1{,}466\,\text{s}^{-1}$. $v = \omega r = 1{,}466\,\text{s}^{-1}\cdot 55\,\text{m} = 80{,}6\,\text{m/s}$, also rund $290\,\text{km/h}$.
  ---
  **b)** $a_z = \omega^2 r = (1{,}466\,\text{s}^{-1})^2\cdot 55\,\text{m} = 118\,\text{m/s}^2$. Das sind $118/9{,}81 = 12{,}1$-mal $g$.
  ---
  **c)** $F = m a_z = 20\,\text{kg}\cdot 118\,\text{m/s}^2 = 2{,}36\cdot 10^{3}\,\text{N}$. Das Blatt muss das kleine Stück also mit mehr als dem Zwölffachen seines Gewichts festhalten.
  ---
  **Deutung:** Weiter innen ist $r$ kleiner und damit auch die nötige Kraft pro Kilogramm. Am meisten beansprucht ist deshalb die Blattwurzel, die alle Stücke zusammen festhalten muss.
```

## Kurve, Looping und Karussell

```aufgabe
id: p6-4-check
art: check
titel: "Vorwissen: eine schräge Kraft zerlegen"
niveau: 1
angabe: |
  Eine Kette zieht mit $100\,\text{N}$ schräg nach oben, unter $30^\circ$ gegen die **Senkrechte**. Wie groß ist der senkrechte Anteil dieser Kraft (in N, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "100*cos(inRad(30))"
    einheit: "N"
    anzeige: '86{,}6'
    fehler:
      - wert: "100*sin(inRad(30))"
        meldung: Das ist der **waagrechte** Anteil. Der Winkel ist gegen die Senkrechte gemessen, also liegt der senkrechte Anteil am Winkel an und gehört zum Kosinus.
      - wert: "100"
        meldung: Das ist die ganze Kraft. Weil die Kette schräg zieht, zeigt nur ein Teil davon senkrecht nach oben.
hinweise:
  - Zeichne das rechtwinklige Dreieck. Welche Seite liegt am $30^\circ$-Winkel an?
loesung: |
  Die Kraft ist die Hypotenuse. Der senkrechte Anteil liegt am Winkel zur Senkrechten an, er ist die Ankathete: $F_y = F\cos 30^\circ$.
  ---
  $F_y = 100\,\text{N}\cdot 0{,}866 = 86{,}6\,\text{N}$. Wiederholen: Mathematik, [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
```

In der Lektion [Die Zentripetalkraft](/lernen/physik1/kreisbewegung-gravitation/die-zentripetalkraft) hast du
das Rezept gelernt: echte Kräfte zeichnen, dann „Summe zur Mitte gleich $m v^2/r$“. Hier wendest du es auf
die vier Klassiker der Prüfung an: die flache Kurve, die überhöhte Kurve, den Looping und das
Kettenkarussell. Jedes Mal ist eine andere echte Kraft für die Rolle der Zentripetalkraft zuständig.

### Die flache Kurve: Haftreibung hält das Auto

In einer flachen Kurve wirken auf das Auto drei Kräfte: die Gewichtskraft $m g$ nach unten, die
Normalkraft $F_N$ der Straße nach oben und die **Haftreibung** $F_H$ waagrecht. Senkrecht heben sich
Gewicht und Normalkraft auf, also $F_N = m g$. Waagrecht bleibt nur die Haftreibung. Sie muss zur
Kurvenmitte zeigen und die Rolle der Zentripetalkraft übernehmen.

```plot
x: [-3, 2]
y: [-2.6, 2.6]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -2], label: "F_G", farbe: 0 }
  - { von: [0, 0], nach: [0, 2], label: "F_N", farbe: 2 }
  - { von: [0, 0], nach: [-1.4, 0], label: "F_H", farbe: 1 }
strecken:
  - { von: [-1.2, -2.2], nach: [1.2, -2.2], farbe: 4 }
punkte:
  - { x: 0, y: 0, label: "Auto" }
  - { x: -2.6, y: 0.4, label: "← zur Kurvenmitte" }
beschriftung: "Freikörperbild eines Autos in einer flachen Linkskurve, von hinten gesehen. Gewichtskraft (blau) und Normalkraft (grün) heben sich auf. Die Haftreibung der Reifen (orange) zeigt waagrecht zur Kurvenmitte und spielt die Rolle der Zentripetalkraft. Eine Kraft nach außen gibt es nicht."
```

Die Haftreibung kann höchstens $\mu_H F_N = \mu_H m g$ betragen (siehe
[Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand)). Das Auto bleibt in der
Spur, solange die nötige Kraft nicht größer ist:
$$\frac{m v^2}{r} \le \mu_H\, m g \qquad\text{also}\qquad v_{\max} = \sqrt{\mu_H\, g\, r}.$$
Dabei ist $\mu_H$ die Haftreibungszahl, $g = 9{,}81\,\text{m/s}^2$ und $r$ der Kurvenradius. Die Masse
kürzt sich heraus. Ein Lastwagen darf mit gleich guten Reifen also genauso schnell durch die Kurve wie ein
Kleinwagen.

:::beispiel[Dieselbe Kurve trocken und vereist]
Eine flache Kurve hat den Radius $50\,\text{m}$. Auf trockenem Asphalt ist $\mu_H = 0{,}80$, bei Glatteis
$\mu_H = 0{,}10$. Wie schnell darf ein Auto jeweils höchstens fahren?

**Schritt 1, Ansatz:** Die größte Haftreibung liefert die Zentripetalkraft: $v_{\max} = \sqrt{\mu_H g r}$.

**Schritt 2, trocken:** $v_{\max} = \sqrt{0{,}80\cdot 9{,}81\,\text{m/s}^2\cdot 50\,\text{m}} = \sqrt{392\,\text{m}^2/\text{s}^2} = 19{,}8\,\text{m/s} = 71\,\text{km/h}$.

**Schritt 3, Glatteis:** $v_{\max} = \sqrt{0{,}10\cdot 9{,}81\,\text{m/s}^2\cdot 50\,\text{m}} = 7{,}0\,\text{m/s} = 25\,\text{km/h}$.

**Deutung:** Die Reibungszahl sinkt auf ein Achtel, die Höchstgeschwindigkeit nur auf
$1/\sqrt 8 \approx 0{,}35$, also etwa ein Drittel. Trotzdem: Wer bei Eis mit $50\,\text{km/h}$ in diese
Kurve fährt, rutscht geradeaus.
:::

### Die überhöhte Kurve: die Normalkraft hilft mit

Radrennbahnen, Autobahnausfahrten und Bahngleise sind in Kurven nach innen geneigt. Man nennt das
**überhöht**. Steht die Fahrbahn um den Winkel $\alpha$ schräg, dann steht auch die Normalkraft schräg,
nämlich senkrecht zur Fahrbahn. Sie hat dadurch einen waagrechten Anteil zur Kurvenmitte.

```plot
x: [-3, 2.8]
y: [-1.6, 2.6]
gleich: true
strecken:
  - { von: [-2.5, -0.91], nach: [2.5, 0.91], farbe: 4 }
  - { von: [0, 0], nach: [-0.73, 0], gestrichelt: true, farbe: 1 }
  - { von: [-0.73, 0], nach: [-0.73, 2.0], gestrichelt: true }
vektoren:
  - { von: [0, 0], nach: [0, -2], label: "F_G", farbe: 0 }
  - { von: [0, 0], nach: [-0.73, 2.0], label: "F_N", farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "Auto" }
  - { x: -0.4, y: -0.35, label: "Summe" }
  - { x: -2.6, y: 0.9, label: "← zur Kurvenmitte" }
beschriftung: "Freikörperbild auf einer um 20 Grad überhöhten Fahrbahn (braun) ohne Reibung, von hinten gesehen. Die Normalkraft (grün) steht senkrecht zur Fahrbahn und damit schräg. Ihr senkrechter Anteil trägt das Gewicht (blau), ihr waagrechter Anteil (orange gestrichelt) zeigt zur Kurvenmitte und ist die Zentripetalkraft."
```

Ohne Reibung wirken nur Gewicht und Normalkraft. Wir zerlegen die Normalkraft:

- **Senkrecht** ist das Auto im Gleichgewicht: $F_N\cos\alpha = m g$.
- **Waagrecht** liefert der Anteil der Normalkraft die Zentripetalkraft: $F_N\sin\alpha = \dfrac{m v^2}{r}$.

Teilt man die zweite Gleichung durch die erste, kürzen sich $F_N$ und $m$, und $\sin\alpha/\cos\alpha = \tan\alpha$:
$$\tan\alpha = \frac{v^2}{r\, g}.$$
Bei genau dieser **Designgeschwindigkeit** braucht das Auto überhaupt keine Reibung, um die Kurve zu halten.

:::beispiel[Die Steilkurve einer Radrennbahn]
Eine Radrennbahn hat in der Kurve den Radius $25\,\text{m}$ und ist um $42^\circ$ geneigt. Bei welcher
Geschwindigkeit braucht ein Radfahrer keine Reibung zur Seite?

**Schritt 1, Ansatz:** $\tan\alpha = \dfrac{v^2}{r g}$, nach $v$ umgestellt: $v = \sqrt{r g\tan\alpha}$.

**Schritt 2, Einsetzen:** $v = \sqrt{25\,\text{m}\cdot 9{,}81\,\text{m/s}^2\cdot\tan 42^\circ} = \sqrt{25\cdot 9{,}81\cdot 0{,}900}\,\text{m/s} = 14{,}9\,\text{m/s}$.

**Schritt 3, Deutung:** Das sind $53\,\text{km/h}$, ein typisches Bahnrad-Tempo. Wer langsamer fährt, würde
ohne Reibung die steile Bahn hinunterrutschen. Wer schneller fährt, braucht Reibung nach innen.
:::

### Der Looping: oben drücken Gewicht und Schiene nach unten

Ein Wagen fährt durch einen senkrechten Looping mit Radius $r$. Im **höchsten Punkt** steht er kopfüber.
Dort wirken das Gewicht $m g$ nach unten und die Normalkraft $F_N$ der Schiene, die ebenfalls nach unten
drückt, denn die Schiene ist über dem Wagen. **Beide** zeigen zum Mittelpunkt:
$$m g + F_N = \frac{m v^2}{r}.$$
Die Schiene kann nur drücken, nicht ziehen, also muss $F_N \ge 0$ sein. Der Grenzfall $F_N = 0$ liefert die
**Mindestgeschwindigkeit** im höchsten Punkt: Das Gewicht allein ist dann die Zentripetalkraft,
$$m g = \frac{m v_{\min}^2}{r}\qquad\text{also}\qquad v_{\min} = \sqrt{g\, r}.$$

Im **tiefsten Punkt** zeigt die Normalkraft nach oben, also zum Mittelpunkt, das Gewicht nach unten, also
vom Mittelpunkt weg. Dann gilt $F_N - m g = m v^2/r$, also $F_N = m g + m v^2/r$. Die Schiene drückt
stärker als das Gewicht, du fühlst dich schwerer.

```plot
x: [-2, 2]
y: [-1.9, 1.7]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
vektoren:
  - { von: [0, 1], nach: [0, 0.45], label: "m g", farbe: 0 }
  - { von: [0.12, 1], nach: [0.12, 0.7], label: "F_N", farbe: 2 }
  - { von: [0, -1], nach: [0, -1.55], label: "m g", farbe: 0 }
  - { von: [0.12, -1], nach: [0.12, 0.05], label: "F_N", farbe: 2 }
punkte:
  - { x: 0, y: 1, label: "oben" }
  - { x: 0, y: -1, label: "unten" }
  - { x: 0, y: 0, label: "Mittelpunkt" }
beschriftung: "Freikörperbilder eines Wagens im Looping, Innenseite der Schiene. Oben zeigen Gewichtskraft (blau) und Normalkraft (grün) beide nach unten, also zur Mitte. Unten zeigt die Normalkraft zur Mitte und ist viel größer als das Gewicht. In beiden Punkten ist die Summe zur Mitte gleich m v² / r."
```

:::beispiel[Ein Looping mit 10 m Radius]
Ein Achterbahnwagen soll einen Looping mit $r = 10\,\text{m}$ gerade noch schaffen. Er startet reibungsfrei
aus der Ruhe.

**Schritt 1, Mindestgeschwindigkeit oben:** $v_{\min} = \sqrt{g r} = \sqrt{9{,}81\,\text{m/s}^2\cdot 10\,\text{m}} = 9{,}90\,\text{m/s}$.

**Schritt 2, Starthöhe mit dem Energiesatz:** Der höchste Punkt liegt $2r = 20\,\text{m}$ über dem tiefsten.
Lageenergie am Start gleich Lage- plus Bewegungsenergie oben (siehe
[Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz)):
$m g h = m g\cdot 2r + \tfrac12 m\cdot g r$. Die Masse kürzt sich, und $h = 2r + \tfrac12 r = 2{,}5\,r = 25\,\text{m}$.

**Schritt 3, Belastung unten:** Im tiefsten Punkt ist $v^2 = 2 g h = 2\cdot 9{,}81\cdot 25\,\text{m}^2/\text{s}^2 = 490\,\text{m}^2/\text{s}^2$.
Also $F_N = m\left(g + \dfrac{v^2}{r}\right) = m\,(9{,}81 + 49{,}1)\,\text{m/s}^2 = m\cdot 58{,}9\,\text{m/s}^2 = 6\,m g$.

**Deutung:** Im Tal drückt der Sitz mit dem Sechsfachen der Gewichtskraft. Das ist zu viel. Echte
Loopings sind deshalb nicht kreisrund, sondern oben enger als unten (Tropfenform).
:::

### Das Kettenkarussell: die Kette steht schräg

Ein Sitz hängt an einer Kette und läuft auf einem waagrechten Kreis mit Radius $r$. Auf ihn wirken nur die
Gewichtskraft und die Kettenkraft $F_K$. Die Kette stellt sich unter dem Winkel $\alpha$ gegen die
Senkrechte schräg. Senkrecht trägt die Kette das Gewicht: $F_K\cos\alpha = m g$. Waagrecht liefert sie die
Zentripetalkraft: $F_K\sin\alpha = m\omega^2 r$. Teilt man beide Gleichungen, folgt
$$\tan\alpha = \frac{\omega^2 r}{g}.$$
Die Masse kürzt sich wieder: Ein Erwachsener und ein Kind hängen bei gleichem Radius unter demselben Winkel.

```plot
x: [-2.8, 1.8]
y: [-2.4, 2.4]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -2], label: "F_G", farbe: 0 }
  - { von: [0, 0], nach: [-1.68, 2.0], label: "F_K", farbe: 2 }
strecken:
  - { von: [0, 0], nach: [-1.68, 0], gestrichelt: true, farbe: 1 }
  - { von: [0, 0], nach: [0, 2.0], gestrichelt: true }
punkte:
  - { x: 0, y: 0, label: "Sitz" }
  - { x: -0.85, y: -0.3, label: "Summe zur Mitte" }
  - { x: -0.25, y: 1.2, label: "α" }
beschriftung: "Freikörperbild eines Sitzes im Kettenkarussell, die Drehachse liegt links. Nur zwei Kräfte wirken: die Gewichtskraft (blau) und die Kettenkraft (grün) entlang der schrägen Kette. Ihr senkrechter Anteil trägt das Gewicht, ihr waagrechter Anteil (orange gestrichelt) zeigt zur Achse und ist die Zentripetalkraft."
```

:::merke[So rechnest du Kurve, Looping und Karussell]
1. Freikörperbild mit den echten Kräften. Kreismittelpunkt einzeichnen.
2. Flache Kurve: Haftreibung $= m v^2/r$, höchstens $\mu_H m g$, also $v_{\max} = \sqrt{\mu_H g r}$.
3. Überhöhte Kurve und Kettenkarussell: senkrecht Gleichgewicht, waagrecht Zentripetalkraft. Teilen ergibt $\tan\alpha$.
4. Looping oben: $m g + F_N = m v^2/r$ mit $F_N \ge 0$. Unten: $F_N - m g = m v^2/r$. Fehlende Geschwindigkeiten holst du aus dem Energiesatz.
:::

:::achtung[Fehler: im höchsten Punkt des Loopings die Normalkraft nach oben gezeichnet]
Ein Wagen ($500\,\text{kg}$) fährt mit $12\,\text{m/s}$ durch den höchsten Punkt eines Loopings mit
$r = 8{,}0\,\text{m}$. Wie stark drückt die Schiene?

Falsch gerechnet: „$F_N - m g = \dfrac{m v^2}{r}$, also $F_N = 500\,\text{kg}\cdot(18{,}0 + 9{,}81)\,\text{m/s}^2 = 13\,900\,\text{N}$.“

Diese Gleichung gilt im **tiefsten** Punkt. Oben ist die Schiene über dem Wagen und drückt nach unten,
genau wie das Gewicht. Beide zeigen zur Mitte: $m g + F_N = \dfrac{m v^2}{r}$. Richtig ist
$F_N = 500\,\text{kg}\cdot(18{,}0 - 9{,}81)\,\text{m/s}^2 = 4100\,\text{N}$.
:::

:::achtung[Fehler: in der überhöhten Kurve mit km/h gerechnet]
Eine Kurve mit $r = 200\,\text{m}$ soll für $90\,\text{km/h}$ ohne Reibung befahrbar sein.

Falsch gerechnet: $\tan\alpha = \dfrac{90^2}{200\cdot 9{,}81} = 4{,}13$, also $\alpha = 76^\circ$.

Eine fast senkrechte Wand als Straße ist unsinnig. Das ist der Hinweis auf den Fehler.
Die Geschwindigkeit muss in m/s stehen: $v = 25\,\text{m/s}$, $\tan\alpha = \dfrac{625}{1962} = 0{,}319$,
also $\alpha = 17{,}7^\circ$.
:::

```reflexion
frage: Ein Lastwagen und ein Kleinwagen haben gleich gute Reifen. Erkläre, warum beide dieselbe Höchstgeschwindigkeit in einer flachen Kurve haben, obwohl der Lastwagen eine viel größere Zentripetalkraft braucht.
antwort: |
  Der Lastwagen braucht wegen seiner großen Masse tatsächlich eine viel größere Zentripetalkraft $m v^2/r$. Er drückt
  aber mit seinem größeren Gewicht auch viel stärker auf die Straße, und die größte Haftreibung $\mu_H m g$ wächst im
  selben Verhältnis mit der Masse. Nötige und verfügbare Kraft sind beide proportional zu $m$. In der Bedingung
  $m v^2/r \le \mu_H m g$ kürzt sich die Masse deshalb heraus, und es bleibt $v_{\max} = \sqrt{\mu_H g r}$.
```

### Aufgaben zu Kurve, Looping und Karussell

```aufgabe
id: p6-kurve-reibung
titel: Höchstgeschwindigkeit in der Kurve
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Wie schnell (in km/h, drei signifikante Stellen) darf ein Auto höchstens durch eine flache Kurve mit Radius $80\,\text{m}$ fahren, wenn die Haftreibungszahl $0{,}60$ beträgt?
teile:
  - typ: zahl
    loesung: "sqrt(0.60*9.81*80)*3.6"
    einheit: "km/h"
    anzeige: '78{,}1'
    fehler:
      - wert: "sqrt(0.60*9.81*80)"
        meldung: Das ist die Geschwindigkeit in m/s. Gefragt ist km/h, also mal $3{,}6$.
      - wert: "0.60*9.81*80*3.6"
        meldung: $\mu_H g r$ ist $v^2$. Zieh noch die Wurzel, bevor du umrechnest.
hinweise:
  - 'Die größte Haftreibung $\mu_H m g$ muss die Zentripetalkraft $m v^2/r$ liefern.'
loesung: |
  **Ansatz:** $\dfrac{m v^2}{r} = \mu_H m g$, die Masse kürzt sich: $v_{\max} = \sqrt{\mu_H g r}$.
  ---
  **Einsetzen:** $v_{\max} = \sqrt{0{,}60\cdot 9{,}81\,\text{m/s}^2\cdot 80\,\text{m}} = \sqrt{471\,\text{m}^2/\text{s}^2} = 21{,}7\,\text{m/s} = 78{,}1\,\text{km/h}$.
```

```aufgabe
id: p6-wassereimer
titel: Wassereimer im Kreis
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Du schwingst einen Wassereimer auf einem senkrechten Kreis mit Radius $1{,}0\,\text{m}$. Wie schnell muss er im höchsten Punkt mindestens sein, damit kein Wasser herausfällt (in m/s, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "sqrt(9.81*1.0)"
    einheit: "m/s"
    anzeige: '3{,}13'
    fehler:
      - wert: "9.81*1.0"
        meldung: Das ist $v^2$. Zieh noch die Wurzel.
      - wert: "sqrt(2*9.81*1.0)"
        meldung: Das ist die Formel für den freien Fall aus einer Höhe. Hier gilt der Grenzfall „Gewicht gleich Zentripetalkraft“, $m g = m v^2/r$.
hinweise:
  - 'Grenzfall: Der Boden des Eimers drückt gar nicht mehr auf das Wasser. Dann liefert das Gewicht allein die Zentripetalkraft.'
loesung: |
  **Ansatz:** Im höchsten Punkt zeigen Gewicht und Druck des Eimerbodens beide nach unten, zur Mitte. Im Grenzfall ist der Druck null: $m g = m v^2/r$.
  ---
  $v_{\min} = \sqrt{g r} = \sqrt{9{,}81\,\text{m/s}^2\cdot 1{,}0\,\text{m}} = 3{,}13\,\text{m/s}$. Ist der Eimer langsamer, braucht das Wasser weniger Zentripetalkraft, als sein Gewicht liefert. Es fällt auf einer engeren Bahn heraus.
```

```aufgabe
id: p6-4-looping-oben
titel: Welche Kräfte wirken oben im Looping?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Achterbahnwagen fährt schnell genug durch den höchsten Punkt eines Loopings (Wagen innen an der Schiene). Welches Freikörperbild ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Gewichtskraft nach unten, Normalkraft der Schiene nach unten."
      - "Gewichtskraft nach unten, Normalkraft der Schiene nach oben."
      - "Gewichtskraft, Normalkraft und Zentripetalkraft, alle nach unten."
      - "Gewichtskraft nach unten, Zentrifugalkraft nach oben, beide gleich groß."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Schiene ist oben **über** dem Wagen. Sie kann ihn nur von sich wegdrücken, also nach unten.
      - wert: 2
        meldung: Die Zentripetalkraft ist keine dritte Kraft. Hier übernehmen Gewicht und Normalkraft zusammen ihre Rolle.
      - wert: 3
        meldung: Von außen betrachtet gibt es keine Zentrifugalkraft. Wären die Kräfte im Gleichgewicht, würde der Wagen geradeaus fliegen statt im Kreis.
hinweise:
  - Wo ist die Schiene, und in welche Richtung kann sie drücken? Zeichne nur Kräfte, die ein Körper ausübt.
loesung: |
  **Echte Kräfte:** Die Erde zieht den Wagen nach unten. Die Schiene liegt über dem Wagen und drückt ihn von sich weg, also auch nach unten.
  ---
  **Rolle:** Beide zeigen zum Mittelpunkt. Gemeinsam übernehmen sie die Rolle der Zentripetalkraft, $m g + F_N = m v^2/r$.
```

```aufgabe
id: p6-looping
titel: Looping der Achterbahn
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Looping hat den Radius $8{,}0\,\text{m}$.

  a) Welche Mindestgeschwindigkeit braucht der Wagen im höchsten Punkt (in m/s, drei signifikante Stellen)?

  b) Aus welcher Höhe über dem tiefsten Punkt des Loopings muss der Wagen reibungsfrei aus der Ruhe starten (in m)?
teile:
  - typ: zahl
    label: a) Mindestgeschwindigkeit
    loesung: "sqrt(9.81*8.0)"
    einheit: "m/s"
    anzeige: '8{,}86'
    fehler:
      - wert: "sqrt(2*9.81*8.0)"
        meldung: Das ist die Fallformel $\sqrt{2 g h}$. Oben im Looping gilt der Grenzfall $m g = m v^2/r$.
  - typ: zahl
    label: b) Starthöhe
    loesung: "2.5*8.0"
    einheit: "m"
    anzeige: '20'
    fehler:
      - wert: "2*8.0"
        meldung: Auf der Höhe $2r$ käme der Wagen mit $v = 0$ an und würde herunterfallen. Er braucht oben zusätzlich Bewegungsenergie $\tfrac12 m g r$.
      - wert: "8.0"
        meldung: Der höchste Punkt liegt $2r$ über dem tiefsten, nicht $r$. Dazu kommt noch die nötige Bewegungsenergie.
hinweise:
  - 'a) Oben liefert im Grenzfall das Gewicht allein die Zentripetalkraft.'
  - 'b) Energieerhaltung zwischen Start (Höhe $h$, $v = 0$) und höchstem Loopingpunkt (Höhe $2r$, $v^2 = g r$).'
loesung: |
  **a)** Grenzfall $F_N = 0$: $m g = m v^2/r$, also $v_{\min} = \sqrt{g r} = \sqrt{9{,}81\,\text{m/s}^2\cdot 8{,}0\,\text{m}} = 8{,}86\,\text{m/s}$.
  ---
  **b)** Energiebilanz: $m g h = m g\cdot 2r + \tfrac12 m\, v_{\min}^2 = m g\cdot 2r + \tfrac12 m\, g r$. Durch $m g$ geteilt: $h = 2{,}5\,r$.
  ---
  $h = 2{,}5\cdot 8{,}0\,\text{m} = 20\,\text{m}$. Der Start muss also um ein halbes $r$ über dem Loopingscheitel liegen. Echte Bahnen starten höher, wegen Reibung und als Sicherheitsreserve.
```

```aufgabe
id: p6-karussell
titel: Kettenkarussell
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Bei einem Kettenkarussell bewegen sich die Sitze auf einem Kreis mit Radius $5{,}0\,\text{m}$. Eine Umdrehung dauert $4{,}0\,\text{s}$. Unter welchem Winkel gegen die Senkrechte hängen die Ketten (in Grad, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "inGrad(atan((2*pi/4.0)^2*5.0/9.81))"
    einheit: "°"
    anzeige: '51{,}5'
    fehler:
      - wert: "inGrad(atan(9.81/((2*pi/4.0)^2*5.0)))"
        meldung: Du hast den Bruch umgedreht und damit den Winkel gegen die **Waagrechte** berechnet. Gegen die Senkrechte gilt $\tan\alpha = \omega^2 r/g$.
      - wert: "inGrad(atan((2*pi/4.0)*5.0/9.81))"
        meldung: Im Zähler steht $\omega^2 r$, die Zentripetalbeschleunigung. Du hast $\omega r$ genommen, das ist eine Geschwindigkeit.
hinweise:
  - 'Senkrecht: $F_K\cos\alpha = m g$. Waagrecht: $F_K\sin\alpha = m\omega^2 r$.'
  - 'Teilen ergibt $\tan\alpha = \dfrac{\omega^2 r}{g}$ mit $\omega = 2\pi/T$.'
loesung: |
  **Ansatz:** Nur Gewicht und Kettenkraft wirken. Senkrecht Gleichgewicht, waagrecht Zentripetalkraft. Teilen ergibt $\tan\alpha = \omega^2 r/g$.
  ---
  **Winkelgeschwindigkeit:** $\omega = \dfrac{2\pi}{4{,}0\,\text{s}} = 1{,}571\,\text{s}^{-1}$.
  ---
  **Winkel:** $\tan\alpha = \dfrac{(1{,}571\,\text{s}^{-1})^2\cdot 5{,}0\,\text{m}}{9{,}81\,\text{m/s}^2} = 1{,}258$, also $\alpha = 51{,}5^\circ$, unabhängig von der Masse der Fahrgäste.
```

```aufgabe
id: p6-4-looping-unten
titel: Schwerer im Tal der Achterbahn
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Person ($60\,\text{kg}$) fährt mit $15\,\text{m/s}$ durch den tiefsten Punkt eines Achterbahntals, das dort wie ein Kreis mit Radius $10\,\text{m}$ gekrümmt ist.

  a) Mit welcher Kraft drückt der Sitz auf die Person (in N, drei signifikante Stellen)?

  b) Das Wievielfache ihrer Gewichtskraft ist das?
teile:
  - typ: zahl
    label: a) Normalkraft
    loesung: "60*(9.81 + 15^2/10)"
    einheit: "N"
    anzeige: '1939 \approx 1{,}94\cdot 10^{3}'
    fehler:
      - wert: "60*15^2/10"
        meldung: Das ist nur die nötige Zentripetalkraft. Der Sitz muss zusätzlich das Gewicht tragen, $F_N = m g + m v^2/r$.
      - wert: "60*(15^2/10 - 9.81)"
        meldung: Im Tal zeigt das Gewicht **vom** Mittelpunkt weg, die Normalkraft zum Mittelpunkt. Das Gewicht wird also addiert, nicht abgezogen.
  - typ: zahl
    label: b) Vielfaches von m g
    loesung: "(9.81 + 15^2/10)/9.81"
    anzeige: '3{,}29'
    fehler:
      - wert: "(15^2/10)/9.81"
        meldung: Du hast nur die Zentripetalbeschleunigung mit $g$ verglichen. Der Sitz drückt mit $m(g + v^2/r)$.
hinweise:
  - Der Kreismittelpunkt liegt über der Person. Welche Kraft zeigt zu ihm, welche von ihm weg?
  - '$F_N - m g = m v^2/r$, also $F_N = m(g + v^2/r)$.'
gefuehrt:
  - text: Wo liegt der Kreismittelpunkt, und in welche Richtung zeigt die Normalkraft des Sitzes?
    erklaerung: Der Mittelpunkt liegt über der Person. Die Normalkraft zeigt nach oben, also zum Mittelpunkt. Das Gewicht zeigt nach unten, vom Mittelpunkt weg.
  - text: Wie groß muss die resultierende Kraft zum Mittelpunkt sein (in N)?
    teil: { typ: zahl, loesung: "60*15^2/10", einheit: "N" }
    erklaerung: '$m v^2/r = 60\,\text{kg}\cdot 225\,\text{m}^2/\text{s}^2 / 10\,\text{m} = 1350\,\text{N}$.'
  - text: Wie groß ist die Gewichtskraft (in N)?
    teil: { typ: zahl, loesung: "60*9.81", einheit: "N" }
    erklaerung: '$m g = 60\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 589\,\text{N}$.'
  - text: Die Normalkraft muss das Gewicht ausgleichen und zusätzlich die Zentripetalkraft liefern. Wie groß ist sie (in N)?
    teil: { typ: zahl, loesung: "60*9.81 + 60*15^2/10", einheit: "N" }
    erklaerung: '$F_N = 589\,\text{N} + 1350\,\text{N} = 1939\,\text{N}$.'
loesung: |
  **Freikörperbild:** Gewicht $m g$ nach unten (vom Mittelpunkt weg), Normalkraft $F_N$ nach oben (zum Mittelpunkt). Ansatz: $F_N - m g = m v^2/r$.
  ---
  **a)** $F_N = m g + \dfrac{m v^2}{r} = 589\,\text{N} + \dfrac{60\,\text{kg}\cdot(15\,\text{m/s})^2}{10\,\text{m}} = 589\,\text{N} + 1350\,\text{N} = 1939\,\text{N}$.
  ---
  **b)** $\dfrac{1939\,\text{N}}{589\,\text{N}} = 3{,}29$. Die Person fühlt sich gut dreimal so schwer, weil der Sitz entsprechend stärker drückt. Ihre Masse und ihre Gewichtskraft ändern sich dabei nicht.
```

```aufgabe
id: p6-kurvenneigung
titel: Überhöhte Autobahnausfahrt
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Eine Autobahnausfahrt hat einen Kurvenradius von $300\,\text{m}$ und soll für $100\,\text{km/h}$ ausgelegt sein, sodass bei dieser Geschwindigkeit keine Reibung zur Seite nötig ist.

  a) Wie stark muss die Fahrbahn geneigt sein (in Grad, drei signifikante Stellen)?

  b) Ein Auto ($1500\,\text{kg}$) fährt genau mit der Designgeschwindigkeit. Wie groß ist die Normalkraft der Fahrbahn (in N, drei signifikante Stellen)?
teile:
  - typ: zahl
    label: a) Neigungswinkel
    loesung: "inGrad(atan((100/3.6)^2/(300*9.81)))"
    einheit: "°"
    anzeige: '14{,}7'
    fehler:
      - wert: "inGrad(atan(100^2/(300*9.81)))"
        meldung: Die Geschwindigkeit muss in m/s stehen. Ein Winkel von über $70^\circ$ wäre eine Wand, keine Straße.
      - wert: "inGrad(asin((100/3.6)^2/(300*9.81)))"
        meldung: Beim Teilen der beiden Gleichungen entsteht $\sin\alpha/\cos\alpha = \tan\alpha$, nicht $\sin\alpha$.
  - typ: zahl
    label: b) Normalkraft
    loesung: "1500*9.81/cos(atan((100/3.6)^2/(300*9.81)))"
    einheit: "N"
    anzeige: '1{,}52\cdot 10^{4}'
    fehler:
      - wert: "1500*9.81"
        meldung: Auf der geneigten Fahrbahn trägt nur der senkrechte Anteil $F_N\cos\alpha$ das Gewicht. Die Normalkraft selbst ist deshalb größer als $m g$.
      - wert: "1500*9.81*cos(atan((100/3.6)^2/(300*9.81)))"
        meldung: Das gilt auf einer schiefen Ebene, auf der ein Körper ruht. In der Kurve muss der senkrechte Anteil $F_N\cos\alpha$ gleich $m g$ sein, also teilst du durch $\cos\alpha$.
hinweise:
  - 'Ohne Reibung wirken nur Gewicht und Normalkraft. Senkrecht: $F_N\cos\alpha = m g$. Waagrecht: $F_N\sin\alpha = m v^2/r$.'
  - 'a) Die beiden Gleichungen durcheinander teilen. b) Die senkrechte Gleichung nach $F_N$ auflösen.'
loesung: |
  **Modell:** Ohne Reibung zur Seite wirken nur Gewicht und Normalkraft. Die Normalkraft steht senkrecht zur geneigten Fahrbahn.
  ---
  **Gleichungen:** senkrecht $F_N\cos\alpha = m g$, waagrecht $F_N\sin\alpha = m v^2/r$. Teilen: $\tan\alpha = \dfrac{v^2}{r g}$.
  ---
  **a)** $v = 100/3{,}6\,\text{m/s} = 27{,}8\,\text{m/s}$. $\tan\alpha = \dfrac{(27{,}8\,\text{m/s})^2}{300\,\text{m}\cdot 9{,}81\,\text{m/s}^2} = 0{,}262$, also $\alpha = 14{,}7^\circ$.
  ---
  **b)** $F_N = \dfrac{m g}{\cos\alpha} = \dfrac{1500\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{\cos 14{,}7^\circ} = \dfrac{14\,715\,\text{N}}{0{,}967} = 1{,}52\cdot 10^4\,\text{N}$. Der Fahrer wird also um gut $3\,\%$ fester in den Sitz gedrückt.
  ---
  **Praxis:** Straßen überhöht man meist nur um wenige Grad. Sonst würden langsame Autos bei Glatteis nach innen rutschen.
```

```aufgabe
id: p6-4-kuppe
titel: Über eine Kuppe
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein Auto ($1200\,\text{kg}$) fährt über eine Straßenkuppe, die oben wie ein Kreisbogen mit Radius $30\,\text{m}$ gekrümmt ist.

  a) Wie groß ist die Normalkraft der Straße im höchsten Punkt, wenn das Auto mit $50\,\text{km/h}$ fährt (in N, drei signifikante Stellen)?

  b) Ab welcher Geschwindigkeit würden die Räder oben den Bodenkontakt verlieren (in km/h, drei signifikante Stellen)?
teile:
  - typ: zahl
    label: a) Normalkraft
    loesung: "1200*(9.81 - (50/3.6)^2/30)"
    einheit: "N"
    anzeige: '4056 \approx 4{,}06\cdot 10^{3}'
    fehler:
      - wert: "1200*(9.81 + (50/3.6)^2/30)"
        meldung: Auf der Kuppe liegt der Mittelpunkt **unter** dem Auto. Das Gewicht zeigt zur Mitte, die Normalkraft von ihr weg. Also $m g - F_N = m v^2/r$.
      - wert: "1200*9.81"
        meldung: Das gilt nur auf ebener Straße. Auf der Kuppe muss eine resultierende Kraft nach unten übrig bleiben, also ist $F_N$ kleiner als $m g$.
  - typ: zahl
    label: b) Grenzgeschwindigkeit
    loesung: "sqrt(9.81*30)*3.6"
    einheit: "km/h"
    anzeige: '61{,}8'
    fehler:
      - wert: "sqrt(9.81*30)"
        meldung: Das ist das Ergebnis in m/s. Gefragt ist km/h.
hinweise:
  - Wo liegt der Kreismittelpunkt? Welche Kraft zeigt zu ihm, welche von ihm weg?
  - 'Ansatz $m g - F_N = m v^2/r$. Für b) setzt du $F_N = 0$.'
loesung: |
  **Modell:** Auf der Kuppe fährt das Auto kurz auf einem Kreisbogen. Der Mittelpunkt liegt **unter** der Straße. Das Gewicht zeigt zur Mitte, die Normalkraft nach oben, von der Mitte weg.
  ---
  **Ansatz:** Summe zur Mitte: $m g - F_N = \dfrac{m v^2}{r}$, also $F_N = m\left(g - \dfrac{v^2}{r}\right)$.
  ---
  **a)** $v = 50/3{,}6\,\text{m/s} = 13{,}9\,\text{m/s}$, $v^2/r = 193\,\text{m}^2/\text{s}^2 / 30\,\text{m} = 6{,}43\,\text{m/s}^2$. $F_N = 1200\,\text{kg}\cdot(9{,}81 - 6{,}43)\,\text{m/s}^2 = 4{,}06\cdot 10^3\,\text{N}$, nur etwa ein Drittel der Gewichtskraft.
  ---
  **b)** Kontaktverlust bei $F_N = 0$: $g = v^2/r$, also $v = \sqrt{g r} = \sqrt{9{,}81\,\text{m/s}^2\cdot 30\,\text{m}} = 17{,}2\,\text{m/s} = 61{,}8\,\text{km/h}$.
  ---
  **Deutung:** Schon bei $50\,\text{km/h}$ drücken die Reifen nur noch schwach auf die Straße. Bremsen und Lenken werden dort deutlich schlechter. Daher kommt das „flaue“ Gefühl im Bauch auf einer Kuppe.
```

## Die Zentrifugalkraft: eine Scheinkraft

```aufgabe
id: p6-5-check
art: check
titel: "Vorwissen: die Trägheitskraft im bremsenden Bus"
niveau: 1
angabe: |
  Ein Bus bremst mit $3{,}0\,\text{m/s}^2$. Ein Fahrgast hat $60\,\text{kg}$. Wer **im Bus** rechnet, braucht eine Trägheitskraft (Scheinkraft). Wie groß ist sie (in N), und wohin zeigt sie?
teile:
  - typ: zahl
    loesung: "60*3.0"
    einheit: "N"
    anzeige: '180'
    fehler:
      - wert: "60*9.81"
        meldung: Das ist die Gewichtskraft. Die Trägheitskraft hängt von der Beschleunigung des **Busses** ab, $F_T = m a_0$.
      - wert: "60/3.0"
        meldung: Die Trägheitskraft ist Masse **mal** Beschleunigung des Bezugssystems.
hinweise:
  - 'Trägheitskraft $\vec F_T = -m\,\vec a_0$, wobei $\vec a_0$ die Beschleunigung des Busses ist.'
loesung: |
  Im beschleunigten Bus rechnet man mit $F_T = m a_0 = 60\,\text{kg}\cdot 3{,}0\,\text{m/s}^2 = 180\,\text{N}$.
  ---
  Sie zeigt **entgegen** der Beschleunigung des Busses. Der Bus bremst, seine Beschleunigung zeigt nach hinten, die Trägheitskraft also nach vorn. Am Straßenrand gibt es diese Kraft nicht. Wiederholen: [Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).
```

Wer im Karussell sitzt oder im Auto schnell durch eine Kurve fährt, spürt deutlich eine Kraft **nach
außen**. Bisher haben wir aber gelernt, dass auf einen Körper auf der Kreisbahn eine Kraft **nach innen**
wirken muss. Ist das ein Widerspruch? Nein. Die beiden Aussagen gehören zu zwei verschiedenen
**Bezugssystemen**, also zu zwei verschiedenen Standpunkten, von denen aus man die Bewegung beschreibt.

**Worum geht es in einem Satz?** Die Kraft nach außen gibt es nur für jemanden, der sich mitdreht. Sie ist
eine **Scheinkraft**, also eine Rechengröße ohne Verursacher.

**Bild:** Stell dir eine Fahrgästin im Karussell vor und ihren Freund, der am Boden daneben steht und
zuschaut. Beide beschreiben dieselbe Fahrt, aber jeder aus seiner Sicht.

### Der Blick von außen: Es gibt nur eine Kraft nach innen

Der Freund steht auf dem Boden, also in einem **Inertialsystem** (einem Bezugssystem, in dem der
Trägheitssatz gilt, siehe [Relativbewegung und Inertialsysteme](/lernen/physik1/kinematik/relativbewegung-und-inertialsysteme)).
Er sieht: Die Fahrgästin läuft im Kreis. Nach dem Trägheitssatz würde sie geradeaus weiterfahren, wenn
nichts sie daran hindert. Die Lehne des Sitzes drückt sie aber ständig nach innen und zwingt sie auf die
Kreisbahn. Diese Kraft der Lehne ist die Zentripetalkraft. Eine Kraft nach außen gibt es für ihn nicht.

```plot
x: [-1.5, 1.9]
y: [-1.3, 1.5]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
vektoren:
  - { von: [1, 0], nach: [0.35, 0], label: "F_Lehne", farbe: 1 }
  - { von: [1, 0], nach: [1, 0.8], label: "v", farbe: 0 }
punkte:
  - { x: 1, y: 0, label: "Fahrgästin" }
  - { x: 0, y: 0, label: "Achse" }
beschriftung: "Blick von außen (Inertialsystem), von oben gesehen. Waagrecht wirkt auf die Fahrgästin nur die Kraft der Lehne (orange), sie zeigt zur Achse und ist die Zentripetalkraft. Der blaue Pfeil ist die Geschwindigkeit, keine Kraft. Eine Kraft nach außen kommt nicht vor."
```

Und warum fühlt sie sich nach außen gedrückt? Weil sie **träge** ist. Ihr Körper will geradeaus, die Lehne
lenkt ihn ständig um. Sie presst sich deshalb gegen die Lehne. Das Gefühl „nach außen gedrückt“ ist in
Wahrheit das Gefühl „die Lehne drückt mich nach innen“.

```aufgabe
id: p6-5-check-aussen
art: check
titel: "Kurz geprüft: Welche Kraft sieht der Freund am Boden?"
niveau: 1
angabe: |
  Der Freund am Boden zeichnet das Freikörperbild der Fahrgästin (waagrechte Kräfte, von oben gesehen). Was zeichnet er?
teile:
  - typ: auswahl
    optionen:
      - "nur die Kraft der Lehne, zur Achse hin"
      - "die Kraft der Lehne nach innen und eine gleich große Kraft nach außen"
      - "nur eine Kraft nach außen"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Dann wäre die Summe null, und die Fahrgästin würde geradeaus fahren. Von außen gibt es keine Kraft nach außen.
      - wert: 2
        meldung: Eine Kraft nach außen übt niemand aus. Für eine Kreisbahn braucht es eine Kraft nach innen.
hinweise:
  - Welcher Körper berührt die Fahrgästin waagrecht? Und was braucht eine Kreisbahn?
loesung: |
  Waagrecht berührt sie nur die Lehne, und die drückt nach innen.
  ---
  Diese eine Kraft ist nicht ausgeglichen und hält sie auf der Kreisbahn. Eine Kraft nach außen kommt im Inertialsystem nicht vor.
```

### Der Blick von innen: die Zentrifugalkraft

Die Fahrgästin beschreibt die Fahrt aus ihrem Sitz. In ihrem Bezugssystem dreht sich die Welt, und sie
selbst **ruht**. Dieses System ist beschleunigt, also kein Inertialsystem. Trotzdem spürt sie die Kraft der
Lehne nach innen. Damit sie ruhen kann, muss eine gleich große Kraft nach außen wirken. Sie führt deshalb
eine Scheinkraft ein, so wie man es im bremsenden Bus mit der Trägheitskraft tut.

:::definition[Zentrifugalkraft]
Wer die Bewegung in einem **mitrotierenden** Bezugssystem beschreibt, rechnet auf jeden Körper mit einer
nach außen gerichteten Scheinkraft, der **Zentrifugalkraft** (auch Fliehkraft):
$$F_{zf} = m\,\omega^2 r = \frac{m v^2}{r}.$$
Dabei ist $m$ die Masse des Körpers, $r$ sein Abstand von der Drehachse und $\omega$ die
Winkelgeschwindigkeit des Bezugssystems. Sie ist eine **Scheinkraft**: Es gibt keinen Körper, der sie ausübt,
und deshalb auch keinen Wechselwirkungspartner im Sinn von actio gleich reactio. Im Inertialsystem kommt sie
nicht vor.

**Beispiel:** Im mitrotierenden System eines Karussells ruht ein Kind. Die Lehne drückt nach innen, die
Zentrifugalkraft zeigt nach außen, beide sind gleich groß.

**Kein Beispiel:** Vom Boden aus gesehen wirkt auf das Kind keine Zentrifugalkraft. Die Lehne drückt nach
innen, und genau deshalb fährt das Kind im Kreis statt geradeaus.
:::

```plot
x: [-1.5, 2.1]
y: [-1.3, 1.3]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
vektoren:
  - { von: [1, 0], nach: [0.35, 0], label: "F_Lehne", farbe: 1 }
  - { von: [1, 0], nach: [1.65, 0], label: "F_zf (Scheinkraft)", farbe: 4 }
punkte:
  - { x: 1, y: 0, label: "ruht" }
  - { x: 0, y: 0, label: "Achse" }
beschriftung: "Blick von innen (mitrotierendes System). Die Fahrgästin ruht. Neben der echten Kraft der Lehne (orange) rechnet sie mit der Zentrifugalkraft (ocker) nach außen. Beide sind gleich groß, die Summe ist null. Die Zentrifugalkraft hat keinen Verursacher und steht nur in diesem Bild."
```

**In Worten zurückübersetzt:** Von außen gilt „echte Kräfte ergeben zusammen $m v^2/r$ nach innen“. Von innen
gilt „echte Kräfte plus Zentrifugalkraft ergeben null“. Das sind zwei Schreibweisen derselben Gleichung.
Beide liefern dieselben Zahlen.

**Das typische Missverständnis:** „Die Zentrifugalkraft ist die Gegenkraft zur Zentripetalkraft.“ Das ist
falsch. Wechselwirkungspartner wirken nach dem dritten Axiom immer auf **verschiedene** Körper (siehe
[Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf)).
Der Partner der Kraft der Lehne auf die Fahrgästin ist die Kraft der Fahrgästin auf die Lehne. Die
Zentrifugalkraft dagegen wirkt auf die Fahrgästin selbst und hat gar keinen Partner.

```aufgabe
id: p6-5-check-partner
art: check
titel: "Kurz geprüft: der Partner der Lehnenkraft"
niveau: 1
angabe: |
  Die Lehne drückt die Fahrgästin nach innen. Welche Kraft ist der Wechselwirkungspartner dieser Kraft?
teile:
  - typ: auswahl
    optionen:
      - "die Zentrifugalkraft auf die Fahrgästin"
      - "die Kraft, mit der die Fahrgästin nach außen auf die Lehne drückt"
      - "die Gewichtskraft der Fahrgästin"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Partner wirken auf **verschiedene** Körper. Die Zentrifugalkraft wirkt auf die Fahrgästin selbst und hat keinen Verursacher.
      - wert: 2
        meldung: Die Gewichtskraft übt die Erde aus, sie zeigt nach unten. Der Partner muss von der Fahrgästin auf die Lehne wirken.
hinweise:
  - 'Actio gleich reactio: Wenn A auf B wirkt, wirkt B auf A.'
loesung: |
  Die Lehne (A) drückt auf die Fahrgästin (B). Der Partner ist die Kraft von B auf A.
  ---
  Also drückt die Fahrgästin mit gleich großer Kraft nach außen auf die Lehne. Diese Kraft wirkt auf die Lehne, nicht auf sie selbst.
```

:::intuition[Der Echtheitstest]
Frag bei jeder Kraft: **Welcher Körper übt sie aus?** Die Gewichtskraft übt die Erde aus, die Seilkraft das
Seil, die Reibung die Straße. Für die Fliehkraft findest du keinen Verursacher. Sie entsteht nur dadurch,
dass du dich in einem beschleunigten System als ruhend betrachtest.
:::

:::beispiel[Dieselbe Karussellfahrt, zweimal gerechnet]
Eine Fahrgästin ($50\,\text{kg}$) sitzt $4{,}0\,\text{m}$ von der Achse entfernt. Das Karussell dreht sich in
$5{,}0\,\text{s}$ einmal. Wie stark drückt die Lehne?

**Schritt 1, Winkelgeschwindigkeit:** $\omega = 2\pi/5{,}0\,\text{s} = 1{,}257\,\text{s}^{-1}$.

**Schritt 2, von außen:** Die Kraft der Lehne ist die einzige waagrechte Kraft und muss die
Zentripetalkraft liefern: $F_{\text{Lehne}} = m\omega^2 r = 50\,\text{kg}\cdot(1{,}257\,\text{s}^{-1})^2\cdot 4{,}0\,\text{m} = 316\,\text{N}$.

**Schritt 3, von innen:** Die Fahrgästin ruht, also ist die Summe null:
$F_{\text{Lehne}} - F_{zf} = 0$ mit $F_{zf} = m\omega^2 r = 316\,\text{N}$. Also wieder $F_{\text{Lehne}} = 316\,\text{N}$.

**Deutung:** Beide Wege geben dasselbe Ergebnis. Die Lehne drückt mit fast zwei Dritteln der Gewichtskraft
($491\,\text{N}$) nach innen.
:::

### Ein Gedankenexperiment: der Ball in der rotierenden Raumstation

In vielen Science-Fiction-Filmen dreht sich eine ringförmige Raumstation, damit die Besatzung „Schwerkraft“
spürt. Die Astronauten stehen an der Außenwand, die Füße außen, der Kopf zur Achse. Ein Beobachter draußen
im All (Inertialsystem) sieht: Die Wand drückt die Astronauten nach innen und zwingt sie auf die Kreisbahn.
Die Astronauten spüren diesen Druck an den Fußsohlen wie ein Gewicht.

Jetzt lässt ein Astronaut einen Ball los. Der Beobachter draußen sieht, wie der Ball **geradeaus** weiterfliegt,
tangential, mit der Geschwindigkeit, die er beim Loslassen hatte. Er fliegt, bis die gekrümmte Wand ihm in den
Weg kommt. Der Astronaut sieht den Ball dagegen „zu Boden fallen“, also nach außen. Er landet aber nicht genau
unter der Hand, sondern ein Stück entgegen der Drehrichtung. Für diese seitliche Ablenkung braucht man im
rotierenden System eine zweite Scheinkraft, die **Corioliskraft**.

:::beispiel[Künstliche Schwerkraft in einer Raumstation]
Eine ringförmige Raumstation hat den Radius $100\,\text{m}$. Wie schnell muss sie sich drehen, damit die
Astronauten an der Außenwand dieselbe Normalkraft spüren wie auf der Erde?

**Schritt 1, Ansatz:** Von außen muss die Wand die Zentripetalkraft liefern. Sie soll so groß sein wie die
Gewichtskraft auf der Erde: $m\omega^2 r = m g$, also $\omega = \sqrt{g/r}$.

**Schritt 2, Einsetzen:** $\omega = \sqrt{\dfrac{9{,}81\,\text{m/s}^2}{100\,\text{m}}} = 0{,}313\,\text{s}^{-1}$.

**Schritt 3, Umlaufzeit:** $T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{0{,}313\,\text{s}^{-1}} = 20{,}1\,\text{s}$, also
etwa $3$ Umdrehungen pro Minute.

**Deutung:** Die Masse kürzt sich. Jeder Astronaut spürt sein gewohntes „Gewicht“, egal wie schwer er ist.
Am Kopf, der näher an der Achse ist, wäre es etwas weniger.
:::

### Corioliskraft und die Ablenkregel auf der Erde

Auch die Erde ist ein rotierendes Bezugssystem, denn sie dreht sich einmal am Tag. Die Zentrifugalkraft der
Erddrehung ist klein: Am Äquator macht sie nur etwa $0{,}3\,\%$ der Gewichtskraft aus. Sie reicht aber, um die
Erde am Äquator etwas abzuplatten.

Wichtiger für das Wetter ist die Corioliskraft. Man kann ihre Wirkung mit der Kreisbewegung verstehen. Jeder
Punkt der Erde läuft auf seinem Breitenkreis nach Osten. Am Äquator ist der Kreis am größten, dort sind es
$463\,\text{m/s}$. Weiter nördlich ist der Kreis kleiner, auf $60^\circ$ Breite sind es nur noch $232\,\text{m/s}$.

Strömt Luft vom Äquator nach Norden, nimmt sie ihren großen Schwung nach Osten mit. Sie kommt über Boden an, der
sich langsamer nach Osten bewegt. Sie eilt dem Boden also nach Osten voraus. Von der Erde aus gesehen wird sie
nach **rechts** abgelenkt. Für Bewegungen in andere Richtungen gilt dasselbe Ergebnis.

:::merke[Ablenkregel der Corioliskraft]
Auf der **Nordhalbkugel** werden bewegte Körper, von der Erde aus gesehen, nach **rechts** abgelenkt, auf der
Südhalbkugel nach links. Am Äquator verschwindet die Ablenkung für waagrechte Bewegungen. Die Corioliskraft ist eine
Scheinkraft des rotierenden Systems Erde. Von außen betrachtet bewegt sich der Körper einfach weiter, und die Erde
dreht sich unter ihm weg.
:::

```aufgabe
id: p6-5-check-sued
art: check
titel: "Kurz geprüft: Ablenkung auf der Südhalbkugel"
niveau: 1
angabe: |
  In Australien (Südhalbkugel) strömt Luft nach Norden. Wohin wird sie, von der Erde aus gesehen, abgelenkt?
teile:
  - typ: auswahl
    optionen:
      - "nach links, also nach Westen"
      - "nach rechts, also nach Osten"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Nach rechts gilt auf der Nordhalbkugel. Auf der Südhalbkugel wird nach links abgelenkt.
hinweise:
  - 'Ablenkregel: Nordhalbkugel rechts, Südhalbkugel links.'
loesung: |
  Auf der Südhalbkugel lenkt die Corioliskraft nach links ab.
  ---
  Wer nach Norden blickt, hat Westen links. Die Luft wird nach Westen abgelenkt.
```

Deshalb strömt die Luft nicht geradewegs in ein Tiefdruckgebiet hinein, sondern wird abgelenkt und wirbelt auf
der Nordhalbkugel gegen den Uhrzeigersinn. Mehr dazu im Kapitel Hauptsätze, Wärmekraftmaschinen und Meteorologie, Lektion
[Hoch, Tief, Wind, Fronten und Treibhauseffekt](/lernen/physik1/hauptsaetze-waermekraftmaschinen/hoch-tief-wind-fronten-und-treibhauseffekt).
Für eine Badewanne ist die Corioliskraft dagegen viel zu schwach. Ihr Abfluss dreht sich je nach Form und
Restströmung mal so, mal so.

:::achtung[Fehler: Zentripetal- und Zentrifugalkraft im selben Bild]
Ein Kind ($40\,\text{kg}$) sitzt im Karussell $3{,}0\,\text{m}$ von der Achse, $\omega = 1{,}5\,\text{s}^{-1}$.
Wie stark drückt der Sitz?

Falsch gerechnet (vom Boden aus, aber mit Fliehkraft): „Sitzkraft nach innen, Fliehkraft nach außen, die Summe ist
die Zentripetalkraft: $F_{\text{Sitz}} - m\omega^2 r = m\omega^2 r$, also $F_{\text{Sitz}} = 2\cdot 270\,\text{N} = 540\,\text{N}$.“

Hier sind beide Beschreibungen vermischt, die Beschleunigung ist doppelt gezählt. Von außen gilt ohne Fliehkraft
$F_{\text{Sitz}} = m\omega^2 r$. Von innen gilt mit Fliehkraft $F_{\text{Sitz}} - m\omega^2 r = 0$. Beides ergibt
$F_{\text{Sitz}} = 40\,\text{kg}\cdot(1{,}5\,\text{s}^{-1})^2\cdot 3{,}0\,\text{m} = 270\,\text{N}$.
:::

:::achtung[Fehler: die Fliehkraft als Gegenkraft der Seilkraft]
Ein Stein wird an einer Schnur mit der Seilkraft $4{,}0\,\text{N}$ im Kreis geschleudert. Jemand argumentiert:
„Nach actio gleich reactio wirkt auf den Stein eine Gegenkraft von $4{,}0\,\text{N}$ nach außen, die Fliehkraft.
Die Summe der Kräfte auf den Stein ist also null.“

Daraus würde folgen, dass sich der Stein geradlinig gleichförmig bewegt. Er fliegt aber im Kreis, also stimmt
etwas nicht. Der Fehler: Die Gegenkraft zur Seilkraft auf den Stein ist die Kraft des **Steins auf die Schnur**,
und die wirkt auf die Schnur und die Hand. Auf den Stein selbst wirkt waagrecht nur die Seilkraft von
$4{,}0\,\text{N}$ nach innen. Sie ist nicht ausgeglichen, deshalb ist der Stein zur Mitte beschleunigt.
:::

```reflexion
frage: Du sitzt im Auto, das schnell eine Linkskurve fährt, und fühlst dich nach rechts gegen die Tür gedrückt. Beschreibe die Situation einmal so, wie es eine Person am Straßenrand tut, und einmal so, wie du selbst sie erlebst.
antwort: |
  Von außen (Inertialsystem): Mein Körper will nach dem Trägheitssatz geradeaus weiter. Das Auto biegt nach links ab
  und bewegt sich damit unter mir weg nach links. Die Tür kommt mir entgegen und drückt mich nach links, also zur
  Kurvenmitte. Diese Kraft der Tür ist die Zentripetalkraft. Eine Kraft nach rechts gibt es nicht.
  Von innen (mitbewegtes, beschleunigtes System): Ich ruhe im Auto. Die Tür drückt nach links, also muss eine gleich
  große Kraft nach rechts wirken. Das ist die Zentrifugalkraft, eine Scheinkraft ohne Verursacher. Beide Beschreibungen
  ergeben dieselbe Kraft der Tür.
```

### Aufgaben zur Zentrifugalkraft

```aufgabe
id: p6-zentrifugal-auswahl
titel: Echt oder Schein?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Aussagen über die Zentrifugalkraft sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Sie tritt nur in einem rotierenden, also beschleunigten Bezugssystem auf."
      - "Sie ist die Reaktionskraft zur Zentripetalkraft."
      - "Reißt die Schnur eines kreisenden Steins, fliegt er wegen ihr radial nach außen weg."
      - "Ein Beobachter im Inertialsystem braucht sie nicht, um die Bewegung zu erklären."
      - "Für sie gibt es keinen Körper, der sie ausübt."
    richtig: [0, 3, 4]
    fehler:
      - wert: [0, 1, 3, 4]
        meldung: Aussage 2 stimmt nicht. Reaktionskräfte wirken auf einen **anderen** Körper. Die Zentrifugalkraft wirkt auf denselben Körper wie die Zentripetalkraft und hat überhaupt keinen Partner.
      - wert: [0, 2, 3, 4]
        meldung: Aussage 3 stimmt nicht. Nach dem Reißen wirkt waagrecht keine Kraft mehr, der Stein fliegt tangential geradeaus.
hinweise:
  - Überlege bei jeder Aussage, wer die Kraft ausübt und auf welchen Körper die Reaktionskraft wirkt.
loesung: |
  **Richtig sind 1, 4 und 5:** Die Zentrifugalkraft ist eine Scheinkraft des rotierenden Systems. Im Inertialsystem kommt man ohne sie aus, und kein Körper übt sie aus.
  ---
  **Aussage 2 ist falsch:** Actio und reactio wirken auf verschiedene Körper. Die Reaktion zur Kraft der Schnur auf den Stein ist die Kraft des Steins auf die Schnur.
  ---
  **Aussage 3 ist falsch:** Reißt die Schnur, fliegt der Stein tangential weiter (Trägheitssatz), nicht radial nach außen.
```

```aufgabe
id: p6-5-fliehkraft-auto
titel: Die Fliehkraft im Auto
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Auto fährt mit $15\,\text{m/s}$ durch eine Kurve mit Radius $40\,\text{m}$. Ein Fahrgast ($70\,\text{kg}$) beschreibt die Fahrt aus seinem Sitz. Mit welcher Zentrifugalkraft rechnet er (in N, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "70*15^2/40"
    einheit: "N"
    anzeige: '394'
    fehler:
      - wert: "70*15/40"
        meldung: Die Geschwindigkeit steht im Quadrat, $F_{zf} = m v^2/r$.
      - wert: "70*9.81"
        meldung: Das ist die Gewichtskraft des Fahrgasts. Die Zentrifugalkraft hängt von Geschwindigkeit und Kurvenradius ab.
hinweise:
  - 'Die Zentrifugalkraft hat denselben Betrag wie die nötige Zentripetalkraft, $m v^2/r$, zeigt aber nach außen.'
loesung: |
  **Ansatz:** Im mitbewegten System ruht der Fahrgast. Die Zentrifugalkraft hat den Betrag $F_{zf} = m v^2/r$ und zeigt nach außen.
  ---
  $F_{zf} = \dfrac{70\,\text{kg}\cdot(15\,\text{m/s})^2}{40\,\text{m}} = \dfrac{15\,750\,\text{kg}\cdot\text{m}^2/\text{s}^2}{40\,\text{m}} = 394\,\text{N}$.
  ---
  Von außen gesehen ist das genau die Kraft, mit der Sitz und Gurt ihn nach innen drücken müssen.
```

```aufgabe
id: p6-5-coriolis-richtung
titel: Wohin lenkt die Corioliskraft ab?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Über Österreich (Nordhalbkugel) strömt Luft nach Süden. In welche Richtung wird sie, von der Erde aus gesehen, durch die Corioliskraft abgelenkt?
teile:
  - typ: auswahl
    optionen:
      - "nach rechts, also nach Westen"
      - "nach links, also nach Osten"
      - "gar nicht, die Corioliskraft wirkt nur auf Nord-Süd-Bewegungen am Äquator"
      - "nach oben, weg von der Erdoberfläche"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Nach links wird auf der **Südhalbkugel** abgelenkt. Wer nach Süden blickt, hat Westen rechts von sich.
      - wert: 2
        meldung: Am Äquator verschwindet die Ablenkung waagrechter Bewegungen gerade. In mittleren Breiten ist sie deutlich.
      - wert: 3
        meldung: Für das Wetter zählt die Ablenkung zur Seite. Auf der Nordhalbkugel ist das immer nach rechts.
hinweise:
  - 'Ablenkregel: Nordhalbkugel nach rechts. Stell dich in Gedanken mit Blick nach Süden hin: Wo ist rechts?'
loesung: |
  **Regel:** Auf der Nordhalbkugel werden bewegte Körper nach rechts abgelenkt, von der Bewegungsrichtung aus gesehen.
  ---
  **Richtung:** Wer nach Süden blickt, hat Westen zu seiner Rechten. Die Luft wird also nach Westen abgelenkt.
```

```aufgabe
id: p6-5-ball-loslassen
titel: Ein Ball im Karussell
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Auf einer schnell drehenden, glatten Drehscheibe sitzt ein Kind am Rand und rollt einen Ball **genau zur Achse hin** los. Wie sieht ein Beobachter, der über der Scheibe an der Decke hängt (Inertialsystem), die Bahn des Balls?
teile:
  - typ: auswahl
    optionen:
      - "als gerade Linie, die an der Achse vorbeiführt, weil der Ball zusätzlich den Schwung der Drehung mitnimmt"
      - "als gerade Linie genau durch die Achse"
      - "als gekrümmte Bahn, weil die Zentrifugalkraft ihn nach außen zieht"
      - "als Spirale, die sich um die Achse herumwindet"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Beim Loslassen bewegt sich das Kind mit der Scheibe tangential. Diese Geschwindigkeit hat auch der Ball. Zusammen mit dem Stoß zur Achse ergibt das eine schräge Gerade, die an der Achse vorbeiführt.
      - wert: 2
        meldung: Von außen gibt es keine Zentrifugalkraft. Auf den rollenden Ball wirkt waagrecht keine Kraft, also läuft er geradeaus.
      - wert: 3
        meldung: Eine Spirale braucht eine Kraft zur Seite. Von außen wirkt waagrecht keine Kraft, also ist die Bahn eine Gerade.
hinweise:
  - Welche Geschwindigkeit hat der Ball im Moment des Loslassens? Er bewegt sich ja mit dem Kind im Kreis.
  - Welche waagrechte Kraft wirkt danach auf den glatt rollenden Ball?
loesung: |
  **Anfangsgeschwindigkeit:** Der Ball hat beim Loslassen zwei Anteile: den Stoß zur Achse und die tangentiale Geschwindigkeit des Scheibenrandes.
  ---
  **Kräfte:** Auf der glatten Scheibe wirkt waagrecht keine Kraft. Von außen gesehen läuft der Ball deshalb auf einer geraden Linie, schräg zur Achse, und verfehlt sie.
  ---
  **Blick von innen:** Das Kind sieht den Ball auf einer gekrümmten Bahn zur Seite ausweichen. Diese Krümmung erklärt es mit der Corioliskraft, einer Scheinkraft des rotierenden Systems.
```

```aufgabe
id: p6-aequator-g
titel: Schwerelos am Äquator?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Wie schnell müsste sich die Erde (Radius $6{,}37\cdot 10^6\,\text{m}$, $g = 9{,}81\,\text{m/s}^2$) drehen, damit ein Mensch am Äquator schwerelos wäre, also gar nicht mehr auf den Boden drückt?

  a) Welche Winkelgeschwindigkeit wäre nötig (in $\text{s}^{-1}$)?

  b) Wie lange würde dann ein Tag dauern (in Minuten, drei signifikante Stellen)?
teile:
  - typ: zahl
    label: a) Winkelgeschwindigkeit
    loesung: "sqrt(9.81/6.37e6)"
    einheit: "1/s"
    anzeige: '1{,}24\cdot 10^{-3}'
    fehler:
      - wert: "9.81/6.37e6"
        meldung: Das ist $\omega^2$. Zieh noch die Wurzel.
      - wert: "2*pi/86400"
        meldung: Das ist die heutige Winkelgeschwindigkeit der Erde. Gesucht ist die, bei der die ganze Gewichtskraft für die Kreisbahn gebraucht wird.
  - typ: zahl
    label: b) Tageslänge
    loesung: "2*pi/sqrt(9.81/6.37e6)/60"
    einheit: "min"
    anzeige: '84{,}4'
    fehler:
      - wert: "2*pi/sqrt(9.81/6.37e6)"
        meldung: Das ist die Tageslänge in Sekunden. Teile durch $60$ für Minuten.
hinweise:
  - 'Schwerelos heißt: Der Boden muss nicht mehr drücken. Die Gravitation allein ist dann genau die nötige Zentripetalkraft, $m g = m\omega^2 R$.'
  - 'Daraus $\omega = \sqrt{g/R}$ und $T = 2\pi/\omega$.'
loesung: |
  **Ansatz:** Von außen gesehen: Die Gravitation $m g$ muss allein die Zentripetalkraft $m\omega^2 R$ liefern, dann drückt der Boden nicht mehr. Aus $m g = m\omega^2 R$ folgt $\omega = \sqrt{g/R}$.
  ---
  **a)** $\omega = \sqrt{\dfrac{9{,}81\,\text{m/s}^2}{6{,}37\cdot 10^{6}\,\text{m}}} = 1{,}24\cdot 10^{-3}\,\text{s}^{-1}$, gut $17$-mal so viel wie heute.
  ---
  **b)** $T = \dfrac{2\pi}{\omega} = \dfrac{2\pi}{1{,}24\cdot 10^{-3}\,\text{s}^{-1}} = 5063\,\text{s} = 84{,}4\,\text{min}$.
  ---
  **Deutung:** Genau so lange braucht ein Satellit knapp über der Erdoberfläche für einen Umlauf. Am Äquator würde man dann wie ein Satellit mit der Erde „mitfliegen“. Die Lektion [Satelliten und Schwerelosigkeit](/lernen/physik1/kreisbewegung-gravitation/satelliten-und-schwerelosigkeit) erklärt, warum.
```

```aufgabe
id: p6-5-raumstation
titel: Wie schnell muss sich die Raumstation drehen?
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine geplante Raumstation hat die Form eines Rades mit Radius $250\,\text{m}$. An der Außenwand sollen die Astronauten $80\,\%$ der Erdschwere spüren, also eine Normalkraft von $0{,}8\,m g$ mit $g = 9{,}81\,\text{m/s}^2$.

  a) Welche Umlaufzeit braucht die Station (in s, drei signifikante Stellen)?

  b) Wie viele Umdrehungen pro Minute sind das?
teile:
  - typ: zahl
    label: a) Umlaufzeit
    loesung: "2*pi/sqrt(0.8*9.81/250)"
    einheit: "s"
    anzeige: '35{,}5'
    fehler:
      - wert: "2*pi/sqrt(9.81/250)"
        meldung: Damit hättest du volle Erdschwere berechnet. Gefordert sind nur $80\,\%$, also $a_z = 0{,}8\,g$.
      - wert: "sqrt(0.8*9.81/250)"
        meldung: Das ist die Winkelgeschwindigkeit $\omega$. Die Umlaufzeit ist $T = 2\pi/\omega$.
  - typ: zahl
    label: b) Umdrehungen pro Minute
    loesung: "60/(2*pi/sqrt(0.8*9.81/250))"
    einheit: "1/min"
    anzeige: '1{,}69'
    fehler:
      - wert: "2*pi/sqrt(0.8*9.81/250)/60"
        meldung: Du hast die Umlaufzeit in Minuten berechnet. Umdrehungen pro Minute sind $60\,\text{s}$ geteilt durch die Umlaufzeit.
hinweise:
  - 'Die Wand liefert die Zentripetalkraft: $m\omega^2 r = 0{,}8\,m g$.'
  - '$\omega = \sqrt{0{,}8\,g/r}$, dann $T = 2\pi/\omega$ und Umdrehungen pro Minute $= 60\,\text{s}/T$.'
gefuehrt:
  - text: Welche Zentripetalbeschleunigung muss die Wand erzeugen (in $\text{m/s}^2$)?
    teil: { typ: zahl, loesung: "0.8*9.81", einheit: "m/s²" }
    erklaerung: '$a_z = 0{,}8\cdot 9{,}81\,\text{m/s}^2 = 7{,}85\,\text{m/s}^2$.'
  - text: Welche Winkelgeschwindigkeit gehört dazu (in $\text{s}^{-1}$)?
    teil: { typ: zahl, loesung: "sqrt(0.8*9.81/250)", einheit: "1/s" }
    erklaerung: '$\omega = \sqrt{a_z/r} = \sqrt{7{,}85\,\text{m/s}^2 / 250\,\text{m}} = 0{,}177\,\text{s}^{-1}$.'
  - text: Wie lange dauert eine Umdrehung (in s)?
    teil: { typ: zahl, loesung: "2*pi/sqrt(0.8*9.81/250)", einheit: "s" }
    erklaerung: '$T = 2\pi/\omega = 2\pi/0{,}177\,\text{s}^{-1} = 35{,}5\,\text{s}$.'
  - text: Wie viele Umdrehungen pro Minute sind das?
    teil: { typ: zahl, loesung: "60/(2*pi/sqrt(0.8*9.81/250))", einheit: "1/min" }
    erklaerung: '$60\,\text{s} : 35{,}5\,\text{s} = 1{,}69$ Umdrehungen pro Minute.'
loesung: |
  **Ansatz:** Von außen betrachtet drückt die Wand die Astronauten nach innen und liefert die Zentripetalkraft. Sie soll $0{,}8\,m g$ betragen: $m\omega^2 r = 0{,}8\,m g$. Die Masse kürzt sich.
  ---
  **Winkelgeschwindigkeit:** $\omega = \sqrt{\dfrac{0{,}8\cdot 9{,}81\,\text{m/s}^2}{250\,\text{m}}} = \sqrt{0{,}0314\,\text{s}^{-2}} = 0{,}177\,\text{s}^{-1}$.
  ---
  **a)** $T = \dfrac{2\pi}{0{,}177\,\text{s}^{-1}} = 35{,}5\,\text{s}$.
  ---
  **b)** $\dfrac{60\,\text{s}}{35{,}5\,\text{s}} = 1{,}69$ Umdrehungen pro Minute. So langsam ist das Drehen kaum zu spüren. Aus Sicht der Astronauten ist die Normalkraft der Wand gleich der Zentrifugalkraft $0{,}8\,m g$.
```

```aufgabe
id: p6-5-breitenkreise
titel: Warum wird Luft nach rechts abgelenkt?
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Erde (Radius $6370\,\text{km}$) dreht sich in $86\,400\,\text{s}$ einmal. Ein Luftpaket strömt vom Äquator weit nach Norden bis auf $50^\circ$ Breite und behält dabei näherungsweise seine Ostgeschwindigkeit. Um wie viel ist es dort schneller nach Osten unterwegs als der Boden darunter (in m/s, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "2*pi*6.37e6/86400*(1 - cos(inRad(50)))"
    einheit: "m/s"
    anzeige: '165'
    fehler:
      - wert: "2*pi*6.37e6/86400*cos(inRad(50))"
        meldung: Das ist die Ostgeschwindigkeit des Bodens auf $50^\circ$ Breite. Gefragt ist der **Unterschied** zur Geschwindigkeit, die die Luft vom Äquator mitbringt.
      - wert: "2*pi*6.37e6/86400*(1 - sin(inRad(50)))"
        meldung: Der Radius des Breitenkreises ist $R\cos\varphi$, nicht $R\sin\varphi$. Er ist am Äquator am größten.
hinweise:
  - 'Ostgeschwindigkeit am Äquator: $v_0 = 2\pi R/T$. Auf der Breite $\varphi$ ist der Kreisradius $R\cos\varphi$.'
  - 'Der Unterschied ist $v_0 - v_0\cos 50^\circ$.'
loesung: |
  **Ansatz:** Jeder Punkt läuft auf seinem Breitenkreis nach Osten, mit $v = 2\pi R\cos\varphi/T$. Das Luftpaket bringt die Geschwindigkeit des Äquators mit.
  ---
  **Äquator:** $v_0 = \dfrac{2\pi\cdot 6{,}37\cdot 10^6\,\text{m}}{86\,400\,\text{s}} = 463\,\text{m/s}$. **Auf 50°:** $v = 463\,\text{m/s}\cdot\cos 50^\circ = 463\,\text{m/s}\cdot 0{,}643 = 298\,\text{m/s}$.
  ---
  **Unterschied:** $463\,\text{m/s} - 298\,\text{m/s} = 165\,\text{m/s}$. Die Luft eilt dem Boden nach Osten voraus.
  ---
  **Deutung:** Für jemanden auf der Erde, der nach Norden blickt, ist Osten rechts. Die Luft wird also nach rechts abgelenkt, wie es die Ablenkregel sagt. In Wirklichkeit bremsen Reibung und Druckkräfte die Luft, darum sind echte Winde viel langsamer.
```

```aufgabe
id: p6-5-zwei-sichten
titel: Das Kettenkarussell aus zwei Sichten
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Die Sitze eines Kettenkarussells laufen auf einem Kreis mit Radius $6{,}0\,\text{m}$. Eine Umdrehung dauert $5{,}0\,\text{s}$.

  a) Berechne den Winkel der Ketten gegen die Senkrechte (in Grad, drei signifikante Stellen). Rechne dabei im **mitrotierenden** System mit der Zentrifugalkraft.

  b) Erkläre, wie eine Person am Boden denselben Winkel begründet, ohne eine Zentrifugalkraft zu verwenden.
teile:
  - typ: zahl
    label: a) Winkel
    loesung: "inGrad(atan((2*pi/5.0)^2*6.0/9.81))"
    einheit: "°"
    anzeige: '44{,}0'
    fehler:
      - wert: "inGrad(atan(9.81/((2*pi/5.0)^2*6.0)))"
        meldung: Das ist der Winkel gegen die Waagrechte. Gegen die Senkrechte gilt $\tan\alpha = F_{zf}/(m g)$.
  - typ: text
    label: b) Begründung von außen
    muster: |
      Von außen wirken auf den Sitz nur die Gewichtskraft und die Kettenkraft. Der Sitz läuft im Kreis, also muss die Summe
      der beiden Kräfte waagrecht zur Achse zeigen und den Betrag $m\omega^2 r$ haben. Senkrecht trägt der Anteil
      $F_K\cos\alpha$ das Gewicht, waagrecht liefert $F_K\sin\alpha$ die Zentripetalkraft. Teilen ergibt dieselbe Gleichung
      $\tan\alpha = \omega^2 r/g$. Die Kette steht schräg, weil sie nicht nur tragen, sondern auch nach innen ziehen muss.
hinweise:
  - 'Im mitrotierenden System ruht der Sitz: Gewicht, Kettenkraft und Zentrifugalkraft $m\omega^2 r$ ergeben zusammen null.'
  - 'Die Kette muss die Summe aus Gewicht (nach unten) und Zentrifugalkraft (nach außen) ausgleichen. Daraus folgt $\tan\alpha = \dfrac{m\omega^2 r}{m g}$.'
loesung: |
  **Modell im rotierenden System:** Der Sitz ruht. Auf ihn wirken das Gewicht $m g$ nach unten, die Zentrifugalkraft $m\omega^2 r$ nach außen und die Kettenkraft. Die Kette muss genau der Summe der beiden anderen das Gleichgewicht halten.
  ---
  **Winkel:** Die Kette zeigt in Gegenrichtung zur Summe aus Gewicht und Fliehkraft. Also $\tan\alpha = \dfrac{m\omega^2 r}{m g} = \dfrac{\omega^2 r}{g}$.
  ---
  **a)** $\omega = 2\pi/5{,}0\,\text{s} = 1{,}257\,\text{s}^{-1}$. $\tan\alpha = \dfrac{(1{,}257\,\text{s}^{-1})^2\cdot 6{,}0\,\text{m}}{9{,}81\,\text{m/s}^2} = 0{,}966$, also $\alpha = 44{,}0^\circ$.
  ---
  **b)** Von außen gibt es keine Fliehkraft. Gewicht und Kettenkraft ergeben zusammen die Zentripetalkraft nach innen. Die Rechnung führt auf dieselbe Gleichung, siehe [Kurve, Looping und Karussell](/lernen/physik1/kreisbewegung-gravitation/kurve-looping-und-karussell). Beide Sichten sind richtig, solange man sie nicht mischt.
```

## Das Gravitationsgesetz

```aufgabe
id: p6-6-check
art: check
titel: "Vorwissen: mit Zehnerpotenzen multiplizieren"
niveau: 1
angabe: |
  Berechne $6{,}674\cdot 10^{-11}\cdot 10^{3}\cdot 10^{3}$. Gib das Ergebnis in Zehnerpotenzschreibweise an.
teile:
  - typ: zahl
    loesung: "6.674e-11*1e3*1e3"
    anzeige: '6{,}674\cdot 10^{-5}'
    fehler:
      - wert: "6.674e-11*1e9"
        meldung: Du hast die Hochzahlen multipliziert ($3\cdot 3 = 9$). Beim Multiplizieren von Potenzen derselben Basis werden die Hochzahlen **addiert**.
      - wert: "6.674e-17"
        meldung: Das Vorzeichen stimmt nicht. $-11 + 3 + 3 = -5$, nicht $-17$.
hinweise:
  - '$10^a\cdot 10^b = 10^{a+b}$.'
loesung: |
  Die Hochzahlen werden addiert: $10^{-11}\cdot 10^{3}\cdot 10^{3} = 10^{-11+3+3} = 10^{-5}$.
  ---
  Ergebnis: $6{,}674\cdot 10^{-5}$. Wiederholen: Mathematik, [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln).
```

Warum fällt ein Apfel vom Baum? Weil die Erde ihn anzieht. Warum fällt der Mond nicht? Bis ins 17. Jahrhundert
hielt man das für zwei völlig verschiedene Fragen. Für den Himmel galten andere Regeln als für die Erde.
Isaac Newton hatte den Gedanken, dass **eine einzige** Kraft beides erklärt.

### Der Weg zum Gesetz

Der Weg dorthin ist ein Lehrstück für die Arbeitsweise der Physik (siehe
[Wie Physik arbeitet](/lernen/physik1/groessen-einheiten-messen/wie-physik-arbeitet)). Das antike Weltbild des
Ptolemäus setzte die Erde in die Mitte und erklärte die Schleifen der Planeten mit Kreisen auf Kreisen. Kopernikus
setzte 1543 die Sonne in die Mitte. Tycho Brahe vermaß jahrzehntelang die Planetenpositionen mit bis dahin
unerreichter Genauigkeit. Johannes Kepler fand in diesen Daten drei Gesetze der Planetenbewegung (Lektion
[Die Keplerschen Gesetze](/lernen/physik1/kreisbewegung-gravitation/die-keplerschen-gesetze)). Newton zeigte
schließlich, dass ein einziges Kraftgesetz alle diese Beobachtungen erklärt.

:::beispiel[Newtons Mondrechnung]
Newton fragte sich: Reicht die Kraft, die den Apfel fallen lässt, bis zum Mond? Der Mond kreist im Abstand
$r = 3{,}84\cdot 10^8\,\text{m}$ in $T = 27{,}3$ Tagen um die Erde. Das sind etwa $60$ Erdradien.

**Schritt 1, Winkelgeschwindigkeit:** $T = 27{,}3\cdot 86\,400\,\text{s} = 2{,}36\cdot 10^6\,\text{s}$, also
$\omega = 2\pi/T = 2{,}66\cdot 10^{-6}\,\text{s}^{-1}$.

**Schritt 2, Zentripetalbeschleunigung des Mondes:** $a = \omega^2 r = (2{,}66\cdot 10^{-6}\,\text{s}^{-1})^2\cdot 3{,}84\cdot 10^8\,\text{m} = 0{,}00272\,\text{m/s}^2$.

**Schritt 3, Vergleich mit dem Apfel:** $\dfrac{g}{a} = \dfrac{9{,}81\,\text{m/s}^2}{0{,}00272\,\text{m/s}^2} = 3600$.

**Schritt 4, Deutung:** $3600 = 60^2$. Der Mond ist $60$-mal so weit vom Erdmittelpunkt entfernt wie der Apfel
und wird $60^2$-mal schwächer beschleunigt. Die Anziehung der Erde nimmt also mit dem **Quadrat des Abstands** ab.
Der Mond „fällt“ ständig zur Erde hin, nur eben $3600$-mal schwächer als der Apfel.
:::

:::satz[Newtonsches Gravitationsgesetz]
Zwei Massen $m_1$ und $m_2$ im Abstand $r$ ziehen sich gegenseitig an. Die Kraft hat den Betrag
$$F = G\,\frac{m_1\, m_2}{r^2}.$$
Dabei sind $m_1$ und $m_2$ die beiden Massen in kg und $r$ der Abstand in m. Bei Kugeln ist $r$ der Abstand der
**Mittelpunkte**. $G$ ist die **Gravitationskonstante**,
$$G = 6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2.$$
Die Kraft auf $m_1$ und die Kraft auf $m_2$ sind gleich groß und entgegengesetzt gerichtet (actio gleich reactio).
Jede zeigt zum anderen Körper hin.
:::

Was sagt die Formel in Worten? Doppelte Masse eines Körpers ergibt doppelte Kraft. Doppelter Abstand ergibt nur
ein Viertel der Kraft, dreifacher Abstand ein Neuntel. Diese Abnahme heißt **Abstandsquadratgesetz**.

```plot
x: [0, 4.2]
y: [0, 1.15]
achsen: { x: "Abstand in Vielfachen von r₀", y: "Kraft in Vielfachen von F₀" }
graphen:
  - { f: "1/x^2", von: 0.95, bis: 4.2, farbe: 0 }
punkte:
  - { x: 1, y: 1, label: "F₀" }
  - { x: 2, y: 0.25, label: "F₀/4" }
  - { x: 3, y: 0.1111, label: "F₀/9" }
  - { x: 4, y: 0.0625, label: "F₀/16" }
beschriftung: "Das Abstandsquadratgesetz. Beim Abstand r₀ ziehen sich zwei Körper mit F₀ an. Beim doppelten Abstand ist die Kraft nur noch ein Viertel, beim dreifachen ein Neuntel. Die Kurve wird nie null: Die Gravitation hat unbegrenzte Reichweite."
```

:::beispiel[Wie stark ziehen sich zwei Menschen an?]
Zwei Menschen mit $70\,\text{kg}$ und $60\,\text{kg}$ stehen so, dass ihre Schwerpunkte $1{,}0\,\text{m}$ voneinander
entfernt sind. Wir behandeln sie näherungsweise wie Kugeln.

**Schritt 1, Einsetzen:** $F = 6{,}674\cdot 10^{-11}\,\dfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{70\,\text{kg}\cdot 60\,\text{kg}}{(1{,}0\,\text{m})^2}$.

**Schritt 2, Einheiten:** $\dfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{\text{kg}\cdot\text{kg}}{\text{m}^2} = \text{N}$. ✓

**Schritt 3, Ergebnis:** $F = 6{,}674\cdot 10^{-11}\cdot 4200\,\text{N} = 2{,}8\cdot 10^{-7}\,\text{N}$.

**Deutung:** Das ist etwa die Gewichtskraft eines Staubkorns von $0{,}03\,\text{mg}$. Gravitation zwischen
Alltagsgegenständen ist winzig. Spürbar wird sie erst, wenn mindestens ein Körper riesig ist, etwa die Erde.
:::

**Eigenschaften der Gravitation.** Sie ist die schwächste der Grundkräfte, aber sie hat unbegrenzte Reichweite,
wirkt immer **anziehend** und lässt sich nicht abschirmen. Deshalb bestimmt sie den Aufbau von Planetensystemen und
Galaxien. Ein **Gegenbeispiel** ist die elektrische Kraft. Ihr Gesetz hat genau dieselbe Form, aber gleichnamige
Ladungen stoßen sich ab, und positive und negative Ladungen heben sich in großen Körpern fast auf (siehe
[Das Coulomb-Gesetz](/lernen/physik1/elektrostatik/das-coulomb-gesetz-die-kraft-zwischen-zwei-ladungen)).

**Die Erde wiegen.** Die erste Messung, aus der sich $G$ ergibt, gelang Henry Cavendish im Jahr 1798 mit einer **Drehwaage**: Zwei kleine
Bleikugeln hängen an einem dünnen Faden. Zwei große Bleikugeln ziehen sie an, und der Faden verdrillt sich ein
winziges Stück. Aus der Verdrillung folgt die Kraft und daraus $G$. Kennt man $G$, kann man aus $g = G M_E/R_E^2$
die Masse der Erde berechnen. Man sagte deshalb, Cavendish habe „die Erde gewogen“.

```aufgabe
id: p6-6-check-massen
art: check
titel: "Vorhersage: beide Massen verdoppelt"
niveau: 1
angabe: |
  Zwei Kugeln ziehen sich an. Man ersetzt **beide** durch doppelt so schwere Kugeln, der Abstand bleibt gleich. Um welchen Faktor ändert sich die Kraft?
teile:
  - typ: zahl
    loesung: "2*2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: Im Gesetz steht das **Produkt** $m_1 m_2$. Beide Faktoren verdoppeln sich, also $2\cdot 2 = 4$.
hinweise:
  - 'Setze $2m_1$ und $2m_2$ in $F = G m_1 m_2/r^2$ ein.'
loesung: |
  $F' = G\dfrac{2m_1\cdot 2m_2}{r^2} = 4\,G\dfrac{m_1 m_2}{r^2}$.
  ---
  Die Kraft wird viermal so groß.
```

:::merke[So rechnest du mit dem Gravitationsgesetz]
1. Alle Größen in SI: Massen in kg, Abstand in m.
2. Der Abstand $r$ wird zwischen den **Mittelpunkten** gemessen, bei Satelliten also $r = R + h$.
3. Zahlenteile und Zehnerpotenzen getrennt rechnen, die Einheit am Ende kontrollieren.
4. Für „Was passiert, wenn …?“-Fragen: Faktoren einsetzen, der Abstand wirkt im Quadrat.
:::

:::achtung[Fehler: die Höhe statt des Abstands vom Mittelpunkt]
Wie stark zieht die Erde ($5{,}97\cdot 10^{24}\,\text{kg}$, $R = 6{,}37\cdot 10^6\,\text{m}$) einen Satelliten
($1000\,\text{kg}$) an, der $400\,\text{km}$ über der Oberfläche fliegt?

Falsch gerechnet: $F = G\dfrac{5{,}97\cdot 10^{24}\cdot 1000}{(4{,}00\cdot 10^{5})^2}\,\text{N} = 2{,}49\cdot 10^6\,\text{N}$.

Das wäre $250$-mal mehr als am Erdboden, unmöglich. Im Gesetz steht der Abstand der **Mittelpunkte**:
$r = 6370\,\text{km} + 400\,\text{km} = 6{,}77\cdot 10^6\,\text{m}$. Richtig ist $F = 8{,}69\cdot 10^3\,\text{N}$,
etwas weniger als das Gewicht am Boden ($9{,}81\cdot 10^3\,\text{N}$).
:::

:::achtung[Fehler: das Quadrat beim Abstand vergessen]
Zwei Kugeln ziehen sich im Abstand $1{,}0\,\text{m}$ mit $8{,}0\cdot 10^{-7}\,\text{N}$ an. Wie groß ist die Kraft
im Abstand $2{,}0\,\text{m}$?

Falsch gerechnet: „Doppelter Abstand, halbe Kraft: $4{,}0\cdot 10^{-7}\,\text{N}$.“

Der Abstand steht im Quadrat im Nenner. Doppelter Abstand teilt die Kraft durch $2^2 = 4$. Richtig ist
$F = 8{,}0\cdot 10^{-7}\,\text{N} : 4 = 2{,}0\cdot 10^{-7}\,\text{N}$.
:::

```reflexion
frage: Die Erde zieht einen fallenden Apfel mit 1 N an. Nach actio gleich reactio zieht der Apfel die Erde ebenfalls mit 1 N an. Warum merkt man davon nichts? Erkläre mit dem Grundgesetz.
antwort: |
  Die beiden Kräfte sind tatsächlich gleich groß, aber sie wirken auf sehr verschiedene Massen. Nach dem Grundgesetz
  ist die Beschleunigung Kraft durch Masse. Der Apfel ($0{,}1\,\text{kg}$) wird mit etwa $10\,\text{m/s}^2$
  beschleunigt. Die Erde ($6\cdot 10^{24}\,\text{kg}$) wird mit $1\,\text{N}/(6\cdot 10^{24}\,\text{kg}) \approx 2\cdot 10^{-25}\,\text{m/s}^2$
  beschleunigt. Diese Bewegung ist viel zu klein, um sie je zu messen. Gleiche Kraft heißt nicht gleiche Wirkung.
```

### Aufgaben zum Gravitationsgesetz

```aufgabe
id: p6-gravitation-zwei
titel: Anziehung zweier Massen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Zwei Kugeln von je $1000\,\text{kg}$ liegen mit ihren Mittelpunkten $2{,}0\,\text{m}$ voneinander entfernt. Wie groß ist die Gravitationskraft zwischen ihnen (in N, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "6.674e-11*1000*1000/2.0^2"
    einheit: "N"
    anzeige: '1{,}67\cdot 10^{-5}'
    fehler:
      - wert: "6.674e-11*1000*1000/2.0"
        meldung: Der Abstand steht im **Quadrat** im Nenner, $r^2 = 4{,}0\,\text{m}^2$.
      - wert: "6.674e-11*(1000+1000)/2.0^2"
        meldung: Im Gesetz stehen die Massen als **Produkt** $m_1 m_2$, nicht als Summe.
hinweise:
  - '$F = G\,m_1 m_2/r^2$ mit $G = 6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2$.'
loesung: |
  **Ansatz:** Gravitationsgesetz $F = G\,\dfrac{m_1 m_2}{r^2}$.
  ---
  $F = 6{,}674\cdot 10^{-11}\,\dfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{10^{3}\,\text{kg}\cdot 10^{3}\,\text{kg}}{4{,}0\,\text{m}^2} = 1{,}67\cdot 10^{-5}\,\text{N}$. Das ist die Gewichtskraft von nur $1{,}7\,\text{mg}$.
```

```aufgabe
id: p6-abstand-verdoppeln
titel: Abstand verdreifachen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Der Abstand zwischen zwei Körpern wird verdreifacht, die Massen bleiben gleich. Auf welchen Bruchteil sinkt die Gravitationskraft? Gib das Ergebnis als Dezimalzahl an (drei signifikante Stellen).
teile:
  - typ: zahl
    loesung: "1/9"
    anzeige: '0{,}111'
    fehler:
      - wert: "1/3"
        meldung: Der Abstand steht im **Quadrat** im Nenner. Dreifacher Abstand teilt die Kraft durch $3^2 = 9$.
      - wert: "9"
        meldung: Größerer Abstand heißt kleinere Kraft. Die Kraft wird durch $9$ geteilt, nicht mit $9$ multipliziert.
hinweise:
  - '$F \sim 1/r^2$: Setze $3r$ statt $r$ ein.'
loesung: |
  **Ansatz:** Bei gleichen Massen ist $F$ proportional zu $1/r^2$.
  ---
  $F' = G\dfrac{m_1 m_2}{(3r)^2} = \dfrac{1}{9}\cdot G\dfrac{m_1 m_2}{r^2}$. Die Kraft sinkt auf $\tfrac19 \approx 0{,}111$ des alten Werts.
```

```aufgabe
id: p6-6-apfel-erde
titel: Wer zieht stärker?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Die Erde zieht einen Apfel mit $1{,}0\,\text{N}$ an. Mit welcher Kraft zieht der Apfel die Erde an?
teile:
  - typ: auswahl
    optionen:
      - 'mit genau $1{,}0\,\text{N}$'
      - "mit einer unvorstellbar kleinen Kraft, weil der Apfel so leicht ist"
      - "gar nicht, nur große Körper ziehen an"
      - 'mit mehr als $1{,}0\,\text{N}$, weil die Erde den größeren Radius hat'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Klein ist nur die **Wirkung**, also die Beschleunigung der Erde. Die Kraft selbst ist nach actio gleich reactio genauso groß wie die auf den Apfel.
      - wert: 2
        meldung: Im Gravitationsgesetz stehen beide Massen. Jeder Körper zieht jeden anderen an, auch ein Apfel die Erde.
      - wert: 3
        meldung: Im Gesetz steht der Abstand der Mittelpunkte, und der ist für beide Körper derselbe. Die Kräfte sind gleich groß.
hinweise:
  - Denk an das dritte Newtonsche Axiom und daran, dass im Gesetz das Produkt beider Massen steht.
loesung: |
  Das Gravitationsgesetz enthält das Produkt $m_1 m_2$ und den gemeinsamen Abstand $r$. Es liefert für beide Körper denselben Betrag.
  ---
  Der Apfel zieht die Erde also mit genau $1{,}0\,\text{N}$ an. Die Erde reagiert darauf wegen ihrer riesigen Masse nur mit einer unmessbar kleinen Beschleunigung.
```

```aufgabe
id: p6-erde-mond-kraft
titel: Kraft zwischen Erde und Mond
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne die Gravitationskraft zwischen Erde ($5{,}97\cdot 10^{24}\,\text{kg}$) und Mond ($7{,}35\cdot 10^{22}\,\text{kg}$) im mittleren Abstand $3{,}84\cdot 10^{8}\,\text{m}$ (in N, drei signifikante Stellen).
teile:
  - typ: zahl
    loesung: "6.674e-11*5.97e24*7.35e22/(3.84e8)^2"
    einheit: "N"
    anzeige: '1{,}99\cdot 10^{20}'
    fehler:
      - wert: "6.674e-11*5.97e24*7.35e22/3.84e8"
        meldung: Der Abstand steht im Quadrat. Dein Wert ist um den Faktor $3{,}84\cdot 10^8$ zu groß.
      - wert: "6.674e-11*5.97e24*7.35e22/(3.84e5)^2"
        meldung: Du hast den Abstand in Kilometern eingesetzt. Im Gesetz muss er in Metern stehen.
hinweise:
  - Zahlenteile und Zehnerpotenzen getrennt rechnen.
  - 'Nenner zuerst: $(3{,}84\cdot 10^8)^2 = 14{,}7\cdot 10^{16}$.'
loesung: |
  **Ansatz:** $F = G\,\dfrac{M_E\, m_M}{r^2}$, alle Größen in SI-Einheiten.
  ---
  **Zähler:** $6{,}674\cdot 5{,}97\cdot 7{,}35\cdot 10^{-11+24+22} = 292{,}9\cdot 10^{35}$ in $\text{N}\,\text{m}^2$. **Nenner:** $(3{,}84\cdot 10^{8}\,\text{m})^2 = 14{,}75\cdot 10^{16}\,\text{m}^2$.
  ---
  **Ergebnis:** $F = \dfrac{292{,}9}{14{,}75}\cdot 10^{19}\,\text{N} = 1{,}99\cdot 10^{20}\,\text{N}$. Dieselbe Kraft wirkt auf beide. Die Erde ist aber $81$-mal so schwer und wird deshalb $81$-mal schwächer beschleunigt.
```

```aufgabe
id: p6-6-cavendish
titel: Die Kraft in der Drehwaage von Cavendish
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  In der Drehwaage von Cavendish zieht eine große Bleikugel ($158\,\text{kg}$) eine kleine Bleikugel ($0{,}73\,\text{kg}$) an. Ihre Mittelpunkte sind $0{,}23\,\text{m}$ voneinander entfernt. Runde auf drei signifikante Stellen.

  a) Wie groß ist die Gravitationskraft (in N)?

  b) Welcher Bruchteil der Gewichtskraft der kleinen Kugel ist das?
teile:
  - typ: zahl
    label: a) Kraft
    loesung: "6.674e-11*158*0.73/0.23^2"
    einheit: "N"
    anzeige: '1{,}46\cdot 10^{-7}'
    toleranz: 1e-9
    fehler:
      - wert: "6.674e-11*158*0.73/0.23"
        meldung: Der Abstand steht im Quadrat im Nenner.
  - typ: zahl
    label: b) Bruchteil
    loesung: "6.674e-11*158*0.73/0.23^2/(0.73*9.81)"
    anzeige: '2{,}03\cdot 10^{-8}'
    toleranz: 1e-10
    fehler:
      - wert: "6.674e-11*158*0.73/0.23^2/0.73"
        meldung: Du hast durch die Masse geteilt. Für den Vergleich brauchst du die Gewichtskraft $m g$ in Newton.
hinweise:
  - '$F = G\,m_1 m_2/r^2$, alle Größen in SI.'
  - 'Gewichtskraft der kleinen Kugel: $m g = 0{,}73\,\text{kg}\cdot 9{,}81\,\text{m/s}^2$. Dann teilen.'
loesung: |
  **Ansatz:** Gravitationsgesetz für die beiden Kugeln, Abstand der Mittelpunkte.
  ---
  **a)** $F = 6{,}674\cdot 10^{-11}\,\dfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{158\,\text{kg}\cdot 0{,}73\,\text{kg}}{(0{,}23\,\text{m})^2} = 1{,}46\cdot 10^{-7}\,\text{N}$.
  ---
  **b)** $m g = 0{,}73\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 7{,}16\,\text{N}$. $\dfrac{1{,}46\cdot 10^{-7}\,\text{N}}{7{,}16\,\text{N}} = 2{,}03\cdot 10^{-8}$.
  ---
  **Deutung:** Die Kraft ist etwa fünfzig Millionen Mal kleiner als das Gewicht der Kugel. Darum braucht man einen extrem dünnen Faden, der sich schon bei winzigen Kräften messbar verdrillt.
```

```aufgabe
id: p6-6-abstand-gesucht
titel: In welchem Abstand?
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Zwei Kugeln mit $5{,}0\,\text{kg}$ und $2{,}0\,\text{kg}$ ziehen sich mit $1{,}0\cdot 10^{-9}\,\text{N}$ an. Wie weit sind ihre Mittelpunkte voneinander entfernt (in m, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "sqrt(6.674e-11*5.0*2.0/1.0e-9)"
    einheit: "m"
    anzeige: '0{,}817'
    fehler:
      - wert: "6.674e-11*5.0*2.0/1.0e-9"
        meldung: Das ist $r^2$ in $\text{m}^2$. Zieh noch die Wurzel.
      - wert: "sqrt(1.0e-9/(6.674e-11*5.0*2.0))"
        meldung: Du hast den Bruch umgedreht. Aus $F = G m_1 m_2/r^2$ folgt $r^2 = G m_1 m_2/F$.
hinweise:
  - 'Stelle $F = G m_1 m_2/r^2$ nach $r^2$ um: Multipliziere mit $r^2$ und teile durch $F$.'
  - 'Dann Wurzel ziehen.'
gefuehrt:
  - text: Multipliziere $F = G m_1 m_2/r^2$ mit $r^2$ und teile durch $F$. Welche Gleichung entsteht?
    erklaerung: '$r^2 = \dfrac{G m_1 m_2}{F}$. Der gesuchte Abstand steht jetzt allein.'
  - text: Berechne den Zähler $G m_1 m_2$ (in $\text{N}\,\text{m}^2$).
    teil: { typ: zahl, loesung: "6.674e-11*5.0*2.0" }
    erklaerung: '$6{,}674\cdot 10^{-11}\cdot 10\,\text{N}\,\text{m}^2 = 6{,}674\cdot 10^{-10}\,\text{N}\,\text{m}^2$.'
  - text: Wie groß ist $r^2$ (in $\text{m}^2$)?
    teil: { typ: zahl, loesung: "6.674e-11*5.0*2.0/1.0e-9" }
    erklaerung: '$r^2 = 6{,}674\cdot 10^{-10}\,\text{N}\,\text{m}^2 / 1{,}0\cdot 10^{-9}\,\text{N} = 0{,}667\,\text{m}^2$.'
  - text: Wie groß ist $r$ (in m)?
    teil: { typ: zahl, loesung: "sqrt(6.674e-11*5.0*2.0/1.0e-9)", einheit: "m" }
    erklaerung: '$r = \sqrt{0{,}667\,\text{m}^2} = 0{,}817\,\text{m}$.'
loesung: |
  **Ansatz:** Umkehraufgabe. Aus $F = G\dfrac{m_1 m_2}{r^2}$ folgt $r^2 = \dfrac{G m_1 m_2}{F}$ (siehe Mathematik, [Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen)).
  ---
  **Einsetzen:** $r^2 = \dfrac{6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2\cdot 5{,}0\,\text{kg}\cdot 2{,}0\,\text{kg}}{1{,}0\cdot 10^{-9}\,\text{N}} = 0{,}667\,\text{m}^2$.
  ---
  **Ergebnis:** $r = 0{,}817\,\text{m}$. Probe: $6{,}674\cdot 10^{-11}\cdot 10/0{,}667\,\text{N} = 1{,}0\cdot 10^{-9}\,\text{N}$. ✓
```

```aufgabe
id: p6-6-tanker
titel: "Abschätzen: Ziehen sich zwei Tanker an?"
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Zwei große, voll beladene Öltanker liegen nebeneinander im Hafen. Schätze die Größenordnung der Gravitationskraft zwischen ihnen ab. Nimm dazu an: Jeder Tanker hat eine Masse von etwa $300\,000\,\text{t}$, und ihre Schwerpunkte sind etwa $200\,\text{m}$ voneinander entfernt. Rechne mit diesen runden Annahmen und gib das Ergebnis in N auf zwei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "6.674e-11*(3e8)^2/200^2"
    einheit: "N"
    anzeige: '\approx 150'
    toleranz: 7
    fehler:
      - wert: "6.674e-11*(3e5)^2/200^2"
        meldung: Du hast die Masse in Tonnen eingesetzt. $300\,000\,\text{t} = 3\cdot 10^{8}\,\text{kg}$.
      - wert: "6.674e-11*(3e8)^2/200"
        meldung: Der Abstand steht im Quadrat im Nenner.
hinweise:
  - 'Masse in kg: $300\,000\,\text{t} = 3\cdot 10^5\cdot 10^3\,\text{kg} = 3\cdot 10^8\,\text{kg}$.'
  - 'Rechne $F = G m^2/r^2$ nur mit runden Zahlen. Lange Schiffe sind keine Kugeln, für die Größenordnung genügt das trotzdem.'
loesung: |
  **Modell:** Wir behandeln die Tanker grob wie Kugeln mit dem Schwerpunktabstand $200\,\text{m}$. Das ist ungenau, für eine Größenordnung aber ausreichend.
  ---
  **Rechnung:** $F = G\dfrac{m^2}{r^2} = 6{,}67\cdot 10^{-11}\,\dfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{(3\cdot 10^8\,\text{kg})^2}{(2\cdot 10^2\,\text{m})^2} = 6{,}67\cdot 10^{-11}\cdot\dfrac{9\cdot 10^{16}}{4\cdot 10^4}\,\text{N} \approx 1{,}5\cdot 10^{2}\,\text{N}$.
  ---
  **Einordnung:** Rund $100$ bis $200\,\text{N}$, so viel wie die Gewichtskraft eines Kindes. Gegenüber dem Gewicht eines Tankers ($3\cdot 10^9\,\text{N}$) ist das verschwindend wenig. Wind, Wellen und Festmacherleinen sind viel stärker.
```

```aufgabe
id: p6-6-zwischenpunkt
titel: Wo heben sich die Anziehungen von Erde und Mond auf?
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Raumsonde fliegt auf der Verbindungslinie von der Erde ($5{,}97\cdot 10^{24}\,\text{kg}$) zum Mond ($7{,}35\cdot 10^{22}\,\text{kg}$). Die Mittelpunkte sind $3{,}84\cdot 10^8\,\text{m}$ voneinander entfernt. In welchem Abstand vom Erdmittelpunkt heben sich die beiden Anziehungskräfte genau auf? Gib das Ergebnis in Einheiten von $10^8\,\text{m}$ an (drei signifikante Stellen).
teile:
  - typ: zahl
    loesung: "sqrt(5.97e24/7.35e22)/(sqrt(5.97e24/7.35e22)+1)*3.84"
    einheit: "10⁸ m"
    anzeige: '3{,}46'
    fehler:
      - wert: "(5.97e24/7.35e22)/((5.97e24/7.35e22)+1)*3.84"
        meldung: Du hast das Massenverhältnis direkt verwendet. Weil der Abstand im Quadrat steht, geht das Massenverhältnis nur über seine **Wurzel** ein.
      - wert: "1.92"
        meldung: In der Mitte zieht die viel schwerere Erde stärker. Der Gleichgewichtspunkt liegt näher am Mond.
hinweise:
  - 'Nenne den Abstand von der Erde $x$, dann ist der Abstand zum Mond $d - x$. Setze $G\dfrac{M_E m}{x^2} = G\dfrac{M_M m}{(d - x)^2}$.'
  - 'Kürzen und Wurzel ziehen: $\dfrac{x}{d - x} = \sqrt{\dfrac{M_E}{M_M}}$. Dann nach $x$ auflösen.'
loesung: |
  **Modell:** Auf die Sonde (Masse $m$) zieht die Erde zu sich hin, der Mond in die Gegenrichtung. Im gesuchten Punkt sind beide Kräfte gleich groß.
  ---
  **Ansatz:** $G\dfrac{M_E m}{x^2} = G\dfrac{M_M m}{(d - x)^2}$. $G$ und $m$ kürzen sich. Umgeformt: $\dfrac{(d - x)^2}{x^2} = \dfrac{M_M}{M_E}$, also nach dem Wurzelziehen $\dfrac{x}{d - x} = \sqrt{\dfrac{M_E}{M_M}}$.
  ---
  **Wurzel:** $\dfrac{M_E}{M_M} = \dfrac{5{,}97\cdot 10^{24}}{7{,}35\cdot 10^{22}} = 81{,}2$, $\sqrt{81{,}2} = 9{,}01$. Also $x = 9{,}01\,(d - x)$, $x = \dfrac{9{,}01}{10{,}01}\,d$.
  ---
  **Ergebnis:** $x = 0{,}900\cdot 3{,}84\cdot 10^8\,\text{m} = 3{,}46\cdot 10^8\,\text{m}$. Der Punkt liegt bei $90\,\%$ des Weges, also nur $3{,}8\cdot 10^7\,\text{m}$ vor dem Mond.
  ---
  **Probe:** Erde: $5{,}97\cdot 10^{24}/(3{,}46\cdot 10^8)^2 = 4{,}99\cdot 10^7$. Mond: $7{,}35\cdot 10^{22}/(3{,}84 - 3{,}46)^2\cdot 10^{-16} = 5{,}1\cdot 10^7$. Gleich bis auf Rundung. ✓
```

## Gravitationsfeld, Fallbeschleunigung und Gezeiten

```aufgabe
id: p6-7-check
art: check
titel: "Vorwissen: Gewichtskraft und Fallbeschleunigung"
niveau: 1
angabe: |
  Ein Messgerät mit $5{,}0\,\text{kg}$ hängt auf dem Mond an einer Federwaage. Sie zeigt $8{,}1\,\text{N}$. Wie groß ist die Fallbeschleunigung auf dem Mond (in $\text{m/s}^2$)?
teile:
  - typ: zahl
    loesung: "8.1/5.0"
    einheit: "m/s²"
    anzeige: '1{,}62'
    fehler:
      - wert: "8.1*5.0"
        meldung: Aus $F_G = m g$ folgt $g = F_G/m$. Du musst teilen, nicht multiplizieren.
      - wert: "9.81"
        meldung: Das ist die Fallbeschleunigung der Erde. Auf dem Mond ist die Gewichtskraft viel kleiner.
hinweise:
  - 'Die Gewichtskraft ist $F_G = m g$. Stelle nach $g$ um.'
loesung: |
  Aus $F_G = m g$ folgt $g = \dfrac{F_G}{m}$.
  ---
  $g = \dfrac{8{,}1\,\text{N}}{5{,}0\,\text{kg}} = 1{,}62\,\text{N/kg} = 1{,}62\,\text{m/s}^2$. Wiederholen: [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

Bisher war die Fallbeschleunigung $g = 9{,}81\,\text{m/s}^2$ einfach eine gemessene Zahl. Mit dem Gravitationsgesetz
aus der Lektion [Das Gravitationsgesetz](/lernen/physik1/kreisbewegung-gravitation/das-gravitationsgesetz) können wir
sie jetzt **berechnen**, und zwar für jede Höhe und für jeden Himmelskörper.

### Woher g kommt

Auf einen Körper der Masse $m$ an der Erdoberfläche wirkt die Gravitationskraft der Erde. Sie ist seine
Gewichtskraft. (Die kleine Wirkung der Erddrehung lassen wir weg.) Also gilt
$$m\,g = G\,\frac{M_E\, m}{R_E^2}\qquad\text{also}\qquad g = G\,\frac{M_E}{R_E^2}.$$
Dabei ist $M_E = 5{,}97\cdot 10^{24}\,\text{kg}$ die Masse der Erde und $R_E = 6{,}37\cdot 10^6\,\text{m}$ ihr Radius.
Die Masse $m$ des fallenden Körpers kürzt sich. Darum fallen im Vakuum alle Körper gleich schnell. Der tiefere Grund
ist, dass schwere und träge Masse gleich sind (siehe
[Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit)).

In der Höhe $h$ über der Oberfläche ist der Abstand zum Erdmittelpunkt $R_E + h$. Dort gilt
$$g(h) = G\,\frac{M_E}{(R_E + h)^2} = g_0\left(\frac{R_E}{R_E + h}\right)^2.$$
Dabei ist $g_0 = 9{,}81\,\text{m/s}^2$ der Wert an der Oberfläche. Die zweite Form ist bequem, weil man $G$ und $M_E$
nicht braucht.

:::beispiel[Auf dem Gipfel des Mount Everest]
Wie groß ist $g$ auf dem Gipfel des Mount Everest, $8{,}85\,\text{km}$ über dem Meeresspiegel?

**Schritt 1, Abstand vom Mittelpunkt:** $R_E + h = 6370\,\text{km} + 8{,}85\,\text{km} = 6378{,}85\,\text{km}$.

**Schritt 2, Verhältnis:** $\left(\dfrac{6370\,\text{km}}{6378{,}85\,\text{km}}\right)^2 = 0{,}99723$. Die Kilometer kürzen sich.

**Schritt 3, Ergebnis:** $g = 9{,}81\,\text{m/s}^2\cdot 0{,}99723 = 9{,}78\,\text{m/s}^2$.

**Deutung:** Nur $0{,}3\,\%$ weniger als am Meer. Auf jedem Berg der Erde ist $g$ praktisch gleich. Erst in hunderten
Kilometern Höhe wird der Unterschied deutlich.
:::

:::beispiel[Die Fallbeschleunigung auf dem Mars]
Der Mars hat die Masse $6{,}42\cdot 10^{23}\,\text{kg}$ und den Radius $3390\,\text{km}$. Wie groß ist $g$ an seiner Oberfläche?

**Schritt 1, Einheiten:** $R = 3390\,\text{km} = 3{,}39\cdot 10^6\,\text{m}$.

**Schritt 2, Einsetzen:** $g_M = G\,\dfrac{M}{R^2} = 6{,}674\cdot 10^{-11}\,\dfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{6{,}42\cdot 10^{23}\,\text{kg}}{(3{,}39\cdot 10^6\,\text{m})^2} = 3{,}73\,\text{N/kg}$.

**Schritt 3, Einheit:** $\text{N/kg} = \text{kg}\cdot\text{m/s}^2/\text{kg} = \text{m/s}^2$. Also $g_M = 3{,}73\,\text{m/s}^2$, gut ein Drittel des Erdwerts.
:::

### Das Gravitationsfeld

Man kann die Gravitation auch anders beschreiben: Jede Masse verändert den Raum um sich herum so, dass auf jede
andere Masse dort eine Kraft wirkt. Diesen veränderten Raum nennt man **Gravitationsfeld**. Ein Bild aus dem Alltag:
Eine Bowlingkugel auf einem Trampolin macht eine Mulde, und jede Murmel in der Nähe rollt hinein.

Die Stärke des Feldes an einem Ort misst man mit der **Gravitationsfeldstärke** $\vec g$. Sie ist die Kraft pro
Masse, die ein Probekörper dort erfährt:
$$\vec g = \frac{\vec F}{m}.$$
Ihr Betrag ist genau die Fallbeschleunigung an diesem Ort, die Einheit ist $\text{N/kg} = \text{m/s}^2$. **Beispiel:**
An der Erdoberfläche ist $g = 9{,}81\,\text{N/kg}$. Ein Körper mit $2\,\text{kg}$ erfährt dort $19{,}6\,\text{N}$.
**Kein Beispiel:** Die Gewichtskraft $19{,}6\,\text{N}$ selbst ist keine Feldstärke, denn sie hängt vom Probekörper ab.
Die Feldstärke beschreibt nur den Ort.

```plot
x: [-3, 3]
y: [-3, 3]
gleich: true
kurven:
  - { x: "0.7*cos(t)", y: "0.7*sin(t)", t: [0, "2*pi"], farbe: 2 }
vektoren:
  - { von: [1.40, 0.00], nach: [0.80, 0.00], farbe: 0 }
  - { von: [2.60, 0.00], nach: [2.43, 0.00], farbe: 0 }
  - { von: [0.99, 0.99], nach: [0.57, 0.57], farbe: 0 }
  - { von: [1.84, 1.84], nach: [1.72, 1.72], farbe: 0 }
  - { von: [0.00, 1.40], nach: [0.00, 0.80], farbe: 0 }
  - { von: [0.00, 2.60], nach: [0.00, 2.43], farbe: 0 }
  - { von: [-0.99, 0.99], nach: [-0.57, 0.57], farbe: 0 }
  - { von: [-1.84, 1.84], nach: [-1.72, 1.72], farbe: 0 }
  - { von: [-1.40, 0.00], nach: [-0.80, 0.00], farbe: 0 }
  - { von: [-2.60, 0.00], nach: [-2.43, 0.00], farbe: 0 }
  - { von: [-0.99, -0.99], nach: [-0.57, -0.57], farbe: 0 }
  - { von: [-1.84, -1.84], nach: [-1.72, -1.72], farbe: 0 }
  - { von: [0.00, -1.40], nach: [0.00, -0.80], farbe: 0 }
  - { von: [0.00, -2.60], nach: [0.00, -2.43], farbe: 0 }
  - { von: [0.99, -0.99], nach: [0.57, -0.57], farbe: 0 }
  - { von: [1.84, -1.84], nach: [1.72, -1.72], farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "Erde" }
beschriftung: "Das Gravitationsfeld der Erde (grüner Kreis). Die Pfeile zeigen die Feldstärke an zwei Abständen. Sie zeigt überall radial zum Erdmittelpunkt. Beim fast doppelten Abstand sind die Pfeile nur noch knapp ein Drittel so lang, denn die Feldstärke nimmt mit dem Quadrat des Abstands ab."
```

Dasselbe Feldkonzept begegnet dir beim elektrischen Feld wieder. Dort ist die Feldstärke die Kraft pro Ladung, siehe
Lektion [Das elektrische Feld und Feldlinien](/lernen/physik1/elektrostatik/das-elektrische-feld-und-feldlinien).

```aufgabe
id: p6-7-vorhersage
art: check
titel: "Vorhersage: g einen Erdradius über dem Boden"
niveau: 1
angabe: |
  Schätze, bevor du das folgende Widget benutzt: Wie groß ist die Fallbeschleunigung in $6370\,\text{km}$ Höhe, also einen Erdradius über der Oberfläche?
teile:
  - typ: auswahl
    optionen:
      - "etwa $9{,}8\\,\\text{m/s}^2$, so hoch spielt die Höhe keine Rolle"
      - "etwa die Hälfte, $4{,}9\\,\\text{m/s}^2$"
      - "etwa ein Viertel, $2{,}5\\,\\text{m/s}^2$"
      - "null, dort ist schon Weltall"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Für einen Berg stimmt das, aber hier verdoppelt sich der Abstand zum Erdmittelpunkt. Das merkt man deutlich.
      - wert: 1
        meldung: Der Abstand zum **Mittelpunkt** verdoppelt sich. Weil er im Quadrat steht, wird $g$ durch $4$ geteilt, nicht durch $2$.
      - wert: 3
        meldung: Die Gravitation hat unbegrenzte Reichweite. Sie wird schwächer, aber nie null.
hinweise:
  - Wie ändert sich der Abstand zum Erdmittelpunkt? Er steht im Quadrat im Nenner.
loesung: |
  Der Abstand zum Mittelpunkt verdoppelt sich von $R_E$ auf $2R_E$.
  ---
  Also $g = 9{,}81\,\text{m/s}^2\cdot(1/2)^2 = 2{,}45\,\text{m/s}^2$. Prüfe es im Widget: Lies den Graphen an der Stelle $x = 6370$ ab.
```

```widget
name: parameter
titel: Fallbeschleunigung in der Höhe h (in km)
props:
  f: "g0*(R/(R+x))^2"
  parameter:
    - { name: g0, min: 1, max: 25, step: 0.01, wert: 9.81 }
    - { name: R, min: 1000, max: 70000, step: 10, wert: 6370 }
  x: [0, 40000]
  y: [0, 12]
```

**Arbeitsauftrag:** Lies am Graphen ab, wie groß $g$ in $400\,\text{km}$ Höhe ist, wo die Raumstation ISS fliegt.
Du findest knapp $8{,}7\,\text{m/s}^2$, also nur $11\,\%$ weniger als am Boden. Stelle danach mit den Reglern $g_0$ und $R$ andere Himmelskörper ein:
Mond ($g_0 = 1{,}62$, $R = 1737$), Mars ($3{,}73$; $3390$), Venus ($8{,}87$; $6052$). Erklärung: Die Kurve fällt
überall wie $1/(R + h)^2$, nur der Maßstab ist verschieden.

### Ebbe und Flut: die Gezeiten

**Worum geht es in einem Satz?** Der Mond zieht nicht alle Teile der Erde gleich stark an, und dieser **Unterschied**
zieht die Ozeane auseinander.

**In Schritten:**

1. Der Mond zieht die ihm zugewandte Seite der Erde am stärksten an, weil sie ihm am nächsten ist. Den Erdmittelpunkt
   zieht er etwas schwächer an, die abgewandte Seite am schwächsten.
2. Die ganze Erde „fällt“ mit der Beschleunigung ihres Mittelpunkts auf den Mond zu, genauer: Erde und Mond kreisen
   um ihren gemeinsamen Schwerpunkt.
3. Das Wasser auf der Mondseite wird stärker beschleunigt als der Erdmittelpunkt. Es eilt voraus und bildet einen
   Flutberg. Das Wasser auf der Gegenseite wird schwächer beschleunigt. Es bleibt zurück und bildet den zweiten Flutberg.
4. Die Erde dreht sich in einem Tag unter den beiden Flutbergen hindurch. Deshalb gibt es an den meisten Küsten
   zweimal täglich Flut.

:::beispiel[Wie groß ist der Unterschied?]
Der Mond ($7{,}35\cdot 10^{22}\,\text{kg}$) ist $3{,}84\cdot 10^8\,\text{m}$ vom Erdmittelpunkt entfernt.

**Schritt 1, Erdmittelpunkt:** $g_M = G\dfrac{M_M}{r^2} = 6{,}674\cdot 10^{-11}\cdot\dfrac{7{,}35\cdot 10^{22}}{(3{,}84\cdot 10^8)^2}\,\text{m/s}^2 = 3{,}327\cdot 10^{-5}\,\text{m/s}^2$.

**Schritt 2, zugewandte Seite:** Der Abstand ist um einen Erdradius kleiner, $r - R_E = 3{,}776\cdot 10^8\,\text{m}$.
Dort ist $g_M = 3{,}440\cdot 10^{-5}\,\text{m/s}^2$.

**Schritt 3, Unterschied:** $3{,}440\cdot 10^{-5} - 3{,}327\cdot 10^{-5} = 1{,}1\cdot 10^{-6}\,\text{m/s}^2$. Auf der
abgewandten Seite ist $g_M$ um fast genau so viel kleiner.

**Deutung:** Das ist nur ein Zehnmillionstel von $g$. Weil es aber auf die riesigen Wassermassen der Ozeane wirkt,
hebt es das Meer um etwa einen halben Meter. In Buchten kann sich das auf mehrere Meter aufschaukeln.
:::

Auch die Sonne erzeugt Gezeiten, etwa halb so stark wie der Mond. Stehen Sonne, Mond und Erde in einer Linie, also bei
Neu- und Vollmond, addieren sich beide zur **Springflut**. Stehen sie im rechten Winkel, also bei Halbmond, schwächen sie
sich zur **Nippflut** ab.

:::merke[So rechnest du mit der Fallbeschleunigung]
1. An der Oberfläche eines Himmelskörpers: $g = G M/R^2$, der Radius in Metern.
2. In der Höhe $h$: $g(h) = g_0\left(\dfrac{R}{R + h}\right)^2$. Im Bruch reicht es, wenn beide Längen dieselbe Einheit haben.
3. Umgekehrt: Aus $g$ und $R$ folgt die Masse $M = g R^2/G$.
4. Gewichtskraft dort: $F_G = m g$. Die Masse bleibt überall gleich.
:::

:::achtung[Fehler: die Höhe statt des Abstands vom Mittelpunkt]
Wie groß ist $g$ in $1000\,\text{km}$ Höhe?

Falsch gerechnet: $g = 9{,}81\,\text{m/s}^2\cdot\left(\dfrac{6370}{1000}\right)^2 = 398\,\text{m/s}^2$.

Vierzigmal mehr als am Boden kann nicht stimmen, die Anziehung nimmt mit der Höhe ab. Im Nenner steht der Abstand vom
**Mittelpunkt**, $6370\,\text{km} + 1000\,\text{km} = 7370\,\text{km}$. Richtig ist
$g = 9{,}81\,\text{m/s}^2\cdot(6370/7370)^2 = 7{,}33\,\text{m/s}^2$.
:::

:::achtung[Fehler: den Radius in Kilometern in G·M/R² eingesetzt]
Für den Mond ($7{,}35\cdot 10^{22}\,\text{kg}$, Radius $1737\,\text{km}$) rechnet jemand:

Falsch: $g = 6{,}674\cdot 10^{-11}\cdot\dfrac{7{,}35\cdot 10^{22}}{1737^2}\,\text{m/s}^2 = 1{,}63\cdot 10^{6}\,\text{m/s}^2$.

In $G M/R^2$ stecken Meter in der Einheit von $G$. Der Radius muss also in Metern stehen:
$R = 1{,}737\cdot 10^6\,\text{m}$, und $g = 1{,}63\,\text{m/s}^2$. Der Fehler ist der Faktor $10^6$, weil
$(1000)^2 = 10^6$ ist.
:::

```reflexion
frage: Auf dem Mond fallen ein Hammer und eine Feder gleich schnell, das haben Astronauten 1971 vorgeführt. Erkläre mit der Formel g = G·M/R², warum das so ist, und warum es auf der Erde anders aussieht.
antwort: |
  Auf jeden Körper wirkt die Gravitationskraft $G M m/R^2$, sie ist proportional zu seiner Masse $m$. Um ihn zu
  beschleunigen, muss man aber auch genau diese Masse bewegen. Teilt man die Kraft durch $m$, bleibt $g = G M/R^2$, unabhängig
  vom Körper. Darum fallen im Vakuum alle Körper gleich schnell. Auf der Erde bremst zusätzlich der Luftwiderstand. Er hängt
  von Form und Fläche ab und wirkt sich auf die leichte Feder viel stärker aus als auf den Hammer.
```

### Aufgaben zu Feld, Fallbeschleunigung und Gezeiten

```aufgabe
id: p6-g-mond
titel: Fallbeschleunigung auf dem Mond
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Der Mond hat die Masse $7{,}35\cdot 10^{22}\,\text{kg}$ und den Radius $1737\,\text{km}$. Wie groß ist die Fallbeschleunigung an seiner Oberfläche (in $\text{m/s}^2$, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "6.674e-11*7.35e22/(1.737e6)^2"
    einheit: "m/s²"
    anzeige: '1{,}63'
    fehler:
      - wert: "6.674e-11*7.35e22/1737^2"
        meldung: Der Radius muss in Metern stehen, $1737\,\text{km} = 1{,}737\cdot 10^6\,\text{m}$.
      - wert: "6.674e-11*7.35e22/1.737e6"
        meldung: Der Radius steht im Quadrat im Nenner.
hinweise:
  - '$g = G M/R^2$ mit $R$ in Metern.'
loesung: |
  **Ansatz:** An der Oberfläche ist $g = G\dfrac{M}{R^2}$ mit $R = 1{,}737\cdot 10^6\,\text{m}$.
  ---
  $g_M = 6{,}674\cdot 10^{-11}\,\dfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{7{,}35\cdot 10^{22}\,\text{kg}}{(1{,}737\cdot 10^{6}\,\text{m})^2} = 1{,}63\,\text{m/s}^2$, etwa ein Sechstel von $g$. Astronauten konnten deshalb trotz schwerer Anzüge springen.
```

```aufgabe
id: p6-7-diagramm
titel: Die Fallbeschleunigung aus einem Diagramm ablesen
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Fallbeschleunigung der Erde in Abhängigkeit von der Höhe über der Oberfläche. Ein Wettersatellit soll in $13\,000\,\text{km}$ Höhe fliegen. Lies $g$ in dieser Höhe ab (in $\text{m/s}^2$, auf eine Nachkommastelle).
plot:
  x: [0, 20000]
  y: [0, 10]
  achsen: { x: "h in km", y: "g in m/s²" }
  graphen:
    - { f: "9.81*(6370/(6370+x))^2", von: 0, bis: 20000, farbe: 0 }
  strecken:
    - { von: [13000, 0], nach: [13000, 1.06], gestrichelt: true }
    - { von: [0, 1.06], nach: [13000, 1.06], gestrichelt: true }
teile:
  - typ: zahl
    loesung: "9.81*(6370/(6370+13000))^2"
    einheit: "m/s²"
    anzeige: '1{,}1'
    toleranz: 0.08
    fehler:
      - wert: "9.81*(6370/13000)^2"
        meldung: Das wäre die Rechnung mit der Höhe statt mit dem Abstand vom Mittelpunkt. Lies den Wert direkt an der Kurve bei $h = 13\,000\,\text{km}$ ab.
hinweise:
  - Geh auf der waagrechten Achse bis $13\,000\,\text{km}$, dann senkrecht hoch bis zur Kurve und waagrecht hinüber zur g-Achse.
loesung: |
  **Ablesen:** Bei $h = 13\,000\,\text{km}$ liegt die Kurve knapp über $1\,\text{m/s}^2$. Genauer als auf etwa $0{,}1\,\text{m/s}^2$ lässt sich das Diagramm nicht lesen, darum gelten $1{,}0$ und $1{,}1$ beide als richtig.
  ---
  **Kontrolle mit der Formel:** $g = 9{,}81\,\text{m/s}^2\cdot\left(\dfrac{6370}{19\,370}\right)^2 = 1{,}06\,\text{m/s}^2$, also rund $1{,}1\,\text{m/s}^2$. In dieser Höhe ist der Abstand zum Mittelpunkt etwa dreimal so groß wie am Boden, und $g$ ist auf ein Neuntel gesunken. ✓
```

```aufgabe
id: p6-g-hoehe
titel: Fallbeschleunigung auf der Bahn der GPS-Satelliten
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  GPS-Satelliten fliegen in rund $20\,200\,\text{km}$ Höhe. Wie groß ist die Fallbeschleunigung dort (in $\text{m/s}^2$, drei signifikante Stellen)? ($R_E = 6370\,\text{km}$, $g_0 = 9{,}81\,\text{m/s}^2$)
teile:
  - typ: zahl
    loesung: "9.81*(6370/(6370+20200))^2"
    einheit: "m/s²"
    anzeige: '0{,}564'
    fehler:
      - wert: "9.81*(6370/20200)^2"
        meldung: Im Nenner steht der Abstand vom **Erdmittelpunkt**, $R_E + h$, nicht die Höhe allein.
      - wert: "9.81*6370/(6370+20200)"
        meldung: Das Verhältnis muss quadriert werden, denn $g$ nimmt mit $1/r^2$ ab.
hinweise:
  - Abstand vom Erdmittelpunkt, nicht von der Oberfläche.
  - '$g(h) = g_0\left(\dfrac{R_E}{R_E + h}\right)^2$.'
loesung: |
  **Ansatz:** $g(h) = g_0\left(\dfrac{R_E}{R_E + h}\right)^2$ mit $R_E + h = 26\,570\,\text{km}$.
  ---
  **Verhältnis:** $\dfrac{6370\,\text{km}}{26\,570\,\text{km}} = 0{,}2397$, quadriert $0{,}0575$.
  ---
  **Ergebnis:** $g = 9{,}81\,\text{m/s}^2\cdot 0{,}0575 = 0{,}564\,\text{m/s}^2$. Die Erde zieht die Satelliten dort also noch deutlich an. Genau diese Anziehung hält sie auf ihrer Bahn.
```

```aufgabe
id: p6-g-mars
titel: Ein Astronaut auf dem Mars
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Astronaut mit Ausrüstung hat $120\,\text{kg}$. Mit welcher Gewichtskraft drückt er auf dem Mars auf den Boden (in N, drei signifikante Stellen)? Welche Masse hat er dort? Nutze $g_{\text{Mars}} = 3{,}73\,\text{m/s}^2$.
teile:
  - typ: zahl
    label: Gewichtskraft
    loesung: "120*3.73"
    einheit: "N"
    anzeige: '448'
    fehler:
      - wert: "120*9.81"
        meldung: Das ist die Gewichtskraft auf der Erde. Auf dem Mars gilt $g = 3{,}73\,\text{m/s}^2$.
      - wert: "120/3.73"
        meldung: Gewichtskraft ist Masse **mal** Fallbeschleunigung.
  - typ: zahl
    label: Masse
    loesung: "120"
    einheit: "kg"
    anzeige: '120'
    fehler:
      - wert: "120*3.73/9.81"
        meldung: Die Masse hängt nicht vom Ort ab. Nur die Gewichtskraft wird auf dem Mars kleiner.
hinweise:
  - 'Gewichtskraft $F_G = m g$ mit dem $g$ des Mars.'
  - Die Masse misst die Menge Materie und die Trägheit. Ändert sie sich beim Flug zum Mars?
loesung: |
  **Ansatz:** Die Gewichtskraft hängt vom Ort ab, $F_G = m g_{\text{Mars}}$. Die Masse ist eine Eigenschaft des Körpers.
  ---
  **Gewichtskraft:** $F_G = 120\,\text{kg}\cdot 3{,}73\,\text{m/s}^2 = 448\,\text{N}$, nur $38\,\%$ des Werts auf der Erde ($1177\,\text{N}$).
  ---
  **Masse:** unverändert $120\,\text{kg}$. Der Astronaut ist auf dem Mars genauso träge: Wer gegen ihn läuft, spürt denselben Aufprall wie auf der Erde.
```

```aufgabe
id: p6-7-halbe-g
titel: In welcher Höhe ist g nur halb so groß?
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  In welcher Höhe über der Erdoberfläche ist die Fallbeschleunigung nur noch halb so groß wie am Boden? ($R_E = 6370\,\text{km}$; Ergebnis in km, drei signifikante Stellen)
teile:
  - typ: zahl
    loesung: "6370*(sqrt(2)-1)"
    einheit: "km"
    anzeige: '2639 \approx 2{,}64\cdot 10^{3}'
    fehler:
      - wert: "6370"
        meldung: Bei $h = R_E$ verdoppelt sich der Abstand, und $g$ sinkt auf ein **Viertel**. Für die Hälfte reicht ein kleinerer Abstand.
      - wert: "6370*sqrt(2)"
        meldung: Das ist der Abstand vom Erd**mittelpunkt**. Gefragt ist die Höhe über der Oberfläche, also noch $R_E$ abziehen.
hinweise:
  - 'Ansatz: $\left(\dfrac{R_E}{R_E + h}\right)^2 = \dfrac12$.'
  - 'Wurzel ziehen: $\dfrac{R_E + h}{R_E} = \sqrt 2$. Dann nach $h$ auflösen.'
gefuehrt:
  - text: Schreib die Bedingung als Gleichung. Welcher Bruch muss im Quadrat $\tfrac12$ ergeben?
    erklaerung: '$\left(\dfrac{R_E}{R_E + h}\right)^2 = \dfrac12$, denn $g(h) = g_0\left(\dfrac{R_E}{R_E + h}\right)^2$ soll $\tfrac12 g_0$ sein.'
  - text: Kehre den Bruch um und zieh die Wurzel. Wie groß ist das Verhältnis $(R_E + h)/R_E$?
    teil: { typ: zahl, loesung: "sqrt(2)" }
    erklaerung: '$\dfrac{R_E + h}{R_E} = \sqrt 2 = 1{,}414$.'
  - text: Wie weit ist der Punkt vom Erdmittelpunkt entfernt (in km)?
    teil: { typ: zahl, loesung: "6370*sqrt(2)", einheit: "km" }
    erklaerung: '$R_E + h = 1{,}414\cdot 6370\,\text{km} = 9009\,\text{km}$.'
  - text: Wie hoch über der Oberfläche ist das (in km)?
    teil: { typ: zahl, loesung: "6370*(sqrt(2)-1)", einheit: "km" }
    erklaerung: '$h = 9009\,\text{km} - 6370\,\text{km} = 2639\,\text{km}$.'
loesung: |
  **Ansatz:** $g(h) = \tfrac12 g_0$ heißt $\left(\dfrac{R_E}{R_E + h}\right)^2 = \dfrac12$.
  ---
  **Umformen:** Kehrwert und Wurzel: $\dfrac{R_E + h}{R_E} = \sqrt 2$, also $h = R_E(\sqrt 2 - 1)$.
  ---
  **Ergebnis:** $h = 6370\,\text{km}\cdot 0{,}414 = 2639\,\text{km}$. Probe: $(6370/9009)^2 = 0{,}500$. ✓
```

```aufgabe
id: p6-7-gezeiten
titel: Warum gibt es zwei Flutberge?
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  An den meisten Küsten gibt es zweimal am Tag Flut. Es gibt also auch auf der **mondabgewandten** Seite der Erde einen Flutberg. Welche Erklärung ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Der Mond zieht die abgewandte Seite schwächer an als den Erdmittelpunkt. Das Wasser dort bleibt hinter der Erde zurück."
      - "Der Mond zieht auch das Wasser auf der Rückseite der Erde zu sich, quer durch die Erde hindurch."
      - "Die Zentrifugalkraft der täglichen Erddrehung schleudert das Wasser auf der Rückseite hinaus."
      - "Auf der Rückseite zieht die Sonne das Wasser an."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Würde der Mond das Wasser einfach zu sich ziehen, gäbe es nur auf der Mondseite einen Berg. Entscheidend ist der **Unterschied** der Anziehung zwischen Wasser und Erdmittelpunkt.
      - wert: 2
        meldung: Die Erddrehung wirkt auf allen Seiten gleich und plattet die Erde nur am Äquator ab. Sie erklärt nicht, warum der zweite Berg genau dem Mond gegenüber liegt.
      - wert: 3
        meldung: Die Sonne steht nicht immer hinter der Erde, der zweite Flutberg liegt aber immer dem **Mond** gegenüber.
hinweise:
  - Vergleiche die Anziehung des Mondes auf drei Punkte, die verschieden weit von ihm entfernt sind.
  - Die ganze Erde wird mit der Beschleunigung ihres Mittelpunkts zum Mond hin bewegt. Was macht Wasser, das schwächer beschleunigt wird?
loesung: |
  **Ansatz:** Es zählt der Unterschied der Anziehung. Der Mond beschleunigt nahe Teile stärker als ferne.
  ---
  **Mondseite:** Das Wasser wird stärker zum Mond beschleunigt als der Erdmittelpunkt und eilt voraus.
  ---
  **Gegenseite:** Das Wasser wird schwächer beschleunigt als der Erdmittelpunkt und bleibt zurück. Von der Erde aus gesehen wölbt es sich ebenfalls nach außen, so entsteht der zweite Flutberg.
```

```aufgabe
id: p6-erdmasse
titel: Die Erde wiegen
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Bestimme aus $g = 9{,}81\,\text{m/s}^2$, dem Erdradius $R_E = 6{,}37\cdot 10^{6}\,\text{m}$ und $G$ die Masse der Erde. Berechne damit die mittlere Dichte der Erde. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Erdmasse
    loesung: "9.81*(6.37e6)^2/6.674e-11"
    einheit: "kg"
    anzeige: '5{,}96\cdot 10^{24}'
    fehler:
      - wert: "9.81*6.37e6/6.674e-11"
        meldung: Aus $g = G M/R^2$ folgt $M = g R^2/G$. Der Radius steht im Quadrat.
  - typ: zahl
    label: mittlere Dichte
    loesung: "9.81*(6.37e6)^2/6.674e-11/(4/3*pi*(6.37e6)^3)"
    einheit: "kg/m³"
    anzeige: '5510'
    fehler:
      - wert: "9.81*(6.37e6)^2/6.674e-11/(4*pi*(6.37e6)^2)"
        meldung: $4\pi R^2$ ist die **Oberfläche** der Kugel. Für die Dichte brauchst du das Volumen $\tfrac43\pi R^3$.
hinweise:
  - '$g = G M/R^2$ nach $M$ auflösen.'
  - 'Volumen einer Kugel $V = \tfrac43\pi R^3$, Dichte $\rho = M/V$.'
loesung: |
  **Modell:** Die Erde ist eine Kugel. An ihrer Oberfläche gilt $g = G M_E/R_E^2$. Alles außer $M_E$ ist bekannt.
  ---
  **Masse:** $M_E = \dfrac{g R_E^2}{G} = \dfrac{9{,}81\,\text{m/s}^2\cdot(6{,}37\cdot 10^{6}\,\text{m})^2}{6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2} = 5{,}96\cdot 10^{24}\,\text{kg}$.
  ---
  **Volumen:** $V = \tfrac43\pi R_E^3 = \tfrac43\pi\cdot(6{,}37\cdot 10^6\,\text{m})^3 = 1{,}08\cdot 10^{21}\,\text{m}^3$.
  ---
  **Dichte:** $\rho = \dfrac{M}{V} = \dfrac{5{,}96\cdot 10^{24}\,\text{kg}}{1{,}08\cdot 10^{21}\,\text{m}^3} = 5510\,\text{kg/m}^3$. Gesteine an der Oberfläche haben nur etwa $2700\,\text{kg/m}^3$. Das Erdinnere muss also viel dichter sein: Dort liegt ein Kern aus Eisen und Nickel.
```

```aufgabe
id: p6-7-planet-faktor
titel: Was wiegst du auf einem fremden Planeten?
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Gib jeweils an, um welchen Faktor sich die Fallbeschleunigung an der Oberfläche gegenüber der Erde ändert, und begründe mit $g = G M/R^2$.

  a) Ein Planet hat die doppelte Masse und den doppelten Radius der Erde.

  b) Ein Planet hat denselben Radius wie die Erde, besteht aber aus Gestein mit der doppelten mittleren Dichte.
teile:
  - typ: zahl
    label: a) Faktor
    loesung: "2/2^2"
    anzeige: '0{,}5'
    fehler:
      - wert: "1"
        meldung: Masse und Radius verdoppeln sich, aber der Radius steht im **Quadrat**. Sein Einfluss ist stärker.
      - wert: "2"
        meldung: Der doppelte Radius im Nenner wiegt die doppelte Masse mehr als auf. $2/2^2 = 0{,}5$.
  - typ: zahl
    label: b) Faktor
    loesung: "2"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: Bei gleichem Volumen und doppelter Dichte ist die Masse doppelt so groß. Mehr Masse bei gleichem Radius heißt größeres $g$.
hinweise:
  - 'Setze die Faktoren in $g = G M/R^2$ ein: Masse im Zähler, Radius im Quadrat im Nenner.'
  - 'Für b): Masse ist Dichte mal Volumen. Das Volumen bleibt gleich.'
loesung: |
  **Ansatz:** Proportionalitätsschluss mit $g = G\dfrac{M}{R^2}$. Man setzt die Faktoren ein und vergleicht mit der Erde.
  ---
  **a)** $g' = G\dfrac{2M}{(2R)^2} = \dfrac{2}{4}\,G\dfrac{M}{R^2} = 0{,}5\,g$. Trotz doppelter Masse wiegst du dort nur halb so viel.
  ---
  **b)** $M = \rho V$. Bei gleichem Radius ist $V$ gleich, also $M' = 2M$ und $g' = 2g$.
  ---
  **Deutung:** Für $g$ zählt nicht die Masse allein, sondern wie dicht sie um den Mittelpunkt gepackt ist. Bei gleicher Dichte wächst $g$ sogar proportional zum Radius, denn $M \sim R^3$ und $M/R^2 \sim R$.
```

## Satelliten und Schwerelosigkeit

```aufgabe
id: p6-8-check
art: check
titel: "Vorwissen: die Waage im freien Fall"
niveau: 1
angabe: |
  Eine Person springt von einem Trampolin hoch. An ihren Füßen ist eine kleine Waage festgeschnallt. Was zeigt die Waage, während die Person frei durch die Luft fliegt (ohne Luftwiderstand)?
teile:
  - typ: auswahl
    optionen:
      - "null"
      - "die normale Gewichtskraft der Person"
      - "beim Aufsteigen mehr, beim Herunterfallen weniger"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Gewichtskraft wirkt zwar weiter. Person und Waage fallen aber gleich schnell und drücken deshalb nicht aufeinander.
      - wert: 2
        meldung: In der Luft wirkt nur die Gewichtskraft, beim Steigen wie beim Fallen ist die Beschleunigung $g$ nach unten. Die Waage zeigt die ganze Zeit dasselbe, nämlich null.
hinweise:
  - Person und Waage haben in der Luft dieselbe Beschleunigung. Drückt dann eine auf die andere?
loesung: |
  In der Luft werden Person und Waage beide mit $g$ nach unten beschleunigt, beim Steigen genauso wie beim Fallen. Sie drücken nicht aufeinander.
  ---
  Die Waage zeigt null. Das ist **Schwerelosigkeit**, obwohl die Erde voll an der Person zieht. Wiederholen: [Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).
```

### Ein Gedankenexperiment: Newtons Kanone

Newton stellte sich eine Kanone auf einem sehr hohen Berg vor, so hoch, dass keine Luft mehr bremst. Sie schießt eine
Kugel waagrecht ab. Langsame Kugeln fallen in der Nähe zu Boden, schnellere fliegen weiter (siehe
[Waagrechter und schiefer Wurf](/lernen/physik1/kinematik/waagrechter-und-schiefer-wurf)). Die Erde ist aber rund.
Je weiter die Kugel fliegt, desto mehr krümmt sich der Boden unter ihr weg. Ist die Kugel schnell genug, krümmt sich die
Erdoberfläche genauso stark weg, wie die Kugel fällt. Dann kommt sie nie am Boden an. Sie fällt **um die Erde herum**.
Das ist eine **Umlaufbahn**.

```plot
x: [-1.4, 1.4]
y: [-1.3, 1.4]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 2 }
  - { x: "1.1*cos(t)", y: "1.1*sin(t)", t: [0, "2*pi"], farbe: 1 }
  - { x: "t", y: "1.1 - 3*t^2", t: [0, 0.201], farbe: 0 }
  - { x: "t", y: "1.1 - 1.5*t^2", t: [0, 0.319], farbe: 0 }
  - { x: "t", y: "1.1 - 0.9*t^2", t: [0, 0.528], farbe: 0 }
punkte:
  - { x: 0, y: 1.1, label: "Kanone" }
  - { x: 0, y: 0, label: "Erde" }
beschriftung: "Newtons Kanone auf einem hohen Berg. Langsame Kugeln (blau) treffen den Boden umso weiter entfernt, je schneller sie sind. Ab einer bestimmten Geschwindigkeit krümmt sich die Erde (grün) genauso stark weg, wie die Kugel fällt. Die Kugel umkreist die Erde (orange) und fällt dabei ständig, ohne je anzukommen."
```

**In Worten:** Ein Satellit ist ein Körper, der ständig fällt und dabei die Erde immer verfehlt. Genau so hatte Newton
in der Lektion [Das Gravitationsgesetz](/lernen/physik1/kreisbewegung-gravitation/das-gravitationsgesetz) den Mond erklärt.

### Bahngeschwindigkeit und Umlaufzeit

Auf einer Kreisbahn mit Radius $r$ um einen Zentralkörper der Masse $M$ übernimmt die Gravitation die Rolle der
Zentripetalkraft:
$$G\,\frac{M\, m}{r^2} = \frac{m\, v^2}{r}.$$
Wir teilen beide Seiten durch $m$ und multiplizieren mit $r$. So bleibt $v^2 = G M/r$, also
$$v = \sqrt{\frac{G M}{r}}.$$
Für einen Umlauf legt der Satellit den Umfang $2\pi r$ zurück. Aus $T = 2\pi r/v$ folgt
$$T = 2\pi\sqrt{\frac{r^3}{G M}}.$$
Dabei ist $r$ der Abstand vom **Mittelpunkt** des Zentralkörpers, also $r = R + h$. Für die Erde ist
$G M_E = 3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2$.

Drei Folgerungen sind wichtig:

- Die **Masse des Satelliten kürzt sich**. Ein Schraubenschlüssel, den ein Astronaut loslässt, fliegt auf derselben
  Bahn neben der Station weiter.
- **Weiter außen ist ein Satellit langsamer** und braucht länger für eine Runde. Das ist anders als bei einer
  Drehscheibe, auf der außen alles schneller ist.
- Knapp über der Erdoberfläche ($r \approx R_E$) wäre $v_1 = \sqrt{G M_E/R_E} = \sqrt{g R_E} \approx 7{,}9\,\text{km/s}$.
  Das ist die **erste kosmische Geschwindigkeit**.

:::beispiel[Ein Erdbeobachtungssatellit in 800 km Höhe]
Ein Erdbeobachtungssatellit umkreist die Erde in $800\,\text{km}$ Höhe.

**Schritt 1, Bahnradius:** $r = R_E + h = 6370\,\text{km} + 800\,\text{km} = 7170\,\text{km} = 7{,}17\cdot 10^6\,\text{m}$.

**Schritt 2, Geschwindigkeit:** $v = \sqrt{\dfrac{3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2}{7{,}17\cdot 10^6\,\text{m}}} = \sqrt{5{,}56\cdot 10^7\,\text{m}^2/\text{s}^2} = 7{,}45\cdot 10^3\,\text{m/s}$.

**Schritt 3, Umlaufzeit:** $T = \dfrac{2\pi r}{v} = \dfrac{2\pi\cdot 7{,}17\cdot 10^6\,\text{m}}{7450\,\text{m/s}} = 6050\,\text{s} = 101\,\text{min}$.

**Deutung:** Der Satellit umrundet die Erde gut vierzehnmal am Tag. Fliegt er auf einer Bahn über die Pole, dreht sich die
Erde unter ihm weg, und er sieht nach einigen Tagen jeden Ort der Erde einmal.
:::

Man unterscheidet grob drei Bahnfamilien. **Niedrige Bahnen** ($200$ bis $2000\,\text{km}$, Umlauf $90$ bis
$130\,\text{min}$) nutzen Raumstationen, Erdbeobachtungs- und Internetsatelliten. Sie werden von Resten der Atmosphäre
gebremst. **Mittlere Bahnen** (rund $20\,000\,\text{km}$, Umlauf etwa $12\,\text{h}$) nutzen GPS und Galileo.
**Geostationäre Bahnen** ($36\,000\,\text{km}$) nutzen Fernseh- und Wettersatelliten.

### Die geostationäre Bahn

Ein Satellit, der über dem Äquator genau in einem **Sterntag** ($T = 23\,\text{h}\,56\,\text{min} = 86\,164\,\text{s}$,
die Zeit für eine Erddrehung gegenüber den Sternen) in Drehrichtung der Erde umläuft, dreht sich mit der Erde mit. Von
der Erde aus gesehen steht er still. Eine Satellitenschüssel muss deshalb nicht nachgeführt werden.

:::beispiel[Wie hoch fliegt ein geostationärer Satellit?]
**Schritt 1, Formel umstellen:** Aus $T = 2\pi\sqrt{r^3/(G M)}$ folgt durch Quadrieren $T^2 = 4\pi^2 r^3/(G M)$, also
$r^3 = \dfrac{G M T^2}{4\pi^2}$.

**Schritt 2, Einsetzen:** $r^3 = \dfrac{3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2\cdot(86\,164\,\text{s})^2}{4\pi^2} = 7{,}49\cdot 10^{22}\,\text{m}^3$.

**Schritt 3, Kubikwurzel:** $r = \sqrt[3]{7{,}49\cdot 10^{22}\,\text{m}^3} = 4{,}22\cdot 10^7\,\text{m} = 42\,200\,\text{km}$
(siehe Mathematik, [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln)).

**Schritt 4, Höhe:** $h = r - R_E = 42\,200\,\text{km} - 6370\,\text{km} \approx 35\,800\,\text{km}$.

**Deutung:** Es gibt nur **diese eine** Höhe. Und die Bahn muss über dem Äquator liegen, denn jede Kreisbahn läuft um den
Erdmittelpunkt. Eine Bahn über Wien würde abwechselnd nördlich und südlich des Äquators verlaufen.
:::

### Warum sind Astronauten schwerelos?

Diese Stelle ist für fast alle ungewohnt. Lies sie langsam.

**Worum geht es in einem Satz?** Astronauten schweben nicht, weil die Erde sie nicht mehr anzieht, sondern weil sie
gemeinsam mit ihrer Station **frei fallen**.

**In Schritten:**

1. In $400\,\text{km}$ Höhe ist $g$ noch $8{,}7\,\text{m/s}^2$, die Anziehung ist also fast so stark wie am Boden.
2. Auf die Station und auf jeden Astronauten wirkt nur die Gravitation. Sie gibt allen dieselbe Beschleunigung, denn die
   Masse kürzt sich.
3. Weil alle gleich beschleunigt werden, muss keiner den anderen schieben oder tragen. Der Boden drückt nicht gegen die
   Füße, eine Waage zeigt null.
4. Das Gefühl von Gewicht kommt nur von dieser Kraft der Unterlage. Fehlt sie, fühlt man sich schwerelos.

**In Worten zurückübersetzt:** Schwerelosigkeit heißt freier Fall, nicht „keine Schwerkraft“. Dasselbe erlebst du für
Sekundenbruchteile auf dem Trampolin, im Parabelflug für etwa $20\,\text{s}$.

**Das typische Missverständnis:** „Im Weltall gibt es keine Schwerkraft.“ Ohne Schwerkraft würde die Station geradeaus ins
All fliegen. Gerade die Gravitation zwingt sie auf ihre Kreisbahn.

```aufgabe
id: p6-8-check-waage
art: check
titel: "Kurz geprüft: eine Waage in der Raumstation"
niveau: 1
angabe: |
  Ein Astronaut ($70\,\text{kg}$) stellt sich in der Raumstation auf eine Personenwaage, die am Boden festgeschraubt ist. Was zeigt die Waage?
teile:
  - typ: auswahl
    optionen:
      - "null"
      - 'etwa $608\,\text{N}$, weil die Erde ihn dort mit $8{,}7\,\text{m/s}^2$ anzieht'
      - '$687\,\text{N}$ wie auf der Erde'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: So groß ist seine Gewichtskraft dort tatsächlich. Die Waage misst aber nur, wie stark er auf sie drückt, und Waage und Astronaut fallen gemeinsam.
      - wert: 2
        meldung: Selbst die Gewichtskraft ist dort etwas kleiner. Und die Waage misst gar nicht die Gewichtskraft, sondern die Kraft, mit der er auf sie drückt.
hinweise:
  - Eine Waage misst die Kraft, mit der man auf sie drückt. Drückt man auf etwas, das gleich schnell mitfällt?
loesung: |
  Waage und Astronaut fallen gemeinsam mit derselben Beschleunigung um die Erde.
  ---
  Er drückt nicht auf die Waage, sie zeigt null, obwohl seine Gewichtskraft rund $608\,\text{N}$ beträgt.
```

:::merke[So rechnest du mit Satellitenbahnen]
1. Ansatz immer: Gravitation $=$ Zentripetalkraft, $G M m/r^2 = m v^2/r$.
2. $r = R + h$ in Metern. Umlaufzeit in Sekunden.
3. $v = \sqrt{G M/r}$, $T = 2\pi\sqrt{r^3/(G M)}$, umgekehrt $r = \sqrt[3]{G M T^2/(4\pi^2)}$.
4. Plausibilität: Erdnahe Satelliten fliegen mit $7$ bis $8\,\text{km/s}$ und brauchen rund $1{,}5\,\text{h}$ für eine Runde.
:::

:::achtung[Fehler: die Umlaufzeit in Stunden eingesetzt]
Für die geostationäre Bahn rechnet jemand mit $T = 24$:

Falsch: $r = \sqrt[3]{\dfrac{3{,}98\cdot 10^{14}\cdot 24^2}{4\pi^2}}\,\text{m} = 1{,}8\cdot 10^5\,\text{m} = 180\,\text{km}$.

Ein Bahnradius von $180\,\text{km}$ läge tief **im** Erdinneren. In der Formel steckt $G$ mit Sekunden, also muss auch
$T$ in Sekunden stehen: $T = 86\,164\,\text{s}$ ergibt $r = 42\,200\,\text{km}$.
:::

:::achtung[Fehler: „In der Raumstation wirkt keine Gewichtskraft“]
Ein Schüler rechnet für einen Astronauten ($70\,\text{kg}$) in der ISS ($400\,\text{km}$ Höhe): „Er ist schwerelos, also
$F_G = 0\,\text{N}$.“

Die Gewichtskraft ist die Anziehung der Erde, und die ist dort fast so groß wie am Boden:
$F_G = m g(h) = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot(6370/6770)^2 = 608\,\text{N}$. Null ist nur die Kraft, mit der
er auf eine Unterlage drückt, weil Unterlage und Astronaut gemeinsam fallen.
:::

```reflexion
frage: Ein Kind fragt dich, warum die Astronauten in der Raumstation schweben, obwohl die Erde sie noch fast genauso stark anzieht wie hier unten. Erkläre es so, dass das Kind es versteht.
antwort: |
  Die Raumstation fällt die ganze Zeit zur Erde hin, so wie ein geworfener Ball. Sie ist aber so schnell seitwärts
  unterwegs, dass sie beim Fallen immer an der Erde vorbeifällt, sie fällt also im Kreis herum. Die Astronauten fallen genau
  gleich schnell mit. Deshalb drückt der Boden der Station nicht gegen ihre Füße, und nichts drückt gegen irgendetwas. Dieses
  Drücken spüren wir hier unten als „Gewicht“. Fehlt es, fühlt man sich schwerelos, obwohl die Erde weiter zieht.
```

### Aufgaben zu Satelliten und Schwerelosigkeit

```aufgabe
id: p6-8-warum-schweben
titel: Warum schweben Astronauten?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche Erklärung für das Schweben der Astronauten in der Raumstation ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "In $400\\,\\text{km}$ Höhe gibt es keine Schwerkraft mehr."
      - "Die Station ist so weit weg, dass die Anziehung der Erde vernachlässigbar ist."
      - "Station und Astronauten fallen gemeinsam frei um die Erde, deshalb drückt nichts gegen die Astronauten."
      - "Die Zentrifugalkraft hebt die Gewichtskraft auf, deshalb wirkt keine Kraft auf die Astronauten."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Schwerkraft hat unbegrenzte Reichweite. In $400\,\text{km}$ Höhe ist $g$ noch $8{,}7\,\text{m/s}^2$.
      - wert: 1
        meldung: Die Anziehung ist dort nur um $11\,\%$ schwächer als am Boden. Ohne sie würde die Station geradeaus davonfliegen.
      - wert: 3
        meldung: Von außen betrachtet gibt es keine Zentrifugalkraft. Würde keine Kraft wirken, flöge die Station geradeaus. Die Gravitation wirkt und biegt die Bahn.
hinweise:
  - Was zeigt eine Waage in einem frei fallenden Lift?
loesung: |
  Die Gravitation wirkt in der Station fast so stark wie am Boden. Sie hält Station und Astronauten auf der Kreisbahn.
  ---
  Beide werden gleich beschleunigt, sie fallen also gemeinsam frei. Deshalb übt nichts eine Kraft auf die Astronauten aus, die sie als Gewicht spüren könnten.
```

```aufgabe
id: p6-8-newton-kanone
titel: Die Mindestgeschwindigkeit für Newtons Kanone
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Wie schnell müsste eine Kugel knapp über der Erdoberfläche waagrecht fliegen, damit sie die Erde auf einer Kreisbahn umrundet, ohne jemals zu landen (ohne Luft)? Nutze $g = 9{,}81\,\text{m/s}^2$ und $R_E = 6{,}37\cdot 10^6\,\text{m}$. Ergebnis in km/s, drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "sqrt(9.81*6.37e6)/1000"
    einheit: "km/s"
    anzeige: '7{,}91'
    fehler:
      - wert: "sqrt(2*9.81*6.37e6)/1000"
        meldung: Das ist die Fluchtgeschwindigkeit, mit der man der Erde ganz entkommt. Für eine Kreisbahn genügt $\sqrt{g R}$.
      - wert: "sqrt(9.81*6.37e6)"
        meldung: Das ist das Ergebnis in m/s. Gefragt ist km/s.
hinweise:
  - 'Knapp über dem Boden liefert die Gewichtskraft $m g$ die Zentripetalkraft $m v^2/R_E$.'
loesung: |
  **Ansatz:** Auf der Kreisbahn knapp über dem Boden muss die Gewichtskraft die Zentripetalkraft liefern: $m g = \dfrac{m v^2}{R_E}$, also $v = \sqrt{g R_E}$.
  ---
  $v = \sqrt{9{,}81\,\text{m/s}^2\cdot 6{,}37\cdot 10^6\,\text{m}} = 7{,}91\cdot 10^3\,\text{m/s} = 7{,}91\,\text{km/s}$, die erste kosmische Geschwindigkeit. Das sind rund $28\,000\,\text{km/h}$.
```

```aufgabe
id: p6-8-v-aus-r
titel: Geschwindigkeit auf einer Kreisbahn
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Satellit umkreist die Erde auf einer Kreisbahn mit dem Radius $8{,}0\cdot 10^6\,\text{m}$, gemessen vom Erdmittelpunkt. Wie schnell ist er (in m/s, drei signifikante Stellen)? ($G M_E = 3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2$)
teile:
  - typ: zahl
    loesung: "sqrt(3.984e14/8.0e6)"
    einheit: "m/s"
    anzeige: '7057 \approx 7{,}06\cdot 10^{3}'
    fehler:
      - wert: "3.984e14/8.0e6"
        meldung: Das ist $v^2$. Zieh noch die Wurzel.
      - wert: "sqrt(3.984e14/(8.0e6-6.37e6))"
        meldung: Der Radius ist schon vom Erdmittelpunkt aus gemessen. Du darfst den Erdradius nicht abziehen.
hinweise:
  - '$v = \sqrt{G M/r}$, $r$ vom Erdmittelpunkt.'
loesung: |
  **Ansatz:** Gravitation gleich Zentripetalkraft liefert $v = \sqrt{G M_E/r}$.
  ---
  $v = \sqrt{\dfrac{3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2}{8{,}0\cdot 10^{6}\,\text{m}}} = \sqrt{4{,}98\cdot 10^7\,\text{m}^2/\text{s}^2} = 7{,}06\cdot 10^3\,\text{m/s}$. Etwas langsamer als knapp über dem Boden, wie es weiter außen sein muss.
```

```aufgabe
id: p6-satellit-iss
titel: Bahn der ISS
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Berechne Bahngeschwindigkeit (in m/s) und Umlaufzeit (in Minuten) eines Satelliten in $400\,\text{km}$ Höhe über der Erde ($M_E = 5{,}97\cdot 10^{24}\,\text{kg}$, $R_E = 6370\,\text{km}$). Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Geschwindigkeit
    loesung: "sqrt(6.674e-11*5.97e24/6.77e6)"
    einheit: "m/s"
    anzeige: '7672 \approx 7{,}67\cdot 10^{3}'
    fehler:
      - wert: "sqrt(6.674e-11*5.97e24/4e5)"
        meldung: Du hast die Höhe statt des Abstands vom Erdmittelpunkt eingesetzt. $r = R_E + h = 6{,}77\cdot 10^6\,\text{m}$.
      - wert: "sqrt(6.674e-11*5.97e24/6.37e6)"
        meldung: Das ist die Geschwindigkeit knapp über dem Boden. In $400\,\text{km}$ Höhe ist $r = 6{,}77\cdot 10^6\,\text{m}$.
  - typ: zahl
    label: Umlaufzeit in min
    loesung: "2*pi*6.77e6/sqrt(6.674e-11*5.97e24/6.77e6)/60"
    einheit: "min"
    anzeige: '92{,}4'
    fehler:
      - wert: "2*pi*6.77e6/sqrt(6.674e-11*5.97e24/6.77e6)"
        meldung: Das ist die Umlaufzeit in Sekunden. Teile durch $60$.
hinweise:
  - 'Gravitation = Zentripetalkraft: $G M m/r^2 = m v^2/r$.'
  - '$r = R_E + h = 6{,}77\cdot 10^{6}\,\text{m}$. Dann $T = 2\pi r/v$.'
gefuehrt:
  - text: Wie groß ist der Bahnradius in m?
    teil: { typ: zahl, loesung: "6.77e6", einheit: "m" }
    erklaerung: '$r = 6370\,\text{km} + 400\,\text{km} = 6770\,\text{km} = 6{,}77\cdot 10^6\,\text{m}$.'
  - text: Wie groß ist $G M_E$ in $\text{m}^3/\text{s}^2$?
    teil: { typ: zahl, loesung: "6.674e-11*5.97e24" }
    erklaerung: '$6{,}674\cdot 10^{-11}\cdot 5{,}97\cdot 10^{24} = 3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2$.'
  - text: Berechne $v = \sqrt{G M_E/r}$ in m/s.
    teil: { typ: zahl, loesung: "sqrt(6.674e-11*5.97e24/6.77e6)", einheit: "m/s" }
    erklaerung: '$v = \sqrt{3{,}98\cdot 10^{14}/6{,}77\cdot 10^6}\,\text{m/s} = 7672\,\text{m/s}$.'
  - text: Berechne die Umlaufzeit $T = 2\pi r/v$ in Minuten.
    teil: { typ: zahl, loesung: "2*pi*6.77e6/sqrt(6.674e-11*5.97e24/6.77e6)/60", einheit: "min" }
    erklaerung: '$T = 2\pi\cdot 6{,}77\cdot 10^6\,\text{m}/7672\,\text{m/s} = 5545\,\text{s} = 92{,}4\,\text{min}$.'
loesung: |
  **Ansatz:** Die Gravitation liefert die Zentripetalkraft, also $v = \sqrt{G M_E/r}$ mit $r = 6{,}77\cdot 10^6\,\text{m}$.
  ---
  **Geschwindigkeit:** $v = \sqrt{\dfrac{6{,}674\cdot 10^{-11}\cdot 5{,}97\cdot 10^{24}\,\text{m}^3/\text{s}^2}{6{,}77\cdot 10^{6}\,\text{m}}} = 7672\,\text{m/s}$.
  ---
  **Umlaufzeit:** $T = \dfrac{2\pi r}{v} = \dfrac{2\pi\cdot 6{,}77\cdot 10^{6}\,\text{m}}{7672\,\text{m/s}} = 5545\,\text{s} = 92{,}4\,\text{min}$. Die Besatzung sieht also rund $16$ Sonnenaufgänge pro Tag.
```

```aufgabe
id: p6-8-marsstationaer
titel: Ein „marsstationärer“ Satellit
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Satellit soll über einem Punkt des Mars-Äquators stillstehen. Ein Marstag (Drehung gegenüber den Sternen) dauert $88\,642\,\text{s}$. Der Mars hat die Masse $6{,}42\cdot 10^{23}\,\text{kg}$ und den Radius $3390\,\text{km}$. Runde auf drei signifikante Stellen.

  a) Wie groß muss der Bahnradius sein (in km)?

  b) In welcher Höhe über der Marsoberfläche fliegt der Satellit (in km)?
teile:
  - typ: zahl
    label: a) Bahnradius
    loesung: "nthRoot(6.674e-11*6.42e23*88642^2/(4*pi^2), 3)/1000"
    einheit: "km"
    anzeige: '20431 \approx 2{,}04\cdot 10^{4}'
    fehler:
      - wert: "nthRoot(6.674e-11*5.97e24*88642^2/(4*pi^2), 3)/1000"
        meldung: Du hast die Erdmasse eingesetzt. Zentralkörper ist hier der Mars.
      - wert: "sqrt(6.674e-11*6.42e23*88642^2/(4*pi^2))/1000"
        meldung: Aus $r^3 = G M T^2/(4\pi^2)$ folgt $r$ über die **dritte** Wurzel, nicht die Quadratwurzel.
  - typ: zahl
    label: b) Höhe
    loesung: "nthRoot(6.674e-11*6.42e23*88642^2/(4*pi^2), 3)/1000 - 3390"
    einheit: "km"
    anzeige: '17041 \approx 1{,}70\cdot 10^{4}'
    fehler:
      - wert: "nthRoot(6.674e-11*6.42e23*88642^2/(4*pi^2), 3)/1000"
        meldung: Das ist der Abstand vom Marsmittelpunkt. Für die Höhe ziehst du den Marsradius ab.
hinweise:
  - 'Die Umlaufzeit muss gleich einem Marstag sein. Aus $T = 2\pi\sqrt{r^3/(GM)}$ folgt $r^3 = G M T^2/(4\pi^2)$.'
  - 'Dritte Wurzel ziehen, dann den Marsradius abziehen.'
loesung: |
  **Ansatz:** Der Satellit muss sich in derselben Zeit einmal herumbewegen wie der Mars, also $T = 88\,642\,\text{s}$. Aus $T^2 = 4\pi^2 r^3/(G M)$ folgt $r^3 = \dfrac{G M T^2}{4\pi^2}$.
  ---
  **Einsetzen:** $G M = 6{,}674\cdot 10^{-11}\cdot 6{,}42\cdot 10^{23}\,\text{m}^3/\text{s}^2 = 4{,}28\cdot 10^{13}\,\text{m}^3/\text{s}^2$. $r^3 = \dfrac{4{,}28\cdot 10^{13}\cdot(88\,642)^2}{39{,}48}\,\text{m}^3 = 8{,}53\cdot 10^{21}\,\text{m}^3$.
  ---
  **a)** $r = \sqrt[3]{8{,}53\cdot 10^{21}}\,\text{m} = 2{,}04\cdot 10^7\,\text{m} = 20\,400\,\text{km}$.
  ---
  **b)** $h = 20\,430\,\text{km} - 3390\,\text{km} = 17\,000\,\text{km}$. Weil der Mars leichter ist, liegt die Bahn viel tiefer als die geostationäre Bahn der Erde.
```

```aufgabe
id: p6-8-vierfacher-radius
titel: Viermal so weit draußen
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Satellit B umkreist die Erde auf einer Bahn mit dem **vierfachen** Bahnradius von Satellit A. Um welchen Faktor unterscheiden sich die Größen von B gegenüber A?

  a) Bahngeschwindigkeit

  b) Umlaufzeit
teile:
  - typ: zahl
    label: a) Faktor der Geschwindigkeit
    loesung: "1/sqrt(4)"
    anzeige: '0{,}5'
    fehler:
      - wert: "2"
        meldung: Weiter außen ist ein Satellit **langsamer**, nicht schneller. $v \sim 1/\sqrt r$.
      - wert: "1/4"
        meldung: Der Radius steht unter einer Wurzel, denn $v = \sqrt{G M/r}$. Vierfacher Radius ergibt den Faktor $1/\sqrt 4$.
  - typ: zahl
    label: b) Faktor der Umlaufzeit
    loesung: "4^1.5"
    anzeige: '8'
    fehler:
      - wert: "4"
        meldung: Der Weg wird viermal so lang und die Geschwindigkeit halbiert sich. Beides zusammen ergibt $4\cdot 2 = 8$.
      - wert: "2"
        meldung: $T \sim r^{3/2}$, also $4^{3/2} = 8$.
hinweise:
  - '$v = \sqrt{G M/r}$ und $T = 2\pi\sqrt{r^3/(G M)}$. Setze $4r$ statt $r$ ein.'
  - '$\sqrt 4 = 2$ und $\sqrt{4^3} = \sqrt{64} = 8$.'
loesung: |
  **Ansatz:** Proportionalitätsschluss: $v \sim 1/\sqrt r$ und $T \sim \sqrt{r^3}$.
  ---
  **a)** $v_B = \sqrt{\dfrac{G M}{4r}} = \dfrac{1}{2}\sqrt{\dfrac{G M}{r}} = 0{,}5\,v_A$.
  ---
  **b)** $T_B = 2\pi\sqrt{\dfrac{(4r)^3}{G M}} = \sqrt{64}\cdot 2\pi\sqrt{\dfrac{r^3}{G M}} = 8\,T_A$. Kontrolle: Viermal so langer Weg mit halber Geschwindigkeit dauert $4\cdot 2 = 8$-mal so lang. ✓
```

```aufgabe
id: p6-schwerelos-text
titel: Schwerelos trotz Schwerkraft
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Erkläre, warum Astronauten in der ISS schweben, obwohl die Fallbeschleunigung dort fast $9\,\text{m/s}^2$ beträgt. Gehe dabei auf die Rolle der Gravitation und auf die Bedeutung des Wortes „schwerelos“ ein.
teile:
  - typ: text
    muster: |
      Station und Astronauten bewegen sich gemeinsam im freien Fall um die Erde. Die Gravitation beschleunigt beide gleich stark
      (die Masse kürzt sich) und liefert genau die Zentripetalkraft für die Kreisbahn. Weil alles gleich beschleunigt wird, übt
      nichts eine Kraft auf etwas anderes aus: Der Boden drückt nicht gegen die Füße, eine Waage zeigt null. „Schwerelos“ heißt
      also: ohne Kraft der Unterlage, nicht ohne Schwerkraft.
hinweise:
  - Was zeigt eine Waage in einem frei fallenden Lift?
  - Welche Kraft hält die Station auf ihrer Kreisbahn, und wirkt sie auch auf die Astronauten?
loesung: |
  **Rolle der Gravitation:** Die ISS und alles darin werden von der Erde angezogen. Diese Anziehung ist die Zentripetalkraft der Kreisbahn.
  ---
  **Freier Fall:** Da alle Körper gleich beschleunigt werden, fallen Station und Astronauten gemeinsam. Es gibt keine Kontaktkräfte zwischen ihnen.
  ---
  **Bedeutung:** Das Gefühl von Gewicht entsteht nur durch die Kraft der Unterlage. Fehlt sie, ist man schwerelos, obwohl die Schwerkraft voll wirkt.
```

```aufgabe
id: p6-8-mondmasse-apollo
titel: Den Mond mit einer Raumkapsel wiegen
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Die Kommandokapsel einer Apollo-Mission kreiste $110\,\text{km}$ über der Mondoberfläche (Mondradius $1737\,\text{km}$). Ein Umlauf dauerte $7080\,\text{s}$.

  a) Berechne daraus die Masse des Mondes (in kg, drei signifikante Stellen).

  b) Um wie viel Prozent weicht dein Ergebnis vom heute bekannten Wert $7{,}35\cdot 10^{22}\,\text{kg}$ ab? Nenne einen möglichen Grund.
teile:
  - typ: zahl
    label: a) Mondmasse
    loesung: "4*pi^2*(1.847e6)^3/(6.674e-11*7080^2)"
    einheit: "kg"
    anzeige: '7{,}44\cdot 10^{22}'
    fehler:
      - wert: "4*pi^2*(1.10e5)^3/(6.674e-11*7080^2)"
        meldung: Du hast die Höhe statt des Bahnradius eingesetzt. $r = 1737\,\text{km} + 110\,\text{km} = 1847\,\text{km}$.
      - wert: "4*pi^2*(1.847e6)^2/(6.674e-11*7080^2)"
        meldung: In der Formel steht $r^3$, nicht $r^2$.
  - typ: text
    label: b) Abweichung und Grund
    muster: |
      $(7{,}44 - 7{,}35)/7{,}35 = 1{,}2\,\%$. Mögliche Gründe: Die Umlaufzeit und die Höhe sind gerundet. Die Bahn ist nicht genau
      kreisförmig, und die Masse des Mondes ist nicht gleichmäßig verteilt (es gibt Massenkonzentrationen unter der Oberfläche).
hinweise:
  - 'Gravitation des Mondes = Zentripetalkraft der Kapsel: $G M m/r^2 = m\,(2\pi/T)^2 r$.'
  - 'Nach $M$ auflösen: $M = \dfrac{4\pi^2 r^3}{G T^2}$, mit $r = 1847\,\text{km}$ in Metern.'
loesung: |
  **Modell:** Die Kapsel läuft auf einer Kreisbahn um den Mond. Der Mond liefert mit seiner Gravitation die Zentripetalkraft. Die Masse der Kapsel kürzt sich.
  ---
  **Ansatz:** $G\dfrac{M m}{r^2} = m\left(\dfrac{2\pi}{T}\right)^2 r$, also $M = \dfrac{4\pi^2 r^3}{G T^2}$.
  ---
  **a)** $r = 1{,}847\cdot 10^6\,\text{m}$. $M = \dfrac{39{,}48\cdot(1{,}847\cdot 10^6\,\text{m})^3}{6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2\cdot(7080\,\text{s})^2} = 7{,}44\cdot 10^{22}\,\text{kg}$.
  ---
  **b)** Abweichung $\dfrac{7{,}44 - 7{,}35}{7{,}35} = 1{,}2\,\%$. Die Daten sind gerundet, die Bahn ist nicht exakt kreisförmig, und der Mond hat ungleichmäßig verteilte Massen. So bestimmt man bis heute Massen von Himmelskörpern: mit einem Satelliten in einer Umlaufbahn.
```

## Die Keplerschen Gesetze

```aufgabe
id: p6-9-check
art: check
titel: "Vorwissen: Umlaufzeit und Bahnradius"
niveau: 1
angabe: |
  Für einen Satelliten auf einer Kreisbahn gilt $T^2 = \dfrac{4\pi^2}{G M}\,r^3$. Der Bahnradius wird verdoppelt. Um welchen Faktor ändert sich $T^2$?
teile:
  - typ: zahl
    loesung: "2^3"
    anzeige: '8'
    fehler:
      - wert: "2"
        meldung: Der Radius steht in der **dritten** Potenz. Doppelter Radius ergibt $2^3 = 8$.
      - wert: "4"
        meldung: Im Quadrat steht $T$, der Radius steht hoch drei. $2^3 = 8$.
hinweise:
  - '$4\pi^2/(G M)$ ist für denselben Zentralkörper eine feste Zahl. Setze $2r$ für $r$ ein.'
loesung: |
  $4\pi^2/(G M)$ bleibt gleich. Also ist $T^2$ proportional zu $r^3$.
  ---
  $(2r)^3 = 8 r^3$, also wird $T^2$ achtmal so groß und $T$ selbst $\sqrt 8 = 2{,}83$-mal. Wiederholen: [Satelliten und Schwerelosigkeit](/lernen/physik1/kreisbewegung-gravitation/satelliten-und-schwerelosigkeit).
```

Lange vor Newton, um 1609 und 1619, hatte Johannes Kepler aus den genauen Messungen Tycho Brahes drei Gesetze der
Planetenbewegung herausgelesen. Er wusste nicht, **warum** sie gelten. Er fand sie durch jahrelanges Rechnen in den
Daten, besonders in einer winzigen Abweichung der Marsbahn von einem Kreis. Newton zeigte später, dass alle drei aus
seinem Gravitationsgesetz folgen. Das war ein großer Triumph der Theorie.

### Das erste Gesetz: Ellipsenbahnen

Eine **Ellipse** ist ein gestreckter Kreis. Genauer: die Menge aller Punkte, für die die **Summe** der Abstände zu
zwei festen Punkten gleich ist. Diese zwei Punkte heißen **Brennpunkte**. Du kannst eine Ellipse mit einer Schnur
zeichnen: Die Enden an zwei Reißnägeln festmachen und mit gespannter Schnur den Stift herumführen. Die halbe längste
Ausdehnung heißt **große Halbachse** $a$, die halbe kürzeste Ausdehnung quer dazu **kleine Halbachse** $b$. Ein **Kreis** ist der Sonderfall, bei dem beide Brennpunkte im Mittelpunkt
zusammenfallen, dann ist $a$ der Radius.

```plot
x: [-2.4, 2.6]
y: [-1.9, 2]
gleich: true
kurven:
  - { x: "2*cos(t)", y: "1.6*sin(t)", t: [0, "2*pi"], farbe: 3 }
strecken:
  - { von: [1.2, 0], nach: [1.879, 0.549], farbe: 1 }
  - { von: [1.2, 0], nach: [1.879, -0.549], farbe: 1 }
  - { von: [1.2, 0], nach: [-1.994, 0.12], farbe: 0 }
  - { von: [1.2, 0], nach: [-1.994, -0.12], farbe: 0 }
  - { von: [-2, 0], nach: [2, 0], gestrichelt: true }
punkte:
  - { x: 1.2, y: 0, label: "Sonne (Brennpunkt)" }
  - { x: -1.2, y: 0, label: "leerer Brennpunkt" }
  - { x: 2, y: 0, label: "Perihel" }
  - { x: -2, y: 0, label: "Aphel" }
beschriftung: "Eine stark übertriebene Planetenbahn. Die Sonne steht in einem Brennpunkt, der andere Brennpunkt ist leer. Die gestrichelte Strecke ist die große Achse, ihre Hälfte die große Halbachse a. Die zwei schmalen Dreiecke sind Flächen, die der Fahrstrahl in gleichen Zeiten überstreicht: nahe der Sonne kurz und breit (orange), fern der Sonne lang und schmal (blau). Beide Flächen sind gleich groß."
```

Der sonnennächste Punkt heißt **Perihel**, der sonnenfernste **Aphel**. Die meisten Planetenbahnen sind nur sehr schwach
elliptisch. Der Abstand der Erde zur Sonne schwankt nur um etwa $\pm 1{,}7\,\%$. Die Jahreszeiten kommen deshalb von der
Neigung der Erdachse, nicht vom Abstand. Ein **Gegenbeispiel** zu fast kreisförmigen Bahnen sind Kometen: Der Halleysche
Komet kommt der Sonne bis auf $0{,}59\,\text{AE}$ nahe und entfernt sich bis auf $35\,\text{AE}$. ($1\,\text{AE}$, die
**Astronomische Einheit**, ist der mittlere Abstand Erde–Sonne, $1{,}496\cdot 10^{11}\,\text{m}$.)

:::satz[Keplersche Gesetze]
1. **Ellipsensatz:** Die Planeten bewegen sich auf Ellipsenbahnen. In einem gemeinsamen Brennpunkt steht die Sonne.
2. **Flächensatz:** Die Verbindungslinie Sonne–Planet (der **Fahrstrahl**) überstreicht in gleichen Zeiten gleiche Flächen.
3. **Dritter Satz:** Die Quadrate der Umlaufzeiten verhalten sich wie die dritten Potenzen der großen Halbachsen:
$$\frac{T_1^2}{T_2^2} = \frac{a_1^3}{a_2^3}\qquad\text{oder}\qquad \frac{T^2}{a^3} = \frac{4\pi^2}{G M} = \text{konstant}.$$
Dabei ist $M$ die Masse des **Zentralkörpers**. Die Konstante gilt nur für Körper, die denselben Zentralkörper umlaufen.
:::

### Das zweite Gesetz: nahe der Sonne schneller

Nahe der Sonne ist der Fahrstrahl kurz. Damit er in gleicher Zeit dieselbe Fläche überstreicht, muss der Planet dort
einen längeren Bogen zurücklegen, also schneller sein. Im Aphel ist er am langsamsten. Für Perihel und Aphel lässt sich das
genau fassen. Dort steht die Geschwindigkeit senkrecht auf dem Fahrstrahl, und die in kurzer Zeit $\Delta t$ überstrichene
Fläche ist ein schmales Dreieck mit dem Inhalt $\tfrac12\, r\, v\,\Delta t$. Gleiche Flächen in gleichen Zeiten heißt deshalb
$$r_P\, v_P = r_A\, v_A.$$
Dabei sind $r_P, r_A$ die Abstände von der Sonne und $v_P, v_A$ die Geschwindigkeiten im Perihel und im Aphel. Physikalisch
steckt dahinter die **Drehimpulserhaltung** aus der Lektion
[Rotationsenergie, Rollen und Drehimpuls](/lernen/physik1/drehbewegung-einfache-maschinen/rotationsenergie-rollen-und-drehimpuls):
Die Gravitation zeigt immer zur Sonne und kann den Planeten deshalb nicht „andrehen“.

:::beispiel[Die Erde im Jänner und im Juli]
Anfang Jänner ist die Erde der Sonne am nächsten ($r_P = 1{,}471\cdot 10^{11}\,\text{m}$) und läuft mit $v_P = 30{,}29\,\text{km/s}$.
Anfang Juli ist sie am weitesten weg ($r_A = 1{,}521\cdot 10^{11}\,\text{m}$). Wie schnell ist sie dann?

**Schritt 1, Ansatz:** Flächensatz für Perihel und Aphel: $r_P v_P = r_A v_A$, also $v_A = v_P\cdot\dfrac{r_P}{r_A}$.

**Schritt 2, Einsetzen:** $v_A = 30{,}29\,\text{km/s}\cdot\dfrac{1{,}471}{1{,}521} = 29{,}29\,\text{km/s}$. Die Zehnerpotenzen kürzen sich.

**Schritt 3, Deutung:** Im Winter der Nordhalbkugel ist die Erde $1\,\text{km/s}$ schneller. Deshalb ist das Winterhalbjahr
(von Herbst- bis Frühlingsbeginn) etwa eine Woche kürzer als das Sommerhalbjahr.
:::

### Das dritte Gesetz: Umlaufzeit und Bahngröße

Für Kreisbahnen hast du das dritte Gesetz schon in der Lektion
[Satelliten und Schwerelosigkeit](/lernen/physik1/kreisbewegung-gravitation/satelliten-und-schwerelosigkeit) hergeleitet:
Aus $T = 2\pi\sqrt{r^3/(G M)}$ folgt durch Quadrieren $T^2/r^3 = 4\pi^2/(G M)$. Rechts steht nur die Masse des
Zentralkörpers. Für Ellipsen tritt die große Halbachse $a$ an die Stelle von $r$.

Daraus folgen zwei Anwendungen. Erstens kann man Umlaufzeiten und Bahngrößen ineinander umrechnen, ohne $G$ und $M$ zu
kennen. Zweitens kann man Massen **wiegen**: Aus Umlaufzeit und Bahnradius eines Mondes folgt die Masse seines Planeten.

:::beispiel[Wie lange dauert ein Jupiterjahr?]
Jupiter umläuft die Sonne mit $a = 5{,}20\,\text{AE}$. Die Erde hat $a = 1\,\text{AE}$ und $T = 1$ Jahr.

**Schritt 1, Verhältnis:** Beide umlaufen die Sonne, also gilt $\dfrac{T_J^2}{T_E^2} = \dfrac{a_J^3}{a_E^3}$.

**Schritt 2, Umstellen:** $T_J = T_E\left(\dfrac{a_J}{a_E}\right)^{3/2} = 1\,\text{a}\cdot 5{,}20^{3/2}$. Die Hochzahl $3/2$ heißt
„hoch drei, dann Wurzel“ (siehe [Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln)).

**Schritt 3, Rechnung:** $5{,}20^3 = 140{,}6$, $\sqrt{140{,}6} = 11{,}86$. Also $T_J = 11{,}9$ Jahre.

**Probe:** Jupiter steht jedes Jahr ein Zwölftel weiter im Tierkreis, so kennt man es aus der Astronomie. ✓
:::

:::pruefung[Rechne beim dritten Gesetz in Verhältnissen]
Beim dritten Keplerschen Gesetz lohnt sich der Vergleich mit einem bekannten Körper **desselben Zentralkörpers**. Mit der
Erde als Vergleich ($T = 1$ Jahr, $a = 1\,\text{AE}$) gilt für jeden Planeten unserer Sonne $T[\text{Jahre}] = a[\text{AE}]^{3/2}$.
$G$, $M$ und die Umrechnung in Sekunden fallen weg. Sag in der Prüfung dazu: „Beide umlaufen die Sonne, deshalb gilt dieselbe Konstante.“
:::

```aufgabe
id: p6-9-vorhersage
art: check
titel: "Vorhersage: ein Planet bei 4 AE"
niveau: 1
angabe: |
  Ein Kleinplanet umläuft die Sonne mit $a = 4\,\text{AE}$. Schätze vor dem Widget: Wie lange dauert ein Umlauf?
teile:
  - typ: auswahl
    optionen:
      - "4 Jahre"
      - "8 Jahre"
      - "16 Jahre"
      - "2 Jahre"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Umlaufzeit wächst stärker als der Abstand, denn der Weg wird länger und der Planet zugleich langsamer. $T = a^{3/2} = 4^{1{,}5}$.
      - wert: 2
        meldung: $4^2 = 16$ wäre $T \sim a^2$. Kepler sagt $T^2 \sim a^3$, also $T = 4^{3/2} = \sqrt{64} = 8$.
      - wert: 3
        meldung: Weiter außen dauert ein Umlauf länger als bei der Erde, nicht kürzer. Und zwar mehr als viermal so lang.
hinweise:
  - '$T[\text{Jahre}] = a[\text{AE}]^{3/2}$, also $\sqrt{4^3}$.'
loesung: |
  $T = 4^{3/2}\,\text{a} = \sqrt{4^3}\,\text{a} = \sqrt{64}\,\text{a} = 8\,\text{a}$.
  ---
  Prüfe es im Widget: Bei $x = 4$ zeigt die Kurve $T = 8$.
```

```widget
name: parameter
titel: Drittes Keplersches Gesetz (a in AE, T in Jahren)
props:
  f: "x^(3/2)"
  parameter:
    - { name: k, min: 0.5, max: 2, step: 0.01, wert: 1 }
  x: [0, 10]
  y: [0, 32]
  zusatz: ["k*x^(3/2)"]
```

**Arbeitsauftrag:** Die feste Kurve zeigt $T = a^{3/2}$ für die Planeten unserer Sonne (Merkur $a = 0{,}39$, Erde $1$, Mars
$1{,}52$, Jupiter $5{,}2$, Saturn $9{,}5$). Mit dem Regler $k$ veränderst du die zweite Kurve. Sie zeigt, wie lange die Umläufe
um einen anderen Stern dauern würden, es gilt $k = \sqrt{M_\odot/M}$. **Beobachtung:** Bei $k = 0{,}5$ liegt die Kurve überall
halb so hoch. **Erklärung:** Ein viermal so schwerer Stern zieht stärker, die Planeten laufen schneller und brauchen nur die
halbe Zeit.

:::merke[So rechnest du mit den Keplerschen Gesetzen]
1. Flächensatz zwischen Perihel und Aphel: $r_P v_P = r_A v_A$.
2. Drittes Gesetz als Verhältnis, nur bei **demselben** Zentralkörper: $T_1^2/T_2^2 = a_1^3/a_2^3$.
3. Masse eines Zentralkörpers: $M = \dfrac{4\pi^2 a^3}{G T^2}$, alles in SI-Einheiten.
4. Kontrolle: Weiter außen heißt längere Umlaufzeit und kleinere Geschwindigkeit.
:::

:::achtung[Fehler: die Hochzahl verkehrt herum]
Wie lange braucht ein Kleinplanet mit $a = 4{,}0\,\text{AE}$ für einen Umlauf?

Falsch gerechnet: $T = a^{2/3} = 4{,}0^{2/3}\,\text{a} = 2{,}5\,\text{a}$.

Der Kleinplanet ist viermal so weit von der Sonne entfernt wie die Erde. Sein Weg ist viermal so lang, und er ist zugleich
langsamer. Seine Umlaufzeit muss also **mehr** als vier Jahre betragen, nicht nur $2{,}5$. Hier wurde $T^3 \sim a^2$ statt
$T^2 \sim a^3$ verwendet. Richtig: $T = a^{3/2} = 4{,}0^{3/2}\,\text{a} = 8{,}0\,\text{a}$.
:::

:::achtung[Fehler: das Verhältnis über verschiedene Zentralkörper gebildet]
Jemand will die Umlaufzeit der Erde aus der des Mondes ($27{,}3\,\text{d}$ bei $3{,}84\cdot 10^8\,\text{m}$) berechnen:

Falsch: $T_E = 27{,}3\,\text{d}\cdot\left(\dfrac{1{,}496\cdot 10^{11}}{3{,}84\cdot 10^{8}}\right)^{3/2} = 2{,}1\cdot 10^5\,\text{d} \approx 575\,\text{Jahre}$.

Der Mond umläuft die **Erde**, die Erde umläuft die **Sonne**. Die Konstante $4\pi^2/(G M)$ hängt von der Masse des
Zentralkörpers ab und ist für beide völlig verschieden. Ein Verhältnis darf man nur zwischen Körpern bilden, die denselben
Zentralkörper umlaufen.
:::

```reflexion
frage: Erkläre in eigenen Worten, warum ein Komet in Sonnennähe viel schneller ist als in Sonnenferne. Nutze einmal den Flächensatz und einmal die Energie.
antwort: |
  Mit dem Flächensatz: Der Fahrstrahl muss in gleichen Zeiten gleiche Flächen überstreichen. In Sonnennähe ist er kurz, also
  muss der Komet ein langes Bahnstück zurücklegen, er ist schnell. In Sonnenferne ist der Fahrstrahl lang, ein kurzes Bahnstück
  reicht, er ist langsam. Mit der Energie: Auf dem Weg zur Sonne „fällt“ der Komet tiefer in ihr Gravitationsfeld. Lageenergie
  wird in Bewegungsenergie umgewandelt, ähnlich wie bei einer Kugel, die einen Hang hinunterrollt. Auf dem Rückweg steigt er
  wieder auf und wird langsamer.
```

### Aufgaben zu den Keplerschen Gesetzen

```aufgabe
id: p6-kepler2
titel: Wann ist ein Planet am schnellsten?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Wo auf seiner elliptischen Bahn bewegt sich ein Planet am schnellsten?
teile:
  - typ: auswahl
    optionen:
      - "im sonnennächsten Punkt (Perihel)"
      - "im sonnenfernsten Punkt (Aphel)"
      - "überall gleich schnell"
      - "an den Enden der kleinen Halbachse"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Im Aphel ist der Fahrstrahl am längsten. Dort reicht ein kurzes Bahnstück für dieselbe Fläche, der Planet ist am **langsamsten**.
      - wert: 2
        meldung: Gleich schnell wäre ein Planet nur auf einer Kreisbahn. Auf einer Ellipse ändert sich der Abstand, und mit ihm die Geschwindigkeit.
      - wert: 3
        meldung: Dort ist der Abstand zur Sonne mittel. Am schnellsten ist der Planet dort, wo der Fahrstrahl am kürzesten ist.
hinweise:
  - Flächensatz. Wo ist der Fahrstrahl am kürzesten?
loesung: |
  **Flächensatz:** In gleichen Zeiten gleiche Flächen. Nahe der Sonne ist der Fahrstrahl kurz, also muss der Planet in derselben Zeit einen längeren Bogen zurücklegen.
  ---
  Am schnellsten ist er im Perihel, am langsamsten im Aphel. Physikalisch steckt die Drehimpulserhaltung dahinter.
```

```aufgabe
id: p6-9-saturn
titel: Ein Saturnjahr
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Saturn umläuft die Sonne mit der großen Halbachse $9{,}54\,\text{AE}$. Wie lange dauert ein Saturnjahr (in Erdjahren, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "9.54^1.5"
    einheit: "a"
    anzeige: '29{,}5'
    fehler:
      - wert: "9.54^(2/3)"
        meldung: Die Hochzahl ist verkehrt. Aus $T^2 \sim a^3$ folgt $T = a^{3/2}$.
      - wert: "9.54^3"
        meldung: Das ist $T^2$. Zieh noch die Wurzel.
hinweise:
  - 'Mit der Erde als Vergleich: $T[\text{Jahre}] = a[\text{AE}]^{3/2}$.'
loesung: |
  **Ansatz:** Saturn und Erde umlaufen die Sonne. Also $\dfrac{T_S^2}{(1\,\text{a})^2} = \dfrac{a_S^3}{(1\,\text{AE})^3}$ und $T_S = 9{,}54^{3/2}\,\text{a}$.
  ---
  $9{,}54^3 = 868{,}3$ und $\sqrt{868{,}3} = 29{,}5$. Ein Saturnjahr dauert $29{,}5$ Erdjahre.
```

```aufgabe
id: p6-kepler3
titel: Umlaufzeit des Mars
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Die große Halbachse der Marsbahn ist $1{,}524$-mal so groß wie die der Erdbahn. Wie lange dauert ein Marsjahr in Erdjahren und in Tagen ($1$ Jahr $= 365{,}25$ Tage)? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: in Jahren
    loesung: "1.524^1.5"
    einheit: "a"
    anzeige: '1{,}88'
    fehler:
      - wert: "1.524^2"
        meldung: Das wäre $T \sim a^2$. Kepler sagt $T^2 \sim a^3$, also $T \sim a^{3/2}$.
      - wert: "1.524"
        meldung: Die Umlaufzeit wächst nicht im selben Verhältnis wie der Bahnradius, sondern stärker, mit $a^{3/2}$.
  - typ: zahl
    label: in Tagen
    loesung: "1.524^1.5*365.25"
    einheit: "d"
    anzeige: '687'
    fehler:
      - wert: "1.524^1.5*365.25/24"
        meldung: Du hast zusätzlich durch $24$ geteilt. Für die Umrechnung von Jahren in Tage multiplizierst du nur mit $365{,}25$.
hinweise:
  - '$\dfrac{T_M^2}{T_E^2} = \dfrac{a_M^3}{a_E^3}$'
  - '$T_M = T_E\cdot 1{,}524^{3/2}$ mit $T_E = 1\,\text{a}$.'
gefuehrt:
  - text: Warum darfst du hier Mars direkt mit der Erde vergleichen?
    erklaerung: Beide umlaufen dieselbe Sonne. Die Konstante $T^2/a^3 = 4\pi^2/(G M_\odot)$ ist deshalb für beide gleich.
  - text: Berechne $a_M^3/a_E^3 = 1{,}524^3$.
    teil: { typ: zahl, loesung: "1.524^3" }
    erklaerung: '$1{,}524^3 = 3{,}540$. So groß ist auch $T_M^2/T_E^2$.'
  - text: Zieh die Wurzel. Wie viele Erdjahre dauert ein Marsjahr?
    teil: { typ: zahl, loesung: "1.524^1.5", einheit: "a" }
    erklaerung: '$T_M = \sqrt{3{,}540}\,\text{a} = 1{,}88\,\text{a}$.'
  - text: Rechne in Tage um.
    teil: { typ: zahl, loesung: "1.524^1.5*365.25", einheit: "d" }
    erklaerung: '$1{,}881\cdot 365{,}25\,\text{d} = 687\,\text{d}$.'
loesung: |
  **Ansatz:** Mars und Erde umlaufen die Sonne, also gilt dieselbe Konstante: $\dfrac{T_M}{T_E} = \left(\dfrac{a_M}{a_E}\right)^{3/2}$.
  ---
  **Rechnung:** $1{,}524^3 = 3{,}540$, $\sqrt{3{,}540} = 1{,}881$. Also $T_M = 1{,}88\,\text{a}$.
  ---
  **Tage:** $1{,}881\cdot 365{,}25\,\text{d} = 687\,\text{d}$. Das stimmt mit dem beobachteten Marsjahr überein.
```

```aufgabe
id: p6-9-halley
titel: Der Halleysche Komet im Aphel
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Der Halleysche Komet kommt der Sonne bis auf $0{,}59\,\text{AE}$ nahe und ist dort $54{,}5\,\text{km/s}$ schnell. Sein größter Abstand ist $35\,\text{AE}$. Wie schnell ist er dort (in km/s, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "54.5*0.59/35"
    einheit: "km/s"
    anzeige: '0{,}919'
    fehler:
      - wert: "54.5*35/0.59"
        meldung: Weit draußen ist der Komet **langsamer**. Aus $r_P v_P = r_A v_A$ folgt $v_A = v_P\cdot r_P/r_A$.
      - wert: "54.5*(0.59/35)^2"
        meldung: Der Flächensatz verknüpft $r$ und $v$ linear, $r_P v_P = r_A v_A$. Es gibt kein Quadrat.
hinweise:
  - 'Flächensatz zwischen Perihel und Aphel: $r_P v_P = r_A v_A$.'
  - 'Die Einheit AE kürzt sich im Verhältnis $r_P/r_A$.'
loesung: |
  **Ansatz:** Im Perihel und im Aphel steht die Geschwindigkeit senkrecht zum Fahrstrahl. Der Flächensatz liefert $r_P v_P = r_A v_A$.
  ---
  **Umstellen:** $v_A = v_P\cdot\dfrac{r_P}{r_A} = 54{,}5\,\text{km/s}\cdot\dfrac{0{,}59\,\text{AE}}{35\,\text{AE}}$.
  ---
  **Ergebnis:** $v_A = 0{,}919\,\text{km/s}$, also fast sechzigmal langsamer als in Sonnennähe. Deshalb verbringt der Komet fast seine ganze Umlaufzeit von $76$ Jahren weit draußen.
```

```aufgabe
id: p6-9-diagramm
titel: Die Umlaufzeit aus einem Diagramm
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt für Körper, die die Sonne umlaufen, das Quadrat der Umlaufzeit $T^2$ (in Jahren²) gegen die dritte Potenz der großen Halbachse $a^3$ (in AE³). Der Zwergplanet Ceres ist markiert.

  a) Welche Form hat der Graph, und was bedeutet das?

  b) Lies $T^2$ für Ceres ab und berechne seine Umlaufzeit (in Jahren, drei signifikante Stellen).
plot:
  x: [0, 25]
  y: [0, 25]
  achsen: { x: "a³ in AE³", y: "T² in Jahren²" }
  graphen:
    - { f: "x", von: 0, bis: 24, farbe: 0 }
  punkte:
    - { x: 1, y: 1, label: "Erde" }
    - { x: 3.54, y: 3.54, label: "Mars" }
    - { x: 21.25, y: 21.25, label: "Ceres" }
  strecken:
    - { von: [21.25, 0], nach: [21.25, 21.25], gestrichelt: true }
    - { von: [0, 21.25], nach: [21.25, 21.25], gestrichelt: true }
teile:
  - typ: auswahl
    label: a) Form
    optionen:
      - "eine Gerade durch den Ursprung: T² ist proportional zu a³"
      - "eine Parabel: T wächst mit dem Quadrat von a"
      - "eine waagrechte Gerade: alle haben dieselbe Umlaufzeit"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Aufgetragen sind schon $T^2$ und $a^3$, nicht $T$ und $a$. Dann ergibt das dritte Gesetz eine Gerade.
      - wert: 2
        meldung: Der Graph steigt. Weiter außen dauert ein Umlauf länger.
  - typ: zahl
    label: b) Umlaufzeit von Ceres
    loesung: "sqrt(21.25)"
    einheit: "a"
    anzeige: '4{,}61'
    fehler:
      - wert: "21.25"
        meldung: Abgelesen hast du $T^2$. Die Umlaufzeit ist die Wurzel daraus.
hinweise:
  - Trägt man $T^2$ gegen $a^3$ auf, wird aus dem dritten Keplerschen Gesetz ein einfacher Zusammenhang. Welcher?
  - 'Bei Ceres liest man $T^2 \approx 21\,\text{a}^2$ ab. Dann $T = \sqrt{T^2}$.'
loesung: |
  **Ansatz:** Das dritte Gesetz sagt $T^2/a^3 = $ konstant. Trägt man $T^2$ gegen $a^3$ auf, liegen alle Sonnenumläufer auf einer Geraden durch den Ursprung. Dieses Auftragen heißt **Linearisieren**.
  ---
  **a)** Gerade durch den Ursprung mit Steigung $1\,\text{a}^2/\text{AE}^3$, denn die Erde liegt bei $(1 \mid 1)$.
  ---
  **b)** Ablesen: $T^2 = 21{,}25\,\text{a}^2$, also $T = \sqrt{21{,}25}\,\text{a} = 4{,}61\,\text{a}$. Kontrolle: $a = \sqrt[3]{21{,}25}\,\text{AE} = 2{,}77\,\text{AE}$, und $2{,}77^{3/2} = 4{,}61$. ✓
```

```aufgabe
id: p6-mond-umlauf
titel: Umlaufzeit des Mondes
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Berechne die Umlaufzeit des Mondes um die Erde (in Tagen, drei signifikante Stellen) aus seinem Bahnradius $3{,}84\cdot 10^{8}\,\text{m}$ und der Erdmasse $5{,}97\cdot 10^{24}\,\text{kg}$ (Kreisbahn angenommen).
teile:
  - typ: zahl
    loesung: "2*pi*sqrt((3.84e8)^3/(6.674e-11*5.97e24))/86400"
    einheit: "d"
    anzeige: '27{,}4'
    fehler:
      - wert: "2*pi*sqrt((3.84e8)^3/(6.674e-11*5.97e24))"
        meldung: Das ist die Umlaufzeit in Sekunden. Ein Tag hat $86\,400\,\text{s}$.
      - wert: "2*pi*sqrt((3.84e8)^2/(6.674e-11*5.97e24))/86400"
        meldung: Unter der Wurzel steht $r^3$, nicht $r^2$.
hinweise:
  - '$T = 2\pi\sqrt{r^3/(GM)}$'
  - 'Erst in Sekunden rechnen, dann durch $86\,400$ teilen.'
loesung: |
  **Ansatz:** Die Gravitation der Erde ist die Zentripetalkraft des Mondes: $T = 2\pi\sqrt{\dfrac{r^3}{G M_E}}$.
  ---
  **Bausteine:** $G M_E = 3{,}984\cdot 10^{14}\,\text{m}^3/\text{s}^2$, $r^3 = 5{,}66\cdot 10^{25}\,\text{m}^3$.
  ---
  **Ergebnis:** $T = 2\pi\sqrt{\dfrac{5{,}66\cdot 10^{25}\,\text{m}^3}{3{,}984\cdot 10^{14}\,\text{m}^3/\text{s}^2}} = 2{,}37\cdot 10^{6}\,\text{s} = 27{,}4\,\text{d}$. Das stimmt mit der beobachteten Umlaufzeit von $27{,}3$ Tagen überein: Newtons Test für sein Gesetz.
```

```aufgabe
id: p6-sonnenmasse
titel: Die Sonne wiegen
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Die Erde umläuft die Sonne in $3{,}156\cdot 10^{7}\,\text{s}$ auf einer (nahezu) kreisförmigen Bahn mit Radius $1{,}496\cdot 10^{11}\,\text{m}$. Berechne daraus die Masse der Sonne (in kg, drei signifikante Stellen).
teile:
  - typ: zahl
    loesung: "4*pi^2*(1.496e11)^3/(6.674e-11*(3.156e7)^2)"
    einheit: "kg"
    anzeige: '1{,}99\cdot 10^{30}'
    fehler:
      - wert: "4*pi^2*(1.496e11)^2/(6.674e-11*(3.156e7)^2)"
        meldung: Der Bahnradius steht in der **dritten** Potenz, $M = 4\pi^2 r^3/(G T^2)$.
hinweise:
  - 'Gravitation der Sonne = Zentripetalkraft der Erde: $G M m/r^2 = m\,(2\pi/T)^2 r$.'
  - 'Nach $M$ auflösen: $M = \dfrac{4\pi^2 r^3}{G T^2}$.'
loesung: |
  **Modell:** Die Erde läuft auf einer Kreisbahn um die Sonne. Die Gravitation der Sonne liefert die Zentripetalkraft.
  ---
  **Ansatz:** $G\dfrac{M m}{r^2} = m\dfrac{4\pi^2}{T^2} r$. Die Erdmasse $m$ kürzt sich: $M = \dfrac{4\pi^2 r^3}{G T^2}$.
  ---
  **Rechnung:** $M = \dfrac{39{,}48\cdot(1{,}496\cdot 10^{11}\,\text{m})^3}{6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2\cdot(3{,}156\cdot 10^{7}\,\text{s})^2} = 1{,}99\cdot 10^{30}\,\text{kg}$.
  ---
  **Deutung:** Die Sonne ist rund $330\,000$-mal so schwer wie die Erde. Die Erdmasse kommt in der Rechnung gar nicht vor.
```

```aufgabe
id: p6-9-jupitermasse
titel: Jupiter wiegen mit seinem Mond Io
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Galilei entdeckte 1610 die Jupitermonde. Für den Mond Io misst eine Schülergruppe mit einem Teleskop den Bahnradius $a = (4{,}22 \pm 0{,}04)\cdot 10^8\,\text{m}$ und die Umlaufzeit $T = (1{,}77 \pm 0{,}01)\,\text{d}$.

  a) Berechne die Masse des Jupiter (in kg, drei signifikante Stellen).

  b) Wie groß ist die relative Unsicherheit dieser Masse (in %)? Nutze: Bei Produkten und Potenzen addieren sich die relativen Unsicherheiten, jeweils mit der Hochzahl multipliziert.
teile:
  - typ: zahl
    label: a) Jupitermasse
    loesung: "4*pi^2*(4.22e8)^3/(6.674e-11*(1.77*86400)^2)"
    einheit: "kg"
    anzeige: '1{,}90\cdot 10^{27}'
    fehler:
      - wert: "4*pi^2*(4.22e8)^3/(6.674e-11*1.77^2)"
        meldung: Die Umlaufzeit muss in Sekunden stehen, $1{,}77\,\text{d} = 1{,}77\cdot 86\,400\,\text{s}$.
  - typ: zahl
    label: b) relative Unsicherheit
    loesung: "(3*0.04/4.22 + 2*0.01/1.77)*100"
    einheit: "%"
    anzeige: '4{,}0'
    toleranz: 0.2
    fehler:
      - wert: "(0.04/4.22 + 0.01/1.77)*100"
        meldung: Der Radius steht hoch drei, die Zeit im Quadrat. Die relativen Unsicherheiten werden deshalb mit $3$ und mit $2$ multipliziert.
hinweise:
  - '$M = \dfrac{4\pi^2 a^3}{G T^2}$ mit $T$ in Sekunden.'
  - 'Relative Unsicherheit: $\dfrac{\Delta M}{M} = 3\dfrac{\Delta a}{a} + 2\dfrac{\Delta T}{T}$.'
loesung: |
  **Modell:** Io läuft näherungsweise auf einer Kreisbahn um Jupiter. Jupiters Gravitation ist die Zentripetalkraft, also $M = \dfrac{4\pi^2 a^3}{G T^2}$.
  ---
  **a)** $T = 1{,}77\cdot 86\,400\,\text{s} = 1{,}529\cdot 10^5\,\text{s}$. $M = \dfrac{39{,}48\cdot(4{,}22\cdot 10^8\,\text{m})^3}{6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2\cdot(1{,}529\cdot 10^5\,\text{s})^2} = 1{,}90\cdot 10^{27}\,\text{kg}$.
  ---
  **b)** Relative Unsicherheiten: $\dfrac{\Delta a}{a} = \dfrac{0{,}04}{4{,}22} = 0{,}95\,\%$, $\dfrac{\Delta T}{T} = \dfrac{0{,}01}{1{,}77} = 0{,}56\,\%$. Für $M \sim a^3/T^2$: $3\cdot 0{,}95\,\% + 2\cdot 0{,}56\,\% = 4{,}0\,\%$ (siehe [Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung)).
  ---
  **Ergebnis:** $M_J = (1{,}90 \pm 0{,}08)\cdot 10^{27}\,\text{kg}$, etwa $320$ Erdmassen. Den größten Beitrag liefert der Radius, weil er hoch drei eingeht. Ihn sollte man also am genauesten messen.
```

## Gravitationsenergie, Bahnwechsel und Fluchtgeschwindigkeit

```aufgabe
id: p6-10-check
art: check
titel: "Vorwissen: Lageenergie nahe dem Boden"
niveau: 1
angabe: |
  Ein Rucksack mit $8{,}0\,\text{kg}$ wird $25\,\text{m}$ hoch auf einen Turm getragen. Um wie viel nimmt seine Lageenergie zu (in J)?
teile:
  - typ: zahl
    loesung: "8.0*9.81*25"
    einheit: "J"
    anzeige: '1962 \approx 1{,}96\cdot 10^{3}'
    fehler:
      - wert: "8.0*25"
        meldung: Die Fallbeschleunigung fehlt. Die Lageenergie ist $m g h$.
      - wert: "0.5*8.0*9.81*25"
        meldung: Der Faktor $\tfrac12$ gehört zur Bewegungsenergie $\tfrac12 m v^2$, nicht zur Lageenergie.
hinweise:
  - 'Nahe der Erdoberfläche gilt $\Delta E_{\text{pot}} = m g h$.'
loesung: |
  Nahe dem Boden ist $g$ konstant, und die Hubarbeit ist $m g h$.
  ---
  $\Delta E_{\text{pot}} = 8{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 25\,\text{m} = 1962\,\text{J}$. Wiederholen: [Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

In der Lektion [Energie](/lernen/physik1/arbeit-energie-impuls/energie) haben wir die Lageenergie als $m g h$
berechnet. Das setzt voraus, dass $g$ auf dem ganzen Weg gleich bleibt. Für einen Turm stimmt das sehr genau. Für eine
Rakete, die tausende Kilometer hoch steigt, stimmt es nicht mehr, denn die Anziehung nimmt mit $1/r^2$ ab. Wir brauchen
eine Formel, die für jeden Abstand gilt.

### Die Arbeit gegen eine veränderliche Kraft

**Worum geht es in einem Satz?** Wir heben einen Körper vom Abstand $r_1$ auf den größeren Abstand $r_2$ vom Erdmittelpunkt.
Wie viel Arbeit kostet das, wenn die Kraft unterwegs schwächer wird?

**In Schritten:**

1. Bei veränderlicher Kraft ist die Arbeit die **Fläche unter dem F-r-Diagramm** (siehe
   [Arbeit bei veränderlicher Kraft](/lernen/physik1/arbeit-energie-impuls/arbeit-bei-veraenderlicher-kraft-die-flaeche-unter-dem-f-s-diagramm)).
2. Die nötige Kraft ist $F(r) = G M m/r^2$. Die Fläche darunter berechnet man mit einem Integral (siehe Mathematik,
   [Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit)).
3. Eine Stammfunktion von $1/r^2$ ist $-1/r$. Also
   $$W = \int_{r_1}^{r_2} G\frac{M m}{r^2}\,\dd r = G M m\left(\frac{1}{r_1} - \frac{1}{r_2}\right).$$

**In Worten zurückübersetzt:** Die Hubarbeit hängt nur vom Anfangs- und Endabstand ab. Ist $r_2$ unendlich groß, wird
$1/r_2 = 0$. Die Arbeit, um einen Körper ganz aus dem Schwerefeld zu befreien, ist also endlich, nämlich $G M m/r_1$.

:::beispiel[Ein Satellit wird 1000 km hochgehoben]
Wie viel Arbeit braucht man, um einen Satelliten ($500\,\text{kg}$) von der Erdoberfläche auf $1000\,\text{km}$ Höhe zu
heben? Die Bahngeschwindigkeit lassen wir hier weg. Vergleiche mit $m g h$. ($G M_E = 3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2$)

**Schritt 1, Abstände:** $r_1 = 6{,}37\cdot 10^6\,\text{m}$, $r_2 = 7{,}37\cdot 10^6\,\text{m}$.

**Schritt 2, genaue Arbeit:** $W = 3{,}98\cdot 10^{14}\,\dfrac{\text{m}^3}{\text{s}^2}\cdot 500\,\text{kg}\cdot\left(\dfrac{1}{6{,}37\cdot 10^6\,\text{m}} - \dfrac{1}{7{,}37\cdot 10^6\,\text{m}}\right) = 4{,}24\cdot 10^9\,\text{J}$.

**Schritt 3, Näherung:** $m g h = 500\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 10^6\,\text{m} = 4{,}91\cdot 10^9\,\text{J}$.

**Deutung:** Die Näherung ist um $16\,\%$ zu groß, weil sie so tut, als wäre $g$ auf dem ganzen Weg $9{,}81\,\text{m/s}^2$.
In Wirklichkeit ist $g$ oben schon auf $7{,}3\,\text{m/s}^2$ gesunken.
:::

### Potentielle Energie und Potential

Weil nur Differenzen zählen, darf man den Nullpunkt der Lageenergie frei wählen. In der Astronomie legt man ihn ins
**Unendliche**: Ein unendlich weit entfernter Körper hat die Lageenergie null.

:::satz[Potentielle Energie im Gravitationsfeld]
Ein Körper der Masse $m$ im Abstand $r$ vom Mittelpunkt einer Kugel der Masse $M$ hat die potentielle Energie
$$E_{\text{pot}}(r) = -\,G\frac{M m}{r}.$$
Dabei liegt der Nullpunkt im Unendlichen. Teilt man durch $m$, erhält man das **Gravitationspotential**
$\varphi(r) = E_{\text{pot}}/m = -G M/r$ in J/kg. Es beschreibt, wie viel Energie pro Kilogramm man braucht, um von einem
Ort bis ins Unendliche zu kommen.
:::

**Warum negativ?** Ein Körper nahe der Erde hat **weniger** Energie als einer im Unendlichen. Man muss Arbeit aufwenden, um
ihn zu befreien. Steigt er höher, wird $E_{\text{pot}}$ größer, also **weniger negativ**. **Beispiel:** An der Erdoberfläche
ist $\varphi = -6{,}25\cdot 10^7\,\text{J/kg}$, im doppelten Abstand nur noch $-3{,}13\cdot 10^7\,\text{J/kg}$. **Kein
Widerspruch** zu $m g h$: Für kleine Höhen ergibt die Differenz $E_{\text{pot}}(R + h) - E_{\text{pot}}(R)$ wieder
näherungsweise $m g h$. Das ist eine Linearisierung (siehe Mathematik,
[Die Tangente als Näherung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung)).

```plot
x: [0, 6.2]
y: [-7, 1]
achsen: { x: "r in Erdradien", y: "φ in 10⁷ J/kg" }
graphen:
  - { f: "-6.25/x", von: 1, bis: 6.2, farbe: 0 }
  - { f: "-6.25/x", von: 0.3, bis: 1, farbe: 0, gestrichelt: true }
punkte:
  - { x: 1, y: -6.25, label: "Erdoberfläche" }
  - { x: 2, y: -3.125, label: "r = 2 R" }
strecken:
  - { von: [0, 0], nach: [6.2, 0], gestrichelt: true }
beschriftung: "Das Gravitationspotential der Erde, φ = −G M/r, aufgetragen über dem Abstand in Erdradien. An der Oberfläche liegt der Körper tief in einem „Potentialtopf“. Je weiter außen, desto näher ist φ an null. Der Abstand zur Nulllinie ist die Energie pro Kilogramm, die man zum Entkommen braucht. Innerhalb der Erde gilt die Formel nicht mehr (gestrichelt)."
```

```aufgabe
id: p6-10-check-vorzeichen
art: check
titel: "Kurz geprüft: Wo ist die Lageenergie größer?"
niveau: 1
angabe: |
  Ein Satellit ist einmal $7\cdot 10^6\,\text{m}$ und einmal $4\cdot 10^7\,\text{m}$ vom Erdmittelpunkt entfernt. Wo hat er die **größere** potentielle Energie $E_{\text{pot}} = -G M m/r$?
teile:
  - typ: auswahl
    optionen:
      - 'bei $4\cdot 10^7\,\text{m}$, also weiter außen'
      - 'bei $7\cdot 10^6\,\text{m}$, also weiter innen'
      - "an beiden Orten gleich"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Innen ist der **Betrag** größer, aber die Zahl ist stärker negativ und damit kleiner. Wer höher steigt, gewinnt Lageenergie.
      - wert: 2
        meldung: $E_{\text{pot}}$ hängt vom Abstand ab. Je größer $r$, desto näher liegt $-G M m/r$ an null.
hinweise:
  - Welche Zahl ist größer, $-10$ oder $-2$?
loesung: |
  Weiter außen ist $-G M m/r$ weniger negativ, also größer.
  ---
  Die Lageenergie steigt mit der Höhe, genau wie bei $m g h$. Nur der Nullpunkt liegt jetzt im Unendlichen.
```

### Die Energie einer Satellitenbahn und der Bahnwechsel

Auf einer Kreisbahn ist $v^2 = G M/r$ (siehe [Satelliten und Schwerelosigkeit](/lernen/physik1/kreisbewegung-gravitation/satelliten-und-schwerelosigkeit)).
Damit ist die kinetische Energie $E_{\text{kin}} = \tfrac12 m v^2 = \dfrac{G M m}{2r}$, genau halb so groß wie der Betrag der
potentiellen Energie. Die Gesamtenergie ist
$$E = E_{\text{kin}} + E_{\text{pot}} = \frac{G M m}{2r} - \frac{G M m}{r} = -\frac{G M m}{2 r}.$$
Sie ist negativ, der Satellit ist **gebunden**. Weiter außen ist $E$ weniger negativ, also größer.

Daraus folgt ein scheinbares Paradox. Für eine **höhere** Bahn muss man Energie zuführen, das Triebwerk zündet. Auf der
höheren Bahn ist der Satellit danach aber **langsamer**. Die zugeführte Energie steckt ganz in der Lageenergie, und die
wächst sogar um doppelt so viel, wie die Bewegungsenergie abnimmt. Umgekehrt wird ein Satellit, den die Restatmosphäre
bremst, **schneller**: Er verliert Energie, sinkt auf eine tiefere Bahn und läuft dort schneller.

:::beispiel[Von 400 km auf 800 km Höhe]
Ein Satellit ($1000\,\text{kg}$) soll von einer Kreisbahn in $400\,\text{km}$ Höhe auf eine Kreisbahn in $800\,\text{km}$
Höhe wechseln. ($G M_E = 3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2$)

**Schritt 1, Radien:** $r_1 = 6{,}77\cdot 10^6\,\text{m}$, $r_2 = 7{,}17\cdot 10^6\,\text{m}$.

**Schritt 2, nötige Energie:** $\Delta E = E_2 - E_1 = \dfrac{G M m}{2}\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right) = \dfrac{3{,}98\cdot 10^{14}\cdot 1000}{2}\left(\dfrac{1}{6{,}77\cdot 10^6} - \dfrac{1}{7{,}17\cdot 10^6}\right)\,\text{J} = 1{,}64\cdot 10^9\,\text{J}$.

**Schritt 3, Geschwindigkeiten:** vorher $\sqrt{G M/r_1} = 7{,}67\,\text{km/s}$, nachher $\sqrt{G M/r_2} = 7{,}45\,\text{km/s}$.

**Deutung:** Obwohl $1{,}64\,\text{GJ}$ zugeführt wurden, ist der Satellit danach langsamer. Die Lageenergie ist um
$3{,}3\,\text{GJ}$ gestiegen, die Bewegungsenergie um $1{,}6\,\text{GJ}$ gesunken.
:::

### Die Fluchtgeschwindigkeit

Wie schnell muss ein Körper von der Oberfläche starten, um dem Schwerefeld ganz zu entkommen, ohne Antrieb und ohne
Luftwiderstand? Seine kinetische Energie muss mindestens den Abstand zur Nulllinie im Potentialbild überwinden:
$$\tfrac12 m v_F^2 = G\frac{M m}{R}\qquad\text{also}\qquad v_F = \sqrt{\frac{2 G M}{R}} = \sqrt{2 g R}.$$
Dabei ist $R$ der Radius und $M$ die Masse des Himmelskörpers. Für die Erde ist $v_F = 11{,}2\,\text{km/s}$, die **zweite
kosmische Geschwindigkeit**. Sie ist genau $\sqrt 2$-mal so groß wie die Kreisbahngeschwindigkeit an der Oberfläche. Auf dem
Mond sind es nur $2{,}4\,\text{km/s}$. Deshalb konnte die Mondfähre mit einer kleinen Rakete wieder starten, und deshalb
konnte der Mond keine Atmosphäre halten.

:::intuition[Schwarze Löcher (Vertiefung)]
Wäre ein Himmelskörper so kompakt, dass $v_F$ größer als die Lichtgeschwindigkeit $c$ wird, könnte nicht einmal Licht
entkommen. Das ist, klassisch gedacht, ein **Schwarzes Loch**. Die Erde müsste man dafür auf einen Radius von knapp $9\,\text{mm}$
zusammenpressen. Die genaue Beschreibung braucht die allgemeine Relativitätstheorie, sie geht über die Prüfung hinaus.
:::

```aufgabe
id: p6-10-check-faktor
art: check
titel: "Vorhersage: viermal so viel Masse"
niveau: 1
angabe: |
  Ein Planet hat denselben Radius wie die Erde, aber die vierfache Masse. Um welchen Faktor ist seine Fluchtgeschwindigkeit größer?
teile:
  - typ: zahl
    loesung: "sqrt(4)"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: Die Masse steht unter der Wurzel, $v_F = \sqrt{2 G M/R}$. Vierfache Masse ergibt nur den Faktor $\sqrt 4 = 2$.
hinweise:
  - '$v_F = \sqrt{2 G M/R}$. Was macht die Wurzel aus dem Faktor $4$?'
loesung: |
  $v_F' = \sqrt{2 G\cdot 4M/R} = \sqrt 4\cdot\sqrt{2 G M/R}$.
  ---
  Die Fluchtgeschwindigkeit verdoppelt sich, auf $2\cdot 11{,}2\,\text{km/s} = 22{,}4\,\text{km/s}$.
```

:::merke[So rechnest du mit Gravitationsenergie]
1. Nullpunkt im Unendlichen: $E_{\text{pot}} = -G M m/r$, Potential $\varphi = -G M/r$.
2. Hubarbeit zwischen zwei Abständen: $W = G M m\,(1/r_1 - 1/r_2)$. Für kleine Höhen genügt $m g h$.
3. Kreisbahn: $E_{\text{kin}} = G M m/(2r)$, $E = -G M m/(2r)$. Höhere Bahn heißt mehr Energie, aber kleinere Geschwindigkeit.
4. Fluchtgeschwindigkeit: $\tfrac12 m v_F^2 = G M m/R$, also $v_F = \sqrt{2 G M/R}$.
:::

:::achtung[Fehler: den Faktor 2 in der Fluchtgeschwindigkeit vergessen]
Für den Mond ($7{,}35\cdot 10^{22}\,\text{kg}$, $R = 1{,}737\cdot 10^6\,\text{m}$) rechnet jemand:

Falsch: $v_F = \sqrt{\dfrac{G M}{R}} = \sqrt{\dfrac{6{,}674\cdot 10^{-11}\cdot 7{,}35\cdot 10^{22}}{1{,}737\cdot 10^6}}\,\text{m/s} = 1{,}68\,\text{km/s}$.

Das ist die Geschwindigkeit für eine Kreisbahn knapp über dem Boden. Damit bleibt der Körper gebunden. Zum Entkommen muss
die ganze Energie $\tfrac12 m v^2$ den Betrag $G M m/R$ erreichen, daher der Faktor $2$: $v_F = \sqrt{2 G M/R} = 2{,}38\,\text{km/s}$.
:::

:::achtung[Fehler: das Vorzeichen der potentiellen Energie]
Ein Satellit ($1000\,\text{kg}$) steigt von $r_1 = 6{,}77\cdot 10^6\,\text{m}$ auf $r_2 = 7{,}17\cdot 10^6\,\text{m}$. Jemand
schreibt: „$E_{\text{pot}} = -G M m/r$ wird kleiner, weil $r$ größer wird. Die Lageenergie nimmt also ab.“

Die Zahlen zeigen das Gegenteil: $E_{\text{pot},1} = -5{,}89\cdot 10^{10}\,\text{J}$, $E_{\text{pot},2} = -5{,}56\cdot 10^{10}\,\text{J}$.
Der Betrag wird kleiner, die Zahl selbst wird aber größer, weil sie näher an null liegt. Wer höher steigt, gewinnt
Lageenergie, wie beim Treppensteigen.
:::

```reflexion
frage: Ein Satellit in niedriger Bahn wird von Resten der Atmosphäre leicht gebremst. Trotzdem misst man, dass er mit der Zeit schneller wird. Erkläre diesen scheinbaren Widerspruch mit der Energie.
antwort: |
  Durch die Reibung verliert der Satellit Gesamtenergie. Auf einer Kreisbahn ist $E = -G M m/(2r)$. Weniger Energie heißt
  stärker negativ, also kleineres $r$: Der Satellit sinkt langsam auf tiefere Bahnen. Dort gilt $v = \sqrt{G M/r}$, und
  kleineres $r$ heißt größere Geschwindigkeit. Beim Absinken verliert er Lageenergie, und zwar doppelt so viel, wie er an
  Bewegungsenergie gewinnt. Die Hälfte davon wird durch die Reibung zu Wärme, die andere Hälfte macht ihn schneller.
```

### Aufgaben zu Gravitationsenergie und Fluchtgeschwindigkeit

```aufgabe
id: p6-10-flucht-mond
titel: Fluchtgeschwindigkeit des Mondes
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Wie groß ist die Fluchtgeschwindigkeit an der Oberfläche des Mondes ($M = 7{,}35\cdot 10^{22}\,\text{kg}$, $R = 1737\,\text{km}$)? Ergebnis in km/s, drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "sqrt(2*6.674e-11*7.35e22/1.737e6)/1000"
    einheit: "km/s"
    anzeige: '2{,}38'
    fehler:
      - wert: "sqrt(6.674e-11*7.35e22/1.737e6)/1000"
        meldung: Der Faktor $2$ fehlt. Das ist die Geschwindigkeit für eine Kreisbahn, nicht zum Entkommen.
      - wert: "sqrt(2*6.674e-11*7.35e22/1737)/1000"
        meldung: Der Radius muss in Metern stehen.
hinweise:
  - '$v_F = \sqrt{2 G M/R}$ mit $R$ in Metern.'
loesung: |
  **Ansatz:** Die kinetische Energie muss die Bindungsenergie aufbringen: $\tfrac12 m v_F^2 = G M m/R$, also $v_F = \sqrt{2 G M/R}$.
  ---
  $v_F = \sqrt{\dfrac{2\cdot 6{,}674\cdot 10^{-11}\cdot 7{,}35\cdot 10^{22}}{1{,}737\cdot 10^{6}}}\,\text{m/s} = 2{,}38\cdot 10^{3}\,\text{m/s} = 2{,}38\,\text{km/s}$, gut ein Fünftel des Erdwerts ($11{,}2\,\text{km/s}$).
```

```aufgabe
id: p6-10-potential-diagramm
titel: Energie aus dem Potentialdiagramm ablesen
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt das Gravitationspotential der Erde über dem Abstand vom Erdmittelpunkt. Wie viel Energie pro Kilogramm braucht man mindestens, um einen Körper von der Erdoberfläche ($r = 1\,R_E$) bis in den Abstand $r = 2\,R_E$ zu bringen? Gib das Ergebnis in Einheiten von $10^7\,\text{J/kg}$ an.
plot:
  x: [0, 6.2]
  y: [-7, 1]
  achsen: { x: "r in Erdradien", y: "φ in 10⁷ J/kg" }
  graphen:
    - { f: "-6.25/x", von: 1, bis: 6.2, farbe: 0 }
  punkte:
    - { x: 1, y: -6.25, label: "−6,25" }
    - { x: 2, y: -3.125, label: "−3,13" }
teile:
  - typ: zahl
    loesung: "6.25 - 3.125"
    einheit: "10⁷ J/kg"
    anzeige: '3{,}13'
    fehler:
      - wert: "6.25 + 3.125"
        meldung: Gesucht ist der **Unterschied** der beiden Werte. Von $-6{,}25$ nach $-3{,}13$ steigt das Potential um $3{,}13$.
      - wert: "6.25"
        meldung: Das wäre die Energie, um ganz zu entkommen, also bis $\varphi = 0$. Hier geht es nur bis $r = 2\,R_E$.
hinweise:
  - Lies die Potentialwerte bei $r = 1$ und $r = 2$ ab und bilde die Differenz.
loesung: |
  **Ablesen:** $\varphi(1\,R_E) = -6{,}25\cdot 10^7\,\text{J/kg}$, $\varphi(2\,R_E) = -3{,}13\cdot 10^7\,\text{J/kg}$.
  ---
  **Differenz:** $\Delta\varphi = -3{,}13 - (-6{,}25) = 3{,}13$, also $3{,}13\cdot 10^7\,\text{J/kg}$. Das ist genau die Hälfte der Energie zum völligen Entkommen.
```

```aufgabe
id: p6-10-bremsen
titel: Gebremst und doch schneller
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Ein Satellit auf einer niedrigen Kreisbahn wird von Resten der Atmosphäre gebremst. Was passiert im Lauf der Zeit?
teile:
  - typ: auswahl
    optionen:
      - "Er sinkt auf tiefere Bahnen und wird dabei schneller."
      - "Er wird langsamer und bleibt auf derselben Höhe."
      - "Er wird langsamer und sinkt auf tiefere Bahnen."
      - "Er steigt auf höhere Bahnen, weil er Energie verliert."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Auf einer bestimmten Höhe gehört zu einer Kreisbahn genau eine Geschwindigkeit, $v = \sqrt{G M/r}$. Wird er langsamer, kann er die Höhe nicht halten.
      - wert: 2
        meldung: Er sinkt tatsächlich. Tiefer unten verlangt die Kreisbahn aber eine **größere** Geschwindigkeit, und die gewinnt er beim Absinken.
      - wert: 3
        meldung: Weniger Energie heißt stärker gebunden, also tiefer. Für eine höhere Bahn müsste man Energie **zuführen**.
hinweise:
  - 'Gesamtenergie auf der Kreisbahn: $E = -G M m/(2r)$. Bahngeschwindigkeit: $v = \sqrt{G M/r}$.'
loesung: |
  **Energie:** Reibung entzieht Energie. $E = -G M m/(2r)$ wird stärker negativ, also wird $r$ kleiner. Der Satellit sinkt.
  ---
  **Geschwindigkeit:** Auf der tieferen Bahn gilt $v = \sqrt{G M/r}$ mit kleinerem $r$, also ist er schneller. Die nötige Bewegungsenergie stammt aus der Lageenergie, die er beim Sinken verliert.
```

```aufgabe
id: p6-flucht
titel: Fluchtgeschwindigkeit der Erde
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Berechne die Fluchtgeschwindigkeit von der Erdoberfläche ($M_E = 5{,}97\cdot 10^{24}\,\text{kg}$, $R_E = 6{,}37\cdot 10^{6}\,\text{m}$) in km/s, drei signifikante Stellen. Um welchen Faktor ist sie größer als die erste kosmische Geschwindigkeit $\sqrt{G M_E/R_E}$?
teile:
  - typ: zahl
    label: Fluchtgeschwindigkeit
    loesung: "sqrt(2*6.674e-11*5.97e24/6.37e6)/1000"
    einheit: "km/s"
    anzeige: '11{,}2'
    fehler:
      - wert: "sqrt(6.674e-11*5.97e24/6.37e6)/1000"
        meldung: Das ist die Kreisbahngeschwindigkeit knapp über dem Boden. Zum Entkommen fehlt der Faktor $2$ unter der Wurzel.
      - wert: "2*6.674e-11*5.97e24/6.37e6/1000"
        meldung: Das ist $v_F^2$ (geteilt durch $1000$). Die Wurzel fehlt.
  - typ: zahl
    label: Faktor
    loesung: "sqrt(2)"
    anzeige: '1{,}41'
    fehler:
      - wert: "2"
        meldung: Der Faktor $2$ steht **unter** der Wurzel. Die Geschwindigkeiten unterscheiden sich um $\sqrt 2$.
hinweise:
  - 'Kinetische Energie gleich Betrag der potentiellen Energie: $\tfrac12 m v_F^2 = G M m/R$.'
  - 'Vergleiche $\sqrt{2 G M/R}$ mit $\sqrt{G M/R}$.'
loesung: |
  **Ansatz:** $\tfrac12 m v_F^2 = G\dfrac{M m}{R}$, also $v_F = \sqrt{\dfrac{2 G M}{R}}$.
  ---
  **Einsetzen:** $v_F = \sqrt{\dfrac{2\cdot 6{,}674\cdot 10^{-11}\cdot 5{,}97\cdot 10^{24}}{6{,}37\cdot 10^{6}}}\,\text{m/s} = 1{,}12\cdot 10^{4}\,\text{m/s} = 11{,}2\,\text{km/s}$.
  ---
  **Vergleich:** $\dfrac{\sqrt{2 G M/R}}{\sqrt{G M/R}} = \sqrt 2 = 1{,}41$. Kontrolle: $1{,}41\cdot 7{,}91\,\text{km/s} = 11{,}2\,\text{km/s}$. ✓
```

```aufgabe
id: p6-hubarbeit-gross
titel: Arbeit für eine Satellitenbahn
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Welche Arbeit ist nötig, um einen Satelliten von $1000\,\text{kg}$ von der Erdoberfläche auf $400\,\text{km}$ Höhe zu heben (ohne die kinetische Energie der Bahnbewegung)? Vergleiche mit der Näherung $m g h$. ($G M_E = 3{,}984\cdot 10^{14}\,\text{m}^3/\text{s}^2$, $R_E = 6{,}37\cdot 10^{6}\,\text{m}$; drei signifikante Stellen)
teile:
  - typ: zahl
    label: exakte Arbeit
    loesung: "3.984e14*1000*(1/6.37e6-1/6.77e6)"
    einheit: "J"
    anzeige: '3{,}70\cdot 10^{9}'
    fehler:
      - wert: "3.984e14*1000*(1/6.37e6-1/4e5)"
        meldung: Für $r_2$ brauchst du den Abstand vom Erdmittelpunkt, $6{,}77\cdot 10^6\,\text{m}$, nicht die Höhe.
      - wert: "3.984e14*1000/6.77e6"
        meldung: Das ist der Betrag der potentiellen Energie oben. Gefragt ist die **Differenz** zwischen unten und oben.
  - typ: zahl
    label: Näherung mgh
    loesung: "1000*9.81*400e3"
    einheit: "J"
    anzeige: '3{,}92\cdot 10^{9}'
    fehler:
      - wert: "1000*9.81*400"
        meldung: Die Höhe muss in Metern stehen, $400\,\text{km} = 4{,}00\cdot 10^5\,\text{m}$.
hinweise:
  - '$W = G M m\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$ mit $r_1 = R_E$ und $r_2 = R_E + h$.'
  - 'Für die Näherung $m g h$ die Höhe in Metern einsetzen.'
loesung: |
  **Ansatz:** Exakt gilt $W = G M m\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right)$ mit $r_1 = 6{,}37\cdot 10^6\,\text{m}$, $r_2 = 6{,}77\cdot 10^6\,\text{m}$.
  ---
  **Exakt:** $W = 3{,}984\cdot 10^{14}\,\dfrac{\text{m}^3}{\text{s}^2}\cdot 1000\,\text{kg}\cdot\left(\dfrac{1}{6{,}37\cdot 10^{6}\,\text{m}} - \dfrac{1}{6{,}77\cdot 10^{6}\,\text{m}}\right) = 3{,}70\cdot 10^{9}\,\text{J}$.
  ---
  **Näherung:** $m g h = 1000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 4\cdot 10^{5}\,\text{m} = 3{,}92\cdot 10^{9}\,\text{J}$, also etwa $6\,\%$ zu groß, weil $g$ mit der Höhe abnimmt.
  ---
  **Einordnung:** Für die Bahngeschwindigkeit $7{,}67\,\text{km/s}$ braucht man zusätzlich $\tfrac12 m v^2 = 2{,}9\cdot 10^{10}\,\text{J}$, fast das Achtfache. Das Hochheben ist der kleinere Teil.
```

```aufgabe
id: p6-10-bahnenergie
titel: Die Energiebilanz eines Satelliten
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Satellit ($500\,\text{kg}$) kreist in $400\,\text{km}$ Höhe ($r = 6{,}77\cdot 10^6\,\text{m}$, $G M_E = 3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2$). Berechne kinetische, potentielle und gesamte Energie (in J, drei signifikante Stellen, mit Vorzeichen).
teile:
  - typ: zahl
    label: kinetische Energie
    loesung: "3.984e14*500/(2*6.77e6)"
    einheit: "J"
    anzeige: '1{,}47\cdot 10^{10}'
    fehler:
      - wert: "3.984e14*500/6.77e6"
        meldung: Das ist der Betrag der potentiellen Energie. Die kinetische ist halb so groß, $G M m/(2r)$.
  - typ: zahl
    label: potentielle Energie
    loesung: "-3.984e14*500/6.77e6"
    einheit: "J"
    anzeige: '-2{,}94\cdot 10^{10}'
    fehler:
      - wert: "3.984e14*500/6.77e6"
        meldung: Mit dem Nullpunkt im Unendlichen ist die potentielle Energie negativ.
  - typ: zahl
    label: Gesamtenergie
    loesung: "-3.984e14*500/(2*6.77e6)"
    einheit: "J"
    anzeige: '-1{,}47\cdot 10^{10}'
    fehler:
      - wert: "3.984e14*500*3/(2*6.77e6)"
        meldung: Du hast die Beträge addiert. Die potentielle Energie ist negativ und wird mit ihrem Vorzeichen addiert.
hinweise:
  - '$E_{\text{kin}} = \tfrac12 m v^2$ mit $v^2 = G M/r$.'
  - '$E_{\text{pot}} = -G M m/r$, Gesamtenergie ist die Summe mit Vorzeichen.'
gefuehrt:
  - text: Wie groß ist $v^2$ auf dieser Bahn (in $\text{m}^2/\text{s}^2$)?
    teil: { typ: zahl, loesung: "3.984e14/6.77e6" }
    erklaerung: '$v^2 = G M/r = 3{,}98\cdot 10^{14}/6{,}77\cdot 10^6\,\text{m}^2/\text{s}^2 = 5{,}88\cdot 10^7\,\text{m}^2/\text{s}^2$.'
  - text: Berechne $E_{\text{kin}} = \tfrac12 m v^2$ (in J).
    teil: { typ: zahl, loesung: "0.5*500*3.984e14/6.77e6", einheit: "J" }
    erklaerung: '$E_{\text{kin}} = 250\,\text{kg}\cdot 5{,}88\cdot 10^7\,\text{m}^2/\text{s}^2 = 1{,}47\cdot 10^{10}\,\text{J}$.'
  - text: Berechne $E_{\text{pot}} = -G M m/r$ (in J).
    teil: { typ: zahl, loesung: "-3.984e14*500/6.77e6", einheit: "J" }
    erklaerung: '$E_{\text{pot}} = -2{,}94\cdot 10^{10}\,\text{J}$, genau das Doppelte von $E_{\text{kin}}$ mit negativem Vorzeichen.'
  - text: Addiere beide mit Vorzeichen.
    teil: { typ: zahl, loesung: "-3.984e14*500/(2*6.77e6)", einheit: "J" }
    erklaerung: '$E = 1{,}47\cdot 10^{10}\,\text{J} - 2{,}94\cdot 10^{10}\,\text{J} = -1{,}47\cdot 10^{10}\,\text{J}$.'
loesung: |
  **Ansatz:** Auf der Kreisbahn ist $v^2 = G M/r$. Damit $E_{\text{kin}} = \dfrac{G M m}{2r}$ und $E_{\text{pot}} = -\dfrac{G M m}{r}$.
  ---
  **Kinetisch:** $E_{\text{kin}} = \dfrac{3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2\cdot 500\,\text{kg}}{2\cdot 6{,}77\cdot 10^6\,\text{m}} = 1{,}47\cdot 10^{10}\,\text{J}$.
  ---
  **Potentiell:** $E_{\text{pot}} = -2{,}94\cdot 10^{10}\,\text{J}$. **Gesamt:** $E = -1{,}47\cdot 10^{10}\,\text{J}$.
  ---
  **Kontrolle:** $E = -E_{\text{kin}}$, wie es für jede Kreisbahn gelten muss. Das negative Vorzeichen heißt: gebunden.
```

```aufgabe
id: p6-10-bahnwechsel-geo
titel: Hinauf auf die geostationäre Bahn
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Nachrichtensatellit ($1000\,\text{kg}$) wird zuerst auf eine Parkbahn in $400\,\text{km}$ Höhe ($r_1 = 6{,}77\cdot 10^6\,\text{m}$) gebracht und dann auf die geostationäre Bahn ($r_2 = 4{,}216\cdot 10^7\,\text{m}$) gehoben. ($G M_E = 3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2$; drei signifikante Stellen)

  a) Wie viel Energie muss dafür insgesamt zugeführt werden (in J)?

  b) Wie schnell ist der Satellit auf der geostationären Bahn (in m/s)?

  c) Erkläre, warum er dort langsamer ist, obwohl Energie zugeführt wurde.
teile:
  - typ: zahl
    label: a) zugeführte Energie
    loesung: "3.984e14*1000/2*(1/6.77e6 - 1/4.216e7)"
    einheit: "J"
    anzeige: '2{,}47\cdot 10^{10}'
    fehler:
      - wert: "3.984e14*1000*(1/6.77e6 - 1/4.216e7)"
        meldung: Das ist nur der Zuwachs an Lageenergie. Gleichzeitig nimmt die Bewegungsenergie ab. Die Gesamtenergie ändert sich nur um die Hälfte davon.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "sqrt(3.984e14/4.216e7)"
    einheit: "m/s"
    anzeige: '3074 \approx 3{,}07\cdot 10^{3}'
    fehler:
      - wert: "sqrt(2*3.984e14/4.216e7)"
        meldung: Das wäre die Fluchtgeschwindigkeit aus dieser Höhe. Für die Kreisbahn gilt $v = \sqrt{G M/r}$.
  - typ: text
    label: c) Erklärung
    muster: |
      Die zugeführte Energie geht vollständig in die Lageenergie, und zwar sogar mehr: Die Lageenergie steigt um
      $G M m(1/r_1 - 1/r_2)$, die Bewegungsenergie sinkt um die Hälfte davon. Weiter außen verlangt die Kreisbahn nur
      $v = \sqrt{G M/r}$, also eine kleinere Geschwindigkeit. Die Gesamtenergie $-G M m/(2r)$ ist trotzdem größer, weil sie
      weniger negativ ist.
hinweise:
  - 'Gesamtenergie einer Kreisbahn: $E = -G M m/(2r)$. Gesucht ist $E_2 - E_1$.'
  - 'Kreisbahngeschwindigkeit $v = \sqrt{G M/r}$.'
loesung: |
  **Modell:** Beide Bahnen sind Kreisbahnen. Für jede gilt $E = -\dfrac{G M m}{2r}$ und $v = \sqrt{G M/r}$. Der Weg dazwischen spielt für die Energiebilanz keine Rolle.
  ---
  **a)** $\Delta E = \dfrac{G M m}{2}\left(\dfrac{1}{r_1} - \dfrac{1}{r_2}\right) = \dfrac{3{,}98\cdot 10^{14}\cdot 1000}{2}\left(\dfrac{1}{6{,}77\cdot 10^6} - \dfrac{1}{4{,}216\cdot 10^7}\right)\,\text{J} = 2{,}47\cdot 10^{10}\,\text{J}$.
  ---
  **b)** $v = \sqrt{\dfrac{3{,}98\cdot 10^{14}\,\text{m}^3/\text{s}^2}{4{,}216\cdot 10^{7}\,\text{m}}} = 3074\,\text{m/s}$, nicht einmal halb so schnell wie auf der Parkbahn ($7672\,\text{m/s}$).
  ---
  **c)** Die Lageenergie steigt um $4{,}94\cdot 10^{10}\,\text{J}$, die Bewegungsenergie sinkt um $2{,}47\cdot 10^{10}\,\text{J}$. Unter dem Strich bleibt ein Zuwachs von $2{,}47\cdot 10^{10}\,\text{J}$. Langsamer und trotzdem energiereicher: Das ist kein Widerspruch.
```

```aufgabe
id: p6-10-schwarzes-loch
titel: Wie klein müsste die Sonne werden?
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Auf welchen Radius müsste man die Sonne ($1{,}99\cdot 10^{30}\,\text{kg}$) zusammenpressen, damit ihre Fluchtgeschwindigkeit gleich der Lichtgeschwindigkeit $c = 3{,}00\cdot 10^8\,\text{m/s}$ wird? Rechne klassisch mit der Formel für die Fluchtgeschwindigkeit. Ergebnis in km, drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "2*6.674e-11*1.99e30/(3.00e8)^2/1000"
    einheit: "km"
    anzeige: '2{,}95'
    fehler:
      - wert: "6.674e-11*1.99e30/(3.00e8)^2/1000"
        meldung: Der Faktor $2$ aus der Fluchtgeschwindigkeit fehlt. Aus $c = \sqrt{2 G M/R}$ folgt $R = 2 G M/c^2$.
      - wert: "2*6.674e-11*1.99e30/3.00e8/1000"
        meldung: Die Lichtgeschwindigkeit muss quadriert werden, denn sie stand unter der Wurzel.
hinweise:
  - 'Setze $v_F = \sqrt{2 G M/R} = c$ und quadriere beide Seiten.'
  - 'Nach $R$ auflösen: $R = 2 G M/c^2$.'
loesung: |
  **Modell:** Klassisch kann nichts entkommen, wenn selbst Licht die Fluchtgeschwindigkeit nicht erreicht. Grenzfall: $\sqrt{2 G M/R} = c$.
  ---
  **Umstellen:** Quadrieren ergibt $2 G M/R = c^2$, also $R = \dfrac{2 G M}{c^2}$.
  ---
  **Rechnung:** $R = \dfrac{2\cdot 6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2\cdot 1{,}99\cdot 10^{30}\,\text{kg}}{(3{,}00\cdot 10^{8}\,\text{m/s})^2} = 2{,}95\cdot 10^3\,\text{m} = 2{,}95\,\text{km}$.
  ---
  **Einordnung:** Die Sonne hat heute einen Radius von $700\,000\,\text{km}$. Diesen Wert nennt man Schwarzschild-Radius. Die Relativitätstheorie liefert dafür zufällig dieselbe Formel.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Stoff aus den Kapiteln
[Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen), [Kinematik](/lernen/physik1/kinematik),
[Dynamik](/lernen/physik1/dynamik) und [Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls) gemischt. Das ist
Absicht: In der Prüfung steht nicht dabei, zu welchem Kapitel eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren
passt?“ musst du nichts rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p6-mix-einheiten
titel: Die Geschwindigkeit der ISS in km/h
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Die Raumstation ISS fliegt mit $7{,}67\,\text{km/s}$. Wie schnell ist das in km/h?
teile:
  - typ: zahl
    loesung: "7.67*3600"
    einheit: "km/h"
    anzeige: '2{,}76\cdot 10^{4}'
    fehler:
      - wert: "7.67*3.6"
        meldung: Der Faktor $3{,}6$ rechnet m/s in km/h um. Hier steht aber schon km/s. Eine Stunde hat $3600\,\text{s}$.
      - wert: "7.67*60"
        meldung: Damit hast du km pro Minute berechnet. Eine Stunde hat $60\cdot 60 = 3600$ Sekunden.
hinweise:
  - 'In einer Stunde vergehen $3600\,\text{s}$.'
loesung: |
  **Ansatz:** In jeder Sekunde legt die ISS $7{,}67\,\text{km}$ zurück, in einer Stunde also $3600$-mal so viel.
  ---
  $v = 7{,}67\,\text{km/s}\cdot 3600\,\text{s/h} = 27\,612\,\text{km/h}$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

```aufgabe
id: p6-mix-funksignal
titel: Wie lange braucht ein Funksignal zum Satelliten?
niveau: 1
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Telefonat läuft über einen geostationären Satelliten in $35\,790\,\text{km}$ Höhe. Das Funksignal läuft mit Lichtgeschwindigkeit ($3{,}00\cdot 10^5\,\text{km/s}$) senkrecht hinauf und wieder hinunter. Wie lange dauert das (in s, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "2*35790/3.00e5"
    einheit: "s"
    anzeige: '0{,}239'
    fehler:
      - wert: "35790/3.00e5"
        meldung: Das ist nur der Weg hinauf. Das Signal muss auch wieder herunter.
      - wert: "2*(35790+6370)/3.00e5"
        meldung: Gemessen wird der Weg von der Erdoberfläche zum Satelliten, also die Höhe, nicht der Bahnradius.
hinweise:
  - 'Gleichförmige Bewegung: $t = s/v$ mit dem Weg hin und zurück.'
loesung: |
  **Ansatz:** Das Signal bewegt sich gleichförmig, also $t = s/v$ (siehe [Geschwindigkeit](/lernen/physik1/kinematik/geschwindigkeit)). Der Weg ist zweimal die Höhe.
  ---
  $t = \dfrac{2\cdot 35\,790\,\text{km}}{3{,}00\cdot 10^5\,\text{km/s}} = 0{,}239\,\text{s}$. Diese Verzögerung hört man bei Satellitentelefonaten als kurze Pause.
```

```aufgabe
id: p6-mix-wurf
titel: Wohin fliegt der Stein?
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Stein wird an einer Schnur auf einem waagrechten Kreis $1{,}25\,\text{m}$ über dem Boden mit $6{,}0\,\text{m/s}$ herumgeschleudert. Plötzlich reißt die Schnur. Wie weit fliegt der Stein waagrecht, bis er den Boden trifft (in m, drei signifikante Stellen)? Luftwiderstand vernachlässigen wir.
teile:
  - typ: zahl
    loesung: "6.0*sqrt(2*1.25/9.81)"
    einheit: "m"
    anzeige: '3{,}03'
    fehler:
      - wert: "6.0*1.25/9.81"
        meldung: Die Fallzeit folgt aus $h = \tfrac12 g t^2$, also $t = \sqrt{2h/g}$.
      - wert: "6.0*sqrt(1.25/9.81)"
        meldung: Der Faktor $2$ fehlt. Aus $h = \tfrac12 g t^2$ folgt $t^2 = 2h/g$.
hinweise:
  - Nach dem Reißen fliegt der Stein tangential mit $6{,}0\,\text{m/s}$ waagrecht weiter. Das ist ein waagrechter Wurf.
  - 'Fallzeit aus $h = \tfrac12 g t^2$, dann Wurfweite $x = v_0 t$.'
loesung: |
  **Modell:** Ohne Schnur wirkt nur noch die Gewichtskraft. Der Stein startet tangential mit $6{,}0\,\text{m/s}$ waagrecht, es ist ein waagrechter Wurf (siehe [Waagrechter und schiefer Wurf](/lernen/physik1/kinematik/waagrechter-und-schiefer-wurf)).
  ---
  **Fallzeit:** $t = \sqrt{\dfrac{2h}{g}} = \sqrt{\dfrac{2\cdot 1{,}25\,\text{m}}{9{,}81\,\text{m/s}^2}} = 0{,}505\,\text{s}$.
  ---
  **Wurfweite:** $x = v_0 t = 6{,}0\,\text{m/s}\cdot 0{,}505\,\text{s} = 3{,}03\,\text{m}$, gemessen vom Punkt unter dem Abflugort in Richtung der Tangente.
```

```aufgabe
id: p6-mix-muenze
titel: Eine Münze auf dem Plattenteller
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Münze liegt $12\,\text{cm}$ von der Achse entfernt auf einem Plattenteller. Die Haftreibungszahl ist $\mu_H = 0{,}30$. Bei welcher Drehzahl (in Umdrehungen pro Minute, drei signifikante Stellen) beginnt die Münze zu rutschen?
teile:
  - typ: zahl
    loesung: "sqrt(0.30*9.81/0.12)/(2*pi)*60"
    einheit: "1/min"
    anzeige: '47{,}3'
    fehler:
      - wert: "sqrt(0.30*9.81/0.12)*60"
        meldung: Das ist $\omega$ mal $60$. Umdrehungen zählt die Frequenz $f = \omega/(2\pi)$.
      - wert: "sqrt(0.30*9.81/12)/(2*pi)*60"
        meldung: Der Radius muss in Metern stehen, $0{,}12\,\text{m}$.
hinweise:
  - 'Die Haftreibung liefert die Zentripetalkraft und ist höchstens $\mu_H m g$.'
  - '$m\omega^2 r = \mu_H m g$, also $\omega = \sqrt{\mu_H g/r}$. Dann $f = \omega/(2\pi)$.'
loesung: |
  **Ansatz:** Die Haftreibung ist die einzige waagrechte Kraft auf die Münze und übernimmt die Rolle der Zentripetalkraft. Sie ist höchstens $\mu_H m g$ (siehe [Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand)).
  ---
  **Grenzfall:** $m\omega^2 r = \mu_H m g$, also $\omega = \sqrt{\dfrac{0{,}30\cdot 9{,}81\,\text{m/s}^2}{0{,}12\,\text{m}}} = 4{,}95\,\text{s}^{-1}$.
  ---
  **Drehzahl:** $f = \dfrac{4{,}95\,\text{s}^{-1}}{2\pi} = 0{,}788\,\text{s}^{-1}$, also $47{,}3$ Umdrehungen pro Minute. Bei $45\,\text{min}^{-1}$ hält sie gerade noch.
```

```aufgabe
id: p6-mix-pendel
titel: Die Fadenkraft eines Pendels
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Eine Kugel ($0{,}50\,\text{kg}$) hängt an einem $1{,}2\,\text{m}$ langen Faden. Man lenkt sie um $60^\circ$ aus und lässt sie los. Wie groß ist die Fadenkraft im tiefsten Punkt (in N, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "0.5*9.81 + 0.5*2*9.81*1.2*(1-cos(inRad(60)))/1.2"
    einheit: "N"
    anzeige: '9{,}81'
    fehler:
      - wert: "0.5*9.81"
        meldung: Das ist nur die Gewichtskraft. Im tiefsten Punkt muss der Faden zusätzlich die Zentripetalkraft $m v^2/L$ liefern.
      - wert: "0.5*2*9.81*1.2*(1-cos(inRad(60)))/1.2"
        meldung: Das ist nur die Zentripetalkraft. Der Faden muss außerdem das Gewicht tragen, $F = m g + m v^2/L$.
hinweise:
  - 'Geschwindigkeit unten mit dem Energiesatz: Die Kugel sinkt um $h = L(1 - \cos 60^\circ)$.'
  - 'Im tiefsten Punkt: $F - m g = m v^2/L$.'
loesung: |
  **Modell:** Zwei Phasen. Erst schwingt die Kugel ohne Reibung herab, dafür gilt die Energieerhaltung (siehe [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz)). Im tiefsten Punkt läuft sie auf einem Kreis mit Radius $L$.
  ---
  **Energie:** Höhenunterschied $h = L(1 - \cos 60^\circ) = 1{,}2\,\text{m}\cdot 0{,}5 = 0{,}60\,\text{m}$. $v^2 = 2 g h = 2\cdot 9{,}81\cdot 0{,}60\,\text{m}^2/\text{s}^2 = 11{,}8\,\text{m}^2/\text{s}^2$.
  ---
  **Kreisbewegung:** $F - m g = \dfrac{m v^2}{L}$, also $F = 0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 + \dfrac{0{,}50\,\text{kg}\cdot 11{,}8\,\text{m}^2/\text{s}^2}{1{,}2\,\text{m}} = 4{,}91\,\text{N} + 4{,}91\,\text{N} = 9{,}81\,\text{N}$.
  ---
  **Deutung:** Bei $60^\circ$ Auslenkung zieht der Faden unten genau mit dem doppelten Gewicht.
```

```aufgabe
id: p6-mix-feder-drehteller
titel: Eine Feder auf dem Drehteller
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Auf einem reibungsfreien, waagrechten Drehteller ist ein Körper ($0{,}20\,\text{kg}$) mit einer Feder an der Achse befestigt. Die Feder hat die Ruhelänge $0{,}20\,\text{m}$ und die Federkonstante $D = 50\,\text{N/m}$. Der Teller dreht sich mit $\omega = 10\,\text{s}^{-1}$. Um wie viel wird die Feder gedehnt (in m, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "0.20*100*0.20/(50 - 0.20*100)"
    einheit: "m"
    anzeige: '0{,}133'
    fehler:
      - wert: "0.20*100*0.20/50"
        meldung: Mit der Dehnung wächst auch der Radius. Der Kreisradius ist $L_0 + x$, nicht nur $L_0$.
hinweise:
  - 'Die Federkraft $D x$ übernimmt die Rolle der Zentripetalkraft. Der Kreisradius ist $L_0 + x$.'
  - '$D x = m\omega^2(L_0 + x)$ nach $x$ auflösen.'
loesung: |
  **Modell:** Waagrecht wirkt nur die Federkraft $D x$ (Hookesches Gesetz, siehe [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft)). Sie zeigt zur Achse und ist die Zentripetalkraft. Der Radius ist $L_0 + x$.
  ---
  **Ansatz:** $D x = m\omega^2(L_0 + x)$. Alle $x$ auf eine Seite: $x\,(D - m\omega^2) = m\omega^2 L_0$.
  ---
  **Rechnung:** $m\omega^2 = 0{,}20\,\text{kg}\cdot 100\,\text{s}^{-2} = 20\,\text{N/m}$. $x = \dfrac{20\,\text{N/m}\cdot 0{,}20\,\text{m}}{50\,\text{N/m} - 20\,\text{N/m}} = 0{,}133\,\text{m}$.
  ---
  **Probe:** Federkraft $50\cdot 0{,}133\,\text{N} = 6{,}67\,\text{N}$. Zentripetalkraft $0{,}20\cdot 100\cdot 0{,}333\,\text{N} = 6{,}67\,\text{N}$. ✓ Würde $m\omega^2$ die Federkonstante erreichen, könnte die Feder den Körper nicht mehr halten.
```

```aufgabe
id: p6-mix-dimension
titel: Welche Formel kann stimmen?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Jemand erinnert sich nicht mehr genau an die Formel für die Umlaufzeit eines Satelliten. Welche der folgenden Formeln hat die richtige Einheit Sekunde? Prüfe mit einer Dimensionsanalyse. ($G$ hat die Einheit $\text{m}^3/(\text{kg}\cdot\text{s}^2)$.)
teile:
  - typ: auswahl
    optionen:
      - '$T = 2\pi\sqrt{\dfrac{r^3}{G M}}$'
      - '$T = 2\pi\sqrt{\dfrac{G M}{r^3}}$'
      - '$T = 2\pi\,\dfrac{r^3}{G M}$'
      - '$T = 2\pi\sqrt{\dfrac{r^2}{G M}}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$G M/r^3$ hat die Einheit $1/\text{s}^2$. Die Wurzel ergibt $1/\text{s}$, das ist eine Winkelgeschwindigkeit, keine Zeit.'
      - wert: 2
        meldung: '$r^3/(G M)$ hat die Einheit $\text{s}^2$. Ohne Wurzel kommt also eine Quadratsekunde heraus.'
      - wert: 3
        meldung: '$r^2/(G M)$ hat die Einheit $\text{s}^2/\text{m}$. Die Wurzel daraus ist keine Zeit.'
hinweise:
  - '$G M$ hat die Einheit $\text{m}^3/\text{s}^2$. Was ergibt $r^3$ geteilt durch $G M$?'
loesung: |
  **Ansatz:** Dimensionsanalyse (siehe [Dimensionsanalyse](/lernen/physik1/groessen-einheiten-messen/dimensionsanalyse)). $G M$ hat die Einheit $\dfrac{\text{m}^3}{\text{kg}\cdot\text{s}^2}\cdot\text{kg} = \text{m}^3/\text{s}^2$.
  ---
  **Prüfen:** $\dfrac{r^3}{G M}$ hat $\dfrac{\text{m}^3}{\text{m}^3/\text{s}^2} = \text{s}^2$. Die Wurzel liefert Sekunden.
  ---
  **Ergebnis:** Nur $T = 2\pi\sqrt{r^3/(G M)}$ hat die richtige Einheit. Die Dimensionsanalyse beweist die Formel nicht, sie schließt aber drei falsche sicher aus.
```

```aufgabe
id: p6-mix-verfahren-satellit
titel: "Welches Verfahren passt? Die Höhe eines Satelliten"
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Gegeben ist die Umlaufzeit eines Satelliten auf einer Kreisbahn um die Erde. Gesucht ist seine Höhe. Welcher Ansatz führt zum Ziel? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Gravitation gleich Zentripetalkraft, also $r^3 = G M T^2/(4\\pi^2)$, danach $h = r - R_E$"
      - "Energieerhaltung: $m g h = \\tfrac12 m v^2$"
      - "$g(h) = g_0\\,(R_E/(R_E + h))^2$ mit $g = 9{,}81\\,\\text{m/s}^2$"
      - "Freier Fall: $h = \\tfrac12 g T^2$"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Satellit wurde nicht aus der Höhe fallen gelassen. Außerdem gilt $m g h$ nur für kleine Höhen mit konstantem $g$.
      - wert: 2
        meldung: Diese Formel braucht $g$ in der Höhe, das kennst du nicht. Die gegebene Größe ist die Umlaufzeit.
      - wert: 3
        meldung: Der Satellit fällt nicht geradeaus nach unten, er läuft auf einer Kreisbahn. Die Formel für den freien Fall passt nicht.
hinweise:
  - Was ist gegeben, was gesucht? Welche Formel verbindet genau diese Größen?
loesung: |
  **Entscheidung:** Gegeben ist $T$, gesucht $r$. Die Verbindung liefert der Ansatz „Gravitation gleich Zentripetalkraft“, also das dritte Keplersche Gesetz.
  ---
  **Weg:** $r = \sqrt[3]{G M T^2/(4\pi^2)}$, danach den Erdradius abziehen.
```

```aufgabe
id: p6-mix-verfahren-achterbahn
titel: "Welches Verfahren passt? Die Achterbahn im Tal"
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Achterbahnwagen startet reibungsfrei aus der Ruhe in bekannter Höhe und fährt durch ein Tal mit bekanntem Krümmungsradius. Gesucht ist die Kraft, mit der der Sitz im Tal auf eine Person drückt. Welche Kombination von Ansätzen brauchst du? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "erst Energieerhaltung für die Geschwindigkeit im Tal, dann $F_N - m g = m v^2/r$"
      - "nur Energieerhaltung, denn die Normalkraft verrichtet keine Arbeit"
      - "nur $F_N = m g$, denn der Wagen fährt waagrecht durch das Tal"
      - "erst Impulserhaltung, dann $F_N = m v^2/r$"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Energie liefert nur die Geschwindigkeit. Für eine Kraft brauchst du zusätzlich das Grundgesetz für die Kreisbewegung.
      - wert: 2
        meldung: Im Tal fährt der Wagen auf einem Kreisbogen. Dann ist $F_N$ größer als $m g$, um die Zentripetalkraft zu liefern.
      - wert: 3
        meldung: Es gibt keinen Stoß, und die Gewichtskraft ändert den Impuls ständig. Die Geschwindigkeit folgt aus der Energie.
hinweise:
  - Zerlege in zwei Teilfragen. Wie schnell ist der Wagen im Tal? Welche Kraft braucht er dort für die Kreisbahn?
loesung: |
  **Phase 1:** Ohne Reibung gilt Energieerhaltung, $v^2 = 2 g h$ (siehe [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz)).
  ---
  **Phase 2:** Im Tal ist die Summe der Kräfte zur Mitte gleich $m v^2/r$. Die Normalkraft zeigt zur Mitte, das Gewicht weg: $F_N = m g + m v^2/r$.
```

```aufgabe
id: p6-mix-verfahren-kurve
titel: "Welches Verfahren passt? Rutscht das Auto?"
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Gegeben sind Geschwindigkeit eines Autos, Kurvenradius einer flachen Kurve und Haftreibungszahl. Die Frage ist, ob das Auto aus der Kurve rutscht. Welcher Vergleich entscheidet das? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "nötige Zentripetalkraft $m v^2/r$ mit der größten Haftreibung $\\mu_H m g$ vergleichen"
      - "Zentrifugalkraft und Haftreibung addieren und mit dem Gewicht vergleichen"
      - "kinetische Energie mit der Reibungsarbeit auf dem Kurvenweg vergleichen"
      - "Bremsweg berechnen und mit dem Kurvenradius vergleichen"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Hier werden Kräfte aus zwei Bezugssystemen gemischt und mit einer senkrechten Kraft verglichen. Entscheidend ist, ob die Reibung die nötige Kraft zur Mitte liefern kann.
      - wert: 2
        meldung: Die Haftreibung in der Kurve verrichtet keine Arbeit, sie steht senkrecht zur Bewegung. Es geht um eine Kraftbedingung.
      - wert: 3
        meldung: Das Auto bremst nicht. Gefragt ist, ob die Reibung es auf der Kreisbahn halten kann.
hinweise:
  - Welche Kraft hält das Auto auf der Kreisbahn, und wie groß kann sie höchstens werden?
loesung: |
  **Entscheidung:** Die Haftreibung muss die Zentripetalkraft liefern. Sie kann höchstens $\mu_H m g$ betragen.
  ---
  **Kriterium:** Ist $m v^2/r$ größer als $\mu_H m g$, rutscht das Auto. Gleichwertig: $v > \sqrt{\mu_H g r}$.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Punkte und ein Sachkontext. Zeichne
bei jeder Kreisbewegung zuerst das Freikörperbild mit den echten Kräften und schreib den Ansatz „Summe der Kräfte zur
Mitte gleich $m v^2/r$“ in Worten hin. Als Faustregel gilt etwa zwei Minuten pro Punkt.

```aufgabe
id: p6-pruefung-kurve
titel: Auto in der Kurve
niveau: 3
punkte: 8
lernziel: 3
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 16 Minuten.* Ein Auto ($1000\,\text{kg}$) fährt mit $54\,\text{km/h}$ durch eine flache Kurve mit Radius $60\,\text{m}$. Runde auf drei signifikante Stellen.

  a) Wie groß ist die nötige Zentripetalkraft (in N), und welche Kraft liefert sie? (3 P)

  b) Welche Haftreibungszahl ist mindestens erforderlich? (2 P)

  c) Bei trockener Straße ist $\mu_H = 0{,}70$. Welche Höchstgeschwindigkeit (in km/h) ist in dieser Kurve möglich? (3 P)
teile:
  - typ: zahl
    label: a) Zentripetalkraft
    loesung: "1000*15^2/60"
    einheit: "N"
    anzeige: '3750'
    fehler:
      - wert: "1000*54^2/60"
        meldung: Die Geschwindigkeit muss in m/s stehen, $54\,\text{km/h} = 15\,\text{m/s}$.
  - typ: zahl
    label: b) minimale Haftreibungszahl
    loesung: "15^2/(60*9.81)"
    anzeige: '0{,}382'
    fehler:
      - wert: "1000*15^2/60/1000"
        meldung: Die Reibungszahl ist Kraft durch **Normalkraft**, nicht durch die Masse. $\mu_H \ge F_z/(m g)$.
  - typ: zahl
    label: c) Höchstgeschwindigkeit
    loesung: "sqrt(0.70*9.81*60)*3.6"
    einheit: "km/h"
    anzeige: '73{,}1'
    fehler:
      - wert: "sqrt(0.70*9.81*60)"
        meldung: Das ist die Geschwindigkeit in m/s. Gefragt ist km/h.
hinweise:
  - '$54\,\text{km/h} = 15\,\text{m/s}$. In der flachen Kurve ist nur die Haftreibung waagrecht.'
  - 'b) $\mu_H m g \ge m v^2/r$, die Masse kürzt sich. c) $v_{\max} = \sqrt{\mu_H g r}$.'
loesung: |
  **Modell:** Senkrecht heben sich Gewicht und Normalkraft auf. Waagrecht wirkt nur die Haftreibung, sie ist die Zentripetalkraft.
  ---
  **a)** $F_z = \dfrac{m v^2}{r} = \dfrac{1000\,\text{kg}\cdot(15\,\text{m/s})^2}{60\,\text{m}} = 3750\,\text{N}$, geliefert von der Haftreibung zwischen Reifen und Fahrbahn.
  ---
  **b)** $\mu_H m g \ge \dfrac{m v^2}{r}$, also $\mu_H \ge \dfrac{v^2}{r g} = \dfrac{225\,\text{m}^2/\text{s}^2}{60\,\text{m}\cdot 9{,}81\,\text{m/s}^2} = 0{,}382$.
  ---
  **c)** $v_{\max} = \sqrt{\mu_H g r} = \sqrt{0{,}70\cdot 9{,}81\,\text{m/s}^2\cdot 60\,\text{m}} = 20{,}3\,\text{m/s} = 73{,}1\,\text{km/h}$. Probe: Mit $54\,\text{km/h}$ ist man also deutlich unter der Grenze. ✓
```

```aufgabe
id: p6-pruefung-galileo
titel: Ein Galileo-Satellit
niveau: 3
punkte: 10
lernziel: 7
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 20 Minuten.* Die Satelliten des europäischen Navigationssystems Galileo umlaufen die Erde auf Kreisbahnen in $14\,\text{h}\,05\,\text{min}$. ($M_E = 5{,}97\cdot 10^{24}\,\text{kg}$, $R_E = 6370\,\text{km}$; runde auf drei signifikante Stellen.)

  a) Berechne den Bahnradius (in km). (4 P)

  b) In welcher Höhe über der Erdoberfläche (in km) fliegen sie? (1 P)

  c) Wie groß ist ihre Bahngeschwindigkeit (in m/s)? (2 P)

  d) Wie groß ist die Fallbeschleunigung in dieser Höhe (in $\text{m/s}^2$)? Zeige, dass sie gleich der Zentripetalbeschleunigung ist. (3 P)
teile:
  - typ: zahl
    label: a) Bahnradius in km
    loesung: "nthRoot(6.674e-11*5.97e24*50700^2/(4*pi^2), 3)/1000"
    einheit: "km"
    anzeige: '2{,}96\cdot 10^{4}'
    fehler:
      - wert: "nthRoot(6.674e-11*5.97e24*14.05^2/(4*pi^2), 3)/1000"
        meldung: Die Umlaufzeit muss in Sekunden stehen, $14\,\text{h}\,05\,\text{min} = 50\,700\,\text{s}$.
  - typ: zahl
    label: b) Höhe in km
    loesung: "nthRoot(6.674e-11*5.97e24*50700^2/(4*pi^2), 3)/1000-6370"
    einheit: "km"
    anzeige: '2{,}32\cdot 10^{4}'
  - typ: zahl
    label: c) Bahngeschwindigkeit
    loesung: "2*pi*nthRoot(6.674e-11*5.97e24*50700^2/(4*pi^2), 3)/50700"
    einheit: "m/s"
    anzeige: '3669 \approx 3{,}67\cdot 10^{3}'
  - typ: zahl
    label: d) Fallbeschleunigung
    loesung: "6.674e-11*5.97e24/(nthRoot(6.674e-11*5.97e24*50700^2/(4*pi^2), 3))^2"
    einheit: "m/s²"
    anzeige: '0{,}455'
hinweise:
  - '$T = 14\cdot 3600\,\text{s} + 5\cdot 60\,\text{s} = 50\,700\,\text{s}$.'
  - '$r^3 = \dfrac{G M T^2}{4\pi^2}$, dann $v = 2\pi r/T$ und $g = G M/r^2$.'
loesung: |
  **Modell:** Die Gravitation der Erde ist die Zentripetalkraft der Kreisbahn. Daraus folgt $r^3 = G M T^2/(4\pi^2)$.
  ---
  **a)** $r = \sqrt[3]{\dfrac{3{,}984\cdot 10^{14}\,\text{m}^3/\text{s}^2\cdot(50\,700\,\text{s})^2}{4\pi^2}} = 2{,}96\cdot 10^{7}\,\text{m} = 29\,600\,\text{km}$.
  ---
  **b)** $h = r - R_E = 29\,600\,\text{km} - 6370\,\text{km} = 23\,200\,\text{km}$.
  ---
  **c)** $v = \dfrac{2\pi r}{T} = \dfrac{2\pi\cdot 2{,}96\cdot 10^{7}\,\text{m}}{50\,700\,\text{s}} = 3669\,\text{m/s}$.
  ---
  **d)** $g = \dfrac{G M}{r^2} = \dfrac{3{,}984\cdot 10^{14}\,\text{m}^3/\text{s}^2}{(2{,}96\cdot 10^{7}\,\text{m})^2} = 0{,}455\,\text{m/s}^2$. Zentripetalbeschleunigung: $v^2/r = (3669\,\text{m/s})^2/2{,}96\cdot 10^7\,\text{m} = 0{,}455\,\text{m/s}^2$. ✓ Beide sind gleich, weil die Gravitation allein die Kreisbahn erzwingt.
```

```aufgabe
id: p6-pruefung-mond-text
titel: Warum fällt der Mond nicht herunter?
niveau: 3
punkte: 6
lernziel: 4
kompetenz: begruenden
angabe: |
  *Zeitrichtwert: 12 Minuten.*

  a) Erkläre, warum der Mond nicht auf die Erde fällt, obwohl die Erde ihn anzieht. (3 P)

  b) Ein Fahrgast im Karussell behauptet, er spüre eine Kraft nach außen. Erkläre die Situation aus Sicht eines Beobachters am Boden und aus seiner eigenen Sicht. (3 P)
teile:
  - typ: text
    label: a)
    muster: |
      Der Mond fällt ständig auf die Erde zu: Die Gravitationskraft lenkt ihn in jedem Moment zum Erdmittelpunkt hin ab.
      Gleichzeitig hat er eine große Geschwindigkeit senkrecht dazu (etwa 1 km/s). Ohne Anziehung flöge er geradeaus davon.
      Die Gravitation liefert genau die Zentripetalkraft für die Kreisbahn, sodass er die Erde beim Fallen immer verfehlt.
  - typ: text
    label: b)
    muster: |
      Bodenbeobachter (Inertialsystem): Der Fahrgast will nach dem Trägheitssatz geradeaus weiter. Sitz oder Kette üben eine Kraft
      nach innen aus (Zentripetalkraft), die ihn auf die Kreisbahn zwingt. Eine Kraft nach außen gibt es nicht.
      Fahrgast (rotierendes, beschleunigtes System): Er ruht und erklärt die Kraft des Sitzes durch eine nach außen gerichtete
      Scheinkraft, die Zentrifugalkraft. Sie hat keinen Verursacher und tritt nur im beschleunigten System auf.
hinweise:
  - 'a) Denk an Newtons Kanonenkugel.'
  - 'b) Inertialsystem und beschleunigtes Bezugssystem unterscheiden.'
loesung: |
  **a)** Der Mond fällt tatsächlich ständig zur Erde hin, die Gravitation ist seine Zentripetalkraft.
  ---
  Wegen seiner Geschwindigkeit quer zur Verbindungslinie verfehlt er die Erde dabei immer, so wie Newtons Kanonenkugel.
  ---
  **b)** Im Inertialsystem wirkt nur eine Kraft nach innen, das Gefühl nach außen ist die Trägheit. Im mitrotierenden System rechnet der Fahrgast zusätzlich mit der Scheinkraft Zentrifugalkraft. Beide Beschreibungen sind richtig, solange man sie nicht mischt.
```

```aufgabe
id: p6-pruefung-achterbahn
titel: Achterbahn mit Looping
niveau: 3
punkte: 9
lernziel: 3
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 18 Minuten.* Ein Achterbahnwagen mit Fahrgästen ($600\,\text{kg}$) startet aus der Ruhe auf $30\,\text{m}$ Höhe über dem tiefsten Punkt eines kreisförmigen Loopings mit Radius $10\,\text{m}$. Reibung vernachlässigen wir. Runde auf drei signifikante Stellen.

  a) Wie schnell ist der Wagen im höchsten Punkt des Loopings (in m/s)? (3 P)

  b) Mit welcher Kraft drückt die Schiene dort auf den Wagen (in N)? (3 P)

  c) Aus welcher Höhe müsste der Wagen mindestens starten, damit er den Looping gerade noch schafft (in m)? (3 P)
teile:
  - typ: zahl
    label: a) Geschwindigkeit oben
    loesung: "sqrt(2*9.81*(30-20))"
    einheit: "m/s"
    anzeige: '14{,}0'
    fehler:
      - wert: "sqrt(2*9.81*30)"
        meldung: Der höchste Punkt des Loopings liegt $2r = 20\,\text{m}$ hoch. Der Wagen fällt bis dorthin nur $10\,\text{m}$.
  - typ: zahl
    label: b) Kraft der Schiene
    loesung: "600*(2*9.81*10/10 - 9.81)"
    einheit: "N"
    anzeige: '5886 \approx 5{,}89\cdot 10^{3}'
    fehler:
      - wert: "600*(2*9.81*10/10 + 9.81)"
        meldung: Oben zeigen Gewicht **und** Schienenkraft zur Mitte. Also $m g + F_N = m v^2/r$, das Gewicht wird abgezogen.
  - typ: zahl
    label: c) Mindeststarthöhe
    loesung: "2.5*10"
    einheit: "m"
    anzeige: '25'
    fehler:
      - wert: "20"
        meldung: Auf $20\,\text{m}$ käme der Wagen oben mit $v = 0$ an. Er braucht dort noch $v^2 = g r$.
hinweise:
  - 'a) Energieerhaltung vom Start ($30\,\text{m}$) bis zum Loopingscheitel ($2r = 20\,\text{m}$).'
  - 'b) Oben: $m g + F_N = m v^2/r$. c) Grenzfall $F_N = 0$, also $v^2 = g r$ im Scheitel.'
loesung: |
  **Modell:** Ohne Reibung gilt die Energieerhaltung zwischen Start und Scheitel. Im Scheitel ist die Summe aus Gewicht und Schienenkraft die Zentripetalkraft.
  ---
  **a)** $\tfrac12 m v^2 = m g\,(30\,\text{m} - 20\,\text{m})$, also $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 10\,\text{m}} = 14{,}0\,\text{m/s}$.
  ---
  **b)** $F_N = m\left(\dfrac{v^2}{r} - g\right) = 600\,\text{kg}\cdot\left(\dfrac{196{,}2\,\text{m}^2/\text{s}^2}{10\,\text{m}} - 9{,}81\,\text{m/s}^2\right) = 600\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 5886\,\text{N}$, also genau das Gewicht des Wagens.
  ---
  **c)** Grenzfall: oben $v^2 = g r$. Energie: $m g h = m g\cdot 2r + \tfrac12 m g r$, also $h = 2{,}5\,r = 25\,\text{m}$. Der Start auf $30\,\text{m}$ hat also $5\,\text{m}$ Reserve.
```

```aufgabe
id: p6-pruefung-exoplanet
titel: Der erste Planet bei einem fremden Stern
niveau: 3
punkte: 8
lernziel: 8
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 16 Minuten.* 1995 entdeckten Michel Mayor und Didier Queloz den ersten Planeten bei einem sonnenähnlichen Stern, 51 Pegasi b. Er umläuft seinen Stern in $4{,}23$ Tagen auf einer fast kreisförmigen Bahn mit Radius $0{,}0527\,\text{AE}$ ($1\,\text{AE} = 1{,}496\cdot 10^{11}\,\text{m}$). Runde auf drei signifikante Stellen.

  a) Berechne die Masse des Sterns (in kg). (4 P)

  b) Wie viele Sonnenmassen ($1{,}99\cdot 10^{30}\,\text{kg}$) sind das? (1 P)

  c) Wie schnell läuft der Planet auf seiner Bahn (in km/s)? Vergleiche mit der Erde ($29{,}8\,\text{km/s}$). (3 P)
teile:
  - typ: zahl
    label: a) Masse des Sterns
    loesung: "4*pi^2*(0.0527*1.496e11)^3/(6.674e-11*(4.23*86400)^2)"
    einheit: "kg"
    anzeige: '2{,}17\cdot 10^{30}'
    fehler:
      - wert: "4*pi^2*(0.0527*1.496e11)^3/(6.674e-11*4.23^2)"
        meldung: Die Umlaufzeit muss in Sekunden stehen, $4{,}23\cdot 86\,400\,\text{s}$.
  - typ: zahl
    label: b) Sonnenmassen
    loesung: "4*pi^2*(0.0527*1.496e11)^3/(6.674e-11*(4.23*86400)^2)/1.99e30"
    anzeige: '1{,}09'
  - typ: zahl
    label: c) Bahngeschwindigkeit
    loesung: "2*pi*0.0527*1.496e11/(4.23*86400)/1000"
    einheit: "km/s"
    anzeige: '136'
hinweise:
  - 'Gravitation des Sterns gleich Zentripetalkraft des Planeten: $M = \dfrac{4\pi^2 r^3}{G T^2}$.'
  - 'Alle Größen in SI: $r = 0{,}0527\cdot 1{,}496\cdot 10^{11}\,\text{m}$, $T = 4{,}23\cdot 86\,400\,\text{s}$. Dann $v = 2\pi r/T$.'
loesung: |
  **Modell:** Der Planet läuft auf einer Kreisbahn. Die Gravitation des Sterns liefert die Zentripetalkraft. Die Planetenmasse kürzt sich, also gilt $M = \dfrac{4\pi^2 r^3}{G T^2}$.
  ---
  **Umrechnen:** $r = 0{,}0527\cdot 1{,}496\cdot 10^{11}\,\text{m} = 7{,}88\cdot 10^9\,\text{m}$, $T = 4{,}23\cdot 86\,400\,\text{s} = 3{,}65\cdot 10^5\,\text{s}$.
  ---
  **a)** $M = \dfrac{39{,}48\cdot(7{,}88\cdot 10^9\,\text{m})^3}{6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2\cdot(3{,}65\cdot 10^5\,\text{s})^2} = 2{,}17\cdot 10^{30}\,\text{kg}$.
  ---
  **b)** $2{,}17\cdot 10^{30}/1{,}99\cdot 10^{30} = 1{,}09$ Sonnenmassen: ein sonnenähnlicher Stern. ✓
  ---
  **c)** $v = \dfrac{2\pi r}{T} = \dfrac{2\pi\cdot 7{,}88\cdot 10^9\,\text{m}}{3{,}65\cdot 10^5\,\text{s}} = 1{,}36\cdot 10^5\,\text{m/s} = 136\,\text{km/s}$, mehr als viermal so schnell wie die Erde, weil der Planet seinem Stern so nahe ist.
```

```aufgabe
id: p6-pruefung-mars-start
titel: Start vom Mars
niveau: 3
punkte: 8
lernziel: 9
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 16 Minuten.* Eine Rückkehrkapsel ($1000\,\text{kg}$) soll vom Mars ($M = 6{,}42\cdot 10^{23}\,\text{kg}$, $R = 3390\,\text{km}$) starten. Luftwiderstand vernachlässigen wir. Runde auf drei signifikante Stellen.

  a) Wie groß ist die Fluchtgeschwindigkeit des Mars (in km/s)? (3 P)

  b) Wie viel Energie braucht die Kapsel mindestens, um dem Schwerefeld des Mars ganz zu entkommen (in J)? (3 P)

  c) Um welchen Faktor ist diese Energie auf der Erde größer ($M_E = 5{,}97\cdot 10^{24}\,\text{kg}$, $R_E = 6370\,\text{km}$)? (2 P)
teile:
  - typ: zahl
    label: a) Fluchtgeschwindigkeit
    loesung: "sqrt(2*6.674e-11*6.42e23/3.39e6)/1000"
    einheit: "km/s"
    anzeige: '5{,}03'
    fehler:
      - wert: "sqrt(6.674e-11*6.42e23/3.39e6)/1000"
        meldung: Der Faktor $2$ fehlt. Das wäre die Kreisbahngeschwindigkeit knapp über dem Boden.
  - typ: zahl
    label: b) Energie
    loesung: "6.674e-11*6.42e23*1000/3.39e6"
    einheit: "J"
    anzeige: '1{,}26\cdot 10^{10}'
    fehler:
      - wert: "6.674e-11*6.42e23*1000/(2*3.39e6)"
        meldung: Das ist die halbe Bindungsenergie. Zum völligen Entkommen braucht es den ganzen Betrag $G M m/R$.
  - typ: zahl
    label: c) Faktor
    loesung: "(5.97e24/6.37e6)/(6.42e23/3.39e6)"
    anzeige: '4{,}95'
    fehler:
      - wert: "5.97e24/6.42e23"
        meldung: Die Energie hängt von $M/R$ ab, nicht nur von der Masse. Die Erde ist auch größer.
hinweise:
  - 'Bindungsenergie an der Oberfläche: $E = G M m/R$. Fluchtgeschwindigkeit aus $\tfrac12 m v_F^2 = E$.'
  - 'c) Bilde das Verhältnis $\dfrac{M_E/R_E}{M/R}$.'
loesung: |
  **Modell:** Zum Entkommen muss die Kapsel die Lageenergie von $-G M m/R$ auf null bringen. Diese Energie muss als Bewegungsenergie vorhanden sein.
  ---
  **a)** $v_F = \sqrt{\dfrac{2 G M}{R}} = \sqrt{\dfrac{2\cdot 6{,}674\cdot 10^{-11}\cdot 6{,}42\cdot 10^{23}}{3{,}39\cdot 10^{6}}}\,\text{m/s} = 5{,}03\cdot 10^3\,\text{m/s} = 5{,}03\,\text{km/s}$.
  ---
  **b)** $E = \dfrac{G M m}{R} = \dfrac{6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2\cdot 6{,}42\cdot 10^{23}\,\text{kg}\cdot 1000\,\text{kg}}{3{,}39\cdot 10^6\,\text{m}} = 1{,}26\cdot 10^{10}\,\text{J}$.
  ---
  **c)** $\dfrac{M_E/R_E}{M/R} = \dfrac{5{,}97\cdot 10^{24}/6{,}37\cdot 10^6}{6{,}42\cdot 10^{23}/3{,}39\cdot 10^6} = 4{,}95$. Der Start von der Erde kostet fast fünfmal so viel Energie. Deshalb plant man Rückflüge gern mit Treibstoff, der erst auf dem Mars hergestellt wird.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der folgenden Zusammenfassung.
antwort: |
  Zum Beispiel: (1) Eine Kreisbewegung ist auch bei konstantem Tempo beschleunigt, und zwar mit $v^2/r$ zum Mittelpunkt.
  Dafür braucht es eine resultierende Kraft zur Mitte, die Zentripetalkraft. Sie ist keine neue Kraft, sondern eine Rolle,
  die Seilkraft, Reibung, Normalkraft oder Gravitation übernehmen. (2) Die Zentrifugalkraft gibt es nur im mitrotierenden
  System, sie ist eine Scheinkraft ohne Verursacher. (3) Zwei Massen ziehen sich mit $G m_1 m_2/r^2$ an. Ist die Gravitation
  die Zentripetalkraft, entsteht eine Umlaufbahn, und alles darin fällt frei, deshalb schweben Astronauten.
```

:::zusammenfassung
- **Kenngrößen:** $f = 1/T$, $\omega = 2\pi/T = 2\pi f$, $v = \omega r$. Drehzahlen pro Minute zuerst durch $60$ teilen,
  Winkel immer im Bogenmaß.
- **Zentripetalbeschleunigung:** Auch bei konstantem Tempo ändert sich die Richtung der Geschwindigkeit. Die Beschleunigung
  zeigt zum Mittelpunkt und hat den Betrag $a_z = v^2/r = \omega^2 r$.
- **Zentripetalkraft:** Für die Kreisbahn muss die Summe der echten Kräfte zur Mitte $m v^2/r$ ergeben. Die Zentripetalkraft
  ist eine Rolle, keine eigene Kraft. Fällt sie weg, fliegt der Körper tangential weiter.
- **Anwendungen:** flache Kurve $v_{\max} = \sqrt{\mu_H g r}$, überhöhte Kurve und Kettenkarussell $\tan\alpha = v^2/(r g)$,
  Looping oben $v_{\min} = \sqrt{g r}$ und Starthöhe $2{,}5\,r$. Die Masse kürzt sich jeweils.
- **Zentrifugalkraft:** Scheinkraft $m\omega^2 r$ nach außen, nur im mitrotierenden System. Von außen gibt es sie nicht. Die
  Corioliskraft lenkt auf der Nordhalbkugel nach rechts ab.
- **Gravitation:** $F = G m_1 m_2/r^2$ mit dem Abstand der Mittelpunkte. $g = G M/R^2$, in der Höhe $g_0\,(R/(R + h))^2$.
  Gezeiten entstehen aus dem **Unterschied** der Anziehung.
- **Satelliten und Kepler:** Gravitation gleich Zentripetalkraft liefert $v = \sqrt{G M/r}$ und $T^2/r^3 = 4\pi^2/(G M)$.
  Weiter außen langsamer. Flächensatz $r_P v_P = r_A v_A$. Schwerelosigkeit ist freier Fall.
- **Energie:** $E_{\text{pot}} = -G M m/r$, Kreisbahn $E = -G M m/(2r)$, Fluchtgeschwindigkeit $v_F = \sqrt{2 G M/R}$,
  für die Erde $11{,}2\,\text{km/s}$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir wiedererkennst,
rechne die genannte Aufgabe noch einmal.

1. **Drehzahl pro Minute direkt eingesetzt oder in Grad gerechnet.** Training: „Drehzahl umrechnen“ und „Innen und außen
   auf einer CD“.
2. **$\omega r$ statt $\omega^2 r$ oder km/h in $v^2/r$.** Training: „Wäscheschleuder“ und „Ein Zug in der Kurve“.
3. **„Konstantes Tempo heißt keine Beschleunigung.“** Training: „Wo steckt der Denkfehler?“ und „Wohin zeigt die
   Beschleunigung?“.
4. **Zentripetalkraft als zusätzliche Kraft ins Freikörperbild gezeichnet.** Training: „Welche Kräfte wirken oben im
   Looping?“ und „Drückt die Zentripetalkraft nach außen?“.
5. **„Reißt die Schnur, fliegt der Stein nach außen.“** Training: „Die Schnur reißt“ und „Wohin fliegt der Stein?“.
6. **Looping oben mit $F_N - m g$ statt $m g + F_N$ gerechnet.** Training: „Achterbahn mit Looping“ und „Schwerer im Tal
   der Achterbahn“.
7. **Zentripetal- und Zentrifugalkraft im selben Bild.** Training: „Echt oder Schein?“ und „Das Kettenkarussell aus zwei
   Sichten“.
8. **Höhe statt Abstand vom Mittelpunkt eingesetzt.** Training: „Fallbeschleunigung auf der Bahn der GPS-Satelliten“ und
   „Bahn der ISS“.
9. **Quadrat beim Abstand vergessen.** Training: „Abstand verdreifachen“ und „Anziehung zweier Massen“.
10. **„Im Weltall gibt es keine Schwerkraft.“** Training: „Warum schweben Astronauten?“ und „Schwerelos trotz Schwerkraft“.
11. **Kepler-Verhältnis über verschiedene Zentralkörper oder mit falscher Hochzahl.** Training: „Ein Saturnjahr“ und
    „Umlaufzeit des Mars“.
12. **Faktor 2 in der Fluchtgeschwindigkeit vergessen oder Vorzeichen der potentiellen Energie falsch.** Training:
    „Fluchtgeschwindigkeit des Mondes“ und „Die Energiebilanz eines Satelliten“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“, **3** „sicher, auch
in der Prüfung“. Bei einer 1 wiederhole die Lektion und rechne ihre Aufgabe auf Niveau 3.

1. Periode, Frequenz, Winkel- und Bahngeschwindigkeit umrechnen.
2. Die Zentripetalbeschleunigung begründen und berechnen.
3. Erkennen, welche echte Kraft die Zentripetalkraft liefert, und $m v^2/r$ berechnen.
4. Kurve, überhöhte Kurve, Looping und Kettenkarussell mit Freikörperbild berechnen.
5. Die Zentrifugalkraft als Scheinkraft erklären und die Corioliskraft qualitativ deuten.
6. Das Gravitationsgesetz anwenden, auch als Proportionalitätsschluss.
7. Fallbeschleunigung in jeder Höhe und auf anderen Himmelskörpern berechnen, Gezeiten erklären.
8. Satellitenbahnen berechnen, die geostationäre Bahn begründen, Schwerelosigkeit erklären.
9. Die Keplerschen Gesetze formulieren und anwenden, Zentralmassen bestimmen.
10. Gravitationsenergie, Bahnenergie und Fluchtgeschwindigkeit berechnen.

## Mündliche Prüfung

```karten
- id: p6-k-kenngroessen
  frage: Welche Größen beschreiben eine gleichförmige Kreisbewegung, und wie hängen sie zusammen?
  antwort: |
    Die Periodendauer $T$ ist die Zeit für eine Runde, die Frequenz $f = 1/T$ zählt die Runden pro Sekunde. Die
    Winkelgeschwindigkeit $\omega = 2\pi/T = 2\pi f$ sagt, wie schnell der Winkel im Bogenmaß wächst. Die Bahngeschwindigkeit
    ist $v = 2\pi r/T = \omega r$. Auf einer starren Scheibe haben alle Punkte dasselbe $\omega$, aber außen ist $v$ größer.
  kernpunkte: ["T und f = 1/T", "ω = 2π/T, Bogenmaß", "v = ω·r", "starre Scheibe: ω gleich, v wächst mit r"]
- id: p6-k-beschleunigt
  frage: Warum ist eine gleichförmige Kreisbewegung eine beschleunigte Bewegung? Wohin zeigt die Beschleunigung?
  antwort: |
    Die Geschwindigkeit ist ein Vektor. Auch wenn ihr Betrag gleich bleibt, ändert sich ständig ihre Richtung, und jede
    Änderung des Geschwindigkeitsvektors ist eine Beschleunigung. Sie zeigt zum Kreismittelpunkt, steht also senkrecht auf
    der Geschwindigkeit, und hat den Betrag $v^2/r = \omega^2 r$. Weil sie senkrecht steht, ändert sie nur die Richtung.
  kernpunkte: ["Geschwindigkeit ist ein Vektor", "Richtungsänderung ist Beschleunigung", "zum Mittelpunkt, a = v²/r", "senkrecht zu v, Tempo bleibt"]
- id: p6-k-zentripetal
  frage: Was ist die Zentripetalkraft, und warum ist sie keine eigene Kraftart?
  antwort: |
    Die Zentripetalkraft ist die resultierende Kraft zum Kreismittelpunkt, die ein Körper für die Kreisbahn braucht,
    $F = m v^2/r$. Sie ist keine eigene Kraftart wie Gewicht oder Reibung, sondern eine Rolle, die echte Kräfte übernehmen:
    die Seilkraft beim Stein, die Haftreibung in der Kurve, die Gravitation beim Mond. Im Freikörperbild zeichnet man nur
    die echten Kräfte und verlangt, dass ihre Summe zur Mitte $m v^2/r$ ist.
  kernpunkte: ["resultierende Kraft zur Mitte, m·v²/r", "Rolle echter Kräfte", "Beispiele Seil, Reibung, Gravitation", "nicht zusätzlich einzeichnen"]
- id: p6-k-wegfall
  frage: Was passiert, wenn die Zentripetalkraft plötzlich wegfällt? Nenne ein Beispiel.
  antwort: |
    Dann wirkt keine Kraft mehr zur Mitte. Nach dem Trägheitssatz bewegt sich der Körper geradlinig mit seiner momentanen
    Geschwindigkeit weiter, also tangential zur Bahn, nicht radial nach außen. Beispiele sind ein Stein, dessen Schnur reißt,
    oder die Funken einer Schleifscheibe, die tangential davonfliegen.
  kernpunkte: ["keine Kraft zur Mitte mehr", "Trägheitssatz: geradlinig weiter", "tangential, nicht radial", "Funken der Schleifscheibe"]
- id: p6-k-kurve
  frage: Wie schnell darf ein Auto durch eine flache Kurve fahren, und warum hängt das nicht von seiner Masse ab?
  antwort: |
    In der flachen Kurve liefert die Haftreibung die Zentripetalkraft. Sie ist höchstens $\mu_H m g$. Aus $m v^2/r \le \mu_H m g$
    folgt $v_{\max} = \sqrt{\mu_H g r}$. Die Masse kürzt sich, weil ein schwereres Auto zwar mehr Kraft braucht, aber im selben
    Verhältnis stärker auf die Straße drückt und damit mehr Reibung bekommt.
  kernpunkte: ["Haftreibung als Zentripetalkraft", "v_max = √(μ·g·r)", "nötige und verfügbare Kraft beide ∝ m"]
- id: p6-k-looping
  frage: Welche Mindestgeschwindigkeit braucht ein Wagen im höchsten Punkt eines Loopings, und aus welcher Höhe muss er starten?
  antwort: |
    Oben zeigen Gewicht und Schienenkraft beide zur Mitte: $m g + F_N = m v^2/r$. Die Schiene kann nur drücken, also $F_N \ge 0$.
    Der Grenzfall $F_N = 0$ ergibt $v_{\min} = \sqrt{g r}$. Mit dem Energiesatz folgt ohne Reibung die Starthöhe
    $h = 2r + \tfrac12 r = 2{,}5\,r$. Im tiefsten Punkt ist $F_N = m g + m v^2/r$, man fühlt sich schwerer.
  kernpunkte: ["oben m·g + F_N = m·v²/r", "Grenzfall F_N = 0: v = √(g·r)", "Energiesatz: h = 2,5 r", "unten F_N größer als m·g"]
- id: p6-k-zentrifugal
  frage: Gibt es die Zentrifugalkraft wirklich? Erkläre mit zwei Bezugssystemen.
  antwort: |
    Sie ist eine Scheinkraft. Ein Beobachter am Boden, also im Inertialsystem, sieht nur eine Kraft nach innen, zum Beispiel
    die Kraft der Lehne. Das Gefühl nach außen ist die Trägheit. Wer sich mitdreht, ruht in seinem beschleunigten System und
    braucht eine Kraft nach außen, damit die Summe null wird: die Zentrifugalkraft $m\omega^2 r$. Sie hat keinen Verursacher und
    keinen Wechselwirkungspartner. Man darf die beiden Beschreibungen nie mischen.
  kernpunkte: ["Inertialsystem: nur Kraft nach innen", "rotierendes System: Scheinkraft nach außen", "kein Verursacher, kein Partner", "nie mischen"]
- id: p6-k-coriolis
  frage: Was besagt die Ablenkregel der Corioliskraft, und wo spielt sie eine Rolle? Verbinde mit dem Wetter.
  antwort: |
    Auf der Nordhalbkugel werden bewegte Körper, von der Erde aus gesehen, nach rechts abgelenkt, auf der Südhalbkugel nach
    links. Grund ist die Erddrehung: Luft, die vom Äquator nach Norden strömt, bringt eine größere Ostgeschwindigkeit mit als der
    Boden weiter nördlich und eilt ihm voraus. Deshalb strömt Luft nicht geradewegs ins Tiefdruckgebiet, sondern wirbelt auf der
    Nordhalbkugel gegen den Uhrzeigersinn. Das behandelt das Kapitel über Hauptsätze und Meteorologie.
  kernpunkte: ["Nordhalbkugel rechts, Südhalbkugel links", "Scheinkraft der rotierenden Erde", "Tiefdruckwirbel gegen den Uhrzeigersinn"]
- id: p6-k-gravitation
  frage: Wie lautet das Gravitationsgesetz, und welche Eigenschaften hat die Gravitation?
  antwort: |
    Zwei Massen ziehen sich mit $F = G m_1 m_2/r^2$ an, wobei $r$ der Abstand der Mittelpunkte ist und
    $G = 6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2$. Die Kräfte auf beide Körper sind gleich groß. Die Gravitation ist
    sehr schwach, aber immer anziehend, nicht abschirmbar und unbegrenzt in der Reichweite. Doppelter Abstand ergibt ein Viertel
    der Kraft.
  kernpunkte: ["F = G·m₁·m₂/r²", "r zwischen den Mittelpunkten", "immer anziehend, unbegrenzte Reichweite", "Abstandsquadratgesetz"]
- id: p6-k-mondrechnung
  frage: Wie hat Newton erkannt, dass dieselbe Kraft den Apfel fallen lässt und den Mond hält?
  antwort: |
    Der Mond ist etwa $60$ Erdradien entfernt. Aus Umlaufzeit und Bahnradius folgt seine Zentripetalbeschleunigung von etwa
    $0{,}0027\,\text{m/s}^2$, rund $1/3600$ von $g$. Weil $3600 = 60^2$ ist, passt das genau zu einer Kraft, die mit dem
    Quadrat des Abstands abnimmt. Der Mond fällt also ständig zur Erde, verfehlt sie aber wegen seiner Geschwindigkeit.
  kernpunkte: ["Mond in 60 Erdradien", "a = 0,0027 m/s² ≈ g/3600", "3600 = 60², also 1/r²", "Mond fällt und verfehlt die Erde"]
- id: p6-k-gleich-schnell
  frage: Warum fallen im Vakuum alle Körper gleich schnell? Verbinde mit dem Kapitel Dynamik.
  antwort: |
    Die Gravitationskraft ist proportional zur schweren Masse, der Widerstand gegen Beschleunigung zur trägen Masse. Beide sind
    gleich, das zeigen Experimente sehr genau. In $a = F/m = G M/R^2$ kürzt sich die Masse heraus. Im Kapitel Dynamik heißt das:
    träge und schwere Masse sind gleich. Auf der Erde sieht es oft anders aus, weil der Luftwiderstand leichte Körper stärker bremst.
  kernpunkte: ["schwere Masse = träge Masse", "Masse kürzt sich, g = G·M/R²", "Luftwiderstand als Störung"]
- id: p6-k-gezeiten
  frage: Wie entstehen Ebbe und Flut, und warum gibt es zwei Flutberge?
  antwort: |
    Der Mond zieht die ihm zugewandte Seite der Erde stärker an als den Erdmittelpunkt und diesen stärker als die abgewandte
    Seite. Es zählt dieser Unterschied. Das Wasser auf der Mondseite eilt voraus, das auf der Gegenseite bleibt zurück, so
    entstehen zwei Flutberge. Die Erde dreht sich darunter, deshalb gibt es meist zweimal täglich Flut. Stehen Sonne und Mond in
    einer Linie, entsteht Springflut.
  kernpunkte: ["Unterschied der Anziehung zählt", "Mondseite voraus, Gegenseite zurück", "Erddrehung: zweimal täglich", "Springflut bei Neu- und Vollmond"]
- id: p6-k-satellit
  frage: Wie berechnet man Geschwindigkeit und Umlaufzeit eines Satelliten? Warum ist ein Satellit weiter außen langsamer?
  antwort: |
    Die Gravitation liefert die Zentripetalkraft: $G M m/r^2 = m v^2/r$, also $v = \sqrt{G M/r}$ und $T = 2\pi\sqrt{r^3/(G M)}$.
    Die Satellitenmasse kürzt sich. Weiter außen ist die Anziehung schwächer, also reicht für die Kreisbahn eine kleinere
    Geschwindigkeit. Erdnahe Satelliten fliegen mit knapp $8\,\text{km/s}$ und brauchen etwa $90\,\text{min}$.
  kernpunkte: ["Gravitation = Zentripetalkraft", "v = √(G·M/r), T = 2π√(r³/(G·M))", "Satellitenmasse kürzt sich", "außen schwächere Anziehung, kleineres v"]
- id: p6-k-schwerelos
  frage: Warum sind Astronauten in der Raumstation schwerelos, obwohl die Erde sie anzieht?
  antwort: |
    In $400\,\text{km}$ Höhe ist die Anziehung noch fast $90\,\%$ so stark wie am Boden. Station und Astronauten fallen aber
    gemeinsam frei um die Erde, die Gravitation ist ihre Zentripetalkraft. Weil alle gleich beschleunigt werden, drückt nichts
    gegen etwas anderes. Das Gefühl von Gewicht entsteht nur durch die Kraft der Unterlage. Schwerelosigkeit heißt also freier
    Fall, nicht fehlende Schwerkraft.
  kernpunkte: ["Anziehung fast wie am Boden", "gemeinsamer freier Fall", "keine Kraft der Unterlage", "nicht: keine Schwerkraft"]
- id: p6-k-geostationaer
  frage: Was ist ein geostationärer Satellit, und warum gibt es nur eine solche Bahn?
  antwort: |
    Er umläuft die Erde über dem Äquator in Drehrichtung in genau einem Sterntag und scheint deshalb über einem Punkt
    stillzustehen. Weil die Umlaufzeit festliegt, folgt aus $r^3 = G M T^2/(4\pi^2)$ genau ein Radius, etwa $42\,200\,\text{km}$,
    also $35\,800\,\text{km}$ Höhe. Die Bahn muss über dem Äquator liegen, weil jede Kreisbahn um den Erdmittelpunkt läuft.
  kernpunkte: ["Umlaufzeit ein Sterntag, mitdrehend", "eindeutiger Radius aus Kepler III", "rund 36 000 km Höhe", "nur über dem Äquator"]
- id: p6-k-kepler
  frage: Nenne die drei Keplerschen Gesetze und erkläre, warum ein Planet in Sonnennähe schneller ist.
  antwort: |
    Erstens laufen die Planeten auf Ellipsen, in deren einem Brennpunkt die Sonne steht. Zweitens überstreicht der Fahrstrahl
    in gleichen Zeiten gleiche Flächen. Drittens ist $T^2/a^3$ für alle Planeten derselben Sonne gleich. Nahe der Sonne ist der
    Fahrstrahl kurz. Für dieselbe Fläche muss der Planet einen längeren Weg zurücklegen, also ist er schneller. Dahinter steht
    die Drehimpulserhaltung, mit $r_P v_P = r_A v_A$.
  kernpunkte: ["Ellipsen, Sonne im Brennpunkt", "Flächensatz", "T²/a³ konstant bei gleichem Zentralkörper", "r_P·v_P = r_A·v_A, Drehimpuls"]
- id: p6-k-flucht
  frage: Was ist die Fluchtgeschwindigkeit, und wie leitet man sie her?
  antwort: |
    Es ist die Mindestgeschwindigkeit, mit der ein Körper ohne Antrieb das Schwerefeld eines Himmelskörpers ganz verlassen
    kann. Mit dem Nullpunkt im Unendlichen hat er an der Oberfläche die Lageenergie $-G M m/R$. Seine kinetische Energie muss
    das ausgleichen: $\tfrac12 m v_F^2 = G M m/R$, also $v_F = \sqrt{2 G M/R}$. Für die Erde sind das $11{,}2\,\text{km/s}$,
    $\sqrt 2$-mal die Kreisbahngeschwindigkeit an der Oberfläche.
  kernpunkte: ["Mindestgeschwindigkeit zum Entkommen", "E_pot = −G·M·m/R, Nullpunkt im Unendlichen", "v_F = √(2·G·M/R)", "Erde 11,2 km/s"]
- id: p6-k-bahnwechsel
  frage: Ein Satellit soll auf eine höhere Bahn. Muss man ihm Energie zuführen, und ist er danach schneller oder langsamer?
  antwort: |
    Man muss Energie zuführen, denn die Gesamtenergie $-G M m/(2r)$ ist weiter außen größer, also weniger negativ. Trotzdem ist
    der Satellit danach langsamer, denn auf der Kreisbahn gilt $v = \sqrt{G M/r}$. Die zugeführte Energie geht ganz in die
    Lageenergie, die sogar doppelt so stark wächst, wie die Bewegungsenergie abnimmt. Umgekehrt wird ein gebremster Satellit schneller.
  kernpunkte: ["E = −G·M·m/(2r), außen größer", "Energie zuführen", "danach langsamer, v = √(G·M/r)", "gebremst: sinkt und wird schneller"]
- id: p6-k-coulomb
  frage: Vergleiche das Gravitationsgesetz mit dem Coulomb-Gesetz der Elektrostatik. Was ist gleich, was verschieden?
  antwort: |
    Beide Kräfte nehmen mit dem Quadrat des Abstands ab und haben die Form Konstante mal Produkt durch $r^2$. Bei der Gravitation
    stehen Massen, beim Coulomb-Gesetz Ladungen. Verschieden ist: Gravitation zieht immer an, elektrische Kräfte können anziehen
    oder abstoßen. Die elektrische Kraft ist viel stärker, hebt sich aber in neutralen Körpern fast auf. Deshalb bestimmt im großen
    Maßstab die Gravitation den Aufbau des Weltalls.
  kernpunkte: ["beide ∝ 1/r², gleiche Form", "Massen gegen Ladungen", "Gravitation nur anziehend", "elektrische Kraft stärker, aber neutralisiert"]
```
