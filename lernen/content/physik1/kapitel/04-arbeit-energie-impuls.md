---
nummer: 4
titel: Arbeit, Energie, Leistung, Impuls
kurz: Arbeit als Skalarprodukt und als Fläche, Energieformen und Energieerhaltung, Leistung und Wirkungsgrad, Impuls, Kraftstoß, Impulserhaltung und Stöße. Und vor allem die Frage, wann welcher Erhaltungssatz gilt.
teil: grundlagen
stunden: 10
pruefungsgewicht: 3
voraussetzungen: [groessen-einheiten-messen, kinematik, dynamik]
lernziele:
  - die mechanische Arbeit einer konstanten Kraft als Skalarprodukt W = F·s·cos α berechnen, ihr Vorzeichen deuten und Hub- und Reibungsarbeit bestimmen
  - die Arbeit einer veränderlichen Kraft als Fläche unter dem F-s-Diagramm bestimmen, insbesondere die Spannarbeit einer Feder
  - kinetische Energie, Lageenergie und Spannenergie berechnen und mit dem Arbeit-Energie-Satz Geschwindigkeiten, Wege und Kräfte bestimmen
  - mit einer Energiebilanz Bewegungen berechnen (Fall, Pendel, Achterbahn, Feder), auch mit Reibungsverlusten, und erklären, warum Energie umgewandelt und nicht verbraucht wird
  - Leistung (auch als P = F·v) und Wirkungsgrad berechnen und Energieeinheiten (J, kWh) sicher umrechnen
  - Impuls und Kraftstoß berechnen, auch aus einem F-t-Diagramm und beim Zurückprallen, und damit Sicherheitseinrichtungen erklären
  - den Impulserhaltungssatz auf Rückstoß und Stöße anwenden und elastische von unelastischen Stößen unterscheiden
  - begründen, wann Energie- und wann Impulserhaltung gilt, und mehrphasige Vorgänge (ballistisches Pendel) in Phasen mit dem jeweils passenden Erhaltungssatz zerlegen
---

Im Kapitel Dynamik, Lektion [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung), hast du gelernt, jede Bewegung mit dem Grundgesetz
$F = m\cdot a$ zu berechnen. Das klappt immer, ist aber oft mühsam. Denk an eine Achterbahn: In jeder
Kurve und auf jedem Hügel ändern sich Größe und Richtung der Kräfte. Um die Geschwindigkeit im Tal zu
finden, müsste man die Bewegung Stück für Stück verfolgen.

Dieses Kapitel zeigt einen viel kürzeren Weg. Es gibt Größen, die bei einem Vorgang **erhalten** bleiben,
also am Ende genauso groß sind wie am Anfang. Die zwei wichtigsten sind die **Energie** und der
**Impuls**. Mit ihnen vergleicht man nur Anfang und Ende und überspringt alles dazwischen. Dieser Gedanke
trägt die ganze Physik: Wärme ist Energie (Kapitel Temperatur, Wärme, Gase, Lektion [Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme)),
elektrische Arbeit ist Energie, und auch Licht transportiert Energie und Impuls.

**Was kommt in der Prüfung?** Energieaufgaben sind in der schriftlichen Prüfung häufig und gut zu
schaffen. Typisch sind:

- Die Geschwindigkeit nach einem Fall, auf einer Rutsche oder auf einer Achterbahn.
- Ein Pendel oder eine Federpistole.
- Reibungsverluste, die Leistung eines Motors und Stromkosten in Kilowattstunden.
- Stöße zweier Wagen, der Rückstoß eines Gewehrs und die Kraft beim Aufprall (Airbag).

In der mündlichen Prüfung hört man oft diese Fragen. Was ist Energie? Wie lautet der
Energieerhaltungssatz? Warum gibt es kein Perpetuum mobile? Was bleibt bei einem unelastischen Stoß
erhalten und was nicht?

**Die drei eigentlichen Hürden.** Erstens zählt bei der Arbeit nur der Teil der Kraft, der in
Wegrichtung zeigt. Zweitens musst du für jede Aufgabe entscheiden, ob die Energie, der Impuls oder beide
erhalten bleiben. Drittens unterscheiden sich elastische und unelastische Stöße genau in dieser Frage.
Diesen drei Stellen gibt das Kapitel besonders viel Raum. Lass dir dort Zeit.

:::vorwissen
Für dieses Kapitel brauchst du:

- **Das Grundgesetz** $F_{\text{res}} = m\cdot a$ und die Kraftarten (Gewichtskraft, Normalkraft, Reibung,
  Federkraft) aus dem Kapitel Dynamik, Lektion
  [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung) und
  [Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand).
- **Das dritte Newtonsche Axiom** (actio gleich reactio), Lektion
  [Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf).
- **Die gleichmäßig beschleunigte Bewegung**, vor allem $v^2 = 2as$, aus dem Kapitel Kinematik, Lektion [Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung).
- **Sinus und Kosinus** im rechtwinkligen Dreieck aus dem Mathematikkurs, Lektion
  [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
- **Quadratische Gleichungen** lösen, Lektion [Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Wenn du bei einer Frage unsicher bist, folge dem
Link in der Lösung und wiederhole die Lektion kurz. Das kostet zehn Minuten und spart dir später viel Ärger.

```aufgabe
id: p4-e-grundgesetz
art: check
titel: Resultierende Kraft aus Masse und Beschleunigung
niveau: 1
angabe: |
  Eine Kiste mit $12\,\text{kg}$ wird mit $1{,}5\,\text{m/s}^2$ beschleunigt. Wie groß ist die resultierende Kraft auf die Kiste in N?
teile:
  - typ: zahl
    loesung: "12*1.5"
    einheit: "N"
    anzeige: '18'
    fehler:
      - wert: "12/1.5"
        meldung: Du hast geteilt. Nach dem Grundgesetz ist die Kraft das **Produkt** aus Masse und Beschleunigung.
      - wert: "12*9.81"
        meldung: Das ist die Gewichtskraft der Kiste. Gefragt ist die resultierende Kraft, die sie mit $1{,}5\,\text{m/s}^2$ beschleunigt.
hinweise:
  - Das Grundgesetz lautet $F_{\text{res}} = m\cdot a$.
loesung: |
  **Ansatz:** Das zweite Newtonsche Axiom sagt: resultierende Kraft gleich Masse mal Beschleunigung.
  ---
  $F_{\text{res}} = 12\,\text{kg}\cdot 1{,}5\,\text{m/s}^2 = 18\,\text{kg}\cdot\text{m/s}^2 = 18\,\text{N}$. Wiederholen: [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung).
```

```aufgabe
id: p4-e-komponente
art: check
titel: Der waagrechte Anteil einer schrägen Kraft
niveau: 1
angabe: |
  Ein Seil zieht mit $80\,\text{N}$ schräg nach oben, unter $60^\circ$ gegen die Waagrechte. Wie groß ist der **waagrechte** Anteil dieser Kraft in N?
teile:
  - typ: zahl
    loesung: "80*cos(inRad(60))"
    einheit: "N"
    anzeige: '40'
    fehler:
      - wert: "80*sin(inRad(60))"
        meldung: Du hast den Sinus genommen und damit den **senkrechten** Anteil berechnet. Der waagrechte Anteil liegt am Winkel an, er ist die Ankathete. Dazu gehört der Kosinus.
      - wert: "80"
        meldung: Das ist die ganze Kraft. Weil das Seil schräg zieht, zeigt nur ein Teil davon waagrecht.
hinweise:
  - Zeichne die Kraft als Pfeil und zerlege sie in einen waagrechten und einen senkrechten Pfeil. Der waagrechte liegt am Winkel an.
loesung: |
  Der waagrechte Anteil ist die Ankathete des rechtwinkligen Dreiecks, die Kraft selbst ist die Hypotenuse. Also gilt $F_x = F\cos\alpha$.
  ---
  $F_x = 80\,\text{N}\cdot\cos 60^\circ = 80\,\text{N}\cdot 0{,}5 = 40\,\text{N}$. Wiederholen: Mathematik, [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck).
```

```aufgabe
id: p4-e-zeitfrei
art: check
titel: Geschwindigkeit nach einer Strecke
niveau: 1
angabe: |
  Ein Wagen startet aus der Ruhe und beschleunigt gleichmäßig mit $3{,}0\,\text{m/s}^2$. Wie schnell ist er nach $6{,}0\,\text{m}$?
teile:
  - typ: zahl
    loesung: "sqrt(2*3*6)"
    einheit: "m/s"
    anzeige: '6'
    fehler:
      - wert: "3*6"
        meldung: Du hast $v = a\cdot s$ gerechnet. Diese Formel gibt es nicht. Ohne Zeitangabe gilt $v^2 = 2as$.
      - wert: "2*3*6"
        meldung: Das ist $v^2$, also das Quadrat der Geschwindigkeit. Zieh noch die Wurzel.
hinweise:
  - Die Zeit ist nicht gegeben. Nimm die „zeitfreie“ Gleichung $v^2 = 2as$ für den Start aus der Ruhe.
loesung: |
  Ohne Zeitangabe verwenden wir die zeitfreie Gleichung $v^2 = 2as$.
  ---
  $v = \sqrt{2\cdot 3{,}0\,\text{m/s}^2\cdot 6{,}0\,\text{m}} = \sqrt{36\,\text{m}^2/\text{s}^2} = 6{,}0\,\text{m/s}$. Wiederholen: Kapitel Kinematik, Lektion [Gleichmäßig beschleunigte Bewegung](/lernen/physik1/kinematik/gleichmaessig-beschleunigte-bewegung).
```

```aufgabe
id: p4-e-reibung
art: check
titel: Gleitreibungskraft
niveau: 1
angabe: |
  Ein Schrank mit $50\,\text{kg}$ wird über einen waagrechten Boden geschoben. Die Gleitreibungszahl ist $\mu_G = 0{,}30$. Wie groß ist die Gleitreibungskraft in N?
teile:
  - typ: zahl
    loesung: "0.3*50*9.81"
    einheit: "N"
    anzeige: '147'
    fehler:
      - wert: "0.3*50"
        meldung: Du hast die Reibungszahl mit der Masse multipliziert. Die Reibung hängt aber von der **Normalkraft** ab, und die ist eine Kraft in Newton, hier $F_N = m g$.
hinweise:
  - Auf waagrechtem Boden ist die Normalkraft gleich der Gewichtskraft, $F_N = m g$. Dann gilt $F_R = \mu_G F_N$.
loesung: |
  Auf waagrechtem Boden ohne weitere senkrechte Kräfte gilt $F_N = m g = 50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 490{,}5\,\text{N}$.
  ---
  $F_R = \mu_G F_N = 0{,}30\cdot 490{,}5\,\text{N} = 147\,\text{N}$. Wiederholen: [Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand).
```

```aufgabe
id: p4-e-flaeche
art: check
titel: Weg als Fläche unter dem v-t-Diagramm
niveau: 1
angabe: |
  Ein Radfahrer wird in $4{,}0\,\text{s}$ gleichmäßig von $0$ auf $8{,}0\,\text{m/s}$ schneller. Im v-t-Diagramm ist das eine schräge Gerade. Wie weit fährt er in dieser Zeit? Bestimme den Weg als Fläche unter der Geraden.
teile:
  - typ: zahl
    loesung: "0.5*8*4"
    einheit: "m"
    anzeige: '16'
    fehler:
      - wert: "8*4"
        meldung: Das ist die Fläche des ganzen Rechtecks. Unter der schrägen Geraden liegt aber nur ein **Dreieck**, also die Hälfte.
hinweise:
  - Die Fläche unter der Geraden ist ein rechtwinkliges Dreieck mit den Katheten $4{,}0\,\text{s}$ und $8{,}0\,\text{m/s}$.
loesung: |
  Der Weg ist die Fläche unter dem v-t-Graphen. Hier ist das ein Dreieck.
  ---
  $s = \tfrac12\cdot 4{,}0\,\text{s}\cdot 8{,}0\,\text{m/s} = 16\,\text{m}$. Genau diese Idee „Fläche unter einem Graphen“ brauchen wir für die Arbeit wieder. Wiederholen: Mathematik, [Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
```

```aufgabe
id: p4-e-quadratisch
art: check
titel: Eine quadratische Gleichung lösen
niveau: 1
angabe: |
  Löse $x^2 - 2x - 8 = 0$. Gib die **positive** Lösung an.
teile:
  - typ: zahl
    loesung: "1 + sqrt(1 + 8)"
    anzeige: '4'
    fehler:
      - wert: "-2"
        meldung: Das ist die negative Lösung. Gefragt ist die positive.
      - wert: "sqrt(8)"
        meldung: Du hast den Term $-2x$ weggelassen. Bei einer vollständigen quadratischen Gleichung brauchst du die Lösungsformel.
hinweise:
  - 'Kleine Lösungsformel: $x = -\tfrac p2 \pm\sqrt{\left(\tfrac p2\right)^2 - q}$ mit $p = -2$ und $q = -8$.'
loesung: |
  Mit $p = -2$ und $q = -8$ liefert die kleine Lösungsformel $x = 1 \pm\sqrt{1 + 8} = 1 \pm 3$.
  ---
  Die Lösungen sind $x_1 = 4$ und $x_2 = -2$. Positiv ist $x = 4$. Probe: $16 - 8 - 8 = 0$. Wiederholen: [Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
```

```aufgabe
id: p4-e-actio
art: check
titel: Zwei Kräfte zwischen zwei Körpern
niveau: 1
angabe: |
  Eine Lehrerin mit $70\,\text{kg}$ und ein Kind mit $25\,\text{kg}$ stehen auf Rollschuhen und stoßen sich voneinander ab. Welche Aussage über die Kräfte, die sie **aufeinander** ausüben, stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Die Lehrerin übt die größere Kraft aus, weil sie schwerer ist."
      - "Beide Kräfte sind gleich groß und entgegengesetzt gerichtet."
      - "Das Kind übt die größere Kraft aus, weil es danach schneller wegrollt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Masse bestimmt nicht die Kraft zwischen den beiden. Nach dem dritten Newtonschen Axiom sind die Wechselwirkungskräfte **immer** gleich groß.
      - wert: 2
        meldung: Das Kind wird schneller, weil es bei gleicher Kraft die kleinere Masse hat. Die Kräfte selbst sind gleich groß.
hinweise:
  - Denk an actio gleich reactio.
loesung: |
  Nach dem dritten Newtonschen Axiom übt das Kind auf die Lehrerin dieselbe Kraft aus wie die Lehrerin auf das Kind, nur in Gegenrichtung.
  ---
  Unterschiedlich ist nur die Wirkung: Bei gleicher Kraft beschleunigt die kleinere Masse stärker. Wiederholen: [Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf).
```

## Mechanische Arbeit

```aufgabe
id: p4-1-check
art: check
titel: "Vorwissen: das Skalarprodukt"
niveau: 1
angabe: |
  Berechne das Skalarprodukt $\begin{pmatrix} 3 \\ 4\end{pmatrix}\cdot\begin{pmatrix} 2 \\ 1\end{pmatrix}$.
teile:
  - typ: zahl
    loesung: "3*2 + 4*1"
    anzeige: '10'
    fehler:
      - wert: "3*4 + 2*1"
        meldung: Du hast die Komponenten **innerhalb** eines Vektors multipliziert. Beim Skalarprodukt multipliziert man die x-Komponenten miteinander und die y-Komponenten miteinander.
      - wert: "5"
        meldung: Das ist die Länge des ersten Vektors, $\sqrt{3^2 + 4^2} = 5$. Das Skalarprodukt verbindet aber **beide** Vektoren, es ist $a_1 b_1 + a_2 b_2$.
hinweise:
  - 'Das Skalarprodukt ist $\vec a\cdot\vec b = a_1 b_1 + a_2 b_2$.'
loesung: |
  Wir multiplizieren die x-Komponenten miteinander und die y-Komponenten miteinander und addieren.
  ---
  $3\cdot 2 + 4\cdot 1 = 6 + 4 = 10$. Das Ergebnis ist eine Zahl, kein Vektor. Wiederholen: Mathematik, [Das Skalarprodukt](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren).
```

Im Alltag ist „Arbeit“ alles, was anstrengt. In der Physik ist der Begriff enger und genauer. Arbeit
wird nur verrichtet, wenn eine Kraft einen Körper **entlang eines Weges** bewegt. Die Arbeit misst, wie
viel Energie dabei übertragen wird. Was Energie genau ist, klären wir in der Lektion
[Energie](/lernen/physik1/arbeit-energie-impuls/energie). Hier lernst du zuerst, die Arbeit zu berechnen.

Ein **Nicht-Beispiel** macht den Unterschied klar. Du hältst einen schweren Koffer eine Minute lang
ruhig in der Hand. Du wirst müde, denn deine Muskeln spannen sich laufend an und entspannen sich
wieder. Am Koffer verrichtest du aber **keine** mechanische Arbeit, denn er bewegt sich nicht.

### Kraft und Weg in derselben Richtung

Der einfachste Fall: Du schiebst eine Kiste mit $50\,\text{N}$ waagrecht über $4{,}0\,\text{m}$, und die
Kraft zeigt genau in Bewegungsrichtung. Dann ist die Arbeit Kraft mal Weg:
$W = 50\,\text{N}\cdot 4{,}0\,\text{m} = 200\,\text{N}\cdot\text{m}$.

Die Einheit $\text{N}\cdot\text{m}$ heißt **Joule** (Zeichen J), nach dem Physiker James Prescott Joule:
$$1\,\text{J} = 1\,\text{N}\cdot\text{m} = 1\,\text{kg}\cdot\text{m}^2/\text{s}^2.$$
Ein Joule ist wenig. Hebst du eine Tafel Schokolade ($100\,\text{g}$, Gewichtskraft knapp $1\,\text{N}$)
einen Meter hoch, verrichtest du ungefähr $1\,\text{J}$.

```aufgabe
id: p4-1-check-joule
art: check
titel: Kraft mal Weg
niveau: 1
angabe: |
  Du ziehst einen Wagen mit $30\,\text{N}$ genau in Fahrtrichtung $5{,}0\,\text{m}$ weit. Wie viel Arbeit verrichtest du in J?
teile:
  - typ: zahl
    loesung: "30*5"
    einheit: "J"
    anzeige: '150'
    fehler:
      - wert: "30/5"
        meldung: Arbeit ist Kraft **mal** Weg, nicht Kraft durch Weg.
hinweise:
  - Kraft und Weg zeigen in dieselbe Richtung, also $W = F\cdot s$.
loesung: |
  Kraft und Weg sind parallel, also gilt einfach $W = F\cdot s$.
  ---
  $W = 30\,\text{N}\cdot 5{,}0\,\text{m} = 150\,\text{N}\cdot\text{m} = 150\,\text{J}$.
```

### Eine schräge Kraft: Nur der Anteil in Wegrichtung zählt

**Worum geht es?** Oft zieht eine Kraft schräg, zum Beispiel ein Seil an einem Schlitten. Dann hilft nur
ein Teil der Kraft bei der Bewegung.

**Bild:** Stell dir vor, du ziehst einen Rollkoffer am schrägen Griff. Ein Teil deiner Kraft zieht den
Koffer nach vorn. Der andere Teil hebt ihn ein wenig an. Dieser senkrechte Teil bewegt den Koffer nicht
vorwärts, er entlastet nur die Räder. Für die Arbeit entlang des Weges zählt also nur der waagrechte Teil.

**In Schritten:** Zerlege die Kraft $F$ in einen Anteil in Wegrichtung und einen Anteil senkrecht dazu.
Ist $\alpha$ der Winkel zwischen Kraft und Weg, dann ist der Anteil in Wegrichtung die Ankathete
$F\cos\alpha$ (siehe [Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck)).
Nur dieser Anteil wird mit dem Weg multipliziert.

:::definition[Mechanische Arbeit einer konstanten Kraft]
Verschiebt eine konstante Kraft vom Betrag $F$ einen Körper geradlinig um den Weg $s$, so verrichtet
sie die **Arbeit**
$$W = F\cdot s\cdot\cos\alpha.$$
Dabei ist $F$ der Betrag der Kraft (in N), $s$ die Länge des Weges (in m) und $\alpha$ der Winkel
zwischen der Kraftrichtung und der Wegrichtung. Die Einheit der Arbeit ist das Joule,
$1\,\text{J} = 1\,\text{N}\cdot\text{m}$.
:::

:::beispiel[Ein Rollkoffer am schrägen Griff]
Du ziehst einen Rollkoffer ($20\,\text{kg}$) mit $60\,\text{N}$ am Griff, der um $40^\circ$ gegen die
Waagrechte geneigt ist. Wie viel Arbeit verrichtet deine Zugkraft auf $250\,\text{m}$ Weg zum Bahnsteig?

**Schritt 1, Winkel bestimmen:** Der Weg verläuft waagrecht, die Kraft zeigt $40^\circ$ schräg nach
oben. Also ist $\alpha = 40^\circ$.

**Schritt 2, Anteil in Wegrichtung:** $F\cos\alpha = 60\,\text{N}\cdot\cos 40^\circ = 60\,\text{N}\cdot 0{,}766 = 46{,}0\,\text{N}$.

**Schritt 3, Arbeit:** $W = 46{,}0\,\text{N}\cdot 250\,\text{m} = 11\,500\,\text{N}\cdot\text{m} = 11{,}5\,\text{kJ}$.

**Probe:** Ohne Winkel wären es $60\,\text{N}\cdot 250\,\text{m} = 15\,\text{kJ}$. Mit Winkel muss es weniger
sein, weil $\cos 40^\circ < 1$ ist. ✓
:::

```plot
x: [-3, 4]
y: [-5.5, 4.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -4.9], label: "F_G = 196 N", farbe: 0 }
  - { von: [0, 0], nach: [0, 3.94], label: "F_N = 158 N", farbe: 2 }
  - { von: [0, 0], nach: [1.15, 0.96], label: "F_Zug = 60 N", farbe: 1 }
strecken:
  - { von: [0, 0], nach: [1.15, 0], gestrichelt: true, farbe: 1 }
  - { von: [1.15, 0], nach: [1.15, 0.96], gestrichelt: true, farbe: 1 }
  - { von: [-2.5, -5.2], nach: [3.5, -5.2], farbe: 4 }
punkte:
  - { x: 0, y: 0, label: "Koffer" }
  - { x: 3.5, y: -5.2, label: "Weg s →" }
beschriftung: "Freikörperbild des Rollkoffers (Rollreibung vernachlässigt), Maßstab 40 N pro Kästchen. Die Zugkraft (orange) zeigt 40° schräg nach oben. Gestrichelt ist ihre Zerlegung: Nur der waagrechte Anteil von 46 N zeigt in Wegrichtung und verrichtet Arbeit. Der senkrechte Anteil von 39 N entlastet den Boden, deshalb ist die Normalkraft (grün) kleiner als die Gewichtskraft (blau)."
```

Gewichtskraft und Normalkraft stehen im Bild senkrecht zum Weg. Für sie ist $\alpha = 90^\circ$ und
$\cos 90^\circ = 0$. Sie verrichten also keine Arbeit, obwohl sie viel größer sind als die Zugkraft.

### Arbeit als Skalarprodukt

Die Formel $F\cdot s\cdot\cos\alpha$ kennst du aus der Mathematik. Dort heißt sie **Skalarprodukt** zweier
Vektoren (siehe [Das Skalarprodukt](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren)). Kraft und Weg sind
Vektoren, also kann man kurz schreiben:
$$W = \vec F\cdot\vec s = F_x s_x + F_y s_y.$$
Dabei sind $F_x, F_y$ die Komponenten der Kraft und $s_x, s_y$ die Komponenten des Weges, jeweils in
einem festen Koordinatensystem. Beide Schreibweisen liefern dieselbe Zahl.

**Was haben wir gewonnen?** Sind Kraft und Weg in Komponenten gegeben, braucht man den Winkel gar nicht.
Man multipliziert Komponente mit Komponente und addiert. Wichtig: Das Ergebnis ist eine Zahl, also ein
**Skalar**. Die Arbeit hat keine Richtung, obwohl sie aus zwei Vektoren entsteht.

:::beispiel[Arbeit aus Komponenten]
Ein Roboter schiebt ein Paket mit der konstanten Kraft $\vec F = \begin{pmatrix} 50 \\ 20\end{pmatrix}\text{N}$
entlang des geraden Weges $\vec s = \begin{pmatrix} 4 \\ -3\end{pmatrix}\text{m}$. Welche Arbeit verrichtet er?

**Schritt 1, Skalarprodukt:** $W = 50\,\text{N}\cdot 4\,\text{m} + 20\,\text{N}\cdot(-3\,\text{m}) = 200\,\text{J} - 60\,\text{J} = 140\,\text{J}$.

**Schritt 2, Kontrolle über den Winkel:** $|\vec F| = \sqrt{50^2 + 20^2}\,\text{N} = 53{,}9\,\text{N}$ und
$|\vec s| = \sqrt{4^2 + 3^2}\,\text{m} = 5{,}0\,\text{m}$. Aus $W = F s\cos\alpha$ folgt
$\cos\alpha = \dfrac{140\,\text{J}}{53{,}9\,\text{N}\cdot 5{,}0\,\text{m}} = 0{,}52$, also $\alpha = 58{,}7^\circ$.

**Deutung:** Die y-Komponente der Kraft zeigt nach oben, der Weg aber nach unten. Dieser Anteil
arbeitet gegen die Bewegung, deshalb das Minus beim zweiten Summanden.
:::

### Das Vorzeichen der Arbeit

Weil $\cos\alpha$ positiv, null oder negativ sein kann, kann auch die Arbeit positiv, null oder negativ
sein. Es gibt drei Fälle:

- **$\alpha < 90^\circ$, also $W > 0$:** Die Kraft hilft der Bewegung. Sie führt dem Körper Energie zu.
  Beispiel: die Zugkraft am Koffer.
- **$\alpha = 90^\circ$, also $W = 0$:** Die Kraft steht senkrecht zum Weg. Beispiele: die Normalkraft
  auf einer waagrechten Bahn, die Gewichtskraft beim waagrechten Tragen, die Anziehung der Erde auf einen
  Satelliten auf einer Kreisbahn.
- **$\alpha > 90^\circ$, also $W < 0$:** Die Kraft bremst die Bewegung. Sie entzieht dem Körper Energie.
  Beispiel: die Gleitreibung, für die $\alpha = 180^\circ$ und damit $W = -F_R\,s$ gilt.

:::beispiel[Wer verrichtet welche Arbeit?]
Du schiebst eine Kiste ($20\,\text{kg}$) mit konstanter Geschwindigkeit $3{,}0\,\text{m}$ weit über
den Boden. Die Gleitreibungszahl ist $\mu_G = 0{,}25$. Welche Arbeit verrichtet jede Kraft?

**Schritt 1, Kräfte:** Gewichtskraft $F_G = 20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 196{,}2\,\text{N}$,
Normalkraft $F_N = 196{,}2\,\text{N}$, Reibung $F_R = 0{,}25\cdot 196{,}2\,\text{N} = 49{,}05\,\text{N}$.
Die Geschwindigkeit ist konstant. Also ist die resultierende Kraft null, und deine Schubkraft ist
ebenfalls $49{,}05\,\text{N}$.

**Schritt 2, Arbeiten:** Schubkraft: $W = 49{,}05\,\text{N}\cdot 3{,}0\,\text{m} = +147\,\text{J}$.
Reibung ($\alpha = 180^\circ$): $W = -147\,\text{J}$. Gewichts- und Normalkraft ($\alpha = 90^\circ$): je $0$.

**Schritt 3, Summe:** Alle Arbeiten zusammen ergeben $0$. Das passt: Die Kiste wird weder schneller noch
langsamer. Warum das kein Zufall ist, zeigt der Arbeit-Energie-Satz in der Lektion
[Energie](/lernen/physik1/arbeit-energie-impuls/energie).
:::

:::achtung[Fehler: „Kraft mal Weg“ trotz schräger Kraft]
Ein Schlitten wird mit $100\,\text{N}$ an einer Leine gezogen, die $35^\circ$ gegen die Waagrechte
geneigt ist. Der Weg ist $20\,\text{m}$ lang.

Falsch gerechnet: $W = 100\,\text{N}\cdot 20\,\text{m} = 2000\,\text{J}$.

Hier wurde die ganze Kraft eingesetzt, obwohl nur ihr Anteil in Wegrichtung arbeitet. Richtig ist
$W = 100\,\text{N}\cdot\cos 35^\circ\cdot 20\,\text{m} = 100\,\text{N}\cdot 0{,}819\cdot 20\,\text{m} = 1640\,\text{J}$.
„Kraft mal Weg“ gilt nur, wenn Kraft und Weg parallel sind.
:::

```aufgabe
id: p4-1-vorhersage-rampe
art: check
titel: "Vorhersage: senkrecht heben oder über die Rampe?"
niveau: 1
angabe: |
  Du willst eine Kiste auf eine Ladefläche bringen. Du kannst sie senkrecht hochheben oder reibungsfrei über eine lange Rampe hinaufschieben. Was vermutest du über die nötige **Arbeit**?
teile:
  - typ: auswahl
    optionen:
      - "Über die Rampe ist die Arbeit kleiner, weil man weniger Kraft braucht."
      - "Die Arbeit ist in beiden Fällen gleich groß."
      - "Über die Rampe ist die Arbeit größer, weil der Weg länger ist."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Kraft ist auf der Rampe tatsächlich kleiner. Dafür ist der Weg länger, und zwar genau so viel, dass das Produkt gleich bleibt.
      - wert: 2
        meldung: Der Weg ist länger, aber die nötige Kraft ist kleiner. Beides gleicht sich genau aus.
hinweise:
  - Arbeit ist Kraft mal Weg. Was wird auf der Rampe kleiner, was größer?
loesung: |
  Ohne Reibung ist die Arbeit gleich: Die Rampe verringert die Kraft im selben Verhältnis, wie sie den Weg verlängert.
  ---
  Warum das so ist, zeigt die Hubarbeit gleich im Anschluss: Es zählt nur der Höhenunterschied.
```

### Hubarbeit und Reibungsarbeit

**Hubarbeit.** Um einen Körper der Masse $m$ langsam und gleichmäßig um die Höhe $h$ zu heben, braucht
man eine Kraft gleich seiner Gewichtskraft $m g$, und zwar nach oben. Kraft und Weg sind parallel, also
$$W_{\text{Hub}} = m\,g\,h.$$
Dabei ist $m$ die Masse (in kg), $g = 9{,}81\,\text{m/s}^2$ die Fallbeschleunigung und $h$ der
Höhenunterschied (in m). Beispiel: Eine Kiste mit $15\,\text{kg}$ auf einen $0{,}80\,\text{m}$ hohen
Tisch zu heben, kostet $15\cdot 9{,}81\cdot 0{,}80\,\text{J} = 118\,\text{J}$.

Bemerkenswert ist: Für die Hubarbeit zählt nur der **Höhenunterschied**, nicht der Weg. Schiebst du die
Kiste reibungsfrei über eine $2{,}4\,\text{m}$ lange Rampe auf den Tisch, brauchst du weniger Kraft, aber
einen längeren Weg. Das Produkt bleibt $118\,\text{J}$. Mehr dazu steht im Kapitel Drehbewegung und einfache Maschinen in der Lektion
[Goldene Regel der Mechanik und Wirkungsgrad](/lernen/physik1/drehbewegung-einfache-maschinen/goldene-regel-der-mechanik-und-wirkungsgrad).

**Reibungsarbeit.** Gleitet ein Körper über den Weg $s$, verrichtet die Gleitreibung die Arbeit
$$W_R = -\mu_G\,F_N\,s.$$
Dabei ist $\mu_G$ die Gleitreibungszahl und $F_N$ die Normalkraft. Das Minus zeigt: Die Reibung
entzieht Energie. Diese Energie verschwindet nicht, sondern erwärmt die Flächen. Hier ist ein
**Gegenbeispiel** zur Hubarbeit: Die Reibungsarbeit hängt sehr wohl vom Weg ab. Auf einem Umweg reibt
der Körper länger, und es wird mehr Wärme erzeugt.

:::achtung[Fehler: Hubarbeit mit der Rampenlänge statt mit der Höhe]
Ein Fass ($30\,\text{kg}$) wird reibungsfrei über eine $5{,}0\,\text{m}$ lange Rampe auf eine
$1{,}5\,\text{m}$ hohe Ladefläche geschoben.

Falsch gerechnet: $W = m g s = 30\cdot 9{,}81\cdot 5{,}0\,\text{J} = 1470\,\text{J}$.

Die Gewichtskraft zeigt senkrecht nach unten, der Weg schräg nach oben. Nur der senkrechte Anteil des
Weges zählt, und das ist die Höhe. Richtig ist $W = m g h = 30\cdot 9{,}81\cdot 1{,}5\,\text{J} = 441\,\text{J}$.
:::

:::merke[So berechnest du eine Arbeit]
1. Lege fest, **welche** Kraft die Arbeit verrichtet, und bestimme ihren Betrag.
2. Bestimme den Winkel $\alpha$ zwischen dieser Kraft und dem Weg.
3. Rechne $W = F s\cos\alpha$, bei Komponenten $W = F_x s_x + F_y s_y$.
4. Prüfe das Vorzeichen: Hilft die Kraft der Bewegung ($W > 0$) oder bremst sie ($W < 0$)?
:::

```reflexion
frage: Ein Satellit kreist mit konstanter Geschwindigkeit um die Erde. Die Erde zieht ständig an ihm. Erkläre, warum diese Anziehungskraft trotzdem keine Arbeit an ihm verrichtet.
antwort: |
  Auf einer Kreisbahn zeigt die Anziehungskraft immer zum Erdmittelpunkt, also zur Kreismitte. Die Bewegung
  verläuft dagegen in jedem Moment tangential, also entlang des Kreises. Kraft und Weg stehen deshalb in jedem
  Augenblick senkrecht aufeinander, $\alpha = 90^\circ$ und $\cos 90^\circ = 0$. Die Kraft ändert nur die
  Richtung der Bewegung, nicht den Betrag der Geschwindigkeit. Deshalb bleibt auch die Bewegungsenergie gleich.
```

### Aufgaben zur Arbeit

```aufgabe
id: p4-hubarbeit
titel: Hubarbeit
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine Kiste mit $25\,\text{kg}$ wird $1{,}2\,\text{m}$ hoch auf eine Ladefläche gehoben. Welche Hubarbeit wird verrichtet? Gib das Ergebnis in J auf drei signifikante Stellen an.
teile:
  - typ: zahl
    loesung: "25*9.81*1.2"
    einheit: "J"
    anzeige: '294'
    fehler:
      - wert: "25*1.2"
        meldung: Du hast die Masse mit der Höhe multipliziert. Für die Arbeit brauchst du aber eine **Kraft**, hier die Gewichtskraft $m g$ in Newton.
      - wert: "25*9.81"
        meldung: Das ist die Gewichtskraft in N. Für die Arbeit fehlt noch der Weg, also die Höhe.
hinweise:
  - Die Hubarbeit ist Gewichtskraft mal Höhe, $W = m g h$.
loesung: |
  **Ansatz:** Beim Heben ist die nötige Kraft gleich der Gewichtskraft und zeigt wie der Weg nach oben. Also $W = m g h$.
  ---
  $W = 25\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}2\,\text{m} = 294\,\text{kg}\cdot\text{m}^2/\text{s}^2 = 294\,\text{J}$.
  ---
  **Deutung:** Dieselbe Arbeit wäre nötig, wenn man die Kiste reibungsfrei über eine Rampe hinaufschiebt. Es zählt nur die Höhe.
```

```aufgabe
id: p4-arbeit-winkel
titel: Schlitten an einer schrägen Leine
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Ein Schlitten wird mit einer Seilkraft von $150\,\text{N}$ über $50\,\text{m}$ waagrecht gezogen. Das Seil ist um $30^\circ$ gegen die Waagrechte geneigt. Welche Arbeit verrichtet die Seilkraft? Gib das Ergebnis in J an.
teile:
  - typ: zahl
    loesung: "150*cos(inRad(30))*50"
    einheit: "J"
    anzeige: '6495 \approx 6{,}50\cdot 10^{3}'
    fehler:
      - wert: "150*50"
        meldung: Du hast die ganze Seilkraft eingesetzt. Das Seil zieht schräg, und nur der Anteil in Wegrichtung, $F\cos\alpha$, verrichtet Arbeit.
      - wert: "150*sin(inRad(30))*50"
        meldung: Du hast den Sinus genommen und damit den **senkrechten** Anteil der Kraft. Der Anteil in Wegrichtung liegt am Winkel an, dazu gehört der Kosinus.
hinweise:
  - Nur der Kraftanteil in Wegrichtung, $F\cos\alpha$, verrichtet Arbeit.
loesung: |
  **Ansatz:** $W = F s\cos\alpha$ mit $\alpha = 30^\circ$, weil der Weg waagrecht ist und das Seil um $30^\circ$ geneigt.
  ---
  Anteil in Wegrichtung: $F\cos 30^\circ = 150\,\text{N}\cdot 0{,}866 = 129{,}9\,\text{N}$.
  ---
  $W = 129{,}9\,\text{N}\cdot 50\,\text{m} = 6495\,\text{J} \approx 6{,}5\,\text{kJ}$. Probe: Das ist weniger als $150\,\text{N}\cdot 50\,\text{m} = 7{,}5\,\text{kJ}$, wie es bei schrägem Zug sein muss. ✓
```

```aufgabe
id: p4-keine-arbeit
titel: Wann wird keine Arbeit verrichtet?
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  In welchen Fällen verrichtet die genannte Kraft **keine** Arbeit? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "die Gewichtskraft, während ein Kellner ein Tablett waagrecht durch den Raum trägt"
      - "die Gewichtskraft auf einen fallenden Apfel"
      - "die Anziehungskraft der Erde auf einen Satelliten auf einer Kreisbahn"
      - "die Haltekraft der Arme, während man eine Hantel ruhig über dem Kopf hält"
      - "die Reibungskraft auf eine rutschende Kiste"
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 2]
        meldung: Auch die ruhig gehaltene Hantel gehört dazu. Das Halten ist anstrengend, aber die Hantel bewegt sich nicht. Ohne Weg gibt es keine mechanische Arbeit.
      - wert: [2, 3]
        meldung: Beim Kellner steht die Gewichtskraft (senkrecht nach unten) senkrecht zum waagrechten Weg. Dann ist $\cos 90^\circ = 0$ und die Arbeit null.
      - wert: [0, 2, 3, 4]
        meldung: Die Reibung verrichtet sehr wohl Arbeit, und zwar **negative**. Sie zeigt gegen den Weg und entzieht der Kiste Energie.
hinweise:
  - Arbeit ist null, wenn kein Weg zurückgelegt wird oder wenn die Kraft senkrecht zum Weg steht.
loesung: |
  **Keine Arbeit:** Beim Tablett und beim Satelliten steht die Kraft senkrecht zum Weg. Bei der Hantel gibt es keinen Weg.
  ---
  **Arbeit:** Beim fallenden Apfel zeigen Kraft und Weg nach unten, also ist $W > 0$. Bei der rutschenden Kiste zeigt die Reibung gegen den Weg, also ist $W < 0$.
```

```aufgabe
id: p4-1-skalarprodukt
titel: Arbeit einer Kraft in Komponenten
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine konstante Kraft $\vec F = \begin{pmatrix} 40 \\ 30\end{pmatrix}\text{N}$ wirkt auf einen Körper, der sich geradlinig um $\vec s = \begin{pmatrix} 6 \\ -2\end{pmatrix}\text{m}$ verschiebt.

  a) Welche Arbeit verrichtet die Kraft (in J)?

  b) Unter welchem Winkel stehen Kraft und Weg zueinander? Gib den Winkel in Grad auf eine Nachkommastelle an.
teile:
  - typ: zahl
    label: a) Arbeit
    loesung: "40*6 + 30*(-2)"
    einheit: "J"
    anzeige: '180'
    fehler:
      - wert: "40*6 + 30*2"
        meldung: Du hast das Minus der y-Komponente des Weges übersehen. Der Körper bewegt sich nach unten, die Kraft zieht nach oben. Dieser Anteil zählt negativ.
      - wert: "50*sqrt(40)"
        meldung: Du hast die Beträge multipliziert. Das wäre die Arbeit nur, wenn Kraft und Weg parallel wären. Nimm das Skalarprodukt der Komponenten.
  - typ: zahl
    label: b) Winkel
    loesung: "inGrad(acos(180/(50*sqrt(40))))"
    einheit: "°"
    anzeige: '55{,}3'
    fehler:
      - wert: "inGrad(acos(300/(50*sqrt(40))))"
        meldung: Für den Winkel brauchst du die richtige Arbeit aus Teil a). Mit dem Vorzeichenfehler kommt ein zu kleiner Winkel heraus.
hinweise:
  - 'Skalarprodukt: $W = F_x s_x + F_y s_y$. Achte auf das Vorzeichen von $s_y$.'
  - 'Für den Winkel: $\cos\alpha = \dfrac{W}{|\vec F|\cdot|\vec s|}$ mit $|\vec F| = \sqrt{F_x^2 + F_y^2}$.'
loesung: |
  **Ansatz:** Bei Komponenten ist die Arbeit das Skalarprodukt $W = F_x s_x + F_y s_y$.
  ---
  **a)** $W = 40\,\text{N}\cdot 6\,\text{m} + 30\,\text{N}\cdot(-2\,\text{m}) = 240\,\text{J} - 60\,\text{J} = 180\,\text{J}$.
  ---
  **b)** Beträge: $|\vec F| = \sqrt{40^2 + 30^2}\,\text{N} = 50\,\text{N}$, $|\vec s| = \sqrt{6^2 + 2^2}\,\text{m} = 6{,}32\,\text{m}$. Dann $\cos\alpha = \dfrac{180\,\text{J}}{50\,\text{N}\cdot 6{,}32\,\text{m}} = 0{,}569$, also $\alpha = 55{,}3^\circ$.
  ---
  **Probe:** Der Winkel liegt unter $90^\circ$, also muss die Arbeit positiv sein. Das stimmt mit a) überein. ✓
```

```aufgabe
id: p4-1-reibungsarbeit
titel: Einen Schrank verschieben
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Schrank ($40\,\text{kg}$) wird mit konstanter Geschwindigkeit $8{,}0\,\text{m}$ weit über einen waagrechten Boden geschoben. Die Gleitreibungszahl ist $\mu_G = 0{,}35$. Die Schubkraft wirkt waagrecht.

  a) Welche Arbeit verrichtet die Reibungskraft (mit Vorzeichen, in J)?

  b) Welche Arbeit verrichtet die Schubkraft (in J)?
teile:
  - typ: zahl
    label: a) Arbeit der Reibung
    loesung: "-0.35*40*9.81*8"
    einheit: "J"
    anzeige: '-1099'
    fehler:
      - wert: "0.35*40*9.81*8"
        meldung: Der Betrag stimmt, aber das Vorzeichen nicht. Die Reibung zeigt gegen die Bewegung, $\alpha = 180^\circ$ und $\cos 180^\circ = -1$. Ihre Arbeit ist negativ.
      - wert: "-0.35*40*8"
        meldung: Du hast die Masse statt der Normalkraft eingesetzt. Die Reibungskraft ist $\mu_G F_N$ mit $F_N = m g$ in Newton.
  - typ: zahl
    label: b) Arbeit der Schubkraft
    loesung: "0.35*40*9.81*8"
    einheit: "J"
    anzeige: '1099'
    fehler:
      - wert: "40*9.81*8"
        meldung: Du hast mit der Gewichtskraft gerechnet. Bei konstanter Geschwindigkeit ist die Schubkraft so groß wie die **Reibungskraft**, nicht wie die Gewichtskraft.
hinweise:
  - Bei konstanter Geschwindigkeit ist die resultierende Kraft null. Was folgt daraus für Schubkraft und Reibung?
  - 'Reibung: $F_R = \mu_G m g$, Winkel zum Weg $180^\circ$. Schubkraft: gleich groß, Winkel $0^\circ$.'
gefuehrt:
  - text: Wie groß ist die Normalkraft in N?
    teil: { typ: zahl, loesung: "40*9.81" }
    erklaerung: 'Auf waagrechtem Boden gilt $F_N = m g = 40\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 392{,}4\,\text{N}$.'
  - text: Wie groß ist die Gleitreibungskraft in N?
    teil: { typ: zahl, loesung: "0.35*40*9.81" }
    erklaerung: '$F_R = \mu_G F_N = 0{,}35\cdot 392{,}4\,\text{N} = 137{,}3\,\text{N}$.'
  - text: Welches Vorzeichen hat die Arbeit der Reibung? Überlege, wohin die Reibung zeigt.
    erklaerung: Die Reibung zeigt gegen die Bewegung. Der Winkel ist $180^\circ$, $\cos 180^\circ = -1$, also ist ihre Arbeit negativ.
  - text: Berechne die Arbeit der Reibung in J (mit Vorzeichen).
    teil: { typ: zahl, loesung: "-0.35*40*9.81*8" }
    erklaerung: '$W_R = -137{,}3\,\text{N}\cdot 8{,}0\,\text{m} = -1099\,\text{J}$.'
  - text: Wie groß ist die Arbeit der Schubkraft in J?
    teil: { typ: zahl, loesung: "0.35*40*9.81*8" }
    erklaerung: Konstante Geschwindigkeit heißt resultierende Kraft null. Die Schubkraft ist also so groß wie die Reibung und zeigt in Wegrichtung, $W = +1099\,\text{J}$.
loesung: |
  **Ansatz:** Konstante Geschwindigkeit bedeutet nach dem ersten Newtonschen Axiom resultierende Kraft null. Schubkraft und Reibung sind also gleich groß und entgegengesetzt.
  ---
  **Reibungskraft:** $F_R = \mu_G m g = 0{,}35\cdot 40\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 137{,}3\,\text{N}$.
  ---
  **a)** Die Reibung zeigt gegen den Weg: $W_R = -137{,}3\,\text{N}\cdot 8{,}0\,\text{m} = -1099\,\text{J} \approx -1{,}1\,\text{kJ}$.
  ---
  **b)** Die Schubkraft zeigt in Wegrichtung: $W_S = +1099\,\text{J}$. **Probe:** Die Summe ist null, die Geschwindigkeit bleibt also gleich. ✓
```

```aufgabe
id: p4-1-rampe
titel: Ein Fass über die Rampe
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Fass ($60\,\text{kg}$) wird reibungsfrei und langsam über eine $4{,}0\,\text{m}$ lange Rampe auf eine $1{,}2\,\text{m}$ hohe Bühne geschoben. Die Schubkraft zeigt entlang der Rampe.

  a) Wie groß ist die nötige Schubkraft (in N)?

  b) Welche Arbeit verrichtet die Schubkraft (in J)?
teile:
  - typ: zahl
    label: a) Schubkraft
    loesung: "60*9.81*1.2/4"
    einheit: "N"
    anzeige: '177'
    fehler:
      - wert: "60*9.81"
        meldung: Das ist die Kraft für senkrechtes Heben. Auf der Rampe musst du nur den Anteil der Gewichtskraft entlang der Rampe ausgleichen, $m g\sin\alpha$ mit $\sin\alpha = h/l$.
  - typ: zahl
    label: b) Arbeit
    loesung: "60*9.81*1.2"
    einheit: "J"
    anzeige: '706'
    fehler:
      - wert: "60*9.81*4"
        meldung: Du hast die volle Gewichtskraft mit der Rampenlänge multipliziert. Entweder kleine Kraft mal langer Weg oder große Kraft mal kurze Höhe, beides ergibt $m g h$.
hinweise:
  - 'Langsam heißt: Die Schubkraft gleicht den Hangabtrieb $m g\sin\alpha$ genau aus. Hier ist $\sin\alpha = h/l$.'
  - Für die Arbeit multiplizierst du die Schubkraft mit der Rampenlänge. Vergleiche mit $m g h$.
loesung: |
  **Ansatz:** Ohne Reibung und ohne Beschleunigung muss die Schubkraft nur den Hangabtrieb $F_H = m g\sin\alpha$ ausgleichen (siehe [Die schiefe Ebene](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze)). Mit $\sin\alpha = h/l = 1{,}2/4{,}0 = 0{,}30$.
  ---
  **a)** $F = 60\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}30 = 177\,\text{N}$.
  ---
  **b)** $W = F\cdot l = 176{,}6\,\text{N}\cdot 4{,}0\,\text{m} = 706\,\text{J}$.
  ---
  **Probe:** $m g h = 60\cdot 9{,}81\cdot 1{,}2\,\text{J} = 706\,\text{J}$. Die Rampe spart Kraft, aber keine Arbeit. ✓
```

```aufgabe
id: p4-1-vorzeichen
titel: Vorzeichen der Arbeit im Aufzug
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Ein Aufzug fährt mit konstanter Geschwindigkeit nach **unten**. Welches Vorzeichen haben die Arbeit der Seilkraft und die Arbeit der Gewichtskraft an der Kabine?
teile:
  - typ: auswahl
    optionen:
      - "Seilkraft: positiv. Gewichtskraft: positiv."
      - "Seilkraft: negativ. Gewichtskraft: positiv."
      - "Seilkraft: positiv. Gewichtskraft: negativ."
      - "Beide null, weil die Geschwindigkeit konstant ist."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das Seil zieht nach oben, die Kabine fährt nach unten. Kraft und Weg sind entgegengesetzt, $\alpha = 180^\circ$. Die Arbeit der Seilkraft ist also negativ.
      - wert: 2
        meldung: Du hast die Vorzeichen vertauscht. Die Gewichtskraft zeigt nach unten, genau wie die Bewegung. Sie verrichtet positive Arbeit.
      - wert: 3
        meldung: Konstante Geschwindigkeit heißt, dass die **Summe** der Arbeiten null ist. Die einzelnen Kräfte verrichten trotzdem Arbeit, sie heben sich nur gegenseitig auf.
hinweise:
  - Zeichne beide Kräfte und den Weg als Pfeile.
  - Positiv heißt Kraft in Wegrichtung, negativ heißt Kraft gegen die Wegrichtung.
loesung: |
  **Ansatz:** Das Vorzeichen hängt nur davon ab, ob Kraft und Weg in dieselbe Richtung zeigen ($\cos 0^\circ = 1$) oder entgegengesetzt ($\cos 180^\circ = -1$).
  ---
  **Gewichtskraft:** zeigt nach unten wie die Bewegung, also positive Arbeit. **Seilkraft:** zeigt nach oben, gegen die Bewegung, also negative Arbeit.
  ---
  **Kontrolle:** Bei konstanter Geschwindigkeit sind beide Kräfte gleich groß. Die beiden Arbeiten sind also entgegengesetzt gleich und ergeben zusammen null. ✓
```

```aufgabe
id: p4-1-schlitten-leine
titel: Alle Arbeiten am gezogenen Schlitten
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Kind zieht einen Schlitten ($10\,\text{kg}$) an einer Leine $15\,\text{m}$ weit über ebenen Schnee. Die Leine zieht mit $12\,\text{N}$ unter $25^\circ$ gegen die Waagrechte. Die Gleitreibungszahl ist $\mu_G = 0{,}08$. Runde auf drei signifikante Stellen.

  a) Welche Arbeit verrichtet die Zugkraft (in J)?

  b) Wie groß ist die Normalkraft (in N)? Beachte, dass die Leine den Schlitten etwas anhebt.

  c) Welche Arbeit verrichtet die Reibung (mit Vorzeichen, in J)?

  d) Wie groß ist die Summe aller Arbeiten (in J)? Was bedeutet das Vorzeichen für die Bewegung?
teile:
  - typ: zahl
    label: a) Arbeit der Zugkraft
    loesung: "12*cos(inRad(25))*15"
    einheit: "J"
    anzeige: '163'
    fehler:
      - wert: "12*15"
        meldung: Nur der waagrechte Anteil $F\cos 25^\circ$ zeigt in Wegrichtung.
  - typ: zahl
    label: b) Normalkraft
    loesung: "10*9.81 - 12*sin(inRad(25))"
    einheit: "N"
    anzeige: '93{,}0'
    fehler:
      - wert: "10*9.81"
        meldung: Die Leine zieht schräg nach oben und trägt einen Teil des Gewichts. Die Normalkraft ist deshalb kleiner als $m g$, nämlich $m g - F\sin\alpha$.
  - typ: zahl
    label: c) Arbeit der Reibung
    loesung: "-0.08*(10*9.81 - 12*sin(inRad(25)))*15"
    einheit: "J"
    anzeige: '-112'
    fehler:
      - wert: "-0.08*10*9.81*15"
        meldung: Du hast mit $F_N = m g$ gerechnet. Die Leine entlastet den Boden, also ist die Reibung kleiner.
  - typ: zahl
    label: d) Summe aller Arbeiten
    loesung: "12*cos(inRad(25))*15 - 0.08*(10*9.81 - 12*sin(inRad(25)))*15"
    einheit: "J"
    anzeige: '51{,}5'
hinweise:
  - Zeichne ein Freikörperbild mit vier Kräften. Die Zugkraft zerlegst du in einen waagrechten und einen senkrechten Anteil.
  - 'Senkrecht ist der Schlitten im Gleichgewicht: $F_N + F\sin\alpha = m g$. Gewichts- und Normalkraft verrichten keine Arbeit.'
loesung: |
  **Modell:** Vier Kräfte wirken: Gewichtskraft (unten), Normalkraft (oben), Zugkraft (schräg nach vorn oben) und Gleitreibung (nach hinten). Gewichts- und Normalkraft stehen senkrecht zum Weg und verrichten keine Arbeit.
  ---
  **a)** $W_Z = F s\cos\alpha = 12\,\text{N}\cdot 15\,\text{m}\cdot\cos 25^\circ = 163\,\text{J}$.
  ---
  **b)** Senkrecht gilt $F_N + F\sin\alpha = m g$, also $F_N = 98{,}1\,\text{N} - 12\,\text{N}\cdot\sin 25^\circ = 98{,}1\,\text{N} - 5{,}07\,\text{N} = 93{,}0\,\text{N}$.
  ---
  **c)** $F_R = \mu_G F_N = 0{,}08\cdot 93{,}0\,\text{N} = 7{,}44\,\text{N}$. Die Reibung zeigt gegen den Weg: $W_R = -7{,}44\,\text{N}\cdot 15\,\text{m} = -112\,\text{J}$.
  ---
  **d)** $W_{\text{ges}} = 163{,}1\,\text{J} - 111{,}6\,\text{J} + 0 + 0 = 51{,}5\,\text{J}$ (mit ungerundeten Zwischenwerten gerechnet). Die Summe ist positiv, also wird der Schlitten schneller. Wie viel schneller, sagt der Arbeit-Energie-Satz in der Lektion [Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

## Arbeit bei veränderlicher Kraft: die Fläche unter dem F-s-Diagramm

```aufgabe
id: p4-2-check
art: check
titel: "Vorwissen: Fläche unter einer Geraden"
niveau: 1
angabe: |
  Berechne das bestimmte Integral $\displaystyle\int_0^2 3x\,\dd x$. Es ist die Fläche unter der Geraden $y = 3x$ zwischen $x = 0$ und $x = 2$.
teile:
  - typ: zahl
    loesung: "integral(\"3*x\", 0, 2)"
    anzeige: '6'
    fehler:
      - wert: "12"
        meldung: Das ist die Fläche des ganzen Rechtecks mit Breite $2$ und Höhe $6$. Unter der Geraden liegt nur ein Dreieck, also die Hälfte.
hinweise:
  - Die Fläche ist ein Dreieck mit Breite $2$ und Höhe $3\cdot 2 = 6$.
loesung: |
  Als Dreieck: Breite $2$, Höhe $6$, Fläche $\tfrac12\cdot 2\cdot 6 = 6$.
  ---
  Mit Stammfunktion: $\left[\tfrac32 x^2\right]_0^2 = \tfrac32\cdot 4 - 0 = 6$. Wiederholen: Mathematik, [Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).
```

Die Formel $W = F\cdot s\cos\alpha$ aus der Lektion
[Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit) gilt nur für eine
**konstante** Kraft. Viele Kräfte ändern sich aber unterwegs. Eine Feder zieht umso stärker, je weiter
du sie dehnst. Die Zugkraft eines Anhängers schwankt beim Anfahren. Wie berechnet man dann die Arbeit?

### Die Arbeit ist die Fläche unter dem F-s-Diagramm

**Worum geht es?** Wir tragen die Kraft $F$ in Wegrichtung über dem Weg $s$ auf. Das ist das
**F-s-Diagramm**. Wir zeigen, dass die Arbeit die Fläche unter dieser Kurve ist.

**Bild:** Für eine konstante Kraft ist der Graph eine waagrechte Linie in der Höhe $F$. Die Fläche
darunter ist ein Rechteck mit Breite $s$ und Höhe $F$. Ihre Größe ist $F\cdot s$, also genau die Arbeit.
Das kennst du aus dem v-t-Diagramm: Dort ist die Fläche unter dem Graphen der zurückgelegte Weg.

**In Schritten für eine veränderliche Kraft:**

1. Wir teilen den Weg in viele kleine Stücke der Länge $\Delta s$.
2. Auf einem so kleinen Stück ändert sich die Kraft kaum. Wir behandeln sie dort als konstant.
3. Auf einem Stück ist die Arbeit also $F\cdot\Delta s$. Das ist die Fläche eines schmalen Streifens.
4. Die gesamte Arbeit ist die Summe aller Streifen. Werden die Streifen beliebig schmal, wird aus der
   Summe genau die Fläche unter der Kurve.

**In Worten zurückübersetzt:** Arbeit ist Fläche unter dem F-s-Diagramm, egal wie krumm die Kurve ist.
In der Sprache der Mathematik ist diese Fläche ein bestimmtes Integral:
$$W = \int_{s_1}^{s_2} F(s)\,\dd s.$$
Dabei ist $F(s)$ die Kraft in Wegrichtung an der Stelle $s$ (in N), und $s_1$, $s_2$ sind Anfang und
Ende des Weges (in m). Wie man solche Integrale berechnet, steht in der Mathematiklektion
[Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit).
In der Prüfung reichen meist Dreiecke, Rechtecke und Trapeze.

```aufgabe
id: p4-2-check-dreieck
art: check
titel: Eine gleichmäßig wachsende Kraft
niveau: 1
angabe: |
  Eine Kraft in Wegrichtung wächst auf $2{,}0\,\text{m}$ gleichmäßig von $0$ auf $60\,\text{N}$. Wie viel Arbeit verrichtet sie (in J)?
teile:
  - typ: zahl
    loesung: "0.5*60*2"
    einheit: "J"
    anzeige: '60'
    fehler:
      - wert: "60*2"
        meldung: Das wäre richtig, wenn die Kraft die ganze Zeit $60\,\text{N}$ betragen hätte. Sie wächst aber erst von null an. Unter der Geraden liegt ein Dreieck.
hinweise:
  - Zeichne das F-s-Diagramm. Die Fläche darunter ist ein Dreieck.
loesung: |
  Im F-s-Diagramm ist der Graph eine Gerade von $(0 \mid 0)$ nach $(2{,}0\,\text{m} \mid 60\,\text{N})$. Darunter liegt ein Dreieck.
  ---
  $W = \tfrac12\cdot 2{,}0\,\text{m}\cdot 60\,\text{N} = 60\,\text{J}$. Das ist so viel, als hätte die mittlere Kraft $30\,\text{N}$ den ganzen Weg gewirkt.
```

### Die Spannarbeit einer Feder

Eine Feder gehorcht dem Hookeschen Gesetz $F = D\cdot s$ (siehe
[Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft)).
Dabei ist $D$ die Federkonstante (in N/m) und $s$ die Dehnung aus der entspannten Lage (in m). Der
Graph ist eine Gerade durch den Ursprung. Die Fläche darunter ist ein Dreieck mit Breite $s$ und Höhe
$D s$. Also ist die **Spannarbeit**
$$W_{\text{Spann}} = \tfrac12\cdot s\cdot D s = \tfrac12\,D\,s^2.$$

```plot
x: [0, 0.35]
y: [0, 140]
achsen: { x: "s in m", y: "F in N" }
graphen:
  - { f: "400*x", label: "F = D·s", farbe: 0, von: 0, bis: 0.32 }
flaechen:
  - { f: "400*x", g: "0", von: 0, bis: 0.15, farbe: 1 }
  - { f: "400*x", g: "0", von: 0.15, bis: 0.30, farbe: 2 }
strecken:
  - { von: [0.15, 0], nach: [0.15, 60], gestrichelt: true }
  - { von: [0.30, 0], nach: [0.30, 120], gestrichelt: true }
beschriftung: "F-s-Diagramm einer Feder mit D = 400 N/m. Die Spannarbeit ist die Fläche unter der Geraden. Bis 0,15 m ist es das orange Dreieck mit 4,5 J. Von 0,15 m bis 0,30 m kommt das grüne Trapez mit 13,5 J dazu. Die doppelte Dehnung kostet also insgesamt 18 J, das Vierfache."
```

:::beispiel[Ein Expander wird gedehnt]
Ein Trainingsexpander verhält sich wie eine Feder mit $D = 250\,\text{N/m}$. Wie viel Arbeit kostet es,
ihn um $0{,}40\,\text{m}$ zu dehnen, und wie viel kostet es, ihn danach weiter auf $0{,}80\,\text{m}$ zu dehnen?

**Schritt 1, erste Dehnung:** $W_1 = \tfrac12\cdot 250\,\text{N/m}\cdot(0{,}40\,\text{m})^2 = 125\,\text{N/m}\cdot 0{,}16\,\text{m}^2 = 20\,\text{J}$.

**Schritt 2, bis zur doppelten Dehnung:** $W_{\text{bis }0{,}80} = \tfrac12\cdot 250\,\text{N/m}\cdot(0{,}80\,\text{m})^2 = 80\,\text{J}$.

**Schritt 3, zweites Stück:** Es ist die Differenz, $W_2 = 80\,\text{J} - 20\,\text{J} = 60\,\text{J}$.

**Deutung:** Das zweite Stück kostet dreimal so viel wie das erste, weil die Kraft unterwegs immer größer
wird. Insgesamt kostet die doppelte Dehnung die vierfache Arbeit. Spannarbeit wächst mit dem **Quadrat**
der Dehnung.
:::

:::achtung[Fehler: Endkraft mal Weg]
Eine Feder mit $D = 400\,\text{N/m}$ wird um $0{,}30\,\text{m}$ gedehnt. Am Ende zieht sie mit
$F = 400\,\text{N/m}\cdot 0{,}30\,\text{m} = 120\,\text{N}$.

Falsch gerechnet: $W = 120\,\text{N}\cdot 0{,}30\,\text{m} = 36\,\text{J}$.

Die Kraft war aber nicht die ganze Zeit $120\,\text{N}$. Am Anfang war sie null. Unter der Geraden liegt
ein Dreieck, kein Rechteck. Richtig ist $W = \tfrac12\cdot 120\,\text{N}\cdot 0{,}30\,\text{m} = 18\,\text{J}$.
:::

:::achtung[Fehler: Differenz der Dehnungen quadriert]
Dieselbe Feder ($D = 400\,\text{N/m}$) wird von $0{,}10\,\text{m}$ auf $0{,}30\,\text{m}$ gedehnt.

Falsch gerechnet: $W = \tfrac12\cdot 400\,\text{N/m}\cdot(0{,}30\,\text{m} - 0{,}10\,\text{m})^2 = 8{,}0\,\text{J}$.

Diese Rechnung tut so, als wäre die Feder bei $0{,}10\,\text{m}$ noch entspannt. Sie zieht dort aber schon
mit $40\,\text{N}$. Richtig ist die Differenz der Spannarbeiten:
$W = \tfrac12\cdot 400\,\text{N/m}\cdot(0{,}09\,\text{m}^2 - 0{,}01\,\text{m}^2) = 16\,\text{J}$.
:::

### Ein gemessenes F-s-Diagramm auswerten

Bei echten Vorgängen kennt man oft keine Formel, sondern nur eine gemessene Kurve. Dann zerlegst du die
Fläche in einfache Stücke.

```plot
x: [0, 0.9]
y: [0, 250]
achsen: { x: "s in m", y: "F in N" }
graphen:
  - { f: "1000*x", farbe: 0, von: 0, bis: 0.2 }
  - { f: "200", farbe: 0, von: 0.2, bis: 0.6 }
  - { f: "200 - 1000*(x - 0.6)", farbe: 0, von: 0.6, bis: 0.8 }
flaechen:
  - { f: "1000*x", g: "0", von: 0, bis: 0.2, farbe: 1 }
  - { f: "200", g: "0", von: 0.2, bis: 0.6, farbe: 2 }
  - { f: "200 - 1000*(x - 0.6)", g: "0", von: 0.6, bis: 0.8, farbe: 3 }
punkte:
  - { x: 0.2, y: 200, label: "(0,2 m | 200 N)" }
  - { x: 0.6, y: 200, label: "(0,6 m | 200 N)" }
beschriftung: "Gemessene Zugkraft beim Verschieben eines Rollwagens. Die Kraft steigt auf den ersten 0,2 m gleichmäßig auf 200 N, bleibt bis 0,6 m konstant und fällt bis 0,8 m wieder auf null. Die Fläche besteht aus zwei Dreiecken (orange, violett) und einem Rechteck (grün)."
```

:::beispiel[Arbeit aus einer gemessenen Kurve]
Wie viel Arbeit verrichtet die Zugkraft im Diagramm auf den $0{,}8\,\text{m}$?

**Schritt 1, zerlegen:** Die Fläche besteht aus einem Dreieck von $0$ bis $0{,}2\,\text{m}$, einem
Rechteck von $0{,}2$ bis $0{,}6\,\text{m}$ und einem Dreieck von $0{,}6$ bis $0{,}8\,\text{m}$.

**Schritt 2, Teilflächen:** Dreieck: $\tfrac12\cdot 0{,}2\,\text{m}\cdot 200\,\text{N} = 20\,\text{J}$.
Rechteck: $0{,}4\,\text{m}\cdot 200\,\text{N} = 80\,\text{J}$. Zweites Dreieck: wieder $20\,\text{J}$.

**Schritt 3, addieren:** $W = 20\,\text{J} + 80\,\text{J} + 20\,\text{J} = 120\,\text{J}$.

**Probe:** Hätte die Kraft die ganzen $0{,}8\,\text{m}$ lang $200\,\text{N}$ betragen, wären es
$160\,\text{J}$. Unsere Fläche ist kleiner, weil die Kraft am Anfang und am Ende kleiner war. ✓
:::

:::merke[So bestimmst du die Arbeit einer veränderlichen Kraft]
1. Zeichne oder lies das F-s-Diagramm (Kraft in Wegrichtung über dem Weg).
2. Zerlege die Fläche in Rechtecke, Dreiecke und Trapeze, oder integriere, wenn $F(s)$ als Term gegeben ist.
3. Bei einer Feder: $W = \tfrac12 D s^2$, gemessen ab der **entspannten** Lage. Für ein Stück von $s_1$
   bis $s_2$ bildest du die Differenz $\tfrac12 D(s_2^2 - s_1^2)$.
:::

```reflexion
frage: Warum kostet es viermal so viel Arbeit, eine Feder doppelt so weit zu dehnen? Erkläre es mit dem F-s-Diagramm, ohne zu rechnen.
antwort: |
  Die Arbeit ist die Fläche des Dreiecks unter der Geraden $F = D s$. Bei doppelter Dehnung wird das Dreieck
  doppelt so breit. Weil die Kraft mit der Dehnung wächst, wird es auch doppelt so hoch. Ein doppelt so breites
  und doppelt so hohes Dreieck hat die vierfache Fläche. Deshalb steht in $\tfrac12 D s^2$ das Quadrat.
```

### Aufgaben zur Arbeit aus dem F-s-Diagramm

```aufgabe
id: p4-spannarbeit
titel: Spannarbeit einer Feder
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Eine Feder mit $D = 600\,\text{N/m}$ wird aus der entspannten Lage zunächst um $10\,\text{cm}$ gedehnt und dann weiter auf $20\,\text{cm}$.

  a) Welche Arbeit ist für die ersten $10\,\text{cm}$ nötig (in J)?

  b) Welche Arbeit ist für die zweiten $10\,\text{cm}$ nötig (in J)?
teile:
  - typ: zahl
    label: a)
    loesung: "0.5*600*0.10^2"
    einheit: "J"
    anzeige: '3{,}0'
    fehler:
      - wert: "600*0.1^2"
        meldung: Du hast Endkraft mal Weg gerechnet. Die Kraft wächst aber von null an, unter der Geraden liegt ein Dreieck. Es fehlt der Faktor $\tfrac12$.
      - wert: "0.5*600*10^2"
        meldung: Du hast die Dehnung in Zentimetern eingesetzt. Mit $D$ in N/m muss $s$ in Metern stehen, also $0{,}10\,\text{m}$.
  - typ: zahl
    label: b)
    loesung: "0.5*600*(0.20^2 - 0.10^2)"
    einheit: "J"
    anzeige: '9{,}0'
    fehler:
      - wert: "0.5*600*0.1^2"
        meldung: Das wäre richtig, wenn die Feder bei $10\,\text{cm}$ wieder entspannt wäre. Sie zieht dort aber schon mit $60\,\text{N}$. Bilde die Differenz $\tfrac12 D(s_2^2 - s_1^2)$.
hinweise:
  - 'Spannarbeit ab der entspannten Lage: $W = \tfrac12 D s^2$ mit $s$ in Metern.'
loesung: |
  **Ansatz:** Die Spannarbeit ist die Dreiecksfläche unter $F = D s$, also $W = \tfrac12 D s^2$ ab der entspannten Lage.
  ---
  **a)** $W_1 = \tfrac12\cdot 600\,\text{N/m}\cdot(0{,}10\,\text{m})^2 = 3{,}0\,\text{J}$.
  ---
  **b)** $W_2 = \tfrac12\cdot 600\,\text{N/m}\cdot(0{,}040\,\text{m}^2 - 0{,}010\,\text{m}^2) = 300\,\text{N/m}\cdot 0{,}030\,\text{m}^2 = 9{,}0\,\text{J}$. Das zweite Stück kostet dreimal so viel, weil die Kraft unterwegs größer ist.
```

```aufgabe
id: p4-2-stufen
titel: Arbeit aus einem stufenförmigen Diagramm
niveau: 1
lernziel: 1
kompetenz: anwenden
angabe: |
  Ein Wagen wird auf den ersten $2{,}5\,\text{m}$ mit $80\,\text{N}$ und danach auf weiteren $1{,}5\,\text{m}$ mit $40\,\text{N}$ in Fahrtrichtung gezogen. Das Diagramm zeigt die Kraft über dem Weg. Welche Arbeit verrichtet die Zugkraft insgesamt (in J)?
plot:
  x: [0, 4.5]
  y: [0, 100]
  achsen: { x: "s in m", y: "F in N" }
  graphen:
    - { f: "80", farbe: 0, von: 0, bis: 2.5 }
    - { f: "40", farbe: 0, von: 2.5, bis: 4 }
  strecken:
    - { von: [2.5, 40], nach: [2.5, 80], gestrichelt: true }
    - { von: [4, 0], nach: [4, 40], gestrichelt: true }
teile:
  - typ: zahl
    loesung: "80*2.5 + 40*1.5"
    einheit: "J"
    anzeige: '260'
    fehler:
      - wert: "80*4"
        meldung: Du hast die erste Kraft für den ganzen Weg genommen. Auf den letzten $1{,}5\,\text{m}$ war sie nur $40\,\text{N}$.
      - wert: "(80+40)*4"
        meldung: Du hast die beiden Kräfte addiert. Sie wirken aber nacheinander, nicht gleichzeitig. Berechne zwei Rechtecke und addiere ihre Flächen.
hinweise:
  - Die Fläche unter dem Graphen besteht aus zwei Rechtecken.
loesung: |
  **Ansatz:** Die Arbeit ist die Fläche unter dem F-s-Diagramm. Hier sind das zwei Rechtecke.
  ---
  Erstes Rechteck: $80\,\text{N}\cdot 2{,}5\,\text{m} = 200\,\text{J}$. Zweites Rechteck: $40\,\text{N}\cdot 1{,}5\,\text{m} = 60\,\text{J}$.
  ---
  $W = 200\,\text{J} + 60\,\text{J} = 260\,\text{J}$. Probe: Das liegt zwischen $40\,\text{N}\cdot 4\,\text{m} = 160\,\text{J}$ und $80\,\text{N}\cdot 4\,\text{m} = 320\,\text{J}$. ✓
```

```aufgabe
id: p4-2-diagramm
titel: Fläche aus Dreieck und Rechteck
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Beim Spannen einer Armbrust wurde die Kraft entlang des Spannweges gemessen. Sie steigt auf den ersten $0{,}10\,\text{m}$ gleichmäßig von $0$ auf $150\,\text{N}$ und bleibt dann bis $0{,}50\,\text{m}$ konstant. Welche Arbeit ist zum Spannen nötig (in J)?
plot:
  x: [0, 0.6]
  y: [0, 180]
  achsen: { x: "s in m", y: "F in N" }
  graphen:
    - { f: "1500*x", farbe: 0, von: 0, bis: 0.1 }
    - { f: "150", farbe: 0, von: 0.1, bis: 0.5 }
  strecken:
    - { von: [0.5, 0], nach: [0.5, 150], gestrichelt: true }
teile:
  - typ: zahl
    loesung: "0.5*0.1*150 + 0.4*150"
    einheit: "J"
    anzeige: '67{,}5'
    fehler:
      - wert: "150*0.5"
        meldung: Du hast so gerechnet, als wäre die Kraft von Anfang an $150\,\text{N}$. Auf den ersten $0{,}10\,\text{m}$ steigt sie aber erst an. Dort liegt ein Dreieck, kein Rechteck.
      - wert: "0.5*150*0.5"
        meldung: Du hast die ganze Fläche als Dreieck behandelt. Nur das erste Stück ist ein Dreieck, danach folgt ein Rechteck.
hinweise:
  - Zerlege die Fläche in ein Dreieck (0 bis 0,10 m) und ein Rechteck (0,10 bis 0,50 m).
  - Dreiecksfläche $\tfrac12\cdot$ Breite $\cdot$ Höhe, Rechteck Breite $\cdot$ Höhe. Achte auf die Breite des Rechtecks.
gefuehrt:
  - text: Wie groß ist die Fläche des Dreiecks von $0$ bis $0{,}10\,\text{m}$ in J?
    teil: { typ: zahl, loesung: "0.5*0.1*150" }
    erklaerung: '$\tfrac12\cdot 0{,}10\,\text{m}\cdot 150\,\text{N} = 7{,}5\,\text{J}$.'
  - text: Wie breit ist das Rechteck in m?
    teil: { typ: zahl, loesung: "0.5-0.1" }
    erklaerung: Es reicht von $0{,}10\,\text{m}$ bis $0{,}50\,\text{m}$, ist also $0{,}40\,\text{m}$ breit.
  - text: Wie groß ist die Fläche des Rechtecks in J?
    teil: { typ: zahl, loesung: "0.4*150" }
    erklaerung: '$0{,}40\,\text{m}\cdot 150\,\text{N} = 60\,\text{J}$.'
  - text: Wie groß ist die gesamte Spannarbeit in J?
    teil: { typ: zahl, loesung: "7.5+60" }
    erklaerung: '$7{,}5\,\text{J} + 60\,\text{J} = 67{,}5\,\text{J}$.'
loesung: |
  **Ansatz:** Die Arbeit ist die Fläche unter dem F-s-Diagramm. Sie besteht aus einem Dreieck und einem Rechteck.
  ---
  **Dreieck** ($0$ bis $0{,}10\,\text{m}$): $\tfrac12\cdot 0{,}10\,\text{m}\cdot 150\,\text{N} = 7{,}5\,\text{J}$.
  ---
  **Rechteck** ($0{,}10$ bis $0{,}50\,\text{m}$): $0{,}40\,\text{m}\cdot 150\,\text{N} = 60\,\text{J}$.
  ---
  $W = 7{,}5\,\text{J} + 60\,\text{J} = 67{,}5\,\text{J}$. Probe: etwas weniger als das volle Rechteck mit $75\,\text{J}$. ✓
```

```aufgabe
id: p4-2-federkonstante-messung
titel: Federkonstante aus einer Messreihe
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  An einer Feder wurden folgende Wertepaare gemessen (Dehnung $s$, Kraft $F$):

  - $s = 2{,}0\,\text{cm}$: $F = 1{,}0\,\text{N}$.
  - $s = 4{,}0\,\text{cm}$: $F = 2{,}1\,\text{N}$.
  - $s = 6{,}0\,\text{cm}$: $F = 2{,}9\,\text{N}$.
  - $s = 8{,}0\,\text{cm}$: $F = 4{,}0\,\text{N}$.

  a) Berechne für jedes Paar $D = F/s$ in N/m und bilde den Mittelwert.

  b) Gib als Unsicherheit die halbe Spannweite der vier Einzelwerte an (größter minus kleinster Wert, geteilt durch 2), in N/m.

  c) Wie groß ist mit dem Mittelwert aus a) die Spannarbeit bis $s = 8{,}0\,\text{cm}$ (in J)?
teile:
  - typ: zahl
    label: a) Mittelwert von D
    loesung: "(1/0.02 + 2.1/0.04 + 2.9/0.06 + 4/0.08)/4"
    einheit: "N/m"
    anzeige: '50{,}2'
    fehler:
      - wert: "(1/2 + 2.1/4 + 2.9/6 + 4/8)/4"
        meldung: Du hast die Dehnung in Zentimetern eingesetzt. Für N/m musst du $s$ in Metern einsetzen, zum Beispiel $2{,}0\,\text{cm} = 0{,}020\,\text{m}$.
  - typ: zahl
    label: b) Unsicherheit
    loesung: "(2.1/0.04 - 2.9/0.06)/2"
    einheit: "N/m"
    anzeige: '2{,}1'
    toleranz: 0.1
    fehler:
      - wert: "2.1/0.04 - 2.9/0.06"
        meldung: Das ist die ganze Spannweite. Als Unsicherheit nimmst du hier die **halbe** Spannweite.
  - typ: zahl
    label: c) Spannarbeit bis 8 cm
    loesung: "0.5*(1/0.02 + 2.1/0.04 + 2.9/0.06 + 4/0.08)/4*0.08^2"
    einheit: "J"
    anzeige: '0{,}161'
    toleranz: 0.002
    fehler:
      - wert: "(1/0.02 + 2.1/0.04 + 2.9/0.06 + 4/0.08)/4*0.08^2"
        meldung: Der Faktor $\tfrac12$ fehlt. Unter der Geraden $F = D s$ liegt ein Dreieck.
hinweise:
  - Rechne die Dehnungen zuerst in Meter um. Dann ist zum Beispiel $D_1 = 1{,}0\,\text{N}/0{,}020\,\text{m}$.
  - Für c) gilt $W = \tfrac12 D s^2$ mit $s = 0{,}080\,\text{m}$.
loesung: |
  **Ansatz:** Für eine ideale Feder ist $F/s$ immer gleich, nämlich $D$. Die Messwerte streuen etwas. Deshalb mitteln wir.
  ---
  **a)** Einzelwerte: $50{,}0$; $52{,}5$; $48{,}3$; $50{,}0\,\text{N/m}$. Mittelwert: $\bar D = \dfrac{200{,}8\,\text{N/m}}{4} = 50{,}2\,\text{N/m}$.
  ---
  **b)** Spannweite $52{,}5 - 48{,}3 = 4{,}2\,\text{N/m}$, die Hälfte ist $2{,}1\,\text{N/m}$. Ergebnis: $D = (50 \pm 2)\,\text{N/m}$.
  ---
  **c)** $W = \tfrac12\cdot 50{,}2\,\text{N/m}\cdot(0{,}080\,\text{m})^2 = 0{,}161\,\text{J}$. Probe mit dem letzten Messwert: Dreieck $\tfrac12\cdot 4{,}0\,\text{N}\cdot 0{,}080\,\text{m} = 0{,}16\,\text{J}$. ✓
```

```aufgabe
id: p4-2-proportional
titel: Dreifache Dehnung
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  Eine Feder wird erst um eine Strecke $s$ und dann aus der entspannten Lage um $3s$ gedehnt. Um welchen Faktor ist die Spannarbeit im zweiten Fall größer?
teile:
  - typ: zahl
    loesung: "3^2"
    anzeige: '9'
    fehler:
      - wert: "3"
        meldung: Das gilt für die **Kraft** am Ende. Die Arbeit ist aber die Dreiecksfläche, und die wächst mit Breite **und** Höhe.
      - wert: "6"
        meldung: Du hast vielleicht $2\cdot 3$ gerechnet. In $W = \tfrac12 D s^2$ steht ein Quadrat, also $3^2$.
hinweise:
  - Schreibe $W = \tfrac12 D s^2$ und ersetze $s$ durch $3s$.
  - Der Faktor ist $W_{\text{neu}}/W_{\text{alt}}$; $D$ und $\tfrac12$ kürzen sich.
loesung: |
  **Ansatz:** $W = \tfrac12 D s^2$. Mit $3s$ statt $s$: $W_{\text{neu}} = \tfrac12 D (3s)^2 = 9\cdot\tfrac12 D s^2$.
  ---
  **Vergleich:** $W_{\text{neu}}/W_{\text{alt}} = 9$.
  ---
  **Deutung im Diagramm:** Das Dreieck wird dreimal so breit und dreimal so hoch, also hat es die neunfache Fläche.
```

```aufgabe
id: p4-2-fehler-finden
titel: Einen Rechenfehler finden
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: |
  Eine Mitschülerin soll berechnen, wie viel Arbeit es kostet, eine Feder mit $D = 800\,\text{N/m}$ von $5{,}0\,\text{cm}$ auf $15\,\text{cm}$ Dehnung zu bringen. Sie rechnet $W = \tfrac12\cdot 800\cdot(0{,}15 - 0{,}05)^2\,\text{J} = 4{,}0\,\text{J}$. Wie viel Arbeit ist wirklich nötig (in J)?
teile:
  - typ: zahl
    loesung: "0.5*800*(0.15^2 - 0.05^2)"
    einheit: "J"
    anzeige: '8{,}0'
    fehler:
      - wert: "4"
        meldung: Das ist das Ergebnis der Mitschülerin. Sie hat die Differenz der Dehnungen quadriert, als wäre die Feder bei $5\,\text{cm}$ entspannt.
      - wert: "0.5*800*0.15^2"
        meldung: Das ist die Arbeit ab der entspannten Lage. Die ersten $5\,\text{cm}$ waren schon gedehnt, ziehe ihre Spannarbeit ab.
hinweise:
  - Bei $5{,}0\,\text{cm}$ zieht die Feder schon. Die Fläche ist ein Trapez, kein Dreieck ab null.
  - 'Richtig ist die Differenz $\tfrac12 D (s_2^2 - s_1^2)$.'
loesung: |
  **Fehler:** Die Mitschülerin quadriert $(s_2 - s_1)$. Das stimmt nur, wenn die Feder am Anfang entspannt ist. Hier zieht sie bei $5\,\text{cm}$ schon mit $40\,\text{N}$.
  ---
  **Richtig:** $W = \tfrac12\cdot 800\,\text{N/m}\cdot\big((0{,}15\,\text{m})^2 - (0{,}050\,\text{m})^2\big) = 400\,\text{N/m}\cdot 0{,}020\,\text{m}^2 = 8{,}0\,\text{J}$.
  ---
  **Probe als Trapez:** Kraft von $40\,\text{N}$ auf $120\,\text{N}$, mittlere Kraft $80\,\text{N}$, Weg $0{,}10\,\text{m}$: $80\,\text{N}\cdot 0{,}10\,\text{m} = 8{,}0\,\text{J}$. ✓
```

```aufgabe
id: p4-2-integral
titel: Ein Expander mit gekrümmter Kennlinie
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Ein Gummiexpander wird beim Dehnen immer steifer. Seine Kraft hängt so von der Dehnung ab: $F(s) = 300\,s + 500\,s^2$, mit $s$ in m und $F$ in N. Er wird von $s = 0$ auf $s = 0{,}40\,\text{m}$ gedehnt.

  a) Wie groß ist die Kraft am Ende (in N)?

  b) Welche Arbeit ist nötig (in J)? Runde auf drei signifikante Stellen.

  c) Eine ideale Feder würde am Ende mit derselben Kraft ziehen. Wie groß wäre ihre Spannarbeit für dieselbe Dehnung (in J)?
teile:
  - typ: zahl
    label: a) Endkraft
    loesung: "300*0.4 + 500*0.4^2"
    einheit: "N"
    anzeige: '200'
  - typ: zahl
    label: b) Arbeit
    loesung: "integral(\"300*x + 500*x^2\", 0, 0.4)"
    einheit: "J"
    anzeige: '34{,}7'
    fehler:
      - wert: "0.5*200*0.4"
        meldung: Das wäre die Dreiecksfläche einer geraden Kennlinie. Die Kurve ist hier aber gekrümmt und liegt unter dieser Geraden. Integriere $F(s)$.
  - typ: zahl
    label: c) ideale Feder
    loesung: "0.5*200*0.4"
    einheit: "J"
    anzeige: '40'
hinweise:
  - 'Die Arbeit ist $W = \int_0^{0{,}40} (300 s + 500 s^2)\,\dd s$. Eine Stammfunktion ist $150 s^2 + \tfrac{500}{3}s^3$.'
  - Für c) ist die Kennlinie eine Gerade von $(0 \mid 0)$ nach $(0{,}40 \mid 200)$, die Fläche also ein Dreieck.
loesung: |
  **Modell:** Die Kraft ändert sich mit dem Weg. Die Arbeit ist deshalb die Fläche unter der Kurve, also ein Integral (siehe [Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit)).
  ---
  **a)** $F(0{,}40) = 300\cdot 0{,}40\,\text{N} + 500\cdot 0{,}16\,\text{N} = 120\,\text{N} + 80\,\text{N} = 200\,\text{N}$.
  ---
  **b)** $W = \left[150 s^2 + \tfrac{500}{3}s^3\right]_0^{0{,}40} = 150\cdot 0{,}16\,\text{J} + \tfrac{500}{3}\cdot 0{,}064\,\text{J} = 24\,\text{J} + 10{,}7\,\text{J} = 34{,}7\,\text{J}$. Die Einheit ist N mal m, also J.
  ---
  **c)** $W = \tfrac12\cdot 200\,\text{N}\cdot 0{,}40\,\text{m} = 40\,\text{J}$. Der Expander braucht weniger Arbeit, weil seine Kurve auf dem Weg unter der Geraden liegt. Er ist anfangs weicher und erst am Ende steif. ✓
```

## Energie

```aufgabe
id: p4-3-check
art: check
titel: "Vorwissen: Arbeit der resultierenden Kraft"
niveau: 1
angabe: |
  Auf einen Wagen wirkt in Fahrtrichtung eine resultierende Kraft von $20\,\text{N}$, während er $5{,}0\,\text{m}$ weit fährt. Welche Arbeit verrichtet die resultierende Kraft (in J)?
teile:
  - typ: zahl
    loesung: "20*5"
    einheit: "J"
    anzeige: '100'
    fehler:
      - wert: "20/5"
        meldung: Arbeit ist Kraft **mal** Weg.
hinweise:
  - Kraft und Weg zeigen in dieselbe Richtung, also $W = F\cdot s$.
loesung: |
  Kraft und Weg sind parallel, also $W = F\cdot s$.
  ---
  $W = 20\,\text{N}\cdot 5{,}0\,\text{m} = 100\,\text{J}$. Wiederholen: [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).
```

### Was ist Energie?

**Worum geht es?** Energie ist eine der wichtigsten und zugleich abstraktesten Größen der Physik. Man
kann sie nicht sehen oder anfassen. Man kann sie aber berechnen, und ihre Summe ändert sich nie, wenn man alle beteiligten Körper mitzählt. Genau das
macht sie so nützlich.

**Bild: ein Konto.** Stell dir die Energie als Guthaben auf mehreren Konten vor. Es gibt ein Konto
„Bewegung“, ein Konto „Höhe“, ein Konto „Feder“, ein Konto „Wärme“ und weitere. Guthaben kann von einem
Konto auf ein anderes wandern. Die **Arbeit** ist eine solche Überweisung: Eine Kraft verschiebt Energie
von einem Körper auf einen anderen oder von einer Form in eine andere. Die Summe aller Konten bleibt dabei
gleich.

:::definition[Energie]
**Energie** ist die Fähigkeit eines Körpers oder Systems, Arbeit zu verrichten, Wärme abzugeben oder Licht
auszusenden. Sie hat dieselbe Einheit wie die Arbeit, das **Joule** (J). Arbeit ist Energie, die durch eine
Kraft entlang eines Weges **übertragen** wird.
:::

Es gibt viele **Energieformen**: Bewegungsenergie, Lageenergie, Spannenergie, innere Energie (Wärme),
elektrische, chemische, Strahlungs- und Kernenergie. In der Mechanik rechnen wir mit den ersten drei.

Ein **Nicht-Beispiel**: Energie ist keine Kraft. Im Alltag sagt man „Ich habe keine Kraft mehr“, wenn man
erschöpft ist. Physikalisch fehlt dann Energie, also die Fähigkeit, Arbeit zu verrichten. Eine Kraft wird in
Newton gemessen, Energie in Joule. Die beiden Größen haben verschiedene Einheiten und dürfen nie addiert
werden.

### Kinetische Energie

Ein bewegter Körper kann Arbeit verrichten. Ein Hammer treibt einen Nagel ein, ein fahrendes Auto verformt
bei einem Unfall Blech. Woher kommt diese Fähigkeit? Er hat sie beim Beschleunigen bekommen.

**Herleitung:** Eine konstante resultierende Kraft $F = m a$ beschleunigt einen Körper aus der Ruhe auf die
Geschwindigkeit $v$. Aus der Kinematik wissen wir $v^2 = 2 a s$, also ist der Weg $s = \dfrac{v^2}{2a}$.
Die Kraft verrichtet die Arbeit
$$W = F\cdot s = m a\cdot\frac{v^2}{2a} = \tfrac12\,m\,v^2.$$
Die Beschleunigung $a$ kürzt sich heraus. Diese Arbeit steckt danach als **kinetische Energie**
(Bewegungsenergie) im Körper:
$$E_{\text{kin}} = \tfrac12\,m\,v^2.$$
Dabei ist $m$ die Masse (in kg) und $v$ der Betrag der Geschwindigkeit (in m/s). Die Einheit ist
$\text{kg}\cdot\text{m}^2/\text{s}^2 = \text{J}$.

:::beispiel[Ein Radfahrer wird doppelt so schnell]
Radfahrer und Rad haben zusammen $80\,\text{kg}$. Wie groß ist die kinetische Energie bei $18\,\text{km/h}$
und bei $36\,\text{km/h}$?

**Schritt 1, umrechnen:** $18\,\text{km/h} = 18/3{,}6\,\text{m/s} = 5{,}0\,\text{m/s}$ und $36\,\text{km/h} = 10\,\text{m/s}$.

**Schritt 2, einsetzen:** $E_1 = \tfrac12\cdot 80\,\text{kg}\cdot(5{,}0\,\text{m/s})^2 = 1000\,\text{J}$ und
$E_2 = \tfrac12\cdot 80\,\text{kg}\cdot(10\,\text{m/s})^2 = 4000\,\text{J}$.

**Deutung:** Doppelte Geschwindigkeit ergibt **vierfache** Energie, denn $v$ steht im Quadrat. Genau diese
Energie müssen die Bremsen beim Anhalten in Wärme umwandeln.
:::

:::achtung[Fehler: km/h nicht in m/s umgerechnet]
Ein Auto mit $800\,\text{kg}$ fährt mit $54\,\text{km/h}$.

Falsch gerechnet: $E_{\text{kin}} = \tfrac12\cdot 800\cdot 54^2\,\text{J} = 1\,166\,400\,\text{J}$.

Joule ist $\text{kg}\cdot\text{m}^2/\text{s}^2$, also muss $v$ in m/s stehen. Richtig: $54\,\text{km/h} = 15\,\text{m/s}$ und
$E_{\text{kin}} = \tfrac12\cdot 800\,\text{kg}\cdot(15\,\text{m/s})^2 = 90\,000\,\text{J} = 90\,\text{kJ}$. Der Fehler macht das
Ergebnis fast dreizehnmal zu groß, weil $3{,}6^2 \approx 13$ ist.
:::

:::achtung[Fehler: „doppelt so schnell, doppelt so viel Energie“]
Ein Auto mit $1000\,\text{kg}$ hat bei $30\,\text{km/h}$ die Energie
$\tfrac12\cdot 1000\,\text{kg}\cdot(8{,}33\,\text{m/s})^2 = 34{,}7\,\text{kJ}$.

Falsch gedacht: Bei $60\,\text{km/h}$ sind es doppelt so viel, also $69{,}4\,\text{kJ}$.

Richtig: $\tfrac12\cdot 1000\,\text{kg}\cdot(16{,}7\,\text{m/s})^2 = 139\,\text{kJ}$, also das **Vierfache**. Deshalb ist
auch der Bremsweg bei doppelter Geschwindigkeit viermal so lang.
:::

### Lageenergie

Ein gehobener Körper kann beim Herunterfallen Arbeit verrichten. Die Hubarbeit $m g h$ aus der Lektion
[Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit) ist in ihm gespeichert. Diese
gespeicherte Energie heißt **Lageenergie** oder **potentielle Energie**:
$$E_{\text{pot}} = m\,g\,h.$$
Dabei ist $h$ die Höhe über einem **Nullniveau**, das du frei wählen darfst. Das klingt seltsam, ist aber
harmlos. Physikalisch zählen nur **Differenzen** der Lageenergie, und die hängen nicht vom Nullniveau ab.

:::beispiel[Ein Buch auf dem Regal mit zwei Nullniveaus]
Ein Buch ($1{,}5\,\text{kg}$) liegt auf einem Regal $1{,}8\,\text{m}$ über dem Boden. Ein Tisch ist
$0{,}80\,\text{m}$ hoch. Das Buch fällt auf den Tisch.

**Nullniveau Boden:** oben $E = 1{,}5\cdot 9{,}81\cdot 1{,}8\,\text{J} = 26{,}5\,\text{J}$, auf dem Tisch
$E = 1{,}5\cdot 9{,}81\cdot 0{,}80\,\text{J} = 11{,}8\,\text{J}$. Differenz: $14{,}7\,\text{J}$.

**Nullniveau Tischplatte:** oben $E = 1{,}5\cdot 9{,}81\cdot 1{,}0\,\text{J} = 14{,}7\,\text{J}$, auf dem Tisch $E = 0$.
Differenz: wieder $14{,}7\,\text{J}$.

**Deutung:** Die einzelnen Werte hängen vom Nullniveau ab, die Differenz nicht. Nur die Differenz kann in
Bewegungsenergie umgewandelt werden. Am bequemsten legt man das Nullniveau an den tiefsten Punkt der Bewegung.
:::

Ein **Gegenbeispiel** zur Formel: Für einen Satelliten in $400\,\text{km}$ Höhe ist $m g h$ falsch, weil $g$
dort kleiner ist. Die Formel gilt nur in Erdnähe, wo $g$ praktisch konstant ist. Für große Höhen braucht man
das Gravitationsgesetz aus dem Kapitel Kreisbewegung und Gravitation, Lektion
[Gravitationsenergie, Bahnwechsel und Fluchtgeschwindigkeit](/lernen/physik1/kreisbewegung-gravitation/gravitationsenergie-bahnwechsel-und-fluchtgeschwindigkeit).

### Spannenergie

Eine gespannte Feder speichert ihre Spannarbeit aus der Lektion
[Arbeit bei veränderlicher Kraft](/lernen/physik1/arbeit-energie-impuls/arbeit-bei-veraenderlicher-kraft-die-flaeche-unter-dem-f-s-diagramm)
als **Spannenergie**:
$$E_{\text{Spann}} = \tfrac12\,D\,s^2.$$
Dabei ist $D$ die Federkonstante (in N/m) und $s$ die Dehnung oder Stauchung aus der entspannten Lage
(in m). Bogen, Trampolin, Federpistole und Uhrfeder nutzen diese Energie.

### Der Arbeit-Energie-Satz

Die Herleitung von $\tfrac12 m v^2$ zeigt einen allgemeinen Zusammenhang. Die Arbeit der resultierenden
Kraft geht vollständig in die Änderung der Bewegungsenergie.

:::satz[Arbeit-Energie-Satz]
Die Arbeit der **resultierenden** Kraft auf einen Körper ist gleich der Änderung seiner kinetischen Energie:
$$W_{\text{res}} = E_{\text{kin,2}} - E_{\text{kin,1}} = \tfrac12 m v_2^2 - \tfrac12 m v_1^2.$$
Dabei ist $v_1$ die Geschwindigkeit am Anfang und $v_2$ die am Ende des Weges.
:::

Ist $W_{\text{res}}$ positiv, wird der Körper schneller. Ist sie negativ, wird er langsamer. Ist sie null,
bleibt sein Tempo gleich, wie bei der geschobenen Kiste in der Lektion
[Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit). Der Satz ist besonders
praktisch, wenn Kraft und Weg bekannt sind und eine Geschwindigkeit gesucht ist. Die Zeit braucht man
dafür nicht.

```plot
x: [-4, 4]
y: [-5.5, 5.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -4.58], label: "F_G = 13,7 kN", farbe: 0 }
  - { von: [0, 0], nach: [0, 4.58], label: "F_N = 13,7 kN", farbe: 2 }
  - { von: [0, 0], nach: [-3.2, 0], label: "F_R = 9,6 kN", farbe: 3 }
strecken:
  - { von: [1, -0.6], nach: [3.5, -0.6], farbe: 4 }
punkte:
  - { x: 0, y: 0, label: "Auto" }
  - { x: 3.5, y: -0.6, label: "Fahrtrichtung →" }
beschriftung: "Freikörperbild eines bremsenden Autos (1400 kg), Maßstab 3 kN pro Kästchen. Senkrecht heben sich Gewichtskraft (blau) und Normalkraft (grün) auf. Waagrecht wirkt nur die Reibung der Reifen (violett) gegen die Fahrtrichtung. Sie ist die resultierende Kraft und verrichtet negative Arbeit."
```

:::beispiel[Bremsweg mit dem Arbeit-Energie-Satz]
Ein Auto ($1400\,\text{kg}$) fährt mit $72\,\text{km/h}$ und bremst bis zum Stillstand. Die Bremsung
entspricht einer Reibungszahl $\mu = 0{,}70$. Wie lang ist der Bremsweg?

**Schritt 1, resultierende Kraft:** Nur die Reibung wirkt waagrecht, $F_R = \mu m g$, gegen die Fahrtrichtung.

**Schritt 2, Arbeit-Energie-Satz:** $W_{\text{res}} = -\mu m g\, s$ und $\Delta E_{\text{kin}} = 0 - \tfrac12 m v_1^2$.
Gleichsetzen: $-\mu m g s = -\tfrac12 m v_1^2$. Die Masse kürzt sich, also $s = \dfrac{v_1^2}{2\mu g}$.

**Schritt 3, einsetzen:** $v_1 = 20\,\text{m/s}$, also $s = \dfrac{(20\,\text{m/s})^2}{2\cdot 0{,}70\cdot 9{,}81\,\text{m/s}^2} = \dfrac{400\,\text{m}^2/\text{s}^2}{13{,}7\,\text{m/s}^2} = 29{,}1\,\text{m}$.

**Deutung:** Bei $144\,\text{km/h}$ wäre der Bremsweg viermal so lang, $116\,\text{m}$. Dasselbe Ergebnis
liefert der Kraftansatz: Die Bremsverzögerung ist $a = \mu g$ (siehe
[Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand)), und dann gilt $v^2 = 2as$.
Das sind nur mehr Schritte.
:::

:::merke[So nutzt du den Arbeit-Energie-Satz]
1. Bestimme die **resultierende** Kraft in Wegrichtung (Freikörperbild).
2. Berechne ihre Arbeit $W_{\text{res}}$ mit Vorzeichen.
3. Setze $W_{\text{res}} = \tfrac12 m v_2^2 - \tfrac12 m v_1^2$ und löse nach der gesuchten Größe auf.
:::

```reflexion
frage: Arbeit und Energie haben dieselbe Einheit. Trotzdem sind sie nicht dasselbe. Erkläre den Unterschied mit dem Bild vom Konto.
antwort: |
  Energie ist das Guthaben, das ein Körper in einem bestimmten Moment hat, zum Beispiel $\tfrac12 m v^2$ bei
  seiner jetzigen Geschwindigkeit. Sie beschreibt einen **Zustand**. Arbeit ist dagegen die Überweisung, also
  die Energie, die während eines **Vorgangs** durch eine Kraft entlang eines Weges übertragen wird. Ein Körper
  „hat“ Energie, aber er „hat“ keine Arbeit. Arbeit wird verrichtet.
```

### Aufgaben zur Energie

```aufgabe
id: p4-ekin
titel: Bewegungsenergie eines Motorrads
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Motorrad mit Fahrer ($250\,\text{kg}$) fährt mit $108\,\text{km/h}$.

  a) Wie groß ist seine kinetische Energie (in kJ)?

  b) Um welchen Faktor ändert sich die kinetische Energie, wenn das Motorrad auf die halbe Geschwindigkeit abbremst? Gib den Faktor als Dezimalzahl an.
teile:
  - typ: zahl
    label: a)
    loesung: "0.5*250*(108/3.6)^2/1000"
    einheit: "kJ"
    anzeige: '112{,}5'
    fehler:
      - wert: "0.5*250*108^2/1000"
        meldung: Du hast mit $108$ gerechnet, ohne km/h in m/s umzurechnen. Teile zuerst durch $3{,}6$.
      - wert: "250*30^2/1000"
        meldung: Der Faktor $\tfrac12$ fehlt. Die kinetische Energie ist $\tfrac12 m v^2$.
  - typ: zahl
    label: b) Faktor
    loesung: "(1/2)^2"
    anzeige: '0{,}25'
    fehler:
      - wert: "0.5"
        meldung: Die Geschwindigkeit steht im Quadrat. Halbe Geschwindigkeit ergibt ein **Viertel** der Energie.
hinweise:
  - Rechne die Geschwindigkeit in m/s um (durch $3{,}6$ teilen).
loesung: |
  **Ansatz:** $E_{\text{kin}} = \tfrac12 m v^2$ mit $v$ in m/s. $108\,\text{km/h} = 108/3{,}6\,\text{m/s} = 30\,\text{m/s}$.
  ---
  **a)** $E_{\text{kin}} = \tfrac12\cdot 250\,\text{kg}\cdot(30\,\text{m/s})^2 = 112\,500\,\text{J} = 112{,}5\,\text{kJ}$.
  ---
  **b)** Die kinetische Energie ist proportional zu $v^2$, also bei halber Geschwindigkeit $(\tfrac12)^2 = 0{,}25$, ein Viertel. Drei Viertel der Energie haben die Bremsen in Wärme verwandelt.
```

```aufgabe
id: p4-geschw-aus-energie
titel: Geschwindigkeit aus der Energie
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Ball ($0{,}40\,\text{kg}$) hat eine kinetische Energie von $45\,\text{J}$. Wie schnell ist er (in m/s)?
teile:
  - typ: zahl
    loesung: "sqrt(2*45/0.4)"
    einheit: "m/s"
    anzeige: '15'
    fehler:
      - wert: "2*45/0.4"
        meldung: Das ist $v^2$. Zieh noch die Wurzel.
      - wert: "sqrt(45/0.4)"
        meldung: Der Faktor $2$ fehlt. Aus $E = \tfrac12 m v^2$ folgt $v^2 = 2E/m$.
hinweise:
  - 'Stelle $E = \tfrac12 m v^2$ nach $v$ um: erst mit $2$ multiplizieren, dann durch $m$ teilen, dann die Wurzel ziehen.'
loesung: |
  **Umstellen:** Wir multiplizieren $E = \tfrac12 m v^2$ mit $2$ und teilen durch $m$: $v^2 = \dfrac{2E}{m}$. Dann ziehen wir die Wurzel: $v = \sqrt{2E/m}$.
  ---
  $v = \sqrt{\dfrac{2\cdot 45\,\text{J}}{0{,}40\,\text{kg}}} = \sqrt{225\,\text{m}^2/\text{s}^2} = 15\,\text{m/s}$, denn $\text{J/kg} = \text{m}^2/\text{s}^2$.
```

```aufgabe
id: p4-3-epot
titel: Ein Blumentopf am Balkon
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Ein Blumentopf ($2{,}5\,\text{kg}$) steht auf einem Balkon $12\,\text{m}$ über der Straße. Ein Fenster liegt $4{,}5\,\text{m}$ über der Straße.

  a) Wie groß ist seine Lageenergie, wenn das Nullniveau auf der Straße liegt (in J)?

  b) Wie groß ist sie, wenn das Nullniveau in Höhe des Fensters liegt (in J)?
teile:
  - typ: zahl
    label: a)
    loesung: "2.5*9.81*12"
    einheit: "J"
    anzeige: '294'
    fehler:
      - wert: "2.5*12"
        meldung: Die Fallbeschleunigung $g$ fehlt. $E_{\text{pot}} = m g h$.
  - typ: zahl
    label: b)
    loesung: "2.5*9.81*(12-4.5)"
    einheit: "J"
    anzeige: '184'
    fehler:
      - wert: "2.5*9.81*4.5"
        meldung: Du hast die Höhe des Fensters eingesetzt. Gesucht ist die Höhe des Topfes **über** dem Fenster, also $12\,\text{m} - 4{,}5\,\text{m}$.
hinweise:
  - '$E_{\text{pot}} = m g h$, wobei $h$ die Höhe über dem gewählten Nullniveau ist.'
loesung: |
  **a)** Höhe über der Straße $12\,\text{m}$: $E = 2{,}5\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 12\,\text{m} = 294\,\text{J}$.
  ---
  **b)** Höhe über dem Fenster $7{,}5\,\text{m}$: $E = 2{,}5\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 7{,}5\,\text{m} = 184\,\text{J}$.
  ---
  **Deutung:** Der Wert hängt vom Nullniveau ab. Fällt der Topf vom Balkon bis zum Fenster, wird in beiden Rechnungen dieselbe Energie frei: $294\,\text{J} - 110\,\text{J} = 184\,\text{J}$.
```

```aufgabe
id: p4-bremsweg-energie
titel: Wie weit gleitet der Schlitten?
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Schlitten ($40\,\text{kg}$) gleitet mit $8{,}0\,\text{m/s}$ auf eine ebene Schneefläche. Die Gleitreibungszahl ist $\mu_G = 0{,}10$.

  a) Wie weit gleitet er noch (in m, drei signifikante Stellen)?

  b) Wie viel Wärme entsteht dabei (in J)?
teile:
  - typ: zahl
    label: a) Weg
    loesung: "8^2/(2*0.1*9.81)"
    einheit: "m"
    anzeige: '32{,}6'
    fehler:
      - wert: "8^2/(0.1*9.81)"
        meldung: Der Faktor $2$ fehlt. Er kommt aus dem $\tfrac12$ in $\tfrac12 m v^2$.
      - wert: "8/(2*0.1*9.81)"
        meldung: Die Geschwindigkeit muss quadriert werden. Prüfe die Einheit, $\text{m/s}$ durch $\text{m/s}^2$ ergibt Sekunden, keinen Weg.
  - typ: zahl
    label: b) Wärme
    loesung: "0.5*40*8^2"
    einheit: "J"
    anzeige: '1280'
    fehler:
      - wert: "40*8^2"
        meldung: Der Faktor $\tfrac12$ fehlt. Die Wärme ist die ganze anfängliche kinetische Energie $\tfrac12 m v^2$.
hinweise:
  - Die einzige waagrechte Kraft ist die Gleitreibung $\mu_G m g$ gegen die Bewegung.
  - 'Arbeit-Energie-Satz: $-\mu_G m g s = 0 - \tfrac12 m v^2$. Die Masse kürzt sich.'
gefuehrt:
  - text: Wie groß ist die kinetische Energie am Anfang (in J)?
    teil: { typ: zahl, loesung: "0.5*40*64" }
    erklaerung: '$\tfrac12\cdot 40\,\text{kg}\cdot(8{,}0\,\text{m/s})^2 = 1280\,\text{J}$.'
  - text: Wie groß ist die Reibungskraft (in N)?
    teil: { typ: zahl, loesung: "0.1*40*9.81" }
    erklaerung: '$F_R = \mu_G m g = 0{,}10\cdot 40\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 39{,}2\,\text{N}$.'
  - text: Der Schlitten kommt zum Stehen, wenn die Reibungsarbeit die ganze Bewegungsenergie aufgebraucht hat. Wie lang ist der Weg (in m)?
    teil: { typ: zahl, loesung: "1280/(0.1*40*9.81)" }
    erklaerung: '$s = \dfrac{1280\,\text{J}}{39{,}24\,\text{N}} = 32{,}6\,\text{m}$.'
  - text: Wohin ist die Energie gegangen?
    erklaerung: Die Reibungsarbeit hat die $1280\,\text{J}$ in innere Energie von Kufen und Schnee umgewandelt. Beide werden ein wenig wärmer.
loesung: |
  **Ansatz:** Arbeit-Energie-Satz. Die resultierende Kraft ist die Gleitreibung $\mu_G m g$ gegen die Bewegung. Sie verrichtet die Arbeit $-\mu_G m g s$.
  ---
  **Gleichung:** $-\mu_G m g s = 0 - \tfrac12 m v^2$. Die Masse kürzt sich: $s = \dfrac{v^2}{2\mu_G g}$.
  ---
  **a)** $s = \dfrac{(8{,}0\,\text{m/s})^2}{2\cdot 0{,}10\cdot 9{,}81\,\text{m/s}^2} = \dfrac{64\,\text{m}^2/\text{s}^2}{1{,}962\,\text{m/s}^2} = 32{,}6\,\text{m}$.
  ---
  **b)** Die ganze kinetische Energie $\tfrac12\cdot 40\,\text{kg}\cdot(8{,}0\,\text{m/s})^2 = 1280\,\text{J}$ wird zu innerer Energie (Wärme) von Kufen und Schnee.
```

```aufgabe
id: p4-3-hammer
titel: Kraft beim Einschlagen eines Nagels
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Hammerkopf ($0{,}60\,\text{kg}$) trifft mit $8{,}0\,\text{m/s}$ auf einen Nagel und treibt ihn $1{,}2\,\text{cm}$ tief ins Holz. Danach ruht der Hammer. Wie groß ist die mittlere Kraft zwischen Hammer und Nagel (in N)? Die Gewichtskraft des Hammers vernachlässigen wir.
teile:
  - typ: zahl
    loesung: "0.5*0.6*8^2/0.012"
    einheit: "N"
    anzeige: '1600'
    fehler:
      - wert: "0.6*8^2/0.012"
        meldung: Der Faktor $\tfrac12$ in der kinetischen Energie fehlt.
      - wert: "0.5*0.6*8^2/1.2"
        meldung: Du hast den Weg in Zentimetern eingesetzt. In $W = F\cdot s$ muss $s$ in Metern stehen, $1{,}2\,\text{cm} = 0{,}012\,\text{m}$.
hinweise:
  - Der Hammer verliert seine ganze kinetische Energie auf dem Weg von $1{,}2\,\text{cm}$.
  - 'Arbeit-Energie-Satz: $\bar F\cdot s = \tfrac12 m v^2$, also $\bar F = \dfrac{m v^2}{2s}$.'
loesung: |
  **Ansatz:** Der Nagel bremst den Hammer auf $1{,}2\,\text{cm}$ ab. Nach dem Arbeit-Energie-Satz ist die Bremsarbeit gleich der verlorenen kinetischen Energie.
  ---
  **Energie:** $E_{\text{kin}} = \tfrac12\cdot 0{,}60\,\text{kg}\cdot(8{,}0\,\text{m/s})^2 = 19{,}2\,\text{J}$.
  ---
  **Kraft:** $\bar F = \dfrac{19{,}2\,\text{J}}{0{,}012\,\text{m}} = 1600\,\text{N}$, denn $\text{J/m} = \text{N}$.
  ---
  **Plausibilität:** Das ist etwa das Gewicht von $160\,\text{kg}$. Mit einem leichten Hammer erreicht man so große Kräfte, weil der Bremsweg so kurz ist. ✓
```

```aufgabe
id: p4-3-konzept
titel: Gleiche Energie, verschiedene Massen
niveau: 2
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine Kugel A hat die doppelte Masse einer Kugel B. Beide haben dieselbe kinetische Energie. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Beide sind gleich schnell, weil sie dieselbe Energie haben."
      - "B ist doppelt so schnell wie A."
      - "B ist um den Faktor $\\sqrt 2 \\approx 1{,}41$ schneller als A."
      - "A ist schneller, weil sie schwerer ist."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Gleiche Energie heißt nicht gleiche Geschwindigkeit. Die Masse steht ebenfalls in $\tfrac12 m v^2$.
      - wert: 1
        meldung: Das wäre richtig, wenn $v$ nicht im Quadrat stünde. Wegen $v^2$ muss $v^2$ doppelt so groß sein, also $v$ nur $\sqrt 2$-mal so groß.
      - wert: 3
        meldung: Bei gleicher Energie ist der schwerere Körper langsamer, nicht schneller.
hinweise:
  - Setze $\tfrac12 m_A v_A^2 = \tfrac12 m_B v_B^2$ mit $m_A = 2 m_B$.
  - Teile durch $\tfrac12 m_B$ und ziehe am Ende die Wurzel.
loesung: |
  **Ansatz:** Gleiche Energie: $\tfrac12\cdot 2m_B\cdot v_A^2 = \tfrac12\cdot m_B\cdot v_B^2$.
  ---
  **Umformen:** Wir teilen durch $\tfrac12 m_B$ und erhalten $2 v_A^2 = v_B^2$. Wurzelziehen ergibt $v_B = \sqrt 2\cdot v_A$.
  ---
  **Antwort:** B ist um den Faktor $\sqrt 2 \approx 1{,}41$ schneller. Probe mit Zahlen: A mit $2\,\text{kg}$ und $1\,\text{m/s}$ hat $1\,\text{J}$, B mit $1\,\text{kg}$ und $1{,}41\,\text{m/s}$ ebenfalls $1\,\text{J}$. ✓
```

```aufgabe
id: p4-3-fermi-zug
titel: "Abschätzen: Energie eines Schnellzugs"
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Hochgeschwindigkeitszug hat eine Masse von etwa $400\,\text{t}$ und fährt mit $300\,\text{km/h}$. In welcher Größenordnung liegt seine kinetische Energie? Vergleiche danach mit der Einheit Kilowattstunde ($1\,\text{kWh} = 3{,}6\cdot 10^6\,\text{J}$).
teile:
  - typ: auswahl
    label: Größenordnung
    optionen:
      - "etwa $10^{5}\\,\\text{J}$"
      - "etwa $10^{7}\\,\\text{J}$"
      - "etwa $10^{9}\\,\\text{J}$"
      - "etwa $10^{11}\\,\\text{J}$"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Viel zu klein. Das ist ungefähr die Energie eines Autos bei Stadttempo. Der Zug ist rund 300-mal schwerer und viel schneller.
      - wert: 1
        meldung: Zu klein. Hast du die Masse in Tonnen statt in Kilogramm eingesetzt? Dann wird das Ergebnis $1000$-mal zu klein. Richtig ist $400\,\text{t} = 4\cdot 10^5\,\text{kg}$.
      - wert: 3
        meldung: Zu groß. Hast du vergessen, km/h in m/s umzurechnen? Dann wird das Ergebnis etwa $3{,}6^2 \approx 13$-mal zu groß, und du landest näher bei dieser Größenordnung als bei der richtigen.
  - typ: zahl
    label: Energie in kWh (gerundet)
    loesung: "0.5*4e5*(300/3.6)^2/3.6e6"
    einheit: "kWh"
    anzeige: '386'
    toleranz: 15
hinweise:
  - 'Rechne in SI-Einheiten: $m = 4\cdot 10^5\,\text{kg}$, $v = 300/3{,}6\,\text{m/s} \approx 83\,\text{m/s}$.'
  - 'Dann $E = \tfrac12 m v^2$ und durch $3{,}6\cdot 10^6\,\text{J/kWh}$ teilen.'
loesung: |
  **Modell:** Der Zug ist ein Körper mit $m \approx 4\cdot 10^5\,\text{kg}$ und $v \approx 83\,\text{m/s}$. Drehende Räder lassen wir weg.
  ---
  **Energie:** $E = \tfrac12\cdot 4\cdot 10^5\,\text{kg}\cdot(83{,}3\,\text{m/s})^2 = 1{,}4\cdot 10^9\,\text{J}$, also Größenordnung $10^9\,\text{J}$.
  ---
  **In kWh:** $\dfrac{1{,}4\cdot 10^9\,\text{J}}{3{,}6\cdot 10^6\,\text{J/kWh}} \approx 390\,\text{kWh}$. Ungefähr so viel Strom verbraucht ein Einpersonenhaushalt in drei Monaten.
  ---
  **Folgerung:** Diese ganze Energie müssen die Bremsen beim Anhalten umwandeln. Deshalb bremsen solche Züge zuerst elektrisch und speisen Energie ins Netz zurück.
```

```aufgabe
id: p4-3-kiste
titel: Eine Kiste wird angeschoben
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Eine Kiste ($50\,\text{kg}$) ruht auf einem waagrechten Boden. Sie wird mit einer waagrechten Kraft von $200\,\text{N}$ über $12\,\text{m}$ geschoben. Die Gleitreibungszahl ist $\mu_G = 0{,}20$. Runde auf drei signifikante Stellen.

  a) Welche Arbeit verrichtet die Reibung (mit Vorzeichen, in J)?

  b) Welche Arbeit verrichtet die resultierende Kraft (in J)?

  c) Wie schnell ist die Kiste nach $12\,\text{m}$ (in m/s)?
teile:
  - typ: zahl
    label: a) Arbeit der Reibung
    loesung: "-0.2*50*9.81*12"
    einheit: "J"
    anzeige: '-1177 \approx -1{,}18\cdot 10^{3}'
  - typ: zahl
    label: b) Arbeit der resultierenden Kraft
    loesung: "(200 - 0.2*50*9.81)*12"
    einheit: "J"
    anzeige: '1223 \approx 1{,}22\cdot 10^{3}'
    fehler:
      - wert: "200*12"
        meldung: Das ist nur die Arbeit der Schubkraft. Für den Arbeit-Energie-Satz brauchst du die Arbeit **aller** Kräfte, also auch die negative Arbeit der Reibung.
  - typ: zahl
    label: c) Geschwindigkeit
    loesung: "sqrt(2*(200 - 0.2*50*9.81)*12/50)"
    einheit: "m/s"
    anzeige: '6{,}99'
    fehler:
      - wert: "sqrt(2*200*12/50)"
        meldung: Hier fehlt die Reibung. Ohne sie wäre die Kiste schneller. Setze die Arbeit der resultierenden Kraft ein.
hinweise:
  - Zeichne ein Freikörperbild. Waagrecht wirken Schubkraft und Reibung.
  - 'Arbeit-Energie-Satz: $W_{\text{res}} = \tfrac12 m v^2 - 0$.'
loesung: |
  **Modell:** Waagrecht wirken die Schubkraft $200\,\text{N}$ in Wegrichtung und die Gleitreibung $F_R = \mu_G m g = 0{,}20\cdot 50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 98{,}1\,\text{N}$ dagegen.
  ---
  **a)** $W_R = -98{,}1\,\text{N}\cdot 12\,\text{m} = -1177\,\text{J}$.
  ---
  **b)** $W_{\text{res}} = 200\,\text{N}\cdot 12\,\text{m} - 1177\,\text{J} = 2400\,\text{J} - 1177\,\text{J} = 1223\,\text{J}$.
  ---
  **c)** $\tfrac12 m v^2 = 1223\,\text{J}$, also $v = \sqrt{\dfrac{2\cdot 1223\,\text{J}}{50\,\text{kg}}} = 6{,}99\,\text{m/s}$.
  ---
  **Probe mit Kinematik:** $a = \dfrac{200\,\text{N} - 98{,}1\,\text{N}}{50\,\text{kg}} = 2{,}04\,\text{m/s}^2$ und $v = \sqrt{2\cdot 2{,}04\,\text{m/s}^2\cdot 12\,\text{m}} = 6{,}99\,\text{m/s}$. ✓
```

## Der Energieerhaltungssatz

```aufgabe
id: p4-4-check
art: check
titel: "Vorhersage: zwei Rampen, gleiche Höhe"
niveau: 1
angabe: |
  Zwei gleiche Klötze starten aus der Ruhe in derselben Höhe. Der eine rutscht eine steile, kurze Rampe hinab, der andere eine flache, lange Rampe. Beide enden auf demselben Boden. Reibung vernachlässigen wir. Welcher Klotz ist unten schneller?
teile:
  - typ: auswahl
    optionen:
      - "der Klotz auf der steilen Rampe"
      - "der Klotz auf der flachen Rampe"
      - "Beide sind unten gleich schnell."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Auf der steilen Rampe gewinnt der Klotz rascher an Tempo und braucht weniger Zeit. Unten zählt aber nur, wie viel Lageenergie umgewandelt wurde. Die ist bei gleicher Höhe gleich.
      - wert: 1
        meldung: Der längere Weg bringt keine zusätzliche Energie. Ohne Reibung entscheidet nur der Höhenunterschied.
hinweise:
  - Vergleiche die Lageenergie oben mit der Bewegungsenergie unten.
loesung: |
  Ohne Reibung wird die ganze Lageenergie $m g h$ zu Bewegungsenergie $\tfrac12 m v^2$. Beide Klötze verlieren dieselbe Höhe.
  ---
  Also sind beide unten gleich schnell, $v = \sqrt{2 g h}$. Die steile Rampe ist nur schneller **fertig**. Genau diesen Gedanken macht der Energieerhaltungssatz allgemein.
```

Lässt man einen Stein fallen, nimmt seine Lageenergie ab und seine Bewegungsenergie zu. Rechnen wir nach.
Ein Stein fällt aus der Höhe $h_0$. Nach der Fallstrecke $h_0 - h$ hat er nach der Kinematik
$v^2 = 2g(h_0 - h)$, also $\tfrac12 m v^2 = m g (h_0 - h)$. Bringen wir den Term $- m g h$ auf die linke Seite:
$$\tfrac12 m v^2 + m g h = m g h_0.$$
Die rechte Seite hängt nicht von der momentanen Höhe ab. Die Summe aus Bewegungs- und Lageenergie ist also
in **jeder** Höhe gleich groß.

```plot
x: [-0.5, 4.5]
y: [0, 110]
achsen: { x: "Momentaufnahme", y: "Energie in %" }
balken:
  - { x: 0, y: 100, farbe: 0 }
  - { x: 1, y: 75, farbe: 0 }
  - { x: 2, y: 50, farbe: 0 }
  - { x: 3, y: 25, farbe: 0 }
  - { x: 4, y: 0, farbe: 0 }
graphen:
  - { f: "25*x", label: "E_kin", farbe: 1, von: 0, bis: 4, gestrichelt: true }
  - { f: "100", label: "E_ges", farbe: 2, von: 0, bis: 4 }
beschriftung: "Freier Fall in fünf Momentaufnahmen, jeweils nach einem Viertel der Fallhöhe. Die blauen Säulen zeigen die Lageenergie, sie sinkt von 100 % auf 0 %. Die orange gestrichelte Linie zeigt die kinetische Energie, sie steigt von 0 % auf 100 %. Ihre Summe (grüne Linie) bleibt immer 100 %."
```

### Der Satz von der Erhaltung der mechanischen Energie

:::satz[Erhaltung der mechanischen Energie]
Wenn an einem Körper nur die Gewichtskraft und Federkräfte Arbeit verrichten, bleibt seine
**mechanische Energie** konstant:
$$E_{\text{kin}} + E_{\text{pot}} + E_{\text{Spann}} = \text{konstant}.$$
Kräfte, die senkrecht zur Bewegung stehen (Normalkraft, Fadenkraft), verrichten keine Arbeit und stören
nicht. Reibung und Luftwiderstand müssen fehlen oder vernachlässigbar sein.
:::

Kräfte wie die Gewichtskraft und die Federkraft heißen **konservativ**, also „bewahrend“. Ihre Arbeit hängt
nur von Anfangs- und Endpunkt ab, nicht vom Weg dazwischen. Die Energie, die sie einem Körper entziehen,
geben sie auf dem Rückweg vollständig zurück. Die Reibung ist **nicht** konservativ: Auf dem Rückweg
bremst sie wieder und gibt nichts zurück. Was dann mit der Energie passiert, klärt die Lektion
[Energieerhaltung mit Reibung](/lernen/physik1/arbeit-energie-impuls/energieerhaltung-mit-reibung-energie-wird-umgewandelt-nicht-verbraucht).

```plot
x: [-2.6, 2.6]
y: [-4.2, 0.5]
gleich: true
kurven:
  - { x: "3*sin(t)", y: "-3*cos(t)", t: [-0.7, 0.7], gestrichelt: true, farbe: 4 }
strecken:
  - { von: [0, 0], nach: [1.93, -2.30] }
  - { von: [-0.6, 0], nach: [0.6, 0] }
vektoren:
  - { von: [1.93, -2.30], nach: [1.93, -3.80], label: "F_G", farbe: 0 }
  - { von: [1.93, -2.30], nach: [1.19, -1.42], label: "F_Faden", farbe: 2 }
punkte:
  - { x: 1.93, y: -2.30, label: "Pendelkörper" }
  - { x: 0, y: -3, label: "tiefster Punkt" }
beschriftung: "Freikörperbild eines Fadenpendels, das um 40° ausgelenkt ist. Gestrichelt ist die Kreisbahn. Die Fadenkraft (grün) zeigt immer zum Aufhängepunkt und steht deshalb senkrecht zur Bahn. Sie verrichtet keine Arbeit. Nur die Gewichtskraft (blau) verrichtet Arbeit, und die ist konservativ. Deshalb gilt die Erhaltung der mechanischen Energie."
```

### Energieerhaltung als Rechenwerkzeug

Der große Vorteil zeigt sich bei krummen Bahnen. Rutscht ein Kind eine geschwungene Rutsche hinab, kann man
die Bewegung mit Kräften kaum berechnen, weil sich die Richtung ständig ändert. Ohne Reibung gilt trotzdem
einfach $\tfrac12 m v^2 = m g h$. Die Geschwindigkeit unten hängt nur vom Höhenunterschied ab, nicht von der Form der Bahn.

:::beispiel[Aus welcher Höhe entspricht ein Aufprall 50 km/h?]
Ein Auto prallt mit $50\,\text{km/h}$ gegen eine Mauer. Aus welcher Höhe müsste es frei fallen, um mit
derselben Geschwindigkeit aufzuschlagen?

**Schritt 1, zwei Zustände:** Oben ruht das Auto in der Höhe $h$ (nur Lageenergie). Unten hat es
$v = 50/3{,}6\,\text{m/s} = 13{,}9\,\text{m/s}$ in der Höhe $0$ (nur Bewegungsenergie).

**Schritt 2, Bilanz:** $m g h = \tfrac12 m v^2$. Die Masse kürzt sich, also $h = \dfrac{v^2}{2g}$.

**Schritt 3, einsetzen:** $h = \dfrac{(13{,}9\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = 9{,}8\,\text{m}$, etwa der
dritte Stock.

**Deutung:** Bei $100\,\text{km/h}$ sind es $39\,\text{m}$, ein Hochhaus. Doppelte Geschwindigkeit
entspricht der vierfachen Fallhöhe.
:::

:::beispiel[Achterbahn mit Anfangsgeschwindigkeit]
Ein Achterbahnwagen fährt in $30\,\text{m}$ Höhe mit $4{,}0\,\text{m/s}$ über eine Kuppe. Reibung
vernachlässigen wir. Wie schnell ist er in $12\,\text{m}$ Höhe? Wie hoch könnte er höchstens kommen?

**Schritt 1, Nullniveau:** Wir legen es auf den Boden.

**Schritt 2, Bilanz:** $\tfrac12 m v_1^2 + m g h_1 = \tfrac12 m v_2^2 + m g h_2$. Wir teilen durch $m$ und lösen
nach $v_2$ auf: $v_2 = \sqrt{v_1^2 + 2g(h_1 - h_2)}$.

**Schritt 3, einsetzen:** $v_2 = \sqrt{16\,\text{m}^2/\text{s}^2 + 2\cdot 9{,}81\,\text{m/s}^2\cdot 18\,\text{m}} = \sqrt{369\,\text{m}^2/\text{s}^2} = 19{,}2\,\text{m/s}$.

**Schritt 4, größte Höhe:** Dort ist $v = 0$. Aus $\tfrac12 v_1^2 + g h_1 = g h_{\max}$ folgt
$h_{\max} = 30\,\text{m} + \dfrac{16\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 30{,}8\,\text{m}$.
Eine Kuppe von $31\,\text{m}$ schafft der Wagen also nicht mehr.
:::

:::beispiel[Eine Federpistole schießt senkrecht nach oben]
Eine Feder ($D = 500\,\text{N/m}$) wird um $4{,}0\,\text{cm}$ zusammengedrückt und schießt eine Kugel
($10\,\text{g}$) senkrecht nach oben. Wie hoch steigt die Kugel? Den kleinen Höhenunterschied während
des Entspannens vernachlässigen wir.

**Schritt 1, Energie in der Feder:** $E_{\text{Spann}} = \tfrac12\cdot 500\,\text{N/m}\cdot(0{,}040\,\text{m})^2 = 0{,}40\,\text{J}$.

**Schritt 2, Bilanz:** Am höchsten Punkt ruht die Kugel. Die ganze Spannenergie ist zu Lageenergie
geworden: $m g h = 0{,}40\,\text{J}$.

**Schritt 3, Höhe:** $h = \dfrac{0{,}40\,\text{J}}{0{,}010\,\text{kg}\cdot 9{,}81\,\text{m/s}^2} = 4{,}1\,\text{m}$.
Hier kürzt sich die Masse **nicht**, weil die Spannenergie nicht von $m$ abhängt.
:::

:::achtung[Fehler: Endhöhe statt Höhenunterschied]
Ein Wagen startet aus der Ruhe in $40\,\text{m}$ Höhe. Gesucht ist sein Tempo auf einer Kuppe in $25\,\text{m}$ Höhe.

Falsch gerechnet: $v = \sqrt{2\cdot 9{,}81\cdot 25}\,\text{m/s} = 22{,}1\,\text{m/s}$.

In $v = \sqrt{2gh}$ steht der **Höhenunterschied**, um den der Wagen gefallen ist. Er ist um
$40\,\text{m} - 25\,\text{m} = 15\,\text{m}$ gefallen. Richtig: $v = \sqrt{2\cdot 9{,}81\cdot 15}\,\text{m/s} = 17{,}2\,\text{m/s}$.
:::

:::achtung[Fehler: Geschwindigkeiten addiert statt Energien]
Ein Stein wird aus $10\,\text{m}$ Höhe mit $5{,}0\,\text{m/s}$ senkrecht nach unten geworfen.

Falsch gerechnet: Der Fall bringt $\sqrt{2\cdot 9{,}81\cdot 10}\,\text{m/s} = 14{,}0\,\text{m/s}$ dazu, also
$v = 5{,}0 + 14{,}0 = 19{,}0\,\text{m/s}$.

Erhalten bleibt die **Energie**, nicht die Geschwindigkeit. Energien addieren sich, und in ihnen steht $v^2$.
Richtig: $v = \sqrt{v_0^2 + 2gh} = \sqrt{25 + 196{,}2}\,\text{m/s} = 14{,}9\,\text{m/s}$.
:::

:::merke[Energieerhaltung in fünf Schritten]
1. Prüfe die Bedingung: Verrichten nur Gewichtskraft und Federkräfte Arbeit? Sonst siehe Reibung.
2. Wähle zwei Zustände, meist Anfang und Ende, und lege das Nullniveau fest.
3. Schreib die Bilanz zuerst in Worten, zum Beispiel „Lageenergie oben gleich Bewegungsenergie unten“.
4. Setze die Formeln ein, kürze die Masse, wenn möglich, und löse auf.
5. Prüfe das Ergebnis: Stimmen die Einheiten, und ist die Größenordnung plausibel?
:::

:::pruefung[Die Bilanz zuerst in Worten]
Schreib in der Prüfung immer zuerst eine Zeile wie „Lageenergie oben gleich kinetische Energie unten“.
Erst danach kommen die Formeln. Diese Zeile zeigt der Prüferin, dass du das Modell verstanden hast. Oft
bringt sie schon einen guten Teil der Punkte, auch wenn später ein Rechenfehler passiert.
:::

### Probier es aus

```aufgabe
id: p4-4-check-widget
art: check
titel: "Vorhersage: Hängt die Fallgeschwindigkeit von der Masse ab?"
niveau: 1
angabe: |
  Im Widget darunter kannst du die Masse $m$ eines fallenden Körpers ändern. Was erwartest du: Ist ein doppelt so schwerer Körper nach derselben Fallstrecke schneller?
teile:
  - typ: auswahl
    optionen:
      - "Ja, doppelt so schnell."
      - "Ja, aber nur ein wenig schneller."
      - "Nein, gleich schnell."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Der schwerere Körper hat zwar doppelt so viel Lageenergie. Er braucht aber auch doppelt so viel Energie für dieselbe Geschwindigkeit.
      - wert: 1
        meldung: Ohne Luftwiderstand gibt es gar keinen Unterschied. Die Masse kürzt sich in der Bilanz vollständig.
hinweise:
  - Schreib $m g h = \tfrac12 m v^2$ und schau, was mit $m$ passiert.
loesung: |
  In $m g h = \tfrac12 m v^2$ steht die Masse auf beiden Seiten und kürzt sich: $v = \sqrt{2 g h}$.
  ---
  Prüfe es im Widget: Bei doppelter Masse ist die Bewegungsenergie an jeder Stelle doppelt so groß. Der schwerere Körper braucht aber auch doppelt so viel Energie für dieselbe Geschwindigkeit. Deshalb sind beide gleich schnell.
```

```widget
name: parameter
titel: Bewegungsenergie beim freien Fall
props:
  f: "m*9.81*x"
  parameter:
    - { name: "m", min: 0.5, max: 10, step: 0.5, wert: 2 }
  x: [0, 20]
  y: [0, 2000]
```

Im Widget ist die waagrechte Achse die bisherige Fallstrecke $x$ in m. Die senkrechte Achse ist die Energie
in J. Die Gerade zeigt die Bewegungsenergie $m g x$, die der Körper nach der Fallstrecke $x$ gewonnen hat.
Sie ist genau so groß wie die Lageenergie, die er auf dieser Strecke verloren hat. Der Regler $m$ stellt die
Masse in kg ein. Über dem Diagramm steht der Term mit der eingesetzten Masse.

**Beobachte:** Stell zuerst $m = 2$ ein und dann $m = 4$. Lies jeweils ab, wie viel Bewegungsenergie der Körper
nach $x = 5\,\text{m}$ hat. Bei $2\,\text{kg}$ sind es $2\cdot 9{,}81\cdot 5\,\text{J} \approx 98\,\text{J}$, bei
$4\,\text{kg}$ etwa $196\,\text{J}$. Die Gerade wird also doppelt so steil.

**Erkläre:** Aus $E_{\text{kin}} = \tfrac12 m v^2$ folgt $v = \sqrt{2E_{\text{kin}}/m}$. Für $2\,\text{kg}$ ist
$v = \sqrt{2\cdot 98\,\text{J}/2\,\text{kg}} = 9{,}9\,\text{m/s}$, für $4\,\text{kg}$ ist
$v = \sqrt{2\cdot 196\,\text{J}/4\,\text{kg}} = 9{,}9\,\text{m/s}$. Die doppelte Energie verteilt sich auf die
doppelte Masse. Deshalb ist die Geschwindigkeit $v = \sqrt{2 g x}$ nach der Strecke $x$ für jede Masse dieselbe.

```reflexion
frage: Beim freien Fall kürzt sich die Masse heraus, bei der Federpistole nicht. Erkläre, woran das liegt.
antwort: |
  Beim freien Fall stehen auf beiden Seiten der Bilanz Energieformen, die proportional zur Masse sind:
  $m g h = \tfrac12 m v^2$. Teilt man durch $m$, verschwindet sie. Bei der Federpistole steht links die
  Spannenergie $\tfrac12 D s^2$. Sie hängt nur von der Feder ab, nicht von der Kugel. Dieselbe Energie verteilt
  sich auf eine leichte Kugel als große Geschwindigkeit, auf eine schwere Kugel als kleine.
```

### Aufgaben zum Energieerhaltungssatz

```aufgabe
id: p4-fall-energie
titel: Fallgeschwindigkeit mit Energieerhaltung
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Stein fällt aus $20\,\text{m}$ Höhe. Mit welcher Geschwindigkeit trifft er auf (ohne Luftwiderstand, in m/s)?
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*20)"
    einheit: "m/s"
    anzeige: '19{,}8'
    fehler:
      - wert: "2*9.81*20"
        meldung: Das ist $v^2$. Zieh noch die Wurzel.
      - wert: "sqrt(9.81*20)"
        meldung: Der Faktor $2$ fehlt. Er kommt aus dem $\tfrac12$ in $\tfrac12 m v^2$.
hinweise:
  - Lageenergie oben gleich Bewegungsenergie unten. Die Masse kürzt sich.
loesung: |
  **Bilanz in Worten:** Lageenergie oben gleich kinetische Energie unten: $m g h = \tfrac12 m v^2$. Die Masse kürzt sich.
  ---
  $v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 20\,\text{m}} = \sqrt{392\,\text{m}^2/\text{s}^2} = 19{,}8\,\text{m/s}$, gut $70\,\text{km/h}$.
```

```aufgabe
id: p4-4-steighoehe
titel: Wie hoch fliegt der Ball?
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Ball wird mit $12\,\text{m/s}$ senkrecht nach oben geworfen. Wie hoch steigt er ohne Luftwiderstand (in m)?
teile:
  - typ: zahl
    loesung: "12^2/(2*9.81)"
    einheit: "m"
    anzeige: '7{,}34'
    fehler:
      - wert: "12^2/9.81"
        meldung: Der Faktor $2$ im Nenner fehlt. Aus $\tfrac12 m v^2 = m g h$ folgt $h = v^2/(2g)$.
      - wert: "12/(2*9.81)"
        meldung: Die Geschwindigkeit muss quadriert werden. Prüfe die Einheit, $\text{m/s}$ durch $\text{m/s}^2$ ergibt eine Zeit.
hinweise:
  - Am höchsten Punkt ist der Ball kurz in Ruhe. Seine ganze Bewegungsenergie ist dort Lageenergie.
loesung: |
  **Bilanz:** kinetische Energie unten gleich Lageenergie oben, $\tfrac12 m v^2 = m g h$. Die Masse kürzt sich, also $h = \dfrac{v^2}{2g}$.
  ---
  $h = \dfrac{(12\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2} = \dfrac{144\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 7{,}34\,\text{m}$.
```

```aufgabe
id: p4-pendel
titel: Geschwindigkeit eines Pendels
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Fadenpendel der Länge $1{,}5\,\text{m}$ wird um $40^\circ$ ausgelenkt und losgelassen. Runde auf drei signifikante Stellen.

  a) Um welchen Höhenunterschied sinkt der Pendelkörper bis zum tiefsten Punkt (in m)?

  b) Wie schnell ist er im tiefsten Punkt (in m/s)?
teile:
  - typ: zahl
    label: a) Höhenunterschied
    loesung: "1.5*(1 - cos(inRad(40)))"
    einheit: "m"
    anzeige: '0{,}351'
    fehler:
      - wert: "1.5*cos(inRad(40))"
        meldung: Das ist der Abstand des ausgelenkten Körpers **unter dem Aufhängepunkt**. Der Höhenunterschied ist $l - l\cos\alpha$.
      - wert: "1.5*sin(inRad(40))"
        meldung: Das ist die **waagrechte** Auslenkung. Für die Lageenergie zählt der senkrechte Höhenunterschied.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "sqrt(2*9.81*1.5*(1 - cos(inRad(40))))"
    einheit: "m/s"
    anzeige: '2{,}62'
    fehler:
      - wert: "sqrt(2*9.81*1.5)"
        meldung: Du hast die Fadenlänge als Fallhöhe genommen. Der Körper sinkt aber nur um $l(1 - \cos\alpha)$.
hinweise:
  - 'Der ausgelenkte Körper hängt $l\cos\alpha$ unter dem Aufhängepunkt, im tiefsten Punkt $l$ darunter.'
  - Die Fadenkraft steht senkrecht zur Bahn und verrichtet keine Arbeit. Also gilt die Erhaltung der mechanischen Energie.
gefuehrt:
  - text: Wie tief hängt der ausgelenkte Körper unter dem Aufhängepunkt (in m)?
    teil: { typ: zahl, loesung: "1.5*cos(inRad(40))" }
    erklaerung: 'Faden als Hypotenuse, senkrechter Abstand als Ankathete: $1{,}5\,\text{m}\cdot\cos 40^\circ = 1{,}149\,\text{m}$.'
  - text: Um wie viel sinkt der Körper bis zum tiefsten Punkt (in m)?
    teil: { typ: zahl, loesung: "1.5 - 1.5*cos(inRad(40))" }
    erklaerung: Im tiefsten Punkt hängt er $1{,}5\,\text{m}$ unter dem Aufhängepunkt. Er sinkt also um $1{,}5\,\text{m} - 1{,}149\,\text{m} = 0{,}351\,\text{m}$.
  - text: Warum darfst du hier mit Energieerhaltung rechnen, obwohl der Faden zieht?
    erklaerung: Die Fadenkraft steht immer senkrecht zur Kreisbahn und verrichtet keine Arbeit. Arbeit verrichtet nur die Gewichtskraft.
  - text: Berechne die Geschwindigkeit im tiefsten Punkt (in m/s).
    teil: { typ: zahl, loesung: "sqrt(2*9.81*0.351)" }
    erklaerung: '$v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}351\,\text{m}} = 2{,}62\,\text{m/s}$.'
loesung: |
  **Modell:** Die Fadenkraft steht senkrecht zur Bahn und verrichtet keine Arbeit. Es gilt Energieerhaltung zwischen dem Umkehrpunkt (Ruhe) und dem tiefsten Punkt.
  ---
  **a)** $h = l - l\cos 40^\circ = 1{,}5\,\text{m}\cdot(1 - 0{,}766) = 0{,}351\,\text{m}$.
  ---
  **b)** $m g h = \tfrac12 m v^2$, also $v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}351\,\text{m}} = 2{,}62\,\text{m/s}$.
  ---
  **Plausibilität:** Ohne Faden würde ein Körper aus $35\,\text{cm}$ Höhe genauso schnell. Der Faden ändert nur die Richtung, nicht das Tempo. ✓
```

```aufgabe
id: p4-achterbahn
titel: Achterbahn ohne Antrieb
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Achterbahnwagen startet aus der Ruhe auf $45\,\text{m}$ Höhe. Reibung vernachlässigen wir. Runde auf drei signifikante Stellen.

  a) Wie schnell ist er im tiefsten Punkt der Bahn auf Höhe $0$ (in m/s)?

  b) Wie schnell ist er auf der Kuppe eines Hügels in $28\,\text{m}$ Höhe (in m/s)?
teile:
  - typ: zahl
    label: a)
    loesung: "sqrt(2*9.81*45)"
    einheit: "m/s"
    anzeige: '29{,}7'
    fehler:
      - wert: "2*9.81*45"
        meldung: Das ist $v^2$. Zieh noch die Wurzel.
  - typ: zahl
    label: b)
    loesung: "sqrt(2*9.81*(45-28))"
    einheit: "m/s"
    anzeige: '18{,}3'
    fehler:
      - wert: "sqrt(2*9.81*28)"
        meldung: Du hast die Höhe der Kuppe eingesetzt. Es zählt der **Höhenunterschied** zum Start, also $45\,\text{m} - 28\,\text{m}$.
hinweise:
  - Es zählt nur der Höhenunterschied zum Start, nicht die Form der Bahn.
  - 'Bilanz: $m g h_{\text{Start}} = \tfrac12 m v^2 + m g h$.'
loesung: |
  **Modell:** Keine Reibung, also bleibt die mechanische Energie erhalten. Die Normalkraft der Schienen steht senkrecht zur Bahn und verrichtet keine Arbeit.
  ---
  **a)** $v = \sqrt{2 g\cdot 45\,\text{m}} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 45\,\text{m}} = 29{,}7\,\text{m/s}$, rund $107\,\text{km/h}$.
  ---
  **b)** Höhenunterschied $45\,\text{m} - 28\,\text{m} = 17\,\text{m}$: $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 17\,\text{m}} = 18{,}3\,\text{m/s}$.
  ---
  **Folgerung:** Ein Hügel über $45\,\text{m}$ wäre ohne Antrieb nicht zu schaffen. In echt bremsen Reibung und Luftwiderstand, deshalb ist jeder Hügel deutlich niedriger als der Start.
```

```aufgabe
id: p4-federpistole
titel: Federpistole
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Spielzeugpistole hat eine Feder mit $D = 800\,\text{N/m}$, die um $5{,}0\,\text{cm}$ zusammengedrückt wird. Sie schießt eine Kugel mit $20\,\text{g}$ ab. Den Höhenunterschied während des Entspannens vernachlässigen wir.

  a) Mit welcher Geschwindigkeit verlässt die Kugel die Pistole (in m/s)?

  b) Wie hoch steigt sie, wenn man senkrecht nach oben schießt (in m)?
teile:
  - typ: zahl
    label: a)
    loesung: "0.05*sqrt(800/0.02)"
    einheit: "m/s"
    anzeige: '10'
    fehler:
      - wert: "0.05*sqrt(800/20)"
        meldung: Du hast die Masse in Gramm eingesetzt. Mit $D$ in N/m muss $m$ in kg stehen, $20\,\text{g} = 0{,}020\,\text{kg}$.
      - wert: "5*sqrt(800/0.02)"
        meldung: Du hast die Stauchung in Zentimetern eingesetzt. $5{,}0\,\text{cm} = 0{,}050\,\text{m}$.
  - typ: zahl
    label: b)
    loesung: "0.5*800*0.05^2/(0.02*9.81)"
    einheit: "m"
    anzeige: '5{,}10'
    fehler:
      - wert: "0.5*800*0.05^2/9.81"
        meldung: Die Masse fehlt im Nenner. Die Lageenergie ist $m g h$, also $h = E/(m g)$.
hinweise:
  - 'Spannenergie $\tfrac12 D s^2$ wird zu kinetischer Energie, diese dann zu Lageenergie.'
  - Alle Größen in SI-Einheiten einsetzen. Hier kürzt sich die Masse nicht.
loesung: |
  **Bilanz in Worten:** Spannenergie der Feder gleich kinetische Energie beim Verlassen gleich Lageenergie am höchsten Punkt.
  ---
  **Spannenergie:** $\tfrac12\cdot 800\,\text{N/m}\cdot(0{,}050\,\text{m})^2 = 1{,}0\,\text{J}$.
  ---
  **a)** $\tfrac12 m v^2 = 1{,}0\,\text{J}$, also $v = \sqrt{\dfrac{2\cdot 1{,}0\,\text{J}}{0{,}020\,\text{kg}}} = \sqrt{100\,\text{m}^2/\text{s}^2} = 10\,\text{m/s}$.
  ---
  **b)** $m g h = 1{,}0\,\text{J}$, also $h = \dfrac{1{,}0\,\text{J}}{0{,}020\,\text{kg}\cdot 9{,}81\,\text{m/s}^2} = 5{,}10\,\text{m}$. Probe: $v^2/(2g) = 100/19{,}62\,\text{m} = 5{,}10\,\text{m}$. ✓
```

```aufgabe
id: p4-4-wurfrichtung
titel: Drei Würfe vom selben Turm
niveau: 2
lernziel: 3
kompetenz: verstehen
angabe: |
  Von einem Turm werden drei gleiche Steine mit **gleich großer** Geschwindigkeit geworfen: einer senkrecht nach oben, einer waagrecht und einer senkrecht nach unten. Luftwiderstand vernachlässigen wir. Welcher Stein ist beim Aufprall auf dem Boden am schnellsten?
teile:
  - typ: auswahl
    optionen:
      - "der nach unten geworfene Stein"
      - "der nach oben geworfene Stein, weil er am längsten fällt"
      - "der waagrecht geworfene Stein"
      - "Alle drei sind gleich schnell."
    richtig: [3]
    fehler:
      - wert: 0
        meldung: Der Stein nach unten kommt am **schnellsten an**, er braucht die kürzeste Zeit. Die Geschwindigkeit beim Aufprall hängt aber nur von der Energie ab, und die ist bei allen gleich.
      - wert: 1
        meldung: Der nach oben geworfene Stein steigt zuerst und fällt dann am Turm vorbei, und zwar wieder mit seiner Abwurfgeschwindigkeit. Ab da ist er wie der dritte Stein.
      - wert: 2
        meldung: Die Richtung des Abwurfs spielt für die Energie keine Rolle. $\tfrac12 m v^2$ hängt nur vom Betrag der Geschwindigkeit ab.
hinweise:
  - Kinetische Energie hängt nur vom Betrag der Geschwindigkeit ab, nicht von ihrer Richtung.
  - Vergleiche die Energie beim Abwurf und am Boden für alle drei.
loesung: |
  **Ansatz:** Energieerhaltung. Beim Abwurf haben alle drei dieselbe kinetische Energie $\tfrac12 m v_0^2$ und dieselbe Lageenergie $m g h$.
  ---
  **Am Boden:** $\tfrac12 m v^2 = \tfrac12 m v_0^2 + m g h$ gilt für alle drei gleich. Also $v = \sqrt{v_0^2 + 2 g h}$ für jeden Stein.
  ---
  **Antwort:** Alle drei treffen gleich schnell auf, nur in verschiedene Richtungen und zu verschiedenen Zeiten. Das ist ein typischer Fall, in dem die Energie viel schneller zum Ziel führt als die Kinematik.
```

```aufgabe
id: p4-4-galilei
titel: "Gedankenexperiment: Galileis Pendel mit Nagel"
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Galilei ließ ein Pendel aus einer bestimmten Höhe los. Unter dem Aufhängepunkt schlug er einen Nagel in die Wand. Sobald der Faden den Nagel berührt, schwingt der Körper auf einem kleineren Kreis weiter. Wie hoch steigt er auf der anderen Seite? Reibung vernachlässigen wir.
teile:
  - typ: auswahl
    optionen:
      - "weniger hoch, weil der Faden kürzer geworden ist"
      - "genau auf die Starthöhe"
      - "höher, weil er auf dem kleinen Kreis schneller wird"
      - "bis zum selben Auslenkungswinkel wie am Start"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Fadenlänge bestimmt die Form der Bahn, nicht die erreichbare Höhe. Die Fadenkraft verrichtet keine Arbeit und kann keine Energie wegnehmen.
      - wert: 2
        meldung: Mehr Höhe hieße mehr Lageenergie als am Start. Woher sollte diese Energie kommen?
      - wert: 3
        meldung: Mit kürzerem Faden bedeutet derselbe Winkel eine kleinere Höhe. Erhalten bleibt die Energie, nicht der Winkel.
hinweise:
  - Welche Kräfte verrichten Arbeit? Verrichtet die Fadenkraft Arbeit, auch am Nagel?
  - Am Umkehrpunkt ruht der Körper kurz. Dann steckt seine ganze Energie wieder als Lageenergie in ihm.
loesung: |
  **Ansatz:** Arbeit verrichtet nur die Gewichtskraft. Die Fadenkraft steht vor und nach dem Nagel senkrecht zur Bahn.
  ---
  **Bilanz:** Am Start ruht der Körper in der Höhe $h$. Am neuen Umkehrpunkt ruht er wieder. Gleiche Gesamtenergie heißt dann gleiche Lageenergie, also gleiche Höhe.
  ---
  **Deutung:** Der Körper steigt genau auf die Starthöhe, auf dem kleineren Kreis aber unter einem größeren Winkel. Galilei sah darin einen Hinweis, dass etwas erhalten bleibt. Heute nennen wir es Energie.
```

```aufgabe
id: p4-bungee
titel: Bungeesprung
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Eine Person ($70\,\text{kg}$) springt von einer Brücke. Das Bungeeseil ist ungedehnt $20\,\text{m}$ lang und verhält sich beim Dehnen wie eine Feder mit $D = 200\,\text{N/m}$. Luftwiderstand vernachlässigen wir. Runde auf drei signifikante Stellen.

  a) Um wie viel wird das Seil am tiefsten Punkt gedehnt (in m)?

  b) Wie tief unter der Brücke liegt der tiefste Punkt (in m)?

  c) Mit welcher Kraft zieht das Seil am tiefsten Punkt (in N)?
teile:
  - typ: zahl
    label: a) Dehnung
    loesung: "(70*9.81 + sqrt((70*9.81)^2 + 4*100*70*9.81*20))/200"
    einheit: "m"
    anzeige: '15{,}6'
    fehler:
      - wert: "sqrt(2*70*9.81*20/200)"
        meldung: Du hast nur die Fallhöhe von $20\,\text{m}$ berücksichtigt. Während das Seil sich dehnt, fällt die Person aber um weitere $s$ Meter. Die Lageenergie ist $m g (L + s)$.
  - typ: zahl
    label: b) Tiefe
    loesung: "20 + (70*9.81 + sqrt((70*9.81)^2 + 4*100*70*9.81*20))/200"
    einheit: "m"
    anzeige: '35{,}6'
  - typ: zahl
    label: c) Seilkraft
    loesung: "70*9.81 + sqrt((70*9.81)^2 + 4*100*70*9.81*20)"
    einheit: "N"
    anzeige: '3129 \approx 3{,}13\cdot 10^{3}'
hinweise:
  - 'Am tiefsten Punkt ist die Geschwindigkeit null. Die ganze Lageenergie $m g (L + s)$ steckt dann als Spannenergie $\tfrac12 D s^2$ im Seil.'
  - 'Es entsteht eine quadratische Gleichung in $s$. Bring sie auf die Form $100\,s^2 - 686{,}7\,s - 13\,734 = 0$.'
loesung: |
  **Modell:** Nullniveau am tiefsten Punkt. Oben ruht die Person, unten ruht sie kurz. Lageenergie oben gleich Spannenergie unten: $m g (L + s) = \tfrac12 D s^2$.
  ---
  **Einsetzen:** $70\cdot 9{,}81\,\text{N}\cdot(20\,\text{m} + s) = 100\,\text{N/m}\cdot s^2$. Ohne Einheiten: $100 s^2 - 686{,}7 s - 13\,734 = 0$.
  ---
  **a)** Lösungsformel (siehe [Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen)): $s = \dfrac{686{,}7 + \sqrt{686{,}7^2 + 4\cdot 100\cdot 13\,734}}{200}\,\text{m} = 15{,}6\,\text{m}$. Die negative Lösung hat hier keinen Sinn.
  ---
  **b)** Tiefster Punkt: $20\,\text{m} + 15{,}6\,\text{m} = 35{,}6\,\text{m}$ unter der Brücke.
  ---
  **c)** $F = D s = 200\,\text{N/m}\cdot 15{,}6\,\text{m} = 3130\,\text{N}$. Das ist das $4{,}6$-Fache der Gewichtskraft von $687\,\text{N}$. Deshalb müssen Bungeeseile weich sein.
```

```aufgabe
id: p4-4-energiediagramm
titel: Eine Achterbahn aus dem Höhenprofil
niveau: 3
lernziel: 3
kompetenz: anwenden
angabe: |
  Das Diagramm zeigt das Höhenprofil einer Achterbahn. Ein Wagen ($500\,\text{kg}$) fährt im Punkt A mit $3{,}0\,\text{m/s}$ los. Reibung vernachlässigen wir. Lies die Höhen von A, B, C und D aus dem Diagramm ab. Runde auf drei signifikante Stellen.

  a) Wie schnell ist der Wagen in B (in m/s)?

  b) Wie schnell ist er in C (in m/s)?

  c) Erreicht der Wagen den Punkt D?

  d) Welche Höhe könnte er höchstens erreichen (in m)?
plot:
  x: [0, 50]
  y: [0, 25]
  achsen: { x: "Weg in m", y: "Höhe in m" }
  strecken:
    - { von: [0, 20], nach: [5, 20] }
    - { von: [5, 20], nach: [15, 4] }
    - { von: [15, 4], nach: [25, 14] }
    - { von: [25, 14], nach: [32, 9] }
    - { von: [32, 9], nach: [42, 21] }
    - { von: [42, 21], nach: [48, 21] }
  punkte:
    - { x: 2, y: 20, label: "A (20 m)" }
    - { x: 15, y: 4, label: "B (4 m)" }
    - { x: 25, y: 14, label: "C (14 m)" }
    - { x: 45, y: 21, label: "D (21 m)" }
teile:
  - typ: zahl
    label: a) in B
    loesung: "sqrt(3^2 + 2*9.81*(20-4))"
    einheit: "m/s"
    anzeige: '18{,}0'
    fehler:
      - wert: "sqrt(2*9.81*16)"
        meldung: Die Anfangsgeschwindigkeit fehlt. Der Wagen hat in A schon kinetische Energie.
      - wert: "3 + sqrt(2*9.81*16)"
        meldung: Du hast Geschwindigkeiten addiert. Erhalten bleibt die Energie, also addieren sich die Quadrate, $v^2 = v_A^2 + 2g\Delta h$.
  - typ: zahl
    label: b) in C
    loesung: "sqrt(3^2 + 2*9.81*(20-14))"
    einheit: "m/s"
    anzeige: '11{,}3'
  - typ: auswahl
    label: c) Erreicht er D?
    optionen:
      - "Ja, weil er in A schon Schwung hat."
      - "Nein, seine Energie reicht nur bis knapp über 20 m."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Der Schwung bringt zusätzliche Höhe, aber nur $v_A^2/(2g) = 0{,}46\,\text{m}$. Das reicht nicht für den Meter, den D höher liegt als A.
  - typ: zahl
    label: d) größte Höhe
    loesung: "20 + 3^2/(2*9.81)"
    einheit: "m"
    anzeige: '20{,}5'
hinweise:
  - Bilanz zwischen A und dem gesuchten Punkt, $\tfrac12 v_A^2 + g h_A = \tfrac12 v^2 + g h$. Die Masse kürzt sich.
  - Für c) und d) setzt du $v = 0$ und berechnest die Höhe, bei der die ganze Energie Lageenergie ist.
loesung: |
  **Modell:** Keine Reibung, also bleibt die mechanische Energie erhalten. Wir teilen die Bilanz durch $m$: $\tfrac12 v^2 = \tfrac12 v_A^2 + g(h_A - h)$. Die Masse von $500\,\text{kg}$ brauchen wir nicht.
  ---
  **a)** $h_A - h_B = 16\,\text{m}$: $v_B = \sqrt{(3{,}0\,\text{m/s})^2 + 2\cdot 9{,}81\,\text{m/s}^2\cdot 16\,\text{m}} = \sqrt{323\,\text{m}^2/\text{s}^2} = 18{,}0\,\text{m/s}$.
  ---
  **b)** $h_A - h_C = 6\,\text{m}$: $v_C = \sqrt{9 + 117{,}7}\,\text{m/s} = 11{,}3\,\text{m/s}$.
  ---
  **c) und d)** Größte Höhe bei $v = 0$: $h_{\max} = h_A + \dfrac{v_A^2}{2g} = 20\,\text{m} + \dfrac{9\,\text{m}^2/\text{s}^2}{19{,}62\,\text{m/s}^2} = 20{,}5\,\text{m}$. Das ist weniger als $21\,\text{m}$. Der Wagen erreicht D nicht, er rollt vorher zurück.
```

## Energieerhaltung mit Reibung: Energie wird umgewandelt, nicht verbraucht

```aufgabe
id: p4-5-check
art: check
titel: "Vorwissen: Normalkraft auf der schiefen Ebene"
niveau: 1
angabe: |
  Eine Kiste ($10\,\text{kg}$) liegt auf einer Rampe, die um $30^\circ$ geneigt ist. Wie groß ist die Normalkraft der Rampe auf die Kiste (in N)?
teile:
  - typ: zahl
    loesung: "10*9.81*cos(inRad(30))"
    einheit: "N"
    anzeige: '85{,}0'
    fehler:
      - wert: "10*9.81"
        meldung: Auf der schiefen Ebene ist die Normalkraft nicht $m g$. Sie gleicht nur den Anteil der Gewichtskraft senkrecht zur Rampe aus, $m g\cos\alpha$.
      - wert: "10*9.81*sin(inRad(30))"
        meldung: Das ist der Hangabtrieb, also der Anteil **entlang** der Rampe. Senkrecht zur Rampe gehört der Kosinus.
hinweise:
  - Zerlege die Gewichtskraft in einen Anteil entlang der Rampe und einen Anteil senkrecht dazu.
loesung: |
  Senkrecht zur Rampe ist die Kiste im Gleichgewicht. Die Normalkraft gleicht den senkrechten Anteil der Gewichtskraft aus: $F_N = m g\cos\alpha$.
  ---
  $F_N = 10\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot\cos 30^\circ = 85{,}0\,\text{N}$. Wiederholen: [Die schiefe Ebene](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze).
```

In der Lektion [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz)
haben wir Reibung weggelassen. In Wirklichkeit gibt es sie fast immer. Ein Kind kommt unten an der Rutsche
langsamer an, als $\sqrt{2gh}$ vorhersagt. Ein Ball springt nie ganz auf die Ausgangshöhe zurück. Die
mechanische Energie wird also kleiner. Wohin geht sie?

### Wohin die mechanische Energie geht

Reibe deine Hände kräftig aneinander. Sie werden warm. Die Reibungsarbeit hat die Teilchen in deiner Haut
schneller schwingen lassen. Diese ungeordnete Bewegung der Teilchen heißt **innere Energie**. Wir merken
sie als Temperatur. Genauso werden Bremsscheiben, Reifen, Rutschen und Kufen warm. Die mechanische Energie
ist nicht weg, sie steckt jetzt als innere Energie in den beteiligten Körpern. Mehr dazu steht im Kapitel Temperatur, Wärme, Gase in der Lektion
[Temperatur, innere Energie und Wärme](/lernen/physik1/temperatur-waerme-gase/temperatur-innere-energie-und-waerme).

:::satz[Allgemeiner Energieerhaltungssatz]
Energie kann weder erzeugt noch vernichtet werden. Sie kann nur von einer Form in eine andere umgewandelt
oder von einem Körper auf einen anderen übertragen werden. In einem **abgeschlossenen System**, also einem
System ohne Energieaustausch mit der Umgebung, ist die Gesamtenergie konstant.
:::

Für Rechnungen mit Reibung schreiben wir die Bilanz so:
$$E_{\text{mech, Anfang}} = E_{\text{mech, Ende}} + Q.$$
Dabei ist $Q$ die **Reibungswärme**, also die Energie, die zu innerer Energie wurde. Sie ist gleich dem
Betrag der Reibungsarbeit: $Q = F_R\cdot s$ für eine konstante Reibungskraft $F_R$ längs des Weges $s$.

:::beispiel[Wie viel Energie geht auf der Rutsche verloren?]
Ein Kind ($25\,\text{kg}$) rutscht aus der Ruhe eine $3{,}5\,\text{m}$ hohe Rutsche hinab und kommt unten
mit $6{,}5\,\text{m/s}$ an. Wie viel Energie wurde zu Wärme?

**Schritt 1, oben:** $E_{\text{pot}} = 25\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 3{,}5\,\text{m} = 858\,\text{J}$, keine Bewegungsenergie.

**Schritt 2, unten:** $E_{\text{kin}} = \tfrac12\cdot 25\,\text{kg}\cdot(6{,}5\,\text{m/s})^2 = 528\,\text{J}$, keine Lageenergie.

**Schritt 3, Bilanz:** $Q = 858\,\text{J} - 528\,\text{J} = 330\,\text{J}$. Das sind $330/858 = 38\,\%$ der
Lageenergie. Hose und Rutsche sind danach ein wenig wärmer.
:::

```plot
x: [-4.5, 4.5]
y: [-4.5, 3.5]
gleich: true
strecken:
  - { von: [-4.3, 2.48], nach: [4.3, -2.48], farbe: 4 }
vektoren:
  - { von: [0, 0], nach: [0, -3.92], label: "F_G = 118 N", farbe: 0 }
  - { von: [0, 0], nach: [1.70, 2.94], label: "F_N = 102 N", farbe: 2 }
  - { von: [0, 0], nach: [-0.59, 0.34], label: "F_R = 20 N", farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "Kiste" }
  - { x: 3.2, y: -1.85, label: "rutscht nach rechts unten" }
beschriftung: "Freikörperbild einer Kiste (12 kg), die eine um 30° geneigte Rampe hinabrutscht, Maßstab 30 N pro Kästchen. Die Gewichtskraft (blau) zeigt senkrecht nach unten. Die Normalkraft (grün) steht senkrecht auf der Rampe und verrichtet keine Arbeit. Die Gleitreibung (violett) zeigt rampenaufwärts, gegen die Bewegung, und verwandelt mechanische Energie in Wärme."
```

:::beispiel[Energiebilanz auf der schiefen Ebene]
Die Kiste im Bild ($12\,\text{kg}$) rutscht aus der Ruhe $5{,}0\,\text{m}$ weit die um $30^\circ$ geneigte
Rampe hinab. Die Gleitreibungszahl ist $\mu_G = 0{,}20$. Wie schnell ist sie unten?

**Schritt 1, Höhenverlust:** $h = s\sin 30^\circ = 5{,}0\,\text{m}\cdot 0{,}5 = 2{,}5\,\text{m}$, also
$E_{\text{pot}} = 12\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 2{,}5\,\text{m} = 294\,\text{J}$.

**Schritt 2, Reibungswärme:** $F_R = \mu_G m g\cos 30^\circ = 0{,}20\cdot 12\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}866 = 20{,}4\,\text{N}$
und $Q = 20{,}4\,\text{N}\cdot 5{,}0\,\text{m} = 102\,\text{J}$.

**Schritt 3, Bilanz:** $E_{\text{kin}} = 294\,\text{J} - 102\,\text{J} = 192\,\text{J}$, also
$v = \sqrt{2\cdot 192\,\text{J}/12\,\text{kg}} = 5{,}66\,\text{m/s}$.

**Probe:** Mit dem Kraftansatz aus der Lektion [Die schiefe Ebene](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze) gilt
$a = g(\sin 30^\circ - 0{,}20\cos 30^\circ) = 3{,}21\,\text{m/s}^2$ und $v = \sqrt{2\cdot 3{,}21\cdot 5{,}0}\,\text{m/s} = 5{,}66\,\text{m/s}$. ✓
:::

:::achtung[Fehler: Reibungswärme mit falschem Vorzeichen]
Ein Skifahrer ($60\,\text{kg}$) fährt aus der Ruhe $50\,\text{m}$ Höhenunterschied hinab. Dabei entstehen
$12\,\text{kJ}$ Reibungswärme.

Falsch gerechnet: $E_{\text{kin}} = 29{,}4\,\text{kJ} + 12\,\text{kJ} = 41{,}4\,\text{kJ}$, also $v = 37{,}2\,\text{m/s}$.

Ohne Reibung wären es nur $\sqrt{2 g h} = 31{,}3\,\text{m/s}$. Mit Reibung kann er aber nicht schneller
sein als ohne. Die Wärme wird **abgezogen**: $E_{\text{kin}} = 29{,}4\,\text{kJ} - 12\,\text{kJ} = 17{,}4\,\text{kJ}$
und $v = 24{,}1\,\text{m/s}$.
:::

:::achtung[Fehler: auf der Rampe mit $m g$ statt $m g\cos\alpha$ gerechnet]
Bei der Kiste auf der Rampe ($12\,\text{kg}$, $30^\circ$, $\mu_G = 0{,}20$, $5{,}0\,\text{m}$) rechnet
jemand die Reibungswärme so:

Falsch gerechnet: $Q = \mu_G m g s = 0{,}20\cdot 12\cdot 9{,}81\cdot 5{,}0\,\text{J} = 118\,\text{J}$.

Auf der Rampe drückt die Kiste nur mit $m g\cos\alpha$ auf die Fläche. Richtig ist
$Q = \mu_G m g\cos 30^\circ\cdot s = 102\,\text{J}$.
:::

```aufgabe
id: p4-5-check-pendel
art: check
titel: "Vorhersage: ein Pendel mit Luftreibung"
niveau: 1
angabe: |
  Ein Pendel schwingt in Luft. Es wird aus $20\,\text{cm}$ Höhe über dem tiefsten Punkt losgelassen. Wie hoch kommt es auf der anderen Seite?
teile:
  - typ: auswahl
    optionen:
      - 'genau $20\,\text{cm}$ hoch'
      - 'etwas weniger als $20\,\text{cm}$ hoch'
      - 'etwas mehr als $20\,\text{cm}$ hoch, weil es Schwung geholt hat'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das gilt nur ohne Reibung. Die Luft bremst den Pendelkörper ein wenig und wandelt dabei mechanische Energie in Wärme um.
      - wert: 2
        meldung: Mehr Höhe hieße mehr Lageenergie als am Start. Diese Energie müsste aus dem Nichts kommen.
hinweise:
  - Was macht die Luftreibung mit der mechanischen Energie?
loesung: |
  Die Luftreibung verrichtet negative Arbeit. Ein kleiner Teil der mechanischen Energie wird zu Wärme der Luft.
  ---
  Am Umkehrpunkt bleibt deshalb etwas weniger Lageenergie, also etwas weniger Höhe. Nach vielen Schwingungen kommt das Pendel zur Ruhe.
```

### Energie wird nicht verbraucht

**Worum geht es?** Im Alltag sagt man, ein Auto „verbraucht Energie“ oder man „spart Energie“. Physikalisch
ist das falsch, denn Energie bleibt immer erhalten. Was ist dann gemeint?

**Bild:** Stell dir Geld vor, das du ausgibst. Es ist danach nicht vernichtet. Es liegt nur bei jemand
anderem und nützt dir nicht mehr. Mit Energie ist es ähnlich. Nach einer Autofahrt steckt die Energie aus
dem Benzin vollständig in der Luft, im Asphalt und in den Reifen. Dort ist sie als leicht erwärmte Umgebung
verteilt.

**In Schritten:**

1. Die Menge der Energie bleibt bei jedem Vorgang gleich.
2. Am Ende fast jeder Umwandlungskette steht Wärme bei Umgebungstemperatur.
3. Diese verteilte Wärme kann man kaum noch nutzen, etwa um wieder ein Auto anzutreiben.
4. „Verbraucht“ wird also nicht die Energie, sondern ihre **Nutzbarkeit**. Man sagt auch, die Energie wird
   **entwertet**.

**Typisches Missverständnis:** „Wenn Energie erhalten bleibt, warum muss man dann Energie sparen?“ Weil wir
nutzbare Energie (Strom, Benzin, gespeichertes Wasser) in schlecht nutzbare Wärme verwandeln. Diese
Einbahnstraße beschreibt der zweite Hauptsatz der Wärmelehre, Lektion
[Der zweite Hauptsatz](/lernen/physik1/hauptsaetze-waermekraftmaschinen/der-zweite-hauptsatz-warum-vorgaenge-eine-richtung-haben).

Aus dem Energieerhaltungssatz folgt auch: Es gibt kein **Perpetuum mobile erster Art**, also keine Maschine,
die dauernd Arbeit verrichtet, ohne dass man ihr Energie zuführt. Der Satz wurde um 1842 bis 1847 von Robert
Mayer, James Joule und Hermann von Helmholtz formuliert. Joule hatte zuvor gemessen, wie viel Wärme eine
bestimmte mechanische Arbeit erzeugt.

### Energieflussdiagramme

Ein **Energieflussdiagramm** zeigt, wohin die zugeführte Energie bei einem Vorgang fließt. Links steht die
zugeführte Energie, rechts die einzelnen Anteile. Die Summe der Anteile ist immer gleich der zugeführten
Energie, denn Energie geht nicht verloren.

```plot
x: [-0.6, 4.6]
y: [0, 110]
achsen: { x: "Posten", y: "Energie in %" }
balken:
  - { x: 0, y: 100, farbe: 0 }
  - { x: 1, y: 35, farbe: 3 }
  - { x: 2, y: 30, farbe: 3 }
  - { x: 3, y: 10, farbe: 3 }
  - { x: 4, y: 25, farbe: 2 }
beschriftung: "Energieflussdiagramm eines Benzinmotors als Säulen. Posten 0: zugeführte chemische Energie (100 %). Posten 1: Wärme im Abgas (35 %). Posten 2: Wärme im Kühlwasser (30 %). Posten 3: Reibung im Motor und Getriebe (10 %). Posten 4: Antrieb der Räder (25 %). Die vier Anteile ergeben zusammen wieder 100 %."
```

Weitere typische Umwandlungsketten:

- **Pumpspeicherkraftwerk** (zum Beispiel Kaprun oder Malta): Bei Stromüberschuss pumpt man Wasser nach
  oben. Elektrische Energie wird zu Lageenergie. Später strömt das Wasser durch Turbinen hinab, und
  Generatoren machen daraus wieder Strom. Etwa 75 bis 80 % kommen zurück, der Rest wird Wärme.
- **Fahrrad:** Die Muskeln wandeln chemische Energie aus der Nahrung mit etwa 25 % Wirkungsgrad in Arbeit
  um. Daraus wird kinetische Energie und bergauf Lageenergie. Am Ende wird alles durch Luftwiderstand,
  Rollreibung und Bremsen zu Wärme.
- **Elektroauto:** Beim Bremsen arbeitet der Motor als Generator und lädt die Batterie. Ein Teil der
  kinetischen Energie wird so zurückgewonnen (**Rekuperation**), statt in den Bremsen zu Wärme zu werden.

:::merke[Energiebilanz mit Reibung]
1. Mechanische Energie am Anfang aufschreiben (Lage, Bewegung, Feder).
2. Mechanische Energie am Ende aufschreiben.
3. Reibungswärme $Q = F_R\cdot s$ auf die Seite des Endes schreiben: $E_{\text{Anfang}} = E_{\text{Ende}} + Q$.
4. Kontrolle: Mit Reibung muss jede Geschwindigkeit kleiner sein als ohne.
:::

```reflexion
frage: Ein Freund sagt, beim Bremsen eines Fahrrads werde Bewegungsenergie vernichtet. Was antwortest du ihm in zwei oder drei Sätzen?
antwort: |
  Die Bewegungsenergie wird nicht vernichtet, sondern durch die Reibung an den Bremsen in innere Energie
  umgewandelt. Bremsbeläge, Felgen oder Scheiben werden warm und geben die Wärme an die Luft ab. Die Gesamtenergie
  bleibt gleich, aber diese verteilte Wärme kann man praktisch nicht mehr nutzen, um das Fahrrad wieder anzutreiben.
```

### Aufgaben zur Energieerhaltung mit Reibung

```aufgabe
id: p4-5-verbraucht
titel: Wohin geht die Energie beim Bremsen?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Radfahrer bremst auf ebener Straße bis zum Stillstand. Was ist mit seiner kinetischen Energie geschehen?
teile:
  - typ: auswahl
    optionen:
      - "Sie ist verschwunden, denn das Fahrrad steht jetzt."
      - "Sie steckt jetzt als Lageenergie im Fahrrad."
      - "Sie wurde zum größten Teil zu innerer Energie von Bremsen, Reifen, Straße und Luft."
      - "Sie wurde in die Bremskraft umgewandelt."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Energie verschwindet nie. Sie wird nur in eine andere Form umgewandelt. Fühl nach dem Bremsen einmal vorsichtig an der Felge oder Bremsscheibe.
      - wert: 1
        meldung: Lageenergie bekommt ein Körper nur, wenn er höher kommt. Auf ebener Straße bleibt die Höhe gleich.
      - wert: 3
        meldung: Eine Kraft ist keine Energieform. Kraft wird in Newton gemessen, Energie in Joule. Die Bremskraft ist das Werkzeug, das die Energie umwandelt.
hinweise:
  - Was merkst du an den Bremsen nach einer langen Bergabfahrt?
loesung: |
  Die Reibung in den Bremsen und zwischen Reifen und Straße wandelt die kinetische Energie in innere Energie um. Die Teile werden warm.
  ---
  Die Gesamtenergie bleibt erhalten. Nur ihre Nutzbarkeit ist geringer, denn verteilte Wärme treibt kein Fahrrad mehr an.
```

```aufgabe
id: p4-5-ball
titel: Ein Ball springt nicht ganz zurück
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Ball ($0{,}50\,\text{kg}$) fällt aus $2{,}0\,\text{m}$ Höhe auf den Boden und springt nur noch $1{,}4\,\text{m}$ hoch. Wie viel mechanische Energie hat er beim Aufprall verloren (in J, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "0.5*9.81*(2 - 1.4)"
    einheit: "J"
    anzeige: '2{,}94'
    fehler:
      - wert: "0.5*9.81*1.4"
        meldung: Das ist die Lageenergie, die dem Ball **geblieben** ist. Gefragt ist der Verlust, also die Differenz zur Starthöhe.
      - wert: "0.5*0.6"
        meldung: Die Fallbeschleunigung $g$ fehlt. Lageenergie ist $m g h$.
hinweise:
  - In beiden Umkehrpunkten ruht der Ball. Vergleiche die Lageenergien.
loesung: |
  **Ansatz:** Oben und am neuen Umkehrpunkt ruht der Ball. Seine mechanische Energie ist dort nur Lageenergie. Der Unterschied ist zu innerer Energie von Ball und Boden geworden.
  ---
  $\Delta E = m g (h_1 - h_2) = 0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}6\,\text{m} = 2{,}94\,\text{J}$.
  ---
  **Deutung:** Das sind $30\,\%$ der anfänglichen $9{,}81\,\text{J}$. Ball und Boden werden ein wenig warm.
```

```aufgabe
id: p4-rutsche
titel: Energieverlust auf der Rutsche
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Kind ($30\,\text{kg}$) rutscht aus der Ruhe eine $4{,}0\,\text{m}$ hohe Rutsche hinab und kommt unten mit $6{,}0\,\text{m/s}$ an.

  a) Wie viel Energie wurde in Wärme umgewandelt (in J)?

  b) Wie viel Prozent der Lageenergie sind das?
teile:
  - typ: zahl
    label: a) Wärme
    loesung: "30*9.81*4 - 0.5*30*6^2"
    einheit: "J"
    anzeige: '637'
    fehler:
      - wert: "0.5*30*6^2"
        meldung: Das ist die kinetische Energie unten. Die Wärme ist der Rest, der von der Lageenergie oben fehlt.
      - wert: "30*9.81*4 - 30*6^2"
        meldung: Der Faktor $\tfrac12$ in der kinetischen Energie fehlt.
  - typ: zahl
    label: b) Anteil
    loesung: "(30*9.81*4 - 0.5*30*6^2)/(30*9.81*4)*100"
    einheit: "%"
    anzeige: '54{,}1'
    fehler:
      - wert: "0.5*30*6^2/(30*9.81*4)*100"
        meldung: Das ist der Anteil, der als Bewegungsenergie **angekommen** ist. Gefragt ist der Anteil, der zu Wärme wurde.
hinweise:
  - Wärme ist Lageenergie oben minus kinetische Energie unten.
  - Für den Anteil teilst du die Wärme durch die Lageenergie oben.
gefuehrt:
  - text: Wie groß ist die Lageenergie oben (in J)?
    teil: { typ: zahl, loesung: "30*9.81*4" }
    erklaerung: '$m g h = 30\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 4{,}0\,\text{m} = 1177\,\text{J}$.'
  - text: Wie groß ist die kinetische Energie unten (in J)?
    teil: { typ: zahl, loesung: "0.5*30*36" }
    erklaerung: '$\tfrac12\cdot 30\,\text{kg}\cdot(6{,}0\,\text{m/s})^2 = 540\,\text{J}$.'
  - text: Wie viel Energie wurde zu Wärme (in J)?
    teil: { typ: zahl, loesung: "1177.2 - 540" }
    erklaerung: '$1177\,\text{J} - 540\,\text{J} = 637\,\text{J}$.'
  - text: Welcher Anteil der Lageenergie ist das (in %)?
    teil: { typ: zahl, loesung: "637.2/1177.2*100" }
    erklaerung: '$637/1177 = 0{,}541$, also $54{,}1\,\%$.'
loesung: |
  **Bilanz in Worten:** Lageenergie oben gleich kinetische Energie unten plus Reibungswärme.
  ---
  **Oben:** $E_{\text{pot}} = 30\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 4{,}0\,\text{m} = 1177\,\text{J}$. **Unten:** $E_{\text{kin}} = \tfrac12\cdot 30\,\text{kg}\cdot(6{,}0\,\text{m/s})^2 = 540\,\text{J}$.
  ---
  **a)** $Q = 1177\,\text{J} - 540\,\text{J} = 637\,\text{J}$.
  ---
  **b)** $637/1177 = 0{,}541 = 54{,}1\,\%$. **Probe:** Ohne Reibung wäre das Kind mit $\sqrt{2 g\cdot 4{,}0\,\text{m}} = 8{,}9\,\text{m/s}$ angekommen, also schneller. ✓
```

```aufgabe
id: p4-5-v-mit-reibung
titel: Geschwindigkeit trotz Reibung
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Schlitten mit Kind ($20\,\text{kg}$) fährt aus der Ruhe einen Hang mit $8{,}0\,\text{m}$ Höhenunterschied hinab. Unterwegs entstehen $600\,\text{J}$ Reibungswärme. Wie schnell ist der Schlitten unten (in m/s, drei signifikante Stellen)?
teile:
  - typ: zahl
    loesung: "sqrt(2*(20*9.81*8 - 600)/20)"
    einheit: "m/s"
    anzeige: '9{,}85'
    fehler:
      - wert: "sqrt(2*(20*9.81*8 + 600)/20)"
        meldung: Du hast die Reibungswärme addiert. Sie fehlt dem Schlitten aber. Mit Reibung muss er langsamer sein als ohne.
      - wert: "sqrt(2*9.81*8)"
        meldung: Das ist die Geschwindigkeit ohne Reibung. Ziehe die $600\,\text{J}$ von der Lageenergie ab.
hinweise:
  - 'Bilanz: $m g h = \tfrac12 m v^2 + Q$.'
  - Rechne zuerst die Lageenergie aus, ziehe $Q$ ab und löse dann nach $v$ auf. Hier kürzt sich die Masse nicht.
loesung: |
  **Bilanz in Worten:** Lageenergie oben gleich kinetische Energie unten plus Reibungswärme.
  ---
  **Lageenergie:** $m g h = 20\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 8{,}0\,\text{m} = 1570\,\text{J}$. Davon bleiben $1570\,\text{J} - 600\,\text{J} = 970\,\text{J}$ als Bewegungsenergie.
  ---
  **Geschwindigkeit:** $v = \sqrt{\dfrac{2\cdot 970\,\text{J}}{20\,\text{kg}}} = 9{,}85\,\text{m/s}$.
  ---
  **Probe:** Ohne Reibung wären es $\sqrt{2\cdot 9{,}81\cdot 8{,}0}\,\text{m/s} = 12{,}5\,\text{m/s}$. Mit Reibung ist der Schlitten langsamer. ✓
```

```aufgabe
id: p4-5-energiefluss
titel: Ein Energieflussdiagramm auswerten
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Auto setzt auf einer Fahrt $50\,\text{MJ}$ chemische Energie aus dem Kraftstoff um. Das Diagramm zeigt, wohin ein Teil davon fließt. Säule 0 ist die zugeführte Energie. Säule 1 ist die Abgaswärme, Säule 2 die Wärme im Kühlwasser, Säule 3 die Reibung in Motor und Getriebe. Der Rest treibt die Räder an.

  a) Wie viel Energie gelangt zum Antrieb der Räder (in MJ)?

  b) Welcher Anteil der zugeführten Energie ist das (in %)?
plot:
  x: [-0.6, 3.6]
  y: [0, 55]
  achsen: { x: "Posten", y: "Energie in MJ" }
  balken:
    - { x: 0, y: 50, farbe: 0 }
    - { x: 1, y: 20, farbe: 3 }
    - { x: 2, y: 15, farbe: 3 }
    - { x: 3, y: 3, farbe: 3 }
teile:
  - typ: zahl
    label: a) Antrieb
    loesung: "50 - 20 - 15 - 3"
    einheit: "MJ"
    anzeige: '12'
    fehler:
      - wert: "50 - 20"
        meldung: Du hast nur die Abgaswärme abgezogen. Auch Kühlwasser und Reibung zweigen Energie ab.
  - typ: zahl
    label: b) Anteil
    loesung: "(50 - 20 - 15 - 3)/50*100"
    einheit: "%"
    anzeige: '24'
    fehler:
      - wert: "(50 - 20 - 15 - 3)/(20 + 15 + 3)*100"
        meldung: Du hast durch die Verluste geteilt. Der Anteil bezieht sich auf die **zugeführte** Energie von $50\,\text{MJ}$.
hinweise:
  - Lies die Höhen der Säulen ab. Die Summe aller Abflüsse muss die zugeführte Energie ergeben.
  - Für b) teilst du den Antriebsanteil durch die zugeführte Energie.
loesung: |
  **Ansatz:** Energie geht nicht verloren. Zugeführte Energie gleich Summe aller Anteile.
  ---
  **a)** Abgelesen: $20\,\text{MJ}$, $15\,\text{MJ}$ und $3\,\text{MJ}$. Für den Antrieb bleiben $50 - 20 - 15 - 3 = 12\,\text{MJ}$.
  ---
  **b)** $12\,\text{MJ}/50\,\text{MJ} = 0{,}24 = 24\,\%$. Das ist ein typischer Wert für einen Benzinmotor. Wie man ihn Wirkungsgrad nennt, zeigt die Lektion [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

```aufgabe
id: p4-5-perpetuum
titel: Ein Erfinder und sein Perpetuum mobile
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Erfinder will mit einem Elektromotor eine Pumpe antreiben. Die Pumpe hebt Wasser in einen Behälter. Das herabfallende Wasser treibt ein Wasserrad mit Generator an, und der Generator versorgt wieder den Motor. Er behauptet, die Anlage laufe ewig und liefere sogar überschüssigen Strom. Nimm in drei bis vier Sätzen Stellung.
teile:
  - typ: text
    muster: |
      Die Anlage wäre ein Perpetuum mobile erster Art: Sie soll dauernd Arbeit liefern, ohne dass von außen Energie
      zugeführt wird. Das widerspricht dem Energieerhaltungssatz, denn Energie kann nicht aus dem Nichts entstehen.
      Selbst ohne Überschuss läuft sie nicht ewig: In Motor, Pumpe, Wasserrad und Generator geht bei jeder
      Umwandlung ein Teil als Wärme an die Umgebung. Jede Runde liefert also weniger, bis die Anlage stehen bleibt.
hinweise:
  - Woher müsste der überschüssige Strom kommen?
  - Denk an die Reibung in jedem einzelnen Gerät der Kette.
loesung: |
  **Kernargument:** Überschüssige Energie ohne Zufuhr von außen widerspricht dem Energieerhaltungssatz. Eine solche Maschine heißt Perpetuum mobile erster Art.
  ---
  **Zweites Argument:** Jede Umwandlung hat Reibungsverluste. Die Energie, die im Kreis läuft, wird bei jedem Durchgang kleiner.
  ---
  **Fazit:** Die Anlage bleibt nach kurzer Zeit stehen. Zurück bleibt nur etwas wärmeres Wasser und eine warme Umgebung.
```

```aufgabe
id: p4-5-hinauf
titel: Eine Kiste wird die Rampe hinaufgestoßen
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Eine Kiste ($5{,}0\,\text{kg}$) wird mit $6{,}0\,\text{m/s}$ eine um $20^\circ$ geneigte Rampe hinaufgestoßen. Die Gleitreibungszahl ist $\mu_G = 0{,}30$, die Haftreibungszahl $\mu_H = 0{,}45$. Runde auf drei signifikante Stellen.

  a) Wie weit gleitet die Kiste die Rampe hinauf (in m)?

  b) Wie viel Wärme entsteht dabei (in J)?

  c) Bleibt die Kiste oben liegen, oder rutscht sie zurück?
teile:
  - typ: zahl
    label: a) Weg
    loesung: "6^2/(2*9.81*(sin(inRad(20)) + 0.3*cos(inRad(20))))"
    einheit: "m"
    anzeige: '2{,}94'
    fehler:
      - wert: "6^2/(2*9.81*(sin(inRad(20)) - 0.3*cos(inRad(20))))"
        meldung: Beim Hinaufgleiten zeigt die Reibung **rampenabwärts**. Sie bremst zusammen mit dem Hangabtrieb, also wird addiert.
      - wert: "6^2/(2*9.81*sin(inRad(20)))"
        meldung: Hier fehlt die Reibung. Ohne sie käme die Kiste weiter.
  - typ: zahl
    label: b) Wärme
    loesung: "0.3*5*9.81*cos(inRad(20))*6^2/(2*9.81*(sin(inRad(20)) + 0.3*cos(inRad(20))))"
    einheit: "J"
    anzeige: '40{,}7'
  - typ: auswahl
    label: c)
    optionen:
      - "Sie bleibt liegen, weil $\\tan 20^\\circ = 0{,}36$ kleiner ist als $\\mu_H = 0{,}45$."
      - "Sie rutscht zurück, weil die Rampe geneigt ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Neigung allein reicht nicht. Die Kiste rutscht erst, wenn der Hangabtrieb größer ist als die größtmögliche Haftreibung, also wenn $\tan\alpha > \mu_H$.
hinweise:
  - 'Zeichne ein Freikörperbild. Beim Hinaufgleiten zeigen Hangabtrieb und Reibung beide rampenabwärts.'
  - 'Energiebilanz: $\tfrac12 m v^2 = m g s\sin\alpha + \mu_G m g\cos\alpha\cdot s$. Die Masse kürzt sich.'
loesung: |
  **Modell:** Die Kiste gleitet nach oben. Die Reibung zeigt gegen die Bewegung, also rampenabwärts (siehe [Die schiefe Ebene](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze)). Bilanz in Worten: Bewegungsenergie am Anfang gleich Lageenergie oben plus Reibungswärme.
  ---
  **a)** $\tfrac12 v^2 = g s(\sin\alpha + \mu_G\cos\alpha)$, also $s = \dfrac{(6{,}0\,\text{m/s})^2}{2\cdot 9{,}81\,\text{m/s}^2\cdot(0{,}342 + 0{,}282)} = \dfrac{36\,\text{m}^2/\text{s}^2}{12{,}24\,\text{m/s}^2} = 2{,}94\,\text{m}$.
  ---
  **b)** $Q = \mu_G m g\cos\alpha\cdot s = 0{,}30\cdot 5{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}940\cdot 2{,}94\,\text{m} = 40{,}7\,\text{J}$.
  ---
  **Probe:** Anfangsenergie $\tfrac12\cdot 5{,}0\cdot 36\,\text{J} = 90{,}0\,\text{J}$. Lageenergie oben $5{,}0\cdot 9{,}81\cdot 2{,}94\cdot\sin 20^\circ\,\text{J} = 49{,}3\,\text{J}$. Zusammen mit der Wärme: $49{,}3\,\text{J} + 40{,}7\,\text{J} = 90{,}0\,\text{J}$. ✓
  ---
  **c)** Oben ruht die Kiste. Sie rutscht nur zurück, wenn $\tan\alpha > \mu_H$. Hier ist $\tan 20^\circ = 0{,}364 < 0{,}45$, also bleibt sie liegen.
```

## Leistung und Wirkungsgrad

```aufgabe
id: p4-6-check
art: check
titel: "Vorwissen: Minuten in Stunden"
niveau: 1
angabe: |
  Rechne $15\,\text{min}$ in Stunden um.
teile:
  - typ: zahl
    loesung: "15/60"
    einheit: "h"
    anzeige: '0{,}25'
    fehler:
      - wert: "0.15"
        meldung: Eine Stunde hat $60$ Minuten, nicht $100$. Also teilst du durch $60$.
      - wert: "15*60"
        meldung: Das sind die Sekunden. In Stunden ist die Zahl kleiner als in Minuten, also teilen.
hinweise:
  - Eine Stunde hat $60\,\text{min}$.
loesung: |
  $1\,\text{h} = 60\,\text{min}$, also $1\,\text{min} = \tfrac{1}{60}\,\text{h}$.
  ---
  $15\,\text{min} = \tfrac{15}{60}\,\text{h} = 0{,}25\,\text{h}$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

Ob du eine Kiste in zwei Sekunden oder in zwei Minuten auf den Tisch hebst, die Arbeit ist dieselbe. Was sich
unterscheidet, ist das **Tempo**, mit dem du die Arbeit verrichtest. Dieses Tempo heißt **Leistung**.

### Leistung

:::definition[Leistung]
Die **Leistung** ist die pro Zeit verrichtete Arbeit oder umgesetzte Energie:
$$P = \frac{W}{t} = \frac{\Delta E}{\Delta t}.$$
Dabei ist $W$ die Arbeit oder $\Delta E$ die umgesetzte Energie (in J) und $t$ oder $\Delta t$ die dafür
benötigte Zeit (in s). Die Einheit ist das **Watt**: $1\,\text{W} = 1\,\text{J/s}$.
:::

Ein **Beispiel**: Wer $1000\,\text{J}$ in $10\,\text{s}$ verrichtet, leistet $100\,\text{W}$. Ein
**Nicht-Beispiel**: Ein Akku mit „$50\,\text{Wh}$“ hat keine Leistung von $50\,\text{W}$. Wattstunde ist eine
Energieeinheit, also Leistung **mal** Zeit. Einige typische Leistungen zum Vergleich:

- Ein Mensch im Dauerbetrieb leistet etwa 75 bis 100 W.
- Ein Radrennfahrer im Sprint leistet kurzzeitig etwa 1500 W.
- Ein Wasserkocher nimmt etwa 2000 W auf.
- Ein Mittelklasseauto hat etwa 100 kW Motorleistung.
- Eine Elektrolokomotive hat etwa 6 MW, ein Kernkraftwerksblock etwa 1 GW.

:::beispiel[Treppe hinauflaufen]
Eine Person ($70\,\text{kg}$) läuft in $12\,\text{s}$ drei Stockwerke ($9{,}0\,\text{m}$ Höhe) hinauf. Welche
mechanische Leistung bringt sie auf?

**Schritt 1, Arbeit:** Hubarbeit $W = m g h = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 9{,}0\,\text{m} = 6180\,\text{J}$.

**Schritt 2, Leistung:** $P = \dfrac{W}{t} = \dfrac{6180\,\text{J}}{12\,\text{s}} = 515\,\text{W}$.

**Deutung:** Das ist das Fünffache der Dauerleistung eines Menschen. Deshalb ist man oben außer Atem.
:::

### Leistung bei konstanter Geschwindigkeit: $P = F\cdot v$

Eine Kraft $F$ bewegt einen Körper mit konstanter Geschwindigkeit $v$ in Kraftrichtung. In der Zeit $t$
legt er den Weg $s = v\cdot t$ zurück. Die Kraft verrichtet dabei $W = F\cdot s = F\cdot v\cdot t$. Teilen wir
durch $t$, erhalten wir
$$P = F\cdot v.$$
Dabei ist $F$ die Kraft in Bewegungsrichtung (in N) und $v$ die Geschwindigkeit (in m/s). Die Einheit
stimmt: $\text{N}\cdot\text{m/s} = \text{J/s} = \text{W}$.

```plot
x: [-4, 4]
y: [-4.5, 4.5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [0, -3.92], label: "F_G = 1,18 kN", farbe: 0 }
  - { von: [0, 0], nach: [0, 3.92], label: "F_N = 1,18 kN", farbe: 2 }
  - { von: [0, 0], nach: [3, 0], label: "Antrieb 30 N", farbe: 1 }
  - { von: [0, 0], nach: [-3, 0], label: "Widerstand 30 N", farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "E-Bike" }
beschriftung: "Freikörperbild eines E-Bikes mit Fahrerin (120 kg) bei konstanten 7,0 m/s. Senkrecht und waagrecht sind verschiedene Maßstäbe gewählt, damit die kleinen Kräfte sichtbar sind: 300 N pro Kästchen senkrecht, 10 N pro Kästchen waagrecht. Antrieb (orange) und Fahrwiderstand (violett) sind gleich groß, deshalb ist die resultierende Kraft null. Trotzdem braucht der Antrieb Leistung, weil er Arbeit gegen den Widerstand verrichtet."
```

:::beispiel[Leistung eines E-Bikes]
Ein E-Bike mit Fahrerin fährt mit konstant $7{,}0\,\text{m/s}$ (gut $25\,\text{km/h}$). Luftwiderstand und
Rollreibung betragen zusammen $30\,\text{N}$. Welche Leistung muss am Hinterrad ankommen?

**Schritt 1, Antriebskraft:** Die Geschwindigkeit ist konstant, also ist die resultierende Kraft null.
Die Antriebskraft ist gleich dem Widerstand, $F = 30\,\text{N}$.

**Schritt 2, Leistung:** $P = F\cdot v = 30\,\text{N}\cdot 7{,}0\,\text{m/s} = 210\,\text{W}$.

**Deutung:** Die resultierende Kraft ist null, die Leistung aber nicht. Der Antrieb verrichtet laufend Arbeit
gegen den Widerstand, und diese Energie wird zu Wärme der Luft und der Reifen.
:::

Mit $P = F\cdot v$ versteht man, warum schnelles Fahren so teuer ist. Der Luftwiderstand wächst mit $v^2$
(siehe [Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand)). Die Leistung gegen den
Luftwiderstand ist Kraft mal Geschwindigkeit, wächst also mit $v^2\cdot v = v^3$. Doppelte Geschwindigkeit verlangt
dafür achtfache Leistung.

### Die Kilowattstunde

Im Alltag rechnet man Energie oft als Leistung mal Zeit ab. Die Stromrechnung zählt **Kilowattstunden**:
$$1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s} = 3{,}6\cdot 10^6\,\text{J}.$$
Beispiel: Ein Wasserkocher mit $2{,}0\,\text{kW}$ läuft $6\,\text{min} = 0{,}10\,\text{h}$. Er braucht
$2{,}0\,\text{kW}\cdot 0{,}10\,\text{h} = 0{,}20\,\text{kWh}$. Bei $0{,}30$ Euro pro kWh kostet das $0{,}06$ Euro.

Eine ältere Einheit der Leistung ist die **Pferdestärke**: $1\,\text{PS} = 735{,}5\,\text{W}$. Die Idee stammt von
James Watt. Er verglich seine Dampfmaschinen mit der Leistung von Grubenpferden. Seine englische „horsepower“
war etwas größer (rund $746\,\text{W}$). Die PS ist eine spätere, metrische Festlegung.

:::achtung[Fehler: Kilowatt mal Minuten]
Ein Wasserkocher mit $2{,}0\,\text{kW}$ läuft $6\,\text{min}$.

Falsch gerechnet: $E = 2{,}0\,\text{kW}\cdot 6 = 12\,\text{kWh}$.

Die Einheit kWh verlangt die Zeit in **Stunden**. $6\,\text{min} = 0{,}10\,\text{h}$, also richtig
$E = 2{,}0\,\text{kW}\cdot 0{,}10\,\text{h} = 0{,}20\,\text{kWh}$. Das falsche Ergebnis ist sechzigmal zu groß.
:::

### Wirkungsgrad

Keine reale Maschine wandelt die zugeführte Energie vollständig in die gewünschte Form um. Ein Teil wird
immer zu Wärme, durch Reibung, elektrischen Widerstand oder Abgase.

:::definition[Wirkungsgrad]
Der **Wirkungsgrad** ist das Verhältnis von nutzbarer zu zugeführter Energie oder Leistung:
$$\eta = \frac{E_{\text{nutz}}}{E_{\text{zu}}} = \frac{P_{\text{nutz}}}{P_{\text{zu}}}, \qquad 0 \le \eta < 1.$$
Das Zeichen $\eta$ ist der griechische Buchstabe „eta“. Bei hintereinandergeschalteten Wandlern
multiplizieren sich die Wirkungsgrade: $\eta = \eta_1\cdot\eta_2\cdots$
:::

Typische Werte: Elektromotor über 90 %, Transformator 98 %, Benzinmotor 25 bis 35 %, Dieselmotor 40 %.
Der Muskel schafft 25 %, die Solarzelle 20 %, die LED 40 % und die Glühlampe nur 5 % (für das Licht). Ein **Nicht-Beispiel**:
Ein Wirkungsgrad von 100 % oder mehr ist unmöglich, das wäre ein Perpetuum mobile.

:::beispiel[Eine Kette von Wandlern]
Ein Kraftwerk wandelt Kohle mit $\eta_1 = 0{,}40$ in Strom. Die Leitung überträgt ihn mit $\eta_2 = 0{,}95$,
ein Elektromotor nutzt ihn mit $\eta_3 = 0{,}90$. Welcher Anteil der chemischen Energie wird zu Arbeit des Motors?

**Schritt 1, Kette:** Jeder Wandler gibt nur seinen Anteil der Energie weiter, die bei ihm ankommt.

**Schritt 2, multiplizieren:** $\eta = 0{,}40\cdot 0{,}95\cdot 0{,}90 = 0{,}342$, also $34{,}2\,\%$.

**Deutung:** Der schwächste Wandler bestimmt das Ergebnis. Am meisten bringt es, das Kraftwerk zu verbessern.
:::

:::achtung[Fehler: Wirkungsgrad falsch herum]
Ein Motor nimmt $2{,}0\,\text{kW}$ auf und gibt $1{,}5\,\text{kW}$ mechanisch ab.

Falsch gerechnet: $\eta = \dfrac{2{,}0\,\text{kW}}{1{,}5\,\text{kW}} = 1{,}33 = 133\,\%$.

Ein Wirkungsgrad über $100\,\%$ ist unmöglich. Der Nutzen steht im **Zähler**:
$\eta = \dfrac{1{,}5\,\text{kW}}{2{,}0\,\text{kW}} = 0{,}75 = 75\,\%$. Umgekehrt gilt: Für $1{,}5\,\text{kW}$ Nutzen
muss man $1{,}5\,\text{kW}/0{,}75 = 2{,}0\,\text{kW}$ zuführen, nicht $1{,}5\cdot 0{,}75$.
:::

:::merke[Leistung, Energie und Wirkungsgrad]
1. Leistung ist Energie pro Zeit: $P = W/t$. Bei konstanter Geschwindigkeit $P = F\cdot v$.
2. Energie ist Leistung mal Zeit: in J mit Watt und Sekunden, in kWh mit Kilowatt und Stunden.
3. Wirkungsgrad: Nutzen durch Aufwand, immer kleiner als $1$. Aufwand ist Nutzen durch $\eta$.
:::

```reflexion
frage: Ein Auto braucht für 100 km/h eine Antriebsleistung von etwa 15 kW. Ein Freund meint, für 200 km/h reichen also 30 kW. Was entgegnest du ihm?
antwort: |
  Bei hohen Geschwindigkeiten ist der Luftwiderstand die wichtigste Bremskraft, und er wächst mit $v^2$. Bei
  doppelter Geschwindigkeit ist er also etwa viermal so groß. Die Leistung ist Kraft mal Geschwindigkeit, also
  kommt noch ein Faktor $2$ dazu. Insgesamt braucht man ungefähr die achtfache Leistung, also eher $120\,\text{kW}$
  als $30\,\text{kW}$.
```

### Aufgaben zu Leistung und Wirkungsgrad

```aufgabe
id: p4-leistung-treppe
titel: Treppensteigen
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Eine Person ($75\,\text{kg}$) läuft in $15\,\text{s}$ eine Treppe mit $12\,\text{m}$ Höhenunterschied hinauf. Welche mechanische Leistung bringt sie auf (in W)?
teile:
  - typ: zahl
    loesung: "75*9.81*12/15"
    einheit: "W"
    anzeige: '589'
    fehler:
      - wert: "75*12/15"
        meldung: Die Fallbeschleunigung $g$ fehlt. Die Hubarbeit ist $m g h$.
      - wert: "75*9.81*12*15"
        meldung: Du hast mit der Zeit multipliziert. Leistung ist Arbeit **pro** Zeit, also teilen.
hinweise:
  - Berechne zuerst die Hubarbeit, dann teile durch die Zeit.
loesung: |
  **Arbeit:** Hubarbeit $W = m g h = 75\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 12\,\text{m} = 8829\,\text{J}$.
  ---
  **Leistung:** $P = W/t = 8829\,\text{J}/15\,\text{s} = 589\,\text{W}$, rund $0{,}8\,\text{PS}$. Das hält man nur kurz durch.
```

```aufgabe
id: p4-leistung-auto
titel: Leistung gegen den Fahrwiderstand
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Lkw fährt mit konstant $25\,\text{m/s}$. Luftwiderstand und Rollreibung betragen zusammen $2{,}4\,\text{kN}$. Welche Leistung muss der Motor an die Räder abgeben (in kW)?
teile:
  - typ: zahl
    loesung: "2400*25/1000"
    einheit: "kW"
    anzeige: '60'
    fehler:
      - wert: "2400*25"
        meldung: Das ist die Leistung in **Watt**. Gefragt ist sie in Kilowatt, also durch $1000$ teilen.
      - wert: "2.4/25"
        meldung: Du hast geteilt. Die Leistung ist Kraft **mal** Geschwindigkeit.
hinweise:
  - Bei konstanter Geschwindigkeit ist die Antriebskraft gleich dem Widerstand. Dann gilt $P = F\cdot v$.
loesung: |
  **Ansatz:** Konstante Geschwindigkeit heißt resultierende Kraft null. Die Antriebskraft ist also gleich dem Widerstand, $F = 2400\,\text{N}$.
  ---
  $P = F v = 2400\,\text{N}\cdot 25\,\text{m/s} = 60\,000\,\text{W} = 60\,\text{kW}$.
```

```aufgabe
id: p4-6-kwh
titel: Ein Staubsauger und die Kilowattstunde
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Staubsauger mit $800\,\text{W}$ läuft $45\,\text{min}$.

  a) Wie viel elektrische Energie nimmt er auf (in kWh)?

  b) Wie viel ist das in Megajoule (MJ)?
teile:
  - typ: zahl
    label: a)
    loesung: "0.8*45/60"
    einheit: "kWh"
    anzeige: '0{,}6'
    fehler:
      - wert: "0.8*45"
        meldung: Du hast Kilowatt mal Minuten gerechnet. Für kWh muss die Zeit in Stunden stehen, $45\,\text{min} = 0{,}75\,\text{h}$.
      - wert: "800*0.75"
        meldung: Das sind Wattstunden. Für Kilowattstunden musst du die Leistung in kW einsetzen, $800\,\text{W} = 0{,}8\,\text{kW}$.
  - typ: zahl
    label: b)
    loesung: "0.8*45/60*3.6"
    einheit: "MJ"
    anzeige: '2{,}16'
    fehler:
      - wert: "0.8*45/60/3.6"
        meldung: Du hast durch $3{,}6$ geteilt. Eine kWh sind $3{,}6\,\text{MJ}$, also mit $3{,}6$ multiplizieren.
hinweise:
  - Rechne die Zeit in Stunden und die Leistung in Kilowatt um. $1\,\text{kWh} = 3{,}6\,\text{MJ}$.
loesung: |
  **a)** $E = P\cdot t = 0{,}80\,\text{kW}\cdot 0{,}75\,\text{h} = 0{,}60\,\text{kWh}$.
  ---
  **b)** $0{,}60\,\text{kWh}\cdot 3{,}6\,\text{MJ/kWh} = 2{,}16\,\text{MJ}$. Probe in SI: $800\,\text{W}\cdot 2700\,\text{s} = 2{,}16\cdot 10^6\,\text{J}$. ✓
```

```aufgabe
id: p4-wirkungsgrad-kran
titel: Wirkungsgrad eines Krans
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Elektromotor nimmt $2{,}0\,\text{kW}$ auf und hebt eine Last von $300\,\text{kg}$ in $20\,\text{s}$ gleichmäßig um $10\,\text{m}$.

  a) Wie groß ist die Nutzleistung (in W)?

  b) Wie groß ist der Wirkungsgrad (in %)?
teile:
  - typ: zahl
    label: a) Nutzleistung
    loesung: "300*9.81*10/20"
    einheit: "W"
    anzeige: '1472'
    fehler:
      - wert: "300*10/20"
        meldung: Die Fallbeschleunigung fehlt. Die Nutzarbeit ist die Hubarbeit $m g h$.
  - typ: zahl
    label: b) Wirkungsgrad
    loesung: "300*9.81*10/20/2000*100"
    einheit: "%"
    anzeige: '73{,}6'
    fehler:
      - wert: "2000/(300*9.81*10/20)*100"
        meldung: Du hast den Bruch umgedreht. Der Nutzen steht im Zähler, der Aufwand im Nenner. Ein Wirkungsgrad über $100\,\%$ ist unmöglich.
hinweise:
  - Nutzleistung ist die Hubarbeit pro Zeit.
  - Wirkungsgrad ist Nutzleistung durch aufgenommene Leistung.
gefuehrt:
  - text: Wie groß ist die Hubarbeit (in J)?
    teil: { typ: zahl, loesung: "300*9.81*10" }
    erklaerung: '$m g h = 300\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 10\,\text{m} = 29\,430\,\text{J}$.'
  - text: Wie groß ist die Nutzleistung (in W)?
    teil: { typ: zahl, loesung: "29430/20" }
    erklaerung: '$P_{\text{nutz}} = 29\,430\,\text{J}/20\,\text{s} = 1472\,\text{W}$.'
  - text: Was steht beim Wirkungsgrad im Zähler, was im Nenner?
    erklaerung: Im Zähler steht der Nutzen ($1472\,\text{W}$), im Nenner der Aufwand ($2000\,\text{W}$). So ist $\eta$ immer kleiner als $1$.
  - text: Wie groß ist der Wirkungsgrad (in %)?
    teil: { typ: zahl, loesung: "1471.5/2000*100" }
    erklaerung: '$\eta = 1472\,\text{W}/2000\,\text{W} = 0{,}736 = 73{,}6\,\%$.'
loesung: |
  **Ansatz:** Der Nutzen ist die Hubarbeit pro Zeit. Der Aufwand ist die elektrische Leistung von $2{,}0\,\text{kW}$.
  ---
  **a)** $P_{\text{nutz}} = \dfrac{m g h}{t} = \dfrac{300\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 10\,\text{m}}{20\,\text{s}} = 1472\,\text{W}$.
  ---
  **b)** $\eta = \dfrac{1472\,\text{W}}{2000\,\text{W}} = 0{,}736 = 73{,}6\,\%$.
  ---
  **Deutung:** Die restlichen $528\,\text{W}$ werden in Motor, Getriebe und Seilrollen zu Wärme.
```

```aufgabe
id: p4-kwh-kosten
titel: Was kostet das Hochpumpen?
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Hauswasserwerk pumpt täglich $2{,}0\,\text{m}^3$ Wasser $25\,\text{m}$ hoch. Der Wirkungsgrad von Motor und Pumpe zusammen ist $50\,\%$.

  a) Wie viel elektrische Energie braucht es pro Tag (in kWh, drei signifikante Stellen)?

  b) Was kostet das bei $0{,}30$ Euro pro kWh in einem Jahr mit $365$ Tagen (in Euro)?
teile:
  - typ: zahl
    label: a) Energie pro Tag
    loesung: "2000*9.81*25/0.5/3.6e6"
    einheit: "kWh"
    anzeige: '0{,}273'
    fehler:
      - wert: "2000*9.81*25*0.5/3.6e6"
        meldung: Du hast mit dem Wirkungsgrad multipliziert. Der Motor muss **mehr** Energie aufnehmen, als im Wasser ankommt, also teilst du durch $\eta$.
      - wert: "2000*9.81*25/0.5"
        meldung: Das ist die Energie in Joule. Für kWh teilst du durch $3{,}6\cdot 10^6$.
  - typ: zahl
    label: b) Kosten pro Jahr
    loesung: "2000*9.81*25/0.5/3.6e6*365*0.30"
    einheit: "Euro"
    anzeige: '29{,}8'
hinweise:
  - '$2{,}0\,\text{m}^3$ Wasser haben die Masse $2000\,\text{kg}$.'
  - 'Elektrische Energie = Hubarbeit durch Wirkungsgrad; $1\,\text{kWh} = 3{,}6\cdot 10^6\,\text{J}$.'
loesung: |
  **Modell:** Nutzen ist die Hubarbeit am Wasser. Der Motor muss wegen der Verluste mehr aufnehmen: $E_{\text{el}} = W_{\text{Hub}}/\eta$.
  ---
  **Hubarbeit:** $2000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 25\,\text{m} = 4{,}905\cdot 10^5\,\text{J}$.
  ---
  **a)** $E_{\text{el}} = 4{,}905\cdot 10^5\,\text{J}/0{,}50 = 9{,}81\cdot 10^5\,\text{J} = 0{,}273\,\text{kWh}$ pro Tag.
  ---
  **b)** Pro Jahr mit dem ungerundeten Tageswert $0{,}2725\,\text{kWh}$: $0{,}2725\,\text{kWh}\cdot 365 = 99{,}46\,\text{kWh}$. Das kostet $99{,}46\cdot 0{,}30$ Euro $= 29{,}84$ Euro, also rund $29{,}8$ Euro.
```

```aufgabe
id: p4-6-proportional
titel: Doppelt so schnell gegen den Wind
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Bei hohen Geschwindigkeiten ist der Luftwiderstand die einzige wichtige Bremskraft. Er wächst mit dem Quadrat der Geschwindigkeit. Um welchen Faktor steigt die nötige Antriebsleistung, wenn ein Auto statt $60\,\text{km/h}$ nun $120\,\text{km/h}$ fährt?
teile:
  - typ: zahl
    loesung: "2^2*2"
    anzeige: '8'
    fehler:
      - wert: "4"
        meldung: Das ist der Faktor für die **Kraft**. Die Leistung ist Kraft mal Geschwindigkeit, also kommt noch ein Faktor $2$ dazu.
      - wert: "2"
        meldung: Das wäre richtig, wenn die Widerstandskraft gleich bliebe. Sie wächst aber selbst mit $v^2$.
hinweise:
  - '$P = F\cdot v$, und $F$ ist proportional zu $v^2$.'
  - Setze $2v$ für $v$ ein und vergleiche.
loesung: |
  **Ansatz:** $P = F\cdot v$ mit $F = k v^2$, also $P = k v^3$. Dabei ist $k$ eine Konstante des Autos.
  ---
  **Vergleich:** $\dfrac{P_{\text{neu}}}{P_{\text{alt}}} = \dfrac{k(2v)^3}{k v^3} = 2^3 = 8$.
  ---
  **Deutung:** Die achtfache Leistung bei doppelter Geschwindigkeit erklärt, warum der Verbrauch bei hohem Tempo so stark steigt.
```

```aufgabe
id: p4-pumpspeicher
titel: Pumpspeicherkraftwerk
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Der Oberspeicher eines Pumpspeicherkraftwerks fasst $1{,}0\cdot 10^{6}\,\text{m}^3$ Wasser. Die mittlere Fallhöhe beträgt $300\,\text{m}$. Turbinen und Generatoren arbeiten zusammen mit $\eta = 0{,}80$.

  a) Wie viel elektrische Energie kann der volle Speicher liefern (in MWh, drei signifikante Stellen)?

  b) Wie lange könnte er eine elektrische Leistung von $100\,\text{MW}$ abgeben (in h)?
teile:
  - typ: zahl
    label: a) Energie
    loesung: "1e9*9.81*300*0.8/3.6e9"
    einheit: "MWh"
    anzeige: '654'
    fehler:
      - wert: "1e9*9.81*300/3.6e9"
        meldung: Das ist die ganze Lageenergie. Nur $80\,\%$ davon werden zu elektrischer Energie.
      - wert: "1e6*9.81*300*0.8/3.6e9"
        meldung: Du hast das Volumen als Masse eingesetzt. $1\,\text{m}^3$ Wasser hat $1000\,\text{kg}$.
  - typ: zahl
    label: b) Dauer
    loesung: "1e9*9.81*300*0.8/3.6e9/100"
    einheit: "h"
    anzeige: '6{,}54'
hinweise:
  - '$1\,\text{m}^3$ Wasser hat $1000\,\text{kg}$; $1\,\text{MWh} = 3{,}6\cdot 10^9\,\text{J}$.'
  - Dauer ist Energie durch Leistung. MWh durch MW ergibt Stunden.
loesung: |
  **Modell:** Das Wasser verliert im Mittel $300\,\text{m}$ Höhe. Seine Lageenergie wird mit $80\,\%$ zu Strom.
  ---
  **Masse und Lageenergie:** $m = 1{,}0\cdot 10^9\,\text{kg}$; $m g h = 10^9\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 300\,\text{m} = 2{,}94\cdot 10^{12}\,\text{J}$.
  ---
  **a)** $E_{\text{el}} = 0{,}80\cdot 2{,}94\cdot 10^{12}\,\text{J} = 2{,}35\cdot 10^{12}\,\text{J}$. Geteilt durch $3{,}6\cdot 10^9\,\text{J/MWh}$ ergibt das $654\,\text{MWh}$.
  ---
  **b)** $t = \dfrac{654\,\text{MWh}}{100\,\text{MW}} = 6{,}54\,\text{h}$. Ein solcher Speicher deckt also einen Abend mit hohem Strombedarf ab.
```

```aufgabe
id: p4-6-fermi
titel: "Abschätzen: Wie viele Radfahrer für einen Wasserkocher?"
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Wasserkocher braucht $2\,\text{kW}$. Er soll von Menschen auf Fahrradgeneratoren betrieben werden. Ein Mensch leistet auf Dauer etwa $100\,\text{W}$ mechanisch, der Generator hat einen Wirkungsgrad von etwa $90\,\%$. Wie viele Radfahrer braucht man ungefähr?
teile:
  - typ: auswahl
    optionen:
      - "etwa 2"
      - "etwa 20"
      - "etwa 200"
      - "etwa 2000"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Zwei Menschen leisten zusammen nur rund $200\,\text{W}$, also ein Zehntel des Nötigen. Rechne $2000\,\text{W}$ durch die elektrische Leistung eines Radfahrers.
      - wert: 2
        meldung: Zu viele. Ein Radfahrer liefert etwa $90\,\text{W}$ elektrisch. Wie viele davon ergeben $2000\,\text{W}$?
      - wert: 3
        meldung: Viel zu viele. Hast du Watt und Kilowatt vertauscht?
hinweise:
  - Elektrische Leistung eines Radfahrers ist mechanische Leistung mal Wirkungsgrad.
  - Teile die nötige Leistung durch die Leistung eines Radfahrers.
loesung: |
  **Modell:** Jeder Radfahrer liefert dauerhaft $100\,\text{W}\cdot 0{,}90 = 90\,\text{W}$ elektrisch.
  ---
  **Anzahl:** $\dfrac{2000\,\text{W}}{90\,\text{W}} \approx 22$, also etwa 20 Radfahrer.
  ---
  **Deutung:** Ein einziger Wasserkocher braucht so viel Leistung wie eine ganze Schulklasse auf Rädern. Das zeigt, wie viel Energie im Alltag aus der Steckdose kommt.
```

## Impuls und Kraftstoß

```aufgabe
id: p4-7-check
art: check
titel: "Vorwissen: das Grundgesetz in Impulsform"
niveau: 1
angabe: |
  Auf ein waagrechtes Förderband, das mit $3{,}0\,\text{m/s}$ läuft, fallen pro Sekunde $10\,\text{kg}$ Sand. Welche zusätzliche waagrechte Kraft muss der Antrieb aufbringen (in N)?
teile:
  - typ: zahl
    loesung: "10*3"
    einheit: "N"
    anzeige: '30'
    fehler:
      - wert: "10*9.81"
        meldung: Das ist die Gewichtskraft des Sandes pro Sekunde. Sie wirkt senkrecht. Gesucht ist die waagrechte Kraft, die den Sand auf Bandgeschwindigkeit bringt.
      - wert: "10/3"
        meldung: Die Impulsänderung pro Sekunde ist Masse pro Sekunde **mal** Geschwindigkeit.
hinweise:
  - 'Grundgesetz in Impulsform: $F = \Delta p/\Delta t$. In einer Sekunde erhalten $10\,\text{kg}$ die Geschwindigkeit $3{,}0\,\text{m/s}$.'
loesung: |
  In einer Sekunde ändert sich der Impuls des Sandes um $\Delta p = 10\,\text{kg}\cdot 3{,}0\,\text{m/s} = 30\,\text{kg}\cdot\text{m/s}$.
  ---
  $F = \dfrac{\Delta p}{\Delta t} = \dfrac{30\,\text{kg}\cdot\text{m/s}}{1\,\text{s}} = 30\,\text{N}$. Wiederholen: [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung), Teil „Die Impulsform des Grundgesetzes“.
```

Ein Tennisball und eine Kanonenkugel fliegen gleich schnell auf dich zu. Die Kanonenkugel aufzuhalten ist
viel schwerer. Ein Gewehrgeschoss und ein langsam rollender Ball können gleich schwer sein, und trotzdem ist
das Geschoss viel schwerer zu stoppen. Beim Abbremsen zählen also Masse **und** Geschwindigkeit zusammen.

### Der Impuls

:::definition[Impuls]
Der **Impuls** eines Körpers ist das Produkt aus Masse und Geschwindigkeit:
$$\vec p = m\cdot\vec v.$$
Dabei ist $m$ die Masse (in kg) und $\vec v$ die Geschwindigkeit (in m/s). Die Einheit ist
$1\,\text{kg}\cdot\text{m/s} = 1\,\text{N}\cdot\text{s}$. Der Impuls ist ein **Vektor** und zeigt in Richtung der Geschwindigkeit.
:::

**Beispiel:** Ein Fußball ($0{,}45\,\text{kg}$) mit $20\,\text{m/s}$ nach rechts hat den Impuls
$9{,}0\,\text{kg}\cdot\text{m/s}$ nach rechts. Fliegt er mit $20\,\text{m/s}$ nach links, ist sein Impuls
$-9{,}0\,\text{kg}\cdot\text{m/s}$, wenn rechts positiv zählt. Auf einer Geraden zeigt das Vorzeichen die Richtung.

**Worum geht es beim Unterschied zur Energie?** Impuls und kinetische Energie hängen beide von $m$ und $v$
ab. Trotzdem sind sie grundverschieden. Ein **Nicht-Beispiel** zeigt das. Zwei gleiche Kugeln
($1\,\text{kg}$) fliegen mit je $2\,\text{m/s}$ frontal aufeinander zu. Ihr Gesamtimpuls ist
$1\cdot 2 + 1\cdot(-2) = 0$, denn die Impulse zeigen in entgegengesetzte Richtungen und heben sich auf. Ihre
kinetische Energie ist aber $2\cdot\tfrac12\cdot 1\cdot 2^2\,\text{J} = 4\,\text{J}$. Energien haben keine Richtung
und können sich nie aufheben.

### Der Kraftstoß

Im Kapitel Dynamik, Lektion [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung), steht das
Grundgesetz in Impulsform: $\vec F = \Delta\vec p/\Delta t$. Multiplizieren wir beide Seiten mit $\Delta t$,
erhalten wir eine neue Sicht.

:::satz[Kraftstoß]
Wirkt eine konstante Kraft $\vec F$ während der Zeit $\Delta t$ auf einen Körper, ändert sich sein Impuls um
$$\Delta\vec p = \vec F\cdot\Delta t.$$
Das Produkt $\vec F\cdot\Delta t$ heißt **Kraftstoß**. Bei einer veränderlichen Kraft ist der Kraftstoß die
Fläche unter dem F-t-Diagramm, oder man rechnet mit der mittleren Kraft $\bar F$.
:::

Die Fläche unter einem Graphen kennst du schon von der Arbeit, nur steht jetzt die Zeit statt des Weges auf
der waagrechten Achse. Mathematisch ist der Kraftstoß das Integral $\int F\,\dd t$, siehe
[Das bestimmte Integral als Flächenbilanz](/lernen/mathe3/integralrechnung/das-bestimmte-integral-als-flaechenbilanz).

```plot
x: [0, 10]
y: [0, 1700]
achsen: { x: "t in ms", y: "F in N" }
graphen:
  - { f: "375*x", farbe: 0, von: 0, bis: 4 }
  - { f: "1500 - 375*(x - 4)", farbe: 0, von: 4, bis: 8 }
flaechen:
  - { f: "375*x", g: "0", von: 0, bis: 4, farbe: 1 }
  - { f: "1500 - 375*(x - 4)", g: "0", von: 4, bis: 8, farbe: 1 }
punkte:
  - { x: 4, y: 1500, label: "1500 N" }
beschriftung: "F-t-Diagramm eines Schusses: Der Fuß drückt 8 ms lang auf den Ball. Die Kraft steigt in 4 ms auf 1500 N und fällt in weiteren 4 ms wieder auf null. Die Fläche unter dem Graphen (orange) ist der Kraftstoß."
```

:::beispiel[Kraftstoß aus dem F-t-Diagramm]
Der Fuß im Diagramm schießt einen ruhenden Ball mit $0{,}40\,\text{kg}$. Wie schnell fliegt der Ball weg?

**Schritt 1, Fläche:** Unter dem Graphen liegt ein Dreieck mit der Breite $8\,\text{ms} = 0{,}008\,\text{s}$
und der Höhe $1500\,\text{N}$. Kraftstoß: $\tfrac12\cdot 0{,}008\,\text{s}\cdot 1500\,\text{N} = 6{,}0\,\text{N}\cdot\text{s}$.

**Schritt 2, Impulsänderung:** $\Delta p = 6{,}0\,\text{kg}\cdot\text{m/s}$. Der Ball ruhte, also ist das sein neuer Impuls.

**Schritt 3, Geschwindigkeit:** $v = \dfrac{p}{m} = \dfrac{6{,}0\,\text{kg}\cdot\text{m/s}}{0{,}40\,\text{kg}} = 15\,\text{m/s}$.

**Deutung:** Die mittlere Kraft ist die Hälfte der Spitzenkraft, also $750\,\text{N}$. Probe: $750\,\text{N}\cdot 0{,}008\,\text{s} = 6{,}0\,\text{N}\cdot\text{s}$. ✓
:::

:::beispiel[Ein Tennisball prallt von der Wand zurück]
Ein Tennisball ($58\,\text{g}$) trifft mit $30\,\text{m/s}$ senkrecht auf eine Wand und prallt mit
$25\,\text{m/s}$ zurück. Der Kontakt dauert $5{,}0\,\text{ms}$. Wie groß ist die mittlere Kraft der Wand?

**Schritt 1, Richtung festlegen:** Zur Wand hin zählt positiv. Vorher $v_1 = +30\,\text{m/s}$, nachher $v_2 = -25\,\text{m/s}$.

**Schritt 2, Impulsänderung:** $\Delta p = m(v_2 - v_1) = 0{,}058\,\text{kg}\cdot(-25 - 30)\,\text{m/s} = -3{,}19\,\text{kg}\cdot\text{m/s}$.

**Schritt 3, Kraft:** $\bar F = \dfrac{\Delta p}{\Delta t} = \dfrac{-3{,}19\,\text{kg}\cdot\text{m/s}}{0{,}0050\,\text{s}} = -638\,\text{N}$.

**Deutung:** Das Minus heißt, die Kraft zeigt von der Wand weg. Weil der Ball umkehrt, addieren sich die
Beträge der Geschwindigkeiten zu $55\,\text{m/s}$. Ein Ball, der an der Wand liegen bliebe, bräuchte weniger Kraft.
:::

:::achtung[Fehler: beim Zurückprallen die Geschwindigkeiten abgezogen]
Ein Ball ($0{,}20\,\text{kg}$) trifft mit $10\,\text{m/s}$ auf eine Wand und prallt mit $8{,}0\,\text{m/s}$ zurück.

Falsch gerechnet: $\Delta p = 0{,}20\,\text{kg}\cdot(10 - 8{,}0)\,\text{m/s} = 0{,}40\,\text{kg}\cdot\text{m/s}$.

Hier wurde die Richtung vergessen. Die Geschwindigkeit ändert sich von $+10\,\text{m/s}$ auf $-8{,}0\,\text{m/s}$, also um
$18\,\text{m/s}$. Richtig: $|\Delta p| = 0{,}20\,\text{kg}\cdot 18\,\text{m/s} = 3{,}6\,\text{kg}\cdot\text{m/s}$, neunmal so viel.
:::

:::achtung[Fehler: Impuls wie Energie quadratisch behandelt]
Ein Auto ($1000\,\text{kg}$) prallt mit $10\,\text{m/s}$ gegen ein Hindernis und steht nach $0{,}10\,\text{s}$.
Die mittlere Kraft ist $\dfrac{1000\cdot 10}{0{,}10}\,\text{N} = 100\,\text{kN}$.

Falsch gedacht: Bei $20\,\text{m/s}$ und gleicher Stoßzeit ist die Kraft viermal so groß, $400\,\text{kN}$.

Der Impuls wächst nur **linear** mit $v$, nicht quadratisch. Bei gleicher Stoßzeit ist die Kraft doppelt so groß,
$200\,\text{kN}$. In der Praxis wird es trotzdem schlimmer, denn bei mehr Tempo verformt sich mehr.
:::

### Warum Airbags, Knautschzonen und Matten schützen

:::intuition[Dieselbe Impulsänderung, aber mehr Zeit]
Bei einem Aufprall muss der Impuls des Körpers auf null gebracht werden. Die Impulsänderung $\Delta p$ steht
also fest. Wegen $\bar F = \Delta p/\Delta t$ hängt die Kraft nur noch von der Bremszeit ab. Ein Airbag, eine
Knautschzone, ein Helm, eine Turnmatte oder das Beugen der Knie **verlängern die Bremszeit**. Zehnfache Zeit
bedeutet ein Zehntel der Kraft. Ein Hammer macht es umgekehrt: Die kurze Stoßzeit erzeugt eine große Kraft auf den Nagel.
:::

:::beispiel[Landung auf Hallenboden oder auf der Matte]
Ein Turner ($60\,\text{kg}$) landet mit $6{,}0\,\text{m/s}$. Auf dem harten Hallenboden kommt er in
$0{,}020\,\text{s}$ zur Ruhe, auf einer Weichbodenmatte in $0{,}30\,\text{s}$. Wie groß ist jeweils die mittlere
resultierende Kraft?

**Schritt 1, Impulsänderung:** In beiden Fällen $|\Delta p| = 60\,\text{kg}\cdot 6{,}0\,\text{m/s} = 360\,\text{kg}\cdot\text{m/s}$.

**Schritt 2, Hallenboden:** $\bar F = \dfrac{360\,\text{kg}\cdot\text{m/s}}{0{,}020\,\text{s}} = 18\,000\,\text{N}$.

**Schritt 3, Matte:** $\bar F = \dfrac{360\,\text{kg}\cdot\text{m/s}}{0{,}30\,\text{s}} = 1200\,\text{N}$.

**Deutung:** Die Matte senkt die Kraft auf ein Fünfzehntel. Der Boden muss zusätzlich noch die
Gewichtskraft von $589\,\text{N}$ tragen. Bei kurzer Stoßzeit fällt sie kaum ins Gewicht.
:::

:::merke[Kraftstoß berechnen]
1. Lege eine positive Richtung fest und gib jeder Geschwindigkeit ihr Vorzeichen.
2. Berechne $\Delta p = m(v_{\text{nachher}} - v_{\text{vorher}})$.
3. Kraft: $\bar F = \Delta p/\Delta t$. Bei einem F-t-Diagramm ist $\Delta p$ die Fläche darunter.
:::

```reflexion
frage: Beim Sprung von einer Mauer landet man sicherer mit gebeugten Knien als mit durchgestreckten Beinen. Erkläre das mit dem Kraftstoß.
antwort: |
  Beim Landen muss der Impuls $m v$ auf null gebracht werden, egal wie man landet. Mit gebeugten Knien
  bremst der Körper auf einem längeren Weg und damit über eine längere Zeit ab. Bei gleicher Impulsänderung
  und längerer Zeit ist nach $\bar F = \Delta p/\Delta t$ die Kraft kleiner. Mit durchgestreckten Beinen dauert
  das Abbremsen nur Millisekunden, und die Kraft auf Gelenke und Knochen wird sehr groß.
```

### Aufgaben zu Impuls und Kraftstoß

```aufgabe
id: p4-impuls
titel: Impulse vergleichen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Welcher Körper hat den größeren Impuls: ein Gewehrgeschoss ($10\,\text{g}$, $800\,\text{m/s}$) oder ein Fußball ($0{,}45\,\text{kg}$, $20\,\text{m/s}$)? Gib beide Impulse in $\text{kg}\cdot\text{m/s}$ an.
teile:
  - typ: zahl
    label: Geschoss
    loesung: "0.01*800"
    einheit: "kg·m/s"
    anzeige: '8'
    fehler:
      - wert: "10*800"
        meldung: Du hast die Masse in Gramm eingesetzt. $10\,\text{g} = 0{,}010\,\text{kg}$.
      - wert: "0.5*0.01*800^2"
        meldung: Das ist die kinetische Energie in J. Der Impuls ist einfach $m\cdot v$.
  - typ: zahl
    label: Fußball
    loesung: "0.45*20"
    einheit: "kg·m/s"
    anzeige: '9'
    fehler:
      - wert: "0.5*0.45*20^2"
        meldung: Das ist die kinetische Energie. Der Impuls ist $m\cdot v$ ohne Quadrat und ohne $\tfrac12$.
hinweise:
  - '$p = m\cdot v$ mit $m$ in kg.'
loesung: |
  **Geschoss:** $p = 0{,}010\,\text{kg}\cdot 800\,\text{m/s} = 8{,}0\,\text{kg}\cdot\text{m/s}$. **Fußball:** $p = 0{,}45\,\text{kg}\cdot 20\,\text{m/s} = 9{,}0\,\text{kg}\cdot\text{m/s}$.
  ---
  Der Fußball hat den größeren Impuls. Die kinetische Energie des Geschosses ($3200\,\text{J}$) ist dagegen viel größer als die des Balls ($90\,\text{J}$). Das macht das Geschoss so zerstörerisch.
```

```aufgabe
id: p4-kraftstoss
titel: Kraft beim Schuss
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein ruhender Fußball ($0{,}45\,\text{kg}$) wird geschossen und fliegt mit $25\,\text{m/s}$ weg. Der Fuß berührt den Ball $8{,}0\,\text{ms}$ lang. Wie groß ist die mittlere Kraft auf den Ball (in N)?
teile:
  - typ: zahl
    loesung: "0.45*25/0.008"
    einheit: "N"
    anzeige: '1406'
    fehler:
      - wert: "0.45*25/8"
        meldung: Du hast die Zeit in Millisekunden eingesetzt. $8{,}0\,\text{ms} = 0{,}0080\,\text{s}$.
      - wert: "0.45*25*0.008"
        meldung: Du hast mit der Zeit multipliziert. Die Kraft ist Impulsänderung **durch** Zeit.
hinweise:
  - '$\bar F = \Delta p/\Delta t$ mit $\Delta t$ in Sekunden.'
loesung: |
  **Impulsänderung:** $\Delta p = m\Delta v = 0{,}45\,\text{kg}\cdot 25\,\text{m/s} = 11{,}25\,\text{kg}\cdot\text{m/s}$.
  ---
  **Kraft:** $\bar F = \dfrac{11{,}25\,\text{kg}\cdot\text{m/s}}{0{,}0080\,\text{s}} = 1406\,\text{N}$. Das entspricht dem Gewicht von gut $140\,\text{kg}$, aber nur für acht Millisekunden.
```

```aufgabe
id: p4-airbag
titel: Airbag
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Bei einem Auffahrunfall mit $54\,\text{km/h}$ wird der Kopf eines Fahrers ($5{,}0\,\text{kg}$) gestoppt. Wie groß ist die mittlere Kraft auf den Kopf, wenn er

  a) in $5{,}0\,\text{ms}$ am Lenkrad,

  b) in $50\,\text{ms}$ im Airbag abgebremst wird? Gib beide Kräfte in N an.
teile:
  - typ: zahl
    label: a) Lenkrad
    loesung: "5*15/0.005"
    einheit: "N"
    anzeige: '15000'
    fehler:
      - wert: "5*54/0.005"
        meldung: Du hast km/h nicht in m/s umgerechnet. $54\,\text{km/h} = 15\,\text{m/s}$.
  - typ: zahl
    label: b) Airbag
    loesung: "5*15/0.05"
    einheit: "N"
    anzeige: '1500'
    fehler:
      - wert: "5*15/0.5"
        meldung: Prüfe die Umrechnung der Zeit. $50\,\text{ms} = 0{,}050\,\text{s}$.
hinweise:
  - Die Impulsänderung ist in beiden Fällen gleich.
  - Rechne die Geschwindigkeit in m/s und die Zeiten in s um. Dann $\bar F = \Delta p/\Delta t$.
gefuehrt:
  - text: Wie groß ist die Geschwindigkeit in m/s?
    teil: { typ: zahl, loesung: "54/3.6" }
    erklaerung: '$54\,\text{km/h} : 3{,}6 = 15\,\text{m/s}$.'
  - text: Wie groß ist die Impulsänderung des Kopfes (Betrag in kg·m/s)?
    teil: { typ: zahl, loesung: "5*15" }
    erklaerung: '$|\Delta p| = 5{,}0\,\text{kg}\cdot 15\,\text{m/s} = 75\,\text{kg}\cdot\text{m/s}$, in beiden Fällen gleich.'
  - text: Berechne die Kraft beim Lenkrad (in N).
    teil: { typ: zahl, loesung: "75/0.005" }
    erklaerung: '$75/0{,}0050\,\text{N} = 15\,000\,\text{N}$.'
  - text: Berechne die Kraft im Airbag (in N).
    teil: { typ: zahl, loesung: "75/0.05" }
    erklaerung: '$75/0{,}050\,\text{N} = 1500\,\text{N}$. Zehnfache Zeit, ein Zehntel der Kraft.'
loesung: |
  **Ansatz:** Der Kopf wird in beiden Fällen von $15\,\text{m/s}$ auf null gebremst. Die Impulsänderung ist also gleich, nur die Zeit unterscheidet sich.
  ---
  **Impulsänderung:** $54\,\text{km/h} = 15\,\text{m/s}$, $|\Delta p| = 5{,}0\,\text{kg}\cdot 15\,\text{m/s} = 75\,\text{kg}\cdot\text{m/s}$.
  ---
  **a)** $\bar F = 75\,\text{kg}\cdot\text{m/s}/0{,}0050\,\text{s} = 15\,000\,\text{N}$.
  ---
  **b)** $\bar F = 75\,\text{kg}\cdot\text{m/s}/0{,}050\,\text{s} = 1500\,\text{N}$. Zehnfache Bremszeit ergibt ein Zehntel der Kraft.
```

```aufgabe
id: p4-7-wand
titel: Ein Gummiball an der Wand
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Gummiball ($0{,}15\,\text{kg}$) trifft mit $12\,\text{m/s}$ senkrecht auf eine Wand und prallt mit $10\,\text{m/s}$ zurück. Der Kontakt dauert $0{,}020\,\text{s}$. Wie groß ist der Betrag der mittleren Kraft der Wand auf den Ball (in N)?
teile:
  - typ: zahl
    loesung: "0.15*(12 + 10)/0.02"
    einheit: "N"
    anzeige: '165'
    fehler:
      - wert: "0.15*(12 - 10)/0.02"
        meldung: Du hast die Geschwindigkeiten abgezogen. Der Ball kehrt aber um. Mit Vorzeichen geht die Geschwindigkeit von $+12$ auf $-10\,\text{m/s}$, sie ändert sich also um $22\,\text{m/s}$.
      - wert: "0.15*12/0.02"
        meldung: So groß wäre die Kraft, wenn der Ball an der Wand liegen bliebe. Er prallt aber zurück, und dafür braucht es zusätzliche Kraft.
hinweise:
  - Lege die Richtung zur Wand als positiv fest. Welches Vorzeichen hat die Geschwindigkeit nach dem Aufprall?
  - '$\Delta p = m(v_{\text{nachher}} - v_{\text{vorher}})$, dann $\bar F = \Delta p/\Delta t$.'
loesung: |
  **Ansatz:** Zur Wand hin positiv. Vorher $v_1 = +12\,\text{m/s}$, nachher $v_2 = -10\,\text{m/s}$.
  ---
  **Impulsänderung:** $\Delta p = 0{,}15\,\text{kg}\cdot(-10 - 12)\,\text{m/s} = -3{,}3\,\text{kg}\cdot\text{m/s}$.
  ---
  **Kraft:** $|\bar F| = \dfrac{3{,}3\,\text{kg}\cdot\text{m/s}}{0{,}020\,\text{s}} = 165\,\text{N}$, von der Wand weg gerichtet.
  ---
  **Plausibilität:** Ein Ball, der liegen bleibt, bräuchte nur $90\,\text{N}$. Das Zurückprallen fast verdoppelt die Kraft. ✓
```

```aufgabe
id: p4-7-ft-diagramm
titel: Kraftstoß aus einem Trapez
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Hockeyschläger trifft einen ruhenden Ball ($0{,}16\,\text{kg}$). Das Diagramm zeigt die Kraft auf den Ball: Sie steigt in $2\,\text{ms}$ auf $400\,\text{N}$, bleibt $6\,\text{ms}$ konstant und fällt in $2\,\text{ms}$ wieder auf null.

  a) Wie groß ist der Kraftstoß (in N·s)?

  b) Wie schnell fliegt der Ball weg (in m/s)?
plot:
  x: [0, 12]
  y: [0, 500]
  achsen: { x: "t in ms", y: "F in N" }
  strecken:
    - { von: [0, 0], nach: [2, 400] }
    - { von: [2, 400], nach: [8, 400] }
    - { von: [8, 400], nach: [10, 0] }
teile:
  - typ: zahl
    label: a) Kraftstoß
    loesung: "0.5*0.002*400*2 + 0.006*400"
    einheit: "N·s"
    anzeige: '3{,}2'
    fehler:
      - wert: "400*0.010"
        meldung: Du hast ein Rechteck über die ganzen $10\,\text{ms}$ gerechnet. Am Anfang steigt die Kraft, am Ende fällt sie. Dort liegen Dreiecke.
      - wert: "0.006*400"
        meldung: Das ist nur das Rechteck in der Mitte. Die beiden Dreiecke am Rand gehören auch zur Fläche.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "(0.5*0.002*400*2 + 0.006*400)/0.16"
    einheit: "m/s"
    anzeige: '20'
    fehler:
      - wert: "(0.5*0.002*400*2 + 0.006*400)*0.16"
        meldung: Du hast mit der Masse multipliziert. Aus $p = m v$ folgt $v = p/m$.
hinweise:
  - Zerlege die Fläche in zwei Dreiecke und ein Rechteck. Rechne die Zeiten in Sekunden um.
  - Der Ball ruhte, also ist der Kraftstoß gleich seinem Impuls danach. Dann $v = p/m$.
loesung: |
  **Ansatz:** Der Kraftstoß ist die Fläche unter dem F-t-Diagramm. Sie besteht aus zwei Dreiecken und einem Rechteck.
  ---
  **a)** Dreiecke: je $\tfrac12\cdot 0{,}002\,\text{s}\cdot 400\,\text{N} = 0{,}40\,\text{N}\cdot\text{s}$. Rechteck: $0{,}006\,\text{s}\cdot 400\,\text{N} = 2{,}4\,\text{N}\cdot\text{s}$. Summe: $3{,}2\,\text{N}\cdot\text{s}$.
  ---
  **b)** Der Ball ruhte, also $p = 3{,}2\,\text{kg}\cdot\text{m/s}$ und $v = \dfrac{3{,}2\,\text{kg}\cdot\text{m/s}}{0{,}16\,\text{kg}} = 20\,\text{m/s}$.
  ---
  **Probe:** Mit einer Rechteckfläche über $10\,\text{ms}$ wären es $4{,}0\,\text{N}\cdot\text{s}$. Unser Wert ist kleiner, weil die Kraft am Rand kleiner ist. ✓
```

```aufgabe
id: p4-7-ei
titel: Ein Ei fällt auf Teppich oder Fliesen
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein rohes Ei fällt aus derselben Höhe einmal auf einen dicken Teppich und einmal auf Fliesen. Auf den Fliesen zerbricht es, auf dem Teppich nicht. Welche Erklärung stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Auf den Fliesen ist die Impulsänderung des Eis größer."
      - "Die Impulsänderung ist gleich, aber auf den Fliesen dauert das Abbremsen viel kürzer. Deshalb ist die Kraft größer."
      - "Der Teppich nimmt die Energie des Eis auf, die Fliesen nicht. Die Kraft ist gleich."
      - "Auf dem Teppich ist das Ei langsamer, weil der Teppich bremst, bevor es ihn berührt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das Ei kommt in beiden Fällen gleich schnell an und bleibt liegen. Die Impulsänderung ist also gleich. Der Unterschied liegt in der Zeit.
      - wert: 2
        meldung: Auch die Fliesen nehmen die Energie auf, sie wird zu Wärme und Verformung. Entscheidend für das Zerbrechen ist die **Kraft**, und die hängt von der Bremszeit ab.
      - wert: 3
        meldung: Vor der Berührung wirkt der Teppich nicht auf das Ei. Beide Eier treffen gleich schnell auf.
hinweise:
  - Vergleiche zuerst die Impulsänderung in beiden Fällen.
  - Was ändert der weiche Teppich an der Zeit des Abbremsens?
loesung: |
  **Impulsänderung:** In beiden Fällen trifft das Ei gleich schnell auf und kommt zur Ruhe. $\Delta p$ ist also gleich.
  ---
  **Zeit:** Der Teppich gibt nach. Das Ei wird über einen längeren Weg und eine längere Zeit gebremst.
  ---
  **Kraft:** Wegen $\bar F = \Delta p/\Delta t$ ist die Kraft auf dem Teppich viel kleiner. Sie bleibt unter der Grenze, bei der die Schale bricht.
```

```aufgabe
id: p4-7-sprung
titel: Landen mit gebeugten Knien
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Eine Person ($70\,\text{kg}$) springt aus $1{,}0\,\text{m}$ Höhe von einer Mauer. Beim Landen beugt sie die Knie und bremst ihren Körperschwerpunkt auf $40\,\text{cm}$ gleichmäßig ab. Luftwiderstand vernachlässigen wir. Runde auf drei signifikante Stellen.

  a) Mit welcher Geschwindigkeit kommt sie am Boden an (in m/s)?

  b) Wie lange dauert das Abbremsen (in s)?

  c) Mit welcher mittleren Kraft drückt der Boden auf die Person (in N)?
teile:
  - typ: zahl
    label: a) Geschwindigkeit
    loesung: "sqrt(2*9.81*1)"
    einheit: "m/s"
    anzeige: '4{,}43'
  - typ: zahl
    label: b) Bremszeit
    loesung: "2*0.4/sqrt(2*9.81*1)"
    einheit: "s"
    anzeige: '0{,}181'
    fehler:
      - wert: "0.4/sqrt(2*9.81*1)"
        meldung: Beim gleichmäßigen Abbremsen ist die mittlere Geschwindigkeit nur die Hälfte von $v$. Die Zeit ist also $s/(v/2) = 2s/v$.
  - typ: zahl
    label: c) Kraft des Bodens
    loesung: "70*sqrt(2*9.81*1)/(2*0.4/sqrt(2*9.81*1)) + 70*9.81"
    einheit: "N"
    anzeige: '2403 \approx 2{,}40\cdot 10^{3}'
    fehler:
      - wert: "70*sqrt(2*9.81*1)/(2*0.4/sqrt(2*9.81*1))"
        meldung: Das ist die **resultierende** Kraft. Der Boden muss zusätzlich die Gewichtskraft tragen, also $F_{\text{Boden}} = F_{\text{res}} + m g$.
hinweise:
  - 'a) mit Energieerhaltung. b) Bei gleichmäßigem Abbremsen ist die mittlere Geschwindigkeit $v/2$, also $\Delta t = 2s/v$.'
  - 'c) Resultierende Kraft $F_{\text{res}} = m v/\Delta t$ nach oben. Auf die Person wirken Boden (nach oben) und Gewicht (nach unten): $F_{\text{Boden}} - m g = F_{\text{res}}$.'
loesung: |
  **Modell:** Zwei Phasen. Im freien Fall gilt Energieerhaltung. Beim Abbremsen rechnen wir mit dem Kraftstoß und nehmen eine gleichmäßige Verzögerung an.
  ---
  **a)** $v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}0\,\text{m}} = 4{,}43\,\text{m/s}$.
  ---
  **b)** Mittlere Geschwindigkeit beim Bremsen $v/2 = 2{,}21\,\text{m/s}$. Also $\Delta t = \dfrac{0{,}40\,\text{m}}{2{,}21\,\text{m/s}} = 0{,}181\,\text{s}$.
  ---
  **c)** $F_{\text{res}} = \dfrac{70\,\text{kg}\cdot 4{,}43\,\text{m/s}}{0{,}181\,\text{s}} = 1717\,\text{N}$ nach oben. Der Boden drückt mit $F_{\text{res}} + m g = 1717\,\text{N} + 687\,\text{N} = 2403\,\text{N} \approx 2{,}40\,\text{kN}$, das Dreieinhalbfache des Gewichts.
  ---
  **Vergleich:** Mit steifen Beinen und nur $1\,\text{cm}$ Bremsweg wäre $\Delta t = 4{,}5\,\text{ms}$ und die resultierende Kraft rund $69\,\text{kN}$. Das bricht Knochen.
```

## Impulserhaltung und Rückstoß

```aufgabe
id: p4-8-check
art: check
titel: "Vorwissen: Kräfte zwischen zwei Wagen"
niveau: 1
angabe: |
  Ein schwerer Wagen fährt auf einen leichten auf. Während des Aufpralls drücken die beiden Wagen aufeinander. Wie verhalten sich die beiden Kräfte, die sie aufeinander ausüben?
teile:
  - typ: auswahl
    optionen:
      - "Der schwere Wagen drückt stärker auf den leichten als umgekehrt."
      - "Beide Kräfte sind in jedem Moment gleich groß und entgegengesetzt."
      - "Der leichte Wagen drückt stärker, weil er stärker beschleunigt wird."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Masse und Geschwindigkeit ändern nichts am dritten Newtonschen Axiom. Die Wechselwirkungskräfte sind immer gleich groß.
      - wert: 2
        meldung: Der leichte Wagen wird stärker beschleunigt, weil er bei **gleicher** Kraft weniger Masse hat. Die Kräfte selbst sind gleich groß.
hinweise:
  - Actio gleich reactio gilt in jedem Augenblick, auch bei einem Stoß.
loesung: |
  Nach dem dritten Newtonschen Axiom sind die Kräfte zwischen zwei Körpern in jedem Moment gleich groß und entgegengesetzt gerichtet.
  ---
  Gerade daraus folgt gleich der Impulserhaltungssatz. Wiederholen: [Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf).
```

### Warum der Gesamtimpuls erhalten bleibt

**Worum geht es?** Zwei Körper stoßen sich ab oder prallen zusammen. Jeder ändert dabei seinen Impuls. Wir
zeigen, dass die **Summe** der beiden Impulse trotzdem gleich bleibt.

**Bild:** Zwei Eisläufer stehen still und stoßen sich mit den Händen voneinander ab. Danach gleiten sie in
entgegengesetzte Richtungen. Was der eine an Impuls nach links bekommt, bekommt der andere nach rechts.

**In Schritten:**

1. Während des Abstoßens übt A auf B die Kraft $\vec F_{AB}$ aus und B auf A die Kraft $\vec F_{BA}$.
2. Nach dem dritten Newtonschen Axiom gilt in jedem Moment $\vec F_{BA} = -\vec F_{AB}$.
3. Beide Kräfte wirken genau gleich lange, nämlich die Zeit $\Delta t$ des Kontakts.
4. Nach dem Kraftstoß ändert sich also der Impuls von B um $\vec F_{AB}\Delta t$ und der von A um $-\vec F_{AB}\Delta t$.
5. Die beiden Änderungen heben sich auf. Die Summe der Impulse bleibt gleich.

**In Worten zurückübersetzt:** Kräfte **innerhalb** eines Systems verschieben Impuls nur zwischen den Teilen.
Ändern kann den Gesamtimpuls nur eine Kraft **von außen**.

:::satz[Impulserhaltungssatz]
In einem **abgeschlossenen System**, auf das keine äußeren Kräfte wirken oder in dem sich die äußeren Kräfte
aufheben, bleibt der Gesamtimpuls konstant:
$$m_1\vec v_1 + m_2\vec v_2 = m_1\vec v_1\,' + m_2\vec v_2\,'.$$
Dabei sind $\vec v_1, \vec v_2$ die Geschwindigkeiten vorher und $\vec v_1\,', \vec v_2\,'$ die Geschwindigkeiten
nachher. Bei mehr Körpern stehen entsprechend mehr Summanden da. Achtung: Beim Energieerhaltungssatz
bedeutet „abgeschlossen“ etwas anderes, nämlich kein Energieaustausch mit der Umgebung.
:::

Der Satz gilt **immer**, wenn keine äußere Kraft den Gesamtimpuls ändert. Er gilt auch bei Reibung zwischen
den Körpern, bei Verformung, beim Zusammenkleben und bei Explosionen. Darin unterscheidet er sich von der
Erhaltung der mechanischen Energie. Ein **Gegenbeispiel**: Ein fallender Ball allein ist kein abgeschlossenes
System, denn die Erde zieht von außen an ihm. Sein Impuls wächst beim Fallen.

### Rückstoß

Ruht ein System zuerst und zerfällt es dann in zwei Teile, ist der Gesamtimpuls vorher null. Nachher muss er
ebenfalls null sein. Also gilt $m_1 v_1' + m_2 v_2' = 0$ oder $m_1 v_1' = -m_2 v_2'$. Die Teile fliegen mit
gleich großen Impulsen in entgegengesetzte Richtungen. Der leichtere Teil wird dabei schneller.

:::beispiel[Rückstoß einer Kanone]
Eine Kanone ($800\,\text{kg}$) feuert eine Kugel ($5{,}0\,\text{kg}$) mit $250\,\text{m/s}$ waagrecht ab.
Mit welcher Geschwindigkeit rollt die Kanone zurück?

**Schritt 1, vorher:** Alles ruht, der Gesamtimpuls ist null.

**Schritt 2, Bilanz:** Schussrichtung positiv. $0 = 5{,}0\,\text{kg}\cdot 250\,\text{m/s} + 800\,\text{kg}\cdot v_K$.

**Schritt 3, auflösen:** $v_K = -\dfrac{5{,}0\cdot 250}{800}\,\text{m/s} = -1{,}56\,\text{m/s}$.

**Deutung:** Das Minus heißt: entgegen der Schussrichtung. Die Kanone ist 160-mal so schwer und deshalb 160-mal langsamer.
:::

:::beispiel[Zwei Eisläufer stoßen sich ab]
Ein Eisläufer ($80\,\text{kg}$) und eine Eisläuferin ($50\,\text{kg}$) stehen still und stoßen sich ab. Sie
gleitet danach mit $2{,}4\,\text{m/s}$. Wie schnell gleitet er? Woher kommt die Bewegungsenergie?

**Schritt 1, Bilanz:** Gesamtimpuls vorher null, also $50\,\text{kg}\cdot 2{,}4\,\text{m/s} = 80\,\text{kg}\cdot v$ (Beträge).

**Schritt 2, auflösen:** $v = \dfrac{120\,\text{kg}\cdot\text{m/s}}{80\,\text{kg}} = 1{,}5\,\text{m/s}$ in die Gegenrichtung.

**Schritt 3, Energie:** Danach haben beide zusammen $\tfrac12\cdot 80\cdot 1{,}5^2\,\text{J} + \tfrac12\cdot 50\cdot 2{,}4^2\,\text{J} = 90\,\text{J} + 144\,\text{J} = 234\,\text{J}$.
Vorher hatten sie keine Bewegungsenergie. Die $234\,\text{J}$ stammen aus der chemischen Energie der Muskeln.
Der Impuls bleibt erhalten, die mechanische Energie nicht.
:::

**Raketen** nutzen den Rückstoß ständig. Stößt ein Triebwerk pro Sekunde die Gasmasse $\mu$ (in kg/s) mit der
Geschwindigkeit $w$ relativ zur Rakete aus, bekommt das Gas pro Sekunde den Impuls $\mu w$ nach hinten. Die
Rakete bekommt denselben Impuls nach vorn. Das ist die **Schubkraft** $F_{\text{Schub}} = \mu\cdot w$. Die Rakete
braucht dafür keine Luft, gegen die sie sich abstößt. Sie stößt sich am eigenen Gas ab.

:::achtung[Fehler: Richtungen beim Gesamtimpuls vergessen]
Auto A ($1000\,\text{kg}$) fährt mit $15\,\text{m/s}$ nach rechts, Auto B ($1500\,\text{kg}$) mit $10\,\text{m/s}$ nach links.

Falsch gerechnet: $p_{\text{ges}} = 1000\cdot 15 + 1500\cdot 10 = 30\,000\,\text{kg}\cdot\text{m/s}$.

Der Impuls ist ein Vektor. Mit rechts positiv hat B die Geschwindigkeit $-10\,\text{m/s}$. Richtig:
$p_{\text{ges}} = 15\,000 - 15\,000 = 0$. Kleben die Autos zusammen, bleiben sie also genau stehen.
:::

:::achtung[Fehler: Impulserhaltung trotz äußerer Kraft]
Ein Ball ($0{,}50\,\text{kg}$) wird losgelassen und fällt eine Sekunde lang.

Falsch gedacht: Der Impuls des Balls bleibt erhalten, also bleibt er null.

Die Gewichtskraft ist eine äußere Kraft. Nach einer Sekunde hat der Ball den Impuls
$m g t = 0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}0\,\text{s} = 4{,}9\,\text{kg}\cdot\text{m/s}$ nach unten. Erhalten
bleibt nur der Impuls des Systems Ball **und Erde**. Die Erde bewegt sich dabei unmessbar wenig nach oben.
:::

### Der Impuls als Vektor

Bewegen sich die Teile nicht auf einer Geraden, muss man die Impulse wie Vektoren addieren. Der Satz gilt dann
für jede Richtung getrennt, also für die x-Komponenten und für die y-Komponenten. Das Werkzeug dafür steht in
der Mathematiklektion [Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze).

```plot
x: [-7, 7]
y: [-5, 5]
gleich: true
vektoren:
  - { von: [0, 0], nach: [6, 0], label: "p₁ = 6 (Ost)", farbe: 0 }
  - { von: [0, 0], nach: [0, 4], label: "p₂ = 4 (Nord)", farbe: 1 }
  - { von: [0, 0], nach: [-6, -4], label: "p₃", farbe: 2 }
punkte:
  - { x: 0, y: 0, label: "Explosionsort" }
beschriftung: "Impulse der drei Bruchstücke nach der Explosion, Maßstab 1 kg·m/s pro Kästchen. Das erste Stück fliegt nach Osten (blau), das zweite nach Norden (orange). Das dritte (grün) muss beide genau ausgleichen, damit die Summe null bleibt. Es fliegt deshalb nach Südwesten."
```

:::beispiel[Ein ruhender Körper zerfällt in drei Teile]
Ein ruhender Feuerwerkskörper zerplatzt in drei Teile. Ein Teil ($2{,}0\,\text{kg}$) fliegt mit
$3{,}0\,\text{m/s}$ nach Osten, ein zweiter ($1{,}0\,\text{kg}$) mit $4{,}0\,\text{m/s}$ nach Norden. Das dritte
Teil hat $1{,}5\,\text{kg}$. Wie schnell fliegt es, und in welche Richtung?

**Schritt 1, Impulse:** Osten als x, Norden als y. $\vec p_1 = (6{,}0 \mid 0)$ und $\vec p_2 = (0 \mid 4{,}0)$, in $\text{kg}\cdot\text{m/s}$.

**Schritt 2, Erhaltung:** Vorher war der Impuls null. Also $\vec p_3 = -(\vec p_1 + \vec p_2) = (-6{,}0 \mid -4{,}0)$.

**Schritt 3, Betrag:** $|\vec p_3| = \sqrt{6{,}0^2 + 4{,}0^2} = 7{,}21\,\text{kg}\cdot\text{m/s}$, also
$v_3 = 7{,}21/1{,}5\,\text{m/s} = 4{,}81\,\text{m/s}$.

**Schritt 4, Richtung:** $\tan\varphi = 4{,}0/6{,}0$, also $\varphi = 33{,}7^\circ$ südlich der Westrichtung.
:::

:::merke[Impulserhaltung anwenden]
1. Prüfe, ob das System abgeschlossen ist: Ändert eine äußere Kraft in der betrachteten Richtung den Impuls?
2. Lege eine positive Richtung fest, bei zwei Dimensionen ein Koordinatensystem.
3. Schreib Gesamtimpuls vorher gleich Gesamtimpuls nachher, mit Vorzeichen.
4. Löse nach der gesuchten Geschwindigkeit auf und deute ihr Vorzeichen.
:::

```reflexion
frage: Wie kann eine Rakete im leeren Weltraum schneller werden, obwohl dort nichts ist, wogegen sie sich abstoßen könnte?
antwort: |
  Die Rakete stößt sich an ihrem eigenen Treibstoff ab. Sie schleudert Gas mit hoher Geschwindigkeit nach hinten.
  Rakete und Gas bilden ein abgeschlossenes System, dessen Gesamtimpuls gleich bleibt. Bekommt das Gas Impuls nach
  hinten, bekommt die Rakete gleich viel Impuls nach vorn. Luft braucht sie dafür nicht, im Gegenteil: Luft bremst nur.
```

### Aufgaben zu Impulserhaltung und Rückstoß

```aufgabe
id: p4-rueckstoss
titel: Rückstoß eines Gewehrs
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Gewehr ($4{,}0\,\text{kg}$) feuert ein Geschoss ($10\,\text{g}$) mit $400\,\text{m/s}$ ab. Mit welcher Geschwindigkeit stößt das Gewehr zurück (Betrag in m/s)?
teile:
  - typ: zahl
    loesung: "0.01*400/4"
    einheit: "m/s"
    anzeige: '1'
    fehler:
      - wert: "10*400/4"
        meldung: Du hast die Masse des Geschosses in Gramm eingesetzt. $10\,\text{g} = 0{,}010\,\text{kg}$.
      - wert: "4*400/0.01"
        meldung: Du hast die Massen vertauscht. Das schwere Gewehr muss langsamer sein als das leichte Geschoss.
hinweise:
  - Vorher ruht alles, der Gesamtimpuls ist null.
loesung: |
  **Ansatz:** Vorher ruht alles, $p = 0$. Nachher $m_G v_G + m_K v_K = 0$, also haben beide gleich große Impulse in Gegenrichtung.
  ---
  $|v_G| = \dfrac{m_K v_K}{m_G} = \dfrac{0{,}010\,\text{kg}\cdot 400\,\text{m/s}}{4{,}0\,\text{kg}} = 1{,}0\,\text{m/s}$, entgegen der Schussrichtung.
```

```aufgabe
id: p4-8-eislaeufer
titel: Mutter und Kind auf dem Eis
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Mutter ($60\,\text{kg}$) und ihr Kind ($30\,\text{kg}$) stehen auf Schlittschuhen still und stoßen sich voneinander ab. Das Kind gleitet mit $2{,}0\,\text{m/s}$ davon. Wie schnell gleitet die Mutter (Betrag in m/s)?
teile:
  - typ: zahl
    loesung: "30*2/60"
    einheit: "m/s"
    anzeige: '1'
    fehler:
      - wert: "2"
        meldung: Gleiche Kräfte bedeuten nicht gleiche Geschwindigkeiten. Gleich groß sind die **Impulse**. Die schwerere Mutter ist deshalb langsamer.
      - wert: "60*2/30"
        meldung: Du hast die Massen vertauscht. Die schwerere Person muss langsamer sein.
hinweise:
  - Vorher ist der Gesamtimpuls null. Nachher haben beide gleich große Impulse.
loesung: |
  **Ansatz:** Gesamtimpuls vorher null, also nachher $m_K v_K = m_M v_M$ (Beträge, Richtungen entgegengesetzt).
  ---
  $v_M = \dfrac{30\,\text{kg}\cdot 2{,}0\,\text{m/s}}{60\,\text{kg}} = 1{,}0\,\text{m/s}$, in die Gegenrichtung. Doppelte Masse, halbe Geschwindigkeit.
```

```aufgabe
id: p4-boot
titel: Sprung aus dem Boot
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine Person ($60\,\text{kg}$) springt mit $3{,}0\,\text{m/s}$ waagrecht aus einem ruhenden Ruderboot ($120\,\text{kg}$) ans Ufer. Mit welcher Geschwindigkeit bewegt sich das Boot (Betrag in m/s)? Den Wasserwiderstand vernachlässigen wir.
teile:
  - typ: zahl
    loesung: "60*3/120"
    einheit: "m/s"
    anzeige: '1{,}5'
    fehler:
      - wert: "60*3/180"
        meldung: Du hast durch die Gesamtmasse geteilt. Nach dem Sprung bewegt sich nur noch das Boot mit seiner eigenen Masse von $120\,\text{kg}$.
      - wert: "120*3/60"
        meldung: Du hast die Massen vertauscht. Das schwerere Boot muss langsamer sein als die Person.
hinweise:
  - Der Gesamtimpuls bleibt null.
  - Welche Masse hat der Körper, der nach dem Sprung zurückweicht?
gefuehrt:
  - text: Wie groß ist der Gesamtimpuls vor dem Sprung (in kg·m/s)?
    teil: { typ: zahl, loesung: "0" }
    erklaerung: Person und Boot ruhen, also ist der Gesamtimpuls null.
  - text: Welchen Impuls hat die Person nach dem Absprung (in kg·m/s, Richtung Ufer positiv)?
    teil: { typ: zahl, loesung: "60*3" }
    erklaerung: '$60\,\text{kg}\cdot 3{,}0\,\text{m/s} = 180\,\text{kg}\cdot\text{m/s}$.'
  - text: Welchen Impuls muss das Boot dann haben (mit Vorzeichen)?
    teil: { typ: zahl, loesung: "-180" }
    erklaerung: Die Summe muss null bleiben, also $-180\,\text{kg}\cdot\text{m/s}$, vom Ufer weg.
  - text: Wie schnell ist das Boot (Betrag in m/s)?
    teil: { typ: zahl, loesung: "180/120" }
    erklaerung: '$180/120\,\text{m/s} = 1{,}5\,\text{m/s}$.'
loesung: |
  **Ansatz:** Person und Boot bilden ein abgeschlossenes System (Wasserwiderstand vernachlässigt). Der Gesamtimpuls ist vorher null und bleibt null.
  ---
  **Bilanz:** Richtung Ufer positiv: $0 = 60\,\text{kg}\cdot 3{,}0\,\text{m/s} + 120\,\text{kg}\cdot v_B$.
  ---
  $v_B = -\dfrac{180\,\text{kg}\cdot\text{m/s}}{120\,\text{kg}} = -1{,}5\,\text{m/s}$. Das Boot weicht mit $1{,}5\,\text{m/s}$ vom Ufer zurück. Darum fällt man beim Aussteigen aus kleinen Booten leicht ins Wasser.
```

```aufgabe
id: p4-raketenschub
titel: Schubkraft einer Rakete
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Raketentriebwerk stößt pro Sekunde $250\,\text{kg}$ Gas mit $2{,}4\,\text{km/s}$ relativ zur Rakete aus.

  a) Welche Schubkraft erzeugt es (in kN)?

  b) Kann es eine Rakete mit $50\,\text{t}$ Startmasse senkrecht abheben lassen?
teile:
  - typ: zahl
    label: a) Schubkraft
    loesung: "250*2400/1000"
    einheit: "kN"
    anzeige: '600'
    fehler:
      - wert: "250*2.4/1000"
        meldung: Du hast die Geschwindigkeit in km/s eingesetzt. Für Newton brauchst du m/s, $2{,}4\,\text{km/s} = 2400\,\text{m/s}$.
      - wert: "250*9.81/1000"
        meldung: Das ist die Gewichtskraft des ausgestoßenen Gases. Die Schubkraft kommt vom Impuls, den das Gas mitnimmt, also $\mu\cdot w$.
  - typ: auswahl
    label: b) Abheben möglich?
    optionen:
      - "Ja, der Schub ist größer als die Gewichtskraft."
      - "Nein, der Schub ist kleiner als die Gewichtskraft."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Rechne die Gewichtskraft aus. $5{,}0\cdot 10^4\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 491\,\text{kN}$ ist kleiner als $600\,\text{kN}$.
hinweise:
  - 'Pro Sekunde erhält das Gas den Impuls $\mu w$; die Rakete den gleichen in Gegenrichtung.'
  - Vergleiche die Schubkraft mit der Gewichtskraft $m g$ der Rakete.
loesung: |
  **Ansatz:** Pro Sekunde bekommt das Gas den Impuls $\mu w$ nach hinten. Nach der Impulserhaltung bekommt die Rakete ebenso viel nach vorn. Impuls pro Zeit ist eine Kraft.
  ---
  **a)** $F = \mu w = 250\,\text{kg/s}\cdot 2400\,\text{m/s} = 6{,}0\cdot 10^5\,\text{N} = 600\,\text{kN}$.
  ---
  **b)** Gewichtskraft: $5{,}0\cdot 10^4\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 491\,\text{kN} < 600\,\text{kN}$. Die Rakete hebt ab, anfangs mit $a = (600 - 491)\,\text{kN}/50\,\text{t} = 2{,}2\,\text{m/s}^2$.
```

```aufgabe
id: p4-8-pucks
titel: Zwei Pucks im rechten Winkel
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Auf einem Lufttisch gleitet Puck A ($0{,}20\,\text{kg}$) mit $3{,}0\,\text{m/s}$ in x-Richtung, Puck B ($0{,}30\,\text{kg}$) mit $2{,}0\,\text{m/s}$ in y-Richtung. Sie stoßen zusammen und bleiben aneinander haften. Runde auf drei signifikante Stellen.

  a) Wie schnell bewegen sich die beiden danach (in m/s)?

  b) Unter welchem Winkel zur x-Richtung bewegen sie sich (in Grad)?
teile:
  - typ: zahl
    label: a) Geschwindigkeit
    loesung: "sqrt((0.2*3)^2 + (0.3*2)^2)/0.5"
    einheit: "m/s"
    anzeige: '1{,}70'
    fehler:
      - wert: "(0.2*3 + 0.3*2)/0.5"
        meldung: Du hast die Beträge der Impulse addiert, als zeigten sie in dieselbe Richtung. Sie stehen aber senkrecht aufeinander. Addiere sie als Vektoren mit dem Satz des Pythagoras.
  - typ: zahl
    label: b) Winkel
    loesung: "inGrad(atan2(0.3*2, 0.2*3))"
    einheit: "°"
    anzeige: '45'
    fehler:
      - wert: "inGrad(atan2(2, 3))"
        meldung: Du hast die Geschwindigkeiten statt der Impulse verwendet. Für die Richtung nach dem Stoß zählen die Impulskomponenten.
hinweise:
  - Der Impuls bleibt in x-Richtung und in y-Richtung getrennt erhalten.
  - 'Gesamtimpuls $\vec p = (0{,}60 \mid 0{,}60)\,\text{kg}\cdot\text{m/s}$. Danach $\vec v = \vec p/(m_A + m_B)$.'
loesung: |
  **Ansatz:** Ohne äußere Kräfte in der Tischebene bleibt der Impuls in x- und in y-Richtung getrennt erhalten.
  ---
  **Impulse:** $p_x = 0{,}20\,\text{kg}\cdot 3{,}0\,\text{m/s} = 0{,}60\,\text{kg}\cdot\text{m/s}$, $p_y = 0{,}30\,\text{kg}\cdot 2{,}0\,\text{m/s} = 0{,}60\,\text{kg}\cdot\text{m/s}$.
  ---
  **a)** $|\vec p| = \sqrt{0{,}60^2 + 0{,}60^2}\,\text{kg}\cdot\text{m/s} = 0{,}849\,\text{kg}\cdot\text{m/s}$, also $v = 0{,}849/0{,}50\,\text{m/s} = 1{,}70\,\text{m/s}$.
  ---
  **b)** $\tan\varphi = p_y/p_x = 1$, also $\varphi = 45^\circ$. Obwohl A schneller war, gleichen sich die Impulse genau aus.
```

```aufgabe
id: p4-8-boot-laufen
titel: Auf dem Boot nach vorn laufen
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Boot liegt ruhig auf einem See, ohne Wind und Strömung. Eine Person geht im Boot vom Heck zum Bug, also nach vorn. Was macht das Boot, solange sie geht?
teile:
  - typ: auswahl
    optionen:
      - "Es bleibt in Ruhe, weil die Person nur im Boot geht."
      - "Es bewegt sich nach vorn, weil die Person es mitzieht."
      - "Es bewegt sich nach hinten."
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Die Person stößt sich beim Gehen mit den Füßen am Boot nach hinten ab. Das Boot bekommt dabei einen Impuls nach hinten.
      - wert: 1
        meldung: Der Gesamtimpuls von Person und Boot ist null und bleibt null. Bewegt sich die Person nach vorn, muss sich das Boot nach hinten bewegen.
hinweise:
  - Person und Boot zusammen bilden ein abgeschlossenes System. Wie groß ist sein Gesamtimpuls?
  - Mit welcher Kraft stößt sich die Person beim Gehen ab, und auf welchen Körper wirkt die Gegenkraft?
loesung: |
  **Ansatz:** Person und Boot sind ein abgeschlossenes System mit dem Gesamtimpuls null.
  ---
  **Folgerung:** Hat die Person einen Impuls nach vorn, braucht das Boot einen gleich großen nach hinten. Es bewegt sich also langsam nach hinten.
  ---
  **Bleibt sie stehen,** stehen beide wieder still. Der gemeinsame Schwerpunkt von Person und Boot hat sich dabei nicht bewegt.
```

```aufgabe
id: p4-8-astronaut
titel: Ein Astronaut ohne Halteseil
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Ein Astronaut (mit Anzug $90\,\text{kg}$) schwebt ruhend $12\,\text{m}$ von seiner Raumstation entfernt. Sein Halteseil ist gerissen. Er hat einen Werkzeugkoffer ($3{,}0\,\text{kg}$) dabei.

  a) Mit welcher Geschwindigkeit bewegt er sich, wenn er den Koffer mit $6{,}0\,\text{m/s}$ von der Station weg wirft (in m/s)?

  b) Wie lange braucht er dann bis zur Station (in s)?

  c) In welche Richtung muss er werfen?
teile:
  - typ: zahl
    label: a) Geschwindigkeit
    loesung: "3*6/90"
    einheit: "m/s"
    anzeige: '0{,}2'
    fehler:
      - wert: "3*6/93"
        meldung: Du hast durch die Gesamtmasse geteilt. Nach dem Wurf bewegt sich der Astronaut ohne den Koffer, also mit $90\,\text{kg}$.
  - typ: zahl
    label: b) Zeit
    loesung: "12/(3*6/90)"
    einheit: "s"
    anzeige: '60'
  - typ: auswahl
    label: c) Wurfrichtung
    optionen:
      - "zur Station hin"
      - "von der Station weg"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Dann bekäme er einen Impuls von der Station weg. Der Rückstoß zeigt immer entgegen der Wurfrichtung.
hinweise:
  - Astronaut und Koffer ruhen zuerst. Der Gesamtimpuls ist null und bleibt null.
  - Nach dem Wurf bewegt er sich gleichförmig, denn im All bremst ihn nichts. Zeit gleich Weg durch Geschwindigkeit.
loesung: |
  **Modell:** Astronaut und Koffer bilden ein abgeschlossenes System. Im Weltraum wirken keine bremsenden Kräfte.
  ---
  **a)** $0 = 3{,}0\,\text{kg}\cdot 6{,}0\,\text{m/s} + 90\,\text{kg}\cdot v$, also $|v| = \dfrac{18\,\text{kg}\cdot\text{m/s}}{90\,\text{kg}} = 0{,}20\,\text{m/s}$.
  ---
  **b)** Gleichförmige Bewegung: $t = \dfrac{12\,\text{m}}{0{,}20\,\text{m/s}} = 60\,\text{s}$.
  ---
  **c)** Er muss **von der Station weg** werfen. Der Rückstoß treibt ihn dann zur Station hin. Das ist dasselbe Prinzip wie bei einer Rakete.
```

## Stöße: elastisch und unelastisch

```aufgabe
id: p4-9-check
art: check
titel: "Vorhersage: zwei Knetkugeln"
niveau: 1
angabe: |
  Eine Knetkugel fliegt mit $4{,}0\,\text{m/s}$ auf eine gleich schwere, ruhende Knetkugel und bleibt an ihr kleben. Wie schnell bewegen sich die beiden danach gemeinsam (in m/s)?
teile:
  - typ: zahl
    loesung: "4/2"
    einheit: "m/s"
    anzeige: '2'
    fehler:
      - wert: "4"
        meldung: Dann hätte das Paar den doppelten Impuls von vorher. Die doppelte Masse kann bei gleichem Impuls nur halb so schnell sein.
      - wert: "4/sqrt(2)"
        meldung: Das kommt heraus, wenn man mit Energieerhaltung rechnet. Beim Zusammenkleben bleibt aber nur der Impuls erhalten.
hinweise:
  - Der Impuls bleibt erhalten. Nachher bewegt sich die doppelte Masse.
loesung: |
  Impulserhaltung: $m\cdot 4{,}0\,\text{m/s} = 2m\cdot v'$.
  ---
  Die Masse kürzt sich: $v' = 2{,}0\,\text{m/s}$. Wiederholen: [Impulserhaltung und Rückstoß](/lernen/physik1/arbeit-energie-impuls/impulserhaltung-und-rueckstoss).
```

Bei einem **Stoß** wirken zwei Körper sehr kurz und mit großen Kräften aufeinander. Äußere Kräfte wie
Gewicht oder Rollreibung sind in dieser kurzen Zeit verglichen damit klein. Deshalb gilt bei jedem Stoß die
**Impulserhaltung**. Ob auch die kinetische Energie erhalten bleibt, hängt von der Art des Stoßes ab.

:::definition[Elastischer und unelastischer Stoß]
- **Vollkommen elastischer Stoß:** Impuls **und** kinetische Energie bleiben erhalten. Die Körper verformen
  sich nur kurz und federn vollständig zurück. Beispiele sind Billardkugeln, Stahlkugeln und Wagen mit Federpuffern.
- **Vollkommen unelastischer Stoß:** Die Körper bleiben aneinander haften und bewegen sich danach mit
  gemeinsamer Geschwindigkeit. Nur der Impuls bleibt erhalten. Ein Teil der kinetischen Energie wird zu
  Verformung und Wärme. Beispiele sind Knetkugeln, Auffahrunfälle mit verhakten Autos und ein Geschoss, das in Holz stecken bleibt.
- **Teilelastische Stöße:** Reale Stöße liegen meist dazwischen. Die Körper trennen sich, aber ein Teil der Energie geht verloren.
:::

Ein **Nicht-Beispiel** für einen elastischen Stoß ist ein Tennisball, der auf den Boden fällt und nur halb so
hoch zurückspringt. Er hat beim Aufprall Energie verloren. Für einen vollkommen unelastischen Stoß ist er
ebenfalls kein Beispiel, denn er bleibt nicht kleben.

### Der vollkommen unelastische Stoß

Nachher haben beide Körper dieselbe Geschwindigkeit $v'$. Aus der Impulserhaltung folgt
$$m_1 v_1 + m_2 v_2 = (m_1 + m_2)\,v', \qquad\text{also}\qquad v' = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}.$$
Dabei sind $m_1, m_2$ die Massen und $v_1, v_2$ die Geschwindigkeiten vorher, mit Vorzeichen für die Richtung.
Den Energieverlust berechnest du als Differenz der kinetischen Energien vorher und nachher.

:::beispiel[Güterwagen koppeln]
Ein Güterwagen ($20\,\text{t}$) rollt mit $1{,}5\,\text{m/s}$ auf einen ruhenden Güterwagen ($30\,\text{t}$)
und kuppelt ein. Wie schnell rollen beide weiter? Wie viel kinetische Energie geht verloren?

**Schritt 1, Impuls:** $20\,000\,\text{kg}\cdot 1{,}5\,\text{m/s} = 50\,000\,\text{kg}\cdot v'$, also $v' = 0{,}60\,\text{m/s}$.

**Schritt 2, Energie vorher und nachher:** Vorher $\tfrac12\cdot 20\,000\cdot 1{,}5^2\,\text{J} = 22{,}5\,\text{kJ}$, nachher
$\tfrac12\cdot 50\,000\cdot 0{,}60^2\,\text{J} = 9{,}0\,\text{kJ}$.

**Schritt 3, Verlust:** $22{,}5\,\text{kJ} - 9{,}0\,\text{kJ} = 13{,}5\,\text{kJ}$, also $60\,\%$. Diese Energie
steckt jetzt in verformten Puffern, Wärme und Schall.

**Muster:** Trifft ein Körper auf einen ruhenden, geht immer der Anteil $\dfrac{m_2}{m_1 + m_2}$ verloren. Hier ist
das $30/50 = 60\,\%$. Bei gleichen Massen ist es genau die Hälfte.
:::

:::achtung[Fehler: Energieerhaltung beim unelastischen Stoß]
Eine Knetkugel ($0{,}20\,\text{kg}$, $3{,}0\,\text{m/s}$) trifft eine ruhende Knetkugel ($0{,}10\,\text{kg}$) und bleibt kleben.

Falsch gerechnet: $\tfrac12\cdot 0{,}20\cdot 3{,}0^2 = \tfrac12\cdot 0{,}30\cdot v'^2$, also $v' = 2{,}45\,\text{m/s}$.

Beim Zusammenkleben geht Energie in Verformung. Gültig ist nur die Impulserhaltung:
$0{,}20\cdot 3{,}0 = 0{,}30\cdot v'$, also $v' = 2{,}0\,\text{m/s}$. Das ist der häufigste Fehler bei Stößen.
:::

:::achtung[Fehler: Vorzeichen bei Gegenverkehr vergessen]
Wagen A ($2{,}0\,\text{kg}$) fährt mit $3{,}0\,\text{m/s}$ nach rechts, Wagen B ($1{,}0\,\text{kg}$) mit
$4{,}0\,\text{m/s}$ nach links. Sie kleben zusammen.

Falsch gerechnet: $v' = \dfrac{2{,}0\cdot 3{,}0 + 1{,}0\cdot 4{,}0}{3{,}0}\,\text{m/s} = 3{,}33\,\text{m/s}$.

B fährt in die Gegenrichtung, also ist seine Geschwindigkeit $-4{,}0\,\text{m/s}$. Richtig:
$v' = \dfrac{6{,}0 - 4{,}0}{3{,}0}\,\text{m/s} = 0{,}67\,\text{m/s}$ nach rechts.
:::

```aufgabe
id: p4-9-check-verlust
art: check
titel: Wie viel Energie geht beim Zusammenkleben verloren?
niveau: 1
angabe: |
  Ein Wagen fährt auf einen gleich schweren, ruhenden Wagen auf und kuppelt ein. Welcher Anteil der kinetischen Energie geht dabei verloren (in %)?
teile:
  - typ: zahl
    loesung: "1/2*100"
    einheit: "%"
    anzeige: '50'
    fehler:
      - wert: "100"
        meldung: Die Wagen bewegen sich nachher noch mit halber Geschwindigkeit. Diese Bewegungsenergie bleibt erhalten.
      - wert: "75"
        meldung: Du hast nur berücksichtigt, dass die Geschwindigkeit halb so groß ist, und daraus ein Viertel der Energie gemacht. Danach bewegt sich aber die **doppelte** Masse. Das verdoppelt die verbleibende Energie wieder.
hinweise:
  - Nach dem Stoß bewegt sich die doppelte Masse mit der halben Geschwindigkeit.
loesung: |
  Nachher: $E' = \tfrac12\cdot 2m\cdot(v/2)^2 = \tfrac14 m v^2$. Vorher: $E = \tfrac12 m v^2$.
  ---
  Es bleibt also die Hälfte, die andere Hälfte, $50\,\%$, wird zu Verformung und Wärme. Das passt zum Muster $m_2/(m_1 + m_2) = 1/2$.
```

### Der vollkommen elastische, gerade Stoß

**Worum geht es?** Beim elastischen Stoß gibt es nach dem Stoß zwei unbekannte Geschwindigkeiten $v_1'$ und
$v_2'$. Dafür haben wir auch zwei Gleichungen: Impulserhaltung und Energieerhaltung. Wir lösen sie für den
häufigsten Fall, in dem Körper 2 vorher ruht und alles auf einer Geraden passiert.

**In Schritten:**

1. Impuls: $m_1 v_1 = m_1 v_1' + m_2 v_2'$. Umgestellt: $m_1(v_1 - v_1') = m_2 v_2'$.
2. Energie (mal $2$ genommen): $m_1 v_1^2 = m_1 v_1'^2 + m_2 v_2'^2$. Umgestellt und mit der dritten binomischen
   Formel: $m_1(v_1 - v_1')(v_1 + v_1') = m_2 v_2'^2$.
3. Wir teilen Gleichung 2 durch Gleichung 1. Fast alles kürzt sich, und es bleibt $v_1 + v_1' = v_2'$.
4. Das setzen wir in Gleichung 1 ein: $m_1(v_1 - v_1') = m_2(v_1 + v_1')$.
5. Wir multiplizieren aus: $m_1 v_1 - m_1 v_1' = m_2 v_1 + m_2 v_1'$. Alle Terme mit $v_1'$ bringen wir nach rechts,
   alle mit $v_1$ nach links: $(m_1 - m_2)\,v_1 = (m_1 + m_2)\,v_1'$. Teilen durch $m_1 + m_2$ liefert $v_1'$.
6. Für $v_2'$ setzen wir das in $v_2' = v_1 + v_1'$ ein:
   $v_2' = v_1 + \frac{m_1 - m_2}{m_1 + m_2}v_1 = \frac{(m_1 + m_2) + (m_1 - m_2)}{m_1 + m_2}v_1 = \frac{2m_1}{m_1 + m_2}v_1$.

Zusammen ergibt das die Formeln:

$$v_1' = \frac{m_1 - m_2}{m_1 + m_2}\,v_1, \qquad v_2' = \frac{2m_1}{m_1 + m_2}\,v_1.$$

Dabei ist $v_1$ die Geschwindigkeit des stoßenden Körpers vorher. Positive Werte bedeuten „weiter in die
ursprüngliche Richtung“, negative „zurück“.

**In Worten zurückübersetzt:** Schritt 3 hat eine schöne Bedeutung. Die beiden Körper entfernen sich nach dem
Stoß genauso schnell voneinander, wie sie sich vorher genähert haben.

Drei Sonderfälle solltest du kennen:

1. **Gleiche Massen:** $v_1' = 0$ und $v_2' = v_1$. Die Körper tauschen ihre Geschwindigkeiten. Beim Billard
   bleibt die stoßende Kugel liegen. Bei der Newton-Wiege fliegt am anderen Ende genau eine Kugel weg.
2. **Sehr schwerer gestoßener Körper** ($m_2 \gg m_1$, gelesen „$m_2$ viel größer als $m_1$“, Ball gegen Wand): $v_1' \approx -v_1$. Der Ball prallt mit
   gleichem Tempo zurück, die Wand bleibt praktisch in Ruhe.
3. **Sehr leichter gestoßener Körper** ($m_2 \ll m_1$, gelesen „$m_2$ viel kleiner als $m_1$“, Lkw gegen Tischtennisball): $v_1' \approx v_1$ und
   $v_2' \approx 2v_1$. Der Ball fliegt doppelt so schnell davon, wie der Lkw fährt.

:::beispiel[Leichte Kugel trifft schwere Kugel]
Eine Kugel ($0{,}10\,\text{kg}$) trifft mit $4{,}0\,\text{m/s}$ elastisch und zentral auf eine ruhende Kugel
($0{,}30\,\text{kg}$). Wie schnell sind beide danach?

**Schritt 1, Formeln:** $v_1' = \dfrac{0{,}10 - 0{,}30}{0{,}40}\cdot 4{,}0\,\text{m/s} = -2{,}0\,\text{m/s}$ und
$v_2' = \dfrac{2\cdot 0{,}10}{0{,}40}\cdot 4{,}0\,\text{m/s} = 2{,}0\,\text{m/s}$.

**Schritt 2, Impulsprobe:** vorher $0{,}40\,\text{kg}\cdot\text{m/s}$, nachher $0{,}10\cdot(-2{,}0) + 0{,}30\cdot 2{,}0 = 0{,}40\,\text{kg}\cdot\text{m/s}$. ✓

**Schritt 3, Energieprobe:** vorher $\tfrac12\cdot 0{,}10\cdot 16\,\text{J} = 0{,}80\,\text{J}$, nachher
$0{,}20\,\text{J} + 0{,}60\,\text{J} = 0{,}80\,\text{J}$. ✓

**Deutung:** Die leichte Kugel prallt zurück, weil die schwere sie stärker bremst, als nötig wäre, um sie anzuhalten.
:::

### Der schiefe Stoß gleich schwerer Kugeln (qualitativ)

Trifft eine Billardkugel eine gleich schwere ruhende Kugel nicht genau mittig, fliegen beide schräg
auseinander. Hier hilft der Impuls als Vektor. Nach der Impulserhaltung gilt $\vec v_1 = \vec v_1\,' + \vec v_2\,'$:
Die beiden neuen Geschwindigkeiten ergeben zusammen die alte. Nach der Energieerhaltung gilt
$v_1^2 = v_1'^2 + v_2'^2$. Das ist der Satz des Pythagoras. Also stehen die beiden neuen Geschwindigkeiten
**senkrecht** aufeinander. Billardspieler kennen diese 90-Grad-Regel.

```plot
x: [-3.5, 3.5]
y: [-2, 2]
gleich: true
vektoren:
  - { von: [-3, 0], nach: [0, 0], label: "v₁ = 2,0 m/s", farbe: 0 }
  - { von: [0, 0], nach: [0.75, 1.30], label: "v₁′ = 1,0 m/s", farbe: 1 }
  - { von: [0, 0], nach: [2.25, -1.30], label: "v₂′ = 1,7 m/s", farbe: 2 }
strecken:
  - { von: [0.75, 1.30], nach: [3, 0], gestrichelt: true }
  - { von: [2.25, -1.30], nach: [3, 0], gestrichelt: true }
beschriftung: "Schiefer elastischer Stoß zweier gleich schwerer Kugeln. Die stoßende Kugel kommt mit 2,0 m/s von links (blau). Danach fliegt sie unter 60° nach oben (orange), die gestoßene unter 30° nach unten (grün). Die beiden neuen Pfeile stehen senkrecht aufeinander und ergeben zusammen (gestrichelt) wieder den alten Pfeil."
```

:::beispiel[Probe der 90-Grad-Regel]
Im Bild fliegt die stoßende Kugel mit $1{,}0\,\text{m/s}$ unter $60^\circ$ weiter, die gestoßene mit
$1{,}73\,\text{m/s}$ unter $-30^\circ$.

**Schritt 1, x-Impuls (pro kg):** $1{,}0\cdot\cos 60^\circ + 1{,}73\cdot\cos 30^\circ = 0{,}50 + 1{,}50 = 2{,}0\,\text{m/s}$. Das ist $v_1$. ✓

**Schritt 2, y-Impuls (pro kg):** $1{,}0\cdot\sin 60^\circ - 1{,}73\cdot\sin 30^\circ = 0{,}866 - 0{,}866 = 0$. ✓

**Schritt 3, Energie:** $1{,}0^2 + 1{,}73^2 = 1{,}0 + 3{,}0 = 4{,}0 = 2{,}0^2$. ✓ Der Winkel zwischen den Bahnen
ist $60^\circ + 30^\circ = 90^\circ$.
:::

:::merke[Stoßaufgaben lösen]
1. Impulserhaltung gilt bei jedem Stoß. Schreib sie mit Vorzeichen auf.
2. Kleben die Körper zusammen: eine gemeinsame Geschwindigkeit, keine Energieerhaltung.
3. Ist der Stoß elastisch: zusätzlich Energieerhaltung, bei ruhendem Ziel die Formeln für $v_1'$ und $v_2'$.
4. Prüfe am Ende Impuls und, beim elastischen Stoß, auch die Energie.
:::

```reflexion
frage: Beim vollkommen unelastischen Stoß geht kinetische Energie verloren. Warum geht aber nicht die ganze kinetische Energie verloren, wenn ein Wagen auf einen ruhenden Wagen auffährt?
antwort: |
  Der Impuls muss erhalten bleiben. Vorher hat der fahrende Wagen einen Impuls ungleich null, also muss das
  Paar nachher denselben Impuls haben. Dann kann es nicht stillstehen, es bewegt sich mit $v' = m_1 v_1/(m_1 + m_2)$
  weiter. Diese Bewegung hat kinetische Energie, die nicht verloren gehen kann. Nur wenn der Gesamtimpuls null
  ist, etwa bei zwei gleichen Kugeln, die gleich schnell aufeinander zufliegen, kann die ganze Energie in Verformung gehen.
```

### Aufgaben zu Stößen

```aufgabe
id: p4-elastisch-gleich
titel: Billard
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Billardkugel trifft zentral und elastisch auf eine gleich schwere, ruhende Kugel. Was passiert?
teile:
  - typ: auswahl
    optionen:
      - "Beide Kugeln bewegen sich mit halber Geschwindigkeit weiter."
      - "Die stoßende Kugel bleibt liegen, die gestoßene übernimmt die volle Geschwindigkeit."
      - "Die stoßende Kugel prallt mit gleicher Geschwindigkeit zurück."
      - "Beide Kugeln bleiben liegen."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das wäre der unelastische Stoß. Der Impuls stimmt dann zwar, aber die Hälfte der Energie wäre verloren. Beim elastischen Stoß bleibt die Energie erhalten.
      - wert: 2
        meldung: So verhält sich ein Ball an einer sehr schweren Wand. Die gestoßene Kugel ist aber gleich schwer und setzt sich in Bewegung.
      - wert: 3
        meldung: Dann wären Impuls und Energie danach null. Beides war vorher aber vorhanden.
hinweise:
  - 'Setze $m_1 = m_2$ in die Formeln $v_1\,'' = \frac{m_1 - m_2}{m_1 + m_2}v_1$ und $v_2\,'' = \frac{2m_1}{m_1 + m_2}v_1$ ein.'
loesung: |
  Mit $m_1 = m_2$ wird $v_1' = 0$ und $v_2' = v_1$. Die Kugeln tauschen ihre Geschwindigkeiten.
  ---
  „Halbe Geschwindigkeit für beide“ wäre der unelastische Stoß: Impuls erhalten, aber die Hälfte der Energie verloren.
```

```aufgabe
id: p4-9-knet
titel: Knetkugeln mit verschiedenen Massen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Eine Knetkugel ($0{,}30\,\text{kg}$) fliegt mit $4{,}0\,\text{m/s}$ auf eine ruhende Knetkugel ($0{,}20\,\text{kg}$) und bleibt kleben. Wie schnell bewegen sich beide danach (in m/s)?
teile:
  - typ: zahl
    loesung: "0.3*4/(0.3+0.2)"
    einheit: "m/s"
    anzeige: '2{,}4'
    fehler:
      - wert: "4/2"
        meldung: Halbieren gilt nur bei gleichen Massen. Hier musst du den Impuls durch die Gesamtmasse $0{,}50\,\text{kg}$ teilen.
      - wert: "0.3*4/0.2"
        meldung: Nach dem Zusammenkleben bewegen sich **beide** Kugeln. Teile durch die Gesamtmasse.
hinweise:
  - 'Vollkommen unelastisch: $m_1 v_1 = (m_1 + m_2)v''$.'
loesung: |
  **Ansatz:** Die Kugeln kleben zusammen, also gilt nur die Impulserhaltung mit einer gemeinsamen Geschwindigkeit.
  ---
  $0{,}30\,\text{kg}\cdot 4{,}0\,\text{m/s} = 0{,}50\,\text{kg}\cdot v'$, also $v' = \dfrac{1{,}2\,\text{kg}\cdot\text{m/s}}{0{,}50\,\text{kg}} = 2{,}4\,\text{m/s}$.
```

```aufgabe
id: p4-unelastisch
titel: Auffahrunfall
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Auto ($1000\,\text{kg}$, $20\,\text{m/s}$) fährt auf ein stehendes Auto ($1500\,\text{kg}$) auf. Beide verhaken sich.

  a) Mit welcher Geschwindigkeit bewegen sie sich unmittelbar nach dem Stoß (in m/s)?

  b) Wie viel kinetische Energie wird in Verformung und Wärme umgewandelt (in J)?
teile:
  - typ: zahl
    label: a)
    loesung: "1000*20/2500"
    einheit: "m/s"
    anzeige: '8'
    fehler:
      - wert: "1000*20/1500"
        meldung: Nach dem Verhaken bewegen sich **beide** Autos gemeinsam. Teile durch die Gesamtmasse $2500\,\text{kg}$.
      - wert: "20*sqrt(1000/2500)"
        meldung: Das kommt mit Energieerhaltung heraus. Beim Verhaken geht aber Energie verloren, nur der Impuls bleibt erhalten.
  - typ: zahl
    label: b)
    loesung: "0.5*1000*20^2 - 0.5*2500*8^2"
    einheit: "J"
    anzeige: '120000'
    fehler:
      - wert: "0.5*1000*20^2"
        meldung: Das ist die ganze kinetische Energie vorher. Nach dem Stoß bewegen sich die Autos aber noch, ihre Energie geht nicht verloren.
hinweise:
  - Vollkommen unelastisch heißt gemeinsame Geschwindigkeit nach dem Stoß.
  - Der Energieverlust ist kinetische Energie vorher minus kinetische Energie nachher.
gefuehrt:
  - text: Wie groß ist der Gesamtimpuls vor dem Stoß (in kg·m/s)?
    teil: { typ: zahl, loesung: "1000*20" }
    erklaerung: 'Nur das erste Auto bewegt sich: $1000\,\text{kg}\cdot 20\,\text{m/s} = 20\,000\,\text{kg}\cdot\text{m/s}$.'
  - text: Wie schnell sind beide gemeinsam nach dem Stoß (in m/s)?
    teil: { typ: zahl, loesung: "20000/2500" }
    erklaerung: '$v'' = 20\,000/2500\,\text{m/s} = 8{,}0\,\text{m/s}$.'
  - text: Wie groß ist die kinetische Energie vorher (in J)?
    teil: { typ: zahl, loesung: "0.5*1000*400" }
    erklaerung: '$\tfrac12\cdot 1000\,\text{kg}\cdot(20\,\text{m/s})^2 = 200\,000\,\text{J}$.'
  - text: Wie groß ist die kinetische Energie nachher (in J)?
    teil: { typ: zahl, loesung: "0.5*2500*64" }
    erklaerung: '$\tfrac12\cdot 2500\,\text{kg}\cdot(8{,}0\,\text{m/s})^2 = 80\,000\,\text{J}$. Verloren sind also $120\,000\,\text{J}$.'
loesung: |
  **Ansatz:** Vollkommen unelastischer Stoß: nur Impulserhaltung, gemeinsame Geschwindigkeit danach.
  ---
  **a)** $1000\,\text{kg}\cdot 20\,\text{m/s} = 2500\,\text{kg}\cdot v'$, also $v' = 8{,}0\,\text{m/s}$.
  ---
  **b)** Vorher $\tfrac12\cdot 1000\,\text{kg}\cdot(20\,\text{m/s})^2 = 200\,\text{kJ}$, nachher $\tfrac12\cdot 2500\,\text{kg}\cdot(8{,}0\,\text{m/s})^2 = 80\,\text{kJ}$. Umgewandelt: $120\,\text{kJ}$.
  ---
  **Probe mit dem Muster:** Verlustanteil $m_2/(m_1 + m_2) = 1500/2500 = 60\,\%$, und $0{,}60\cdot 200\,\text{kJ} = 120\,\text{kJ}$. ✓
```

```aufgabe
id: p4-9-teilelastisch
titel: Welcher Stoß war das?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Auf einer Luftkissenbahn fährt Wagen A ($1{,}0\,\text{kg}$) mit $2{,}0\,\text{m/s}$ auf den ruhenden, gleich schweren Wagen B. Nach dem Stoß misst man für A $0{,}40\,\text{m/s}$ und für B $1{,}6\,\text{m/s}$, beide in die ursprüngliche Richtung.

  a) Welcher Anteil der kinetischen Energie ist beim Stoß verloren gegangen (in %)?

  b) Was für ein Stoß war das?
teile:
  - typ: zahl
    label: a) Energieverlust
    loesung: "(0.5*1*2^2 - 0.5*1*0.4^2 - 0.5*1*1.6^2)/(0.5*1*2^2)*100"
    einheit: "%"
    anzeige: '32'
    fehler:
      - wert: "0"
        meldung: Der Impuls stimmt zwar ($2{,}0 = 0{,}4 + 1{,}6$). Die Energie musst du aber getrennt prüfen. Rechne $\tfrac12 m v^2$ vorher und nachher aus.
  - typ: auswahl
    label: b) Art des Stoßes
    optionen:
      - "vollkommen elastisch"
      - "teilelastisch"
      - "vollkommen unelastisch"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Beim elastischen Stoß gleich schwerer Wagen würde A liegen bleiben und B mit $2{,}0\,\text{m/s}$ weiterfahren. Außerdem fehlt hier Energie.
      - wert: 2
        meldung: Vollkommen unelastisch hieße gleiche Geschwindigkeit danach. Die Wagen haben sich aber getrennt.
hinweise:
  - Prüfe zuerst den Impuls, dann die Energie.
  - Elastisch heißt Energie erhalten, unelastisch heißt gemeinsame Geschwindigkeit.
loesung: |
  **Impuls:** vorher $1{,}0\cdot 2{,}0 = 2{,}0\,\text{kg}\cdot\text{m/s}$, nachher $1{,}0\cdot 0{,}40 + 1{,}0\cdot 1{,}6 = 2{,}0\,\text{kg}\cdot\text{m/s}$. Der Impuls ist erhalten, wie bei jedem Stoß. ✓
  ---
  **Energie:** vorher $\tfrac12\cdot 1{,}0\cdot 2{,}0^2\,\text{J} = 2{,}0\,\text{J}$, nachher $0{,}08\,\text{J} + 1{,}28\,\text{J} = 1{,}36\,\text{J}$. Verlust $0{,}64\,\text{J}$, also $32\,\%$.
  ---
  **b)** Energie ging verloren, aber die Wagen trennten sich. Der Stoß war also teilelastisch.
```

```aufgabe
id: p4-9-lkw-ball
titel: Lkw trifft Tischtennisball
niveau: 2
lernziel: 6
kompetenz: verstehen
angabe: |
  Ein Lkw fährt mit $20\,\text{m/s}$ und trifft mit seiner flachen Front zentral einen ruhenden Tischtennisball. Der Stoß ist elastisch. Mit welcher Geschwindigkeit fliegt der Ball ungefähr davon (in m/s)?
teile:
  - typ: zahl
    loesung: "2*20"
    einheit: "m/s"
    anzeige: '40'
    fehler:
      - wert: "20"
        meldung: Das wäre der unelastische Fall, wenn der Ball kleben bliebe. Beim elastischen Stoß entfernen sich die Körper danach so schnell, wie sie sich genähert haben.
hinweise:
  - Der Lkw ist viel schwerer als der Ball. Setze in $v_2' = \frac{2m_1}{m_1 + m_2}v_1$ den Grenzfall ein, dass $m_2$ viel kleiner ist als $m_1$.
  - 'Anders gedacht: Der Lkw behält fast seine $20\,\text{m/s}$. Der Ball muss sich danach mit $20\,\text{m/s}$ relativ zum Lkw entfernen.'
loesung: |
  **Ansatz:** Elastischer Stoß auf ruhendes Ziel, $v_2' = \dfrac{2m_1}{m_1 + m_2}v_1$.
  ---
  **Grenzfall:** Ist $m_2$ viel kleiner als $m_1$ (kurz $m_2 \ll m_1$), dann ist $m_1 + m_2 \approx m_1$ und damit $v_2' \approx 2v_1 = 40\,\text{m/s}$.
  ---
  **Deutung:** Der Lkw fährt praktisch unverändert mit $20\,\text{m/s}$ weiter. Der Ball entfernt sich von ihm mit $20\,\text{m/s}$ und ist damit insgesamt $40\,\text{m/s}$ schnell.
```

```aufgabe
id: p4-elastisch
titel: Elastischer Stoß ungleicher Massen
niveau: 3
lernziel: 6
kompetenz: rechnen
angabe: |
  Ein Wagen ($3{,}0\,\text{kg}$, $2{,}0\,\text{m/s}$) stößt elastisch und zentral auf einen ruhenden Wagen ($1{,}0\,\text{kg}$). Berechne die Geschwindigkeiten nach dem Stoß (ursprüngliche Richtung positiv, in m/s) und prüfe Impuls- und Energieerhaltung.
teile:
  - typ: zahl
    label: Wagen 1 nachher
    loesung: "(3-1)/(3+1)*2"
    einheit: "m/s"
    anzeige: '1'
    fehler:
      - wert: "0"
        meldung: Liegen bleibt der stoßende Wagen nur bei gleichen Massen. Hier ist er schwerer und fährt langsamer weiter.
  - typ: zahl
    label: Wagen 2 nachher
    loesung: "2*3/(3+1)*2"
    einheit: "m/s"
    anzeige: '3'
    fehler:
      - wert: "2"
        meldung: Der leichtere Wagen übernimmt nicht einfach die Geschwindigkeit. Er wird schneller, als der schwere ankam.
      - wert: "3*2/4"
        meldung: Das wäre die gemeinsame Geschwindigkeit beim unelastischen Stoß. Beim elastischen Stoß trennen sich die Wagen.
hinweise:
  - 'Formeln für den elastischen Stoß auf einen ruhenden Körper verwenden.'
  - 'Probe: Impuls $m_1 v_1 = m_1 v_1'' + m_2 v_2''$ und Energie $\tfrac12 m_1 v_1^2 = \tfrac12 m_1 v_1''^2 + \tfrac12 m_2 v_2''^2$.'
loesung: |
  **Ansatz:** Elastisch, Ziel ruht: $v_1' = \dfrac{m_1 - m_2}{m_1 + m_2}v_1$ und $v_2' = \dfrac{2m_1}{m_1 + m_2}v_1$.
  ---
  **Einsetzen:** $v_1' = \dfrac{3{,}0 - 1{,}0}{4{,}0}\cdot 2{,}0\,\text{m/s} = 1{,}0\,\text{m/s}$; $v_2' = \dfrac{2\cdot 3{,}0}{4{,}0}\cdot 2{,}0\,\text{m/s} = 3{,}0\,\text{m/s}$.
  ---
  **Impulsprobe:** vorher $3{,}0\cdot 2{,}0 = 6{,}0\,\text{kg}\cdot\text{m/s}$, nachher $3{,}0\cdot 1{,}0 + 1{,}0\cdot 3{,}0 = 6{,}0\,\text{kg}\cdot\text{m/s}$. ✓
  ---
  **Energieprobe:** vorher $\tfrac12\cdot 3{,}0\cdot 4{,}0\,\text{J} = 6{,}0\,\text{J}$, nachher $1{,}5\,\text{J} + 4{,}5\,\text{J} = 6{,}0\,\text{J}$. ✓ Auch die Regel „Entfernen so schnell wie Nähern“ stimmt: $3{,}0 - 1{,}0 = 2{,}0\,\text{m/s}$.
```

```aufgabe
id: p4-9-schief
titel: Ein schiefer Billardstoß
niveau: 3
lernziel: 6
kompetenz: anwenden
angabe: |
  Eine Billardkugel rollt mit $2{,}0\,\text{m/s}$ und trifft eine gleich schwere ruhende Kugel schräg. Der Stoß ist elastisch. Danach rollt die stoßende Kugel mit $1{,}2\,\text{m/s}$ weiter.

  a) Welchen Winkel schließen die beiden Bahnen nach dem Stoß ein?

  b) Wie schnell rollt die gestoßene Kugel (in m/s)?
teile:
  - typ: auswahl
    label: a) Winkel
    optionen:
      - "$0^\\circ$, beide rollen in dieselbe Richtung"
      - "$45^\\circ$"
      - "$90^\\circ$"
      - "$180^\\circ$, sie rollen entgegengesetzt"
    richtig: [2]
    fehler:
      - wert: 1
        meldung: Der Winkel hängt nicht von der Treffstelle ab. Aus Impuls- und Energieerhaltung folgt bei gleichen Massen immer ein rechter Winkel.
      - wert: 0
        meldung: Das gilt nur für den geraden Stoß, und dann bleibt die stoßende Kugel liegen. Hier rollt sie aber mit $1{,}2\,\text{m/s}$ weiter.
  - typ: zahl
    label: b) gestoßene Kugel
    loesung: "sqrt(2^2 - 1.2^2)"
    einheit: "m/s"
    anzeige: '1{,}6'
    fehler:
      - wert: "2 - 1.2"
        meldung: Geschwindigkeiten in verschiedene Richtungen darf man nicht einfach abziehen. Es gilt $v_1^2 = v_1'^2 + v_2'^2$.
hinweise:
  - 'Bei gleichen Massen sagt die Energieerhaltung $v_1^2 = v_1''^2 + v_2''^2$. Das ist der Satz des Pythagoras.'
  - 'Die Impulserhaltung sagt $\vec v_1 = \vec v_1\,'' + \vec v_2\,''$. Welches Dreieck bilden die drei Pfeile?'
loesung: |
  **Ansatz:** Gleiche Massen kürzen sich. Impuls: $\vec v_1 = \vec v_1\,' + \vec v_2\,'$. Energie: $v_1^2 = v_1'^2 + v_2'^2$.
  ---
  **a)** Die drei Pfeile bilden ein Dreieck, für dessen Seiten der Satz des Pythagoras gilt. Also stehen $\vec v_1\,'$ und $\vec v_2\,'$ senkrecht aufeinander, der Winkel ist $90^\circ$.
  ---
  **b)** $v_2' = \sqrt{(2{,}0\,\text{m/s})^2 - (1{,}2\,\text{m/s})^2} = \sqrt{2{,}56}\,\text{m/s} = 1{,}6\,\text{m/s}$.
  ---
  **Probe Energie:** $1{,}2^2 + 1{,}6^2 = 1{,}44 + 2{,}56 = 4{,}0 = 2{,}0^2$. ✓
```

## Energie oder Impuls: welcher Erhaltungssatz wann gilt

```aufgabe
id: p4-10-check
art: check
titel: "Vorhersage: ein Geschoss im Holzklotz"
niveau: 1
angabe: |
  Ein Geschoss fliegt in einen hängenden Holzklotz und bleibt darin stecken. Was bleibt **während des Einschlags** erhalten?
teile:
  - typ: auswahl
    optionen:
      - "nur die kinetische Energie"
      - "nur der Impuls"
      - "Impuls und kinetische Energie"
      - "keines von beiden"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Das Geschoss verformt das Holz und erwärmt es. Dabei geht fast die ganze kinetische Energie verloren.
      - wert: 2
        meldung: Das gilt nur beim elastischen Stoß. Ein steckenbleibendes Geschoss ist ein vollkommen unelastischer Stoß.
      - wert: 3
        meldung: Während des kurzen Einschlags wirkt keine nennenswerte äußere Kraft in Flugrichtung. Der Impuls bleibt also erhalten.
hinweise:
  - Bleiben die Körper aneinander haften, ist der Stoß vollkommen unelastisch.
loesung: |
  Der Einschlag ist ein vollkommen unelastischer Stoß. Der Impuls bleibt erhalten, die kinetische Energie nicht.
  ---
  Wie man damit die Geschwindigkeit des Geschosses bestimmt, zeigt diese Lektion. Wiederholen: [Stöße: elastisch und unelastisch](/lernen/physik1/arbeit-energie-impuls/stoesse-elastisch-und-unelastisch).
```

Die beiden Erhaltungssätze dieses Kapitels sehen ähnlich aus, gelten aber unter verschiedenen Bedingungen.
Die häufigste Fehlerquelle in Prüfungen ist, den falschen zu nehmen. Diese Lektion zeigt, wie du sicher entscheidest.

### Zwei Konten mit verschiedenen Regeln

**Worum geht es?** Wir führen für jeden Vorgang zwei Konten: eines für den Impuls und eines für die
Energie. Jedes Konto hat seine eigene Regel, wann es sich ändern darf.

**Bild:**

- **Impulskonto:** Es enthält einen Vektor. Nur eine **äußere** Kraft kann es ändern. Kräfte zwischen den
  Körpern des Systems verschieben Impuls nur von einem Körper zum anderen. Dazu gehören Reibung, Verformung,
  Explosion und Kleben.
- **Konto der mechanischen Energie:** Es enthält eine Zahl ohne Richtung. Es bleibt nur gleich, wenn keine
  Reibung, keine bleibende Verformung und keine chemische Energie im Spiel ist. Sonst fließt Energie in die
  innere Energie ab oder kommt aus ihr dazu.
- **Konto der Gesamtenergie:** Es bleibt in einem abgeschlossenen System immer gleich. Zum Rechnen hilft es
  aber nur, wenn man die Wärme kennt.

**In Schritten: die zwei Prüffragen.**

1. **Wirkt in der betrachteten Richtung eine äußere Kraft, und zwar lange genug, um zu zählen?** Wenn nein,
   bleibt der Impuls erhalten. Bei kurzen Stößen kann man Gewicht und Rollreibung fast immer vernachlässigen.
2. **Wird mechanische Energie in andere Formen umgewandelt?** Das passiert durch Reibung, Kleben, bleibende
   Verformung oder Muskeln und Explosionen. Wenn nein, bleibt die mechanische Energie erhalten.

**Zusammengefasst:** Beim elastischen Stoß bleiben beide erhalten. Beim unelastischen Stoß und bei Explosionen
nur der Impuls. Beim reibungsfreien Fall oder Pendel nur die mechanische Energie, denn die Gewichtskraft ist
eine äußere Kraft und ändert den Impuls.

**Typisches Missverständnis:** „Energie ist das Wichtigere, also gilt sie immer.“ Die **Gesamtenergie** bleibt
zwar immer erhalten. Zum Rechnen brauchst du aber die **mechanische** Energie, und die geht bei Stößen oft verloren.

```aufgabe
id: p4-10-check-pendel
art: check
titel: Bleibt beim Pendel der Impuls erhalten?
niveau: 1
angabe: |
  Ein Fadenpendel schwingt ohne Reibung hin und her. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - "Impuls und mechanische Energie bleiben erhalten."
      - "Die mechanische Energie bleibt erhalten, der Impuls nicht."
      - "Der Impuls bleibt erhalten, die mechanische Energie nicht."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Am Umkehrpunkt ruht der Pendelkörper, im tiefsten Punkt ist er schnell. Sein Impuls ändert sich also ständig, weil Gewichtskraft und Fadenkraft von außen wirken.
      - wert: 2
        meldung: Ohne Reibung verrichtet nur die Gewichtskraft Arbeit, die Fadenkraft nicht. Die mechanische Energie bleibt deshalb erhalten.
hinweise:
  - Prüffrage 1 betrifft äußere Kräfte, Prüffrage 2 die Umwandlung in andere Energieformen.
loesung: |
  Gewichtskraft und Fadenkraft sind äußere Kräfte. Sie ändern ständig Betrag und Richtung des Impulses.
  ---
  Ohne Reibung wird aber keine mechanische Energie in Wärme umgewandelt. Die mechanische Energie bleibt erhalten, der Impuls nicht.
```

### Mehrphasige Vorgänge: Phasen trennen

Viele Prüfungsaufgaben bestehen aus mehreren Abschnitten, in denen verschiedene Sätze gelten. Das Rezept:
Zerlege den Vorgang in **Phasen**, entscheide für jede Phase, welcher Satz gilt, und gib das Ergebnis einer
Phase als Startwert an die nächste weiter. Das klassische Beispiel ist das **ballistische Pendel**: Ein Geschoss
fliegt in einen hängenden Klotz, der danach hochschwingt. Aus der Steighöhe bestimmt man das Tempo des Geschosses.

```plot
x: [-3.5, 3]
y: [-4, 0.5]
gleich: true
strecken:
  - { von: [0, 0], nach: [0, -3] }
  - { von: [0, 0], nach: [1.0, -2.83], gestrichelt: true }
  - { von: [-0.6, 0], nach: [0.6, 0] }
  - { von: [1.0, -2.83], nach: [2.5, -2.83], gestrichelt: true }
  - { von: [0, -3], nach: [2.5, -3], gestrichelt: true }
vektoren:
  - { von: [-3, -3], nach: [-1.2, -3], label: "Geschoss v", farbe: 1 }
punkte:
  - { x: 0, y: -3, label: "Klotz" }
  - { x: 1.0, y: -2.83, label: "nach dem Hochschwingen" }
  - { x: 2.5, y: -2.9, label: "h" }
beschriftung: "Ballistisches Pendel. Phase 1: Das Geschoss (orange) schlägt in den ruhenden Klotz ein und bleibt stecken. Hier gilt nur die Impulserhaltung. Phase 2: Klotz und Geschoss schwingen gemeinsam hoch (gestrichelt) und steigen um die Höhe h. Hier gilt die Energieerhaltung, weil der Faden keine Arbeit verrichtet."
```

:::beispiel[Das ballistische Pendel]
Ein Geschoss ($8{,}0\,\text{g}$) fliegt waagrecht in einen ruhenden Holzklotz ($1{,}50\,\text{kg}$) an Schnüren
und bleibt stecken. Der Klotz schwingt danach $6{,}0\,\text{cm}$ hoch. Wie schnell war das Geschoss?

**Phasen benennen:** Phase 1 ist der Einschlag (unelastischer Stoß, nur Impuls). Phase 2 ist das Hochschwingen
(nur die Gewichtskraft verrichtet Arbeit, also Energieerhaltung). Wir rechnen rückwärts, von Phase 2 zu Phase 1.

**Phase 2:** $\tfrac12 (m + M) v'^2 = (m + M) g h$, also
$v' = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}060\,\text{m}} = 1{,}085\,\text{m/s}$.

**Phase 1:** $m v = (m + M) v'$, also $v = \dfrac{1{,}508\,\text{kg}}{0{,}0080\,\text{kg}}\cdot 1{,}085\,\text{m/s} = 205\,\text{m/s}$.

**Deutung:** Beim Einschlag gehen $1 - \dfrac{m}{m + M} = 99{,}5\,\%$ der kinetischen Energie in Verformung und Wärme.
:::

:::achtung[Fehler: Energieerhaltung über den Einschlag hinweg]
Beim ballistischen Pendel ($8{,}0\,\text{g}$, $1{,}50\,\text{kg}$, $6{,}0\,\text{cm}$) setzt jemand die
kinetische Energie des Geschosses gleich der Lageenergie oben.

Falsch gerechnet: $\tfrac12 m v^2 = (m + M) g h$, also $v = \sqrt{\dfrac{2\cdot 1{,}508\cdot 9{,}81\cdot 0{,}060}{0{,}0080}}\,\text{m/s} = 14{,}9\,\text{m/s}$.

Das ist ein Vierzehntel des richtigen Werts von $205\,\text{m/s}$. Beim Einschlag geht fast alle Energie verloren.
Für den Stoß gilt nur der Impuls, erst für das Hochschwingen die Energie.
:::

:::achtung[Fehler: Impulserhaltung beim Hochschwingen]
Direkt nach dem Einschlag hat der Klotz mit Geschoss den Impuls $1{,}508\,\text{kg}\cdot 1{,}085\,\text{m/s} = 1{,}64\,\text{kg}\cdot\text{m/s}$.

Falsch gedacht: Dieser Impuls bleibt beim Hochschwingen erhalten.

Am höchsten Punkt ruht der Klotz kurz, sein Impuls ist null. Gewichtskraft und Fadenkraft sind äußere Kräfte,
und sie wirken während des ganzen Hochschwingens. In dieser Phase gilt also nur die Energieerhaltung.
:::

:::beispiel[Pendelkugel trifft Klotz auf dem Tisch]
Eine Pendelkugel ($0{,}50\,\text{kg}$) wird aus $0{,}80\,\text{m}$ Höhe losgelassen. Im tiefsten Punkt stößt sie
elastisch auf einen ruhenden Klotz ($1{,}5\,\text{kg}$), der danach über den Tisch gleitet ($\mu_G = 0{,}25$). Wie
weit gleitet der Klotz?

**Phase 1, Pendel (Energieerhaltung):** $v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\cdot 0{,}80}\,\text{m/s} = 3{,}96\,\text{m/s}$.

**Phase 2, elastischer Stoß (Impuls und Energie):** $v_2' = \dfrac{2\cdot 0{,}50}{2{,}0}\cdot 3{,}96\,\text{m/s} = 1{,}98\,\text{m/s}$.
Die Kugel prallt mit $1{,}98\,\text{m/s}$ zurück, denn $v_1' = \dfrac{0{,}50 - 1{,}5}{2{,}0}\cdot 3{,}96\,\text{m/s} = -1{,}98\,\text{m/s}$.

**Phase 3, Gleiten (Energie mit Reibung):** $\tfrac12 m v_2'^2 = \mu_G m g s$, also
$s = \dfrac{(1{,}98\,\text{m/s})^2}{2\cdot 0{,}25\cdot 9{,}81\,\text{m/s}^2} = 0{,}80\,\text{m}$.

**Deutung:** Drei Phasen, drei verschiedene Bilanzen. Wer die Phasen sauber trennt, rechnet jede einzelne mit bekannten Formeln.
:::

:::pruefung[Phasen ausdrücklich benennen]
Schreib bei jeder mehrteiligen Aufgabe vor die Rechnung einen Satz wie „Phase 1: Stoß, nur Impulserhaltung,
weil die Körper zusammenkleben. Phase 2: Hochschwingen, Energieerhaltung, weil der Faden keine Arbeit
verrichtet.“ Damit zeigst du genau das, was die Prüferin sehen will: Du weißt, welcher Satz wann gilt und
**warum**. In der mündlichen Prüfung ist das die typische Nachfrage.
:::

### Kraft, Energie oder Impuls? Eine Entscheidungshilfe

- **Energieansatz:** Gefragt ist eine Geschwindigkeit an einem Ort oder eine Höhe, und die Bahn ist krumm
  (Rutsche, Pendel, Achterbahn, Feder). Die Zeit fällt heraus.
- **Kraftansatz** ($F = m a$ plus Kinematik): Gefragt sind Zeiten, Beschleunigungen oder Kräfte wie Seilkraft
  oder Normalkraft.
- **Impulsansatz:** Körper stoßen zusammen oder voneinander weg, oder eine Kraft folgt aus Impulsänderung und Zeit.

Warum gibt es überhaupt Erhaltungssätze? Die Physikerin Emmy Noether zeigte 1918, dass jeder Erhaltungssatz
aus einer Symmetrie folgt. Die Energieerhaltung folgt daraus, dass die Naturgesetze heute dieselben sind wie
morgen. Die Impulserhaltung folgt daraus, dass sie hier dieselben sind wie anderswo. Das ist kein Prüfungsstoff,
aber eine schöne Antwort auf die Frage nach dem Warum.

### Das Schwerpunktsystem (Vertiefung)

Der **Schwerpunkt** zweier Körper bewegt sich mit der Geschwindigkeit
$v_S = \dfrac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$. Das ist genau die gemeinsame Geschwindigkeit nach einem
unelastischen Stoß. Weil der Gesamtimpuls erhalten bleibt, ändert sich $v_S$ bei keinem Stoß.

Die Energie $\tfrac12(m_1 + m_2)v_S^2$ der Schwerpunktbewegung kann deshalb nie verloren gehen. Bei einem Stoß
kann höchstens der **Rest** in Wärme übergehen. Genau das passiert beim vollkommen unelastischen Stoß: Er
vernichtet die ganze Bewegung **relativ** zum Schwerpunkt und lässt nur die Schwerpunktbewegung übrig.

:::beispiel[Wie viel Energie kann höchstens verloren gehen?]
Ein Wagen ($2{,}0\,\text{kg}$) fährt mit $5{,}0\,\text{m/s}$ auf einen ruhenden Wagen ($3{,}0\,\text{kg}$).

**Schritt 1, Schwerpunktgeschwindigkeit:** $v_S = \dfrac{2{,}0\cdot 5{,}0}{5{,}0}\,\text{m/s} = 2{,}0\,\text{m/s}$.

**Schritt 2, Energien:** Gesamt vorher $\tfrac12\cdot 2{,}0\cdot 5{,}0^2\,\text{J} = 25\,\text{J}$. Schwerpunktbewegung
$\tfrac12\cdot 5{,}0\cdot 2{,}0^2\,\text{J} = 10\,\text{J}$.

**Schritt 3, Höchstverlust:** $25\,\text{J} - 10\,\text{J} = 15\,\text{J}$. Genau so viel verliert ein vollkommen
unelastischer Stoß, jeder andere Stoß verliert weniger.
:::

```reflexion
frage: Erkläre einer Mitschülerin in eigenen Worten, warum beim ballistischen Pendel zwei verschiedene Erhaltungssätze nötig sind und warum man sie nicht vertauschen darf.
antwort: |
  Der Vorgang hat zwei Phasen. Beim Einschlag bleibt das Geschoss stecken, das ist ein vollkommen unelastischer
  Stoß: Fast die ganze Bewegungsenergie wird zu Wärme und Verformung, aber der Impuls bleibt erhalten, weil in der
  kurzen Zeit keine äußere Kraft in Flugrichtung wirkt. Beim Hochschwingen dagegen ziehen Gewichtskraft und Faden
  von außen, der Impuls ändert sich bis auf null. Dafür verrichtet nur die Gewichtskraft Arbeit, also bleibt die
  mechanische Energie erhalten. Vertauscht man die Sätze, rechnet man mit Größen, die gerade nicht erhalten sind.
```

### Aufgaben zur Wahl des Erhaltungssatzes

```aufgabe
id: p4-10-welcher-1
titel: "Welches Verfahren passt? Die Skispringerin"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine Skispringerin fährt aus der Ruhe die gekrümmte Anlaufspur einer Schanze hinab. Gesucht ist ihre Geschwindigkeit am Schanzentisch, Reibung vernachlässigt. Welcher Ansatz führt am schnellsten zum Ziel? (Nicht rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "Kraftansatz mit $F = m a$ entlang der Spur"
      - "Energieerhaltung zwischen Start und Schanzentisch"
      - "Impulserhaltung zwischen Start und Schanzentisch"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Auf der gekrümmten Spur ändert sich die Richtung der Kräfte ständig. Mit $F = m a$ müsstest du Stück für Stück rechnen. Gesucht ist nur eine Geschwindigkeit an einem Ort.
      - wert: 2
        meldung: Die Gewichtskraft ist eine äußere Kraft, die die ganze Zeit wirkt. Der Impuls der Springerin ändert sich also. Impulserhaltung gilt hier nicht.
hinweise:
  - Gesucht ist eine Geschwindigkeit an einem bestimmten Ort, die Bahn ist krumm, und es gibt keine Reibung.
loesung: |
  **Entscheidung:** Ohne Reibung verrichtet nur die Gewichtskraft Arbeit. Die mechanische Energie bleibt erhalten, und die Form der Spur spielt keine Rolle.
  ---
  **Ansatz:** $m g h = \tfrac12 m v^2$, also $v = \sqrt{2 g h}$ mit dem Höhenunterschied $h$. Der Impuls bleibt nicht erhalten, weil die Gewichtskraft von außen wirkt.
```

```aufgabe
id: p4-10-welcher-2
titel: "Welches Verfahren passt? Kuppelnde Waggons"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Waggon rollt auf einen ruhenden Waggon und kuppelt ein. Gesucht ist die gemeinsame Geschwindigkeit danach. Welcher Ansatz ist richtig? (Nicht rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "Energieerhaltung: kinetische Energie vorher gleich nachher"
      - "Impulserhaltung: Gesamtimpuls vorher gleich nachher"
      - "Beide Sätze zusammen, weil es zwei Waggons sind"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Beim Einkuppeln verformen sich Puffer und Kupplung, und es entsteht Wärme. Die kinetische Energie bleibt nicht erhalten.
      - wert: 2
        meldung: Beide Sätze braucht man nur beim elastischen Stoß, wo es zwei Unbekannte gibt. Hier gibt es nur eine gemeinsame Geschwindigkeit, und die Energie bleibt nicht erhalten.
hinweise:
  - Die Waggons bleiben aneinander. Was für ein Stoß ist das?
loesung: |
  **Entscheidung:** Einkuppeln ist ein vollkommen unelastischer Stoß. In der kurzen Stoßzeit wirkt keine nennenswerte äußere Kraft in Fahrtrichtung, also bleibt der Impuls erhalten.
  ---
  **Ansatz:** $m_1 v_1 = (m_1 + m_2) v'$. Die kinetische Energie nimmt dabei ab.
```

```aufgabe
id: p4-energie-impuls-text
titel: Knetkugeln im Gegenverkehr
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Zwei gleiche Knetkugeln fliegen mit gleich großer Geschwindigkeit frontal aufeinander zu und bleiben aneinander kleben. Was ist danach mit dem Gesamtimpuls und mit der kinetischen Energie? Erkläre, wo die Energie geblieben ist.
teile:
  - typ: text
    muster: |
      Der Gesamtimpuls war vorher null, weil die beiden Impulse gleich groß und entgegengesetzt sind. Nachher ist er
      ebenfalls null: Die Kugeln ruhen. Die kinetische Energie war vorher $2\cdot\tfrac12 m v^2 = m v^2$ und ist
      nachher null. Sie ist nicht verschwunden, sondern in Verformungsarbeit und innere Energie der Knetmasse
      umgewandelt worden. Der Impuls bleibt erhalten, die mechanische Energie nicht, die Gesamtenergie schon.
hinweise:
  - Impuls ist ein Vektor, Energie ein Skalar.
  - Was ist mit der Energie bei Knetmasse passiert, die sich verformt?
loesung: |
  **Impuls:** vorher $m v + m(-v) = 0$, nachher $0$. Der Impuls ist erhalten. ✓
  ---
  **Kinetische Energie:** vorher $2\cdot\tfrac12 m v^2 = m v^2$, nachher $0$.
  ---
  **Verbleib:** Die Energie steckt jetzt als innere Energie (Wärme) und Verformung in den Kugeln. Die Gesamtenergie bleibt erhalten. Hier geht die ganze kinetische Energie verloren, weil der Gesamtimpuls null ist.
```

```aufgabe
id: p4-10-ballistisch
titel: Ballistisches Pendel in Schritten
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein Geschoss ($12\,\text{g}$) fliegt waagrecht in einen ruhenden, an Schnüren hängenden Holzklotz ($2{,}40\,\text{kg}$) und bleibt stecken. Der Klotz schwingt $4{,}5\,\text{cm}$ hoch. Runde auf drei signifikante Stellen.

  a) Wie schnell war der Klotz mit Geschoss direkt nach dem Einschlag (in m/s)?

  b) Wie schnell war das Geschoss (in m/s)?
teile:
  - typ: zahl
    label: a) nach dem Einschlag
    loesung: "sqrt(2*9.81*0.045)"
    einheit: "m/s"
    anzeige: '0{,}940'
    fehler:
      - wert: "sqrt(2*9.81*4.5)"
        meldung: Du hast die Höhe in Zentimetern eingesetzt. $4{,}5\,\text{cm} = 0{,}045\,\text{m}$.
  - typ: zahl
    label: b) Geschoss
    loesung: "2.412/0.012*sqrt(2*9.81*0.045)"
    einheit: "m/s"
    anzeige: '189'
    toleranz: 0.5
    fehler:
      - wert: "sqrt(2*9.81*0.045*2.412/0.012)"
        meldung: Du hast mit Energieerhaltung über den Einschlag gerechnet. Beim Einschlag geht fast alle Energie verloren. Dort gilt nur der Impuls.
      - wert: "2.4/0.012*sqrt(2*9.81*0.045)"
        meldung: Nach dem Einschlag bewegt sich der Klotz **mit** dem Geschoss. Die Masse ist $2{,}412\,\text{kg}$.
hinweise:
  - Zwei Phasen. Fang beim Hochschwingen an (Energie) und rechne dann den Einschlag (Impuls).
  - 'Hochschwingen: $v'' = \sqrt{2 g h}$. Einschlag: $m v = (m + M) v''$.'
gefuehrt:
  - text: Welcher Satz gilt beim Hochschwingen, und warum?
    erklaerung: Energieerhaltung. Der Faden steht senkrecht zur Bahn und verrichtet keine Arbeit, Reibung gibt es nicht.
  - text: Wie schnell ist der Klotz mit Geschoss direkt nach dem Einschlag (in m/s)?
    teil: { typ: zahl, loesung: "sqrt(2*9.81*0.045)" }
    erklaerung: '$v'' = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}045\,\text{m}} = 0{,}940\,\text{m/s}$.'
  - text: Welcher Satz gilt beim Einschlag?
    erklaerung: Nur die Impulserhaltung, denn das Geschoss bleibt stecken. Das ist ein vollkommen unelastischer Stoß.
  - text: Wie schnell war das Geschoss (in m/s)?
    teil: { typ: zahl, loesung: "2.412/0.012*0.9396" }
    erklaerung: '$v = \dfrac{2{,}412\,\text{kg}}{0{,}012\,\text{kg}}\cdot 0{,}940\,\text{m/s} = 189\,\text{m/s}$.'
loesung: |
  **Phasen:** Phase 1 Einschlag (nur Impuls), Phase 2 Hochschwingen (nur Energie). Wir rechnen rückwärts.
  ---
  **a)** $\tfrac12 v'^2 = g h$, also $v' = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}045\,\text{m}} = 0{,}940\,\text{m/s}$.
  ---
  **b)** $m v = (m + M) v'$, also $v = \dfrac{2{,}412\,\text{kg}}{0{,}012\,\text{kg}}\cdot 0{,}940\,\text{m/s} = 189\,\text{m/s}$.
  ---
  **Plausibilität:** Ein Geschoss mit knapp $200\,\text{m/s}$ ist realistisch für eine langsame Pistolenkugel. Mit Energieerhaltung über den Stoß kämen nur $13\,\text{m/s}$ heraus, so langsam fliegt kein Geschoss.
```

```aufgabe
id: p4-10-messung
titel: Ballistisches Pendel mit Messunsicherheit
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Mit einem ballistischen Pendel (Geschoss $8{,}0\,\text{g}$, Klotz $1{,}000\,\text{kg}$) misst eine Klasse fünfmal die Steighöhe des Klotzes: $4{,}8$; $5{,}1$; $4{,}9$; $5{,}2$; $5{,}0\,\text{cm}$. Runde auf drei signifikante Stellen.

  a) Wie groß ist der Mittelwert der Steighöhe (in cm)?

  b) Welche Geschossgeschwindigkeit folgt aus dem Mittelwert (in m/s)?

  c) Als Unsicherheit der Höhe nehmen wir die halbe Spannweite, $\pm 0{,}2\,\text{cm}$. Wie groß ist damit die Unsicherheit der Geschwindigkeit (in m/s)? Beachte: $v$ ist proportional zu $\sqrt h$, also ist die relative Unsicherheit von $v$ halb so groß wie die von $h$.
teile:
  - typ: zahl
    label: a) mittlere Höhe
    loesung: "(4.8 + 5.1 + 4.9 + 5.2 + 5.0)/5"
    einheit: "cm"
    anzeige: '5{,}00'
    fehler:
      - wert: "(4.8 + 5.1 + 4.9 + 5.2 + 5.0)/4"
        meldung: Du hast durch $4$ geteilt. Beim Mittelwert teilst du die Summe durch die Anzahl der Messungen, hier $5$.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "1.008/0.008*sqrt(2*9.81*0.05)"
    einheit: "m/s"
    anzeige: '125'
    fehler:
      - wert: "sqrt(2*9.81*0.05*1.008/0.008)"
        meldung: Du hast Energieerhaltung über den Einschlag angenommen. Beim Einschlag gilt nur der Impuls.
  - typ: zahl
    label: c) Unsicherheit
    loesung: "1.008/0.008*sqrt(2*9.81*0.05)*0.5*0.2/5"
    einheit: "m/s"
    anzeige: '2{,}5'
    toleranz: 0.1
    fehler:
      - wert: "1.008/0.008*sqrt(2*9.81*0.05)*0.2/5"
        meldung: Das ist die relative Unsicherheit der Höhe ($4\,\%$) übertragen auf $v$. Wegen der Wurzel ist die relative Unsicherheit von $v$ nur halb so groß, also $2\,\%$.
hinweise:
  - Für b) zwei Phasen, erst Hochschwingen (Energie), dann Einschlag (Impuls). Die Höhe in Metern einsetzen.
  - 'Für c) relative Unsicherheit der Höhe $0{,}2/5{,}0 = 4\,\%$. Weil $v$ proportional zu $\sqrt h$ ist, halbiert sie sich.'
loesung: |
  **a)** $\bar h = \dfrac{4{,}8 + 5{,}1 + 4{,}9 + 5{,}2 + 5{,}0}{5}\,\text{cm} = \dfrac{25{,}0}{5}\,\text{cm} = 5{,}00\,\text{cm}$.
  ---
  **b)** Hochschwingen: $v' = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}0500\,\text{m}} = 0{,}990\,\text{m/s}$. Einschlag: $v = \dfrac{1{,}008\,\text{kg}}{0{,}0080\,\text{kg}}\cdot 0{,}990\,\text{m/s} = 125\,\text{m/s}$.
  ---
  **c)** Relative Unsicherheit der Höhe: $0{,}2/5{,}0 = 4\,\%$. Weil $v$ proportional zu $\sqrt h$ ist, halbiert sie sich auf $2\,\%$. $0{,}02\cdot 125\,\text{m/s} = 2{,}5\,\text{m/s}$.
  ---
  **Ergebnis:** $v = (125 \pm 3)\,\text{m/s}$. Mehr Stellen anzugeben wäre bei dieser Messgenauigkeit nicht sinnvoll.
```

```aufgabe
id: p4-10-schwerpunkt
titel: Höchstmöglicher Energieverlust (Vertiefung)
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Wagen ($4{,}0\,\text{kg}$) fährt mit $3{,}0\,\text{m/s}$ auf einen ruhenden Wagen ($2{,}0\,\text{kg}$). Wie viel kinetische Energie kann bei diesem Stoß **höchstens** verloren gehen (in J)?
teile:
  - typ: zahl
    loesung: "0.5*4*3^2 - 0.5*6*(4*3/6)^2"
    einheit: "J"
    anzeige: '6'
    fehler:
      - wert: "0.5*4*3^2"
        meldung: Die ganze Energie kann nicht verloren gehen. Der Gesamtimpuls ist nicht null, also müssen sich die Wagen nachher noch bewegen.
hinweise:
  - Am meisten Energie geht verloren, wenn die Wagen zusammenkleben.
  - 'Gemeinsame Geschwindigkeit $v_S = m_1 v_1/(m_1 + m_2)$, dann Energie vorher minus Energie nachher.'
loesung: |
  **Ansatz:** Den größten Verlust hat der vollkommen unelastische Stoß. Übrig bleibt nur die Schwerpunktbewegung.
  ---
  **Schwerpunktgeschwindigkeit:** $v_S = \dfrac{4{,}0\,\text{kg}\cdot 3{,}0\,\text{m/s}}{6{,}0\,\text{kg}} = 2{,}0\,\text{m/s}$.
  ---
  **Energien:** vorher $\tfrac12\cdot 4{,}0\cdot 9{,}0\,\text{J} = 18\,\text{J}$, nachher mindestens $\tfrac12\cdot 6{,}0\cdot 4{,}0\,\text{J} = 12\,\text{J}$. Höchstverlust: $6{,}0\,\text{J}$, ein Drittel.
```

```aufgabe
id: p4-10-pendel-klotz
titel: Pendel, Stoß und Reibung
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Eine Pendelkugel ($0{,}40\,\text{kg}$) wird aus $45\,\text{cm}$ Höhe über dem tiefsten Punkt losgelassen. Im tiefsten Punkt stößt sie elastisch und zentral auf einen ruhenden Klotz ($1{,}2\,\text{kg}$), der danach über einen Tisch gleitet. Die Gleitreibungszahl ist $\mu_G = 0{,}20$. Runde auf drei signifikante Stellen.

  a) Wie schnell ist die Kugel kurz vor dem Stoß (in m/s)?

  b) Wie schnell ist der Klotz direkt nach dem Stoß (in m/s)?

  c) Wie weit gleitet der Klotz (in m)?
teile:
  - typ: zahl
    label: a) Kugel vor dem Stoß
    loesung: "sqrt(2*9.81*0.45)"
    einheit: "m/s"
    anzeige: '2{,}97'
  - typ: zahl
    label: b) Klotz nach dem Stoß
    loesung: "2*0.4/(0.4+1.2)*sqrt(2*9.81*0.45)"
    einheit: "m/s"
    anzeige: '1{,}49'
    fehler:
      - wert: "0.4/(0.4+1.2)*sqrt(2*9.81*0.45)"
        meldung: Das wäre der unelastische Stoß mit gemeinsamer Geschwindigkeit. Der Stoß ist aber elastisch, also gilt $v_2' = \frac{2m_1}{m_1 + m_2}v_1$.
  - typ: zahl
    label: c) Gleitweg
    loesung: "(2*0.4/(0.4+1.2))^2*2*9.81*0.45/(2*0.2*9.81)"
    einheit: "m"
    anzeige: '0{,}563'
    fehler:
      - wert: "(2*0.4/(0.4+1.2))^2*2*9.81*0.45/(0.2*9.81)"
        meldung: Der Faktor $2$ im Nenner fehlt. Aus $\tfrac12 m v^2 = \mu_G m g s$ folgt $s = v^2/(2\mu_G g)$.
hinweise:
  - Drei Phasen. Welcher Satz gilt beim Pendeln, welcher beim elastischen Stoß, welcher beim Gleiten?
  - 'Pendel: $v = \sqrt{2 g h}$. Stoß: $v_2'' = \frac{2m_1}{m_1 + m_2}v$. Gleiten: $\tfrac12 m v_2''^2 = \mu_G m g s$.'
loesung: |
  **Phasen:** Phase 1 Pendeln (mechanische Energie erhalten, der Faden verrichtet keine Arbeit). Phase 2 elastischer Stoß (Impuls und Energie). Phase 3 Gleiten (Energie mit Reibung).
  ---
  **a)** $v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}45\,\text{m}} = 2{,}97\,\text{m/s}$.
  ---
  **b)** $v_2' = \dfrac{2\cdot 0{,}40\,\text{kg}}{1{,}60\,\text{kg}}\cdot 2{,}97\,\text{m/s} = 1{,}49\,\text{m/s}$. Die Kugel prallt mit $v_1' = \dfrac{0{,}40 - 1{,}2}{1{,}6}\cdot 2{,}97\,\text{m/s} = -1{,}49\,\text{m/s}$ zurück.
  ---
  **c)** Die Reibungsarbeit verbraucht die Bewegungsenergie des Klotzes: $s = \dfrac{v_2'^2}{2\mu_G g} = \dfrac{(1{,}49\,\text{m/s})^2}{2\cdot 0{,}20\cdot 9{,}81\,\text{m/s}^2} = 0{,}563\,\text{m}$.
  ---
  **Probe Stoß:** Impuls vorher $0{,}40\cdot 2{,}97 = 1{,}19\,\text{kg}\cdot\text{m/s}$, nachher $0{,}40\cdot(-1{,}49) + 1{,}2\cdot 1{,}49 = 1{,}19\,\text{kg}\cdot\text{m/s}$. ✓
```

## Gemischte Wiederholung

Hier sind Aufgaben aus diesem Kapitel mit Stoff aus den Kapiteln Größen, Einheiten, Messen, Kinematik
und Dynamik gemischt. Jede Lösung verlinkt die Lektion, aus der der ältere Stoff stammt. Das ist Absicht: In der Prüfung steht nicht dabei, zu welchem
Kapitel eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren passt?“ musst du nichts rechnen, sondern nur
den richtigen Weg erkennen. Das ist oft der schwerste Teil.

```aufgabe
id: p4-mix-einheiten
titel: Kilowattstunden in Joule
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Elektroauto lädt $3{,}5\,\text{kWh}$ in seine Batterie. Wie viel ist das in Joule? Gib das Ergebnis in Zehnerpotenzschreibweise an.
teile:
  - typ: zahl
    loesung: "3.5*1000*3600"
    einheit: "J"
    anzeige: '1{,}26\cdot 10^{7}'
    fehler:
      - wert: "3.5*3600"
        meldung: Du hast das „Kilo“ vergessen. $1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s}$.
      - wert: "3.5*1000*60"
        meldung: Eine Stunde hat $3600\,\text{s}$, nicht $60$.
hinweise:
  - '$1\,\text{kWh} = 1000\,\text{W}\cdot 3600\,\text{s} = 3{,}6\cdot 10^6\,\text{J}$.'
loesung: |
  **Ansatz:** $1\,\text{kWh}$ ist die Energie, die bei $1000\,\text{W}$ in $3600\,\text{s}$ umgesetzt wird: $3{,}6\cdot 10^6\,\text{J}$.
  ---
  $3{,}5\,\text{kWh} = 3{,}5\cdot 3{,}6\cdot 10^6\,\text{J} = 1{,}26\cdot 10^7\,\text{J}$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen) und [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad), Teil „Die Kilowattstunde“.
```

```aufgabe
id: p4-mix-feder
titel: Federkonstante aus einem angehängten Gewicht
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Hängt man an eine Feder einen Körper mit $0{,}50\,\text{kg}$, dehnt sie sich im Gleichgewicht um $4{,}0\,\text{cm}$.

  a) Wie groß ist die Federkonstante (in N/m)?

  b) Wie viel Spannenergie steckt dann in der Feder (in J)?
teile:
  - typ: zahl
    label: a) Federkonstante
    loesung: "0.5*9.81/0.04"
    einheit: "N/m"
    anzeige: '123'
    fehler:
      - wert: "0.5/0.04"
        meldung: An der Feder zieht die Gewichtskraft $m g$ in Newton, nicht die Masse.
  - typ: zahl
    label: b) Spannenergie
    loesung: "0.5*(0.5*9.81/0.04)*0.04^2"
    einheit: "J"
    anzeige: '0{,}0981'
    fehler:
      - wert: "0.5*9.81*0.04"
        meldung: Das ist $F\cdot s$, also Endkraft mal Weg. Die Federkraft wächst aber von null an, deshalb fehlt der Faktor $\tfrac12$.
hinweise:
  - Im Gleichgewicht ist die Federkraft $D s$ gleich der Gewichtskraft $m g$ (Hookesches Gesetz).
  - Spannenergie $\tfrac12 D s^2$ mit $s$ in Metern.
loesung: |
  **a)** Gleichgewicht: $D s = m g$, also $D = \dfrac{0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}040\,\text{m}} = 123\,\text{N/m}$. Wiederholen: [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
  ---
  **b)** $E = \tfrac12\cdot 122{,}6\,\text{N/m}\cdot(0{,}040\,\text{m})^2 = 0{,}0981\,\text{J}$.
  ---
  **Bemerkung:** Die Lageenergie hat sich um $m g s = 0{,}196\,\text{J}$ verringert, doppelt so viel. Die andere Hälfte nimmt die Hand auf, die den Körper langsam absenkt.
```

```aufgabe
id: p4-mix-wurf
titel: Waagrechter Wurf mit Energie
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Ball wird aus $5{,}0\,\text{m}$ Höhe mit $8{,}0\,\text{m/s}$ waagrecht abgeworfen. Wie schnell ist er beim Aufprall auf dem Boden (Betrag in m/s, drei signifikante Stellen)? Luftwiderstand vernachlässigen wir.
teile:
  - typ: zahl
    loesung: "sqrt(8^2 + 2*9.81*5)"
    einheit: "m/s"
    anzeige: '12{,}7'
    fehler:
      - wert: "8 + sqrt(2*9.81*5)"
        meldung: Du hast die Geschwindigkeiten addiert. Sie stehen senkrecht aufeinander, und erhalten bleibt die Energie. Es addieren sich die Quadrate.
      - wert: "sqrt(2*9.81*5)"
        meldung: Das ist nur die senkrechte Geschwindigkeit. Der Ball hat zusätzlich seine waagrechte Abwurfgeschwindigkeit.
hinweise:
  - 'Energieerhaltung: $\tfrac12 m v_0^2 + m g h = \tfrac12 m v^2$. Die Richtung der Geschwindigkeit spielt keine Rolle.'
  - 'Mit Kinematik geht es auch: $v_y = \sqrt{2 g h}$ und $v = \sqrt{v_0^2 + v_y^2}$.'
loesung: |
  **Ansatz:** Ohne Luftwiderstand gilt Energieerhaltung. Die Masse kürzt sich: $v = \sqrt{v_0^2 + 2 g h}$.
  ---
  $v = \sqrt{(8{,}0\,\text{m/s})^2 + 2\cdot 9{,}81\,\text{m/s}^2\cdot 5{,}0\,\text{m}} = \sqrt{162\,\text{m}^2/\text{s}^2} = 12{,}7\,\text{m/s}$.
  ---
  **Probe mit Kinematik** (siehe [Waagrechter und schiefer Wurf](/lernen/physik1/kinematik/waagrechter-und-schiefer-wurf)): $v_y = \sqrt{2\cdot 9{,}81\cdot 5{,}0}\,\text{m/s} = 9{,}90\,\text{m/s}$, $v = \sqrt{8{,}0^2 + 9{,}90^2}\,\text{m/s} = 12{,}7\,\text{m/s}$. ✓
```

```aufgabe
id: p4-mix-schiefe-ebene
titel: Rampe mit Kraft und mit Energie
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Kiste ($15\,\text{kg}$) rutscht aus der Ruhe eine um $28^\circ$ geneigte Rampe hinab. Die Gleitreibungszahl ist $\mu_G = 0{,}15$. Runde auf drei signifikante Stellen.

  a) Wie groß ist ihre Beschleunigung (in $\text{m/s}^2$)?

  b) Wie schnell ist sie nach $3{,}0\,\text{m}$ Rampenweg (in m/s)?
teile:
  - typ: zahl
    label: a) Beschleunigung
    loesung: "9.81*(sin(inRad(28)) - 0.15*cos(inRad(28)))"
    einheit: "m/s²"
    anzeige: '3{,}31'
    fehler:
      - wert: "9.81*(sin(inRad(28)) + 0.15*cos(inRad(28)))"
        meldung: Beim Hinabgleiten zeigt die Reibung rampenaufwärts und bremst. Sie wird vom Hangabtrieb abgezogen.
      - wert: "9.81*(cos(inRad(28)) - 0.15*sin(inRad(28)))"
        meldung: Sinus und Kosinus sind vertauscht. Der Hangabtrieb ist $m g\sin\alpha$, die Normalkraft $m g\cos\alpha$.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "sqrt(2*9.81*(sin(inRad(28)) - 0.15*cos(inRad(28)))*3)"
    einheit: "m/s"
    anzeige: '4{,}45'
    fehler:
      - wert: "sqrt(2*9.81*3*sin(inRad(28)))"
        meldung: Das ist die Geschwindigkeit ohne Reibung. Die Reibungswärme fehlt in der Bilanz.
hinweise:
  - 'Kraftansatz aus der Lektion [Die schiefe Ebene](/lernen/physik1/dynamik/die-schiefe-ebene-hinab-hinauf-und-die-haftgrenze): $a = g(\sin\alpha - \mu_G\cos\alpha)$.'
  - 'Für b) entweder $v = \sqrt{2 a s}$ oder Energiebilanz $m g s\sin\alpha = \tfrac12 m v^2 + \mu_G m g\cos\alpha\cdot s$.'
loesung: |
  **a)** Kraftansatz: $a = g(\sin 28^\circ - 0{,}15\cos 28^\circ) = 9{,}81\,\text{m/s}^2\cdot(0{,}469 - 0{,}132) = 3{,}31\,\text{m/s}^2$.
  ---
  **b)** Kinematik: $v = \sqrt{2 a s} = \sqrt{2\cdot 3{,}31\,\text{m/s}^2\cdot 3{,}0\,\text{m}} = 4{,}45\,\text{m/s}$.
  ---
  **Probe mit Energie:** Höhe $3{,}0\,\text{m}\cdot\sin 28^\circ = 1{,}41\,\text{m}$, Lageenergie $207\,\text{J}$. Reibungswärme $0{,}15\cdot 15\cdot 9{,}81\cdot\cos 28^\circ\cdot 3{,}0\,\text{J} = 58{,}5\,\text{J}$. Rest $149\,\text{J} = \tfrac12\cdot 15\,\text{kg}\cdot v^2$ ergibt $v = 4{,}45\,\text{m/s}$. ✓
```

```aufgabe
id: p4-mix-vt
titel: Kraftstoß und Arbeit aus dem v-t-Diagramm
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Ein Auto ($800\,\text{kg}$) beschleunigt laut Diagramm gleichmäßig aus dem Stand und fährt dann mit konstanter Geschwindigkeit weiter.

  a) Wie groß ist der Kraftstoß der resultierenden Kraft in den ersten $6\,\text{s}$ (in N·s)?

  b) Wie groß ist die mittlere resultierende Kraft in dieser Zeit (in N)?

  c) Welche Arbeit verrichtet die resultierende Kraft in den ersten $6\,\text{s}$ (in kJ)?
plot:
  x: [0, 10]
  y: [0, 20]
  achsen: { x: "t in s", y: "v in m/s" }
  strecken:
    - { von: [0, 0], nach: [6, 15], farbe: 0 }
    - { von: [6, 15], nach: [10, 15], farbe: 0 }
  punkte:
    - { x: 6, y: 15, label: "(6 s | 15 m/s)" }
teile:
  - typ: zahl
    label: a) Kraftstoß
    loesung: "800*15"
    einheit: "N·s"
    anzeige: '12000'
    fehler:
      - wert: "800*0.5*15*6"
        meldung: Das ist Masse mal Fläche unter dem v-t-Graphen, also Masse mal Weg. Der Kraftstoß ist die Impulsänderung $m\,\Delta v$.
  - typ: zahl
    label: b) mittlere Kraft
    loesung: "800*15/6"
    einheit: "N"
    anzeige: '2000'
  - typ: zahl
    label: c) Arbeit
    loesung: "0.5*800*15^2/1000"
    einheit: "kJ"
    anzeige: '90'
    fehler:
      - wert: "800*15^2/1000"
        meldung: Der Faktor $\tfrac12$ der kinetischen Energie fehlt.
hinweise:
  - Lies die Endgeschwindigkeit der Beschleunigungsphase ab. Kraftstoß gleich Impulsänderung.
  - 'Arbeit-Energie-Satz: Die Arbeit der resultierenden Kraft ist die Änderung der kinetischen Energie.'
loesung: |
  **Ablesen:** In $6\,\text{s}$ steigt die Geschwindigkeit von $0$ auf $15\,\text{m/s}$ (siehe [Bewegungsdiagramme ineinander übersetzen](/lernen/physik1/kinematik/bewegungsdiagramme-ineinander-uebersetzen) zum Lesen von v-t-Diagrammen).
  ---
  **a)** $\Delta p = m\,\Delta v = 800\,\text{kg}\cdot 15\,\text{m/s} = 12\,000\,\text{N}\cdot\text{s}$.
  ---
  **b)** $\bar F = \Delta p/\Delta t = 12\,000\,\text{N}\cdot\text{s}/6\,\text{s} = 2000\,\text{N}$.
  ---
  **c)** $W = \Delta E_{\text{kin}} = \tfrac12\cdot 800\,\text{kg}\cdot(15\,\text{m/s})^2 = 90\,000\,\text{J} = 90\,\text{kJ}$. Probe: Weg $\tfrac12\cdot 15\cdot 6\,\text{m} = 45\,\text{m}$, und $2000\,\text{N}\cdot 45\,\text{m} = 90\,\text{kJ}$. ✓
```

```aufgabe
id: p4-mix-lift
titel: Ein Lastenaufzug fährt an
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Lastenaufzug ($600\,\text{kg}$) fährt aus der Ruhe mit $1{,}2\,\text{m/s}^2$ nach oben an. Wir betrachten die ersten $2{,}0\,\text{m}$.

  a) Wie groß ist die Seilkraft (in N)?

  b) Welche Arbeit verrichtet das Seil auf diesen $2{,}0\,\text{m}$ (in J)?

  c) Wie viel davon steckt danach als kinetische Energie im Aufzug (in J)?
teile:
  - typ: zahl
    label: a) Seilkraft
    loesung: "600*(9.81 + 1.2)"
    einheit: "N"
    anzeige: '6606'
    fehler:
      - wert: "600*9.81"
        meldung: Das ist nur die Gewichtskraft. Damit würde der Aufzug nicht beschleunigen. Das Seil muss zusätzlich $m a$ aufbringen.
      - wert: "600*1.2"
        meldung: Das ist nur die resultierende Kraft. Das Seil muss außerdem die Gewichtskraft tragen.
  - typ: zahl
    label: b) Arbeit des Seils
    loesung: "600*(9.81 + 1.2)*2"
    einheit: "J"
    anzeige: '13212'
  - typ: zahl
    label: c) kinetische Energie
    loesung: "600*1.2*2"
    einheit: "J"
    anzeige: '1440'
    fehler:
      - wert: "600*(9.81 + 1.2)*2"
        meldung: Das ist die ganze Arbeit des Seils. Ein Teil davon wird zu Lageenergie, nur der Rest zu Bewegungsenergie.
hinweise:
  - Freikörperbild des Aufzugs, Richtung nach oben positiv. Aus der Lektion [Das zweite Newtonsche Axiom](/lernen/physik1/dynamik/das-zweite-newtonsche-axiom-kraft-aendert-die-bewegung) kennst du $F_S - m g = m a$.
  - Die Seilarbeit teilt sich auf in Lageenergie $m g h$ und kinetische Energie. Oder Arbeit-Energie-Satz mit der resultierenden Kraft $m a$.
loesung: |
  **Modell:** Auf den Aufzug wirken die Seilkraft nach oben und die Gewichtskraft nach unten. Grundgesetz: $F_S - m g = m a$.
  ---
  **a)** $F_S = m(g + a) = 600\,\text{kg}\cdot 11{,}01\,\text{m/s}^2 = 6606\,\text{N}$.
  ---
  **b)** Seilkraft und Weg zeigen nach oben: $W_S = 6606\,\text{N}\cdot 2{,}0\,\text{m} = 13\,212\,\text{J}$.
  ---
  **c)** Arbeit-Energie-Satz mit der resultierenden Kraft: $E_{\text{kin}} = m a\cdot s = 600\,\text{kg}\cdot 1{,}2\,\text{m/s}^2\cdot 2{,}0\,\text{m} = 1440\,\text{J}$.
  ---
  **Probe:** Lageenergie $m g h = 600\cdot 9{,}81\cdot 2{,}0\,\text{J} = 11\,772\,\text{J}$. Zusammen mit $1440\,\text{J}$ ergibt das $13\,212\,\text{J}$, genau die Seilarbeit. ✓
```

```aufgabe
id: p4-mix-verfahren-1
titel: "Welches Verfahren passt? Die Bremszeit"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Schlitten gleitet mit bekannter Geschwindigkeit auf eine ebene Schneefläche mit bekannter Gleitreibungszahl. Gesucht ist die **Zeit**, bis er steht. Welcher Ansatz führt direkt zum Ziel? (Nicht rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "Energieerhaltung mit Reibungswärme"
      - "Grundgesetz $F = m a$ mit Kinematik, oder der Kraftstoß $F\\Delta t = \\Delta p$"
      - "Impulserhaltung zwischen Anfang und Ende"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Mit der Energie bekommst du den **Weg**, nicht die Zeit. In der Energiebilanz kommt die Zeit gar nicht vor.
      - wert: 2
        meldung: Die Reibung ist eine äußere Kraft. Der Impuls des Schlittens bleibt nicht erhalten, er wird auf null gebremst.
hinweise:
  - In welchem Ansatz kommt die Zeit überhaupt vor?
loesung: |
  **Entscheidung:** Gesucht ist eine Zeit. Die Energiebilanz enthält keine Zeit. Der Kraftansatz und der Kraftstoß enthalten sie.
  ---
  **Ansatz:** $F_R = \mu_G m g$ bremst. Kraftstoß: $\mu_G m g\,\Delta t = m v_0$, also $\Delta t = \dfrac{v_0}{\mu_G g}$.
```

```aufgabe
id: p4-mix-verfahren-2
titel: "Welches Verfahren passt? Zwei Eisstöcke"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Eisstock gleitet auf einen ruhenden, gleich schweren Eisstock und stößt ihn elastisch an. Gesucht sind die Geschwindigkeiten **beider** Eisstöcke direkt nach dem Stoß. Welche Sätze brauchst du? (Nicht rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "nur die Impulserhaltung"
      - "nur die Energieerhaltung"
      - "Impulserhaltung und Energieerhaltung zusammen"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Mit einer Gleichung kannst du nicht zwei Unbekannte bestimmen. Beim elastischen Stoß bleibt zusätzlich die kinetische Energie erhalten.
      - wert: 1
        meldung: Auch hier fehlt eine Gleichung. Der Impuls bleibt bei jedem Stoß erhalten und liefert die zweite Gleichung.
hinweise:
  - Wie viele Unbekannte gibt es? Was bleibt beim elastischen Stoß erhalten?
loesung: |
  **Entscheidung:** Zwei Unbekannte brauchen zwei Gleichungen. Beim elastischen Stoß bleiben Impuls und kinetische Energie erhalten.
  ---
  **Ergebnis ohne Rechnung:** Bei gleichen Massen tauschen die Eisstöcke ihre Geschwindigkeiten. Der stoßende bleibt liegen.
```

```aufgabe
id: p4-mix-verfahren-3
titel: "Welches Verfahren passt? Die Kraft beim Aufprall"
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Ein Auto prallt mit bekannter Geschwindigkeit gegen eine Mauer und steht nach einer bekannten, sehr kurzen Zeit. Gesucht ist die mittlere Kraft auf den angeschnallten Fahrer. Welcher Ansatz passt? (Nicht rechnen.)
teile:
  - typ: auswahl
    optionen:
      - "Impulserhaltung von Auto und Fahrer"
      - "Kraftstoß: Impulsänderung des Fahrers geteilt durch die Bremszeit"
      - "Energieerhaltung: kinetische Energie gleich Lageenergie"
      - "Arbeit-Energie-Satz mit der Zeit als Weg"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Mauer übt eine große äußere Kraft aus. Der Impuls von Auto und Fahrer bleibt nicht erhalten, er geht auf null.
      - wert: 2
        meldung: Das Auto kommt nicht in die Höhe. Die kinetische Energie wird zu Verformung und Wärme, nicht zu Lageenergie.
      - wert: 3
        meldung: Im Arbeit-Energie-Satz steht ein Weg, keine Zeit. Mit dem Bremsweg ginge es, aber gegeben ist die Bremszeit.
hinweise:
  - Gegeben sind Geschwindigkeit und Zeit, gesucht ist eine Kraft.
loesung: |
  **Entscheidung:** Geschwindigkeit und Zeit sind gegeben, gesucht ist eine Kraft. Das passt genau zum Kraftstoß.
  ---
  **Ansatz:** $\bar F = \dfrac{m v}{\Delta t}$ mit der Masse des Fahrers. Der Gurt sorgt dafür, dass der Fahrer mit dem Auto und nicht später am Lenkrad abgebremst wird.
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, Punkte und ein Sachkontext.
Kläre bei kombinierten Aufgaben zuerst, welche Phasen es gibt und welcher Erhaltungssatz in welcher Phase gilt.
Schreib die Bilanz in Worten auf, bevor du rechnest. Als Faustregel gilt etwa zwei Minuten pro Punkt.

```aufgabe
id: p4-pruefung-ballistisch
titel: Ballistisches Pendel
niveau: 3
punkte: 10
lernziel: 7
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 20 Minuten.* Ein Geschoss ($15\,\text{g}$) fliegt waagrecht in einen an Schnüren hängenden Holzklotz ($3{,}00\,\text{kg}$) und bleibt stecken. Der Klotz schwingt danach $8{,}0\,\text{cm}$ hoch. Runde auf drei signifikante Stellen.

  a) Begründe, welcher Erhaltungssatz beim Einschlag und welcher beim Hochschwingen gilt. (2 P)

  b) Welche Geschwindigkeit hatte der Klotz mit Geschoss direkt nach dem Einschlag (in m/s)? (2 P)

  c) Wie schnell war das Geschoss (in m/s)? (3 P)

  d) Welcher Anteil der kinetischen Energie des Geschosses wurde in Wärme und Verformung umgewandelt (in %)? (3 P)
teile:
  - typ: text
    label: a) Begründung
    muster: |
      Beim Einschlag bleibt das Geschoss stecken, der Stoß ist vollkommen unelastisch. In der kurzen Stoßzeit wirkt
      keine nennenswerte äußere Kraft in Flugrichtung, also bleibt der Impuls erhalten. Die mechanische Energie
      bleibt nicht erhalten, sie wird zu Wärme und Verformung. Beim Hochschwingen verrichtet nur die Gewichtskraft
      Arbeit, der Faden steht senkrecht zur Bahn. Also gilt dort die Erhaltung der mechanischen Energie. Der Impuls
      bleibt dort nicht erhalten, weil Gewichts- und Fadenkraft von außen wirken.
  - typ: zahl
    label: b) nach dem Einschlag
    loesung: "sqrt(2*9.81*0.08)"
    einheit: "m/s"
    anzeige: '1{,}25'
  - typ: zahl
    label: c) Geschoss
    loesung: "3.015/0.015*sqrt(2*9.81*0.08)"
    einheit: "m/s"
    anzeige: '252'
    fehler:
      - wert: "sqrt(2*9.81*0.08*3.015/0.015)"
        meldung: Hier wurde Energieerhaltung über den Einschlag angewandt. Beim Einschlag gilt nur der Impuls.
  - typ: zahl
    label: d) Anteil
    loesung: "(1 - 0.015/3.015)*100"
    einheit: "%"
    anzeige: '99{,}5'
hinweise:
  - 'Zwei Phasen: Stoß (Impulserhaltung), danach Hochschwingen (Energieerhaltung). Rechne rückwärts.'
  - 'Für d) gilt beim unelastischen Stoß auf ein ruhendes Ziel: Das Verhältnis der Energien nach und vor dem Stoß ist $m/(m + M)$.'
loesung: |
  **a)** Einschlag: vollkommen unelastisch, nur Impulserhaltung. Hochschwingen: Energieerhaltung, weil nur die Gewichtskraft Arbeit verrichtet. Der Impuls ändert sich dort durch äußere Kräfte.
  ---
  **b)** $\tfrac12 v'^2 = g h$, also $v' = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}080\,\text{m}} = 1{,}25\,\text{m/s}$.
  ---
  **c)** $m v = (m + M)v'$, also $v = \dfrac{3{,}015\,\text{kg}}{0{,}015\,\text{kg}}\cdot 1{,}25\,\text{m/s} = 252\,\text{m/s}$.
  ---
  **d)** $E_{\text{vor}} = \tfrac12\cdot 0{,}015\,\text{kg}\cdot(252\,\text{m/s})^2 = 476\,\text{J}$, $E_{\text{nach}} = \tfrac12\cdot 3{,}015\,\text{kg}\cdot(1{,}25\,\text{m/s})^2 = 2{,}37\,\text{J}$. Umgewandelt: $1 - 2{,}37/476 = 99{,}5\,\%$. Kontrolle: $1 - m/(m + M) = 1 - 0{,}015/3{,}015 = 99{,}5\,\%$. ✓
```

```aufgabe
id: p4-pruefung-skifahrer
titel: Abfahrt mit Reibung
niveau: 3
punkte: 8
lernziel: 3
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 16 Minuten.* Ein Skifahrer ($70\,\text{kg}$) fährt aus der Ruhe eine Piste mit $120\,\text{m}$ Höhenunterschied hinab. Die Piste ist $600\,\text{m}$ lang. Unten ist er $25\,\text{m/s}$ schnell. Runde auf drei signifikante Stellen.

  a) Wie schnell wäre er ohne Reibung und Luftwiderstand (in m/s)? (2 P)

  b) Wie viel Energie wurde in Wärme umgewandelt (in J)? (3 P)

  c) Wie groß war die mittlere Widerstandskraft entlang der Piste (in N)? (3 P)
teile:
  - typ: zahl
    label: a)
    loesung: "sqrt(2*9.81*120)"
    einheit: "m/s"
    anzeige: '48{,}5'
  - typ: zahl
    label: b)
    loesung: "70*9.81*120 - 0.5*70*25^2"
    einheit: "J"
    anzeige: '60529 \approx 6{,}05\cdot 10^{4}'
    fehler:
      - wert: "70*9.81*120 + 0.5*70*25^2"
        meldung: Die kinetische Energie unten ist der Teil, der **nicht** zu Wärme wurde. Er wird von der Lageenergie abgezogen.
  - typ: zahl
    label: c)
    loesung: "(70*9.81*120 - 0.5*70*25^2)/600"
    einheit: "N"
    anzeige: '101'
    fehler:
      - wert: "(70*9.81*120 - 0.5*70*25^2)/120"
        meldung: Die Widerstandskraft wirkt entlang der ganzen Piste, also über $600\,\text{m}$, nicht nur über die Höhe.
hinweise:
  - 'Verlust = Lageenergie oben minus kinetische Energie unten.'
  - 'Die Widerstandsarbeit ist mittlere Kraft mal Pistenlänge.'
loesung: |
  **Bilanz in Worten:** Lageenergie oben gleich kinetische Energie unten plus Reibungswärme.
  ---
  **a)** Ohne Reibung: $v = \sqrt{2 g h} = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 120\,\text{m}} = 48{,}5\,\text{m/s}$.
  ---
  **b)** $E_{\text{pot}} = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 120\,\text{m} = 82\,404\,\text{J}$, $E_{\text{kin}} = \tfrac12\cdot 70\,\text{kg}\cdot(25\,\text{m/s})^2 = 21\,875\,\text{J}$. Wärme: $60\,529\,\text{J} \approx 60{,}5\,\text{kJ}$.
  ---
  **c)** $\bar F = \dfrac{60\,529\,\text{J}}{600\,\text{m}} = 101\,\text{N}$. Das ist etwa ein Siebtel der Gewichtskraft, plausibel für Gleitreibung und Luftwiderstand zusammen.
```

```aufgabe
id: p4-pruefung-aufzug-leistung
titel: Leistung eines Aufzugs
niveau: 3
punkte: 8
lernziel: 4
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 15 Minuten.* Ein Aufzug (Kabine mit Personen $800\,\text{kg}$, ohne Gegengewicht) fährt gleichförmig in $20\,\text{s}$ um $30\,\text{m}$ nach oben. Der Antrieb hat einen Wirkungsgrad von $75\,\%$. Runde auf drei signifikante Stellen.

  a) Welche mechanische Leistung ist nötig (in W)? (3 P)

  b) Welche elektrische Leistung nimmt der Motor auf (in W)? (2 P)

  c) Wie viel elektrische Energie braucht eine Fahrt (in kWh)? (3 P)
teile:
  - typ: zahl
    label: a)
    loesung: "800*9.81*30/20"
    einheit: "W"
    anzeige: '11772 \approx 1{,}18\cdot 10^{4}'
  - typ: zahl
    label: b)
    loesung: "800*9.81*30/20/0.75"
    einheit: "W"
    anzeige: '15696 \approx 1{,}57\cdot 10^{4}'
    fehler:
      - wert: "800*9.81*30/20*0.75"
        meldung: Der Motor muss **mehr** aufnehmen, als er abgibt. Also teilst du durch den Wirkungsgrad.
  - typ: zahl
    label: c)
    loesung: "800*9.81*30/20/0.75*20/3.6e6"
    einheit: "kWh"
    anzeige: '0{,}0872'
hinweise:
  - 'Gleichförmig heißt: Die Seilkraft ist gleich der Gewichtskraft, $P = F v$.'
  - 'Aufgenommene Leistung ist Nutzleistung durch Wirkungsgrad. Energie ist Leistung mal Zeit.'
loesung: |
  **a)** Gleichförmig, also Seilkraft gleich Gewichtskraft. $v = 30\,\text{m}/20\,\text{s} = 1{,}5\,\text{m/s}$; $P = m g v = 800\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}5\,\text{m/s} = 11\,772\,\text{W} \approx 11{,}8\,\text{kW}$.
  ---
  **b)** $P_{\text{el}} = P/\eta = 11\,772\,\text{W}/0{,}75 = 15\,696\,\text{W} \approx 15{,}7\,\text{kW}$.
  ---
  **c)** $E = P_{\text{el}}\cdot t = 15\,696\,\text{W}\cdot 20\,\text{s} = 3{,}14\cdot 10^5\,\text{J} = 0{,}0872\,\text{kWh}$. Reale Aufzüge sparen mit einem Gegengewicht einen großen Teil davon.
```

```aufgabe
id: p4-pruefung-wagen-stoss
titel: Frontaler Zusammenstoß auf der Luftkissenbahn
niveau: 3
punkte: 7
lernziel: 6
kompetenz: anwenden
angabe: |
  *Zeitrichtwert: 14 Minuten.* Auf einer Luftkissenbahn fährt Wagen A ($0{,}50\,\text{kg}$) mit $2{,}0\,\text{m/s}$ nach rechts, Wagen B ($0{,}30\,\text{kg}$) mit $1{,}0\,\text{m/s}$ nach links. Sie stoßen zusammen und bleiben durch einen Klettverschluss aneinander haften. Rechts zählt positiv.

  a) Mit welcher Geschwindigkeit bewegen sie sich danach (in m/s, mit Vorzeichen)? (3 P)

  b) Wie viel kinetische Energie geht verloren (in J, drei signifikante Stellen)? (3 P)

  c) Wohin ist diese Energie gegangen? (1 P)
teile:
  - typ: zahl
    label: a)
    loesung: "(0.5*2 - 0.3*1)/0.8"
    einheit: "m/s"
    anzeige: '0{,}875'
    fehler:
      - wert: "(0.5*2 + 0.3*1)/0.8"
        meldung: Wagen B fährt nach links. Seine Geschwindigkeit ist $-1{,}0\,\text{m/s}$, sein Impuls zählt negativ.
  - typ: zahl
    label: b)
    loesung: "0.5*0.5*2^2 + 0.5*0.3*1^2 - 0.5*0.8*((0.5*2 - 0.3*1)/0.8)^2"
    einheit: "J"
    anzeige: '0{,}844'
  - typ: text
    label: c)
    muster: Sie wurde beim Zusammenprall in Verformung des Klettverschlusses, Wärme und etwas Schall umgewandelt. Die Gesamtenergie bleibt erhalten.
hinweise:
  - 'Vorzeichen beachten: Die Geschwindigkeit von B ist $-1{,}0\,\text{m/s}$.'
  - Energieverlust ist kinetische Energie vorher (beide Wagen) minus nachher (gemeinsam).
loesung: |
  **Ansatz:** Vollkommen unelastischer Stoß, nur Impulserhaltung. Rechts positiv.
  ---
  **a)** $0{,}50\cdot 2{,}0 + 0{,}30\cdot(-1{,}0) = 0{,}80\,v'$, also $v' = \dfrac{0{,}70\,\text{kg}\cdot\text{m/s}}{0{,}80\,\text{kg}} = 0{,}875\,\text{m/s}$ nach rechts.
  ---
  **b)** Vorher $\tfrac12\cdot 0{,}50\cdot 2{,}0^2\,\text{J} + \tfrac12\cdot 0{,}30\cdot 1{,}0^2\,\text{J} = 1{,}00\,\text{J} + 0{,}15\,\text{J} = 1{,}15\,\text{J}$. Nachher $\tfrac12\cdot 0{,}80\cdot 0{,}875^2\,\text{J} = 0{,}306\,\text{J}$. Verlust $0{,}844\,\text{J}$.
  ---
  **c)** In Verformung, Wärme und Schall. Die Gesamtenergie ist erhalten, nur die mechanische nicht.
```

```aufgabe
id: p4-pruefung-puffer
titel: Prellbock am Gleisende
niveau: 3
punkte: 9
lernziel: 3
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 18 Minuten.* Ein kleiner, beladener Feldbahnwagen (eine Lore, $2{,}0\,\text{t}$) rollt mit $1{,}2\,\text{m/s}$ gegen einen Prellbock. Der Prellbock federt wie eine Feder mit $D = 1{,}6\cdot 10^5\,\text{N/m}$. Reibung vernachlässigen wir. Runde auf drei signifikante Stellen.

  a) Wie weit wird die Feder höchstens zusammengedrückt (in m)? (3 P)

  b) Wie groß ist dann die Federkraft (in N)? (2 P)

  c) Um welchen Faktor ändert sich die größte Federkraft, wenn der Wagen doppelt so schnell ankommt? (2 P)

  d) Der Wagen prallt mit $1{,}2\,\text{m/s}$ zurück. Wie groß ist der Kraftstoß des Prellbocks (Betrag in N·s)? (2 P)
teile:
  - typ: zahl
    label: a) Stauchung
    loesung: "1.2*sqrt(2000/1.6e5)"
    einheit: "m"
    anzeige: '0{,}134'
    fehler:
      - wert: "0.5*2000*1.2^2/1.6e5"
        meldung: Du hast $E/D$ gerechnet. Aus $\tfrac12 m v^2 = \tfrac12 D s^2$ folgt aber $s^2 = m v^2/D$, also musst du noch die Wurzel ziehen.
  - typ: zahl
    label: b) Federkraft
    loesung: "1.6e5*1.2*sqrt(2000/1.6e5)"
    einheit: "N"
    anzeige: '21466 \approx 2{,}15\cdot 10^{4}'
  - typ: zahl
    label: c) Faktor
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: Die Energie wird vierfach, aber die Stauchung wächst nur wie die Wurzel daraus, also doppelt. Die Kraft $D s$ verdoppelt sich ebenfalls.
  - typ: zahl
    label: d) Kraftstoß
    loesung: "2000*(1.2 + 1.2)"
    einheit: "N·s"
    anzeige: '4800'
    fehler:
      - wert: "2000*1.2"
        meldung: Der Wagen wird nicht nur gestoppt, sondern zurückgeschickt. Die Geschwindigkeit ändert sich von $+1{,}2$ auf $-1{,}2\,\text{m/s}$.
hinweise:
  - Am Punkt der größten Stauchung ruht der Wagen kurz. Dann steckt die ganze kinetische Energie in der Feder.
  - 'Für d): $\Delta p = m(v_{\text{nachher}} - v_{\text{vorher}})$ mit Vorzeichen.'
loesung: |
  **Bilanz in Worten:** Kinetische Energie des Wagens gleich Spannenergie bei größter Stauchung: $\tfrac12 m v^2 = \tfrac12 D s^2$.
  ---
  **a)** $s = v\sqrt{m/D} = 1{,}2\,\text{m/s}\cdot\sqrt{\dfrac{2000\,\text{kg}}{1{,}6\cdot 10^5\,\text{N/m}}} = 1{,}2\cdot 0{,}112\,\text{m} = 0{,}134\,\text{m}$.
  ---
  **b)** $F = D s = 1{,}6\cdot 10^5\,\text{N/m}\cdot 0{,}134\,\text{m} = 2{,}15\cdot 10^4\,\text{N}$, etwas mehr als die Gewichtskraft des Wagens ($19{,}6\,\text{kN}$).
  ---
  **c)** Nach a) ist $s = v\sqrt{m/D}$, also proportional zu $v$. Damit ist auch $F = D s$ proportional zu $v$. Doppelte Geschwindigkeit ergibt die doppelte Kraft, Faktor $2$.
  ---
  **d)** $|\Delta p| = 2000\,\text{kg}\cdot(1{,}2 + 1{,}2)\,\text{m/s} = 4800\,\text{N}\cdot\text{s}$. Probe: Energie vorher und nachher je $1440\,\text{J}$, der Rückprall ist elastisch. ✓
```

```aufgabe
id: p4-pruefung-wasserkraft
titel: Ein kleines Flusskraftwerk
niveau: 3
punkte: 8
lernziel: 4
kompetenz: modellieren
angabe: |
  *Zeitrichtwert: 15 Minuten.* Durch die Turbinen eines Flusskraftwerks strömen $40\,\text{m}^3$ Wasser pro Sekunde. Die Fallhöhe beträgt $25\,\text{m}$, der Gesamtwirkungsgrad $85\,\%$. Runde auf drei signifikante Stellen.

  a) Welche Lageenergie gibt das Wasser pro Sekunde ab (in MW)? (3 P)

  b) Welche elektrische Leistung liefert das Kraftwerk (in MW)? (2 P)

  c) Wie viel elektrische Energie liefert es in einem Jahr mit $6000$ Volllaststunden (in GWh)? (3 P)
teile:
  - typ: zahl
    label: a) Leistung des Wassers
    loesung: "40000*9.81*25/1e6"
    einheit: "MW"
    anzeige: '9{,}81'
    fehler:
      - wert: "40*9.81*25/1e6"
        meldung: Du hast das Volumen als Masse eingesetzt. $40\,\text{m}^3$ Wasser haben $40\,000\,\text{kg}$.
  - typ: zahl
    label: b) elektrische Leistung
    loesung: "40000*9.81*25*0.85/1e6"
    einheit: "MW"
    anzeige: '8{,}34'
  - typ: zahl
    label: c) Jahresenergie
    loesung: "40000*9.81*25*0.85*6000/1e9"
    einheit: "GWh"
    anzeige: '50{,}0'
    fehler:
      - wert: "40000*9.81*25*0.85*6000/1e6"
        meldung: MW mal Stunden ergibt MWh. Für GWh teilst du noch durch $1000$.
hinweise:
  - 'Pro Sekunde fallen $40\,000\,\text{kg}$ um $25\,\text{m}$. Lageenergie pro Sekunde ist eine Leistung.'
  - 'Energie = Leistung mal Zeit. $1\,\text{GWh} = 1000\,\text{MWh}$.'
loesung: |
  **Modell:** Pro Sekunde verliert die Wassermasse $m = 40\,000\,\text{kg}$ die Höhe $25\,\text{m}$. Energie pro Zeit ist Leistung.
  ---
  **a)** $P = \dfrac{m g h}{t} = \dfrac{40\,000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 25\,\text{m}}{1\,\text{s}} = 9{,}81\cdot 10^6\,\text{W} = 9{,}81\,\text{MW}$.
  ---
  **b)** $P_{\text{el}} = 0{,}85\cdot 9{,}81\,\text{MW} = 8{,}34\,\text{MW}$.
  ---
  **c)** $E = 8{,}34\,\text{MW}\cdot 6000\,\text{h} = 50\,000\,\text{MWh} = 50{,}0\,\text{GWh}$. Das reicht für rund $14\,000$ Haushalte mit je $3500\,\text{kWh}$ im Jahr.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Arbeit ist Kraft mal Weg, aber nur der Kraftanteil in Wegrichtung zählt, $W = F s\cos\alpha$.
  (2) Energie wird nie erzeugt oder vernichtet, nur umgewandelt. Ohne Reibung bleibt sogar die mechanische Energie
  erhalten, mit Reibung wird ein Teil zu Wärme. (3) Der Impuls bleibt immer erhalten, wenn keine äußere Kraft
  wirkt, auch bei unelastischen Stößen. Die mechanische Energie bleibt dagegen nur bei elastischen Vorgängen erhalten.
```

:::zusammenfassung
- **Arbeit:** $W = F s\cos\alpha = \vec F\cdot\vec s$, ein Skalar. Nur der Kraftanteil in Wegrichtung zählt. Die
  Arbeit ist positiv, null oder negativ. Hubarbeit $m g h$ hängt nur von der Höhe ab, Reibungsarbeit vom Weg.
- **Veränderliche Kraft:** Die Arbeit ist die Fläche unter dem F-s-Diagramm, $W = \int F\,\dd s$. Spannarbeit
  einer Feder $\tfrac12 D s^2$: doppelte Dehnung kostet vierfache Arbeit.
- **Energieformen:** $E_{\text{kin}} = \tfrac12 m v^2$, $E_{\text{pot}} = m g h$ (Nullniveau frei wählbar, nur
  Differenzen zählen), $E_{\text{Spann}} = \tfrac12 D s^2$. Arbeit-Energie-Satz: $W_{\text{res}} = \Delta E_{\text{kin}}$.
- **Energieerhaltung:** Verrichten nur Gewichts- und Federkräfte Arbeit, bleibt die mechanische Energie
  erhalten. Mit Reibung gilt $E_{\text{Anfang}} = E_{\text{Ende}} + Q$. Die Gesamtenergie bleibt immer erhalten,
  „verbraucht“ wird nur ihre Nutzbarkeit.
- **Leistung und Wirkungsgrad:** $P = W/t$, bei konstanter Geschwindigkeit $P = F v$.
  $1\,\text{kWh} = 3{,}6\cdot 10^6\,\text{J}$. $\eta = $ Nutzen durch Aufwand, immer kleiner als $1$, in Ketten multipliziert.
- **Impuls und Kraftstoß:** $\vec p = m\vec v$ ist ein Vektor. $\Delta\vec p = \vec F\Delta t$, die Fläche unter dem
  F-t-Diagramm. Längere Bremszeit bedeutet kleinere Kraft (Airbag, Knautschzone).
- **Impulserhaltung und Stöße:** Ohne äußere Kraft bleibt der Gesamtimpuls erhalten, auch bei Reibung, Kleben und
  Explosionen. Elastischer Stoß: Impuls und Energie erhalten. Unelastischer Stoß: nur der Impuls.
- **Welcher Satz wann:** Mehrphasige Vorgänge in Phasen zerlegen und für jede Phase entscheiden. Ballistisches
  Pendel: Einschlag mit Impuls, Hochschwingen mit Energie.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir
wiedererkennst, rechne die genannte Aufgabe noch einmal.

1. **„Kraft mal Weg“ trotz schräger Kraft.** Nur $F\cos\alpha$ zählt. Training: „Schlitten an einer schrägen
   Leine“ und „Alle Arbeiten am gezogenen Schlitten“.
2. **Reibungsarbeit mit positivem Vorzeichen.** Bremsende Kräfte verrichten negative Arbeit. Training: „Einen
   Schrank verschieben“ und „Vorzeichen der Arbeit im Aufzug“.
3. **Hubarbeit mit der Rampenlänge statt der Höhe.** Training: „Ein Fass über die Rampe“.
4. **Spannarbeit als Endkraft mal Weg oder mit quadrierter Differenz.** Training: „Spannarbeit einer Feder“ und
   „Einen Rechenfehler finden“.
5. **km/h nicht umgerechnet oder das Quadrat in $\tfrac12 m v^2$ vergessen.** Training: „Bewegungsenergie eines
   Motorrads“ und „Gleiche Energie, verschiedene Massen“.
6. **Endhöhe statt Höhenunterschied eingesetzt.** Training: „Achterbahn ohne Antrieb“ und „Eine Achterbahn aus
   dem Höhenprofil“.
7. **Geschwindigkeiten addiert statt Energien.** Training: „Waagrechter Wurf mit Energie“ und „Drei Würfe vom
   selben Turm“.
8. **Reibungswärme addiert statt abgezogen.** Training: „Geschwindigkeit trotz Reibung“.
9. **Wirkungsgrad falsch herum oder mit $\eta$ multipliziert statt geteilt.** Training: „Wirkungsgrad eines
   Krans“ und „Was kostet das Hochpumpen?“.
10. **Kilowatt mal Minuten als kWh.** Training: „Ein Staubsauger und die Kilowattstunde“.
11. **Beim Zurückprallen die Geschwindigkeiten abgezogen.** Training: „Ein Gummiball an der Wand“.
12. **Energieerhaltung beim unelastischen Stoß.** Training: „Auffahrunfall“ und „Ballistisches Pendel in Schritten“.
13. **Richtungen beim Gesamtimpuls vergessen.** Training: „Frontaler Zusammenstoß auf der Luftkissenbahn“.
14. **Impulserhaltung trotz äußerer Kraft.** Training: „Welches Verfahren passt? Die Skispringerin“ und „Welches
    Verfahren passt? Die Kraft beim Aufprall“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“, **3**
„sicher, auch in der Prüfung“. Bei einer 1 wiederhole die Lektion und rechne ihre Aufgabe auf Niveau 3.

1. Arbeit als Skalarprodukt berechnen und ihr Vorzeichen deuten.
2. Arbeit als Fläche unter dem F-s-Diagramm bestimmen, Spannarbeit berechnen.
3. Kinetische, Lage- und Spannenergie berechnen und den Arbeit-Energie-Satz anwenden.
4. Energiebilanzen mit und ohne Reibung aufstellen und erklären, warum Energie nicht verbraucht wird.
5. Leistung, $P = F v$, Wirkungsgrad und Kilowattstunden sicher berechnen.
6. Impuls und Kraftstoß berechnen, auch aus dem F-t-Diagramm und beim Zurückprallen.
7. Impulserhaltung auf Rückstoß und Stöße anwenden, elastisch und unelastisch unterscheiden.
8. Begründen, welcher Erhaltungssatz wann gilt, und mehrphasige Vorgänge zerlegen.

## Mündliche Prüfung

```karten
- id: p4-k-arbeit
  frage: Wie ist die mechanische Arbeit definiert? Wann ist sie null, wann negativ?
  antwort: |
    Verschiebt eine konstante Kraft einen Körper um den Weg $s$, verrichtet sie die Arbeit $W = F s\cos\alpha$. Dabei
    ist $\alpha$ der Winkel zwischen Kraft und Weg, und nur der Kraftanteil in Wegrichtung zählt. Die Arbeit ist null,
    wenn kein Weg zurückgelegt wird oder die Kraft senkrecht zum Weg steht, etwa die Gewichtskraft beim waagrechten
    Tragen. Negativ ist sie, wenn die Kraft gegen die Bewegung zeigt, wie die Reibung. Die Einheit ist das Joule.
  kernpunkte: ["W = F·s·cos α", "nur Anteil in Wegrichtung", "null bei senkrecht oder ohne Weg", "negativ bei bremsender Kraft"]
- id: p4-k-skalarprodukt
  frage: Warum ist die Arbeit ein Skalar, obwohl sie aus zwei Vektoren gebildet wird?
  antwort: |
    Die Arbeit ist das Skalarprodukt von Kraft und Weg, $W = \vec F\cdot\vec s = F_x s_x + F_y s_y$. Das Skalarprodukt
    zweier Vektoren ist eine Zahl ohne Richtung. Physikalisch misst die Arbeit eine übertragene Energiemenge, und
    Energie hat keine Richtung. Deshalb kann man die Arbeiten verschiedener Kräfte einfach addieren.
  kernpunkte: ["Skalarprodukt aus der Mathematik", "Ergebnis ist eine Zahl", "Arbeit ist übertragene Energie, ohne Richtung"]
- id: p4-k-fs-diagramm
  frage: Wie berechnet man die Arbeit einer Kraft, die sich unterwegs ändert? Leite damit die Spannarbeit einer Feder her.
  antwort: |
    Die Arbeit ist die Fläche unter dem F-s-Diagramm, mathematisch $W = \int F\,\dd s$. Man denkt sich den Weg in
    kleine Stücke zerlegt, auf denen die Kraft fast konstant ist, und addiert die Streifen. Bei einer Feder ist
    $F = D s$ eine Gerade durch den Ursprung. Die Fläche ist ein Dreieck mit Breite $s$ und Höhe $D s$, also
    $W = \tfrac12 D s^2$. Doppelte Dehnung kostet deshalb die vierfache Arbeit.
  kernpunkte: ["Fläche unter dem F-s-Diagramm", "Integral als Summe schmaler Streifen", "Dreieck ergibt ½ D s²"]
- id: p4-k-energie
  frage: Was ist Energie? Nenne Energieformen und den Unterschied zur Arbeit.
  antwort: |
    Energie ist die Fähigkeit, Arbeit zu verrichten, Wärme abzugeben oder Licht auszusenden. Formen sind kinetische
    Energie, Lageenergie, Spannenergie, innere Energie, elektrische, chemische, Strahlungs- und Kernenergie. Energie
    beschreibt einen Zustand, den ein Körper hat. Arbeit ist dagegen Energie, die bei einem Vorgang durch eine Kraft
    übertragen wird. Beide haben die Einheit Joule.
  kernpunkte: ["Fähigkeit, Arbeit zu verrichten", "mehrere Formen", "Energie ist Zustand, Arbeit ist Übertragung"]
- id: p4-k-ekin
  frage: Leite die Formel für die kinetische Energie her.
  antwort: |
    Eine konstante resultierende Kraft $F = m a$ beschleunigt einen Körper aus der Ruhe auf $v$. Aus der Kinematik
    gilt $v^2 = 2 a s$, also $s = v^2/(2a)$. Die Arbeit ist $W = F s = m a\cdot v^2/(2a) = \tfrac12 m v^2$. Die
    Beschleunigung kürzt sich heraus. Diese Arbeit steckt danach als kinetische Energie im Körper.
  kernpunkte: ["W = F·s mit F = m·a", "s = v²/(2a) aus der Kinematik", "a kürzt sich, ½ m v²"]
- id: p4-k-nullniveau
  frage: Warum darf man das Nullniveau der Lageenergie frei wählen?
  antwort: |
    Physikalisch zählen nur Differenzen der Lageenergie, denn nur sie können in andere Energieformen umgewandelt werden.
    Verschiebt man das Nullniveau, ändern sich alle Lageenergien um denselben Betrag, ihre Differenzen bleiben gleich.
    Man muss das gewählte Nullniveau aber in der ganzen Rechnung beibehalten. Bequem ist meist der tiefste Punkt der Bewegung.
  kernpunkte: ["nur Differenzen sind messbar", "Verschiebung ändert alle Werte gleich", "innerhalb einer Rechnung beibehalten"]
- id: p4-k-erhaltung
  frage: Formuliere den Energieerhaltungssatz. Wann bleibt die mechanische Energie allein erhalten?
  antwort: |
    In einem abgeschlossenen System bleibt die Gesamtenergie konstant. Energie wird weder erzeugt noch vernichtet,
    nur umgewandelt oder übertragen. Die mechanische Energie, also kinetische plus Lage- plus Spannenergie, bleibt nur
    erhalten, wenn ausschließlich konservative Kräfte wie Gewichts- und Federkraft Arbeit verrichten. Mit Reibung wird
    ein Teil zu innerer Energie, und man schreibt $E_{\text{Anfang}} = E_{\text{Ende}} + Q$.
  kernpunkte: ["Gesamtenergie im abgeschlossenen System konstant", "mechanische Energie nur ohne Reibung", "mit Reibung Wärme Q in die Bilanz"]
- id: p4-k-sparen
  frage: Wenn Energie immer erhalten bleibt, warum soll man dann Energie sparen?
  antwort: |
    Erhalten bleibt die Menge der Energie, nicht ihre Nutzbarkeit. Bei fast jedem Vorgang wird nutzbare Energie wie
    Strom oder Benzin am Ende zu Wärme bei Umgebungstemperatur, die man kaum noch nutzen kann. Man sagt, die Energie
    wird entwertet. Sparen heißt also, weniger nutzbare Energie in unbrauchbare Wärme zu verwandeln. Diese Einbahnstraße
    beschreibt der zweite Hauptsatz der Wärmelehre im Kapitel über Hauptsätze und Wärmekraftmaschinen.
  kernpunkte: ["Menge bleibt, Nutzbarkeit sinkt", "am Ende Wärme bei Umgebungstemperatur", "Entwertung, zweiter Hauptsatz"]
- id: p4-k-perpetuum
  frage: Warum gibt es kein Perpetuum mobile erster Art?
  antwort: |
    Ein Perpetuum mobile erster Art müsste dauernd Arbeit verrichten, ohne dass ihm Energie zugeführt wird. Das
    widerspricht dem Energieerhaltungssatz, denn die Arbeit müsste aus dem Nichts entstehen. Außerdem verliert jede
    reale Maschine durch Reibung Energie als Wärme, sodass sie ohne Zufuhr irgendwann stehen bleibt.
  kernpunkte: ["Arbeit ohne Energiezufuhr", "widerspricht der Energieerhaltung", "Reibungsverluste bei realen Maschinen"]
- id: p4-k-leistung
  frage: Was ist Leistung, wie hängt sie mit Kraft und Geschwindigkeit zusammen, und was ist eine Kilowattstunde?
  antwort: |
    Leistung ist Arbeit pro Zeit, $P = W/t$, mit der Einheit Watt. Bewegt eine Kraft einen Körper mit konstanter
    Geschwindigkeit in Kraftrichtung, gilt $P = F v$, denn $W/t = F s/t = F v$. Die Kilowattstunde ist eine
    Energieeinheit: die Energie, die bei $1\,\text{kW}$ in einer Stunde umgesetzt wird, $3{,}6\cdot 10^6\,\text{J}$.
  kernpunkte: ["P = W/t, Watt", "P = F·v bei konstanter Geschwindigkeit", "1 kWh = 3,6·10⁶ J ist Energie"]
- id: p4-k-wirkungsgrad
  frage: Was ist der Wirkungsgrad, und warum ist er immer kleiner als eins?
  antwort: |
    Der Wirkungsgrad ist das Verhältnis von nutzbarer zu zugeführter Energie oder Leistung, $\eta = E_{\text{nutz}}/E_{\text{zu}}$.
    Er ist immer kleiner als eins, weil bei jeder realen Umwandlung ein Teil durch Reibung, elektrischen Widerstand oder
    Abgase zu Wärme wird. Ein Wert von eins oder mehr wäre ein Perpetuum mobile. Bei hintereinandergeschalteten Wandlern
    multiplizieren sich die Wirkungsgrade.
  kernpunkte: ["Nutzen durch Aufwand", "Verluste als Wärme", "Ketten: Wirkungsgrade multiplizieren"]
- id: p4-k-impuls
  frage: Was ist der Impuls, und worin unterscheidet er sich von der kinetischen Energie? Gib ein Gegenbeispiel.
  antwort: |
    Der Impuls ist $\vec p = m\vec v$, ein Vektor in Richtung der Geschwindigkeit, mit der Einheit $\text{kg}\cdot\text{m/s}$.
    Die kinetische Energie $\tfrac12 m v^2$ ist ein Skalar. Zwei gleiche Kugeln, die gleich schnell aufeinander zufliegen,
    haben zusammen den Impuls null, aber eine kinetische Energie größer als null. Impulse können sich aufheben, Energien nicht.
  kernpunkte: ["p = m·v ist ein Vektor", "Energie ist ein Skalar", "Gegenbeispiel: Gesamtimpuls null, Energie nicht null"]
- id: p4-k-airbag
  frage: Warum schützen Airbag und Knautschzone?
  antwort: |
    Beim Aufprall muss der Impuls des Körpers auf null gebracht werden, die Impulsänderung ist also vorgegeben. Nach
    dem Kraftstoß gilt $\bar F = \Delta p/\Delta t$. Airbag und Knautschzone verlängern die Bremszeit, deshalb sinkt die
    Kraft auf den Körper. Zehnfache Bremszeit bedeutet ein Zehntel der Kraft.
  kernpunkte: ["Δp ist vorgegeben", "F = Δp/Δt", "längere Bremszeit, kleinere Kraft"]
- id: p4-k-impulserhaltung
  frage: Formuliere den Impulserhaltungssatz und leite ihn aus dem dritten Newtonschen Axiom her.
  antwort: |
    In einem abgeschlossenen System bleibt der Gesamtimpuls konstant. Herleitung: Zwei Körper üben nach dem dritten
    Newtonschen Axiom in jedem Moment entgegengesetzt gleiche Kräfte aufeinander aus, und zwar gleich lange. Ihre
    Kraftstöße und damit ihre Impulsänderungen sind daher entgegengesetzt gleich und heben sich auf. Der Satz gilt auch
    bei Reibung zwischen den Körpern, beim Zusammenkleben und bei Explosionen.
  kernpunkte: ["Gesamtimpuls konstant ohne äußere Kräfte", "actio gleich reactio, gleiche Zeit", "Impulsänderungen heben sich auf"]
- id: p4-k-stoesse
  frage: Was unterscheidet den elastischen vom unelastischen Stoß? Was passiert bei zwei gleichen Billardkugeln?
  antwort: |
    Bei jedem Stoß bleibt der Impuls erhalten. Beim vollkommen elastischen Stoß bleibt zusätzlich die kinetische Energie
    erhalten. Beim vollkommen unelastischen Stoß haften die Körper zusammen, und ein Teil der kinetischen Energie wird zu
    Verformung und Wärme. Trifft eine Billardkugel zentral und elastisch eine gleich schwere ruhende Kugel, tauschen sie die
    Geschwindigkeiten: Die stoßende bleibt liegen, die gestoßene rollt mit der ganzen Geschwindigkeit weiter.
  kernpunkte: ["Impuls immer erhalten", "elastisch: auch Energie", "unelastisch: gemeinsame Geschwindigkeit, Energieverlust", "gleiche Massen tauschen Geschwindigkeiten"]
- id: p4-k-welcher
  frage: Wie entscheidest du, ob Energie- oder Impulserhaltung gilt? Erkläre es am ballistischen Pendel.
  antwort: |
    Ich stelle zwei Fragen. Erstens: Wirkt eine äußere Kraft, die den Impuls ändert? Wenn nein, gilt die Impulserhaltung.
    Zweitens: Wird mechanische Energie in Wärme, Verformung oder andere Formen umgewandelt? Wenn nein, gilt die Erhaltung
    der mechanischen Energie. Beim ballistischen Pendel bleibt das Geschoss stecken, beim Einschlag gilt deshalb nur der
    Impuls. Beim anschließenden Hochschwingen verrichtet nur die Gewichtskraft Arbeit, dort gilt die Energieerhaltung.
  kernpunkte: ["Prüffrage äußere Kraft → Impuls", "Prüffrage Umwandlung → Energie", "Phasen trennen: Stoß mit Impuls, Schwingen mit Energie"]
- id: p4-k-rakete
  frage: Wie kann eine Rakete im Vakuum beschleunigen? Verbinde die Antwort mit dem Kapitel Dynamik.
  antwort: |
    Die Rakete stößt Gas mit hoher Geschwindigkeit nach hinten aus. Rakete und Gas bilden ein abgeschlossenes System, dessen
    Gesamtimpuls erhalten bleibt. Bekommt das Gas Impuls nach hinten, bekommt die Rakete gleich viel nach vorn. Nach dem
    Grundgesetz in Impulsform, $F = \Delta p/\Delta t$, ist das eine Schubkraft $F = \mu w$. Dabei ist $\mu$ die Gasmasse, die pro Sekunde ausgestoßen wird (in kg/s), und $w$ die
    Geschwindigkeit des Gases relativ zur Rakete. Luft braucht die Rakete dafür nicht.
  kernpunkte: ["Rückstoß am eigenen Gas", "Impulserhaltung im System Rakete und Gas", "Schub F = μ·w aus F = Δp/Δt"]
```
