---
nummer: 12
titel: "Elektrostatik: Ladung, Feld, Potential, Kondensator"
kurz: Elektrische Ladung, Coulomb-Gesetz, elektrisches Feld, Potential und Spannung, Kondensatoren, der Millikan-Versuch und geladene Teilchen im homogenen Feld.
teil: elektrizitaet
stunden: 11
pruefungsgewicht: 3
voraussetzungen:
  - groessen-einheiten-messen
  - kinematik
  - dynamik
  - arbeit-energie-impuls
  - kreisbewegung-gravitation
lernziele:
  - die Eigenschaften der elektrischen Ladung (zwei Vorzeichen, Quantelung, Erhaltung) nennen, Ladungen in Elementarladungen umrechnen und die Ladungsverteilung nach einer Berührung berechnen
  - Influenz, Polarisation und das Verhalten von Leitern im Feld (Faradayscher Käfig, Spitzenwirkung) mit dem Bild beweglicher Elektronen erklären
  - Kräfte zwischen Punktladungen mit dem Coulomb-Gesetz berechnen, auch als Vektorsumme mehrerer Kräfte in der Ebene
  - die elektrische Feldstärke definieren, Feldlinienbilder zeichnen und deuten und die Felder mehrerer Ladungen überlagern
  - Feldstärke, Potential und Spannung unterscheiden und im homogenen Feld mit W = q·U und U = E·d rechnen
  - Potential und potentielle Energie im Feld einer Punktladung berechnen und Bewegungen mit dem Energiesatz in Joule und Elektronvolt auswerten
  - die Kapazität von Platten- und Kugelkondensatoren berechnen und vorhersagen, was sich beim Verändern von Abstand oder Dielektrikum mit und ohne Spannungsquelle ändert
  - die Energie im Kondensator berechnen, Kondensatoren in Reihe und parallel zusammenfassen und Lade- und Entladevorgänge beschreiben
  - den Millikan-Versuch beschreiben und aus Messwerten die Elementarladung mit ihrer Unsicherheit bestimmen
  - Bahnen geladener Teilchen im homogenen Feld (Beschleunigung, Abbremsung, Ablenkung) berechnen
---

Mit diesem Kapitel beginnt die **Elektrizitätslehre**, der größte Block der Physik-1-Prüfung. Die
**Elektrostatik** (griechisch *statikos*, also: stillstehend) beschreibt **ruhende** elektrische Ladungen
und die Kräfte zwischen ihnen. Sie ist die Grundlage für alles, was folgt. Spannung und Strom
([Kapitel 13](/lernen/physik1/gleichstrom)) bauen auf ihr auf, ebenso Magnetfeld und Induktion
([Kapitel 14](/lernen/physik1/magnetismus-wechselstrom)). Auch der Aufbau der Atome
([Kapitel 16](/lernen/physik1/wellenoptik-atom-kernphysik)) gehört dazu. Was die Elektronen an den
Atomkern bindet, ist genau die elektrische Kraft aus diesem Kapitel.

**Was kommt in der Prüfung?** In der schriftlichen Prüfung sind vier Aufgabentypen typisch:

1. Kräfte zwischen Punktladungen mit dem Coulomb-Gesetz, oft mit zwei oder drei Ladungen.
2. Der **Plattenkondensator**: Kapazität, Ladung, Feldstärke, Energie und die Frage, was beim
   Auseinanderziehen der Platten oder beim Einschieben eines Isolators passiert.
3. **Elektronen im homogenen Feld**: Beschleunigung durch eine Spannung und Ablenkung wie in einer
   Bildröhre.
4. Der Energiesatz mit der Einheit Elektronvolt.

In der mündlichen Prüfung kommen gern der Millikan-Versuch, die Influenz und der Faradaysche Käfig.
Dort musst du ein Experiment beschreiben und deuten. Die größte gedankliche Hürde des Kapitels ist der
Unterschied zwischen **Feldstärke**, **Potential** und **Spannung**. Diese drei Größen bekommen deshalb
eine eigene Lektion mit vielen Vergleichen:
[Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld).
Nimm dir für sie mehr Zeit als für die anderen.

:::anwendung
Als Informatiker hast du täglich mit Elektrostatik zu tun. Jedes Bit in einem Flash-Speicher ist eine
kleine Ladungsmenge auf einer isolierten Elektrode. Jeder Touchscreen misst winzige Änderungen einer
Kapazität. Und man fasst Platinen nicht nach einem Gang über den Teppich an, weil dabei elektrostatische
Entladungen von einigen tausend Volt entstehen.
:::

:::vorwissen
Für dieses Kapitel brauchst du aus früheren Kapiteln:

- Zehnerpotenzen und Vorsilben wie Nano und Mikro ([Kapitel 1, Vorsilben und Zehnerpotenzen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen)).
- Vektoren addieren und zerlegen ([Kapitel 1, Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren) und [Mathematik, Rechnen mit Vektoren: Addition, Vielfache und Rechengesetze](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze)).
- Kraft, Gleichgewicht und das Freikörperbild ([3 Das Freikörperbild: alle Kräfte auf einen Körper](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper)).
- Arbeit, Energie und den Energieerhaltungssatz ([4 Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit) und [4 Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz)).
- Das Gravitationsgesetz ([Kapitel 6](/lernen/physik1/kreisbewegung-gravitation/das-gravitationsgesetz)). Das Coulomb-Gesetz ist fast sein Zwilling.
- Die gleichmäßig beschleunigte Bewegung und den waagrechten Wurf ([2 Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung) und [2 Waagrechter und schiefer Wurf](/lernen/physik1/kinematik/waagrechter-und-schiefer-wurf)).
:::

### Eingangsdiagnose: Bist du startklar?

Die folgenden kurzen Fragen prüfen das Vorwissen. Wenn eine Frage danebengeht, lies den verlinkten
Abschnitt noch einmal, bevor du weitermachst. Das spart später viel Zeit.

```aufgabe
id: p12-ein-zehnerpotenz
art: check
titel: Vorsilben umrechnen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Rechne $0{,}25\,\mu\text{C}$ (Mikrocoulomb) in Coulomb um. Gib die Zahl vor $10^{-7}$ an: $0{,}25\,\mu\text{C} = \;?\;\cdot 10^{-7}\,\text{C}$.

  Herkunft: [Kapitel 1, Vorsilben und Zehnerpotenzen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen)
teile:
  - typ: zahl
    label: Zahl vor 10⁻⁷
    loesung: "0.25e-6/1e-7"
    anzeige: '2{,}5'
    fehler:
      - wert: "0.25"
        meldung: |
          Du hast die Zahl einfach abgeschrieben. Die Vorsilbe Mikro bedeutet $10^{-6}$. Schreib also zuerst $0{,}25\cdot 10^{-6}$ und verschiebe dann das Komma so, dass die Hochzahl $-7$ wird.
      - wert: "0.025"
        meldung: |
          Das Komma ist in die falsche Richtung gewandert. $10^{-7}$ ist **kleiner** als $10^{-6}$. Damit der Wert gleich bleibt, muss die Zahl davor **größer** werden.
hinweise:
  - 'Mikro heißt $10^{-6}$. Aus $10^{-6}$ wird $10^{-7}$, wenn du die Zahl davor mit $10$ multiplizierst.'
loesung: |
  Mikro bedeutet $10^{-6}$, also ist $0{,}25\,\mu\text{C} = 0{,}25\cdot 10^{-6}\,\text{C}$.
  ---
  Wir schreiben $10^{-6} = 10\cdot 10^{-7}$. Dann ist $0{,}25\cdot 10\cdot 10^{-7}\,\text{C} = 2{,}5\cdot 10^{-7}\,\text{C}$.
```

```aufgabe
id: p12-ein-gravitation
art: check
titel: Abstand im Gravitationsgesetz
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Zwei Körper ziehen einander nach dem Gravitationsgesetz $F = G\,\dfrac{m_1 m_2}{r^2}$ an. Auf das Wievielfache ändert sich die Kraft, wenn man den Abstand $r$ verdoppelt?

  Herkunft: [Kapitel 6, Das Gravitationsgesetz](/lernen/physik1/kreisbewegung-gravitation/das-gravitationsgesetz)
teile:
  - typ: auswahl
    optionen:
      - 'auf das Doppelte'
      - 'auf die Hälfte'
      - 'auf ein Viertel'
      - 'sie bleibt gleich'
    richtig: [2]
    fehler:
      - wert: 1
        meldung: |
          Der Abstand steht **quadriert** im Nenner. Doppelter Abstand heißt Nenner mal $2^2 = 4$, nicht mal $2$.
      - wert: 0
        meldung: |
          Der Abstand steht im **Nenner**. Ein größerer Nenner macht den Bruch kleiner, nicht größer.
hinweise:
  - 'Setze $2r$ statt $r$ ein und vereinfache $(2r)^2$.'
loesung: |
  Mit doppeltem Abstand wird der Nenner $(2r)^2 = 4r^2$, also viermal so groß.
  ---
  Die Kraft wird damit **ein Viertel** so groß. Genau dasselbe gilt gleich für die elektrische Kraft.
```

```aufgabe
id: p12-ein-vektoren
art: check
titel: Zwei Kräfte im rechten Winkel
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  An einem Punkt greifen zwei Kräfte an: $3{,}0\,\text{N}$ nach rechts und $4{,}0\,\text{N}$ nach oben. Wie groß ist der Betrag der resultierenden Kraft in N?

  Herkunft: [Kapitel 1, Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren)
teile:
  - typ: zahl
    loesung: "sqrt(3^2+4^2)"
    einheit: "N"
    anzeige: '5{,}0'
    fehler:
      - wert: "7"
        meldung: |
          Du hast die Beträge einfach addiert. Das geht nur, wenn beide Kräfte in **dieselbe** Richtung zeigen. Bei einem rechten Winkel bilden die Kräfte die Katheten eines rechtwinkligen Dreiecks.
hinweise:
  - Zeichne die beiden Pfeile hintereinander. Sie bilden ein rechtwinkliges Dreieck. Die Resultierende ist die Hypotenuse.
loesung: |
  Die Kräfte stehen senkrecht aufeinander. Die Resultierende ist die Hypotenuse des rechtwinkligen Dreiecks.
  ---
  Mit dem Satz von Pythagoras: $F = \sqrt{(3{,}0\,\text{N})^2 + (4{,}0\,\text{N})^2} = 5{,}0\,\text{N}$.
```

```aufgabe
id: p12-ein-hubarbeit
art: check
titel: Hubarbeit
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Du hebst eine Tasche mit $2{,}0\,\text{kg}$ um $1{,}5\,\text{m}$ an. Wie viel Arbeit verrichtest du gegen die Schwerkraft ($g = 9{,}81\,\text{m/s}^2$)?

  Herkunft: [Kapitel 4, Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit)
teile:
  - typ: zahl
    loesung: "2.0*9.81*1.5"
    einheit: "J"
    anzeige: '29{,}4'
    fehler:
      - wert: "2.0*1.5"
        meldung: |
          Arbeit ist **Kraft** mal Weg. Die Kraft ist hier die Gewichtskraft $m\cdot g$, nicht die Masse allein.
hinweise:
  - 'Hubarbeit: $W = m\cdot g\cdot h$.'
loesung: |
  Gegen die Gewichtskraft $F_G = m\,g$ musst du die Arbeit $W = m\,g\,h$ verrichten.
  ---
  $W = 2{,}0\,\text{kg}\cdot 9{,}81\,\dfrac{\text{m}}{\text{s}^2}\cdot 1{,}5\,\text{m} = 29{,}4\,\text{J}$.
```

```aufgabe
id: p12-ein-energie
art: check
titel: Geschwindigkeit aus der Bewegungsenergie
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Wagen mit $4{,}0\,\text{kg}$ hat die kinetische Energie $8{,}0\,\text{J}$. Wie schnell ist er (in m/s)?

  Herkunft: [Kapitel 4, Energie](/lernen/physik1/arbeit-energie-impuls/energie)
teile:
  - typ: zahl
    loesung: "sqrt(2*8.0/4.0)"
    einheit: "m/s"
    anzeige: '2{,}0'
    fehler:
      - wert: "sqrt(8.0/4.0)"
        meldung: |
          Der Faktor $\tfrac12$ in $E_{\text{kin}} = \tfrac12 m v^2$ ist verloren gegangen. Beim Auflösen nach $v^2$ musst du mit $2$ multiplizieren.
      - wert: "2*8.0/4.0"
        meldung: |
          Das ist $v^2$, nicht $v$. Zum Schluss fehlt noch die Wurzel.
hinweise:
  - 'Löse $E_{\text{kin}} = \tfrac12 m v^2$ nach $v$ auf.'
loesung: |
  Aus $E_{\text{kin}} = \tfrac12 m v^2$ folgt durch Multiplizieren mit $2$ und Teilen durch $m$: $v^2 = \dfrac{2E_{\text{kin}}}{m}$.
  ---
  $v = \sqrt{\dfrac{2\cdot 8{,}0\,\text{J}}{4{,}0\,\text{kg}}} = \sqrt{4{,}0\,\dfrac{\text{m}^2}{\text{s}^2}} = 2{,}0\,\dfrac{\text{m}}{\text{s}}$.
```

```aufgabe
id: p12-ein-gleichgewicht
art: check
titel: Kräftegleichgewicht
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Eine Kugel mit $0{,}50\,\text{kg}$ hängt ruhig an einer Federwaage. Welche Kraft zeigt die Federwaage (in N)?

  Herkunft: [Kapitel 3, Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper)
teile:
  - typ: zahl
    loesung: "0.50*9.81"
    einheit: "N"
    anzeige: '4{,}91'
    fehler:
      - wert: "0"
        meldung: |
          Die **Summe** der Kräfte ist null, weil die Kugel ruht. Die Federkraft selbst ist aber nicht null. Sie muss die Gewichtskraft genau ausgleichen.
hinweise:
  - Die Kugel ruht. Welche zwei Kräfte müssen dann gleich groß sein?
loesung: |
  Die Kugel ruht, also ist die Summe aller Kräfte null (erstes Newtonsches Axiom). Die Federkraft nach oben gleicht die Gewichtskraft nach unten aus.
  ---
  $F = m\,g = 0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 4{,}91\,\text{N}$. Genau so ein Gleichgewicht nutzt der Millikan-Versuch.
```

```aufgabe
id: p12-ein-beschleunigt
art: check
titel: Gleichmäßig beschleunigt aus der Ruhe
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Körper startet aus der Ruhe und beschleunigt gleichmäßig mit $4{,}0\,\text{m/s}^2$. Welchen Weg legt er in $3{,}0\,\text{s}$ zurück (in m)?

  Herkunft: [Kapitel 2, Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung)
teile:
  - typ: zahl
    loesung: "0.5*4.0*3.0^2"
    einheit: "m"
    anzeige: '18'
    fehler:
      - wert: "4.0*3.0^2"
        meldung: |
          Der Faktor $\tfrac12$ fehlt. Der Weg ist $s = \tfrac12 a t^2$, weil die Geschwindigkeit erst von null aus anwächst.
      - wert: "4.0*3.0"
        meldung: |
          $a\cdot t$ ist die **Geschwindigkeit** nach $3\,\text{s}$, nicht der Weg.
hinweise:
  - 'Weg-Zeit-Gesetz aus der Ruhe: $s = \tfrac12 a t^2$.'
loesung: |
  Aus der Ruhe gilt das Weg-Zeit-Gesetz $s = \tfrac12 a t^2$.
  ---
  $s = \tfrac12\cdot 4{,}0\,\dfrac{\text{m}}{\text{s}^2}\cdot(3{,}0\,\text{s})^2 = 18\,\text{m}$.
```

## Elektrische Ladung und Elementarladung

```aufgabe
id: p12-ladung-check-kehrwert
art: check
titel: Wie viele Elementarladungen sind ein Coulomb?
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Wir werden gleich sehen, dass ein Elektron die Ladung $1{,}602\cdot 10^{-19}\,\text{C}$ trägt. Berechne vorher zum Aufwärmen $\dfrac{1}{1{,}602\cdot 10^{-19}}$. Gib die Zahl vor $10^{18}$ an.

  Rechnen mit Zehnerpotenzen: [Kapitel 1](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen) und [Mathematik, Potenzen und Wurzeln](/lernen/mathe3/zahlen/potenzen-und-wurzeln)
teile:
  - typ: zahl
    label: Zahl vor 10¹⁸
    loesung: "1/1.602e-19/1e18"
    anzeige: '6{,}24'
    fehler:
      - wert: "1/1.602e-19/1e19"
        meldung: |
          Beim Kehrwert wird aus $10^{-19}$ zwar $10^{19}$. Aber $\tfrac{1}{1{,}602} = 0{,}624$ ist kleiner als $1$. Schreib $0{,}624\cdot 10^{19}$ noch als $6{,}24\cdot 10^{18}$.
hinweise:
  - 'Trenne die Rechnung: $\tfrac{1}{1{,}602}$ und $\tfrac{1}{10^{-19}} = 10^{19}$.'
loesung: |
  $\dfrac{1}{1{,}602\cdot 10^{-19}} = \dfrac{1}{1{,}602}\cdot 10^{19} = 0{,}624\cdot 10^{19}$.
  ---
  Mit der Kommaverschiebung wird daraus $6{,}24\cdot 10^{18}$. So viele Elektronen braucht man für ein Coulomb.
```

### Zwei Sorten Ladung

Reibe einen Kunststoffstab an einem Wolltuch. Danach zieht der Stab kleine Papierschnipsel an. Zwei
so geriebene Kunststoffstäbe stoßen einander aber ab. Ein geriebener Glasstab und ein geriebener
Kunststoffstab ziehen einander dagegen an. Diese drei Beobachtungen lassen nur einen Schluss zu: Es
gibt **zwei Arten** einer neuen Eigenschaft der Materie. Wir nennen sie **elektrische Ladung**.

:::definition[Elektrische Ladung]
Die **elektrische Ladung** $Q$ ist die Eigenschaft eines Körpers, die bestimmt, wie stark er elektrische
Kräfte ausübt und erfährt. Im Alltag sagt man „der Körper ist elektrisch geladen“. Es gibt zwei Sorten,
die Benjamin Franklin willkürlich **positiv** und **negativ** nannte. Die Einheit ist das **Coulomb**
(Zeichen C).
:::

**Beispiel:** Ein an Wolle geriebener Kunststoffstab ist negativ geladen. **Nichtbeispiel:** Ein
Magnet ist nicht elektrisch geladen. Er zieht Eisen an, aber keine Papierschnipsel. Magnetische
Kräfte behandelt erst [Kapitel 14](/lernen/physik1/magnetismus-wechselstrom).

:::satz[Grundeigenschaften der Ladung]
1. Es gibt positive und negative Ladung. **Gleichnamige** Ladungen (gleiches Vorzeichen) stoßen
   einander ab. **Ungleichnamige** Ladungen (verschiedenes Vorzeichen) ziehen einander an.
2. Ladung ist **gequantelt** (lateinisch *quantum*, also: wie viel). Jede frei vorkommende Ladung ist
   ein ganzzahliges Vielfaches der **Elementarladung** $e = 1{,}602\cdot 10^{-19}\,\text{C}$. Es gilt
   also $Q = n\cdot e$ mit einer ganzen Zahl $n$.
3. Ladung bleibt **erhalten**. In einem abgeschlossenen System ist die Summe aller Ladungen konstant.
   Ladung kann getrennt und verschoben, aber nicht erzeugt oder vernichtet werden.
:::

Ein **Coulomb** ist die Ladung, die bei einem Strom von $1\,\text{A}$ in einer Sekunde durch einen Draht
fließt. Daher gilt $1\,\text{C} = 1\,\text{A}\cdot\text{s}$. Für die Elektrostatik ist ein Coulomb
riesig. Typische Ladungen auf geriebenen Stäben liegen bei einigen Nanocoulomb, also bei einigen
$10^{-9}\,\text{C}$.

```aufgabe
id: p12-quantelung
titel: Mögliche Ladungen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche der folgenden Ladungen kann ein Öltröpfchen tragen? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$4{,}806\cdot 10^{-19}\,\text{C}$'
      - '$2{,}4\cdot 10^{-19}\,\text{C}$'
      - '$-1{,}602\cdot 10^{-18}\,\text{C}$'
      - '$8{,}0\cdot 10^{-20}\,\text{C}$'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Nicht jede Ladung ist möglich. Ladung kommt nur in **ganzen** Vielfachen von $e$ vor. Teile jede Ladung durch $e = 1{,}602\cdot 10^{-19}\,\text{C}$ und prüfe, ob eine ganze Zahl herauskommt.
      - wert: [0]
        meldung: |
          Auch negative Ladungen sind erlaubt. Ein Tröpfchen mit Elektronenüberschuss trägt $-n\cdot e$. Prüfe $-1{,}602\cdot 10^{-18}\,\text{C}$ noch einmal.
      - wert: [0, 2, 3]
        meldung: |
          $8{,}0\cdot 10^{-20}\,\text{C}$ ist **kleiner** als die Elementarladung, nämlich nur eine halbe. Eine halbe Elementarladung kommt frei nicht vor.
hinweise:
  - 'Teile jeden Wert durch $e = 1{,}602\cdot 10^{-19}\,\text{C}$.'
loesung: |
  **Ansatz:** Jede freie Ladung ist ein ganzzahliges Vielfaches von $e$. Wir teilen jeden Wert durch $e$.
  ---
  $4{,}806\cdot 10^{-19}\,\text{C} : e = 3$, möglich. $-1{,}602\cdot 10^{-18}\,\text{C} : e = -10$, möglich.
  ---
  $2{,}4\cdot 10^{-19}\,\text{C} : e = 1{,}5$ und $8{,}0\cdot 10^{-20}\,\text{C} : e = 0{,}5$. Beides sind keine ganzen Zahlen, also unmöglich.
```

### Wo die Ladung sitzt

Alle Materie besteht aus Atomen. Jedes Atom hat einen winzigen **Kern** mit positiv geladenen
**Protonen** (Ladung $+e$) und ungeladenen **Neutronen**. Um den Kern liegt eine Hülle aus
**Elektronen** (Ladung $-e$). Ein Atom mit gleich vielen Protonen und Elektronen ist nach außen
**neutral**, also ungeladen. Mehr zum Atomaufbau steht in
[Kapitel 16](/lernen/physik1/wellenoptik-atom-kernphysik).

Die Protonen sitzen fest im Kern. Was beim Reiben, beim Stromfluss und beim Aufladen verschoben wird,
sind in festen Körpern fast immer **Elektronen**. Daraus folgt eine einfache Sprachregel:

- Ein Körper ist **negativ geladen**, wenn er Elektronen im **Überschuss** hat.
- Ein Körper ist **positiv geladen**, wenn ihm Elektronen **fehlen**.

Beim Reiben zweier verschiedener Stoffe gehen Elektronen vom einen Stoff auf den anderen über. Danach
sind beide gleich stark, aber entgegengesetzt geladen. Das ist die Ladungserhaltung in Aktion: Es
entsteht keine neue Ladung, sie wird nur getrennt.

:::beispiel[Wie viele Elektronen fehlen?]
Eine Metallkugel trägt nach dem Aufladen $Q = +8{,}0\,\text{nC}$. Wie viele Elektronen fehlen ihr?

**Ansatz:** Jedes fehlende Elektron hinterlässt die Ladung $+e$. Bei $N$ fehlenden Elektronen ist
$Q = N\cdot e$, also $N = Q/e$.

**Rechnung:** Nano heißt $10^{-9}$. Damit ist
$N = \dfrac{8{,}0\cdot 10^{-9}\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 5{,}0\cdot 10^{10}$.
Die Einheit Coulomb kürzt sich weg, $N$ ist eine reine Anzahl.

**Einordnung:** Fünfzig Milliarden Elektronen klingt nach viel. Eine Metallkugel von wenigen Gramm enthält
aber rund $10^{24}$ Elektronen. Nur etwa jedes zwanzigbillionste fehlt.
:::

:::achtung[„Positiv geladen“ heißt nicht „Protonen dazubekommen“]
**Falsche Rechnung:** „Die Kugel trägt $+8{,}0\,\text{nC}$, also wurden ihr $5{,}0\cdot 10^{10}$ Protonen
hinzugefügt.“

**Richtig:** Protonen sitzen fest in den Atomkernen und wandern in festen Körpern nicht. Der Kugel
wurden $5{,}0\cdot 10^{10}$ **Elektronen weggenommen**. Die Zahl stimmt, die Deutung nicht.
:::

```aufgabe
id: p12-ladung-elektronen
titel: Wie viele Elektronen zu viel?
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Kunststoffstab trägt nach dem Reiben die Ladung $Q = -3{,}2\,\text{nC}$. Wie viele überschüssige Elektronen sitzen auf dem Stab? Gib das Ergebnis in Vielfachen von $10^{10}$ an.
teile:
  - typ: zahl
    label: Anzahl in 10¹⁰
    loesung: "3.2e-9/1.602e-19/1e10"
    anzeige: '2{,}0'
    fehler:
      - wert: "3.2/1.602e-19/1e10"
        meldung: |
          Die Vorsilbe Nano ist verloren gegangen. $3{,}2\,\text{nC}$ sind $3{,}2\cdot 10^{-9}\,\text{C}$, nicht $3{,}2\,\text{C}$. Rechne zuerst in Coulomb um.
      - wert: "3.2e-9*1.602e-19/1e10"
        meldung: |
          Du hast mit $e$ multipliziert. Gesucht ist, **wie oft** $e$ in $Q$ hineinpasst. Das ist eine Division: $N = |Q|/e$.
hinweise:
  - 'Jedes Elektron trägt die Ladung $-e$. Wie oft passt $e$ in $3{,}2\,\text{nC}$?'
loesung: |
  **Ansatz:** Ladung ist gequantelt. Bei $N$ überschüssigen Elektronen ist $|Q| = N\cdot e$, also $N = |Q|/e$.
  ---
  **Rechnung:** $N = \dfrac{3{,}2\cdot 10^{-9}\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 2{,}0\cdot 10^{10}$. Die Einheit C kürzt sich, $N$ ist eine Anzahl.
  ---
  **Antwort:** Auf dem Stab sitzen $2{,}0\cdot 10^{10}$ überschüssige Elektronen. Das Minuszeichen von $Q$ sagt uns, dass es ein Überschuss und kein Mangel ist.
```

### Leiter und Isolatoren

In **Leitern** gibt es Ladungsträger, die sich frei bewegen können. Beispiele sind Metalle, Graphit und
Salzlösungen. In Metallen sind es die **Leitungselektronen**: Etwa ein Elektron pro Atom löst sich und
wandert frei durch das Metall. In **Isolatoren** (Nichtleitern) sind die Elektronen an ihre Atome
gebunden. Beispiele sind Kunststoff, Glas, trockenes Holz und Luft.

Daraus folgt ein wichtiger Unterschied. Auf einem Leiter verteilt sich aufgebrachte Ladung sofort über
die ganze Oberfläche. Auf einem Isolator bleibt sie dort, wo man sie aufgebracht hat. Deshalb lässt
sich ein Kunststoffstab durch Reiben aufladen. Ein Metallstab in der Hand lässt sich so nicht
aufladen: Die Ladung fließt sofort über deinen Körper zur Erde ab.

**Erden** heißt, einen Leiter leitend mit der Erde zu verbinden. Die Erde ist ein so großer Leiter,
dass sie beliebig viel Ladung aufnehmen oder abgeben kann. Ihre eigene Ladung ändert sich dabei kaum
merklich.

### Ladung nachweisen und verteilen

Das **Elektroskop** weist Ladung nach. Es besteht aus einem Metallstab mit einem leichten, drehbaren
Zeiger. Bringt man Ladung auf den Stab, verteilt sie sich auf Stab und Zeiger. Beide sind dann
gleichnamig geladen und stoßen einander ab, der Zeiger schlägt aus. Je größer die Ladung, desto größer
der Ausschlag. Das Vorzeichen der Ladung zeigt das Elektroskop aber **nicht** an.

```plot
x: [-2, 2]
y: [-0.5, 3.6]
gleich: true
strecken:
  - { von: [0, 0], nach: [0, 3], farbe: 0 }
  - { von: [-0.4, 3], nach: [0.4, 3], farbe: 0 }
  - { von: [-0.45, 0.85], nach: [0.45, 2.15], farbe: 1 }
  - { von: [-1.5, 0], nach: [1.5, 0], farbe: 4 }
  - { von: [-1.5, 0], nach: [-1.5, 3.3], farbe: 4, gestrichelt: true }
  - { von: [1.5, 0], nach: [1.5, 3.3], farbe: 4, gestrichelt: true }
punkte:
  - { x: 0, y: 1.5, label: "Drehachse", farbe: 0 }
  - { x: 0.25, y: 2.6, label: "−", farbe: 0 }
  - { x: 0.25, y: 0.5, label: "−", farbe: 0 }
  - { x: 0.6, y: 2.1, label: "−", farbe: 1 }
  - { x: -0.6, y: 0.9, label: "−", farbe: 1 }
  - { x: 0, y: 3, label: "Teller", farbe: 0 }
beschriftung: "Skizze eines Zeigerelektroskops. Ein senkrechter Metallstab (blau) trägt oben einen Teller und in der Mitte einen drehbaren Zeiger (orange). Bringt man Ladung auf den Teller, verteilt sie sich auf Stab und Zeiger. Beide sind gleichnamig geladen, der Zeiger wird abgestoßen und dreht sich schräg. Das Gehäuse (gestrichelt) schützt vor Luftzug."
```

Berühren einander zwei **gleich große** Metallkugeln, fließen Elektronen, bis beide gleich geladen
sind. Wegen der Ladungserhaltung teilen sie sich dann die **Gesamtladung** je zur Hälfte.

:::beispiel[Zwei Kugeln berühren einander]
Kugel A trägt $+9{,}0\,\text{nC}$, die gleich große Kugel B trägt $-3{,}0\,\text{nC}$. Man bringt sie in
Berührung und trennt sie wieder.

**Schritt 1, Gesamtladung:** Wir addieren mit Vorzeichen:
$Q_{\text{ges}} = +9{,}0\,\text{nC} + (-3{,}0\,\text{nC}) = +6{,}0\,\text{nC}$.

**Schritt 2, Verteilen:** Gleich große Kugeln teilen sich die Gesamtladung je zur Hälfte. Jede Kugel
trägt danach $+3{,}0\,\text{nC}$.

**Schritt 3, Was ist geflossen?** Kugel B ging von $-3{,}0\,\text{nC}$ auf $+3{,}0\,\text{nC}$. Sie hat
also $6{,}0\,\text{nC}$ negative Ladung abgegeben. Das sind
$N = 6{,}0\cdot 10^{-9}\,\text{C} / 1{,}602\cdot 10^{-19}\,\text{C} = 3{,}7\cdot 10^{10}$ Elektronen, die von
B nach A geflossen sind.

**Probe:** $3{,}0\,\text{nC} + 3{,}0\,\text{nC} = 6{,}0\,\text{nC}$. Die Gesamtladung stimmt.
:::

:::achtung[Beim Berühren die Gesamtladung verteilen, nicht jede Ladung einzeln]
**Falsche Rechnung:** „A hat $+9{,}0\,\text{nC}$, B hat $-3{,}0\,\text{nC}$. Jede gibt die Hälfte ab, also
hat A danach $+4{,}5\,\text{nC}$ und B $-1{,}5\,\text{nC}$.“

**Warum falsch:** Dann wären die Kugeln verschieden geladen, und es würden weiter Elektronen fließen.
Im Gleichgewicht sind gleich große Kugeln **gleich** geladen. Richtig ist: erst mit Vorzeichen addieren
($+6{,}0\,\text{nC}$), dann halbieren ($+3{,}0\,\text{nC}$ je Kugel).
:::

:::merke[Rezept: Ladung zählen und verteilen]
1. **Anzahl der Elementarladungen:** $N = |Q|/e$. Vorher die Vorsilbe in eine Zehnerpotenz umrechnen.
2. **Vorzeichen deuten:** Negativ heißt Elektronenüberschuss, positiv heißt Elektronenmangel.
3. **Berührung gleich großer Leiter:** Gesamtladung mit Vorzeichen addieren, dann gleichmäßig aufteilen.
4. **Probe:** Die Gesamtladung vorher und nachher muss gleich sein.
:::

```reflexion
frage: Warum kann man einen Metallstab, den man in der Hand hält, durch Reiben nicht aufladen, einen Kunststoffstab aber schon? Erkläre es mit dem Begriff „frei bewegliche Elektronen“.
antwort: |
  Im Metall gibt es frei bewegliche Leitungselektronen. Die Ladung, die beim Reiben entsteht, verteilt sich sofort über das ganze Metall. Weil die Hand und der Körper ebenfalls leiten, fließt sie weiter bis zur Erde ab. Im Kunststoff sind die Elektronen an ihre Atome gebunden. Die Ladung bleibt dort sitzen, wo gerieben wurde. Hält man den Metallstab an einem isolierenden Griff, lässt er sich ebenfalls aufladen.
```

```aufgabe
id: p12-elektroskop
titel: Was zeigt das Elektroskop?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein ungeladenes Elektroskop wird einmal mit einem negativ geladenen Stab und einmal mit einem positiv geladenen Stab berührt. Beide Stäbe tragen gleich viel Ladung. Was beobachtest du?
teile:
  - typ: auswahl
    optionen:
      - 'Beide Male schlägt der Zeiger gleich weit aus.'
      - 'Nur bei negativer Ladung schlägt der Zeiger aus, denn nur Elektronen können wandern.'
      - 'Bei positiver Ladung schlägt der Zeiger in die andere Richtung aus.'
      - 'Bei positiver Ladung zieht der Zeiger sich an den Stab heran.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Es stimmt, dass nur Elektronen wandern. Bei Berührung mit dem positiven Stab **verlassen** aber Elektronen das Elektroskop. Dann fehlen sie in Stab und Zeiger, beide werden positiv und stoßen einander ab.
      - wert: 2
        meldung: |
          Zeiger und Stab des Elektroskops sind immer **gleichnamig** geladen und stoßen einander ab. Die Abstoßung hat keine Richtung, die vom Vorzeichen abhängt. Deshalb verrät das Elektroskop das Vorzeichen nicht.
      - wert: 3
        meldung: |
          Zeiger und Stab des Elektroskops tragen dieselbe Ladungssorte. Gleichnamige Ladungen stoßen einander ab, egal ob beide positiv oder beide negativ sind.
hinweise:
  - Welche Ladung tragen Zeiger und Metallstab des Elektroskops jeweils nach der Berührung? Sind sie gleichnamig oder ungleichnamig?
loesung: |
  **Ansatz:** Nach der Berührung verteilt sich Ladung auf Metallstab und Zeiger des Elektroskops. Beide tragen dann dieselbe Ladungssorte.
  ---
  Beim negativen Stab fließen Elektronen auf das Elektroskop. Beim positiven Stab fließen Elektronen vom Elektroskop weg. In beiden Fällen sind Stab und Zeiger gleichnamig geladen und stoßen einander ab.
  ---
  Gleiche Ladungsmenge heißt gleich starke Abstoßung, also **gleicher Ausschlag**. Das Elektroskop misst die Ladungsmenge, aber nicht ihr Vorzeichen.
```

```aufgabe
id: p12-erhaltung
titel: Zwei Kugeln berühren einander
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Zwei gleich große Metallkugeln tragen die Ladungen $Q_1 = +6{,}0\,\text{nC}$ und $Q_2 = -2{,}0\,\text{nC}$. Man bringt sie kurz in Berührung und trennt sie wieder. Welche Ladung trägt danach jede Kugel (in nC, mit Vorzeichen)?
teile:
  - typ: zahl
    loesung: "(6.0-2.0)/2"
    einheit: "nC"
    anzeige: '2{,}0'
    fehler:
      - wert: "(6.0+2.0)/2"
        meldung: |
          Du hast die Beträge addiert und das Vorzeichen von $Q_2$ übersehen. Eine negative Ladung **verringert** die Gesamtladung: $+6{,}0 + (-2{,}0) = +4{,}0$.
      - wert: "6.0/2"
        meldung: |
          Es teilt sich nicht nur die positive Ladung auf. Die negative Ladung der zweiten Kugel gehört zur Gesamtladung dazu.
hinweise:
  - Die Gesamtladung bleibt erhalten. Addiere zuerst beide Ladungen **mit** Vorzeichen.
  - Gleich große Kugeln teilen sich die Gesamtladung je zur Hälfte.
loesung: |
  **Ansatz:** Ladungserhaltung. Die Gesamtladung vorher ist auch nachher vorhanden.
  ---
  **Gesamtladung:** $Q = +6{,}0\,\text{nC} + (-2{,}0\,\text{nC}) = +4{,}0\,\text{nC}$.
  ---
  **Verteilen:** Bei gleich großen Kugeln fließen Elektronen, bis beide gleich geladen sind: je $+2{,}0\,\text{nC}$.
  ---
  **Probe:** $2{,}0\,\text{nC} + 2{,}0\,\text{nC} = 4{,}0\,\text{nC}$. Dabei sind Elektronen von der negativen zur positiven Kugel geflossen.
```

```aufgabe
id: p12-ladung-strom
titel: Elektronen in einem Stromstoß
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Durch einen Draht fließt $3{,}0\,\text{s}$ lang ein Strom von $0{,}20\,\text{A}$. Wie viele Elektronen passieren dabei einen Querschnitt des Drahtes? Gib das Ergebnis in Vielfachen von $10^{18}$ an. (Es gilt $Q = I\cdot t$, denn $1\,\text{C} = 1\,\text{A}\cdot\text{s}$.)
teile:
  - typ: zahl
    label: Anzahl in 10¹⁸
    loesung: "0.20*3.0/1.602e-19/1e18"
    anzeige: '3{,}75'
    fehler:
      - wert: "0.20/3.0/1.602e-19/1e18"
        meldung: |
          Du hast den Strom durch die Zeit geteilt. Ladung ist Strom **mal** Zeit: Je länger der Strom fließt, desto mehr Ladung kommt durch.
      - wert: "0.20*3.0*1.602e-19/1e18"
        meldung: |
          Du hast die Ladung mit $e$ multipliziert. Gesucht ist, wie oft $e$ in die Ladung hineinpasst. Teile durch $e$.
hinweise:
  - 'Berechne zuerst die geflossene Ladung $Q = I\cdot t$ in Coulomb.'
  - 'Dann gilt wie immer $N = Q/e$.'
loesung: |
  **Ansatz:** Ein Strom von $1\,\text{A}$ transportiert jede Sekunde $1\,\text{C}$. Die Ladung ist deshalb $Q = I\cdot t$.
  ---
  **Ladung:** $Q = 0{,}20\,\text{A}\cdot 3{,}0\,\text{s} = 0{,}60\,\text{A}\cdot\text{s} = 0{,}60\,\text{C}$.
  ---
  **Anzahl:** $N = \dfrac{0{,}60\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 3{,}75\cdot 10^{18}$ Elektronen. In der Elektrostatik sind die Ladungen viel kleiner, dort geht es meist um Nanocoulomb.
```

```aufgabe
id: p12-fermi-ballon
titel: Wie unausgeglichen ist ein geriebener Luftballon?
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein an den Haaren geriebener Luftballon aus $3\,\text{g}$ Gummi trägt grob $100\,\text{nC}$ Ladung. Ein Gramm Materie enthält ungefähr $3\cdot 10^{23}$ Elektronen. Welcher Anteil aller Elektronen des Ballons ist überschüssig? Gib den Anteil in Vielfachen von $10^{-12}$ an.
teile:
  - typ: zahl
    label: Anteil in 10⁻¹²
    loesung: "(100e-9/1.602e-19)/(3*3e23)/1e-12"
    anzeige: '0{,}69'
    fehler:
      - wert: "(100e-9/1.602e-19)/(3e23)/1e-12"
        meldung: |
          Du hast mit den Elektronen von nur **einem** Gramm verglichen. Der Ballon wiegt $3\,\text{g}$, er hat also dreimal so viele Elektronen.
      - wert: "(100/1.602e-19)/(3*3e23)/1e-12"
        meldung: |
          Die Vorsilbe Nano fehlt. $100\,\text{nC}$ sind $100\cdot 10^{-9}\,\text{C} = 10^{-7}\,\text{C}$.
hinweise:
  - 'Zähle zuerst die überschüssigen Elektronen: $N = Q/e$.'
  - 'Zähle dann alle Elektronen des Ballons: $3\,\text{g}\cdot 3\cdot 10^{23}\,\text{pro g}$. Der Anteil ist der Quotient.'
loesung: |
  **Ansatz:** Anteil $=$ überschüssige Elektronen geteilt durch alle Elektronen. Beide Zahlen schätzen wir getrennt.
  ---
  **Überschuss:** $N = \dfrac{100\cdot 10^{-9}\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 6{,}2\cdot 10^{11}$ Elektronen.
  ---
  **Alle Elektronen:** $3\,\text{g}\cdot 3\cdot 10^{23}\,\tfrac{1}{\text{g}} = 9\cdot 10^{23}$.
  ---
  **Anteil:** $\dfrac{6{,}2\cdot 10^{11}}{9\cdot 10^{23}} = 6{,}9\cdot 10^{-13} = 0{,}69\cdot 10^{-12}$. Weniger als ein Elektron pro Billion ist „zu viel“, und trotzdem hebt der Ballon Papier hoch. Elektrische Kräfte sind also sehr stark.
```

```aufgabe
id: p12-ladung-ungleich
titel: Drei Kugeln nacheinander berühren
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Drei gleich große Metallkugeln auf Isolierfüßen tragen die Ladungen $Q_A = +12\,\text{nC}$, $Q_B = 0$ und $Q_C = -3{,}0\,\text{nC}$. Zuerst berührt man A mit B und trennt sie. Danach berührt man B mit C und trennt sie.

  a) Welche Ladung trägt C am Ende (in nC, mit Vorzeichen)?

  b) Wie viele Elektronen sind bei der zweiten Berührung von C nach B geflossen? Gib das Ergebnis in Vielfachen von $10^{10}$ an.
teile:
  - typ: zahl
    label: a) Q_C in nC
    loesung: "(12/2 + (-3.0))/2"
    einheit: "nC"
    anzeige: '1{,}5'
    fehler:
      - wert: "(12 + 0 - 3.0)/3"
        meldung: |
          Du hast alle drei Ladungen gleichmäßig auf drei Kugeln verteilt. Das würde nur stimmen, wenn alle drei **gleichzeitig** einander berühren. Hier geschieht es nacheinander, und A ist bei der zweiten Berührung nicht mehr dabei.
      - wert: "(12 - 3.0)/2"
        meldung: |
          Bei der zweiten Berührung trägt B nicht mehr $0$ und auch nicht $12\,\text{nC}$. Nach der ersten Berührung hat B nur die Hälfte von A bekommen.
  - typ: zahl
    label: b) Anzahl in 10¹⁰
    loesung: "(1.5-(-3.0))*1e-9/1.602e-19/1e10"
    anzeige: '2{,}81'
    fehler:
      - wert: "1.5e-9/1.602e-19/1e10"
        meldung: |
          Es zählt die **Änderung** der Ladung von C, nicht der Endwert. C ging von $-3{,}0\,\text{nC}$ auf $+1{,}5\,\text{nC}$. Wie groß ist dieser Sprung?
hinweise:
  - Arbeite die Berührungen der Reihe nach ab. Nach jeder Berührung tragen die beiden beteiligten Kugeln die Hälfte ihrer gemeinsamen Ladung.
  - 'Für b): Die Ladung von C ändert sich von $-3{,}0\,\text{nC}$ auf den Endwert aus a). Teile die Änderung durch $e$.'
gefuehrt:
  - text: Erste Berührung. Wie viel Ladung trägt B danach (in nC)?
    teil:
      typ: zahl
      loesung: "12/2"
      einheit: "nC"
      fehler:
        - wert: "12"
          meldung: |
            A gibt nicht alles ab. Gleich große Kugeln teilen sich die gemeinsame Ladung je zur Hälfte.
    erklaerung: A und B haben zusammen $+12\,\text{nC}$. Gleich große Kugeln teilen sich das, also trägt jede $+6{,}0\,\text{nC}$.
  - text: Zweite Berührung. Wie groß ist die gemeinsame Ladung von B und C (in nC)?
    teil:
      typ: zahl
      loesung: "6 + (-3.0)"
      einheit: "nC"
    erklaerung: 'Mit Vorzeichen addiert: $+6{,}0\,\text{nC} + (-3{,}0\,\text{nC}) = +3{,}0\,\text{nC}$.'
  - text: Wie viel Ladung trägt C nach der Trennung (in nC)?
    teil:
      typ: zahl
      loesung: "3.0/2"
      einheit: "nC"
    erklaerung: Die gemeinsame Ladung $+3{,}0\,\text{nC}$ teilt sich je zur Hälfte, also $+1{,}5\,\text{nC}$ für C.
  - text: Überlege, in welche Richtung die Elektronen bei der zweiten Berührung geflossen sind.
    erklaerung: C war negativ und ist jetzt positiv. C hat also Elektronen **abgegeben**, und zwar an B. Die Änderung ist $1{,}5 - (-3{,}0) = 4{,}5\,\text{nC}$.
loesung: |
  **Ansatz:** Ladungserhaltung bei jeder einzelnen Berührung. Gleich große Kugeln teilen sich die gemeinsame Ladung je zur Hälfte.
  ---
  **Erste Berührung (A mit B):** gemeinsam $+12\,\text{nC} + 0 = +12\,\text{nC}$, danach je $+6{,}0\,\text{nC}$.
  ---
  **Zweite Berührung (B mit C):** gemeinsam $+6{,}0\,\text{nC} + (-3{,}0\,\text{nC}) = +3{,}0\,\text{nC}$, danach je $+1{,}5\,\text{nC}$. Also trägt C am Ende $+1{,}5\,\text{nC}$.
  ---
  **Elektronen:** C änderte sich um $+1{,}5\,\text{nC} - (-3{,}0\,\text{nC}) = 4{,}5\,\text{nC}$. Das sind $N = 4{,}5\cdot 10^{-9}\,\text{C}/1{,}602\cdot 10^{-19}\,\text{C} = 2{,}81\cdot 10^{10}$ Elektronen von C nach B.
  ---
  **Probe:** Am Ende tragen A, B und C zusammen $6{,}0 + 1{,}5 + 1{,}5 = 9{,}0\,\text{nC}$. Vorher waren es $12 + 0 - 3{,}0 = 9{,}0\,\text{nC}$. Die Ladung ist erhalten geblieben.
```

```aufgabe
id: p12-metallstab-begruenden
titel: Aufladen mit Isoliergriff
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Ein Metallrohr wird einmal direkt in der Hand gehalten und einmal an einem Kunststoffgriff. Beide Male reibt man es mit einem Fell. Nur im zweiten Fall zeigt ein Elektroskop danach Ladung an. Erkläre den Unterschied in zwei bis drei Sätzen.
teile:
  - typ: text
    muster: |
      Metall ist ein Leiter, seine Leitungselektronen sind frei beweglich. Beim Reiben entsteht Ladung, die sich sofort über das ganze Rohr verteilt. Hält man das Rohr direkt in der Hand, fließt sie über den leitenden Körper zur Erde ab. Der Kunststoffgriff ist ein Isolator und unterbricht diesen Weg, deshalb bleibt die Ladung auf dem Rohr.
hinweise:
  - Ist der menschliche Körper ein Leiter oder ein Isolator?
  - Welche Rolle spielt der Kunststoffgriff für den Weg der Ladung zur Erde?
loesung: |
  **Ansatz:** Wir verfolgen den Weg der Ladung. Entscheidend ist, ob es einen leitenden Weg zur Erde gibt.
  ---
  **Ohne Griff:** Metall, Hand und Körper leiten. Die Ladung fließt sofort zur Erde ab. Das Rohr bleibt neutral.
  ---
  **Mit Griff:** Kunststoff isoliert. Die Ladung kann das Rohr nicht verlassen und verteilt sich auf seiner Oberfläche. Das Elektroskop zeigt sie an.
```

## Influenz, Polarisation und Leiter im Feld

```aufgabe
id: p12-influenz-check-kraefte
art: check
titel: Zwei entgegengesetzte Kräfte
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Auf einen Körper wirken zwei Kräfte entlang derselben Linie: $5{,}0\,\text{N}$ nach links und $3{,}0\,\text{N}$ nach rechts. Wie groß ist die resultierende Kraft, und wohin zeigt sie?

  Herkunft: [Kapitel 1, Skalare und Vektoren](/lernen/physik1/groessen-einheiten-messen/skalare-und-vektoren)
teile:
  - typ: auswahl
    optionen:
      - '$2{,}0\,\text{N}$ nach links'
      - '$8{,}0\,\text{N}$ nach links'
      - '$2{,}0\,\text{N}$ nach rechts'
      - '$0$, weil beide Kräfte einander aufheben'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Entgegengesetzte Kräfte werden **subtrahiert**. Nur gleich gerichtete Kräfte addiert man einfach.
      - wert: 3
        meldung: |
          Entgegengesetzte Kräfte heben einander nur auf, wenn sie **gleich groß** sind. Hier ist eine größer.
hinweise:
  - Entgegengesetzte Kräfte ziehen gegeneinander. Die größere gewinnt um die Differenz.
loesung: |
  Die Kräfte sind entgegengesetzt, also subtrahieren wir die Beträge: $5{,}0\,\text{N} - 3{,}0\,\text{N} = 2{,}0\,\text{N}$.
  ---
  Die größere Kraft zeigt nach links, also zeigt auch die Resultierende nach links. Genau dieses Gegeneinander erklärt gleich, warum neutrale Körper angezogen werden.
```

### Influenz in Leitern

Nähere einer **ungeladenen** Metallkugel einen negativ geladenen Stab, ohne sie zu berühren. In der
Kugel gibt es frei bewegliche Elektronen. Der negative Stab stößt sie ab. Sie wandern auf die vom Stab
**abgewandte** Seite der Kugel. Auf der zugewandten Seite fehlen sie jetzt, dort wird die Kugel
positiv. Die Kugel bleibt insgesamt neutral, aber ihre Ladung ist **getrennt**.

:::definition[Influenz]
**Influenz** (lateinisch *influere*, also: hineinfließen) ist die Verschiebung frei beweglicher Ladungen
in einem **Leiter** durch eine Ladung in der Nähe. Die Gesamtladung des Leiters ändert sich dabei nicht.
:::

**Beispiel:** Die Metallkugel neben dem geladenen Stab wird auf einer Seite positiv und auf der anderen
negativ. **Nichtbeispiel:** Eine Glaskugel neben demselben Stab zeigt **keine** Influenz. In Glas
können die Elektronen nicht quer durch den Körper wandern. Was dort passiert, heißt Polarisation.
Sie folgt in dieser Lektion unter „Polarisation in Isolatoren“.

```plot
x: [-4, 2.2]
y: [-1.6, 1.6]
gleich: true
achsen: { x: "x", y: "y" }
kurven:
  - { x: "cos(t)", y: "sin(t)", t: [0, "2*pi"], farbe: 0, label: "Metallkugel" }
strecken:
  - { von: [-3.6, 0], nach: [-1.8, 0], farbe: 2 }
punkte:
  - { x: -3.2, y: 0, label: "−", farbe: 2 }
  - { x: -2.7, y: 0, label: "−", farbe: 2 }
  - { x: -2.2, y: 0, label: "−", farbe: 2 }
  - { x: -0.85, y: 0.5, label: "+", farbe: 1 }
  - { x: -1.0, y: 0, label: "+", farbe: 1 }
  - { x: -0.85, y: -0.5, label: "+", farbe: 1 }
  - { x: 0.85, y: 0.5, label: "−", farbe: 0 }
  - { x: 1.0, y: 0, label: "−", farbe: 0 }
  - { x: 0.85, y: -0.5, label: "−", farbe: 0 }
beschriftung: "Influenz: Links ein negativ geladener Stab. Er stößt die beweglichen Elektronen der neutralen Metallkugel auf die abgewandte rechte Seite. Die zugewandte linke Seite wird positiv, weil dort Elektronen fehlen. Insgesamt bleibt die Kugel neutral."
```

```aufgabe
id: p12-influenz-auswahl
titel: Influenz verstehen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Man nähert einer neutralen, isoliert aufgestellten Metallkugel einen **positiv** geladenen Stab, ohne sie zu berühren. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Die dem Stab zugewandte Seite der Kugel wird negativ.'
      - 'Die Kugel ist insgesamt positiv geladen.'
      - 'Die Kugel wird vom Stab angezogen.'
      - 'Protonen wandern auf die abgewandte Seite.'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          Bei Influenz kommt keine Ladung hinzu und keine geht weg. Die Kugel ist nur **getrennt** geladen, insgesamt bleibt sie neutral.
      - wert: [0, 2, 3]
        meldung: |
          In Metallen wandern nur Elektronen. Die abgewandte Seite wird positiv, weil dort Elektronen **fehlen**, nicht weil Protonen kommen.
      - wert: [0]
        meldung: |
          Die getrennten Ladungen haben verschiedene Abstände zum Stab. Welche Kraft ist dann stärker, die auf die nahe oder die auf die ferne Ladung?
hinweise:
  - Wohin bewegen sich die Elektronen der Kugel, wenn ein positiver Stab in der Nähe ist?
loesung: |
  **Ansatz:** In der Metallkugel sind nur die Elektronen beweglich. Der positive Stab zieht sie an.
  ---
  Die Elektronen sammeln sich auf der zugewandten Seite, sie wird negativ. Die abgewandte Seite wird positiv, weil dort Elektronen fehlen. Insgesamt bleibt die Kugel neutral.
  ---
  Die negative Seite ist näher am Stab. Ihre Anziehung überwiegt die Abstoßung der fernen positiven Seite, also wird die Kugel **angezogen**.
```

### Warum neutrale Körper angezogen werden

Nach der Influenz liegt die **ungleichnamige** Ladung näher am Stab als die **gleichnamige**. Die
elektrische Kraft nimmt mit dem Abstand ab, ähnlich wie die Gravitation. Die nahe Anziehung ist also
stärker als die ferne Abstoßung. Insgesamt bleibt eine Anziehung übrig.

:::beispiel[Anziehung trotz neutraler Kugel]
Ein Stab trägt $10\,\text{nC}$. In der nahen Kugel sind durch Influenz je $2{,}0\,\text{nC}$ getrennt. Die
ungleichnamige Ladung sitzt $5{,}0\,\text{cm}$ vom Stab entfernt, die gleichnamige $7{,}0\,\text{cm}$. Wir
nutzen schon das Coulomb-Gesetz $F = k\,Q_1Q_2/r^2$ mit $k = 8{,}99\cdot 10^9\,\text{N}\,\text{m}^2/\text{C}^2$.
Es wird in der Lektion [Das Coulomb-Gesetz](/lernen/physik1/elektrostatik/das-coulomb-gesetz-die-kraft-zwischen-zwei-ladungen) genau erklärt.

**Anziehung (nah):** $F_1 = 8{,}99\cdot 10^9\cdot\dfrac{10\cdot 10^{-9}\cdot 2{,}0\cdot 10^{-9}}{(0{,}050)^2}\,\text{N} = 7{,}2\cdot 10^{-5}\,\text{N}$.

**Abstoßung (fern):** $F_2 = 8{,}99\cdot 10^9\cdot\dfrac{10\cdot 10^{-9}\cdot 2{,}0\cdot 10^{-9}}{(0{,}070)^2}\,\text{N} = 3{,}7\cdot 10^{-5}\,\text{N}$.

**Ergebnis:** Die Kräfte zeigen in entgegengesetzte Richtungen. Es bleibt
$7{,}2\cdot 10^{-5}\,\text{N} - 3{,}7\cdot 10^{-5}\,\text{N} = 3{,}5\cdot 10^{-5}\,\text{N}$ Anziehung übrig.
Das ist ungefähr das Gewicht eines Papierschnipsels von $3{,}6\,\text{mg}$.
:::

```aufgabe
id: p12-papierschnipsel
titel: Kraft auf einen neutralen Schnipsel
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein geladener Stab trägt $6{,}0\,\text{nC}$. In einem nahen Aluminiumschnipsel trennt er durch Influenz je $1{,}5\,\text{nC}$. Die ungleichnamige Ladung sitzt $4{,}0\,\text{cm}$ vom Stab entfernt, die gleichnamige $5{,}0\,\text{cm}$. Berechne die resultierende Kraft auf den Schnipsel in µN ($k = 8{,}99\cdot 10^9\,\text{N}\,\text{m}^2/\text{C}^2$).
teile:
  - typ: zahl
    label: F in µN
    loesung: "1/(4*pi*8.854e-12)*6.0e-9*1.5e-9*(1/0.040^2 - 1/0.050^2)*1e6"
    einheit: "µN"
    anzeige: '18{,}2'
    fehler:
      - wert: "1/(4*pi*8.854e-12)*6.0e-9*1.5e-9*(1/0.040^2 + 1/0.050^2)*1e6"
        meldung: |
          Die beiden Kräfte zeigen in **entgegengesetzte** Richtungen: Die nahe Ladung wird angezogen, die ferne abgestoßen. Ziehe die kleinere Kraft von der größeren ab.
      - wert: "0"
        meldung: |
          Der Schnipsel ist zwar insgesamt neutral. Die beiden Teilladungen sind aber verschieden weit vom Stab entfernt. Deshalb sind die beiden Kräfte nicht gleich groß.
hinweise:
  - Berechne die Anziehung der nahen und die Abstoßung der fernen Ladung getrennt mit $F = k\,Q_1Q_2/r^2$.
  - Die beiden Kräfte sind entgegengesetzt. Die Resultierende ist ihre Differenz.
gefuehrt:
  - text: Wie groß ist die Anziehung zwischen Stab und naher, ungleichnamiger Ladung (in µN)?
    teil:
      typ: zahl
      loesung: "1/(4*pi*8.854e-12)*6.0e-9*1.5e-9/0.040^2*1e6"
      einheit: "µN"
      fehler:
        - wert: "1/(4*pi*8.854e-12)*6.0e-9*1.5e-9/0.040*1e6"
          meldung: Der Abstand steht im Coulomb-Gesetz **quadriert** im Nenner.
    erklaerung: '$F_1 = 8{,}99\cdot 10^9\cdot\dfrac{6{,}0\cdot 10^{-9}\cdot 1{,}5\cdot 10^{-9}}{(0{,}040)^2}\,\text{N} = 5{,}06\cdot 10^{-5}\,\text{N} = 50{,}6\,\mu\text{N}$.'
  - text: Wie groß ist die Abstoßung zwischen Stab und ferner, gleichnamiger Ladung (in µN)?
    teil:
      typ: zahl
      loesung: "1/(4*pi*8.854e-12)*6.0e-9*1.5e-9/0.050^2*1e6"
      einheit: "µN"
    erklaerung: 'Gleiche Rechnung mit $r = 0{,}050\,\text{m}$: $F_2 = 32{,}4\,\mu\text{N}$.'
  - text: Zeigen die beiden Kräfte in dieselbe oder in entgegengesetzte Richtungen?
    erklaerung: Die nahe Ladung wird zum Stab hingezogen, die ferne vom Stab weggedrückt. Die Kräfte sind entgegengesetzt, also subtrahieren wir.
  - text: Wie groß ist die resultierende Kraft (in µN)?
    teil:
      typ: zahl
      loesung: "1/(4*pi*8.854e-12)*6.0e-9*1.5e-9*(1/0.040^2 - 1/0.050^2)*1e6"
      einheit: "µN"
    erklaerung: '$F = 50{,}6\,\mu\text{N} - 32{,}4\,\mu\text{N} = 18{,}2\,\mu\text{N}$, zum Stab hin.'
loesung: |
  **Ansatz:** Der Schnipsel ist neutral, aber seine Ladung ist getrennt. Wir berechnen die beiden Kräfte einzeln mit dem Coulomb-Gesetz und addieren sie mit Richtung.
  ---
  **Anziehung:** $F_1 = 8{,}99\cdot 10^9\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{6{,}0\cdot 10^{-9}\,\text{C}\cdot 1{,}5\cdot 10^{-9}\,\text{C}}{(0{,}040\,\text{m})^2} = 5{,}06\cdot 10^{-5}\,\text{N}$.
  ---
  **Abstoßung:** $F_2 = 8{,}99\cdot 10^9\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{6{,}0\cdot 10^{-9}\,\text{C}\cdot 1{,}5\cdot 10^{-9}\,\text{C}}{(0{,}050\,\text{m})^2} = 3{,}24\cdot 10^{-5}\,\text{N}$.
  ---
  **Resultierende:** $F = F_1 - F_2 = 1{,}82\cdot 10^{-5}\,\text{N} = 18{,}2\,\mu\text{N}$ zum Stab hin. Ein Schnipsel von $1\,\text{mg}$ wiegt nur $9{,}8\,\mu\text{N}$, er springt also zum Stab.
```

### Aufladen durch Influenz

Mit Influenz kann man einen Körper aufladen, ohne ihn zu berühren. Die Reihenfolge ist entscheidend:

1. Negativ geladenen Stab der Kugel nähern. Elektronen wandern auf die abgewandte Seite.
2. Kugel kurz erden, zum Beispiel mit dem Finger. Die abgedrängten Elektronen fließen zur Erde ab.
3. Erdung **zuerst** lösen. Jetzt können die Elektronen nicht mehr zurück.
4. Erst dann den Stab entfernen. Der Kugel fehlen Elektronen, sie ist **positiv** geladen.

Die Kugel erhält also das **entgegengesetzte** Vorzeichen wie der Stab.

:::achtung[Falsche Reihenfolge beim Aufladen durch Influenz]
**Falscher Ablauf:** „Stab nähern, Kugel erden, Stab entfernen, Erdung lösen. Dann ist die Kugel
positiv.“

**Warum falsch:** Sobald der Stab weg ist, drückt nichts mehr die Elektronen ab. Über die noch
bestehende Erdung fließen sie zurück auf die Kugel. Am Ende ist die Kugel **neutral**. Die Erdung muss
gelöst werden, **solange** der Stab noch in der Nähe ist.
:::

```aufgabe
id: p12-influenz-aufladen
titel: Laden ohne Berührung
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine neutrale Metallkugel steht auf einem Isolierfuß. Du näherst einen **negativ** geladenen Stab, berührst die Kugel kurz mit dem Finger (Erdung), nimmst den Finger weg und entfernst danach den Stab. Welches Vorzeichen hat die Ladung der Kugel? Erkläre die Schritte.
teile:
  - typ: auswahl
    optionen:
      - 'positiv'
      - 'negativ'
      - 'neutral'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Stab berührt die Kugel nie, er gibt also keine Elektronen ab. Er drängt nur Elektronen der Kugel weg, und die fließen beim Erden ab.
      - wert: 2
        meldung: |
          Neutral wäre die Kugel, wenn die Elektronen zurückfließen könnten. Hier wird die Erdung aber gelöst, **bevor** der Stab verschwindet.
  - typ: text
    label: Begründung
    muster: |
      Der negative Stab drückt durch Influenz Elektronen auf die abgewandte Seite der Kugel. Beim Erden fließen diese Elektronen über den Finger zur Erde ab. Nach dem Trennen der Erdung können sie nicht zurück. Entfernt man den Stab, fehlen der Kugel Elektronen. Sie ist positiv geladen, also entgegengesetzt zum Stab.
hinweise:
  - Wohin werden die Elektronen der Kugel durch den negativen Stab gedrängt?
  - Wohin können sie beim Erden ausweichen, und können sie nach dem Lösen der Erdung zurück?
loesung: |
  **Influenz:** Der negative Stab drängt Elektronen auf die abgewandte Seite der Kugel.
  ---
  **Erden:** Die abgedrängten Elektronen fließen über den Finger zur Erde ab.
  ---
  **Erdung lösen, dann Stab entfernen:** Die Elektronen können nicht zurück. Der Kugel fehlen Elektronen, sie ist **positiv** geladen. Bei umgekehrter Reihenfolge würden die Elektronen zurückfließen.
```

```aufgabe
id: p12-influenz-trennen
titel: Zwei Kugeln durch Influenz laden
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Zwei neutrale, gleich große Metallkugeln A und B stehen auf Isolierfüßen und berühren einander. Links neben A hältst du einen **positiv** geladenen Stab. Während der Stab dort bleibt, schiebst du B ein Stück von A weg. Danach entfernst du den Stab. Bei der Trennung sind $3{,}0\cdot 10^{10}$ Elektronen von B nach A gewandert.

  a) Welche Ladung trägt A danach (in nC, mit Vorzeichen)?

  b) Welche Ladung tragen A und B zusammen?
teile:
  - typ: zahl
    label: a) Q_A in nC
    loesung: "-3.0e10*1.602e-19*1e9"
    einheit: "nC"
    anzeige: '-4{,}81'
    fehler:
      - wert: "3.0e10*1.602e-19*1e9"
        meldung: |
          A hat Elektronen **bekommen**. Elektronen sind negativ, also ist A negativ geladen.
      - wert: "0"
        meldung: |
          A und B wurden getrennt, **während** der Stab noch da war. Die verschobenen Elektronen können nicht mehr zurück zu B.
  - typ: zahl
    label: b) Q_A + Q_B in nC
    loesung: "0"
    einheit: "nC"
    toleranz: 0.01
    fehler:
      - wert: "-2*4.806"
        meldung: |
          Es wurden nur Elektronen **verschoben**, von B nach A. Keine Ladung kam von außen dazu. Was sagt die Ladungserhaltung über die Summe?
hinweise:
  - Der positive Stab zieht Elektronen an. Zu welcher Kugel wandern sie?
  - 'Ladung pro Elektron: $-e = -1{,}602\cdot 10^{-19}\,\text{C}$. Für b) die Ladungserhaltung nutzen.'
loesung: |
  **Ansatz:** Influenz in den beiden Kugeln, die zusammen einen Leiter bilden. Der positive Stab links zieht Elektronen nach links, also nach A.
  ---
  **Ladung von A:** A hat $3{,}0\cdot 10^{10}$ Elektronen dazubekommen. $Q_A = -3{,}0\cdot 10^{10}\cdot 1{,}602\cdot 10^{-19}\,\text{C} = -4{,}81\cdot 10^{-9}\,\text{C} = -4{,}81\,\text{nC}$.
  ---
  **Ladung von B:** Diese Elektronen fehlen B, also $Q_B = +4{,}81\,\text{nC}$.
  ---
  **Summe und Probe:** $Q_A + Q_B = 0$. Vorher waren beide neutral, und es kam keine Ladung von außen. Die Ladungserhaltung ist erfüllt.
```

### Polarisation in Isolatoren

In Isolatoren sind die Elektronen an ihre Atome gebunden. Eine Ladung in der Nähe kann aber die
Elektronenhülle jedes Atoms ein winziges Stück gegen den Kern verschieben. Manche Moleküle haben schon
von sich aus eine positive und eine negative Seite, zum Beispiel Wasser. Solche Moleküle heißen
**Dipole** (griechisch, also: zwei Pole), und sie drehen sich teilweise in Richtung der Ladung.

:::definition[Polarisation]
**Polarisation** ist die Verschiebung von Ladungen **innerhalb** der Atome oder Moleküle eines
**Isolators** durch eine Ladung in der Nähe. Keine Ladung wandert durch den ganzen Körper. Trotzdem
entsteht an der zugewandten Oberfläche eine ungleichnamige Ladungsschicht.
:::

**Beispiel:** Ein geriebener Luftballon zieht Papierschnipsel an. Er lenkt sogar einen dünnen
Wasserstrahl ab. **Nichtbeispiel:** Die Influenz in einer Metallkugel ist keine Polarisation. Dort
wandern Elektronen quer durch den ganzen Körper.

:::intuition
Influenz ist wie eine Menschenmenge, die in einem Saal geschlossen auf eine Seite drängt. Polarisation
ist wie eine Menge, in der jeder an seinem Platz bleibt und sich nur ein wenig zur Seite lehnt. Die
Wirkung nach außen ist ähnlich, bei der Influenz aber viel stärker.
:::

```aufgabe
id: p12-polarisation-wasser
titel: Ein Wasserstrahl wird abgelenkt
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Du hältst einen geriebenen, **negativ** geladenen Kunststoffstab neben einen dünnen Wasserstrahl aus dem Hahn. Der Strahl biegt sich zum Stab hin. Was passiert, wenn du stattdessen einen **positiv** geladenen Glasstab daneben hältst?
teile:
  - typ: auswahl
    optionen:
      - "Der Strahl biegt sich ebenfalls zum Stab hin."
      - "Der Strahl biegt sich vom Stab weg, weil sich das Vorzeichen umgedreht hat."
      - "Der Strahl bleibt gerade, weil Wasser insgesamt neutral ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das Wasser ist nicht vorher geladen. Die Wassermoleküle drehen sich so, dass ihre **ungleichnamige** Seite zum Stab zeigt. Das gilt für beide Vorzeichen des Stabes. Deshalb gibt es immer Anziehung.
      - wert: 2
        meldung: |
          Auch ein neutraler Körper wird angezogen, wenn er polarisiert wird. Die ungleichnamige Seite ist näher am Stab, ihre Anziehung überwiegt.
hinweise:
  - Wassermoleküle sind kleine Dipole. Wie richten sie sich neben einer positiven Ladung aus?
loesung: |
  **Ansatz:** Wasser ist ein Isolator aus Dipolmolekülen. Ein geladener Stab polarisiert ihn.
  ---
  Neben dem positiven Stab drehen sich die Moleküle mit ihrer negativen Seite zum Stab. Die ungleichnamige Seite ist näher, die Anziehung überwiegt.
  ---
  Der Strahl biegt sich also **wieder zum Stab hin**. Polarisation führt immer zu Anziehung, egal welches Vorzeichen der Stab hat.
```

### Leiter im elektrischen Gleichgewicht

Ruhen alle Ladungen auf einem Leiter, spricht man vom **elektrostatischen Gleichgewicht**. Dann gelten
drei Regeln, die du in der mündlichen Prüfung begründen können solltest.

1. **Im Inneren eines Leiters wirkt keine elektrische Kraft.** Würde dort eine Kraft wirken, würden die
   freien Elektronen sich bewegen. Dann wäre es kein Gleichgewicht.
2. **Überschüssige Ladung sitzt nur an der Oberfläche.** Gleichnamige Ladungen stoßen einander ab. Im
   Leiter können sie wandern, also entfernen sie sich so weit wie möglich voneinander. Am weitesten
   voneinander entfernt sind sie an der Außenfläche.
3. **An Spitzen sammelt sich die Ladung.** Dort, wo die Oberfläche stark gekrümmt ist, ist die Ladung am
   dichtesten und die Kraft auf benachbarte Ladungen am größten.

:::achtung[Ladung sitzt nicht im Inneren eines Leiters]
**Falsche Überlegung:** „Eine geladene Hohlkugel aus Metall trägt $20\,\text{nC}$. Die Ladung verteilt
sich gleichmäßig auf das Metall. Also sitzen innen und außen je $10\,\text{nC}$.“

**Richtig:** Die gesamten $20\,\text{nC}$ sitzen auf der **Außenfläche**. Auf der Innenfläche und im
Hohlraum gibt es keine überschüssige Ladung. Ein Elektroskop, das man innen an die Wand hält, schlägt
nicht aus. Diesen Versuch nennt man den Faradayschen Becherversuch.
:::

```aufgabe
id: p12-hohlkugel
titel: Wo sitzt die Ladung?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Eine Hohlkugel aus Metall mit einer kleinen Öffnung trägt $+30\,\text{nC}$. Mit einer kleinen Metallscheibe an einem Isolierstiel tastest du einmal die Innenwand und einmal die Außenwand ab. Danach hältst du die Scheibe jeweils an ein Elektroskop. Was beobachtest du?
teile:
  - typ: auswahl
    optionen:
      - 'Nur nach dem Abtasten der Außenwand schlägt das Elektroskop aus.'
      - 'Nach beiden Abtastungen schlägt es gleich weit aus, denn die Ladung verteilt sich auf das ganze Metall.'
      - 'Nur nach dem Abtasten der Innenwand schlägt es aus, denn dort ist die Ladung vor der Umgebung geschützt.'
      - 'Es schlägt nie aus, denn eine Hohlkugel ist ein Faradayscher Käfig.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Gleichnamige Ladungen stoßen einander ab und können im Metall wandern. Sie entfernen sich so weit wie möglich voneinander. Wo ist das bei einer Hohlkugel?
      - wert: 2
        meldung: |
          Die Ladungen „suchen“ keinen Schutz. Sie stoßen einander ab und landen deshalb so weit außen wie möglich.
      - wert: 3
        meldung: |
          Der Käfig schützt den **Innenraum** vor Feldern. Die Ladung auf der Außenfläche ist trotzdem da und lässt sich abtasten.
hinweise:
  - Gleichnamige Ladungen stoßen einander ab. Wohin weichen sie in einem Leiter aus?
  - Wo sind Punkte einer Hohlkugel am weitesten voneinander entfernt, innen oder außen?
loesung: |
  **Ansatz:** Im Leiter können die überschüssigen Ladungen wandern. Sie stoßen einander ab und entfernen sich so weit wie möglich voneinander.
  ---
  Am weitesten voneinander entfernt sind sie auf der **Außenfläche**. Die gesamten $+30\,\text{nC}$ sitzen dort.
  ---
  Die Scheibe nimmt daher nur außen Ladung auf. Nur dann schlägt das Elektroskop aus. Das ist der Becherversuch von Faraday.
```

### Der Faradaysche Käfig

Aus Regel 1 folgt eine wichtige Anwendung. Im Inneren einer **geschlossenen** leitenden Hülle ist das
Feld null, auch wenn außen starke Ladungen sitzen. Der Grund ist die Influenz: Eine Ladung außen
verschiebt die Elektronen der Hülle genau so lange, bis die verschobenen Ladungen ihre Wirkung im
Inneren aufheben. Ein Gitter wirkt ebenso, solange seine Maschen klein genug sind. Man nennt eine
solche Hülle **Faradayschen Käfig**, nach Michael Faraday.

Anwendungen sind die Metallkarosserie von Auto und Flugzeug bei Blitzschlag, abgeschirmte Kabel und
das Lochblech in der Tür eines Mikrowellenherds. Auch ein Handy in einer geschlossenen Metalldose
verliert den Empfang.

:::beispiel[Warum die Mikrowellentür Löcher haben darf]
Ein Mikrowellenherd arbeitet mit Wellen der Frequenz $f = 2{,}45\,\text{GHz}$. Wie groß ist ihre
Wellenlänge, und warum dringen sie trotz der Löcher in der Tür nicht heraus?

**Rechnung:** Mit $c = \lambda\cdot f$ aus [8 Wellenlänge, Frequenz und Ausbreitungsgeschwindigkeit](/lernen/physik1/wellen-akustik/wellenlaenge-frequenz-und-ausbreitungsgeschwindigkeit) und
$c = 3{,}00\cdot 10^8\,\text{m/s}$ ist
$\lambda = \dfrac{3{,}00\cdot 10^8\,\text{m/s}}{2{,}45\cdot 10^9\,\text{1/s}} = 0{,}122\,\text{m} = 12{,}2\,\text{cm}$.

**Deutung:** Die Löcher im Blech sind nur etwa $1$ bis $2\,\text{mm}$ groß. Sie sind rund hundertmal
kleiner als die Wellenlänge. Für die Mikrowellen wirkt das Blech daher wie eine geschlossene Hülle.
Sichtbares Licht hat dagegen eine Wellenlänge unter einem Mikrometer und kommt durch die Löcher. Darum
kannst du hineinschauen.
:::

```aufgabe
id: p12-faraday-kaefig
titel: Sicher im Auto?
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Welche Aussagen zum Faradayschen Käfig sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'Im Inneren eines geschlossenen, leitenden Gehäuses ist das elektrostatische Feld null.'
      - 'Ein Auto schützt bei Blitzschlag vor allem wegen der isolierenden Gummireifen.'
      - 'Ein feinmaschiges Metallgitter wirkt ähnlich wie eine geschlossene Metallhülle.'
      - 'Die Abschirmung entsteht durch Influenz in der leitenden Hülle.'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Die Reifen-Erklärung ist ein verbreiteter Irrtum. Ein Blitz durchschlägt kilometerweit Luft, da sind ein paar Zentimeter Gummi bedeutungslos.
      - wert: [0, 3]
        meldung: |
          Auch ein Gitter wirkt als Käfig, wenn die Maschen klein genug sind. Das zeigt die Tür des Mikrowellenherds.
hinweise:
  - Überlege, was die frei beweglichen Elektronen in der Metallhülle tun, wenn außen eine Ladung sitzt.
loesung: |
  **Ansatz:** Die Hülle ist ein Leiter. Ihre freien Elektronen verschieben sich durch Influenz.
  ---
  Sie verschieben sich so lange, bis ihre Wirkung die der äußeren Ladung im Inneren genau aufhebt. Innen ist das Feld dann null.
  ---
  Die Reifen sind gegen einen Blitz bedeutungslos, die Metallkarosserie schützt. Ein Gitter mit kleinen Maschen wirkt fast wie eine geschlossene Hülle.
```

```aufgabe
id: p12-gedanken-kaefig
titel: Gedankenexperiment im Käfig
niveau: 3
lernziel: 1
kompetenz: begruenden
angabe: |
  Du sitzt mit einem Elektroskop in einem großen, geschlossenen Käfig aus Maschendraht. Er steht auf Isolatoren. Von außen wird der Käfig mit einer Hochspannungsquelle stark aufgeladen, und Funken springen außen über.

  a) Schlägt dein Elektroskop aus? Begründe mit Influenz und der Lage der Ladung auf einem Leiter.

  b) Du berührst die Innenseite des Drahtes. Passiert dir etwas? Begründe.
teile:
  - typ: text
    label: a)
    muster: |
      Nein. Die Ladung des Käfigs sitzt auf seiner Außenfläche, weil gleichnamige Ladungen einander abstoßen und sich so weit wie möglich entfernen. Durch Influenz stellen sich die Elektronen im Draht so ein, dass im Inneren keine elektrische Kraft wirkt. Das Elektroskop spürt nichts und schlägt nicht aus.
  - typ: text
    label: b)
    muster: |
      Nein. Der ganze Käfig ist ein Leiter. Du und der Draht sind dann auf demselben elektrischen Zustand, zwischen deiner Hand und dem Draht fließt keine Ladung durch deinen Körper. Gefährlich wäre es nur, gleichzeitig den Käfig und einen geerdeten Gegenstand außerhalb zu berühren.
hinweise:
  - Wo sitzt die Ladung auf einem geladenen Leiter, innen oder außen?
  - Für b) überlege, ob es zwischen zwei Stellen desselben Leiters einen Grund für einen Ladungsfluss durch deinen Körper gibt.
loesung: |
  **Ansatz:** Der Käfig ist ein Leiter im elektrostatischen Gleichgewicht. Wir wenden die drei Regeln für Leiter an.
  ---
  **a)** Die Ladung sitzt außen. Innen hebt die Influenz jede Wirkung auf, das Feld ist null. Das Elektroskop schlägt nicht aus. Faraday hat genau diesen Versuch 1836 selbst gemacht.
  ---
  **b)** Hand und Draht gehören zu demselben Leiter. Es gibt nichts, was Ladung durch deinen Körper treiben würde. Gefahr bestünde nur bei einer Verbindung nach außen zur Erde.
```

### Spitzenwirkung und Blitzableiter

An Spitzen ist die elektrische Kraft auf benachbarte Ladungen besonders groß (Regel 3). Wird sie groß
genug, reißt sie Elektronen aus den Luftmolekülen heraus. Die Luft wird leitend, und es kommt zur
**Entladung**. Man sieht sie als Funken oder als bläuliches Glimmen an Masten, das Elmsfeuer.

Der **Blitzableiter** nutzt das. Eine geerdete Metallspitze auf dem Dach bietet dem Blitz den
bequemsten Weg zur Erde. Der Strom fließt außen über den Leiter ab, nicht durch das Haus.

```reflexion
frage: Ein Auto steht im Gewitter. Viele sagen, die Gummireifen schützen die Insassen. Was stimmt wirklich, und wie kannst du das mit einer Größenabschätzung begründen?
antwort: |
  Ein Blitz überbrückt kilometerlange Luftstrecken, obwohl Luft ein guter Isolator ist. Ein paar Zentimeter Gummi halten ihn deshalb nicht auf. Die Insassen schützt die geschlossene **Metallkarosserie**. Sie wirkt als Faradayscher Käfig: Der Blitzstrom fließt außen über das Blech, und im Inneren bleibt das Feld null. Ein Cabrio mit Stoffverdeck schützt deshalb kaum, obwohl es dieselben Reifen hat.
```

```aufgabe
id: p12-spitzen
titel: Warum ist der Blitzableiter spitz?
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Warum endet ein Blitzableiter oben in einer Spitze und nicht in einer großen Kugel?
teile:
  - typ: auswahl
    optionen:
      - 'An einer Spitze ist die Ladung am dichtesten und die elektrische Kraft auf die Luft am größten. Dort beginnt die Entladung am leichtesten.'
      - 'Eine Spitze ist näher an der Wolke. Nur der kleinere Abstand zählt.'
      - 'Eine Spitze speichert mehr Ladung als eine Kugel gleicher Masse.'
      - 'Die Spitze sticht in die Wolke und leitet die Ladung direkt ab.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein paar Zentimeter Höhe machen bei einer Wolke in einem Kilometer Höhe fast keinen Unterschied. Entscheidend ist die **Form** der Oberfläche.
      - wert: 2
        meldung: |
          Es geht nicht um die gespeicherte Ladungsmenge. Es geht darum, wie **dicht** die Ladung an einer Stelle sitzt und wie stark sie dort auf die Luft wirkt.
      - wert: 3
        meldung: |
          Die Wolke ist hunderte Meter entfernt. Die Spitze erreicht sie nicht. Sie macht aber die Luft in ihrer Nähe leitend.
hinweise:
  - Wo sammelt sich die Ladung auf einem Leiter besonders dicht?
  - Was passiert mit der Luft, wenn die elektrische Kraft auf ihre Elektronen sehr groß wird?
loesung: |
  **Ansatz:** Auf einem Leiter sammelt sich die Ladung dort, wo die Oberfläche am stärksten gekrümmt ist.
  ---
  An der Spitze ist die Ladung daher am dichtesten. Die Kraft auf Elektronen in der Luft ist dort am größten. Die Luft wird leitend, die Entladung beginnt hier.
  ---
  So bietet die geerdete Spitze dem Blitz den bequemsten Weg zur Erde, außen am Haus vorbei.
```

## Das Coulomb-Gesetz: die Kraft zwischen zwei Ladungen

```aufgabe
id: p12-3-check
art: check
titel: "Vorwissen: Abstand im Quadrat"
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Der Mond ist rund $60$ Erdradien vom Erdmittelpunkt entfernt, ein Apfel auf der Erdoberfläche nur $1$ Erdradius. Die Gravitationskraft nimmt mit $1/r^2$ ab. Um welchen Faktor ist die Fallbeschleunigung am Ort des Mondes kleiner als am Boden?

  Herkunft: [Kapitel 6, Das Gravitationsgesetz](/lernen/physik1/kreisbewegung-gravitation/das-gravitationsgesetz)
teile:
  - typ: zahl
    loesung: "60^2"
    anzeige: '3600'
    fehler:
      - wert: "60"
        meldung: |
          Der Abstand steht **quadriert** im Nenner. Sechzigfacher Abstand heißt Nenner mal $60^2$, nicht mal $60$.
hinweise:
  - 'Setze $60\,r$ statt $r$ in $1/r^2$ ein.'
loesung: |
  Mit dem sechzigfachen Abstand wird der Nenner $(60\,r)^2 = 3600\,r^2$.
  ---
  Die Kraft und damit die Fallbeschleunigung sind also $3600$-mal kleiner. Genau dieses „Abstand im Quadrat“ steckt auch im Coulomb-Gesetz.
```

In der Lektion [Elektrische Ladung und Elementarladung](/lernen/physik1/elektrostatik/elektrische-ladung-und-elementarladung)
hast du gesehen: Gleichnamige Ladungen stoßen einander ab, ungleichnamige ziehen einander an. Jetzt
fragen wir genauer: **Wie stark** ist diese Kraft? Wovon hängt sie ab?

### Coulombs Messung

Charles Augustin de Coulomb hängte 1785 einen leichten Stab an einen dünnen Draht. An einem Ende des
Stabes saß eine kleine geladene Kugel. Eine zweite geladene Kugel stieß sie ab, und der Draht verdrehte
sich. Aus dem Drehwinkel konnte Coulomb die Kraft sehr genau ablesen. Diese Anordnung heißt
**Drehwaage**. Coulomb fand zwei Regeln:

- Verdoppelt man eine der beiden Ladungen, verdoppelt sich die Kraft. Die Kraft ist also
  **proportional** (das heißt: wächst im gleichen Verhältnis) zu jeder der beiden Ladungen.
- Verdoppelt man den Abstand, sinkt die Kraft auf ein Viertel. Die Kraft ist also umgekehrt
  proportional zum **Quadrat** des Abstands.

:::satz[Coulomb-Gesetz]
Zwei punktförmige Ladungen $Q_1$ und $Q_2$ im Abstand $r$ üben aufeinander Kräfte entlang ihrer
Verbindungslinie aus. Der Betrag jeder der beiden Kräfte ist
$$F = \frac{1}{4\pi\varepsilon_0}\cdot\frac{|Q_1|\cdot|Q_2|}{r^2} = k\cdot\frac{|Q_1|\cdot|Q_2|}{r^2}.$$
Gleichnamige Ladungen stoßen einander ab, ungleichnamige ziehen einander an.
:::

Dabei ist $F$ der Betrag der Kraft in Newton, $Q_1$ und $Q_2$ sind die Ladungen in Coulomb, und $r$ ist
der Abstand ihrer Mittelpunkte in Metern. Die senkrechten Striche $|\ldots|$ bedeuten den **Betrag**,
also die Zahl ohne Vorzeichen. Die Konstante $k$ heißt **Coulomb-Konstante**:
$$k = \frac{1}{4\pi\varepsilon_0} \approx 8{,}99\cdot 10^{9}\,\frac{\text{N}\cdot\text{m}^2}{\text{C}^2}.$$
Darin steckt die **elektrische Feldkonstante** $\varepsilon_0 = 8{,}854\cdot 10^{-12}\,\dfrac{\text{C}^2}{\text{N}\cdot\text{m}^2}$
(sprich „Epsilon null“). Sie ist eine Naturkonstante wie die Gravitationskonstante $G$. Beide Werte
stehen in der Formelsammlung.

„Punktförmig“ heißt: Die geladenen Körper sind viel kleiner als ihr Abstand. Für zwei geladene Kugeln
gilt das Gesetz sogar exakt, wenn man für $r$ den Abstand der Kugelmittelpunkte nimmt und die Ladung
gleichmäßig verteilt ist.

:::beispiel[Zwei Ladungen von je einem Mikrocoulomb]
Zwei kleine Kugeln tragen je $Q = 1{,}0\,\mu\text{C}$. Ihre Mittelpunkte sind $r = 10\,\text{cm}$
voneinander entfernt. Wie groß ist die Kraft?

**Schritt 1, in SI-Einheiten umrechnen:** Mikro heißt $10^{-6}$, also $Q = 1{,}0\cdot 10^{-6}\,\text{C}$.
Der Abstand ist $r = 0{,}10\,\text{m}$.

**Schritt 2, einsetzen:**
$$F = 8{,}99\cdot 10^{9}\,\frac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\frac{(1{,}0\cdot 10^{-6}\,\text{C})^2}{(0{,}10\,\text{m})^2}
= 8{,}99\cdot 10^{9}\cdot\frac{10^{-12}}{10^{-2}}\,\text{N} = 0{,}90\,\text{N}.$$
Die Einheiten $\text{C}^2$ und $\text{m}^2$ kürzen sich, es bleibt Newton.

**Schritt 3, einordnen:** $0{,}90\,\text{N}$ ist ungefähr die Gewichtskraft von $92\,\text{g}$, denn
$0{,}90\,\text{N} : 9{,}81\,\text{m/s}^2 = 0{,}092\,\text{kg}$. Ein Mikrocoulomb ist in der Elektrostatik
also schon viel. Geriebene Stäbe tragen meist nur einige Nanocoulomb.
:::

Die Kraft auf jede der beiden Ladungen hat **denselben** Betrag, auch wenn die Ladungen verschieden
groß sind. Das ist das dritte Newtonsche Axiom („actio gleich reactio“) aus der Lektion
[Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf).
Im Coulomb-Gesetz siehst du das an der Formel: $|Q_1|\cdot|Q_2|$ ist für beide Ladungen dasselbe Produkt.

```plot
x: [-3.5, 3.5]
y: [-1.2, 1.2]
gleich: true
vektoren:
  - { von: [-1.5, 0], nach: [-0.3, 0], farbe: 0 }
  - { von: [1.5, 0], nach: [0.3, 0], farbe: 0 }
punkte:
  - { x: -1.5, y: 0, label: "Q₁ = +1 nC", farbe: 1 }
  - { x: 1.5, y: 0, label: "Q₂ = −4 nC", farbe: 2 }
beschriftung: "Zwei ungleichnamige Ladungen ziehen einander an. Der linke Pfeil ist die Kraft auf Q₁, der rechte die Kraft auf Q₂. Beide Pfeile sind gleich lang, obwohl die Ladung rechts viermal so groß ist. Jede Kraft greift an der Ladung an, auf die sie wirkt, und zeigt zur anderen Ladung hin."
```

:::achtung[Fehler: „Die größere Ladung spürt die größere Kraft“]
**Falsche Überlegung:** „$Q_1 = 1\,\text{nC}$ und $Q_2 = 4\,\text{nC}$. Auf $Q_2$ wirkt die vierfache Kraft,
weil sie viermal so viel Ladung hat.“

**Richtig:** Beide Kräfte haben denselben Betrag $F = k\,|Q_1|\,|Q_2|/r^2$. Sie sind ein
Wechselwirkungspaar nach dem dritten Newtonschen Axiom. $Q_2$ ist zwar viermal so groß, wird aber nur von
der kleinen Ladung $Q_1$ angezogen. In der Formel steht das Produkt $|Q_1|\cdot|Q_2|$, und das ist für beide
Kräfte dasselbe.
:::

:::achtung[Fehler: Zentimeter eingesetzt und das Quadrat vergessen]
**Falsche Rechnung:** Zwei Ladungen von je $2{,}0\,\text{nC}$ sind $4{,}0\,\text{cm}$ entfernt. Jemand rechnet
$F = 8{,}99\cdot 10^{9}\cdot\dfrac{2{,}0\cdot 10^{-9}\cdot 2{,}0\cdot 10^{-9}}{4{,}0}\,\text{N} = 9{,}0\cdot 10^{-9}\,\text{N}$.

**Zwei Fehler:** Der Abstand muss in Metern stehen, also $0{,}040\,\text{m}$. Und er muss **quadriert**
werden. Richtig ist $F = 8{,}99\cdot 10^{9}\cdot\dfrac{4{,}0\cdot 10^{-18}}{(0{,}040)^2}\,\text{N} = 2{,}2\cdot 10^{-5}\,\text{N}$.
Das Ergebnis ist rund $2500$-mal größer als das falsche.
:::

```aufgabe
id: p12-coulomb-basis
titel: Coulomb-Kraft berechnen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Zwei kleine Kugeln mit den Ladungen $Q_1 = 2{,}0\,\text{nC}$ und $Q_2 = -5{,}0\,\text{nC}$ sind $3{,}0\,\text{cm}$ voneinander entfernt. Wie groß ist der Betrag der Kraft zwischen ihnen (in mN)? Ziehen sie einander an oder stoßen sie einander ab?
teile:
  - typ: zahl
    label: Kraft in mN
    loesung: "1/(4*pi*8.854e-12)*2e-9*5e-9/0.03^2*1000"
    einheit: "mN"
    anzeige: '0{,}0999'
    fehler:
      - wert: "1/(4*pi*8.854e-12)*2e-9*5e-9/0.03*1000"
        meldung: |
          Der Abstand steht im Coulomb-Gesetz **quadriert** im Nenner: $r^2 = (0{,}030\,\text{m})^2 = 9{,}0\cdot 10^{-4}\,\text{m}^2$.
      - wert: "1/(4*pi*8.854e-12)*2e-9*5e-9/3^2*1000"
        meldung: |
          Du hast den Abstand in Zentimetern eingesetzt. Die Konstante $k$ enthält $\text{m}^2$, also muss $r$ in Metern stehen: $3{,}0\,\text{cm} = 0{,}030\,\text{m}$.
  - typ: auswahl
    optionen:
      - "Anziehung"
      - "Abstoßung"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Ladungen haben **verschiedene** Vorzeichen, eine ist positiv, eine negativ. Ungleichnamige Ladungen ziehen einander an.
hinweise:
  - 'Rechne zuerst alle Größen in Coulomb und Meter um. Dann $F = k\,|Q_1|\,|Q_2|/r^2$ mit $k = 8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2$.'
loesung: |
  **Ansatz:** Coulomb-Gesetz mit den Beträgen der Ladungen. Die Richtung bestimmen wir getrennt aus den Vorzeichen.
  ---
  **Einsetzen in SI-Einheiten:** $F = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{2{,}0\cdot 10^{-9}\,\text{C}\cdot 5{,}0\cdot 10^{-9}\,\text{C}}{(0{,}030\,\text{m})^2} = 8{,}99\cdot 10^{9}\cdot\dfrac{1{,}0\cdot 10^{-17}}{9{,}0\cdot 10^{-4}}\,\text{N}$.
  ---
  **Ergebnis:** $F = 9{,}99\cdot 10^{-5}\,\text{N} \approx 0{,}10\,\text{mN}$. Die Ladungen sind ungleichnamig, also ziehen sie einander an.
```

```aufgabe
id: p12-coulomb-abstand
titel: Ladung und Abstand zugleich ändern
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Zwei Punktladungen üben aufeinander die Kraft $F$ aus. Man verdoppelt eine der beiden Ladungen und verdreifacht gleichzeitig den Abstand. Auf das Wievielfache von $F$ ändert sich die Kraft? Gib den Faktor als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "2/3^2"
    anzeige: '\tfrac{2}{9} \approx 0{,}222'
    fehler:
      - wert: "2/3"
        meldung: |
          Der Abstand wirkt **im Quadrat**. Dreifacher Abstand heißt ein Neuntel der Kraft, nicht ein Drittel.
      - wert: "2*9"
        meldung: |
          Ein größerer Abstand macht die Kraft **kleiner**. Der Faktor $3^2 = 9$ gehört in den Nenner.
      - wert: "4/9"
        meldung: |
          Nur **eine** der beiden Ladungen wird verdoppelt. Das bringt den Faktor $2$, nicht $2^2$.
hinweise:
  - 'Schreibe $F \sim \dfrac{Q_1 Q_2}{r^2}$ und ersetze $Q_1$ durch $2Q_1$ und $r$ durch $3r$.'
loesung: |
  **Ansatz:** Proportionalitätsschluss. Die Kraft ist proportional zu $Q_1\cdot Q_2$ und zu $1/r^2$.
  ---
  Doppelte Ladung gibt den Faktor $2$. Dreifacher Abstand gibt den Faktor $\tfrac{1}{3^2} = \tfrac19$. Zusammen: $2\cdot\tfrac19 = \tfrac29 \approx 0{,}22$. Die Kraft sinkt auf gut ein Fünftel.
```

```aufgabe
id: p12-coulomb-actio
titel: Welche Ladung spürt mehr?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine kleine Kugel mit $+2\,\text{nC}$ und eine mit $+8\,\text{nC}$ liegen $5\,\text{cm}$ auseinander. Welche Aussage über die Kräfte ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Auf beide Kugeln wirkt eine gleich große Kraft, aber in entgegengesetzte Richtungen."
      - "Auf die Kugel mit $8\\,\\text{nC}$ wirkt die viermal so große Kraft."
      - "Auf die Kugel mit $2\\,\\text{nC}$ wirkt die viermal so große Kraft, weil die andere Ladung stärker ist."
      - "Die Kräfte heben einander auf, deshalb bewegt sich keine der Kugeln."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist die häufigste Fehlvorstellung. Im Coulomb-Gesetz steht das Produkt $|Q_1|\cdot|Q_2|$. Es ist für beide Kugeln dasselbe. Also ist auch der Betrag der Kraft gleich.
      - wert: 2
        meldung: |
          Die größere Ladung übt zwar die stärkere Wirkung aus. Sie erfährt aber auch nur die Wirkung der kleineren Ladung. Im Produkt $|Q_1|\cdot|Q_2|$ gleicht sich das genau aus.
      - wert: 3
        meldung: |
          Die beiden Kräfte greifen an **verschiedenen** Körpern an. Kräfte an verschiedenen Körpern heben einander nie auf. Jede Kugel wird von der anderen weggestoßen.
hinweise:
  - Welches Newtonsche Axiom gilt für zwei Körper, die aufeinander wirken?
loesung: |
  **Ansatz:** Die beiden Kräfte sind ein Wechselwirkungspaar. Nach dem dritten Newtonschen Axiom sind sie gleich groß und entgegengesetzt.
  ---
  Die Formel bestätigt das: $F = k\,|Q_1|\,|Q_2|/r^2$ hat für beide Kugeln denselben Wert. Die Kugeln stoßen einander gleich stark ab, jede in Richtung von der anderen weg.
  ---
  Aufheben können sich die Kräfte nicht, weil sie an verschiedenen Kugeln angreifen. Beide Kugeln werden beschleunigt, die leichtere stärker.
```

:::beispiel[Wie stark ist die elektrische Kraft im Atom?]
Im Wasserstoffatom ist das Elektron im Mittel $r = 5{,}29\cdot 10^{-11}\,\text{m}$ vom Proton entfernt. Beide
tragen den Ladungsbetrag $e = 1{,}602\cdot 10^{-19}\,\text{C}$. Vergleiche die elektrische Anziehung mit der
Gravitation zwischen ihnen.

**Schritt 1, elektrische Kraft:**
$$F_C = 8{,}99\cdot 10^{9}\,\frac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\frac{(1{,}602\cdot 10^{-19}\,\text{C})^2}{(5{,}29\cdot 10^{-11}\,\text{m})^2} = 8{,}24\cdot 10^{-8}\,\text{N}.$$

**Schritt 2, Gravitation:** Mit $m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$ und $m_p = 1{,}673\cdot 10^{-27}\,\text{kg}$ gilt
$$F_G = G\,\frac{m_e m_p}{r^2} = 6{,}674\cdot 10^{-11}\cdot\frac{9{,}109\cdot 10^{-31}\cdot 1{,}673\cdot 10^{-27}}{(5{,}29\cdot 10^{-11})^2}\,\text{N} = 3{,}63\cdot 10^{-47}\,\text{N}.$$

**Schritt 3, vergleichen:** $F_C/F_G = 8{,}24\cdot 10^{-8} / 3{,}63\cdot 10^{-47} = 2{,}3\cdot 10^{39}$. Die
elektrische Kraft ist also rund $10^{39}$-mal stärker. Für den Aufbau der Atome spielt die Gravitation
keine Rolle.
:::

### Warum spüren wir dann fast nur die Gravitation?

Die elektrische Kraft ist unvorstellbar viel stärker. Trotzdem halten uns im Alltag nicht elektrische
Kräfte am Boden, sondern die Gravitation. Der Grund sind die **zwei Vorzeichen** der Ladung. Gewöhnliche
Materie enthält fast genau gleich viele Protonen wie Elektronen. Die Anziehungen und Abstoßungen heben
sich nach außen fast vollständig auf. Massen dagegen haben nur ein Vorzeichen, sie addieren sich immer.

Schon ein winziger Ladungsüberschuss hätte gewaltige Folgen. Wie gewaltig, schätzt du in der Aufgabe
„Fermi-Abschätzung: zwei geladene Menschen“ selbst ab.

Die beiden Kräfte im Vergleich:

- **Ursache:** Die Gravitation entsteht durch Masse, die Coulomb-Kraft durch Ladung.
- **Vorzeichen:** Es gibt nur eine Sorte Masse, aber zwei Sorten Ladung.
- **Richtung:** Die Gravitation zieht immer an. Die Coulomb-Kraft zieht an oder stößt ab.
- **Konstante:** $G = 6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2$ gegen $k = 8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2$.
- **Abschirmen:** Gravitation lässt sich nicht abschirmen, elektrische Wirkungen schon (Faradayscher Käfig).
- **Wichtig für:** Die Gravitation beherrscht Planeten und Sterne. Die Coulomb-Kraft beherrscht Atome, Moleküle und die Chemie.

Beide Gesetze haben die Form „Konstante mal Produkt geteilt durch Abstand im Quadrat“. Das ist kein
Zufall. Beide Wirkungen breiten sich gleichmäßig in alle Richtungen aus. Sie verteilen sich dabei auf
eine Kugeloberfläche mit der Fläche $4\pi r^2$. Daher kommen das $r^2$ und das $4\pi$ in der Konstante $k$.

```reflexion
frage: Die Konstante $k$ im Coulomb-Gesetz ist $10^{20}$-mal größer als die Gravitationskonstante $G$. Darf man daraus schließen, dass elektrische Kräfte immer $10^{20}$-mal stärker sind als Gravitationskräfte? Erkläre.
antwort: |
  Nein. Die Konstanten haben verschiedene Einheiten ($\text{N}\,\text{m}^2/\text{C}^2$ gegen $\text{N}\,\text{m}^2/\text{kg}^2$) und lassen sich deshalb nicht direkt vergleichen. Wie stark die Kräfte sind, hängt auch von den Ladungen und Massen ab. Für Proton und Elektron ist das Verhältnis $10^{39}$. Für Erde und Mond, die praktisch neutral sind, ist die elektrische Kraft fast null, die Gravitation aber riesig.
```

### Ladungen in einem Stoff

Liegt zwischen den Ladungen ein isolierender Stoff, wird die Kraft kleiner. Der Stoff wird
**polarisiert** (siehe [Influenz, Polarisation und Leiter im Feld](/lernen/physik1/elektrostatik/influenz-polarisation-und-leiter-im-feld)).
Seine verschobenen Ladungen schwächen die Wirkung. Die **Permittivitätszahl** $\varepsilon_r$ des Stoffes
gibt an, um welchen Faktor die Kraft sinkt:
$$F = \frac{1}{4\pi\varepsilon_0\varepsilon_r}\cdot\frac{|Q_1|\cdot|Q_2|}{r^2}.$$
Für Vakuum gilt $\varepsilon_r = 1$, für Luft fast genau $1$, für Wasser rund $80$. Deshalb lösen sich Salze
in Wasser so gut: Die Anziehung zwischen den Ionen ist dort rund achtzigmal schwächer.

:::beispiel[Welcher Abstand gibt eine bestimmte Kraft?]
Zwei Kugeln tragen $30\,\text{nC}$ und $20\,\text{nC}$. In welchem Abstand stoßen sie einander mit
$2{,}0\,\text{mN}$ ab? Das ist eine **Umkehraufgabe**: Die Kraft ist gegeben, der Abstand gesucht.

**Schritt 1, umstellen:** Aus $F = k\,Q_1Q_2/r^2$ folgt nach Multiplizieren mit $r^2$ und Teilen durch $F$
die Gleichung $r^2 = k\,Q_1Q_2/F$. Also ist $r = \sqrt{k\,Q_1Q_2/F}$.

**Schritt 2, einsetzen:**
$$r = \sqrt{\frac{8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot 30\cdot 10^{-9}\,\text{C}\cdot 20\cdot 10^{-9}\,\text{C}}{2{,}0\cdot 10^{-3}\,\text{N}}} = \sqrt{2{,}70\cdot 10^{-3}\,\text{m}^2} = 0{,}052\,\text{m}.$$

**Schritt 3, Probe:** $8{,}99\cdot 10^{9}\cdot 6{,}0\cdot 10^{-16}/0{,}052^2\,\text{N} = 2{,}0\cdot 10^{-3}\,\text{N}$. Der Abstand
ist also $5{,}2\,\text{cm}$.
:::

:::merke[Rezept: Coulomb-Kraft berechnen]
1. Alle Größen in SI-Einheiten umrechnen: Ladungen in C, Abstand in m.
2. Den **Betrag** mit $F = k\,|Q_1|\,|Q_2|/r^2$ ausrechnen, ohne Vorzeichen. Das $r$ quadrieren.
3. Die **Richtung** getrennt bestimmen: gleichnamig stößt ab, ungleichnamig zieht an.
4. Plausibilität prüfen: Beide Ladungen erfahren gleich große Kräfte.
:::

```aufgabe
id: p12-coulomb-gleich
titel: Gleiche Ladungen aus der Kraft
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Zwei gleich geladene kleine Kugeln stoßen einander im Abstand von $20\,\text{cm}$ mit $0{,}050\,\text{N}$ ab. Wie groß ist die Ladung jeder Kugel (in µC)?
teile:
  - typ: zahl
    loesung: "sqrt(0.050*0.20^2*4*pi*8.854e-12)*1e6"
    einheit: "µC"
    anzeige: '0{,}472'
    fehler:
      - wert: "0.050*0.20^2*4*pi*8.854e-12*1e6"
        meldung: |
          Du hast $Q^2$ berechnet, aber die Wurzel vergessen. Weil beide Ladungen gleich sind, steht im Coulomb-Gesetz $Q\cdot Q = Q^2$.
      - wert: "sqrt(0.050*0.20*4*pi*8.854e-12)*1e6"
        meldung: |
          Der Abstand steht im Coulomb-Gesetz im Quadrat. Beim Umstellen wird daraus $r^2$, nicht $r$.
hinweise:
  - 'Mit $Q_1 = Q_2 = Q$ wird das Coulomb-Gesetz zu $F = k\,Q^2/r^2$.'
  - 'Stelle nach $Q^2$ um und ziehe am Ende die Wurzel: $Q = r\sqrt{F/k}$.'
gefuehrt:
  - text: Wie lautet das Coulomb-Gesetz, wenn beide Ladungen gleich $Q$ sind?
    erklaerung: 'Aus $|Q_1|\cdot|Q_2|$ wird $Q\cdot Q = Q^2$. Also gilt $F = k\,Q^2/r^2$.'
  - text: Stelle nach $Q^2$ um. Berechne $Q^2$ in Vielfachen von $10^{-13}\,\text{C}^2$.
    teil:
      typ: zahl
      loesung: "0.050*0.20^2/8.99e9/1e-13"
      fehler:
        - wert: "0.050*0.20/8.99e9/1e-13"
          meldung: Der Abstand muss quadriert werden, $r^2 = 0{,}040\,\text{m}^2$.
    erklaerung: '$Q^2 = \dfrac{F\,r^2}{k} = \dfrac{0{,}050\,\text{N}\cdot 0{,}040\,\text{m}^2}{8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2} = 2{,}22\cdot 10^{-13}\,\text{C}^2$.'
  - text: Ziehe die Wurzel. Wie groß ist $Q$ in µC?
    teil:
      typ: zahl
      loesung: "sqrt(0.050*0.20^2/8.99e9)*1e6"
      einheit: "µC"
    erklaerung: '$Q = \sqrt{2{,}22\cdot 10^{-13}\,\text{C}^2} = 4{,}72\cdot 10^{-7}\,\text{C} = 0{,}472\,\mu\text{C}$.'
  - text: Mache die Probe. Ergibt sich wieder $0{,}050\,\text{N}$?
    erklaerung: '$8{,}99\cdot 10^{9}\cdot(4{,}72\cdot 10^{-7})^2/0{,}20^2\,\text{N} = 0{,}050\,\text{N}$. Die Probe stimmt.'
loesung: |
  **Ansatz:** Coulomb-Gesetz mit gleichen Ladungen, $F = k\,Q^2/r^2$. Das ist eine Umkehraufgabe, gesucht ist $Q$.
  ---
  **Umstellen:** Wir multiplizieren mit $r^2$ und teilen durch $k$: $Q^2 = F r^2/k$. Dann ziehen wir die Wurzel: $Q = r\sqrt{F/k}$.
  ---
  **Einsetzen:** $Q = 0{,}20\,\text{m}\cdot\sqrt{\dfrac{0{,}050\,\text{N}}{8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2}} = 0{,}20\,\text{m}\cdot 2{,}36\cdot 10^{-6}\,\tfrac{\text{C}}{\text{m}} = 4{,}72\cdot 10^{-7}\,\text{C}$.
  ---
  **Probe:** $8{,}99\cdot 10^{9}\cdot(4{,}72\cdot 10^{-7})^2/0{,}040\,\text{N} = 0{,}050\,\text{N}$. Jede Kugel trägt also rund $0{,}47\,\mu\text{C}$.
```

```aufgabe
id: p12-coulomb-medium
titel: Ionen in Wasser
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Natrium-Ion ($+e$) und ein Chlorid-Ion ($-e$) sind $0{,}50\,\text{nm}$ voneinander entfernt. Sie befinden sich in Wasser mit $\varepsilon_r = 80$. Berechne die Anziehungskraft in Vielfachen von $10^{-11}\,\text{N}$ ($e = 1{,}602\cdot 10^{-19}\,\text{C}$).
teile:
  - typ: zahl
    label: F in 10⁻¹¹ N
    loesung: "1/(4*pi*8.854e-12*80)*(1.602e-19)^2/(0.50e-9)^2/1e-11"
    anzeige: '1{,}15'
    fehler:
      - wert: "1/(4*pi*8.854e-12)*(1.602e-19)^2/(0.50e-9)^2/1e-11"
        meldung: |
          Das ist die Kraft im Vakuum. Im Wasser wird sie durch $\varepsilon_r = 80$ geteilt, weil das polarisierte Wasser die Wirkung schwächt.
      - wert: "80/(4*pi*8.854e-12)*(1.602e-19)^2/(0.50e-9)^2/1e-11"
        meldung: |
          Du hast mit $\varepsilon_r$ multipliziert. Ein Stoff zwischen den Ladungen macht die Kraft **kleiner**, also teilen.
hinweise:
  - 'Nano heißt $10^{-9}$. Beide Ionen tragen den Ladungsbetrag $e$.'
  - 'Im Stoff gilt $F = \dfrac{1}{4\pi\varepsilon_0\varepsilon_r}\cdot\dfrac{e^2}{r^2}$, also die Vakuumkraft geteilt durch $\varepsilon_r$.'
loesung: |
  **Ansatz:** Coulomb-Gesetz im Stoff. Die Kraft ist um den Faktor $\varepsilon_r$ kleiner als im Vakuum.
  ---
  **Vakuumkraft:** $F_0 = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{(1{,}602\cdot 10^{-19}\,\text{C})^2}{(0{,}50\cdot 10^{-9}\,\text{m})^2} = 9{,}23\cdot 10^{-10}\,\text{N}$.
  ---
  **In Wasser:** $F = F_0/80 = 1{,}15\cdot 10^{-11}\,\text{N}$. Die Wärmebewegung der Wassermoleküle reicht jetzt aus, um die Ionen zu trennen. Deshalb löst sich Kochsalz in Wasser.
```

```aufgabe
id: p12-coulomb-kern
titel: Zwei Protonen im Heliumkern
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Im Kern eines Heliumatoms sitzen zwei Protonen im Abstand von etwa $2{,}0\cdot 10^{-15}\,\text{m}$.

  a) Wie groß ist die elektrische Abstoßung zwischen ihnen (in N)?

  b) Wie viel Kilogramm müsste ein Körper haben, damit seine Gewichtskraft auf der Erde gleich groß ist?
teile:
  - typ: zahl
    label: a) F in N
    loesung: "1/(4*pi*8.854e-12)*(1.602e-19)^2/(2.0e-15)^2"
    einheit: "N"
    anzeige: '57{,}7'
    fehler:
      - wert: "1/(4*pi*8.854e-12)*(1.602e-19)^2/(2.0e-15)"
        meldung: |
          Der Abstand steht im Nenner im **Quadrat**: $(2{,}0\cdot 10^{-15}\,\text{m})^2 = 4{,}0\cdot 10^{-30}\,\text{m}^2$.
      - wert: "1/(4*pi*8.854e-12)*(1.602e-19)/(2.0e-15)^2"
        meldung: |
          Beide Protonen tragen die Ladung $e$. Im Zähler steht also $e\cdot e = e^2$, nicht nur $e$.
  - typ: zahl
    label: b) Masse in kg
    loesung: "1/(4*pi*8.854e-12)*(1.602e-19)^2/(2.0e-15)^2/9.81"
    einheit: "kg"
    anzeige: '5{,}88'
hinweise:
  - 'Coulomb-Gesetz mit $Q_1 = Q_2 = e = 1{,}602\cdot 10^{-19}\,\text{C}$.'
  - 'Für b) gilt $m\,g = F$, also $m = F/g$ mit $g = 9{,}81\,\text{m/s}^2$.'
loesung: |
  **Ansatz:** Zwei gleichnamige Punktladungen. Das Coulomb-Gesetz liefert die Abstoßung.
  ---
  **a)** $F = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{(1{,}602\cdot 10^{-19}\,\text{C})^2}{(2{,}0\cdot 10^{-15}\,\text{m})^2} = 8{,}99\cdot 10^{9}\cdot\dfrac{2{,}566\cdot 10^{-38}}{4{,}0\cdot 10^{-30}}\,\text{N} = 57{,}7\,\text{N}$.
  ---
  **b)** $m = F/g = 57{,}7\,\text{N} / 9{,}81\,\text{m/s}^2 = 5{,}88\,\text{kg}$.
  ---
  **Deutung:** Auf zwei winzige Teilchen wirkt so viel Kraft wie die Gewichtskraft von knapp sechs Litern Wasser. Den Kern hält trotzdem etwas zusammen: die **starke Kernkraft**, die nur auf sehr kurze Abstände wirkt. Mehr dazu in [16 Der Atomkern: Bausteine, Isotope und Nuklidkarte](/lernen/physik1/wellenoptik-atom-kernphysik/der-atomkern-bausteine-isotope-und-nuklidkarte).
```

```aufgabe
id: p12-coulomb-alltag
titel: Warum merken wir die elektrische Kraft kaum?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Die elektrische Kraft zwischen Proton und Elektron ist rund $10^{39}$-mal stärker als die Gravitation zwischen ihnen. Trotzdem bestimmt im Alltag die Gravitation, ob ein Apfel fällt. Erkläre den scheinbaren Widerspruch in drei bis vier Sätzen. Nenne dabei auch einen Unterschied zwischen beiden Kräften, der für das Abschirmen wichtig ist.
teile:
  - typ: text
    muster: |
      Es gibt zwei Sorten Ladung, aber nur eine Sorte Masse. Gewöhnliche Materie enthält fast gleich viele positive und negative Ladungen. Ihre elektrischen Wirkungen heben sich nach außen fast vollständig auf, Erde und Apfel sind praktisch neutral. Massen addieren sich dagegen immer, deshalb summiert sich die schwache Gravitation der ganzen Erde zu einer spürbaren Kraft. Elektrische Kräfte lassen sich wegen der zwei Vorzeichen abschirmen, zum Beispiel durch einen Faradayschen Käfig. Gravitation lässt sich nicht abschirmen.
hinweise:
  - Wie viele Sorten Masse gibt es, und wie viele Sorten Ladung?
  - Was passiert mit den elektrischen Wirkungen, wenn ein Körper gleich viele Protonen und Elektronen enthält?
loesung: |
  **Ansatz:** Wir vergleichen, wie sich die beiden Kräfte über viele Teilchen aufsummieren.
  ---
  **Ladung:** Positive und negative Ladungen kommen fast gleich oft vor. Ihre Kräfte heben sich nach außen auf, große Körper sind praktisch neutral.
  ---
  **Masse:** Es gibt nur eine Sorte. Die Gravitation aller Teilchen der Erde addiert sich, so wird die schwache Einzelwirkung riesig.
  ---
  **Abschirmen:** Weil es zwei Ladungsvorzeichen gibt, kann eine leitende Hülle elektrische Wirkungen aufheben. Gegen Gravitation gibt es keine Abschirmung.
```

```aufgabe
id: p12-coulomb-diagramm
titel: Messwerte einer Drehwaage auswerten
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Mit einer Drehwaage wurde die Abstoßung zwischen zwei gleich geladenen Kugeln bei verschiedenen Abständen gemessen. Das Diagramm zeigt die Messpunkte und die passende Kurve.

  a) Lies die Kraft bei $r = 5\,\text{cm}$ ab (in mN).

  b) Welche Kraft erwartest du nach dem Coulomb-Gesetz bei $r = 15\,\text{cm}$ (in mN)? Nutze dazu nur den Wert aus a).

  c) Berechne aus dem Wert bei $5\,\text{cm}$ die Ladung jeder Kugel (in nC).
plot:
  x: [0, 16]
  y: [0, 30]
  achsen: { x: "r in cm", y: "F in mN" }
  graphen:
    - { f: "224.7/x^2", von: 2.7, bis: 16, farbe: 0 }
  punkte:
    - { x: 3, y: 25.0, label: "25,0" }
    - { x: 5, y: 9.0 }
    - { x: 10, y: 2.25, label: "2,25" }
teile:
  - typ: zahl
    label: a) F bei 5 cm in mN
    loesung: "9.0"
    einheit: "mN"
    toleranz: 0.3
    fehler:
      - wert: "5"
        meldung: |
          Du hast den Abstand abgelesen. Gesucht ist der Wert auf der **senkrechten** Achse über $r = 5\,\text{cm}$.
  - typ: zahl
    label: b) F bei 15 cm in mN
    loesung: "9.0/3^2"
    einheit: "mN"
    anzeige: '1{,}0'
    fehler:
      - wert: "9.0/3"
        meldung: |
          Der dreifache Abstand gibt nicht ein Drittel, sondern ein **Neuntel** der Kraft, denn $F \sim 1/r^2$.
  - typ: zahl
    label: c) Q in nC
    loesung: "0.05*sqrt(9.0e-3/8.99e9)*1e9"
    einheit: "nC"
    anzeige: '50'
hinweise:
  - Suche auf der waagrechten Achse $5\,\text{cm}$ und lies die Höhe des Messpunkts ab.
  - 'Für b): $15\,\text{cm}$ ist das Dreifache von $5\,\text{cm}$. Für c): Stelle $F = kQ^2/r^2$ nach $Q$ um.'
loesung: |
  **Ansatz:** Das Diagramm liefert einen Messwert. Mit dem Coulomb-Gesetz schließen wir auf andere Abstände und auf die Ladung.
  ---
  **a)** Über $r = 5\,\text{cm}$ liegt der Messpunkt bei $F = 9{,}0\,\text{mN}$.
  ---
  **b)** Dreifacher Abstand heißt Kraft durch $3^2 = 9$: $F = 9{,}0\,\text{mN}/9 = 1{,}0\,\text{mN}$. Zur Kontrolle: Vom Punkt bei $5\,\text{cm}$ zum Punkt bei $10\,\text{cm}$ sinkt die Kraft von $9{,}0$ auf $2{,}25\,\text{mN}$, also genau auf ein Viertel.
  ---
  **c)** $Q = r\sqrt{F/k} = 0{,}050\,\text{m}\cdot\sqrt{\dfrac{9{,}0\cdot 10^{-3}\,\text{N}}{8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2}} = 0{,}050\,\text{m}\cdot 1{,}0\cdot 10^{-6}\,\tfrac{\text{C}}{\text{m}} = 5{,}0\cdot 10^{-8}\,\text{C} = 50\,\text{nC}$.
  ---
  **Probe:** Mit $Q = 50\,\text{nC}$ und $r = 0{,}030\,\text{m}$ folgt $F = 25\,\text{mN}$. Das passt zum ersten Messpunkt.
```

```aufgabe
id: p12-coulomb-fermi
titel: "Fermi-Abschätzung: zwei geladene Menschen"
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Stell dir vor, zwei Menschen mit je $70\,\text{kg}$ hätten jeweils $1\,\%$ mehr Elektronen als Protonen. Sie stehen $1{,}0\,\text{m}$ voneinander entfernt. Ein Kilogramm Körpermasse enthält rund $3\cdot 10^{26}$ Elektronen. Behandle beide Menschen grob als Punktladungen.

  a) Welche Ladung trägt jeder Mensch (in $10^{7}\,\text{C}$)?

  b) Wie groß ist die Abstoßung? Gib nur die Zehnerpotenz an, also den gerundeten Exponenten $n$ in $10^{n}\,\text{N}$.

  c) Die Gravitation zwischen Erde und Mond beträgt etwa $2{,}0\cdot 10^{20}\,\text{N}$. Wie viele Male größer ist die Abstoßung der beiden Menschen (in $10^{4}$)?
teile:
  - typ: zahl
    label: a) Q in 10⁷ C
    loesung: "70*3e26*0.01*1.602e-19/1e7"
    anzeige: '3{,}36'
    fehler:
      - wert: "70*3e26*1.602e-19/1e7"
        meldung: |
          Nur **ein Prozent** der Elektronen ist überschüssig. Multipliziere die Gesamtzahl noch mit $0{,}01$.
  - typ: zahl
    label: b) Exponent n
    loesung: "round(lg(8.99e9*(70*3e26*0.01*1.602e-19)^2/1.0^2))"
    toleranz: 0.1
    anzeige: '25'
  - typ: zahl
    label: c) Verhältnis in 10⁴
    loesung: "8.99e9*(70*3e26*0.01*1.602e-19)^2/2.0e20/1e4"
    anzeige: '5{,}1'
    toleranz: 0.3
hinweise:
  - 'Überschüssige Elektronen: $70\cdot 3\cdot 10^{26}\cdot 0{,}01$. Jedes trägt die Ladung $e$.'
  - 'Dann das Coulomb-Gesetz mit $r = 1{,}0\,\text{m}$. Für die Zehnerpotenz hilft der Zehnerlogarithmus.'
loesung: |
  **Modell:** Grobe Abschätzung. Jeder Mensch ist eine Punktladung, der Abstand ist $1{,}0\,\text{m}$. Es kommt nur auf die Größenordnung an.
  ---
  **a)** Überschüssige Elektronen: $N = 70\cdot 3\cdot 10^{26}\cdot 0{,}01 = 2{,}1\cdot 10^{26}$. Ladung: $Q = N e = 2{,}1\cdot 10^{26}\cdot 1{,}602\cdot 10^{-19}\,\text{C} = 3{,}4\cdot 10^{7}\,\text{C}$.
  ---
  **b)** $F = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{(3{,}4\cdot 10^{7}\,\text{C})^2}{(1{,}0\,\text{m})^2} \approx 1{,}0\cdot 10^{25}\,\text{N}$. Der Exponent ist $25$.
  ---
  **c)** $1{,}0\cdot 10^{25}\,\text{N} / 2{,}0\cdot 10^{20}\,\text{N} \approx 5\cdot 10^{4}$.
  ---
  **Deutung:** Ein Prozent Ungleichgewicht gäbe eine Kraft, die rund fünfzigtausendmal größer ist als die Kraft, die den Mond auf seiner Bahn hält. Materie ist deshalb in Wirklichkeit fast perfekt neutral. Der Ballon aus der Lektion [Elektrische Ladung und Elementarladung](/lernen/physik1/elektrostatik/elektrische-ladung-und-elementarladung) hatte nur rund ein Billionstel Überschuss.
```

## Mehrere Ladungen: Kräfte als Vektorsumme

```aufgabe
id: p12-4-check
art: check
titel: "Vorwissen: Betrag eines Vektors aus Komponenten"
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Kraft hat die Komponenten $F_x = -6{,}0\,\text{N}$ und $F_y = 8{,}0\,\text{N}$. Wie groß ist ihr Betrag in N?

  Herkunft: Mathematik, [Betrag, Abstand und Einheitsvektor](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor)
teile:
  - typ: zahl
    loesung: "sqrt((-6)^2+8^2)"
    einheit: "N"
    anzeige: '10'
    fehler:
      - wert: "2"
        meldung: |
          Du hast die Komponenten mit Vorzeichen addiert. Der Betrag ist die Länge des Pfeils. Die Komponenten stehen senkrecht aufeinander, also gilt der Satz des Pythagoras.
      - wert: "14"
        meldung: |
          Komponenten, die senkrecht aufeinander stehen, darf man nicht einfach addieren. Sie sind die Katheten eines rechtwinkligen Dreiecks.
hinweise:
  - 'Betrag: $|\vec F| = \sqrt{F_x^2 + F_y^2}$. Das Vorzeichen verschwindet beim Quadrieren.'
loesung: |
  Der Betrag ist die Länge des Pfeils. Mit dem Satz des Pythagoras: $|\vec F| = \sqrt{(-6{,}0\,\text{N})^2 + (8{,}0\,\text{N})^2}$.
  ---
  $|\vec F| = \sqrt{36 + 64}\,\text{N} = \sqrt{100}\,\text{N} = 10\,\text{N}$.
```

Bisher gab es immer nur zwei Ladungen. In Wirklichkeit wirken oft viele Ladungen gleichzeitig auf eine
Ladung. Wie rechnet man dann? Die Antwort ist einfach und gilt in der ganzen Elektrostatik.

:::satz[Superpositionsprinzip]
Wirken mehrere Ladungen $Q_1, Q_2, \ldots$ auf eine Ladung $q$, dann berechnet man jede Einzelkraft
$\vec F_1, \vec F_2, \ldots$ mit dem Coulomb-Gesetz so, als wären die anderen Ladungen nicht da. Die
gesamte Kraft auf $q$ ist die **Vektorsumme** $\vec F = \vec F_1 + \vec F_2 + \ldots$
:::

**Superposition** (lateinisch, also: Überlagerung) heißt: Die Einzelwirkungen stören einander nicht,
sie addieren sich nur. Der Pfeil über $\vec F$ zeigt an, dass $\vec F$ ein **Vektor** ist, also eine Größe
mit Betrag und Richtung. Wie man Vektoren addiert, steht in der Mathematik-Lektion
[Rechnen mit Vektoren: Addition, Vielfache und Rechengesetze](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze).

**Beispiel:** Zwei Ladungen ziehen an $q$, eine nach links, eine nach rechts. Die Kräfte heben einander
ganz oder teilweise auf. **Nichtbeispiel:** Man darf die Beträge **nicht** einfach addieren, wenn die
Kräfte in verschiedene Richtungen zeigen. Das Ergebnis wäre zu groß.

### Alle Ladungen auf einer Geraden

Liegen alle Ladungen auf einer Geraden, zeigen alle Kräfte entlang dieser Geraden. Dann genügt eine
Achse, zum Beispiel die $x$-Achse. Jede Kraft bekommt ein Vorzeichen: plus für die $+x$-Richtung, minus
für die $-x$-Richtung. Die Gesamtkraft ist dann die Summe mit diesen Vorzeichen.

:::beispiel[Drei Ladungen auf einer Geraden]
Auf der $x$-Achse sitzen $Q_1 = +3{,}0\,\mu\text{C}$ bei $x = 0$, $Q_2 = +1{,}0\,\mu\text{C}$ bei $x = 0{,}20\,\text{m}$
und $Q_3 = -2{,}0\,\mu\text{C}$ bei $x = 0{,}50\,\text{m}$. Welche Kraft wirkt auf $Q_2$?

**Schritt 1, Skizze und Richtungen:** $Q_1$ und $Q_2$ sind gleichnamig. $Q_1$ stößt $Q_2$ also nach rechts
weg ($+x$). $Q_3$ und $Q_2$ sind ungleichnamig. $Q_3$ zieht $Q_2$ also zu sich, auch nach rechts ($+x$).

**Schritt 2, Beträge:** Der Abstand $Q_1$ bis $Q_2$ ist $0{,}20\,\text{m}$, der Abstand $Q_3$ bis $Q_2$ ist $0{,}30\,\text{m}$.
$$F_{12} = 8{,}99\cdot 10^{9}\cdot\frac{3{,}0\cdot 10^{-6}\cdot 1{,}0\cdot 10^{-6}}{0{,}20^2}\,\text{N} = 0{,}674\,\text{N},\qquad
F_{32} = 8{,}99\cdot 10^{9}\cdot\frac{2{,}0\cdot 10^{-6}\cdot 1{,}0\cdot 10^{-6}}{0{,}30^2}\,\text{N} = 0{,}200\,\text{N}.$$

**Schritt 3, mit Vorzeichen addieren:** Beide zeigen in $+x$-Richtung:
$F = +0{,}674\,\text{N} + 0{,}200\,\text{N} = +0{,}874\,\text{N}$. Die Kraft zeigt nach rechts.
:::

:::achtung[Fehler: Das Vorzeichen des Ladungsprodukts als Achsenrichtung genommen]
**Falsche Rechnung:** $Q_1 = +2{,}0\,\mu\text{C}$ sitzt bei $x = 0$, $Q_2 = -1{,}0\,\mu\text{C}$ bei $x = 0{,}30\,\text{m}$.
Gesucht ist die Kraft auf $Q_1$. Jemand rechnet $F = k\cdot\dfrac{(+2{,}0)\cdot(-1{,}0)\cdot 10^{-12}}{0{,}30^2}\,\text{N} = -0{,}20\,\text{N}$
und schließt: „Die Kraft zeigt in $-x$-Richtung.“

**Richtig:** Das Minuszeichen des Produkts sagt nur „Anziehung“. Es sagt nicht, in welche Richtung der
Achse die Kraft zeigt. $Q_2$ zieht $Q_1$ zu sich, und $Q_2$ liegt rechts. Die Kraft auf $Q_1$ zeigt also in
$+x$-Richtung, mit $0{,}20\,\text{N}$. Rechne darum immer mit Beträgen und lies die Richtung aus der Skizze ab.
:::

```aufgabe
id: p12-superposition-symmetrie
titel: Eine Ladung genau in der Mitte
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Zwei gleich große positive Ladungen $+Q$ sitzen im Abstand $d$. Genau in der Mitte zwischen ihnen liegt eine kleine positive Probeladung $q$. Welche Kraft wirkt auf $q$?
teile:
  - typ: auswahl
    optionen:
      - "Keine Kraft, die beiden Einzelkräfte sind gleich groß und entgegengesetzt."
      - "Die doppelte Kraft einer Einzelladung, weil zwei Ladungen wirken."
      - "Eine Kraft senkrecht zur Verbindungslinie, weil $q$ nach keiner Seite ausweichen kann."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Beträge addieren sich nur, wenn beide Kräfte in **dieselbe** Richtung zeigen. Hier stößt die linke Ladung nach rechts und die rechte nach links.
      - wert: 2
        meldung: |
          Jede Coulomb-Kraft zeigt entlang der Verbindungslinie der beiden beteiligten Ladungen. Hier liegen alle drei Ladungen auf einer Geraden, also gibt es keine Komponente senkrecht dazu.
hinweise:
  - Zeichne beide Kraftpfeile auf $q$ ein. Wie lang sind sie, und wohin zeigen sie?
loesung: |
  **Ansatz:** Superposition. Wir bestimmen beide Einzelkräfte auf $q$.
  ---
  Beide Abstände sind $d/2$, beide Ladungen gleich. Also sind die Kräfte gleich groß. Die linke Ladung stößt $q$ nach rechts, die rechte nach links. Die Summe ist null.
```

```aufgabe
id: p12-kraft-mitte
titel: Probeladung zwischen ungleichnamigen Ladungen
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Die Ladungen $+4{,}0\,\text{nC}$ und $-4{,}0\,\text{nC}$ sind $10\,\text{cm}$ voneinander entfernt. Genau in der Mitte liegt die Probeladung $q = +1{,}0\,\text{nC}$. Wie groß ist die Kraft auf $q$ (in µN)?
teile:
  - typ: zahl
    loesung: "2*8.99e9*4.0e-9*1.0e-9/0.05^2*1e6"
    einheit: "µN"
    anzeige: '28{,}8'
    fehler:
      - wert: "0"
        meldung: |
          Die beiden Kräfte heben einander **nicht** auf. Die positive Ladung stößt $q$ weg, die negative zieht $q$ an. Beide Kräfte zeigen zur negativen Ladung hin.
      - wert: "8.99e9*4.0e-9*1.0e-9/0.05^2*1e6"
        meldung: |
          Das ist nur die Kraft **einer** der beiden Ladungen. Die zweite Kraft zeigt in dieselbe Richtung und kommt dazu.
      - wert: "2*8.99e9*4.0e-9*1.0e-9/0.10^2*1e6"
        meldung: |
          Der Abstand zu jeder Ladung ist der halbe Abstand der beiden Ladungen, also $5{,}0\,\text{cm}$.
hinweise:
  - Bestimme zuerst die Richtung jeder Einzelkraft auf $q$. Dann den Abstand von $q$ zu jeder Ladung.
loesung: |
  **Richtungen:** $+4\,\text{nC}$ stößt $q$ von sich weg, also zur negativen Ladung hin. $-4\,\text{nC}$ zieht $q$ an, ebenfalls zur negativen Ladung hin. Beide Kräfte zeigen in dieselbe Richtung.
  ---
  **Betrag einer Einzelkraft:** $F_1 = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{4{,}0\cdot 10^{-9}\,\text{C}\cdot 1{,}0\cdot 10^{-9}\,\text{C}}{(0{,}050\,\text{m})^2} = 1{,}44\cdot 10^{-5}\,\text{N}$.
  ---
  **Summe:** $F = 2\cdot 1{,}44\cdot 10^{-5}\,\text{N} = 2{,}88\cdot 10^{-5}\,\text{N} = 28{,}8\,\mu\text{N}$, zur negativen Ladung hin.
```

```aufgabe
id: p12-drei-ladungen
titel: Drei Ladungen auf einer Geraden
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Auf der $x$-Achse sitzen $Q_1 = +2{,}0\,\mu\text{C}$ bei $x = 0$, $Q_2 = -3{,}0\,\mu\text{C}$ bei $x = 0{,}50\,\text{m}$ und $Q_3 = +1{,}0\,\mu\text{C}$ bei $x = 1{,}00\,\text{m}$. Berechne die resultierende Kraft auf $Q_3$ in N. Gib sie mit Vorzeichen an: positiv heißt $+x$-Richtung.
teile:
  - typ: zahl
    loesung: "8.99e9*(2e-6*1e-6/1.00^2 - 3e-6*1e-6/0.50^2)"
    einheit: "N"
    anzeige: '-0{,}0899'
    fehler:
      - wert: "8.99e9*(2e-6*1e-6/1.00^2 + 3e-6*1e-6/0.50^2)"
        meldung: |
          Die beiden Kräfte zeigen in **entgegengesetzte** Richtungen. $Q_1$ stößt $Q_3$ nach rechts, $Q_2$ zieht $Q_3$ nach links.
      - wert: "8.99e9*(2e-6*1e-6/0.50^2 - 3e-6*1e-6/0.50^2)"
        meldung: |
          Der Abstand von $Q_1$ zu $Q_3$ ist $1{,}00\,\text{m}$, nicht $0{,}50\,\text{m}$. Miss jeden Abstand von der Ladung bis zu $Q_3$.
      - wert: "-8.99e9*(2e-6*1e-6/1.00^2 - 3e-6*1e-6/0.50^2)"
        meldung: |
          Der Betrag stimmt, das Vorzeichen nicht. Die stärkere Kraft kommt von $Q_2$, und $Q_2$ zieht $Q_3$ nach **links**.
hinweise:
  - '$Q_1$ stößt $Q_3$ ab (Kraft in $+x$), $Q_2$ zieht $Q_3$ an (Kraft in $-x$).'
  - 'Abstände: $Q_1$ bis $Q_3$ ist $1{,}00\,\text{m}$, $Q_2$ bis $Q_3$ ist $0{,}50\,\text{m}$.'
loesung: |
  **Ansatz:** Superposition auf einer Geraden. Beträge mit dem Coulomb-Gesetz, Richtungen aus der Skizze.
  ---
  **Kraft von $Q_1$** (abstoßend, $+x$): $F_{13} = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{2{,}0\cdot 10^{-6}\,\text{C}\cdot 1{,}0\cdot 10^{-6}\,\text{C}}{(1{,}00\,\text{m})^2} = 0{,}0180\,\text{N}$.
  ---
  **Kraft von $Q_2$** (anziehend, $-x$): $F_{23} = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{3{,}0\cdot 10^{-6}\,\text{C}\cdot 1{,}0\cdot 10^{-6}\,\text{C}}{(0{,}50\,\text{m})^2} = 0{,}1079\,\text{N}$.
  ---
  **Summe:** $F = +0{,}0180\,\text{N} - 0{,}1079\,\text{N} = -0{,}0899\,\text{N}$. Die Kraft zeigt mit rund $0{,}090\,\text{N}$ nach links, zu $Q_2$ hin. Plausibel: $Q_2$ ist näher und größer.
```

### Ladungen in der Ebene

Liegen die Ladungen nicht auf einer Geraden, zeigen die Einzelkräfte in verschiedene Richtungen. Dann
zerlegt man jede Kraft in eine $x$- und eine $y$-Komponente. Die Komponenten addiert man getrennt. Am
Ende setzt man Betrag und Richtung wieder zusammen. Sinus und Kosinus im rechtwinkligen Dreieck
wiederholst du in [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).

:::beispiel[Zwei Kräfte im rechten Winkel]
Eine Ladung $q = +2{,}0\,\mu\text{C}$ sitzt im Ursprung. $Q_A = +4{,}0\,\mu\text{C}$ liegt bei $(0{,}30\,|\,0)\,\text{m}$,
$Q_B = -3{,}0\,\mu\text{C}$ bei $(0\,|\,0{,}40)\,\text{m}$. Gesucht sind Betrag und Richtung der Kraft auf $q$.

**Schritt 1, Richtungen:** $Q_A$ ist gleichnamig und stößt $q$ von sich weg, also nach links ($-x$).
$Q_B$ ist ungleichnamig und zieht $q$ zu sich, also nach oben ($+y$).

**Schritt 2, Beträge:**
$F_A = 8{,}99\cdot 10^{9}\cdot\dfrac{4{,}0\cdot 10^{-6}\cdot 2{,}0\cdot 10^{-6}}{0{,}30^2}\,\text{N} = 0{,}799\,\text{N}$ und
$F_B = 8{,}99\cdot 10^{9}\cdot\dfrac{3{,}0\cdot 10^{-6}\cdot 2{,}0\cdot 10^{-6}}{0{,}40^2}\,\text{N} = 0{,}337\,\text{N}$.

**Schritt 3, Komponenten:** $F_x = -0{,}799\,\text{N}$ und $F_y = +0{,}337\,\text{N}$.

**Schritt 4, zusammensetzen:** Betrag $F = \sqrt{0{,}799^2 + 0{,}337^2}\,\text{N} = 0{,}867\,\text{N}$. Für den Winkel
gegen die $-x$-Richtung gilt $\tan\alpha = 0{,}337/0{,}799 = 0{,}422$, also $\alpha = 22{,}9^\circ$. Die Kraft
zeigt nach links und $22{,}9^\circ$ nach oben geneigt.
:::

```plot
x: [-1.2, 1.0]
y: [-0.3, 1.1]
gleich: true
vektoren:
  - { von: [0, 0], nach: [-0.799, 0], label: "F_A", farbe: 0 }
  - { von: [0, 0], nach: [0, 0.337], label: "F_B", farbe: 3 }
  - { von: [0, 0], nach: [-0.799, 0.337], label: "F", farbe: 1 }
strecken:
  - { von: [-0.799, 0], nach: [-0.799, 0.337], gestrichelt: true }
  - { von: [0, 0.337], nach: [-0.799, 0.337], gestrichelt: true }
punkte:
  - { x: 0, y: 0, label: "q", farbe: 1 }
  - { x: 0.3, y: 0, label: "Q_A = +4 µC", farbe: 1 }
  - { x: 0, y: 0.4, label: "Q_B = −3 µC", farbe: 2 }
beschriftung: "Kräfte auf die Ladung q im Ursprung. Die Pfeillängen sind in Newton abgetragen, ein Teilstrich entspricht 0,2 N. Die Ladungen Q_A und Q_B sind nur zur Orientierung eingezeichnet. Q_A rechts stößt q nach links (F_A, blau). Q_B oben zieht q nach oben (F_B, violett). Die resultierende Kraft F (orange) ist die Diagonale des Rechtecks aus beiden Pfeilen."
```

:::achtung[Fehler: Beträge im rechten Winkel einfach addiert]
**Falsche Rechnung:** Auf eine Ladung wirken $3{,}0\,\text{mN}$ nach rechts und $4{,}0\,\text{mN}$ nach oben.
Jemand schreibt: „Gesamtkraft $3{,}0\,\text{mN} + 4{,}0\,\text{mN} = 7{,}0\,\text{mN}$.“

**Richtig:** Die Kräfte stehen senkrecht aufeinander. Die Resultierende ist die Hypotenuse des
rechtwinkligen Dreiecks: $\sqrt{3{,}0^2 + 4{,}0^2}\,\text{mN} = 5{,}0\,\text{mN}$. Einfach addieren darf man nur
Kräfte, die in **dieselbe** Richtung zeigen.
:::

:::merke[Rezept: Kraft von mehreren Ladungen]
1. **Skizze:** Alle Ladungen einzeichnen, die Ladung markieren, auf die die Kraft wirkt.
2. **Richtungen:** Für jede Einzelkraft mit „gleichnamig stößt ab, ungleichnamig zieht an“ einen Pfeil zeichnen.
3. **Beträge:** Jede Einzelkraft mit dem Coulomb-Gesetz ausrechnen, nur mit Beträgen.
4. **Addieren:** Auf einer Geraden mit Vorzeichen. In der Ebene in Komponenten zerlegen und getrennt addieren.
5. **Zusammensetzen:** Betrag mit Pythagoras, Richtung mit dem Tangens.
:::

```aufgabe
id: p12-kraft-rechtwinklig
titel: Zwei anziehende Ladungen im rechten Winkel
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Eine Ladung $q = -1{,}0\,\mu\text{C}$ sitzt im Ursprung. $Q_A = +2{,}0\,\mu\text{C}$ liegt bei $(0{,}20\,|\,0)\,\text{m}$, $Q_B = +3{,}0\,\mu\text{C}$ bei $(0\,|\,0{,}30)\,\text{m}$.

  a) Berechne den Betrag der Kraft auf $q$ (in N).

  b) Unter welchem Winkel gegen die $+x$-Achse zeigt sie (in Grad)?
teile:
  - typ: zahl
    label: a) F in N
    loesung: "sqrt((8.99e9*2e-6*1e-6/0.20^2)^2 + (8.99e9*3e-6*1e-6/0.30^2)^2)"
    einheit: "N"
    anzeige: '0{,}540'
    fehler:
      - wert: "8.99e9*2e-6*1e-6/0.20^2 + 8.99e9*3e-6*1e-6/0.30^2"
        meldung: |
          Du hast die Beträge addiert. Die beiden Kräfte stehen aber senkrecht aufeinander. Die Resultierende ist die Hypotenuse, also Pythagoras.
  - typ: zahl
    label: b) Winkel in Grad
    loesung: "inGrad(atan((3e-6/0.30^2)/(2e-6/0.20^2)))"
    einheit: "°"
    anzeige: '33{,}7'
    fehler:
      - wert: "inGrad(atan((2e-6/0.20^2)/(3e-6/0.30^2)))"
        meldung: |
          Du hast den Winkel gegen die $y$-Achse berechnet. Gegen die $x$-Achse gilt $\tan\alpha = F_y/F_x$.
hinweise:
  - '$q$ ist negativ, beide anderen Ladungen positiv. Beide ziehen $q$ zu sich: $Q_A$ nach rechts, $Q_B$ nach oben.'
  - 'Berechne $F_x$ und $F_y$ einzeln. Dann $F = \sqrt{F_x^2 + F_y^2}$ und $\tan\alpha = F_y/F_x$.'
gefuehrt:
  - text: Wohin zeigen die beiden Einzelkräfte auf $q$?
    erklaerung: '$q$ und $Q_A$ sind ungleichnamig, $Q_A$ zieht $q$ nach rechts ($+x$). $q$ und $Q_B$ sind ungleichnamig, $Q_B$ zieht $q$ nach oben ($+y$).'
  - text: Berechne $F_x$, die Kraft von $Q_A$, in N.
    teil:
      typ: zahl
      loesung: "8.99e9*2e-6*1e-6/0.20^2"
      einheit: "N"
      fehler:
        - wert: "8.99e9*2e-6*1e-6/0.20"
          meldung: Der Abstand muss quadriert werden.
    erklaerung: '$F_x = 8{,}99\cdot 10^{9}\cdot\dfrac{2{,}0\cdot 10^{-6}\cdot 1{,}0\cdot 10^{-6}}{0{,}20^2}\,\text{N} = 0{,}449\,\text{N}$.'
  - text: Berechne $F_y$, die Kraft von $Q_B$, in N.
    teil:
      typ: zahl
      loesung: "8.99e9*3e-6*1e-6/0.30^2"
      einheit: "N"
    erklaerung: '$F_y = 8{,}99\cdot 10^{9}\cdot\dfrac{3{,}0\cdot 10^{-6}\cdot 1{,}0\cdot 10^{-6}}{0{,}30^2}\,\text{N} = 0{,}300\,\text{N}$.'
  - text: Setze die Komponenten zusammen. Wie groß ist der Betrag in N?
    teil:
      typ: zahl
      loesung: "sqrt((8.99e9*2e-6*1e-6/0.20^2)^2 + (8.99e9*3e-6*1e-6/0.30^2)^2)"
      einheit: "N"
    erklaerung: '$F = \sqrt{0{,}449^2 + 0{,}300^2}\,\text{N} = 0{,}540\,\text{N}$. Der Winkel folgt aus $\tan\alpha = 0{,}300/0{,}449$, also $\alpha = 33{,}7^\circ$.'
loesung: |
  **Ansatz:** Superposition in der Ebene. Beide Kräfte stehen senkrecht aufeinander, also sind sie schon die Komponenten.
  ---
  **Komponenten:** $F_x = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{2{,}0\cdot 10^{-6}\,\text{C}\cdot 1{,}0\cdot 10^{-6}\,\text{C}}{(0{,}20\,\text{m})^2} = 0{,}449\,\text{N}$ und $F_y = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{3{,}0\cdot 10^{-6}\,\text{C}\cdot 1{,}0\cdot 10^{-6}\,\text{C}}{(0{,}30\,\text{m})^2} = 0{,}300\,\text{N}$.
  ---
  **a)** $F = \sqrt{(0{,}449\,\text{N})^2 + (0{,}300\,\text{N})^2} = 0{,}540\,\text{N}$.
  ---
  **b)** $\tan\alpha = \dfrac{F_y}{F_x} = \dfrac{0{,}300\,\text{N}}{0{,}449\,\text{N}} = 0{,}667$, also $\alpha = 33{,}7^\circ$ gegen die $+x$-Achse. Plausibel: Die $x$-Komponente ist größer, also liegt der Winkel unter $45^\circ$.
```

```aufgabe
id: p12-fehler-finden-pythagoras
titel: Fehler finden in einer Vektorsumme
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Eine Mitschülerin berechnet die Kraft auf eine Ladung, auf die zwei andere Ladungen wirken. Die erste Kraft hat $1{,}2\,\text{N}$ und zeigt nach rechts. Die zweite hat $0{,}50\,\text{N}$ und zeigt senkrecht nach unten. Sie schreibt: „Gesamtkraft $1{,}2\,\text{N} + 0{,}50\,\text{N} = 1{,}7\,\text{N}$.“

  a) Welchen Wert hat die Gesamtkraft wirklich (in N)?

  b) Erkläre in einem Satz, was falsch war.
teile:
  - typ: zahl
    label: a) F in N
    loesung: "sqrt(1.2^2+0.50^2)"
    einheit: "N"
    anzeige: '1{,}3'
    fehler:
      - wert: "1.7"
        meldung: |
          Das ist genau der Fehler der Mitschülerin. Senkrecht aufeinander stehende Kräfte addiert man mit dem Satz des Pythagoras.
      - wert: "0.7"
        meldung: |
          Subtrahieren darf man nur Kräfte, die genau entgegengesetzt zeigen. Hier stehen sie im rechten Winkel zueinander.
  - typ: text
    label: b) Begründung
    muster: |
      Sie hat die Beträge wie Zahlen addiert, obwohl die Kräfte in verschiedene Richtungen zeigen. Kräfte sind Vektoren, im rechten Winkel ist die Summe die Hypotenuse: $\sqrt{1{,}2^2 + 0{,}50^2}\,\text{N} = 1{,}3\,\text{N}$.
hinweise:
  - Zeichne die beiden Pfeile hintereinander. Welche Figur entsteht?
  - Die Resultierende ist die Verbindung vom Anfang des ersten zum Ende des zweiten Pfeils, also die Hypotenuse.
loesung: |
  **Ansatz:** Kräfte sind Vektoren. Man addiert sie als Pfeile, nicht als Zahlen.
  ---
  **Rechnung:** Die Pfeile bilden ein rechtwinkliges Dreieck mit den Katheten $1{,}2\,\text{N}$ und $0{,}50\,\text{N}$. Also $F = \sqrt{(1{,}2\,\text{N})^2 + (0{,}50\,\text{N})^2} = \sqrt{1{,}69}\,\text{N} = 1{,}3\,\text{N}$.
  ---
  **Fehler:** Die Mitschülerin hat übersehen, dass die Kräfte senkrecht aufeinander stehen. Ihre Summe $1{,}7\,\text{N}$ wäre nur richtig, wenn beide nach rechts zeigen würden.
```

```reflexion
frage: Warum darf man beim Superpositionsprinzip jede Einzelkraft so berechnen, als wären die anderen Ladungen nicht da? Und wann gilt das für Ladungen auf einem Leiter nicht mehr ohne Weiteres?
antwort: |
  Die Coulomb-Kraft zwischen zwei Ladungen hängt nur von diesen beiden Ladungen und ihrem Abstand ab. Eine dritte Ladung ändert daran nichts, sie fügt nur eine weitere Kraft hinzu. Das zeigen die Experimente. Bei Ladungen auf Leitern muss man aber aufpassen: Eine nahe Ladung **verschiebt** durch Influenz die Ladungen im Leiter. Dann ändern sich die Ladungsverteilung und damit die Einzelkräfte selbst. Das Superpositionsprinzip gilt weiterhin, aber man muss die neue Verteilung kennen.
```

```aufgabe
id: p12-dreieck-gleichseitig
titel: Drei Ladungen im gleichseitigen Dreieck
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Drei gleiche Ladungen $Q = +2{,}0\,\mu\text{C}$ sitzen an den Ecken eines gleichseitigen Dreiecks mit der Seitenlänge $10\,\text{cm}$. Wie groß ist die Kraft auf eine der Ladungen (in N)? In welche Richtung zeigt sie?
teile:
  - typ: zahl
    label: F in N
    loesung: "2*8.99e9*(2.0e-6)^2/0.10^2*cos(inRad(30))"
    einheit: "N"
    anzeige: '6{,}23'
    fehler:
      - wert: "2*8.99e9*(2.0e-6)^2/0.10^2"
        meldung: |
          Du hast die beiden Beträge addiert. Die Kräfte schließen aber einen Winkel von $60^\circ$ ein. Nur ihre Anteile entlang der Winkelhalbierenden addieren sich voll.
      - wert: "8.99e9*(2.0e-6)^2/0.10^2"
        meldung: |
          Das ist nur die Kraft **einer** Nachbarladung. Auf jede Ecke wirken zwei Nachbarn.
  - typ: auswahl
    label: Richtung
    optionen:
      - "vom Dreiecksmittelpunkt weg, entlang der Winkelhalbierenden"
      - "zum Dreiecksmittelpunkt hin"
      - "entlang einer der Dreiecksseiten"
    richtig: [0]
hinweise:
  - Beide Nachbarladungen stoßen die Ladung ab. Jede Einzelkraft hat denselben Betrag, berechne ihn zuerst.
  - Zerlege jede Einzelkraft in einen Anteil entlang der Winkelhalbierenden und einen quer dazu. Die Queranteile heben sich auf. Der Winkel zur Winkelhalbierenden ist $30^\circ$.
loesung: |
  **Ansatz:** Superposition zweier gleich großer Kräfte, die einen Winkel von $60^\circ$ einschließen. Wegen der Symmetrie zeigt die Summe entlang der Winkelhalbierenden.
  ---
  **Einzelkraft:** $F_1 = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{(2{,}0\cdot 10^{-6}\,\text{C})^2}{(0{,}10\,\text{m})^2} = 3{,}60\,\text{N}$.
  ---
  **Zerlegen:** Jede Einzelkraft liegt $30^\circ$ neben der Winkelhalbierenden. Ihr Anteil entlang der Winkelhalbierenden ist $F_1\cos 30^\circ = 3{,}60\,\text{N}\cdot 0{,}866 = 3{,}11\,\text{N}$. Die Anteile quer dazu sind gleich groß und entgegengesetzt, sie heben sich auf.
  ---
  **Summe:** $F = 2\cdot 3{,}11\,\text{N} = 6{,}23\,\text{N}$. Die Kraft zeigt vom Mittelpunkt des Dreiecks weg. Probe: Sie ist kleiner als $2\cdot 3{,}60\,\text{N} = 7{,}19\,\text{N}$, wie es bei einem Winkel zwischen den Kräften sein muss.
```

```aufgabe
id: p12-kugelpendel-zwei
titel: Zwei geladene Kugeln an Fäden
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Zwei gleiche kleine Kugeln mit je $0{,}50\,\text{g}$ hängen an zwei isolierenden Fäden der Länge $30\,\text{cm}$ am selben Punkt. Beide tragen dieselbe Ladung. Sie stoßen einander ab, bis jeder Faden $10^\circ$ gegen die Senkrechte geneigt ist. Das Freikörperbild zeigt die Kräfte auf die rechte Kugel.

  a) Wie weit sind die Kugeln voneinander entfernt (in cm)?

  b) Wie groß ist die Coulomb-Kraft (in mN)?

  c) Welche Ladung trägt jede Kugel (in nC)?
plot:
  x: [-1.0, 1.0]
  y: [-1.5, 0.6]
  gleich: true
  strecken:
    - { von: [0, 0.4], nach: [0.174, -0.585], gestrichelt: true }
    - { von: [0, 0.4], nach: [-0.174, -0.585], gestrichelt: true }
    - { von: [0, 0.4], nach: [0, -0.8], gestrichelt: true }
  vektoren:
    - { von: [0.174, -0.585], nach: [0.174, -1.385], label: "F_G", farbe: 0 }
    - { von: [0.174, -0.585], nach: [0.315, -0.585], label: "F_C", farbe: 1 }
    - { von: [0.174, -0.585], nach: [0.033, 0.215], label: "F_S", farbe: 3 }
  punkte:
    - { x: 0.174, y: -0.585, farbe: 1 }
    - { x: -0.174, y: -0.585, farbe: 1 }
teile:
  - typ: zahl
    label: a) Abstand in cm
    loesung: "2*30*sin(inRad(10))"
    einheit: "cm"
    anzeige: '10{,}4'
    fehler:
      - wert: "30*sin(inRad(10))"
        meldung: |
          Das ist nur der Abstand **einer** Kugel von der Senkrechten. Die andere Kugel ist genauso weit auf der anderen Seite.
  - typ: zahl
    label: b) F_C in mN
    loesung: "0.50e-3*9.81*tan(inRad(10))*1000"
    einheit: "mN"
    anzeige: '0{,}865'
  - typ: zahl
    label: c) Q in nC
    loesung: "2*0.30*sin(inRad(10))*sqrt(0.50e-3*9.81*tan(inRad(10))/8.99e9)*1e9"
    einheit: "nC"
    anzeige: '32{,}3'
hinweise:
  - 'Geometrie: Jede Kugel ist $L\sin 10^\circ$ von der Senkrechten entfernt. Der Abstand der Kugeln ist das Doppelte.'
  - 'Die Kugel ruht. Die Fadenkraft muss die Summe aus Gewichtskraft (senkrecht) und Coulomb-Kraft (waagrecht) ausgleichen. Daraus folgt $\tan 10^\circ = F_C/F_G$.'
loesung: |
  **Modell:** Jede Kugel ruht. Auf sie wirken drei Kräfte: Gewichtskraft $F_G$ nach unten, Coulomb-Kraft $F_C$ waagrecht nach außen und Fadenkraft $F_S$ entlang des Fadens. Ihre Summe ist null.
  ---
  **a)** Jede Kugel ist $0{,}30\,\text{m}\cdot\sin 10^\circ = 0{,}0521\,\text{m}$ von der Senkrechten entfernt. Abstand: $r = 2\cdot 0{,}0521\,\text{m} = 0{,}104\,\text{m} = 10{,}4\,\text{cm}$.
  ---
  **b)** Die Fadenkraft hat eine senkrechte Komponente $F_S\cos 10^\circ = F_G$ und eine waagrechte $F_S\sin 10^\circ = F_C$. Teilen gibt $F_C = F_G\tan 10^\circ = 0{,}50\cdot 10^{-3}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 0{,}176 = 8{,}65\cdot 10^{-4}\,\text{N} = 0{,}865\,\text{mN}$.
  ---
  **c)** Aus $F_C = kQ^2/r^2$ folgt $Q = r\sqrt{F_C/k} = 0{,}104\,\text{m}\cdot\sqrt{\dfrac{8{,}65\cdot 10^{-4}\,\text{N}}{8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2}} = 3{,}23\cdot 10^{-8}\,\text{C} = 32{,}3\,\text{nC}$.
  ---
  **Plausibilität:** Einige zehn Nanocoulomb sind typisch für geriebene Gegenstände. Der kleine Winkel passt zu einer Coulomb-Kraft, die nur ein Sechstel der Gewichtskraft beträgt.
```

## Das elektrische Feld und Feldlinien

```aufgabe
id: p12-5-check
art: check
titel: "Vorwissen: Kraft und Beschleunigung"
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Auf einen Körper mit $2{,}0\,\text{kg}$ wirkt die resultierende Kraft $6{,}0\,\text{N}$. Wie groß ist seine Beschleunigung in $\text{m/s}^2$?

  Herkunft: [Kapitel 3, Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung)
teile:
  - typ: zahl
    loesung: "6.0/2.0"
    einheit: "m/s²"
    anzeige: '3{,}0'
    fehler:
      - wert: "6.0*2.0"
        meldung: |
          Aus $F = m\,a$ folgt $a = F/m$. Du musst teilen, nicht multiplizieren.
hinweise:
  - 'Stelle $F = m\,a$ nach $a$ um.'
loesung: |
  Aus dem Grundgesetz $F = m\,a$ folgt durch Teilen durch $m$: $a = F/m$.
  ---
  $a = 6{,}0\,\text{N} / 2{,}0\,\text{kg} = 3{,}0\,\text{m/s}^2$. Genau so rechnen wir gleich die Beschleunigung eines Elektrons aus der Feldkraft aus.
```

Wie „weiß“ eine Ladung, dass in einiger Entfernung eine andere Ladung sitzt? Für Coulomb wirkte die
Kraft direkt über den leeren Raum hinweg. Man nennt das **Fernwirkung**. Michael Faraday fand diese
Vorstellung unbefriedigend. Er stellte sich vor: Jede Ladung verändert den Raum um sich herum. Eine
zweite Ladung spürt dann nicht die erste Ladung, sondern diesen veränderten Raum an ihrem eigenen Ort.
Den veränderten Raum nennt man **elektrisches Feld**.

Das ist mehr als eine Sprechweise, aus zwei Gründen. Erstens trennt
es zwei Fragen: Welches Feld erzeugt eine Ladungsanordnung? Und welche Kraft spürt eine Ladung in einem
gegebenen Feld? Zweitens ist das Feld etwas Wirkliches. Es trägt Energie, wie du beim Kondensator sehen
wirst. Und eine Änderung des Feldes breitet sich mit Lichtgeschwindigkeit aus. Licht selbst ist eine
solche Feldänderung, siehe [Das elektromagnetische Spektrum](/lernen/physik1/wellenoptik-atom-kernphysik/das-elektromagnetische-spektrum-und-die-waermestrahlung).

### Die elektrische Feldstärke

Wie misst man ein Feld? Man bringt eine kleine positive **Probeladung** $q$ an den Ort und misst die Kraft
auf sie. Eine doppelt so große Probeladung spürt die doppelte Kraft. Das Verhältnis Kraft durch Ladung
hängt also nicht von der Probeladung ab, sondern nur vom Feld am Ort.

:::definition[Elektrische Feldstärke]
Die **elektrische Feldstärke** $\vec E$ an einem Ort ist die Kraft $\vec F$ auf eine kleine positive
Probeladung $q$, geteilt durch diese Ladung:
$$\vec E = \frac{\vec F}{q}, \qquad [E] = \frac{\text{N}}{\text{C}}.$$
Umgekehrt erfährt jede Ladung $q$ im Feld die Kraft $\vec F = q\cdot\vec E$. Für eine positive Ladung zeigt
die Kraft in Feldrichtung, für eine negative Ladung entgegen der Feldrichtung.
:::

**Beispiel:** Eine Probeladung von $2{,}0\,\text{nC}$ spürt $6{,}0\cdot 10^{-5}\,\text{N}$ nach rechts. Dann ist
die Feldstärke dort $E = 6{,}0\cdot 10^{-5}\,\text{N} / 2{,}0\cdot 10^{-9}\,\text{C} = 3{,}0\cdot 10^{4}\,\text{N/C}$,
nach rechts gerichtet. **Nichtbeispiel:** Die Kraft $6{,}0\cdot 10^{-5}\,\text{N}$ selbst ist **nicht** die
Feldstärke. Mit einer anderen Probeladung wäre die Kraft anders, die Feldstärke aber gleich.

Die Einheit $\text{N/C}$ ist gleich der Einheit $\text{V/m}$ (Volt pro Meter). Warum, siehst du in der
Lektion [Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld).
In der Praxis schreibt man meist $\text{V/m}$.

Warum soll die Probeladung **klein** sein? Eine große Probeladung würde durch Influenz die Ladungen
verschieben, die das Feld erzeugen. Dann würde man ein verändertes Feld messen.

:::beispiel[Kraft auf ein Elektron in einem bekannten Feld]
Im Feld aus dem Beispiel davor, $E = 3{,}0\cdot 10^{4}\,\text{V/m}$ nach rechts, befindet sich ein Elektron.
Welche Kraft wirkt auf es, und wie stark wird es beschleunigt?

**Schritt 1, Betrag der Kraft:** $F = e\cdot E = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 3{,}0\cdot 10^{4}\,\text{N/C} = 4{,}8\cdot 10^{-15}\,\text{N}$.

**Schritt 2, Richtung:** Das Elektron ist negativ. Die Kraft zeigt also **entgegen** dem Feld, nach links.

**Schritt 3, Beschleunigung:** Mit $m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$ und $a = F/m$ gilt
$a = 4{,}8\cdot 10^{-15}\,\text{N} / 9{,}109\cdot 10^{-31}\,\text{kg} = 5{,}3\cdot 10^{15}\,\text{m/s}^2$.
Das ist rund $5\cdot 10^{14}$-mal die Fallbeschleunigung. Die Gewichtskraft eines Elektrons darf man in solchen
Feldern immer vernachlässigen.
:::

### Das Feld einer Punktladung

Eine Punktladung $Q$ erzeugt ein Feld. Wir setzen eine Probeladung $q$ in den Abstand $r$. Nach dem
Coulomb-Gesetz spürt sie die Kraft $F = k\,|Q|\,q/r^2$. Wir teilen durch $q$ und erhalten:
$$E = k\cdot\frac{|Q|}{r^2} = \frac{1}{4\pi\varepsilon_0}\cdot\frac{|Q|}{r^2}.$$
Dabei ist $Q$ die felderzeugende Ladung und $r$ der Abstand von ihr. Die Probeladung $q$ ist
herausgefallen, wie es sein soll. Das Feld zeigt bei positivem $Q$ **radial nach außen**, also von der
Ladung weg. Bei negativem $Q$ zeigt es **radial nach innen**, zur Ladung hin.

:::beispiel[Feld einer Punktladung und Kraft auf eine zweite Ladung]
Eine Punktladung $Q = +8{,}0\,\text{nC}$ erzeugt ein Feld. Wie groß ist es im Abstand $20\,\text{cm}$? Welche
Kraft spürt dort eine Ladung $q = -3{,}0\,\text{nC}$?

**Schritt 1, Feldstärke:** $E = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{8{,}0\cdot 10^{-9}\,\text{C}}{(0{,}20\,\text{m})^2} = 1{,}80\cdot 10^{3}\,\text{V/m}$,
radial von $Q$ weg.

**Schritt 2, Kraft:** $F = |q|\cdot E = 3{,}0\cdot 10^{-9}\,\text{C}\cdot 1{,}80\cdot 10^{3}\,\text{V/m} = 5{,}4\cdot 10^{-6}\,\text{N}$.
Weil $q$ negativ ist, zeigt die Kraft gegen das Feld, also zu $Q$ hin. Das passt: Ungleichnamige Ladungen
ziehen einander an.
:::

```aufgabe
id: p12-feld-punktladung
titel: Feld einer Punktladung
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Wie groß ist die elektrische Feldstärke im Abstand $30\,\text{cm}$ von einer Punktladung $Q = 5{,}0\,\text{nC}$ (in V/m)?
teile:
  - typ: zahl
    loesung: "1/(4*pi*8.854e-12)*5e-9/0.30^2"
    einheit: "V/m"
    anzeige: '499'
    fehler:
      - wert: "1/(4*pi*8.854e-12)*5e-9/0.30"
        meldung: |
          Der Abstand steht auch beim Feld einer Punktladung **quadriert** im Nenner: $E = k\,Q/r^2$.
      - wert: "1/(4*pi*8.854e-12)*5e-9/30^2"
        meldung: |
          Der Abstand muss in Metern stehen: $30\,\text{cm} = 0{,}30\,\text{m}$.
hinweise:
  - '$E = k\,Q/r^2$ mit $k = 8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2$, alles in SI-Einheiten.'
loesung: |
  **Ansatz:** Feld einer Punktladung, $E = k\,Q/r^2$.
  ---
  **Rechnung:** $E = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{5{,}0\cdot 10^{-9}\,\text{C}}{(0{,}30\,\text{m})^2} = \dfrac{44{,}9\,\text{N}\,\text{m}^2/\text{C}}{0{,}090\,\text{m}^2} \approx 499\,\text{V/m}$, radial nach außen gerichtet.
```

```aufgabe
id: p12-elektron-im-feld
titel: Elektron im Feld
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Elektron befindet sich in einem elektrischen Feld der Stärke $2000\,\text{V/m}$.

  a) Welche Kraft wirkt auf das Elektron (in $10^{-16}\,\text{N}$)?

  b) Welche Beschleunigung erfährt es (in $10^{14}\,\text{m/s}^2$)? ($m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$)
teile:
  - typ: zahl
    label: a) F in 10⁻¹⁶ N
    loesung: "1.602e-19*2000/1e-16"
    anzeige: '3{,}20'
    fehler:
      - wert: "2000/1.602e-19/1e-16"
        meldung: |
          Du hast durch die Ladung geteilt. Aus $E = F/q$ folgt $F = q\cdot E$, also multiplizieren.
  - typ: zahl
    label: b) a in 10¹⁴ m/s²
    loesung: "1.602e-19*2000/9.109e-31/1e14"
    anzeige: '3{,}52'
    fehler:
      - wert: "1.602e-19*2000*9.109e-31/1e14"
        meldung: |
          Nach dem Grundgesetz ist $a = F/m$. Die Masse gehört in den Nenner.
hinweise:
  - 'Kraft im Feld: $F = e\cdot E$ mit $e = 1{,}602\cdot 10^{-19}\,\text{C}$.'
loesung: |
  **a)** $F = e\,E = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 2000\,\text{V/m} = 3{,}20\cdot 10^{-16}\,\text{N}$. Die Einheit stimmt, denn $\text{C}\cdot\text{V/m} = \text{C}\cdot\text{N/C} = \text{N}$. Die Kraft zeigt entgegen dem Feld, weil das Elektron negativ ist.
  ---
  **b)** $a = F/m_e = 3{,}20\cdot 10^{-16}\,\text{N} / 9{,}109\cdot 10^{-31}\,\text{kg} = 3{,}52\cdot 10^{14}\,\text{m/s}^2$. Die Gewichtskraft spielt daneben keine Rolle.
```

```aufgabe
id: p12-feld-proportional
titel: Was passiert mit dem Feld?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Im Abstand $r$ von einer Punktladung $Q$ herrscht die Feldstärke $E$. Man halbiert die Ladung auf $Q/2$ und geht gleichzeitig auf den halben Abstand $r/2$ heran. Auf das Wievielfache von $E$ ändert sich die Feldstärke? Gib den Faktor als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "(1/2)/(1/2)^2"
    anzeige: '2'
    fehler:
      - wert: "1"
        meldung: |
          Halbe Ladung und halber Abstand heben sich **nicht** auf. Der Abstand wirkt beim Feld einer Punktladung im **Quadrat**: halber Abstand, vierfaches Feld.
      - wert: "4"
        meldung: |
          Der Abstand ist richtig berücksichtigt. Die Feldstärke ist aber auch proportional zur felderzeugenden Ladung $Q$. Die halbe Ladung halbiert das Feld.
      - wert: "1/8"
        meldung: |
          Ein **kleinerer** Abstand macht das Feld **stärker**, weil $r^2$ im Nenner steht. Der Faktor für den halben Abstand ist $4$, nicht $\tfrac14$.
hinweise:
  - '$E = k\,Q/r^2$. Ersetze $Q$ durch $Q/2$ und $r$ durch $r/2$.'
loesung: |
  **Ansatz:** Proportionalitätsschluss mit $E \sim Q/r^2$.
  ---
  Halbe Ladung gibt den Faktor $\tfrac12$. Halber Abstand macht den Nenner $(r/2)^2 = r^2/4$, also viermal kleiner. Das gibt den Faktor $4$.
  ---
  Zusammen: $E' = \tfrac12\cdot 4\cdot E = 2\,E$. Die Feldstärke verdoppelt sich, obwohl die Ladung kleiner geworden ist.
```

### Feldlinien

Ein Feld kann man nicht sehen. Man kann es aber zeichnen. Dazu verwendet man **Feldlinien**. Eine
Feldlinie ist eine gedachte Linie. Ihre Richtung zeigt an jedem Punkt, in welche Richtung die Kraft auf
eine positive Probeladung zeigt. Für Feldlinien gelten fünf Regeln:

1. Feldlinien beginnen an **positiven** und enden an **negativen** Ladungen, oder sie laufen ins Unendliche.
2. Die **Tangente** an eine Feldlinie (die Gerade, die die Linie an einem Punkt nur berührt) zeigt die
   Richtung der Kraft auf eine positive Probeladung. Ein Pfeil auf der Linie gibt die Richtung an.
3. Die **Dichte** der Linien ist ein Maß für die Feldstärke. Wo sie dicht liegen, ist das Feld stark.
4. Feldlinien **schneiden sich nie**. An jedem Ort hat die Kraft nur eine Richtung.
5. An der Oberfläche eines Leiters stehen Feldlinien **senkrecht**. Sonst würde eine Kraftkomponente
   entlang der Oberfläche die freien Elektronen verschieben.

```plot
x: [-2, 2]
y: [-1.7, 1.7]
gleich: true
vektoren:
  - { von: [0.25, 0], nach: [1.5, 0], farbe: 1 }
  - { von: [0.177, 0.177], nach: [1.061, 1.061], farbe: 1 }
  - { von: [0, 0.25], nach: [0, 1.5], farbe: 1 }
  - { von: [-0.177, 0.177], nach: [-1.061, 1.061], farbe: 1 }
  - { von: [-0.25, 0], nach: [-1.5, 0], farbe: 1 }
  - { von: [-0.177, -0.177], nach: [-1.061, -1.061], farbe: 1 }
  - { von: [0, -0.25], nach: [0, -1.5], farbe: 1 }
  - { von: [0.177, -0.177], nach: [1.061, -1.061], farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "+Q", farbe: 1 }
beschriftung: "Feldlinien einer einzelnen positiven Punktladung. Sie laufen radial nach außen. Nahe der Ladung liegen sie dicht, dort ist das Feld stark. Weiter außen rücken sie auseinander, das Feld wird schwächer."
```

```plot
x: [-2, 2]
y: [-1.7, 1.7]
gleich: true
vektoren:
  - { von: [1.5, 0], nach: [0.25, 0], farbe: 2 }
  - { von: [1.061, 1.061], nach: [0.177, 0.177], farbe: 2 }
  - { von: [0, 1.5], nach: [0, 0.25], farbe: 2 }
  - { von: [-1.061, 1.061], nach: [-0.177, 0.177], farbe: 2 }
  - { von: [-1.5, 0], nach: [-0.25, 0], farbe: 2 }
  - { von: [-1.061, -1.061], nach: [-0.177, -0.177], farbe: 2 }
  - { von: [0, -1.5], nach: [0, -0.25], farbe: 2 }
  - { von: [1.061, -1.061], nach: [0.177, -0.177], farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "−Q", farbe: 2 }
beschriftung: "Feldlinien einer einzelnen negativen Punktladung. Sie laufen radial nach innen, auf die Ladung zu. Eine positive Probeladung würde zur negativen Ladung hingezogen."
```

Zwei Ladungen erzeugen kompliziertere Bilder. Das folgende Bild ist aus dem Feld zweier gleich großer,
ungleichnamiger Ladungen genau berechnet. Eine solche Anordnung heißt **Dipol** (zwei Pole).

```plot
x: [-3, 3]
y: [-2.2, 2.2]
gleich: true
strecken:
  - { von: [-0.925, 0.027], nach: [-0.383, 0.203], farbe: 0 }
  - { von: [-0.383, 0.203], nach: [-0.186, 0.239], farbe: 0 }
  - { von: [-0.186, 0.239], nach: [0.003, 0.252], farbe: 0 }
  - { von: [0.003, 0.252], nach: [0.193, 0.239], farbe: 0 }
  - { von: [0.193, 0.239], nach: [0.389, 0.201], farbe: 0 }
  - { von: [0.389, 0.201], nach: [0.931, 0.025], farbe: 0 }
  - { von: [-0.925, -0.027], nach: [-0.383, -0.203], farbe: 0 }
  - { von: [-0.383, -0.203], nach: [-0.186, -0.239], farbe: 0 }
  - { von: [-0.186, -0.239], nach: [0.003, -0.252], farbe: 0 }
  - { von: [0.003, -0.252], nach: [0.193, -0.239], farbe: 0 }
  - { von: [0.193, -0.239], nach: [0.389, -0.201], farbe: 0 }
  - { von: [0.389, -0.201], nach: [0.931, -0.025], farbe: 0 }
  - { von: [-0.943, 0.057], nach: [-0.659, 0.324], farbe: 0 }
  - { von: [-0.659, 0.324], nach: [-0.44, 0.481], farbe: 0 }
  - { von: [-0.44, 0.481], nach: [-0.222, 0.578], farbe: 0 }
  - { von: [-0.222, 0.578], nach: [-0.005, 0.611], farbe: 0 }
  - { von: [-0.005, 0.611], nach: [0.222, 0.578], farbe: 0 }
  - { von: [0.222, 0.578], nach: [0.441, 0.481], farbe: 0 }
  - { von: [0.441, 0.481], nach: [0.66, 0.323], farbe: 0 }
  - { von: [0.66, 0.323], nach: [0.944, 0.056], farbe: 0 }
  - { von: [-0.943, -0.057], nach: [-0.659, -0.324], farbe: 0 }
  - { von: [-0.659, -0.324], nach: [-0.44, -0.481], farbe: 0 }
  - { von: [-0.44, -0.481], nach: [-0.222, -0.578], farbe: 0 }
  - { von: [-0.222, -0.578], nach: [-0.005, -0.611], farbe: 0 }
  - { von: [-0.005, -0.611], nach: [0.222, -0.578], farbe: 0 }
  - { von: [0.222, -0.578], nach: [0.441, -0.481], farbe: 0 }
  - { von: [0.441, -0.481], nach: [0.66, -0.323], farbe: 0 }
  - { von: [0.66, -0.323], nach: [0.944, -0.056], farbe: 0 }
  - { von: [-0.973, 0.075], nach: [-0.773, 0.544], farbe: 0 }
  - { von: [-0.773, 0.544], nach: [-0.674, 0.706], farbe: 0 }
  - { von: [-0.674, 0.706], nach: [-0.56, 0.845], farbe: 0 }
  - { von: [-0.56, 0.845], nach: [-0.433, 0.957], farbe: 0 }
  - { von: [-0.433, 0.957], nach: [-0.295, 1.039], farbe: 0 }
  - { von: [-0.295, 1.039], nach: [-0.144, 1.09], farbe: 0 }
  - { von: [-0.144, 1.09], nach: [0.005, 1.106], farbe: 0 }
  - { von: [0.005, 1.106], nach: [0.153, 1.088], farbe: 0 }
  - { von: [0.153, 1.088], nach: [0.304, 1.035], farbe: 0 }
  - { von: [0.304, 1.035], nach: [0.44, 0.952], farbe: 0 }
  - { von: [0.44, 0.952], nach: [0.566, 0.838], farbe: 0 }
  - { von: [0.566, 0.838], nach: [0.679, 0.698], farbe: 0 }
  - { von: [0.679, 0.698], nach: [0.777, 0.535], farbe: 0 }
  - { von: [0.777, 0.535], nach: [0.976, 0.066], farbe: 0 }
  - { von: [-0.973, -0.075], nach: [-0.773, -0.544], farbe: 0 }
  - { von: [-0.773, -0.544], nach: [-0.674, -0.706], farbe: 0 }
  - { von: [-0.674, -0.706], nach: [-0.56, -0.845], farbe: 0 }
  - { von: [-0.56, -0.845], nach: [-0.433, -0.957], farbe: 0 }
  - { von: [-0.433, -0.957], nach: [-0.295, -1.039], farbe: 0 }
  - { von: [-0.295, -1.039], nach: [-0.144, -1.09], farbe: 0 }
  - { von: [-0.144, -1.09], nach: [0.005, -1.106], farbe: 0 }
  - { von: [0.005, -1.106], nach: [0.153, -1.088], farbe: 0 }
  - { von: [0.153, -1.088], nach: [0.304, -1.035], farbe: 0 }
  - { von: [0.304, -1.035], nach: [0.44, -0.952], farbe: 0 }
  - { von: [0.44, -0.952], nach: [0.566, -0.838], farbe: 0 }
  - { von: [0.566, -0.838], nach: [0.679, -0.698], farbe: 0 }
  - { von: [0.679, -0.698], nach: [0.777, -0.535], farbe: 0 }
  - { von: [0.777, -0.535], nach: [0.976, -0.066], farbe: 0 }
  - { von: [-1.007, 0.08], nach: [-1.03, 0.499], farbe: 0 }
  - { von: [-1.03, 0.499], nach: [-1.01, 0.828], farbe: 0 }
  - { von: [-1.01, 0.828], nach: [-0.946, 1.131], farbe: 0 }
  - { von: [-0.946, 1.131], nach: [-0.836, 1.399], farbe: 0 }
  - { von: [-0.836, 1.399], nach: [-0.677, 1.628], farbe: 0 }
  - { von: [-0.677, 1.628], nach: [-0.474, 1.806], farbe: 0 }
  - { von: [-0.474, 1.806], nach: [-0.249, 1.913], farbe: 0 }
  - { von: [-0.249, 1.913], nach: [-0.003, 1.952], farbe: 0 }
  - { von: [-0.003, 1.952], nach: [0.243, 1.915], farbe: 0 }
  - { von: [0.243, 1.915], nach: [0.477, 1.804], farbe: 0 }
  - { von: [0.477, 1.804], nach: [0.679, 1.626], farbe: 0 }
  - { von: [0.679, 1.626], nach: [0.837, 1.395], farbe: 0 }
  - { von: [0.837, 1.395], nach: [0.947, 1.128], farbe: 0 }
  - { von: [0.947, 1.128], nach: [1.011, 0.825], farbe: 0 }
  - { von: [1.011, 0.825], nach: [1.029, 0.495], farbe: 0 }
  - { von: [1.029, 0.495], nach: [1.007, 0.076], farbe: 0 }
  - { von: [-1.007, -0.08], nach: [-1.03, -0.499], farbe: 0 }
  - { von: [-1.03, -0.499], nach: [-1.01, -0.828], farbe: 0 }
  - { von: [-1.01, -0.828], nach: [-0.946, -1.131], farbe: 0 }
  - { von: [-0.946, -1.131], nach: [-0.836, -1.399], farbe: 0 }
  - { von: [-0.836, -1.399], nach: [-0.677, -1.628], farbe: 0 }
  - { von: [-0.677, -1.628], nach: [-0.474, -1.806], farbe: 0 }
  - { von: [-0.474, -1.806], nach: [-0.249, -1.913], farbe: 0 }
  - { von: [-0.249, -1.913], nach: [-0.003, -1.952], farbe: 0 }
  - { von: [-0.003, -1.952], nach: [0.243, -1.915], farbe: 0 }
  - { von: [0.243, -1.915], nach: [0.477, -1.804], farbe: 0 }
  - { von: [0.477, -1.804], nach: [0.679, -1.626], farbe: 0 }
  - { von: [0.679, -1.626], nach: [0.837, -1.395], farbe: 0 }
  - { von: [0.837, -1.395], nach: [0.947, -1.128], farbe: 0 }
  - { von: [0.947, -1.128], nach: [1.011, -0.825], farbe: 0 }
  - { von: [1.011, -0.825], nach: [1.029, -0.495], farbe: 0 }
  - { von: [1.029, -0.495], nach: [1.007, -0.076], farbe: 0 }
  - { von: [-1.046, 0.066], nach: [-1.401, 0.621], farbe: 0 }
  - { von: [-1.401, 0.621], nach: [-1.534, 0.879], farbe: 0 }
  - { von: [-1.534, 0.879], nach: [-1.644, 1.137], farbe: 0 }
  - { von: [-1.644, 1.137], nach: [-1.734, 1.402], farbe: 0 }
  - { von: [-1.734, 1.402], nach: [-1.803, 1.673], farbe: 0 }
  - { von: [-1.803, 1.673], nach: [-1.848, 1.939], farbe: 0 }
  - { von: [-1.848, 1.939], nach: [-1.87, 2.208], farbe: 0 }
  - { von: [1.046, 0.066], nach: [1.401, 0.621], farbe: 0 }
  - { von: [1.401, 0.621], nach: [1.534, 0.879], farbe: 0 }
  - { von: [1.534, 0.879], nach: [1.644, 1.137], farbe: 0 }
  - { von: [1.644, 1.137], nach: [1.734, 1.402], farbe: 0 }
  - { von: [1.734, 1.402], nach: [1.803, 1.673], farbe: 0 }
  - { von: [1.803, 1.673], nach: [1.848, 1.939], farbe: 0 }
  - { von: [1.848, 1.939], nach: [1.87, 2.208], farbe: 0 }
  - { von: [-1.046, -0.066], nach: [-1.401, -0.621], farbe: 0 }
  - { von: [-1.401, -0.621], nach: [-1.534, -0.879], farbe: 0 }
  - { von: [-1.534, -0.879], nach: [-1.644, -1.137], farbe: 0 }
  - { von: [-1.644, -1.137], nach: [-1.734, -1.402], farbe: 0 }
  - { von: [-1.734, -1.402], nach: [-1.803, -1.673], farbe: 0 }
  - { von: [-1.803, -1.673], nach: [-1.848, -1.939], farbe: 0 }
  - { von: [-1.848, -1.939], nach: [-1.87, -2.208], farbe: 0 }
  - { von: [1.046, -0.066], nach: [1.401, -0.621], farbe: 0 }
  - { von: [1.401, -0.621], nach: [1.534, -0.879], farbe: 0 }
  - { von: [1.534, -0.879], nach: [1.644, -1.137], farbe: 0 }
  - { von: [1.644, -1.137], nach: [1.734, -1.402], farbe: 0 }
  - { von: [1.734, -1.402], nach: [1.803, -1.673], farbe: 0 }
  - { von: [1.803, -1.673], nach: [1.848, -1.939], farbe: 0 }
  - { von: [1.848, -1.939], nach: [1.87, -2.208], farbe: 0 }
  - { von: [-1.075, 0.027], nach: [-2.079, 0.425], farbe: 0 }
  - { von: [-2.079, 0.425], nach: [-3.006, 0.874], farbe: 0 }
  - { von: [1.075, 0.027], nach: [2.079, 0.425], farbe: 0 }
  - { von: [2.079, 0.425], nach: [3.006, 0.874], farbe: 0 }
  - { von: [-1.075, -0.027], nach: [-2.079, -0.425], farbe: 0 }
  - { von: [-2.079, -0.425], nach: [-3.006, -0.874], farbe: 0 }
  - { von: [1.075, -0.027], nach: [2.079, -0.425], farbe: 0 }
  - { von: [2.079, -0.425], nach: [3.006, -0.874], farbe: 0 }
  - { von: [-3, 0], nach: [-1.08, 0], farbe: 0 }
  - { von: [-0.92, 0], nach: [0.92, 0], farbe: 0 }
  - { von: [1.08, 0], nach: [3, 0], farbe: 0 }
vektoren:
  - { von: [-0.107, 0.252], nach: [0.113, 0.251], farbe: 0 }
  - { von: [-0.107, -0.252], nach: [0.113, -0.251], farbe: 0 }
  - { von: [-0.115, 0.61], nach: [0.105, 0.612], farbe: 0 }
  - { von: [-0.115, -0.61], nach: [0.105, -0.612], farbe: 0 }
  - { von: [-0.105, 1.107], nach: [0.115, 1.105], farbe: 0 }
  - { von: [-0.105, -1.107], nach: [0.115, -1.105], farbe: 0 }
  - { von: [-0.113, 1.951], nach: [0.107, 1.952], farbe: 0 }
  - { von: [-0.113, -1.951], nach: [0.107, -1.952], farbe: 0 }
  - { von: [-1.363, 0.551], nach: [-1.468, 0.744], farbe: 0 }
  - { von: [1.468, 0.744], nach: [1.363, 0.551], farbe: 0 }
  - { von: [-1.363, -0.551], nach: [-1.468, -0.744], farbe: 0 }
  - { von: [1.468, -0.744], nach: [1.363, -0.551], farbe: 0 }
  - { von: [-1.562, 0.21], nach: [-1.766, 0.292], farbe: 0 }
  - { von: [1.766, 0.292], nach: [1.562, 0.21], farbe: 0 }
  - { von: [-1.562, -0.21], nach: [-1.766, -0.292], farbe: 0 }
  - { von: [1.766, -0.292], nach: [1.562, -0.21], farbe: 0 }
  - { von: [-2.1, 0], nach: [-2.35, 0], farbe: 0 }
  - { von: [-0.12, 0], nach: [0.12, 0], farbe: 0 }
  - { von: [2.35, 0], nach: [2.1, 0], farbe: 0 }
punkte:
  - { x: -1, y: 0, label: "+Q", farbe: 1 }
  - { x: 1, y: 0, label: "−Q", farbe: 2 }
beschriftung: "Berechnetes Feldlinienbild eines Dipols: links +Q, rechts −Q. Jede Linie verlässt die positive Ladung in ihrer eigenen Richtung, also strahlenförmig nach allen Seiten, und endet an der negativen Ladung. Die Linien, die nach links starten, machen einen großen Bogen außerhalb des Bildes. Zwischen den Ladungen liegen die Linien am dichtesten, dort ist das Feld am stärksten. Die Pfeile zeigen die Kraftrichtung auf eine positive Probeladung."
```

Die Linien verlassen $+Q$ nach **allen** Seiten, auch nach links. Auch diese enden schließlich bei $-Q$,
nach einem großen Bogen außen herum.

```plot
x: [-3, 3]
y: [-2.2, 2.2]
gleich: true
strecken:
  - { von: [-0.927, 0.034], nach: [-0.604, 0.192], farbe: 1 }
  - { von: [-0.604, 0.192], nach: [-0.41, 0.315], farbe: 1 }
  - { von: [-0.41, 0.315], nach: [-0.282, 0.441], farbe: 1 }
  - { von: [-0.282, 0.441], nach: [-0.202, 0.59], farbe: 1 }
  - { von: [-0.202, 0.59], nach: [-0.152, 0.794], farbe: 1 }
  - { von: [-0.152, 0.794], nach: [-0.127, 1.092], farbe: 1 }
  - { von: [-0.127, 1.092], nach: [-0.136, 2.202], farbe: 1 }
  - { von: [-0.927, -0.034], nach: [-0.604, -0.192], farbe: 1 }
  - { von: [-0.604, -0.192], nach: [-0.41, -0.315], farbe: 1 }
  - { von: [-0.41, -0.315], nach: [-0.282, -0.441], farbe: 1 }
  - { von: [-0.282, -0.441], nach: [-0.202, -0.59], farbe: 1 }
  - { von: [-0.202, -0.59], nach: [-0.152, -0.794], farbe: 1 }
  - { von: [-0.152, -0.794], nach: [-0.127, -1.092], farbe: 1 }
  - { von: [-0.127, -1.092], nach: [-0.136, -2.202], farbe: 1 }
  - { von: [0.927, 0.034], nach: [0.604, 0.192], farbe: 1 }
  - { von: [0.604, 0.192], nach: [0.41, 0.315], farbe: 1 }
  - { von: [0.41, 0.315], nach: [0.282, 0.441], farbe: 1 }
  - { von: [0.282, 0.441], nach: [0.202, 0.59], farbe: 1 }
  - { von: [0.202, 0.59], nach: [0.152, 0.794], farbe: 1 }
  - { von: [0.152, 0.794], nach: [0.127, 1.092], farbe: 1 }
  - { von: [0.127, 1.092], nach: [0.136, 2.202], farbe: 1 }
  - { von: [0.927, -0.034], nach: [0.604, -0.192], farbe: 1 }
  - { von: [0.604, -0.192], nach: [0.41, -0.315], farbe: 1 }
  - { von: [0.41, -0.315], nach: [0.282, -0.441], farbe: 1 }
  - { von: [0.282, -0.441], nach: [0.202, -0.59], farbe: 1 }
  - { von: [0.202, -0.59], nach: [0.152, -0.794], farbe: 1 }
  - { von: [0.152, -0.794], nach: [0.127, -1.092], farbe: 1 }
  - { von: [0.127, -1.092], nach: [0.136, -2.202], farbe: 1 }
  - { von: [-0.954, 0.066], nach: [-0.782, 0.324], farbe: 1 }
  - { von: [-0.782, 0.324], nach: [-0.677, 0.517], farbe: 1 }
  - { von: [-0.677, 0.517], nach: [-0.602, 0.712], farbe: 1 }
  - { von: [-0.602, 0.712], nach: [-0.556, 0.917], farbe: 1 }
  - { von: [-0.556, 0.917], nach: [-0.535, 1.156], farbe: 1 }
  - { von: [-0.535, 1.156], nach: [-0.539, 1.436], farbe: 1 }
  - { von: [-0.539, 1.436], nach: [-0.625, 2.201], farbe: 1 }
  - { von: [-0.954, -0.066], nach: [-0.782, -0.324], farbe: 1 }
  - { von: [-0.782, -0.324], nach: [-0.677, -0.517], farbe: 1 }
  - { von: [-0.677, -0.517], nach: [-0.602, -0.712], farbe: 1 }
  - { von: [-0.602, -0.712], nach: [-0.556, -0.917], farbe: 1 }
  - { von: [-0.556, -0.917], nach: [-0.535, -1.156], farbe: 1 }
  - { von: [-0.535, -1.156], nach: [-0.539, -1.436], farbe: 1 }
  - { von: [-0.539, -1.436], nach: [-0.625, -2.201], farbe: 1 }
  - { von: [0.954, 0.066], nach: [0.782, 0.324], farbe: 1 }
  - { von: [0.782, 0.324], nach: [0.677, 0.517], farbe: 1 }
  - { von: [0.677, 0.517], nach: [0.602, 0.712], farbe: 1 }
  - { von: [0.602, 0.712], nach: [0.556, 0.917], farbe: 1 }
  - { von: [0.556, 0.917], nach: [0.535, 1.156], farbe: 1 }
  - { von: [0.535, 1.156], nach: [0.539, 1.436], farbe: 1 }
  - { von: [0.539, 1.436], nach: [0.625, 2.201], farbe: 1 }
  - { von: [0.954, -0.066], nach: [0.782, -0.324], farbe: 1 }
  - { von: [0.782, -0.324], nach: [0.677, -0.517], farbe: 1 }
  - { von: [0.677, -0.517], nach: [0.602, -0.712], farbe: 1 }
  - { von: [0.602, -0.712], nach: [0.556, -0.917], farbe: 1 }
  - { von: [0.556, -0.917], nach: [0.535, -1.156], farbe: 1 }
  - { von: [0.535, -1.156], nach: [0.539, -1.436], farbe: 1 }
  - { von: [0.539, -1.436], nach: [0.625, -2.201], farbe: 1 }
  - { von: [-1, 0.08], nach: [-1.023, 0.589], farbe: 1 }
  - { von: [-1.023, 0.589], nach: [-1.107, 1.041], farbe: 1 }
  - { von: [-1.107, 1.041], nach: [-1.278, 1.564], farbe: 1 }
  - { von: [-1.278, 1.564], nach: [-1.552, 2.207], farbe: 1 }
  - { von: [-1, -0.08], nach: [-1.023, -0.589], farbe: 1 }
  - { von: [-1.023, -0.589], nach: [-1.107, -1.041], farbe: 1 }
  - { von: [-1.107, -1.041], nach: [-1.278, -1.564], farbe: 1 }
  - { von: [-1.278, -1.564], nach: [-1.552, -2.207], farbe: 1 }
  - { von: [1, 0.08], nach: [1.023, 0.589], farbe: 1 }
  - { von: [1.023, 0.589], nach: [1.107, 1.041], farbe: 1 }
  - { von: [1.107, 1.041], nach: [1.278, 1.564], farbe: 1 }
  - { von: [1.278, 1.564], nach: [1.552, 2.207], farbe: 1 }
  - { von: [1, -0.08], nach: [1.023, -0.589], farbe: 1 }
  - { von: [1.023, -0.589], nach: [1.107, -1.041], farbe: 1 }
  - { von: [1.107, -1.041], nach: [1.278, -1.564], farbe: 1 }
  - { von: [1.278, -1.564], nach: [1.552, -2.207], farbe: 1 }
  - { von: [-1.046, 0.066], nach: [-1.4, 0.537], farbe: 1 }
  - { von: [-1.4, 0.537], nach: [-1.799, 0.985], farbe: 1 }
  - { von: [-1.799, 0.985], nach: [-2.32, 1.497], farbe: 1 }
  - { von: [-2.32, 1.497], nach: [-3.004, 2.111], farbe: 1 }
  - { von: [-1.046, -0.066], nach: [-1.4, -0.537], farbe: 1 }
  - { von: [-1.4, -0.537], nach: [-1.799, -0.985], farbe: 1 }
  - { von: [-1.799, -0.985], nach: [-2.32, -1.497], farbe: 1 }
  - { von: [-2.32, -1.497], nach: [-3.004, -2.111], farbe: 1 }
  - { von: [1.046, 0.066], nach: [1.4, 0.537], farbe: 1 }
  - { von: [1.4, 0.537], nach: [1.799, 0.985], farbe: 1 }
  - { von: [1.799, 0.985], nach: [2.32, 1.497], farbe: 1 }
  - { von: [2.32, 1.497], nach: [3.004, 2.111], farbe: 1 }
  - { von: [1.046, -0.066], nach: [1.4, -0.537], farbe: 1 }
  - { von: [1.4, -0.537], nach: [1.799, -0.985], farbe: 1 }
  - { von: [1.799, -0.985], nach: [2.32, -1.497], farbe: 1 }
  - { von: [2.32, -1.497], nach: [3.004, -2.111], farbe: 1 }
  - { von: [-1.075, 0.027], nach: [-1.946, 0.325], farbe: 1 }
  - { von: [-1.946, 0.325], nach: [-3.009, 0.644], farbe: 1 }
  - { von: [-1.075, -0.027], nach: [-1.946, -0.325], farbe: 1 }
  - { von: [-1.946, -0.325], nach: [-3.009, -0.644], farbe: 1 }
  - { von: [1.075, 0.027], nach: [1.946, 0.325], farbe: 1 }
  - { von: [1.946, 0.325], nach: [3.009, 0.644], farbe: 1 }
  - { von: [1.075, -0.027], nach: [1.946, -0.325], farbe: 1 }
  - { von: [1.946, -0.325], nach: [3.009, -0.644], farbe: 1 }
  - { von: [-3, 0], nach: [-1.08, 0], farbe: 1 }
  - { von: [-0.92, 0], nach: [-0.05, 0], farbe: 1 }
  - { von: [0.05, 0], nach: [0.92, 0], farbe: 1 }
  - { von: [1.08, 0], nach: [3, 0], farbe: 1 }
vektoren:
  - { von: [-0.463, 0.269], nach: [-0.295, 0.411], farbe: 1 }
  - { von: [-0.463, -0.269], nach: [-0.295, -0.411], farbe: 1 }
  - { von: [0.463, 0.269], nach: [0.295, 0.411], farbe: 1 }
  - { von: [0.463, -0.269], nach: [0.295, -0.411], farbe: 1 }
  - { von: [-0.714, 0.435], nach: [-0.623, 0.635], farbe: 1 }
  - { von: [-0.714, -0.435], nach: [-0.623, -0.635], farbe: 1 }
  - { von: [0.714, 0.435], nach: [0.623, 0.635], farbe: 1 }
  - { von: [0.714, -0.435], nach: [0.623, -0.635], farbe: 1 }
  - { von: [-1.014, 0.52], nach: [-1.041, 0.738], farbe: 1 }
  - { von: [-1.014, -0.52], nach: [-1.041, -0.738], farbe: 1 }
  - { von: [1.014, 0.52], nach: [1.041, 0.738], farbe: 1 }
  - { von: [1.014, -0.52], nach: [1.041, -0.738], farbe: 1 }
  - { von: [-1.406, 0.546], nach: [-1.548, 0.713], farbe: 1 }
  - { von: [-1.406, -0.546], nach: [-1.548, -0.713], farbe: 1 }
  - { von: [1.406, 0.546], nach: [1.548, 0.713], farbe: 1 }
  - { von: [1.406, -0.546], nach: [1.548, -0.713], farbe: 1 }
  - { von: [-1.442, 0.158], nach: [-1.651, 0.229], farbe: 1 }
  - { von: [-1.442, -0.158], nach: [-1.651, -0.229], farbe: 1 }
  - { von: [1.442, 0.158], nach: [1.651, 0.229], farbe: 1 }
  - { von: [1.442, -0.158], nach: [1.651, -0.229], farbe: 1 }
  - { von: [-2.1, 0], nach: [-2.35, 0], farbe: 1 }
  - { von: [-0.6, 0], nach: [-0.35, 0], farbe: 1 }
  - { von: [0.6, 0], nach: [0.35, 0], farbe: 1 }
  - { von: [2.1, 0], nach: [2.35, 0], farbe: 1 }
punkte:
  - { x: -1, y: 0, label: "+Q", farbe: 1 }
  - { x: 1, y: 0, label: "+Q", farbe: 1 }
  - { x: 0, y: 0, label: "E = 0", farbe: 3 }
beschriftung: "Berechnetes Feldlinienbild zweier gleicher positiver Ladungen. Die Linien weichen einander aus und laufen nach außen ins Unendliche. Genau in der Mitte heben sich die beiden Felder auf, dort ist die Feldstärke null. Keine Linie läuft von einer Ladung zur anderen."
```

### Das homogene Feld

Zwei große, parallele Metallplatten werden entgegengesetzt gleich geladen. Diese Anordnung heißt
**Plattenkondensator**. Zwischen den Platten verlaufen die Feldlinien parallel und in gleichen Abständen.
Ein solches Feld heißt **homogen** (griechisch, also: gleichartig). Es hat überall dieselbe Stärke und
dieselbe Richtung. Nur am Rand der Platten wölben sich die Linien nach außen. Dieses **Randfeld** ist
schwächer und nicht mehr homogen.

```plot
x: [-3.5, 3.5]
y: [-1.6, 1.6]
gleich: true
strecken:
  - { von: [-1.95, 0.57], nach: [-2.065, 0.406], farbe: 0 }
  - { von: [-2.065, 0.406], nach: [-2.124, 0.291], farbe: 0 }
  - { von: [-2.124, 0.291], nach: [-2.167, 0.147], farbe: 0 }
  - { von: [-2.167, 0.147], nach: [-2.181, -0.002], farbe: 0 }
  - { von: [-2.181, -0.002], nach: [-2.166, -0.151], farbe: 0 }
  - { von: [-2.166, -0.151], nach: [-2.122, -0.294], farbe: 0 }
  - { von: [-2.122, -0.294], nach: [-2.063, -0.41], farbe: 0 }
  - { von: [-2.063, -0.41], nach: [-1.948, -0.573], farbe: 0 }
  - { von: [-1.6, 0.57], nach: [-1.663, 0.246], farbe: 0 }
  - { von: [-1.663, 0.246], nach: [-1.682, -0.003], farbe: 0 }
  - { von: [-1.682, -0.003], nach: [-1.663, -0.252], farbe: 0 }
  - { von: [-1.663, -0.252], nach: [-1.599, -0.576], farbe: 0 }
  - { von: [-1.2, 0.57], nach: [-1.233, 0.001], farbe: 0 }
  - { von: [-1.233, 0.001], nach: [-1.199, -0.578], farbe: 0 }
  - { von: [-0.8, 0.57], nach: [-0.815, 0], farbe: 0 }
  - { von: [-0.815, 0], nach: [-0.8, -0.579], farbe: 0 }
  - { von: [-0.4, 0.57], nach: [-0.4, -0.58], farbe: 0 }
  - { von: [0, 0.57], nach: [0, -0.57], farbe: 0 }
  - { von: [0.4, 0.57], nach: [0.4, -0.58], farbe: 0 }
  - { von: [0.8, 0.57], nach: [0.815, 0], farbe: 0 }
  - { von: [0.815, 0], nach: [0.8, -0.579], farbe: 0 }
  - { von: [1.2, 0.57], nach: [1.233, 0.001], farbe: 0 }
  - { von: [1.233, 0.001], nach: [1.199, -0.578], farbe: 0 }
  - { von: [1.6, 0.57], nach: [1.663, 0.246], farbe: 0 }
  - { von: [1.663, 0.246], nach: [1.682, -0.003], farbe: 0 }
  - { von: [1.682, -0.003], nach: [1.663, -0.252], farbe: 0 }
  - { von: [1.663, -0.252], nach: [1.599, -0.576], farbe: 0 }
  - { von: [1.95, 0.57], nach: [2.065, 0.406], farbe: 0 }
  - { von: [2.065, 0.406], nach: [2.124, 0.291], farbe: 0 }
  - { von: [2.124, 0.291], nach: [2.167, 0.147], farbe: 0 }
  - { von: [2.167, 0.147], nach: [2.181, -0.002], farbe: 0 }
  - { von: [2.181, -0.002], nach: [2.166, -0.151], farbe: 0 }
  - { von: [2.166, -0.151], nach: [2.122, -0.294], farbe: 0 }
  - { von: [2.122, -0.294], nach: [2.063, -0.41], farbe: 0 }
  - { von: [2.063, -0.41], nach: [1.948, -0.573], farbe: 0 }
  - { von: [-2.03, 0.6], nach: [-2.166, 0.518], farbe: 0 }
  - { von: [-2.166, 0.518], nach: [-2.285, 0.371], farbe: 0 }
  - { von: [-2.285, 0.371], nach: [-2.359, 0.196], farbe: 0 }
  - { von: [-2.359, 0.196], nach: [-2.385, -0.001], farbe: 0 }
  - { von: [-2.385, -0.001], nach: [-2.358, -0.199], farbe: 0 }
  - { von: [-2.358, -0.199], nach: [-2.284, -0.373], farbe: 0 }
  - { von: [-2.284, -0.373], nach: [-2.164, -0.519], farbe: 0 }
  - { von: [-2.164, -0.519], nach: [-2.027, -0.601], farbe: 0 }
  - { von: [2.03, 0.6], nach: [2.166, 0.518], farbe: 0 }
  - { von: [2.166, 0.518], nach: [2.285, 0.371], farbe: 0 }
  - { von: [2.285, 0.371], nach: [2.359, 0.196], farbe: 0 }
  - { von: [2.359, 0.196], nach: [2.385, -0.001], farbe: 0 }
  - { von: [2.385, -0.001], nach: [2.358, -0.199], farbe: 0 }
  - { von: [2.358, -0.199], nach: [2.284, -0.373], farbe: 0 }
  - { von: [2.284, -0.373], nach: [2.164, -0.519], farbe: 0 }
  - { von: [2.164, -0.519], nach: [2.027, -0.601], farbe: 0 }
  - { von: [-2, 0.63], nach: [-2.069, 0.631], farbe: 0 }
  - { von: [-2.069, 0.631], nach: [-2.153, 0.599], farbe: 0 }
  - { von: [-2.153, 0.599], nach: [-2.242, 0.535], farbe: 0 }
  - { von: [-2.242, 0.535], nach: [-2.318, 0.456], farbe: 0 }
  - { von: [-2.318, 0.456], nach: [-2.429, 0.255], farbe: 0 }
  - { von: [-2.429, 0.255], nach: [-2.472, 0.03], farbe: 0 }
  - { von: [-2.472, 0.03], nach: [-2.447, -0.198], farbe: 0 }
  - { von: [-2.447, -0.198], nach: [-2.359, -0.398], farbe: 0 }
  - { von: [-2.359, -0.398], nach: [-2.212, -0.56], farbe: 0 }
  - { von: [-2.212, -0.56], nach: [-2.126, -0.612], farbe: 0 }
  - { von: [-2.126, -0.612], nach: [-2.05, -0.634], farbe: 0 }
  - { von: [2, 0.63], nach: [2.069, 0.631], farbe: 0 }
  - { von: [2.069, 0.631], nach: [2.153, 0.599], farbe: 0 }
  - { von: [2.153, 0.599], nach: [2.242, 0.535], farbe: 0 }
  - { von: [2.242, 0.535], nach: [2.318, 0.456], farbe: 0 }
  - { von: [2.318, 0.456], nach: [2.429, 0.255], farbe: 0 }
  - { von: [2.429, 0.255], nach: [2.472, 0.03], farbe: 0 }
  - { von: [2.472, 0.03], nach: [2.447, -0.198], farbe: 0 }
  - { von: [2.447, -0.198], nach: [2.359, -0.398], farbe: 0 }
  - { von: [2.359, -0.398], nach: [2.212, -0.56], farbe: 0 }
  - { von: [2.212, -0.56], nach: [2.126, -0.612], farbe: 0 }
  - { von: [2.126, -0.612], nach: [2.05, -0.634], farbe: 0 }
  - { von: [-2, 0.6], nach: [2, 0.6], farbe: 1 }
  - { von: [-2, 0.62], nach: [2, 0.62], farbe: 1 }
  - { von: [-2, -0.6], nach: [2, -0.6], farbe: 2 }
  - { von: [-2, -0.62], nach: [2, -0.62], farbe: 2 }
vektoren:
  - { von: [-2.18, 0.108], nach: [-2.182, -0.092], farbe: 0 }
  - { von: [-1.681, 0.107], nach: [-1.682, -0.093], farbe: 0 }
  - { von: [-1.233, 0.101], nach: [-1.233, -0.099], farbe: 0 }
  - { von: [-0.815, 0.1], nach: [-0.815, -0.1], farbe: 0 }
  - { von: [-0.406, 0.1], nach: [-0.406, -0.1], farbe: 0 }
  - { von: [0, 0.11], nach: [0, -0.09], farbe: 0 }
  - { von: [0.406, 0.1], nach: [0.406, -0.1], farbe: 0 }
  - { von: [0.815, 0.1], nach: [0.815, -0.1], farbe: 0 }
  - { von: [1.233, 0.101], nach: [1.233, -0.099], farbe: 0 }
  - { von: [1.681, 0.107], nach: [1.682, -0.093], farbe: 0 }
  - { von: [2.18, 0.108], nach: [2.182, -0.092], farbe: 0 }
  - { von: [-2.384, 0.109], nach: [-2.386, -0.091], farbe: 0 }
  - { von: [2.384, 0.109], nach: [2.386, -0.091], farbe: 0 }
  - { von: [-2.468, 0.13], nach: [-2.476, -0.07], farbe: 0 }
  - { von: [2.468, 0.13], nach: [2.476, -0.07], farbe: 0 }
beschriftung: "Berechnetes Feldlinienbild eines Plattenkondensators im Querschnitt. Oben die positive Platte (orange), unten die negative (grün). Innen laufen die Feldlinien parallel und gleich dicht von oben nach unten: Das Feld ist homogen. An den Plattenrändern wölben sich die Linien nach außen, dort ist das Feld schwächer (Randfeld)."
```

:::achtung[Fehler: „Feldlinien sind die Bahnen der Ladungen“]
**Falsche Vorhersage:** Ein Elektron fliegt waagrecht mit $2\cdot 10^{7}\,\text{m/s}$ zwischen die Platten
eines Kondensators. Die Feldlinien verlaufen senkrecht. Jemand sagt: „Das Elektron folgt den Feldlinien,
also biegt es sofort im rechten Winkel ab und fliegt senkrecht zur Platte.“

**Richtig:** Die Feldlinie gibt nur die Richtung der **Kraft** an, nicht die Richtung der Bewegung. Die
Kraft ändert die Geschwindigkeit allmählich. Das Elektron behält seine waagrechte Geschwindigkeit und
bekommt nur langsam eine senkrechte dazu. Es fliegt auf einer **Parabel**, wie ein waagrecht geworfener
Stein. Das rechnest du in der Lektion [Geladene Teilchen im homogenen Feld](/lernen/physik1/elektrostatik/geladene-teilchen-im-homogenen-feld) nach.
:::

:::achtung[Fehler: „Zwischen zwei gezeichneten Feldlinien ist kein Feld“]
**Falsche Überlegung:** „Im Bild der Punktladung liegt der Punkt $P$ genau zwischen zwei Feldlinien. Dort
ist also $E = 0$, eine Ladung bei $P$ spürt nichts.“

**Richtig:** Man zeichnet nur einige Feldlinien, damit das Bild übersichtlich bleibt. Das Feld ist überall
da, auch zwischen den Linien. Bei $P$ gilt $E = k\,Q/r^2$ wie an jedem anderen Punkt im gleichen
Abstand. Null ist das Feld nur dort, wo sich Einzelfelder aufheben, wie in der Mitte zwischen zwei
gleichen Ladungen.
:::

```aufgabe
id: p12-feldlinien-regeln
titel: Regeln für Feldlinien
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Welche Aussagen über elektrische Feldlinien sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Feldlinien beginnen an positiven und enden an negativen Ladungen."
      - "Feldlinien können sich schneiden, wenn zwei Ladungen nah beieinander sind."
      - "Wo Feldlinien dicht liegen, ist das Feld stark."
      - "An der Oberfläche eines Leiters stehen Feldlinien senkrecht."
      - "Im homogenen Feld verlaufen die Feldlinien parallel und gleich dicht."
    richtig: [0, 2, 3, 4]
    fehler:
      - wert: [0, 1, 2, 3, 4]
        meldung: |
          Feldlinien schneiden sich nie. An einem Schnittpunkt hätte die Kraft auf eine Probeladung zwei Richtungen zugleich. Das ist unmöglich.
      - wert: [0, 2, 4]
        meldung: |
          Auch die Aussage über Leiteroberflächen stimmt. Hätte das Feld dort eine Komponente entlang der Oberfläche, würden die freien Elektronen sich bewegen. Im Gleichgewicht ist das ausgeschlossen.
hinweise:
  - Prüfe jede Aussage gegen die fünf Regeln. Überlege beim Schneiden, was ein Schnittpunkt für die Kraftrichtung bedeuten würde.
loesung: |
  **Ansatz:** Wir prüfen jede Aussage an der Bedeutung einer Feldlinie: Sie zeigt die Kraftrichtung auf eine positive Probeladung.
  ---
  Richtig sind Anfang und Ende an Ladungen, Dichte als Maß der Feldstärke, senkrechtes Auftreffen auf Leiter und parallele Linien im homogenen Feld.
  ---
  Falsch ist das Schneiden. An jedem Ort gibt es nur eine Kraftrichtung, also nur eine Feldlinie.
```

```aufgabe
id: p12-feldlinien-bahn
titel: Fliegt die Ladung entlang der Feldlinie?
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Proton fliegt mit großer Geschwindigkeit **parallel** zu den Platten in einen Plattenkondensator. Die Feldlinien zeigen senkrecht von der oberen zur unteren Platte. Wie sieht seine Bahn zwischen den Platten aus?
teile:
  - typ: auswahl
    optionen:
      - "Eine nach unten gekrümmte Parabel. Waagrecht bleibt die Geschwindigkeit, senkrecht wird das Proton beschleunigt."
      - "Es knickt sofort ab und fliegt entlang einer Feldlinie senkrecht nach unten."
      - "Eine Gerade parallel zu den Platten, weil das Feld senkrecht zur Bewegung steht und deshalb nichts bewirkt."
      - "Eine nach oben gekrümmte Parabel, weil das Proton zur positiven Platte gezogen wird."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Feldlinien sind keine Bahnen. Sie zeigen die Richtung der **Kraft**. Eine Kraft ändert die Geschwindigkeit nur allmählich. Die waagrechte Geschwindigkeit bleibt erhalten.
      - wert: 2
        meldung: |
          Eine Kraft senkrecht zur Bewegung bewirkt sehr wohl etwas: Sie biegt die Bahn. Nur der Betrag der waagrechten Geschwindigkeit bleibt gleich.
      - wert: 3
        meldung: |
          Das Proton ist positiv. Es wird von der positiven Platte **abgestoßen** und von der negativen angezogen. Die Kraft zeigt also in Feldrichtung, nach unten.
hinweise:
  - In welche Richtung zeigt die Kraft auf ein Proton im Feld?
  - Denk an den waagrechten Wurf aus der Kinematik. Welche Bewegung bleibt, welche kommt dazu?
loesung: |
  **Ansatz:** Auf das Proton wirkt die konstante Kraft $F = eE$ in Feldrichtung, also nach unten. Waagrecht wirkt keine Kraft.
  ---
  Waagrecht bleibt die Geschwindigkeit nach dem Trägheitssatz konstant. Senkrecht wird das Proton gleichmäßig beschleunigt.
  ---
  Zusammen ergibt das eine Parabel nach unten, wie beim waagrechten Wurf. Die Bahn verläuft also **quer** zu den Feldlinien und nicht entlang einer Feldlinie.
```

```aufgabe
id: p12-feldbild-deuten
titel: Ein Feldlinienbild lesen
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Das Bild zeigt das berechnete Feld zweier Ladungen A (links) und B (rechts). Welche Aussagen kannst du aus dem Bild ablesen? (Mehrfachauswahl)
plot:
  x: [-3, 3]
  y: [-2.2, 2.2]
  gleich: true
  strecken:
    - { von: [-0.927, 0.034], nach: [-0.604, 0.192], farbe: 1 }
    - { von: [-0.604, 0.192], nach: [-0.41, 0.315], farbe: 1 }
    - { von: [-0.41, 0.315], nach: [-0.282, 0.441], farbe: 1 }
    - { von: [-0.282, 0.441], nach: [-0.202, 0.59], farbe: 1 }
    - { von: [-0.202, 0.59], nach: [-0.152, 0.794], farbe: 1 }
    - { von: [-0.152, 0.794], nach: [-0.127, 1.092], farbe: 1 }
    - { von: [-0.127, 1.092], nach: [-0.136, 2.202], farbe: 1 }
    - { von: [-0.927, -0.034], nach: [-0.604, -0.192], farbe: 1 }
    - { von: [-0.604, -0.192], nach: [-0.41, -0.315], farbe: 1 }
    - { von: [-0.41, -0.315], nach: [-0.282, -0.441], farbe: 1 }
    - { von: [-0.282, -0.441], nach: [-0.202, -0.59], farbe: 1 }
    - { von: [-0.202, -0.59], nach: [-0.152, -0.794], farbe: 1 }
    - { von: [-0.152, -0.794], nach: [-0.127, -1.092], farbe: 1 }
    - { von: [-0.127, -1.092], nach: [-0.136, -2.202], farbe: 1 }
    - { von: [0.927, 0.034], nach: [0.604, 0.192], farbe: 1 }
    - { von: [0.604, 0.192], nach: [0.41, 0.315], farbe: 1 }
    - { von: [0.41, 0.315], nach: [0.282, 0.441], farbe: 1 }
    - { von: [0.282, 0.441], nach: [0.202, 0.59], farbe: 1 }
    - { von: [0.202, 0.59], nach: [0.152, 0.794], farbe: 1 }
    - { von: [0.152, 0.794], nach: [0.127, 1.092], farbe: 1 }
    - { von: [0.127, 1.092], nach: [0.136, 2.202], farbe: 1 }
    - { von: [0.927, -0.034], nach: [0.604, -0.192], farbe: 1 }
    - { von: [0.604, -0.192], nach: [0.41, -0.315], farbe: 1 }
    - { von: [0.41, -0.315], nach: [0.282, -0.441], farbe: 1 }
    - { von: [0.282, -0.441], nach: [0.202, -0.59], farbe: 1 }
    - { von: [0.202, -0.59], nach: [0.152, -0.794], farbe: 1 }
    - { von: [0.152, -0.794], nach: [0.127, -1.092], farbe: 1 }
    - { von: [0.127, -1.092], nach: [0.136, -2.202], farbe: 1 }
    - { von: [-0.954, 0.066], nach: [-0.782, 0.324], farbe: 1 }
    - { von: [-0.782, 0.324], nach: [-0.677, 0.517], farbe: 1 }
    - { von: [-0.677, 0.517], nach: [-0.602, 0.712], farbe: 1 }
    - { von: [-0.602, 0.712], nach: [-0.556, 0.917], farbe: 1 }
    - { von: [-0.556, 0.917], nach: [-0.535, 1.156], farbe: 1 }
    - { von: [-0.535, 1.156], nach: [-0.539, 1.436], farbe: 1 }
    - { von: [-0.539, 1.436], nach: [-0.625, 2.201], farbe: 1 }
    - { von: [-0.954, -0.066], nach: [-0.782, -0.324], farbe: 1 }
    - { von: [-0.782, -0.324], nach: [-0.677, -0.517], farbe: 1 }
    - { von: [-0.677, -0.517], nach: [-0.602, -0.712], farbe: 1 }
    - { von: [-0.602, -0.712], nach: [-0.556, -0.917], farbe: 1 }
    - { von: [-0.556, -0.917], nach: [-0.535, -1.156], farbe: 1 }
    - { von: [-0.535, -1.156], nach: [-0.539, -1.436], farbe: 1 }
    - { von: [-0.539, -1.436], nach: [-0.625, -2.201], farbe: 1 }
    - { von: [0.954, 0.066], nach: [0.782, 0.324], farbe: 1 }
    - { von: [0.782, 0.324], nach: [0.677, 0.517], farbe: 1 }
    - { von: [0.677, 0.517], nach: [0.602, 0.712], farbe: 1 }
    - { von: [0.602, 0.712], nach: [0.556, 0.917], farbe: 1 }
    - { von: [0.556, 0.917], nach: [0.535, 1.156], farbe: 1 }
    - { von: [0.535, 1.156], nach: [0.539, 1.436], farbe: 1 }
    - { von: [0.539, 1.436], nach: [0.625, 2.201], farbe: 1 }
    - { von: [0.954, -0.066], nach: [0.782, -0.324], farbe: 1 }
    - { von: [0.782, -0.324], nach: [0.677, -0.517], farbe: 1 }
    - { von: [0.677, -0.517], nach: [0.602, -0.712], farbe: 1 }
    - { von: [0.602, -0.712], nach: [0.556, -0.917], farbe: 1 }
    - { von: [0.556, -0.917], nach: [0.535, -1.156], farbe: 1 }
    - { von: [0.535, -1.156], nach: [0.539, -1.436], farbe: 1 }
    - { von: [0.539, -1.436], nach: [0.625, -2.201], farbe: 1 }
    - { von: [-1, 0.08], nach: [-1.023, 0.589], farbe: 1 }
    - { von: [-1.023, 0.589], nach: [-1.107, 1.041], farbe: 1 }
    - { von: [-1.107, 1.041], nach: [-1.278, 1.564], farbe: 1 }
    - { von: [-1.278, 1.564], nach: [-1.552, 2.207], farbe: 1 }
    - { von: [-1, -0.08], nach: [-1.023, -0.589], farbe: 1 }
    - { von: [-1.023, -0.589], nach: [-1.107, -1.041], farbe: 1 }
    - { von: [-1.107, -1.041], nach: [-1.278, -1.564], farbe: 1 }
    - { von: [-1.278, -1.564], nach: [-1.552, -2.207], farbe: 1 }
    - { von: [1, 0.08], nach: [1.023, 0.589], farbe: 1 }
    - { von: [1.023, 0.589], nach: [1.107, 1.041], farbe: 1 }
    - { von: [1.107, 1.041], nach: [1.278, 1.564], farbe: 1 }
    - { von: [1.278, 1.564], nach: [1.552, 2.207], farbe: 1 }
    - { von: [1, -0.08], nach: [1.023, -0.589], farbe: 1 }
    - { von: [1.023, -0.589], nach: [1.107, -1.041], farbe: 1 }
    - { von: [1.107, -1.041], nach: [1.278, -1.564], farbe: 1 }
    - { von: [1.278, -1.564], nach: [1.552, -2.207], farbe: 1 }
    - { von: [-1.046, 0.066], nach: [-1.4, 0.537], farbe: 1 }
    - { von: [-1.4, 0.537], nach: [-1.799, 0.985], farbe: 1 }
    - { von: [-1.799, 0.985], nach: [-2.32, 1.497], farbe: 1 }
    - { von: [-2.32, 1.497], nach: [-3.004, 2.111], farbe: 1 }
    - { von: [-1.046, -0.066], nach: [-1.4, -0.537], farbe: 1 }
    - { von: [-1.4, -0.537], nach: [-1.799, -0.985], farbe: 1 }
    - { von: [-1.799, -0.985], nach: [-2.32, -1.497], farbe: 1 }
    - { von: [-2.32, -1.497], nach: [-3.004, -2.111], farbe: 1 }
    - { von: [1.046, 0.066], nach: [1.4, 0.537], farbe: 1 }
    - { von: [1.4, 0.537], nach: [1.799, 0.985], farbe: 1 }
    - { von: [1.799, 0.985], nach: [2.32, 1.497], farbe: 1 }
    - { von: [2.32, 1.497], nach: [3.004, 2.111], farbe: 1 }
    - { von: [1.046, -0.066], nach: [1.4, -0.537], farbe: 1 }
    - { von: [1.4, -0.537], nach: [1.799, -0.985], farbe: 1 }
    - { von: [1.799, -0.985], nach: [2.32, -1.497], farbe: 1 }
    - { von: [2.32, -1.497], nach: [3.004, -2.111], farbe: 1 }
    - { von: [-1.075, 0.027], nach: [-1.946, 0.325], farbe: 1 }
    - { von: [-1.946, 0.325], nach: [-3.009, 0.644], farbe: 1 }
    - { von: [-1.075, -0.027], nach: [-1.946, -0.325], farbe: 1 }
    - { von: [-1.946, -0.325], nach: [-3.009, -0.644], farbe: 1 }
    - { von: [1.075, 0.027], nach: [1.946, 0.325], farbe: 1 }
    - { von: [1.946, 0.325], nach: [3.009, 0.644], farbe: 1 }
    - { von: [1.075, -0.027], nach: [1.946, -0.325], farbe: 1 }
    - { von: [1.946, -0.325], nach: [3.009, -0.644], farbe: 1 }
    - { von: [-3, 0], nach: [-1.08, 0], farbe: 1 }
    - { von: [-0.92, 0], nach: [-0.05, 0], farbe: 1 }
    - { von: [0.05, 0], nach: [0.92, 0], farbe: 1 }
    - { von: [1.08, 0], nach: [3, 0], farbe: 1 }
  vektoren:
    - { von: [-0.463, 0.269], nach: [-0.295, 0.411], farbe: 1 }
    - { von: [-0.463, -0.269], nach: [-0.295, -0.411], farbe: 1 }
    - { von: [0.463, 0.269], nach: [0.295, 0.411], farbe: 1 }
    - { von: [0.463, -0.269], nach: [0.295, -0.411], farbe: 1 }
    - { von: [-0.714, 0.435], nach: [-0.623, 0.635], farbe: 1 }
    - { von: [-0.714, -0.435], nach: [-0.623, -0.635], farbe: 1 }
    - { von: [0.714, 0.435], nach: [0.623, 0.635], farbe: 1 }
    - { von: [0.714, -0.435], nach: [0.623, -0.635], farbe: 1 }
    - { von: [-1.014, 0.52], nach: [-1.041, 0.738], farbe: 1 }
    - { von: [-1.014, -0.52], nach: [-1.041, -0.738], farbe: 1 }
    - { von: [1.014, 0.52], nach: [1.041, 0.738], farbe: 1 }
    - { von: [1.014, -0.52], nach: [1.041, -0.738], farbe: 1 }
    - { von: [-1.406, 0.546], nach: [-1.548, 0.713], farbe: 1 }
    - { von: [-1.406, -0.546], nach: [-1.548, -0.713], farbe: 1 }
    - { von: [1.406, 0.546], nach: [1.548, 0.713], farbe: 1 }
    - { von: [1.406, -0.546], nach: [1.548, -0.713], farbe: 1 }
    - { von: [-1.442, 0.158], nach: [-1.651, 0.229], farbe: 1 }
    - { von: [-1.442, -0.158], nach: [-1.651, -0.229], farbe: 1 }
    - { von: [1.442, 0.158], nach: [1.651, 0.229], farbe: 1 }
    - { von: [1.442, -0.158], nach: [1.651, -0.229], farbe: 1 }
    - { von: [-2.1, 0], nach: [-2.35, 0], farbe: 1 }
    - { von: [-0.6, 0], nach: [-0.35, 0], farbe: 1 }
    - { von: [0.6, 0], nach: [0.35, 0], farbe: 1 }
    - { von: [2.1, 0], nach: [2.35, 0], farbe: 1 }
  punkte:
    - { x: -1, y: 0, label: "A" }
    - { x: 1, y: 0, label: "B" }
    - { x: 0, y: 0, label: "M" }
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "A und B haben dasselbe Vorzeichen."
      - "A und B sind positiv."
      - "Im Mittelpunkt M ist die Feldstärke null."
      - "Eine positive Probeladung bei M würde zu A gezogen."
      - "Nahe bei A ist das Feld stärker als weit außen am Bildrand."
    richtig: [0, 1, 2, 4]
    fehler:
      - wert: [0, 2, 4]
        meldung: |
          Schau auf die Pfeile. Sie zeigen von beiden Ladungen **weg**. Feldlinien beginnen an positiven Ladungen, also sind beide positiv.
      - wert: [0, 1, 2, 3, 4]
        meldung: |
          Bei M heben sich die Felder von A und B auf. Eine Probeladung genau bei M spürt keine Kraft. Erst ein kleines Stück daneben würde sie weggeschoben.
      - wert: [0, 1, 4]
        meldung: |
          Auch M lässt sich ablesen. Dort läuft keine Linie durch, und die Linien von A und B weichen einander aus. Die beiden Felder sind dort gleich stark und entgegengesetzt.
hinweise:
  - Woran erkennst du im Bild das Vorzeichen einer Ladung? Achte auf die Pfeilrichtung.
  - Wo liegen die Linien dicht, wo weit auseinander?
loesung: |
  **Ansatz:** Wir lesen Vorzeichen aus der Pfeilrichtung und Feldstärke aus der Liniendichte.
  ---
  Die Pfeile zeigen von A und von B weg. Feldlinien beginnen an positiven Ladungen. Also sind beide positiv, haben dasselbe Vorzeichen.
  ---
  Bei M weichen die Linien aus, die Felder heben sich auf: $E = 0$. Eine Probeladung genau dort spürt keine Kraft, auch nicht zu A hin. Nahe A liegen die Linien dicht, das Feld ist dort stärker als am Rand.
```

:::merke[Rezept: Feldstärke und Kraft im Feld]
1. **Feld bestimmen:** aus einer gemessenen Kraft mit $E = F/q$ oder für eine Punktladung mit $E = k\,|Q|/r^2$.
2. **Richtung des Feldes:** von positiven Ladungen weg, zu negativen hin.
3. **Kraft auf eine Ladung:** $F = |q|\,E$. Positive Ladung in Feldrichtung, negative entgegen.
4. **Bewegung:** $a = F/m$. Die Feldlinie zeigt die Kraftrichtung, nicht die Bahn.
:::

```aufgabe
id: p12-feld-umkehr
titel: Wo ist das Feld so stark?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  In welchem Abstand von einer Punktladung $Q = 12\,\text{nC}$ beträgt die Feldstärke $3{,}0\,\text{kV/m}$? Gib das Ergebnis in cm an.
teile:
  - typ: zahl
    loesung: "sqrt(8.99e9*12e-9/3000)*100"
    einheit: "cm"
    anzeige: '19{,}0'
    fehler:
      - wert: "8.99e9*12e-9/3000*100"
        meldung: |
          Das ist $r^2$ in der falschen Einheit. Aus $r^2 = kQ/E$ musst du noch die Wurzel ziehen.
      - wert: "sqrt(8.99e9*12e-9/3)*100"
        meldung: |
          Kilo heißt $10^{3}$. $3{,}0\,\text{kV/m}$ sind $3000\,\text{V/m}$.
hinweise:
  - 'Stelle $E = k\,Q/r^2$ nach $r^2$ um, indem du mit $r^2$ multiplizierst und durch $E$ teilst.'
  - 'Dann die Wurzel ziehen und von Meter in Zentimeter umrechnen.'
gefuehrt:
  - text: Stelle $E = k\,Q/r^2$ nach $r$ um.
    erklaerung: 'Mit $r^2$ multiplizieren gibt $E\,r^2 = k\,Q$. Durch $E$ teilen gibt $r^2 = k\,Q/E$. Wurzel: $r = \sqrt{k\,Q/E}$.'
  - text: Berechne $r^2$ in $\text{m}^2$.
    teil:
      typ: zahl
      loesung: "8.99e9*12e-9/3000"
      fehler:
        - wert: "8.99e9*12e-9/3"
          meldung: '$3{,}0\,\text{kV/m}$ sind $3000\,\text{V/m}$.'
    erklaerung: '$r^2 = \dfrac{8{,}99\cdot 10^{9}\cdot 12\cdot 10^{-9}}{3000}\,\text{m}^2 = \dfrac{107{,}9}{3000}\,\text{m}^2 = 0{,}0360\,\text{m}^2$.'
  - text: Ziehe die Wurzel. Wie groß ist $r$ in cm?
    teil:
      typ: zahl
      loesung: "sqrt(8.99e9*12e-9/3000)*100"
      einheit: "cm"
    erklaerung: '$r = \sqrt{0{,}0360\,\text{m}^2} = 0{,}190\,\text{m} = 19{,}0\,\text{cm}$.'
  - text: Mache die Probe mit $r = 0{,}190\,\text{m}$.
    erklaerung: '$8{,}99\cdot 10^{9}\cdot 12\cdot 10^{-9}/0{,}190^2\,\text{V/m} = 2{,}99\cdot 10^{3}\,\text{V/m}$. Das passt.'
loesung: |
  **Ansatz:** Umkehraufgabe zum Feld einer Punktladung. Gesucht ist $r$ in $E = k\,Q/r^2$.
  ---
  **Umstellen:** $r^2 = k\,Q/E$, also $r = \sqrt{k\,Q/E}$.
  ---
  **Einsetzen:** $r = \sqrt{\dfrac{8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot 12\cdot 10^{-9}\,\text{C}}{3{,}0\cdot 10^{3}\,\text{N/C}}} = \sqrt{0{,}0360\,\text{m}^2} = 0{,}190\,\text{m} = 19{,}0\,\text{cm}$.
  ---
  **Probe:** Bei $19\,\text{cm}$ ergibt $E = kQ/r^2$ wieder rund $3{,}0\,\text{kV/m}$.
```

```reflexion
frage: Warum fällt die Probeladung $q$ aus der Feldstärke einer Punktladung heraus? Was würde es bedeuten, wenn $E$ doch von $q$ abhinge?
antwort: |
  Nach Coulomb ist die Kraft auf $q$ proportional zu $q$. Teilt man durch $q$, kürzt sich die Probeladung weg. Übrig bleibt eine Größe, die nur von der felderzeugenden Ladung $Q$ und vom Ort abhängt. Genau deshalb ist die Feldstärke eine Eigenschaft des Raumes und nicht der Probeladung. Hinge $E$ von $q$ ab, könnte man nicht sagen „hier herrscht das Feld $E$“, sondern nur „hier spürt diese bestimmte Ladung diese Kraft“. Der Feldbegriff wäre dann nutzlos.
```

```aufgabe
id: p12-kugelpendel-feld
titel: Geladene Kugel im homogenen Feld
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Eine kleine Kugel mit $1{,}5\,\text{g}$ hängt an einem isolierenden Faden in einem waagrechten homogenen Feld der Stärke $4{,}0\cdot 10^{4}\,\text{V/m}$. Der Faden ist um $8{,}0^\circ$ aus der Senkrechten in Feldrichtung ausgelenkt.

  a) Welche Kräfte wirken auf die Kugel? Wähle das richtige Freikörperbild in Worten.

  b) Berechne die Ladung der Kugel (in nC).
teile:
  - typ: auswahl
    label: a) Kräfte auf die Kugel
    optionen:
      - "Gewichtskraft nach unten, elektrische Kraft waagrecht in Feldrichtung, Fadenkraft entlang des Fadens nach oben"
      - "Gewichtskraft nach unten und Fadenkraft nach oben, sonst nichts"
      - "Gewichtskraft, elektrische Kraft, Fadenkraft und eine zusätzliche Kraft, die die Auslenkung hält"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ohne waagrechte Kraft würde der Faden senkrecht hängen. Die Auslenkung zeigt, dass eine waagrechte Kraft wirkt, die elektrische Kraft $qE$.
      - wert: 2
        meldung: |
          Eine eigene „Auslenkungskraft“ gibt es nicht. Die Auslenkung ist die **Folge** der drei Kräfte im Gleichgewicht.
  - typ: zahl
    label: b) q in nC
    loesung: "1.5e-3*9.81*tan(inRad(8.0))/4.0e4*1e9"
    einheit: "nC"
    anzeige: '51{,}7'
hinweise:
  - Die Kugel ruht. Die Fadenkraft gleicht die Summe aus Gewichtskraft und elektrischer Kraft aus.
  - 'Zerlege die Fadenkraft: Senkrecht gilt $F_S\cos\alpha = m g$, waagrecht $F_S\sin\alpha = qE$. Teilen gibt $\tan\alpha = qE/(m g)$.'
loesung: |
  **Modell:** Die Kugel ruht im Gleichgewicht. Auf sie wirken die Gewichtskraft $m g$ nach unten, die elektrische Kraft $qE$ waagrecht in Feldrichtung und die Fadenkraft $F_S$ entlang des Fadens.
  ---
  **Gleichungen:** Senkrecht: $F_S\cos\alpha = m g$. Waagrecht: $F_S\sin\alpha = qE$. Wir teilen die zweite durch die erste. Dabei kürzt sich $F_S$, und es bleibt $\tan\alpha = \dfrac{qE}{m g}$.
  ---
  **Auflösen:** $q = \dfrac{m g\tan\alpha}{E} = \dfrac{1{,}5\cdot 10^{-3}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot\tan 8{,}0^\circ}{4{,}0\cdot 10^{4}\,\tfrac{\text{N}}{\text{C}}} = \dfrac{2{,}07\cdot 10^{-3}\,\text{N}}{4{,}0\cdot 10^{4}\,\text{N/C}} = 5{,}17\cdot 10^{-8}\,\text{C}$.
  ---
  **Ergebnis:** $q \approx 51{,}7\,\text{nC}$, positiv, weil die Kugel in Feldrichtung ausgelenkt ist. Plausibel: Die elektrische Kraft $2{,}07\,\text{mN}$ ist klein gegen die Gewichtskraft $14{,}7\,\text{mN}$, passend zum kleinen Winkel.
```

## Felder überlagern

```aufgabe
id: p12-6-check
art: check
titel: "Vorhersage: Wo ist das Feld null?"
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Zwei positive Ladungen liegen auf einer Geraden, links $+1\,\text{nC}$, rechts $+9\,\text{nC}$. Irgendwo zwischen ihnen heben sich ihre Felder auf. Was vermutest du: Liegt dieser Punkt näher an der kleinen oder an der großen Ladung?

  Wiederholen: [Das elektrische Feld und Feldlinien](/lernen/physik1/elektrostatik/das-elektrische-feld-und-feldlinien)
teile:
  - typ: auswahl
    optionen:
      - "näher an der kleinen Ladung"
      - "genau in der Mitte"
      - "näher an der großen Ladung"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          In der Mitte sind die Abstände gleich. Dann ist das Feld der größeren Ladung stärker, die Felder heben sich nicht auf.
      - wert: 2
        meldung: |
          Nahe der großen Ladung ist ihr Feld noch stärker. Damit die schwächere Ladung mithalten kann, muss man **näher an sie** heran.
hinweise:
  - Das Feld einer Ladung ist nahe bei ihr stark. Wo kann die kleine Ladung mit der großen gleichziehen?
loesung: |
  Die Felder heben sich auf, wo beide gleich stark sind. Die kleine Ladung erzeugt ein schwächeres Feld.
  ---
  Gleich stark kann es nur sein, wenn man der kleinen Ladung näher ist. Wie viel näher, rechnen wir in dieser Lektion aus.
```

In der Lektion [Mehrere Ladungen: Kräfte als Vektorsumme](/lernen/physik1/elektrostatik/mehrere-ladungen-kraefte-als-vektorsumme)
hast du Kräfte addiert. Mit Feldern geht es genauso. Das Feld einer Ladungsanordnung ist an jedem Ort
die Vektorsumme der Einzelfelder:
$$\vec E = \vec E_1 + \vec E_2 + \ldots$$
Jedes Einzelfeld $\vec E_i$ berechnet man so, als wäre nur die Ladung $Q_i$ da. Das ist wieder das
Superpositionsprinzip. Der Vorteil gegenüber den Kräften: Das Ergebnis gilt für **jede** Probeladung. Die
Kraft auf eine Ladung $q$ folgt danach einfach aus $\vec F = q\,\vec E$.

### Auf der Verbindungslinie zweier Ladungen

Auf der Verbindungslinie zeigen beide Einzelfelder entlang dieser Linie. Zwei Fälle sind wichtig:

- **Zwischen ungleichnamigen Ladungen** zeigt das Feld der positiven Ladung von ihr weg und das Feld der
  negativen Ladung zu ihr hin. Beide zeigen also in dieselbe Richtung, von plus nach minus. Die Beträge
  **addieren** sich.
- **Zwischen gleichnamigen Ladungen** zeigen die Einzelfelder in entgegengesetzte Richtungen. Die
  Beträge werden **subtrahiert**. An einer Stelle sind sie gleich groß. Dort ist das Feld null.

:::beispiel[Wo ist das Feld zwischen zwei positiven Ladungen null?]
Die Ladung $Q_1 = +1{,}0\,\text{nC}$ sitzt bei $x = 0$, die Ladung $Q_2 = +9{,}0\,\text{nC}$ bei $x = 40\,\text{cm}$.
Gesucht ist der Punkt $x$ zwischen ihnen, an dem $E = 0$ gilt.

**Schritt 1, Bedingung:** Zwischen gleichnamigen Ladungen zeigen die Felder entgegengesetzt. Das Feld ist
null, wo die Beträge gleich sind. Der Abstand zu $Q_1$ ist $x$, der Abstand zu $Q_2$ ist $0{,}40\,\text{m} - x$:
$$k\,\frac{Q_1}{x^2} = k\,\frac{Q_2}{(0{,}40 - x)^2}.$$

**Schritt 2, vereinfachen:** $k$ kürzt sich, und wir setzen die Zahlen in nC ein:
$\dfrac{1}{x^2} = \dfrac{9}{(0{,}40 - x)^2}$. Über Kreuz multipliziert: $(0{,}40 - x)^2 = 9\,x^2$.

**Schritt 3, Wurzel ziehen:** Beide Abstände sind positiv, also dürfen wir die positive Wurzel nehmen:
$0{,}40 - x = 3x$. Daraus folgt $0{,}40 = 4x$ und $x = 0{,}10\,\text{m}$.

**Schritt 4, Probe:** $1/0{,}10^2 = 100$ und $9/0{,}30^2 = 100$. Der Nullpunkt liegt bei $10\,\text{cm}$, also
näher an der kleinen Ladung, wie vermutet.
:::

Warum durfte man die Wurzel einfach ziehen? Die Gleichung $(0{,}40 - x)^2 = 9x^2$ hat zwei Lösungen. Die
zweite gehört zu $0{,}40 - x = -3x$, also $x = -0{,}20\,\text{m}$. Dieser Punkt liegt links von $Q_1$, dort
zeigen beide Felder nach links und können sich nicht aufheben. Physikalisch passt nur $x = 0{,}10\,\text{m}$.
Quadratische Gleichungen wiederholst du in [Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).

:::achtung[Fehler: Die Abstände ohne Quadrat ins Verhältnis gesetzt]
**Falsche Rechnung:** Für das Beispiel mit $1\,\text{nC}$ und $9\,\text{nC}$ schreibt jemand:
„$\dfrac{x}{0{,}40 - x} = \dfrac19$, also $9x = 0{,}40 - x$ und $x = 4{,}0\,\text{cm}$.“

**Richtig:** Die Feldstärke fällt mit dem **Quadrat** des Abstands. Das Verhältnis der Abstände ist
deshalb die **Wurzel** des Ladungsverhältnisses: $\sqrt{9} = 3$. So kommt man auf $0{,}40 - x = 3x$ und
$x = 10\,\text{cm}$. Probe bei $4\,\text{cm}$: $1/0{,}04^2 = 625$, aber $9/0{,}36^2 = 69$. Das passt nicht.
:::

:::achtung[Fehler: Felder zwischen gleichnamigen Ladungen addiert]
**Falsche Rechnung:** $+6{,}0\,\text{nC}$ bei $x = 0$, $+2{,}0\,\text{nC}$ bei $x = 20\,\text{cm}$. In der Mitte
soll gelten: „$E = k\,\dfrac{6{,}0\cdot 10^{-9}}{0{,}10^2} + k\,\dfrac{2{,}0\cdot 10^{-9}}{0{,}10^2} = 7{,}2\,\text{kV/m}$.“

**Richtig:** Das linke Feld zeigt nach rechts, von $+6\,\text{nC}$ weg. Das rechte zeigt nach links, von
$+2\,\text{nC}$ weg. Sie müssen **subtrahiert** werden:
$E = k\,\dfrac{(6{,}0 - 2{,}0)\cdot 10^{-9}}{0{,}10^2} = 3{,}6\,\text{kV/m}$, nach rechts, also von der größeren Ladung weg.
:::

```aufgabe
id: p12-superposition
titel: Feld in der Mitte eines Dipols
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Eine Ladung $+4{,}0\,\text{nC}$ sitzt bei $x = 0$, eine Ladung $-4{,}0\,\text{nC}$ bei $x = 20\,\text{cm}$. Berechne den Betrag der Feldstärke im Mittelpunkt bei $x = 10\,\text{cm}$ (in V/m).
teile:
  - typ: zahl
    loesung: "2*1/(4*pi*8.854e-12)*4e-9/0.10^2"
    einheit: "V/m"
    anzeige: '7190'
    fehler:
      - wert: "0"
        meldung: |
          Die Felder heben sich hier **nicht** auf. Das Feld der positiven Ladung zeigt von ihr weg, nach rechts. Das Feld der negativen Ladung zeigt zu ihr hin, ebenfalls nach rechts.
      - wert: "1/(4*pi*8.854e-12)*4e-9/0.10^2"
        meldung: |
          Das ist nur das Feld **einer** Ladung. Das zweite zeigt in dieselbe Richtung und kommt dazu.
hinweise:
  - Zeigen die beiden Einzelfelder in der Mitte in dieselbe oder in entgegengesetzte Richtungen?
loesung: |
  **Richtungen:** Das Feld der positiven Ladung zeigt von ihr weg ($+x$). Das Feld der negativen Ladung zeigt zu ihr hin, ebenfalls $+x$. Die Beträge addieren sich.
  ---
  **Einzelfeld:** $E_1 = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{4{,}0\cdot 10^{-9}\,\text{C}}{(0{,}10\,\text{m})^2} = 3595\,\text{V/m}$.
  ---
  **Summe:** $E = 2\cdot 3595\,\text{V/m} \approx 7190\,\text{V/m}$ in $+x$-Richtung, von plus nach minus.
```

```aufgabe
id: p12-feld-gleichnamig-mitte
titel: Feld zwischen zwei ungleich großen positiven Ladungen
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  $Q_1 = +5{,}0\,\text{nC}$ sitzt bei $x = 0$, $Q_2 = +3{,}0\,\text{nC}$ bei $x = 30\,\text{cm}$. Wie groß ist die Feldstärke genau in der Mitte (in V/m)?
teile:
  - typ: zahl
    loesung: "8.99e9*(5.0e-9 - 3.0e-9)/0.15^2"
    einheit: "V/m"
    anzeige: '799'
    fehler:
      - wert: "8.99e9*(5.0e-9 + 3.0e-9)/0.15^2"
        meldung: |
          Zwischen gleichnamigen Ladungen zeigen die Einzelfelder **entgegengesetzt**. Du musst die Beträge subtrahieren.
      - wert: "8.99e9*(5.0e-9 - 3.0e-9)/0.30^2"
        meldung: |
          Der Abstand von der Mitte zu jeder Ladung ist $15\,\text{cm}$, nicht $30\,\text{cm}$.
hinweise:
  - Beide Felder zeigen von ihrer Ladung weg. In der Mitte zeigen sie deshalb in entgegengesetzte Richtungen.
loesung: |
  **Ansatz:** Superposition. In der Mitte zeigt das Feld von $Q_1$ nach rechts, das von $Q_2$ nach links. Beide Abstände sind $0{,}15\,\text{m}$.
  ---
  **Rechnung:** $E = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{5{,}0\cdot 10^{-9}\,\text{C} - 3{,}0\cdot 10^{-9}\,\text{C}}{(0{,}15\,\text{m})^2} = 799\,\text{V/m}$, nach rechts, von der größeren Ladung weg.
```

```aufgabe
id: p12-nullpunkt
titel: Wo ist das Feld null?
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Die Ladung $Q_1 = +1{,}0\,\text{nC}$ sitzt bei $x = 0$, die Ladung $Q_2 = +4{,}0\,\text{nC}$ bei $x = 30\,\text{cm}$. An welcher Stelle zwischen den Ladungen ist die Feldstärke null? Gib $x$ in cm an.
teile:
  - typ: zahl
    loesung: "30/3"
    einheit: "cm"
    anzeige: '10'
    fehler:
      - wert: "30/5"
        meldung: |
          Du hast die Abstände im Verhältnis $1:4$ geteilt. Die Feldstärke fällt aber mit $r^2$. Das Abstandsverhältnis ist die **Wurzel** des Ladungsverhältnisses, also $1:2$.
      - wert: "20"
        meldung: |
          Das ist der Punkt im Verhältnis $2:1$, also näher an der **großen** Ladung. Dort überwiegt deren Feld. Der Nullpunkt liegt näher an der kleinen Ladung.
hinweise:
  - Zwischen zwei gleichnamigen Ladungen zeigen die Einzelfelder in entgegengesetzte Richtungen. Setze die Beträge gleich.
  - 'Aus $\dfrac{1}{x^2} = \dfrac{4}{(30-x)^2}$ folgt durch Wurzelziehen $30 - x = 2x$.'
gefuehrt:
  - text: Stelle die Bedingung „beide Beträge gleich“ auf. Welcher Abstand gehört zu welcher Ladung?
    erklaerung: 'Abstand zu $Q_1$: $x$. Abstand zu $Q_2$: $30\,\text{cm} - x$. Bedingung: $\dfrac{1}{x^2} = \dfrac{4}{(30 - x)^2}$, $k$ und die Einheit nC kürzen sich.'
  - text: 'Ziehe auf beiden Seiten die Wurzel. Welches Verhältnis $(30 - x) : x$ ergibt sich?'
    teil:
      typ: zahl
      loesung: "sqrt(4)"
      fehler:
        - wert: "4"
          meldung: Die Abstände stehen im Quadrat. Das Verhältnis der Abstände ist die Wurzel aus $4$.
    erklaerung: 'Aus $(30 - x)^2 = 4x^2$ folgt $30 - x = 2x$. Das Verhältnis ist $2$.'
  - text: Löse $30 - x = 2x$ nach $x$ auf (in cm).
    teil:
      typ: zahl
      loesung: "10"
      einheit: "cm"
    erklaerung: '$30 = 3x$, also $x = 10\,\text{cm}$.'
  - text: Mache die Probe.
    erklaerung: '$1/0{,}10^2 = 100$ und $4/0{,}20^2 = 100$. Beide Felder sind gleich stark.'
loesung: |
  **Bedingung:** $k\dfrac{Q_1}{x^2} = k\dfrac{Q_2}{(0{,}30 - x)^2}$, also $\dfrac{1}{x^2} = \dfrac{4}{(0{,}30-x)^2}$.
  ---
  **Wurzel** (beide Abstände positiv): $0{,}30 - x = 2x$, also $0{,}30 = 3x$ und $x = 0{,}10\,\text{m} = 10\,\text{cm}$.
  ---
  **Plausibel:** Der Nullpunkt liegt näher an der kleineren Ladung. Probe: $1/0{,}1^2 = 100$ und $4/0{,}2^2 = 100$.
```

### Felder in der Ebene

Liegt der Punkt nicht auf der Verbindungslinie, zeigen die Einzelfelder in verschiedene Richtungen. Man
zerlegt sie in Komponenten und addiert getrennt, genau wie bei den Kräften.

:::beispiel[Feld eines Dipols auf der Mittelsenkrechten]
Die Ladung $+5{,}0\,\text{nC}$ sitzt bei $(-3{,}0\,|\,0)\,\text{cm}$, die Ladung $-5{,}0\,\text{nC}$ bei
$(3{,}0\,|\,0)\,\text{cm}$. Gesucht ist das Feld im Punkt $P = (0\,|\,4{,}0)\,\text{cm}$.

**Schritt 1, Abstände:** Beide Ladungen sind von P gleich weit entfernt:
$r = \sqrt{3{,}0^2 + 4{,}0^2}\,\text{cm} = 5{,}0\,\text{cm}$.

**Schritt 2, Beträge:** $E_1 = E_2 = 8{,}99\cdot 10^{9}\cdot\dfrac{5{,}0\cdot 10^{-9}}{0{,}050^2}\,\text{V/m} = 1{,}80\cdot 10^{4}\,\text{V/m}$.

**Schritt 3, Richtungen:** $\vec E_1$ zeigt von $+5\,\text{nC}$ weg, also nach rechts oben. Der
Richtungsvektor ist $(3\,|\,4)/5 = (0{,}6\,|\,0{,}8)$. $\vec E_2$ zeigt zu $-5\,\text{nC}$ hin, also nach rechts unten,
mit Richtung $(0{,}6\,|\,-0{,}8)$.

**Schritt 4, addieren:** Die $y$-Komponenten heben sich auf. Die $x$-Komponenten addieren sich:
$E = 2\cdot 1{,}80\cdot 10^{4}\,\text{V/m}\cdot 0{,}6 = 2{,}16\cdot 10^{4}\,\text{V/m}$, parallel zur Achse von plus nach minus.
:::

```plot
x: [-4, 4]
y: [-1, 7.5]
gleich: true
vektoren:
  - { von: [0, 4], nach: [1.08, 5.44], label: "E₁", farbe: 1 }
  - { von: [0, 4], nach: [1.08, 2.56], label: "E₂", farbe: 2 }
  - { von: [0, 4], nach: [2.16, 4], label: "E", farbe: 0 }
strecken:
  - { von: [-3, 0], nach: [0, 4], gestrichelt: true }
  - { von: [3, 0], nach: [0, 4], gestrichelt: true }
punkte:
  - { x: -3, y: 0, label: "+5 nC", farbe: 1 }
  - { x: 3, y: 0, label: "−5 nC", farbe: 2 }
  - { x: 0, y: 4, label: "P" }
beschriftung: "Feld eines Dipols im Punkt P auf der Mittelsenkrechten, Längen in cm, Pfeile in 10 kV/m. E₁ zeigt von der positiven Ladung weg, E₂ zur negativen Ladung hin. Ihre senkrechten Anteile heben sich auf. Die Summe E (blau) zeigt parallel zur Verbindungslinie, von plus nach minus."
```

:::merke[Rezept: Feld mehrerer Punktladungen]
1. Für jede Ladung den Abstand zum Punkt bestimmen und $E_i = k\,|Q_i|/r_i^2$ ausrechnen.
2. Für jedes Einzelfeld die Richtung einzeichnen: von positiven Ladungen weg, zu negativen hin.
3. Auf einer Geraden mit Vorzeichen addieren. In der Ebene in Komponenten zerlegen und getrennt addieren.
4. Nullpunkt gesucht: Beträge gleichsetzen, $k$ kürzen, Wurzel ziehen, nur die physikalisch passende
   Lösung behalten, Probe machen.
:::

```aufgabe
id: p12-feld-senkrecht
titel: Feld zweier positiver Ladungen über ihrer Mitte
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Zwei Ladungen von je $+3{,}0\,\text{nC}$ sitzen bei $(-4{,}0\,|\,0)\,\text{cm}$ und $(4{,}0\,|\,0)\,\text{cm}$. Wie groß ist die Feldstärke im Punkt $(0\,|\,3{,}0)\,\text{cm}$ (in kV/m), und in welche Richtung zeigt sie?
teile:
  - typ: zahl
    label: E in kV/m
    loesung: "2*8.99e9*3.0e-9/0.05^2*3/5/1000"
    einheit: "kV/m"
    anzeige: '12{,}9'
    fehler:
      - wert: "2*8.99e9*3.0e-9/0.05^2/1000"
        meldung: |
          Die beiden Felder zeigen nicht in dieselbe Richtung. Nur ihre senkrechten Anteile addieren sich. Die waagrechten heben sich auf.
      - wert: "0"
        meldung: |
          Nur die **waagrechten** Anteile heben sich auf. Beide Felder zeigen schräg nach oben, ihre senkrechten Anteile addieren sich.
  - typ: auswahl
    label: Richtung
    optionen:
      - "senkrecht nach oben, weg von der Verbindungslinie"
      - "waagrecht nach rechts"
      - "senkrecht nach unten, zur Verbindungslinie hin"
    richtig: [0]
    fehler:
      - wert: 2
        meldung: |
          Beide Ladungen sind positiv. Ihre Felder zeigen von ihnen **weg**, also schräg nach oben.
hinweise:
  - 'Beide Abstände sind gleich: $r = \sqrt{4{,}0^2 + 3{,}0^2}\,\text{cm}$.'
  - 'Der senkrechte Anteil jedes Feldes ist $E_i\cdot\frac{3{,}0}{5{,}0}$. Die waagrechten Anteile sind entgegengesetzt gleich.'
loesung: |
  **Ansatz:** Superposition in der Ebene. Wegen der Symmetrie heben sich die waagrechten Anteile auf.
  ---
  **Einzelfeld:** $r = 5{,}0\,\text{cm}$, also $E_1 = E_2 = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{3{,}0\cdot 10^{-9}\,\text{C}}{(0{,}050\,\text{m})^2} = 1{,}08\cdot 10^{4}\,\text{V/m}$.
  ---
  **Senkrechte Anteile:** Jedes Feld zeigt von seiner Ladung weg, schräg nach oben. Der senkrechte Anteil ist $E_1\cdot\tfrac{3{,}0}{5{,}0} = 6{,}47\cdot 10^{3}\,\text{V/m}$.
  ---
  **Summe:** $E = 2\cdot 6{,}47\cdot 10^{3}\,\text{V/m} = 1{,}29\cdot 10^{4}\,\text{V/m} = 12{,}9\,\text{kV/m}$, senkrecht nach oben. Das passt zum Feldlinienbild zweier gleicher Ladungen: Über der Mitte laufen die Linien nach oben weg.
```

```aufgabe
id: p12-feld-graph
titel: Den Nullpunkt im Diagramm ablesen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Zwei positive Ladungen sitzen bei $x = 0$ und bei $x = 3\,\text{cm}$. Das Diagramm zeigt die $x$-Komponente der Feldstärke zwischen ihnen. Positive Werte heißen „Feld zeigt nach rechts“.

  a) Bei welchem $x$ ist das Feld null (in cm)?

  b) Welche der beiden Ladungen ist größer?
plot:
  x: [0, 3]
  y: [-12, 12]
  achsen: { x: "x in cm", y: "E_x (willkürliche Einheit)" }
  graphen:
    - { f: "1/x^2 - 4/(x-3)^2", von: 0.3, bis: 2.4, farbe: 0 }
teile:
  - typ: zahl
    label: a) x in cm
    loesung: "1"
    einheit: "cm"
    toleranz: 0.1
    fehler:
      - wert: "1.5"
        meldung: |
          Das ist die Mitte. Lies im Diagramm ab, wo die Kurve die waagrechte Achse schneidet.
  - typ: auswahl
    label: b) größere Ladung
    optionen:
      - "die rechte Ladung bei $x = 3\\,\\text{cm}$"
      - "die linke Ladung bei $x = 0$"
      - "beide gleich groß"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Nullpunkt liegt immer näher an der **kleineren** Ladung. Er liegt hier links von der Mitte.
      - wert: 2
        meldung: |
          Bei gleich großen Ladungen läge der Nullpunkt genau in der Mitte bei $1{,}5\,\text{cm}$.
hinweise:
  - Das Feld ist null, wo der Graph die waagrechte Achse schneidet.
  - Liegt der Nullpunkt näher an der großen oder an der kleinen Ladung?
loesung: |
  **Ansatz:** Wir lesen die Nullstelle des Graphen ab und deuten ihre Lage.
  ---
  **a)** Der Graph schneidet die Achse bei $x = 1\,\text{cm}$. Links davon überwiegt das Feld der linken Ladung (Feld nach rechts, positiv), rechts davon das Feld der rechten Ladung.
  ---
  **b)** Der Nullpunkt liegt näher an der linken Ladung. Also ist die linke kleiner und die **rechte größer**. Aus $\dfrac{(3-1)^2}{1^2} = 4$ folgt sogar: Die rechte Ladung ist viermal so groß.
```

```aufgabe
id: p12-nullpunkt-begruenden
titel: Warum liegt der Nullpunkt bei der kleineren Ladung?
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Begründe in zwei bis drei Sätzen, warum der feldfreie Punkt zwischen zwei gleichnamigen, verschieden großen Ladungen immer näher an der kleineren Ladung liegt. Erkläre auch, warum er bei gleich großen Ladungen genau in der Mitte liegt.
teile:
  - typ: text
    muster: |
      Am feldfreien Punkt müssen beide Einzelfelder gleich stark sein, $k\,Q_1/r_1^2 = k\,Q_2/r_2^2$. Die kleinere Ladung erzeugt bei gleichem Abstand das schwächere Feld. Um gleichzuziehen, muss ihr Abstand kleiner sein, und zwar im Verhältnis $r_1/r_2 = \sqrt{Q_1/Q_2}$. Bei gleichen Ladungen ist dieses Verhältnis $1$, also liegen beide Abstände gleich und der Punkt in der Mitte.
hinweise:
  - Schreib die Bedingung „beide Felder gleich stark“ als Gleichung hin.
  - Was muss mit dem Abstand passieren, damit eine kleinere Ladung ein gleich starkes Feld erzeugt?
loesung: |
  **Ansatz:** Bedingung für den feldfreien Punkt: $k\,Q_1/r_1^2 = k\,Q_2/r_2^2$.
  ---
  **Umformen:** $\dfrac{r_1^2}{r_2^2} = \dfrac{Q_1}{Q_2}$, also $\dfrac{r_1}{r_2} = \sqrt{\dfrac{Q_1}{Q_2}}$. Ist $Q_1$ kleiner, ist auch $r_1$ kleiner.
  ---
  **Sonderfall:** Bei $Q_1 = Q_2$ ist das Verhältnis $1$. Der Punkt liegt in der Mitte, so wie im Feldlinienbild zweier gleicher Ladungen.
```

```reflexion
frage: Zwischen zwei ungleichnamigen, gleich großen Ladungen gibt es auf der Verbindungsstrecke keinen feldfreien Punkt. Warum nicht? Gibt es irgendwo anders auf der Geraden durch beide Ladungen einen?
antwort: |
  Zwischen den Ladungen zeigen beide Felder in dieselbe Richtung, von plus nach minus. Sie addieren sich, können sich also nicht aufheben. Außerhalb der Strecke zeigen sie zwar entgegengesetzt, aber man ist immer einer Ladung näher als der anderen. Bei gleich großen Ladungen überwiegt dann stets das Feld der näheren Ladung. Es gibt also gar keinen feldfreien Punkt im Endlichen. Erst wenn die Ladungen verschieden groß sind, gibt es außen einen, und zwar auf der Seite der kleineren Ladung.
```

```aufgabe
id: p12-nullpunkt-aussen
titel: Feldfreier Punkt außerhalb
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  $Q_1 = +4{,}0\,\text{nC}$ sitzt bei $x = 0$, $Q_2 = -1{,}0\,\text{nC}$ bei $x = 30\,\text{cm}$.

  a) Erkläre, warum es zwischen den Ladungen keinen feldfreien Punkt gibt, und auf welcher Seite er liegen muss.

  b) Berechne die Lage des feldfreien Punktes (in cm).
teile:
  - typ: auswahl
    label: a) Lage
    optionen:
      - "rechts von $Q_2$, also auf der Seite der kleineren Ladung"
      - "zwischen den Ladungen, näher an $Q_2$"
      - "links von $Q_1$, also auf der Seite der größeren Ladung"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Zwischen ungleichnamigen Ladungen zeigen beide Felder in dieselbe Richtung, von plus nach minus. Dort können sie sich nicht aufheben.
      - wert: 2
        meldung: |
          Links von $Q_1$ ist man der **größeren** Ladung näher. Ihr Feld überwiegt dort immer.
  - typ: zahl
    label: b) x in cm
    loesung: "60"
    einheit: "cm"
    anzeige: '60'
    fehler:
      - wert: "20"
        meldung: |
          $x = 20\,\text{cm}$ liegt zwischen den Ladungen. Dort addieren sich die Felder. Das ist die unphysikalische zweite Lösung der quadratischen Gleichung.
hinweise:
  - 'Außerhalb der Strecke zeigen die Felder entgegengesetzt. Man muss näher an der kleineren Ladung sein, also rechts von $Q_2$.'
  - 'Für $x > 30\,\text{cm}$ gilt $\dfrac{4}{x^2} = \dfrac{1}{(x - 30)^2}$. Wurzel ziehen: $2(x - 30) = x$.'
loesung: |
  **a)** Zwischen den Ladungen zeigen beide Felder nach rechts, sie addieren sich. Links von $Q_1$ überwiegt immer das Feld der näheren, größeren Ladung. Nur rechts von $Q_2$ kann die kleinere, nähere Ladung mit der größeren, ferneren gleichziehen.
  ---
  **Bedingung** für $x > 30\,\text{cm}$: $k\dfrac{4{,}0\,\text{nC}}{x^2} = k\dfrac{1{,}0\,\text{nC}}{(x - 30\,\text{cm})^2}$. Mit $k$ und nC gekürzt: $(x - 30)^2\cdot 4 = x^2$.
  ---
  **Wurzel** (beide Abstände positiv): $2(x - 30) = x$, also $x = 60\,\text{cm}$. Die zweite Lösung $2(x - 30) = -x$ gibt $x = 20\,\text{cm}$. Sie liegt zwischen den Ladungen und passt nicht.
  ---
  **Probe:** $4/60^2 = 0{,}00111$ und $1/30^2 = 0{,}00111$. Bei $x = 60\,\text{cm}$ sind beide Felder gleich stark und entgegengesetzt.
```

## Feldstärke, Spannung und Potential im homogenen Feld

```aufgabe
id: p12-7-check
art: check
titel: "Vorwissen: Hängt die Hubarbeit vom Weg ab?"
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Du bringst eine Kiste mit $10\,\text{kg}$ auf eine $1{,}0\,\text{m}$ hohe Laderampe. Einmal hebst du sie senkrecht hinauf, einmal schiebst du sie reibungsfrei über eine $4{,}0\,\text{m}$ lange schräge Bahn hinauf. In welchem Fall verrichtest du mehr Arbeit gegen die Gewichtskraft?

  Herkunft: [Kapitel 4, Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit)
teile:
  - typ: auswahl
    optionen:
      - "In beiden Fällen gleich viel, nämlich $m g h$."
      - "Über die schräge Bahn mehr, weil der Weg viermal so lang ist."
      - "Senkrecht mehr, weil man dort die volle Gewichtskraft halten muss."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Auf der schrägen Bahn ist der Weg länger, aber die nötige Kraft entlang der Bahn kleiner. Beides gleicht sich genau aus. Es zählt nur der Höhenunterschied.
      - wert: 2
        meldung: |
          Senkrecht ist die Kraft größer, aber der Weg kürzer. Das Produkt aus Kraft und Weg in Kraftrichtung ist in beiden Fällen $m g h$.
hinweise:
  - Arbeit ist Kraft mal Weg **in Kraftrichtung**. Welcher Weg zählt bei der Gewichtskraft?
loesung: |
  Gegen die Gewichtskraft zählt nur der Weg in senkrechter Richtung, also der Höhenunterschied $h = 1{,}0\,\text{m}$.
  ---
  In beiden Fällen ist $W = m g h = 10\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}0\,\text{m} = 98\,\text{J}$. Genau diese Wegunabhängigkeit gilt gleich auch im elektrischen Feld.
```

Diese Lektion ist die wichtigste des Kapitels und für fast alle die schwierigste. Drei Größen klingen
ähnlich und werden ständig verwechselt: **Feldstärke**, **Potential** und **Spannung**. Lies die Lektion
langsam. Am Ende steht ein Vergleich, auf den du immer wieder zurückkommen kannst.

**Worum geht es in einem Satz?** Die Feldstärke sagt, wie stark eine Ladung an **einem Ort** gezogen
wird. Das Potential sagt, wie viel Energie pro Ladung an **einem Ort** gespeichert ist. Die Spannung ist
der **Unterschied** des Potentials zwischen **zwei Orten**.

### Das Bild vom Gelände

Das Schwerefeld der Erde kennst du aus der Mechanik. Es liefert ein genaues Bild für das elektrische
Feld. Stell dir eine Landschaft mit Hügeln vor.

- Die **Höhe** eines Punktes entspricht dem **Potential**. Sie ist eine Eigenschaft des Ortes.
- Der **Höhenunterschied** zwischen zwei Punkten entspricht der **Spannung**.
- Die **Steilheit** des Hangs entspricht der **Feldstärke**. Sie sagt, wie stark es an dieser Stelle
  bergab zieht.
- Eine Kugel rollt bergab. Eine positive Ladung „rollt“ ebenso vom hohen zum niedrigen Potential.

Ein Punkt kann sehr hoch liegen und trotzdem flach sein, zum Beispiel auf einer Hochebene. Ebenso kann
das Potential hoch und die Feldstärke null sein. Halte diese beiden Begriffe deshalb streng auseinander.

```aufgabe
id: p12-7-gelaende
art: check
titel: Das Gelände-Bild anwenden
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Im Gelände-Bild entspricht die Höhe dem Potential und die Steilheit der Feldstärke. Was gilt dann für die Mitte eines großen, flachen Hochplateaus?
teile:
  - typ: auswahl
    optionen:
      - "Hohes Potential, aber Feldstärke null."
      - "Hohes Potential und deshalb auch große Feldstärke."
      - "Potential null, weil es dort nicht bergab geht."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Feldstärke entspricht der **Steilheit**, nicht der Höhe. Ein flaches Plateau kann sehr hoch liegen und trotzdem nirgends steil sein.
      - wert: 2
        meldung: |
          Das Potential entspricht der **Höhe**. Das Plateau liegt hoch, sein Potential ist also hoch. Null ist nur die Steilheit.
hinweise:
  - Höhe und Steilheit sind zwei verschiedene Eigenschaften eines Ortes.
loesung: |
  Die Höhe des Plateaus ist groß, also ist das Potential hoch.
  ---
  Das Plateau ist flach, es zieht nirgends bergab. Die Feldstärke ist dort null.
```

### Arbeit im homogenen Feld

Im Plattenkondensator ist das Feld homogen. Auf eine positive Ladung $q$ wirkt dort überall dieselbe
Kraft $F = q\,E$ in Feldrichtung. Verschiebt das Feld die Ladung um die Strecke $d$ in Feldrichtung, dann
verrichtet es die Arbeit
$$W = F\cdot d = q\,E\,d.$$
Dabei ist $W$ die Arbeit in Joule, $q$ die Ladung in Coulomb, $E$ die Feldstärke in $\text{N/C}$ und $d$ die
Strecke in Metern **entlang der Feldlinien**. Verschiebt man die Ladung gegen das Feld, muss man selbst
diese Arbeit aufbringen.

Die Analogie zur Schwerkraft ist genau: Aus $W = m\,g\,h$ wird $W = q\,E\,d$. Die Ladung $q$ spielt die
Rolle der Masse, die Feldstärke $E$ die Rolle der Fallbeschleunigung, die Strecke $d$ die Rolle der Höhe.

Wichtig ist auch hier: Nur die Strecke **in Feldrichtung** zählt. Eine Verschiebung quer zum Feld kostet
keine Arbeit, weil die Kraft senkrecht zur Bewegung steht. Mathematisch ist das ein Skalarprodukt
$W = \vec F\cdot\vec s$, siehe [Das Skalarprodukt und der Winkel zwischen Vektoren](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren). Deshalb
hängt die Arbeit nur von Anfangs- und Endpunkt ab, nicht vom Weg dazwischen. Ein Feld mit dieser
Eigenschaft heißt **konservativ** (lateinisch, also: bewahrend). Die Arbeit geht nicht verloren, sie wird
als potentielle Energie gespeichert.

```aufgabe
id: p12-arbeit-homogen
titel: Arbeit des Feldes im Kondensator
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  In einem homogenen Feld der Stärke $2{,}0\cdot 10^{4}\,\text{V/m}$ bewegt sich eine positive Ladung $q = 3{,}0\,\text{nC}$ um $5{,}0\,\text{mm}$ in Feldrichtung. Wie viel Arbeit verrichtet das Feld (in µJ)?
teile:
  - typ: zahl
    loesung: "3.0e-9*2.0e4*5.0e-3*1e6"
    einheit: "µJ"
    anzeige: '0{,}30'
    fehler:
      - wert: "3.0e-9*2.0e4*5.0*1e6"
        meldung: |
          Die Strecke muss in Metern stehen: $5{,}0\,\text{mm} = 5{,}0\cdot 10^{-3}\,\text{m}$.
      - wert: "3.0e-9*2.0e4*1e6"
        meldung: |
          Das ist nur die Kraft $F = qE$ (in µN). Arbeit ist Kraft **mal Weg**.
hinweise:
  - 'Zuerst die Kraft $F = q\,E$, dann die Arbeit $W = F\cdot d$.'
loesung: |
  **Ansatz:** Im homogenen Feld ist die Kraft konstant. Die Arbeit ist Kraft mal Weg in Feldrichtung, $W = q\,E\,d$.
  ---
  **Rechnung:** $W = 3{,}0\cdot 10^{-9}\,\text{C}\cdot 2{,}0\cdot 10^{4}\,\tfrac{\text{N}}{\text{C}}\cdot 5{,}0\cdot 10^{-3}\,\text{m} = 3{,}0\cdot 10^{-7}\,\text{J} = 0{,}30\,\mu\text{J}$. Die Einheiten ergeben $\text{N}\cdot\text{m} = \text{J}$.
```

### Das Potential

Die potentielle Energie einer Ladung im Feld ist proportional zu ihrer Ladung. Eine doppelt so große
Ladung speichert am selben Ort die doppelte Energie. Teilt man durch die Ladung, erhält man eine Größe,
die nur vom **Ort** abhängt. Das ist das Potential.

:::definition[Elektrisches Potential]
Das **elektrische Potential** $\varphi$ (sprich „phi“) an einem Ort ist die potentielle Energie
$E_{\text{pot}}$ einer Probeladung $q$ an diesem Ort, geteilt durch die Ladung:
$$\varphi = \frac{E_{\text{pot}}}{q}, \qquad [\varphi] = \frac{\text{J}}{\text{C}} = \text{V}\ (\text{Volt}).$$
Den Nullpunkt darf man frei wählen. Meist nimmt man die Erde oder einen Punkt sehr weit weg.
:::

**Beispiel:** Die geerdete untere Platte eines Kondensators hat $\varphi = 0$, die obere Platte
$\varphi = 120\,\text{V}$. Eine Ladung von $1\,\text{C}$ an der oberen Platte hätte $120\,\text{J}$ mehr potentielle Energie
als an der unteren. **Nichtbeispiel:** Die potentielle Energie selbst ist **kein** Potential. Eine Ladung
von $2\,\text{C}$ hat an der oberen Platte $240\,\text{J}$. Das Potential dort bleibt $120\,\text{V}$.

Das Potential ist also „Energie pro Ladung“, so wie die Höhe im Schwerefeld „Lageenergie pro Masse und
pro $g$“ ist. Das Formelzeichen $\varphi$ verwechselt man leicht mit einem Winkel. Hier ist es immer das
Potential.

### Die Spannung

:::definition[Elektrische Spannung]
Die **Spannung** $U_{AB}$ zwischen zwei Punkten A und B ist der Unterschied ihrer Potentiale:
$$U_{AB} = \varphi_A - \varphi_B = \frac{W_{AB}}{q}.$$
Dabei ist $W_{AB}$ die Arbeit, die das Feld verrichtet, wenn sich die Ladung $q$ von A nach B bewegt.
Die Einheit ist $1\,\text{V} = 1\,\text{J/C}$.
:::

**Beispiel:** Eine $9$-Volt-Batterie hat zwischen ihren Polen die Spannung $9\,\text{V}$. Jedes Coulomb,
das außen vom Pluspol zum Minuspol fließt, bekommt vom Feld $9\,\text{J}$ Energie, zum Beispiel für eine
Lampe. **Nichtbeispiel:** „Der Punkt A hat $5\,\text{V}$ Spannung“ ist kein vollständiger Satz. Eine
Spannung gibt es immer nur **zwischen zwei** Punkten. Ein einzelner Punkt hat ein Potential.

Die Wahl des Nullpunkts verschiebt alle Potentiale um denselben Wert. Die Differenz, also die
Spannung, bleibt dabei gleich. Im Gelände ist es genauso: Ob man ab Meeresspiegel oder ab Tischkante
misst, der Höhenunterschied zwischen Gipfel und Tal ändert sich nicht.

```aufgabe
id: p12-arbeit-spannung
titel: Arbeit beim Verschieben
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine positive Ladung von $2{,}0\,\mu\text{C}$ bewegt sich von Punkt A zu Punkt B. A hat ein um $12\,\text{V}$ höheres Potential als B. Wie viel Arbeit verrichtet das Feld dabei? Gib das Ergebnis in µJ an.
teile:
  - typ: zahl
    loesung: "2.0e-6*12*1e6"
    einheit: "µJ"
    anzeige: '24'
    fehler:
      - wert: "12/2.0e-6*1e6"
        meldung: |
          Du hast die Spannung durch die Ladung geteilt. Aus $U = W/q$ folgt $W = q\cdot U$.
      - wert: "2.0*12*1e6"
        meldung: |
          Mikro heißt $10^{-6}$. Die Ladung ist $2{,}0\cdot 10^{-6}\,\text{C}$, nicht $2{,}0\,\text{C}$.
hinweise:
  - 'Spannung ist Arbeit pro Ladung, $U = W/q$. Stelle nach $W$ um.'
loesung: |
  **Ansatz:** Die Spannung zwischen A und B ist $U_{AB} = 12\,\text{V}$. Aus $U = W/q$ folgt $W = q\,U$.
  ---
  **Rechnung:** $W = 2{,}0\cdot 10^{-6}\,\text{C}\cdot 12\,\text{V} = 2{,}4\cdot 10^{-5}\,\text{J} = 24\,\mu\text{J}$, denn $\text{C}\cdot\text{V} = \text{J}$. Die positive Ladung „fällt“ zum niedrigeren Potential, das Feld verrichtet also positive Arbeit.
```

### Spannung und Feldstärke im homogenen Feld

Wir verbinden die beiden Formeln. Aus $W = q\,E\,d$ und $U = W/q$ folgt durch Teilen durch $q$:
$$U = E\cdot d \qquad\text{und umgestellt}\qquad E = \frac{U}{d}.$$
Dabei ist $U$ die Spannung zwischen zwei Punkten, die entlang der Feldlinien den Abstand $d$ haben. Diese
Formel gilt **nur im homogenen Feld**. Sie zeigt auch, warum $\text{N/C}$ und $\text{V/m}$ dasselbe sind:
$\text{V/m} = \text{J}/(\text{C}\cdot\text{m}) = \text{N}\cdot\text{m}/(\text{C}\cdot\text{m}) = \text{N/C}$.

:::beispiel[Feld, Potential und Arbeit in einem Kondensator]
Ein Plattenkondensator hat den Plattenabstand $d = 4{,}0\,\text{mm}$. Die untere Platte ist geerdet
($\varphi = 0$), die obere liegt auf $\varphi = 120\,\text{V}$.

**Schritt 1, Spannung:** $U = 120\,\text{V} - 0\,\text{V} = 120\,\text{V}$.

**Schritt 2, Feldstärke:** $E = U/d = 120\,\text{V} / 4{,}0\cdot 10^{-3}\,\text{m} = 3{,}0\cdot 10^{4}\,\text{V/m}$. Sie
zeigt von der oberen Platte (hohes Potential) zur unteren (niedriges Potential).

**Schritt 3, Potential 1,0 mm über der unteren Platte:** Im homogenen Feld steigt das Potential gleichmäßig an. In
$1{,}0\,\text{mm}$ Höhe über der unteren Platte gilt $\varphi = E\cdot 1{,}0\cdot 10^{-3}\,\text{m} = 30\,\text{V}$.

**Schritt 4, Arbeit:** Eine Ladung $q = 2{,}0\,\text{nC}$ wandert von der oberen zur unteren Platte. Das Feld
verrichtet $W = q\,U = 2{,}0\cdot 10^{-9}\,\text{C}\cdot 120\,\text{V} = 2{,}4\cdot 10^{-7}\,\text{J}$.
:::

```plot
x: [0, 6]
y: [-10, 140]
achsen: { x: "Höhe über der unteren Platte in mm", y: "φ in V" }
graphen:
  - { f: "30*x", von: 0, bis: 4, label: "Potential φ", farbe: 0 }
strecken:
  - { von: [4, 0], nach: [4, 120], gestrichelt: true }
punkte:
  - { x: 0, y: 0, label: "untere Platte, 0 V" }
  - { x: 4, y: 120, label: "obere Platte, 120 V" }
  - { x: 1, y: 30, label: "30 V" }
beschriftung: "Potential im Kondensator aus dem Beispiel. Zwischen den Platten steigt das Potential linear von 0 V auf 120 V. Die Steigung der Geraden ist überall gleich, sie ist der Betrag der Feldstärke: 120 V auf 4 mm, also 30 V pro mm oder 30 000 V/m. Konstante Steigung heißt homogenes Feld."
```

Das Diagramm zeigt einen wichtigen Zusammenhang: Die **Feldstärke ist die Steigung des Potentials**.
Wo das Potential steil ansteigt, ist das Feld stark. Wo es flach ist, ist das Feld schwach. Das Feld zeigt
immer in die Richtung, in der das Potential **fällt**.

```aufgabe
id: p12-homogenes-feld
titel: Feldstärke im Plattenkondensator
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  An einem Plattenkondensator mit dem Plattenabstand $5{,}0\,\text{mm}$ liegt die Spannung $200\,\text{V}$. Wie groß ist die Feldstärke (in V/m)?
teile:
  - typ: zahl
    loesung: "200/5.0e-3"
    einheit: "V/m"
    anzeige: '40000'
    fehler:
      - wert: "200*5.0e-3"
        meldung: |
          Du hast Spannung mal Abstand gerechnet. Die Feldstärke ist Spannung **pro** Meter: $E = U/d$.
      - wert: "200/5.0"
        meldung: |
          Der Abstand muss in Metern stehen: $5{,}0\,\text{mm} = 5{,}0\cdot 10^{-3}\,\text{m}$. Sonst kommt Volt pro Millimeter heraus.
hinweise:
  - 'Im homogenen Feld gilt $E = U/d$, mit $d$ in Metern.'
loesung: |
  **Ansatz:** Im Plattenkondensator ist das Feld homogen, also gilt $E = U/d$.
  ---
  **Rechnung:** $E = \dfrac{200\,\text{V}}{5{,}0\cdot 10^{-3}\,\text{m}} = 4{,}0\cdot 10^{4}\,\text{V/m}$. Das sind $40\,\text{V}$ pro Millimeter.
```

:::achtung[Fehler: Feldstärke und Spannung verwechselt]
**Falsche Rechnung:** „Zwischen zwei Platten mit $2{,}0\,\text{mm}$ Abstand herrscht die Feldstärke
$5000\,\text{V/m}$. Also liegen $5000\,\text{V}$ zwischen den Platten.“

**Richtig:** $5000\,\text{V/m}$ heißt $5000\,\text{V}$ **pro Meter**. Die Platten sind aber nur $0{,}0020\,\text{m}$
entfernt. Die Spannung ist $U = E\cdot d = 5000\,\text{V/m}\cdot 0{,}0020\,\text{m} = 10\,\text{V}$. Achte immer auf die
Einheit: Volt ist eine Spannung, Volt pro Meter eine Feldstärke.
:::

:::achtung[Fehler: Beim Elektron die Richtung vertauscht]
**Falsche Überlegung:** „Ein Elektron bewegt sich frei von einer Platte mit $0\,\text{V}$ zu einer Platte mit
$100\,\text{V}$. Es läuft also bergauf und verliert die Bewegungsenergie $e\cdot 100\,\text{V}$.“

**Richtig:** Das Bild „bergab“ gilt für **positive** Ladungen. Ein Elektron ist negativ. Seine potentielle
Energie ist $E_{\text{pot}} = q\,\varphi = -e\,\varphi$. Beim höheren Potential ist sie **kleiner**. Das Elektron
läuft also von selbst zum höheren Potential und **gewinnt** dabei die Bewegungsenergie
$e\cdot 100\,\text{V} = 1{,}602\cdot 10^{-17}\,\text{J}$. Kürzer schreibt man dafür $100\,\text{eV}$ (Elektronvolt).
Ein Elektronvolt ist die Energie, die eine Elementarladung beim Durchlaufen von $1\,\text{V}$ gewinnt.
:::

### Äquipotentialflächen

Alle Punkte mit gleichem Potential bilden eine Fläche. Sie heißt **Äquipotentialfläche** (lateinisch
*aequus*, also: gleich). Im Querschnitt sieht man sie als Linien, die **Äquipotentiallinien**.

Verschiebt man eine Ladung auf einer solchen Fläche, ändert sich ihre potentielle Energie nicht. Das Feld
verrichtet also keine Arbeit. Das geht nur, wenn die Kraft senkrecht zur Verschiebung steht. Deshalb
stehen Äquipotentialflächen überall **senkrecht** auf den Feldlinien.

- Im Plattenkondensator sind die Äquipotentialflächen Ebenen parallel zu den Platten.
- Um eine Punktladung sind es Kugelschalen.
- Die Oberfläche eines Leiters im Gleichgewicht ist immer eine Äquipotentialfläche. Gäbe es eine
  Spannung entlang der Oberfläche, würden die freien Elektronen so lange fließen, bis sie verschwindet.

Ein Vogel auf einer Hochspannungsleitung sitzt sicher. Beide Füße berühren denselben Leiter, also
dieselbe Äquipotentialfläche. Zwischen ihnen liegt praktisch keine Spannung. Gefährlich wird es erst,
wenn er zugleich die Leitung und den geerdeten Mast berührt.

```aufgabe
id: p12-drei-groessen
titel: Feldstärke, Potential oder Spannung?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Ordne zu. Welche Aussage passt zur **Spannung**?
teile:
  - typ: auswahl
    optionen:
      - "Sie ist die Arbeit pro Ladung zwischen zwei Punkten und hat die Einheit Volt."
      - "Sie ist die Kraft pro Ladung an einem Ort und hat die Einheit Volt pro Meter."
      - "Sie ist die potentielle Energie pro Ladung an einem Ort, gemessen ab einem frei gewählten Nullpunkt."
      - "Sie fließt durch einen Draht, wenn man ihn an eine Batterie anschließt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das ist die **Feldstärke**. Sie gehört zu einem einzelnen Ort und hat die Einheit $\text{V/m}$ oder $\text{N/C}$.
      - wert: 2
        meldung: |
          Das ist das **Potential**. Die Spannung ist der **Unterschied** zweier Potentiale. Sie hängt deshalb nicht vom Nullpunkt ab.
      - wert: 3
        meldung: |
          Durch einen Draht fließt **Ladung**, das ist der Strom. Die Spannung fließt nicht. Sie liegt zwischen zwei Punkten an, so wie ein Höhenunterschied zwischen zwei Orten besteht.
hinweise:
  - Gehört die Größe zu einem Ort oder zu zwei Orten? Welche Einheit hat sie?
loesung: |
  **Ansatz:** Wir prüfen jede Aussage nach zwei Merkmalen: ein Ort oder zwei Orte, und welche Einheit.
  ---
  Die Spannung gehört zu **zwei** Punkten und ist Arbeit pro Ladung in Volt. Kraft pro Ladung ist die Feldstärke, Energie pro Ladung an einem Ort das Potential. Fließen kann nur Ladung, nicht Spannung.
```

```aufgabe
id: p12-aequipotential
titel: Arbeit auf einer Äquipotentialfläche
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Eine positive Ladung wird in einem Plattenkondensator zweimal um $3\,\text{cm}$ verschoben: einmal **parallel** zu den Platten, einmal **senkrecht** zu den Platten von der positiven zur negativen Platte hin. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Bei der Verschiebung parallel zu den Platten verrichtet das Feld keine Arbeit."
      - "Die Verschiebung parallel zu den Platten verläuft auf einer Äquipotentialfläche."
      - "Bei beiden Verschiebungen ist die Arbeit gleich groß, weil der Weg gleich lang ist."
      - "Äquipotentialflächen stehen senkrecht auf den Feldlinien."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Für die Arbeit zählt nur der Weg **in Kraftrichtung**. Parallel zu den Platten steht die Kraft senkrecht zum Weg. Die Weglänge allein entscheidet nichts.
      - wert: [0, 3]
        meldung: |
          Auch die zweite Aussage stimmt. Ohne Arbeit ändert sich die potentielle Energie nicht. Alle Punkte auf diesem Weg haben dasselbe Potential.
hinweise:
  - 'Arbeit ist Kraft mal Weg **in Kraftrichtung**.'
  - In welche Richtung zeigt die Kraft im Kondensator, und wie liegt dazu eine Verschiebung parallel zu den Platten?
loesung: |
  **Ansatz:** Im Kondensator zeigt die Kraft auf eine positive Ladung senkrecht zu den Platten, von plus nach minus.
  ---
  **Parallel zu den Platten:** Die Verschiebung steht senkrecht zur Kraft. Das Feld verrichtet keine Arbeit, das Potential ändert sich nicht. Der Weg liegt auf einer Äquipotentialfläche.
  ---
  **Senkrecht zu den Platten:** Hier liegt der ganze Weg in Kraftrichtung, $W = q\,E\,d$. Die Arbeiten sind also verschieden, obwohl beide Wege $3\,\text{cm}$ lang sind. Äquipotentialflächen stehen senkrecht auf den Feldlinien.
```

```aufgabe
id: p12-spannung-fliesst
titel: Fließt die Spannung?
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Formulierung beschreibt einen einfachen Stromkreis aus Batterie und Lampe physikalisch richtig?
teile:
  - typ: auswahl
    optionen:
      - "Zwischen den Polen der Batterie liegt eine Spannung. Sie treibt Ladung durch die Lampe."
      - "Aus der Batterie fließt Spannung durch die Lampe und wird dort verbraucht."
      - "Die Spannung sitzt im Pluspol und wandert über den Draht zum Minuspol."
      - "In der Lampe wird die Ladung verbraucht, deshalb kommt am Minuspol weniger Ladung an."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Spannung fließt nicht und wird nicht verbraucht. Sie ist ein Potentialunterschied zwischen zwei Punkten, wie ein Höhenunterschied. Was fließt, ist Ladung.
      - wert: 2
        meldung: |
          Eine Spannung sitzt nicht an einem Punkt. Sie besteht immer **zwischen** zwei Punkten, hier zwischen Plus- und Minuspol.
      - wert: 3
        meldung: |
          Ladung bleibt erhalten. Durch die Lampe fließt gleich viel Ladung hinein wie heraus. Verbraucht wird nicht Ladung, sondern es wird Energie umgewandelt, in Licht und Wärme.
hinweise:
  - Was hat mit einem Ort zu tun, was mit zwei Orten, und was kann sich bewegen?
  - Denk an das Gelände. Fließt der Höhenunterschied, oder fließt das Wasser?
loesung: |
  **Ansatz:** Wir unterscheiden, was fließt (Ladung), was zwischen zwei Punkten besteht (Spannung) und was umgewandelt wird (Energie).
  ---
  Die Batterie hält zwischen ihren Polen eine Spannung aufrecht. Diese Spannung treibt Ladung durch den Draht und die Lampe. Jedes Coulomb gibt dabei $U$ Joule Energie an die Lampe ab.
  ---
  Die Ladung kommt vollständig am Minuspol an. Weder Spannung noch Ladung werden verbraucht. Das vertieft [13 Der Stromkreis: Strom wird nicht verbraucht](/lernen/physik1/gleichstrom/der-stromkreis-strom-wird-nicht-verbraucht).
```

```aufgabe
id: p12-potential-platten
titel: Potential zwischen zwei Platten
niveau: 3
lernziel: 4
kompetenz: anwenden
angabe: |
  Die linke Platte eines Kondensators ist geerdet ($0\,\text{V}$), die rechte liegt auf $150\,\text{V}$. Der Plattenabstand ist $6{,}0\,\text{mm}$.

  a) Wie groß ist die Feldstärke (in kV/m)?

  b) Welches Potential hat ein Punkt P, der $2{,}0\,\text{mm}$ von der linken Platte entfernt ist (in V)?

  c) Ein Elektron startet in P aus der Ruhe. Welche Bewegungsenergie hat es, wenn es die rechte Platte erreicht (in eV)? Ein Elektronvolt ($1\,\text{eV}$) ist die Energie, die ein Teilchen mit der Ladung $e$ beim Durchlaufen von $1\,\text{V}$ gewinnt.
teile:
  - typ: zahl
    label: a) E in kV/m
    loesung: "150/6.0e-3/1000"
    einheit: "kV/m"
    anzeige: '25'
    fehler:
      - wert: "150/6.0e-3"
        meldung: |
          Das ist die Feldstärke in V/m. Gefragt ist kV/m. Teile noch durch $1000$.
  - typ: zahl
    label: b) φ in V
    loesung: "150/6.0*2.0"
    einheit: "V"
    anzeige: '50'
    fehler:
      - wert: "150 - 150/6.0*2.0"
        meldung: |
          Das wäre das Potential $2{,}0\,\text{mm}$ von der **rechten** Platte entfernt. P liegt nahe der linken, geerdeten Platte.
  - typ: zahl
    label: c) E_kin in eV
    loesung: "150 - 150/6.0*2.0"
    einheit: "eV"
    anzeige: '100'
    fehler:
      - wert: "150"
        meldung: |
          Das Elektron startet nicht an der linken Platte, sondern in P. Es durchläuft nur die Spannung zwischen P und der rechten Platte.
      - wert: "50"
        meldung: |
          $50\,\text{V}$ ist das Potential von P. Gefragt ist die Spannung zwischen P und der rechten Platte, also der Unterschied der Potentiale.
hinweise:
  - Das Potential steigt im homogenen Feld gleichmäßig von $0\,\text{V}$ auf $150\,\text{V}$.
  - 'Ein Elektron, das die Spannung $U$ durchläuft, gewinnt die Energie $e\,U$, also $U$ Elektronvolt.'
gefuehrt:
  - text: Berechne die Feldstärke in kV/m.
    teil:
      typ: zahl
      loesung: "150/6.0e-3/1000"
      einheit: "kV/m"
    erklaerung: '$E = U/d = 150\,\text{V}/6{,}0\cdot 10^{-3}\,\text{m} = 2{,}5\cdot 10^{4}\,\text{V/m} = 25\,\text{kV/m}$.'
  - text: Um wie viel Volt steigt das Potential pro Millimeter?
    teil:
      typ: zahl
      loesung: "150/6.0"
      einheit: "V"
    erklaerung: '$150\,\text{V}$ auf $6\,\text{mm}$ sind $25\,\text{V}$ pro Millimeter.'
  - text: Welches Potential hat P, $2{,}0\,\text{mm}$ von der linken Platte entfernt?
    teil:
      typ: zahl
      loesung: "25*2.0"
      einheit: "V"
    erklaerung: '$\varphi_P = 25\,\tfrac{\text{V}}{\text{mm}}\cdot 2{,}0\,\text{mm} = 50\,\text{V}$.'
  - text: Welche Spannung durchläuft das Elektron auf dem Weg von P zur rechten Platte, und welche Energie gewinnt es?
    erklaerung: '$U = 150\,\text{V} - 50\,\text{V} = 100\,\text{V}$. Das Elektron läuft zum höheren Potential und gewinnt $100\,\text{eV}$.'
loesung: |
  **Ansatz:** Homogenes Feld. Das Potential steigt linear von der linken zur rechten Platte. Die Feldstärke ist die Steigung, $E = U/d$.
  ---
  **a)** $E = \dfrac{150\,\text{V}}{6{,}0\cdot 10^{-3}\,\text{m}} = 2{,}5\cdot 10^{4}\,\text{V/m} = 25\,\text{kV/m}$. Das Feld zeigt nach links, zum niedrigeren Potential.
  ---
  **b)** $\varphi_P = E\cdot 2{,}0\cdot 10^{-3}\,\text{m} = 2{,}5\cdot 10^{4}\,\text{V/m}\cdot 2{,}0\cdot 10^{-3}\,\text{m} = 50\,\text{V}$.
  ---
  **c)** Von P bis zur rechten Platte liegt die Spannung $150\,\text{V} - 50\,\text{V} = 100\,\text{V}$. Das negative Elektron läuft von selbst zum höheren Potential und gewinnt $e\cdot 100\,\text{V} = 100\,\text{eV}$.
```

### Das Elektronvolt

In der Atom- und Teilchenphysik ist das Joule eine unpraktisch große Einheit. Man verwendet dort das
**Elektronvolt**.

:::definition[Elektronvolt]
$1\,\text{eV}$ (sprich „ein Elektronvolt“) ist die Energie, die ein Teilchen mit der Ladung $e$ gewinnt,
wenn es die Spannung $1\,\text{V}$ durchläuft:
$$1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 1\,\text{V} = 1{,}602\cdot 10^{-19}\,\text{J}.$$
:::

**Beispiel:** Ein Elektron durchläuft $100\,\text{V}$ und gewinnt $100\,\text{eV}$. **Nichtbeispiel:** Das
Elektronvolt ist **keine** Einheit der Spannung, auch wenn „Volt“ im Namen steckt. Es ist eine Energie.

Ein Teilchen mit der Ladung $q$, das aus der Ruhe die Spannung $U$ durchläuft, hat danach die
Bewegungsenergie $E_{\text{kin}} = q\,U$. Das ist der Energiesatz aus der Lektion
[Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz):
Potentielle Energie im Feld wird zu Bewegungsenergie. Mit $E_{\text{kin}} = \tfrac12 m v^2$ folgt
$$\tfrac12 m v^2 = q\,U \qquad\text{also}\qquad v = \sqrt{\frac{2\,q\,U}{m}}.$$

:::beispiel[Ein Elektron durchläuft 500 V]
Ein Elektron ($m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$) startet aus der Ruhe und durchläuft $500\,\text{V}$.

**Schritt 1, Energie in eV und J:** $E_{\text{kin}} = e\cdot 500\,\text{V} = 500\,\text{eV} = 500\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 8{,}01\cdot 10^{-17}\,\text{J}$.

**Schritt 2, Geschwindigkeit:** $v = \sqrt{\dfrac{2\cdot 8{,}01\cdot 10^{-17}\,\text{J}}{9{,}109\cdot 10^{-31}\,\text{kg}}} = 1{,}33\cdot 10^{7}\,\text{m/s}$.
Die Einheit stimmt, denn $\text{J/kg} = \text{m}^2/\text{s}^2$.

**Schritt 3, einordnen:** Das sind rund $4\,\%$ der Lichtgeschwindigkeit, und das nach einer Spannung von
nur gut dem Doppelten der Netzspannung ($230\,\text{V}$).
:::

:::merke[Die drei Größen im Vergleich]
- **Feldstärke $E$:** Kraft pro Ladung **an einem Ort**, $E = F/q$. Einheit $\text{V/m} = \text{N/C}$. Ein Vektor.
  Im Gelände: die Steilheit.
- **Potential $\varphi$:** potentielle Energie pro Ladung **an einem Ort**, $\varphi = E_{\text{pot}}/q$. Einheit
  $\text{V}$. Hängt vom gewählten Nullpunkt ab. Im Gelände: die Höhe.
- **Spannung $U$:** Potentialunterschied **zwischen zwei Orten**, $U = W/q$. Einheit $\text{V}$. Unabhängig vom
  Nullpunkt. Im Gelände: der Höhenunterschied.
- **Verbindung im homogenen Feld:** $U = E\cdot d$. Arbeit: $W = q\,U$. Energie in eV: Ladung in $e$ mal Spannung in V.
:::

```aufgabe
id: p12-feld-spannung-diagramm
titel: Feldstärke aus dem Potentialverlauf
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt das Potential zwischen zwei Kondensatorplatten in Abhängigkeit vom Ort $x$.

  a) Wie groß ist der Betrag der Feldstärke (in kV/m)?

  b) In welche Richtung zeigt das Feld?
plot:
  x: [0, 9]
  y: [0, 180]
  achsen: { x: "x in mm", y: "φ in V" }
  graphen:
    - { f: "20*x", von: 0, bis: 8, farbe: 0 }
  punkte:
    - { x: 0, y: 0, label: "0 V" }
    - { x: 8, y: 160, label: "160 V" }
teile:
  - typ: zahl
    label: a) E in kV/m
    loesung: "160/8.0e-3/1000"
    einheit: "kV/m"
    anzeige: '20'
    fehler:
      - wert: "160/1000"
        meldung: |
          $160\,\text{V}$ ist die Spannung zwischen den Platten. Die Feldstärke ist die Spannung **pro Meter**. Teile durch den Abstand $8{,}0\,\text{mm} = 8{,}0\cdot 10^{-3}\,\text{m}$.
  - typ: auswahl
    label: b) Richtung
    optionen:
      - "in $-x$-Richtung, zum niedrigeren Potential"
      - "in $+x$-Richtung, zum höheren Potential"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das Feld zeigt dorthin, wohin eine **positive** Ladung von selbst läuft, also „bergab“ zum niedrigeren Potential.
hinweise:
  - Die Feldstärke ist die Steigung des Potentials. Lies Spannung und Abstand aus dem Diagramm ab.
  - Eine positive Ladung bewegt sich von selbst vom hohen zum niedrigen Potential.
loesung: |
  **Ansatz:** Das Potential steigt linear, das Feld ist also homogen. Sein Betrag ist die Steigung $U/d$.
  ---
  **a)** Abgelesen: $\varphi$ steigt auf $8{,}0\,\text{mm}$ um $160\,\text{V}$. $E = \dfrac{160\,\text{V}}{8{,}0\cdot 10^{-3}\,\text{m}} = 2{,}0\cdot 10^{4}\,\text{V/m} = 20\,\text{kV/m}$.
  ---
  **b)** Das Feld zeigt zum niedrigeren Potential, also in $-x$-Richtung. Eine positive Probeladung würde nach links gezogen.
```

```aufgabe
id: p12-elektronvolt
titel: Elektron im Beschleuniger
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Elektron wird aus der Ruhe durch die Spannung $1000\,\text{V}$ beschleunigt.

  a) Welche kinetische Energie hat es danach (in $10^{-16}\,\text{J}$)?

  b) Welche Geschwindigkeit erreicht es (in $10^{7}\,\text{m/s}$)? ($m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$)
teile:
  - typ: zahl
    label: a) E in 10⁻¹⁶ J
    loesung: "1.602e-19*1000/1e-16"
    anzeige: '1{,}602'
    fehler:
      - wert: "1000/1e-16"
        meldung: |
          $1000\,\text{eV}$ sind nicht $1000\,\text{J}$. Ein Elektronvolt ist $1{,}602\cdot 10^{-19}\,\text{J}$.
  - typ: zahl
    label: b) v in 10⁷ m/s
    loesung: "sqrt(2*1.602e-19*1000/9.109e-31)/1e7"
    anzeige: '1{,}88'
    fehler:
      - wert: "sqrt(1.602e-19*1000/9.109e-31)/1e7"
        meldung: |
          Der Faktor $2$ fehlt. Aus $\tfrac12 m v^2 = eU$ folgt $v^2 = 2eU/m$.
      - wert: "2*1.602e-19*1000/9.109e-31/1e7"
        meldung: |
          Das ist $v^2$, die Wurzel fehlt noch.
hinweise:
  - 'Die Energie beträgt $1000\,\text{eV}$. Rechne mit $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$ in Joule um.'
  - 'Energiesatz: $eU = \tfrac12 m v^2$, nach $v$ auflösen.'
loesung: |
  **Ansatz:** Energiesatz. Die potentielle Energie $eU$ wird vollständig zu Bewegungsenergie.
  ---
  **a)** $E_{\text{kin}} = eU = 1000\,\text{eV} = 1000\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 1{,}602\cdot 10^{-16}\,\text{J}$.
  ---
  **b)** $v = \sqrt{\dfrac{2\,E_{\text{kin}}}{m_e}} = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-16}\,\text{J}}{9{,}109\cdot 10^{-31}\,\text{kg}}} = 1{,}88\cdot 10^{7}\,\text{m/s}$.
  ---
  **Einordnen:** Das sind gut $6\,\%$ der Lichtgeschwindigkeit. Ab etwa $10\,\text{kV}$ wird die Formel merklich ungenau, dann muss man relativistisch rechnen.
```

```reflexion
frage: Ein Punkt kann ein hohes Potential haben, obwohl dort die Feldstärke null ist. Erkläre das am Gelände-Bild und an einem elektrischen Beispiel.
antwort: |
  Im Gelände entspricht das einer Hochebene: Sie liegt hoch (hohes Potential), ist aber flach (keine Steilheit, also keine Feldstärke). Elektrisch ist das Innere einer geladenen Metallkugel ein Beispiel. Im Leiter ist die Feldstärke null, sonst würden Elektronen fließen. Das Potential ist dort aber genauso hoch wie an der Oberfläche, und die kann auf vielen tausend Volt liegen. Die Feldstärke sagt also, wie stark sich das Potential **ändert**, nicht wie groß es ist.
```

```aufgabe
id: p12-fehler-feld-spannung
titel: Zwei Fehler in einer Rechnung
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  Ein Mitschüler löst diese Aufgabe: „Zwischen zwei Platten im Abstand $2{,}5\,\text{mm}$ herrscht die Feldstärke $8{,}0\,\text{kV/m}$. Ein Proton fliegt von der positiven zur negativen Platte. Welche Energie gewinnt es?“

  Er schreibt: „Die Spannung ist $8{,}0\,\text{kV}$. Das Proton fliegt bergauf und verliert also $8{,}0\,\text{keV}$.“

  a) Wie groß ist die Spannung wirklich (in V)?

  b) Welche Energie gewinnt das Proton (in eV, positiv angeben)?

  c) Benenne beide Denkfehler des Mitschülers in je einem Satz.
teile:
  - typ: zahl
    label: a) U in V
    loesung: "8.0e3*2.5e-3"
    einheit: "V"
    anzeige: '20'
    fehler:
      - wert: "8000"
        meldung: |
          Das ist genau der erste Fehler. Die Feldstärke ist Volt **pro Meter**. Die Spannung ist $U = E\cdot d$ mit $d$ in Metern.
  - typ: zahl
    label: b) Energie in eV
    loesung: "8.0e3*2.5e-3"
    einheit: "eV"
    anzeige: '20'
  - typ: text
    label: c) Denkfehler
    muster: |
      Erstens hat er Feldstärke und Spannung verwechselt: $8{,}0\,\text{kV/m}$ ist eine Spannung pro Meter, über $2{,}5\,\text{mm}$ ergibt das nur $U = E\cdot d = 20\,\text{V}$. Zweitens fliegt das positive Proton von der positiven zur negativen Platte „bergab“, also zum niedrigeren Potential. Es gewinnt Energie, nämlich $20\,\text{eV}$, statt welche zu verlieren.
hinweise:
  - 'Prüfe die Einheiten: $\text{kV/m}$ gegen $\text{kV}$. Wie kommt man von der Feldstärke zur Spannung?'
  - 'Ein positives Teilchen läuft von selbst vom hohen zum niedrigen Potential. Gewinnt oder verliert es dabei Bewegungsenergie?'
loesung: |
  **Ansatz:** Im homogenen Feld gilt $U = E\cdot d$. Die Energie eines Teilchens mit Ladung $e$ ändert sich um $e\,U$.
  ---
  **a)** $U = 8{,}0\cdot 10^{3}\,\tfrac{\text{V}}{\text{m}}\cdot 2{,}5\cdot 10^{-3}\,\text{m} = 20\,\text{V}$.
  ---
  **b)** Das Proton ist positiv und bewegt sich vom hohen zum niedrigen Potential. Das Feld beschleunigt es. Es gewinnt $e\cdot 20\,\text{V} = 20\,\text{eV}$.
  ---
  **c)** Fehler 1: Feldstärke ($\text{V/m}$) mit Spannung ($\text{V}$) verwechselt. Fehler 2: Richtung vertauscht. Für positive Ladungen ist „von plus nach minus“ bergab, nicht bergauf.
```

```aufgabe
id: p12-schrittspannung
titel: Warum ein Blitzeinschlag Kühe stärker gefährdet
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Schlägt ein Blitz in eine Wiese ein, fließt der Strom im Boden nach allen Seiten ab. In einigen Metern Abstand fällt das Potential des Bodens dabei um etwa $300\,\text{V}$ pro Meter Abstand vom Einschlag.

  a) Ein Mensch steht mit $0{,}75\,\text{m}$ Schrittweite in radialer Richtung. Welche Spannung liegt zwischen seinen Füßen (in V)?

  b) Eine Kuh steht ebenfalls radial, ihre Vorder- und Hinterbeine sind $1{,}8\,\text{m}$ voneinander entfernt. Welche Spannung liegt zwischen ihren Beinen (in V)?

  c) Was sollte ein Mensch im Gewitter auf freiem Feld deshalb tun? Begründe kurz.
teile:
  - typ: zahl
    label: a) U Mensch in V
    loesung: "300*0.75"
    einheit: "V"
    anzeige: '225'
  - typ: zahl
    label: b) U Kuh in V
    loesung: "300*1.8"
    einheit: "V"
    anzeige: '540'
  - typ: text
    label: c) Verhalten
    muster: |
      Die Spannung zwischen zwei Bodenpunkten ist umso größer, je weiter sie in radialer Richtung auseinanderliegen. Man sollte deshalb die Füße eng zusammenstellen und in die Hocke gehen, nicht breitbeinig stehen oder liegen. Dann liegen beide Füße fast auf derselben Äquipotentiallinie, und kaum Strom fließt durch den Körper.
hinweise:
  - 'Hier fällt das Potential gleichmäßig mit dem Abstand. Das entspricht einer Feldstärke von $300\,\text{V/m}$ im Boden, und es gilt $U = E\cdot d$.'
  - Welche Linien im Boden haben gleiches Potential? Wie stellt man die Füße, damit beide fast auf derselben Linie stehen?
loesung: |
  **Modell:** In einem kleinen Bereich nehmen wir das Feld im Boden als homogen an, mit $E = 300\,\text{V/m}$ in radialer Richtung. Dann gilt $U = E\cdot d$.
  ---
  **a)** $U = 300\,\tfrac{\text{V}}{\text{m}}\cdot 0{,}75\,\text{m} = 225\,\text{V}$.
  ---
  **b)** $U = 300\,\tfrac{\text{V}}{\text{m}}\cdot 1{,}8\,\text{m} = 540\,\text{V}$. Bei der Kuh ist der Abstand größer, also auch die Spannung. Zudem fließt der Strom bei ihr quer durch den Rumpf am Herzen vorbei.
  ---
  **c)** Die Äquipotentiallinien sind Kreise um den Einschlag. Wer die Füße eng zusammenstellt, steht fast auf einer Äquipotentiallinie. Dann ist die **Schrittspannung** klein. Deshalb gilt: hinhocken, Füße zusammen, nicht hinlegen.
```

## Potential und Energie im Feld einer Punktladung

```aufgabe
id: p12-8-check
art: check
titel: "Vorwissen: Energieerhaltung beim Wurf"
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Ball wird mit $10\,\text{m/s}$ senkrecht nach oben geworfen. Wie hoch steigt er nach dem Energieerhaltungssatz, wenn man den Luftwiderstand vernachlässigt (in m)?

  Herkunft: [Kapitel 4, Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz)
teile:
  - typ: zahl
    loesung: "10^2/(2*9.81)"
    einheit: "m"
    anzeige: '5{,}10'
    fehler:
      - wert: "10^2/9.81"
        meldung: |
          Der Faktor $\tfrac12$ der Bewegungsenergie fehlt. Aus $\tfrac12 m v^2 = m g h$ folgt $h = v^2/(2g)$.
hinweise:
  - 'Am höchsten Punkt ist die ganze Bewegungsenergie in Lageenergie umgewandelt: $\tfrac12 m v^2 = m g h$.'
loesung: |
  Energieerhaltung: Unten ist alles Bewegungsenergie, oben alles Lageenergie. Die Masse kürzt sich: $\tfrac12 v^2 = g h$.
  ---
  $h = \dfrac{v^2}{2g} = \dfrac{(10\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = 5{,}10\,\text{m}$. Mit genau diesem Ansatz rechnen wir gleich, wie nahe ein Teilchen einem Atomkern kommt.
```

In der Lektion [Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
war das Feld überall gleich stark. Dann stieg das Potential gleichmäßig an, und es galt $U = E\cdot d$. Um
eine Punktladung ist das Feld aber nicht homogen. Nahe der Ladung ist es stark, weiter weg schwach. Die
Formel $U = E\cdot d$ gilt dort **nicht**. Wir brauchen eine eigene Formel für das Potential.

### Das Potential einer Punktladung

Man legt den Nullpunkt des Potentials ins Unendliche, also sehr weit weg von der Ladung. Dann gilt für
das Potential im Abstand $r$ von einer Punktladung $Q$:
$$\varphi(r) = k\cdot\frac{Q}{r} = \frac{1}{4\pi\varepsilon_0}\cdot\frac{Q}{r}.$$
Dabei ist $Q$ die felderzeugende Ladung **mit Vorzeichen** und $r$ der Abstand. Um eine positive Ladung
ist das Potential positiv, um eine negative Ladung negativ.

Woher kommt diese Formel? Man denkt sich eine Probeladung aus dem Unendlichen bis zum Abstand $r$
herangeschoben. Die Kraft ändert sich dabei ständig. Die Arbeit ist deshalb die **Fläche unter der
Kraft-Weg-Kurve**, also ein Integral. Diese Rechnung (Vertiefung) liefert genau $k\,Q\,q/r$. Arbeit als
Integral steht in [Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit).
Für die Prüfung genügt es, die Formel anwenden zu können.

Vergleiche die beiden Formeln für eine Punktladung genau:

- **Feldstärke:** $E = k\,|Q|/r^2$. Sie fällt mit dem **Quadrat** des Abstands. Doppelter Abstand gibt ein Viertel.
- **Potential:** $\varphi = k\,Q/r$. Es fällt nur mit dem Abstand **selbst**. Doppelter Abstand gibt die Hälfte.

```plot
x: [0, 0.6]
y: [0, 1000]
achsen: { x: "r in m", y: "φ in V und E in V/m" }
graphen:
  - { f: "44.95/x", von: 0.045, bis: 0.6, label: "Potential φ(r)", farbe: 0 }
  - { f: "44.95/x^2", von: 0.212, bis: 0.6, label: "Feldstärke E(r)", farbe: 1 }
punkte:
  - { x: 0.3, y: 149.8, label: "150 V" }
  - { x: 0.3, y: 499.4, label: "499 V/m" }
beschriftung: "Potential (blau) und Feldstärke (orange) einer Punktladung Q = 5,0 nC. Beide fallen mit wachsendem Abstand. Das Feld fällt aber viel schneller, weil r im Quadrat im Nenner steht. Bei r = 0,30 m ist das Potential 150 V und die Feldstärke 499 V/m."
```

:::beispiel[Potential und Spannung um eine Punktladung]
Eine Punktladung $Q = +6{,}0\,\text{nC}$ sitzt im Ursprung. Punkt A ist $0{,}20\,\text{m}$ entfernt, Punkt B
$0{,}60\,\text{m}$.

**Schritt 1, Potentiale:**
$\varphi_A = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{6{,}0\cdot 10^{-9}\,\text{C}}{0{,}20\,\text{m}} = 270\,\text{V}$ und
$\varphi_B = 8{,}99\cdot 10^{9}\cdot\dfrac{6{,}0\cdot 10^{-9}}{0{,}60}\,\text{V} = 90\,\text{V}$.

**Schritt 2, Spannung:** $U_{AB} = \varphi_A - \varphi_B = 270\,\text{V} - 90\,\text{V} = 180\,\text{V}$.

**Schritt 3, Arbeit:** Eine Probeladung $q = +2{,}0\,\text{nC}$ fliegt von A nach B. Das Feld verrichtet
$W = q\,U_{AB} = 2{,}0\cdot 10^{-9}\,\text{C}\cdot 180\,\text{V} = 3{,}6\cdot 10^{-7}\,\text{J}$. Das gilt auf
**jedem** Weg von A nach B, denn das Feld ist konservativ.
:::

:::achtung[Fehler: $U = E\cdot d$ im Feld einer Punktladung benutzt]
**Falsche Rechnung:** Für das Beispiel rechnet jemand das Feld bei A aus,
$E_A = 8{,}99\cdot 10^{9}\cdot 6{,}0\cdot 10^{-9}/0{,}20^2\,\text{V/m} = 1350\,\text{V/m}$. Dann schreibt er
„$U = E\cdot d = 1350\,\text{V/m}\cdot 0{,}40\,\text{m} = 540\,\text{V}$“.

**Richtig:** $U = E\cdot d$ setzt ein **homogenes** Feld voraus. Hier wird das Feld auf dem Weg von A nach B
immer schwächer. Mit dem Feldwert bei A rechnet man viel zu viel. Richtig ist die Differenz der
Potentiale, $U_{AB} = 270\,\text{V} - 90\,\text{V} = 180\,\text{V}$.
:::

```aufgabe
id: p12-potential-punkt
titel: Potential einer Punktladung
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Punktladung $Q = 2{,}0\,\text{nC}$ sitzt im Ursprung. Das Potential im Unendlichen ist null.

  a) Wie groß ist das Potential im Abstand $0{,}50\,\text{m}$ (in V)?

  b) Welche Spannung liegt zwischen den Punkten im Abstand $0{,}50\,\text{m}$ und $1{,}00\,\text{m}$ (in V)?
teile:
  - typ: zahl
    label: a) Potential in V
    loesung: "1/(4*pi*8.854e-12)*2e-9/0.50"
    einheit: "V"
    anzeige: '36{,}0'
    fehler:
      - wert: "1/(4*pi*8.854e-12)*2e-9/0.50^2"
        meldung: |
          Das wäre die **Feldstärke** in V/m. Beim Potential steht $r$ nicht im Quadrat: $\varphi = k\,Q/r$.
  - typ: zahl
    label: b) Spannung in V
    loesung: "1/(4*pi*8.854e-12)*2e-9*(1/0.50-1/1.00)"
    einheit: "V"
    anzeige: '18{,}0'
    fehler:
      - wert: "1/(4*pi*8.854e-12)*2e-9*(1/0.50^2-1/1.00^2)"
        meldung: |
          Du hast mit $kQ/r^2$ gerechnet, das ist die Feldstärke. Für das Potential gilt $\varphi = kQ/r$, die Spannung ist die Differenz zweier Potentiale.
hinweise:
  - '$\varphi = k\,Q/r$. Die Spannung ist die Differenz zweier Potentiale.'
loesung: |
  **a)** $\varphi(0{,}50\,\text{m}) = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{2{,}0\cdot 10^{-9}\,\text{C}}{0{,}50\,\text{m}} = 36{,}0\,\text{V}$. Die Einheit ist $\text{N}\,\text{m}/\text{C} = \text{J/C} = \text{V}$.
  ---
  **b)** $\varphi(1{,}00\,\text{m}) = 18{,}0\,\text{V}$, also $U = 36{,}0\,\text{V} - 18{,}0\,\text{V} = 18{,}0\,\text{V}$.
  ---
  **Beachte:** Das Potential halbiert sich bei doppeltem Abstand. Die Feldstärke würde sich vierteln.
```

```aufgabe
id: p12-potential-halbieren
titel: Doppelter Abstand
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Man entfernt sich von einer Punktladung vom Abstand $r$ auf den Abstand $2r$. Was passiert mit Potential und Feldstärke?
teile:
  - typ: auswahl
    optionen:
      - "Das Potential halbiert sich, die Feldstärke sinkt auf ein Viertel."
      - "Beide sinken auf ein Viertel."
      - "Beide halbieren sich."
      - "Das Potential sinkt auf ein Viertel, die Feldstärke halbiert sich."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Nur die Feldstärke hat $r^2$ im Nenner. Das Potential $\varphi = kQ/r$ hat nur $r$, es halbiert sich.
      - wert: 2
        meldung: |
          Die Feldstärke $E = kQ/r^2$ hat $r$ im **Quadrat**. Doppelter Abstand gibt den Faktor $\tfrac14$.
      - wert: 3
        meldung: |
          Genau vertauscht. Die Feldstärke hat $r^2$ im Nenner, das Potential nur $r$.
hinweise:
  - 'Vergleiche $\varphi = kQ/r$ mit $E = kQ/r^2$ und setze jeweils $2r$ ein.'
loesung: |
  **Ansatz:** Proportionalitätsschluss für beide Formeln.
  ---
  $\varphi = kQ/r$: Mit $2r$ wird daraus $\tfrac12\varphi$. $E = kQ/r^2$: Mit $2r$ wird daraus $\tfrac14 E$. Das Feld fällt also schneller als das Potential.
```

### Potentielle Energie zweier Ladungen

Bringt man eine zweite Ladung $q$ in den Abstand $r$ von $Q$, hat sie die potentielle Energie
$$E_{\text{pot}} = q\cdot\varphi(r) = k\cdot\frac{Q\cdot q}{r}.$$
Hier zählen die **Vorzeichen**. Das Vorzeichen sagt, was beim Annähern passiert:

- **Gleichnamige** Ladungen: $E_{\text{pot}} > 0$. Man muss Arbeit aufwenden, um sie zusammenzuschieben. Lässt
  man los, fliegen sie auseinander, und die gespeicherte Energie wird zu Bewegungsenergie.
- **Ungleichnamige** Ladungen: $E_{\text{pot}} < 0$. Sie ziehen einander an. Um sie zu trennen, muss man
  Energie zuführen. Ein Elektron im Atom ist so **gebunden**.

Mit dieser Energie gilt der **Energiesatz**: Fliegt eine Ladung frei im Feld, bleibt die Summe aus
Bewegungsenergie und potentieller Energie konstant:
$$E_{\text{kin,1}} + E_{\text{pot,1}} = E_{\text{kin,2}} + E_{\text{pot,2}}.$$

:::beispiel[Wie nahe kommt ein Alphateilchen einem Goldkern?]
Ernest Rutherford schoss 1911 Alphateilchen auf eine Goldfolie. Ein Alphateilchen ist ein Heliumkern mit
der Ladung $2e$. Ein Goldkern hat die Ladung $79e$. Ein Alphateilchen mit $E_{\text{kin}} = 5{,}0\,\text{MeV}$
fliegt genau auf einen Goldkern zu. Wie nahe kommt es ihm? ($1\,\text{MeV} = 10^{6}\,\text{eV}$)

**Schritt 1, Modell:** Der Goldkern ist viel schwerer und bleibt praktisch in Ruhe. Das Alphateilchen
wird abgebremst, bis es kurz stillsteht. Dann ist die ganze Bewegungsenergie in potentielle Energie
umgewandelt. Weit weg war die potentielle Energie null.

**Schritt 2, Energiesatz:** $E_{\text{kin}} = k\,\dfrac{2e\cdot 79e}{r_{\min}}$, also $r_{\min} = k\,\dfrac{158\,e^2}{E_{\text{kin}}}$.

**Schritt 3, in Joule umrechnen:** $E_{\text{kin}} = 5{,}0\cdot 10^{6}\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 8{,}01\cdot 10^{-13}\,\text{J}$.

**Schritt 4, einsetzen:**
$r_{\min} = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{158\cdot(1{,}602\cdot 10^{-19}\,\text{C})^2}{8{,}01\cdot 10^{-13}\,\text{J}} = 4{,}6\cdot 10^{-14}\,\text{m}$.

**Schritt 5, deuten:** Ein Atom ist rund $10^{-10}\,\text{m}$ groß. Der kleinste Abstand ist also einige
tausendmal kleiner als ein Atom. Der Goldkern muss noch kleiner sein. So schloss Rutherford, dass die
positive Ladung und fast die ganze Masse eines Atoms in einem winzigen Kern sitzen. Mehr dazu in
[16 Rutherford: Das Atom hat einen Kern](/lernen/physik1/wellenoptik-atom-kernphysik/rutherford-das-atom-hat-einen-kern).
:::

:::achtung[Fehler: Vorzeichen der potentiellen Energie übersehen]
**Falsche Überlegung:** „Ein Elektron sitzt $0{,}10\,\text{nm}$ von einem Proton entfernt. Seine potentielle
Energie ist $k\,e^2/r = 2{,}3\cdot 10^{-18}\,\text{J}$. Lässt man es los, fliegt es mit dieser Energie davon.“

**Richtig:** Die Ladungen sind ungleichnamig, also ist $E_{\text{pot}} = k\,(+e)(-e)/r = -2{,}3\cdot 10^{-18}\,\text{J}$,
also **negativ**. Das Elektron fliegt nicht davon, es wird angezogen. Um es zu befreien, muss man
$2{,}3\cdot 10^{-18}\,\text{J} = 14\,\text{eV}$ **zuführen**. Das Minuszeichen bedeutet „gebunden“.
:::

```aufgabe
id: p12-epot-vorzeichen
titel: Was bedeutet negative potentielle Energie?
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Elektron und ein Proton sind einen bestimmten Abstand voneinander entfernt. Das Potential im Unendlichen ist null. Welche Aussage ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Die potentielle Energie ist negativ. Um die Teilchen zu trennen, muss man Energie zuführen."
      - "Die potentielle Energie ist positiv. Beim Loslassen fliegen die Teilchen auseinander."
      - "Die potentielle Energie ist null, weil sich die Ladungen $+e$ und $-e$ aufheben."
      - "Die potentielle Energie ist negativ. Das heißt, das Elektron hat weniger als gar keine Energie und ist unmöglich."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Positive potentielle Energie gehört zu **gleichnamigen** Ladungen. Proton und Elektron sind ungleichnamig, sie ziehen einander an.
      - wert: 2
        meldung: |
          In $E_{\text{pot}} = kQq/r$ steht das **Produkt** der Ladungen, nicht ihre Summe. $(+e)\cdot(-e) = -e^2$ ist nicht null.
      - wert: 3
        meldung: |
          Negativ heißt nur: kleiner als im gewählten Nullpunkt (Unendlich). Weil man den Nullpunkt frei wählt, sind negative Werte ganz normal. Sie bedeuten „gebunden“.
hinweise:
  - 'Setze in $E_{\text{pot}} = k\,Q\,q/r$ die Ladungen $+e$ und $-e$ mit Vorzeichen ein.'
  - Wo ist die potentielle Energie null, und muss man Arbeit aufwenden, um dorthin zu kommen?
loesung: |
  **Ansatz:** $E_{\text{pot}} = k\,(+e)(-e)/r = -k\,e^2/r$. Das Produkt der Ladungen ist negativ.
  ---
  Die potentielle Energie ist also negativ. Null ist sie erst im Unendlichen. Um dorthin zu kommen, muss man gegen die Anziehung Arbeit verrichten.
  ---
  **Deutung:** Negative potentielle Energie heißt „gebunden“. Darum bleibt das Elektron im Atom an den Kern gebunden, solange man keine Energie zuführt. Die nötige Trennungsenergie heißt Ionisierungsenergie.
```

```aufgabe
id: p12-proton-abstossung
titel: Ein Proton wird weggestoßen
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Proton wird im Abstand $1{,}0\,\text{nm}$ von einem festgehaltenen zweiten Proton losgelassen. Es fliegt davon.

  a) Welche Bewegungsenergie hat es, wenn es sehr weit weg ist (in eV)?

  b) Wie schnell ist es dann (in km/s)? ($m_p = 1{,}673\cdot 10^{-27}\,\text{kg}$)
teile:
  - typ: zahl
    label: a) E_kin in eV
    loesung: "8.99e9*(1.602e-19)^2/1.0e-9/1.602e-19"
    einheit: "eV"
    anzeige: '1{,}44'
    fehler:
      - wert: "8.99e9*(1.602e-19)^2/(1.0e-9)^2/1.602e-19"
        meldung: |
          Für die Energie steht $r$ nicht im Quadrat. $k\,e^2/r^2$ wäre eine Kraft, keine Energie.
  - typ: zahl
    label: b) v in km/s
    loesung: "sqrt(2*8.99e9*(1.602e-19)^2/1.0e-9/1.673e-27)/1000"
    einheit: "km/s"
    anzeige: '16{,}6'
    fehler:
      - wert: "sqrt(8.99e9*(1.602e-19)^2/1.0e-9/1.673e-27)/1000"
        meldung: |
          Der Faktor $2$ fehlt. Aus $\tfrac12 m v^2 = E_{\text{kin}}$ folgt $v = \sqrt{2E_{\text{kin}}/m}$.
hinweise:
  - Am Anfang ruht das Proton, weit weg ist die potentielle Energie null. Alles wird zu Bewegungsenergie.
  - '$E_{\text{pot}} = k\,e^2/r$. Für b) die Energie in Joule nehmen und $\tfrac12 m v^2 = E_{\text{kin}}$ nach $v$ auflösen.'
gefuehrt:
  - text: Welche Energieformen hat das Proton am Anfang und weit weg?
    erklaerung: Am Anfang ruht es, es hat nur potentielle Energie. Weit weg ist die potentielle Energie null, es hat nur Bewegungsenergie. Nach dem Energiesatz sind beide gleich groß.
  - text: Wie groß ist die potentielle Energie am Anfang? Gib sie in $10^{-19}\,\text{J}$ an.
    teil:
      typ: zahl
      loesung: "8.99e9*(1.602e-19)^2/1.0e-9/1e-19"
      fehler:
        - wert: "8.99e9*(1.602e-19)^2/(1.0e-9)^2/1e-19"
          meldung: Bei der Energie steht $r$ nicht im Quadrat.
    erklaerung: '$E_{\text{pot}} = 8{,}99\cdot 10^{9}\cdot\dfrac{(1{,}602\cdot 10^{-19})^2}{1{,}0\cdot 10^{-9}}\,\text{J} = 2{,}31\cdot 10^{-19}\,\text{J}$. Sie ist positiv, weil die Ladungen gleichnamig sind.'
  - text: Wie groß ist die Bewegungsenergie weit weg? Rechne in eV um.
    teil:
      typ: zahl
      loesung: "8.99e9*(1.602e-19)^2/1.0e-9/1.602e-19"
      einheit: "eV"
    erklaerung: 'Nach dem Energiesatz wird die ganze potentielle Energie zu Bewegungsenergie: $2{,}31\cdot 10^{-19}\,\text{J} : 1{,}602\cdot 10^{-19}\,\text{J/eV} = 1{,}44\,\text{eV}$.'
  - text: Löse $\tfrac12 m v^2 = E_{\text{kin}}$ nach $v$ auf und rechne in km/s.
    teil:
      typ: zahl
      loesung: "sqrt(2*8.99e9*(1.602e-19)^2/1.0e-9/1.673e-27)/1000"
      einheit: "km/s"
    erklaerung: '$v = \sqrt{\dfrac{2\cdot 2{,}31\cdot 10^{-19}\,\text{J}}{1{,}673\cdot 10^{-27}\,\text{kg}}} = 1{,}66\cdot 10^{4}\,\text{m/s} = 16{,}6\,\text{km/s}$.'
loesung: |
  **Ansatz:** Energiesatz. Am Anfang nur potentielle Energie, weit weg nur Bewegungsenergie.
  ---
  **a)** $E_{\text{pot}} = k\,\dfrac{e\cdot e}{r} = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{(1{,}602\cdot 10^{-19}\,\text{C})^2}{1{,}0\cdot 10^{-9}\,\text{m}} = 2{,}31\cdot 10^{-19}\,\text{J} = 1{,}44\,\text{eV}$. So viel Bewegungsenergie hat das Proton weit weg.
  ---
  **b)** $v = \sqrt{\dfrac{2E_{\text{kin}}}{m_p}} = \sqrt{\dfrac{2\cdot 2{,}31\cdot 10^{-19}\,\text{J}}{1{,}673\cdot 10^{-27}\,\text{kg}}} = 1{,}66\cdot 10^{4}\,\text{m/s} = 16{,}6\,\text{km/s}$.
  ---
  **Plausibilität:** Etwa eineinhalb Elektronvolt liegen in derselben Größenordnung wie chemische Bindungsenergien, die einige Elektronvolt betragen. Auf atomaren Abständen sind elektrische Energien also typisch einige eV.
```

### Äquipotentiallinien um Ladungen

Um eine Punktladung haben alle Punkte im gleichen Abstand dasselbe Potential. Die Äquipotentialflächen
sind also **Kugelschalen**, im Schnitt Kreise. Die Feldlinien laufen radial und stehen überall senkrecht
auf diesen Kreisen. Beim Dipol sind die Äquipotentiallinien verbeulte Kreise um jede Ladung. Die
Mittelsenkrechte zwischen den Ladungen hat das Potential null, denn dort heben sich $+kQ/r$ und $-kQ/r$ auf.

```plot
x: [-3, 3]
y: [-2.2, 2.2]
gleich: true
strecken:
  - { von: [-0.193, 0], nach: [-0.217, 0.285], farbe: 3, gestrichelt: true }
  - { von: [-0.217, 0.285], nach: [-0.274, 0.508], farbe: 3, gestrichelt: true }
  - { von: [-0.274, 0.508], nach: [-0.381, 0.738], farbe: 3, gestrichelt: true }
  - { von: [-0.381, 0.738], nach: [-0.488, 0.886], farbe: 3, gestrichelt: true }
  - { von: [-0.488, 0.886], nach: [-0.628, 1.021], farbe: 3, gestrichelt: true }
  - { von: [-0.628, 1.021], nach: [-0.8, 1.132], farbe: 3, gestrichelt: true }
  - { von: [-0.8, 1.132], nach: [-1, 1.208], farbe: 3, gestrichelt: true }
  - { von: [-1, 1.208], nach: [-1.219, 1.241], farbe: 3, gestrichelt: true }
  - { von: [-1.219, 1.241], nach: [-1.447, 1.228], farbe: 3, gestrichelt: true }
  - { von: [-1.447, 1.228], nach: [-1.673, 1.166], farbe: 3, gestrichelt: true }
  - { von: [-1.673, 1.166], nach: [-1.886, 1.056], farbe: 3, gestrichelt: true }
  - { von: [-1.886, 1.056], nach: [-2.076, 0.903], farbe: 3, gestrichelt: true }
  - { von: [-2.076, 0.903], nach: [-2.234, 0.712], farbe: 3, gestrichelt: true }
  - { von: [-2.234, 0.712], nach: [-2.352, 0.492], farbe: 3, gestrichelt: true }
  - { von: [-2.352, 0.492], nach: [-2.425, 0.251], farbe: 3, gestrichelt: true }
  - { von: [-2.425, 0.251], nach: [-2.449, 0], farbe: 3, gestrichelt: true }
  - { von: [-2.449, 0], nach: [-2.425, -0.251], farbe: 3, gestrichelt: true }
  - { von: [-2.425, -0.251], nach: [-2.352, -0.492], farbe: 3, gestrichelt: true }
  - { von: [-2.352, -0.492], nach: [-2.234, -0.712], farbe: 3, gestrichelt: true }
  - { von: [-2.234, -0.712], nach: [-2.076, -0.903], farbe: 3, gestrichelt: true }
  - { von: [-2.076, -0.903], nach: [-1.886, -1.056], farbe: 3, gestrichelt: true }
  - { von: [-1.886, -1.056], nach: [-1.673, -1.166], farbe: 3, gestrichelt: true }
  - { von: [-1.673, -1.166], nach: [-1.447, -1.228], farbe: 3, gestrichelt: true }
  - { von: [-1.447, -1.228], nach: [-1.219, -1.241], farbe: 3, gestrichelt: true }
  - { von: [-1.219, -1.241], nach: [-1, -1.208], farbe: 3, gestrichelt: true }
  - { von: [-1, -1.208], nach: [-0.8, -1.132], farbe: 3, gestrichelt: true }
  - { von: [-0.8, -1.132], nach: [-0.628, -1.021], farbe: 3, gestrichelt: true }
  - { von: [-0.628, -1.021], nach: [-0.488, -0.886], farbe: 3, gestrichelt: true }
  - { von: [-0.488, -0.886], nach: [-0.381, -0.738], farbe: 3, gestrichelt: true }
  - { von: [-0.381, -0.738], nach: [-0.274, -0.508], farbe: 3, gestrichelt: true }
  - { von: [-0.274, -0.508], nach: [-0.217, -0.285], farbe: 3, gestrichelt: true }
  - { von: [-0.217, -0.285], nach: [-0.193, 0], farbe: 3, gestrichelt: true }
  - { von: [2.449, 0], nach: [2.425, 0.251], farbe: 3, gestrichelt: true }
  - { von: [2.425, 0.251], nach: [2.352, 0.492], farbe: 3, gestrichelt: true }
  - { von: [2.352, 0.492], nach: [2.234, 0.712], farbe: 3, gestrichelt: true }
  - { von: [2.234, 0.712], nach: [2.076, 0.903], farbe: 3, gestrichelt: true }
  - { von: [2.076, 0.903], nach: [1.886, 1.056], farbe: 3, gestrichelt: true }
  - { von: [1.886, 1.056], nach: [1.673, 1.166], farbe: 3, gestrichelt: true }
  - { von: [1.673, 1.166], nach: [1.447, 1.228], farbe: 3, gestrichelt: true }
  - { von: [1.447, 1.228], nach: [1.219, 1.241], farbe: 3, gestrichelt: true }
  - { von: [1.219, 1.241], nach: [1, 1.208], farbe: 3, gestrichelt: true }
  - { von: [1, 1.208], nach: [0.8, 1.132], farbe: 3, gestrichelt: true }
  - { von: [0.8, 1.132], nach: [0.628, 1.021], farbe: 3, gestrichelt: true }
  - { von: [0.628, 1.021], nach: [0.488, 0.886], farbe: 3, gestrichelt: true }
  - { von: [0.488, 0.886], nach: [0.381, 0.738], farbe: 3, gestrichelt: true }
  - { von: [0.381, 0.738], nach: [0.274, 0.508], farbe: 3, gestrichelt: true }
  - { von: [0.274, 0.508], nach: [0.217, 0.285], farbe: 3, gestrichelt: true }
  - { von: [0.217, 0.285], nach: [0.193, 0], farbe: 3, gestrichelt: true }
  - { von: [0.193, 0], nach: [0.217, -0.285], farbe: 3, gestrichelt: true }
  - { von: [0.217, -0.285], nach: [0.274, -0.508], farbe: 3, gestrichelt: true }
  - { von: [0.274, -0.508], nach: [0.381, -0.738], farbe: 3, gestrichelt: true }
  - { von: [0.381, -0.738], nach: [0.488, -0.886], farbe: 3, gestrichelt: true }
  - { von: [0.488, -0.886], nach: [0.628, -1.021], farbe: 3, gestrichelt: true }
  - { von: [0.628, -1.021], nach: [0.8, -1.132], farbe: 3, gestrichelt: true }
  - { von: [0.8, -1.132], nach: [1, -1.208], farbe: 3, gestrichelt: true }
  - { von: [1, -1.208], nach: [1.219, -1.241], farbe: 3, gestrichelt: true }
  - { von: [1.219, -1.241], nach: [1.447, -1.228], farbe: 3, gestrichelt: true }
  - { von: [1.447, -1.228], nach: [1.673, -1.166], farbe: 3, gestrichelt: true }
  - { von: [1.673, -1.166], nach: [1.886, -1.056], farbe: 3, gestrichelt: true }
  - { von: [1.886, -1.056], nach: [2.076, -0.903], farbe: 3, gestrichelt: true }
  - { von: [2.076, -0.903], nach: [2.234, -0.712], farbe: 3, gestrichelt: true }
  - { von: [2.234, -0.712], nach: [2.352, -0.492], farbe: 3, gestrichelt: true }
  - { von: [2.352, -0.492], nach: [2.425, -0.251], farbe: 3, gestrichelt: true }
  - { von: [2.425, -0.251], nach: [2.449, 0], farbe: 3, gestrichelt: true }
  - { von: [-0.414, 0], nach: [-0.43, 0.153], farbe: 3, gestrichelt: true }
  - { von: [-0.43, 0.153], nach: [-0.459, 0.252], farbe: 3, gestrichelt: true }
  - { von: [-0.459, 0.252], nach: [-0.531, 0.394], farbe: 3, gestrichelt: true }
  - { von: [-0.531, 0.394], nach: [-0.598, 0.479], farbe: 3, gestrichelt: true }
  - { von: [-0.598, 0.479], nach: [-0.727, 0.585], farbe: 3, gestrichelt: true }
  - { von: [-0.727, 0.585], nach: [-0.829, 0.637], farbe: 3, gestrichelt: true }
  - { von: [-0.829, 0.637], nach: [-0.941, 0.67], farbe: 3, gestrichelt: true }
  - { von: [-0.941, 0.67], nach: [-1.06, 0.682], farbe: 3, gestrichelt: true }
  - { von: [-1.06, 0.682], nach: [-1.239, 0.658], farbe: 3, gestrichelt: true }
  - { von: [-1.239, 0.658], nach: [-1.354, 0.614], farbe: 3, gestrichelt: true }
  - { von: [-1.354, 0.614], nach: [-1.46, 0.548], farbe: 3, gestrichelt: true }
  - { von: [-1.46, 0.548], nach: [-1.553, 0.464], farbe: 3, gestrichelt: true }
  - { von: [-1.553, 0.464], nach: [-1.629, 0.363], farbe: 3, gestrichelt: true }
  - { von: [-1.629, 0.363], nach: [-1.686, 0.25], farbe: 3, gestrichelt: true }
  - { von: [-1.686, 0.25], nach: [-1.72, 0.127], farbe: 3, gestrichelt: true }
  - { von: [-1.72, 0.127], nach: [-1.732, 0], farbe: 3, gestrichelt: true }
  - { von: [-1.732, 0], nach: [-1.72, -0.127], farbe: 3, gestrichelt: true }
  - { von: [-1.72, -0.127], nach: [-1.686, -0.25], farbe: 3, gestrichelt: true }
  - { von: [-1.686, -0.25], nach: [-1.629, -0.363], farbe: 3, gestrichelt: true }
  - { von: [-1.629, -0.363], nach: [-1.553, -0.464], farbe: 3, gestrichelt: true }
  - { von: [-1.553, -0.464], nach: [-1.46, -0.548], farbe: 3, gestrichelt: true }
  - { von: [-1.46, -0.548], nach: [-1.354, -0.614], farbe: 3, gestrichelt: true }
  - { von: [-1.354, -0.614], nach: [-1.239, -0.658], farbe: 3, gestrichelt: true }
  - { von: [-1.239, -0.658], nach: [-1.06, -0.682], farbe: 3, gestrichelt: true }
  - { von: [-1.06, -0.682], nach: [-0.941, -0.67], farbe: 3, gestrichelt: true }
  - { von: [-0.941, -0.67], nach: [-0.829, -0.637], farbe: 3, gestrichelt: true }
  - { von: [-0.829, -0.637], nach: [-0.727, -0.585], farbe: 3, gestrichelt: true }
  - { von: [-0.727, -0.585], nach: [-0.598, -0.479], farbe: 3, gestrichelt: true }
  - { von: [-0.598, -0.479], nach: [-0.531, -0.394], farbe: 3, gestrichelt: true }
  - { von: [-0.531, -0.394], nach: [-0.459, -0.252], farbe: 3, gestrichelt: true }
  - { von: [-0.459, -0.252], nach: [-0.43, -0.153], farbe: 3, gestrichelt: true }
  - { von: [-0.43, -0.153], nach: [-0.414, 0], farbe: 3, gestrichelt: true }
  - { von: [1.732, 0], nach: [1.72, 0.127], farbe: 3, gestrichelt: true }
  - { von: [1.72, 0.127], nach: [1.686, 0.25], farbe: 3, gestrichelt: true }
  - { von: [1.686, 0.25], nach: [1.629, 0.363], farbe: 3, gestrichelt: true }
  - { von: [1.629, 0.363], nach: [1.553, 0.464], farbe: 3, gestrichelt: true }
  - { von: [1.553, 0.464], nach: [1.46, 0.548], farbe: 3, gestrichelt: true }
  - { von: [1.46, 0.548], nach: [1.354, 0.614], farbe: 3, gestrichelt: true }
  - { von: [1.354, 0.614], nach: [1.239, 0.658], farbe: 3, gestrichelt: true }
  - { von: [1.239, 0.658], nach: [1.06, 0.682], farbe: 3, gestrichelt: true }
  - { von: [1.06, 0.682], nach: [0.941, 0.67], farbe: 3, gestrichelt: true }
  - { von: [0.941, 0.67], nach: [0.829, 0.637], farbe: 3, gestrichelt: true }
  - { von: [0.829, 0.637], nach: [0.727, 0.585], farbe: 3, gestrichelt: true }
  - { von: [0.727, 0.585], nach: [0.598, 0.479], farbe: 3, gestrichelt: true }
  - { von: [0.598, 0.479], nach: [0.531, 0.394], farbe: 3, gestrichelt: true }
  - { von: [0.531, 0.394], nach: [0.459, 0.252], farbe: 3, gestrichelt: true }
  - { von: [0.459, 0.252], nach: [0.43, 0.153], farbe: 3, gestrichelt: true }
  - { von: [0.43, 0.153], nach: [0.414, 0], farbe: 3, gestrichelt: true }
  - { von: [0.414, 0], nach: [0.43, -0.153], farbe: 3, gestrichelt: true }
  - { von: [0.43, -0.153], nach: [0.459, -0.252], farbe: 3, gestrichelt: true }
  - { von: [0.459, -0.252], nach: [0.531, -0.394], farbe: 3, gestrichelt: true }
  - { von: [0.531, -0.394], nach: [0.598, -0.479], farbe: 3, gestrichelt: true }
  - { von: [0.598, -0.479], nach: [0.727, -0.585], farbe: 3, gestrichelt: true }
  - { von: [0.727, -0.585], nach: [0.829, -0.637], farbe: 3, gestrichelt: true }
  - { von: [0.829, -0.637], nach: [0.941, -0.67], farbe: 3, gestrichelt: true }
  - { von: [0.941, -0.67], nach: [1.06, -0.682], farbe: 3, gestrichelt: true }
  - { von: [1.06, -0.682], nach: [1.239, -0.658], farbe: 3, gestrichelt: true }
  - { von: [1.239, -0.658], nach: [1.354, -0.614], farbe: 3, gestrichelt: true }
  - { von: [1.354, -0.614], nach: [1.46, -0.548], farbe: 3, gestrichelt: true }
  - { von: [1.46, -0.548], nach: [1.553, -0.464], farbe: 3, gestrichelt: true }
  - { von: [1.553, -0.464], nach: [1.629, -0.363], farbe: 3, gestrichelt: true }
  - { von: [1.629, -0.363], nach: [1.686, -0.25], farbe: 3, gestrichelt: true }
  - { von: [1.686, -0.25], nach: [1.72, -0.127], farbe: 3, gestrichelt: true }
  - { von: [1.72, -0.127], nach: [1.732, 0], farbe: 3, gestrichelt: true }
  - { von: [-0.677, 0], nach: [-0.706, 0.137], farbe: 3, gestrichelt: true }
  - { von: [-0.706, 0.137], nach: [-0.769, 0.231], farbe: 3, gestrichelt: true }
  - { von: [-0.769, 0.231], nach: [-0.887, 0.311], farbe: 3, gestrichelt: true }
  - { von: [-0.887, 0.311], nach: [-1, 0.334], farbe: 3, gestrichelt: true }
  - { von: [-1, 0.334], nach: [-1.143, 0.306], farbe: 3, gestrichelt: true }
  - { von: [-1.143, 0.306], nach: [-1.24, 0.24], farbe: 3, gestrichelt: true }
  - { von: [-1.24, 0.24], nach: [-1.321, 0.117], farbe: 3, gestrichelt: true }
  - { von: [-1.321, 0.117], nach: [-1.342, 0], farbe: 3, gestrichelt: true }
  - { von: [-1.342, 0], nach: [-1.321, -0.117], farbe: 3, gestrichelt: true }
  - { von: [-1.321, -0.117], nach: [-1.24, -0.24], farbe: 3, gestrichelt: true }
  - { von: [-1.24, -0.24], nach: [-1.143, -0.306], farbe: 3, gestrichelt: true }
  - { von: [-1.143, -0.306], nach: [-1, -0.334], farbe: 3, gestrichelt: true }
  - { von: [-1, -0.334], nach: [-0.887, -0.311], farbe: 3, gestrichelt: true }
  - { von: [-0.887, -0.311], nach: [-0.769, -0.231], farbe: 3, gestrichelt: true }
  - { von: [-0.769, -0.231], nach: [-0.706, -0.137], farbe: 3, gestrichelt: true }
  - { von: [-0.706, -0.137], nach: [-0.677, 0], farbe: 3, gestrichelt: true }
  - { von: [1.342, 0], nach: [1.321, 0.117], farbe: 3, gestrichelt: true }
  - { von: [1.321, 0.117], nach: [1.24, 0.24], farbe: 3, gestrichelt: true }
  - { von: [1.24, 0.24], nach: [1.143, 0.306], farbe: 3, gestrichelt: true }
  - { von: [1.143, 0.306], nach: [1, 0.334], farbe: 3, gestrichelt: true }
  - { von: [1, 0.334], nach: [0.887, 0.311], farbe: 3, gestrichelt: true }
  - { von: [0.887, 0.311], nach: [0.769, 0.231], farbe: 3, gestrichelt: true }
  - { von: [0.769, 0.231], nach: [0.706, 0.137], farbe: 3, gestrichelt: true }
  - { von: [0.706, 0.137], nach: [0.677, 0], farbe: 3, gestrichelt: true }
  - { von: [0.677, 0], nach: [0.706, -0.137], farbe: 3, gestrichelt: true }
  - { von: [0.706, -0.137], nach: [0.769, -0.231], farbe: 3, gestrichelt: true }
  - { von: [0.769, -0.231], nach: [0.887, -0.311], farbe: 3, gestrichelt: true }
  - { von: [0.887, -0.311], nach: [1, -0.334], farbe: 3, gestrichelt: true }
  - { von: [1, -0.334], nach: [1.143, -0.306], farbe: 3, gestrichelt: true }
  - { von: [1.143, -0.306], nach: [1.24, -0.24], farbe: 3, gestrichelt: true }
  - { von: [1.24, -0.24], nach: [1.321, -0.117], farbe: 3, gestrichelt: true }
  - { von: [1.321, -0.117], nach: [1.342, 0], farbe: 3, gestrichelt: true }
  - { von: [0, -2.2], nach: [0, 2.2], farbe: 3, gestrichelt: true }
  - { von: [-0.925, 0.027], nach: [-0.383, 0.203], farbe: 0 }
  - { von: [-0.383, 0.203], nach: [-0.186, 0.239], farbe: 0 }
  - { von: [-0.186, 0.239], nach: [0.003, 0.252], farbe: 0 }
  - { von: [0.003, 0.252], nach: [0.193, 0.239], farbe: 0 }
  - { von: [0.193, 0.239], nach: [0.389, 0.201], farbe: 0 }
  - { von: [0.389, 0.201], nach: [0.931, 0.025], farbe: 0 }
  - { von: [-0.925, -0.027], nach: [-0.383, -0.203], farbe: 0 }
  - { von: [-0.383, -0.203], nach: [-0.186, -0.239], farbe: 0 }
  - { von: [-0.186, -0.239], nach: [0.003, -0.252], farbe: 0 }
  - { von: [0.003, -0.252], nach: [0.193, -0.239], farbe: 0 }
  - { von: [0.193, -0.239], nach: [0.389, -0.201], farbe: 0 }
  - { von: [0.389, -0.201], nach: [0.931, -0.025], farbe: 0 }
  - { von: [-0.943, 0.057], nach: [-0.659, 0.324], farbe: 0 }
  - { von: [-0.659, 0.324], nach: [-0.44, 0.481], farbe: 0 }
  - { von: [-0.44, 0.481], nach: [-0.222, 0.578], farbe: 0 }
  - { von: [-0.222, 0.578], nach: [-0.005, 0.611], farbe: 0 }
  - { von: [-0.005, 0.611], nach: [0.222, 0.578], farbe: 0 }
  - { von: [0.222, 0.578], nach: [0.441, 0.481], farbe: 0 }
  - { von: [0.441, 0.481], nach: [0.66, 0.323], farbe: 0 }
  - { von: [0.66, 0.323], nach: [0.944, 0.056], farbe: 0 }
  - { von: [-0.943, -0.057], nach: [-0.659, -0.324], farbe: 0 }
  - { von: [-0.659, -0.324], nach: [-0.44, -0.481], farbe: 0 }
  - { von: [-0.44, -0.481], nach: [-0.222, -0.578], farbe: 0 }
  - { von: [-0.222, -0.578], nach: [-0.005, -0.611], farbe: 0 }
  - { von: [-0.005, -0.611], nach: [0.222, -0.578], farbe: 0 }
  - { von: [0.222, -0.578], nach: [0.441, -0.481], farbe: 0 }
  - { von: [0.441, -0.481], nach: [0.66, -0.323], farbe: 0 }
  - { von: [0.66, -0.323], nach: [0.944, -0.056], farbe: 0 }
  - { von: [-0.973, 0.075], nach: [-0.773, 0.544], farbe: 0 }
  - { von: [-0.773, 0.544], nach: [-0.674, 0.706], farbe: 0 }
  - { von: [-0.674, 0.706], nach: [-0.56, 0.845], farbe: 0 }
  - { von: [-0.56, 0.845], nach: [-0.433, 0.957], farbe: 0 }
  - { von: [-0.433, 0.957], nach: [-0.295, 1.039], farbe: 0 }
  - { von: [-0.295, 1.039], nach: [-0.144, 1.09], farbe: 0 }
  - { von: [-0.144, 1.09], nach: [0.005, 1.106], farbe: 0 }
  - { von: [0.005, 1.106], nach: [0.153, 1.088], farbe: 0 }
  - { von: [0.153, 1.088], nach: [0.304, 1.035], farbe: 0 }
  - { von: [0.304, 1.035], nach: [0.44, 0.952], farbe: 0 }
  - { von: [0.44, 0.952], nach: [0.566, 0.838], farbe: 0 }
  - { von: [0.566, 0.838], nach: [0.679, 0.698], farbe: 0 }
  - { von: [0.679, 0.698], nach: [0.777, 0.535], farbe: 0 }
  - { von: [0.777, 0.535], nach: [0.976, 0.066], farbe: 0 }
  - { von: [-0.973, -0.075], nach: [-0.773, -0.544], farbe: 0 }
  - { von: [-0.773, -0.544], nach: [-0.674, -0.706], farbe: 0 }
  - { von: [-0.674, -0.706], nach: [-0.56, -0.845], farbe: 0 }
  - { von: [-0.56, -0.845], nach: [-0.433, -0.957], farbe: 0 }
  - { von: [-0.433, -0.957], nach: [-0.295, -1.039], farbe: 0 }
  - { von: [-0.295, -1.039], nach: [-0.144, -1.09], farbe: 0 }
  - { von: [-0.144, -1.09], nach: [0.005, -1.106], farbe: 0 }
  - { von: [0.005, -1.106], nach: [0.153, -1.088], farbe: 0 }
  - { von: [0.153, -1.088], nach: [0.304, -1.035], farbe: 0 }
  - { von: [0.304, -1.035], nach: [0.44, -0.952], farbe: 0 }
  - { von: [0.44, -0.952], nach: [0.566, -0.838], farbe: 0 }
  - { von: [0.566, -0.838], nach: [0.679, -0.698], farbe: 0 }
  - { von: [0.679, -0.698], nach: [0.777, -0.535], farbe: 0 }
  - { von: [0.777, -0.535], nach: [0.976, -0.066], farbe: 0 }
  - { von: [-1.007, 0.08], nach: [-1.03, 0.499], farbe: 0 }
  - { von: [-1.03, 0.499], nach: [-1.01, 0.828], farbe: 0 }
  - { von: [-1.01, 0.828], nach: [-0.946, 1.131], farbe: 0 }
  - { von: [-0.946, 1.131], nach: [-0.836, 1.399], farbe: 0 }
  - { von: [-0.836, 1.399], nach: [-0.677, 1.628], farbe: 0 }
  - { von: [-0.677, 1.628], nach: [-0.474, 1.806], farbe: 0 }
  - { von: [-0.474, 1.806], nach: [-0.249, 1.913], farbe: 0 }
  - { von: [-0.249, 1.913], nach: [-0.003, 1.952], farbe: 0 }
  - { von: [-0.003, 1.952], nach: [0.243, 1.915], farbe: 0 }
  - { von: [0.243, 1.915], nach: [0.477, 1.804], farbe: 0 }
  - { von: [0.477, 1.804], nach: [0.679, 1.626], farbe: 0 }
  - { von: [0.679, 1.626], nach: [0.837, 1.395], farbe: 0 }
  - { von: [0.837, 1.395], nach: [0.947, 1.128], farbe: 0 }
  - { von: [0.947, 1.128], nach: [1.011, 0.825], farbe: 0 }
  - { von: [1.011, 0.825], nach: [1.029, 0.495], farbe: 0 }
  - { von: [1.029, 0.495], nach: [1.007, 0.076], farbe: 0 }
  - { von: [-1.007, -0.08], nach: [-1.03, -0.499], farbe: 0 }
  - { von: [-1.03, -0.499], nach: [-1.01, -0.828], farbe: 0 }
  - { von: [-1.01, -0.828], nach: [-0.946, -1.131], farbe: 0 }
  - { von: [-0.946, -1.131], nach: [-0.836, -1.399], farbe: 0 }
  - { von: [-0.836, -1.399], nach: [-0.677, -1.628], farbe: 0 }
  - { von: [-0.677, -1.628], nach: [-0.474, -1.806], farbe: 0 }
  - { von: [-0.474, -1.806], nach: [-0.249, -1.913], farbe: 0 }
  - { von: [-0.249, -1.913], nach: [-0.003, -1.952], farbe: 0 }
  - { von: [-0.003, -1.952], nach: [0.243, -1.915], farbe: 0 }
  - { von: [0.243, -1.915], nach: [0.477, -1.804], farbe: 0 }
  - { von: [0.477, -1.804], nach: [0.679, -1.626], farbe: 0 }
  - { von: [0.679, -1.626], nach: [0.837, -1.395], farbe: 0 }
  - { von: [0.837, -1.395], nach: [0.947, -1.128], farbe: 0 }
  - { von: [0.947, -1.128], nach: [1.011, -0.825], farbe: 0 }
  - { von: [1.011, -0.825], nach: [1.029, -0.495], farbe: 0 }
  - { von: [1.029, -0.495], nach: [1.007, -0.076], farbe: 0 }
  - { von: [-1.046, 0.066], nach: [-1.401, 0.621], farbe: 0 }
  - { von: [-1.401, 0.621], nach: [-1.534, 0.879], farbe: 0 }
  - { von: [-1.534, 0.879], nach: [-1.644, 1.137], farbe: 0 }
  - { von: [-1.644, 1.137], nach: [-1.734, 1.402], farbe: 0 }
  - { von: [-1.734, 1.402], nach: [-1.803, 1.673], farbe: 0 }
  - { von: [-1.803, 1.673], nach: [-1.848, 1.939], farbe: 0 }
  - { von: [-1.848, 1.939], nach: [-1.87, 2.208], farbe: 0 }
  - { von: [1.046, 0.066], nach: [1.401, 0.621], farbe: 0 }
  - { von: [1.401, 0.621], nach: [1.534, 0.879], farbe: 0 }
  - { von: [1.534, 0.879], nach: [1.644, 1.137], farbe: 0 }
  - { von: [1.644, 1.137], nach: [1.734, 1.402], farbe: 0 }
  - { von: [1.734, 1.402], nach: [1.803, 1.673], farbe: 0 }
  - { von: [1.803, 1.673], nach: [1.848, 1.939], farbe: 0 }
  - { von: [1.848, 1.939], nach: [1.87, 2.208], farbe: 0 }
  - { von: [-1.046, -0.066], nach: [-1.401, -0.621], farbe: 0 }
  - { von: [-1.401, -0.621], nach: [-1.534, -0.879], farbe: 0 }
  - { von: [-1.534, -0.879], nach: [-1.644, -1.137], farbe: 0 }
  - { von: [-1.644, -1.137], nach: [-1.734, -1.402], farbe: 0 }
  - { von: [-1.734, -1.402], nach: [-1.803, -1.673], farbe: 0 }
  - { von: [-1.803, -1.673], nach: [-1.848, -1.939], farbe: 0 }
  - { von: [-1.848, -1.939], nach: [-1.87, -2.208], farbe: 0 }
  - { von: [1.046, -0.066], nach: [1.401, -0.621], farbe: 0 }
  - { von: [1.401, -0.621], nach: [1.534, -0.879], farbe: 0 }
  - { von: [1.534, -0.879], nach: [1.644, -1.137], farbe: 0 }
  - { von: [1.644, -1.137], nach: [1.734, -1.402], farbe: 0 }
  - { von: [1.734, -1.402], nach: [1.803, -1.673], farbe: 0 }
  - { von: [1.803, -1.673], nach: [1.848, -1.939], farbe: 0 }
  - { von: [1.848, -1.939], nach: [1.87, -2.208], farbe: 0 }
  - { von: [-1.075, 0.027], nach: [-2.079, 0.425], farbe: 0 }
  - { von: [-2.079, 0.425], nach: [-3.006, 0.874], farbe: 0 }
  - { von: [1.075, 0.027], nach: [2.079, 0.425], farbe: 0 }
  - { von: [2.079, 0.425], nach: [3.006, 0.874], farbe: 0 }
  - { von: [-1.075, -0.027], nach: [-2.079, -0.425], farbe: 0 }
  - { von: [-2.079, -0.425], nach: [-3.006, -0.874], farbe: 0 }
  - { von: [1.075, -0.027], nach: [2.079, -0.425], farbe: 0 }
  - { von: [2.079, -0.425], nach: [3.006, -0.874], farbe: 0 }
  - { von: [-3, 0], nach: [-1.08, 0], farbe: 0 }
  - { von: [-0.92, 0], nach: [0.92, 0], farbe: 0 }
  - { von: [1.08, 0], nach: [3, 0], farbe: 0 }
vektoren:
  - { von: [-0.107, 0.252], nach: [0.113, 0.251], farbe: 0 }
  - { von: [-0.107, -0.252], nach: [0.113, -0.251], farbe: 0 }
  - { von: [-0.115, 0.61], nach: [0.105, 0.612], farbe: 0 }
  - { von: [-0.115, -0.61], nach: [0.105, -0.612], farbe: 0 }
  - { von: [-0.105, 1.107], nach: [0.115, 1.105], farbe: 0 }
  - { von: [-0.105, -1.107], nach: [0.115, -1.105], farbe: 0 }
  - { von: [-0.113, 1.951], nach: [0.107, 1.952], farbe: 0 }
  - { von: [-0.113, -1.951], nach: [0.107, -1.952], farbe: 0 }
  - { von: [-1.363, 0.551], nach: [-1.468, 0.744], farbe: 0 }
  - { von: [1.468, 0.744], nach: [1.363, 0.551], farbe: 0 }
  - { von: [-1.363, -0.551], nach: [-1.468, -0.744], farbe: 0 }
  - { von: [1.468, -0.744], nach: [1.363, -0.551], farbe: 0 }
  - { von: [-1.562, 0.21], nach: [-1.766, 0.292], farbe: 0 }
  - { von: [1.766, 0.292], nach: [1.562, 0.21], farbe: 0 }
  - { von: [-1.562, -0.21], nach: [-1.766, -0.292], farbe: 0 }
  - { von: [1.766, -0.292], nach: [1.562, -0.21], farbe: 0 }
  - { von: [-2.1, 0], nach: [-2.35, 0], farbe: 0 }
  - { von: [-0.12, 0], nach: [0.12, 0], farbe: 0 }
  - { von: [2.35, 0], nach: [2.1, 0], farbe: 0 }
punkte:
  - { x: -1, y: 0, label: "+Q", farbe: 1 }
  - { x: 1, y: 0, label: "−Q", farbe: 2 }
beschriftung: "Berechnete Äquipotentiallinien (violett gestrichelt) und Feldlinien (blau) eines Dipols. Um jede Ladung liegen geschlossene Linien gleichen Potentials, links positive, rechts negative Werte. Die senkrechte Mittellinie hat das Potential null. Feldlinien und Äquipotentiallinien kreuzen sich überall im rechten Winkel."
```

### Die geladene Metallkugel

Auf einer Metallkugel mit dem Radius $R$ sitzt die Ladung $Q$ gleichmäßig auf der Oberfläche. Außerhalb
wirkt sie genau wie eine Punktladung im Mittelpunkt. An der Oberfläche gilt also
$$\varphi = k\,\frac{Q}{R} \qquad\text{und}\qquad E = k\,\frac{Q}{R^2} = \frac{\varphi}{R}.$$
Im Inneren ist das Feld null, das Potential aber überall so groß wie an der Oberfläche. Das passt zur
Lektion [Influenz, Polarisation und Leiter im Feld](/lernen/physik1/elektrostatik/influenz-polarisation-und-leiter-im-feld).

Die Formel $E = \varphi/R$ erklärt die **Spitzenwirkung**: Bei gleichem Potential ist das Feld an einer
stark gekrümmten Stelle (kleines $R$) viel stärker als an einer schwach gekrümmten (großes $R$). Darum springen Funken zuerst an Spitzen über.

```aufgabe
id: p12-aequi-dipol
titel: Äquipotentiallinien lesen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Sieh dir das Bild der Äquipotentiallinien des Dipols in dieser Lektion an. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Feldlinien und Äquipotentiallinien schneiden sich im rechten Winkel."
      - "Auf der senkrechten Mittellinie ist das Potential null."
      - "Auf der senkrechten Mittellinie ist auch die Feldstärke null."
      - "Bewegt man eine Ladung entlang einer Äquipotentiallinie, verrichtet das Feld keine Arbeit."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Potential null heißt nicht Feldstärke null. Auf der Mittellinie zeigen die Feldlinien waagrecht von plus nach minus. Dort ist das Feld sogar recht stark.
      - wert: [0, 3]
        meldung: |
          Auf der Mittellinie ist jeder Punkt von $+Q$ und $-Q$ gleich weit entfernt. Die Beiträge $+kQ/r$ und $-kQ/r$ heben sich auf, das Potential ist null.
hinweise:
  - Unterscheide wieder streng zwischen Potential (Höhe) und Feldstärke (Steilheit).
loesung: |
  **Ansatz:** Wir nutzen die Eigenschaften von Äquipotentiallinien und die Formel $\varphi = kQ/r$ mit Vorzeichen.
  ---
  Richtig sind der rechte Winkel, das Potential null auf der Mittellinie und die fehlende Arbeit entlang einer Äquipotentiallinie. Falsch ist „Feldstärke null“: Das Feld zeigt dort kräftig von plus nach minus.
```

```aufgabe
id: p12-phi-diagramm
titel: Ladung aus dem Potentialverlauf
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt das Potential in der Umgebung einer Punktladung, gemessen gegenüber dem Unendlichen.

  a) Lies das Potential bei $r = 0{,}10\,\text{m}$ ab (in V).

  b) Berechne daraus die Ladung (in nC).

  c) Wie groß ist die Feldstärke bei $r = 0{,}10\,\text{m}$ (in V/m)?
plot:
  x: [0, 0.5]
  y: [0, 1000]
  achsen: { x: "r in m", y: "φ in V" }
  graphen:
    - { f: "44.95/x", von: 0.045, bis: 0.5, farbe: 0 }
  punkte:
    - { x: 0.1, y: 449.5 }
    - { x: 0.3, y: 149.8 }
teile:
  - typ: zahl
    label: a) φ in V
    loesung: "450"
    einheit: "V"
    toleranz: 15
    fehler:
      - wert: "150"
        meldung: |
          Das ist der Wert bei $r = 0{,}30\,\text{m}$. Lies über $r = 0{,}10\,\text{m}$ ab.
  - typ: zahl
    label: b) Q in nC
    loesung: "450*0.10/8.99e9*1e9"
    einheit: "nC"
    anzeige: '5{,}0'
    fehler:
      - wert: "450*0.10^2/8.99e9*1e9"
        meldung: |
          Du hast die Formel der Feldstärke umgestellt. Für das Potential gilt $\varphi = kQ/r$, also $Q = \varphi\,r/k$.
  - typ: zahl
    label: c) E in V/m
    loesung: "450/0.10"
    einheit: "V/m"
    anzeige: '4500'
    fehler:
      - wert: "450"
        meldung: |
          Das ist das Potential in V. Die Feldstärke einer Punktladung ist $E = kQ/r^2 = \varphi/r$.
hinweise:
  - 'Lies den Wert über $r = 0{,}10\,\text{m}$ ab. Dann $\varphi = kQ/r$ nach $Q$ umstellen.'
  - 'Für eine Punktladung gilt $E = kQ/r^2 = \dfrac{kQ}{r}\cdot\dfrac1r = \dfrac{\varphi}{r}$.'
loesung: |
  **Ansatz:** Der Graph ist eine Hyperbel $\varphi = kQ/r$. Aus einem abgelesenen Punkt folgt $Q$.
  ---
  **a)** Abgelesen: $\varphi(0{,}10\,\text{m}) \approx 450\,\text{V}$. Kontrolle: Bei dreifachem Abstand $0{,}30\,\text{m}$ zeigt der Graph ein Drittel, $150\,\text{V}$.
  ---
  **b)** $Q = \dfrac{\varphi\,r}{k} = \dfrac{450\,\text{V}\cdot 0{,}10\,\text{m}}{8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2} = 5{,}0\cdot 10^{-9}\,\text{C} = 5{,}0\,\text{nC}$.
  ---
  **c)** $E = \dfrac{\varphi}{r} = \dfrac{450\,\text{V}}{0{,}10\,\text{m}} = 4500\,\text{V/m}$. Probe: $kQ/r^2 = 8{,}99\cdot 10^{9}\cdot 5{,}0\cdot 10^{-9}/0{,}01\,\text{V/m} = 4500\,\text{V/m}$.
```

```aufgabe
id: p12-kugel-potential
titel: Die Kugel eines Bandgenerators
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Die Metallkugel eines Bandgenerators (Van-de-Graaff-Generator) hat den Radius $10\,\text{cm}$. Sie wird auf das Potential $30\,\text{kV}$ gegenüber der weit entfernten Umgebung aufgeladen.

  a) Welche Ladung trägt sie (in µC)?

  b) Wie groß ist die Feldstärke direkt an der Oberfläche (in kV/m)?
teile:
  - typ: zahl
    label: a) Q in µC
    loesung: "30e3*0.10/8.99e9*1e6"
    einheit: "µC"
    anzeige: '0{,}334'
    fehler:
      - wert: "30e3*0.10^2/8.99e9*1e6"
        meldung: |
          Für das Potential einer Kugel gilt $\varphi = kQ/R$ ohne Quadrat. Also $Q = \varphi R/k$.
      - wert: "30*0.10/8.99e9*1e6"
        meldung: |
          Kilo heißt $10^{3}$. $30\,\text{kV}$ sind $30\,000\,\text{V}$.
  - typ: zahl
    label: b) E in kV/m
    loesung: "30e3/0.10/1000"
    einheit: "kV/m"
    anzeige: '300'
    fehler:
      - wert: "30e3*0.10/1000"
        meldung: |
          An der Kugeloberfläche ist $E = \varphi/R$, nicht $\varphi\cdot R$. Prüfe die Einheit: V mal m ist keine Feldstärke.
hinweise:
  - 'Außerhalb wirkt die Kugel wie eine Punktladung im Mittelpunkt. An der Oberfläche gilt $\varphi = kQ/R$.'
  - 'Die Feldstärke an der Oberfläche ist $E = kQ/R^2 = \varphi/R$.'
loesung: |
  **Modell:** Die Ladung sitzt gleichmäßig auf der Kugeloberfläche. Nach außen wirkt sie wie eine Punktladung im Mittelpunkt.
  ---
  **a)** $Q = \dfrac{\varphi\,R}{k} = \dfrac{3{,}0\cdot 10^{4}\,\text{V}\cdot 0{,}10\,\text{m}}{8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2} = 3{,}34\cdot 10^{-7}\,\text{C} = 0{,}334\,\mu\text{C}$.
  ---
  **b)** $E = \dfrac{\varphi}{R} = \dfrac{3{,}0\cdot 10^{4}\,\text{V}}{0{,}10\,\text{m}} = 3{,}0\cdot 10^{5}\,\text{V/m} = 300\,\text{kV/m}$.
  ---
  **Einordnen:** Trockene Luft schlägt bei etwa $3\cdot 10^{6}\,\text{V/m}$ durch. Die Kugel liegt noch zehnfach darunter. Eine kleinere Kugel auf demselben Potential hätte ein stärkeres Feld und würde schneller Funken sprühen.
```

```reflexion
frage: Warum darf man im Feld einer Punktladung nicht mit $U = E\cdot d$ rechnen, im Plattenkondensator aber schon? Was müsste man stattdessen tun, wenn man nur die Feldstärke kennt?
antwort: |
  $U = E\cdot d$ ist die Arbeit pro Ladung bei konstanter Kraft. Im Plattenkondensator ist das Feld überall gleich, also ist die Kraft konstant. Um eine Punktladung ändert sich das Feld auf dem Weg ständig. Man müsste die Strecke in viele kleine Stücke teilen, auf denen das Feld fast konstant ist, und die Beiträge $E\cdot\Delta r$ aufsummieren. Das ist die Fläche unter der $E(r)$-Kurve, also ein Integral. Für die Punktladung liefert es genau die Potentialdifferenz $kQ/r_A - kQ/r_B$.
```

```aufgabe
id: p12-rutherford
titel: Rutherford-Streuung an Aluminium
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Alphateilchen (Ladung $2e$) mit der Bewegungsenergie $7{,}7\,\text{MeV}$ fliegt genau auf einen Aluminiumkern zu (Ladung $13e$). Der Kern bleibt in Ruhe.

  a) Wie groß ist der kleinste Abstand zwischen beiden (in $10^{-15}\,\text{m}$)?

  b) Der Radius eines Aluminiumkerns ist etwa $3{,}6\cdot 10^{-15}\,\text{m}$, der eines Alphateilchens etwa $1{,}7\cdot 10^{-15}\,\text{m}$. Berühren sich die beiden? Was folgt daraus für das Coulomb-Gesetz?
teile:
  - typ: zahl
    label: a) r_min in 10⁻¹⁵ m
    loesung: "8.99e9*2*13*(1.602e-19)^2/(7.7e6*1.602e-19)/1e-15"
    anzeige: '4{,}86'
    fehler:
      - wert: "8.99e9*13*(1.602e-19)^2/(7.7e6*1.602e-19)/1e-15"
        meldung: |
          Das Alphateilchen trägt **zwei** Elementarladungen. Im Zähler steht $2e\cdot 13e = 26\,e^2$.
  - typ: text
    label: b) Deutung
    muster: |
      Die Summe der Radien ist $3{,}6 + 1{,}7 = 5{,}3$ in Einheiten von $10^{-15}\,\text{m}$. Der berechnete kleinste Abstand $4{,}86\cdot 10^{-15}\,\text{m}$ ist kleiner. Das Teilchen würde den Kern also gerade berühren. Dann wirkt zusätzlich die starke Kernkraft, und die Rechnung mit dem reinen Coulomb-Gesetz stimmt nicht mehr genau. Rutherford beobachtete bei leichten Kernen und hohen Energien genau solche Abweichungen.
hinweise:
  - 'Energiesatz: Die ganze Bewegungsenergie wird zu potentieller Energie, $E_{\text{kin}} = k\,\dfrac{2e\cdot 13e}{r_{\min}}$.'
  - 'Rechne $7{,}7\,\text{MeV}$ mit $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$ in Joule um, bevor du nach $r_{\min}$ auflöst.'
loesung: |
  **Modell:** Zentraler Stoß, der Kern ruht. Im Umkehrpunkt steht das Alphateilchen kurz still. Weit weg war die potentielle Energie null.
  ---
  **Energiesatz:** $E_{\text{kin}} = k\,\dfrac{26\,e^2}{r_{\min}}$, also $r_{\min} = k\,\dfrac{26\,e^2}{E_{\text{kin}}}$.
  ---
  **Umrechnen:** $E_{\text{kin}} = 7{,}7\cdot 10^{6}\cdot 1{,}602\cdot 10^{-19}\,\text{J} = 1{,}23\cdot 10^{-12}\,\text{J}$.
  ---
  **a)** $r_{\min} = 8{,}99\cdot 10^{9}\,\tfrac{\text{N}\,\text{m}^2}{\text{C}^2}\cdot\dfrac{26\cdot(1{,}602\cdot 10^{-19}\,\text{C})^2}{1{,}23\cdot 10^{-12}\,\text{J}} = 4{,}86\cdot 10^{-15}\,\text{m}$.
  ---
  **b)** Die Radien ergeben zusammen $5{,}3\cdot 10^{-15}\,\text{m}$, mehr als $r_{\min}$. Die Teilchen würden sich berühren. Dort wirkt die starke Kernkraft, und das reine Coulomb-Gesetz reicht nicht mehr aus.
```

## Kondensator und Kapazität

```aufgabe
id: p12-9-check
art: check
titel: "Vorwissen: Feldstärke im Plattenkondensator"
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  An zwei Platten im Abstand $2{,}0\,\text{mm}$ liegen $100\,\text{V}$. Wie groß ist die Feldstärke zwischen ihnen (in kV/m)?

  Herkunft: [Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld)
teile:
  - typ: zahl
    loesung: "100/2.0e-3/1000"
    einheit: "kV/m"
    anzeige: '50'
    fehler:
      - wert: "100*2.0e-3/1000"
        meldung: |
          Die Feldstärke ist Spannung **pro** Abstand: $E = U/d$.
hinweise:
  - '$E = U/d$ mit $d$ in Metern.'
loesung: |
  Im homogenen Feld gilt $E = U/d$.
  ---
  $E = 100\,\text{V} / 2{,}0\cdot 10^{-3}\,\text{m} = 5{,}0\cdot 10^{4}\,\text{V/m} = 50\,\text{kV/m}$.
```

Ein **Kondensator** (lateinisch *condensare*, also: verdichten) besteht aus zwei Leitern, die durch einen
Isolator getrennt sind. Meist sind es zwei parallele Metallplatten. Er speichert elektrische Ladung und
damit Energie. Kondensatoren stecken in jedem elektronischen Gerät, zum Beispiel als Puffer im Netzteil,
im Blitzgerät einer Kamera und im Touchscreen.

:::anwendung
Jede Speicherzelle eines Arbeitsspeichers (DRAM) ist ein winziger Kondensator. Ist er geladen, steht
dort eine 1, ist er leer, eine 0. Weil die Ladung langsam abfließt, muss der Speicher ständig
aufgefrischt werden, typisch spätestens alle $64$ Millisekunden. Daher kommt das „dynamisch“ im Namen. Ein Touchscreen misst, wie ein
Finger die Kapazität vieler kleiner Kondensatoren im Glas verändert.
:::

### Die Kapazität

Schließt man einen Kondensator an eine Spannungsquelle an, fließen Elektronen von der einen Platte zur
anderen, über die Quelle. Eine Platte erhält die Ladung $+Q$, die andere $-Q$. Danach liegt am Kondensator
dieselbe Spannung $U$ wie an der Quelle. Der Versuch zeigt: Doppelte Spannung gibt doppelte Ladung. Die
Ladung ist also proportional zur Spannung.

:::definition[Kapazität]
Die **Kapazität** $C$ eines Kondensators ist das Verhältnis von gespeicherter Ladung $Q$ (auf einer
Platte) zur Spannung $U$ zwischen den Platten:
$$C = \frac{Q}{U}, \qquad [C] = \frac{\text{C}}{\text{V}} = \text{F}\ (\text{Farad}).$$
:::

Die Kapazität sagt, **wie viel Ladung pro Volt** ein Kondensator aufnimmt. Sie ist eine Eigenschaft des
Bauteils, wie das Fassungsvermögen eines Gefäßes. **Beispiel:** Ein Kondensator nimmt bei $30\,\text{V}$
die Ladung $66\,\mu\text{C}$ auf. Seine Kapazität ist $C = 66\,\mu\text{C}/30\,\text{V} = 2{,}2\,\mu\text{F}$. Bei
$15\,\text{V}$ nimmt er $33\,\mu\text{C}$ auf, die Kapazität bleibt $2{,}2\,\mu\text{F}$. **Nichtbeispiel:** Die Ladung
ist **keine** Kapazität. Sie hängt von der angelegten Spannung ab, die Kapazität nicht.

```plot
x: [0, 12]
y: [0, 60]
achsen: { x: "U in V", y: "Q in µC" }
graphen:
  - { f: "4.7*x", von: 0, bis: 12, label: "C = 4,7 µF", farbe: 1 }
  - { f: "2.2*x", von: 0, bis: 12, label: "C = 2,2 µF", farbe: 0 }
punkte:
  - { x: 10, y: 22 }
  - { x: 10, y: 47 }
beschriftung: "Ladung über Spannung für zwei Kondensatoren. Beide Graphen sind Ursprungsgeraden, denn Q ist proportional zu U. Die Steigung ist die Kapazität: Bei 10 V nimmt der 4,7-µF-Kondensator 47 µC auf, der 2,2-µF-Kondensator nur 22 µC."
```

Ein Farad ist sehr viel. Übliche Kondensatoren haben Pikofarad ($1\,\text{pF} = 10^{-12}\,\text{F}$) bis
Millifarad. Nur spezielle Superkondensatoren erreichen viele Farad.

```aufgabe
id: p12-kapazitaet-def
titel: Kapazität aus Ladung und Spannung
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Kondensator wird an $9{,}0\,\text{V}$ angeschlossen und nimmt dabei $4{,}23\,\text{mC}$ auf. Wie groß ist seine Kapazität (in µF)?
teile:
  - typ: zahl
    loesung: "4.23e-3/9.0*1e6"
    einheit: "µF"
    anzeige: '470'
    fehler:
      - wert: "9.0/4.23e-3*1e6"
        meldung: |
          Du hast Spannung durch Ladung geteilt. Die Kapazität ist Ladung **pro Volt**: $C = Q/U$.
      - wert: "4.23e-3*9.0*1e6"
        meldung: |
          Kapazität ist ein Verhältnis, kein Produkt. $C = Q/U$.
hinweise:
  - 'Milli heißt $10^{-3}$, Mikro $10^{-6}$. Dann $C = Q/U$.'
loesung: |
  **Ansatz:** Definition der Kapazität, $C = Q/U$.
  ---
  **Rechnung:** $C = \dfrac{4{,}23\cdot 10^{-3}\,\text{C}}{9{,}0\,\text{V}} = 4{,}70\cdot 10^{-4}\,\text{F} = 470\,\mu\text{F}$. Das ist ein typischer Elektrolytkondensator.
```

### Der Plattenkondensator

Wovon hängt die Kapazität zweier Platten ab? Eine kurze Überlegung zeigt es. Die Ladung $Q$ verteilt sich
auf der Plattenfläche $A$. Je dichter sie sitzt, desto stärker ist das Feld zwischen den Platten. Genauer
gilt $E = \dfrac{Q}{\varepsilon_0\,A}$. Diese Formel übernehmen wir ohne Herleitung, sie geht über den
Prüfungsstoff hinaus. Mit $U = E\cdot d$ folgt $U = \dfrac{Q\,d}{\varepsilon_0\,A}$ und damit
$C = Q/U = \varepsilon_0\,A/d$.

:::satz[Kapazität des Plattenkondensators]
$$C = \varepsilon_0\,\varepsilon_r\,\frac{A}{d}$$
Dabei ist $A$ die Fläche einer Platte, $d$ der Plattenabstand und $\varepsilon_r$ die Permittivitätszahl
des Isolators zwischen den Platten. Für Vakuum und Luft gilt $\varepsilon_r \approx 1$.
:::

Die Formel ist anschaulich. **Größere Platten** bieten mehr Platz für Ladung, die Kapazität wächst mit
$A$. **Kleinerer Abstand** heißt: Für dieselbe Feldstärke genügt eine kleinere Spannung. Die Kapazität
wächst also mit $1/d$.

:::beispiel[Ein selbstgebauter Plattenkondensator]
Zwei Aluminiumplatten mit je $A = 0{,}030\,\text{m}^2$ liegen im Abstand $d = 0{,}50\,\text{mm}$ in Luft. Sie
werden an $12\,\text{V}$ angeschlossen.

**Schritt 1, umrechnen:** $d = 0{,}50\cdot 10^{-3}\,\text{m} = 5{,}0\cdot 10^{-4}\,\text{m}$.

**Schritt 2, Kapazität:**
$C = 8{,}854\cdot 10^{-12}\,\tfrac{\text{F}}{\text{m}}\cdot\dfrac{0{,}030\,\text{m}^2}{5{,}0\cdot 10^{-4}\,\text{m}} = 5{,}31\cdot 10^{-10}\,\text{F} = 531\,\text{pF}$.
Die Einheit von $\varepsilon_0$ kann man auch als $\text{F/m}$ schreiben, denn
$\tfrac{\text{C}^2}{\text{N}\,\text{m}^2} = \tfrac{\text{C}}{(\text{N}\,\text{m}/\text{C})\cdot\text{m}} = \tfrac{\text{C}}{\text{V}\cdot\text{m}} = \tfrac{\text{F}}{\text{m}}$.

**Schritt 3, Ladung:** $Q = C\,U = 5{,}31\cdot 10^{-10}\,\text{F}\cdot 12\,\text{V} = 6{,}4\cdot 10^{-9}\,\text{C} = 6{,}4\,\text{nC}$.

**Schritt 4, einordnen:** Für $1\,\text{F}$ bei $0{,}50\,\text{mm}$ Abstand bräuchte man
$A = C\,d/\varepsilon_0 = 5{,}6\cdot 10^{7}\,\text{m}^2$. Das ist ein Quadrat mit $7{,}5\,\text{km}$ Seitenlänge.
:::

:::achtung[Fehler: Fläche und Abstand nicht in Meter umgerechnet]
**Falsche Rechnung:** Platten mit $50\,\text{cm}^2$ im Abstand $2{,}0\,\text{mm}$. Jemand setzt die Zahlen direkt
ein: $C = 8{,}854\cdot 10^{-12}\cdot\dfrac{50}{2{,}0}\,\text{F} = 2{,}2\cdot 10^{-10}\,\text{F}$.

**Richtig:** $50\,\text{cm}^2 = 50\cdot 10^{-4}\,\text{m}^2$, weil $1\,\text{cm}^2 = (10^{-2}\,\text{m})^2 = 10^{-4}\,\text{m}^2$. Und
$2{,}0\,\text{mm} = 2{,}0\cdot 10^{-3}\,\text{m}$. Damit ist $C = 8{,}854\cdot 10^{-12}\cdot\dfrac{5{,}0\cdot 10^{-3}}{2{,}0\cdot 10^{-3}}\,\text{F} = 22\,\text{pF}$.
Das falsche Ergebnis ist zehnmal zu groß.
:::

```aufgabe
id: p12-plattenkondensator
titel: Kapazität eines Plattenkondensators
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Plattenkondensator hat Platten mit je $0{,}012\,\text{m}^2$ Fläche im Abstand $0{,}80\,\text{mm}$.

  a) Berechne die Kapazität mit Luft zwischen den Platten (in pF).

  b) Wie groß ist sie, wenn man den Zwischenraum ganz mit Glas ($\varepsilon_r = 6$) füllt (in pF)?
teile:
  - typ: zahl
    label: a) in pF
    loesung: "8.854e-12*0.012/0.80e-3*1e12"
    einheit: "pF"
    anzeige: '133'
    fehler:
      - wert: "8.854e-12*0.012/0.80*1e12"
        meldung: |
          Der Abstand muss in Metern stehen: $0{,}80\,\text{mm} = 8{,}0\cdot 10^{-4}\,\text{m}$.
      - wert: "8.854e-12*0.80e-3/0.012*1e12"
        meldung: |
          Fläche und Abstand sind vertauscht. Größere Platten geben **mehr** Kapazität, also gehört $A$ in den Zähler.
  - typ: zahl
    label: b) in pF
    loesung: "6*8.854e-12*0.012/0.80e-3*1e12"
    einheit: "pF"
    anzeige: '797'
    fehler:
      - wert: "8.854e-12*0.012/0.80e-3/6*1e12"
        meldung: |
          Das Dielektrikum **erhöht** die Kapazität um den Faktor $\varepsilon_r$. Multipliziere, statt zu teilen.
hinweise:
  - '$C = \varepsilon_0\,\varepsilon_r\,A/d$ mit $\varepsilon_0 = 8{,}854\cdot 10^{-12}\,\text{F/m}$. Den Abstand in Meter umrechnen.'
loesung: |
  **a)** $C = \varepsilon_0\dfrac{A}{d} = 8{,}854\cdot 10^{-12}\,\tfrac{\text{F}}{\text{m}}\cdot\dfrac{0{,}012\,\text{m}^2}{8{,}0\cdot 10^{-4}\,\text{m}} = 1{,}33\cdot 10^{-10}\,\text{F} = 133\,\text{pF}$.
  ---
  **b)** Mit Dielektrikum: $C = \varepsilon_r\,C_0 = 6\cdot 133\,\text{pF} = 797\,\text{pF}$.
```

```aufgabe
id: p12-c-proportional
titel: Platten größer, Abstand größer
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Man verdoppelt bei einem Plattenkondensator die Plattenfläche und verdreifacht zugleich den Plattenabstand. Auf das Wievielfache ändert sich die Kapazität? Gib den Faktor als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "2/3"
    anzeige: '\tfrac23 \approx 0{,}667'
    fehler:
      - wert: "2*3"
        meldung: |
          Ein größerer Abstand **verkleinert** die Kapazität. Der Abstand steht in $C = \varepsilon_0 A/d$ im Nenner.
      - wert: "2/9"
        meldung: |
          Der Abstand steht beim Kondensator **nicht** im Quadrat. Das wäre beim Coulomb-Gesetz so, hier gilt $C \sim A/d$.
hinweise:
  - '$C \sim A/d$. Ersetze $A$ durch $2A$ und $d$ durch $3d$.'
loesung: |
  **Ansatz:** Proportionalitätsschluss mit $C = \varepsilon_0\,A/d$.
  ---
  Doppelte Fläche gibt den Faktor $2$, dreifacher Abstand den Faktor $\tfrac13$. Zusammen: $\tfrac23 \approx 0{,}67$. Die Kapazität sinkt auf zwei Drittel.
```

### Die Kapazität einer Kugel

Auch ein einzelner Leiter hat eine Kapazität. Die Gegenplatte ist dann die weit entfernte Umgebung. Für
eine Kugel mit dem Radius $R$ gilt nach der Lektion
[Potential und Energie im Feld einer Punktladung](/lernen/physik1/elektrostatik/potential-und-energie-im-feld-einer-punktladung)
$\varphi = k\,Q/R$. Daraus folgt
$$C = \frac{Q}{\varphi} = \frac{R}{k} = 4\pi\varepsilon_0\,R.$$
Die Kapazität einer Kugel wächst also proportional zu ihrem Radius.

:::beispiel[Wie groß ist die Kapazität der Erde?]
Die Erde ist eine leitende Kugel mit $R = 6{,}37\cdot 10^{6}\,\text{m}$.

**Schritt 1, einsetzen:** $C = 4\pi\cdot 8{,}854\cdot 10^{-12}\,\tfrac{\text{F}}{\text{m}}\cdot 6{,}37\cdot 10^{6}\,\text{m} = 7{,}1\cdot 10^{-4}\,\text{F}$.

**Schritt 2, einordnen:** Die ganze Erde hat nur $0{,}71\,\text{mF}$. Ein handlicher Elektrolytkondensator
mit $1\,\text{mF}$ hat mehr. Der Grund: Beim Plattenkondensator stehen sich zwei Platten auf kleinem Abstand
gegenüber, das bringt viel mehr Kapazität als eine einzelne riesige Kugel.

**Schritt 3, Folgerung:** Trotzdem kann die Erde fast beliebig viel Ladung aufnehmen, ohne ihr Potential
merklich zu ändern. Ein Nanocoulomb ändert es nur um $10^{-9}/7{,}1\cdot 10^{-4}\,\text{V} = 1{,}4\,\mu\text{V}$.
Deshalb taugt die Erde als Bezugspunkt mit dem Potential null.
:::

```aufgabe
id: p12-kugelkapazitaet
titel: Eine Metallkugel als Kondensator
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine isoliert aufgestellte Metallkugel hat den Radius $15\,\text{cm}$.

  a) Wie groß ist ihre Kapazität (in pF)?

  b) Welche Ladung trägt sie, wenn ihr Potential $25\,\text{kV}$ beträgt (in µC)?
teile:
  - typ: zahl
    label: a) C in pF
    loesung: "4*pi*8.854e-12*0.15*1e12"
    einheit: "pF"
    anzeige: '16{,}7'
    fehler:
      - wert: "8.854e-12*0.15*1e12"
        meldung: |
          Der Faktor $4\pi$ fehlt. Die Kapazität einer Kugel ist $C = 4\pi\varepsilon_0 R$.
      - wert: "4*pi*8.854e-12*15*1e12"
        meldung: |
          Der Radius muss in Metern stehen: $15\,\text{cm} = 0{,}15\,\text{m}$.
  - typ: zahl
    label: b) Q in µC
    loesung: "4*pi*8.854e-12*0.15*25e3*1e6"
    einheit: "µC"
    anzeige: '0{,}417'
    fehler:
      - wert: "4*pi*8.854e-12*0.15/25e3*1e6"
        meldung: |
          Aus $C = Q/U$ folgt $Q = C\cdot U$. Multipliziere die Kapazität mit der Spannung.
hinweise:
  - '$C = 4\pi\varepsilon_0 R$ mit $R$ in Metern.'
  - '$Q = C\cdot\varphi$, mit $\varphi$ in Volt.'
loesung: |
  **Ansatz:** Eine einzelne Kugel hat die Kapazität $C = 4\pi\varepsilon_0 R$. Die Gegenelektrode ist die ferne Umgebung mit dem Potential null.
  ---
  **a)** $C = 4\pi\cdot 8{,}854\cdot 10^{-12}\,\tfrac{\text{F}}{\text{m}}\cdot 0{,}15\,\text{m} = 1{,}67\cdot 10^{-11}\,\text{F} = 16{,}7\,\text{pF}$.
  ---
  **b)** $Q = C\,\varphi = 1{,}67\cdot 10^{-11}\,\text{F}\cdot 2{,}5\cdot 10^{4}\,\text{V} = 4{,}17\cdot 10^{-7}\,\text{C} = 0{,}417\,\mu\text{C}$. Probe: $kQ/R = 8{,}99\cdot 10^{9}\cdot 4{,}17\cdot 10^{-7}/0{,}15\,\text{V} = 25\,\text{kV}$.
```

### Das Dielektrikum

Schiebt man einen Isolator zwischen die Platten, wird er **polarisiert**. Ein solcher Isolator heißt
**Dielektrikum**. An seiner Oberfläche zur positiven Platte sammelt sich negative Ladung, an der zur
negativen Platte positive. Diese Ladungen schwächen das Feld im Inneren. Bei gleicher Ladung auf den
Platten sinkt deshalb die Spannung. Die Kapazität $C = Q/U$ steigt um den Faktor $\varepsilon_r$.

Typische Permittivitätszahlen:

- Vakuum: genau $1$. Luft: $1{,}0006$, also praktisch $1$.
- Papier: etwa $2$ bis $4$. Kunststofffolien: etwa $2$ bis $3$.
- Glas: etwa $5$ bis $10$. Wasser: etwa $80$.
- Spezielle Keramik (Bariumtitanat): über $1000$.

Ein Dielektrikum hat noch einen zweiten Vorteil. Luft wird bei etwa $3\cdot 10^{6}\,\text{V/m}$ leitend, es
springt ein Funke über. Diesen Wert nennt man **Durchschlagfeldstärke**. Viele Kunststofffolien halten
zehnmal mehr aus. So kann man den Abstand klein machen und trotzdem hohe Spannungen anlegen.

```aufgabe
id: p12-durchschlag
titel: Wie hoch darf man laden?
niveau: 1
lernziel: 6
kompetenz: anwenden
angabe: |
  Luft schlägt bei etwa $3{,}0\cdot 10^{6}\,\text{V/m}$ durch. Welche Spannung verträgt ein Luftkondensator mit $2{,}5\,\text{mm}$ Plattenabstand höchstens (in kV)?
teile:
  - typ: zahl
    loesung: "3.0e6*2.5e-3/1000"
    einheit: "kV"
    anzeige: '7{,}5'
    fehler:
      - wert: "3.0e6/2.5e-3/1000"
        meldung: |
          Aus $E = U/d$ folgt $U = E\cdot d$. Du musst mit dem Abstand multiplizieren.
      - wert: "3.0e6*2.5/1000"
        meldung: |
          Der Abstand muss in Metern stehen: $2{,}5\,\text{mm} = 2{,}5\cdot 10^{-3}\,\text{m}$.
hinweise:
  - 'Im homogenen Feld gilt $U = E\cdot d$. Die höchste erlaubte Feldstärke ist die Durchschlagfeldstärke.'
loesung: |
  **Ansatz:** Die Feldstärke darf die Durchschlagfeldstärke nicht überschreiten. Mit $U = E\,d$ folgt die Höchstspannung.
  ---
  **Rechnung:** $U_{\max} = 3{,}0\cdot 10^{6}\,\tfrac{\text{V}}{\text{m}}\cdot 2{,}5\cdot 10^{-3}\,\text{m} = 7{,}5\cdot 10^{3}\,\text{V} = 7{,}5\,\text{kV}$. Das sind $3\,\text{kV}$ pro Millimeter Luft.
```

### Was passiert, wenn man etwas verändert?

Eine klassische Prüfungsfrage: Man zieht die Platten auseinander oder schiebt ein Dielektrikum hinein.
Was passiert mit $C$, $Q$, $U$ und $E$? Entscheidend ist eine einzige Frage: **Hängt der Kondensator noch
an der Spannungsquelle?**

- **Angeschlossen:** Die Quelle hält die Spannung $U$ fest. Ladung kann über die Quelle zu- oder abfließen.
- **Getrennt:** Die Ladung $Q$ kann nirgends hin. Sie bleibt fest. Die Spannung stellt sich neu ein.

Danach rechnest du mit $C = \varepsilon_0\varepsilon_r A/d$ die neue Kapazität aus und alles andere mit
$Q = C\,U$ und $E = U/d$.

:::beispiel[Ein getrennter Kondensator wird auseinandergezogen]
Der Kondensator aus dem Beispiel mit den Aluminiumplatten ($531\,\text{pF}$, $0{,}50\,\text{mm}$, geladen auf $12\,\text{V}$)
wird von der Quelle getrennt. Dann zieht man die Platten auf $1{,}0\,\text{mm}$ auseinander.

**Schritt 1, was bleibt?** Getrennt, also bleibt $Q = 6{,}4\,\text{nC}$.

**Schritt 2, neue Kapazität:** Doppelter Abstand halbiert die Kapazität: $C' = 266\,\text{pF}$.

**Schritt 3, neue Spannung:** $U' = Q/C' = 6{,}4\cdot 10^{-9}\,\text{C} / 2{,}66\cdot 10^{-10}\,\text{F} = 24\,\text{V}$. Sie hat sich verdoppelt.

**Schritt 4, Feldstärke:** Vorher $E = 12\,\text{V}/0{,}50\,\text{mm} = 24\,\text{kV/m}$. Nachher
$E' = 24\,\text{V}/1{,}0\,\text{mm} = 24\,\text{kV/m}$. Das Feld bleibt gleich, weil die Ladung auf den Platten gleich bleibt.
:::

:::achtung[Fehler: Beim getrennten Kondensator die Spannung festgehalten]
**Falsche Überlegung:** „Der Kondensator war auf $12\,\text{V}$ geladen. Nach dem Auseinanderziehen hat er
halbe Kapazität, also $Q = C' U = 266\,\text{pF}\cdot 12\,\text{V} = 3{,}2\,\text{nC}$.“

**Richtig:** Ohne Quelle kann keine Ladung von den Platten weg. $Q = 6{,}4\,\text{nC}$ bleibt. Die Spannung
ist es, die sich ändert: $U' = 24\,\text{V}$. Konstant ist beim getrennten Kondensator immer $Q$, beim
angeschlossenen immer $U$.
:::

```aufgabe
id: p12-abstand-verdoppeln
titel: Platten auseinanderziehen ohne Quelle
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Plattenkondensator wird an einer Spannungsquelle geladen und danach von ihr **getrennt**. Nun zieht man die Platten auf den doppelten Abstand auseinander. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Die Ladung bleibt gleich."
      - "Die Kapazität halbiert sich."
      - "Die Spannung halbiert sich."
      - "Die Feldstärke bleibt gleich."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          Bei fester Ladung und halber Kapazität gilt $U = Q/C$. Die Spannung **verdoppelt** sich also.
      - wert: [0, 1]
        meldung: |
          Auch die Feldstärke lässt sich vorhersagen. $E = U/d$, und sowohl $U$ als auch $d$ verdoppeln sich.
      - wert: [1, 2]
        meldung: |
          Getrennt von der Quelle kann keine Ladung zu- oder abfließen. $Q$ bleibt, und daraus folgt, dass $U$ steigt.
hinweise:
  - Getrennt von der Quelle kann keine Ladung zu- oder abfließen. Was folgt dann aus $U = Q/C$?
  - 'Für die Feldstärke: $E = U/d$. Wie ändern sich $U$ und $d$?'
loesung: |
  **Ansatz:** Getrennt heißt $Q$ konstant. Wir verfolgen $C$, $U$ und $E$.
  ---
  $C = \varepsilon_0 A/d$ halbiert sich. $U = Q/C$ verdoppelt sich.
  ---
  $E = U/d = (2U)/(2d)$ bleibt gleich. Das passt zum Bild: Gleiche Ladung auf gleicher Fläche erzeugt gleich dichte Feldlinien.
```

```aufgabe
id: p12-angeschlossen-auseinander
titel: Platten auseinanderziehen mit Quelle
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Luftkondensator mit $400\,\text{pF}$ bleibt an $50\,\text{V}$ **angeschlossen**. Man zieht die Platten auf den doppelten Abstand auseinander.

  a) Welche Ladung trägt er danach (in nC)?

  b) Was passiert mit der Feldstärke?
teile:
  - typ: zahl
    label: a) Q in nC
    loesung: "200e-12*50*1e9"
    einheit: "nC"
    anzeige: '10'
    fehler:
      - wert: "400e-12*50*1e9"
        meldung: |
          Das ist die Ladung **vor** dem Auseinanderziehen. Die Kapazität halbiert sich, und die Quelle hält $U$ fest.
      - wert: "400e-12*100*1e9"
        meldung: |
          Die Spannung kann sich nicht ändern, solange die Quelle angeschlossen ist. Sie bleibt $50\,\text{V}$.
  - typ: auswahl
    label: b) Feldstärke
    optionen:
      - "Sie halbiert sich."
      - "Sie bleibt gleich."
      - "Sie verdoppelt sich."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Gleich bleibt sie beim **getrennten** Kondensator. Hier bleibt $U$ fest, und $E = U/d$ mit doppeltem $d$ halbiert sich.
hinweise:
  - Angeschlossen heißt, die Quelle hält $U$ fest. Wie ändert sich $C$ beim doppelten Abstand?
  - 'Dann $Q = C\,U$ und $E = U/d$.'
loesung: |
  **Ansatz:** Angeschlossen, also bleibt $U = 50\,\text{V}$. Doppelter Abstand halbiert die Kapazität auf $200\,\text{pF}$.
  ---
  **a)** $Q = C'\,U = 200\cdot 10^{-12}\,\text{F}\cdot 50\,\text{V} = 1{,}0\cdot 10^{-8}\,\text{C} = 10\,\text{nC}$. Vorher waren es $20\,\text{nC}$. Die Hälfte der Ladung ist über die Quelle zurückgeflossen.
  ---
  **b)** $E = U/d$ mit gleichem $U$ und doppeltem $d$ halbiert sich.
```

```aufgabe
id: p12-dielektrikum-getrennt
titel: Dielektrikum bei getrennter Quelle
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Luftkondensator mit $150\,\text{pF}$ wird auf $200\,\text{V}$ geladen und von der Quelle getrennt. Dann schiebt man eine Kunststoffplatte mit $\varepsilon_r = 4$ hinein, die den Zwischenraum ganz ausfüllt.

  a) Welche Spannung liegt danach am Kondensator (in V)?

  b) Um welchen Faktor ändert sich die Feldstärke zwischen den Platten?
teile:
  - typ: zahl
    label: a) U in V
    loesung: "150e-12*200/(4*150e-12)"
    einheit: "V"
    anzeige: '50'
    fehler:
      - wert: "200"
        meldung: |
          Die Spannung bleibt nur fest, wenn die Quelle angeschlossen ist. Hier ist sie getrennt, fest bleibt die **Ladung**.
      - wert: "200*4"
        meldung: |
          Das Dielektrikum vergrößert die Kapazität. Bei fester Ladung wird die Spannung $U = Q/C$ dadurch **kleiner**.
  - typ: zahl
    label: b) Faktor für E
    loesung: "1/4"
    anzeige: '0{,}25'
    fehler:
      - wert: "1"
        meldung: |
          Beim Auseinanderziehen bleibt $E$ gleich. Hier bleibt aber $d$ gleich, und $U$ sinkt. Also sinkt auch $E = U/d$.
hinweise:
  - Getrennt heißt, $Q$ bleibt fest. Berechne zuerst $Q$ vorher.
  - 'Dann die neue Kapazität $4\cdot 150\,\text{pF}$ und $U = Q/C$.'
gefuehrt:
  - text: Wie groß ist die Ladung vor dem Einschieben (in nC)?
    teil:
      typ: zahl
      loesung: "150e-12*200*1e9"
      einheit: "nC"
    erklaerung: '$Q = C\,U = 150\cdot 10^{-12}\,\text{F}\cdot 200\,\text{V} = 3{,}0\cdot 10^{-8}\,\text{C} = 30\,\text{nC}$.'
  - text: Welche Größe bleibt beim Einschieben konstant?
    erklaerung: Die Quelle ist getrennt. Die Ladung kann nirgends hin, also bleibt $Q = 30\,\text{nC}$.
  - text: Wie groß ist die neue Kapazität (in pF)?
    teil:
      typ: zahl
      loesung: "4*150"
      einheit: "pF"
      fehler:
        - wert: "150/4"
          meldung: Ein Dielektrikum erhöht die Kapazität um den Faktor $\varepsilon_r$.
    erklaerung: '$C = \varepsilon_r\,C_0 = 4\cdot 150\,\text{pF} = 600\,\text{pF}$.'
  - text: Wie groß ist jetzt die Spannung (in V)?
    teil:
      typ: zahl
      loesung: "30e-9/600e-12"
      einheit: "V"
    erklaerung: '$U = Q/C = 3{,}0\cdot 10^{-8}\,\text{C}/6{,}0\cdot 10^{-10}\,\text{F} = 50\,\text{V}$.'
loesung: |
  **Ansatz:** Getrennt, also bleibt $Q$. Das Dielektrikum vervierfacht $C$.
  ---
  **Ladung:** $Q = 150\cdot 10^{-12}\,\text{F}\cdot 200\,\text{V} = 30\,\text{nC}$. **Neue Kapazität:** $C = 4\cdot 150\,\text{pF} = 600\,\text{pF}$.
  ---
  **a)** $U = Q/C = 3{,}0\cdot 10^{-8}\,\text{C}/6{,}0\cdot 10^{-10}\,\text{F} = 50\,\text{V}$, ein Viertel der ursprünglichen Spannung.
  ---
  **b)** $E = U/d$ mit gleichem $d$ sinkt ebenfalls auf ein Viertel, Faktor $0{,}25$. Die Polarisationsladungen des Kunststoffs schwächen das Feld der Plattenladungen.
```

```reflexion
frage: Warum erhöht ein Dielektrikum die Kapazität? Erkläre mit den Begriffen Polarisation, Feldstärke und Spannung, ohne eine Formel zu benutzen.
antwort: |
  Das Feld der Plattenladungen polarisiert den Isolator. An seiner Oberfläche zur positiven Platte entsteht eine negative Schicht, an der anderen Seite eine positive. Diese Schichten erzeugen ein Gegenfeld und schwächen das Feld zwischen den Platten. Bei gleicher Ladung auf den Platten ist deshalb die Spannung kleiner. Anders gesagt: Für dieselbe Spannung kann mehr Ladung auf die Platten. Mehr Ladung pro Volt heißt größere Kapazität.
```

```aufgabe
id: p12-dram-zelle
titel: Wie viele Elektronen speichern ein Bit?
niveau: 2
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine Speicherzelle eines DRAM-Chips ist ein Kondensator mit etwa $25\,\text{fF}$ (Femtofarad, $1\,\text{fF} = 10^{-15}\,\text{F}$). Für eine gespeicherte 1 wird er auf $1{,}0\,\text{V}$ geladen.

  a) Welche Ladung speichert er (in fC)?

  b) Wie viele Elektronen sind das (in Tausend)?
teile:
  - typ: zahl
    label: a) Q in fC
    loesung: "25e-15*1.0*1e15"
    einheit: "fC"
    anzeige: '25'
    fehler:
      - wert: "0.025"
        meldung: |
          Das ist die Ladung in Pikocoulomb. Gefragt ist Femtocoulomb: $1\,\text{pC} = 1000\,\text{fC}$.
  - typ: zahl
    label: b) Anzahl in Tausend
    loesung: "25e-15/1.602e-19/1000"
    anzeige: '156'
    fehler:
      - wert: "25e-15*1.602e-19/1000"
        meldung: |
          Gesucht ist, wie oft $e$ in die Ladung hineinpasst. Das ist eine Division, $N = Q/e$.
hinweise:
  - '$Q = C\cdot U$. Femto heißt $10^{-15}$.'
  - 'Dann $N = Q/e$ mit $e = 1{,}602\cdot 10^{-19}\,\text{C}$.'
loesung: |
  **Ansatz:** Ladung aus Kapazität und Spannung, dann in Elementarladungen umrechnen.
  ---
  **a)** $Q = C\,U = 25\cdot 10^{-15}\,\text{F}\cdot 1{,}0\,\text{V} = 2{,}5\cdot 10^{-14}\,\text{C} = 25\,\text{fC}$.
  ---
  **b)** $N = \dfrac{2{,}5\cdot 10^{-14}\,\text{C}}{1{,}602\cdot 10^{-19}\,\text{C}} = 1{,}56\cdot 10^{5}$, also rund $156$ Tausend Elektronen.
  ---
  **Einordnen:** Ein Bit sind also nur etwa hunderttausend Elektronen. Verliert die Zelle durch Leckströme einen Teil davon, ist die Information bald nicht mehr lesbar. Darum frischt der Speicher sie ständig auf.
```

```aufgabe
id: p12-kondensator-entwurf
titel: Einen Folienkondensator entwerfen
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Du sollst einen Kondensator mit $1{,}0\,\text{nF}$ bauen. Du hast eine Kunststofffolie mit $\varepsilon_r = 3{,}0$ und der Dicke $0{,}10\,\text{mm}$. Sie hält Feldstärken bis $20\,\text{kV}$ pro Millimeter aus. Auf beide Seiten kommt Alufolie.

  a) Welche Fläche brauchen die Alufolien (in cm²)?

  b) Welche Spannung darf man höchstens anlegen (in V)?

  c) Warum rollt man solche Kondensatoren in der Praxis auf, statt eine große flache Platte zu bauen?
teile:
  - typ: zahl
    label: a) A in cm²
    loesung: "1.0e-9*0.10e-3/(8.854e-12*3.0)*1e4"
    einheit: "cm²"
    anzeige: '37{,}6'
    fehler:
      - wert: "1.0e-9*0.10e-3/(8.854e-12)*1e4"
        meldung: |
          Die Folie hat $\varepsilon_r = 3{,}0$. Sie verdreifacht die Kapazität, deshalb genügt ein Drittel der Fläche.
  - typ: zahl
    label: b) U_max in V
    loesung: "20e3*0.10"
    einheit: "V"
    anzeige: '2000'
  - typ: text
    label: c) Aufrollen
    muster: |
      Für große Kapazitäten braucht man große Flächen bei kleinem Abstand. Eine flache Platte wäre unhandlich groß. Rollt man die Schichten aus Folie und Alufolie eng auf, passt dieselbe Fläche in ein kleines Bauteil. Die Kapazität hängt nur von Fläche, Abstand und Material ab, nicht davon, ob die Fläche eben oder gewickelt ist.
hinweise:
  - 'Stelle $C = \varepsilon_0\,\varepsilon_r\,A/d$ nach $A$ um. Rechne $1\,\text{m}^2 = 10^{4}\,\text{cm}^2$.'
  - '$20\,\text{kV}$ pro Millimeter bei $0{,}10\,\text{mm}$ Dicke: $U = E\cdot d$.'
loesung: |
  **Modell:** Zwei Alufolien mit einer dünnen Kunststofffolie dazwischen bilden einen Plattenkondensator mit Dielektrikum.
  ---
  **a)** $A = \dfrac{C\,d}{\varepsilon_0\,\varepsilon_r} = \dfrac{1{,}0\cdot 10^{-9}\,\text{F}\cdot 1{,}0\cdot 10^{-4}\,\text{m}}{8{,}854\cdot 10^{-12}\,\tfrac{\text{F}}{\text{m}}\cdot 3{,}0} = 3{,}76\cdot 10^{-3}\,\text{m}^2 = 37{,}6\,\text{cm}^2$.
  ---
  **b)** $U_{\max} = E_{\max}\cdot d = 20\,\tfrac{\text{kV}}{\text{mm}}\cdot 0{,}10\,\text{mm} = 2{,}0\,\text{kV} = 2000\,\text{V}$.
  ---
  **c)** Eine flache Fläche von rund $6\,\text{cm}\times 6\,\text{cm}$ geht hier noch. Für Mikrofarad bräuchte man aber das Tausendfache. Gewickelt passt die große Fläche in ein kleines Gehäuse, die Kapazität bleibt gleich.
```

## Energie im Kondensator, Schaltungen, Laden und Entladen

```aufgabe
id: p12-10-check
art: check
titel: "Vorwissen: Fläche unter einer Geraden"
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Gerade läuft durch den Ursprung und den Punkt $(8\,|\,20)$. Wie groß ist die Fläche zwischen der Geraden und der waagrechten Achse von $0$ bis $8$?

  Herkunft: Mathematik, [Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz)
teile:
  - typ: zahl
    loesung: "0.5*8*20"
    anzeige: '80'
    fehler:
      - wert: "8*20"
        meldung: |
          Das ist die Fläche des ganzen Rechtecks. Unter der Geraden liegt nur ein Dreieck, also die Hälfte.
hinweise:
  - Die Fläche ist ein rechtwinkliges Dreieck mit den Katheten $8$ und $20$.
loesung: |
  Unter der Ursprungsgeraden liegt ein rechtwinkliges Dreieck mit Grundseite $8$ und Höhe $20$.
  ---
  Fläche $= \tfrac12\cdot 8\cdot 20 = 80$. Genau so eine Dreiecksfläche ist gleich die Energie eines Kondensators.
```

### Wie viel Energie steckt in einem geladenen Kondensator?

Beim Laden muss jede weitere Portion Ladung von einer Platte zur anderen gebracht werden, und zwar gegen
die Spannung, die schon da ist. Am Anfang ist der Kondensator leer, die Spannung ist null. Die erste
Portion kostet fast nichts. Am Ende liegt die volle Spannung $U$ an, die letzte Portion ist am teuersten.
Im Mittel muss jede Ladung die halbe Spannung $U/2$ überwinden. Die gesamte Arbeit ist deshalb
$W = Q\cdot\tfrac{U}{2}$.

Genauer zeigt es das $U$-$Q$-Diagramm. Die Spannung wächst linear mit der Ladung, $U = Q/C$. Die Arbeit
für eine kleine Ladungsportion $\Delta Q$ ist $U\cdot\Delta Q$, ein schmaler Streifen unter der Geraden. Alle
Streifen zusammen ergeben die **Dreiecksfläche** unter der Geraden.

```plot
x: [0, 18]
y: [0, 18]
achsen: { x: "Q in mC", y: "U in V" }
graphen:
  - { f: "x", von: 0, bis: 16, label: "U = Q/C", farbe: 0 }
flaechen:
  - { f: "x", von: 0, bis: 16, farbe: 0 }
punkte:
  - { x: 16, y: 16, label: "16 V" }
beschriftung: "Ladekurve eines Kondensators mit C = 1000 µF. Die Spannung wächst linear mit der Ladung. Die gefärbte Dreiecksfläche ist die gespeicherte Energie: W = ½ · 16 mC · 16 V = 128 mJ."
```

:::satz[Energie des geladenen Kondensators]
$$W = \tfrac12\,Q\,U = \tfrac12\,C\,U^2 = \frac{Q^2}{2C}$$
Dabei ist $W$ die gespeicherte Energie in Joule, $Q$ die Ladung, $U$ die Spannung und $C$ die Kapazität.
Die drei Formen gehen mit $Q = C\,U$ ineinander über.
:::

:::beispiel[Energie eines Elektrolytkondensators]
Ein Kondensator mit $C = 1000\,\mu\text{F}$ wird auf $16\,\text{V}$ geladen.

**Schritt 1, Ladung:** $Q = C\,U = 1{,}0\cdot 10^{-3}\,\text{F}\cdot 16\,\text{V} = 1{,}6\cdot 10^{-2}\,\text{C} = 16\,\text{mC}$.

**Schritt 2, Energie:** $W = \tfrac12\,C\,U^2 = \tfrac12\cdot 1{,}0\cdot 10^{-3}\,\text{F}\cdot(16\,\text{V})^2 = 0{,}128\,\text{J}$.
Die Einheit stimmt, denn $\text{F}\cdot\text{V}^2 = \tfrac{\text{C}}{\text{V}}\cdot\text{V}^2 = \text{C}\cdot\text{V} = \text{J}$.

**Schritt 3, einordnen:** $0{,}13\,\text{J}$ reichen, um eine Tafel Schokolade ($100\,\text{g}$) um $13\,\text{cm}$
anzuheben. Kondensatoren speichern wenig Energie, können sie aber sehr schnell abgeben.
:::

:::achtung[Fehler: Den Faktor ½ vergessen]
**Falsche Rechnung:** „Der Kondensator mit $16\,\text{mC}$ bei $16\,\text{V}$ speichert
$W = Q\cdot U = 16\cdot 10^{-3}\,\text{C}\cdot 16\,\text{V} = 0{,}256\,\text{J}$.“

**Richtig:** $Q\cdot U$ wäre die Energie, wenn jede Ladung die **volle** Spannung durchlaufen hätte. Beim
Laden wächst die Spannung aber erst von null auf $U$. Im Mittel ist sie $U/2$. Also gilt
$W = \tfrac12\,Q\,U = 0{,}128\,\text{J}$.
:::

```aufgabe
id: p12-kondensator-ladung
titel: Elko an 12 V
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Elektrolytkondensator mit $C = 470\,\mu\text{F}$ wird an $12\,\text{V}$ geladen. Berechne die Ladung (in mC) und die gespeicherte Energie (in mJ).
teile:
  - typ: zahl
    label: Q in mC
    loesung: "470e-6*12*1000"
    einheit: "mC"
    anzeige: '5{,}64'
    fehler:
      - wert: "470e-6/12*1000"
        meldung: |
          Aus $C = Q/U$ folgt $Q = C\cdot U$. Multipliziere.
  - typ: zahl
    label: W in mJ
    loesung: "0.5*470e-6*12^2*1000"
    einheit: "mJ"
    anzeige: '33{,}8'
    fehler:
      - wert: "470e-6*12^2*1000"
        meldung: |
          Der Faktor $\tfrac12$ fehlt. Beim Laden steigt die Spannung erst von null auf $U$.
      - wert: "0.5*470e-6*12*1000"
        meldung: |
          Die Spannung steht in $W = \tfrac12 CU^2$ im **Quadrat**.
hinweise:
  - '$Q = C\,U$ und $W = \tfrac12\,C\,U^2$, Mikro heißt $10^{-6}$.'
loesung: |
  **Ladung:** $Q = C\,U = 470\cdot 10^{-6}\,\text{F}\cdot 12\,\text{V} = 5{,}64\cdot 10^{-3}\,\text{C} = 5{,}64\,\text{mC}$.
  ---
  **Energie:** $W = \tfrac12\,C\,U^2 = \tfrac12\cdot 470\cdot 10^{-6}\,\text{F}\cdot 144\,\text{V}^2 = 0{,}0338\,\text{J} = 33{,}8\,\text{mJ}$. Kontrolle: $\tfrac12\,Q\,U = \tfrac12\cdot 5{,}64\,\text{mC}\cdot 12\,\text{V} = 33{,}8\,\text{mJ}$.
```

```aufgabe
id: p12-energie-proportional
titel: Doppelte Spannung, wie viel Energie?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Kondensator wird statt auf $U$ auf die doppelte Spannung $2U$ geladen. Auf das Wievielfache steigt die gespeicherte Energie?
teile:
  - typ: auswahl
    optionen:
      - "auf das Vierfache"
      - "auf das Doppelte"
      - "sie bleibt gleich, die Kapazität ändert sich ja nicht"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Spannung steht im **Quadrat**: $W = \tfrac12 C U^2$. Doppelte Spannung heißt $2^2 = 4$.
      - wert: 2
        meldung: |
          Die Kapazität bleibt gleich, richtig. Bei doppelter Spannung sitzt aber doppelt so viel Ladung auf den Platten, und jede davon hat die doppelte Spannung durchlaufen.
hinweise:
  - 'Setze in $W = \tfrac12 C U^2$ für $U$ den Wert $2U$ ein.'
loesung: |
  **Ansatz:** Proportionalitätsschluss mit $W = \tfrac12\,C\,U^2$.
  ---
  Mit $2U$ wird daraus $\tfrac12\,C\,(2U)^2 = 4\cdot\tfrac12\,C\,U^2$. Die Energie vervierfacht sich. Anschaulich: doppelte Ladung mal doppelte mittlere Spannung.
```

### Die Energie steckt im Feld

Wo genau ist die Energie gespeichert, auf den Platten oder dazwischen? Man kann die Formel umschreiben.
Mit $C = \varepsilon_0 A/d$ und $U = E\,d$ wird
$$W = \tfrac12\,\varepsilon_0\,\frac{A}{d}\,E^2 d^2 = \tfrac12\,\varepsilon_0\,E^2\cdot(A\cdot d).$$
Das Produkt $A\cdot d$ ist das **Volumen** zwischen den Platten. Die Energie pro Volumen, die
**Energiedichte**, ist also
$$w = \tfrac12\,\varepsilon_0\,E^2.$$
Sie hängt nur von der Feldstärke ab, nicht von den Platten. Das legt nahe: Das **Feld selbst** trägt die
Energie. Bei Licht und Funkwellen ist das unverzichtbar. Dort transportieren Felder Energie durch den
leeren Raum, ganz ohne Platten.

### Wohin geht die Energie beim Laden?

Lädt man einen Kondensator über einen Widerstand an einer Batterie auf, fließt die Ladung $Q$ durch die
Batterie. Jedes Coulomb bekommt dort die volle Spannung $U$. Die Batterie gibt also die Energie $Q\,U$ ab.
Im Kondensator kommt aber nur $\tfrac12\,Q\,U$ an. Die andere Hälfte wird im Widerstand und in den Drähten
zu Wärme. Das gilt erstaunlicherweise für **jeden** Widerstand. Ein kleiner Widerstand lässt einen großen
Strom fließen, dafür kürzer. Am Ende geht immer genau die Hälfte verloren.

```aufgabe
id: p12-energiebilanz-laden
titel: Die Energiebilanz beim Laden
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein leerer Kondensator mit $100\,\mu\text{F}$ wird über einen Widerstand an einer $12$-V-Batterie vollständig geladen.

  a) Wie viel Energie speichert der Kondensator am Ende (in mJ)?

  b) Wie viel Energie hat die Batterie abgegeben (in mJ)?

  c) Wie viel Energie wurde im Widerstand zu Wärme (in mJ)?
teile:
  - typ: zahl
    label: a) W_C in mJ
    loesung: "0.5*100e-6*12^2*1000"
    einheit: "mJ"
    anzeige: '7{,}2'
    fehler:
      - wert: "100e-6*12^2*1000"
        meldung: |
          Das ist die Energie, die die **Batterie** abgibt. Im Kondensator ist es nur $\tfrac12\,C\,U^2$.
  - typ: zahl
    label: b) W_Batterie in mJ
    loesung: "100e-6*12*12*1000"
    einheit: "mJ"
    anzeige: '14{,}4'
    fehler:
      - wert: "0.5*100e-6*12^2*1000"
        meldung: |
          Durch die Batterie fließt die ganze Ladung $Q = CU$, und jedes Coulomb erhält dort die volle Spannung $U$. Die Batterie gibt also $Q\cdot U$ ab, nicht die Hälfte.
  - typ: zahl
    label: c) Wärme in mJ
    loesung: "100e-6*12*12*1000 - 0.5*100e-6*12^2*1000"
    einheit: "mJ"
    anzeige: '7{,}2'
    fehler:
      - wert: "0"
        meldung: |
          Der Energiesatz verlangt, dass die Differenz zwischen abgegebener und gespeicherter Energie irgendwo bleibt. Sie wird im Widerstand zu Wärme.
hinweise:
  - 'Die geflossene Ladung ist $Q = C\,U$. Die Batterie gibt $Q\cdot U$ ab, der Kondensator speichert $\tfrac12\,Q\,U$.'
  - Die Differenz ist nach dem Energiesatz die Wärme im Widerstand.
loesung: |
  **Ansatz:** Energiebilanz. Die Batterie gibt $Q\,U$ ab, der Kondensator speichert $\tfrac12\,Q\,U$, der Rest wird Wärme.
  ---
  **Ladung:** $Q = C\,U = 100\cdot 10^{-6}\,\text{F}\cdot 12\,\text{V} = 1{,}2\cdot 10^{-3}\,\text{C}$.
  ---
  **a)** $W_C = \tfrac12\,Q\,U = \tfrac12\cdot 1{,}2\cdot 10^{-3}\,\text{C}\cdot 12\,\text{V} = 7{,}2\cdot 10^{-3}\,\text{J} = 7{,}2\,\text{mJ}$. **b)** $W_B = Q\,U = 14{,}4\,\text{mJ}$.
  ---
  **c)** Wärme: $14{,}4\,\text{mJ} - 7{,}2\,\text{mJ} = 7{,}2\,\text{mJ}$, genau die Hälfte. Das hängt nicht von der Größe des Widerstands ab.
```

```aufgabe
id: p12-blitzgeraet
titel: Kondensator im Blitzgerät
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Blitzgerät enthält einen Kondensator mit $330\,\mu\text{F}$, der auf $300\,\text{V}$ geladen wird. Beim Auslösen entlädt er sich in $1{,}0\,\text{ms}$.

  a) Welche Energie ist gespeichert (in J)?

  b) Welche mittlere Leistung liefert er während des Blitzes (in kW)?
teile:
  - typ: zahl
    label: a) W in J
    loesung: "0.5*330e-6*300^2"
    einheit: "J"
    anzeige: '14{,}9'
    fehler:
      - wert: "330e-6*300^2"
        meldung: |
          Der Faktor $\tfrac12$ fehlt: $W = \tfrac12\,C\,U^2$.
  - typ: zahl
    label: b) P in kW
    loesung: "0.5*330e-6*300^2/1.0e-3/1000"
    einheit: "kW"
    anzeige: '14{,}9'
    fehler:
      - wert: "0.5*330e-6*300^2*1.0e-3/1000"
        meldung: |
          Leistung ist Energie **pro** Zeit. Teile durch die Zeit, statt zu multiplizieren.
hinweise:
  - '$W = \tfrac12\,C\,U^2$.'
  - 'Leistung ist Energie pro Zeit, $P = W/t$, mit $t$ in Sekunden.'
loesung: |
  **a)** $W = \tfrac12\,C\,U^2 = \tfrac12\cdot 330\cdot 10^{-6}\,\text{F}\cdot(300\,\text{V})^2 = 14{,}9\,\text{J}$.
  ---
  **b)** $P = \dfrac{W}{t} = \dfrac{14{,}9\,\text{J}}{1{,}0\cdot 10^{-3}\,\text{s}} = 1{,}49\cdot 10^{4}\,\text{W} \approx 15\,\text{kW}$.
  ---
  **Deutung:** Die kleinen Batterien laden den Kondensator in einigen Sekunden. Er gibt die Energie dann in einer Millisekunde ab, mit tausendfacher Leistung. Genau dafür sind Kondensatoren gut.
```

### Kondensatoren in Parallel- und Reihenschaltung

**Parallelschaltung:** Die Kondensatoren hängen nebeneinander an denselben zwei Punkten. Alle haben
dieselbe Spannung $U$. Die Ladungen addieren sich: $Q = Q_1 + Q_2 = C_1 U + C_2 U$. Teilt man durch $U$,
erhält man
$$C_{\text{ges}} = C_1 + C_2 + \ldots$$
Das ist, als würde man die Plattenflächen zusammenlegen.

**Reihenschaltung:** Die Kondensatoren hängen hintereinander. Durch Influenz trägt jeder **dieselbe**
Ladung $Q$. Die Spannungen addieren sich: $U = U_1 + U_2 = Q/C_1 + Q/C_2$. Teilt man durch $Q$, erhält man
$$\frac{1}{C_{\text{ges}}} = \frac{1}{C_1} + \frac{1}{C_2} + \ldots$$
Das ist, als würde man den Plattenabstand vergrößern. Die Gesamtkapazität ist deshalb **kleiner** als die
kleinste Einzelkapazität.

```plot
x: [-1, 11]
y: [-3.5, 3.5]
gleich: true
strecken:
  - { von: [0, 2], nach: [2.8, 2], farbe: 0 }
  - { von: [2.8, 1.4], nach: [2.8, 2.6], farbe: 1 }
  - { von: [3.2, 1.4], nach: [3.2, 2.6], farbe: 1 }
  - { von: [3.2, 2], nach: [5.8, 2], farbe: 0 }
  - { von: [5.8, 1.4], nach: [5.8, 2.6], farbe: 1 }
  - { von: [6.2, 1.4], nach: [6.2, 2.6], farbe: 1 }
  - { von: [6.2, 2], nach: [9, 2], farbe: 0 }
  - { von: [0, -2], nach: [3, -2], farbe: 0 }
  - { von: [3, -0.8], nach: [3, -3.2], farbe: 0 }
  - { von: [3, -0.8], nach: [4.3, -0.8], farbe: 0 }
  - { von: [3, -3.2], nach: [4.3, -3.2], farbe: 0 }
  - { von: [4.3, -0.2], nach: [4.3, -1.4], farbe: 1 }
  - { von: [4.7, -0.2], nach: [4.7, -1.4], farbe: 1 }
  - { von: [4.3, -2.6], nach: [4.3, -3.8], farbe: 1 }
  - { von: [4.7, -2.6], nach: [4.7, -3.8], farbe: 1 }
  - { von: [4.7, -0.8], nach: [6, -0.8], farbe: 0 }
  - { von: [4.7, -3.2], nach: [6, -3.2], farbe: 0 }
  - { von: [6, -0.8], nach: [6, -3.2], farbe: 0 }
  - { von: [6, -2], nach: [9, -2], farbe: 0 }
punkte:
  - { x: 3, y: 2.9, label: "C₁" }
  - { x: 6, y: 2.9, label: "C₂" }
  - { x: 7.5, y: 2.5, label: "Reihe" }
  - { x: 5.1, y: -0.4, label: "C₁" }
  - { x: 5.1, y: -2.8, label: "C₂" }
  - { x: 7.5, y: -1.5, label: "parallel" }
beschriftung: "Schaltskizzen. Oben eine Reihenschaltung: Die Kondensatoren C₁ und C₂ liegen hintereinander in einer Leitung, jeder trägt dieselbe Ladung, die Spannungen addieren sich. Unten eine Parallelschaltung: Beide liegen nebeneinander zwischen denselben zwei Punkten, beide haben dieselbe Spannung, die Ladungen addieren sich."
```

:::beispiel[Zwei Kondensatoren in Reihe an 24 V]
$C_1 = 4{,}0\,\mu\text{F}$ und $C_2 = 12\,\mu\text{F}$ liegen in Reihe an $24\,\text{V}$.

**Schritt 1, Gesamtkapazität:** $\dfrac{1}{C} = \dfrac{1}{4{,}0\,\mu\text{F}} + \dfrac{1}{12\,\mu\text{F}} = \dfrac{3 + 1}{12\,\mu\text{F}} = \dfrac{1}{3{,}0\,\mu\text{F}}$,
also $C = 3{,}0\,\mu\text{F}$. Zum Vergleich: Parallel wären es $16\,\mu\text{F}$.

**Schritt 2, Ladung:** $Q = C\,U = 3{,}0\,\mu\text{F}\cdot 24\,\text{V} = 72\,\mu\text{C}$. Diese Ladung sitzt auf jedem der beiden.

**Schritt 3, Teilspannungen:** $U_1 = Q/C_1 = 72\,\mu\text{C}/4{,}0\,\mu\text{F} = 18\,\text{V}$ und
$U_2 = 72\,\mu\text{C}/12\,\mu\text{F} = 6{,}0\,\text{V}$. Probe: $18\,\text{V} + 6{,}0\,\text{V} = 24\,\text{V}$.
Der **kleinere** Kondensator bekommt die **größere** Spannung.
:::

:::achtung[Fehler: Die Regeln für Widerstände übernommen]
**Falsche Rechnung:** „$4{,}0\,\mu\text{F}$ und $12\,\mu\text{F}$ in Reihe ergeben $16\,\mu\text{F}$, wie bei Widerständen.“

**Richtig:** Bei Kondensatoren ist es genau umgekehrt wie bei Widerständen aus
[13 Reihenschaltung und Parallelschaltung](/lernen/physik1/gleichstrom/reihenschaltung-und-parallelschaltung). In Reihe addiert man die **Kehrwerte**:
$1/C = 1/4{,}0 + 1/12$, also $C = 3{,}0\,\mu\text{F}$. Merkhilfe: Reihe heißt größerer Plattenabstand, also
weniger Kapazität. Parallel heißt größere Fläche, also mehr Kapazität.
:::

```aufgabe
id: p12-reihe-parallel
titel: Kondensatoren schalten
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Zwei Kondensatoren $C_1 = 2{,}0\,\mu\text{F}$ und $C_2 = 3{,}0\,\mu\text{F}$ werden einmal parallel und einmal in Reihe geschaltet. Berechne jeweils die Gesamtkapazität (in µF).
teile:
  - typ: zahl
    label: parallel in µF
    loesung: "2+3"
    einheit: "µF"
    anzeige: '5{,}0'
    fehler:
      - wert: "1/(1/2+1/3)"
        meldung: |
          Das ist die Formel für die Reihenschaltung. Parallel addieren sich die Kapazitäten direkt.
  - typ: zahl
    label: in Reihe in µF
    loesung: "1/(1/2+1/3)"
    einheit: "µF"
    anzeige: '1{,}2'
    fehler:
      - wert: "1/2+1/3"
        meldung: |
          Das ist $1/C$. Am Ende musst du noch den Kehrwert bilden.
      - wert: "5"
        meldung: |
          In Reihe addieren sich die **Kehrwerte**, nicht die Kapazitäten. Die Gesamtkapazität ist kleiner als jede einzelne.
hinweise:
  - Parallel addieren sich die Kapazitäten, in Reihe die Kehrwerte.
loesung: |
  **Parallel:** $C = C_1 + C_2 = 2{,}0\,\mu\text{F} + 3{,}0\,\mu\text{F} = 5{,}0\,\mu\text{F}$.
  ---
  **In Reihe:** $\dfrac1C = \dfrac{1}{2{,}0\,\mu\text{F}} + \dfrac{1}{3{,}0\,\mu\text{F}} = \dfrac{5}{6\,\mu\text{F}}$, also $C = 1{,}2\,\mu\text{F}$. Das ist kleiner als jeder Einzelwert, wie es sein muss.
```

```aufgabe
id: p12-reihe-spannungen
titel: Wer bekommt die größere Spannung?
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  $C_1 = 1{,}0\,\mu\text{F}$ und $C_2 = 4{,}0\,\mu\text{F}$ liegen in Reihe an $10\,\text{V}$.

  a) Wie groß ist die Ladung auf jedem Kondensator (in µC)?

  b) Welche Spannung liegt an $C_1$ (in V)?
teile:
  - typ: zahl
    label: a) Q in µC
    loesung: "1/(1/1.0+1/4.0)*10"
    einheit: "µC"
    anzeige: '8{,}0'
    fehler:
      - wert: "(1.0+4.0)*10"
        meldung: |
          Du hast die Kapazitäten wie bei einer Parallelschaltung addiert. In Reihe gilt $1/C = 1/C_1 + 1/C_2$.
  - typ: zahl
    label: b) U₁ in V
    loesung: "1/(1/1.0+1/4.0)*10/1.0"
    einheit: "V"
    anzeige: '8{,}0'
    fehler:
      - wert: "1/(1/1.0+1/4.0)*10/4.0"
        meldung: |
          Das ist die Spannung an $C_2$. Am **kleineren** Kondensator liegt die größere Spannung, denn $U = Q/C$ bei gleichem $Q$.
      - wert: "5"
        meldung: |
          Die Spannung teilt sich nur bei gleichen Kapazitäten halb und halb. Hier gilt $U_1 = Q/C_1$.
hinweise:
  - In Reihe tragen beide dieselbe Ladung. Berechne zuerst die Gesamtkapazität.
  - 'Dann $Q = C\,U$ und $U_1 = Q/C_1$.'
gefuehrt:
  - text: Berechne die Gesamtkapazität der Reihenschaltung (in µF).
    teil:
      typ: zahl
      loesung: "1/(1/1.0+1/4.0)"
      einheit: "µF"
      fehler:
        - wert: "5"
          meldung: In Reihe addieren sich die Kehrwerte.
    erklaerung: '$1/C = 1/1{,}0 + 1/4{,}0 = 1{,}25$ pro µF, also $C = 0{,}80\,\mu\text{F}$.'
  - text: Welche Ladung fließt aus der Quelle, und welche Ladung trägt jeder Kondensator (in µC)?
    teil:
      typ: zahl
      loesung: "0.8*10"
      einheit: "µC"
    erklaerung: '$Q = 0{,}80\,\mu\text{F}\cdot 10\,\text{V} = 8{,}0\,\mu\text{C}$. In Reihe trägt jeder Kondensator diese Ladung.'
  - text: Berechne die Spannung an $C_1$ (in V).
    teil:
      typ: zahl
      loesung: "8.0/1.0"
      einheit: "V"
    erklaerung: '$U_1 = Q/C_1 = 8{,}0\,\mu\text{C}/1{,}0\,\mu\text{F} = 8{,}0\,\text{V}$.'
  - text: Mache die Probe mit $U_2$.
    erklaerung: '$U_2 = 8{,}0\,\mu\text{C}/4{,}0\,\mu\text{F} = 2{,}0\,\text{V}$. Zusammen $10\,\text{V}$, die Probe stimmt.'
loesung: |
  **Ansatz:** In Reihe tragen beide Kondensatoren dieselbe Ladung. Die Spannungen addieren sich zur Quellenspannung.
  ---
  **Gesamtkapazität:** $\dfrac1C = \dfrac{1}{1{,}0\,\mu\text{F}} + \dfrac{1}{4{,}0\,\mu\text{F}} = \dfrac{1{,}25}{\mu\text{F}}$, also $C = 0{,}80\,\mu\text{F}$.
  ---
  **a)** $Q = C\,U = 0{,}80\,\mu\text{F}\cdot 10\,\text{V} = 8{,}0\,\mu\text{C}$ auf jedem Kondensator.
  ---
  **b)** $U_1 = Q/C_1 = 8{,}0\,\mu\text{C}/1{,}0\,\mu\text{F} = 8{,}0\,\text{V}$. Probe: $U_2 = 2{,}0\,\text{V}$, zusammen $10\,\text{V}$.
```

### Laden und Entladen über einen Widerstand

Verbindet man einen Kondensator über einen Widerstand $R$ mit einer Spannungsquelle, lädt er sich nicht
schlagartig auf. Am Anfang ist er leer. Die volle Quellenspannung liegt am Widerstand, es fließt ein großer
Strom. Je mehr Ladung auf den Platten sitzt, desto größer die Kondensatorspannung. Dann bleibt weniger
Spannung für den Widerstand, und der Strom wird kleiner. Das Laden wird immer langsamer. Die Spannung
nähert sich der Quellenspannung $U_0$ **exponentiell**:
$$U_C(t) = U_0\left(1 - e^{-t/\tau}\right) \quad\text{(Laden)}, \qquad U_C(t) = U_0\,e^{-t/\tau} \quad\text{(Entladen)}, \qquad \tau = R\cdot C.$$
Dabei ist $\tau$ (sprich „tau“) die **Zeitkonstante** in Sekunden, denn $\Omega\cdot\text{F} = \text{s}$. Nach der
Zeit $\tau$ ist der Kondensator beim Entladen auf $1/e \approx 37\,\%$ gefallen, beim Laden auf $63\,\%$
gestiegen. Nach etwa $5\,\tau$ gilt der Vorgang als abgeschlossen. Exponentialfunktionen wiederholst du in
[Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).

```plot
x: [0, 5]
y: [0, 13]
achsen: { x: "t in s", y: "U in V" }
graphen:
  - { f: "12*(1-exp(-x))", label: "Laden", farbe: 0 }
  - { f: "12*exp(-x)", label: "Entladen", farbe: 1 }
strecken:
  - { von: [1, 0], nach: [1, 7.59], gestrichelt: true }
  - { von: [0, 4.41], nach: [1, 4.41], gestrichelt: true }
beschriftung: "Laden und Entladen eines Kondensators mit τ = RC = 1 s an 12 V. Nach einer Zeitkonstante ist er beim Laden zu 63 % geladen (7,6 V), beim Entladen auf 37 % gefallen (4,4 V)."
```

:::beispiel[Ein Kondensator entlädt sich]
Ein Kondensator mit $220\,\mu\text{F}$ ist auf $9{,}0\,\text{V}$ geladen und entlädt sich über $10\,\text{k}\Omega$.

**Schritt 1, Zeitkonstante:** $\tau = R\,C = 10\cdot 10^{3}\,\Omega\cdot 220\cdot 10^{-6}\,\text{F} = 2{,}2\,\text{s}$.

**Schritt 2, Spannung nach 3,0 s:** $U = 9{,}0\,\text{V}\cdot e^{-3{,}0/2{,}2} = 9{,}0\,\text{V}\cdot 0{,}256 = 2{,}3\,\text{V}$.

**Schritt 3, Halbwertszeit:** Wann ist die Spannung auf die Hälfte gefallen? Aus $e^{-t/\tau} = \tfrac12$
folgt durch Logarithmieren $t = \tau\,\ln 2 = 2{,}2\,\text{s}\cdot 0{,}693 = 1{,}5\,\text{s}$. Logarithmen
wiederholst du in [Logarithmen](/lernen/mathe3/zahlen/logarithmen).
:::

```aufgabe
id: p12-rc-zeitkonstante
titel: Zeitkonstante eines RC-Glieds
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Kondensator mit $C = 100\,\mu\text{F}$ ist auf $12\,\text{V}$ geladen und wird über $R = 47\,\text{k}\Omega$ entladen.

  a) Berechne die Zeitkonstante $\tau$ (in s).

  b) Welche Spannung liegt nach $10\,\text{s}$ noch am Kondensator (in V)?
teile:
  - typ: zahl
    label: a) τ in s
    loesung: "47e3*100e-6"
    einheit: "s"
    anzeige: '4{,}7'
    fehler:
      - wert: "47*100"
        meldung: |
          Die Vorsilben fehlen. $47\,\text{k}\Omega = 47\cdot 10^{3}\,\Omega$ und $100\,\mu\text{F} = 100\cdot 10^{-6}\,\text{F}$.
  - typ: zahl
    label: b) U in V
    loesung: "12*exp(-10/(47e3*100e-6))"
    einheit: "V"
    anzeige: '1{,}43'
    fehler:
      - wert: "12*(1-exp(-10/(47e3*100e-6)))"
        meldung: |
          Das ist die Formel für das **Laden**. Beim Entladen fällt die Spannung: $U = U_0\,e^{-t/\tau}$.
hinweise:
  - '$\tau = R\,C$ mit den Grundeinheiten Ohm und Farad.'
  - 'Beim Entladen gilt $U(t) = U_0\,e^{-t/\tau}$.'
loesung: |
  **a)** $\tau = R\,C = 47\cdot 10^{3}\,\Omega\cdot 100\cdot 10^{-6}\,\text{F} = 4{,}7\,\text{s}$.
  ---
  **b)** $U = 12\,\text{V}\cdot e^{-10/4{,}7} = 12\,\text{V}\cdot 0{,}119 = 1{,}43\,\text{V}$.
  ---
  **Plausibel:** $10\,\text{s}$ sind gut zwei Zeitkonstanten. Nach zwei Zeitkonstanten bleiben $e^{-2} \approx 14\,\%$, also rund $1{,}6\,\text{V}$. Etwas mehr Zeit gibt etwas weniger Spannung.
```

```aufgabe
id: p12-rc-diagramm
titel: Die Kapazität aus einer Entladekurve
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Kondensator entlädt sich über einen Widerstand von $20\,\text{k}\Omega$. Das Diagramm zeigt die gemessene Spannung.

  a) Lies die Zeitkonstante ab (in s). Tipp: Nach einer Zeitkonstante sind noch $37\,\%$ der Anfangsspannung übrig.

  b) Berechne die Kapazität (in µF).
plot:
  x: [0, 8]
  y: [0, 11]
  achsen: { x: "t in s", y: "U in V" }
  graphen:
    - { f: "10*exp(-x/2)", von: 0, bis: 8, farbe: 0 }
  strecken:
    - { von: [0, 3.68], nach: [8, 3.68], gestrichelt: true }
  punkte:
    - { x: 0, y: 10, label: "10 V" }
teile:
  - typ: zahl
    label: a) τ in s
    loesung: "2"
    einheit: "s"
    toleranz: 0.15
    fehler:
      - wert: "1.4"
        meldung: |
          Das ist ungefähr die Halbwertszeit, bei $5\,\text{V}$. Die Zeitkonstante gehört zu $37\,\%$, also zu $3{,}7\,\text{V}$.
  - typ: zahl
    label: b) C in µF
    loesung: "2/20e3*1e6"
    einheit: "µF"
    anzeige: '100'
    fehler:
      - wert: "2*20e3*1e6"
        meldung: |
          Aus $\tau = R\,C$ folgt $C = \tau/R$. Teile durch den Widerstand.
hinweise:
  - '$37\,\%$ von $10\,\text{V}$ sind $3{,}7\,\text{V}$. Suche, wo die Kurve die gestrichelte Linie schneidet.'
  - '$\tau = R\,C$, also $C = \tau/R$.'
loesung: |
  **Ansatz:** Beim Entladen ist nach $t = \tau$ noch $U_0/e \approx 0{,}37\,U_0$ übrig. Das lesen wir ab.
  ---
  **a)** $0{,}37\cdot 10\,\text{V} = 3{,}7\,\text{V}$. Die Kurve erreicht diesen Wert bei $t = 2{,}0\,\text{s}$, also $\tau = 2{,}0\,\text{s}$.
  ---
  **b)** $C = \dfrac{\tau}{R} = \dfrac{2{,}0\,\text{s}}{20\cdot 10^{3}\,\Omega} = 1{,}0\cdot 10^{-4}\,\text{F} = 100\,\mu\text{F}$.
```

```reflexion
frage: Beim Laden über einen Widerstand geht immer die Hälfte der Energie als Wärme verloren. Warum hilft es nicht, einen sehr kleinen Widerstand zu nehmen?
antwort: |
  Ein kleiner Widerstand lässt einen großen Strom fließen. Die Wärmeleistung ist dann groß, dauert aber nur kurz, weil der Kondensator schnell voll ist. Ein großer Widerstand gibt kleine Leistung über lange Zeit. Rechnet man beides durch, kommt immer dieselbe Wärme heraus, nämlich $\tfrac12\,C\,U^2$. Der Grund ist die Energiebilanz: Die Quelle gibt $Q\,U$ ab, der Kondensator nimmt nur $\tfrac12\,Q\,U$ auf, weil seine Spannung erst von null wachsen muss.
```

```aufgabe
id: p12-energiedichte
titel: Energie im Feld
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Zwischen den Platten eines Luftkondensators (Fläche $0{,}10\,\text{m}^2$, Abstand $2{,}0\,\text{mm}$) herrscht die Feldstärke $1{,}0\cdot 10^{6}\,\text{V/m}$.

  a) Berechne die Energiedichte (in J/m³).

  b) Berechne die gesamte Feldenergie (in mJ).

  c) Kontrolliere b) mit $W = \tfrac12\,C\,U^2$.
teile:
  - typ: zahl
    label: a) w in J/m³
    loesung: "0.5*8.854e-12*(1.0e6)^2"
    einheit: "J/m³"
    anzeige: '4{,}43'
  - typ: zahl
    label: b) W in mJ
    loesung: "0.5*8.854e-12*(1.0e6)^2*0.10*2.0e-3*1000"
    einheit: "mJ"
    anzeige: '0{,}885'
  - typ: text
    label: c) Kontrolle
    muster: |
      $C = \varepsilon_0 A/d = 8{,}854\cdot 10^{-12}\cdot 0{,}10/2{,}0\cdot 10^{-3}\,\text{F} = 4{,}43\cdot 10^{-10}\,\text{F}$ und $U = E\,d = 2000\,\text{V}$. Damit $W = \tfrac12\cdot 4{,}43\cdot 10^{-10}\cdot 2000^2\,\text{J} = 8{,}85\cdot 10^{-4}\,\text{J} = 0{,}885\,\text{mJ}$. Beide Wege stimmen überein.
hinweise:
  - '$w = \tfrac12\,\varepsilon_0\,E^2$. Das Volumen zwischen den Platten ist $A\cdot d$.'
  - 'Für die Kontrolle: $C = \varepsilon_0 A/d$ und $U = E\cdot d$.'
loesung: |
  **a)** $w = \tfrac12\,\varepsilon_0\,E^2 = \tfrac12\cdot 8{,}854\cdot 10^{-12}\,\tfrac{\text{C}^2}{\text{N}\,\text{m}^2}\cdot(10^{6}\,\tfrac{\text{N}}{\text{C}})^2 = 4{,}43\,\tfrac{\text{N}}{\text{m}^2} = 4{,}43\,\tfrac{\text{J}}{\text{m}^3}$.
  ---
  **b)** Volumen $V = 0{,}10\,\text{m}^2\cdot 2{,}0\cdot 10^{-3}\,\text{m} = 2{,}0\cdot 10^{-4}\,\text{m}^3$. $W = w\,V = 8{,}85\cdot 10^{-4}\,\text{J} = 0{,}885\,\text{mJ}$.
  ---
  **c)** $C = 4{,}43\cdot 10^{-10}\,\text{F}$, $U = E\,d = 2000\,\text{V}$, $\tfrac12\,C\,U^2 = 8{,}85\cdot 10^{-4}\,\text{J}$. Beide Rechenwege geben dasselbe. Das stützt die Deutung, dass die Energie im Feld sitzt.
```

```aufgabe
id: p12-dielektrikum-angeschlossen
titel: Dielektrikum bei angeschlossener Quelle
niveau: 3
lernziel: 7
kompetenz: begruenden
angabe: |
  Ein Luftkondensator ($C_0 = 200\,\text{pF}$) liegt dauerhaft an $100\,\text{V}$. Man schiebt eine Kunststoffplatte mit $\varepsilon_r = 3$ hinein, die den Zwischenraum ganz ausfüllt.

  a) Berechne die Ladung vorher und nachher (in nC).

  b) Um wie viel nimmt die gespeicherte Energie zu (in µJ)?

  c) Die Quelle liefert dabei $4{,}0\,\mu\text{J}$. Wo bleibt der Rest?
teile:
  - typ: zahl
    label: a) Q vorher in nC
    loesung: "200e-12*100*1e9"
    einheit: "nC"
    anzeige: '20'
  - typ: zahl
    label: a) Q nachher in nC
    loesung: "3*200e-12*100*1e9"
    einheit: "nC"
    anzeige: '60'
  - typ: zahl
    label: b) Energiezunahme in µJ
    loesung: "0.5*(3-1)*200e-12*100^2*1e6"
    einheit: "µJ"
    anzeige: '2{,}0'
  - typ: text
    label: c) Energiebilanz
    muster: |
      Die Quelle schiebt $40\,\text{nC}$ zusätzliche Ladung bei $100\,\text{V}$ nach, das sind $4{,}0\,\mu\text{J}$. Das Feld speichert davon nur $2{,}0\,\mu\text{J}$. Die anderen $2{,}0\,\mu\text{J}$ verrichtet das Feld als mechanische Arbeit: Die polarisierte Platte wird in den Kondensator **hineingezogen**. Hält man die Platte fest, steckt diese Energie in der Arbeit, die man beim Abbremsen aufnimmt, sonst in der Bewegung der Platte.
hinweise:
  - Die Quelle bleibt angeschlossen, also bleibt $U$ konstant.
  - 'Energie vorher und nachher mit $W = \tfrac12\,C\,U^2$. Die Quelle liefert $\Delta Q\cdot U$.'
loesung: |
  **Ansatz:** Angeschlossen, also $U = 100\,\text{V}$ fest. Das Dielektrikum verdreifacht $C$.
  ---
  **a)** Vorher $Q_0 = C_0 U = 200\cdot 10^{-12}\,\text{F}\cdot 100\,\text{V} = 20\,\text{nC}$. Nachher $C = 600\,\text{pF}$ und $Q = 60\,\text{nC}$. Die Quelle liefert $40\,\text{nC}$ nach.
  ---
  **b)** Vorher $W_0 = \tfrac12\cdot 200\cdot 10^{-12}\,\text{F}\cdot(100\,\text{V})^2 = 1{,}0\,\mu\text{J}$. Nachher $3{,}0\,\mu\text{J}$. Zunahme $2{,}0\,\mu\text{J}$.
  ---
  **c)** Die Quelle liefert $\Delta Q\cdot U = 40\cdot 10^{-9}\,\text{C}\cdot 100\,\text{V} = 4{,}0\,\mu\text{J}$. Davon gehen $2{,}0\,\mu\text{J}$ ins Feld. Die anderen $2{,}0\,\mu\text{J}$ sind mechanische Arbeit: Das Feld zieht die polarisierte Platte zwischen die Platten hinein.
```

## Der Millikan-Versuch

```aufgabe
id: p12-11-check
art: check
titel: "Vorwissen: Was heißt Schweben?"
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein kleiner Ballon schwebt ruhig in der Luft, ohne zu steigen oder zu sinken. Was gilt für die Kräfte auf ihn?

  Herkunft: [Kapitel 3, Kraft und Trägheit](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom)
teile:
  - typ: auswahl
    optionen:
      - "Die Kraft nach oben ist genau so groß wie die Gewichtskraft nach unten."
      - "Auf ihn wirkt keine Kraft, auch keine Gewichtskraft."
      - "Die Kraft nach oben ist etwas größer, sonst würde er fallen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Gewichtskraft wirkt immer. Schweben heißt nur, dass sie durch eine gleich große Gegenkraft ausgeglichen wird.
      - wert: 2
        meldung: |
          Eine größere Kraft nach oben würde den Ballon nach oben **beschleunigen**. In Ruhe ist die resultierende Kraft null.
hinweise:
  - Ruhe heißt nach dem ersten Newtonschen Axiom resultierende Kraft null.
loesung: |
  Der Ballon ruht, also ist die resultierende Kraft null (erstes Newtonsches Axiom).
  ---
  Die Kraft nach oben gleicht die Gewichtskraft genau aus. Im Millikan-Versuch übernimmt die elektrische Kraft diese Rolle.
```

Dass Ladung gequantelt ist, also nur in Vielfachen von $e$ vorkommt, hat Robert Millikan zwischen 1909
und 1913 gezeigt. Er bekam dafür 1923 den Nobelpreis. Der Versuch ist ein Lieblingsthema mündlicher
Prüfungen, weil er drei Kapitel verbindet: das Kräftegleichgewicht aus der Dynamik, das homogene Feld
und die Ladung.

### Aufbau und Schwebemethode

Zwischen zwei waagrechten Kondensatorplatten (Abstand $d$, Spannung $U$) sprüht man feine Öltröpfchen.
Beim Zerstäuben laden sie sich durch Reibung mit einigen Elementarladungen auf. Durch ein Mikroskop
beobachtet man ein einzelnes Tröpfchen. Es ist so klein, dass man es nur als hellen Lichtpunkt sieht.

Man stellt die Spannung so ein, dass das Tröpfchen **schwebt**. Dann ist die elektrische Kraft nach oben
genau so groß wie die Gewichtskraft nach unten:
$$q\cdot E = m\cdot g \qquad\text{mit}\qquad E = \frac{U}{d}.$$
Dabei ist $q$ die Ladung des Tröpfchens, $m$ seine Masse, $g = 9{,}81\,\text{m/s}^2$ und $U$ die
**Schwebespannung**. Wir setzen $E = U/d$ ein, multiplizieren mit $d$ und teilen durch $U$:
$$q = \frac{m\,g\,d}{U}.$$

```plot
x: [-3, 3]
y: [-1.6, 1.8]
gleich: true
strecken:
  - { von: [-2.5, 1.2], nach: [2.5, 1.2], farbe: 1 }
  - { von: [-2.5, -1.2], nach: [2.5, -1.2], farbe: 2 }
vektoren:
  - { von: [0, 0], nach: [0, 0.9], label: "F_el = qU/d", farbe: 1 }
  - { von: [0, 0], nach: [0, -0.9], label: "F_G = mg", farbe: 0 }
punkte:
  - { x: 0, y: 0, label: "Tröpfchen (negativ)", farbe: 3 }
  - { x: -2, y: 1.45, label: "obere Platte +" }
  - { x: -2, y: -1.45, label: "untere Platte −" }
beschriftung: "Freikörperbild eines schwebenden Öltröpfchens im Millikan-Versuch. Die Gewichtskraft zeigt nach unten, die elektrische Kraft nach oben. Beide sind gleich lang, die resultierende Kraft ist null. Für ein negatives Tröpfchen muss dazu die obere Platte positiv sein."
```

:::beispiel[Ein schwebendes Tröpfchen auswerten]
Ein Tröpfchen der Masse $m = 2{,}4\cdot 10^{-15}\,\text{kg}$ schwebt zwischen Platten im Abstand
$d = 6{,}0\,\text{mm}$ bei $U = 294\,\text{V}$.

**Schritt 1, Formel:** Aus dem Gleichgewicht $q\,U/d = m\,g$ folgt $q = m\,g\,d/U$.

**Schritt 2, einsetzen:**
$q = \dfrac{2{,}4\cdot 10^{-15}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 6{,}0\cdot 10^{-3}\,\text{m}}{294\,\text{V}} = 4{,}80\cdot 10^{-19}\,\text{C}$.
Die Einheit: $\text{kg}\cdot\text{m}^2/(\text{s}^2\cdot\text{V}) = \text{J}/\text{V} = \text{C}$.

**Schritt 3, in Elementarladungen:** $q/e = 4{,}80\cdot 10^{-19}/1{,}602\cdot 10^{-19} = 3{,}0$. Das Tröpfchen
trägt drei Elementarladungen.
:::

:::achtung[Fehler: Die Schwebebedingung falsch umgestellt]
**Falsche Rechnung:** Für das Beispiel schreibt jemand $q = \dfrac{m\,g\,U}{d} = \dfrac{2{,}4\cdot 10^{-15}\cdot 9{,}81\cdot 294}{6{,}0\cdot 10^{-3}}\,\text{C} = 1{,}2\cdot 10^{-9}\,\text{C}$.

**Richtig:** In $q\cdot U/d = m\,g$ steht $U$ im Zähler und $d$ im Nenner. Beim Umstellen nach $q$ wandert
$U$ in den Nenner und $d$ in den Zähler: $q = m\,g\,d/U$. Die Probe mit der Einheit zeigt den Fehler
sofort: $\text{kg}\cdot\text{m/s}^2\cdot\text{V}/\text{m}$ ist kein Coulomb. Auch der Wert $1{,}2\cdot 10^{-9}\,\text{C}$ wäre
unplausibel: Das wären rund sieben Milliarden Elementarladungen auf einem winzigen Tröpfchen.
:::

```aufgabe
id: p12-millikan-polung
titel: Welche Platte muss positiv sein?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Öltröpfchen hat beim Zerstäuben Elektronen aufgenommen, es ist also negativ geladen. Es soll im Millikan-Versuch schweben. Wie muss der Kondensator gepolt sein?
teile:
  - typ: auswahl
    optionen:
      - "Obere Platte positiv, untere negativ."
      - "Obere Platte negativ, untere positiv."
      - "Die Polung ist egal, es kommt nur auf die Höhe der Spannung an."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Dann würde das negative Tröpfchen von der oberen Platte abgestoßen und von der unteren angezogen. Die elektrische Kraft zeigte nach unten, zusammen mit der Gewichtskraft. Es fiele schneller.
      - wert: 2
        meldung: |
          Die Polung entscheidet über die **Richtung** der elektrischen Kraft. Schweben geht nur, wenn sie nach oben zeigt.
hinweise:
  - Die elektrische Kraft muss nach oben zeigen. Wohin zieht eine positive Platte ein negatives Tröpfchen?
loesung: |
  **Ansatz:** Für das Gleichgewicht muss die elektrische Kraft die Gewichtskraft nach oben ausgleichen.
  ---
  Ein negatives Tröpfchen wird von der positiven Platte angezogen. Also muss die **obere** Platte positiv sein. Das Feld zeigt dann nach unten, die Kraft auf die negative Ladung nach oben.
```

```aufgabe
id: p12-millikan-spannung
titel: Welche Spannung lässt das Tröpfchen schweben?
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Tröpfchen der Masse $1{,}6\cdot 10^{-15}\,\text{kg}$ trägt zwei Elementarladungen. Der Plattenabstand ist $5{,}0\,\text{mm}$. Bei welcher Spannung schwebt es (in V)?
teile:
  - typ: zahl
    loesung: "1.6e-15*9.81*5.0e-3/(2*1.602e-19)"
    einheit: "V"
    anzeige: '245'
    fehler:
      - wert: "1.6e-15*9.81*5.0e-3/(1.602e-19)"
        meldung: |
          Das Tröpfchen trägt **zwei** Elementarladungen, also $q = 2e$. Bei doppelter Ladung genügt die halbe Spannung.
      - wert: "1.6e-15*9.81/(2*1.602e-19)/5.0e-3"
        meldung: |
          Aus $qU/d = mg$ folgt $U = mgd/q$. Der Abstand gehört in den Zähler.
hinweise:
  - 'Schwebebedingung $q\,U/d = m\,g$. Stelle nach $U$ um.'
loesung: |
  **Ansatz:** Schwebebedingung $q\,U/d = m\,g$, umgestellt $U = m\,g\,d/q$ mit $q = 2e$.
  ---
  **Rechnung:** $U = \dfrac{1{,}6\cdot 10^{-15}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 5{,}0\cdot 10^{-3}\,\text{m}}{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}} = 245\,\text{V}$. Einheit: $\text{J/C} = \text{V}$.
```

```aufgabe
id: p12-millikan
titel: Ein schwebendes Öltröpfchen
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Ein Öltröpfchen der Masse $1{,}0\cdot 10^{-15}\,\text{kg}$ schwebt zwischen waagrechten Platten im Abstand $8{,}0\,\text{mm}$, wenn die Spannung $163\,\text{V}$ beträgt.

  a) Berechne seine Ladung in $10^{-19}\,\text{C}$.

  b) Wie viele Elementarladungen trägt es?
teile:
  - typ: zahl
    label: a) q in 10⁻¹⁹ C
    loesung: "1.0e-15*9.81*8.0e-3/163/1e-19"
    anzeige: '4{,}81'
    fehler:
      - wert: "1.0e-15*9.81*8.0/163/1e-19"
        meldung: |
          Der Abstand muss in Metern stehen: $8{,}0\,\text{mm} = 8{,}0\cdot 10^{-3}\,\text{m}$.
      - wert: "1.0e-15*9.81/(8.0e-3*163)/1e-19"
        meldung: |
          Beim Umstellen von $qU/d = mg$ wandert $d$ in den **Zähler**: $q = mgd/U$.
  - typ: zahl
    label: b) Anzahl
    loesung: "round(1.0e-15*9.81*8.0e-3/163/1.602e-19)"
    anzeige: '3'
    fehler:
      - wert: "4.81"
        meldung: |
          Das ist die Ladung in $10^{-19}\,\text{C}$. Teile noch durch $e = 1{,}602\cdot 10^{-19}\,\text{C}$.
hinweise:
  - 'Schweben heißt Kräftegleichgewicht: $qE = mg$ mit $E = U/d$.'
  - 'Für b) die Ladung durch $e = 1{,}602\cdot 10^{-19}\,\text{C}$ teilen und auf eine ganze Zahl runden.'
loesung: |
  **Gleichgewicht:** $q\dfrac{U}{d} = mg$, also $q = \dfrac{mgd}{U}$.
  ---
  **a)** $q = \dfrac{1{,}0\cdot 10^{-15}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 8{,}0\cdot 10^{-3}\,\text{m}}{163\,\text{V}} = 4{,}81\cdot 10^{-19}\,\text{C}$.
  ---
  **b)** $n = q/e = 4{,}81/1{,}602 = 3{,}0$, also drei Elementarladungen. Das Ergebnis liegt sehr nahe an einer ganzen Zahl, wie es die Quantelung verlangt.
```

### Mehrere Tröpfchen: die Elementarladung finden

Ein einzelnes Tröpfchen beweist noch nichts. Millikan maß Hunderte. Dabei zeigte sich: Alle Ladungen sind
ganzzahlige Vielfache derselben kleinsten Ladung. Werte wie $1{,}5\,e$ oder $2{,}7\,e$ kommen nie vor. Wie findet
man $e$ aus einer Messreihe? Man sucht den größten gemeinsamen Teiler, den **ggT**, so wie bei ganzen Zahlen.

:::beispiel[Die Elementarladung aus fünf Messwerten]
Gemessen wurden die Ladungen (in $10^{-19}\,\text{C}$): $3{,}22$; $6{,}39$; $4{,}83$; $9{,}58$; $8{,}01$.

**Schritt 1, Abstände suchen:** Sortiert: $3{,}22$; $4{,}83$; $6{,}39$; $8{,}01$; $9{,}58$. Die Abstände sind
$1{,}61$; $1{,}56$; $1{,}62$; $1{,}57$. Sie liegen alle bei etwa $1{,}6$. Das ist ein Kandidat für $e$.

**Schritt 2, Vielfache zuordnen:** $3{,}22/1{,}6 \approx 2$, $4{,}83/1{,}6 \approx 3$, $6{,}39/1{,}6 \approx 4$,
$8{,}01/1{,}6 \approx 5$, $9{,}58/1{,}6 \approx 6$. Alle Verhältnisse liegen nahe an ganzen Zahlen.

**Schritt 3, genauer Wert:** Wir teilen jede Ladung durch ihre ganze Zahl und mitteln:
$\tfrac{3{,}22}{2} = 1{,}610$; $\tfrac{4{,}83}{3} = 1{,}610$; $\tfrac{6{,}39}{4} = 1{,}598$; $\tfrac{8{,}01}{5} = 1{,}602$; $\tfrac{9{,}58}{6} = 1{,}597$.
Der Mittelwert ist $1{,}603$, also $e \approx 1{,}60\cdot 10^{-19}\,\text{C}$.
:::

:::achtung[Fehler: Den kleinsten Messwert für die Elementarladung gehalten]
**Falsche Überlegung:** „Gemessen wurden $3{,}21$; $4{,}80$ und $8{,}02$ (in $10^{-19}\,\text{C}$). Der kleinste Wert
ist die Elementarladung, also $e = 3{,}21\cdot 10^{-19}\,\text{C}$.“

**Richtig:** Dann wäre $4{,}80$ das $1{,}5$-Fache von $e$, und das ist unmöglich. Der kleinste Messwert kann
selbst schon $2e$ oder $3e$ sein. Man muss einen Wert finden, von dem **alle** Messwerte ganzzahlige
Vielfache sind. Hier ist das $1{,}60$: Die Messwerte sind $2e$, $3e$ und $5e$.
:::

```aufgabe
id: p12-millikan-ggt
titel: Die Elementarladung aus einer Messreihe
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  In einem Millikan-Versuch wurden fünf Ladungen gemessen (in $10^{-19}\,\text{C}$): $4{,}79$; $8{,}03$; $11{,}20$; $6{,}41$; $3{,}18$.

  a) Wie viele Elementarladungen trägt das Tröpfchen mit $11{,}20\cdot 10^{-19}\,\text{C}$?

  b) Bestimme aus allen fünf Werten die Elementarladung (in $10^{-19}\,\text{C}$, auf drei Stellen).
teile:
  - typ: zahl
    label: a) Anzahl
    loesung: "7"
    fehler:
      - wert: "3.5"
        meldung: |
          Du hast durch den kleinsten Messwert $3{,}18$ geteilt. Der ist aber selbst schon $2e$. Eine halbe Elementarladung gibt es nicht.
  - typ: zahl
    label: b) e in 10⁻¹⁹ C
    loesung: "mean(4.79/3, 8.03/5, 11.20/7, 6.41/4, 3.18/2)"
    toleranz: 0.01
    anzeige: '1{,}60'
    fehler:
      - wert: "3.18"
        meldung: |
          Der kleinste Messwert ist nicht automatisch $e$. Prüfe: $4{,}79/3{,}18 \approx 1{,}5$. Halbe Vielfache sind unmöglich.
hinweise:
  - Sortiere die Werte und betrachte die Abstände zwischen Nachbarn. Welcher Abstand kommt immer wieder vor?
  - Teile jeden Messwert durch den gefundenen Abstand, runde auf eine ganze Zahl, und teile dann jeden Messwert durch seine ganze Zahl.
gefuehrt:
  - text: Sortiere die Werte. Welcher Abstand zwischen Nachbarn taucht immer wieder auf (in $10^{-19}\,\text{C}$)?
    teil:
      typ: zahl
      loesung: "1.6"
      toleranz: 0.05
    erklaerung: 'Sortiert: $3{,}18$; $4{,}79$; $6{,}41$; $8{,}03$; $11{,}20$. Die Abstände sind $1{,}61$; $1{,}62$; $1{,}62$; $3{,}17$. Der letzte ist ein doppelter Schritt. Der Grundabstand ist etwa $1{,}6$.'
  - text: Wie viele Elementarladungen sind $11{,}20\cdot 10^{-19}\,\text{C}$?
    teil:
      typ: zahl
      loesung: "7"
    erklaerung: '$11{,}20/1{,}6 = 7{,}0$. Das Tröpfchen trägt sieben Elementarladungen.'
  - text: Teile jeden Messwert durch seine ganze Zahl ($2$, $3$, $4$, $5$, $7$) und bilde den Mittelwert.
    teil:
      typ: zahl
      loesung: "mean(4.79/3, 8.03/5, 11.20/7, 6.41/4, 3.18/2)"
      toleranz: 0.01
    erklaerung: '$1{,}590$; $1{,}597$; $1{,}603$; $1{,}606$; $1{,}600$. Mittelwert $1{,}599$, also $e \approx 1{,}60\cdot 10^{-19}\,\text{C}$.'
  - text: Vergleiche mit dem Literaturwert $1{,}602\cdot 10^{-19}\,\text{C}$. Passt das Ergebnis?
    erklaerung: Der Unterschied ist nur $0{,}003$, also rund $0{,}2\,\%$. Die Einzelwerte streuen um etwa $\pm 0{,}01$. Das Ergebnis ist mit dem Literaturwert verträglich.
loesung: |
  **Ansatz:** Alle Messwerte müssen ganzzahlige Vielfache von $e$ sein. Wir suchen den gemeinsamen Grundschritt.
  ---
  **Grundschritt:** Sortiert $3{,}18$; $4{,}79$; $6{,}41$; $8{,}03$; $11{,}20$. Nachbarn unterscheiden sich um etwa $1{,}6$, einmal um das Doppelte.
  ---
  **Zuordnung:** $3{,}18 = 2e$, $4{,}79 = 3e$, $6{,}41 = 4e$, $8{,}03 = 5e$, $11{,}20 = 7e$. Also a) sieben Elementarladungen.
  ---
  **b)** Einzelwerte: $1{,}590$; $1{,}597$; $1{,}603$; $1{,}606$; $1{,}600$. Mittelwert $e = 1{,}60\cdot 10^{-19}\,\text{C}$. Das passt sehr gut zum Literaturwert $1{,}602\cdot 10^{-19}\,\text{C}$.
```

### Die Masse des Tröpfchens (Vertiefung)

Woher kennt man die Masse eines Tröpfchens, das man nur als Lichtpunkt sieht? Millikan schaltete das Feld
ab und ließ das Tröpfchen sinken. Nach kurzer Zeit sinkt es mit konstanter Geschwindigkeit $v$, weil die
Luftreibung die Gewichtskraft ausgleicht. Für eine kleine Kugel mit Radius $r$ gilt das **Gesetz von
Stokes**: Die Reibungskraft ist $F_R = 6\pi\,\eta\,r\,v$. Dabei ist $\eta$ (sprich „eta“) die Zähigkeit der
Luft, etwa $1{,}8\cdot 10^{-5}\,\text{Pa}\cdot\text{s}$. Mehr dazu steht in
[Strömungswiderstand](/lernen/physik1/hydro-aeromechanik/stroemungswiderstand).

Im Gleichgewicht gilt $6\pi\,\eta\,r\,v = m\,g = \tfrac43\pi r^3\rho\,g$. Daraus folgt der Radius und mit der
Dichte $\rho$ des Öls die Masse. Ein Tröpfchen, das mit $0{,}10\,\text{mm/s}$ sinkt, hat bei
$\rho = 875\,\text{kg/m}^3$ den Radius $r = \sqrt{\tfrac{9\eta v}{2\rho g}} = 0{,}97\,\mu\text{m}$ und die Masse
$m = \tfrac43\pi r^3\rho = 3{,}4\cdot 10^{-15}\,\text{kg}$. So kam Millikan zu den Massen in der Schwebeformel.

```aufgabe
id: p12-millikan-text
titel: Den Millikan-Versuch erklären
niveau: 2
lernziel: 8
kompetenz: begruenden
angabe: |
  Beschreibe Aufbau, Messprinzip und Ergebnis des Millikan-Versuchs in fünf bis sieben Sätzen, so wie in der mündlichen Prüfung. Erkläre auch, warum ein einzelnes Tröpfchen noch nicht beweist, dass Ladung gequantelt ist.
teile:
  - typ: text
    muster: |
      Zwischen zwei waagrechten Kondensatorplatten werden feine, beim Zerstäuben geladene Öltröpfchen eingesprüht und mit einem Mikroskop beobachtet. Man stellt die Spannung so ein, dass ein Tröpfchen schwebt. Dann gleicht die elektrische Kraft $qU/d$ die Gewichtskraft $mg$ aus, also $q = mgd/U$. Die Masse bestimmt man aus der Sinkgeschwindigkeit ohne Feld mit dem Gesetz von Stokes. So misst man die Ladung vieler Tröpfchen. Alle Ladungen sind ganzzahlige Vielfache von $e \approx 1{,}6\cdot 10^{-19}\,\text{C}$. Ein einzelner Wert könnte zufällig passen. Erst viele Werte, die alle auf dieselbe kleinste Einheit führen, beweisen die Quantelung.
hinweise:
  - Nenne das Kräftegleichgewicht als Formel und sag, welche Größen man misst.
  - Was schließt man aus der **Gesamtheit** der Messungen?
loesung: |
  **Aufbau:** waagrechter Plattenkondensator, geladene Öltröpfchen, Mikroskop.
  ---
  **Prinzip:** Schwebebedingung $qU/d = mg$, also $q = mgd/U$. Masse aus der Sinkgeschwindigkeit ohne Feld.
  ---
  **Ergebnis:** Alle Ladungen sind ganzzahlige Vielfache von $e$. Erst viele Messungen zeigen, dass es eine kleinste Einheit gibt. Ein einzelner Wert allein könnte auch zufällig passen.
```

```aufgabe
id: p12-millikan-abschaetzung
titel: Warum braucht man winzige Tröpfchen?
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Stell dir vor, man nähme statt eines Tröpfchens mit $1\,\mu\text{m}$ Radius einen Öltropfen mit $1\,\text{mm}$ Radius. Er trägt ebenfalls nur fünf Elementarladungen. Der Plattenabstand ist $5{,}0\,\text{mm}$, die Dichte des Öls $875\,\text{kg/m}^3$.

  a) Auf das Wievielfache steigt die Masse, wenn der Radius tausendmal größer wird?

  b) Welche Schwebespannung bräuchte der große Tropfen? Gib den gerundeten Exponenten $n$ in $10^{n}\,\text{V}$ an.
teile:
  - typ: zahl
    label: a) Faktor
    loesung: "1000^3"
    anzeige: '10^{9}'
    fehler:
      - wert: "1000"
        meldung: |
          Die Masse wächst mit dem **Volumen**, und das Volumen einer Kugel wächst mit $r^3$. Tausendfacher Radius gibt $1000^3$.
  - typ: zahl
    label: b) Exponent n
    loesung: "round(lg(4/3*pi*(1e-3)^3*875*9.81*5.0e-3/(5*1.602e-19)))"
    toleranz: 0.1
    anzeige: '11'
hinweise:
  - 'Das Volumen einer Kugel ist $\tfrac43\pi r^3$. Was passiert mit $r^3$, wenn $r$ tausendmal größer wird?'
  - 'Masse $m = \tfrac43\pi r^3\rho$, dann $U = m\,g\,d/q$ mit $q = 5e$.'
loesung: |
  **Modell:** Kugelförmiger Tropfen, Schwebebedingung $U = mgd/q$.
  ---
  **a)** Masse $\sim$ Volumen $\sim r^3$. Tausendfacher Radius gibt $1000^3 = 10^{9}$-fache Masse.
  ---
  **b)** $m = \tfrac43\pi\,(10^{-3}\,\text{m})^3\cdot 875\,\tfrac{\text{kg}}{\text{m}^3} = 3{,}7\cdot 10^{-6}\,\text{kg}$. $U = \dfrac{3{,}7\cdot 10^{-6}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 5{,}0\cdot 10^{-3}\,\text{m}}{5\cdot 1{,}602\cdot 10^{-19}\,\text{C}} = 2{,}2\cdot 10^{11}\,\text{V}$, also $n = 11$.
  ---
  **Deutung:** Zweihundert Milliarden Volt sind unmöglich, die Luft würde längst durchschlagen. Nur bei winzigen Tröpfchen fallen wenige Elementarladungen ins Gewicht. Deshalb arbeitet der Versuch mit Tröpfchen von etwa einem Mikrometer.
```

```reflexion
frage: Millikans Messwerte lagen alle nahe an ganzzahligen Vielfachen von $1{,}6\cdot 10^{-19}\,\text{C}$, aber nie genau darauf. Widerspricht das der Quantelung?
antwort: |
  Nein. Jede Messung hat eine Unsicherheit, zum Beispiel beim Ablesen der Schwebespannung oder bei der Masse aus der Sinkgeschwindigkeit. Deshalb streuen die Werte etwas um die ganzen Vielfachen. Entscheidend ist, dass die Abweichungen klein sind gegen den Abstand $e$ zwischen zwei Vielfachen und dass es keine Häufung bei halben Vielfachen gibt. Würde Ladung kontinuierlich vorkommen, wären die Messwerte gleichmäßig verteilt und nicht um ganze Vielfache gehäuft.
```

```aufgabe
id: p12-millikan-unsicherheit
titel: Elementarladung mit Messunsicherheit
niveau: 3
lernziel: 8
kompetenz: anwenden
angabe: |
  Aus fünf Tröpfchen ergaben sich die folgenden Werte für die Elementarladung (in $10^{-19}\,\text{C}$): $1{,}596$; $1{,}611$; $1{,}589$; $1{,}607$; $1{,}602$.

  a) Berechne den Mittelwert (in $10^{-19}\,\text{C}$).

  b) Berechne die Unsicherheit des Mittelwerts $u = s/\sqrt{n}$ (in $10^{-19}\,\text{C}$). Dabei ist $s$ die Standardabweichung der Einzelwerte mit $n - 1$ im Nenner.

  c) Ist der Literaturwert $1{,}602\cdot 10^{-19}\,\text{C}$ mit dem Ergebnis verträglich?
teile:
  - typ: zahl
    label: a) Mittelwert
    loesung: "mean(1.596, 1.611, 1.589, 1.607, 1.602)"
    anzeige: '1{,}601'
    toleranz: 0.0005
  - typ: zahl
    label: b) u
    loesung: "std([1.596, 1.611, 1.589, 1.607, 1.602])/sqrt(5)"
    anzeige: '0{,}0039'
    toleranz: 0.0003
    fehler:
      - wert: "std([1.596, 1.611, 1.589, 1.607, 1.602])"
        meldung: |
          Das ist die Standardabweichung $s$ der Einzelwerte. Die Unsicherheit des **Mittelwerts** ist kleiner, $u = s/\sqrt{n}$.
  - typ: auswahl
    label: c) verträglich?
    optionen:
      - "Ja, der Literaturwert liegt innerhalb von $1{,}601 \\pm 0{,}004$."
      - "Nein, weil der Mittelwert nicht genau $1{,}602$ ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Ein Messergebnis stimmt nie exakt. Es ist verträglich, wenn der Literaturwert im Bereich Mittelwert plus minus Unsicherheit liegt.
hinweise:
  - 'Mittelwert: Summe durch $5$. Standardabweichung: $s = \sqrt{\dfrac{\sum (x_i - \bar x)^2}{n - 1}}$.'
  - 'Dann $u = s/\sqrt{5}$. Vergleiche den Abstand zum Literaturwert mit $u$.'
loesung: |
  **Ansatz:** Statistische Auswertung einer Messreihe wie in [Messunsicherheit und signifikante Stellen](/lernen/physik1/groessen-einheiten-messen/messunsicherheit-und-signifikante-stellen) und [Mathematik, Varianz, Standardabweichung und z-Werte](/lernen/mathe3/statistik/varianz-standardabweichung-und-z-werte).
  ---
  **a)** $\bar x = \dfrac{1{,}596 + 1{,}611 + 1{,}589 + 1{,}607 + 1{,}602}{5} = \dfrac{8{,}005}{5} = 1{,}601$.
  ---
  **b)** Abweichungen: $-0{,}005$; $+0{,}010$; $-0{,}012$; $+0{,}006$; $+0{,}001$. Quadrate summiert: $3{,}06\cdot 10^{-4}$. $s = \sqrt{3{,}06\cdot 10^{-4}/4} = 0{,}0087$. $u = 0{,}0087/\sqrt5 = 0{,}0039$.
  ---
  **c)** Ergebnis: $e = (1{,}601 \pm 0{,}004)\cdot 10^{-19}\,\text{C}$. Der Literaturwert $1{,}602$ weicht nur um $0{,}001$ ab, weniger als $u$. Er ist verträglich.
```

## Geladene Teilchen im homogenen Feld

```aufgabe
id: p12-12-check
art: check
titel: "Vorwissen: Der waagrechte Wurf"
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Ein Ball wird mit $3{,}0\,\text{m/s}$ waagrecht von einem Tisch geworfen und ist $0{,}40\,\text{s}$ in der Luft. Wie weit fliegt er waagrecht (in m)? Den Luftwiderstand vernachlässigen wir.

  Herkunft: [Kapitel 2, Waagrechter und schiefer Wurf](/lernen/physik1/kinematik/waagrechter-und-schiefer-wurf)
teile:
  - typ: zahl
    loesung: "3.0*0.40"
    einheit: "m"
    anzeige: '1{,}2'
    fehler:
      - wert: "0.5*9.81*0.40^2"
        meldung: |
          Das ist die **senkrechte** Fallstrecke. Waagrecht wirkt keine Kraft, dort gilt einfach $x = v_0\,t$.
hinweise:
  - Waagrecht bleibt die Geschwindigkeit konstant. Die senkrechte Bewegung stört die waagrechte nicht.
loesung: |
  Waagrecht wirkt keine Kraft, also ist die Bewegung dort gleichförmig: $x = v_0\,t$.
  ---
  $x = 3{,}0\,\text{m/s}\cdot 0{,}40\,\text{s} = 1{,}2\,\text{m}$. Genau dieselbe Zerlegung brauchen wir gleich für Elektronen zwischen Kondensatorplatten.
```

Elektronenstrahlen gibt es in Elektronenmikroskopen, Röntgenröhren und Teilchenbeschleunigern. Früher
erzeugten sie auch das Bild in Fernsehröhren und Oszilloskopen. Die Physik dahinter ist die Mechanik aus
den Kapiteln [Kinematik](/lernen/physik1/kinematik) und [Dynamik](/lernen/physik1/dynamik). Neu ist nur die
Kraft: Statt $F = m\,g$ wirkt $F = q\,E$. Weil diese Kraft im homogenen Feld konstant ist, ist auch die
Beschleunigung $a = q\,E/m$ konstant. Die Gewichtskraft ist dagegen winzig und wird vernachlässigt.

### Beschleunigen längs des Feldes

Fliegt ein Teilchen parallel zu den Feldlinien, wird es gleichmäßig beschleunigt oder gebremst. Die
Endgeschwindigkeit folgt am einfachsten aus dem **Energiesatz**: $q\,U = \tfrac12\,m\,v^2$, siehe
[Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld).

In einer **Elektronenkanone** heizt ein Glühdraht eine Kathode (die negative Elektrode). Dabei treten
Elektronen aus dem heißen Metall aus. Das heißt **Glühemission**. Eine Spannung $U_B$ zwischen Kathode
und Anode (der positiven Elektrode) beschleunigt sie. Durch ein Loch in der Anode fliegen sie mit
$$v_0 = \sqrt{\frac{2\,e\,U_B}{m_e}}$$
weiter. Dabei ist $U_B$ die **Beschleunigungsspannung**.

:::beispiel[Ein Elektron wird abgebremst]
Ein Elektron mit der Bewegungsenergie $150\,\text{eV}$ fliegt in ein homogenes Feld der Stärke
$30\,\text{kV/m}$. Das Feld zeigt in Flugrichtung. Wie weit kommt es?

**Schritt 1, Richtung der Kraft:** Das Elektron ist negativ. Die Kraft zeigt entgegen dem Feld, also gegen
die Flugrichtung. Das Elektron wird gebremst.

**Schritt 2, Energiesatz:** Es kommt zum Stehen, wenn es die Spannung $U = 150\,\text{V}$ „bergauf“
durchlaufen hat. Dann ist seine ganze Bewegungsenergie in potentielle Energie umgewandelt.

**Schritt 3, Strecke:** Im homogenen Feld gilt $U = E\cdot s$, also
$s = U/E = 150\,\text{V} / 3{,}0\cdot 10^{4}\,\text{V/m} = 5{,}0\cdot 10^{-3}\,\text{m} = 5{,}0\,\text{mm}$. Danach fliegt
es zurück.
:::

```aufgabe
id: p12-elektronenkanone
titel: Geschwindigkeit hinter der Anode
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  In einer Elektronenkanone liegt die Beschleunigungsspannung $2{,}5\,\text{kV}$ an. Die Elektronen starten praktisch aus der Ruhe. Mit welcher Geschwindigkeit fliegen sie durch das Loch in der Anode (in $10^{7}\,\text{m/s}$)? ($m_e = 9{,}109\cdot 10^{-31}\,\text{kg}$)
teile:
  - typ: zahl
    loesung: "sqrt(2*1.602e-19*2500/9.109e-31)/1e7"
    anzeige: '2{,}97'
    fehler:
      - wert: "sqrt(1.602e-19*2500/9.109e-31)/1e7"
        meldung: |
          Der Faktor $2$ fehlt. Aus $\tfrac12 m v^2 = eU$ folgt $v^2 = 2eU/m$.
      - wert: "sqrt(2*1.602e-19*2.5/9.109e-31)/1e7"
        meldung: |
          Kilo heißt $10^{3}$. Die Spannung ist $2500\,\text{V}$.
hinweise:
  - 'Energiesatz: $e\,U_B = \tfrac12\,m_e\,v_0^2$.'
loesung: |
  **Ansatz:** Energiesatz. Die Arbeit des Feldes $e\,U_B$ wird zu Bewegungsenergie.
  ---
  **Rechnung:** $v_0 = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 2500\,\text{V}}{9{,}109\cdot 10^{-31}\,\text{kg}}} = 2{,}97\cdot 10^{7}\,\text{m/s}$. Das ist rund ein Zehntel der Lichtgeschwindigkeit.
```

```aufgabe
id: p12-abbremsen
titel: Wie weit kommt das Elektron?
niveau: 1
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Elektron mit $80\,\text{eV}$ Bewegungsenergie fliegt in ein homogenes Feld der Stärke $4{,}0\,\text{kV/m}$, das in Flugrichtung zeigt. Nach welcher Strecke steht es (in cm)?
teile:
  - typ: zahl
    loesung: "80/4000*100"
    einheit: "cm"
    anzeige: '2{,}0'
    fehler:
      - wert: "80*4000*100"
        meldung: |
          Aus $U = E\cdot s$ folgt $s = U/E$. Teile die Spannung durch die Feldstärke.
      - wert: "80/4*100"
        meldung: |
          Kilo heißt $10^{3}$. Die Feldstärke ist $4000\,\text{V/m}$.
hinweise:
  - 'Ein Elektron mit $80\,\text{eV}$ kann genau $80\,\text{V}$ „bergauf“ laufen. Im homogenen Feld gilt $U = E\cdot s$.'
loesung: |
  **Ansatz:** Das Feld bremst das negative Elektron. Es steht, wenn es $80\,\text{V}$ gegen das Feld durchlaufen hat.
  ---
  **Rechnung:** $s = \dfrac{U}{E} = \dfrac{80\,\text{V}}{4{,}0\cdot 10^{3}\,\text{V/m}} = 0{,}020\,\text{m} = 2{,}0\,\text{cm}$.
```

```aufgabe
id: p12-proton
titel: Proton und Elektron im Vergleich
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Proton ($m_p = 1{,}673\cdot 10^{-27}\,\text{kg}$) wird aus der Ruhe durch $5{,}0\,\text{kV}$ beschleunigt.

  a) Welche Geschwindigkeit erreicht es (in $10^{5}\,\text{m/s}$)?

  b) Wie verhält sich seine Bewegungsenergie zu der eines Elektrons, das dieselbe Spannung durchläuft?
teile:
  - typ: zahl
    label: a) v in 10⁵ m/s
    loesung: "sqrt(2*1.602e-19*5000/1.673e-27)/1e5"
    anzeige: '9{,}79'
    fehler:
      - wert: "sqrt(2*1.602e-19*5000/9.109e-31)/1e5"
        meldung: |
          Du hast die Masse des Elektrons eingesetzt. Ein Proton ist rund $1836$-mal schwerer.
  - typ: auswahl
    label: b) Energie im Vergleich
    optionen:
      - "gleich groß"
      - "1836-mal so groß"
      - "1836-mal so klein"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Die Energie $qU$ hängt nur von Ladung und Spannung ab, nicht von der Masse. Proton und Elektron haben denselben Ladungsbetrag.
      - wert: 2
        meldung: |
          Die Masse beeinflusst nur die Geschwindigkeit, nicht die Energie. $E_{\text{kin}} = qU$ ist für beide gleich.
hinweise:
  - Die Energie hängt nur von Ladung und Spannung ab, die Geschwindigkeit zusätzlich von der Masse.
  - '$v = \sqrt{2eU/m_p}$.'
loesung: |
  **Energie:** $E_{\text{kin}} = eU = 5000\,\text{eV}$, genau so viel wie beim Elektron, denn beide haben den Ladungsbetrag $e$.
  ---
  **a)** $v = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 5000\,\text{V}}{1{,}673\cdot 10^{-27}\,\text{kg}}} = 9{,}79\cdot 10^{5}\,\text{m/s}$.
  ---
  **Vergleich:** Das Proton ist $1836$-mal schwerer und daher nur $\sqrt{1836} \approx 43$-mal langsamer als ein Elektron mit derselben Energie.
```

### Ablenken quer zum Feld

Fliegt ein Elektron mit $v_0$ **senkrecht** zu den Feldlinien in einen Plattenkondensator (Plattenlänge $L$,
Abstand $d$, Spannung $U$), passiert genau dasselbe wie beim waagrechten Wurf. Wir zerlegen die Bewegung:

- **Parallel zu den Platten** wirkt keine Kraft. Die Bewegung ist gleichförmig: $x = v_0\,t$.
- **Senkrecht zu den Platten** wirkt die konstante Kraft $F = e\,E = e\,U/d$. Die Bewegung ist gleichmäßig
  beschleunigt mit $a = \dfrac{e\,U}{m_e\,d}$, also $y = \tfrac12\,a\,t^2$.

Die Bahn ist eine **Parabel**. Die Zeit im Kondensator ist $t = L/v_0$. Beim Austritt ist das Elektron um
$$y = \frac12\cdot\frac{e\,U}{m_e\,d}\cdot\frac{L^2}{v_0^2}$$
abgelenkt. Es hat dann die Quergeschwindigkeit $v_y = a\,t$. Danach fliegt es geradlinig weiter, unter dem
Winkel $\alpha$ mit $\tan\alpha = v_y/v_0$.

```plot
x: [-1, 7]
y: [-1.5, 2.6]
gleich: true
kurven:
  - { x: "t", y: "0.1*t^2", t: [0, 4], farbe: 0 }
  - { x: "t", y: "1.6 + 0.8*(t-4)", t: [4, 5.6], farbe: 0, gestrichelt: true }
  - { x: "t", y: "0", t: [-1, 0], farbe: 0 }
strecken:
  - { von: [0, 2], nach: [4, 2], farbe: 1 }
  - { von: [0, -1], nach: [4, -1], farbe: 2 }
vektoren:
  - { von: [2, 0.4], nach: [2, 1.1], label: "F = eU/d", farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "v₀" }
  - { x: 4, y: 1.6, label: "Austritt, abgelenkt um y" }
  - { x: 1, y: 2.25, label: "positive Platte" }
  - { x: 1, y: -1.25, label: "negative Platte" }
beschriftung: "Bahn eines Elektrons, das waagrecht zwischen zwei Kondensatorplatten fliegt. Die obere Platte ist positiv. Die konstante Kraft nach oben (violett) biegt die Bahn zu einer Parabel. Nach dem Austritt fliegt das Elektron geradlinig weiter (gestrichelt). Die Feldlinien zeigen senkrecht von oben nach unten, die Bahn folgt ihnen nicht."
```

:::beispiel[Ablenkung eines Elektronenstrahls]
Ein Elektron fliegt mit $v_0 = 3{,}0\cdot 10^{7}\,\text{m/s}$ mittig zwischen zwei Platten. Die Platten sind
$L = 4{,}0\,\text{cm}$ lang und $d = 8{,}0\,\text{mm}$ voneinander entfernt, die Spannung ist $U = 120\,\text{V}$.

**Schritt 1, Querbeschleunigung:**
$a = \dfrac{e\,U}{m_e\,d} = \dfrac{1{,}602\cdot 10^{-19}\,\text{C}\cdot 120\,\text{V}}{9{,}109\cdot 10^{-31}\,\text{kg}\cdot 8{,}0\cdot 10^{-3}\,\text{m}} = 2{,}64\cdot 10^{15}\,\text{m/s}^2$.

**Schritt 2, Flugzeit:** $t = L/v_0 = 0{,}040\,\text{m} / 3{,}0\cdot 10^{7}\,\text{m/s} = 1{,}33\cdot 10^{-9}\,\text{s}$.

**Schritt 3, Ablenkung:** $y = \tfrac12\,a\,t^2 = \tfrac12\cdot 2{,}64\cdot 10^{15}\cdot(1{,}33\cdot 10^{-9})^2\,\text{m} = 2{,}3\cdot 10^{-3}\,\text{m} = 2{,}3\,\text{mm}$.
Das ist weniger als der halbe Plattenabstand ($4{,}0\,\text{mm}$). Das Elektron trifft die Platte also nicht.

**Schritt 4, Winkel:** $v_y = a\,t = 3{,}5\cdot 10^{6}\,\text{m/s}$ und $\tan\alpha = 3{,}5\cdot 10^{6} / 3{,}0\cdot 10^{7} = 0{,}117$, also
$\alpha = 6{,}7^\circ$.
:::

Setzt man $v_0^2 = 2\,e\,U_B/m_e$ aus der Elektronenkanone ein, kürzen sich Ladung und Masse heraus:
$$y = \frac{U\,L^2}{4\,d\,U_B} \qquad\text{und}\qquad \tan\alpha = \frac{U\,L}{2\,d\,U_B}.$$
Die Ablenkung hängt dann nur von Spannungen und Abmessungen ab, nicht vom Teilchen. Ein Proton, das durch
dieselbe Spannung beschleunigt wurde, wird genau gleich stark abgelenkt, nur in die Gegenrichtung.

:::achtung[Fehler: Plattenabstand statt Plattenlänge für die Flugzeit]
**Falsche Rechnung:** Im Beispiel rechnet jemand die Flugzeit mit dem Plattenabstand,
$t = d/v_0 = 8{,}0\cdot 10^{-3}\,\text{m} / 3{,}0\cdot 10^{7}\,\text{m/s}$, und erhält $y = 0{,}094\,\text{mm}$.

**Richtig:** Die Flugzeit bestimmt die Bewegung **parallel** zu den Platten. Das Elektron legt dabei die
**Länge** $L = 4{,}0\,\text{cm}$ zurück. Also $t = L/v_0$. Der Abstand $d$ kommt nur in der Feldstärke
$E = U/d$ vor. Mit dem richtigen $t$ ist $y = 2{,}3\,\text{mm}$.
:::

:::achtung[Fehler: „Das Elektron behält nach dem Kondensator seine Geschwindigkeit“]
**Falsche Überlegung:** „Das Elektron fliegt mit $3{,}0\cdot 10^{7}\,\text{m/s}$ hinein. Das Feld lenkt es nur ab,
also ist es danach genau so schnell.“

**Richtig:** Die waagrechte Geschwindigkeit bleibt gleich, aber dazu kommt $v_y = 3{,}5\cdot 10^{6}\,\text{m/s}$.
Der Betrag ist danach $\sqrt{(3{,}0\cdot 10^{7})^2 + (3{,}5\cdot 10^{6})^2}\,\text{m/s} = 3{,}02\cdot 10^{7}\,\text{m/s}$. Das
Elektron ist etwas schneller geworden. Das Feld hat Arbeit verrichtet, weil es das Elektron in
Kraftrichtung verschoben hat.
:::

```aufgabe
id: p12-ablenkung
titel: Ablenkung im Kondensator
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Elektron fliegt mit $v_0 = 2{,}0\cdot 10^{7}\,\text{m/s}$ parallel zu den Platten in einen Kondensator. Die Platten sind $5{,}0\,\text{cm}$ lang und $1{,}0\,\text{cm}$ voneinander entfernt, die Spannung beträgt $50\,\text{V}$. Um wie viele Millimeter ist es beim Austritt abgelenkt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "0.5*1.602e-19*(50/0.010)/9.109e-31*(0.050/2.0e7)^2*1000"
    einheit: "mm"
    anzeige: '2{,}75'
    fehler:
      - wert: "1.602e-19*(50/0.010)/9.109e-31*(0.050/2.0e7)^2*1000"
        meldung: |
          Der Faktor $\tfrac12$ fehlt. Aus der Ruhe in Querrichtung gilt $y = \tfrac12\,a\,t^2$.
      - wert: "0.5*1.602e-19*(50/0.010)/9.109e-31*(0.010/2.0e7)^2*1000"
        meldung: |
          Für die Flugzeit zählt die **Länge** der Platten, nicht ihr Abstand: $t = L/v_0$.
hinweise:
  - 'Wie beim waagrechten Wurf: $x = v_0 t$, $y = \tfrac12 a t^2$.'
  - '$a = eE/m_e$ mit $E = U/d$. Die Flugzeit ist $t = L/v_0$.'
gefuehrt:
  - text: Wie groß ist die Feldstärke zwischen den Platten (in V/m)?
    teil:
      typ: zahl
      loesung: "50/0.010"
      einheit: "V/m"
    erklaerung: '$E = U/d = 50\,\text{V}/0{,}010\,\text{m} = 5000\,\text{V/m}$.'
  - text: Berechne die Querbeschleunigung in $10^{14}\,\text{m/s}^2$.
    teil:
      typ: zahl
      loesung: "1.602e-19*5000/9.109e-31/1e14"
      fehler:
        - wert: "1.602e-19*5000*9.109e-31/1e14"
          meldung: Nach dem Grundgesetz ist $a = F/m$. Teile durch die Masse.
    erklaerung: '$a = eE/m_e = 1{,}602\cdot 10^{-19}\cdot 5000/9{,}109\cdot 10^{-31}\,\text{m/s}^2 = 8{,}79\cdot 10^{14}\,\text{m/s}^2$.'
  - text: Wie lange fliegt das Elektron zwischen den Platten (in ns)?
    teil:
      typ: zahl
      loesung: "0.050/2.0e7*1e9"
      einheit: "ns"
    erklaerung: '$t = L/v_0 = 0{,}050\,\text{m}/2{,}0\cdot 10^{7}\,\text{m/s} = 2{,}5\cdot 10^{-9}\,\text{s} = 2{,}5\,\text{ns}$.'
  - text: Berechne die Ablenkung $y = \tfrac12 a t^2$ (in mm).
    teil:
      typ: zahl
      loesung: "0.5*8.795e14*(2.5e-9)^2*1000"
      einheit: "mm"
    erklaerung: '$y = \tfrac12\cdot 8{,}79\cdot 10^{14}\cdot(2{,}5\cdot 10^{-9})^2\,\text{m} = 2{,}75\cdot 10^{-3}\,\text{m} = 2{,}75\,\text{mm}$.'
loesung: |
  **Feld und Beschleunigung:** $E = U/d = 50\,\text{V}/0{,}010\,\text{m} = 5000\,\text{V/m}$, $a = eE/m_e = 8{,}79\cdot 10^{14}\,\text{m/s}^2$.
  ---
  **Flugzeit im Kondensator:** $t = L/v_0 = 0{,}050\,\text{m}/2{,}0\cdot 10^{7}\,\text{m/s} = 2{,}5\cdot 10^{-9}\,\text{s}$.
  ---
  **Ablenkung:** $y = \tfrac12 a t^2 = \tfrac12\cdot 8{,}79\cdot 10^{14}\,\tfrac{\text{m}}{\text{s}^2}\cdot(2{,}5\cdot 10^{-9}\,\text{s})^2 = 2{,}75\cdot 10^{-3}\,\text{m} = 2{,}75\,\text{mm}$. Das ist weniger als der halbe Plattenabstand von $5\,\text{mm}$, das Elektron kommt also durch.
```

```aufgabe
id: p12-ablenk-proportional
titel: Wie ändert sich die Ablenkung?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Für die Ablenkung eines Elektronenstrahls gilt $y = \dfrac{U\,L^2}{4\,d\,U_B}$. Man verdoppelt die Ablenkspannung $U$ und vervierfacht zugleich die Beschleunigungsspannung $U_B$. Auf das Wievielfache ändert sich $y$? Gib den Faktor als Dezimalzahl an.
teile:
  - typ: zahl
    loesung: "2/4"
    anzeige: '0{,}5'
    fehler:
      - wert: "2*4"
        meldung: |
          $U_B$ steht im **Nenner**. Schnellere Elektronen sind kürzer im Feld und werden weniger abgelenkt.
      - wert: "2/2"
        meldung: |
          In dieser Formel steht $U_B$ nicht unter einer Wurzel. Vierfaches $U_B$ gibt den Faktor $\tfrac14$.
hinweise:
  - 'Ersetze $U$ durch $2U$ und $U_B$ durch $4U_B$.'
loesung: |
  **Ansatz:** Proportionalitätsschluss: $y \sim U/U_B$.
  ---
  Doppelte Ablenkspannung gibt den Faktor $2$, vierfache Beschleunigungsspannung den Faktor $\tfrac14$. Zusammen $\tfrac24 = 0{,}5$. Die Ablenkung halbiert sich.
```

```aufgabe
id: p12-bahn-qualitativ
titel: Elektron oder Proton, wer wird stärker abgelenkt?
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Ein Elektron und ein Proton werden jeweils aus der Ruhe durch **dieselbe** Spannung $U_B$ beschleunigt. Dann fliegen sie nacheinander durch denselben Ablenkkondensator. Was beobachtet man?
teile:
  - typ: auswahl
    optionen:
      - "Beide werden gleich stark abgelenkt, aber in entgegengesetzte Richtungen."
      - "Das Elektron wird viel stärker abgelenkt, weil es so leicht ist."
      - "Das Proton wird stärker abgelenkt, weil es länger im Feld bleibt."
      - "Beide werden gleich stark in dieselbe Richtung abgelenkt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Das Elektron wird zwar stärker beschleunigt. Es ist aber auch viel schneller und deshalb kürzer im Feld. Beides hebt sich genau auf: $y = UL^2/(4dU_B)$ enthält keine Masse.
      - wert: 2
        meldung: |
          Das Proton bleibt länger im Feld, wird aber viel schwächer beschleunigt. Beides hebt sich genau auf. Die Ablenkung hängt nicht von der Masse ab.
      - wert: 3
        meldung: |
          Die Ladungen haben **entgegengesetzte** Vorzeichen. Die Kraft im Feld zeigt deshalb in entgegengesetzte Richtungen.
hinweise:
  - Schau dir die Formel $y = \dfrac{U L^2}{4 d U_B}$ an. Kommt die Masse oder die Ladung darin vor?
  - Welche Größe bestimmt die Richtung der Kraft im Feld?
loesung: |
  **Ansatz:** Mit $v_0^2 = 2qU_B/m$ wird die Ablenkung $y = \dfrac{U\,L^2}{4\,d\,U_B}$. Masse und Ladungsbetrag kürzen sich heraus.
  ---
  Beide Teilchen werden also **gleich stark** abgelenkt. Die Kraft $qE$ zeigt aber für die positive Ladung in Feldrichtung und für die negative entgegen.
  ---
  Ergebnis: gleich große Ablenkung in entgegengesetzte Richtungen. Daraus folgt umgekehrt: Mit elektrischen Feldern allein kann man Teilchen gleicher Energie pro Ladung nicht nach der Masse trennen.
```

```aufgabe
id: p12-teilchen-begruenden
titel: Warum darf man die Gewichtskraft weglassen?
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  In allen Rechnungen zu Elektronen im Kondensator wird die Gewichtskraft weggelassen. Begründe das mit einer kurzen Rechnung für ein Elektron in einem Feld von $5000\,\text{V/m}$. Nenne auch einen Fall aus diesem Kapitel, in dem man die Gewichtskraft **nicht** weglassen darf.
teile:
  - typ: text
    muster: |
      Die elektrische Kraft ist $F = eE = 1{,}602\cdot 10^{-19}\,\text{C}\cdot 5000\,\text{V/m} = 8{,}0\cdot 10^{-16}\,\text{N}$. Die Gewichtskraft ist $m_e g = 9{,}109\cdot 10^{-31}\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 8{,}9\cdot 10^{-30}\,\text{N}$. Die elektrische Kraft ist also rund $10^{14}$-mal größer, die Gewichtskraft spielt keine Rolle. Nicht weglassen darf man sie beim Millikan-Versuch: Die Öltröpfchen (rund $10^{-15}\,\text{kg}$) sind etwa $10^{15}$-mal schwerer als ein Elektron und tragen nur wenige Elementarladungen. Dort sind beide Kräfte gleich groß.
hinweise:
  - Berechne beide Kräfte und vergleiche ihre Größenordnung.
  - In welchem Versuch dieses Kapitels halten sich elektrische Kraft und Gewichtskraft gerade das Gleichgewicht?
loesung: |
  **Ansatz:** Wir vergleichen die Beträge beider Kräfte.
  ---
  **Elektrisch:** $F = eE = 8{,}0\cdot 10^{-16}\,\text{N}$. **Gewicht:** $m_e g = 8{,}9\cdot 10^{-30}\,\text{N}$. Das Verhältnis ist etwa $10^{14}$.
  ---
  **Gegenbeispiel:** Beim Millikan-Versuch sind Tröpfchen schwer und nur schwach geladen. Dort ist die Gewichtskraft genau so groß wie die elektrische Kraft. Siehe [Der Millikan-Versuch](/lernen/physik1/elektrostatik/der-millikan-versuch).
```

```reflexion
frage: Beim Ablenken hat das Elektron nach dem Kondensator etwas mehr Bewegungsenergie als vorher. Woher kommt sie? Und um wie viel Elektronvolt nimmt sie zu, wenn es um $y$ in Richtung der positiven Platte abgelenkt wurde?
antwort: |
  Das Feld verrichtet Arbeit, weil es das Elektron ein Stück in Kraftrichtung verschiebt, nämlich um $y$ quer zu den Platten. Die Energiezunahme ist $e\,E\,y$. Mit $E = U/d$ ist das $e\cdot U\cdot y/d$, in Elektronvolt also $U\cdot y/d$. Wird das Elektron zum Beispiel um ein Viertel des Plattenabstands abgelenkt, gewinnt es ein Viertel der Ablenkspannung in eV. Das Elektron läuft dabei zum höheren Potential hin, denn es ist negativ.
```

```aufgabe
id: p12-schirm
titel: Der Leuchtfleck auf dem Schirm
niveau: 3
lernziel: 9
kompetenz: anwenden
angabe: |
  In einer Elektronenstrahlröhre werden Elektronen durch $U_B = 1500\,\text{V}$ beschleunigt. Dann fliegen sie mittig durch einen Ablenkkondensator (Plattenlänge $L = 3{,}0\,\text{cm}$, Plattenabstand $d = 6{,}0\,\text{mm}$, Ablenkspannung $U = 60\,\text{V}$). Der Leuchtschirm steht $D = 20\,\text{cm}$ hinter dem Ende der Platten.

  a) Um wie viel ist der Strahl beim Verlassen der Platten abgelenkt (in mm)?

  b) Unter welchem Winkel fliegt er danach weiter (in Grad)?

  c) Wie weit liegt der Leuchtfleck auf dem Schirm von der Mitte entfernt (in mm)?
teile:
  - typ: zahl
    label: a) y in mm
    loesung: "60*0.030^2/(4*6.0e-3*1500)*1000"
    einheit: "mm"
    anzeige: '1{,}5'
  - typ: zahl
    label: b) Winkel in Grad
    loesung: "inGrad(atan(60*0.030/(2*6.0e-3*1500)))"
    einheit: "°"
    anzeige: '5{,}71'
  - typ: zahl
    label: c) Y in mm
    loesung: "(60*0.030^2/(4*6.0e-3*1500) + 0.20*60*0.030/(2*6.0e-3*1500))*1000"
    einheit: "mm"
    anzeige: '21{,}5'
    fehler:
      - wert: "0.20*60*0.030/(2*6.0e-3*1500)*1000"
        meldung: |
          Das ist nur die Ablenkung auf der geraden Strecke hinter den Platten. Die Ablenkung $y$ innerhalb der Platten kommt noch dazu.
hinweise:
  - 'Innerhalb der Platten: $y = \dfrac{U L^2}{4 d U_B}$ und $\tan\alpha = \dfrac{U L}{2 d U_B}$.'
  - 'Hinter den Platten fliegt der Strahl geradlinig. Auf der Strecke $D$ kommt $D\tan\alpha$ dazu.'
loesung: |
  **Modell:** Innerhalb der Platten eine Parabel wie beim waagrechten Wurf, danach eine Gerade unter dem Winkel $\alpha$.
  ---
  **a)** $y = \dfrac{U L^2}{4 d U_B} = \dfrac{60\,\text{V}\cdot(0{,}030\,\text{m})^2}{4\cdot 6{,}0\cdot 10^{-3}\,\text{m}\cdot 1500\,\text{V}} = 1{,}5\cdot 10^{-3}\,\text{m} = 1{,}5\,\text{mm}$. Die Volt kürzen sich, es bleiben Meter.
  ---
  **b)** $\tan\alpha = \dfrac{U L}{2 d U_B} = \dfrac{60\cdot 0{,}030}{2\cdot 6{,}0\cdot 10^{-3}\cdot 1500} = 0{,}10$, also $\alpha = 5{,}71^\circ$.
  ---
  **c)** Auf der Strecke $D$ kommt $D\tan\alpha = 0{,}20\,\text{m}\cdot 0{,}10 = 20\,\text{mm}$ dazu. Gesamt: $Y = 1{,}5\,\text{mm} + 20\,\text{mm} = 21{,}5\,\text{mm}$.
  ---
  **Probe:** Die gerade Verlängerung der Austrittsrichtung schneidet die Mittelachse genau in der Mitte der Platten. Von dort sind es $21{,}5\,\text{cm}$ bis zum Schirm, und $0{,}215\,\text{m}\cdot 0{,}10 = 21{,}5\,\text{mm}$. Das stimmt überein.
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Aufgaben aus früheren Kapiteln gemischt:
[Größen, Einheiten, Messen](/lernen/physik1/groessen-einheiten-messen), [Kinematik](/lernen/physik1/kinematik),
[Dynamik](/lernen/physik1/dynamik), [Arbeit, Energie, Impuls](/lernen/physik1/arbeit-energie-impuls) und
[Kreisbewegung und Gravitation](/lernen/physik1/kreisbewegung-gravitation). Das ist Absicht: In der Prüfung
steht nicht dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren passt?“
musst du nichts rechnen, sondern nur den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p12-mix-gravitation
titel: Zwei Bleikugeln ziehen einander an
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Zwei Bleikugeln mit je $10\,\text{kg}$ haben einen Mittelpunktsabstand von $20\,\text{cm}$. Wie groß ist die Gravitationskraft zwischen ihnen (in $10^{-7}\,\text{N}$)? ($G = 6{,}674\cdot 10^{-11}\,\text{N}\,\text{m}^2/\text{kg}^2$)
teile:
  - typ: zahl
    loesung: "6.674e-11*10*10/0.20^2/1e-7"
    anzeige: '1{,}67'
    fehler:
      - wert: "6.674e-11*10*10/0.20/1e-7"
        meldung: |
          Wie beim Coulomb-Gesetz steht der Abstand im **Quadrat** im Nenner.
hinweise:
  - 'Gravitationsgesetz $F = G\,m_1 m_2/r^2$, mit $r$ in Metern.'
loesung: |
  **Ansatz:** Gravitationsgesetz aus der Lektion [Das Gravitationsgesetz](/lernen/physik1/kreisbewegung-gravitation/das-gravitationsgesetz). Es hat dieselbe Form wie das Coulomb-Gesetz.
  ---
  **Rechnung:** $F = 6{,}674\cdot 10^{-11}\,\tfrac{\text{N}\,\text{m}^2}{\text{kg}^2}\cdot\dfrac{10\,\text{kg}\cdot 10\,\text{kg}}{(0{,}20\,\text{m})^2} = 1{,}67\cdot 10^{-7}\,\text{N}$. Das ist winzig. Zwei Kugeln mit nur $1\,\mu\text{C}$ Ladung im selben Abstand stießen einander mit $0{,}22\,\text{N}$ ab, über eine Million Mal stärker.
```

```aufgabe
id: p12-mix-energie
titel: Energiesatz in der Achterbahn
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Achterbahnwagen rollt aus der Ruhe $20\,\text{m}$ tief hinab. Reibung vernachlässigen wir. Wie schnell ist er unten (in m/s)?
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*20)"
    einheit: "m/s"
    anzeige: '19{,}8'
    fehler:
      - wert: "2*9.81*20"
        meldung: |
          Das ist $v^2$. Zum Schluss fehlt noch die Wurzel.
      - wert: "sqrt(9.81*20)"
        meldung: |
          Der Faktor $2$ fehlt. Aus $m g h = \tfrac12 m v^2$ folgt $v^2 = 2 g h$.
hinweise:
  - 'Lageenergie wird zu Bewegungsenergie: $m g h = \tfrac12 m v^2$. Die Masse kürzt sich.'
loesung: |
  **Ansatz:** Energiesatz aus der Lektion [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz): $m g h = \tfrac12 m v^2$.
  ---
  **Rechnung:** $v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 20\,\text{m}} = 19{,}8\,\text{m/s}$. Genau so rechnet man ein Elektron: $e U = \tfrac12 m v^2$ statt $m g h = \tfrac12 m v^2$.
```

```aufgabe
id: p12-mix-kinematik
titel: Wie weit fliegt ein Elektron in zwei Nanosekunden?
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Elektron startet aus der Ruhe in einem homogenen Feld und wird mit $3{,}0\cdot 10^{15}\,\text{m/s}^2$ beschleunigt.

  a) Welche Strecke legt es in $2{,}0\,\text{ns}$ zurück (in mm)?

  b) Wie schnell ist es dann (in $10^{6}\,\text{m/s}$)?
teile:
  - typ: zahl
    label: a) s in mm
    loesung: "0.5*3.0e15*(2.0e-9)^2*1000"
    einheit: "mm"
    anzeige: '6{,}0'
    fehler:
      - wert: "3.0e15*(2.0e-9)^2*1000"
        meldung: |
          Der Faktor $\tfrac12$ fehlt. Aus der Ruhe gilt $s = \tfrac12 a t^2$.
  - typ: zahl
    label: b) v in 10⁶ m/s
    loesung: "3.0e15*2.0e-9/1e6"
    anzeige: '6{,}0'
    fehler:
      - wert: "0.5*3.0e15*2.0e-9/1e6"
        meldung: |
          Die Geschwindigkeit wächst linear: $v = a\,t$, ohne den Faktor $\tfrac12$.
hinweise:
  - 'Gleichmäßig beschleunigte Bewegung aus der Ruhe: $s = \tfrac12 a t^2$ und $v = a t$.'
  - 'Nano heißt $10^{-9}$.'
loesung: |
  **Ansatz:** Im homogenen Feld ist die Kraft konstant, also auch die Beschleunigung. Es gelten die Gesetze aus [Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung).
  ---
  **a)** $s = \tfrac12\cdot 3{,}0\cdot 10^{15}\,\tfrac{\text{m}}{\text{s}^2}\cdot(2{,}0\cdot 10^{-9}\,\text{s})^2 = 6{,}0\cdot 10^{-3}\,\text{m} = 6{,}0\,\text{mm}$.
  ---
  **b)** $v = a\,t = 3{,}0\cdot 10^{15}\,\tfrac{\text{m}}{\text{s}^2}\cdot 2{,}0\cdot 10^{-9}\,\text{s} = 6{,}0\cdot 10^{6}\,\text{m/s}$. Kontrolle über $v^2 = 2as$: $\sqrt{2\cdot 3{,}0\cdot 10^{15}\cdot 6{,}0\cdot 10^{-3}} = 6{,}0\cdot 10^{6}$.
```

```aufgabe
id: p12-mix-einheiten
titel: Einheiten und Vorsilben beim Kondensator
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Kondensator mit $0{,}47\,\mu\text{F}$ liegt an $230\,\text{V}$. Berechne die gespeicherte Energie in mJ. Gib das Ergebnis mit drei signifikanten Stellen an.
teile:
  - typ: zahl
    loesung: "0.5*0.47e-6*230^2*1000"
    einheit: "mJ"
    anzeige: '12{,}4'
    fehler:
      - wert: "0.5*0.47*230^2*1000"
        meldung: |
          Die Vorsilbe Mikro fehlt. $0{,}47\,\mu\text{F} = 0{,}47\cdot 10^{-6}\,\text{F}$.
      - wert: "0.5*0.47e-6*230^2"
        meldung: |
          Das ist die Energie in Joule. Für Millijoule musst du noch mit $1000$ multiplizieren.
hinweise:
  - 'Erst in Grundeinheiten umrechnen, dann $W = \tfrac12 C U^2$, dann in mJ umrechnen.'
loesung: |
  **Ansatz:** $W = \tfrac12\,C\,U^2$ mit $C$ in Farad. Vorsilben wie in [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
  ---
  **Rechnung:** $W = \tfrac12\cdot 0{,}47\cdot 10^{-6}\,\text{F}\cdot(230\,\text{V})^2 = 1{,}243\cdot 10^{-2}\,\text{J} = 12{,}4\,\text{mJ}$. Die Angabe verlangt drei signifikante Stellen. Streng genommen ist die Kapazität $0{,}47\,\mu\text{F}$ nur mit zwei Stellen angegeben. Nach den Rundungsregeln wäre deshalb auch $12\,\text{mJ}$ vertretbar.
```

```aufgabe
id: p12-mix-verfahren-spannung
titel: "Welches Verfahren passt? Spannung zwischen zwei Punkten"
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Gesucht ist jeweils die Spannung zwischen zwei Punkten. Welche Aussage über das passende Verfahren ist richtig? (Mehrfachauswahl, ohne zu rechnen)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Zwischen zwei Punkten im Plattenkondensator: $U = E\\cdot d$, mit $d$ entlang der Feldlinien."
      - "Zwischen zwei Abständen von einer Punktladung: Differenz der Potentiale $kQ/r_A - kQ/r_B$."
      - "Zwischen zwei Abständen von einer Punktladung: $U = E\\cdot d$ mit der Feldstärke am näheren Punkt."
      - "Zwei Punkte auf derselben Äquipotentialfläche: $U = 0$, egal wie weit sie auseinander liegen."
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: |
          $U = E\cdot d$ gilt nur im **homogenen** Feld. Um eine Punktladung wird das Feld nach außen schwächer, die Formel liefert dort zu viel.
      - wert: [0, 1]
        meldung: |
          Auch die letzte Aussage stimmt. Auf einer Äquipotentialfläche haben alle Punkte dasselbe Potential, die Differenz ist null.
hinweise:
  - Frag bei jeder Situation zuerst, ob das Feld homogen ist.
  - Was bedeutet es, wenn zwei Punkte dasselbe Potential haben?
loesung: |
  **Entscheidungsfrage:** Ist das Feld homogen? Dann $U = E\cdot d$. Wenn nicht, braucht man die Potentiale.
  ---
  Plattenkondensator: homogen, $U = E\cdot d$. Punktladung: nicht homogen, also $\varphi_A - \varphi_B$ mit $\varphi = kQ/r$. Äquipotentialfläche: gleiches Potential, $U = 0$.
  ---
  Die dritte Aussage ist falsch. Mit der Feldstärke am näheren Punkt überschätzt man die Spannung, weil das Feld weiter außen schwächer ist.
```

```aufgabe
id: p12-mix-verfahren-teilchen
titel: "Welches Verfahren passt? Teilchen im Feld"
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Ordne zu: Für welche Fragestellung ist der **Energiesatz** der kürzeste Weg, ohne dass man die Zeit braucht?
teile:
  - typ: auswahl
    optionen:
      - "Wie schnell ist ein Elektron, nachdem es aus der Ruhe $800\\,\\text{V}$ durchlaufen hat?"
      - "Wie weit ist ein Elektron nach $3\\,\\text{ns}$ quer zu den Platten abgelenkt?"
      - "Wie lange braucht ein Elektron, um einen $5\\,\\text{cm}$ langen Kondensator zu durchfliegen?"
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Hier ist die Zeit gegeben und eine Strecke gesucht. Das ist Kinematik mit $y = \tfrac12 a t^2$, nicht der Energiesatz.
      - wert: 2
        meldung: |
          Gefragt ist eine Zeit. Der Energiesatz enthält keine Zeit. Hier hilft $t = L/v_0$.
hinweise:
  - Der Energiesatz verbindet Spannung und Geschwindigkeit, er enthält aber keine Zeit.
  - Welche der drei Fragen enthält weder eine gegebene noch eine gesuchte Zeit?
loesung: |
  **Regel:** Hängen nur Anfangs- und Endzustand zusammen (Spannung und Geschwindigkeit), ist der Energiesatz $qU = \tfrac12 m v^2$ am schnellsten.
  ---
  Geht es um Zeiten oder um Strecken nach einer bestimmten Zeit, braucht man die Kinematik: $x = v_0 t$, $y = \tfrac12 a t^2$, $a = qE/m$.
  ---
  Deshalb passt der Energiesatz zur ersten Frage. Die beiden anderen fragen nach Zeit oder nach einem Zustand zu einer gegebenen Zeit.
```

```aufgabe
id: p12-mix-proton-schweben
titel: Ein Proton schweben lassen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Wie stark muss ein senkrecht nach oben gerichtetes elektrisches Feld sein, damit ein Proton ($m_p = 1{,}673\cdot 10^{-27}\,\text{kg}$) gegen die Gewichtskraft schwebt? Gib das Ergebnis in $10^{-7}\,\text{V/m}$ an.
teile:
  - typ: zahl
    loesung: "1.673e-27*9.81/1.602e-19/1e-7"
    anzeige: '1{,}02'
    fehler:
      - wert: "1.602e-19/(1.673e-27*9.81)/1e-7"
        meldung: |
          Du hast den Kehrwert berechnet. Aus $eE = mg$ folgt $E = mg/e$.
hinweise:
  - 'Gleichgewicht wie in [Kraft und Trägheit](/lernen/physik1/dynamik/kraft-und-traegheit-das-erste-newtonsche-axiom): $e\,E = m_p\,g$.'
  - Stelle nach $E$ um.
loesung: |
  **Ansatz:** Schweben heißt, die elektrische Kraft gleicht die Gewichtskraft aus: $e\,E = m_p\,g$.
  ---
  **Rechnung:** $E = \dfrac{m_p\,g}{e} = \dfrac{1{,}673\cdot 10^{-27}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}}{1{,}602\cdot 10^{-19}\,\text{C}} = 1{,}02\cdot 10^{-7}\,\text{V/m}$.
  ---
  **Deutung:** Ein Zehnmillionstel Volt pro Meter genügt. Schon das schwache Schönwetterfeld der Atmosphäre (rund $100\,\text{V/m}$) ist eine Milliarde Mal stärker. Für Protonen und Elektronen spielt die Gewichtskraft deshalb praktisch nie eine Rolle.
```

```aufgabe
id: p12-mix-bohr
titel: Das Elektron auf der Kreisbahn
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Im einfachsten Atommodell kreist das Elektron des Wasserstoffatoms auf einer Kreisbahn mit dem Radius $r = 5{,}29\cdot 10^{-11}\,\text{m}$ um das Proton. Die Coulomb-Kraft liefert die nötige Zentripetalkraft.

  a) Wie schnell ist das Elektron (in $10^{6}\,\text{m/s}$)?

  b) Wie lange dauert ein Umlauf (in $10^{-16}\,\text{s}$)?
teile:
  - typ: zahl
    label: a) v in 10⁶ m/s
    loesung: "sqrt(8.99e9*(1.602e-19)^2/(9.109e-31*5.29e-11))/1e6"
    anzeige: '2{,}19'
    fehler:
      - wert: "8.99e9*(1.602e-19)^2/(9.109e-31*5.29e-11)/1e6"
        meldung: |
          Das ist $v^2$ in der falschen Einheit. Die Wurzel fehlt noch.
  - typ: zahl
    label: b) T in 10⁻¹⁶ s
    loesung: "2*pi*5.29e-11/sqrt(8.99e9*(1.602e-19)^2/(9.109e-31*5.29e-11))/1e-16"
    anzeige: '1{,}52'
hinweise:
  - 'Zentripetalkraft aus [Die Zentripetalkraft](/lernen/physik1/kreisbewegung-gravitation/die-zentripetalkraft): $m v^2/r$. Setze sie gleich der Coulomb-Kraft $k e^2/r^2$.'
  - 'Umlaufzeit: Umfang durch Geschwindigkeit, $T = 2\pi r/v$.'
loesung: |
  **Modell:** Die Coulomb-Kraft zeigt zum Proton, also zum Kreismittelpunkt. Sie ist die Zentripetalkraft: $\dfrac{m_e v^2}{r} = k\,\dfrac{e^2}{r^2}$.
  ---
  **a)** Mal $r$, durch $m_e$: $v^2 = \dfrac{k\,e^2}{m_e\,r}$. Also $v = \sqrt{\dfrac{8{,}99\cdot 10^{9}\cdot(1{,}602\cdot 10^{-19})^2}{9{,}109\cdot 10^{-31}\cdot 5{,}29\cdot 10^{-11}}}\,\text{m/s} = 2{,}19\cdot 10^{6}\,\text{m/s}$.
  ---
  **b)** $T = \dfrac{2\pi r}{v} = \dfrac{2\pi\cdot 5{,}29\cdot 10^{-11}\,\text{m}}{2{,}19\cdot 10^{6}\,\text{m/s}} = 1{,}52\cdot 10^{-16}\,\text{s}$.
  ---
  **Einordnen:** Das Elektron umkreist den Kern rund $1/T \approx 6{,}6\cdot 10^{15}$-mal pro Sekunde, also gut sechs Billiarden Mal. Dass dieses Bild nur ein Modell ist, zeigt [16 Das Bohrsche Atommodell und die Linienspektren](/lernen/physik1/wellenoptik-atom-kernphysik/das-bohrsche-atommodell-und-die-linienspektren).
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben zu einem Sachverhalt,
Punkte und ein Zeitrichtwert. Rechne sie zuerst ohne Hinweise. Schreib in der Prüfung zu jeder
Teilaufgabe den Ansatz, die Formel mit eingesetzten Werten und Einheiten und einen Antwortsatz auf.

```aufgabe
id: p12-pruefung-kondensator
titel: Plattenkondensator komplett
niveau: 3
lernziel: 6
kompetenz: anwenden
punkte: 10
angabe: |
  Richtwert: 15 Minuten.

  Ein Plattenkondensator hat quadratische Platten mit $A = 0{,}050\,\text{m}^2$ im Abstand $d = 2{,}0\,\text{mm}$ (Luft). Er wird an $U = 230\,\text{V}$ angeschlossen.

  a) Berechne die Kapazität (in pF).

  b) Berechne Ladung (in nC) und Feldstärke (in kV/m).

  c) Berechne die gespeicherte Energie (in µJ).

  d) Bei angeschlossener Quelle wird der Zwischenraum vollständig mit einem Kunststoff ($\varepsilon_r = 4$) gefüllt. Wie groß ist jetzt die Ladung (in nC)?
teile:
  - typ: zahl
    label: a) C in pF
    loesung: "8.854e-12*0.050/2.0e-3*1e12"
    einheit: "pF"
    anzeige: '221'
  - typ: zahl
    label: b) Q in nC
    loesung: "8.854e-12*0.050/2.0e-3*230*1e9"
    einheit: "nC"
    anzeige: '50{,}9'
  - typ: zahl
    label: b) E in kV/m
    loesung: "230/2.0e-3/1000"
    einheit: "kV/m"
    anzeige: '115'
  - typ: zahl
    label: c) W in µJ
    loesung: "0.5*8.854e-12*0.050/2.0e-3*230^2*1e6"
    einheit: "µJ"
    anzeige: '5{,}85'
  - typ: zahl
    label: d) Q in nC
    loesung: "4*8.854e-12*0.050/2.0e-3*230*1e9"
    einheit: "nC"
    anzeige: '204'
hinweise:
  - '$C = \varepsilon_0 A/d$, $Q = CU$, $E = U/d$, $W = \tfrac12 CU^2$.'
  - Bei d) bleibt die Spannung gleich, weil die Quelle angeschlossen bleibt. Die Kapazität vervierfacht sich.
loesung: |
  **a)** $C = \varepsilon_0\dfrac{A}{d} = 8{,}854\cdot 10^{-12}\,\tfrac{\text{F}}{\text{m}}\cdot\dfrac{0{,}050\,\text{m}^2}{2{,}0\cdot 10^{-3}\,\text{m}} = 2{,}21\cdot 10^{-10}\,\text{F} = 221\,\text{pF}$.
  ---
  **b)** $Q = CU = 2{,}21\cdot 10^{-10}\,\text{F}\cdot 230\,\text{V} = 5{,}09\cdot 10^{-8}\,\text{C} = 50{,}9\,\text{nC}$. $E = U/d = 230\,\text{V}/0{,}0020\,\text{m} = 1{,}15\cdot 10^{5}\,\text{V/m} = 115\,\text{kV/m}$.
  ---
  **c)** $W = \tfrac12\,C\,U^2 = \tfrac12\cdot 2{,}21\cdot 10^{-10}\,\text{F}\cdot(230\,\text{V})^2 = 5{,}85\cdot 10^{-6}\,\text{J} = 5{,}85\,\mu\text{J}$.
  ---
  **d)** Die Quelle hält $U$ fest. $C' = 4C = 885\,\text{pF}$, also $Q' = C'U = 204\,\text{nC}$. Die Quelle liefert rund $153\,\text{nC}$ nach. Antwort: Die Ladung vervierfacht sich auf $204\,\text{nC}$.
```

```aufgabe
id: p12-pruefung-elektronenkanone
titel: Elektronenstrahl wie im Oszilloskop
niveau: 3
lernziel: 9
kompetenz: anwenden
punkte: 10
angabe: |
  Richtwert: 15 Minuten.

  In einer Elektronenstrahlröhre werden Elektronen aus der Ruhe durch die Anodenspannung $U_B = 2000\,\text{V}$ beschleunigt. Danach fliegen sie mittig und parallel zu den Platten durch einen Ablenkkondensator (Plattenlänge $L = 4{,}0\,\text{cm}$, Abstand $d = 1{,}0\,\text{cm}$, Spannung $U = 100\,\text{V}$).

  a) Mit welcher Geschwindigkeit verlassen die Elektronen die Anode (in $10^{7}\,\text{m/s}$)?

  b) Um wie viele Millimeter sind sie beim Verlassen des Ablenkkondensators abgelenkt?

  c) Unter welchem Winkel (in Grad) gegen die ursprüngliche Richtung fliegen sie danach weiter?
teile:
  - typ: zahl
    label: a) v₀ in 10⁷ m/s
    loesung: "sqrt(2*1.602e-19*2000/9.109e-31)/1e7"
    anzeige: '2{,}65'
  - typ: zahl
    label: b) y in mm
    loesung: "100*0.040^2/(4*0.010*2000)*1000"
    einheit: "mm"
    anzeige: '2{,}0'
  - typ: zahl
    label: c) Winkel in Grad
    loesung: "inGrad(atan(100*0.040/(2*0.010*2000)))"
    einheit: "°"
    anzeige: '5{,}71'
hinweise:
  - 'a) Energiesatz $eU_B = \tfrac12 m v_0^2$.'
  - 'b) Waagrechter Wurf mit $a = eU/(m d)$ und $t = L/v_0$. c) $\tan\alpha = v_y/v_0$ mit $v_y = a t$.'
loesung: |
  **a)** $v_0 = \sqrt{\dfrac{2eU_B}{m_e}} = \sqrt{\dfrac{2\cdot 1{,}602\cdot 10^{-19}\,\text{C}\cdot 2000\,\text{V}}{9{,}109\cdot 10^{-31}\,\text{kg}}} = 2{,}65\cdot 10^{7}\,\text{m/s}$.
  ---
  **b)** $a = \dfrac{eU}{m_e d} = 1{,}76\cdot 10^{15}\,\text{m/s}^2$, $t = L/v_0 = 1{,}51\cdot 10^{-9}\,\text{s}$, $y = \tfrac12 at^2 = 2{,}0\cdot 10^{-3}\,\text{m}$.
  Kürzer: $y = \dfrac{UL^2}{4dU_B} = \dfrac{100\,\text{V}\cdot(0{,}040\,\text{m})^2}{4\cdot 0{,}010\,\text{m}\cdot 2000\,\text{V}} = 2{,}0\,\text{mm}$.
  ---
  **c)** $\tan\alpha = \dfrac{v_y}{v_0} = \dfrac{UL}{2dU_B} = \dfrac{100\cdot 0{,}040}{2\cdot 0{,}010\cdot 2000} = 0{,}10$, also $\alpha = 5{,}7^\circ$. Antwort: Die Elektronen verlassen den Kondensator $2{,}0\,\text{mm}$ abgelenkt und fliegen unter $5{,}7^\circ$ weiter.
```

```aufgabe
id: p12-pruefung-kugelpendel
titel: Geladenes Kugelpendel im Kondensator
niveau: 3
lernziel: 3
kompetenz: modellieren
punkte: 8
angabe: |
  Richtwert: 12 Minuten.

  Eine kleine geladene Kugel (Masse $2{,}0\,\text{g}$) hängt an einem isolierenden Faden zwischen den senkrechten Platten eines Kondensators (Abstand $10\,\text{cm}$, Spannung $5{,}0\,\text{kV}$). Der Faden ist um $\alpha = 10^\circ$ aus der Senkrechten ausgelenkt.

  a) Zeichne das Freikörperbild der Kugel und nenne die drei Kräfte.

  b) Berechne die elektrische Feldstärke (in V/m).

  c) Berechne die Ladung der Kugel (in nC).
teile:
  - typ: text
    label: a) Freikörperbild
    muster: |
      Drei Kräfte greifen an der Kugel an: die Gewichtskraft $mg$ senkrecht nach unten, die elektrische Kraft $qE$ waagrecht (senkrecht zu den Platten) und die Fadenkraft entlang des Fadens schräg nach oben. Die Fadenkraft hält der Summe der beiden anderen das Gleichgewicht.
  - typ: zahl
    label: b) E in V/m
    loesung: "5000/0.10"
    einheit: "V/m"
    anzeige: '50000'
  - typ: zahl
    label: c) q in nC
    loesung: "2.0e-3*9.81*tan(inRad(10))/(5000/0.10)*1e9"
    einheit: "nC"
    anzeige: '69{,}2'
hinweise:
  - Auf die Kugel wirken Gewichtskraft (senkrecht), elektrische Kraft (waagrecht) und Fadenkraft.
  - 'Im Gleichgewicht gilt $\tan\alpha = F_{el}/F_G = qE/(mg)$.'
loesung: |
  **a)** Freikörperbild: $mg$ nach unten, $qE$ waagrecht, Fadenkraft entlang des Fadens. Die Kugel ruht, die Summe ist null.
  ---
  **b)** Zwischen den Platten ist das Feld homogen: $E = U/d = 5000\,\text{V}/0{,}10\,\text{m} = 5{,}0\cdot 10^{4}\,\text{V/m}$.
  ---
  **c)** Kräftedreieck: Die Fadenkraft hebt die Resultierende aus $F_G$ und $F_{el}$ auf, also $\tan\alpha = \dfrac{qE}{mg}$.
  ---
  $q = \dfrac{mg\tan\alpha}{E} = \dfrac{2{,}0\cdot 10^{-3}\,\text{kg}\cdot 9{,}81\,\tfrac{\text{m}}{\text{s}^2}\cdot 0{,}176}{5{,}0\cdot 10^{4}\,\text{V/m}} = 6{,}92\cdot 10^{-8}\,\text{C} = 69{,}2\,\text{nC}$.
```

```aufgabe
id: p12-pruefung-quadrat
titel: Vier Ladungen im Quadrat
niveau: 3
lernziel: 3
kompetenz: anwenden
punkte: 10
angabe: |
  Richtwert: 15 Minuten.

  An den Ecken eines Quadrats mit der Seitenlänge $10\,\text{cm}$ sitzen vier Punktladungen: oben links und oben rechts je $+1{,}0\,\mu\text{C}$, unten rechts und unten links je $-1{,}0\,\mu\text{C}$.

  a) Wie weit ist jede Ladung vom Mittelpunkt M des Quadrats entfernt (in cm)?

  b) Berechne Betrag (in $10^{6}\,\text{V/m}$) und Richtung der Feldstärke in M.

  c) Wie groß ist das Potential in M (in V), wenn das Potential im Unendlichen null ist?

  d) Wie viel Arbeit braucht man, um eine kleine Ladung von $1\,\text{nC}$ aus großer Entfernung nach M zu bringen? Erkläre, warum das kein Widerspruch zu b) ist.
teile:
  - typ: zahl
    label: a) r in cm
    loesung: "10/sqrt(2)"
    einheit: "cm"
    anzeige: '7{,}07'
  - typ: zahl
    label: b) E in 10⁶ V/m
    loesung: "4*8.99e9*1.0e-6/(0.10/sqrt(2))^2/sqrt(2)/1e6"
    anzeige: '5{,}09'
  - typ: auswahl
    label: b) Richtung
    optionen:
      - "senkrecht nach unten, von den positiven zu den negativen Ladungen"
      - "senkrecht nach oben"
      - "waagrecht nach rechts"
    richtig: [0]
  - typ: zahl
    label: c) φ in V
    loesung: "0"
    einheit: "V"
    toleranz: 0.5
  - typ: text
    label: d) Arbeit und Deutung
    muster: |
      Die Arbeit ist $W = q\,\varphi_M = 1\,\text{nC}\cdot 0\,\text{V} = 0$. Das ist kein Widerspruch: Die Arbeit hängt vom Potential ab, also von der „Höhe“. Die Feldstärke ist die „Steilheit“. M liegt auf der Höhe null, aber an einem steilen Hang. Auf dem Weg nach M muss man zwar Kräfte überwinden, gewinnt aber unterwegs genauso viel Energie zurück, wie man aufwendet.
hinweise:
  - 'Der Abstand von einer Ecke zum Mittelpunkt ist die halbe Diagonale, $a/\sqrt2$. Alle vier Einzelfelder haben denselben Betrag.'
  - 'Zeichne die vier Einzelfelder ein: von den positiven Ladungen weg, zu den negativen hin. Die waagrechten Anteile heben sich auf. Das Potential ist eine Summe ohne Richtung, $\varphi = \sum kQ_i/r$.'
loesung: |
  **a)** Halbe Diagonale: $r = \dfrac{10\,\text{cm}\cdot\sqrt2}{2} = 7{,}07\,\text{cm}$.
  ---
  **b)** Einzelfeld: $E_1 = 8{,}99\cdot 10^{9}\cdot\dfrac{1{,}0\cdot 10^{-6}}{(0{,}0707)^2}\,\text{V/m} = 1{,}80\cdot 10^{6}\,\text{V/m}$. Jedes Feld zeigt schräg nach unten, unter $45^\circ$. Die waagrechten Anteile heben sich paarweise auf. Die senkrechten addieren sich: $E = 4\cdot 1{,}80\cdot 10^{6}\,\text{V/m}\cdot\cos 45^\circ = 5{,}09\cdot 10^{6}\,\text{V/m}$, nach unten.
  ---
  **c)** $\varphi_M = k\,\dfrac{(+1 + 1 - 1 - 1)\cdot 10^{-6}\,\text{C}}{0{,}0707\,\text{m}} = 0\,\text{V}$. Die Beiträge haben Vorzeichen und heben sich auf.
  ---
  **d)** $W = q\,\varphi_M = 0$. Starkes Feld und Potential null passen zusammen: Die Feldstärke ist die Steigung des Potentials, nicht sein Wert. Das ist genau der Unterschied aus der Lektion [Feldstärke, Spannung und Potential im homogenen Feld](/lernen/physik1/elektrostatik/feldstaerke-spannung-und-potential-im-homogenen-feld).
```

```aufgabe
id: p12-pruefung-defibrillator
titel: Der Kondensator im Defibrillator
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 10
angabe: |
  Richtwert: 15 Minuten.

  Ein Defibrillator gibt einen kräftigen Stromstoß durch den Brustkorb, um ein flimmerndes Herz wieder in den richtigen Takt zu bringen. Dazu wird ein Kondensator mit $C = 32\,\mu\text{F}$ auf $U_0 = 5{,}0\,\text{kV}$ geladen.

  a) Wie viel Energie speichert der Kondensator (in J)?

  b) Welche Ladung fließt beim vollständigen Entladen (in mC)?

  c) Der Körper zwischen den Elektroden wirkt wie ein Widerstand von $50\,\Omega$. Berechne die Zeitkonstante der Entladung (in ms).

  d) Welche Spannung liegt nach $3{,}0\,\text{ms}$ noch am Kondensator (in V)?
teile:
  - typ: zahl
    label: a) W in J
    loesung: "0.5*32e-6*5000^2"
    einheit: "J"
    anzeige: '400'
  - typ: zahl
    label: b) Q in mC
    loesung: "32e-6*5000*1000"
    einheit: "mC"
    anzeige: '160'
  - typ: zahl
    label: c) τ in ms
    loesung: "50*32e-6*1000"
    einheit: "ms"
    anzeige: '1{,}6'
  - typ: zahl
    label: d) U in V
    loesung: "5000*exp(-3.0e-3/(50*32e-6))"
    einheit: "V"
    anzeige: '767'
hinweise:
  - '$W = \tfrac12 C U^2$ und $Q = C\,U$. Kilo heißt $10^{3}$, Mikro $10^{-6}$.'
  - '$\tau = R\,C$, beim Entladen $U(t) = U_0\,e^{-t/\tau}$.'
loesung: |
  **a)** $W = \tfrac12\,C\,U_0^2 = \tfrac12\cdot 32\cdot 10^{-6}\,\text{F}\cdot(5{,}0\cdot 10^{3}\,\text{V})^2 = 400\,\text{J}$.
  ---
  **b)** $Q = C\,U_0 = 32\cdot 10^{-6}\,\text{F}\cdot 5{,}0\cdot 10^{3}\,\text{V} = 0{,}16\,\text{C} = 160\,\text{mC}$.
  ---
  **c)** $\tau = R\,C = 50\,\Omega\cdot 32\cdot 10^{-6}\,\text{F} = 1{,}6\cdot 10^{-3}\,\text{s} = 1{,}6\,\text{ms}$.
  ---
  **d)** $U = 5000\,\text{V}\cdot e^{-3{,}0/1{,}6} = 5000\,\text{V}\cdot 0{,}153 = 767\,\text{V}$. Antwort: Nach $3\,\text{ms}$ ist die Spannung auf rund $15\,\%$ gefallen. Der größte Teil der Energie ist also in wenigen Millisekunden abgegeben.
```

```aufgabe
id: p12-pruefung-erklaeren
titel: Elektrostatik im Alltag erklären
niveau: 3
lernziel: 1
kompetenz: begruenden
punkte: 6
angabe: |
  Richtwert: 10 Minuten.

  a) Warum zieht ein geriebener Luftballon kleine, ungeladene Papierschnipsel an?

  b) Warum sitzt man bei Gewitter im Auto sicher, aber nicht in einem Cabrio mit Stoffverdeck?
teile:
  - typ: text
    label: a)
    muster: |
      Der geladene Ballon polarisiert das Papier: In den Molekülen verschiebt sich die Ladung ein wenig, sodass die dem Ballon zugewandte Seite entgegengesetzt geladen ist. Diese Seite ist näher am Ballon als die abgewandte, gleichnamige Seite. Weil die Coulomb-Kraft mit dem Abstand abnimmt, überwiegt die Anziehung.
  - typ: text
    label: b)
    muster: |
      Die geschlossene Metallkarosserie wirkt als Faradayscher Käfig. Durch Influenz verschieben sich die Elektronen in der Hülle so, dass das Feld im Inneren null bleibt, und der Blitzstrom fließt außen über die Karosserie ab. Ein Stoffverdeck leitet nicht, der Käfig ist dann nicht geschlossen. Die Gummireifen spielen keine Rolle.
hinweise:
  - 'a) Stichwort Polarisation und Abstandsabhängigkeit der Kraft.'
  - 'b) Stichwort Faradayscher Käfig und Influenz.'
loesung: |
  **Ansatz:** Beide Fragen sind Anwendungen der Lektion [Influenz, Polarisation und Leiter im Feld](/lernen/physik1/elektrostatik/influenz-polarisation-und-leiter-im-feld).
  ---
  **a)** Polarisation: Die ungleichnamige Seite des Papiers ist näher am Ballon. Ihre Anziehung überwiegt die Abstoßung der ferneren gleichnamigen Seite.
  ---
  **b)** Die Metallhülle ist ein Faradayscher Käfig, innen ist das Feld null. Stoff leitet nicht, also gibt es im Cabrio keinen Käfig. Die Reifen sind gegen einen Blitz bedeutungslos.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Ladung gibt es in zwei Sorten, sie ist gequantelt und bleibt erhalten. Zwischen Punktladungen wirkt die Coulomb-Kraft $F = k\,|Q_1|\,|Q_2|/r^2$. (2) Die Feldstärke ist Kraft pro Ladung an einem Ort, das Potential ist Energie pro Ladung an einem Ort, die Spannung ist der Potentialunterschied zwischen zwei Orten. Im homogenen Feld gilt $U = E\cdot d$. (3) Ein Kondensator speichert die Ladung $Q = C\,U$ und die Energie $\tfrac12 C U^2$. Ob $U$ oder $Q$ konstant bleibt, hängt davon ab, ob die Quelle angeschlossen ist.
```

:::zusammenfassung
- **Ladung:** zwei Vorzeichen, gequantelt in Vielfachen von $e = 1{,}602\cdot 10^{-19}\,\text{C}$, erhalten. In
  festen Körpern bewegen sich nur Elektronen. In Leitern verteilt sich Ladung auf der Außenfläche,
  im Inneren ist das Feld null (Faradayscher Käfig). Influenz trennt Ladung in Leitern, Polarisation
  verschiebt sie in Isolatoren.
- **Coulomb-Gesetz:** $F = k\,|Q_1|\,|Q_2|/r^2$ mit $k = 8{,}99\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2$. Beide
  Ladungen spüren gleich große Kräfte. Mehrere Kräfte addiert man als Vektoren.
- **Feld:** $\vec E = \vec F/q$, Punktladung $E = k\,|Q|/r^2$, Kraft $\vec F = q\,\vec E$. Feldlinien zeigen
  die Kraftrichtung, nicht die Bahn. Felder überlagern sich vektoriell.
- **Potential und Spannung:** $\varphi = E_{\text{pot}}/q$, Punktladung $\varphi = kQ/r$. Spannung
  $U = \varphi_A - \varphi_B = W/q$. Im homogenen Feld $U = E\cdot d$. Äquipotentialflächen stehen senkrecht
  auf den Feldlinien.
- **Energie im Feld:** $W = q\,U$, Teilchen aus der Ruhe $q\,U = \tfrac12 m v^2$, $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$.
  Potentielle Energie zweier Ladungen $kQq/r$, negativ heißt gebunden.
- **Kondensator:** $C = Q/U$, Platten $C = \varepsilon_0\varepsilon_r A/d$, Kugel $C = 4\pi\varepsilon_0 R$.
  Energie $\tfrac12 C U^2$. Parallel addieren sich Kapazitäten, in Reihe die Kehrwerte. Angeschlossen
  bleibt $U$, getrennt bleibt $Q$. Laden und Entladen verlaufen exponentiell mit $\tau = RC$.
- **Millikan:** Schweben heißt $q\,U/d = m\,g$. Alle gemessenen Ladungen sind Vielfache von $e$.
- **Teilchen im homogenen Feld:** längs des Feldes Energiesatz, quer zum Feld eine Parabel wie beim
  waagrechten Wurf, $y = U L^2/(4 d U_B)$.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **„Positiv geladen“ als „Protonen dazubekommen“ gedeutet.** In festen Körpern wandern nur Elektronen.
   Training: „Influenz verstehen“ und „Zwei Kugeln durch Influenz laden“.
2. **Beim Berühren jede Ladung einzeln halbiert** statt die Gesamtladung zu verteilen.
   Training: „Zwei Kugeln berühren einander“ und „Drei Kugeln nacheinander berühren“.
3. **Abstand nicht in Meter umgerechnet oder nicht quadriert.** Training: „Coulomb-Kraft berechnen“ und
   „Feld einer Punktladung“.
4. **„Die größere Ladung spürt die größere Kraft.“** Beide Kräfte sind gleich groß. Training: „Welche
   Ladung spürt mehr?“.
5. **Beträge von Kräften oder Feldern einfach addiert,** obwohl sie in verschiedene Richtungen zeigen.
   Training: „Fehler finden in einer Vektorsumme“ und „Feld zwischen zwei ungleich großen positiven Ladungen“.
6. **Feldlinien für Bahnen gehalten.** Training: „Fliegt die Ladung entlang der Feldlinie?“.
7. **Beim Nullpunkt des Feldes die Wurzel vergessen.** Training: „Wo ist das Feld null?“.
8. **Feldstärke und Spannung verwechselt** ($\text{V/m}$ gegen $\text{V}$). Training: „Zwei Fehler in einer
   Rechnung“ und „Feldstärke, Potential oder Spannung?“.
9. **„Spannung fließt“ oder „Spannung an einem Punkt“.** Training: „Fließt die Spannung?“.
10. **Beim Elektron die Richtung vertauscht.** Ein Elektron läuft von selbst zum höheren Potential.
    Training: „Potential zwischen zwei Platten“.
11. **$U = E\cdot d$ im Feld einer Punktladung benutzt.** Training: „Welches Verfahren passt? Spannung
    zwischen zwei Punkten“.
12. **Den Faktor ½ in der Kondensatorenergie vergessen.** Training: „Elko an 12 V“ und „Die Energiebilanz
    beim Laden“.
13. **Beim getrennten Kondensator die Spannung festgehalten.** Training: „Platten auseinanderziehen ohne
    Quelle“ und „Dielektrikum bei getrennter Quelle“.
14. **Reihen- und Parallelschaltung wie bei Widerständen gerechnet.** Training: „Kondensatoren schalten“.
15. **Die Schwebebedingung falsch umgestellt** oder den kleinsten Messwert für $e$ gehalten. Training:
    „Ein schwebendes Öltröpfchen“ und „Die Elementarladung aus einer Messreihe“.
16. **Für die Flugzeit im Kondensator den Plattenabstand genommen.** Training: „Ablenkung im Kondensator“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“,
**3** „sicher, auch in der Prüfung“. Bei einer 1 wiederhole die Lektion und rechne ihre Aufgabe auf
Niveau 3.

1. Eigenschaften der Ladung nennen, in Elementarladungen umrechnen, Ladung beim Berühren verteilen.
2. Influenz, Polarisation, Faradayschen Käfig und Spitzenwirkung erklären.
3. Coulomb-Kräfte berechnen, auch als Vektorsumme in der Ebene.
4. Feldstärke definieren, Feldlinienbilder lesen und Felder überlagern.
5. Feldstärke, Potential und Spannung unterscheiden und im homogenen Feld rechnen.
6. Potential und Energie im Feld einer Punktladung berechnen, mit Joule und Elektronvolt.
7. Kapazität von Platte und Kugel berechnen und Änderungen mit und ohne Quelle vorhersagen.
8. Kondensatorenergie, Schaltungen, Laden und Entladen berechnen.
9. Den Millikan-Versuch beschreiben und Messwerte mit Unsicherheit auswerten.
10. Bahnen geladener Teilchen im homogenen Feld berechnen.

## Mündliche Prüfung

```karten
- id: p12-k-ladung
  frage: Welche Grundeigenschaften hat die elektrische Ladung?
  antwort: |
    Es gibt zwei Sorten, positiv und negativ. Gleichnamige Ladungen stoßen einander ab, ungleichnamige ziehen
    einander an. Ladung ist gequantelt: Jede freie Ladung ist ein ganzzahliges Vielfaches der Elementarladung
    $e = 1{,}602\cdot 10^{-19}\,\text{C}$. Und Ladung bleibt erhalten: In einem abgeschlossenen System ist die
    Gesamtladung konstant. Beim Reiben wird Ladung nur getrennt, nicht erzeugt.
  kernpunkte: ["zwei Vorzeichen, gleichnamig stößt ab", "Quantelung Q = n·e", "Ladungserhaltung", "Reiben trennt nur"]
- id: p12-k-influenz
  frage: Was ist Influenz, und wie kann man damit einen Körper aufladen, ohne ihn zu berühren?
  antwort: |
    Influenz ist die Verschiebung frei beweglicher Elektronen in einem Leiter durch eine Ladung in der Nähe.
    Der Leiter bleibt insgesamt neutral, seine Ladung ist nur getrennt. Zum Aufladen nähert man einen
    geladenen Stab, erdet die Kugel kurz, löst die Erdung und entfernt erst dann den Stab. Die Kugel trägt
    danach Ladung mit dem entgegengesetzten Vorzeichen des Stabes. Die Reihenfolge ist entscheidend.
  kernpunkte: ["Verschiebung freier Elektronen im Leiter", "Gesamtladung bleibt", "Stab nähern, erden, Erdung lösen, Stab weg", "entgegengesetztes Vorzeichen"]
- id: p12-k-polarisation
  frage: Was unterscheidet Polarisation von Influenz, und warum zieht ein geladener Körper auch neutrale Körper an?
  antwort: |
    Influenz betrifft Leiter, dort wandern Elektronen durch den ganzen Körper. Polarisation betrifft
    Isolatoren, dort verschieben sich die Ladungen nur innerhalb der Atome oder Moleküle, oder Dipolmoleküle
    drehen sich. In beiden Fällen liegt die ungleichnamige Ladung näher am geladenen Körper. Weil die
    Coulomb-Kraft mit dem Abstand abnimmt, überwiegt die Anziehung.
  kernpunkte: ["Influenz: Leiter, Elektronen wandern", "Polarisation: Isolator, Verschiebung im Molekül", "ungleichnamige Seite näher", "Kraft nimmt mit Abstand ab"]
- id: p12-k-faraday
  frage: Warum ist das Innere eines Faradayschen Käfigs feldfrei, und wo sitzt die Ladung eines geladenen Leiters?
  antwort: |
    Ein äußeres Feld verschiebt die Elektronen in der leitenden Hülle so lange, bis das Feld der verschobenen
    Ladungen das äußere Feld im Inneren genau aufhebt. Erst dann herrscht Gleichgewicht. Überschüssige Ladung
    sitzt auf der Außenfläche, weil gleichnamige Ladungen einander abstoßen und so weit wie möglich
    auseinanderrücken. Deshalb schützt die Metallkarosserie eines Autos bei Blitzschlag, nicht die Reifen.
  kernpunkte: ["Influenz hebt Feld innen auf", "Gleichgewicht: Feld im Leiter null", "Ladung auf der Außenfläche", "Auto: Karosserie, nicht Reifen"]
- id: p12-k-coulomb
  frage: Formuliere das Coulomb-Gesetz und vergleiche es mit dem Gravitationsgesetz.
  antwort: |
    Zwei Punktladungen üben aufeinander die Kraft $F = k\,|Q_1|\,|Q_2|/r^2$ entlang ihrer Verbindungslinie aus,
    mit $k = 1/(4\pi\varepsilon_0) \approx 9\cdot 10^{9}\,\text{N}\,\text{m}^2/\text{C}^2$. Wie bei der Gravitation
    wächst die Kraft mit dem Produkt der Ladungen und fällt mit dem Quadrat des Abstands. Anders als die
    Gravitation kann sie anziehen oder abstoßen und lässt sich abschirmen. Zwischen Proton und Elektron ist
    sie rund $10^{39}$-mal stärker. Im Alltag merkt man sie trotzdem wenig, weil Materie fast neutral ist.
  kernpunkte: ["F = k·|Q₁|·|Q₂|/r²", "gleiche Form wie Gravitation", "anziehend oder abstoßend, abschirmbar", "Materie fast neutral"]
- id: p12-k-feldstaerke
  frage: Wie ist die elektrische Feldstärke definiert, und warum hängt sie nicht von der Probeladung ab?
  antwort: |
    Die Feldstärke ist die Kraft auf eine kleine positive Probeladung geteilt durch diese Ladung,
    $\vec E = \vec F/q$, mit der Einheit $\text{N/C} = \text{V/m}$. Weil die Kraft proportional zur Probeladung ist,
    kürzt sie sich heraus. Die Feldstärke beschreibt also den Raum am Ort, nicht die Probeladung. Für eine
    Punktladung gilt $E = k\,|Q|/r^2$. Umgekehrt spürt jede Ladung im Feld die Kraft $\vec F = q\,\vec E$.
  kernpunkte: ["E = F/q", "Einheit N/C = V/m", "Probeladung kürzt sich", "Punktladung E = k·Q/r²"]
- id: p12-k-feldlinien
  frage: Welche Regeln gelten für Feldlinien? Sind Feldlinien die Bahnen geladener Teilchen?
  antwort: |
    Feldlinien beginnen an positiven und enden an negativen Ladungen. Ihre Richtung zeigt die Kraft auf eine
    positive Probeladung, ihre Dichte die Feldstärke. Sie schneiden sich nie und stehen senkrecht auf
    Leiteroberflächen. Sie sind keine Bahnen: Ein Elektron, das quer in einen Kondensator fliegt, folgt
    einer Parabel, obwohl die Feldlinien gerade sind. Die Feldlinie gibt die Kraft an, die Kraft ändert die
    Geschwindigkeit nur allmählich.
  kernpunkte: ["von plus nach minus", "Richtung und Dichte", "schneiden sich nie, senkrecht auf Leitern", "keine Bahnen, Gegenbeispiel Parabel"]
- id: p12-k-homogen
  frage: Was ist ein homogenes Feld, wo findet man es, und wie hängen dort Feldstärke und Spannung zusammen?
  antwort: |
    Ein homogenes Feld hat überall dieselbe Stärke und Richtung. Seine Feldlinien sind parallel und gleich
    dicht. Man findet es zwischen den Platten eines Plattenkondensators, abgesehen vom Randfeld. Dort ist die
    Kraft auf eine Ladung konstant, die Arbeit ist $W = qEd$. Daraus folgt $U = E\cdot d$. Diese Formel gilt nur
    im homogenen Feld, nicht um eine Punktladung.
  kernpunkte: ["gleiche Stärke und Richtung", "Plattenkondensator, Randfeld", "U = E·d", "nur im homogenen Feld"]
- id: p12-k-drei-groessen
  frage: Erkläre den Unterschied zwischen Feldstärke, Potential und Spannung.
  antwort: |
    Die Feldstärke ist Kraft pro Ladung an einem Ort, in $\text{V/m}$, ein Vektor. Das Potential ist potentielle
    Energie pro Ladung an einem Ort, in Volt, gemessen ab einem frei gewählten Nullpunkt. Die Spannung ist der
    Unterschied der Potentiale zwischen zwei Orten, also Arbeit pro Ladung. Sie hängt nicht vom Nullpunkt ab.
    Im Bild einer Landschaft ist das Potential die Höhe, die Spannung der Höhenunterschied und die
    Feldstärke die Steilheit. Ein Ort kann hohes Potential und trotzdem Feldstärke null haben.
  kernpunkte: ["Feldstärke: Kraft pro Ladung, Ort, V/m", "Potential: Energie pro Ladung, Ort, Nullpunkt", "Spannung: Differenz zweier Orte", "Gelände: Höhe, Höhenunterschied, Steilheit"]
- id: p12-k-aequipotential
  frage: Was sind Äquipotentialflächen, und warum stehen sie senkrecht auf den Feldlinien?
  antwort: |
    Äquipotentialflächen verbinden Punkte gleichen Potentials. Verschiebt man eine Ladung auf ihnen, ändert
    sich ihre potentielle Energie nicht, das Feld verrichtet keine Arbeit. Das geht nur, wenn die Kraft
    senkrecht zur Verschiebung steht. Darum stehen sie senkrecht auf den Feldlinien. Im Plattenkondensator
    sind es Ebenen parallel zu den Platten, um eine Punktladung Kugelschalen. Jede Leiteroberfläche ist eine
    Äquipotentialfläche. Deshalb sitzt ein Vogel auf einer Hochspannungsleitung sicher.
  kernpunkte: ["gleiches Potential", "keine Arbeit, also senkrecht", "Beispiele Platte und Punktladung", "Leiteroberfläche, Vogel"]
- id: p12-k-elektronvolt
  frage: Was ist ein Elektronvolt, und wie berechnet man die Geschwindigkeit eines beschleunigten Elektrons?
  antwort: |
    Ein Elektronvolt ist die Energie, die ein Teilchen mit der Ladung $e$ beim Durchlaufen von $1\,\text{V}$
    gewinnt: $1\,\text{eV} = 1{,}602\cdot 10^{-19}\,\text{J}$. Es ist eine Energie, keine Spannung. Startet ein
    Elektron aus der Ruhe und durchläuft die Spannung $U$, gilt nach dem Energiesatz $eU = \tfrac12 m v^2$,
    also $v = \sqrt{2eU/m}$. Das ist derselbe Energiesatz wie beim freien Fall mit $mgh = \tfrac12 m v^2$.
  kernpunkte: ["1 eV = 1,602·10⁻¹⁹ J", "Energie, nicht Spannung", "eU = ½mv²", "Vergleich mit freiem Fall (Kapitel 4)"]
- id: p12-k-kapazitaet
  frage: Wovon hängt die Kapazität eines Plattenkondensators ab, und warum erhöht ein Dielektrikum sie?
  antwort: |
    Die Kapazität $C = Q/U$ gibt an, wie viel Ladung pro Volt der Kondensator aufnimmt. Für Platten gilt
    $C = \varepsilon_0\varepsilon_r A/d$: Sie wächst mit der Fläche und der Permittivitätszahl und sinkt mit
    dem Abstand. Ein Dielektrikum wird im Feld polarisiert. Seine Oberflächenladungen schwächen das Feld, also
    sinkt bei gleicher Ladung die Spannung. Mehr Ladung pro Volt heißt größere Kapazität.
  kernpunkte: ["C = Q/U", "C = ε₀·εr·A/d", "Polarisation schwächt das Feld", "weniger Spannung bei gleicher Ladung"]
- id: p12-k-veraendern
  frage: Ein Plattenkondensator wird geladen. Was passiert beim Auseinanderziehen der Platten, wenn er angeschlossen bleibt, und was, wenn er getrennt ist?
  antwort: |
    Die entscheidende Frage ist, was konstant bleibt. Angeschlossen hält die Quelle $U$ fest. Die Kapazität
    sinkt, also sinkt $Q = CU$, Ladung fließt zur Quelle zurück, und $E = U/d$ wird kleiner. Getrennt bleibt
    $Q$ fest. Die Kapazität sinkt, also steigt $U = Q/C$. Die Feldstärke bleibt gleich, weil dieselbe Ladung
    auf derselben Fläche sitzt. Die Energie $Q^2/(2C)$ steigt, die zusätzliche Energie stammt aus der Arbeit
    gegen die Anziehung der Platten.
  kernpunkte: ["angeschlossen: U konstant, Q sinkt", "getrennt: Q konstant, U steigt", "E bleibt beim getrennten gleich", "Energie aus mechanischer Arbeit"]
- id: p12-k-energie
  frage: Wie viel Energie speichert ein Kondensator, woher kommt der Faktor ein Halb, und wo steckt die Energie?
  antwort: |
    $W = \tfrac12 Q U = \tfrac12 C U^2$. Beim Laden steigt die Spannung von null auf $U$, im Mittel muss jede
    Ladung nur $U/2$ überwinden. Im $U$-$Q$-Diagramm ist die Energie die Dreiecksfläche unter der Geraden. Die
    Energie steckt im Feld zwischen den Platten, mit der Energiedichte $\tfrac12\varepsilon_0 E^2$. Beim Laden
    über einen Widerstand gibt die Quelle $QU$ ab, die Hälfte wird im Widerstand zu Wärme.
  kernpunkte: ["W = ½·C·U²", "mittlere Spannung U/2, Dreiecksfläche", "Energie im Feld, ½·ε₀·E²", "beim Laden geht die Hälfte als Wärme verloren"]
- id: p12-k-millikan
  frage: Beschreibe den Millikan-Versuch. Was hat er gezeigt?
  antwort: |
    Geladene Öltröpfchen werden zwischen waagrechte Kondensatorplatten gesprüht und im Mikroskop beobachtet.
    Man stellt die Spannung so ein, dass ein Tröpfchen schwebt: $qU/d = mg$, also $q = mgd/U$. Die Masse
    bestimmt man aus der Sinkgeschwindigkeit ohne Feld. Viele Tröpfchen ergeben Ladungen, die alle
    ganzzahlige Vielfache von $e \approx 1{,}6\cdot 10^{-19}\,\text{C}$ sind. Damit ist die Quantelung der Ladung
    gezeigt und $e$ gemessen. Der Versuch verbindet Kräftegleichgewicht aus der Dynamik mit dem homogenen Feld.
  kernpunkte: ["Schwebebedingung q·U/d = m·g", "Masse aus Sinkgeschwindigkeit", "Vielfache von e", "Quantelung bewiesen"]
- id: p12-k-ablenkung
  frage: Wie bewegt sich ein Elektron, das senkrecht zu den Feldlinien in einen Kondensator fliegt? Was hat das mit dem waagrechten Wurf zu tun?
  antwort: |
    Parallel zu den Platten wirkt keine Kraft, die Bewegung ist gleichförmig. Senkrecht dazu wirkt die konstante
    Kraft $eU/d$, die Bewegung ist gleichmäßig beschleunigt. Zusammen ergibt das eine Parabel, genau wie beim
    waagrechten Wurf, nur mit $a = eU/(md)$ statt $g$. Die Ablenkung ist $y = UL^2/(4dU_B)$. Sie hängt nicht
    von der Masse ab: Ein Proton mit derselben Beschleunigungsspannung wird gleich stark abgelenkt, aber in
    die Gegenrichtung. Die Gewichtskraft ist vernachlässigbar.
  kernpunkte: ["parallel gleichförmig, quer beschleunigt", "Parabel wie waagrechter Wurf (Kapitel 2)", "y = U·L²/(4·d·U_B)", "unabhängig von der Masse"]
```
