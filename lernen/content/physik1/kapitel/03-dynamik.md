---
nummer: 3
titel: "Dynamik: Newtonsche Axiome, Kräfte, Inertialsysteme"
kurz: Warum sich Dinge bewegen, wie sie sich bewegen. Die drei Newtonschen Axiome, die wichtigsten Kraftarten, das Freikörperbild, schiefe Ebene, gekoppelte Körper und Scheinkräfte.
teil: grundlagen
stunden: 12
pruefungsgewicht: 3
voraussetzungen: [groessen-einheiten-messen, kinematik]
lernziele:
  - die drei Newtonschen Axiome in eigenen Worten formulieren und die Fehlvorstellung „Bewegung braucht eine Kraft“ mit Beispielen widerlegen
  - mit dem Grundgesetz F = m·a aus der resultierenden Kraft die Beschleunigung berechnen und umgekehrt, auch aus Bewegungsdiagrammen und in der Impulsform
  - Wechselwirkungspaare (actio und reactio) von Kräftegleichgewichten unterscheiden und die Unterscheidung begründen
  - Gewichtskraft, Normalkraft, Federkraft, Seilkraft, Haft- und Gleitreibung sowie Luftwiderstand berechnen
  - ein vollständiges Freikörperbild zeichnen, Kräfte in Komponenten zerlegen und daraus die Bewegungsgleichung oder das Kräftegleichgewicht aufstellen
  - Bewegungen auf der schiefen Ebene mit und ohne Reibung berechnen, auch beim Hinaufstoßen und Hinaufziehen
  - gekoppelte Körper (Atwoodsche Fallmaschine, Wagen mit Gewicht, Züge) mit und ohne Reibung berechnen
  - Inertialsysteme von beschleunigten Bezugssystemen unterscheiden, Scheinkräfte und die Gleichheit von träger und schwerer Masse erklären
---

Im [Kapitel Kinematik](/lernen/physik1/kinematik) hast du gelernt, Bewegungen zu **beschreiben**: Ort,
Geschwindigkeit, Beschleunigung. Dieses Kapitel fragt nach der **Ursache** einer Bewegung. Warum rollt
ein Ball auf dem Rasen aus? Warum fällt ein Apfel nach unten? Wie kann eine Rakete im leeren Weltraum
schneller werden, obwohl dort nichts ist, wogegen sie sich abstoßen kann?

Die Antworten hat Isaac Newton 1687 in drei Sätzen zusammengefasst, den **Newtonschen Axiomen**. Ein
**Axiom** ist ein Grundsatz, den man nicht aus anderen Sätzen herleitet, sondern an den Anfang stellt und
durch Experimente prüft. Die drei Axiome sind das Herzstück der klassischen Mechanik. Die
Prüfungsordnung nennt sie ausdrücklich: „Grundgrößen und Grundgesetze der Mechanik“ und „Inertialsystem“.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung ist die Dynamik der wichtigste Teil der
Mechanik. Typische Aufgaben sind:

- Eine Kiste rutscht eine schiefe Ebene mit Reibung hinab.
- Ein Auto bremst. Gesucht ist der Bremsweg aus dem Reibungskoeffizienten.
- Zwei Körper sind über ein Seil und eine Rolle verbunden.
- Eine Person steht in einem anfahrenden Lift auf einer Personenwaage.

Alle diese Aufgaben löst du mit demselben Werkzeug: Du zeichnest ein **Freikörperbild** und wendest
das Grundgesetz $F = m\cdot a$ an. In der mündlichen Prüfung werden die Axiome selbst gefragt, immer mit
Beispielen. Ein Klassiker lautet: „Erklären Sie das dritte Newtonsche Axiom. Warum heben sich actio und
reactio nicht auf?“ An dieser Frage scheitern viele. Nach diesem Kapitel wirst du sie sicher beantworten.

**Die eigentliche Hürde ist nicht die Mathematik, sondern das Bauchgefühl.** Im Alltag erleben wir:
Damit sich etwas bewegt, muss man es schieben. Hört man auf, bleibt es stehen. Newton sagt etwas
anderes: Für Bewegung braucht man keine Kraft. Eine Kraft braucht man nur, um eine Bewegung zu
**ändern**. Ein Auto ohne Gas wird langsamer, weil Reibung und Luftwiderstand bremsen. Die Bewegung
hört nicht „von selbst“ auf. Diesen Gedanken wirst du in diesem Kapitel oft wiederfinden. Er ist für
fast alle ungewohnt, also lass dir Zeit damit.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Beschleunigung** als Änderung der Geschwindigkeit pro Zeit, $a = \Delta v/\Delta t$, und die Formeln
  der gleichmäßig beschleunigten Bewegung aus dem [Kapitel Kinematik](/lernen/physik1/kinematik).
- **Einheiten umrechnen**, vor allem km/h in m/s (durch $3{,}6$ teilen), und **Vektoren** als Pfeile mit
  Betrag und Richtung aus dem [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen).
- **Sinus und Kosinus** im rechtwinkligen Dreieck aus dem Mathematikkurs, Kapitel
  [Trigonometrie](/lernen/mathe3/trigonometrie), Abschnitt „Das rechtwinklige Dreieck“.
- **Vektoren addieren und zerlegen** aus dem Mathematikkurs, Kapitel [Vektoren](/lernen/mathe3/vektoren),
  Abschnitt „Rechnen mit Vektoren“.
- **Formeln umstellen** und **Gleichungssysteme mit zwei Unbekannten** lösen, siehe
  [Gleichungen](/lernen/mathe3/gleichungen) und [Lineare Gleichungssysteme](/lernen/mathe3/lgs-matrizen).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen das Vorwissen. Wenn du bei einer Frage unsicher bist, folge dem Link
in der Lösung und wiederhole den Abschnitt kurz. Das kostet zehn Minuten und spart dir später viel Ärger.

```aufgabe
id: p3-e-beschleunigung
art: check
titel: Beschleunigung aus der Geschwindigkeitsänderung
niveau: 1
angabe: |
  Ein Radfahrer wird in $4{,}0\,\text{s}$ gleichmäßig von $2{,}0\,\text{m/s}$ auf $8{,}0\,\text{m/s}$ schneller. Wie groß ist seine Beschleunigung in $\text{m/s}^2$?
teile:
  - typ: zahl
    loesung: "(8-2)/4"
    einheit: "m/s²"
    anzeige: '1{,}5'
    fehler:
      - wert: "8/4"
        meldung: Du hast die Endgeschwindigkeit durch die Zeit geteilt. Die Beschleunigung ist aber die **Änderung** der Geschwindigkeit pro Zeit. Der Radfahrer war am Anfang schon $2\,\text{m/s}$ schnell.
      - wert: "6*4"
        meldung: Du hast die Geschwindigkeitsänderung mit der Zeit multipliziert. Beschleunigung heißt „Änderung **pro** Sekunde“, also musst du teilen.
hinweise:
  - Beschleunigung ist Geschwindigkeitsänderung geteilt durch die dafür benötigte Zeit.
loesung: |
  Die Geschwindigkeit ändert sich um $\Delta v = 8{,}0\,\text{m/s} - 2{,}0\,\text{m/s} = 6{,}0\,\text{m/s}$.
  ---
  $a = \dfrac{\Delta v}{\Delta t} = \dfrac{6{,}0\,\text{m/s}}{4{,}0\,\text{s}} = 1{,}5\,\text{m/s}^2$. Wiederholen kannst du das im [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Beschleunigung“.
```

```aufgabe
id: p3-e-umrechnen
art: check
titel: km/h in m/s
niveau: 1
angabe: |
  Rechne $54\,\text{km/h}$ in $\text{m/s}$ um.
teile:
  - typ: zahl
    loesung: "54/3.6"
    einheit: "m/s"
    anzeige: '15'
    fehler:
      - wert: "54*3.6"
        meldung: Du hast mit $3{,}6$ multipliziert. Eine Geschwindigkeit in m/s ist immer die **kleinere** Zahl, denn in einer Sekunde kommt man weniger weit als in einer Stunde. Also teilen.
hinweise:
  - '$1\,\text{m/s} = 3{,}6\,\text{km/h}$, weil eine Stunde $3600\,\text{s}$ hat und ein Kilometer $1000\,\text{m}$.'
loesung: |
  $1\,\text{km/h} = \dfrac{1000\,\text{m}}{3600\,\text{s}} = \dfrac{1}{3{,}6}\,\text{m/s}$. Deshalb teilt man durch $3{,}6$.
  ---
  $54\,\text{km/h} = \dfrac{54}{3{,}6}\,\text{m/s} = 15\,\text{m/s}$. Wiederholen: [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen), Abschnitt „Vorsilben, Zehnerpotenzen und Umrechnen“.
```

```aufgabe
id: p3-e-sinus
art: check
titel: Sinus im rechtwinkligen Dreieck
niveau: 1
angabe: |
  In einem rechtwinkligen Dreieck ist die Hypotenuse (die längste Seite) $10\,\text{cm}$ lang. Ein Winkel beträgt $30^\circ$. Wie lang ist die Seite, die diesem Winkel **gegenüber** liegt (die Gegenkathete)?
teile:
  - typ: zahl
    loesung: "10*sin(inRad(30))"
    einheit: "cm"
    anzeige: '5'
    fehler:
      - wert: "10*cos(inRad(30))"
        meldung: Du hast den Kosinus genommen. Der Kosinus gehört zur **Ankathete**, also zur Seite, die am Winkel anliegt. Für die gegenüberliegende Seite brauchst du den Sinus.
hinweise:
  - '$\sin\alpha = \dfrac{\text{Gegenkathete}}{\text{Hypotenuse}}$.'
loesung: |
  Der Sinus eines Winkels ist das Verhältnis von Gegenkathete zu Hypotenuse. Also ist die Gegenkathete gleich Hypotenuse mal Sinus.
  ---
  $10\,\text{cm}\cdot\sin 30^\circ = 10\,\text{cm}\cdot 0{,}5 = 5{,}0\,\text{cm}$. Wiederholen: Mathematik, [Trigonometrie](/lernen/mathe3/trigonometrie), Abschnitt „Das rechtwinklige Dreieck“.
```

```aufgabe
id: p3-e-pythagoras
art: check
titel: Zwei Verschiebungen im rechten Winkel
niveau: 1
angabe: |
  Du gehst $6{,}0\,\text{m}$ nach Osten und dann $8{,}0\,\text{m}$ nach Norden. Wie weit bist du am Ende vom Startpunkt entfernt (Luftlinie)?
teile:
  - typ: zahl
    loesung: "sqrt(6^2+8^2)"
    einheit: "m"
    anzeige: '10'
    fehler:
      - wert: "14"
        meldung: Du hast die Längen einfach addiert. Das gilt nur, wenn beide Verschiebungen in **dieselbe** Richtung zeigen. Hier stehen sie senkrecht aufeinander, also brauchst du den Satz des Pythagoras.
hinweise:
  - Zeichne die beiden Pfeile hintereinander. Sie bilden mit der Luftlinie ein rechtwinkliges Dreieck.
loesung: |
  Die beiden Verschiebungen sind Vektoren, die senkrecht aufeinander stehen. Die Luftlinie ist die Hypotenuse des rechtwinkligen Dreiecks.
  ---
  $d = \sqrt{(6{,}0\,\text{m})^2 + (8{,}0\,\text{m})^2} = \sqrt{100\,\text{m}^2} = 10\,\text{m}$. Wiederholen: [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen), Abschnitt „Skalare und Vektoren“.
```

```aufgabe
id: p3-e-zeitfrei
art: check
titel: Geschwindigkeit nach einer Strecke
niveau: 1
angabe: |
  Ein Wagen startet aus der Ruhe und beschleunigt gleichmäßig mit $2{,}0\,\text{m/s}^2$. Wie schnell ist er nach $25\,\text{m}$?
teile:
  - typ: zahl
    loesung: "sqrt(2*2*25)"
    einheit: "m/s"
    anzeige: '10'
    fehler:
      - wert: "2*25"
        meldung: Du hast $v = a\cdot s$ gerechnet. Diese Formel gibt es nicht. Die richtige Beziehung zwischen Geschwindigkeit, Beschleunigung und Weg (ohne Zeit) lautet $v^2 = 2as$.
      - wert: "sqrt(2*25)"
        meldung: Fast. Du hast den Faktor $2$ in $v^2 = 2as$ vergessen.
hinweise:
  - 'Die „zeitfreie“ Gleichung der gleichmäßig beschleunigten Bewegung aus der Ruhe lautet $v^2 = 2as$.'
loesung: |
  Die Zeit ist nicht gegeben, also verwenden wir die zeitfreie Gleichung $v^2 = 2as$ (Start aus der Ruhe).
  ---
  $v = \sqrt{2\cdot 2{,}0\,\text{m/s}^2\cdot 25\,\text{m}} = \sqrt{100\,\text{m}^2/\text{s}^2} = 10\,\text{m/s}$. Wiederholen: [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Gleichmäßig beschleunigte Bewegung“.
```

```aufgabe
id: p3-e-umstellen
art: check
titel: Eine Formel umstellen
niveau: 1
angabe: |
  Für den Bremsweg gilt $s = \dfrac{v^2}{2a}$. Ein Auto mit $v = 12\,\text{m/s}$ kommt nach $s = 36\,\text{m}$ zum Stehen. Wie groß ist der Betrag der Bremsverzögerung $a$?
teile:
  - typ: zahl
    loesung: "12^2/(2*36)"
    einheit: "m/s²"
    anzeige: '2'
    fehler:
      - wert: "12^2/36"
        meldung: Du hast den Faktor $2$ im Nenner verloren. Stelle schrittweise um, dann bleibt er erhalten.
      - wert: "2*36/12^2"
        meldung: Du hast den Kehrwert berechnet. Prüfe die Einheit, dann siehst du es. $\text{m}/(\text{m}^2/\text{s}^2)$ ist keine Beschleunigung.
hinweise:
  - Multipliziere beide Seiten mit $2a$ und teile dann durch $2s$.
loesung: |
  Wir multiplizieren beide Seiten mit $2a$, damit $a$ nicht mehr im Nenner steht: $2as = v^2$. Dann teilen wir durch $2s$: $a = \dfrac{v^2}{2s}$.
  ---
  $a = \dfrac{(12\,\text{m/s})^2}{2\cdot 36\,\text{m}} = \dfrac{144\,\text{m}^2/\text{s}^2}{72\,\text{m}} = 2{,}0\,\text{m/s}^2$. Wiederholen: Mathematik, [Gleichungen](/lernen/mathe3/gleichungen), Abschnitt „Formeln umstellen“.
```

```aufgabe
id: p3-e-skalar-vektor
art: check
titel: Skalar oder Vektor?
niveau: 1
angabe: |
  Welche dieser Größen sind **Vektoren**, haben also außer einem Betrag auch eine Richtung? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Masse"
      - "Geschwindigkeit"
      - "Temperatur"
      - "Beschleunigung"
      - "Zeit"
    richtig: [1, 3]
    fehler:
      - wert: [0, 1, 3]
        meldung: Die Masse hat keine Richtung. Ein Körper hat $5\,\text{kg}$, aber nicht „$5\,\text{kg}$ nach links“. Die Masse ist ein Skalar.
      - wert: [1]
        meldung: Auch die Beschleunigung hat eine Richtung. Beim Bremsen zeigt sie zum Beispiel entgegen der Fahrtrichtung.
hinweise:
  - Frage dich bei jeder Größe, ob der Satz „… in welche Richtung?“ einen Sinn ergibt.
loesung: |
  Geschwindigkeit und Beschleunigung haben eine Richtung, sie sind Vektoren.
  ---
  Masse, Temperatur und Zeit haben nur einen Zahlenwert mit Einheit, sie sind Skalare. Wiederholen: [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen), Abschnitt „Skalare und Vektoren“.
```

## Kraft und Trägheit: das erste Newtonsche Axiom

```aufgabe
id: p3-1-check
art: check
titel: "Vorwissen: konstante Geschwindigkeit"
niveau: 1
angabe: |
  Ein Körper bewegt sich mit konstant $5\,\text{m/s}$ geradeaus. Wie groß ist seine Beschleunigung in $\text{m/s}^2$?
teile:
  - typ: zahl
    loesung: "0"
    einheit: "m/s²"
    fehler:
      - wert: "5"
        meldung: Das ist die Geschwindigkeit, nicht die Beschleunigung. Die Beschleunigung sagt, wie schnell sich die Geschwindigkeit **ändert**. Hier ändert sie sich gar nicht.
hinweise:
  - Beschleunigung ist die Änderung der Geschwindigkeit pro Zeit.
loesung: |
  Die Geschwindigkeit bleibt gleich, also ist $\Delta v = 0$.
  ---
  Damit ist $a = \Delta v/\Delta t = 0$. Die Beschleunigung ist null, obwohl sich der Körper bewegt. Siehe [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Beschleunigung“.
```

Bevor wir über Newton sprechen, klären wir zwei Grundbegriffe: Was ist eine Kraft, und was ist Masse?

### Was ist eine Kraft?

Kräfte kann man nicht sehen. Man erkennt sie an ihren **Wirkungen**. Eine Kraft kann einen Körper
**beschleunigen**, also seine Geschwindigkeit ändern. Das betrifft den Betrag (schneller oder langsamer)
und die Richtung (eine Kurve). Eine Kraft kann einen Körper außerdem **verformen**. Ein gespannter Bogen,
eine gedehnte Feder und ein Tennisball, der beim Aufprall platt gedrückt wird, zeigen das.

:::definition[Kraft]
Eine **Kraft** $\vec F$ beschreibt, wie stark ein Körper auf einen anderen einwirkt. Sie kann den
Bewegungszustand des Körpers ändern oder ihn verformen. Eine Kraft hat einen **Betrag** (wie stark),
eine **Richtung** (wohin) und einen **Angriffspunkt** (wo sie angreift). Sie ist also ein Vektor. Ihre
Einheit ist das **Newton**: $1\,\text{N} = 1\,\text{kg}\cdot\text{m/s}^2$.

**Beispiel:** Deine Hand wirft einen Ball. Solange die Hand den Ball berührt, übt sie eine Kraft auf ihn aus.

**Kein Beispiel:** Der „Schwung“ des fliegenden Balls ist **keine** Kraft. Sobald der Ball die Hand
verlassen hat, schiebt ihn nichts mehr nach vorn. Er trägt keine Kraft in sich.
:::

Eine Kraft gehört also immer zu **zwei** Körpern: einem, der sie ausübt, und einem, auf den sie wirkt.
Wenn du eine Kraft benennst, sag immer, wer auf wen wirkt: „Die Erde zieht den Ball nach unten.“

Zur Orientierung, wie groß ein Newton ist: Auf eine Tafel Schokolade mit $100\,\text{g}$ wirkt an der
Erdoberfläche eine Gewichtskraft von knapp $1\,\text{N}$. Auf einen Menschen mit $70\,\text{kg}$ wirken
etwa $690\,\text{N}$. Ein Automotor bringt beim Anfahren einige tausend Newton auf.

Weil Kräfte Vektoren sind, darf man sie nicht einfach als Zahlen addieren. Zwei Leute, die mit je
$100\,\text{N}$ in entgegengesetzte Richtungen an einer Kiste ziehen, ergeben zusammen **null**.
Die Summe aller Kräfte auf einen Körper heißt **resultierende Kraft** $\vec F_{\text{res}}$. Nur sie
entscheidet, wie sich der Körper bewegt. Wie man Kräfte in verschiedenen Richtungen addiert, lernst du
in [3.6 Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).

```aufgabe
id: p3-1-kraft-check
art: check
titel: Kraft oder keine Kraft?
niveau: 1
angabe: |
  Welche der folgenden Dinge sind **Kräfte** im Sinne der Physik? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Deine Hand drückt gegen eine Tür."
      - "Der „Schwung“ eines rollenden Balls."
      - "Die Erde zieht einen Apfel an."
      - "Die Geschwindigkeit eines fahrenden Autos."
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: Der „Schwung“ ist keine Kraft. Kein zweiter Körper schiebt den rollenden Ball. Dass er weiterrollt, ist seine Trägheit. Zu einer Kraft gehören immer zwei Körper, einer übt sie aus, auf den anderen wirkt sie.
      - wert: [0, 2, 3]
        meldung: Eine Geschwindigkeit ist keine Kraft. Sie hat die Einheit m/s, eine Kraft hat die Einheit Newton. Eine Kraft kann die Geschwindigkeit **ändern**, sie ist aber nicht die Geschwindigkeit selbst.
hinweise:
  - Frage bei jeder Aussage, welcher **zweite** Körper hier auf den ersten einwirkt.
loesung: |
  Kräfte sind „Hand drückt Tür“ (die Hand wirkt auf die Tür) und „Erde zieht Apfel“ (die Erde wirkt auf den Apfel).
  ---
  Schwung und Geschwindigkeit sind Eigenschaften der Bewegung eines einzelnen Körpers. Kein anderer Körper übt sie aus, also sind sie keine Kräfte.
```

### Masse als Maß der Trägheit

Ein leerer Einkaufswagen lässt sich leicht anschieben, ein voll beladener nur schwer. Das wäre sogar
auf völlig glattem Boden so, wo keine Reibung bremst. Körper „wehren“ sich dagegen, dass man ihre
Bewegung ändert. Diese Eigenschaft heißt **Trägheit**.

:::definition[Masse (träge Masse)]
Die **Masse** $m$ eines Körpers ist ein Maß für seine **Trägheit**, also dafür, wie stark er sich einer
Änderung seiner Geschwindigkeit widersetzt. Einheit: Kilogramm (kg). Die Masse hängt **nicht** vom Ort ab.

**Beispiel:** Ein Astronaut mit Ausrüstung hat auf der Erde und auf dem Mond dieselbe Masse von
$120\,\text{kg}$. Auch auf dem Mond ist er genauso schwer anzuschieben wie auf der Erde.

**Kein Beispiel:** Die **Gewichtskraft** ist keine Masse. Sie ist die Kraft, mit der ein Himmelskörper
den Körper anzieht. Sie hat die Einheit Newton und ist auf dem Mond etwa sechsmal kleiner.
:::

Im Alltag sagt man „Ich wiege 70 Kilo“ und meint die Masse. Physikalisch ist das Gewicht eine Kraft.
Die Gewichtskraft berechnet man als $F_G = m\cdot g$. Dabei ist $m$ die Masse und
$g = 9{,}81\,\text{m/s}^2$ die Fallbeschleunigung an der Erdoberfläche. Für $70\,\text{kg}$ ergibt das
$F_G = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 687\,\text{N}$. Mehr dazu in [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).

### Von Aristoteles zu Galilei: ein Irrweg von zweitausend Jahren

Der griechische Philosoph **Aristoteles** (4. Jahrhundert vor Christus) lehrte: Jede erzwungene
Bewegung braucht eine dauernd wirkende Ursache. Hört das Schieben auf, hört die Bewegung auf. Einen
geworfenen Stein ließ er von der nachströmenden Luft weiterschieben. Das passt gut zur Alltagserfahrung,
denn bei uns bremst fast immer Reibung. Physikalisch ist es aber falsch.

**Galileo Galilei** (um 1600) prüfte solche Behauptungen erstmals mit genauen Experimenten. Dazu kam
ein berühmtes **Gedankenexperiment**, also ein Experiment, das man nur im Kopf durchführt, weil sich
die ideale Situation (ganz ohne Reibung) nicht herstellen lässt.

```plot
x: [-5, 10]
y: [-1, 4.5]
gleich: true
strecken:
  - { von: [-4, 3], nach: [0, 0], farbe: 0 }
  - { von: [0, 0], nach: [2, 3], farbe: 1 }
  - { von: [0, 0], nach: [5, 3], farbe: 2 }
  - { von: [0, 0], nach: [9.5, 0], farbe: 3 }
  - { von: [-4.5, 3], nach: [9.5, 3], gestrichelt: true }
punkte:
  - { x: -4, y: 3, label: "Start" }
  - { x: 2, y: 3, label: "steil" }
  - { x: 5, y: 3, label: "flach" }
  - { x: 9.5, y: 0, label: "waagrecht: rollt ewig" }
beschriftung: "Galileis Rinnen-Gedankenexperiment. Eine Kugel rollt links aus der Höhe hinab und rechts wieder hinauf. Ohne Reibung erreicht sie rechts wieder die Starthöhe (gestrichelte Linie). Je flacher die rechte Rinne, desto weiter rollt sie. Ist die rechte Rinne waagrecht, erreicht sie die Starthöhe nie und rollt immer weiter."
```

Der Gedankengang hat drei Schritte:

1. Eine Kugel rollt in einer Rinne hinunter und in einer zweiten Rinne wieder hinauf. Im Experiment
   erreicht sie **fast** die Starthöhe. Ohne Reibung, so schließt Galilei, wäre es **genau** die Starthöhe.
2. Macht man die zweite Rinne flacher, muss die Kugel einen längeren Weg zurücklegen, um diese Höhe zu
   erreichen. Sie rollt weiter.
3. Legt man die zweite Rinne waagrecht, erreicht die Kugel die Starthöhe nie. Also rollt sie **für
   immer** mit gleicher Geschwindigkeit weiter.

Was haben wir gezeigt? Eine Kugel, auf die in Bewegungsrichtung keine Kraft wirkt, wird nicht langsamer.
Langsamer wird sie im echten Leben nur, weil Reibung bremst. **Isaac Newton** (1687) machte daraus
sein erstes Axiom.

### Das erste Newtonsche Axiom

:::satz[Erstes Newtonsches Axiom (Trägheitssatz)]
Ein Körper bleibt in Ruhe oder bewegt sich gleichförmig geradlinig weiter, solange die resultierende
Kraft auf ihn null ist. In Formeln: Wenn $\vec F_{\text{res}} = \vec 0$ gilt, dann ist die
Geschwindigkeit $\vec v$ konstant, und umgekehrt.
:::

„Gleichförmig geradlinig“ heißt: gleich schnell **und** in gleicher Richtung. Das Axiom stellt Ruhe und
gleichförmige Bewegung auf eine Stufe. Beide Zustände brauchen keine Ursache. Eine Ursache, also eine
resultierende Kraft, braucht nur die **Änderung** der Geschwindigkeit.

:::beispiel[Welche Antriebskraft braucht ein Auto bei konstanter Geschwindigkeit?]
Ein Auto fährt auf der Autobahn mit konstant $100\,\text{km/h}$ geradeaus. Der Luftwiderstand bremst
mit $420\,\text{N}$, die Rollreibung der Reifen mit $180\,\text{N}$. Wie groß ist die Antriebskraft?

**Schritt 1, Modell:** Die Geschwindigkeit ist konstant (Betrag und Richtung). Nach dem ersten Axiom
ist die resultierende Kraft also null.

**Schritt 2, Kräfte in Fahrtrichtung zählen:** Wir legen „in Fahrtrichtung“ als positive Richtung fest.
Die Antriebskraft $F_A$ zeigt nach vorn, die beiden bremsenden Kräfte zeigen nach hinten:
$$F_{\text{res}} = F_A - 420\,\text{N} - 180\,\text{N} = 0.$$

**Schritt 3, auflösen:** $F_A = 420\,\text{N} + 180\,\text{N} = 600\,\text{N}$.

**Antwort:** Der Motor muss $600\,\text{N}$ aufbringen, nur um die bremsenden Kräfte auszugleichen. Die
resultierende Kraft ist trotzdem null. Der Motor hält die Geschwindigkeit, er erzeugt sie nicht.
:::

```plot
x: [-5, 7]
y: [-1.5, 1.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [6, 0], label: "Antrieb 600 N", farbe: 1 }
  - { von: [0, 0.4], nach: [-4.2, 0.4], label: "Luftwiderstand 420 N", farbe: 0 }
  - { von: [0, -0.4], nach: [-1.8, -0.4], label: "Rollreibung 180 N", farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "Auto" }
beschriftung: "Waagrechte Kräfte auf das Auto bei konstant 100 km/h, Maßstab 100 N pro Kästchen. Die Antriebskraft (orange) ist genau so lang wie Luftwiderstand (blau) und Rollreibung (violett) zusammen. Die resultierende Kraft ist null. Gewichtskraft und Normalkraft wirken senkrecht, heben sich auf und sind weggelassen."
```

:::achtung[Fehler: „Bewegung braucht eine resultierende Kraft“]
Ein Eishockeypuck ($0{,}17\,\text{kg}$) gleitet reibungsfrei mit $8\,\text{m/s}$ über das Eis. Eine
Schülerin rechnet: „Damit er $8\,\text{m/s}$ behält, braucht er eine Kraft
$F = m\cdot v = 0{,}17\,\text{kg}\cdot 8\,\text{m/s} = 1{,}36\,\text{N}$ nach vorn.“

Das ist doppelt falsch. Erstens hat $m\cdot v$ die Einheit $\text{kg}\cdot\text{m/s}$ und ist gar keine
Kraft (das ist der Impuls, siehe [Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls)). Zweitens braucht der Puck **keine** Kraft, um seine
Geschwindigkeit zu behalten. Ohne Reibung ist die resultierende Kraft null, und er gleitet nach dem
ersten Axiom mit $8\,\text{m/s}$ weiter.
:::

:::achtung[Fehler: Antriebskraft mit resultierender Kraft verwechseln]
Ein Radfahrer fährt mit konstant $20\,\text{km/h}$. Er tritt mit einer Vortriebskraft von $25\,\text{N}$.
Ein Schüler schreibt: „$F_{\text{res}} = 25\,\text{N}$, weil der Radfahrer ja tritt.“

Falsch. Weil die Geschwindigkeit konstant ist, muss die resultierende Kraft null sein. Luftwiderstand
und Rollreibung bremsen zusammen ebenfalls mit $25\,\text{N}$. Richtig ist also
$F_{\text{res}} = 25\,\text{N} - 25\,\text{N} = 0$. Die Antriebskraft ist nur **eine** der Kräfte.
:::

:::beispiel[Eine Raumsonde ohne Antrieb]
Die Raumsonde Voyager 1 fliegt seit Jahrzehnten ohne Triebwerk mit rund $17\,\text{km/s}$ durch den
Weltraum. Weit weg von allen Sternen ist die resultierende Kraft auf sie fast null. Wie weit kommt sie
in einem Jahr?

**Schritt 1, Modell:** Nach dem ersten Axiom bleibt die Geschwindigkeit konstant. Es gilt also die
gleichförmige Bewegung $s = v\cdot t$.

**Schritt 2, Zeit in Sekunden:** Ein Jahr hat
$365{,}25\cdot 24\cdot 3600\,\text{s} = 3{,}16\cdot 10^7\,\text{s}$.

**Schritt 3, einsetzen:**
$s = 17\,\text{km/s}\cdot 3{,}16\cdot 10^7\,\text{s} = 5{,}4\cdot 10^8\,\text{km}$.
Die Einheit Sekunde kürzt sich, es bleiben Kilometer.

**Antwort:** Etwa $540$ Millionen Kilometer pro Jahr, ganz ohne Antrieb. Das ist mehr als dreimal der
Abstand zwischen Erde und Sonne.
:::

### Inertialsysteme

Das erste Axiom gilt nicht für jeden Beobachter. Sitzt du in einem Bus, der scharf bremst, rollt eine
Flasche am Boden nach vorn. Von dir aus gesehen beginnt sie sich zu bewegen, obwohl nichts sie anschiebt.
Für dich scheint das erste Axiom verletzt.

Ein **Bezugssystem** ist der Standpunkt, von dem aus man eine Bewegung beschreibt, samt Maßstab und
Uhr (siehe [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Relativbewegung und
Inertialsysteme“). Ein Bezugssystem, in dem das erste Axiom gilt, heißt **Inertialsystem** (von
lateinisch *iners*, träge).

- **Beispiel:** Der Bahnsteig ist (in sehr guter Näherung) ein Inertialsystem. Auch ein Zug, der mit
  konstanter Geschwindigkeit geradeaus fährt, ist eines. Im ruhig fahrenden Zug fällt eine Münze genau
  so senkrecht nach unten wie am Bahnsteig.
- **Kein Beispiel:** Der bremsende Bus ist **kein** Inertialsystem, weil er selbst beschleunigt wird.
  Wie man dort trotzdem rechnet, lernst du in
  [3.9 Beschleunigte Bezugssysteme](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).

```aufgabe
id: p3-aufzug-gleichfoermig
titel: Ein Aufzug fährt gleichförmig nach oben
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine Aufzugskabine mit Insassen hat die Masse $650\,\text{kg}$. Sie fährt mit konstant $1{,}2\,\text{m/s}$ nach oben. Wie groß ist die Kraft im Tragseil? Gib das Ergebnis in Newton an ($g = 9{,}81\,\text{m/s}^2$).
teile:
  - typ: zahl
    label: Seilkraft
    loesung: "650*9.81"
    einheit: "N"
    anzeige: '6376{,}5 \approx 6{,}38\cdot 10^{3}'
    fehler:
      - wert: "650*1.2"
        meldung: Du hast Masse mal Geschwindigkeit gerechnet. Das ist keine Kraft. Frage dich zuerst, ob sich die Geschwindigkeit ändert. Wenn nicht, wie groß ist dann die resultierende Kraft?
      - wert: "650"
        meldung: Das ist die Masse in kg, keine Kraft. Die Gewichtskraft ist Masse mal Fallbeschleunigung.
hinweise:
  - Ändert sich die Geschwindigkeit der Kabine? Was folgt daraus für die resultierende Kraft?
  - 'Auf die Kabine wirken nur zwei Kräfte: das Seil zieht nach oben, die Erde zieht nach unten.'
gefuehrt:
  - text: Wie groß ist die Beschleunigung der Kabine in $\text{m/s}^2$?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Die Geschwindigkeit ist konstant, also ist die Beschleunigung null. Dass die Kabine sich nach oben bewegt, spielt dafür keine Rolle.
  - text: Wie groß ist demnach die resultierende Kraft auf die Kabine in Newton?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Nach dem ersten Newtonschen Axiom ist bei konstanter Geschwindigkeit die resultierende Kraft null.
  - text: Berechne die Gewichtskraft der Kabine in Newton.
    teil: { typ: zahl, loesung: "650*9.81" }
    erklaerung: $F_G = m g = 650\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 6376{,}5\,\text{N}$.
  - text: Überlege, wie groß die Seilkraft sein muss, damit die resultierende Kraft null ist.
    erklaerung: Seilkraft nach oben minus Gewichtskraft nach unten ergibt null. Also ist die Seilkraft genau so groß wie die Gewichtskraft, rund $6{,}38\,\text{kN}$. Sie ist **nicht** größer, obwohl die Kabine nach oben fährt.
loesung: |
  **Modell:** Die Kabine bewegt sich mit konstanter Geschwindigkeit. Nach dem ersten Newtonschen Axiom ist die resultierende Kraft auf sie deshalb null.
  ---
  **Kräfte:** Das Seil zieht mit $F_S$ nach oben, die Erde mit $F_G = m g$ nach unten. Mit „nach oben“ als positiver Richtung gilt $F_S - m g = 0$.
  ---
  **Rechnung:** $F_S = m g = 650\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 6376{,}5\,\text{N} \approx 6{,}38\,\text{kN}$.
  ---
  **Plausibilität:** Die Seilkraft ist genau gleich der Gewichtskraft. Wer meint, für die Fahrt nach oben müsse das Seil „mehr ziehen“, denkt aristotelisch. Mehr ziehen muss es nur beim **Anfahren**, wenn die Kabine schneller wird.
```

```reflexion
frage: Ein Ball rollt über den Rasen und wird immer langsamer, bis er liegen bleibt. Widerspricht das dem ersten Newtonschen Axiom? Erkläre in zwei bis drei Sätzen.
antwort: |
  Nein. Das erste Axiom sagt nur: **Ohne** resultierende Kraft bleibt die Geschwindigkeit gleich. Auf den Ball wirkt aber eine
  resultierende Kraft entgegen der Bewegung, nämlich Rollreibung am Rasen und Luftwiderstand. Diese Kraft ändert seine
  Geschwindigkeit, und zwar so, dass er langsamer wird. Auf einer perfekt glatten Fläche im Vakuum würde er ewig weiterrollen.
```

### Aufgaben zum ersten Axiom

```aufgabe
id: p3-traegheit-zuordnen
titel: Trägheit im Alltag
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Situationen lassen sich direkt mit dem Trägheitssatz (dem ersten Newtonschen Axiom) erklären? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Beim Notbremsen bewegt sich der Oberkörper der Insassen nach vorn."
      - "Eine Rakete beschleunigt im leeren Weltraum, indem sie Gas ausstößt."
      - "Ein lockerer Hammerkopf sitzt fester, wenn man den Stiel kräftig auf den Boden stößt."
      - "Ein Auto fährt mit Tempomat konstant 100 km/h, die resultierende Kraft ist null."
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: Die Rakete ist kein Trägheitsphänomen. Sie wird schneller, also wirkt eine resultierende Kraft auf sie. Woher kommt diese Kraft? Das erklärt das dritte Axiom.
      - wert: [0, 3]
        meldung: Auch der Hammerkopf passt. Der Stiel wird am Boden abrupt gestoppt. Der Kopf bewegt sich wegen seiner Trägheit weiter nach unten und rutscht tiefer auf den Stiel.
hinweise:
  - Suche die Fälle, in denen sich etwas **weiterbewegt**, weil gerade keine (oder keine ausreichende) Kraft seine Bewegung ändert.
loesung: |
  **Ansatz:** Der Trägheitssatz erklärt alles, was ohne resultierende Kraft einfach so weitergeht, wie es war.
  ---
  Oberkörper (er bewegt sich weiter, während das Auto bremst), Hammerkopf (er bewegt sich weiter, wenn der Stiel abrupt stoppt) und Tempomat (konstante Geschwindigkeit, resultierende Kraft null) sind Trägheitsphänomene.
  ---
  Die Rakete wird schneller. Dafür braucht sie eine resultierende Kraft. Diese erklärt das dritte Axiom: Die Rakete drückt das Gas nach hinten, das Gas drückt die Rakete nach vorn.
```

```aufgabe
id: p3-lkw-konstant
titel: Lkw mit konstanter Geschwindigkeit
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Lkw fährt mit konstant $80\,\text{km/h}$ geradeaus. Sein Motor bringt eine Antriebskraft von $2{,}4\,\text{kN}$ auf. Wie groß sind alle bremsenden Kräfte (Luftwiderstand und Rollreibung) **zusammen**? Antwort in kN.
teile:
  - typ: zahl
    loesung: "2.4"
    einheit: "kN"
    anzeige: '2{,}4'
    fehler:
      - wert: "0"
        meldung: Null ist die **resultierende** Kraft. Gefragt sind aber die bremsenden Kräfte allein. Sie sind nicht null, sonst würde der Motor den Lkw beschleunigen.
hinweise:
  - Konstante Geschwindigkeit bedeutet nach dem ersten Axiom, dass die resultierende Kraft null ist.
loesung: |
  **Modell:** Konstante Geschwindigkeit heißt resultierende Kraft null (erstes Axiom).
  ---
  In Fahrtrichtung gilt: $F_A - F_{\text{brems}} = 0$, also $F_{\text{brems}} = F_A = 2{,}4\,\text{kN}$.
  ---
  **Antwortsatz:** Luftwiderstand und Rollreibung bremsen zusammen mit $2{,}4\,\text{kN}$. Sie gleichen die Antriebskraft genau aus.
```

```aufgabe
id: p3-zustand-erkennen
titel: Wann ist die resultierende Kraft null?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  In welchen Situationen ist die resultierende Kraft auf den genannten Körper **null**? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Fallschirmspringer sinkt mit konstanter Geschwindigkeit."
      - "Ein Auto fährt mit konstant 50 km/h durch eine Kurve."
      - "Ein Buch liegt ruhig auf dem Tisch."
      - "Ein senkrecht hochgeworfener Ball ist am höchsten Punkt kurz in Ruhe."
      - "Ein Aufzug fährt mit konstanter Geschwindigkeit nach unten."
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: In der Kurve ändert sich die **Richtung** der Geschwindigkeit. Auch das ist eine Beschleunigung, also wirkt eine resultierende Kraft (zum Kurvenmittelpunkt hin).
      - wert: [0, 2, 3, 4]
        meldung: Am höchsten Punkt ist die Geschwindigkeit kurz null, die Beschleunigung aber nicht. Die Gewichtskraft wirkt weiter, sonst würde der Ball oben stehen bleiben. „Geschwindigkeit null“ heißt nicht „Kraft null“.
      - wert: [2]
        meldung: Auch gleichförmige Bewegungen haben die resultierende Kraft null, nicht nur die Ruhe. Das ist der Kern des ersten Axioms.
hinweise:
  - Die resultierende Kraft ist genau dann null, wenn sich die Geschwindigkeit weder im Betrag noch in der Richtung ändert.
  - Prüfe beim Ball, ob er am höchsten Punkt dort bleibt oder sofort wieder fällt.
loesung: |
  **Kriterium:** Die resultierende Kraft ist null, wenn die Geschwindigkeit konstant ist, nach Betrag **und** Richtung.
  ---
  Fallschirmspringer mit konstanter Geschwindigkeit, ruhendes Buch und gleichförmig fahrender Aufzug: Die Geschwindigkeit ist konstant, also ist die resultierende Kraft null.
  ---
  Das Auto in der Kurve ändert seine Richtung, der Ball am höchsten Punkt ändert seine Geschwindigkeit (gleich danach fällt er). In beiden Fällen wirkt eine resultierende Kraft.
```

```aufgabe
id: p3-ball-wurf-kraefte
titel: Welche Kräfte wirken auf einen geworfenen Ball?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Ball wird schräg nach oben geworfen. Den Luftwiderstand vernachlässigen wir. Welche Kräfte wirken auf den Ball am **höchsten Punkt** seiner Bahn?
teile:
  - typ: auswahl
    optionen:
      - "Nur die Gewichtskraft, senkrecht nach unten."
      - "Die Gewichtskraft nach unten und eine Wurfkraft in Flugrichtung."
      - "Keine Kraft, denn dort ist der Ball kurz in der Schwebe."
      - "Die Gewichtskraft und eine gleich große Kraft nach oben, die ihn dort hält."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine „Wurfkraft“ gibt es nach dem Abwurf nicht mehr. Die Hand berührt den Ball nicht mehr. Dass er sich weiter waagrecht bewegt, ist Trägheit, keine Kraft.
      - wert: 2
        meldung: Am höchsten Punkt ist nur die senkrechte Geschwindigkeit null. Der Ball fliegt waagrecht weiter und fällt sofort wieder. Die Erde zieht ihn auch dort nach unten.
      - wert: 3
        meldung: Wenn die Kräfte sich aufheben würden, bliebe der Ball oben stehen oder flöge waagrecht ewig weiter. Er fällt aber wieder. Es gibt keine haltende Kraft nach oben.
hinweise:
  - Welche Körper berühren den Ball am höchsten Punkt? Welche Fernkräfte wirken?
  - Eine Kraft braucht immer einen zweiten Körper, der sie ausübt.
loesung: |
  **Ansatz:** Wir suchen alle Körper, die auf den Ball einwirken. Berührt wird er von nichts (Luft vernachlässigt). Als Fernkraft wirkt nur die Anziehung der Erde.
  ---
  Also wirkt nur die Gewichtskraft $F_G = m g$ senkrecht nach unten, an jedem Punkt der Bahn gleich.
  ---
  **Deutung:** Die waagrechte Bewegung läuft nach dem ersten Axiom ohne Kraft weiter. Die senkrechte Bewegung wird von der Gewichtskraft geändert. Das passt zum schiefen Wurf aus der Kinematik: waagrecht gleichförmig, senkrecht beschleunigt mit $g$.
```

```aufgabe
id: p3-sonde-strecke
titel: Wie weit fliegt eine Sonde in einem Monat?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Eine Raumsonde fliegt nach Abschalten der Triebwerke mit $11\,\text{km/s}$ weit weg von allen Planeten. Die resultierende Kraft auf sie ist praktisch null. Welche Strecke legt sie in $30$ Tagen zurück? Gib das Ergebnis in km an (wissenschaftliche Schreibweise genügt).
teile:
  - typ: zahl
    loesung: "11*30*24*3600"
    einheit: "km"
    anzeige: '2{,}85\cdot 10^{7}'
    fehler:
      - wert: "11*30*24*60"
        meldung: Du hast die Zeit in Minuten statt in Sekunden umgerechnet. Eine Stunde hat $3600\,\text{s}$, nicht $60$.
      - wert: "0"
        meldung: Ohne Kraft bleibt die Sonde nicht stehen. Nach dem ersten Axiom fliegt sie mit konstanter Geschwindigkeit weiter.
hinweise:
  - Welche Bewegungsart folgt aus dem ersten Axiom, wenn keine resultierende Kraft wirkt?
  - Rechne die 30 Tage zuerst in Sekunden um, damit die Einheiten zu km/s passen.
loesung: |
  **Modell:** Resultierende Kraft null bedeutet nach dem ersten Axiom konstante Geschwindigkeit. Es gilt $s = v t$.
  ---
  **Zeit:** $t = 30\cdot 24\cdot 3600\,\text{s} = 2{,}592\cdot 10^6\,\text{s}$.
  ---
  **Strecke:** $s = 11\,\text{km/s}\cdot 2{,}592\cdot 10^6\,\text{s} = 2{,}85\cdot 10^7\,\text{km}$. Die Sekunden kürzen sich.
  ---
  **Plausibilität:** Das sind rund $29$ Millionen Kilometer, etwa ein Fünftel des Abstands Erde–Sonne. Für einen Monat ohne Antrieb ist das bei $11\,\text{km/s}$ stimmig.
```

```aufgabe
id: p3-galilei-gedankenexperiment
titel: Galileis Gedankenexperiment erklären
niveau: 3
lernziel: 0
kompetenz: begruenden
angabe: |
  Beschreibe Galileis Gedankenexperiment mit den zwei Rinnen. Begründe, warum daraus der Trägheitssatz folgt. Nenne außerdem die Idealisierung, ohne die das Argument nicht funktioniert, und erkläre, warum man das Experiment trotzdem nicht „echt“ durchführen kann.
teile:
  - typ: text
    muster: |
      Eine Kugel rollt in einer Rinne hinab und in einer zweiten Rinne wieder hinauf. Ohne Reibung erreicht sie genau die
      Starthöhe. Macht man die zweite Rinne flacher, muss sie weiter rollen, um diese Höhe zu erreichen. Ist die zweite
      Rinne waagrecht, erreicht sie die Höhe nie, also rollt sie mit gleicher Geschwindigkeit immer weiter. Daraus folgt:
      Ohne Kraft in Bewegungsrichtung bleibt die Geschwindigkeit gleich (Trägheitssatz). Die Idealisierung ist „keine
      Reibung und kein Luftwiderstand“. Echt durchführen lässt sich das nicht, weil es immer etwas Reibung gibt und eine
      unendlich lange waagrechte Rinne nicht existiert. Deshalb ist es ein Gedankenexperiment.
hinweise:
  - Was passiert mit der erreichten Höhe auf der zweiten Rinne, wenn man sie flacher macht?
  - Welche Kraft lässt Galilei weg, und warum erreicht die Kugel im echten Experiment nur fast die Starthöhe?
loesung: |
  **Aufbau:** Zwei Rinnen, die Kugel rollt in der ersten hinab und in der zweiten hinauf. Ohne Reibung erreicht sie wieder die Starthöhe.
  ---
  **Gedankengang:** Je flacher die zweite Rinne, desto weiter rollt die Kugel, bis sie die Starthöhe erreicht. Bei einer waagrechten Rinne erreicht sie sie nie und rollt ohne Ende weiter.
  ---
  **Schluss:** Wirkt in Bewegungsrichtung keine Kraft, bleibt die Geschwindigkeit konstant. Das ist der Trägheitssatz.
  ---
  **Idealisierung:** Keine Reibung, kein Luftwiderstand. Im echten Experiment bremsen beide, deshalb kommt die Kugel nur fast auf die Starthöhe. Eine unendlich lange Rinne gibt es auch nicht. Darum ist es ein Gedankenexperiment.
```

## Das zweite Newtonsche Axiom: Kraft ändert die Bewegung

```aufgabe
id: p3-2-check
art: check
titel: "Vorwissen: Beschleunigung berechnen"
niveau: 1
angabe: |
  Ein Wagen wird in $3{,}0\,\text{s}$ gleichmäßig von $1{,}0\,\text{m/s}$ auf $7{,}0\,\text{m/s}$ schneller. Wie groß ist seine Beschleunigung in $\text{m/s}^2$?
teile:
  - typ: zahl
    loesung: "(7-1)/3"
    einheit: "m/s²"
    anzeige: '2'
    fehler:
      - wert: "7/3"
        meldung: Du hast die Endgeschwindigkeit durch die Zeit geteilt. Es zählt die **Änderung** der Geschwindigkeit, also $7 - 1 = 6\,\text{m/s}$.
hinweise:
  - '$a = \Delta v / \Delta t$.'
loesung: |
  $\Delta v = 7{,}0\,\text{m/s} - 1{,}0\,\text{m/s} = 6{,}0\,\text{m/s}$.
  ---
  $a = \dfrac{6{,}0\,\text{m/s}}{3{,}0\,\text{s}} = 2{,}0\,\text{m/s}^2$. Siehe [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Beschleunigung“.
```

Das erste Axiom sagt, was **ohne** resultierende Kraft passiert: nichts Neues, die Geschwindigkeit
bleibt gleich. Das zweite Axiom sagt, was **mit** resultierender Kraft passiert, und zwar in Zahlen.

### Ein Experiment: Wie hängt die Beschleunigung von Kraft und Masse ab?

Auf einer Luftkissenbahn gleitet ein Wagen fast ohne Reibung. Ein Faden zieht ihn mit einer konstanten,
gemessenen Kraft. Eine Lichtschranke misst die Beschleunigung. Ein Wagen mit $m = 0{,}50\,\text{kg}$ ergibt:

- Bei $F = 0{,}10\,\text{N}$ misst man $a = 0{,}20\,\text{m/s}^2$.
- Bei $F = 0{,}20\,\text{N}$ misst man $a = 0{,}40\,\text{m/s}^2$.
- Bei $F = 0{,}30\,\text{N}$ misst man $a = 0{,}60\,\text{m/s}^2$.

Doppelte Kraft ergibt doppelte Beschleunigung, dreifache Kraft dreifache Beschleunigung. Die
Beschleunigung ist also **proportional** zur Kraft. Nun legen wir ein Zusatzgewicht auf und verdoppeln
die Masse auf $1{,}0\,\text{kg}$. Bei $F = 0{,}20\,\text{N}$ misst man jetzt nur noch
$a = 0{,}20\,\text{m/s}^2$, also die Hälfte. Doppelte Masse ergibt bei gleicher Kraft halbe Beschleunigung.

```plot
x: [0, 0.4]
y: [0, 0.8]
achsen: { x: "F in N", y: "a in m/s²" }
graphen:
  - { f: "2*x", label: "m = 0,50 kg", farbe: 0, von: 0, bis: 0.38 }
  - { f: "x", label: "m = 1,0 kg", farbe: 1, von: 0, bis: 0.38 }
punkte:
  - { x: 0.1, y: 0.2, farbe: 0 }
  - { x: 0.2, y: 0.4, farbe: 0 }
  - { x: 0.3, y: 0.6, farbe: 0 }
  - { x: 0.2, y: 0.2, farbe: 1 }
beschriftung: "Messwerte der Luftkissenbahn. Die Beschleunigung a wächst linear mit der Kraft F. Die Gerade für die doppelte Masse (1,0 kg) ist nur halb so steil. Die Steigung jeder Geraden ist 1/m."
```

Beide Beobachtungen passen in eine Formel. Rechne nach: $0{,}50\,\text{kg}\cdot 0{,}20\,\text{m/s}^2 =
0{,}10\,\text{N}$ und $1{,}0\,\text{kg}\cdot 0{,}20\,\text{m/s}^2 = 0{,}20\,\text{N}$. Masse mal
Beschleunigung ergibt jedes Mal genau die Kraft.

:::satz[Zweites Newtonsches Axiom (Grundgesetz der Mechanik)]
Die resultierende Kraft auf einen Körper ist gleich seiner Masse mal seiner Beschleunigung:
$$\vec F_{\text{res}} = m\cdot\vec a.$$
Dabei ist $\vec F_{\text{res}}$ die Summe **aller** Kräfte auf den Körper (in N), $m$ seine Masse (in kg)
und $\vec a$ seine Beschleunigung (in $\text{m/s}^2$). Die Beschleunigung zeigt immer in die Richtung der
resultierenden Kraft.
:::

Aus dem Grundgesetz folgt die Einheit Newton: $1\,\text{N}$ ist die Kraft, die einem Körper mit
$1\,\text{kg}$ die Beschleunigung $1\,\text{m/s}^2$ gibt. Also ist $1\,\text{N} = 1\,\text{kg}\cdot\text{m/s}^2$.
Umgestellt lautet das Gesetz $a = F_{\text{res}}/m$: Die Kraft ist die Ursache, die Masse bremst die
Wirkung, die Beschleunigung ist das Ergebnis.

Beim Anwenden musst du auf drei Dinge achten:

1. **Resultierende Kraft.** In $F = m a$ steht die Summe aller Kräfte, nicht eine einzelne Kraft.
2. **Richtung.** Die Gleichung gilt für jede Richtung getrennt. Lege fest, welche Richtung positiv
   zählt, und gib jeder Kraft das passende Vorzeichen.
3. **Inertialsystem.** In dieser Form gilt das Gesetz nur in Inertialsystemen, also nicht im
   bremsenden Bus.

:::beispiel[Eine Kiste wird gezogen]
Eine Kiste mit $30\,\text{kg}$ wird mit $150\,\text{N}$ waagrecht gezogen. Die Reibung bremst mit
$90\,\text{N}$. Wie groß ist die Beschleunigung, und wie schnell ist die Kiste nach $4{,}0\,\text{s}$,
wenn sie aus der Ruhe startet?

**Schritt 1, Richtung festlegen:** Die Zugrichtung zählt positiv. Die Zugkraft ist $+150\,\text{N}$,
die Reibung $-90\,\text{N}$.

**Schritt 2, resultierende Kraft:** $F_{\text{res}} = 150\,\text{N} - 90\,\text{N} = 60\,\text{N}$.

**Schritt 3, Grundgesetz:** $a = \dfrac{F_{\text{res}}}{m} = \dfrac{60\,\text{N}}{30\,\text{kg}} =
2{,}0\,\dfrac{\text{kg}\cdot\text{m/s}^2}{\text{kg}} = 2{,}0\,\text{m/s}^2$.

**Schritt 4, Kinematik:** Die Kraft ist konstant, also auch die Beschleunigung. Es gilt
$v = a t = 2{,}0\,\text{m/s}^2\cdot 4{,}0\,\text{s} = 8{,}0\,\text{m/s}$.

**Probe:** Ohne Reibung wären es $150/30 = 5{,}0\,\text{m/s}^2$. Mit Reibung muss es weniger sein. ✓
:::

```plot
x: [-3, 4]
y: [-6.5, 6.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -5.89], label: "F_G = 294 N", farbe: 0 }
  - { von: [0, 0], nach: [0, 5.89], label: "F_N = 294 N", farbe: 2 }
  - { von: [0, 0], nach: [3, 0], label: "Zug 150 N", farbe: 1 }
  - { von: [0, 0], nach: [-1.8, 0], label: "Reibung 90 N", farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "Kiste" }
beschriftung: "Freikörperbild der gezogenen Kiste (30 kg), Maßstab 50 N pro Kästchen. Senkrecht heben sich Gewichtskraft (blau) und Normalkraft (grün) auf. Waagrecht ist die Zugkraft (orange, 150 N) länger als die Reibung (violett, 90 N). Der Unterschied von 60 N ist die resultierende Kraft, sie zeigt in Zugrichtung und beschleunigt die Kiste."
```

:::achtung[Fehler: nur eine Kraft statt der resultierenden Kraft]
Eine Kiste ($20\,\text{kg}$) wird mit $100\,\text{N}$ gezogen, die Reibung bremst mit $40\,\text{N}$.
Falsch gerechnet: $a = \dfrac{100\,\text{N}}{20\,\text{kg}} = 5{,}0\,\text{m/s}^2$.

Hier wurde nur die Zugkraft eingesetzt. Richtig ist $F_{\text{res}} = 100\,\text{N} - 40\,\text{N} = 60\,\text{N}$
und damit $a = 60\,\text{N}/20\,\text{kg} = 3{,}0\,\text{m/s}^2$.
:::

:::achtung[Fehler: Gewichtskraft statt Masse einsetzen]
Von einem Wagen ist die Gewichtskraft $490\,\text{N}$ bekannt. Die resultierende Kraft ist $98\,\text{N}$.
Falsch gerechnet: $a = \dfrac{98\,\text{N}}{490\,\text{N}} = 0{,}2$. Das Ergebnis hat gar keine Einheit,
also kann es keine Beschleunigung sein.

In $F = m a$ steht die **Masse** in kg. Zuerst also $m = F_G/g = 490\,\text{N}/(9{,}81\,\text{m/s}^2) =
49{,}9\,\text{kg}$, dann $a = 98\,\text{N}/49{,}9\,\text{kg} = 1{,}96\,\text{m/s}^2$.
:::

### Ist das erste Axiom nur ein Sonderfall des zweiten?

Setzt man im zweiten Axiom $F_{\text{res}} = 0$, folgt $a = 0$, also konstante Geschwindigkeit. Das
sieht aus wie das erste Axiom. Trotzdem ist das erste Axiom **kein** bloßer Sonderfall. Es legt fest,
**in welchen Bezugssystemen** das zweite überhaupt gilt: in den Inertialsystemen. Erst wenn man ein
Inertialsystem hat, darf man $F = m a$ benutzen. Diese Frage taucht in mündlichen Prüfungen gern auf.

### Kraft aus einem Bewegungsdiagramm

Im v-t-Diagramm ist die Beschleunigung die **Steigung** der Kurve (siehe
[Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Bewegungsdiagramme ineinander übersetzen“).
Mathematisch ist sie die Ableitung $a = v'(t)$, siehe Mathematik, [Differentialrechnung](/lernen/mathe3/differentialrechnung),
Abschnitt „Von der Sekante zur Tangente: die Ableitung an einer Stelle“. Mit dem Grundgesetz wird aus jeder Steigung eine
resultierende Kraft: $F_{\text{res}} = m\cdot(\text{Steigung})$.

```plot
x: [0, 14]
y: [0, 7]
achsen: { x: "t in s", y: "v in m/s" }
strecken:
  - { von: [0, 0], nach: [4, 6], farbe: 0 }
  - { von: [4, 6], nach: [10, 6], farbe: 0 }
  - { von: [10, 6], nach: [13, 0], farbe: 0 }
punkte:
  - { x: 4, y: 6, label: "(4 s | 6 m/s)" }
  - { x: 10, y: 6, label: "(10 s | 6 m/s)" }
  - { x: 13, y: 0, label: "13 s" }
beschriftung: "v-t-Diagramm eines Radfahrers (mit Rad 80 kg). Von 0 bis 4 s steigt die Geschwindigkeit gleichmäßig auf 6 m/s, von 4 bis 10 s bleibt sie konstant, von 10 bis 13 s fällt sie gleichmäßig auf null."
```

:::beispiel[Resultierende Kraft aus dem v-t-Diagramm]
Radfahrer und Rad haben zusammen $80\,\text{kg}$. Das Diagramm zeigt seine Fahrt. Wie groß ist die
resultierende Kraft in jedem der drei Abschnitte?

**Abschnitt 1 (0 bis 4 s):** Steigung $a_1 = \dfrac{6\,\text{m/s} - 0}{4\,\text{s}} = 1{,}5\,\text{m/s}^2$.
Also $F_1 = 80\,\text{kg}\cdot 1{,}5\,\text{m/s}^2 = 120\,\text{N}$ in Fahrtrichtung.

**Abschnitt 2 (4 bis 10 s):** Die Gerade ist waagrecht, die Steigung null. Also $F_2 = 0$. Der Radfahrer
tritt zwar weiter, aber nur so stark, dass Luftwiderstand und Rollreibung ausgeglichen werden.

**Abschnitt 3 (10 bis 13 s):** $a_3 = \dfrac{0 - 6\,\text{m/s}}{3\,\text{s}} = -2{,}0\,\text{m/s}^2$.
Also $F_3 = 80\,\text{kg}\cdot(-2{,}0\,\text{m/s}^2) = -160\,\text{N}$. Das Minus heißt: entgegen der Fahrtrichtung.

**Deutung:** Das Diagramm zeigt keine Kräfte direkt. Aber jede Steigung verrät über $F = m a$ die
resultierende Kraft. Eine waagrechte Linie bedeutet resultierende Kraft null, nicht „keine Bewegung“.
:::

### Die Impulsform des Grundgesetzes

Newton selbst schrieb das Gesetz etwas anders. Er nannte das Produkt aus Masse und Geschwindigkeit die
„Bewegungsgröße“. Heute heißt es **Impuls**: $\vec p = m\cdot\vec v$, Einheit $\text{kg}\cdot\text{m/s}$.

:::satz[Grundgesetz in Impulsform]
Die resultierende Kraft ist gleich der Änderung des Impulses pro Zeit:
$$\vec F_{\text{res}} = \frac{\Delta\vec p}{\Delta t} \quad\text{und genauer}\quad \vec F_{\text{res}} = \frac{\dd\vec p}{\dd t}.$$
Dabei ist $\Delta\vec p$ die Impulsänderung (in $\text{kg}\cdot\text{m/s}$) im Zeitintervall $\Delta t$
(in s). Die zweite Form ist die Ableitung des Impulses nach der Zeit.
:::

Bleibt die Masse konstant, ändert sich nur $v$. Dann ist $\Delta p/\Delta t = m\,\Delta v/\Delta t = m a$,
und beide Formen sagen dasselbe. Die Impulsform braucht man, wenn sich die **Masse** ändert: Eine Rakete
verliert Treibstoff, ein Förderband nimmt laufend Sand auf. Mehr zum Impuls kommt im
[Kapitel Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls).

:::beispiel[Kraft auf ein Förderband]
Auf ein waagrechtes Förderband rieselt Sand. Pro Sekunde landen $20\,\text{kg}$ Sand auf dem Band, das
mit $1{,}5\,\text{m/s}$ läuft. Welche zusätzliche Kraft muss der Antrieb aufbringen?

**Schritt 1, Modell:** Jeder neue Sand kommt waagrecht mit der Geschwindigkeit null an und muss auf
$1{,}5\,\text{m/s}$ gebracht werden. Die Masse auf dem Band ändert sich, also nehmen wir die Impulsform.

**Schritt 2, Impulsänderung pro Sekunde:** In $\Delta t = 1\,\text{s}$ erhalten $20\,\text{kg}$ den Impuls
$\Delta p = 20\,\text{kg}\cdot 1{,}5\,\text{m/s} = 30\,\text{kg}\cdot\text{m/s}$.

**Schritt 3, Kraft:** $F = \dfrac{\Delta p}{\Delta t} = \dfrac{30\,\text{kg}\cdot\text{m/s}}{1\,\text{s}} =
30\,\text{kg}\cdot\text{m/s}^2 = 30\,\text{N}$.

**Antwort:** Der Antrieb braucht zusätzlich $30\,\text{N}$, solange der Sand gleichmäßig nachrieselt.
:::

```reflexion
frage: Du schiebst zwei Einkaufswagen mit derselben Kraft an. Der eine ist leer, der andere voll beladen. Erkläre mit dem zweiten Axiom, was du beobachtest, und sag, welche Größe im Gesetz den Unterschied ausmacht.
antwort: |
  Der leere Wagen wird viel schneller, weil die Beschleunigung $a = F/m$ bei gleicher Kraft umso größer ist, je kleiner
  die Masse ist. Der volle Wagen hat die größere Masse, also die größere Trägheit, und beschleunigt weniger. Den
  Unterschied macht die Masse $m$ im Nenner.
```

### Aufgaben zum zweiten Axiom

```aufgabe
id: p3-masse-aus-beschleunigung
titel: Masse bestimmen
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine resultierende Kraft von $45\,\text{N}$ beschleunigt einen Wagen mit $1{,}8\,\text{m/s}^2$. Wie groß ist seine Masse?
teile:
  - typ: zahl
    loesung: "45/1.8"
    einheit: "kg"
    anzeige: '25'
    fehler:
      - wert: "45*1.8"
        meldung: Du hast Kraft und Beschleunigung multipliziert. Prüfe die Einheit, $\text{N}\cdot\text{m/s}^2$ ist keine Masse. Stelle $F = m a$ nach $m$ um.
      - wert: "1.8/45"
        meldung: Du hast den Kehrwert berechnet. Aus $F = m a$ folgt durch Teilen durch $a$ die Formel $m = F/a$.
hinweise:
  - Stelle $F = m a$ nach $m$ um, indem du beide Seiten durch $a$ teilst.
loesung: |
  **Ansatz:** Grundgesetz $F = m a$, gesucht ist $m$. Wir teilen beide Seiten durch $a$: $m = F/a$.
  ---
  $m = \dfrac{45\,\text{N}}{1{,}8\,\text{m/s}^2} = 25\,\dfrac{\text{kg}\cdot\text{m/s}^2}{\text{m/s}^2} = 25\,\text{kg}$.
  ---
  **Einheitenkontrolle:** Die Einheiten $\text{m/s}^2$ kürzen sich, es bleibt kg. ✓
```

```aufgabe
id: p3-fma-auto
titel: Antriebskraft beim Anfahren
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Auto mit $m = 1200\,\text{kg}$ soll mit $3{,}0\,\text{m/s}^2$ beschleunigen. Welche resultierende Kraft ist dafür nötig?
teile:
  - typ: zahl
    loesung: "1200*3"
    einheit: "N"
    anzeige: '3600'
    fehler:
      - wert: "1200/3"
        meldung: Du hast geteilt. Nach dem Grundgesetz ist die Kraft das **Produkt** aus Masse und Beschleunigung.
      - wert: "1200*9.81"
        meldung: Das ist die Gewichtskraft des Autos. Gefragt ist die Kraft, die es waagrecht mit $3{,}0\,\text{m/s}^2$ beschleunigt.
hinweise:
  - Setze direkt in $F = m a$ ein.
loesung: |
  **Ansatz:** Grundgesetz $F_{\text{res}} = m a$.
  ---
  $F_{\text{res}} = 1200\,\text{kg}\cdot 3{,}0\,\text{m/s}^2 = 3600\,\text{kg}\cdot\text{m/s}^2 = 3600\,\text{N} = 3{,}6\,\text{kN}$.
  ---
  **Plausibilität:** Das ist knapp ein Drittel der Gewichtskraft des Autos ($11{,}8\,\text{kN}$), passend zu $3/9{,}81 \approx 0{,}3$.
```

```aufgabe
id: p3-bremskraft
titel: Bremskraft und Bremsweg
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Auto ($m = 1500\,\text{kg}$) bremst gleichmäßig in $4{,}0\,\text{s}$ von $72\,\text{km/h}$ bis zum Stillstand. Wie groß ist der Betrag der Bremskraft, und wie lang ist der Bremsweg?
teile:
  - typ: zahl
    label: Bremskraft (Betrag)
    loesung: "1500*20/4"
    einheit: "N"
    anzeige: '7500'
    fehler:
      - wert: "1500*72/4"
        meldung: Du hast mit $72$ gerechnet, ohne km/h in m/s umzurechnen. In $F = m a$ müssen alle Größen in SI-Einheiten stehen, also $72\,\text{km/h} = 20\,\text{m/s}$.
  - typ: zahl
    label: Bremsweg
    loesung: "0.5*20*4"
    einheit: "m"
    anzeige: '40'
    fehler:
      - wert: "20*4"
        meldung: Du hast $s = v_0\cdot t$ gerechnet, als würde das Auto die ganze Zeit $20\,\text{m/s}$ fahren. Es wird aber gleichmäßig langsamer. Rechne mit der mittleren Geschwindigkeit.
hinweise:
  - Rechne die Geschwindigkeit in m/s um und bestimme die Beschleunigung aus der Kinematik.
  - Für den Bremsweg bei gleichmäßigem Abbremsen gilt $s = \bar v\cdot t$ mit der mittleren Geschwindigkeit $\bar v = v_0/2$.
gefuehrt:
  - text: Rechne $72\,\text{km/h}$ in m/s um.
    teil: { typ: zahl, loesung: "72/3.6" }
    erklaerung: 'Teilen durch $3{,}6$ ergibt $v_0 = 20\,\text{m/s}$.'
  - text: Wie groß ist der Betrag der Beschleunigung in $\text{m/s}^2$?
    teil: { typ: zahl, loesung: "20/4" }
    erklaerung: $|a| = \dfrac{20\,\text{m/s}}{4{,}0\,\text{s}} = 5{,}0\,\text{m/s}^2$. Sie zeigt entgegen der Fahrtrichtung.
  - text: Berechne den Betrag der Bremskraft in N.
    teil: { typ: zahl, loesung: "1500*5" }
    erklaerung: $|F| = m|a| = 1500\,\text{kg}\cdot 5{,}0\,\text{m/s}^2 = 7500\,\text{N}$.
  - text: Berechne den Bremsweg in m.
    teil: { typ: zahl, loesung: "10*4" }
    erklaerung: Mittlere Geschwindigkeit $10\,\text{m/s}$, also $s = 10\,\text{m/s}\cdot 4{,}0\,\text{s} = 40\,\text{m}$.
loesung: |
  **Ansatz:** Aus Anfangsgeschwindigkeit und Bremszeit folgt die Beschleunigung (Kinematik), daraus mit $F = m a$ die Kraft. Zuerst in SI-Einheiten: $v_0 = 72\,\text{km/h} = 20\,\text{m/s}$.
  ---
  **Beschleunigung:** $a = \dfrac{0 - 20\,\text{m/s}}{4{,}0\,\text{s}} = -5{,}0\,\text{m/s}^2$. Das Minus heißt: entgegen der Fahrtrichtung.
  ---
  **Kraft:** $|F| = m|a| = 1500\,\text{kg}\cdot 5{,}0\,\text{m/s}^2 = 7500\,\text{N}$, entgegen der Fahrtrichtung.
  ---
  **Bremsweg:** $s = \bar v\, t = \dfrac{20\,\text{m/s}}{2}\cdot 4{,}0\,\text{s} = 40\,\text{m}$. Probe mit $v_0^2 = 2|a|s$: $400 = 2\cdot 5\cdot 40$. ✓
```

```aufgabe
id: p3-zwei-kraefte
titel: Resultierende Kraft und Geschwindigkeit
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Kiste mit $m = 25\,\text{kg}$ wird mit $120\,\text{N}$ waagrecht gezogen, die Reibung bremst mit $70\,\text{N}$. Welche Beschleunigung erfährt die Kiste? Welche Geschwindigkeit hat sie nach $3{,}0\,\text{s}$, wenn sie aus der Ruhe startet?
teile:
  - typ: zahl
    label: Beschleunigung
    loesung: "(120-70)/25"
    einheit: "m/s²"
    anzeige: '2'
    fehler:
      - wert: "120/25"
        meldung: Du hast nur die Zugkraft eingesetzt. In $F = m a$ steht die **resultierende** Kraft, also Zugkraft minus Reibung.
      - wert: "(120+70)/25"
        meldung: Die Reibung bremst, sie zeigt also entgegen der Zugkraft. Sie wird abgezogen, nicht addiert.
  - typ: zahl
    label: Geschwindigkeit nach 3 s
    loesung: "(120-70)/25*3"
    einheit: "m/s"
    anzeige: '6'
    fehler:
      - wert: "0.5*(120-70)/25*9"
        meldung: Das ist der zurückgelegte Weg $s = \tfrac12 a t^2$, nicht die Geschwindigkeit. Für die Geschwindigkeit gilt $v = a t$.
hinweise:
  - In $F = m a$ steht die resultierende Kraft.
  - Für die Geschwindigkeit aus der Ruhe gilt $v = a\cdot t$.
loesung: |
  **Ansatz:** Zugrichtung positiv. $F_{\text{res}} = 120\,\text{N} - 70\,\text{N} = 50\,\text{N}$.
  ---
  **Grundgesetz:** $a = \dfrac{F_{\text{res}}}{m} = \dfrac{50\,\text{N}}{25\,\text{kg}} = 2{,}0\,\text{m/s}^2$.
  ---
  **Kinematik:** $v = a t = 2{,}0\,\text{m/s}^2\cdot 3{,}0\,\text{s} = 6{,}0\,\text{m/s}$. Ohne Reibung wäre sie mit $4{,}8\,\text{m/s}^2$ deutlich schneller. ✓
```

```aufgabe
id: p3-proportional
titel: Was passiert mit der Beschleunigung?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein Wagen wird von einer resultierenden Kraft beschleunigt. Nun wird die Kraft **verdreifacht** und gleichzeitig die Masse **verdoppelt**. Um welchen Faktor ändert sich die Beschleunigung? (Gib den Faktor als Dezimalzahl an.)
teile:
  - typ: zahl
    loesung: "3/2"
    anzeige: '1{,}5'
    fehler:
      - wert: "6"
        meldung: Du hast beide Faktoren multipliziert. Die Masse steht aber im **Nenner** von $a = F/m$. Mehr Masse macht die Beschleunigung kleiner.
      - wert: "2/3"
        meldung: Du hast Kraft und Masse vertauscht. Die Kraft steht im Zähler, die Masse im Nenner.
hinweise:
  - Schreibe $a = F/m$ und ersetze $F$ durch $3F$ und $m$ durch $2m$.
  - Der Faktor ist $a_{\text{neu}}/a_{\text{alt}}$.
loesung: |
  **Ansatz:** $a = F/m$. Wir setzen die neuen Werte ein: $a_{\text{neu}} = \dfrac{3F}{2m}$.
  ---
  **Vergleich:** $\dfrac{a_{\text{neu}}}{a_{\text{alt}}} = \dfrac{3F/(2m)}{F/m} = \dfrac{3}{2} = 1{,}5$. $F$ und $m$ kürzen sich.
  ---
  **Antwort:** Die Beschleunigung wird $1{,}5$-mal so groß. Die Verdreifachung der Kraft wirkt stärker als die Verdoppelung der Masse.
```

```aufgabe
id: p3-vt-diagramm-kraft
titel: Kräfte aus einem v-t-Diagramm ablesen
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Experimentierwagen ($m = 4{,}0\,\text{kg}$) fährt auf einer geraden Bahn. Das Diagramm zeigt seine Geschwindigkeit. Bestimme den Betrag der resultierenden Kraft in den drei Abschnitten.
plot:
  x: [0, 9]
  y: [0, 4]
  achsen: { x: "t in s", y: "v in m/s" }
  strecken:
    - { von: [0, 0], nach: [3, 3], farbe: 0 }
    - { von: [3, 3], nach: [6, 3], farbe: 0 }
    - { von: [6, 3], nach: [8, 0], farbe: 0 }
  punkte:
    - { x: 3, y: 3, label: "(3 | 3)" }
    - { x: 6, y: 3, label: "(6 | 3)" }
    - { x: 8, y: 0, label: "8" }
teile:
  - typ: zahl
    label: 0 bis 3 s
    loesung: "4*3/3"
    einheit: "N"
    anzeige: '4'
    fehler:
      - wert: "4*3"
        meldung: Du hast Masse mal Geschwindigkeit gerechnet. Für die Kraft brauchst du die Beschleunigung, also die **Steigung** der Geraden.
  - typ: zahl
    label: 3 bis 6 s
    loesung: "0"
    einheit: "N"
    fehler:
      - wert: "12"
        meldung: Der Wagen fährt hier mit konstanter Geschwindigkeit. Die Steigung ist null, also auch die Beschleunigung und die resultierende Kraft. Bewegung braucht keine resultierende Kraft.
  - typ: zahl
    label: 6 bis 8 s (Betrag)
    loesung: "4*3/2"
    einheit: "N"
    anzeige: '6'
    fehler:
      - wert: "4*3/8"
        meldung: Du hast durch den Zeitpunkt $8\,\text{s}$ geteilt. Die Steigung ist Änderung durch **Zeitdauer**, hier $\Delta t = 8\,\text{s} - 6\,\text{s} = 2\,\text{s}$.
hinweise:
  - Die Beschleunigung ist die Steigung der Geraden im v-t-Diagramm, $a = \Delta v/\Delta t$.
  - Multipliziere jede Steigung mit der Masse. Achte bei $\Delta t$ auf die Dauer des Abschnitts.
loesung: |
  **Ansatz:** Steigung im v-t-Diagramm ist die Beschleunigung. Mit $F_{\text{res}} = m a$ wird daraus die Kraft.
  ---
  **0 bis 3 s:** $a = \dfrac{3\,\text{m/s}}{3\,\text{s}} = 1{,}0\,\text{m/s}^2$, also $F = 4{,}0\,\text{kg}\cdot 1{,}0\,\text{m/s}^2 = 4{,}0\,\text{N}$.
  ---
  **3 bis 6 s:** waagrechte Linie, $a = 0$, also $F_{\text{res}} = 0$.
  ---
  **6 bis 8 s:** $a = \dfrac{0 - 3\,\text{m/s}}{2\,\text{s}} = -1{,}5\,\text{m/s}^2$, also $|F| = 4{,}0\,\text{kg}\cdot 1{,}5\,\text{m/s}^2 = 6{,}0\,\text{N}$ entgegen der Fahrtrichtung. Die steilere Gerade gehört zur größeren Kraft. ✓
```

```aufgabe
id: p3-kies-foerderband
titel: Kies auf dem Förderband
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Auf ein waagrechtes Förderband fallen pro Sekunde $35\,\text{kg}$ Kies. Das Band läuft mit $2{,}0\,\text{m/s}$. Welche zusätzliche waagrechte Kraft muss der Antrieb aufbringen, um den Kies auf Bandgeschwindigkeit zu bringen?
teile:
  - typ: zahl
    loesung: "35*2"
    einheit: "N"
    anzeige: '70'
    fehler:
      - wert: "35*9.81"
        meldung: Das ist die Gewichtskraft des Kieses, der pro Sekunde ankommt. Die wirkt senkrecht und wird vom Band getragen. Gesucht ist die waagrechte Kraft, die den Impuls des Kieses ändert.
      - wert: "35/2"
        meldung: Du hast geteilt. Die Impulsänderung pro Sekunde ist Masse pro Sekunde **mal** Geschwindigkeit.
hinweise:
  - Hier ändert sich die Masse auf dem Band. Verwende die Impulsform $F = \Delta p/\Delta t$.
  - In einer Sekunde erhalten $35\,\text{kg}$ die Geschwindigkeit $2{,}0\,\text{m/s}$.
loesung: |
  **Modell:** Die Masse auf dem Band wächst laufend. Deshalb rechnen wir mit der Impulsform $F = \Delta p/\Delta t$.
  ---
  **Impulsänderung in einer Sekunde:** $\Delta p = 35\,\text{kg}\cdot 2{,}0\,\text{m/s} = 70\,\text{kg}\cdot\text{m/s}$.
  ---
  **Kraft:** $F = \dfrac{70\,\text{kg}\cdot\text{m/s}}{1\,\text{s}} = 70\,\text{N}$.
  ---
  **Plausibilität:** Doppelte Bandgeschwindigkeit oder doppelte Kiesmenge würde jeweils die doppelte Kraft verlangen. Beides steht als Faktor im Produkt. ✓
```

```aufgabe
id: p3-fermi-sprint
titel: "Abschätzen: Kraft auf einen Sprinter"
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Schätze die mittlere resultierende Kraft auf eine Sprinterin in der Startphase ab. Du kennst keine genauen Werte. Wähle sinnvolle runde Zahlen für Masse, erreichte Geschwindigkeit und Zeit bis dahin. In welcher Größenordnung liegt die Kraft?
teile:
  - typ: auswahl
    optionen:
      - "etwa $3\\,\\text{N}$"
      - "etwa $30\\,\\text{N}$"
      - "etwa $300\\,\\text{N}$"
      - "etwa $3000\\,\\text{N}$"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Viel zu klein. $3\,\text{N}$ ist die Gewichtskraft von etwa $300\,\text{g}$. Damit käme eine erwachsene Sprinterin kaum vom Fleck. Rechne mit $a = \Delta v/\Delta t$ und $F = m a$.
      - wert: 1
        meldung: |
          Zu klein. Mit $30\,\text{N}$ würde eine Person mit $70\,\text{kg}$ nur mit etwa $0{,}4\,\text{m/s}^2$ beschleunigen und bräuchte $25\,\text{s}$ bis $10\,\text{m/s}$.
      - wert: 3
        meldung: |
          Zu groß. $3000\,\text{N}$ ist mehr als das Vierfache der Gewichtskraft einer Sprinterin. Sie wäre nach einer halben Sekunde schon $20\,\text{m/s}$ schnell.
hinweise:
  - 'Masse etwa $70\,\text{kg}$. Spitzensprinter erreichen etwa $10\,\text{m/s}$. Wie lange dauert es ungefähr, bis sie fast die Endgeschwindigkeit haben?'
  - Berechne zuerst die mittlere Beschleunigung $a = \Delta v/\Delta t$, dann $F = m a$.
loesung: |
  **Modell:** Wir nehmen eine gleichmäßige Beschleunigung in der Startphase an. Annahmen: $m \approx 70\,\text{kg}$, $v \approx 10\,\text{m/s}$ nach $t \approx 2\,\text{s}$.
  ---
  **Beschleunigung:** $a \approx \dfrac{10\,\text{m/s}}{2\,\text{s}} = 5\,\text{m/s}^2$.
  ---
  **Kraft:** $F \approx 70\,\text{kg}\cdot 5\,\text{m/s}^2 = 350\,\text{N}$. Werte zwischen etwa $150\,\text{N}$ und $600\,\text{N}$ sind je nach Annahmen vernünftig.
  ---
  **Plausibilität:** Das ist rund die Hälfte der Gewichtskraft. Die Kraft kommt vom Boden: Die Sprinterin drückt mit den Füßen nach hinten, der Boden drückt sie nach vorn (drittes Axiom).
```

```aufgabe
id: p3-flugzeug-start
titel: Startstrecke eines Flugzeugs
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Passagierflugzeug hat beim Start die Masse $70\,\text{t}$. Seine zwei Triebwerke liefern zusammen einen Schub von $240\,\text{kN}$. Zum Abheben braucht es $75\,\text{m/s}$. Reibung und Luftwiderstand vernachlässigen wir.

  a) Wie groß ist die Beschleunigung auf der Startbahn?

  b) Wie lang muss die Startbahn mindestens sein?
teile:
  - typ: zahl
    label: a) Beschleunigung
    loesung: "240000/70000"
    einheit: "m/s²"
    anzeige: '3{,}43'
    fehler:
      - wert: "240000/70"
        meldung: Du hast die Masse in Tonnen eingesetzt, die Kraft aber in Newton. $70\,\text{t} = 70\,000\,\text{kg}$.
  - typ: zahl
    label: b) Startstrecke
    loesung: "75^2/(2*240000/70000)"
    einheit: "m"
    anzeige: '820'
    fehler:
      - wert: "75^2/(240000/70000)"
        meldung: Du hast den Faktor $2$ in $v^2 = 2as$ vergessen. Die Strecke wird dadurch doppelt so groß.
hinweise:
  - Rechne zuerst in SI-Einheiten um, dann $a = F/m$.
  - 'Für die Strecke ohne Zeitangabe: $v^2 = 2as$, also $s = v^2/(2a)$.'
loesung: |
  **Modell:** Konstanter Schub, keine bremsenden Kräfte. Dann ist der Schub die resultierende Kraft, und die Beschleunigung ist konstant. SI-Einheiten: $F = 240\,000\,\text{N}$, $m = 70\,000\,\text{kg}$.
  ---
  **a)** $a = \dfrac{F}{m} = \dfrac{240\,000\,\text{N}}{70\,000\,\text{kg}} = 3{,}43\,\text{m/s}^2$.
  ---
  **b)** Zeitfreie Gleichung: $s = \dfrac{v^2}{2a} = \dfrac{(75\,\text{m/s})^2}{2\cdot 3{,}43\,\text{m/s}^2} = \dfrac{5625\,\text{m}^2/\text{s}^2}{6{,}86\,\text{m/s}^2} = 820\,\text{m}$.
  ---
  **Plausibilität:** Echte Startbahnen sind 2 bis 4 km lang. Der Grund: Luftwiderstand und Rollreibung bremsen, und man braucht Reserve für einen Startabbruch. Unser Modell gibt also eine Untergrenze.
```

## Das dritte Newtonsche Axiom: Kräfte treten paarweise auf

```aufgabe
id: p3-3-check
art: check
titel: "Vorhersage: Gegen die Wand drücken"
niveau: 1
angabe: |
  Du stehst auf Inlineskates vor einer Wand und drückst mit beiden Händen kräftig gegen die Wand. Was passiert mit dir?
teile:
  - typ: auswahl
    optionen:
      - "Ich rolle von der Wand weg nach hinten."
      - "Nichts, denn ich drücke ja gegen die Wand und nicht gegen mich."
      - "Ich rolle zur Wand hin."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Probier es aus, wenn du kannst. Du rollst nach hinten. Also muss auf **dich** eine Kraft wirken, obwohl du gegen die Wand drückst. Woher sie kommt, erklärt dieser Abschnitt.
      - wert: 2
        meldung: Deine Hände drücken die Wand von dir weg. Auf dich wirkt dabei eine Kraft in die Gegenrichtung, also von der Wand weg.
hinweise:
  - Nach dem ersten Axiom setzt du dich nur in Bewegung, wenn eine Kraft auf **dich** wirkt.
loesung: |
  Du rollst nach hinten. Nach dem ersten Axiom ([3.1 Kraft und Trägheit](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom): Ohne resultierende Kraft bleibt man in Ruhe) braucht das eine Kraft auf dich.
  ---
  Diese Kraft übt die Wand auf deine Hände aus. Sie entsteht, weil du auf die Wand drückst. Genau das beschreibt das dritte Axiom.
```

Wenn du gegen eine Wand drückst, spürst du an den Handflächen einen Gegendruck. Stehst du auf Rollen,
schiebt dich dieser Gegendruck sogar weg. Stößt du dich von einem Bootssteg ab, bewegt sich das Boot vom
Steg weg. Es gibt keine Kraft, die ein Körper nur „ausübt“, ohne selbst eine zu spüren.

:::satz[Drittes Newtonsches Axiom (Wechselwirkungsprinzip, actio = reactio)]
Übt ein Körper A auf einen Körper B die Kraft $\vec F_{A\to B}$ aus, so übt B auf A die Kraft
$$\vec F_{B\to A} = -\vec F_{A\to B}$$
aus. Die beiden Kräfte sind **gleich groß** und **entgegengesetzt gerichtet**. Sie greifen an
**verschiedenen** Körpern an und sind von **derselben Art** (beide Kontaktkräfte oder beide Gravitation).
:::

Das Minuszeichen bedeutet „gleicher Betrag, umgekehrte Richtung“. Die lateinischen Wörter **actio**
(Wirkung) und **reactio** (Gegenwirkung) sind dabei nur Namen. Keine der beiden Kräfte ist zuerst da.
Sie entstehen gleichzeitig und verschwinden gleichzeitig.

- **Beispiel:** Die Erde zieht einen Apfel mit $1{,}5\,\text{N}$ nach unten. Gleichzeitig zieht der Apfel
  die Erde mit $1{,}5\,\text{N}$ nach oben. Beide Kräfte sind Gravitation, sie greifen an verschiedenen
  Körpern an.
- **Kein Beispiel:** Ein Buch liegt auf dem Tisch. Die Gewichtskraft (Erde zieht Buch) und die
  Normalkraft (Tisch drückt Buch) sind zwar gleich groß und entgegengesetzt. Sie sind aber **kein**
  Wechselwirkungspaar, denn beide greifen am **selben** Körper an, dem Buch.

Die **Normalkraft** $F_N$ ist die Kraft, mit der eine Unterlage einen Körper senkrecht zu ihrer
Oberfläche wegdrückt. „Normal“ heißt hier „senkrecht“. Mehr dazu in
[3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).

### Wechselwirkungspaar oder Kräftegleichgewicht?

Diese Unterscheidung ist die wichtigste Prüfungsfrage zu diesem Axiom. Das Bild zeigt das Buch und den
Tisch auseinandergezogen, damit man sieht, welche Kraft an welchem Körper angreift.

```plot
x: [-1, 11]
y: [-4, 4.5]
gleich: true
strecken:
  - { von: [1, 1], nach: [3, 1] }
  - { von: [3, 1], nach: [3, 2] }
  - { von: [3, 2], nach: [1, 2] }
  - { von: [1, 2], nach: [1, 1] }
  - { von: [5.5, 1], nach: [9.5, 1] }
  - { von: [6, 1], nach: [6, -1] }
  - { von: [9, 1], nach: [9, -1] }
  - { von: [4.5, -3], nach: [10.5, -3] }
vektoren:
  - { von: [2, 1.5], nach: [2, -0.5], label: "Erde zieht Buch", farbe: 0 }
  - { von: [2, 1.5], nach: [2, 3.5], label: "Tisch drückt Buch", farbe: 2 }
  - { von: [7.5, 1], nach: [7.5, -1], label: "Buch drückt Tisch", farbe: 2 }
  - { von: [7.5, -3], nach: [7.5, -1], label: "Buch zieht Erde", farbe: 0 }
punkte:
  - { x: 2, y: 1.5, label: "Buch" }
  - { x: 9.5, y: 1, label: "Tisch" }
  - { x: 10.5, y: -3, label: "Erde" }
beschriftung: "Links das Freikörperbild des Buches: Gewichtskraft (blau, Erde zieht Buch) und Normalkraft (grün, Tisch drückt Buch). Sie heben sich auf, das ist ein Kräftegleichgewicht. Rechts die Wechselwirkungspartner: Das Buch drückt auf den Tisch (grün, Partner der Normalkraft) und zieht die Erde an (blau, Partner der Gewichtskraft). Gleiche Farbe bedeutet: dasselbe Wechselwirkungspaar."
```

Daraus ergibt sich eine Prüfliste. Zwei gleich große, entgegengesetzte Kräfte bilden ein
**Wechselwirkungspaar**, wenn alle drei Punkte stimmen:

1. Sie wirken zwischen **denselben zwei Körpern**, einmal A auf B und einmal B auf A.
2. Sie greifen an **verschiedenen** Körpern an.
3. Sie sind von **derselben Art**.

Ein **Kräftegleichgewicht** dagegen besteht aus Kräften, die am **selben** Körper angreifen und sich zu
null addieren. Das ist nur dann der Fall, wenn der Körper nicht beschleunigt. Ein Wechselwirkungspaar ist
dagegen **immer** gleich groß, auch wenn alles beschleunigt.

Daraus folgt der wichtigste Satz dieses Abschnitts: **Actio und reactio heben sich nie auf.** Aufheben
können sich nur Kräfte am selben Körper. Ob ein Körper beschleunigt, hängt nur von den Kräften ab, die auf
**ihn** wirken.

:::beispiel[Was zeigt eine Personenwaage?]
Eine Person mit $65\,\text{kg}$ steht ruhig auf einer Personenwaage. Mit welcher Kraft drückt sie auf die
Waage? Viele antworten sofort „mit ihrer Gewichtskraft“. Das Ergebnis stimmt, die Begründung braucht aber
zwei verschiedene Axiome.

**Schritt 1, Freikörperbild der Person:** Auf die Person wirken die Gewichtskraft $F_G$ (die Erde zieht
nach unten) und die Normalkraft $F_N$ (die Waage drückt nach oben).

**Schritt 2, erstes Axiom:** Die Person ruht, also ist die resultierende Kraft null. Daher ist
$F_N = F_G = m g = 65\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 638\,\text{N}$.

**Schritt 3, drittes Axiom:** Die Waage drückt die Person mit $638\,\text{N}$ nach oben. Also drückt
die Person die Waage mit $638\,\text{N}$ nach unten. Das ist der Wechselwirkungspartner der Normalkraft.

**Ergebnis:** Die Kraft auf die Waage beträgt $638\,\text{N}$. Sie ist aber **nicht** die Gewichtskraft.
Die Gewichtskraft greift an der Person an, nicht an der Waage. Dass beide gleich groß sind, gilt nur ohne
Beschleunigung. Im anfahrenden Lift ist es anders, siehe
[3.9 Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit).
:::

:::beispiel[Zwei Eisläufer stoßen sich ab]
Zwei Eisläufer stehen sich gegenüber und stoßen sich mit den Händen ab. Läufer A hat $80\,\text{kg}$,
Läuferin B hat $50\,\text{kg}$. Während des Abstoßens drückt A die Läuferin B mit $120\,\text{N}$. Wie
groß sind die Beschleunigungen? Die Reibung auf dem Eis vernachlässigen wir.

**Schritt 1, drittes Axiom:** B drückt A mit genau $120\,\text{N}$ zurück, in die Gegenrichtung.

**Schritt 2, Grundgesetz für jeden Körper einzeln:**
$a_A = \dfrac{120\,\text{N}}{80\,\text{kg}} = 1{,}5\,\text{m/s}^2$ und
$a_B = \dfrac{120\,\text{N}}{50\,\text{kg}} = 2{,}4\,\text{m/s}^2$.

**Deutung:** Die Kräfte sind gleich groß, die Wirkungen nicht. Die leichtere Läuferin wird stärker
beschleunigt. „Gleiche Kraft“ heißt nicht „gleiche Bewegung“.
:::

:::achtung[Fehler: actio und reactio gegeneinander verrechnen]
„Das Pferd zieht den Wagen mit $800\,\text{N}$. Der Wagen zieht das Pferd mit $800\,\text{N}$ zurück.
Also ist $F_{\text{res}} = 800\,\text{N} - 800\,\text{N} = 0$, und das Gespann kann nie anfahren.“

Hier wurden zwei Kräfte verrechnet, die an **verschiedenen** Körpern angreifen. Das ist verboten. Für den
Wagen zählen nur die Kräfte auf den Wagen: $800\,\text{N}$ nach vorn und zum Beispiel $300\,\text{N}$
Rollreibung nach hinten. Seine resultierende Kraft ist $500\,\text{N}$, er fährt an.
:::

:::achtung[Fehler: „Der Stärkere übt die größere Kraft aus“]
Ein Pkw ($1000\,\text{kg}$) stößt frontal mit einem Lkw ($10\,\text{t}$) zusammen. Ein Schüler meint:
„Der Lkw drückt den Pkw mit $50\,\text{kN}$, der Pkw den Lkw nur mit $5\,\text{kN}$.“

Falsch. Nach dem dritten Axiom sind beide Kräfte gleich groß, hier je $50\,\text{kN}$. Verschieden sind
die **Beschleunigungen**: Pkw $50\,000\,\text{N}/1000\,\text{kg} = 50\,\text{m/s}^2$, Lkw
$50\,000\,\text{N}/10\,000\,\text{kg} = 5{,}0\,\text{m/s}^2$. Deshalb ist der Unfall im Pkw so viel gefährlicher.
:::

### Das Pferd-Wagen-Paradoxon

Ein Pferd zieht einen Wagen. Nach dem dritten Axiom zieht der Wagen das Pferd gleich stark zurück. Wie
kann das Gespann dann anfahren? Die Lösung: Man darf nie fragen „Was macht das Paar?“, sondern immer nur
„Welche Kräfte wirken auf **diesen einen** Körper?“.

```plot
x: [-3, 12]
y: [-1.5, 3.5]
gleich: true
strecken:
  - { von: [0, 0], nach: [2.5, 0] }
  - { von: [2.5, 0], nach: [2.5, 1.5] }
  - { von: [2.5, 1.5], nach: [0, 1.5] }
  - { von: [0, 1.5], nach: [0, 0] }
  - { von: [6, 0], nach: [8.5, 0] }
  - { von: [8.5, 0], nach: [8.5, 2] }
  - { von: [8.5, 2], nach: [6, 2] }
  - { von: [6, 2], nach: [6, 0] }
  - { von: [-3, -0.05], nach: [12, -0.05], gestrichelt: true }
vektoren:
  - { von: [2.5, 0.6], nach: [4.7, 0.6], label: "Pferd zieht Wagen", farbe: 1 }
  - { von: [0, 0.2], nach: [-1.3, 0.2], label: "Reibung", farbe: 3 }
  - { von: [6, 1.4], nach: [3.8, 1.4], label: "Wagen zieht Pferd", farbe: 1 }
  - { von: [7.25, 0], nach: [10.5, 0], label: "Boden schiebt Pferd", farbe: 2 }
punkte:
  - { x: 1.25, y: 0.75, label: "Wagen" }
  - { x: 7.25, y: 1, label: "Pferd" }
beschriftung: "Waagrechte Kräfte auf Wagen (links) und Pferd (rechts). Die beiden orangen Kräfte sind ein Wechselwirkungspaar, sie greifen an verschiedenen Körpern an. Den Wagen beschleunigt der Unterschied zwischen Zugkraft und Reibung, das Pferd der Unterschied zwischen Bodenkraft und Zugkraft des Wagens. Die senkrechten Kräfte (Gewicht, Normalkraft) heben sich jeweils auf und sind weggelassen."
```

- **Kräfte auf den Wagen:** Das Pferd zieht ihn nach vorn, die Rollreibung bremst nach hinten. Ist die
  Zugkraft größer, beschleunigt der Wagen.
- **Kräfte auf das Pferd:** Der Wagen zieht es nach hinten. Das Pferd stemmt die Hufe nach hinten gegen
  den Boden. Nach dem dritten Axiom schiebt der Boden das Pferd nach vorn (das ist Haftreibung). Ist diese
  Bodenkraft größer als der Zug des Wagens, beschleunigt das Pferd.

Was das ganze Gespann antreibt, ist also eine Kraft **von außen**: der Boden, der die Hufe nach vorn
schiebt. Die beiden Kräfte zwischen Pferd und Wagen sind **innere Kräfte** des Gespanns. Sie heben sich
für das Gespann als Ganzes auf, für jeden einzelnen Körper aber nicht.

**Rückstoß.** Eine Rakete stößt heißes Gas mit großer Geschwindigkeit nach hinten aus. Sie übt dabei eine
Kraft auf das Gas aus, und das Gas übt eine gleich große Kraft nach vorn auf die Rakete aus. Die Rakete
braucht also keine Luft, „gegen die sie sich abstößt“. Im Vakuum funktioniert sie sogar besser, weil kein
Luftwiderstand bremst.

### Die Federwaage zwischen zwei Gewichten

:::beispiel[Was zeigt die Federwaage?]
Eine Federwaage hängt waagrecht zwischen zwei Rollen. An jedem Ende hängt über eine Rolle ein Gewichtsstück
mit $10\,\text{N}$ Gewichtskraft. Zeigt die Waage $0\,\text{N}$, $10\,\text{N}$ oder $20\,\text{N}$?

**Schritt 1, Vergleichsfall:** Hängt man die Waage mit einem Ende an einen Haken in der Wand und hängt an
das andere Ende $10\,\text{N}$, zeigt sie $10\,\text{N}$. Dabei zieht auch der Haken mit $10\,\text{N}$,
sonst würde die Waage wegfliegen.

**Schritt 2, Vergleich:** Im Versuch mit zwei Gewichten übernimmt das linke Gewichtsstück die Rolle des
Hakens. An beiden Enden ziehen wieder je $10\,\text{N}$. Für die Waage ist das genau dieselbe Situation.

**Ergebnis:** Die Waage zeigt $10\,\text{N}$. Eine Federwaage zeigt immer die Kraft an **einem** Ende an.
Im Gleichgewicht ziehen an beiden Enden gleich große Kräfte.
:::

```reflexion
frage: Die Erde zieht einen fallenden Apfel genauso stark an wie der Apfel die Erde. Warum fällt dann der Apfel zur Erde und nicht die Erde merklich zum Apfel?
antwort: |
  Die Kräfte sind gleich groß, aber die Massen sind extrem verschieden. Nach $a = F/m$ bekommt der Apfel bei
  $1{,}5\,\text{N}$ und $0{,}15\,\text{kg}$ die Beschleunigung $10\,\text{m/s}^2$. Die Erde hat etwa $6\cdot 10^{24}\,\text{kg}$,
  ihre Beschleunigung ist also unmessbar klein, ungefähr $2{,}5\cdot 10^{-25}\,\text{m/s}^2$. Gleiche Kraft heißt nicht gleiche Wirkung.
```

### Aufgaben zum dritten Axiom

```aufgabe
id: p3-gewicht
titel: Mit welcher Kraft drückt die Person auf die Waage?
niveau: 1
lernziel: 2
kompetenz: begruenden
angabe: |
  Eine Person mit $m = 80\,\text{kg}$ steht ruhig auf einer Personenwaage ($g = 9{,}81\,\text{m/s}^2$). Mit welcher Kraft drückt sie auf die Waage? Gib das Ergebnis mit drei signifikanten Stellen an.
teile:
  - typ: zahl
    loesung: "80*9.81"
    einheit: "N"
    anzeige: '785'
    fehler:
      - wert: "0"
        meldung: Null ist die **resultierende** Kraft auf die Person, weil sich Gewichtskraft und Normalkraft an ihr aufheben. Gefragt ist aber die Kraft, die **auf die Waage** wirkt. Die ist nicht null, sonst würde die Waage nichts anzeigen.
      - wert: "80"
        meldung: Das ist die Masse in kg. Eine Kraft hat die Einheit Newton.
hinweise:
  - Zeichne zuerst das Freikörperbild der Person. Welche zwei Kräfte wirken auf sie, und was folgt daraus, dass sie ruht?
  - Die Kraft der Person auf die Waage ist der Wechselwirkungspartner einer der beiden Kräfte aus Hinweis 1. Welcher?
loesung: |
  **Ansatz:** Gesucht ist eine Kraft **auf die Waage**. Wir bestimmen sie in zwei Schritten: erst das Gleichgewicht an der Person, dann das dritte Axiom.
  ---
  **Gleichgewicht an der Person:** Auf die Person wirken die Gewichtskraft $F_G = m g$ (nach unten) und die Normalkraft $F_N$ der Waage (nach oben). Die Person ruht, also ist $F_N = F_G = 80\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 784{,}8\,\text{N}$.
  ---
  **Drittes Axiom:** Die Waage drückt die Person mit $F_N$ nach oben. Also drückt die Person die Waage mit gleich großer Kraft nach unten.
  ---
  **Ergebnis:** $785\,\text{N}$ (drei signifikante Stellen). Das ist nicht die Gewichtskraft selbst, denn die greift an der Person an. Es ist der Wechselwirkungspartner der Normalkraft, der nur im Gleichgewicht gleich groß wie $F_G$ ist.
```

```aufgabe
id: p3-paar-partner
titel: Der Partner der Gewichtskraft
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Die Erde zieht einen fallenden Apfel mit $1{,}5\,\text{N}$ nach unten. Welche Kraft ist der Wechselwirkungspartner dieser Kraft im Sinne des dritten Axioms?
teile:
  - typ: auswahl
    optionen:
      - "Der Apfel zieht die Erde mit $1{,}5\\,\\text{N}$ nach oben."
      - "Der Luftwiderstand drückt den Apfel nach oben."
      - "Es gibt keinen Partner, weil der Apfel frei fällt."
      - "Der Apfel zieht die Erde mit einer viel kleineren Kraft an, weil er so leicht ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Luftwiderstand wirkt am **selben** Körper, dem Apfel, und ist eine andere Kraftart. Ein Wechselwirkungspartner greift am anderen Körper an, hier an der Erde.
      - wert: 2
        meldung: Jede Kraft hat einen Partner, auch wenn sich ein Körper bewegt. Das dritte Axiom gilt immer, nicht nur im Gleichgewicht.
      - wert: 3
        meldung: Die Kräfte sind immer gleich groß, unabhängig von den Massen. Nur die **Beschleunigungen** sind verschieden.
hinweise:
  - Zwischen welchen zwei Körpern wirkt die Gewichtskraft?
loesung: |
  **Ansatz:** Die Gewichtskraft ist eine Wechselwirkung zwischen Erde und Apfel. Der Partner ist die Kraft vom Apfel auf die Erde.
  ---
  **Ergebnis:** Der Apfel zieht die Erde mit $1{,}5\,\text{N}$ nach oben. Gleich groß, entgegengesetzt, gleiche Art (Gravitation), anderer Körper.
```

```aufgabe
id: p3-federwaage-zwei-gewichte
titel: Federwaage zwischen zwei Gewichten
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine Federwaage liegt waagrecht zwischen zwei festen Rollen. An jedem Ende der Waage ist ein Faden befestigt, der über eine Rolle läuft. An jedem Faden hängt ein Gewichtsstück mit $15\,\text{N}$ Gewichtskraft. Alles ist in Ruhe. Was zeigt die Waage an?
teile:
  - typ: auswahl
    optionen:
      - "$0\\,\\text{N}$"
      - "$15\\,\\text{N}$"
      - "$30\\,\\text{N}$"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die beiden Fäden ziehen zwar in entgegengesetzte Richtungen, sodass die resultierende Kraft auf die Waage null ist. Die Feder wird aber trotzdem gedehnt. Sie zeigt an, wie stark an ihren Enden gezogen wird.
      - wert: 2
        meldung: Die Kräfte an den beiden Enden addieren sich nicht. Auch eine an der Wand befestigte Waage wird an beiden Enden gezogen (der Haken zieht mit). Trotzdem zeigt sie nur die Kraft an einem Ende.
hinweise:
  - Vergleiche mit einer Waage, die an einem Wandhaken hängt und an der $15\,\text{N}$ ziehen. Mit welcher Kraft zieht dort der Haken?
  - Das linke Gewichtsstück übernimmt die Rolle des Hakens.
loesung: |
  **Ansatz:** Eine Federwaage zeigt die Kraft an, mit der an **einem** ihrer Enden gezogen wird. Im Gleichgewicht ziehen an beiden Enden gleich große Kräfte.
  ---
  **Vergleich:** Am Wandhaken zieht der Haken mit $15\,\text{N}$ gegen. Hier ersetzt das zweite Gewichtsstück den Haken. Für die Waage ändert sich nichts.
  ---
  **Ergebnis:** Die Waage zeigt $15\,\text{N}$. Die resultierende Kraft auf die Waage ist null, aber sie ist gespannt.
```

```aufgabe
id: p3-schlaeger-ball
titel: Tennisschläger und Ball
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Tennisschläger trifft einen Ball ($m = 58\,\text{g}$). Während des kurzen Kontakts übt der Schläger im Mittel eine Kraft von $230\,\text{N}$ auf den Ball aus.

  a) Wie groß ist die Kraft, die der Ball auf den Schläger ausübt?

  b) Wie groß ist die mittlere Beschleunigung des Balls?
teile:
  - typ: zahl
    label: a) Kraft auf den Schläger
    loesung: "230"
    einheit: "N"
    fehler:
      - wert: "0"
        meldung: Der Ball wirkt auf den Schläger zurück, das spürst du in der Hand. Nach dem dritten Axiom ist diese Kraft genauso groß wie die Kraft auf den Ball.
  - typ: zahl
    label: b) Beschleunigung des Balls
    loesung: "230/0.058"
    einheit: "m/s²"
    anzeige: '3966 \approx 3{,}97\cdot 10^{3}'
    fehler:
      - wert: "230/58"
        meldung: Du hast die Masse in Gramm eingesetzt. Für Newton muss die Masse in kg stehen, $58\,\text{g} = 0{,}058\,\text{kg}$.
hinweise:
  - Für a) gilt das dritte Axiom, die Massen spielen keine Rolle.
  - Für b) gilt $a = F/m$ mit der Masse in kg.
loesung: |
  **a) Drittes Axiom:** Der Ball drückt den Schläger mit gleich großer Kraft zurück, also mit $230\,\text{N}$, entgegen der Schlagrichtung.
  ---
  **b) Grundgesetz für den Ball:** $a = \dfrac{F}{m} = \dfrac{230\,\text{N}}{0{,}058\,\text{kg}} = 3{,}97\cdot 10^3\,\text{m/s}^2$.
  ---
  **Deutung:** Das ist rund das 400-Fache der Fallbeschleunigung. Der Schläger spürt dieselbe Kraft, wird aber wegen seiner viel größeren Masse (und weil der Arm ihn hält) kaum gebremst.
```

```aufgabe
id: p3-actio-reactio-paar
titel: Kräftepaare erkennen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Ein Apfel hängt ruhig an einem Zweig. Welche der folgenden Kräftepaare sind **Wechselwirkungspaare** im Sinne des dritten Axioms? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Erde zieht Apfel nach unten; Zweig zieht Apfel nach oben"
      - "Erde zieht Apfel nach unten; Apfel zieht Erde nach oben"
      - "Zweig zieht Apfel nach oben; Apfel zieht Zweig nach unten"
      - "Apfel zieht Zweig nach unten; Erde zieht Apfel nach unten"
    richtig: [1, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: Paar 1 greift zweimal am Apfel an. Das ist das Kräftegleichgewicht, das den Apfel in Ruhe hält, kein Wechselwirkungspaar.
      - wert: [0]
        meldung: Beide Kräfte greifen am Apfel an. Ein Wechselwirkungspaar wirkt zwischen zwei Körpern in beide Richtungen, also einmal **auf** den Apfel und einmal **vom** Apfel aus.
      - wert: [1, 2, 3]
        meldung: Paar 4 verbindet zwei verschiedene Wechselwirkungen (Apfel–Zweig und Erde–Apfel) und zeigt sogar in dieselbe Richtung. Das kann kein Paar sein.
hinweise:
  - Ein Wechselwirkungspaar besteht aus zwei Kräften zwischen denselben zwei Körpern, die an verschiedenen Körpern angreifen.
  - Prüfe bei jedem Paar, an welchem Körper jede der beiden Kräfte angreift.
loesung: |
  **Kriterium:** Dieselben zwei Körper, einmal A auf B und einmal B auf A, gleiche Kraftart.
  ---
  **Paar 1** greift beide Male am Apfel an: Das ist das Gleichgewicht, kein Wechselwirkungspaar. **Paar 4** gehört zu zwei verschiedenen Wechselwirkungen.
  ---
  **Paare 2 und 3** erfüllen alle Bedingungen (Erde und Apfel, Gravitation; Zweig und Apfel, Kontaktkraft). Das sind actio und reactio.
```

```aufgabe
id: p3-boote
titel: Zwei Boote am Seil
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Eine Person sitzt in Boot A (Person und Boot zusammen $150\,\text{kg}$). Sie zieht an einem Seil, das an Boot B ($100\,\text{kg}$) befestigt ist, mit $60\,\text{N}$. Den Wasserwiderstand vernachlässigen wir. Wie groß sind die Beschleunigungen der beiden Boote?
teile:
  - typ: zahl
    label: Beschleunigung von Boot A
    loesung: "60/150"
    einheit: "m/s²"
    anzeige: '0{,}4'
    fehler:
      - wert: "0"
        meldung: Boot A bleibt nicht in Ruhe. Das Seil zieht auch an Boot A, und zwar mit derselben Kraft wie an Boot B (drittes Axiom).
      - wert: "60/250"
        meldung: Du hast die Gesamtmasse beider Boote genommen. Jedes Boot wird einzeln mit $60\,\text{N}$ gezogen, also teilt jedes Boot nur durch seine eigene Masse.
  - typ: zahl
    label: Beschleunigung von Boot B
    loesung: "60/100"
    einheit: "m/s²"
    anzeige: '0{,}6'
    fehler:
      - wert: "60/250"
        meldung: Du hast die Gesamtmasse beider Boote genommen. Auf Boot B wirken die $60\,\text{N}$ allein, also teilst du nur durch seine Masse.
hinweise:
  - Wie groß ist die Kraft, die das Seil auf Boot A ausübt? Denke an das dritte Axiom.
  - Wende dann $a = F/m$ auf jedes Boot einzeln an.
gefuehrt:
  - text: Mit welcher Kraft (in N) zieht das Seil an Boot B?
    teil: { typ: zahl, loesung: "60" }
    erklaerung: Die Person zieht mit $60\,\text{N}$, das Seil gibt diese Kraft an Boot B weiter.
  - text: Mit welcher Kraft (in N) wird Boot A zu Boot B hingezogen?
    teil: { typ: zahl, loesung: "60" }
    erklaerung: Nach dem dritten Axiom zieht das Seil die Person (und damit Boot A) mit gleich großer Kraft in die Gegenrichtung.
  - text: Berechne die Beschleunigung von Boot A in $\text{m/s}^2$.
    teil: { typ: zahl, loesung: "60/150" }
    erklaerung: '$a_A = 60\,\text{N} / 150\,\text{kg} = 0{,}40\,\text{m/s}^2$.'
  - text: Berechne die Beschleunigung von Boot B in $\text{m/s}^2$.
    teil: { typ: zahl, loesung: "60/100" }
    erklaerung: '$a_B = 60\,\text{N} / 100\,\text{kg} = 0{,}60\,\text{m/s}^2$. Das leichtere Boot wird stärker beschleunigt.'
loesung: |
  **Ansatz:** Das Seil überträgt die Kraft. Nach dem dritten Axiom wirken auf beide Boote gleich große, entgegengesetzte Kräfte von $60\,\text{N}$.
  ---
  **Boot A:** $a_A = \dfrac{60\,\text{N}}{150\,\text{kg}} = 0{,}40\,\text{m/s}^2$, in Richtung Boot B.
  ---
  **Boot B:** $a_B = \dfrac{60\,\text{N}}{100\,\text{kg}} = 0{,}60\,\text{m/s}^2$, in Richtung Boot A.
  ---
  **Probe:** $150\,\text{kg}\cdot 0{,}40\,\text{m/s}^2 = 100\,\text{kg}\cdot 0{,}60\,\text{m/s}^2 = 60\,\text{N}$, also wirkt auf beide Boote dieselbe Kraft. ✓ Die Boote bewegen sich aufeinander zu.
```

```aufgabe
id: p3-pferd-wagen
titel: Das Pferd-Wagen-Paradoxon widerlegen
niveau: 3
lernziel: 2
kompetenz: begruenden
angabe: |
  „Wenn der Wagen das Pferd genauso stark zurückzieht wie das Pferd den Wagen, kann sich das Gespann nie in Bewegung setzen.“ Widerlege diese Aussage mit einer sauberen Kräftebetrachtung. Nenne dabei für Pferd und Wagen getrennt alle waagrechten Kräfte.
teile:
  - typ: text
    muster: |
      Actio und reactio greifen an verschiedenen Körpern an und heben sich deshalb nicht auf. Ob ein Körper beschleunigt,
      hängt nur von den Kräften auf ihn selbst ab. Auf den Wagen wirken die Zugkraft des Pferdes nach vorn und die Rollreibung
      nach hinten. Ist die Zugkraft größer, beschleunigt der Wagen. Auf das Pferd wirken die Zugkraft des Wagens nach hinten und
      die Kraft des Bodens an den Hufen nach vorn (Haftreibung; Reaktion darauf, dass das Pferd den Boden nach hinten drückt).
      Ist diese größer, beschleunigt das Pferd. Insgesamt wird das Gespann von der äußeren Kraft des Bodens angetrieben, die
      Kräfte zwischen Pferd und Wagen sind innere Kräfte.
hinweise:
  - Zeichne getrennte Freikörperbilder für Pferd und Wagen. Welche Kräfte darf man in einem Freikörperbild verrechnen?
  - Welche äußere Kraft treibt das ganze Gespann an? Woher kommt sie?
loesung: |
  **Kernfehler der Aussage:** Sie verrechnet zwei Kräfte, die an **verschiedenen** Körpern angreifen. Das dritte Axiom sagt nur, dass sie gleich groß sind, nicht, dass sie sich aufheben.
  ---
  **Wagen:** Zugkraft des Pferdes vorwärts, Rollreibung rückwärts. Zugkraft größer, also beschleunigt er.
  ---
  **Pferd:** Zugkraft des Wagens rückwärts, Kraft des Bodens an den Hufen vorwärts (Haftreibung). Bodenkraft größer, also beschleunigt es.
  ---
  **Ganzes Gespann:** Die Kräfte zwischen Pferd und Wagen sind innere Kräfte. Angetrieben wird das Gespann von außen, durch den Boden. Damit ist die Aussage widerlegt.
```

## Gewichtskraft, Normalkraft, Federkraft und Seilkraft

```aufgabe
id: p3-4-check
art: check
titel: "Vorwissen: Proportionalität"
niveau: 1
angabe: |
  Eine Größe $y$ ist proportional zu $x$, also $y = k\cdot x$ mit einer festen Zahl $k$. Bei $x = 2$ ist $y = 6$. Wie groß ist $y$ bei $x = 5$?
teile:
  - typ: zahl
    loesung: "6/2*5"
    anzeige: '15'
    fehler:
      - wert: "9"
        meldung: Du hast $3$ addiert, weil $x$ um $3$ gewachsen ist. Bei Proportionalität wird aber **multipliziert**. $x$ wird $2{,}5$-mal so groß, also auch $y$.
hinweise:
  - Bestimme zuerst $k = y/x$.
loesung: |
  $k = \dfrac{6}{2} = 3$.
  ---
  $y = 3\cdot 5 = 15$. Proportionalität heißt: Der Graph ist eine Gerade durch den Ursprung. Siehe Mathematik, [Funktionen](/lernen/mathe3/funktionen).
```

Für jede Rechnung brauchst du Formeln für die Kräfte, die tatsächlich auftreten. Man unterscheidet zwei
Gruppen. **Fernkräfte** wirken ohne Berührung: Gravitation, elektrische und magnetische Kräfte.
**Kontaktkräfte** wirken nur bei Berührung: Normalkraft, Reibung, Seilkraft, Federkraft. Kontaktkräfte
entstehen im Kleinen durch elektrische Kräfte zwischen den Atomen der Oberflächen, die sich berühren.

### Gewichtskraft

In der Nähe der Erdoberfläche zieht die Erde jeden Körper mit der **Gewichtskraft**
$$F_G = m\cdot g$$
senkrecht nach unten, zum Erdmittelpunkt hin. Dabei ist $m$ die Masse in kg und
$g = 9{,}81\,\text{m/s}^2$ die Fallbeschleunigung. Man kann $g$ auch als $9{,}81\,\text{N/kg}$ schreiben,
also „Newton pro Kilogramm“. Beide Einheiten sind gleich, denn $1\,\text{N/kg} = 1\,\text{kg}\cdot\text{m/s}^2/\text{kg} = 1\,\text{m/s}^2$.
In dieser Lesart heißt $g$ **Ortsfaktor**: Auf jedes Kilogramm wirken an diesem Ort $9{,}81\,\text{N}$.

Auf anderen Himmelskörpern ist $g$ anders. Auf dem Mond ist $g = 1{,}62\,\text{m/s}^2$, auf dem Mars
$3{,}71\,\text{m/s}^2$. Die Masse bleibt überall dieselbe, nur die Gewichtskraft ändert sich. Woher $g$
kommt, erklärt das Gravitationsgesetz im [Kapitel Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation).

### Normalkraft: eine Kraft, die sich anpasst

Liegt ein Körper auf einer Unterlage, drückt die Unterlage ihn **senkrecht zu ihrer Oberfläche** weg. Das
ist die **Normalkraft** $F_N$. Sie hat keine eigene Formel. Sie ist immer genau so groß, dass der Körper
nicht in die Unterlage einsinkt. Die Unterlage wird dabei ein winziges Stück eingedrückt, wie eine sehr
harte Feder.

- **Beispiel:** Ein Buch liegt auf einem waagrechten Tisch. Hier ist $F_N = F_G$.
- **Beispiel:** Du drückst von oben zusätzlich auf das Buch. Dann muss der Tisch mehr tragen, $F_N$ wird größer als $F_G$.
- **Kein Beispiel für $F_N = F_G$:** Ein Schlitten wird an einem schräg nach oben gerichteten Seil gezogen.
  Das Seil hebt ihn ein wenig an, also muss der Boden weniger tragen. Hier ist $F_N$ **kleiner** als $F_G$.

:::merke
Setze nie automatisch $F_N = m g$. Bestimme die Normalkraft jedes Mal aus dem Kräftegleichgewicht
**senkrecht zur Unterlage**.
:::

```plot
x: [-4, 9]
y: [-4, 4.8]
gleich: true
strecken:
  - { von: [-3, -1], nach: [1.5, -1] }
  - { von: [-2, -1], nach: [0.5, -1] }
  - { von: [0.5, -1], nach: [0.5, 0.5] }
  - { von: [0.5, 0.5], nach: [-2, 0.5] }
  - { von: [-2, 0.5], nach: [-2, -1] }
  - { von: [3.5, -1], nach: [8.5, -1] }
  - { von: [4.5, -1], nach: [7, -1] }
  - { von: [7, -1], nach: [7, 0] }
  - { von: [7, 0], nach: [4.5, 0] }
  - { von: [4.5, 0], nach: [4.5, -1] }
vektoren:
  - { von: [-1, -0.25], nach: [-1, -3.25], label: "Gewicht", farbe: 0 }
  - { von: [0, 2], nach: [0, 0.5], label: "Hand", farbe: 1 }
  - { von: [-1.25, -0.25], nach: [-1.25, 4.25], label: "Normalkraft", farbe: 2 }
  - { von: [5.75, -0.5], nach: [5.75, -3.5], label: "Gewicht", farbe: 0 }
  - { von: [5.75, -0.5], nach: [5.75, 1.5], label: "Normalkraft", farbe: 2 }
  - { von: [5.75, -0.5], nach: [7.6, 0.57], label: "Seil", farbe: 1 }
beschriftung: "Zwei Freikörperbilder. Links: Eine Kiste wird von oben gedrückt. Die Normalkraft (grün) muss Gewicht (blau) und Handkraft (orange) zusammen tragen und ist größer als das Gewicht. Rechts: Ein Schlitten wird an einem schrägen Seil gezogen. Das Seil trägt einen Teil des Gewichts, die Normalkraft ist kleiner als das Gewicht."
```

:::beispiel[Normalkraft, wenn man von oben drückt]
Eine Kiste mit $12\,\text{kg}$ steht auf dem Boden. Du drückst mit $40\,\text{N}$ senkrecht von oben auf
den Deckel. Wie groß ist die Normalkraft?

**Schritt 1, Freikörperbild der Kiste:** nach unten die Gewichtskraft und deine Handkraft, nach oben die
Normalkraft (linkes Bild).

**Schritt 2, Gleichgewicht senkrecht:** Die Kiste ruht, also ist die Summe null. Mit „nach oben“ positiv:
$F_N - m g - 40\,\text{N} = 0$.

**Schritt 3, einsetzen:** $F_N = 12\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 + 40\,\text{N} = 117{,}7\,\text{N}
+ 40\,\text{N} = 158\,\text{N}$.

**Kontrolle:** Die Normalkraft ist größer als die Gewichtskraft ($118\,\text{N}$), weil der Boden auch
deine Hand mittragen muss. ✓
:::

:::achtung[Fehler: Normalkraft gleich Gewichtskraft beim schrägen Ziehen]
Ein Schlitten ($20\,\text{kg}$) wird mit $80\,\text{N}$ an einem Seil gezogen, das $40^\circ$ nach oben
geneigt ist. Falsch gerechnet: $F_N = m g = 196\,\text{N}$.

Das Seil zieht mit seiner senkrechten Komponente $80\,\text{N}\cdot\sin 40^\circ = 51{,}4\,\text{N}$
nach oben. Richtig ist $F_N = 196\,\text{N} - 51{,}4\,\text{N} = 145\,\text{N}$. Wer das übersieht,
rechnet später auch die Reibung falsch, denn sie hängt von $F_N$ ab.
:::

### Federkraft und das Hookesche Gesetz

Zieht man an einer Schraubenfeder, wird sie länger. Wie hängt die Verlängerung von der Kraft ab? Eine
Messreihe gibt die Antwort.

:::beispiel[Federkonstante aus einer Messreihe]
An eine Feder werden nacheinander Kräfte gehängt. Gemessen wird die Verlängerung $s$ gegenüber der
ungedehnten Feder: Bei $0{,}50\,\text{N}$ sind es $2{,}0\,\text{cm}$, bei $1{,}0\,\text{N}$ sind es
$4{,}0\,\text{cm}$, bei $1{,}5\,\text{N}$ sind es $6{,}0\,\text{cm}$ und bei $2{,}0\,\text{N}$ sind es $8{,}0\,\text{cm}$.

**Schritt 1, Muster erkennen:** Doppelte Kraft, doppelte Verlängerung. Die Verlängerung ist proportional zur Kraft.

**Schritt 2, Verhältnis bilden (in SI-Einheiten):** $\dfrac{F}{s} = \dfrac{0{,}50\,\text{N}}{0{,}020\,\text{m}} =
25\,\text{N/m}$. Für jeden anderen Messpunkt kommt dasselbe heraus, zum Beispiel
$2{,}0\,\text{N}/0{,}080\,\text{m} = 25\,\text{N/m}$.

**Schritt 3, anwenden:** Welche Verlängerung bewirkt ein Körper mit $200\,\text{g}$? Seine
Gewichtskraft ist $0{,}200\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 1{,}96\,\text{N}$. Also
$s = \dfrac{F}{D} = \dfrac{1{,}96\,\text{N}}{25\,\text{N/m}} = 0{,}0785\,\text{m} = 7{,}85\,\text{cm}$.
:::

```plot
x: [0, 10]
y: [0, 2.5]
achsen: { x: "s in cm", y: "F in N" }
graphen:
  - { f: "0.25*x", label: "F = D·s", farbe: 0, von: 0, bis: 9.5 }
punkte:
  - { x: 2, y: 0.5 }
  - { x: 4, y: 1.0 }
  - { x: 6, y: 1.5 }
  - { x: 8, y: 2.0 }
beschriftung: "Messwerte der Feder aus dem Beispiel: Kraft F über der Verlängerung s. Die Punkte liegen auf einer Geraden durch den Ursprung. Ihre Steigung ist die Federkonstante D = 0,25 N/cm = 25 N/m."
```

:::satz[Hookesches Gesetz]
Im elastischen Bereich ist die Verlängerung einer Feder proportional zur Kraft:
$$F = D\cdot s.$$
Dabei ist $F$ die Kraft, mit der man an der Feder zieht (in N). $s$ ist die Verlängerung oder Stauchung
gegenüber der entspannten Feder (in m), und $D$ ist die **Federkonstante** (in N/m). $D$ sagt, wie viel Newton
man für einen Meter Verlängerung bräuchte. Die Feder selbst zieht mit gleich großer Kraft zurück, zur
Ruhelage hin. Diese **Rückstellkraft** schreibt man $F = -D s$.
:::

Eine weiche Feder hat ein kleines $D$, eine harte ein großes. Das Gesetz gilt nur, solange man die Feder
nicht überdehnt. Danach bleibt sie dauerhaft verbogen (man sagt: plastisch verformt), und die Gerade knickt
ab. **Kein Beispiel** für das Hookesche Gesetz ist deshalb ein Gummiband bei starker Dehnung: Seine
Kennlinie ist gekrümmt. Die Rückstellkraft $-Ds$ wird im [Kapitel Schwingungen](/lernen/physik1/schwingungen)
die Grundlage der harmonischen Schwingung.

:::achtung[Fehler: Zentimeter nicht umgerechnet]
Eine Feder verlängert sich bei $3{,}0\,\text{N}$ um $5{,}0\,\text{cm}$. Falsch gerechnet:
$D = \dfrac{3{,}0}{5{,}0} = 0{,}60\,\text{N/m}$.

Die Einheit N/m verlangt die Verlängerung in **Metern**. Richtig:
$D = \dfrac{3{,}0\,\text{N}}{0{,}050\,\text{m}} = 60\,\text{N/m}$. Plausibilitätscheck: $0{,}6\,\text{N/m}$
hieße, dass schon $0{,}6\,\text{N}$ die Feder um einen ganzen Meter dehnen. Das passt nicht zur Messung,
bei der $3{,}0\,\text{N}$ sie nur um $5\,\text{cm}$ dehnen.
:::

### Federn kombinieren

Diese Stelle ist für viele ungewohnt, weil das Ergebnis zuerst überraschend wirkt. Worum geht es? Zwei
Federn sollen durch **eine** gedachte Ersatzfeder ersetzt werden, die sich genauso verhält.

**Hintereinander (in Reihe).** Hängt eine Last $F$ an zwei hintereinander gehängten Federn, gilt:

1. Jede Feder trägt die **volle** Last $F$. Die untere hält die Last, die obere hält die untere Feder samt Last.
2. Jede Feder dehnt sich nach Hooke um $s_1 = F/D_1$ beziehungsweise $s_2 = F/D_2$.
3. Die Gesamtverlängerung ist die Summe: $s = s_1 + s_2 = \dfrac{F}{D_1} + \dfrac{F}{D_2}$.
4. Für die Ersatzfeder soll $s = F/D$ gelten. Wir setzen gleich und teilen durch $F$:
$$\frac{1}{D} = \frac{1}{D_1} + \frac{1}{D_2}.$$

In Worten: Die Kehrwerte addieren sich. Die Kette ist **weicher** als jede einzelne Feder.

**Nebeneinander (parallel).** Zwei Federn tragen die Last gemeinsam und dehnen sich um dieselbe Strecke $s$.
Die Kräfte addieren sich: $F = D_1 s + D_2 s = (D_1 + D_2)\,s$. Also ist $D = D_1 + D_2$. Das Paar ist
**härter**.

:::beispiel[Federn mit 300 N/m und 600 N/m]
**In Reihe:** $\dfrac{1}{D} = \dfrac{1}{300\,\text{N/m}} + \dfrac{1}{600\,\text{N/m}} = \dfrac{2 + 1}{600\,\text{N/m}}
= \dfrac{3}{600\,\text{N/m}}$, also $D = 200\,\text{N/m}$. Das ist weniger als die weichere der beiden Federn.

**Parallel:** $D = 300\,\text{N/m} + 600\,\text{N/m} = 900\,\text{N/m}$.

**Probe in Reihe mit einer Last von $60\,\text{N}$:** $s_1 = 60/300\,\text{m} = 0{,}20\,\text{m}$,
$s_2 = 60/600\,\text{m} = 0{,}10\,\text{m}$, zusammen $0{,}30\,\text{m}$. Mit der Ersatzfeder:
$60/200\,\text{m} = 0{,}30\,\text{m}$. ✓
:::

:::achtung[Fehler: Federkonstanten in Reihe addieren]
Zwei Federn mit je $400\,\text{N/m}$ hängen hintereinander. Falsch: $D = 400 + 400 = 800\,\text{N/m}$.
Dann wäre die Kette härter als eine einzelne Feder, und das widerspricht dem Gefühl: Eine doppelt so lange
Feder gibt mehr nach. Richtig ist $\dfrac{1}{D} = \dfrac{2}{400\,\text{N/m}}$, also $D = 200\,\text{N/m}$.
:::

### Seilkraft

Ein gespanntes Seil zieht an beiden Enden mit der **Seilkraft** $F_S$, immer entlang des Seils. Ein Seil
kann nur ziehen, nie schieben. Für Rechnungen nehmen wir meist an: Das Seil ist **masselos** (es wiegt
nichts) und läuft über eine **reibungsfreie, masselose Rolle**. Dann ist die Seilkraft überall im Seil gleich groß.

- **Beispiel:** Eine feste Rolle an der Decke lenkt ein Seil um. Ziehst du mit $50\,\text{N}$ nach unten,
  zieht das Seil auf der anderen Seite mit $50\,\text{N}$ nach oben. Die Rolle ändert nur die **Richtung**.
- **Kein Beispiel:** Bei einem schweren Abschleppseil, das durchhängt, ist die Seilkraft nicht überall
  gleich. Unser Modell gilt dann nur näherungsweise.

```reflexion
frage: Warum hat die Normalkraft keine feste Formel wie $F_G = m g$, sondern muss jedes Mal neu bestimmt werden?
antwort: |
  Die Normalkraft ist eine Zwangskraft. Sie entsteht erst, weil die Unterlage verhindert, dass der Körper in sie
  eindringt, und sie ist genau so groß, wie es dafür nötig ist. Wie groß das ist, hängt von allen anderen Kräften senkrecht
  zur Unterlage ab (Gewicht, Seilkräfte, Handkräfte) und davon, ob der Körper senkrecht beschleunigt wird. Deshalb liefert
  nur das Kräftegleichgewicht beziehungsweise $F = m a$ senkrecht zur Unterlage ihren Wert.
```

### Aufgaben zu den Kraftarten

```aufgabe
id: p3-mond
titel: Masse und Gewicht auf dem Mond
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Astronaut hat mit Ausrüstung die Masse $80\,\text{kg}$. Auf dem Mond ist $g_M = 1{,}62\,\text{m/s}^2$. Wie groß sind seine Masse und seine Gewichtskraft auf dem Mond?
teile:
  - typ: zahl
    label: Masse auf dem Mond
    loesung: "80"
    einheit: "kg"
    fehler:
      - wert: "80*1.62/9.81"
        meldung: Die Masse ändert sich nicht, wenn man den Ort wechselt. Sie misst die Trägheit, und die ist auf dem Mond dieselbe. Nur die Gewichtskraft wird kleiner.
      - wert: "80*1.62"
        meldung: Das ist die Gewichtskraft in Newton, nicht die Masse in Kilogramm.
  - typ: zahl
    label: Gewichtskraft auf dem Mond
    loesung: "80*1.62"
    einheit: "N"
    anzeige: '129{,}6 \approx 130'
    fehler:
      - wert: "80*9.81"
        meldung: Das ist die Gewichtskraft auf der Erde. Auf dem Mond musst du mit $g_M = 1{,}62\,\text{m/s}^2$ rechnen.
hinweise:
  - Die Masse ist eine Eigenschaft des Körpers, die Gewichtskraft hängt vom Ort ab.
loesung: |
  **Masse:** Sie misst die Trägheit des Körpers und hängt nicht vom Ort ab: $80\,\text{kg}$.
  ---
  **Gewichtskraft:** $F_G = m g_M = 80\,\text{kg}\cdot 1{,}62\,\text{m/s}^2 = 129{,}6\,\text{N} \approx 130\,\text{N}$.
  ---
  **Vergleich:** Auf der Erde wären es $785\,\text{N}$, also etwa sechsmal so viel. ✓
```

```aufgabe
id: p3-hooke
titel: Federkonstante bestimmen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Feder verlängert sich um $4{,}0\,\text{cm}$, wenn man mit $2{,}0\,\text{N}$ an ihr zieht.

  a) Wie groß ist die Federkonstante in N/m?

  b) Um wie viele cm verlängert sie sich, wenn man einen Körper mit $300\,\text{g}$ anhängt?
teile:
  - typ: zahl
    label: a) Federkonstante
    loesung: "2/0.04"
    einheit: "N/m"
    anzeige: '50'
    fehler:
      - wert: "2/4"
        meldung: Du hast die Verlängerung in cm eingesetzt. Für N/m muss sie in Metern stehen, $4{,}0\,\text{cm} = 0{,}040\,\text{m}$.
  - typ: zahl
    label: b) Verlängerung in cm
    loesung: "0.3*9.81/50*100"
    einheit: "cm"
    anzeige: '5{,}89'
    fehler:
      - wert: "0.3/50*100"
        meldung: Du hast die Masse statt der Kraft durch $D$ geteilt. Am Körper zieht seine Gewichtskraft $m g$, nicht seine Masse.
hinweise:
  - 'Hookesches Gesetz $F = D s$, alle Größen in SI-Einheiten.'
  - Für b) ist die ziehende Kraft die Gewichtskraft des Körpers.
loesung: |
  **a)** $D = \dfrac{F}{s} = \dfrac{2{,}0\,\text{N}}{0{,}040\,\text{m}} = 50\,\text{N/m}$.
  ---
  **b) Kraft:** $F_G = 0{,}300\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 2{,}94\,\text{N}$.
  ---
  **b) Verlängerung:** $s = \dfrac{F}{D} = \dfrac{2{,}94\,\text{N}}{50\,\text{N/m}} = 0{,}0589\,\text{m} = 5{,}89\,\text{cm}$. Plausibel: etwas mehr Kraft als in a), etwas mehr Verlängerung. ✓
```

```aufgabe
id: p3-normalkraft-schraeg
titel: Normalkraft bei schrägem Zug
niveau: 1
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Schlitten ($30\,\text{kg}$) wird auf waagrechtem Schnee an einem Seil gezogen, das unter $30^\circ$ nach oben geneigt ist. Die Seilkraft beträgt $100\,\text{N}$. Wie groß ist die Normalkraft des Bodens? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "30*9.81 - 100*sin(inRad(30))"
    einheit: "N"
    anzeige: '244'
    fehler:
      - wert: "30*9.81"
        meldung: Du hast $F_N = m g$ gesetzt. Das Seil zieht aber schräg nach oben und trägt einen Teil des Gewichts. Der Boden muss weniger tragen.
      - wert: "30*9.81 + 100*sin(inRad(30))"
        meldung: Das Seil zieht nach **oben**. Seine senkrechte Komponente entlastet den Boden, sie wird also abgezogen.
      - wert: "30*9.81 - 100*cos(inRad(30))"
        meldung: Du hast die waagrechte Komponente genommen. Die senkrechte Komponente des Seils ist $F_S\sin 30^\circ$, denn der Winkel liegt an der Waagrechten an.
hinweise:
  - Zeichne das Freikörperbild. Welche Kräfte haben eine senkrechte Komponente?
  - 'Senkrecht ruht der Schlitten: $F_N + F_S\sin 30^\circ - m g = 0$.'
loesung: |
  **Ansatz:** Senkrecht bewegt sich der Schlitten nicht, also gilt dort Kräftegleichgewicht. Nach oben wirken $F_N$ und die senkrechte Seilkomponente, nach unten $m g$.
  ---
  **Komponente:** $F_S\sin 30^\circ = 100\,\text{N}\cdot 0{,}5 = 50\,\text{N}$. Gewichtskraft $m g = 30\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 294{,}3\,\text{N}$.
  ---
  **Ergebnis:** $F_N = 294{,}3\,\text{N} - 50\,\text{N} = 244\,\text{N}$. Das schräge Ziehen entlastet den Boden und verringert so später auch die Reibung.
```

```aufgabe
id: p3-federn-kombiniert
titel: Federn in Reihe und parallel
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Zwei gleiche Federn haben je $D = 200\,\text{N/m}$. An der Anordnung hängt eine Last von $20\,\text{N}$. Wie groß ist die Gesamtverlängerung in Metern, wenn die Federn

  a) hintereinander,

  b) nebeneinander (die Last gleichmäßig verteilt) hängen?
teile:
  - typ: zahl
    label: a) in Reihe
    loesung: "20/100"
    einheit: "m"
    anzeige: '0{,}2'
    fehler:
      - wert: "20/400"
        meldung: Du hast die Federkonstanten addiert. Das gilt für parallele Federn. In Reihe trägt jede Feder die volle Last, die Verlängerungen addieren sich.
      - wert: "20/200"
        meldung: Das ist die Verlängerung **einer** Feder. Bei zwei Federn hintereinander dehnt sich jede, die Verlängerungen addieren sich.
  - typ: zahl
    label: b) parallel
    loesung: "20/400"
    einheit: "m"
    anzeige: '0{,}05'
    fehler:
      - wert: "20/100"
        meldung: Parallel teilen sich die Federn die Last. Jede trägt nur die Hälfte und dehnt sich weniger.
hinweise:
  - In Reihe trägt jede Feder die volle Last. Parallel trägt jede die halbe.
  - 'Alternativ mit der Ersatzfederkonstante: in Reihe $1/D = 1/D_1 + 1/D_2$, parallel $D = D_1 + D_2$.'
gefuehrt:
  - text: Mit welcher Kraft (in N) wird in a) jede der beiden Federn gedehnt?
    teil: { typ: zahl, loesung: "20" }
    erklaerung: In Reihe trägt jede Feder die volle Last von $20\,\text{N}$.
  - text: Um wie viele Meter dehnt sich eine einzelne Feder in a)?
    teil: { typ: zahl, loesung: "20/200" }
    erklaerung: '$s_1 = F/D = 20\,\text{N} / (200\,\text{N/m}) = 0{,}10\,\text{m}$.'
  - text: Gesamtverlängerung in a) in Metern?
    teil: { typ: zahl, loesung: "2*20/200" }
    erklaerung: Beide Federn dehnen sich gleich, zusammen $0{,}20\,\text{m}$.
  - text: Gesamtverlängerung in b) in Metern?
    teil: { typ: zahl, loesung: "10/200" }
    erklaerung: Jede Feder trägt $10\,\text{N}$ und dehnt sich um $0{,}05\,\text{m}$. Weil sie nebeneinander hängen, ist das auch die Gesamtverlängerung.
loesung: |
  **Ansatz:** Hookesches Gesetz für jede Feder, dann überlegen, wie sich Kräfte und Verlängerungen verteilen.
  ---
  **a)** Jede Feder trägt $20\,\text{N}$ und verlängert sich um $20\,\text{N}/(200\,\text{N/m}) = 0{,}10\,\text{m}$. Zusammen $0{,}20\,\text{m}$. Ersatzfederkonstante $100\,\text{N/m}$.
  ---
  **b)** Jede trägt $10\,\text{N}$: $10\,\text{N}/(200\,\text{N/m}) = 0{,}05\,\text{m}$. Ersatzfederkonstante $400\,\text{N/m}$.
  ---
  **Vergleich:** In Reihe dehnt sich die Anordnung viermal so weit wie parallel. Probe: $0{,}20/0{,}05 = 4 = 400/100$. ✓
```

```aufgabe
id: p3-hooke-diagramm
titel: Federkonstanten aus dem Diagramm ablesen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt die Kennlinien von zwei Federn A und B (Kraft über Verlängerung).

  a) Lies die Federkonstante von Feder B in N/m ab.

  b) Welche Feder ist härter?
plot:
  x: [0, 12]
  y: [0, 6]
  achsen: { x: "s in cm", y: "F in N" }
  graphen:
    - { f: "0.4*x", label: "A", farbe: 0, von: 0, bis: 12 }
    - { f: "x", label: "B", farbe: 1, von: 0, bis: 5.8 }
  punkte:
    - { x: 10, y: 4, label: "(10 | 4)" }
    - { x: 5, y: 5, label: "(5 | 5)" }
teile:
  - typ: zahl
    label: a) Federkonstante von B
    loesung: "5/0.05"
    einheit: "N/m"
    anzeige: '100'
    fehler:
      - wert: "5/5"
        meldung: Du hast die Verlängerung in cm eingesetzt. Für N/m musst du $5\,\text{cm} = 0{,}05\,\text{m}$ verwenden.
      - wert: "4/0.10"
        meldung: Das ist die Federkonstante von Feder A. Lies den Punkt auf der Kennlinie B ab.
  - typ: auswahl
    label: b) härtere Feder
    optionen:
      - "Feder A"
      - "Feder B"
      - "Beide sind gleich hart."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Linie von A reicht zwar weiter nach rechts, aber sie ist flacher. Für dieselbe Verlängerung braucht A weniger Kraft, ist also weicher.
hinweise:
  - Die Federkonstante ist die Steigung der Kennlinie, $D = F/s$.
  - Rechne die Verlängerung von cm in m um.
loesung: |
  **Ansatz:** Bei einer Geraden durch den Ursprung ist die Steigung $D = F/s$. Wir lesen einen gut ablesbaren Punkt ab.
  ---
  **a)** Feder B geht durch $(5\,\text{cm} \mid 5\,\text{N})$. Also $D_B = \dfrac{5\,\text{N}}{0{,}05\,\text{m}} = 100\,\text{N/m}$.
  ---
  **Vergleich:** Feder A geht durch $(10\,\text{cm} \mid 4\,\text{N})$, also $D_A = \dfrac{4\,\text{N}}{0{,}10\,\text{m}} = 40\,\text{N/m}$.
  ---
  **b)** B hat die größere Federkonstante und die steilere Kennlinie, B ist härter.
```

```aufgabe
id: p3-seil-rolle
titel: Eimer an einer festen Rolle
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Eimer mit $8{,}0\,\text{kg}$ wird an einem Seil über eine feste Rolle an der Decke mit konstanter Geschwindigkeit hochgezogen. Du ziehst senkrecht nach unten. Seil und Rolle sind masselos und reibungsfrei.

  a) Mit welcher Kraft musst du ziehen?

  b) Mit welcher Kraft zieht die Rolle an ihrer Aufhängung an der Decke?
teile:
  - typ: zahl
    label: a) Zugkraft
    loesung: "8*9.81"
    einheit: "N"
    anzeige: '78{,}5'
    fehler:
      - wert: "8*9.81/2"
        meldung: Eine **feste** Rolle halbiert die Kraft nicht. Sie ändert nur die Richtung. Kraft sparen kann man erst mit einer losen Rolle, siehe [Kapitel Drehbewegung und einfache Maschinen](/lernen/physik1/drehbewegung-einfache-maschinen).
  - typ: zahl
    label: b) Kraft auf die Aufhängung
    loesung: "2*8*9.81"
    einheit: "N"
    anzeige: '157'
    fehler:
      - wert: "8*9.81"
        meldung: An der Rolle ziehen **zwei** Seilstücke nach unten, das zum Eimer und das zu deiner Hand. Beide tragen die volle Seilkraft.
hinweise:
  - Konstante Geschwindigkeit heißt resultierende Kraft null am Eimer.
  - Zeichne das Freikörperbild der Rolle. Wie viele Seilstücke ziehen an ihr nach unten?
loesung: |
  **a) Ansatz am Eimer:** Konstante Geschwindigkeit, also ist die Seilkraft gleich der Gewichtskraft: $F_S = m g = 8{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 78{,}5\,\text{N}$. Die Seilkraft ist im ganzen Seil gleich, also ziehst du mit $78{,}5\,\text{N}$.
  ---
  **b) Freikörperbild der Rolle:** Zwei Seilstücke ziehen senkrecht nach unten, jedes mit $78{,}5\,\text{N}$. Die Aufhängung hält mit der Summe dagegen.
  ---
  **Ergebnis:** $2\cdot 78{,}5\,\text{N} = 157\,\text{N}$. Die Decke trägt also das Doppelte des Eimers, weil du auch nach unten ziehst.
```

```aufgabe
id: p3-federn-reihe-herleiten
titel: Federn in Reihe herleiten und anwenden
niveau: 3
lernziel: 3
kompetenz: begruenden
angabe: |
  Zwei Federn mit $D_1 = 150\,\text{N/m}$ und $D_2 = 350\,\text{N/m}$ hängen hintereinander.

  a) Leite die Formel für die Ersatzfederkonstante zweier Federn in Reihe her. Begründe jeden Schritt.

  b) Berechne die Ersatzfederkonstante.

  c) Wie weit dehnt sich die Kette insgesamt bei einer Last von $21\,\text{N}$?
teile:
  - typ: text
    label: a) Herleitung
    muster: |
      Jede Feder trägt die volle Last F (die obere hält die untere samt Last). Nach Hooke dehnt sie sich um s1 = F/D1
      beziehungsweise s2 = F/D2. Die Gesamtverlängerung ist s = s1 + s2 = F/D1 + F/D2. Für die Ersatzfeder soll s = F/D gelten.
      Gleichsetzen und durch F teilen ergibt 1/D = 1/D1 + 1/D2.
  - typ: zahl
    label: b) Ersatzfederkonstante
    loesung: "1/(1/150+1/350)"
    einheit: "N/m"
    anzeige: '105'
    fehler:
      - wert: "150+350"
        meldung: Das ist die Formel für **parallele** Federn. In Reihe wird die Kette weicher, die Ersatzfederkonstante muss also kleiner als $150\,\text{N/m}$ sein.
  - typ: zahl
    label: c) Gesamtverlängerung
    loesung: "21/(1/(1/150+1/350))"
    einheit: "m"
    anzeige: '0{,}2'
    fehler:
      - wert: "21/500"
        meldung: Du hast mit der Parallel-Formel gerechnet. Prüfe zur Kontrolle einzeln, wie weit sich jede Feder dehnt.
hinweise:
  - Überlege zuerst, welche Kraft jede einzelne Feder trägt.
  - Die Verlängerungen der beiden Federn addieren sich. Setze das gleich mit der Verlängerung einer gedachten Ersatzfeder.
loesung: |
  **a) Herleitung:** Jede Feder trägt die volle Last $F$. Nach Hooke ist $s_1 = F/D_1$ und $s_2 = F/D_2$. Die Gesamtverlängerung ist $s = s_1 + s_2$. Für die Ersatzfeder gilt $s = F/D$. Gleichsetzen: $\dfrac{F}{D} = \dfrac{F}{D_1} + \dfrac{F}{D_2}$. Wir teilen durch $F$ und erhalten $\dfrac{1}{D} = \dfrac{1}{D_1} + \dfrac{1}{D_2}$.
  ---
  **b)** $\dfrac{1}{D} = \dfrac{1}{150\,\text{N/m}} + \dfrac{1}{350\,\text{N/m}} = \dfrac{7 + 3}{1050\,\text{N/m}} = \dfrac{10}{1050\,\text{N/m}}$, also $D = 105\,\text{N/m}$.
  ---
  **c)** $s = \dfrac{F}{D} = \dfrac{21\,\text{N}}{105\,\text{N/m}} = 0{,}20\,\text{m}$.
  ---
  **Probe einzeln:** $s_1 = 21/150\,\text{m} = 0{,}14\,\text{m}$, $s_2 = 21/350\,\text{m} = 0{,}06\,\text{m}$, zusammen $0{,}20\,\text{m}$. ✓
```

## Reibung und Luftwiderstand

```aufgabe
id: p3-5-check
art: check
titel: "Vorwissen: Normalkraft auf waagrechtem Boden"
niveau: 1
angabe: |
  Eine Kiste mit $40\,\text{kg}$ steht auf waagrechtem Boden. Sonst wirkt keine Kraft auf sie. Wie groß ist die Normalkraft in N ($g = 9{,}81\,\text{m/s}^2$)?
teile:
  - typ: zahl
    loesung: "40*9.81"
    einheit: "N"
    anzeige: '392{,}4'
    fehler:
      - wert: "40"
        meldung: Das ist die Masse in kg. Die Normalkraft ist eine Kraft in Newton. Auf waagrechtem Boden ohne weitere Kräfte ist sie so groß wie die Gewichtskraft.
hinweise:
  - Senkrecht herrscht Gleichgewicht zwischen Normalkraft und Gewichtskraft.
loesung: |
  Senkrecht ruht die Kiste, also ist $F_N = F_G = m g$.
  ---
  $F_N = 40\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 392{,}4\,\text{N}$. Siehe [3.4 Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

Reibungskräfte wirken dort, wo sich zwei Oberflächen berühren. Sie sind meist lästig, weil sie
bremsen. Ohne sie könnten wir aber weder gehen noch Auto fahren: Der Fuß würde nach hinten wegrutschen,
die Räder würden durchdrehen, kein Knoten würde halten.

### Haftreibung, Gleitreibung, Rollreibung

:::definition[Haft-, Gleit- und Rollreibung]
- **Haftreibung** verhindert, dass ein ruhender Körper zu rutschen beginnt. Sie passt sich der Kraft an,
  die ihn verschieben will, aber nur bis zu einem **Höchstwert** $F_{H,\max} = \mu_H\cdot F_N$.
- **Gleitreibung** wirkt, wenn der Körper rutscht. Ihr Betrag ist $F_{\text{Gl}} = \mu_G\cdot F_N$ und
  hängt (näherungsweise) nicht von der Geschwindigkeit ab.
- **Rollreibung** wirkt bei rollenden Rädern, $F_{\text{Roll}} = \mu_R\cdot F_N$ mit sehr kleinem $\mu_R$.

Dabei ist $F_N$ die Normalkraft, und $\mu_H$, $\mu_G$, $\mu_R$ sind die **Reibungszahlen** (auch
Reibungskoeffizienten). Sie sind reine Zahlen ohne Einheit und hängen von der Materialpaarung ab. Für
dieselbe Paarung gilt $\mu_R < \mu_G < \mu_H$. Die Reibungskraft zeigt immer entgegen der Bewegung
**relativ zur Unterlage** oder entgegen der Richtung, in die der Körper relativ zur Unterlage rutschen würde.
:::

Typische Reibungszahlen (Richtwerte aus physikalischen Tabellenbüchern; sie schwanken je nach Zustand
der Oberflächen):

- Gummi auf trockenem Asphalt: $\mu_H$ zwischen $0{,}8$ und $1{,}0$, $\mu_G \approx 0{,}7$.
- Gummi auf nassem Asphalt: $\mu_H \approx 0{,}5$, $\mu_G \approx 0{,}4$.
- Gummi auf Eis: $\mu_H \approx 0{,}1$, $\mu_G \approx 0{,}05$.
- Holz auf Holz: $\mu_H \approx 0{,}5$, $\mu_G \approx 0{,}3$.
- Stahl auf Eis (Schlittschuhkufe): $\mu_H \approx 0{,}03$, $\mu_G \approx 0{,}01$.

**Beispiel für die Haftreibung:** Ein schwerer Schrank steht im Zimmer. Du schiebst mit $50\,\text{N}$,
er bewegt sich nicht. Dann ist die Haftreibung genau $50\,\text{N}$, nicht mehr. Schiebst du mit
$100\,\text{N}$ und er bewegt sich immer noch nicht, ist sie $100\,\text{N}$.

**Kein Beispiel:** Der Höchstwert $\mu_H F_N$ ist **nicht** die Haftreibung, die gerade wirkt. Er ist nur
die Grenze. Die tatsächliche Haftreibung ist meist kleiner. Erst wenn du stärker schiebst als dieser
Höchstwert, beginnt der Schrank zu rutschen.

```aufgabe
id: p3-5-welche-reibung
art: check
titel: Welche Reibung wirkt?
niveau: 1
angabe: |
  Ein Auto parkt mit angezogener Handbremse an einem steilen Hang und bewegt sich nicht. Welche Reibung hält es zwischen Reifen und Straße fest?
teile:
  - typ: auswahl
    optionen:
      - "Haftreibung"
      - "Gleitreibung"
      - "Rollreibung"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Gleitreibung wirkt nur, wenn zwei Flächen aneinander **rutschen**. Die Reifen rutschen aber nicht, das Auto steht.
      - wert: 2
        meldung: |
          Rollreibung bremst rollende Räder. Hier rollt nichts, die Räder sind blockiert und das Auto ruht.
hinweise:
  - Bewegen sich Reifen und Straße gegeneinander?
loesung: |
  Reifen und Straße ruhen gegeneinander. Also wirkt Haftreibung.
  ---
  Sie passt sich dem Hangabtrieb an und hält das Auto, solange dieser kleiner als ihr Höchstwert $\mu_H F_N$ ist.
```

Bemerkenswert: Die Reibungskraft hängt näherungsweise **nicht** von der Größe der Auflagefläche ab, nur
von der Normalkraft. Ein Ziegel rutscht auf der Schmalseite genauso schwer wie auf der Breitseite. Auf
der kleineren Fläche drückt er nämlich stärker pro Quadratzentimeter, und beides gleicht sich aus.

:::intuition
Warum ist die Haftreibung größer als die Gleitreibung? Unter dem Mikroskop sind Oberflächen rau. Ruhen
zwei Flächen aufeinander, verhaken sich ihre Unebenheiten und bilden winzige Kontaktstellen. Rutscht der
Körper, springen die Unebenheiten übereinander und haben keine Zeit, sich zu verhaken. Deshalb braucht
man zum Losreißen eines Schranks mehr Kraft als zum Weiterschieben. Das **ABS** beim Auto nutzt das: Es
verhindert, dass die Räder blockieren. Die Reifen haften dann, statt zu gleiten. Auf trockener oder
nasser Straße wird der Bremsweg dadurch meist kürzer, und das Auto bleibt lenkbar.
:::

:::beispiel[Einen Schrank verschieben]
Ein Schrank mit $50\,\text{kg}$ steht auf waagrechtem Boden, $\mu_H = 0{,}45$ und $\mu_G = 0{,}35$.

**Schritt 1, Normalkraft:** Waagrechter Boden, keine weiteren senkrechten Kräfte:
$F_N = m g = 50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 490{,}5\,\text{N}$.

**Schritt 2, Losreißen:** Der Schrank rutscht erst, wenn die Schubkraft den Höchstwert der Haftreibung
übersteigt: $F_{H,\max} = 0{,}45\cdot 490{,}5\,\text{N} = 221\,\text{N}$.

**Schritt 3, Weiterschieben mit konstanter Geschwindigkeit:** Resultierende Kraft null, also Schubkraft
gleich Gleitreibung: $F = 0{,}35\cdot 490{,}5\,\text{N} = 172\,\text{N}$.

**Schritt 4, Schieben mit 200 N während der Bewegung:**
$a = \dfrac{200\,\text{N} - 172\,\text{N}}{50\,\text{kg}} = 0{,}57\,\text{m/s}^2$.

**Merke aus dem Beispiel:** Zum Anschieben braucht man $221\,\text{N}$, zum Weiterschieben nur $172\,\text{N}$.
:::

:::achtung[Fehler: Haftreibung immer gleich ihrem Höchstwert setzen]
Eine Kiste ($40\,\text{kg}$, $\mu_H = 0{,}50$) wird mit $100\,\text{N}$ geschoben. Falsch gerechnet:
„Haftreibung $= 0{,}50\cdot 392\,\text{N} = 196\,\text{N}$, also $F_{\text{res}} = 100\,\text{N} - 196\,\text{N}
= -96\,\text{N}$. Die Kiste beschleunigt nach hinten.“

Das Ergebnis ist absurd: Eine Kiste kann nicht auf dich zu rutschen, weil du sie wegschiebst. Die
Haftreibung passt sich an. Weil $100\,\text{N}$ unter dem Höchstwert $196\,\text{N}$ liegen, bleibt die
Kiste liegen, und die Haftreibung beträgt genau $100\,\text{N}$.
:::

:::achtung[Fehler: g vergessen]
Ein Schlitten ($25\,\text{kg}$) gleitet über Schnee, $\mu_G = 0{,}30$. Falsch gerechnet:
$F_{\text{Gl}} = \mu_G\cdot m = 0{,}30\cdot 25 = 7{,}5\,\text{N}$.

In der Formel steht die Normalkraft, keine Masse. Richtig: $F_{\text{Gl}} = \mu_G\cdot m g = 0{,}30\cdot
25\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 73{,}6\,\text{N}$. Der Fehler fällt bei der Einheit auf:
$\mu_G\cdot m$ hat die Einheit kg, nicht N.
:::

### Haftreibung kann auch antreiben

Viele glauben: Reibung zeigt immer entgegen der Bewegung. Das stimmt nur für die Gleitreibung relativ zur
Unterlage. Die **Haftreibung** zeigt entgegen der Richtung, in die der Körper **rutschen würde**. Das kann
sogar die Bewegungsrichtung sein.

- **Gehen:** Dein Fuß drückt beim Abstoßen nach hinten gegen den Boden. Ohne Reibung würde er nach hinten
  wegrutschen. Die Haftreibung des Bodens zeigt deshalb nach **vorn** und treibt dich an.
- **Kiste auf einem anfahrenden Lkw:** Der Lkw beschleunigt nach vorn. Die Kiste würde wegen ihrer Trägheit
  auf der Ladefläche nach hinten rutschen. Die Haftreibung zeigt deshalb nach **vorn** und nimmt die Kiste mit.

```plot
x: [-1, 10]
y: [-3.5, 3.5]
gleich: true
strecken:
  - { von: [-1, -0.5], nach: [10, -0.5] }
  - { von: [3, -0.5], nach: [5, -0.5] }
  - { von: [5, -0.5], nach: [5, 1] }
  - { von: [5, 1], nach: [3, 1] }
  - { von: [3, 1], nach: [3, -0.5] }
vektoren:
  - { von: [4, 0.25], nach: [4, -2.75], label: "Gewicht", farbe: 0 }
  - { von: [4.3, 0.25], nach: [4.3, 3.25], label: "Normalkraft", farbe: 2 }
  - { von: [5, -0.5], nach: [6.5, -0.5], label: "Haftreibung", farbe: 3 }
  - { von: [6.5, 2.5], nach: [8.5, 2.5], label: "a des Lkw", farbe: 1 }
punkte:
  - { x: 0, y: -0.5, label: "Ladefläche" }
beschriftung: "Freikörperbild einer Kiste auf der Ladefläche eines anfahrenden Lkw. Gewicht (blau) und Normalkraft (grün) heben sich auf. Die Haftreibung (violett) zeigt nach vorn, in Fahrtrichtung, und ist die einzige waagrechte Kraft. Sie beschleunigt die Kiste mit dem Lkw (oranger Pfeil: Beschleunigung, keine Kraft)."
```

```reflexion
frage: Beim Gehen zeigt die Reibungskraft des Bodens auf deinen Fuß nach vorn. Erkläre, warum das so ist, und was auf spiegelglattem Eis passiert, wenn du genauso losgehen willst.
antwort: |
  Beim Abstoßen drückt dein Fuß schräg nach hinten gegen den Boden. Ohne Reibung würde er nach hinten wegrutschen.
  Die Haftreibung wirkt dieser drohenden Rutschbewegung entgegen, sie zeigt also nach vorn. Nach dem dritten Axiom
  ist sie die Gegenkraft dazu, dass du den Boden nach hinten schiebst. Sie ist die einzige waagrechte Kraft auf dich
  und beschleunigt dich deshalb nach vorn. Auf spiegelglattem Eis fehlt diese Kraft fast ganz: Der Fuß rutscht nach
  hinten weg, und du kommst kaum vom Fleck.
```

### Luftwiderstand

Bewegt sich ein Körper durch Luft oder Wasser, bremst ihn eine **Widerstandskraft** entgegen der
Geschwindigkeit. Bei Alltagsgeschwindigkeiten (Auto, Radfahrer, fallender Mensch) gilt:
$$F_L = \tfrac12\,c_W\,\rho\,A\,v^2.$$
Dabei ist $c_W$ der **Widerstandsbeiwert**, eine Zahl, die nur von der Form abhängt. $\rho$ ist die Dichte
der Luft (etwa $1{,}2\,\text{kg/m}^3$). $A$ ist die Querschnittsfläche in $\text{m}^2$, also die Fläche, die man von
vorn sieht, und $v$ ist die Geschwindigkeit. Typische $c_W$-Werte: modernes Auto $0{,}25$ bis $0{,}3$,
aufrechter Radfahrer etwa $0{,}9$, offener Fallschirm etwa $1{,}3$.

Wichtig ist das $v^2$. **Doppelte Geschwindigkeit bedeutet vierfachen Luftwiderstand.** Deshalb steigt
der Spritverbrauch auf der Autobahn so stark mit dem Tempo.

Ein fallender Körper wird zuerst mit $g$ beschleunigt. Mit wachsender Geschwindigkeit wächst der
Luftwiderstand. Die resultierende Kraft $m g - F_L$ und damit die Beschleunigung werden kleiner.
Schließlich ist $F_L = m g$. Dann ist die resultierende Kraft null, und der Körper fällt mit konstanter
**Endgeschwindigkeit** $v_E$.

```plot
x: [0, 20]
y: [0, 70]
achsen: { x: "t in s", y: "v in m/s" }
graphen:
  - { f: "56*tanh(9.81*x/56)", label: "mit Luftwiderstand", farbe: 0, von: 0, bis: 20 }
  - { f: "9.81*x", label: "ohne Luftwiderstand", farbe: 1, von: 0, bis: 6.8, gestrichelt: true }
  - { f: "56", label: "Endgeschwindigkeit", farbe: 2, von: 0, bis: 20, gestrichelt: true }
beschriftung: "Geschwindigkeit eines Fallschirmspringers (80 kg, Schirm geschlossen) über der Zeit. Ohne Luftwiderstand würde die Geschwindigkeit linear wachsen (orange gestrichelt). Mit Luftwiderstand wird die Kurve immer flacher und nähert sich der Endgeschwindigkeit von etwa 56 m/s (grün gestrichelt)."
```

:::beispiel[Endgeschwindigkeit mit offenem Fallschirm]
Ein Fallschirmspringer hat mit Ausrüstung $90\,\text{kg}$. Der offene Schirm hat $A = 30\,\text{m}^2$ und
$c_W = 1{,}3$, die Luftdichte ist $1{,}2\,\text{kg/m}^3$. Wie schnell sinkt er?

**Schritt 1, Bedingung:** Bei der Endgeschwindigkeit ist die resultierende Kraft null, also
$\tfrac12 c_W\rho A v_E^2 = m g$.

**Schritt 2, nach $v_E$ auflösen:** Wir multiplizieren mit $2$, teilen durch $c_W\rho A$ und ziehen die Wurzel:
$$v_E = \sqrt{\frac{2 m g}{c_W\,\rho\,A}}.$$

**Schritt 3, einsetzen:** $v_E = \sqrt{\dfrac{2\cdot 90\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{1{,}3\cdot
1{,}2\,\text{kg/m}^3\cdot 30\,\text{m}^2}} = \sqrt{37{,}7\,\text{m}^2/\text{s}^2} = 6{,}1\,\text{m/s}$.

**Einheitencheck:** $\dfrac{\text{kg}\cdot\text{m/s}^2}{\text{kg/m}^3\cdot\text{m}^2} = \dfrac{\text{m/s}^2}{1/\text{m}}
= \text{m}^2/\text{s}^2$. Die Wurzel daraus ist m/s. ✓

**Deutung:** $6{,}1\,\text{m/s}$ sind etwa $22\,\text{km/h}$. Das entspricht einem Sprung aus etwa
$2\,\text{m}$ Höhe, gut zu landen.
:::

**Fallen schwere Körper schneller?** Im Vakuum nicht: Alle Körper fallen gleich schnell (warum, erklärt
[3.9 Beschleunigte Bezugssysteme](/lernen/physik1/dynamik/beschleunigte-bezugssysteme-scheinkraefte-und-schwerelosigkeit)
mit der Gleichheit von träger und schwerer Masse). In Luft aber schon. Eine Bleikugel und eine gleich große Holzkugel
erfahren bei gleicher Geschwindigkeit denselben Luftwiderstand. Die Bleikugel hat aber eine viel größere
Masse, für sie ist der Luftwiderstand im Verhältnis kleiner. Ihre Endgeschwindigkeit ist größer, sie
kommt zuerst unten an. Aristoteles lag also im Alltag nicht ganz falsch, nur aus dem falschen Grund.

```aufgabe
id: p3-reibung-kiste
titel: Eine schwere Kiste verschieben
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Kiste ($40\,\text{kg}$) steht auf einem waagrechten Boden, $\mu_H = 0{,}50$ und $\mu_G = 0{,}30$.

  a) Mit welcher Kraft muss man mindestens waagrecht schieben, damit sie sich in Bewegung setzt?

  b) Welche Schubkraft hält sie danach in gleichförmiger Bewegung?

  c) Welche Beschleunigung hat sie, wenn man mit $150\,\text{N}$ weiterschiebt?

  Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: a)
    loesung: "0.5*40*9.81"
    einheit: "N"
    anzeige: '196'
    fehler:
      - wert: "0.3*40*9.81"
        meldung: Das ist die Gleitreibung. Zum **Losreißen** muss man die größere Haftreibung überwinden, also mit $\mu_H$ rechnen.
      - wert: "0.5*40"
        meldung: In die Reibungsformel gehört die Normalkraft $m g$, nicht die Masse.
  - typ: zahl
    label: b)
    loesung: "0.3*40*9.81"
    einheit: "N"
    anzeige: '118'
    fehler:
      - wert: "0.5*40*9.81"
        meldung: Sobald die Kiste rutscht, wirkt die Gleitreibung mit $\mu_G$, nicht mehr die Haftreibung.
  - typ: zahl
    label: c)
    loesung: "(150 - 0.3*40*9.81)/40"
    einheit: "m/s²"
    anzeige: '0{,}807'
    fehler:
      - wert: "150/40"
        meldung: Du hast die Reibung vergessen. In $F = m a$ steht die resultierende Kraft, also Schubkraft minus Gleitreibung.
      - wert: "(150 - 0.5*40*9.81)/40"
        meldung: Die Kiste rutscht bereits, also bremst die Gleitreibung mit $\mu_G$. Mit $\mu_H$ käme sogar eine negative Beschleunigung heraus.
hinweise:
  - 'Auf waagrechtem Boden ist $F_N = m g = 392{,}4\,\text{N}$.'
  - Für c) zählt die resultierende Kraft aus Schubkraft und Gleitreibung.
gefuehrt:
  - text: Berechne die Normalkraft in N.
    teil: { typ: zahl, loesung: "40*9.81" }
    erklaerung: 'Waagrechter Boden ohne weitere senkrechte Kräfte: $F_N = m g = 392{,}4\,\text{N}$.'
  - text: Berechne den Höchstwert der Haftreibung in N. Das ist die Antwort auf a).
    teil: { typ: zahl, loesung: "0.5*392.4" }
    erklaerung: '$F_{H,\max} = 0{,}50\cdot 392{,}4\,\text{N} = 196\,\text{N}$. Erst darüber rutscht die Kiste.'
  - text: Berechne die Gleitreibung in N. Das ist die Antwort auf b).
    teil: { typ: zahl, loesung: "0.3*392.4" }
    erklaerung: '$F_{\text{Gl}} = 0{,}30\cdot 392{,}4\,\text{N} = 118\,\text{N}$. Gleichförmig heißt: Schubkraft gleich Gleitreibung.'
  - text: Berechne die Beschleunigung für c) in $\text{m/s}^2$.
    teil: { typ: zahl, loesung: "(150-117.72)/40" }
    erklaerung: '$a = (150\,\text{N} - 117{,}7\,\text{N})/40\,\text{kg} = 0{,}807\,\text{m/s}^2$.'
loesung: |
  **Ansatz:** Zuerst die Normalkraft, denn beide Reibungskräfte hängen von ihr ab. Waagrechter Boden: $F_N = m g = 40\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 392{,}4\,\text{N}$.
  ---
  **a)** Losreißen erfordert mehr als den Höchstwert der Haftreibung: $F_{H,\max} = 0{,}50\cdot 392{,}4\,\text{N} = 196\,\text{N}$.
  ---
  **b)** Gleichförmig heißt $F_{\text{res}} = 0$, also Schubkraft gleich Gleitreibung: $F = 0{,}30\cdot 392{,}4\,\text{N} = 118\,\text{N}$.
  ---
  **c)** $a = \dfrac{150\,\text{N} - 117{,}7\,\text{N}}{40\,\text{kg}} = 0{,}807\,\text{m/s}^2$. Plausibel: Nur $32\,\text{N}$ bleiben zum Beschleunigen übrig.
```

```aufgabe
id: p3-reibung-einfach
titel: Gleitreibung eines Schlittens
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Schlitten mit $12\,\text{kg}$ gleitet über ebenen Schnee, $\mu_G = 0{,}050$. Wie groß ist die Gleitreibungskraft?
teile:
  - typ: zahl
    loesung: "0.05*12*9.81"
    einheit: "N"
    anzeige: '5{,}89'
    fehler:
      - wert: "0.05*12"
        meldung: Du hast $\mu_G$ mit der Masse multipliziert. In die Formel gehört die Normalkraft, hier $m g$. Prüfe die Einheit, kg ist keine Kraft.
hinweise:
  - '$F_{\text{Gl}} = \mu_G F_N$, und auf ebenem Boden ist $F_N = m g$.'
loesung: |
  **Ansatz:** Ebener Boden, also $F_N = m g = 12\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 117{,}7\,\text{N}$.
  ---
  **Reibung:** $F_{\text{Gl}} = 0{,}050\cdot 117{,}7\,\text{N} = 5{,}89\,\text{N}$. Schnee ist sehr glatt, deshalb ist das wenig.
```

```aufgabe
id: p3-haftreibung-anpassen
titel: Wie groß ist die Haftreibung gerade?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Bei einem Schrank beträgt der Höchstwert der Haftreibung $300\,\text{N}$. Du schiebst waagrecht mit $120\,\text{N}$, der Schrank bewegt sich nicht. Wie groß ist die Haftreibungskraft in diesem Moment?
teile:
  - typ: zahl
    loesung: "120"
    einheit: "N"
    fehler:
      - wert: "300"
        meldung: $300\,\text{N}$ ist nur der Höchstwert. Wäre die Haftreibung jetzt $300\,\text{N}$, gäbe es eine resultierende Kraft von $180\,\text{N}$ auf dich zu, und der Schrank würde dir entgegenrutschen.
      - wert: "0"
        meldung: Ohne Haftreibung würde dein Schieben den Schrank beschleunigen. Er ruht aber, also muss eine Gegenkraft wirken.
hinweise:
  - Der Schrank ruht. Was folgt daraus für die resultierende Kraft?
loesung: |
  **Ansatz:** Der Schrank ruht, also ist die resultierende Kraft null (erstes Axiom).
  ---
  **Folgerung:** Die Haftreibung gleicht deine Schubkraft genau aus: $120\,\text{N}$. Sie passt sich an, solange sie unter dem Höchstwert von $300\,\text{N}$ bleibt.
```

```aufgabe
id: p3-bremsweg-reibung
titel: Bremsweg aus der Reibungszahl
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Auto fährt mit $100\,\text{km/h}$ auf trockenem Asphalt und macht eine Vollbremsung mit blockierten Rädern ($\mu_G = 0{,}70$). Wie groß ist die Bremsverzögerung, und wie lang ist der Bremsweg? Hängt das Ergebnis von der Masse des Autos ab?
teile:
  - typ: zahl
    label: Verzögerung
    loesung: "0.7*9.81"
    einheit: "m/s²"
    anzeige: '6{,}87'
    fehler:
      - wert: "0.7"
        meldung: Du hast $g$ vergessen. Aus $m a = \mu_G m g$ folgt $a = \mu_G\cdot g$.
  - typ: zahl
    label: Bremsweg
    loesung: "(100/3.6)^2/(2*0.7*9.81)"
    einheit: "m"
    anzeige: '56{,}2'
    fehler:
      - wert: "100^2/(2*0.7*9.81)"
        meldung: Du hast mit $100$ statt mit $27{,}8\,\text{m/s}$ gerechnet. Rechne km/h zuerst in m/s um.
      - wert: "(100/3.6)^2/(0.7*9.81)"
        meldung: Der Faktor $2$ im Nenner von $s = v_0^2/(2a)$ fehlt.
hinweise:
  - 'Die Gleitreibung $\mu_G m g$ ist die einzige waagrechte Kraft. Sie wirkt entgegen der Fahrtrichtung.'
  - 'Für den Bremsweg ohne Zeitangabe: $v_0^2 = 2 a s$.'
loesung: |
  **Ansatz:** Waagrecht wirkt nur die Gleitreibung $\mu_G F_N = \mu_G m g$, entgegen der Fahrtrichtung. Sie ist die resultierende Kraft.
  ---
  **Verzögerung:** $m a = \mu_G m g$. Die Masse kürzt sich: $a = \mu_G g = 0{,}70\cdot 9{,}81\,\text{m/s}^2 = 6{,}87\,\text{m/s}^2$.
  ---
  **Bremsweg:** $v_0 = 100/3{,}6\,\text{m/s} = 27{,}8\,\text{m/s}$, also $s = \dfrac{v_0^2}{2a} = \dfrac{(27{,}8\,\text{m/s})^2}{2\cdot 6{,}87\,\text{m/s}^2} = 56{,}2\,\text{m}$.
  ---
  **Masse:** Das Ergebnis hängt nicht von der Masse ab. Ein schwererer Wagen ist zwar träger, drückt aber auch stärker auf die Straße und hat dadurch mehr Reibung. Beides gleicht sich genau aus. (In der Praxis bremsen Lkw wegen Bremsen und Reifen trotzdem schlechter.)
```

```aufgabe
id: p3-lkw-kiste
titel: Kiste auf einem anfahrenden Lkw
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Lkw fährt an. Auf der Ladefläche steht eine Kiste, die nicht rutscht. Die Haftreibungszahl zwischen Kiste und Ladefläche ist $\mu_H = 0{,}40$.

  a) In welche Richtung zeigt die Reibungskraft auf die Kiste?

  b) Mit welcher Beschleunigung darf der Lkw höchstens anfahren, ohne dass die Kiste rutscht?
teile:
  - typ: auswahl
    label: a) Richtung der Reibung
    optionen:
      - "nach vorn, in Fahrtrichtung"
      - "nach hinten, entgegen der Fahrtrichtung"
      - "Es wirkt keine Reibung, weil die Kiste relativ zur Ladefläche ruht."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die Fehlvorstellung „Reibung zeigt immer gegen die Bewegung“. Die Kiste wird ja schneller, mit dem Lkw. Dafür braucht sie eine Kraft nach vorn. Die einzige waagrechte Kraft auf sie ist die Haftreibung.
      - wert: 2
        meldung: Gerade weil die Kiste nicht rutscht, wirkt Haftreibung. Ohne sie würde die Kiste stehen bleiben und der Lkw unter ihr wegfahren.
  - typ: zahl
    label: b) größte Beschleunigung
    loesung: "0.4*9.81"
    einheit: "m/s²"
    anzeige: '3{,}92'
    fehler:
      - wert: "0.4"
        meldung: Du hast $g$ vergessen. Aus $m a = \mu_H m g$ folgt $a = \mu_H g$.
hinweise:
  - Die Kiste wird mit dem Lkw schneller. Welche Kraft beschleunigt sie, und in welche Richtung muss sie zeigen?
  - 'Die Haftreibung kann höchstens $\mu_H m g$ betragen. Setze diesen Wert in $F = m a$ ein.'
loesung: |
  **a) Ansatz:** Die Kiste beschleunigt mit dem Lkw nach vorn. Nach dem zweiten Axiom braucht sie eine resultierende Kraft nach vorn. Die einzige waagrechte Kraft ist die Haftreibung, also zeigt sie nach vorn.
  ---
  **b) Grenzfall:** Die Haftreibung erreicht ihren Höchstwert: $m a_{\max} = \mu_H m g$. Die Masse kürzt sich.
  ---
  **Ergebnis:** $a_{\max} = 0{,}40\cdot 9{,}81\,\text{m/s}^2 = 3{,}92\,\text{m/s}^2$. Fährt der Lkw stärker an, rutscht die Kiste nach hinten. Dann wirkt Gleitreibung, ebenfalls nach vorn.
```

```aufgabe
id: p3-luftwiderstand-proportional
titel: Luftwiderstand bei doppelter Geschwindigkeit
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Bei $50\,\text{km/h}$ beträgt der Luftwiderstand eines Autos $80\,\text{N}$. Wie groß ist er bei $100\,\text{km/h}$?
teile:
  - typ: zahl
    loesung: "80*(100/50)^2"
    einheit: "N"
    anzeige: '320'
    fehler:
      - wert: "160"
        meldung: Du hast angenommen, dass der Luftwiderstand proportional zur Geschwindigkeit wächst. Er wächst aber mit $v^2$. Doppelte Geschwindigkeit heißt deshalb vierfacher Luftwiderstand.
hinweise:
  - 'In $F_L = \tfrac12 c_W\rho A v^2$ ändert sich nur $v$.'
  - Um welchen Faktor ändert sich $v^2$, wenn $v$ verdoppelt wird?
loesung: |
  **Ansatz:** $F_L$ ist proportional zu $v^2$, alle anderen Größen bleiben gleich.
  ---
  **Faktor:** $v$ wird verdoppelt, also wird $v^2$ vervierfacht: $2^2 = 4$.
  ---
  **Ergebnis:** $F_L = 4\cdot 80\,\text{N} = 320\,\text{N}$. Deshalb kostet schnelles Fahren so viel mehr Treibstoff.
```

```aufgabe
id: p3-schwer-faellt-schneller
titel: Fallen schwere Körper schneller?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Eine Bleikugel und eine Holzkugel haben denselben Durchmesser. Beide werden gleichzeitig aus $30\,\text{m}$ Höhe losgelassen.

  a) Was passiert in Luft?

  b) Was passiert im Vakuum?
teile:
  - typ: auswahl
    label: a) in Luft
    optionen:
      - "Beide kommen gleichzeitig an."
      - "Die Bleikugel kommt zuerst an."
      - "Die Holzkugel kommt zuerst an."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das gilt nur im Vakuum. In Luft erfahren beide bei gleicher Geschwindigkeit denselben Luftwiderstand. Für die schwerere Bleikugel ist er im Verhältnis zu ihrer Gewichtskraft viel kleiner.
      - wert: 2
        meldung: Das Holz ist leichter. Der gleiche Luftwiderstand bremst es deshalb stärker, nicht schwächer.
  - typ: auswahl
    label: b) im Vakuum
    optionen:
      - "Beide kommen gleichzeitig an."
      - "Die Bleikugel kommt zuerst an."
      - "Die Holzkugel kommt zuerst an."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist die aristotelische Vorstellung. Im Vakuum wirkt nur die Gewichtskraft. Sie ist zwar bei Blei größer, aber Blei ist im selben Maß träger. Beide werden mit $g$ beschleunigt.
hinweise:
  - Vergleiche für beide Kugeln das Verhältnis von Luftwiderstand zu Gewichtskraft bei gleicher Geschwindigkeit.
  - Im Vakuum gibt es keinen Luftwiderstand. Wie groß ist dann $a = F_G/m$?
loesung: |
  **a) In Luft:** Gleiche Form und gleiche Geschwindigkeit ergeben denselben Luftwiderstand. Die resultierende Kraft ist $m g - F_L$, die Beschleunigung $a = g - F_L/m$. Für die schwere Bleikugel ist $F_L/m$ kleiner, sie wird weniger gebremst und kommt zuerst an.
  ---
  **b) Im Vakuum:** Nur die Gewichtskraft wirkt, $a = m g/m = g$ für beide. Sie kommen gleichzeitig an.
  ---
  **Deutung:** „Schwere Körper fallen schneller“ stimmt nur wegen des Luftwiderstands. Die Ursache ist nicht das Gewicht allein, sondern das Verhältnis von Luftwiderstand zu Masse.
```

```aufgabe
id: p3-mu-messreihe
titel: Gleitreibungszahl aus einer Messreihe
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein Holzklotz wird mit einer Federwaage gleichförmig über einen Tisch gezogen. Durch aufgelegte Gewichte wird die Normalkraft verändert. Gemessen werden Normalkraft $F_N$ und Zugkraft $F_Z$:

  - $F_N = 5{,}0\,\text{N}$: $F_Z = 1{,}6\,\text{N}$
  - $F_N = 10{,}0\,\text{N}$: $F_Z = 3{,}1\,\text{N}$
  - $F_N = 15{,}0\,\text{N}$: $F_Z = 4{,}4\,\text{N}$
  - $F_N = 20{,}0\,\text{N}$: $F_Z = 6{,}2\,\text{N}$
  - $F_N = 25{,}0\,\text{N}$: $F_Z = 7{,}6\,\text{N}$

  a) Berechne für jede Messung $\mu_G = F_Z/F_N$ und daraus den Mittelwert (auf drei Nachkommastellen).

  b) Gib als Unsicherheit die halbe Spannweite an, also (größter Wert minus kleinster Wert) durch 2.
plot:
  x: [0, 28]
  y: [0, 9]
  achsen: { x: "F_N in N", y: "F_Z in N" }
  punkte:
    - { x: 5, y: 1.6 }
    - { x: 10, y: 3.1 }
    - { x: 15, y: 4.4 }
    - { x: 20, y: 6.2 }
    - { x: 25, y: 7.6 }
teile:
  - typ: zahl
    label: a) Mittelwert von μ_G
    loesung: "(1.6/5 + 3.1/10 + 4.4/15 + 6.2/20 + 7.6/25)/5"
    toleranz: 0.004
    anzeige: '0{,}307'
    fehler:
      - wert: "(1.6+3.1+4.4+6.2+7.6)/5"
        meldung: Das ist der Mittelwert der Zugkräfte in Newton. Gesucht ist der Mittelwert der Verhältnisse $F_Z/F_N$. Teile jede Zugkraft durch ihre Normalkraft.
  - typ: zahl
    label: b) Unsicherheit
    loesung: "(1.6/5 - 4.4/15)/2"
    toleranz: 0.004
    anzeige: '0{,}013'
    fehler:
      - wert: "1.6/5 - 4.4/15"
        meldung: Das ist die ganze Spannweite. Als Unsicherheit nehmen wir die **halbe** Spannweite, weil der Mittelwert ungefähr in der Mitte liegt.
hinweise:
  - Gleichförmig gezogen heißt resultierende Kraft null, also ist die Zugkraft gleich der Gleitreibung.
  - 'Die Verhältnisse sind $0{,}320$; $0{,}310$; $0{,}293$; $0{,}310$; $0{,}304$. Größter und kleinster Wert bestimmen die Spannweite.'
loesung: |
  **Modell:** Der Klotz bewegt sich gleichförmig, also ist die resultierende Kraft null. Die Zugkraft ist gleich der Gleitreibung, und es gilt $\mu_G = F_Z/F_N$. Im Diagramm liegen die Punkte ungefähr auf einer Geraden durch den Ursprung, deren Steigung $\mu_G$ ist.
  ---
  **Einzelwerte:** $\tfrac{1{,}6}{5{,}0} = 0{,}320$; $\tfrac{3{,}1}{10} = 0{,}310$; $\tfrac{4{,}4}{15} = 0{,}293$; $\tfrac{6{,}2}{20} = 0{,}310$; $\tfrac{7{,}6}{25} = 0{,}304$. Die Einheiten N kürzen sich, $\mu_G$ hat keine Einheit.
  ---
  **a) Mittelwert:** $\bar\mu_G = \dfrac{0{,}320 + 0{,}310 + 0{,}293 + 0{,}310 + 0{,}304}{5} = 0{,}307$.
  ---
  **b) Unsicherheit:** $\Delta\mu_G = \dfrac{0{,}320 - 0{,}293}{2} = 0{,}013$. Ergebnis: $\mu_G = 0{,}307 \pm 0{,}013$, sinnvoll gerundet $0{,}31 \pm 0{,}01$. Das passt zu Holz auf Holz ($\mu_G \approx 0{,}3$). Mehr zur Messunsicherheit im [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen).
```

```aufgabe
id: p3-fallschirm
titel: Endgeschwindigkeit eines Fallschirmspringers
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Auf einen Fallschirmspringer ($80\,\text{kg}$) wirkt bei geschlossenem Schirm der Luftwiderstand $F_L = k v^2$ mit $k = 0{,}25\,\text{kg/m}$.

  a) Welche Endgeschwindigkeit erreicht er?

  b) Wie groß ist seine Beschleunigung, wenn er halb so schnell ist wie die Endgeschwindigkeit?
teile:
  - typ: zahl
    label: a) Endgeschwindigkeit
    loesung: "sqrt(80*9.81/0.25)"
    einheit: "m/s"
    anzeige: '56{,}0'
  - typ: zahl
    label: b) Beschleunigung bei halber Endgeschwindigkeit
    loesung: "9.81*(1 - 0.25)"
    einheit: "m/s²"
    anzeige: '7{,}36'
hinweise:
  - Bei der Endgeschwindigkeit ist die resultierende Kraft null.
  - 'Bei $v_E/2$ ist der Luftwiderstand wegen $v^2$ nur ein Viertel der Gewichtskraft.'
loesung: |
  **Modell:** Zwei Kräfte wirken, die Gewichtskraft $m g$ nach unten und der Luftwiderstand $k v^2$ nach oben. Bei der Endgeschwindigkeit ist die resultierende Kraft null.
  ---
  **a)** $k v_E^2 = m g$, also $v_E = \sqrt{\dfrac{m g}{k}} = \sqrt{\dfrac{80\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}25\,\text{kg/m}}} = \sqrt{3139\,\text{m}^2/\text{s}^2} = 56{,}0\,\text{m/s}$, rund $200\,\text{km/h}$.
  ---
  **b)** Bei $v = v_E/2$ ist $F_L = k v_E^2/4 = m g/4$. Grundgesetz: $m a = m g - m g/4$, also $a = \tfrac34 g = 0{,}75\cdot 9{,}81\,\text{m/s}^2 = 7{,}36\,\text{m/s}^2$.
  ---
  **Plausibilität:** Die Beschleunigung liegt zwischen $g$ (beim Absprung) und $0$ (bei Endgeschwindigkeit). ✓
```

## Das Freikörperbild: alle Kräfte auf einen Körper

```aufgabe
id: p3-6-check
art: check
titel: "Vorwissen: eine schräge Kraft zerlegen"
niveau: 1
angabe: |
  Ein Seil zieht mit $50\,\text{N}$ an einem Wagen. Das Seil ist um $30^\circ$ gegen die Waagrechte nach oben geneigt. Wie groß ist der **waagrechte** Anteil der Kraft in N? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "50*cos(inRad(30))"
    einheit: "N"
    anzeige: '43{,}3'
    fehler:
      - wert: "50*sin(inRad(30))"
        meldung: |
          Das ist der senkrechte Anteil. Der waagrechte Anteil liegt **am** Winkel an (er ist die Ankathete), also gehört der Kosinus dazu.
      - wert: "50"
        meldung: |
          Die ganzen $50\,\text{N}$ wirken nur, wenn das Seil genau waagrecht zieht. Ein schräges Seil zieht teils nach vorn und teils nach oben.
hinweise:
  - 'Zeichne den Kraftpfeil als Hypotenuse eines rechtwinkligen Dreiecks. Der waagrechte Anteil ist die Seite, die am $30^\circ$-Winkel anliegt.'
loesung: |
  Der Kraftpfeil ist die Hypotenuse, der waagrechte Anteil die Ankathete des Winkels. Deshalb gilt $F_x = F\cos 30^\circ$.
  ---
  $F_x = 50\,\text{N}\cdot\cos 30^\circ = 50\,\text{N}\cdot 0{,}866 = 43{,}3\,\text{N}$. Wiederholen kannst du das in Mathematik, [Trigonometrie](/lernen/mathe3/trigonometrie), Abschnitt „Das rechtwinklige Dreieck“, und [Vektoren](/lernen/mathe3/vektoren), Abschnitt „Rechnen mit Vektoren“.
```

In den bisherigen Abschnitten hast du die drei Axiome und die wichtigsten Kraftarten kennengelernt. Jetzt
kommt das Werkzeug, mit dem du **jede** Dynamikaufgabe dieses Kapitels angehst. Es heißt
**Freikörperbild**. In der Prüfung ist es oft schon die halbe Punktzahl, und fast alle Fehler in der
Dynamik entstehen, weil es fehlt oder falsch ist.

### Was ist ein Freikörperbild?

Die Idee: Du nimmst den Körper, der dich interessiert, gedanklich aus seiner Umgebung heraus. Man sagt,
du **schneidest ihn frei**. Überall, wo vorher etwas an ihm gezogen, gedrückt oder ihn berührt hat,
zeichnest du stattdessen einen Kraftpfeil ein. Dazu kommen die Fernkräfte, also vor allem die
Gewichtskraft.

:::definition[Freikörperbild]
Ein **Freikörperbild** (auch Kräfteplan) ist eine Skizze **eines einzigen** Körpers, in die **alle
Kräfte, die auf diesen Körper wirken**, als Pfeile eingezeichnet sind. Jeder Pfeil beginnt am Körper,
zeigt in Richtung der Kraft und trägt einen Namen. Kräfte, die der Körper selbst auf andere Körper
ausübt, gehören **nicht** hinein.

**Beispiel:** Ein Buch liegt auf dem Tisch. Ins Freikörperbild des Buches gehören die Gewichtskraft
(die Erde zieht das Buch nach unten) und die Normalkraft (der Tisch drückt das Buch nach oben).

**Kein Beispiel:** Die Kraft, mit der das Buch auf den Tisch drückt, gehört **nicht** ins Freikörperbild
des Buches. Sie wirkt auf den Tisch. Ebenso wenig gehört ein „Schwung“ hinein: Er ist keine Kraft.
:::

```aufgabe
id: p3-6-gehoert-hinein
art: check
titel: Gehört diese Kraft ins Freikörperbild?
niveau: 1
angabe: |
  Ein Apfel hängt ruhig an einem Zweig. Welche der folgenden Kräfte gehören in das Freikörperbild des **Apfels**? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Die Erde zieht den Apfel nach unten."
      - "Der Zweig zieht den Apfel nach oben."
      - "Der Apfel zieht den Zweig nach unten."
      - "Der Apfel zieht die Erde nach oben."
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          „Der Apfel zieht den Zweig“ wirkt **auf den Zweig**. Ins Freikörperbild des Apfels gehören nur Kräfte, die **auf den Apfel** wirken.
      - wert: [0, 1, 2, 3]
        meldung: |
          Die letzten beiden Kräfte übt der Apfel auf andere Körper aus. Sie gehören in deren Freikörperbilder, nicht in das des Apfels.
hinweise:
  - Lies bei jeder Kraft, auf welchen Körper sie wirkt. Steht dort „den Apfel“?
loesung: |
  Ins Freikörperbild des Apfels gehören die Kräfte, die **auf** ihn wirken: die Gewichtskraft (Erde zieht Apfel) und die Kraft des Zweiges (Zweig zieht Apfel).
  ---
  Die anderen beiden Kräfte übt der Apfel selbst aus. Sie sind die Wechselwirkungspartner der ersten beiden und greifen am Zweig beziehungsweise an der Erde an.
```

:::achtung[Fehler: eine Kraft einzeichnen, die der Körper selbst ausübt]
Ein Buch ($1{,}5\,\text{kg}$) liegt ruhig auf dem Tisch. Eine Schülerin zeichnet ins Freikörperbild des
Buches drei Kräfte: Gewichtskraft $14{,}7\,\text{N}$ nach unten, Normalkraft $14{,}7\,\text{N}$ nach oben und
„Buch drückt auf Tisch“ $14{,}7\,\text{N}$ nach unten. Sie erhält $F_{\text{res}} = 14{,}7\,\text{N}$ nach unten
und wundert sich, warum das Buch nicht durch den Tisch fällt.

Die dritte Kraft wirkt **auf den Tisch**, nicht auf das Buch. Sie gehört ins Freikörperbild des Tisches.
Richtig ist $F_{\text{res}} = 14{,}7\,\text{N} - 14{,}7\,\text{N} = 0$, passend dazu, dass das Buch ruht.
:::

Warum dieser Aufwand? Das zweite Axiom $\vec F_{\text{res}} = m\vec a$ verlangt die Summe **aller** Kräfte
auf **einen** Körper. Das Freikörperbild ist genau diese Liste, als Bild. Fehlt dort eine Kraft, ist die
Summe falsch. Steht dort eine Kraft zu viel, ist sie ebenfalls falsch.

**Wie findet man alle Kräfte?** Mit zwei Fragen, die du dir bei jedem Körper stellst:

1. **Welche Fernkräfte wirken?** In der Mechanik fast immer nur die Gewichtskraft $F_G = m g$, senkrecht nach unten.
2. **Was berührt den Körper?** An jeder Berührstelle wirkt eine Kontaktkraft. Eine Unterlage liefert die
   Normalkraft (senkrecht zur Fläche) und eventuell Reibung (entlang der Fläche). Ein Seil liefert eine
   Seilkraft entlang des Seils. Eine Hand oder ein Motor liefert die gegebene Zug- oder Schubkraft.

Mehr Kräfte gibt es nicht. Insbesondere gibt es keine „Bewegungskraft“, die einen Körper in
Bewegungsrichtung trägt. Das wäre wieder der aristotelische Irrtum aus
[3.1 Kraft und Trägheit](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom): Für Bewegung
braucht man keine Kraft, nur für die **Änderung** der Bewegung.

:::beispiel[Ein Koffer wird an einem schrägen Griff gezogen]
Du ziehst einen Koffer ohne Rollen ($18\,\text{kg}$) an seinem Griff über einen Fliesenboden. Dein Arm zieht mit $F_Z = 60\,\text{N}$ unter $40^\circ$ gegen die Waagrechte. Die
Gleitreibungszahl ist $\mu_G = 0{,}20$. Wie groß ist die Beschleunigung des Koffers?

**Schritt 1, Körper freischneiden und Kräfte sammeln:** Fernkraft: Gewichtskraft $F_G = m g$ nach unten.
Berührungen: Der Boden liefert die Normalkraft $F_N$ nach oben und die Gleitreibung $F_R$ nach hinten.
Der Griff liefert die Zugkraft $F_Z$ schräg nach vorn oben. Das sind vier Kräfte (siehe Bild).

**Schritt 2, Achsen legen:** $x$ waagrecht in Zugrichtung, $y$ senkrecht nach oben. Der Koffer bewegt sich
nur waagrecht, also ist in $y$-Richtung die Beschleunigung null.

**Schritt 3, die schräge Kraft zerlegen:** Waagrecht $F_Z\cos 40^\circ = 60\,\text{N}\cdot 0{,}766 = 46{,}0\,\text{N}$,
senkrecht $F_Z\sin 40^\circ = 60\,\text{N}\cdot 0{,}643 = 38{,}6\,\text{N}$.

**Schritt 4, senkrecht ist die Summe null:** $F_N + 38{,}6\,\text{N} - m g = 0$. Mit
$m g = 18\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 176{,}6\,\text{N}$ folgt
$F_N = 176{,}6\,\text{N} - 38{,}6\,\text{N} = 138{,}0\,\text{N}$.

**Schritt 5, Reibung:** $F_R = \mu_G F_N = 0{,}20\cdot 138{,}0\,\text{N} = 27{,}6\,\text{N}$.

**Schritt 6, waagrecht gilt das Grundgesetz:**
$a = \dfrac{46{,}0\,\text{N} - 27{,}6\,\text{N}}{18\,\text{kg}} = \dfrac{18{,}4\,\text{N}}{18\,\text{kg}} = 1{,}02\,\text{m/s}^2$.

**Kontrolle:** Die Normalkraft ist kleiner als die Gewichtskraft, weil der Arm einen Teil des Koffers
mitträgt. Darum ist auch die Reibung kleiner als $\mu_G m g = 35{,}3\,\text{N}$. ✓
:::

```plot
x: [-3, 4]
y: [-5, 4.2]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -4.41], label: "F_G = 177 N", farbe: 0 }
  - { von: [0, 0], nach: [0, 3.45], label: "F_N = 138 N", farbe: 2 }
  - { von: [0, 0], nach: [1.149, 0.964], label: "F_Z = 60 N", farbe: 1 }
  - { von: [0, 0], nach: [-0.69, 0], label: "F_R", farbe: 3 }
strecken:
  - { von: [0, 0], nach: [1.149, 0], gestrichelt: true, farbe: 1 }
  - { von: [1.149, 0], nach: [1.149, 0.964], gestrichelt: true, farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "Koffer" }
beschriftung: "Freikörperbild des Koffers als Punkt gezeichnet, Maßstab 40 N pro Kästchen. Gewichtskraft F_G (blau) nach unten, Normalkraft F_N (grün) nach oben, Zugkraft F_Z (orange) schräg unter 40 Grad, Gleitreibung F_R (violett) nach hinten. Die gestrichelten Linien zeigen nur, wie F_Z in einen waagrechten und einen senkrechten Anteil zerfällt. Sie sind keine zusätzlichen Kräfte."
```

:::merke[Rezept für jede Dynamikaufgabe]
1. **Körper wählen und freischneiden.** Bei mehreren Körpern bekommt jeder sein eigenes Freikörperbild.
2. **Alle Kräfte einzeichnen:** die Gewichtskraft und an jeder Berührstelle die Kontaktkräfte
   (Normalkraft, Reibung, Seilkraft, gegebene Zug- oder Schubkräfte). Keine „Bewegungskraft“.
3. **Achsen legen:** eine Achse in Richtung der (möglichen) Beschleunigung, die andere senkrecht dazu.
4. **Schräge Kräfte zerlegen** in Anteile entlang der beiden Achsen.
5. **Newton anwenden:** In Richtung der Beschleunigung gilt $\sum F = m a$. Senkrecht dazu gilt
   $\sum F = 0$, daraus folgt meist die Normalkraft.
6. **Auflösen, einsetzen, prüfen:** Einheiten mitrechnen und das Ergebnis auf Plausibilität prüfen.
:::

:::achtung[Fehler: eine „Wurfkraft“ ins Freikörperbild zeichnen]
Ein Ball ($0{,}20\,\text{kg}$) fliegt nach dem Abwurf senkrecht nach oben. Ein Schüler zeichnet eine
„Wurfkraft“ von $5{,}0\,\text{N}$ nach oben ein und rechnet:
$a = \dfrac{5{,}0\,\text{N} - 0{,}20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}20\,\text{kg}} = 15{,}2\,\text{m/s}^2$ nach oben.

Dann würde der Ball immer schneller steigen und nie zurückkommen. Nach dem Abwurf berührt die Hand den
Ball nicht mehr, also gibt es keine Wurfkraft. Im Freikörperbild steht nur die Gewichtskraft, und
richtig ist $a = \dfrac{1{,}96\,\text{N}}{0{,}20\,\text{kg}} = 9{,}81\,\text{m/s}^2$ nach **unten**. Der Ball
wird langsamer, obwohl er noch steigt.
:::


### Kräfte addieren und zerlegen

Kräfte sind Vektoren. Zwei Kräfte in derselben Richtung addiert man einfach, zwei entgegengesetzte zieht
man voneinander ab. Zeigen sie in verschiedene Richtungen, addiert man sie als Pfeile: Man hängt den
zweiten Pfeil an die Spitze des ersten. Der Pfeil vom Anfang des ersten zur Spitze des zweiten ist die
Summe (siehe Mathematik, [Vektoren](/lernen/mathe3/vektoren), Abschnitt „Rechnen mit Vektoren“).

Bequemer rechnet man meist umgekehrt: Man **zerlegt** jede schräge Kraft in zwei Anteile entlang der
gewählten Achsen und addiert dann jede Achse für sich. Für eine Kraft $F$, die den Winkel $\alpha$ mit der
$x$-Achse bildet, gilt
$$F_x = F\cos\alpha, \qquad F_y = F\sin\alpha.$$
Dabei ist $F_x$ der Anteil entlang der $x$-Achse und $F_y$ der Anteil entlang der $y$-Achse. Der Kosinus
gehört zu dem Anteil, der **am** Winkel anliegt. Zum Beispiel hat eine Kraft von $10\,\text{N}$ unter
$60^\circ$ die Anteile $F_x = 10\,\text{N}\cdot 0{,}5 = 5{,}0\,\text{N}$ und
$F_y = 10\,\text{N}\cdot 0{,}866 = 8{,}7\,\text{N}$.

```aufgabe
id: p3-6-vorhersage
art: check
titel: "Vorhersage: zwei Kräfte im rechten Winkel"
niveau: 1
angabe: |
  An einem Punkt ziehen zwei Kräfte: $30\,\text{N}$ nach rechts und $40\,\text{N}$ nach oben. Sag voraus, wie groß die resultierende Kraft ist, bevor du das Widget darunter benutzt.
teile:
  - typ: zahl
    loesung: "sqrt(30^2+40^2)"
    einheit: "N"
    anzeige: '50'
    fehler:
      - wert: "70"
        meldung: |
          Einfach addieren darfst du nur Kräfte in **derselben** Richtung. Hier stehen die Pfeile senkrecht aufeinander. Hänge sie aneinander: Sie bilden ein rechtwinkliges Dreieck, und die Summe ist die Hypotenuse.
      - wert: "10"
        meldung: |
          Abziehen darfst du nur bei **entgegengesetzten** Kräften. Diese beiden Kräfte stehen senkrecht aufeinander.
hinweise:
  - Hänge den zweiten Pfeil an die Spitze des ersten. Welche Figur entsteht?
loesung: |
  Die beiden Pfeile bilden mit ihrer Summe ein rechtwinkliges Dreieck. Die Summe ist die Hypotenuse.
  ---
  $F_{\text{res}} = \sqrt{(30\,\text{N})^2 + (40\,\text{N})^2} = \sqrt{2500\,\text{N}^2} = 50\,\text{N}$. Prüfe das im Widget nach.
```

```widget
name: vektoren
titel: Kräfte addieren und die Resultierende bilden
props:
  a: [3, 0]
  b: [0, 4]
  zeige: [summe, winkel]
```

**Arbeitsauftrag zum Widget.** Ein Kästchen steht für $10\,\text{N}$.

1. **Beobachten:** Stelle $\vec a = (3 \mid 0)$ und $\vec b = (0 \mid 4)$ ein. Stimmt deine Vorhersage von oben?
2. **Vorhersagen, dann prüfen:** Wohin musst du $\vec b$ ziehen, damit die Summe null wird? Überlege zuerst, dann probiere es.
3. **Erklären:** Die Summe ist null, wenn $\vec b$ gleich lang wie $\vec a$ ist und genau in die Gegenrichtung zeigt.
   Genau das ist ein **Kräftegleichgewicht**: Ein Körper, an dem nur diese beiden Kräfte angreifen, ändert seine
   Geschwindigkeit nicht.

### Gleichgewicht mit drei Kräften

Hängt eine Lampe an zwei schrägen Seilen, greifen drei Kräfte an ihr an. Weil die Lampe ruht, ist die
Summe aller drei null. Das liefert zwei Gleichungen, eine für jede Achse. Das ist eine typische
Prüfungsaufgabe. Sind die beiden Seile verschieden steil, trägt das steilere Seil mehr.

:::beispiel[Eine Lampe an zwei verschieden steilen Seilen]
Eine Lampe ($4{,}0\,\text{kg}$) hängt an zwei Seilen. Seil 1 ist um $30^\circ$ gegen die Waagrechte
geneigt, Seil 2 um $60^\circ$. Wie groß sind die beiden Seilkräfte $F_1$ und $F_2$?

**Schritt 1, Freikörperbild:** Die Erde zieht mit $F_G = 4{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 39{,}2\,\text{N}$
nach unten. Seil 1 zieht schräg nach links oben, Seil 2 schräg nach rechts oben (siehe Bild).

**Schritt 2, waagrecht ist die Summe null:** Beide waagrechten Anteile müssen gleich groß sein, sonst würde
die Lampe zur Seite beschleunigt: $F_1\cos 30^\circ = F_2\cos 60^\circ$. Mit $\cos 30^\circ = 0{,}866$ und
$\cos 60^\circ = 0{,}5$ folgt $F_2 = 1{,}732\cdot F_1$.

**Schritt 3, senkrecht ist die Summe null:** Die senkrechten Anteile tragen zusammen das Gewicht:
$F_1\sin 30^\circ + F_2\sin 60^\circ = 39{,}2\,\text{N}$.

**Schritt 4, einsetzen:** $F_1\cdot 0{,}5 + 1{,}732\,F_1\cdot 0{,}866 = 39{,}2\,\text{N}$, also
$2{,}0\cdot F_1 = 39{,}2\,\text{N}$ und $F_1 = 19{,}6\,\text{N}$. Damit ist
$F_2 = 1{,}732\cdot 19{,}6\,\text{N} = 34{,}0\,\text{N}$.

**Kontrolle:** Das steilere Seil 2 trägt mehr. Zusammen sind es $53{,}6\,\text{N}$, mehr als das Gewicht.
Das ist kein Widerspruch: Die waagrechten Anteile ziehen gegeneinander und tragen nichts. ✓
:::

```plot
x: [-7, 4]
y: [-4.5, 4]
gleich: true
strecken:
  - { von: [-7, 3.5], nach: [4, 3.5] }
  - { von: [0, 0], nach: [-6.06, 3.5], gestrichelt: true }
  - { von: [0, 0], nach: [2.02, 3.5], gestrichelt: true }
vektoren:
  - { von: [0, 0], nach: [0, -3.92], label: "F_G = 39,2 N", farbe: 0 }
  - { von: [0, 0], nach: [-1.70, 0.98], label: "F_1 = 19,6 N", farbe: 1 }
  - { von: [0, 0], nach: [1.70, 2.94], label: "F_2 = 34,0 N", farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "Lampe" }
beschriftung: "Freikörperbild einer Lampe an zwei Seilen, Maßstab 10 N pro Kästchen. Die gestrichelten Linien sind die Seile, die obere Linie ist die Decke. Seil 1 (orange) ist 30 Grad steil, Seil 2 (grün) 60 Grad. Beide Seilkräfte haben denselben waagrechten Anteil von 1,7 Kästchen, so heben sich die waagrechten Anteile auf. Die senkrechten Anteile tragen zusammen die Gewichtskraft (blau)."
```

:::achtung[Fehler: Sinus und Kosinus vertauscht]
Eine Kraft von $80\,\text{N}$ zieht unter $20^\circ$ gegen die Waagrechte. Falsch gerechnet: waagrechter
Anteil $80\,\text{N}\cdot\sin 20^\circ = 27{,}4\,\text{N}$.

Der waagrechte Anteil liegt am $20^\circ$-Winkel an, er ist die Ankathete. Richtig ist
$80\,\text{N}\cdot\cos 20^\circ = 75{,}2\,\text{N}$. Schnelle Kontrolle: Bei einem flachen Winkel zieht die
Kraft fast ganz waagrecht, der waagrechte Anteil muss also fast $80\,\text{N}$ sein, nicht ein Drittel davon.
:::

```reflexion
frage: Eine Lampe hängt in der Mitte eines Seils, dessen beide Hälften fast waagrecht gespannt sind. Warum wird die Seilkraft dann riesig, obwohl die Lampe leicht ist?
antwort: |
  Die Seilkräfte müssen mit ihren **senkrechten** Anteilen das Gewicht tragen. Bei einem fast waagrechten Seil ist der
  senkrechte Anteil nur ein winziger Bruchteil der ganzen Seilkraft, nämlich $F_S\sin\alpha$ mit sehr kleinem $\alpha$.
  Damit $2F_S\sin\alpha$ trotzdem das Gewicht ergibt, muss $F_S$ sehr groß werden. Ganz waagrecht ($\alpha = 0$) könnte
  das Seil die Lampe gar nicht tragen. Deshalb hängt jedes belastete Seil ein wenig durch.
```

### Aufgaben zum Freikörperbild

```aufgabe
id: p3-fkb-puck
titel: Das richtige Freikörperbild eines Pucks
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Eishockeypuck gleitet reibungsfrei nach rechts über das Eis. Welches der vier Freikörperbilder ist richtig?
  ```plot
  x: [-1, 15]
  y: [-2.6, 2.8]
  gleich: true
  vektoren:
    - { von: [0, 0], nach: [0, -2], farbe: 0 }
    - { von: [0, 0], nach: [0, 2], farbe: 2 }
    - { von: [0, 0], nach: [1.8, 0], farbe: 1 }
    - { von: [4.5, 0], nach: [4.5, -2], farbe: 0 }
    - { von: [4.5, 0], nach: [4.5, 2], farbe: 2 }
    - { von: [9, 0], nach: [9, -2], farbe: 0 }
    - { von: [13.5, 0], nach: [13.5, -2], farbe: 0 }
    - { von: [13.5, 0], nach: [13.5, 2], farbe: 2 }
    - { von: [13.5, 0], nach: [11.7, 0], farbe: 3 }
  punkte:
    - { x: 0, y: 0, label: "A" }
    - { x: 4.5, y: 0, label: "B" }
    - { x: 9, y: 0, label: "C" }
    - { x: 13.5, y: 0, label: "D" }
  ```
  Blau ist die Gewichtskraft, grün die Normalkraft. A hat zusätzlich einen Pfeil in Bewegungsrichtung, D einen Pfeil gegen die Bewegungsrichtung.
teile:
  - typ: auswahl
    optionen:
      - "Bild A"
      - "Bild B"
      - "Bild C"
      - "Bild D"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Der Pfeil nach rechts wäre eine „Bewegungskraft“. Die gibt es nicht. Nichts berührt den Puck und schiebt ihn. Er gleitet wegen seiner Trägheit weiter (erstes Axiom).
      - wert: 2
        meldung: |
          Das Eis trägt den Puck, sonst würde er nach unten beschleunigt und sinken. Die Normalkraft des Eises fehlt.
      - wert: 3
        meldung: |
          Ein Pfeil gegen die Bewegung wäre eine Reibungskraft. Die Angabe sagt aber „reibungsfrei“. Ohne Reibung gibt es keine waagrechte Kraft.
hinweise:
  - Was berührt den Puck? Welche Fernkraft wirkt? Mehr Kräfte gibt es nicht.
loesung: |
  **Ansatz:** Wir sammeln die Kräfte mit den zwei Fragen. Fernkraft: Gewichtskraft nach unten. Berührung: nur das Eis, und das liefert ohne Reibung nur die Normalkraft nach oben.
  ---
  **Ergebnis:** Bild B. Die beiden senkrechten Kräfte heben sich auf, waagrecht wirkt keine Kraft. Deshalb gleitet der Puck mit konstanter Geschwindigkeit weiter, genau wie das erste Axiom sagt.
```

```aufgabe
id: p3-komponenten
titel: Eine Zugkraft in Anteile zerlegen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Hund zieht an der Leine mit $120\,\text{N}$. Die Leine ist um $35^\circ$ gegen die Waagrechte nach oben geneigt. Berechne den waagrechten und den senkrechten Anteil der Kraft. Runde auf ganze Newton.
teile:
  - typ: zahl
    label: waagrechter Anteil
    loesung: "120*cos(inRad(35))"
    einheit: "N"
    anzeige: '98{,}3 \approx 98'
    fehler:
      - wert: "120*sin(inRad(35))"
        meldung: |
          Das ist der senkrechte Anteil. Der waagrechte Anteil liegt am $35^\circ$-Winkel an, deshalb gehört der Kosinus dazu.
      - wert: "120"
        meldung: |
          Die volle Kraft wirkt nur, wenn die Leine waagrecht ist. Hier zieht sie schräg, also ist der waagrechte Anteil kleiner.
  - typ: zahl
    label: senkrechter Anteil
    loesung: "120*sin(inRad(35))"
    einheit: "N"
    anzeige: '68{,}8 \approx 69'
    fehler:
      - wert: "120*cos(inRad(35))"
        meldung: |
          Das ist der waagrechte Anteil. Der senkrechte Anteil liegt dem Winkel gegenüber, also brauchst du den Sinus.
      - wert: "120-120*cos(inRad(35))"
        meldung: |
          Die Anteile ergeben zusammen nicht $120\,\text{N}$, wenn man sie einfach addiert. Sie bilden mit der Kraft ein rechtwinkliges Dreieck. Berechne den senkrechten Anteil direkt mit dem Sinus.
hinweise:
  - 'Waagrechter Anteil $F\cos\alpha$, senkrechter Anteil $F\sin\alpha$, wenn $\alpha$ der Winkel zur Waagrechten ist.'
loesung: |
  **Ansatz:** Der Kraftpfeil ist die Hypotenuse eines rechtwinkligen Dreiecks. Der waagrechte Anteil ist die Ankathete des $35^\circ$-Winkels, der senkrechte die Gegenkathete.
  ---
  **Rechnung:** $F_x = 120\,\text{N}\cdot\cos 35^\circ = 120\,\text{N}\cdot 0{,}819 = 98\,\text{N}$ und $F_y = 120\,\text{N}\cdot\sin 35^\circ = 120\,\text{N}\cdot 0{,}574 = 69\,\text{N}$.
  ---
  **Probe mit Pythagoras:** $\sqrt{(98{,}3\,\text{N})^2 + (68{,}8\,\text{N})^2} = 120\,\text{N}$. ✓
```

```aufgabe
id: p3-fkb-zaehlen
titel: Wie viele Kräfte wirken?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ein Buch liegt ruhig auf einem schräg gestellten Brett und rutscht nicht. Wie viele Kräfte gehören in das Freikörperbild des Buches?
teile:
  - typ: zahl
    loesung: "3"
    fehler:
      - wert: "4"
        meldung: |
          Vermutlich hast du die Hangabtriebskraft als eigene Kraft gezählt. Sie ist aber nur ein **Anteil** der Gewichtskraft. Wer sie zusätzlich einzeichnet, zählt die Gewichtskraft teilweise doppelt.
      - wert: "2"
        meldung: |
          Gewichtskraft und Normalkraft allein können das Buch auf dem schrägen Brett nicht halten. Die Normalkraft steht senkrecht zum Brett, die Gewichtskraft senkrecht nach unten, ihre Summe zeigt hangabwärts. Eine dritte Kraft hält das Buch fest.
hinweise:
  - Fernkraft? Und was liefert das Brett an der Berührfläche, senkrecht und entlang der Fläche?
loesung: |
  **Ansatz:** Fernkraft ist die Gewichtskraft. Das Brett berührt das Buch und liefert zwei Kontaktkräfte, eine senkrecht und eine entlang der Fläche.
  ---
  **Ergebnis:** Drei Kräfte: Gewichtskraft (senkrecht nach unten), Normalkraft (senkrecht zum Brett) und Haftreibung (entlang des Bretts, hangaufwärts). Die Hangabtriebskraft ist keine vierte Kraft, sondern ein Anteil der Gewichtskraft.
```

```aufgabe
id: p3-fkb-pendel
titel: Freikörperbild eines Pendels am Umkehrpunkt
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Eine Pendelkugel hängt an einem Faden. Sie ist ganz nach rechts ausgeschwungen und für einen Augenblick in Ruhe, gleich danach schwingt sie zurück. Welches Freikörperbild ist richtig? Luftwiderstand vernachlässigen wir.
  ```plot
  x: [-1, 16]
  y: [-1.5, 3.6]
  gleich: true
  strecken:
    - { von: [0, 3], nach: [1.5, 0.4], gestrichelt: true }
    - { von: [4.5, 3], nach: [6, 0.4], gestrichelt: true }
    - { von: [9, 3], nach: [10.5, 0.4], gestrichelt: true }
    - { von: [13.5, 3], nach: [15, 0.4], gestrichelt: true }
  vektoren:
    - { von: [1.5, 0.4], nach: [1.5, -1.4], farbe: 0 }
    - { von: [1.5, 0.4], nach: [0.72, 1.75], farbe: 2 }
    - { von: [6, 0.4], nach: [6, -1.4], farbe: 0 }
    - { von: [10.5, 0.4], nach: [10.5, -1.4], farbe: 0 }
    - { von: [10.5, 0.4], nach: [9.72, 1.75], farbe: 2 }
    - { von: [10.5, 0.4], nach: [9.63, -0.1], farbe: 1 }
    - { von: [15, 0.4], nach: [15, -1.4], farbe: 0 }
    - { von: [15, 0.4], nach: [14.22, 1.75], farbe: 2 }
    - { von: [15, 0.4], nach: [15.87, 0.9], farbe: 1 }
  punkte:
    - { x: 0, y: 3.2, label: "A" }
    - { x: 4.5, y: 3.2, label: "B" }
    - { x: 9, y: 3.2, label: "C" }
    - { x: 13.5, y: 3.2, label: "D" }
  ```
  Gestrichelt ist der Faden. Blau ist die Gewichtskraft, grün die Fadenkraft. In C zeigt ein oranger Pfeil zur Mitte zurück, in D ein oranger Pfeil nach außen.
teile:
  - typ: auswahl
    optionen:
      - "Bild A"
      - "Bild B"
      - "Bild C"
      - "Bild D"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Faden ist gespannt und zieht an der Kugel. Eine Fadenkraft entlang des Fadens fehlt.
      - wert: 2
        meldung: |
          Der Pfeil zur Mitte ist die „Rückstellkraft“. Sie ist keine eigene Kraft, sondern die **Summe** aus Gewichtskraft und Fadenkraft. Wer sie zusätzlich einzeichnet, zählt doppelt. Frage dich: Welcher Körper sollte diese dritte Kraft ausüben?
      - wert: 3
        meldung: |
          Ein Pfeil nach außen wäre ein „Schwung“. Der ist keine Kraft. Die Kugel ruht am Umkehrpunkt sogar für einen Augenblick, und kein Körper schiebt sie nach außen.
hinweise:
  - Was berührt die Kugel? Welche Fernkraft wirkt?
  - Für jeden Pfeil muss es einen Körper geben, der die Kraft ausübt.
loesung: |
  **Ansatz:** Fernkraft ist die Gewichtskraft. Berührt wird die Kugel nur vom Faden, und der zieht entlang des Fadens zum Aufhängepunkt.
  ---
  **Ergebnis:** Bild A mit genau zwei Kräften.
  ---
  **Deutung:** Die beiden Kräfte heben sich nicht auf. Ihre Summe zeigt schräg nach links unten, zurück zur Mitte. Deshalb schwingt die Kugel zurück. Die „Rückstellkraft“ ist diese Summe, keine dritte Kraft.
```

```aufgabe
id: p3-schlitten-schraeg
titel: Schlitten an einer schrägen Leine
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Schlitten mit Kind ($35\,\text{kg}$) wird auf ebenem Schnee an einer Leine gezogen. Die Leine ist um $25^\circ$ gegen die Waagrechte nach oben geneigt, die Zugkraft beträgt $150\,\text{N}$. Die Gleitreibungszahl ist $\mu_G = 0{,}10$. Berechne die Normalkraft und die Beschleunigung. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Normalkraft
    loesung: "35*9.81 - 150*sin(inRad(25))"
    einheit: "N"
    anzeige: '280'
    fehler:
      - wert: "35*9.81"
        meldung: |
          Du hast $F_N = m g$ gesetzt. Die Leine zieht aber schräg nach oben und trägt einen Teil des Gewichts. Bestimme $F_N$ aus dem Gleichgewicht in senkrechter Richtung.
      - wert: "35*9.81 - 150*cos(inRad(25))"
        meldung: |
          Du hast den waagrechten Anteil abgezogen. Senkrecht wirkt der Anteil $F_Z\sin 25^\circ$.
  - typ: zahl
    label: Beschleunigung
    loesung: "(150*cos(inRad(25)) - 0.1*(35*9.81 - 150*sin(inRad(25))))/35"
    einheit: "m/s²"
    anzeige: '3{,}08'
    fehler:
      - wert: "(150 - 0.1*35*9.81)/35"
        meldung: |
          Du hast die ganze Zugkraft als waagrechte Kraft verwendet und $F_N = m g$ gesetzt. Waagrecht zieht nur $F_Z\cos 25^\circ$.
      - wert: "(150*cos(inRad(25)) - 0.1*35*9.81)/35"
        meldung: |
          Fast. Die Reibung hast du aber mit $F_N = m g$ berechnet. Die Leine entlastet den Boden, deshalb ist die Reibung etwas kleiner.
hinweise:
  - Zeichne das Freikörperbild mit vier Kräften und zerlege die Zugkraft in einen waagrechten und einen senkrechten Anteil.
  - 'Senkrecht ist die Summe null: $F_N + F_Z\sin 25^\circ - m g = 0$. Waagrecht gilt $F_Z\cos 25^\circ - \mu_G F_N = m a$.'
gefuehrt:
  - text: Berechne den waagrechten Anteil der Zugkraft in N.
    teil: { typ: zahl, loesung: "150*cos(inRad(25))" }
    erklaerung: '$150\,\text{N}\cdot\cos 25^\circ = 150\,\text{N}\cdot 0{,}906 = 135{,}9\,\text{N}$.'
  - text: Berechne den senkrechten Anteil der Zugkraft in N.
    teil: { typ: zahl, loesung: "150*sin(inRad(25))" }
    erklaerung: '$150\,\text{N}\cdot\sin 25^\circ = 150\,\text{N}\cdot 0{,}423 = 63{,}4\,\text{N}$.'
  - text: Berechne die Normalkraft in N.
    teil: { typ: zahl, loesung: "35*9.81 - 150*sin(inRad(25))" }
    erklaerung: 'Senkrecht ruht der Schlitten. Also $F_N = m g - 63{,}4\,\text{N} = 343{,}4\,\text{N} - 63{,}4\,\text{N} = 280\,\text{N}$.'
  - text: Berechne die Beschleunigung in $\text{m/s}^2$.
    teil: { typ: zahl, loesung: "(150*cos(inRad(25)) - 0.1*(35*9.81 - 150*sin(inRad(25))))/35" }
    erklaerung: 'Reibung $0{,}10\cdot 280\,\text{N} = 28{,}0\,\text{N}$. Also $a = (135{,}9\,\text{N} - 28{,}0\,\text{N})/35\,\text{kg} = 3{,}08\,\text{m/s}^2$.'
loesung: |
  **Ansatz:** Freikörperbild mit Gewichtskraft, Normalkraft, Reibung und schräger Zugkraft. Achsen waagrecht (Bewegungsrichtung) und senkrecht. Senkrecht gilt Gleichgewicht, waagrecht das Grundgesetz.
  ---
  **Zerlegen:** $F_Z\cos 25^\circ = 150\,\text{N}\cdot 0{,}906 = 135{,}9\,\text{N}$ waagrecht, $F_Z\sin 25^\circ = 150\,\text{N}\cdot 0{,}423 = 63{,}4\,\text{N}$ senkrecht.
  ---
  **Normalkraft:** $F_N = m g - F_Z\sin 25^\circ = 35\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 - 63{,}4\,\text{N} = 343{,}4\,\text{N} - 63{,}4\,\text{N} = 280\,\text{N}$.
  ---
  **Beschleunigung:** $F_R = 0{,}10\cdot 280\,\text{N} = 28{,}0\,\text{N}$, also $a = \dfrac{135{,}9\,\text{N} - 28{,}0\,\text{N}}{35\,\text{kg}} = 3{,}08\,\text{m/s}^2$.
  ---
  **Plausibilität:** Ohne Reibung wären es $135{,}9/35 = 3{,}88\,\text{m/s}^2$. Mit Reibung muss es weniger sein. ✓
```

```aufgabe
id: p3-lampe
titel: Lampe in der Mitte eines Drahtes
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Eine Gartenlampe ($m = 2{,}0\,\text{kg}$) hängt in der Mitte eines Drahtes. Beide Drahthälften sind um $30^\circ$ gegen die Waagrechte geneigt. Wie groß ist die Kraft in jeder Drahthälfte? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "2*9.81/(2*sin(inRad(30)))"
    einheit: "N"
    anzeige: '19{,}6'
    fehler:
      - wert: "2*9.81/2"
        meldung: |
          Du hast das Gewicht einfach auf zwei Drähte verteilt. Das stimmt nur bei senkrechten Drähten. Schräge Drähte tragen nur mit ihrem senkrechten Anteil $F_S\sin 30^\circ$.
      - wert: "2*9.81/(2*cos(inRad(30)))"
        meldung: |
          Du hast den Kosinus verwendet. Der Winkel liegt an der **Waagrechten** an. Der senkrechte Anteil, der das Gewicht trägt, ist deshalb $F_S\sin 30^\circ$.
hinweise:
  - Die Lampe ruht, also ist die Summe aller Kräfte null, waagrecht und senkrecht.
  - 'Aus Symmetrie ziehen beide Drahthälften gleich stark. Senkrecht tragen sie zusammen $2F_S\sin 30^\circ$.'
loesung: |
  **Ansatz:** Drei Kräfte greifen an der Lampe an, zwei Drahtkräfte und die Gewichtskraft. Die Lampe ruht, also ist die Summe null. Wegen der Symmetrie sind beide Drahtkräfte gleich groß, die waagrechten Anteile heben sich auf.
  ---
  **Senkrecht:** $2 F_S\sin 30^\circ = m g$, also $F_S = \dfrac{m g}{2\sin 30^\circ} = \dfrac{2{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{2\cdot 0{,}5} = 19{,}6\,\text{N}$.
  ---
  **Deutung:** Jede Drahthälfte trägt so viel wie die ganze Gewichtskraft der Lampe. Je flacher der Draht, desto größer die Kraft. Darum kann man einen belasteten Draht nie ganz gerade spannen.
```

```aufgabe
id: p3-fkb-fehler-finden
titel: Fehler im Freikörperbild finden
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Eine Kiste rutscht eine raue Rampe hinab. Ein Mitschüler zeichnet ihr Freikörperbild mit fünf Kräften: Gewichtskraft (nach unten), Normalkraft (senkrecht zur Rampe), Reibung (hangaufwärts), Hangabtriebskraft (hangabwärts) und „Bewegungskraft“ (hangabwärts). Finde die Fehler und begründe, warum es Fehler sind. Wie viele Kräfte bleiben übrig?
teile:
  - typ: text
    muster: |
      Zwei Pfeile sind falsch. Die Hangabtriebskraft ist keine eigene Kraft, sondern der Anteil der Gewichtskraft
      entlang der Rampe. Zeichnet man sie zusätzlich zur Gewichtskraft ein, zählt man diesen Anteil doppelt. Die
      „Bewegungskraft“ gibt es nicht: Kein Körper übt sie aus, und für Bewegung braucht man keine Kraft. Es bleiben
      drei Kräfte: Gewichtskraft, Normalkraft und Gleitreibung (hangaufwärts, gegen die Rutschbewegung).
hinweise:
  - Prüfe für jeden Pfeil, welcher Körper diese Kraft ausübt.
  - Ist die Hangabtriebskraft eine neue Kraft oder ein Teil einer Kraft, die schon eingezeichnet ist?
loesung: |
  **Ansatz:** Jeder Pfeil braucht einen Körper, der die Kraft ausübt. Außerdem darf keine Kraft doppelt vorkommen.
  ---
  **Hangabtriebskraft:** Sie ist der Anteil der Gewichtskraft entlang der Rampe. Die Erde übt keine zweite Kraft aus. Wer sie neben der Gewichtskraft einzeichnet, zählt diesen Anteil doppelt.
  ---
  **„Bewegungskraft“:** Kein Körper übt sie aus. Die Kiste wird hangabwärts beschleunigt, weil der Hangabtriebsanteil der Gewichtskraft größer ist als die Reibung. Eine eigene Kraft dafür gibt es nicht.
  ---
  **Ergebnis:** Drei Kräfte bleiben: Gewichtskraft, Normalkraft und Gleitreibung hangaufwärts.
```

```aufgabe
id: p3-drei-kraefte-asym
titel: Ein Schild an zwei verschieden steilen Seilen
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Wirtshausschild ($6{,}0\,\text{kg}$) hängt an zwei Seilen. Seil 1 ist um $30^\circ$ gegen die Waagrechte geneigt, Seil 2 um $45^\circ$. Berechne beide Seilkräfte. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Seilkraft im 30°-Seil
    loesung: "6*9.81*cos(inRad(45))/sin(inRad(75))"
    einheit: "N"
    anzeige: '43{,}1'
    fehler:
      - wert: "6*9.81/(2*sin(inRad(30)))"
        meldung: |
          Diese Formel gilt nur bei **gleich** steilen Seilen, dann trägt jedes die Hälfte. Hier sind die Seile verschieden steil. Du brauchst zwei Gleichungen, eine waagrecht und eine senkrecht.
      - wert: "6*9.81/2"
        meldung: |
          Das Gewicht verteilt sich nicht einfach zur Hälfte, und die Seile sind schräg. Stelle die Gleichgewichtsbedingungen für beide Richtungen auf.
  - typ: zahl
    label: Seilkraft im 45°-Seil
    loesung: "6*9.81*cos(inRad(30))/sin(inRad(75))"
    einheit: "N"
    anzeige: '52{,}8'
    fehler:
      - wert: "6*9.81*cos(inRad(45))/sin(inRad(75))"
        meldung: |
          Das ist die Kraft im flacheren Seil. Das steilere Seil trägt mehr.
hinweise:
  - 'Waagrecht heben sich die Anteile auf: $F_1\cos 30^\circ = F_2\cos 45^\circ$.'
  - 'Senkrecht tragen beide zusammen das Gewicht: $F_1\sin 30^\circ + F_2\sin 45^\circ = m g$. Drücke $F_2$ aus der ersten Gleichung durch $F_1$ aus und setze ein.'
loesung: |
  **Ansatz:** Das Schild ruht, also ist die Summe aller drei Kräfte null, und zwar waagrecht und senkrecht getrennt. Das gibt zwei Gleichungen für die zwei Unbekannten $F_1$ und $F_2$.
  ---
  **Waagrecht:** $F_1\cos 30^\circ = F_2\cos 45^\circ$, also $F_2 = F_1\cdot\dfrac{0{,}866}{0{,}707} = 1{,}225\,F_1$.
  ---
  **Senkrecht:** $F_1\cdot 0{,}5 + 1{,}225\,F_1\cdot 0{,}707 = 6{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 58{,}9\,\text{N}$. Das ergibt $1{,}366\,F_1 = 58{,}9\,\text{N}$, also $F_1 = 43{,}1\,\text{N}$.
  ---
  **Zweite Kraft:** $F_2 = 1{,}225\cdot 43{,}1\,\text{N} = 52{,}8\,\text{N}$.
  ---
  **Probe senkrecht:** $43{,}1\,\text{N}\cdot 0{,}5 + 52{,}8\,\text{N}\cdot 0{,}707 = 21{,}5\,\text{N} + 37{,}3\,\text{N} = 58{,}8\,\text{N} \approx m g$. ✓ Wie erwartet trägt das steilere Seil mehr.
```

## Die schiefe Ebene: hinab, hinauf und die Haftgrenze

```aufgabe
id: p3-7-check
art: check
titel: "Vorwissen: Neigungswinkel einer Rampe"
niveau: 1
angabe: |
  Eine Rampe steigt auf $4{,}0\,\text{m}$ waagrechter Länge um $1{,}0\,\text{m}$ an. Wie groß ist ihr Neigungswinkel gegen die Waagrechte in Grad? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "inGrad(atan(1/4))"
    einheit: "°"
    anzeige: '14{,}0'
    fehler:
      - wert: "inGrad(asin(1/4))"
        meldung: |
          Du hast den Sinus verwendet. Der Sinus wäre Höhe durch **Rampenlänge** (Hypotenuse). Gegeben ist aber die waagrechte Länge, also die Ankathete. Höhe durch Ankathete ist der Tangens.
      - wert: "1/4"
        meldung: |
          $0{,}25$ ist die Steigung, nicht der Winkel. Den Winkel bekommst du mit der Umkehrfunktion: $\alpha = \arctan 0{,}25$.
hinweise:
  - 'Höhe und waagrechte Länge sind Gegenkathete und Ankathete. Welche Winkelfunktion verbindet sie?'
loesung: |
  Höhe durch waagrechte Länge ist der Tangens des Neigungswinkels: $\tan\alpha = \dfrac{1{,}0\,\text{m}}{4{,}0\,\text{m}} = 0{,}25$.
  ---
  $\alpha = \arctan 0{,}25 = 14{,}0^\circ$. Wiederholen kannst du das in Mathematik, [Trigonometrie](/lernen/mathe3/trigonometrie), Abschnitt „Steigung, Höhenwinkel und Vermessung“.
```

Eine Rampe, ein Skihang, eine Rutsche, eine Straße am Berg: Das ist eine **schiefe Ebene**, also eine
ebene Fläche, die um einen **Neigungswinkel** $\alpha$ gegen die Waagrechte gekippt ist. Sie ist das
wichtigste Beispiel dafür, wie man ein Freikörperbild mit **gekippten Achsen** auswertet. In der
schriftlichen Prüfung kommt sie sehr häufig vor.

### Warum man die Achsen kippt

Ein Körper auf der Rampe kann sich nur **entlang** der Rampe bewegen. Senkrecht zur Rampe bleibt er
liegen. Deshalb legt man die $x$-Achse entlang der Rampe und die $y$-Achse senkrecht dazu. Dann gilt
senkrecht zur Rampe das Gleichgewicht und entlang der Rampe das Grundgesetz. Zwei der drei Kräfte liegen
schon auf diesen Achsen: Die Normalkraft steht senkrecht zur Rampe, die Reibung wirkt entlang der Rampe.
Nur die **Gewichtskraft** ist schräg zu den Achsen und muss zerlegt werden.

```plot
x: [-1, 7]
y: [-2, 4.6]
gleich: true
strecken:
  - { von: [0, 0], nach: [6, 0] }
  - { von: [6, 0], nach: [0, 3.46] }
  - { von: [0, 0], nach: [0, 3.46] }
vektoren:
  - { von: [3, 1.73], nach: [3, -1.27], label: "F_G", farbe: 0 }
  - { von: [3, 1.73], nach: [4.30, 3.98], label: "F_N", farbe: 2 }
  - { von: [3, 1.73], nach: [2.22, 2.18], label: "F_R", farbe: 3 }
beschriftung: "Freikörperbild einer Kiste, die eine 30 Grad steile Rampe hinabrutscht. Die Rampe fällt nach rechts ab. Es wirken genau drei Kräfte: die Gewichtskraft F_G (blau) senkrecht nach unten, die Normalkraft F_N (grün) senkrecht zur Rampe und die Gleitreibung F_R (violett) entlang der Rampe nach links oben, also gegen die Rutschrichtung."
```

Der Neigungswinkel taucht beim Zerlegen wieder auf, und zwar als Winkel zwischen der Gewichtskraft und
der Senkrechten zur Rampe. Warum? Stell dir die Rampe zuerst waagrecht vor. Dann zeigt die Senkrechte zur
Rampe genau nach unten, in Richtung der Gewichtskraft, der Winkel zwischen beiden ist null. Kippst du die
Rampe um $\alpha$, kippt ihre Senkrechte um genau denselben Winkel mit. Die Gewichtskraft zeigt weiter
lotrecht nach unten. Also schließen beide jetzt den Winkel $\alpha$ ein.

```plot
x: [-1, 7]
y: [-2, 4.2]
gleich: true
strecken:
  - { von: [0, 0], nach: [6, 0] }
  - { von: [6, 0], nach: [0, 3.46] }
  - { von: [0, 0], nach: [0, 3.46] }
  - { von: [3, 1.73], nach: [4.30, 0.98], gestrichelt: true, farbe: 1 }
  - { von: [3, 1.73], nach: [1.70, -0.52], gestrichelt: true, farbe: 2 }
  - { von: [4.30, 0.98], nach: [3, -1.27], gestrichelt: true }
  - { von: [1.70, -0.52], nach: [3, -1.27], gestrichelt: true }
vektoren:
  - { von: [3, 1.73], nach: [3, -1.27], label: "F_G", farbe: 0 }
punkte:
  - { x: 4.30, y: 0.98, label: "F_H = F_G sin α", farbe: 1 }
  - { x: 1.70, y: -0.52, label: "F_G cos α", farbe: 2 }
beschriftung: "Kraftzerlegung, kein Freikörperbild: Die Gewichtskraft F_G (blauer Pfeil) wird in zwei Anteile zerlegt, gestrichelt gezeichnet. Der orange Anteil zeigt entlang der Rampe nach rechts unten, also hangabwärts. Das ist die Hangabtriebskraft F_H = F_G sin α. Der grüne Anteil drückt senkrecht in die Rampe, F_G cos α. Die beiden Anteile ersetzen F_G, sie kommen nicht zusätzlich dazu."
```

:::satz[Zerlegung der Gewichtskraft auf der schiefen Ebene]
Auf einer schiefen Ebene mit Neigungswinkel $\alpha$ zerlegt man die Gewichtskraft $F_G = m g$ in
$$F_H = m g\sin\alpha \quad\text{(parallel zur Ebene, hangabwärts)}, \qquad F_{G\perp} = m g\cos\alpha \quad\text{(senkrecht in die Ebene)}.$$
$F_H$ heißt **Hangabtriebskraft**. Wirken senkrecht zur Ebene keine weiteren Kräfte, gleicht die
Normalkraft den senkrechten Anteil aus: $F_N = m g\cos\alpha$.
:::

**Beispiel mit Zahlen:** Ein Körper mit $8{,}0\,\text{kg}$ liegt auf einer $30^\circ$-Rampe. Seine
Gewichtskraft ist $8{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 78{,}5\,\text{N}$. Dann ist
$F_H = 78{,}5\,\text{N}\cdot 0{,}5 = 39{,}2\,\text{N}$ und $F_N = 78{,}5\,\text{N}\cdot 0{,}866 = 68{,}0\,\text{N}$.

**Kein Beispiel:** Drückt jemand die Kiste zusätzlich senkrecht auf die Rampe, ist $F_N$ **nicht** mehr
$m g\cos\alpha$, sondern größer. Die Formel für $F_N$ gilt nur, wenn senkrecht zur Ebene keine anderen
Kräfte wirken. Bestimme $F_N$ deshalb immer aus dem Gleichgewicht senkrecht zur Ebene.

**Merkhilfe, ob sin oder cos:** Prüfe die Extremfälle. Bei $\alpha = 0$ (waagrecht) gibt es keinen
Hangabtrieb. Das passt zu $\sin 0^\circ = 0$. Bei $\alpha = 90^\circ$ (senkrechte Wand) drückt der Körper
nicht mehr auf die Fläche. Das passt zu $\cos 90^\circ = 0$.

### Hinabgleiten ohne und mit Reibung

**Ohne Reibung** wirkt entlang der Ebene nur $F_H$. Das Grundgesetz $m a = m g\sin\alpha$ liefert
$a = g\sin\alpha$. Die Masse kürzt sich, ein schwerer und ein leichter Körper gleiten gleich schnell.

**Mit Gleitreibung** bremst zusätzlich $F_R = \mu_G F_N = \mu_G m g\cos\alpha$, und zwar hangaufwärts.
Hangabwärts gilt dann $m a = m g\sin\alpha - \mu_G m g\cos\alpha$, also
$$a_{\text{hinab}} = g\,(\sin\alpha - \mu_G\cos\alpha).$$
Dabei ist $\mu_G$ die Gleitreibungszahl aus
[3.5 Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand).

:::beispiel[Ein Skifahrer gleitet einen Hang hinab]
Ein Skifahrer ($70\,\text{kg}$) gleitet ohne Stockeinsatz einen $20^\circ$ steilen Hang hinab. Die
Gleitreibungszahl zwischen Ski und Schnee ist $\mu_G = 0{,}080$. Den Luftwiderstand vernachlässigen wir.

**Schritt 1, Freikörperbild und Achsen:** Gewichtskraft, Normalkraft, Gleitreibung hangaufwärts.
$x$-Achse hangabwärts, $y$-Achse senkrecht zum Hang.

**Schritt 2, zerlegen:** $m g = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 686{,}7\,\text{N}$. Hangabtrieb
$F_H = 686{,}7\,\text{N}\cdot\sin 20^\circ = 686{,}7\,\text{N}\cdot 0{,}342 = 234{,}9\,\text{N}$.

**Schritt 3, senkrecht zum Hang:** Gleichgewicht, also $F_N = m g\cos 20^\circ = 686{,}7\,\text{N}\cdot 0{,}940 = 645{,}3\,\text{N}$.

**Schritt 4, Reibung:** $F_R = 0{,}080\cdot 645{,}3\,\text{N} = 51{,}6\,\text{N}$, hangaufwärts.

**Schritt 5, Grundgesetz entlang des Hangs:**
$a = \dfrac{234{,}9\,\text{N} - 51{,}6\,\text{N}}{70\,\text{kg}} = 2{,}62\,\text{m/s}^2$.

**Kontrolle mit der Formel:** $a = 9{,}81\,\text{m/s}^2\cdot(0{,}342 - 0{,}080\cdot 0{,}940) = 2{,}62\,\text{m/s}^2$. ✓
Ohne Reibung wären es $g\sin 20^\circ = 3{,}36\,\text{m/s}^2$.
:::

:::achtung[Fehler: Sinus und Kosinus auf der schiefen Ebene vertauscht]
Eine Kiste ($12\,\text{kg}$) liegt auf einer $40^\circ$-Rampe. Falsch gerechnet:
$F_H = m g\cos 40^\circ = 117{,}7\,\text{N}\cdot 0{,}766 = 90{,}2\,\text{N}$.

Richtig ist $F_H = m g\sin 40^\circ = 117{,}7\,\text{N}\cdot 0{,}643 = 75{,}7\,\text{N}$. Die Probe mit dem
Extremfall deckt den Fehler auf: Mit dem Kosinus hätte eine waagrechte Fläche ($\alpha = 0$) den vollen
Hangabtrieb $m g$. Ein Körper auf einem waagrechten Tisch rutscht aber nicht von selbst los.
:::

### Die Haftgrenze

Eine ruhende Kiste auf der Rampe wird von der **Haftreibung** festgehalten. Solange sie ruht, gleicht die
Haftreibung den Hangabtrieb genau aus. Sie kann aber höchstens $\mu_H F_N$ groß werden (siehe
[3.5 Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand)). Kippt man die Rampe immer steiler, wächst $F_H$, und $F_N$ schrumpft. Bei
einem bestimmten Winkel reicht die Haftreibung gerade nicht mehr. Dieser Grenzfall heißt **Haftgrenze**.

Im Grenzfall ist der Hangabtrieb gleich dem Höchstwert der Haftreibung:
$m g\sin\alpha = \mu_H\,m g\cos\alpha$. Wir teilen beide Seiten durch $m g\cos\alpha$ und erhalten
$$\tan\alpha_{\text{Grenz}} = \mu_H.$$
Ist die Rampe steiler, rutscht der Körper los. Ist sie flacher, bleibt er liegen. Die Masse spielt
wieder keine Rolle. So kann man $\mu_H$ messen: Man kippt ein Brett langsam, bis der Klotz losrutscht,
und misst den Winkel. Bei $\alpha_{\text{Grenz}} = 27^\circ$ zum Beispiel ist $\mu_H = \tan 27^\circ = 0{,}51$.

```aufgabe
id: p3-7-vorhersage
art: check
titel: "Vorhersage: Was ändert eine rauere Fläche?"
niveau: 1
angabe: |
  Das Widget unten zeigt die Beschleunigung hangabwärts $a = g(\sin\alpha - \mu\cos\alpha)$ in Abhängigkeit vom Neigungswinkel. Wo die Kurve die Null kreuzt, liegt die Haftgrenze. Sag voraus: Was passiert mit diesem Nullpunkt, wenn du die Reibungszahl $\mu$ größer machst?
teile:
  - typ: auswahl
    optionen:
      - "Er wandert nach rechts, zu größeren Winkeln."
      - "Er wandert nach links, zu kleineren Winkeln."
      - "Er bleibt, wo er ist. Die Reibung ändert nur, wie schnell der Körper ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Eine rauere Fläche hält besser fest. Dann muss man die Rampe **steiler** machen, bis der Körper losrutscht.
      - wert: 2
        meldung: |
          Die Haftgrenze folgt aus $\tan\alpha = \mu$. Wenn $\mu$ wächst, wächst auch der Grenzwinkel.
hinweise:
  - 'Für den Nullpunkt gilt $\tan\alpha = \mu$.'
loesung: |
  Im Nullpunkt gilt $\sin\alpha = \mu\cos\alpha$, also $\tan\alpha = \mu$.
  ---
  Größeres $\mu$ heißt größeres $\tan\alpha$ und damit ein größerer Winkel. Der Nullpunkt wandert nach rechts. Prüfe es im Widget.
```

```widget
name: parameter
titel: Beschleunigung hangabwärts in Abhängigkeit vom Neigungswinkel
props:
  f: "9.81*(sin(x*pi/180) - mu*cos(x*pi/180))"
  parameter:
    - { name: "mu", min: 0, max: 1, step: 0.05, wert: 0.3 }
  x: [0, 90]
  y: [-10, 10]
  zusatz: ["0"]
```

**Arbeitsauftrag zum Widget.** Die waagrechte Achse ist der Neigungswinkel in Grad, die senkrechte die
Beschleunigung hangabwärts in $\text{m/s}^2$. Wir nehmen dabei vereinfacht $\mu_H = \mu_G = \mu$ an.

1. **Beobachten:** Stelle $\mu = 0{,}30$ ein und lies den Nullpunkt ab. Er liegt bei etwa $17^\circ$, denn
   $\arctan 0{,}30 = 16{,}7^\circ$.
2. **Vorhersage prüfen:** Erhöhe $\mu$ auf $0{,}60$. Wandert der Nullpunkt so, wie du vorhergesagt hast?
3. **Erklären:** Links vom Nullpunkt ist die Kurve negativ. Das heißt **nicht**, dass der Körper bergauf
   beschleunigt. Dort bleibt er einfach liegen, und die Haftreibung ist kleiner als ihr Höchstwert. Die
   Formel gilt nur für einen Körper, der wirklich rutscht.

### Hinaufstoßen: Die Reibung wechselt die Richtung

Stößt man eine Kiste die Rampe **hinauf**, bewegt sie sich hangaufwärts. Die Gleitreibung wirkt immer
gegen die Bewegung, jetzt also **hangabwärts**. Hangabtrieb und Reibung zeigen dann in dieselbe Richtung
und bremsen gemeinsam:
$$a_{\text{hinauf}} = g\,(\sin\alpha + \mu_G\cos\alpha) \quad\text{(Bremsung)}.$$
Kommt die Kiste oben zum Stillstand und rutscht wieder hinunter, dreht sich die Reibung um. Dann gilt
wieder $a_{\text{hinab}} = g(\sin\alpha - \mu_G\cos\alpha)$. Die Beschleunigung hinauf ist also größer als
die Beschleunigung hinab. Ob die Kiste oben überhaupt wieder losrutscht, entscheidet die Haftgrenze: nur
wenn $\tan\alpha > \mu_H$.

:::beispiel[Eine Kiste wird die Rampe hinaufgestoßen]
Eine Kiste ($15\,\text{kg}$) wird mit $6{,}0\,\text{m/s}$ eine $30^\circ$-Rampe hinaufgestoßen,
$\mu_G = 0{,}25$ und $\mu_H = 0{,}35$. Wie weit kommt sie, und rutscht sie danach zurück?

**Schritt 1, Bremsung beim Hinaufgleiten:** Reibung und Hangabtrieb zeigen beide hangabwärts:
$a_{\text{hinauf}} = 9{,}81\,\text{m/s}^2\cdot(0{,}500 + 0{,}25\cdot 0{,}866) = 9{,}81\,\text{m/s}^2\cdot 0{,}717 = 7{,}03\,\text{m/s}^2$.

**Schritt 2, Strecke bis zum Stillstand:** Zeitfreie Gleichung aus der Kinematik,
$s = \dfrac{v_0^2}{2a} = \dfrac{(6{,}0\,\text{m/s})^2}{2\cdot 7{,}03\,\text{m/s}^2} = \dfrac{36\,\text{m}^2/\text{s}^2}{14{,}06\,\text{m/s}^2} = 2{,}56\,\text{m}$.

**Schritt 3, rutscht sie zurück?** $\tan 30^\circ = 0{,}577$ ist größer als $\mu_H = 0{,}35$. Die Haftreibung
reicht nicht, die Kiste rutscht wieder hinab.

**Schritt 4, Beschleunigung beim Zurückrutschen:**
$a_{\text{hinab}} = 9{,}81\,\text{m/s}^2\cdot(0{,}500 - 0{,}217) = 2{,}78\,\text{m/s}^2$, deutlich kleiner als beim Hinaufgleiten.

**Deutung:** Die Kiste kommt unten langsamer an, als sie gestartet ist. Die Reibung hat auf beiden
Wegen gebremst. Die Masse von $15\,\text{kg}$ kam in keiner Rechnung vor, weil sie sich in jeder
Gleichung herauskürzt.
:::

:::achtung[Fehler: Beim Hinaufstoßen bremst die Reibung „in die falsche Richtung“]
Für die Kiste aus dem Beispiel rechnet jemand mit der Formel fürs Hinabgleiten:
$a = g(\sin 30^\circ - 0{,}25\cos 30^\circ) = 2{,}78\,\text{m/s}^2$ und damit
$s = \dfrac{36\,\text{m}^2/\text{s}^2}{2\cdot 2{,}78\,\text{m/s}^2} = 6{,}47\,\text{m}$.

Beim Hinaufgleiten zeigt die Reibung **hangabwärts**, gegen die Bewegung. Sie bremst also zusammen mit
dem Hangabtrieb, und die Vorzeichen sind beide positiv: $a = g(\sin\alpha + \mu_G\cos\alpha) = 7{,}03\,\text{m/s}^2$.
Die richtige Strecke ist $2{,}56\,\text{m}$. Faustregel: Zeichne die Reibung immer erst ein, wenn du die
Bewegungsrichtung kennst.
:::

```reflexion
frage: Warum gleitet ein schwerer Schlitten auf einem reibungsfreien Hang genau so schnell wie ein leichter? Die Hangabtriebskraft ist beim schweren Schlitten doch größer.
antwort: |
  Die Hangabtriebskraft $m g\sin\alpha$ ist zwar proportional zur Masse, beim doppelt so schweren Schlitten also doppelt
  so groß. Aber auch seine Trägheit ist doppelt so groß. Im Grundgesetz $a = F/m = m g\sin\alpha/m$ kürzt sich die Masse
  heraus, es bleibt $a = g\sin\alpha$. Mit Reibung gilt dasselbe, weil auch die Reibung $\mu_G m g\cos\alpha$
  proportional zur Masse ist. Das ist derselbe Grund, warum im Vakuum alle Körper gleich schnell fallen.
```

### Aufgaben zur schiefen Ebene

```aufgabe
id: p3-schiefe-ebene-zerlegen
titel: Kräfte auf der schiefen Ebene
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Kiste mit $10\,\text{kg}$ liegt auf einer um $30^\circ$ geneigten Ebene. Senkrecht zur Ebene wirken keine weiteren Kräfte. Berechne Hangabtriebskraft und Normalkraft. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: Hangabtriebskraft
    loesung: "10*9.81*sin(inRad(30))"
    einheit: "N"
    anzeige: '49{,}1'
    fehler:
      - wert: "10*9.81*cos(inRad(30))"
        meldung: |
          Das ist der Anteil senkrecht zur Ebene. Prüfe mit dem Extremfall: Bei einer waagrechten Ebene muss der Hangabtrieb null sein. Das liefert nur der Sinus.
      - wert: "10*9.81"
        meldung: |
          Das ist die ganze Gewichtskraft. Entlang der Ebene wirkt nur ein Anteil davon.
  - typ: zahl
    label: Normalkraft
    loesung: "10*9.81*cos(inRad(30))"
    einheit: "N"
    anzeige: '85{,}0'
    fehler:
      - wert: "10*9.81"
        meldung: |
          Auf der schiefen Ebene ist $F_N$ **nicht** $m g$. Die Normalkraft gleicht nur den Anteil der Gewichtskraft senkrecht zur Ebene aus, $m g\cos\alpha$.
      - wert: "10*9.81*sin(inRad(30))"
        meldung: |
          Das ist der Hangabtrieb. Senkrecht zur Ebene gehört der Kosinus dazu.
hinweise:
  - '$F_H = m g\sin\alpha$ und $F_N = m g\cos\alpha$.'
loesung: |
  **Ansatz:** Die Gewichtskraft $F_G = m g = 10\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 98{,}1\,\text{N}$ wird in einen Anteil entlang und einen Anteil senkrecht zur Ebene zerlegt.
  ---
  **Hangabtrieb:** $F_H = 98{,}1\,\text{N}\cdot\sin 30^\circ = 98{,}1\,\text{N}\cdot 0{,}5 = 49{,}1\,\text{N}$.
  ---
  **Normalkraft:** Senkrecht zur Ebene herrscht Gleichgewicht, also $F_N = 98{,}1\,\text{N}\cdot\cos 30^\circ = 85{,}0\,\text{N}$.
  ---
  **Probe:** Die beiden Anteile ergeben zusammen wieder $F_G$: $\sqrt{(49{,}1\,\text{N})^2 + (85{,}0\,\text{N})^2} = 98{,}1\,\text{N}$. ✓
```

```aufgabe
id: p3-schiefe-ebene-reibungsfrei
titel: Reibungsfrei hinab
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Körper gleitet reibungsfrei eine um $25^\circ$ geneigte Ebene hinab. Wie groß ist seine Beschleunigung? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "9.81*sin(inRad(25))"
    einheit: "m/s²"
    anzeige: '4{,}15'
    fehler:
      - wert: "9.81*cos(inRad(25))"
        meldung: |
          Du hast den Kosinus genommen. Entlang der Ebene wirkt der Hangabtrieb $m g\sin\alpha$, also gehört der Sinus dazu.
      - wert: "9.81"
        meldung: |
          Mit $g$ fällt ein Körper nur frei. Auf der Ebene wirkt entlang der Bewegungsrichtung nur ein Anteil der Gewichtskraft.
hinweise:
  - Die einzige Kraft entlang der Ebene ist die Hangabtriebskraft. Die Masse ist nicht gegeben, sie kürzt sich.
loesung: |
  **Ansatz:** Ohne Reibung wirkt entlang der Ebene nur $F_H = m g\sin\alpha$. Grundgesetz: $m a = m g\sin\alpha$.
  ---
  **Rechnung:** Die Masse kürzt sich: $a = g\sin 25^\circ = 9{,}81\,\text{m/s}^2\cdot 0{,}423 = 4{,}15\,\text{m/s}^2$, unabhängig von der Masse.
```

```aufgabe
id: p3-schiefe-masse
titel: Doppelte Masse auf dem Hang
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Schlitten rutscht einen Hang mit Gleitreibung hinab und hat die Beschleunigung $a$. Nun setzt sich ein zweites, gleich schweres Kind dazu, die Gesamtmasse verdoppelt sich. Die Reibungszahl bleibt gleich. Was gilt für die neue Beschleunigung?
teile:
  - typ: auswahl
    optionen:
      - "Sie ist doppelt so groß, weil der Hangabtrieb doppelt so groß ist."
      - "Sie ist halb so groß, weil die Masse doppelt so groß ist."
      - "Sie bleibt gleich."
      - "Sie ist kleiner, weil die doppelte Reibung stärker bremst."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Der Hangabtrieb verdoppelt sich, aber die Trägheit auch. In $a = F/m$ steht die doppelte Masse im Nenner. Beides gleicht sich aus.
      - wert: 1
        meldung: |
          Die Masse steht zwar im Nenner von $a = F/m$, aber auch die Kräfte im Zähler verdoppeln sich, denn Hangabtrieb und Reibung sind beide proportional zu $m$.
      - wert: 3
        meldung: |
          Die Reibung verdoppelt sich, der Hangabtrieb aber auch. Beide wachsen im selben Verhältnis wie die Masse. Die Formel $a = g(\sin\alpha - \mu_G\cos\alpha)$ enthält die Masse gar nicht.
hinweise:
  - 'Schreibe $a = \dfrac{m g\sin\alpha - \mu_G m g\cos\alpha}{m}$ und kürze.'
loesung: |
  **Ansatz:** Hangabtrieb und Reibung sind beide proportional zur Masse. Die resultierende Kraft verdoppelt sich also, die Masse auch.
  ---
  **Ergebnis:** In $a = g(\sin\alpha - \mu_G\cos\alpha)$ kommt die Masse nicht vor. Die Beschleunigung bleibt gleich.
```

```aufgabe
id: p3-haftgrenze
titel: Ab wann rutscht es?
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Holzklotz liegt auf einem Brett, die Haftreibungszahl ist $\mu_H = 0{,}60$. Das Brett wird langsam gekippt. Ab welchem Neigungswinkel beginnt der Klotz zu rutschen? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "inGrad(atan(0.6))"
    einheit: "°"
    anzeige: '31{,}0'
    fehler:
      - wert: "inGrad(asin(0.6))"
        meldung: |
          Du hast $\sin\alpha = \mu_H$ angesetzt. Im Grenzfall ist aber $m g\sin\alpha = \mu_H m g\cos\alpha$. Teilt man durch $m g\cos\alpha$, erhält man den **Tangens**.
      - wert: "inGrad(acos(0.6))"
        meldung: |
          Du hast $\cos\alpha = \mu_H$ angesetzt. Stelle die Gleichung „Hangabtrieb gleich Höchstwert der Haftreibung“ auf und teile durch $m g\cos\alpha$.
hinweise:
  - 'Grenzfall: Hangabtriebskraft gleich Höchstwert der Haftreibung, $m g\sin\alpha = \mu_H\,m g\cos\alpha$.'
  - Teile beide Seiten durch $m g\cos\alpha$. Welche Winkelfunktion bleibt links stehen?
loesung: |
  **Ansatz:** Der Klotz rutscht los, sobald der Hangabtrieb den Höchstwert der Haftreibung übersteigt. Im Grenzfall sind beide gleich: $m g\sin\alpha = \mu_H\,m g\cos\alpha$.
  ---
  **Umformen:** Wir teilen durch $m g\cos\alpha$ und erhalten $\tan\alpha = \mu_H = 0{,}60$. Die Masse kürzt sich.
  ---
  **Ergebnis:** $\alpha = \arctan 0{,}60 = 31{,}0^\circ$. Ab diesem Winkel rutscht der Klotz. Plausibel: Holz auf Holz rutscht erst bei recht steilen Brettern.
```

```aufgabe
id: p3-rutschen-mit-reibung
titel: Rutschen mit Gleitreibung
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Paket rutscht aus der Ruhe eine $35^\circ$ steile Rutsche hinab, die Gleitreibungszahl ist $\mu_G = 0{,}25$.

  a) Wie groß ist seine Beschleunigung?

  b) Welche Geschwindigkeit hat es nach $4{,}0\,\text{m}$ Rutschweg?

  Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: a) Beschleunigung
    loesung: "9.81*(sin(inRad(35)) - 0.25*cos(inRad(35)))"
    einheit: "m/s²"
    anzeige: '3{,}62'
    fehler:
      - wert: "9.81*(sin(inRad(35)) + 0.25*cos(inRad(35)))"
        meldung: |
          Beim Hinabrutschen zeigt die Reibung hangaufwärts, gegen die Bewegung. Sie wird vom Hangabtrieb **abgezogen**.
      - wert: "9.81*sin(inRad(35))"
        meldung: |
          Das wäre die Beschleunigung ohne Reibung. Die Gleitreibung $\mu_G m g\cos\alpha$ bremst zusätzlich.
  - typ: zahl
    label: b) Geschwindigkeit nach 4,0 m
    loesung: "sqrt(2*9.81*(sin(inRad(35)) - 0.25*cos(inRad(35)))*4)"
    einheit: "m/s"
    anzeige: '5{,}38'
    fehler:
      - wert: "9.81*(sin(inRad(35)) - 0.25*cos(inRad(35)))*4"
        meldung: |
          Du hast $v = a\cdot s$ gerechnet. Diese Formel gibt es nicht. Ohne Zeitangabe gilt die zeitfreie Gleichung $v^2 = 2as$.
hinweise:
  - 'Die Gleitreibung ist $\mu_G F_N = \mu_G m g\cos\alpha$ und zeigt hangaufwärts.'
  - 'Für b) die zeitfreie Gleichung $v^2 = 2 a s$ aus der Kinematik.'
loesung: |
  **Ansatz:** Freikörperbild mit Gewichtskraft, Normalkraft und Gleitreibung hangaufwärts. Entlang der Rutsche gilt $m a = m g\sin\alpha - \mu_G m g\cos\alpha$.
  ---
  **a)** Die Masse kürzt sich: $a = 9{,}81\,\text{m/s}^2\cdot(0{,}574 - 0{,}25\cdot 0{,}819) = 9{,}81\,\text{m/s}^2\cdot 0{,}369 = 3{,}62\,\text{m/s}^2$.
  ---
  **b)** Start aus der Ruhe, also $v = \sqrt{2 a s} = \sqrt{2\cdot 3{,}62\,\text{m/s}^2\cdot 4{,}0\,\text{m}} = \sqrt{28{,}9\,\text{m}^2/\text{s}^2} = 5{,}38\,\text{m/s}$.
  ---
  **Plausibilität:** Ohne Reibung wären es $\sqrt{2\cdot 9{,}81\cdot 0{,}574\cdot 4{,}0}\,\text{m/s} = 6{,}71\,\text{m/s}$. Mit Reibung muss das Paket langsamer sein. ✓
```

```aufgabe
id: p3-hochziehen
titel: Kiste die Rampe hinaufziehen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Eine Kiste ($25\,\text{kg}$) wird mit konstanter Geschwindigkeit eine $18^\circ$ geneigte Rampe hinaufgezogen. Die Gleitreibungszahl ist $\mu_G = 0{,}30$, die Zugkraft wirkt parallel zur Rampe. Wie groß ist die Zugkraft? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "25*9.81*(sin(inRad(18)) + 0.3*cos(inRad(18)))"
    einheit: "N"
    anzeige: '146'
    fehler:
      - wert: "25*9.81*(sin(inRad(18)) - 0.3*cos(inRad(18)))"
        meldung: |
          Beim Hinaufziehen bewegt sich die Kiste hangaufwärts. Die Reibung wirkt gegen die Bewegung, also **hangabwärts**, in dieselbe Richtung wie der Hangabtrieb. Beide müssen überwunden werden.
      - wert: "25*9.81*sin(inRad(18)) + 0.3*25*9.81"
        meldung: |
          Die Reibung hast du mit $F_N = m g$ berechnet. Auf der Rampe ist $F_N = m g\cos\alpha$.
hinweise:
  - Konstante Geschwindigkeit heißt resultierende Kraft null.
  - Beim Hinaufziehen zeigen Hangabtrieb und Reibung beide hangabwärts. Die Zugkraft muss beide ausgleichen.
gefuehrt:
  - text: Berechne die Hangabtriebskraft in N.
    teil: { typ: zahl, loesung: "25*9.81*sin(inRad(18))" }
    erklaerung: '$F_H = 245{,}3\,\text{N}\cdot\sin 18^\circ = 245{,}3\,\text{N}\cdot 0{,}309 = 75{,}8\,\text{N}$.'
  - text: Berechne die Normalkraft in N.
    teil: { typ: zahl, loesung: "25*9.81*cos(inRad(18))" }
    erklaerung: '$F_N = 245{,}3\,\text{N}\cdot\cos 18^\circ = 233{,}2\,\text{N}$, weil senkrecht zur Rampe Gleichgewicht herrscht.'
  - text: Berechne die Gleitreibung in N.
    teil: { typ: zahl, loesung: "0.3*25*9.81*cos(inRad(18))" }
    erklaerung: '$F_R = 0{,}30\cdot 233{,}2\,\text{N} = 70{,}0\,\text{N}$, hangabwärts, weil die Kiste hangaufwärts gleitet.'
  - text: Wie groß ist die Zugkraft in N?
    teil: { typ: zahl, loesung: "25*9.81*(sin(inRad(18)) + 0.3*cos(inRad(18)))" }
    erklaerung: 'Resultierende Kraft null: $F_Z = 75{,}8\,\text{N} + 70{,}0\,\text{N} = 146\,\text{N}$.'
loesung: |
  **Ansatz:** Konstante Geschwindigkeit, also ist die resultierende Kraft null (erstes Axiom). Entlang der Rampe zieht $F_Z$ hangaufwärts, Hangabtrieb und Reibung ziehen hangabwärts.
  ---
  **Kräfte hangabwärts:** $m g = 25\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 245{,}3\,\text{N}$. $F_H = 245{,}3\,\text{N}\cdot\sin 18^\circ = 75{,}8\,\text{N}$ und $F_R = 0{,}30\cdot 245{,}3\,\text{N}\cdot\cos 18^\circ = 70{,}0\,\text{N}$.
  ---
  **Zugkraft:** $F_Z = 75{,}8\,\text{N} + 70{,}0\,\text{N} = 146\,\text{N}$.
  ---
  **Vergleich:** Senkrecht heben müsste man mit $245\,\text{N}$. Die Rampe spart Kraft, kostet aber einen längeren Weg. Das ist eine einfache Maschine, mehr dazu im [Kapitel Drehbewegung und einfache Maschinen](/lernen/physik1/drehbewegung-einfache-maschinen).
```

```aufgabe
id: p3-gleiten-konstant
titel: Reibungszahl aus gleichförmigem Gleiten
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Snowboarder gleitet einen $22^\circ$ steilen Hang mit **konstanter** Geschwindigkeit hinab. Luftwiderstand vernachlässigen wir. Wie groß ist die Gleitreibungszahl zwischen Board und Schnee? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "tan(inRad(22))"
    anzeige: '0{,}40'
    fehler:
      - wert: "sin(inRad(22))"
        meldung: |
          Setze „Hangabtrieb gleich Reibung“ vollständig an: $m g\sin\alpha = \mu_G\,m g\cos\alpha$. Teilt man durch $m g\cos\alpha$, bleibt der Tangens.
      - wert: "0"
        meldung: |
          Konstante Geschwindigkeit heißt nicht „keine Reibung“. Sie heißt resultierende Kraft null. Der Hangabtrieb ist also da, und die Reibung gleicht ihn genau aus.
hinweise:
  - Was folgt aus der konstanten Geschwindigkeit für die resultierende Kraft entlang des Hangs?
  - 'Setze $m g\sin\alpha = \mu_G m g\cos\alpha$ und löse nach $\mu_G$ auf.'
loesung: |
  **Ansatz:** Konstante Geschwindigkeit heißt resultierende Kraft null (erstes Axiom). Entlang des Hangs gleicht die Gleitreibung den Hangabtrieb genau aus.
  ---
  **Gleichung:** $m g\sin 22^\circ = \mu_G\,m g\cos 22^\circ$. Wir teilen durch $m g\cos 22^\circ$: $\mu_G = \tan 22^\circ$.
  ---
  **Ergebnis:** $\mu_G = 0{,}40$. Für ein Board auf Schnee ist das ein sehr hoher Wert, typisch sind eher $0{,}05$ bis $0{,}2$. In Wirklichkeit bremst auch der Luftwiderstand mit, den wir vernachlässigt haben. Unser einfaches Modell schreibt seine Wirkung ganz der Reibung zu. Bei steilerem Hang würde der Snowboarder schneller werden.
```

```aufgabe
id: p3-hinaufgestossen
titel: Ein Klotz wird die Rampe hinaufgestoßen
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Holzklotz wird mit $5{,}0\,\text{m/s}$ eine $28^\circ$ steile Rampe hinaufgestoßen. Es gilt $\mu_G = 0{,}30$ und $\mu_H = 0{,}45$.

  a) Wie groß ist der Betrag der Beschleunigung beim Hinaufgleiten?

  b) Wie weit gleitet der Klotz die Rampe hinauf?

  c) Er bleibt nicht oben liegen. Mit welcher Geschwindigkeit kommt er unten wieder an?

  Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: a) Beschleunigung hinauf
    loesung: "9.81*(sin(inRad(28)) + 0.3*cos(inRad(28)))"
    einheit: "m/s²"
    anzeige: '7{,}20'
    fehler:
      - wert: "9.81*(sin(inRad(28)) - 0.3*cos(inRad(28)))"
        meldung: |
          Das ist die Formel fürs Hinabgleiten. Beim Hinaufgleiten bremst die Reibung hangabwärts, zusammen mit dem Hangabtrieb.
  - typ: zahl
    label: b) Strecke hinauf
    loesung: "5^2/(2*9.81*(sin(inRad(28)) + 0.3*cos(inRad(28))))"
    einheit: "m"
    anzeige: '1{,}74'
  - typ: zahl
    label: c) Geschwindigkeit unten
    loesung: "sqrt(2*9.81*(sin(inRad(28)) - 0.3*cos(inRad(28)))*5^2/(2*9.81*(sin(inRad(28)) + 0.3*cos(inRad(28)))))"
    einheit: "m/s"
    anzeige: '2{,}64'
    fehler:
      - wert: "5"
        meldung: |
          Ohne Reibung käme der Klotz mit $5{,}0\,\text{m/s}$ zurück. Mit Reibung wird er auf beiden Wegen gebremst und ist unten langsamer.
hinweise:
  - Zeichne zwei Freikörperbilder, eines fürs Hinaufgleiten und eines fürs Hinabgleiten. In welche Richtung zeigt jeweils die Reibung?
  - 'Hinauf: $a = g(\sin\alpha + \mu_G\cos\alpha)$, Strecke aus $v_0^2 = 2as$. Hinab: $a = g(\sin\alpha - \mu_G\cos\alpha)$ auf derselben Strecke aus der Ruhe.'
loesung: |
  **Modell:** Zwei Phasen mit je konstanter Beschleunigung. Beim Hinaufgleiten zeigt die Reibung hangabwärts, beim Hinabgleiten hangaufwärts. Dass der Klotz zurückrutscht, folgt aus $\tan 28^\circ = 0{,}532 > \mu_H = 0{,}45$.
  ---
  **a)** $a_1 = 9{,}81\,\text{m/s}^2\cdot(0{,}469 + 0{,}30\cdot 0{,}883) = 9{,}81\,\text{m/s}^2\cdot 0{,}734 = 7{,}20\,\text{m/s}^2$.
  ---
  **b)** $s = \dfrac{v_0^2}{2a_1} = \dfrac{25\,\text{m}^2/\text{s}^2}{14{,}4\,\text{m/s}^2} = 1{,}74\,\text{m}$.
  ---
  **c)** $a_2 = 9{,}81\,\text{m/s}^2\cdot(0{,}469 - 0{,}265) = 2{,}01\,\text{m/s}^2$. Aus der Ruhe über $1{,}74\,\text{m}$: $v = \sqrt{2\cdot 2{,}01\,\text{m/s}^2\cdot 1{,}74\,\text{m}} = 2{,}64\,\text{m/s}$.
  ---
  **Plausibilität:** Der Klotz kommt mit etwa der Hälfte der Startgeschwindigkeit zurück, denn die Reibung hat in beiden Richtungen gebremst. Die Beschleunigung hinauf ist mehr als dreimal so groß wie die hinab. ✓
```

## Gekoppelte Körper: Seil, Rolle und Anhänger

```aufgabe
id: p3-8-check
art: check
titel: "Vorwissen: zwei Gleichungen, zwei Unbekannte"
niveau: 1
angabe: |
  Für zwei Körper an einem Seil gelten die Gleichungen $T = 3{,}0\cdot a$ und $20 - T = 2{,}0\cdot a$ (Kräfte in N, $a$ in $\text{m/s}^2$). Wie groß ist $a$?
teile:
  - typ: zahl
    loesung: "20/5"
    einheit: "m/s²"
    anzeige: '4'
    fehler:
      - wert: "20/2"
        meldung: |
          Du hast $T$ in der zweiten Gleichung weggelassen. Setze zuerst $T = 3{,}0\cdot a$ aus der ersten Gleichung in die zweite ein.
      - wert: "20/3"
        meldung: |
          Setze $T = 3{,}0\,a$ in die zweite Gleichung ein: $20 - 3{,}0\,a = 2{,}0\,a$. Dann stehen alle $a$ auf einer Seite.
hinweise:
  - Setze die erste Gleichung in die zweite ein (Einsetzungsverfahren).
loesung: |
  Einsetzen von $T = 3{,}0\,a$ in die zweite Gleichung: $20 - 3{,}0\,a = 2{,}0\,a$.
  ---
  Wir addieren $3{,}0\,a$ auf beiden Seiten: $20 = 5{,}0\,a$, also $a = 4{,}0\,\text{m/s}^2$ und $T = 12\,\text{N}$. Wiederholen kannst du das in Mathematik, [Lineare Gleichungssysteme](/lernen/mathe3/lgs-matrizen).
```

Oft hängen mehrere Körper zusammen: ein Wagen mit einem Gewicht an einer Schnur, zwei Massen an einem
Seil über eine Rolle, eine Lok mit Waggons. Solche Körper heißen **gekoppelt**. Sie bewegen sich nicht
unabhängig voneinander, und genau das macht die Rechnung lösbar.

### Was die Kopplung bedeutet

Wir nehmen in diesem Kapitel immer ein **ideales Seil** an: Es ist masselos, dehnt sich nicht und bleibt
gespannt. Es läuft über eine masselose, reibungsfreie Rolle. Daraus folgen zwei Regeln:

1. **Gleiche Beschleunigung:** Weil sich das Seil nicht dehnt, legen beide Körper in gleicher Zeit gleich
   lange Wege zurück. Ihre Beschleunigungen sind also **gleich groß**. Die Richtungen können verschieden
   sein: Bei der Rolle sinkt der eine Körper, während der andere steigt.
2. **Gleiche Seilkraft:** Die Seilkraft $T$ ist an beiden Enden gleich groß. (Das $T$ kommt vom englischen
   *tension*, Spannung.)

Dann gibt es zwei Wege zur Lösung, und beide führen zum selben Ergebnis.

- **Weg 1, jeder Körper einzeln:** Für jeden Körper ein eigenes Freikörperbild und eine eigene Gleichung
  $\sum F = m a$. Das ergibt ein Gleichungssystem für $a$ und $T$.
- **Weg 2, das ganze System als ein Körper:** Die Seilkraft zieht am einen Körper nach vorn und am anderen
  nach hinten. Für das System als Ganzes ist sie eine **innere Kraft** und hebt sich heraus, so wie die
  Kräfte zwischen Pferd und Wagen in
  [3.3 Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf).
  Es bleibt
  $$a = \frac{\text{antreibende äußere Kräfte} - \text{bremsende äußere Kräfte}}{\text{Gesamtmasse}}.$$
  Die Seilkraft bekommt man danach aus der Gleichung für **einen** der Körper.

:::beispiel[Ein Klotz auf dem Tisch zieht an einem hängenden Gewicht]
Ein Holzklotz ($m_1 = 3{,}0\,\text{kg}$) liegt auf einem waagrechten Tisch, $\mu_G = 0{,}20$. Eine Schnur
führt über eine Rolle an der Tischkante zu einem frei hängenden Gewicht ($m_2 = 1{,}0\,\text{kg}$). Das
Gewicht sinkt und zieht den Klotz mit. Wie groß sind Beschleunigung und Schnurkraft?

**Schritt 1, Freikörperbilder (siehe Bild):** Klotz: Gewichtskraft und Normalkraft senkrecht, Schnurkraft
$T$ nach rechts, Gleitreibung nach links. Gewicht: Schnurkraft $T$ nach oben, Gewichtskraft $m_2 g$ nach unten.

**Schritt 2, äußere Kräfte des Systems:** Antreibend ist die Gewichtskraft des hängenden Körpers,
$m_2 g = 1{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 9{,}81\,\text{N}$. Bremsend ist die Reibung am Klotz,
$\mu_G m_1 g = 0{,}20\cdot 3{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 5{,}89\,\text{N}$.

**Schritt 3, Gesamtsystem:** $a = \dfrac{9{,}81\,\text{N} - 5{,}89\,\text{N}}{3{,}0\,\text{kg} + 1{,}0\,\text{kg}} = \dfrac{3{,}92\,\text{N}}{4{,}0\,\text{kg}} = 0{,}981\,\text{m/s}^2$.

**Schritt 4, Schnurkraft aus dem hängenden Körper:** Er beschleunigt nach unten, also
$m_2 g - T = m_2 a$. Daraus $T = m_2(g - a) = 1{,}0\,\text{kg}\cdot(9{,}81 - 0{,}981)\,\text{m/s}^2 = 8{,}83\,\text{N}$.

**Probe am Klotz:** $T - F_R = 8{,}83\,\text{N} - 5{,}89\,\text{N} = 2{,}94\,\text{N}$ und
$m_1 a = 3{,}0\,\text{kg}\cdot 0{,}981\,\text{m/s}^2 = 2{,}94\,\text{N}$. ✓ Die Schnurkraft ist kleiner als
$m_2 g$. Sonst würde das Gewicht nicht sinken.
:::

```plot
x: [-2, 9]
y: [-3.5, 3.5]
gleich: true
vektoren:
  - { von: [1, 0], nach: [1, -2.94], label: "m₁g = 29,4 N", farbe: 0 }
  - { von: [1, 0], nach: [1, 2.94], label: "F_N = 29,4 N", farbe: 2 }
  - { von: [1, 0], nach: [1.88, 0], label: "T", farbe: 1 }
  - { von: [1, 0], nach: [0.41, 0], label: "F_R", farbe: 3 }
  - { von: [6.5, 0], nach: [6.5, 0.88], label: "T = 8,8 N", farbe: 1 }
  - { von: [6.5, 0], nach: [6.5, -0.98], label: "m₂g = 9,8 N", farbe: 0 }
punkte:
  - { x: 1, y: 0, label: "Klotz" }
  - { x: 6.5, y: 0, label: "Gewicht" }
beschriftung: "Zwei getrennte Freikörperbilder, Maßstab 10 N pro Kästchen. Links der Klotz auf dem Tisch: Gewichtskraft (blau) und Normalkraft (grün) heben sich auf, die Schnurkraft T (orange, 8,8 N) zieht nach rechts, die Gleitreibung F_R (violett, 5,9 N) bremst nach links. Rechts das hängende Gewicht: Die Schnurkraft T zieht nach oben, die Gewichtskraft (9,8 N) ist etwas größer, darum sinkt es."
```

:::merke[Rezept für gekoppelte Körper]
1. Für **jeden** Körper ein eigenes Freikörperbild zeichnen. Die Seilkraft $T$ ist an beiden Enden gleich.
2. Für jeden Körper eine **positive Richtung** wählen, und zwar so, dass beide in ihre positive Richtung
   beschleunigen (zum Beispiel: Klotz nach rechts, Gewicht nach unten).
3. Beschleunigung aus dem **Gesamtsystem**: äußere antreibende minus äußere bremsende Kräfte, geteilt durch
   die Gesamtmasse.
4. Seilkraft aus der Gleichung für **einen** Körper. Mit dem anderen Körper die Probe machen.
:::

### Die Atwoodsche Fallmaschine

Zwei Körper mit den Massen $m_1 > m_2$ hängen an einem Seil über eine feste Rolle. Der schwerere sinkt,
der leichtere steigt. Antreibend ist die **Differenz** der Gewichtskräfte, beschleunigt wird die
**Summe** der Massen:
$$a = \frac{(m_1 - m_2)\,g}{m_1 + m_2}.$$
Dabei ist $g = 9{,}81\,\text{m/s}^2$. Für die Seilkraft betrachtet man den leichteren Körper. Er
beschleunigt nach oben, also $T - m_2 g = m_2 a$ und $T = m_2(g + a)$.

Diese Anordnung hat George Atwood 1784 erfunden. Bei fast gleichen Massen wird $a$ sehr klein. So konnte
man den „freien Fall in Zeitlupe“ messen, als man kurze Zeitspannen noch nicht genau messen konnte.

:::beispiel[Atwoodsche Maschine mit 5,0 kg und 3,0 kg]
Über eine Rolle hängen $m_1 = 5{,}0\,\text{kg}$ und $m_2 = 3{,}0\,\text{kg}$.

**Schritt 1, Gesamtsystem:** $a = \dfrac{(5{,}0 - 3{,}0)\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{8{,}0\,\text{kg}} = \dfrac{19{,}6\,\text{N}}{8{,}0\,\text{kg}} = 2{,}45\,\text{m/s}^2$.

**Schritt 2, Seilkraft am leichteren Körper:**
$T = m_2(g + a) = 3{,}0\,\text{kg}\cdot(9{,}81 + 2{,}45)\,\text{m/s}^2 = 36{,}8\,\text{N}$.

**Probe am schwereren Körper:** Er beschleunigt nach unten, also $T = m_1(g - a) = 5{,}0\,\text{kg}\cdot 7{,}36\,\text{m/s}^2 = 36{,}8\,\text{N}$. ✓

**Deutung:** Die Seilkraft liegt zwischen den beiden Gewichtskräften $29{,}4\,\text{N}$ und $49{,}1\,\text{N}$.
Sie ist größer als das Gewicht des leichten Körpers, deshalb steigt er. Sie ist kleiner als das Gewicht
des schweren, deshalb sinkt er.
:::

```plot
x: [-1, 6]
y: [-5.5, 4.5]
gleich: true
vektoren:
  - { von: [1, 0], nach: [1, 3.68], label: "T = 36,8 N", farbe: 1 }
  - { von: [1, 0], nach: [1, -4.91], label: "m₁g = 49,1 N", farbe: 0 }
  - { von: [4, 0], nach: [4, 3.68], label: "T = 36,8 N", farbe: 1 }
  - { von: [4, 0], nach: [4, -2.94], label: "m₂g = 29,4 N", farbe: 0 }
punkte:
  - { x: 1, y: 0, label: "m₁ = 5,0 kg" }
  - { x: 4, y: 0, label: "m₂ = 3,0 kg" }
beschriftung: "Freikörperbilder der beiden Körper einer Atwoodschen Maschine, Maßstab 10 N pro Kästchen. Auf beide zieht das Seil mit derselben Kraft T nach oben (orange). Beim schweren Körper links ist die Gewichtskraft (blau) größer als T, er beschleunigt nach unten. Beim leichten Körper rechts ist sie kleiner, er beschleunigt nach oben."
```

:::achtung[Fehler: Seilkraft gleich der Gewichtskraft des hängenden Körpers]
Im Beispiel mit dem Klotz auf dem Tisch setzt jemand $T = m_2 g = 9{,}81\,\text{N}$ und rechnet für den Klotz
$a = \dfrac{9{,}81\,\text{N} - 5{,}89\,\text{N}}{3{,}0\,\text{kg}} = 1{,}31\,\text{m/s}^2$.

Wäre $T = m_2 g$, dann wäre die resultierende Kraft auf das hängende Gewicht null, und es würde **nicht**
beschleunigen. Es sinkt aber beschleunigt. Also muss $T$ kleiner als $m_2 g$ sein. Richtig sind
$a = 0{,}981\,\text{m/s}^2$ und $T = 8{,}83\,\text{N}$. $T = m_2 g$ gilt nur, wenn alles ruht oder sich
gleichförmig bewegt.
:::

:::achtung[Fehler: nur durch eine der beiden Massen geteilt]
Bei der Atwoodschen Maschine mit $5{,}0\,\text{kg}$ und $3{,}0\,\text{kg}$ rechnet jemand
$a = \dfrac{19{,}6\,\text{N}}{5{,}0\,\text{kg}} = 3{,}92\,\text{m/s}^2$.

Die antreibende Kraft muss aber **beide** Körper in Bewegung setzen, denn sie hängen am selben Seil.
Beschleunigt wird die Gesamtmasse $8{,}0\,\text{kg}$. Richtig ist
$a = 19{,}6\,\text{N}/8{,}0\,\text{kg} = 2{,}45\,\text{m/s}^2$.
:::

```reflexion
frage: Beim Gesamtsystem darf man die Seilkraft einfach weglassen. Warum ist das erlaubt, obwohl sie doch auf beide Körper wirkt?
antwort: |
  Die Seilkraft zieht an beiden Körpern gleich stark, aber in entgegengesetzte Richtung bezogen auf die gemeinsame
  Bewegung: Am Klotz zieht sie nach vorn, am hängenden Gewicht hält sie zurück. Addiert man alle Kräfte des Systems
  entlang der Bewegung, kommt sie einmal mit Plus und einmal mit Minus vor und fällt heraus. Sie ist eine innere Kraft.
  Für jeden einzelnen Körper fällt sie aber nicht heraus. Deshalb braucht man für den Wert von $T$ die Gleichung eines
  einzelnen Körpers.
```

### Aufgaben zu gekoppelten Körpern

```aufgabe
id: p3-anhaenger
titel: Auto mit Anhänger
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Auto ($1000\,\text{kg}$) zieht einen Anhänger ($500\,\text{kg}$) und beschleunigt mit $2{,}0\,\text{m/s}^2$. Reibung und Luftwiderstand vernachlässigen wir.

  a) Wie groß ist die Kraft in der Anhängerkupplung?

  b) Wie groß muss die Antriebskraft sein?
teile:
  - typ: zahl
    label: a) Kupplungskraft
    loesung: "500*2"
    einheit: "N"
    anzeige: '1000'
    fehler:
      - wert: "1500*2"
        meldung: |
          Das ist die Kraft für das ganze Gespann. Die Kupplung muss nur den **Anhänger** beschleunigen. Schneide den Anhänger frei.
      - wert: "1000*2"
        meldung: |
          Das ist die Kraft, die das Auto selbst beschleunigt. Die Kupplung muss nur den Anhänger mit seinen $500\,\text{kg}$ beschleunigen.
  - typ: zahl
    label: b) Antriebskraft
    loesung: "1500*2"
    einheit: "N"
    anzeige: '3000'
    fehler:
      - wert: "1000*2"
        meldung: |
          Die Antriebskraft muss Auto **und** Anhänger beschleunigen, also die Gesamtmasse $1500\,\text{kg}$.
hinweise:
  - Für a) den Anhänger freischneiden. Welche waagrechte Kraft wirkt auf ihn?
loesung: |
  **a) Anhänger freischneiden:** Die einzige waagrechte Kraft auf den Anhänger ist die Kupplungskraft. Also $F_K = m_A a = 500\,\text{kg}\cdot 2{,}0\,\text{m/s}^2 = 1000\,\text{N}$.
  ---
  **b) Gesamtsystem:** Die Kupplungskraft ist eine innere Kraft. Äußere Kraft ist nur der Antrieb: $F_A = 1500\,\text{kg}\cdot 2{,}0\,\text{m/s}^2 = 3000\,\text{N}$.
  ---
  **Probe am Auto:** Auf das Auto wirken $3000\,\text{N}$ nach vorn und die Kupplungskraft $1000\,\text{N}$ nach hinten (drittes Axiom). Es bleiben $2000\,\text{N} = 1000\,\text{kg}\cdot 2{,}0\,\text{m/s}^2$. ✓
```

```aufgabe
id: p3-gleich-schwer
titel: Zwei gleich schwere Körper an der Rolle
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Über eine reibungsfreie Rolle hängen zwei gleich schwere Körper. Du gibst einem der beiden einen kurzen Stoß nach unten und lässt los. Was passiert danach?
teile:
  - typ: auswahl
    optionen:
      - "Beide bleiben sofort wieder stehen, weil sich die Gewichtskräfte aufheben."
      - "Beide bewegen sich mit konstanter Geschwindigkeit weiter."
      - "Der angestoßene Körper wird immer schneller, weil er jetzt unten ist."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das ist die Vorstellung „ohne Kraft keine Bewegung“. Die resultierende Kraft ist zwar null, aber das bedeutet nach dem ersten Axiom: Die Geschwindigkeit **bleibt**, wie sie ist. Stehen bleiben würden die Körper nur, wenn etwas bremst.
      - wert: 2
        meldung: |
          Die Höhe spielt keine Rolle. Auf beide Körper wirken in jeder Lage dieselben Kräfte, und die heben sich für das System auf. Ohne resultierende Kraft keine Beschleunigung.
hinweise:
  - Wie groß ist die antreibende Kraft $(m_1 - m_2)\,g$ bei gleichen Massen? Was sagt das erste Axiom dann über die Geschwindigkeit?
loesung: |
  **Ansatz:** Bei gleichen Massen ist die antreibende Kraft $(m_1 - m_2)\,g = 0$. Die Beschleunigung ist also null.
  ---
  **Ergebnis:** Beschleunigung null heißt nicht Stillstand, sondern konstante Geschwindigkeit. Die Körper bewegen sich nach dem Stoß gleichförmig weiter. Auch hier gilt: Für Bewegung braucht man keine Kraft.
```

```aufgabe
id: p3-atwood
titel: Atwoodsche Fallmaschine
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  An einem Seil über eine Rolle hängen $m_1 = 3{,}0\,\text{kg}$ und $m_2 = 2{,}0\,\text{kg}$. Seil und Rolle sind masselos und reibungsfrei. Berechne Beschleunigung und Seilkraft. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Beschleunigung
    loesung: "(3-2)*9.81/(3+2)"
    einheit: "m/s²"
    anzeige: '1{,}96'
    fehler:
      - wert: "(3-2)*9.81/3"
        meldung: |
          Du hast nur durch die größere Masse geteilt. Das Seil verbindet beide Körper, die antreibende Kraft muss also die **Gesamtmasse** beschleunigen.
      - wert: "(3+2)*9.81/(3-2)"
        meldung: |
          Zähler und Nenner sind vertauscht. Antreibend ist die **Differenz** der Gewichtskräfte, beschleunigt wird die **Summe** der Massen.
  - typ: zahl
    label: Seilkraft
    loesung: "2*3*2*9.81/(3+2)"
    einheit: "N"
    anzeige: '23{,}5'
    fehler:
      - wert: "2*9.81"
        meldung: |
          Das ist das Gewicht des leichteren Körpers. Er wird aber nach oben beschleunigt, also muss das Seil stärker ziehen als sein Gewicht.
      - wert: "3*9.81"
        meldung: |
          Das ist das Gewicht des schwereren Körpers. Er sinkt beschleunigt, also zieht das Seil schwächer als sein Gewicht.
hinweise:
  - Antreibend ist die Differenz der Gewichtskräfte, beschleunigt wird die Gesamtmasse.
  - 'Für die Seilkraft: Auf $m_2$ wirken $T$ nach oben und $m_2 g$ nach unten, und $m_2$ beschleunigt nach oben.'
loesung: |
  **Ansatz:** Gesamtsystem für die Beschleunigung, dann ein einzelner Körper für die Seilkraft.
  ---
  **Beschleunigung:** $a = \dfrac{(3{,}0 - 2{,}0)\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{5{,}0\,\text{kg}} = 1{,}96\,\text{m/s}^2$.
  ---
  **Seilkraft an $m_2$:** $T - m_2 g = m_2 a$, also $T = 2{,}0\,\text{kg}\cdot(9{,}81 + 1{,}96)\,\text{m/s}^2 = 23{,}5\,\text{N}$.
  ---
  **Probe an $m_1$:** $m_1 g - T = 29{,}4\,\text{N} - 23{,}5\,\text{N} = 5{,}9\,\text{N} = 3{,}0\,\text{kg}\cdot 1{,}96\,\text{m/s}^2$. ✓ Die Seilkraft liegt zwischen $19{,}6\,\text{N}$ und $29{,}4\,\text{N}$.
```

```aufgabe
id: p3-wagen-gewicht
titel: Wagen mit angehängtem Gewicht
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Wagen ($2{,}0\,\text{kg}$) steht auf einem waagrechten, reibungsfreien Tisch. Über eine Rolle an der Tischkante ist er mit einem frei hängenden Gewicht von $0{,}50\,\text{kg}$ verbunden. Berechne Beschleunigung und Seilkraft. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Beschleunigung
    loesung: "0.5*9.81/2.5"
    einheit: "m/s²"
    anzeige: '1{,}96'
    fehler:
      - wert: "0.5*9.81/2"
        meldung: |
          Du hast nur die Masse des Wagens genommen. Das hängende Gewicht muss aber selbst auch beschleunigt werden. Teile durch die Gesamtmasse.
      - wert: "9.81"
        meldung: |
          Mit $g$ würde das Gewicht frei fallen. Es zieht aber den Wagen mit, also ist die Beschleunigung kleiner.
  - typ: zahl
    label: Seilkraft
    loesung: "2*0.5*9.81/2.5"
    einheit: "N"
    anzeige: '3{,}92'
    fehler:
      - wert: "0.5*9.81"
        meldung: |
          Das ist die Gewichtskraft des hängenden Körpers. Wäre die Seilkraft so groß, würde er nicht beschleunigt sinken.
hinweise:
  - Nur die Gewichtskraft des hängenden Körpers treibt an. Beschleunigt werden beide Massen.
  - Die Seilkraft ist die einzige waagrechte Kraft auf den Wagen.
loesung: |
  **Ansatz:** Äußere antreibende Kraft ist $m_2 g$. Reibung gibt es nicht. Beschleunigt wird die Gesamtmasse $2{,}5\,\text{kg}$.
  ---
  **Beschleunigung:** $a = \dfrac{0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{2{,}5\,\text{kg}} = 1{,}96\,\text{m/s}^2$.
  ---
  **Seilkraft:** Sie beschleunigt allein den Wagen: $T = m_1 a = 2{,}0\,\text{kg}\cdot 1{,}96\,\text{m/s}^2 = 3{,}92\,\text{N}$.
  ---
  **Probe am Gewicht:** $m_2 g - T = 4{,}91\,\text{N} - 3{,}92\,\text{N} = 0{,}98\,\text{N} = 0{,}50\,\text{kg}\cdot 1{,}96\,\text{m/s}^2$. ✓
```

```aufgabe
id: p3-gekoppelt-reibung
titel: Klotz mit Reibung und hängendes Gewicht
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Klotz ($4{,}0\,\text{kg}$) liegt auf einem waagrechten Tisch, $\mu_G = 0{,}25$. Er ist über eine Schnur und eine Rolle mit einem hängenden Körper ($2{,}0\,\text{kg}$) verbunden. Der hängende Körper sinkt. Berechne Beschleunigung und Schnurkraft. Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Beschleunigung
    loesung: "(2*9.81 - 0.25*4*9.81)/6"
    einheit: "m/s²"
    anzeige: '1{,}64'
    fehler:
      - wert: "2*9.81/6"
        meldung: |
          Du hast die Reibung am Klotz vergessen. Sie ist eine äußere Kraft, die das ganze System bremst.
      - wert: "(2*9.81 - 0.25*4*9.81)/4"
        meldung: |
          Du hast nur durch die Masse des Klotzes geteilt. Der hängende Körper wird ebenfalls beschleunigt.
  - typ: zahl
    label: Schnurkraft
    loesung: "2*(9.81 - (2*9.81 - 0.25*4*9.81)/6)"
    einheit: "N"
    anzeige: '16{,}4'
    fehler:
      - wert: "2*9.81"
        meldung: |
          Das ist die Gewichtskraft des hängenden Körpers. Er sinkt beschleunigt, also muss die Schnurkraft kleiner sein.
hinweise:
  - 'Antreibend: Gewichtskraft des hängenden Körpers. Bremsend: Gleitreibung $\mu_G m_1 g$ am Klotz.'
  - 'Schnurkraft am hängenden Körper: $m_2 g - T = m_2 a$.'
gefuehrt:
  - text: Wie groß ist die antreibende Kraft in N?
    teil: { typ: zahl, loesung: "2*9.81" }
    erklaerung: 'Die Gewichtskraft des hängenden Körpers, $2{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 19{,}6\,\text{N}$.'
  - text: Wie groß ist die bremsende Reibung am Klotz in N?
    teil: { typ: zahl, loesung: "0.25*4*9.81" }
    erklaerung: 'Auf dem waagrechten Tisch ist $F_N = m_1 g$, also $F_R = 0{,}25\cdot 39{,}2\,\text{N} = 9{,}81\,\text{N}$.'
  - text: Berechne die Beschleunigung in $\text{m/s}^2$.
    teil: { typ: zahl, loesung: "(2*9.81 - 0.25*4*9.81)/6" }
    erklaerung: '$a = (19{,}6\,\text{N} - 9{,}81\,\text{N})/6{,}0\,\text{kg} = 1{,}64\,\text{m/s}^2$.'
  - text: Berechne die Schnurkraft in N.
    teil: { typ: zahl, loesung: "2*(9.81 - (2*9.81 - 0.25*4*9.81)/6)" }
    erklaerung: '$T = m_2(g - a) = 2{,}0\,\text{kg}\cdot 8{,}18\,\text{m/s}^2 = 16{,}4\,\text{N}$.'
loesung: |
  **Ansatz:** Gesamtsystem. Äußere antreibende Kraft ist $m_2 g$, äußere bremsende Kraft die Gleitreibung am Klotz. Die Schnurkraft ist eine innere Kraft.
  ---
  **Kräfte:** $m_2 g = 2{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 19{,}6\,\text{N}$. $F_R = \mu_G m_1 g = 0{,}25\cdot 4{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 9{,}81\,\text{N}$.
  ---
  **Beschleunigung:** $a = \dfrac{19{,}6\,\text{N} - 9{,}81\,\text{N}}{6{,}0\,\text{kg}} = 1{,}64\,\text{m/s}^2$.
  ---
  **Schnurkraft:** $T = m_2(g - a) = 2{,}0\,\text{kg}\cdot(9{,}81 - 1{,}64)\,\text{m/s}^2 = 16{,}4\,\text{N}$. Probe am Klotz: $16{,}4\,\text{N} - 9{,}81\,\text{N} = 6{,}5\,\text{N} \approx 4{,}0\,\text{kg}\cdot 1{,}64\,\text{m/s}^2$. ✓
```

```aufgabe
id: p3-zug-kupplung
titel: Kräfte in den Kupplungen eines Zuges
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine Lok zieht drei gleiche Waggons mit je $20\,\text{t}$ und beschleunigt mit $0{,}30\,\text{m/s}^2$. Reibung vernachlässigen wir.

  a) Wie groß ist die Kraft in der Kupplung zwischen Lok und erstem Waggon?

  b) Wie groß ist die Kraft in der Kupplung zwischen zweitem und drittem Waggon?

  Antworten in kN.
teile:
  - typ: zahl
    label: a) Lok – erster Waggon
    loesung: "3*20000*0.3/1000"
    einheit: "kN"
    anzeige: '18'
    fehler:
      - wert: "20000*0.3/1000"
        meldung: |
          Diese Kupplung zieht nicht nur den ersten Waggon, sondern alle drei, denn der erste zieht die anderen mit. Schneide alle drei Waggons zusammen frei.
      - wert: "2*20000*0.3/1000"
        meldung: |
          Hinter der ersten Kupplung hängen alle **drei** Waggons, nicht nur zwei. Zähle nach, was diese Kupplung mitziehen muss.
  - typ: zahl
    label: b) zweiter – dritter Waggon
    loesung: "20000*0.3/1000"
    einheit: "kN"
    anzeige: '6'
    fehler:
      - wert: "3*20000*0.3/1000"
        meldung: |
          Diese Kupplung zieht nur noch den letzten Waggon. Schneide den dritten Waggon allein frei.
hinweise:
  - Schneide immer alles frei, was **hinter** der Kupplung hängt. Welche waagrechte Kraft wirkt darauf?
  - Alle Teile des Zuges haben dieselbe Beschleunigung.
loesung: |
  **Ansatz:** Eine Kupplung muss alles beschleunigen, was hinter ihr hängt. Wir schneiden jeweils diesen hinteren Teil frei. Die Kupplungskraft ist dann seine einzige waagrechte Kraft.
  ---
  **a)** Hinter der ersten Kupplung hängen drei Waggons, $60\,000\,\text{kg}$: $F = 60\,000\,\text{kg}\cdot 0{,}30\,\text{m/s}^2 = 18\,000\,\text{N} = 18\,\text{kN}$.
  ---
  **b)** Hinter der letzten Kupplung hängt ein Waggon: $F = 20\,000\,\text{kg}\cdot 0{,}30\,\text{m/s}^2 = 6000\,\text{N} = 6{,}0\,\text{kN}$.
  ---
  **Deutung:** Die vorderste Kupplung wird am stärksten belastet. Deshalb reißt ein überlasteter Zug meist vorn.
```

```aufgabe
id: p3-fkb-atwood
titel: Das Freikörperbild des steigenden Körpers
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Bei einer Atwoodschen Maschine wird der leichtere Körper nach oben beschleunigt. Welche Aussage über sein Freikörperbild ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Seilkraft nach oben und Gewichtskraft nach unten, beide gleich groß."
      - "Seilkraft nach oben, größer als die Gewichtskraft nach unten."
      - "Seilkraft nach oben, Gewichtskraft nach unten und dazu eine Bewegungskraft nach oben."
      - "Nur die Seilkraft nach oben, weil er ja steigt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Gleich große Kräfte bedeuten resultierende Kraft null. Dann würde der Körper nicht beschleunigt. Er wird aber nach oben schneller.
      - wert: 2
        meldung: |
          Eine „Bewegungskraft“ gibt es nicht. Kein Körper übt sie aus. Dass er nach oben beschleunigt, liegt daran, dass die Seilkraft größer ist als die Gewichtskraft.
      - wert: 3
        meldung: |
          Die Erde zieht immer an ihm, auch wenn er steigt. Die Gewichtskraft gehört in jedes Freikörperbild.
hinweise:
  - Was berührt den Körper, und welche Fernkraft wirkt? Mehr Kräfte gibt es nicht.
  - In welche Richtung zeigt die resultierende Kraft, wenn der Körper nach oben beschleunigt?
loesung: |
  **Ansatz:** Es gibt genau zwei Kräfte: die Seilkraft (das Seil berührt den Körper) und die Gewichtskraft (Fernkraft).
  ---
  **Zweites Axiom:** Der Körper beschleunigt nach oben. Also zeigt auch die resultierende Kraft nach oben.
  ---
  **Ergebnis:** Die Seilkraft muss größer sein als die Gewichtskraft. Richtig ist die zweite Aussage. Zum Vergleich die Atwoodsche Maschine mit $5{,}0\,\text{kg}$ und $3{,}0\,\text{kg}$: Am leichteren Körper wirken die Seilkraft $36{,}8\,\text{N}$ und die Gewichtskraft $29{,}4\,\text{N}$.
```

```aufgabe
id: p3-zwei-kisten-seil
titel: Zwei Kisten an einem Seil
niveau: 3
lernziel: 6
kompetenz: begruenden
angabe: |
  Zwei Kisten stehen hintereinander auf dem Boden und sind durch ein Seil verbunden. Die vordere hat $10\,\text{kg}$, die hintere $15\,\text{kg}$. Du ziehst die vordere waagrecht mit $120\,\text{N}$. Für beide Kisten gilt $\mu_G = 0{,}20$.

  a) Berechne die Beschleunigung.

  b) Berechne die Kraft im Verbindungsseil.

  c) Zeige allgemein, dass die Seilkraft nicht von $\mu_G$ abhängt, solange beide Kisten dieselbe Reibungszahl haben.
teile:
  - typ: zahl
    label: a) Beschleunigung
    loesung: "(120 - 0.2*25*9.81)/25"
    einheit: "m/s²"
    anzeige: '2{,}84'
    fehler:
      - wert: "120/25"
        meldung: |
          Du hast die Reibung vergessen. Auf beide Kisten wirkt Gleitreibung, zusammen $\mu_G (m_1 + m_2) g$.
  - typ: zahl
    label: b) Seilkraft
    loesung: "15*(120 - 0.2*25*9.81)/25 + 0.2*15*9.81"
    einheit: "N"
    anzeige: '72'
    fehler:
      - wert: "15*(120 - 0.2*25*9.81)/25"
        meldung: |
          Das Seil muss die hintere Kiste nicht nur beschleunigen, sondern auch ihre Reibung überwinden.
      - wert: "60"
        meldung: |
          Die Kraft teilt sich nicht zur Hälfte auf. Das Seil zieht nur die hintere Kiste, und die hat $15$ von $25\,\text{kg}$.
  - typ: text
    label: c) allgemeine Begründung
    muster: |
      Gesamtsystem: a = (F − μ(m1 + m2)g)/(m1 + m2) = F/(m1 + m2) − μg. Hintere Kiste: T − μ m2 g = m2 a. Einsetzen:
      T = m2 a + μ m2 g = m2 F/(m1 + m2) − μ m2 g + μ m2 g = F·m2/(m1 + m2). Das μ fällt heraus. Die Zugkraft teilt
      sich im Verhältnis der Massen auf.
hinweise:
  - 'Gesamtsystem: $a = \dfrac{F - \mu_G(m_1 + m_2)g}{m_1 + m_2}$. Für das Seil die hintere Kiste freischneiden.'
  - 'Hintere Kiste: $T - \mu_G m_2 g = m_2 a$. Setze $a$ allgemein ein und vereinfache.'
loesung: |
  **Ansatz:** Beschleunigung aus dem Gesamtsystem, Seilkraft aus dem Freikörperbild der hinteren Kiste. Auf sie wirken waagrecht nur das Seil (nach vorn) und die Reibung (nach hinten).
  ---
  **a)** Reibung gesamt $0{,}20\cdot 25\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 49{,}1\,\text{N}$. Also $a = \dfrac{120\,\text{N} - 49{,}1\,\text{N}}{25\,\text{kg}} = 2{,}84\,\text{m/s}^2$.
  ---
  **b)** $T = m_2 a + \mu_G m_2 g = 15\,\text{kg}\cdot 2{,}84\,\text{m/s}^2 + 0{,}20\cdot 15\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 42{,}6\,\text{N} + 29{,}4\,\text{N} = 72\,\text{N}$.
  ---
  **c)** Allgemein ist $a = \dfrac{F}{m_1 + m_2} - \mu_G g$. Eingesetzt: $T = m_2\left(\dfrac{F}{m_1 + m_2} - \mu_G g\right) + \mu_G m_2 g = F\cdot\dfrac{m_2}{m_1 + m_2}$. Die Reibungsterme heben sich auf.
  ---
  **Probe:** $120\,\text{N}\cdot\dfrac{15}{25} = 72\,\text{N}$. ✓ Die Zugkraft teilt sich im Verhältnis der Massen auf, mit und ohne Reibung.
```

## Beschleunigte Bezugssysteme, Scheinkräfte und Schwerelosigkeit

```aufgabe
id: p3-9-check
art: check
titel: "Vorwissen: Inertialsystem"
niveau: 1
angabe: |
  Ein **Inertialsystem** ist ein Bezugssystem, in dem das erste Newtonsche Axiom gilt. Welche der folgenden Bezugssysteme sind (in guter Näherung) Inertialsysteme? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "ein Zug, der mit konstant 120 km/h geradeaus fährt"
      - "ein Auto, das gerade an der Ampel anfährt"
      - "der Bahnsteig"
      - "ein Karussell, das sich gleichmäßig dreht"
    richtig: [0, 2]
    fehler:
      - wert: [0]
        meldung: |
          Auch der Bahnsteig ist ein Inertialsystem. Die Drehung der Erde ist so langsam, dass man sie für fast alle Alltagsrechnungen vernachlässigen kann.
      - wert: [0, 2, 3]
        meldung: |
          Im Karussell ändert sich ständig die **Richtung** der Geschwindigkeit. Es ist beschleunigt und daher kein Inertialsystem. Dort scheint man nach außen gedrückt zu werden, ohne dass jemand drückt.
hinweise:
  - Ein Inertialsystem darf weder schneller noch langsamer werden noch eine Kurve fahren.
loesung: |
  Inertialsysteme sind der gleichförmig fahrende Zug und der Bahnsteig. Beide sind nicht beschleunigt.
  ---
  Das anfahrende Auto wird schneller, das Karussell ändert ständig die Richtung. Beide sind beschleunigt. Siehe [3.1 Kraft und Trägheit](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom), Unterabschnitt „Inertialsysteme“, und [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Relativbewegung und Inertialsysteme“.
```

Bisher haben wir jede Bewegung von außen betrachtet, von einem ruhenden Standpunkt aus. Oft sitzt man
aber selbst in dem Fahrzeug, das beschleunigt: im anfahrenden Zug, im bremsenden Bus, im Lift. Dann
erlebt man Kräfte, die es von außen gesehen gar nicht gibt. In diesem Abschnitt lernst du, wie man solche
Situationen sauber beschreibt.

### Der Blick von innen und der Blick von außen

Du stehst in einem Bus, der scharf bremst. Du spürst einen Ruck nach vorn. Eine Flasche rollt am Boden
nach vorn, ein Haltegriff an einem Band schwingt nach vorn. Im Bus sieht es so aus, als würde eine Kraft
nach vorn ziehen. Aber kein Körper übt diese Kraft aus.

```aufgabe
id: p3-9-vorhersage
art: check
titel: "Vorhersage: die Flasche im bremsenden Bus"
niveau: 1
angabe: |
  Ein Bus bremst. Eine Flasche liegt am Boden und rollt fast reibungsfrei. Was sieht eine Person, die **am Straßenrand** steht?
teile:
  - typ: auswahl
    optionen:
      - "Die Flasche wird nach vorn beschleunigt, eine Kraft zieht sie nach vorn."
      - "Die Flasche behält ihre Geschwindigkeit, der Bus wird unter ihr langsamer."
      - "Die Flasche bleibt sofort stehen."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Von der Straße aus wird die Flasche nicht schneller. Waagrecht wirkt fast keine Kraft auf sie. Nur der Bus wird langsamer, deshalb **scheint** sie im Bus nach vorn zu rollen.
      - wert: 2
        meldung: |
          Stehen bleiben würde die Flasche nur, wenn eine Kraft sie bremst. Ohne Reibung bremst sie nichts, also behält sie nach dem ersten Axiom ihre Geschwindigkeit.
hinweise:
  - Welche waagrechten Kräfte wirken auf eine fast reibungsfrei rollende Flasche? Was sagt dann das erste Axiom?
loesung: |
  Waagrecht wirkt auf die Flasche praktisch keine Kraft. Nach dem ersten Axiom behält sie ihre Geschwindigkeit.
  ---
  Der Bus wird langsamer. Die Flasche ist deshalb schneller als der Bus und rollt in ihm nach vorn, ohne dass eine Kraft sie nach vorn zieht.
```

Von der Straße aus ist alles einfach. Der Bus wird langsamer. Die Flasche berührt den Bus kaum
(sie rollt fast reibungsfrei), also wirkt waagrecht keine Kraft auf sie. Nach dem ersten Axiom behält
sie ihre Geschwindigkeit. Sie rollt also nicht nach vorn, sondern der Bus bremst unter ihr weg.

Der bremsende Bus ist **kein** Inertialsystem. Will man trotzdem im Bus rechnen, muss man eine zusätzliche
Kraft erfinden, damit die Newtonschen Gesetze dort wieder stimmen.

:::definition[Trägheitskraft (Scheinkraft)]
Wird ein Bezugssystem mit $\vec a_0$ beschleunigt, rechnet man in ihm mit einer zusätzlichen
**Trägheitskraft**
$$\vec F_T = -m\,\vec a_0.$$
Dabei ist $m$ die Masse des Körpers und $\vec a_0$ die Beschleunigung des Bezugssystems. Das Minus heißt:
Die Trägheitskraft zeigt **entgegen** der Beschleunigung des Systems. Sie heißt auch **Scheinkraft**,
weil kein Körper sie ausübt und sie deshalb **keinen Wechselwirkungspartner** hat.

**Beispiel:** Ein Bus bremst mit $a_0 = 4{,}0\,\text{m/s}^2$. Für einen Fahrgast mit $70\,\text{kg}$ rechnet
man im Bus mit $F_T = 70\,\text{kg}\cdot 4{,}0\,\text{m/s}^2 = 280\,\text{N}$ nach vorn. Diese Kraft muss
er mit den Beinen oder einem Haltegriff ausgleichen.

**Kein Beispiel:** Am Straßenrand, also in einem Inertialsystem, gibt es diese $280\,\text{N}$ **nicht**.
Von dort gesehen braucht der Fahrgast eine Kraft nach **hinten**, damit er mit dem Bus langsamer wird.
Die liefert der Haltegriff.
:::

Weitere Scheinkräfte kennst du aus dem Alltag. Beim Anfahren eines Autos wirst du in den Sitz gedrückt.
Im Karussell scheint dich die **Zentrifugalkraft** nach außen zu ziehen, mehr dazu im
[Kapitel Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation). Auf der sich drehenden
Erde lenkt die **Corioliskraft** bewegte Luftmassen ab, auf der Nordhalbkugel nach rechts. Sie lässt
Tiefdruckgebiete wirbeln.

:::beispiel[Ein Pendel im anfahrenden Zug, von außen und von innen]
Ein Zug fährt mit $a_0 = 1{,}2\,\text{m/s}^2$ an. An der Decke hängt eine Lampe an einem Kabel. Um welchen
Winkel $\varphi$ gegen die Senkrechte stellt sich das Kabel schräg, und in welche Richtung?

**Schritt 1, von außen (Inertialsystem):** Auf die Lampe wirken die Gewichtskraft $m g$ nach unten und die
Kabelkraft schräg nach oben. Die Lampe beschleunigt mit dem Zug nach vorn. Also muss die Summe der beiden
Kräfte waagrecht nach vorn zeigen und den Betrag $m a_0$ haben. Das geht nur, wenn das Kabel nach vorn
oben zeigt, die Lampe also nach **hinten** ausgelenkt ist.

**Schritt 2, Winkel:** Der senkrechte Anteil der Kabelkraft trägt $m g$, der waagrechte liefert $m a_0$.
Ihr Verhältnis ist $\tan\varphi = \dfrac{m a_0}{m g} = \dfrac{a_0}{g} = \dfrac{1{,}2\,\text{m/s}^2}{9{,}81\,\text{m/s}^2} = 0{,}122$,
also $\varphi = 7{,}0^\circ$. Die Masse kürzt sich.

**Schritt 3, von innen (Zug):** Im Zug ruht die Lampe schräg. Ein Fahrgast erklärt das mit der
Trägheitskraft $m a_0$ nach hinten. Gewichtskraft, Trägheitskraft und Kabelkraft ergeben zusammen null.
Es kommt derselbe Winkel heraus.

**Deutung:** Beide Sichtweisen liefern dasselbe Ergebnis. Aus dem Winkel kann man umgekehrt die
Beschleunigung des Zuges messen, das Pendel ist ein einfacher **Beschleunigungsmesser**.
:::

```plot
x: [-3, 3]
y: [-3, 3.2]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -2.45], label: "m g", farbe: 0 }
  - { von: [0, 0], nach: [0.30, 2.45], label: "Kabelkraft", farbe: 2 }
  - { von: [0, 0], nach: [0.30, 0], label: "Summe = m a₀", farbe: 1 }
strecken:
  - { von: [0.30, 0], nach: [0.30, 2.45], gestrichelt: true }
punkte:
  - { x: 0, y: 0, label: "Lampe" }
  - { x: 2, y: -2.4, label: "Fahrtrichtung →" }
beschriftung: "Freikörperbild der Lampe im anfahrenden Zug, von außen betrachtet. Nur zwei Kräfte wirken: die Gewichtskraft (blau) und die Kabelkraft (grün), die leicht nach vorn oben zeigt. Der orange Pfeil ist keine dritte Kraft, sondern ihre Summe. Sie zeigt waagrecht in Fahrtrichtung und beschleunigt die Lampe mit dem Zug."
```

:::achtung[Fehler: die Scheinkraft im Inertialsystem zusätzlich einzeichnen]
Eine Person ($60\,\text{kg}$) steht im Lift, der mit $2{,}0\,\text{m/s}^2$ nach oben anfährt. Jemand rechnet
vom Erdboden aus, zeichnet aber zusätzlich eine Trägheitskraft $m a$ nach unten ein:
$F_N - m g - m a = m a$, also $F_N = 60\,\text{kg}\cdot(9{,}81 + 2\cdot 2{,}0)\,\text{m/s}^2 = 829\,\text{N}$.

Damit ist die Beschleunigung doppelt gezählt. Entweder man rechnet von außen **ohne** Scheinkraft:
$F_N - m g = m a$. Oder man rechnet im Lift **mit** Scheinkraft, dann ruht die Person dort:
$F_N - m g - m a = 0$. Beide Wege geben $F_N = m(g + a) = 709\,\text{N}$. Beides zugleich ist falsch.
:::

### Die Personenwaage im Lift

Eine Personenwaage misst weder die Masse noch direkt die Gewichtskraft. Sie misst die Kraft, mit der die
Person auf sie drückt. Nach dem dritten Axiom ist das genau so viel wie die **Normalkraft**, mit der die
Waage die Person trägt.

Im ruhenden oder gleichförmig fahrenden Lift ist $F_N = m g$. Beschleunigt der Lift nach oben, muss die
Waage die Person zusätzlich mitbeschleunigen. Mit „nach oben“ als positiver Richtung gilt
$$F_N - m g = m a \quad\text{also}\quad F_N = m\,(g + a).$$
Dabei ist $a$ die Beschleunigung des Lifts, positiv nach oben, negativ nach unten.

:::beispiel[Eine Person auf der Waage im anfahrenden Lift]
Eine Person ($60\,\text{kg}$) steht auf einer Waage. Der Lift fährt mit $2{,}0\,\text{m/s}^2$ nach oben an.

**Schritt 1, Freikörperbild der Person (von außen):** Gewichtskraft $m g$ nach unten, Normalkraft $F_N$
der Waage nach oben. Die Person beschleunigt nach oben, also ist $F_N$ größer als $m g$.

**Schritt 2, Grundgesetz:** $F_N = m(g + a) = 60\,\text{kg}\cdot(9{,}81 + 2{,}0)\,\text{m/s}^2 = 60\,\text{kg}\cdot 11{,}81\,\text{m/s}^2 = 709\,\text{N}$.

**Schritt 3, was die Waage zeigt:** Die Person drückt mit $709\,\text{N}$ auf die Waage. Eine Waage, die in
Kilogramm anzeigt, teilt durch $9{,}81\,\text{m/s}^2$ und zeigt $72\,\text{kg}$.

**Deutung:** Die Masse ist natürlich weiter $60\,\text{kg}$, auch die Gewichtskraft ist unverändert
$589\,\text{N}$. Nur die Normalkraft ist größer. Man fühlt sich schwerer, weil die Beine stärker drücken müssen.
:::

```plot
x: [-3, 3]
y: [-7, 8]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -5.89], label: "m g = 589 N", farbe: 0 }
  - { von: [0, 0], nach: [0, 7.09], label: "F_N = 709 N", farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "Person" }
beschriftung: "Freikörperbild der Person im nach oben anfahrenden Lift, Maßstab 100 N pro Kästchen. Die Normalkraft der Waage (grün, 709 N) ist größer als die Gewichtskraft (blau, 589 N). Die Differenz von 120 N beschleunigt die Person mit 2,0 m/s² nach oben."
```

:::pruefung[So rechnest du jede Liftaufgabe sicher]
Rechne immer **von außen** (vom Erdboden aus) mit dem Freikörperbild der Person oder der Kabine. Darin
stehen die Normalkraft oder Seilkraft nach oben und die Gewichtskraft nach unten. Dann setzt du
$\sum F = m a$ an, mit „nach oben“ positiv. So brauchst du keine Scheinkräfte und machst keine Vorzeichenfehler.

Entscheidend ist, in welche Richtung der Lift **beschleunigt**, nicht in welche er **fährt**. Ein Lift, der
nach unten fährt und dabei bremst, beschleunigt nach **oben**. Sag in der Prüfung laut dazu: „Der Lift
bremst eine Abwärtsfahrt, also zeigt die Beschleunigung nach oben.“
:::

:::achtung[Fehler: Fahrtrichtung statt Beschleunigungsrichtung]
Eine Person ($75\,\text{kg}$) fährt im Lift nach unten. Der Lift bremst mit $1{,}5\,\text{m/s}^2$ vor dem
Erdgeschoß. Falsch gerechnet: „Der Lift fährt nach unten, also $F_N = m(g - a) = 75\,\text{kg}\cdot 8{,}31\,\text{m/s}^2 = 623\,\text{N}$.“

Beim Bremsen einer Abwärtsfahrt zeigt die Beschleunigung nach **oben**. Richtig ist
$F_N = m(g + a) = 75\,\text{kg}\cdot 11{,}31\,\text{m/s}^2 = 848\,\text{N}$. Das passt zur Erfahrung:
Kurz vor dem Halt im Erdgeschoß fühlt man sich schwerer, nicht leichter.
:::

```aufgabe
id: p3-9-freier-fall-check
art: check
titel: "Vorhersage: die Waage im frei fallenden Lift"
niveau: 1
angabe: |
  Stell dir vor, das Seil eines Lifts reißt, und der Lift fällt frei (ohne Bremse und ohne Luftwiderstand). Eine Person steht darin auf einer Waage. Was zeigt die Waage während des Falls?
teile:
  - typ: auswahl
    optionen:
      - "null"
      - "die normale Gewichtskraft der Person"
      - "das Doppelte der Gewichtskraft"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Person und Waage fallen gleich schnell. Die Person drückt deshalb gar nicht mehr auf die Waage. Setze $a = -g$ in $F_N = m(g + a)$ ein.
      - wert: 2
        meldung: |
          Mehr als das Gewicht zeigt die Waage nur, wenn der Lift nach **oben** beschleunigt. Im freien Fall beschleunigt er mit $g$ nach unten.
hinweise:
  - 'Setze in $F_N = m(g + a)$ die Beschleunigung des frei fallenden Lifts ein, also $a = -g$.'
loesung: |
  Im freien Fall ist $a = -g$ (nach unten). Also $F_N = m(g - g) = 0$.
  ---
  Die Waage zeigt null. Die Gewichtskraft wirkt weiter, aber Person und Waage werden gleich stark beschleunigt und drücken nicht aufeinander.
```

**Schwerelosigkeit.** Fällt der Lift frei, ist $a = -g$. Dann ist $F_N = m(g - g) = 0$. Die Waage zeigt
null, man fühlt sich **schwerelos**. Die Gewichtskraft ist aber noch voll da. Sie beschleunigt die Person
und die Waage gleich stark nach unten, deshalb drücken die beiden nicht mehr aufeinander. Genau das
erleben Astronauten in der Raumstation. In $400\,\text{km}$ Höhe ist die Anziehung der Erde noch rund
$89\,\%$ so groß wie am Boden. Die Station und alles in ihr „fällt“ aber ständig um die Erde herum (siehe
[Kapitel Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation), Abschnitt „Satelliten
und Schwerelosigkeit“).

### Träge und schwere Masse

Die Masse taucht in diesem Kapitel in zwei ganz verschiedenen Rollen auf. Diese Stelle ist gedanklich
anspruchsvoll, lies sie langsam.

:::definition[Träge und schwere Masse]
- Die **träge Masse** $m_{\text{träg}}$ misst, wie stark sich ein Körper einer Beschleunigung widersetzt.
  Sie steht im Grundgesetz $F = m_{\text{träg}}\cdot a$.
- Die **schwere Masse** $m_{\text{schwer}}$ misst, wie stark die Erde den Körper anzieht. Sie steht in der
  Gewichtskraft $F_G = m_{\text{schwer}}\cdot g$.

**Beispiel für die träge Masse:** Einen schweren Wagen auf glatten Schienen anzuschieben ist auch
waagrecht mühsam, obwohl die Erde dabei gar nicht mitspielt.

**Beispiel für die schwere Masse:** Eine Federwaage dehnt sich unter einem ruhenden Körper, weil die Erde
ihn anzieht. Beschleunigt wird dabei nichts.

**Kein Unterschied in der Messung:** Experimente zeigen, dass beide Massen für jeden Körper gleich sind,
mit einer Genauigkeit von mindestens zwölf Stellen. Deshalb schreibt man meist nur $m$.
:::

Warum ist das wichtig? Weil daraus folgt, dass im Vakuum **alle Körper gleich schnell fallen**. Für einen
frei fallenden Körper ist die Gewichtskraft die einzige Kraft:
$$a = \frac{F_G}{m_{\text{träg}}} = \frac{m_{\text{schwer}}\cdot g}{m_{\text{träg}}} = g.$$
Ein doppelt so schwerer Körper wird doppelt so stark angezogen, ist aber auch doppelt so träge. Beides
hebt sich genau auf. Wären die beiden Massen verschieden, würden eine Bleikugel und eine Feder im Vakuum
verschieden schnell fallen. Das beobachtet man nie. Die Gleichheit ist keine Selbstverständlichkeit,
Albert Einstein hat auf ihr seine Allgemeine Relativitätstheorie aufgebaut (das geht über die Prüfung hinaus).

```reflexion
frage: Ist die Normalkraft der Wechselwirkungspartner der Gewichtskraft? Begründe mit dem Lift.
antwort: |
  Nein. Im nach oben anfahrenden Lift ist die Normalkraft größer als die Gewichtskraft. Wechselwirkungspartner sind
  nach dem dritten Axiom aber **immer** gleich groß. Außerdem greifen beide Kräfte an derselben Person an, Partner
  greifen an verschiedenen Körpern an. Der Partner der Gewichtskraft ist die Kraft, mit der die Person die Erde anzieht.
  Der Partner der Normalkraft ist die Kraft, mit der die Person auf die Waage drückt. Dass $F_N$ und $F_G$ beim ruhigen
  Stehen gleich groß sind, folgt aus dem ersten Axiom, nicht aus dem dritten.
```

### Aufgaben zu beschleunigten Bezugssystemen

```aufgabe
id: p3-lift-konstant
titel: Die Waage im gleichförmig fahrenden Lift
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Person ($55\,\text{kg}$) steht auf einer Waage in einem Lift, der mit konstant $2{,}5\,\text{m/s}$ nach oben fährt. Welche Kraft zeigt die Waage in N? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    loesung: "55*9.81"
    einheit: "N"
    anzeige: '540'
    fehler:
      - wert: "55*(9.81+2.5)"
        meldung: |
          $2{,}5\,\text{m/s}$ ist eine Geschwindigkeit, keine Beschleunigung. Bei konstanter Geschwindigkeit ist die Beschleunigung null. Der Lift ist dann ein Inertialsystem wie der ruhende Boden.
      - wert: "55"
        meldung: |
          Das ist die Masse in kg. Gefragt ist die Kraft in Newton.
hinweise:
  - Wie groß ist die Beschleunigung des Lifts, wenn er mit konstanter Geschwindigkeit fährt?
loesung: |
  **Ansatz:** Konstante Geschwindigkeit heißt $a = 0$. Damit gilt $F_N - m g = 0$.
  ---
  **Ergebnis:** $F_N = m g = 55\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 540\,\text{N}$, genau wie im ruhenden Lift. Die Fahrt selbst spürt man nicht, nur das Anfahren und Bremsen.
```

```aufgabe
id: p3-schwerelos
titel: Warum schweben Astronauten?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  In der Internationalen Raumstation (ISS), rund $400\,\text{km}$ über der Erde, schweben die Astronauten. Warum?
teile:
  - typ: auswahl
    optionen:
      - "Dort oben gibt es keine Schwerkraft mehr."
      - "Station und Astronauten fallen gemeinsam mit derselben Beschleunigung um die Erde, deshalb drücken sie nicht aufeinander."
      - "Im Weltraum gibt es keine Luft, und ohne Luft wirkt keine Gewichtskraft."
      - "Die Zentrifugalkraft ist dort größer als die Gewichtskraft und drückt sie nach oben."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          In $400\,\text{km}$ Höhe ist die Anziehung der Erde noch rund $89\,\%$ so groß wie am Boden. Ohne sie würde die Station geradeaus ins All fliegen, statt die Erde zu umkreisen.
      - wert: 2
        meldung: |
          Die Gravitation braucht keine Luft. Auch der Mond wird durch das Vakuum hindurch von der Erde angezogen.
      - wert: 3
        meldung: |
          Wäre eine Kraft nach außen größer, würden die Astronauten zur Decke gedrückt, nicht schweben. Außerdem gibt es von außen betrachtet keine Zentrifugalkraft. Sie ist eine Scheinkraft.
hinweise:
  - Vergleiche mit einem frei fallenden Lift. Was zeigt dort die Waage, und warum?
loesung: |
  **Ansatz:** Schwerelosigkeit heißt nicht „keine Gewichtskraft“, sondern „keine Normalkraft“. Sie entsteht, wenn alles gemeinsam frei fällt.
  ---
  **Ergebnis:** Die Gewichtskraft beschleunigt Station und Astronauten gleich stark. Sie fallen ständig um die Erde herum, ohne aufeinander zu drücken. Richtig ist die zweite Aussage.
```

```aufgabe
id: p3-lift
titel: Personenwaage im Lift
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Person ($70\,\text{kg}$) steht im Lift auf einer Personenwaage. Welche Kraft zeigt die Waage (in N, drei signifikante Stellen), wenn der Lift

  a) mit $1{,}5\,\text{m/s}^2$ nach oben beschleunigt,

  b) mit $1{,}5\,\text{m/s}^2$ nach unten beschleunigt,

  c) mit konstanter Geschwindigkeit nach unten fährt?
teile:
  - typ: zahl
    label: a)
    loesung: "70*(9.81+1.5)"
    einheit: "N"
    anzeige: '792'
    fehler:
      - wert: "70*(9.81-1.5)"
        meldung: |
          Bei Beschleunigung nach oben muss die Waage die Person zusätzlich beschleunigen. $F_N$ ist dann **größer** als $m g$.
      - wert: "70*1.5"
        meldung: |
          Das ist nur die Kraft für die Beschleunigung. Die Waage muss außerdem das Gewicht tragen: $F_N = m g + m a$.
  - typ: zahl
    label: b)
    loesung: "70*(9.81-1.5)"
    einheit: "N"
    anzeige: '582'
    fehler:
      - wert: "70*(9.81+1.5)"
        meldung: |
          Beschleunigt der Lift nach unten, ist $a$ mit „nach oben positiv“ negativ. Die Waage zeigt dann **weniger** als $m g$.
  - typ: zahl
    label: c)
    loesung: "70*9.81"
    einheit: "N"
    anzeige: '687'
    fehler:
      - wert: "70*(9.81-1.5)"
        meldung: |
          Konstante Geschwindigkeit heißt Beschleunigung null, egal in welche Richtung der Lift fährt.
hinweise:
  - 'Freikörperbild der Person: $F_N$ nach oben, $m g$ nach unten. Mit „nach oben“ positiv gilt $F_N - m g = m a$.'
  - Achte auf die Richtung der **Beschleunigung**, nicht auf die Fahrtrichtung.
gefuehrt:
  - text: Wie groß ist die Gewichtskraft der Person in N?
    teil: { typ: zahl, loesung: "70*9.81" }
    erklaerung: '$m g = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 686{,}7\,\text{N}$. Sie ist in allen drei Fällen gleich.'
  - text: Wie viel Newton braucht man zusätzlich, um die Person mit $1{,}5\,\text{m/s}^2$ zu beschleunigen?
    teil: { typ: zahl, loesung: "70*1.5" }
    erklaerung: '$m a = 70\,\text{kg}\cdot 1{,}5\,\text{m/s}^2 = 105\,\text{N}$.'
  - text: Was zeigt die Waage in a) in N?
    teil: { typ: zahl, loesung: "70*(9.81+1.5)" }
    erklaerung: 'Beschleunigung nach oben: $F_N = 686{,}7\,\text{N} + 105\,\text{N} = 792\,\text{N}$.'
  - text: Was zeigt die Waage in b) in N?
    teil: { typ: zahl, loesung: "70*(9.81-1.5)" }
    erklaerung: 'Beschleunigung nach unten: $F_N = 686{,}7\,\text{N} - 105\,\text{N} = 582\,\text{N}$.'
loesung: |
  **Ansatz:** Freikörperbild der Person von außen: $F_N - m g = m a$ mit „nach oben“ positiv, also $F_N = m(g + a)$.
  ---
  **a)** $a = +1{,}5\,\text{m/s}^2$: $F_N = 70\,\text{kg}\cdot 11{,}31\,\text{m/s}^2 = 792\,\text{N}$. Eine Waage in kg würde $80{,}7\,\text{kg}$ anzeigen.
  ---
  **b)** $a = -1{,}5\,\text{m/s}^2$: $F_N = 70\,\text{kg}\cdot 8{,}31\,\text{m/s}^2 = 582\,\text{N}$.
  ---
  **c)** $a = 0$: $F_N = m g = 687\,\text{N}$, wie im ruhenden Lift. Die Fahrtrichtung spielt keine Rolle.
```

```aufgabe
id: p3-bus-pendel
titel: Ein Haltegriff im bremsenden Bus
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Im Bus hängt ein Haltegriff an einem Band. Der Bus bremst mit $3{,}0\,\text{m/s}^2$. Um welchen Winkel gegen die Senkrechte stellt sich das Band schräg? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "inGrad(atan(3/9.81))"
    einheit: "°"
    anzeige: '17{,}0'
    fehler:
      - wert: "inGrad(atan(9.81/3))"
        meldung: |
          Das ist der Winkel gegen die **Waagrechte**. Gegen die Senkrechte gilt $\tan\varphi = a/g$: waagrechter Anteil durch senkrechten Anteil.
      - wert: "inGrad(asin(3/9.81))"
        meldung: |
          Das Verhältnis $a/g$ ist das Verhältnis der beiden Kraftanteile, also Gegenkathete durch Ankathete. Das ist der Tangens, nicht der Sinus.
hinweise:
  - 'Von außen: Der senkrechte Anteil der Bandkraft trägt $m g$, der waagrechte bremst den Griff mit $m a$.'
  - 'Das Verhältnis der beiden Anteile ist $\tan\varphi = \dfrac{m a}{m g}$.'
loesung: |
  **Ansatz von außen:** Auf den Griff wirken die Gewichtskraft und die Bandkraft. Der Griff wird mit dem Bus abgebremst, also muss die Bandkraft einen waagrechten Anteil $m a$ nach hinten haben.
  ---
  **Winkel:** $\tan\varphi = \dfrac{m a}{m g} = \dfrac{3{,}0\,\text{m/s}^2}{9{,}81\,\text{m/s}^2} = 0{,}306$, also $\varphi = 17{,}0^\circ$. Die Masse kürzt sich.
  ---
  **Richtung:** Das Band zeigt vom Griff schräg nach hinten oben, der Griff schwingt also nach **vorn** aus. Im Bus beschreibt man das mit der Trägheitskraft nach vorn. Beide Sichtweisen geben denselben Winkel.
```

```aufgabe
id: p3-lift-paar
titel: Sind Normalkraft und Gewichtskraft ein Paar?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Im nach oben anfahrenden Lift zeigt eine Waage $790\,\text{N}$, die Gewichtskraft der Person beträgt $687\,\text{N}$. Ein Mitschüler sagt: „Die Normalkraft ist die Reaktion auf die Gewichtskraft, actio gleich reactio.“ Welche Aussage ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Er hat recht. Die Normalkraft entsteht als Reaktion auf die Gewichtskraft."
      - "Er hat unrecht. Die beiden Kräfte sind verschieden groß und greifen am selben Körper an, also können sie kein Wechselwirkungspaar sein."
      - "Er hat nur im ruhenden Lift recht. Beim Anfahren gilt das dritte Axiom nicht."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Wechselwirkungspartner sind **immer** gleich groß. Hier ist $790\,\text{N} \neq 687\,\text{N}$. Außerdem greifen beide an der Person an, Partner greifen aber an verschiedenen Körpern an.
      - wert: 2
        meldung: |
          Das dritte Axiom gilt immer, auch bei Beschleunigung. Auch im ruhenden Lift sind $F_N$ und $F_G$ kein Paar. Dort sind sie nur deshalb gleich groß, weil die Person nicht beschleunigt (erstes Axiom).
hinweise:
  - 'Prüfe die drei Bedingungen für ein Wechselwirkungspaar: dieselben zwei Körper, Angriff an verschiedenen Körpern, gleiche Kraftart (siehe [3.3 Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf)).'
  - An welchem Körper greift die Normalkraft an, an welchem die Gewichtskraft? Und sind die beiden hier gleich groß?
loesung: |
  **Kriterium:** Ein Wechselwirkungspaar wirkt zwischen denselben zwei Körpern, greift an verschiedenen Körpern an und ist immer gleich groß.
  ---
  **Prüfung:** Normalkraft und Gewichtskraft greifen beide an der Person an und sind hier verschieden groß. Sie sind also kein Paar.
  ---
  **Die echten Partner:** Zur Gewichtskraft gehört die Kraft, mit der die Person die Erde anzieht. Zur Normalkraft gehört die Kraft, mit der die Person auf die Waage drückt, und die ist ebenfalls $790\,\text{N}$.
```

```aufgabe
id: p3-traege-schwere
titel: Träge und schwere Masse
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Erkläre den Unterschied zwischen träger und schwerer Masse. Begründe dann, warum aus ihrer Gleichheit folgt, dass im Vakuum alle Körper gleich schnell fallen.
teile:
  - typ: text
    muster: |
      Die träge Masse bestimmt, wie stark sich ein Körper einer Beschleunigung widersetzt (F = m_träg·a). Die schwere Masse
      bestimmt, wie stark die Erde an ihm zieht (F_G = m_schwer·g). Experimentell sind beide gleich. Für einen frei fallenden
      Körper ist die Gewichtskraft die einzige Kraft, also a = m_schwer·g/m_träg = g, für jeden Körper dieselbe Beschleunigung.
hinweise:
  - In welchen beiden Gleichungen tritt die Masse auf, und welche Rolle spielt sie jeweils?
  - Setze für einen fallenden Körper die Gewichtskraft in das Grundgesetz ein.
loesung: |
  **Träge Masse:** Sie misst den Widerstand gegen Beschleunigung und steht in $F = m_{\text{träg}}\,a$.
  ---
  **Schwere Masse:** Sie misst, wie stark die Erde anzieht, und steht in $F_G = m_{\text{schwer}}\,g$.
  ---
  **Folgerung:** Im Vakuum wirkt beim Fallen nur $F_G$. Also $a = \dfrac{m_{\text{schwer}}\,g}{m_{\text{träg}}}$. Weil beide Massen gleich sind, kürzen sie sich: $a = g$ für jeden Körper.
```

```aufgabe
id: p3-lift-diagramm
titel: Eine Liftfahrt aus der Waagenanzeige rekonstruieren
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine Person steht während einer Liftfahrt nach oben auf einer Waage. Das Diagramm zeigt, was die Waage anzeigt. Vor $t = 0$ und nach $t = 12\,\text{s}$ steht der Lift still.
  ```plot
  x: [-1, 13]
  y: [350, 650]
  achsen: { x: "t in s", y: "Anzeige in N" }
  strecken:
    - { von: [-1, 490.5], nach: [0, 490.5], farbe: 0 }
    - { von: [0, 565.5], nach: [3, 565.5], farbe: 0 }
    - { von: [3, 490.5], nach: [9, 490.5], farbe: 0 }
    - { von: [9, 415.5], nach: [12, 415.5], farbe: 0 }
    - { von: [12, 490.5], nach: [13, 490.5], farbe: 0 }
    - { von: [0, 490.5], nach: [0, 565.5], gestrichelt: true }
    - { von: [3, 565.5], nach: [3, 490.5], gestrichelt: true }
    - { von: [9, 490.5], nach: [9, 415.5], gestrichelt: true }
    - { von: [12, 415.5], nach: [12, 490.5], gestrichelt: true }
  punkte:
    - { x: 1.5, y: 565.5, label: "565,5 N" }
    - { x: 6, y: 490.5, label: "490,5 N" }
    - { x: 10.5, y: 415.5, label: "415,5 N" }
  ```

  a) Wie groß ist die Masse der Person?

  b) Wie groß ist die Beschleunigung des Lifts zwischen $0$ und $3\,\text{s}$?

  c) Wie hoch fährt der Lift insgesamt?
teile:
  - typ: zahl
    label: a) Masse
    loesung: "490.5/9.81"
    einheit: "kg"
    anzeige: '50'
    fehler:
      - wert: "565.5/9.81"
        meldung: |
          Beim Anfahren zeigt die Waage mehr als die Gewichtskraft. Die Masse liest du in einer Phase ohne Beschleunigung ab, also im Stillstand oder bei gleichförmiger Fahrt.
  - typ: zahl
    label: b) Beschleunigung
    loesung: "565.5/50 - 9.81"
    einheit: "m/s²"
    anzeige: '1{,}5'
    fehler:
      - wert: "565.5/50"
        meldung: |
          Das ist $F_N/m = g + a$. Die Beschleunigung des Lifts ist der Teil, der über $g$ hinausgeht.
  - typ: zahl
    label: c) Gesamthöhe
    loesung: "0.5*1.5*3^2 + 1.5*3*6 + 0.5*1.5*3^2"
    einheit: "m"
    anzeige: '40{,}5'
    fehler:
      - wert: "1.5*3*12"
        meldung: |
          Du hast so gerechnet, als fahre der Lift die ganzen $12\,\text{s}$ mit Höchstgeschwindigkeit. Beim Anfahren und Bremsen ist er im Mittel nur halb so schnell.
hinweise:
  - In welcher Phase beschleunigt der Lift nicht? Dort zeigt die Waage genau $m g$.
  - 'Phase 1: $F_N = m(g + a)$. Phase 3: $F_N = m(g - a)$. Danach Kinematik: Wege der drei Phasen addieren.'
loesung: |
  **Modell:** Drei Phasen mit konstanter Beschleunigung: Anfahren, gleichförmige Fahrt, Bremsen. In jeder gilt $F_N = m(g + a)$ mit „nach oben“ positiv.
  ---
  **a)** Zwischen $3$ und $9\,\text{s}$ ist $a = 0$, also $m = \dfrac{490{,}5\,\text{N}}{9{,}81\,\text{m/s}^2} = 50\,\text{kg}$.
  ---
  **b)** $a = \dfrac{F_N}{m} - g = \dfrac{565{,}5\,\text{N}}{50\,\text{kg}} - 9{,}81\,\text{m/s}^2 = 11{,}31\,\text{m/s}^2 - 9{,}81\,\text{m/s}^2 = 1{,}5\,\text{m/s}^2$. Beim Bremsen ist es genauso viel: $9{,}81 - 415{,}5/50 = 1{,}5\,\text{m/s}^2$.
  ---
  **c)** Höchstgeschwindigkeit $v = 1{,}5\,\text{m/s}^2\cdot 3\,\text{s} = 4{,}5\,\text{m/s}$. Anfahren: $\tfrac12\cdot 1{,}5\,\text{m/s}^2\cdot(3\,\text{s})^2 = 6{,}75\,\text{m}$. Gleichförmig: $4{,}5\,\text{m/s}\cdot 6\,\text{s} = 27\,\text{m}$. Bremsen wieder $6{,}75\,\text{m}$. Zusammen $40{,}5\,\text{m}$.
  ---
  **Plausibilität:** Etwa $40\,\text{m}$ sind gut 13 Stockwerke. Für eine Fahrt von $12\,\text{s}$ in einem Hochhaus ist das stimmig.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus den Kapiteln
[Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen) und
[Kinematik](/lernen/physik1/kinematik) gemischt. Das ist Absicht: In der Prüfung steht nicht dabei, zu
welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren passt?“ musst du nichts
rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p3-mix-wurf
titel: Ein Ball senkrecht nach oben
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Ball wird mit $15\,\text{m/s}$ senkrecht nach oben geworfen. Luftwiderstand vernachlässigen wir.

  a) Wie hoch steigt er? Runde auf eine Nachkommastelle.

  b) Wie groß ist seine Beschleunigung am höchsten Punkt?
teile:
  - typ: zahl
    label: a) Steighöhe
    loesung: "15^2/(2*9.81)"
    einheit: "m"
    anzeige: '11{,}5'
    fehler:
      - wert: "15^2/9.81"
        meldung: |
          Der Faktor $2$ fehlt. Aus $v_0^2 = 2 g h$ folgt $h = v_0^2/(2g)$.
  - typ: zahl
    label: b) Beschleunigung oben
    loesung: "9.81"
    einheit: "m/s²"
    fehler:
      - wert: "0"
        meldung: |
          Am höchsten Punkt ist die **Geschwindigkeit** null, die Beschleunigung nicht. Die Gewichtskraft wirkt weiter, sonst bliebe der Ball oben stehen.
hinweise:
  - 'Für a) die zeitfreie Gleichung $v_0^2 = 2 g h$, denn oben ist $v = 0$.'
  - Für b) frage, welche Kraft am höchsten Punkt auf den Ball wirkt.
loesung: |
  **Ansatz:** Nach dem Abwurf wirkt nur die Gewichtskraft. Der Ball wird also gleichmäßig mit $g$ gebremst, auf dem Weg nach oben wie nach unten.
  ---
  **a)** Oben ist $v = 0$, also $h = \dfrac{v_0^2}{2g} = \dfrac{(15\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = \dfrac{225\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 11{,}5\,\text{m}$.
  ---
  **b)** Die Gewichtskraft ist auch oben da, also ist $a = F_G/m = g = 9{,}81\,\text{m/s}^2$ nach unten. Wiederholen: [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Senkrechter Wurf“.
```

```aufgabe
id: p3-mix-einheiten
titel: Kraft aus Gramm und Zentimetern
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Modellauto hat die Masse $450\,\text{g}$ und beschleunigt mit $120\,\text{cm/s}^2$. Wie groß ist die resultierende Kraft in Newton?
teile:
  - typ: zahl
    loesung: "0.45*1.2"
    einheit: "N"
    anzeige: '0{,}54'
    fehler:
      - wert: "450*120"
        meldung: |
          Du hast Gramm und Zentimeter direkt eingesetzt. Ein Newton ist $1\,\text{kg}\cdot\text{m/s}^2$. Rechne zuerst $450\,\text{g} = 0{,}450\,\text{kg}$ und $120\,\text{cm/s}^2 = 1{,}20\,\text{m/s}^2$ um.
      - wert: "450*1.2"
        meldung: |
          Die Beschleunigung hast du richtig umgerechnet, die Masse aber nicht. $450\,\text{g} = 0{,}450\,\text{kg}$.
hinweise:
  - Rechne beide Größen zuerst in SI-Einheiten um, dann $F = m a$.
loesung: |
  **Ansatz:** $F = m a$ liefert nur dann Newton, wenn $m$ in kg und $a$ in $\text{m/s}^2$ stehen.
  ---
  **Umrechnen:** $m = 0{,}450\,\text{kg}$, $a = 1{,}20\,\text{m/s}^2$.
  ---
  **Ergebnis:** $F = 0{,}450\,\text{kg}\cdot 1{,}20\,\text{m/s}^2 = 0{,}54\,\text{N}$. Wiederholen: [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen), Abschnitt „Vorsilben, Zehnerpotenzen und Umrechnen“.
```

```aufgabe
id: p3-mix-unsicherheit
titel: Messunsicherheit einer Kraft
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Wagen hat die Masse $m = (2{,}00 \pm 0{,}02)\,\text{kg}$. Gemessen wird die Beschleunigung $a = (1{,}50 \pm 0{,}05)\,\text{m/s}^2$. Berechne die resultierende Kraft und ihre absolute Unsicherheit in N. Verwende die Regel: Bei einem Produkt addieren sich die relativen Unsicherheiten.
teile:
  - typ: zahl
    label: Kraft
    loesung: "2*1.5"
    einheit: "N"
    anzeige: '3{,}00'
    fehler:
      - wert: "2/1.5"
        meldung: |
          Im Grundgesetz wird multipliziert: $F = m\cdot a$.
  - typ: zahl
    label: absolute Unsicherheit
    loesung: "2*1.5*(0.02/2 + 0.05/1.5)"
    einheit: "N"
    toleranz: 0.005
    anzeige: '0{,}13'
    fehler:
      - wert: "0.02+0.05"
        meldung: |
          Absolute Unsicherheiten mit verschiedenen Einheiten (kg und $\text{m/s}^2$) kann man nicht addieren. Bei einem Produkt addiert man die **relativen** Unsicherheiten.
      - wert: "2*1.5*(0.02/2)"
        meldung: |
          Du hast nur die Unsicherheit der Masse berücksichtigt. Die Beschleunigung ist sogar ungenauer: $0{,}05/1{,}50 = 3{,}3\,\%$.
hinweise:
  - 'Relative Unsicherheiten: $0{,}02/2{,}00$ und $0{,}05/1{,}50$.'
  - Addiere sie und multipliziere mit $F$.
loesung: |
  **Ansatz:** $F = m a$ ist ein Produkt. Seine relative Unsicherheit ist die Summe der relativen Unsicherheiten der Faktoren.
  ---
  **Kraft:** $F = 2{,}00\,\text{kg}\cdot 1{,}50\,\text{m/s}^2 = 3{,}00\,\text{N}$.
  ---
  **Relative Unsicherheit:** $\dfrac{0{,}02}{2{,}00} + \dfrac{0{,}05}{1{,}50} = 1{,}0\,\% + 3{,}3\,\% = 4{,}3\,\%$.
  ---
  **Ergebnis:** $\Delta F = 0{,}043\cdot 3{,}00\,\text{N} = 0{,}13\,\text{N}$, also $F = (3{,}00 \pm 0{,}13)\,\text{N}$. Die Messung der Beschleunigung bestimmt die Genauigkeit. Wiederholen: [Kapitel Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen).
```

```aufgabe
id: p3-mix-vt-weg
titel: Weg und Kraft aus einem v-t-Diagramm
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Wagen ($50\,\text{kg}$) beschleunigt aus der Ruhe in $4{,}0\,\text{s}$ gleichmäßig auf $8{,}0\,\text{m/s}$ und fährt dann $6{,}0\,\text{s}$ mit dieser Geschwindigkeit weiter.
  ```plot
  x: [0, 11]
  y: [0, 10]
  achsen: { x: "t in s", y: "v in m/s" }
  strecken:
    - { von: [0, 0], nach: [4, 8], farbe: 0 }
    - { von: [4, 8], nach: [10, 8], farbe: 0 }
  punkte:
    - { x: 4, y: 8, label: "(4 | 8)" }
    - { x: 10, y: 8, label: "(10 | 8)" }
  ```

  a) Welchen Weg legt er in den $10\,\text{s}$ zurück?

  b) Wie groß ist die resultierende Kraft in den ersten $4\,\text{s}$?
teile:
  - typ: zahl
    label: a) Weg
    loesung: "0.5*4*8 + 6*8"
    einheit: "m"
    anzeige: '64'
    fehler:
      - wert: "10*8"
        meldung: |
          Du hast so gerechnet, als fahre der Wagen die ganze Zeit $8{,}0\,\text{m/s}$. In den ersten $4\,\text{s}$ ist er langsamer. Der Weg ist die Fläche unter dem Graphen, und die ist dort ein Dreieck.
  - typ: zahl
    label: b) resultierende Kraft
    loesung: "50*8/4"
    einheit: "N"
    anzeige: '100'
    fehler:
      - wert: "50*8"
        meldung: |
          Masse mal Geschwindigkeit ist der Impuls, keine Kraft. Für die Kraft brauchst du die Beschleunigung, also die Steigung.
hinweise:
  - Der Weg ist die Fläche unter dem v-t-Graphen. Zerlege sie in ein Dreieck und ein Rechteck.
  - Die Beschleunigung ist die Steigung der ersten Strecke.
loesung: |
  **Ansatz:** Im v-t-Diagramm ist der Weg die Fläche unter dem Graphen und die Beschleunigung die Steigung.
  ---
  **a)** Dreieck: $\tfrac12\cdot 4{,}0\,\text{s}\cdot 8{,}0\,\text{m/s} = 16\,\text{m}$. Rechteck: $6{,}0\,\text{s}\cdot 8{,}0\,\text{m/s} = 48\,\text{m}$. Zusammen $64\,\text{m}$.
  ---
  **b)** $a = \dfrac{8{,}0\,\text{m/s}}{4{,}0\,\text{s}} = 2{,}0\,\text{m/s}^2$, also $F = 50\,\text{kg}\cdot 2{,}0\,\text{m/s}^2 = 100\,\text{N}$. Danach ist die resultierende Kraft null. Wiederholen: [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Bewegungsdiagramme ineinander übersetzen“.
```

```aufgabe
id: p3-mix-relativ
titel: Ein Ball im fahrenden Zug
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Du sitzt in einem Zug, der mit konstant $100\,\text{km/h}$ geradeaus fährt, und wirfst einen Ball senkrecht nach oben. Wo landet er?
teile:
  - typ: auswahl
    optionen:
      - "Wieder in deiner Hand."
      - "Hinter dir, weil der Zug unter dem Ball weiterfährt."
      - "Vor dir, weil der Ball den Schwung des Zuges hat."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Ball hatte schon vor dem Wurf die $100\,\text{km/h}$ des Zuges. Nach dem ersten Axiom behält er diese waagrechte Geschwindigkeit, denn waagrecht wirkt keine Kraft auf ihn. Er bleibt also über deiner Hand.
      - wert: 2
        meldung: |
          Der Ball hat genau dieselbe waagrechte Geschwindigkeit wie du und der Zug, nicht mehr. Deshalb bleibt er relativ zu dir an derselben Stelle.
hinweise:
  - Welche waagrechte Geschwindigkeit hat der Ball im Moment des Abwurfs, von außen gesehen?
loesung: |
  **Ansatz:** Der gleichförmig fahrende Zug ist ein Inertialsystem. Darin gelten dieselben Gesetze wie am Bahnsteig.
  ---
  **Ergebnis:** Der Ball landet wieder in deiner Hand. Von außen gesehen fliegt er eine Parabel, behält aber waagrecht die Geschwindigkeit des Zuges. Siehe [Kapitel Kinematik](/lernen/physik1/kinematik), Abschnitt „Relativbewegung und Inertialsysteme“.
```

```aufgabe
id: p3-mix-verfahren-bremsweg
titel: "Welches Verfahren passt? Bremsweg auf nasser Straße"
niveau: 2
lernziel: 3
kompetenz: modellieren
angabe: |
  Gegeben sind die Geschwindigkeit eines Autos und die Gleitreibungszahl zwischen Reifen und nasser Straße. Gesucht ist der Bremsweg bei einer Vollbremsung mit blockierten Rädern. Die Masse ist nicht gegeben. Welcher Lösungsweg passt? (Du musst nichts rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "Die Aufgabe ist ohne Masse nicht lösbar."
      - "Aus $m a = \\mu_G m g$ folgt $a = \\mu_G g$, dann Bremsweg aus $v_0^2 = 2as$."
      - "Bremsweg $s = v_0\\cdot t$ mit der Reaktionszeit."
      - "Aus $F = \\mu_G g$ die Kraft, dann $s = F/v_0$."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die Masse kürzt sich. Die Reibung ist proportional zur Masse, die Trägheit auch. Deshalb hängt die Bremsverzögerung nur von $\mu_G$ und $g$ ab.
      - wert: 2
        meldung: |
          $v_0\cdot t$ ist der Reaktionsweg, bevor die Bremse wirkt. Der Bremsweg selbst entsteht bei gleichmäßiger Verzögerung.
      - wert: 3
        meldung: |
          $\mu_G g$ ist eine Beschleunigung, keine Kraft. Und $F/v_0$ hat nicht die Einheit Meter.
hinweise:
  - Welche Kraft bremst das Auto, und wovon hängt sie ab?
loesung: |
  **Ansatz:** Waagrecht wirkt nur die Gleitreibung $\mu_G m g$. Sie ist die resultierende Kraft.
  ---
  **Verfahren:** $m a = \mu_G m g$, die Masse kürzt sich, $a = \mu_G g$. Dann mit der zeitfreien Gleichung $s = v_0^2/(2a)$. Richtig ist die zweite Antwort.
```

```aufgabe
id: p3-mix-verfahren-gekoppelt
titel: "Welches Verfahren passt? Zwei Körper an einem Seil"
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Wagen auf dem Tisch ist über eine Rolle mit einem hängenden Gewicht verbunden. Gesucht ist **nur** die Beschleunigung, nicht die Seilkraft. Welcher Weg ist am kürzesten? (Du musst nichts rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "Das ganze System als einen Körper betrachten: antreibende minus bremsende äußere Kräfte, geteilt durch die Gesamtmasse."
      - "Nur den hängenden Körper betrachten, er fällt mit $g$."
      - "Nur den Wagen betrachten: $a = m_2 g/m_1$."
      - "Erst die Seilkraft gleich $m_2 g$ setzen, dann den Wagen berechnen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das hängende Gewicht fällt nicht frei, das Seil hält es zurück. Mit $g$ fiele es nur ohne Seil.
      - wert: 2
        meldung: |
          Das hängende Gewicht muss mitbeschleunigt werden. Teilt man nur durch $m_1$, wird $a$ zu groß.
      - wert: 3
        meldung: |
          Die Seilkraft ist kleiner als $m_2 g$, sonst würde das Gewicht nicht beschleunigt sinken. Außerdem braucht man sie für $a$ gar nicht.
hinweise:
  - Welche Kraft ist für das System als Ganzes eine innere Kraft?
loesung: |
  **Ansatz:** Für das Gesamtsystem ist die Seilkraft eine innere Kraft und fällt heraus.
  ---
  **Verfahren:** $a = \dfrac{m_2 g - F_R}{m_1 + m_2}$. Richtig ist die erste Antwort. Die Seilkraft bräuchte man erst, wenn sie gefragt ist.
```

```aufgabe
id: p3-mix-verfahren-haft
titel: "Welches Verfahren passt? Eine ruhende Kiste auf der Rampe"
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Kiste liegt ruhig auf einer Rampe. Gegeben sind Masse, Neigungswinkel und die Haftreibungszahl. Die Kiste rutscht sicher nicht. Wie groß ist die Haftreibungskraft, die gerade wirkt? (Du musst nichts rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "$\\mu_H\\cdot m g\\cos\\alpha$"
      - "$m g\\sin\\alpha$"
      - "$\\mu_H\\cdot m g$"
      - "null, weil die Kiste ruht"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das ist nur der **Höchstwert** der Haftreibung. Solange die Kiste ruht, ist die Haftreibung genau so groß, wie es fürs Gleichgewicht nötig ist.
      - wert: 2
        meldung: |
          Das ist der Höchstwert auf waagrechtem Boden. Auf der Rampe ist $F_N = m g\cos\alpha$, und gefragt ist ohnehin nicht der Höchstwert.
      - wert: 3
        meldung: |
          Ohne Haftreibung würde der Hangabtrieb die Kiste hinunterbeschleunigen. Sie ruht, also muss eine Gegenkraft wirken.
hinweise:
  - Die Kiste ruht. Was sagt das erste Axiom über die Kräfte entlang der Rampe?
loesung: |
  **Ansatz:** Die Kiste ruht, also ist die resultierende Kraft entlang der Rampe null (erstes Axiom).
  ---
  **Verfahren:** Die Haftreibung gleicht genau den Hangabtrieb aus: $F_{\text{Haft}} = m g\sin\alpha$. Der Wert $\mu_H m g\cos\alpha$ ist nur die Obergrenze. Richtig ist die zweite Antwort.
```

```aufgabe
id: p3-mix-bremsen-zeit
titel: Bremszeit aus der Bremskraft
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Kleinwagen ($900\,\text{kg}$) bremst aus $72\,\text{km/h}$ mit einer konstanten Bremskraft von $6{,}3\,\text{kN}$ bis zum Stillstand. Wie lange dauert das Bremsen, und wie lang ist der Bremsweg? Runde auf drei signifikante Stellen.
teile:
  - typ: zahl
    label: Bremszeit
    loesung: "20/(6300/900)"
    einheit: "s"
    anzeige: '2{,}86'
    fehler:
      - wert: "72/(6300/900)"
        meldung: |
          Du hast mit $72$ statt $20\,\text{m/s}$ gerechnet. Rechne km/h zuerst in m/s um: durch $3{,}6$ teilen.
      - wert: "20/6.3"
        meldung: |
          Du hast die Kraft wie eine Beschleunigung behandelt. Zuerst $a = F/m$ berechnen.
  - typ: zahl
    label: Bremsweg
    loesung: "20^2/(2*6300/900)"
    einheit: "m"
    anzeige: '28{,}6'
    fehler:
      - wert: "20*20/(6300/900)"
        meldung: |
          Du hast $s = v_0 t$ gerechnet. Das Auto wird aber gleichmäßig langsamer, im Mittel fährt es nur $v_0/2$.
hinweise:
  - 'Grundgesetz: $a = F/m$. Dann Kinematik: $t = v_0/a$.'
  - 'Bremsweg: $s = v_0^2/(2a)$ oder $s = \tfrac12 v_0 t$.'
loesung: |
  **Ansatz:** Die Bremskraft ist die resultierende Kraft. Mit dem Grundgesetz folgt die Verzögerung, mit der Kinematik Zeit und Weg.
  ---
  **Verzögerung:** $a = \dfrac{6300\,\text{N}}{900\,\text{kg}} = 7{,}0\,\text{m/s}^2$. Anfangsgeschwindigkeit $v_0 = 72/3{,}6\,\text{m/s} = 20\,\text{m/s}$.
  ---
  **Zeit:** $t = \dfrac{v_0}{a} = \dfrac{20\,\text{m/s}}{7{,}0\,\text{m/s}^2} = 2{,}86\,\text{s}$.
  ---
  **Weg:** $s = \dfrac{v_0^2}{2a} = \dfrac{400\,\text{m}^2/\text{s}^2}{14\,\text{m/s}^2} = 28{,}6\,\text{m}$. Probe: $\tfrac12\cdot 20\,\text{m/s}\cdot 2{,}86\,\text{s} = 28{,}6\,\text{m}$. ✓
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Punkte und ein
Sachkontext. Für jede gilt: Freikörperbild zeichnen, Achsen festlegen, Newton anwenden, Ergebnis prüfen.
Der Zeitrichtwert steht bei jeder Aufgabe, als Faustregel gilt etwa zwei Minuten pro Punkt.

```aufgabe
id: p3-pruefung-schlitten
titel: Rodeln
niveau: 3
punkte: 10
lernziel: 5
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Ein Kind ($25\,\text{kg}$) sitzt auf einem Schlitten ($15\,\text{kg}$). Es fährt aus der Ruhe einen $50\,\text{m}$ langen, um $15^\circ$ geneigten Hang hinab und gleitet dann auf ebenem Schnee aus. Die Gleitreibungszahl ist überall $\mu_G = 0{,}10$. Runde auf drei signifikante Stellen.

  a) Berechne die Beschleunigung am Hang. (4 P)

  b) Welche Geschwindigkeit hat der Schlitten am Fuß des Hanges? (3 P)

  c) Wie weit gleitet er auf der Ebene noch? (3 P)
teile:
  - typ: zahl
    label: a) Beschleunigung am Hang
    loesung: "9.81*(sin(inRad(15)) - 0.1*cos(inRad(15)))"
    einheit: "m/s²"
    anzeige: '1{,}59'
  - typ: zahl
    label: b) Geschwindigkeit unten
    loesung: "sqrt(2*9.81*(sin(inRad(15)) - 0.1*cos(inRad(15)))*50)"
    einheit: "m/s"
    anzeige: '12{,}6'
  - typ: zahl
    label: c) Gleitweg auf der Ebene
    loesung: "2*9.81*(sin(inRad(15)) - 0.1*cos(inRad(15)))*50/(2*0.1*9.81)"
    einheit: "m"
    anzeige: '81{,}1'
hinweise:
  - Die Masse von $40\,\text{kg}$ kürzt sich überall heraus.
  - 'Am Hang $a = g(\sin\alpha - \mu_G\cos\alpha)$. Auf der Ebene bremst nur die Gleitreibung, $a = \mu_G g$.'
loesung: |
  **Modell:** Zwei Phasen mit konstanter Beschleunigung. Freikörperbild am Hang: Gewichtskraft, Normalkraft, Gleitreibung hangaufwärts. Auf der Ebene: Gewichtskraft und Normalkraft heben sich auf, waagrecht bremst die Gleitreibung.
  ---
  **a)** $a_1 = g(\sin 15^\circ - \mu_G\cos 15^\circ) = 9{,}81\,\text{m/s}^2\cdot(0{,}2588 - 0{,}0966) = 1{,}59\,\text{m/s}^2$. Die Masse kürzt sich.
  ---
  **b)** Zeitfreie Gleichung aus der Ruhe: $v = \sqrt{2 a_1 s} = \sqrt{2\cdot 1{,}59\,\text{m/s}^2\cdot 50\,\text{m}} = 12{,}6\,\text{m/s}$, also etwa $45\,\text{km/h}$.
  ---
  **c)** Auf der Ebene ist $F_N = m g$ und die Verzögerung $a_2 = \mu_G g = 0{,}981\,\text{m/s}^2$. Damit $s_2 = \dfrac{v^2}{2 a_2} = \dfrac{159{,}1\,\text{m}^2/\text{s}^2}{1{,}962\,\text{m/s}^2} = 81{,}1\,\text{m}$.
  ---
  **Plausibilität:** Der Auslauf ist länger als der Hang. Das passt: Am Hang beschleunigt der Schlitten mit $1{,}59\,\text{m/s}^2$, auf der Ebene bremst ihn nur die schwache Reibung mit $0{,}981\,\text{m/s}^2$. Die Bremsung ist schwächer als die Beschleunigung vorher, also ist der Auslauf um den Faktor $1{,}59/0{,}981 = 1{,}62$ länger als der Hang: $1{,}62\cdot 50\,\text{m} = 81\,\text{m}$. ✓
```

```aufgabe
id: p3-pruefung-aufzug
titel: Das Tragseil eines Aufzugs
niveau: 3
punkte: 8
lernziel: 7
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 15 Minuten.* Eine Aufzugskabine hat mit Insassen die Masse $800\,\text{kg}$. Das Tragseil hält höchstens $12\,000\,\text{N}$. Gib die Ergebnisse mit drei signifikanten Stellen an.

  a) Wie groß ist die Seilkraft bei gleichförmiger Fahrt? (2 P)

  b) Mit welcher Beschleunigung darf die Kabine höchstens nach oben anfahren? (3 P)

  c) Die Kabine fährt nach unten und bremst mit $2{,}0\,\text{m/s}^2$ ab. Wie groß ist die Seilkraft? (3 P)
teile:
  - typ: zahl
    label: a) gleichförmige Fahrt
    loesung: "800*9.81"
    einheit: "N"
    anzeige: '7848 \approx 7{,}85\cdot 10^{3}'
  - typ: zahl
    label: b) größte Beschleunigung
    loesung: "12000/800 - 9.81"
    einheit: "m/s²"
    anzeige: '5{,}19'
  - typ: zahl
    label: c) Bremsen bei Abwärtsfahrt
    loesung: "800*(9.81 + 2)"
    einheit: "N"
    anzeige: '9448 \approx 9{,}45\cdot 10^{3}'
hinweise:
  - 'Freikörperbild der Kabine: Seilkraft nach oben, Gewichtskraft nach unten. Mit „nach oben“ positiv gilt $F_S - m g = m a$.'
  - Das Abbremsen einer Abwärtsfahrt ist eine Beschleunigung nach oben.
loesung: |
  **Modell:** Freikörperbild der Kabine von außen: Seilkraft $F_S$ nach oben, Gewichtskraft $m g$ nach unten. Grundgesetz mit „nach oben“ positiv: $F_S = m(g + a)$.
  ---
  **a)** Gleichförmig heißt $a = 0$: $F_S = m g = 800\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 7{,}85\,\text{kN}$.
  ---
  **b)** Höchstens $F_S = 12\,000\,\text{N}$: $a_{\max} = \dfrac{F_S}{m} - g = \dfrac{12\,000\,\text{N}}{800\,\text{kg}} - 9{,}81\,\text{m/s}^2 = 15{,}0\,\text{m/s}^2 - 9{,}81\,\text{m/s}^2 = 5{,}19\,\text{m/s}^2$.
  ---
  **c)** Die Abwärtsfahrt wird gebremst, die Beschleunigung zeigt also nach oben: $F_S = 800\,\text{kg}\cdot(9{,}81 + 2{,}0)\,\text{m/s}^2 = 9{,}45\,\text{kN}$.
  ---
  **Plausibilität:** Im Fall c) ist das Seil stärker belastet als bei gleichförmiger Fahrt, aber noch unter der Grenze. Beim Bremsen nach unten fühlen sich auch die Insassen schwerer.
```

```aufgabe
id: p3-pruefung-rolle-ebene
titel: Klotz auf der Ebene, Gewicht an der Rolle
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Ein Klotz ($m_1 = 5{,}0\,\text{kg}$) liegt auf einer reibungsfreien, um $30^\circ$ geneigten Ebene. Er ist über ein Seil und eine Rolle am oberen Ende der Ebene mit einem frei hängenden Körper ($m_2 = 4{,}0\,\text{kg}$) verbunden. Runde auf drei signifikante Stellen.

  a) In welche Richtung bewegt sich das System? Begründe. (3 P)

  b) Berechne die Beschleunigung. (4 P)

  c) Berechne die Seilkraft. (3 P)
teile:
  - typ: auswahl
    label: a) Richtung
    optionen:
      - "Der Klotz gleitet die Ebene hinauf, der hängende Körper sinkt."
      - "Der Klotz gleitet die Ebene hinab, der hängende Körper steigt."
      - "Das System bleibt in Ruhe."
    richtig: [0]
  - typ: zahl
    label: b) Beschleunigung
    loesung: "(4 - 5*sin(inRad(30)))*9.81/9"
    einheit: "m/s²"
    anzeige: '1{,}64'
  - typ: zahl
    label: c) Seilkraft
    loesung: "4*(9.81 - (4 - 5*sin(inRad(30)))*9.81/9)"
    einheit: "N"
    anzeige: '32{,}7'
hinweise:
  - 'Vergleiche die Gewichtskraft von $m_2$ mit der Hangabtriebskraft von $m_1$.'
  - 'Gesamtsystem: $a = (m_2 g - m_1 g\sin 30^\circ)/(m_1 + m_2)$. Seilkraft am hängenden Körper: $m_2 g - F_S = m_2 a$.'
loesung: |
  **Modell:** Zwei gekoppelte Körper mit gleicher Beschleunigung. Am Klotz zieht entlang der Ebene der Hangabtrieb hinab, am hängenden Körper die Gewichtskraft nach unten. Die Seilkraft ist eine innere Kraft.
  ---
  **a)** $m_2 g = 4{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 39{,}2\,\text{N}$ ist größer als $F_H = m_1 g\sin 30^\circ = 24{,}5\,\text{N}$. Also sinkt der hängende Körper, und der Klotz gleitet hinauf.
  ---
  **b)** $a = \dfrac{39{,}24\,\text{N} - 24{,}53\,\text{N}}{9{,}0\,\text{kg}} = 1{,}64\,\text{m/s}^2$.
  ---
  **c)** Hängender Körper: $m_2 g - F_S = m_2 a$, also $F_S = 4{,}0\,\text{kg}\cdot(9{,}81 - 1{,}635)\,\text{m/s}^2 = 32{,}7\,\text{N}$.
  ---
  **Probe am Klotz:** $F_S - F_H = 32{,}7\,\text{N} - 24{,}5\,\text{N} = 8{,}2\,\text{N} \approx 5{,}0\,\text{kg}\cdot 1{,}635\,\text{m/s}^2$. ✓
```

```aufgabe
id: p3-pruefung-lkw-kiste
titel: Vollbremsung mit Ladung
niveau: 3
punkte: 10
lernziel: 3
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Ein Lkw fährt mit $80\,\text{km/h}$. Auf seiner Ladefläche steht eine ungesicherte Kiste. Für Kiste und Ladefläche gilt $\mu_H = 0{,}40$ und $\mu_G = 0{,}30$. Der Lkw bremst gleichmäßig mit $4{,}5\,\text{m/s}^2$ bis zum Stillstand. Runde auf drei signifikante Stellen.

  a) Wie lang ist der Bremsweg des Lkw? (3 P)

  b) Mit welcher Beschleunigung könnte die Kiste höchstens gebremst werden, ohne zu rutschen? Rutscht sie? (4 P)

  c) Wie groß ist der Betrag der Beschleunigung der Kiste gegenüber der Straße, solange sie rutscht? (3 P)
teile:
  - typ: zahl
    label: a) Bremsweg
    loesung: "(80/3.6)^2/(2*4.5)"
    einheit: "m"
    anzeige: '54{,}9'
  - typ: zahl
    label: b) größte Verzögerung ohne Rutschen
    loesung: "0.4*9.81"
    einheit: "m/s²"
    anzeige: '3{,}92'
  - typ: auswahl
    label: b) Rutscht die Kiste?
    optionen:
      - "Ja, denn der Lkw bremst stärker, als die Haftreibung die Kiste bremsen kann."
      - "Nein, denn die Haftreibung passt sich jeder Bremsung an."
    richtig: [0]
  - typ: zahl
    label: c) Beschleunigung der rutschenden Kiste
    loesung: "0.3*9.81"
    einheit: "m/s²"
    anzeige: '2{,}94'
hinweise:
  - Die einzige waagrechte Kraft auf die Kiste ist die Reibung der Ladefläche. Sie zeigt entgegen der Fahrtrichtung.
  - 'Ohne Rutschen höchstens $m a = \mu_H m g$. Beim Rutschen $m a = \mu_G m g$.'
loesung: |
  **Modell:** Für die Kiste zählen nur die Kräfte auf die Kiste. Senkrecht heben sich Gewichtskraft und Normalkraft auf. Waagrecht wirkt nur die Reibung der Ladefläche. Sie bremst die Kiste, zeigt also entgegen der Fahrtrichtung.
  ---
  **a)** $v_0 = 80/3{,}6\,\text{m/s} = 22{,}2\,\text{m/s}$. Bremsweg $s = \dfrac{v_0^2}{2a} = \dfrac{(22{,}2\,\text{m/s})^2}{2\cdot 4{,}5\,\text{m/s}^2} = 54{,}9\,\text{m}$.
  ---
  **b)** Die Haftreibung kann höchstens $\mu_H m g$ liefern: $a_{\max} = \mu_H g = 0{,}40\cdot 9{,}81\,\text{m/s}^2 = 3{,}92\,\text{m/s}^2$. Der Lkw bremst mit $4{,}5\,\text{m/s}^2$, also stärker. Die Kiste kann nicht mithalten und rutscht nach vorn.
  ---
  **c)** Jetzt wirkt Gleitreibung: $a = \mu_G g = 0{,}30\cdot 9{,}81\,\text{m/s}^2 = 2{,}94\,\text{m/s}^2$. Die Kiste wird schwächer gebremst als der Lkw und rutscht gegen die Stirnwand.
  ---
  **Deutung:** Die Kiste wird nicht „nach vorn geschleudert“. Es gibt keine Kraft nach vorn. Sie wird nur zu schwach gebremst, deshalb bleibt sie schneller als der Lkw. Darum muss Ladung gesichert werden.
```

```aufgabe
id: p3-pruefung-schlepplift
titel: Am Schlepplift
niveau: 3
punkte: 10
lernziel: 4
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Ein Skifahrer ($75\,\text{kg}$) wird von einem Schlepplift einen $20^\circ$ steilen Hang hinaufgezogen. Das Zugseil verläuft parallel zum Hang. Die Gleitreibungszahl zwischen Ski und Schnee ist $\mu_G = 0{,}050$. Runde auf drei signifikante Stellen.

  a) Zeichne (gedanklich) das Freikörperbild des Skifahrers und nenne alle Kräfte mit Richtung. (2 P)

  b) Wie groß ist die Seilkraft bei konstanter Geschwindigkeit? (3 P)

  c) Wie groß ist sie beim Anfahren mit $0{,}50\,\text{m/s}^2$? (2 P)

  d) Bei $2{,}5\,\text{m/s}$ lässt der Skifahrer den Bügel los. Wie weit gleitet er noch hangaufwärts? (3 P)
teile:
  - typ: text
    label: a) Freikörperbild
    muster: |
      Vier Kräfte: Gewichtskraft senkrecht nach unten, Normalkraft senkrecht zum Hang nach außen, Seilkraft parallel zum
      Hang hinauf, Gleitreibung parallel zum Hang hinab (gegen die Bewegung). Keine eigene Hangabtriebskraft, sie ist ein
      Anteil der Gewichtskraft.
  - typ: zahl
    label: b) Seilkraft, gleichförmig
    loesung: "75*9.81*(sin(inRad(20)) + 0.05*cos(inRad(20)))"
    einheit: "N"
    anzeige: '286'
  - typ: zahl
    label: c) Seilkraft beim Anfahren
    loesung: "75*9.81*(sin(inRad(20)) + 0.05*cos(inRad(20))) + 75*0.5"
    einheit: "N"
    anzeige: '324'
  - typ: zahl
    label: d) Gleitweg nach dem Loslassen
    loesung: "2.5^2/(2*9.81*(sin(inRad(20)) + 0.05*cos(inRad(20))))"
    einheit: "m"
    anzeige: '0{,}819'
hinweise:
  - Achsen entlang und senkrecht zum Hang. Senkrecht zum Hang gilt Gleichgewicht.
  - 'Nach dem Loslassen bremsen Hangabtrieb und Reibung gemeinsam: $a = g(\sin\alpha + \mu_G\cos\alpha)$.'
loesung: |
  **a)** Gewichtskraft $m g$ senkrecht nach unten, Normalkraft senkrecht zum Hang, Seilkraft hangaufwärts, Gleitreibung hangabwärts. Die Hangabtriebskraft ist kein fünfter Pfeil, sondern ein Anteil von $m g$.
  ---
  **b)** Gleichförmig, also Summe null entlang des Hangs: $F_S = m g\sin 20^\circ + \mu_G m g\cos 20^\circ = 735{,}8\,\text{N}\cdot(0{,}342 + 0{,}05\cdot 0{,}940) = 286\,\text{N}$.
  ---
  **c)** Zusätzlich muss das Seil die Masse beschleunigen: $F_S = 286\,\text{N} + 75\,\text{kg}\cdot 0{,}50\,\text{m/s}^2 = 286\,\text{N} + 37{,}5\,\text{N} = 324\,\text{N}$.
  ---
  **d)** Ohne Seil bremsen Hangabtrieb und Reibung: $a = 9{,}81\,\text{m/s}^2\cdot(0{,}342 + 0{,}047) = 3{,}82\,\text{m/s}^2$. Gleitweg $s = \dfrac{v^2}{2a} = \dfrac{6{,}25\,\text{m}^2/\text{s}^2}{7{,}63\,\text{m/s}^2} = 0{,}819\,\text{m}$.
  ---
  **Plausibilität:** Weniger als ein Meter. Danach rutscht er zurück, denn $\tan 20^\circ = 0{,}36$ ist viel größer als die Reibungszahl von Ski auf Schnee.
```

```aufgabe
id: p3-pruefung-axiome-text
titel: Die Axiome an einem Buch erklären
niveau: 3
punkte: 6
lernziel: 2
kompetenz: begruenden
angabe: |
  *Zeitrichtwert: 10 Minuten.* Ein Buch liegt ruhig auf einem Tisch.

  a) Zeichne (gedanklich) das Freikörperbild des Buches und benenne alle Kräfte. (2 P)

  b) Erkläre, welches Newtonsche Axiom die Ruhe des Buches beschreibt. Nenne zu jeder Kraft aus a) ihren Wechselwirkungspartner und begründe, warum Gewichtskraft und Normalkraft **kein** Wechselwirkungspaar sind. (4 P)
teile:
  - typ: text
    muster: |
      a) Auf das Buch wirken die Gewichtskraft F_G = mg (Erde zieht Buch, nach unten) und die Normalkraft F_N (Tisch drückt
      Buch, nach oben). Sie sind gleich groß, die resultierende Kraft ist null.
      b) Das erste Axiom: Ohne resultierende Kraft bleibt das Buch in Ruhe. Das erste Axiom ist dabei kein bloßer Sonderfall
      von F = ma, denn es legt fest, in welchen Bezugssystemen (Inertialsystemen) F = ma überhaupt gilt. Partner der
      Gewichtskraft: Das Buch zieht die Erde an. Partner der Normalkraft: Das Buch drückt auf den Tisch. F_G und F_N sind
      kein Paar, weil beide am selben Körper (dem Buch) angreifen. Gleich groß sind sie nur, weil das Buch ruht.
hinweise:
  - Kräfte eines Gleichgewichts greifen am selben Körper an, Wechselwirkungspartner an verschiedenen.
  - Frage bei jeder Kraft, zwischen welchen zwei Körpern sie wirkt.
loesung: |
  **a) Freikörperbild:** $F_G$ nach unten (die Erde zieht das Buch), $F_N$ nach oben (der Tisch drückt das Buch). Beide sind gleich groß.
  ---
  **b) Erstes Axiom:** Die resultierende Kraft ist null, also bleibt das Buch in Ruhe. Das erste Axiom ist mehr als der Sonderfall $a = 0$ des zweiten: Es legt fest, in welchen Bezugssystemen das zweite gilt, nämlich in Inertialsystemen.
  ---
  **Wechselwirkungspartner:** Zur Gewichtskraft gehört die Anziehung der Erde durch das Buch (Gravitation). Zur Normalkraft gehört die Kraft, mit der das Buch auf den Tisch drückt (Kontaktkraft).
  ---
  **Kein Paar:** $F_G$ und $F_N$ greifen beide am Buch an und sind verschiedene Kraftarten. Gleich groß sind sie nur wegen des Gleichgewichts. Im beschleunigten Lift wären sie es nicht.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Für Bewegung braucht man keine Kraft, nur für die Änderung der Bewegung. (2) Die resultierende Kraft
  ist Masse mal Beschleunigung, und sie ist die Summe aller Kräfte auf einen Körper aus seinem Freikörperbild.
  (3) Kräfte treten immer paarweise auf, die Partner greifen an verschiedenen Körpern an und heben sich deshalb nie auf.
```

:::zusammenfassung
- **Erstes Axiom:** Ohne resultierende Kraft bleibt die Geschwindigkeit konstant, nach Betrag und Richtung.
  Bewegung braucht keine Kraft, nur ihre **Änderung**. Das Axiom legt zugleich fest, was ein Inertialsystem ist.
- **Zweites Axiom:** $\vec F_{\text{res}} = m\vec a$, allgemeiner $\vec F_{\text{res}} = \dd\vec p/\dd t$.
  $\vec F_{\text{res}}$ ist die Summe **aller** Kräfte auf **einen** Körper. Die Beschleunigung zeigt in ihre Richtung.
- **Drittes Axiom:** Kräfte treten paarweise auf, gleich groß und entgegengesetzt, an **verschiedenen** Körpern.
  Deshalb heben sich actio und reactio nie auf.
- **Kraftarten:** $F_G = m g$; Normalkraft aus dem Gleichgewicht senkrecht zur Fläche, nie automatisch $m g$;
  Federkraft $F = D s$; Haftreibung bis $\mu_H F_N$, Gleitreibung $\mu_G F_N$; Luftwiderstand wächst mit $v^2$.
- **Freikörperbild:** Ein Körper, alle Kräfte auf ihn, keine „Bewegungskraft“, keine Kräfte, die er selbst
  ausübt. Achsen in und senkrecht zur Beschleunigung, schräge Kräfte zerlegen.
- **Schiefe Ebene:** $F_H = m g\sin\alpha$, $F_N = m g\cos\alpha$; hinab $a = g(\sin\alpha - \mu_G\cos\alpha)$,
  hinauf gebremst mit $g(\sin\alpha + \mu_G\cos\alpha)$; Haftgrenze $\tan\alpha = \mu_H$.
- **Gekoppelte Körper:** gleiche Beschleunigung; Seilkräfte sind innere Kräfte; $a$ aus dem Gesamtsystem,
  Seilkraft aus einem einzelnen Körper.
- **Beschleunigte Bezugssysteme:** Dort braucht man Scheinkräfte $-m\vec a_0$ ohne Partner. Liftaufgaben
  rechnet man am sichersten von außen: $F_N = m(g + a)$. Träge und schwere Masse sind gleich, deshalb fallen
  im Vakuum alle Körper gleich schnell.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **„Bewegung braucht eine Kraft.“** Konstante Geschwindigkeit heißt resultierende Kraft null.
   Training: „Ein Aufzug fährt gleichförmig nach oben“ und „Zwei gleich schwere Körper an der Rolle“.
2. **Antriebskraft mit resultierender Kraft verwechselt.** Die Antriebskraft ist nur eine der Kräfte.
   Training: „Lkw mit konstanter Geschwindigkeit“.
3. **Nur eine Kraft in $F = m a$ eingesetzt.** Es zählt die Summe aller Kräfte.
   Training: „Resultierende Kraft und Geschwindigkeit“.
4. **Einheiten nicht umgerechnet** (km/h, Gramm, Zentimeter, Tonnen). Training: „Bremskraft und Bremsweg“
   und „Kraft aus Gramm und Zentimetern“.
5. **Actio und reactio gegeneinander verrechnet.** Sie greifen an verschiedenen Körpern an.
   Training: „Kräftepaare erkennen“ und „Das Pferd-Wagen-Paradoxon widerlegen“.
6. **Normalkraft und Gewichtskraft für ein Wechselwirkungspaar gehalten.** Training: „Sind Normalkraft und
   Gewichtskraft ein Paar?“.
7. **Normalkraft automatisch gleich $m g$ gesetzt**, auch bei schrägem Zug oder auf der Rampe.
   Training: „Normalkraft bei schrägem Zug“ und „Schlitten an einer schrägen Leine“.
8. **Haftreibung immer gleich ihrem Höchstwert gesetzt.** Training: „Wie groß ist die Haftreibung gerade?“.
9. **Federkonstanten in Reihe addiert.** Training: „Federn in Reihe und parallel“.
10. **Hangabtriebskraft oder „Bewegungskraft“ zusätzlich ins Freikörperbild gezeichnet.**
    Training: „Wie viele Kräfte wirken?“ und „Fehler im Freikörperbild finden“.
11. **Sinus und Kosinus auf der schiefen Ebene vertauscht.** Training: „Kräfte auf der schiefen Ebene“.
12. **Reibung beim Hinaufstoßen in die falsche Richtung gezeichnet.** Training: „Ein Klotz wird die Rampe
    hinaufgestoßen“.
13. **Seilkraft gleich der Gewichtskraft des hängenden Körpers gesetzt.** Training: „Wagen mit angehängtem Gewicht“.
14. **Im Lift die Fahrtrichtung statt der Beschleunigungsrichtung genommen.** Training: „Personenwaage im Lift“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“,
**3** „sicher, auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf
Niveau 3.

1. Die drei Axiome formulieren und „Bewegung braucht Kraft“ widerlegen.
2. Mit $F = m a$ rechnen, auch aus Diagrammen und in der Impulsform.
3. Wechselwirkungspaare von Gleichgewichten unterscheiden.
4. Gewichts-, Normal-, Feder-, Seil- und Reibungskräfte berechnen.
5. Ein vollständiges Freikörperbild zeichnen und auswerten.
6. Die schiefe Ebene hinab, hinauf und an der Haftgrenze berechnen.
7. Gekoppelte Körper mit und ohne Reibung berechnen.
8. Mit Scheinkräften und dem Lift umgehen, träge und schwere Masse erklären.

## Mündliche Prüfung

```karten
- id: p3-k-axiome
  frage: Formuliere die drei Newtonschen Axiome und gib zu jedem ein Beispiel.
  antwort: |
    Erstes Axiom (Trägheitssatz): Ein Körper bleibt in Ruhe oder bewegt sich gleichförmig geradlinig, solange die
    resultierende Kraft auf ihn null ist. Beispiel: Ein Puck gleitet auf glattem Eis fast ohne Geschwindigkeitsverlust.
    Zweites Axiom: Die resultierende Kraft ist Masse mal Beschleunigung, $\vec F = m\vec a$, allgemeiner
    $\vec F = \dd\vec p/\dd t$. Beispiel: $1200\,\text{kg}$ mit $3\,\text{m/s}^2$ brauchen $3{,}6\,\text{kN}$.
    Drittes Axiom: Übt A auf B eine Kraft aus, übt B auf A eine gleich große, entgegengesetzte Kraft aus. Beispiel:
    Wer gegen eine Wand drückt, wird von der Wand zurückgedrückt.
  kernpunkte: ["ohne resultierende Kraft konstante Geschwindigkeit", "F_res = m·a oder dp/dt", "gleich groß, entgegengesetzt, an verschiedenen Körpern", "je ein Beispiel"]
- id: p3-k-bewegung-ohne-kraft
  frage: Braucht ein Körper eine Kraft, um sich zu bewegen? Warum wird dann ein rollender Ball langsamer?
  antwort: |
    Nein. Für eine gleichförmige Bewegung braucht man keine Kraft, nur für die Änderung der Geschwindigkeit. Der Ball wird
    langsamer, weil Rollreibung und Luftwiderstand als resultierende Kraft gegen die Bewegung wirken. Ohne diese Kräfte
    würde er nach dem ersten Axiom ewig weiterrollen. Galilei hat das mit seinem Rinnen-Gedankenexperiment begründet.
  kernpunkte: ["Kraft ändert Bewegung, erhält sie nicht", "Reibung und Luftwiderstand bremsen", "Galileis Gedankenexperiment"]
- id: p3-k-sonderfall
  frage: Ist das erste Axiom nur ein Sonderfall des zweiten?
  antwort: |
    Nein. Setzt man im zweiten Axiom $F = 0$, folgt zwar $a = 0$. Das erste Axiom sagt aber zusätzlich, in welchen
    Bezugssystemen das überhaupt gilt: in den Inertialsystemen, also den Systemen, in denen ein kräftefreier Körper
    gleichförmig weiterläuft. Erst in einem solchen System darf man $F = m a$ anwenden.
  kernpunkte: ["F = 0 ergibt a = 0", "erstes Axiom definiert Inertialsysteme", "F = m·a gilt nur dort"]
- id: p3-k-newton
  frage: Wie ist die Einheit Newton festgelegt, und wie groß ist ein Newton ungefähr?
  antwort: |
    $1\,\text{N}$ ist die Kraft, die einem Körper mit $1\,\text{kg}$ die Beschleunigung $1\,\text{m/s}^2$ gibt, also
    $1\,\text{N} = 1\,\text{kg}\cdot\text{m/s}^2$. Das folgt aus $F = m a$. Auf eine Tafel Schokolade mit $100\,\text{g}$
    wirkt an der Erdoberfläche knapp $1\,\text{N}$ Gewichtskraft.
  kernpunkte: ["aus F = m·a", "1 N = 1 kg·m/s²", "Größenvorstellung"]
- id: p3-k-impulsform
  frage: Wann braucht man das Grundgesetz in der Impulsform, und wie hängt es mit dem Kapitel über Impuls zusammen?
  antwort: |
    Die Impulsform $F = \Delta p/\Delta t$ braucht man, wenn sich die Masse ändert, etwa bei einer Rakete, die Treibstoff
    ausstößt, oder bei einem Förderband, auf das laufend Sand fällt. Bei konstanter Masse ist sie gleich $m a$. Ist die
    resultierende Kraft null, ändert sich der Impuls nicht. Das ist die Impulserhaltung aus dem Kapitel Arbeit, Energie, Impuls.
  kernpunkte: ["veränderliche Masse", "bei konstanter Masse gleich m·a", "F = 0 bedeutet Impulserhaltung (Kapitel 4)"]
- id: p3-k-actio-reactio
  frage: Warum heben sich actio und reactio nicht auf?
  antwort: |
    Weil sie an verschiedenen Körpern angreifen. Aufheben können sich nur Kräfte, die am selben Körper angreifen. Ob ein
    Körper beschleunigt, hängt nur von den Kräften ab, die auf ihn selbst wirken. Beim Pferd und Wagen zieht das Pferd den
    Wagen und der Wagen das Pferd. Für den Wagen zählt aber nur die Zugkraft des Pferdes gegen die Reibung.
  kernpunkte: ["verschiedene Angriffskörper", "nur Kräfte am selben Körper addieren", "Beispiel Pferd und Wagen"]
- id: p3-k-normal-gewicht
  frage: Sind Gewichtskraft und Normalkraft eines ruhenden Buches actio und reactio?
  antwort: |
    Nein. Beide greifen am Buch an, und es sind verschiedene Kraftarten. Gleich groß sind sie nur, weil das Buch ruht
    (erstes Axiom). Im anfahrenden Lift ist die Normalkraft größer als die Gewichtskraft. Die echten Partner sind: Das Buch
    zieht die Erde an (Partner der Gewichtskraft) und das Buch drückt auf den Tisch (Partner der Normalkraft).
  kernpunkte: ["beide am selben Körper", "Gleichheit kommt aus dem ersten Axiom", "Gegenbeispiel Lift", "die echten Partner"]
- id: p3-k-masse-gewicht
  frage: Was ist der Unterschied zwischen Masse und Gewichtskraft?
  antwort: |
    Die Masse in kg misst die Trägheit eines Körpers und ist überall gleich. Die Gewichtskraft in N ist die Kraft, mit der
    ein Himmelskörper den Körper anzieht, $F_G = m g$. Sie hängt vom Ort ab. Ein Astronaut mit $80\,\text{kg}$ hat auf dem
    Mond dieselbe Masse, aber nur etwa ein Sechstel der Gewichtskraft. Woher $g$ kommt, erklärt das Gravitationsgesetz
    im Kapitel Kreisbewegung und Gravitation.
  kernpunkte: ["Masse = Trägheit, kg, ortsunabhängig", "Gewichtskraft = m·g, N, ortsabhängig", "Beispiel Mond"]
- id: p3-k-reibung
  frage: Erkläre Haft- und Gleitreibung. Wovon hängt die Reibungskraft ab, und kann Reibung auch antreiben?
  antwort: |
    Die Haftreibung hält einen ruhenden Körper fest und passt sich an, höchstens bis $\mu_H F_N$. Die Gleitreibung wirkt
    beim Rutschen mit $\mu_G F_N$, und es gilt $\mu_G < \mu_H$. Beide hängen von der Normalkraft und der Materialpaarung
    ab, kaum von der Auflagefläche. Haftreibung kann antreiben: Beim Gehen schiebt sie den Fuß nach vorn, auf einem
    anfahrenden Lkw nimmt sie die Ladung mit.
  kernpunkte: ["Haftreibung passt sich an bis μ_H·F_N", "Gleitreibung μ_G·F_N, kleiner", "abhängig von F_N, nicht von der Fläche", "Haftreibung kann in Bewegungsrichtung zeigen"]
- id: p3-k-hooke
  frage: Was besagt das Hookesche Gesetz, und wie verhalten sich zwei Federn in Reihe?
  antwort: |
    Im elastischen Bereich ist die Verlängerung einer Feder proportional zur Kraft, $F = D s$ mit der Federkonstante $D$
    in N/m. In Reihe trägt jede Feder die volle Last, die Verlängerungen addieren sich, deshalb gilt
    $1/D = 1/D_1 + 1/D_2$ und die Kette ist weicher. Die Rückstellkraft $-D s$ ist die Grundlage der harmonischen
    Schwingung im Kapitel Schwingungen.
  kernpunkte: ["F = D·s im elastischen Bereich", "Reihe: Kehrwerte addieren, weicher", "Verbindung zur Schwingung"]
- id: p3-k-fkb
  frage: Wie gehst du bei einer Dynamikaufgabe vor?
  antwort: |
    Ich schneide den Körper frei und zeichne alle Kräfte ein, die auf ihn wirken: die Gewichtskraft und an jeder
    Berührstelle die Kontaktkräfte. Eine „Bewegungskraft“ gibt es nicht. Dann lege ich eine Achse in Richtung der
    Beschleunigung und eine senkrecht dazu, zerlege schräge Kräfte, setze in Bewegungsrichtung $\sum F = m a$ und
    senkrecht dazu $\sum F = 0$ an und löse auf. Am Ende prüfe ich Einheit und Plausibilität.
  kernpunkte: ["freischneiden, alle Kräfte auf den Körper", "keine Bewegungskraft", "Achsen, zerlegen, ΣF = m·a", "Probe"]
- id: p3-k-ebene
  frage: Zerlege die Gewichtskraft auf der schiefen Ebene. Warum steht beim Hangabtrieb der Sinus?
  antwort: |
    Die Gewichtskraft zerfällt in den Hangabtrieb $F_H = m g\sin\alpha$ entlang der Ebene und den Anteil $m g\cos\alpha$
    senkrecht dazu, den die Normalkraft ausgleicht. Der Sinus passt, weil bei waagrechter Ebene kein Hangabtrieb
    auftreten darf, und $\sin 0^\circ = 0$. Ohne Reibung gleitet ein Körper mit $a = g\sin\alpha$, unabhängig von seiner Masse.
  kernpunkte: ["F_H = m·g·sin α", "F_N = m·g·cos α", "Extremfall α = 0", "a = g·sin α ohne Reibung"]
- id: p3-k-haftgrenze
  frage: Wie kann man die Haftreibungszahl mit einer schiefen Ebene messen?
  antwort: |
    Man legt den Körper auf ein Brett und kippt es langsam, bis er zu rutschen beginnt. Im Grenzfall ist der Hangabtrieb
    gleich dem Höchstwert der Haftreibung, $m g\sin\alpha = \mu_H m g\cos\alpha$. Daraus folgt $\mu_H = \tan\alpha$.
    Die Masse kürzt sich. Rutscht er bei $27^\circ$ los, ist $\mu_H = 0{,}51$.
  kernpunkte: ["Brett langsam kippen", "Hangabtrieb = maximale Haftreibung", "μ_H = tan α"]
- id: p3-k-gekoppelt
  frage: Warum darf man bei gekoppelten Körpern die Seilkraft weglassen, wenn man das Gesamtsystem betrachtet?
  antwort: |
    Die Seilkraft wirkt an beiden Körpern gleich stark, einmal in Bewegungsrichtung und einmal dagegen. Für das System
    als Ganzes ist sie eine innere Kraft und hebt sich heraus, so wie die Kräfte zwischen Pferd und Wagen. Deshalb gilt
    $a$ = äußere antreibende minus bremsende Kräfte durch Gesamtmasse. Für den Wert der Seilkraft braucht man die
    Gleichung eines einzelnen Körpers. Sie ist bei Beschleunigung nicht gleich dem Gewicht des hängenden Körpers.
  kernpunkte: ["gleiche Beschleunigung", "Seilkraft ist innere Kraft", "a aus Gesamtsystem, T aus Einzelkörper", "T ≠ m₂g"]
- id: p3-k-lift
  frage: Was zeigt eine Personenwaage im Lift an, und wann ist man schwerelos?
  antwort: |
    Die Waage zeigt die Kraft, mit der man auf sie drückt. Das ist so viel wie die Normalkraft $F_N = m(g + a)$, wobei
    $a$ die Beschleunigung nach oben ist. Beim Anfahren nach oben und beim Bremsen einer Abwärtsfahrt zeigt sie mehr,
    im umgekehrten Fall weniger. Im freien Fall ist $a = -g$ und die Anzeige null: Schwerelosigkeit. Die Gewichtskraft
    ist dabei voll vorhanden. So ist es auch in der Raumstation.
  kernpunkte: ["Waage misst Normalkraft", "F_N = m(g + a)", "Beschleunigungsrichtung zählt", "freier Fall: Anzeige null"]
- id: p3-k-scheinkraft
  frage: Was sind Scheinkräfte? Nenne Beispiele.
  antwort: |
    Scheinkräfte treten nur in beschleunigten Bezugssystemen auf. Man führt sie ein, damit dort die Newtonschen Gesetze
    wieder gelten: $\vec F_T = -m\vec a_0$. Sie haben keinen Wechselwirkungspartner, weil kein Körper sie ausübt.
    Beispiele sind der Ruck nach vorn im bremsenden Bus, die Zentrifugalkraft im Karussell (Kapitel Kreisbewegung und
    Gravitation) und die Corioliskraft auf der sich drehenden Erde.
  kernpunkte: ["nur in beschleunigten Systemen", "F_T = −m·a₀", "kein Partner", "Bus, Karussell, Coriolis"]
- id: p3-k-fallen
  frage: Warum fallen im Vakuum alle Körper gleich schnell, in Luft aber nicht?
  antwort: |
    Weil träge und schwere Masse gleich sind. Ein doppelt so schwerer Körper wird doppelt so stark angezogen, ist aber
    auch doppelt so träge. In $a = m g/m$ kürzt sich die Masse, es bleibt $g$. In Luft kommt der Luftwiderstand dazu.
    Er hängt von Form und Geschwindigkeit ab, nicht von der Masse. Für einen schweren Körper ist er im Verhältnis zur
    Gewichtskraft kleiner, deshalb fällt dort eine Bleikugel schneller als eine gleich große Holzkugel.
  kernpunkte: ["träge = schwere Masse", "Masse kürzt sich, a = g", "Luftwiderstand im Verhältnis zur Masse"]
- id: p3-k-rakete
  frage: Wie kann eine Rakete im leeren Weltraum beschleunigen?
  antwort: |
    Nach dem dritten Axiom. Die Rakete stößt Gas mit großer Geschwindigkeit nach hinten aus und übt dabei eine Kraft
    auf das Gas aus. Das Gas übt eine gleich große Gegenkraft nach vorn auf die Rakete aus. Luft zum Abstoßen braucht sie
    nicht. Weil ihre Masse dabei abnimmt, beschreibt man sie mit der Impulsform des Grundgesetzes und der Impulserhaltung
    aus dem Kapitel Arbeit, Energie, Impuls.
  kernpunkte: ["drittes Axiom: Rakete drückt Gas, Gas drückt Rakete", "keine Luft nötig", "Impulsform und Impulserhaltung"]
```

