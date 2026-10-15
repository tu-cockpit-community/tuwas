---
nummer: 5
titel: Drehbewegung, Gleichgewicht und einfache Maschinen
kurz: Drehmoment und Hebelgesetz, Gleichgewicht und Schwerpunkt, Hebel, Wellrad, Rollen, Flaschenzug, schiefe Ebene, Keil und Schraube, die goldene Regel der Mechanik, der Wirkungsgrad und die Grundzüge der Drehbewegung.
teil: grundlagen
stunden: 10
pruefungsgewicht: 2
voraussetzungen: [groessen-einheiten-messen, kinematik, dynamik, arbeit-energie-impuls]
lernziele:
  - das Drehmoment als Kraft mal Hebelarm berechnen, den Hebelarm als senkrechten Abstand der Wirkungslinie von der Drehachse bestimmen und den Drehsinn mit einem Vorzeichen berücksichtigen
  - die beiden Gleichgewichtsbedingungen eines starren Körpers aufstellen und damit Auflagerkräfte, Seilkräfte, Wandkräfte und Muskelkräfte berechnen
  - den Schwerpunkt aus Massen und Orten berechnen, die drei Gleichgewichtsarten unterscheiden und die Standfestigkeit eines Körpers mit dem Kippwinkel beurteilen
  - Hebel, Wellrad und Zahnradgetriebe mit dem Hebelgesetz berechnen und Übersetzungen für Kraft, Drehmoment und Drehzahl angeben
  - Kraft und Weg bei fester und loser Rolle, Flaschenzug, schiefer Ebene, Keil und Schraube berechnen und die tragenden Seilstücke richtig zählen
  - die goldene Regel der Mechanik formulieren und mit der Energieerhaltung begründen sowie den Wirkungsgrad einzelner und hintereinandergeschalteter Maschinen berechnen
  - eine Drehbewegung mit Drehwinkel, Winkelgeschwindigkeit, Drehzahl und Winkelbeschleunigung beschreiben, das Trägheitsmoment anschaulich erklären und das Grundgesetz der Drehbewegung anwenden
  - Rotationsenergie, Rollbewegungen auf der schiefen Ebene und die Erhaltung des Drehimpulses berechnen und erklären
---

Seit der Antike bewegen Menschen große Lasten mit kleiner Kraft. Sie benutzen dafür Brechstangen, die
Seilwinde am Brunnen, den Flaschenzug am Kran, die Rampe, den Keil und die Schraube. Von Archimedes ist
der Satz überliefert: „Gebt mir einen festen Punkt, und ich hebe die Welt aus den Angeln.“ Solche
Werkzeuge heißen **einfache Maschinen**. Die Prüfungsordnung nennt sie ausdrücklich als eigenen
Stoffpunkt.

Bisher hast du jeden Körper als **Massenpunkt** behandelt, also als Punkt, in dem die ganze Masse sitzt
(siehe [2.1 Bezugssystem, Massenpunkt und Ort](/lernen/physik1/kinematik/bezugssystem-massenpunkt-und-ort)). Für eine Tür, einen Hebel oder ein Rad reicht das
nicht mehr. Hier kommt es darauf an, **wo** eine Kraft angreift. Eine Kraft an der Türklinke öffnet die
Tür leicht. Dieselbe Kraft direkt neben den Angeln bewegt sie kaum. Wir brauchen deshalb ein neues
Modell, den **starren Körper**, und eine neue Größe, das **Drehmoment**.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung erwarten dich vor allem diese Aufgabentypen:

- Ein Balken liegt auf zwei Stützen. Gesucht sind die Kräfte auf die Stützen.
- Eine Last hängt an einem Flaschenzug mit Reibung. Gesucht sind Zugkraft, Seilweg und Arbeit.
- Eine Kiste wird über eine Rampe gehoben. Gesucht sind Kraft, Weg und Wirkungsgrad.
- Ein Schwungrad wird gebremst oder ein Zylinder rollt eine Rampe hinab.

In der mündlichen Prüfung kommt fast sicher die Frage: „Warum kann man mit einer Maschine Kraft sparen,
aber keine Arbeit?“ Die Antwort heißt **goldene Regel der Mechanik**. Nach diesem Kapitel kannst du sie
an jeder Maschine erklären.

**Zwei Stellen sind für fast alle schwer.** Lies sie langsam, wenn du dort ankommst.

1. **Der Hebelarm ist ein senkrechter Abstand.** Beim Drehmoment zählt nicht der Abstand zwischen Achse
   und Angriffspunkt, sondern der senkrechte Abstand der **Wirkungslinie** der Kraft von der Achse. Wer
   das verwechselt, rechnet bei jeder schrägen Kraft falsch.
2. **Kraft gespart heißt Weg verloren.** Eine Maschine verkleinert die Kraft, verlängert aber im selben
   Verhältnis den Weg. Die Arbeit, also Kraft mal Weg, bleibt gleich. Energie kann keine Maschine erzeugen.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Gewichtskraft** $F_G = m\cdot g$, **Normalkraft** und **Seilkraft** aus dem Abschnitt
  [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft)
  und das **Kräftegleichgewicht** aus dem Abschnitt
  [Kraft und Trägheit: das erste Newtonsche Axiom](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom).
- Die **schiefe Ebene** mit Hangabtriebskraft und Normalkraft aus dem Abschnitt
  [Die schiefe Ebene: hinab, hinauf und die Haftgrenze](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze).
- **Arbeit** $W = F\cdot s$ aus dem Abschnitt [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit),
  **Energie** aus dem Abschnitt [Energie](/lernen/physik1/arbeit-energie-impuls/energie) und **Leistung** aus dem
  Abschnitt [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
- **Sinus und Kosinus** im rechtwinkligen Dreieck aus dem Mathematikkurs, Abschnitt
  [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck), und das **Bogenmaß** aus dem
  Abschnitt [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
- **Formeln umstellen** aus dem Mathematikkurs, Abschnitt [Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Bist du bei einer Frage unsicher, folge dem Link in der
Lösung und wiederhole den Abschnitt kurz. Diese zehn Minuten sparen dir später viel Zeit.

```aufgabe
id: p5-e-gewichtskraft
art: check
titel: Gewichtskraft aus der Masse
niveau: 1
angabe: |
  Ein Kind hat die Masse $45\,\text{kg}$. Wie groß ist seine Gewichtskraft in Newton? Verwende $g = 9{,}81\,\text{m/s}^2$.
teile:
  - typ: zahl
    loesung: "45*9.81"
    einheit: "N"
    anzeige: '441'
    fehler:
      - wert: "45"
        meldung: |
          Das ist die Masse in Kilogramm, keine Kraft. Die Gewichtskraft ist Masse mal Fallbeschleunigung und hat die Einheit Newton.
      - wert: "45/9.81"
        meldung: |
          Du hast geteilt. Die Gewichtskraft ist das **Produkt** $F_G = m\cdot g$.
hinweise:
  - 'Die Gewichtskraft ist $F_G = m\cdot g$.'
loesung: |
  Die Erde zieht jeden Körper mit der Gewichtskraft $F_G = m\cdot g$ an. Dabei ist $m$ die Masse und $g = 9{,}81\,\text{m/s}^2$ die Fallbeschleunigung.
  ---
  $F_G = 45\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 441\,\text{kg}\cdot\text{m/s}^2 = 441\,\text{N}$. Wiederholen kannst du das im Abschnitt [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

```aufgabe
id: p5-e-gleichgewicht
art: check
titel: Kräftegleichgewicht an einem ruhenden Körper
niveau: 1
angabe: |
  Ein Körper hängt ruhig an zwei senkrechten Seilen. Das eine Seil zieht mit $300\,\text{N}$ nach oben, das andere mit $150\,\text{N}$ nach oben. Wie groß ist die Gewichtskraft des Körpers in Newton?
teile:
  - typ: zahl
    loesung: "300+150"
    einheit: "N"
    anzeige: '450'
    fehler:
      - wert: "300-150"
        meldung: |
          Beide Seile ziehen in **dieselbe** Richtung, nämlich nach oben. Ihre Kräfte addieren sich. Nur die Gewichtskraft zeigt nach unten.
hinweise:
  - Der Körper ruht. Was folgt daraus für die Summe aller Kräfte?
loesung: |
  Der Körper ruht, also ist die resultierende Kraft null (erstes Newtonsches Axiom). Die Kräfte nach oben gleichen die Kraft nach unten genau aus.
  ---
  $F_G = 300\,\text{N} + 150\,\text{N} = 450\,\text{N}$. Wiederholen kannst du das im Abschnitt [Kraft und Trägheit: das erste Newtonsche Axiom](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom).
```

```aufgabe
id: p5-e-kosinus
art: check
titel: Ankathete im rechtwinkligen Dreieck
niveau: 1
angabe: |
  Eine $4{,}0\,\text{m}$ lange Leiter lehnt an einer Wand und schließt mit dem Boden einen Winkel von $65^\circ$ ein. Wie weit steht ihr Fuß von der Wand entfernt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "4.0*cos(inRad(65))"
    einheit: "m"
    anzeige: '1{,}69'
    fehler:
      - wert: "4.0*sin(inRad(65))"
        meldung: |
          Du hast den Sinus genommen. Der Sinus gehört zur **Gegenkathete**, also zur Seite gegenüber dem Winkel. Das ist hier die Höhe an der Wand. Der Abstand am Boden liegt am Winkel an, das ist die Ankathete.
hinweise:
  - 'Die Leiter ist die Hypotenuse. Der Abstand am Boden liegt am $65^\circ$-Winkel an. Es gilt $\cos\alpha = \dfrac{\text{Ankathete}}{\text{Hypotenuse}}$.'
loesung: |
  Leiter, Wand und Boden bilden ein rechtwinkliges Dreieck. Die Leiter ist die Hypotenuse, der Abstand am Boden ist die Ankathete des Winkels $65^\circ$.
  ---
  $d = 4{,}0\,\text{m}\cdot\cos 65^\circ = 4{,}0\,\text{m}\cdot 0{,}423 = 1{,}69\,\text{m}$. Wiederholen kannst du das in Mathematik im Abschnitt [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
```

```aufgabe
id: p5-e-hangabtrieb
art: check
titel: Hangabtriebskraft auf der schiefen Ebene
niveau: 1
angabe: |
  Ein Koffer mit $20\,\text{kg}$ liegt auf einer reibungsfreien Rampe mit $25^\circ$ Neigung. Wie groß ist die Hangabtriebskraft, also der Anteil der Gewichtskraft entlang der Rampe? Runde auf ganze Newton.
teile:
  - typ: zahl
    loesung: "20*9.81*sin(inRad(25))"
    einheit: "N"
    anzeige: '83'
    fehler:
      - wert: "20*9.81*cos(inRad(25))"
        meldung: |
          Das ist der Anteil **senkrecht** zur Rampe. Prüfe mit einem Extremfall: Auf einer waagrechten Fläche ($0^\circ$) gibt es keinen Hangabtrieb. Das passt zu $\sin 0^\circ = 0$, nicht zu $\cos 0^\circ = 1$.
      - wert: "20*9.81"
        meldung: |
          Das ist die ganze Gewichtskraft. Entlang der Rampe wirkt nur ein Teil davon, nämlich $F_G\sin\alpha$.
hinweise:
  - 'Die Hangabtriebskraft ist $F_H = m\,g\sin\alpha$.'
loesung: |
  Die Gewichtskraft $m g$ wird in einen Anteil entlang der Rampe und einen Anteil senkrecht dazu zerlegt. Der Anteil entlang der Rampe ist $F_H = m g\sin\alpha$.
  ---
  $F_H = 20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot\sin 25^\circ = 196{,}2\,\text{N}\cdot 0{,}423 = 83\,\text{N}$. Wiederholen kannst du das im Abschnitt [Die schiefe Ebene: hinab, hinauf und die Haftgrenze](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze).
```

```aufgabe
id: p5-e-arbeit
art: check
titel: Arbeit als Kraft mal Weg
niveau: 1
angabe: |
  Du schiebst eine Kiste mit einer waagrechten Kraft von $250\,\text{N}$ über $3{,}0\,\text{m}$ in Richtung der Kraft. Wie viel Arbeit verrichtest du in Joule?
teile:
  - typ: zahl
    loesung: "250*3.0"
    einheit: "J"
    anzeige: '750'
    fehler:
      - wert: "250/3.0"
        meldung: |
          Du hast geteilt. Arbeit ist Kraft **mal** Weg, $W = F\cdot s$. Die Einheit ist $\text{N}\cdot\text{m} = \text{J}$.
hinweise:
  - 'Zeigen Kraft und Weg in dieselbe Richtung, gilt $W = F\cdot s$.'
loesung: |
  Kraft und Weg zeigen in dieselbe Richtung. Dann ist die Arbeit einfach das Produkt $W = F\cdot s$.
  ---
  $W = 250\,\text{N}\cdot 3{,}0\,\text{m} = 750\,\text{N}\,\text{m} = 750\,\text{J}$. Wiederholen kannst du das im Abschnitt [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).
```

```aufgabe
id: p5-e-bogenmass
art: check
titel: Umdrehungen im Bogenmaß
niveau: 1
angabe: |
  Ein Rad dreht sich dreimal vollständig um seine Achse. Um welchen Winkel im **Bogenmaß** (Einheit Radiant, kurz rad) hat es sich gedreht? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "3*2*pi"
    einheit: "rad"
    anzeige: '18{,}85'
    fehler:
      - wert: "3*360"
        meldung: |
          $1080$ ist der Winkel in **Grad**. Im Bogenmaß entspricht eine volle Umdrehung $2\pi \approx 6{,}28$, nicht $360$.
      - wert: "3*pi"
        meldung: |
          Eine volle Umdrehung sind $2\pi$, nicht $\pi$. Der Winkel $\pi$ ist nur eine halbe Umdrehung.
hinweise:
  - 'Eine volle Umdrehung entspricht $360^\circ$ oder $2\pi\,\text{rad}$.'
loesung: |
  Im Bogenmaß misst man einen Winkel als Bogenlänge auf dem Kreis mit Radius $1$. Der ganze Kreis hat den Umfang $2\pi$, also entspricht eine Umdrehung $2\pi\,\text{rad}$.
  ---
  Drei Umdrehungen sind $3\cdot 2\pi\,\text{rad} = 6\pi\,\text{rad} \approx 18{,}85\,\text{rad}$. Wiederholen kannst du das in Mathematik im Abschnitt [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
```

```aufgabe
id: p5-e-energie
art: check
titel: Kinetische Energie
niveau: 1
angabe: |
  Ein Ball mit $2{,}0\,\text{kg}$ rollt mit $3{,}0\,\text{m/s}$. Wie groß ist seine kinetische Energie (Bewegungsenergie) in Joule? Die Drehung des Balls lassen wir hier weg.
teile:
  - typ: zahl
    loesung: "0.5*2*3^2"
    einheit: "J"
    anzeige: '9'
    fehler:
      - wert: "2*3^2"
        meldung: |
          Der Faktor $\tfrac12$ fehlt. Die kinetische Energie ist $E_{\text{kin}} = \tfrac12 m v^2$.
      - wert: "0.5*2*3"
        meldung: |
          Die Geschwindigkeit geht **quadratisch** ein. Doppelte Geschwindigkeit heißt vierfache Energie.
hinweise:
  - 'Die kinetische Energie ist $E_{\text{kin}} = \tfrac12 m v^2$.'
loesung: |
  Ein bewegter Körper hat die kinetische Energie $E_{\text{kin}} = \tfrac12 m v^2$. Dabei ist $m$ die Masse und $v$ die Geschwindigkeit.
  ---
  $E_{\text{kin}} = \tfrac12\cdot 2{,}0\,\text{kg}\cdot(3{,}0\,\text{m/s})^2 = 9{,}0\,\text{kg}\cdot\text{m}^2/\text{s}^2 = 9{,}0\,\text{J}$. Wiederholen kannst du das im Abschnitt [Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

## Das Drehmoment: Kraft mal Hebelarm

```aufgabe
id: p5-1-check
art: check
titel: "Vorwissen: Eine schräge Kraft zerlegen"
niveau: 1
angabe: |
  Eine Kraft von $50\,\text{N}$ zieht unter einem Winkel von $30^\circ$ gegen eine Stange. Wie groß ist der Anteil der Kraft, der **senkrecht** zur Stange zeigt?
teile:
  - typ: zahl
    loesung: "50*sin(inRad(30))"
    einheit: "N"
    anzeige: '25'
    fehler:
      - wert: "50*cos(inRad(30))"
        meldung: |
          Das ist der Anteil **entlang** der Stange. Er liegt am $30^\circ$-Winkel an, also gehört er zum Kosinus. Der senkrechte Anteil liegt dem Winkel gegenüber und gehört zum Sinus.
hinweise:
  - Zeichne die Kraft als Pfeil und zerlege sie in einen Anteil entlang der Stange und einen Anteil senkrecht dazu. Welcher Anteil liegt dem Winkel gegenüber?
loesung: |
  Der Kraftpfeil ist die Hypotenuse eines rechtwinkligen Dreiecks. Der Anteil senkrecht zur Stange liegt dem $30^\circ$-Winkel gegenüber, ist also die Gegenkathete.
  ---
  $F_\perp = 50\,\text{N}\cdot\sin 30^\circ = 50\,\text{N}\cdot 0{,}5 = 25\,\text{N}$. Wiederholen kannst du das Zerlegen von Kräften im Abschnitt [Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren).
```

Eine Tür öffnet sich leicht, wenn du an der Klinke drückst. Drückst du mit derselben Kraft direkt neben den
Angeln, bewegt sie sich kaum. Eine festgerostete Schraubenmutter löst du mit einem langen
Schraubenschlüssel, nicht mit einem kurzen. Die **Drehwirkung** einer Kraft hängt also nicht nur davon ab,
wie groß die Kraft ist. Sie hängt auch davon ab, **wo** die Kraft angreift und in welche **Richtung** sie
zeigt.

Zuerst brauchen wir ein Modell. Ein **starrer Körper** ist ein ausgedehnter Körper, der sich nicht
verformt: Die Abstände zwischen seinen Teilen bleiben immer gleich. Eine Tür, ein Schraubenschlüssel und
ein Balken sind in guter Näherung starr. **Kein** starrer Körper ist ein Gummiband oder ein Seil, denn sie
dehnen sich oder knicken ein. Ein starrer Körper kann sich verschieben und er kann sich **drehen**. Für die
Drehung brauchen wir eine **Drehachse**, also eine Gerade, um die sich der Körper dreht. Bei der Tür ist das
die Linie durch die Angeln.

### Die Wirkungslinie und der Hebelarm

Zwei neue Begriffe tragen dieses ganze Kapitel. Nimm dir für sie Zeit.

Die **Wirkungslinie** einer Kraft ist die Gerade, auf der der Kraftpfeil liegt. Du bekommst sie, wenn du den
Pfeil nach vorn und nach hinten beliebig verlängerst. Sie geht durch den **Angriffspunkt**, also durch den
Punkt, an dem die Kraft am Körper ansetzt.

Der **Hebelarm** $r_\perp$ (sprich „r senkrecht“) ist der **senkrechte Abstand** der Wirkungslinie von der
Drehachse. Du findest ihn so: Fälle von der Drehachse das Lot auf die Wirkungslinie, also die kürzeste
Verbindung, die die Wirkungslinie im rechten Winkel trifft. Die Länge dieses Lots ist der Hebelarm.

```plot
x: [-0.8, 6.2]
y: [-3.6, 2.2]
gleich: true
strecken:
  - { von: [0, 0], nach: [4, 0], farbe: 3 }
  - { von: [4, 0], nach: [5.6, 0], gestrichelt: true }
  - { von: [1.172, -3.371], nach: [5.157, 1.379], gestrichelt: true, farbe: 1 }
  - { von: [0, 0], nach: [2.347, -1.970], gestrichelt: true, farbe: 2 }
kurven:
  - { x: "4 + 0.8*cos(t)", y: "0.8*sin(t)", t: [0, 0.873], farbe: 4 }
vektoren:
  - { von: [4, 0], nach: [5.157, 1.379], label: "F", farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "Drehachse" }
  - { x: 2, y: 0, label: "r = 0,40 m" }
  - { x: 1.17, y: -0.98, label: "r⊥ = 0,31 m", farbe: 2 }
  - { x: 5.0, y: 0.35, label: "α = 50°", farbe: 4 }
  - { x: 1.6, y: -2.9, label: "Wirkungslinie", farbe: 1 }
beschriftung: "Schraubenschlüssel (violett) mit Drehachse links. Die Kraft F (blau) greift am Ende im Abstand r = 0,40 m an, unter dem Winkel α = 50° gegen den Schlüssel. Die Wirkungslinie (orange, gestrichelt) verlängert den Kraftpfeil. Der Hebelarm r⊥ (grün, gestrichelt) ist das Lot von der Drehachse auf die Wirkungslinie, hier 0,40 m mal sin 50° = 0,31 m."
```

In der Skizze siehst du: Der Hebelarm ist kürzer als der Schlüssel. Das Lot von der Achse auf die
Wirkungslinie, der Schlüssel und ein Stück der Wirkungslinie bilden ein rechtwinkliges Dreieck. Der
Schlüssel mit der Länge $r$ ist die Hypotenuse. Der Hebelarm liegt dem Winkel $\alpha$ gegenüber. Also gilt
$r_\perp = r\cdot\sin\alpha$.

```aufgabe
id: p5-1-hebelarm-check
art: check
titel: Den Hebelarm bestimmen
niveau: 1
angabe: |
  Ein Hebel ist $0{,}80\,\text{m}$ lang. Am Ende greift eine Kraft unter $30^\circ$ gegen den Hebel an. Wie lang ist der Hebelarm, also der senkrechte Abstand der Wirkungslinie von der Drehachse?
teile:
  - typ: zahl
    loesung: "0.80*sin(inRad(30))"
    einheit: "m"
    anzeige: '0{,}40'
    fehler:
      - wert: "0.80"
        meldung: |
          Das ist der Abstand bis zum Angriffspunkt. Der Hebelarm ist der **senkrechte** Abstand der Wirkungslinie. Bei einer schrägen Kraft ist er kürzer.
      - wert: "0.80*cos(inRad(30))"
        meldung: |
          Der Hebelarm liegt dem Winkel zwischen Kraft und Hebel **gegenüber**. Dazu gehört der Sinus, nicht der Kosinus.
hinweise:
  - 'Es gilt $r_\perp = r\cdot\sin\alpha$.'
loesung: |
  Der Hebel ist die Hypotenuse, der Hebelarm liegt dem Winkel $\alpha = 30^\circ$ gegenüber. Also $r_\perp = r\sin\alpha$.
  ---
  $r_\perp = 0{,}80\,\text{m}\cdot\sin 30^\circ = 0{,}80\,\text{m}\cdot 0{,}5 = 0{,}40\,\text{m}$. Der Hebelarm ist nur halb so lang wie der Hebel.
```

:::definition[Drehmoment]
Eine Kraft mit dem Betrag $F$ greift an einem drehbaren Körper an. Ihr Hebelarm bezüglich der Drehachse
ist $r_\perp$. Dann ist das **Drehmoment** der Kraft
$$M = F\cdot r_\perp = F\cdot r\cdot\sin\alpha.$$
Dabei ist $r$ der Abstand zwischen Drehachse und Angriffspunkt und $\alpha$ der Winkel zwischen der Kraft
und der Verbindungslinie von der Achse zum Angriffspunkt. Die Einheit ist $[M] = \text{N}\cdot\text{m}$
(Newtonmeter).

**Beispiel:** Du drückst mit $100\,\text{N}$ senkrecht auf das Ende eines $0{,}30\,\text{m}$ langen
Schlüssels. Senkrecht heißt $\alpha = 90^\circ$ und $\sin 90^\circ = 1$. Der Hebelarm ist die ganze
Schlüssellänge, also $M = 100\,\text{N}\cdot 0{,}30\,\text{m} = 30\,\text{N}\,\text{m}$.

**Kein Beispiel:** Du ziehst mit $100\,\text{N}$ genau in Längsrichtung am Schlüssel ($\alpha = 0^\circ$).
Die Wirkungslinie läuft dann durch die Drehachse, der Hebelarm ist null. Das Drehmoment ist
$M = 0\,\text{N}\,\text{m}$, obwohl die Kraft groß ist. Der Schlüssel dreht sich nicht.
:::

Das Wort „Moment“ hat hier nichts mit Zeit zu tun. Es kommt vom lateinischen *momentum*, „Bewegungskraft“.

Es gibt eine zweite, gleichwertige Sicht. Zerlege die Kraft in einen Anteil entlang des Schlüssels und
einen Anteil senkrecht dazu. Der Anteil entlang des Schlüssels zieht nur an der Achse und dreht nichts.
Drehen kann nur der senkrechte Anteil $F_\perp = F\sin\alpha$, und er greift im vollen Abstand $r$ an.
Also ist $M = F_\perp\cdot r = F\sin\alpha\cdot r$. Das ist dieselbe Formel. Du darfst also entweder die
Kraft oder den Abstand „senkrecht machen“, aber nie beides und nie keines von beiden.

:::beispiel[Eine festsitzende Radmutter lösen]
Du willst eine Radmutter mit einem $0{,}40\,\text{m}$ langen Radkreuz lösen und drückst mit
$150\,\text{N}$ am Ende.

**Schritt 1, senkrecht drücken:** Steht die Kraft senkrecht auf dem Arm, ist der Hebelarm die volle
Länge. $M = F\cdot r = 150\,\text{N}\cdot 0{,}40\,\text{m} = 60\,\text{N}\,\text{m}$.

**Schritt 2, schräg drücken:** Jetzt drückst du unter $50^\circ$ gegen den Arm, wie in der Skizze. Der
Hebelarm ist $r_\perp = r\sin\alpha = 0{,}40\,\text{m}\cdot\sin 50^\circ = 0{,}40\,\text{m}\cdot 0{,}766 = 0{,}306\,\text{m}$.

**Schritt 3, Drehmoment:** $M = F\cdot r_\perp = 150\,\text{N}\cdot 0{,}306\,\text{m} = 46\,\text{N}\,\text{m}$.

**Antwort:** Schräg erreichst du nur $46\,\text{N}\,\text{m}$ statt $60\,\text{N}\,\text{m}$, also knapp ein
Viertel weniger. Für dasselbe Drehmoment müsstest du stärker drücken. Senkrecht drücken lohnt sich.
:::

:::achtung[Fehler: Abstand statt Hebelarm eingesetzt]
Eine Kraft von $200\,\text{N}$ greift am Ende eines $0{,}50\,\text{m}$ langen Hebels an, unter $30^\circ$
gegen den Hebel. Falsch gerechnet: $M = 200\,\text{N}\cdot 0{,}50\,\text{m} = 100\,\text{N}\,\text{m}$.

Hier wurde der Abstand zum Angriffspunkt eingesetzt, nicht der Hebelarm. Richtig ist
$M = 200\,\text{N}\cdot 0{,}50\,\text{m}\cdot\sin 30^\circ = 50\,\text{N}\,\text{m}$, also nur die Hälfte.
Frage dich bei jeder schrägen Kraft: Wie weit ist ihre **Wirkungslinie** von der Achse entfernt?
:::

:::achtung[Fehler: Winkel zur falschen Linie gemessen]
Eine Kraft von $120\,\text{N}$ greift am Ende eines $0{,}60\,\text{m}$ langen Hebels an. In der Angabe steht:
„Die Kraft ist um $20^\circ$ gegen die **Senkrechte** zum Hebel geneigt.“ Falsch gerechnet:
$M = 120\,\text{N}\cdot 0{,}60\,\text{m}\cdot\sin 20^\circ = 24{,}6\,\text{N}\,\text{m}$.

Die Formel $M = F r\sin\alpha$ verlangt den Winkel zwischen Kraft und **Hebel**. Der beträgt hier
$90^\circ - 20^\circ = 70^\circ$. Richtig ist $M = 120\,\text{N}\cdot 0{,}60\,\text{m}\cdot\sin 70^\circ = 67{,}7\,\text{N}\,\text{m}$.
Das ist dasselbe wie $F r\cos 20^\circ$. Zeichne dir den Winkel immer ein, bevor du rechnest.
:::

```reflexion
frage: Du drückst mit aller Kraft gegen die Kante einer Tür, und zwar genau in Richtung der Angeln. Die Tür bewegt sich nicht. Erkläre mit den Begriffen Wirkungslinie und Hebelarm, warum.
antwort: |
  Die Kraft zeigt genau auf die Drehachse. Ihre Wirkungslinie geht deshalb durch die Achse, und der senkrechte Abstand
  zwischen Wirkungslinie und Achse ist null. Also ist der Hebelarm null und das Drehmoment $M = F\cdot 0 = 0$, egal wie
  groß die Kraft ist. Die Kraft drückt die Tür nur gegen die Angeln, drehen kann sie sie nicht.
```

:::merke
**So bestimmst du ein Drehmoment**

1. Drehachse markieren und die Kraft als Pfeil an ihrem Angriffspunkt einzeichnen.
2. Die Wirkungslinie zeichnen, also den Pfeil in beide Richtungen verlängern.
3. Den Hebelarm $r_\perp$ als Lot von der Achse auf die Wirkungslinie bestimmen, oft über $r_\perp = r\sin\alpha$.
4. $M = F\cdot r_\perp$ ausrechnen und den Drehsinn mit Vorzeichen angeben.
:::

:::achtung[Newtonmeter ist nicht Joule]
Das Drehmoment hat die Einheit $\text{N}\cdot\text{m}$, die Arbeit die Einheit $\text{J} = \text{N}\cdot\text{m}$.
Beide bestehen aus denselben Basiseinheiten, sind aber **verschiedene Größen**. Ein Beispiel zeigt den
Unterschied. Bei der Arbeit $W = F\cdot s$ zeigen Kraft und Weg in **dieselbe** Richtung. Beim Drehmoment
$M = F\cdot r_\perp$ stehen Kraft und Hebelarm **senkrecht** aufeinander. Schreib deshalb beim Drehmoment
immer $\text{N}\,\text{m}$ und nie $\text{J}$.
:::

### Der Drehsinn und das resultierende Drehmoment

Ein Drehmoment kann einen Körper in zwei Richtungen drehen: **gegen den Uhrzeigersinn** oder **im
Uhrzeigersinn**. Man legt deshalb ein Vorzeichen fest. Üblich ist: gegen den Uhrzeigersinn positiv, im
Uhrzeigersinn negativ. Greifen mehrere Kräfte an, addiert man ihre Drehmomente **mit Vorzeichen**. Die Summe
heißt **resultierendes Drehmoment**. Nur sie entscheidet, ob und wie der Körper sich zu drehen beginnt.

Streng genommen ist das Drehmoment ein Vektor, der entlang der Drehachse zeigt. In der Mathematik schreibt
man ihn als Kreuzprodukt $\vec M = \vec r\times\vec F$ (siehe Mathematik, Abschnitt
[Das Kreuzprodukt: Normalvektor, Fläche und Volumen](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen)). Solange alle Kräfte in einer Ebene
liegen, genügt das Vorzeichen. So rechnen wir in diesem Kapitel.

:::beispiel[Zwei Kräfte an einem Rad]
Ein Rad mit Radius $0{,}30\,\text{m}$ ist in seiner Mitte drehbar gelagert. Am obersten Punkt zieht eine
Kraft von $60\,\text{N}$ waagrecht nach rechts, am untersten Punkt eine Kraft von $45\,\text{N}$ ebenfalls
nach rechts.

**Schritt 1, Hebelarme:** Beide Kräfte zeigen waagrecht, ihre Angriffspunkte liegen senkrecht über und
unter der Achse. Die Wirkungslinien haben deshalb den Abstand $0{,}30\,\text{m}$ von der Achse.

**Schritt 2, Drehsinn:** Die obere Kraft dreht das Rad im Uhrzeigersinn, also
$M_1 = -60\,\text{N}\cdot 0{,}30\,\text{m} = -18\,\text{N}\,\text{m}$. Die untere Kraft dreht gegen den
Uhrzeigersinn, also $M_2 = +45\,\text{N}\cdot 0{,}30\,\text{m} = +13{,}5\,\text{N}\,\text{m}$.

**Schritt 3, Summe:** $M = -18\,\text{N}\,\text{m} + 13{,}5\,\text{N}\,\text{m} = -4{,}5\,\text{N}\,\text{m}$.

**Antwort:** Das Rad beginnt sich im Uhrzeigersinn zu drehen, aber viel schwächer, als die einzelnen
Kräfte vermuten lassen. Die beiden Drehwirkungen heben sich größtenteils auf.
:::

```plot
x: [-4.5, 7.5]
y: [-4.2, 4.2]
gleich: true
kurven:
  - { x: "3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 3 }
strecken:
  - { von: [0, 0], nach: [0, 3], gestrichelt: true }
  - { von: [0, 0], nach: [0, -3], gestrichelt: true }
vektoren:
  - { von: [0, 3], nach: [6, 3], label: "60 N", farbe: 0 }
  - { von: [0, -3], nach: [4.5, -3], label: "45 N", farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "Achse" }
beschriftung: "Rad mit Radius 0,30 m (violett), Achse in der Mitte. Oben zieht 60 N nach rechts (blau), unten 45 N nach rechts (orange). Beide Wirkungslinien sind waagrecht und 0,30 m von der Achse entfernt. Die obere Kraft dreht im Uhrzeigersinn, die untere dagegen."
```

### Das Kräftepaar

Ein Sonderfall ist das **Kräftepaar**. Das sind zwei gleich große, entgegengesetzt gerichtete Kräfte,
deren Wirkungslinien parallel im Abstand $d$ verlaufen. Ihre Summe ist null, der Körper wird also nicht
verschoben. Er dreht sich aber. Das Drehmoment eines Kräftepaars ist $M = F\cdot d$, ganz gleich, wo die
Drehachse liegt.

**Beispiel:** Du hältst ein Lenkrad mit $38\,\text{cm}$ Durchmesser mit beiden Händen ganz links und ganz rechts,
also an gegenüberliegenden Punkten. Jede Hand drückt mit $20\,\text{N}$, die eine nach oben, die andere nach unten. Das Drehmoment ist
$M = 20\,\text{N}\cdot 0{,}38\,\text{m} = 7{,}6\,\text{N}\,\text{m}$. **Kein Kräftepaar** sind zwei gleich
große Kräfte in **dieselbe** Richtung. Sie verschieben den Körper, statt nur zu drehen.

:::intuition
Warum sitzt die Türklinke so weit außen? Dasselbe Drehmoment braucht bei großem Hebelarm nur eine kleine
Kraft. Dasselbe Prinzip steckt im langen Radkreuz, im Lenkrad und im Fahrradpedal. Es steckt auch im
dicken Griff eines Schraubendrehers. Umgekehrt klemmt man sich die Finger nahe den Angeln so leicht ein. Dort haben die Finger
einen kleinen Hebelarm. Eine kleine Kraft weit außen erzeugt an ihnen deshalb eine riesige Kraft.
:::


### Aufgaben zum Drehmoment

```aufgabe
id: p5-drehmoment-schluessel
titel: Drehmoment am Schraubenschlüssel
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Du drückst mit $80\,\text{N}$ senkrecht auf das Ende eines $25\,\text{cm}$ langen Schraubenschlüssels. Wie groß ist das Drehmoment in $\text{N}\,\text{m}$?
teile:
  - typ: zahl
    loesung: "80*0.25"
    einheit: "N·m"
    anzeige: '20'
    fehler:
      - wert: "80*25"
        meldung: |
          Du hast die Länge in Zentimetern eingesetzt. Für Newtonmeter muss der Hebelarm in **Metern** stehen: $25\,\text{cm} = 0{,}25\,\text{m}$.
      - wert: "80/0.25"
        meldung: |
          Du hast geteilt. Das Drehmoment ist Kraft **mal** Hebelarm. Ein längerer Schlüssel gibt mehr Drehwirkung, nicht weniger.
hinweise:
  - 'Die Kraft steht senkrecht auf dem Schlüssel. Dann ist der Hebelarm die ganze Schlüssellänge in Metern.'
loesung: |
  **Ansatz:** Die Kraft steht senkrecht auf dem Schlüssel. Der Hebelarm ist deshalb die volle Länge $r_\perp = 0{,}25\,\text{m}$.
  ---
  **Rechnung:** $M = F\cdot r_\perp = 80\,\text{N}\cdot 0{,}25\,\text{m} = 20\,\text{N}\,\text{m}$.
```

```aufgabe
id: p5-tuer-auswahl
titel: Wo drückt man am besten?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Tür soll mit möglichst kleiner Kraft geöffnet werden. Welche Kraft hat bei gleichem Betrag die **größte** Drehwirkung?
teile:
  - typ: auswahl
    optionen:
      - "an der Klinke, senkrecht zum Türblatt"
      - "an der Klinke, entlang des Türblatts in Richtung der Angeln"
      - "in der Mitte der Tür, senkrecht zum Türblatt"
      - "direkt neben den Angeln, senkrecht zum Türblatt, weil man dort am festesten drücken kann"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Diese Kraft zeigt genau auf die Angeln. Ihre Wirkungslinie geht durch die Drehachse, der Hebelarm ist null. Sie dreht die Tür überhaupt nicht.
      - wert: 2
        meldung: |
          Die Richtung stimmt, aber der Hebelarm ist nur halb so groß wie an der Klinke. Also ist auch das Drehmoment nur halb so groß.
      - wert: 3
        meldung: |
          Neben den Angeln ist der Hebelarm fast null. Wie fest man dort drücken **kann**, ändert nichts daran, dass dieselbe Kraft dort fast nichts dreht.
hinweise:
  - 'Das Drehmoment ist $M = F\cdot r_\perp$. Bei gleichem $F$ zählt nur der Hebelarm.'
loesung: |
  **Ansatz:** Bei gleicher Kraft ist das Drehmoment $M = F\cdot r_\perp$ dort am größten, wo der Hebelarm am größten ist.
  ---
  **Vergleich:** An der Klinke ist der Abstand von den Angeln am größten. Steht die Kraft senkrecht auf dem Türblatt, ist der Hebelarm gleich diesem ganzen Abstand. Entlang des Türblatts ist der Hebelarm null, in der Mitte halb so groß, neben den Angeln fast null.
```

```aufgabe
id: p5-drehmoment-schraeg
titel: Schräg angreifende Kraft
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Du drückst mit $80\,\text{N}$ am Ende eines $25\,\text{cm}$ langen Schraubenschlüssels, aber unter einem Winkel von $60^\circ$ gegen den Schlüssel. Berechne den Hebelarm in Metern und das Drehmoment in $\text{N}\,\text{m}$. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Hebelarm
    loesung: "0.25*sin(inRad(60))"
    einheit: "m"
    anzeige: '0{,}217'
    fehler:
      - wert: "0.25*cos(inRad(60))"
        meldung: |
          Du hast den Kosinus genommen. Der Hebelarm ist das Lot von der Achse auf die Wirkungslinie. Im rechtwinkligen Dreieck liegt er dem Winkel zwischen Kraft und Schlüssel **gegenüber**, also gehört der Sinus dazu.
      - wert: "0.25"
        meldung: |
          Das ist die Länge des Schlüssels. Der Hebelarm ist aber der **senkrechte** Abstand der Wirkungslinie von der Achse. Bei schräger Kraft ist er kürzer.
  - typ: zahl
    label: Drehmoment
    loesung: "80*0.25*sin(inRad(60))"
    einheit: "N·m"
    anzeige: '17{,}3'
    fehler:
      - wert: "80*0.25"
        meldung: |
          So groß wäre das Drehmoment nur bei senkrechter Kraft. Bei $60^\circ$ dreht nur der senkrechte Anteil der Kraft.
      - wert: "80*0.25*cos(inRad(60))"
        meldung: |
          Sinus und Kosinus sind vertauscht. Prüfe den Extremfall: Zieht man entlang des Schlüssels ($\alpha = 0^\circ$), dreht sich nichts. Das passt zu $\sin 0^\circ = 0$.
hinweise:
  - 'Zeichne den Schlüssel, die Kraft und ihre Wirkungslinie. Der Hebelarm ist das Lot von der Achse auf die Wirkungslinie.'
  - 'Im rechtwinkligen Dreieck aus Schlüssel, Lot und Wirkungslinie ist der Schlüssel die Hypotenuse. Es gilt $r_\perp = r\sin\alpha$.'
gefuehrt:
  - text: Rechne die Schlüssellänge in Meter um.
    teil: { typ: zahl, loesung: "0.25", einheit: "m" }
    erklaerung: $25\,\text{cm} = 0{,}25\,\text{m}$. Nur mit Metern kommt am Ende $\text{N}\,\text{m}$ heraus.
  - text: Berechne den Hebelarm $r_\perp = r\sin\alpha$ in Metern.
    teil: { typ: zahl, loesung: "0.25*sin(inRad(60))", einheit: "m" }
    erklaerung: $r_\perp = 0{,}25\,\text{m}\cdot\sin 60^\circ = 0{,}25\,\text{m}\cdot 0{,}866 = 0{,}217\,\text{m}$.
  - text: Berechne das Drehmoment $M = F\cdot r_\perp$ in $\text{N}\,\text{m}$.
    teil: { typ: zahl, loesung: "80*0.25*sin(inRad(60))", einheit: "N·m" }
    erklaerung: $M = 80\,\text{N}\cdot 0{,}217\,\text{m} = 17{,}3\,\text{N}\,\text{m}$.
  - text: Vergleiche mit dem senkrechten Drücken. Um wie viel Prozent ist das Drehmoment kleiner?
    erklaerung: Senkrecht wären es $80\,\text{N}\cdot 0{,}25\,\text{m} = 20\,\text{N}\,\text{m}$. Schräg erreichst du $86{,}6\,\%$ davon, also etwa $13\,\%$ weniger.
loesung: |
  **Ansatz:** Die Kraft greift schräg an. Wir brauchen den Hebelarm, also den senkrechten Abstand ihrer Wirkungslinie von der Achse: $r_\perp = r\sin\alpha$.
  ---
  **Hebelarm:** $r_\perp = 0{,}25\,\text{m}\cdot\sin 60^\circ = 0{,}25\,\text{m}\cdot 0{,}866 = 0{,}217\,\text{m}$.
  ---
  **Drehmoment:** $M = F\cdot r_\perp = 80\,\text{N}\cdot 0{,}217\,\text{m} = 17{,}3\,\text{N}\,\text{m}$.
  ---
  **Kontrolle:** Senkrecht wären es $20\,\text{N}\,\text{m}$. Schräg ist das Drehmoment kleiner. Das passt, denn der Sinus ist nie größer als $1$.
```

```aufgabe
id: p5-1-vorzeichen
titel: Drei Kräfte an einer Stange
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine waagrechte Stange ist in ihrer Mitte drehbar gelagert. Es greifen drei senkrechte Kräfte an, wie in der Skizze:

  - $0{,}80\,\text{m}$ links von der Achse drückt eine Kraft von $50\,\text{N}$ nach unten.
  - $0{,}50\,\text{m}$ rechts von der Achse drückt eine Kraft von $60\,\text{N}$ nach unten.
  - $1{,}0\,\text{m}$ rechts von der Achse zieht eine Kraft von $20\,\text{N}$ nach oben.

  Berechne das resultierende Drehmoment. Zähle gegen den Uhrzeigersinn positiv und gib das Ergebnis mit Vorzeichen in $\text{N}\,\text{m}$ an.
plot:
  x: [-1.3, 1.4]
  y: [-1, 0.6]
  strecken:
    - { von: [-1.1, 0], nach: [1.1, 0], farbe: 3 }
  vektoren:
    - { von: [-0.8, 0], nach: [-0.8, -0.5], label: "50 N", farbe: 0 }
    - { von: [0.5, 0], nach: [0.5, -0.6], label: "60 N", farbe: 1 }
    - { von: [1.0, 0], nach: [1.0, 0.2], label: "20 N", farbe: 2 }
  punkte:
    - { x: 0, y: 0, label: "Achse" }
teile:
  - typ: zahl
    loesung: "50*0.8 - 60*0.5 + 20*1.0"
    einheit: "N·m"
    anzeige: '30'
    fehler:
      - wert: "50*0.8 + 60*0.5 + 20*1.0"
        meldung: |
          Du hast alle Drehmomente als positiv gezählt. Die $60\,\text{N}$ rechts unten drehen aber im Uhrzeigersinn, entgegen den anderen beiden. Ihr Drehmoment ist negativ.
      - wert: "50*0.8 - 60*0.5 - 20*1.0"
        meldung: |
          Die $20\,\text{N}$ ziehen rechts von der Achse **nach oben**. Das hebt das rechte Ende, die Stange dreht dabei gegen den Uhrzeigersinn. Dieses Drehmoment ist also positiv.
hinweise:
  - 'Frage bei jeder Kraft einzeln: Wenn nur sie wirken würde, in welche Richtung würde sich die Stange drehen?'
  - 'Die Kräfte stehen senkrecht auf der Stange. Der Hebelarm ist deshalb jeweils der Abstand von der Achse. Summiere $M_i = \pm F_i\cdot r_i$.'
loesung: |
  **Ansatz:** Alle Kräfte stehen senkrecht auf der Stange, also ist der Hebelarm jeweils der Abstand zur Achse. Den Drehsinn bestimmen wir für jede Kraft einzeln.
  ---
  **Links unten, 50 N:** Das linke Ende sinkt, die Stange dreht gegen den Uhrzeigersinn: $M_1 = +50\,\text{N}\cdot 0{,}80\,\text{m} = +40\,\text{N}\,\text{m}$.
  ---
  **Rechts unten, 60 N:** Das rechte Ende sinkt, Drehung im Uhrzeigersinn: $M_2 = -60\,\text{N}\cdot 0{,}50\,\text{m} = -30\,\text{N}\,\text{m}$. **Rechts oben, 20 N:** Das rechte Ende hebt sich, Drehung gegen den Uhrzeigersinn: $M_3 = +20\,\text{N}\cdot 1{,}0\,\text{m} = +20\,\text{N}\,\text{m}$.
  ---
  **Summe:** $M = 40\,\text{N}\,\text{m} - 30\,\text{N}\,\text{m} + 20\,\text{N}\,\text{m} = +30\,\text{N}\,\text{m}$. Die Stange beginnt sich gegen den Uhrzeigersinn zu drehen.
```

```aufgabe
id: p5-1-umkehr
titel: Welche Kraft braucht die Radmutter?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine Radmutter muss laut Werkstatthandbuch mit $110\,\text{N}\,\text{m}$ angezogen werden. Dein Schlüssel ist $45\,\text{cm}$ lang.

  a) Welche Kraft brauchst du mindestens, wenn du senkrecht am Ende drückst? Runde auf ganze Newton.

  b) Welche Kraft brauchst du, wenn du am Ende unter $70^\circ$ gegen den Schlüssel drückst? Runde auf ganze Newton.
teile:
  - typ: zahl
    label: a) senkrecht
    loesung: "110/0.45"
    einheit: "N"
    anzeige: '244'
    fehler:
      - wert: "110*0.45"
        meldung: |
          Du hast multipliziert. Aus $M = F\cdot r_\perp$ folgt durch Teilen durch $r_\perp$: $F = M/r_\perp$. Prüfe die Einheit: $\text{N}\,\text{m}\cdot\text{m}$ ist keine Kraft.
      - wert: "110/45"
        meldung: |
          Die Länge muss in Metern stehen, $45\,\text{cm} = 0{,}45\,\text{m}$. Sonst kommt keine Kraft in Newton heraus.
  - typ: zahl
    label: b) unter 70 Grad
    loesung: "110/(0.45*sin(inRad(70)))"
    einheit: "N"
    anzeige: '260'
    fehler:
      - wert: "110/0.45*sin(inRad(70))"
        meldung: |
          Bei schräger Kraft wird der Hebelarm **kleiner**, also muss die Kraft **größer** werden. Du musst durch $\sin 70^\circ$ teilen, nicht damit multiplizieren.
      - wert: "110/(0.45*cos(inRad(70)))"
        meldung: |
          Der Hebelarm ist $r\sin\alpha$, wobei $\alpha$ der Winkel zwischen Kraft und Schlüssel ist. Mit dem Kosinus wäre der Hebelarm bei fast senkrechter Kraft fast null.
hinweise:
  - 'Stelle $M = F\cdot r_\perp$ nach $F$ um.'
  - 'Für b) ist der Hebelarm $r_\perp = r\sin 70^\circ$. Er ist kleiner als $r$, also wird die nötige Kraft größer.'
loesung: |
  **Ansatz:** Aus $M = F\cdot r_\perp$ folgt durch Teilen durch $r_\perp$ die gesuchte Kraft $F = \dfrac{M}{r_\perp}$.
  ---
  **a)** Senkrecht ist $r_\perp = 0{,}45\,\text{m}$. Also $F = \dfrac{110\,\text{N}\,\text{m}}{0{,}45\,\text{m}} = 244\,\text{N}$.
  ---
  **b)** Unter $70^\circ$ ist $r_\perp = 0{,}45\,\text{m}\cdot\sin 70^\circ = 0{,}45\,\text{m}\cdot 0{,}940 = 0{,}423\,\text{m}$. Also $F = \dfrac{110\,\text{N}\,\text{m}}{0{,}423\,\text{m}} = 260\,\text{N}$.
  ---
  **Kontrolle:** Die schräge Kraft ist größer als die senkrechte. Das muss so sein, denn der Hebelarm ist kleiner geworden.
```

```aufgabe
id: p5-1-fehler-finden
titel: Fehler in einer Drehmoment-Rechnung finden
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Seil zieht am Ende einer $0{,}90\,\text{m}$ langen, drehbar gelagerten Stange mit $40\,\text{N}$. Das Seil schließt mit der Stange einen Winkel von $35^\circ$ ein. Ein Mitschüler rechnet:

  „$M = F\cdot r\cdot\cos\alpha = 40\,\text{N}\cdot 0{,}90\,\text{m}\cdot\cos 35^\circ = 29{,}5\,\text{N}\,\text{m}$.“

  Finde den Fehler und berechne das richtige Drehmoment in $\text{N}\,\text{m}$. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "40*0.9*sin(inRad(35))"
    einheit: "N·m"
    anzeige: '20{,}6'
    fehler:
      - wert: "40*0.9*cos(inRad(35))"
        meldung: |
          Das ist genau das Ergebnis des Mitschülers. Prüfe seinen Ansatz mit einem Extremfall: Bei $\alpha = 0^\circ$ zieht das Seil entlang der Stange und dreht nichts. Welche Winkelfunktion ist bei $0^\circ$ null?
      - wert: "40*0.9"
        meldung: |
          So groß wäre das Drehmoment nur, wenn das Seil senkrecht zur Stange zöge. Bei $35^\circ$ ist der Hebelarm kürzer.
hinweise:
  - 'Prüfe die Formel mit dem Extremfall $\alpha = 0^\circ$: Seil entlang der Stange.'
  - 'Der Hebelarm liegt dem Winkel zwischen Seil und Stange gegenüber. Also gilt $r_\perp = r\sin\alpha$.'
loesung: |
  **Ansatz:** Wir prüfen die Formel des Mitschülers mit einem Extremfall. Zieht das Seil entlang der Stange ($\alpha = 0^\circ$), läuft die Wirkungslinie durch die Achse, und es gibt kein Drehmoment.
  ---
  **Fehler:** Mit dem Kosinus käme bei $0^\circ$ das größte Drehmoment heraus, denn $\cos 0^\circ = 1$. Das ist falsch. Der Winkel $\alpha$ liegt zwischen Kraft und Stange, also gehört der **Sinus** in die Formel.
  ---
  **Richtig:** $M = 40\,\text{N}\cdot 0{,}90\,\text{m}\cdot\sin 35^\circ = 36\,\text{N}\,\text{m}\cdot 0{,}574 = 20{,}6\,\text{N}\,\text{m}$.
```

```aufgabe
id: p5-1-diagramm
titel: Drehmoment aus einem Diagramm ablesen
niveau: 3
lernziel: 0
kompetenz: verstehen
angabe: |
  An einem $0{,}30\,\text{m}$ langen Hebel greift am Ende immer dieselbe Kraft $F$ an. Nur der Winkel $\alpha$ zwischen Kraft und Hebel wird verändert. Das Diagramm zeigt das gemessene Drehmoment $M$ in Abhängigkeit von $\alpha$.

  a) Lies das größte Drehmoment ab und berechne daraus die Kraft $F$ in Newton.

  b) Bei welchem Winkel zwischen $0^\circ$ und $90^\circ$ ist das Drehmoment halb so groß wie das größte? Gib den Winkel in Grad an.
plot:
  x: [0, 180]
  y: [0, 40]
  achsen: { x: "α in Grad", y: "M in N·m" }
  graphen:
    - { f: "36*sin(x*pi/180)", farbe: 0 }
  punkte:
    - { x: 90, y: 36, label: "Maximum bei 90°, 36 N·m" }
teile:
  - typ: zahl
    label: a) Kraft F
    loesung: "36/0.30"
    einheit: "N"
    anzeige: '120'
    fehler:
      - wert: "36*0.30"
        meldung: |
          Beim Maximum ist $M = F\cdot r$, also $F = M/r$. Du musst durch den Hebel teilen, nicht mit ihm multiplizieren.
      - wert: "36"
        meldung: |
          $36$ ist das größte **Drehmoment** in $\text{N}\,\text{m}$, nicht die Kraft. Teile noch durch die Hebellänge.
  - typ: zahl
    label: b) Winkel
    loesung: "30"
    einheit: "°"
    fehler:
      - wert: "45"
        meldung: |
          Der Sinus wächst nicht gleichmäßig mit dem Winkel. Die Hälfte des Maximums erreicht er schon bei $30^\circ$, denn $\sin 30^\circ = 0{,}5$. Bei $45^\circ$ ist $\sin 45^\circ = 0{,}707$.
      - wert: "60"
        meldung: |
          Bei $60^\circ$ ist $\sin 60^\circ = 0{,}866$, das Drehmoment also schon $31\,\text{N}\,\text{m}$. Gesucht ist der Winkel mit $\sin\alpha = 0{,}5$.
hinweise:
  - 'Das größte Drehmoment tritt auf, wenn die Kraft senkrecht auf dem Hebel steht. Dann ist $M_{\max} = F\cdot r$.'
  - 'Für b) gilt $M = M_{\max}\sin\alpha$. Setze $M = 18\,\text{N}\,\text{m}$ ein und löse nach $\sin\alpha$ auf.'
loesung: |
  **Ansatz:** Die Kurve ist eine Sinuskurve, denn $M = F\,r\sin\alpha$. Ihr Maximum liegt bei $\alpha = 90^\circ$, wo die Kraft senkrecht auf dem Hebel steht und $\sin 90^\circ = 1$ ist.
  ---
  **a)** Abgelesen: $M_{\max} = 36\,\text{N}\,\text{m}$. Aus $M_{\max} = F\cdot r$ folgt $F = \dfrac{36\,\text{N}\,\text{m}}{0{,}30\,\text{m}} = 120\,\text{N}$.
  ---
  **b)** Halb so groß heißt $M = 18\,\text{N}\,\text{m}$. Aus $36\,\text{N}\,\text{m}\cdot\sin\alpha = 18\,\text{N}\,\text{m}$ folgt $\sin\alpha = 0{,}5$, also $\alpha = 30^\circ$. Im Diagramm erreicht die Kurve bei $30^\circ$ die Höhe $18$.
  ---
  **Deutung:** Bei $\alpha = 0^\circ$ und $180^\circ$ ist das Drehmoment null. Dort zieht oder drückt die Kraft genau entlang des Hebels, ihre Wirkungslinie geht durch die Achse.
```

## Gleichgewicht des starren Körpers

```aufgabe
id: p5-2-check
art: check
titel: "Vorwissen: Kräftegleichgewicht"
niveau: 1
angabe: |
  Auf eine ruhende Kiste wirken waagrecht zwei Kräfte: $40\,\text{N}$ nach rechts und $25\,\text{N}$ nach links. Welche dritte waagrechte Kraft braucht es, damit die Kiste in Ruhe bleibt? Gib ihren Betrag in Newton an.
teile:
  - typ: zahl
    loesung: "40-25"
    einheit: "N"
    anzeige: '15'
    fehler:
      - wert: "40+25"
        meldung: |
          Die beiden Kräfte zeigen in **entgegengesetzte** Richtungen. Sie heben sich teilweise auf: Nach rechts bleibt ein Überschuss von $40\,\text{N} - 25\,\text{N}$.
hinweise:
  - Die Kiste ruht. Die Summe aller Kräfte muss null sein. Zähle nach rechts positiv.
loesung: |
  In Ruhe ist die resultierende Kraft null. Mit „nach rechts positiv“ gilt $40\,\text{N} - 25\,\text{N} + F_3 = 0$.
  ---
  Also $F_3 = -15\,\text{N}$: eine Kraft von $15\,\text{N}$ nach links. Wiederholen kannst du das im Abschnitt [Das Freikörperbild: alle Kräfte auf einen Körper](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
```

Für einen **Massenpunkt** kennst du die Bedingung für Ruhe aus der Dynamik: Die Summe aller Kräfte muss
null sein. Für einen ausgedehnten Körper reicht das nicht. Leg ein Lineal auf einen glatten Tisch und
drücke an einem Ende nach vorn und am anderen Ende gleich stark nach hinten. Die beiden Kräfte heben sich
auf, ihre Summe ist null. Trotzdem dreht sich das Lineal. Das ist ein **Kräftepaar** aus dem Abschnitt
[Das Drehmoment: Kraft mal Hebelarm](/lernen/physik1/drehbewegung-einfache-maschinen/das-drehmoment-kraft-mal-hebelarm).
Ein starrer Körper ist erst dann in Ruhe, wenn er sich weder **verschiebt** noch **dreht**.

:::satz[Gleichgewichtsbedingungen des starren Körpers]
Ein starrer Körper, der anfangs ruht, bleibt in Ruhe, wenn beide Bedingungen erfüllt sind:

1. **Kräftegleichgewicht:** Die Summe aller äußeren Kräfte ist null, $\sum \vec F_i = \vec 0$. Dann wird
   der Körper nicht verschoben.
2. **Drehmomentgleichgewicht:** Die Summe aller Drehmomente bezüglich eines beliebigen Punktes ist null,
   $\sum M_i = 0$. Dann beginnt der Körper nicht, sich zu drehen.

Dabei bedeutet das Zeichen $\sum$ (großes griechisches Sigma) „Summe über alle“.

**Beispiel:** Ein Brett liegt ruhig auf zwei Böcken. Beide Bedingungen sind erfüllt.

**Kein Beispiel:** Das Lineal mit dem Kräftepaar. Die erste Bedingung ist erfüllt, die zweite nicht. Es
dreht sich.
:::

```aufgabe
id: p5-2-lineal-konzept
titel: Genügt das Kräftegleichgewicht?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Lineal liegt auf einem sehr glatten Tisch. An seinen beiden Enden greifen gleichzeitig zwei gleich große Kräfte an, quer zum Lineal: am linken Ende nach vorn, am rechten Ende nach hinten. Was passiert?
teile:
  - typ: auswahl
    optionen:
      - "Das Lineal bleibt in Ruhe, weil die Summe der Kräfte null ist."
      - "Das Lineal beginnt sich zu drehen, sein Schwerpunkt bleibt aber an seinem Platz."
      - "Das Lineal wird als Ganzes nach vorn geschoben, weil die linke Kraft zuerst wirkt."
      - "Das Lineal dreht sich und wird zusätzlich als Ganzes verschoben."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die Summe der Kräfte ist null, das verhindert nur das **Verschieben**. Die beiden Kräfte haben aber verschiedene Wirkungslinien. Sie bilden ein Kräftepaar, und dessen Drehmoment ist nicht null.
      - wert: 2
        meldung: |
          Beide Kräfte wirken gleichzeitig und sind gleich groß. Keine überwiegt, also wird das Lineal als Ganzes nicht verschoben.
      - wert: 3
        meldung: |
          Verschieben würde das Lineal nur eine resultierende **Kraft**. Die ist hier null. Es bleibt nur die Drehung.
hinweise:
  - Prüfe beide Gleichgewichtsbedingungen einzeln, die für die Kräfte und die für die Drehmomente.
loesung: |
  **Kräfte:** Die beiden Kräfte sind gleich groß und entgegengesetzt, ihre Summe ist null. Das Lineal wird nicht als Ganzes verschoben, sein Schwerpunkt bleibt in Ruhe.
  ---
  **Drehmomente:** Die Wirkungslinien liegen eine Lineal-Länge auseinander. Die Kräfte bilden ein Kräftepaar mit $M = F\cdot d \neq 0$. Das Lineal beginnt sich zu drehen. Die erste Gleichgewichtsbedingung allein reicht also nicht.
```

Die zweite Bedingung kennst du in ihrer einfachsten Form vom Spielplatz. Auf einer **Wippe** herrscht
Gleichgewicht, wenn das Drehmoment links gleich dem Drehmoment rechts ist. Ein Kind mit $25\,\text{kg}$ im
Abstand $1{,}6\,\text{m}$ vom Drehpunkt hält einem Kind mit $40\,\text{kg}$ im Abstand $1{,}0\,\text{m}$
das Gleichgewicht. Denn $25\,\text{kg}\cdot g\cdot 1{,}6\,\text{m} = 40\,\text{kg}\cdot g\cdot 1{,}0\,\text{m}$,
beide Seiten ergeben $392\,\text{N}\,\text{m}$. Diese Regel heißt **Hebelgesetz**:

$$F_1\cdot r_1 = F_2\cdot r_2.$$

Dabei sind $F_1$ und $F_2$ die beiden Kräfte und $r_1$ und $r_2$ ihre Hebelarme. In Worten: Kraft mal
Hebelarm links ist gleich Kraft mal Hebelarm rechts.

### Der Bezugspunkt ist frei wählbar

Bei einer Wippe dreht sich alles um den Drehpunkt. Bei einem Brett auf zwei Böcken gibt es aber keine
feste Achse. Um welchen Punkt rechnet man dann die Drehmomente? Die Antwort ist eine große Erleichterung:
**um jeden beliebigen Punkt.** Ist ein Körper im Gleichgewicht, ist die Summe der Drehmomente um **jeden**
Punkt null. Dieser Punkt heißt **Bezugspunkt**.

Warum ist das so? Wir zeigen es für den häufigsten Fall, dass alle Kräfte senkrecht wirken, wie beim
Brett auf zwei Böcken. Verschiebe den Bezugspunkt in Gedanken um ein Stück $d$ nach rechts. Dann ändert sich
der Hebelarm jeder Kraft um $d$. Ihr Drehmoment ändert sich deshalb um $F_i\cdot d$. Alle Änderungen
zusammen ergeben $d\cdot\sum F_i$. Wegen des Kräftegleichgewichts ist $\sum F_i = 0$. Also ändert sich die
Summe der Drehmomente gar nicht. War sie um einen Punkt null, ist sie um jeden Punkt null.

Daraus folgt der wichtigste Rechentrick der Statik. **Statik** ist die Lehre von ruhenden Körpern und den
Kräften auf sie. Der Trick: Lege den Bezugspunkt in den Angriffspunkt einer **unbekannten** Kraft. Deren
Hebelarm ist dann null, sie fällt aus der Drehmomentgleichung heraus. Es bleibt eine Gleichung mit einer
einzigen Unbekannten.

:::beispiel[Balken auf zwei Stützen]
Ein $4{,}0\,\text{m}$ langer, gleichmäßig dicker Balken mit der Gewichtskraft $200\,\text{N}$ liegt an
seinen Enden auf den Stützen $A$ (links) und $B$ (rechts). Eine Last von $600\,\text{N}$ steht
$1{,}0\,\text{m}$ von $A$ entfernt. Gesucht sind die Stützkräfte $F_A$ und $F_B$.

**Schritt 1, Freikörperbild:** Nach oben wirken $F_A$ und $F_B$. Nach unten wirken die Last und das
**Eigengewicht** des Balkens. Das Eigengewicht greift im Schwerpunkt an, beim gleichmäßigen Balken also in
der Mitte, $2{,}0\,\text{m}$ von $A$.

**Schritt 2, Bezugspunkt A:** Dort greift die unbekannte Kraft $F_A$ an, sie hat keinen Hebelarm. $F_B$
dreht gegen den Uhrzeigersinn, Last und Eigengewicht drehen im Uhrzeigersinn:
$$F_B\cdot 4{,}0\,\text{m} = 200\,\text{N}\cdot 2{,}0\,\text{m} + 600\,\text{N}\cdot 1{,}0\,\text{m} = 1000\,\text{N}\,\text{m}.$$
Wir teilen durch $4{,}0\,\text{m}$ und erhalten $F_B = 250\,\text{N}$.

**Schritt 3, Kräftegleichgewicht:** $F_A + F_B = 200\,\text{N} + 600\,\text{N}$, also
$F_A = 800\,\text{N} - 250\,\text{N} = 550\,\text{N}$.

**Schritt 4, Probe mit Bezugspunkt B:** $F_A\cdot 4{,}0\,\text{m} = 200\,\text{N}\cdot 2{,}0\,\text{m} + 600\,\text{N}\cdot 3{,}0\,\text{m} = 2200\,\text{N}\,\text{m}$.
Das liefert $F_A = 550\,\text{N}$, dasselbe Ergebnis.

**Antwort:** $F_A = 550\,\text{N}$, $F_B = 250\,\text{N}$. Die Stütze näher an der Last trägt mehr.
:::

```plot
x: [-0.5, 4.6]
y: [-1.3, 1.1]
achsen: { x: "x in m", y: "" }
strecken:
  - { von: [0, 0], nach: [4, 0], farbe: 3 }
vektoren:
  - { von: [0, 0], nach: [0, 0.55], label: "F_A = 550 N", farbe: 2 }
  - { von: [4, 0], nach: [4, 0.25], label: "F_B = 250 N", farbe: 2 }
  - { von: [2, 0], nach: [2, -0.2], label: "Eigengewicht 200 N", farbe: 1 }
  - { von: [1, 0], nach: [1, -0.6], label: "Last 600 N", farbe: 0 }
beschriftung: "Freikörperbild des Balkens auf zwei Stützen. Nach oben wirken die Stützkräfte F_A und F_B (grün), nach unten die Last (blau) bei 1,0 m und das Eigengewicht (orange) in der Mitte bei 2,0 m. Die Pfeillängen sind proportional zu den Kräften: 0,1 Einheiten pro 100 N."
```

:::achtung[Fehler: Eigengewicht vergessen]
Beim Balken auf zwei Stützen rechnet jemand nur mit der Last:
$F_B\cdot 4{,}0\,\text{m} = 600\,\text{N}\cdot 1{,}0\,\text{m}$, also $F_B = 150\,\text{N}$.

Das ist falsch, denn der Balken selbst wiegt $200\,\text{N}$. Sein Gewicht greift in der Mitte an und
trägt $200\,\text{N}\cdot 2{,}0\,\text{m} = 400\,\text{N}\,\text{m}$ zum Drehmoment bei. Richtig ist
$F_B = 250\,\text{N}$. Frage dich bei jedem Balken, Brett, Hebel oder Arm: Ist sein Eigengewicht gegeben?
Dann gehört es in die Rechnung, angreifend im Schwerpunkt.
:::

:::beispiel[Ein Wirtshausschild am Ausleger]
Ein Schild mit $12\,\text{kg}$ hängt am Ende eines waagrechten, $1{,}2\,\text{m}$ langen Auslegers. Den
Ausleger betrachten wir als masselos. Er ist an der Hauswand drehbar gelagert, mit einem **Gelenk**. Eine
Kette führt vom Ausleger-Ende schräg nach oben zur Wand. Sie schließt mit dem Ausleger $30^\circ$ ein.
Wie stark muss die Kette halten?

**Schritt 1, Bezugspunkt im Gelenk:** Die Kraft des Gelenks ist unbekannt. Im Gelenk hat sie keinen
Hebelarm und fällt heraus.

**Schritt 2, Drehmoment des Schilds:** Die Gewichtskraft ist $12\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 117{,}7\,\text{N}$.
Sie steht senkrecht auf dem Ausleger, ihr Hebelarm ist $1{,}2\,\text{m}$. Also
$M = 117{,}7\,\text{N}\cdot 1{,}2\,\text{m} = 141{,}3\,\text{N}\,\text{m}$ im Uhrzeigersinn.

**Schritt 3, Hebelarm der Kette:** Die Kette greift $1{,}2\,\text{m}$ vom Gelenk an, unter $30^\circ$.
Ihr Hebelarm ist $r_\perp = 1{,}2\,\text{m}\cdot\sin 30^\circ = 0{,}60\,\text{m}$.

**Schritt 4, Gleichgewicht:** $F_K\cdot 0{,}60\,\text{m} = 141{,}3\,\text{N}\,\text{m}$, also
$F_K = 235\,\text{N}$.

**Antwort:** Die Kette trägt $235\,\text{N}$, doppelt so viel wie das Schild wiegt. Flach gespannte Ketten
haben kleine Hebelarme und müssen deshalb große Kräfte aushalten.
:::

```plot
x: [-0.3, 1.7]
y: [-0.8, 1.0]
gleich: true
strecken:
  - { von: [0, -0.8], nach: [0, 1.0], farbe: 3 }
  - { von: [0, 0], nach: [1.2, 0], farbe: 3 }
  - { von: [1.2, 0], nach: [0, 0.693], gestrichelt: true }
  - { von: [0, 0], nach: [0.3, 0.520], gestrichelt: true, farbe: 2 }
vektoren:
  - { von: [1.2, 0], nach: [1.2, -0.589], label: "F_G = 118 N", farbe: 0 }
  - { von: [1.2, 0], nach: [0.181, 0.589], label: "F_K = 235 N", farbe: 1 }
  - { von: [0, -0.06], nach: [1.019, -0.06], label: "Gelenkkraft 204 N", farbe: 4 }
punkte:
  - { x: 0, y: 0, label: "Gelenk" }
  - { x: 0.15, y: 0.40, label: "r⊥ = 0,60 m", farbe: 2 }
beschriftung: "Freikörperbild des Auslegers mit Schild. Die Wand ist links. Nach unten zieht das Gewicht des Schilds (blau), schräg zur Wand hin zieht die Kette (orange). Das Gelenk drückt den Ausleger waagrecht von der Wand weg (ocker). Der grüne gestrichelte Hebelarm der Kette ist das Lot vom Gelenk auf die Kettenlinie. Maßstab: 0,5 Einheiten pro 100 N."
```

Auch die Gelenkkraft folgt jetzt aus dem Kräftegleichgewicht. Die Kette zieht waagrecht mit
$235\,\text{N}\cdot\cos 30^\circ = 204\,\text{N}$ zur Wand hin. Also muss das Gelenk den Ausleger mit
$204\,\text{N}$ von der Wand wegdrücken. Senkrecht zieht die Kette mit $235\,\text{N}\cdot\sin 30^\circ = 118\,\text{N}$
nach oben. Das gleicht das Gewicht des Schilds schon vollständig aus. Das Gelenk muss senkrecht also gar
nichts tragen.

:::merke
**Rezept für Gleichgewichtsaufgaben**

1. Freikörperbild zeichnen: **alle** Kräfte mit Angriffspunkt, auch das Eigengewicht im Schwerpunkt und die
   unbekannten Kräfte von Stützen, Gelenken und Wänden.
2. Bezugspunkt wählen, am besten dort, wo eine unbekannte Kraft angreift.
3. Drehmomentgleichung $\sum M = 0$ aufstellen, mit Hebelarmen als senkrechten Abständen, und nach der
   Unbekannten auflösen.
4. Mit dem Kräftegleichgewicht $\sum F = 0$ die übrigen Unbekannten bestimmen.
5. Probe mit einem anderen Bezugspunkt.
:::

### Die Leiter an der Wand

Eine Leiter, die an einer Wand lehnt, ist der Klassiker der Statik. Wir nehmen eine **glatte** Wand an,
also ohne Reibung. Dann kann die Wand nur senkrecht zu ihrer Oberfläche drücken, also waagrecht. Am Boden
wirken zwei Kräfte: die Normalkraft nach oben und die **Haftreibung** waagrecht zur Wand hin. Die
Haftreibung verhindert, dass der Fuß wegrutscht (siehe Abschnitt
[Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand)).

:::beispiel[Rutscht die Leiter?]
Eine $4{,}0\,\text{m}$ lange Leiter mit der Gewichtskraft $180\,\text{N}$ lehnt an einer glatten Wand. Ihr
Schwerpunkt liegt in der Mitte. Der Fuß steht $1{,}2\,\text{m}$ von der Wand entfernt. Welche
Haftreibungszahl braucht der Boden mindestens?

**Schritt 1, Geometrie:** Nach Pythagoras berührt die Leiter die Wand in der Höhe
$h = \sqrt{(4{,}0\,\text{m})^2 - (1{,}2\,\text{m})^2} = 3{,}82\,\text{m}$.

**Schritt 2, Bezugspunkt im Fuß:** Dort greifen Normalkraft und Haftreibung an, beide unbekannt. Beide
fallen heraus.

**Schritt 3, Hebelarme:** Das Gewicht wirkt senkrecht nach unten. Seine Wirkungslinie ist vom Fuß
waagrecht $0{,}60\,\text{m}$ entfernt, das ist der halbe Wandabstand. Die Wandkraft $F_W$ wirkt waagrecht.
Ihre Wirkungslinie liegt $3{,}82\,\text{m}$ über dem Fuß.

**Schritt 4, Drehmomente:** $F_W\cdot 3{,}82\,\text{m} = 180\,\text{N}\cdot 0{,}60\,\text{m} = 108\,\text{N}\,\text{m}$,
also $F_W = 28{,}3\,\text{N}$.

**Schritt 5, Kräfte:** Senkrecht trägt der Boden das ganze Gewicht, $F_N = 180\,\text{N}$. Waagrecht muss
die Haftreibung die Wandkraft ausgleichen, $F_R = 28{,}3\,\text{N}$. Haftreibung ist höchstens
$\mu_H\cdot F_N$. Also braucht man $\mu_H \ge \dfrac{28{,}3\,\text{N}}{180\,\text{N}} = 0{,}157$.

**Antwort:** Schon ein mäßig rauer Boden mit $\mu_H \ge 0{,}16$ hält die Leiter. Steigt jemand hinauf,
wächst die nötige Reibung, und zwar umso mehr, je höher er steht.
:::

```plot
x: [-0.4, 2.2]
y: [-0.3, 4.3]
gleich: true
strecken:
  - { von: [0, -0.3], nach: [0, 4.3], farbe: 3 }
  - { von: [-0.4, 0], nach: [2.2, 0], farbe: 3 }
  - { von: [1.2, 0], nach: [0, 3.816], farbe: 4 }
  - { von: [1.6, 0], nach: [1.6, 3.816], gestrichelt: true, farbe: 1 }
  - { von: [0.6, 0], nach: [1.2, 0], gestrichelt: true, farbe: 0 }
vektoren:
  - { von: [0.6, 1.908], nach: [0.6, 1.008], label: "F_G = 180 N", farbe: 0 }
  - { von: [1.2, 0], nach: [1.2, 0.9], label: "F_N = 180 N", farbe: 2 }
  - { von: [1.2, 0], nach: [1.059, 0], label: "F_R", farbe: 3 }
  - { von: [0, 3.816], nach: [0.6, 3.816], label: "F_W = 28 N", farbe: 1 }
punkte:
  - { x: 1.6, y: 1.9, label: "h = 3,82 m", farbe: 1 }
  - { x: 0.9, y: -0.15, label: "0,60 m", farbe: 0 }
beschriftung: "Freikörperbild der Leiter (ocker) an einer glatten Wand. Die Wand drückt waagrecht (orange, zur Sichtbarkeit vergrößert gezeichnet), der Boden trägt mit F_N nach oben (grün) und hält den Fuß mit der Haftreibung F_R zur Wand hin (violett). Das Gewicht greift in der Mitte an (blau). Gestrichelt sind die Hebelarme bezüglich des Fußes: 0,60 m für das Gewicht und 3,82 m für die Wandkraft."
```

:::achtung[Fehler: Leiterlänge statt senkrechtem Abstand]
Bei der Leiter setzt jemand für das Gewicht den Abstand **entlang der Leiter** ein, also die halbe Länge
$2{,}0\,\text{m}$: $F_W\cdot 3{,}82\,\text{m} = 180\,\text{N}\cdot 2{,}0\,\text{m}$. Das ergibt
$F_W = 94{,}3\,\text{N}$, mehr als dreimal zu viel.

Das Gewicht zeigt senkrecht nach unten. Sein Hebelarm ist der **waagrechte** Abstand seiner Wirkungslinie
vom Fuß, also $0{,}60\,\text{m}$. Der Abstand entlang der Leiter ist der Hebelarm nur für eine Kraft, die
senkrecht auf der Leiter steht. Richtig ist $F_W = 28{,}3\,\text{N}$.
:::

Mit zwei Gleichgewichtsbedingungen kann man in einer Ebene höchstens drei unbekannte Kraftkomponenten
bestimmen: zwei aus dem Kräftegleichgewicht (waagrecht und senkrecht) und eine aus dem
Drehmomentgleichgewicht. Hat ein Problem mehr Unbekannte, zum Beispiel ein Tisch mit vier Beinen, heißt es
**statisch unbestimmt**. Dann hängt die Verteilung der Kräfte davon ab, wie sich die Bauteile ein wenig
verformen. Das Modell des starren Körpers reicht dafür nicht mehr.

```reflexion
frage: Bei der Leiter haben wir den Bezugspunkt in den Fuß gelegt. Erkläre, warum das geschickt ist, und warum wir dasselbe Ergebnis auch mit dem Bezugspunkt oben an der Wand bekommen hätten.
antwort: |
  Im Fuß greifen zwei unbekannte Kräfte an, die Normalkraft und die Haftreibung. Beide haben bezüglich des Fußes den
  Hebelarm null und fallen aus der Drehmomentgleichung heraus. Übrig bleibt nur eine Unbekannte, die Wandkraft.
  Weil die Leiter im Gleichgewicht ist, ist die Summe der Kräfte null. Dann ist die Summe der Drehmomente um jeden Punkt
  null, auch um den Punkt an der Wand. Dort hätten wir aber eine Gleichung mit Normalkraft und Haftreibung bekommen und
  mehr rechnen müssen. Das Ergebnis wäre dasselbe.
```

### Aufgaben zum Gleichgewicht

```aufgabe
id: p5-wippe
titel: Die Wippe
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Auf einer Wippe sitzt ein Kind mit $30\,\text{kg}$ im Abstand $2{,}0\,\text{m}$ vom Drehpunkt. Wie weit vom Drehpunkt muss auf der anderen Seite ein Kind mit $40\,\text{kg}$ sitzen, damit die Wippe im Gleichgewicht ist? Die Wippe selbst ist im Drehpunkt gelagert und symmetrisch.
teile:
  - typ: zahl
    loesung: "30*2.0/40"
    einheit: "m"
    anzeige: '1{,}5'
    fehler:
      - wert: "40*2.0/30"
        meldung: |
          Du hast die Massen vertauscht. Das schwerere Kind muss **näher** am Drehpunkt sitzen, sonst überwiegt sein Drehmoment noch mehr.
hinweise:
  - 'Hebelgesetz: $m_1 g\cdot r_1 = m_2 g\cdot r_2$. Die Fallbeschleunigung $g$ steht auf beiden Seiten und kürzt sich.'
loesung: |
  **Ansatz:** Im Gleichgewicht sind die Drehmomente links und rechts gleich: $m_1 g\cdot r_1 = m_2 g\cdot r_2$. Wir teilen beide Seiten durch $g$.
  ---
  **Rechnung:** $r_2 = \dfrac{m_1 r_1}{m_2} = \dfrac{30\,\text{kg}\cdot 2{,}0\,\text{m}}{40\,\text{kg}} = 1{,}5\,\text{m}$. Das schwerere Kind sitzt näher am Drehpunkt, wie erwartet.
```


```aufgabe
id: p5-balken-auflager
titel: Auflagerkräfte unter einem Maler
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein gleichmäßig dickes Brett der Länge $3{,}0\,\text{m}$ mit der Gewichtskraft $150\,\text{N}$ liegt an beiden Enden auf. Ein Maler mit $750\,\text{N}$ steht $0{,}50\,\text{m}$ vom linken Ende entfernt. Berechne die Kräfte, mit denen die beiden Auflager das Brett stützen.
teile:
  - typ: zahl
    label: Kraft am linken Auflager
    loesung: "150+750-(150*1.5+750*0.5)/3.0"
    einheit: "N"
    anzeige: '700'
    fehler:
      - wert: "750-750*0.5/3.0"
        meldung: |
          Du hast das Eigengewicht des Bretts vergessen. Es wiegt $150\,\text{N}$ und greift in der Mitte an, $1{,}5\,\text{m}$ vom linken Ende.
      - wert: "200"
        meldung: |
          Das ist die Kraft am **rechten** Auflager. Der Maler steht nahe am linken Ende, dort muss die größere Kraft wirken.
  - typ: zahl
    label: Kraft am rechten Auflager
    loesung: "(150*1.5+750*0.5)/3.0"
    einheit: "N"
    anzeige: '200'
    fehler:
      - wert: "750*0.5/3.0"
        meldung: |
          Das Eigengewicht des Bretts fehlt in der Drehmomentgleichung: $150\,\text{N}\cdot 1{,}5\,\text{m} = 225\,\text{N}\,\text{m}$.
hinweise:
  - Lege den Bezugspunkt in das linke Auflager. Dann fällt die linke Auflagerkraft aus der Drehmomentgleichung heraus.
  - 'Das Eigengewicht greift in der Brettmitte an, $1{,}5\,\text{m}$ vom linken Ende. Danach folgt die linke Kraft aus dem Kräftegleichgewicht.'
gefuehrt:
  - text: Wie groß ist das Drehmoment des Eigengewichts um das linke Ende in $\text{N}\,\text{m}$?
    teil: { typ: zahl, loesung: "150*1.5", einheit: "N·m" }
    erklaerung: Das Eigengewicht greift in der Mitte an, also $150\,\text{N}\cdot 1{,}5\,\text{m} = 225\,\text{N}\,\text{m}$.
  - text: Wie groß ist das Drehmoment des Malers um das linke Ende in $\text{N}\,\text{m}$?
    teil: { typ: zahl, loesung: "750*0.5", einheit: "N·m" }
    erklaerung: $750\,\text{N}\cdot 0{,}50\,\text{m} = 375\,\text{N}\,\text{m}$.
  - text: Die rechte Auflagerkraft muss beide Drehmomente ausgleichen. Ihr Hebelarm ist $3{,}0\,\text{m}$. Wie groß ist sie in Newton?
    teil: { typ: zahl, loesung: "(225+375)/3.0", einheit: "N" }
    erklaerung: $F_R\cdot 3{,}0\,\text{m} = 600\,\text{N}\,\text{m}$, also $F_R = 200\,\text{N}$.
  - text: Bestimme die linke Auflagerkraft aus dem Kräftegleichgewicht.
    teil: { typ: zahl, loesung: "900-200", einheit: "N" }
    erklaerung: Beide Auflager zusammen tragen $150\,\text{N} + 750\,\text{N} = 900\,\text{N}$. Links bleiben $900\,\text{N} - 200\,\text{N} = 700\,\text{N}$.
loesung: |
  **Ansatz:** Bezugspunkt im linken Auflager, damit die unbekannte Kraft $F_L$ herausfällt. Die Drehmomente von Brettgewicht und Maler muss $F_R$ ausgleichen.
  ---
  **Drehmomente um das linke Ende:** $F_R\cdot 3{,}0\,\text{m} = 150\,\text{N}\cdot 1{,}5\,\text{m} + 750\,\text{N}\cdot 0{,}50\,\text{m} = 225\,\text{N}\,\text{m} + 375\,\text{N}\,\text{m} = 600\,\text{N}\,\text{m}$, also $F_R = 200\,\text{N}$.
  ---
  **Kräftegleichgewicht:** $F_L = 150\,\text{N} + 750\,\text{N} - 200\,\text{N} = 700\,\text{N}$.
  ---
  **Probe um das rechte Ende:** $F_L\cdot 3{,}0\,\text{m} = 150\,\text{N}\cdot 1{,}5\,\text{m} + 750\,\text{N}\cdot 2{,}5\,\text{m} = 2100\,\text{N}\,\text{m}$, also $F_L = 700\,\text{N}$. Das stimmt.
```

```aufgabe
id: p5-unterarm
titel: Muskelkraft im Unterarm
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Du hältst eine Hantel mit der Gewichtskraft $50\,\text{N}$ bei waagrechtem Unterarm. Die Hantel ist $35\,\text{cm}$ vom Ellbogengelenk entfernt. Der Unterarm selbst hat die Gewichtskraft $15\,\text{N}$, sein Schwerpunkt liegt $15\,\text{cm}$ vom Gelenk. Der Bizeps greift $4{,}0\,\text{cm}$ vom Gelenk an und zieht senkrecht nach oben. Wie groß ist die Kraft des Bizeps? Runde auf ganze Newton.
plot:
  x: [-0.05, 0.42]
  y: [-0.25, 0.3]
  strecken:
    - { von: [0, 0], nach: [0.36, 0], farbe: 3 }
  vektoren:
    - { von: [0.04, 0], nach: [0.04, 0.25], label: "Bizeps", farbe: 2 }
    - { von: [0.15, 0], nach: [0.15, -0.06], label: "15 N", farbe: 1 }
    - { von: [0.35, 0], nach: [0.35, -0.2], label: "50 N", farbe: 0 }
  punkte:
    - { x: 0, y: 0, label: "Gelenk" }
teile:
  - typ: zahl
    loesung: "(50*0.35+15*0.15)/0.04"
    einheit: "N"
    anzeige: '494'
    fehler:
      - wert: "50*0.35/0.04"
        meldung: |
          Du hast das Gewicht des Unterarms vergessen. Es greift $15\,\text{cm}$ vom Gelenk an und erzeugt zusätzlich $2{,}25\,\text{N}\,\text{m}$.
      - wert: "50+15"
        meldung: |
          Du hast nur die Gewichtskräfte addiert und die Hebelarme weggelassen. Für die Drehung zählt aber Kraft mal Hebelarm. Der Bizeps greift nur $4\,\text{cm}$ vom Gelenk an, die Hantel $35\,\text{cm}$. Mit dem viel kleineren Hebelarm braucht der Bizeps eine viel größere Kraft.
hinweise:
  - Lege den Bezugspunkt in das Ellbogengelenk. Dann fällt die unbekannte Gelenkkraft heraus.
  - 'Das Drehmoment des Bizeps muss die Summe der Drehmomente von Hantel und Unterarm ausgleichen. Rechne die Abstände in Meter um.'
loesung: |
  **Ansatz:** Der Unterarm ist ein Hebel mit Drehpunkt im Ellbogen. Bezugspunkt im Gelenk, damit die Gelenkkraft herausfällt. Alle Kräfte stehen senkrecht auf dem Unterarm, die Hebelarme sind die Abstände zum Gelenk.
  ---
  **Drehmomente:** $F_B\cdot 0{,}04\,\text{m} = 50\,\text{N}\cdot 0{,}35\,\text{m} + 15\,\text{N}\cdot 0{,}15\,\text{m} = 17{,}5\,\text{N}\,\text{m} + 2{,}25\,\text{N}\,\text{m} = 19{,}75\,\text{N}\,\text{m}$.
  ---
  **Rechnung:** $F_B = \dfrac{19{,}75\,\text{N}\,\text{m}}{0{,}04\,\text{m}} = 494\,\text{N}$.
  ---
  **Deutung:** Der Bizeps zieht fast mit dem Zehnfachen der Hantel. Der Arm verzichtet auf Kraft und gewinnt dafür an der Hand einen großen Weg und eine hohe Geschwindigkeit.
```

```aufgabe
id: p5-2-brett-ueberhang
titel: Wie weit darf man auf das Brett hinausgehen?
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein $4{,}0\,\text{m}$ langes, gleichmäßig dickes Brett mit der Gewichtskraft $400\,\text{N}$ liegt lose auf einem Flachdach. Es ragt $1{,}2\,\text{m}$ über die Dachkante hinaus. Eine Person mit der Gewichtskraft $500\,\text{N}$ geht auf dem überstehenden Teil nach außen. Wie weit über die Kante hinaus darf sie höchstens gehen, bevor das Brett um die Kante kippt? Gib den Abstand von der Kante in Metern an.
teile:
  - typ: zahl
    loesung: "400*(2.0-1.2)/500"
    einheit: "m"
    anzeige: '0{,}64'
    fehler:
      - wert: "400*2.0/500"
        meldung: |
          Du hast als Hebelarm des Brettgewichts den Abstand vom Brettende genommen. Gedreht wird aber um die **Dachkante**. Der Schwerpunkt liegt nur $2{,}8\,\text{m} - 2{,}0\,\text{m} = 0{,}8\,\text{m}$ hinter der Kante auf dem Dach.
      - wert: "400*1.2/500"
        meldung: |
          $1{,}2\,\text{m}$ ist der Überstand, nicht der Hebelarm des Brettgewichts. Bestimme, wie weit der Schwerpunkt des Bretts von der Kante entfernt ist.
hinweise:
  - Im Moment des Kippens liegt das Brett nur noch an der Dachkante auf. Die Kante ist der Drehpunkt.
  - 'Der Schwerpunkt des Bretts liegt in der Mitte, $2{,}0\,\text{m}$ vom inneren Ende. Die Kante liegt $4{,}0\,\text{m} - 1{,}2\,\text{m} = 2{,}8\,\text{m}$ vom inneren Ende. Stelle das Hebelgesetz um die Kante auf.'
loesung: |
  **Modell:** Kurz vor dem Kippen trägt nur noch die Dachkante das Brett. Sie ist der Drehpunkt. Gleichgewicht herrscht, solange das Drehmoment der Person höchstens so groß ist wie das des Bretts.
  ---
  **Hebelarm des Bretts:** Der Schwerpunkt liegt $2{,}0\,\text{m}$ vom inneren Ende, die Kante $2{,}8\,\text{m}$. Der Schwerpunkt liegt also $0{,}8\,\text{m}$ auf der Dachseite der Kante.
  ---
  **Hebelgesetz um die Kante:** $500\,\text{N}\cdot x = 400\,\text{N}\cdot 0{,}8\,\text{m} = 320\,\text{N}\,\text{m}$, also $x = 0{,}64\,\text{m}$.
  ---
  **Antwort:** Die Person darf höchstens $0{,}64\,\text{m}$ über die Kante hinausgehen. Das ist weniger als der Überstand von $1{,}2\,\text{m}$. Das Brettende ist also nicht sicher erreichbar.
```

```aufgabe
id: p5-2-leiter-begruenden
titel: Warum rutscht die Leiter eher, wenn man hinaufsteigt?
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine Leiter lehnt an einer glatten Wand und steht sicher. Eine Person steigt langsam hinauf. Erkläre mit dem Drehmomentgleichgewicht um den Leiterfuß, warum die nötige Haftreibung am Boden dabei wächst, und zwar umso mehr, je höher die Person steht.
teile:
  - typ: text
    muster: |
      Um den Fuß gilt: Wandkraft mal Höhe des Berührpunkts = Summe der Drehmomente der Gewichte. Das Gewicht der Person hat
      als Hebelarm ihren waagrechten Abstand vom Fuß. Je höher sie steht, desto weiter liegt sie waagrecht vom Fuß entfernt,
      desto größer ist ihr Drehmoment. Also wächst die Wandkraft. Waagrecht muss die Haftreibung am Boden die Wandkraft
      ausgleichen, also wächst auch die nötige Haftreibung. Die Normalkraft bleibt beim Hinaufsteigen gleich, denn der Boden
      trägt immer Leiter und Person zusammen. Also wächst auch das Verhältnis aus Haftreibung und Normalkraft, die nötige
      Haftreibungszahl.
hinweise:
  - 'Bezugspunkt im Fuß: Welche Kräfte erzeugen ein Drehmoment, und welche Hebelarme haben sie?'
  - Waagrecht wirken nur die Wandkraft und die Haftreibung. Was folgt aus dem Kräftegleichgewicht?
loesung: |
  **Drehmomente um den Fuß:** Die Wandkraft $F_W$ hat als Hebelarm die Höhe $h$ des Berührpunkts. Die Gewichte von Leiter und Person haben als Hebelarm ihren **waagrechten** Abstand vom Fuß.
  ---
  **Person steigt höher:** Ihr waagrechter Abstand vom Fuß wächst, also wächst ihr Drehmoment. Damit das Gleichgewicht erhalten bleibt, muss $F_W\cdot h$ wachsen. Weil $h$ gleich bleibt, wächst $F_W$.
  ---
  **Waagrechtes Kräftegleichgewicht:** Die Haftreibung muss genau $F_W$ ausgleichen. Wächst $F_W$, muss auch die Haftreibung wachsen. Die Normalkraft $F_N$ bleibt dabei gleich, denn der Boden trägt immer Leiter und Person zusammen. Braucht es mehr Haftreibung als den Höchstwert $\mu_H F_N$, rutscht die Leiter.
```

```aufgabe
id: p5-2-leiter-person
titel: Eine Person auf der Leiter
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Eine $3{,}0\,\text{m}$ lange Leiter mit der Gewichtskraft $120\,\text{N}$ lehnt an einer glatten Wand und schließt mit dem Boden einen Winkel von $70^\circ$ ein. Ihr Schwerpunkt liegt in der Mitte. Eine Person mit der Gewichtskraft $700\,\text{N}$ steht $2{,}0\,\text{m}$ vom Fuß entfernt (gemessen entlang der Leiter).

  a) Wie groß ist die waagrechte Kraft der Wand auf die Leiter? Runde auf ganze Newton.

  b) Welche Haftreibungszahl braucht der Boden mindestens? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Wandkraft
    loesung: "(120*1.5*cos(inRad(70)) + 700*2.0*cos(inRad(70)))/(3.0*sin(inRad(70)))"
    einheit: "N"
    anzeige: '192'
    fehler:
      - wert: "(120*1.5 + 700*2.0)/(3.0*sin(inRad(70)))"
        meldung: |
          Du hast die Abstände **entlang der Leiter** als Hebelarme der Gewichte genommen. Die Gewichte zeigen senkrecht nach unten. Ihr Hebelarm ist der **waagrechte** Abstand vom Fuß, also Abstand mal $\cos 70^\circ$.
      - wert: "(120*1.5*cos(inRad(70)) + 700*2.0*cos(inRad(70)))/3.0"
        meldung: |
          Die Wandkraft wirkt waagrecht. Ihr Hebelarm um den Fuß ist die **Höhe** des Berührpunkts, $3{,}0\,\text{m}\cdot\sin 70^\circ$, nicht die Leiterlänge.
  - typ: zahl
    label: b) Mindest-Haftreibungszahl
    loesung: "(120*1.5*cos(inRad(70)) + 700*2.0*cos(inRad(70)))/(3.0*sin(inRad(70)))/(120+700)"
    anzeige: '0{,}23'
    toleranz: 0.005
    fehler:
      - wert: "(120*1.5*cos(inRad(70)) + 700*2.0*cos(inRad(70)))/(3.0*sin(inRad(70)))/700"
        meldung: |
          Die Normalkraft des Bodens trägt **alles**, also Leiter und Person zusammen: $120\,\text{N} + 700\,\text{N} = 820\,\text{N}$.
hinweise:
  - 'Bezugspunkt im Fuß. Die Wandkraft hat den Hebelarm $h = 3{,}0\,\text{m}\cdot\sin 70^\circ$, die Gewichte haben als Hebelarme ihre waagrechten Abstände vom Fuß.'
  - 'Ein Punkt im Abstand $s$ entlang der Leiter liegt waagrecht $s\cdot\cos 70^\circ$ vom Fuß entfernt. Für b) gilt $\mu_H \ge F_W/F_N$ mit $F_N = 820\,\text{N}$.'
loesung: |
  **Ansatz:** Bezugspunkt im Fuß, dort fallen Normalkraft und Haftreibung heraus. Die Hebelarme sind senkrechte Abstände der Wirkungslinien.
  ---
  **Hebelarme:** Höhe des Berührpunkts $h = 3{,}0\,\text{m}\cdot\sin 70^\circ = 2{,}82\,\text{m}$. Leiterschwerpunkt waagrecht $1{,}5\,\text{m}\cdot\cos 70^\circ = 0{,}513\,\text{m}$ vom Fuß. Person waagrecht $2{,}0\,\text{m}\cdot\cos 70^\circ = 0{,}684\,\text{m}$ vom Fuß.
  ---
  **a) Drehmomente:** $F_W\cdot 2{,}82\,\text{m} = 120\,\text{N}\cdot 0{,}513\,\text{m} + 700\,\text{N}\cdot 0{,}684\,\text{m} = 61{,}6\,\text{N}\,\text{m} + 478{,}8\,\text{N}\,\text{m} = 540{,}4\,\text{N}\,\text{m}$, also $F_W = 192\,\text{N}$.
  ---
  **b) Kräfte:** Senkrecht trägt der Boden $F_N = 120\,\text{N} + 700\,\text{N} = 820\,\text{N}$. Waagrecht gleicht die Haftreibung die Wandkraft aus, $F_R = 192\,\text{N}$. Also $\mu_H \ge \dfrac{192\,\text{N}}{820\,\text{N}} = 0{,}23$.
  ---
  **Plausibilität:** Ohne Person bräuchte die Leiter nur $\mu_H \ge 0{,}18$. Mit Person, die weit oben steht, wird mehr Reibung nötig.
```

## Schwerpunkt und Standfestigkeit

```aufgabe
id: p5-3-check
art: check
titel: "Vorwissen: Der Mittelpunkt einer Strecke"
niveau: 1
angabe: |
  Auf einer Zahlengeraden liegt ein Punkt bei $x = 2\,\text{m}$ und ein zweiter bei $x = 8\,\text{m}$. Wo liegt der Mittelpunkt der Strecke zwischen ihnen?
teile:
  - typ: zahl
    loesung: "(2+8)/2"
    einheit: "m"
    anzeige: '5'
    fehler:
      - wert: "3"
        meldung: |
          $3\,\text{m}$ ist die halbe **Länge** der Strecke. Der Mittelpunkt liegt aber $3\,\text{m}$ rechts vom linken Punkt, also bei $2\,\text{m} + 3\,\text{m}$.
      - wert: "6"
        meldung: |
          $6\,\text{m}$ ist die Länge der Strecke. Gesucht ist der Ort in ihrer Mitte.
hinweise:
  - Der Mittelpunkt ist der Mittelwert der beiden Orte.
loesung: |
  Der Mittelpunkt ist der Mittelwert der beiden Koordinaten: $x_M = \dfrac{x_1 + x_2}{2}$.
  ---
  $x_M = \dfrac{2\,\text{m} + 8\,\text{m}}{2} = 5\,\text{m}$. Wiederholen kannst du das in Mathematik im Abschnitt [Mittelpunkt, Teilungspunkt und Schwerpunkt](/lernen/mathe3/vektoren/mittelpunkt-teilungspunkt-und-schwerpunkt).
```

Die Erde zieht an jedem einzelnen Teilchen eines Körpers. Ein Balken besteht aus unzählig vielen kleinen
Stücken, und auf jedes wirkt eine winzige Gewichtskraft. Zum Glück muss man diese Kräfte nicht einzeln
behandeln. Für das Gleichgewicht wirken sie zusammen so, als griffe die **gesamte** Gewichtskraft in einem
einzigen Punkt an. Diesen Punkt haben wir im Abschnitt
[Gleichgewicht des starren Körpers](/lernen/physik1/drehbewegung-einfache-maschinen/gleichgewicht-des-starren-koerpers)
schon benutzt, als wir das Eigengewicht des Balkens in seine Mitte gesetzt haben.

:::definition[Schwerpunkt]
Der **Schwerpunkt** $S$ eines Körpers ist der Punkt, in dem man sich seine gesamte Gewichtskraft
angreifend denken darf. Unterstützt man den Körper genau im Schwerpunkt, bleibt er in jeder Lage im
Gleichgewicht.

**Beispiel:** Bei einem gleichmäßig dicken Lineal liegt der Schwerpunkt in der Mitte. Du kannst es dort
auf einem Finger balancieren.

**Kein Beispiel:** Bei einem Hammer liegt der Schwerpunkt **nicht** in der Mitte des Stiels, sondern nahe
am schweren Kopf. Die Mitte ist nur bei gleichmäßig verteilter Masse der Schwerpunkt.
:::

### Die Schwerpunktformel aus dem Hebelgesetz

Wo liegt der Schwerpunkt, wenn die Masse ungleich verteilt ist? Das Hebelgesetz gibt die Antwort. Wir
überlegen es an einer masselosen Stange mit zwei Massen.

1. **Ziel:** Wir suchen den Punkt $x_S$, in dem man die Stange unterstützen muss, damit sie im
   Gleichgewicht ist.
2. **Bild:** Eine Wippe mit einem leichten und einem schweren Kind. Der Drehpunkt muss näher beim
   schweren Kind liegen.
3. **Schritte:** Die Masse $m_1$ sitzt bei $x_1$ links von $x_S$, die Masse $m_2$ bei $x_2$ rechts davon.
   Ihre Hebelarme sind $x_S - x_1$ und $x_2 - x_S$. Das Hebelgesetz verlangt
   $m_1 g\,(x_S - x_1) = m_2 g\,(x_2 - x_S)$. Wir teilen durch $g$ und multiplizieren aus:
   $m_1 x_S - m_1 x_1 = m_2 x_2 - m_2 x_S$. Alle Terme mit $x_S$ bringen wir nach links:
   $(m_1 + m_2)\,x_S = m_1 x_1 + m_2 x_2$. Zum Schluss teilen wir durch $m_1 + m_2$.
4. **In Worten:** Der Schwerpunkt ist ein **gewichteter Mittelwert** der Orte. Jeder Ort zählt so stark,
   wie viel Masse dort sitzt.

:::satz[Schwerpunkt mehrerer Massen]
Sitzen die Massen $m_1, m_2, \dots$ an den Orten $x_1, x_2, \dots$ auf einer Geraden, so liegt der
Schwerpunkt bei
$$x_S = \frac{m_1 x_1 + m_2 x_2 + \dots}{m_1 + m_2 + \dots}.$$
In der Ebene gilt dieselbe Formel getrennt für die $x$-Koordinate und die $y$-Koordinate.
:::

:::beispiel[Eine Stange mit zwei Gewichten]
Eine $1{,}2\,\text{m}$ lange, gleichmäßig dicke Stange hat die Masse $2{,}0\,\text{kg}$. Am linken Ende
($x = 0$) hängt ein Gewicht mit $5{,}0\,\text{kg}$, am rechten Ende ($x = 1{,}2\,\text{m}$) eines mit
$1{,}0\,\text{kg}$. Wo liegt der gemeinsame Schwerpunkt?

**Schritt 1, Teile als Massenpunkte:** Die Stange zählt als Masse $2{,}0\,\text{kg}$ in ihrer Mitte bei
$0{,}6\,\text{m}$. Dazu kommen $5{,}0\,\text{kg}$ bei $0$ und $1{,}0\,\text{kg}$ bei $1{,}2\,\text{m}$.

**Schritt 2, Formel:**
$$x_S = \frac{5{,}0\,\text{kg}\cdot 0 + 2{,}0\,\text{kg}\cdot 0{,}6\,\text{m} + 1{,}0\,\text{kg}\cdot 1{,}2\,\text{m}}{5{,}0\,\text{kg} + 2{,}0\,\text{kg} + 1{,}0\,\text{kg}} = \frac{2{,}4\,\text{kg}\,\text{m}}{8{,}0\,\text{kg}} = 0{,}30\,\text{m}.$$

**Schritt 3, Probe mit dem Hebelgesetz um $x_S$:** Links dreht nur das $5$-kg-Gewicht mit dem Hebelarm
$0{,}30\,\text{m}$: $5{,}0\cdot 0{,}30 = 1{,}5$. Rechts drehen die Stange mit $2{,}0\cdot 0{,}30 = 0{,}6$ und
das $1$-kg-Gewicht mit $1{,}0\cdot 0{,}90 = 0{,}9$, zusammen $1{,}5$ (jeweils in $\text{kg}\,\text{m}$, mal $g$).
Beide Seiten sind gleich.

**Antwort:** Der Schwerpunkt liegt $0{,}30\,\text{m}$ vom linken Ende, nahe beim schweren Gewicht.
:::

:::achtung[Fehler: Orte ohne Massen gemittelt]
Bei der Stange mittelt jemand einfach die drei Orte:
$x_S = \dfrac{0 + 0{,}6\,\text{m} + 1{,}2\,\text{m}}{3} = 0{,}6\,\text{m}$.

Das wäre nur richtig, wenn alle drei Massen gleich wären. Hier sitzt links fünfmal so viel Masse wie
rechts. Jeder Ort muss mit seiner Masse gewichtet werden, und geteilt wird durch die **Gesamtmasse**,
nicht durch die Anzahl der Teile. Richtig ist $x_S = 0{,}30\,\text{m}$.
:::

### Zusammengesetzte Körper

Einen Körper aus einfachen Teilen zerlegt man in Rechtecke, Stäbe oder Kreise, deren Schwerpunkt man kennt.
Jedes Teil zählt dann als Massenpunkt in seinem eigenen Schwerpunkt. Bei einer gleich dicken Platte aus
einem Material ist die Masse proportional zur Fläche. Dann darf man statt der Massen die Flächen
einsetzen.

:::beispiel[Schwerpunkt einer L-förmigen Platte]
Eine L-förmige Blechplatte besteht aus zwei Rechtecken. Das liegende Rechteck ist
$40\,\text{cm}\times 10\,\text{cm}$ groß, sein Schwerpunkt liegt bei $x = 20\,\text{cm}$, $y = 5\,\text{cm}$.
Das stehende Rechteck sitzt am linken Ende darauf und ist $10\,\text{cm}\times 30\,\text{cm}$ groß, sein
Schwerpunkt liegt bei $x = 5\,\text{cm}$, $y = 25\,\text{cm}$.

**Schritt 1, Flächen als Gewichte:** $400\,\text{cm}^2$ und $300\,\text{cm}^2$, zusammen $700\,\text{cm}^2$.

**Schritt 2, $x$-Koordinate:**
$x_S = \dfrac{400\cdot 20 + 300\cdot 5}{700}\,\text{cm} = \dfrac{9500}{700}\,\text{cm} = 13{,}6\,\text{cm}$.

**Schritt 3, $y$-Koordinate:**
$y_S = \dfrac{400\cdot 5 + 300\cdot 25}{700}\,\text{cm} = \dfrac{9500}{700}\,\text{cm} = 13{,}6\,\text{cm}$.

**Antwort:** Der Schwerpunkt liegt bei $(13{,}6\,|\,13{,}6)$ in Zentimetern. Dieser Punkt liegt **außerhalb**
des Blechs, in der Ecke des „L“. Ein Schwerpunkt muss nicht im Material liegen.
:::

```plot
x: [-3, 45]
y: [-3, 43]
gleich: true
strecken:
  - { von: [0, 0], nach: [40, 0], farbe: 3 }
  - { von: [40, 0], nach: [40, 10], farbe: 3 }
  - { von: [40, 10], nach: [10, 10], farbe: 3 }
  - { von: [10, 10], nach: [10, 40], farbe: 3 }
  - { von: [10, 40], nach: [0, 40], farbe: 3 }
  - { von: [0, 40], nach: [0, 0], farbe: 3 }
  - { von: [0, 10], nach: [10, 10], gestrichelt: true }
  - { von: [20, 5], nach: [5, 25], gestrichelt: true, farbe: 1 }
punkte:
  - { x: 20, y: 5, label: "S₁", farbe: 0 }
  - { x: 5, y: 25, label: "S₂", farbe: 0 }
  - { x: 13.6, y: 13.6, label: "S", farbe: 1 }
beschriftung: "L-förmige Platte (violett), zerlegt in ein liegendes Rechteck mit Schwerpunkt S₁ und ein stehendes Rechteck mit Schwerpunkt S₂ (blau). Der gemeinsame Schwerpunkt S (orange) liegt auf der Verbindungslinie von S₁ und S₂, näher beim größeren Teil S₁, und außerhalb des Blechs in der Ecke des L. Maße in cm."
```

Der Schwerpunkt liegt immer auf der Verbindungslinie der Teilschwerpunkte, näher am schwereren Teil. Bei
einem Ring, einem Hufeisen oder einem Bumerang liegt er sogar ganz in der Luft.

**Experimentell** findet man den Schwerpunkt einer Platte so: Man hängt sie an einem Punkt auf und
zeichnet die senkrechte Linie durch den Aufhängepunkt ein, die **Lotlinie**. Ein frei hängender Körper
pendelt sich immer so ein, dass sein Schwerpunkt senkrecht unter dem Aufhängepunkt liegt. Dann hängt man
sie an einem zweiten Punkt auf und zeichnet die zweite Lotlinie. Der Schnittpunkt der Lotlinien ist der
Schwerpunkt.

:::tipp[Probier es aus: Den Schwerpunkt eines Besens finden]
Lege einen Besen waagrecht auf deine beiden ausgestreckten Zeigefinger, weit auseinander. Schiebe die
Finger langsam zueinander. Sie treffen sich immer unter dem Schwerpunkt, egal wo du anfängst. Der Grund:
Der Finger näher am Schwerpunkt trägt mehr Gewicht und hat deshalb mehr Reibung. Also rutscht immer der
andere Finger nach. Der Treffpunkt liegt nahe am schweren Borstenkopf, nicht in der Mitte des Stiels.
:::

### Drei Arten von Gleichgewicht

Ein Körper kann auf drei Arten im Gleichgewicht sein. Entscheidend ist, was mit dem Schwerpunkt passiert,
wenn man den Körper ein wenig auslenkt.

| Gleichgewicht | Schwerpunkt bei kleiner Auslenkung | Beispiel |
|---|---|---|
| **stabil** | Er wird angehoben, der Körper kehrt zurück. | Ein hängendes Bild. Eine Kugel in einer Mulde. |
| **labil** | Er sinkt, der Körper kippt weg. | Ein Bleistift auf der Spitze. Eine Kugel auf einer Kuppe. |
| **indifferent** | Er bleibt auf gleicher Höhe. | Eine Kugel auf ebenem Boden. Ein Rad auf seiner Achse. |

**Labil** heißt wörtlich „schwankend“, **indifferent** heißt „gleichgültig“: Jede Lage ist gleich gut.
Ein Bild, das an einem Nagel **über** seinem Schwerpunkt hängt, ist stabil. Hängt es an einem Nagel
**unter** seinem Schwerpunkt, zum Beispiel an einem Stab, der durch die Unterkante gesteckt ist, kippt es
sofort um. Das ist **kein** stabiles Gleichgewicht, sondern ein labiles.

```aufgabe
id: p5-gleichgewichtsarten
titel: Gleichgewichtsarten erkennen
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Welche Beispiele zeigen ein **stabiles** Gleichgewicht? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "ein Bilderrahmen, der an einem Nagel über seinem Schwerpunkt hängt"
      - "ein auf der Spitze balancierter Bleistift"
      - "eine Murmel am tiefsten Punkt einer Schüssel"
      - "ein Rad, das genau in seiner Achse gelagert ist"
      - "ein Stehaufmännchen"
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2, 3, 4]
        meldung: |
          Das Rad in seiner Achse ist **indifferent**. Dreht man es, bleibt sein Schwerpunkt auf derselben Höhe, in der Achse. Es kehrt nicht zurück, es bleibt einfach in der neuen Lage.
      - wert: [0, 1, 2, 4]
        meldung: |
          Der Bleistift auf der Spitze ist zwar im Gleichgewicht, aber **labil**. Bei der kleinsten Neigung sinkt sein Schwerpunkt, und er kippt weg.
hinweise:
  - Frage bei jedem Beispiel, ob der Schwerpunkt bei einer kleinen Auslenkung steigt, sinkt oder gleich hoch bleibt.
loesung: |
  **Kriterium:** Stabil ist ein Gleichgewicht, wenn der Schwerpunkt bei einer kleinen Auslenkung angehoben wird. Dann zieht die Gewichtskraft den Körper zurück.
  ---
  **Zuordnung:** Bild, Murmel und Stehaufmännchen sind stabil. Der Bleistift auf der Spitze ist labil, weil sein Schwerpunkt sinkt. Das Rad in der Achse ist indifferent, weil sein Schwerpunkt auf gleicher Höhe bleibt.
```

### Standfestigkeit und Kippwinkel

Ein Körper steht auf einer Fläche, der **Standfläche**. Er bleibt stehen, solange die senkrechte Linie
durch seinen Schwerpunkt, das **Lot**, innerhalb der Standfläche auf den Boden trifft. Kippt man ihn ein
wenig, hebt sich der Schwerpunkt, und der Körper fällt zurück. Kippt man weiter, steht der Schwerpunkt
irgendwann genau über der Kippkante. Kippt man noch weiter, fällt das Lot außerhalb der Standfläche, und
der Körper fällt um.

Für einen quaderförmigen Körper mit der Breite $b$ (quer zur Kippkante) und einem Schwerpunkt in der
Höhe $h_S$ über dem Boden, mittig über der Standfläche, gilt für den **Kippwinkel**
$$\tan\alpha_{\text{kipp}} = \frac{b/2}{h_S}.$$
Dabei ist $b/2$ der waagrechte Abstand des Schwerpunkts von der Kippkante im Stand.

:::beispiel[Wann kippt ein Kühlschrank?]
Ein Kühlschrank ist $0{,}70\,\text{m}$ tief. Sein Schwerpunkt liegt mittig, $0{,}80\,\text{m}$ über dem
Boden. Beim Transport kippt man ihn über seine hintere Unterkante. Ab welchem Winkel fällt er von selbst um?

**Schritt 1, Abstand zur Kante:** Im Stand liegt der Schwerpunkt waagrecht $0{,}70\,\text{m}/2 = 0{,}35\,\text{m}$
von der Kippkante entfernt.

**Schritt 2, Kippgrenze:** Er kippt, sobald der Schwerpunkt genau über der Kante steht. Dann ist die Linie
von der Kante zum Schwerpunkt senkrecht. Sie war im Stand um den Winkel $\alpha$ gegen die Senkrechte
geneigt, mit $\tan\alpha = \dfrac{0{,}35\,\text{m}}{0{,}80\,\text{m}} = 0{,}4375$.

**Schritt 3, Winkel:** $\alpha_{\text{kipp}} = \arctan 0{,}4375 = 23{,}6^\circ$.

**Antwort:** Bis etwa $24^\circ$ kippt der Kühlschrank von selbst zurück. Darüber fällt er um.
:::

```plot
x: [-0.9, 1.0]
y: [-0.1, 2.1]
gleich: true
strecken:
  - { von: [-0.9, 0], nach: [1.0, 0] }
  - { von: [0, 0], nach: [-0.641, 0.281], farbe: 3 }
  - { von: [-0.641, 0.281], nach: [0.08, 1.93], farbe: 3 }
  - { von: [0.08, 1.93], nach: [0.721, 1.649], farbe: 3 }
  - { von: [0.721, 1.649], nach: [0, 0], farbe: 3 }
  - { von: [0, 0], nach: [0, 1.4], gestrichelt: true, farbe: 1 }
vektoren:
  - { von: [0, 0.873], nach: [0, 0.45], label: "F_G", farbe: 0 }
punkte:
  - { x: 0, y: 0.873, label: "S", farbe: 1 }
  - { x: 0, y: 0, label: "Kippkante" }
beschriftung: "Kühlschrank (violett), 0,70 m tief, genau am Kippwinkel 23,6° um seine Kippkante gekippt. Der Schwerpunkt S steht senkrecht über der Kante, das Lot (orange gestrichelt) trifft genau die Kante. Noch etwas weiter gekippt fällt das Lot außerhalb der Standfläche, und der Kühlschrank fällt um."
```

:::achtung[Fehler: ganze Breite statt halber Breite]
Beim Kühlschrank rechnet jemand $\tan\alpha = \dfrac{0{,}70\,\text{m}}{0{,}80\,\text{m}}$ und erhält
$41{,}2^\circ$. Das täuscht eine viel größere Sicherheit vor.

Entscheidend ist der Abstand des Schwerpunkts von der **Kippkante**. Der Schwerpunkt liegt in der Mitte,
also nur eine **halbe** Tiefe von der Kante entfernt. Richtig ist $\tan\alpha = 0{,}35/0{,}80$ und
$\alpha = 23{,}6^\circ$.
:::

Standfest ist also, was eine **breite Standfläche** und einen **tiefen Schwerpunkt** hat. Rennautos sind
flach gebaut. Ein Baukran trägt unten schwere Betonblöcke. Ein Stehaufmännchen hat einen Bleiklotz im
runden Fuß. Dadurch liegt sein Schwerpunkt so tief, dass er bei jeder Neigung angehoben wird.

:::intuition
Dein Körper ist ein ständiges Gleichgewichtsexperiment. Im aufrechten Stand liegt dein Schwerpunkt etwa
in Höhe des Bauchnabels, und das Lot fällt zwischen deine Füße. Trägst du rechts einen schweren Koffer,
wandert der gemeinsame Schwerpunkt nach rechts. Du neigst dich unwillkürlich nach links und streckst
vielleicht den linken Arm aus. So bringst du das Lot zurück über die Standfläche.
:::

```reflexion
frage: Ein Doppeldeckerbus fährt einmal leer und einmal mit voll besetztem Oberdeck. Erkläre mit dem Schwerpunkt, warum er im zweiten Fall auf einer seitlich stark geneigten Straße eher umkippen kann.
antwort: |
  Die Fahrgäste oben verschieben den gemeinsamen Schwerpunkt nach oben. Die Standfläche, also der Abstand der Räder,
  bleibt gleich. Der Kippwinkel folgt aus $\tan\alpha = (b/2)/h_S$. Wird $h_S$ größer, wird $\tan\alpha$ kleiner, der
  Bus kippt schon bei kleinerer Neigung. Das Lot durch den hohen Schwerpunkt verlässt die Standfläche früher.
```

### Aufgaben zum Schwerpunkt

```aufgabe
id: p5-schwerpunkt-zwei-massen
titel: Schwerpunkt zweier Massen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Masse $m_1 = 2{,}0\,\text{kg}$ sitzt bei $x_1 = 0$, eine Masse $m_2 = 3{,}0\,\text{kg}$ bei $x_2 = 1{,}0\,\text{m}$. Sie sind durch eine masselose Stange verbunden. Wo liegt der Schwerpunkt?
teile:
  - typ: zahl
    loesung: "(2*0+3*1.0)/(2+3)"
    einheit: "m"
    anzeige: '0{,}6'
    fehler:
      - wert: "0.5"
        meldung: |
          Das ist die Mitte der Stange. Sie wäre nur bei gleichen Massen der Schwerpunkt. Hier ist die rechte Masse schwerer, also liegt der Schwerpunkt weiter rechts.
      - wert: "0.4"
        meldung: |
          Du hast die Massen vertauscht. Der Schwerpunkt liegt näher an der **schwereren** Masse, und die sitzt bei $x = 1{,}0\,\text{m}$.
hinweise:
  - 'Setze in $x_S = \dfrac{m_1 x_1 + m_2 x_2}{m_1 + m_2}$ ein.'
loesung: |
  **Ansatz:** Der Schwerpunkt ist der mit den Massen gewichtete Mittelwert der Orte.
  ---
  **Rechnung:** $x_S = \dfrac{2{,}0\,\text{kg}\cdot 0 + 3{,}0\,\text{kg}\cdot 1{,}0\,\text{m}}{5{,}0\,\text{kg}} = 0{,}6\,\text{m}$.
  ---
  **Probe mit dem Hebelgesetz:** $2{,}0\,\text{kg}\cdot 0{,}6\,\text{m} = 3{,}0\,\text{kg}\cdot 0{,}4\,\text{m} = 1{,}2\,\text{kg}\,\text{m}$. Das stimmt.
```


```aufgabe
id: p5-3-standflaeche-konzept
titel: Wann fällt ein Körper um?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Der Schiefe Turm von Pisa ist um etwa $4^\circ$ geneigt und steht trotzdem. Welche Aussage erklärt das richtig?
teile:
  - typ: auswahl
    optionen:
      - "Ein Körper steht, solange das Lot durch seinen Schwerpunkt innerhalb der Standfläche liegt."
      - 'Ein Körper steht, solange er weniger als $45^\circ$ geneigt ist.'
      - "Ein Körper steht, solange sein Schwerpunkt in der unteren Hälfte des Körpers liegt."
      - "Ein schwerer Körper kippt nie, weil ihn sein großes Gewicht an den Boden drückt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Einen festen Grenzwinkel gibt es nicht. Ein hoher, schmaler Körper kippt schon bei wenigen Grad, ein flacher, breiter erst bei viel mehr. Entscheidend ist $\tan\alpha_{\text{kipp}} = (b/2)/h_S$.
      - wert: 2
        meldung: |
          Auch ein Körper mit tiefem Schwerpunkt kippt, wenn man ihn weit genug neigt. Entscheidend ist, wo das Lot durch den Schwerpunkt auf den Boden trifft.
      - wert: 3
        meldung: |
          Das Gewicht spielt keine Rolle für die Kippgrenze. Ein doppelt so schwerer Turm gleicher Form kippt beim selben Winkel. Gewicht und Hebelarm wachsen dann gemeinsam.
hinweise:
  - Überlege, welche Kraft den Turm zurückdreht und um welche Kante.
loesung: |
  **Kriterium:** Der Turm dreht sich, wenn überhaupt, um die Kante seiner Standfläche auf der geneigten Seite. Die Gewichtskraft greift im Schwerpunkt an. Liegt ihr Lot innerhalb der Standfläche, dreht sie den Turm zurück.
  ---
  **Pisa:** Bei $4^\circ$ Neigung trifft das Lot durch den Schwerpunkt noch innerhalb der Grundfläche auf den Boden. Deshalb steht der Turm. Die Masse kommt in dieser Bedingung gar nicht vor.
```

```aufgabe
id: p5-3-t-platte
titel: Schwerpunkt einer T-Platte
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine gleich dicke Blechplatte hat die Form eines umgedrehten „T“. Unten liegt ein Rechteck $30\,\text{cm}$ breit und $6\,\text{cm}$ hoch. Mittig darauf steht ein Rechteck, $6\,\text{cm}$ breit und $24\,\text{cm}$ hoch. Die Unterkante liegt bei $y = 0$. In welcher Höhe $y_S$ liegt der Schwerpunkt? Runde auf eine Nachkommastelle.
plot:
  x: [-2, 32]
  y: [-2, 32]
  gleich: true
  strecken:
    - { von: [0, 0], nach: [30, 0], farbe: 3 }
    - { von: [30, 0], nach: [30, 6], farbe: 3 }
    - { von: [30, 6], nach: [18, 6], farbe: 3 }
    - { von: [18, 6], nach: [18, 30], farbe: 3 }
    - { von: [18, 30], nach: [12, 30], farbe: 3 }
    - { von: [12, 30], nach: [12, 6], farbe: 3 }
    - { von: [12, 6], nach: [0, 6], farbe: 3 }
    - { von: [0, 6], nach: [0, 0], farbe: 3 }
teile:
  - typ: zahl
    loesung: "(30*6*3 + 6*24*(6+12))/(30*6 + 6*24)"
    einheit: "cm"
    anzeige: '9{,}7'
    fehler:
      - wert: "(3+18)/2"
        meldung: |
          Du hast die beiden Teilschwerpunkte einfach gemittelt. Die Teile sind aber verschieden groß: $180\,\text{cm}^2$ unten und $144\,\text{cm}^2$ oben. Gewichte jede Höhe mit ihrer Fläche.
      - wert: "(30*6*3 + 6*24*12)/(30*6 + 6*24)"
        meldung: |
          Der Schwerpunkt des oberen Rechtecks liegt nicht bei $12\,\text{cm}$, sondern $12\,\text{cm}$ über **seiner** Unterkante. Die liegt bei $y = 6\,\text{cm}$. Also $y_2 = 18\,\text{cm}$.
hinweise:
  - Zerlege in zwei Rechtecke. Bei gleicher Dicke darfst du die Flächen als Gewichte nehmen.
  - 'Unten: Fläche $180\,\text{cm}^2$, Schwerpunkt bei $y_1 = 3\,\text{cm}$. Oben: Fläche $144\,\text{cm}^2$, Schwerpunkt bei $y_2 = 6\,\text{cm} + 12\,\text{cm}$.'
loesung: |
  **Ansatz:** Wir zerlegen in zwei Rechtecke und setzen sie als Massenpunkte in ihre Mittelpunkte. Bei gleicher Dicke ist die Masse proportional zur Fläche.
  ---
  **Teile:** Unten $30\,\text{cm}\cdot 6\,\text{cm} = 180\,\text{cm}^2$ mit $y_1 = 3\,\text{cm}$. Oben $6\,\text{cm}\cdot 24\,\text{cm} = 144\,\text{cm}^2$ mit $y_2 = 6\,\text{cm} + 12\,\text{cm} = 18\,\text{cm}$.
  ---
  **Formel:** $y_S = \dfrac{180\cdot 3 + 144\cdot 18}{324}\,\text{cm} = \dfrac{3132}{324}\,\text{cm} = 9{,}7\,\text{cm}$.
  ---
  **Plausibilität:** Der Wert liegt zwischen $3\,\text{cm}$ und $18\,\text{cm}$, etwas näher am größeren unteren Teil. Wegen der Symmetrie liegt der Schwerpunkt waagrecht in der Mitte, bei $x = 15\,\text{cm}$.
```

```aufgabe
id: p5-kippen
titel: Wann kippt der Schrank?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Schrank ist $0{,}60\,\text{m}$ tief und $2{,}0\,\text{m}$ hoch. Sein Schwerpunkt liegt in der Mitte, also $1{,}0\,\text{m}$ über dem Boden. Um welchen Winkel kann man ihn um eine untere Kante kippen, bevor er von selbst umfällt? Gib den Winkel in Grad mit einer Nachkommastelle an.
teile:
  - typ: zahl
    loesung: "inGrad(atan(0.30/1.0))"
    einheit: "°"
    anzeige: '16{,}7'
    fehler:
      - wert: "inGrad(atan(0.60/1.0))"
        meldung: |
          Du hast die ganze Tiefe genommen. Der Schwerpunkt liegt in der Mitte, also nur $0{,}30\,\text{m}$ von der Kippkante entfernt.
      - wert: "inGrad(atan(1.0/0.30))"
        meldung: |
          Der Bruch ist umgekehrt. Ein hoher, schmaler Schrank muss **leicht** kippen, also einen kleinen Winkel haben. Es gilt $\tan\alpha = \dfrac{\text{waagrechter Abstand}}{\text{Höhe des Schwerpunkts}}$.
hinweise:
  - Der Schrank fällt um, sobald sein Schwerpunkt genau über der Kippkante steht.
  - 'Im Stand liegt der Schwerpunkt waagrecht die halbe Tiefe von der Kante entfernt und $1{,}0\,\text{m}$ darüber. Diese beiden Strecken bilden ein rechtwinkliges Dreieck.'
gefuehrt:
  - text: Wie weit liegt der Schwerpunkt im Stand waagrecht von der Kippkante entfernt, in Metern?
    teil: { typ: zahl, loesung: "0.30", einheit: "m" }
    erklaerung: Der Schwerpunkt liegt in der Mitte der Tiefe, also $0{,}60\,\text{m}/2 = 0{,}30\,\text{m}$ von der Kante.
  - text: Überlege, wann genau der Schrank umfällt.
    erklaerung: Sobald die Linie von der Kante zum Schwerpunkt senkrecht steht. Dann trifft das Lot genau die Kante. Diese Linie war im Stand um den Kippwinkel gegen die Senkrechte geneigt.
  - text: Berechne $\tan\alpha$ als waagrechten Abstand durch die Höhe des Schwerpunkts.
    teil: { typ: zahl, loesung: "0.30/1.0" }
    erklaerung: $\tan\alpha = 0{,}30\,\text{m}/1{,}0\,\text{m} = 0{,}30$.
  - text: Berechne den Kippwinkel in Grad.
    teil: { typ: zahl, loesung: "inGrad(atan(0.30))", einheit: "°" }
    erklaerung: $\alpha = \arctan 0{,}30 = 16{,}7^\circ$.
loesung: |
  **Ansatz:** Der Schrank kippt zurück, solange das Lot durch den Schwerpunkt in der Standfläche liegt. Die Grenze ist erreicht, wenn der Schwerpunkt genau über der Kippkante steht.
  ---
  **Geometrie:** Im Stand liegt der Schwerpunkt $0{,}30\,\text{m}$ waagrecht neben der Kante und $1{,}0\,\text{m}$ darüber. Also $\tan\alpha = \dfrac{0{,}30\,\text{m}}{1{,}0\,\text{m}} = 0{,}30$.
  ---
  **Winkel:** $\alpha = \arctan 0{,}30 = 16{,}7^\circ$.
  ---
  **Deutung:** Ist das untere Fach voll, liegt der Schwerpunkt tiefer, und der Kippwinkel wird größer. Deshalb gehören schwere Dinge nach unten.
```

```aufgabe
id: p5-3-proportional
titel: Was ändert ein tieferer Schwerpunkt?
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine Kiste kippt bei $20^\circ$. Jetzt wird sie so umgepackt, dass ihr Schwerpunkt nur noch halb so hoch liegt. Die Standfläche bleibt gleich, der Schwerpunkt liegt weiterhin mittig.

  a) Um welchen Faktor ändert sich $\tan\alpha_{\text{kipp}}$?

  b) Wie groß ist der neue Kippwinkel in Grad? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Faktor für den Tangens
    loesung: "2"
    fehler:
      - wert: "0.5"
        meldung: |
          Die Höhe steht im **Nenner** von $\tan\alpha = (b/2)/h_S$. Halbiert man den Nenner, verdoppelt sich der Bruch.
  - typ: zahl
    label: b) neuer Kippwinkel
    loesung: "inGrad(atan(2*tan(inRad(20))))"
    einheit: "°"
    anzeige: '36{,}1'
    fehler:
      - wert: "40"
        meldung: |
          Verdoppelt hat sich der **Tangens**, nicht der Winkel. Der Tangens wächst nicht proportional zum Winkel. Rechne $\alpha = \arctan(2\cdot\tan 20^\circ)$.
hinweise:
  - 'Schreib $\tan\alpha_{\text{kipp}} = \dfrac{b/2}{h_S}$ auf und überlege, was passiert, wenn $h_S$ halbiert wird.'
  - 'Für b): $\tan 20^\circ = 0{,}364$. Verdopple diesen Wert und bilde den Arkustangens.'
loesung: |
  **Ansatz:** Der Kippwinkel folgt aus $\tan\alpha_{\text{kipp}} = \dfrac{b/2}{h_S}$. Die Breite bleibt, nur $h_S$ ändert sich.
  ---
  **a)** $h_S$ steht im Nenner. Wird $h_S$ halbiert, verdoppelt sich $\tan\alpha_{\text{kipp}}$. Der Faktor ist $2$.
  ---
  **b)** Vorher $\tan 20^\circ = 0{,}364$, nachher $2\cdot 0{,}364 = 0{,}728$. Also $\alpha = \arctan 0{,}728 = 36{,}1^\circ$.
  ---
  **Deutung:** Der Winkel wächst deutlich, aber nicht auf das Doppelte. Doppelter Tangens heißt nicht doppelter Winkel.
```

```aufgabe
id: p5-3-messreihe
titel: Den Schwerpunkt messen
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein gleichmäßig dicker, $1{,}00\,\text{m}$ langer Stab hat die Masse $0{,}30\,\text{kg}$. Am Ende bei $x = 0$ ist eine Klemme mit $0{,}05\,\text{kg}$ befestigt. Eine Gruppe balanciert den Stab fünfmal auf einer Schneide und misst jeweils die Lage des Schwerpunkts:

  | Messung | 1 | 2 | 3 | 4 | 5 |
  |---|---|---|---|---|---|
  | $x_S$ in cm | 42,6 | 43,2 | 42,7 | 43,1 | 42,9 |

  a) Berechne den Mittelwert der Messreihe in cm.

  b) Berechne die Unsicherheit des Mittelwerts $u = s/\sqrt{n}$ in cm. Dabei ist $s$ die Standardabweichung der Messreihe (mit $n - 1$ im Nenner). Runde auf zwei Nachkommastellen.

  c) Berechne den theoretischen Wert von $x_S$ in cm und entscheide, ob die Messung damit verträglich ist.
teile:
  - typ: zahl
    label: a) Mittelwert
    loesung: "(42.6+43.2+42.7+43.1+42.9)/5"
    einheit: "cm"
    anzeige: '42{,}9'
  - typ: zahl
    label: b) Unsicherheit des Mittelwerts
    loesung: "sqrt(((42.6-42.9)^2+(43.2-42.9)^2+(42.7-42.9)^2+(43.1-42.9)^2+(42.9-42.9)^2)/4)/sqrt(5)"
    einheit: "cm"
    anzeige: '0{,}11'
    toleranz: 0.006
    fehler:
      - wert: "sqrt(((42.6-42.9)^2+(43.2-42.9)^2+(42.7-42.9)^2+(43.1-42.9)^2+(42.9-42.9)^2)/4)"
        meldung: |
          Das ist die Standardabweichung $s$ der einzelnen Messungen. Die Unsicherheit des **Mittelwerts** ist kleiner, denn sie wird noch durch $\sqrt{5}$ geteilt.
  - typ: zahl
    label: c) theoretischer Wert
    loesung: "(0.30*50 + 0.05*0)/(0.30+0.05)"
    einheit: "cm"
    anzeige: '42{,}86'
    fehler:
      - wert: "50"
        meldung: |
          $50\,\text{cm}$ ist die Mitte des Stabs allein. Die Klemme bei $x = 0$ zieht den Schwerpunkt nach links.
hinweise:
  - 'Für b): Bilde die Abweichungen vom Mittelwert, quadriere sie, addiere, teile durch $n - 1 = 4$ und ziehe die Wurzel. Das ist $s$.'
  - 'Für c): Der Stab zählt als $0{,}30\,\text{kg}$ bei $50\,\text{cm}$, die Klemme als $0{,}05\,\text{kg}$ bei $0$. Verträglich heißt: Der theoretische Wert liegt höchstens etwa zwei Unsicherheiten vom Mittelwert entfernt.'
loesung: |
  **a) Mittelwert:** $\bar x = \dfrac{42{,}6 + 43{,}2 + 42{,}7 + 43{,}1 + 42{,}9}{5}\,\text{cm} = \dfrac{214{,}5}{5}\,\text{cm} = 42{,}9\,\text{cm}$.
  ---
  **b) Streuung:** Die Abweichungen sind $-0{,}3$, $0{,}3$, $-0{,}2$, $0{,}2$ und $0$ (in cm). Ihre Quadrate ergeben zusammen $0{,}26\,\text{cm}^2$. Also $s = \sqrt{0{,}26/4}\,\text{cm} = 0{,}255\,\text{cm}$ und $u = \dfrac{0{,}255\,\text{cm}}{\sqrt 5} = 0{,}11\,\text{cm}$. Das Messergebnis lautet $x_S = (42{,}9 \pm 0{,}1)\,\text{cm}$.
  ---
  **c) Theorie:** $x_S = \dfrac{0{,}30\,\text{kg}\cdot 50\,\text{cm} + 0{,}05\,\text{kg}\cdot 0}{0{,}35\,\text{kg}} = \dfrac{15\,\text{kg}\,\text{cm}}{0{,}35\,\text{kg}} = 42{,}86\,\text{cm}$.
  ---
  **Vergleich:** Der Unterschied beträgt $42{,}9\,\text{cm} - 42{,}86\,\text{cm} = 0{,}04\,\text{cm}$. Das ist weniger als eine Unsicherheit von $0{,}11\,\text{cm}$. Messung und Theorie sind verträglich. Wiederholen kannst du die Auswertung im Abschnitt [Messreihen auswerten: Mittelwert und Standardabweichung](/lernen/physik1/groessen-einheiten-messen/messreihen-auswerten-mittelwert-und-standardabweichung).
```

## Hebel, Wellrad und Zahnräder

```aufgabe
id: p5-4-check
art: check
titel: "Vorwissen: Eine Formel nach einer Größe umstellen"
niveau: 1
angabe: |
  Im Hebelgesetz $F\cdot a = G\cdot b$ sind $G = 900\,\text{N}$, $b = 0{,}20\,\text{m}$ und $F = 150\,\text{N}$ bekannt. Wie groß ist $a$ in Metern?
teile:
  - typ: zahl
    loesung: "900*0.20/150"
    einheit: "m"
    anzeige: '1{,}2'
    fehler:
      - wert: "150*0.20/900"
        meldung: |
          Du hast $F$ und $G$ vertauscht. Teile beide Seiten von $F\cdot a = G\cdot b$ durch $F$. Dann steht $a$ allein: $a = \dfrac{G\cdot b}{F}$.
hinweise:
  - 'Teile beide Seiten der Gleichung durch $F$.'
loesung: |
  Wir teilen beide Seiten von $F\cdot a = G\cdot b$ durch $F$, damit $a$ allein steht: $a = \dfrac{G\cdot b}{F}$.
  ---
  $a = \dfrac{900\,\text{N}\cdot 0{,}20\,\text{m}}{150\,\text{N}} = 1{,}2\,\text{m}$. Wiederholen kannst du das in Mathematik im Abschnitt [Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen).
```

Ein **Hebel** ist ein starrer Körper, der sich um eine feste Achse drehen kann. Die Achse heißt
**Drehpunkt** oder **Lager**. Eine Brechstange auf einem Stein, eine Schere und eine Wippe sind Hebel.
**Kein** Hebel ist ein Seil, das über einen Balken gelegt ist: Es ist nicht starr und kann deshalb kein
Drehmoment weitergeben.

Am Hebel greifen zwei Kräfte an. Die **Kraft** $F$ ist die Kraft, die du aufbringst. Die **Last** $G$ ist die
Kraft, die überwunden werden soll, zum Beispiel das Gewicht eines Steins. Der Hebelarm der Kraft heißt
**Kraftarm** $a$, der Hebelarm der Last heißt **Lastarm** $b$. Im Gleichgewicht müssen die beiden
Drehmomente gleich groß sein. Das kennst du schon aus dem Abschnitt
[Gleichgewicht des starren Körpers](/lernen/physik1/drehbewegung-einfache-maschinen/gleichgewicht-des-starren-koerpers).

:::satz[Hebelgesetz]
Ein Hebel ist im Gleichgewicht, wenn Kraft mal Kraftarm gleich Last mal Lastarm ist:
$$F\cdot a = G\cdot b, \qquad\text{also}\qquad F = G\cdot\frac{b}{a}.$$
Die Kräfte verhalten sich umgekehrt wie die Hebelarme. Doppelter Kraftarm heißt halbe Kraft.
:::

### Zweiseitiger und einseitiger Hebel

Beim **zweiseitigen Hebel** liegt der Drehpunkt **zwischen** Kraft und Last. Beide Kräfte zeigen in dieselbe
Richtung. Beispiele sind die Brechstange, die Wippe, die Schere und die Zange.

Beim **einseitigen Hebel** liegt der Drehpunkt an einem **Ende**. Kraft und Last greifen auf derselben Seite
an und zeigen in entgegengesetzte Richtungen. Liegt die Last näher am Drehpunkt, sparst du Kraft. Beispiele
sind die Schubkarre, der Nussknacker und der Flaschenöffner. Liegt die Kraft näher am Drehpunkt, brauchst
du **mehr** Kraft als die Last, gewinnst aber Weg und Geschwindigkeit. Beispiele sind der Unterarm mit dem
Bizeps, die Pinzette und die Angelrute.

```plot
x: [-0.5, 6.8]
y: [-2.9, 2.2]
gleich: true
strecken:
  - { von: [0, 1], nach: [6, 1], farbe: 3 }
  - { von: [0, -1.8], nach: [6, -1.8], farbe: 3 }
vektoren:
  - { von: [0, 1], nach: [0, 0], label: "Last G", farbe: 0 }
  - { von: [6, 1], nach: [6, 0.8], label: "Kraft F", farbe: 1 }
  - { von: [2, -1.8], nach: [2, -2.8], label: "Last G", farbe: 0 }
  - { von: [6, -1.8], nach: [6, -1.47], label: "Kraft F", farbe: 1 }
punkte:
  - { x: 1, y: 1, label: "Drehpunkt" }
  - { x: 0.5, y: 1.35, label: "b" }
  - { x: 3.5, y: 1.35, label: "a" }
  - { x: 0, y: -1.8, label: "Drehpunkt" }
beschriftung: "Oben ein zweiseitiger Hebel wie eine Brechstange: Der Drehpunkt liegt zwischen Last (links, Lastarm b) und Kraft (rechts, Kraftarm a = 5 b), beide zeigen nach unten. Unten ein einseitiger Hebel wie eine Schubkarre: Der Drehpunkt liegt am linken Ende, die Last zieht in der Mitte nach unten, die Kraft am rechten Ende hebt nach oben. In beiden Bildern ist die Kraft kleiner als die Last, weil der Kraftarm länger ist."
```

:::beispiel[Ein Nussknacker]
Eine Walnuss liegt im Nussknacker $3{,}0\,\text{cm}$ vom Gelenk entfernt. Um sie zu knacken, braucht man
eine Kraft von $250\,\text{N}$ auf die Schale. Deine Hand drückt $15\,\text{cm}$ vom Gelenk entfernt.

**Schritt 1, Hebelart:** Das Gelenk sitzt am Ende, Nuss und Hand liegen auf derselben Seite. Es ist ein
einseitiger Hebel. Die Kräfte stehen senkrecht auf den Griffen, die Hebelarme sind die Abstände zum Gelenk.

**Schritt 2, Hebelgesetz:** $F\cdot 15\,\text{cm} = 250\,\text{N}\cdot 3{,}0\,\text{cm}$. Die Einheit
Zentimeter steht auf beiden Seiten und kürzt sich, wir müssen nicht umrechnen.

**Schritt 3, auflösen:** $F = 250\,\text{N}\cdot\dfrac{3{,}0\,\text{cm}}{15\,\text{cm}} = 50\,\text{N}$.

**Antwort:** Du brauchst nur $50\,\text{N}$, ein Fünftel der Knackkraft. Probe:
$50\,\text{N}\cdot 0{,}15\,\text{m} = 250\,\text{N}\cdot 0{,}03\,\text{m} = 7{,}5\,\text{N}\,\text{m}$.
:::

:::achtung[Fehler: ganze Stangenlänge als Kraftarm]
Eine $1{,}8\,\text{m}$ lange Brechstange liegt $0{,}15\,\text{m}$ vom Stein entfernt auf einem Klotz. Der
Stein drückt mit $900\,\text{N}$. Falsch gerechnet: $F = 900\,\text{N}\cdot\dfrac{0{,}15\,\text{m}}{1{,}8\,\text{m}} = 75\,\text{N}$.

Der Kraftarm reicht vom Drehpunkt bis zur Hand, nicht vom Stangenende bis zur Hand. Er ist
$1{,}8\,\text{m} - 0{,}15\,\text{m} = 1{,}65\,\text{m}$ lang. Richtig ist
$F = 900\,\text{N}\cdot\dfrac{0{,}15\,\text{m}}{1{,}65\,\text{m}} = 82\,\text{N}$. Miss jeden Hebelarm
**vom Drehpunkt aus**.
:::

### Kraft gespart, Weg verloren

Ein Hebel ist ein **Kraftwandler**. Was du an Kraft sparst, bezahlst du mit Weg. Drückst du beim Nussknacker
die Griffe $1{,}0\,\text{cm}$ zusammen, bewegen sich die Backen an der Nuss nur $0{,}2\,\text{cm}$. Denn beide
Punkte drehen sich um denselben Winkel, und der Weg auf einem Kreisbogen ist proportional zum Abstand vom
Drehpunkt. Das Kraftverhältnis $1 : 5$ ist genau das Umgekehrte des Wegverhältnisses $5 : 1$. Das ist die
goldene Regel der Mechanik. Wir sehen sie uns im Abschnitt
[Goldene Regel der Mechanik und Wirkungsgrad](/lernen/physik1/drehbewegung-einfache-maschinen/goldene-regel-der-mechanik-und-wirkungsgrad)
genau an.

```aufgabe
id: p5-4-vorhersage
art: check
titel: "Vorhersage: doppelter Kraftarm"
niveau: 1
angabe: |
  Im Widget direkt nach dieser Frage hebst du eine Last $G$ am Lastarm $b$. Die Kurve zeigt die nötige Kraft $F$ in Abhängigkeit vom Kraftarm $x$. Sag voraus, bevor du den Regler bewegst: Was passiert mit der nötigen Kraft, wenn du den Kraftarm von $0{,}5\,\text{m}$ auf $1{,}0\,\text{m}$ verdoppelst?
teile:
  - typ: auswahl
    optionen:
      - "Die Kraft halbiert sich."
      - "Die Kraft verdoppelt sich."
      - "Die Kraft wird ein Viertel so groß."
      - "Die Kraft bleibt gleich, weil sich die Last nicht ändert."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein längerer Kraftarm hilft, er macht die Arbeit leichter. Aus $F\cdot a = G\cdot b$ folgt: Wird $a$ doppelt so groß, muss $F$ halb so groß werden, damit das Produkt gleich bleibt.
      - wert: 2
        meldung: |
          Der Kraftarm geht nicht quadratisch ein. $F = G b/a$ ist **umgekehrt proportional** zu $a$. Doppeltes $a$ gibt halbes $F$.
      - wert: 3
        meldung: |
          Die Last bleibt gleich, aber ihr Drehmoment muss durch ein gleich großes Drehmoment $F\cdot a$ ausgeglichen werden. Bei größerem $a$ genügt ein kleineres $F$.
hinweise:
  - 'Löse $F\cdot a = G\cdot b$ nach $F$ auf und setze $2a$ statt $a$ ein.'
loesung: |
  Aus dem Hebelgesetz folgt $F = \dfrac{G\cdot b}{a}$. Der Kraftarm steht im Nenner.
  ---
  Doppelter Kraftarm heißt halbe Kraft. Man sagt: $F$ ist **umgekehrt proportional** zu $a$. Prüfe es im Widget.
```

```widget
name: parameter
titel: Nötige Kraft am Hebel in Abhängigkeit vom Kraftarm
props:
  f: "G*b/x"
  parameter:
    - { name: G, min: 100, max: 2000, step: 50, wert: 1200 }
    - { name: b, min: 0.05, max: 0.5, step: 0.01, wert: 0.1 }
  x: [0.1, 2]
  y: [0, 1500]
```

**Arbeitsauftrag zum Widget.** Die waagrechte Achse ist der Kraftarm $x$ in Metern, die senkrechte Achse die
nötige Kraft $F$ in Newton. Lies zuerst die Kraft bei $x = 0{,}5\,\text{m}$ ab, dann bei $x = 1{,}0\,\text{m}$.
Hat sich deine Vorhersage bestätigt? Verdopple dann den Lastarm $b$ mit dem Regler. Beobachte: Die ganze
Kurve wird doppelt so hoch. Erkläre mit $F = G b/x$, warum. Solche Kurven heißen **Hyperbeln**. Mehr dazu
findest du in Mathematik im Abschnitt [Potenz- und Polynomfunktionen](/lernen/mathe3/funktionen/potenz-und-polynomfunktionen)
(Potenzfunktion mit der Hochzahl $-1$, also $\tfrac1x$).

### Hebel im Alltag und im Körper

Die **Balkenwaage** ist ein zweiseitiger Hebel mit gleich langen Armen. Sie ist genau dann im Gleichgewicht,
wenn auf beiden Seiten gleich große Massen liegen. Sie vergleicht Massen. Auf dem Mond zeigt sie deshalb
dasselbe an wie auf der Erde. Eine Federwaage dagegen misst die Gewichtskraft und zeigt auf dem Mond etwa ein
Sechstel an.

Auch dein Körper ist voller Hebel. Knochen sind die starren Stangen, Gelenke die Drehpunkte, und Muskeln
liefern die Kraft. Fast immer greifen die Muskeln sehr nahe am Gelenk an. Der Kraftarm ist kurz, der Muskel
braucht also eine große Kraft. Dafür bewegt eine kleine Verkürzung des Muskels die Hand um einen großen Weg
und mit hoher Geschwindigkeit.

### Das Wellrad

Ein **Wellrad** besteht aus zwei fest miteinander verbundenen Rädern mit verschiedenen Radien auf derselben
Achse. Beispiele sind die Kurbel mit Seilwelle am Brunnen, das Lenkrad mit der Lenksäule und der Griff
eines Schraubendrehers. Das Wellrad ist ein Hebel, der sich beliebig oft herumdrehen lässt. Greift die Kraft
$F$ am großen Radius $R$ an und die Last $G$ am kleinen Radius $r$, so gilt
$$F\cdot R = G\cdot r.$$
Dabei sind $R$ und $r$ die Hebelarme, denn die Kräfte greifen tangential am Rad an, also senkrecht zum Radius.

:::beispiel[Die Brunnenkurbel]
Ein Eimer mit $15\,\text{kg}$ hängt an einem Seil, das auf eine Welle mit $6{,}0\,\text{cm}$ Radius gewickelt
wird. Die Kurbel hat einen Radius von $36\,\text{cm}$.

**Schritt 1, Last:** $G = 15\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 147\,\text{N}$.

**Schritt 2, Kraft an der Kurbel:** $F = G\cdot\dfrac{r}{R} = 147\,\text{N}\cdot\dfrac{6{,}0\,\text{cm}}{36\,\text{cm}} = 24{,}5\,\text{N}$.

**Schritt 3, Wege bei einer Umdrehung:** Die Hand läuft einen Kreis mit dem Umfang
$2\pi\cdot 0{,}36\,\text{m} = 2{,}26\,\text{m}$. Das Seil wickelt $2\pi\cdot 0{,}06\,\text{m} = 0{,}377\,\text{m}$
auf, um so viel steigt der Eimer.

**Antwort:** Du brauchst ein Sechstel der Kraft, legst aber den sechsfachen Weg zurück.
:::

### Zahnräder und Übersetzung

**Zahnräder** und **Riemen** übertragen eine Drehung von einer Achse auf eine andere. Diese Stelle ist
anspruchsvoll, darum gehen wir sie in kleinen Schritten durch.

1. **Worum geht es?** Ein kleines Zahnrad mit $z_1$ Zähnen treibt ein großes mit $z_2$ Zähnen an. Wie
   schnell dreht sich das große, und wie stark dreht es?
2. **Bild:** Zwei Zahnräder, die ineinandergreifen. An der Berührstelle schiebt sich Zahn für Zahn
   vorbei.
3. **Drehzahl:** In einer Umdrehung des kleinen Rads laufen $z_1$ Zähne an der Berührstelle vorbei. Das große
   Rad dreht sich dabei nur um $z_1$ seiner $z_2$ Zähne weiter. Also gilt für die **Drehzahlen**, die
   Umdrehungen pro Zeit: $\dfrac{n_2}{n_1} = \dfrac{z_1}{z_2}$.
4. **Drehmoment:** An der Berührstelle drücken die Zähne mit derselben Kraft $F$ gegeneinander (actio gleich
   reactio). Die Radien sind proportional zu den Zähnezahlen, weil alle Zähne gleich breit sind und der Umfang
   deshalb mit der Zähnezahl wächst. Also ist $M_1 = F r_1$ und $M_2 = F r_2$, und es
   folgt $\dfrac{M_2}{M_1} = \dfrac{z_2}{z_1}$.
5. **In Worten:** Was das große Rad an Drehzahl verliert, gewinnt es an Drehmoment, und umgekehrt.

:::beispiel[Ein Getriebe untersetzt]
Ein Motor dreht sich mit $1500$ Umdrehungen pro Minute und gibt ein Drehmoment von $8{,}0\,\text{N}\,\text{m}$
ab. Sein Ritzel hat $15$ Zähne und treibt ein Zahnrad mit $45$ Zähnen an. Reibung vernachlässigen wir.

**Schritt 1, Übersetzung:** $z_2/z_1 = 45/15 = 3$.

**Schritt 2, Drehzahl:** $n_2 = n_1\cdot\dfrac{z_1}{z_2} = 1500\,\text{min}^{-1}\cdot\dfrac{15}{45} = 500\,\text{min}^{-1}$.

**Schritt 3, Drehmoment:** $M_2 = M_1\cdot\dfrac{z_2}{z_1} = 8{,}0\,\text{N}\,\text{m}\cdot 3 = 24\,\text{N}\,\text{m}$.

**Antwort:** Das große Rad dreht dreimal langsamer, aber mit dreifachem Drehmoment. So arbeiten das
Autogetriebe im ersten Gang und der „leichte Gang“ am Fahrrad.
:::

:::achtung[Fehler: Übersetzung verkehrt herum]
Ein Zahnrad mit $12$ Zähnen dreht sich mit $900$ Umdrehungen pro Minute und treibt ein Rad mit $36$ Zähnen an.
Falsch gerechnet: $n_2 = 900\,\text{min}^{-1}\cdot\dfrac{36}{12} = 2700\,\text{min}^{-1}$.

Ein großes Rad, das von einem kleinen angetrieben wird, dreht sich **langsamer**, nicht schneller. Richtig ist
$n_2 = 900\,\text{min}^{-1}\cdot\dfrac{12}{36} = 300\,\text{min}^{-1}$. Kontrolle mit dem Bild: Das kleine Rad
muss sich dreimal drehen, bis alle $36$ Zähne des großen einmal vorbeigekommen sind.
:::

Beim **Fahrrad** treibt das vordere Kettenblatt über die Kette das hintere Ritzel. Mit $50$ Zähnen vorn und
$12$ hinten dreht sich das Hinterrad $50/12 = 4{,}17$-mal pro Kurbelumdrehung. Das ist ein schneller Gang
für die Ebene. Am Berg schaltet man hinten auf ein großes Ritzel, zum Beispiel mit $25$ Zähnen. Dann dreht
sich das Rad nur noch zweimal pro Kurbelumdrehung, dafür ist das Drehmoment am Rad mehr als doppelt so groß.

:::merke
**Hebel, Wellrad und Zahnrad in einer Regel**

- Hebel: $F\cdot a = G\cdot b$, alle Hebelarme vom Drehpunkt aus messen.
- Wellrad: $F\cdot R = G\cdot r$, die Radien sind die Hebelarme.
- Zahnräder: $n_2/n_1 = z_1/z_2$ und $M_2/M_1 = z_2/z_1$.
- Kontrolle: Wo die Kraft oder das Drehmoment größer wird, wird der Weg oder die Drehzahl im selben
  Verhältnis kleiner.
:::

```reflexion
frage: Warum gewinnt ein Zahnradgetriebe, das die Drehzahl auf ein Drittel senkt, genau den Faktor 3 beim Drehmoment und nicht mehr? Erkläre mit der Kraft an der Berührstelle.
antwort: |
  An der Berührstelle drücken die Zähne beider Räder mit derselben Kraft gegeneinander, das ist actio gleich reactio.
  Das Drehmoment ist diese Kraft mal Radius. Das große Rad hat den dreifachen Radius, also das dreifache Drehmoment.
  Mehr kann es nicht sein, denn die Kraft ist an beiden Rädern dieselbe. Ohne Reibung bleibt so auch die Leistung,
  Drehmoment mal Winkelgeschwindigkeit, gleich: dreifaches Drehmoment mal ein Drittel der Winkelgeschwindigkeit.
```

### Aufgaben zu Hebel, Wellrad und Zahnrad

```aufgabe
id: p5-hebelart
titel: Welche Hebelart?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Bei welchen Werkzeugen liegt der Drehpunkt **zwischen** Kraft und Last, sodass sie zweiseitige Hebel sind? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Schere"
      - "Nussknacker"
      - "Kombizange"
      - "Schubkarre"
      - "Balkenwaage"
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          Beim Nussknacker sitzt das Gelenk am Ende. Nuss und Hand liegen auf derselben Seite davon. Er ist ein **einseitiger** Hebel.
      - wert: [0, 2, 3, 4]
        meldung: |
          Bei der Schubkarre ist die Radachse der Drehpunkt, und sie liegt am Ende. Ladung und Griffe sind auf derselben Seite. Sie ist ein **einseitiger** Hebel.
hinweise:
  - Suche bei jedem Werkzeug zuerst den Drehpunkt. Liegt er am Ende oder in der Mitte?
loesung: |
  **Kriterium:** Beim zweiseitigen Hebel liegt der Drehpunkt zwischen Kraft und Last. Bei Schere, Zange und Balkenwaage ist das Gelenk oder die Achse zwischen Hand und Schneide beziehungsweise zwischen den beiden Waagschalen.
  ---
  **Einseitig:** Nussknacker und Schubkarre haben den Drehpunkt am Ende. Die Last liegt zwischen Drehpunkt und Hand.
```

```aufgabe
id: p5-wellrad
titel: Brunnenkurbel
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Bei einem Brunnen wird ein Eimer mit der Gewichtskraft $400\,\text{N}$ hochgezogen. Das Seil wird auf eine Welle mit $5{,}0\,\text{cm}$ Radius gewickelt. Die Kurbel hat einen Radius von $40\,\text{cm}$. Welche Kraft ist an der Kurbel nötig?
teile:
  - typ: zahl
    loesung: "400*0.05/0.40"
    einheit: "N"
    anzeige: '50'
    fehler:
      - wert: "400*40/5"
        meldung: |
          Der Bruch ist umgekehrt. Die Kurbel ist der **lange** Hebelarm, an ihr braucht man **weniger** Kraft als die Last. Es gilt $F = G\cdot r/R$.
hinweise:
  - 'Wellrad: $F\cdot R = G\cdot r$. Die Kurbel hat den großen Radius $R$, die Welle den kleinen Radius $r$.'
loesung: |
  **Ansatz:** Das Wellrad ist ein Hebel mit den Radien als Hebelarmen: $F\cdot R = G\cdot r$.
  ---
  **Rechnung:** $F = G\cdot\dfrac{r}{R} = 400\,\text{N}\cdot\dfrac{5{,}0\,\text{cm}}{40\,\text{cm}} = 50\,\text{N}$. Die Zentimeter kürzen sich.
```

```aufgabe
id: p5-brechstange
titel: Brechstange
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Mit einer $1{,}5\,\text{m}$ langen Brechstange soll ein Stein angehoben werden, der mit $1200\,\text{N}$ auf das kurze Ende drückt. Der Drehpunkt liegt $10\,\text{cm}$ vom Stein entfernt. Welche Kraft ist am anderen Ende nötig? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "1200*0.10/1.40"
    einheit: "N"
    anzeige: '85{,}7'
    fehler:
      - wert: "1200*0.10/1.5"
        meldung: |
          Du hast die ganze Stangenlänge als Kraftarm genommen. Der Kraftarm reicht vom **Drehpunkt** bis zur Hand: $1{,}5\,\text{m} - 0{,}10\,\text{m}$.
      - wert: "1200*1.40/0.10"
        meldung: |
          Der Bruch ist umgekehrt. Am langen Arm braucht man **weniger** Kraft als die Last, nicht mehr.
hinweise:
  - Zeichne die Stange mit Drehpunkt, Stein und Hand. Miss beide Arme vom Drehpunkt aus.
  - 'Lastarm $b = 0{,}10\,\text{m}$, Kraftarm $a = 1{,}5\,\text{m} - 0{,}10\,\text{m}$. Dann gilt $F = G\cdot b/a$.'
loesung: |
  **Ansatz:** Die Brechstange ist ein zweiseitiger Hebel. Es gilt $F\cdot a = G\cdot b$, mit beiden Armen vom Drehpunkt aus gemessen.
  ---
  **Arme:** Lastarm $b = 0{,}10\,\text{m}$, Kraftarm $a = 1{,}5\,\text{m} - 0{,}10\,\text{m} = 1{,}40\,\text{m}$.
  ---
  **Rechnung:** $F = 1200\,\text{N}\cdot\dfrac{0{,}10\,\text{m}}{1{,}40\,\text{m}} = 85{,}7\,\text{N}$. Probe: $85{,}7\,\text{N}\cdot 1{,}40\,\text{m} = 120\,\text{N}\,\text{m} = 1200\,\text{N}\cdot 0{,}10\,\text{m}$.
```

```aufgabe
id: p5-schubkarre
titel: Schubkarre
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Die Ladung einer Schubkarre hat die Gewichtskraft $600\,\text{N}$. Ihr Schwerpunkt liegt waagrecht $40\,\text{cm}$ hinter der Radachse. Du hebst die Karre an den Griffen, die waagrecht $1{,}40\,\text{m}$ von der Achse entfernt sind. Das Gewicht der Karre selbst vernachlässigen wir. Welche Kraft brauchst du an den Griffen, und welche Kraft trägt das Rad? Runde auf ganze Newton.
teile:
  - typ: zahl
    label: Kraft an den Griffen
    loesung: "600*0.40/1.40"
    einheit: "N"
    anzeige: '171'
    fehler:
      - wert: "600*0.40/1.0"
        meldung: |
          Du hast den Abstand zwischen Ladung und Griffen als Kraftarm genommen. Der Drehpunkt ist aber die **Radachse**. Der Kraftarm ist der Abstand von der Achse bis zu den Griffen.
  - typ: zahl
    label: Kraft auf das Rad
    loesung: "600-600*0.40/1.40"
    einheit: "N"
    anzeige: '429'
    fehler:
      - wert: "600"
        meldung: |
          Das Rad trägt nicht alles. Einen Teil der Last trägst du an den Griffen. Das Rad trägt nur den Rest.
hinweise:
  - Die Schubkarre ist ein einseitiger Hebel. Der Drehpunkt ist die Radachse.
  - 'Drehmomente um die Radachse: $F\cdot 1{,}40\,\text{m} = 600\,\text{N}\cdot 0{,}40\,\text{m}$. Die Kraft auf das Rad folgt danach aus dem Kräftegleichgewicht.'
gefuehrt:
  - text: Wo liegt der Drehpunkt dieses Hebels, und warum wählen wir ihn als Bezugspunkt?
    erklaerung: In der Radachse. Dort greift die unbekannte Kraft des Rads an. Als Bezugspunkt fällt sie aus der Drehmomentgleichung heraus.
  - text: Wie groß ist das Drehmoment der Ladung um die Radachse in $\text{N}\,\text{m}$?
    teil: { typ: zahl, loesung: "600*0.40", einheit: "N·m" }
    erklaerung: $600\,\text{N}\cdot 0{,}40\,\text{m} = 240\,\text{N}\,\text{m}$.
  - text: Welche Kraft an den Griffen gleicht dieses Drehmoment aus? Antwort in Newton.
    teil: { typ: zahl, loesung: "240/1.40", einheit: "N" }
    erklaerung: $F = 240\,\text{N}\,\text{m}/1{,}40\,\text{m} = 171\,\text{N}$.
  - text: Wie viel trägt das Rad? Antwort in Newton.
    teil: { typ: zahl, loesung: "600-240/1.40", einheit: "N" }
    erklaerung: Hand und Rad tragen zusammen $600\,\text{N}$. Das Rad trägt $600\,\text{N} - 171\,\text{N} = 429\,\text{N}$.
loesung: |
  **Ansatz:** Einseitiger Hebel mit dem Drehpunkt in der Radachse. Als Bezugspunkt gewählt, fällt die Radkraft heraus.
  ---
  **Griffe:** $F\cdot 1{,}40\,\text{m} = 600\,\text{N}\cdot 0{,}40\,\text{m} = 240\,\text{N}\,\text{m}$, also $F = 171\,\text{N}$.
  ---
  **Rad:** Kräftegleichgewicht senkrecht: $F_{\text{Rad}} = 600\,\text{N} - 171\,\text{N} = 429\,\text{N}$.
  ---
  **Deutung:** Je weiter vorn, also näher am Rad, die Ladung liegt, desto leichter geht es. Deshalb belädt man eine Schubkarre vorn.
```

```aufgabe
id: p5-fahrrad
titel: Fahrradschaltung
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Radfahrer tritt mit $60$ Kurbelumdrehungen pro Minute. Das Kettenblatt hat $44$ Zähne, das Ritzel am Hinterrad $11$ Zähne. Der Umfang des Hinterrads beträgt $2{,}10\,\text{m}$. Wie schnell fährt er in km/h? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "60*44/11*2.10/60*3.6"
    einheit: "km/h"
    anzeige: '30{,}2'
    fehler:
      - wert: "60*11/44*2.10/60*3.6"
        meldung: |
          Die Übersetzung ist umgekehrt. Das kleine Ritzel hinten dreht sich **schneller** als das große Kettenblatt vorn, nämlich $44/11 = 4$-mal pro Kurbelumdrehung.
      - wert: "60*44/11*2.10/60"
        meldung: |
          Das ist die Geschwindigkeit in m/s. Gefragt ist km/h. Multipliziere mit $3{,}6$.
hinweise:
  - 'Übersetzung: Das Hinterrad dreht sich $44/11 = 4$-mal pro Kurbelumdrehung.'
  - Bei jeder Umdrehung rollt das Fahrrad um einen Radumfang weiter. Rechne die Drehzahl in Umdrehungen pro Sekunde um.
loesung: |
  **Ansatz:** Kette und Zahnräder übertragen die Drehung mit $n_2/n_1 = z_1/z_2$. Das Rad rollt pro Umdrehung einen Umfang weit.
  ---
  **Drehzahl des Hinterrads:** $n_2 = 60\,\text{min}^{-1}\cdot\dfrac{44}{11} = 240\,\text{min}^{-1} = 4{,}0\,\text{s}^{-1}$.
  ---
  **Geschwindigkeit:** $v = 4{,}0\,\text{s}^{-1}\cdot 2{,}10\,\text{m} = 8{,}40\,\text{m/s} = 8{,}40\cdot 3{,}6\,\text{km/h} = 30{,}2\,\text{km/h}$.
```

```aufgabe
id: p5-4-getriebe
titel: Ein Getriebe für eine Seilwinde
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Elektromotor dreht sich mit $2400$ Umdrehungen pro Minute und gibt ein Drehmoment von $5{,}0\,\text{N}\,\text{m}$ ab. Sein Ritzel mit $16$ Zähnen treibt ein Zahnrad mit $64$ Zähnen an, das die Seiltrommel trägt. Reibung vernachlässigen wir.

  a) Mit welcher Drehzahl dreht sich die Seiltrommel, in Umdrehungen pro Minute?

  b) Welches Drehmoment wirkt an der Seiltrommel, in $\text{N}\,\text{m}$?
teile:
  - typ: zahl
    label: a) Drehzahl der Trommel
    loesung: "2400*16/64"
    einheit: "1/min"
    anzeige: '600'
    fehler:
      - wert: "2400*64/16"
        meldung: |
          Das große Rad dreht sich **langsamer** als das kleine, das es antreibt. Also wird mit $z_1/z_2 = 16/64$ multipliziert.
  - typ: zahl
    label: b) Drehmoment an der Trommel
    loesung: "5.0*64/16"
    einheit: "N·m"
    anzeige: '20'
    fehler:
      - wert: "5.0*16/64"
        meldung: |
          Wo die Drehzahl sinkt, steigt das Drehmoment. Das große Rad hat den vierfachen Radius und bei gleicher Zahnkraft das vierfache Drehmoment.
hinweise:
  - Bestimme zuerst das Verhältnis der Zähnezahlen. Welches Rad dreht sich schneller?
  - 'Es gilt $n_2/n_1 = z_1/z_2$ und $M_2/M_1 = z_2/z_1$.'
loesung: |
  **Ansatz:** An der Berührstelle laufen gleich viele Zähne vorbei, und die Zähne drücken mit gleicher Kraft. Daraus folgen $n_2/n_1 = z_1/z_2$ und $M_2/M_1 = z_2/z_1$. Hier ist $z_2/z_1 = 64/16 = 4$.
  ---
  **a)** $n_2 = 2400\,\text{min}^{-1}\cdot\dfrac{16}{64} = 600\,\text{min}^{-1}$.
  ---
  **b)** $M_2 = 5{,}0\,\text{N}\,\text{m}\cdot\dfrac{64}{16} = 20\,\text{N}\,\text{m}$.
  ---
  **Kontrolle:** Vierfaches Drehmoment bei einem Viertel der Drehzahl. Das Produkt aus beiden, und damit die Leistung, bleibt gleich.
```

```aufgabe
id: p5-4-bolzenschneider
titel: Zwei Hebel hintereinander
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein Bolzenschneider besteht aus zwei hintereinandergeschalteten Hebeln. Beim ersten Hebel drückt die Hand $300\,\text{mm}$ vom Gelenk entfernt, das andere Ende sitzt $50\,\text{mm}$ vom Gelenk und drückt auf den zweiten Hebel. Beim zweiten Hebel wirkt diese Kraft $120\,\text{mm}$ von seinem Gelenk entfernt, die Schneide sitzt $20\,\text{mm}$ von diesem Gelenk. Reibung vernachlässigen wir.

  a) Mit welcher Kraft drücken die Schneiden, wenn jede Hand mit $150\,\text{N}$ drückt?

  b) Um wie viele Millimeter müssen sich die Hände bewegen, damit sich die Schneiden um $2{,}0\,\text{mm}$ bewegen?
teile:
  - typ: zahl
    label: a) Schneidkraft
    loesung: "150*(300/50)*(120/20)"
    einheit: "N"
    anzeige: '5400'
    fehler:
      - wert: "150*(300/50 + 120/20)"
        meldung: |
          Du hast die beiden Übersetzungen addiert. Der zweite Hebel bekommt aber schon die **vergrößerte** Kraft des ersten und vergrößert sie noch einmal. Die Faktoren werden multipliziert.
      - wert: "150*300/50"
        meldung: |
          Das ist die Kraft nach dem ersten Hebel. Der zweite Hebel vergrößert sie noch einmal um den Faktor $120/20$.
  - typ: zahl
    label: b) Weg der Hände
    loesung: "2.0*(300/50)*(120/20)"
    einheit: "mm"
    anzeige: '72'
    fehler:
      - wert: "2.0/((300/50)*(120/20))"
        meldung: |
          Die Hände bewegen sich **mehr** als die Schneiden, nicht weniger. Was an Kraft gewonnen wird, muss an Weg zugesetzt werden.
hinweise:
  - 'Jeder Hebel vergrößert die Kraft um das Verhältnis seiner Arme. Der erste um $300/50$, der zweite um $120/20$.'
  - 'Hintereinandergeschaltete Hebel multiplizieren ihre Faktoren. Für b) gilt die goldene Regel: Der Weg verhält sich umgekehrt wie die Kraft.'
loesung: |
  **Ansatz:** Jeder Hebel vergrößert die Kraft um sein Armverhältnis. Der zweite Hebel bekommt die Ausgangskraft des ersten als Eingang. Also multiplizieren sich die Faktoren.
  ---
  **Faktoren:** Erster Hebel $300\,\text{mm}/50\,\text{mm} = 6$, zweiter Hebel $120\,\text{mm}/20\,\text{mm} = 6$, zusammen $6\cdot 6 = 36$.
  ---
  **a)** $F_{\text{Schneide}} = 36\cdot 150\,\text{N} = 5400\,\text{N}$, so viel wie das Gewicht von etwa $550\,\text{kg}$.
  ---
  **b)** Nach der goldenen Regel ist der Weg der Hände $36$-mal so groß wie der Weg der Schneiden: $36\cdot 2{,}0\,\text{mm} = 72\,\text{mm}$. Probe: $150\,\text{N}\cdot 72\,\text{mm} = 5400\,\text{N}\cdot 2{,}0\,\text{mm} = 10{,}8\,\text{N}\,\text{m}$.
```

## Rollen und Flaschenzug

```aufgabe
id: p5-5-check
art: check
titel: "Vorwissen: Die Kraft in einem Seil"
niveau: 1
angabe: |
  Ein Sack mit $30\,\text{kg}$ hängt ruhig an einem senkrechten Seil. Wie groß ist die Kraft im Seil? Runde auf ganze Newton.
teile:
  - typ: zahl
    loesung: "30*9.81"
    einheit: "N"
    anzeige: '294'
    fehler:
      - wert: "30"
        meldung: |
          Das ist die Masse in Kilogramm. Die Seilkraft ist eine Kraft in Newton. Sie muss die Gewichtskraft $m g$ ausgleichen.
hinweise:
  - Der Sack ruht. Welche Kraft muss das Seil ausgleichen?
loesung: |
  Der Sack ruht, also gleicht die Seilkraft nach oben die Gewichtskraft nach unten genau aus.
  ---
  $F_S = m g = 30\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 294\,\text{N}$. Wiederholen kannst du die Seilkraft im Abschnitt [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

Eine **Rolle** ist ein Rad mit einer Rille am Rand, über das ein Seil läuft. Rollen und Seile findest du an
Baukränen, an Segelbooten, an Fahnenmasten und in Kletterausrüstungen. Für alle Rechnungen in diesem
Abschnitt brauchen wir eine Grundtatsache. Läuft ein leichtes Seil reibungsfrei über Rollen, ist die
**Seilkraft überall im Seil gleich groß**. Eine Rolle lenkt das Seil nur um. Sie ändert nicht, wie stark es
gespannt ist.

### Die feste Rolle

Eine **feste Rolle** ist an der Decke oder an einem Gerüst befestigt. Ihre Achse bewegt sich nicht. Sie ist
ein zweiseitiger Hebel mit zwei gleich langen Armen, nämlich dem Rollenradius links und rechts der Achse.
Deshalb ist die Zugkraft gleich der Last, $F = G$. Auch der Seilweg ist gleich der Hubhöhe.

Die feste Rolle spart also keine Kraft. Sie ändert nur die **Richtung** der Kraft. Das ist trotzdem nützlich:
Du kannst nach unten ziehen und dabei dein eigenes Körpergewicht einsetzen. Am Fahnenmast ziehst du unten,
und die Fahne steigt oben.

### Die lose Rolle

Eine **lose Rolle** hängt im Seil und bewegt sich mit der Last. Ein Seilende ist an der Decke befestigt, am
anderen ziehst du nach oben. Die Last hängt jetzt an **zwei** Seilstücken. Jedes trägt mit der Seilkraft
$F$, zusammen also $2F$. Im Gleichgewicht gilt $2F = G$, also $F = G/2$.

```plot
x: [-3, 3]
y: [-3.6, 3.4]
gleich: true
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 3 }
strecken:
  - { von: [-1, 0], nach: [-1, 3.2] }
  - { von: [1, 0], nach: [1, 3.2] }
  - { von: [0, 0], nach: [0, -1.4] }
vektoren:
  - { von: [-1, 1.2], nach: [-1, 2.7], label: "F", farbe: 2 }
  - { von: [1, 1.2], nach: [1, 2.7], label: "F", farbe: 2 }
  - { von: [0, -1.4], nach: [0, -3.4], label: "G = 2F", farbe: 0 }
beschriftung: "Freikörperbild einer losen Rolle mit Last. Zwei Seilstücke ziehen jeweils mit der Seilkraft F nach oben (grün), die Last zieht mit G nach unten (blau). Im Gleichgewicht ist 2F = G, jedes Seilstück trägt die Hälfte."
```

Dafür musst du doppelt so viel Seil ziehen. Hebt sich die Last um $h$, werden **beide** Seilstücke um $h$
kürzer. Das Seilende, an dem du ziehst, wandert deshalb um $2h$. Halbe Kraft, doppelter Weg.

:::beispiel[Ein Zementsack an der losen Rolle]
Ein Bauarbeiter hebt einen Zementsack mit $25\,\text{kg}$ an einer losen Rolle $3{,}0\,\text{m}$ hoch. Die
Rolle selbst hat $2{,}0\,\text{kg}$.

**Schritt 1, Gesamtlast:** Die Rolle hängt mit am Seil und muss mitgehoben werden. Also
$G = (25\,\text{kg} + 2{,}0\,\text{kg})\cdot 9{,}81\,\text{m/s}^2 = 265\,\text{N}$.

**Schritt 2, Zugkraft:** Zwei Seilstücke tragen, $F = \dfrac{265\,\text{N}}{2} = 132\,\text{N}$.

**Schritt 3, Seilweg:** $s = 2\cdot 3{,}0\,\text{m} = 6{,}0\,\text{m}$.

**Antwort:** Er zieht mit $132\,\text{N}$, muss aber $6{,}0\,\text{m}$ Seil einholen.
:::

### Der Flaschenzug

Ein **Flaschenzug** verbindet mehrere Rollen. Die oberen Rollen sitzen gemeinsam in der festen **Flasche**,
die unteren in der losen Flasche, an der die Last hängt. Ein einziges Seil läuft abwechselnd über obere und
untere Rollen. Je mehr Seilstücke die untere Flasche halten, desto kleiner wird die nötige Kraft.

:::satz[Flaschenzug]
Hängt die Last $G$ samt loser Flasche an $n$ tragenden Seilstücken, so gilt ohne Reibung
$$F = \frac{G}{n}, \qquad s = n\cdot h.$$
Dabei ist $F$ die Zugkraft, $s$ der Seilweg am freien Ende und $h$ die Hubhöhe der Last.
:::

Das Entscheidende ist, die **tragenden Seilstücke** richtig zu zählen. Hier passieren die meisten Fehler.

1. **Worum geht es?** Wir wollen wissen, wie viele Seilstücke die untere Flasche nach oben ziehen.
2. **Bild:** Stell dir vor, du zeichnest eine geschlossene Linie rund um die untere Flasche mit der Last.
3. **Zählen:** Zähle die Seilstücke, die diese Linie schneiden. Jedes zieht mit der Seilkraft $F$ an der
   unteren Flasche. Zusammen tragen sie $n\cdot F$, und das muss die Last $G$ ausgleichen.
4. **In Worten:** $n$ ist die Zahl der Seilstücke, die an der beweglichen Flasche ziehen.
5. **Typischer Fehler:** Das freie Seilende, an dem du ziehst, zählt nur mit, wenn es direkt von der
   **unteren** Flasche kommt. Läuft es von der oberen Flasche zu dir herunter, trägt es die untere Flasche
   nicht.

```plot
x: [0, 6.6]
y: [0, 6]
gleich: true
strecken:
  - { von: [1, 5.5], nach: [5.6, 5.5], farbe: 3 }
  - { von: [1.6, 5.5], nach: [1.6, 2], farbe: 0 }
  - { von: [2.4, 5.5], nach: [2.4, 2], farbe: 0 }
  - { von: [3.6, 5.5], nach: [3.6, 2], farbe: 0 }
  - { von: [4.4, 5.5], nach: [4.4, 2], farbe: 0 }
  - { von: [5.2, 5.5], nach: [5.2, 1.2], farbe: 1 }
  - { von: [1.4, 2], nach: [4.6, 2], farbe: 3 }
  - { von: [3, 2], nach: [3, 0.9], farbe: 3 }
  - { von: [1.1, 3], nach: [4.9, 3], gestrichelt: true, farbe: 2 }
  - { von: [4.9, 3], nach: [4.9, 0.4], gestrichelt: true, farbe: 2 }
  - { von: [4.9, 0.4], nach: [1.1, 0.4], gestrichelt: true, farbe: 2 }
  - { von: [1.1, 0.4], nach: [1.1, 3], gestrichelt: true, farbe: 2 }
vektoren:
  - { von: [5.2, 1.2], nach: [5.2, 0.5], label: "F", farbe: 1 }
punkte:
  - { x: 3, y: 0.9, label: "Last G" }
  - { x: 3, y: 5.75, label: "feste Flasche" }
beschriftung: "Schema eines Flaschenzugs. Die untere, lose Flasche mit der Last hängt an vier tragenden Seilstücken (blau). Die grüne gestrichelte Linie umschließt die lose Flasche. Sie wird von genau vier Seilstücken geschnitten, also ist n = 4 und F = G/4. Das freie Seilende (orange) läuft von der festen Flasche nach unten zur Hand. Es liegt außerhalb der Linie und trägt die untere Flasche nicht."
```

Dasselbe Ergebnis liefert eine Überlegung mit Wegen. Hebt sich die untere Flasche um $h$, wird jedes der
$n$ tragenden Seilstücke um $h$ kürzer. Das fehlende Seil, insgesamt $n\cdot h$, musst du am freien Ende
herausziehen. Kraft mal Weg ist dann $\dfrac{G}{n}\cdot n h = G\cdot h$, genau die Hubarbeit.

:::beispiel[Einen Motorblock heben]
In einer Werkstatt wird ein Motorblock mit $180\,\text{kg}$ an einem Flaschenzug mit $6$ tragenden
Seilstücken $0{,}80\,\text{m}$ hoch gehoben. Die untere Flasche hat $6{,}0\,\text{kg}$. Reibung vernachlässigen wir.

**Schritt 1, Gesamtlast:** Motorblock und untere Flasche zusammen,
$G = 186\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 1825\,\text{N}$.

**Schritt 2, Zugkraft:** $F = \dfrac{G}{n} = \dfrac{1825\,\text{N}}{6} = 304\,\text{N}$.

**Schritt 3, Seilweg:** $s = n\cdot h = 6\cdot 0{,}80\,\text{m} = 4{,}8\,\text{m}$.

**Schritt 4, Probe mit der Arbeit:** $F\cdot s = 304\,\text{N}\cdot 4{,}8\,\text{m} = 1460\,\text{J}$ und
$G\cdot h = 1825\,\text{N}\cdot 0{,}80\,\text{m} = 1460\,\text{J}$. Beide Arbeiten sind gleich.

**Antwort:** Eine Person kann mit gut $300\,\text{N}$ einen fast zwei Kilonewton schweren Motor heben, muss
dafür aber fast fünf Meter Seil ziehen.
:::

:::achtung[Fehler: das freie Seilende mitgezählt]
Eine Last von $1000\,\text{N}$ hängt an einem Flaschenzug wie in der Skizze. Vier Seilstücke ziehen an der
unteren Flasche, das freie Ende läuft von der oberen Flasche nach unten. Jemand zählt alle fünf senkrechten Stücke und
rechnet $F = 1000\,\text{N}/5 = 200\,\text{N}$.

Das freie Ende zieht nur an der **oberen** Flasche, nicht an der unteren. Es trägt die Last nicht. Richtig
ist $n = 4$ und $F = 1000\,\text{N}/4 = 250\,\text{N}$. Zähle nur die Seilstücke, die an der beweglichen
Flasche ziehen.
:::

:::achtung[Fehler: Gewicht der losen Flasche vergessen]
Eine Last von $450\,\text{N}$ hängt an einem Flaschenzug mit $4$ tragenden Seilstücken. Die untere Flasche
wiegt $30\,\text{N}$. Falsch gerechnet: $F = 450\,\text{N}/4 = 112{,}5\,\text{N}$.

Die untere Flasche hängt mit an den Seilstücken und wird mitgehoben. Richtig ist
$F = (450\,\text{N} + 30\,\text{N})/4 = 120\,\text{N}$. Das Gewicht der **oberen**, festen Flasche zählt
dagegen nicht, denn sie hängt an der Decke.
:::

### Der Potenzflaschenzug

Beim **Potenzflaschenzug** hängen mehrere lose Rollen hintereinander. Jede lose Rolle hängt an einem
eigenen Seil, dessen eines Ende an der Decke befestigt ist und dessen anderes Ende zur nächsten Rolle
führt. Jede Rolle halbiert die Kraft. Mit $k$ losen Rollen gilt ohne Reibung und ohne Rollengewicht
$F = \dfrac{G}{2^k}$ und $s = 2^k\cdot h$.

**Beispiel:** Mit drei losen Rollen hebt man eine Last von $1600\,\text{N}$ mit
$1600\,\text{N}/2^3 = 200\,\text{N}$. Der Seilweg ist dafür achtmal so lang wie die Hubhöhe.

:::merke
**So rechnest du einen Flaschenzug**

1. Gesamtlast bestimmen: Last plus Gewicht der losen Flasche.
2. Tragende Seilstücke an der losen Flasche zählen, das ergibt $n$.
3. Zugkraft $F = G/n$ und Seilweg $s = n\cdot h$.
4. Probe: $F\cdot s = G\cdot h$.
:::

```reflexion
frage: Eine feste Rolle spart keine Kraft. Warum ist sie trotzdem in jedem Flaschenzug eingebaut? Nenne zwei Gründe.
antwort: |
  Erstens lenkt sie das Seil um. So kann man nach unten ziehen und das eigene Körpergewicht einsetzen, statt nach oben
  zu stemmen. Zweitens hängt an der festen Flasche das obere Ende jedes tragenden Seilstücks. Ohne die oberen Rollen
  könnte das Seil nicht immer wieder zur losen Flasche zurücklaufen, und es gäbe nicht mehrere tragende Seilstücke.
```

### Aufgaben zu Rollen und Flaschenzug

```aufgabe
id: p5-feste-rolle
titel: Feste Rolle
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Eimer mit der Gewichtskraft $500\,\text{N}$ wird an einem Seil über eine feste Rolle $8{,}0\,\text{m}$ hochgezogen. Reibung vernachlässigen wir. Welche Kraft ist nötig, und wie viel Seil muss man ziehen?
teile:
  - typ: zahl
    label: Kraft
    loesung: "500"
    einheit: "N"
    anzeige: '500'
    fehler:
      - wert: "250"
        meldung: |
          Halbieren kann nur eine **lose** Rolle. Die feste Rolle ist ein Hebel mit gleich langen Armen. Sie ändert nur die Richtung der Kraft.
  - typ: zahl
    label: Seilweg
    loesung: "8"
    einheit: "m"
    anzeige: '8'
    fehler:
      - wert: "16"
        meldung: |
          Die Last hängt an nur einem Seilstück. Hebt sie sich um $8\,\text{m}$, wandert auch das Seilende um $8\,\text{m}$.
hinweise:
  - Die feste Rolle ist ein Hebel mit zwei gleich langen Armen. Was folgt daraus für Kraft und Weg?
loesung: |
  **Ansatz:** Die feste Rolle ist ein zweiseitiger Hebel mit gleich langen Armen. Sie ändert nur die Richtung der Kraft.
  ---
  **Ergebnis:** $F = G = 500\,\text{N}$, und der Seilweg ist gleich der Hubhöhe, $8{,}0\,\text{m}$.
```

```aufgabe
id: p5-flaschenzug
titel: Flaschenzug mit vier Seilstücken
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine Last von $800\,\text{N}$ samt loser Flasche hängt an einem Flaschenzug mit vier tragenden Seilstücken. Reibung vernachlässigen wir. Die Last soll $1{,}5\,\text{m}$ gehoben werden. Berechne die Zugkraft und den Seilweg.
teile:
  - typ: zahl
    label: Zugkraft
    loesung: "800/4"
    einheit: "N"
    anzeige: '200'
    fehler:
      - wert: "800*4"
        meldung: |
          Ein Flaschenzug **verkleinert** die Kraft. Die Last verteilt sich auf vier Seilstücke, jedes trägt ein Viertel.
  - typ: zahl
    label: Seilweg
    loesung: "4*1.5"
    einheit: "m"
    anzeige: '6'
    fehler:
      - wert: "1.5/4"
        meldung: |
          Der Seilweg wird **länger**, nicht kürzer. Jedes der vier Seilstücke wird um $1{,}5\,\text{m}$ kürzer, und dieses Seil musst du herausziehen.
hinweise:
  - 'Es gilt $F = G/n$ und $s = n\cdot h$.'
loesung: |
  **Kraft:** $F = \dfrac{G}{n} = \dfrac{800\,\text{N}}{4} = 200\,\text{N}$.
  ---
  **Seilweg:** $s = n\cdot h = 4\cdot 1{,}5\,\text{m} = 6{,}0\,\text{m}$. Probe: $200\,\text{N}\cdot 6{,}0\,\text{m} = 800\,\text{N}\cdot 1{,}5\,\text{m} = 1200\,\text{J}$.
```

```aufgabe
id: p5-5-zaehlen
titel: Tragende Seilstücke aus einer Skizze zählen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Die Skizze zeigt einen Flaschenzug. Das Seil ist an der unteren Flasche befestigt, läuft abwechselnd über die oberen und unteren Rollen und verlässt die **untere** Flasche am Ende nach oben, wo du ziehst. Die Last samt unterer Flasche hat $600\,\text{N}$. Reibung vernachlässigen wir.

  a) Wie viele Seilstücke tragen die untere Flasche?

  b) Welche Zugkraft brauchst du?

  c) Wie viel Seil musst du ziehen, um die Last $0{,}50\,\text{m}$ zu heben?
plot:
  x: [0, 6]
  y: [0, 7]
  gleich: true
  strecken:
    - { von: [1, 5], nach: [4, 5], farbe: 3 }
    - { von: [1.4, 5], nach: [1.4, 2], farbe: 0 }
    - { von: [2.1, 5], nach: [2.1, 2], farbe: 0 }
    - { von: [2.8, 5], nach: [2.8, 2], farbe: 0 }
    - { von: [3.5, 5], nach: [3.5, 2], farbe: 0 }
    - { von: [4.4, 2], nach: [4.4, 6.0], farbe: 0 }
    - { von: [1.2, 2], nach: [4.6, 2], farbe: 3 }
    - { von: [2.9, 2], nach: [2.9, 1.0], farbe: 3 }
  vektoren:
    - { von: [4.4, 6.0], nach: [4.4, 6.8], label: "F", farbe: 1 }
  punkte:
    - { x: 2.9, y: 1.0, label: "Last" }
teile:
  - typ: zahl
    label: a) tragende Seilstücke
    loesung: "5"
    fehler:
      - wert: "4"
        meldung: |
          Das Seilstück, an dem du ziehst, kommt hier direkt von der **unteren** Flasche und zieht sie nach oben. Es trägt also mit.
  - typ: zahl
    label: b) Zugkraft
    loesung: "600/5"
    einheit: "N"
    anzeige: '120'
    fehler:
      - wert: "600/4"
        meldung: |
          Hier hast du mit $n = 4$ gerechnet. Zähle noch einmal alle Seilstücke, die an der unteren Flasche ziehen, auch das freie Ende.
  - typ: zahl
    label: c) Seilweg
    loesung: "5*0.50"
    einheit: "m"
    anzeige: '2{,}5'
    fehler:
      - wert: "4*0.50"
        meldung: |
          Mit $n = 5$ werden fünf Seilstücke um je $0{,}50\,\text{m}$ kürzer. Der Seilweg ist $5\cdot 0{,}50\,\text{m}$.
hinweise:
  - Zeichne in Gedanken eine geschlossene Linie um die untere Flasche. Zähle, wie viele Seilstücke sie schneiden.
  - Das freie Ende verlässt hier die untere Flasche nach oben. Es zieht also an ihr und zählt mit.
gefuehrt:
  - text: Wie viele Seilstücke verlaufen zwischen fester und loser Flasche?
    teil: { typ: zahl, loesung: "4" }
    erklaerung: Vier Seilstücke verbinden die beiden Flaschen.
  - text: Zieht das freie Ende, an dem du ziehst, an der unteren Flasche? Überlege, bevor du weitergehst.
    erklaerung: Ja. Es beginnt an der unteren Flasche und läuft von dort nach oben zur Hand. Deine Zugkraft wirkt deshalb direkt an der unteren Flasche.
  - text: Wie groß ist also $n$?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: Vier Verbindungsstücke plus das freie Ende, also $n = 5$.
  - text: Berechne die Zugkraft in Newton.
    teil: { typ: zahl, loesung: "600/5", einheit: "N" }
    erklaerung: $F = 600\,\text{N}/5 = 120\,\text{N}$.
loesung: |
  **Ansatz:** Wir umranden die untere Flasche gedanklich und zählen die Seilstücke, die die Linie schneiden. Jedes zieht mit der Seilkraft $F$ nach oben.
  ---
  **a)** Vier Seilstücke laufen zwischen den Flaschen. Dazu kommt das freie Ende, das die untere Flasche nach oben verlässt. Also $n = 5$.
  ---
  **b)** $F = \dfrac{600\,\text{N}}{5} = 120\,\text{N}$.
  ---
  **c)** $s = 5\cdot 0{,}50\,\text{m} = 2{,}5\,\text{m}$. Probe: $120\,\text{N}\cdot 2{,}5\,\text{m} = 600\,\text{N}\cdot 0{,}50\,\text{m} = 300\,\text{J}$.
```

```aufgabe
id: p5-lose-rolle-gewicht
titel: Lose Rolle mit Eigengewicht
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  An einer losen Rolle mit der Gewichtskraft $20\,\text{N}$ hängt eine Last von $300\,\text{N}$. Das eine Seilende ist an der Decke befestigt, am anderen wird senkrecht nach oben gezogen. Welche Kraft ist nötig?
teile:
  - typ: zahl
    loesung: "(300+20)/2"
    einheit: "N"
    anzeige: '160'
    fehler:
      - wert: "300/2"
        meldung: |
          Du hast das Gewicht der Rolle vergessen. Die lose Rolle hängt selbst im Seil und muss mitgehoben werden.
      - wert: "300+20"
        meldung: |
          Das ist die gesamte Last. Sie verteilt sich aber auf **zwei** Seilstücke, jedes trägt die Hälfte.
hinweise:
  - Die Rolle selbst muss mit angehoben werden.
  - Zwei Seilstücke tragen Last und Rolle gemeinsam.
loesung: |
  **Ansatz:** Die lose Rolle bewegt sich mit der Last. Sie hängt an zwei Seilstücken, jedes trägt die Hälfte der Gesamtlast.
  ---
  **Gesamtlast:** $300\,\text{N} + 20\,\text{N} = 320\,\text{N}$.
  ---
  **Zugkraft:** $F = \dfrac{320\,\text{N}}{2} = 160\,\text{N}$. Ohne Rollengewicht wären es $150\,\text{N}$.
```

```aufgabe
id: p5-flaschenzug-wirkungsgrad
titel: Flaschenzug mit Reibung
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Flaschenzug mit sechs tragenden Seilstücken hebt eine Last von $1800\,\text{N}$ samt loser Flasche. Wegen der Reibung in den Rollen beträgt der Wirkungsgrad $80\,\%$. Das heißt: Nur $80\,\%$ der Arbeit, die du am Seil verrichtest, kommen als Hubarbeit an der Last an. Welche Zugkraft ist nötig?
teile:
  - typ: zahl
    loesung: "1800/(6*0.80)"
    einheit: "N"
    anzeige: '375'
    fehler:
      - wert: "1800/6*0.80"
        meldung: |
          Mit Reibung musst du **mehr** Kraft aufbringen, nicht weniger. Die ideale Kraft wird deshalb durch $0{,}80$ geteilt.
      - wert: "1800/6"
        meldung: |
          Das ist die Kraft ohne Reibung. Mit Wirkungsgrad $80\,\%$ brauchst du mehr.
hinweise:
  - 'Ohne Reibung wären es $G/n = 300\,\text{N}$.'
  - 'Der Wirkungsgrad ist Nutzarbeit durch aufgewendete Arbeit. Die aufgewendete Kraft ist deshalb größer als die ideale.'
loesung: |
  **Ansatz:** Die Nutzarbeit ist $G\cdot h$, die aufgewendete Arbeit $F\cdot 6h$. Der Wirkungsgrad ist ihr Verhältnis: $\eta = \dfrac{G h}{F\cdot 6h} = \dfrac{G}{6F}$.
  ---
  **Umstellen:** $F = \dfrac{G}{6\eta}$.
  ---
  **Rechnung:** $F = \dfrac{1800\,\text{N}}{6\cdot 0{,}80} = 375\,\text{N}$ statt $300\,\text{N}$ ohne Reibung. Die Kraft ist größer, wie erwartet.
```

```aufgabe
id: p5-5-umkehr
titel: Wie viele Seilstücke braucht man?
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Mechaniker kann dauerhaft mit höchstens $400\,\text{N}$ an einem Seil ziehen. Er will einen Motor mit $230\,\text{kg}$ (samt loser Flasche) mit einem Flaschenzug heben. Reibung vernachlässigen wir. Wie viele tragende Seilstücke braucht der Flaschenzug mindestens?
teile:
  - typ: zahl
    loesung: "6"
    fehler:
      - wert: "5"
        meldung: |
          Mit $5$ Seilstücken bräuchte er $2256\,\text{N}/5 = 451\,\text{N}$, mehr als er schafft. Die Zahl der Seilstücke muss eine ganze Zahl sein. Hier musst du **aufrunden**.
      - wert: "5.64"
        meldung: |
          Seilstücke gibt es nur ganzzahlig. Mit $5{,}64$ Stücken kann man keinen Flaschenzug bauen. Runde auf die nächste ganze Zahl auf.
hinweise:
  - 'Berechne die Gewichtskraft und daraus, wie viele Seilstücke es mindestens sein müssen: $n \ge G/F_{\max}$.'
  - Die Anzahl muss ganzzahlig sein. Runde so, dass die Kraft sicher unter $400\,\text{N}$ bleibt.
loesung: |
  **Ansatz:** Mit $n$ Seilstücken braucht er $F = G/n$. Das darf höchstens $400\,\text{N}$ sein, also $n \ge \dfrac{G}{400\,\text{N}}$.
  ---
  **Rechnung:** $G = 230\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 2256\,\text{N}$. Also $n \ge \dfrac{2256\,\text{N}}{400\,\text{N}} = 5{,}64$.
  ---
  **Runden:** $n$ muss ganzzahlig sein und darf nicht kleiner werden, also $n = 6$. Probe: $2256\,\text{N}/6 = 376\,\text{N} < 400\,\text{N}$.
```

```aufgabe
id: p5-5-potenz
titel: Potenzflaschenzug mit schweren Rollen
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Potenzflaschenzug hat drei lose Rollen, jede mit der Gewichtskraft $15\,\text{N}$. An der untersten hängt eine Last von $2400\,\text{N}$. Jede lose Rolle hängt an einem eigenen Seil: Ein Ende ist an der Decke befestigt, das andere führt nach oben zur Achse der nächsten losen Rolle. Das Seil der obersten losen Rolle läuft über eine feste Rolle zur Hand. Reibung vernachlässigen wir.

  a) Wie groß ist die Seilkraft am Seil der untersten Rolle?

  b) Wie groß ist die Zugkraft an der Hand? Runde auf eine Nachkommastelle.

  c) Wie viel Seil muss die Hand ziehen, um die Last $0{,}50\,\text{m}$ zu heben?
teile:
  - typ: zahl
    label: a) Seilkraft unten
    loesung: "(2400+15)/2"
    einheit: "N"
    anzeige: '1207{,}5'
    fehler:
      - wert: "2400/2"
        meldung: |
          Die unterste Rolle hängt selbst mit im Seil. Ihr Gewicht von $15\,\text{N}$ kommt zur Last dazu.
  - typ: zahl
    label: b) Zugkraft an der Hand
    loesung: "(((2400+15)/2+15)/2+15)/2"
    einheit: "N"
    anzeige: '313{,}1'
    fehler:
      - wert: "2400/8"
        meldung: |
          So groß wäre die Kraft mit masselosen Rollen. Hier wiegt jede Rolle $15\,\text{N}$, und jede muss vom Seil darüber mitgetragen werden.
      - wert: "(2400+3*15)/8"
        meldung: |
          Die Rollengewichte werden nicht alle durch $8$ geteilt. Die unterste Rolle wird dreimal halbiert, die mittlere zweimal, die oberste nur einmal. Rechne Rolle für Rolle von unten nach oben.
  - typ: zahl
    label: c) Seilweg
    loesung: "8*0.50"
    einheit: "m"
    anzeige: '4'
    fehler:
      - wert: "3*0.50"
        meldung: |
          Jede lose Rolle verdoppelt den Weg, die Wege werden also nicht addiert, sondern verdoppelt: $2\cdot 2\cdot 2 = 8$.
hinweise:
  - Rechne Rolle für Rolle von unten nach oben. Jede lose Rolle hängt an zwei Seilstücken, die zusammen das tragen, was an ihr hängt, plus ihr eigenes Gewicht.
  - 'Unterste Rolle: $T_1 = (2400\,\text{N} + 15\,\text{N})/2$. Die mittlere trägt $T_1$ plus $15\,\text{N}$, die oberste $T_2$ plus $15\,\text{N}$.'
loesung: |
  **Ansatz:** Jede lose Rolle hängt an zwei Seilstücken mit gleicher Seilkraft. Diese beiden tragen alles, was an der Rolle hängt, plus das Rollengewicht. Wir gehen von unten nach oben.
  ---
  **a) Unterste Rolle:** $T_1 = \dfrac{2400\,\text{N} + 15\,\text{N}}{2} = 1207{,}5\,\text{N}$.
  ---
  **b) Mittlere und oberste Rolle:** $T_2 = \dfrac{1207{,}5\,\text{N} + 15\,\text{N}}{2} = 611{,}25\,\text{N}$ und $T_3 = \dfrac{611{,}25\,\text{N} + 15\,\text{N}}{2} = 313{,}1\,\text{N}$. Die feste Rolle lenkt nur um, also zieht die Hand mit $313{,}1\,\text{N}$. Ohne Rollengewicht wären es $300\,\text{N}$.
  ---
  **c)** Jede lose Rolle verdoppelt den Weg: $s = 2^3\cdot 0{,}50\,\text{m} = 4{,}0\,\text{m}$.
```

## Schiefe Ebene, Keil und Schraube

```aufgabe
id: p5-6-check
art: check
titel: "Vorwissen: Neigungswinkel aus Höhe und Länge"
niveau: 1
angabe: |
  Eine Rampe ist $6{,}0\,\text{m}$ lang (gemessen entlang der schrägen Fläche) und überwindet $1{,}5\,\text{m}$ Höhe. Wie groß ist ihr Neigungswinkel in Grad? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "inGrad(asin(1.5/6.0))"
    einheit: "°"
    anzeige: '14{,}5'
    fehler:
      - wert: "inGrad(atan(1.5/6.0))"
        meldung: |
          Du hast den Tangens verwendet. Die $6{,}0\,\text{m}$ sind aber die schräge Länge, also die **Hypotenuse**. Höhe durch Hypotenuse ist der Sinus.
hinweise:
  - 'Die Rampenlänge ist die Hypotenuse, die Höhe die Gegenkathete des Neigungswinkels.'
loesung: |
  Rampe, Höhe und waagrechter Boden bilden ein rechtwinkliges Dreieck. Die schräge Rampe ist die Hypotenuse, die Höhe liegt dem Neigungswinkel gegenüber. Also $\sin\alpha = \dfrac{1{,}5\,\text{m}}{6{,}0\,\text{m}} = 0{,}25$.
  ---
  $\alpha = \arcsin 0{,}25 = 14{,}5^\circ$. Wiederholen kannst du die schiefe Ebene im Abschnitt [Die schiefe Ebene: hinab, hinauf und die Haftgrenze](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze).
```

Statt eine schwere Kiste senkrecht auf einen Lastwagen zu heben, schiebt man sie eine Rampe hinauf. Das
geht mit viel weniger Kraft. Eine **schiefe Ebene** ist eine ebene Fläche, die um den **Neigungswinkel**
$\alpha$ gegen die Waagrechte gekippt ist. Im Abschnitt [Die schiefe Ebene: hinab, hinauf und die Haftgrenze](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze)
hast du die Kräfte auf einen Körper auf der schiefen Ebene kennengelernt. Hier betrachten wir sie als **Maschine**: Wie viel
Kraft spart sie, und was kostet das?

### Die Kraft auf der schiefen Ebene

Eine Kiste soll reibungsfrei und mit konstanter Geschwindigkeit eine Rampe hinaufgeschoben werden. Die
Schubkraft $F$ wirkt parallel zur Rampe. Auf die Kiste wirken drei Kräfte: die Gewichtskraft $G$ senkrecht
nach unten, die Normalkraft $F_N$ senkrecht zur Rampe und die Schubkraft $F$ entlang der Rampe nach oben.

```plot
x: [-0.5, 6.5]
y: [-0.8, 3.6]
gleich: true
strecken:
  - { von: [0, 0], nach: [6, 0] }
  - { von: [6, 0], nach: [6, 3] }
  - { von: [0, 0], nach: [6, 3] }
vektoren:
  - { von: [3, 1.5], nach: [3, -0.5], label: "G", farbe: 0 }
  - { von: [3, 1.5], nach: [2.2, 3.1], label: "F_N", farbe: 2 }
  - { von: [3, 1.5], nach: [3.8, 1.9], label: "F", farbe: 1 }
punkte:
  - { x: 3, y: 1.5, label: "Kiste" }
beschriftung: "Freikörperbild einer Kiste, die reibungsfrei mit konstanter Geschwindigkeit eine Rampe mit etwa 27 Grad Neigung hinaufgeschoben wird. Es wirken genau drei Kräfte: die Gewichtskraft G senkrecht nach unten (blau), die Normalkraft F_N senkrecht zur Rampe (grün) und die Schubkraft F entlang der Rampe nach oben (orange). Ihre Summe ist null."
```

Die Geschwindigkeit ist konstant, also ist die Summe der Kräfte null. Entlang der Rampe muss die Schubkraft
den Anteil der Gewichtskraft ausgleichen, der die Kiste hangabwärts zieht. Das ist die **Hangabtriebskraft**
$F_H = G\sin\alpha$. Also braucht man $F = G\sin\alpha$.

Mit der Länge $l$ der Rampe und ihrer Höhe $h$ ist $\sin\alpha = h/l$, denn die Rampe ist die Hypotenuse und
die Höhe die Gegenkathete. Daraus folgt die einfache Form
$$F = G\cdot\frac{h}{l}.$$

Dasselbe Ergebnis liefert eine Überlegung mit Arbeit. Schiebst du die Kiste die ganze Rampe hinauf, legst
du den Weg $l$ zurück und verrichtest die Arbeit $F\cdot l$. Die Kiste gewinnt dabei Lageenergie
$G\cdot h$. Ohne Reibung sind beide gleich: $F\cdot l = G\cdot h$. Auch daraus folgt $F = G\,h/l$.

:::satz[Schiefe Ebene als Maschine]
Um eine Last $G$ reibungsfrei eine schiefe Ebene der Länge $l$ und Höhe $h$ hinaufzuschieben, braucht man
die Kraft parallel zur Ebene
$$F = G\sin\alpha = G\cdot\frac{h}{l}.$$
Der Weg ist dafür $l$ statt $h$. Kraft mal Weg bleibt gleich: $F\cdot l = G\cdot h$.

**Kein Beispiel:** Drückt man die Kiste **waagrecht** statt parallel zur Rampe, gilt $F = G\,h/l$ nicht. Ein Teil
der waagrechten Kraft drückt dann nur in die Rampe hinein, und man braucht $F = G\tan\alpha$, also mehr.
:::

:::beispiel[Eine Rollstuhlrampe]
Eine Rollstuhlrampe überwindet $0{,}50\,\text{m}$ Höhe auf $6{,}0\,\text{m}$ Länge. Rollstuhl und Person haben
zusammen $95\,\text{kg}$. Reibung vernachlässigen wir.

**Schritt 1, Gewichtskraft:** $G = 95\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 932\,\text{N}$.

**Schritt 2, Kraft entlang der Rampe:** $F = G\cdot\dfrac{h}{l} = 932\,\text{N}\cdot\dfrac{0{,}50\,\text{m}}{6{,}0\,\text{m}} = 77{,}7\,\text{N}$.

**Schritt 3, Probe mit der Arbeit:** $F\cdot l = 77{,}7\,\text{N}\cdot 6{,}0\,\text{m} = 466\,\text{J}$ und
$G\cdot h = 932\,\text{N}\cdot 0{,}50\,\text{m} = 466\,\text{J}$.

**Antwort:** Statt $932\,\text{N}$ senkrecht zu heben, schiebt man mit $78\,\text{N}$, aber zwölfmal so weit.
Deshalb schreiben Bauvorschriften flache Rampen vor.
:::

:::achtung[Fehler: Kosinus statt Sinus]
Eine Kiste mit $50\,\text{kg}$ soll auf einer $20^\circ$-Rampe gehalten werden. Falsch gerechnet:
$F = m g\cos 20^\circ = 490{,}5\,\text{N}\cdot 0{,}940 = 461\,\text{N}$.

Der Kosinus liefert den Anteil **senkrecht** zur Rampe. Richtig ist $F = m g\sin 20^\circ = 490{,}5\,\text{N}\cdot 0{,}342 = 168\,\text{N}$.
Der Extremfall verrät den Fehler: Auf einer waagrechten Fläche ($0^\circ$) braucht man keine Kraft, um die
Kiste festzuhalten. Das passt zu $\sin 0^\circ = 0$, nicht zu $\cos 0^\circ = 1$.
:::

### Steigung in Prozent

Bei Straßen gibt man die Neigung als **Steigung in Prozent** an. $10\,\%$ Steigung bedeutet: $10\,\text{m}$
Höhengewinn auf $100\,\text{m}$ **waagrechter** Strecke. Die Steigung ist also der Tangens des
Neigungswinkels, $\tan\alpha = 0{,}10$, und $\alpha = 5{,}7^\circ$.

**Beispiel:** Bei $10\,\%$ ist $\sin\alpha = 0{,}0995$, fast dasselbe wie $\tan\alpha = 0{,}10$. Für kleine
Winkel darf man deshalb $F \approx G\cdot\text{Steigung}$ rechnen. **Kein Beispiel:** $100\,\%$ Steigung ist
**keine** senkrechte Wand. Es bedeutet $\tan\alpha = 1$, also $\alpha = 45^\circ$. Bei so großen Steigungen
unterscheiden sich Sinus und Tangens stark.

```aufgabe
id: p5-6-vorhersage
art: check
titel: "Vorhersage: doppelter Neigungswinkel"
niveau: 1
angabe: |
  Im Widget direkt nach dieser Frage siehst du die Hangabtriebskraft $F_H = G\sin\alpha$ in Abhängigkeit vom Neigungswinkel. Sag voraus, bevor du es ausprobierst: Was passiert mit $F_H$, wenn du den Winkel von $30^\circ$ auf $60^\circ$ verdoppelst?
teile:
  - typ: auswahl
    optionen:
      - "$F_H$ verdoppelt sich."
      - "$F_H$ wächst, aber nur auf etwa das $1{,}7$-Fache."
      - "$F_H$ halbiert sich."
      - "$F_H$ bleibt gleich, weil sich die Last nicht ändert."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Der Sinus ist nicht proportional zum Winkel. $\sin 30^\circ = 0{,}5$, aber $\sin 60^\circ = 0{,}866$, nicht $1$.
      - wert: 2
        meldung: |
          Eine steilere Rampe zieht stärker hangabwärts, nicht schwächer. Denk an den Extremfall: Bei $90^\circ$ zieht die ganze Gewichtskraft entlang der senkrechten Wand.
      - wert: 3
        meldung: |
          Die Last bleibt gleich, aber der Anteil entlang der Rampe hängt vom Winkel ab. Je steiler, desto größer dieser Anteil.
hinweise:
  - 'Vergleiche $\sin 30^\circ$ und $\sin 60^\circ$.'
loesung: |
  $F_H$ ist proportional zu $\sin\alpha$. Es gilt $\sin 30^\circ = 0{,}5$ und $\sin 60^\circ = 0{,}866$.
  ---
  Das Verhältnis ist $0{,}866/0{,}5 = 1{,}73$. Die Kraft wächst also nur auf das $1{,}73$-Fache, nicht auf das Doppelte. Prüfe es im Widget.
```

```widget
name: parameter
titel: Hangabtriebskraft und Normalkraft in Abhängigkeit vom Neigungswinkel
props:
  f: "G*sin(x*pi/180)"
  parameter:
    - { name: G, min: 100, max: 1000, step: 10, wert: 500 }
  x: [0, 90]
  y: [0, 1000]
  zusatz: ["500*cos(x*pi/180)"]
```

**Arbeitsauftrag zum Widget.** Die waagrechte Achse ist der Neigungswinkel $x$ in Grad, die senkrechte die
Kraft in Newton. Die durchgezogene Kurve ist $F_H = G\sin\alpha$ und folgt dem Regler für $G$. Die gestrichelte
Vergleichskurve ist die Normalkraft $F_N = G\cos\alpha$ für $G = 500\,\text{N}$; sie bewegt sich mit dem Regler
nicht mit. Lass $G$ deshalb zuerst auf $500\,\text{N}$. Lies $F_H$ bei $30^\circ$ und bei $60^\circ$ ab und
vergleiche mit deiner Vorhersage. Suche dann den Winkel, bei dem beide Kurven sich schneiden. Erkläre, warum das genau bei $45^\circ$ passiert. Bei $90^\circ$ ist die Rampe eine
senkrechte Wand: Dort ist $F_H = G$, und die Rampe hilft gar nicht mehr.

### Der Keil

Ein **Keil** ist eine schiefe Ebene, die selbst bewegt wird. Er hat eine Länge $l$ und am breiten Ende, dem
**Rücken**, die Breite $d$. Treibt man ihn mit der Kraft $F$ um seine ganze Länge ein, drückt er das Material
um seine Rückenbreite auseinander. Ohne Reibung sind die Arbeiten gleich: $F\cdot l = F_s\cdot d$. Dabei ist
$F_s$ die Spaltkraft, mit der der Keil das Material seitlich auseinanderdrückt. Also
$$F_s = F\cdot\frac{l}{d}.$$
Axt, Messer, Meißel, Nagel und Türkeil sind Keile. Je schlanker der Keil, desto größer die Spaltkraft.

:::beispiel[Ein Spaltkeil für Brennholz]
Ein Spaltkeil ist $12\,\text{cm}$ lang und am Rücken $3{,}0\,\text{cm}$ breit. Er wird mit einer mittleren
Kraft von $600\,\text{N}$ in einen Holzklotz getrieben.

**Schritt 1, Verhältnis:** $l/d = 12\,\text{cm}/3{,}0\,\text{cm} = 4$. Die Zentimeter kürzen sich.

**Schritt 2, Spaltkraft:** $F_s = 600\,\text{N}\cdot 4 = 2400\,\text{N}$.

**Antwort:** Reibungsfrei gerechnet drückt der Keil das Holz mit $2400\,\text{N}$ auseinander. Wegen der
großen Reibung am Holz ist es in Wirklichkeit deutlich weniger.
:::

### Die Schraube

Eine **Schraube** ist eine schiefe Ebene, die um einen Zylinder gewickelt ist. Wickle ein rechtwinkliges
Papierdreieck um einen Bleistift: Die schräge Kante wird zum Gewinde. Bei einer vollen Umdrehung rückt die
Schraube um die **Ganghöhe** $h$ vor, also um den Abstand zweier benachbarter Gewindegänge.

Dreht man die Schraube mit einem Hebel oder Griff vom Radius $r$, legt die Hand bei einer Umdrehung den
Kreisumfang $2\pi r$ zurück. Ohne Reibung sind die Arbeiten gleich:
$$F\cdot 2\pi r = G\cdot h, \qquad\text{also}\qquad F = G\cdot\frac{h}{2\pi r}.$$
Dabei ist $F$ die Kraft an der Hand und $G$ die Kraft, die die Schraube in Längsrichtung ausübt.

:::beispiel[Ein Schraubstock]
Ein Schraubstock hat eine Spindel mit $3{,}0\,\text{mm}$ Ganghöhe und einen Griff mit $15\,\text{cm}$
Hebelarm. Du drückst mit $50\,\text{N}$ am Griff.

**Schritt 1, Wege pro Umdrehung:** Die Hand läuft $2\pi\cdot 0{,}15\,\text{m} = 0{,}942\,\text{m}$. Die Backe
rückt $0{,}0030\,\text{m}$ vor. Beide Längen stehen in Metern.

**Schritt 2, Spannkraft ohne Reibung:**
$F_s = 50\,\text{N}\cdot\dfrac{0{,}942\,\text{m}}{0{,}0030\,\text{m}} = 15\,700\,\text{N}$.

**Schritt 3, mit Reibung:** Ein Schraubstock hat einen Wirkungsgrad von etwa $30\,\%$. Dann bleiben
$0{,}30\cdot 15\,700\,\text{N} = 4700\,\text{N}$.

**Antwort:** Mit $50\,\text{N}$ an der Hand drückt der Schraubstock mit fast $5\,\text{kN}$. Das entspricht dem
Gewicht von fast einer halben Tonne.
:::

:::achtung[Fehler: Millimeter und Zentimeter gemischt]
Ein Wagenheber hat eine Spindel mit $5\,\text{mm}$ Ganghöhe und eine Kurbel mit $25\,\text{cm}$ Radius. Er soll
$6000\,\text{N}$ heben. Falsch gerechnet: $F = 6000\,\text{N}\cdot\dfrac{5}{2\pi\cdot 25} = 191\,\text{N}$.

Hier steht im Zähler eine Länge in Millimetern und im Nenner eine in Zentimetern. Das Verhältnis ist deshalb
um den Faktor $10$ falsch. Richtig, beide Längen in Metern:
$F = 6000\,\text{N}\cdot\dfrac{0{,}005\,\text{m}}{2\pi\cdot 0{,}25\,\text{m}} = 19{,}1\,\text{N}$.
:::

Bei Schrauben ist die Reibung groß, und das ist sogar erwünscht. Sie sorgt für **Selbsthemmung**: Die
Schraube dreht sich unter Last nicht von selbst zurück. Ein Wagenheber hält das Auto auch dann, wenn du die
Kurbel loslässt.

:::merke
**Schiefe Ebene, Keil und Schraube**

- Schiefe Ebene: $F = G\,h/l$, Weg $l$ statt $h$.
- Keil: $F_s = F\,l/d$.
- Schraube: $F = G\,h/(2\pi r)$, alle Längen in derselben Einheit.
- Reibungsfrei gilt immer: Kraft mal Weg der Hand ist gleich Last mal Weg der Last.
:::

```reflexion
frage: Bergstraßen führen oft in Serpentinen, also in vielen Kehren, den Hang hinauf. Erkläre mit der schiefen Ebene, was das einem Lastwagen nützt und was es ihn kostet.
antwort: |
  Die Serpentine verlängert den Weg $l$ bei gleicher Höhe $h$. Die nötige Kraft entlang der Straße $F = G\,h/l$ wird
  dadurch kleiner, der Motor muss weniger Zugkraft aufbringen und die Räder rutschen nicht durch. Dafür ist der Weg
  länger. Die Hubarbeit $G\cdot h$ bleibt gleich, denn Kraft mal Weg ändert sich nicht. Mit Reibung wird die gesamte Arbeit
  des Motors wegen des längeren Wegs sogar etwas größer.
```

### Aufgaben zu schiefer Ebene, Keil und Schraube

```aufgabe
id: p5-schiefe-ebene
titel: Kiste über die Rampe
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine Kiste mit der Gewichtskraft $1000\,\text{N}$ wird reibungsfrei über eine $5{,}0\,\text{m}$ lange Rampe auf eine $1{,}0\,\text{m}$ hohe Ladefläche geschoben. Welche Kraft parallel zur Rampe ist nötig?
teile:
  - typ: zahl
    loesung: "1000*1.0/5.0"
    einheit: "N"
    anzeige: '200'
    fehler:
      - wert: "1000*5.0/1.0"
        meldung: |
          Der Bruch ist umgekehrt. Die Rampe soll Kraft **sparen**, die Kraft muss also kleiner als die Last sein. Es gilt $F = G\cdot h/l$.
hinweise:
  - 'Reibungsfrei gilt $F = G\cdot h/l$.'
loesung: |
  **Ansatz:** Reibungsfrei ist die Arbeit entlang der Rampe gleich der Hubarbeit: $F\cdot l = G\cdot h$, also $F = G\cdot h/l$.
  ---
  **Rechnung:** $F = 1000\,\text{N}\cdot\dfrac{1{,}0\,\text{m}}{5{,}0\,\text{m}} = 200\,\text{N}$. Probe: $200\,\text{N}\cdot 5{,}0\,\text{m} = 1000\,\text{N}\cdot 1{,}0\,\text{m} = 1000\,\text{J}$.
```

```aufgabe
id: p5-6-konzept
titel: Eine längere Rampe
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Dieselbe Kiste soll reibungsfrei auf dieselbe Ladefläche geschoben werden. Statt einer $3\,\text{m}$ langen Rampe nimmst du eine $6\,\text{m}$ lange. Was ändert sich?
teile:
  - typ: auswahl
    optionen:
      - "Die nötige Kraft halbiert sich, die verrichtete Arbeit bleibt gleich."
      - "Die nötige Kraft halbiert sich, und man verrichtet auch nur halb so viel Arbeit."
      - "Die Kraft bleibt gleich, nur der Weg wird länger."
      - "Die Kraft wird größer, weil man die Kiste weiter schieben muss."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Arbeit ist Kraft mal Weg. Halbe Kraft mal doppelter Weg ergibt dieselbe Arbeit. Die Kiste gewinnt ja auch dieselbe Lageenergie $G\cdot h$.
      - wert: 2
        meldung: |
          Die Kraft hängt von der Neigung ab: $F = G\cdot h/l$. Bei doppelter Länge und gleicher Höhe wird die Rampe flacher, und die Kraft halbiert sich.
      - wert: 3
        meldung: |
          Ein längerer Weg macht die Kraft nicht größer. Die Rampe ist flacher, deshalb zieht ein kleinerer Anteil der Gewichtskraft hangabwärts.
hinweise:
  - 'Vergleiche $F = G\cdot h/l$ und die Arbeit $F\cdot l$ für beide Rampen.'
loesung: |
  **Kraft:** $F = G\cdot h/l$. Die Höhe bleibt gleich, die Länge verdoppelt sich, also halbiert sich die Kraft.
  ---
  **Arbeit:** $F\cdot l = G\cdot h$ bleibt gleich. Halbe Kraft mal doppelter Weg ergibt dieselbe Arbeit. Das ist die goldene Regel der Mechanik.
```

```aufgabe
id: p5-schiefe-ebene-winkel
titel: Ein Fass auf der Rampe
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Fass mit $150\,\text{kg}$ wird reibungsfrei und gleichmäßig eine um $15^\circ$ geneigte Rampe hinaufgeschoben, die Kraft wirkt parallel zur Rampe. Berechne die nötige Schubkraft und die Normalkraft der Rampe. Runde auf ganze Newton.
teile:
  - typ: zahl
    label: Schubkraft parallel zur Rampe
    loesung: "150*9.81*sin(inRad(15))"
    einheit: "N"
    anzeige: '381'
    fehler:
      - wert: "150*9.81*cos(inRad(15))"
        meldung: |
          Das ist der Anteil senkrecht zur Rampe. Entlang einer flachen Rampe zieht nur ein **kleiner** Anteil der Gewichtskraft, und der gehört zum Sinus.
      - wert: "150*sin(inRad(15))"
        meldung: |
          Du hast die Masse statt der Gewichtskraft zerlegt. Rechne zuerst $G = m g$ in Newton aus.
  - typ: zahl
    label: Normalkraft
    loesung: "150*9.81*cos(inRad(15))"
    einheit: "N"
    anzeige: '1421'
    fehler:
      - wert: "150*9.81"
        meldung: |
          Auf einer geneigten Rampe ist die Normalkraft **kleiner** als die Gewichtskraft. Sie gleicht nur den Anteil senkrecht zur Rampe aus, $G\cos\alpha$.
hinweise:
  - Berechne zuerst die Gewichtskraft $G = m g$.
  - 'Zerlege sie: entlang der Rampe $G\sin\alpha$, senkrecht dazu $G\cos\alpha$.'
gefuehrt:
  - text: Berechne die Gewichtskraft des Fasses in Newton.
    teil: { typ: zahl, loesung: "150*9.81", einheit: "N" }
    erklaerung: $G = 150\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 1472\,\text{N}$.
  - text: Welcher Anteil von $G$ zieht entlang der Rampe hangabwärts? Antwort in Newton.
    teil: { typ: zahl, loesung: "150*9.81*sin(inRad(15))", einheit: "N" }
    erklaerung: $F_H = G\sin 15^\circ = 1472\,\text{N}\cdot 0{,}259 = 381\,\text{N}$.
  - text: Überlege, wie groß die Schubkraft sein muss, wenn das Fass gleichmäßig hinaufgeschoben wird.
    erklaerung: Gleichmäßig heißt konstante Geschwindigkeit. Dann ist die Summe der Kräfte entlang der Rampe null. Die Schubkraft ist also genau $381\,\text{N}$.
  - text: Berechne die Normalkraft in Newton.
    teil: { typ: zahl, loesung: "150*9.81*cos(inRad(15))", einheit: "N" }
    erklaerung: $F_N = G\cos 15^\circ = 1472\,\text{N}\cdot 0{,}966 = 1421\,\text{N}$.
loesung: |
  **Ansatz:** Das Fass bewegt sich gleichmäßig, also ist die Summe der Kräfte null. Wir zerlegen die Gewichtskraft entlang der Rampe und senkrecht dazu.
  ---
  **Gewichtskraft:** $G = 150\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 1472\,\text{N}$.
  ---
  **Schubkraft:** Sie gleicht die Hangabtriebskraft aus, $F = G\sin 15^\circ = 1472\,\text{N}\cdot 0{,}259 = 381\,\text{N}$.
  ---
  **Normalkraft:** Sie gleicht den senkrechten Anteil aus, $F_N = G\cos 15^\circ = 1472\,\text{N}\cdot 0{,}966 = 1421\,\text{N}$. Kontrolle: Beide Anteile sind kleiner als $G$, wie es sein muss.
```

```aufgabe
id: p5-keil
titel: Spaltkeil
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Spaltkeil ist $10\,\text{cm}$ lang und am Rücken $2{,}0\,\text{cm}$ breit. Er wird mit einer mittleren Kraft von $200\,\text{N}$ ins Holz getrieben. Wie groß ist, reibungsfrei gerechnet, die Kraft, mit der er das Holz auseinanderdrückt?
teile:
  - typ: zahl
    loesung: "200*10/2.0"
    einheit: "N"
    anzeige: '1000'
    fehler:
      - wert: "200*2.0/10"
        meldung: |
          Der Bruch ist umgekehrt. Der Keil wird um seine **Länge** eingetrieben und drückt nur um seine **Rückenbreite** auseinander. Kleiner Weg heißt große Kraft.
hinweise:
  - 'Goldene Regel: Arbeit beim Eintreiben gleich Arbeit beim Auseinanderdrücken.'
  - 'Beim Eintreiben um die Länge $l$ wird das Holz um die Rückenbreite $d$ auseinandergedrückt: $F\cdot l = F_s\cdot d$.'
loesung: |
  **Ansatz:** Reibungsfrei ist die Arbeit beim Eintreiben gleich der Arbeit beim Spalten: $F\cdot l = F_s\cdot d$.
  ---
  **Umstellen:** $F_s = F\cdot\dfrac{l}{d}$.
  ---
  **Rechnung:** $F_s = 200\,\text{N}\cdot\dfrac{10\,\text{cm}}{2{,}0\,\text{cm}} = 1000\,\text{N}$. In Wirklichkeit ist es wegen der Reibung deutlich weniger.
```

```aufgabe
id: p5-6-strasse
titel: Ein Kleintransporter auf einer steilen Bergstraße
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Kleintransporter mit $1200\,\text{kg}$ steht auf einer sehr steilen Bergstraße mit $25\,\%$ Steigung. Mit welcher Kraft entlang der Straße müssen die Bremsen ihn mindestens halten? Rollreibung vernachlässigen wir. Runde auf ganze Newton.
teile:
  - typ: zahl
    loesung: "1200*9.81*sin(atan(0.25))"
    einheit: "N"
    anzeige: '2855'
    fehler:
      - wert: "1200*9.81*0.25"
        meldung: |
          Die Steigung $25\,\%$ ist der **Tangens** des Neigungswinkels, nicht der Sinus. Bei so steilen Straßen unterscheiden sich beide merklich. Berechne zuerst $\alpha = \arctan 0{,}25$.
      - wert: "1200*9.81*cos(atan(0.25))"
        meldung: |
          Das ist der Anteil der Gewichtskraft senkrecht zur Straße. Hangabwärts zieht $G\sin\alpha$.
hinweise:
  - '$25\,\%$ Steigung heißt $25\,\text{m}$ Höhe auf $100\,\text{m}$ waagrechter Strecke, also $\tan\alpha = 0{,}25$.'
  - 'Berechne $\alpha$, dann die Hangabtriebskraft $F_H = m g\sin\alpha$.'
loesung: |
  **Ansatz:** Die Bremsen müssen die Hangabtriebskraft $F_H = m g\sin\alpha$ ausgleichen. Den Winkel erhalten wir aus der Steigung.
  ---
  **Winkel:** $\tan\alpha = 0{,}25$, also $\alpha = \arctan 0{,}25 = 14{,}0^\circ$ und $\sin\alpha = 0{,}2425$.
  ---
  **Kraft:** $F_H = 1200\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}2425 = 2855\,\text{N}$.
  ---
  **Vergleich:** Mit $\sin\alpha \approx 0{,}25$ käme $2943\,\text{N}$ heraus, rund $3\,\%$ zu viel. Bei flachen Straßen wäre der Unterschied vernachlässigbar.
```

```aufgabe
id: p5-6-fehler-schraube
titel: Fehler bei einer Schraubzwinge finden
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Eine Schraubzwinge hat eine Spindel mit $2{,}5\,\text{mm}$ Ganghöhe. Ihr Griff ist ein Querstab, an dessen Enden man im Abstand $12\,\text{cm}$ von der Spindelachse dreht. Der Querstab ist also $24\,\text{cm}$ lang. Eine Mitschülerin rechnet die Spannkraft für $60\,\text{N}$ an der Hand ohne Reibung so:

  „$F_s = 60\,\text{N}\cdot\dfrac{2\pi\cdot 0{,}24\,\text{m}}{0{,}0025\,\text{m}} = 36\,191\,\text{N}$.“

  Finde den Fehler und berechne die richtige Spannkraft in Newton. Runde auf ganze Newton.
teile:
  - typ: zahl
    loesung: "60*2*pi*0.12/0.0025"
    einheit: "N"
    anzeige: '18096'
    fehler:
      - wert: "60*2*pi*0.24/0.0025"
        meldung: |
          Das ist das Ergebnis der Mitschülerin. In $2\pi r$ steht der **Radius** des Kreises, den die Hand beschreibt. Das ist der Abstand der Hand von der Achse, nicht die Länge des ganzen Querstabs.
hinweise:
  - Welchen Kreis beschreibt die Hand bei einer Umdrehung? Wie groß ist sein Radius?
  - 'Die Hand ist $12\,\text{cm}$ von der Achse entfernt. Der Kreisumfang ist $2\pi\cdot 0{,}12\,\text{m}$.'
loesung: |
  **Ansatz:** Ohne Reibung gilt $F\cdot 2\pi r = F_s\cdot h$. Dabei ist $r$ der Radius des Kreises, auf dem die Hand läuft.
  ---
  **Fehler:** Die Mitschülerin hat die Länge des Querstabs, also den Durchmesser, als Radius eingesetzt. Die Hand ist aber nur $12\,\text{cm}$ von der Achse entfernt.
  ---
  **Richtig:** $F_s = 60\,\text{N}\cdot\dfrac{2\pi\cdot 0{,}12\,\text{m}}{0{,}0025\,\text{m}} = 60\,\text{N}\cdot 301{,}6 = 18\,096\,\text{N}$, also halb so viel.
```

```aufgabe
id: p5-schraube
titel: Ein Wagenheber mit viel Reibung
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Schraubenwagenheber hat eine Gewindesteigung (Ganghöhe) von $4{,}0\,\text{mm}$ und wird mit einer Kurbel von $30\,\text{cm}$ Radius bedient. Er soll eine Last von $8000\,\text{N}$ heben. Der Wirkungsgrad beträgt nur $25\,\%$, die Reibung ist also groß, dafür ist der Heber selbsthemmend. Welche Kraft an der Kurbel ist nötig? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "8000*0.004/(2*pi*0.30*0.25)"
    einheit: "N"
    anzeige: '67{,}9'
    fehler:
      - wert: "8000*0.004/(2*pi*0.30)"
        meldung: |
          Das ist die Kraft ohne Reibung. Mit einem Wirkungsgrad von $25\,\%$ brauchst du viermal so viel.
      - wert: "8000*0.004/(2*pi*0.30)*0.25"
        meldung: |
          Mit Reibung muss die Kraft **größer** werden. Die ideale Kraft wird durch den Wirkungsgrad geteilt, nicht mit ihm multipliziert.
hinweise:
  - 'Bei einer Umdrehung legt die Hand $2\pi r$ zurück, die Last steigt um $h$. Rechne beide Längen in Metern.'
  - 'Der Wirkungsgrad ist $\eta = \dfrac{G\cdot h}{F\cdot 2\pi r}$. Löse nach $F$ auf.'
loesung: |
  **Ansatz:** Der Wirkungsgrad vergleicht die Hubarbeit mit der Arbeit an der Kurbel, für eine Umdrehung: $\eta = \dfrac{G\cdot h}{F\cdot 2\pi r}$. Also $F = \dfrac{G\cdot h}{\eta\cdot 2\pi r}$.
  ---
  **Ohne Reibung:** $F_0 = 8000\,\text{N}\cdot\dfrac{0{,}0040\,\text{m}}{2\pi\cdot 0{,}30\,\text{m}} = 8000\,\text{N}\cdot\dfrac{0{,}0040\,\text{m}}{1{,}885\,\text{m}} = 17{,}0\,\text{N}$.
  ---
  **Mit Wirkungsgrad:** $F = \dfrac{17{,}0\,\text{N}}{0{,}25} = 67{,}9\,\text{N}$.
  ---
  **Deutung:** Ein Mensch hebt damit ein Auto. Die Kraft an der Kurbel ist rund $118$-mal kleiner als die Last, obwohl drei Viertel der Arbeit als Wärme verloren gehen.
```

## Goldene Regel der Mechanik und Wirkungsgrad

```aufgabe
id: p5-7-check
art: check
titel: "Vorwissen: Hubarbeit"
niveau: 1
angabe: |
  Wie viel Arbeit brauchst du mindestens, um einen Koffer mit $20\,\text{kg}$ um $1{,}5\,\text{m}$ hochzuheben? Runde auf ganze Joule.
teile:
  - typ: zahl
    loesung: "20*9.81*1.5"
    einheit: "J"
    anzeige: '294'
    fehler:
      - wert: "20*1.5"
        meldung: |
          Du hast Masse mal Höhe gerechnet. Arbeit ist aber **Kraft** mal Weg. Die Kraft ist hier die Gewichtskraft $m g$.
hinweise:
  - 'Die Hubarbeit ist $W = m\cdot g\cdot h$.'
loesung: |
  Beim langsamen Heben brauchst du eine Kraft gleich der Gewichtskraft $m g$, und zwar über den Weg $h$. Also ist die Hubarbeit $W = m g h$.
  ---
  $W = 20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}5\,\text{m} = 294\,\text{J}$. Wiederholen kannst du das im Abschnitt [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).
```

In allen bisherigen Abschnitten ist dir dasselbe Muster begegnet. Wo eine Maschine Kraft spart, verlangt sie
einen längeren Weg:

- **Hebel:** fünffacher Kraftarm, ein Fünftel der Kraft, fünffacher Weg der Hand.
- **Flaschenzug:** vier tragende Seilstücke, ein Viertel der Kraft, vierfacher Seilweg.
- **Rampe:** fünfmal so lang wie hoch, ein Fünftel der Kraft, fünffacher Weg.

In jedem Fall bleibt das Produkt aus Kraft und Weg gleich. Dieses Produkt ist die **Arbeit** aus dem Abschnitt
[Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).

:::satz[Goldene Regel der Mechanik]
Mit keiner einfachen Maschine kann man Arbeit sparen. Was man an Kraft spart, muss man an Weg zusetzen.
Ohne Reibung gilt
$$F_1\cdot s_1 = F_2\cdot s_2.$$
Dabei ist $F_1$ die Kraft, die du aufbringst, und $s_1$ der Weg, den deine Hand zurücklegt. $F_2$ ist die
Kraft auf die Last und $s_2$ deren Weg.

**Beispiel:** Ein Flaschenzug mit drei tragenden Seilstücken hebt $900\,\text{N}$ um $1{,}0\,\text{m}$. Du ziehst
mit $300\,\text{N}$ über $3{,}0\,\text{m}$. Beide Seiten ergeben $900\,\text{J}$.

**Kein Beispiel:** Eine Maschine, die mit $300\,\text{N}$ über $1{,}0\,\text{m}$ eine Last von $900\,\text{N}$
um $1{,}0\,\text{m}$ hebt, gibt es nicht. Sie würde $900\,\text{J}$ abgeben, aber nur $300\,\text{J}$ aufnehmen.
:::

### Warum die goldene Regel gilt

Diese Stelle verbindet zwei Kapitel. Sie ist für die mündliche Prüfung besonders wichtig.

1. **Worum geht es?** Wir wollen begründen, warum keine Maschine Arbeit sparen kann.
2. **Bild:** Eine Maschine ist wie eine Wechselstube für Energie. Sie tauscht „viel Kraft, kurzer Weg“
   gegen „wenig Kraft, langer Weg“. Sie kann aber nichts dazulegen.
3. **Schritte:** Die Arbeit, die du an der Maschine verrichtest, ist Energie, die du hineinsteckst. Die
   Arbeit, die die Maschine an der Last verrichtet, ist Energie, die herauskommt. Nach dem
   **Energieerhaltungssatz** kann Energie weder entstehen noch verschwinden. Ohne Reibung muss deshalb genau
   so viel herauskommen, wie hineingesteckt wurde.
4. **In Worten:** Die goldene Regel ist die Energieerhaltung, angewandt auf Maschinen.
5. **Typisches Missverständnis:** „Ein Flaschenzug verstärkt die Kraft, also liefert er Energie.“ Nein. Eine
   Maschine kann eine Kraft vergrößern, einen Weg verlängern, eine Richtung umlenken oder eine Drehung
   beschleunigen. Die abgegebene Arbeit ist aber höchstens so groß wie die aufgenommene.

```aufgabe
id: p5-goldene-regel
titel: Was sagt die goldene Regel?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Welche Aussagen sind für eine **reibungsfreie** einfache Maschine richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Man spart Kraft, muss aber einen längeren Weg zurücklegen."
      - "Man spart Arbeit, weil man weniger Kraft braucht."
      - "Die aufgewendete Arbeit ist gleich der Nutzarbeit."
      - "Eine feste Rolle halbiert die Kraft."
      - "Die goldene Regel folgt aus der Energieerhaltung."
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          Weniger Kraft heißt nicht weniger Arbeit. Arbeit ist Kraft **mal Weg**, und der Weg wird im selben Verhältnis länger. Die Arbeit bleibt gleich.
      - wert: [0, 2, 3, 4]
        meldung: |
          Die feste Rolle hat zwei gleich lange Hebelarme. Sie ändert nur die **Richtung** der Kraft, nicht ihren Betrag. Halbieren kann nur die lose Rolle.
hinweise:
  - Prüfe jede Aussage mit der Formel $F_1 s_1 = F_2 s_2$.
loesung: |
  **Richtig:** Kraft sparen kostet Weg, und Kraft mal Weg bleibt gleich. Deshalb ist die aufgewendete Arbeit gleich der Nutzarbeit. Das ist die Energieerhaltung.
  ---
  **Falsch:** Arbeit spart man nie. Die feste Rolle ändert nur die Richtung der Kraft.
```

Schon Galileo Galilei hat um 1600 erkannt: Was eine Maschine an Kraft gewinnt, verliert sie an Weg und damit
an Geschwindigkeit. Das war eine der ersten Formen eines Erhaltungssatzes, lange bevor es den Begriff
„Energie“ gab. Würde eine Maschine mehr Arbeit abgeben, als sie aufnimmt, könnte man mit ihr ein
**Perpetuum mobile** bauen, also eine Maschine, die von selbst ewig läuft. Das gelingt nie.

Die goldene Regel ist auch ein bequemes Werkzeug. Wege lassen sich leicht messen, Kräfte in einer Maschine
oft nicht. Kennt man das Wegverhältnis, kennt man ohne Reibung auch das Kraftverhältnis.

### Überblick: alle einfachen Maschinen

Die Tabelle fasst die reibungsfreien Beziehungen zusammen. Dabei ist $G$ die Last, $F$ die aufgewendete
Kraft und $h$ die Hubhöhe. Kraft mal Weg der Hand ist in jeder Zeile gleich Last mal Weg der Last.

| Maschine | Kraft $F$ für die Last $G$ | Weg der Hand | Beispiel |
|---|---|---|---|
| Hebel | $F = G\cdot b/a$ | $s_G\cdot a/b$ | Brechstange, Schere. |
| Wellrad | $F = G\cdot r/R$ | $s_G\cdot R/r$ | Kurbel, Lenkrad. |
| feste Rolle | $F = G$ | $h$ | Fahnenmast. |
| lose Rolle | $F = G/2$ | $2h$ | Kran-Unterflasche. |
| Flaschenzug | $F = G/n$ | $n h$ | Kran, Segelboot. |
| schiefe Ebene | $F = G\cdot h/l$ | $l$ | Rampe, Serpentine. |
| Keil | $F_s = F\cdot l/d$ | $l$ | Axt, Messer. |
| Schraube | $F = G\cdot h/(2\pi r)$ | $2\pi r$ je Umdrehung | Wagenheber, Schraubstock. |

:::intuition
Jede einfache Maschine ist ein Tauschgeschäft zwischen Kraft und Weg. Kennst du das Wegverhältnis, kennst
du das Kraftverhältnis. Bei einem unbekannten Werkzeug kannst du deshalb einfach messen: Wie weit bewegt
sich meine Hand, wie weit die Last? Das Verhältnis der Wege ist ohne Reibung das umgekehrte Verhältnis der
Kräfte.
:::

```aufgabe
id: p5-7-wegverhaeltnis
titel: Kraft aus dem Wegverhältnis
niveau: 1
lernziel: 5
kompetenz: anwenden
angabe: |
  Du hebst mit einem unbekannten Hebelwerkzeug eine Last von $900\,\text{N}$. Du misst: Wenn deine Hand $60\,\text{cm}$ nach unten wandert, hebt sich die Last um $4{,}0\,\text{cm}$. Welche Kraft brauchst du ohne Reibung?
teile:
  - typ: zahl
    loesung: "900*4.0/60"
    einheit: "N"
    anzeige: '60'
    fehler:
      - wert: "900*60/4.0"
        meldung: |
          Der Bruch ist umgekehrt. Deine Hand legt den **längeren** Weg zurück, also brauchst du die **kleinere** Kraft.
hinweise:
  - 'Goldene Regel: $F\cdot s_{\text{Hand}} = G\cdot s_{\text{Last}}$.'
loesung: |
  **Ansatz:** Ohne Reibung gilt die goldene Regel: $F\cdot s_{\text{Hand}} = G\cdot s_{\text{Last}}$. Den Aufbau des Werkzeugs müssen wir dafür gar nicht kennen.
  ---
  **Rechnung:** $F = 900\,\text{N}\cdot\dfrac{4{,}0\,\text{cm}}{60\,\text{cm}} = 60\,\text{N}$. Probe: $60\,\text{N}\cdot 0{,}60\,\text{m} = 36\,\text{J} = 900\,\text{N}\cdot 0{,}040\,\text{m}$.
```

### Der Wirkungsgrad

In jeder realen Maschine reiben Lager, Seile und Zahnräder. Ein Teil der zugeführten Arbeit wird dabei in
**innere Energie** umgewandelt: Die Teile werden warm. Diese Energie kommt nicht an der Last an. Sie ist
für den Zweck der Maschine verloren, aber nicht aus der Welt verschwunden.

:::definition[Wirkungsgrad]
Der **Wirkungsgrad** $\eta$ (griechisch „eta“) einer Maschine ist das Verhältnis von Nutzarbeit zu
zugeführter Arbeit:
$$\eta = \frac{W_{\text{nutz}}}{W_{\text{zu}}} = \frac{P_{\text{nutz}}}{P_{\text{zu}}}.$$
Dabei ist $W_{\text{nutz}}$ die Arbeit an der Last und $W_{\text{zu}}$ die Arbeit, die in die Maschine
hineingesteckt wird. $P$ steht für die Leistungen, also Arbeit pro Zeit. Der Wirkungsgrad hat keine Einheit
und wird oft in Prozent angegeben. Für jede reale Maschine gilt $0 \le \eta < 1$.

**Beispiel:** Ein Flaschenzug hebt eine Last mit $600\,\text{J}$ Hubarbeit. Du hast am Seil $800\,\text{J}$
verrichtet. Dann ist $\eta = 600/800 = 0{,}75 = 75\,\%$.

**Kein Beispiel:** Ein Wirkungsgrad von $1{,}2$ ist **kein** möglicher Wert. Die Maschine würde mehr Arbeit
abgeben, als sie aufnimmt.
:::

```plot
x: [0, 4]
y: [0, 950]
achsen: { x: "", y: "Energie in J" }
balken:
  - { x: 1, y: 800 }
  - { x: 2, y: 600 }
  - { x: 3, y: 200 }
punkte:
  - { x: 1, y: 860, label: "zugeführt 800 J" }
  - { x: 2, y: 660, label: "Nutzarbeit 600 J" }
  - { x: 3, y: 260, label: "Wärme 200 J" }
beschriftung: "Energiebilanz des Flaschenzugs aus dem Beispiel zum Wirkungsgrad: Von 800 J zugeführter Arbeit kommen 600 J als Hubarbeit an der Last an, 200 J werden durch Reibung zu innerer Energie. Nutzarbeit und Wärme ergeben zusammen wieder 800 J. Der Wirkungsgrad ist 600 J durch 800 J, also 75 Prozent."
```

Typische Werte sind: Flaschenzug $0{,}6$ bis $0{,}9$, Schraube $0{,}2$ bis $0{,}5$, Zahnradgetriebe
$0{,}95$ bis $0{,}98$, Elektromotor $0{,}8$ bis $0{,}95$, Verbrennungsmotor $0{,}25$ bis $0{,}4$.

:::beispiel[Ein Problem, zwei Lösungswege]
Eine Last von $1200\,\text{N}$ soll um $0{,}50\,\text{m}$ gehoben werden. Zur Verfügung steht ein Flaschenzug
mit $6$ tragenden Seilstücken und dem Wirkungsgrad $0{,}75$. Welche Zugkraft braucht man?

**Weg 1, über Kräfte:** Ohne Reibung wäre $F_0 = 1200\,\text{N}/6 = 200\,\text{N}$. Mit Reibung muss man mehr
aufbringen, also teilen wir durch $\eta$: $F = 200\,\text{N}/0{,}75 = 267\,\text{N}$.

**Weg 2, über Arbeit:** Die Nutzarbeit ist $1200\,\text{N}\cdot 0{,}50\,\text{m} = 600\,\text{J}$. Die
zugeführte Arbeit ist $600\,\text{J}/0{,}75 = 800\,\text{J}$. Der Seilweg ist $6\cdot 0{,}50\,\text{m} = 3{,}0\,\text{m}$.
Also $F = 800\,\text{J}/3{,}0\,\text{m} = 267\,\text{N}$.

**Antwort:** Beide Wege liefern $267\,\text{N}$. Der Weg über die Arbeit ist oft sicherer, weil man nicht
überlegen muss, wo genau die Reibung angreift.
:::

:::achtung[Fehler: mit dem Wirkungsgrad multipliziert statt geteilt]
Ein Flaschenzug bräuchte ohne Reibung $250\,\text{N}$. Sein Wirkungsgrad ist $0{,}80$. Falsch gerechnet:
$F = 250\,\text{N}\cdot 0{,}80 = 200\,\text{N}$.

Mit Reibung braucht man **mehr** Kraft, nicht weniger. Die aufgewendete Arbeit ist größer als die Nutzarbeit.
Richtig ist $F = 250\,\text{N}/0{,}80 = 313\,\text{N}$. Die Kontrollfrage lautet immer: Muss die gesuchte Größe
durch die Reibung größer oder kleiner werden?
:::

### Mehrere Maschinen hintereinander

Oft arbeiten mehrere Maschinen hintereinander, etwa Motor, Getriebe und Seilwinde. Jede gibt nur ihren Anteil
$\eta_i$ der empfangenen Energie weiter. Die nächste bekommt also schon weniger. Deshalb **multiplizieren**
sich die Wirkungsgrade:
$$\eta_{\text{gesamt}} = \eta_1\cdot\eta_2\cdot\eta_3\cdots$$

:::beispiel[Der Antrieb eines Baukrans]
Ein Kran hebt eine Last mit $800\,\text{kg}$ gleichmäßig mit $0{,}50\,\text{m/s}$. Der Elektromotor hat den
Wirkungsgrad $0{,}88$, das Getriebe $0{,}96$ und der Seiltrieb mit Rollen $0{,}85$. Welche elektrische
Leistung nimmt der Motor auf?

**Schritt 1, Gesamtwirkungsgrad:** $\eta = 0{,}88\cdot 0{,}96\cdot 0{,}85 = 0{,}718$.

**Schritt 2, Nutzleistung:** Die Hubkraft ist $m g$, die Geschwindigkeit $v$. Die Leistung ist Kraft mal
Geschwindigkeit: $P_{\text{nutz}} = 800\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}50\,\text{m/s} = 3924\,\text{W}$.

**Schritt 3, aufgenommene Leistung:** $P_{\text{zu}} = \dfrac{3924\,\text{W}}{0{,}718} = 5465\,\text{W} \approx 5{,}5\,\text{kW}$.

**Antwort:** Der Motor nimmt etwa $5{,}5\,\text{kW}$ auf. Rund $1{,}5\,\text{kW}$ werden in Motor, Getriebe und
Rollen zu Wärme.
:::

:::achtung[Fehler: Wirkungsgrade gemittelt]
Ein Motor mit $\eta_1 = 0{,}90$ treibt eine Pumpe mit $\eta_2 = 0{,}80$. Falsch gerechnet:
$\eta = \dfrac{0{,}90 + 0{,}80}{2} = 0{,}85$.

Die Pumpe bekommt nur die $90\,\%$, die der Motor weitergibt, und davon nutzt sie $80\,\%$. Richtig ist
$\eta = 0{,}90\cdot 0{,}80 = 0{,}72$. Der Gesamtwirkungsgrad ist immer **kleiner** als der kleinste
Einzelwirkungsgrad.
:::

:::pruefung
**So rechnest du sicher mit dem Wirkungsgrad.** Rechne zuerst so, als gäbe es keine Reibung. Frage dich dann:
Ist die gesuchte Größe etwas, das ich **hineinstecke** (Kraft, Arbeit, Leistung des Antriebs)? Dann wird sie
durch die Reibung größer, und du teilst durch $\eta$. Ist sie etwas, das **herauskommt** (Hubarbeit,
Nutzleistung)? Dann wird sie kleiner, und du multiplizierst mit $\eta$. In der mündlichen Prüfung klingt das
so: „Ohne Reibung bräuchte ich $250\,\text{N}$. Die Reibung kostet zusätzlich Arbeit, also brauche ich mehr,
nämlich $250\,\text{N}$ geteilt durch $0{,}8$.“
:::

```reflexion
frage: Ein Freund sagt, ein Flaschenzug mit sehr vielen Rollen sei immer besser, weil man dann fast keine Kraft mehr braucht. Was antwortest du ihm? Denk an Weg, Reibung und Zeit.
antwort: |
  Mit mehr Seilstücken sinkt die nötige Kraft, aber der Seilweg wächst im selben Verhältnis. Die Arbeit bleibt gleich.
  Jede zusätzliche Rolle bringt außerdem Reibung, der Wirkungsgrad sinkt, und man muss insgesamt sogar mehr Arbeit
  aufwenden. Wer mit begrenzter Leistung arbeitet, braucht deshalb auch länger. Viele Rollen lohnen sich nur, wenn die
  Kraft sonst nicht ausreicht.
```

### Aufgaben zur goldenen Regel und zum Wirkungsgrad



```aufgabe
id: p5-wirkungsgrad-kran
titel: Wirkungsgrad eines Lastenaufzugs
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Elektromotor nimmt die Leistung $2{,}5\,\text{kW}$ auf. Er hebt eine Palette mit $500\,\text{kg}$ in $30\,\text{s}$ um $12\,\text{m}$. Berechne die Nutzarbeit in Joule und den Wirkungsgrad in Prozent. Runde den Wirkungsgrad auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Nutzarbeit
    loesung: "500*9.81*12"
    einheit: "J"
    anzeige: '58860'
    fehler:
      - wert: "500*12"
        meldung: |
          Du hast Masse mal Höhe gerechnet. Die Hubarbeit ist Gewichtskraft mal Höhe, $m g h$.
  - typ: zahl
    label: Wirkungsgrad
    loesung: "500*9.81*12/(2500*30)*100"
    einheit: "%"
    anzeige: '78{,}5'
    fehler:
      - wert: "2500*30/(500*9.81*12)*100"
        meldung: |
          Ein Wirkungsgrad über $100\,\%$ ist unmöglich. Du hast den Bruch umgedreht. Es gilt Nutzarbeit **durch** zugeführte Arbeit.
      - wert: "500*9.81*12/2500*100"
        meldung: |
          Du hast Arbeit durch Leistung geteilt. Vergleiche Gleiches mit Gleichem: Die zugeführte **Arbeit** ist Leistung mal Zeit, $2500\,\text{W}\cdot 30\,\text{s}$.
hinweise:
  - 'Die Nutzarbeit ist die Hubarbeit $m g h$. Die zugeführte Arbeit ist $P\cdot t$.'
  - 'Rechne $2{,}5\,\text{kW} = 2500\,\text{W}$ und bilde $\eta = W_{\text{nutz}}/W_{\text{zu}}$.'
gefuehrt:
  - text: Berechne die Nutzarbeit, also die Hubarbeit, in Joule.
    teil: { typ: zahl, loesung: "500*9.81*12", einheit: "J" }
    erklaerung: $W_{\text{nutz}} = m g h = 500\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 12\,\text{m} = 58\,860\,\text{J}$.
  - text: Berechne die zugeführte elektrische Arbeit in Joule.
    teil: { typ: zahl, loesung: "2500*30", einheit: "J" }
    erklaerung: $W_{\text{zu}} = P\cdot t = 2500\,\text{W}\cdot 30\,\text{s} = 75\,000\,\text{J}$, denn $1\,\text{W}\cdot\text{s} = 1\,\text{J}$.
  - text: Berechne den Wirkungsgrad in Prozent.
    teil: { typ: zahl, loesung: "58860/75000*100", einheit: "%" }
    erklaerung: $\eta = 58\,860\,\text{J}/75\,000\,\text{J} = 0{,}785 = 78{,}5\,\%$.
  - text: Wohin geht der Rest der Energie?
    erklaerung: Etwa $16\,\text{kJ}$ werden in Motor, Getriebe und Seilrollen zu innerer Energie, die Teile werden warm.
loesung: |
  **Ansatz:** Der Wirkungsgrad vergleicht die Nutzarbeit, hier die Hubarbeit, mit der zugeführten elektrischen Arbeit.
  ---
  **Nutzarbeit:** $W_{\text{nutz}} = m g h = 500\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 12\,\text{m} = 58\,860\,\text{J}$.
  ---
  **Zugeführte Arbeit:** $W_{\text{zu}} = P\cdot t = 2500\,\text{W}\cdot 30\,\text{s} = 75\,000\,\text{J}$.
  ---
  **Wirkungsgrad:** $\eta = \dfrac{58\,860\,\text{J}}{75\,000\,\text{J}} = 0{,}785 = 78{,}5\,\%$. Der Wert liegt unter $100\,\%$, wie es sein muss.
```

```aufgabe
id: p5-gesamtwirkungsgrad
titel: Eine Kette von Maschinen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Elektromotor ($\eta_1 = 0{,}90$) treibt über ein Getriebe ($\eta_2 = 0{,}95$) eine Seilwinde mit Flaschenzug ($\eta_3 = 0{,}70$). Wie groß ist der Gesamtwirkungsgrad in Prozent? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "0.90*0.95*0.70*100"
    einheit: "%"
    anzeige: '59{,}9'
    fehler:
      - wert: "(0.90+0.95+0.70)/3*100"
        meldung: |
          Wirkungsgrade werden nicht gemittelt. Jede Maschine bekommt nur das, was die vorige weitergibt. Deshalb werden die Wirkungsgrade multipliziert.
      - wert: "70"
        meldung: |
          Das ist nur der schwächste Einzelwirkungsgrad. Auch Motor und Getriebe verlieren etwas. Der Gesamtwirkungsgrad ist kleiner als jeder Einzelwert.
hinweise:
  - Jede Maschine gibt nur ihren Anteil der empfangenen Energie weiter.
  - 'Die Wirkungsgrade werden multipliziert, nicht addiert oder gemittelt.'
loesung: |
  **Ansatz:** Der Motor gibt $90\,\%$ weiter, das Getriebe davon $95\,\%$, die Winde davon $70\,\%$. Die Anteile multiplizieren sich.
  ---
  **Rechnung:** $\eta = 0{,}90\cdot 0{,}95\cdot 0{,}70 = 0{,}599 = 59{,}9\,\%$.
  ---
  **Deutung:** Das schwächste Glied, der Flaschenzug, bestimmt das Ergebnis am stärksten. Wer den Gesamtwirkungsgrad verbessern will, beginnt dort.
```

```aufgabe
id: p5-7-fehler-eta
titel: Fehler bei einer Seilwinde finden
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Eine Seilwinde bräuchte ohne Reibung eine Kurbelkraft von $640\,\text{N}$. Ihr Wirkungsgrad ist $64\,\%$. Ein Mitschüler schreibt: „Mit Reibung brauche ich $640\,\text{N}\cdot 0{,}64 = 410\,\text{N}$.“ Finde den Fehler und berechne die richtige Kurbelkraft in Newton.
teile:
  - typ: zahl
    loesung: "640/0.64"
    einheit: "N"
    anzeige: '1000'
    fehler:
      - wert: "640*0.64"
        meldung: |
          Das ist das Ergebnis des Mitschülers. Prüfe es mit dem gesunden Menschenverstand: Kann Reibung die nötige Kraft **kleiner** machen?
hinweise:
  - Überlege, ob die Kurbelkraft durch die Reibung größer oder kleiner wird.
  - 'Die aufgewendete Arbeit ist die Nutzarbeit geteilt durch $\eta$. Dasselbe gilt bei gleichem Weg für die Kraft.'
loesung: |
  **Ansatz:** Der Wirkungsgrad ist $\eta = \dfrac{W_{\text{nutz}}}{W_{\text{zu}}}$. Bei gleichem Kurbelweg verhält sich die reale Kraft zur idealen wie die zugeführte Arbeit zur Nutzarbeit.
  ---
  **Fehler:** Reibung kostet zusätzlich Arbeit. Die Kraft muss also **größer** werden. Der Mitschüler hat mit $\eta$ multipliziert und eine kleinere Kraft erhalten.
  ---
  **Richtig:** $F = \dfrac{640\,\text{N}}{0{,}64} = 1000\,\text{N}$.
```

```aufgabe
id: p5-7-fermi-klavier
titel: Wie lange dauert es, ein Klavier hinaufzuziehen?
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Klavier mit $250\,\text{kg}$ soll mit einem Flaschenzug von Hand in den dritten Stock gezogen werden. Schätze ab, wie lange das mindestens dauert. Du musst dafür selbst sinnvolle Werte annehmen: die Höhe eines Stockwerks, die Leistung, die ein Mensch über einige Minuten am Seil aufbringen kann, und den Wirkungsgrad eines Flaschenzugs.

  a) Rechne mit deinen Annahmen die Zeit aus und wähle die passende Größenordnung.

  b) Wird es schneller gehen, wenn man einen Flaschenzug mit doppelt so vielen Rollen nimmt?
teile:
  - typ: auswahl
    label: a) Größenordnung der Zeit
    optionen:
      - "etwa $10$ Sekunden"
      - "etwa eine Minute"
      - "etwa $5$ bis $10$ Minuten"
      - "etwa eine Stunde"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Dann müsste ein Mensch über $2000\,\text{W}$ leisten. Das schafft auch ein Spitzensportler nur für wenige Sekunden. Rechne $t = m g h/(\eta P)$ mit einer Dauerleistung von etwa $75\,\text{W}$.
      - wert: 1
        meldung: |
          Prüfe die Leistung, die du angenommen hast. Eine Minute hieße rund $500\,\text{W}$ Dauerleistung. Ein Mensch schafft über einige Minuten eher $50$ bis $100\,\text{W}$.
      - wert: 3
        meldung: |
          Eine Stunde wäre zu lang. Selbst mit nur $50\,\text{W}$ und $\eta = 0{,}6$ dauert es nur etwa $12$ Minuten. Rechne $t = m g h/(\eta P)$ noch einmal nach.
  - typ: auswahl
    label: b) Mehr Rollen
    optionen:
      - "Nein. Die Arbeit bleibt gleich oder wird wegen mehr Reibung sogar größer. Bei gleicher Leistung dauert es mindestens genauso lang."
      - "Ja. Mit mehr Rollen braucht man weniger Kraft und ist deshalb schneller fertig."
      - "Ja, und zwar doppelt so schnell, weil die Kraft halbiert wird."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Weniger Kraft heißt längerer Seilweg. Die Arbeit ändert sich nicht, und die Zeit ist Arbeit durch Leistung. Mehr Rollen helfen nur, wenn deine Kraft sonst nicht reicht.
      - wert: 2
        meldung: |
          Halbe Kraft bedeutet doppelten Seilweg. Bei gleicher Leistung dauert es deshalb mindestens gleich lang, nicht halb so lang.
hinweise:
  - 'Ein Stockwerk ist etwa $3\,\text{m}$ hoch. Ein Mensch leistet über einige Minuten etwa $50$ bis $100\,\text{W}$. Ein Flaschenzug hat etwa $\eta = 0{,}6$ bis $0{,}9$.'
  - 'Rechne die Hubarbeit $m g h$, teile durch $\eta$ für die aufzuwendende Arbeit und dann durch die Leistung für die Zeit.'
loesung: |
  **Annahmen:** Drei Stockwerke zu je $3\,\text{m}$, also $h \approx 9\,\text{m}$. Dauerleistung eines Menschen am Seil etwa $75\,\text{W}$. Wirkungsgrad des Flaschenzugs etwa $0{,}7$.
  ---
  **Hubarbeit:** $W_{\text{nutz}} = 250\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 9\,\text{m} = 22\,000\,\text{J}$.
  ---
  **Aufzuwendende Arbeit und Zeit:** $W_{\text{zu}} = 22\,000\,\text{J}/0{,}7 = 31\,500\,\text{J}$. Die Zeit ist $t = W_{\text{zu}}/P = 31\,500\,\text{J}/75\,\text{W} = 420\,\text{s} \approx 7\,\text{min}$. Mit den Grenzen aus den Hinweisen ($50$ bis $100\,\text{W}$, $\eta = 0{,}6$ bis $0{,}9$) ergeben sich etwa $4$ bis $12$ Minuten.
  ---
  **b)** Nein. Mehr Rollen verkleinern die Kraft, verlängern aber den Seilweg im selben Verhältnis. Die Arbeit bleibt gleich, mit mehr Reibung wird sie sogar größer. Bei gleicher Leistung dauert es mindestens genauso lang. Die goldene Regel spart Kraft, aber weder Arbeit noch Zeit.
```

```aufgabe
id: p5-7-perpetuum
titel: Ein Gedankenexperiment zum Perpetuum mobile
niveau: 3
lernziel: 5
kompetenz: begruenden
angabe: |
  Ein Erfinder schlägt vor: „Ein Flaschenzug mit $4$ Seilstücken hebt mit $250\,\text{N}$ ein Gewicht von $1000\,\text{N}$. Dieses Gewicht lasse ich danach wieder sinken. Es zieht dabei mit seinen vollen $1000\,\text{N}$ an einem zweiten Seil und treibt so den Flaschenzug an. Weil $1000\,\text{N}$ viel mehr ist als $250\,\text{N}$, bleibt Energie übrig, und die Maschine läuft von selbst ewig.“

  Spiele das Gedankenexperiment mit Kräften **und** Wegen durch und erkläre, wo der Denkfehler liegt.
teile:
  - typ: text
    muster: |
      Der Erfinder vergleicht nur Kräfte, nicht Arbeiten. Um das Gewicht um h zu heben, muss man 250 N über den Weg 4h ziehen,
      das sind 1000 N · h. Sinkt das Gewicht um h, gibt es höchstens 1000 N · h ab. Die abgegebene Arbeit ist also genau so
      groß wie die aufgenommene, ohne Reibung. Es bleibt nichts übrig. Mit Reibung ist die abgegebene Arbeit sogar kleiner,
      und die Maschine bleibt stehen. Ein Perpetuum mobile widerspricht dem Energieerhaltungssatz, von dem die goldene Regel
      ein Spezialfall ist.
hinweise:
  - Vergleiche nicht die Kräfte, sondern Kraft mal Weg. Wie weit muss das Seil gezogen werden, wenn das Gewicht um $h$ steigt?
  - 'Hebt sich das Gewicht um $h$, muss das Seil um $4h$ gezogen werden. Wie viel Arbeit gibt das sinkende Gewicht ab, wenn es wieder um $h$ fällt?'
loesung: |
  **Ansatz:** Für Energie zählt nicht die Kraft allein, sondern Kraft mal Weg, also die Arbeit.
  ---
  **Heben:** Um das Gewicht um $h$ zu heben, zieht man mit $250\,\text{N}$ über $4h$. Das ist die Arbeit $250\,\text{N}\cdot 4h = 1000\,\text{N}\cdot h$.
  ---
  **Sinken:** Fällt das Gewicht wieder um $h$, gibt es höchstens $1000\,\text{N}\cdot h$ ab. Das ist genau so viel, wie hineingesteckt wurde. Es bleibt nichts übrig, selbst ohne Reibung. Mit Reibung reicht es nicht einmal für einen Durchgang.
  ---
  **Fazit:** Der Denkfehler ist, Kräfte statt Arbeiten zu vergleichen. Die goldene Regel ist ein Spezialfall der Energieerhaltung, und die verbietet jedes Perpetuum mobile.
```

## Drehbewegung: Winkelgeschwindigkeit und Trägheitsmoment

```aufgabe
id: p5-8-check
art: check
titel: "Vorwissen: Bogenlänge und Bogenmaß"
niveau: 1
angabe: |
  Ein Punkt sitzt $0{,}50\,\text{m}$ von einer Drehachse entfernt. Das Rad dreht sich um den Winkel $2{,}0\,\text{rad}$. Welchen Weg legt der Punkt auf seinem Kreisbogen zurück?
teile:
  - typ: zahl
    loesung: "0.50*2.0"
    einheit: "m"
    anzeige: '1{,}0'
    fehler:
      - wert: "2*pi*0.50*2.0"
        meldung: |
          Du hast den Winkel wie eine Zahl von Umdrehungen behandelt. $2{,}0\,\text{rad}$ sind aber keine zwei Umdrehungen, sondern knapp ein Drittel einer Umdrehung. Im Bogenmaß gilt einfach $b = r\cdot\varphi$.
hinweise:
  - 'Im Bogenmaß gilt für die Bogenlänge $b = r\cdot\varphi$.'
loesung: |
  Im Bogenmaß ist der Winkel genau so definiert, dass Bogenlänge gleich Radius mal Winkel ist: $b = r\cdot\varphi$.
  ---
  $b = 0{,}50\,\text{m}\cdot 2{,}0 = 1{,}0\,\text{m}$. Die Einheit rad ist eine reine Zahl und fällt weg. Wiederholen kannst du das in Mathematik im Abschnitt [Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
```

Bisher ging es um Körper, die sich **nicht** drehen: Die Drehmomente waren im Gleichgewicht. Was passiert,
wenn ein resultierendes Drehmoment wirkt? Dann beginnt der Körper sich zu drehen, oder er dreht sich
schneller oder langsamer. Für diese **Drehbewegung** brauchen wir eigene Größen. Du wirst sehen: Zu jeder
Größe der geradlinigen Bewegung gibt es ein Gegenstück für die Drehung.

Unterscheide dabei sorgfältig zwei Dinge. Bei der **Kreisbewegung** läuft ein Massenpunkt auf einer
Kreisbahn, etwa ein Auto in einer Kurve. Sie ist Thema im
Abschnitt [Kreisbewegung beschreiben: Periode, Frequenz, Winkelgeschwindigkeit](/lernen/physik1/kreisbewegung-gravitation/kreisbewegung-beschreiben-periode-frequenz-winkelgeschwindigkeit). Bei der **Drehbewegung**
dreht sich ein ganzer starrer Körper um eine Achse, etwa ein Rad oder eine CD. Alle seine Punkte drehen sich
dabei gemeinsam um denselben Winkel.

### Drehwinkel, Winkelgeschwindigkeit und Drehzahl

Der **Drehwinkel** $\varphi$ (griechisch „phi“) gibt an, um wie viel sich der Körper gedreht hat. In der Physik
misst man ihn im **Bogenmaß**, Einheit Radiant (rad). Eine volle Umdrehung sind $2\pi\,\text{rad}$.

:::definition[Winkelgeschwindigkeit und Drehzahl]
Die **Winkelgeschwindigkeit** $\omega$ (griechisch „omega“) ist der Drehwinkel pro Zeit:
$$\omega = \frac{\Delta\varphi}{\Delta t}, \qquad [\omega] = \text{rad/s} = \text{s}^{-1}.$$
Dabei steht $\Delta$ (griechisch „Delta“) für „Änderung von“: $\Delta\varphi$ ist der Winkel, um den sich der Körper
in der Zeitspanne $\Delta t$ dreht.
Die **Drehzahl** $n$ ist die Zahl der Umdrehungen pro Zeit. Weil eine Umdrehung $2\pi$ Radiant sind, gilt
$\omega = 2\pi n$, mit $n$ in Umdrehungen pro **Sekunde**.

**Beispiel:** Ein Rad dreht sich in $2{,}0\,\text{s}$ dreimal. Dann ist $n = 1{,}5\,\text{s}^{-1}$ und
$\omega = 2\pi\cdot 1{,}5\,\text{s}^{-1} = 9{,}4\,\text{s}^{-1}$.

**Kein Beispiel:** Die Angabe „$1{,}5\,\text{m/s}$“ ist **keine** Winkelgeschwindigkeit. Sie ist eine
Bahngeschwindigkeit, also ein Weg pro Zeit. Eine Winkelgeschwindigkeit hat die Einheit $\text{s}^{-1}$.
:::

```aufgabe
id: p5-8-umlauf-check
art: check
titel: Winkelgeschwindigkeit aus der Umlaufdauer
niveau: 1
angabe: |
  Ein Ventilatorflügel braucht für eine volle Umdrehung $0{,}050\,\text{s}$. Wie groß ist seine Winkelgeschwindigkeit in $\text{s}^{-1}$? Runde auf ganze Zahlen.
teile:
  - typ: zahl
    loesung: "2*pi/0.050"
    einheit: "1/s"
    anzeige: '126'
    fehler:
      - wert: "1/0.050"
        meldung: |
          Das ist die Drehzahl $n = 20\,\text{s}^{-1}$, also Umdrehungen pro Sekunde. Eine Umdrehung sind aber $2\pi$ Radiant. Es fehlt der Faktor $2\pi$.
hinweise:
  - 'Eine Umdrehung sind $2\pi\,\text{rad}$. Teile diesen Winkel durch die Zeit für eine Umdrehung.'
loesung: |
  In $0{,}050\,\text{s}$ dreht sich der Flügel um $2\pi\,\text{rad}$. Die Winkelgeschwindigkeit ist Winkel durch Zeit.
  ---
  $\omega = \dfrac{2\pi}{0{,}050\,\text{s}} = 126\,\text{s}^{-1}$. Das sind $20$ Umdrehungen pro Sekunde.
```

Ändert sich $\omega$, nimmt man wie bei der Geschwindigkeit die Änderung in einem sehr kurzen Zeitraum.
Mathematisch ist $\omega$ dann die Ableitung des Winkels nach der Zeit, so wie $v$ die Ableitung des Orts ist
(siehe Mathematik, Abschnitt [Anwendungen in Physik und Biologie: Bewegung und Wachstum](/lernen/mathe3/differentialrechnung/anwendungen-in-physik-und-biologie-bewegung-und-wachstum)).

Alle Punkte eines starren Körpers haben dieselbe Winkelgeschwindigkeit. Ihre **Bahngeschwindigkeit** $v$, also
die Geschwindigkeit auf ihrem Kreis, hängt aber vom Abstand $r$ zur Achse ab. In der Zeit $\Delta t$ dreht sich
der Körper um $\Delta\varphi$, und ein Punkt im Abstand $r$ legt den Bogen $r\cdot\Delta\varphi$ zurück. Teilt
man durch $\Delta t$, folgt
$$v = \omega\cdot r.$$
Ein Punkt am Rand einer CD ist deshalb schneller als einer nahe der Mitte, obwohl beide in derselben Zeit
einmal herumkommen.

```plot
x: [-3.6, 3.6]
y: [-3.4, 3.6]
gleich: true
kurven:
  - { x: "3*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], farbe: 3 }
strecken:
  - { von: [0, 0], nach: [3, 0], gestrichelt: true }
vektoren:
  - { von: [1, 0], nach: [1, 1], label: "v bei r", farbe: 0 }
  - { von: [2, 0], nach: [2, 2], label: "v bei 2r", farbe: 1 }
  - { von: [3, 0], nach: [3, 3], label: "v bei 3r", farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "Achse" }
beschriftung: "Eine Scheibe dreht sich gegen den Uhrzeigersinn um ihre Achse. Drei Punkte auf demselben Radius haben dieselbe Winkelgeschwindigkeit. Ihre Bahngeschwindigkeiten (Pfeile) wachsen aber proportional zum Abstand von der Achse: doppelter Abstand, doppelte Geschwindigkeit."
```

:::beispiel[Eine Waschmaschine schleudert]
Die Trommel einer Waschmaschine hat einen Radius von $0{,}24\,\text{m}$ und schleudert mit $1400$ Umdrehungen
pro Minute. Wie groß sind Winkelgeschwindigkeit und Bahngeschwindigkeit am Trommelrand?

**Schritt 1, Drehzahl pro Sekunde:** $n = \dfrac{1400}{60\,\text{s}} = 23{,}3\,\text{s}^{-1}$.

**Schritt 2, Winkelgeschwindigkeit:** $\omega = 2\pi n = 2\pi\cdot 23{,}3\,\text{s}^{-1} = 147\,\text{s}^{-1}$.

**Schritt 3, Bahngeschwindigkeit:** $v = \omega r = 147\,\text{s}^{-1}\cdot 0{,}24\,\text{m} = 35\,\text{m/s}$.

**Antwort:** Die Wäsche am Rand saust mit $35\,\text{m/s}$, also mit rund $127\,\text{km/h}$, im Kreis.
:::

:::achtung[Fehler: Umdrehungen pro Minute direkt eingesetzt]
Bei der Waschmaschine rechnet jemand $\omega = 2\pi\cdot 1400 = 8796\,\text{s}^{-1}$.

Die Drehzahl war aber pro **Minute** angegeben. In $\omega = 2\pi n$ muss $n$ in Umdrehungen pro **Sekunde**
stehen. Erst durch $60$ teilen: $n = 23{,}3\,\text{s}^{-1}$, dann $\omega = 147\,\text{s}^{-1}$. Das falsche
Ergebnis ist sechzigmal zu groß.
:::

```aufgabe
id: p5-8-omega
titel: Winkelgeschwindigkeit aus der Drehzahl
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Elektromotor dreht sich mit $3000$ Umdrehungen pro Minute. Wie groß ist seine Winkelgeschwindigkeit in $\text{s}^{-1}$? Runde auf ganze Zahlen.
teile:
  - typ: zahl
    loesung: "2*pi*3000/60"
    einheit: "1/s"
    anzeige: '314'
    fehler:
      - wert: "2*pi*3000"
        meldung: |
          Die Drehzahl ist pro **Minute** angegeben. Rechne sie zuerst in Umdrehungen pro Sekunde um, also durch $60$ teilen.
      - wert: "3000/60"
        meldung: |
          Das ist die Drehzahl in Umdrehungen pro Sekunde. Eine Umdrehung sind $2\pi$ Radiant, also fehlt noch der Faktor $2\pi$.
hinweise:
  - 'Erst $n$ in Umdrehungen pro Sekunde, dann $\omega = 2\pi n$.'
loesung: |
  **Drehzahl pro Sekunde:** $n = \dfrac{3000}{60\,\text{s}} = 50\,\text{s}^{-1}$.
  ---
  **Winkelgeschwindigkeit:** $\omega = 2\pi n = 2\pi\cdot 50\,\text{s}^{-1} = 314\,\text{s}^{-1}$.
```

### Die Winkelbeschleunigung

Wird eine Drehung schneller oder langsamer, ändert sich $\omega$. Die **Winkelbeschleunigung** $\alpha$
(griechisch „alpha“) ist die Änderung der Winkelgeschwindigkeit pro Zeit:
$$\alpha = \frac{\Delta\omega}{\Delta t}, \qquad [\alpha] = \text{s}^{-2}.$$
Ist $\alpha$ konstant und startet der Körper aus der Ruhe, gelten dieselben Formeln wie bei der gleichmäßig
beschleunigten Bewegung aus dem Abschnitt
[Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung). Man
ersetzt nur $s$ durch $\varphi$, $v$ durch $\omega$ und $a$ durch $\alpha$:
$$\omega = \alpha\cdot t, \qquad \varphi = \tfrac12\alpha t^2.$$

Verwechsle dieses $\alpha$ nicht mit dem Winkel $\alpha$ aus dem Drehmoment $M = F r\sin\alpha$. Es ist leider
derselbe griechische Buchstabe. Aus dem Zusammenhang wird aber immer klar, welche Größe gemeint ist.

### Das Trägheitsmoment

Ein **Gedankenexperiment**, das du auch wirklich ausprobieren kannst: Halte einen Besen am Stielende und
drehe ihn schnell hin und her. Das ist mühsam. Halte ihn jetzt direkt unter dem Borstenkopf und drehe ihn
genauso. Das geht viel leichter. Die Masse des Besens ist beide Male dieselbe. Verändert hat sich nur, **wie
weit** die Masse von deiner Drehachse entfernt ist.

Ein Körper widersetzt sich einer Änderung seiner Drehung also umso mehr, je mehr Masse er hat **und je weiter
außen** sie sitzt. Diese Drehträgheit heißt **Trägheitsmoment**.

:::definition[Trägheitsmoment]
Ein Körper bestehe aus Massenteilchen $m_1, m_2, \dots$ in den Abständen $r_1, r_2, \dots$ von der Drehachse.
Sein **Trägheitsmoment** bezüglich dieser Achse ist
$$I = m_1 r_1^2 + m_2 r_2^2 + \dots = \sum m_i r_i^2, \qquad [I] = \text{kg}\,\text{m}^2.$$

**Beispiel:** Ein kleiner Körper mit $0{,}50\,\text{kg}$ am Ende einer leichten, $0{,}60\,\text{m}$ langen
Stange, die sich um das andere Ende dreht, hat $I = 0{,}50\,\text{kg}\cdot(0{,}60\,\text{m})^2 = 0{,}18\,\text{kg}\,\text{m}^2$.

**Kein Beispiel:** Das Trägheitsmoment ist **keine** Eigenschaft des Körpers allein, wie die Masse. Derselbe
Besen hat bezüglich einer Achse durch den Stiel ein anderes Trägheitsmoment als bezüglich einer Achse durch
den Borstenkopf.
:::

Der Abstand geht **quadratisch** ein. Doppelter Abstand bedeutet vierfaches Trägheitsmoment.

:::beispiel[Eine Hantel wird enger gefasst]
Zwei Gewichte mit je $2{,}0\,\text{kg}$ sitzen auf einer leichten Stange je $0{,}40\,\text{m}$ links und rechts
einer Drehachse in der Mitte. Dann werden beide auf $0{,}20\,\text{m}$ nach innen geschoben.

**Schritt 1, außen:** $I_1 = 2\cdot 2{,}0\,\text{kg}\cdot(0{,}40\,\text{m})^2 = 0{,}64\,\text{kg}\,\text{m}^2$.

**Schritt 2, innen:** $I_2 = 2\cdot 2{,}0\,\text{kg}\cdot(0{,}20\,\text{m})^2 = 0{,}16\,\text{kg}\,\text{m}^2$.

**Antwort:** Halber Abstand ergibt ein Viertel des Trägheitsmoments, denn $(1/2)^2 = 1/4$. Die Masse ist
dieselbe geblieben.
:::

:::achtung[Fehler: Abstand nicht quadriert]
Bei der Hantel rechnet jemand $I = 2\cdot 2{,}0\,\text{kg}\cdot 0{,}40\,\text{m} = 1{,}6\,\text{kg}\,\text{m}$ und
schließt: Halber Abstand, halbes Trägheitsmoment.

Schon die Einheit $\text{kg}\,\text{m}$ zeigt den Fehler: Ein Trägheitsmoment hat die Einheit
$\text{kg}\,\text{m}^2$. Der Abstand muss quadriert werden. Richtig ist $I = 0{,}64\,\text{kg}\,\text{m}^2$, und
halber Abstand ergibt ein **Viertel**, nicht die Hälfte.
:::

Für ausgedehnte Körper muss man über unendlich viele kleine Teilchen summieren. Das ist eine Integration und
geht über den Prüfungsstoff hinaus. Die Ergebnisse für einige Körper, jeweils mit der Achse durch den
Schwerpunkt, darfst du aus der Tabelle übernehmen:

| Körper | Trägheitsmoment |
|---|---|
| dünner Ring oder Rohr mit Radius $r$ | $I = m r^2$. |
| Vollzylinder oder Scheibe mit Radius $r$ | $I = \tfrac12 m r^2$. |
| Vollkugel mit Radius $r$ | $I = \tfrac25 m r^2$. |
| dünner Stab mit Länge $l$, Achse durch die Mitte | $I = \tfrac{1}{12} m l^2$. |

Beim Ring sitzt die ganze Masse im Abstand $r$. Bei der Scheibe sitzt ein Teil nahe der Achse, deshalb ist ihr
Trägheitsmoment nur halb so groß.

```aufgabe
id: p5-traegheitsmoment-auswahl
titel: Welches Rad ist träger?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein dünner Ring und eine Vollscheibe haben gleiche Masse und gleichen Radius. Welche Aussage ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Der Ring hat das größere Trägheitsmoment, weil seine Masse weiter außen sitzt."
      - "Die Scheibe hat das größere Trägheitsmoment, weil sie mehr Material hat."
      - "Beide haben das gleiche Trägheitsmoment, weil Masse und Radius gleich sind."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Beide haben dieselbe Masse, also gleich viel Material. Bei der Scheibe sitzt aber ein Teil davon nahe der Achse. Dort zählt er wegen $r^2$ kaum.
      - wert: 2
        meldung: |
          Das Trägheitsmoment hängt nicht nur von Masse und Radius ab, sondern davon, **wie** die Masse verteilt ist. Jedes Teilchen zählt mit dem Quadrat seines Abstands.
hinweise:
  - 'Denk an $I = \sum m_i r_i^2$. Wo sitzt die Masse beim Ring, wo bei der Scheibe?'
loesung: |
  **Ring:** Die gesamte Masse sitzt im Abstand $r$, also $I = m r^2$.
  ---
  **Scheibe:** Ein Teil der Masse sitzt nahe der Achse und zählt wenig. Insgesamt ist $I = \tfrac12 m r^2$, nur halb so viel. Der Ring ist also träger.
```

### Das Grundgesetz der Drehbewegung

Wie hängen Drehmoment und Winkelbeschleunigung zusammen? Wir überlegen es an einem einzigen Massenpunkt.

1. **Ziel:** Ein Massenpunkt $m$ sitzt am Ende einer leichten Stange der Länge $r$. Eine Kraft $F$ greift
   senkrecht zur Stange an. Wie schnell wird die Drehung schneller?
2. **Newton:** Die Kraft beschleunigt den Massenpunkt entlang seiner Kreisbahn: $F = m\cdot a$.
3. **Übersetzen:** Die Bahnbeschleunigung ist $a = \alpha\cdot r$, denn aus $v = \omega r$ folgt für die
   Änderungen $\Delta v = \Delta\omega\cdot r$. Also $F = m r\alpha$.
4. **Drehmoment:** Wir multiplizieren beide Seiten mit $r$: $F\cdot r = m r^2\cdot\alpha$. Links steht das
   Drehmoment $M$, rechts das Trägheitsmoment $I = m r^2$ mal $\alpha$.
5. **In Worten:** Das Drehmoment spielt für die Drehung die Rolle der Kraft, das Trägheitsmoment die Rolle der
   Masse.

:::satz[Grundgesetz der Drehbewegung]
Ein resultierendes Drehmoment $M$ erteilt einem Körper mit dem Trägheitsmoment $I$ die Winkelbeschleunigung
$$M = I\cdot\alpha.$$

**Kein Beispiel:** Eine Kraft, deren Wirkungslinie durch die Achse geht, erzeugt kein Drehmoment. Sie beschleunigt
die Drehung überhaupt nicht, $\alpha = 0$, egal wie groß sie ist.
:::

:::beispiel[Ein Kinderkarussell anschieben]
Ein Kinderkarussell ist eine Scheibe mit $200\,\text{kg}$ und $2{,}0\,\text{m}$ Radius. Ein Vater schiebt am
Rand mit $100\,\text{N}$ tangential, also senkrecht zum Radius. Reibung vernachlässigen wir.

**Schritt 1, Trägheitsmoment:** $I = \tfrac12 m r^2 = \tfrac12\cdot 200\,\text{kg}\cdot(2{,}0\,\text{m})^2 = 400\,\text{kg}\,\text{m}^2$.

**Schritt 2, Drehmoment:** $M = F\cdot r = 100\,\text{N}\cdot 2{,}0\,\text{m} = 200\,\text{N}\,\text{m}$.

**Schritt 3, Winkelbeschleunigung:** $\alpha = \dfrac{M}{I} = \dfrac{200\,\text{N}\,\text{m}}{400\,\text{kg}\,\text{m}^2} = 0{,}50\,\text{s}^{-2}$.
Die Einheit stimmt, denn $\text{N}\,\text{m} = \text{kg}\,\text{m}^2/\text{s}^2$.

**Schritt 4, nach $4{,}0\,\text{s}$:** $\omega = \alpha t = 0{,}50\,\text{s}^{-2}\cdot 4{,}0\,\text{s} = 2{,}0\,\text{s}^{-1}$.
Das sind $n = \omega/(2\pi) = 0{,}32$ Umdrehungen pro Sekunde, rund $19$ pro Minute.
:::

Die folgende Tabelle stellt die Gegenstücke zusammen. Mit ihr kannst du fast jede Formel der Drehung aus
einer bekannten Formel der geradlinigen Bewegung ableiten.

| Geradlinige Bewegung | Drehbewegung |
|---|---|
| Weg $s$ | Drehwinkel $\varphi$. |
| Geschwindigkeit $v$ | Winkelgeschwindigkeit $\omega$. |
| Beschleunigung $a$ | Winkelbeschleunigung $\alpha$. |
| Masse $m$ | Trägheitsmoment $I$. |
| Kraft $F$ | Drehmoment $M$. |
| $F = m\,a$ | $M = I\,\alpha$. |
| $E_{\text{kin}} = \tfrac12 m v^2$ | $E_{\text{rot}} = \tfrac12 I\omega^2$. |
| Impuls $p = m v$ | Drehimpuls $L = I\omega$. |

Die letzten beiden Zeilen sind Thema im Abschnitt
[Rotationsenergie, Rollen und Drehimpuls](/lernen/physik1/drehbewegung-einfache-maschinen/rotationsenergie-rollen-und-drehimpuls).

:::merke
**Drehbewegung rechnen**

1. Drehzahl in Umdrehungen pro Sekunde umrechnen, dann $\omega = 2\pi n$.
2. Bahngeschwindigkeit eines Punkts: $v = \omega r$.
3. Trägheitsmoment aus $\sum m r^2$ oder aus der Tabelle.
4. Grundgesetz $M = I\alpha$, dann $\omega = \alpha t$ und $\varphi = \tfrac12\alpha t^2$ wie in der Kinematik.
:::

```reflexion
frage: Ein Seiltänzer trägt eine lange, schwere Stange quer vor sich. Erkläre mit dem Trägheitsmoment, warum sie ihm hilft, nicht seitlich umzukippen.
antwort: |
  Die Stange hat viel Masse weit außen, weit weg von der Drehachse, um die der Seiltänzer seitlich kippen würde. Das
  vergrößert sein Trägheitsmoment um diese Achse stark. Nach $M = I\alpha$ erzeugt dasselbe kippende Drehmoment dann
  nur eine kleine Winkelbeschleunigung. Er kippt langsamer und hat mehr Zeit, sein Gleichgewicht zu korrigieren.
```

### Aufgaben zur Drehbewegung



```aufgabe
id: p5-8-bahngeschwindigkeit
titel: Wie schnell dreht sich das Fahrradrad?
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Fahrrad fährt mit $25\,\text{km/h}$. Seine Räder haben einen Radius von $0{,}34\,\text{m}$ und rollen, ohne zu rutschen. Dann ist die Geschwindigkeit des Fahrrads gleich der Bahngeschwindigkeit am Reifen.

  a) Wie groß ist die Winkelgeschwindigkeit eines Rads in $\text{s}^{-1}$? Runde auf eine Nachkommastelle.

  b) Wie viele Umdrehungen macht ein Rad pro Minute? Runde auf ganze Zahlen.
teile:
  - typ: zahl
    label: a) Winkelgeschwindigkeit
    loesung: "25/3.6/0.34"
    einheit: "1/s"
    anzeige: '20{,}4'
    fehler:
      - wert: "25/0.34"
        meldung: |
          Du hast km/h direkt eingesetzt. In $v = \omega r$ muss $v$ in m/s stehen, wenn $r$ in Metern steht. Teile zuerst durch $3{,}6$.
      - wert: "25/3.6*0.34"
        meldung: |
          Du hast multipliziert. Aus $v = \omega r$ folgt $\omega = v/r$.
  - typ: zahl
    label: b) Umdrehungen pro Minute
    loesung: "25/3.6/0.34/(2*pi)*60"
    einheit: "1/min"
    anzeige: '195'
    fehler:
      - wert: "25/3.6/0.34*60"
        meldung: |
          Du hast $\omega$ direkt mit $60$ multipliziert. Eine Umdrehung sind aber $2\pi$ Radiant. Teile zuerst durch $2\pi$, dann hast du Umdrehungen pro Sekunde.
hinweise:
  - 'Rechne $v$ in m/s um und verwende $v = \omega r$.'
  - 'Für b): $n = \omega/(2\pi)$ in Umdrehungen pro Sekunde, dann mal $60$.'
loesung: |
  **Ansatz:** Beim Rollen ohne Rutschen ist die Fahrgeschwindigkeit gleich der Bahngeschwindigkeit am Reifen: $v = \omega r$.
  ---
  **Geschwindigkeit in m/s:** $v = \dfrac{25}{3{,}6}\,\text{m/s} = 6{,}94\,\text{m/s}$.
  ---
  **a)** $\omega = \dfrac{v}{r} = \dfrac{6{,}94\,\text{m/s}}{0{,}34\,\text{m}} = 20{,}4\,\text{s}^{-1}$.
  ---
  **b)** $n = \dfrac{\omega}{2\pi} = 3{,}25\,\text{s}^{-1}$, mal $60$ ergibt $195$ Umdrehungen pro Minute.
```

```aufgabe
id: p5-winkelbeschleunigung
titel: Ein Schwungrad läuft an
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Schwungrad mit dem Trägheitsmoment $I = 0{,}90\,\text{kg}\,\text{m}^2$ wird aus dem Stillstand mit einem konstanten Drehmoment von $4{,}5\,\text{N}\,\text{m}$ angetrieben. Reibung vernachlässigen wir. Berechne die Winkelbeschleunigung und die Zeit, bis das Rad $\omega = 314\,\text{s}^{-1}$ erreicht.
teile:
  - typ: zahl
    label: Winkelbeschleunigung
    loesung: "4.5/0.90"
    einheit: "1/s²"
    anzeige: '5'
    fehler:
      - wert: "0.90/4.5"
        meldung: |
          Du hast den Kehrwert berechnet. Aus $M = I\alpha$ folgt durch Teilen durch $I$: $\alpha = M/I$.
      - wert: "4.5*0.90"
        meldung: |
          Aus $M = I\alpha$ folgt $\alpha = M/I$. Ein großes Trägheitsmoment soll die Beschleunigung **kleiner** machen, also muss $I$ im Nenner stehen.
  - typ: zahl
    label: Zeit
    loesung: "314/(4.5/0.90)"
    einheit: "s"
    anzeige: '62{,}8'
    fehler:
      - wert: "314*5"
        meldung: |
          Aus $\omega = \alpha t$ folgt $t = \omega/\alpha$. Du musst teilen.
hinweise:
  - 'Grundgesetz der Drehbewegung: $M = I\alpha$.'
  - 'Bei konstanter Winkelbeschleunigung aus der Ruhe gilt $\omega = \alpha t$.'
gefuehrt:
  - text: Stelle $M = I\alpha$ nach $\alpha$ um und berechne $\alpha$ in $\text{s}^{-2}$.
    teil: { typ: zahl, loesung: "4.5/0.90", einheit: "1/s²" }
    erklaerung: $\alpha = M/I = 4{,}5\,\text{N}\,\text{m}/0{,}90\,\text{kg}\,\text{m}^2 = 5{,}0\,\text{s}^{-2}$.
  - text: Welche Formel aus der Kinematik passt für $\omega$ nach der Zeit $t$, wenn das Rad aus der Ruhe startet?
    erklaerung: Wie $v = a t$ bei der geradlinigen Bewegung gilt hier $\omega = \alpha t$.
  - text: Berechne die Zeit in Sekunden.
    teil: { typ: zahl, loesung: "314/5", einheit: "s" }
    erklaerung: $t = \omega/\alpha = 314\,\text{s}^{-1}/5{,}0\,\text{s}^{-2} = 62{,}8\,\text{s}$.
loesung: |
  **Ansatz:** Das Grundgesetz der Drehbewegung $M = I\alpha$ liefert die Winkelbeschleunigung. Danach rechnen wir wie bei der gleichmäßig beschleunigten Bewegung.
  ---
  **Winkelbeschleunigung:** $\alpha = \dfrac{M}{I} = \dfrac{4{,}5\,\text{N}\,\text{m}}{0{,}90\,\text{kg}\,\text{m}^2} = 5{,}0\,\text{s}^{-2}$.
  ---
  **Zeit:** Aus $\omega = \alpha t$ folgt $t = \dfrac{\omega}{\alpha} = \dfrac{314\,\text{s}^{-1}}{5{,}0\,\text{s}^{-2}} = 62{,}8\,\text{s}$. Das ist gut eine Minute, plausibel für ein schweres Rad.
```

```aufgabe
id: p5-8-diagramm
titel: Ein Ventilator im Diagramm
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt die Winkelgeschwindigkeit eines Ventilators über der Zeit: Einschalten, Laufen, Ausschalten.

  a) Wie groß ist die Winkelbeschleunigung in den ersten $6\,\text{s}$, in $\text{s}^{-2}$?

  b) Um welchen Winkel in rad dreht sich der Ventilator in den ersten $6\,\text{s}$?

  c) Wie viele Umdrehungen sind das? Runde auf eine Nachkommastelle.
plot:
  x: [0, 17]
  y: [0, 35]
  achsen: { x: "t in s", y: "ω in 1/s" }
  strecken:
    - { von: [0, 0], nach: [6, 30], farbe: 0 }
    - { von: [6, 30], nach: [10, 30], farbe: 0 }
    - { von: [10, 30], nach: [16, 0], farbe: 0 }
  punkte:
    - { x: 6, y: 30 }
    - { x: 10, y: 30 }
teile:
  - typ: zahl
    label: a) Winkelbeschleunigung
    loesung: "30/6"
    einheit: "1/s²"
    anzeige: '5'
    fehler:
      - wert: "6/30"
        meldung: |
          Die Winkelbeschleunigung ist die Steigung im ω-t-Diagramm, also Änderung von $\omega$ **durch** die Zeit, nicht umgekehrt.
  - typ: zahl
    label: b) Drehwinkel
    loesung: "0.5*30*6"
    einheit: "rad"
    anzeige: '90'
    fehler:
      - wert: "30*6"
        meldung: |
          So groß wäre der Winkel, wenn der Ventilator die ganze Zeit mit $30\,\text{s}^{-1}$ gelaufen wäre. Er startet aber bei null. Der Winkel ist die Fläche unter der Kurve, hier ein Dreieck.
  - typ: zahl
    label: c) Umdrehungen
    loesung: "0.5*30*6/(2*pi)"
    anzeige: '14{,}3'
    fehler:
      - wert: "0.5*30*6/360"
        meldung: |
          Der Winkel ist in Radiant, nicht in Grad. Eine Umdrehung sind $2\pi$ Radiant.
hinweise:
  - 'Wie im v-t-Diagramm: Die Steigung ist die Beschleunigung, die Fläche unter der Kurve ist der zurückgelegte Winkel.'
  - 'Die Fläche unter der ersten Strecke ist ein Dreieck mit Grundseite $6\,\text{s}$ und Höhe $30\,\text{s}^{-1}$.'
loesung: |
  **Ansatz:** Das ω-t-Diagramm liest man wie ein v-t-Diagramm. Die Steigung ist die Winkelbeschleunigung, die Fläche unter der Kurve ist der Drehwinkel.
  ---
  **a)** Steigung der ersten Strecke: $\alpha = \dfrac{30\,\text{s}^{-1} - 0}{6\,\text{s}} = 5{,}0\,\text{s}^{-2}$.
  ---
  **b)** Fläche des Dreiecks: $\varphi = \tfrac12\cdot 6\,\text{s}\cdot 30\,\text{s}^{-1} = 90\,\text{rad}$. Dasselbe liefert $\varphi = \tfrac12\alpha t^2 = \tfrac12\cdot 5{,}0\,\text{s}^{-2}\cdot(6\,\text{s})^2 = 90\,\text{rad}$.
  ---
  **c)** $\dfrac{90\,\text{rad}}{2\pi\,\text{rad}} = 14{,}3$ Umdrehungen. Wiederholen kannst du das Lesen von Diagrammen im Abschnitt [Bewegungsdiagramme ineinander übersetzen](/lernen/physik1/kinematik/bewegungsdiagramme-ineinander-uebersetzen).
```

```aufgabe
id: p5-8-proportional
titel: Doppelter Radius
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Vollscheibe hat das Trägheitsmoment $I_0$.

  a) Eine zweite Scheibe hat dieselbe Masse, aber den doppelten Radius. Um welchen Faktor ist ihr Trägheitsmoment größer?

  b) Eine dritte Scheibe ist aus demselben Material und gleich dick wie die erste, hat aber den doppelten Radius. Um welchen Faktor ist ihr Trägheitsmoment größer?
teile:
  - typ: zahl
    label: a) gleiche Masse
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: |
          Der Radius geht **quadratisch** ein: $I = \tfrac12 m r^2$. Doppelter Radius bedeutet $2^2 = 4$.
  - typ: zahl
    label: b) gleiches Material
    loesung: "16"
    fehler:
      - wert: "4"
        meldung: |
          Bei gleichem Material und gleicher Dicke wächst auch die **Masse**, und zwar mit der Fläche, also auf das Vierfache. Dazu kommt der Faktor $4$ aus $r^2$.
      - wert: "8"
        meldung: |
          Die Masse wächst mit der Kreisfläche $\pi r^2$, also auf das Vierfache, nicht das Doppelte. Zusammen mit $r^2$ ergibt das $4\cdot 4$.
hinweise:
  - 'Schreib $I = \tfrac12 m r^2$ auf und überlege für jeden Fall, welche Größen sich ändern.'
  - 'Bei gleicher Dicke ist die Masse proportional zur Kreisfläche $\pi r^2$.'
loesung: |
  **Ansatz:** $I = \tfrac12 m r^2$. Wir prüfen, wie sich $m$ und $r^2$ ändern.
  ---
  **a)** $m$ bleibt, $r^2$ wird $2^2 = 4$-mal so groß. Also $I = 4\,I_0$.
  ---
  **b)** Die Fläche $\pi r^2$ wächst auf das Vierfache, also auch die Masse. Dazu kommt der Faktor $4$ aus $r^2$. Also $I = 4\cdot 4\cdot I_0 = 16\,I_0$. Große Schwungräder sind deshalb so wirkungsvoll.
```

```aufgabe
id: p5-8-karussell
titel: Ein Karussell auf Touren bringen
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Spielplatzkarussell ist eine Scheibe mit $180\,\text{kg}$ und $1{,}5\,\text{m}$ Radius. Es steht still und soll eine Umdrehung in $4{,}0\,\text{s}$ erreichen. Reibung vernachlässigen wir.

  a) Wie lange muss ein Kind am Rand mit $120\,\text{N}$ tangential, also senkrecht zum Radius, schieben? Runde auf zwei Nachkommastellen.

  b) Das Kind schiebt jetzt ungeschickt unter $60^\circ$ gegen den Radius, ebenfalls am Rand und mit $120\,\text{N}$. Wie lange dauert es jetzt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Zeit tangential
    loesung: "(2*pi/4.0)/(120*1.5/(0.5*180*1.5^2))"
    einheit: "s"
    anzeige: '1{,}77'
    fehler:
      - wert: "(2*pi/4.0)/(120*1.5/(180*1.5^2))"
        meldung: |
          Du hast $I = m r^2$ verwendet, wie für einen Ring. Das Karussell ist eine Scheibe, also $I = \tfrac12 m r^2$.
      - wert: "4.0/(120*1.5/(0.5*180*1.5^2))"
        meldung: |
          Die $4{,}0\,\text{s}$ sind die Umlaufdauer, nicht die Winkelgeschwindigkeit. Die Ziel-Winkelgeschwindigkeit ist $\omega = 2\pi/4{,}0\,\text{s}$.
  - typ: zahl
    label: b) Zeit unter 60 Grad
    loesung: "(2*pi/4.0)/(120*1.5*sin(inRad(60))/(0.5*180*1.5^2))"
    einheit: "s"
    anzeige: '2{,}04'
    fehler:
      - wert: "(2*pi/4.0)/(120*1.5*cos(inRad(60))/(0.5*180*1.5^2))"
        meldung: |
          Der Hebelarm ist $r\sin\alpha$, wobei $\alpha$ der Winkel zwischen Kraft und Radius ist. Mit dem Kosinus bekämst du für eine tangentiale Kraft ($90^\circ$) gar kein Drehmoment.
hinweise:
  - 'Bestimme der Reihe nach $I = \tfrac12 m r^2$, das Drehmoment $M$, die Winkelbeschleunigung $\alpha = M/I$ und die Ziel-Winkelgeschwindigkeit $\omega = 2\pi/T$.'
  - 'Dann folgt $t = \omega/\alpha$. Für b) ist das Drehmoment $M = F r\sin 60^\circ$.'
loesung: |
  **Ansatz:** Wir bestimmen die nötige Winkelgeschwindigkeit, das Trägheitsmoment, aus dem Drehmoment die Winkelbeschleunigung und daraus die Zeit.
  ---
  **Ziel und Trägheit:** Eine Umdrehung in $4{,}0\,\text{s}$ heißt $\omega = \dfrac{2\pi}{4{,}0\,\text{s}} = 1{,}57\,\text{s}^{-1}$. Das Trägheitsmoment ist $I = \tfrac12\cdot 180\,\text{kg}\cdot(1{,}5\,\text{m})^2 = 202{,}5\,\text{kg}\,\text{m}^2$.
  ---
  **a)** $M = 120\,\text{N}\cdot 1{,}5\,\text{m} = 180\,\text{N}\,\text{m}$, also $\alpha = \dfrac{180\,\text{N}\,\text{m}}{202{,}5\,\text{kg}\,\text{m}^2} = 0{,}889\,\text{s}^{-2}$ und $t = \dfrac{1{,}57\,\text{s}^{-1}}{0{,}889\,\text{s}^{-2}} = 1{,}77\,\text{s}$.
  ---
  **b)** $M = 180\,\text{N}\,\text{m}\cdot\sin 60^\circ = 156\,\text{N}\,\text{m}$, also $\alpha = 0{,}770\,\text{s}^{-2}$ und $t = \dfrac{1{,}57\,\text{s}^{-1}}{0{,}770\,\text{s}^{-2}} = 2{,}04\,\text{s}$.
  ---
  **Deutung:** Schräg schieben kostet Zeit, weil nur der Anteil senkrecht zum Radius dreht. Die Kraft entlang des Radius drückt nur gegen die Achse.
```

## Rotationsenergie, Rollen und Drehimpuls

```aufgabe
id: p5-9-check
art: check
titel: "Vorwissen: Energieerhaltung beim Hinabgleiten"
niveau: 1
angabe: |
  Ein Klotz gleitet reibungsfrei eine Rampe hinab und verliert dabei $0{,}80\,\text{m}$ an Höhe. Er startet aus der Ruhe. Wie schnell ist er unten? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*0.80)"
    einheit: "m/s"
    anzeige: '3{,}96'
    fehler:
      - wert: "2*9.81*0.80"
        meldung: |
          Das ist $v^2$ in $\text{m}^2/\text{s}^2$. Ziehe noch die Wurzel.
      - wert: "sqrt(9.81*0.80)"
        meldung: |
          Der Faktor $2$ fehlt. Aus $m g h = \tfrac12 m v^2$ folgt $v^2 = 2 g h$.
hinweise:
  - 'Die Lageenergie $m g h$ wird vollständig zu kinetischer Energie $\tfrac12 m v^2$.'
loesung: |
  Ohne Reibung bleibt die mechanische Energie erhalten: $m g h = \tfrac12 m v^2$. Die Masse kürzt sich, also $v = \sqrt{2 g h}$.
  ---
  $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}80\,\text{m}} = \sqrt{15{,}7\,\text{m}^2/\text{s}^2} = 3{,}96\,\text{m/s}$. Wiederholen kannst du die Energieerhaltung im Abschnitt [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
```

Ein sich drehendes Rad hat Energie, auch wenn es sich nicht von der Stelle bewegt. Ein Schwungrad kann diese
Energie speichern, ein Kreisel hält sich damit aufrecht. In diesem Abschnitt lernst du drei Werkzeuge kennen:
die **Rotationsenergie**, das **Rollen** als Mischung aus Verschieben und Drehen und den **Drehimpuls** mit
seinem Erhaltungssatz.

### Die Rotationsenergie

Jedes Teilchen eines drehenden Körpers bewegt sich und hat kinetische Energie $\tfrac12 m_i v_i^2$. Wir zählen
sie zusammen.

1. **Ziel:** eine Formel für die Bewegungsenergie eines ganzen drehenden Körpers.
2. **Schritt:** Ein Teilchen im Abstand $r_i$ hat die Bahngeschwindigkeit $v_i = \omega r_i$. Seine Energie ist
   $\tfrac12 m_i(\omega r_i)^2 = \tfrac12 m_i r_i^2\,\omega^2$.
3. **Summe:** Alle Teilchen haben dasselbe $\omega$. Wir ziehen $\tfrac12\omega^2$ vor die Summe:
   $\tfrac12\left(m_1 r_1^2 + m_2 r_2^2 + \dots\right)\omega^2$.
4. **Erkennen:** In der Klammer steht das Trägheitsmoment $I$.

:::satz[Rotationsenergie]
Ein Körper mit dem Trägheitsmoment $I$, der sich mit der Winkelgeschwindigkeit $\omega$ dreht, hat die
**Rotationsenergie**
$$E_{\text{rot}} = \tfrac12 I\omega^2.$$
Das ist das Gegenstück zu $E_{\text{kin}} = \tfrac12 m v^2$: Statt der Masse steht das Trägheitsmoment, statt der
Geschwindigkeit die Winkelgeschwindigkeit.
:::

**Beispiel:** Eine Schleifscheibe mit $I = 0{,}010\,\text{kg}\,\text{m}^2$ dreht sich mit $\omega = 400\,\text{s}^{-1}$.
Sie speichert $E = \tfrac12\cdot 0{,}010\,\text{kg}\,\text{m}^2\cdot(400\,\text{s}^{-1})^2 = 800\,\text{J}$. Das ist etwa so viel Energie,
wie man braucht, um $80\,\text{kg}$ einen Meter hoch zu heben. **Kein Beispiel:** Ein Rad, das sich nicht dreht, aber auf
einem Lastwagen mitfährt, hat **keine** Rotationsenergie, nur kinetische Energie seiner Fortbewegung.

### Rollen: Verschieben und Drehen zugleich

Ein Rad, das über den Boden rollt, verschiebt sich **und** dreht sich. Seine Energie hat deshalb zwei Teile:
$$E = \tfrac12 m v^2 + \tfrac12 I\omega^2.$$
Dabei ist $v$ die Geschwindigkeit der Achse. Rollt das Rad, ohne zu rutschen, hängen beide zusammen. Bei
einer Umdrehung rollt es genau einen Umfang weit. Daraus folgt $v = \omega r$.

Lassen wir verschiedene Körper aus der Ruhe eine Rampe der Höhe $h$ hinabrollen. Ihre Lageenergie $m g h$
verteilt sich auf Verschieben und Drehen. Schreiben wir das Trägheitsmoment als $I = k\,m r^2$, mit $k = 1$
beim Rohr, $k = \tfrac12$ beim Vollzylinder und $k = \tfrac25$ bei der Kugel. Mit $\omega = v/r$ gilt dann
$$m g h = \tfrac12 m v^2 + \tfrac12 k m r^2\,\frac{v^2}{r^2} = \tfrac12 m v^2\,(1 + k).$$
Masse und Radius kürzen sich. Wir lösen nach $v$ auf:
$$v = \sqrt{\frac{2 g h}{1 + k}}.$$

:::beispiel[Ein Wettrennen auf der Rampe]
Vier Körper starten gleichzeitig aus der Ruhe und verlieren $0{,}50\,\text{m}$ Höhe. Eine Vollkugel, ein
Vollzylinder und ein dünnwandiges Rohr rollen. Ein Klotz gleitet reibungsfrei.

**Schritt 1, Klotz:** Er dreht sich nicht, also $k = 0$: $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}50\,\text{m}} = 3{,}13\,\text{m/s}$.

**Schritt 2, Kugel:** $k = 0{,}4$: $v = \sqrt{\dfrac{9{,}81\,\text{m}^2/\text{s}^2}{1{,}4}} = 2{,}65\,\text{m/s}$.

**Schritt 3, Vollzylinder:** $k = 0{,}5$: $v = \sqrt{\dfrac{9{,}81\,\text{m}^2/\text{s}^2}{1{,}5}} = 2{,}56\,\text{m/s}$.

**Schritt 4, Rohr:** $k = 1$: $v = \sqrt{\dfrac{9{,}81\,\text{m}^2/\text{s}^2}{2}} = 2{,}21\,\text{m/s}$.

**Antwort:** Der Klotz gewinnt, dann folgen Kugel, Vollzylinder und Rohr. Je mehr Masse außen sitzt, desto
mehr Energie steckt in der Drehung, und desto weniger bleibt für das Vorankommen. Masse und Größe spielen keine
Rolle: Jede Vollkugel schlägt jedes Rohr.
:::

```plot
x: [0, 5]
y: [0, 0.6]
achsen: { x: "", y: "Anteil der Drehenergie" }
balken:
  - { x: 1, y: 0 }
  - { x: 2, y: 0.286 }
  - { x: 3, y: 0.333 }
  - { x: 4, y: 0.5 }
punkte:
  - { x: 1, y: 0.03, label: "Klotz" }
  - { x: 2, y: 0.316, label: "Kugel 2/7" }
  - { x: 3, y: 0.363, label: "Vollzylinder 1/3" }
  - { x: 4, y: 0.53, label: "Rohr 1/2" }
beschriftung: "Welcher Anteil der Lageenergie beim Hinabrollen in der Drehung steckt: beim gleitenden Klotz nichts, bei der Vollkugel 2/7, beim Vollzylinder 1/3, beim dünnwandigen Rohr die Hälfte. Der Rest wird zur Bewegungsenergie der Fortbewegung. Je größer der Drehanteil, desto langsamer kommt der Körper unten an."
```

:::achtung[Fehler: die Drehung beim Rollen vergessen]
Ein Vollzylinder rollt aus der Ruhe $0{,}50\,\text{m}$ Höhe hinab. Falsch gerechnet:
$v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}50\,\text{m}} = 3{,}13\,\text{m/s}$.

Diese Formel gilt nur für einen gleitenden Körper, der sich nicht dreht. Ein rollender Zylinder steckt ein
Drittel der Energie in die Drehung. Richtig ist $v = \sqrt{\tfrac43 g h} = 2{,}56\,\text{m/s}$. Frage dich bei
jeder Energiebilanz: Dreht sich etwas? Dann gehört $\tfrac12 I\omega^2$ dazu.
:::

### Der Drehimpuls und seine Erhaltung

Zum Impuls $p = m v$ der geradlinigen Bewegung gibt es ein Drehgegenstück, den **Drehimpuls**
$$L = I\cdot\omega, \qquad [L] = \text{kg}\,\text{m}^2/\text{s}.$$
Er ist eigentlich ein Vektor, der in Richtung der Drehachse zeigt. Seine Richtung bestimmst du mit der
**Rechte-Hand-Regel**: Krümme die Finger der rechten Hand in Drehrichtung, dann zeigt der Daumen in Richtung
von $\vec L$.

So wie eine Kraft den Impuls ändert, ändert ein Drehmoment den Drehimpuls. Wirkt kein äußeres Drehmoment,
ändert er sich nicht.

:::satz[Erhaltung des Drehimpulses]
Wirkt auf einen Körper oder ein System von Körpern kein äußeres Drehmoment, so bleibt der Drehimpuls
erhalten, nach Betrag und Richtung. Für eine feste Achse heißt das
$$I_1\,\omega_1 = I_2\,\omega_2.$$
Dabei sind $I_1$ und $\omega_1$ die Werte vorher, $I_2$ und $\omega_2$ die Werte nachher.

**Beispiel:** Eine Eiskunstläuferin auf glattem Eis zieht die Arme an. Kein äußeres Drehmoment wirkt. Ihr
Trägheitsmoment sinkt, also steigt ihre Winkelgeschwindigkeit.

**Kein Beispiel:** Ein Rad wird mit einer Bremse angehalten. Die Bremse übt ein äußeres Drehmoment aus. Der
Drehimpuls des Rads bleibt deshalb **nicht** erhalten, er sinkt auf null.
:::

:::beispiel[Eine Pirouette in Zahlen]
Eine Eiskunstläuferin dreht sich mit ausgestreckten Armen ($I_1 = 3{,}5\,\text{kg}\,\text{m}^2$) mit
$1{,}2$ Umdrehungen pro Sekunde. Sie zieht die Arme eng an den Körper, ihr Trägheitsmoment sinkt auf
$I_2 = 1{,}0\,\text{kg}\,\text{m}^2$.

**Schritt 1, Erhaltungssatz:** Kein äußeres Drehmoment, also $I_1\omega_1 = I_2\omega_2$. Weil $\omega = 2\pi n$ auf
beiden Seiten denselben Faktor $2\pi$ hat, gilt dasselbe für die Drehzahlen: $I_1 n_1 = I_2 n_2$.

**Schritt 2, neue Drehzahl:** $n_2 = n_1\cdot\dfrac{I_1}{I_2} = 1{,}2\,\text{s}^{-1}\cdot\dfrac{3{,}5}{1{,}0} = 4{,}2\,\text{s}^{-1}$.

**Schritt 3, Energie vorher und nachher:** $E_1 = \tfrac12\cdot 3{,}5\,\text{kg}\,\text{m}^2\cdot(2\pi\cdot 1{,}2\,\text{s}^{-1})^2 = 99\,\text{J}$
und $E_2 = \tfrac12\cdot 1{,}0\,\text{kg}\,\text{m}^2\cdot(2\pi\cdot 4{,}2\,\text{s}^{-1})^2 = 348\,\text{J}$.

**Antwort:** Sie dreht sich jetzt $3{,}5$-mal so schnell, und ihre Rotationsenergie ist auf das $3{,}5$-Fache
gestiegen. Die zusätzliche Energie stammt aus ihren Muskeln: Sie muss die Arme gegen deren Bestreben, nach
außen zu fliegen, nach innen ziehen und verrichtet dabei Arbeit.
:::

:::achtung[Fehler: Energieerhaltung statt Drehimpulserhaltung]
Bei der Pirouette setzt jemand die Rotationsenergien gleich: $\tfrac12 I_1\omega_1^2 = \tfrac12 I_2\omega_2^2$. Das
ergibt $n_2 = 1{,}2\,\text{s}^{-1}\cdot\sqrt{3{,}5} = 2{,}2\,\text{s}^{-1}$.

Die Rotationsenergie bleibt hier aber **nicht** erhalten, denn die Muskeln verrichten Arbeit. Erhalten bleibt der
Drehimpuls, weil kein äußeres Drehmoment wirkt. Richtig ist $n_2 = 4{,}2\,\text{s}^{-1}$.
:::

```aufgabe
id: p5-9-karussell-sprung
titel: Ein Kind springt auf das Karussell
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Karussell mit dem Trägheitsmoment $250\,\text{kg}\,\text{m}^2$ dreht sich reibungsfrei mit $\omega_1 = 2{,}0\,\text{s}^{-1}$. Ein Kind mit $30\,\text{kg}$ springt radial, also ohne Schwung in Drehrichtung, auf den Rand im Abstand $1{,}5\,\text{m}$ von der Achse. Das Kind zählt als Massenpunkt. Mit welcher Winkelgeschwindigkeit dreht sich das Karussell danach? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "250*2.0/(250+30*1.5^2)"
    einheit: "1/s"
    anzeige: '1{,}57'
    fehler:
      - wert: "2.0"
        meldung: |
          Das Kind vergrößert das Trägheitsmoment des Systems. Bei gleichem Drehimpuls muss die Winkelgeschwindigkeit deshalb sinken.
      - wert: "250*2.0/(250+30)"
        meldung: |
          Du hast die Masse des Kinds zum Trägheitsmoment addiert. Ein Massenpunkt im Abstand $r$ hat aber das Trägheitsmoment $m r^2$, also $30\,\text{kg}\cdot(1{,}5\,\text{m})^2$.
hinweise:
  - Während des Aufspringens wirkt kein äußeres Drehmoment. Welche Größe bleibt erhalten?
  - 'Das Trägheitsmoment nach dem Sprung ist $I_2 = 250\,\text{kg}\,\text{m}^2 + m r^2$.'
loesung: |
  **Ansatz:** Das Kind springt radial auf und bringt keinen Drehimpuls mit. Es wirkt kein äußeres Drehmoment, also bleibt der Drehimpuls des Systems erhalten: $I_1\omega_1 = I_2\omega_2$.
  ---
  **Trägheitsmoment nachher:** $I_2 = 250\,\text{kg}\,\text{m}^2 + 30\,\text{kg}\cdot(1{,}5\,\text{m})^2 = 250\,\text{kg}\,\text{m}^2 + 67{,}5\,\text{kg}\,\text{m}^2 = 317{,}5\,\text{kg}\,\text{m}^2$.
  ---
  **Rechnung:** $\omega_2 = \dfrac{250\,\text{kg}\,\text{m}^2\cdot 2{,}0\,\text{s}^{-1}}{317{,}5\,\text{kg}\,\text{m}^2} = 1{,}57\,\text{s}^{-1}$. Das Karussell wird langsamer, wie erwartet.
```

Die Drehimpulserhaltung erklärt viele Alltagsbeobachtungen:

- Ein Turmspringer rollt sich zum Salto ein, um schnell zu drehen. Vor dem Eintauchen streckt er sich wieder
  und dreht langsamer.
- Ein schnell drehender Kreisel kippt nicht um. Sein Drehimpuls behält seine **Richtung**, solange kein großes
  Drehmoment wirkt. Beim fahrenden Fahrrad hilft dieser Effekt der Räder nur wenig; dort hält vor allem das
  ständige Gegenlenken das Gleichgewicht.
- Ein Hubschrauber braucht einen Heckrotor. Treibt der Motor den Hauptrotor an, wirkt nach actio gleich reactio
  ein gleich großes Gegendrehmoment auf den Rumpf. Ohne Heckrotor würde sich der Rumpf entgegengesetzt drehen.
- Die Planeten laufen nahe der Sonne schneller als fern von ihr. Auch dort bleibt der Drehimpuls erhalten, siehe
  Abschnitt [Die Keplerschen Gesetze](/lernen/physik1/kreisbewegung-gravitation/die-keplerschen-gesetze).

### Leistung bei der Drehung

Auch die Leistung hat ein Drehgegenstück. Bei der geradlinigen Bewegung ist $P = F\cdot v$. Bei der Drehung
gibt ein Motor, der das Drehmoment $M$ bei der Winkelgeschwindigkeit $\omega$ abgibt, die Leistung
$$P = M\cdot\omega$$
ab. **Beispiel:** Ein Automotor liefert $250\,\text{N}\,\text{m}$ bei $4000$ Umdrehungen pro Minute. Dann ist
$\omega = 2\pi\cdot 4000/60\,\text{s}^{-1} = 419\,\text{s}^{-1}$ und $P = 250\,\text{N}\,\text{m}\cdot 419\,\text{s}^{-1} = 105\,\text{kW}$.
Das passt zur Übersetzung im Abschnitt
[Hebel, Wellrad und Zahnräder](/lernen/physik1/drehbewegung-einfache-maschinen/hebel-wellrad-und-zahnraeder):
Ein Getriebe ohne Reibung erhält $M\cdot\omega$, es tauscht nur Drehmoment gegen Drehzahl.

:::merke
**Energie und Drehimpuls bei Drehungen**

- Rotationsenergie $E_{\text{rot}} = \tfrac12 I\omega^2$, beim Rollen zusätzlich $\tfrac12 m v^2$ mit $v = \omega r$.
- Rollen auf der Rampe aus der Ruhe: $v = \sqrt{2 g h/(1 + k)}$ mit $I = k\,m r^2$.
- Drehimpuls $L = I\omega$ bleibt ohne äußeres Drehmoment erhalten: $I_1\omega_1 = I_2\omega_2$.
- Leistung $P = M\omega$.
:::

```reflexion
frage: Zwei gleich schwere Dosen rollen eine Rampe hinab. Die eine ist mit Suppe gefüllt, die andere mit festgefrorenem Eis. Die Suppe dreht sich beim Rollen kaum mit. Welche Dose ist schneller unten? Begründe mit der Energie.
antwort: |
  Bei der Eisdose dreht sich der ganze Inhalt mit, sie rollt wie ein Vollzylinder, und ein Drittel der Energie steckt in
  der Drehung. Bei der Suppendose dreht sich fast nur das Blech, die Suppe gleitet eher mit, ohne sich zu drehen. Es
  steckt also weniger Energie in der Drehung, und mehr bleibt für das Vorankommen. Die Suppendose ist deshalb schneller
  unten.
```

### Aufgaben zu Rotationsenergie und Drehimpuls

```aufgabe
id: p5-9-wettrennen-konzept
titel: Wer ist zuerst unten?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Vollkugel, ein Vollzylinder und ein dünnwandiges Rohr mit gleicher Masse und gleichem Radius rollen gleichzeitig aus der Ruhe dieselbe Rampe hinab. Wer kommt zuerst unten an?
teile:
  - typ: auswahl
    optionen:
      - "die Vollkugel"
      - "alle gleichzeitig, weil alle gleich schwer sind und frei fallende Körper gleich schnell fallen"
      - "das Rohr, weil seine Masse außen sitzt und es deshalb mehr Schwung hat"
      - "der Vollzylinder, weil er die größte Auflagefläche hat"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Beim freien Fall gilt das, beim Rollen nicht. Ein Teil der Energie geht in die Drehung, und dieser Teil ist je nach Form verschieden groß.
      - wert: 2
        meldung: |
          Das Rohr hat das **größte** Trägheitsmoment. Es steckt die Hälfte seiner Energie in die Drehung und bleibt deshalb am langsamsten.
      - wert: 3
        meldung: |
          Die Auflagefläche spielt ohne Rollreibung keine Rolle. Entscheidend ist, wie viel Energie in die Drehung geht.
hinweise:
  - 'Vergleiche, wie viel Masse jeweils weit außen sitzt. Je größer das Trägheitsmoment im Verhältnis zu $m r^2$, desto mehr Energie geht in die Drehung.'
loesung: |
  **Ansatz:** Die Lageenergie teilt sich in Verschiebung und Drehung. Je größer der Drehanteil, desto langsamer kommt der Körper voran.
  ---
  **Vergleich:** Die Kugel hat mit $I = \tfrac25 m r^2$ das kleinste Trägheitsmoment, das Rohr mit $I = m r^2$ das größte. Die Kugel ist zuerst unten, dann der Vollzylinder, zuletzt das Rohr.
```

```aufgabe
id: p5-9-rotationsenergie
titel: Energie in einer Schleifscheibe
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Schleifscheibe hat das Trägheitsmoment $I = 0{,}020\,\text{kg}\,\text{m}^2$ und dreht sich mit $\omega = 300\,\text{s}^{-1}$. Wie groß ist ihre Rotationsenergie in Joule?
teile:
  - typ: zahl
    loesung: "0.5*0.020*300^2"
    einheit: "J"
    anzeige: '900'
    fehler:
      - wert: "0.020*300^2"
        meldung: |
          Der Faktor $\tfrac12$ fehlt. Die Rotationsenergie ist $\tfrac12 I\omega^2$, genau wie $\tfrac12 m v^2$.
      - wert: "0.5*0.020*300"
        meldung: |
          Die Winkelgeschwindigkeit geht **quadratisch** ein. Doppelt so schnell drehen heißt vierfache Energie.
hinweise:
  - 'Es gilt $E_{\text{rot}} = \tfrac12 I\omega^2$.'
loesung: |
  **Ansatz:** Die Rotationsenergie ist $E_{\text{rot}} = \tfrac12 I\omega^2$.
  ---
  **Rechnung:** $E = \tfrac12\cdot 0{,}020\,\text{kg}\,\text{m}^2\cdot(300\,\text{s}^{-1})^2 = 0{,}010\cdot 90\,000\,\text{kg}\,\text{m}^2/\text{s}^2 = 900\,\text{J}$.
```

```aufgabe
id: p5-9-leistung
titel: Leistung eines Akkuschraubers
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Akkuschrauber gibt ein Drehmoment von $8{,}0\,\text{N}\,\text{m}$ bei $450$ Umdrehungen pro Minute ab. Welche mechanische Leistung gibt er ab? Runde auf ganze Watt.
teile:
  - typ: zahl
    loesung: "8.0*2*pi*450/60"
    einheit: "W"
    anzeige: '377'
    fehler:
      - wert: "8.0*450"
        meldung: |
          In $P = M\omega$ steht die Winkelgeschwindigkeit in $\text{s}^{-1}$, nicht die Drehzahl pro Minute. Rechne $\omega = 2\pi n$ mit $n$ in Umdrehungen pro Sekunde.
      - wert: "8.0*450/60"
        meldung: |
          Du hast die Drehzahl pro Sekunde eingesetzt, aber den Faktor $2\pi$ vergessen. Eine Umdrehung sind $2\pi$ Radiant.
hinweise:
  - 'Erst $\omega = 2\pi n$ mit $n$ pro Sekunde, dann $P = M\omega$.'
loesung: |
  **Winkelgeschwindigkeit:** $n = 450/60\,\text{s}^{-1} = 7{,}5\,\text{s}^{-1}$, also $\omega = 2\pi\cdot 7{,}5\,\text{s}^{-1} = 47{,}1\,\text{s}^{-1}$.
  ---
  **Leistung:** $P = M\omega = 8{,}0\,\text{N}\,\text{m}\cdot 47{,}1\,\text{s}^{-1} = 377\,\text{W}$. Die Einheit stimmt, denn $\text{N}\,\text{m/s} = \text{J/s} = \text{W}$.
```

```aufgabe
id: p5-schwungrad
titel: Energie im Schwungrad
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Schwungrad ist ein Vollzylinder mit $m = 20\,\text{kg}$ und $r = 30\,\text{cm}$. Es dreht sich mit $3000$ Umdrehungen pro Minute. Berechne das Trägheitsmoment und die Rotationsenergie. Gib die Energie in Joule mit drei signifikanten Stellen an.
teile:
  - typ: zahl
    label: Trägheitsmoment
    loesung: "0.5*20*0.30^2"
    einheit: "kg·m²"
    anzeige: '0{,}90'
    fehler:
      - wert: "20*0.30^2"
        meldung: |
          Das wäre das Trägheitsmoment eines dünnen Rings. Für einen Vollzylinder gilt $I = \tfrac12 m r^2$.
      - wert: "0.5*20*30^2"
        meldung: |
          Der Radius muss in Metern stehen: $30\,\text{cm} = 0{,}30\,\text{m}$.
  - typ: zahl
    label: Rotationsenergie
    loesung: "0.5*0.5*20*0.30^2*(3000*2*pi/60)^2"
    einheit: "J"
    anzeige: '4{,}44\cdot 10^{4}'
    fehler:
      - wert: "0.5*0.5*20*0.30^2*(3000*2*pi)^2"
        meldung: |
          Die Drehzahl ist pro Minute angegeben. Teile durch $60$, bevor du $\omega = 2\pi n$ bildest.
      - wert: "0.5*0.5*20*0.30^2*(3000/60)^2"
        meldung: |
          Du hast die Drehzahl statt der Winkelgeschwindigkeit eingesetzt. Es fehlt der Faktor $2\pi$.
hinweise:
  - 'Für einen Vollzylinder gilt $I = \tfrac12 m r^2$.'
  - '$\omega = 2\pi n$ mit $n$ in Umdrehungen pro **Sekunde**. Dann $E = \tfrac12 I\omega^2$.'
loesung: |
  **Trägheitsmoment:** $I = \tfrac12 m r^2 = \tfrac12\cdot 20\,\text{kg}\cdot(0{,}30\,\text{m})^2 = 0{,}90\,\text{kg}\,\text{m}^2$.
  ---
  **Winkelgeschwindigkeit:** $n = 3000/60\,\text{s}^{-1} = 50\,\text{s}^{-1}$, also $\omega = 2\pi\cdot 50\,\text{s}^{-1} = 314\,\text{s}^{-1}$.
  ---
  **Energie:** $E = \tfrac12\cdot 0{,}90\,\text{kg}\,\text{m}^2\cdot(314{,}2\,\text{s}^{-1})^2 = 4{,}44\cdot 10^{4}\,\text{J}$. Das entspricht etwa der Lageenergie von $450\,\text{kg}$ in $10\,\text{m}$ Höhe.
```

```aufgabe
id: p5-pirouette
titel: Pirouette
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Eiskunstläuferin dreht sich mit ausgestreckten Armen ($I_1 = 4{,}0\,\text{kg}\,\text{m}^2$) mit $1{,}5$ Umdrehungen pro Sekunde. Sie zieht die Arme an, ihr Trägheitsmoment sinkt auf $I_2 = 1{,}2\,\text{kg}\,\text{m}^2$. Die Reibung des Eises vernachlässigen wir.

  a) Wie viele Umdrehungen pro Sekunde macht sie jetzt?

  b) Um welchen Faktor ändert sich ihre Rotationsenergie? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Drehzahl
    loesung: "4.0*1.5/1.2"
    einheit: "1/s"
    anzeige: '5'
    fehler:
      - wert: "1.2*1.5/4.0"
        meldung: |
          Mit kleinerem Trägheitsmoment muss sie sich **schneller** drehen, nicht langsamer. Aus $I_1 n_1 = I_2 n_2$ folgt $n_2 = n_1\cdot I_1/I_2$.
      - wert: "1.5*sqrt(4.0/1.2)"
        meldung: |
          Du hast die Rotationsenergie gleichgesetzt. Sie bleibt aber nicht erhalten, weil die Muskeln Arbeit verrichten. Erhalten bleibt der **Drehimpuls**.
  - typ: zahl
    label: b) Faktor der Energie
    loesung: "(1.2*5^2)/(4.0*1.5^2)"
    anzeige: '3{,}33'
    fehler:
      - wert: "1"
        meldung: |
          Die Energie bleibt nicht gleich. Erhalten bleibt nur der Drehimpuls. Berechne $E_2/E_1 = \dfrac{I_2 n_2^2}{I_1 n_1^2}$.
hinweise:
  - 'Drehimpulserhaltung $I_1\omega_1 = I_2\omega_2$. Mit $\omega = 2\pi n$ gilt das auch für die Drehzahlen.'
  - 'Im Verhältnis $E_2/E_1$ kürzt sich der Faktor $\tfrac12(2\pi)^2$. Es bleibt $\dfrac{I_2 n_2^2}{I_1 n_1^2}$.'
gefuehrt:
  - text: Welche Größe bleibt bei der Pirouette erhalten, und warum?
    erklaerung: Der Drehimpuls $L = I\omega$, weil auf glattem Eis kein äußeres Drehmoment wirkt. Die Energie bleibt nicht erhalten, denn die Muskeln verrichten Arbeit.
  - text: Berechne die neue Drehzahl in Umdrehungen pro Sekunde.
    teil: { typ: zahl, loesung: "4.0*1.5/1.2", einheit: "1/s" }
    erklaerung: $n_2 = 1{,}5\,\text{s}^{-1}\cdot 4{,}0/1{,}2 = 5{,}0\,\text{s}^{-1}$.
  - text: Berechne das Verhältnis $E_2/E_1 = \dfrac{I_2 n_2^2}{I_1 n_1^2}$.
    teil: { typ: zahl, loesung: "(1.2*25)/(4.0*2.25)" }
    erklaerung: $\dfrac{1{,}2\cdot 25}{4{,}0\cdot 2{,}25} = \dfrac{30}{9} = 3{,}33$.
loesung: |
  **Ansatz:** Auf glattem Eis wirkt kein äußeres Drehmoment. Der Drehimpuls bleibt erhalten: $I_1\omega_1 = I_2\omega_2$. Weil $\omega = 2\pi n$ ist, gilt auch $I_1 n_1 = I_2 n_2$.
  ---
  **a)** $n_2 = n_1\cdot\dfrac{I_1}{I_2} = 1{,}5\,\text{s}^{-1}\cdot\dfrac{4{,}0\,\text{kg}\,\text{m}^2}{1{,}2\,\text{kg}\,\text{m}^2} = 5{,}0\,\text{s}^{-1}$.
  ---
  **b)** $\dfrac{E_2}{E_1} = \dfrac{I_2 n_2^2}{I_1 n_1^2} = \dfrac{1{,}2\cdot 25}{4{,}0\cdot 2{,}25} = \dfrac{30}{9} = 3{,}33$.
  ---
  **Deutung:** Der Drehimpuls bleibt gleich, die Energie steigt auf das $3{,}33$-Fache. Die zusätzliche Energie liefert die Muskelarbeit beim Anziehen der Arme.
```

```aufgabe
id: p5-rollen-rampe
titel: Rollender Zylinder gegen gleitenden Klotz
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Vollzylinder rollt, ohne zu rutschen, eine Rampe von $1{,}0\,\text{m}$ Höhe aus der Ruhe hinunter. Daneben gleitet ein Klotz reibungsfrei dieselbe Rampe hinunter. Berechne beide Endgeschwindigkeiten. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: Zylinder
    loesung: "sqrt(4/3*9.81*1.0)"
    einheit: "m/s"
    anzeige: '3{,}62'
    fehler:
      - wert: "sqrt(2*9.81*1.0)"
        meldung: |
          Das gilt für den gleitenden Klotz. Der Zylinder dreht sich und steckt einen Teil seiner Energie in die Drehung. Er ist deshalb langsamer.
  - typ: zahl
    label: Klotz
    loesung: "sqrt(2*9.81*1.0)"
    einheit: "m/s"
    anzeige: '4{,}43'
    fehler:
      - wert: "2*9.81*1.0"
        meldung: |
          Das ist $v^2$. Ziehe noch die Wurzel.
hinweise:
  - 'Energieerhaltung: $m g h = \tfrac12 m v^2 + \tfrac12 I\omega^2$.'
  - 'Setze $I = \tfrac12 m r^2$ und $\omega = v/r$ ein. Dann kürzen sich Masse und Radius.'
loesung: |
  **Ansatz:** Ohne Reibungsverluste bleibt die Energie erhalten. Beim Zylinder geht die Lageenergie in Verschiebung und Drehung, beim Klotz nur in Verschiebung.
  ---
  **Zylinder:** $m g h = \tfrac12 m v^2 + \tfrac12\cdot\tfrac12 m r^2\cdot\dfrac{v^2}{r^2} = \tfrac34 m v^2$. Also $v = \sqrt{\tfrac43 g h} = \sqrt{13{,}08\,\text{m}^2/\text{s}^2} = 3{,}62\,\text{m/s}$.
  ---
  **Klotz:** $m g h = \tfrac12 m v^2$, also $v = \sqrt{2 g h} = \sqrt{19{,}62\,\text{m}^2/\text{s}^2} = 4{,}43\,\text{m/s}$.
  ---
  **Deutung:** Masse und Radius haben sich gekürzt. **Jeder** rollende Vollzylinder ist hier gleich schnell, egal wie groß oder schwer.
```


```aufgabe
id: p5-9-hohlzylinder
titel: Rohr gegen Vollzylinder auf der Rampe
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein dünnwandiges Rohr und ein Vollzylinder rollen gleichzeitig aus der Ruhe eine $2{,}0\,\text{m}$ lange Rampe mit $15^\circ$ Neigung hinab, ohne zu rutschen.

  a) Wie schnell ist das Rohr am Ende der Rampe? Runde auf zwei Nachkommastellen.

  b) Wie lange braucht der Vollzylinder für die Rampe? Runde auf zwei Nachkommastellen.

  c) Wie lange braucht das Rohr? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Endgeschwindigkeit Rohr
    loesung: "sqrt(9.81*2.0*sin(inRad(15)))"
    einheit: "m/s"
    anzeige: '2{,}25'
    fehler:
      - wert: "sqrt(4/3*9.81*2.0*sin(inRad(15)))"
        meldung: |
          Das ist die Formel für den Vollzylinder. Beim dünnwandigen Rohr sitzt die ganze Masse außen, $I = m r^2$. Dann gilt $m g h = \tfrac12 m v^2 + \tfrac12 m v^2$.
      - wert: "sqrt(9.81*2.0)"
        meldung: |
          Du hast die Rampenlänge als Höhe eingesetzt. Die Höhe ist $h = 2{,}0\,\text{m}\cdot\sin 15^\circ$.
  - typ: zahl
    label: b) Zeit Vollzylinder
    loesung: "2*2.0/sqrt(4/3*9.81*2.0*sin(inRad(15)))"
    einheit: "s"
    anzeige: '1{,}54'
    fehler:
      - wert: "2.0/sqrt(4/3*9.81*2.0*sin(inRad(15)))"
        meldung: |
          Du hast mit der Endgeschwindigkeit gerechnet, als wäre sie die ganze Zeit so groß gewesen. Bei gleichmäßiger Beschleunigung aus der Ruhe ist die mittlere Geschwindigkeit nur halb so groß: $t = 2s/v$.
  - typ: zahl
    label: c) Zeit Rohr
    loesung: "2*2.0/sqrt(9.81*2.0*sin(inRad(15)))"
    einheit: "s"
    anzeige: '1{,}78'
hinweise:
  - 'Bestimme zuerst die Höhe $h = l\sin\alpha$. Energieerhaltung beim Rohr: $m g h = \tfrac12 m v^2 + \tfrac12 m r^2\omega^2$ mit $\omega = v/r$.'
  - 'Beide rollen gleichmäßig beschleunigt aus der Ruhe. Dann ist die mittlere Geschwindigkeit $v/2$, und es gilt $t = 2 l/v$.'
loesung: |
  **Höhe:** $h = 2{,}0\,\text{m}\cdot\sin 15^\circ = 2{,}0\,\text{m}\cdot 0{,}259 = 0{,}518\,\text{m}$.
  ---
  **a) Rohr:** Mit $I = m r^2$ und $\omega = v/r$ ist die Drehenergie $\tfrac12 m v^2$, genau so groß wie die Verschiebungsenergie. Also $m g h = m v^2$ und $v = \sqrt{g h} = \sqrt{9{,}81\,\text{m/s}^2\cdot 0{,}518\,\text{m}} = 2{,}25\,\text{m/s}$.
  ---
  **b) Vollzylinder:** $v = \sqrt{\tfrac43 g h} = \sqrt{\tfrac43\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}518\,\text{m}} = 2{,}60\,\text{m/s}$. Die Bewegung ist gleichmäßig beschleunigt, die mittlere Geschwindigkeit ist $v/2$. Also $t = \dfrac{2l}{v} = \dfrac{4{,}0\,\text{m}}{2{,}60\,\text{m/s}} = 1{,}54\,\text{s}$.
  ---
  **c) Rohr:** $t = \dfrac{4{,}0\,\text{m}}{2{,}25\,\text{m/s}} = 1{,}78\,\text{s}$.
  ---
  **Deutung:** Der Vollzylinder kommt etwa $0{,}24\,\text{s}$ früher an. Bei gleicher Masse und gleichem Radius entscheidet allein, wie die Masse verteilt ist.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus den Kapiteln 1 bis 4 gemischt: Größen, Einheiten, Messen,
Kinematik, Dynamik sowie Arbeit, Energie, Impuls. Wo eine Aufgabe ein Werkzeug aus einem früheren Kapitel
braucht, verlinkt die Lösung den passenden Abschnitt zum Wiederholen. Das
ist Absicht: In der Prüfung steht nicht dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches
Verfahren passt?“ musst du nichts rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p5-mix-gelenkkraft
titel: Eine Kraft aus zwei Komponenten
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Gelenk drückt auf einen Ausleger mit einer waagrechten Komponente von $160\,\text{N}$ und einer senkrechten Komponente von $120\,\text{N}$ nach oben. Wie groß ist der Betrag der Gelenkkraft, und welchen Winkel schließt sie mit der Waagrechten ein? Runde den Winkel auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Betrag
    loesung: "sqrt(160^2+120^2)"
    einheit: "N"
    anzeige: '200'
    fehler:
      - wert: "160+120"
        meldung: |
          Die beiden Komponenten stehen senkrecht aufeinander. Man darf sie nicht einfach addieren, sondern braucht den Satz des Pythagoras.
  - typ: zahl
    label: Winkel zur Waagrechten
    loesung: "inGrad(atan(120/160))"
    einheit: "°"
    anzeige: '36{,}9'
    fehler:
      - wert: "inGrad(atan(160/120))"
        meldung: |
          Das ist der Winkel zur **Senkrechten**. Zur Waagrechten gehört $\tan\alpha = \dfrac{\text{senkrechte Komponente}}{\text{waagrechte Komponente}}$.
hinweise:
  - Die Komponenten und die Kraft bilden ein rechtwinkliges Dreieck mit der Kraft als Hypotenuse.
loesung: |
  **Ansatz:** Die Kraft ist die Summe zweier senkrecht aufeinander stehender Komponenten. Ihr Betrag folgt aus Pythagoras, ihre Richtung aus dem Tangens.
  ---
  **Betrag:** $F = \sqrt{(160\,\text{N})^2 + (120\,\text{N})^2} = \sqrt{40\,000\,\text{N}^2} = 200\,\text{N}$.
  ---
  **Winkel:** $\tan\alpha = \dfrac{120\,\text{N}}{160\,\text{N}} = 0{,}75$, also $\alpha = 36{,}9^\circ$. Wiederholen kannst du das im Abschnitt [Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren).
```

```aufgabe
id: p5-mix-unsicherheit
titel: Ein Drehmoment mit Messunsicherheit
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  An einem Hebel misst du die senkrecht angreifende Kraft $F = (40{,}0 \pm 0{,}5)\,\text{N}$ und den Hebelarm $r = (0{,}250 \pm 0{,}002)\,\text{m}$. Berechne das Drehmoment und seine absolute Unsicherheit. Verwende die Regel: Bei einem Produkt addieren sich die relativen Unsicherheiten. Runde die Unsicherheit auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Drehmoment
    loesung: "40*0.25"
    einheit: "N·m"
    anzeige: '10{,}0'
    fehler:
      - wert: "40/0.25"
        meldung: |
          Das Drehmoment ist Kraft **mal** Hebelarm.
  - typ: zahl
    label: absolute Unsicherheit
    loesung: "40*0.25*(0.5/40 + 0.002/0.25)"
    einheit: "N·m"
    anzeige: '0{,}2'
    toleranz: 0.02
    fehler:
      - wert: "0.5+0.002"
        meldung: |
          Unsicherheiten mit verschiedenen Einheiten (N und m) kann man nicht addieren. Bei einem Produkt addiert man die **relativen** Unsicherheiten.
      - wert: "40*0.25*(0.5/40)"
        meldung: |
          Du hast nur die Unsicherheit der Kraft berücksichtigt. Auch der Hebelarm ist nur auf $0{,}8\,\%$ genau bekannt.
hinweise:
  - 'Relative Unsicherheiten: $0{,}5/40{,}0$ und $0{,}002/0{,}250$.'
  - Addiere sie und multipliziere die Summe mit dem Drehmoment.
loesung: |
  **Ansatz:** $M = F\cdot r$ ist ein Produkt. Seine relative Unsicherheit ist die Summe der relativen Unsicherheiten der Faktoren.
  ---
  **Drehmoment:** $M = 40{,}0\,\text{N}\cdot 0{,}250\,\text{m} = 10{,}0\,\text{N}\,\text{m}$.
  ---
  **Relative Unsicherheit:** $\dfrac{0{,}5}{40{,}0} + \dfrac{0{,}002}{0{,}250} = 1{,}25\,\% + 0{,}80\,\% = 2{,}05\,\%$.
  ---
  **Ergebnis:** $\Delta M = 0{,}0205\cdot 10{,}0\,\text{N}\,\text{m} = 0{,}2\,\text{N}\,\text{m}$, also $M = (10{,}0 \pm 0{,}2)\,\text{N}\,\text{m}$. Wiederholen kannst du das im Abschnitt [Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung).
```

```aufgabe
id: p5-mix-rad-kinematik
titel: Ein Rad rollt an
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Rad mit $0{,}35\,\text{m}$ Radius rollt aus der Ruhe gleichmäßig beschleunigt, ohne zu rutschen. In $5{,}0\,\text{s}$ legt seine Achse $20\,\text{m}$ zurück.

  a) Wie groß ist die Beschleunigung der Achse?

  b) Wie schnell ist die Achse nach $5{,}0\,\text{s}$?

  c) Wie groß ist dann die Winkelgeschwindigkeit des Rads? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Beschleunigung
    loesung: "2*20/5^2"
    einheit: "m/s²"
    anzeige: '1{,}6'
    fehler:
      - wert: "20/5^2"
        meldung: |
          Aus $s = \tfrac12 a t^2$ folgt $a = 2s/t^2$. Der Faktor $2$ fehlt.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "2*20/5^2*5"
    einheit: "m/s"
    anzeige: '8'
    fehler:
      - wert: "20/5"
        meldung: |
          $20\,\text{m}/5{,}0\,\text{s} = 4{,}0\,\text{m/s}$ ist die **mittlere** Geschwindigkeit. Aus der Ruhe ist die Endgeschwindigkeit doppelt so groß.
  - typ: zahl
    label: c) Winkelgeschwindigkeit
    loesung: "2*20/5^2*5/0.35"
    einheit: "1/s"
    anzeige: '22{,}9'
    fehler:
      - wert: "2*20/5^2*5*0.35"
        meldung: |
          Aus $v = \omega r$ folgt $\omega = v/r$. Du musst teilen.
hinweise:
  - 'Aus der Ruhe gilt $s = \tfrac12 a t^2$ und $v = a t$.'
  - 'Beim Rollen ohne Rutschen gilt $v = \omega r$.'
loesung: |
  **Ansatz:** Die Achse bewegt sich gleichmäßig beschleunigt aus der Ruhe. Beim Rollen ohne Rutschen hängen Achsgeschwindigkeit und Winkelgeschwindigkeit über $v = \omega r$ zusammen.
  ---
  **a)** $a = \dfrac{2s}{t^2} = \dfrac{2\cdot 20\,\text{m}}{(5{,}0\,\text{s})^2} = 1{,}6\,\text{m/s}^2$.
  ---
  **b)** $v = a t = 1{,}6\,\text{m/s}^2\cdot 5{,}0\,\text{s} = 8{,}0\,\text{m/s}$.
  ---
  **c)** $\omega = \dfrac{v}{r} = \dfrac{8{,}0\,\text{m/s}}{0{,}35\,\text{m}} = 22{,}9\,\text{s}^{-1}$. Wiederholen kannst du das im Abschnitt [Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung).
```

```aufgabe
id: p5-mix-reibung
titel: Eine Kiste gleichmäßig schieben
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Kiste mit $40\,\text{kg}$ wird mit konstanter Geschwindigkeit $5{,}0\,\text{m}$ weit über einen waagrechten Boden geschoben. Die Gleitreibungszahl ist $\mu_G = 0{,}35$. Die Schubkraft wirkt waagrecht.

  a) Wie groß ist die Schubkraft? Runde auf eine Nachkommastelle.

  b) Wie viel Arbeit verrichtest du? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Schubkraft
    loesung: "0.35*40*9.81"
    einheit: "N"
    anzeige: '137{,}3'
    fehler:
      - wert: "0.35*40"
        meldung: |
          Die Reibungskraft ist $\mu_G$ mal **Normalkraft**, und die Normalkraft ist hier $m g$ in Newton, nicht die Masse in Kilogramm.
      - wert: "40*9.81"
        meldung: |
          Das ist die Gewichtskraft. Schieben musst du nur gegen die Reibung, und die ist $\mu_G\cdot m g$.
  - typ: zahl
    label: b) Arbeit
    loesung: "0.35*40*9.81*5.0"
    einheit: "J"
    anzeige: '686{,}7'
hinweise:
  - Konstante Geschwindigkeit heißt resultierende Kraft null. Die Schubkraft gleicht die Gleitreibung aus.
  - 'Gleitreibung $F_R = \mu_G\cdot F_N$ mit $F_N = m g$. Die Arbeit ist $W = F\cdot s$.'
loesung: |
  **Ansatz:** Die Kiste ist im Kräftegleichgewicht, weil ihre Geschwindigkeit konstant ist. Die Schubkraft ist genau so groß wie die Gleitreibung.
  ---
  **a)** $F = \mu_G\cdot m g = 0{,}35\cdot 40\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 137{,}3\,\text{N}$.
  ---
  **b)** $W = F\cdot s = 137{,}3\,\text{N}\cdot 5{,}0\,\text{m} = 686{,}7\,\text{J}$. Diese Arbeit wird vollständig zu Wärme. Wiederholen kannst du die Reibung im Abschnitt [Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand).
```

```aufgabe
id: p5-mix-kran-leistung
titel: Leistung eines Krans
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Kran hebt eine Last mit $600\,\text{kg}$ in $20\,\text{s}$ gleichmäßig um $8{,}0\,\text{m}$. Sein Antrieb hat insgesamt den Wirkungsgrad $0{,}80$.

  a) Wie groß ist die Nutzleistung in Watt? Runde auf eine Nachkommastelle.

  b) Welche Leistung nimmt der Antrieb auf?
teile:
  - typ: zahl
    label: a) Nutzleistung
    loesung: "600*9.81*8.0/20"
    einheit: "W"
    anzeige: '2354{,}4'
    fehler:
      - wert: "600*8.0/20"
        meldung: |
          Leistung ist Arbeit pro Zeit. Die Hubarbeit ist $m g h$, du hast den Faktor $g$ vergessen.
  - typ: zahl
    label: b) aufgenommene Leistung
    loesung: "600*9.81*8.0/20/0.80"
    einheit: "W"
    anzeige: '2943'
    fehler:
      - wert: "600*9.81*8.0/20*0.80"
        meldung: |
          Der Antrieb muss **mehr** aufnehmen, als er nutzbar abgibt. Teile durch den Wirkungsgrad.
hinweise:
  - 'Nutzleistung ist Hubarbeit durch Zeit: $P = m g h/t$.'
  - 'Aufgenommene Leistung ist Nutzleistung durch $\eta$.'
loesung: |
  **Ansatz:** Die Nutzleistung ist die Hubarbeit pro Zeit. Der Antrieb nimmt mehr auf, weil ein Teil als Wärme verloren geht.
  ---
  **a)** $P_{\text{nutz}} = \dfrac{m g h}{t} = \dfrac{600\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 8{,}0\,\text{m}}{20\,\text{s}} = \dfrac{47\,088\,\text{J}}{20\,\text{s}} = 2354{,}4\,\text{W}$.
  ---
  **b)** $P_{\text{zu}} = \dfrac{2354{,}4\,\text{W}}{0{,}80} = 2943\,\text{W}$. Wiederholen kannst du die Leistung im Abschnitt [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

```aufgabe
id: p5-mix-rampe-reibung
titel: Wirkungsgrad einer Rampe mit Reibung
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Kiste mit $60\,\text{kg}$ wird mit konstanter Geschwindigkeit eine $20^\circ$ steile Rampe hinaufgeschoben. Die Kraft wirkt parallel zur Rampe. Die Gleitreibungszahl ist $\mu_G = 0{,}25$.

  a) Wie groß ist die nötige Schubkraft? Runde auf eine Nachkommastelle.

  b) Wie groß ist der Wirkungsgrad der Rampe als Maschine, also Hubarbeit durch aufgewendete Arbeit? Gib ihn in Prozent mit einer Nachkommastelle an.
teile:
  - typ: zahl
    label: a) Schubkraft
    loesung: "60*9.81*(sin(inRad(20)) + 0.25*cos(inRad(20)))"
    einheit: "N"
    anzeige: '339{,}6'
    fehler:
      - wert: "60*9.81*(sin(inRad(20)) - 0.25*cos(inRad(20)))"
        meldung: |
          Beim Hinaufschieben zeigt die Reibung **hangabwärts**, gegen die Bewegung. Sie kommt zur Hangabtriebskraft dazu, statt sie zu verkleinern.
      - wert: "60*9.81*(sin(inRad(20)) + 0.25)"
        meldung: |
          Die Reibung ist $\mu_G$ mal **Normalkraft**, und auf der Rampe ist $F_N = m g\cos\alpha$, nicht $m g$.
  - typ: zahl
    label: b) Wirkungsgrad
    loesung: "sin(inRad(20))/(sin(inRad(20)) + 0.25*cos(inRad(20)))*100"
    einheit: "%"
    anzeige: '59{,}3'
    fehler:
      - wert: "75"
        meldung: |
          $1 - \mu_G$ ist nicht der Wirkungsgrad. Vergleiche die Hubarbeit $m g\,l\sin\alpha$ mit der aufgewendeten Arbeit $F\cdot l$.
hinweise:
  - 'Entlang der Rampe wirken hangabwärts die Hangabtriebskraft $m g\sin\alpha$ und die Gleitreibung $\mu_G\,m g\cos\alpha$. Die Schubkraft gleicht beide aus.'
  - 'Für die Rampenlänge $l$ ist die Hubarbeit $m g\,l\sin\alpha$ und die aufgewendete Arbeit $F\cdot l$. Die Länge kürzt sich.'
loesung: |
  **Ansatz:** Konstante Geschwindigkeit heißt Kräftegleichgewicht entlang der Rampe. Die Schubkraft muss Hangabtriebskraft **und** Gleitreibung ausgleichen, denn beim Hinaufschieben zeigt die Reibung hangabwärts.
  ---
  **Kräfte:** $m g = 588{,}6\,\text{N}$. Hangabtrieb $588{,}6\,\text{N}\cdot\sin 20^\circ = 201{,}3\,\text{N}$, Reibung $0{,}25\cdot 588{,}6\,\text{N}\cdot\cos 20^\circ = 138{,}3\,\text{N}$.
  ---
  **a)** $F = 201{,}3\,\text{N} + 138{,}3\,\text{N} = 339{,}6\,\text{N}$.
  ---
  **b)** Ohne Reibung bräuchte man nur $201{,}3\,\text{N}$. Bei gleichem Weg ist $\eta = \dfrac{201{,}3\,\text{N}}{339{,}6\,\text{N}} = 0{,}593 = 59{,}3\,\%$. Rund $40\,\%$ der Arbeit werden zu Wärme. Wiederholen kannst du das im Abschnitt [Die schiefe Ebene: hinab, hinauf und die Haftgrenze](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze).
```

```aufgabe
id: p5-mix-verfahren-brett
titel: "Welches Verfahren passt? Ein Brett auf zwei Böcken"
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Brett mit bekanntem Gewicht liegt auf zwei Böcken. Ein Farbeimer steht an einer bekannten Stelle darauf. Gesucht ist die Kraft, mit der das Brett auf einen der Böcke drückt. Welcher Ansatz führt am schnellsten zum Ziel? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Drehmomentgleichgewicht mit dem Bezugspunkt im **anderen** Bock"
      - "Kräftegleichgewicht allein: Jeder Bock trägt die Hälfte."
      - "Energieerhaltung zwischen Anfang und Ende"
      - "Grundgesetz $F = m a$ für das Brett"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Jeder Bock trägt nur dann die Hälfte, wenn alles symmetrisch verteilt ist. Steht der Eimer näher an einem Bock, trägt dieser mehr. Das Kräftegleichgewicht allein hat zwei Unbekannte.
      - wert: 2
        meldung: |
          Hier bewegt sich nichts, und es wird keine Energie umgewandelt. Für ruhende Körper sind die Gleichgewichtsbedingungen das Werkzeug.
      - wert: 3
        meldung: |
          Das Brett ruht, also ist $a = 0$. Das Grundgesetz liefert nur das Kräftegleichgewicht mit zwei Unbekannten. Es fehlt die Drehmomentgleichung.
hinweise:
  - Es gibt zwei unbekannte Kräfte. Wie wird man eine davon auf einen Schlag los?
loesung: |
  **Werkzeug:** Das Brett ruht, also gelten die Gleichgewichtsbedingungen. Es gibt zwei unbekannte Stützkräfte.
  ---
  **Geschickt:** Legt man den Bezugspunkt in den anderen Bock, fällt dessen Kraft aus der Drehmomentgleichung heraus. Die gesuchte Kraft folgt dann aus einer einzigen Gleichung.
```

```aufgabe
id: p5-mix-verfahren-pirouette
titel: "Welches Verfahren passt? Ein Turmspringer"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Turmspringer dreht sich in der Luft gestreckt mit bekannter Winkelgeschwindigkeit. Dann rollt er sich zusammen, sein Trägheitsmoment wird bekannt kleiner. Gesucht ist seine neue Winkelgeschwindigkeit. Welcher Ansatz passt? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Erhaltung des Drehimpulses $I_1\\omega_1 = I_2\\omega_2$"
      - "Erhaltung der Rotationsenergie $\\tfrac12 I_1\\omega_1^2 = \\tfrac12 I_2\\omega_2^2$"
      - "Grundgesetz $M = I\\alpha$ mit dem Drehmoment der Gewichtskraft"
      - "Die Winkelgeschwindigkeit bleibt gleich, weil in der Luft keine Kraft wirkt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Beim Einrollen verrichten die Muskeln Arbeit. Die Rotationsenergie nimmt dabei zu und bleibt nicht erhalten. Erhalten bleibt der Drehimpuls.
      - wert: 2
        meldung: |
          Die Gewichtskraft greift im Schwerpunkt an und hat bezüglich einer Achse durch den Schwerpunkt keinen Hebelarm. Es wirkt also kein äußeres Drehmoment. Dann bleibt der Drehimpuls erhalten.
      - wert: 3
        meldung: |
          Gleich bleibt der Drehimpuls $I\omega$, nicht die Winkelgeschwindigkeit. Wird $I$ kleiner, muss $\omega$ größer werden.
hinweise:
  - Wirkt auf den Springer ein äußeres Drehmoment um seinen Schwerpunkt? Welche Größe bleibt dann gleich?
loesung: |
  **Werkzeug:** Um seinen Schwerpunkt wirkt auf den Springer kein äußeres Drehmoment. Also bleibt der Drehimpuls erhalten: $I_1\omega_1 = I_2\omega_2$.
  ---
  **Warum nicht Energie:** Beim Einrollen verrichten seine Muskeln Arbeit, die Rotationsenergie wächst. Sie ist deshalb keine Erhaltungsgröße.
```

```aufgabe
id: p5-mix-verfahren-rollen
titel: "Welches Verfahren passt? Eine Kugel rollt hinab"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Vollkugel rollt aus der Ruhe, ohne zu rutschen, eine gewundene Bahn mit bekanntem Höhenunterschied hinab. Gesucht ist ihre Geschwindigkeit am Ende. Welcher Ansatz passt? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Energieerhaltung mit Lageenergie, kinetischer Energie **und** Rotationsenergie"
      - "Energieerhaltung $m g h = \\tfrac12 m v^2$, also $v = \\sqrt{2 g h}$"
      - "Kinematik mit $a = g\\sin\\alpha$"
      - "Drehimpulserhaltung"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Kugel dreht sich. Ein Teil der Lageenergie steckt in der Drehung, $\tfrac12 I\omega^2$. Ohne diesen Teil kommt eine zu große Geschwindigkeit heraus.
      - wert: 2
        meldung: |
          Die Bahn ist gewunden, die Neigung ändert sich ständig. Außerdem gilt $a = g\sin\alpha$ nur für einen gleitenden Körper. Mit der Energie braucht man nur den Höhenunterschied.
      - wert: 3
        meldung: |
          Auf die Kugel wirkt ein Drehmoment durch die Haftreibung am Boden, sonst würde sie nicht schneller drehen. Ihr Drehimpuls bleibt also nicht erhalten.
hinweise:
  - Welche Größe kennst du? Nur den Höhenunterschied, nicht den Verlauf der Bahn. Welcher Satz kommt mit Anfang und Ende aus?
loesung: |
  **Werkzeug:** Bekannt ist nur der Höhenunterschied. Der Energieerhaltungssatz braucht nur Anfangs- und Endzustand, nicht den Verlauf der Bahn.
  ---
  **Vollständig:** Weil die Kugel rollt, gilt $m g h = \tfrac12 m v^2 + \tfrac12 I\omega^2$ mit $I = \tfrac25 m r^2$ und $\omega = v/r$. Das ergibt $v = \sqrt{\tfrac{10}{7} g h}$.
```

## Prüfungsaufgaben

Diese Aufgaben verbinden Gleichgewicht, einfache Maschinen, Energie und Drehbewegung, so wie in der schriftlichen
Prüfung. Jede hat einen Zeitrichtwert. Rechne zuerst ohne Hinweise und schreib jeden Schritt mit Einheiten auf.

```aufgabe
id: p5-pruefung-kran
titel: Ein Baukran
niveau: 3
punkte: 10
lernziel: 3
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Turmdrehkran hebt eine Last von $1500\,\text{kg}$, die am Ausleger $20\,\text{m}$ vom Turm entfernt hängt. Auf der Gegenseite sitzt im Abstand $6{,}0\,\text{m}$ vom Turm ein Gegengewicht.

  a) Wie groß muss das Gegengewicht in kg sein, damit auf den Turm kein Drehmoment wirkt? Den Ausleger betrachten wir als masselos. (3 P)

  b) Die Last hängt an einem Flaschenzug mit $4$ tragenden Seilstücken. Wie groß ist die Seilkraft ohne Reibung? (3 P)

  c) Die Last wird in $25\,\text{s}$ gleichmäßig um $15\,\text{m}$ gehoben. Welche Leistung muss der Motor aufnehmen, wenn der Gesamtwirkungsgrad $75\,\%$ beträgt? (4 P)
teile:
  - typ: zahl
    label: a) Gegengewicht
    loesung: "1500*20/6.0"
    einheit: "kg"
    anzeige: '5000'
    fehler:
      - wert: "1500*6.0/20"
        meldung: |
          Das Gegengewicht sitzt **näher** am Turm, also braucht es mehr Masse als die Last, nicht weniger.
  - typ: zahl
    label: b) Seilkraft
    loesung: "1500*9.81/4"
    einheit: "N"
    anzeige: '3679'
    fehler:
      - wert: "1500/4"
        meldung: |
          Das ist ein Viertel der Masse in kg. Die Seilkraft ist eine Kraft: ein Viertel der Gewichtskraft $m g$.
  - typ: zahl
    label: c) Motorleistung
    loesung: "1500*9.81*15/25/0.75"
    einheit: "W"
    anzeige: '11772 \approx 11{,}8\cdot 10^{3}'
    fehler:
      - wert: "1500*9.81*15/25*0.75"
        meldung: |
          Der Motor muss **mehr** aufnehmen, als an der Last ankommt. Teile durch den Wirkungsgrad.
      - wert: "1500*9.81*15/25"
        meldung: |
          Das ist die Nutzleistung. Der Motor nimmt wegen der Verluste mehr auf.
hinweise:
  - 'a) Hebelgesetz um die Turmachse. Die Fallbeschleunigung $g$ steht auf beiden Seiten und kürzt sich.'
  - 'b) $F = G/n$. c) Nutzleistung $= m g h/t$, aufgenommene Leistung $=$ Nutzleistung durch $\eta$.'
loesung: |
  **a) Ansatz:** Kein resultierendes Drehmoment um die Turmachse heißt Hebelgesetz: $m_G\,g\cdot 6{,}0\,\text{m} = 1500\,\text{kg}\cdot g\cdot 20\,\text{m}$. Wir teilen durch $g$ und durch $6{,}0\,\text{m}$: $m_G = 5000\,\text{kg}$.
  ---
  **b)** Die Last hängt an $4$ Seilstücken: $F = \dfrac{m g}{4} = \dfrac{1500\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{4} = 3679\,\text{N}$.
  ---
  **c) Nutzleistung:** $P_{\text{nutz}} = \dfrac{m g h}{t} = \dfrac{1500\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 15\,\text{m}}{25\,\text{s}} = 8829\,\text{W}$.
  ---
  **c) Aufgenommene Leistung:** $P_{\text{zu}} = \dfrac{8829\,\text{W}}{0{,}75} = 11\,772\,\text{W} \approx 11{,}8\,\text{kW}$. Kontrolle: Die aufgenommene Leistung ist größer als die Nutzleistung.
```

```aufgabe
id: p5-pruefung-leiter
titel: Eine Leiter an der Wand
niveau: 3
punkte: 10
lernziel: 1
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 15 Minuten.* Eine $5{,}0\,\text{m}$ lange Leiter mit der Gewichtskraft $200\,\text{N}$ und dem Schwerpunkt in der Mitte lehnt an einer **glatten** Wand, also ohne Reibung an der Wand. Ihr Fuß steht $1{,}4\,\text{m}$ von der Wand entfernt.

  a) In welcher Höhe berührt die Leiter die Wand? (2 P)

  b) Zeichne das Freikörperbild der Leiter in Gedanken und berechne die waagrechte Kraft der Wand auf die Leiter. Runde auf eine Nachkommastelle. (4 P)

  c) Welche Haftreibungszahl zwischen Leiter und Boden ist mindestens nötig, damit die Leiter nicht wegrutscht? Runde auf drei Nachkommastellen. (4 P)
teile:
  - typ: zahl
    label: a) Höhe
    loesung: "sqrt(5.0^2-1.4^2)"
    einheit: "m"
    anzeige: '4{,}8'
    fehler:
      - wert: "sqrt(5.0^2+1.4^2)"
        meldung: |
          Die Leiter ist die **Hypotenuse**, also die längste Seite. Die Höhe ist kürzer als die Leiter: $h = \sqrt{l^2 - d^2}$.
  - typ: zahl
    label: b) Wandkraft
    loesung: "200*0.7/sqrt(5.0^2-1.4^2)"
    einheit: "N"
    anzeige: '29{,}2'
    fehler:
      - wert: "200*2.5/sqrt(5.0^2-1.4^2)"
        meldung: |
          Als Hebelarm des Gewichts zählt der **waagrechte** Abstand seiner Wirkungslinie vom Fuß, $0{,}7\,\text{m}$, nicht der Abstand entlang der Leiter.
      - wert: "200*0.7/5.0"
        meldung: |
          Die Wandkraft wirkt waagrecht. Ihr Hebelarm um den Fuß ist die **Höhe** des Berührpunkts, nicht die Leiterlänge.
  - typ: zahl
    label: c) Haftreibungszahl
    loesung: "200*0.7/sqrt(5.0^2-1.4^2)/200"
    anzeige: '0{,}146'
    fehler:
      - wert: "1.4/sqrt(5.0^2-1.4^2)"
        meldung: |
          $d/h$ wäre richtig, wenn das Gewicht am oberen Ende hinge. Es greift aber in der Mitte an, sein Hebelarm ist nur der **halbe** Wandabstand.
hinweise:
  - 'b) Drehmomente um den Leiterfuß: Die Wandkraft hat den Hebelarm $h$, das Gewicht den Hebelarm $0{,}7\,\text{m}$, den halben Wandabstand.'
  - 'c) Waagrecht muss die Haftreibung die Wandkraft ausgleichen, senkrecht trägt der Boden das ganze Gewicht. Es gilt $\mu_H \ge F_R/F_N$.'
loesung: |
  **a)** Leiter, Wand und Boden bilden ein rechtwinkliges Dreieck mit der Leiter als Hypotenuse: $h = \sqrt{(5{,}0\,\text{m})^2 - (1{,}4\,\text{m})^2} = \sqrt{23{,}04\,\text{m}^2} = 4{,}8\,\text{m}$.
  ---
  **b) Freikörperbild:** Gewicht $200\,\text{N}$ in der Mitte nach unten, Wandkraft $F_W$ waagrecht von der Wand weg, am Fuß Normalkraft nach oben und Haftreibung zur Wand hin. Bezugspunkt im Fuß, dort fallen die beiden unbekannten Bodenkräfte heraus.
  ---
  **b) Drehmomente um den Fuß:** $F_W\cdot 4{,}8\,\text{m} = 200\,\text{N}\cdot 0{,}7\,\text{m} = 140\,\text{N}\,\text{m}$, also $F_W = 29{,}2\,\text{N}$.
  ---
  **c)** Senkrecht: $F_N = 200\,\text{N}$. Waagrecht: $F_R = F_W = 29{,}2\,\text{N}$. Also $\mu_H \ge \dfrac{29{,}2\,\text{N}}{200\,\text{N}} = 0{,}146$. Steigt eine Person hinauf, wächst die nötige Reibung, und zwar umso mehr, je höher sie steht.
```

```aufgabe
id: p5-pruefung-schwungrad
titel: Ein Schwungrad bremsen
niveau: 3
punkte: 8
lernziel: 6
kompetenz: rechnen
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Schwungrad ist ein Vollzylinder mit $50\,\text{kg}$ und $40\,\text{cm}$ Radius. Es dreht sich mit $600$ Umdrehungen pro Minute. Es wird mit einem konstanten Bremsmoment von $10\,\text{N}\,\text{m}$ bis zum Stillstand abgebremst.

  a) Berechne Trägheitsmoment und Rotationsenergie. Gib die Energie in Joule auf ganze Zahlen gerundet an. (3 P)

  b) Wie lange dauert der Bremsvorgang? Runde auf eine Nachkommastelle. (2 P)

  c) Wie viele Umdrehungen macht das Rad noch? Runde auf eine Nachkommastelle. Zeige, dass die Bremsarbeit $M\varphi$ gleich der Rotationsenergie ist. (3 P)
teile:
  - typ: zahl
    label: a) Trägheitsmoment
    loesung: "0.5*50*0.40^2"
    einheit: "kg·m²"
    anzeige: '4{,}0'
    fehler:
      - wert: "50*0.40^2"
        meldung: |
          Das gilt für einen Ring. Beim Vollzylinder ist $I = \tfrac12 m r^2$.
  - typ: zahl
    label: a) Rotationsenergie
    loesung: "0.5*4*(600*2*pi/60)^2"
    einheit: "J"
    anzeige: '7896'
    fehler:
      - wert: "0.5*4*(600/60)^2"
        meldung: |
          Du hast die Drehzahl statt der Winkelgeschwindigkeit eingesetzt. Es fehlt der Faktor $2\pi$: $\omega = 2\pi n$.
  - typ: zahl
    label: b) Bremsdauer
    loesung: "(600*2*pi/60)/(10/4)"
    einheit: "s"
    anzeige: '25{,}1'
    fehler:
      - wert: "(600*2*pi/60)/10"
        meldung: |
          Das Bremsmoment ist keine Winkelbeschleunigung. Erst $\alpha = M/I$ bilden, dann $t = \omega_0/\alpha$.
  - typ: zahl
    label: c) Umdrehungen
    loesung: "(600*2*pi/60)^2/(2*10/4)/(2*pi)"
    anzeige: '125{,}7'
    fehler:
      - wert: "(600*2*pi/60)^2/(2*10/4)"
        meldung: |
          Das ist der Drehwinkel in **Radiant**. Eine Umdrehung sind $2\pi$ Radiant.
hinweise:
  - '$\omega_0 = 2\pi\cdot 10\,\text{s}^{-1}$, dann $\alpha = M/I$.'
  - 'Gleichmäßig verzögerte Drehung: $\varphi = \dfrac{\omega_0^2}{2\alpha}$, genau wie $s = \dfrac{v^2}{2a}$ bei der geradlinigen Bewegung.'
loesung: |
  **a)** $I = \tfrac12\cdot 50\,\text{kg}\cdot(0{,}40\,\text{m})^2 = 4{,}0\,\text{kg}\,\text{m}^2$. Mit $n = 10\,\text{s}^{-1}$ ist $\omega_0 = 2\pi\cdot 10\,\text{s}^{-1} = 62{,}8\,\text{s}^{-1}$. Also $E = \tfrac12\cdot 4{,}0\,\text{kg}\,\text{m}^2\cdot(62{,}8\,\text{s}^{-1})^2 = 7896\,\text{J}$.
  ---
  **b)** $\alpha = \dfrac{M}{I} = \dfrac{10\,\text{N}\,\text{m}}{4{,}0\,\text{kg}\,\text{m}^2} = 2{,}5\,\text{s}^{-2}$. Die Bremsdauer ist $t = \dfrac{\omega_0}{\alpha} = \dfrac{62{,}8\,\text{s}^{-1}}{2{,}5\,\text{s}^{-2}} = 25{,}1\,\text{s}$.
  ---
  **c)** $\varphi = \dfrac{\omega_0^2}{2\alpha} = \dfrac{3948\,\text{s}^{-2}}{5{,}0\,\text{s}^{-2}} = 790\,\text{rad}$, das sind $\dfrac{790}{2\pi} = 125{,}7$ Umdrehungen.
  ---
  **Probe mit der Energie:** Bremsarbeit $M\varphi = 10\,\text{N}\,\text{m}\cdot 790 = 7896\,\text{J}$, genau die Rotationsenergie. Die Bremse wandelt sie vollständig in Wärme um.
```

```aufgabe
id: p5-pruefung-bootsmotor
titel: Einen Bootsmotor aus dem Wasser heben
niveau: 3
punkte: 10
lernziel: 4
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 15 Minuten.* In einer Bootswerft wird ein Außenbordmotor mit $220\,\text{kg}$ mit einem Flaschenzug $0{,}60\,\text{m}$ hoch gehoben. Die untere Flasche hat $8{,}0\,\text{kg}$ und hängt an $4$ tragenden Seilstücken.

  a) Welche Zugkraft wäre ohne Reibung nötig? Runde auf eine Nachkommastelle. (3 P)

  b) Der Flaschenzug hat den Wirkungsgrad $80\,\%$. Welche Zugkraft ist wirklich nötig? Runde auf eine Nachkommastelle. (3 P)

  c) Wie viel Seil muss gezogen werden, und wie viel Arbeit verrichtet die Person dabei? Runde die Arbeit auf ganze Joule. (4 P)
teile:
  - typ: zahl
    label: a) ideale Zugkraft
    loesung: "(220+8.0)*9.81/4"
    einheit: "N"
    anzeige: '559{,}2'
    fehler:
      - wert: "220*9.81/4"
        meldung: |
          Die untere Flasche hängt mit an den Seilstücken und wird mitgehoben. Ihr Gewicht gehört zur Last.
  - typ: zahl
    label: b) reale Zugkraft
    loesung: "(220+8.0)*9.81/4/0.80"
    einheit: "N"
    anzeige: '699{,}0'
    fehler:
      - wert: "(220+8.0)*9.81/4*0.80"
        meldung: |
          Reibung macht die nötige Kraft größer, nicht kleiner. Teile die ideale Kraft durch $\eta$.
  - typ: zahl
    label: c) Seilweg
    loesung: "4*0.60"
    einheit: "m"
    anzeige: '2{,}4'
    fehler:
      - wert: "0.60/4"
        meldung: |
          Mit $4$ tragenden Seilstücken muss man **viermal** so viel Seil ziehen, wie die Last steigt.
  - typ: zahl
    label: c) aufgewendete Arbeit
    loesung: "(220+8.0)*9.81/4/0.80*4*0.60"
    einheit: "J"
    anzeige: '1678'
    fehler:
      - wert: "(220+8.0)*9.81/4/0.80*0.60"
        meldung: |
          Die Arbeit ist Kraft mal **Seilweg**, nicht mal Hubhöhe. Die Hand legt $2{,}4\,\text{m}$ zurück.
hinweise:
  - 'Gesamtlast: Motor und untere Flasche. Ideal gilt $F_0 = G/n$, real $F = F_0/\eta$.'
  - 'Seilweg $s = n\cdot h$. Die aufgewendete Arbeit ist $F\cdot s$ mit der realen Zugkraft.'
loesung: |
  **a)** Gesamtlast $G = (220\,\text{kg} + 8{,}0\,\text{kg})\cdot 9{,}81\,\text{m/s}^2 = 2236{,}7\,\text{N}$. Ohne Reibung $F_0 = \dfrac{2236{,}7\,\text{N}}{4} = 559{,}2\,\text{N}$.
  ---
  **b)** Mit Reibung muss mehr aufgewendet werden: $F = \dfrac{559{,}2\,\text{N}}{0{,}80} = 699{,}0\,\text{N}$.
  ---
  **c) Seilweg:** $s = n\cdot h = 4\cdot 0{,}60\,\text{m} = 2{,}4\,\text{m}$.
  ---
  **c) Arbeit:** $W = F\cdot s = 699{,}0\,\text{N}\cdot 2{,}4\,\text{m} = 1678\,\text{J}$. Probe: Die Hubarbeit an Motor und Flasche ist $2236{,}7\,\text{N}\cdot 0{,}60\,\text{m} = 1342\,\text{J}$, und $1342\,\text{J}/0{,}80 = 1678\,\text{J}$.
```

```aufgabe
id: p5-pruefung-fass
titel: Ein Fass auf den Lastwagen rollen
niveau: 3
punkte: 8
lernziel: 7
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 12 Minuten.* Ein volles Fass, das wir als Vollzylinder mit $80\,\text{kg}$ und $0{,}30\,\text{m}$ Radius betrachten, wird über eine $3{,}0\,\text{m}$ lange Rampe auf eine $0{,}90\,\text{m}$ hohe Ladefläche gebracht. Reibungsverluste vernachlässigen wir.

  a) Mit welcher Kraft parallel zur Rampe muss man das Fass mindestens schieben, um es langsam hinaufzubringen? Runde auf eine Nachkommastelle. (2 P)

  b) Wie viel Arbeit wird dabei verrichtet? Runde auf eine Nachkommastelle. (2 P)

  c) Oben rutscht das Fass weg und rollt aus der Ruhe, ohne zu rutschen, die Rampe wieder hinunter. Wie schnell ist es unten, und wie groß ist dann seine Winkelgeschwindigkeit? Runde auf zwei Nachkommastellen. (4 P)
teile:
  - typ: zahl
    label: a) Kraft
    loesung: "80*9.81*0.90/3.0"
    einheit: "N"
    anzeige: '235{,}4'
    fehler:
      - wert: "80*9.81*3.0/0.90"
        meldung: |
          Der Bruch ist umgekehrt. Eine Rampe spart Kraft: $F = G\cdot h/l$ ist kleiner als $G$.
  - typ: zahl
    label: b) Arbeit
    loesung: "80*9.81*0.90"
    einheit: "J"
    anzeige: '706{,}3'
  - typ: zahl
    label: c) Geschwindigkeit unten
    loesung: "sqrt(4/3*9.81*0.90)"
    einheit: "m/s"
    anzeige: '3{,}43'
    fehler:
      - wert: "sqrt(2*9.81*0.90)"
        meldung: |
          Das Fass rollt. Ein Drittel seiner Energie steckt in der Drehung. Es ist deshalb langsamer als ein gleitender Körper.
  - typ: zahl
    label: c) Winkelgeschwindigkeit unten
    loesung: "sqrt(4/3*9.81*0.90)/0.30"
    einheit: "1/s"
    anzeige: '11{,}44'
    fehler:
      - wert: "sqrt(4/3*9.81*0.90)*0.30"
        meldung: |
          Aus $v = \omega r$ folgt $\omega = v/r$. Du musst teilen.
hinweise:
  - 'a) und b): Die Rampe ist eine schiefe Ebene, $F = G\cdot h/l$, und die Arbeit ist die Hubarbeit $G\cdot h$.'
  - 'c) Energieerhaltung beim Rollen: $m g h = \tfrac12 m v^2 + \tfrac12 I\omega^2$ mit $I = \tfrac12 m r^2$ und $\omega = v/r$.'
loesung: |
  **a) Schiefe Ebene:** $G = 80\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 784{,}8\,\text{N}$. Dann $F = G\cdot\dfrac{h}{l} = 784{,}8\,\text{N}\cdot\dfrac{0{,}90\,\text{m}}{3{,}0\,\text{m}} = 235{,}4\,\text{N}$.
  ---
  **b) Arbeit:** $W = F\cdot l = 235{,}4\,\text{N}\cdot 3{,}0\,\text{m} = 706{,}3\,\text{J}$. Das ist genau die Hubarbeit $G\cdot h = 784{,}8\,\text{N}\cdot 0{,}90\,\text{m}$, wie die goldene Regel verlangt.
  ---
  **c) Geschwindigkeit:** $m g h = \tfrac12 m v^2 + \tfrac14 m v^2 = \tfrac34 m v^2$, also $v = \sqrt{\tfrac43 g h} = \sqrt{\tfrac43\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}90\,\text{m}} = 3{,}43\,\text{m/s}$.
  ---
  **c) Winkelgeschwindigkeit:** $\omega = \dfrac{v}{r} = \dfrac{3{,}43\,\text{m/s}}{0{,}30\,\text{m}} = 11{,}44\,\text{s}^{-1}$. Ein gleitender Klotz wäre mit $\sqrt{2 g h} = 4{,}20\,\text{m/s}$ schneller.
```

```aufgabe
id: p5-pruefung-erklaeren
titel: Einfache Maschinen erklären
niveau: 3
punkte: 6
lernziel: 5
kompetenz: begruenden
angabe: |
  *Zeitrichtwert: 10 Minuten.*

  a) Formuliere die goldene Regel der Mechanik und erkläre sie am Beispiel des Flaschenzugs. (3 P)

  b) Warum hat jede reale Maschine einen Wirkungsgrad kleiner als $1$? Wohin geht die fehlende Energie? (3 P)
teile:
  - typ: text
    label: a)
    muster: |
      Mit keiner einfachen Maschine kann man Arbeit sparen. Was man an Kraft spart, muss man an Weg zusetzen: F₁·s₁ = F₂·s₂.
      Hängt die Last G am Flaschenzug an n tragenden Seilstücken, braucht man nur F = G/n. Um die Last um h zu heben, muss
      man aber n·h Seil ziehen, weil jedes der n Seilstücke um h kürzer wird. Die Arbeit F·s = (G/n)·(n h) = G·h bleibt gleich.
      Die goldene Regel folgt aus der Energieerhaltung.
  - typ: text
    label: b)
    muster: |
      In jeder Maschine gibt es Reibung in Lagern, an Seilen und Zahnrädern. Dabei wird ein Teil der zugeführten Arbeit in
      innere Energie umgewandelt, die Teile werden warm. Diese Energie kommt nicht an der Last an. Also ist W_nutz < W_zu
      und η < 1. Die Energie verschwindet nicht, sie ist nur für den Zweck der Maschine verloren.
hinweise:
  - Verbinde Kraftverhältnis und Wegverhältnis. Welches Produkt bleibt gleich?
  - Denk an Reibung und an den Energieerhaltungssatz.
loesung: |
  **a) Regel:** $F_1 s_1 = F_2 s_2$. Man spart Kraft, aber keine Arbeit.
  ---
  **a) Flaschenzug:** $F = G/n$ und $s = n h$, also $F s = G h$. Die Regel ist ein Spezialfall der Energieerhaltung.
  ---
  **b)** Reibung wandelt einen Teil der zugeführten Arbeit in innere Energie, also Wärme, um. Diese Energie fehlt an der Last. Deshalb ist $\eta = W_{\text{nutz}}/W_{\text{zu}} < 1$.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Das Drehmoment ist Kraft mal Hebelarm, und der Hebelarm ist der senkrechte Abstand der
  Wirkungslinie von der Drehachse. (2) Ein starrer Körper ruht, wenn die Summe der Kräfte und die Summe der
  Drehmomente null sind, und den Bezugspunkt darf man frei wählen. (3) Mit einer einfachen Maschine spart man Kraft,
  aber keine Arbeit: Kraft mal Weg bleibt gleich, und Reibung macht den Wirkungsgrad kleiner als eins.
```

:::zusammenfassung
- **Drehmoment:** $M = F\cdot r_\perp = F\,r\sin\alpha$, Einheit $\text{N}\,\text{m}$. Der Hebelarm $r_\perp$ ist der
  senkrechte Abstand der Wirkungslinie von der Drehachse. Drehmomente werden mit Vorzeichen addiert.
- **Gleichgewicht:** Ein starrer Körper ruht, wenn $\sum F = 0$ und $\sum M = 0$. Der Bezugspunkt ist frei wählbar,
  am besten im Angriffspunkt einer unbekannten Kraft. Das Eigengewicht greift im Schwerpunkt an.
- **Schwerpunkt:** $x_S = \dfrac{\sum m_i x_i}{\sum m_i}$, ein gewichteter Mittelwert. Ein Körper steht, solange das
  Lot durch den Schwerpunkt in der Standfläche liegt. Kippwinkel: $\tan\alpha = (b/2)/h_S$.
- **Hebel, Wellrad, Zahnrad:** $F\cdot a = G\cdot b$ und $F\cdot R = G\cdot r$. Zahnräder: $n_2/n_1 = z_1/z_2$ und
  $M_2/M_1 = z_2/z_1$.
- **Rollen und Flaschenzug:** feste Rolle $F = G$, lose Rolle $F = G/2$, Flaschenzug $F = G/n$ und $s = n h$. Gezählt
  werden die Seilstücke an der losen Flasche, deren Gewicht zur Last gehört.
- **Schiefe Ebene, Keil, Schraube:** $F = G\,h/l$, $F_s = F\,l/d$, $F = G\,h/(2\pi r)$.
- **Goldene Regel und Wirkungsgrad:** $F_1 s_1 = F_2 s_2$ ohne Reibung, eine Folge der Energieerhaltung.
  $\eta = W_{\text{nutz}}/W_{\text{zu}} < 1$, hintereinander geschaltet multiplizieren sich die Wirkungsgrade.
- **Drehbewegung:** $\omega = 2\pi n$, $v = \omega r$, $I = \sum m r^2$, $M = I\alpha$, $E_{\text{rot}} = \tfrac12 I\omega^2$.
  Ohne äußeres Drehmoment bleibt der Drehimpuls $L = I\omega$ erhalten, die Rotationsenergie nicht unbedingt.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **Abstand statt Hebelarm eingesetzt.** Bei einer schrägen Kraft zählt der senkrechte Abstand der Wirkungslinie.
   Training: „Schräg angreifende Kraft“ und „Fehler in einer Drehmoment-Rechnung finden“.
2. **Den Winkel zur falschen Linie gemessen** und so Sinus und Kosinus vertauscht. Training: „Den Hebelarm
   bestimmen“ und „Ein Karussell auf Touren bringen“.
3. **Drehmomente ohne Vorzeichen addiert.** Training: „Drei Kräfte an einer Stange“.
4. **Eigengewicht vergessen.** Training: „Auflagerkräfte unter einem Maler“ und „Muskelkraft im Unterarm“.
5. **Bei der Leiter den Abstand entlang der Leiter als Hebelarm genommen.** Training: „Eine Person auf der Leiter“
   und „Eine Leiter an der Wand“.
6. **Orte ohne Massen gemittelt.** Training: „Schwerpunkt einer T-Platte“ und „Schwerpunkt zweier Massen“.
7. **Beim Kippen die ganze statt der halben Breite genommen.** Training: „Wann kippt der Schrank?“.
8. **Den Kraftarm vom Stangenende statt vom Drehpunkt gemessen.** Training: „Brechstange“ und „Schubkarre“.
9. **Die Übersetzung verkehrt herum angesetzt.** Training: „Ein Getriebe für eine Seilwinde“ und „Fahrradschaltung“.
10. **Tragende Seilstücke falsch gezählt.** Training: „Tragende Seilstücke aus einer Skizze zählen“.
11. **Das Gewicht der losen Flasche vergessen.** Training: „Lose Rolle mit Eigengewicht“ und „Einen Bootsmotor aus dem
    Wasser heben“.
12. **Auf der schiefen Ebene Sinus und Kosinus vertauscht oder die Steigung als Sinus genommen.** Training: „Ein Fass
    auf der Rampe“ und „Ein Kleintransporter auf einer steilen Bergstraße“.
13. **Mit dem Wirkungsgrad multipliziert statt geteilt.** Training: „Fehler bei einer Seilwinde finden“ und „Flaschenzug
    mit Reibung“.
14. **Wirkungsgrade gemittelt statt multipliziert.** Training: „Eine Kette von Maschinen“.
15. **Umdrehungen pro Minute direkt als Winkelgeschwindigkeit eingesetzt.** Training: „Winkelgeschwindigkeit aus der
    Drehzahl“ und „Energie im Schwungrad“.
16. **Im Trägheitsmoment den Abstand nicht quadriert.** Training: „Doppelter Radius“.
17. **Beim Rollen die Rotationsenergie vergessen.** Training: „Rollender Zylinder gegen gleitenden Klotz“.
18. **Bei der Pirouette die Energie statt des Drehimpulses gleichgesetzt.** Training: „Pirouette“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“,
**3** „sicher, auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf
Niveau 3.

1. Ein Drehmoment mit dem senkrechten Hebelarm berechnen, auch bei schräger Kraft und mit Vorzeichen.
2. Beide Gleichgewichtsbedingungen aufstellen und Stütz-, Wand- und Muskelkräfte berechnen.
3. Einen Schwerpunkt berechnen, Gleichgewichtsarten unterscheiden und einen Kippwinkel bestimmen.
4. Hebel, Wellrad und Zahnradgetriebe berechnen.
5. Rollen, Flaschenzug, schiefe Ebene, Keil und Schraube berechnen und Seilstücke richtig zählen.
6. Die goldene Regel begründen und mit Wirkungsgraden rechnen.
7. Eine Drehbewegung mit $\omega$, $n$, $\alpha$ und $I$ beschreiben und $M = I\alpha$ anwenden.
8. Rotationsenergie, Rollen auf der Rampe und Drehimpulserhaltung berechnen und erklären.

## Mündliche Prüfung

```karten
- id: p5-k-drehmoment
  frage: Was ist ein Drehmoment, und wovon hängt es ab?
  antwort: |
    Das Drehmoment beschreibt die Drehwirkung einer Kraft: $M = F\cdot r_\perp = F\,r\sin\alpha$. Es hängt vom Betrag der
    Kraft und vom Hebelarm ab. Der Hebelarm ist der senkrechte Abstand der Wirkungslinie der Kraft von der Drehachse.
    Die Einheit ist $\text{N}\,\text{m}$. Beispiel: $80\,\text{N}$ senkrecht an einem $25\,\text{cm}$ langen Schlüssel
    ergeben $20\,\text{N}\,\text{m}$.
  kernpunkte: ["Drehwirkung einer Kraft", "M = F · r⊥ = F r sin α", "Hebelarm = senkrechter Abstand der Wirkungslinie", "Einheit N·m, Beispiel"]
- id: p5-k-hebelarm-senkrecht
  frage: Warum zählt beim Drehmoment nur der senkrechte Abstand der Wirkungslinie und nicht der Abstand zum Angriffspunkt?
  antwort: |
    Man kann die Kraft in einen Anteil entlang der Verbindungslinie zur Achse und einen Anteil senkrecht dazu zerlegen.
    Der Anteil entlang der Linie drückt oder zieht nur an der Achse und dreht nichts. Drehen kann nur der senkrechte
    Anteil $F\sin\alpha$. Das ergibt $M = F r\sin\alpha = F\cdot r_\perp$. Gegenbeispiel: Zieht man genau in Richtung
    der Achse, ist der Abstand zum Angriffspunkt groß, das Drehmoment aber null.
  kernpunkte: ["Zerlegung in Anteil entlang und senkrecht", "nur der senkrechte Anteil dreht", "Gegenbeispiel: Kraft zur Achse hin"]
- id: p5-k-gleichgewicht
  frage: Wann ist ein starrer Körper im Gleichgewicht? Warum genügt das Kräftegleichgewicht nicht?
  antwort: |
    Wenn die Summe aller äußeren Kräfte null ist und die Summe aller Drehmomente um einen beliebigen Punkt null ist.
    Das Kräftegleichgewicht allein genügt nicht: Ein Kräftepaar, also zwei gleich große, entgegengesetzte Kräfte mit
    verschiedenen Wirkungslinien, hat die Summe null, dreht den Körper aber. Beispiel: ein Lineal, an dessen Enden man
    in entgegengesetzte Richtungen drückt.
  kernpunkte: ["Summe der Kräfte null", "Summe der Drehmomente null", "Gegenbeispiel Kräftepaar"]
- id: p5-k-bezugspunkt
  frage: Warum darf man bei Gleichgewichtsaufgaben den Bezugspunkt für die Drehmomente frei wählen, und wie nutzt man das?
  antwort: |
    Verschiebt man den Bezugspunkt um eine Strecke $d$ quer zu den Kräften (etwa bei senkrechten Kräften waagrecht), ändert
    sich jedes Drehmoment um $F_i\cdot d$. Alle Änderungen
    zusammen ergeben $d\cdot\sum F_i$, und das ist im Gleichgewicht null. Ist die Summe der Drehmomente um einen Punkt null,
    dann um jeden. Man legt den Bezugspunkt in den Angriffspunkt einer unbekannten Kraft. Sie hat dort keinen Hebelarm
    und fällt aus der Gleichung heraus.
  kernpunkte: ["Änderung ist d · Summe der Kräfte = 0", "gilt nur im Kräftegleichgewicht", "Trick: Bezugspunkt in eine unbekannte Kraft legen"]
- id: p5-k-leiter
  frage: Erkläre an der Leiter an einer glatten Wand, welche Kräfte wirken und wovon die nötige Haftreibung abhängt.
  antwort: |
    Es wirken das Gewicht im Schwerpunkt, die waagrechte Kraft der glatten Wand oben sowie am Fuß die Normalkraft nach
    oben und die Haftreibung zur Wand hin. Mit dem Bezugspunkt im Fuß gilt: Wandkraft mal Höhe ist gleich Gewicht mal
    waagrechtem Abstand. Die Haftreibung muss die Wandkraft ausgleichen. Steht die Leiter flacher oder steigt jemand
    höher, wächst die Wandkraft und damit die nötige Haftreibung.
  kernpunkte: ["vier Kräfte im Freikörperbild", "Drehmomente um den Fuß", "Haftreibung gleich Wandkraft", "flacher oder höher steigen braucht mehr Reibung"]
- id: p5-k-schwerpunkt
  frage: Was ist der Schwerpunkt, wie berechnet man ihn, und wie findet man ihn experimentell?
  antwort: |
    Der Schwerpunkt ist der Punkt, in dem man sich die ganze Gewichtskraft angreifend denken darf. Für Massen auf einer
    Linie ist $x_S = \sum m_i x_i/\sum m_i$, ein mit den Massen gewichteter Mittelwert. Experimentell hängt man einen
    Körper nacheinander an zwei Punkten auf und zeichnet die Lotlinien ein. Ihr Schnittpunkt ist der Schwerpunkt. Er kann
    auch außerhalb des Körpers liegen, etwa bei einem Ring.
  kernpunkte: ["Angriffspunkt der Gewichtskraft", "gewichteter Mittelwert", "zwei Lotlinien", "kann außerhalb liegen"]
- id: p5-k-gleichgewichtsarten
  frage: Welche Gleichgewichtsarten gibt es? Nenne zu jeder ein Beispiel.
  antwort: |
    Stabil: Bei kleiner Auslenkung wird der Schwerpunkt angehoben, der Körper kehrt zurück, etwa ein hängendes Bild. Labil:
    Der Schwerpunkt sinkt, der Körper kippt weg, etwa ein Bleistift auf der Spitze. Indifferent: Der Schwerpunkt bleibt auf
    gleicher Höhe, etwa eine Kugel auf ebenem Boden.
  kernpunkte: ["stabil: Schwerpunkt steigt", "labil: Schwerpunkt sinkt", "indifferent: gleiche Höhe", "je ein Beispiel"]
- id: p5-k-standfestigkeit
  frage: Wovon hängt die Standfestigkeit eines Körpers ab?
  antwort: |
    Ein Körper steht, solange das Lot durch seinen Schwerpunkt innerhalb der Standfläche auf den Boden trifft. Er kippt bei
    $\tan\alpha = (b/2)/h_S$. Standfest ist also, was eine breite Standfläche und einen tiefen Schwerpunkt hat. Die Masse
    spielt für den Kippwinkel keine Rolle. Beispiele sind Rennautos und Kräne mit Gegengewicht unten.
  kernpunkte: ["Lot durch den Schwerpunkt in der Standfläche", "tan α = (b/2)/h_S", "breite Basis, tiefer Schwerpunkt"]
- id: p5-k-hebelgesetz
  frage: Formuliere das Hebelgesetz und nenne Beispiele für ein- und zweiseitige Hebel.
  antwort: |
    Kraft mal Kraftarm ist gleich Last mal Lastarm, $F\cdot a = G\cdot b$. Beim zweiseitigen Hebel liegt der Drehpunkt
    zwischen Kraft und Last, etwa bei Wippe, Schere, Brechstange und Zange. Beim einseitigen Hebel liegt der Drehpunkt am
    Ende, etwa bei Schubkarre, Nussknacker und Unterarm. Wer Kraft spart, muss einen längeren Weg zurücklegen.
  kernpunkte: ["F · a = G · b", "zweiseitig: Drehpunkt zwischen Kraft und Last", "einseitig: Drehpunkt am Ende", "Beispiele"]
- id: p5-k-zahnrad
  frage: Was passiert mit Drehzahl, Drehmoment und Leistung in einem Zahnradgetriebe? Verbinde mit dem Kapitel über Energie.
  antwort: |
    Treibt ein kleines Rad ein großes an, sinkt die Drehzahl im Verhältnis der Zähnezahlen, $n_2/n_1 = z_1/z_2$. Das
    Drehmoment steigt im umgekehrten Verhältnis, $M_2/M_1 = z_2/z_1$, weil die Zahnkraft an beiden Rädern gleich ist. Ohne
    Reibung bleibt die Leistung $P = M\omega$ gleich. Das ist die Energieerhaltung aus dem Kapitel Arbeit, Energie, Impuls.
    Ein Autogetriebe im ersten Gang liefert so ein großes Drehmoment bei kleiner Drehzahl.
  kernpunkte: ["Drehzahl umgekehrt zu den Zähnezahlen", "Drehmoment proportional zu den Zähnezahlen", "Leistung M·ω bleibt (Energieerhaltung)"]
- id: p5-k-flaschenzug
  frage: Wie funktionieren feste Rolle, lose Rolle und Flaschenzug?
  antwort: |
    Die feste Rolle ändert nur die Richtung der Kraft, $F = G$. Die lose Rolle hängt an zwei Seilstücken, halbiert die
    Kraft und verdoppelt den Seilweg. Beim Flaschenzug mit $n$ tragenden Seilstücken an der losen Flasche gilt $F = G/n$ und
    $s = n h$. Das Gewicht der losen Flasche gehört zur Last, und das freie Seilende zählt nur, wenn es von der losen
    Flasche kommt.
  kernpunkte: ["feste Rolle: nur Richtung", "lose Rolle: halbe Kraft, doppelter Weg", "F = G/n, s = n h", "richtig zählen"]
- id: p5-k-schiefe-ebene
  frage: Erkläre schiefe Ebene, Keil und Schraube als Maschinen. Wie hängt das mit der schiefen Ebene aus der Dynamik zusammen?
  antwort: |
    Auf der schiefen Ebene muss man reibungsfrei nur die Hangabtriebskraft $G\sin\alpha = G\,h/l$ überwinden, die man in
    der Dynamik aus der Zerlegung der Gewichtskraft bekommt. Dafür ist der Weg $l$ statt $h$. Der Keil ist eine bewegte
    schiefe Ebene mit $F_s = F\,l/d$. Die Schraube ist eine um einen Zylinder gewickelte schiefe Ebene, reibungsfrei gilt
    $F\cdot 2\pi r = G\cdot h$.
  kernpunkte: ["F = G sin α = G h/l", "Zusammenhang mit der Zerlegung aus Kapitel 3", "Keil F_s = F l/d", "Schraube F · 2πr = G · h"]
- id: p5-k-goldene-regel
  frage: Was sagt die goldene Regel der Mechanik, und warum kann eine Maschine keine Arbeit sparen?
  antwort: |
    Was man an Kraft spart, muss man an Weg zusetzen: $F_1 s_1 = F_2 s_2$. Die Arbeit an der Maschine ist zugeführte
    Energie, die Arbeit an der Last abgegebene Energie. Nach dem Energieerhaltungssatz kann ohne Reibung nicht mehr
    herauskommen, als hineingesteckt wird. Sonst könnte man ein Perpetuum mobile bauen. Beispiel: Der Flaschenzug mit vier
    Seilstücken braucht ein Viertel der Kraft, aber den vierfachen Seilweg.
  kernpunkte: ["F₁ s₁ = F₂ s₂", "Folge der Energieerhaltung", "kein Perpetuum mobile", "Beispiel Flaschenzug"]
- id: p5-k-wirkungsgrad
  frage: Was ist der Wirkungsgrad, und warum ist er immer kleiner als eins?
  antwort: |
    Der Wirkungsgrad ist das Verhältnis von Nutzarbeit zu zugeführter Arbeit, $\eta = W_{\text{nutz}}/W_{\text{zu}}$, oder
    der Leistungen. Durch Reibung wird ein Teil der Energie in innere Energie umgewandelt und kommt nicht an der Last an.
    Deshalb ist $\eta < 1$. Bei hintereinandergeschalteten Maschinen multiplizieren sich die Wirkungsgrade, zum Beispiel
    $0{,}9\cdot 0{,}8 = 0{,}72$.
  kernpunkte: ["η = W_nutz/W_zu", "Reibung erzeugt innere Energie", "η < 1", "Ketten: multiplizieren"]
- id: p5-k-traegheitsmoment
  frage: Was ist das Trägheitsmoment, und welche Entsprechungen gibt es zwischen geradliniger Bewegung und Drehung?
  antwort: |
    Das Trägheitsmoment $I = \sum m_i r_i^2$ misst, wie stark sich ein Körper einer Änderung seiner Drehung widersetzt. Es
    hängt von der Masse und vor allem davon ab, wie weit außen sie sitzt, denn der Abstand zählt im Quadrat. Masse
    entspricht Trägheitsmoment, Kraft dem Drehmoment, Geschwindigkeit der Winkelgeschwindigkeit. Aus $F = m a$ wird
    $M = I\alpha$, aus $\tfrac12 m v^2$ wird $\tfrac12 I\omega^2$ und aus $p = m v$ wird $L = I\omega$.
  kernpunkte: ["I = Σ m r²", "Abstand zählt quadratisch", "Masse ↔ Trägheitsmoment, Kraft ↔ Drehmoment", "M = I α"]
- id: p5-k-rollen
  frage: Zwei Körper fallen im Vakuum gleich schnell. Warum kommen dann eine Kugel und ein Rohr auf derselben Rampe nicht gleichzeitig unten an?
  antwort: |
    Beim Rollen teilt sich die Lageenergie auf: $m g h = \tfrac12 m v^2 + \tfrac12 I\omega^2$. Beim Rohr sitzt die ganze
    Masse außen, es steckt die Hälfte der Energie in die Drehung. Bei der Kugel ist es nur $2/7$. Für die Fortbewegung
    bleibt bei der Kugel mehr übrig, sie ist schneller. Masse und Radius kürzen sich, es zählt nur die Massenverteilung.
    Beim freien Fall dreht sich nichts, deshalb sind dort alle gleich schnell.
  kernpunkte: ["Energie teilt sich auf Verschiebung und Drehung", "Rohr 1/2, Kugel 2/7 in der Drehung", "Masse und Radius kürzen sich", "Unterschied zum freien Fall"]
- id: p5-k-pirouette
  frage: Warum dreht sich eine Eiskunstläuferin schneller, wenn sie die Arme anzieht? Bleibt dabei die Energie erhalten?
  antwort: |
    Ohne äußeres Drehmoment bleibt der Drehimpuls $L = I\omega$ erhalten. Zieht sie die Arme an, sinkt das
    Trägheitsmoment, also muss die Winkelgeschwindigkeit steigen. Die Rotationsenergie $\tfrac12 I\omega^2 = L^2/(2I)$
    wächst dabei, sie bleibt nicht erhalten. Die zusätzliche Energie liefern ihre Muskeln, die die Arme nach innen
    ziehen. Mit $I_1 = 3{,}5$ und $I_2 = 1{,}0\,\text{kg}\,\text{m}^2$ steigt die Drehzahl auf das $3{,}5$-Fache.
  kernpunkte: ["Drehimpulserhaltung ohne äußeres Drehmoment", "I sinkt, ω steigt", "Energie wächst durch Muskelarbeit"]
```
