---
nummer: 7
titel: Analytische Geometrie
kurz: Geraden, Ebenen, Kreise und Kugeln als Gleichungen. Lagebeziehungen, Schnittpunkte, Winkel, Abstände, Tangenten und Schnittkreise, dazu Kegelschnitte als Vertiefung.
teil: A
stunden: 16
pruefungsgewicht: 3
voraussetzungen: [zahlen, gleichungen, lgs-matrizen, trigonometrie, vektoren]
lernziele:
  - Geraden in der Ebene in Parameterform, Normalvektorform, allgemeiner Form und Hauptform aufstellen, zwischen den Formen umrechnen und mit der Punktprobe entscheiden, ob ein Punkt auf der Geraden liegt
  - die Lage zweier Geraden in der Ebene bestimmen, Schnittpunkt und Schnittwinkel berechnen und einen Richtungsvektor gezielt so wählen und normieren, dass eine Gerade parallel oder normal zu einer gegebenen ist
  - den Abstand eines Punktes von einer Geraden in der Ebene mit der Hesseschen Normalform und über den Lotfußpunkt berechnen, auch Spiegelpunkte und Abstände paralleler Geraden
  - zwei Geraden im Raum begründet als identisch, echt parallel, schneidend oder windschief einordnen und Schnittpunkt und Winkel berechnen
  - Ebenen aus Punkten und Richtungen in Parameterform, Normalvektorform und Koordinatenform aufstellen, zwischen den Formen umrechnen und mit Spurpunkten skizzieren
  - die Lage von Gerade und Ebene sowie von zwei Ebenen bestimmen, Durchstoßpunkt, Schnittgerade und Winkel berechnen und lineare Gleichungssysteme in drei Variablen geometrisch deuten
  - Abstände im Raum zwischen Punkt und Ebene, Punkt und Gerade sowie parallelen Ebenen berechnen und Lotfußpunkte und Spiegelpunkte bestimmen
  - aus einer Kreisgleichung mit quadratischer Ergänzung Mittelpunkt und Radius bestimmen, die Lage von Punkt und Gerade zum Kreis entscheiden und Tangenten (auch von einem äußeren Punkt) sowie Schnittpunkte zweier Kreise berechnen
  - Kugelgleichungen auswerten, Tangentialebenen und Schnittkreise von Kugel und Ebene berechnen und Gleichungen wie die eines Zylinders im Raum deuten
  - (Vertiefung) Ellipse, Hyperbel und Parabel an ihrer Gleichung erkennen, ihre Kenngrößen ablesen und Kurven in Parameterdarstellung zeichnen
---

Die **analytische Geometrie** beschreibt geometrische Figuren mit Zahlen und Gleichungen. Eine Gerade, eine
Ebene oder ein Kreis wird zu einer Gleichung. Ein Punkt gehört genau dann zur Figur, wenn seine Koordinaten die
Gleichung erfüllen. Fragen wie „Schneiden sich diese beiden Wege?“ oder „Wie weit ist dieser Punkt von der Wand
entfernt?“ werden so zu Rechenaufgaben.

Ein Bild aus dem Alltag hilft. Ein Navigationsgerät „sieht“ keine Straßen. Es kennt nur Koordinaten und
Gleichungen. Trotzdem kann es sagen, wo sich zwei Straßen kreuzen und wie weit du von deinem Ziel entfernt
bist. Genau diese Übersetzung zwischen Bild und Rechnung lernst du hier.

Du brauchst dafür zwei Werkzeugkisten aus früheren Kapiteln. Die erste sind **Vektoren** aus
[Kapitel 6](/lernen/mathe3/vektoren): Pfeile, mit denen man rechnen kann, dazu das Skalarprodukt und das
Kreuzprodukt. Die zweite sind **lineare Gleichungssysteme** aus [Kapitel 3](/lernen/mathe3/lgs-matrizen).
Fast jede Aufgabe dieses Kapitels endet bei einem dieser beiden Werkzeuge.

### Was in der Prüfung vorkommt

Analytische Geometrie kommt in allen drei Musterprüfungen vor:

- **Schranz-Kirlinger, Aufgabe 2.2:** Eine Gerade ist in Parameterform mit unbekanntem Richtungsvektor gegeben,
  eine zweite als lineare Gleichung $ax + by = c$. Du sollst den Richtungsvektor so wählen, dass die Geraden
  parallel sind, und so, dass sie aufeinander normal stehen. Danach sollst du ihn normieren.
- **Winkler, Aufgabe 4:** Was beschreibt eine Kreisgleichung, wenn man sie im Raum liest? Zu einer gegebenen
  Ebene sollst du eine zweite Ebene angeben, die sie in einer vorgegebenen Geraden schneidet, und eine, die sie
  gar nicht schneidet. Zum Schluss suchst du den Punkt der Ebene, der einem gegebenen Punkt am nächsten liegt,
  und seinen Abstand.
- **Schranz-Kirlinger, Aufgabe 1.2** und **Karigl, Aufgabe 1:** Ein lineares Gleichungssystem in drei
  Variablen soll geometrisch gedeutet werden. Jede Gleichung ist dabei eine Ebene im Raum.

Alle diese Aufgabentypen übst du in diesem Kapitel an **abgewandelten Varianten mit anderen Zahlen**. Die
Originale sind für die [Prüfungssimulationen](/lernen/mathe3/pruefung) reserviert. Dort kannst du ehrlich
testen, ob du sie ohne Vorlage lösen kannst.

### Die vier großen Stolpersteine

Vier Gedanken machen in diesem Kapitel fast allen Lernenden Mühe. Jeder bekommt eine eigene, ausführliche
Erklärung, sobald er gebraucht wird:

1. **Ortsvektor und Richtungsvektor sind verschiedene Dinge.** Der eine sagt, *wo* etwas ist. Der andere sagt,
   *in welche Richtung* es geht. Das klärt
   [7.1 Geraden in der Ebene: die Parameterform](/lernen/mathe3/analytische-geometrie/geraden-in-der-ebene-die-parameterform).
2. **Dieselbe Gerade hat viele verschiedene Parameterformen.** Zwei Gleichungen mit verschiedenen Zahlen
   können also dieselbe Gerade beschreiben. Auch das klärt Lektion 7.1.
3. **Windschief ist nicht dasselbe wie parallel.** Im Raum können zwei Geraden aneinander vorbeilaufen, ohne
   parallel zu sein. Das klärt
   [7.5 Geraden im Raum](/lernen/mathe3/analytische-geometrie/geraden-im-raum-parallel-schneidend-oder-windschief).
4. **Die Zahlen vor $x$, $y$ und $z$ bilden einen Normalvektor.** Ein Normalvektor steht senkrecht auf der Figur.
   Das ist der rote Faden des ganzen Kapitels. Er beginnt in
   [7.2 Normalvektorform, allgemeine Form und Steigung](/lernen/mathe3/analytische-geometrie/normalvektorform-allgemeine-form-und-steigung)
   und kehrt bei Ebenen, Abständen, Tangenten und Kugeln immer wieder.

:::vorwissen
Du brauchst aus früheren Kapiteln vor allem diese Dinge:

- **Vektoren** in der Ebene und im Raum: den Vektor zwischen zwei Punkten, den Betrag (die Länge), das
  Skalarprodukt mit dem Test auf „normal“ und das Kreuzprodukt. Alles steht in
  [Kapitel 6](/lernen/mathe3/vektoren).
- **Lineare Gleichungssysteme** mit zwei und drei Unbekannten aus
  [Kapitel 3](/lernen/mathe3/lgs-matrizen).
- **Quadratische Gleichungen** und die **quadratische Ergänzung** aus
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen). Damit
  findest du Mittelpunkt und Radius eines Kreises.
- **Winkel mit dem Taschenrechner** aus einem Kosinuswert bestimmen, aus
  [Kapitel 5](/lernen/mathe3/trigonometrie).
:::

### Eingangsdiagnose

Teste dich mit den folgenden sieben Kurzfragen. Wenn du bei einer Frage unsicher bist, wiederhole zuerst den
verlinkten Abschnitt. Jede Lücke von dort taucht in diesem Kapitel wieder auf, und es spart Zeit, sie vorher zu
schließen.

```aufgabe
id: ag-ein-vektor-zwischen-punkten
titel: Der Vektor von A nach B
art: check
niveau: 1
angabe: |
  Gegeben sind $A(2 \mid -1)$ und $B(5 \mid 3)$. Gib den Vektor $\overrightarrow{AB}$ an. Zum Nachlesen:
  [Kapitel 6, Vektoren](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten).
teile:
  - typ: vektor
    label: '$\overrightarrow{AB}$'
    loesung: ["3", "4"]
    fehler:
      - wert: ["-3", "-4"]
        meldung: Du hast „Anfang minus Ende“ gerechnet. Der Vektor von $A$ nach $B$ ist „Ende minus Anfang“, also $B - A$.
      - wert: ["7", "2"]
        meldung: Du hast die Koordinaten addiert. Der Verbindungsvektor entsteht durch Subtrahieren, $B - A$.
loesung: |
  Der Vektor von $A$ nach $B$ ist „Spitze minus Schaft“, also $\overrightarrow{AB} = B - A$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 5 - 2 \\ 3 - (-1) \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Probe: Von $A$ aus $3$ nach rechts und $4$ nach oben ergibt $(5 \mid 3) = B$.
```

```aufgabe
id: ag-ein-betrag
titel: Die Länge eines Vektors
art: check
niveau: 1
angabe: |
  Wie lang ist der Vektor $\vec v = \begin{pmatrix} 1 \\ -2 \\ 2 \end{pmatrix}$? Zum Nachlesen:
  [Kapitel 6, Vektoren](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor).
teile:
  - typ: zahl
    label: '$|\vec v|$'
    loesung: "sqrt(1 + 4 + 4)"
    fehler:
      - wert: "1"
        meldung: Du hast die Komponenten einfach addiert, $1 - 2 + 2 = 1$. Die Länge kommt aus dem Satz des Pythagoras. Quadriere jede Komponente, addiere und ziehe dann die Wurzel.
      - wert: "5"
        meldung: Du hast die Beträge der Komponenten addiert. Die Länge ist aber die Wurzel aus der Summe der **Quadrate**.
loesung: |
  Die Länge eines Vektors ist $|\vec v| = \sqrt{v_1^2 + v_2^2 + v_3^2}$. Das ist der Satz des Pythagoras, zweimal angewendet.
  ---
  $|\vec v| = \sqrt{1^2 + (-2)^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt 9 = 3$.
```

```aufgabe
id: ag-ein-normal
titel: Stehen zwei Vektoren normal aufeinander?
art: check
niveau: 1
angabe: |
  Stehen $\vec a = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$ und $\vec b = \begin{pmatrix} 4 \\ 6 \end{pmatrix}$ normal (also im rechten
  Winkel) aufeinander? Zum Nachlesen: [Kapitel 6, Vektoren](/lernen/mathe3/vektoren/orthogonalitaet-normalvektor-und-projektion).
teile:
  - typ: auswahl
    optionen:
      - 'Ja, denn $\vec a \cdot \vec b = 0$.'
      - 'Nein, denn $\vec a \cdot \vec b = 24$.'
      - 'Nein, denn die Vektoren sind nicht gleich lang.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Beim Skalarprodukt multiplizierst du die **passenden** Komponenten und addierst. Achte auf das Vorzeichen der zweiten Komponente von $\vec a$.
      - wert: 2
        meldung: Ob zwei Vektoren normal aufeinander stehen, hängt nicht von ihrer Länge ab. Entscheidend ist nur das Skalarprodukt.
loesung: |
  Zwei Vektoren (beide nicht der Nullvektor) stehen genau dann normal aufeinander, wenn ihr Skalarprodukt $0$ ist.
  ---
  $\vec a\cdot\vec b = 3\cdot 4 + (-2)\cdot 6 = 12 - 12 = 0$. Die Vektoren stehen also normal aufeinander.
```

```aufgabe
id: ag-ein-kreuzprodukt
titel: Das Kreuzprodukt berechnen
art: check
niveau: 1
angabe: |
  Berechne $\begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} \times \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$. Zum Nachlesen:
  [Kapitel 6, Vektoren](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen).
teile:
  - typ: vektor
    loesung: ["-2", "1", "1"]
    fehler:
      - wert: ["2", "-1", "-1"]
        meldung: Das ist das Kreuzprodukt in umgekehrter Reihenfolge. Beim Vertauschen der Faktoren dreht sich das Vorzeichen jeder Komponente um.
      - wert: ["0", "0", "-2"]
        meldung: Du hast komponentenweise multipliziert. Das Kreuzprodukt verknüpft immer die **anderen** beiden Komponenten über Kreuz.
loesung: |
  Formel: $\vec a\times\vec b = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}$.
  ---
  $\begin{pmatrix} 0\cdot(-1) - 2\cdot 1 \\ 2\cdot 0 - 1\cdot(-1) \\ 1\cdot 1 - 0\cdot 0 \end{pmatrix} = \begin{pmatrix} -2 \\ 1 \\ 1 \end{pmatrix}$. Probe: Das Ergebnis steht normal auf beiden Vektoren, denn $-2 + 0 + 2 = 0$ und $0 + 1 - 1 = 0$.
```

```aufgabe
id: ag-ein-lgs
titel: Ein Gleichungssystem mit zwei Unbekannten
art: check
niveau: 1
angabe: |
  Löse das Gleichungssystem $2x + y = 5$ und $x - y = 1$. Gib die Lösung als Punkt $(x \mid y)$ an. Zum Nachlesen:
  [Kapitel 3, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
teile:
  - typ: vektor
    namen: ["x", "y"]
    loesung: ["2", "1"]
    fehler:
      - wert: ["1", "2"]
        meldung: Die Zahlen stimmen, aber $x$ und $y$ sind vertauscht. Setze zur Probe ein. Für $x = 1$ und $y = 2$ gilt $x - y = -1$, nicht $1$.
loesung: |
  Additionsverfahren: Wir addieren die beiden Gleichungen, weil sich dann $y$ und $-y$ aufheben. Es bleibt $3x = 6$, also $x = 2$.
  ---
  Einsetzen in $x - y = 1$: $2 - y = 1$, also $y = 1$. Probe in der ersten Gleichung: $2\cdot 2 + 1 = 5$.
```

```aufgabe
id: ag-ein-quadratische-ergaenzung
titel: Quadratische Ergänzung
art: check
niveau: 1
angabe: |
  Es gilt $x^2 - 6x + 2 = (x - 3)^2 + c$. Welche Zahl ist $c$? Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen).
teile:
  - typ: zahl
    label: '$c$'
    loesung: "2 - 9"
    fehler:
      - wert: "11"
        meldung: Du hast die $9$ addiert statt abgezogen. Das Quadrat $(x - 3)^2 = x^2 - 6x + 9$ enthält schon $+9$. Damit nichts verändert wird, musst du die $9$ wieder abziehen.
      - wert: "2"
        meldung: Das Quadrat $(x - 3)^2$ liefert beim Ausmultiplizieren zusätzlich $+9$. Diese $9$ musst du ausgleichen.
loesung: |
  Ausmultiplizieren: $(x - 3)^2 = x^2 - 6x + 9$. Darin steckt eine $9$, die im ursprünglichen Term nicht vorkommt.
  ---
  Also $x^2 - 6x + 2 = (x^2 - 6x + 9) - 9 + 2 = (x - 3)^2 - 7$. Es ist $c = -7$.
```

```aufgabe
id: ag-ein-winkel
titel: Einen Winkel aus dem Kosinus bestimmen
art: check
niveau: 1
angabe: |
  Wie groß ist der Winkel zwischen $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ in Grad? Zum Nachlesen:
  [Kapitel 6, Vektoren](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren) (Winkelformel) und [Kapitel 5, Winkel in Grad und im Bogenmaß](/lernen/mathe3/trigonometrie/winkel-in-grad-und-im-bogenmass).
teile:
  - typ: zahl
    einheit: "°"
    loesung: "45"
    fehler:
      - wert: "pi/4"
        meldung: Das ist der richtige Winkel, aber im Bogenmaß. Stelle den Taschenrechner auf Grad (DEG) oder rechne um.
      - wert: "inGrad(acos(1/2))"
        meldung: Im Nenner steht das Produkt der **Längen**. Die Länge von $(1, 1)$ ist $\sqrt 2$, nicht $2$.
loesung: |
  Winkelformel: $\cos\varphi = \dfrac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$.
  ---
  $\vec a\cdot\vec b = 1$, $|\vec a| = 1$ und $|\vec b| = \sqrt 2$. Also $\cos\varphi = \frac{1}{\sqrt 2} \approx 0{,}7071$ und $\varphi = 45°$.
```

**So ist das Kapitel aufgebaut.** Zuerst geht es um Geraden in der Ebene: ihre Formen, ihre Lage zueinander
und den Abstand eines Punktes (Lektionen 7.1 bis 7.4). Dann gehst du in den Raum: Geraden, Ebenen, ihre
Schnitte, Winkel und Abstände (7.5 bis 7.9). Danach kommen Kreise, Tangenten und Kugeln (7.10 bis 7.13). Die
Lektion 7.14 über Ellipse, Hyperbel und Parabel ist eine **Vertiefung**. Sie geht über den Stoff der
Studienberechtigungsprüfung hinaus, gehört aber zum Schulstoff der Oberstufe. Am Ende stehen eine gemischte
Wiederholung, Prüfungsaufgaben, eine Zusammenfassung und Karten für die mündliche Prüfung.

## Geraden in der Ebene: die Parameterform

```aufgabe
id: ag-param-vorwissen
titel: Mit einem Vektor weitergehen
art: check
niveau: 1
angabe: |
  Du stehst im Punkt $P(1 \mid -2)$ und gehst zweimal hintereinander den Vektor $\begin{pmatrix} 3 \\ 1 \end{pmatrix}$. In welchem Punkt
  kommst du an? Wenn du unsicher bist, wiederhole das Addieren von Punkt und Vektor in
  [Kapitel 6, Rechnen mit Vektoren](/lernen/mathe3/vektoren/rechnen-mit-vektoren-addition-vielfache-und-rechengesetze).
teile:
  - typ: vektor
    namen: ["x", "y"]
    loesung: ["7", "0"]
    fehler:
      - wert: ["6", "2"]
        meldung: Du hast nur $2\cdot\begin{pmatrix} 3 \\ 1 \end{pmatrix}$ ausgerechnet. Du startest aber nicht im Ursprung, sondern in $P$. Zähle die Koordinaten von $P$ dazu.
      - wert: ["4", "-1"]
        meldung: Das ist der Punkt nach **einem** Schritt. Gefragt sind zwei Schritte, also $P + 2\cdot\begin{pmatrix} 3 \\ 1 \end{pmatrix}$.
loesung: |
  Zweimal den Vektor gehen heißt, das Doppelte des Vektors zu $P$ zu addieren: $P + 2\cdot\begin{pmatrix} 3 \\ 1 \end{pmatrix}$.
  ---
  $\begin{pmatrix} 1 \\ -2 \end{pmatrix} + \begin{pmatrix} 6 \\ 2 \end{pmatrix} = \begin{pmatrix} 7 \\ 0 \end{pmatrix}$. Du landest im Punkt $(7 \mid 0)$.
```

Eine Gerade kennst du aus der Schule als Graph von $y = kx + d$. Diese Form hat aber zwei Schwächen. Sie
funktioniert nicht für senkrechte Geraden, und sie funktioniert überhaupt nicht im Raum. Wir lernen deshalb
zuerst eine Form, die überall funktioniert: die **Parameterform**. Sie beschreibt eine Gerade so, wie man
eine geradlinige Bewegung beschreibt.

### Eine Bewegung als Gleichung

:::beispiel[Ein Motorboot auf geradem Kurs]
Ein Motorboot startet um 9 Uhr im Punkt $P(2 \mid 1)$ auf einem See. Die Koordinaten sind in Kilometern
gemessen: $x$ nach Osten, $y$ nach Norden. Jede Stunde fährt das Boot $3$ km nach Osten und $2$ km nach
Norden, also den Vektor $\vec r = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$.

Wo ist das Boot $t$ Stunden nach dem Start? Es ist von $P$ aus $t$-mal den Vektor $\vec r$ gefahren. Also gilt
$$X = \begin{pmatrix} 2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 2 \end{pmatrix}.$$
Dabei ist $X$ der Ort des Bootes und $t$ die Zeit in Stunden. Wir setzen einige Zeiten ein:

| Zeit $t$ in h | Rechnung | Ort $X$ |
|---|---|---|
| $0$ | $(2 + 0 \mid 1 + 0)$ | $(2 \mid 1)$, der Startpunkt. |
| $1$ | $(2 + 3 \mid 1 + 2)$ | $(5 \mid 3)$ um 10 Uhr. |
| $2$ | $(2 + 6 \mid 1 + 4)$ | $(8 \mid 5)$ um 11 Uhr. |
| $0{,}5$ | $(2 + 1{,}5 \mid 1 + 1)$ | $(3{,}5 \mid 2)$ um halb zehn. |
| $-1$ | $(2 - 3 \mid 1 - 2)$ | $(-1 \mid -1)$ um 8 Uhr. |

Auch negative Zeiten sind erlaubt. Sie sagen, wo das Boot **vor** dem Start war, falls es schon vorher auf
diesem Kurs fuhr. Die Geschwindigkeit ist die Länge des Vektors:
$|\vec r| = \sqrt{3^2 + 2^2} = \sqrt{13} \approx 3{,}61$ km pro Stunde.
:::

Alle Orte, die das Boot für irgendein $t$ erreicht, liegen auf einer Geraden. Umgekehrt erreicht es jeden
Punkt dieser Geraden zu genau einer Zeit $t$. Die Gleichung beschreibt also die ganze Gerade.

```plot
x: [-2, 10]
y: [-2, 7]
gleich: true
graphen:
  - { f: "1 + 2/3*(x - 2)", label: "g", farbe: 0 }
vektoren:
  - { von: [0, 0], nach: [2, 1], label: "Ortsvektor von P", farbe: 3 }
  - { von: [2, 1], nach: [5, 3], label: "r", farbe: 1 }
  - { von: [5, 3], nach: [8, 5], label: "r", farbe: 1 }
punkte:
  - { x: 2, y: 1, label: "t = 0" }
  - { x: 5, y: 3, label: "t = 1" }
  - { x: 8, y: 5, label: "t = 2" }
  - { x: -1, y: -1, label: "t = −1" }
beschriftung: Die Bahn des Motorboots. Der violette Ortsvektor führt vom Ursprung zum Startpunkt P(2 | 1). Die orangen Pfeile sind der Richtungsvektor r = (3, 2), einmal für jede Stunde. Jeder Wert von t liefert einen Punkt der Geraden g.
```

### Die Parameterform allgemein

Was wir beim Boot gemacht haben, funktioniert für jede Gerade. Man braucht einen Punkt, an dem man startet,
und eine Richtung, in die man geht.

:::definition[Parameterform einer Geraden]
Eine Gerade $g$ durch den Punkt $P$ mit der Richtung $\vec r \neq \vec 0$ hat die **Parameterform**
$$g: X = P + t\cdot\vec r, \qquad t \in \R.$$
Dabei ist:
- $X$ ein beliebiger Punkt der Geraden. Man nennt ihn oft „laufenden Punkt“.
- $P$ der **Aufpunkt** (auch Stützpunkt): ein fester Punkt der Geraden.
- $\vec r$ der **Richtungsvektor**: Er gibt die Richtung der Geraden an.
- $t$ der **Parameter**, eine beliebige reelle Zahl. Das Wort kommt aus dem Griechischen und heißt ungefähr
  „Hilfsgröße“. $t \in \R$ liest man „$t$ ist Element von $\R$“, also: $t$ darf jede reelle Zahl sein.
:::

**Nichtbeispiele.** Die Gleichung $X = \begin{pmatrix} 2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 0 \\ 0 \end{pmatrix}$ ist
**keine** Gerade. Für jedes $t$ kommt derselbe Punkt $(2 \mid 1)$ heraus, man bewegt sich nicht vom Fleck.
Deshalb verlangt die Definition $\vec r \neq \vec 0$. Auch $X = P + t\cdot\vec r$ mit nur $t \ge 0$ ist keine
ganze Gerade. Sie beginnt in $P$ und läuft nur in eine Richtung. So etwas heißt **Strahl** oder Halbgerade.

```aufgabe
id: ag-param-check-negativ
titel: Was bedeutet ein negativer Parameter?
art: check
niveau: 1
angabe: |
  Beim Motorboot gilt $X = \begin{pmatrix} 2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ mit $t$ in Stunden ab 9 Uhr.
  Was beschreibt der Punkt für $t = -2$?
teile:
  - typ: auswahl
    optionen:
      - 'Den Ort, an dem das Boot um 7 Uhr war, also zwei Stunden vor dem Start.'
      - 'Nichts, denn negative Werte von $t$ sind verboten.'
      - 'Den Ort nach zwei Stunden, nur in Gegenrichtung gefahren.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In der Parameterform ist $t$ jede reelle Zahl. Negative Werte liefern die Punkte auf der anderen Seite des Aufpunkts. Beim Boot sind das die Orte vor dem Start.
      - wert: 2
        meldung: Das Boot fährt immer in Richtung $\vec r$. Ein negatives $t$ heißt nicht „umdrehen“, sondern „früher“. Der Punkt liegt dort, wo das Boot zwei Stunden vor 9 Uhr war.
loesung: |
  Der Parameter $t$ ist hier die Zeit ab 9 Uhr. Ein negativer Wert ist eine Zeit vor 9 Uhr.
  ---
  Für $t = -2$: $X = (2 - 6 \mid 1 - 4) = (-4 \mid -3)$. Dort war das Boot um 7 Uhr, falls es schon so lange auf diesem Kurs fuhr.
```

### Ortsvektor und Richtungsvektor: zwei verschiedene Rollen

In der Parameterform stehen zwei Vektoren, die ganz verschiedene Aufgaben haben. Diese Stelle ist für fast
alle ungewohnt. Lies sie langsam.

- Der **Ortsvektor** eines Punktes $P$ ist der Pfeil vom Ursprung $O(0 \mid 0)$ zu $P$. Er hat dieselben
  Koordinaten wie der Punkt. Er beantwortet die Frage **„Wo?“**. Er ist an den Ursprung gebunden.
- Ein **Richtungsvektor** ist ein Pfeil, der eine Bewegung beschreibt: „so weit nach rechts, so weit nach
  oben“. Er beantwortet die Frage **„Wohin?“**. Man darf ihn an jeder beliebigen Stelle ansetzen.

Ein Vergleich aus dem Alltag: „Hausnummer 3“ ist eine Adresse, also ein Ort. „Drei Häuser weiter“ ist eine
Wegbeschreibung, also eine Bewegung. Dieselbe Zahl $3$ hat zwei verschiedene Bedeutungen. Genauso kann das
Zahlenpaar $(3, 2)$ einmal den Punkt $(3 \mid 2)$ meinen und einmal den Schritt „$3$ nach rechts, $2$ nach
oben“.

In $X = P + t\cdot\vec r$ steht $P$ für einen **Ort** (den Aufpunkt), und $\vec r$ für eine **Bewegung**. Darum
wird nur $\vec r$ mit $t$ multipliziert: Man geht vom festen Ort aus ein Vielfaches des Schritts. Den Ort
selbst zu vervielfachen ergäbe keinen Sinn.

```aufgabe
id: ag-param-check-rollen
titel: Ort oder Bewegung?
art: check
niveau: 1
angabe: |
  Eine Gerade geht durch die Punkte $A(1 \mid 4)$ und $B(3 \mid 5)$. Welcher Vektor ist ein Richtungsvektor dieser Geraden?
teile:
  - typ: auswahl
    optionen:
      - '$\begin{pmatrix} 2 \\ 1 \end{pmatrix}$'
      - '$\begin{pmatrix} 3 \\ 5 \end{pmatrix}$'
      - '$\begin{pmatrix} 4 \\ 9 \end{pmatrix}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist der **Ortsvektor** von $B$, also ein Pfeil vom Ursprung zu $B$. Die Richtung der Geraden ist aber der Schritt von $A$ nach $B$.
      - wert: 2
        meldung: Das ist $A + B$. Einen Richtungsvektor erhältst du, indem du die Punkte **subtrahierst**.
loesung: |
  Die Gerade zeigt von $A$ nach $B$. Ihre Richtung ist also der Verbindungsvektor $\overrightarrow{AB} = B - A$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 3 - 1 \\ 5 - 4 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$.
```

:::achtung[Ortsvektor statt Richtungsvektor]
Gesucht ist die Gerade durch $A(1 \mid 4)$ und $B(3 \mid 5)$. Eine typische Fehlrechnung lautet:
$$X = \begin{pmatrix} 1 \\ 4 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 5 \end{pmatrix}. \quad\text{(falsch)}$$
Hier wurde der Ortsvektor von $B$ als Richtung genommen. Die Probe deckt den Fehler auf. Für $t = 1$ erhält man
$(1 + 3 \mid 4 + 5) = (4 \mid 9)$, und das ist nicht $B$. Richtig ist der Schritt von $A$ nach $B$:
$\overrightarrow{AB} = B - A = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$. Dann liefert $t = 1$ genau $(3 \mid 5) = B$.
:::

### Gerade durch zwei Punkte, Strecke und Mittelpunkt

Zwei verschiedene Punkte $A$ und $B$ legen genau eine Gerade fest. Als Aufpunkt nimmt man $A$ und als Richtung
den Schritt von $A$ nach $B$:
$$g: X = A + t\cdot\overrightarrow{AB}.$$
Für $t = 0$ ist man in $A$, für $t = 1$ in $B$. Die Werte $0 \le t \le 1$ liefern genau die **Strecke** $AB$, und
$t = \frac12$ liefert ihren **Mittelpunkt**.

:::beispiel[Gerade und Strecke durch zwei Punkte]
Gegeben sind $A(-2 \mid 3)$ und $B(4 \mid 0)$.

1. **Richtung:** $\overrightarrow{AB} = B - A = \begin{pmatrix} 4 - (-2) \\ 0 - 3 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \end{pmatrix}$.
2. **Parameterform:** $g: X = \begin{pmatrix} -2 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 6 \\ -3 \end{pmatrix}$.
3. **Mittelpunkt:** Wir setzen $t = \frac12$ ein, weil man dann den halben Weg von $A$ nach $B$ gegangen ist:
   $M = (-2 + 3 \mid 3 - 1{,}5) = (1 \mid 1{,}5)$.
4. **Probe:** $t = 1$ liefert $(-2 + 6 \mid 3 - 3) = (4 \mid 0) = B$.

Man darf den Richtungsvektor auch kürzen, etwa auf $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$, weil das dieselbe Richtung
ist. Dann beschreibt die Gleichung dieselbe Gerade. Nur liegt $B$ dann bei $t = 3$ und nicht mehr bei $t = 1$.
:::

### Die Punktprobe: Liegt ein Punkt auf der Geraden?

Ein Punkt $Q$ liegt genau dann auf $g$, wenn es **ein einziges** $t$ gibt, das $Q$ liefert. Man setzt $Q$ für $X$
ein und löst **jede** Koordinatengleichung nach $t$ auf. Kommt überall derselbe Wert heraus, liegt $Q$ auf $g$.
Kommen verschiedene Werte heraus, liegt $Q$ nicht auf $g$.

:::beispiel[Zwei Punktproben]
Wir nehmen die Gerade aus dem vorigen Beispiel, $g: X = \begin{pmatrix} -2 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 6 \\ -3 \end{pmatrix}$.

**Punkt $Q(10 \mid -3)$:** Die $x$-Koordinate verlangt $-2 + 6t = 10$, also $6t = 12$ und $t = 2$. Die
$y$-Koordinate verlangt $3 - 3t = -3$, also $-3t = -6$ und $t = 2$. Beide Gleichungen liefern $t = 2$. Also
liegt $Q$ auf $g$.

**Punkt $R(7 \mid -1)$:** Die $x$-Koordinate verlangt $-2 + 6t = 7$, also $t = \frac96 = 1{,}5$. Die
$y$-Koordinate verlangt $3 - 3t = -1$, also $t = \frac43$. Die beiden Werte sind verschieden. Es gibt kein $t$,
das beide Koordinaten zugleich liefert. Also liegt $R$ **nicht** auf $g$.
:::

:::achtung[Nur eine Koordinate geprüft]
Liegt $Q(7 \mid 3)$ auf $g: X = \begin{pmatrix} 1 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 1 \end{pmatrix}$? Eine typische
Fehlrechnung: „$1 + 2t = 7$ ergibt $t = 3$, also liegt $Q$ auf $g$.“ Hier wurde nur die $x$-Koordinate geprüft.
Für $t = 3$ ist die $y$-Koordinate aber $1 + 3 = 4$, nicht $3$. Der Punkt $(7 \mid 4)$ liegt auf $g$, der Punkt
$(7 \mid 3)$ nicht. Ein $t$ aus einer Koordinate ist erst ein Kandidat. Er muss in **allen** Koordinaten passen.
:::

### Dieselbe Gerade, viele Parameterformen

Eine Gerade hat nicht nur eine Parameterform, sondern unendlich viele. Das liegt an zwei Freiheiten:

1. **Jeder Punkt der Geraden taugt als Aufpunkt.** Man kann die Bewegung an jeder Stelle der Bahn beginnen
   lassen.
2. **Jedes Vielfache $\lambda\cdot\vec r$ mit $\lambda \neq 0$ taugt als Richtungsvektor.** Das griechische
   $\lambda$ (Lambda) ist hier einfach eine Zahl. Ein Vielfaches zeigt in dieselbe oder in die genau
   entgegengesetzte Richtung, und beides gibt dieselbe Gerade. Man fährt nur schneller, langsamer oder
   rückwärts.

Ein Vergleich: Eine Autobahn hat Kilometertafeln. Ob man die Zählung in Wien oder in Linz beginnt und ob man in
Kilometern oder in Meilen zählt, ändert die Zahlen auf den Tafeln. Die Straße selbst bleibt dieselbe.

:::beispiel[Zwei Gleichungen, eine Gerade]
Beschreiben $g: X = \begin{pmatrix} -2 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 6 \\ -3 \end{pmatrix}$ und
$h: X = \begin{pmatrix} 2 \\ 1 \end{pmatrix} + s\cdot\begin{pmatrix} -4 \\ 2 \end{pmatrix}$ dieselbe Gerade?

1. **Richtungen vergleichen:** $\begin{pmatrix} -4 \\ 2 \end{pmatrix} = -\frac23\cdot\begin{pmatrix} 6 \\ -3 \end{pmatrix}$. Die Richtungsvektoren
   sind Vielfache voneinander, die Geraden sind also parallel oder gleich.
2. **Punktprobe mit dem Aufpunkt von $h$ in $g$:** $-2 + 6t = 2$ ergibt $t = \frac23$, und $3 - 3t = 1$ ergibt
   ebenfalls $t = \frac23$. Der Punkt $(2 \mid 1)$ liegt also auf $g$.

Beide Bedingungen sind erfüllt. Die Gleichungen beschreiben **dieselbe** Gerade, obwohl keine einzige Zahl
übereinstimmt.
:::

:::achtung[Zahlen vergleichen statt Geraden vergleichen]
Eine typische Fehlüberlegung: „$X = \begin{pmatrix} 0 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ und
$X = \begin{pmatrix} 2 \\ 5 \end{pmatrix} + s\cdot\begin{pmatrix} -2 \\ -4 \end{pmatrix}$ haben verschiedene Zahlen, also sind es
verschiedene Geraden.“ Das stimmt nicht. Die Richtung $\begin{pmatrix} -2 \\ -4 \end{pmatrix}$ ist $-2$ mal $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
Und der Punkt $(2 \mid 5)$ liegt auf der ersten Geraden, nämlich bei $t = 2$: $(0 + 2 \mid 1 + 4) = (2 \mid 5)$. Es ist
also dieselbe Gerade. Vergleiche immer **Richtung und einen Punkt**, nie die Zahlen.
:::

:::merke[Rezepte zur Parameterform]
1. **Gerade durch $A$ und $B$:** $X = A + t\cdot\overrightarrow{AB}$ mit $\overrightarrow{AB} = B - A$. Probe: $t = 1$ liefert $B$.
2. **Punktprobe:** $Q$ für $X$ einsetzen, **jede** Koordinate nach $t$ auflösen. Überall dasselbe $t$ heißt:
   $Q$ liegt auf $g$.
3. **Dieselbe Gerade?** Richtungsvektoren sind Vielfache voneinander **und** der Aufpunkt der einen Geraden
   besteht die Punktprobe in der anderen.
:::

```reflexion
frage: Warum darf man bei einer Geraden jeden ihrer Punkte als Aufpunkt nehmen, aber nicht jeden beliebigen Punkt der Ebene?
antwort: |
  Der Aufpunkt ist der Ort, an dem die Bewegung bei $t = 0$ ist. Liegt er auf der Geraden, dann erreicht man von
  ihm aus mit Vielfachen von $\vec r$ wieder genau die Punkte dieser Geraden, nur mit anderen Werten von $t$.
  Liegt er nicht auf der Geraden, dann ist schon der Punkt für $t = 0$ kein Punkt der Geraden. Man erhält eine
  parallele, aber verschobene Gerade. Die Wahl des Aufpunkts ist also frei, solange er selbst auf der Geraden liegt.
```

```aufgabe
id: ag-param-punkte-berechnen
titel: Punkte einer Geraden berechnen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $g: X = \begin{pmatrix} 4 \\ -1 \end{pmatrix} + t\cdot\begin{pmatrix} -2 \\ 3 \end{pmatrix}$. Berechne die Punkte
  von $g$ für $t = 3$ und für $t = -2$.
teile:
  - typ: vektor
    label: 'Punkt für $t = 3$'
    namen: ["x", "y"]
    loesung: ["-2", "8"]
    fehler:
      - wert: ["-6", "9"]
        meldung: Das ist nur $3\cdot\vec r$. Der Aufpunkt fehlt. Du startest in $(4 \mid -1)$ und gehst von dort aus dreimal $\vec r$.
      - wert: ["2", "2"]
        meldung: Das ist der Punkt für $t = 1$. Multipliziere den Richtungsvektor mit $3$, bevor du ihn addierst.
  - typ: vektor
    label: 'Punkt für $t = -2$'
    namen: ["x", "y"]
    loesung: ["8", "-7"]
    fehler:
      - wert: ["0", "5"]
        meldung: Das ist der Punkt für $t = +2$. Bei $t = -2$ drehen sich die Vorzeichen von $t\cdot\vec r$ um, also $-2\cdot\begin{pmatrix} -2 \\ 3 \end{pmatrix} = \begin{pmatrix} 4 \\ -6 \end{pmatrix}$.
hinweise:
  - 'Setze den Wert für $t$ ein: Erst $t\cdot\vec r$ ausrechnen, dann zum Aufpunkt addieren.'
loesung: |
  **Ansatz:** Jeder Wert von $t$ liefert einen Punkt, indem man $t\cdot\vec r$ zum Aufpunkt addiert.
  ---
  $t = 3$: $3\cdot\begin{pmatrix} -2 \\ 3 \end{pmatrix} = \begin{pmatrix} -6 \\ 9 \end{pmatrix}$, dazu der Aufpunkt: $(4 - 6 \mid -1 + 9) = (-2 \mid 8)$.
  ---
  $t = -2$: $-2\cdot\begin{pmatrix} -2 \\ 3 \end{pmatrix} = \begin{pmatrix} 4 \\ -6 \end{pmatrix}$, dazu der Aufpunkt: $(4 + 4 \mid -1 - 6) = (8 \mid -7)$. Die beiden Punkte liegen auf verschiedenen Seiten des Aufpunkts, weil die Vorzeichen von $t$ verschieden sind.
```

```aufgabe
id: ag-punktprobe
titel: Punktprobe
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Welche Punkte liegen auf $g: X = \begin{pmatrix} 3 \\ -2 \end{pmatrix} + t\cdot\begin{pmatrix} -1 \\ 2 \end{pmatrix}$? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$P(1 \mid 2)$'
      - '$Q(0 \mid 3)$'
      - '$R(5 \mid -6)$'
      - '$S(3{,}5 \mid -3)$'
      - '$T(-1 \mid 5)$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: Prüfe bei $Q$ auch die $y$-Koordinate. Aus $x$ folgt $t = 3$, aber dann ist $y = -2 + 6 = 4$ und nicht $3$.
      - wert: [0, 2]
        meldung: Auch $S$ liegt auf $g$. Der Parameter darf eine Bruchzahl oder negativ sein, hier $t = -\frac12$.
      - wert: [0, 2, 3, 4]
        meldung: Prüfe bei $T$ auch die $y$-Koordinate. Aus $x$ folgt $t = 4$, aber dann ist $y = -2 + 8 = 6$ und nicht $5$.
hinweise:
  - Bestimme aus der $x$-Koordinate den Wert von $t$ und prüfe dann, ob die $y$-Koordinate mit diesem $t$ stimmt.
loesung: |
  **Ansatz:** Aus der Gleichung $3 - t = x$ folgt $t = 3 - x$. Mit diesem $t$ muss auch $y = -2 + 2t$ stimmen.
  ---
  $P(1 \mid 2)$: $t = 2$, dann $y = -2 + 4 = 2$. Stimmt. $Q(0 \mid 3)$: $t = 3$, dann $y = 4 \neq 3$. Liegt nicht auf $g$.
  ---
  $R(5 \mid -6)$: $t = -2$, dann $y = -2 - 4 = -6$. Stimmt. $S(3{,}5 \mid -3)$: $t = -0{,}5$, dann $y = -2 - 1 = -3$. Stimmt. $T(-1 \mid 5)$: $t = 4$, dann $y = 6 \neq 5$. Liegt nicht auf $g$.
  ---
  Auf $g$ liegen also $P$, $R$ und $S$.
```

```aufgabe
id: ag-gerade-zwei-punkte-param
titel: Gerade durch zwei Punkte und Mittelpunkt
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Gerade $g$ geht durch $A(5 \mid -1)$ und $B(-1 \mid 3)$. Gib einen Richtungsvektor von $g$ an (jedes Vielfache
  ist richtig) und den Mittelpunkt $M$ der Strecke $AB$.
teile:
  - typ: vektor
    label: 'Richtungsvektor'
    vielfaches: true
    loesung: ["-6", "4"]
    fehler:
      - wert: ["-1", "3"]
        meldung: Das ist der Ortsvektor von $B$. Die Richtung der Geraden ist der Schritt von $A$ nach $B$, also $B - A$.
      - wert: ["4", "2"]
        meldung: Das ist $A + B$. Für die Richtung musst du subtrahieren.
  - typ: vektor
    label: 'Mittelpunkt $M$'
    namen: ["x", "y"]
    loesung: ["2", "1"]
    fehler:
      - wert: ["4", "2"]
        meldung: Das ist $A + B$. Der Mittelpunkt ist der halbe Weg von $A$ nach $B$. Du musst die Summe noch halbieren.
      - wert: ["-3", "2"]
        meldung: Das ist nur der halbe Verbindungsvektor. Er ist ein Schritt, kein Ort. Addiere ihn zum Startpunkt $A$.
hinweise:
  - 'Richtung: $\overrightarrow{AB} = B - A$. Mittelpunkt: In $X = A + t\cdot\overrightarrow{AB}$ den Wert $t = \frac12$ einsetzen.'
loesung: |
  **Ansatz:** Der Aufpunkt ist $A$, die Richtung der Schritt von $A$ nach $B$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} -1 - 5 \\ 3 - (-1) \end{pmatrix} = \begin{pmatrix} -6 \\ 4 \end{pmatrix}$. Gekürzt ist auch $\begin{pmatrix} -3 \\ 2 \end{pmatrix}$ ein Richtungsvektor.
  ---
  Mittelpunkt mit $t = \frac12$: $M = \left(5 + \tfrac12\cdot(-6) \,\middle|\, -1 + \tfrac12\cdot 4\right) = (2 \mid 1)$. Probe: $M$ ist auch der Mittelwert der Koordinaten, $\left(\frac{5 - 1}{2} \,\middle|\, \frac{-1 + 3}{2}\right) = (2 \mid 1)$.
```

```aufgabe
id: ag-param-dieselbe-gerade
titel: Dieselbe Gerade oder nicht?
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Gegeben ist $g: X = \begin{pmatrix} 1 \\ -2 \end{pmatrix} + t\cdot\begin{pmatrix} 4 \\ -6 \end{pmatrix}$. Entscheide jeweils mit Begründung,
  wie die Gerade zu $g$ liegt.

  $h: X = \begin{pmatrix} -3 \\ 4 \end{pmatrix} + s\cdot\begin{pmatrix} -2 \\ 3 \end{pmatrix}$ und
  $k: X = \begin{pmatrix} 5 \\ -8 \end{pmatrix} + u\cdot\begin{pmatrix} 2 \\ 3 \end{pmatrix}$.
teile:
  - typ: auswahl
    label: '$h$'
    optionen:
      - 'dieselbe Gerade wie $g$, weil die Richtungen Vielfache sind und $(-3 \mid 4)$ auf $g$ liegt'
      - 'eine andere Gerade, weil die Zahlen verschieden sind'
      - 'parallel zu $g$, aber eine andere Gerade, weil $(-3 \mid 4)$ nicht auf $g$ liegt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Verschiedene Zahlen beweisen nichts. Eine Gerade hat viele Parameterformen. Vergleiche die Richtung und mache eine Punktprobe.
      - wert: 2
        meldung: 'Mach die Punktprobe genau: $1 + 4t = -3$ ergibt $t = -1$, und $-2 - 6t = 4$ ergibt ebenfalls $t = -1$.'
  - typ: auswahl
    label: '$k$'
    optionen:
      - 'dieselbe Gerade wie $g$, weil $(5 \mid -8)$ auf $g$ liegt'
      - 'eine andere Gerade, weil die Richtung $(2, 3)$ kein Vielfaches von $(4, -6)$ ist'
      - 'parallel zu $g$'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ein gemeinsamer Punkt reicht nicht. Auch zwei Geraden, die sich schneiden, haben einen gemeinsamen Punkt. Es muss auch die Richtung passen.
      - wert: 2
        meldung: 'Parallel hieße: Die Richtungsvektoren sind Vielfache voneinander. Gibt es eine Zahl $\lambda$ mit $\lambda\cdot 4 = 2$ und zugleich $\lambda\cdot(-6) = 3$?'
hinweise:
  - Prüfe zuerst, ob der Richtungsvektor ein Vielfaches von $\begin{pmatrix} 4 \\ -6 \end{pmatrix}$ ist.
  - Wenn ja, setze den Aufpunkt in $g$ ein und prüfe, ob beide Koordinaten dasselbe $t$ liefern.
loesung: |
  **Ansatz:** Zwei Parameterformen beschreiben dieselbe Gerade, wenn die Richtungen Vielfache sind und der Aufpunkt der einen auf der anderen liegt.
  ---
  $h$: $\begin{pmatrix} -2 \\ 3 \end{pmatrix} = -\frac12\cdot\begin{pmatrix} 4 \\ -6 \end{pmatrix}$, die Richtung passt. Punktprobe mit $(-3 \mid 4)$: $1 + 4t = -3$ ergibt $t = -1$, und $-2 - 6t = 4$ ergibt $t = -1$. Also ist $h$ dieselbe Gerade wie $g$.
  ---
  $k$: Aus $\lambda\cdot 4 = 2$ folgt $\lambda = \frac12$, aber dann wäre $\lambda\cdot(-6) = -3 \neq 3$. Die Richtung ist kein Vielfaches. Also ist $k$ eine andere Gerade.
  ---
  Bemerkung: $(5 \mid -8)$ liegt tatsächlich auf $g$ (bei $t = 1$). Die Geraden $g$ und $k$ schneiden sich also in diesem Punkt, sind aber verschieden.
```

```aufgabe
id: ag-param-fehler-finden
titel: Wo steckt der Fehler?
niveau: 2
lernziel: 0
kompetenz: verstehen
angabe: |
  Lukas soll die Gerade durch $A(2 \mid 5)$ und $B(6 \mid 3)$ in Parameterform angeben. Er schreibt
  $$g: X = \begin{pmatrix} 2 \\ 5 \end{pmatrix} + t\cdot\begin{pmatrix} 6 \\ 3 \end{pmatrix}$$
  und sagt: „Für $t = 1$ komme ich nach $B$.“
teile:
  - typ: auswahl
    label: 'Was ist falsch?'
    optionen:
      - 'Er hat den Ortsvektor von $B$ als Richtungsvektor genommen. Für $t = 1$ landet er in $(8 \mid 8)$, nicht in $B$.'
      - 'Der Aufpunkt ist falsch. Man muss immer $B$ als Aufpunkt nehmen.'
      - 'Nichts. Jede Parameterform mit den Zahlen von $A$ und $B$ ist richtig.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Als Aufpunkt taugt jeder Punkt der Geraden, also auch $A$. Setze $t = 1$ ein und schau, wo Lukas wirklich landet.
      - wert: 2
        meldung: 'Mach die Probe mit $t = 1$: $(2 + 6 \mid 5 + 3) = (8 \mid 8)$. Das ist nicht $B$.'
  - typ: vektor
    label: 'Ein richtiger Richtungsvektor'
    vielfaches: true
    loesung: ["4", "-2"]
    fehler:
      - wert: ["6", "3"]
        meldung: Das ist genau Lukas' Fehler. Der Richtungsvektor ist der Schritt von $A$ nach $B$, also $B - A$.
      - wert: ["8", "8"]
        meldung: Das ist $A + B$. Für die Richtung musst du $B - A$ rechnen.
hinweise:
  - Setze $t = 1$ in Lukas' Gleichung ein. Kommt $B$ heraus?
  - Ein Richtungsvektor der Geraden durch $A$ und $B$ ist $\overrightarrow{AB} = B - A$.
loesung: |
  **Ansatz:** Eine Parameterform prüft man, indem man einen Wert für $t$ einsetzt und schaut, ob der erwartete Punkt herauskommt.
  ---
  Lukas' Gleichung mit $t = 1$: $(2 + 6 \mid 5 + 3) = (8 \mid 8)$. Das ist nicht $B(6 \mid 3)$. Er hat den Ortsvektor von $B$ als Richtung verwendet.
  ---
  Richtig ist $\overrightarrow{AB} = \begin{pmatrix} 6 - 2 \\ 3 - 5 \end{pmatrix} = \begin{pmatrix} 4 \\ -2 \end{pmatrix}$, also $g: X = \begin{pmatrix} 2 \\ 5 \end{pmatrix} + t\cdot\begin{pmatrix} 4 \\ -2 \end{pmatrix}$.
  ---
  Probe: $t = 1$ liefert $(2 + 4 \mid 5 - 2) = (6 \mid 3) = B$.
```

```aufgabe
id: ag-param-seilbahn
titel: Die Gondel einer Seilbahn
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Im Querschnitt einer Seilbahn misst $x$ die waagrechte Entfernung und $y$ die Höhe über dem Meer, beides in Metern.
  Die Talstation liegt bei $T(0 \mid 600)$, die Bergstation bei $B(1500 \mid 1400)$. Das Seil ist geradlinig gespannt.
  Die Lage der Gondel beschreibt $X = T + t\cdot\overrightarrow{TB}$ mit $0 \le t \le 1$.

  a) Wo ist die Gondel bei $t = 0{,}4$?

  b) Bei welchem Wert von $t$ ist die Gondel auf $1000$ m Höhe?

  c) Wie lang ist das Seil zwischen den Stationen? Runde auf ganze Meter.
teile:
  - typ: vektor
    label: 'a) Lage bei $t = 0{,}4$'
    namen: ["x", "y"]
    loesung: ["600", "920"]
    fehler:
      - wert: ["600", "1160"]
        meldung: Du hast $T + 0{,}4\cdot B$ gerechnet, also den Ortsvektor von $B$ als Richtung genommen. Die Richtung ist der Schritt $\overrightarrow{TB} = B - T$.
      - wert: ["600", "320"]
        meldung: Das ist nur $0{,}4\cdot\overrightarrow{TB}$, also ein Schritt. Die Gondel startet aber in $T$. Addiere den Aufpunkt.
  - typ: zahl
    label: 'b) $t$'
    loesung: "(1000 - 600)/800"
    fehler:
      - wert: "1000/1400"
        meldung: Du hast die Höhe $1000$ durch die Höhe der Bergstation geteilt. Die Gondel startet aber schon auf $600$ m. Löse $600 + 800t = 1000$.
  - typ: zahl
    label: 'c) Seillänge'
    einheit: m
    loesung: "sqrt(1500^2 + 800^2)"
    fehler:
      - wert: "1500 + 800"
        meldung: Waagrechter und senkrechter Abstand stehen im rechten Winkel zueinander. Die Seillänge ist die Hypotenuse, nicht die Summe.
      - wert: "sqrt(1500^2 + 1400^2)"
        meldung: Du hast mit dem Ortsvektor von $B$ gerechnet. Die Seillänge ist die Länge von $\overrightarrow{TB}$, also mit dem Höhenunterschied $800$ m.
hinweise:
  - 'Berechne zuerst $\overrightarrow{TB} = B - T$.'
  - 'b) Die $y$-Koordinate der Gondel ist $600 + 800t$. Setze sie gleich $1000$. c) Die Seillänge ist $|\overrightarrow{TB}|$.'
loesung: |
  **Ansatz:** Die Gondel fährt vom Ort $T$ aus ein Stück des Schritts $\overrightarrow{TB}$. Dieser Schritt ist $\overrightarrow{TB} = \begin{pmatrix} 1500 - 0 \\ 1400 - 600 \end{pmatrix} = \begin{pmatrix} 1500 \\ 800 \end{pmatrix}$.
  ---
  **a)** $X = \begin{pmatrix} 0 \\ 600 \end{pmatrix} + 0{,}4\cdot\begin{pmatrix} 1500 \\ 800 \end{pmatrix} = \begin{pmatrix} 600 \\ 920 \end{pmatrix}$. Die Gondel ist $600$ m (waagrecht gemessen) von der Talstation entfernt und auf $920$ m Höhe.
  ---
  **b)** Die Höhe ist $600 + 800t$. Aus $600 + 800t = 1000$ folgt $800t = 400$, also $t = 0{,}5$. Die Gondel ist dann genau auf halbem Weg.
  ---
  **c)** $|\overrightarrow{TB}| = \sqrt{1500^2 + 800^2} = \sqrt{2\,250\,000 + 640\,000} = \sqrt{2\,890\,000} = 1700$ m. **Plausibilität:** Das Seil ist länger als der waagrechte Abstand von $1500$ m, aber kürzer als $1500 + 800 = 2300$ m.
gefuehrt:
  - text: 'Berechne den Schritt $\overrightarrow{TB} = B - T$ von der Tal- zur Bergstation.'
    teil: { typ: vektor, loesung: ["1500", "800"], fehler: [ { wert: ["1500", "1400"], meldung: 'Das ist der Ortsvektor von $B$. Ziehe die Koordinaten von $T$ ab.' } ] }
    erklaerung: '$\overrightarrow{TB} = \begin{pmatrix} 1500 - 0 \\ 1400 - 600 \end{pmatrix} = \begin{pmatrix} 1500 \\ 800 \end{pmatrix}$. Das ist eine Bewegung: $1500$ m waagrecht und $800$ m hinauf.'
  - text: 'Rechne $0{,}4\cdot\overrightarrow{TB}$ aus.'
    teil: { typ: vektor, loesung: ["600", "320"] }
    erklaerung: '$0{,}4\cdot 1500 = 600$ und $0{,}4\cdot 800 = 320$. Das sind $40\,\%$ des ganzen Wegs.'
  - text: 'Addiere diesen Schritt zur Talstation. Wo ist die Gondel?'
    teil: { typ: vektor, loesung: ["600", "920"], fehler: [ { wert: ["600", "320"], meldung: 'Die Gondel startet in $T(0 \mid 600)$, nicht im Ursprung.' } ] }
    erklaerung: '$(0 + 600 \mid 600 + 320) = (600 \mid 920)$.'
  - text: 'Für b) brauchst du die Höhe als Ausdruck in $t$. Sie ist $600 + 800t$. Löse $600 + 800t = 1000$.'
    teil: { typ: zahl, loesung: "0.5" }
    erklaerung: '$800t = 400$, also $t = 0{,}5$.'
  - text: 'Die Seillänge ist die Länge des Schritts $\overrightarrow{TB}$. Überlege, warum das so ist, und rechne sie aus.'
    erklaerung: 'Das Seil reicht genau von $T$ bis $B$. Seine Länge ist $\sqrt{1500^2 + 800^2} = 1700$ m.'
```

```aufgabe
id: ag-param-schiff
titel: Ein Containerschiff auf Kurs
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Containerschiff fährt geradlinig mit konstanter Geschwindigkeit. Um 10:00 Uhr ist es im Punkt $A(-4 \mid 2)$, um
  12:00 Uhr im Punkt $B(8 \mid 7)$. Die Koordinaten sind in Kilometern gemessen. $t$ ist die Zeit in Stunden ab 10:00 Uhr.

  a) Gib den Vektor an, den das Schiff in **einer** Stunde zurücklegt. Damit ist $X = A + t\cdot\vec v$ seine Bahn.

  b) Wo ist das Schiff um 13:30 Uhr?

  c) Wie schnell fährt das Schiff in km/h?

  d) Liegt die Boje $C(23 \mid 13)$ genau auf dem Kurs des Schiffs?
teile:
  - typ: vektor
    label: 'a) $\vec v$ in km pro Stunde'
    loesung: ["6", "2.5"]
    fehler:
      - wert: ["12", "5"]
        meldung: Das ist der Weg in **zwei** Stunden, von 10:00 bis 12:00 Uhr. Teile durch die Fahrzeit.
  - typ: vektor
    label: 'b) Lage um 13:30 Uhr'
    namen: ["x", "y"]
    loesung: ["17", "10.75"]
    fehler:
      - wert: ["38", "19.5"]
        meldung: Du hast mit dem Zwei-Stunden-Vektor $\begin{pmatrix} 12 \\ 5 \end{pmatrix}$ gerechnet. Mit $t$ in Stunden brauchst du den Vektor für eine Stunde.
      - wert: ["5", "5.75"]
        meldung: Du hast $t = 1{,}5$ eingesetzt, also ab 12:00 Uhr gezählt. Der Parameter $t$ zählt aber ab 10:00 Uhr, dem Zeitpunkt in $A$. 13:30 Uhr ist $3{,}5$ Stunden danach.
  - typ: zahl
    label: 'c) Geschwindigkeit'
    einheit: km/h
    loesung: "sqrt(6^2 + 2.5^2)"
    fehler:
      - wert: "13"
        meldung: Das ist die Länge des Zwei-Stunden-Vektors. Die Geschwindigkeit ist der Weg pro **einer** Stunde.
      - wert: "8.5"
        meldung: Die Länge eines Vektors ist nicht die Summe der Komponenten. Verwende den Satz des Pythagoras.
  - typ: auswahl
    label: 'd) Boje auf dem Kurs?'
    optionen:
      - 'Ja, das Schiff fährt um 14:30 Uhr genau über die Boje.'
      - 'Nein. Wenn das Schiff bei $x = 23$ ankommt, ist es bei $y = 13{,}25$, also $250$ m nördlich der Boje.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Aus $x = 23$ folgt $t = 4{,}5$. Prüfe auch die $y$-Koordinate: $2 + 4{,}5\cdot 2{,}5 = 13{,}25 \neq 13$.'
hinweise:
  - 'a) In $2$ Stunden legt das Schiff $\overrightarrow{AB}$ zurück. In einer Stunde die Hälfte davon.'
  - 'b) 13:30 Uhr entspricht $t = 3{,}5$. d) Bestimme $t$ aus der $x$-Koordinate und prüfe die $y$-Koordinate (Punktprobe).'
loesung: |
  **Ansatz:** Bei konstanter Geschwindigkeit legt das Schiff in gleichen Zeiten gleiche Vektoren zurück. Der Richtungsvektor muss hier genau der Weg pro Stunde sein, weil $t$ in Stunden zählt.
  ---
  **a)** $\overrightarrow{AB} = \begin{pmatrix} 8 - (-4) \\ 7 - 2 \end{pmatrix} = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$ in zwei Stunden. Pro Stunde: $\vec v = \begin{pmatrix} 6 \\ 2{,}5 \end{pmatrix}$. Bahn: $X = \begin{pmatrix} -4 \\ 2 \end{pmatrix} + t\cdot\begin{pmatrix} 6 \\ 2{,}5 \end{pmatrix}$.
  ---
  **b)** $t = 3{,}5$: $X = (-4 + 21 \mid 2 + 8{,}75) = (17 \mid 10{,}75)$.
  ---
  **c)** $|\vec v| = \sqrt{36 + 6{,}25} = \sqrt{42{,}25} = 6{,}5$ km/h.
  ---
  **d)** Punktprobe: $-4 + 6t = 23$ ergibt $t = 4{,}5$ (also 14:30 Uhr). Dann ist $y = 2 + 4{,}5\cdot 2{,}5 = 13{,}25$. Das ist nicht $13$. Die Boje liegt also nicht genau auf dem Kurs. **Antwort:** Um 14:30 Uhr hat das Schiff dieselbe $x$-Koordinate wie die Boje, ist aber $0{,}25$ km $= 250$ m weiter nördlich. Es fährt also nicht über die Boje.
```

## Normalvektorform, allgemeine Form und Steigung

```aufgabe
id: ag-normal-vorwissen
titel: Einen Vektor kippen
art: check
niveau: 1
angabe: |
  Welcher Vektor steht normal (im rechten Winkel) auf $\vec r = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$? Wenn du unsicher bist,
  wiederhole das Skalarprodukt in [Kapitel 6](/lernen/mathe3/vektoren/orthogonalitaet-normalvektor-und-projektion).
teile:
  - typ: auswahl
    optionen:
      - '$\begin{pmatrix} 1 \\ 3 \end{pmatrix}$'
      - '$\begin{pmatrix} -1 \\ 3 \end{pmatrix}$'
      - '$\begin{pmatrix} -3 \\ 1 \end{pmatrix}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Du hast die Komponenten nur vertauscht, aber bei keiner das Vorzeichen geändert. Prüfe mit dem Skalarprodukt: $3\cdot(-1) + (-1)\cdot 3 = -6 \neq 0$.'
      - wert: 2
        meldung: Das ist $-\vec r$, also die Gegenrichtung. Er liegt auf derselben Geraden wie $\vec r$ und steht nicht normal darauf.
loesung: |
  Zwei Vektoren stehen normal aufeinander, wenn ihr Skalarprodukt $0$ ist.
  ---
  $\begin{pmatrix} 3 \\ -1 \end{pmatrix}\cdot\begin{pmatrix} 1 \\ 3 \end{pmatrix} = 3 - 3 = 0$. Also steht $\begin{pmatrix} 1 \\ 3 \end{pmatrix}$ normal auf $\vec r$.
```

Die Parameterform hat einen Nachteil: Für jede Punktprobe muss man zwei Gleichungen nach $t$ auflösen. In der
Ebene gibt es eine Beschreibung ohne Parameter. Sie ist **eine einzige Gleichung** in $x$ und $y$. Ob ein Punkt
auf der Geraden liegt, sieht man dann durch bloßes Einsetzen. Der Schlüssel dazu ist ein Vektor, der nicht
*entlang* der Geraden zeigt, sondern *quer* zu ihr.

### Der Normalvektor einer Geraden

Ein **Normalvektor** einer Geraden ist ein Vektor $\vec n \neq \vec 0$, der normal (also im rechten Winkel) auf
der Geraden steht. Gleichwertig: Er steht normal auf ihrem Richtungsvektor. Das Wort „normal“ bedeutet in der
Mathematik „senkrecht“. Ein Bild: Ist die Gerade ein Gartenzaun, dann zeigt ein Normalvektor quer vom Zaun weg.

In der Ebene findet man einen Normalvektor ganz schnell durch **Kippen**: Man vertauscht die beiden
Komponenten und ändert bei **einer** von ihnen das Vorzeichen.
$$\vec r = \begin{pmatrix} r_1 \\ r_2 \end{pmatrix} \quad\longrightarrow\quad \vec n = \begin{pmatrix} -r_2 \\ r_1 \end{pmatrix} \ \text{ oder } \ \begin{pmatrix} r_2 \\ -r_1 \end{pmatrix}.$$
Warum das stimmt, zeigt das Skalarprodukt: $r_1\cdot(-r_2) + r_2\cdot r_1 = 0$.

Ein Beispiel: Zu $\vec r = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ ist $\vec n = \begin{pmatrix} -4 \\ 3 \end{pmatrix}$ ein Normalvektor, denn
$3\cdot(-4) + 4\cdot 3 = 0$. **Nichtbeispiel:** Nur Vertauschen ohne Vorzeichenwechsel, also $\begin{pmatrix} 4 \\ 3 \end{pmatrix}$, ist
kein Normalvektor. Es gilt $3\cdot 4 + 4\cdot 3 = 24 \neq 0$.

### Die Normalvektorform

Jetzt kommt die zentrale Idee. Sie ist kurz, aber wichtig.

**Worum geht es?** Wir wollen eine Bedingung, die genau die Punkte der Geraden erfüllen.

**Das Bild:** Wir nehmen einen festen Punkt $P$ der Geraden und einen Normalvektor $\vec n$. Ein Punkt $X$ liegt
genau dann auf der Geraden, wenn der Pfeil von $P$ nach $X$ **entlang** der Geraden zeigt. Ein solcher Pfeil steht
normal auf $\vec n$. Liegt $X$ dagegen neben der Geraden, zeigt der Pfeil $\overrightarrow{PX}$ schräg und steht
nicht normal auf $\vec n$.

**In Formeln:** „$\overrightarrow{PX}$ steht normal auf $\vec n$“ heißt „das Skalarprodukt ist $0$“.

:::definition[Normalvektorform einer Geraden]
Ist $P$ ein Punkt der Geraden $g$ und $\vec n$ ein Normalvektor von $g$, so gilt
$$g: \vec n\cdot(X - P) = 0 \qquad\text{gleichwertig}\qquad g: \vec n\cdot X = \vec n\cdot P.$$
Dabei ist $X = (x \mid y)$ ein beliebiger Punkt und $X - P = \overrightarrow{PX}$ der Pfeil von $P$ nach $X$. Die zweite
Form entsteht, indem man das Skalarprodukt ausmultipliziert und $\vec n\cdot P$ auf die rechte Seite bringt.
:::

```plot
x: [-2, 7]
y: [-6, 3]
gleich: true
graphen:
  - { f: "4/3*x - 4", label: "g: 4x − 3y = 12", farbe: 0 }
vektoren:
  - { von: [3, 0], nach: [6, 4], label: "r = (3, 4)", farbe: 1 }
  - { von: [3, 0], nach: [7, -3], label: "n = (4, −3)", farbe: 2 }
  - { von: [3, 0], nach: [1.5, -2], label: "PX", farbe: 3 }
punkte:
  - { x: 3, y: 0, label: "P(3 | 0)" }
  - { x: 1.5, y: -2, label: "X", farbe: 3 }
beschriftung: Die Gerade g mit 4x − 3y = 12. Der Richtungsvektor r = (3, 4) zeigt entlang der Geraden, der Normalvektor n = (4, −3) quer dazu. Für jeden Punkt X auf g zeigt der Pfeil von P nach X entlang der Geraden und steht deshalb normal auf n.
```

:::beispiel[Eine Gerade mit Punkt und Normalvektor]
Gesucht ist die Gerade durch $P(1 \mid 3)$ mit dem Normalvektor $\vec n = \begin{pmatrix} 2 \\ 5 \end{pmatrix}$.

1. **Normalvektorform ansetzen:** $\begin{pmatrix} 2 \\ 5 \end{pmatrix}\cdot\begin{pmatrix} x - 1 \\ y - 3 \end{pmatrix} = 0$.
2. **Skalarprodukt ausmultiplizieren:** $2(x - 1) + 5(y - 3) = 0$, also $2x - 2 + 5y - 15 = 0$.
3. **Zahlen auf die rechte Seite:** $2x + 5y = 17$.

**Probe mit $P$:** $2\cdot 1 + 5\cdot 3 = 17$. Stimmt. Jetzt ist jede Punktprobe ein einziger Schritt. Für
$Q(6 \mid 1)$ ist $12 + 5 = 17$, also liegt $Q$ auf $g$. Für $R(3 \mid 2)$ ist $6 + 10 = 16 \neq 17$, also liegt $R$ nicht
auf $g$.
:::

### Die allgemeine Form und das Schlüsselprinzip

Im Beispiel ist aus der Normalvektorform die Gleichung $2x + 5y = 17$ geworden. Die Zahlen vor $x$ und $y$ sind
genau die Komponenten des Normalvektors $\begin{pmatrix} 2 \\ 5 \end{pmatrix}$. Das ist kein Zufall.

:::satz[Allgemeine Form einer Geraden]
Jede Gerade in der Ebene lässt sich schreiben als
$$g: a x + b y = c \qquad\text{mit } a, b \text{ nicht beide } 0.$$
Umgekehrt ist die Lösungsmenge jeder solchen Gleichung eine Gerade. Für sie gilt:
- $\vec n = \begin{pmatrix} a \\ b \end{pmatrix}$ ist ein **Normalvektor**,
- $\vec r = \begin{pmatrix} -b \\ a \end{pmatrix}$ (der gekippte Normalvektor) ist ein **Richtungsvektor**.
:::

**Warum stimmt das?** Wir nehmen zwei Punkte $P(p_1 \mid p_2)$ und $X(x \mid y)$, die beide die Gleichung erfüllen:
$a p_1 + b p_2 = c$ und $a x + b y = c$. Wir ziehen die erste Gleichung von der zweiten ab, damit das $c$
verschwindet. Es bleibt $a(x - p_1) + b(y - p_2) = 0$. Links steht genau das Skalarprodukt von
$\begin{pmatrix} a \\ b \end{pmatrix}$ mit $\overrightarrow{PX}$.

**Was haben wir gezeigt?** Der Vektor $\begin{pmatrix} a \\ b \end{pmatrix}$ steht normal auf jedem Pfeil zwischen zwei Punkten
der Lösungsmenge. Also steht er normal auf der Geraden. Das ist das **Schlüsselprinzip** des ganzen Kapitels:

:::merke[Das Schlüsselprinzip]
**Die Zahlen vor $x$ und $y$ bilden einen Normalvektor.** Bei $4x - 3y = 12$ ist $\vec n = \begin{pmatrix} 4 \\ -3 \end{pmatrix}$ ein
Normalvektor. Kippt man ihn, erhält man einen Richtungsvektor: $\vec r = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
:::

:::achtung[Koeffizienten als Richtungsvektor genommen]
Für die Gerade $3x + 2y = 6$ schreibt jemand: „Richtungsvektor $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$, Aufpunkt $(0 \mid 3)$.“ Die Probe
zeigt den Fehler. Von $(0 \mid 3)$ einen Schritt $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ gegangen ergibt $(3 \mid 5)$. Eingesetzt:
$9 + 10 = 19 \neq 6$. Der Punkt liegt nicht auf der Geraden. $\begin{pmatrix} 3 \\ 2 \end{pmatrix}$ ist der **Normalvektor**. Richtig ist der
gekippte Vektor $\begin{pmatrix} 2 \\ -3 \end{pmatrix}$. Probe: $(0 + 2 \mid 3 - 3) = (2 \mid 0)$ und $6 + 0 = 6$. Stimmt.
:::

```aufgabe
id: ag-normal-check-ablesen
titel: Normalvektor oder Richtungsvektor?
art: check
niveau: 1
angabe: |
  Gegeben ist die Gerade $g: 5x + 2y = 9$. Welche Aussage stimmt?
teile:
  - typ: auswahl
    optionen:
      - '$\begin{pmatrix} 5 \\ 2 \end{pmatrix}$ ist ein Normalvektor und $\begin{pmatrix} -2 \\ 5 \end{pmatrix}$ ein Richtungsvektor von $g$.'
      - '$\begin{pmatrix} 5 \\ 2 \end{pmatrix}$ ist ein Richtungsvektor von $g$.'
      - '$\begin{pmatrix} 2 \\ 5 \end{pmatrix}$ ist ein Normalvektor von $g$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Die Zahlen vor $x$ und $y$ bilden den **Normalvektor**, nicht den Richtungsvektor. Der Richtungsvektor entsteht erst durch Kippen.
      - wert: 2
        meldung: Hier wurden die Zahlen nur vertauscht. Der Normalvektor ist $\begin{pmatrix} a \\ b \end{pmatrix}$ in der Reihenfolge der Gleichung, also $\begin{pmatrix} 5 \\ 2 \end{pmatrix}$.
loesung: |
  Schlüsselprinzip: Bei $ax + by = c$ ist $\begin{pmatrix} a \\ b \end{pmatrix}$ ein Normalvektor. Hier also $\begin{pmatrix} 5 \\ 2 \end{pmatrix}$.
  ---
  Kippen liefert den Richtungsvektor $\begin{pmatrix} -2 \\ 5 \end{pmatrix}$. Probe: $5\cdot(-2) + 2\cdot 5 = 0$.
```

### Zwischen den Formen umrechnen

In Aufgaben ist eine Gerade oft in der einen Form gegeben und in der anderen gefragt. Beide Richtungen
funktionieren mit dem Schlüsselprinzip.

:::beispiel[Von der Parameterform zur allgemeinen Form]
Gegeben ist $g: X = \begin{pmatrix} -1 \\ 4 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 1 \end{pmatrix}$.

1. **Normalvektor durch Kippen:** Aus $\vec r = \begin{pmatrix} 3 \\ 1 \end{pmatrix}$ wird $\vec n = \begin{pmatrix} 1 \\ -3 \end{pmatrix}$.
   Probe: $3\cdot 1 + 1\cdot(-3) = 0$.
2. **Rechte Seite:** $c = \vec n\cdot P = 1\cdot(-1) + (-3)\cdot 4 = -13$.
3. **Ergebnis:** $g: x - 3y = -13$.
4. **Probe mit einem zweiten Punkt:** $t = 1$ liefert $(2 \mid 5)$, und $2 - 15 = -13$. Stimmt.

**Ein zweiter Weg (Parameter eliminieren):** Aus $x = -1 + 3t$ folgt $t = \frac{x + 1}{3}$. Das setzen wir in
$y = 4 + t$ ein: $y = 4 + \frac{x + 1}{3}$. Mal $3$ ergibt $3y = 12 + x + 1$, also wieder $x - 3y = -13$. Dieser Weg
ist meistens länger. Ist die erste Komponente von $\vec r$ gleich $0$, löst man stattdessen die $y$-Gleichung nach $t$ auf.
:::

:::beispiel[Von der allgemeinen Form zur Parameterform]
Gegeben ist $g: 4x - 3y = 12$.

1. **Einen Punkt suchen:** Wir wählen eine Koordinate frei und rechnen die andere aus. Mit $y = 0$ wird
   $4x = 12$, also $x = 3$. Der Punkt $(3 \mid 0)$ ist der Schnittpunkt mit der $x$-Achse. Mit $x = 0$ wird
   $-3y = 12$, also $y = -4$. Der Punkt $(0 \mid -4)$ ist der Schnittpunkt mit der $y$-Achse.
2. **Richtungsvektor:** Der Normalvektor $\begin{pmatrix} 4 \\ -3 \end{pmatrix}$ gekippt ergibt $\vec r = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
3. **Ergebnis:** $g: X = \begin{pmatrix} 3 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
4. **Probe:** $t = -1$ liefert $(0 \mid -4)$, den zweiten Achsenpunkt. Stimmt.

Die beiden Achsenpunkte sind auch die schnellste Hilfe für eine **Skizze**: Man zeichnet sie ein und
verbindet sie mit dem Lineal.
:::

:::achtung[Rechte Seite falsch berechnet]
Gesucht ist die Gerade durch $P(2 \mid -1)$ mit Normalvektor $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Eine typische Fehlrechnung:
„$3x + 4y = 2 + (-1) = 1$.“ Hier wurden nur die Koordinaten von $P$ addiert. Die rechte Seite ist aber das
Skalarprodukt $\vec n\cdot P = 3\cdot 2 + 4\cdot(-1) = 2$. Richtig ist $3x + 4y = 2$. Die Probe mit $P$ entlarvt den
Fehler sofort: In $3x + 4y = 1$ eingesetzt ergibt $6 - 4 = 2 \neq 1$.
:::

### Hauptform, Steigung und Steigungswinkel

Ist $b \neq 0$, kann man $ax + by = c$ nach $y$ auflösen. Man erhält die aus der Schule bekannte **Hauptform**
$$y = kx + d \qquad\text{mit}\qquad k = -\frac{a}{b}, \quad d = \frac{c}{b}.$$
Dabei ist $k$ die **Steigung** und $d$ der **Abschnitt auf der $y$-Achse**. Die Steigung sagt, um wie viel $y$
wächst, wenn $x$ um $1$ wächst. Darum ist $\begin{pmatrix} 1 \\ k \end{pmatrix}$ immer ein Richtungsvektor von $y = kx + d$. Hat man einen
Richtungsvektor $\begin{pmatrix} r_1 \\ r_2 \end{pmatrix}$ mit $r_1 \neq 0$, ist die Steigung $k = \frac{r_2}{r_1}$: „Höhe pro Schritt nach rechts“.

Der **Steigungswinkel** $\alpha$ ist der Winkel zwischen der Geraden und der $x$-Achse. Es gilt $\tan\alpha = k$.
Die Steigung in Prozent ist $k\cdot 100\,\%$. Prozent und Winkel sind verschiedene Dinge, wie du in
[Kapitel 5, Steigung, Höhenwinkel und Vermessung](/lernen/mathe3/trigonometrie/steigung-hoehenwinkel-und-vermessung) gesehen hast.

**Sonderfälle.** Eine waagrechte Gerade hat die Gleichung $y = d$ und die Steigung $0$. Eine senkrechte Gerade
hat die Gleichung $x = c$. Sie hat **keine** Steigung und keine Hauptform, denn bei ihr ist $b = 0$. Die allgemeine
Form $1\cdot x + 0\cdot y = c$ beschreibt sie aber problemlos. Darum ist die allgemeine Form die vielseitigere.

:::beispiel[Eine Rollstuhlrampe]
Eine Rampe beginnt bei $A(0 \mid 0)$ und endet bei $B(12 \mid 0{,}72)$. Die Einheiten sind Meter, $x$ waagrecht und $y$
nach oben.

1. **Steigung:** $k = \frac{\text{Höhenunterschied}}{\text{waagrechter Abstand}} = \frac{0{,}72}{12} = 0{,}06$, also $6\,\%$.
2. **Steigungswinkel:** $\tan\alpha = 0{,}06$, also $\alpha \approx 3{,}43°$. Der Taschenrechner muss auf Grad stehen.
3. **Allgemeine Form:** Aus $y = 0{,}06x$ wird $0{,}06x - y = 0$. Mal $50$ ergibt $3x - 50y = 0$. Ein Normalvektor ist
   $\begin{pmatrix} 3 \\ -50 \end{pmatrix}$.

**Antwort:** Die Rampe steigt mit $6\,\%$, das ist ein Winkel von etwa $3{,}4°$. Eine Steigung von $6\,\%$ ist
nicht $6°$.
:::

:::achtung[Steigung direkt aus der allgemeinen Form abgelesen]
Bei $2x + 4y = 8$ sagt jemand: „Die Steigung ist $2$, das ist die Zahl vor $x$.“ Das stimmt nicht. Die Zahl vor $x$
ist nur dann die Steigung, wenn die Gleichung nach $y$ aufgelöst ist. Richtig: $4y = -2x + 8$, also
$y = -\frac12 x + 2$ und $k = -\frac12$. Die Gerade **fällt**. Mit der Formel geht es auch: $k = -\frac ab = -\frac24 = -\frac12$.
:::

```aufgabe
id: ag-normal-check-widget
titel: Vorhersage zum Verschieben
art: check
niveau: 1
angabe: |
  Im folgenden Widget siehst du die Gerade $y = kx + d$. Sage voraus: Was passiert mit der Geraden, wenn du $k$ gleich
  lässt und nur $d$ vergrößerst?
teile:
  - typ: auswahl
    optionen:
      - 'Sie wird parallel nach oben verschoben.'
      - 'Sie dreht sich um den Ursprung.'
      - 'Sie wird steiler.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Drehen würde die Steigung ändern. Die Steigung ist aber $k$, und $k$ bleibt gleich.
      - wert: 2
        meldung: Wie steil die Gerade ist, sagt allein $k$. Der Wert $d$ gibt nur an, wo die Gerade die $y$-Achse schneidet.
loesung: |
  $k$ legt die Richtung fest, denn $\begin{pmatrix} 1 \\ k \end{pmatrix}$ ist ein Richtungsvektor. Bleibt $k$ gleich, bleibt die Richtung gleich.
  ---
  $d$ ist der Schnittpunkt mit der $y$-Achse. Wird $d$ größer, rückt die Gerade parallel nach oben.
```

```widget
name: parameter
titel: Die Hauptform y = kx + d
props:
  f: "k*x + d"
  parameter:
    - { name: k, min: -3, max: 3, step: 0.25, wert: 0.75 }
    - { name: d, min: -4, max: 4, step: 0.5, wert: -1 }
  x: [-5, 5]
  y: [-5, 5]
```

**Beobachte und erkläre.** Ändere zuerst nur $d$ und dann nur $k$. Geraden mit gleichem $k$ sind parallel, egal
welches $d$ sie haben. Der Grund: Sie haben denselben Richtungsvektor $\begin{pmatrix} 1 \\ k \end{pmatrix}$. Ein Normalvektor ist immer
$\begin{pmatrix} k \\ -1 \end{pmatrix}$, denn $1\cdot k + k\cdot(-1) = 0$. Stelle $k = 0$ ein: Dann ist die Gerade waagrecht. Eine
senkrechte Gerade kannst du mit dem Widget nicht einstellen, egal wie groß $k$ wird.

:::merke[Rezepte zum Umrechnen in der Ebene]
1. **Parameterform zur allgemeinen Form:** $\vec r$ kippen ergibt $\vec n$. Dann $c = \vec n\cdot P$ und
   $g: n_1 x + n_2 y = c$.
2. **Allgemeine Form zur Parameterform:** Einen Punkt suchen (eine Koordinate frei wählen, die andere
   ausrechnen). $\vec n = \begin{pmatrix} a \\ b \end{pmatrix}$ kippen ergibt $\vec r = \begin{pmatrix} -b \\ a \end{pmatrix}$.
3. **Hauptform:** Nach $y$ auflösen. Steigung $k = -\frac ab = \frac{r_2}{r_1}$, Steigungswinkel aus $\tan\alpha = k$.
4. **Immer:** Probe mit einem zweiten Punkt.
:::

```reflexion
frage: Warum kann man eine senkrechte Gerade nicht in der Form $y = kx + d$ schreiben, wohl aber in der Form $ax + by = c$?
antwort: |
  Bei $y = kx + d$ gehört zu jedem $x$ genau ein $y$. Eine senkrechte Gerade enthält aber zu einem einzigen $x$-Wert
  unendlich viele $y$-Werte. Sie ist also gar kein Graph einer Funktion. Anders gesagt: Ihre Steigung wäre
  „unendlich“, und das ist keine Zahl. In $ax + by = c$ darf dagegen $b = 0$ sein. Dann steht $ax = c$ da, also
  $x = \frac ca$, und genau das ist eine senkrechte Gerade. Der Normalvektor $\begin{pmatrix} a \\ 0 \end{pmatrix}$ zeigt waagrecht, also
  quer zur senkrechten Geraden. Das passt zum Schlüsselprinzip.
```

```aufgabe
id: ag-gerade-zwei-punkte
titel: Gerade durch zwei Punkte in allgemeiner Form
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Gerade $g$ geht durch $A(-3 \mid 1)$ und $B(1 \mid 4)$. Gib die allgemeine Form $ax + by = c$ an (als Tripel
  $(a, b, c)$; jedes Vielfache ist richtig) und die Steigung $k$.
teile:
  - typ: vektor
    label: '$(a, b, c)$'
    namen: ["a", "b", "c"]
    vielfaches: true
    loesung: ["3", "-4", "-13"]
    fehler:
      - wert: ["4", "3", "-9"]
        meldung: Du hast den Richtungsvektor $\overrightarrow{AB}$ als Normalvektor genommen. Er muss erst gekippt werden.
      - wert: ["3", "-4", "13"]
        meldung: Der Normalvektor stimmt, aber die rechte Seite hat das falsche Vorzeichen. Rechne $c = \vec n\cdot A = 3\cdot(-3) + (-4)\cdot 1$ noch einmal.
  - typ: zahl
    label: '$k$'
    loesung: "3/4"
    fehler:
      - wert: "4/3"
        meldung: Die Steigung ist „Höhe pro Schritt nach rechts“, also $\frac{r_2}{r_1}$ und nicht $\frac{r_1}{r_2}$.
      - wert: "-3/4"
        meldung: Von $A$ nach $B$ geht es nach rechts **und** nach oben. Die Gerade steigt, die Steigung ist positiv.
hinweise:
  - 'Berechne $\overrightarrow{AB}$, kippe ihn zum Normalvektor und setze $A$ ein, um $c$ zu finden.'
loesung: |
  **Ansatz:** Richtung aus den zwei Punkten, dann mit dem Schlüsselprinzip zur allgemeinen Form.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 1 - (-3) \\ 4 - 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}$. Gekippt: $\vec n = \begin{pmatrix} 3 \\ -4 \end{pmatrix}$. Rechte Seite $c = 3\cdot(-3) + (-4)\cdot 1 = -13$. Also $g: 3x - 4y = -13$.
  ---
  Probe mit $B$: $3\cdot 1 - 4\cdot 4 = -13$. Stimmt. Steigung: $k = \frac{r_2}{r_1} = \frac34$.
```

```aufgabe
id: ag-allg-zu-param
titel: Von der allgemeinen Form zur Parameterform
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Gegeben ist $g: 5x - 2y = 10$. Gib einen Normalvektor, einen Richtungsvektor und die Schnittpunkte mit den beiden
  Koordinatenachsen an.
teile:
  - typ: vektor
    label: 'Normalvektor'
    vielfaches: true
    loesung: ["5", "-2"]
    fehler:
      - wert: ["2", "5"]
        meldung: Das ist ein Richtungsvektor (der gekippte Normalvektor). Der Normalvektor besteht direkt aus den Zahlen vor $x$ und $y$.
  - typ: vektor
    label: 'Richtungsvektor'
    vielfaches: true
    loesung: ["2", "5"]
    fehler:
      - wert: ["5", "-2"]
        meldung: Die Zahlen vor $x$ und $y$ bilden den Normalvektor. Für die Richtung musst du ihn kippen.
      - wert: ["-2", "5"]
        meldung: Beim Kippen musst du die Komponenten vertauschen **und** bei genau einer das Vorzeichen ändern. Prüfe mit dem Skalarprodukt.
  - typ: vektor
    label: 'Schnittpunkt mit der $x$-Achse'
    namen: ["x", "y"]
    loesung: ["2", "0"]
    fehler:
      - wert: ["0", "2"]
        meldung: Auf der $x$-Achse ist $y = 0$. Die $x$-Koordinate ist dann $2$, also liegt der Punkt bei $(2 \mid 0)$.
  - typ: vektor
    label: 'Schnittpunkt mit der $y$-Achse'
    namen: ["x", "y"]
    loesung: ["0", "-5"]
    fehler:
      - wert: ["0", "5"]
        meldung: 'Achte auf das Vorzeichen: $-2y = 10$ ergibt $y = -5$.'
hinweise:
  - 'Schnittpunkt mit der $x$-Achse: $y = 0$ setzen. Mit der $y$-Achse: $x = 0$ setzen.'
loesung: |
  **Ansatz:** Schlüsselprinzip. Die Zahlen vor $x$ und $y$ bilden den Normalvektor $\vec n = \begin{pmatrix} 5 \\ -2 \end{pmatrix}$.
  ---
  Gekippt: $\vec r = \begin{pmatrix} 2 \\ 5 \end{pmatrix}$. Probe: $5\cdot 2 + (-2)\cdot 5 = 0$.
  ---
  Mit $y = 0$: $5x = 10$, also $(2 \mid 0)$. Mit $x = 0$: $-2y = 10$, also $(0 \mid -5)$. Eine Parameterform ist $g: X = \begin{pmatrix} 2 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 5 \end{pmatrix}$. Probe: $t = -1$ liefert $(0 \mid -5)$.
```

```aufgabe
id: ag-hauptform
titel: In die Hauptform bringen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Bringe $g: 4x + 6y = 18$ in die Hauptform $y = kx + d$. Gib $k$ und $d$ an.
teile:
  - typ: zahl
    label: '$k$'
    loesung: "-4/6"
    anzeige: '-\tfrac23'
    fehler:
      - wert: "4"
        meldung: Die Zahl vor $x$ ist erst dann die Steigung, wenn die Gleichung nach $y$ aufgelöst ist. Bringe $4x$ auf die rechte Seite und teile durch $6$.
      - wert: "2/3"
        meldung: Beim Hinüberbringen auf die rechte Seite ändert $4x$ sein Vorzeichen.
      - wert: "-3/2"
        meldung: Du hast den Kehrwert genommen. Es gilt $k = -\frac ab = -\frac46$.
  - typ: zahl
    label: '$d$'
    loesung: "18/6"
    fehler:
      - wert: "18"
        meldung: Du musst die ganze Gleichung durch $6$ teilen, also auch die $18$.
hinweise:
  - 'Bringe $4x$ auf die rechte Seite und teile dann die ganze Gleichung durch $6$.'
loesung: |
  **Ansatz:** Nach $y$ auflösen, weil die Hauptform $y = kx + d$ lautet.
  ---
  $6y = -4x + 18$, geteilt durch $6$: $y = -\frac23 x + 3$. Also $k = -\frac23$ und $d = 3$. Probe: Der Punkt $(0 \mid 3)$ erfüllt $4\cdot 0 + 6\cdot 3 = 18$.
```

```aufgabe
id: ag-steigungswinkel
titel: Steigung und Steigungswinkel einer Rampe
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Im Querschnitt verläuft eine Rampe entlang der Geraden $g: 3x - 40y = -20$ (Einheiten in Metern, $x$ waagrecht, $y$ nach
  oben). Bestimme die Steigung in Prozent und den Steigungswinkel in Grad. Runde den Winkel auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'Steigung'
    einheit: "%"
    loesung: "3/40*100"
    fehler:
      - wert: "-3/40*100"
        meldung: Beim Auflösen nach $y$ ändern sich zwei Vorzeichen. Aus $-40y = -3x - 20$ wird $y = \frac{3}{40}x + \frac12$. Die Rampe steigt.
      - wert: "3"
        meldung: Die Zahl vor $x$ ist nicht die Steigung, solange die Gleichung nicht nach $y$ aufgelöst ist.
  - typ: zahl
    label: 'Steigungswinkel'
    einheit: "°"
    loesung: "inGrad(atan(3/40))"
    fehler:
      - wert: "7.5"
        meldung: $7{,}5$ ist die Steigung in Prozent, kein Winkel. Den Winkel bekommst du aus $\tan\alpha = 0{,}075$.
      - wert: "atan(3/40)"
        meldung: Das ist der Winkel im Bogenmaß. Stelle den Taschenrechner auf Grad (DEG).
hinweise:
  - Löse nach $y$ auf, um die Steigung $k$ abzulesen.
  - 'Steigung in Prozent ist $k\cdot 100\,\%$. Den Winkel liefert $\tan\alpha = k$.'
loesung: |
  **Ansatz:** Die Steigung steht in der Hauptform $y = kx + d$. Darum lösen wir nach $y$ auf.
  ---
  $-40y = -3x - 20$, geteilt durch $-40$: $y = \frac{3}{40}x + \frac12$. Also $k = \frac{3}{40} = 0{,}075$.
  ---
  Steigung in Prozent: $0{,}075\cdot 100\,\% = 7{,}5\,\%$. Auf $100$ m waagrecht steigt die Rampe um $7{,}5$ m.
  ---
  Winkel: $\tan\alpha = 0{,}075$, also $\alpha \approx 4{,}29°$. **Plausibilität:** Flache Rampen haben kleine Winkel. Eine Steigung von $7{,}5\,\%$ entspricht nicht $7{,}5°$.
```

```aufgabe
id: ag-param-zu-allg
titel: Von der Parameterform zur allgemeinen Form
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Wandle $g: X = \begin{pmatrix} 2 \\ -1 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ -5 \end{pmatrix}$ in die allgemeine Form $ax + by = c$ um
  (als Tripel $(a, b, c)$; jedes Vielfache ist richtig) und gib die Steigung an.
teile:
  - typ: vektor
    label: '$(a, b, c)$'
    namen: ["a", "b", "c"]
    vielfaches: true
    loesung: ["5", "3", "7"]
    fehler:
      - wert: ["3", "-5", "11"]
        meldung: Du hast den Richtungsvektor direkt als Normalvektor verwendet. Er muss erst gekippt werden.
      - wert: ["5", "3", "1"]
        meldung: Der Normalvektor stimmt. Die rechte Seite ist aber das Skalarprodukt $\vec n\cdot P$, nicht die Summe der Koordinaten von $P$.
  - typ: zahl
    label: 'Steigung $k$'
    loesung: "-5/3"
    fehler:
      - wert: "-3/5"
        meldung: 'Die Steigung ist $\frac{r_2}{r_1}$: senkrechter Anteil durch waagrechten Anteil.'
hinweise:
  - Kippe den Richtungsvektor, um einen Normalvektor zu erhalten.
  - 'Die rechte Seite ist $c = \vec n\cdot P$ mit dem Aufpunkt $P(2 \mid -1)$.'
loesung: |
  **Ansatz:** Schlüsselprinzip rückwärts. Aus der Richtung wird durch Kippen der Normalvektor, und der Aufpunkt liefert die rechte Seite.
  ---
  $\vec r = \begin{pmatrix} 3 \\ -5 \end{pmatrix}$ gekippt: $\vec n = \begin{pmatrix} 5 \\ 3 \end{pmatrix}$. Probe: $3\cdot 5 + (-5)\cdot 3 = 0$.
  ---
  $c = 5\cdot 2 + 3\cdot(-1) = 7$. Also $g: 5x + 3y = 7$.
  ---
  Probe mit $t = 1$, also dem Punkt $(5 \mid -6)$: $25 - 18 = 7$. Stimmt. Steigung $k = \frac{-5}{3} = -\frac53$.
gefuehrt:
  - text: 'Kippe den Richtungsvektor $\begin{pmatrix} 3 \\ -5 \end{pmatrix}$. Gib einen Normalvektor an.'
    teil: { typ: vektor, vielfaches: true, loesung: ["5", "3"], fehler: [ { wert: ["-5", "3"], meldung: 'Vertauschen allein reicht nicht. Ändere das Vorzeichen von genau **einer** Komponente und prüfe mit dem Skalarprodukt.' } ] }
    erklaerung: 'Vertauschen ergibt $(-5, 3)$, ein Vorzeichen ändern ergibt $(5, 3)$. Probe: $3\cdot 5 + (-5)\cdot 3 = 0$.'
  - text: 'Berechne die rechte Seite $c = \vec n\cdot P$ mit $P(2 \mid -1)$.'
    teil: { typ: zahl, loesung: "7", fehler: [ { wert: "1", meldung: 'Das ist $2 + (-1)$. Gesucht ist das Skalarprodukt $5\cdot 2 + 3\cdot(-1)$.' } ] }
    erklaerung: '$c = 5\cdot 2 + 3\cdot(-1) = 10 - 3 = 7$. Also $g: 5x + 3y = 7$.'
  - text: 'Mache die Probe mit einem zweiten Punkt der Geraden, zum Beispiel für $t = 1$. Welcher Punkt ist das?'
    teil: { typ: vektor, namen: ["x", "y"], loesung: ["5", "-6"] }
    erklaerung: '$(2 + 3 \mid -1 - 5) = (5 \mid -6)$, und $5\cdot 5 + 3\cdot(-6) = 7$. Die Gleichung stimmt.'
  - text: 'Lies die Steigung aus dem Richtungsvektor ab: Höhe pro Schritt nach rechts.'
    erklaerung: '$k = \frac{-5}{3}$. Die Gerade fällt.'
```

```aufgabe
id: ag-allg-form-aussagen
titel: Aussagen über eine Gerade prüfen
niveau: 2
lernziel: 0
kompetenz: begruenden
angabe: |
  Gegeben ist die Gerade $g: 6x - 3y = 12$. Beurteile jede Aussage.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '$\begin{pmatrix} 6 \\ -3 \end{pmatrix}$ ist ein Normalvektor von $g$.'
        richtig: true
        erklaerung: Das ist das Schlüsselprinzip. Die Zahlen vor $x$ und $y$ bilden einen Normalvektor.
      - text: '$\begin{pmatrix} 6 \\ -3 \end{pmatrix}$ ist ein Richtungsvektor von $g$.'
        richtig: false
        erklaerung: Ein Richtungsvektor entsteht erst durch Kippen, etwa $\begin{pmatrix} 3 \\ 6 \end{pmatrix}$ oder gekürzt $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
      - text: 'Die Steigung von $g$ ist $6$.'
        richtig: false
        erklaerung: Aufgelöst ist $y = 2x - 4$. Die Steigung ist $2$.
      - text: '$\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ ist ein Richtungsvektor von $g$.'
        richtig: true
        erklaerung: '$1\cdot 6 + 2\cdot(-3) = 0$. Der Vektor steht normal auf dem Normalvektor, zeigt also entlang der Geraden.'
      - text: 'Die Gerade $y = 2x + 7$ ist parallel zu $g$.'
        richtig: true
        erklaerung: Beide haben die Steigung $2$, also denselben Richtungsvektor $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
    fehler:
      - wert: [r, r, f, r, r]
        meldung: Die Zahlen vor $x$ und $y$ geben die **Normalrichtung** an, nicht die Richtung der Geraden. Ein Vektor kann nicht beides zugleich sein.
      - wert: [r, f, r, r, r]
        meldung: Die Zahl vor $x$ ist nur in der Hauptform $y = kx + d$ die Steigung. Löse zuerst nach $y$ auf.
hinweise:
  - Erinnere dich an das Schlüsselprinzip und an das Kippen.
  - 'Für die Steigung löse nach $y$ auf: $-3y = -6x + 12$.'
loesung: |
  **Ansatz:** Aus $6x - 3y = 12$ lesen wir den Normalvektor $\begin{pmatrix} 6 \\ -3 \end{pmatrix}$ ab. Durch Kippen erhalten wir den Richtungsvektor $\begin{pmatrix} 3 \\ 6 \end{pmatrix}$, gekürzt $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$.
  ---
  Aufgelöst nach $y$: $-3y = -6x + 12$, also $y = 2x - 4$. Die Steigung ist $2$, nicht $6$.
  ---
  Richtig sind also die Aussagen 1, 4 und 5. Falsch sind die Aussagen 2 und 3.
```

```aufgabe
id: ag-allg-form-parameter-a
titel: Den Koeffizienten passend wählen
niveau: 3
lernziel: 0
kompetenz: anwenden
angabe: |
  Für jede Zahl $a$ ist $g_a: ax + 4y = 12$ eine Gerade.

  a) Für welches $a$ ist $g_a$ parallel zur Geraden $y = -1{,}5x + 1$?

  b) Für welches $a$ geht $g_a$ durch den Punkt $P(2 \mid -3)$?

  c) Für welches $a$ fällt $g_a$ nach rechts unter einem Winkel von $45°$ gegen die $x$-Achse?

  d) Für welches $a$ ist $g_a$ waagrecht?
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "6"
    fehler:
      - wert: "-6"
        meldung: 'Die Steigung von $g_a$ ist $k = -\frac a4$. Aus $-\frac a4 = -1{,}5$ folgt $a = +6$.'
      - wert: "-1.5"
        meldung: $-1{,}5$ ist die gewünschte Steigung, nicht der Koeffizient $a$. Bring $g_a$ zuerst in die Hauptform.
  - typ: zahl
    label: 'b) $a$'
    loesung: "(12 + 12)/2"
    fehler:
      - wert: "0"
        meldung: 'Setze den Punkt vollständig ein: $a\cdot 2 + 4\cdot(-3) = 12$.'
  - typ: zahl
    label: 'c) $a$'
    loesung: "4"
    fehler:
      - wert: "-4"
        meldung: 'Fallen unter $45°$ heißt Steigung $k = -1$. Aus $-\frac a4 = -1$ folgt $a = 4$.'
  - typ: zahl
    label: 'd) $a$'
    loesung: "0"
hinweise:
  - 'Löse $g_a$ nach $y$ auf. Die Steigung ist $k = -\frac a4$.'
  - 'b) Setze $x = 2$ und $y = -3$ ein. c) Ein Winkel von $45°$ bedeutet $|k| = \tan 45° = 1$, und „fallen“ bedeutet $k < 0$. d) Waagrecht heißt Steigung $0$.'
loesung: |
  **Ansatz:** Alle Fragen betreffen Steigung oder Punktprobe. Die Hauptform von $g_a$ ist $4y = -ax + 12$, also $y = -\frac a4 x + 3$ mit Steigung $k = -\frac a4$.
  ---
  **a)** Parallel heißt gleiche Steigung: $-\frac a4 = -1{,}5$, also $a = 6$.
  ---
  **b)** Punktprobe: $2a + 4\cdot(-3) = 12$, also $2a = 24$ und $a = 12$.
  ---
  **c)** $\tan 45° = 1$. Die Gerade fällt, also $k = -1$. Aus $-\frac a4 = -1$ folgt $a = 4$.
  ---
  **d)** Waagrecht heißt $k = 0$, also $a = 0$. Dann lautet die Gleichung $4y = 12$, also $y = 3$. **Probe:** Das ist tatsächlich eine waagrechte Gerade. Senkrecht kann $g_a$ nie sein, weil vor $y$ immer die $4$ steht.
```

## Zwei Geraden in der Ebene: Lage, Schnittpunkt und Winkel

```aufgabe
id: ag-lage2d-vorwissen
titel: Wie viele Lösungen kann ein Gleichungssystem haben?
art: check
niveau: 1
angabe: |
  Ein lineares Gleichungssystem mit zwei Gleichungen und zwei Unbekannten $x$ und $y$ hat wie viele Lösungen? Wähle alle
  Möglichkeiten, die vorkommen können. Zum Nachlesen: [Kapitel 3, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten).
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - 'genau eine'
      - 'keine'
      - 'unendlich viele'
      - 'genau zwei'
    richtig: [0, 1, 2]
    fehler:
      - wert: [0]
        meldung: Nicht jedes System ist eindeutig lösbar. Denk an $x + y = 1$ und $x + y = 2$. Gibt es dafür eine Lösung?
      - wert: [0, 1, 2, 3]
        meldung: Genau zwei Lösungen sind bei linearen Systemen unmöglich. Hat ein lineares System zwei Lösungen, dann hat es schon unendlich viele.
loesung: |
  Ein lineares System mit zwei Unbekannten hat genau eine Lösung, keine Lösung oder unendlich viele Lösungen.
  ---
  Genau zwei Lösungen gibt es nie. In dieser Lektion siehst du, warum: Jede Gleichung ist eine Gerade, und zwei Geraden können sich nicht in genau zwei Punkten treffen.
```

Jede lineare Gleichung $ax + by = c$ ist eine Gerade. Ein Gleichungssystem aus zwei solchen Gleichungen fragt
also: Welche Punkte liegen auf **beiden** Geraden? Damit bekommt die Lösbarkeit aus
[Kapitel 3, Systeme mit zwei Unbekannten](/lernen/mathe3/lgs-matrizen/systeme-mit-zwei-unbekannten) ein Bild. Umgekehrt löst man jede Frage nach dem Schnittpunkt zweier
Geraden mit einem Gleichungssystem.

### Die drei möglichen Lagen

Zwei Geraden $g$ und $h$ in der Ebene können nur auf drei Arten zueinander liegen:

1. **Schneidend:** Sie haben genau einen gemeinsamen Punkt, den **Schnittpunkt**. Das Gleichungssystem hat genau
   eine Lösung.
2. **Echt parallel:** Sie haben dieselbe Richtung, aber keinen gemeinsamen Punkt. Das System hat keine Lösung.
3. **Identisch:** Sie sind dieselbe Gerade. Jeder Punkt ist gemeinsam, das System hat unendlich viele Lösungen.

Das Wort **parallel** heißt: gleiche Richtung. Im weiteren Sinn zählen auch identische Geraden als parallel.
„Echt parallel“ betont, dass sie verschieden sind. Welcher Fall vorliegt, entscheidet man in zwei Schritten.

:::satz[Lage zweier Geraden in der Ebene]
Es seien $\vec r_g$, $\vec r_h$ Richtungsvektoren und $\vec n_g$, $\vec n_h$ Normalvektoren der Geraden $g$ und $h$.
1. Sind die Richtungsvektoren (oder gleichwertig die Normalvektoren) **Vielfache voneinander**, dann sind die
   Geraden parallel. Liegt zusätzlich ein Punkt von $h$ auf $g$, sind sie identisch, sonst echt parallel.
2. Sind sie **keine** Vielfachen voneinander, dann schneiden sich die Geraden in genau einem Punkt.

Die Geraden stehen genau dann **normal aufeinander**, wenn $\vec r_g\cdot\vec r_h = 0$ gilt. Gleichwertig ist
$\vec n_g\cdot\vec n_h = 0$.
:::

:::beispiel[Drei Lagen erkennen]
Wir vergleichen $g: 2x + 3y = 6$ mit drei anderen Geraden.

- $h_1: 4x + 6y = 5$. Der Normalvektor $\begin{pmatrix} 4 \\ 6 \end{pmatrix}$ ist das Doppelte von $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$. Also
  sind die Geraden parallel. Doppelt genommen lautet $g$ aber $4x + 6y = 12$, und $12 \neq 5$. Kein Punkt
  erfüllt beide Gleichungen: **echt parallel**.
- $h_2: -x - 1{,}5y = -3$. Das ist $g$ mal $-\frac12$, die ganze Gleichung samt rechter Seite. **Identisch.**
- $h_3: 3x - 2y = 1$. Die Normalvektoren $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ und $\begin{pmatrix} 3 \\ -2 \end{pmatrix}$ sind keine Vielfachen.
  Die Geraden **schneiden** sich. Wegen $2\cdot 3 + 3\cdot(-2) = 0$ stehen sie sogar **normal** aufeinander.
:::

### Den Schnittpunkt berechnen

Wie man rechnet, hängt davon ab, in welcher Form die Geraden gegeben sind:

- **Beide in allgemeiner Form:** Das ist ein lineares Gleichungssystem in $x$ und $y$. Man löst es mit Einsetzen,
  Gleichsetzen oder Addieren.
- **Eine in Parameterform, eine in allgemeiner Form:** Man setzt die Koordinaten der Parameterform in die
  Gleichung ein. Es entsteht eine Gleichung in $t$. Das ist meistens der schnellste Weg.
- **Beide in Parameterform:** Man setzt die beiden Ausdrücke gleich. Es entsteht ein System in den **zwei**
  Parametern.

:::beispiel[Parameterform trifft allgemeine Form]
Gesucht ist der Schnittpunkt von $g: X = \begin{pmatrix} 1 \\ -2 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ und $h: x + y = 9$.

1. **Koordinaten von $g$ ablesen:** Ein Punkt von $g$ hat $x = 1 + 2t$ und $y = -2 + 3t$.
2. **In $h$ einsetzen**, weil der Schnittpunkt auch $h$ erfüllen muss: $(1 + 2t) + (-2 + 3t) = 9$.
3. **Nach $t$ lösen:** $5t - 1 = 9$, also $5t = 10$ und $t = 2$.
4. **$t$ in $g$ einsetzen:** $S = (1 + 4 \mid -2 + 6) = (5 \mid 4)$.
5. **Probe in $h$:** $5 + 4 = 9$. Stimmt.
:::

Bei zwei Parameterformen gibt es eine Falle. Die beiden Parameter **müssen verschiedene Namen** bekommen,
etwa $t$ und $s$. Das folgende Beispiel zeigt, warum.

:::beispiel[Kreuzende Kurse ohne Zusammenstoß]
Zwei Boote starten um 8 Uhr. Die Koordinaten sind in Kilometern, die Zeiten in Stunden ab 8 Uhr gemessen.
Boot A fährt auf $X = \begin{pmatrix} 0 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 4 \\ 3 \end{pmatrix}$, Boot B auf
$X = \begin{pmatrix} 10 \\ 0 \end{pmatrix} + s\cdot\begin{pmatrix} -2 \\ 6 \end{pmatrix}$.

**Kreuzen sich die Kurse?** Ein Kreuzungspunkt liegt auf beiden Bahnen. Die Boote dürfen aber zu verschiedenen
Zeiten dort sein. Darum heißen die Parameter $t$ und $s$. Gleichsetzen ergibt zwei Gleichungen:
$$4t = 10 - 2s \qquad\text{und}\qquad 3t = 6s.$$
Aus der zweiten Gleichung folgt $t = 2s$. Eingesetzt in die erste: $8s = 10 - 2s$, also $10s = 10$ und $s = 1$.
Dann ist $t = 2$. Der Kreuzungspunkt ist $S = (4\cdot 2 \mid 3\cdot 2) = (8 \mid 6)$. Probe mit Boot B:
$(10 - 2 \mid 0 + 6) = (8 \mid 6)$. Stimmt.

**Stoßen die Boote zusammen?** Boot B ist nach $s = 1$ Stunde in $S$, also um 9 Uhr. Boot A kommt erst nach
$t = 2$ Stunden dorthin, also um 10 Uhr. Zu dieser Zeit ist B längst weiter. **Antwort:** Die Kurse kreuzen sich
im Punkt $(8 \mid 6)$, aber die Boote begegnen sich dort nicht.
:::

```plot
x: [-1, 12]
y: [-1, 10]
gleich: true
graphen:
  - { f: "0.75*x", label: "Boot A", farbe: 0, von: -1, bis: 12 }
  - { f: "-3*(x - 10)", label: "Boot B", farbe: 1, von: 6.7, bis: 10.3 }
punkte:
  - { x: 0, y: 0, label: "A um 8 Uhr" }
  - { x: 10, y: 0, label: "B um 8 Uhr", farbe: 1 }
  - { x: 8, y: 6, label: "S(8 | 6)", farbe: 2 }
  - { x: 4, y: 3, label: "A um 9 Uhr" }
beschriftung: Die Kurse der beiden Boote kreuzen sich in S(8 | 6). Boot B ist schon um 9 Uhr dort, Boot A ist um 9 Uhr erst in (4 | 3) und erreicht S erst um 10 Uhr.
```

:::achtung[Beide Parameter t genannt]
Wer bei den Booten beide Parameter $t$ nennt, rechnet $4t = 10 - 2t$ und $3t = 6t$. Aus der zweiten Gleichung
folgt $t = 0$, und dann verlangt die erste $0 = 10$. Das ist falsch, also scheint es „keinen Schnittpunkt“ zu
geben. Das ist ein Fehlschluss. Mit gleichem Parameter sucht man einen Punkt, an dem beide Boote **zur selben
Zeit** sind, also einen Zusammenstoß. Den gibt es hier nicht. Den Kreuzungspunkt $(8 \mid 6)$ der Kurse gibt es
trotzdem. Für Schnittpunkte von Geraden gilt deshalb: **immer verschiedene Parameternamen.**
:::

### Der Schnittwinkel

Zwei sich schneidende Geraden bilden zwei Winkel, die sich zu $180°$ ergänzen. Als **Schnittwinkel**
bezeichnet man immer den kleineren davon. Er liegt also zwischen $0°$ und $90°$.

Den Winkel zwischen zwei Vektoren kennst du aus [Kapitel 6, Skalarprodukt und Winkel](/lernen/mathe3/vektoren/das-skalarprodukt-und-der-winkel-zwischen-vektoren):
$\cos\varphi = \frac{\vec a\cdot\vec b}{|\vec a|\,|\vec b|}$. Ist das Skalarprodukt negativ, liefert diese Formel
einen stumpfen Winkel. Damit sicher der kleinere Winkel herauskommt, setzt man **Betragsstriche um das
Skalarprodukt**:
$$\cos\varphi = \frac{|\vec r_g\cdot\vec r_h|}{|\vec r_g|\,|\vec r_h|} = \frac{|\vec n_g\cdot\vec n_h|}{|\vec n_g|\,|\vec n_h|}, \qquad 0° \le \varphi \le 90°.$$
Dabei sind $\vec r_g$ und $\vec r_h$ Richtungsvektoren, $\vec n_g$ und $\vec n_h$ Normalvektoren. Man darf wählen, was
schneller geht. Der Winkel zwischen den Normalvektoren ist derselbe wie zwischen den Geraden, denn beide
Normalvektoren sind um denselben rechten Winkel gedreht.

:::beispiel[Schnittwinkel mit Betrag]
Gesucht ist der Schnittwinkel von $g: y = 2x + 1$ und $h: y = -x + 4$.

1. **Richtungsvektoren aus den Steigungen:** $\vec r_g = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ und $\vec r_h = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$, denn
   $\begin{pmatrix} 1 \\ k \end{pmatrix}$ ist immer ein Richtungsvektor.
2. **Skalarprodukt und Längen:** $\vec r_g\cdot\vec r_h = 1 - 2 = -1$, $|\vec r_g| = \sqrt 5$, $|\vec r_h| = \sqrt 2$.
3. **Formel mit Betrag:** $\cos\varphi = \frac{|-1|}{\sqrt 5\cdot\sqrt 2} = \frac{1}{\sqrt{10}} \approx 0{,}3162$.
4. **Winkel:** $\varphi \approx 71{,}57°$.
:::

:::achtung[Den stumpfen Winkel angegeben]
Ohne Betrag rechnet man im letzten Beispiel $\cos\varphi = \frac{-1}{\sqrt{10}} \approx -0{,}3162$ und erhält
$\varphi \approx 108{,}43°$. Das ist der stumpfe Nebenwinkel, nicht der Schnittwinkel. Richtig ist
$180° - 108{,}43° = 71{,}57°$. Mit den Betragsstrichen im Zähler kommt das sofort heraus.
:::

### Eine Gerade parallel oder normal machen

Eine typische Prüfungsfrage lautet: Wähle den Richtungsvektor einer Geraden so, dass sie zu einer gegebenen
Geraden parallel ist, und so, dass sie normal auf ihr steht. Mit dem Schlüsselprinzip aus
[7.2 Normalvektorform, allgemeine Form und Steigung](/lernen/mathe3/analytische-geometrie/normalvektorform-allgemeine-form-und-steigung)
geht das ohne Rechnung:

- **Parallel:** Die neue Gerade braucht dieselbe Richtung, also einen **Richtungsvektor** der gegebenen Geraden.
- **Normal:** Die neue Gerade muss quer zur gegebenen laufen, also in Richtung ihres **Normalvektors**.

**Normieren** heißt, einen Vektor auf die Länge $1$ zu bringen. Man teilt ihn durch seine Länge:
$\vec r_0 = \frac{1}{|\vec r|}\cdot\vec r$. Der Vektor $\vec r_0$ heißt **Einheitsvektor**.

:::beispiel[Richtungsvektor passend wählen und normieren]
Gegeben sind $h: 5x - 12y = 7$ und $g: X = \begin{pmatrix} 3 \\ -1 \end{pmatrix} + t\cdot\vec r$ mit noch offenem $\vec r$.

1. **Ablesen:** Der Normalvektor von $h$ ist $\vec n_h = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$. Gekippt ergibt er den
   Richtungsvektor $\begin{pmatrix} 12 \\ 5 \end{pmatrix}$ von $h$.
2. **Parallel:** $\vec r = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$. Der Aufpunkt $(3 \mid -1)$ liegt nicht auf $h$, denn
   $5\cdot 3 - 12\cdot(-1) = 27 \neq 7$. Die Geraden sind also echt parallel.
3. **Normal:** $\vec r = \vec n_h = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$.
4. **Normieren:** Beide Vektoren haben die Länge $\sqrt{25 + 144} = 13$. Normiert:
   $\frac{1}{13}\begin{pmatrix} 12 \\ 5 \end{pmatrix}$ und $\frac{1}{13}\begin{pmatrix} 5 \\ -12 \end{pmatrix}$.
   Probe: $\left(\frac{12}{13}\right)^2 + \left(\frac{5}{13}\right)^2 = \frac{144 + 25}{169} = 1$.
:::

:::achtung[Den Normalvektor für die Parallele genommen]
Bei $h: 5x - 12y = 7$ wählt jemand für die Parallele $\vec r = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$, „weil das die Zahlen von $h$
sind“. Die Probe zeigt den Fehler: $\begin{pmatrix} 5 \\ -12 \end{pmatrix}\cdot\begin{pmatrix} 12 \\ 5 \end{pmatrix} = 60 - 60 = 0$. Die beiden Richtungen
stehen normal aufeinander. Die Gerade wäre also nicht parallel zu $h$, sondern **normal** zu $h$. Die Zahlen der
Gleichung sind der Normalvektor, nicht der Richtungsvektor.
:::

```aufgabe
id: ag-lage2d-check-normal
titel: Parallel oder normal?
art: check
niveau: 1
angabe: |
  Die Gerade $h$ hat die Gleichung $2x + 7y = 1$. Eine zweite Gerade $g$ hat den Richtungsvektor $\begin{pmatrix} 2 \\ 7 \end{pmatrix}$.
  Wie liegt $g$ zu $h$?
teile:
  - typ: auswahl
    optionen:
      - 'normal zu $h$'
      - 'parallel zu $h$'
      - 'Das kann man ohne Aufpunkt nicht sagen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: $\begin{pmatrix} 2 \\ 7 \end{pmatrix}$ ist der **Normalvektor** von $h$. Eine Gerade, die in diese Richtung läuft, steht quer zu $h$.
      - wert: 2
        meldung: Ob zwei Geraden parallel oder normal sind, hängt nur von ihren Richtungen ab. Der Aufpunkt entscheidet nur zwischen „echt parallel“ und „identisch“.
loesung: |
  Die Zahlen vor $x$ und $y$ bilden den Normalvektor von $h$. $g$ läuft also in Richtung des Normalvektors von $h$.
  ---
  Damit steht $g$ normal auf $h$.
```

:::merke[Rezept: zwei Geraden in der Ebene]
1. **Richtungen vergleichen** (oder Normalvektoren): Sind sie Vielfache voneinander?
2. **Falls ja:** Punktprobe mit einem Punkt der einen Geraden in der anderen. Erfüllt: identisch. Nicht erfüllt:
   echt parallel.
3. **Falls nein:** Schnittpunkt berechnen (Einsetzen oder Gleichungssystem, verschiedene Parameternamen).
   Schnittwinkel mit **Betrag** im Zähler.
4. **Normal** aufeinander genau dann, wenn das Skalarprodukt der Richtungen (oder der Normalvektoren) $0$ ist.
:::

```reflexion
frage: Warum können sich zwei verschiedene Geraden in der Ebene nicht in genau zwei Punkten schneiden?
antwort: |
  Durch zwei verschiedene Punkte geht genau eine Gerade. Hätten $g$ und $h$ zwei verschiedene Punkte gemeinsam,
  dann wären beide „die Gerade durch diese zwei Punkte“, also dieselbe Gerade. Zwei verschiedene Geraden haben also
  höchstens einen gemeinsamen Punkt. Algebraisch passt das zum Gleichungssystem: Ein lineares System hat nie genau
  zwei Lösungen.
```

```aufgabe
id: ag-schnittpunkt-allgemein
titel: Schnittpunkt zweier Geraden
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Berechne den Schnittpunkt von $g: 3x + 2y = 12$ und $h: x - 4y = -10$.
teile:
  - typ: vektor
    label: '$S$'
    namen: ["x", "y"]
    loesung: ["2", "3"]
    fehler:
      - wert: ["3", "2"]
        meldung: Die Zahlen stimmen, aber $x$ und $y$ sind vertauscht. Setze zur Probe in $h$ ein. Für $x = 3$ und $y = 2$ ergibt sich $3 - 8 = -5$, nicht $-10$.
hinweise:
  - 'Löse $h$ nach $x$ auf und setze das Ergebnis in $g$ ein.'
loesung: |
  **Ansatz:** Der Schnittpunkt erfüllt beide Gleichungen. Aus $h$ folgt $x = 4y - 10$. Das setzen wir in $g$ ein, weil dann nur noch $y$ vorkommt.
  ---
  $3(4y - 10) + 2y = 12$, also $14y - 30 = 12$, $14y = 42$ und $y = 3$. Dann ist $x = 4\cdot 3 - 10 = 2$.
  ---
  $S(2 \mid 3)$. Probe: $3\cdot 2 + 2\cdot 3 = 12$ und $2 - 12 = -10$. Beide Gleichungen stimmen.
```

```aufgabe
id: ag-lage-ebene
titel: Lage zweier Geraden bestimmen
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Bestimme jeweils die Lage der Geraden $g: x - 3y = 4$ zur angegebenen Geraden.

  (1) $h_1: -2x + 6y = -8$ $\quad$ (2) $h_2: 3x - 9y = 4$ $\quad$ (3) $h_3: 6x + 2y = 1$ $\quad$ (4) $h_4: X = \begin{pmatrix} 1 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 1 \end{pmatrix}$
teile:
  - typ: auswahl
    label: '(1)'
    optionen: ["identisch", "echt parallel", "schneidend, nicht normal", "schneidend und normal"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Multipliziere $g$ mit $-2$: $-2x + 6y = -8$. Das ist genau $h_1$, samt rechter Seite.'
  - typ: auswahl
    label: '(2)'
    optionen: ["identisch", "echt parallel", "schneidend, nicht normal", "schneidend und normal"]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Normalvektoren sind Vielfache, aber nicht die ganzen Gleichungen. $g$ mal $3$ ergibt $3x - 9y = 12$, nicht $4$.'
  - typ: auswahl
    label: '(3)'
    optionen: ["identisch", "echt parallel", "schneidend, nicht normal", "schneidend und normal"]
    richtig: [3]
    fehler:
      - wert: 2
        meldung: 'Berechne das Skalarprodukt der Normalvektoren: $1\cdot 6 + (-3)\cdot 2$.'
  - typ: auswahl
    label: '(4)'
    optionen: ["identisch", "echt parallel", "schneidend, nicht normal", "schneidend und normal"]
    richtig: [2]
    fehler:
      - wert: 3
        meldung: 'Hier ist ein **Richtungsvektor** gegeben. Normal zu $g$ wäre $h_4$, wenn sein Richtungsvektor ein Vielfaches des Normalvektors $\begin{pmatrix} 1 \\ -3 \end{pmatrix}$ wäre.'
      - wert: 1
        meldung: 'Parallel zu $g$ hieße: Der Richtungsvektor steht normal auf $\vec n_g$. Prüfe $\begin{pmatrix} 1 \\ 1 \end{pmatrix}\cdot\begin{pmatrix} 1 \\ -3 \end{pmatrix}$.'
hinweise:
  - 'Der Normalvektor von $g$ ist $\begin{pmatrix} 1 \\ -3 \end{pmatrix}$. Vergleiche ihn mit den Normalvektoren der anderen Geraden.'
loesung: |
  **Ansatz:** Normalvektor von $g$ ist $\vec n_g = \begin{pmatrix} 1 \\ -3 \end{pmatrix}$. Wir vergleichen jeweils die Richtungen und machen bei parallelen Geraden die Punktprobe.
  ---
  (1) $\begin{pmatrix} -2 \\ 6 \end{pmatrix} = -2\,\vec n_g$, und auch die rechte Seite passt: $-2\cdot 4 = -8$. Identisch. (2) $\begin{pmatrix} 3 \\ -9 \end{pmatrix} = 3\,\vec n_g$, aber $3\cdot 4 = 12 \neq 4$. Echt parallel.
  ---
  (3) $\vec n_g\cdot\begin{pmatrix} 6 \\ 2 \end{pmatrix} = 6 - 6 = 0$. Die Normalvektoren stehen normal aufeinander, also auch die Geraden. Schneidend und normal.
  ---
  (4) $\begin{pmatrix} 1 \\ 1 \end{pmatrix}\cdot\vec n_g = 1 - 3 = -2 \neq 0$. Also ist $h_4$ nicht parallel zu $g$. Der Richtungsvektor ist auch kein Vielfaches von $\vec n_g$, also nicht normal. Schneidend, nicht normal.
```

```aufgabe
id: ag-schnitt-parameter
titel: Schnittpunkt zweier Parameterformen
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Bestimme den Schnittpunkt $S$ und den Schnittwinkel von $g: X = \begin{pmatrix} -1 \\ 2 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 1 \end{pmatrix}$ und
  $h: X = \begin{pmatrix} 2 \\ 10 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ -2 \end{pmatrix}$. Runde den Winkel auf zwei Dezimalstellen.
teile:
  - typ: vektor
    label: '$S$'
    namen: ["x", "y"]
    loesung: ["5", "4"]
    fehler:
      - wert: ["4", "6"]
        meldung: Du hast den Wert von $t$ in die Gleichung von $h$ eingesetzt. Der Parameter $t$ gehört zu $g$, der Parameter $s$ zu $h$.
  - typ: zahl
    label: 'Schnittwinkel'
    einheit: "°"
    loesung: "inGrad(acos(1/(sqrt(10)*sqrt(5))))"
    fehler:
      - wert: "inGrad(acos(-1/(sqrt(10)*sqrt(5))))"
        meldung: Das ist der stumpfe Nebenwinkel. Der Schnittwinkel ist der kleinere der beiden Winkel.
hinweise:
  - 'Setze die Koordinaten gleich: $-1 + 3t = 2 + s$ und $2 + t = 10 - 2s$. Löse nach $t$ und $s$.'
  - 'Für den Winkel: $\cos\varphi = \frac{|\vec r_g\cdot\vec r_h|}{|\vec r_g|\,|\vec r_h|}$.'
loesung: |
  **Ansatz:** Der Schnittpunkt liegt auf beiden Geraden. Wir setzen gleich und verwenden verschiedene Parameter, weil der Punkt in $g$ und in $h$ zu verschiedenen Parameterwerten gehören darf.
  ---
  $-1 + 3t = 2 + s$ und $2 + t = 10 - 2s$. Aus der ersten Gleichung folgt $s = 3t - 3$. Eingesetzt in die zweite: $2 + t = 10 - 6t + 6$, also $7t = 14$ und $t = 2$. Dann $s = 3$.
  ---
  $S = (-1 + 6 \mid 2 + 2) = (5 \mid 4)$. Probe mit $h$ und $s = 3$: $(2 + 3 \mid 10 - 6) = (5 \mid 4)$. Stimmt.
  ---
  Winkel: $\vec r_g\cdot\vec r_h = 3 - 2 = 1$, $|\vec r_g| = \sqrt{10}$, $|\vec r_h| = \sqrt 5$. $\cos\varphi = \frac{1}{\sqrt{50}} \approx 0{,}1414$, also $\varphi \approx 81{,}87°$.
```

```aufgabe
id: ag-sk-parallel-normal
titel: Richtungsvektor für parallel und normal
niveau: 2
lernziel: 1
kompetenz: anwenden
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgabe 2.2 (abgewandelt)
angabe: |
  Gegeben sind $g: X = \begin{pmatrix} 1 \\ 2 \end{pmatrix} + t\cdot\vec r$ und $h: 8x + 15y = 4$.

  a) Bestimme einen Richtungsvektor $\vec r$, sodass $g$ und $h$ parallel sind.

  b) Bestimme einen Richtungsvektor $\vec r$, sodass $g$ und $h$ aufeinander normal stehen.

  c) Normiere die Vektoren aus a) und b). Gib jeweils den Einheitsvektor mit positiver $x$-Komponente an.
teile:
  - typ: vektor
    label: 'a) $\vec r$, sodass $g$ parallel zu $h$ ist'
    vielfaches: true
    loesung: ["15", "-8"]
    fehler:
      - wert: ["8", "15"]
        meldung: Das ist der Normalvektor von $h$. Mit ihm als Richtung steht $g$ normal auf $h$. Für die Parallele musst du ihn kippen.
  - typ: vektor
    label: 'b) $\vec r$, sodass $g$ normal auf $h$ steht'
    vielfaches: true
    loesung: ["8", "15"]
    fehler:
      - wert: ["15", "-8"]
        meldung: Das ist der Richtungsvektor von $h$. Damit wäre $g$ parallel zu $h$. Normal heißt Richtung des Normalvektors.
  - typ: vektor
    label: 'c) normiert zu a)'
    loesung: ["15/17", "-8/17"]
    fehler:
      - wert: ["15", "-8"]
        meldung: Der Vektor ist noch nicht normiert. Teile ihn durch seine Länge.
      - wert: ["15/23", "-8/23"]
        meldung: Du hast durch die Summe der Komponenten geteilt. Die Länge ist $\sqrt{15^2 + 8^2}$.
  - typ: vektor
    label: 'c) normiert zu b)'
    loesung: ["8/17", "15/17"]
    fehler:
      - wert: ["8", "15"]
        meldung: Der Vektor ist noch nicht normiert. Teile ihn durch seine Länge $17$.
hinweise:
  - 'Lies den Normalvektor von $h$ aus den Zahlen vor $x$ und $y$ ab.'
  - 'Parallel heißt: dieselbe Richtung wie $h$, also den Normalvektor kippen. Normal heißt: Richtung des Normalvektors. Normieren: durch die Länge teilen.'
loesung: |
  **Ansatz:** Schlüsselprinzip. Der Normalvektor von $h$ ist $\vec n_h = \begin{pmatrix} 8 \\ 15 \end{pmatrix}$, der Richtungsvektor von $h$ ist gekippt $\begin{pmatrix} 15 \\ -8 \end{pmatrix}$.
  ---
  **a)** $\vec r = \begin{pmatrix} 15 \\ -8 \end{pmatrix}$. Probe: $\vec r\cdot\vec n_h = 120 - 120 = 0$, also läuft $g$ parallel zu $h$. Der Aufpunkt liegt nicht auf $h$, denn $8 + 30 = 38 \neq 4$. Die Geraden sind echt parallel.
  ---
  **b)** $\vec r = \vec n_h = \begin{pmatrix} 8 \\ 15 \end{pmatrix}$.
  ---
  **c)** Beide Vektoren haben die Länge $\sqrt{64 + 225} = \sqrt{289} = 17$. Normiert: $\frac{1}{17}\begin{pmatrix} 15 \\ -8 \end{pmatrix}$ und $\frac{1}{17}\begin{pmatrix} 8 \\ 15 \end{pmatrix}$. Probe: $\frac{225 + 64}{289} = 1$.
```

```aufgabe
id: ag-schnittwinkel-ebene
titel: Schnittwinkel aus den Normalvektoren
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Unter welchem Winkel schneiden sich $g: 4x - y = 2$ und $h: -2x - 3y = 9$? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$\varphi$'
    einheit: "°"
    loesung: "inGrad(acos(5/sqrt(17*13)))"
    fehler:
      - wert: "inGrad(acos(-5/sqrt(17*13)))"
        meldung: Das ist der stumpfe Nebenwinkel. Setze Betragsstriche um das Skalarprodukt, dann kommt der Schnittwinkel heraus.
      - wert: "acos(5/sqrt(17*13))"
        meldung: Das ist der Winkel im Bogenmaß. Gefragt ist er in Grad.
hinweise:
  - 'Die Normalvektoren sind $\begin{pmatrix} 4 \\ -1 \end{pmatrix}$ und $\begin{pmatrix} -2 \\ -3 \end{pmatrix}$.'
  - 'Verwende $\cos\varphi = \frac{|\vec n_g\cdot\vec n_h|}{|\vec n_g|\,|\vec n_h|}$ mit Betrag im Zähler.'
loesung: |
  **Ansatz:** Der Winkel zwischen den Geraden ist derselbe wie zwischen ihren Normalvektoren. Die stehen direkt in den Gleichungen.
  ---
  $\vec n_g\cdot\vec n_h = 4\cdot(-2) + (-1)\cdot(-3) = -8 + 3 = -5$. Längen: $|\vec n_g| = \sqrt{17}$, $|\vec n_h| = \sqrt{13}$.
  ---
  $\cos\varphi = \frac{|-5|}{\sqrt{17}\cdot\sqrt{13}} = \frac{5}{\sqrt{221}} \approx 0{,}3363$, also $\varphi \approx 70{,}35°$. Ohne Betrag käme $109{,}65°$ heraus, der stumpfe Nebenwinkel.
```

```aufgabe
id: ag-kollision
titel: Kreuzen sich die Kurse, stoßen die Schiffe zusammen?
niveau: 2
lernziel: 1
kompetenz: modellieren
angabe: |
  Zwei Schiffe fahren ab 8 Uhr geradlinig. $t$ und $s$ sind Zeiten in Stunden ab 8 Uhr, die Koordinaten sind in Seemeilen
  gemessen. Schiff A fährt auf $X = \begin{pmatrix} -2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 2 \end{pmatrix}$, Schiff B auf
  $X = \begin{pmatrix} 10 \\ 1 \end{pmatrix} + s\cdot\begin{pmatrix} -1 \\ 2 \end{pmatrix}$.

  a) In welchem Punkt kreuzen sich die Kurse?

  b) Zu welcher Uhrzeit ist Schiff A dort, zu welcher Schiff B? Gib jeweils die Stunden nach 8 Uhr an.

  c) Droht ein Zusammenstoß?
teile:
  - typ: vektor
    label: 'a) Kreuzungspunkt'
    namen: ["x", "y"]
    loesung: ["7", "7"]
    fehler:
      - wert: ["1", "3"]
        meldung: Das ist der Ort von Schiff A nach einer Stunde. Gesucht ist der Punkt, an dem sich die beiden **Bahnen** kreuzen. Setze die Parameterformen gleich.
  - typ: zahl
    label: 'b) Schiff A: Stunden nach 8 Uhr'
    loesung: "3"
  - typ: zahl
    label: 'b) Schiff B: Stunden nach 8 Uhr'
    loesung: "3"
  - typ: auswahl
    label: 'c) Zusammenstoß?'
    optionen:
      - 'Ja, beide Schiffe sind um 11 Uhr im Kreuzungspunkt.'
      - 'Nein, sie sind zu verschiedenen Zeiten dort.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Vergleiche deine beiden Zeiten aus b). Sind sie gleich, sind beide Schiffe zur selben Zeit am selben Ort.
hinweise:
  - 'Setze gleich, mit verschiedenen Parametern: $-2 + 3t = 10 - s$ und $1 + 2t = 1 + 2s$.'
  - 'Aus der zweiten Gleichung folgt $t = s$. Ein Zusammenstoß droht, wenn beide Schiffe zur selben Zeit im Kreuzungspunkt sind.'
loesung: |
  **Ansatz:** Für den Kreuzungspunkt der Kurse setzen wir die Bahnen gleich. Die Parameter heißen verschieden, weil die Schiffe zunächst zu verschiedenen Zeiten dort sein dürfen.
  ---
  $-2 + 3t = 10 - s$ und $1 + 2t = 1 + 2s$. Die zweite Gleichung ergibt $t = s$. In die erste eingesetzt: $-2 + 3t = 10 - t$, also $4t = 12$ und $t = 3$. Damit ist auch $s = 3$.
  ---
  **a)** Kreuzungspunkt: $(-2 + 9 \mid 1 + 6) = (7 \mid 7)$. Probe mit B: $(10 - 3 \mid 1 + 6) = (7 \mid 7)$.
  ---
  **b)** Beide sind nach $3$ Stunden dort, also um 11 Uhr. **c)** Ja, ein Zusammenstoß droht, denn beide Schiffe sind zur selben Zeit am selben Ort. Eines muss den Kurs oder die Geschwindigkeit ändern.
gefuehrt:
  - text: 'Setze die $y$-Koordinaten der beiden Bahnen gleich: $1 + 2t = 1 + 2s$. Was folgt daraus für $t$ und $s$?'
    teil: { typ: auswahl, optionen: ['$t = s$', '$t = 2s$', '$t = 0$'], richtig: [0], fehler: [ { wert: 2, meldung: 'Zieht man auf beiden Seiten $1$ ab und teilt durch $2$, bleibt $t = s$. Das gilt für jeden Wert, nicht nur für $0$.' } ] }
    erklaerung: '$1 + 2t = 1 + 2s$ ergibt $2t = 2s$, also $t = s$.'
  - text: 'Setze $s = t$ in die Gleichung der $x$-Koordinaten $-2 + 3t = 10 - s$ ein und löse nach $t$.'
    teil: { typ: zahl, loesung: "3" }
    erklaerung: '$-2 + 3t = 10 - t$ ergibt $4t = 12$, also $t = 3$ und damit $s = 3$.'
  - text: 'Berechne den Kreuzungspunkt, indem du $t = 3$ in die Bahn von A einsetzt.'
    teil: { typ: vektor, namen: ["x", "y"], loesung: ["7", "7"] }
    erklaerung: '$(-2 + 9 \mid 1 + 6) = (7 \mid 7)$. Mit $s = 3$ in B: $(10 - 3 \mid 1 + 6)$, derselbe Punkt.'
  - text: 'Vergleiche die beiden Parameterwerte. Was bedeutet es, dass $t$ und $s$ gleich sind?'
    erklaerung: 'Beide Schiffe sind nach $3$ Stunden, also um 11 Uhr, im Punkt $(7 \mid 7)$. Sie stoßen dort zusammen, wenn niemand ausweicht.'
```

```aufgabe
id: ag-dreieck-aus-geraden
titel: Ein Dreieck aus drei Geraden
niveau: 3
lernziel: 1
kompetenz: anwenden
angabe: |
  Die Geraden $g: x - 2y = -4$, $h: 2x + y = 7$ und $k: x + 8y = -4$ begrenzen ein Dreieck.

  a) Berechne die Eckpunkte $A = g \cap h$, $B = h \cap k$ und $C = g \cap k$. (Das Zeichen $\cap$ heißt „geschnitten mit“.)

  b) Zeige, dass das Dreieck bei $A$ einen rechten Winkel hat.

  c) Berechne den Flächeninhalt des Dreiecks.

  d) Wie groß ist der Innenwinkel bei $B$? Runde auf zwei Dezimalstellen.
teile:
  - typ: vektor
    label: 'a) $A$'
    namen: ["x", "y"]
    loesung: ["2", "3"]
    fehler:
      - wert: ["3", "2"]
        meldung: '$x$ und $y$ sind vertauscht. Probe in $g$: $3 - 4 = -1 \neq -4$.'
  - typ: vektor
    label: 'a) $B$'
    namen: ["x", "y"]
    loesung: ["4", "-1"]
  - typ: vektor
    label: 'a) $C$'
    namen: ["x", "y"]
    loesung: ["-4", "0"]
  - typ: auswahl
    label: 'b) Begründung'
    optionen:
      - 'Die Normalvektoren von $g$ und $h$ haben das Skalarprodukt $0$.'
      - 'Die Normalvektoren von $g$ und $h$ sind Vielfache voneinander.'
      - 'Die rechten Seiten von $g$ und $h$ haben verschiedene Vorzeichen.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Vielfache Normalvektoren bedeuten parallele Geraden. Parallele Geraden bilden keine Ecke.
  - typ: zahl
    label: 'c) Flächeninhalt'
    loesung: "1/2*sqrt(20)*sqrt(45)"
    fehler:
      - wert: "sqrt(20)*sqrt(45)"
        meldung: Das ist die Fläche des Rechtecks mit diesen Seiten. Ein rechtwinkliges Dreieck ist halb so groß.
  - typ: zahl
    label: 'd) Winkel bei $B$'
    einheit: "°"
    loesung: "inGrad(acos(20/sqrt(20*65)))"
    fehler:
      - wert: "90 - inGrad(acos(20/sqrt(20*65)))"
        meldung: Das ist der Winkel bei $C$. Bei $B$ treffen sich die Geraden $h$ und $k$.
hinweise:
  - 'Jeder Eckpunkt ist der Schnittpunkt von zwei Geraden. Löse jeweils ein Gleichungssystem.'
  - 'b) Vergleiche die Normalvektoren $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$ und $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$. c) Bei einem rechten Winkel in $A$ ist die Fläche $\frac12\,|AB|\cdot|AC|$. d) Winkel zwischen $\overrightarrow{BA}$ und $\overrightarrow{BC}$.'
loesung: |
  **Ansatz:** Ecken sind Schnittpunkte von je zwei Geraden. Der rechte Winkel zeigt sich am Skalarprodukt, und mit ihm ist die Fläche besonders einfach.
  ---
  **a)** $A$: Aus $g$ folgt $x = 2y - 4$. In $h$: $2(2y - 4) + y = 7$, also $5y = 15$, $y = 3$ und $x = 2$. $A(2 \mid 3)$.
  $B$: Aus $h$ folgt $y = 7 - 2x$. In $k$: $x + 8(7 - 2x) = -4$, also $-15x = -60$, $x = 4$ und $y = -1$. $B(4 \mid -1)$.
  $C$: Aus $g$ folgt $x = 2y - 4$. In $k$: $2y - 4 + 8y = -4$, also $y = 0$ und $x = -4$. $C(-4 \mid 0)$.
  ---
  **b)** $\begin{pmatrix} 1 \\ -2 \end{pmatrix}\cdot\begin{pmatrix} 2 \\ 1 \end{pmatrix} = 2 - 2 = 0$. Die Normalvektoren von $g$ und $h$ stehen normal aufeinander, also auch die Geraden. Sie schneiden sich in $A$, also ist dort der rechte Winkel.
  ---
  **c)** $\overrightarrow{AB} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$ mit Länge $\sqrt{20}$, $\overrightarrow{AC} = \begin{pmatrix} -6 \\ -3 \end{pmatrix}$ mit Länge $\sqrt{45}$. Fläche $= \frac12\sqrt{20}\cdot\sqrt{45} = \frac12\sqrt{900} = 15$.
  ---
  **d)** $\overrightarrow{BA} = \begin{pmatrix} -2 \\ 4 \end{pmatrix}$, $\overrightarrow{BC} = \begin{pmatrix} -8 \\ 1 \end{pmatrix}$. Skalarprodukt $16 + 4 = 20$, Längen $\sqrt{20}$ und $\sqrt{65}$. $\cos\beta = \frac{20}{\sqrt{1300}} \approx 0{,}5547$, also $\beta \approx 56{,}31°$. **Probe:** Der Winkel bei $C$ ist dann $90° - 56{,}31° = 33{,}69°$, und die Winkelsumme ist $180°$.
```

## Abstand Punkt–Gerade: die Hessesche Normalform

```aufgabe
id: ag-hnf-vorwissen
titel: Einen Vektor normieren
art: check
niveau: 1
angabe: |
  Welcher Vektor hat dieselbe Richtung wie $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$ und die Länge $1$? Zum Nachlesen:
  [Kapitel 6](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor) (Einheitsvektor).
teile:
  - typ: vektor
    loesung: ["0.6", "0.8"]
    fehler:
      - wert: ["6/14", "8/14"]
        meldung: Du hast durch die Summe der Komponenten geteilt. Geteilt wird durch die **Länge** $\sqrt{6^2 + 8^2}$.
      - wert: ["3", "4"]
        meldung: Das ist die Hälfte des Vektors, aber seine Länge ist $5$, nicht $1$. Teile durch die volle Länge $10$.
loesung: |
  Normieren heißt, durch die Länge zu teilen. Die Länge ist $\sqrt{36 + 64} = \sqrt{100} = 10$.
  ---
  $\frac{1}{10}\begin{pmatrix} 6 \\ 8 \end{pmatrix} = \begin{pmatrix} 0{,}6 \\ 0{,}8 \end{pmatrix}$. Probe: $0{,}36 + 0{,}64 = 1$.
```

Wie weit ist ein Haus von einer geraden Straße entfernt? Gemeint ist immer der **kürzeste** Abstand. Man misst
ihn nicht schräg, sondern quer zur Straße, also im rechten Winkel. In dieser Lektion lernst du zwei Wege, diesen
Abstand zu berechnen. Der erste ist anschaulich: Man sucht den nächstgelegenen Punkt. Der zweite ist eine
kurze Formel, die **Hessesche Normalform**. Sie ist nach dem Mathematiker Otto Hesse benannt.

### Warum der kürzeste Weg im rechten Winkel verläuft

Es sei $Q$ ein Punkt neben der Geraden $g$. Wir fällen das **Lot** von $Q$ auf $g$: die Strecke von $Q$ zu $g$, die
normal auf $g$ steht. Ihr Endpunkt $F$ auf der Geraden heißt **Lotfußpunkt**.

Jeder andere Punkt $X$ der Geraden ist weiter von $Q$ entfernt. Der Grund: Die Punkte $Q$, $F$ und $X$ bilden ein
rechtwinkliges Dreieck mit dem rechten Winkel bei $F$. Die Strecke $QX$ ist darin die Hypotenuse. Nach dem Satz
des Pythagoras ist sie länger als die Kathete $QF$. Darum ist der Abstand $d(Q, g)$ die Länge $|QF|$.

```aufgabe
id: ag-hnf-check-naechster-punkt
titel: Der nächstgelegene Punkt
art: check
niveau: 1
angabe: |
  Welcher Punkt der waagrechten Geraden $y = 2$ liegt dem Punkt $Q(3 \mid 5)$ am nächsten?
teile:
  - typ: vektor
    namen: ["x", "y"]
    loesung: ["3", "2"]
    fehler:
      - wert: ["0", "2"]
        meldung: Der Punkt $(0 \mid 2)$ liegt zwar auf der Geraden, aber schräg unter $Q$. Der kürzeste Weg führt senkrecht nach unten.
loesung: |
  Der kürzeste Weg zur waagrechten Geraden führt senkrecht nach unten, also bei gleichem $x = 3$.
  ---
  Der Lotfußpunkt ist $F(3 \mid 2)$. Der Abstand ist $5 - 2 = 3$.
```

### Erster Weg: der Lotfußpunkt

Das Lot steht normal auf $g$. Es zeigt also in Richtung eines **Normalvektors** von $g$. Darum ist die Gerade durch
$Q$ mit dem Normalvektor $\vec n$ als Richtung genau die Lotgerade:
$$\ell: X = Q + t\cdot\vec n.$$
Ihr Schnittpunkt mit $g$ ist der Lotfußpunkt $F$. Der Abstand ist dann $|QF| = |t|\cdot|\vec n|$, denn man geht von $Q$
aus das $t$-Fache von $\vec n$.

:::beispiel[Ein Brunnen wird an die Hauptleitung angeschlossen]
Ein Brunnen liegt bei $Q(7 \mid 4)$. Eine gerade Hauptleitung verläuft entlang $g: 3x + 4y = 12$. Die Einheiten sind
Meter. Die Verbindungsleitung soll möglichst kurz sein. Wo wird sie angeschlossen, und wie lang ist sie?

1. **Lotgerade:** Der Normalvektor von $g$ ist $\vec n = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Also
   $\ell: X = \begin{pmatrix} 7 \\ 4 \end{pmatrix} + t\cdot\begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
2. **In $g$ einsetzen:** $3(7 + 3t) + 4(4 + 4t) = 12$, also $37 + 25t = 12$. Daraus folgt $25t = -25$ und $t = -1$.
3. **Lotfußpunkt:** $F = (7 - 3 \mid 4 - 4) = (4 \mid 0)$. Probe in $g$: $12 + 0 = 12$. Stimmt.
4. **Länge:** $|QF| = |t|\cdot|\vec n| = 1\cdot\sqrt{9 + 16} = 5$.

**Antwort:** Die Leitung wird im Punkt $(4 \mid 0)$ angeschlossen und ist $5$ m lang.
:::

```plot
x: [-2, 9]
y: [-6, 6]
gleich: true
graphen:
  - { f: "(12 - 3*x)/4", label: "g: 3x + 4y = 12", farbe: 0 }
strecken:
  - { von: [7, 4], nach: [1, -4], gestrichelt: true, farbe: 1 }
vektoren:
  - { von: [4, 0], nach: [4.6, 0.8], label: "n₀", farbe: 3 }
punkte:
  - { x: 7, y: 4, label: "Q(7 | 4)" }
  - { x: 4, y: 0, label: "F(4 | 0)", farbe: 2 }
  - { x: 1, y: -4, label: "Q′(1 | −4)", farbe: 1 }
beschriftung: Das Lot von Q auf g steht normal auf g und trifft g im Lotfußpunkt F. Die Strecke QF ist 5 lang. Verlängert man das Lot um dieselbe Länge über F hinaus, erreicht man den Spiegelpunkt Q′. Der violette Pfeil ist der normierte Normalvektor n₀ = (0,6, 0,8).
```

### Zweiter Weg: die Hessesche Normalform

Der Lotfußpunkt-Weg funktioniert immer, ist aber lang. Man kann ihn **einmal allgemein** durchrechnen. Dann
erhält man eine Formel, die man in Zukunft nur noch einsetzt.

**Worum geht es?** Wir suchen eine Formel für $d(Q, g)$, wenn $g: ax + by = c$ und $Q(x_0 \mid y_0)$ gegeben sind.

**In kleinen Schritten.** Der Normalvektor ist $\vec n = \begin{pmatrix} a \\ b \end{pmatrix}$, die Lotgerade
$X = \begin{pmatrix} x_0 + ta \\ y_0 + tb \end{pmatrix}$.

1. Einsetzen in $g$: $a(x_0 + ta) + b(y_0 + tb) = c$.
2. Ausmultiplizieren und ordnen: $a x_0 + b y_0 + t(a^2 + b^2) = c$.
3. Nach $t$ auflösen: $t = \dfrac{c - a x_0 - b y_0}{a^2 + b^2}$.
4. Abstand $= |t|\cdot|\vec n|$ mit $|\vec n| = \sqrt{a^2 + b^2}$. Im Bruch kürzt sich eine Wurzel weg:
   $d = \dfrac{|a x_0 + b y_0 - c|}{a^2 + b^2}\cdot\sqrt{a^2 + b^2} = \dfrac{|a x_0 + b y_0 - c|}{\sqrt{a^2 + b^2}}$.

**In Worten:** Man setzt den Punkt in die linke Seite ein, zieht die rechte Seite ab, nimmt den Betrag und teilt
durch die Länge des Normalvektors.

:::satz[Abstand Punkt–Gerade, Hessesche Normalform]
Der Abstand des Punktes $Q(x_0 \mid y_0)$ von der Geraden $g: ax + by = c$ ist
$$d(Q, g) = \frac{|a x_0 + b y_0 - c|}{\sqrt{a^2 + b^2}}.$$
Die Gleichung $\dfrac{ax + by - c}{\sqrt{a^2 + b^2}} = 0$ heißt **Hessesche Normalform** (kurz HNF) von $g$. Sie ist
die allgemeine Form, in der alles links steht und durch die Länge des Normalvektors geteilt ist.
:::

:::beispiel[Der Brunnen mit der Formel]
Für $Q(7 \mid 4)$ und $g: 3x + 4y = 12$ ist
$$d = \frac{|3\cdot 7 + 4\cdot 4 - 12|}{\sqrt{3^2 + 4^2}} = \frac{|21 + 16 - 12|}{5} = \frac{25}{5} = 5.$$
Das ist derselbe Wert wie über den Lotfußpunkt, aber in einer Zeile.
:::

:::achtung[Durch die Länge des Normalvektors nicht geteilt]
Eine typische Fehlrechnung beim Brunnen: „$d = |3\cdot 7 + 4\cdot 4 - 12| = 25$ m.“ Der Betrag im Zähler ist
noch nicht der Abstand. Er ist der Abstand mal $|\vec n|$. Das sieht man auch so: Multipliziert man die Gleichung von
$g$ mit $2$, beschreibt $6x + 8y = 24$ dieselbe Gerade, aber der Zähler würde doppelt so groß. Erst das Teilen durch
$|\vec n| = 5$ macht das Ergebnis unabhängig davon. Richtig ist $d = \frac{25}{5} = 5$ m.
:::

:::achtung[Die rechte Seite falsch berücksichtigt]
Eine zweite typische Fehlrechnung: „$d = \frac{|3\cdot 7 + 4\cdot 4 + 12|}{5} = 9{,}8$.“ Hier wurde die $12$ addiert
statt abgezogen. In der Formel steht $ax_0 + by_0 - c$, weil man die Gleichung zuerst auf die Form „$\ldots = 0$“
bringt: $3x + 4y - 12 = 0$. Richtig: $|21 + 16 - 12| = 25$ und $d = 5$. Am sichersten ist es, die Gleichung vor dem
Einsetzen immer als $ax + by - c = 0$ aufzuschreiben.
:::

### Das Vorzeichen verrät die Seite

Lässt man in der HNF den Betrag weg, erhält man einen **vorzeichenbehafteten** Abstand. Er ist positiv auf der
Seite, in die $\vec n$ zeigt, und negativ auf der anderen Seite. Für $g: 3x + 4y = 12$:

- $Q(7 \mid 4)$: $\frac{21 + 16 - 12}{5} = +5$.
- Ursprung $O(0 \mid 0)$: $\frac{0 + 0 - 12}{5} = -2{,}4$.

Die Vorzeichen sind verschieden. Also liegen $Q$ und der Ursprung auf **verschiedenen** Seiten der Leitung.
Der Ursprung ist $2{,}4$ m von ihr entfernt.

### Spiegelpunkt und Abstand paralleler Geraden

**Spiegelpunkt.** Spiegelt man $Q$ an $g$, geht man vom Lotfußpunkt aus noch einmal dieselbe Strecke weiter. Mit
dem Wert $t$ aus der Lotgeraden gilt also $Q' = Q + 2t\cdot\vec n$. Beim Brunnen:
$Q' = (7 - 6 \mid 4 - 8) = (1 \mid -4)$. Probe: Der Mittelpunkt von $Q$ und $Q'$ ist $\left(\frac{7 + 1}{2} \,\middle|\, \frac{4 - 4}{2}\right) = (4 \mid 0) = F$.

**Parallele Geraden** haben überall denselben Abstand voneinander. Man nimmt einen Punkt der einen Geraden und
berechnet seinen Abstand zur anderen. Haben beide Gleichungen **genau denselben** Normalvektor, also
$ax + by = c_1$ und $ax + by = c_2$, geht es noch schneller:
$$d(g, h) = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}.$$

:::beispiel[Abstand zweier paralleler Geraden]
Gegeben sind $g: 3x + 4y = 12$ und $h: 6x + 8y = -11$.

1. **Parallel?** $\begin{pmatrix} 6 \\ 8 \end{pmatrix} = 2\cdot\begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Ja.
2. **Gleichen Normalvektor herstellen:** $h$ durch $2$ teilen ergibt $3x + 4y = -5{,}5$.
3. **Formel:** $d = \frac{|12 - (-5{,}5)|}{5} = \frac{17{,}5}{5} = 3{,}5$.
4. **Probe mit einem Punkt:** $(4 \mid 0)$ liegt auf $g$. Sein Abstand zu $h$ ist $\frac{|6\cdot 4 + 0 + 11|}{\sqrt{100}} = \frac{35}{10} = 3{,}5$.
:::

:::achtung[Rechte Seiten verglichen, ohne die Normalvektoren anzugleichen]
Im letzten Beispiel rechnet jemand direkt $\frac{|12 - (-11)|}{5} = 4{,}6$. Das ist falsch. Die rechte Seite
$-11$ gehört zum Normalvektor $\begin{pmatrix} 6 \\ 8 \end{pmatrix}$, die $12$ zu $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Man vergleicht damit Äpfel mit
Birnen. Erst wenn beide Gleichungen denselben Normalvektor haben, darf man die rechten Seiten abziehen. Richtig ist
$3{,}5$.
:::

:::merke[Rezept: Abstand eines Punktes von einer Geraden in der Ebene]
1. Gerade in die Form $ax + by - c = 0$ bringen.
2. **Abstand:** $d = \dfrac{|a x_0 + b y_0 - c|}{\sqrt{a^2 + b^2}}$. Ohne Betrag sagt das Vorzeichen die Seite.
3. **Lotfußpunkt** (falls gefragt): Lotgerade $X = Q + t\cdot\vec n$ in $g$ einsetzen. Kontrolle: $d = |t|\cdot|\vec n|$.
4. **Spiegelpunkt:** $Q' = Q + 2t\cdot\vec n$. **Parallele Geraden:** gleichen Normalvektor herstellen, dann
   $\frac{|c_1 - c_2|}{|\vec n|}$.
:::

```reflexion
frage: Man kann die Gleichung einer Geraden mit jeder Zahl ungleich null multiplizieren. Warum ändert das den Abstand aus der HNF nicht?
antwort: |
  Multipliziert man $ax + by = c$ mit einer Zahl $\lambda \neq 0$, werden $a$, $b$ und $c$ alle $\lambda$-mal so groß.
  Der Zähler $|a x_0 + b y_0 - c|$ wird dadurch $|\lambda|$-mal so groß. Der Nenner $\sqrt{a^2 + b^2}$ wird aber
  ebenfalls $|\lambda|$-mal so groß, denn $\sqrt{(\lambda a)^2 + (\lambda b)^2} = |\lambda|\sqrt{a^2 + b^2}$. Der Faktor
  kürzt sich weg. Genau dafür ist das Teilen durch $|\vec n|$ da: Der Abstand hängt nur von der Geraden ab, nicht von
  der zufällig gewählten Gleichung.
```

```aufgabe
id: ag-abstand-hnf
titel: Abstand mit der HNF
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Berechne den Abstand des Punktes $Q(-2 \mid 7)$ von der Geraden $g: 5x - 12y = 4$. Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$d$'
    loesung: "abs(5*(-2) - 12*7 - 4)/13"
    anzeige: '\tfrac{98}{13} \approx 7{,}54'
    fehler:
      - wert: "98"
        meldung: Der Betrag im Zähler ist noch nicht der Abstand. Teile durch die Länge des Normalvektors $\sqrt{25 + 144}$.
      - wert: "90/13"
        meldung: 'Die rechte Seite $4$ muss abgezogen werden: $5\cdot(-2) - 12\cdot 7 - 4$.'
      - wert: "98/17"
        meldung: Die Länge des Normalvektors ist nicht $5 + 12$, sondern $\sqrt{5^2 + 12^2}$.
hinweise:
  - 'Formel: $d = \frac{|a x_0 + b y_0 - c|}{\sqrt{a^2 + b^2}}$ mit $a = 5$, $b = -12$ und $c = 4$.'
loesung: |
  **Ansatz:** Hessesche Normalform. Dazu brauchen wir die Länge des Normalvektors: $|\vec n| = \sqrt{25 + 144} = 13$.
  ---
  $d = \frac{|5\cdot(-2) - 12\cdot 7 - 4|}{13} = \frac{|-10 - 84 - 4|}{13} = \frac{98}{13} \approx 7{,}54$.
```

```aufgabe
id: ag-abstand-seite
titel: Auf welcher Seite liegen die Punkte?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Gegeben ist $g: 2x - y = 3$. Liegen $P(1 \mid 1)$ und $R(4 \mid 3)$ auf derselben Seite von $g$? Wie weit ist $P$ von $g$
  entfernt? Runde auf drei Dezimalstellen.
teile:
  - typ: auswahl
    label: 'Seite'
    optionen:
      - 'auf verschiedenen Seiten'
      - 'auf derselben Seite'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Vergleiche die Vorzeichen von $2x - y - 3$ für beide Punkte, ohne Betrag. Gleiches Vorzeichen bedeutet gleiche Seite.
  - typ: zahl
    label: '$d(P, g)$'
    loesung: "2/sqrt(5)"
    fehler:
      - wert: "2"
        meldung: Das ist erst der Betrag des Zählers. Teile noch durch $|\vec n| = \sqrt 5$.
      - wert: "-2/sqrt(5)"
        meldung: Ein Abstand ist nie negativ. Das Minus sagt nur, auf welcher Seite $P$ liegt. Nimm den Betrag.
hinweise:
  - 'Setze beide Punkte in $\frac{2x - y - 3}{\sqrt 5}$ ein, ohne Betrag.'
loesung: |
  **Ansatz:** Ohne Betrag liefert die HNF einen vorzeichenbehafteten Abstand. Das Vorzeichen zeigt die Seite.
  ---
  $P$: $\frac{2 - 1 - 3}{\sqrt 5} = \frac{-2}{\sqrt 5}$. $R$: $\frac{8 - 3 - 3}{\sqrt 5} = \frac{2}{\sqrt 5}$. Verschiedene Vorzeichen, also verschiedene Seiten.
  ---
  $d(P, g) = \frac{2}{\sqrt 5} \approx 0{,}894$. Bemerkung: $R$ ist genauso weit entfernt, nur auf der anderen Seite.
```

```aufgabe
id: ag-lotfusspunkt-ebene
titel: Lotfußpunkt und Spiegelpunkt
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Bestimme den Lotfußpunkt $F$ von $Q(-1 \mid 6)$ auf $g: 2x - y = -3$, den Abstand $d(Q, g)$ und den an $g$ gespiegelten
  Punkt $Q'$.
teile:
  - typ: vektor
    label: '$F$'
    namen: ["x", "y"]
    loesung: ["1", "5"]
    fehler:
      - wert: ["-1", "6"]
        meldung: Das ist $Q$ selbst. Der Lotfußpunkt liegt auf $g$. Prüfe mit der Gleichung von $g$.
  - typ: zahl
    label: '$d$'
    loesung: "sqrt(5)"
    anzeige: '\sqrt5 \approx 2{,}24'
    fehler:
      - wert: "1"
        meldung: '$t = 1$ ist nur der Parameterwert. Der Abstand ist $|t|\cdot|\vec n|$, und $|\vec n| = \sqrt 5$.'
      - wert: "5"
        meldung: 'Du hast mit $|\vec n|^2$ statt mit $|\vec n|$ multipliziert. Es ist $|\vec n| = \sqrt{4 + 1}$.'
  - typ: vektor
    label: '$Q^\prime$'
    namen: ["x", "y"]
    loesung: ["3", "4"]
    fehler:
      - wert: ["1", "5"]
        meldung: Das ist der Lotfußpunkt. Der Spiegelpunkt liegt noch einmal genauso weit auf der anderen Seite.
hinweise:
  - 'Die Lotgerade ist $X = Q + t\cdot\begin{pmatrix} 2 \\ -1 \end{pmatrix}$. Setze sie in $g$ ein.'
  - 'Mit dem gefundenen $t$: $F = Q + t\cdot\vec n$, $d = |t|\cdot|\vec n|$ und $Q'' = Q + 2t\cdot\vec n$.'
loesung: |
  **Ansatz:** Das Lot von $Q$ auf $g$ zeigt in Richtung des Normalvektors $\vec n = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$. Lotgerade: $X = \begin{pmatrix} -1 \\ 6 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ -1 \end{pmatrix}$.
  ---
  Einsetzen in $g$: $2(-1 + 2t) - (6 - t) = -3$, also $-8 + 5t = -3$ und $t = 1$. $F = (-1 + 2 \mid 6 - 1) = (1 \mid 5)$. Probe: $2 - 5 = -3$.
  ---
  $d = |t|\cdot|\vec n| = 1\cdot\sqrt 5 \approx 2{,}24$. Kontrolle mit der HNF: $\frac{|-2 - 6 + 3|}{\sqrt 5} = \frac{5}{\sqrt 5} = \sqrt 5$.
  ---
  $Q' = Q + 2t\cdot\vec n = (-1 + 4 \mid 6 - 2) = (3 \mid 4)$. Probe: Der Mittelpunkt von $Q$ und $Q'$ ist $(1 \mid 5) = F$.
gefuehrt:
  - text: 'Welcher Vektor ist die Richtung der Lotgeraden?'
    teil: { typ: vektor, vielfaches: true, loesung: ["2", "-1"], fehler: [ { wert: ["1", "2"], meldung: 'Das ist ein Richtungsvektor von $g$. Das Lot steht aber normal auf $g$, also zeigt es in Richtung des Normalvektors.' } ] }
    erklaerung: 'Das Lot steht normal auf $g$, also in Richtung des Normalvektors $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$.'
  - text: 'Setze $X = (-1 + 2t \mid 6 - t)$ in $g: 2x - y = -3$ ein. Welcher Wert für $t$ ergibt sich?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '$2(-1 + 2t) - (6 - t) = -8 + 5t = -3$, also $t = 1$.'
  - text: 'Berechne den Lotfußpunkt $F$.'
    teil: { typ: vektor, namen: ["x", "y"], loesung: ["1", "5"] }
    erklaerung: '$F = (-1 + 2 \mid 6 - 1) = (1 \mid 5)$.'
  - text: 'Wie bekommt man aus $t$ den Abstand und den Spiegelpunkt? Überlege, bevor du weiterliest.'
    erklaerung: 'Der Abstand ist $|t|\cdot|\vec n| = \sqrt 5$. Für den Spiegelpunkt geht man den doppelten Weg: $Q'' = Q + 2t\cdot\vec n = (3 \mid 4)$.'
```

```aufgabe
id: ag-abstand-parallelen
titel: Abstand paralleler Geraden
niveau: 2
lernziel: 2
kompetenz: rechnen
angabe: |
  Zeige, dass $g: x - 2y = 3$ und $h: -2x + 4y = 14$ parallel sind, und berechne ihren Abstand. Runde auf zwei
  Dezimalstellen.
teile:
  - typ: zahl
    label: '$d(g, h)$'
    loesung: "10/sqrt(5)"
    anzeige: '2\sqrt5 \approx 4{,}47'
    fehler:
      - wert: "11/sqrt(5)"
        meldung: Du hast die rechten Seiten $3$ und $14$ verglichen, ohne die Normalvektoren gleich zu machen. Teile $h$ zuerst durch $-2$.
      - wert: "10/sqrt(20)"
        meldung: Nach dem Angleichen ist der gemeinsame Normalvektor $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$ mit Länge $\sqrt 5$. Teile durch diese Länge.
      - wert: "10"
        meldung: Teile noch durch die Länge des Normalvektors, $\sqrt 5$.
hinweise:
  - 'Bringe $h$ auf denselben Normalvektor wie $g$, indem du durch $-2$ teilst.'
  - 'Dann gilt $d = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}$.'
loesung: |
  **Ansatz:** Parallele Geraden haben überall denselben Abstand. Mit gleichem Normalvektor genügt die Formel $\frac{|c_1 - c_2|}{|\vec n|}$.
  ---
  $\vec n_h = \begin{pmatrix} -2 \\ 4 \end{pmatrix} = -2\cdot\begin{pmatrix} 1 \\ -2 \end{pmatrix} = -2\,\vec n_g$. Die Geraden sind parallel. $h$ durch $-2$ geteilt: $x - 2y = -7$.
  ---
  $d = \frac{|3 - (-7)|}{\sqrt{1 + 4}} = \frac{10}{\sqrt 5} = 2\sqrt 5 \approx 4{,}47$.
  ---
  Kontrolle mit einem Punkt: $(3 \mid 0)$ liegt auf $g$. HNF von $h$: $\frac{|3 - 0 + 7|}{\sqrt 5} = \frac{10}{\sqrt 5}$. Stimmt.
```

```aufgabe
id: ag-abstand-fehler-finden
titel: Liegt der Punkt wirklich auf der Geraden?
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Sara soll den Abstand von $Q(2 \mid -3)$ zur Geraden $g: y = 2x + 1$ berechnen. Sie liest $a = 2$, $b = 1$ und $c = 1$ ab und
  rechnet
  $$d = \frac{|2\cdot 2 + 1\cdot(-3) - 1|}{\sqrt{2^2 + 1^2}} = \frac{0}{\sqrt 5} = 0.$$
  Sie schließt: „$Q$ liegt auf $g$.“
teile:
  - typ: auswahl
    label: 'Wo liegt der Fehler?'
    optionen:
      - 'Die Gleichung $y = 2x + 1$ ist nicht in der Form $ax + by = c$. Richtig ist $2x - y = -1$.'
      - 'Sie hätte durch $5$ statt durch $\sqrt 5$ teilen müssen.'
      - 'Es gibt keinen Fehler. $Q$ liegt auf $g$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Nenner ist die Länge des Normalvektors, und die ist eine Wurzel. Der Fehler liegt schon früher, beim Ablesen von $a$, $b$ und $c$.
      - wert: 2
        meldung: 'Prüfe direkt: Für $x = 2$ ist $2x + 1 = 5$, nicht $-3$. $Q$ liegt also nicht auf $g$.'
  - typ: zahl
    label: 'Richtiger Abstand'
    loesung: "8/sqrt(5)"
    fehler:
      - wert: "0"
        meldung: Das ist Saras Ergebnis. Bring $y = 2x + 1$ zuerst in die Form $2x - y = -1$.
      - wert: "8"
        meldung: Teile noch durch die Länge des Normalvektors $\sqrt{2^2 + (-1)^2}$.
hinweise:
  - 'Bringe $y = 2x + 1$ auf die Form $ax + by = c$. Welches Vorzeichen hat $y$?'
  - 'Dann ist $a = 2$, $b = -1$ und $c = -1$.'
loesung: |
  **Ansatz:** Die HNF braucht die Gerade in der Form $ax + by = c$. In $y = 2x + 1$ steht $y$ auf der falschen Seite. Sara hat die Zahlen abgelesen, ohne umzuformen.
  ---
  Umformen: $2x - y = -1$. Also $a = 2$, $b = -1$ und $c = -1$.
  ---
  $d = \frac{|2\cdot 2 - (-3) - (-1)|}{\sqrt{4 + 1}} = \frac{|4 + 3 + 1|}{\sqrt 5} = \frac{8}{\sqrt 5} \approx 3{,}58$.
  ---
  **Probe:** Für $x = 2$ liefert $g$ den Wert $y = 5$. Der Punkt $Q$ liegt mit $y = -3$ also deutlich unter der Geraden. Ein Abstand von $0$ kann nicht stimmen.
```

```aufgabe
id: ag-abstand-sendemast
titel: Reicht der Sendemast bis zur Bahnstrecke?
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Eine gerade Bahnstrecke führt durch die Bahnhöfe $A(-3 \mid 5)$ und $B(5 \mid -1)$. Ein Sendemast steht bei $M(4 \mid 6)$.
  Alle Koordinaten sind in Kilometern. Der Mast versorgt alles im Umkreis von $4{,}5$ km.

  a) Gib die Bahnstrecke in der Form $ax + by = c$ an (als Tripel; jedes Vielfache ist richtig).

  b) Wie weit ist der Mast von der Bahnstrecke entfernt?

  c) Welcher Punkt der Strecke liegt dem Mast am nächsten?

  d) Hat ein Zug auf der Strecke irgendwo Empfang?
teile:
  - typ: vektor
    label: 'a) $(a, b, c)$'
    namen: ["a", "b", "c"]
    vielfaches: true
    loesung: ["3", "4", "11"]
    fehler:
      - wert: ["4", "-3", "-27"]
        meldung: Du hast den Richtungsvektor $\overrightarrow{AB}$ (gekürzt) als Normalvektor verwendet. Kippe ihn zuerst.
  - typ: zahl
    label: 'b) Abstand'
    einheit: km
    loesung: "abs(3*4 + 4*6 - 11)/5"
    fehler:
      - wert: "25"
        meldung: Teile noch durch die Länge des Normalvektors, $\sqrt{9 + 16} = 5$.
  - typ: vektor
    label: 'c) nächster Punkt'
    namen: ["x", "y"]
    loesung: ["1", "2"]
  - typ: auswahl
    label: 'd) Empfang?'
    optionen:
      - 'Nein, die Strecke ist überall mehr als $4{,}5$ km vom Mast entfernt.'
      - 'Ja, in der Nähe von $(1 \mid 2)$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der nächste Punkt der Strecke ist $5$ km entfernt. Alle anderen Punkte sind noch weiter weg.
hinweise:
  - 'a) $\overrightarrow{AB}$ berechnen, kürzen und kippen. b) HNF. c) Lotgerade $X = M + t\cdot\vec n$ in die Gleichung einsetzen.'
  - 'd) Vergleiche den kleinsten Abstand mit der Reichweite.'
loesung: |
  **Ansatz:** Die Strecke ist eine Gerade, der Mast ein Punkt. Die Frage nach dem Empfang ist eine Frage nach dem **kürzesten** Abstand, also nach dem Lot.
  ---
  **a)** $\overrightarrow{AB} = \begin{pmatrix} 8 \\ -6 \end{pmatrix}$, gekürzt $\begin{pmatrix} 4 \\ -3 \end{pmatrix}$, gekippt $\vec n = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. $c = 3\cdot(-3) + 4\cdot 5 = 11$. Bahnstrecke: $3x + 4y = 11$. Probe mit $B$: $15 - 4 = 11$.
  ---
  **b)** $d = \frac{|3\cdot 4 + 4\cdot 6 - 11|}{5} = \frac{25}{5} = 5$ km.
  ---
  **c)** Lotgerade $X = (4 + 3t \mid 6 + 4t)$ eingesetzt: $3(4 + 3t) + 4(6 + 4t) = 11$, also $36 + 25t = 11$ und $t = -1$. Nächster Punkt $(1 \mid 2)$. Er liegt genau in der Mitte zwischen $A$ und $B$.
  ---
  **d)** $5$ km $> 4{,}5$ km. **Antwort:** Kein Punkt der Strecke ist näher als $5$ km am Mast, ein Zug hat also nirgends Empfang von diesem Mast.
```

```aufgabe
id: ag-abstand-umkehr
titel: Geraden mit vorgegebenem Abstand
niveau: 3
lernziel: 2
kompetenz: anwenden
angabe: |
  Für jede Zahl $c$ ist $g_c: 4x - 3y = c$ eine Gerade. Alle diese Geraden sind parallel.

  a) Für welche Werte von $c$ hat $g_c$ vom Punkt $P(2 \mid -1)$ den Abstand $3$? Gib beide Werte an, getrennt durch einen
  Strichpunkt.

  b) Wie weit sind die beiden Geraden aus a) voneinander entfernt?

  c) Welche der beiden Geraden liegt näher am Ursprung?
teile:
  - typ: menge
    label: 'a) $c$'
    loesung: ["-4", "26"]
    fehler:
      - wert: ["26"]
        meldung: 'Die Gleichung $|11 - c| = 15$ hat zwei Lösungen, weil der Betrag zwei Fälle zulässt: $11 - c = 15$ oder $11 - c = -15$.'
      - wert: ["8", "14"]
        meldung: 'Du hast den Abstand $3$ nicht mit $|\vec n| = 5$ multipliziert. Aus $\frac{|11 - c|}{5} = 3$ folgt $|11 - c| = 15$.'
  - typ: zahl
    label: 'b) Abstand der beiden Geraden'
    loesung: "abs(26 - (-4))/5"
    fehler:
      - wert: "3"
        meldung: Die beiden Geraden liegen auf verschiedenen Seiten von $P$, jede im Abstand $3$. Wie weit sind sie also voneinander entfernt?
  - typ: auswahl
    label: 'c) näher am Ursprung'
    optionen: ['$g_{-4}$', '$g_{26}$']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Abstand vom Ursprung: $\frac{|c|}{5}$. Vergleiche $\frac{4}{5}$ und $\frac{26}{5}$.'
hinweise:
  - 'Setze in die HNF ein: $\frac{|4\cdot 2 - 3\cdot(-1) - c|}{5} = 3$.'
  - 'Löse die Betragsgleichung $|11 - c| = 15$ mit zwei Fällen. Für b) verwende die Formel für parallele Geraden, für c) die HNF mit dem Ursprung $(0 \mid 0)$.'
loesung: |
  **Ansatz:** Das ist eine Umkehraufgabe. Der Abstand ist gegeben, der Parameter $c$ ist gesucht. Wir stellen die HNF auf und lösen nach $c$.
  ---
  **a)** $|\vec n| = \sqrt{16 + 9} = 5$. Bedingung: $\frac{|8 + 3 - c|}{5} = 3$, also $|11 - c| = 15$. Fall 1: $11 - c = 15$ ergibt $c = -4$. Fall 2: $11 - c = -15$ ergibt $c = 26$.
  ---
  **b)** Die Geraden $4x - 3y = -4$ und $4x - 3y = 26$ haben denselben Normalvektor. $d = \frac{|26 - (-4)|}{5} = 6$. Das passt: $P$ liegt genau in der Mitte, je $3$ von beiden entfernt.
  ---
  **c)** Abstand vom Ursprung: $g_{-4}$ hat $\frac{|0 - 0 + 4|}{5} = 0{,}8$, $g_{26}$ hat $\frac{26}{5} = 5{,}2$. Also liegt $g_{-4}$ näher am Ursprung.
```

## Geraden im Raum: parallel, schneidend oder windschief

```aufgabe
id: ag-raum-vorwissen
titel: Ein Vektor im Raum
art: check
niveau: 1
angabe: |
  Gegeben sind $A(1 \mid 0 \mid 2)$ und $B(4 \mid 2 \mid -1)$. Gib $\overrightarrow{AB}$ an. Zum Nachlesen:
  [Kapitel 6, Was ist ein Vektor?](/lernen/mathe3/vektoren/was-ist-ein-vektor-pfeile-punkte-und-koordinaten).
teile:
  - typ: vektor
    loesung: ["3", "2", "-3"]
    fehler:
      - wert: ["-3", "-2", "3"]
        meldung: Das ist $A - B$, also der Vektor von $B$ nach $A$. Rechne „Ende minus Anfang“.
      - wert: ["3", "2", "1"]
        meldung: 'Achte bei der dritten Komponente auf das Vorzeichen: $-1 - 2 = -3$.'
loesung: |
  Im Raum funktioniert alles wie in der Ebene, nur mit drei Komponenten: $\overrightarrow{AB} = B - A$.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 4 - 1 \\ 2 - 0 \\ -1 - 2 \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \\ -3 \end{pmatrix}$.
```

Jetzt verlassen wir die Ebene. Im Raum hat jeder Punkt drei Koordinaten $(x \mid y \mid z)$. Die gute Nachricht: Die
Parameterform einer Geraden funktioniert wörtlich gleich. Die neue Herausforderung: Im Raum können zwei Geraden
auf eine vierte Art zueinander liegen, die es in der Ebene nicht gibt. Und eine einzelne lineare Gleichung
beschreibt im Raum keine Gerade mehr.

### Punkte im Raum zeichnen: der Schrägriss

Auf Papier kann man nur zweidimensional zeichnen. Für Skizzen im Raum verwendet man deshalb den **Schrägriss**.
So geht er:

- Die $y$-Achse zeigt nach rechts, die $z$-Achse nach oben. Beide werden in voller Länge gezeichnet.
- Die $x$-Achse zeigt „aus dem Blatt heraus“ auf dich zu. Man zeichnet sie schräg nach links unten, unter einem
  Winkel von etwa $45°$, und **verkürzt** etwa auf die halbe Länge. Das erzeugt den Eindruck von Tiefe.
- Einen Punkt $(x \mid y \mid z)$ trägt man in drei Schritten ein: erst $x$ entlang der schrägen Achse, dann $y$ nach
  rechts, dann $z$ nach oben. Die Hilfslinien bilden die Kanten eines Quaders.

```plot
x: [-3, 5]
y: [-3, 4]
gleich: true
achsen: { x: "y", y: "z" }
strecken:
  - { von: [0, 0], nach: [-2.1, -2.1] }
  - { von: [0, 0], nach: [-1.4, -1.4], gestrichelt: true, farbe: 1 }
  - { von: [-1.4, -1.4], nach: [1.6, -1.4], gestrichelt: true, farbe: 1 }
  - { von: [1.6, -1.4], nach: [1.6, 0.6], gestrichelt: true, farbe: 1 }
punkte:
  - { x: -2.1, y: -2.1, label: "x", offen: true }
  - { x: -1.4, y: -1.4, label: "(4 | 0 | 0)", farbe: 1 }
  - { x: 1.6, y: -1.4, label: "(4 | 3 | 0)", farbe: 1 }
  - { x: 1.6, y: 0.6, label: "P(4 | 3 | 2)", farbe: 0 }
beschriftung: Schrägriss des Punktes P(4 | 3 | 2). Die x-Achse ist schräg nach links unten und verkürzt gezeichnet. Von O aus geht man 4 entlang der x-Achse, dann 3 nach rechts in y-Richtung, dann 2 nach oben in z-Richtung.
```

:::pruefung[Skizzen im Raum lohnen sich]
Beginne jede Raumaufgabe mit einer kleinen Schrägriss-Skizze der gegebenen Punkte. Sie zeigt dir, wo die Dinge
ungefähr liegen, und sie zeigt der Prüferin, dass du die Lage verstanden hast. Sag dazu etwa „Ich habe die
$x$-Achse schräg und verkürzt gezeichnet“. Aber: **Ob sich zwei Geraden schneiden, darfst du nie aus der Skizze
ablesen.** Im Schrägriss können zwei Geraden scheinbar kreuzen, die im Raum aneinander vorbeilaufen. Das zeigt
die Skizze zu den windschiefen Geraden in dieser Lektion.
:::

### Die Parameterform im Raum

Eine Gerade im Raum ist wieder durch einen Punkt $P$ und eine Richtung $\vec r \neq \vec 0$ festgelegt:
$$g: X = P + t\cdot\vec r = \begin{pmatrix} p_1 \\ p_2 \\ p_3 \end{pmatrix} + t\cdot\begin{pmatrix} r_1 \\ r_2 \\ r_3 \end{pmatrix}, \qquad t \in \R.$$
Alles aus [7.1 Geraden in der Ebene: die Parameterform](/lernen/mathe3/analytische-geometrie/geraden-in-der-ebene-die-parameterform)
gilt weiter: Ortsvektor und Richtungsvektor haben verschiedene Rollen, und dieselbe Gerade hat viele
Parameterformen. Bei der **Punktprobe** gibt es jetzt drei Koordinatengleichungen. Alle drei müssen dasselbe $t$
liefern.

:::achtung[Eine einzelne Gleichung ist im Raum keine Gerade]
Wer die Gerade durch $(0 \mid 0 \mid 0)$ und $(1 \mid 1 \mid 0)$ als „$x - y = 0$“ angibt, hat sich in der Dimension
geirrt. In der Ebene stimmt das. Im Raum erfüllt aber zum Beispiel auch $(5 \mid 5 \mid 7)$ die Gleichung $x - y = 0$,
obwohl dieser Punkt nicht auf der Geraden liegt. Die Gleichung beschreibt im Raum eine ganze **Ebene**, eine
senkrechte „Wand“ über der Geraden. Der Grund: Eine lineare Gleichung legt nur **einen** Normalvektor fest. Im Raum
stehen auf einer Geraden aber unendlich viele Richtungen normal. Eine Gerade im Raum gibt man deshalb in
Parameterform an, oder als Schnitt von **zwei** Ebenengleichungen. Mehr dazu in
[7.8 Zwei Ebenen](/lernen/mathe3/analytische-geometrie/zwei-ebenen-schnittgerade-winkel-und-gleichungssysteme).
:::

```aufgabe
id: ag-raum-check-gleichung
titel: Was beschreibt eine Gleichung im Raum?
art: check
niveau: 1
angabe: |
  Was beschreibt die Gleichung $x + y = 3$, wenn man sie im Raum mit den Koordinaten $(x \mid y \mid z)$ liest?
teile:
  - typ: auswahl
    optionen:
      - 'eine Ebene, die parallel zur $z$-Achse steht'
      - 'eine Gerade'
      - 'einen einzelnen Punkt'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In der Ebene wäre es eine Gerade. Im Raum ist aber $z$ frei wählbar. Zu jedem Punkt der Geraden gehört die ganze senkrechte Linie darüber und darunter.
      - wert: 2
        meldung: 'Schon $(3 \mid 0 \mid 0)$ und $(0 \mid 3 \mid 5)$ erfüllen die Gleichung. Es gibt also unendlich viele Lösungen.'
loesung: |
  In der Gleichung kommt $z$ nicht vor. Jeder Punkt $(x \mid y \mid z)$ mit $x + y = 3$ erfüllt sie, egal welches $z$ er hat.
  ---
  Über der Geraden $x + y = 3$ im Boden steht also eine senkrechte „Wand“. Das ist eine Ebene parallel zur $z$-Achse.
```

### Die vierte Lage: windschief

In der Ebene schneiden sich zwei nicht parallele Geraden immer. Im Raum nicht. Ein Bild aus dem Alltag: Eine
Autobahn führt auf einer Brücke über eine Landstraße. Die beiden Straßen laufen in verschiedene Richtungen, sind
also nicht parallel. Trotzdem treffen sie sich nie, weil die eine über der anderen verläuft.

:::definition[Windschiefe Geraden]
Zwei Geraden im Raum heißen **windschief**, wenn sie **nicht parallel** sind und **keinen gemeinsamen Punkt**
haben. Windschiefe Geraden liegen nicht gemeinsam in einer Ebene.
:::

**Beispiel:** Die $y$-Achse $g: X = s\cdot\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ und die Gerade
$h: X = \begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$. Die Gerade $h$ läuft in $x$-Richtung, eine Einheit über
dem Boden. Die Richtungen sind nicht parallel. Ein gemeinsamer Punkt müsste auf $g$ die Höhe $z = 0$ haben, auf $h$
aber die Höhe $z = 1$. Das geht nicht. Also sind $g$ und $h$ windschief.

**Nichtbeispiel:** Die $y$-Achse und die $x$-Achse sind **nicht** windschief. Sie schneiden sich im Ursprung.
Auch zwei parallele Geraden ohne gemeinsamen Punkt sind nicht windschief, sondern echt parallel.

```plot
x: [-3, 6]
y: [-3, 3]
gleich: true
achsen: { x: "y", y: "z" }
strecken:
  - { von: [0, 0], nach: [-2.1, -2.1] }
  - { von: [-1, 0], nach: [5, 0], farbe: 0 }
  - { von: [2.35, 1.35], nach: [-0.1, -1.1], farbe: 1 }
  - { von: [2, 0], nach: [2, 1], gestrichelt: true, farbe: 2 }
punkte:
  - { x: -2.1, y: -2.1, label: "x", offen: true }
  - { x: 5, y: 0, label: "g (y-Achse)" }
  - { x: -0.1, y: -1.1, label: "h", farbe: 1 }
  - { x: 1, y: 0, label: "scheinbarer Schnitt", farbe: 3, offen: true }
  - { x: 2, y: 1, label: "(0 | 2 | 1)", farbe: 2 }
beschriftung: Schrägriss der windschiefen Geraden g und h. Die Gerade h läuft eine Einheit über dem Boden in x-Richtung, die grüne gestrichelte Linie zeigt diese Höhe über dem Punkt (0 | 2 | 0). Im Bild scheinen sich g und h zu kreuzen. Im Raum läuft h aber über g hinweg.
```

### Wie man die Lage entscheidet

Zwei Geraden $g: X = P + t\cdot\vec r$ und $h: X = Q + s\cdot\vec u$ im Raum liegen auf genau eine von vier Arten:
identisch, echt parallel, schneidend oder windschief. Man entscheidet in zwei Stufen.

:::merke[Rezept: Lage zweier Geraden im Raum]
1. **Sind $\vec r$ und $\vec u$ Vielfache voneinander?**
   - **Ja:** Die Geraden sind parallel. Punktprobe mit $Q$ in $g$: erfüllt heißt **identisch**, nicht erfüllt heißt
     **echt parallel**.
   - **Nein:** weiter mit Schritt 2.
2. **Gleichsetzen** $P + t\cdot\vec r = Q + s\cdot\vec u$. Das sind drei Gleichungen für nur zwei Unbekannte $t$ und $s$.
   - Aus **zwei** der Gleichungen $t$ und $s$ berechnen.
   - In die **dritte** Gleichung einsetzen. Erfüllt heißt **schneidend** (Schnittpunkt durch Einsetzen von $t$ in $g$).
     Nicht erfüllt heißt **windschief**.
:::

Warum braucht man die dritte Gleichung? Zwei Gleichungen mit zwei Unbekannten haben fast immer eine Lösung. Erst
die dritte Gleichung prüft, ob diese Lösung wirklich passt. Darin steckt der ganze Unterschied zwischen
„schneidend“ und „windschief“.

:::beispiel[Zwei Geraden, die sich schneiden]
$g: X = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}$ und
$h: X = \begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}$.

1. **Richtungen:** $\begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}$ ist kein Vielfaches von $\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}$. Aus der ersten
   Komponente müsste der Faktor $\frac12$ sein, aus der zweiten aber $1$. Also nicht parallel.
2. **Gleichsetzen:** $1 + 2t = 1 + s$, $\;2 + t = 1 + s$, $\;t = 3 - s$.
3. **Zwei Gleichungen lösen:** Die ersten beiden haben dieselbe rechte Seite $1 + s$. Also $1 + 2t = 2 + t$ und
   $t = 1$. Dann $s = 1 + 2t - 1 = 2$.
4. **Dritte Gleichung prüfen:** $t = 1$ und $3 - s = 1$. Stimmt.
5. **Schnittpunkt:** $S = (1 + 2 \mid 2 + 1 \mid 0 + 1) = (3 \mid 3 \mid 1)$. Kontrolle mit $h$ und $s = 2$:
   $(1 + 2 \mid 1 + 2 \mid 3 - 2) = (3 \mid 3 \mid 1)$.
:::

:::beispiel[Zwei windschiefe Geraden]
$g: X = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$ und
$h: X = \begin{pmatrix} 2 \\ 3 \\ 1 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.

1. **Richtungen:** Die zweite Komponente ist bei $\vec u$ null, bei $\vec r$ nicht. Ein Vielfaches ist unmöglich.
   Also nicht parallel.
2. **Gleichsetzen:** $1 + t = 2 + s$, $\;2t = 3$, $\;2 - t = 1 + s$.
3. **Zwei Gleichungen lösen:** Die zweite ergibt $t = 1{,}5$. Die dritte ergibt dann $s = 1 - t = -0{,}5$.
4. **Erste Gleichung prüfen:** links $1 + 1{,}5 = 2{,}5$, rechts $2 - 0{,}5 = 1{,}5$. Widerspruch.

Es gibt keinen gemeinsamen Punkt, und parallel sind die Geraden auch nicht. Sie sind **windschief**.
:::

:::achtung[Die dritte Gleichung nicht geprüft]
Im letzten Beispiel rechnet jemand nur mit der zweiten und dritten Gleichung. Er erhält $t = 1{,}5$ und
$s = -0{,}5$ und schreibt: „Schnittpunkt $S = g(1{,}5) = (2{,}5 \mid 3 \mid 0{,}5)$.“ Die Kontrolle mit $h$ deckt den
Fehler auf. Für $s = -0{,}5$ liefert $h$ den Punkt $(1{,}5 \mid 3 \mid 0{,}5)$, also einen **anderen** Punkt. Zwei der
drei Gleichungen sind fast immer lösbar. Erst die dritte entscheidet. Wer sie weglässt, findet „Schnittpunkte“,
die es nicht gibt.
:::

:::beispiel[Zwei parallele Geraden]
$g: X = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$ und
$h: X = \begin{pmatrix} 4 \\ 1 \\ 5 \end{pmatrix} + s\cdot\begin{pmatrix} -2 \\ 4 \\ -6 \end{pmatrix}$.

1. **Richtungen:** $\begin{pmatrix} -2 \\ 4 \\ -6 \end{pmatrix} = -2\cdot\begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$. Die Geraden sind parallel.
2. **Punktprobe mit $(4 \mid 1 \mid 5)$ in $g$:** Aus $2 + t = 4$ folgt $t = 2$. Aus $-1 - 2t = 1$ folgt $t = -1$.
   Die Werte sind verschieden.

Der Aufpunkt von $h$ liegt nicht auf $g$. Die Geraden sind **echt parallel**.
:::

:::achtung[Kein gemeinsamer Punkt heißt nicht „parallel“]
Eine verbreitete Fehlüberlegung lautet: „Die Gleichungen haben keine gemeinsame Lösung, also sind die Geraden
parallel.“ In der Ebene stimmt das, im Raum nicht. Bei den windschiefen Geraden aus dem Beispiel gibt es auch keinen
gemeinsamen Punkt, aber die Richtungen $\begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ sind keine
Vielfachen. „Parallel“ ist eine Aussage über die **Richtungen**. Darum vergleicht man im Rezept immer zuerst die
Richtungsvektoren.
:::

### Der Winkel zwischen zwei Geraden im Raum

Den Winkel zwischen zwei Geraden misst man wie in der Ebene zwischen den Richtungsvektoren, mit Betrag im Zähler:
$$\cos\varphi = \frac{|\vec r\cdot\vec u|}{|\vec r|\,|\vec u|}, \qquad 0° \le \varphi \le 90°.$$
Das funktioniert sogar bei windschiefen Geraden. Man denkt sich eine der beiden parallel verschoben, bis sie die
andere trifft. Bei den sich schneidenden Geraden aus dem Beispiel ist
$\vec r\cdot\vec u = 2 + 1 - 1 = 2$, $|\vec r| = \sqrt 6$ und $|\vec u| = \sqrt 3$. Also
$\cos\varphi = \frac{2}{\sqrt{18}} \approx 0{,}4714$ und $\varphi \approx 61{,}87°$.

```aufgabe
id: ag-raum-check-windschief
titel: Windschief oder parallel?
art: check
niveau: 1
angabe: |
  Zwei Geraden im Raum haben keinen gemeinsamen Punkt. Ihre Richtungsvektoren sind $\begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix}$ und
  $\begin{pmatrix} 2 \\ 1 \\ 4 \end{pmatrix}$. Wie liegen sie?
teile:
  - typ: auswahl
    optionen:
      - 'windschief'
      - 'echt parallel'
      - 'schneidend'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Für „parallel“ müssten die Richtungsvektoren Vielfache sein. Aus der ersten Komponente folgt der Faktor $2$, aber $2\cdot 0 = 0 \neq 1$.
      - wert: 2
        meldung: Schneidende Geraden haben einen gemeinsamen Punkt. Hier gibt es keinen.
loesung: |
  Die Richtungsvektoren sind keine Vielfachen, denn die zweite Komponente passt nicht zum Faktor $2$. Also sind die Geraden nicht parallel.
  ---
  Nicht parallel und kein gemeinsamer Punkt: Das ist genau die Definition von windschief.
```

```reflexion
frage: Warum gibt es in der Ebene keine windschiefen Geraden?
antwort: |
  In der Ebene haben zwei nicht parallele Geraden immer genau einen Schnittpunkt. Das Gleichungssystem aus zwei
  Gleichungen mit zwei Unbekannten ist dann eindeutig lösbar, es gibt keine dritte Gleichung, die widersprechen
  könnte. Anschaulich: In der Ebene kann eine Gerade der anderen nicht „ausweichen“, es gibt kein Oben und Unten.
  Erst im Raum kann eine Gerade über die andere hinweglaufen. Dort kommt die dritte Koordinatengleichung dazu, und
  sie kann den Schnitt verhindern.
```

```aufgabe
id: ag-punktprobe-raum
titel: Punktprobe im Raum
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Welche Punkte liegen auf $g: X = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$P(7 \mid 1 \mid 0)$'
      - '$Q(5 \mid 0 \mid 2)$'
      - '$R(-1 \mid -3 \mid 4)$'
      - '$S(4 \mid -0{,}5 \mid 1{,}5)$'
    richtig: [0, 2, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Prüfe bei $Q$ die dritte Koordinate: Aus $x$ und $y$ folgt $t = 2$, aber dann ist $z = 3 - 2 = 1$ und nicht $2$.'
      - wert: [0, 2]
        meldung: Auch $S$ liegt auf $g$, mit $t = 1{,}5$. Der Parameter muss keine ganze Zahl sein.
hinweise:
  - Bestimme $t$ aus der ersten Koordinate und prüfe dann die beiden anderen.
loesung: |
  **Ansatz:** Ein Punkt liegt auf $g$, wenn alle drei Koordinatengleichungen dasselbe $t$ liefern.
  ---
  $P$: $1 + 2t = 7$, $-2 + t = 1$ und $3 - t = 0$ ergeben jeweils $t = 3$. $P$ liegt auf $g$. $Q$: $t = 2$, $t = 2$, aber $3 - t = 2$ ergibt $t = 1$. $Q$ liegt nicht auf $g$.
  ---
  $R$: $t = -1$ in allen drei Gleichungen. $S$: $t = 1{,}5$ in allen drei Gleichungen. Beide liegen auf $g$.
```

```aufgabe
id: ag-raum-aussagen
titel: Aussagen über Geraden im Raum
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Beurteile die Aussagen über zwei **verschiedene** Geraden $g$ und $h$ im Raum.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: 'Wenn $g$ und $h$ keinen gemeinsamen Punkt haben, sind sie parallel.'
        richtig: false
        erklaerung: Sie können auch windschief sein. Parallel bezieht sich auf die Richtungen.
      - text: 'Windschiefe Geraden liegen nicht gemeinsam in einer Ebene.'
        richtig: true
        erklaerung: Lägen sie in einer Ebene, würden sie sich schneiden oder wären parallel, wie in der Ebene.
      - text: 'Sind die Richtungsvektoren Vielfache voneinander, dann sind $g$ und $h$ echt parallel.'
        richtig: true
        erklaerung: Sie sind parallel, und weil die Geraden verschieden sind, sind sie echt parallel.
      - text: 'Schneiden sich $g$ und $h$, dann sind ihre Richtungsvektoren keine Vielfachen voneinander.'
        richtig: true
        erklaerung: Verschiedene parallele Geraden haben keinen gemeinsamen Punkt. Wer sich schneidet, ist also nicht parallel.
      - text: 'Die Gleichung $x + 2y - z = 4$ beschreibt im Raum eine Gerade.'
        richtig: false
        erklaerung: Eine einzelne lineare Gleichung beschreibt im Raum eine Ebene.
    fehler:
      - wert: [r, r, r, r, f]
        meldung: Kein gemeinsamer Punkt reicht im Raum nicht für „parallel“. Denk an eine Brücke über eine Straße.
      - wert: [f, r, r, r, r]
        meldung: Eine einzelne lineare Gleichung legt im Raum nur einen Normalvektor fest. Das ergibt eine Ebene, keine Gerade.
hinweise:
  - Denk an die vier möglichen Lagen und an die Definition von windschief.
loesung: |
  **Ansatz:** Im Raum gibt es vier Lagen: identisch, echt parallel, schneidend, windschief. „Parallel“ ist eine Aussage über die Richtungen, „gemeinsamer Punkt“ eine über die Lage.
  ---
  Falsch sind Aussage 1 (es gibt auch windschiefe Geraden) und Aussage 5 (eine Gleichung ist eine Ebene). Richtig sind die Aussagen 2, 3 und 4.
```

```aufgabe
id: ag-lage-raum
titel: Lage von Geraden im Raum bestimmen
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Es sei $g: X = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$. Bestimme die Lage von $g$ zu

  $h_1: X = \begin{pmatrix} 5 \\ 0 \\ 5 \end{pmatrix} + s\cdot\begin{pmatrix} -4 \\ 2 \\ -2 \end{pmatrix}$, $\quad h_2: X = s\cdot\begin{pmatrix} 4 \\ -2 \\ 2 \end{pmatrix}$, $\quad h_3: X = \begin{pmatrix} 3 \\ 0 \\ 1 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$, $\quad h_4: X = \begin{pmatrix} 4 \\ -1 \\ 7 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ 1 \\ -2 \end{pmatrix}$.
teile:
  - typ: auswahl
    label: '$h_1$'
    optionen: ["identisch", "echt parallel", "schneidend", "windschief"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mach die Punktprobe mit $(5 \mid 0 \mid 5)$ in $g$: $t = 2$ in allen drei Gleichungen.'
  - typ: auswahl
    label: '$h_2$'
    optionen: ["identisch", "echt parallel", "schneidend", "windschief"]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die Richtung passt, aber liegt der Ursprung auf $g$? $1 + 2t = 0$ ergibt $t = -\frac12$, $2 - t = 0$ ergibt $t = 2$.'
  - typ: auswahl
    label: '$h_3$'
    optionen: ["identisch", "echt parallel", "schneidend", "windschief"]
    richtig: [3]
    fehler:
      - wert: 2
        meldung: Prüfe mit allen drei Gleichungen. Aus zwei davon bekommst du meistens Werte für $t$ und $s$. Erst die dritte entscheidet.
      - wert: 1
        meldung: Die Richtungen $\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ sind keine Vielfachen. Kein gemeinsamer Punkt heißt hier windschief.
  - typ: auswahl
    label: '$h_4$'
    optionen: ["identisch", "echt parallel", "schneidend", "windschief"]
    richtig: [2]
    fehler:
      - wert: 3
        meldung: 'Rechne noch einmal: Aus $1 + 2t = 4 + s$ und $2 - t = -1 + s$ folgt $t = 2$ und $s = 1$. Und die dritte Gleichung $3 + t = 7 - 2s$ ist dann erfüllt.'
hinweise:
  - Vergleiche zuerst die Richtungsvektoren. Bei parallelen Richtungen mache eine Punktprobe.
  - 'Bei nicht parallelen Richtungen: gleichsetzen, $t$ und $s$ aus zwei Gleichungen berechnen, die dritte prüfen.'
loesung: |
  **Ansatz:** Rezept in zwei Stufen. Erst Richtungen vergleichen, dann Punktprobe oder Gleichsetzen.
  ---
  $h_1$: $\begin{pmatrix} -4 \\ 2 \\ -2 \end{pmatrix} = -2\cdot\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$, parallel. $(5 \mid 0 \mid 5)$ in $g$: $t = 2$ in allen Gleichungen. Identisch. $h_2$: ebenfalls parallel. $(0 \mid 0 \mid 0)$ in $g$: $t = -\frac12$ aus $x$, $t = 2$ aus $y$. Echt parallel.
  ---
  $h_3$: nicht parallel. $1 + 2t = 3 + s$, $2 - t = s$, $3 + t = 1 + s$. Aus den ersten beiden: $1 + 2t = 5 - t$, $t = \frac43$, $s = \frac23$. Dritte: $\frac{13}{3} \neq \frac53$. Windschief.
  ---
  $h_4$: nicht parallel. $1 + 2t = 4 + s$, $2 - t = -1 + s$, $3 + t = 7 - 2s$. Aus der zweiten $s = 3 - t$, in die erste: $1 + 2t = 7 - t$, also $t = 2$ und $s = 1$. Dritte: $5 = 5$. Schneidend im Punkt $(5 \mid 0 \mid 5)$.
```

```aufgabe
id: ag-schnittpunkt-raum
titel: Schnittpunkt und Winkel im Raum
niveau: 2
lernziel: 3
kompetenz: rechnen
angabe: |
  Zeige, dass $g: X = \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$ und
  $h: X = \begin{pmatrix} 5 \\ 1 \\ 5 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$ einander schneiden.
  Bestimme den Schnittpunkt und den Schnittwinkel auf zwei Dezimalstellen.
teile:
  - typ: vektor
    label: '$S$'
    namen: ["x", "y", "z"]
    loesung: ["4", "3", "4"]
    fehler:
      - wert: ["7", "-3", "7"]
        meldung: Du hast den Wert von $t$ in die Gleichung von $h$ eingesetzt. Setze $t$ in $g$ ein oder $s$ in $h$.
  - typ: zahl
    label: '$\varphi$'
    einheit: "°"
    loesung: "inGrad(acos(abs(1 - 4 + 2)/(3*sqrt(6))))"
    fehler:
      - wert: "inGrad(acos(-1/(3*sqrt(6))))"
        meldung: Das ist der stumpfe Nebenwinkel. Setze Betragsstriche um das Skalarprodukt.
hinweise:
  - 'Gleichungen: $2 + t = 5 + s$, $\;-1 + 2t = 1 - 2s$, $\;2t = 5 + s$.'
  - 'Die erste und die dritte Gleichung haben dieselbe rechte Seite. Damit findest du $t$ schnell. Prüfe dann die zweite.'
loesung: |
  **Ansatz:** Die Richtungen $\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$ sind keine Vielfachen. Wir setzen gleich und prüfen, ob alle drei Gleichungen eine gemeinsame Lösung haben.
  ---
  $2 + t = 5 + s$, $\;-1 + 2t = 1 - 2s$, $\;2t = 5 + s$. Erste und dritte haben rechts $5 + s$, also $2 + t = 2t$ und $t = 2$. Dann $s = 2t - 5 = -1$.
  ---
  Zweite Gleichung prüfen: $-1 + 4 = 3$ und $1 + 2 = 3$. Erfüllt. Schnittpunkt $S = (2 + 2 \mid -1 + 4 \mid 0 + 4) = (4 \mid 3 \mid 4)$. Kontrolle mit $h$ und $s = -1$: $(4 \mid 3 \mid 4)$.
  ---
  Winkel: $\vec r\cdot\vec u = 1 - 4 + 2 = -1$, $|\vec r| = 3$, $|\vec u| = \sqrt 6$. $\cos\varphi = \frac{|-1|}{3\sqrt 6} \approx 0{,}1361$, also $\varphi \approx 82{,}18°$.
gefuehrt:
  - text: 'Sind die Richtungsvektoren $\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$ Vielfache voneinander?'
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [1], fehler: [ { wert: 0, meldung: 'Aus der ersten Komponente folgt der Faktor $1$. Dann müsste aber auch $2 = -2$ gelten.' } ] }
    erklaerung: 'Nein. Die Geraden sind nicht parallel. Wir setzen gleich.'
  - text: 'Aus $2 + t = 5 + s$ und $2t = 5 + s$ folgt ein Wert für $t$. Welcher?'
    teil: { typ: zahl, loesung: "2" }
    erklaerung: 'Beide rechten Seiten sind $5 + s$, also $2 + t = 2t$ und $t = 2$. Dann $s = 2\cdot 2 - 5 = -1$.'
  - text: 'Prüfe die zweite Gleichung $-1 + 2t = 1 - 2s$ mit $t = 2$ und $s = -1$. Ist sie erfüllt?'
    teil: { typ: auswahl, optionen: ['ja', 'nein'], richtig: [0] }
    erklaerung: 'Links $-1 + 4 = 3$, rechts $1 + 2 = 3$. Erfüllt. Die Geraden schneiden sich.'
  - text: 'Berechne den Schnittpunkt, indem du $t = 2$ in $g$ einsetzt.'
    teil: { typ: vektor, namen: ["x", "y", "z"], loesung: ["4", "3", "4"] }
    erklaerung: '$S = (2 + 2 \mid -1 + 4 \mid 0 + 4) = (4 \mid 3 \mid 4)$.'
```

```aufgabe
id: ag-windschief-fehler
titel: Ein Schnittpunkt, den es nicht gibt
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Tom untersucht $g: X = \begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ und
  $h: X = \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix} + s\cdot\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$. Er schreibt:

  „$x$: $t = 2$. $\;y$: $1 + t = s$, also $s = 3$. Schnittpunkt $S = g(2) = (2 \mid 3 \mid 2)$.“
teile:
  - typ: auswahl
    label: 'Was ist an Toms Lösung falsch?'
    optionen:
      - 'Er hat die dritte Gleichung $2 = s$ nicht geprüft. Mit $s = 3$ ist sie verletzt.'
      - 'Er hätte für beide Geraden denselben Parameter $t$ verwenden müssen.'
      - 'Nichts, die Lösung ist richtig.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Verschiedene Parameter sind richtig. Der Fehler liegt woanders. Setze $s = 3$ in $h$ ein und vergleiche mit Toms Punkt.
      - wert: 2
        meldung: '$h$ liefert für $s = 3$ den Punkt $(2 \mid 3 \mid 3)$. Das ist nicht $(2 \mid 3 \mid 2)$.'
  - typ: auswahl
    label: 'Wie liegen $g$ und $h$ wirklich?'
    optionen: ["identisch", "echt parallel", "schneidend", "windschief"]
    richtig: [3]
    fehler:
      - wert: 1
        meldung: Für „parallel“ müssten die Richtungsvektoren Vielfache sein. $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ und $\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ sind es nicht.
hinweise:
  - 'Schreibe alle drei Koordinatengleichungen auf. Die dritte lautet $2 = s$.'
  - Prüfe, ob die Werte $t = 2$ und $s = 3$ auch die dritte Gleichung erfüllen.
loesung: |
  **Ansatz:** Beim Gleichsetzen im Raum entstehen drei Gleichungen für zwei Unbekannte. Die dritte entscheidet.
  ---
  Die Gleichungen lauten $t = 2$, $\;1 + t = s$ und $2 = s$. Aus den ersten beiden folgt $t = 2$ und $s = 3$. Die dritte verlangt aber $s = 2$. Widerspruch.
  ---
  Tom hat die dritte Gleichung vergessen. Kontrolle: $g(2) = (2 \mid 3 \mid 2)$, aber $h(3) = (2 \mid 3 \mid 3)$. Das sind verschiedene Punkte.
  ---
  Die Richtungen sind keine Vielfachen, und es gibt keinen gemeinsamen Punkt. Die Geraden sind windschief.
```

```aufgabe
id: ag-raum-parameter-schnitt
titel: Den Aufpunkt so wählen, dass sich die Geraden schneiden
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Für jede Zahl $a$ ist $g_a: X = \begin{pmatrix} 1 \\ 0 \\ a \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$ eine Gerade. Gegeben ist
  außerdem $h: X = \begin{pmatrix} 3 \\ 5 \\ 0 \end{pmatrix} + s\cdot\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.

  a) Für welches $a$ schneiden sich $g_a$ und $h$?

  b) Bestimme für dieses $a$ den Schnittpunkt.

  c) Wie liegen $g_a$ und $h$ für alle anderen Werte von $a$?
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "-1"
    fehler:
      - wert: "1"
        meldung: 'Achte auf das Vorzeichen. Aus der zweiten Gleichung $2t = 5 + s$ und $t = 2$ folgt $s = -1$, und die dritte verlangt $a = s$.'
  - typ: vektor
    label: 'b) Schnittpunkt'
    namen: ["x", "y", "z"]
    loesung: ["3", "4", "-1"]
  - typ: auswahl
    label: 'c) Lage für alle anderen $a$'
    optionen: ["echt parallel", "windschief", "identisch"]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Ob zwei Geraden parallel sind, hängt nur von den Richtungen ab. Die ändern sich mit $a$ nicht und sind keine Vielfachen.
hinweise:
  - 'Setze gleich: $1 + t = 3$, $\;2t = 5 + s$, $\;a = s$.'
  - Die ersten beiden Gleichungen legen $t$ und $s$ fest. Die dritte bestimmt dann $a$.
loesung: |
  **Ansatz:** Das ist eine Umkehraufgabe. Wir setzen gleich und fragen, für welches $a$ das System lösbar ist.
  ---
  $1 + t = 3$ ergibt $t = 2$. $2t = 5 + s$ ergibt $s = -1$. Die dritte Gleichung $a = s$ ist genau dann erfüllt, wenn $a = -1$ ist.
  ---
  **b)** $S = (1 + 2 \mid 0 + 4 \mid -1) = (3 \mid 4 \mid -1)$. Kontrolle mit $h$ und $s = -1$: $(3 \mid 5 - 1 \mid 0 - 1) = (3 \mid 4 \mid -1)$.
  ---
  **c)** Für $a \neq -1$ ist die dritte Gleichung verletzt, es gibt keinen gemeinsamen Punkt. Die Richtungen sind keine Vielfachen. Also sind die Geraden windschief. **Anschaulich:** Mit $a$ schiebt man $g_a$ nach oben oder unten. Nur in genau einer Höhe trifft sie $h$.
```

```aufgabe
id: ag-flugbahnen
titel: Zwei Flugbahnen
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Zwei Flugzeuge fliegen geradlinig. Die Koordinaten sind in Kilometern, $z$ ist die Höhe. $t$ und $s$ sind Zeiten in Minuten
  ab Beobachtungsbeginn. Flugzeug A fliegt auf $X = \begin{pmatrix} 0 \\ 0 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 4 \\ 2 \\ 0 \end{pmatrix}$, Flugzeug B auf
  $X = \begin{pmatrix} 14 \\ 1 \\ 2 \end{pmatrix} + s\cdot\begin{pmatrix} -2 \\ 3 \\ 0{,}5 \end{pmatrix}$.

  a) Wie liegen die beiden Flugbahnen zueinander?

  b) Von oben gesehen kreuzen sich die Bahnen. Über welchem Punkt $(x \mid y)$ des Bodens geschieht das?

  c) Wie groß ist dort der Höhenunterschied der Bahnen in Metern?

  d) Nach wie vielen Minuten ist A dort, nach wie vielen B?
teile:
  - typ: auswahl
    label: 'a) Lage'
    optionen: ["schneidend", "echt parallel", "windschief"]
    richtig: [2]
    fehler:
      - wert: 0
        meldung: 'Prüfe alle drei Gleichungen. Aus $x$ und $y$ folgt $s = 1{,}5$, aber die Höhe verlangt $3 = 2 + 0{,}5s$, also $s = 2$.'
      - wert: 1
        meldung: Die Richtungen $\begin{pmatrix} 4 \\ 2 \\ 0 \end{pmatrix}$ und $\begin{pmatrix} -2 \\ 3 \\ 0{,}5 \end{pmatrix}$ sind keine Vielfachen.
  - typ: vektor
    label: 'b) Bodenpunkt'
    namen: ["x", "y"]
    loesung: ["11", "5.5"]
  - typ: zahl
    label: 'c) Höhenunterschied'
    einheit: m
    loesung: "(3 - (2 + 0.5*1.5))*1000"
    fehler:
      - wert: "1000"
        meldung: Das ist der Höhenunterschied der Startpunkte. Flugzeug B steigt aber. Berechne seine Höhe zum passenden $s$.
  - typ: zahl
    label: 'd) A nach Minuten'
    loesung: "2.75"
  - typ: zahl
    label: 'd) B nach Minuten'
    loesung: "1.5"
hinweise:
  - '„Von oben gesehen“ heißt: nur $x$ und $y$ gleichsetzen. $4t = 14 - 2s$ und $2t = 1 + 3s$.'
  - 'Mit $t$ und $s$ die beiden Höhen $z_A = 3$ und $z_B = 2 + 0{,}5s$ vergleichen.'
loesung: |
  **Ansatz:** Ein Zusammentreffen der Bahnen verlangt alle drei Koordinaten gleich. Für „übereinander“ setzt man nur $x$ und $y$ gleich und vergleicht dann die Höhen.
  ---
  **b)** $4t = 14 - 2s$ und $2t = 1 + 3s$. Aus der zweiten: $4t = 2 + 6s$. Gleichsetzen mit der ersten: $2 + 6s = 14 - 2s$, also $s = 1{,}5$ und $t = \frac{1 + 4{,}5}{2} = 2{,}75$. Bodenpunkt $(4\cdot 2{,}75 \mid 2\cdot 2{,}75) = (11 \mid 5{,}5)$.
  ---
  **c)** Höhe von A: $3$ km. Höhe von B bei $s = 1{,}5$: $2 + 0{,}75 = 2{,}75$ km. Unterschied $0{,}25$ km $= 250$ m.
  ---
  **a)** Weil die Höhen dort verschieden sind, gibt es keinen gemeinsamen Punkt. Die Richtungen sind keine Vielfachen. Die Bahnen sind windschief.
  ---
  **d)** A ist nach $2{,}75$ min dort, B nach $1{,}5$ min. **Antwort:** Die Bahnen kreuzen sich von oben gesehen über $(11 \mid 5{,}5)$ mit $250$ m Höhenunterschied, und die Flugzeuge sind zu verschiedenen Zeiten dort.
```

## Ebenen im Raum: Parameterform und Koordinatenform

```aufgabe
id: ag-ebene-vorwissen
titel: Ein Vektor, der auf zwei Vektoren normal steht
art: check
niveau: 1
angabe: |
  Berechne $\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} \times \begin{pmatrix} 0 \\ 1 \\ 3 \end{pmatrix}$. Zum Nachlesen:
  [Kapitel 6](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen) (Kreuzprodukt).
teile:
  - typ: vektor
    loesung: ["6", "-3", "1"]
    fehler:
      - wert: ["6", "3", "1"]
        meldung: 'Die mittlere Komponente ist $a_3 b_1 - a_1 b_3 = 0\cdot 0 - 1\cdot 3 = -3$. Beim Kreuzprodukt passiert hier am häufigsten ein Vorzeichenfehler.'
      - wert: ["-6", "3", "-1"]
        meldung: Das ist das Kreuzprodukt in umgekehrter Reihenfolge. Es zeigt in die Gegenrichtung.
loesung: |
  $\vec a\times\vec b = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix} = \begin{pmatrix} 2\cdot 3 - 0\cdot 1 \\ 0\cdot 0 - 1\cdot 3 \\ 1\cdot 1 - 2\cdot 0 \end{pmatrix} = \begin{pmatrix} 6 \\ -3 \\ 1 \end{pmatrix}$.
  ---
  Probe: Das Ergebnis steht normal auf beiden Faktoren, denn $6 - 6 + 0 = 0$ und $0 - 3 + 3 = 0$. Genau diese Eigenschaft brauchen wir für Ebenen.
```

Eine **Ebene** ist eine flache, nach allen Seiten unendlich ausgedehnte Fläche. Denk an eine Tischplatte, eine
Hauswand oder eine Dachfläche, nur ohne Rand. Eine Ebene ist auf drei gleichwertige Arten festgelegt:

- durch **drei Punkte**, die nicht auf einer Geraden liegen. Ein dreibeiniger Hocker wackelt nie.
- durch **einen Punkt und zwei verschiedene Richtungen** in der Ebene.
- durch **einen Punkt und einen Normalvektor**, der senkrecht aus der Ebene herauszeigt.

Zu jeder dieser Beschreibungen gehört eine Form der Ebenengleichung.

### Die Parameterform einer Ebene

Auf einer Geraden kann man sich nur in eine Richtung bewegen, vor oder zurück. Auf einer Ebene gibt es zwei
unabhängige Richtungen, wie auf einem Schachbrett: ein Stück nach vorne und ein Stück zur Seite. Darum braucht die
Parameterform einer Ebene **zwei** Richtungsvektoren und **zwei** Parameter.

:::definition[Parameterform einer Ebene]
Eine Ebene $E$ durch den Punkt $P$ mit den Richtungsvektoren $\vec u$ und $\vec v$ hat die Parameterform
$$E: X = P + s\cdot\vec u + t\cdot\vec v, \qquad s, t \in \R.$$
Dabei ist $P$ der Aufpunkt. Die Richtungsvektoren $\vec u$ und $\vec v$ dürfen **nicht parallel** sein (man sagt:
sie sind **linear unabhängig**). Die Parameter $s$ und $t$ sind beliebige reelle Zahlen.
:::

Jede Wahl von $s$ und $t$ liefert einen Punkt der Ebene. Für $s = t = 0$ ist man im Aufpunkt. Für $s = 1$, $t = 0$ ist
man einen Schritt $\vec u$ weiter, für $s = 2$, $t = -1$ geht man zweimal $\vec u$ und einmal $\vec v$ rückwärts.

**Die Ebene durch drei Punkte** $A$, $B$, $C$ hat die Parameterform $E: X = A + s\cdot\overrightarrow{AB} + t\cdot\overrightarrow{AC}$.

```aufgabe
id: ag-ebene-check-punkt
titel: Einen Punkt der Ebene berechnen
art: check
niveau: 1
angabe: |
  Gegeben ist $E: X = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.
  Welcher Punkt gehört zu $s = 2$ und $t = -1$?
teile:
  - typ: vektor
    namen: ["x", "y", "z"]
    loesung: ["3", "1", "3"]
    fehler:
      - wert: ["3", "3", "1"]
        meldung: Das wäre der Punkt für $t = +1$. Bei $t = -1$ gehst du den Vektor $\vec v$ einmal rückwärts.
      - wert: ["2", "1", "1"]
        meldung: Das ist nur $2\vec u - \vec v$, also die Bewegung. Addiere noch den Aufpunkt $(1 \mid 0 \mid 2)$.
loesung: |
  Wir setzen ein: $X = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + 2\cdot\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} - 1\cdot\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.
  ---
  Komponentenweise: $(1 + 2 - 0 \mid 0 + 2 - 1 \mid 2 + 0 + 1) = (3 \mid 1 \mid 3)$.
```

:::achtung[Zwei parallele Richtungsvektoren ergeben keine Ebene]
Jemand gibt eine Ebene an als $X = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix}$.
Hier ist $\begin{pmatrix} 2 \\ 4 \\ 6 \end{pmatrix} = 2\cdot\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$. Beide Schritte führen in dieselbe Richtung. Man kommt
mit ihnen also nur entlang einer einzigen Geraden voran, nie zur Seite. Das ist eine Gerade, keine Ebene. Bei drei
Punkten passiert dasselbe, wenn sie auf einer Geraden liegen. Prüfe deshalb immer: Die Richtungsvektoren dürfen keine
Vielfachen voneinander sein. Gleichwertig: Ihr Kreuzprodukt ist nicht der Nullvektor.
:::

### Normalvektor, Normalvektorform und Koordinatenform

Jetzt kommt der zweite Stolperstein des Kapitels. Eine Ebene im Raum hat genau **eine** Normalrichtung. Ein
Normalvektor der Ebene steht senkrecht auf **jeder** Richtung in der Ebene. Ein Bild: Ein Fahnenmast steht senkrecht
auf dem ebenen Boden. Er steht damit senkrecht auf jeder Linie, die man auf den Boden zeichnet.

Damit funktioniert dieselbe Idee wie bei Geraden in der Ebene. Ein Punkt $X$ liegt genau dann in der Ebene durch $P$,
wenn der Pfeil $\overrightarrow{PX}$ in der Ebene liegt. Das heißt: Er steht normal auf $\vec n$.

:::satz[Normalvektorform und Koordinatenform einer Ebene]
Ist $P$ ein Punkt der Ebene $E$ und $\vec n = \begin{pmatrix} a \\ b \\ c \end{pmatrix} \neq \vec 0$ ein Normalvektor von $E$, dann gilt
$$E: \vec n\cdot(X - P) = 0 \qquad\Longleftrightarrow\qquad E: ax + by + cz = d \quad\text{mit } d = \vec n\cdot P.$$
Das Zeichen $\Longleftrightarrow$ liest man „ist gleichwertig mit“. Die rechte Gleichung heißt **Koordinatenform**.
Umgekehrt beschreibt jede lineare Gleichung $ax + by + cz = d$ (nicht alle drei Zahlen $a, b, c$ gleich null) eine Ebene.
**Die Zahlen vor $x$, $y$ und $z$ bilden einen Normalvektor.**
:::

Das ist das Schlüsselprinzip aus
[7.2 Normalvektorform, allgemeine Form und Steigung](/lernen/mathe3/analytische-geometrie/normalvektorform-allgemeine-form-und-steigung),
nur eine Dimension höher. Die Begründung ist wörtlich dieselbe: Zieht man die Gleichungen zweier Punkte der Ebene
voneinander ab, bleibt $\vec n\cdot\overrightarrow{PX} = 0$.

**Woher bekommt man einen Normalvektor?** Aus zwei Richtungsvektoren mit dem **Kreuzprodukt**: $\vec n = \vec u\times\vec v$.
Das Kreuzprodukt steht nach [Kapitel 6, Das Kreuzprodukt](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen) normal auf beiden Faktoren. Damit steht es normal auf
der ganzen Ebene.

:::beispiel[Ebene durch drei Punkte in Koordinatenform]
Gegeben sind $A(1 \mid 2 \mid 0)$, $B(3 \mid 1 \mid 1)$ und $C(0 \mid 4 \mid 2)$.

1. **Richtungsvektoren:** $\overrightarrow{AB} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ und $\overrightarrow{AC} = \begin{pmatrix} -1 \\ 2 \\ 2 \end{pmatrix}$.
2. **Normalvektor mit dem Kreuzprodukt:**
   $$\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix} (-1)\cdot 2 - 1\cdot 2 \\ 1\cdot(-1) - 2\cdot 2 \\ 2\cdot 2 - (-1)\cdot(-1) \end{pmatrix} = \begin{pmatrix} -4 \\ -5 \\ 3 \end{pmatrix}.$$
   Wir nehmen das $(-1)$-Fache, damit weniger Minuszeichen stören: $\vec n = \begin{pmatrix} 4 \\ 5 \\ -3 \end{pmatrix}$. Das ist erlaubt, weil
   jedes Vielfache wieder ein Normalvektor ist.
3. **Probe des Normalvektors:** $\vec n\cdot\overrightarrow{AB} = 8 - 5 - 3 = 0$ und $\vec n\cdot\overrightarrow{AC} = -4 + 10 - 6 = 0$.
4. **Rechte Seite:** $d = \vec n\cdot A = 4 + 10 - 0 = 14$. Also $E: 4x + 5y - 3z = 14$.
5. **Probe mit $B$ und $C$:** $12 + 5 - 3 = 14$ und $0 + 20 - 6 = 14$. Beide Punkte liegen in $E$.
:::

:::achtung[Einen Richtungsvektor als Normalvektor genommen]
Bei derselben Aufgabe nimmt jemand $\overrightarrow{AB} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ als Normalvektor und erhält
$2x - y + z = 2 - 2 + 0 = 0$. Die Probe mit $C$ zeigt den Fehler: $0 - 4 + 2 = -2 \neq 0$. Ein Richtungsvektor liegt **in**
der Ebene. Ein Normalvektor steht **senkrecht** auf ihr. Den Normalvektor liefert erst das Kreuzprodukt zweier
Richtungsvektoren. Die Probe mit den beiden anderen Punkten kostet zehn Sekunden und fängt diesen Fehler ab.
:::

```aufgabe
id: ag-ebene-check-normalvektor
titel: Den Normalvektor einer Ebene ablesen
art: check
niveau: 1
angabe: |
  Welcher Vektor ist ein Normalvektor der Ebene $E: 3x - z = 5$?
teile:
  - typ: auswahl
    optionen:
      - '$\begin{pmatrix} 3 \\ 0 \\ -1 \end{pmatrix}$'
      - '$\begin{pmatrix} 3 \\ -1 \\ 0 \end{pmatrix}$'
      - '$\begin{pmatrix} 1 \\ 0 \\ 3 \end{pmatrix}$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: In der Gleichung kommt $y$ nicht vor. Die Zahl vor $y$ ist also $0$. Die $-1$ gehört zu $z$, also an die dritte Stelle.
      - wert: 2
        meldung: 'Dieser Vektor liegt **in** der Ebene, denn $3\cdot 1 + 0 - 1\cdot 3 = 0$. Ein Normalvektor besteht direkt aus den Zahlen vor $x$, $y$ und $z$.'
loesung: |
  Schlüsselprinzip: Die Zahlen vor $x$, $y$ und $z$ bilden den Normalvektor. Fehlt eine Variable, steht dort eine $0$.
  ---
  $3x - z = 5$ ist $3x + 0\cdot y - 1\cdot z = 5$. Also $\vec n = \begin{pmatrix} 3 \\ 0 \\ -1 \end{pmatrix}$.
```

### Von der Koordinatenform zur Parameterform

Man braucht einen Punkt und zwei Richtungsvektoren. Am bequemsten sind drei Punkte, bei denen jeweils zwei
Koordinaten null sind. Diese Punkte auf den Koordinatenachsen heißen **Spurpunkte**.

:::beispiel[Von der Koordinatenform zur Parameterform]
Gegeben ist $E: 2x + y - 2z = 6$.

1. **Spurpunkte:** $y = z = 0$ ergibt $2x = 6$, also $S_x(3 \mid 0 \mid 0)$. $x = z = 0$ ergibt $S_y(0 \mid 6 \mid 0)$.
   $x = y = 0$ ergibt $-2z = 6$, also $S_z(0 \mid 0 \mid -3)$.
2. **Richtungsvektoren:** $\overrightarrow{S_x S_y} = \begin{pmatrix} -3 \\ 6 \\ 0 \end{pmatrix}$, gekürzt $\begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix}$.
   $\overrightarrow{S_x S_z} = \begin{pmatrix} -3 \\ 0 \\ -3 \end{pmatrix}$, gekürzt $\begin{pmatrix} -1 \\ 0 \\ -1 \end{pmatrix}$ oder $\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.
3. **Ergebnis:** $E: X = \begin{pmatrix} 3 \\ 0 \\ 0 \end{pmatrix} + s\cdot\begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.
4. **Probe:** Beide Richtungen stehen normal auf $\vec n = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$, denn $-2 + 2 + 0 = 0$ und
   $2 + 0 - 2 = 0$.
:::

### Spurpunkte und Skizze

Die drei Spurpunkte eignen sich hervorragend für eine **Skizze**. Das Dreieck aus ihnen ist ein Stück der Ebene. Man
nennt es **Spurdreieck**.

:::beispiel[Eine Ebene schneidet eine Ecke ab]
Die Ebene $E: 2x + 3y + 4z = 12$ hat die Spurpunkte $S_x(6 \mid 0 \mid 0)$, $S_y(0 \mid 4 \mid 0)$ und $S_z(0 \mid 0 \mid 3)$. Man
erhält sie, indem man jeweils zwei Koordinaten null setzt, etwa $2x = 12$ für $S_x$.

Zusammen mit dem Ursprung bilden die Spurpunkte eine dreiseitige Pyramide. Ihre Grundfläche ist das rechtwinklige
Dreieck mit den Katheten $6$ und $4$ am Boden, also $\frac12\cdot 6\cdot 4 = 12$. Ihre Höhe ist $3$. Das Volumen ist
$V = \frac13\cdot 12\cdot 3 = 12$ Volumeneinheiten.
:::

```plot
x: [-3, 5]
y: [-3, 4]
gleich: true
achsen: { x: "y", y: "z" }
strecken:
  - { von: [0, 0], nach: [-2.8, -2.8] }
  - { von: [-2.1, -2.1], nach: [4, 0], farbe: 0 }
  - { von: [4, 0], nach: [0, 3], farbe: 0 }
  - { von: [0, 3], nach: [-2.1, -2.1], farbe: 0 }
punkte:
  - { x: -2.8, y: -2.8, label: "x", offen: true }
  - { x: -2.1, y: -2.1, label: "Sx(6 | 0 | 0)", farbe: 1 }
  - { x: 4, y: 0, label: "Sy(0 | 4 | 0)", farbe: 1 }
  - { x: 0, y: 3, label: "Sz(0 | 0 | 3)", farbe: 1 }
beschriftung: Schrägriss der Ebene 2x + 3y + 4z = 12. Das blaue Spurdreieck verbindet die drei Spurpunkte auf den Achsen. Es ist ein Stück der Ebene. Zusammen mit dem Ursprung bildet es eine dreiseitige Pyramide.
```

:::achtung[Achsenabschnitt mit dem Koeffizienten verwechselt]
Bei $2x + 3y + 4z = 12$ sagt jemand: „Die Ebene schneidet die $x$-Achse bei $2$.“ Das ist die Zahl vor $x$, nicht der
Achsenabschnitt. Auf der $x$-Achse sind $y$ und $z$ null. Dann bleibt $2x = 12$, also $x = 6$. Probe: $(2 \mid 0 \mid 0)$ eingesetzt
ergibt $4 \neq 12$. Der Punkt liegt nicht in der Ebene.
:::

**Besondere Ebenen.** Fehlt eine Variable in der Gleichung, dann ist diese Koordinate frei. Die Ebene steht dann
parallel zu der entsprechenden Achse:

- $z = 0$ ist die **$xy$-Ebene**, also der Boden. $z = 3$ ist eine waagrechte Ebene in der Höhe $3$.
- $x = 0$ ist die **$yz$-Ebene**, $y = 0$ die **$xz$-Ebene**.
- $x + y = 4$ ist eine senkrechte Wand, parallel zur $z$-Achse. Ihr Normalvektor $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ zeigt waagrecht.
- $3x + 4z = 12$ ist parallel zur $y$-Achse, denn $y$ kommt nicht vor.

:::merke[Rezept: Ebene durch drei Punkte in Koordinatenform]
1. Richtungsvektoren $\vec u = \overrightarrow{AB}$ und $\vec v = \overrightarrow{AC}$.
2. Normalvektor $\vec n = \vec u\times\vec v$. Probe: $\vec n\cdot\vec u = 0$ und $\vec n\cdot\vec v = 0$. Eventuell kürzen.
3. Rechte Seite $d = \vec n\cdot A$. Ergebnis $E: n_1 x + n_2 y + n_3 z = d$.
4. Probe: $B$ und $C$ erfüllen die Gleichung.

**Umgekehrt:** Spurpunkte (oder drei andere Punkte) suchen, daraus zwei Richtungsvektoren bilden.
:::

```reflexion
frage: Eine Gerade im Raum hat unendlich viele verschiedene Normalrichtungen, eine Ebene im Raum nur eine. Warum?
antwort: |
  Auf einer Geraden mit Richtung $\vec r$ steht jeder Vektor normal, der mit $\vec r$ das Skalarprodukt $0$ hat. Das sind
  alle Vektoren einer ganzen Ebene, wie die Speichen eines Rades um die Achse $\vec r$. Bei einer Ebene muss ein
  Normalvektor dagegen auf **zwei** verschiedenen Richtungen $\vec u$ und $\vec v$ zugleich normal stehen. Das lässt
  nur noch eine Richtung übrig, die von $\vec u\times\vec v$ (samt ihren Vielfachen). Darum beschreibt eine einzige
  Gleichung $ax + by + cz = d$ eine Ebene, aber keine Gerade.
```

```aufgabe
id: ag-punktprobe-ebene
titel: Liegt der Punkt in der Ebene?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche Punkte liegen in $E: 2x - y + 3z = 7$? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$P(1 \mid 1 \mid 2)$'
      - '$Q(3 \mid 2 \mid 1)$'
      - '$R(0 \mid 0 \mid 2)$'
      - '$S(0 \mid -7 \mid 0)$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Setze $R$ genau ein: $0 - 0 + 3\cdot 2 = 6$. Das ist nicht $7$.'
      - wert: [0, 1]
        meldung: 'Prüfe $S$ noch einmal und achte auf das Minus vor $y$: $2\cdot 0 - (-7) + 0 = 7$.'
hinweise:
  - Setze jeden Punkt in die linke Seite ein und vergleiche mit $7$.
loesung: |
  **Ansatz:** In der Koordinatenform ist die Punktprobe ein einziger Einsetzschritt.
  ---
  $P$: $2 - 1 + 6 = 7$. Liegt in $E$. $Q$: $6 - 2 + 3 = 7$. Liegt in $E$.
  ---
  $R$: $0 - 0 + 6 = 6 \neq 7$. Liegt nicht in $E$. $S$: $0 + 7 + 0 = 7$. Liegt in $E$, es ist der Spurpunkt auf der $y$-Achse.
```

```aufgabe
id: ag-spurpunkte
titel: Spurpunkte und abgeschnittene Pyramide
niveau: 1
lernziel: 4
kompetenz: anwenden
angabe: |
  Die Ebene $E: 3x + 2y + 6z = 18$ schneidet von der Ecke des Koordinatensystems eine dreiseitige Pyramide ab. Bestimme
  die drei Achsenabschnitte und das Volumen der Pyramide.
teile:
  - typ: zahl
    label: '$x$-Achsenabschnitt'
    loesung: "18/3"
    fehler:
      - wert: "3"
        meldung: Das ist die Zahl vor $x$. Auf der $x$-Achse ist $y = z = 0$. Löse $3x = 18$.
  - typ: zahl
    label: '$y$-Achsenabschnitt'
    loesung: "18/2"
  - typ: zahl
    label: '$z$-Achsenabschnitt'
    loesung: "18/6"
  - typ: zahl
    label: 'Volumen'
    loesung: "6*9*3/6"
    fehler:
      - wert: "6*9*3"
        meldung: Das ist das Volumen eines Quaders. Eine Pyramide hat $\frac13$ Grundfläche mal Höhe, und die Grundfläche ist ein halbes Rechteck.
      - wert: "6*9*3/3"
        meldung: Die Grundfläche ist ein rechtwinkliges **Dreieck**, also nur $\frac12\cdot 6\cdot 9$.
hinweise:
  - 'Spurpunkte: zwei Koordinaten null setzen. Die Pyramide hat die Ecken $O$, $S_x$, $S_y$ und $S_z$.'
loesung: |
  **Ansatz:** Auf jeder Achse sind die beiden anderen Koordinaten null. So entstehen die Spurpunkte.
  ---
  $3x = 18$ ergibt $S_x(6 \mid 0 \mid 0)$, $2y = 18$ ergibt $S_y(0 \mid 9 \mid 0)$, $6z = 18$ ergibt $S_z(0 \mid 0 \mid 3)$.
  ---
  Grundfläche am Boden: $\frac12\cdot 6\cdot 9 = 27$. Höhe $3$. Volumen $V = \frac13\cdot 27\cdot 3 = 27$.
```

```aufgabe
id: ag-ebene-drei-punkte
titel: Ebene durch drei Punkte
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Bestimme eine Koordinatenform der Ebene durch $A(2 \mid 1 \mid 0)$, $B(4 \mid 2 \mid -2)$ und $C(1 \mid 3 \mid -1)$. Gib sie
  als $(a, b, c, d)$ für $ax + by + cz = d$ an (jedes Vielfache ist richtig).
teile:
  - typ: vektor
    label: '$(a, b, c, d)$'
    namen: ["a", "b", "c", "d"]
    vielfaches: true
    loesung: ["3", "4", "5", "10"]
    fehler:
      - wert: ["2", "1", "-2", "5"]
        meldung: Du hast $\overrightarrow{AB}$ als Normalvektor genommen. Er liegt aber **in** der Ebene. Den Normalvektor liefert das Kreuzprodukt.
      - wert: ["3", "4", "5", "0"]
        meldung: Der Normalvektor stimmt. Für die rechte Seite brauchst du aber einen **Punkt** der Ebene, nicht einen Richtungsvektor. Es gilt $d = \vec n\cdot A$ mit $A(2 \mid 1 \mid 0)$.
hinweise:
  - '$\overrightarrow{AB} = (2, 1, -2)$ und $\overrightarrow{AC} = (-1, 2, -1)$.'
  - 'Der Normalvektor ist $\overrightarrow{AB}\times\overrightarrow{AC}$, die rechte Seite $d = \vec n\cdot A$.'
loesung: |
  **Ansatz:** Zwei Richtungsvektoren aus den Punkten, Normalvektor mit dem Kreuzprodukt, rechte Seite mit einem Punkt.
  ---
  $\overrightarrow{AB} = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix} -1 \\ 2 \\ -1 \end{pmatrix}$.
  ---
  $\vec n = \begin{pmatrix} 1\cdot(-1) - (-2)\cdot 2 \\ (-2)\cdot(-1) - 2\cdot(-1) \\ 2\cdot 2 - 1\cdot(-1) \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix}$.
  ---
  $d = \vec n\cdot A = 6 + 4 + 0 = 10$, also $E: 3x + 4y + 5z = 10$. Probe: $B$ ergibt $12 + 8 - 10 = 10$, $C$ ergibt $3 + 12 - 5 = 10$.
gefuehrt:
  - text: 'Berechne die Richtungsvektoren $\overrightarrow{AB}$ und $\overrightarrow{AC}$. Gib zuerst $\overrightarrow{AB}$ an.'
    teil: { typ: vektor, loesung: ["2", "1", "-2"], fehler: [ { wert: ["-2", "-1", "2"], meldung: 'Das ist $A - B$. Rechne „Ende minus Anfang“, also $B - A$.' } ] }
    erklaerung: '$\overrightarrow{AB} = (4 - 2, 2 - 1, -2 - 0) = (2, 1, -2)$ und ebenso $\overrightarrow{AC} = (-1, 2, -1)$.'
  - text: 'Berechne den Normalvektor $\overrightarrow{AB}\times\overrightarrow{AC}$.'
    teil: { typ: vektor, vielfaches: true, loesung: ["3", "4", "5"], fehler: [ { wert: ["3", "-4", "5"], meldung: 'Prüfe die mittlere Komponente: $a_3 b_1 - a_1 b_3 = (-2)(-1) - 2\cdot(-1) = 4$.' } ] }
    erklaerung: 'Mit der Formel ergibt sich $\begin{pmatrix} -1 + 4 \\ 2 + 2 \\ 4 + 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix}$.'
  - text: 'Berechne die rechte Seite $d = \vec n\cdot A$.'
    teil: { typ: zahl, loesung: "10" }
    erklaerung: '$3\cdot 2 + 4\cdot 1 + 5\cdot 0 = 10$. Also $E: 3x + 4y + 5z = 10$.'
  - text: 'Mache die Probe mit $B$ und $C$. Warum ist diese Probe so wichtig?'
    erklaerung: '$B$: $12 + 8 - 10 = 10$. $C$: $3 + 12 - 5 = 10$. Ein Vorzeichenfehler im Kreuzprodukt würde hier sofort auffallen.'
```

```aufgabe
id: ag-param-zu-koord
titel: Von der Parameterform zur Koordinatenform
niveau: 2
lernziel: 4
kompetenz: rechnen
angabe: |
  Wandle $E: X = \begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix} + s\cdot\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix}$ in Koordinatenform
  um. Gib $(a, b, c, d)$ für $ax + by + cz = d$ an (jedes Vielfache ist richtig).
teile:
  - typ: vektor
    label: '$(a, b, c, d)$'
    namen: ["a", "b", "c", "d"]
    vielfaches: true
    loesung: ["2", "1", "-2", "4"]
    fehler:
      - wert: ["-2", "1", "2", "0"]
        meldung: 'Die mittlere Komponente des Kreuzprodukts hat das falsche Vorzeichen. Sie lautet $u_3 v_1 - u_1 v_3 = 1\cdot 0 - 1\cdot 1 = -1$.'
      - wert: ["2", "1", "-2", "0"]
        meldung: Der Normalvektor stimmt, aber die rechte Seite fehlt. Setze den Aufpunkt ein, $d = \vec n\cdot P$.
hinweise:
  - 'Normalvektor $\vec n = \vec u\times\vec v$.'
  - 'Dann $d = \vec n\cdot P$ mit dem Aufpunkt $P(1 \mid 2 \mid 0)$.'
loesung: |
  **Ansatz:** Das Kreuzprodukt der beiden Richtungsvektoren steht normal auf der Ebene.
  ---
  $\vec u\times\vec v = \begin{pmatrix} 0\cdot 1 - 1\cdot 2 \\ 1\cdot 0 - 1\cdot 1 \\ 1\cdot 2 - 0\cdot 0 \end{pmatrix} = \begin{pmatrix} -2 \\ -1 \\ 2 \end{pmatrix}$. Mal $-1$: $\vec n = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$.
  ---
  $d = 2\cdot 1 + 1\cdot 2 - 2\cdot 0 = 4$, also $E: 2x + y - 2z = 4$.
  ---
  Probe mit $s = 1, t = 0$, also $(2 \mid 2 \mid 1)$: $4 + 2 - 2 = 4$. Mit $s = 0, t = 1$, also $(1 \mid 4 \mid 1)$: $2 + 4 - 2 = 4$.
```

```aufgabe
id: ag-ebene-richtungen-erkennen
titel: Richtungen in einer Ebene erkennen
niveau: 2
lernziel: 4
kompetenz: verstehen
angabe: |
  Gegeben ist $E: x - 2y + 4z = 8$.

  a) Welche Vektoren sind Richtungsvektoren von $E$, liegen also in der Ebene? Wähle alle richtigen aus.

  b) Gib den Spurpunkt auf der $z$-Achse an.
teile:
  - typ: auswahl
    label: 'a)'
    mehrfach: true
    optionen:
      - '$\begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}$'
      - '$\begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix}$'
      - '$\begin{pmatrix} 1 \\ -2 \\ 4 \end{pmatrix}$'
      - '$\begin{pmatrix} 4 \\ 0 \\ -1 \end{pmatrix}$'
      - '$\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$'
    richtig: [0, 1, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: $\begin{pmatrix} 1 \\ -2 \\ 4 \end{pmatrix}$ ist der **Normalvektor**. Er steht senkrecht auf der Ebene und liegt nicht in ihr.
      - wert: [2]
        meldung: Das ist der Normalvektor, er steht senkrecht auf der Ebene. Ein Richtungsvektor muss mit dem Normalvektor das Skalarprodukt $0$ haben.
  - typ: vektor
    label: 'b) Spurpunkt auf der $z$-Achse'
    namen: ["x", "y", "z"]
    loesung: ["0", "0", "2"]
    fehler:
      - wert: ["0", "0", "4"]
        meldung: '$4$ ist die Zahl vor $z$. Mit $x = y = 0$ bleibt $4z = 8$, also $z = 2$.'
hinweise:
  - Ein Vektor liegt in der Ebene, wenn er normal auf dem Normalvektor $\begin{pmatrix} 1 \\ -2 \\ 4 \end{pmatrix}$ steht.
  - Berechne für jeden Vektor das Skalarprodukt mit dem Normalvektor.
loesung: |
  **Ansatz:** Ein Richtungsvektor liegt in der Ebene und steht deshalb normal auf $\vec n = \begin{pmatrix} 1 \\ -2 \\ 4 \end{pmatrix}$. Wir prüfen das Skalarprodukt.
  ---
  $\begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}$: $2 - 2 + 0 = 0$. $\begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix}$: $0 - 4 + 4 = 0$. $\begin{pmatrix} 4 \\ 0 \\ -1 \end{pmatrix}$: $4 + 0 - 4 = 0$. Diese drei liegen in $E$.
  ---
  $\begin{pmatrix} 1 \\ -2 \\ 4 \end{pmatrix}$: $1 + 4 + 16 = 21 \neq 0$, das ist der Normalvektor selbst. $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$: $1 - 2 + 4 = 3 \neq 0$.
  ---
  **b)** Mit $x = y = 0$ wird $4z = 8$, also $z = 2$. Spurpunkt $(0 \mid 0 \mid 2)$.
```

```aufgabe
id: ag-ebene-aussagen
titel: Aussagen über Ebenen
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Beurteile jede Aussage über Ebenen im Raum.
teile:
  - typ: richtigfalsch
    aussagen:
      - text: '$x = 2$ beschreibt eine Ebene, die parallel zur $yz$-Ebene liegt.'
        richtig: true
        erklaerung: '$y$ und $z$ sind frei. Alle Punkte mit $x = 2$ bilden eine Ebene im Abstand $2$ von der $yz$-Ebene.'
      - text: 'Die Ebene $3x + 4z = 12$ ist parallel zur $y$-Achse.'
        richtig: true
        erklaerung: '$y$ kommt nicht vor, ist also frei. Mit jedem Punkt der Ebene gehört die ganze Parallele zur $y$-Achse dazu.'
      - text: '$X = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + s\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + t\begin{pmatrix} 2 \\ 2 \\ 0 \end{pmatrix}$ beschreibt eine Ebene.'
        richtig: false
        erklaerung: Die Richtungsvektoren sind Vielfache voneinander. Das ergibt nur eine Gerade.
      - text: 'Jede Ebene hat genau einen Normalvektor.'
        richtig: false
        erklaerung: Jedes Vielfache (ungleich null) eines Normalvektors ist wieder ein Normalvektor. Es gibt genau eine Normal**richtung**.
      - text: 'Liegen $A$, $B$ und $C$ auf einer Geraden, dann ist $\overrightarrow{AB}\times\overrightarrow{AC}$ der Nullvektor.'
        richtig: true
        erklaerung: Dann sind $\overrightarrow{AB}$ und $\overrightarrow{AC}$ parallel, und das Kreuzprodukt paralleler Vektoren ist $\vec 0$.
    fehler:
      - wert: [r, r, r, r, r]
        meldung: Zwei Richtungsvektoren, die Vielfache voneinander sind, spannen keine Ebene auf. Und „ein Normalvektor“ ist nie eindeutig, nur seine Richtung.
      - wert: [r, r, f, r, r]
        meldung: Ein Normalvektor ist nie eindeutig. Mit $\vec n$ ist auch $2\vec n$ oder $-\vec n$ ein Normalvektor.
hinweise:
  - Fehlt eine Variable in der Gleichung, darf sie jeden Wert haben.
  - Denk daran, dass Vielfache eines Normalvektors wieder Normalvektoren sind.
loesung: |
  **Ansatz:** Wir verwenden zwei Grundtatsachen. Fehlt eine Variable, ist sie frei. Und Vielfache von Vektoren zeigen in dieselbe Richtung.
  ---
  Aussage 1 und 2 sind richtig: Die fehlende Variable ist frei, die Ebene ist parallel zu dieser Achse. Aussage 3 ist falsch, denn $\begin{pmatrix} 2 \\ 2 \\ 0 \end{pmatrix}$ ist das Doppelte von $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.
  ---
  Aussage 4 ist falsch, eindeutig ist nur die Normalrichtung. Aussage 5 ist richtig, denn parallele Vektoren haben das Kreuzprodukt $\vec 0$.
```

```aufgabe
id: ag-ebene-dach
titel: Die Ebene einer Dachfläche
niveau: 3
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Haus hat ein Satteldach. Die Einheiten sind Meter, $z$ zeigt nach oben. Die Traufe (die untere Dachkante) verläuft von
  $A(0 \mid 0 \mid 6)$ nach $B(10 \mid 0 \mid 6)$. Der First (die obere Dachkante) verläuft von $D(0 \mid 4 \mid 9)$ nach
  $(10 \mid 4 \mid 9)$. Die vordere Dachfläche ist das Rechteck zwischen Traufe und First.

  a) Bestimme die Ebene $E$ der vorderen Dachfläche in Koordinatenform (als $(a, b, c, d)$; jedes Vielfache ist richtig).

  b) Ein Kamin durchstößt die Dachfläche über dem Bodenpunkt $(6 \mid 2 \mid 0)$. In welcher Höhe?

  c) Wie groß ist die vordere Dachfläche?

  d) Unter welchem Winkel ist das Dach gegen die Waagrechte geneigt? Runde auf zwei Dezimalstellen.
teile:
  - typ: vektor
    label: 'a) $(a, b, c, d)$'
    namen: ["a", "b", "c", "d"]
    vielfaches: true
    loesung: ["0", "3", "-4", "-24"]
    fehler:
      - wert: ["0", "4", "3", "18"]
        meldung: Das ist $\overrightarrow{AD}$ als Normalvektor. $\overrightarrow{AD}$ liegt aber in der Dachfläche. Bilde das Kreuzprodukt von $\overrightarrow{AB}$ und $\overrightarrow{AD}$.
  - typ: zahl
    label: 'b) Höhe'
    einheit: m
    loesung: "7.5"
  - typ: zahl
    label: 'c) Fläche'
    einheit: m²
    loesung: "10*5"
    fehler:
      - wert: "10*4"
        meldung: '$4$ m ist nur der waagrechte Abstand von Traufe und First. Die Dachfläche ist schräg. Ihre Breite ist $|\overrightarrow{AD}| = \sqrt{4^2 + 3^2}$.'
  - typ: zahl
    label: 'd) Neigungswinkel'
    einheit: "°"
    loesung: "inGrad(atan(3/4))"
    fehler:
      - wert: "inGrad(atan(4/3))"
        meldung: 'Der Winkel gegen die Waagrechte hat den Tangens $\frac{\text{Höhe}}{\text{waagrechter Weg}} = \frac34$, nicht $\frac43$.'
hinweise:
  - '$\overrightarrow{AB} = (10, 0, 0)$ und $\overrightarrow{AD} = (0, 4, 3)$ liegen in der Dachfläche. Der Normalvektor ist ihr Kreuzprodukt.'
  - 'b) Setze $x = 6$ und $y = 2$ in die Ebenengleichung ein und löse nach $z$. c) Die Dachfläche ist ein Rechteck mit den Seiten $|\overrightarrow{AB}|$ und $|\overrightarrow{AD}|$. d) Auf $4$ m waagrecht steigt das Dach um $3$ m.'
loesung: |
  **Ansatz:** Die Dachfläche liegt in einer Ebene durch $A$, $B$ und $D$. Zwei Kanten liefern die Richtungsvektoren, das Kreuzprodukt den Normalvektor.
  ---
  **a)** $\overrightarrow{AB} = \begin{pmatrix} 10 \\ 0 \\ 0 \end{pmatrix}$, $\overrightarrow{AD} = \begin{pmatrix} 0 \\ 4 \\ 3 \end{pmatrix}$. Kreuzprodukt: $\begin{pmatrix} 0\cdot 3 - 0\cdot 4 \\ 0\cdot 0 - 10\cdot 3 \\ 10\cdot 4 - 0\cdot 0 \end{pmatrix} = \begin{pmatrix} 0 \\ -30 \\ 40 \end{pmatrix}$, gekürzt $\begin{pmatrix} 0 \\ -3 \\ 4 \end{pmatrix}$. Mit $A$: $d = 0 - 0 + 24 = 24$. Also $-3y + 4z = 24$, gleichwertig $3y - 4z = -24$. Probe mit $D$: $12 - 36 = -24$.
  ---
  **b)** $x = 6$, $y = 2$: $6 - 4z = -24$, also $z = 7{,}5$. Der Kamin durchstößt das Dach in $7{,}5$ m Höhe. Plausibel, denn $y = 2$ liegt in der Mitte zwischen Traufe ($6$ m) und First ($9$ m).
  ---
  **c)** $|\overrightarrow{AB}| = 10$ und $|\overrightarrow{AD}| = \sqrt{16 + 9} = 5$. Die Kanten stehen normal aufeinander, denn $\overrightarrow{AB}\cdot\overrightarrow{AD} = 0$. Fläche $10\cdot 5 = 50$ m².
  ---
  **d)** Auf $4$ m waagrecht steigt das Dach um $3$ m: $\tan\alpha = \frac34$, $\alpha \approx 36{,}87°$. **Antwort:** Die Dachfläche hat $50$ m² und ist um etwa $37°$ geneigt.
```

## Gerade und Ebene: Durchstoßpunkt, Lage und Winkel

```aufgabe
id: ag-ge-vorwissen
titel: Eine lineare Gleichung in t lösen
art: check
niveau: 1
angabe: |
  Löse $3(1 + 2t) - (4 - t) = 13$ nach $t$. Zum Nachlesen:
  [Kapitel 2, Lineare Gleichungen](/lernen/mathe3/gleichungen/lineare-gleichungen).
teile:
  - typ: zahl
    label: '$t$'
    loesung: "2"
    fehler:
      - wert: "14/5"
        meldung: 'Vor der Klammer $(4 - t)$ steht ein Minus. Es dreht beide Vorzeichen um: $-(4 - t) = -4 + t$.'
loesung: |
  Klammern auflösen. Das Minus vor der zweiten Klammer dreht beide Vorzeichen um: $3 + 6t - 4 + t = 13$.
  ---
  Zusammenfassen: $7t - 1 = 13$, also $7t = 14$ und $t = 2$.
```

Jetzt treffen eine Gerade und eine Ebene aufeinander. Stell dir einen Holzstab und eine Glasplatte vor. Es gibt drei
Möglichkeiten:

- Der Stab **durchstößt** die Platte in genau einem Punkt. Dieser Punkt heißt **Durchstoßpunkt** oder Schnittpunkt.
- Der Stab schwebt **parallel** über der Platte und trifft sie nie.
- Der Stab **liegt in** der Platte. Dann hat er unendlich viele Punkte mit ihr gemeinsam.

Eine vierte Lage gibt es nicht. Insbesondere kann eine Gerade eine Ebene nicht „windschief“ verfehlen. Eine Gerade,
die nicht parallel zur Ebene läuft, trifft sie irgendwann.

### Die Lage durch Einsetzen bestimmen

Am schnellsten geht es, wenn die Ebene in **Koordinatenform** $ax + by + cz = d$ und die Gerade in **Parameterform**
gegeben ist. Ein Punkt der Geraden hat die Koordinaten $x = p_1 + t r_1$, $y = p_2 + t r_2$ und $z = p_3 + t r_3$. Man
setzt diese Ausdrücke in die Ebenengleichung ein. Es entsteht eine lineare Gleichung in $t$, und sie hat einen von
drei Ausgängen:

1. **Genau eine Lösung $t$:** Die Gerade schneidet die Ebene. Den Durchstoßpunkt erhält man, indem man $t$ in die
   Gerade einsetzt.
2. **Keine Lösung,** also ein Widerspruch wie $3 = 5$: Die Gerade ist echt parallel zur Ebene.
3. **Jedes $t$ ist Lösung,** also eine wahre Aussage wie $5 = 5$: Die Gerade liegt in der Ebene.

:::beispiel[Ein Durchstoßpunkt]
Gegeben sind $E: x + 2y - 2z = 5$ und $g: X = \begin{pmatrix} 1 \\ 0 \\ 4 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$.

1. **Koordinaten von $g$:** $x = 1 + 2t$, $y = t$, $z = 4 - t$.
2. **In $E$ einsetzen:** $(1 + 2t) + 2t - 2(4 - t) = 5$.
3. **Ausmultiplizieren:** $1 + 2t + 2t - 8 + 2t = 5$, also $6t - 7 = 5$, $6t = 12$ und $t = 2$.
4. **Durchstoßpunkt:** $S = (1 + 4 \mid 0 + 2 \mid 4 - 2) = (5 \mid 2 \mid 2)$.
5. **Probe in $E$:** $5 + 4 - 4 = 5$. Stimmt.
:::

### Ein schneller Vorabtest

Ob eine Gerade parallel zur Ebene läuft, sieht man schon am Richtungsvektor. Läuft sie parallel, zeigt ihr
Richtungsvektor $\vec r$ entlang der Ebene. Dann steht er normal auf dem Normalvektor $\vec n$ der Ebene:
$$\vec n\cdot\vec r = 0 \quad\text{bedeutet: } g \text{ ist parallel zu } E \text{ oder liegt in } E.$$
Ob „parallel“ oder „liegt in“, entscheidet dann eine Punktprobe mit dem Aufpunkt. Ist $\vec n\cdot\vec r \neq 0$, gibt es
sicher genau einen Durchstoßpunkt.

:::beispiel[Parallel oder in der Ebene]
Wir bleiben bei $E: x + 2y - 2z = 5$ mit $\vec n = \begin{pmatrix} 1 \\ 2 \\ -2 \end{pmatrix}$.

**Gerade $g_1: X = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$.** Vorabtest: $\vec n\cdot\vec r = 2 + 0 - 2 = 0$.
Die Gerade ist parallel zu $E$ oder liegt in $E$. Punktprobe mit dem Aufpunkt: $1 + 4 - 2 = 3 \neq 5$. Also ist $g_1$
**echt parallel**. Auch das Einsetzen zeigt es: $(1 + 2t) + 4 - 2(1 + t) = 5$ ergibt $3 = 5$, das ist falsch.

**Gerade $g_2: X = \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix}$.** Gleiche Richtung, also wieder parallel
oder in $E$. Punktprobe: $3 + 4 - 2 = 5$. Stimmt. Also **liegt $g_2$ in $E$**. Einsetzen ergibt $5 = 5$, und das gilt für
jedes $t$.
:::

:::achtung[„t fällt weg“ falsch gedeutet]
Beim Einsetzen von $g_2$ erhält jemand $(3 + 2t) + 4 - 2(1 + t) = 5$, vereinfacht $5 = 5$. Er schreibt: „$t$ fällt weg, es
gibt keine Lösung, also ist die Gerade parallel.“ Das ist falsch gedeutet. $5 = 5$ ist eine **wahre** Aussage, und sie gilt
für **jedes** $t$. Also erfüllt jeder Punkt der Geraden die Ebenengleichung: Die Gerade liegt in der Ebene. Nur ein
**falscher** Rest wie $3 = 5$ bedeutet „keine Lösung“ und damit „echt parallel“.
:::

### Der Winkel zwischen Gerade und Ebene

Der **Winkel zwischen einer Geraden und einer Ebene** ist der Winkel zwischen der Geraden und ihrem senkrechten
Schatten in der Ebene. Ein Bild: Die Sonne steht genau senkrecht über der Ebene, und der Stab wirft einen Schatten.
Gemessen wird der Winkel zwischen Stab und Schatten. Er liegt zwischen $0°$ (Stab liegt flach) und $90°$ (Stab steht
senkrecht).

Diese Stelle ist für fast alle ungewohnt. Wir rechnen nicht mit einem Richtungsvektor der Ebene, sondern mit ihrem
**Normalvektor**, weil wir den sofort ablesen können. Der Normalvektor steht senkrecht auf der Ebene. Der Winkel
zwischen $\vec r$ und $\vec n$ ist deshalb nicht $\varphi$, sondern sein Ergänzungswinkel $90° - \varphi$. Nun gilt
$\cos(90° - \varphi) = \sin\varphi$ (siehe [Kapitel 5, Das rechtwinklige Dreieck](/lernen/mathe3/trigonometrie/das-rechtwinklige-dreieck)). Darum steht in der Formel der
**Sinus**:
$$\sin\varphi = \frac{|\vec n\cdot\vec r|}{|\vec n|\,|\vec r|}, \qquad 0° \le \varphi \le 90°.$$
Dabei ist $\vec n$ ein Normalvektor der Ebene und $\vec r$ ein Richtungsvektor der Geraden.

```plot
x: [-1, 7]
y: [-2, 4]
gleich: true
strecken:
  - { von: [-1, 0], nach: [7, 0], farbe: 0 }
  - { von: [3, 0], nach: [6, 0], gestrichelt: true, farbe: 2 }
graphen:
  - { f: "0.7*(x - 3)", label: "g", farbe: 1, von: 0.5, bis: 7 }
vektoren:
  - { von: [3, 0], nach: [3, 2.5], label: "n", farbe: 3 }
  - { von: [3, 0], nach: [5, 1.4], label: "r", farbe: 1 }
punkte:
  - { x: 5.3, y: 0.4, label: "φ", farbe: 2, offen: true }
  - { x: 3.5, y: 1.9, label: "90° − φ", farbe: 3, offen: true }
  - { x: -0.6, y: 0, label: "E (von der Seite)" }
beschriftung: Seitenansicht. Die Ebene E erscheint als waagrechte Linie, der grüne gestrichelte Schatten von g liegt in ihr. Zwischen der Geraden g und der Ebene liegt der Winkel φ. Zwischen dem Richtungsvektor r und dem Normalvektor n liegt der Ergänzungswinkel 90° − φ. Darum steht in der Winkelformel der Sinus.
```

:::beispiel[Winkel zwischen Gerade und Ebene]
Für $E: x + 2y - 2z = 5$ und $g$ mit $\vec r = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$ aus dem ersten Beispiel:

1. $\vec n\cdot\vec r = 2 + 2 + 2 = 6$.
2. $|\vec n| = \sqrt{1 + 4 + 4} = 3$ und $|\vec r| = \sqrt{4 + 1 + 1} = \sqrt 6$.
3. $\sin\varphi = \frac{6}{3\sqrt 6} = \frac{2}{\sqrt 6} \approx 0{,}8165$.
4. $\varphi \approx 54{,}74°$. Die Gerade durchstößt die Ebene also ziemlich steil.
:::

:::achtung[Kosinus statt Sinus]
Wer im letzten Beispiel aus Gewohnheit $\cos\varphi = \frac{6}{3\sqrt 6} \approx 0{,}8165$ rechnet, erhält
$\varphi \approx 35{,}26°$. Das ist der Winkel zwischen $\vec r$ und dem **Normalvektor**, nicht der Winkel zur Ebene.
Richtig ist $90° - 35{,}26° = 54{,}74°$. Merke: Sobald ein Normalvektor im Spiel ist und nach dem Winkel zu einer
**Ebene** gefragt ist, steht der Sinus. Bei Gerade–Gerade und bei Ebene–Ebene steht der Kosinus.
:::

```aufgabe
id: ag-ge-check-sinus
titel: Sinus oder Kosinus?
art: check
niveau: 1
angabe: |
  Der Richtungsvektor einer Geraden und der Normalvektor einer Ebene schließen einen Winkel von $20°$ ein. Welchen Winkel
  bildet die Gerade mit der Ebene?
teile:
  - typ: zahl
    einheit: "°"
    loesung: "90 - 20"
    fehler:
      - wert: "20"
        meldung: $20°$ ist der Winkel zum **Normalvektor**, also zur Senkrechten auf der Ebene. Der Winkel zur Ebene selbst ist der Ergänzungswinkel.
loesung: |
  Der Normalvektor steht senkrecht auf der Ebene. Ist die Gerade nur $20°$ von der Senkrechten entfernt, ist sie fast senkrecht.
  ---
  Der Winkel zur Ebene ist $90° - 20° = 70°$.
```

:::beispiel[Der Schatten eines Mastes]
Ein senkrechter Mast steht auf ebenem Boden $z = 0$. Seine Spitze ist $T(2 \mid 3 \mid 6)$, die Einheiten sind Meter.
Die Sonnenstrahlen haben die Richtung $\vec r = \begin{pmatrix} 2 \\ 2 \\ -3 \end{pmatrix}$.

1. **Strahl durch die Spitze:** $X = \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 2 \\ -3 \end{pmatrix}$.
2. **Schnitt mit dem Boden $z = 0$:** $6 - 3t = 0$, also $t = 2$. Schattenpunkt $(2 + 4 \mid 3 + 4 \mid 0) = (6 \mid 7 \mid 0)$.
3. **Schattenlänge:** Der Fußpunkt des Mastes ist $(2 \mid 3 \mid 0)$. Der Schatten reicht also um $\begin{pmatrix} 4 \\ 4 \\ 0 \end{pmatrix}$
   weiter, das sind $\sqrt{16 + 16} = 4\sqrt 2 \approx 5{,}66$ m.
4. **Sonnenhöhe** (Winkel der Strahlen gegen den Boden): Der Boden hat den Normalvektor $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.
   $\sin\varphi = \frac{|-3|}{1\cdot\sqrt{4 + 4 + 9}} = \frac{3}{\sqrt{17}} \approx 0{,}7276$, also $\varphi \approx 46{,}69°$.

**Antwort:** Der $6$ m hohe Mast wirft einen etwa $5{,}7$ m langen Schatten. Die Sonne steht rund $47°$ hoch.
**Plausibilität:** Bei einer Sonnenhöhe von genau $45°$ wäre der Schatten so lang wie der Mast, also $6$ m. Hier steht die
Sonne etwas höher, also ist der Schatten etwas kürzer.
:::

:::merke[Rezept: Gerade und Ebene]
1. Ebene in Koordinatenform bringen (falls sie in Parameterform gegeben ist: Normalvektor mit dem Kreuzprodukt).
2. **Vorabtest** $\vec n\cdot\vec r$. Ist er $0$: Punktprobe mit dem Aufpunkt entscheidet „echt parallel“ oder „liegt in $E$“.
3. Sonst: Koordinaten der Geraden in $E$ **einsetzen**, nach $t$ lösen, $t$ in $g$ einsetzen. Probe in $E$.
4. **Winkel** mit dem Sinus: $\sin\varphi = \frac{|\vec n\cdot\vec r|}{|\vec n|\,|\vec r|}$.
:::

```reflexion
frage: Warum bedeutet $\vec n\cdot\vec r = 0$, dass die Gerade parallel zur Ebene läuft oder in ihr liegt, aber nicht, dass sie die Ebene schneidet?
antwort: |
  $\vec n\cdot\vec r = 0$ heißt: Der Richtungsvektor steht normal auf dem Normalvektor. Er zeigt also genau entlang
  der Ebene, ohne „Steigung“ aus ihr heraus. Wer sich auf der Geraden bewegt, ändert seinen Abstand zur Ebene nie.
  Ist der Abstand am Anfang null, bleibt er null: Die Gerade liegt in der Ebene. Ist er am Anfang nicht null, wird er
  nie null: Die Gerade ist echt parallel. Ein einzelner Schnittpunkt ist nur möglich, wenn die Gerade sich der Ebene
  nähert, also wenn $\vec n\cdot\vec r \neq 0$ ist.
```

```aufgabe
id: ag-durchstoss-einfach
titel: Den Durchstoßpunkt berechnen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Berechne den Durchstoßpunkt von $g: X = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}$ durch die Ebene
  $E: 2x - y + z = 5$.
teile:
  - typ: vektor
    label: '$S$'
    namen: ["x", "y", "z"]
    loesung: ["3", "4", "3"]
    fehler:
      - wert: ["2", "2", "4"]
        meldung: Das ist nur $2\cdot\vec r$. Der Durchstoßpunkt ist $P + 2\cdot\vec r$. Addiere den Aufpunkt.
      - wert: ["2", "3", "1"]
        meldung: Das ist der Punkt für $t = 1$. Löse die Gleichung in $t$ noch einmal genau.
hinweise:
  - 'Setze $x = 1 + t$, $y = 2 + t$ und $z = -1 + 2t$ in $E$ ein und löse nach $t$.'
loesung: |
  **Ansatz:** Der Durchstoßpunkt liegt auf $g$ und erfüllt die Ebenengleichung. Wir setzen die Koordinaten von $g$ in $E$ ein.
  ---
  $2(1 + t) - (2 + t) + (-1 + 2t) = 5$, also $2 + 2t - 2 - t - 1 + 2t = 5$, also $3t - 1 = 5$ und $t = 2$.
  ---
  $S = (1 + 2 \mid 2 + 2 \mid -1 + 4) = (3 \mid 4 \mid 3)$. Probe in $E$: $6 - 4 + 3 = 5$. Stimmt.
```

```aufgabe
id: ag-winkel-gerade-ebene
titel: Winkel zwischen Gerade und Ebene
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Unter welchem Winkel schneidet eine Gerade mit dem Richtungsvektor $\vec r = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$ die Ebene
  $E: x + 2y + 2z = 7$? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$\varphi$'
    einheit: "°"
    loesung: "inGrad(asin(4/(3*sqrt(2))))"
    fehler:
      - wert: "inGrad(acos(4/(3*sqrt(2))))"
        meldung: Mit dem Kosinus bekommst du den Winkel zum **Normalvektor**. Für den Winkel zur Ebene brauchst du den Sinus.
hinweise:
  - 'Der Normalvektor ist $\vec n = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$. Verwende $\sin\varphi = \frac{|\vec n\cdot\vec r|}{|\vec n|\,|\vec r|}$.'
loesung: |
  **Ansatz:** Winkel Gerade–Ebene über den Normalvektor. Weil $\vec n$ senkrecht auf der Ebene steht, liefert die Formel mit dem Sinus den Winkel zur Ebene.
  ---
  $\vec n\cdot\vec r = 0 + 2 + 2 = 4$, $|\vec n| = 3$, $|\vec r| = \sqrt 2$. $\sin\varphi = \frac{4}{3\sqrt 2} \approx 0{,}9428$, also $\varphi \approx 70{,}53°$.
```

```aufgabe
id: ag-lage-gerade-ebene
titel: Lage von Gerade und Ebene
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Bestimme die Lage der Geraden zur Ebene $E: x - y + 2z = 4$.

  $g_1: X = \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$, $\quad g_2: X = t\cdot\begin{pmatrix} 2 \\ 0 \\ -1 \end{pmatrix}$, $\quad g_3: X = t\cdot\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$
teile:
  - typ: auswahl
    label: '$g_1$'
    optionen: ["liegt in E", "echt parallel zu E", "schneidet E"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Die Richtung ist parallel zu $E$. Mach die Punktprobe mit $(4 \mid 0 \mid 0)$: $4 - 0 + 0 = 4$.'
  - typ: auswahl
    label: '$g_2$'
    optionen: ["liegt in E", "echt parallel zu E", "schneidet E"]
    richtig: [1]
    fehler:
      - wert: 2
        meldung: 'Prüfe $\vec n\cdot\vec r = 2 - 0 - 2$. Ist es null, kann es keinen einzelnen Schnittpunkt geben.'
  - typ: auswahl
    label: '$g_3$'
    optionen: ["liegt in E", "echt parallel zu E", "schneidet E"]
    richtig: [2]
  - typ: vektor
    label: 'Schnittpunkt von $g_3$ mit $E$'
    namen: ["x", "y", "z"]
    loesung: ["2", "2", "2"]
    fehler:
      - wert: ["1", "1", "1"]
        meldung: Das ist der Punkt für $t = 1$. Setze $g_3$ in $E$ ein, um das richtige $t$ zu finden.
hinweise:
  - Berechne zuerst jeweils $\vec n\cdot\vec r$ mit $\vec n = \begin{pmatrix} 1 \\ -1 \\ 2 \end{pmatrix}$.
  - Ist das Skalarprodukt $0$, entscheidet die Punktprobe mit dem Aufpunkt. Sonst einsetzen.
loesung: |
  **Ansatz:** Vorabtest mit $\vec n\cdot\vec r$, dann Punktprobe oder Einsetzen.
  ---
  $g_1$: $\vec n\cdot\vec r = 1 - 1 + 0 = 0$, parallel oder in $E$. Aufpunkt: $4 - 0 + 0 = 4$. Erfüllt, $g_1$ liegt in $E$.
  ---
  $g_2$: $\vec n\cdot\vec r = 2 - 0 - 2 = 0$. Aufpunkt $(0 \mid 0 \mid 0)$: $0 \neq 4$. Echt parallel.
  ---
  $g_3$: $\vec n\cdot\vec r = 1 - 1 + 2 = 2 \neq 0$, Schnittpunkt. Einsetzen: $t - t + 2t = 4$, $t = 2$, $S(2 \mid 2 \mid 2)$. Probe: $2 - 2 + 4 = 4$.
```

```aufgabe
id: ag-durchstosspunkt
titel: Ein Laserstrahl trifft eine schräge Wand
niveau: 2
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Laserstrahl startet in $L(0 \mid 0 \mid 8)$ und läuft in Richtung $\vec r = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$. Die Einheiten sind
  Meter. Er trifft die schräge Wand $E: 2x + 2y + z = 14$. Bestimme den Auftreffpunkt, die zurückgelegte Strecke und den
  Winkel zwischen Strahl und Wand (auf zwei Dezimalstellen).
teile:
  - typ: vektor
    label: 'Auftreffpunkt'
    namen: ["x", "y", "z"]
    loesung: ["3", "1.5", "5"]
    fehler:
      - wert: ["3", "1.5", "-3"]
        meldung: 'Bei der $z$-Koordinate fehlt der Startwert. Es ist $z = 8 - 2t$.'
  - typ: zahl
    label: 'Strecke $|LS|$'
    einheit: m
    loesung: "1.5*3"
    fehler:
      - wert: "1.5"
        meldung: '$t = 1{,}5$ ist der Parameterwert. Die Strecke ist $t\cdot|\vec r|$, und $|\vec r| = 3$.'
  - typ: zahl
    label: 'Winkel'
    einheit: "°"
    loesung: "inGrad(asin(4/9))"
    fehler:
      - wert: "inGrad(acos(4/9))"
        meldung: Das ist der Winkel zum Normalvektor der Wand. Für den Winkel zur Wand brauchst du den Sinus.
hinweise:
  - 'Strahl: $X = L + t\cdot\vec r$ mit $t \ge 0$. Setze ihn in $E$ ein.'
  - 'Für den Winkel verwende den Normalvektor $\begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix}$ und den Sinus.'
loesung: |
  **Ansatz:** Der Strahl ist ein Teil der Geraden $X = L + t\cdot\vec r$ mit $t \ge 0$. Der Auftreffpunkt ist ihr Schnitt mit der Wand.
  ---
  Einsetzen: $2\cdot 2t + 2t + (8 - 2t) = 14$, also $4t + 8 = 14$ und $t = 1{,}5$. Das ist positiv, der Strahl trifft die Wand also wirklich (in Laufrichtung).
  ---
  $S = (3 \mid 1{,}5 \mid 8 - 3) = (3 \mid 1{,}5 \mid 5)$. Probe: $6 + 3 + 5 = 14$. Strecke: $1{,}5\cdot\sqrt{4 + 1 + 4} = 1{,}5\cdot 3 = 4{,}5$ m.
  ---
  Winkel: $\vec n\cdot\vec r = 4 + 2 - 2 = 4$, $|\vec n| = |\vec r| = 3$. $\sin\varphi = \frac49$, also $\varphi \approx 26{,}39°$. Der Strahl trifft die Wand also recht flach.
gefuehrt:
  - text: 'Schreibe die Koordinaten eines Punktes auf dem Strahl auf. Welchen Ausdruck hat die $z$-Koordinate?'
    teil: { typ: auswahl, optionen: ['$8 - 2t$', '$-2t$', '$8 + 2t$'], richtig: [0], fehler: [ { wert: 1, meldung: 'Der Strahl startet in der Höhe $8$. Dieser Startwert gehört dazu.' } ] }
    erklaerung: 'Punkt auf dem Strahl: $(2t \mid t \mid 8 - 2t)$.'
  - text: 'Setze in $2x + 2y + z = 14$ ein und löse nach $t$.'
    teil: { typ: zahl, loesung: "1.5" }
    erklaerung: '$4t + 2t + 8 - 2t = 14$, also $4t = 6$ und $t = 1{,}5$.'
  - text: 'Berechne den Auftreffpunkt.'
    teil: { typ: vektor, namen: ["x", "y", "z"], loesung: ["3", "1.5", "5"] }
    erklaerung: '$(2\cdot 1{,}5 \mid 1{,}5 \mid 8 - 3) = (3 \mid 1{,}5 \mid 5)$.'
  - text: 'Überlege, warum die zurückgelegte Strecke $t\cdot|\vec r|$ ist und nicht einfach $t$.'
    erklaerung: 'Der Strahl legt pro Einheit von $t$ den Vektor $\vec r$ zurück, und der ist $3$ m lang. Also $1{,}5\cdot 3 = 4{,}5$ m.'
```

```aufgabe
id: ag-gerade-ebene-parameter
titel: Eine Gerade parallel zu einer Ebene machen
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Für jede Zahl $a$ ist $g_a: X = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + t\cdot\begin{pmatrix} a \\ 2 \\ 1 \end{pmatrix}$ eine Gerade. Gegeben ist die Ebene
  $E: 3x - y + 2z = 6$.

  a) Für welches $a$ ist $g_a$ parallel zu $E$ oder liegt in $E$?

  b) Liegt $g_a$ für diesen Wert in $E$, oder ist sie echt parallel?

  c) Gibt es ein $a$, für das $g_a$ normal auf $E$ steht?
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "0"
    fehler:
      - wert: "-2/3"
        meldung: 'Rechne $\vec n\cdot\vec r$ vollständig: $3a - 2 + 2$. Die beiden Zweien heben sich auf.'
  - typ: auswahl
    label: 'b)'
    optionen: ['liegt in $E$', 'echt parallel']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Mach die Punktprobe mit dem Aufpunkt: $3\cdot 1 - 0 + 2\cdot 2 = 7$. Das ist nicht $6$.'
  - typ: auswahl
    label: 'c)'
    optionen: ['Ja, für $a = 3$.', 'Nein, für kein $a$.']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Normal auf $E$ heißt: $\vec r$ ist ein Vielfaches von $\vec n = \begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$. Prüfe die zweite und dritte Komponente: $2 = -\lambda$ und $1 = 2\lambda$.'
hinweise:
  - 'Parallel heißt $\vec n\cdot\vec r = 0$ mit $\vec n = \begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$.'
  - 'Normal heißt: $\vec r = \lambda\cdot\vec n$ für eine Zahl $\lambda$. Prüfe, ob die zweite und die dritte Komponente dasselbe $\lambda$ liefern.'
loesung: |
  **Ansatz:** Parallelität und Normalstellung hängen nur vom Richtungsvektor ab. Wir vergleichen $\vec r$ mit dem Normalvektor $\vec n = \begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$.
  ---
  **a)** $\vec n\cdot\vec r = 3a - 2 + 2 = 3a$. Das ist null genau für $a = 0$.
  ---
  **b)** Punktprobe mit $(1 \mid 0 \mid 2)$: $3 - 0 + 4 = 7 \neq 6$. Die Gerade $g_0$ ist echt parallel zu $E$.
  ---
  **c)** Normal hieße $\begin{pmatrix} a \\ 2 \\ 1 \end{pmatrix} = \lambda\cdot\begin{pmatrix} 3 \\ -1 \\ 2 \end{pmatrix}$. Die zweite Komponente verlangt $\lambda = -2$, die dritte $\lambda = \frac12$. Widerspruch. Es gibt kein solches $a$, egal wie man die erste Komponente wählt.
```

```aufgabe
id: ag-gerade-ebene-fehler
titel: Keine Lösung oder unendlich viele?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Lena untersucht $g: X = \begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ und $E: x + y - z = 2$. Sie setzt ein und
  erhält $(1 + t) + 2 - (1 + t) = 2$, also $2 = 2$. Sie schreibt: „$t$ fällt weg. Die Gleichung hat keine Lösung. Also ist $g$
  parallel zu $E$.“
teile:
  - typ: auswahl
    label: 'Ist Lenas Schluss richtig?'
    optionen:
      - 'Nein. $2 = 2$ ist für jedes $t$ wahr. Jeder Punkt von $g$ liegt in $E$.'
      - 'Ja. Wenn $t$ wegfällt, gibt es keinen Schnittpunkt.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Es kommt darauf an, was übrig bleibt. Eine wahre Aussage wie $2 = 2$ gilt für jedes $t$. Nur eine falsche wie $1 = 2$ bedeutet „keine Lösung“.
  - typ: auswahl
    label: 'Wie liegt $g$ wirklich zu $E$?'
    optionen: ["liegt in E", "echt parallel zu E", "schneidet E"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mach die Punktprobe mit dem Aufpunkt $(1 \mid 2 \mid 1)$: $1 + 2 - 1 = 2$. Der Aufpunkt liegt in $E$.'
hinweise:
  - Überlege, für welche Werte von $t$ die Gleichung $2 = 2$ erfüllt ist.
  - Kontrolliere mit dem Vorabtest $\vec n\cdot\vec r$ und einer Punktprobe.
loesung: |
  **Ansatz:** Beim Einsetzen bleibt eine Aussage ohne $t$. Entscheidend ist, ob sie wahr oder falsch ist.
  ---
  $2 = 2$ ist wahr, und zwar unabhängig von $t$. Also erfüllt **jeder** Punkt der Geraden die Ebenengleichung.
  ---
  Kontrolle: $\vec n\cdot\vec r = 1 + 0 - 1 = 0$, die Gerade ist parallel zu $E$ oder liegt in $E$. Der Aufpunkt erfüllt $1 + 2 - 1 = 2$. Die Gerade liegt in $E$. Lena hat „keine Lösung“ mit „jede Zahl ist Lösung“ verwechselt.
```

```aufgabe
id: ag-schatten-wand
titel: Der Schatten fällt auf eine Wand
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Ein Mast steht senkrecht auf ebenem Boden ($z = 0$). Seine Spitze ist $T(2 \mid 1 \mid 6)$, die Einheiten sind Meter. Die
  Sonnenstrahlen haben die Richtung $\vec r = \begin{pmatrix} 3 \\ 1 \\ -2 \end{pmatrix}$. Hinter dem Mast steht eine senkrechte Mauer in der
  Ebene $x = 8$.

  a) Wo würde der Schatten der Spitze ohne Mauer auf den Boden fallen?

  b) Wo trifft der Schatten der Spitze tatsächlich auf die Mauer? In welcher Höhe?

  c) Unter welchem Winkel treffen die Sonnenstrahlen den Boden?

  d) Unter welchem Winkel treffen sie die Mauer? Runde die Winkel auf zwei Dezimalstellen.
teile:
  - typ: vektor
    label: 'a) Schattenpunkt am Boden'
    namen: ["x", "y", "z"]
    loesung: ["11", "4", "0"]
    fehler:
      - wert: ["-7", "-2", "0"]
        meldung: Du bist gegen die Strahlrichtung gegangen. Aus $z = 6 - 2t = 0$ folgt $t = +3$, nicht $t = -3$.
  - typ: vektor
    label: 'b) Auftreffpunkt an der Mauer'
    namen: ["x", "y", "z"]
    loesung: ["8", "3", "2"]
  - typ: zahl
    label: 'c) Winkel zum Boden'
    einheit: "°"
    loesung: "inGrad(asin(2/sqrt(14)))"
    fehler:
      - wert: "inGrad(acos(2/sqrt(14)))"
        meldung: Mit dem Kosinus erhältst du den Winkel zur Senkrechten. Gefragt ist der Winkel zum Boden, also der Sinus.
  - typ: zahl
    label: 'd) Winkel zur Mauer'
    einheit: "°"
    loesung: "inGrad(asin(3/sqrt(14)))"
hinweise:
  - 'Der Strahl durch die Spitze ist $X = T + t\cdot\vec r$. a) Schnitt mit $z = 0$. b) Schnitt mit $x = 8$.'
  - 'Der Boden hat den Normalvektor $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$, die Mauer $x = 8$ den Normalvektor $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$. Winkel zu einer Ebene: Sinus.'
loesung: |
  **Ansatz:** Der Schatten der Spitze liegt dort, wo der Sonnenstrahl durch die Spitze auf eine Fläche trifft. Das ist ein Schnitt Gerade–Ebene.
  ---
  **a)** Strahl $X = (2 + 3t \mid 1 + t \mid 6 - 2t)$. Boden $z = 0$: $6 - 2t = 0$, also $t = 3$. Punkt $(11 \mid 4 \mid 0)$.
  ---
  **b)** Mauer $x = 8$: $2 + 3t = 8$, also $t = 2$. Punkt $(8 \mid 3 \mid 2)$. Weil $t = 2 < 3$ ist, erreicht der Strahl die Mauer **vor** dem Boden. Der Schatten der Spitze liegt also in $2$ m Höhe auf der Mauer.
  ---
  **c)** $|\vec r| = \sqrt{9 + 1 + 4} = \sqrt{14}$. Boden: $\sin\varphi = \frac{|-2|}{\sqrt{14}} \approx 0{,}5345$, also $\varphi \approx 32{,}31°$.
  ---
  **d)** Mauer: $\sin\psi = \frac{|3|}{\sqrt{14}} \approx 0{,}8018$, also $\psi \approx 53{,}30°$. **Antwort:** Der Schatten der Spitze fällt in $2$ m Höhe auf die Mauer. Die Strahlen treffen den Boden unter etwa $32°$ und die Mauer unter etwa $53°$.
```

## Zwei Ebenen: Schnittgerade, Winkel und Gleichungssysteme

```aufgabe
id: ag-ee-vorwissen
titel: Ein Gleichungssystem mit freiem Parameter
art: check
niveau: 1
angabe: |
  Das Gleichungssystem $x + y = 3$ und $2x + 2y = 6$ hat unendlich viele Lösungen. Man setzt $y = t$. Welche Darstellung
  der Lösungen ist richtig? Zum Nachlesen: [Kapitel 3, Lösbarkeit, Rang und Parameterdarstellung](/lernen/mathe3/lgs-matrizen/loesbarkeit-rang-und-parameterdarstellung).
teile:
  - typ: auswahl
    optionen:
      - '$x = 3 - t$, $y = t$ mit beliebigem $t$'
      - '$x = 3$, $y = 0$'
      - '$x = 3 + t$, $y = t$ mit beliebigem $t$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das ist nur **eine** der Lösungen. Weil die zweite Gleichung das Doppelte der ersten ist, gibt es unendlich viele.
      - wert: 2
        meldung: 'Setze ein: $(3 + t) + t = 3 + 2t$. Das ist nur für $t = 0$ gleich $3$. Löse $x + t = 3$ richtig nach $x$ auf.'
loesung: |
  Die zweite Gleichung ist das Doppelte der ersten, sie sagt nichts Neues. Es bleibt $x + y = 3$.
  ---
  Mit $y = t$ folgt $x = 3 - t$. Jede Wahl von $t$ liefert eine Lösung, zum Beispiel $t = 1$ den Punkt $(2 \mid 1)$.
```

Zwei Ebenen im Raum, etwa zwei Wände oder eine Wand und der Boden: Wie können sie zueinander liegen? Es gibt drei
Möglichkeiten:

- Sie sind **echt parallel** und haben keinen Punkt gemeinsam, wie Boden und Decke eines Zimmers.
- Sie sind **identisch**, also dieselbe Ebene.
- Sie **schneiden sich in einer Geraden**, wie zwei Wände in der Zimmerecke. Diese Gerade heißt **Schnittgerade**.

Einen einzelnen gemeinsamen Punkt können zwei Ebenen nie haben. Haben sie einen Punkt gemeinsam und sind nicht
identisch, dann teilen sie gleich eine ganze Gerade durch diesen Punkt.

:::satz[Lage zweier Ebenen]
Gegeben sind $E_1: \vec n_1\cdot X = d_1$ und $E_2: \vec n_2\cdot X = d_2$.
- Sind die Normalvektoren $\vec n_1$ und $\vec n_2$ **Vielfache** voneinander, sind die Ebenen parallel. Sie sind
  **identisch**, wenn die ganzen Gleichungen (samt rechter Seite) Vielfache voneinander sind. Sonst sind sie echt parallel.
- Sind die Normalvektoren **keine** Vielfachen, schneiden sich die Ebenen in einer Geraden. Ihr Richtungsvektor ist
  $\vec r = \vec n_1\times\vec n_2$.
:::

**Warum ist $\vec n_1\times\vec n_2$ die Richtung der Schnittgeraden?** Die Schnittgerade liegt in $E_1$. Ihre Richtung
steht also normal auf $\vec n_1$. Sie liegt auch in $E_2$, also steht ihre Richtung auch normal auf $\vec n_2$. Ein
Vektor, der auf zwei gegebenen Vektoren zugleich normal steht, ist genau das Kreuzprodukt.

### Die Schnittgerade berechnen

Man braucht eine Richtung und einen Punkt. Die Richtung liefert das Kreuzprodukt. Einen Punkt findet man, indem man
**eine Koordinate frei wählt**, meistens null. Dann bleiben zwei Gleichungen mit zwei Unbekannten.

:::beispiel[Die Schnittgerade zweier Ebenen]
Gegeben sind $E_1: x + 2y - z = 3$ und $E_2: 2x - y + z = 1$.

1. **Lage:** Die Normalvektoren $\begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}$ und $\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ sind keine Vielfachen. Die
   Ebenen schneiden sich.
2. **Richtung:** $\vec r = \vec n_1\times\vec n_2 = \begin{pmatrix} 2\cdot 1 - (-1)\cdot(-1) \\ (-1)\cdot 2 - 1\cdot 1 \\ 1\cdot(-1) - 2\cdot 2 \end{pmatrix} = \begin{pmatrix} 1 \\ -3 \\ -5 \end{pmatrix}$.
3. **Ein Punkt:** Wir setzen $z = 0$, weil das die Gleichungen am stärksten vereinfacht. Es bleiben $x + 2y = 3$ und
   $2x - y = 1$. Aus der zweiten folgt $y = 2x - 1$. Eingesetzt: $x + 4x - 2 = 3$, also $x = 1$ und $y = 1$. Der Punkt
   ist $P(1 \mid 1 \mid 0)$.
4. **Ergebnis:** $g: X = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ -3 \\ -5 \end{pmatrix}$.
5. **Probe mit $t = 1$**, also dem Punkt $(2 \mid -2 \mid -5)$: In $E_1$: $2 - 4 + 5 = 3$. In $E_2$: $4 + 2 - 5 = 1$. Beide
   Gleichungen stimmen.
:::

Es gibt einen zweiten Weg, der ganz ohne Kreuzprodukt auskommt. Man löst das Gleichungssystem aus den beiden
Ebenengleichungen wie in [Kapitel 3, Lösbarkeit, Rang und Parameterdarstellung](/lernen/mathe3/lgs-matrizen/loesbarkeit-rang-und-parameterdarstellung). Drei Unbekannte, aber nur zwei Gleichungen: Eine
Variable bleibt frei. Man setzt sie gleich $t$.

:::beispiel[Dieselbe Schnittgerade mit einem freien Parameter]
Wir setzen in $E_1: x + 2y - z = 3$ und $E_2: 2x - y + z = 1$ die Variable $z = t$.

1. Es bleiben $x + 2y = 3 + t$ und $2x - y = 1 - t$.
2. Aus der zweiten Gleichung: $y = 2x - 1 + t$. In die erste eingesetzt: $x + 4x - 2 + 2t = 3 + t$, also $5x = 5 - t$
   und $x = 1 - \frac t5$.
3. Dann $y = 2 - \frac{2t}{5} - 1 + t = 1 + \frac{3t}{5}$.
4. Ergebnis: $X = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} -\frac15 \\ \frac35 \\ 1 \end{pmatrix}$.

Der Richtungsvektor ist $-\frac15$ mal $\begin{pmatrix} 1 \\ -3 \\ -5 \end{pmatrix}$. Es ist also dieselbe Gerade, nur anders
parametrisiert.
:::

:::achtung[Die gewählte Koordinate gibt es auf der Geraden nicht]
Gegeben sind $E_1: x + y + z = 4$ und $E_2: x - y + z = 2$. Jemand setzt $y = 0$ und erhält $x + z = 4$ und $x + z = 2$. Das
ist ein Widerspruch. Er schließt: „Die Ebenen schneiden sich nicht.“ Das ist falsch. Die Normalvektoren
$\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$ und $\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$ sind keine Vielfachen, also gibt es eine Schnittgerade. Zieht man
die Gleichungen voneinander ab, folgt $2y = 2$, also $y = 1$ für **jeden** Punkt der Schnittgeraden. Einen Punkt mit $y = 0$
gibt es darauf gar nicht. Abhilfe: eine andere Koordinate null setzen. Mit $x = 0$ folgt $y + z = 4$ und $-y + z = 2$,
also $z = 3$, $y = 1$ und der Punkt $(0 \mid 1 \mid 3)$.
:::

### Der Winkel zwischen zwei Ebenen

Den Winkel zwischen zwei sich schneidenden Ebenen misst man über ihre Normalvektoren. Kippt man beide Ebenen um
denselben Winkel, kippen ihre Normalvektoren mit. Darum gilt wie bei zwei Geraden:
$$\cos\varphi = \frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1|\,|\vec n_2|}, \qquad 0° \le \varphi \le 90°.$$
Hier steht der **Kosinus**, weil man zwei gleichartige Vektoren vergleicht: Normalvektor mit Normalvektor. Eine wichtige
Anwendung ist die **Neigung** einer schrägen Fläche gegen den waagrechten Boden. Der Boden $z = 0$ hat den Normalvektor
$\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.

:::beispiel[Die Neigung eines Hangs]
Ein Hang liegt in der Ebene $E: 2x + 3y + 6z = 12$ (Einheiten in Metern, $z$ zeigt nach oben). Wie steil ist er?

1. $\vec n_E = \begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$ mit $|\vec n_E| = \sqrt{4 + 9 + 36} = 7$. Der Boden hat $\vec n_B = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$
   mit Länge $1$.
2. $\cos\varphi = \frac{|0 + 0 + 6|}{7\cdot 1} = \frac67 \approx 0{,}8571$.
3. $\varphi \approx 31{,}00°$.

**Antwort:** Der Hang ist um etwa $31°$ gegen die Waagrechte geneigt. Für eine Skipiste wäre das schon steil.
:::

:::achtung[Sinus statt Kosinus beim Winkel zweier Ebenen]
Beim Hang rechnet jemand $\sin\varphi = \frac67$ und erhält $\varphi \approx 59{,}00°$. Das ist der Ergänzungswinkel. Der
Sinus gehört nur zum Winkel zwischen einer **Geraden** und einer Ebene, weil man dort einen Richtungsvektor mit einem
Normalvektor vergleicht. Bei zwei Ebenen vergleicht man zwei Normalvektoren, also steht der Kosinus. Plausibilitätscheck:
Der Normalvektor $\begin{pmatrix} 2 \\ 3 \\ 6 \end{pmatrix}$ zeigt fast senkrecht nach oben. Der Hang ist also eher flach, $31°$
passt, $59°$ nicht.
:::

```aufgabe
id: ag-ee-check-lage
titel: Parallel oder identisch?
art: check
niveau: 1
angabe: |
  Wie liegen $E_1: x - 2y + z = 3$ und $E_2: -2x + 4y - 2z = -6$ zueinander?
teile:
  - typ: auswahl
    optionen:
      - 'identisch'
      - 'echt parallel'
      - 'sie schneiden sich in einer Geraden'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Vergleiche auch die rechten Seiten. $E_1$ mal $-2$ ergibt $-2x + 4y - 2z = -6$, also genau $E_2$.'
      - wert: 2
        meldung: Die Normalvektoren sind Vielfache voneinander. Dann können sich die Ebenen nicht in einer Geraden schneiden.
loesung: |
  $\vec n_2 = \begin{pmatrix} -2 \\ 4 \\ -2 \end{pmatrix} = -2\cdot\vec n_1$, die Ebenen sind parallel oder identisch.
  ---
  Auch die rechte Seite passt: $-2\cdot 3 = -6$. Die ganze Gleichung von $E_2$ ist das $(-2)$-Fache von $E_1$. Die Ebenen sind identisch.
```

### Drei Ebenen und lineare Gleichungssysteme

Ein lineares Gleichungssystem mit drei Unbekannten $x$, $y$ und $z$ ist geometrisch eine Liste von Ebenen. Seine
Lösungsmenge sind die Punkte, die auf **allen** diesen Ebenen liegen. Damit bekommt jede Lösbarkeitsaussage aus
[Kapitel 3, Geometrische Deutung im Raum](/lernen/mathe3/lgs-matrizen/geometrische-deutung-im-raum) ein Bild. Bei drei Gleichungen gibt es diese Fälle:

| Lösungsmenge | So liegen die drei Ebenen. |
|---|---|
| genau ein Punkt | Sie schneiden sich in einem Punkt, wie Boden und zwei Wände in einer Zimmerecke. |
| eine Gerade | Sie gehen alle durch eine gemeinsame Gerade, wie aufgeschlagene Buchseiten. |
| eine Ebene | Alle drei Gleichungen beschreiben dieselbe Ebene. |
| leer, Fall 1 | Mindestens zwei der Ebenen sind echt parallel. |
| leer, Fall 2 | Je zwei schneiden sich, aber die drei Schnittgeraden sind parallel. Das sieht aus wie ein Prisma. |

Die Determinante der Koeffizientenmatrix ist genau dann nicht null, wenn es genau einen Schnittpunkt gibt.

:::beispiel[Ein Gleichungssystem geometrisch deuten]
Gegeben ist das System
$$x - y + 2z = 1, \qquad 2x + y - z = 4, \qquad x + 2y - 3z = 3.$$

1. **Beobachtung:** Die dritte Gleichung ist die zweite minus die erste: $(2x - x) + (y + y) + (-z - 2z) = 4 - 1$. Sie
   enthält also keine neue Information.
2. **Lösen:** Die ersten beiden Gleichungen addiert ergeben $3x + z = 5$, also $z = 5 - 3x$. Wir setzen $x = t$. Dann
   ist $z = 5 - 3t$ und aus der ersten Gleichung $y = x + 2z - 1 = 9 - 5t$.
3. **Lösungsmenge:** $X = \begin{pmatrix} 0 \\ 9 \\ 5 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ -5 \\ -3 \end{pmatrix}$, eine Gerade.

**Deutung:** Die drei Ebenen gehen durch eine gemeinsame Gerade, wie Buchseiten. Ein Tripel, das nur die erste Gleichung
erfüllt, ist zum Beispiel $(1 \mid 0 \mid 0)$: Es ergibt $1$ in der ersten, aber $2 \neq 4$ in der zweiten Gleichung. Das ist
ein Punkt der ersten Ebene, der nicht auf den anderen liegt.
:::

### Eine Ebene durch eine vorgegebene Gerade angeben

In Prüfungen wird oft verlangt, eine Ebene **anzugeben**, die eine gegebene Ebene in einer bestimmten Geraden schneidet
oder gar nicht schneidet. Solche Aufgaben haben viele richtige Antworten. Man muss nur begründen, warum die eigene passt.

:::beispiel[Ebenen passend wählen]
Die Ebene $E: x + 2y + 3z = 6$ enthält die Spurpunkte $A(6 \mid 0 \mid 0)$ und $B(0 \mid 3 \mid 0)$.

**Eine Ebene, die $E$ genau in der Geraden $AB$ schneidet:** Sie muss $A$ und $B$ enthalten und darf nicht $E$ selbst sein.
Am einfachsten ist der Boden $z = 0$. Er enthält $A$ und $B$, weil beide die Höhe $0$ haben. Ebenso funktioniert jede
Gleichung $x + 2y + cz = 6$ mit $c \neq 3$, zum Beispiel $x + 2y + 7z = 6$: $A$ ergibt $6$, $B$ ergibt $6$.

**Eine Ebene, die $E$ gar nicht schneidet:** Gleicher Normalvektor, andere rechte Seite, zum Beispiel $x + 2y + 3z = 10$.
Kein Punkt kann zugleich $x + 2y + 3z = 6$ und $= 10$ erfüllen.
:::

:::merke[Rezept: zwei Ebenen]
1. **Normalvektoren vergleichen.** Vielfache: Sind auch die ganzen Gleichungen Vielfache, dann identisch, sonst echt
   parallel.
2. **Schnittgerade:** Richtung $\vec r = \vec n_1\times\vec n_2$. Punkt: eine Koordinate null setzen und das
   $2\times 2$-System lösen. Klappt das nicht, eine andere Koordinate null setzen.
3. **Winkel:** $\cos\varphi = \frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1|\,|\vec n_2|}$. Neigung gegen den Boden mit $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.
4. **Gleichungssystem in drei Variablen:** jede Gleichung eine Ebene, Lösungsmenge gleich Durchschnitt.
:::

```reflexion
frage: Warum können sich zwei verschiedene Ebenen nie in genau einem Punkt schneiden?
antwort: |
  Angenommen, zwei verschiedene Ebenen haben den Punkt $P$ gemeinsam. Sind ihre Normalvektoren Vielfache, dann sind
  sie parallel, und mit einem gemeinsamen Punkt wären sie identisch. Das haben wir ausgeschlossen. Also sind die
  Normalvektoren keine Vielfachen, und $\vec r = \vec n_1\times\vec n_2$ ist nicht der Nullvektor. Dieser Vektor liegt in
  beiden Ebenen. Von $P$ aus kann man also in Richtung $\vec r$ gehen und bleibt in beiden Ebenen. Damit ist die ganze
  Gerade durch $P$ mit Richtung $\vec r$ gemeinsam. Algebraisch: Zwei Gleichungen mit drei Unbekannten lassen immer eine
  Variable frei.
```

```aufgabe
id: ag-ebenen-lage
titel: Die Lage zweier Ebenen bestimmen
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Bestimme jeweils die Lage von $E: 2x - y + 3z = 4$ zur angegebenen Ebene.

  $E_1: -4x + 2y - 6z = -8$ $\quad$ $E_2: 4x - 2y + 6z = 5$ $\quad$ $E_3: x + 2y = 7$
teile:
  - typ: auswahl
    label: '$E_1$'
    optionen: ["identisch", "echt parallel", "schneidend, nicht normal", "schneidend und normal"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Vergleiche auch die rechten Seiten: $E$ mal $-2$ ergibt genau $E_1$.'
  - typ: auswahl
    label: '$E_2$'
    optionen: ["identisch", "echt parallel", "schneidend, nicht normal", "schneidend und normal"]
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Die linke Seite ist das Doppelte von $E$, die rechte Seite aber nicht: $2\cdot 4 = 8 \neq 5$.'
  - typ: auswahl
    label: '$E_3$'
    optionen: ["identisch", "echt parallel", "schneidend, nicht normal", "schneidend und normal"]
    richtig: [3]
    fehler:
      - wert: 2
        meldung: 'Berechne das Skalarprodukt der Normalvektoren: $2\cdot 1 + (-1)\cdot 2 + 3\cdot 0$.'
hinweise:
  - Vergleiche zuerst die Normalvektoren. Bei Vielfachen vergleiche auch die rechten Seiten.
loesung: |
  **Ansatz:** Normalvektor von $E$ ist $\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix}$. Wir vergleichen ihn mit den anderen Normalvektoren.
  ---
  $E_1$: Die ganze Gleichung ist das $(-2)$-Fache von $E$. Identisch. $E_2$: Linke Seite das Doppelte, rechte Seite $5 \neq 8$. Echt parallel.
  ---
  $E_3$: $\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$ ist kein Vielfaches, also schneiden sich die Ebenen. Das Skalarprodukt ist $2 - 2 + 0 = 0$. Die Ebenen stehen normal aufeinander.
```

```aufgabe
id: ag-dachneigung
titel: Neigung einer Dachfläche
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Eine Dachfläche liegt in der Ebene $E: 2x - y + 2z = 6$ (Einheiten in Metern, $z$ zeigt nach oben). Wie stark ist das Dach
  gegen den waagrechten Boden geneigt? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'Neigungswinkel'
    einheit: "°"
    loesung: "inGrad(acos(2/3))"
    fehler:
      - wert: "inGrad(asin(2/3))"
        meldung: Bei zwei Ebenen vergleicht man zwei Normalvektoren. Dafür steht der Kosinus, nicht der Sinus.
      - wert: "acos(2/3)"
        meldung: Das ist der Winkel im Bogenmaß. Gefragt ist er in Grad.
hinweise:
  - 'Der Boden $z = 0$ hat den Normalvektor $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.'
loesung: |
  **Ansatz:** Der Winkel zwischen zwei Ebenen ist der Winkel zwischen ihren Normalvektoren, mit Betrag im Zähler.
  ---
  $\vec n_1 = \begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$ mit $|\vec n_1| = 3$, $\vec n_2 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ mit $|\vec n_2| = 1$. $\cos\varphi = \frac{|2|}{3\cdot 1} = \frac23$, also $\varphi \approx 48{,}19°$.
```

```aufgabe
id: ag-schnittgerade
titel: Schnittgerade zweier Ebenen
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Bestimme die Schnittgerade von $E_1: 2x + y - z = 3$ und $E_2: x - y + z = 0$. Gib einen Richtungsvektor (jedes
  Vielfache ist richtig) und den Punkt der Geraden mit $z = 0$ an.
teile:
  - typ: vektor
    label: 'Richtungsvektor'
    vielfaches: true
    loesung: ["0", "-3", "-3"]
    fehler:
      - wert: ["2", "1", "-1"]
        meldung: Das ist der Normalvektor von $E_1$. Er steht senkrecht auf $E_1$ und kann nicht in ihr liegen. Die Richtung der Schnittgeraden ist $\vec n_1\times\vec n_2$.
      - wert: ["0", "3", "-3"]
        meldung: 'Prüfe die mittlere Komponente des Kreuzprodukts: $(-1)\cdot 1 - 2\cdot 1 = -3$.'
  - typ: vektor
    label: 'Punkt mit $z = 0$'
    namen: ["x", "y", "z"]
    loesung: ["1", "1", "0"]
    fehler:
      - wert: ["1", "-1", "0"]
        meldung: 'Aus $x - y = 0$ folgt $y = x$. Setze das in $2x + y = 3$ ein.'
hinweise:
  - '$\vec r = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}\times\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.'
  - 'Mit $z = 0$ bleiben $2x + y = 3$ und $x - y = 0$.'
loesung: |
  **Ansatz:** Die Richtung steht normal auf beiden Normalvektoren, also ist sie ihr Kreuzprodukt. Einen Punkt liefert $z = 0$.
  ---
  $\vec r = \begin{pmatrix} 1\cdot 1 - (-1)(-1) \\ (-1)\cdot 1 - 2\cdot 1 \\ 2\cdot(-1) - 1\cdot 1 \end{pmatrix} = \begin{pmatrix} 0 \\ -3 \\ -3 \end{pmatrix}$, gekürzt $\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.
  ---
  $z = 0$: $2x + y = 3$ und $x = y$, also $3x = 3$ und $x = y = 1$. Punkt $P(1 \mid 1 \mid 0)$.
  ---
  $g: X = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + t\cdot\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$. Probe mit $t = 1$, also $(1 \mid 2 \mid 1)$: $2 + 2 - 1 = 3$ und $1 - 2 + 1 = 0$.
gefuehrt:
  - text: 'Berechne die Richtung der Schnittgeraden als $\vec n_1\times\vec n_2$.'
    teil: { typ: vektor, vielfaches: true, loesung: ["0", "-3", "-3"], fehler: [ { wert: ["0", "3", "-3"], meldung: 'Prüfe die mittlere Komponente: $a_3 b_1 - a_1 b_3 = (-1)\cdot 1 - 2\cdot 1 = -3$.' } ] }
    erklaerung: 'Das Kreuzprodukt ist $\begin{pmatrix} 0 \\ -3 \\ -3 \end{pmatrix}$, gekürzt $\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.'
  - text: 'Setze $z = 0$. Welche zwei Gleichungen bleiben übrig? Löse sie. Welchen Wert hat $x$?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '$2x + y = 3$ und $x - y = 0$. Addieren ergibt $3x = 3$, also $x = 1$ und $y = 1$.'
  - text: 'Prüfe den Punkt $(1 \mid 2 \mid 1)$, der zu $t = 1$ gehört, in beiden Ebenen.'
    teil: { typ: auswahl, optionen: ['liegt in beiden Ebenen', 'liegt nur in $E_1$', 'liegt in keiner Ebene'], richtig: [0] }
    erklaerung: '$2 + 2 - 1 = 3$ und $1 - 2 + 1 = 0$. Beide Gleichungen stimmen.'
```

```aufgabe
id: ag-drei-ebenen-deuten
titel: Drei Ebenen ohne gemeinsamen Punkt
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Gegeben ist das Gleichungssystem
  $$x + y + z = 2, \qquad x - y + z = 4, \qquad 2x + 2z = 0.$$
  a) Wie viele Lösungen hat es?

  b) Wie liegen die drei zugehörigen Ebenen?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['genau eine', 'unendlich viele', 'keine']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Addiere die ersten beiden Gleichungen: $2x + 2z = 6$. Die dritte verlangt aber $2x + 2z = 0$.'
  - typ: auswahl
    label: 'b)'
    optionen:
      - 'Zwei der Ebenen sind echt parallel.'
      - 'Je zwei schneiden sich, die drei Schnittgeraden sind parallel (Prisma).'
      - 'Alle drei gehen durch eine gemeinsame Gerade.'
    richtig: [1]
    fehler:
      - wert: 0
        meldung: 'Vergleiche die Normalvektoren $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$, $\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$ und $\begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}$. Keine zwei davon sind Vielfache.'
      - wert: 2
        meldung: Dann hätte das System unendlich viele Lösungen. Es hat aber keine.
hinweise:
  - Addiere die ersten beiden Gleichungen und vergleiche mit der dritten.
  - Prüfe, ob zwei der drei Normalvektoren Vielfache voneinander sind.
loesung: |
  **Ansatz:** Jede Gleichung ist eine Ebene. Leere Lösungsmenge hat zwei mögliche Bilder. Wir unterscheiden sie an den Normalvektoren.
  ---
  **a)** Erste plus zweite Gleichung: $2x + 2z = 6$. Die dritte Gleichung verlangt $2x + 2z = 0$. Widerspruch, also keine Lösung.
  ---
  **b)** Die Normalvektoren $\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}$, $\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$ und $\begin{pmatrix} 2 \\ 0 \\ 2 \end{pmatrix}$ sind paarweise keine Vielfachen. Also schneiden sich je zwei Ebenen in einer Geraden.
  ---
  Diese drei Schnittgeraden haben alle die Richtung $\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$, denn dieser Vektor steht auf allen drei Normalvektoren normal. Sie sind parallel, und es gibt keinen gemeinsamen Punkt: Prisma.
```

```aufgabe
id: ag-ebene-angeben
titel: Ebenen mit vorgegebener Schnittgerade
niveau: 2
lernziel: 5
kompetenz: begruenden
quelle: nach Musterprüfung Winkler, Aufgabe 4 (abgewandelt)
angabe: |
  Die Ebene $E: 3x + y + 2z = 6$ enthält die Punkte $A(2 \mid 0 \mid 0)$ und $B(0 \mid 6 \mid 0)$.

  a) Welche Ebenen schneiden $E$ **genau** in der Geraden durch $A$ und $B$? Wähle alle richtigen aus.

  b) Welche Ebenen haben mit $E$ **keinen** Punkt gemeinsam? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    label: 'a)'
    mehrfach: true
    optionen:
      - '$z = 0$'
      - '$3x + y = 6$'
      - '$3x + y + 5z = 6$'
      - '$3x + y + 2z = 8$'
      - '$x - y = 0$'
      - '$6x + 2y + 4z = 12$'
    richtig: [0, 1, 2]
    fehler:
      - wert: [0, 1, 2, 5]
        meldung: '$6x + 2y + 4z = 12$ ist das Doppelte von $E$, also $E$ selbst. Eine Ebene schneidet sich nicht „in einer Geraden“ mit sich selbst.'
      - wert: [0, 1, 2, 3]
        meldung: '$3x + y + 2z = 8$ hat denselben Normalvektor wie $E$, aber eine andere rechte Seite. Die Ebenen sind parallel und haben keinen gemeinsamen Punkt.'
  - typ: auswahl
    label: 'b)'
    mehrfach: true
    optionen:
      - '$3x + y + 2z = 0$'
      - '$6x + 2y + 4z = 7$'
      - '$6x + 2y + 4z = 12$'
      - '$x + y + z = 6$'
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: 'Auch $6x + 2y + 4z = 7$ ist parallel zu $E$. Geteilt durch $2$: $3x + y + 2z = 3{,}5 \neq 6$.'
      - wert: [0, 1, 2]
        meldung: '$6x + 2y + 4z = 12$ ist $E$ selbst, denn geteilt durch $2$ ergibt sich genau $3x + y + 2z = 6$.'
hinweise:
  - 'a) Die Ebene muss $A$ und $B$ enthalten und darf nicht $E$ selbst sein.'
  - 'b) Keinen gemeinsamen Punkt haben nur echt parallele Ebenen: Normalvektor ein Vielfaches von $\begin{pmatrix} 3 \\ 1 \\ 2 \end{pmatrix}$, Gleichung aber kein Vielfaches.'
loesung: |
  **Ansatz:** Zwei verschiedene Ebenen, die beide $A$ und $B$ enthalten, schneiden sich genau in der Geraden $AB$. Keinen gemeinsamen Punkt haben nur echt parallele Ebenen.
  ---
  **a)** $z = 0$: $A$ und $B$ haben $z = 0$. $3x + y = 6$: $6 = 6$ für beide. $3x + y + 5z = 6$: $6 = 6$ für beide, und es ist nicht $E$. Diese drei passen.
  ---
  $3x + y + 2z = 8$ ist echt parallel zu $E$. $x - y = 0$ enthält $A$ nicht, denn $2 \neq 0$. $6x + 2y + 4z = 12$ ist $E$ selbst.
  ---
  **b)** $3x + y + 2z = 0$ und $6x + 2y + 4z = 7$ (also $3x + y + 2z = 3{,}5$) sind echt parallel zu $E$. $6x + 2y + 4z = 12$ ist $E$, und $x + y + z = 6$ schneidet $E$, weil die Normalvektoren keine Vielfachen sind.
```

```aufgabe
id: ag-ebenen-winkel-schnitt
titel: Zwei Wände
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Zwei Ebenen sind gegeben durch $E_1: x + y = 2$ und $E_2: y + z = 3$.

  a) Unter welchem Winkel schneiden sie sich?

  b) Gib einen Richtungsvektor der Schnittgeraden an (jedes Vielfache ist richtig).

  c) Gib den Punkt der Schnittgeraden mit $y = 0$ an.
teile:
  - typ: zahl
    label: 'a) Winkel'
    einheit: "°"
    loesung: "60"
    fehler:
      - wert: "30"
        meldung: Das wäre der Winkel mit dem Sinus. Bei zwei Ebenen vergleicht man Normalvektor mit Normalvektor, also steht der Kosinus.
  - typ: vektor
    label: 'b) Richtungsvektor'
    vielfaches: true
    loesung: ["1", "-1", "1"]
    fehler:
      - wert: ["1", "1", "1"]
        meldung: 'Prüfe die mittlere Komponente: $0\cdot 0 - 1\cdot 1 = -1$. Kontrolle: Der Vektor muss mit $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ das Skalarprodukt $0$ haben.'
  - typ: vektor
    label: 'c) Punkt mit $y = 0$'
    namen: ["x", "y", "z"]
    loesung: ["2", "0", "3"]
hinweise:
  - 'Normalvektoren: $\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ und $\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.'
  - 'Winkel mit dem Kosinus und Betrag. Richtung mit dem Kreuzprodukt. Für c) $y = 0$ in beide Gleichungen einsetzen.'
loesung: |
  **Ansatz:** Winkel und Richtung kommen beide aus den Normalvektoren $\vec n_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$ und $\vec n_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.
  ---
  **a)** $\vec n_1\cdot\vec n_2 = 1$, beide Längen $\sqrt 2$. $\cos\varphi = \frac{1}{2}$, also $\varphi = 60°$.
  ---
  **b)** $\vec n_1\times\vec n_2 = \begin{pmatrix} 1\cdot 1 - 0\cdot 1 \\ 0\cdot 0 - 1\cdot 1 \\ 1\cdot 1 - 1\cdot 0 \end{pmatrix} = \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.
  ---
  **c)** $y = 0$: aus $E_1$ folgt $x = 2$, aus $E_2$ folgt $z = 3$. Punkt $(2 \mid 0 \mid 3)$. Probe mit $t = 1$: $(3 \mid -1 \mid 4)$ ergibt $3 - 1 = 2$ und $-1 + 4 = 3$.
```

```aufgabe
id: ag-ebenen-parameter
titel: Ebenen mit Parametern
niveau: 3
lernziel: 5
kompetenz: anwenden
angabe: |
  Gegeben sind $E_1: 2x - y + az = 3$ und $E_2: 4x - 2y + 6z = b$ mit Zahlen $a$ und $b$.

  a) Für welches $a$ sind die Ebenen parallel (oder identisch)?

  b) Für welches $b$ sind sie dann identisch?

  c) Nun sei $a = 1$ und $b = 2$. Bestimme einen Richtungsvektor der Schnittgeraden (jedes Vielfache ist richtig) und ihren
  Punkt mit $x = 0$.
teile:
  - typ: zahl
    label: 'a) $a$'
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: '$\vec n_2 = \begin{pmatrix} 4 \\ -2 \\ 6 \end{pmatrix}$ ist das **Doppelte** von $\begin{pmatrix} 2 \\ -1 \\ a \end{pmatrix}$. Also muss $2a = 6$ sein.'
  - typ: zahl
    label: 'b) $b$'
    loesung: "6"
    fehler:
      - wert: "3"
        meldung: Die ganze Gleichung von $E_2$ muss das Doppelte von $E_1$ sein, auch die rechte Seite.
  - typ: vektor
    label: 'c) Richtungsvektor'
    vielfaches: true
    loesung: ["1", "2", "0"]
    fehler:
      - wert: ["1", "-2", "0"]
        meldung: 'Prüfe mit dem Skalarprodukt: Der Richtungsvektor muss auf $\begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$ normal stehen.'
  - typ: vektor
    label: 'c) Punkt mit $x = 0$'
    namen: ["x", "y", "z"]
    loesung: ["0", "-4", "-1"]
hinweise:
  - 'Parallel heißt: $\vec n_2$ ist ein Vielfaches von $\vec n_1$. Vergleiche $\begin{pmatrix} 4 \\ -2 \\ 6 \end{pmatrix}$ mit $\begin{pmatrix} 2 \\ -1 \\ a \end{pmatrix}$.'
  - 'c) Kreuzprodukt der Normalvektoren. Für den Punkt: $x = 0$ setzen und $-y + z = 3$, $-2y + 6z = 2$ lösen.'
loesung: |
  **Ansatz:** Parallel oder nicht entscheiden die Normalvektoren $\vec n_1 = \begin{pmatrix} 2 \\ -1 \\ a \end{pmatrix}$ und $\vec n_2 = \begin{pmatrix} 4 \\ -2 \\ 6 \end{pmatrix}$.
  ---
  **a)** In den ersten beiden Komponenten ist $\vec n_2 = 2\,\vec n_1$. Das muss auch für die dritte gelten: $6 = 2a$, also $a = 3$.
  ---
  **b)** Mit $a = 3$ ist $E_1$ mal $2$ gleich $4x - 2y + 6z = 6$. Identisch genau für $b = 6$. Für $b \neq 6$ sind die Ebenen echt parallel.
  ---
  **c)** $\vec n_1\times\vec n_2 = \begin{pmatrix} (-1)\cdot 6 - 1\cdot(-2) \\ 1\cdot 4 - 2\cdot 6 \\ 2\cdot(-2) - (-1)\cdot 4 \end{pmatrix} = \begin{pmatrix} -4 \\ -8 \\ 0 \end{pmatrix}$, gekürzt $\begin{pmatrix} 1 \\ 2 \\ 0 \end{pmatrix}$.
  ---
  Punkt mit $x = 0$: $-y + z = 3$ und $-2y + 6z = 2$. Aus der ersten $y = z - 3$, eingesetzt: $-2z + 6 + 6z = 2$, also $z = -1$ und $y = -4$. Punkt $(0 \mid -4 \mid -1)$. Probe: $4 - 1 = 3$ und $8 - 6 = 2$.
```

## Abstände im Raum

```aufgabe
id: ag-abst-vorwissen
titel: Die HNF in der Ebene
art: check
niveau: 1
angabe: |
  Wie weit ist der Punkt $Q(1 \mid 1)$ von der Geraden $g: 3x + 4y = 2$ entfernt? Zum Nachlesen:
  [7.4 Abstand Punkt–Gerade](/lernen/mathe3/analytische-geometrie/abstand-punkt-gerade-die-hessesche-normalform).
teile:
  - typ: zahl
    loesung: "abs(3 + 4 - 2)/5"
    fehler:
      - wert: "5"
        meldung: Der Betrag im Zähler ist $5$. Teile noch durch die Länge des Normalvektors, $\sqrt{9 + 16} = 5$.
      - wert: "9/5"
        meldung: 'Die rechte Seite $2$ wird abgezogen, nicht addiert: $3 + 4 - 2$.'
loesung: |
  Hessesche Normalform: $d = \frac{|3\cdot 1 + 4\cdot 1 - 2|}{\sqrt{3^2 + 4^2}}$.
  ---
  $d = \frac{5}{5} = 1$.
```

Im Raum stellen sich dieselben Abstandsfragen wie in der Ebene: Wie weit ist ein Punkt von einer Ebene entfernt? Von
einer Geraden? Wie weit liegen zwei parallele Ebenen auseinander? Gemeint ist immer der **kürzeste** Abstand, gemessen
entlang eines Lotes. Für Ebenen funktioniert alles genau wie für Geraden in der Ebene. Für Geraden im Raum braucht man
einen neuen Weg, und genau dort passieren die meisten Fehler.

### Abstand Punkt–Ebene: die Hessesche Normalform im Raum

Eine Ebene im Raum hat, genau wie eine Gerade in der Ebene, nur **eine** Normalrichtung. Das Lot von einem Punkt $Q$
auf die Ebene zeigt in diese Richtung. Darum lässt sich die Herleitung aus
[7.4 Abstand Punkt–Gerade](/lernen/mathe3/analytische-geometrie/abstand-punkt-gerade-die-hessesche-normalform) wörtlich
übertragen. Es kommt nur eine Koordinate dazu.

:::satz[Abstand Punkt–Ebene, Hessesche Normalform]
Der Abstand des Punktes $Q(x_0 \mid y_0 \mid z_0)$ von der Ebene $E: ax + by + cz = d$ ist
$$d(Q, E) = \frac{|a x_0 + b y_0 + c z_0 - d|}{\sqrt{a^2 + b^2 + c^2}}.$$
Vorsicht mit den Buchstaben: $d$ allein ist die rechte Seite der Ebenengleichung, $d(Q, E)$ mit Klammern ist der Abstand.
:::

**Lotfußpunkt und Spiegelpunkt** bestimmt man wie in der Ebene. Man schneidet die Lotgerade $X = Q + t\cdot\vec n$ mit
$E$. Mit dem gefundenen $t$ ist $F = Q + t\cdot\vec n$ der Lotfußpunkt, $d(Q, E) = |t|\cdot|\vec n|$ der Abstand und
$Q' = Q + 2t\cdot\vec n$ der Spiegelpunkt. Der Lotfußpunkt ist zugleich der Punkt der Ebene, der $Q$ am nächsten liegt.

:::beispiel[Wie hoch fliegt die Drohne über dem Hang?]
Ein Hang liegt in der Ebene $E: 2x + y + 2z = 6$. Eine Drohne schwebt im Punkt $Q(6 \mid 2 \mid 5)$. Die Einheiten sind
Meter. Wie weit ist sie vom Hang entfernt, und welchen Punkt des Hangs erreicht sie auf dem kürzesten Weg?

1. **Abstand mit der HNF:** $|\vec n| = \sqrt{4 + 1 + 4} = 3$. $d(Q, E) = \frac{|12 + 2 + 10 - 6|}{3} = \frac{18}{3} = 6$ m.
2. **Lotgerade:** $X = (6 + 2t \mid 2 + t \mid 5 + 2t)$.
3. **In $E$ einsetzen:** $2(6 + 2t) + (2 + t) + 2(5 + 2t) = 6$, also $24 + 9t = 6$ und $t = -2$.
4. **Lotfußpunkt:** $F = (6 - 4 \mid 2 - 2 \mid 5 - 4) = (2 \mid 0 \mid 1)$. Probe in $E$: $4 + 0 + 2 = 6$.
5. **Kontrolle:** $|t|\cdot|\vec n| = 2\cdot 3 = 6$. Stimmt mit der HNF überein.

**Antwort:** Die Drohne ist $6$ m vom Hang entfernt. Auf dem kürzesten Weg landet sie im Punkt $(2 \mid 0 \mid 1)$.
:::

```plot
x: [-1, 9]
y: [-3, 7]
gleich: true
strecken:
  - { von: [-1, 1], nach: [9, 1], farbe: 0 }
  - { von: [4, 7], nach: [4, -5], gestrichelt: true, farbe: 1 }
punkte:
  - { x: 4, y: 7, label: "Q (Drohne)" }
  - { x: 4, y: 1, label: "F (Lotfußpunkt)", farbe: 2 }
  - { x: -0.5, y: 1, label: "E (von der Seite)" }
vektoren:
  - { von: [6, 1], nach: [6, 4], label: "n", farbe: 3 }
beschriftung: Seitenansicht, so gedreht, dass die Ebene E waagrecht erscheint. Der kürzeste Weg von Q zu E verläuft entlang des Normalvektors n und endet im Lotfußpunkt F. Die gestrichelte Linie setzt sich jenseits von F bis zum Spiegelpunkt fort.
```

:::achtung[Den Parameter t mit dem Abstand verwechselt]
Bei der Drohne erhält jemand $t = -2$ und schreibt: „Der Abstand ist $2$ m.“ Das ist falsch. Der Parameter $t$ zählt, wie
oft man den Normalvektor geht. Der Normalvektor $\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$ ist aber $3$ m lang. Der Abstand ist darum
$|t|\cdot|\vec n| = 2\cdot 3 = 6$ m. Nur bei einem normierten Normalvektor (Länge $1$) wäre $|t|$ selbst der Abstand.
:::

**Parallele Ebenen** haben überall denselben Abstand. Bei gleichem Normalvektor, also $ax + by + cz = d_1$ und
$ax + by + cz = d_2$, gilt
$$d(E_1, E_2) = \frac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}.$$
Wie in der Ebene muss man vorher den **gleichen** Normalvektor herstellen, nicht nur einen parallelen.

```aufgabe
id: ag-abst-check-ebenen
titel: Abstand zweier paralleler Ebenen
art: check
niveau: 1
angabe: |
  Wie weit liegen $E_1: x + 2y + 2z = 1$ und $E_2: x + 2y + 2z = 13$ auseinander?
teile:
  - typ: zahl
    loesung: "abs(13 - 1)/3"
    fehler:
      - wert: "12"
        meldung: Teile noch durch die Länge des gemeinsamen Normalvektors, $\sqrt{1 + 4 + 4} = 3$.
loesung: |
  Beide Ebenen haben denselben Normalvektor $\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$ mit Länge $3$.
  ---
  $d = \frac{|13 - 1|}{3} = 4$.
```

### Abstand Punkt–Gerade im Raum

Jetzt kommt die Stelle, an der man nicht einfach übertragen darf. Eine Gerade im Raum hat **keine** Normalform, denn
eine einzelne Gleichung beschreibt im Raum eine Ebene (siehe
[7.5 Geraden im Raum](/lernen/mathe3/analytische-geometrie/geraden-im-raum-parallel-schneidend-oder-windschief)). Also
gibt es für Geraden im Raum auch keine Hessesche Normalform. Man sucht stattdessen direkt den Lotfußpunkt.

**Worum geht es?** Gesucht ist der Punkt $F$ auf $g: X = P + t\cdot\vec r$, der $Q$ am nächsten liegt.

**Die Idee:** Der kürzeste Weg $\overrightarrow{FQ}$ steht normal auf der Geraden, also normal auf $\vec r$. Diese Bedingung
legt $t$ fest:
$$\big(Q - (P + t\cdot\vec r)\big)\cdot\vec r = 0 \qquad\text{ergibt}\qquad t = \frac{(Q - P)\cdot\vec r}{|\vec r|^2}.$$
Die zweite Gleichung entsteht, indem man das Skalarprodukt ausmultipliziert, $(Q - P)\cdot\vec r - t\cdot|\vec r|^2 = 0$, und
nach $t$ auflöst. Mit diesem $t$ ist $F = P + t\cdot\vec r$ und $d(Q, g) = |\overrightarrow{FQ}|$.

:::beispiel[Abstand eines Punktes von einer Geraden im Raum]
Gegeben sind $Q(4 \mid 7 \mid 1)$ und $g: X = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 2 \\ -1 \end{pmatrix}$.

1. **Hilfsvektor:** $Q - P = \begin{pmatrix} 3 \\ 5 \\ -2 \end{pmatrix}$.
2. **Parameter des Lotfußpunkts:** $(Q - P)\cdot\vec r = 6 + 10 + 2 = 18$ und $|\vec r|^2 = 4 + 4 + 1 = 9$. Also $t = \frac{18}{9} = 2$.
3. **Lotfußpunkt:** $F = (1 + 4 \mid 2 + 4 \mid 3 - 2) = (5 \mid 6 \mid 1)$.
4. **Probe des rechten Winkels:** $\overrightarrow{FQ} = \begin{pmatrix} -1 \\ 1 \\ 0 \end{pmatrix}$ und $\overrightarrow{FQ}\cdot\vec r = -2 + 2 + 0 = 0$.
5. **Abstand:** $d(Q, g) = \sqrt{1 + 1 + 0} = \sqrt 2 \approx 1{,}41$.
:::

Es gibt einen zweiten Weg mit dem Kreuzprodukt. Die Vektoren $\overrightarrow{PQ}$ und $\vec r$ spannen ein Parallelogramm auf.
Seine Fläche ist $|\overrightarrow{PQ}\times\vec r|$. Andererseits ist die Fläche „Grundlinie mal Höhe“, also $|\vec r|$ mal
den gesuchten Abstand. Daraus folgt
$$d(Q, g) = \frac{|\overrightarrow{PQ}\times\vec r|}{|\vec r|}.$$
Im Beispiel: $\begin{pmatrix} 3 \\ 5 \\ -2 \end{pmatrix}\times\begin{pmatrix} 2 \\ 2 \\ -1 \end{pmatrix} = \begin{pmatrix} -1 \\ -1 \\ -4 \end{pmatrix}$ mit Länge
$\sqrt{18} = 3\sqrt 2$. Geteilt durch $|\vec r| = 3$ ergibt das wieder $\sqrt 2$.

:::achtung[Eine HNF für eine Gerade im Raum erfunden]
Im Beispiel rechnet jemand nach dem Muster der HNF: „$d = \frac{|(Q - P)\cdot\vec r|}{|\vec r|} = \frac{18}{3} = 6$.“ Das ist
falsch. Diese Zahl ist die Länge des **Schattens** von $\overrightarrow{PQ}$ entlang der Geraden, also wie weit $F$ von $P$ entfernt
ist. Der Abstand steht aber quer dazu. Die Kontrolle mit Pythagoras zeigt es: $|\overrightarrow{PQ}|^2 = 9 + 25 + 4 = 38$. Ist der
Schatten $6$ lang, bleibt für den Abstand $\sqrt{38 - 36} = \sqrt 2$. Für Geraden im Raum gibt es keine HNF. Man braucht
den Lotfußpunkt oder das Kreuzprodukt.
:::

:::tipp[Vertiefung: Abstand windschiefer Geraden]
Auch zwei windschiefe Geraden $g: X = P + t\cdot\vec r$ und $h: X = Q + s\cdot\vec u$ haben einen kürzesten Abstand. Er wird
entlang der gemeinsamen Normalen $\vec n = \vec r\times\vec u$ gemessen: $d = \frac{|(Q - P)\cdot\vec n|}{|\vec n|}$. Das ist die HNF
der Ebene durch $g$, die parallel zu $h$ liegt. In den Musterprüfungen kam das bisher nicht vor.
:::

:::merke[Rezept: Abstände im Raum]
| Abstand | Methode |
|---|---|
| Punkt–Ebene | HNF: $\frac{\lvert ax_0 + by_0 + cz_0 - d\rvert}{\sqrt{a^2 + b^2 + c^2}}$. Lotfußpunkt mit $X = Q + t\cdot\vec n$. |
| Punkt–Gerade im Raum | Lotfußpunkt mit $t = \frac{(Q - P)\cdot\vec r}{\lvert\vec r\rvert^2}$, oder $\frac{\lvert\overrightarrow{PQ}\times\vec r\rvert}{\lvert\vec r\rvert}$. Keine HNF. |
| parallele Ebenen | Gleichen Normalvektor herstellen, dann $\frac{\lvert d_1 - d_2\rvert}{\lvert\vec n\rvert}$. |
| Spiegelpunkt | $Q' = Q + 2t\cdot\vec n$ mit dem $t$ aus der Lotgeraden. |
:::

```reflexion
frage: Warum gibt es für eine Ebene im Raum eine Hessesche Normalform, für eine Gerade im Raum aber nicht?
antwort: |
  Die HNF misst, wie weit ein Punkt in **Normalrichtung** von der Figur entfernt ist. Das funktioniert nur, wenn es genau
  eine Normalrichtung gibt. Eine Ebene im Raum hat genau eine (wie eine Gerade in der Ebene). Auf einer Geraden im
  Raum stehen dagegen unendlich viele Richtungen normal, wie die Speichen eines Rades auf der Achse. Welche davon
  zum Punkt $Q$ zeigt, hängt von $Q$ ab. Man muss sie also erst suchen, und genau das macht die Bedingung
  $\overrightarrow{FQ}\cdot\vec r = 0$.
```

```aufgabe
id: ag-abstand-punkt-ebene
titel: Abstand Punkt–Ebene
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Berechne den Abstand von $Q(3 \mid -1 \mid 4)$ zur Ebene $E: 2x - 2y + z = 1$. Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$d(Q, E)$'
    loesung: "abs(2*3 - 2*(-1) + 4 - 1)/3"
    anzeige: '\tfrac{11}{3} \approx 3{,}67'
    fehler:
      - wert: "11"
        meldung: Teile noch durch die Länge des Normalvektors, $\sqrt{4 + 4 + 1} = 3$.
      - wert: "13/3"
        meldung: 'Die rechte Seite $1$ wird abgezogen: $6 + 2 + 4 - 1$.'
      - wert: "11/5"
        meldung: Die Länge des Normalvektors ist nicht die Summe $2 + 2 + 1$, sondern $\sqrt{2^2 + 2^2 + 1^2}$.
hinweise:
  - 'HNF: $d = \frac{|a x_0 + b y_0 + c z_0 - d|}{\sqrt{a^2 + b^2 + c^2}}$.'
loesung: |
  **Ansatz:** Hessesche Normalform im Raum. Länge des Normalvektors: $|\vec n| = \sqrt{4 + 4 + 1} = 3$.
  ---
  $d(Q, E) = \frac{|6 + 2 + 4 - 1|}{3} = \frac{11}{3} \approx 3{,}67$.
```

```aufgabe
id: ag-abstand-ebenen
titel: Abstand paralleler Ebenen
niveau: 1
lernziel: 6
kompetenz: rechnen
angabe: |
  Zeige, dass $E_1: 2x + y - 2z = 4$ und $E_2: -4x - 2y + 4z = 10$ parallel sind, und berechne ihren Abstand.
teile:
  - typ: zahl
    label: '$d(E_1, E_2)$'
    loesung: "abs(4 - (-5))/3"
    fehler:
      - wert: "2"
        meldung: 'Du hast $|4 - 10|$ gerechnet, ohne die Normalvektoren gleich zu machen. Teile $E_2$ zuerst durch $-2$.'
      - wert: "9"
        meldung: Teile noch durch die Länge des Normalvektors $\sqrt{4 + 1 + 4} = 3$.
hinweise:
  - 'Teile die Gleichung von $E_2$ durch $-2$. Dann haben beide Ebenen denselben Normalvektor.'
loesung: |
  **Ansatz:** Bei gleichem Normalvektor ist der Abstand $\frac{|d_1 - d_2|}{|\vec n|}$.
  ---
  $\vec n_2 = \begin{pmatrix} -4 \\ -2 \\ 4 \end{pmatrix} = -2\cdot\begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}$, also parallel. $E_2$ durch $-2$: $2x + y - 2z = -5$.
  ---
  $d = \frac{|4 - (-5)|}{\sqrt{4 + 1 + 4}} = \frac{9}{3} = 3$.
```

```aufgabe
id: ag-lotfuss-ebene
titel: Lotfußpunkt und Spiegelpunkt an einer Ebene
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme den Lotfußpunkt $F$ von $Q(5 \mid 3 \mid 1)$ auf $E: x + 2y + 2z = 4$, den Abstand und den Spiegelpunkt $Q'$.
teile:
  - typ: vektor
    label: '$F$'
    namen: ["x", "y", "z"]
    loesung: ["4", "1", "-1"]
    fehler:
      - wert: ["6", "5", "3"]
        meldung: Du bist in die falsche Richtung gegangen. Aus $13 + 9t = 4$ folgt $t = -1$, nicht $t = +1$.
  - typ: zahl
    label: '$d(Q, E)$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: '$|t| = 1$ ist nicht der Abstand. Multipliziere mit $|\vec n| = 3$.'
  - typ: vektor
    label: '$Q^\prime$'
    namen: ["x", "y", "z"]
    loesung: ["3", "-1", "-3"]
    fehler:
      - wert: ["4", "1", "-1"]
        meldung: Das ist der Lotfußpunkt. Der Spiegelpunkt liegt noch einmal gleich weit hinter der Ebene.
hinweise:
  - 'Lot: $X = (5 + t \mid 3 + 2t \mid 1 + 2t)$ in $E$ einsetzen.'
  - 'Dann $F = Q + t\cdot\vec n$, $d = |t|\cdot|\vec n|$ und $Q'' = Q + 2t\cdot\vec n$.'
loesung: |
  **Ansatz:** Das Lot von $Q$ auf $E$ zeigt in Richtung des Normalvektors $\vec n = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$.
  ---
  Einsetzen: $(5 + t) + 2(3 + 2t) + 2(1 + 2t) = 4$, also $13 + 9t = 4$ und $t = -1$.
  ---
  $F = (5 - 1 \mid 3 - 2 \mid 1 - 2) = (4 \mid 1 \mid -1)$. Probe: $4 + 2 - 2 = 4$. Abstand $d = |t|\cdot|\vec n| = 1\cdot 3 = 3$. Kontrolle mit der HNF: $\frac{|5 + 6 + 2 - 4|}{3} = 3$.
  ---
  $Q' = Q + 2t\cdot\vec n = (5 - 2 \mid 3 - 4 \mid 1 - 4) = (3 \mid -1 \mid -3)$. Probe: Der Mittelpunkt von $Q$ und $Q'$ ist $F$.
```

```aufgabe
id: ag-abstand-punkt-gerade-raum
titel: Abstand Punkt–Gerade im Raum
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Bestimme den Lotfußpunkt $F$ von $Q(5 \mid 5 \mid -1)$ auf $g: X = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$ und den
  Abstand $d(Q, g)$.
teile:
  - typ: vektor
    label: '$F$'
    namen: ["x", "y", "z"]
    loesung: ["3", "1", "3"]
  - typ: zahl
    label: '$d(Q, g)$'
    loesung: "6"
    fehler:
      - wert: "3"
        meldung: 'Das ist $\frac{(Q - P)\cdot\vec r}{|\vec r|}$, die Länge des Schattens entlang der Geraden. Der Abstand ist $|\overrightarrow{FQ}|$.'
hinweise:
  - 'Gesucht ist $t$ mit $(Q - P - t\cdot\vec r)\cdot\vec r = 0$.'
  - 'Also $t = \frac{(Q - P)\cdot\vec r}{|\vec r|^2}$. Dann $F = P + t\cdot\vec r$ und $d = |\overrightarrow{FQ}|$.'
loesung: |
  **Ansatz:** Eine Gerade im Raum hat keine HNF. Wir bestimmen den Lotfußpunkt über die Bedingung, dass $\overrightarrow{FQ}$ normal auf $\vec r$ steht.
  ---
  $Q - P = \begin{pmatrix} 4 \\ 5 \\ -2 \end{pmatrix}$, $(Q - P)\cdot\vec r = 8 + 5 - 4 = 9$, $|\vec r|^2 = 9$. Also $t = 1$.
  ---
  $F = (3 \mid 1 \mid 3)$, $\overrightarrow{FQ} = \begin{pmatrix} 2 \\ 4 \\ -4 \end{pmatrix}$. Probe: $\overrightarrow{FQ}\cdot\vec r = 4 + 4 - 8 = 0$.
  ---
  $d = \sqrt{4 + 16 + 16} = 6$. Kontrolle mit dem Kreuzprodukt: $\begin{pmatrix} 4 \\ 5 \\ -2 \end{pmatrix}\times\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix} = \begin{pmatrix} 12 \\ -12 \\ -6 \end{pmatrix}$ hat die Länge $18$, und $\frac{18}{3} = 6$.
gefuehrt:
  - text: 'Berechne den Hilfsvektor $Q - P$.'
    teil: { typ: vektor, loesung: ["4", "5", "-2"] }
    erklaerung: '$Q - P = (5 - 1, 5 - 0, -1 - 1) = (4, 5, -2)$.'
  - text: 'Berechne $t = \frac{(Q - P)\cdot\vec r}{|\vec r|^2}$.'
    teil: { typ: zahl, loesung: "1", fehler: [ { wert: "3", meldung: 'Im Nenner steht $|\vec r|^2 = 9$, nicht $|\vec r| = 3$.' } ] }
    erklaerung: '$(Q - P)\cdot\vec r = 8 + 5 - 4 = 9$ und $|\vec r|^2 = 4 + 1 + 4 = 9$. Also $t = 1$.'
  - text: 'Bestimme den Lotfußpunkt $F = P + t\cdot\vec r$.'
    teil: { typ: vektor, namen: ["x", "y", "z"], loesung: ["3", "1", "3"] }
    erklaerung: '$F = (1 + 2 \mid 0 + 1 \mid 1 + 2) = (3 \mid 1 \mid 3)$.'
  - text: 'Berechne den Abstand $|\overrightarrow{FQ}|$.'
    teil: { typ: zahl, loesung: "6" }
    erklaerung: '$\overrightarrow{FQ} = (2, 4, -4)$ mit Länge $\sqrt{36} = 6$. Probe: $\overrightarrow{FQ}\cdot\vec r = 0$.'
```

```aufgabe
id: ag-naechster-punkt-ebene
titel: Der nächstgelegene Punkt einer Ebene
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Welcher Punkt $X$ der Ebene $E: x + 2y + 2z = 12$ liegt dem Punkt $P(1 \mid 1 \mid 0)$ am nächsten? Wie weit ist er von $P$
  entfernt?
teile:
  - typ: vektor
    label: '$X$'
    namen: ["x", "y", "z"]
    loesung: ["2", "3", "2"]
    fehler:
      - wert: ["1", "2", "2"]
        meldung: 'Das ist nur $t\cdot\vec n$ für $t = 1$. Der Punkt ist $P + t\cdot\vec n$.'
  - typ: zahl
    label: 'Abstand $|PX|$'
    loesung: "3"
    fehler:
      - wert: "1"
        meldung: '$t = 1$ ist der Parameterwert. Der Abstand ist $|t|\cdot|\vec n| = 1\cdot 3$.'
      - wert: "9"
        meldung: 'Das ist der Betrag im Zähler der HNF: $|1 + 2 + 0 - 12| = 9$. Teile noch durch $|\vec n| = 3$.'
hinweise:
  - Der nächstgelegene Punkt ist der Lotfußpunkt. Das Lot zeigt in Richtung $\vec n = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$.
  - 'Setze $X = (1 + t \mid 1 + 2t \mid 2t)$ in $E$ ein.'
loesung: |
  **Ansatz:** Unter allen Punkten der Ebene liegt der Lotfußpunkt dem Punkt $P$ am nächsten, weil der Weg dorthin normal auf der Ebene steht.
  ---
  Lotgerade $X = (1 + t \mid 1 + 2t \mid 2t)$. In $E$: $(1 + t) + 2(1 + 2t) + 2\cdot 2t = 12$, also $3 + 9t = 12$ und $t = 1$.
  ---
  $X = (2 \mid 3 \mid 2)$. Probe: $2 + 6 + 4 = 12$. Abstand $|t|\cdot|\vec n| = 1\cdot 3 = 3$. Kontrolle mit der HNF: $\frac{|1 + 2 + 0 - 12|}{3} = 3$.
```

```aufgabe
id: ag-abstand-fehler-gerade
titel: Eine falsche Abstandsformel
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Jonas soll den Abstand von $Q(2 \mid 5 \mid 3)$ zur Geraden $g: X = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} + t\cdot\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$
  berechnen. Er rechnet nach dem Muster der HNF:
  $$d = \frac{|(Q - P)\cdot\vec r|}{|\vec r|} = \frac{|2 + 8 + 4|}{3} = \frac{14}{3}.$$
teile:
  - typ: auswahl
    label: 'Was hat Jonas berechnet?'
    optionen:
      - 'Die Länge des Schattens von $\overrightarrow{PQ}$ entlang der Geraden, nicht den Abstand.'
      - 'Den richtigen Abstand.'
      - 'Den doppelten Abstand.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das Skalarprodukt mit dem Richtungsvektor misst, wie weit $\overrightarrow{PQ}$ **entlang** der Geraden reicht. Der Abstand steht aber quer zur Geraden.
      - wert: 2
        meldung: Ein fester Faktor ist es nicht. Jonas hat eine Strecke **entlang** der Geraden berechnet, der Abstand steht aber quer dazu.
  - typ: zahl
    label: 'Richtiger Abstand'
    loesung: "2*sqrt(5)/3"
    fehler:
      - wert: "14/3"
        meldung: Das ist Jonas' Ergebnis. Bestimme den Lotfußpunkt oder verwende das Kreuzprodukt.
      - wert: "sqrt(20)"
        meldung: Das ist die Länge des Kreuzprodukts. Teile noch durch $|\vec r| = 3$.
hinweise:
  - 'Für Geraden im Raum gibt es keine HNF. Verwende $d = \frac{|\overrightarrow{PQ}\times\vec r|}{|\vec r|}$.'
  - '$\overrightarrow{PQ} = \begin{pmatrix} 2 \\ 4 \\ 2 \end{pmatrix}$. Berechne $\overrightarrow{PQ}\times\vec r$.'
loesung: |
  **Ansatz:** Der Bruch $\frac{|(Q - P)\cdot\vec r|}{|\vec r|}$ misst, wie weit man von $P$ **entlang** der Geraden gehen muss, bis man auf Höhe von $Q$ ist. Der Abstand steht aber normal auf der Geraden.
  ---
  Kreuzprodukt: $\begin{pmatrix} 2 \\ 4 \\ 2 \end{pmatrix}\times\begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix} = \begin{pmatrix} 4\cdot 2 - 2\cdot 2 \\ 2\cdot 1 - 2\cdot 2 \\ 2\cdot 2 - 4\cdot 1 \end{pmatrix} = \begin{pmatrix} 4 \\ -2 \\ 0 \end{pmatrix}$ mit Länge $\sqrt{20}$.
  ---
  $d = \frac{\sqrt{20}}{3} = \frac{2\sqrt 5}{3} \approx 1{,}49$.
  ---
  **Probe mit Pythagoras:** $|\overrightarrow{PQ}|^2 = 24$, Jonas' Schatten zum Quadrat $\frac{196}{9}$, Rest $24 - \frac{196}{9} = \frac{20}{9}$. Die Wurzel daraus ist $\frac{\sqrt{20}}{3}$. Stimmt.
```

```aufgabe
id: ag-pyramide-hoehe
titel: Höhe und Volumen einer Pyramide
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  Eine dreiseitige Pyramide hat die Grundfläche $ABC$ mit $A(2 \mid 0 \mid 0)$, $B(0 \mid 4 \mid 0)$, $C(0 \mid 0 \mid 4)$ und die Spitze
  $D(3 \mid 3 \mid 3)$.

  a) Bestimme die Ebene $E$ durch $A$, $B$ und $C$ in Koordinatenform (als $(a, b, c, d)$; jedes Vielfache ist richtig).

  b) Wie hoch ist die Pyramide, also wie weit ist $D$ von $E$ entfernt? Runde auf zwei Dezimalstellen.

  c) Berechne den Flächeninhalt der Grundfläche und das Volumen der Pyramide.
teile:
  - typ: vektor
    label: 'a) $(a, b, c, d)$'
    namen: ["a", "b", "c", "d"]
    vielfaches: true
    loesung: ["2", "1", "1", "4"]
  - typ: zahl
    label: 'b) Höhe'
    loesung: "abs(6 + 3 + 3 - 4)/sqrt(6)"
    fehler:
      - wert: "8"
        meldung: Teile noch durch die Länge des Normalvektors, $\sqrt{4 + 1 + 1} = \sqrt 6$.
  - typ: zahl
    label: 'c) Grundfläche'
    loesung: "4*sqrt(6)"
    fehler:
      - wert: "8*sqrt(6)"
        meldung: Die Länge des Kreuzprodukts ist die Fläche des **Parallelogramms**. Das Dreieck ist halb so groß.
  - typ: zahl
    label: 'c) Volumen'
    loesung: "32/3"
    fehler:
      - wert: "32"
        meldung: Das Volumen einer Pyramide ist $\frac13$ Grundfläche mal Höhe.
hinweise:
  - 'a) Normalvektor $\overrightarrow{AB}\times\overrightarrow{AC}$. b) HNF.'
  - 'c) Dreiecksfläche $\frac12|\overrightarrow{AB}\times\overrightarrow{AC}|$, Volumen $\frac13\cdot\text{Grundfläche}\cdot\text{Höhe}$.'
loesung: |
  **Ansatz:** Die Höhe einer Pyramide ist der Abstand der Spitze von der Ebene der Grundfläche. Das Kreuzprodukt liefert zugleich den Normalvektor und die Grundfläche.
  ---
  **a)** $\overrightarrow{AB} = \begin{pmatrix} -2 \\ 4 \\ 0 \end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix} -2 \\ 0 \\ 4 \end{pmatrix}$. Kreuzprodukt $\begin{pmatrix} 16 \\ 8 \\ 8 \end{pmatrix}$, gekürzt $\begin{pmatrix} 2 \\ 1 \\ 1 \end{pmatrix}$. Mit $A$: $d = 4$. $E: 2x + y + z = 4$. Probe: $B$ ergibt $4$, $C$ ergibt $4$.
  ---
  **b)** $h = \frac{|6 + 3 + 3 - 4|}{\sqrt 6} = \frac{8}{\sqrt 6} \approx 3{,}27$.
  ---
  **c)** $|\overrightarrow{AB}\times\overrightarrow{AC}| = \sqrt{256 + 64 + 64} = \sqrt{384} = 8\sqrt 6$. Grundfläche $\frac12\cdot 8\sqrt 6 = 4\sqrt 6 \approx 9{,}80$. Volumen $V = \frac13\cdot 4\sqrt 6\cdot\frac{8}{\sqrt 6} = \frac{32}{3} \approx 10{,}67$.
  ---
  **Kontrolle mit dem Spatprodukt** aus [Kapitel 6, Das Kreuzprodukt](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen): $V = \frac16\left|\begin{pmatrix} 16 \\ 8 \\ 8 \end{pmatrix}\cdot\overrightarrow{AD}\right| = \frac16\left|\begin{pmatrix} 16 \\ 8 \\ 8 \end{pmatrix}\cdot\begin{pmatrix} 1 \\ 3 \\ 3 \end{pmatrix}\right| = \frac{64}{6} = \frac{32}{3}$.
```

## Der Kreis

```aufgabe
id: ag-kreis-vorwissen
titel: Der Abstand zweier Punkte
art: check
niveau: 1
angabe: |
  Wie weit sind $A(1 \mid 2)$ und $B(4 \mid 6)$ voneinander entfernt? Zum Nachlesen:
  [Kapitel 6](/lernen/mathe3/vektoren/betrag-abstand-und-einheitsvektor) (Betrag und Abstand).
teile:
  - typ: zahl
    loesung: "5"
    fehler:
      - wert: "7"
        meldung: Du hast die Koordinatenunterschiede $3$ und $4$ addiert. Sie stehen aber im rechten Winkel zueinander. Der Abstand ist die Hypotenuse, $\sqrt{3^2 + 4^2}$.
      - wert: "25"
        meldung: Das ist das Quadrat des Abstands. Ziehe noch die Wurzel.
loesung: |
  Der Abstand ist die Länge von $\overrightarrow{AB} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
  ---
  $|AB| = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$. Das ist der Satz des Pythagoras.
```

Ein **Kreis** ist die Menge aller Punkte, die von einem festen Punkt $M$ denselben Abstand $r$ haben. $M$ heißt
**Mittelpunkt**, $r > 0$ heißt **Radius**. Genau das zeichnet ein Zirkel: Die Spitze steckt in $M$, und der Stift bleibt immer
gleich weit entfernt. Im Alltag begegnet dir der Kreis zum Beispiel als Reichweite eines Funkmasts oder als Rand der
Fläche, die ein Rasensprinkler bewässert.

### Von der Definition zur Gleichung

**Worum geht es?** Wir übersetzen „$X$ hat von $M$ den Abstand $r$“ in eine Gleichung für die Koordinaten $x$ und $y$.

Der Abstand von $X(x \mid y)$ zu $M(m_1 \mid m_2)$ ist die Länge des Vektors $X - M$. Nach Pythagoras ist sie
$\sqrt{(x - m_1)^2 + (y - m_2)^2}$. Die Bedingung „Abstand gleich $r$“ lautet also
$\sqrt{(x - m_1)^2 + (y - m_2)^2} = r$. Beide Seiten sind nicht negativ. Darum darf man quadrieren, ohne Lösungen
dazuzugewinnen.

:::definition[Kreisgleichung]
Der Kreis $k$ mit Mittelpunkt $M(m_1 \mid m_2)$ und Radius $r > 0$ hat die Gleichung
$$k: (x - m_1)^2 + (y - m_2)^2 = r^2.$$
Liegt der Mittelpunkt im Ursprung, vereinfacht sie sich zu $x^2 + y^2 = r^2$.
:::

```plot
x: [-5, 7]
y: [-5, 7]
gleich: true
kurven:
  - { x: "1 + 5*cos(t)", y: "1 + 5*sin(t)", t: [0, "2*pi"], label: "k", farbe: 0 }
strecken:
  - { von: [1, 1], nach: [4, 1], gestrichelt: true, farbe: 1 }
  - { von: [4, 1], nach: [4, 5], gestrichelt: true, farbe: 2 }
vektoren:
  - { von: [1, 1], nach: [4, 5], label: "r = 5", farbe: 3 }
punkte:
  - { x: 1, y: 1, label: "M(1 | 1)" }
  - { x: 4, y: 5, label: "X(4 | 5)", farbe: 3 }
  - { x: 2.5, y: 0.4, label: "x − 1 = 3", farbe: 1, offen: true }
  - { x: 4.3, y: 3, label: "y − 1 = 4", farbe: 2, offen: true }
beschriftung: Der Kreis um M(1 | 1) mit Radius 5. Für den Kreispunkt X(4 | 5) bilden die Unterschiede x − 1 = 3 und y − 1 = 4 die Katheten eines rechtwinkligen Dreiecks mit der Hypotenuse r = 5. Genau das sagt die Kreisgleichung (x − 1)² + (y − 1)² = 25.
```

:::beispiel[Kreisgleichung aufstellen und Punkte prüfen]
Der Kreis um $M(2 \mid -1)$ mit Radius $3$ hat die Gleichung $(x - 2)^2 + (y - (-1))^2 = 9$, also
$$(x - 2)^2 + (y + 1)^2 = 9.$$
Wir prüfen drei Punkte, indem wir die linke Seite ausrechnen und mit $r^2 = 9$ vergleichen:

- $(5 \mid -1)$: $3^2 + 0^2 = 9$. Der Punkt liegt **auf** dem Kreis.
- $(2 \mid 2)$: $0^2 + 3^2 = 9$. Auch dieser Punkt liegt auf dem Kreis.
- $(4 \mid 1)$: $2^2 + 2^2 = 8 < 9$. Der Punkt liegt **innerhalb** des Kreises.
:::

Das ist zugleich die **Lage eines Punktes** zum Kreis: Ist $(x_0 - m_1)^2 + (y_0 - m_2)^2$ kleiner als $r^2$, liegt der Punkt
innen. Ist es gleich, liegt er auf dem Kreis. Ist es größer, liegt er außen.

:::achtung[Vorzeichen des Mittelpunkts falsch abgelesen]
Bei $(x + 2)^2 + (y - 5)^2 = 9$ liest jemand „$M(2 \mid -5)$“ ab. Das ist falsch. In der Gleichung steht $x - m_1$. Aus
$x + 2 = x - (-2)$ folgt $m_1 = -2$, aus $y - 5$ folgt $m_2 = 5$. Richtig ist $M(-2 \mid 5)$. **Probe:** Setzt man den Mittelpunkt
ein, muss links $0$ herauskommen. Für $(-2 \mid 5)$ ist $0^2 + 0^2 = 0$. Für $(2 \mid -5)$ wäre es $16 + 100 = 116$.
:::

:::achtung[Radius und Radiusquadrat verwechselt]
Bei $(x - 3)^2 + y^2 = 16$ sagt jemand: „Der Radius ist $16$.“ Rechts steht aber $r^2$. Der Radius ist $r = \sqrt{16} = 4$.
Eine Probe deckt den Fehler auf: Der Punkt $(3 + 16 \mid 0) = (19 \mid 0)$ müsste auf dem Kreis liegen, ergibt aber
$16^2 = 256 \neq 16$. Dagegen liegt $(7 \mid 0)$ mit $4^2 = 16$ tatsächlich auf dem Kreis.
:::

### Mittelpunkt und Radius mit der quadratischen Ergänzung

Multipliziert man die Kreisgleichung aus, entsteht die **allgemeine Form**
$$x^2 + y^2 + ax + by + c = 0.$$
Typisch für einen Kreis sind zwei Merkmale: $x^2$ und $y^2$ haben **denselben** Faktor, und es gibt **kein** gemischtes
Glied mit $xy$. **Nichtbeispiele:** $x^2 + 4y^2 = 4$ ist kein Kreis, weil $y^2$ einen anderen Faktor hat (das ist eine
Ellipse). $x^2 + y^2 + 2xy = 1$ ist kein Kreis, weil ein gemischtes Glied vorkommt.

Ist die Gleichung in dieser Form gegeben, findet man Mittelpunkt und Radius mit der **quadratischen Ergänzung** aus
[Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen). Man ergänzt getrennt für
$x$ und für $y$ zu einem vollständigen Quadrat:
$$x^2 + px = \left(x + \tfrac p2\right)^2 - \left(\tfrac p2\right)^2.$$
Dabei ist $p$ die Zahl vor $x$. Die Formel stimmt, weil $\left(x + \frac p2\right)^2 = x^2 + px + \left(\frac p2\right)^2$ ist.
Das überzählige Quadrat $\left(\frac p2\right)^2$ wird wieder abgezogen.

:::beispiel[Quadratische Ergänzung in zwei Variablen]
Gegeben ist $x^2 + y^2 + 4x - 10y + 20 = 0$.

1. **Ordnen:** $(x^2 + 4x) + (y^2 - 10y) + 20 = 0$.
2. **$x$ ergänzen:** Die Hälfte von $4$ ist $2$. Also $x^2 + 4x = (x + 2)^2 - 4$.
3. **$y$ ergänzen:** Die Hälfte von $-10$ ist $-5$. Also $y^2 - 10y = (y - 5)^2 - 25$.
4. **Einsetzen:** $(x + 2)^2 - 4 + (y - 5)^2 - 25 + 20 = 0$.
5. **Zahlen nach rechts:** $(x + 2)^2 + (y - 5)^2 = 4 + 25 - 20 = 9$.

**Ergebnis:** $M(-2 \mid 5)$ und $r = \sqrt 9 = 3$. **Probe:** Der Kreispunkt $(1 \mid 5)$ erfüllt die ursprüngliche
Gleichung: $1 + 25 + 4 - 50 + 20 = 0$.
:::

:::beispiel[Sonderfälle: ein Punkt oder gar nichts]
Nicht jede Gleichung der Form $x^2 + y^2 + ax + by + c = 0$ ist ein Kreis. Entscheidend ist die rechte Seite nach der
Ergänzung.

- $x^2 + y^2 - 2x + 6y + 10 = 0$ wird zu $(x - 1)^2 + (y + 3)^2 = 1 + 9 - 10 = 0$. Eine Summe zweier Quadrate ist nur dann
  $0$, wenn beide Quadrate $0$ sind. Die Lösungsmenge ist der **einzelne Punkt** $(1 \mid -3)$.
- $x^2 + y^2 - 2x + 6y + 14 = 0$ wird zu $(x - 1)^2 + (y + 3)^2 = -4$. Quadrate sind nie negativ. Die Lösungsmenge ist **leer**.
- Steht vor $x^2$ und $y^2$ ein gemeinsamer Faktor, teilt man zuerst durch ihn. Aus $2x^2 + 2y^2 + 12x - 4y - 12 = 0$ wird
  $x^2 + y^2 + 6x - 2y - 6 = 0$, also $(x + 3)^2 + (y - 1)^2 = 16$. Das ist ein Kreis um $(-3 \mid 1)$ mit Radius $4$.
:::

:::achtung[Die ergänzten Quadrate nicht ausgeglichen]
Bei $x^2 + y^2 - 6x + 2y - 6 = 0$ schreibt jemand: „$(x - 3)^2 + (y + 1)^2 = 6$, also $r = \sqrt 6$.“ Er hat die Klammern
gebildet, aber vergessen, dass sie $+9$ und $+1$ zusätzlich enthalten. Richtig: $(x - 3)^2 - 9 + (y + 1)^2 - 1 - 6 = 0$, also
$(x - 3)^2 + (y + 1)^2 = 16$ und $r = 4$. **Probe:** Der Punkt $(7 \mid -1)$ liegt auf dem richtigen Kreis und erfüllt die
ursprüngliche Gleichung: $49 + 1 - 42 - 2 - 6 = 0$.
:::

```aufgabe
id: ag-kreis-check-erkennen
titel: Ist das ein Kreis?
art: check
niveau: 1
angabe: |
  Welche Gleichung beschreibt einen Kreis?
teile:
  - typ: auswahl
    optionen:
      - '$x^2 + y^2 - 8y = 0$'
      - '$x^2 + 3y^2 = 9$'
      - '$x^2 - y^2 = 4$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Bei einem Kreis haben $x^2$ und $y^2$ denselben Faktor. Hier steht vor $y^2$ eine $3$.
      - wert: 2
        meldung: Das Minus vor $y^2$ passt nicht zu einem Kreis. Bei einem Kreis werden beide Quadrate addiert.
loesung: |
  Kriterium: gleicher Faktor vor $x^2$ und $y^2$, kein $xy$, und nach der Ergänzung eine positive rechte Seite.
  ---
  $x^2 + y^2 - 8y = 0$ ergibt $x^2 + (y - 4)^2 = 16$. Das ist ein Kreis um $(0 \mid 4)$ mit Radius $4$.
```

### Kreis durch drei Punkte

Durch drei Punkte, die nicht auf einer Geraden liegen, geht genau ein Kreis. Er heißt **Umkreis** des Dreiecks. Sein
Mittelpunkt hat von allen drei Punkten denselben Abstand. Er liegt deshalb auf jeder **Streckensymmetrale**: Das ist die
Gerade, die eine Seite in ihrem Mittelpunkt normal schneidet. Ihre Gleichung bekommt man mit dem Schlüsselprinzip: Der
Vektor der Seite ist ihr Normalvektor, und der Seitenmittelpunkt ist ein Punkt.

:::beispiel[Der Umkreis eines Dreiecks]
Gesucht ist der Kreis durch $A(-1 \mid 2)$, $B(5 \mid 2)$ und $C(3 \mid 6)$.

1. **Streckensymmetrale von $AB$:** Die Seite ist waagrecht, ihr Mittelpunkt ist $(2 \mid 2)$. Die Symmetrale ist die
   senkrechte Gerade $x = 2$.
2. **Streckensymmetrale von $AC$:** Mittelpunkt $(1 \mid 4)$, Normalvektor $\overrightarrow{AC} = \begin{pmatrix} 4 \\ 4 \end{pmatrix}$, gekürzt
   $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$. Gleichung $x + y = 1 + 4 = 5$.
3. **Schnitt:** $x = 2$ in $x + y = 5$ ergibt $y = 3$. Mittelpunkt $M(2 \mid 3)$.
4. **Radius:** $r^2 = |MA|^2 = 3^2 + 1^2 = 10$. Kreis: $(x - 2)^2 + (y - 3)^2 = 10$.
5. **Probe:** $B$: $9 + 1 = 10$. $C$: $1 + 9 = 10$.
:::

:::merke[Rezept: Kreis]
1. **Gleichung aufstellen:** $(x - m_1)^2 + (y - m_2)^2 = r^2$. Vorzeichen in der Klammer umgekehrt zur Koordinate.
2. **Mittelpunkt und Radius aus der allgemeinen Form:** zuerst durch den Faktor vor $x^2$ teilen, dann für $x$ und $y$
   quadratisch ergänzen, die Zusatzquadrate ausgleichen. Rechts positiv: Kreis. Null: ein Punkt. Negativ: leer.
3. **Lage eines Punktes:** einsetzen und mit $r^2$ vergleichen.
4. **Umkreis:** zwei Streckensymmetralen schneiden.
:::

```reflexion
frage: Warum haben $x^2$ und $y^2$ in einer Kreisgleichung immer denselben Faktor, und warum gibt es kein Glied $xy$?
antwort: |
  Die Kreisgleichung kommt aus dem Abstand, und der Abstand kommt aus dem Satz des Pythagoras:
  $(x - m_1)^2 + (y - m_2)^2$. Beim Ausmultiplizieren entsteht aus jeder Klammer genau ein Quadrat mit Faktor $1$. Beide
  Richtungen werden also gleich behandelt, und das passt zu einem Kreis, der in jede Richtung gleich weit reicht. Ein
  Glied $xy$ kann nur entstehen, wenn $x$ und $y$ in derselben Klammer stehen. Das passiert beim Kreis nie. Ein anderer
  Faktor vor $y^2$ würde den Kreis in einer Richtung stauchen oder strecken, und dann entsteht eine Ellipse.
```

```aufgabe
id: ag-kreis-punkte
titel: Punkte und Kreis
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Gegeben ist $k: (x - 2)^2 + (y + 3)^2 = 25$. Wo liegen $P(5 \mid 1)$, $Q(-2 \mid 0)$, $R(6 \mid -1)$ und $S(7 \mid 1)$?
teile:
  - typ: auswahl
    label: 'auf dem Kreis'
    mehrfach: true
    optionen: ['$P$', '$Q$', '$R$', '$S$']
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: 'Prüfe auch $Q$: $(-2 - 2)^2 + (0 + 3)^2 = 16 + 9$.'
      - wert: [0, 1, 2]
        meldung: 'Bei $R$ ist $16 + 4 = 20$. Das ist kleiner als $25$, also liegt $R$ innen, nicht auf dem Kreis.'
  - typ: auswahl
    label: 'im Inneren'
    mehrfach: true
    optionen: ['$P$', '$Q$', '$R$', '$S$']
    richtig: [2]
    fehler:
      - wert: [3]
        meldung: 'Bei $S$ ist $25 + 16 = 41 > 25$. Das heißt außen, nicht innen.'
hinweise:
  - 'Setze jeden Punkt in $(x - 2)^2 + (y + 3)^2$ ein und vergleiche mit $r^2 = 25$.'
loesung: |
  **Ansatz:** Die linke Seite ist das Quadrat des Abstands zu $M(2 \mid -3)$. Wir vergleichen sie mit $r^2 = 25$.
  ---
  $P$: $9 + 16 = 25$, auf $k$. $Q$: $16 + 9 = 25$, auf $k$.
  ---
  $R$: $16 + 4 = 20 < 25$, innen. $S$: $25 + 16 = 41 > 25$, außen.
```

```aufgabe
id: ag-kreis-ergaenzung
titel: Mittelpunkt und Radius
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Bestimme Mittelpunkt und Radius des Kreises $x^2 + y^2 + 8x - 10y + 5 = 0$.
teile:
  - typ: vektor
    label: '$M$'
    namen: ["x", "y"]
    loesung: ["-4", "5"]
    fehler:
      - wert: ["4", "-5"]
        meldung: 'Aus $(x + 4)^2$ folgt $m_1 = -4$, aus $(y - 5)^2$ folgt $m_2 = 5$. Das Vorzeichen in der Klammer ist umgekehrt zur Koordinate.'
      - wert: ["8", "-10"]
        meldung: 'Die Zahl vor $x$ ist $2\cdot 4$. Für das Quadrat brauchst du die **Hälfte** davon.'
  - typ: zahl
    label: '$r$'
    loesung: "sqrt(16 + 25 - 5)"
    anzeige: '6'
    fehler:
      - wert: "36"
        meldung: Rechts steht $r^2 = 36$. Der Radius ist die Wurzel daraus.
      - wert: "sqrt(16 + 25 + 5)"
        meldung: 'Die $+5$ steht auf der linken Seite. Auf die rechte Seite gebracht wird sie zu $-5$.'
hinweise:
  - 'Ergänze $x^2 + 8x$ und $y^2 - 10y$ jeweils zu einem vollständigen Quadrat.'
loesung: |
  **Ansatz:** Quadratische Ergänzung getrennt für $x$ und $y$, dann alle Zahlen nach rechts.
  ---
  $(x^2 + 8x + 16) - 16 + (y^2 - 10y + 25) - 25 + 5 = 0$.
  ---
  $(x + 4)^2 + (y - 5)^2 = 16 + 25 - 5 = 36$. Also $M(-4 \mid 5)$ und $r = 6$. Probe: Der Punkt $(2 \mid 5)$ ergibt $4 + 25 + 16 - 50 + 5 = 0$.
gefuehrt:
  - text: 'Ergänze $x^2 + 8x$ zu einem Quadrat. Welche Zahl musst du dafür addieren und wieder abziehen?'
    teil: { typ: zahl, loesung: "16", fehler: [ { wert: "64", meldung: 'Du brauchst das Quadrat der **Hälfte** von $8$, also $4^2$.' } ] }
    erklaerung: 'Die Hälfte von $8$ ist $4$, und $4^2 = 16$. Also $x^2 + 8x = (x + 4)^2 - 16$.'
  - text: 'Ergänze $y^2 - 10y$ ebenso. Welche Zahl ist es jetzt?'
    teil: { typ: zahl, loesung: "25" }
    erklaerung: 'Die Hälfte von $-10$ ist $-5$, und $(-5)^2 = 25$. Also $y^2 - 10y = (y - 5)^2 - 25$.'
  - text: 'Bringe alle Zahlen auf die rechte Seite. Welche Zahl steht dort?'
    teil: { typ: zahl, loesung: "36", fehler: [ { wert: "46", meldung: 'Die $+5$ der linken Seite wird rechts zu $-5$.' } ] }
    erklaerung: '$(x + 4)^2 + (y - 5)^2 = 16 + 25 - 5 = 36$.'
  - text: 'Lies Mittelpunkt und Radius ab. Achte auf die Vorzeichen.'
    erklaerung: '$M(-4 \mid 5)$ und $r = \sqrt{36} = 6$.'
```

```aufgabe
id: ag-kreis-gleichung-aufstellen
titel: Kreis durch einen Punkt
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Ein Kreis hat den Mittelpunkt $M(-1 \mid 3)$ und geht durch $P(2 \mid 7)$. Bestimme den Radius und die allgemeine Form
  $x^2 + y^2 + ax + by + c = 0$. Gib $(a, b, c)$ an.
teile:
  - typ: zahl
    label: '$r$'
    loesung: "5"
    fehler:
      - wert: "25"
        meldung: Das ist $r^2$. Der Radius ist die Wurzel.
      - wert: "7"
        meldung: 'Der Abstand ist die Hypotenuse $\sqrt{3^2 + 4^2}$, nicht die Summe $3 + 4$.'
  - typ: vektor
    label: '$(a, b, c)$'
    namen: ["a", "b", "c"]
    loesung: ["2", "-6", "-15"]
    fehler:
      - wert: ["-2", "6", "-15"]
        meldung: '$(x + 1)^2 = x^2 + 2x + 1$. Das Vorzeichen vor $2x$ ist dasselbe wie in der Klammer.'
      - wert: ["2", "-6", "-25"]
        meldung: 'Beim Ausmultiplizieren entstehen auch die Zahlen $1$ und $9$. Es ist $c = 1 + 9 - 25$.'
hinweise:
  - 'Der Radius ist der Abstand $|MP|$. Dann $(x + 1)^2 + (y - 3)^2 = r^2$ ausmultiplizieren.'
loesung: |
  **Ansatz:** Der Radius ist der Abstand vom Mittelpunkt zu einem Kreispunkt.
  ---
  $\overrightarrow{MP} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$, also $r = \sqrt{9 + 16} = 5$. Kreis: $(x + 1)^2 + (y - 3)^2 = 25$.
  ---
  Ausmultiplizieren: $x^2 + 2x + 1 + y^2 - 6y + 9 = 25$, also $x^2 + y^2 + 2x - 6y - 15 = 0$. Probe mit $P$: $4 + 49 + 4 - 42 - 15 = 0$.
```

```aufgabe
id: ag-kreis-sonderfall
titel: Welche Gleichungen sind Kreise?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Welche der Gleichungen beschreiben einen Kreis (mit positivem Radius)? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - '$x^2 + y^2 - 4x + 2y + 1 = 0$'
      - '$x^2 + y^2 + 6x + 10 = 0$'
      - '$2x^2 + 2y^2 - 4y = 0$'
      - '$x^2 + 4y^2 = 4$'
      - '$x^2 + y^2 + 2xy = 1$'
      - '$x^2 + y^2 - 2x + 4y + 5 = 0$'
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Ergänze die zweite Gleichung: $(x + 3)^2 + y^2 = 9 - 10 = -1$. Eine Summe von Quadraten ist nie negativ.'
      - wert: [0, 2, 5]
        meldung: 'Ergänze die letzte Gleichung: $(x - 1)^2 + (y + 2)^2 = 1 + 4 - 5 = 0$. Das ist nur ein einzelner Punkt.'
      - wert: [0]
        meldung: 'Teile die dritte Gleichung durch $2$: $x^2 + y^2 - 2y = 0$, also $x^2 + (y - 1)^2 = 1$. Ein gemeinsamer Faktor stört nicht.'
hinweise:
  - Prüfe zuerst die Form. Gleicher Faktor vor $x^2$ und $y^2$? Kein $xy$?
  - Ergänze dann quadratisch und schau, ob rechts eine positive Zahl steht.
loesung: |
  **Ansatz:** Ein Kreis braucht gleiche Faktoren vor $x^2$ und $y^2$, kein $xy$, und nach der Ergänzung eine positive rechte Seite.
  ---
  (1) $(x - 2)^2 + (y + 1)^2 = 4$, Kreis. (2) $(x + 3)^2 + y^2 = -1$, leer. (3) Geteilt durch $2$: $x^2 + (y - 1)^2 = 1$, Kreis.
  ---
  (4) Verschiedene Faktoren vor $x^2$ und $y^2$, das ist eine Ellipse. (5) Gemischtes Glied: $(x + y)^2 = 1$ sind zwei parallele Geraden $x + y = \pm 1$. (6) $(x - 1)^2 + (y + 2)^2 = 0$, nur der Punkt $(1 \mid -2)$.
  ---
  Kreise sind also nur (1) und (3).
```

```aufgabe
id: ag-kreis-sprinkler
titel: Ein Rasensprinkler
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Rasensprinkler steht im Punkt $M(3 \mid 2)$ und bewässert alles im Umkreis von $4$ m. Die Koordinaten sind in Metern.

  a) Welche der Beete $B_1(5 \mid 5)$, $B_2(7 \mid 2)$, $B_3(6 \mid 5)$ und $B_4(0 \mid -1)$ werden bewässert? Ein Beet auf dem Rand
  zählt als bewässert.

  b) Welche Reichweite bräuchte der Sprinkler mindestens, damit auch $B_3$ Wasser bekommt? Runde auf zwei Dezimalstellen.

  c) Gib den Randkreis der bewässerten Fläche in der allgemeinen Form $x^2 + y^2 + ax + by + c = 0$ an, als $(a, b, c)$.
teile:
  - typ: auswahl
    label: 'a) bewässert'
    mehrfach: true
    optionen: ['$B_1$', '$B_2$', '$B_3$', '$B_4$']
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: '$B_2$ liegt genau auf dem Rand: $(7 - 3)^2 + 0^2 = 16 = 4^2$. Der Rand zählt mit.'
      - wert: [0, 1, 2, 3]
        meldung: '$B_3$ und $B_4$ ergeben je $9 + 9 = 18 > 16$. Sie liegen außerhalb.'
  - typ: zahl
    label: 'b) Mindestreichweite'
    einheit: m
    loesung: "sqrt(18)"
    fehler:
      - wert: "18"
        meldung: Das ist das Quadrat des Abstands. Ziehe noch die Wurzel.
  - typ: vektor
    label: 'c) $(a, b, c)$'
    namen: ["a", "b", "c"]
    loesung: ["-6", "-4", "-3"]
    fehler:
      - wert: ["-6", "-4", "-16"]
        meldung: 'Beim Ausmultiplizieren von $(x - 3)^2 + (y - 2)^2$ entstehen auch $9$ und $4$. Also $c = 9 + 4 - 16$.'
hinweise:
  - 'Vergleiche $(x - 3)^2 + (y - 2)^2$ für jedes Beet mit $r^2 = 16$.'
  - 'b) Die Mindestreichweite ist der Abstand von $M$ zu $B_3$. c) $(x - 3)^2 + (y - 2)^2 = 16$ ausmultiplizieren.'
loesung: |
  **Ansatz:** Bewässert ist alles, was höchstens $4$ m vom Sprinkler entfernt ist, also innerhalb oder auf dem Kreis $(x - 3)^2 + (y - 2)^2 = 16$.
  ---
  **a)** $B_1$: $4 + 9 = 13 < 16$, bewässert. $B_2$: $16 + 0 = 16$, genau auf dem Rand, bewässert. $B_3$: $9 + 9 = 18 > 16$, nicht bewässert. $B_4$: $9 + 9 = 18 > 16$, nicht bewässert.
  ---
  **b)** $|MB_3| = \sqrt{18} = 3\sqrt 2 \approx 4{,}24$ m.
  ---
  **c)** $x^2 - 6x + 9 + y^2 - 4y + 4 = 16$, also $x^2 + y^2 - 6x - 4y - 3 = 0$. Probe mit $B_2$: $49 + 4 - 42 - 8 - 3 = 0$.
```

```aufgabe
id: ag-umkreis
titel: Der Kreis durch drei Punkte
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Bestimme Mittelpunkt und Radius des Kreises durch $A(-1 \mid 3)$, $B(5 \mid 3)$ und $C(6 \mid -4)$.
teile:
  - typ: vektor
    label: '$M$'
    namen: ["x", "y"]
    loesung: ["2", "-1"]
    fehler:
      - wert: ["2", "3"]
        meldung: Das ist nur der Mittelpunkt der Strecke $AB$. Der Kreismittelpunkt liegt auf der Streckensymmetrale von $AB$, aber im Allgemeinen nicht auf $AB$ selbst.
  - typ: zahl
    label: '$r$'
    loesung: "5"
    fehler:
      - wert: "25"
        meldung: Das ist $r^2$. Ziehe noch die Wurzel.
hinweise:
  - 'Die Streckensymmetrale von $AB$ ist die senkrechte Gerade $x = 2$, weil $AB$ waagrecht ist.'
  - 'Für $BC$: Mittelpunkt $(5{,}5 \mid -0{,}5)$, Normalvektor $\overrightarrow{BC} = \begin{pmatrix} 1 \\ -7 \end{pmatrix}$. Schneide die beiden Symmetralen.'
loesung: |
  **Ansatz:** Der Mittelpunkt ist von allen drei Punkten gleich weit entfernt. Er liegt also auf jeder Streckensymmetrale.
  ---
  Symmetrale von $AB$: $x = 2$. Symmetrale von $BC$: $\overrightarrow{BC} = \begin{pmatrix} 1 \\ -7 \end{pmatrix}$ ist Normalvektor, $(5{,}5 \mid -0{,}5)$ ein Punkt. Gleichung $x - 7y = 5{,}5 + 3{,}5 = 9$.
  ---
  Schnitt: $2 - 7y = 9$, also $y = -1$. $M(2 \mid -1)$. Radius $r = |MA| = \sqrt{9 + 16} = 5$.
  ---
  Probe: $B$: $9 + 16 = 25$, $C$: $16 + 9 = 25$. Alle drei Punkte liegen auf $(x - 2)^2 + (y + 1)^2 = 25$.
```

```aufgabe
id: ag-kreis-parameter-c
titel: Ein Kreis mit Parameter
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Gegeben ist für eine Zahl $c$ die Gleichung $x^2 + y^2 - 6x + 4y + c = 0$.

  a) Für welche Werte von $c$ beschreibt sie einen Kreis? Gib die Grenze $c_0$ an, sodass genau für $c < c_0$ ein Kreis entsteht.

  b) Für welches $c$ hat der Kreis den Radius $5$?

  c) Für welches $c$ geht der Kreis durch den Ursprung?

  d) Für welches $c$ berührt der Kreis die $x$-Achse?
teile:
  - typ: zahl
    label: 'a) $c_0$'
    loesung: "13"
    fehler:
      - wert: "-13"
        meldung: 'Nach der Ergänzung steht rechts $9 + 4 - c$. Positiv ist das für $c < 13$.'
  - typ: zahl
    label: 'b) $c$'
    loesung: "13 - 25"
    fehler:
      - wert: "13 - 5"
        meldung: 'Rechts steht $r^2$, nicht $r$. Also $13 - c = 25$.'
  - typ: zahl
    label: 'c) $c$'
    loesung: "0"
  - typ: zahl
    label: 'd) $c$'
    loesung: "13 - 4"
    fehler:
      - wert: "13 - 9"
        meldung: 'Den Abstand des Mittelpunkts zur $x$-Achse misst die $y$-Koordinate, hier $|-2| = 2$. Also $r = 2$ und $r^2 = 4$.'
hinweise:
  - 'Ergänze quadratisch: $(x - 3)^2 + (y + 2)^2 = 13 - c$.'
  - 'd) Der Kreis berührt die $x$-Achse, wenn sein Radius gleich dem Abstand des Mittelpunkts von der $x$-Achse ist.'
loesung: |
  **Ansatz:** Quadratische Ergänzung liefert $(x - 3)^2 + (y + 2)^2 = 9 + 4 - c = 13 - c$. Mittelpunkt $M(3 \mid -2)$, und rechts steht $r^2$.
  ---
  **a)** Ein Kreis entsteht genau für $13 - c > 0$, also $c < 13$. Für $c = 13$ ist es nur der Punkt $M$, für $c > 13$ die leere Menge.
  ---
  **b)** $r^2 = 25$: $13 - c = 25$, also $c = -12$. **c)** Ursprung einsetzen: $0 + 0 - 0 + 0 + c = 0$, also $c = 0$. Dann ist $r = \sqrt{13}$.
  ---
  **d)** Der Mittelpunkt liegt $2$ unter der $x$-Achse. Berühren heißt $r = 2$, also $13 - c = 4$ und $c = 9$. **Probe:** $(x - 3)^2 + (y + 2)^2 = 4$ mit $y = 0$ ergibt $(x - 3)^2 = 0$, also genau einen Punkt $(3 \mid 0)$.
```

## Kreis und Gerade: Sekante, Tangente, Passante

```aufgabe
id: ag-kg-vorwissen
titel: Wie viele Lösungen hat die quadratische Gleichung?
art: check
niveau: 1
angabe: |
  Wie viele reelle Lösungen hat $x^2 - 4x + 5 = 0$? Zum Nachlesen:
  [Kapitel 2, Quadratische Gleichungen](/lernen/mathe3/gleichungen/quadratische-gleichungen) (Diskriminante).
teile:
  - typ: auswahl
    optionen: ['keine', 'genau eine', 'zwei']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Berechne die Diskriminante $D = b^2 - 4ac = 16 - 20$. Ist sie negativ, gibt es keine reelle Lösung.'
      - wert: 1
        meldung: Genau eine Lösung gibt es nur, wenn die Diskriminante genau $0$ ist. Hier ist sie $-4$.
loesung: |
  Die Diskriminante entscheidet über die Anzahl der Lösungen: $D = (-4)^2 - 4\cdot 1\cdot 5 = -4$.
  ---
  $D < 0$, also gibt es keine reelle Lösung. Anschaulich: Die Parabel $y = x^2 - 4x + 5 = (x - 2)^2 + 1$ liegt ganz über der $x$-Achse.
```

Eine Gerade und ein Kreis können auf drei Arten zueinander liegen. Die Fachwörter dafür kommen aus dem Lateinischen:

- Eine **Passante** („die Vorbeigehende“) verfehlt den Kreis, es gibt keinen gemeinsamen Punkt.
- Eine **Tangente** („die Berührende“) berührt den Kreis in genau einem Punkt, dem **Berührpunkt**.
- Eine **Sekante** („die Schneidende“) schneidet den Kreis in zwei Punkten. Die Strecke zwischen ihnen heißt **Sehne**.

### Die Lage mit dem Abstand entscheiden

Am schnellsten entscheidet man die Lage mit dem Abstand $d = d(M, g)$ des Mittelpunkts von der Geraden. Man berechnet
ihn mit der Hesseschen Normalform aus
[7.4 Abstand Punkt–Gerade](/lernen/mathe3/analytische-geometrie/abstand-punkt-gerade-die-hessesche-normalform) und
vergleicht ihn mit dem Radius:

| Abstand | Lage | gemeinsame Punkte |
|---|---|---|
| $d > r$ | Passante. | keiner |
| $d = r$ | Tangente. | einer |
| $d < r$ | Sekante. | zwei |

Der Grund ist anschaulich: Der Punkt der Geraden, der $M$ am nächsten liegt, ist der Lotfußpunkt. Ist schon er weiter als
$r$ entfernt, liegt die ganze Gerade außerhalb.

:::beispiel[Drei Geraden, ein Kreis]
Der Kreis $k: (x - 2)^2 + (y + 1)^2 = 20$ hat $M(2 \mid -1)$ und $r = \sqrt{20} \approx 4{,}47$. Wir vergleichen drei parallele
Geraden mit dem Normalvektor $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$:

- $g_1: 2x + y = 13$. $d = \frac{|4 - 1 - 13|}{\sqrt 5} = \frac{10}{\sqrt 5} = \sqrt{20}$. Das ist genau $r$: **Tangente**.
- $g_2: 2x + y = 15$. $d = \frac{12}{\sqrt 5} \approx 5{,}37 > r$: **Passante**.
- $g_3: 2x + y = 3$. $d = \frac{|4 - 1 - 3|}{\sqrt 5} = 0 < r$: **Sekante**. Sie geht sogar durch den Mittelpunkt, ihre Sehne ist ein
  Durchmesser.

Den **Berührpunkt** von $g_1$ liefert das Lot von $M$ auf $g_1$: $X = (2 + 2t \mid -1 + t)$ in $g_1$ eingesetzt ergibt
$3 + 5t = 13$, also $t = 2$ und den Punkt $(6 \mid 1)$. Probe auf dem Kreis: $16 + 4 = 20$.
:::

### Schnittpunkte berechnen

Die Schnittpunkte selbst erhält man durch **Einsetzen**: Man löst die Geradengleichung nach $x$ oder $y$ auf und setzt in die
Kreisgleichung ein. Es entsteht eine quadratische Gleichung. Ihre Diskriminante ist positiv, null oder negativ, passend zu
Sekante, Tangente und Passante.

:::beispiel[Die Schnittpunkte einer Sekante]
Gesucht sind die Schnittpunkte von $k: x^2 + y^2 = 25$ und $g: x + 2y = 5$.

1. **Gerade auflösen:** $x = 5 - 2y$. Wir lösen nach $x$ auf, weil dann keine Brüche entstehen.
2. **In den Kreis einsetzen:** $(5 - 2y)^2 + y^2 = 25$, also $25 - 20y + 4y^2 + y^2 = 25$.
3. **Vereinfachen:** $5y^2 - 20y = 0$, also $5y(y - 4) = 0$. Lösungen $y = 0$ und $y = 4$.
4. **Zugehörige $x$-Werte mit der Geraden:** $y = 0$ ergibt $x = 5$, $y = 4$ ergibt $x = -3$.
5. **Ergebnis:** $S_1(-3 \mid 4)$ und $S_2(5 \mid 0)$. Probe: $9 + 16 = 25$ und $25 + 0 = 25$.

Die Sehne ist $|S_1 S_2| = \sqrt{8^2 + 4^2} = \sqrt{80} \approx 8{,}94$ lang.
:::

:::achtung[Den zweiten Wert aus der Kreisgleichung berechnet]
Im letzten Beispiel berechnet jemand zu $y = 4$ das $x$ aus der **Kreisgleichung**: $x^2 + 16 = 25$, also $x = \pm 3$. Er erhält
vier „Schnittpunkte“, darunter $(3 \mid 4)$. Dieser Punkt liegt zwar auf dem Kreis, aber nicht auf der Geraden: $3 + 8 = 11 \neq 5$.
Den zweiten Wert berechnet man immer mit der **Geraden**. Sie legt zu jedem $y$ genau ein $x$ fest. Eine Gerade und ein Kreis
haben höchstens zwei gemeinsame Punkte.
:::

### Die Tangente in einem Kreispunkt

Die wichtigste Eigenschaft der Tangente ist einfach zu merken.

:::satz[Die Tangente steht normal auf dem Berührradius]
Die Tangente an den Kreis $k$ mit Mittelpunkt $M$ im Kreispunkt $T$ ist die Gerade durch $T$ mit dem Normalvektor
$\overrightarrow{MT}$:
$$t: \overrightarrow{MT}\cdot(X - T) = 0.$$
Gleichwertig ist die **Spaltform** $(X - M)\cdot(T - M) = r^2$.
:::

**Warum normal?** Der Berührpunkt $T$ ist der einzige Punkt der Tangente, der auf dem Kreis liegt. Alle anderen Punkte der
Tangente liegen außerhalb, also weiter als $r$ von $M$ entfernt. $T$ ist darum der Punkt der Tangente, der $M$ am nächsten liegt.
Der nächstgelegene Punkt ist aber immer der Lotfußpunkt. Also steht $\overrightarrow{MT}$ normal auf der Tangente.

Die Spaltform erhält man, indem man $X - T = (X - M) - (T - M)$ schreibt und $(T - M)\cdot(T - M) = r^2$ benutzt. Man merkt sie
sich so: In der Kreisgleichung $(X - M)\cdot(X - M) = r^2$ ersetzt man **einen** der beiden Faktoren $X$ durch $T$.

:::beispiel[Die Tangente in einem Kreispunkt]
Gegeben ist $k: x^2 + y^2 - 4x + 6y - 12 = 0$ und der Punkt $T(5 \mid 1)$.

1. **Mittelpunkt und Radius:** Quadratische Ergänzung ergibt $(x - 2)^2 + (y + 3)^2 = 4 + 9 + 12 = 25$. Also $M(2 \mid -3)$, $r = 5$.
2. **$T$ liegt auf $k$:** $(5 - 2)^2 + (1 + 3)^2 = 9 + 16 = 25$.
3. **Normalvektor der Tangente:** $\overrightarrow{MT} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$.
4. **Tangente:** $3x + 4y = 3\cdot 5 + 4\cdot 1 = 19$.
5. **Kontrolle mit der HNF:** $d(M, t) = \frac{|6 - 12 - 19|}{5} = \frac{25}{5} = 5 = r$.
:::

:::achtung[Den Radius als Richtungsvektor genommen]
Bei der letzten Aufgabe schreibt jemand die Tangente als $X = \begin{pmatrix} 5 \\ 1 \end{pmatrix} + s\cdot\begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Das ist die Gerade
**durch** $M$ und $T$, also die Verlängerung des Radius. Für $s = -1$ erhält man genau $M(2 \mid -3)$. Eine Tangente geht aber nie
durch den Mittelpunkt. Der Radius $\overrightarrow{MT}$ ist der **Normalvektor** der Tangente. Als Richtungsvektor braucht man ihn
gekippt: $\begin{pmatrix} 4 \\ -3 \end{pmatrix}$.
:::

:::beispiel[Eine Zufahrt in einen Kreisverkehr]
Ein Kreisverkehr hat den Rand $x^2 + y^2 = 400$ (Einheiten in Metern, Mittelpunkt im Ursprung). Eine gerade Zufahrt soll im Punkt
$T(12 \mid 16)$ tangential einmünden.

1. **Probe:** $144 + 256 = 400$. $T$ liegt auf dem Rand.
2. **Tangente:** Normalvektor $\overrightarrow{MT} = \begin{pmatrix} 12 \\ 16 \end{pmatrix}$, gekürzt $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Gleichung
   $3x + 4y = 36 + 64 = 100$.
3. **Wo kreuzt die Zufahrt die $x$-Achse?** Mit $y = 0$: $x = \frac{100}{3} \approx 33{,}3$ m vom Mittelpunkt entfernt.

**Antwort:** Die Zufahrt verläuft auf $3x + 4y = 100$ und kreuzt die $x$-Achse etwa $33$ m vom Mittelpunkt entfernt.
:::

```aufgabe
id: ag-kg-check-widget
titel: Vorhersage zur Tangente
art: check
niveau: 1
angabe: |
  Im folgenden Widget siehst du den Kreis $x^2 + y^2 = 16$ und die Gerade $y = kx + d$. Sage voraus: Für welches $d$ berührt die
  waagrechte Gerade (also $k = 0$) den Kreis von oben?
teile:
  - typ: zahl
    label: '$d$'
    loesung: "4"
    fehler:
      - wert: "16"
        meldung: '$16$ ist $r^2$. Die Gerade $y = d$ berührt den Kreis oben im Abstand $r$ vom Mittelpunkt, also bei $y = 4$.'
loesung: |
  Der Kreis hat den Mittelpunkt $(0 \mid 0)$ und den Radius $4$. Sein höchster Punkt ist $(0 \mid 4)$.
  ---
  Die waagrechte Gerade $y = 4$ berührt den Kreis genau dort. Also $d = 4$.
```

```widget
name: parameter
titel: Gerade und Kreis x² + y² = 16
props:
  f: "k*x + d"
  parameter:
    - { name: k, min: -3, max: 3, step: 0.25, wert: 0 }
    - { name: d, min: -8, max: 8, step: 0.25, wert: 2 }
  zusatz: ["sqrt(16 - x^2)", "-sqrt(16 - x^2)"]
  x: [-9.6, 9.6]
  y: [-5, 5]
```

**Beobachte und erkläre.** Stelle $k = 0$ ein und schiebe $d$, bis die Gerade den Kreis gerade noch berührt. Das passiert bei
$d = 4$ und $d = -4$. Stelle nun $k = 1$ ein. Jetzt brauchst du ein größeres $d$, nämlich etwa $5{,}66$. Der Grund: Die schräge
Gerade ist weiter vom Ursprung entfernt, als ihr Achsenabschnitt $d$ zeigt. Mit der HNF ist ihr Abstand
$\frac{|d|}{\sqrt{1 + k^2}}$. Tangente heißt Abstand gleich $r$. Daraus folgt die **Tangentenbedingung**
$$d^2 = r^2\,(1 + k^2).$$
Für $k = 1$ und $r = 4$ ist $d^2 = 32$, also $d = \sqrt{32} \approx 5{,}66$.

:::merke[Rezept: Kreis und Gerade]
1. **Lage:** $d(M, g)$ mit der HNF berechnen und mit $r$ vergleichen.
2. **Schnittpunkte:** Gerade nach einer Variablen auflösen, in den Kreis einsetzen, quadratische Gleichung lösen. Den
   zweiten Wert mit der **Geraden** berechnen. Probe auf beiden.
3. **Tangente in $T$:** Normalvektor $\overrightarrow{MT}$, also $\overrightarrow{MT}\cdot X = \overrightarrow{MT}\cdot T$. Kontrolle:
   $d(M, t) = r$.
4. **Sehnenlänge:** $2\sqrt{r^2 - d^2}$ (Pythagoras im halben Sehnendreieck).
:::

```reflexion
frage: Warum ist die Sehnenlänge einer Sekante $2\sqrt{r^2 - d^2}$, wobei $d$ der Abstand des Mittelpunkts von der Geraden ist?
antwort: |
  Das Lot von $M$ auf die Sekante trifft die Sehne genau in ihrer Mitte, denn die beiden Schnittpunkte liegen
  symmetrisch zum Lot. Vom Mittelpunkt $M$, dem Lotfußpunkt $F$ und einem Schnittpunkt $S$ wird ein rechtwinkliges
  Dreieck gebildet. Die Hypotenuse $MS$ ist der Radius $r$, die Kathete $MF$ ist der Abstand $d$. Nach Pythagoras ist die
  andere Kathete, die halbe Sehne, $\sqrt{r^2 - d^2}$. Die ganze Sehne ist doppelt so lang. Bei $d = r$ wird sie $0$: Die
  beiden Schnittpunkte fallen zum Berührpunkt zusammen.
```

```aufgabe
id: ag-kreis-gerade
titel: Schnittpunkte von Kreis und Gerade
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Schneide den Kreis $k: (x - 3)^2 + (y + 2)^2 = 25$ mit der Geraden $g: y = x$. Gib die Schnittpunkte nach aufsteigender
  $x$-Koordinate an.
teile:
  - typ: vektor
    label: '$S_1$'
    namen: ["x", "y"]
    loesung: ["-2", "-2"]
    fehler:
      - wert: ["3", "3"]
        meldung: Das ist der Schnittpunkt mit der größeren $x$-Koordinate. Gefragt ist zuerst der mit der kleineren.
      - wert: ["2", "2"]
        meldung: 'Prüfe das Vorzeichen: Aus $(x - 3)(x + 2) = 0$ folgt $x = -2$.'
  - typ: vektor
    label: '$S_2$'
    namen: ["x", "y"]
    loesung: ["3", "3"]
    fehler:
      - wert: ["-3", "-3"]
        meldung: 'Prüfe das Vorzeichen: Aus $(x - 3)(x + 2) = 0$ folgt $x = 3$.'
hinweise:
  - Setze $y = x$ in die Kreisgleichung ein.
loesung: |
  **Ansatz:** Die Schnittpunkte erfüllen beide Gleichungen. Weil $y = x$ ist, setzen wir $x$ für $y$ in die Kreisgleichung ein.
  ---
  $(x - 3)^2 + (x + 2)^2 = 25$, also $x^2 - 6x + 9 + x^2 + 4x + 4 = 25$ und $2x^2 - 2x - 12 = 0$.
  ---
  Durch $2$: $x^2 - x - 6 = 0$, also $(x - 3)(x + 2) = 0$ mit $x = -2$ oder $x = 3$. Mit $y = x$: $S_1(-2 \mid -2)$ und $S_2(3 \mid 3)$. Probe: $25 + 0 = 25$ und $0 + 25 = 25$.
```

```aufgabe
id: ag-kreis-gerade-lage
titel: Passante, Tangente oder Sekante?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Bestimme die Lage der Geraden zum Kreis $k: x^2 + y^2 = 10$.

  $g_1: x + 3y = 10$ $\quad$ $g_2: x - y = 6$ $\quad$ $g_3: 3x + y = 5$
teile:
  - typ: auswahl
    label: '$g_1$'
    optionen: ['Passante', 'Tangente', 'Sekante']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: '$d = \frac{10}{\sqrt{10}} = \sqrt{10}$. Das ist genau der Radius.'
  - typ: auswahl
    label: '$g_2$'
    optionen: ['Passante', 'Tangente', 'Sekante']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: '$d = \frac{6}{\sqrt 2} \approx 4{,}24$. Der Radius ist nur $\sqrt{10} \approx 3{,}16$.'
  - typ: auswahl
    label: '$g_3$'
    optionen: ['Passante', 'Tangente', 'Sekante']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$d = \frac{5}{\sqrt{10}} \approx 1{,}58$ ist kleiner als der Radius. Die Gerade schneidet den Kreis.'
hinweise:
  - 'Der Mittelpunkt ist der Ursprung, der Radius $\sqrt{10}$. Berechne für jede Gerade $d = \frac{|c|}{\sqrt{a^2 + b^2}}$.'
loesung: |
  **Ansatz:** Abstand des Mittelpunkts $(0 \mid 0)$ von der Geraden mit der HNF, verglichen mit $r = \sqrt{10} \approx 3{,}16$.
  ---
  $g_1$: $d = \frac{10}{\sqrt{10}} = \sqrt{10} = r$. Tangente. $g_2$: $d = \frac{6}{\sqrt 2} \approx 4{,}24 > r$. Passante.
  ---
  $g_3$: $d = \frac{5}{\sqrt{10}} \approx 1{,}58 < r$. Sekante.
```

```aufgabe
id: ag-tangente-kreis
titel: Tangente in einem Kreispunkt
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Zeige, dass $T(4 \mid 6)$ auf dem Kreis $(x - 1)^2 + (y - 2)^2 = 25$ liegt, und bestimme die Tangente in $T$ in der Form
  $ax + by = c$ (als Tripel $(a, b, c)$; jedes Vielfache ist richtig).
teile:
  - typ: vektor
    label: '$(a, b, c)$'
    namen: ["a", "b", "c"]
    vielfaches: true
    loesung: ["3", "4", "36"]
    fehler:
      - wert: ["4", "-3", "-2"]
        meldung: Du hast $\overrightarrow{MT}$ als Richtungsvektor verwendet. Diese Gerade geht durch den Mittelpunkt. $\overrightarrow{MT}$ ist aber der **Normalvektor** der Tangente.
      - wert: ["3", "4", "11"]
        meldung: 'Der Normalvektor stimmt. Die rechte Seite gehört aber zum Berührpunkt $T$, nicht zu $M$: $c = 3\cdot 4 + 4\cdot 6$.'
hinweise:
  - Die Tangente steht normal auf dem Radius $\overrightarrow{MT}$.
  - 'Also ist $\overrightarrow{MT}$ ihr Normalvektor, und die rechte Seite ist $\overrightarrow{MT}\cdot T$.'
loesung: |
  **Ansatz:** Die Tangente steht normal auf dem Berührradius. Darum ist $\overrightarrow{MT}$ ihr Normalvektor.
  ---
  $T$ liegt auf dem Kreis: $(4 - 1)^2 + (6 - 2)^2 = 9 + 16 = 25$.
  ---
  $\overrightarrow{MT} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Tangente: $3x + 4y = 3\cdot 4 + 4\cdot 6 = 36$.
  ---
  Kontrolle mit der HNF: $d(M, t) = \frac{|3 + 8 - 36|}{5} = 5 = r$.
gefuehrt:
  - text: 'Prüfe, dass $T$ auf dem Kreis liegt. Welchen Wert hat $(4 - 1)^2 + (6 - 2)^2$?'
    teil: { typ: zahl, loesung: "25" }
    erklaerung: '$9 + 16 = 25 = r^2$. $T$ liegt auf dem Kreis.'
  - text: 'Berechne den Radiusvektor $\overrightarrow{MT}$.'
    teil: { typ: vektor, loesung: ["3", "4"], fehler: [ { wert: ["-3", "-4"], meldung: 'Das ist $\overrightarrow{TM}$. Rechne $T - M$.' } ] }
    erklaerung: '$\overrightarrow{MT} = (4 - 1, 6 - 2) = (3, 4)$.'
  - text: 'Welche Rolle spielt $\overrightarrow{MT}$ für die Tangente?'
    teil: { typ: auswahl, optionen: ['Normalvektor', 'Richtungsvektor'], richtig: [0], fehler: [ { wert: 1, meldung: 'Mit $\overrightarrow{MT}$ als Richtung liefe die Gerade durch $M$. Die Tangente steht aber normal auf dem Radius.' } ] }
    erklaerung: 'Die Tangente steht normal auf dem Radius. $\overrightarrow{MT}$ ist also ihr Normalvektor.'
  - text: 'Berechne die rechte Seite $c = \overrightarrow{MT}\cdot T$.'
    teil: { typ: zahl, loesung: "36" }
    erklaerung: '$3\cdot 4 + 4\cdot 6 = 36$. Tangente $3x + 4y = 36$.'
```

```aufgabe
id: ag-tangente-kreisverkehr
titel: Eine Zufahrt, die tangential einmündet
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein runder Platz hat den Rand $x^2 + y^2 = 625$ (Einheiten in Metern). Ein gerader Weg soll im Punkt $T(-7 \mid 24)$ tangential an
  den Rand anschließen.

  a) Gib den Weg in der Form $ax + by = c$ an (als Tripel; jedes Vielfache ist richtig).

  b) In welchem Punkt kreuzt der Weg die $x$-Achse? Gib die $x$-Koordinate auf zwei Dezimalstellen an.

  c) Unter welchem Winkel steigt der Weg gegen die $x$-Achse an? Runde auf zwei Dezimalstellen.
teile:
  - typ: vektor
    label: 'a) $(a, b, c)$'
    namen: ["a", "b", "c"]
    vielfaches: true
    loesung: ["-7", "24", "625"]
    fehler:
      - wert: ["24", "7", "0"]
        meldung: Das ist die Gerade durch den Mittelpunkt und $T$. Die Tangente hat $\overrightarrow{MT}$ als **Normalvektor**.
  - typ: zahl
    label: 'b) $x$-Koordinate'
    loesung: "-625/7"
    fehler:
      - wert: "625/7"
        meldung: 'Mit $y = 0$ bleibt $-7x = 625$. Achte auf das Vorzeichen.'
  - typ: zahl
    label: 'c) Steigungswinkel'
    einheit: "°"
    loesung: "inGrad(atan(7/24))"
    fehler:
      - wert: "inGrad(atan(24/7))"
        meldung: 'Die Steigung ist $k = -\frac ab = \frac{7}{24}$, nicht $\frac{24}{7}$. $\frac{24}{7}$ wäre die Steigung des Radius.'
hinweise:
  - 'Der Mittelpunkt ist der Ursprung. $\overrightarrow{MT} = \begin{pmatrix} -7 \\ 24 \end{pmatrix}$ ist der Normalvektor des Wegs.'
  - 'b) $y = 0$ einsetzen. c) Steigung $k = -\frac ab$, dann $\tan\alpha = k$.'
loesung: |
  **Ansatz:** Tangential einmünden heißt: Der Weg ist die Tangente in $T$. Sie steht normal auf dem Radius $\overrightarrow{MT}$.
  ---
  **a)** Probe $T$ auf dem Rand: $49 + 576 = 625$. Normalvektor $\overrightarrow{MT} = \begin{pmatrix} -7 \\ 24 \end{pmatrix}$, rechte Seite $(-7)\cdot(-7) + 24\cdot 24 = 625$. Weg: $-7x + 24y = 625$.
  ---
  **b)** $y = 0$: $-7x = 625$, also $x = -\frac{625}{7} \approx -89{,}29$. Der Weg kreuzt die $x$-Achse etwa $89$ m links vom Mittelpunkt.
  ---
  **c)** $24y = 7x + 625$, also $k = \frac{7}{24}$. $\tan\alpha = \frac{7}{24}$, $\alpha \approx 16{,}26°$. **Probe:** Der Radius hat die Steigung $-\frac{24}{7}$. Das Produkt der Steigungen ist $-1$, also stehen Radius und Weg normal aufeinander.
```

```aufgabe
id: ag-sehne
titel: Die Länge einer Sehne
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Die Gerade $g: 3x + 4y = 21$ schneidet den Kreis $k: (x - 1)^2 + (y - 2)^2 = 25$.

  a) Wie weit ist der Mittelpunkt von $g$ entfernt?

  b) Wie lang ist die Sehne? Runde auf zwei Dezimalstellen.

  c) Bestimme den Mittelpunkt der Sehne.
teile:
  - typ: zahl
    label: 'a) $d(M, g)$'
    loesung: "2"
    fehler:
      - wert: "10"
        meldung: Teile den Betrag im Zähler noch durch $|\vec n| = 5$.
  - typ: zahl
    label: 'b) Sehnenlänge'
    loesung: "2*sqrt(21)"
    fehler:
      - wert: "sqrt(21)"
        meldung: Das ist die **halbe** Sehne. Die ganze Sehne ist doppelt so lang.
      - wert: "2*sqrt(29)"
        meldung: 'Im rechtwinkligen Dreieck ist der Radius die Hypotenuse. Also halbe Sehne $= \sqrt{r^2 - d^2}$, nicht $\sqrt{r^2 + d^2}$.'
  - typ: vektor
    label: 'c) Mittelpunkt der Sehne'
    namen: ["x", "y"]
    loesung: ["2.2", "3.6"]
hinweise:
  - 'a) HNF mit $M(1 \mid 2)$. b) Pythagoras: halbe Sehne $= \sqrt{r^2 - d^2}$.'
  - 'c) Der Mittelpunkt der Sehne ist der Lotfußpunkt von $M$ auf $g$. Lot: $X = (1 + 3t \mid 2 + 4t)$.'
loesung: |
  **Ansatz:** Das Lot von $M$ auf die Sekante halbiert die Sehne. Abstand, Radius und halbe Sehne bilden ein rechtwinkliges Dreieck.
  ---
  **a)** $d = \frac{|3 + 8 - 21|}{5} = \frac{10}{5} = 2$.
  ---
  **b)** Halbe Sehne $\sqrt{25 - 4} = \sqrt{21}$. Sehne $2\sqrt{21} \approx 9{,}17$.
  ---
  **c)** Lot $(1 + 3t \mid 2 + 4t)$ in $g$: $3 + 9t + 8 + 16t = 21$, also $25t = 10$ und $t = 0{,}4$. Mittelpunkt der Sehne $(2{,}2 \mid 3{,}6)$. Probe: $6{,}6 + 14{,}4 = 21$.
```

```aufgabe
id: ag-kreis-gerade-fehler
titel: Vier Schnittpunkte?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Mia schneidet $k: x^2 + y^2 = 13$ mit $g: x - y = 1$. Sie setzt $x = y + 1$ ein und erhält $y = 2$ oder $y = -3$. Dann berechnet
  sie $x$ aus der Kreisgleichung: Für $y = 2$ ist $x^2 = 9$, also $x = \pm 3$. Für $y = -3$ ist $x^2 = 4$, also $x = \pm 2$. Sie
  schreibt vier Schnittpunkte auf: $(3 \mid 2)$, $(-3 \mid 2)$, $(2 \mid -3)$ und $(-2 \mid -3)$.
teile:
  - typ: auswahl
    label: 'Welche Punkte sind wirklich Schnittpunkte?'
    mehrfach: true
    optionen: ['$(3 \mid 2)$', '$(-3 \mid 2)$', '$(2 \mid -3)$', '$(-2 \mid -3)$']
    richtig: [0, 3]
    fehler:
      - wert: [0, 1, 2, 3]
        meldung: 'Prüfe jeden Punkt auch in der Geraden $x - y = 1$. Zum Beispiel ergibt $(-3 \mid 2)$ den Wert $-5$.'
      - wert: [0, 2]
        meldung: 'Prüfe $(2 \mid -3)$ in der Geraden: $2 - (-3) = 5 \neq 1$. Und $(-2 \mid -3)$ ergibt $-2 + 3 = 1$.'
  - typ: auswahl
    label: 'Was ist Mias Fehler?'
    optionen:
      - 'Sie hat $x$ aus der Kreisgleichung berechnet statt aus der Geraden.'
      - 'Sie hätte nach $y$ statt nach $x$ auflösen müssen.'
      - 'Kein Fehler, eine Gerade kann einen Kreis viermal schneiden.'
    richtig: [0]
    fehler:
      - wert: 2
        meldung: Eine Gerade und ein Kreis haben höchstens zwei gemeinsame Punkte. Die Gleichung beim Einsetzen ist nur quadratisch.
      - wert: 1
        meldung: Welche Variable man auflöst, ist egal. Der Fehler liegt im zweiten Schritt.
hinweise:
  - Setze jeden der vier Punkte in $x - y = 1$ ein.
  - Zu jedem $y$ gehört auf der Geraden genau ein $x$, nämlich $x = y + 1$.
loesung: |
  **Ansatz:** Ein Schnittpunkt muss **beide** Gleichungen erfüllen. Die Kreisgleichung liefert zu jedem $y$ zwei $x$-Werte, die Gerade nur einen.
  ---
  Richtig ist: $y = 2$ ergibt mit $x = y + 1$ den Wert $x = 3$. $y = -3$ ergibt $x = -2$. Schnittpunkte $(3 \mid 2)$ und $(-2 \mid -3)$.
  ---
  Probe: $9 + 4 = 13$ und $3 - 2 = 1$. Ebenso $4 + 9 = 13$ und $-2 + 3 = 1$. Die Punkte $(-3 \mid 2)$ und $(2 \mid -3)$ liegen zwar auf dem Kreis, aber nicht auf der Geraden.
```

```aufgabe
id: ag-tangenten-parameter
titel: Wann ist die Gerade eine Tangente?
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Gegeben sind der Kreis $k: (x - 2)^2 + (y - 1)^2 = 10$ und die Geraden $g_c: x + 3y = c$ für jede Zahl $c$.

  a) Für welche Werte von $c$ ist $g_c$ eine Tangente an $k$? Gib beide Werte an, getrennt durch einen Strichpunkt.

  b) Wie liegt $g_0$ (also $c = 0$) zum Kreis?

  c) Bestimme den Berührpunkt für den größeren der beiden Werte aus a).
teile:
  - typ: menge
    label: 'a) $c$'
    loesung: ["-5", "15"]
    fehler:
      - wert: ["15"]
        meldung: 'Die Betragsgleichung $|5 - c| = 10$ hat zwei Lösungen. Es gibt eine Tangente auf jeder Seite des Kreises.'
      - wert: ["5 - sqrt(10)", "5 + sqrt(10)"]
        meldung: 'Der Abstand ist $\frac{|5 - c|}{\sqrt{10}}$. Gleich $r = \sqrt{10}$ gesetzt folgt $|5 - c| = 10$.'
  - typ: auswahl
    label: 'b) $g_0$'
    optionen: ['Passante', 'Tangente', 'Sekante']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$d = \frac{|5 - 0|}{\sqrt{10}} \approx 1{,}58$. Das ist kleiner als $r \approx 3{,}16$.'
  - typ: vektor
    label: 'c) Berührpunkt'
    namen: ["x", "y"]
    loesung: ["3", "4"]
    fehler:
      - wert: ["1", "-2"]
        meldung: Das ist der Berührpunkt der anderen Tangente ($c = -5$). Gefragt ist der für $c = 15$.
hinweise:
  - 'Alle $g_c$ sind parallel. Tangente heißt $d(M, g_c) = r = \sqrt{10}$, mit $d(M, g_c) = \frac{|2 + 3 - c|}{\sqrt{10}}$.'
  - 'c) Der Berührpunkt ist der Lotfußpunkt: $X = (2 + t \mid 1 + 3t)$ in $x + 3y = 15$ einsetzen.'
loesung: |
  **Ansatz:** Die Lage hängt nur vom Abstand des Mittelpunkts $M(2 \mid 1)$ ab: $d = \frac{|2 + 3 - c|}{\sqrt{1 + 9}} = \frac{|5 - c|}{\sqrt{10}}$.
  ---
  **a)** Tangente: $\frac{|5 - c|}{\sqrt{10}} = \sqrt{10}$, also $|5 - c| = 10$. Daraus $c = -5$ oder $c = 15$.
  ---
  **b)** $c = 0$: $d = \frac{5}{\sqrt{10}} \approx 1{,}58 < \sqrt{10}$. Sekante. Allgemein ist $g_c$ für $-5 < c < 15$ eine Sekante und sonst eine Passante.
  ---
  **c)** Lot $(2 + t \mid 1 + 3t)$ in $x + 3y = 15$: $5 + 10t = 15$, also $t = 1$ und der Berührpunkt $(3 \mid 4)$. Probe: $(3 - 2)^2 + (4 - 1)^2 = 1 + 9 = 10$.
```

## Tangenten von außen und Schnitt zweier Kreise

```aufgabe
id: ag-ta-vorwissen
titel: Die Tangente in einem Kreispunkt
art: check
niveau: 1
angabe: |
  Welche Gleichung hat die Tangente an $x^2 + y^2 = 25$ im Punkt $T(3 \mid 4)$? Zum Nachlesen:
  [7.11 Kreis und Gerade](/lernen/mathe3/analytische-geometrie/kreis-und-gerade-sekante-tangente-passante).
teile:
  - typ: auswahl
    optionen:
      - '$3x + 4y = 25$'
      - '$4x - 3y = 0$'
      - '$3x + 4y = 0$'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Diese Gerade geht durch den Mittelpunkt und durch $T$. Das ist die Verlängerung des Radius, nicht die Tangente.
      - wert: 2
        meldung: Der Normalvektor $\begin{pmatrix} 3 \\ 4 \end{pmatrix}$ stimmt, aber die Gerade muss durch $T$ gehen. Setze $T$ ein, um die rechte Seite zu finden.
loesung: |
  Die Tangente steht normal auf dem Radius $\overrightarrow{MT} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Er ist ihr Normalvektor.
  ---
  Rechte Seite: $3\cdot 3 + 4\cdot 4 = 25$. Tangente $3x + 4y = 25$.
```

In [7.11 Kreis und Gerade](/lernen/mathe3/analytische-geometrie/kreis-und-gerade-sekante-tangente-passante) war der
Berührpunkt bekannt. Oft kennt man ihn aber nicht. Gegeben ist dann ein Punkt $P$ **außerhalb** des Kreises, und gesucht sind die
Tangenten, die durch $P$ gehen. Ein Bild: Du stehst neben einem runden Brunnen und schaust an seinem Rand vorbei. Es gibt genau
zwei Blickrichtungen, die den Rand gerade streifen, eine links und eine rechts.

### Tangenten von einem äußeren Punkt

**Worum geht es?** Gesucht sind die Berührpunkte $T$. Kennt man sie, sind die Tangenten leicht.

**Die Idee in kleinen Schritten.**

1. Die Tangente in einem Kreispunkt $T$ hat die Gleichung $(X - M)\cdot(T - M) = r^2$. Das ist die Spaltform aus Lektion 7.11.
2. Die Tangente soll durch $P$ gehen. Also setzen wir $X = P$ ein: $(P - M)\cdot(T - M) = r^2$.
3. In dieser Gleichung ist $P$ bekannt und $T$ unbekannt. Für die Koordinaten von $T$ ist es eine **lineare** Gleichung, also eine
   Gerade. Sie heißt **Polare** von $P$.
4. Die Berührpunkte liegen auf dieser Geraden **und** auf dem Kreis. Man schneidet also Polare und Kreis, wie in Lektion 7.11.

**Was haben wir gewonnen?** Ein schwieriges Problem (zwei unbekannte Tangenten) ist auf ein bekanntes zurückgeführt: Gerade
schneidet Kreis.

:::beispiel[Zwei Tangenten von einem äußeren Punkt]
Gegeben sind $k: x^2 + y^2 = 25$ und $P(7 \mid 1)$.

1. **Liegt $P$ außen?** $49 + 1 = 50 > 25$. Ja.
2. **Polare:** Mit $M = O$ lautet die Bedingung $P\cdot T = 25$, also $7x + y = 25$ für die Koordinaten $(x \mid y)$ von $T$.
3. **Polare und Kreis schneiden:** $y = 25 - 7x$ einsetzen: $x^2 + (25 - 7x)^2 = 25$. Ausmultipliziert:
   $50x^2 - 350x + 600 = 0$, durch $50$ geteilt $x^2 - 7x + 12 = 0$. Also $x = 3$ oder $x = 4$.
4. **Berührpunkte:** $T_1(3 \mid 25 - 21) = (3 \mid 4)$ und $T_2(4 \mid 25 - 28) = (4 \mid -3)$.
5. **Tangenten:** $t_1: 3x + 4y = 25$ und $t_2: 4x - 3y = 25$.
6. **Probe mit $P$:** $21 + 4 = 25$ und $28 - 3 = 25$. Beide Tangenten gehen durch $P$.

Die **Tangentenlänge** $|PT|$ folgt aus Pythagoras im Dreieck $MTP$ mit dem rechten Winkel bei $T$:
$|PT| = \sqrt{|PM|^2 - r^2} = \sqrt{50 - 25} = 5$.
:::

```plot
x: [-6, 9]
y: [-6, 6]
gleich: true
kurven:
  - { x: "5*cos(t)", y: "5*sin(t)", t: [0, "2*pi"], label: "k", farbe: 0 }
  - { x: "3.5 + sqrt(12.5)*cos(t)", y: "0.5 + sqrt(12.5)*sin(t)", t: [0, "2*pi"], farbe: 3, gestrichelt: true }
graphen:
  - { f: "(25 - 3*x)/4", label: "t₁", farbe: 1, von: -2, bis: 9 }
  - { f: "(4*x - 25)/3", label: "t₂", farbe: 2, von: 2.5, bis: 9 }
punkte:
  - { x: 0, y: 0, label: "M" }
  - { x: 7, y: 1, label: "P(7 | 1)" }
  - { x: 3, y: 4, label: "T₁(3 | 4)", farbe: 1 }
  - { x: 4, y: -3, label: "T₂(4 | −3)", farbe: 2 }
beschriftung: Die beiden Tangenten von P an den Kreis k berühren ihn in T₁ und T₂. Der violette gestrichelte Kreis hat die Strecke MP als Durchmesser. Auch er geht durch T₁ und T₂, weil bei T jeweils ein rechter Winkel liegt (Satz von Thales).
```

**Ein zweiter Blick: der Thaleskreis.** Bei jedem Berührpunkt $T$ steht der Radius $MT$ normal auf der Tangente $PT$. Das
Dreieck $MTP$ hat also bei $T$ einen rechten Winkel. Nach dem **Satz von Thales** liegt $T$ dann auf dem Kreis mit dem Durchmesser
$MP$. Man kann die Berührpunkte also auch als Schnittpunkte zweier Kreise bestimmen. Wie das geht, zeigt der zweite Teil dieser
Lektion.

:::achtung[Mit dem Steigungsansatz eine senkrechte Tangente verloren]
Gesucht sind die Tangenten von $P(3 \mid 5)$ an $x^2 + y^2 = 9$. Jemand setzt die Tangente als $y - 5 = k(x - 3)$ an. Die
Bedingung „Abstand vom Mittelpunkt gleich $3$“ ergibt $\frac{|5 - 3k|}{\sqrt{1 + k^2}} = 3$. Quadriert: $25 - 30k + 9k^2 = 9 + 9k^2$,
also $k = \frac{8}{15}$. Er schreibt: „Es gibt nur eine Tangente.“ Das ist falsch. Die zweite Tangente ist die senkrechte Gerade
$x = 3$. Sie berührt den Kreis in $(3 \mid 0)$, hat aber keine Steigung und fehlt deshalb im Ansatz. Die Polare
$3x + 5y = 9$ findet beide Berührpunkte: $(3 \mid 0)$ und $\left(-\frac{24}{17} \,\middle|\, \frac{45}{17}\right)$.
:::

```aufgabe
id: ag-ta-check-widget
titel: Vorhersage zu den Tangenten von außen
art: check
niveau: 1
angabe: |
  Im folgenden Widget dreht sich die Gerade $y = k\cdot(x - 5)$ um den Punkt $P(5 \mid 0)$. Der Kreis ist $x^2 + y^2 = 9$. Sage voraus:
  Für wie viele Werte von $k$ ist die Gerade eine Tangente?
teile:
  - typ: zahl
    loesung: "2"
    fehler:
      - wert: "1"
        meldung: Von einem Punkt außerhalb des Kreises gibt es zwei Tangenten, eine streift den Kreis oben, eine unten.
loesung: |
  $P$ liegt außerhalb des Kreises, denn $25 > 9$. Von einem äußeren Punkt gehen genau zwei Tangenten aus.
  ---
  Hier liegen sie symmetrisch zur $x$-Achse. Sie haben die Steigungen $k = \frac34$ und $k = -\frac34$.
```

```widget
name: parameter
titel: Tangenten von P(5 | 0) an den Kreis x² + y² = 9
props:
  f: "k*(x - 5)"
  parameter:
    - { name: k, min: -2, max: 2, step: 0.05, wert: 0.3 }
  zusatz: ["sqrt(9 - x^2)", "-sqrt(9 - x^2)"]
  x: [-6.5, 8.9]
  y: [-4, 4]
```

**Beobachte und erkläre.** Drehe die Gerade mit $k$, bis sie den Kreis gerade noch berührt. Das passiert bei $k \approx 0{,}75$ und
$k \approx -0{,}75$. Für $|k| < 0{,}75$ schneidet sie den Kreis zweimal, für $|k| > 0{,}75$ verfehlt sie ihn. Die exakte Rechnung:
Der Abstand des Ursprungs von $kx - y - 5k = 0$ ist $\frac{|5k|}{\sqrt{k^2 + 1}}$. Gleich $3$ gesetzt folgt $25k^2 = 9k^2 + 9$, also
$k^2 = \frac{9}{16}$ und $k = \pm\frac34$.

### Schnitt zweier Kreise

Zwei Kreise können sich in zwei Punkten schneiden, sich in einem Punkt berühren oder gar nicht treffen. Welcher Fall vorliegt,
entscheidet der Abstand $e = |M_1 M_2|$ der Mittelpunkte im Vergleich zu den Radien $r_1$ und $r_2$:

| Abstand der Mittelpunkte | Lage |
|---|---|
| $e > r_1 + r_2$ | Die Kreise liegen getrennt nebeneinander. |
| $e = r_1 + r_2$ | Sie berühren sich von außen. |
| $\lvert r_1 - r_2\rvert < e < r_1 + r_2$ | Sie schneiden sich in zwei Punkten. |
| $e = \lvert r_1 - r_2\rvert$, $e > 0$ | Sie berühren sich von innen. |
| $e < \lvert r_1 - r_2\rvert$ | Der kleinere liegt im größeren, ohne ihn zu treffen. |

Die Schnittpunkte berechnet man mit einem Trick. Man **subtrahiert** die beiden Kreisgleichungen voneinander. Dabei fallen $x^2$ und
$y^2$ weg, weil sie in beiden Gleichungen mit dem Faktor $1$ stehen. Übrig bleibt eine **lineare** Gleichung, also eine Gerade. Die
Schnittpunkte liegen auf ihr, denn sie erfüllen beide Kreisgleichungen und damit auch ihre Differenz. Man schneidet diese Gerade
dann mit einem der Kreise.

:::beispiel[Die Schnittpunkte zweier Kreise]
Gegeben sind $k_1: x^2 + y^2 = 10$ und $k_2: (x - 4)^2 + (y - 2)^2 = 10$.

1. **Lage:** $e = \sqrt{16 + 4} = \sqrt{20} \approx 4{,}47$ und $r_1 + r_2 = 2\sqrt{10} \approx 6{,}32$. Es gilt $0 < e < r_1 + r_2$, also
   gibt es zwei Schnittpunkte.
2. **$k_2$ ausmultiplizieren:** $x^2 - 8x + 16 + y^2 - 4y + 4 = 10$.
3. **Subtrahieren** ($k_1$ minus $k_2$): $8x - 16 + 4y - 4 = 0$, also $8x + 4y = 20$ und $2x + y = 5$.
4. **Gerade mit $k_1$ schneiden:** $y = 5 - 2x$ einsetzen: $x^2 + 25 - 20x + 4x^2 = 10$, also $5x^2 - 20x + 15 = 0$ und
   $x^2 - 4x + 3 = 0$. Lösungen $x = 1$ und $x = 3$.
5. **Schnittpunkte:** $S_1(1 \mid 3)$ und $S_2(3 \mid -1)$. Probe in $k_2$: $9 + 1 = 10$ und $1 + 9 = 10$.
:::

:::achtung[Nach dem Subtrahieren aufgehört]
Bei den beiden Kreisen aus dem Beispiel erhält jemand die Gerade $2x + y = 5$ und gibt als Schnittpunkt $(0 \mid 5)$ an, weil dieser
Punkt die Gleichung erfüllt. Die Probe zeigt den Fehler: In $k_1$ ergibt $(0 \mid 5)$ den Wert $25 \neq 10$. Die Gerade enthält die
Schnittpunkte, aber auch unendlich viele andere Punkte. Erst der Schnitt der Geraden mit einem der Kreise liefert die beiden
richtigen Punkte.
:::

:::beispiel[Ortung mit zwei Sendemasten]
Ein Handy ist $5$ km vom Mast $A(0 \mid 0)$ und $5$ km vom Mast $B(8 \mid 0)$ entfernt. Die Koordinaten sind in Kilometern.

1. **Kreise:** $x^2 + y^2 = 25$ und $(x - 8)^2 + y^2 = 25$.
2. **Subtrahieren:** $x^2 - (x^2 - 16x + 64) = 0$, also $16x = 64$ und $x = 4$.
3. **Einsetzen:** $16 + y^2 = 25$, also $y = 3$ oder $y = -3$.

Es kommen **zwei** Orte in Frage, $(4 \mid 3)$ und $(4 \mid -3)$. Ein dritter Mast entscheidet. Misst Mast $C(4 \mid 7)$ den Abstand $4$ km,
dann ist das Handy in $(4 \mid 3)$, denn $(4 \mid -3)$ wäre $10$ km von $C$ entfernt. Nach diesem Prinzip arbeitet auch die Ortung
mit Satelliten, nur im Raum mit Kugeln.
:::

:::merke[Rezepte: Tangenten von außen und zwei Kreise]
1. **Tangenten von $P$ an einen Kreis:** Polare $(P - M)\cdot(X - M) = r^2$ aufstellen, mit dem Kreis schneiden. Das liefert die
   Berührpunkte $T_1$ und $T_2$. Dann die Tangenten in $T_1$ und $T_2$. Probe: Beide gehen durch $P$.
2. **Tangentenlänge:** $|PT| = \sqrt{|PM|^2 - r^2}$.
3. **Zwei Kreise:** Lage über $e = |M_1 M_2|$. Schnittpunkte: Gleichungen subtrahieren, die entstehende Gerade mit einem Kreis
   schneiden.
:::

```reflexion
frage: Warum entsteht beim Subtrahieren zweier Kreisgleichungen eine Gerade, und warum klappt das bei einem Kreis und einer Ellipse nicht?
antwort: |
  Beide Kreisgleichungen haben in der allgemeinen Form die Glieder $x^2 + y^2$ mit dem Faktor $1$. Beim Subtrahieren heben sie sich
  genau auf. Es bleiben nur Glieder mit $x$, $y$ und Zahlen, also eine lineare Gleichung. Bei einer Ellipse wie $x^2 + 4y^2 = 4$ steht
  vor $y^2$ eine $4$. Zieht man $x^2 + y^2 = r^2$ davon ab, bleibt $3y^2$ übrig, und die Gleichung ist nicht mehr linear. Der Trick
  funktioniert also gerade deshalb, weil Kreise in alle Richtungen gleich gebaut sind.
```

```aufgabe
id: ag-tangentenlaenge
titel: Wie lang ist die Tangente?
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Vom Punkt $P(7 \mid 6)$ wird eine Tangente an den Kreis $k: (x - 1)^2 + (y + 2)^2 = 9$ gelegt. Wie lang ist die Strecke vom Punkt $P$
  bis zum Berührpunkt? Runde auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: '$|PT|$'
    loesung: "sqrt(100 - 9)"
    fehler:
      - wert: "7"
        meldung: 'Du hast $|PM| - r = 10 - 3$ gerechnet. Die Strecken $MT$ und $PT$ stehen aber im rechten Winkel. Verwende Pythagoras.'
      - wert: "sqrt(109)"
        meldung: 'Im Dreieck $MTP$ ist $|PM|$ die Hypotenuse. Also $|PT|^2 = |PM|^2 - r^2$, nicht $+$.'
hinweise:
  - 'Berechne zuerst $|PM|$. Das Dreieck $MTP$ hat bei $T$ einen rechten Winkel.'
loesung: |
  **Ansatz:** Der Radius $MT$ steht normal auf der Tangente $PT$. Im rechtwinkligen Dreieck $MTP$ ist $PM$ die Hypotenuse.
  ---
  $\overrightarrow{MP} = \begin{pmatrix} 6 \\ 8 \end{pmatrix}$, also $|PM| = 10$.
  ---
  $|PT| = \sqrt{10^2 - 3^2} = \sqrt{91} \approx 9{,}54$.
```

```aufgabe
id: ag-kreise-lage
titel: Wie liegen zwei Kreise?
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Gegeben ist $k_0: x^2 + y^2 = 4$. Bestimme die Lage der folgenden Kreise zu $k_0$.

  $k_1$: Mittelpunkt $(5 \mid 0)$, Radius $3$. $\quad$ $k_2$: Mittelpunkt $(1 \mid 0)$, Radius $1$. $\quad$ $k_3$: Mittelpunkt $(6 \mid 0)$,
  Radius $3$. $\quad$ $k_4$: Mittelpunkt $(3 \mid 0)$, Radius $2$.
teile:
  - typ: auswahl
    label: '$k_1$'
    optionen: ['getrennt', 'berühren von außen', 'zwei Schnittpunkte', 'berühren von innen']
    richtig: [1]
    fehler:
      - wert: 2
        meldung: '$e = 5$ und $r_0 + r_1 = 2 + 3 = 5$. Gleichheit bedeutet Berühren, nicht Schneiden.'
  - typ: auswahl
    label: '$k_2$'
    optionen: ['getrennt', 'berühren von außen', 'zwei Schnittpunkte', 'berühren von innen']
    richtig: [3]
    fehler:
      - wert: 2
        meldung: '$e = 1$ und $|r_0 - r_2| = 2 - 1 = 1$. Der kleine Kreis liegt innen und berührt den großen.'
  - typ: auswahl
    label: '$k_3$'
    optionen: ['getrennt', 'berühren von außen', 'zwei Schnittpunkte', 'berühren von innen']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: '$e = 6$ ist größer als $r_0 + r_3 = 5$. Die Kreise erreichen sich nicht.'
  - typ: auswahl
    label: '$k_4$'
    optionen: ['getrennt', 'berühren von außen', 'zwei Schnittpunkte', 'berühren von innen']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: '$e = 3$ liegt zwischen $|r_0 - r_4| = 0$ und $r_0 + r_4 = 4$. Das bedeutet zwei Schnittpunkte.'
hinweise:
  - 'Berechne jeweils den Abstand $e$ der Mittelpunkte und vergleiche mit $r_0 + r$ und $|r_0 - r|$, wobei $r_0 = 2$ ist.'
loesung: |
  **Ansatz:** Die Lage hängt nur von $e = |M_0 M|$ im Vergleich zu $r_0 + r$ und $|r_0 - r|$ ab. Hier ist $r_0 = 2$.
  ---
  $k_1$: $e = 5 = 2 + 3$. Berühren von außen. $k_2$: $e = 1 = 2 - 1$. Berühren von innen.
  ---
  $k_3$: $e = 6 > 5$. Getrennt. $k_4$: $0 < 3 < 4$. Zwei Schnittpunkte.
```

```aufgabe
id: ag-tangenten-von-aussen
titel: Tangenten von einem äußeren Punkt
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Vom Punkt $P(3 \mid 1)$ werden die Tangenten an den Kreis $k: x^2 + y^2 = 5$ gelegt.

  a) Bestimme die Berührpunkte $T_1$ und $T_2$ (nach aufsteigender $x$-Koordinate).

  b) Gib die Tangente in $T_1$ als $(a, b, c)$ für $ax + by = c$ an (jedes Vielfache ist richtig).
teile:
  - typ: vektor
    label: 'a) $T_1$'
    namen: ["x", "y"]
    loesung: ["1", "2"]
    fehler:
      - wert: ["2", "1"]
        meldung: '$x$ und $y$ sind vertauscht. Prüfe mit der Polaren $3x + y = 5$: $3\cdot 2 + 1 = 7 \neq 5$.'
  - typ: vektor
    label: 'a) $T_2$'
    namen: ["x", "y"]
    loesung: ["2", "-1"]
  - typ: vektor
    label: 'b) Tangente in $T_1$'
    namen: ["a", "b", "c"]
    vielfaches: true
    loesung: ["1", "2", "5"]
    fehler:
      - wert: ["3", "1", "5"]
        meldung: Das ist die Polare. Sie verbindet die beiden Berührpunkte, ist aber selbst keine Tangente.
hinweise:
  - 'Die Polare von $P$ ist $3x + y = 5$. Auf ihr liegen beide Berührpunkte.'
  - 'Schneide die Polare mit dem Kreis: $y = 5 - 3x$ einsetzen. Die Tangente in $T_1$ hat den Normalvektor $\overrightarrow{OT_1}$.'
loesung: |
  **Ansatz:** Die Berührpunkte liegen auf der Polaren $(P - M)\cdot(X - M) = r^2$ und auf dem Kreis. Hier ist $M = O$, also lautet die Polare $3x + y = 5$.
  ---
  $y = 5 - 3x$ in $x^2 + y^2 = 5$: $x^2 + 25 - 30x + 9x^2 = 5$, also $10x^2 - 30x + 20 = 0$ und $x^2 - 3x + 2 = 0$. Lösungen $x = 1$ und $x = 2$.
  ---
  $T_1(1 \mid 2)$ und $T_2(2 \mid -1)$. Probe auf dem Kreis: $1 + 4 = 5$ und $4 + 1 = 5$.
  ---
  **b)** Tangente in $T_1$: Normalvektor $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$, rechte Seite $1 + 4 = 5$. Also $x + 2y = 5$. Probe mit $P$: $3 + 2 = 5$.
gefuehrt:
  - text: 'Stelle die Polare von $P(3 \mid 1)$ bezüglich $x^2 + y^2 = 5$ auf. Mit $M = O$ lautet sie $P\cdot X = r^2$. Welche Gleichung ist es?'
    teil: { typ: auswahl, optionen: ['$3x + y = 5$', '$x + 3y = 5$', '$3x + y = 25$'], richtig: [0], fehler: [ { wert: 2, meldung: 'Rechts steht $r^2 = 5$, nicht $25$.' } ] }
    erklaerung: '$P\cdot X = 3x + 1\cdot y$, und $r^2 = 5$. Also $3x + y = 5$.'
  - text: 'Setze $y = 5 - 3x$ in die Kreisgleichung ein. Welche Werte hat $x$? Gib den kleineren an.'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '$10x^2 - 30x + 20 = 0$ ergibt $x^2 - 3x + 2 = 0$, also $x = 1$ oder $x = 2$.'
  - text: 'Welcher Berührpunkt gehört zu $x = 1$?'
    teil: { typ: vektor, namen: ["x", "y"], loesung: ["1", "2"] }
    erklaerung: '$y = 5 - 3 = 2$. Probe: $1 + 4 = 5$.'
  - text: 'Stelle die Tangente in $T_1$ auf und prüfe, dass sie durch $P$ geht.'
    erklaerung: 'Normalvektor $\overrightarrow{OT_1} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$: $x + 2y = 5$. Mit $P$: $3 + 2 = 5$.'
```

```aufgabe
id: ag-kreis-kreis
titel: Schnittpunkte zweier Kreise
niveau: 2
lernziel: 7
kompetenz: rechnen
angabe: |
  Bestimme die Schnittpunkte von $k_1: x^2 + y^2 = 20$ und $k_2: (x - 6)^2 + (y - 2)^2 = 20$, nach aufsteigender $x$-Koordinate.
teile:
  - typ: vektor
    label: '$S_1$'
    namen: ["x", "y"]
    loesung: ["2", "4"]
    fehler:
      - wert: ["0", "10"]
        meldung: Dieser Punkt liegt nur auf der Geraden $3x + y = 10$, nicht auf den Kreisen. Schneide die Gerade noch mit einem Kreis.
  - typ: vektor
    label: '$S_2$'
    namen: ["x", "y"]
    loesung: ["4", "-2"]
hinweise:
  - 'Multipliziere $k_2$ aus und ziehe es von $k_1$ ab. Es entsteht die Gerade $3x + y = 10$.'
  - 'Setze $y = 10 - 3x$ in $k_1$ ein.'
loesung: |
  **Ansatz:** Die Differenz der Kreisgleichungen ist eine Gerade durch beide Schnittpunkte.
  ---
  $k_2$ ausmultipliziert: $x^2 - 12x + 36 + y^2 - 4y + 4 = 20$. $k_1$ minus $k_2$: $12x - 36 + 4y - 4 = 0$, also $12x + 4y = 40$ und $3x + y = 10$.
  ---
  $y = 10 - 3x$ in $k_1$: $x^2 + 100 - 60x + 9x^2 = 20$, also $10x^2 - 60x + 80 = 0$ und $x^2 - 6x + 8 = 0$. Lösungen $x = 2$ und $x = 4$.
  ---
  $S_1(2 \mid 4)$ und $S_2(4 \mid -2)$. Probe in $k_2$: $16 + 4 = 20$ und $4 + 16 = 20$.
```

```aufgabe
id: ag-ortung
titel: Ortung mit drei Stationen
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein Sender ist $5$ km von Station $A(0 \mid 0)$ und $5$ km von Station $B(8 \mid 4)$ entfernt. Die Koordinaten sind in Kilometern.

  a) Welche zwei Orte kommen in Frage? Gib sie nach aufsteigender $x$-Koordinate an.

  b) Station $C(9 \mid 0)$ misst den Abstand $4$ km. Wo ist der Sender?
teile:
  - typ: vektor
    label: 'a) erster Ort'
    namen: ["x", "y"]
    loesung: ["3", "4"]
    fehler:
      - wert: ["4", "3"]
        meldung: '$(4 \mid 3)$ liegt zwar auf dem Kreis um $A$, aber nicht auf dem um $B$: $16 + 1 = 17 \neq 25$.'
  - typ: vektor
    label: 'a) zweiter Ort'
    namen: ["x", "y"]
    loesung: ["5", "0"]
  - typ: vektor
    label: 'b) Sender'
    namen: ["x", "y"]
    loesung: ["5", "0"]
    fehler:
      - wert: ["3", "4"]
        meldung: 'Der Abstand von $(3 \mid 4)$ zu $C(9 \mid 0)$ ist $\sqrt{36 + 16} \approx 7{,}2$ km, nicht $4$ km.'
hinweise:
  - 'Kreise $x^2 + y^2 = 25$ und $(x - 8)^2 + (y - 4)^2 = 25$. Subtrahieren ergibt die Gerade $2x + y = 10$.'
  - 'b) Berechne für beide Kandidaten den Abstand zu $C$.'
loesung: |
  **Ansatz:** Alle Orte im Abstand $5$ km von $A$ bilden einen Kreis, ebenso für $B$. Der Sender liegt auf beiden Kreisen.
  ---
  **a)** $(x - 8)^2 + (y - 4)^2 = 25$ ausmultipliziert: $x^2 - 16x + 64 + y^2 - 8y + 16 = 25$. Abgezogen von $x^2 + y^2 = 25$: $16x + 8y - 80 = 0$, also $2x + y = 10$.
  ---
  $y = 10 - 2x$ in $x^2 + y^2 = 25$: $5x^2 - 40x + 75 = 0$, also $x^2 - 8x + 15 = 0$ mit $x = 3$ oder $x = 5$. Orte $(3 \mid 4)$ und $(5 \mid 0)$.
  ---
  **b)** Abstand zu $C(9 \mid 0)$: von $(5 \mid 0)$ genau $4$ km, von $(3 \mid 4)$ etwa $7{,}2$ km. **Antwort:** Der Sender steht in $(5 \mid 0)$.
```

```aufgabe
id: ag-tangente-aussen-fehler
titel: Fehlt eine Tangente?
niveau: 2
lernziel: 7
kompetenz: begruenden
angabe: |
  Gesucht sind die Tangenten von $P(2 \mid 4)$ an $k: x^2 + y^2 = 4$. Elias setzt $y - 4 = k(x - 2)$ an. Aus der Bedingung „Abstand des
  Ursprungs gleich $2$“ erhält er nur $k = \frac34$ und schreibt: „Es gibt genau eine Tangente, nämlich $3x - 4y = -10$.“
teile:
  - typ: auswahl
    label: 'Stimmt das?'
    optionen:
      - 'Nein. Es gibt eine zweite Tangente, die senkrechte Gerade $x = 2$.'
      - 'Ja. Der Ansatz liefert alle Tangenten.'
      - 'Nein. Die zweite Tangente ist $y = 2$.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Der Ansatz $y - 4 = k(x - 2)$ erfasst nur Geraden mit einer Steigung. Senkrechte Geraden haben keine.
      - wert: 2
        meldung: '$y = 2$ geht nicht durch $P(2 \mid 4)$. Gesucht sind Geraden durch $P$.'
  - typ: vektor
    label: 'Berührpunkt der fehlenden Tangente'
    namen: ["x", "y"]
    loesung: ["2", "0"]
    fehler:
      - wert: ["0", "2"]
        meldung: 'Die fehlende Tangente ist senkrecht und geht durch $P$, also $x = 2$. Wo berührt sie den Kreis?'
hinweise:
  - 'Von einem Punkt außerhalb gibt es immer zwei Tangenten. Welche Geraden durch $P$ erfasst der Ansatz $y - 4 = k(x - 2)$ nicht?'
  - 'Prüfe die Gerade $x = 2$: Ihr Abstand vom Ursprung ist $2$.'
loesung: |
  **Ansatz:** $P$ liegt außen ($4 + 16 = 20 > 4$). Es muss also zwei Tangenten geben.
  ---
  Der Steigungsansatz $y - 4 = k(x - 2)$ beschreibt nur Geraden mit einer Steigung. Die senkrechte Gerade durch $P$, also $x = 2$, fehlt. Ihr Abstand vom Ursprung ist $2 = r$. Sie ist die zweite Tangente.
  ---
  Ihr Berührpunkt ist $(2 \mid 0)$, denn $x = 2$ in $x^2 + y^2 = 4$ ergibt $y^2 = 0$. Kontrolle mit der Polaren $2x + 4y = 4$: Der Punkt $(2 \mid 0)$ erfüllt sie.
```

```aufgabe
id: ag-kreise-beruehren
titel: Zwei Kreise sollen sich berühren
niveau: 3
lernziel: 7
kompetenz: anwenden
angabe: |
  Gegeben ist $k_1: x^2 + y^2 = 9$. Ein zweiter Kreis $k_2$ hat den Mittelpunkt $M_2(8 \mid 6)$.

  a) Welchen Radius muss $k_2$ haben, damit er $k_1$ von außen berührt?

  b) Bestimme den Berührpunkt.

  c) Welchen Radius muss $k_2$ haben, damit $k_1$ ganz in $k_2$ liegt und ihn von innen berührt?

  d) Bestimme den Berührpunkt für c).
teile:
  - typ: zahl
    label: 'a) $r_2$'
    loesung: "10 - 3"
    fehler:
      - wert: "10"
        meldung: Das ist der Abstand der Mittelpunkte. Davon gehört der Radius $3$ zu $k_1$.
  - typ: vektor
    label: 'b) Berührpunkt'
    namen: ["x", "y"]
    loesung: ["2.4", "1.8"]
    fehler:
      - wert: ["3", "3"]
        meldung: 'Der Berührpunkt liegt auf der Strecke $M_1 M_2$ im Abstand $3$ von $M_1$, also bei $\frac{3}{10}\cdot\begin{pmatrix} 8 \\ 6 \end{pmatrix}$.'
  - typ: zahl
    label: 'c) $r_2$'
    loesung: "10 + 3"
  - typ: vektor
    label: 'd) Berührpunkt'
    namen: ["x", "y"]
    loesung: ["-2.4", "-1.8"]
    fehler:
      - wert: ["2.4", "1.8"]
        meldung: Bei innerer Berührung liegt der Berührpunkt auf der anderen Seite von $M_1$, also von $M_2$ abgewandt.
hinweise:
  - 'Der Abstand der Mittelpunkte ist $e = |M_1 M_2| = 10$. Außen berühren: $e = r_1 + r_2$. Innen berühren: $e = r_2 - r_1$.'
  - 'Der Berührpunkt liegt auf der Geraden durch beide Mittelpunkte, im Abstand $3$ von $M_1 = O$. Der Einheitsvektor von $M_1$ nach $M_2$ ist $\begin{pmatrix} 0{,}8 \\ 0{,}6 \end{pmatrix}$.'
loesung: |
  **Ansatz:** Berührende Kreise haben ihren Berührpunkt auf der Verbindungsgeraden der Mittelpunkte. Die Radien ergeben sich aus dem Abstand $e$ der Mittelpunkte.
  ---
  $e = \sqrt{64 + 36} = 10$. **a)** Außen: $3 + r_2 = 10$, also $r_2 = 7$.
  ---
  **b)** Einheitsvektor von $O$ nach $M_2$: $\frac{1}{10}\begin{pmatrix} 8 \\ 6 \end{pmatrix} = \begin{pmatrix} 0{,}8 \\ 0{,}6 \end{pmatrix}$. Berührpunkt $3\cdot\begin{pmatrix} 0{,}8 \\ 0{,}6 \end{pmatrix} = (2{,}4 \mid 1{,}8)$. Probe: $5{,}76 + 3{,}24 = 9$ und $(2{,}4 - 8)^2 + (1{,}8 - 6)^2 = 31{,}36 + 17{,}64 = 49 = 7^2$.
  ---
  **c)** Innen: $r_2 - 3 = 10$, also $r_2 = 13$. **d)** Der Berührpunkt liegt von $M_2$ aus gesehen hinter $O$: $-3\cdot\begin{pmatrix} 0{,}8 \\ 0{,}6 \end{pmatrix} = (-2{,}4 \mid -1{,}8)$. Probe: Abstand zu $M_2$ ist $\sqrt{10{,}4^2 + 7{,}8^2} = \sqrt{169} = 13$.
```

## Kugel, Zylinder und Schnittkreis

```aufgabe
id: ag-kugel-vorwissen
titel: Mittelpunkt und Radius eines Kreises
art: check
niveau: 1
angabe: |
  Bestimme Mittelpunkt und Radius des Kreises $x^2 + y^2 - 6x = 0$. Zum Nachlesen:
  [7.10 Der Kreis](/lernen/mathe3/analytische-geometrie/der-kreis).
teile:
  - typ: vektor
    label: '$M$'
    namen: ["x", "y"]
    loesung: ["3", "0"]
    fehler:
      - wert: ["-3", "0"]
        meldung: 'Aus $(x - 3)^2$ folgt $m_1 = +3$. Das Vorzeichen in der Klammer ist umgekehrt zur Koordinate.'
  - typ: zahl
    label: '$r$'
    loesung: "3"
    fehler:
      - wert: "9"
        meldung: Rechts steht $r^2 = 9$. Der Radius ist $3$.
loesung: |
  Quadratische Ergänzung: $x^2 - 6x = (x - 3)^2 - 9$. Also $(x - 3)^2 - 9 + y^2 = 0$.
  ---
  $(x - 3)^2 + y^2 = 9$. Mittelpunkt $(3 \mid 0)$, Radius $3$.
```

Was im Raum dem Kreis entspricht, ist die **Kugel**: die Menge aller Punkte, die von einem Mittelpunkt $M$ denselben Abstand $r$
haben. Gemeint ist dabei nur die Oberfläche, wie die Haut eines Luftballons. Die gefüllte Kugel, also alle Punkte mit Abstand
**höchstens** $r$, beschreibt man mit „$\le$“ statt „$=$“.

### Die Kugelgleichung

Die Herleitung ist dieselbe wie beim Kreis in [7.10 Der Kreis](/lernen/mathe3/analytische-geometrie/der-kreis). Der Abstand
im Raum hat nur eine dritte Komponente. Der Abstand von $X(x \mid y \mid z)$ zu $M(m_1 \mid m_2 \mid m_3)$ ist $r$, quadriert ergibt das:

:::definition[Kugelgleichung]
Die Kugel $K$ mit Mittelpunkt $M(m_1 \mid m_2 \mid m_3)$ und Radius $r > 0$ hat die Gleichung
$$K: (x - m_1)^2 + (y - m_2)^2 + (z - m_3)^2 = r^2.$$
:::

**Nichtbeispiel:** $(x - 1)^2 + (y - 2)^2 = 9$ ist **im Raum** keine Kugel und auch kein Kreis, sondern ein Zylinder. Dazu gleich
mehr. Mittelpunkt und Radius bestimmt man wieder durch quadratische Ergänzung, jetzt in drei Variablen. Die Lage eines Punktes
prüft man wie beim Kreis: einsetzen und mit $r^2$ vergleichen.

:::beispiel[Mittelpunkt und Radius einer Kugel]
Gegeben ist $x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0$.

1. **Ergänzen:** $x^2 - 4x = (x - 2)^2 - 4$, $\;y^2 + 2y = (y + 1)^2 - 1$, $\;z^2 - 6z = (z - 3)^2 - 9$.
2. **Einsetzen und Zahlen nach rechts:** $(x - 2)^2 + (y + 1)^2 + (z - 3)^2 = 4 + 1 + 9 - 5 = 9$.
3. **Ablesen:** $M(2 \mid -1 \mid 3)$ und $r = 3$.
4. **Probe mit einem Kugelpunkt:** $(5 \mid -1 \mid 3)$ ergibt in der ursprünglichen Gleichung $25 + 1 + 9 - 20 - 2 - 18 + 5 = 0$.
:::

### Die Tangentialebene

Wie die Tangente beim Kreis steht die **Tangentialebene** einer Kugel normal auf dem Berührradius. Im Kugelpunkt $T$ hat sie den
Normalvektor $\overrightarrow{MT}$:
$$\tau: \overrightarrow{MT}\cdot(X - T) = 0.$$
Der griechische Buchstabe $\tau$ („tau“) ist hier einfach der Name der Tangentialebene.
Ein Bild: Ein Ball liegt auf dem Boden. Der Boden ist die Tangentialebene im Auflagepunkt, und der Radius zum Auflagepunkt zeigt
senkrecht nach unten.

:::beispiel[Eine Tangentialebene]
Gegeben ist $K: (x - 1)^2 + (y + 2)^2 + z^2 = 9$ und $T(3 \mid -1 \mid 2)$.

1. **$T$ liegt auf $K$:** $4 + 1 + 4 = 9$.
2. **Normalvektor:** $\overrightarrow{MT} = \begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$.
3. **Ebene:** $2x + y + 2z = 2\cdot 3 + 1\cdot(-1) + 2\cdot 2 = 9$.
4. **Kontrolle:** $d(M, \tau) = \frac{|2 - 2 + 0 - 9|}{3} = 3 = r$. Die Ebene berührt die Kugel.
:::

### Kugel und Ebene: der Schnittkreis

Schneidet man einen Apfel mit einem geraden Messer, ist die Schnittfläche rund. Genauso schneidet eine Ebene eine Kugel in einem
**Kreis**, berührt sie in einem Punkt oder verfehlt sie. Entscheidend ist wieder der Abstand $d = d(M, E)$:

| Abstand | Lage |
|---|---|
| $d > r$ | Kein gemeinsamer Punkt. |
| $d = r$ | $E$ ist eine Tangentialebene, es gibt einen Berührpunkt. |
| $d < r$ | $E$ schneidet $K$ in einem Kreis, dem Schnittkreis. |

:::satz[Schnittkreis]
Ist $d = d(M, E) < r$, dann schneidet die Ebene $E$ die Kugel in einem Kreis mit
- dem Mittelpunkt $M'$, dem Lotfußpunkt von $M$ auf $E$,
- dem Radius $\rho = \sqrt{r^2 - d^2}$. Der griechische Buchstabe $\rho$ heißt „rho“.
:::

**Warum?** Wir nehmen einen beliebigen Punkt $X$ des Schnittkreises. Die Punkte $M$, $M'$ und $X$ bilden ein rechtwinkliges
Dreieck mit dem rechten Winkel bei $M'$. Denn $\overrightarrow{MM'}$ steht normal auf der Ebene, und $\overrightarrow{M'X}$ liegt in ihr. Die
Hypotenuse ist $|MX| = r$, die eine Kathete $|MM'| = d$. Nach Pythagoras ist $|M'X|^2 = r^2 - d^2$. Das gilt für **jeden**
Schnittpunkt $X$. Alle Schnittpunkte haben also denselben Abstand $\sqrt{r^2 - d^2}$ von $M'$. Sie liegen auf einem Kreis um $M'$.

```plot
x: [-11, 11]
y: [-11, 11]
gleich: true
kurven:
  - { x: "10*cos(t)", y: "10*sin(t)", t: [0, "2*pi"], label: "Kugel (Schnitt)", farbe: 0 }
strecken:
  - { von: [-11, 6], nach: [11, 6], farbe: 1 }
  - { von: [0, 0], nach: [0, 6], gestrichelt: true, farbe: 2 }
  - { von: [0, 0], nach: [8, 6], gestrichelt: true, farbe: 3 }
punkte:
  - { x: 0, y: 0, label: "M" }
  - { x: 0, y: 6, label: "M′" }
  - { x: 8, y: 6, label: "X" }
  - { x: -10.5, y: 6.6, label: "E" }
beschriftung: Seitenansicht einer Kugel mit Radius r = 10 und einer Ebene E im Abstand d = 6 vom Mittelpunkt. Im rechtwinkligen Dreieck M M′ X ist der Schnittkreisradius ρ = √(100 − 36) = 8.
```

:::beispiel[Ein Schnittkreis]
Die Kugel $K$ hat den Mittelpunkt $M(1 \mid 1 \mid -2)$ und den Radius $10$. Sie wird von $E: 2x - y + 2z = 15$ geschnitten.

1. **Abstand:** $d = \frac{|2 - 1 - 4 - 15|}{\sqrt{4 + 1 + 4}} = \frac{18}{3} = 6 < 10$. Es gibt einen Schnittkreis.
2. **Radius:** $\rho = \sqrt{10^2 - 6^2} = \sqrt{64} = 8$.
3. **Mittelpunkt:** Lot $X = M + t\cdot\begin{pmatrix} 2 \\ -1 \\ 2 \end{pmatrix}$ in $E$: $2(1 + 2t) - (1 - t) + 2(-2 + 2t) = 15$, also $-3 + 9t = 15$
   und $t = 2$. $M' = (1 + 4 \mid 1 - 2 \mid -2 + 4) = (5 \mid -1 \mid 2)$. Probe: $10 + 1 + 4 = 15$.

**Antwort:** Der Schnittkreis hat den Mittelpunkt $(5 \mid -1 \mid 2)$ und den Radius $8$.
:::

:::achtung[Den Schnittkreisradius als Differenz berechnet]
Im letzten Beispiel rechnet jemand: „$\rho = r - d = 10 - 6 = 4$.“ Das ist falsch. $r$ und $d$ liegen nicht auf einer Linie, sondern
bilden mit $\rho$ ein **rechtwinkliges** Dreieck. Richtig ist $\rho = \sqrt{r^2 - d^2} = 8$. Die Probe deckt den Fehler auf. Ein
Punkt $X$ des Schnittkreises muss von $M$ genau $r = 10$ entfernt sein. Mit $\rho = 4$ wäre $|MX| = \sqrt{6^2 + 4^2} = \sqrt{52} \approx 7{,}2$.
Mit $\rho = 8$ ist $|MX| = \sqrt{6^2 + 8^2} = 10$. Stimmt.
:::

### Fehlt eine Variable: der Zylinder

In der Ebene ist $x^2 + y^2 = 4$ ein Kreis. Liest man dieselbe Gleichung **im Raum**, kommt $z$ gar nicht vor. Jeder Punkt
$(x \mid y \mid z)$, dessen $x$ und $y$ die Gleichung erfüllen, gehört dazu, **egal welches $z$** er hat. Über und unter jedem Punkt
des Kreises liegt also eine ganze senkrechte Gerade. Zusammen bilden sie den Mantel eines unendlich langen **Zylinders** mit der
$z$-Achse als Achse und dem Radius $2$.

:::beispiel[Ein Zylindermantel]
Die Menge aller Punkte mit $x^2 + y^2 = 4$ und $0 \le z \le 3$ ist der Mantel eines Zylinders. Seine Achse ist die $z$-Achse, sein
Radius $2$ und seine Höhe $3$. Boden- und Deckfläche gehören nicht dazu. Sie hätten Punkte mit $x^2 + y^2 < 4$.

Zwei Proben: $(2 \mid 0 \mid 1{,}5)$ gehört dazu, denn $4 + 0 = 4$ und $0 \le 1{,}5 \le 3$. Der Punkt $(1 \mid 1 \mid 1)$ gehört **nicht** dazu,
denn $1 + 1 = 2 \neq 4$. Er liegt im Inneren des Zylinders.
:::

```plot
x: [-4, 5]
y: [-2, 5]
gleich: true
achsen: { x: "y", y: "z" }
kurven:
  - { x: "2*sin(t) - 0.7*cos(t)", y: "-0.7*cos(t)", t: [0, "2*pi"], label: "z = 0", farbe: 0 }
  - { x: "2*sin(t) - 0.7*cos(t)", y: "3 - 0.7*cos(t)", t: [0, "2*pi"], label: "z = 3", farbe: 0 }
strecken:
  - { von: [2.12, 0.23], nach: [2.12, 3.23], farbe: 0 }
  - { von: [-2.12, -0.23], nach: [-2.12, 2.77], farbe: 0 }
  - { von: [0, 0], nach: [-1.8, -1.8] }
punkte:
  - { x: -1.8, y: -1.8, label: "x", offen: true }
beschriftung: Schrägriss des Zylindermantels x² + y² = 4 mit 0 ≤ z ≤ 3. Der Grundkreis und der Deckkreis erscheinen wegen der schrägen x-Achse als Ellipsen. Die beiden senkrechten Linien sind die Umrisse des Mantels.
```

Das Prinzip gilt allgemein. **Fehlt eine Variable, dann ist die Figur in Richtung dieser Achse unendlich ausgezogen**. Aus einer
Geraden in der Ebene wird im Raum eine Ebene, aus einem Kreis ein Zylinder.

:::achtung[Eine Kreisgleichung im Raum als Kreis gelesen]
Zu $x^2 + y^2 = 4$ im Raum schreibt jemand: „Das ist ein Kreis in der $xy$-Ebene.“ Die Probe zeigt den Fehler. Der Punkt
$(2 \mid 0 \mid 7)$ erfüllt die Gleichung, denn $4 + 0 = 4$. Er liegt aber $7$ Einheiten über der $xy$-Ebene. Die Lösungsmenge ist also
viel größer als ein Kreis, nämlich ein ganzer Zylindermantel. Einen Kreis im Raum beschreibt man mit **zwei** Gleichungen, etwa
$x^2 + y^2 = 4$ und $z = 0$. Das ist der Schnitt des Zylinders mit einer Ebene.
:::

```aufgabe
id: ag-kugel-check-ebene
titel: Berührt die Ebene die Kugel?
art: check
niveau: 1
angabe: |
  Eine Kugel hat den Mittelpunkt $M(0 \mid 0 \mid 2)$ und den Radius $2$. Wie liegt der Boden $z = 0$ zur Kugel?
teile:
  - typ: auswahl
    optionen: ['Er ist eine Tangentialebene.', 'Er schneidet die Kugel in einem Kreis.', 'Er hat keinen Punkt mit der Kugel gemeinsam.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Der Abstand des Mittelpunkts vom Boden ist $2$, genau der Radius. Dann gibt es nur einen gemeinsamen Punkt.'
      - wert: 2
        meldung: 'Der Punkt $(0 \mid 0 \mid 0)$ liegt auf der Kugel und auf dem Boden: $0 + 0 + (0 - 2)^2 = 4$.'
loesung: |
  Abstand des Mittelpunkts vom Boden: $d = 2$. Das ist gleich $r = 2$.
  ---
  Also ist der Boden eine Tangentialebene. Die Kugel liegt auf ihm auf und berührt ihn im Punkt $(0 \mid 0 \mid 0)$.
```

:::merke[Rezept: Kugel und Ebene]
1. $M$ und $r$ bestimmen (quadratische Ergänzung in $x$, $y$ und $z$).
2. $d = d(M, E)$ mit der HNF.
3. $d < r$: Schnittkreis mit $\rho = \sqrt{r^2 - d^2}$. Mittelpunkt $M'$: Lot $X = M + t\cdot\vec n$ in $E$ einsetzen.
4. $d = r$: Tangentialebene. Berührpunkt ist der Lotfußpunkt. Tangentialebene in $T$: Normalvektor $\overrightarrow{MT}$.
5. Fehlt in einer Gleichung im Raum eine Variable, ist die Figur in dieser Richtung ausgezogen (Ebene, Zylinder).
:::

```reflexion
frage: Was beschreibt die Gleichung $x^2 + z^2 = 9$ im Raum, und wo liegt die Achse?
antwort: |
  In der Gleichung fehlt $y$. Also darf $y$ jeden Wert haben. In jeder Ebene $y = \text{konstant}$ ist die Bedingung ein Kreis mit
  Radius $3$ um den Punkt $(0 \mid y \mid 0)$. Alle diese Kreise zusammen bilden einen unendlich langen Zylindermantel. Seine Achse ist
  die $y$-Achse, denn in Richtung $y$ ist die Figur ausgezogen. Allgemein zeigt die fehlende Variable die Richtung der Achse an.
```

```aufgabe
id: ag-kugel-mr
titel: Mittelpunkt und Radius einer Kugel
niveau: 1
lernziel: 8
kompetenz: rechnen
angabe: |
  Bestimme Mittelpunkt und Radius der Kugel $x^2 + y^2 + z^2 + 4x - 2y - 8z + 12 = 0$.
teile:
  - typ: vektor
    label: '$M$'
    namen: ["x", "y", "z"]
    loesung: ["-2", "1", "4"]
    fehler:
      - wert: ["2", "-1", "-4"]
        meldung: 'Aus $(x + 2)^2$ folgt $m_1 = -2$. Das Vorzeichen in der Klammer ist umgekehrt zur Koordinate. Ebenso bei $y$ und $z$.'
  - typ: zahl
    label: '$r$'
    loesung: "sqrt(4 + 1 + 16 - 12)"
    anzeige: '3'
    fehler:
      - wert: "9"
        meldung: Rechts steht $r^2 = 9$. Der Radius ist die Wurzel.
      - wert: "sqrt(4 + 1 + 16 + 12)"
        meldung: 'Die $+12$ steht links. Auf die rechte Seite gebracht wird sie zu $-12$.'
hinweise:
  - 'Ergänze $x^2 + 4x$, $y^2 - 2y$ und $z^2 - 8z$ zu vollständigen Quadraten.'
loesung: |
  **Ansatz:** Quadratische Ergänzung in allen drei Variablen, dann alle Zahlen nach rechts.
  ---
  $(x + 2)^2 - 4 + (y - 1)^2 - 1 + (z - 4)^2 - 16 + 12 = 0$.
  ---
  $(x + 2)^2 + (y - 1)^2 + (z - 4)^2 = 4 + 1 + 16 - 12 = 9$. Also $M(-2 \mid 1 \mid 4)$ und $r = 3$.
```

```aufgabe
id: ag-kugel-punktlage
titel: Punkte und Kugel
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Gegeben ist $K: (x - 1)^2 + y^2 + (z + 2)^2 = 9$. Wo liegen $P(3 \mid 2 \mid -1)$, $Q(1 \mid 1 \mid 0)$, $R(4 \mid 1 \mid -2)$ und $S(1 \mid -3 \mid -2)$?
teile:
  - typ: auswahl
    label: 'auf der Kugel'
    mehrfach: true
    optionen: ['$P$', '$Q$', '$R$', '$S$']
    richtig: [0, 3]
    fehler:
      - wert: [0, 2, 3]
        meldung: 'Bei $R$ ist $9 + 1 + 0 = 10 > 9$. $R$ liegt außerhalb.'
      - wert: [0]
        meldung: 'Prüfe auch $S$: $0 + 9 + 0 = 9$.'
  - typ: auswahl
    label: 'im Inneren'
    mehrfach: true
    optionen: ['$P$', '$Q$', '$R$', '$S$']
    richtig: [1]
    fehler:
      - wert: [1, 2]
        meldung: '$R$ ergibt $10$. Das ist größer als $9$, also außen.'
hinweise:
  - 'Setze jeden Punkt in $(x - 1)^2 + y^2 + (z + 2)^2$ ein und vergleiche mit $r^2 = 9$.'
loesung: |
  **Ansatz:** Die linke Seite ist das Quadrat des Abstands vom Mittelpunkt $(1 \mid 0 \mid -2)$. Wir vergleichen mit $r^2 = 9$.
  ---
  $P$: $4 + 4 + 1 = 9$, auf $K$. $Q$: $0 + 1 + 4 = 5 < 9$, innen.
  ---
  $R$: $9 + 1 + 0 = 10 > 9$, außen. $S$: $0 + 9 + 0 = 9$, auf $K$.
```

```aufgabe
id: ag-tangentialebene
titel: Tangentialebene an eine Kugel
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Kugel $K: (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$ enthält den Punkt $T(2 \mid 0 \mid 5)$. Bestimme die Tangentialebene in $T$ als
  $(a, b, c, d)$ für $ax + by + cz = d$ (jedes Vielfache ist richtig).
teile:
  - typ: vektor
    label: '$(a, b, c, d)$'
    namen: ["a", "b", "c", "d"]
    vielfaches: true
    loesung: ["1", "2", "2", "12"]
    fehler:
      - wert: ["1", "2", "2", "3"]
        meldung: 'Der Normalvektor stimmt. Die rechte Seite gehört aber zum Berührpunkt $T$, nicht zum Mittelpunkt: $d = 1\cdot 2 + 2\cdot 0 + 2\cdot 5$.'
      - wert: ["2", "0", "5", "29"]
        meldung: Du hast den Ortsvektor von $T$ als Normalvektor genommen. Der Normalvektor ist der Radius $\overrightarrow{MT} = T - M$.
hinweise:
  - 'Der Normalvektor ist $\overrightarrow{MT}$ mit $M(1 \mid -2 \mid 3)$.'
  - 'Die rechte Seite ist $\overrightarrow{MT}\cdot T$.'
loesung: |
  **Ansatz:** Die Tangentialebene steht normal auf dem Berührradius.
  ---
  Probe: $1 + 4 + 4 = 9$, also liegt $T$ auf $K$. $M(1 \mid -2 \mid 3)$, $\overrightarrow{MT} = \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}$.
  ---
  $\tau: x + 2y + 2z = 1\cdot 2 + 2\cdot 0 + 2\cdot 5 = 12$.
  ---
  Kontrolle: $d(M, \tau) = \frac{|1 - 4 + 6 - 12|}{3} = 3 = r$.
```

```aufgabe
id: ag-schnittkreis
titel: Schnittkreis von Kugel und Ebene
niveau: 2
lernziel: 8
kompetenz: rechnen
angabe: |
  Die Kugel $K$ hat den Mittelpunkt $M(1 \mid 2 \mid -1)$ und den Radius $5$. Zeige, dass die Ebene $E: 2x + y + 2z = 11$ die Kugel in
  einem Kreis schneidet, und bestimme dessen Mittelpunkt und Radius.
teile:
  - typ: zahl
    label: '$d(M, E)$'
    loesung: "abs(2 + 2 - 2 - 11)/3"
    fehler:
      - wert: "9"
        meldung: Teile noch durch die Länge des Normalvektors, $\sqrt{4 + 1 + 4} = 3$.
  - typ: vektor
    label: 'Mittelpunkt des Schnittkreises'
    namen: ["x", "y", "z"]
    loesung: ["3", "3", "1"]
    fehler:
      - wert: ["1", "2", "-1"]
        meldung: Das ist der Kugelmittelpunkt. Der Mittelpunkt des Schnittkreises liegt in der Ebene, im Lotfußpunkt von $M$.
  - typ: zahl
    label: 'Radius $\rho$'
    loesung: "sqrt(25 - 9)"
    fehler:
      - wert: "2"
        meldung: '$\rho$ ist nicht $r - d$. Radius, Abstand und $\rho$ bilden ein rechtwinkliges Dreieck: $\rho = \sqrt{r^2 - d^2}$.'
hinweise:
  - Berechne den Abstand mit der HNF und vergleiche mit $r = 5$.
  - 'Mittelpunkt: Lot $X = M + t\cdot\begin{pmatrix} 2 \\ 1 \\ 2 \end{pmatrix}$ in $E$ einsetzen. Radius mit Pythagoras.'
loesung: |
  **Ansatz:** Ist der Abstand kleiner als der Radius, entsteht ein Schnittkreis. Sein Mittelpunkt ist der Lotfußpunkt, sein Radius folgt aus Pythagoras.
  ---
  $d = \frac{|2 + 2 - 2 - 11|}{3} = \frac{9}{3} = 3 < 5$. Schnittkreis.
  ---
  Lot: $2(1 + 2t) + (2 + t) + 2(-1 + 2t) = 11$, also $2 + 9t = 11$ und $t = 1$. $M' = (3 \mid 3 \mid 1)$. Probe: $6 + 3 + 2 = 11$.
  ---
  $\rho = \sqrt{25 - 9} = 4$.
gefuehrt:
  - text: 'Berechne den Abstand $d(M, E)$ mit der HNF.'
    teil: { typ: zahl, loesung: "3", fehler: [ { wert: "9", meldung: 'Teile noch durch $|\vec n| = 3$.' } ] }
    erklaerung: '$\frac{|2 + 2 - 2 - 11|}{3} = 3$. Das ist kleiner als $r = 5$, es gibt also einen Schnittkreis.'
  - text: 'Setze das Lot $X = (1 + 2t \mid 2 + t \mid -1 + 2t)$ in $E$ ein. Welchen Wert hat $t$?'
    teil: { typ: zahl, loesung: "1" }
    erklaerung: '$2 + 4t + 2 + t - 2 + 4t = 11$, also $9t = 9$ und $t = 1$.'
  - text: 'Bestimme den Mittelpunkt $M''$ des Schnittkreises.'
    teil: { typ: vektor, namen: ["x", "y", "z"], loesung: ["3", "3", "1"] }
    erklaerung: '$M'' = (1 + 2 \mid 2 + 1 \mid -1 + 2) = (3 \mid 3 \mid 1)$.'
  - text: 'Berechne den Radius $\rho$ mit Pythagoras.'
    teil: { typ: zahl, loesung: "4" }
    erklaerung: '$\rho = \sqrt{r^2 - d^2} = \sqrt{25 - 9} = 4$.'
```

```aufgabe
id: ag-zylinder-deuten
titel: Eine Punktmenge im Raum deuten
niveau: 2
lernziel: 8
kompetenz: begruenden
quelle: nach Musterprüfung Winkler, Aufgabe 4 (abgewandelt)
angabe: |
  Wir betrachten die Menge aller Punkte $(x \mid y \mid z)$ im Raum mit $(x - 2)^2 + z^2 = 9$ und $0 \le y \le 4$.

  a) Welche Gestalt hat diese Menge?

  b) Welche Punkte gehören dazu? Wähle alle richtigen aus.
teile:
  - typ: auswahl
    label: 'a)'
    optionen:
      - 'der Mantel eines Zylinders mit Radius $3$ und Länge $4$, dessen Achse parallel zur $y$-Achse durch $(2 \mid 0 \mid 0)$ läuft'
      - 'eine Kugel mit Mittelpunkt $(2 \mid 0 \mid 0)$ und Radius $3$'
      - 'ein Kreis in der $xz$-Ebene'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Für eine Kugel müssten alle drei Variablen quadriert vorkommen. Hier fehlt $y$.
      - wert: 2
        meldung: '$y$ darf jeden Wert zwischen $0$ und $4$ haben. Die Menge reicht also weit über die $xz$-Ebene hinaus.'
  - typ: auswahl
    label: 'b)'
    mehrfach: true
    optionen: ['$(5 \mid 1 \mid 0)$', '$(2 \mid 2 \mid 3)$', '$(2 \mid 5 \mid 3)$', '$(4 \mid 0 \mid 2)$']
    richtig: [0, 1]
    fehler:
      - wert: [0, 1, 2]
        meldung: 'Bei $(2 \mid 5 \mid 3)$ stimmt die Gleichung, aber $y = 5$ liegt außerhalb von $0 \le y \le 4$.'
      - wert: [0, 1, 3]
        meldung: 'Prüfe $(4 \mid 0 \mid 2)$: $(4 - 2)^2 + 2^2 = 8 \neq 9$.'
hinweise:
  - Welche Variable fehlt in der Gleichung? In diese Richtung ist die Figur ausgezogen.
  - 'Ein Punkt gehört dazu, wenn er die Gleichung erfüllt **und** $0 \le y \le 4$ gilt.'
loesung: |
  **Ansatz:** In der Gleichung fehlt $y$. In der $xz$-Ebene ist $(x - 2)^2 + z^2 = 9$ ein Kreis um $(2 \mid 0)$ mit Radius $3$. Im Raum wird er in $y$-Richtung ausgezogen.
  ---
  **a)** Mit $0 \le y \le 4$ entsteht der Mantel eines Zylinders der Länge $4$. Seine Achse läuft parallel zur $y$-Achse durch $(2 \mid 0 \mid 0)$, sein Radius ist $3$.
  ---
  **b)** $(5 \mid 1 \mid 0)$: $9 + 0 = 9$ und $y = 1$. Gehört dazu. $(2 \mid 2 \mid 3)$: $0 + 9 = 9$ und $y = 2$. Gehört dazu.
  ---
  $(2 \mid 5 \mid 3)$: Gleichung erfüllt, aber $y = 5 > 4$. $(4 \mid 0 \mid 2)$: $4 + 4 = 8 \neq 9$. Beide gehören nicht dazu.
```

```aufgabe
id: ag-kugel-ebene-lage
titel: Waagrechte Ebenen schneiden eine Kugel
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Gegeben ist die Kugel $K: x^2 + y^2 + z^2 - 2z = 8$ und die waagrechten Ebenen $E_c: z = c$.

  a) Für welche Werte von $c$ ist $E_c$ eine Tangentialebene? Gib beide an, getrennt durch einen Strichpunkt.

  b) Wie groß ist der Radius des Schnittkreises für $c = 3$? Runde auf zwei Dezimalstellen.
teile:
  - typ: menge
    label: 'a) $c$'
    loesung: ["-2", "4"]
    fehler:
      - wert: ["-3", "3"]
        meldung: 'Der Mittelpunkt liegt nicht im Ursprung. Ergänze zuerst: $x^2 + y^2 + (z - 1)^2 = 9$. Der Mittelpunkt hat die Höhe $1$.'
      - wert: ["4"]
        meldung: 'Es gibt zwei waagrechte Tangentialebenen: eine oben und eine unten an der Kugel.'
  - typ: zahl
    label: 'b) $\rho$'
    loesung: "sqrt(9 - 4)"
    fehler:
      - wert: "1"
        meldung: '$\rho$ ist nicht $r - d = 3 - 2$, sondern $\sqrt{r^2 - d^2}$.'
hinweise:
  - 'Ergänze $z^2 - 2z = (z - 1)^2 - 1$. Dann kennst du $M$ und $r$.'
  - 'Die Ebene $z = c$ hat vom Mittelpunkt den Abstand $|c - 1|$.'
loesung: |
  **Ansatz:** Mit $M$ und $r$ hängt alles am Abstand der Ebene $z = c$ vom Mittelpunkt.
  ---
  $x^2 + y^2 + (z - 1)^2 - 1 = 8$, also $x^2 + y^2 + (z - 1)^2 = 9$. $M(0 \mid 0 \mid 1)$, $r = 3$.
  ---
  **a)** Tangential heißt $|c - 1| = 3$, also $c = 4$ (oben) oder $c = -2$ (unten).
  ---
  **b)** $c = 3$: $d = 2$, $\rho = \sqrt{9 - 4} = \sqrt 5 \approx 2{,}24$.
```

```aufgabe
id: ag-breitenkreis
titel: Wie lang ist der Breitenkreis von Wien?
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Wir modellieren die Erde als Kugel um den Ursprung mit dem Radius $R = 6370$ km. Die $z$-Achse zeigt zum Nordpol. Alle Orte auf dem
  $48.$ Breitengrad Nord (ungefähr die Breite von Wien) liegen in der waagrechten Ebene $z = R\cdot\sin 48°$.

  a) Wie weit ist diese Ebene vom Erdmittelpunkt entfernt? Runde auf ganze Kilometer.

  b) Berechne den Radius $\rho$ des Breitenkreises. Runde auf ganze Kilometer.

  c) Wie lang ist der Breitenkreis? Runde auf ganze Kilometer.

  d) Zwei Orte auf diesem Breitenkreis unterscheiden sich um $1°$ in der geographischen Länge. Wie weit sind sie entlang des
  Breitenkreises voneinander entfernt? Runde auf eine Dezimalstelle.
teile:
  - typ: zahl
    label: 'a) Abstand'
    einheit: km
    loesung: "6370*sin(inRad(48))"
    toleranz: 1
    fehler:
      - wert: "6370*sin(48)"
        meldung: 'Der Taschenrechner stand auf Bogenmaß. $48$ ist hier ein Winkel in Grad.'
  - typ: zahl
    label: 'b) $\rho$'
    einheit: km
    loesung: "sqrt(6370^2 - (6370*sin(inRad(48)))^2)"
    toleranz: 1
    fehler:
      - wert: "6370 - 6370*sin(inRad(48))"
        meldung: '$\rho$ ist nicht $R - d$. Erdradius, Abstand und $\rho$ bilden ein rechtwinkliges Dreieck.'
  - typ: zahl
    label: 'c) Länge'
    einheit: km
    loesung: "2*pi*sqrt(6370^2 - (6370*sin(inRad(48)))^2)"
    toleranz: 2
    fehler:
      - wert: "2*pi*6370"
        meldung: Das ist der Umfang des Äquators. Der Breitenkreis bei $48°$ ist kleiner, sein Radius ist $\rho$.
  - typ: zahl
    label: 'd) Entfernung'
    einheit: km
    loesung: "2*pi*sqrt(6370^2 - (6370*sin(inRad(48)))^2)/360"
    toleranz: 0.1
hinweise:
  - 'Die Ebene $z = d$ hat vom Ursprung den Abstand $d$. Der Breitenkreis ist der Schnittkreis von Kugel und Ebene.'
  - 'Schnittkreisradius $\rho = \sqrt{R^2 - d^2}$. Ein Grad Länge ist $\frac{1}{360}$ des ganzen Kreises.'
loesung: |
  **Ansatz:** Der Breitenkreis ist der Schnittkreis der Erdkugel mit der Ebene $z = R\sin 48°$. Sein Radius folgt aus Pythagoras.
  ---
  **a)** $d = 6370\cdot\sin 48° \approx 6370\cdot 0{,}7431 \approx 4734$ km.
  ---
  **b)** $\rho = \sqrt{6370^2 - 4733{,}8^2} \approx 4262$ km. Kontrolle: Das ist dasselbe wie $6370\cdot\cos 48°$, denn $\sin^2 + \cos^2 = 1$.
  ---
  **c)** Umfang $2\pi\rho \approx 2\pi\cdot 4262{,}4 \approx 26\,781$ km.
  ---
  **d)** $\frac{26\,781}{360} \approx 74{,}4$ km. **Plausibilität:** Am Äquator wären es $\frac{2\pi\cdot 6370}{360} \approx 111{,}2$ km. Auf $48°$ Nord ist der Kreis kleiner, also auch der Abstand.
```

## Ellipse, Hyperbel, Parabel und Parameterkurven (Vertiefung)

```aufgabe
id: ag-kegel-vorwissen
titel: Wo schneidet der Kreis die Achsen?
art: check
niveau: 1
angabe: |
  In welchen Punkten schneidet der Kreis $x^2 + y^2 = 9$ die $x$-Achse? Zum Nachlesen:
  [7.10 Der Kreis](/lernen/mathe3/analytische-geometrie/der-kreis).
teile:
  - typ: menge
    label: '$x$-Werte'
    loesung: ["-3", "3"]
    fehler:
      - wert: ["3"]
        meldung: '$x^2 = 9$ hat zwei Lösungen, $x = 3$ und $x = -3$.'
      - wert: ["-9", "9"]
        meldung: 'Auf der $x$-Achse ist $y = 0$. Dann bleibt $x^2 = 9$, also $x = \pm 3$, nicht $\pm 9$.'
loesung: |
  Auf der $x$-Achse ist $y = 0$. Es bleibt $x^2 = 9$.
  ---
  Also $x = -3$ oder $x = 3$. Die Schnittpunkte sind $(-3 \mid 0)$ und $(3 \mid 0)$.
```

Diese Lektion ist eine **Vertiefung**. Sie geht über den Stoff der Studienberechtigungsprüfung hinaus, gehört aber zum
Schulstoff der Oberstufe. Schneidet man einen Doppelkegel (zwei Eistüten, Spitze an Spitze) mit einer Ebene, entstehen je nach
Neigung der Ebene vier Kurven: Kreis, **Ellipse**, **Parabel** und **Hyperbel**. Man nennt sie zusammen **Kegelschnitte**. Den Kreis
kennst du schon. Die anderen drei haben ebenfalls einfache Gleichungen zweiten Grades.

### Die Ellipse: ein gestauchter Kreis

Eine **Ellipse** ist die Menge aller Punkte, für die die **Summe** der Abstände zu zwei festen Punkten $F_1$ und $F_2$ gleich ist. Diese
Punkte heißen **Brennpunkte**. Ein Bild: Ein Gärtner schlägt zwei Pflöcke ein, legt eine Schnurschleife darum und zieht mit einem
Stab die Schnur straff herum. Die Spur ist eine Ellipse.

:::definition[Ellipse in Hauptlage]
Eine Ellipse mit Mittelpunkt im Ursprung und Achsen entlang der Koordinatenachsen hat die Gleichung
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \qquad (a \ge b > 0).$$
Dabei ist $a$ die **große Halbachse** (der Abstand vom Mittelpunkt zum Scheitel auf der $x$-Achse) und $b$ die **kleine Halbachse**.
Die Brennpunkte sind $F_{1,2}(\pm e \mid 0)$ mit $e^2 = a^2 - b^2$. Die Abstandssumme ist $2a$.
:::

Für $a = b = r$ wird daraus $x^2 + y^2 = r^2$, ein Kreis. **Nichtbeispiel:** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ ist keine Ellipse.
Das Minus macht daraus eine Hyperbel.

:::beispiel[Kenngrößen einer Ellipse]
Gegeben ist $9x^2 + 25y^2 = 225$. Wir teilen durch $225$, damit rechts $1$ steht: $\frac{x^2}{25} + \frac{y^2}{9} = 1$.

1. **Halbachsen:** $a = 5$ und $b = 3$. Die Ellipse reicht von $-5$ bis $5$ auf der $x$-Achse und von $-3$ bis $3$ auf der $y$-Achse.
2. **Brennpunkte:** $e^2 = 25 - 9 = 16$, also $e = 4$ und $F_{1,2}(\pm 4 \mid 0)$.
3. **Probe mit einem Punkt:** $P(4 \mid 1{,}8)$ liegt auf der Ellipse, denn $\frac{16}{25} + \frac{3{,}24}{9} = 0{,}64 + 0{,}36 = 1$. Sein Abstand
   zu $F_1(4 \mid 0)$ ist $1{,}8$, zu $F_2(-4 \mid 0)$ ist er $\sqrt{64 + 3{,}24} = 8{,}2$. Die Summe ist $10 = 2a$.
:::

```plot
x: [-6, 6]
y: [-4, 4]
gleich: true
kurven:
  - { x: "5*cos(t)", y: "3*sin(t)", t: [0, "2*pi"], label: "Ellipse", farbe: 0 }
strecken:
  - { von: [4, 0], nach: [4, 1.8], gestrichelt: true, farbe: 1 }
  - { von: [-4, 0], nach: [4, 1.8], gestrichelt: true, farbe: 2 }
punkte:
  - { x: 4, y: 0, label: "F₁", farbe: 3 }
  - { x: -4, y: 0, label: "F₂", farbe: 3 }
  - { x: 4, y: 1.8, label: "P(4 | 1,8)" }
beschriftung: Die Ellipse x²/25 + y²/9 = 1 mit den Brennpunkten F₁(4 | 0) und F₂(−4 | 0). Für den Punkt P sind die beiden gestrichelten Abstände 1,8 und 8,2 lang. Ihre Summe ist 10, also das Doppelte der großen Halbachse.
```

:::achtung[Die Hyperbelformel für die Brennpunkte genommen]
Bei $\frac{x^2}{25} + \frac{y^2}{9} = 1$ rechnet jemand $e = \sqrt{25 + 9} \approx 5{,}83$. Dann lägen die Brennpunkte **außerhalb** der Ellipse,
denn sie reicht nur bis $x = 5$. Das kann nicht stimmen: Die Pflöcke des Gärtners stehen immer innen. Bei der Ellipse gilt
$e^2 = a^2 - b^2$, also $e = 4$. Das Plus gehört zur Hyperbel.
:::

### Die Hyperbel und die Parabel

Eine **Hyperbel** ist die Menge aller Punkte, für die der **Unterschied** der Abstände zu zwei Brennpunkten gleich ist. Ihre Gleichung
in Hauptlage ist
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1,$$
mit Brennpunkten $(\pm e \mid 0)$, $e^2 = a^2 + b^2$, und dem Abstandsunterschied $2a$. Sie hat zwei getrennte Äste. Weit draußen nähern
sich die Äste den **Asymptoten** $y = \pm\frac ba\,x$. Das sind Geraden, denen die Kurve beliebig nahe kommt, ohne sie zu erreichen.

Eine **Parabel** ist die Menge aller Punkte, die von einem Brennpunkt $F$ und einer Geraden $\ell$, der **Leitlinie**, gleich weit entfernt
sind. Die Parabel $y^2 = 2px$ mit $p > 0$ hat den Brennpunkt $F\left(\frac p2 \,\middle|\, 0\right)$ und die Leitlinie $x = -\frac p2$. Die aus der
Schule bekannte Parabel $y = \frac{1}{2p}x^2$ ist dieselbe Kurve, nur um $90°$ gedreht.

:::beispiel[Hyperbel und Parabel]
**Hyperbel** $\frac{x^2}{16} - \frac{y^2}{9} = 1$: $a = 4$, $b = 3$, $e = \sqrt{16 + 9} = 5$. Asymptoten $y = \pm\frac34 x$. Der Punkt
$P(5 \mid 2{,}25)$ liegt auf ihr, denn $\frac{25}{16} - \frac{5{,}0625}{9} = 1{,}5625 - 0{,}5625 = 1$. Seine Abstände zu $(5 \mid 0)$ und
$(-5 \mid 0)$ sind $2{,}25$ und $\sqrt{100 + 5{,}0625} = 10{,}25$. Der Unterschied ist $8 = 2a$.

**Parabel** $y^2 = 8x$: $2p = 8$, also $p = 4$. Brennpunkt $F(2 \mid 0)$, Leitlinie $x = -2$. Der Punkt $(2 \mid 4)$ liegt auf ihr
($16 = 16$). Er ist von $F$ genau $4$ entfernt und von der Leitlinie ebenfalls $2 - (-2) = 4$.
:::

:::achtung[Steigung der Asymptoten vertauscht]
Bei $\frac{x^2}{16} - \frac{y^2}{9} = 1$ gibt jemand die Asymptoten $y = \pm\frac43 x$ an. Das ist der Kehrwert. Probe für große $x$: Dann ist
die $1$ im Vergleich klein, und es gilt ungefähr $\frac{x^2}{16} = \frac{y^2}{9}$, also $y = \pm\frac34 x$. Die Zahl unter $y^2$ steht im
Zähler der Steigung: $\pm\frac ba$.
:::

**Erkennen an der Gleichung.** Kommen $x^2$ und $y^2$ mit **gleichem** Vorzeichen vor, ist es eine Ellipse (bei gleichen Faktoren ein
Kreis). Bei **verschiedenen** Vorzeichen ist es eine Hyperbel. Kommt nur **eine** Variable quadriert vor und die andere linear, ist es
eine Parabel. Diese Regeln gelten für Gleichungen ohne gemischtes Glied $xy$, deren rechte Seite nach dem Umformen positiv ist.

```aufgabe
id: ag-kegel-check-widget
titel: Vorhersage zur Ellipse
art: check
niveau: 1
angabe: |
  Im folgenden Widget siehst du die obere Hälfte der Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Sage voraus: Welche Kurve entsteht, wenn
  du $a = b$ einstellst?
teile:
  - typ: auswahl
    optionen: ['ein Halbkreis', 'eine Parabel', 'eine Gerade']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Mit $a = b = r$ wird die Gleichung zu $x^2 + y^2 = r^2$. Das ist eine Kreisgleichung.'
      - wert: 2
        meldung: In der Gleichung bleiben die Quadrate stehen. Eine Gerade entsteht so nicht.
loesung: |
  Für $a = b = r$ steht da $\frac{x^2}{r^2} + \frac{y^2}{r^2} = 1$, also $x^2 + y^2 = r^2$.
  ---
  Das ist ein Kreis. Das Widget zeigt seine obere Hälfte, also einen Halbkreis.
```

```widget
name: parameter
titel: Die obere Hälfte einer Ellipse
props:
  f: "b*sqrt(1 - x^2/a^2)"
  parameter:
    - { name: a, min: 1, max: 6, step: 0.5, wert: 5 }
    - { name: b, min: 1, max: 6, step: 0.5, wert: 3 }
  x: [-7.2, 7.2]
  y: [-1, 6.5]
```

**Beobachte und erkläre.** Ändere $a$: Die Ellipse wird breiter oder schmäler, weil sie die $x$-Achse bei $\pm a$ schneidet. Ändere $b$:
Sie wird höher oder flacher, weil ihr höchster Punkt bei $y = b$ liegt. Für $a = b$ entsteht ein Halbkreis. Die untere Hälfte
$y = -b\sqrt{1 - \frac{x^2}{a^2}}$ ist das Spiegelbild an der $x$-Achse.

### Kurven in Parameterdarstellung

Eine Gerade haben wir als Bewegung beschrieben: Zu jeder Zeit $t$ gehört ein Punkt. Das funktioniert auch für gekrümmte Kurven. Eine
**Parameterdarstellung** gibt $x$ und $y$ getrennt als Funktionen eines Parameters an: $X(t) = \big(x(t) \,\big|\, y(t)\big)$.

- **Kreis:** $x = r\cos t$, $y = r\sin t$ mit $0 \le t < 2\pi$. Es gilt $x^2 + y^2 = r^2(\cos^2 t + \sin^2 t) = r^2$.
- **Ellipse:** $x = a\cos t$, $y = b\sin t$. Dann ist $\frac{x^2}{a^2} + \frac{y^2}{b^2} = \cos^2 t + \sin^2 t = 1$.

Den Parameter kann man oft **eliminieren**, also aus beiden Gleichungen entfernen. Dann erhält man eine Gleichung nur in $x$ und $y$.

:::beispiel[Die Bahn eines Balls]
Ein Ball wird geworfen. Nach $t$ Sekunden ist er $x = 10t$ Meter weit und $y = 20t - 5t^2$ Meter hoch.

1. **Parameter eliminieren:** Aus $x = 10t$ folgt $t = \frac{x}{10}$. Eingesetzt: $y = 20\cdot\frac{x}{10} - 5\cdot\frac{x^2}{100} = 2x - \frac{x^2}{20}$.
2. **Deutung:** Die Bahn ist eine nach unten offene Parabel.
3. **Landepunkt:** $y = 0$ ergibt $x\left(2 - \frac{x}{20}\right) = 0$, also $x = 40$ m. Der Ball landet nach $t = 4$ s.
:::

```plot
x: [-2, 42]
y: [-2, 22]
achsen: { x: "x in m", y: "y in m" }
kurven:
  - { x: "10*t", y: "20*t - 5*t^2", t: [0, 4], label: "Wurfbahn", farbe: 0 }
punkte:
  - { x: 10, y: 15, label: "t = 1 s" }
  - { x: 20, y: 20, label: "t = 2 s" }
  - { x: 40, y: 0, label: "t = 4 s" }
beschriftung: Die Wurfbahn x = 10t, y = 20t − 5t² als Parameterkurve. Gleiche Zeitabstände ergeben gleiche waagrechte Schritte. Die Bahn ist die Parabel y = 2x − x²/20.
```

:::merke[Übersicht: Kegelschnitte in Hauptlage]
| Kurve | Gleichung | Kenngrößen |
|---|---|---|
| Ellipse | $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ | Brennpunkte $(\pm e \mid 0)$ mit $e^2 = a^2 - b^2$. Abstandssumme $2a$. |
| Hyperbel | $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ | $e^2 = a^2 + b^2$. Asymptoten $y = \pm\frac ba x$. Abstandsunterschied $2a$. |
| Parabel | $y^2 = 2px$ | Brennpunkt $\left(\frac p2 \mid 0\right)$, Leitlinie $x = -\frac p2$. |
:::

```reflexion
frage: Warum ist der Kreis ein Sonderfall der Ellipse, und wo liegen dann die Brennpunkte?
antwort: |
  Setzt man in der Ellipsengleichung $a = b = r$, erhält man $x^2 + y^2 = r^2$, die Kreisgleichung. Für die Brennpunkte gilt
  $e^2 = a^2 - b^2 = 0$. Beide Brennpunkte fallen also in den Mittelpunkt. Die Abstandssumme $2a = 2r$ bedeutet dann: Jeder Punkt hat
  vom Mittelpunkt den Abstand $r$. Das ist genau die Definition des Kreises. Beim Gärtner stehen beide Pflöcke an derselben Stelle.
```

```aufgabe
id: ag-kegelschnitt-erkennen
titel: Welcher Kegelschnitt ist es?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Ordne jeder Gleichung die passende Kurve zu.

  (1) $4x^2 + 9y^2 = 36$ $\quad$ (2) $x^2 - y^2 = 4$ $\quad$ (3) $y^2 = 6x$ $\quad$ (4) $2x^2 + 2y^2 = 8$
teile:
  - typ: auswahl
    label: '(1)'
    optionen: ['Kreis', 'Ellipse', 'Hyperbel', 'Parabel']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Vor $x^2$ und $y^2$ stehen verschiedene Zahlen, $4$ und $9$. Ein Kreis bräuchte gleiche.
  - typ: auswahl
    label: '(2)'
    optionen: ['Kreis', 'Ellipse', 'Hyperbel', 'Parabel']
    richtig: [2]
    fehler:
      - wert: 0
        meldung: Das Minus vor $y^2$ passt nicht zum Kreis. Verschiedene Vorzeichen bedeuten Hyperbel.
  - typ: auswahl
    label: '(3)'
    optionen: ['Kreis', 'Ellipse', 'Hyperbel', 'Parabel']
    richtig: [3]
    fehler:
      - wert: 2
        meldung: Nur $y$ kommt quadriert vor, $x$ nicht. Das ist eine Parabel.
  - typ: auswahl
    label: '(4)'
    optionen: ['Kreis', 'Ellipse', 'Hyperbel', 'Parabel']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: 'Geteilt durch $2$ steht da $x^2 + y^2 = 4$. Gleiche Faktoren bedeuten Kreis, den Sonderfall der Ellipse.'
hinweise:
  - Achte auf die Vorzeichen und die Faktoren vor $x^2$ und $y^2$, und darauf, ob beide Variablen quadriert vorkommen.
loesung: |
  **Ansatz:** Gleiches Vorzeichen bei beiden Quadraten heißt Ellipse (gleiche Faktoren: Kreis), verschiedenes Vorzeichen heißt Hyperbel, nur ein Quadrat heißt Parabel.
  ---
  (1) Ellipse mit $\frac{x^2}{9} + \frac{y^2}{4} = 1$. (2) Hyperbel $\frac{x^2}{4} - \frac{y^2}{4} = 1$.
  ---
  (3) Parabel mit $p = 3$. (4) Kreis $x^2 + y^2 = 4$ mit Radius $2$.
```

```aufgabe
id: ag-ellipse-kenngroessen
titel: Halbachsen und Brennpunkte einer Ellipse
niveau: 1
lernziel: 9
kompetenz: rechnen
angabe: |
  Gegeben ist die Ellipse $16x^2 + 25y^2 = 400$. Bestimme die Halbachsen $a$ und $b$ und den Abstand $e$ der Brennpunkte vom Mittelpunkt.
teile:
  - typ: zahl
    label: '$a$'
    loesung: "5"
    fehler:
      - wert: "25"
        meldung: 'Unter $x^2$ steht $a^2 = 25$. Die Halbachse ist $a = 5$.'
  - typ: zahl
    label: '$b$'
    loesung: "4"
  - typ: zahl
    label: '$e$'
    loesung: "sqrt(25 - 16)"
    fehler:
      - wert: "sqrt(41)"
        meldung: 'Das ist die Formel der Hyperbel. Bei der Ellipse gilt $e^2 = a^2 - b^2$.'
hinweise:
  - 'Teile durch $400$, damit rechts $1$ steht: $\frac{x^2}{25} + \frac{y^2}{16} = 1$.'
loesung: |
  **Ansatz:** Zuerst die Hauptlage herstellen, dann ablesen.
  ---
  Durch $400$ geteilt: $\frac{x^2}{25} + \frac{y^2}{16} = 1$. Also $a = 5$ und $b = 4$.
  ---
  $e = \sqrt{25 - 16} = 3$. Die Brennpunkte sind $(\pm 3 \mid 0)$. Sie liegen innerhalb der Ellipse, wie es sein muss.
```

```aufgabe
id: ag-hyperbel-asymptoten
titel: Kenngrößen einer Hyperbel
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Gegeben ist die Hyperbel $9x^2 - 4y^2 = 36$. Bestimme die Scheitel auf der $x$-Achse, den Brennpunktabstand $e$ und die positive
  Steigung der Asymptoten. Runde $e$ auf zwei Dezimalstellen.
teile:
  - typ: zahl
    label: 'positiver Scheitel $x$'
    loesung: "2"
    fehler:
      - wert: "4"
        meldung: 'Unter $x^2$ steht $a^2 = 4$. Der Scheitel liegt bei $x = a = 2$.'
  - typ: zahl
    label: '$e$'
    loesung: "sqrt(4 + 9)"
    fehler:
      - wert: "sqrt(5)"
        meldung: 'Bei der Hyperbel gilt $e^2 = a^2 + b^2$, mit Plus.'
  - typ: zahl
    label: 'Steigung der Asymptote'
    loesung: "3/2"
    fehler:
      - wert: "2/3"
        meldung: 'Die Asymptoten sind $y = \pm\frac ba x$. Hier ist $b = 3$ und $a = 2$.'
hinweise:
  - 'Teile durch $36$: $\frac{x^2}{4} - \frac{y^2}{9} = 1$.'
  - 'Dann ist $a = 2$, $b = 3$, $e^2 = a^2 + b^2$ und die Asymptotensteigung $\frac ba$.'
loesung: |
  **Ansatz:** Hauptlage herstellen und die Kenngrößen mit den Hyperbelformeln bestimmen.
  ---
  $\frac{x^2}{4} - \frac{y^2}{9} = 1$, also $a = 2$ und $b = 3$. Scheitel $(\pm 2 \mid 0)$.
  ---
  $e = \sqrt{4 + 9} = \sqrt{13} \approx 3{,}61$. Asymptoten $y = \pm\frac32 x$.
  ---
  **Probe:** Für großes $x$ ist $9x^2 \approx 4y^2$, also $y \approx \pm\frac32 x$.
gefuehrt:
  - text: 'Teile die Gleichung durch $36$. Welche Zahl steht dann unter $x^2$?'
    teil: { typ: zahl, loesung: "4", fehler: [ { wert: "9", meldung: '$\frac{9x^2}{36} = \frac{x^2}{4}$. Unter $x^2$ steht $4$.' } ] }
    erklaerung: '$\frac{x^2}{4} - \frac{y^2}{9} = 1$. Also $a^2 = 4$ und $b^2 = 9$.'
  - text: 'Berechne $e^2 = a^2 + b^2$.'
    teil: { typ: zahl, loesung: "13" }
    erklaerung: '$e^2 = 4 + 9 = 13$, also $e = \sqrt{13}$.'
  - text: 'Welche positive Steigung haben die Asymptoten?'
    teil: { typ: zahl, loesung: "1.5", fehler: [ { wert: "2/3", meldung: 'Die Steigung ist $\frac ba$, nicht $\frac ab$.' } ] }
    erklaerung: '$\frac ba = \frac32$.'
```

```aufgabe
id: ag-parabel-brennpunkt
titel: Brennpunkt und Leitlinie einer Parabel
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Gegeben ist die Parabel $y^2 = 12x$.

  a) Gib die $x$-Koordinate des Brennpunkts an.

  b) Gib die Leitlinie in der Form $x = c$ an, also den Wert $c$.

  c) Der Punkt $P(3 \mid y_P)$ mit $y_P > 0$ liegt auf der Parabel. Wie weit ist er vom Brennpunkt entfernt?
teile:
  - typ: zahl
    label: 'a) Brennpunkt $x$'
    loesung: "3"
    fehler:
      - wert: "6"
        meldung: 'Aus $2p = 12$ folgt $p = 6$. Der Brennpunkt liegt aber bei $\frac p2$.'
      - wert: "12"
        meldung: '$12$ ist $2p$. Der Brennpunkt liegt bei $\frac p2 = 3$.'
  - typ: zahl
    label: 'b) $c$'
    loesung: "-3"
    fehler:
      - wert: "3"
        meldung: Die Leitlinie liegt auf der anderen Seite des Scheitels als der Brennpunkt.
  - typ: zahl
    label: 'c) Abstand'
    loesung: "6"
hinweise:
  - 'Vergleiche $y^2 = 12x$ mit $y^2 = 2px$.'
  - 'c) Berechne $y_P$ aus $y^2 = 36$. Der Abstand zum Brennpunkt ist gleich dem Abstand zur Leitlinie.'
loesung: |
  **Ansatz:** In $y^2 = 2px$ liegt der Brennpunkt bei $\left(\frac p2 \,\middle|\, 0\right)$ und die Leitlinie bei $x = -\frac p2$.
  ---
  $2p = 12$, also $p = 6$. Brennpunkt $F(3 \mid 0)$, Leitlinie $x = -3$.
  ---
  **c)** $y_P^2 = 36$, also $y_P = 6$. Abstand zu $F$: $\sqrt{0^2 + 6^2} = 6$. **Probe:** Abstand zur Leitlinie $3 - (-3) = 6$. Gleich, wie es die Definition verlangt.
```

```aufgabe
id: ag-parameterkurve
titel: Eine Parameterkurve erkennen
niveau: 2
lernziel: 9
kompetenz: verstehen
angabe: |
  Eine Kurve ist gegeben durch $x = 3\cos t$ und $y = 2\sin t$ mit $0 \le t < 2\pi$.

  a) Welche Gleichung erfüllen alle Punkte der Kurve?

  b) Welcher Punkt gehört zu $t = \frac\pi2$?

  c) Für welches $t$ erhält man den Punkt $(-3 \mid 0)$?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['$\frac{x^2}{9} + \frac{y^2}{4} = 1$', '$x^2 + y^2 = 13$', '$\frac{x^2}{3} + \frac{y^2}{2} = 1$']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: 'Es gilt $\frac{x}{3} = \cos t$. Quadriert ergibt das $\frac{x^2}{9}$, nicht $\frac{x^2}{3}$.'
      - wert: 1
        meldung: 'Setze $t = 0$ ein: $(3 \mid 0)$. Dann ist $x^2 + y^2 = 9$, nicht $13$. Die Kurve ist kein Kreis.'
  - typ: vektor
    label: 'b)'
    namen: ["x", "y"]
    loesung: ["0", "2"]
    fehler:
      - wert: ["3", "0"]
        meldung: 'Das ist der Punkt für $t = 0$. Bei $t = \frac\pi2$ ist $\cos t = 0$ und $\sin t = 1$.'
  - typ: zahl
    label: 'c) $t$'
    loesung: "pi"
    fehler:
      - wert: "180"
        meldung: 'In der Parameterdarstellung wird $t$ im Bogenmaß gemessen. $180°$ entspricht $\pi$.'
hinweise:
  - 'Es gilt $\cos^2 t + \sin^2 t = 1$. Drücke $\cos t$ und $\sin t$ durch $x$ und $y$ aus.'
  - 'c) $3\cos t = -3$ heißt $\cos t = -1$.'
loesung: |
  **Ansatz:** Den Parameter eliminiert man mit $\cos^2 t + \sin^2 t = 1$.
  ---
  **a)** $\cos t = \frac x3$ und $\sin t = \frac y2$. Also $\frac{x^2}{9} + \frac{y^2}{4} = 1$, eine Ellipse mit $a = 3$ und $b = 2$.
  ---
  **b)** $t = \frac\pi2$: $(3\cdot 0 \mid 2\cdot 1) = (0 \mid 2)$.
  ---
  **c)** $\cos t = -1$ und $\sin t = 0$ gilt für $t = \pi$. Probe: $(3\cos\pi \mid 2\sin\pi) = (-3 \mid 0)$.
```

```aufgabe
id: ag-ellipse-fehler
titel: Brennpunkte außerhalb der Ellipse?
niveau: 2
lernziel: 9
kompetenz: begruenden
angabe: |
  Für die Ellipse $\frac{x^2}{100} + \frac{y^2}{36} = 1$ rechnet Anna $e = \sqrt{100 + 36} \approx 11{,}66$ und gibt die Brennpunkte
  $(\pm 11{,}66 \mid 0)$ an.
teile:
  - typ: auswahl
    label: 'Wie erkennt man ohne Formel, dass das nicht stimmt?'
    optionen:
      - 'Die Ellipse reicht nur bis $x = \pm 10$. Die Brennpunkte müssen innerhalb liegen.'
      - 'Brennpunkte müssen immer ganzzahlig sein.'
      - 'Brennpunkte liegen immer auf der $y$-Achse.'
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Brennpunkte können beliebige Koordinaten haben. Vergleiche lieber mit der Ausdehnung der Ellipse.
      - wert: 2
        meldung: 'Bei $a > b$ liegt die große Achse auf der $x$-Achse. Dort liegen auch die Brennpunkte.'
  - typ: zahl
    label: 'Richtiges $e$'
    loesung: "8"
    fehler:
      - wert: "sqrt(136)"
        meldung: Das ist Annas Ergebnis mit der Hyperbelformel.
hinweise:
  - 'Wo schneidet die Ellipse die $x$-Achse? Können Brennpunkte außerhalb liegen?'
  - 'Bei der Ellipse gilt $e^2 = a^2 - b^2$.'
loesung: |
  **Ansatz:** Die Brennpunkte einer Ellipse liegen im Inneren, denn die Abstandssumme $2a$ muss größer sein als der Abstand $2e$ der Brennpunkte.
  ---
  Die Ellipse schneidet die $x$-Achse bei $\pm 10$. Brennpunkte bei $\pm 11{,}66$ lägen außerhalb. Das ist unmöglich.
  ---
  Richtig: $e = \sqrt{100 - 36} = 8$. Brennpunkte $(\pm 8 \mid 0)$. Anna hat die Formel der Hyperbel verwendet.
```

```aufgabe
id: ag-wurfparabel
titel: Die Bahn eines geworfenen Balls
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Ball wird aus $1{,}8$ m Höhe geworfen. Nach $t$ Sekunden ist er $x(t) = 12t$ Meter weit und $y(t) = 1{,}8 + 9t - 5t^2$ Meter hoch.

  a) Eliminiere $t$ und gib die Bahn als $y = f(x)$ an.

  b) Wie hoch ist der höchste Punkt der Bahn? Gib die Höhe in Metern an.

  c) Wie weit vom Abwurfpunkt landet der Ball auf dem Boden ($y = 0$)? Runde auf zwei Dezimalstellen.
teile:
  - typ: term
    label: 'a) $y =$'
    loesung: "1.8 + 0.75*x - 5*x^2/144"
    bereich: [0, 20]
    fehler:
      - wert: "1.8 + 9*x - 5*x^2"
        meldung: 'Du hast $x$ einfach für $t$ eingesetzt. Aus $x = 12t$ folgt aber $t = \frac{x}{12}$.'
  - typ: zahl
    label: 'b) höchster Punkt'
    einheit: m
    loesung: "1.8 + 9*0.9 - 5*0.9^2"
    fehler:
      - wert: "1.8 + 9*1.8 - 5*1.8^2"
        meldung: 'Du hast die Höhe bei $t = 1{,}8$ s berechnet. Dort ist der Ball schon wieder auf Abwurfhöhe. Der höchste Punkt ist der Scheitel der Parabel $y(t) = 1{,}8 + 9t - 5t^2$. Er liegt genau in der Mitte zwischen $t = 0$ und $t = 1{,}8$, also bei $t = 0{,}9$ s.'
  - typ: zahl
    label: 'c) Wurfweite'
    einheit: m
    loesung: "12*(9 + sqrt(81 + 36))/10"
    fehler:
      - wert: "12*1.8"
        meldung: 'Bei $t = 1{,}8$ s ist der Ball wieder auf $1{,}8$ m Höhe, nicht am Boden. Löse $1{,}8 + 9t - 5t^2 = 0$.'
hinweise:
  - 'a) $t = \frac{x}{12}$ einsetzen. b) Scheitel der Parabel in $t$: $t = \frac{9}{10}$.'
  - 'c) Löse $5t^2 - 9t - 1{,}8 = 0$ und nimm die positive Lösung. Dann $x = 12t$.'
loesung: |
  **Ansatz:** Die Parameterdarstellung beschreibt die Bewegung. Für die Bahnform eliminieren wir $t$, für Höhe und Weite rechnen wir mit $t$.
  ---
  **a)** $t = \frac{x}{12}$: $y = 1{,}8 + 9\cdot\frac{x}{12} - 5\cdot\frac{x^2}{144} = 1{,}8 + 0{,}75x - \frac{5x^2}{144}$. Eine nach unten offene Parabel.
  ---
  **b)** $y(t)$ hat den Scheitel bei $t = \frac{9}{2\cdot 5} = 0{,}9$ s. Höhe $1{,}8 + 8{,}1 - 4{,}05 = 5{,}85$ m, bei $x = 10{,}8$ m.
  ---
  **c)** $5t^2 - 9t - 1{,}8 = 0$: $t = \frac{9 + \sqrt{81 + 36}}{10} \approx 1{,}982$ s (die negative Lösung entfällt). Weite $x = 12\cdot 1{,}982 \approx 23{,}78$ m.
  ---
  **Plausibilität:** Ohne Abwurfhöhe landete der Ball bei $t = 1{,}8$ s, also $x = 21{,}6$ m. Wegen der $1{,}8$ m Starthöhe fliegt er etwas weiter.
```

## Gemischte Wiederholung

In der Prüfung steht nicht dabei, aus welchem Kapitel eine Aufgabe stammt. Du musst selbst erkennen, welches Werkzeug passt.
Deshalb mischt diese Lektion Aufgaben aus diesem Kapitel mit Aufgaben aus früheren Kapiteln. Gemischtes Üben fühlt sich schwerer an
als Üben in Blöcken. Es verankert den Stoff aber nachweislich besser. Löse jede Aufgabe zuerst ohne Hinweise.

```aufgabe
id: ag-wh-parallelogramm
titel: "Wiederholung Kapitel 6: Die vierte Ecke eines Parallelogramms"
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Von einem Parallelogramm $ABCD$ (Ecken in dieser Reihenfolge) kennt man $A(1 \mid 2)$, $B(5 \mid 3)$ und $C(6 \mid 7)$. Bestimme $D$. Zum
  Nachlesen: [Kapitel 6, Parallelogramme](/lernen/mathe3/vektoren/parallelogramme-und-besondere-vierecke).
teile:
  - typ: vektor
    label: '$D$'
    namen: ["x", "y"]
    loesung: ["2", "6"]
    fehler:
      - wert: ["10", "8"]
        meldung: 'Das ist $B + C - A$, die vierte Ecke eines **anderen** Parallelogramms. Bei $ABCD$ gilt $\overrightarrow{AD} = \overrightarrow{BC}$.'
hinweise:
  - 'Im Parallelogramm $ABCD$ ist $\overrightarrow{AD} = \overrightarrow{BC}$. Also $D = A + \overrightarrow{BC}$.'
loesung: |
  **Ansatz:** Gegenüberliegende Seiten eines Parallelogramms sind gleich lang und parallel. Darum ist $\overrightarrow{AD} = \overrightarrow{BC}$.
  ---
  $\overrightarrow{BC} = \begin{pmatrix} 1 \\ 4 \end{pmatrix}$, also $D = (1 + 1 \mid 2 + 4) = (2 \mid 6)$. Probe: $\overrightarrow{DC} = \begin{pmatrix} 4 \\ 1 \end{pmatrix} = \overrightarrow{AB}$.
```

```aufgabe
id: ag-wh-lgs-drei
titel: "Wiederholung Kapitel 3: Drei Ebenen, ein Punkt"
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Löse das Gleichungssystem $x + y + z = 6$, $\;x - y + z = 2$, $\;2x + y - z = 1$ und deute das Ergebnis geometrisch. Zum Nachlesen:
  [Kapitel 3, Das Gauß-Verfahren](/lernen/mathe3/lgs-matrizen/das-gauss-verfahren).
teile:
  - typ: vektor
    label: 'Lösung'
    namen: ["x", "y", "z"]
    loesung: ["1", "2", "3"]
    fehler:
      - wert: ["3", "2", "1"]
        meldung: '$x$ und $z$ sind vertauscht. Probe in der dritten Gleichung: $6 + 2 - 1 = 7 \neq 1$.'
  - typ: auswahl
    label: 'Deutung'
    optionen: ['Drei Ebenen schneiden sich in genau einem Punkt.', 'Drei Ebenen gehen durch eine gemeinsame Gerade.', 'Zwei der Ebenen sind parallel.']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Das System hat genau eine Lösung, nicht unendlich viele.
hinweise:
  - Ziehe die zweite Gleichung von der ersten ab. Dann bleibt nur $y$.
  - 'Mit $y = 2$ bleiben $x + z = 4$ und $2x - z = -1$. Addiere sie.'
loesung: |
  **Ansatz:** Jede Gleichung ist eine Ebene. Eine eindeutige Lösung ist ihr gemeinsamer Schnittpunkt.
  ---
  Erste minus zweite Gleichung: $2y = 4$, also $y = 2$. Dann $x + z = 4$ und $2x - z = -1$. Addiert: $3x = 3$, also $x = 1$ und $z = 3$.
  ---
  Lösung $(1 \mid 2 \mid 3)$. Probe: $6$, $2$ und $2 + 2 - 3 = 1$. Geometrisch schneiden sich die drei Ebenen in diesem einen Punkt.
```

```aufgabe
id: ag-wh-kosinussatz
titel: "Wiederholung Kapitel 5: Ein Winkel im Dreieck"
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Dreieck hat die Seiten $a = 5$, $b = 8$ und $c = 7$. Wie groß ist der Winkel $\gamma$ gegenüber der Seite $c$? Zum Nachlesen:
  [Kapitel 5, Sinussatz und Kosinussatz](/lernen/mathe3/trigonometrie/allgemeine-dreiecke-sinussatz-kosinussatz-flaeche).
teile:
  - typ: zahl
    label: '$\gamma$'
    einheit: "°"
    loesung: "inGrad(acos((25 + 64 - 49)/80))"
    fehler:
      - wert: "inGrad(acos((25 + 49 - 64)/70))"
        meldung: Das ist der Winkel gegenüber $b$. Im Kosinussatz für $\gamma$ steht $c^2$ allein auf der linken Seite.
hinweise:
  - 'Kosinussatz: $c^2 = a^2 + b^2 - 2ab\cos\gamma$, nach $\cos\gamma$ auflösen.'
loesung: |
  **Ansatz:** Drei Seiten gegeben, ein Winkel gesucht: Kosinussatz.
  ---
  $\cos\gamma = \frac{a^2 + b^2 - c^2}{2ab} = \frac{25 + 64 - 49}{80} = \frac12$, also $\gamma = 60°$.
```

```aufgabe
id: ag-wh-tangente-funktion
titel: "Wiederholung Kapitel 4: Sekante an einen Funktionsgraphen"
niveau: 2
lernziel: 0
kompetenz: rechnen
angabe: |
  Die Gerade $s$ geht durch die Punkte des Graphen von $f(x) = x^2 - 2x$ an den Stellen $x = 1$ und $x = 3$. Gib $s$ in der Form
  $y = kx + d$ an und außerdem einen Normalvektor von $s$ (jedes Vielfache ist richtig). Zum Nachlesen:
  [Kapitel 4, Quadratische Funktionen](/lernen/mathe3/funktionen/quadratische-funktionen) und
  [Kapitel 4, Lineare Funktionen](/lernen/mathe3/funktionen/lineare-funktionen).
teile:
  - typ: term
    label: '$y =$'
    loesung: "2x - 3"
    fehler:
      - wert: "2x + 3"
        meldung: 'Die Steigung stimmt, aber die Gerade muss durch $(3 \mid f(3)) = (3 \mid 3)$ gehen. Setze ein: $3 = 2\cdot 3 + d$.'
      - wert: "0.5x - 1.5"
        meldung: 'Die Steigung ist „Höhenunterschied durch waagrechten Abstand“, also $\frac{3 - (-1)}{3 - 1}$, nicht umgekehrt.'
  - typ: vektor
    label: 'Normalvektor'
    vielfaches: true
    loesung: ["2", "-1"]
    fehler:
      - wert: ["1", "2"]
        meldung: Das ist ein Richtungsvektor der Geraden, $\begin{pmatrix} 1 \\ k \end{pmatrix}$. Kippe ihn.
hinweise:
  - 'Berechne $f(1) = -1$ und $f(3) = 3$. Die Steigung ist $k = \frac{f(3) - f(1)}{3 - 1}$.'
  - 'Aus $y = kx + d$ wird $kx - y = -d$. Die Zahlen vor $x$ und $y$ bilden den Normalvektor.'
loesung: |
  **Ansatz:** Die Gerade geht durch die beiden Graphenpunkte $(1 \mid f(1))$ und $(3 \mid f(3))$. Ihre Steigung ist der Höhenunterschied durch den waagrechten Abstand.
  ---
  $f(1) = 1 - 2 = -1$ und $f(3) = 9 - 6 = 3$. Steigung $k = \frac{3 - (-1)}{3 - 1} = 2$. Aus $3 = 2\cdot 3 + d$ folgt $d = -3$. Also $y = 2x - 3$.
  ---
  Allgemeine Form $2x - y = 3$. Normalvektor $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$, Richtungsvektor $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$. Probe mit dem ersten Punkt: $2\cdot 1 - 3 = -1 = f(1)$.
```

```aufgabe
id: ag-wh-parameter-tangente
titel: "Wiederholung Kapitel 2: Diskriminante und Tangente"
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Für welche Werte von $d$ berührt die Gerade $y = x + d$ den Kreis $x^2 + y^2 = 8$? Löse mit der Diskriminante und kontrolliere mit
  der HNF. Gib beide Werte an, getrennt durch einen Strichpunkt. Zum Nachlesen:
  [Kapitel 2, Gleichungen mit Parameter](/lernen/mathe3/gleichungen/satz-von-vieta-und-gleichungen-mit-parameter).
teile:
  - typ: menge
    label: '$d$'
    loesung: ["-4", "4"]
    fehler:
      - wert: ["4"]
        meldung: Es gibt zwei Tangenten mit Steigung $1$, eine oberhalb und eine unterhalb des Kreises.
      - wert: ["-sqrt(8)", "sqrt(8)"]
        meldung: '$\sqrt 8$ ist der Radius. Die schräge Gerade hat aber den Abstand $\frac{|d|}{\sqrt 2}$ vom Mittelpunkt.'
hinweise:
  - 'Einsetzen ergibt $2x^2 + 2dx + d^2 - 8 = 0$.'
  - 'Tangente heißt: genau eine Lösung, also Diskriminante gleich $0$.'
loesung: |
  **Ansatz:** Berühren heißt genau ein gemeinsamer Punkt. Die quadratische Gleichung beim Einsetzen muss also die Diskriminante $0$ haben.
  ---
  $x^2 + (x + d)^2 = 8$ ergibt $2x^2 + 2dx + d^2 - 8 = 0$. Diskriminante $4d^2 - 8(d^2 - 8) = 64 - 4d^2$.
  ---
  $64 - 4d^2 = 0$, also $d = \pm 4$. Kontrolle mit der HNF: $x - y + d = 0$ hat vom Ursprung den Abstand $\frac{|d|}{\sqrt 2} = \frac{4}{\sqrt 2} = \sqrt 8 = r$.
```

```aufgabe
id: ag-wh-dreiecksflaeche
titel: "Wiederholung Kapitel 6: Fläche eines Dreiecks im Raum"
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Berechne den Flächeninhalt des Dreiecks mit den Ecken $A(1 \mid 0 \mid 0)$, $B(0 \mid 2 \mid 0)$ und $C(0 \mid 0 \mid 2)$. Runde auf zwei
  Dezimalstellen. Zum Nachlesen: [Kapitel 6, Das Kreuzprodukt](/lernen/mathe3/vektoren/das-kreuzprodukt-normalvektor-flaeche-und-volumen).
teile:
  - typ: zahl
    label: 'Fläche'
    loesung: "sqrt(24)/2"
    fehler:
      - wert: "sqrt(24)"
        meldung: Die Länge des Kreuzprodukts ist die Fläche des Parallelogramms. Das Dreieck ist halb so groß.
hinweise:
  - 'Fläche $= \frac12\,|\overrightarrow{AB}\times\overrightarrow{AC}|$.'
loesung: |
  **Ansatz:** Das Kreuzprodukt zweier Seitenvektoren hat als Länge die Fläche des Parallelogramms, das Dreieck ist die Hälfte.
  ---
  $\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix} -1 \\ 2 \\ 0 \end{pmatrix}\times\begin{pmatrix} -1 \\ 0 \\ 2 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \\ 2 \end{pmatrix}$, Länge $\sqrt{24}$. Fläche $\frac{\sqrt{24}}{2} = \sqrt 6 \approx 2{,}45$.
```

```aufgabe
id: ag-wh-verfahren-abstand
titel: Welches Verfahren passt beim Abstand?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Entscheide für jede Aufgabe, welches Verfahren passt. Rechne nichts aus.
teile:
  - typ: auswahl
    label: 'Abstand von $Q(1 \mid 2 \mid 3)$ zur Ebene $2x - y + 2z = 7$'
    optionen: ['HNF', 'Lotfußpunkt mit $\overrightarrow{FQ}\cdot\vec r = 0$ oder Kreuzprodukt', 'quadratische Ergänzung']
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Eine Ebene hat genau eine Normalrichtung. Darum gibt es für sie eine HNF, und die ist hier der schnellste Weg.
  - typ: auswahl
    label: 'Abstand von $Q(1 \mid 2 \mid 3)$ zur Geraden $X = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + t\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$'
    optionen: ['HNF', 'Lotfußpunkt mit $\overrightarrow{FQ}\cdot\vec r = 0$ oder Kreuzprodukt', 'quadratische Ergänzung']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Eine Gerade im Raum hat keine Normalform und damit keine HNF.
  - typ: auswahl
    label: 'Abstand von $(1 \mid 2)$ zur Geraden $3x - 4y = 1$ in der Ebene'
    optionen: ['HNF', 'Lotfußpunkt mit $\overrightarrow{FQ}\cdot\vec r = 0$ oder Kreuzprodukt', 'quadratische Ergänzung']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: Quadratische Ergänzung braucht man für Kreise und Kugeln, nicht für Abstände zu Geraden.
hinweise:
  - Frage dich jeweils, ob das Objekt genau eine Normalrichtung hat.
loesung: |
  **Ansatz:** Die HNF gibt es nur für Objekte mit genau einer Normalrichtung: Geraden in der Ebene und Ebenen im Raum.
  ---
  Ebene und Gerade in der Ebene: HNF. Gerade im Raum: Lotfußpunkt oder Kreuzprodukt.
```

```aufgabe
id: ag-wh-verfahren-winkel
titel: Welches Verfahren passt beim Winkel und bei der Lage?
niveau: 1
lernziel: 5
kompetenz: verstehen
angabe: |
  Entscheide jeweils, was man verwendet. Rechne nichts aus.
teile:
  - typ: auswahl
    label: 'Winkel zwischen einer Geraden und einer Ebene'
    optionen: ['Sinus mit Richtungsvektor und Normalvektor', 'Kosinus mit zwei Normalvektoren', 'Kosinus mit zwei Richtungsvektoren']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: Eine Ebene liefert direkt nur ihren Normalvektor. Mit ihm entsteht der Ergänzungswinkel, deshalb Sinus.
  - typ: auswahl
    label: 'Winkel zwischen zwei Ebenen'
    optionen: ['Sinus mit Richtungsvektor und Normalvektor', 'Kosinus mit zwei Normalvektoren', 'Kosinus mit zwei Richtungsvektoren']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Bei zwei Ebenen vergleicht man zwei gleichartige Vektoren, also steht der Kosinus.
  - typ: auswahl
    label: 'Lage zweier Geraden im Raum'
    optionen: ['nur die Richtungsvektoren vergleichen', 'Richtungen vergleichen, dann Punktprobe oder Gleichsetzen mit Prüfung der dritten Gleichung', 'Normalvektoren ablesen']
    richtig: [1]
    fehler:
      - wert: 0
        meldung: Die Richtungen allein unterscheiden nicht zwischen schneidend und windschief.
      - wert: 2
        meldung: Geraden im Raum haben keine Koordinatengleichung, aus der man einen Normalvektor ablesen könnte.
hinweise:
  - Überlege jeweils, welche Vektoren du sofort ablesen kannst.
loesung: |
  **Ansatz:** Sinus nur bei Gerade–Ebene, weil dort ein Richtungsvektor mit einem Normalvektor verglichen wird.
  ---
  Ebene–Ebene: Kosinus mit Normalvektoren. Geraden im Raum: zweistufiges Rezept aus [7.5 Geraden im Raum](/lernen/mathe3/analytische-geometrie/geraden-im-raum-parallel-schneidend-oder-windschief) (erst Richtungen vergleichen, dann Punktprobe oder Gleichsetzen).
```

## Prüfungsaufgaben

Diese Aufgaben haben das Format der schriftlichen Prüfung: mehrere Teilaufgaben, ein Sachkontext, Skizzen und Begründungen. Bei jeder
Aufgabe steht ein Zeitrichtwert. In der Prüfung hast du $120$ Minuten, erlaubt sind ein Taschenrechner ohne Grafik und die
Formelsammlung. Beginne jede Aufgabe mit einer **Skizze**: in der Ebene maßstäblich, im Raum als Schrägriss. Schreib zu jeder Teilaufgabe
zuerst den Ansatz, dann die Rechnung, dann einen Antwortsatz.

```aufgabe
id: ag-pruefung-geraden
titel: Zwei Straßen auf einem Lageplan
niveau: 3
punkte: 10
lernziel: 1
kompetenz: modellieren
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgabe 2.2 (abgewandelt)
angabe: |
  Zeitrichtwert: $20$ Minuten. Einheiten auf dem Lageplan: $10$ m.

  Eine Straße verläuft entlang $h: 12x - 5y = 4$. Eine zweite Straße soll durch den Punkt $P(14 \mid -1)$ führen: $g: X = \begin{pmatrix} 14 \\ -1 \end{pmatrix} + t\cdot\vec r$.

  a) Bestimme $\vec r$ so, dass $g$ parallel zu $h$ verläuft, und gib $g$ dann in allgemeiner Form an.

  b) Bestimme $\vec r$ so, dass $g$ normal auf $h$ steht, und normiere $\vec r$ (positive $x$-Komponente).

  c) Berechne für b) die Kreuzung $S$ von $g$ und $h$.

  d) Wie weit (in Metern) ist $P$ von der Straße $h$ entfernt? Wie hängt das mit c) und mit a) zusammen?
teile:
  - typ: vektor
    label: 'a) $g$ als $(a, b, c)$'
    namen: ["a", "b", "c"]
    vielfaches: true
    loesung: ["12", "-5", "173"]
    fehler:
      - wert: ["5", "12", "58"]
        meldung: Du hast den Normalvektor von $h$ als Richtung genommen. Dann stünde $g$ normal auf $h$.
  - typ: vektor
    label: 'b) $\vec r_0$'
    loesung: ["12/13", "-5/13"]
    fehler:
      - wert: ["12", "-5"]
        meldung: Der Vektor ist noch nicht normiert. Teile durch seine Länge $13$.
  - typ: vektor
    label: 'c) $S$'
    namen: ["x", "y"]
    loesung: ["2", "4"]
  - typ: zahl
    label: 'd) Abstand'
    einheit: m
    loesung: "10*abs(12*14 + 5 - 4)/13"
    fehler:
      - wert: "abs(12*14 + 5 - 4)/13"
        meldung: Das ist der Abstand in Planeinheiten. Eine Einheit sind $10$ m.
  - typ: text
    label: 'd) Zusammenhang'
    muster: |
      $S$ ist der Lotfußpunkt von $P$ auf $h$, denn $g$ ist in b) die Lotgerade. Darum ist $|PS| = 13$ Einheiten der Abstand. Derselbe Wert
      ist der Abstand der parallelen Geraden aus a): $\frac{|173 - 4|}{13} = 13$.
hinweise:
  - 'Normalvektor von $h$: $\begin{pmatrix} 12 \\ -5 \end{pmatrix}$, Länge $13$. Gekippt ergibt er den Richtungsvektor von $h$.'
  - 'c) $X = (14 + 12t \mid -1 - 5t)$ in $h$ einsetzen. d) HNF.'
loesung: |
  **a)** Parallel: Richtung von $h$, also $\vec r = \begin{pmatrix} 5 \\ 12 \end{pmatrix}$. Gleicher Normalvektor wie $h$: $12x - 5y = 12\cdot 14 - 5\cdot(-1) = 173$.
  ---
  **b)** Normal: $\vec r = \begin{pmatrix} 12 \\ -5 \end{pmatrix}$, Länge $\sqrt{144 + 25} = 13$, normiert $\frac{1}{13}\begin{pmatrix} 12 \\ -5 \end{pmatrix}$.
  ---
  **c)** $12(14 + 12t) - 5(-1 - 5t) = 4$, also $173 + 169t = 4$ und $t = -1$. $S = (14 - 12 \mid -1 + 5) = (2 \mid 4)$. Probe: $24 - 20 = 4$.
  ---
  **d)** HNF: $\frac{|168 + 5 - 4|}{13} = 13$ Einheiten, also $130$ m. Kontrolle: $|t|\cdot|\vec r| = 1\cdot 13$. **Antwort:** $P$ ist $130$ m von der Straße entfernt. $S$ ist der Lotfußpunkt, und $13$ ist auch der Abstand der Parallelen aus a).
```

```aufgabe
id: ag-pruefung-winkler
titel: Punktmengen im Raum
niveau: 3
punkte: 10
lernziel: 8
kompetenz: begruenden
quelle: nach Musterprüfung Winkler, Aufgabe 4 (abgewandelt)
angabe: |
  Zeitrichtwert: $20$ Minuten.

  a) Welche Gestalt hat die Menge aller Punkte $(x \mid y \mid z)$ mit $y^2 + z^2 = 4$ und $0 \le x \le 5$?

  b) Die Ebene $\varepsilon: 2x + 2y + z = 6$ (der griechische Buchstabe $\varepsilon$ heißt „epsilon“) enthält $A(3 \mid 0 \mid 0)$ und $B(0 \mid 3 \mid 0)$. Welche Ebenen schneiden $\varepsilon$ genau in der
  Geraden $AB$?

  c) Welche Ebenen haben mit $\varepsilon$ keinen Punkt gemeinsam?

  d) Welcher Punkt $X$ von $\varepsilon$ liegt dem Ursprung am nächsten?

  e) Wie weit ist $X$ vom Ursprung entfernt?
teile:
  - typ: text
    label: 'a)'
    muster: |
      Der Mantel eines Zylinders mit Radius $2$ und Länge $5$. Seine Achse ist die $x$-Achse, er reicht von $x = 0$ bis $x = 5$, ohne
      Deckflächen. Grund: $x$ kommt in der Gleichung nicht vor, die Kreise $y^2 + z^2 = 4$ werden in $x$-Richtung ausgezogen.
  - typ: auswahl
    label: 'b)'
    mehrfach: true
    optionen: ['$z = 0$', '$x + y = 3$', '$2x + 2y + 5z = 6$', '$2x + 2y + z = 9$', '$4x + 4y + 2z = 12$']
    richtig: [0, 1, 2]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: '$4x + 4y + 2z = 12$ ist das Doppelte von $\varepsilon$, also $\varepsilon$ selbst.'
  - typ: auswahl
    label: 'c)'
    mehrfach: true
    optionen: ['$2x + 2y + z = 0$', '$4x + 4y + 2z = 5$', '$x + y + z = 6$', '$4x + 4y + 2z = 12$']
    richtig: [0, 1]
    fehler:
      - wert: [0]
        meldung: '$4x + 4y + 2z = 5$ ist ebenfalls parallel: geteilt durch $2$ ergibt sich $2x + 2y + z = 2{,}5$.'
  - typ: vektor
    label: 'd) $X$'
    namen: ["x", "y", "z"]
    loesung: ["4/3", "4/3", "2/3"]
    fehler:
      - wert: ["2", "2", "1"]
        meldung: 'Das ist nur der Normalvektor. Der Punkt der Normalen ist $t\cdot\begin{pmatrix} 2 \\ 2 \\ 1 \end{pmatrix}$ mit $9t = 6$.'
  - typ: zahl
    label: 'e) Abstand'
    loesung: "2"
hinweise:
  - 'b) Eine Ebene durch $A$ und $B$, die nicht $\varepsilon$ ist. c) gleicher Normalvektor, andere rechte Seite (nach dem Kürzen).'
  - 'd) Die Normale durch den Ursprung besteht aus den Punkten $(2t \mid 2t \mid t)$.'
loesung: |
  **a)** In der $yz$-Ebene ist $y^2 + z^2 = 4$ ein Kreis mit Radius $2$. Weil $x$ fehlt, wird er in $x$-Richtung ausgezogen: Zylindermantel um die $x$-Achse der Länge $5$.
  ---
  **b)** $z = 0$, $x + y = 3$ und $2x + 2y + 5z = 6$ enthalten $A$ und $B$ und sind nicht $\varepsilon$. $2x + 2y + z = 9$ ist parallel, $4x + 4y + 2z = 12$ ist $\varepsilon$ selbst.
  ---
  **c)** Echt parallel: $2x + 2y + z = 0$ und $4x + 4y + 2z = 5$. $x + y + z = 6$ schneidet $\varepsilon$.
  ---
  **d)** Normale $(2t \mid 2t \mid t)$ in $\varepsilon$: $9t = 6$, $t = \frac23$. $X\left(\frac43 \,\middle|\, \frac43 \,\middle|\, \frac23\right)$.
  ---
  **e)** $|OX| = \frac23\cdot 3 = 2$. Kontrolle mit der HNF: $\frac{|0 - 6|}{3} = 2$.
```

```aufgabe
id: ag-pruefung-lgs-deutung
titel: Ein Gleichungssystem geometrisch deuten
niveau: 3
punkte: 8
lernziel: 5
kompetenz: begruenden
quelle: nach Musterprüfung Schranz-Kirlinger, Aufgabe 1.2 (abgewandelt)
angabe: |
  Zeitrichtwert: $15$ Minuten.

  Untersuche das Gleichungssystem $3x - 6y + 9z = 2$, $\;-x + 2y - 3z = 5$ auf Lösbarkeit und deute es geometrisch.

  a) Wie viele Lösungen hat es?

  b) Wie liegen die zugehörigen Ebenen? Wie weit sind sie voneinander entfernt (zwei Dezimalstellen)?

  c) Welches Tripel erfüllt nur die erste Gleichung?
teile:
  - typ: auswahl
    label: 'a)'
    optionen: ['genau eine', 'unendlich viele (eine Gerade)', 'keine']
    richtig: [2]
    fehler:
      - wert: 1
        meldung: 'Multipliziere die zweite Gleichung mit $-3$: $3x - 6y + 9z = -15$. Die linke Seite ist gleich, die rechte nicht.'
  - typ: zahl
    label: 'b) Abstand'
    loesung: "abs(2/3 + 5)/sqrt(14)"
    fehler:
      - wert: "abs(2 - 5)/sqrt(14)"
        meldung: Die rechten Seiten darf man erst vergleichen, wenn beide Gleichungen genau denselben Normalvektor haben.
  - typ: auswahl
    label: 'c)'
    optionen: ['$(0 \mid 0 \mid \tfrac29)$', '$(1 \mid 1 \mid 1)$', '$(-5 \mid 0 \mid 0)$']
    richtig: [0]
    fehler:
      - wert: 2
        meldung: '$(-5 \mid 0 \mid 0)$ erfüllt die **zweite** Gleichung, nicht die erste.'
hinweise:
  - Vergleiche die Normalvektoren $\begin{pmatrix} 3 \\ -6 \\ 9 \end{pmatrix}$ und $\begin{pmatrix} -1 \\ 2 \\ -3 \end{pmatrix}$.
  - 'b) Beide Gleichungen auf den Normalvektor $\begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$ bringen.'
loesung: |
  **a)** Zweite Gleichung mal $-3$: $3x - 6y + 9z = -15$. Gleiche linke Seite wie die erste, aber $-15 \neq 2$. Keine Lösung.
  ---
  **b)** Die Normalvektoren sind Vielfache: zwei echt parallele Ebenen. Mit $\vec n = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}$: $x - 2y + 3z = \frac23$ und $x - 2y + 3z = -5$. Abstand $\frac{\frac23 + 5}{\sqrt{14}} \approx 1{,}51$.
  ---
  **c)** $(0 \mid 0 \mid \frac29)$: erste Gleichung $9\cdot\frac29 = 2$, zweite $-\frac23 \neq 5$. Ein Punkt der ersten Ebene, der nicht auf der zweiten liegt. Wegen der Parallelität erfüllt **jedes** Tripel der ersten Gleichung nur diese.
```

```aufgabe
id: ag-pruefung-pyramide
titel: Ein Zelt in Pyramidenform
niveau: 3
punkte: 10
lernziel: 6
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $25$ Minuten. Einheiten in Metern.

  Ein Zelt hat den quadratischen Boden $A(0 \mid 0 \mid 0)$, $B(4 \mid 0 \mid 0)$, $C(4 \mid 4 \mid 0)$, $D(0 \mid 4 \mid 0)$ und die Spitze
  $S(2 \mid 2 \mid 5)$. Fertige zuerst einen Schrägriss an.

  a) Bestimme die Ebene der Seitenwand $ABS$ in Koordinatenform (als $(a, b, c, d)$; jedes Vielfache ist richtig).

  b) Unter welchem Winkel ist diese Wand gegen den Boden geneigt?

  c) Unter welchem Winkel steigt die Kante $AS$ gegen den Boden an?

  d) Wie groß ist das Volumen des Zelts?

  e) Eine Lampe hängt im Punkt $L(2 \mid 1 \mid 1)$. Wie weit ist sie von der Wand $ABS$ entfernt? Runde auf Zentimeter.
teile:
  - typ: vektor
    label: 'a) $(a, b, c, d)$'
    namen: ["a", "b", "c", "d"]
    vielfaches: true
    loesung: ["0", "-5", "2", "0"]
  - typ: zahl
    label: 'b) Neigung der Wand'
    einheit: "°"
    loesung: "inGrad(acos(2/sqrt(29)))"
    fehler:
      - wert: "inGrad(asin(2/sqrt(29)))"
        meldung: Bei zwei Ebenen (Wand und Boden) steht der Kosinus.
  - typ: zahl
    label: 'c) Steigung der Kante'
    einheit: "°"
    loesung: "inGrad(asin(5/sqrt(33)))"
    fehler:
      - wert: "inGrad(acos(5/sqrt(33)))"
        meldung: Bei Gerade und Ebene steht der Sinus.
  - typ: zahl
    label: 'd) Volumen'
    einheit: m³
    loesung: "16*5/3"
  - typ: zahl
    label: 'e) Abstand'
    einheit: m
    loesung: "3/sqrt(29)"
    toleranz: 0.01
hinweise:
  - 'a) $\overrightarrow{AB}\times\overrightarrow{AS}$. b) Normalvektor des Bodens $\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$.'
  - 'c) Richtung $\overrightarrow{AS} = \begin{pmatrix} 2 \\ 2 \\ 5 \end{pmatrix}$, Sinus. e) HNF.'
loesung: |
  **a)** $\overrightarrow{AB}\times\overrightarrow{AS} = \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix}\times\begin{pmatrix} 2 \\ 2 \\ 5 \end{pmatrix} = \begin{pmatrix} 0 \\ -20 \\ 8 \end{pmatrix}$, gekürzt $\begin{pmatrix} 0 \\ -5 \\ 2 \end{pmatrix}$. Durch $A = O$: $-5y + 2z = 0$. Probe mit $S$: $-10 + 10 = 0$.
  ---
  **b)** $\cos\varphi = \frac{2}{\sqrt{29}}$, also $\varphi \approx 68{,}20°$.
  ---
  **c)** $\sin\alpha = \frac{5}{\sqrt{33}}$, also $\alpha \approx 60{,}50°$. Die Kante ist flacher als die Wand, weil sie schräg zur Ecke läuft.
  ---
  **d)** $V = \frac13\cdot 16\cdot 5 \approx 26{,}67$ m³.
  ---
  **e)** $d = \frac{|-5 + 2|}{\sqrt{29}} = \frac{3}{\sqrt{29}} \approx 0{,}56$ m. **Antwort:** Die Lampe hängt etwa $56$ cm von der Wand entfernt.
```

```aufgabe
id: ag-pruefung-kreis
titel: Im Lichtkegel eines Leuchtturms
niveau: 3
punkte: 12
lernziel: 7
kompetenz: modellieren
angabe: |
  Zeitrichtwert: $25$ Minuten. Einheiten in Kilometern.

  Ein Leuchtturm steht bei $M(2 \mid -1)$. Sein Licht ist $10$ km weit zu sehen. Ein Schiff fährt geradlinig auf dem Kurs $g: 3x + 4y = 32$.

  a) Gib den Rand des Sichtbereichs in der Form $x^2 + y^2 + ax + by + c = 0$ an, als $(a, b, c)$.

  b) Zeige mit dem Abstand, dass das Schiff das Licht sieht.

  c) In welchen Punkten tritt das Schiff in den Sichtbereich ein und aus ihm aus? (nach aufsteigender $x$-Koordinate)

  d) Wie lange sieht das Schiff das Licht, wenn es $20$ km/h fährt? Antwort in Minuten.

  e) Ein zweites Schiff fährt parallel zu $g$ weiter nördlich und streift den Sichtbereich nur. Gib seinen Kurs als $3x + 4y = c$ an.
teile:
  - typ: vektor
    label: 'a) $(a, b, c)$'
    namen: ["a", "b", "c"]
    loesung: ["-4", "2", "-95"]
    fehler:
      - wert: ["-4", "2", "-100"]
        meldung: 'Beim Ausmultiplizieren entstehen auch $4$ und $1$. Also $c = 4 + 1 - 100$.'
  - typ: zahl
    label: 'b) $d(M, g)$'
    loesung: "abs(6 - 4 - 32)/5"
    fehler:
      - wert: "30"
        meldung: Teile noch durch $|\vec n| = 5$.
  - typ: vektor
    label: 'c) Randpunkt mit kleinerem $x$'
    namen: ["x", "y"]
    loesung: ["-0.8", "8.6"]
  - typ: vektor
    label: 'c) Randpunkt mit größerem $x$'
    namen: ["x", "y"]
    loesung: ["12", "-1"]
  - typ: zahl
    label: 'd) Zeit'
    einheit: min
    loesung: "16/20*60"
    fehler:
      - wert: "0.8"
        meldung: Das sind Stunden. Gefragt sind Minuten.
  - typ: zahl
    label: 'e) $c$'
    loesung: "52"
    fehler:
      - wert: "-48"
        meldung: Das ist die Tangente auf der südlichen Seite. Weiter nördlich heißt größere $y$-Werte, also größeres $c$.
hinweise:
  - '$(x - 2)^2 + (y + 1)^2 = 100$ ausmultiplizieren. b) HNF. c) $x = \frac{32 - 4y}{3}$ einsetzen oder Lotfußpunkt und halbe Sehne $\sqrt{100 - 36}$.'
  - 'd) Sehnenlänge durch Geschwindigkeit. e) $\frac{|2 - c|}{5} = 10$.'
loesung: |
  **a)** $x^2 - 4x + 4 + y^2 + 2y + 1 = 100$, also $x^2 + y^2 - 4x + 2y - 95 = 0$.
  ---
  **b)** $d = \frac{|6 - 4 - 32|}{5} = 6 < 10$. Der Kurs schneidet den Sichtbereich.
  ---
  **c)** Lotfußpunkt: $M + t\cdot\begin{pmatrix} 3 \\ 4 \end{pmatrix}$ in $g$: $2 + 25t = 32$, $t = 1{,}2$, $F(5{,}6 \mid 3{,}8)$. Halbe Sehne $\sqrt{100 - 36} = 8$, Einheitsrichtung $\frac15\begin{pmatrix} 4 \\ -3 \end{pmatrix}$. Punkte $F \mp 8\cdot\begin{pmatrix} 0{,}8 \\ -0{,}6 \end{pmatrix}$: $(-0{,}8 \mid 8{,}6)$ und $(12 \mid -1)$. Probe: $(12 - 2)^2 + 0^2 = 100$ und $(-2{,}8)^2 + 9{,}6^2 = 100$.
  ---
  **d)** Strecke $16$ km bei $20$ km/h: $0{,}8$ h $= 48$ min.
  ---
  **e)** $\frac{|6 - 4 - c|}{5} = 10$, also $c = 52$ oder $c = -48$. Nördlich liegt $3x + 4y = 52$. **Antwort:** Das zweite Schiff fährt auf $3x + 4y = 52$.
```

```aufgabe
id: ag-pruefung-kugel
titel: Eine Kugelleuchte und eine schräge Glasplatte
niveau: 3
punkte: 10
lernziel: 8
kompetenz: anwenden
angabe: |
  Zeitrichtwert: $20$ Minuten. Einheiten in Dezimetern.

  Eine Kugelleuchte hat die Oberfläche $K: x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0$. Eine schräge Glasplatte liegt in der Ebene
  $E: 2x - 2y + z = 18$.

  a) Bestimme Mittelpunkt und Radius der Kugel.

  b) Zeige, dass die Platte die Kugel schneidet. Bestimme Mittelpunkt und Radius des Schnittkreises.

  c) Der Punkt $T(1 \mid 2 \mid 6)$ liegt auf $K$. Bestimme die Tangentialebene in $T$ (als $(a, b, c, d)$) und ihren Abstand vom Ursprung.
teile:
  - typ: vektor
    label: 'a) $M$'
    namen: ["x", "y", "z"]
    loesung: ["1", "-2", "3"]
    fehler:
      - wert: ["-1", "2", "-3"]
        meldung: Die Vorzeichen sind umgekehrt. Aus $(x - 1)^2$ folgt $m_1 = 1$.
  - typ: zahl
    label: 'a) $r$'
    loesung: "sqrt(1 + 4 + 9 + 11)"
    fehler:
      - wert: "sqrt(1 + 4 + 9 - 11)"
        meldung: 'Die $-11$ steht links. Rechts wird sie zu $+11$.'
  - typ: vektor
    label: 'b) Mittelpunkt des Schnittkreises'
    namen: ["x", "y", "z"]
    loesung: ["3", "-4", "4"]
  - typ: zahl
    label: 'b) Radius'
    loesung: "4"
    fehler:
      - wert: "2"
        meldung: '$\rho = \sqrt{r^2 - d^2}$, nicht $r - d$.'
  - typ: vektor
    label: 'c) $(a, b, c, d)$'
    namen: ["a", "b", "c", "d"]
    vielfaches: true
    loesung: ["0", "4", "3", "26"]
  - typ: zahl
    label: 'c) Abstand vom Ursprung'
    loesung: "26/5"
hinweise:
  - Quadratisch ergänzen in $x$, $y$ und $z$.
  - 'b) HNF, dann Lot $M + t\cdot\begin{pmatrix} 2 \\ -2 \\ 1 \end{pmatrix}$. c) Normalvektor $\overrightarrow{MT}$.'
loesung: |
  **a)** $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 1 + 4 + 9 + 11 = 25$. $M(1 \mid -2 \mid 3)$, $r = 5$.
  ---
  **b)** $d = \frac{|2 + 4 + 3 - 18|}{3} = 3 < 5$: Schnittkreis mit $\rho = \sqrt{25 - 9} = 4$. Lot: $9 + 9t = 18$, $t = 1$, Mittelpunkt $(3 \mid -4 \mid 4)$. Probe: $6 + 8 + 4 = 18$.
  ---
  **c)** Probe: $0 + 16 + 9 = 25$. $\overrightarrow{MT} = \begin{pmatrix} 0 \\ 4 \\ 3 \end{pmatrix}$, Tangentialebene $4y + 3z = 4\cdot 2 + 3\cdot 6 = 26$. Abstand vom Ursprung $\frac{26}{5} = 5{,}2$ dm.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, bevor du weiterliest. Was würdest du jemandem sagen, der wissen will, worum es in der analytischen Geometrie geht?
antwort: |
  Eine mögliche Antwort mit drei Aussagen:
  1. Geraden und Ebenen beschreibt man in Parameterform (Ort plus Vielfache von Richtungen) oder mit einer linearen
     Gleichung. Die Zahlen vor $x$, $y$ und $z$ bilden dabei einen Normalvektor.
  2. Lagen, Schnittpunkte und Winkel führen auf Gleichungssysteme und Skalarprodukte. Im Raum gibt es bei Geraden
     zusätzlich die windschiefe Lage.
  3. Abstände misst man entlang des Lotes. Die Hessesche Normalform gibt es nur für Objekte mit genau einer Normalrichtung.
     Kreise und Kugeln sind Mengen gleichen Abstands, Tangenten stehen normal auf dem Radius.

  Vergleiche mit dem Kasten „Zusammenfassung“ direkt nach dieser Frage. Fehlt dir eine Aussage, lies die zugehörige Lektion noch einmal.
```

:::zusammenfassung
1. **Parameterform:** $X = P + t\cdot\vec r$ (Gerade) und $X = P + s\cdot\vec u + t\cdot\vec v$ (Ebene). $P$ ist ein Ort, $\vec r$, $\vec u$, $\vec v$ sind Richtungen. Dieselbe Figur hat viele Parameterformen.
2. **Schlüsselprinzip:** In $ax + by = c$ (Gerade in der Ebene) und $ax + by + cz = d$ (Ebene im Raum) bilden die Zahlen vor den Variablen einen Normalvektor. Eine einzelne lineare Gleichung im Raum ist nie eine Gerade.
3. **Lagen:** Erst Richtungen beziehungsweise Normalvektoren vergleichen, dann Punktprobe oder Schnitt. Zwei Geraden im Raum können windschief sein: nicht parallel und ohne gemeinsamen Punkt.
4. **Schnitte:** Gerade und Ebene durch Einsetzen, zwei Ebenen mit $\vec n_1\times\vec n_2$ als Richtung. Ein Gleichungssystem in drei Variablen ist ein Schnitt von Ebenen.
5. **Winkel:** Kosinus mit Betrag bei Gerade–Gerade und Ebene–Ebene, Sinus bei Gerade–Ebene (Richtungsvektor gegen Normalvektor).
6. **Abstände:** Hessesche Normalform $\frac{|ax_0 + by_0 + cz_0 - d|}{|\vec n|}$ für Punkt–Ebene und Punkt–Gerade in der Ebene. Für Geraden im Raum Lotfußpunkt oder $\frac{|\overrightarrow{PQ}\times\vec r|}{|\vec r|}$.
7. **Kreis und Kugel:** $(x - m_1)^2 + (y - m_2)^2 \,(+\,(z - m_3)^2) = r^2$, Mittelpunkt und Radius durch quadratische Ergänzung. Lage einer Geraden oder Ebene über $d(M, \cdot)$ gegen $r$. Tangente beziehungsweise Tangentialebene hat den Normalvektor $\overrightarrow{MT}$, Schnittkreisradius $\sqrt{r^2 - d^2}$.
8. **Vertiefung:** Ellipse, Hyperbel und Parabel sind Kegelschnitte mit den Gleichungen $\frac{x^2}{a^2} \pm \frac{y^2}{b^2} = 1$ und $y^2 = 2px$. Kurven lassen sich in Parameterform beschreiben.
:::

### Die häufigsten Fehler

Jeder Fehler wird von mindestens einer Aufgabe im Kapitel trainiert. Wenn dir ein Fehler bekannt vorkommt, löse die genannte Aufgabe noch
einmal.

1. **Ortsvektor statt Richtungsvektor.** Für die Gerade durch $A$ und $B$ wird $B$ statt $B - A$ als Richtung genommen. Training: „Wo steckt der Fehler?“ und „Die Gondel einer Seilbahn“ in [7.1 Die Parameterform](/lernen/mathe3/analytische-geometrie/geraden-in-der-ebene-die-parameterform).
2. **Parameterformen an den Zahlen verglichen.** Verschiedene Zahlen heißen nicht verschiedene Geraden. Training: „Dieselbe Gerade oder nicht?“ in Lektion 7.1.
3. **Normalvektor als Richtungsvektor.** Die Zahlen der Gleichung werden als Richtung gelesen, etwa für die Parallele. Training: „Richtungsvektor für parallel und normal“ in [7.3 Zwei Geraden in der Ebene](/lernen/mathe3/analytische-geometrie/zwei-geraden-in-der-ebene-lage-schnittpunkt-und-winkel).
4. **Gleicher Parametername bei zwei Geraden.** Damit sucht man einen Zusammenstoß statt eines Schnittpunkts. Training: „Kreuzen sich die Kurse, stoßen die Schiffe zusammen?“ in Lektion 7.3.
5. **Bei der HNF nicht durch $|\vec n|$ geteilt oder $c$ falsch berücksichtigt.** Training: „Abstand mit der HNF“ und „Liegt der Punkt wirklich auf der Geraden?“ in [7.4 Abstand Punkt–Gerade](/lernen/mathe3/analytische-geometrie/abstand-punkt-gerade-die-hessesche-normalform).
6. **Dritte Gleichung im Raum nicht geprüft.** So entstehen Schnittpunkte windschiefer Geraden. Training: „Ein Schnittpunkt, den es nicht gibt“ in [7.5 Geraden im Raum](/lernen/mathe3/analytische-geometrie/geraden-im-raum-parallel-schneidend-oder-windschief).
7. **Kein gemeinsamer Punkt als „parallel“ gedeutet.** Training: „Aussagen über Geraden im Raum“ in Lektion 7.5.
8. **Richtungsvektor statt Kreuzprodukt als Normalvektor der Ebene.** Training: „Ebene durch drei Punkte“ in [7.6 Ebenen im Raum](/lernen/mathe3/analytische-geometrie/ebenen-im-raum-parameterform-und-koordinatenform).
9. **„$t$ fällt weg“ falsch gedeutet.** Eine wahre Aussage wie $2 = 2$ heißt „liegt in der Ebene“. Training: „Keine Lösung oder unendlich viele?“ in [7.7 Gerade und Ebene](/lernen/mathe3/analytische-geometrie/gerade-und-ebene-durchstosspunkt-lage-und-winkel).
10. **Sinus und Kosinus vertauscht.** Training: „Winkel zwischen Gerade und Ebene“ in Lektion 7.7 und „Neigung einer Dachfläche“ in [7.8 Zwei Ebenen](/lernen/mathe3/analytische-geometrie/zwei-ebenen-schnittgerade-winkel-und-gleichungssysteme).
11. **Eine HNF für Geraden im Raum erfunden.** Training: „Eine falsche Abstandsformel“ in [7.9 Abstände im Raum](/lernen/mathe3/analytische-geometrie/abstaende-im-raum).
12. **Vorzeichen des Mittelpunkts, $r$ und $r^2$, ergänzte Quadrate nicht ausgeglichen.** Training: „Mittelpunkt und Radius“ in [7.10 Der Kreis](/lernen/mathe3/analytische-geometrie/der-kreis).
13. **Den zweiten Wert aus der Kreisgleichung statt aus der Geraden berechnet.** Training: „Vier Schnittpunkte?“ in [7.11 Kreis und Gerade](/lernen/mathe3/analytische-geometrie/kreis-und-gerade-sekante-tangente-passante).
14. **Senkrechte Tangente beim Steigungsansatz verloren.** Training: „Fehlt eine Tangente?“ in [7.12 Tangenten von außen](/lernen/mathe3/analytische-geometrie/tangenten-von-aussen-und-schnitt-zweier-kreise).
15. **Schnittkreisradius als $r - d$.** Training: „Schnittkreis von Kugel und Ebene“ in [7.13 Kugel, Zylinder und Schnittkreis](/lernen/mathe3/analytische-geometrie/kugel-zylinder-und-schnittkreis).

### Selbstcheck zu den Lernzielen

Schätze für jedes Lernziel ein, wie sicher du bist: **sicher**, **unsicher** oder **noch nicht**. Vergleiche dann mit deinen Ergebnissen in den
Aufgaben. Wo du dich überschätzt hast, lohnt sich eine Wiederholung am meisten.

1. Geraden in der Ebene in allen Formen aufstellen, umrechnen und Punktproben machen.
2. Lage, Schnittpunkt und Winkel zweier Geraden bestimmen, Richtungen für parallel und normal wählen.
3. Abstände Punkt–Gerade mit der HNF und dem Lotfußpunkt berechnen.
4. Geraden im Raum als identisch, parallel, schneidend oder windschief einordnen.
5. Ebenen in Parameter- und Koordinatenform aufstellen und umrechnen.
6. Gerade–Ebene und Ebene–Ebene schneiden, Winkel berechnen, Gleichungssysteme deuten.
7. Abstände im Raum, Lotfußpunkte und Spiegelpunkte bestimmen.
8. Mit Kreisen rechnen: Mittelpunkt, Radius, Lage, Tangenten, Schnitt zweier Kreise.
9. Mit Kugeln rechnen: Tangentialebene, Schnittkreis, Zylinder deuten.
10. Kegelschnitte erkennen und Parameterkurven deuten (Vertiefung).

## Mündliche Prüfung

```karten
- id: ag-k-parameterform
  frage: Wie sieht die Parameterform einer Geraden aus, und welche Rolle spielen ihre Bestandteile?
  antwort: |
    $X = P + t\cdot\vec r$ mit Aufpunkt $P$, Richtungsvektor $\vec r \neq \vec 0$ und Parameter $t \in \R$. $P$ ist ein Ort (Ortsvektor vom
    Ursprung), $\vec r$ eine Bewegung, die man überall ansetzen darf. Jedes $t$ liefert einen Punkt. Die Darstellung ist nicht eindeutig:
    Jeder Punkt der Geraden taugt als Aufpunkt, jedes Vielfache $\lambda\vec r$ mit $\lambda \neq 0$ als Richtung.
  kernpunkte:
    - Aufpunkt ist ein Ort, Richtungsvektor eine Bewegung
    - jedes t liefert einen Punkt, auch negative
    - nicht eindeutig, Vergleich über Richtung und einen Punkt
- id: ag-k-normalvektor
  frage: Warum bilden die Koeffizienten von ax + by = c einen Normalvektor der Geraden?
  antwort: |
    Sind $P$ und $X$ zwei Punkte der Geraden, gilt $ap_1 + bp_2 = c$ und $ax + by = c$. Die Differenz ergibt
    $a(x - p_1) + b(y - p_2) = 0$, also $\begin{pmatrix} a \\ b \end{pmatrix}\cdot\overrightarrow{PX} = 0$. Der Vektor $(a, b)$ steht normal auf jedem
    Verbindungsvektor zweier Geradenpunkte, also auf der Geraden. Ein Richtungsvektor entsteht durch Kippen: $(-b, a)$.
  kernpunkte:
    - zwei Gleichungen subtrahieren
    - Skalarprodukt mit dem Verbindungsvektor ist null
    - Richtungsvektor durch Kippen
- id: ag-k-parallel-normal
  frage: Wie wählt man den Richtungsvektor einer Geraden, damit sie zu ax + by = c parallel oder normal ist?
  antwort: |
    Parallel braucht dieselbe Richtung, also den gekippten Normalvektor $(-b, a)$. Normal braucht die Richtung des Normalvektors $(a, b)$
    selbst. Normieren heißt durch die Länge teilen, $\vec r_0 = \frac{\vec r}{|\vec r|}$. Probe: Für parallel ist $\vec r\cdot(a, b) = 0$.
  kernpunkte:
    - parallel mit dem gekippten Normalvektor
    - normal mit dem Normalvektor selbst
    - normieren durch Teilen durch die Länge
- id: ag-k-hnf
  frage: Was ist die Hessesche Normalform, und warum liefert sie den Abstand?
  antwort: |
    Die Normalform mit allem auf einer Seite, geteilt durch die Länge des Normalvektors, etwa $\frac{ax + by - c}{\sqrt{a^2 + b^2}} = 0$.
    Setzt man $Q$ ein, erhält man die Länge der Projektion von $\overrightarrow{PQ}$ auf die Normalrichtung, also den Abstand entlang des Lotes,
    mit Vorzeichen für die Seite. Das Teilen durch $|\vec n|$ macht das Ergebnis unabhängig davon, mit welcher Zahl die Gleichung multipliziert wurde.
  kernpunkte:
    - Gleichung geteilt durch die Länge des Normalvektors
    - kürzester Weg entlang des Lotes
    - Vorzeichen zeigt die Seite
- id: ag-k-windschief
  frage: Welche Lagen können zwei Geraden im Raum haben, und wie entscheidet man?
  antwort: |
    Identisch, echt parallel, schneidend oder windschief. Sind die Richtungsvektoren Vielfache, entscheidet die Punktprobe zwischen identisch
    und echt parallel. Sonst setzt man gleich: drei Gleichungen, zwei Unbekannte. Man löst zwei und prüft die dritte. Erfüllt heißt schneidend,
    verletzt heißt windschief. Windschiefe Geraden liegen nicht in einer Ebene, wie eine Brücke über einer Straße.
  kernpunkte:
    - vier Lagen, windschief gibt es nur im Raum
    - erst Richtungen vergleichen
    - die dritte Gleichung entscheidet
- id: ag-k-gerade-raum-gleichung
  frage: Warum gibt es im Raum keine Geradengleichung der Form ax + by + cz = d?
  antwort: |
    Eine solche Gleichung legt nur einen Normalvektor fest. Auf einer Geraden im Raum stehen aber unendlich viele Richtungen normal. Alle
    Punkte $X$ mit $\vec n\cdot\overrightarrow{PX} = 0$ bilden deshalb eine Ebene. Eine Gerade im Raum braucht die Parameterform oder zwei
    Ebenengleichungen. Darum gibt es für sie auch keine HNF.
  kernpunkte:
    - eine Gleichung, ein Normalvektor, eine Ebene
    - Gerade als Parameterform oder Schnitt zweier Ebenen
    - deshalb keine HNF für Geraden im Raum
- id: ag-k-ebene-drei-punkte
  frage: Wie stellt man die Ebene durch drei Punkte in Koordinatenform auf?
  antwort: |
    Zwei Richtungsvektoren $\overrightarrow{AB}$ und $\overrightarrow{AC}$ bilden. Ihr Kreuzprodukt ist ein Normalvektor $\vec n$, weil es auf beiden
    normal steht. Dann $d = \vec n\cdot A$ und $E: n_1x + n_2y + n_3z = d$. Probe mit $B$ und $C$. Liegen die Punkte auf einer Geraden, ist das
    Kreuzprodukt der Nullvektor, und es gibt keine eindeutige Ebene.
  kernpunkte:
    - Kreuzprodukt der Richtungsvektoren
    - rechte Seite mit einem Punkt
    - Probe mit den anderen Punkten
- id: ag-k-sinus
  frage: Warum steht beim Winkel zwischen Gerade und Ebene der Sinus?
  antwort: |
    Man rechnet mit dem Normalvektor der Ebene, weil man ihn ablesen kann. Der Winkel zwischen Richtungsvektor und Normalvektor ist der
    Ergänzungswinkel $90° - \varphi$. Wegen $\cos(90° - \varphi) = \sin\varphi$ gilt $\sin\varphi = \frac{|\vec n\cdot\vec r|}{|\vec n||\vec r|}$.
    Bei Gerade–Gerade und Ebene–Ebene vergleicht man gleichartige Vektoren, dort steht der Kosinus.
  kernpunkte:
    - Normalvektor steht senkrecht auf der Ebene
    - Ergänzungswinkel 90° − φ
    - Kosinus bei gleichartigen Vektoren
- id: ag-k-schnittgerade
  frage: Wie bestimmt man die Schnittgerade zweier Ebenen, und warum ist n₁ × n₂ ihre Richtung?
  antwort: |
    Die Schnittgerade liegt in beiden Ebenen, ihre Richtung steht also auf beiden Normalvektoren normal. Genau das leistet das Kreuzprodukt.
    Einen Punkt findet man, indem man eine Koordinate null setzt und das $2\times 2$-System löst. Klappt das nicht, nimmt man eine andere
    Koordinate. Sind die Normalvektoren Vielfache, sind die Ebenen parallel oder identisch.
  kernpunkte:
    - Richtung normal auf beiden Normalvektoren
    - Punkt durch Nullsetzen einer Koordinate
    - Sonderfall parallele Ebenen
- id: ag-k-lgs
  frage: Wie deutet man ein lineares Gleichungssystem in drei Variablen geometrisch? (Verbindung zu Kapitel 3)
  antwort: |
    Jede Gleichung ist eine Ebene, die Lösungsmenge ihr Durchschnitt. Eine eindeutige Lösung ist ein gemeinsamer Punkt, eine Lösung mit einem
    freien Parameter eine gemeinsame Gerade (Buchseiten). Keine Lösung heißt: zwei Ebenen echt parallel, oder drei Ebenen bilden ein Prisma.
    Die Determinante der Koeffizientenmatrix ist genau dann nicht null, wenn es genau einen Schnittpunkt gibt.
  kernpunkte:
    - Gleichung gleich Ebene, Lösung gleich Durchschnitt
    - Punkt, Gerade, leer
    - Determinante ungleich null heißt genau ein Punkt
- id: ag-k-abstand-raum
  frage: Wie berechnet man den Abstand eines Punktes von einer Geraden im Raum?
  antwort: |
    Mit dem Lotfußpunkt $F = P + t\vec r$, wobei $\overrightarrow{FQ}\cdot\vec r = 0$ gilt, also $t = \frac{(Q - P)\cdot\vec r}{|\vec r|^2}$. Der Abstand ist
    $|\overrightarrow{FQ}|$. Alternativ $\frac{|\overrightarrow{PQ}\times\vec r|}{|\vec r|}$: Parallelogrammfläche durch Grundlinie. Eine HNF gibt es nicht.
  kernpunkte:
    - Lotbedingung mit dem Skalarprodukt
    - Kreuzprodukt als Fläche durch Grundlinie
    - keine HNF für Geraden im Raum
- id: ag-k-kreis
  frage: Wie kommt man auf die Kreisgleichung, und wie findet man Mittelpunkt und Radius?
  antwort: |
    Ein Kreis ist die Menge der Punkte mit Abstand $r$ von $M$. Mit Pythagoras und Quadrieren folgt $(x - m_1)^2 + (y - m_2)^2 = r^2$. Aus der
    ausmultiplizierten Form bekommt man $M$ und $r$ durch quadratische Ergänzung (Kapitel 2). Ist die rechte Seite dann null, ist es nur ein
    Punkt, ist sie negativ, ist die Menge leer.
  kernpunkte:
    - Definition über den Abstand
    - quadratische Ergänzung
    - Sonderfälle Punkt und leere Menge
- id: ag-k-tangente
  frage: Warum steht die Tangente an einen Kreis normal auf dem Berührradius, und wie stellt man sie auf?
  antwort: |
    Der Berührpunkt $T$ ist der einzige Kreispunkt auf der Tangente, alle anderen Tangentenpunkte liegen weiter weg. $T$ ist also der Punkt der
    Tangente, der $M$ am nächsten liegt, und das ist der Lotfußpunkt. Darum ist $\overrightarrow{MT}$ Normalvektor: $\overrightarrow{MT}\cdot(X - T) = 0$.
    Von einem äußeren Punkt $P$ findet man die Berührpunkte als Schnitt der Polaren $(P - M)\cdot(X - M) = r^2$ mit dem Kreis.
  kernpunkte:
    - Berührpunkt ist nächster Punkt, also Lotfußpunkt
    - Radius als Normalvektor
    - Polare für Tangenten von außen
- id: ag-k-kreis-gerade
  frage: Welche Lagen hat eine Gerade zu einem Kreis, und wie erkennt man sie auf zwei Arten?
  antwort: |
    Passante, Tangente oder Sekante. Erstens über den Abstand: $d(M, g)$ größer, gleich oder kleiner als $r$. Zweitens algebraisch:
    Einsetzen ergibt eine quadratische Gleichung mit negativer, verschwindender oder positiver Diskriminante. Die Sehnenlänge einer Sekante
    ist $2\sqrt{r^2 - d^2}$.
  kernpunkte:
    - Abstand gegen Radius
    - Diskriminante der Einsetzgleichung
    - Sehnenlänge mit Pythagoras
- id: ag-k-schnittkreis
  frage: Was passiert beim Schnitt einer Kugel mit einer Ebene?
  antwort: |
    Ist $d(M, E) < r$, entsteht ein Kreis um den Lotfußpunkt von $M$ mit Radius $\sqrt{r^2 - d^2}$. Das folgt aus Pythagoras im Dreieck aus
    $M$, Lotfußpunkt und Kreispunkt. Bei $d = r$ berührt die Ebene die Kugel (Tangentialebene mit Normalvektor $\overrightarrow{MT}$), bei $d > r$
    gibt es keinen Schnitt.
  kernpunkte:
    - Mittelpunkt ist der Lotfußpunkt
    - Radius aus Pythagoras, nicht r − d
    - Tangentialebene bei d = r
- id: ag-k-zylinder
  frage: Was beschreibt eine Kreisgleichung wie x² + y² = 4, wenn man sie im Raum liest?
  antwort: |
    Einen Zylindermantel um die $z$-Achse mit Radius $2$. Die Variable $z$ fehlt, sie ist also frei. Zu jedem Punkt des Kreises gehört die
    ganze Parallele zur $z$-Achse. Allgemein wird eine Figur in Richtung einer fehlenden Variablen ausgezogen: Aus einer Geraden wird eine
    Ebene, aus einem Kreis ein Zylinder. Ein Kreis im Raum braucht zwei Gleichungen.
  kernpunkte:
    - fehlende Variable ist frei
    - Zylinder um die Achse der fehlenden Variablen
    - Kreis im Raum braucht zwei Gleichungen
- id: ag-k-kegelschnitte
  frage: Woran erkennt man Ellipse, Hyperbel und Parabel an ihrer Gleichung? (Vertiefung)
  antwort: |
    In Hauptlage hat die Ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, die Hyperbel $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, die Parabel $y^2 = 2px$.
    Gleiche Vorzeichen der Quadrate bedeuten Ellipse, bei gleichen Faktoren Kreis. Verschiedene Vorzeichen bedeuten Hyperbel, nur ein Quadrat
    Parabel. Die Brennpunkte liegen bei $e^2 = a^2 - b^2$ (Ellipse) beziehungsweise $e^2 = a^2 + b^2$ (Hyperbel).
  kernpunkte:
    - drei Normalformen
    - Vorzeichen der Quadrate entscheiden
    - Brennpunktformeln unterscheiden sich im Vorzeichen
- id: ag-k-vektoren-geometrie
  frage: Welche Werkzeuge aus Kapitel 6 braucht die analytische Geometrie wofür?
  antwort: |
    Das Skalarprodukt prüft „normal“ und liefert Winkel und Projektionen, also Abstände. Das Kreuzprodukt liefert Normalvektoren von Ebenen,
    Richtungen von Schnittgeraden und Flächen. Der Betrag liefert Längen und damit Kreis- und Kugelgleichungen. Lineare Gleichungssysteme aus
    Kapitel 3 entscheiden über Schnitte.
  kernpunkte:
    - Skalarprodukt für Winkel, Orthogonalität, Abstand
    - Kreuzprodukt für Normalvektoren und Schnittgeraden
    - Betrag für Kreis und Kugel
```
