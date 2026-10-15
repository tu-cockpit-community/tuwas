---
nummer: 9
titel: Hydro- und Aeromechanik
kurz: Druck, Schweredruck, hydraulische Presse, Auftrieb und Schwimmen, Luftdruck, Oberflächenspannung, Kontinuitätsgleichung, Bernoulli, Tragflügel und Strömungswiderstand.
teil: waerme
stunden: 9
pruefungsgewicht: 2
voraussetzungen: [groessen-einheiten-messen, dynamik, arbeit-energie-impuls]
lernziele:
  - Druck als Kraft pro Fläche von der Kraft unterscheiden, Druckkräfte berechnen und die Einheiten Pa, hPa, bar und mmHg sicher umrechnen
  - den Schweredruck $p = p_0 + \rho g h$ herleiten und anwenden, Absolutdruck und Überdruck unterscheiden, das hydrostatische Paradoxon und verbundene Gefäße erklären
  - die hydraulische Presse mit dem Prinzip von Pascal berechnen und mit der Goldenen Regel der Mechanik begründen
  - die Auftriebskraft mit dem Prinzip von Archimedes aus dem verdrängten Volumen berechnen, ihre Ursache erklären und Dichten durch Wägung bestimmen
  - Schwimmen, Schweben und Sinken über die mittlere Dichte entscheiden und Eintauchtiefen sowie Nutzlasten von Schiffen und Ballonen berechnen
  - den Luftdruck erklären, Barometer beschreiben und den Druck in der Höhe mit der barometrischen Höhenformel abschätzen
  - Oberflächenspannung und Kapillarität im Teilchenbild erklären und Kräfte an Flüssigkeitshäuten sowie Steighöhen berechnen
  - die Kontinuitätsgleichung und die Bernoulli-Gleichung auf Rohre, Düsen, Venturi-Rohr, Staurohr und Ausfluss anwenden
  - den dynamischen Auftrieb an einem Tragflügel richtig erklären, die Fehlvorstellung der gleichen Laufzeit widerlegen und die Auftriebsformel anwenden
  - Viskosität, laminare und turbulente Strömung unterscheiden und Strömungswiderstände mit dem Gesetz von Stokes und mit $F_W = \tfrac12 c_w\rho A v^2$ berechnen
---

Wasser und Luft haben eine gemeinsame Eigenschaft: Sie haben keine feste Form. Ihre Teilchen lassen sich
gegeneinander verschieben, deshalb fließen sie. Man fasst Flüssigkeiten und Gase unter dem Namen **Fluide**
zusammen. Das Wort kommt vom lateinischen *fluere*, „fließen“.

Dieses Kapitel hat zwei Hälften:

- Die **Hydrostatik** und die **Aerostatik** beschreiben ruhende Fluide. „Statik“ heißt „Lehre vom
  Gleichgewicht“. Hier geht es um Druck, Auftrieb und Luftdruck.
- Die **Hydrodynamik** und die **Aerodynamik** beschreiben strömende Fluide. Hier geht es um Wasserleitungen,
  Düsen, Tragflügel und den Luftwiderstand.

Die Silbe „Hydro“ steht für Wasser, „Aero“ für Luft. Die Gesetze gelten aber für alle Flüssigkeiten und Gase.

**Wozu brauchst du das?** Du begegnest diesem Stoff täglich. Der Wasserdruck in deiner Leitung kommt von einem
Hochbehälter. Die Bremse deines Autos ist eine hydraulische Presse. Ein Schiff aus Stahl schwimmt, ein
Flugzeug mit 70 Tonnen fliegt. Der Wetterbericht spricht von Hoch- und Tiefdruckgebieten. Im Studium kommen
dieselben Ideen in der Strömungslehre, der Medizintechnik (Blutdruck, Blutfluss) und der Meteorologie wieder.

**Was kommt in der Prüfung?** Typische schriftliche Aufgaben sind:

- Der Druck in einer bestimmten Wassertiefe und die Kraft auf ein Fenster oder eine Taucherbrille.
- Die Kraft an einer hydraulischen Hebebühne.
- Die Eintauchtiefe eines schwimmenden Körpers oder die Nutzlast eines Ballons.
- Die Dichte eines Körpers aus zwei Wägungen (die Geschichte von Archimedes und der Krone).
- Die Geschwindigkeit und der Druck in einer verengten Leitung.

Die Rechnungen sind meist kurz. Die Fallen liegen bei den Einheiten (Quadratzentimeter in Quadratmeter) und bei
der Frage, ob mit dem Gesamtdruck oder dem Überdruck gerechnet wird. In der mündlichen Prüfung kommen gern
Erklärfragen: „Warum schwimmt ein Stahlschiff?“, „Was ist das hydrostatische Paradoxon?“, „Warum fliegt ein
Flugzeug?“.

**Die drei eigentlichen Hürden** sind keine Rechenhürden, sondern Denkhürden. Viele verwechseln **Druck** und
**Kraft**. Viele glauben, der Auftrieb hänge vom Gewicht des eingetauchten Körpers ab. Er hängt aber nur vom
Gewicht der **verdrängten** Flüssigkeit ab. Und fast jeder hat einmal gehört, ein Flugzeug fliege, weil die Luft
oben „gleichzeitig“ am Flügelende ankommen müsse. Das ist falsch. Diesen drei Stellen widmet das Kapitel
besonders viel Zeit. Lies sie langsam.

Die Aeromechanik ist außerdem die Brücke zur **Meteorologie**. Luftdruck, Hoch und Tief und die Abnahme des
Drucks mit der Höhe beginnen hier. Fortgesetzt wird das Thema im
[Kapitel Hauptsätze, Wärmekraftmaschinen und Meteorologie](/lernen/physik1/hauptsaetze-waermekraftmaschinen/hoch-tief-wind-fronten-und-treibhauseffekt).

:::vorwissen
Für dieses Kapitel brauchst du:

- **Gewichtskraft** $F_G = m\cdot g$ und das **Kräftegleichgewicht** aus dem Kapitel Dynamik, Abschnitte
  [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft)
  und [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
- **Flächen und Volumina umrechnen** sowie die **Dichte** $\rho = m/V$ aus dem Kapitel Größen, Einheiten,
  Messen, Abschnitt [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
- **Arbeit** $W = F\cdot s$ und den **Energieerhaltungssatz** aus dem Kapitel Arbeit, Energie, Impuls,
  Abschnitte [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit) und
  [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
- **Formeln umstellen** aus dem Mathematikkurs, Kapitel Gleichungen, Abschnitt [Formeln umstellen](/lernen/mathe3/gleichungen/formeln-umstellen), und die
  **Exponentialfunktion** $e^{x}$ aus dem Kapitel Funktionen, Abschnitt [Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).
:::

### Eingangsdiagnose: Bist du bereit?

Die folgenden kurzen Fragen prüfen dein Vorwissen. Bist du bei einer Frage unsicher, folge dem Link in der
Lösung und wiederhole den Abschnitt kurz. Das kostet wenige Minuten und spart dir später viel Ärger.

```aufgabe
id: p9-e-gewicht
art: check
titel: Gewichtskraft aus der Masse
niveau: 1
angabe: |
  Welche Gewichtskraft hat eine Person mit $75\,\text{kg}$ auf der Erde ($g = 9{,}81\,\text{m/s}^2$)? Gib das Ergebnis in Newton an.
teile:
  - typ: zahl
    loesung: "75*9.81"
    einheit: "N"
    anzeige: '735{,}75 \approx 736'
    fehler:
      - wert: "75"
        meldung: |
          Das ist die Masse in Kilogramm, keine Kraft. Die Gewichtskraft ist das Produkt aus Masse und Fallbeschleunigung, $F_G = m\cdot g$.
      - wert: "75/9.81"
        meldung: |
          Du hast durch $g$ geteilt. Die Gewichtskraft ist $F_G = m\cdot g$, also wird multipliziert. Prüfe mit der Einheit: $\text{kg}\cdot\text{m/s}^2 = \text{N}$.
hinweise:
  - 'Die Gewichtskraft ist $F_G = m\cdot g$.'
loesung: |
  **Ansatz:** Die Erde zieht jeden Körper mit der Gewichtskraft $F_G = m\cdot g$ nach unten.
  ---
  **Rechnung:** $F_G = 75\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 735{,}75\,\text{N} \approx 736\,\text{N}$. Wiederholen: Kapitel Dynamik, [Gewichtskraft, Normalkraft, Federkraft und Seilkraft](/lernen/physik1/dynamik/gewichtskraft-normalkraft-federkraft-und-seilkraft).
```

```aufgabe
id: p9-e-flaeche
art: check
titel: Quadratzentimeter in Quadratmeter
niveau: 1
angabe: |
  Rechne $35\,\text{cm}^2$ in $\text{m}^2$ um.
teile:
  - typ: zahl
    loesung: "35e-4"
    einheit: "m²"
    anzeige: '3{,}5\cdot 10^{-3}'
    fehler:
      - wert: "0.35"
        meldung: |
          Du hast durch $100$ geteilt. Das gilt für Längen ($1\,\text{cm} = 0{,}01\,\text{m}$). Bei Flächen wird der Faktor quadriert: $1\,\text{cm}^2 = (0{,}01\,\text{m})^2 = 10^{-4}\,\text{m}^2$.
      - wert: "0.035"
        meldung: |
          Du hast durch $1000$ geteilt. Bei Flächen ist der Umrechnungsfaktor $100^2 = 10\,000$, denn $1\,\text{m}^2$ ist ein Quadrat mit $100\,\text{cm}$ mal $100\,\text{cm}$.
hinweise:
  - 'Ein Quadratmeter ist ein Quadrat mit $100\,\text{cm}$ Seitenlänge. Wie viele Quadratzentimeter passen hinein?'
loesung: |
  **Ansatz:** $1\,\text{m}^2 = 100\,\text{cm}\cdot 100\,\text{cm} = 10\,000\,\text{cm}^2$. Also ist $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$.
  ---
  **Rechnung:** $35\,\text{cm}^2 = 35\cdot 10^{-4}\,\text{m}^2 = 3{,}5\cdot 10^{-3}\,\text{m}^2$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

```aufgabe
id: p9-e-dichte
art: check
titel: Dichte aus Masse und Volumen
niveau: 1
angabe: |
  Ein Stein hat die Masse $540\,\text{g}$ und das Volumen $200\,\text{cm}^3$. Wie groß ist seine Dichte in $\text{kg/m}^3$?
teile:
  - typ: zahl
    loesung: "540/200*1000"
    einheit: "kg/m³"
    anzeige: '2700'
    fehler:
      - wert: "540/200"
        meldung: |
          Das ist die Dichte in $\text{g/cm}^3$. Gefragt ist $\text{kg/m}^3$. Es gilt $1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$.
      - wert: "200/540*1000"
        meldung: |
          Du hast Volumen durch Masse gerechnet. Die Dichte ist Masse **pro** Volumen, $\rho = m/V$.
hinweise:
  - 'Die Dichte ist $\rho = m/V$. Rechne zuerst in $\text{g/cm}^3$, dann mit $1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$ um.'
loesung: |
  **Ansatz:** Die Dichte gibt an, wie viel Masse in einem Volumen steckt: $\rho = m/V$.
  ---
  **Rechnung:** $\rho = \dfrac{540\,\text{g}}{200\,\text{cm}^3} = 2{,}7\,\text{g/cm}^3 = 2700\,\text{kg/m}^3$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen), Beispiel zur Dichte von Gold.
```

```aufgabe
id: p9-e-gleichgewicht
art: check
titel: Eine ruhig hängende Lampe
niveau: 1
angabe: |
  Eine Lampe mit $2{,}0\,\text{kg}$ hängt ruhig an einem Seil. Wie groß ist die Kraft, mit der das Seil die Lampe nach oben zieht?
teile:
  - typ: zahl
    loesung: "2.0*9.81"
    einheit: "N"
    anzeige: '19{,}6'
    fehler:
      - wert: "0"
        meldung: |
          Die resultierende Kraft ist null, nicht jede einzelne Kraft. Die Gewichtskraft zieht nach unten, also muss das Seil genauso stark nach oben ziehen. Erst die **Summe** ist null.
      - wert: "2*2.0*9.81"
        meldung: |
          Das Seil muss nur die Gewichtskraft ausgleichen, nicht verdoppeln. Im Gleichgewicht sind die beiden Kräfte gleich groß.
hinweise:
  - Die Lampe ruht. Was heißt das für die Summe aller Kräfte auf sie?
loesung: |
  **Ansatz:** Die Lampe ruht, also ist die resultierende Kraft null (erstes Newtonsches Axiom). Auf die Lampe wirken die Gewichtskraft nach unten und die Seilkraft nach oben.
  ---
  **Rechnung:** $F_S = F_G = 2{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 19{,}6\,\text{N}$. Wiederholen: Kapitel Dynamik, [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
```

```aufgabe
id: p9-e-arbeit
art: check
titel: Arbeit an einem Kolben
niveau: 1
angabe: |
  Du drückst einen Kolben mit der konstanten Kraft $150\,\text{N}$ um $0{,}20\,\text{m}$ in einen Zylinder. Welche Arbeit verrichtest du?
teile:
  - typ: zahl
    loesung: "150*0.20"
    einheit: "J"
    anzeige: '30'
    fehler:
      - wert: "150/0.20"
        meldung: |
          Du hast die Kraft durch den Weg geteilt. Arbeit ist Kraft **mal** Weg, $W = F\cdot s$, wenn Kraft und Weg dieselbe Richtung haben.
hinweise:
  - 'Arbeit ist Kraft mal Weg: $W = F\cdot s$.'
loesung: |
  **Ansatz:** Kraft und Weg zeigen in dieselbe Richtung, also gilt $W = F\cdot s$.
  ---
  **Rechnung:** $W = 150\,\text{N}\cdot 0{,}20\,\text{m} = 30\,\text{N}\,\text{m} = 30\,\text{J}$. Wiederholen: [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit).
```

```aufgabe
id: p9-e-energie
art: check
titel: Geschwindigkeit nach einem Fall
niveau: 1
angabe: |
  Ein Ball fällt aus der Ruhe $3{,}2\,\text{m}$ tief. Wie schnell ist er unten, wenn man den Luftwiderstand vernachlässigt? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*3.2)"
    einheit: "m/s"
    anzeige: '7{,}92'
    fehler:
      - wert: "2*9.81*3.2"
        meldung: |
          Das ist $v^2$, nicht $v$. Aus $\tfrac12 m v^2 = m g h$ folgt $v^2 = 2gh$. Du musst noch die Wurzel ziehen.
      - wert: "sqrt(9.81*3.2)"
        meldung: |
          Du hast den Faktor $2$ verloren. Aus $\tfrac12 m v^2 = m g h$ folgt $v^2 = 2gh$, nicht $v^2 = gh$.
hinweise:
  - 'Energieerhaltung: Die Lageenergie $m g h$ wird ganz zu Bewegungsenergie $\tfrac12 m v^2$.'
loesung: |
  **Ansatz:** Ohne Luftwiderstand bleibt die mechanische Energie erhalten: $\tfrac12 m v^2 = m g h$. Die Masse kürzt sich, also $v = \sqrt{2gh}$.
  ---
  **Rechnung:** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 3{,}2\,\text{m}} = \sqrt{62{,}8\,\text{m}^2/\text{s}^2} = 7{,}92\,\text{m/s}$. Wiederholen: [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
```

```aufgabe
id: p9-e-exponential
art: check
titel: Eine Exponentialfunktion auswerten
niveau: 1
angabe: |
  Eine Größe nimmt nach $f(x) = 100\cdot e^{-x/4}$ ab. Berechne $f(2)$. Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "100*exp(-2/4)"
    anzeige: '60{,}7'
    toleranz: 0.05
    fehler:
      - wert: "50"
        meldung: |
          Du hast so gerechnet, als nähme die Größe **linear** ab, also $100\cdot(1 - 2/4)$. Bei einer Exponentialfunktion wird aber $e^{-0{,}5}$ berechnet. Das ist etwa $0{,}607$, nicht $0{,}5$.
      - wert: "100*exp(-8)"
        meldung: |
          Im Exponenten steht $x/4$, also $2/4 = 0{,}5$. Du hast $2\cdot 4 = 8$ gerechnet.
hinweise:
  - 'Setze $x = 2$ ein: $f(2) = 100\cdot e^{-0{,}5}$. Den Wert $e^{-0{,}5}$ liefert der Taschenrechner.'
loesung: |
  **Ansatz:** Wir setzen $x = 2$ ein. Der Exponent ist $-2/4 = -0{,}5$.
  ---
  **Rechnung:** $f(2) = 100\cdot e^{-0{,}5} = 100\cdot 0{,}6065 = 60{,}7$. Wiederholen: Mathematik, Kapitel Funktionen, Abschnitt [Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).
```

## Druck: Kraft pro Fläche

```aufgabe
id: p9-1-check
art: check
titel: "Vorwissen: Womit drückt eine Kiste auf den Boden?"
niveau: 1
angabe: |
  Eine Kiste mit $30\,\text{kg}$ steht ruhig auf einem waagrechten Boden. Mit welcher Kraft drückt sie auf den Boden?
teile:
  - typ: zahl
    loesung: "30*9.81"
    einheit: "N"
    anzeige: '294'
    fehler:
      - wert: "30"
        meldung: |
          $30$ ist die Masse in Kilogramm. Eine Kraft misst man in Newton. Die Kiste drückt mit ihrer Gewichtskraft $F_G = m\cdot g$ auf den Boden.
      - wert: "0"
        meldung: |
          Die Kiste ruht, weil der Boden mit der Normalkraft genauso stark zurückdrückt. Die Kraft der Kiste auf den Boden ist deshalb nicht null. Sie ist so groß wie ihre Gewichtskraft.
hinweise:
  - Die Kiste drückt so stark auf den Boden, wie der Boden sie trägt. Wie stark muss der Boden sie tragen, damit sie ruht?
loesung: |
  **Ansatz:** Die Kiste ruht. Der Boden trägt sie also mit der Normalkraft $F_N = F_G$. Nach dem dritten Newtonschen Axiom drückt die Kiste mit gleich großer Kraft auf den Boden.
  ---
  **Rechnung:** $F = m\cdot g = 30\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 294\,\text{N}$. Wiederholen: Kapitel Dynamik, [Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf).
```

Stell dir eine verschneite Wiese vor. Mit Winterstiefeln sinkst du bei jedem Schritt tief ein. Mit
Schneeschuhen bleibst du fast an der Oberfläche. Dein Gewicht ist in beiden Fällen gleich. Der Unterschied liegt
nur darin, auf wie viel Fläche sich dein Gewicht verteilt.

Das ist die Grundidee dieses Abschnitts. Für die Wirkung einer Kraft auf eine Oberfläche zählt nicht die Kraft
allein. Es zählt, **wie viel Kraft auf jedes Stück Fläche** kommt. Diese Größe heißt Druck.

:::beispiel[Stiefel gegen Schneeschuh]
Eine Person mit $80\,\text{kg}$ steht mit beiden Füßen im Schnee. Ihre Gewichtskraft ist
$F = 80\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 785\,\text{N}$.

**Mit Stiefeln:** Jede Sohle hat etwa $300\,\text{cm}^2 = 0{,}030\,\text{m}^2$. Beide zusammen haben
$A = 0{,}060\,\text{m}^2$. Auf jeden Quadratmeter kommen
$$\frac{785\,\text{N}}{0{,}060\,\text{m}^2} \approx 13\,000\,\frac{\text{N}}{\text{m}^2}.$$

**Mit Schneeschuhen:** Jeder Schneeschuh hat etwa $0{,}20\,\text{m}^2$, beide zusammen $A = 0{,}40\,\text{m}^2$.
Auf jeden Quadratmeter kommen nur
$$\frac{785\,\text{N}}{0{,}40\,\text{m}^2} \approx 2000\,\frac{\text{N}}{\text{m}^2}.$$

**Antwort:** Mit Schneeschuhen lastet auf jedem Stück Schnee nur ein Sechstel bis ein Siebtel so viel. Der
Schnee hält das aus. Die Kraft ist gleich geblieben, nur ihre Verteilung hat sich geändert.
:::

### Was Druck ist

:::definition[Druck]
Wirkt eine Kraft $F$ senkrecht auf eine Fläche $A$ und verteilt sich gleichmäßig darauf, so ist der
**Druck**
$$p = \frac{F}{A}.$$
Dabei ist $p$ der Druck (vom englischen *pressure*), $F$ der Betrag der Kraft senkrecht zur Fläche und $A$ der
Flächeninhalt. Die SI-Einheit ist das **Pascal**: $1\,\text{Pa} = 1\,\text{N/m}^2$.
:::

In Worten: Der Druck sagt, wie viel Newton auf jeden Quadratmeter kommen. Ein Druck von $13\,000\,\text{Pa}$
heißt: Auf jedem Quadratmeter lasten $13\,000\,\text{N}$, auf jedem Quadratzentimeter also $1{,}3\,\text{N}$.

**Ein Nichtbeispiel.** Du schiebst ein Buch über den Tisch und drückst dabei nur waagrecht. Diese Kraft liegt
parallel zur Tischfläche. Sie erzeugt keinen Druck auf den Tisch. Zum Druck auf eine Fläche trägt nur der Teil
der Kraft bei, der **senkrecht** auf die Fläche wirkt.

:::beispiel[Stöckelschuh gegen Elefant]
Eine Frau mit $60\,\text{kg}$ verlagert beim Gehen ihr ganzes Gewicht kurz auf einen Absatz mit
$1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$:
$$p = \frac{60\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{10^{-4}\,\text{m}^2} = \frac{589\,\text{N}}{10^{-4}\,\text{m}^2} = 5{,}9\cdot 10^6\,\text{Pa}.$$
Ein Elefant mit $4000\,\text{kg}$ steht auf vier Füßen zu je $0{,}1\,\text{m}^2$, zusammen $0{,}4\,\text{m}^2$:
$$p = \frac{4000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}4\,\text{m}^2} = \frac{39\,240\,\text{N}}{0{,}4\,\text{m}^2} = 9{,}8\cdot 10^4\,\text{Pa}.$$
**Antwort:** Der Elefant drückt mit der 67-fachen Kraft, aber der Stöckelschuh mit dem sechzigfachen Druck.
Deshalb hinterlässt der Absatz Dellen im Parkettboden, der Elefant nicht.
:::

:::achtung[Fehler: Masse statt Gewichtskraft eingesetzt]
Für den Stöckelschuh rechnet ein Schüler $p = \dfrac{60}{10^{-4}} = 600\,000\,\text{Pa}$.

Er hat die Masse $60\,\text{kg}$ statt der Kraft eingesetzt. Das Ergebnis hat die Einheit
$\text{kg/m}^2$ und ist kein Druck. Richtig ist zuerst $F = m\cdot g = 589\,\text{N}$, dann
$p = 589\,\text{N}/10^{-4}\,\text{m}^2 = 5{,}9\cdot 10^6\,\text{Pa}$. Das ist fast zehnmal so viel.
:::

**Druck ist nicht dasselbe wie Kraft.** Eine Kraft hat eine Richtung, sie ist ein Vektor. Der Druck in einem
ruhenden Fluid hat keine Richtung, er ist ein **Skalar**, also eine Größe, die nur aus Zahl und Einheit besteht.
Erst wenn eine Fläche da ist, entsteht daraus eine Kraft. Sie steht immer senkrecht auf der Fläche und hat den
Betrag $F = p\cdot A$. Doppelte Fläche bei gleichem Druck heißt doppelte Kraft.

### Die Einheiten des Drucks

Ein Pascal ist ein sehr kleiner Druck. Ein Blatt Papier, das flach auf dem Tisch liegt, drückt mit etwa
$1\,\text{Pa}$. Deshalb sind größere Einheiten üblich:

- $1\,\text{hPa} = 100\,\text{Pa}$ (Hektopascal, im Wetterbericht). Das Millibar ist dasselbe: $1\,\text{mbar} = 1\,\text{hPa}$.
- $1\,\text{kPa} = 1000\,\text{Pa}$ (Kilopascal, in der Technik).
- $1\,\text{bar} = 10^5\,\text{Pa} = 1000\,\text{hPa}$ (Reifendruck, Wasserleitung).

Der normale **Luftdruck** auf Meereshöhe beträgt $p_0 = 1013\,\text{hPa} = 1{,}013\cdot 10^5\,\text{Pa}$, also
ungefähr $1\,\text{bar}$. Eine weitere alte Einheit, das Millimeter Quecksilbersäule (mmHg), lernst du in
[9.6 Luftdruck und die barometrische Höhenformel](/lernen/physik1/hydro-aeromechanik/luftdruck-und-die-barometrische-hoehenformel) kennen.

```aufgabe
id: p9-1-einheiten-check
art: check
titel: Welcher Druck ist größer?
niveau: 1
angabe: |
  Welcher Druck ist am größten?
teile:
  - typ: auswahl
    optionen:
      - "$0{,}5\\,\\text{bar}$"
      - "$600\\,\\text{hPa}$"
      - "$45\\,\\text{kPa}$"
      - "$5000\\,\\text{Pa}$"
    richtig: [1]
    fehler:
      - wert: 3
        meldung: |
          Die Zahl $5000$ ist groß, aber Pascal ist eine sehr kleine Einheit. $5000\,\text{Pa} = 50\,\text{hPa}$, das ist wenig.
      - wert: 0
        meldung: |
          $0{,}5\,\text{bar} = 500\,\text{hPa}$. Das ist weniger als $600\,\text{hPa}$.
hinweise:
  - Rechne alle Werte in dieselbe Einheit um, zum Beispiel in hPa.
loesung: |
  **Umrechnen in hPa:** $0{,}5\,\text{bar} = 500\,\text{hPa}$, $45\,\text{kPa} = 450\,\text{hPa}$, $5000\,\text{Pa} = 50\,\text{hPa}$.
  ---
  **Vergleich:** Am größten ist $600\,\text{hPa}$. Vergleiche Drücke immer erst nach dem Umrechnen in dieselbe Einheit.
```

:::achtung[Fehler: Quadratzentimeter wie Zentimeter umgerechnet]
Auf einen Kolben mit $2\,\text{cm}^2$ wirken $50\,\text{N}$. Eine Schülerin setzt $2\,\text{cm}^2 = 0{,}02\,\text{m}^2$
ein und erhält $p = 50\,\text{N}/0{,}02\,\text{m}^2 = 2500\,\text{Pa}$.

Der Faktor $0{,}01$ gilt nur für Längen. Bei Flächen wird er quadriert:
$1\,\text{cm}^2 = (0{,}01\,\text{m})^2 = 10^{-4}\,\text{m}^2$. Richtig ist
$p = 50\,\text{N}/(2\cdot 10^{-4}\,\text{m}^2) = 2{,}5\cdot 10^5\,\text{Pa}$, also hundertmal so viel. Ebenso gilt
$1\,\text{mm}^2 = 10^{-6}\,\text{m}^2$.
:::

### Woher der Druck eines Gases kommt

Woher kommt der Druck der Luft in einem aufgeblasenen Ballon? Niemand drückt von innen mit der Hand. Die Antwort
liefert das **Teilchenbild**. Die Luftteilchen fliegen mit einigen hundert Metern pro Sekunde kreuz und quer.
Sie prallen ständig gegen die Ballonhaut und werden zurückgeworfen. Jeder Aufprall gibt der Haut einen winzigen
Stoß nach außen.

Auf jeden Quadratzentimeter treffen pro Sekunde rund $10^{23}$ Teilchen. Die vielen kleinen Stöße verschmelzen
zu einer gleichmäßigen Kraft. Kraft pro Fläche ist der Druck. Mehr Teilchen im selben Raum, etwa durch
Zusammendrücken, erhöhen den Druck. Schnellere Teilchen, etwa durch Erwärmen, erhöhen ihn ebenfalls. Genauer
rechnet das das [Kapitel Temperatur, Wärme und Gasgesetze](/lernen/physik1/temperatur-waerme-gase/kinetische-gastheorie).

```plot
x: [-3, 3]
y: [-3, 3]
gleich: true
hoehe: 300
kurven:
  - { x: "1.5*cos(t)", y: "1.5*sin(t)", t: [0, "2*pi"], farbe: 0 }
vektoren:
  - { von: [1.5, 0], nach: [2.6, 0], farbe: 1 }
  - { von: [-1.5, 0], nach: [-2.6, 0], farbe: 1 }
  - { von: [0, 1.5], nach: [0, 2.6], farbe: 1 }
  - { von: [0, -1.5], nach: [0, -2.6], farbe: 1 }
  - { von: [1.06, 1.06], nach: [1.84, 1.84], farbe: 1 }
  - { von: [-1.06, 1.06], nach: [-1.84, 1.84], farbe: 1 }
  - { von: [1.06, -1.06], nach: [1.84, -1.84], farbe: 1 }
  - { von: [-1.06, -1.06], nach: [-1.84, -1.84], label: "Druckkraft", farbe: 1 }
punkte:
  - { x: 0, y: 0, label: "Gas" }
beschriftung: "Ein Ballon von außen gesehen. Das Gas im Inneren drückt an jeder Stelle gleich stark auf die Haut. Die Druckkräfte (orange) stehen überall senkrecht auf der Haut und sind gleich lang, weil der Druck im ruhenden Gas überall gleich ist."
```

Das Bild zeigt zwei Eigenschaften des Drucks in einem ruhenden Fluid. Erstens wirkt er **in alle Richtungen
gleich**. Zweitens steht die Druckkraft **immer senkrecht** auf der Fläche, auf die sie wirkt. Deshalb drückt
das Wasser im Schwimmbad nicht nur von oben auf dich, sondern auch von der Seite und von unten.

**Flüssigkeiten und Gase unterscheiden sich in einem Punkt stark.** In einer Flüssigkeit liegen die Teilchen
dicht aneinander. Um Wasser um nur $1\,\%$ zusammenzudrücken, braucht man etwa $220\,\text{bar}$. Man behandelt
Flüssigkeiten deshalb als **inkompressibel**, also nicht zusammendrückbar, mit konstanter Dichte. Gase sind
dagegen **kompressibel**: Doppelter Druck halbiert ungefähr ihr Volumen. Dieser Unterschied ist der wichtigste
zwischen Hydromechanik und Aeromechanik.

:::merke
**Druck berechnen:**
1. Bestimme die Kraft **senkrecht** zur Fläche. Ist eine Masse gegeben, rechne zuerst $F = m\cdot g$.
2. Rechne die Fläche in $\text{m}^2$ um: $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$, $1\,\text{mm}^2 = 10^{-6}\,\text{m}^2$.
3. Teile: $p = F/A$ in Pascal. Für den Vergleich mit dem Alltag in hPa oder bar umrechnen.
:::

```reflexion
frage: Warum schneidet ein scharfes Messer besser als ein stumpfes, obwohl du mit derselben Kraft drückst? Erkläre es mit dem Begriff Druck.
antwort: |
  Die Schneide eines scharfen Messers ist sehr schmal. Die Kraft deiner Hand verteilt sich deshalb auf eine winzige
  Fläche. Nach $p = F/A$ wird der Druck an der Schneide riesig, und das Material darunter gibt nach. Beim stumpfen
  Messer ist die Auflagefläche größer. Dieselbe Kraft erzeugt dort einen kleineren Druck, der nicht mehr reicht.
  Entscheidend für das Schneiden ist also der Druck, nicht die Kraft.
```

### Aufgaben zum Druck

```aufgabe
id: p9-druck-einheiten
titel: Druckeinheiten umrechnen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Der Wetterbericht meldet einen Luftdruck von $985\,\text{hPa}$. Gib diesen Druck in Pa und in bar an.
teile:
  - typ: zahl
    label: in Pa
    loesung: "985*100"
    einheit: "Pa"
    anzeige: '98\,500'
    fehler:
      - wert: "985*1000"
        meldung: |
          Die Vorsilbe „Hekto“ bedeutet $100$, nicht $1000$. Also ist $1\,\text{hPa} = 100\,\text{Pa}$.
  - typ: zahl
    label: in bar
    loesung: "985*100/1e5"
    einheit: "bar"
    anzeige: '0{,}985'
    fehler:
      - wert: "9.85"
        meldung: |
          $1\,\text{bar} = 1000\,\text{hPa}$. Deshalb sind $985\,\text{hPa}$ etwas **weniger** als ein bar, nicht fast zehn bar.
hinweise:
  - '$1\,\text{hPa} = 100\,\text{Pa}$ und $1\,\text{bar} = 10^5\,\text{Pa} = 1000\,\text{hPa}$.'
loesung: |
  **Ansatz:** Die Vorsilbe „Hekto“ bedeutet hundert, also $1\,\text{hPa} = 100\,\text{Pa}$. Ein bar sind $10^5\,\text{Pa}$.
  ---
  **Rechnung:** $985\,\text{hPa} = 985\cdot 100\,\text{Pa} = 98\,500\,\text{Pa}$, und $98\,500\,\text{Pa} = 98\,500/10^5\,\text{bar} = 0{,}985\,\text{bar}$.
  ---
  **Einordnung:** Das ist etwas weniger als der mittlere Luftdruck von $1013\,\text{hPa}$, also ein leichtes Tiefdruckgebiet.
```

```aufgabe
id: p9-druck-stoeckel
titel: Druck unter einem Absatz
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: |
  Eine Person mit $52\,\text{kg}$ belastet beim Gehen kurzzeitig nur einen Absatz mit $0{,}80\,\text{cm}^2$ Fläche. Welcher Druck wirkt auf den Boden ($g = 9{,}81\,\text{m/s}^2$)?
teile:
  - typ: zahl
    loesung: "52*9.81/0.8e-4"
    einheit: "Pa"
    anzeige: '6{,}38\cdot 10^{6}'
    fehler:
      - wert: "52*9.81/0.8e-2"
        meldung: |
          Du hast $0{,}80\,\text{cm}^2 = 0{,}0080\,\text{m}^2$ gesetzt. Bei Flächen ist der Faktor aber $10^{-4}$: $0{,}80\,\text{cm}^2 = 0{,}80\cdot 10^{-4}\,\text{m}^2$.
      - wert: "52/0.8e-4"
        meldung: |
          Du hast die Masse statt der Gewichtskraft eingesetzt. Druck ist Kraft pro Fläche. Rechne zuerst $F = m\cdot g$.
hinweise:
  - 'Zuerst die Gewichtskraft $F = m\cdot g$, dann die Fläche in $\text{m}^2$.'
loesung: |
  **Ansatz:** Druck ist Kraft pro Fläche. Die Kraft ist die Gewichtskraft der Person.
  ---
  **Kraft und Fläche:** $F = 52\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 510\,\text{N}$ und $A = 0{,}80\,\text{cm}^2 = 0{,}80\cdot 10^{-4}\,\text{m}^2$.
  ---
  **Druck:** $p = \dfrac{510\,\text{N}}{0{,}80\cdot 10^{-4}\,\text{m}^2} = 6{,}38\cdot 10^{6}\,\text{Pa}$, also rund $64\,\text{bar}$. Das ist mehr als das Sechzigfache des Luftdrucks.
```

```aufgabe
id: p9-druck-einbein
titel: Auf einem Bein stehen
niveau: 1
lernziel: 0
kompetenz: verstehen
angabe: |
  Du stehst zuerst auf beiden Füßen und dann auf einem Bein. Was ändert sich?
teile:
  - typ: auswahl
    optionen:
      - "Die Kraft auf den Boden halbiert sich, der Druck bleibt gleich."
      - "Die Kraft auf den Boden bleibt gleich, der Druck verdoppelt sich."
      - "Kraft und Druck verdoppeln sich beide."
      - "Die Kraft bleibt gleich, der Druck halbiert sich."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Dein ganzes Gewicht muss weiter vom Boden getragen werden. Die Kraft bleibt also gleich. Was sich ändert, ist die Fläche, auf die sie sich verteilt.
      - wert: 2
        meldung: |
          Du wirst auf einem Bein nicht schwerer. Die Kraft bleibt gleich. Nur der Druck ändert sich, weil die Fläche kleiner wird.
      - wert: 3
        meldung: |
          Die Fläche halbiert sich. In $p = F/A$ steht die Fläche im Nenner. Ein kleinerer Nenner macht den Druck **größer**.
hinweise:
  - Überlege getrennt, was mit der Kraft und was mit der Fläche passiert. Dann nutze $p = F/A$.
loesung: |
  **Kraft:** Der Boden trägt in beiden Fällen dein ganzes Gewicht. Die Kraft ist gleich.
  ---
  **Druck:** Die Auflagefläche halbiert sich. Nach $p = F/A$ verdoppelt sich der Druck. Kraft und Druck sind also verschiedene Größen.
```

```aufgabe
id: p9-reissnagel
titel: Der Reißnagel
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Reißnagel wird mit $20\,\text{N}$ in eine Pinnwand gedrückt. Die Spitze hat eine Fläche von $0{,}1\,\text{mm}^2$, der Kopf $1\,\text{cm}^2$. Berechne den Druck an der Spitze und am Daumen.
teile:
  - typ: zahl
    label: Druck an der Spitze
    loesung: "20/(0.1e-6)"
    einheit: "Pa"
    anzeige: '2\cdot 10^{8}'
    fehler:
      - wert: "20/(0.1e-3)"
        meldung: |
          $1\,\text{mm} = 10^{-3}\,\text{m}$, aber $1\,\text{mm}^2 = (10^{-3}\,\text{m})^2 = 10^{-6}\,\text{m}^2$. Die Fläche ist also $0{,}1\cdot 10^{-6}\,\text{m}^2$.
  - typ: zahl
    label: Druck am Daumen
    loesung: "20/1e-4"
    einheit: "Pa"
    anzeige: '2\cdot 10^{5}'
    fehler:
      - wert: "20/1e-2"
        meldung: |
          $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$, nicht $10^{-2}\,\text{m}^2$. Der Faktor $0{,}01$ gilt nur für Längen.
hinweise:
  - Der Nagel ruht. Die Kraft des Daumens auf den Kopf ist deshalb genauso groß wie die Kraft, mit der die Spitze auf die Wand drückt. Nur die Flächen sind verschieden.
  - '$0{,}1\,\text{mm}^2 = 0{,}1\cdot 10^{-6}\,\text{m}^2$ und $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$.'
loesung: |
  **Ansatz:** Der Nagel bewegt sich während des Drückens kaum, die Kräfte an beiden Enden sind gleich groß: $F = 20\,\text{N}$. Der Druck ist $p = F/A$ mit der jeweiligen Fläche.
  ```plot
  x: [-3, 3]
  y: [-1.5, 1.5]
  gleich: true
  hoehe: 160
  strecken:
    - { von: [-1, 0], nach: [1.5, 0] }
    - { von: [-1, -0.8], nach: [-1, 0.8] }
  vektoren:
    - { von: [-2.6, 0], nach: [-1, 0], label: "20 N vom Daumen", farbe: 1 }
    - { von: [2.6, 0], nach: [1.5, 0], label: "20 N von der Wand", farbe: 0 }
  ```
  ---
  **Spitze:** $p = \dfrac{20\,\text{N}}{0{,}1\cdot 10^{-6}\,\text{m}^2} = \dfrac{20\,\text{N}}{10^{-7}\,\text{m}^2} = 2\cdot 10^{8}\,\text{Pa} = 2000\,\text{bar}$.
  ---
  **Daumen:** $p = \dfrac{20\,\text{N}}{10^{-4}\,\text{m}^2} = 2\cdot 10^{5}\,\text{Pa} = 2\,\text{bar}$.
  ---
  **Deutung:** Gleiche Kraft, aber tausendfacher Druck an der Spitze. Deshalb dringt der Nagel in die Wand ein und nicht in den Daumen.
```

```aufgabe
id: p9-ziegel
titel: Wie soll der Ziegel liegen?
niveau: 2
lernziel: 0
kompetenz: anwenden
angabe: |
  Ein Ziegel hat die Masse $2{,}4\,\text{kg}$ und die Maße $24\,\text{cm}\times 11{,}5\,\text{cm}\times 7{,}1\,\text{cm}$. Er kann auf drei verschiedenen Seiten liegen.

  a) Wie groß ist die Kraft auf den Boden, wenn er auf der kleinsten Seite steht?

  b) Wie groß ist der Druck auf den Boden in diesem Fall? Runde auf ganze Pascal.

  c) Wie groß ist der Druck, wenn er auf der größten Seite liegt? Runde auf ganze Pascal.
teile:
  - typ: zahl
    label: a) Kraft
    loesung: "2.4*9.81"
    einheit: "N"
    anzeige: '23{,}5'
    fehler:
      - wert: "2.4*9.81*0.24/0.071"
        meldung: |
          Die Kraft hängt nicht davon ab, wie der Ziegel liegt. Er drückt immer mit seiner ganzen Gewichtskraft auf den Boden.
  - typ: zahl
    label: b) Druck auf der kleinsten Seite
    loesung: "2.4*9.81/(0.115*0.071)"
    einheit: "Pa"
    anzeige: '2884'
    toleranz: 3
    fehler:
      - wert: "2.4*9.81/(11.5*7.1)"
        meldung: |
          Du hast die Fläche in $\text{cm}^2$ eingesetzt. Für Pascal brauchst du $\text{m}^2$: $11{,}5\,\text{cm}\cdot 7{,}1\,\text{cm} = 0{,}115\,\text{m}\cdot 0{,}071\,\text{m}$.
  - typ: zahl
    label: c) Druck auf der größten Seite
    loesung: "2.4*9.81/(0.24*0.115)"
    einheit: "Pa"
    anzeige: '853'
    toleranz: 2
hinweise:
  - Die kleinste Seite hat die beiden kleinsten Kantenlängen, die größte Seite die beiden größten.
  - 'Rechne die Kanten in Meter um, bevor du die Fläche bildest. Dann $p = F/A$.'
loesung: |
  **Ansatz:** Die Kraft ist in jeder Lage die Gewichtskraft. Nur die Auflagefläche ändert sich, und damit der Druck.
  ---
  **a)** $F = 2{,}4\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 23{,}5\,\text{N}$.
  ---
  **b)** Kleinste Seite: $A = 0{,}115\,\text{m}\cdot 0{,}071\,\text{m} = 8{,}165\cdot 10^{-3}\,\text{m}^2$. Druck: $p = 23{,}5\,\text{N}/8{,}165\cdot 10^{-3}\,\text{m}^2 = 2884\,\text{Pa}$.
  ---
  **c)** Größte Seite: $A = 0{,}24\,\text{m}\cdot 0{,}115\,\text{m} = 0{,}0276\,\text{m}^2$. Druck: $p = 23{,}5\,\text{N}/0{,}0276\,\text{m}^2 = 853\,\text{Pa}$.
  ---
  **Probe:** Die Flächen verhalten sich wie $0{,}0276 : 0{,}008165 \approx 3{,}4$. Die Drücke verhalten sich umgekehrt, $2884 : 853 \approx 3{,}4$. Das passt zu $p = F/A$ bei gleicher Kraft.
```

```aufgabe
id: p9-sessel
titel: Wie groß müssen die Sesselbeine sein?
niveau: 2
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Parkettboden verträgt höchstens einen Druck von $2{,}0\,\text{MPa}$ ($1\,\text{MPa} = 10^6\,\text{Pa}$), ohne Dellen zu bekommen. Auf einem Sessel mit vier gleichen Beinen sitzt eine Person. Sessel und Person haben zusammen $90\,\text{kg}$. Wie groß muss die Auflagefläche **jedes** Beins mindestens sein? Gib das Ergebnis in $\text{cm}^2$ an und runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "90*9.81/2e6/4*1e4"
    einheit: "cm²"
    anzeige: '1{,}10'
    toleranz: 0.01
    fehler:
      - wert: "90*9.81/2e6*1e4"
        meldung: |
          Das ist die Fläche aller vier Beine zusammen. Gefragt ist die Fläche eines Beins. Jedes Bein trägt ein Viertel der Last.
      - wert: "90*9.81/2e6/4"
        meldung: |
          Das Ergebnis ist in $\text{m}^2$. Gefragt sind $\text{cm}^2$: $1\,\text{m}^2 = 10^4\,\text{cm}^2$.
hinweise:
  - 'Stelle $p = F/A$ nach der Fläche um: $A = F/p$.'
  - Die Last verteilt sich gleichmäßig auf vier Beine. Am Ende von $\text{m}^2$ in $\text{cm}^2$ umrechnen.
loesung: |
  **Ansatz:** Das ist eine Umkehraufgabe. Gegeben ist der höchste erlaubte Druck, gesucht die kleinste Fläche. Aus $p = F/A$ folgt $A = F/p$.
  ---
  **Kraft:** $F = 90\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 883\,\text{N}$, pro Bein $883\,\text{N}/4 = 221\,\text{N}$.
  ---
  **Fläche pro Bein:** $A = \dfrac{221\,\text{N}}{2{,}0\cdot 10^6\,\text{Pa}} = 1{,}10\cdot 10^{-4}\,\text{m}^2 = 1{,}10\,\text{cm}^2$.
  ---
  **Plausibilität:** Etwa ein Quadrat mit $1\,\text{cm}$ Seitenlänge. Dünne Metallbeine ohne Filzgleiter sind kleiner und hinterlassen deshalb Dellen.
```

```aufgabe
id: p9-nagelbrett
titel: Der Fakir auf dem Nagelbrett
niveau: 3
lernziel: 0
kompetenz: modellieren
angabe: |
  Ein Fakir mit $70\,\text{kg}$ legt sich auf ein Nagelbrett. Jede Nagelspitze hat die Fläche $0{,}20\,\text{mm}^2$. Nimm an, dass die Haut einen Druck von höchstens $1{,}5\,\text{MPa}$ ($1{,}5\cdot 10^6\,\text{Pa}$) unverletzt aushält. Wie viele Nägel müssen den Körper mindestens berühren? Gib die gerundete Zahl an.
teile:
  - typ: zahl
    loesung: "70*9.81/(1.5e6*0.20e-6)"
    anzeige: '2289'
    toleranz: 2
    fehler:
      - wert: "70/(1.5e6*0.20e-6)"
        meldung: |
          Du hast mit der Masse statt mit der Gewichtskraft gerechnet. Die Nägel müssen die Kraft $F = m\cdot g$ tragen.
      - wert: "70*9.81/(1.5e6*0.20e-3)"
        meldung: |
          $1\,\text{mm}^2 = 10^{-6}\,\text{m}^2$. Die Nagelfläche ist $0{,}20\cdot 10^{-6}\,\text{m}^2$.
hinweise:
  - Welche Kraft darf ein einzelner Nagel höchstens auf die Haut ausüben? Nutze $F = p\cdot A$.
  - Die gesamte Gewichtskraft muss sich auf die Nägel verteilen. Teile sie durch die höchste Kraft pro Nagel.
gefuehrt:
  - text: Wie groß ist die Gewichtskraft des Fakirs in Newton?
    teil: { typ: zahl, loesung: "70*9.81" }
    erklaerung: $F_G = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 686{,}7\,\text{N}$.
  - text: Welche Kraft darf ein einzelner Nagel höchstens übertragen? Rechne in Newton.
    teil: { typ: zahl, loesung: "1.5e6*0.20e-6" }
    erklaerung: $F_\text{Nagel} = p\cdot A = 1{,}5\cdot 10^6\,\text{Pa}\cdot 0{,}20\cdot 10^{-6}\,\text{m}^2 = 0{,}30\,\text{N}$. Das ist sehr wenig, etwa das Gewicht von $30\,\text{g}$.
  - text: Wie viele Nägel braucht man mindestens?
    teil: { typ: zahl, loesung: "70*9.81/(1.5e6*0.20e-6)", toleranz: 2 }
    erklaerung: $n = 686{,}7\,\text{N}/0{,}30\,\text{N} \approx 2289$.
  - text: Überlege, warum ein Brett mit nur wenigen Nägeln gefährlich wäre.
    erklaerung: Mit weniger Nägeln trägt jeder Nagel mehr Kraft. Der Druck an jeder Spitze steigt über die Grenze der Haut.
loesung: |
  **Ansatz:** Jeder Nagel darf nur so viel Kraft übertragen, dass der Druck an seiner Spitze $1{,}5\,\text{MPa}$ nicht übersteigt. Die Gewichtskraft verteilt sich auf alle berührenden Nägel.
  ---
  **Gewichtskraft:** $F_G = 70\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 686{,}7\,\text{N}$.
  ---
  **Kraft pro Nagel:** $F_\text{Nagel} = p\cdot A = 1{,}5\cdot 10^6\,\text{N/m}^2\cdot 0{,}20\cdot 10^{-6}\,\text{m}^2 = 0{,}30\,\text{N}$.
  ---
  **Anzahl:** $n = \dfrac{686{,}7\,\text{N}}{0{,}30\,\text{N}} \approx 2289$. Es müssen also mindestens rund $2300$ Nägel den Körper berühren. Ein Nagelbrett hat deshalb tausende dicht stehende Nägel.
```

## Der Schweredruck in Flüssigkeiten

```aufgabe
id: p9-2-check
art: check
titel: "Vorwissen: Masse einer Wassersäule"
niveau: 1
angabe: |
  Ein dünnes Rohr mit $1{,}0\,\text{cm}^2$ Querschnitt ist $2{,}0\,\text{m}$ hoch mit Wasser ($\rho = 1000\,\text{kg/m}^3$) gefüllt. Welche Masse hat das Wasser im Rohr? Gib das Ergebnis in kg an.
teile:
  - typ: zahl
    loesung: "1000*1e-4*2.0"
    einheit: "kg"
    anzeige: '0{,}2'
    fehler:
      - wert: "1000*1e-2*2.0"
        meldung: |
          $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$, nicht $10^{-2}\,\text{m}^2$. Bei Flächen wird der Faktor $0{,}01$ quadriert.
      - wert: "1000*1*2.0"
        meldung: |
          Du hast die Fläche als $1\,\text{m}^2$ eingesetzt. Das Rohr hat aber nur $1\,\text{cm}^2 = 10^{-4}\,\text{m}^2$ Querschnitt.
hinweise:
  - 'Volumen $V = A\cdot h$, dann Masse $m = \rho\cdot V$. Fläche zuerst in $\text{m}^2$.'
loesung: |
  **Volumen:** $V = A\cdot h = 10^{-4}\,\text{m}^2\cdot 2{,}0\,\text{m} = 2{,}0\cdot 10^{-4}\,\text{m}^3$, also $0{,}2$ Liter.
  ---
  **Masse:** $m = \rho\cdot V = 1000\,\text{kg/m}^3\cdot 2{,}0\cdot 10^{-4}\,\text{m}^3 = 0{,}2\,\text{kg}$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

Tauchst du im Schwimmbad zum Grund des Sprungbeckens, spürst du einen Druck in den Ohren. Je tiefer du kommst,
desto stärker wird er. Woher kommt dieser Druck? Er kommt vom **Gewicht des Wassers über dir**. Jede
Wasserschicht lastet auf der Schicht darunter. Je mehr Wasser über einer Stelle steht, desto größer ist dort
der Druck.

### Die Formel für den Schweredruck

**Worum geht es?** Wir wollen ausrechnen, wie groß der Druck in einer bestimmten Tiefe ist. Die Idee ist
einfach: Der Druck in der Tiefe $h$ ist das Gewicht der Flüssigkeit darüber, geteilt durch die Fläche, auf der
dieses Gewicht lastet.

**Das Bild:** Denk dir in einer ruhenden Flüssigkeit eine senkrechte Säule. Sie reicht von der Oberfläche bis
zur Tiefe $h$ und hat die Grundfläche $A$. Wir rechnen in kleinen Schritten.

1. Das Volumen der Säule ist Grundfläche mal Höhe: $V = A\cdot h$.
2. Ihre Masse ist Dichte mal Volumen: $m = \rho\cdot V = \rho\cdot A\cdot h$. Dabei ist $\rho$ (griechisch
   „rho“) die Dichte der Flüssigkeit.
3. Ihre Gewichtskraft ist $F_G = m\cdot g = \rho\cdot A\cdot h\cdot g$.
4. Dieses Gewicht lastet auf der Grundfläche $A$. Der Druck ist Kraft durch Fläche:
   $$p = \frac{F_G}{A} = \frac{\rho\cdot A\cdot h\cdot g}{A} = \rho\, g\, h.$$
   Die Fläche $A$ steht im Zähler und im Nenner, sie kürzt sich heraus.

**Was haben wir gezeigt?** Der Druck, den eine Flüssigkeit durch ihr eigenes Gewicht erzeugt, hängt nur von
ihrer Dichte und von der Tiefe ab. Die Breite der Säule spielt keine Rolle. Eine dünne und eine dicke Säule
gleicher Höhe erzeugen unten denselben Druck.

:::satz[Schweredruck (hydrostatischer Druck)]
In einer ruhenden Flüssigkeit mit der Dichte $\rho$ herrscht in der Tiefe $h$ unter der Oberfläche der Druck
$$p = p_0 + \rho\, g\, h.$$
Dabei ist $p_0$ der Druck an der Oberfläche, meist der Luftdruck. $g = 9{,}81\,\text{m/s}^2$ ist die
Fallbeschleunigung. Der Anteil $\rho g h$ heißt **Schweredruck** oder hydrostatischer Druck. Er hängt nur von der
Tiefe ab, nicht von der Form oder Größe des Gefäßes.
:::

```aufgabe
id: p9-2-formel-check
art: check
titel: Was steckt in der Formel?
niveau: 1
angabe: |
  Zwei Taucher sind gleich tief im selben See. Der eine schwimmt mitten im See, der andere in einer engen Felsspalte. Bei wem ist der Wasserdruck größer?
teile:
  - typ: auswahl
    optionen:
      - "mitten im See, weil dort mehr Wasser über ihm ist"
      - "in der Felsspalte, weil das Wasser dort eingeengt ist"
      - "bei beiden gleich"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Über beiden steht eine Wassersäule gleicher Höhe. In $p = p_0 + \rho g h$ kommt die Breite des Gewässers nicht vor.
      - wert: 1
        meldung: |
          Wasser lässt sich nicht zusammendrücken, und die Form der Umgebung kommt in $p = p_0 + \rho g h$ nicht vor.
hinweise:
  - Welche Größen kommen in $p = p_0 + \rho g h$ vor?
loesung: |
  **Ansatz:** Der Druck hängt nur von $p_0$, $\rho$ und der Tiefe $h$ ab.
  ---
  **Antwort:** Gleiche Tiefe im selben Wasser heißt gleicher Druck. Die Fläche hat sich bei der Herleitung herausgekürzt.
```

Das Wort „hydrostatisch“ heißt „zum ruhenden Wasser gehörend“. Der Luftdruck $p_0$ kommt dazu, weil die Luft
ihrerseits auf die Wasseroberfläche drückt, und dieser Druck pflanzt sich nach unten fort.

Für Wasser ist $\rho g = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2 = 9810\,\text{Pa/m}$. Pro Meter Tiefe kommen
also knapp $10\,000\,\text{Pa}$ dazu, pro zehn Meter fast $100\,000\,\text{Pa} = 1\,\text{bar}$.

:::merke
Pro **10 m Wassertiefe** steigt der Druck um etwa **1 bar**. In 10 m Tiefe herrschen also rund 2 bar:
1 bar Luftdruck plus 1 bar vom Wasser.
:::

:::beispiel[Der Wasserturm]
Ein Wasserturm hält den Wasserspiegel $40\,\text{m}$ über dem Erdgeschoß eines Wohnhauses.

**Schritt 1, Druck im Erdgeschoß:** Die Wasserleitung ist mit dem Turm verbunden. Im Erdgeschoß steht also eine
Wassersäule von $40\,\text{m}$ darüber. Der Druck über dem Luftdruck ist
$\rho g h = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 40\,\text{m} = 392\,400\,\text{Pa} \approx 3{,}9\,\text{bar}$.

**Schritt 2, Druck im zehnten Stock:** Er liegt $30\,\text{m}$ höher, nur noch $10\,\text{m}$ unter dem
Wasserspiegel. Dort ist der Druck nur $1000\cdot 9{,}81\cdot 10\,\text{Pa} = 98\,100\,\text{Pa} \approx 1\,\text{bar}$.

**Antwort:** Je höher eine Wohnung liegt, desto schwächer kommt das Wasser. Hochhäuser brauchen deshalb eigene
Pumpen. Ohne Pumpe kann das Wasser nirgends höher steigen als bis zum Wasserspiegel im Turm.
:::

### Absolutdruck und Überdruck

Druck kann man auf zwei Arten angeben.

- Der **Absolutdruck** $p$ wird gegen das Vakuum gemessen, also gegen einen völlig leeren Raum. Er enthält den
  Luftdruck. Ein Barometer zeigt den Absolutdruck.
- Der **Überdruck** $p - p_0$ wird gegen den Luftdruck gemessen. Er sagt, um wie viel der Druck über dem Luftdruck
  liegt. Ein Reifenmanometer an der Tankstelle zeigt den Überdruck.

Ein Beispiel: Zeigt das Reifenmanometer $2{,}0\,\text{bar}$, so sind im Reifen absolut etwa $3{,}0\,\text{bar}$.
Ein Nichtbeispiel: Der Luftdruck selbst hat den Überdruck null, obwohl sein Absolutdruck rund $1\,\text{bar}$ beträgt.

```plot
x: [0, 30]
y: [0, 450]
achsen: { x: "Tiefe h in m", y: "Druck p in kPa" }
graphen:
  - { f: "101.3+9.81*x", label: "Absolutdruck", farbe: 0, von: 0, bis: 30 }
  - { f: "9.81*x", label: "Überdruck", farbe: 1, von: 0, bis: 30, gestrichelt: true }
punkte:
  - { x: 0, y: 101.3, label: "Luftdruck" }
  - { x: 10, y: 199.4, label: "10 m: rund 2 bar" }
  - { x: 10, y: 98.1 }
beschriftung: "Druck in Süßwasser über der Tiefe. Beide Kurven sind Geraden mit derselben Steigung, nämlich ρ·g = 9,81 kPa pro Meter. Die Gerade für den Absolutdruck (blau) beginnt beim Luftdruck von 101,3 kPa. Die Gerade für den Überdruck (orange, gestrichelt) beginnt bei null."
```

Das Diagramm zeigt: Der Druck wächst **linear** mit der Tiefe. Doppelte Tiefe heißt doppelter Überdruck, aber
nicht doppelter Absolutdruck. Die Steigung der Geraden ist $\rho g$. Eine dichtere Flüssigkeit gibt eine
steilere Gerade. Aus der Steigung kann man deshalb die Dichte ablesen.

:::beispiel[Tauchen im Meer]
Eine Taucherin ist $25\,\text{m}$ tief im Meer. Meerwasser hat wegen des Salzes die Dichte
$1025\,\text{kg/m}^3$. Der Luftdruck ist $101\,300\,\text{Pa}$.

**Schritt 1, Schweredruck:** $\rho g h = 1025\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 25\,\text{m} = 251\,400\,\text{Pa}$.

**Schritt 2, Absolutdruck:** $p = p_0 + \rho g h = 101\,300\,\text{Pa} + 251\,400\,\text{Pa} = 352\,700\,\text{Pa} \approx 3{,}5\,\text{bar}$.

**Antwort:** In $25\,\text{m}$ Tiefe drückt das Wasser etwa dreieinhalbmal so stark wie die Luft an der
Oberfläche. Die Atemluft aus der Flasche muss mit genau diesem Druck geliefert werden, sonst könnte die
Taucherin den Brustkorb nicht weiten.
:::

:::achtung[Fehler: Überdruck und Absolutdruck verwechselt]
Gefragt ist der Druck in $30\,\text{m}$ Wassertiefe. Ein Schüler rechnet
$\rho g h = 1000\cdot 9{,}81\cdot 30\,\text{Pa} = 294\,300\,\text{Pa}$ und antwortet: „In 30 m Tiefe herrschen
2,9 bar.“

Das ist nur der Überdruck des Wassers. Der Absolutdruck enthält auch den Luftdruck:
$p = 101\,300\,\text{Pa} + 294\,300\,\text{Pa} = 395\,600\,\text{Pa} \approx 4{,}0\,\text{bar}$. Lies in jeder Aufgabe
genau, welcher Druck gefragt ist. Steht nichts dabei, gib beide an.
:::

:::achtung[Fehler: Tiefe vom Boden aus gemessen]
Ein Becken ist $4{,}0\,\text{m}$ tief. Ein Taucher ist $1{,}0\,\text{m}$ über dem Boden. Eine Schülerin setzt
$h = 1{,}0\,\text{m}$ ein und erhält einen Überdruck von $9810\,\text{Pa}$.

In der Formel ist $h$ die Tiefe **unter der Oberfläche**, denn es zählt das Wasser **über** dem Taucher. Richtig
ist $h = 4{,}0\,\text{m} - 1{,}0\,\text{m} = 3{,}0\,\text{m}$ und damit $\rho g h = 29\,430\,\text{Pa}$.
:::

### Druck messen mit dem U-Rohr

Das einfachste Druckmessgerät ist das **U-Rohr-Manometer**. Es ist ein U-förmig gebogenes Glasrohr, halb mit
Wasser gefüllt. Ein Schenkel wird mit dem Gefäß verbunden, dessen Druck man messen will. Der andere ist offen
zur Luft. Ist der Druck im Gefäß größer als der Luftdruck, drückt er das Wasser im einen Schenkel hinunter und im
anderen hinauf.

Der Höhenunterschied $\Delta h$ der beiden Wasserspiegel zeigt den Überdruck: $\Delta p = \rho g\,\Delta h$. Ein
Unterschied von $12\,\text{cm}$ Wasser bedeutet also
$\Delta p = 1000\cdot 9{,}81\cdot 0{,}12\,\text{Pa} = 1177\,\text{Pa}$. So misst man zum Beispiel den Gasdruck in
einer Hausleitung. Technische Manometer arbeiten mit einer Metallfeder oder einer Membran, die sich unter Druck
verformt.

```aufgabe
id: p9-2-urohr-check
art: check
titel: Was zeigt das U-Rohr?
niveau: 1
angabe: |
  An einem U-Rohr-Manometer mit Wasser steht der Spiegel im offenen Schenkel $5{,}0\,\text{cm}$ höher als im Schenkel, der mit einer Gasleitung verbunden ist. Welcher Überdruck herrscht in der Leitung?
teile:
  - typ: zahl
    loesung: "1000*9.81*0.05"
    einheit: "Pa"
    anzeige: '490{,}5'
    fehler:
      - wert: "1000*9.81*5"
        meldung: |
          Die Höhe muss in Metern stehen: $5{,}0\,\text{cm} = 0{,}050\,\text{m}$.
      - wert: "101300+1000*9.81*0.05"
        meldung: |
          Das U-Rohr misst den Unterschied zum Luftdruck, also den Überdruck. Den Luftdruck musst du hier nicht addieren.
hinweise:
  - 'Der Höhenunterschied der Spiegel zeigt den Überdruck: $\Delta p = \rho g\,\Delta h$.'
loesung: |
  **Ansatz:** Der Gasdruck drückt das Wasser im einen Schenkel um so viel tiefer, dass die Wassersäule im anderen Schenkel den Unterschied ausgleicht.
  ---
  **Rechnung:** $\Delta p = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}050\,\text{m} = 490{,}5\,\text{Pa}$, also knapp $5\,\text{hPa}$ über dem Luftdruck.
```

### Verbundene Gefäße

In **verbundenen Gefäßen**, auch kommunizierende Gefäße genannt, steht eine Flüssigkeit überall gleich hoch.
Das sind Gefäße, die unten durch ein Rohr verbunden sind. Ihre Form spielt keine Rolle. Warum? Wäre der Spiegel
in einem Gefäß höher, dann wäre unten an der Verbindung der Druck auf dieser Seite größer. Die Flüssigkeit würde
hinüberfließen, bis die Spiegel gleich hoch sind.

Beispiele sind die Gießkanne, deren Ausguss so hoch reichen muss wie der Rand, und die **Schlauchwaage**. Mit
ihr übertragen Handwerker eine Höhe über viele Meter. Auch der Geruchsverschluss unter dem Waschbecken und die
Schleuse am Fluss sind verbundene Gefäße.

Mit **zwei verschiedenen Flüssigkeiten**, die sich nicht mischen, stehen die Spiegel verschieden hoch. Gießt man
Öl in einen Schenkel eines U-Rohrs mit Wasser, gilt in der Höhe der Grenzfläche Druckgleichheit:
$$\rho_1\, g\, h_1 = \rho_2\, g\, h_2.$$
Dabei sind $h_1$ und $h_2$ die Höhen der beiden Säulen über der Grenzfläche. Nach Kürzen von $g$ folgt
$h_1/h_2 = \rho_2/\rho_1$. Die leichtere Flüssigkeit steht höher. So kann man Dichten vergleichen.

```aufgabe
id: p9-2-schlauchwaage-check
art: check
titel: Die Schlauchwaage
niveau: 1
angabe: |
  Ein Handwerker füllt einen langen, durchsichtigen Schlauch mit Wasser. Ein Ende hält er an eine Wand, das andere $15\,\text{m}$ entfernt an eine andere Wand. Was gilt für die beiden Wasserspiegel, wenn das Wasser ruht?
teile:
  - typ: auswahl
    optionen:
      - "Sie stehen genau gleich hoch."
      - "Der Spiegel am tieferen Schlauchende steht tiefer."
      - "Der Spiegel steht dort höher, wo mehr Wasser im Schlauch ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Wo der Schlauch dazwischen verläuft, spielt keine Rolle. Stünde ein Spiegel tiefer, wäre der Druck auf dieser Seite kleiner, und Wasser würde hinüberfließen.
      - wert: 2
        meldung: |
          Der Druck hängt nur von der Höhe des Spiegels ab, nicht von der Wassermenge. Deshalb stellen sich beide Spiegel gleich hoch ein.
hinweise:
  - Der Schlauch ist ein verbundenes Gefäß. Was passiert, wenn ein Spiegel höher stünde?
loesung: |
  **Ansatz:** Beide Enden gehören zu einem verbundenen Gefäß mit derselben Flüssigkeit.
  ---
  **Antwort:** Im Gleichgewicht stehen beide Spiegel gleich hoch. Damit überträgt der Handwerker eine Höhe von einer Wand zur anderen.
```

### Das hydrostatische Paradoxon

Drei Gefäße haben dieselbe Bodenfläche. Sie werden gleich hoch mit Wasser gefüllt. Das erste ist ein Zylinder,
das zweite wird nach oben weiter, das dritte nach oben enger.

```plot
x: [-0.5, 12]
y: [-0.8, 4.5]
gleich: true
hoehe: 230
strecken:
  - { von: [0, 0], nach: [2, 0] }
  - { von: [0, 0], nach: [0, 4] }
  - { von: [2, 0], nach: [2, 4] }
  - { von: [0, 3], nach: [2, 3], gestrichelt: true }
  - { von: [4.5, 0], nach: [6.5, 0] }
  - { von: [4.5, 0], nach: [3.5, 4] }
  - { von: [6.5, 0], nach: [7.5, 4] }
  - { von: [3.75, 3], nach: [7.25, 3], gestrichelt: true }
  - { von: [9, 0], nach: [11, 0] }
  - { von: [9, 0], nach: [9.8, 4] }
  - { von: [11, 0], nach: [10.2, 4] }
  - { von: [9.6, 3], nach: [10.4, 3], gestrichelt: true }
punkte:
  - { x: 1, y: -0.4, label: "A" }
  - { x: 5.5, y: -0.4, label: "B" }
  - { x: 10, y: -0.4, label: "C" }
beschriftung: "Drei Gefäße mit gleicher Bodenfläche, gleich hoch mit Wasser gefüllt (gestrichelte Linie = Wasserspiegel). A ist ein Zylinder, B wird nach oben weiter und enthält am meisten Wasser, C wird nach oben enger und enthält am wenigsten. Der Druck am Boden und die Kraft auf den Boden sind in allen drei Gefäßen gleich."
```

Gefäß B enthält viel mehr Wasser als A, Gefäß C viel weniger. Trotzdem ist die **Kraft auf den Boden in allen
drei gleich**. Der Druck am Boden ist überall $p_0 + \rho g h$ mit derselben Höhe $h$, und die Bodenfläche ist
gleich. Also ist auch $F = p\cdot A$ gleich. Das wirkt paradox, also widersinnig, weil das Wasser verschieden viel
wiegt. Man nennt es das **hydrostatische Paradoxon**.

**Die Auflösung:** Der Druck wirkt auch auf die schrägen Wände, und zwar senkrecht zu ihnen. Bei B drücken die
schrägen Wände schräg nach oben auf das Wasser. Sie tragen den Teil des Wassers, der nicht über dem Boden steht.
Bei C drücken die Wände schräg nach unten auf das Wasser und ersetzen so das fehlende Wassergewicht. Stellt man
die Gefäße auf eine Waage, zeigt sie natürlich trotzdem das verschiedene Gesamtgewicht. Die Waage misst die Kraft
auf Boden **und** Wände zusammen.

:::intuition
Der Druck an einer Stelle „weiß“ nur, wie hoch die Flüssigkeit darüber steht. Er „weiß“ nicht, wie viel
Flüssigkeit es insgesamt gibt. Ein dünnes Rohr, 10 m hoch mit Wasser gefüllt und auf ein Fass gesetzt, erzeugt
im Fass einen Überdruck von 1 bar. Blaise Pascal soll so mit wenigen Litern Wasser ein Weinfass gesprengt haben.
:::

:::merke
**Druck in einer Flüssigkeit berechnen:**
1. Miss die Tiefe $h$ von der **Oberfläche** nach unten bis zur betrachteten Stelle.
2. Schweredruck: $\rho g h$ mit $\rho$ in $\text{kg/m}^3$ und $h$ in m. Das ist der Überdruck.
3. Absolutdruck: $p = p_0 + \rho g h$.
4. Kraft auf eine Fläche: $F = p\cdot A$. Ist innen Luftdruck, wirkt netto nur der Überdruck.
:::

```reflexion
frage: Warum sind Staumauern unten viel dicker als oben? Und warum ist es für die Mauer egal, ob hinter ihr ein riesiger Stausee oder nur ein schmaler, gleich tiefer Wasserstreifen liegt?
antwort: |
  Der Schweredruck wächst linear mit der Tiefe. Unten drückt das Wasser am stärksten auf die Mauer, oben fast gar
  nicht. Deshalb braucht die Mauer unten die meiste Festigkeit. Der Druck hängt nur von der Tiefe ab, nicht von der
  Wassermenge. Ein schmaler Wasserstreifen gleicher Tiefe drückt deshalb genauso stark auf die Mauer wie ein großer
  See. Das ist dieselbe Idee wie beim hydrostatischen Paradoxon.
```

### Aufgaben zum Schweredruck

```aufgabe
id: p9-schweredruck-tauchen
titel: Druck in 10 m Tiefe
niveau: 1
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Taucher befindet sich $10\,\text{m}$ tief in einem Süßwassersee. Der Luftdruck beträgt $1013\,\text{hPa}$. Berechne den Schweredruck des Wassers und den Absolutdruck.
teile:
  - typ: zahl
    label: Schweredruck
    loesung: "1000*9.81*10"
    einheit: "Pa"
    anzeige: '98\,100'
    fehler:
      - wert: "101300+1000*9.81*10"
        meldung: |
          Das ist der Absolutdruck. Der Schweredruck ist nur der Anteil des Wassers, $\rho g h$, ohne Luftdruck.
  - typ: zahl
    label: Absolutdruck
    loesung: "101300+1000*9.81*10"
    einheit: "Pa"
    anzeige: '199\,400'
    fehler:
      - wert: "1013+1000*9.81*10"
        meldung: |
          Der Luftdruck muss auch in Pascal stehen: $1013\,\text{hPa} = 101\,300\,\text{Pa}$.
      - wert: "1000*9.81*10"
        meldung: |
          Das ist nur der Schweredruck. Zum Absolutdruck gehört auch der Luftdruck, der auf die Wasseroberfläche drückt.
hinweise:
  - 'Schweredruck $\rho g h$; Absolutdruck $p = p_0 + \rho g h$ mit $p_0$ in Pascal.'
loesung: |
  **Ansatz:** Der Schweredruck kommt vom Wasser über dem Taucher. Zum Absolutdruck kommt der Luftdruck dazu.
  ---
  **Schweredruck:** $\rho g h = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 10\,\text{m} = 98\,100\,\text{Pa} \approx 0{,}98\,\text{bar}$.
  ---
  **Absolutdruck:** $p = 101\,300\,\text{Pa} + 98\,100\,\text{Pa} = 199\,400\,\text{Pa} \approx 2\,\text{bar}$. Das passt zur Merkregel „10 m Wasser, 1 bar mehr“.
```

```aufgabe
id: p9-paradoxon
titel: Hydrostatisches Paradoxon
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Drei Gefäße haben die gleiche Bodenfläche und sind bis zur gleichen Höhe mit Wasser gefüllt. Gefäß A ist zylindrisch, B wird nach oben weiter, C nach oben enger. In welchem Gefäß ist der Druck auf den Boden am größten?
teile:
  - typ: auswahl
    optionen:
      - "in A"
      - "in B, weil es am meisten Wasser enthält"
      - "in C, weil das Wasser dort zusammengedrückt wird"
      - "in allen gleich"
    richtig: [3]
    fehler:
      - wert: 1
        meldung: |
          B enthält zwar am meisten Wasser, aber den Druck am Boden bestimmt nur die Höhe des Wasserspiegels darüber. Das zusätzliche Wasser tragen die schrägen Wände.
      - wert: 2
        meldung: |
          Wasser lässt sich praktisch nicht zusammendrücken. Der Druck hängt nur von der Füllhöhe ab, und die ist überall gleich.
hinweise:
  - Wovon hängt der Schweredruck ab? Suche in $p = p_0 + \rho g h$ eine Größe, die sich zwischen den Gefäßen unterscheidet.
loesung: |
  **Ansatz:** Der Bodendruck ist $p = p_0 + \rho g h$. Er hängt nur von der Dichte und der Füllhöhe ab.
  ---
  **Antwort:** Gleiche Höhe heißt gleicher Druck. Bei gleicher Bodenfläche ist auch die Bodenkraft gleich. Die verschiedenen Wassergewichte nehmen die schrägen Wände auf oder ergänzen sie.
```

```aufgabe
id: p9-trommelfell
titel: Kraft auf das Trommelfell
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Wie groß ist die zusätzliche Kraft auf ein Trommelfell mit $0{,}5\,\text{cm}^2$ Fläche in $5\,\text{m}$ Wassertiefe, wenn im Mittelohr noch Luftdruck herrscht? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "1000*9.81*5*0.5e-4"
    einheit: "N"
    anzeige: '2{,}45'
    fehler:
      - wert: "(101300+1000*9.81*5)*0.5e-4"
        meldung: |
          Im Mittelohr herrscht Luftdruck. Er drückt von innen und gleicht den Luftdruck von außen aus. Netto wirkt nur der Überdruck des Wassers.
      - wert: "1000*9.81*5*0.5e-2"
        meldung: |
          $0{,}5\,\text{cm}^2 = 0{,}5\cdot 10^{-4}\,\text{m}^2$. Der Faktor für Flächen ist $10^{-4}$, nicht $10^{-2}$.
hinweise:
  - Von außen drückt Luftdruck plus Wasser, von innen nur der Luftdruck. Was bleibt netto übrig?
  - '$F = \Delta p\cdot A$ mit $A = 0{,}5\cdot 10^{-4}\,\text{m}^2$.'
loesung: |
  **Ansatz:** Von außen wirkt $p_0 + \rho g h$, von innen $p_0$. Netto bleibt der Überdruck $\Delta p = \rho g h$.
  ---
  **Überdruck:** $\Delta p = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 5\,\text{m} = 49\,050\,\text{Pa}$.
  ---
  **Kraft:** $F = \Delta p\cdot A = 49\,050\,\text{Pa}\cdot 0{,}5\cdot 10^{-4}\,\text{m}^2 = 2{,}45\,\text{N}$. Das entspricht dem Gewicht von $250\,\text{g}$ auf einer winzigen Membran. Deshalb muss man beim Tauchen den Druck ausgleichen.
```

```aufgabe
id: p9-staumauer
titel: Druck am Fuß einer Staumauer
niveau: 2
lernziel: 1
kompetenz: rechnen
angabe: |
  Ein Stausee ist $150\,\text{m}$ tief. Wie groß ist der Überdruck des Wassers am Fuß der Staumauer, in bar? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "1000*9.81*150/1e5"
    einheit: "bar"
    anzeige: '14{,}7'
    toleranz: 0.05
    fehler:
      - wert: "(101300+1000*9.81*150)/1e5"
        meldung: |
          Das ist der Absolutdruck. Überdruck heißt: nur der Anteil des Wassers, ohne Luftdruck.
      - wert: "1000*9.81*150"
        meldung: |
          Das ist das Ergebnis in Pascal. Gefragt ist bar: $1\,\text{bar} = 10^5\,\text{Pa}$.
hinweise:
  - 'Überdruck heißt: nur der Schweredruck $\rho g h$, ohne Luftdruck.'
  - 'Am Ende von Pascal in bar umrechnen: durch $10^5$ teilen.'
loesung: |
  **Ansatz:** Der Überdruck ist der Schweredruck $\rho g h$ mit der vollen Tiefe von $150\,\text{m}$.
  ---
  **Rechnung:** $\rho g h = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 150\,\text{m} = 1{,}47\cdot 10^{6}\,\text{Pa}$.
  ---
  **Umrechnen:** $1{,}47\cdot 10^6\,\text{Pa} = 14{,}7\,\text{bar}$. Probe mit der Merkregel: $150\,\text{m}$ sind fünfzehnmal $10\,\text{m}$, also etwa $15\,\text{bar}$.
```

```aufgabe
id: p9-u-rohr
titel: Öl und Wasser im U-Rohr
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  In ein U-Rohr mit Wasser wird in den linken Schenkel Öl ($\rho = 800\,\text{kg/m}^3$) gegossen, bis die Ölsäule $10{,}0\,\text{cm}$ hoch ist. Wie hoch steht das Wasser im rechten Schenkel über der Höhe der Grenzfläche Öl/Wasser?
teile:
  - typ: zahl
    loesung: "800*10/1000"
    einheit: "cm"
    anzeige: '8{,}0'
    fehler:
      - wert: "1000*10/800"
        meldung: |
          Du hast die Dichten vertauscht. Wasser ist dichter als Öl, also reicht eine **kürzere** Wassersäule für denselben Druck.
      - wert: "10"
        meldung: |
          Gleich hoch stehen die Spiegel nur bei derselben Flüssigkeit. Hier sind die Dichten verschieden, also auch die Höhen.
hinweise:
  - In der Höhe der Grenzfläche ist der Druck in beiden Schenkeln gleich.
  - '$\rho_\text{Öl}\, g\, h_\text{Öl} = \rho_\text{W}\, g\, h_\text{W}$, nach $h_\text{W}$ auflösen.'
loesung: |
  **Ansatz:** In der Höhe der Grenzfläche ist der Druck links und rechts gleich. Links lastet die Ölsäule darauf, rechts die Wassersäule über dieser Höhe: $\rho_\text{Öl}\, g\, h_\text{Öl} = \rho_\text{W}\, g\, h_\text{W}$.
  ---
  **Umstellen:** Wir teilen beide Seiten durch $\rho_\text{W}\, g$: $h_\text{W} = h_\text{Öl}\cdot\dfrac{\rho_\text{Öl}}{\rho_\text{W}}$.
  ---
  **Rechnung:** $h_\text{W} = 10{,}0\,\text{cm}\cdot\dfrac{800\,\text{kg/m}^3}{1000\,\text{kg/m}^3} = 8{,}0\,\text{cm}$. Probe: Das leichtere Öl steht $2\,\text{cm}$ höher als das Wasser, wie erwartet.
```

```aufgabe
id: p9-diagramm-dichte
titel: Die Dichte aus einem Druckdiagramm
niveau: 2
lernziel: 1
kompetenz: verstehen
angabe: |
  In einem Tank mit einer unbekannten Flüssigkeit wird der Absolutdruck in verschiedenen Tiefen gemessen. Das Diagramm zeigt die Messgerade. Bestimme aus dem Diagramm die Dichte der Flüssigkeit in $\text{kg/m}^3$.
plot:
  x: [0, 10]
  y: [0, 200]
  achsen: { x: "Tiefe h in m", y: "p in kPa" }
  graphen:
    - { f: "101.3+7.848*x", farbe: 0, von: 0, bis: 10 }
  punkte:
    - { x: 0, y: 101.3, label: "101,3 kPa" }
    - { x: 5, y: 140.5, label: "140,5 kPa" }
teile:
  - typ: zahl
    loesung: "(140.5-101.3)*1000/(9.81*5)"
    einheit: "kg/m³"
    anzeige: '800'
    toleranz: 10
    fehler:
      - wert: "140.5*1000/(9.81*5)"
        meldung: |
          Du hast den ganzen Druck in $5\,\text{m}$ Tiefe genommen. Der enthält aber den Luftdruck an der Oberfläche. Für die Dichte zählt nur die **Zunahme** des Drucks.
      - wert: "(140.5-101.3)/(9.81*5)"
        meldung: |
          Die Druckwerte sind in Kilopascal. Rechne sie zuerst in Pascal um: $1\,\text{kPa} = 1000\,\text{Pa}$.
hinweise:
  - Die Steigung der Geraden ist $\rho g$. Lies zwei Punkte ab und bilde die Druckzunahme pro Meter.
  - 'Druckzunahme zwischen $0$ und $5\,\text{m}$ in Pascal, dann $\rho = \Delta p/(g\,\Delta h)$.'
loesung: |
  **Ansatz:** Nach $p = p_0 + \rho g h$ ist der Druck eine Gerade über der Tiefe. Ihre Steigung ist $\rho g$.
  ---
  **Ablesen:** Zwischen $h = 0$ und $h = 5\,\text{m}$ wächst der Druck um $140{,}5\,\text{kPa} - 101{,}3\,\text{kPa} = 39{,}2\,\text{kPa} = 39\,200\,\text{Pa}$.
  ---
  **Dichte:** $\rho = \dfrac{\Delta p}{g\,\Delta h} = \dfrac{39\,200\,\text{Pa}}{9{,}81\,\text{m/s}^2\cdot 5\,\text{m}} = 799\,\text{kg/m}^3 \approx 800\,\text{kg/m}^3$.
  ---
  **Einordnung:** Das passt zu Öl oder Alkohol. Wasser hätte eine steilere Gerade mit $9{,}81\,\text{kPa}$ pro Meter.
```

```aufgabe
id: p9-staumauer-kraft
titel: Die Gesamtkraft auf eine Staumauer
niveau: 3
lernziel: 1
kompetenz: modellieren
angabe: |
  Hinter einer senkrechten, $20\,\text{m}$ breiten Mauer steht Wasser $12\,\text{m}$ tief. Wie groß ist die gesamte Kraft, die der Überdruck des Wassers auf die Mauer ausübt? Gib das Ergebnis in Newton an.

  Hinweis zum Modell: Der Druck ist nicht überall gleich. Er wächst von null an der Oberfläche linear bis zum Boden. Für eine linear wachsende Größe darfst du mit dem Mittelwert aus kleinstem und größtem Wert rechnen.
teile:
  - typ: zahl
    loesung: "1000*9.81*12/2*12*20"
    einheit: "N"
    anzeige: '1{,}41\cdot 10^{7}'
    fehler:
      - wert: "1000*9.81*12*12*20"
        meldung: |
          Du hast überall den Druck am Boden angenommen. Oben an der Mauer ist der Überdruck aber null. Im Mittel wirkt nur die Hälfte des Bodendrucks.
      - wert: "1000*9.81*6*20"
        meldung: |
          Das ist der mittlere Druck mal der Breite, aber nicht mal der Fläche. Die gedrückte Fläche ist Breite mal Höhe, $20\,\text{m}\cdot 12\,\text{m}$.
hinweise:
  - Wie groß ist der Überdruck ganz oben und ganz unten an der Mauer?
  - Weil der Druck linear wächst, ist der mittlere Druck der Mittelwert aus dem Wert oben und dem Wert unten.
  - 'Gesamtkraft gleich mittlerer Druck mal Mauerfläche.'
gefuehrt:
  - text: Wie groß ist der Überdruck am Fuß der Mauer, in 12 m Tiefe? Gib ihn in Pascal an.
    teil: { typ: zahl, loesung: "1000*9.81*12" }
    erklaerung: $\rho g h = 1000\cdot 9{,}81\cdot 12\,\text{Pa} = 117\,720\,\text{Pa}$. An der Oberfläche ist der Überdruck null.
  - text: Wie groß ist der mittlere Überdruck auf die Mauer?
    teil: { typ: zahl, loesung: "1000*9.81*12/2" }
    erklaerung: Der Druck wächst linear von $0$ bis $117\,720\,\text{Pa}$. Der Mittelwert ist die Hälfte, $58\,860\,\text{Pa}$.
  - text: Wie groß ist die gedrückte Fläche in Quadratmetern?
    teil: { typ: zahl, loesung: "12*20" }
    erklaerung: Breite mal Wassertiefe, $20\,\text{m}\cdot 12\,\text{m} = 240\,\text{m}^2$.
  - text: Wie groß ist die Gesamtkraft?
    teil: { typ: zahl, loesung: "1000*9.81*12/2*12*20" }
    erklaerung: $F = 58\,860\,\text{Pa}\cdot 240\,\text{m}^2 = 1{,}41\cdot 10^7\,\text{N}$.
loesung: |
  **Ansatz:** Der Überdruck wächst linear von $0$ an der Oberfläche bis $\rho g h$ am Boden. Für eine linear wachsende Größe ist der Mittelwert der Durchschnitt aus Anfangs- und Endwert. Genau begründet wird das mit einem Integral, siehe Mathematik, [Mittelwert, Rotationsvolumen und Arbeit](/lernen/mathe3/integralrechnung/mittelwert-rotationsvolumen-und-arbeit).
  ---
  **Bodendruck:** $\rho g h = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 12\,\text{m} = 117\,720\,\text{Pa}$. Mittlerer Druck: $\bar p = 117\,720\,\text{Pa}/2 = 58\,860\,\text{Pa}$.
  ---
  **Fläche:** $A = 20\,\text{m}\cdot 12\,\text{m} = 240\,\text{m}^2$.
  ---
  **Kraft:** $F = \bar p\cdot A = 58\,860\,\text{N/m}^2\cdot 240\,\text{m}^2 = 1{,}41\cdot 10^{7}\,\text{N}$. Das ist die Gewichtskraft von rund $1440$ Tonnen. Die Kraft wächst mit dem **Quadrat** der Wassertiefe: Doppelte Tiefe gibt doppelten mittleren Druck auf doppelter Fläche.
```

## Das Prinzip von Pascal und die hydraulische Presse

```aufgabe
id: p9-3-check
art: check
titel: "Vorwissen: Arbeit gleich Kraft mal Weg"
niveau: 1
angabe: |
  Zwei Personen heben dieselbe Kiste auf denselben Tisch. Die erste hebt sie senkrecht $0{,}80\,\text{m}$ hoch und braucht dafür $200\,\text{N}$. Die zweite schiebt sie über eine lange Rampe und braucht nur $50\,\text{N}$. Welchen Weg legt die Kiste auf der Rampe zurück, wenn man die Reibung vernachlässigt?
teile:
  - typ: zahl
    loesung: "200*0.80/50"
    einheit: "m"
    anzeige: '3{,}2'
    fehler:
      - wert: "0.80"
        meldung: |
          Mit weniger Kraft kann man denselben Höhenunterschied nur über einen **längeren** Weg schaffen. Die Arbeit $F\cdot s$ ist in beiden Fällen gleich.
      - wert: "50*0.80/200"
        meldung: |
          Du hast das Verhältnis umgedreht. Weniger Kraft heißt mehr Weg, nicht weniger.
hinweise:
  - Ohne Reibung ist die Arbeit auf beiden Wegen gleich, $W = F\cdot s$.
loesung: |
  **Ansatz:** Ohne Reibung braucht man auf beiden Wegen dieselbe Arbeit, nämlich die Hubarbeit $W = 200\,\text{N}\cdot 0{,}80\,\text{m} = 160\,\text{J}$.
  ---
  **Rechnung:** $s = W/F = 160\,\text{J}/50\,\text{N} = 3{,}2\,\text{m}$. Was man an Kraft spart, muss man an Weg zulegen. Wiederholen: [Mechanische Arbeit](/lernen/physik1/arbeit-energie-impuls/mechanische-arbeit) und im Kapitel Drehbewegung und einfache Maschinen den Abschnitt [Goldene Regel der Mechanik und Wirkungsgrad](/lernen/physik1/drehbewegung-einfache-maschinen/goldene-regel-der-mechanik-und-wirkungsgrad).
```

Mit dem Fuß drückst du auf das Bremspedal, und an allen vier Rädern pressen sich die Bremsbeläge an. Mit
einem kleinen Hebel pumpst du einen Wagenheber, und ein Auto hebt sich. In beiden Fällen überträgt eine
eingeschlossene Flüssigkeit die Kraft. Diese Technik heißt **Hydraulik**.

### Das Prinzip von Pascal

**Worum geht es?** Drückt man mit einem Kolben auf eine eingeschlossene Flüssigkeit, steigt der Druck. Die Frage
ist: wo? Nur direkt unter dem Kolben, oder überall?

**Ein Bild:** Denk an eine verschlossene Plastikflasche voll Wasser, in die du mehrere kleine Löcher gestochen
hast. Drückst du auf die Flasche, spritzt das Wasser aus **allen** Löchern stärker. Auch aus den Löchern, die
weit von deiner Hand entfernt sind. Der zusätzliche Druck ist also überall angekommen.

**Warum ist das so?** Wäre der Druck an einer Stelle höher als an der Nachbarstelle, würde dort eine Kraft auf
die Flüssigkeit wirken. Sie würde strömen, bis der Unterschied verschwunden ist. In einer ruhenden Flüssigkeit
gibt es deshalb keine Druckunterschiede, außer denen durch das Eigengewicht aus
[9.2 Der Schweredruck in Flüssigkeiten](/lernen/physik1/hydro-aeromechanik/der-schweredruck-in-fluessigkeiten).

:::satz[Prinzip von Pascal]
Ein Druck, der von außen auf eine eingeschlossene, ruhende Flüssigkeit ausgeübt wird, pflanzt sich unverändert
in alle Teile der Flüssigkeit fort. An jeder Stelle steigt der Druck um denselben Betrag.
:::

„Unverändert fortpflanzen“ heißt: Erhöhst du den Druck am Kolben um $2\,\text{bar}$, steigt er an jeder anderen
Stelle der Flüssigkeit ebenfalls um $2\,\text{bar}$. Der Schweredruck kommt an tieferen Stellen nur noch dazu.

### Die hydraulische Presse

Zwei Zylinder mit verschieden großen Kolben sind unten durch eine Leitung verbunden und mit Öl gefüllt.

```plot
x: [-1, 9]
y: [-1.5, 5]
gleich: true
hoehe: 260
strecken:
  - { von: [0, -1], nach: [0, 3] }
  - { von: [1, 0], nach: [1, 3] }
  - { von: [4, 0], nach: [4, 3] }
  - { von: [8, -1], nach: [8, 3] }
  - { von: [0, -1], nach: [8, -1] }
  - { von: [1, 0], nach: [4, 0] }
  - { von: [0, 2], nach: [1, 2], farbe: 3 }
  - { von: [4, 1.5], nach: [8, 1.5], farbe: 3 }
vektoren:
  - { von: [0.5, 3.8], nach: [0.5, 2], label: "F₁ (klein)", farbe: 1 }
  - { von: [6, 1.5], nach: [6, 4.6], label: "F₂ (groß)", farbe: 0 }
punkte:
  - { x: 0.5, y: 1, label: "A₁" }
  - { x: 6, y: 0.6, label: "A₂" }
  - { x: 3, y: -0.5, label: "Öl: überall der Druck p" }
beschriftung: "Schema einer hydraulischen Presse. Auf den kleinen Kolben mit der Fläche A₁ wirkt die Kraft F₁ nach unten. Im Öl herrscht überall derselbe Druck p = F₁/A₁. Er drückt den großen Kolben mit der Fläche A₂ mit der viel größeren Kraft F₂ = p·A₂ nach oben."
```

Auf den kleinen Kolben mit der Fläche $A_1$ wirkt die Kraft $F_1$. Sie erzeugt im Öl den Druck
$p = F_1/A_1$. Nach Pascal herrscht derselbe Druck auch am großen Kolben mit der Fläche $A_2$. Dort entsteht die
Kraft
$$F_2 = p\cdot A_2 = F_1\cdot\frac{A_2}{A_1}.$$
Ist der große Kolben hundertmal so groß wie der kleine, ist auch die Kraft hundertmal so groß.

:::formel[Hydraulische Presse]
$$\frac{F_2}{F_1} = \frac{A_2}{A_1} \qquad\text{und}\qquad \frac{s_1}{s_2} = \frac{A_2}{A_1}$$
Dabei sind $F_1, F_2$ die Kräfte an den Kolben, $A_1, A_2$ ihre Flächen und $s_1, s_2$ die Wege, um die sie sich
bewegen. Die Kräfte verhalten sich wie die Flächen, die Wege umgekehrt.
:::

**Bekommt man die Kraft geschenkt?** Nein. Das Öl lässt sich nicht zusammendrücken. Drückt man den kleinen
Kolben um $s_1$ hinein, verschiebt man das Ölvolumen $A_1 s_1$. Genau dieses Volumen schiebt den großen Kolben
um $s_2$ hinaus: $A_1 s_1 = A_2 s_2$. Der große Kolben bewegt sich also nur ein kleines Stück. Für die Arbeiten
gilt
$$W_1 = F_1 s_1 = p\,A_1 s_1 = p\,A_2 s_2 = F_2 s_2 = W_2.$$
Die Arbeit ist auf beiden Seiten gleich. Das ist die **Goldene Regel der Mechanik** aus dem Kapitel Drehbewegung und einfache Maschinen,
Abschnitt [Goldene Regel der Mechanik und Wirkungsgrad](/lernen/physik1/drehbewegung-einfache-maschinen/goldene-regel-der-mechanik-und-wirkungsgrad). Sie besagt: Was man an Kraft
gewinnt, muss man an Weg zusetzen. Die hydraulische Presse ist eine einfache Maschine wie Hebel und Flaschenzug.

:::beispiel[Die Autobremse]
Der Fuß drückt mit $300\,\text{N}$ auf das Bremspedal. Das Pedal ist ein Hebel und verstärkt die Kraft um den
Faktor 4. Auf den Kolben des Hauptzylinders ($A_1 = 3\,\text{cm}^2$) wirken also $1200\,\text{N}$.

**Schritt 1, Druck:** $p = \dfrac{1200\,\text{N}}{3\cdot 10^{-4}\,\text{m}^2} = 4\cdot 10^6\,\text{Pa} = 40\,\text{bar}$.

**Schritt 2, Kraft am Rad:** Dieser Druck herrscht nach Pascal in der ganzen Bremsleitung. Jeder Bremskolben am
Rad hat $A_2 = 12\,\text{cm}^2$. Er drückt mit
$F_2 = 4\cdot 10^6\,\text{Pa}\cdot 12\cdot 10^{-4}\,\text{m}^2 = 4800\,\text{N}$ auf den Belag.

**Antwort:** Aus $300\,\text{N}$ am Fuß werden $4800\,\text{N}$ an jedem Rad. Weil der Druck überall gleich ist,
bremsen alle Räder gleichmäßig.
:::

**Ein Nichtbeispiel.** Ist eine Luftblase in der Bremsleitung, funktioniert die Bremse schlecht. Der Druck
pflanzt sich zwar auch durch Luft fort. Aber Luft lässt sich zusammendrücken. Der Kolben am Pedal muss die Blase
erst stark zusammenpressen, bevor der Druck hoch genug ist. Das Pedal „fällt durch“, bevor die Bremse richtig
greift. Die einfache Rechnung mit $A_1 s_1 = A_2 s_2$ setzt eine inkompressible Flüssigkeit voraus.

:::beispiel[Der Wagenheber]
Ein hydraulischer Wagenheber soll eine Ecke eines Autos anheben, auf der $400\,\text{kg}$ lasten. Der Pumpkolben
hat $1{,}5\,\text{cm}$ Durchmesser, der Hubkolben $6{,}0\,\text{cm}$.

**Schritt 1, Flächenverhältnis:** Kreisflächen wachsen mit dem Quadrat des Durchmessers, $A = \pi d^2/4$. Also
ist $\dfrac{A_2}{A_1} = \left(\dfrac{6{,}0}{1{,}5}\right)^2 = 4^2 = 16$.

**Schritt 2, Kraft am Pumpkolben:** Die Last ist $F_2 = 400\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 3924\,\text{N}$.
Am Pumpkolben braucht man nur $F_1 = 3924\,\text{N}/16 = 245\,\text{N}$.

**Schritt 3, Weg:** Ein Pumpstoß von $4{,}0\,\text{cm}$ hebt das Auto um $4{,}0\,\text{cm}/16 = 2{,}5\,\text{mm}$.

**Antwort:** Man braucht wenig Kraft, aber viele Pumpstöße. Ein zusätzlicher Hebel am Pumpkolben verkleinert die
Handkraft weiter.
:::

:::achtung[Fehler: Durchmesserverhältnis nicht quadriert]
Eine Presse hat Kolben mit $d_1 = 2\,\text{cm}$ und $d_2 = 10\,\text{cm}$. Am kleinen Kolben wirken $80\,\text{N}$.
Ein Schüler rechnet $F_2 = 80\,\text{N}\cdot\dfrac{10}{2} = 400\,\text{N}$.

Die Kräfte verhalten sich wie die **Flächen**, nicht wie die Durchmesser. Eine Kreisfläche wächst mit dem
Quadrat des Durchmessers. Richtig ist $F_2 = 80\,\text{N}\cdot\left(\dfrac{10}{2}\right)^2 = 80\,\text{N}\cdot 25 = 2000\,\text{N}$.
:::

:::achtung[Fehler: Beide Kolben bewegen sich gleich weit]
Eine Presse hat $A_1 = 3\,\text{cm}^2$ und $A_2 = 150\,\text{cm}^2$. Am kleinen Kolben wirken $50\,\text{N}$, also
am großen $2500\,\text{N}$. Der kleine Kolben wird $12\,\text{cm}$ hineingedrückt. Eine Schülerin nimmt an, dass
sich der große Kolben ebenfalls um $12\,\text{cm}$ hebt. Dann wäre $W_1 = 50\,\text{N}\cdot 0{,}12\,\text{m} = 6\,\text{J}$,
aber $W_2 = 2500\,\text{N}\cdot 0{,}12\,\text{m} = 300\,\text{J}$. Die Presse hätte Energie aus dem Nichts erzeugt.

Das ist unmöglich. Das verdrängte Ölvolumen ist auf beiden Seiten gleich, also
$s_2 = s_1\cdot A_1/A_2 = 12\,\text{cm}\cdot 3/150 = 0{,}24\,\text{cm}$. Damit ist
$W_2 = 2500\,\text{N}\cdot 0{,}0024\,\text{m} = 6\,\text{J}$, genau wie $W_1$.
:::

:::merke
**Hydraulik berechnen:**
1. Flächenverhältnis $A_2/A_1$ bestimmen. Bei Durchmessern quadrieren: $A_2/A_1 = (d_2/d_1)^2$.
2. Kräfte: $F_2 = F_1\cdot A_2/A_1$. Die Flächen dürfen in beliebiger, aber gleicher Einheit stehen.
3. Wege: $s_2 = s_1\cdot A_1/A_2$, weil das verdrängte Volumen gleich ist.
4. Druck im Öl: $p = F_1/A_1$, dafür die Fläche in $\text{m}^2$.
:::

```reflexion
frage: Ein Freund behauptet, mit einer hydraulischen Presse könne man ein Perpetuum mobile bauen, also eine Maschine, die von selbst Energie liefert. Man müsse nur den großen Kolben das Öl zurückdrücken lassen. Was antwortest du?
antwort: |
  Die Presse verstärkt die Kraft, aber nicht die Arbeit. Der große Kolben bewegt sich um genau so viel weniger, wie
  seine Kraft größer ist, denn das verdrängte Ölvolumen ist auf beiden Seiten gleich. Deshalb ist $F_1 s_1 = F_2 s_2$.
  Drückt man rückwärts, gilt dasselbe. Man bekommt im besten Fall die hineingesteckte Arbeit zurück. Durch Reibung im
  Öl und an den Dichtungen geht in Wirklichkeit sogar etwas verloren.
```

### Aufgaben zur hydraulischen Presse

```aufgabe
id: p9-hydraulik
titel: Hydraulische Presse
niveau: 1
lernziel: 2
kompetenz: rechnen
angabe: |
  Der kleine Kolben einer hydraulischen Presse hat $2\,\text{cm}^2$ Fläche, der große $200\,\text{cm}^2$. Auf den kleinen Kolben wirkt eine Kraft von $100\,\text{N}$. Welche Kraft übt der große Kolben aus?
teile:
  - typ: zahl
    loesung: "100*200/2"
    einheit: "N"
    anzeige: '10\,000'
    fehler:
      - wert: "100*2/200"
        meldung: |
          Du hast das Flächenverhältnis umgedreht. Der **große** Kolben liefert die **große** Kraft.
      - wert: "100*(200/2)^2"
        meldung: |
          Hier sind schon die Flächen gegeben, nicht die Durchmesser. Quadrieren muss man nur ein Durchmesserverhältnis.
hinweise:
  - 'Die Kräfte verhalten sich wie die Flächen: $F_2/F_1 = A_2/A_1$.'
loesung: |
  **Ansatz:** Nach Pascal ist der Druck an beiden Kolben gleich. Deshalb gilt $F_2/F_1 = A_2/A_1$. Das Flächenverhältnis hat keine Einheit, Umrechnen ist nicht nötig.
  ---
  **Rechnung:** $\dfrac{A_2}{A_1} = \dfrac{200\,\text{cm}^2}{2\,\text{cm}^2} = 100$, also $F_2 = 100\cdot 100\,\text{N} = 10\,000\,\text{N}$. Das ist etwa die Gewichtskraft einer Tonne.
```

```aufgabe
id: p9-pascal-konzept
titel: Wo steigt der Druck?
niveau: 1
lernziel: 2
kompetenz: verstehen
angabe: |
  Eine geschlossene, ganz mit Wasser gefüllte Spritze hat vorne drei kleine Löcher in verschiedenen Richtungen. Du drückst den Kolben hinein. Was passiert?
teile:
  - typ: auswahl
    optionen:
      - "Das Wasser spritzt nur aus dem Loch, das genau in Richtung des Kolbens zeigt, stärker heraus."
      - "Der Druck steigt überall im Wasser gleich stark, das Wasser spritzt aus allen Löchern stärker heraus."
      - "Der Druck steigt nur direkt am Kolben, vorne merkt man nichts."
      - "Das Wasser wird zusammengedrückt, deshalb spritzt gar nichts heraus."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Die Kraft des Kolbens hat eine Richtung, der Druck im Wasser aber nicht. Der zusätzliche Druck wirkt in alle Richtungen gleich, also an allen Löchern.
      - wert: 2
        meldung: |
          Ein Druckunterschied in einer Flüssigkeit lässt sie strömen, bis er ausgeglichen ist. Deshalb kommt der Druckanstieg überall an. Das ist das Prinzip von Pascal.
      - wert: 3
        meldung: |
          Wasser lässt sich praktisch nicht zusammendrücken. Für $1\,\%$ weniger Volumen bräuchte man über $200\,\text{bar}$.
hinweise:
  - Erinnere dich an das Prinzip von Pascal. Wie pflanzt sich ein Druck in einer eingeschlossenen Flüssigkeit fort?
loesung: |
  **Ansatz:** Nach dem Prinzip von Pascal pflanzt sich ein von außen ausgeübter Druck unverändert in alle Teile der Flüssigkeit fort.
  ---
  **Antwort:** Der Druck steigt überall um denselben Betrag. Das Wasser spritzt aus allen drei Löchern stärker heraus, egal in welche Richtung sie zeigen.
```

```aufgabe
id: p9-hydraulik-weg
titel: Kraftgewinn, Wegverlust
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Bei einer Presse mit $A_1 = 2\,\text{cm}^2$ und $A_2 = 200\,\text{cm}^2$ wird der kleine Kolben mit $F_1 = 100\,\text{N}$ um $10\,\text{cm}$ hineingedrückt.

  a) Um wie viele Millimeter hebt sich der große Kolben?

  b) Wie groß ist die Arbeit am kleinen Kolben?
teile:
  - typ: zahl
    label: a) Hub des großen Kolbens
    loesung: "100*2/200"
    einheit: "mm"
    anzeige: '1'
    fehler:
      - wert: "100"
        meldung: |
          Der große Kolben bewegt sich nicht so weit wie der kleine. Das verdrängte Ölvolumen verteilt sich auf eine hundertmal größere Fläche.
      - wert: "100*200/2"
        meldung: |
          Du hast das Verhältnis umgedreht. Der große Kolben bewegt sich **weniger** weit, nicht weiter.
  - typ: zahl
    label: b) Arbeit am kleinen Kolben
    loesung: "100*0.10"
    einheit: "J"
    anzeige: '10'
    fehler:
      - wert: "100*10"
        meldung: |
          Der Weg muss in Metern stehen: $10\,\text{cm} = 0{,}10\,\text{m}$. Dann kommt die Arbeit in Joule heraus.
hinweise:
  - Das verdrängte Ölvolumen ist auf beiden Seiten gleich, $A_1 s_1 = A_2 s_2$.
  - 'Arbeit $W = F\cdot s$ mit dem Weg in Metern.'
loesung: |
  **Ansatz:** Das Öl ist inkompressibel. Das Volumen, das der kleine Kolben verdrängt, schiebt den großen Kolben hinaus: $A_1 s_1 = A_2 s_2$.
  ---
  **a)** $s_2 = s_1\cdot\dfrac{A_1}{A_2} = 100\,\text{mm}\cdot\dfrac{2}{200} = 1\,\text{mm}$.
  ---
  **b)** $W_1 = F_1 s_1 = 100\,\text{N}\cdot 0{,}10\,\text{m} = 10\,\text{J}$.
  ---
  **Probe:** Am großen Kolben wirken $10\,000\,\text{N}$ auf $0{,}001\,\text{m}$, also ebenfalls $W_2 = 10\,\text{J}$. Das ist die Goldene Regel der Mechanik.
```

```aufgabe
id: p9-hebebuehne
titel: Hydraulische Hebebühne
niveau: 2
lernziel: 2
kompetenz: anwenden
angabe: |
  Ein Auto mit $1200\,\text{kg}$ steht auf einer hydraulischen Hebebühne mit $30\,\text{cm}$ Kolbendurchmesser. Der Pumpkolben hat $2{,}0\,\text{cm}$ Durchmesser.

  a) Welche Kraft braucht man am Pumpkolben? Runde auf eine Nachkommastelle.

  b) Wie groß ist der Überdruck im Öl? Gib ihn in Pascal an.
teile:
  - typ: zahl
    label: a) Kraft am Pumpkolben
    loesung: "1200*9.81*(2/30)^2"
    einheit: "N"
    anzeige: '52{,}3'
    fehler:
      - wert: "1200*9.81*2/30"
        meldung: |
          Du hast das Durchmesserverhältnis nicht quadriert. Die Kräfte verhalten sich wie die Flächen, und Kreisflächen wachsen mit dem Quadrat des Durchmessers.
  - typ: zahl
    label: b) Überdruck im Öl
    loesung: "1200*9.81/(pi*0.15^2)"
    einheit: "Pa"
    anzeige: '1{,}67\cdot 10^{5}'
    fehler:
      - wert: "1200*9.81/(pi*0.30^2)"
        meldung: |
          In $A = \pi r^2$ gehört der Radius, nicht der Durchmesser. Der Radius ist $15\,\text{cm} = 0{,}15\,\text{m}$.
hinweise:
  - 'Flächenverhältnis = Quadrat des Durchmesserverhältnisses.'
  - 'Der Druck ist die Gewichtskraft durch die Fläche des großen Kolbens, $A = \pi r^2$ mit $r = 0{,}15\,\text{m}$.'
loesung: |
  **Ansatz:** Der große Kolben trägt die Gewichtskraft des Autos. Das Öl überträgt den Druck unverändert zum Pumpkolben.
  ---
  **Gewichtskraft:** $F_2 = 1200\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 11\,772\,\text{N}$.
  ---
  **a)** $F_1 = F_2\cdot\left(\dfrac{d_1}{d_2}\right)^2 = 11\,772\,\text{N}\cdot\left(\dfrac{2{,}0}{30}\right)^2 = 52{,}3\,\text{N}$.
  ---
  **b)** $p = \dfrac{F_2}{\pi r_2^2} = \dfrac{11\,772\,\text{N}}{\pi\cdot(0{,}15\,\text{m})^2} = 1{,}67\cdot 10^{5}\,\text{Pa} \approx 1{,}7\,\text{bar}$. Probe: Am Pumpkolben gibt $52{,}3\,\text{N}/(\pi\cdot 0{,}01^2\,\text{m}^2)$ denselben Druck.
```

```aufgabe
id: p9-pumpstoesse
titel: Wie oft muss man pumpen?
niveau: 2
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Wagenheber hat einen Pumpkolben mit $2{,}0\,\text{cm}^2$ und einen Hubkolben mit $50\,\text{cm}^2$. Jeder Pumpstoß schiebt den Pumpkolben $5{,}0\,\text{cm}$ weit. Wie viele Pumpstöße braucht man, um ein Auto um $10\,\text{cm}$ anzuheben?
teile:
  - typ: zahl
    loesung: "10/(5.0*2.0/50)"
    anzeige: '50'
    fehler:
      - wert: "2"
        meldung: |
          So wäre es, wenn sich beide Kolben gleich weit bewegen würden. Der Hubkolben ist aber $25$-mal so groß und bewegt sich pro Stoß nur ein Fünfundzwanzigstel so weit.
      - wert: "10/(5.0*50/2.0)"
        meldung: |
          Du hast das Flächenverhältnis umgedreht. Der große Kolben bewegt sich pro Stoß **weniger** weit als der kleine.
hinweise:
  - Berechne zuerst, um wie viel sich der Hubkolben bei einem einzigen Pumpstoß hebt. Das verdrängte Volumen ist gleich.
  - 'Hub pro Stoß $s_2 = s_1\cdot A_1/A_2$. Dann die gesamte Hubhöhe durch den Hub pro Stoß teilen.'
loesung: |
  **Ansatz:** Bei jedem Stoß verdrängt der Pumpkolben das Volumen $A_1 s_1$. Es hebt den Hubkolben um $s_2 = s_1 A_1/A_2$.
  ---
  **Hub pro Stoß:** $s_2 = 5{,}0\,\text{cm}\cdot\dfrac{2{,}0\,\text{cm}^2}{50\,\text{cm}^2} = 0{,}20\,\text{cm}$.
  ---
  **Anzahl:** $n = \dfrac{10\,\text{cm}}{0{,}20\,\text{cm}} = 50$ Pumpstöße. Probe über das Volumen: $50\cdot 2{,}0\,\text{cm}^2\cdot 5{,}0\,\text{cm} = 500\,\text{cm}^3 = 50\,\text{cm}^2\cdot 10\,\text{cm}$.
```

```aufgabe
id: p9-presse-fehler
titel: Fehler finden bei einer Presse
niveau: 2
lernziel: 2
kompetenz: begruenden
angabe: |
  Eine Werkstattpresse hat einen Pumpkolben mit $1{,}5\,\text{cm}$ und einen Presskolben mit $9{,}0\,\text{cm}$ Durchmesser. Am Pumpkolben wirken $60\,\text{N}$. Ein Lehrling rechnet: „$9{,}0 : 1{,}5 = 6$, also presst der große Kolben mit $6\cdot 60\,\text{N} = 360\,\text{N}$.“

  Welche Kraft liefert der Presskolben wirklich?
teile:
  - typ: zahl
    loesung: "60*(9.0/1.5)^2"
    einheit: "N"
    anzeige: '2160'
    fehler:
      - wert: "360"
        meldung: |
          Das ist die Rechnung des Lehrlings. Sie verwendet das Verhältnis der Durchmesser. Die Kraft hängt aber vom Verhältnis der **Flächen** ab.
      - wert: "60*9.0/1.5*2"
        meldung: |
          Quadrieren heißt mit sich selbst multiplizieren, nicht verdoppeln: $6^2 = 36$, nicht $12$.
hinweise:
  - Woran erkennst du den Fehler? Vergleiche, wie eine Kreisfläche vom Durchmesser abhängt.
  - '$A = \pi d^2/4$. Das Flächenverhältnis ist also $(d_2/d_1)^2$.'
loesung: |
  **Fehler:** Der Lehrling hat die Durchmesser ins Verhältnis gesetzt. Nach Pascal ist aber der Druck gleich, und die Kraft ist Druck mal **Fläche**.
  ---
  **Flächenverhältnis:** $\dfrac{A_2}{A_1} = \left(\dfrac{9{,}0}{1{,}5}\right)^2 = 6^2 = 36$.
  ---
  **Richtige Kraft:** $F_2 = 36\cdot 60\,\text{N} = 2160\,\text{N}$, sechsmal so viel wie der Lehrling dachte. Probe: Der sechsfache Durchmesser ergibt die sechsunddreißigfache Fläche.
```

```aufgabe
id: p9-bremsanlage
titel: Die Bremsanlage eines Autos
niveau: 3
lernziel: 2
kompetenz: modellieren
angabe: |
  Ein Fahrer tritt mit $250\,\text{N}$ auf das Bremspedal. Das Pedal wirkt als Hebel und verstärkt die Kraft um den Faktor $5$. Der Kolben im Hauptzylinder hat $2{,}0\,\text{cm}$ Durchmesser, jeder Bremskolben an den Rädern $4{,}5\,\text{cm}$.

  a) Welcher Druck entsteht in der Bremsflüssigkeit? Gib ihn in bar an und runde auf eine Nachkommastelle.

  b) Mit welcher Kraft drückt jeder Bremskolben auf seinen Belag? Runde auf ganze Newton.

  c) Erkläre, warum eine Luftblase in der Leitung die Bremswirkung verschlechtert.
teile:
  - typ: zahl
    label: a) Druck
    loesung: "250*5/(pi*0.01^2)/1e5"
    einheit: "bar"
    anzeige: '39{,}8'
    toleranz: 0.1
  - typ: zahl
    label: b) Kraft je Bremskolben
    loesung: "250*5*(4.5/2.0)^2"
    einheit: "N"
    anzeige: '6328'
    toleranz: 5
  - typ: text
    label: c) Luftblase
    muster: |
      Luft lässt sich im Gegensatz zur Bremsflüssigkeit zusammendrücken. Drückt der Hauptzylinder, wird zuerst die Blase
      zusammengepresst, statt dass sich das Volumen bis zu den Bremskolben durchschiebt. Der Pedalweg reicht dann
      eventuell nicht, um den nötigen Druck aufzubauen. Das Pedal fühlt sich weich an und lässt sich weit durchtreten.
hinweise:
  - Bestimme zuerst die Kraft auf den Hauptzylinderkolben. Dann Druck gleich Kraft durch Fläche, $A = \pi r^2$.
  - Nach Pascal herrscht derselbe Druck an jedem Bremskolben. Kraft gleich Druck mal Fläche, oder direkt mit dem Quadrat des Durchmesserverhältnisses.
  - Für c) überlege, welche Voraussetzung die Formel $A_1 s_1 = A_2 s_2$ braucht.
gefuehrt:
  - text: Welche Kraft wirkt auf den Kolben des Hauptzylinders?
    teil: { typ: zahl, loesung: "250*5" }
    erklaerung: Der Pedalhebel verstärkt fünffach, $250\,\text{N}\cdot 5 = 1250\,\text{N}$.
  - text: Wie groß ist die Fläche dieses Kolbens in Quadratmetern?
    teil: { typ: zahl, loesung: "pi*0.01^2" }
    erklaerung: $A_1 = \pi r^2 = \pi\cdot(0{,}010\,\text{m})^2 = 3{,}14\cdot 10^{-4}\,\text{m}^2$.
  - text: Welcher Druck entsteht? Gib ihn in Pascal an.
    teil: { typ: zahl, loesung: "250*5/(pi*0.01^2)" }
    erklaerung: $p = 1250\,\text{N}/3{,}14\cdot 10^{-4}\,\text{m}^2 = 3{,}98\cdot 10^6\,\text{Pa} = 39{,}8\,\text{bar}$.
  - text: Mit welcher Kraft drückt ein Bremskolben?
    teil: { typ: zahl, loesung: "250*5*(4.5/2.0)^2", toleranz: 5 }
    erklaerung: Das Flächenverhältnis ist $(4{,}5/2{,}0)^2 = 5{,}0625$. Also $F_2 = 1250\,\text{N}\cdot 5{,}0625 = 6328\,\text{N}$.
loesung: |
  **Ansatz:** Das Pedal verstärkt die Fußkraft. Die Bremsflüssigkeit überträgt den Druck nach Pascal unverändert zu allen Bremskolben.
  ---
  **a)** Kraft am Hauptzylinder: $250\,\text{N}\cdot 5 = 1250\,\text{N}$. Fläche: $A_1 = \pi\cdot(0{,}010\,\text{m})^2 = 3{,}14\cdot 10^{-4}\,\text{m}^2$. Druck: $p = 1250\,\text{N}/3{,}14\cdot 10^{-4}\,\text{m}^2 = 3{,}98\cdot 10^6\,\text{Pa} = 39{,}8\,\text{bar}$.
  ---
  **b)** $F_2 = 1250\,\text{N}\cdot\left(\dfrac{4{,}5}{2{,}0}\right)^2 = 1250\,\text{N}\cdot 5{,}06 = 6328\,\text{N}$. Probe: $p\cdot A_2 = 3{,}98\cdot 10^6\,\text{Pa}\cdot\pi\cdot(0{,}0225\,\text{m})^2 = 6328\,\text{N}$.
  ---
  **c)** Die Formel $A_1 s_1 = A_2 s_2$ setzt voraus, dass sich die Flüssigkeit nicht zusammendrücken lässt. Eine Luftblase wird aber zusammengedrückt. Der Pedalweg geht dann teilweise verloren, und der nötige Druck baut sich nicht oder zu spät auf.
```

## Auftrieb: das Prinzip von Archimedes

```aufgabe
id: p9-4-check
art: check
titel: "Vorwissen: resultierende Kraft"
niveau: 1
angabe: |
  Auf einen Körper wirken genau zwei Kräfte: $50\,\text{N}$ nach oben und $30\,\text{N}$ nach unten. Wie groß ist die resultierende Kraft, und wohin zeigt sie?
teile:
  - typ: auswahl
    optionen:
      - "$80\\,\\text{N}$ nach oben"
      - "$20\\,\\text{N}$ nach oben"
      - "$20\\,\\text{N}$ nach unten"
      - "null, weil zwei Kräfte wirken"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Entgegengesetzte Kräfte werden nicht addiert, sondern voneinander abgezogen. Die größere gewinnt um die Differenz.
      - wert: 2
        meldung: |
          Die Differenz ist richtig, aber die Richtung nicht. Die resultierende Kraft zeigt in die Richtung der größeren Kraft, hier nach oben.
      - wert: 3
        meldung: |
          Null ist die Summe nur, wenn beide Kräfte gleich groß sind. Hier ist die Kraft nach oben um $20\,\text{N}$ größer.
hinweise:
  - Kräfte in entgegengesetzte Richtungen werden voneinander abgezogen.
loesung: |
  **Ansatz:** Die beiden Kräfte liegen auf einer Linie und zeigen in entgegengesetzte Richtungen. Wir ziehen sie voneinander ab.
  ---
  **Ergebnis:** $50\,\text{N} - 30\,\text{N} = 20\,\text{N}$ nach oben, in Richtung der größeren Kraft. Wiederholen: [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
```

Einen schweren Stein kannst du unter Wasser viel leichter heben als an Land. Ein Holzstück, das du unter
Wasser drückst, schnellt nach oben. Ein Heliumballon steigt in die Luft. In allen drei Fällen wirkt eine Kraft
nach oben, die vom umgebenden Fluid kommt. Sie heißt **Auftrieb** oder **Auftriebskraft**, Formelzeichen $F_A$.

Dieser Abschnitt klärt zwei Fragen: Woher kommt der Auftrieb, und wie groß ist er? Die Antwort auf die zweite
Frage ist eines der ältesten Gesetze der Physik. Archimedes von Syrakus hat es vor über 2200 Jahren gefunden.

### Woher der Auftrieb kommt

**Worum geht es?** Wir zeigen, dass der Auftrieb eine Folge des Schweredrucks ist. Unten an einem Körper ist
der Druck größer als oben. Deshalb drückt das Wasser von unten stärker als von oben.

**Das Bild:** Ein Quader mit der Grundfläche $A$ und der Höhe $h$ ist ganz untergetaucht. Seine Oberseite liegt
in der Tiefe $t$, seine Unterseite in der Tiefe $t + h$. Die Flüssigkeit hat die Dichte $\rho_\text{Fl}$.

```plot
x: [-3.5, 3.5]
y: [-3, 3.2]
gleich: true
hoehe: 300
strecken:
  - { von: [-1, -1], nach: [1, -1] }
  - { von: [1, -1], nach: [1, 1] }
  - { von: [1, 1], nach: [-1, 1] }
  - { von: [-1, 1], nach: [-1, -1] }
  - { von: [-3.5, 2.8], nach: [3.5, 2.8], gestrichelt: true }
vektoren:
  - { von: [0, 1.9], nach: [0, 1], label: "F oben", farbe: 1 }
  - { von: [0, -2.6], nach: [0, -1], label: "F unten", farbe: 0 }
  - { von: [-2.2, 0], nach: [-1, 0], farbe: 3 }
  - { von: [2.2, 0], nach: [1, 0], label: "seitlich", farbe: 3 }
punkte:
  - { x: 2.6, y: 3.05, label: "Wasseroberfläche" }
beschriftung: "Freikörperbild der Druckkräfte auf einen untergetauchten Quader. Die seitlichen Kräfte (violett) sind gleich groß und heben sich auf. Die Kraft von unten (blau) ist größer als die Kraft von oben (orange), weil die Unterseite tiefer liegt. Die Differenz ist der Auftrieb nach oben. Die Gewichtskraft des Quaders ist hier nicht gezeichnet."
```

Wir rechnen in kleinen Schritten.

1. **Seitliche Kräfte:** Auf gegenüberliegende Seitenflächen drückt in jeder Tiefe derselbe Druck. Die Kräfte sind
   gleich groß und entgegengesetzt. Sie heben sich auf.
2. **Kraft von oben:** In der Tiefe $t$ herrscht der Druck $p_0 + \rho_\text{Fl}\, g\, t$. Er drückt mit
   $F_\text{oben} = (p_0 + \rho_\text{Fl}\, g\, t)\cdot A$ nach unten.
3. **Kraft von unten:** In der Tiefe $t + h$ ist der Druck größer. Er drückt mit
   $F_\text{unten} = (p_0 + \rho_\text{Fl}\, g\,(t + h))\cdot A$ nach oben.
4. **Differenz:** Beim Abziehen fallen $p_0$ und $t$ heraus:
   $$F_A = F_\text{unten} - F_\text{oben} = \rho_\text{Fl}\, g\, h\, A = \rho_\text{Fl}\, g\, V.$$
   Dabei ist $V = h\cdot A$ das Volumen des Quaders.

**Was haben wir gezeigt?** Der Auftrieb ist der Überschuss der Druckkraft von unten über die Druckkraft von
oben. Er hängt von der Dichte der Flüssigkeit und vom Volumen des Körpers ab. Die Tiefe $t$ ist herausgefallen. Ein
ganz untergetauchter Körper erfährt also in jeder Tiefe denselben Auftrieb. Auch das Material des Körpers kommt
in der Formel nicht vor.

:::satz[Prinzip von Archimedes]
Ein Körper, der in ein Fluid eintaucht, erfährt eine **Auftriebskraft** nach oben. Sie ist so groß wie die
Gewichtskraft des **verdrängten Fluids**:
$$F_A = \rho_\text{Fl}\cdot g\cdot V_\text{eing}.$$
Dabei ist $\rho_\text{Fl}$ die Dichte des Fluids, also der Flüssigkeit oder des Gases, und $V_\text{eing}$ das
Volumen des eingetauchten Teils des Körpers. Das ist genau das Volumen an Fluid, das der Körper zur Seite
geschoben, also verdrängt, hat.
:::

Das Prinzip gilt für jede Körperform, nicht nur für Quader, und für Flüssigkeiten wie für Gase. Taucht ein
Körper nur teilweise ein, zählt nur der eingetauchte Teil.

**Ein Gedankenexperiment** zeigt das ohne Rechnung. Denk dir den Stein unter Wasser weg und an seine Stelle ein
gleich geformtes Stück Wasser. Dieses Wasserstück schwebt, es sinkt nicht und steigt nicht. Also muss das
umgebende Wasser es mit einer Kraft tragen, die genau seinem Gewicht entspricht. Das umgebende Wasser „merkt“
nicht, was an dieser Stelle ist. Es drückt auf den Stein genauso wie auf das Wasserstück. Also erfährt auch der
Stein die Gewichtskraft des verdrängten Wassers als Auftrieb.

:::beispiel[Wie viel wiegt ein Stein unter Wasser?]
Ein Granitstein mit der Dichte $2700\,\text{kg/m}^3$ hat $10\,\text{kg}$ Masse. Er liegt ganz unter Wasser.

**Schritt 1, Volumen:** $V = m/\rho = 10\,\text{kg}/2700\,\text{kg/m}^3 = 3{,}70\cdot 10^{-3}\,\text{m}^3$, also $3{,}7$ Liter.

**Schritt 2, Auftrieb:** $F_A = \rho_W\, g\, V = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 3{,}70\cdot 10^{-3}\,\text{m}^3 = 36\,\text{N}$.

**Schritt 3, Haltekraft:** Die Gewichtskraft ist $10\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 98\,\text{N}$. Unter
Wasser musst du nur $98\,\text{N} - 36\,\text{N} = 62\,\text{N}$ aufbringen.

**Antwort:** Der Stein fühlt sich an wie ein Stein mit $6{,}3\,\text{kg}$ an Land. Die verkleinerte Kraft
$F_G - F_A = 62\,\text{N}$, die man unter Wasser noch spürt, heißt **scheinbares Gewicht**. Astronauten üben deshalb Arbeiten im Raumanzug in großen Wassertanks.
:::

:::achtung[Fehler: Dichte des Körpers statt Dichte des Fluids]
Eine Eisenkugel mit $0{,}5\,\text{L}$ Volumen liegt im Wasser. Eisen hat $7870\,\text{kg/m}^3$. Ein Schüler rechnet
$F_A = 7870\cdot 9{,}81\cdot 5\cdot 10^{-4}\,\text{N} = 38{,}6\,\text{N}$.

Das ist die Gewichtskraft der Kugel, nicht der Auftrieb. Der Auftrieb ist das Gewicht des **verdrängten Wassers**:
$F_A = 1000\cdot 9{,}81\cdot 5\cdot 10^{-4}\,\text{N} = 4{,}9\,\text{N}$. In die Formel gehört die Dichte des
Fluids. Eine gleich große Holzkugel hätte unter Wasser genau denselben Auftrieb.
:::

:::achtung[Fehler: Der Auftrieb sei so groß wie das Eigengewicht]
Ein Eisenwürfel mit $2{,}0\,\text{kg}$ liegt am Grund eines Aquariums. Eine Schülerin sagt: „Der Auftrieb ist
gleich dem Gewicht des Körpers, also $2{,}0\cdot 9{,}81\,\text{N} = 19{,}6\,\text{N}$.“

Dann wären Auftrieb und Gewicht gleich, und der Würfel würde schweben. Er liegt aber am Grund. Der Auftrieb ist das
Gewicht des **verdrängten Wassers**. Der Würfel hat das Volumen $V = 2{,}0\,\text{kg}/7870\,\text{kg/m}^3 = 2{,}54\cdot 10^{-4}\,\text{m}^3$.
Also ist $F_A = 1000\cdot 9{,}81\cdot 2{,}54\cdot 10^{-4}\,\text{N} = 2{,}5\,\text{N}$. Auftrieb gleich Eigengewicht
gilt nur für einen Körper, der schwimmt oder schwebt. Das ist das Thema von
[9.5 Schwimmen, Schweben und Sinken](/lernen/physik1/hydro-aeromechanik/schwimmen-schweben-und-sinken).
:::

```aufgabe
id: p9-4-tiefe-check
art: check
titel: Hängt der Auftrieb von der Tiefe ab?
niveau: 1
angabe: |
  Ein Stein hängt an einem Faden ganz unter Wasser, zuerst $1\,\text{m}$ tief, dann $5\,\text{m}$ tief. Wie ändert sich der Auftrieb?
teile:
  - typ: auswahl
    optionen:
      - "Er ist in 5 m Tiefe größer, weil dort der Druck größer ist."
      - "Er ist in beiden Tiefen gleich groß."
      - "Er ist in 5 m Tiefe kleiner, weil mehr Wasser auf den Stein drückt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          In der Tiefe ist der Druck tatsächlich größer, aber **oben und unten** am Stein um denselben Betrag. Für den Auftrieb zählt nur der Unterschied zwischen unten und oben, und der bleibt gleich.
      - wert: 2
        meldung: |
          Das Wasser drückt in der Tiefe auch von unten stärker. Die Zusatzkräfte oben und unten heben sich auf. Der Auftrieb hängt nur vom verdrängten Volumen ab.
hinweise:
  - Der Auftrieb ist die Differenz zwischen der Druckkraft von unten und der von oben.
loesung: |
  **Ansatz:** In $F_A = \rho_\text{Fl}\, g\, V$ kommt die Tiefe nicht vor. Der zusätzliche Druck in der Tiefe wirkt oben und unten gleich.
  ---
  **Antwort:** Der Auftrieb ist in beiden Tiefen gleich. Das gilt, solange sich das Volumen des Körpers nicht ändert. Ein Stein lässt sich kaum zusammendrücken.
```

### Dichte bestimmen durch Wägung

Hängt man einen Körper an einen Kraftmesser, zeigt dieser in Luft die Gewichtskraft $F_G$. Taucht man den Körper
ganz in Wasser, zeigt der Kraftmesser nur noch $F_G - F_A$. Die Differenz der beiden Anzeigen ist also der
Auftrieb. Aus ihm folgt das Volumen, und aus Volumen und Gewicht die Dichte:
$$V = \frac{F_A}{\rho_W\, g}, \qquad \rho_K = \frac{m}{V} = \frac{F_G/g}{F_A/(\rho_W g)} = \rho_W\cdot\frac{F_G}{F_A}.$$
Dabei ist $\rho_W$ die Dichte von Wasser und $\rho_K$ die gesuchte Dichte des Körpers. Das Schöne an dieser
Methode: Man braucht kein Lineal und keinen Messbecher, auch für Körper mit beliebig verschnörkelter Form.

:::beispiel[Ein unbekanntes Metallstück]
Ein Metallstück zeigt am Kraftmesser in Luft $5{,}40\,\text{N}$ und ganz unter Wasser $3{,}40\,\text{N}$.

**Schritt 1, Auftrieb:** $F_A = 5{,}40\,\text{N} - 3{,}40\,\text{N} = 2{,}00\,\text{N}$.

**Schritt 2, Volumen:** $V = \dfrac{2{,}00\,\text{N}}{1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2} = 2{,}04\cdot 10^{-4}\,\text{m}^3 = 204\,\text{cm}^3$.

**Schritt 3, Dichte:** $\rho_K = 1000\,\text{kg/m}^3\cdot\dfrac{5{,}40\,\text{N}}{2{,}00\,\text{N}} = 2700\,\text{kg/m}^3$.

**Antwort:** Das ist die Dichte von Aluminium. So soll Archimedes geprüft haben, ob die Krone von König Hieron
aus reinem Gold war.
:::

:::merke
**Auftrieb berechnen:**
1. Bestimme das **eingetauchte** Volumen in $\text{m}^3$ ($1\,\text{L} = 10^{-3}\,\text{m}^3$).
2. Nimm die Dichte des **Fluids**, nicht die des Körpers.
3. $F_A = \rho_\text{Fl}\, g\, V_\text{eing}$. Die Tiefe spielt keine Rolle.
4. Scheinbares Gewicht: $F_G - F_A$. Dichte aus zwei Wägungen: $\rho_K = \rho_W\cdot F_G/F_A$.
:::

```reflexion
frage: Erkläre einer Freundin in eigenen Worten, warum der Auftrieb eines Steins nicht davon abhängt, wie schwer der Stein ist. Verwende das Gedankenexperiment mit dem Wasserstück.
antwort: |
  Das Wasser um den Stein herum drückt nur auf seine Oberfläche. Wie schwer das Innere ist, merkt es nicht. Ersetzt man
  den Stein durch ein gleich geformtes Stück Wasser, schwebt dieses Stück. Das umgebende Wasser trägt es also genau mit
  seinem Gewicht. Auf den Stein drückt das Wasser genauso. Also ist der Auftrieb das Gewicht des verdrängten Wassers,
  egal ob der Stein aus Granit, Eisen oder Kork ist. Ob der Körper sinkt, entscheidet erst der Vergleich mit seinem
  eigenen Gewicht.
```

### Aufgaben zum Auftrieb

```aufgabe
id: p9-auftrieb-stein
titel: Auftrieb eines Steins
niveau: 1
lernziel: 3
kompetenz: rechnen
angabe: |
  Ein Stein mit dem Volumen $2{,}0\,\text{L}$ liegt ganz unter Wasser. Wie groß ist die Auftriebskraft? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "1000*9.81*0.002"
    einheit: "N"
    anzeige: '19{,}6'
    fehler:
      - wert: "1000*9.81*2"
        meldung: |
          Das Volumen muss in $\text{m}^3$ stehen: $2{,}0\,\text{L} = 2{,}0\cdot 10^{-3}\,\text{m}^3$. Ein Kubikmeter hat tausend Liter.
      - wert: "2"
        meldung: |
          Zwei Liter Wasser haben die Masse $2\,\text{kg}$. Der Auftrieb ist aber eine Kraft, nämlich die **Gewichtskraft** dieser $2\,\text{kg}$.
hinweise:
  - 'Volumen in $\text{m}^3$ umrechnen, dann $F_A = \rho_W\, g\, V$.'
loesung: |
  **Ansatz:** Der Stein verdrängt $2{,}0\,\text{L} = 2{,}0\cdot 10^{-3}\,\text{m}^3$ Wasser. Der Auftrieb ist die Gewichtskraft dieses Wassers.
  ---
  **Rechnung:** $F_A = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 2{,}0\cdot 10^{-3}\,\text{m}^3 = 19{,}6\,\text{N}$, so viel wie das Gewicht von $2\,\text{kg}$ Wasser.
```

```aufgabe
id: p9-auftrieb-eisen-alu
titel: Eisen oder Aluminium?
niveau: 1
lernziel: 3
kompetenz: verstehen
angabe: |
  Ein Eisenwürfel und ein Aluminiumwürfel sind gleich groß. Beide hängen an Fäden ganz unter Wasser. Welcher erfährt den größeren Auftrieb?
teile:
  - typ: auswahl
    optionen:
      - "der Eisenwürfel, weil er schwerer ist"
      - "der Aluminiumwürfel, weil er leichter ist"
      - "beide gleich viel"
    richtig: [2]
    fehler:
      - wert: 0
        meldung: |
          Das ist die häufigste Fehlvorstellung. Der Auftrieb hängt nicht vom Gewicht des Körpers ab, sondern vom Gewicht des **verdrängten Wassers**. Gleich große Würfel verdrängen gleich viel.
      - wert: 1
        meldung: |
          Leichtere Körper schwimmen eher auf, aber nicht wegen eines größeren Auftriebs. Ihr **Gewicht** ist kleiner. Der Auftrieb selbst ist bei gleichem Volumen gleich.
hinweise:
  - Welche Größen kommen in $F_A = \rho_\text{Fl}\, g\, V$ vor? Unterscheiden sie sich bei den beiden Würfeln?
loesung: |
  **Ansatz:** $F_A = \rho_\text{Fl}\, g\, V$. Darin stehen die Dichte des Wassers und das Volumen, nicht das Material.
  ---
  **Antwort:** Gleiches Volumen, gleiche Flüssigkeit, also gleicher Auftrieb. Der Eisenwürfel zieht nur stärker am Faden, weil er schwerer ist.
```

```aufgabe
id: p9-scheinbares-gewicht
titel: Einen Stein im Meer heben
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Taucherin hebt einen Stein mit $6{,}0\,\text{kg}$ und der Dichte $2500\,\text{kg/m}^3$ vom Meeresgrund. Meerwasser hat $1025\,\text{kg/m}^3$. Welche Kraft muss sie aufbringen, solange der Stein ganz unter Wasser ist? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "6.0*9.81-1025*9.81*6.0/2500"
    einheit: "N"
    anzeige: '34{,}7'
    fehler:
      - wert: "6.0*9.81"
        meldung: |
          Das ist die Gewichtskraft an Land. Unter Wasser hilft der Auftrieb mit, du musst ihn abziehen.
      - wert: "6.0*9.81-1000*9.81*6.0/2500"
        meldung: |
          Fast. Im Meer ist die Dichte des Wassers $1025\,\text{kg/m}^3$, nicht $1000\,\text{kg/m}^3$.
hinweise:
  - Bestimme zuerst das Volumen des Steins aus Masse und Dichte.
  - 'Haltekraft = Gewichtskraft minus Auftrieb, mit $F_A = \rho_\text{Meer}\, g\, V$.'
loesung: |
  **Ansatz:** Die Taucherin muss nur so viel aufbringen, wie das Gewicht den Auftrieb übersteigt.
  ---
  **Volumen:** $V = m/\rho = 6{,}0\,\text{kg}/2500\,\text{kg/m}^3 = 2{,}4\cdot 10^{-3}\,\text{m}^3$.
  ---
  **Kräfte:** $F_G = 6{,}0\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 58{,}9\,\text{N}$ und $F_A = 1025\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 2{,}4\cdot 10^{-3}\,\text{m}^3 = 24{,}1\,\text{N}$.
  ---
  **Haltekraft:** $F = 58{,}9\,\text{N} - 24{,}1\,\text{N} = 34{,}7\,\text{N}$. Das sind nur knapp sechs Zehntel des Gewichts an Land.
```

```aufgabe
id: p9-krone
titel: Archimedes und die Krone
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Eine Krone wiegt an einem Kraftmesser in Luft $7{,}84\,\text{N}$, vollständig unter Wasser $7{,}38\,\text{N}$. Gold hat die Dichte $19\,300\,\text{kg/m}^3$.

  a) Berechne das Volumen der Krone in $\text{cm}^3$. Runde auf eine Nachkommastelle.

  b) Berechne ihre Dichte. Ist sie aus reinem Gold?
teile:
  - typ: zahl
    label: a) Volumen
    loesung: "(7.84-7.38)/(1000*9.81)*1e6"
    einheit: "cm³"
    anzeige: '46{,}9'
    fehler:
      - wert: "7.84/(1000*9.81)*1e6"
        meldung: |
          Das Volumen folgt aus dem **Auftrieb**, also aus der Differenz der beiden Anzeigen, nicht aus dem Gewicht in Luft.
  - typ: zahl
    label: b) Dichte
    loesung: "1000*7.84/(7.84-7.38)"
    einheit: "kg/m³"
    anzeige: '17\,000'
    toleranz: 100
    fehler:
      - wert: "1000*7.38/(7.84-7.38)"
        meldung: |
          Für die Masse brauchst du das Gewicht **in Luft**, $7{,}84\,\text{N}$. Die Anzeige unter Wasser ist schon um den Auftrieb verkleinert.
hinweise:
  - Die Differenz der beiden Anzeigen ist die Auftriebskraft.
  - 'Aus $F_A = \rho_W g V$ folgt $V$. Die Dichte ist $\rho = \rho_W\cdot F_G/F_A$.'
loesung: |
  **Ansatz:** Der Kraftmesser zeigt unter Wasser um den Auftrieb weniger an: $F_A = 7{,}84\,\text{N} - 7{,}38\,\text{N} = 0{,}46\,\text{N}$.
  ---
  **a)** $V = \dfrac{F_A}{\rho_W g} = \dfrac{0{,}46\,\text{N}}{1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2} = 4{,}69\cdot 10^{-5}\,\text{m}^3 = 46{,}9\,\text{cm}^3$.
  ---
  **b)** $\rho = \rho_W\cdot\dfrac{F_G}{F_A} = 1000\,\text{kg/m}^3\cdot\dfrac{7{,}84\,\text{N}}{0{,}46\,\text{N}} \approx 17\,000\,\text{kg/m}^3$.
  ---
  **Antwort:** Das ist deutlich weniger als $19\,300\,\text{kg/m}^3$. Die Krone enthält ein leichteres Metall, etwa Silber.
```

```aufgabe
id: p9-auftrieb-fehler
titel: Fehler finden beim Auftrieb
niveau: 2
lernziel: 3
kompetenz: begruenden
angabe: |
  Ein Aluminiumblock ($3{,}0\,\text{kg}$, $\rho = 2700\,\text{kg/m}^3$) wird ganz in Wasser getaucht. Ein Schüler schreibt: „Der Auftrieb ist $F_A = 2700\cdot 9{,}81\cdot V$, und weil $2700\cdot V = 3{,}0\,\text{kg}$ ist, gilt $F_A = 29{,}4\,\text{N}$.“

  Wie groß ist der Auftrieb wirklich? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "1000*9.81*3.0/2700"
    einheit: "N"
    anzeige: '10{,}9'
    fehler:
      - wert: "3.0*9.81"
        meldung: |
          Das ist das Ergebnis des Schülers, die Gewichtskraft des Blocks. In die Auftriebsformel gehört die Dichte des **Wassers**, nicht die des Aluminiums.
hinweise:
  - Welche Dichte gehört in die Formel des Auftriebs?
  - 'Volumen aus $V = m/\rho_\text{Al}$, Auftrieb mit $\rho_W$.'
loesung: |
  **Fehler:** Der Schüler hat die Dichte des Körpers eingesetzt. Damit hat er dessen Gewicht berechnet, nicht den Auftrieb.
  ---
  **Volumen:** $V = 3{,}0\,\text{kg}/2700\,\text{kg/m}^3 = 1{,}11\cdot 10^{-3}\,\text{m}^3$.
  ---
  **Auftrieb:** $F_A = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}11\cdot 10^{-3}\,\text{m}^3 = 10{,}9\,\text{N}$. Probe: Der Block sinkt, also muss $F_A$ kleiner als sein Gewicht $29{,}4\,\text{N}$ sein. Das stimmt.
```

```aufgabe
id: p9-dichte-unsicherheit
titel: Dichtebestimmung mit Messunsicherheit
niveau: 3
lernziel: 3
kompetenz: modellieren
angabe: |
  Ein kleines Metallteil soll als Messing ($8500\,\text{kg/m}^3$) oder Kupfer ($8900\,\text{kg/m}^3$) erkannt werden. Ein einfacher Kraftmesser zeigt in Luft $(2{,}45 \pm 0{,}02)\,\text{N}$ und unter Wasser $(2{,}17 \pm 0{,}02)\,\text{N}$.

  a) Berechne die Dichte aus den Messwerten. Runde auf ganze $\text{kg/m}^3$.

  b) Schätze die absolute Unsicherheit der Dichte ab. Addiere dafür die relativen Unsicherheiten von $F_G$ und $F_A$. Runde auf ganze $\text{kg/m}^3$.

  c) Kann man mit dieser Messung entscheiden, ob das Teil aus Messing oder Kupfer ist?
teile:
  - typ: zahl
    label: a) Dichte
    loesung: "1000*2.45/(2.45-2.17)"
    einheit: "kg/m³"
    anzeige: '8750'
    toleranz: 10
  - typ: zahl
    label: b) absolute Unsicherheit
    loesung: "1000*2.45/(2.45-2.17)*(0.04/(2.45-2.17)+0.02/2.45)"
    einheit: "kg/m³"
    anzeige: '1321'
    toleranz: 30
  - typ: auswahl
    label: c) Entscheidung
    optionen:
      - "Ja, es ist Messing, weil 8750 näher an 8500 liegt als an 8900."
      - "Nein, beide Werte liegen innerhalb der Unsicherheit."
      - "Ja, es ist Kupfer."
    richtig: [1]
hinweise:
  - 'Der Auftrieb ist die Differenz der Anzeigen. Bei einer Differenz addieren sich die absoluten Unsicherheiten: $0{,}02 + 0{,}02 = 0{,}04\,\text{N}$.'
  - 'Für $\rho = \rho_W\cdot F_G/F_A$ addieren sich die relativen Unsicherheiten von $F_G$ und $F_A$.'
  - Vergleiche das Intervall „Messwert plus/minus Unsicherheit“ mit beiden Literaturwerten.
gefuehrt:
  - text: Wie groß ist der Auftrieb in Newton?
    teil: { typ: zahl, loesung: "2.45-2.17" }
    erklaerung: $F_A = 2{,}45\,\text{N} - 2{,}17\,\text{N} = 0{,}28\,\text{N}$. Seine Unsicherheit ist $0{,}02 + 0{,}02 = 0{,}04\,\text{N}$.
  - text: Wie groß ist die relative Unsicherheit des Auftriebs, als Dezimalzahl?
    teil: { typ: zahl, loesung: "0.04/0.28", toleranz: 0.005 }
    erklaerung: $0{,}04/0{,}28 = 0{,}143$, also gut $14\,\%$. Die kleine Differenz zweier großer Werte ist sehr ungenau.
  - text: Wie groß ist die Dichte?
    teil: { typ: zahl, loesung: "1000*2.45/0.28", toleranz: 10 }
    erklaerung: $\rho = 1000\,\text{kg/m}^3\cdot 2{,}45/0{,}28 = 8750\,\text{kg/m}^3$.
  - text: Überlege, ob der Bereich $8750 \pm 1300$ beide Metalle einschließt.
    erklaerung: Der Bereich reicht etwa von $7400$ bis $10\,100\,\text{kg/m}^3$. Messing und Kupfer liegen beide darin.
loesung: |
  **Ansatz:** Dichte aus zwei Wägungen, $\rho = \rho_W\cdot F_G/F_A$. Die Unsicherheit schätzen wir mit den Regeln aus [Fehlerfortpflanzung](/lernen/physik1/groessen-einheiten-messen/fehlerfortpflanzung) ab.
  ---
  **a)** $F_A = 2{,}45\,\text{N} - 2{,}17\,\text{N} = 0{,}28\,\text{N}$, also $\rho = 1000\,\text{kg/m}^3\cdot\dfrac{2{,}45\,\text{N}}{0{,}28\,\text{N}} = 8750\,\text{kg/m}^3$.
  ---
  **b)** Absolute Unsicherheit des Auftriebs: $0{,}04\,\text{N}$, relativ $0{,}04/0{,}28 = 14{,}3\,\%$. Relative Unsicherheit von $F_G$: $0{,}02/2{,}45 = 0{,}8\,\%$. Zusammen $15{,}1\,\%$, also $\Delta\rho = 0{,}151\cdot 8750\,\text{kg/m}^3 \approx 1321\,\text{kg/m}^3$.
  ---
  **c)** Das Ergebnis lautet $\rho = (8750 \pm 1300)\,\text{kg/m}^3$. Beide Literaturwerte liegen darin. Die Messung kann nicht entscheiden. Abhilfe: ein genauerer Kraftmesser oder ein größeres Teil, damit der Auftrieb größer wird.
```

## Schwimmen, Schweben und Sinken

```aufgabe
id: p9-5-check
art: check
titel: "Vorwissen: Auftrieb eines Holzstücks"
niveau: 1
angabe: |
  Ein Holzklotz mit $0{,}50\,\text{L}$ Volumen wird ganz unter Wasser gedrückt. Wie groß ist der Auftrieb? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "1000*9.81*0.5e-3"
    einheit: "N"
    anzeige: '4{,}9'
    toleranz: 0.05
    fehler:
      - wert: "1000*9.81*0.5"
        meldung: |
          $0{,}50\,\text{L} = 0{,}50\cdot 10^{-3}\,\text{m}^3$. Ein Liter ist ein Tausendstel Kubikmeter.
hinweise:
  - 'Prinzip von Archimedes: $F_A = \rho_W\, g\, V$ mit $V$ in $\text{m}^3$.'
loesung: |
  **Ansatz:** Der Auftrieb ist das Gewicht des verdrängten Wassers, $F_A = \rho_W\, g\, V$. Das Material des Klotzes spielt keine Rolle.
  ---
  **Rechnung:** $F_A = 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}50\cdot 10^{-3}\,\text{m}^3 = 4{,}9\,\text{N}$. Wiederholen: [9.4 Auftrieb: das Prinzip von Archimedes](/lernen/physik1/hydro-aeromechanik/auftrieb-das-prinzip-von-archimedes).
```

Warum schwimmt Holz und Eisen nicht? Warum schwimmt ein Schiff aus Eisen trotzdem? Und warum kann ein U-Boot
nach Belieben auf- und abtauchen? Alle diese Fragen beantwortet ein einziger Vergleich: Gewichtskraft gegen
Auftrieb.

### Der Dichtevergleich

Ein Körper mit der Dichte $\rho_K$ und dem Volumen $V$ sei ganz untergetaucht. Auf ihn wirken zwei Kräfte:

- die Gewichtskraft $F_G = m\, g = \rho_K\, g\, V$ nach unten,
- der Auftrieb $F_A = \rho_\text{Fl}\, g\, V$ nach oben.

Beide Formeln enthalten $g\, V$. Welche Kraft größer ist, entscheidet also allein der **Vergleich der Dichten**.

- Ist $\rho_K > \rho_\text{Fl}$, ist das Gewicht größer als der Auftrieb. Der Körper **sinkt**.
- Ist $\rho_K = \rho_\text{Fl}$, sind beide Kräfte gleich. Der Körper **schwebt**, er bleibt in jeder Tiefe stehen.
- Ist $\rho_K < \rho_\text{Fl}$, ist der Auftrieb größer. Der Körper **steigt** auf, bis er an der Oberfläche
  **schwimmt**.

Ein Beispiel: Eis hat $917\,\text{kg/m}^3$ und schwimmt auf Wasser. Ein Nichtbeispiel für „schwerer Körper sinkt“:
Ein Baumstamm mit einer Tonne Masse schwimmt, ein Eisennagel mit zwei Gramm sinkt. Nicht die Masse entscheidet,
sondern die Dichte.

### Wie tief taucht ein schwimmender Körper ein?

Ein Körper, der aufsteigt, kommt an die Oberfläche und taucht teilweise heraus. Dabei wird der eingetauchte Teil
kleiner, also auch der Auftrieb. Er taucht genau so weit heraus, bis der Auftrieb nur noch so groß ist wie sein
Gewicht. Dann herrscht Gleichgewicht.

```plot
x: [-3, 3]
y: [-2.6, 2.6]
gleich: true
hoehe: 260
strecken:
  - { von: [-1.5, -0.9], nach: [1.5, -0.9] }
  - { von: [1.5, -0.9], nach: [1.5, 0.6] }
  - { von: [1.5, 0.6], nach: [-1.5, 0.6] }
  - { von: [-1.5, 0.6], nach: [-1.5, -0.9] }
  - { von: [-3, 0], nach: [3, 0], gestrichelt: true }
vektoren:
  - { von: [0.4, -0.15], nach: [0.4, -2.3], label: "F_G", farbe: 1 }
  - { von: [-0.4, -0.15], nach: [-0.4, 2.0], label: "F_A", farbe: 0 }
punkte:
  - { x: 2.4, y: 0.25, label: "Wasserspiegel" }
beschriftung: "Freikörperbild eines schwimmenden Holzklotzes. Er taucht zu 60 Prozent ein (unter der gestrichelten Wasserlinie). Die Gewichtskraft F_G (orange) und der Auftrieb F_A (blau) sind gleich lang und heben sich auf. Der Auftrieb gehört nur zum eingetauchten Teil."
```

Im Gleichgewicht gilt also: Auftrieb gleich Gewicht.
$$\rho_\text{Fl}\, g\, V_\text{eing} = \rho_K\, g\, V.$$
Wir teilen beide Seiten durch $g$ und durch $\rho_\text{Fl}\, V$:
$$\frac{V_\text{eing}}{V} = \frac{\rho_K}{\rho_\text{Fl}}.$$
In Worten: Der eingetauchte Anteil eines schwimmenden Körpers ist das Verhältnis der Dichten. Holz mit
$600\,\text{kg/m}^3$ taucht in Wasser zu $600/1000 = 60\,\%$ ein.

:::beispiel[Die Spitze des Eisbergs]
Ein Eisberg ($\rho = 917\,\text{kg/m}^3$) schwimmt im Meer ($\rho = 1025\,\text{kg/m}^3$).

**Schritt 1, Modell:** Er schwimmt, also ist der Auftrieb gleich seinem Gewicht. Der eingetauchte Anteil ist
$\rho_K/\rho_\text{Fl}$.

**Schritt 2, Rechnung:** $\dfrac{V_\text{eing}}{V} = \dfrac{917}{1025} = 0{,}895 = 89{,}5\,\%$.

**Antwort:** Nur $10{,}5\,\%$ ragen heraus. Daher kommt die Redewendung „nur die Spitze des Eisbergs“. Die
Kapitäne im Nordatlantik wussten: Unter Wasser ist ein Eisberg gut achtmal so groß wie das, was man sieht
($89{,}5 : 10{,}5 \approx 8{,}5$).
:::

:::beispiel[Wie viel trägt ein Floß?]
Ein Floß aus Baumstämmen hat zusammen $1{,}2\,\text{m}^3$ Volumen. Das Holz hat $550\,\text{kg/m}^3$.

**Schritt 1, Masse des Floßes:** $m = 550\,\text{kg/m}^3\cdot 1{,}2\,\text{m}^3 = 660\,\text{kg}$.

**Schritt 2, größter Auftrieb:** Ganz untergetaucht verdrängt das Floß $1{,}2\,\text{m}^3$ Wasser, also
$1200\,\text{kg}$. Weil überall $g$ vorkommt, darf man gleich mit Massen rechnen.

**Schritt 3, Nutzlast:** $1200\,\text{kg} - 660\,\text{kg} = 540\,\text{kg}$.

**Antwort:** Mit $540\,\text{kg}$ Ladung liegt das Floß gerade bündig mit der Wasseroberfläche. Für einen
Sicherheitsabstand lädt man weniger.
:::

:::achtung[Fehler: Dichte des Materials statt mittlerer Dichte]
Ein Ruderboot aus Stahlblech hat $1{,}2\,\text{t}$ Masse und ein Rumpfvolumen von $6\,\text{m}^3$. Ein Schüler
argumentiert: „Stahl hat $7800\,\text{kg/m}^3$, das ist mehr als $1000\,\text{kg/m}^3$, also sinkt das Boot.“

Für das Schwimmen zählt die **mittlere Dichte** des ganzen Körpers: Gesamtmasse durch Gesamtvolumen, einschließlich
der Luft im Rumpf. Hier ist $\bar\rho = 1200\,\text{kg}/6\,\text{m}^3 = 200\,\text{kg/m}^3$. Das ist viel weniger als
die Dichte von Wasser. Das Boot schwimmt und taucht nur zu $20\,\%$ seines Rumpfvolumens ein.
:::

:::achtung[Fehler: Dichteverhältnis umgedreht]
Für einen Holzbalken mit $600\,\text{kg/m}^3$ rechnet eine Schülerin den eingetauchten Anteil als
$1000/600 = 1{,}67 = 167\,\%$.

Mehr als $100\,\%$ kann nicht eintauchen. Der Plausibilitätscheck zeigt den Fehler: Die Dichte des **Körpers**
steht im Zähler. Richtig ist $600/1000 = 60\,\%$. Ein Körper mit kleiner Dichte taucht wenig ein. Deshalb muss seine
Dichte im Zähler stehen: Kleine Körperdichte gibt einen kleinen Anteil.
:::

```aufgabe
id: p9-5-mittlere-dichte-check
art: check
titel: Eine hohle Kugel
niveau: 1
angabe: |
  Eine hohle Kugel aus Aluminium ($2700\,\text{kg/m}^3$) hat außen das Volumen $1{,}0\,\text{L}$ und die Masse $0{,}60\,\text{kg}$. Schwimmt sie in Wasser?
teile:
  - typ: auswahl
    optionen:
      - "Nein, Aluminium ist dichter als Wasser."
      - "Ja, ihre mittlere Dichte ist $600\\,\\text{kg/m}^3$."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Es zählt die mittlere Dichte der ganzen Kugel samt Hohlraum: $0{,}60\,\text{kg}/1{,}0\cdot 10^{-3}\,\text{m}^3 = 600\,\text{kg/m}^3$.
hinweise:
  - Teile die Gesamtmasse durch das äußere Volumen.
loesung: |
  **Mittlere Dichte:** $\bar\rho = 0{,}60\,\text{kg}/1{,}0\cdot 10^{-3}\,\text{m}^3 = 600\,\text{kg/m}^3$.
  ---
  **Antwort:** Das ist weniger als $1000\,\text{kg/m}^3$, die Kugel schwimmt und taucht zu $60\,\%$ ein.
```

### Schiffe, U-Boote und Fische

Ein Schiff aus Stahl schwimmt, weil sein Rumpf hohl ist. Seine mittlere Dichte ist kleiner als die von Wasser.
Schlägt ein Leck, läuft Wasser in den Rumpf. Die mittlere Dichte steigt über $1000\,\text{kg/m}^3$, und das Schiff
sinkt.

Ein **U-Boot** kann seine mittlere Dichte verändern. Es hat Tanks, die es mit Wasser flutet, um abzutauchen. Um
aufzutauchen, presst es das Wasser mit Druckluft wieder hinaus. Fische regeln ihre mittlere Dichte mit der
**Schwimmblase**, einem gasgefüllten Organ. So schweben sie ohne Anstrengung in jeder Tiefe.

Der Mensch hat mit eingeatmeter Luft eine mittlere Dichte knapp unter der von Wasser. Im Toten Meer ist das
Wasser durch das viele Salz viel dichter, etwa $1240\,\text{kg/m}^3$. Dort taucht man so wenig ein, dass man im
Wasser liegend Zeitung lesen kann.

Ein **Aräometer**, auch Senkwaage genannt, nutzt das Schwimmen zum Messen. Es ist ein Glaskörper mit Skala. In
einer dichten Flüssigkeit taucht es wenig ein, in einer leichten tief. An der Skala liest man die Dichte ab. So
prüft man den Zuckergehalt von Traubenmost oder den Frostschutz im Kühlwasser.

```aufgabe
id: p9-5-fluss-meer-check
art: check
titel: Vom Fluss ins Meer
niveau: 1
angabe: |
  Ein Frachtschiff fährt auf der Elbe von Hamburg in die Nordsee, also von Süßwasser in dichteres Salzwasser ($1025\,\text{kg/m}^3$). Was passiert mit seinem Tiefgang?
teile:
  - typ: auswahl
    optionen:
      - "Das Schiff taucht tiefer ein."
      - "Das Schiff hebt sich etwas, es taucht weniger tief ein."
      - "Der Tiefgang bleibt gleich, weil das Schiff gleich schwer bleibt."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Dichteres Wasser liefert pro Kubikmeter verdrängtem Volumen **mehr** Auftrieb. Das Schiff braucht also weniger eingetauchtes Volumen.
      - wert: 2
        meldung: |
          Das Gewicht bleibt gleich, also auch der nötige Auftrieb. Diesen Auftrieb liefert dichteres Wasser aber schon mit weniger verdrängtem Volumen.
hinweise:
  - Der Auftrieb muss gleich dem Gewicht bleiben. Wie viel Volumen braucht man dafür in dichterem Wasser?
loesung: |
  **Ansatz:** Beim Schwimmen ist $\rho_\text{Fl}\, g\, V_\text{eing} = m\, g$. Bei größerem $\rho_\text{Fl}$ braucht man weniger $V_\text{eing}$.
  ---
  **Antwort:** Das Schiff hebt sich um etwa $2{,}5\,\%$ seines Tiefgangs, denn $1000/1025 = 0{,}976$. Schiffe tragen deshalb Lademarken für Süß- und Salzwasser.
```

### Auftrieb in Luft: Ballone

Auch Luft erzeugt Auftrieb. Luft hat bei $20\,^\circ\text{C}$ etwa $1{,}20\,\text{kg/m}^3$, bei $0\,^\circ\text{C}$ etwa
$1{,}29\,\text{kg/m}^3$. Für einen Stein ist der Auftrieb in Luft winzig. Für einen Ballon mit vielen Kubikmetern
ist er entscheidend. Ein Ballon steigt, wenn die verdrängte Luft mehr wiegt als Hülle, Füllgas und Nutzlast
zusammen. Füllgase sind Helium mit $0{,}18\,\text{kg/m}^3$ oder heiße Luft. Heiße Luft hat bei gleichem Druck eine
kleinere Dichte als kalte, weil sie sich ausdehnt. Wie man diese Dichte berechnet, zeigt das
[Kapitel Temperatur, Wärme und Gasgesetze](/lernen/physik1/temperatur-waerme-gase/die-gasgesetze).

:::beispiel[Heißluftballon]
Ein Heißluftballon hat $2500\,\text{m}^3$ Hüllenvolumen. Die Außenluft hat $1{,}20\,\text{kg/m}^3$, die auf etwa
$100\,^\circ\text{C}$ erwärmte Innenluft rund $0{,}95\,\text{kg/m}^3$.

**Schritt 1, verdrängte Luft:** $1{,}20\,\text{kg/m}^3\cdot 2500\,\text{m}^3 = 3000\,\text{kg}$. Ihre Gewichtskraft ist
der Auftrieb.

**Schritt 2, Innenluft:** $0{,}95\,\text{kg/m}^3\cdot 2500\,\text{m}^3 = 2375\,\text{kg}$.

**Schritt 3, Überschuss:** $3000\,\text{kg} - 2375\,\text{kg} = 625\,\text{kg}$. Davon gehen Hülle, Korb und Brenner
ab, etwa $300\,\text{kg}$. Übrig bleiben gut $300\,\text{kg}$ für Passagiere.

**Antwort:** Heizt der Pilot nach, sinkt die Dichte innen weiter, und der Ballon steigt. Lässt er die Luft
abkühlen, sinkt er.
:::

:::merke
**Schwimmaufgaben lösen:**
1. Entscheide mit der **mittleren** Dichte: größer als die des Fluids heißt sinken, kleiner heißt schwimmen.
2. Schwimmt der Körper, gilt Auftrieb gleich Gewicht: $\rho_\text{Fl}\, V_\text{eing} = m$.
3. Eingetauchter Anteil: $V_\text{eing}/V = \rho_K/\rho_\text{Fl}$. Plausibilitätscheck: höchstens $100\,\%$.
4. Nutzlast: Masse des verdrängten Fluids minus Masse des Körpers (bei Ballonen auch minus Füllgas).
:::

```reflexion
frage: Ein Eiswürfel schwimmt in einem randvollen Glas Wasser. Läuft das Glas über, wenn der Eiswürfel schmilzt? Begründe mit dem Prinzip von Archimedes.
antwort: |
  Nein. Der schwimmende Eiswürfel verdrängt genau so viel Wasser, wie er selbst wiegt. Beim Schmelzen wird er zu
  Wasser mit derselben Masse. Dieses Schmelzwasser braucht genau das Volumen, das der Eiswürfel vorher unter der
  Wasserlinie verdrängt hat. Es füllt also genau das „Loch“, das der Eiswürfel hinterlässt. Der Wasserspiegel bleibt
  gleich.
```

### Aufgaben zum Schwimmen

```aufgabe
id: p9-schwimmen-auswahl
titel: Was schwimmt in Wasser?
niveau: 1
lernziel: 4
kompetenz: verstehen
angabe: |
  Welche der folgenden Körper schwimmen in Wasser ($1000\,\text{kg/m}^3$)? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Eichenholz, 750 kg/m³"
      - "Aluminium, 2700 kg/m³"
      - "Eis, 917 kg/m³"
      - "Glyzerin, 1260 kg/m³ (ein Tropfen)"
      - "Styropor, 30 kg/m³"
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 2, 3, 4]
        meldung: |
          Glyzerin ist zwar eine Flüssigkeit, aber dichter als Wasser. Ein Glyzerintropfen sinkt deshalb nach unten.
      - wert: [4]
        meldung: |
          Auch Eiche und Eis haben eine kleinere Dichte als Wasser. Jeder Körper mit $\rho < 1000\,\text{kg/m}^3$ schwimmt, nicht nur sehr leichte.
hinweise:
  - Vergleiche jede Dichte mit der Dichte von Wasser.
loesung: |
  **Regel:** Ein Körper schwimmt, wenn seine mittlere Dichte kleiner ist als die der Flüssigkeit.
  ---
  **Antwort:** Eiche, Eis und Styropor schwimmen. Aluminium und Glyzerin sinken.
```

```aufgabe
id: p9-eiswuerfel
titel: Wie viel ragt aus dem Glas?
niveau: 1
lernziel: 4
kompetenz: rechnen
angabe: |
  Ein Eiswürfel ($\rho = 917\,\text{kg/m}^3$) schwimmt in Süßwasser. Wie viel Prozent seines Volumens ragen heraus? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(1-917/1000)*100"
    einheit: "%"
    anzeige: '8{,}3'
    toleranz: 0.05
    fehler:
      - wert: "917/1000*100"
        meldung: |
          Das ist der **eingetauchte** Anteil. Gefragt ist der Teil, der herausragt, also der Rest bis $100\,\%$.
hinweise:
  - 'Eingetauchter Anteil $= \rho_K/\rho_\text{Fl}$. Was bleibt bis $100\,\%$?'
loesung: |
  **Ansatz:** Der Eiswürfel schwimmt. Der eingetauchte Anteil ist $\rho_\text{Eis}/\rho_W = 917/1000 = 91{,}7\,\%$.
  ---
  **Antwort:** Es ragen $100\,\% - 91{,}7\,\% = 8{,}3\,\%$ heraus. Im Meer wären es mehr, weil Salzwasser dichter ist.
```

```aufgabe
id: p9-holz-eintauchtiefe
titel: Eintauchtiefe eines Kiefernbalkens
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein quaderförmiger Balken aus Kiefernholz ($\rho = 520\,\text{kg/m}^3$) ist $15\,\text{cm}$ hoch und schwimmt waagrecht in Süßwasser. Wie tief taucht er ein? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "15*520/1000"
    einheit: "cm"
    anzeige: '7{,}8'
    fehler:
      - wert: "15*1000/520"
        meldung: |
          Das ist mehr als die Höhe des Balkens. Du hast das Dichteverhältnis umgedreht. Der eingetauchte Anteil ist $\rho_K/\rho_W$.
      - wert: "15*(1-0.52)"
        meldung: |
          Das ist der Teil, der **herausragt**. Gefragt ist die Eintauchtiefe.
hinweise:
  - Beim Schwimmen ist Auftrieb gleich Gewicht.
  - 'Bei einem Quader ist der eingetauchte Anteil der Höhe gleich dem eingetauchten Anteil des Volumens, $t/h = \rho_K/\rho_W$.'
loesung: |
  **Ansatz:** Schwimmbedingung $\rho_W\, g\, A\, t = \rho_K\, g\, A\, h$. Dabei ist $t$ die Eintauchtiefe, $h$ die Höhe und $A$ die Grundfläche.
  ---
  **Umstellen:** $g$ und $A$ kürzen sich, also $t = h\cdot\dfrac{\rho_K}{\rho_W}$.
  ---
  **Rechnung:** $t = 15\,\text{cm}\cdot\dfrac{520}{1000} = 7{,}8\,\text{cm}$. Probe: Gut die Hälfte des Balkens liegt unter Wasser, wie bei einer Dichte von gut der Hälfte des Wassers zu erwarten.
```

```aufgabe
id: p9-ballon
titel: Heliumballon
niveau: 2
lernziel: 4
kompetenz: modellieren
angabe: |
  Ein Wetterballon hat ein Volumen von $10\,\text{m}^3$ und ist mit Helium gefüllt ($\rho_\text{He} = 0{,}18\,\text{kg/m}^3$). Die Hülle wiegt $2{,}0\,\text{kg}$, die Luft hat $\rho_L = 1{,}29\,\text{kg/m}^3$. Welche Nutzlast in kg kann der Ballon höchstens tragen? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(1.29-0.18)*10-2"
    einheit: "kg"
    anzeige: '9{,}1'
    fehler:
      - wert: "1.29*10-2"
        meldung: |
          Du hast das Helium vergessen. Es hat auch Masse, $0{,}18\,\text{kg/m}^3\cdot 10\,\text{m}^3 = 1{,}8\,\text{kg}$, und muss mitgetragen werden.
      - wert: "(1.29-0.18)*10"
        meldung: |
          Die Hülle muss auch getragen werden. Zieh ihre $2{,}0\,\text{kg}$ noch ab.
hinweise:
  - 'Auftrieb = Gewicht der verdrängten Luft. Davon gehen ab: Gewicht des Heliums und der Hülle.'
  - Weil überall $g$ vorkommt, kann man gleich mit Massen rechnen.
loesung: |
  **Ansatz:** Der Ballon schwebt gerade, wenn die Masse der verdrängten Luft gleich der Masse von Helium, Hülle und Nutzlast ist.
  ---
  **Verdrängte Luft:** $1{,}29\,\text{kg/m}^3\cdot 10\,\text{m}^3 = 12{,}9\,\text{kg}$. Helium: $0{,}18\,\text{kg/m}^3\cdot 10\,\text{m}^3 = 1{,}8\,\text{kg}$.
  ---
  **Nutzlast:** $12{,}9\,\text{kg} - 1{,}8\,\text{kg} - 2{,}0\,\text{kg} = 9{,}1\,\text{kg}$. Bei mehr Last sinkt der Ballon.
```

```aufgabe
id: p9-totes-meer
titel: Liegen im Toten Meer
niveau: 2
lernziel: 4
kompetenz: anwenden
angabe: |
  Ein Mensch hat mit eingeatmeter Luft die mittlere Dichte $985\,\text{kg/m}^3$. Wie viel Prozent seines Volumens ragen im Toten Meer ($1240\,\text{kg/m}^3$) aus dem Wasser? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "(1-985/1240)*100"
    einheit: "%"
    anzeige: '20{,}6'
    toleranz: 0.1
    fehler:
      - wert: "985/1240*100"
        meldung: |
          Das ist der eingetauchte Anteil. Gefragt ist, wie viel herausragt.
      - wert: "(1-985/1000)*100"
        meldung: |
          Das wäre in Süßwasser. Im Toten Meer ist die Dichte $1240\,\text{kg/m}^3$.
hinweise:
  - 'Der eingetauchte Anteil ist $\rho_K/\rho_\text{Fl}$.'
  - Der herausragende Anteil ist der Rest bis $100\,\%$.
loesung: |
  **Ansatz:** Der Mensch schwimmt, also ist der eingetauchte Anteil $985/1240$.
  ---
  **Rechnung:** $985/1240 = 0{,}794$, also $79{,}4\,\%$ eingetaucht.
  ---
  **Antwort:** $100\,\% - 79{,}4\,\% = 20{,}6\,\%$ ragen heraus. In Süßwasser wären es nur $1{,}5\,\%$. Deshalb liegt man im Toten Meer so hoch.
```

```aufgabe
id: p9-stein-im-boot
titel: Der Stein im Boot
niveau: 3
lernziel: 4
kompetenz: begruenden
angabe: |
  In einem Ruderboot auf einem kleinen Teich liegt ein Stein mit $3{,}0\,\text{kg}$ und der Dichte $3000\,\text{kg/m}^3$. Die Ruderin wirft den Stein ins Wasser, er sinkt auf den Grund.

  a) Wie viel Liter Wasser verdrängt der Stein, solange er im Boot liegt?

  b) Wie viel Liter verdrängt er, wenn er am Grund liegt?

  c) Was passiert mit dem Wasserspiegel des Teichs?
teile:
  - typ: zahl
    label: a) verdrängt im Boot
    loesung: "3.0"
    einheit: "L"
    anzeige: '3{,}0'
    fehler:
      - wert: "1"
        meldung: |
          Im Boot schwimmt der Stein mit. Das Boot muss zusätzlich so viel Wasser verdrängen, wie der Stein **wiegt**, also $3{,}0\,\text{kg}$ Wasser, und das sind $3{,}0\,\text{L}$.
  - typ: zahl
    label: b) verdrängt am Grund
    loesung: "3.0/3000*1000"
    einheit: "L"
    anzeige: '1{,}0'
    fehler:
      - wert: "3"
        meldung: |
          Am Grund schwimmt der Stein nicht. Er verdrängt nur sein eigenes **Volumen**, $3{,}0\,\text{kg}/3000\,\text{kg/m}^3 = 1{,}0\,\text{L}$.
  - typ: auswahl
    label: c) Wasserspiegel
    optionen:
      - "Er steigt."
      - "Er sinkt."
      - "Er bleibt gleich."
    richtig: [1]
hinweise:
  - Ein schwimmender Körper verdrängt sein Gewicht an Wasser, ein untergegangener nur sein Volumen.
  - 'Vergleiche: $3{,}0\,\text{kg}$ Wasser gegen $1{,}0\,\text{L}$ Steinvolumen.'
gefuehrt:
  - text: Wie viel Wasser in kg muss das Boot wegen des Steins zusätzlich verdrängen?
    teil: { typ: zahl, loesung: "3.0" }
    erklaerung: Das Boot schwimmt. Für jedes Kilogramm Last verdrängt es ein Kilogramm Wasser mehr, also $3{,}0\,\text{kg}$ oder $3{,}0\,\text{L}$.
  - text: Welches Volumen in Litern hat der Stein selbst?
    teil: { typ: zahl, loesung: "3.0/3000*1000" }
    erklaerung: $V = 3{,}0\,\text{kg}/3000\,\text{kg/m}^3 = 1{,}0\cdot 10^{-3}\,\text{m}^3 = 1{,}0\,\text{L}$.
  - text: Vergleiche die beiden Volumina und entscheide, was mit dem Wasserspiegel passiert.
    erklaerung: Vorher waren $3{,}0\,\text{L}$ verdrängt, nachher nur $1{,}0\,\text{L}$. Es fehlen $2{,}0\,\text{L}$, der Spiegel sinkt.
loesung: |
  **Ansatz:** Ein schwimmender Körper verdrängt so viel Wasser, wie er wiegt. Ein untergegangener Körper verdrängt nur sein Volumen.
  ---
  **a)** Im Boot trägt der Auftrieb den Stein mit. Das Boot verdrängt $3{,}0\,\text{kg}$ Wasser zusätzlich, das sind $3{,}0\,\text{L}$.
  ---
  **b)** Am Grund verdrängt der Stein sein eigenes Volumen: $3{,}0\,\text{kg}/3000\,\text{kg/m}^3 = 1{,}0\,\text{L}$.
  ---
  **c)** Die verdrängte Menge sinkt um $2{,}0\,\text{L}$. Der Wasserspiegel **sinkt**, wenn auch kaum messbar. Das gilt für jeden Körper, der dichter als Wasser ist.
```

## Luftdruck und die barometrische Höhenformel

```aufgabe
id: p9-6-check
art: check
titel: "Vorwissen: der Wert von e hoch minus eins"
niveau: 1
angabe: |
  Eine Größe hat am Anfang den Wert $100$ und nimmt nach $f(x) = 100\cdot e^{-x}$ ab. Welchen Wert hat sie bei $x = 1$? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "100*exp(-1)"
    anzeige: '36{,}8'
    toleranz: 0.05
    fehler:
      - wert: "0"
        meldung: |
          Eine Exponentialfunktion wird nie null. Sie nimmt bei jedem Schritt um denselben **Faktor** ab, hier um $e^{-1} \approx 0{,}368$.
      - wert: "50"
        meldung: |
          Halbiert wird der Wert erst bei $x = \ln 2 \approx 0{,}69$. Bei $x = 1$ ist er auf $e^{-1} \approx 36{,}8\,\%$ gefallen.
hinweise:
  - '$e \approx 2{,}718$. Also ist $e^{-1} = 1/e \approx 0{,}368$.'
loesung: |
  **Ansatz:** Wir setzen $x = 1$ ein: $f(1) = 100\cdot e^{-1} = 100/e$.
  ---
  **Rechnung:** $100/2{,}718 = 36{,}8$. Nach einer „Einheit“ ist die Größe auf gut ein Drittel gefallen. Wiederholen: Mathematik, Kapitel Funktionen, Abschnitt [Exponentialfunktionen](/lernen/mathe3/funktionen/exponentialfunktionen).
```

Wir leben am Grund eines Meeres aus Luft, das viele Kilometer hoch ist. Luft ist leicht, aber nicht gewichtslos:
Ein Kubikmeter wiegt gut ein Kilogramm. Das Gewicht der ganzen Luftsäule über uns erzeugt den **Luftdruck**. Auf
jeden Quadratmeter der Erdoberfläche drückt eine Luftsäule mit etwa $10\,000\,\text{kg}$ Masse. Das sind rund
$10^5\,\text{N}$, also $10^5\,\text{Pa} = 1\,\text{bar}$.

Warum spüren wir davon nichts? Weil der Druck in unserem Körper genauso groß ist und von allen Seiten gleich wirkt.
Die Kräfte von innen und außen heben sich auf. Merkbar wird der Luftdruck erst, wenn auf einer Seite der
Gegendruck fehlt. Mitte des 17. Jahrhunderts pumpte Otto von Guericke in Magdeburg die Luft aus zwei aneinandergelegten Halbkugeln.
Zwei Gespanne mit je acht Pferden konnten sie nicht auseinanderziehen. Von außen drückte der volle Luftdruck,
von innen fast nichts.

### Den Luftdruck messen: Torricelli und das Barometer

Evangelista Torricelli füllte 1643 ein einseitig geschlossenes Glasrohr mit Quecksilber. Er verschloss es mit dem
Finger, drehte es um und stellte es in eine Wanne mit Quecksilber. Das Quecksilber sank im Rohr, bis die Säule
etwa $760\,\text{mm}$ hoch war. Darüber blieb ein fast leerer Raum.

Warum bleibt die Säule stehen? Der Luftdruck drückt von außen auf die Oberfläche in der Wanne. Er schiebt das
Quecksilber genau so weit ins Rohr hinauf, bis der Schweredruck der Säule ihm das Gleichgewicht hält. Oben im
Rohr drückt nichts dagegen.

:::beispiel[Der Luftdruck aus der Quecksilbersäule]
Quecksilber hat die Dichte $13\,546\,\text{kg/m}^3$. Die Säule ist $0{,}760\,\text{m}$ hoch.

**Schritt 1, Gleichgewicht:** Luftdruck gleich Schweredruck der Säule, $p_0 = \rho_\text{Hg}\, g\, h$.

**Schritt 2, Rechnung:**
$p_0 = 13\,546\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}760\,\text{m} = 1{,}01\cdot 10^5\,\text{Pa}$.

**Antwort:** Das ist der normale Luftdruck. Daher stammt die alte Einheit **Millimeter Quecksilbersäule**,
$1\,\text{mmHg} = 13\,546\cdot 9{,}81\cdot 0{,}001\,\text{Pa} = 133\,\text{Pa}$. Beim Blutdruck wird sie heute noch
verwendet. Ein Blutdruck von 120 mmHg ist ein Überdruck von $16\,\text{kPa}$.
:::

Ein solches Gerät heißt **Barometer**, also „Schweremesser“. Moderne **Dosenbarometer** enthalten eine
luftleer gepumpte, flache Metalldose. Sie wird bei hohem Luftdruck stärker zusammengedrückt, und ein Zeiger zeigt
die Verformung an. Im Handy misst ein winziger elektronischer Drucksensor.

:::merke
Eine Saugpumpe oder ein Strohhalm kann Wasser höchstens etwa **10 m** hoch „saugen“. Eigentlich saugt sie gar
nicht. Sie senkt den Druck im Rohr, und der äußere Luftdruck schiebt das Wasser hinein. Mehr als den vollen
Luftdruck gibt es nicht zu nutzen, und der hält höchstens eine Wassersäule von $p_0/(\rho g) \approx 10\,\text{m}$.
Tiefe Brunnen brauchen deshalb eine Pumpe unten im Brunnen, die drückt.
:::

```aufgabe
id: p9-6-saugpumpe-check
art: check
titel: Benzin ansaugen
niveau: 1
angabe: |
  Wie hoch kann eine ideale Saugpumpe Benzin ($\rho = 750\,\text{kg/m}^3$) bei $p_0 = 101\,300\,\text{Pa}$ höchstens heben? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "101300/(750*9.81)"
    einheit: "m"
    anzeige: '13{,}8'
    toleranz: 0.05
    fehler:
      - wert: "101300/(1000*9.81)"
        meldung: |
          Das gilt für Wasser. Benzin ist leichter, also hält derselbe Luftdruck eine **höhere** Säule.
hinweise:
  - 'Der Luftdruck hält eine Säule mit $\rho g h = p_0$.'
loesung: |
  **Ansatz:** Mehr als den vollen Luftdruck kann die Pumpe nicht nutzen: $h = p_0/(\rho g)$.
  ---
  **Rechnung:** $h = 101\,300\,\text{Pa}/(750\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2) = 13{,}8\,\text{m}$.
```

### Warum der Luftdruck mit der Höhe abnimmt

Je höher man steigt, desto weniger Luft liegt darüber. Also sinkt der Druck. In einer Flüssigkeit nimmt der Druck
linear mit der Höhe ab. Bei Luft ist es anders, und dieser Unterschied ist die eigentliche Idee dieses Teils.

**Worum geht es?** Wir wollen verstehen, warum der Luftdruck **exponentiell** abnimmt und nicht linear.

**Ein Bild:** Denk an einen hohen Stapel aus weichen Matratzen. Die unterste wird vom Gewicht aller anderen platt
gedrückt. Die oberste ist locker und dick. Bei der Luft ist es genauso. Unten ist sie stark zusammengedrückt und
dicht, oben ist sie locker und dünn.

**In kleinen Schritten:**

1. Steigt man um ein kleines Stück $\Delta h$, sinkt der Druck um das Gewicht der durchquerten Luftschicht pro
   Fläche: $\Delta p = -\rho\, g\,\Delta h$. Das ist dieselbe Formel wie beim Schweredruck.
2. Luft ist zusammendrückbar. Bei gleicher Temperatur ist ihre Dichte proportional zum Druck:
   $\rho = \rho_0\cdot p/p_0$. Dabei sind $\rho_0$ und $p_0$ Dichte und Druck auf Meereshöhe.
3. Setzt man das ein, erhält man $\Delta p = -\dfrac{\rho_0\, g}{p_0}\cdot p\cdot\Delta h$. Die Abnahme ist also
   **proportional zum Druck selbst**. Wo viel Druck ist, nimmt er schnell ab, wo wenig ist, langsam.
4. Eine Größe, deren Änderung proportional zu ihr selbst ist, wächst oder fällt exponentiell. Das kennst du vom
   radioaktiven Zerfall und vom Abkühlen.

**Was haben wir gezeigt?** Pro Höhenschritt sinkt der Druck nicht um denselben **Betrag**, sondern um denselben
**Anteil**. Das ist die Kennzeichnung einer Exponentialfunktion. Mathematisch ist das eine einfache
Differentialgleichung, siehe Mathematik,
[Wachstum, Zerfall, Abkühlung](/lernen/mathe3/integralrechnung/wachstum-zerfall-abkuehlung-einfache-differentialgleichungen-vertiefung).

:::satz[Barometrische Höhenformel (bei konstanter Temperatur)]
$$p(h) = p_0\cdot e^{-h/H}, \qquad H = \frac{p_0}{\rho_0\, g} \approx 8\,\text{km}.$$
Dabei ist $p(h)$ der Luftdruck in der Höhe $h$ über dem Meer, $p_0 \approx 1013\,\text{hPa}$ der Druck auf
Meereshöhe und $H$ die **Skalenhöhe**. Der Druck halbiert sich etwa alle $H\cdot\ln 2 \approx 5{,}5\,\text{km}$.
:::

```aufgabe
id: p9-6-halbierung-check
art: check
titel: Zweimal halbiert
niveau: 1
angabe: |
  Der Luftdruck halbiert sich etwa alle $5{,}5\,\text{km}$. Welcher Druck herrscht ungefähr in $11\,\text{km}$ Höhe, wenn am Boden $1000\,\text{hPa}$ sind?
teile:
  - typ: zahl
    loesung: "1000/4"
    einheit: "hPa"
    anzeige: '250'
    toleranz: 5
    fehler:
      - wert: "0"
        meldung: |
          Linear gedacht wäre der Druck nach zwei „Halbierungsstrecken“ null. Exponentiell halbiert er sich aber zweimal: erst auf $500$, dann auf $250\,\text{hPa}$.
hinweise:
  - $11\,\text{km}$ sind zweimal $5{,}5\,\text{km}$.
loesung: |
  **Ansatz:** Bei exponentieller Abnahme sinkt der Druck auf jeder gleich langen Strecke um denselben Faktor.
  ---
  **Rechnung:** $1000\,\text{hPa}\cdot\tfrac12\cdot\tfrac12 = 250\,\text{hPa}$. Die Formel mit $H = 8\,\text{km}$ gibt $1000\cdot e^{-11/8} = 253\,\text{hPa}$.
```

Die Skalenhöhe ist die Höhe, die die Atmosphäre hätte, wenn die Luft überall so dicht wäre wie am Boden. Mit
$\rho_0 = 1{,}29\,\text{kg/m}^3$ ergibt sich $H = 101\,300/(1{,}29\cdot 9{,}81)\,\text{m} = 8005\,\text{m}$. In
Wirklichkeit wird die Luft nach oben kälter. Die Formel ist deshalb nur eine Näherung, für Abschätzungen aber gut.

**Faustregel für die ersten hundert Meter:** Nahe am Boden sinkt der Druck um $\rho_0 g \approx 12\,\text{Pa}$ pro
Meter, also um etwa **$1\,\text{hPa}$ pro $8\,\text{m}$**. Für kleine Höhen ersetzt man die Exponentialfunktion durch
ihre Tangente, siehe Mathematik,
[Die Tangente als Näherung](/lernen/mathe3/differentialrechnung/die-tangente-als-naeherung-linearisierung-und-fehlerfortpflanzung).

```plot
x: [0, 20]
y: [0, 1100]
achsen: { x: "Höhe h in km", y: "Luftdruck p in hPa" }
graphen:
  - { f: "1013*exp(-x/8)", label: "p(h) = 1013 hPa · e^(−h/8 km)", farbe: 0, von: 0, bis: 20 }
  - { f: "1013-125*x", label: "Faustregel, nur für kleine h", farbe: 1, von: 0, bis: 8, gestrichelt: true }
punkte:
  - { x: 3.798, y: 630, label: "Großglockner: 630 hPa" }
  - { x: 8.849, y: 335, label: "Mount Everest: 335 hPa" }
  - { x: 5.545, y: 506.5, label: "halber Druck bei 5,5 km" }
beschriftung: "Luftdruck über der Höhe nach der barometrischen Höhenformel (blau). Die Kurve fällt anfangs steil und dann immer flacher, sie erreicht nie null. Die gestrichelte orange Gerade ist die Faustregel „1 hPa pro 8 m“. Sie passt nur für die ersten Hundert Meter und würde schon bei gut 8 km null erreichen."
```

:::beispiel[Ohren im Lift und im Flugzeug]
Ein Lift fährt in einem Hochhaus $200\,\text{m}$ hinauf.

**Schritt 1, Druckänderung:** Nach der Faustregel sinkt der Luftdruck um $200\,\text{m}/(8\,\text{m/hPa}) = 25\,\text{hPa} = 2500\,\text{Pa}$.

**Schritt 2, Kraft aufs Trommelfell:** Im Mittelohr herrscht noch der alte Druck. Auf das Trommelfell mit
$0{,}5\,\text{cm}^2$ wirkt nach außen $F = 2500\,\text{Pa}\cdot 0{,}5\cdot 10^{-4}\,\text{m}^2 = 0{,}13\,\text{N}$.

**Antwort:** Man spürt ein Drücken, bis Schlucken die Ohrtrompete öffnet und den Druck ausgleicht. In
Flugzeugkabinen hält man den Druck auf etwa $750\,\text{hPa}$. Nach der Höhenformel entspricht das
$h = 8\,\text{km}\cdot\ln(1013/750) = 2{,}4\,\text{km}$.
:::

:::achtung[Fehler: Höhe und Skalenhöhe in verschiedenen Einheiten]
Gesucht ist der Druck in $3000\,\text{m}$ Höhe. Ein Schüler tippt $1013\cdot e^{-3000/8}$ und erhält praktisch null.

Er hat die Höhe in Metern, die Skalenhöhe aber in Kilometern eingesetzt. Im Exponenten muss eine reine Zahl
stehen, also beide in derselben Einheit: $h/H = 3\,\text{km}/8\,\text{km} = 0{,}375$. Richtig ist
$p = 1013\,\text{hPa}\cdot e^{-0{,}375} = 696\,\text{hPa}$.
:::

:::achtung[Fehler: Die Faustregel auf große Höhen angewendet]
Eine Schülerin rechnet den Druck auf dem Mount Everest ($8849\,\text{m}$) mit „$1\,\text{hPa}$ pro $8\,\text{m}$“:
$8849/8 = 1106\,\text{hPa}$ weniger, also $1013 - 1106 = -93\,\text{hPa}$.

Ein negativer Druck ist unmöglich. Die Faustregel ist eine Gerade und passt nur für kleine Höhen. In großer Höhe ist
die Luft dünner, und der Druck nimmt langsamer ab. Mit der Höhenformel ergibt sich
$p = 1013\,\text{hPa}\cdot e^{-8{,}849/8} = 335\,\text{hPa}$, rund ein Drittel des Drucks auf Meereshöhe.
:::

Hoch- und Tiefdruckgebiete auf der Wetterkarte unterscheiden sich vom Mittelwert nur um wenige Prozent, etwa
$960$ bis $1050\,\text{hPa}$. Damit man Stationen in verschiedener Höhe vergleichen kann, rechnen die Wetterdienste
jeden gemessenen Druck auf Meereshöhe um. Wie aus Druckunterschieden Wind entsteht, steht im Kapitel
[Hoch, Tief, Wind, Fronten und Treibhauseffekt](/lernen/physik1/hauptsaetze-waermekraftmaschinen/hoch-tief-wind-fronten-und-treibhauseffekt).

```aufgabe
id: p9-6-vorhersage-check
art: check
titel: "Vorhersage: Was macht eine größere Skalenhöhe?"
niveau: 1
angabe: |
  Im Widget darunter kannst du die Skalenhöhe $H$ verändern. Sage vorher: Was passiert mit dem Druck in $5\,\text{km}$ Höhe, wenn $H$ größer wird, etwa weil die Luft wärmer ist?
teile:
  - typ: auswahl
    optionen:
      - "Er wird größer, die Kurve fällt langsamer ab."
      - "Er wird kleiner, die Kurve fällt schneller ab."
      - "Er bleibt gleich, weil der Druck am Boden gleich bleibt."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Im Exponenten steht $-h/H$. Ein größeres $H$ macht den Betrag des Exponenten kleiner. Die Kurve fällt also langsamer.
      - wert: 2
        meldung: |
          Der Startwert bei $h = 0$ bleibt gleich, aber nicht die Steilheit. Wie schnell die Kurve fällt, bestimmt $H$.
hinweise:
  - 'Setze in $e^{-h/H}$ einmal $H = 6$ und einmal $H = 10$ mit $h = 5$ ein.'
loesung: |
  **Ansatz:** Bei größerem $H$ ist $h/H$ kleiner, also $e^{-h/H}$ größer.
  ---
  **Beobachtung im Widget:** Schiebe $H$ von $6$ auf $10\,\text{km}$. Die Kurve wird flacher, in $5\,\text{km}$ Höhe steigt der Druck von etwa $440$ auf $610\,\text{hPa}$. Warme Luft ist weniger dicht, deshalb nimmt der Druck in ihr langsamer ab.
```

```widget
name: parameter
titel: Luftdruck in Abhängigkeit von der Höhe
props:
  f: "p0*exp(-x/H)"
  parameter:
    - { name: p0, min: 950, max: 1050, step: 1, wert: 1013 }
    - { name: H, min: 6, max: 10, step: 0.1, wert: 8 }
  x: [0, 20]
  y: [0, 1100]
```

Die $x$-Achse zeigt die Höhe in km, die $y$-Achse den Druck in hPa. Erklärung der Beobachtung: Die Skalenhöhe ist
$H = p_0/(\rho_0 g)$. Wärmere Luft hat eine kleinere Dichte $\rho_0$, also ein größeres $H$.

:::merke
**Luftdruck in der Höhe abschätzen:**
1. Für einige hundert Meter: Faustregel $1\,\text{hPa}$ pro $8\,\text{m}$.
2. Für größere Höhen: $p = p_0\, e^{-h/H}$ mit $H \approx 8\,\text{km}$. Höhe und $H$ in derselben Einheit.
3. Umgekehrt, Höhe aus Druck: $h = H\cdot\ln(p_0/p)$.
:::

```reflexion
frage: Ein Fenster mit $1\,\text{m}^2$ Fläche wird vom Luftdruck mit etwa $100\,000\,\text{N}$ belastet, so viel wie das Gewicht von zehn Tonnen. Warum zerbricht es nicht?
antwort: |
  Der Luftdruck wirkt von beiden Seiten. Im Zimmer herrscht derselbe Luftdruck wie draußen, weil die Luft durch
  Ritzen und offene Türen ausgleicht. Die Kraft von innen ist also genauso groß wie die von außen, und beide heben sich
  auf. Gefährlich wird es erst bei einem Druckunterschied, etwa bei einer luftleer gepumpten Dose oder bei Sturm, wenn
  der Druck draußen schnell sinkt.
```

### Aufgaben zum Luftdruck

```aufgabe
id: p9-magdeburg
titel: Magdeburger Halbkugeln
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Zwei luftleer gepumpte Halbkugeln haben den Radius $25\,\text{cm}$. Mit welcher Kraft drückt der Luftdruck ($1013\,\text{hPa}$) sie zusammen?
teile:
  - typ: zahl
    loesung: "101300*pi*0.25^2"
    einheit: "N"
    anzeige: '19\,900'
    toleranz: 100
    fehler:
      - wert: "101300*4*pi*0.25^2"
        meldung: |
          Du hast die Kugeloberfläche genommen. Für die Kraft, die die Hälften zusammenhält, zählt die **Querschnittsfläche**, also die Kreisfläche $\pi r^2$. Die schrägen Anteile der Kräfte auf die gewölbte Fläche heben sich seitlich auf.
      - wert: "1013*pi*0.25^2"
        meldung: |
          Der Druck muss in Pascal stehen: $1013\,\text{hPa} = 101\,300\,\text{Pa}$.
hinweise:
  - 'Maßgeblich ist die Querschnittsfläche $A = \pi r^2$, nicht die Oberfläche.'
loesung: |
  **Ansatz:** Innen ist kein Druck, außen der volle Luftdruck. Die Kraft, die die Hälften zusammenpresst, ist Druck mal Querschnittsfläche.
  ---
  **Fläche:** $A = \pi r^2 = \pi\cdot(0{,}25\,\text{m})^2 = 0{,}196\,\text{m}^2$.
  ---
  **Kraft:** $F = p_0 A = 101\,300\,\text{Pa}\cdot 0{,}196\,\text{m}^2 \approx 19\,900\,\text{N}$, das Gewicht von rund zwei Tonnen. Kein Wunder, dass die Pferde scheiterten.
```

```aufgabe
id: p9-blutdruck
titel: Blutdruck in Kilopascal
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Ein Arzt misst einen oberen Blutdruckwert von $140\,\text{mmHg}$. Rechne in kPa um ($\rho_\text{Hg} = 13\,546\,\text{kg/m}^3$). Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "13546*9.81*0.140/1000"
    einheit: "kPa"
    anzeige: '18{,}6'
    toleranz: 0.05
    fehler:
      - wert: "13546*9.81*140/1000"
        meldung: |
          Die Höhe muss in Metern stehen: $140\,\text{mm} = 0{,}140\,\text{m}$.
      - wert: "13546*9.81*0.140"
        meldung: |
          Das ist das Ergebnis in Pascal. Gefragt sind Kilopascal, also durch $1000$ teilen.
hinweise:
  - 'Ein Druck von $h$ mmHg ist der Schweredruck einer Quecksilbersäule der Höhe $h$: $p = \rho_\text{Hg}\, g\, h$.'
loesung: |
  **Ansatz:** $140\,\text{mmHg}$ ist der Druck einer $0{,}140\,\text{m}$ hohen Quecksilbersäule, $p = \rho_\text{Hg}\, g\, h$.
  ---
  **Rechnung:** $p = 13\,546\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}140\,\text{m} = 18\,600\,\text{Pa} = 18{,}6\,\text{kPa}$. Das ist ein Überdruck gegenüber der Luft, nicht der Absolutdruck im Blut.
```

```aufgabe
id: p9-wassersaeule
titel: Ein Wasserbarometer
niveau: 2
lernziel: 5
kompetenz: anwenden
angabe: |
  Wie hoch wäre die Flüssigkeitssäule in einem Barometer bei $1013\,\text{hPa}$, wenn man statt Quecksilber ($13\,546\,\text{kg/m}^3$) Wasser verwendet? Berechne beide Höhen in Metern.
teile:
  - typ: zahl
    label: Wasser
    loesung: "101300/(1000*9.81)"
    einheit: "m"
    anzeige: '10{,}3'
    fehler:
      - wert: "1013/(1000*9.81)"
        meldung: |
          Der Druck muss in Pascal stehen: $1013\,\text{hPa} = 101\,300\,\text{Pa}$.
  - typ: zahl
    label: Quecksilber
    loesung: "101300/(13546*9.81)"
    einheit: "m"
    anzeige: '0{,}762'
    fehler:
      - wert: "101300*13546*9.81"
        meldung: |
          Aus $p_0 = \rho g h$ folgt $h = p_0/(\rho g)$. Es wird geteilt, nicht multipliziert.
hinweise:
  - Der Schweredruck der Säule ist gleich dem Luftdruck, $\rho g h = p_0$.
  - 'Nach $h$ umstellen: $h = p_0/(\rho g)$.'
loesung: |
  **Ansatz:** Im Gleichgewicht ist der Schweredruck der Säule gleich dem Luftdruck: $h = \dfrac{p_0}{\rho g}$.
  ---
  **Wasser:** $h = \dfrac{101\,300\,\text{Pa}}{1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2} = 10{,}3\,\text{m}$.
  ---
  **Quecksilber:** $h = \dfrac{101\,300\,\text{Pa}}{13\,546\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2} = 0{,}762\,\text{m}$. Probe: Quecksilber ist $13{,}5$-mal dichter, die Säule also $13{,}5$-mal kürzer.
```

```aufgabe
id: p9-barometrisch
titel: Luftdruck in 3000 m Höhe
niveau: 2
lernziel: 5
kompetenz: rechnen
angabe: |
  Schätze mit der barometrischen Höhenformel ($H = 8{,}0\,\text{km}$, $p_0 = 1013\,\text{hPa}$) den Luftdruck in $3000\,\text{m}$ Höhe ab. Gib das Ergebnis in hPa an.
teile:
  - typ: zahl
    loesung: "1013*exp(-3/8)"
    einheit: "hPa"
    anzeige: '696'
    toleranz: 3
    fehler:
      - wert: "1013-3000/8"
        meldung: |
          Du hast die Faustregel „1 hPa pro 8 m“ verwendet. Sie gilt nur für kleine Höhen. Für $3000\,\text{m}$ brauchst du die Exponentialformel.
      - wert: "1013*exp(-3000/8)"
        meldung: |
          Höhe und Skalenhöhe stehen in verschiedenen Einheiten. Im Exponenten brauchst du $3\,\text{km}/8\,\text{km} = 0{,}375$.
hinweise:
  - '$p = p_0\, e^{-h/H}$ mit $h$ und $H$ in derselben Einheit.'
  - '$h/H = 3/8 = 0{,}375$.'
loesung: |
  **Ansatz:** Für mehrere Kilometer gilt die barometrische Höhenformel $p = p_0\, e^{-h/H}$.
  ---
  **Exponent:** $h/H = 3{,}0\,\text{km}/8{,}0\,\text{km} = 0{,}375$, also $e^{-0{,}375} = 0{,}687$.
  ---
  **Ergebnis:** $p = 1013\,\text{hPa}\cdot 0{,}687 \approx 696\,\text{hPa}$, gut zwei Drittel des Drucks auf Meereshöhe.
```

```aufgabe
id: p9-diagramm-hoehe
titel: Höhe aus dem Druckdiagramm
niveau: 2
lernziel: 5
kompetenz: verstehen
angabe: |
  Ein Wetterballon meldet $500\,\text{hPa}$. Das Diagramm zeigt den Luftdruck nach der Höhenformel mit $H = 8\,\text{km}$. Lies ab, in welcher Höhe der Ballon ist, und prüfe das Ergebnis mit $h = H\cdot\ln(p_0/p)$. Gib die Höhe in km an, gerundet auf eine Nachkommastelle.
plot:
  x: [0, 12]
  y: [0, 1100]
  achsen: { x: "h in km", y: "p in hPa" }
  graphen:
    - { f: "1013*exp(-x/8)", farbe: 0, von: 0, bis: 12 }
    - { f: "500", farbe: 1, von: 0, bis: 12, gestrichelt: true }
teile:
  - typ: zahl
    loesung: "8*ln(1013/500)"
    einheit: "km"
    anzeige: '5{,}6'
    toleranz: 0.2
    fehler:
      - wert: "8*ln(500/1013)"
        meldung: |
          Eine Höhe über dem Meer ist positiv. Im Logarithmus steht $p_0/p$, der größere Druck oben im Bruch.
      - wert: "4"
        meldung: |
          Halber Druck bedeutet nicht halbe Skalenhöhe. Der Druck halbiert sich bei $H\cdot\ln 2 \approx 5{,}5\,\text{km}$.
hinweise:
  - Suche den Schnittpunkt der Kurve mit der gestrichelten Linie bei $500\,\text{hPa}$.
  - 'Rechnerisch: $e^{-h/H} = p/p_0$, logarithmieren gibt $h = H\ln(p_0/p)$.'
loesung: |
  **Ablesen:** Die Kurve schneidet die Linie bei $500\,\text{hPa}$ bei etwas mehr als $5{,}5\,\text{km}$.
  ---
  **Rechnen:** Aus $p = p_0\, e^{-h/H}$ folgt durch Logarithmieren $h = H\ln(p_0/p) = 8\,\text{km}\cdot\ln(1013/500) = 8\,\text{km}\cdot 0{,}706 = 5{,}6\,\text{km}$.
  ---
  **Einordnung:** In dieser Höhe ist die Hälfte der Luftmasse unter dem Ballon. Meteorologen nennen sie die 500-hPa-Fläche.
```

```aufgabe
id: p9-strohhalm
titel: Warum funktioniert ein Strohhalm?
niveau: 2
lernziel: 5
kompetenz: begruenden
angabe: |
  Erkläre physikalisch, warum man mit einem Strohhalm trinken kann. Erkläre auch, warum man selbst mit einem sehr langen Strohhalm Wasser nicht höher als etwa 10 m heben kann.
teile:
  - typ: text
    muster: |
      Beim Saugen vergrößert man das Volumen im Mundraum. Dadurch sinkt der Luftdruck im Halm unter den äußeren Luftdruck.
      Der äußere Luftdruck auf die Flüssigkeitsoberfläche im Glas drückt die Flüssigkeit in den Halm, bis der Schweredruck
      der Säule den Druckunterschied ausgleicht. Selbst bei völligem Vakuum im Halm kann der Druckunterschied höchstens
      den vollen Luftdruck von etwa 1 bar erreichen. Das entspricht einer Wassersäule von $p_0/(\rho g) \approx 10\,\text{m}$.
hinweise:
  - Wer „zieht“ die Flüssigkeit wirklich hoch? Überlege, welcher Druck auf die Oberfläche im Glas wirkt.
  - Wie groß kann der Druckunterschied zwischen außen und innen höchstens werden?
loesung: |
  **Ansatz:** Das „Saugen“ ist ein Absenken des Drucks im Halm. Eine Saugkraft, die am Wasser zieht, gibt es nicht.
  ---
  **Mechanismus:** Der äußere Luftdruck auf die Oberfläche im Glas schiebt das Getränk in den Halm, bis die Säule den Druckunterschied ausgleicht.
  ---
  **Grenze:** Der Unterschied ist höchstens der ganze Luftdruck, $\Delta p \le p_0$. Also ist $h \le p_0/(\rho g) = 101\,300/(1000\cdot 9{,}81)\,\text{m} \approx 10{,}3\,\text{m}$.
```

```aufgabe
id: p9-atmosphaere-fermi
titel: Wie schwer ist die ganze Atmosphäre?
niveau: 3
lernziel: 5
kompetenz: modellieren
angabe: |
  Schätze die Masse der gesamten Erdatmosphäre ab. Nutze den Luftdruck $p_0 = 1{,}013\cdot 10^5\,\text{Pa}$ und den Erdradius $R = 6371\,\text{km}$. Gib das Ergebnis in kg an.
teile:
  - typ: zahl
    loesung: "101300*4*pi*6.371e6^2/9.81"
    einheit: "kg"
    anzeige: '5{,}3\cdot 10^{18}'
    toleranz: 2e17
    fehler:
      - wert: "101300*pi*6.371e6^2/9.81"
        meldung: |
          Die Luft liegt auf der ganzen Kugeloberfläche, $A = 4\pi R^2$, nicht nur auf einer Kreisfläche.
      - wert: "101300*4*pi*6371^2/9.81"
        meldung: |
          Der Radius muss in Metern stehen: $6371\,\text{km} = 6{,}371\cdot 10^6\,\text{m}$.
hinweise:
  - Der Luftdruck ist das Gewicht der Luft pro Fläche. Welche Fläche trägt die ganze Atmosphäre?
  - 'Gesamtgewicht $F = p_0\cdot 4\pi R^2$, dann Masse $m = F/g$.'
gefuehrt:
  - text: Wie groß ist die Erdoberfläche in Quadratmetern?
    teil: { typ: zahl, loesung: "4*pi*6.371e6^2" }
    erklaerung: $A = 4\pi R^2 = 4\pi\cdot(6{,}371\cdot 10^6\,\text{m})^2 = 5{,}10\cdot 10^{14}\,\text{m}^2$.
  - text: Wie groß ist die Gewichtskraft der ganzen Luft in Newton?
    teil: { typ: zahl, loesung: "101300*4*pi*6.371e6^2" }
    erklaerung: $F = p_0 A = 1{,}013\cdot 10^5\,\text{Pa}\cdot 5{,}10\cdot 10^{14}\,\text{m}^2 = 5{,}17\cdot 10^{19}\,\text{N}$.
  - text: Welche Masse gehört zu dieser Gewichtskraft?
    teil: { typ: zahl, loesung: "101300*4*pi*6.371e6^2/9.81", toleranz: 2e17 }
    erklaerung: $m = F/g = 5{,}17\cdot 10^{19}\,\text{N}/9{,}81\,\text{m/s}^2 = 5{,}3\cdot 10^{18}\,\text{kg}$.
loesung: |
  **Ansatz:** Der Luftdruck am Boden ist das Gewicht der ganzen Luftsäule darüber pro Fläche. Über die ganze Erdoberfläche summiert ergibt sich das Gewicht der Atmosphäre. Wir nehmen $g$ als konstant an, weil fast die ganze Luft in den untersten $20\,\text{km}$ liegt.
  ---
  **Fläche:** $A = 4\pi R^2 = 5{,}10\cdot 10^{14}\,\text{m}^2$.
  ---
  **Gewicht:** $F = p_0 A = 1{,}013\cdot 10^5\,\text{N/m}^2\cdot 5{,}10\cdot 10^{14}\,\text{m}^2 = 5{,}17\cdot 10^{19}\,\text{N}$.
  ---
  **Masse:** $m = F/g = 5{,}3\cdot 10^{18}\,\text{kg}$. Das ist etwa ein Millionstel der Erdmasse ($6\cdot 10^{24}\,\text{kg}$). Die Luft ist eine hauchdünne Haut um die Erde.
```

## Oberflächenspannung und Kapillarität

```aufgabe
id: p9-7-check
art: check
titel: "Vorwissen: Lageenergie"
niveau: 1
angabe: |
  Wie viel Energie braucht man mindestens, um $0{,}50\,\text{kg}$ Wasser um $2{,}0\,\text{m}$ anzuheben? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "0.50*9.81*2.0"
    einheit: "J"
    anzeige: '9{,}81'
    fehler:
      - wert: "0.50*2.0"
        meldung: |
          Du hast $g$ vergessen. Die Lageenergie ist $E = m\, g\, h$, also Gewichtskraft mal Höhe.
hinweise:
  - 'Lageenergie: $E = m\, g\, h$.'
loesung: |
  **Ansatz:** Die nötige Energie ist mindestens die Zunahme der Lageenergie, $E = m\, g\, h$.
  ---
  **Rechnung:** $E = 0{,}50\,\text{kg}\cdot 9{,}81\,\text{m/s}^2\cdot 2{,}0\,\text{m} = 9{,}81\,\text{J}$. Wiederholen: [Energie](/lernen/physik1/arbeit-energie-impuls/energie).
```

Ein Wasserläufer flitzt über einen Teich, ohne einzusinken. Eine Büroklammer aus Stahl bleibt auf Wasser liegen,
wenn man sie vorsichtig ablegt. Tropfen aus dem Wasserhahn sind rund. Ein Papiertuch saugt verschüttetes Wasser
nach oben. Alle diese Erscheinungen haben dieselbe Ursache: Die Oberfläche einer Flüssigkeit verhält sich wie eine
gespannte, elastische Haut.

### Warum die Oberfläche gespannt ist

**Worum geht es?** Wir wollen verstehen, warum eine Flüssigkeit ihre Oberfläche so klein wie möglich machen will.

**Das Bild:** Die Teilchen einer Flüssigkeit ziehen einander schwach an. Diese Anziehung zwischen gleichartigen
Teilchen heißt **Kohäsion**, lateinisch „Zusammenhalt“. Ein Teilchen im Inneren ist rundherum von Nachbarn umgeben.
Die Anziehungskräfte heben sich im Mittel auf. Ein Teilchen an der Oberfläche hat aber nur unten und seitlich
Nachbarn, oben fehlen sie. Es wird deshalb nach innen gezogen.

**Die Folge in Schritten:**

1. Um ein Teilchen aus dem Inneren an die Oberfläche zu bringen, muss man gegen diese Anziehung Arbeit verrichten.
2. Eine größere Oberfläche enthält mehr Teilchen an der Oberfläche. Sie hat also mehr Energie.
3. Jedes System strebt zu kleinerer Energie. Die Flüssigkeit macht deshalb ihre Oberfläche so klein wie möglich.
4. Die Kugel hat bei gegebenem Volumen die kleinste Oberfläche. Deshalb sind kleine Tropfen rund.

**Was haben wir gezeigt?** Die Oberfläche kostet Energie. Deshalb zieht sie sich zusammen wie eine gespannte Haut.

:::definition[Oberflächenspannung]
Die **Oberflächenspannung** $\sigma$ (griechisch „sigma“) ist die Energie, die man braucht, um die Oberfläche
einer Flüssigkeit um eine Flächeneinheit zu vergrößern:
$$\sigma = \frac{\Delta E}{\Delta A}.$$
Gleichwertig ist sie die Kraft, mit der die Oberfläche an jedem Meter ihres Randes zieht: $\sigma = F/l$. Die
Einheit ist $\text{J/m}^2 = \text{N/m}$.
:::

Typische Werte bei $20\,^\circ\text{C}$: Wasser $0{,}073\,\text{N/m}$, Seifenlösung etwa $0{,}03\,\text{N/m}$,
Ethanol $0{,}022\,\text{N/m}$, Quecksilber $0{,}48\,\text{N/m}$. Spülmittel senkt die Oberflächenspannung von Wasser
stark. Legt man eine schwimmende Büroklammer in Wasser und gibt einen Tropfen Spülmittel dazu, sinkt sie sofort.

**Ein Nichtbeispiel:** Die Büroklammer liegt **nicht** wegen des Auftriebs auf dem Wasser. Stahl ist fast achtmal
so dicht wie Wasser, nach Archimedes müsste sie sinken. Sie liegt in einer kleinen Mulde der Oberfläche, und die
gespannte Haut trägt sie.

:::beispiel[Eine Seifenhaut im Drahtbügel]
Ein U-förmiger Drahtbügel trägt einen beweglichen Querdraht mit $l = 8{,}0\,\text{cm}$ Länge. Zwischen Bügel und
Querdraht spannt sich eine Seifenhaut ($\sigma = 0{,}030\,\text{N/m}$). Mit welcher Kraft zieht sie am Querdraht?

**Schritt 1, Modell:** Eine Seifenhaut ist eine dünne Flüssigkeitsschicht mit **zwei** Oberflächen, vorne und
hinten. Beide ziehen am Draht. Die gesamte Randlänge ist also $2l$.

**Schritt 2, Rechnung:** $F = \sigma\cdot 2l = 0{,}030\,\text{N/m}\cdot 2\cdot 0{,}080\,\text{m} = 4{,}8\cdot 10^{-3}\,\text{N}$.

**Antwort:** Etwa $5\,\text{mN}$, das Gewicht von einem halben Gramm. Klein, aber genug, um einen leichten Draht
heranzuziehen.
:::

:::achtung[Fehler: Bei der Seifenhaut nur eine Oberfläche gezählt]
Für die Seifenhaut im Drahtbügel ($\sigma = 0{,}030\,\text{N/m}$, Querdraht $l = 8{,}0\,\text{cm}$) rechnet ein Schüler
$F = \sigma\cdot l = 0{,}030\cdot 0{,}080\,\text{N} = 2{,}4\,\text{mN}$.

Eine Seifenhaut hat aber zwei Oberflächen. Jede zieht mit $\sigma\cdot l$. Richtig ist
$F = 2\sigma l = 4{,}8\,\text{mN}$. Umgekehrt gilt: Wer aus einer gemessenen Kraft $\sigma$ bestimmt, muss durch
$2l$ teilen, sonst wird $\sigma$ doppelt so groß.
:::

### Benetzung und Kapillarität

Neben der Kohäsion gibt es die Anziehung zwischen der Flüssigkeit und einer Wand. Sie heißt **Adhäsion**,
lateinisch „Anhaften“. Was überwiegt, entscheidet über die Form der Oberfläche an der Wand.

- Ist die Adhäsion stärker, kriecht die Flüssigkeit an der Wand hoch. Sie **benetzt** die Wand. Wasser an
  sauberem Glas bildet einen nach oben gebogenen Rand.
- Ist die Kohäsion stärker, zieht sich die Flüssigkeit von der Wand zurück. Quecksilber an Glas bildet einen nach
  unten gebogenen Rand.

In einem dünnen Rohr, einer **Kapillare** (lateinisch *capillus*, „Haar“), hat das große Folgen. Benetzendes Wasser
steigt darin über den äußeren Wasserspiegel hoch. Quecksilber wird unter den äußeren Spiegel hinabgedrückt. Diese
Erscheinung heißt **Kapillarität**.

```plot
x: [-3, 3]
y: [-1.5, 4]
gleich: true
hoehe: 260
strecken:
  - { von: [-0.5, -1.5], nach: [-0.5, 4] }
  - { von: [0.5, -1.5], nach: [0.5, 4] }
  - { von: [-3, 0], nach: [-0.5, 0], gestrichelt: true }
  - { von: [0.5, 0], nach: [3, 0], gestrichelt: true }
  - { von: [-0.5, 2.5], nach: [0.5, 2.5], farbe: 0 }
vektoren:
  - { von: [0, 2.5], nach: [0, 3.8], label: "Randkraft 2πrσ", farbe: 0 }
  - { von: [0, 1.2], nach: [0, -0.1], label: "Gewicht der Säule", farbe: 1 }
punkte:
  - { x: 1.8, y: 0.3, label: "äußerer Spiegel" }
  - { x: 1.2, y: 2.5, label: "h" }
beschriftung: "Freikörperbild der Wassersäule in einer Kapillare. Am Rand der Oberfläche zieht die Oberflächenspannung die Säule mit der Kraft 2πr·σ nach oben (blau). Die Gewichtskraft der gehobenen Säule zieht nach unten (orange). Die Säule steigt, bis beide gleich groß sind."
```

**Wie hoch steigt das Wasser?** Am ganzen Umfang $2\pi r$ der Kapillare zieht die Oberfläche nach oben, mit der
Kraft $F = 2\pi r\,\sigma$. Die gehobene Säule mit Höhe $h$ hat das Gewicht $\rho\, g\,\pi r^2 h$. Im Gleichgewicht
sind beide gleich:
$$2\pi r\,\sigma = \rho\, g\,\pi r^2 h.$$
Wir teilen beide Seiten durch $\pi r$ und erhalten $2\sigma = \rho\, g\, r\, h$. Dann teilen wir durch $\rho g r$ und
erhalten $h = 2\sigma/(\rho g r)$. Diese Rechnung nimmt an, dass die Oberfläche senkrecht an der Wand hochzieht, wie bei
Wasser an sauberem Glas. Trifft die Oberfläche die Wand schräg, zählt nur der senkrechte Anteil der Randkraft. Dann kommt
noch der Faktor $\cos\theta$ dazu:

:::formel[Steighöhe in einer Kapillare]
$$h = \frac{2\sigma\cos\theta}{\rho\, g\, r}$$
Dabei ist $\sigma$ die Oberflächenspannung, $\rho$ die Dichte der Flüssigkeit, $r$ der **Radius** der Kapillare und
$\theta$ (griechisch „theta“) der Randwinkel, unter dem die Oberfläche die Wand trifft. Für Wasser an sauberem Glas
ist $\theta \approx 0^\circ$, also $\cos\theta = 1$. Für Quecksilber ist $\theta \approx 140^\circ$, $\cos\theta$
ist negativ, und $h$ wird negativ: Die Säule sinkt ab.
:::

:::beispiel[Wasser in einer dünnen Glasröhre]
Eine Glasröhre hat den Innenradius $r = 0{,}25\,\text{mm}$. Wie hoch steigt Wasser ($\sigma = 0{,}073\,\text{N/m}$) darin?

**Schritt 1, Einheiten:** $r = 0{,}25\cdot 10^{-3}\,\text{m}$, $\cos\theta = 1$.

**Schritt 2, Rechnung:**
$h = \dfrac{2\cdot 0{,}073\,\text{N/m}}{1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}25\cdot 10^{-3}\,\text{m}} = 0{,}060\,\text{m} = 6{,}0\,\text{cm}$.

**Antwort:** Das Wasser steigt sechs Zentimeter hoch, ganz ohne Pumpe. In einem Rohr mit $1\,\text{cm}$ Radius wären
es nur $1{,}5\,\text{mm}$.
:::

```plot
x: [0, 2]
y: [0, 16]
achsen: { x: "Radius r in mm", y: "Steighöhe h in cm" }
graphen:
  - { f: "1.488/x", label: "Wasser in Glas", farbe: 0, von: 0.093, bis: 2 }
punkte:
  - { x: 0.25, y: 5.95, label: "r = 0,25 mm: 6,0 cm" }
  - { x: 0.5, y: 2.98, label: "r = 0,5 mm: 3,0 cm" }
  - { x: 1, y: 1.49, label: "r = 1 mm: 1,5 cm" }
beschriftung: "Steighöhe von Wasser in Glaskapillaren über dem Radius. Die Kurve ist eine Hyperbel: Halber Radius ergibt doppelte Steighöhe. In sehr dünnen Röhren steigt Wasser sehr hoch, in weiten kaum."
```

Die Steighöhe ist **umgekehrt proportional** zum Radius. Halber Radius heißt doppelte Höhe. Darauf beruhen viele
Alltagsdinge: Ein Papiertuch und ein Schwamm saugen durch feine Poren. Der Docht einer Kerze transportiert flüssiges
Wachs nach oben. Feuchtigkeit steigt in Mauern auf. Der Boden hält Regenwasser in feinen Poren, wo Pflanzenwurzeln
es aufnehmen.

:::achtung[Fehler: Durchmesser statt Radius eingesetzt]
Eine Röhre hat $0{,}50\,\text{mm}$ **Durchmesser**. Eine Schülerin setzt $r = 0{,}50\,\text{mm}$ ein und erhält
$h = 2\cdot 0{,}073/(1000\cdot 9{,}81\cdot 0{,}50\cdot 10^{-3})\,\text{m} = 3{,}0\,\text{cm}$.

Der Radius ist der halbe Durchmesser, $r = 0{,}25\,\text{mm}$. Weil $h$ umgekehrt proportional zu $r$ ist, wird das
Ergebnis doppelt so groß: $h = 6{,}0\,\text{cm}$. Lies bei Röhren und Kolben immer genau, ob Radius oder Durchmesser
gegeben ist.
:::

:::merke
**Oberflächenspannung und Kapillarität:**
1. Randkraft einer Oberfläche: $F = \sigma\cdot l$. Eine Seifenhaut hat zwei Oberflächen, also $F = 2\sigma l$.
2. Steighöhe: $h = 2\sigma\cos\theta/(\rho g r)$ mit dem **Radius** in Metern. Für Wasser an Glas $\cos\theta = 1$.
3. Proportionalität: $h \propto 1/r$. Halber Radius, doppelte Höhe.
:::

```reflexion
frage: Warum zieht ein Papiertuch Wasser nach oben, obwohl das Wasser dabei Lageenergie gewinnt? Woher kommt diese Energie?
antwort: |
  Das Papier besteht aus feinen Fasern mit winzigen Zwischenräumen, also aus vielen sehr dünnen Kapillaren. Wasser
  haftet stark an den Fasern. Wenn es in die Zwischenräume kriecht, ersetzt es die energiereichere Grenzfläche
  zwischen Faser und Luft durch die energieärmere Grenzfläche zwischen Faser und Wasser. Die frei werdende
  Oberflächenenergie hebt das Wasser an. Es steigt so lange, bis die gewonnene Lageenergie die frei werdende
  Oberflächenenergie aufwiegt. Je feiner die Poren, desto höher steigt es.
```

### Aufgaben zur Oberflächenspannung

```aufgabe
id: p9-kapillar-proportional
titel: Halber Radius
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  In einer Glaskapillare steigt Wasser $2{,}0\,\text{cm}$ hoch. Wie hoch steigt es in einer Kapillare mit dem halben Radius?
teile:
  - typ: zahl
    loesung: "2.0*2"
    einheit: "cm"
    anzeige: '4{,}0'
    fehler:
      - wert: "2.0*4"
        meldung: |
          Die Fläche des Querschnitts sinkt auf ein Viertel, aber die Randkraft sinkt auch, auf die Hälfte. Insgesamt gilt $h \propto 1/r$, nicht $1/r^2$.
      - wert: "1.0"
        meldung: |
          In dünneren Röhren steigt Wasser **höher**, nicht weniger hoch. $r$ steht in der Formel im Nenner.
hinweise:
  - 'In $h = 2\sigma\cos\theta/(\rho g r)$ steht $r$ im Nenner, und zwar ohne Quadrat.'
loesung: |
  **Ansatz:** $h = \dfrac{2\sigma\cos\theta}{\rho g r}$, alles außer $r$ bleibt gleich. Also ist $h$ umgekehrt proportional zu $r$.
  ---
  **Ergebnis:** Halber Radius, doppelte Höhe: $h = 2\cdot 2{,}0\,\text{cm} = 4{,}0\,\text{cm}$.
```

```aufgabe
id: p9-bueroklammer
titel: Warum liegt die Büroklammer auf dem Wasser?
niveau: 1
lernziel: 6
kompetenz: verstehen
angabe: |
  Eine Büroklammer aus Stahl ($7800\,\text{kg/m}^3$) liegt vorsichtig abgelegt auf der Wasseroberfläche. Was trägt sie?
teile:
  - typ: auswahl
    optionen:
      - "der Auftrieb nach Archimedes"
      - "die Oberflächenspannung des Wassers"
      - "die Luft, die in der Klammer eingeschlossen ist"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Stahl ist fast achtmal so dicht wie Wasser. Mit Auftrieb allein müsste die Klammer sinken. Ein Tropfen Spülmittel, der den Auftrieb nicht ändert, lässt sie sofort untergehen.
      - wert: 2
        meldung: |
          Eine Büroklammer ist ein massiver Draht und schließt keine Luft ein. Sie liegt in einer kleinen Mulde der Oberfläche, die wie eine gespannte Haut trägt.
hinweise:
  - Was passiert, wenn man einen Tropfen Spülmittel ins Wasser gibt? Welche Größe ändert das Spülmittel?
loesung: |
  **Ansatz:** Nach dem Dichtevergleich müsste Stahl sinken. Es muss also eine andere Kraft wirken.
  ---
  **Antwort:** Die Oberfläche verhält sich wie eine gespannte Haut. Die Klammer drückt eine kleine Mulde hinein, und die Oberflächenspannung trägt sie. Spülmittel senkt $\sigma$, dann sinkt die Klammer.
```

```aufgabe
id: p9-kapillar-steighoehe
titel: Steighöhe in einer feinen Kapillare
niveau: 2
lernziel: 6
kompetenz: rechnen
angabe: |
  Wie hoch steigt Wasser ($\sigma = 0{,}073\,\text{N/m}$, $\theta = 0^\circ$) in einer Glaskapillare mit $0{,}20\,\text{mm}$ **Durchmesser**? Gib das Ergebnis in cm an, gerundet auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "2*0.073/(1000*9.81*0.10e-3)*100"
    einheit: "cm"
    anzeige: '14{,}9'
    toleranz: 0.1
    fehler:
      - wert: "2*0.073/(1000*9.81*0.20e-3)*100"
        meldung: |
          Gegeben ist der Durchmesser. In die Formel gehört der Radius, $r = 0{,}10\,\text{mm}$.
      - wert: "2*0.073/(1000*9.81*0.10e-3)"
        meldung: |
          Das Ergebnis ist in Metern. Gefragt sind Zentimeter.
hinweise:
  - Bestimme zuerst den Radius und rechne ihn in Meter um.
  - '$h = 2\sigma/(\rho g r)$, Ergebnis von Metern in Zentimeter umrechnen.'
loesung: |
  **Ansatz:** Steighöhe $h = \dfrac{2\sigma\cos\theta}{\rho g r}$ mit $\cos 0^\circ = 1$.
  ---
  **Radius:** $r = 0{,}20\,\text{mm}/2 = 0{,}10\,\text{mm} = 1{,}0\cdot 10^{-4}\,\text{m}$.
  ---
  **Rechnung:** $h = \dfrac{2\cdot 0{,}073\,\text{N/m}}{1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}0\cdot 10^{-4}\,\text{m}} = 0{,}149\,\text{m} = 14{,}9\,\text{cm}$. Probe mit der Proportionalität: Bei $r = 0{,}25\,\text{mm}$ waren es $6{,}0\,\text{cm}$, bei $2{,}5$-mal kleinerem Radius also $15\,\text{cm}$.
```

```aufgabe
id: p9-seifenhaut
titel: Oberflächenspannung messen
niveau: 2
lernziel: 6
kompetenz: anwenden
angabe: |
  Ein Querdraht mit $5{,}0\,\text{cm}$ Länge wird von einer Seifenhaut mit der Kraft $2{,}6\,\text{mN}$ gezogen. Wie groß ist die Oberflächenspannung der Seifenlösung? Gib sie in N/m an.
teile:
  - typ: zahl
    loesung: "2.6e-3/(2*0.050)"
    einheit: "N/m"
    anzeige: '0{,}026'
    fehler:
      - wert: "2.6e-3/0.050"
        meldung: |
          Die Seifenhaut hat zwei Oberflächen. Beide ziehen am Draht, also gilt $F = 2\sigma l$. Du musst durch $2l$ teilen.
      - wert: "2.6/(2*0.050)"
        meldung: |
          $2{,}6\,\text{mN} = 2{,}6\cdot 10^{-3}\,\text{N}$. Rechne die Kraft zuerst in Newton um.
hinweise:
  - Wie viele Oberflächen hat eine Seifenhaut?
  - '$F = 2\sigma l$ nach $\sigma$ umstellen.'
loesung: |
  **Ansatz:** Die Haut hat zwei Oberflächen, jede zieht mit $\sigma l$. Also $F = 2\sigma l$ und $\sigma = F/(2l)$.
  ---
  **Einheiten:** $F = 2{,}6\cdot 10^{-3}\,\text{N}$, $l = 0{,}050\,\text{m}$.
  ---
  **Rechnung:** $\sigma = \dfrac{2{,}6\cdot 10^{-3}\,\text{N}}{2\cdot 0{,}050\,\text{m}} = 0{,}026\,\text{N/m}$. Das ist gut ein Drittel des Werts von reinem Wasser, typisch für Seifenlösung.
```

```aufgabe
id: p9-baum-kapillar
titel: Heben Kapillaren das Wasser in hohe Bäume?
niveau: 2
lernziel: 6
kompetenz: begruenden
angabe: |
  Die Wasserleitungen im Holz eines Baumes haben einen Radius von etwa $20\,\mu\text{m} = 2{,}0\cdot 10^{-5}\,\text{m}$.

  a) Wie hoch könnte Wasser ($\sigma = 0{,}073\,\text{N/m}$, $\theta = 0^\circ$) darin durch Kapillarität steigen? Runde auf zwei Nachkommastellen.

  b) Erkläre, ob die Kapillarität allein das Wasser in die Krone eines $40\,\text{m}$ hohen Baumes bringen kann.
teile:
  - typ: zahl
    label: a) Steighöhe
    loesung: "2*0.073/(1000*9.81*2.0e-5)"
    einheit: "m"
    anzeige: '0{,}74'
    toleranz: 0.01
    fehler:
      - wert: "2*0.073/(1000*9.81*2.0e-6)"
        meldung: |
          $20\,\mu\text{m} = 20\cdot 10^{-6}\,\text{m} = 2{,}0\cdot 10^{-5}\,\text{m}$. Prüfe die Zehnerpotenz.
  - typ: text
    label: b) Begründung
    muster: |
      Die Kapillarität hebt das Wasser nur etwa $0{,}74\,\text{m}$, viel zu wenig für $40\,\text{m}$. Bäume brauchen einen
      anderen Mechanismus: An den Blättern verdunstet Wasser. Das zieht die zusammenhängenden Wasserfäden in den Leitungen
      nach oben, ähnlich wie an einem Seil. Dass die Fäden dabei nicht abreißen, liegt an der Kohäsion, dem starken
      Zusammenhalt der Wasserteilchen.
hinweise:
  - 'Steighöhe $h = 2\sigma/(\rho g r)$ mit $r$ in Metern.'
  - Vergleiche das Ergebnis mit der Baumhöhe. Was muss zusätzlich wirken?
loesung: |
  **Ansatz:** Wir berechnen die größte mögliche Steighöhe mit der Kapillarformel und vergleichen mit der Baumhöhe.
  ---
  **a)** $h = \dfrac{2\cdot 0{,}073\,\text{N/m}}{1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 2{,}0\cdot 10^{-5}\,\text{m}} = 0{,}74\,\text{m}$.
  ---
  **b)** $0{,}74\,\text{m}$ ist viel weniger als $40\,\text{m}$. Kapillarität allein reicht nicht. Den Hauptteil leistet die Verdunstung an den Blättern, die die Wasserfäden nach oben zieht.
```

```aufgabe
id: p9-kapillar-messreihe
titel: Oberflächenspannung aus einer Messreihe
niveau: 3
lernziel: 6
kompetenz: modellieren
angabe: |
  In einem Praktikum wird die Steighöhe von Wasser in drei Glaskapillaren gemessen ($\theta = 0^\circ$):

  - $r = 0{,}20\,\text{mm}$: $h = 7{,}4\,\text{cm}$
  - $r = 0{,}40\,\text{mm}$: $h = 3{,}7\,\text{cm}$
  - $r = 0{,}80\,\text{mm}$: $h = 1{,}9\,\text{cm}$

  a) Berechne aus jeder Messung $\sigma$ und daraus den Mittelwert in $\text{mN/m}$. Runde auf eine Nachkommastelle.

  b) Die Standardabweichung der drei Einzelwerte ist $1{,}13\,\text{mN/m}$. Wie groß ist die Unsicherheit des Mittelwerts, $s/\sqrt n$? Runde auf zwei Nachkommastellen.

  c) Passt das Ergebnis zum Literaturwert $72{,}8\,\text{mN/m}$ bei $20\,^\circ\text{C}$?
teile:
  - typ: zahl
    label: a) Mittelwert
    loesung: "1000*9.81*(0.20e-3*0.074+0.40e-3*0.037+0.80e-3*0.019)/2/3*1000"
    einheit: "mN/m"
    anzeige: '73{,}2'
    toleranz: 0.1
  - typ: zahl
    label: b) Unsicherheit des Mittelwerts
    loesung: "1.13/sqrt(3)"
    einheit: "mN/m"
    anzeige: '0{,}65'
    toleranz: 0.01
  - typ: auswahl
    label: c) Vergleich
    optionen:
      - "Ja, der Literaturwert liegt innerhalb von etwa einer Unsicherheit."
      - "Nein, die Abweichung ist viel größer als die Unsicherheit."
    richtig: [0]
hinweise:
  - 'Stelle die Kapillarformel nach $\sigma$ um: $\sigma = \rho g r h/2$.'
  - 'Rechne $r$ und $h$ in Meter um. Das Ergebnis in N/m mal $1000$ ergibt mN/m.'
  - Vergleiche den Abstand zum Literaturwert mit der Unsicherheit des Mittelwerts.
gefuehrt:
  - text: Welchen Wert für $\sigma$ in mN/m liefert die erste Messung?
    teil: { typ: zahl, loesung: "1000*9.81*0.20e-3*0.074/2*1000", toleranz: 0.1 }
    erklaerung: $\sigma = 1000\cdot 9{,}81\cdot 0{,}20\cdot 10^{-3}\cdot 0{,}074/2\,\text{N/m} = 0{,}0726\,\text{N/m} = 72{,}6\,\text{mN/m}$.
  - text: Die zweite Messung gibt ebenfalls $72{,}6\,\text{mN/m}$. Welchen Wert liefert die dritte?
    teil: { typ: zahl, loesung: "1000*9.81*0.80e-3*0.019/2*1000", toleranz: 0.1 }
    erklaerung: $\sigma = 1000\cdot 9{,}81\cdot 0{,}80\cdot 10^{-3}\cdot 0{,}019/2\,\text{N/m} = 74{,}6\,\text{mN/m}$. Bei der kleinsten Steighöhe wirkt ein Ablesefehler von $1\,\text{mm}$ am stärksten.
  - text: Wie groß ist der Mittelwert?
    teil: { typ: zahl, loesung: "(72.594+72.594+74.556)/3", toleranz: 0.1 }
    erklaerung: $(72{,}6 + 72{,}6 + 74{,}6)/3 = 73{,}2\,\text{mN/m}$.
loesung: |
  **Ansatz:** Aus $h = 2\sigma/(\rho g r)$ folgt $\sigma = \rho g r h/2$. Jede Messung liefert einen Wert, den Mittelwert und seine Unsicherheit berechnen wir wie im Abschnitt [Messreihen auswerten](/lernen/physik1/groessen-einheiten-messen/messreihen-auswerten-mittelwert-und-standardabweichung).
  ---
  **a)** Einzelwerte: $72{,}6$, $72{,}6$ und $74{,}6\,\text{mN/m}$. Mittelwert: $\bar\sigma = 73{,}2\,\text{mN/m}$.
  ---
  **b)** $u = s/\sqrt n = 1{,}13\,\text{mN/m}/\sqrt 3 = 0{,}65\,\text{mN/m}$. Ergebnis: $\sigma = (73{,}2 \pm 0{,}7)\,\text{mN/m}$.
  ---
  **c)** Der Literaturwert $72{,}8$ weicht um $0{,}4\,\text{mN/m}$ ab, weniger als eine Unsicherheit. Messung und Literatur passen zusammen.
```

## Strömungen und die Kontinuitätsgleichung

```aufgabe
id: p9-8-check
art: check
titel: "Vorwissen: Querschnitt eines Rohres"
niveau: 1
angabe: |
  Ein Rohr hat $2{,}0\,\text{cm}$ Innendurchmesser. Wie groß ist seine Querschnittsfläche in $\text{m}^2$?
teile:
  - typ: zahl
    loesung: "pi*0.01^2"
    einheit: "m²"
    anzeige: '3{,}14\cdot 10^{-4}'
    fehler:
      - wert: "pi*0.02^2"
        meldung: |
          In $A = \pi r^2$ gehört der Radius, also der halbe Durchmesser: $r = 1{,}0\,\text{cm} = 0{,}010\,\text{m}$.
      - wert: "pi*1^2"
        meldung: |
          Der Radius muss in Metern stehen, sonst kommt $\text{cm}^2$ heraus: $1{,}0\,\text{cm} = 0{,}010\,\text{m}$.
hinweise:
  - 'Kreisfläche $A = \pi r^2$ mit dem Radius in Metern.'
loesung: |
  **Ansatz:** Der Querschnitt ist ein Kreis mit $r = d/2 = 1{,}0\,\text{cm} = 0{,}010\,\text{m}$.
  ---
  **Rechnung:** $A = \pi\cdot(0{,}010\,\text{m})^2 = 3{,}14\cdot 10^{-4}\,\text{m}^2$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
```

Bis jetzt waren alle Fluide in Ruhe. Ab hier strömen sie. Hältst du den Daumen über das Ende eines
Gartenschlauchs, spritzt das Wasser viel weiter. Ein Fluss, der durch eine Felsenge muss, wird dort reißend. Beides
erklärt eine einzige, einfache Gleichung.

### Das Modell der idealen Strömung

Echte Strömungen sind kompliziert. Wir vereinfachen sie zu einer **idealen Strömung** mit drei Eigenschaften:

- **inkompressibel:** Die Dichte ist überall gleich. Für Flüssigkeiten stimmt das sehr gut. Für Luft stimmt es,
  solange sie langsamer als etwa $100\,\text{m/s}$ strömt.
- **reibungsfrei:** Das Fluid reibt weder an der Wand noch an sich selbst. Die Reibung kommt erst in
  [9.11 Strömungswiderstand](/lernen/physik1/hydro-aeromechanik/stroemungswiderstand) dazu.
- **stationär:** An jeder Stelle bleibt die Geschwindigkeit zeitlich gleich. Das Wasser fließt gleichmäßig, es
  pulsiert nicht.

Die Bahnen, auf denen sich die Fluidteilchen bewegen, heißen **Stromlinien**. Wo sie dicht beieinander liegen,
strömt das Fluid schnell.

```plot
x: [0, 6]
y: [-1.3, 1.3]
gleich: true
hoehe: 200
graphen:
  - { f: "1-0.5/(1+exp(-3*(x-3)))", farbe: 3, von: 0, bis: 6 }
  - { f: "-(1-0.5/(1+exp(-3*(x-3))))", farbe: 3, von: 0, bis: 6 }
  - { f: "0.6*(1-0.5/(1+exp(-3*(x-3))))", farbe: 0, von: 0, bis: 6, gestrichelt: true }
  - { f: "0.2*(1-0.5/(1+exp(-3*(x-3))))", farbe: 0, von: 0, bis: 6, gestrichelt: true }
  - { f: "-0.2*(1-0.5/(1+exp(-3*(x-3))))", farbe: 0, von: 0, bis: 6, gestrichelt: true }
  - { f: "-0.6*(1-0.5/(1+exp(-3*(x-3))))", farbe: 0, von: 0, bis: 6, gestrichelt: true }
vektoren:
  - { von: [0.5, 0], nach: [1.3, 0], label: "v₁", farbe: 1 }
  - { von: [4.3, 0], nach: [5.9, 0], label: "v₂ = 2·v₁", farbe: 1 }
beschriftung: "Ein flacher Kanal, der senkrecht zur Bildebene überall gleich tief ist, verengt sich auf die halbe Breite (violett: Kanalwand). Sein Querschnitt halbiert sich also. Die Stromlinien (blau gestrichelt) rücken in der Engstelle zusammen. Dort strömt das Fluid schneller, hier doppelt so schnell (orange Pfeile). Bei einem runden Rohr mit halbem Durchmesser wäre der Querschnitt nur ein Viertel so groß."
```

### Der Volumenstrom

Fließt Wasser mit der Geschwindigkeit $v$ durch einen Querschnitt $A$, dann rückt in der Zeit $\Delta t$ jedes
Wasserteilchen um die Strecke $v\,\Delta t$ vor. Durch den Querschnitt tritt also ein Zylinder mit der Grundfläche
$A$ und der Länge $v\,\Delta t$, das ist das Volumen $\Delta V = A\, v\,\Delta t$.

:::definition[Volumenstrom]
Der **Volumenstrom** $Q$, auch Durchfluss genannt, ist das Volumen, das pro Zeit durch einen Querschnitt fließt:
$$Q = \frac{\Delta V}{\Delta t} = A\cdot v.$$
Dabei ist $A$ die Querschnittsfläche und $v$ die Strömungsgeschwindigkeit. Die Einheit ist $\text{m}^3/\text{s}$.
Im Alltag sind Liter pro Minute üblich: $1\,\text{L/min} = 10^{-3}\,\text{m}^3/60\,\text{s} = 1{,}67\cdot 10^{-5}\,\text{m}^3/\text{s}$.
:::

Ein Beispiel: Ein Wasserhahn liefert $12\,\text{L/min}$, also $2\cdot 10^{-4}\,\text{m}^3/\text{s}$. Ein Nichtbeispiel
für einen Volumenstrom: die Wassermenge in einer vollen Badewanne. Sie ist ein Volumen, kein Volumen **pro Zeit**.

:::achtung[Fehler: Liter pro Minute falsch umgerechnet]
Für $12\,\text{L/min}$ schreibt ein Schüler $12\cdot 10^{-3}\,\text{m}^3\cdot 60 = 0{,}72\,\text{m}^3/\text{s}$.

Eine Minute hat $60\,\text{s}$. Pro **Sekunde** fließt also nur ein Sechzigstel. Man muss durch $60$ teilen:
$12\cdot 10^{-3}\,\text{m}^3/60\,\text{s} = 2\cdot 10^{-4}\,\text{m}^3/\text{s}$. Der falsche Wert wären fast fünf volle Badewannen
zu je $150\,\text{L}$ pro Sekunde.
:::

### Die Kontinuitätsgleichung

**Worum geht es?** Was passiert mit der Geschwindigkeit, wenn sich ein Rohr verengt?

**Das Argument in Schritten:**

1. Wasser lässt sich nicht zusammendrücken und verschwindet nicht. Was vorne in ein Rohrstück hineinfließt, muss
   hinten wieder herauskommen.
2. Es gibt keine Abzweigung und keinen Zufluss. Also ist der Volumenstrom an jeder Stelle des Rohres gleich.
3. Mit $Q = A\cdot v$ heißt das: $A_1 v_1 = A_2 v_2$.

:::satz[Kontinuitätsgleichung]
In einer inkompressiblen Strömung durch ein Rohr ohne Zu- und Abflüsse ist der Volumenstrom überall gleich:
$$A_1\, v_1 = A_2\, v_2.$$
Dabei sind $A_1, A_2$ die Querschnitte an zwei Stellen und $v_1, v_2$ die Geschwindigkeiten dort. Wo der Querschnitt
kleiner ist, strömt das Fluid schneller.
:::

Das Wort „Kontinuität“ heißt „Stetigkeit, Zusammenhang“: Der Strom reißt nirgends ab und staut sich nirgends. Die
Gleichung ist die **Massenerhaltung** für Fluide. Halber Querschnitt heißt doppelte Geschwindigkeit. Ein Nichtbeispiel:
Hat das Rohr eine Abzweigung, gilt die Gleichung nicht mehr zwischen zwei beliebigen Stellen. Dann teilt sich der
Volumenstrom auf, und die Summe der Teilströme ist gleich dem Zufluss.

:::beispiel[Ein Fluss an einer Engstelle]
Ein Fluss ist $40\,\text{m}$ breit, im Mittel $2\,\text{m}$ tief und fließt mit $0{,}5\,\text{m/s}$. An einer Felsenge
ist er nur $10\,\text{m}$ breit und $2{,}5\,\text{m}$ tief.

**Schritt 1, Volumenstrom:** $Q = A_1 v_1 = (40\,\text{m}\cdot 2\,\text{m})\cdot 0{,}5\,\text{m/s} = 40\,\text{m}^3/\text{s}$.

**Schritt 2, Geschwindigkeit in der Enge:** $A_2 = 10\,\text{m}\cdot 2{,}5\,\text{m} = 25\,\text{m}^2$, also
$v_2 = Q/A_2 = 40\,\text{m}^3/\text{s}\,/\,25\,\text{m}^2 = 1{,}6\,\text{m/s}$.

**Antwort:** In der Enge fließt das Wasser mehr als dreimal so schnell. Wer dort baden geht, unterschätzt das leicht.
:::

:::beispiel[Ein Duschkopf]
Durch einen Duschkopf fließen $12\,\text{L/min}$. Er hat $60$ Düsen mit je $1{,}0\,\text{mm}$ Durchmesser.

**Schritt 1, Volumenstrom in SI:** $Q = 12\cdot 10^{-3}\,\text{m}^3/60\,\text{s} = 2{,}0\cdot 10^{-4}\,\text{m}^3/\text{s}$.

**Schritt 2, gesamter Austrittsquerschnitt:** $A = 60\cdot\pi\cdot(0{,}5\cdot 10^{-3}\,\text{m})^2 = 4{,}71\cdot 10^{-5}\,\text{m}^2$.

**Schritt 3, Geschwindigkeit:** $v = Q/A = 2{,}0\cdot 10^{-4}\,\text{m}^3/\text{s}\,/\,4{,}71\cdot 10^{-5}\,\text{m}^2 = 4{,}2\,\text{m/s}$.

**Antwort:** Die Wasserstrahlen treten mit gut $4\,\text{m/s}$ aus, viel schneller als das Wasser in der Zuleitung.
Kleinere oder verkalkte Düsen machen die Strahlen noch schneller und härter.
:::

:::achtung[Fehler: Mit dem Durchmesserverhältnis statt dem Flächenverhältnis]
Ein Rohr verengt sich von $4\,\text{cm}$ auf $2\,\text{cm}$ Durchmesser. Vorne strömt Wasser mit $1{,}5\,\text{m/s}$.
Eine Schülerin rechnet $v_2 = 1{,}5\,\text{m/s}\cdot 4/2 = 3{,}0\,\text{m/s}$.

In der Kontinuitätsgleichung stehen Flächen. Halber Durchmesser heißt ein Viertel der Fläche. Richtig ist
$v_2 = 1{,}5\,\text{m/s}\cdot(4/2)^2 = 6{,}0\,\text{m/s}$.
:::

Die Kontinuitätsgleichung gilt auch im Blutkreislauf. Die Aorta, die große Schlagader, hat einige Quadratzentimeter
Querschnitt. Die winzigen Kapillaren sind zwar einzeln sehr dünn, aber es gibt Milliarden davon. Zusammen haben sie
einen viele hundert Mal größeren Querschnitt. Das Blut fließt dort deshalb sehr langsam, was den Stoffaustausch mit dem
Gewebe erst ermöglicht.

:::merke
**Kontinuitätsaufgaben lösen:**
1. Volumenstrom in $\text{m}^3/\text{s}$ umrechnen: Liter mal $10^{-3}$, Minuten mal $60$ im Nenner.
2. Querschnitte bestimmen. Bei Kreisen $A = \pi r^2$; für Verhältnisse genügt $(d_1/d_2)^2$.
3. $A_1 v_1 = A_2 v_2$, oder $v = Q/A$ an jeder Stelle.
:::

```reflexion
frage: Ein Wasserstrahl aus dem Hahn wird beim Herunterfallen dünner. Erkläre das mit der Kontinuitätsgleichung und der Kinematik.
antwort: |
  Beim Fallen wird das Wasser durch die Schwerkraft schneller, wie jeder fallende Körper. Der Volumenstrom bleibt aber
  gleich, denn kein Wasser kommt dazu oder geht verloren. Nach $A\cdot v = \text{konstant}$ muss der Querschnitt
  kleiner werden, wenn die Geschwindigkeit wächst. Der Strahl wird nach unten immer dünner, bis er schließlich in
  Tropfen zerfällt.
```

### Aufgaben zur Kontinuitätsgleichung

```aufgabe
id: p9-kontinuitaet-schlauch
titel: Spritzdüse
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Wasser fließt mit $1{,}0\,\text{m/s}$ durch einen Schlauch mit $2{,}0\,\text{cm}$ Innendurchmesser und tritt aus einer Düse mit $0{,}5\,\text{cm}$ Durchmesser aus. Wie schnell ist der Strahl?
teile:
  - typ: zahl
    loesung: "1.0*(2.0/0.5)^2"
    einheit: "m/s"
    anzeige: '16'
    fehler:
      - wert: "4"
        meldung: |
          Du hast mit dem Durchmesserverhältnis gerechnet. In der Kontinuitätsgleichung stehen Flächen, und die verhalten sich wie die Quadrate der Durchmesser.
      - wert: "1/16"
        meldung: |
          In der engeren Düse wird das Wasser **schneller**, nicht langsamer.
hinweise:
  - '$v_2 = v_1\cdot A_1/A_2 = v_1\cdot(d_1/d_2)^2$.'
loesung: |
  **Ansatz:** Kontinuität, $A_1 v_1 = A_2 v_2$, also $v_2 = v_1\cdot(d_1/d_2)^2$.
  ---
  **Rechnung:** $v_2 = 1{,}0\,\text{m/s}\cdot(2{,}0/0{,}5)^2 = 1{,}0\,\text{m/s}\cdot 16 = 16\,\text{m/s}$. Ein Viertel des Durchmessers gibt die sechzehnfache Geschwindigkeit.
```

```aufgabe
id: p9-volumenstrom-einheit
titel: Liter pro Minute in SI
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Eine Gartenpumpe fördert $18\,\text{L/min}$. Gib den Volumenstrom in $\text{m}^3/\text{s}$ an.
teile:
  - typ: zahl
    loesung: "18e-3/60"
    einheit: "m³/s"
    anzeige: '3{,}0\cdot 10^{-4}'
    fehler:
      - wert: "18e-3*60"
        meldung: |
          Pro Sekunde fließt weniger als pro Minute. Du musst durch $60$ teilen, nicht mit $60$ multiplizieren.
      - wert: "18/60"
        meldung: |
          Das sind Liter pro Sekunde. Für Kubikmeter musst du noch mit $10^{-3}$ multiplizieren.
hinweise:
  - '$1\,\text{L} = 10^{-3}\,\text{m}^3$ und $1\,\text{min} = 60\,\text{s}$.'
loesung: |
  **Ansatz:** Zähler und Nenner einzeln umrechnen: $18\,\text{L} = 18\cdot 10^{-3}\,\text{m}^3$, $1\,\text{min} = 60\,\text{s}$.
  ---
  **Rechnung:** $Q = \dfrac{18\cdot 10^{-3}\,\text{m}^3}{60\,\text{s}} = 3{,}0\cdot 10^{-4}\,\text{m}^3/\text{s}$.
```

```aufgabe
id: p9-volumenstrom
titel: Badewanne füllen
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Eine Badewanne mit $150\,\text{L}$ ist in $10\,\text{min}$ voll. Das Wasser kommt durch ein Rohr mit $1{,}5\,\text{cm}$ Innendurchmesser.

  a) Berechne den Volumenstrom in $\text{m}^3/\text{s}$.

  b) Berechne die Strömungsgeschwindigkeit im Rohr. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Volumenstrom
    loesung: "0.150/600"
    einheit: "m³/s"
    anzeige: '2{,}5\cdot 10^{-4}'
    fehler:
      - wert: "0.150/10"
        meldung: |
          Die Zeit muss in Sekunden stehen: $10\,\text{min} = 600\,\text{s}$.
  - typ: zahl
    label: b) Geschwindigkeit
    loesung: "0.150/600/(pi*0.0075^2)"
    einheit: "m/s"
    anzeige: '1{,}41'
    fehler:
      - wert: "0.150/600/(pi*0.015^2)"
        meldung: |
          In $A = \pi r^2$ gehört der Radius $0{,}75\,\text{cm}$, nicht der Durchmesser.
hinweise:
  - '$Q = V/t$ mit $V$ in $\text{m}^3$ und $t$ in s.'
  - '$v = Q/A$ mit $A = \pi r^2$, $r = 0{,}0075\,\text{m}$.'
loesung: |
  **Ansatz:** Der Volumenstrom ist Volumen durch Zeit. Die Geschwindigkeit folgt aus $Q = A\cdot v$.
  ---
  **a)** $Q = \dfrac{0{,}150\,\text{m}^3}{600\,\text{s}} = 2{,}5\cdot 10^{-4}\,\text{m}^3/\text{s}$.
  ---
  **b)** $A = \pi\cdot(0{,}0075\,\text{m})^2 = 1{,}77\cdot 10^{-4}\,\text{m}^2$, also $v = Q/A = 1{,}41\,\text{m/s}$. Das ist etwa Schritttempo, typisch für Hausleitungen.
```

```aufgabe
id: p9-q-diagramm
titel: Ein Becken aus dem Zuflussdiagramm füllen
niveau: 2
lernziel: 7
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt den Zufluss $Q$ in ein Becken über der Zeit. Wie viele Liter fließen in den ersten $25\,\text{min}$ hinein?
plot:
  x: [0, 30]
  y: [0, 40]
  achsen: { x: "t in min", y: "Q in L/min" }
  strecken:
    - { von: [0, 20], nach: [10, 20], farbe: 0 }
    - { von: [10, 20], nach: [10, 30], farbe: 0, gestrichelt: true }
    - { von: [10, 30], nach: [25, 30], farbe: 0 }
teile:
  - typ: zahl
    loesung: "20*10+30*15"
    einheit: "L"
    anzeige: '650'
    fehler:
      - wert: "30*25"
        meldung: |
          In den ersten $10\,\text{min}$ flossen nur $20\,\text{L/min}$. Du musst die beiden Zeitabschnitte getrennt rechnen.
      - wert: "20*10+30*25"
        meldung: |
          Der zweite Abschnitt dauert von $10$ bis $25\,\text{min}$, also nur $15\,\text{min}$.
hinweise:
  - Das Volumen ist die Fläche unter der $Q$-$t$-Kurve.
  - 'Teile in zwei Rechtecke: $0$ bis $10\,\text{min}$ und $10$ bis $25\,\text{min}$.'
loesung: |
  **Ansatz:** $Q$ ist Volumen pro Zeit. Das Volumen ist deshalb die Fläche unter der Kurve, wie der Weg die Fläche unter dem $v$-$t$-Diagramm ist. Siehe Mathematik, [Bestand aus Änderungsrate](/lernen/mathe3/integralrechnung/bestand-aus-aenderungsrate-weg-und-bremsweg).
  ---
  **Erstes Rechteck:** $20\,\text{L/min}\cdot 10\,\text{min} = 200\,\text{L}$.
  ---
  **Zweites Rechteck:** $30\,\text{L/min}\cdot 15\,\text{min} = 450\,\text{L}$. Zusammen $650\,\text{L}$.
```

```aufgabe
id: p9-aorta
titel: Blut in der Aorta und in den Kapillaren
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Das Herz pumpt in Ruhe $5{,}0\,\text{L/min}$ Blut. Die Aorta hat den Querschnitt $4{,}0\,\text{cm}^2$, alle Kapillaren zusammen etwa $0{,}30\,\text{m}^2$.

  a) Wie schnell fließt das Blut im Mittel in der Aorta? Runde auf zwei Nachkommastellen.

  b) Wie schnell fließt es in den Kapillaren? Gib das Ergebnis in mm/s an, gerundet auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Aorta
    loesung: "5.0e-3/60/4.0e-4"
    einheit: "m/s"
    anzeige: '0{,}21'
    toleranz: 0.005
    fehler:
      - wert: "5.0e-3/60/4.0e-2"
        meldung: |
          $4{,}0\,\text{cm}^2 = 4{,}0\cdot 10^{-4}\,\text{m}^2$. Bei Flächen ist der Faktor $10^{-4}$.
  - typ: zahl
    label: b) Kapillaren
    loesung: "5.0e-3/60/0.30*1000"
    einheit: "mm/s"
    anzeige: '0{,}28'
    toleranz: 0.005
    fehler:
      - wert: "5.0e-3/60/0.30"
        meldung: |
          Das ist das Ergebnis in m/s. Gefragt sind mm/s, also mal $1000$.
hinweise:
  - 'Volumenstrom in $\text{m}^3/\text{s}$ umrechnen, dann $v = Q/A$.'
  - Für die Kapillaren zählt der gesamte Querschnitt aller parallelen Gefäße.
loesung: |
  **Ansatz:** Das ganze Blut fließt durch die Aorta und danach durch alle Kapillaren zusammen. Der Volumenstrom ist gleich, also $v = Q/A$ mit dem jeweiligen Gesamtquerschnitt.
  ---
  **Volumenstrom:** $Q = 5{,}0\cdot 10^{-3}\,\text{m}^3/60\,\text{s} = 8{,}33\cdot 10^{-5}\,\text{m}^3/\text{s}$.
  ---
  **a)** $v = 8{,}33\cdot 10^{-5}\,\text{m}^3/\text{s}\,/\,4{,}0\cdot 10^{-4}\,\text{m}^2 = 0{,}21\,\text{m/s}$.
  ---
  **b)** $v = 8{,}33\cdot 10^{-5}\,\text{m}^3/\text{s}\,/\,0{,}30\,\text{m}^2 = 2{,}8\cdot 10^{-4}\,\text{m/s} = 0{,}28\,\text{mm/s}$, rund $750$-mal langsamer als in der Aorta.
```

```aufgabe
id: p9-donau-fermi
titel: Wie viel Wasser führt die Donau?
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Schätze den Volumenstrom der Donau bei Wien ab. Nimm an: Breite etwa $300\,\text{m}$, mittlere Tiefe etwa $5\,\text{m}$, mittlere Strömungsgeschwindigkeit etwa $1{,}3\,\text{m/s}$. Gib das Ergebnis in $\text{m}^3/\text{s}$ an.
teile:
  - typ: zahl
    loesung: "300*5*1.3"
    einheit: "m³/s"
    anzeige: '1950'
    toleranz: 50
    fehler:
      - wert: "300*5"
        meldung: |
          Das ist nur der Querschnitt in $\text{m}^2$. Für den Volumenstrom musst du mit der Geschwindigkeit multiplizieren.
hinweise:
  - Modelliere den Flussquerschnitt als Rechteck.
  - '$Q = A\cdot v$ mit $A$ = Breite mal Tiefe.'
loesung: |
  **Modell:** Der Querschnitt ist ungefähr ein Rechteck, $A = 300\,\text{m}\cdot 5\,\text{m} = 1500\,\text{m}^2$.
  ---
  **Rechnung:** $Q = A\cdot v = 1500\,\text{m}^2\cdot 1{,}3\,\text{m/s} \approx 2000\,\text{m}^3/\text{s}$.
  ---
  **Einordnung:** Der gemessene Mittelwert liegt tatsächlich bei knapp $2000\,\text{m}^3/\text{s}$. Pro Sekunde fließen also rund zwei Millionen Liter vorbei, fast so viel, wie ein 50-Meter-Schwimmbecken fasst.
```

```aufgabe
id: p9-wasserstrahl
titel: Der dünner werdende Wasserstrahl
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Aus einem Wasserhahn tritt ein Strahl mit $1{,}2\,\text{cm}$ Durchmesser und $0{,}80\,\text{m/s}$ senkrecht nach unten aus. Wie dick ist der Strahl $10\,\text{cm}$ tiefer? Runde auf zwei Nachkommastellen (in cm).
teile:
  - typ: zahl
    loesung: "1.2*sqrt(0.80/sqrt(0.80^2+2*9.81*0.10))"
    einheit: "cm"
    anzeige: '0{,}85'
    toleranz: 0.01
    fehler:
      - wert: "1.2*0.80/sqrt(0.80^2+2*9.81*0.10)"
        meldung: |
          Du hast den Durchmesser im Verhältnis der Geschwindigkeiten verkleinert. Die **Fläche** nimmt in diesem Verhältnis ab, der Durchmesser also nur mit der Wurzel daraus.
      - wert: "1.2*sqrt(0.80/sqrt(2*9.81*0.10))"
        meldung: |
          Das Wasser hat am Hahn schon $0{,}80\,\text{m/s}$. Die Geschwindigkeit unten ist $v = \sqrt{v_0^2 + 2gh}$, nicht $\sqrt{2gh}$.
hinweise:
  - Berechne zuerst, wie schnell das Wasser nach $10\,\text{cm}$ freiem Fall ist. Nutze $v^2 = v_0^2 + 2gh$.
  - 'Kontinuität: $A_1 v_1 = A_2 v_2$, und $A \propto d^2$. Also $d_2 = d_1\sqrt{v_1/v_2}$.'
gefuehrt:
  - text: Wie schnell ist das Wasser $10\,\text{cm}$ unter dem Hahn, in m/s?
    teil: { typ: zahl, loesung: "sqrt(0.80^2+2*9.81*0.10)" }
    erklaerung: $v_2 = \sqrt{(0{,}80\,\text{m/s})^2 + 2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}10\,\text{m}} = \sqrt{2{,}60}\,\text{m/s} = 1{,}61\,\text{m/s}$.
  - text: Auf welchen Bruchteil sinkt die Querschnittsfläche?
    teil: { typ: zahl, loesung: "0.80/sqrt(0.80^2+2*9.81*0.10)" }
    erklaerung: Nach der Kontinuitätsgleichung ist $A_2/A_1 = v_1/v_2 = 0{,}80/1{,}61 = 0{,}496$.
  - text: Wie dick ist der Strahl nun, in cm?
    teil: { typ: zahl, loesung: "1.2*sqrt(0.80/sqrt(0.80^2+2*9.81*0.10))", toleranz: 0.01 }
    erklaerung: Der Durchmesser sinkt mit der Wurzel des Flächenverhältnisses, $d_2 = 1{,}2\,\text{cm}\cdot\sqrt{0{,}496} = 0{,}85\,\text{cm}$.
loesung: |
  **Ansatz:** Das Wasser fällt frei und wird schneller. Der Volumenstrom bleibt gleich, also muss der Strahl dünner werden.
  ---
  **Geschwindigkeit unten:** Aus der Kinematik, $v_2^2 = v_1^2 + 2gh$: $v_2 = \sqrt{0{,}64 + 2\cdot 9{,}81\cdot 0{,}10}\,\text{m/s} = 1{,}61\,\text{m/s}$. Wiederholen: [Freier Fall](/lernen/physik1/kinematik/freier-fall).
  ---
  **Kontinuität:** $A_2 = A_1\cdot v_1/v_2 = 0{,}496\cdot A_1$. Weil $A \propto d^2$, gilt $d_2 = d_1\sqrt{v_1/v_2}$.
  ---
  **Ergebnis:** $d_2 = 1{,}2\,\text{cm}\cdot\sqrt{0{,}496} = 0{,}85\,\text{cm}$. Probe: Der Strahl ist etwa auf $70\,\%$ des Durchmessers geschrumpft. Das sieht man an jedem Wasserhahn.
```

## Die Bernoulli-Gleichung

```aufgabe
id: p9-9-check
art: check
titel: "Vorwissen: Energieerhaltung beim Fallen"
niveau: 1
angabe: |
  Ein Stein fällt aus der Ruhe $5{,}0\,\text{m}$ tief. Wie schnell ist er unten, ohne Luftwiderstand? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*5.0)"
    einheit: "m/s"
    anzeige: '9{,}90'
    fehler:
      - wert: "2*9.81*5.0"
        meldung: |
          Das ist $v^2$. Zieh noch die Wurzel.
      - wert: "9.81*5.0"
        meldung: |
          Aus $m g h = \tfrac12 m v^2$ folgt $v^2 = 2 g h$. Du hast den Faktor $2$ und die Wurzel vergessen.
hinweise:
  - '$m g h = \tfrac12 m v^2$, nach $v$ auflösen.'
loesung: |
  **Ansatz:** Lageenergie wird zu Bewegungsenergie: $m g h = \tfrac12 m v^2$, also $v = \sqrt{2gh}$.
  ---
  **Rechnung:** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 5{,}0\,\text{m}} = 9{,}90\,\text{m/s}$. Wiederholen: [Der Energieerhaltungssatz](/lernen/physik1/arbeit-energie-impuls/der-energieerhaltungssatz).
```

Aus der Kontinuitätsgleichung wissen wir: In einer Engstelle strömt Wasser schneller. Jetzt fragen wir nach dem
**Druck**. Die Antwort überrascht fast alle beim ersten Hören: **Wo die Strömung schnell ist, ist der Druck klein.**
Daniel Bernoulli hat dieses Gesetz 1738 veröffentlicht. Diese Stelle ist für viele ungewohnt. Lies sie zweimal.

### Warum der Druck in der Engstelle sinken muss

**Worum geht es?** Wir zeigen ohne jede Formel, dass der Druck in einer Engstelle kleiner sein muss als davor.

**Das Argument in Schritten:**

1. Eine kleine Wasserportion strömt vom weiten Rohrteil in die Engstelle. Dabei wird sie schneller, sie wird
   also **beschleunigt**.
2. Nach dem zweiten Newtonschen Axiom braucht jede Beschleunigung eine resultierende Kraft in Bewegungsrichtung.
3. Auf die Portion wirken nur Druckkräfte des umgebenden Wassers: von hinten mit $p_1 A$, von vorne mit $p_2 A$.
4. Damit die Kraft nach vorne zeigt, muss der Druck hinten größer sein als vorne: $p_1 > p_2$.

```plot
x: [-3, 3]
y: [-1.5, 1.5]
gleich: true
hoehe: 180
strecken:
  - { von: [-0.6, -0.6], nach: [0.6, -0.6] }
  - { von: [0.6, -0.6], nach: [0.6, 0.6] }
  - { von: [0.6, 0.6], nach: [-0.6, 0.6] }
  - { von: [-0.6, 0.6], nach: [-0.6, -0.6] }
vektoren:
  - { von: [-2.6, 0], nach: [-0.6, 0], label: "p₁·A (von hinten)", farbe: 0 }
  - { von: [1.8, 0], nach: [0.6, 0], label: "p₂·A (von vorne)", farbe: 1 }
punkte:
  - { x: 0, y: -1.1, label: "Strömungsrichtung →" }
beschriftung: "Freikörperbild einer Wasserportion, die in eine Engstelle strömt. Von hinten drückt das nachfolgende Wasser mit p₁·A (blau), von vorne das vorauslaufende Wasser mit p₂·A (orange). Weil die Portion nach vorne beschleunigt wird, muss die Kraft von hinten größer sein, also p₁ > p₂."
```

**Was haben wir gezeigt?** Der Druck fällt in Strömungsrichtung, wenn das Fluid schneller wird. Das ist kein
Zaubertrick, sondern Newtons Grundgesetz.

### Die Bernoulli-Gleichung aus der Energieerhaltung

Wie groß ist der Druckabfall? Dazu verfolgen wir eine Portion mit dem Volumen $\Delta V$ und der Masse
$\Delta m = \rho\,\Delta V$ durch ein Rohr, das enger wird und vielleicht ansteigt.

1. **Arbeit am Eingang:** Das nachfolgende Fluid schiebt die Portion mit der Kraft $p_1 A_1$ um die Strecke $s_1$.
   Es verrichtet die Arbeit $p_1 A_1 s_1 = p_1\,\Delta V$, denn $A_1 s_1$ ist genau das Volumen der Portion.
2. **Arbeit am Ausgang:** Vorne muss die Portion das vorauslaufende Fluid wegschieben. Dabei gibt sie die Arbeit
   $p_2\,\Delta V$ ab.
3. **Energiebilanz:** Die Nettoarbeit $(p_1 - p_2)\,\Delta V$ erhöht die Bewegungs- und die Lageenergie der Portion:
   $$(p_1 - p_2)\,\Delta V = \tfrac12\,\Delta m\,(v_2^2 - v_1^2) + \Delta m\, g\,(h_2 - h_1).$$
4. **Ordnen:** Wir setzen $\Delta m = \rho\,\Delta V$ ein, teilen durch $\Delta V$ und bringen alles mit Index 1 auf
   eine Seite, alles mit Index 2 auf die andere.

:::satz[Bernoulli-Gleichung]
Für eine ideale, stationäre Strömung gilt entlang einer Stromlinie
$$p + \tfrac12\rho v^2 + \rho g h = \text{konstant}.$$
Dabei ist $p$ der **statische Druck**, also der Druck, den ein mitschwimmendes Messgerät spüren würde,
$\tfrac12\rho v^2$ der **Staudruck** oder dynamische Druck und $\rho g h$ der Schweredruckanteil mit der Höhe $h$.
Bei waagrechter Strömung fällt $\rho g h$ weg: $p_1 + \tfrac12\rho v_1^2 = p_2 + \tfrac12\rho v_2^2$.
:::

Die Bernoulli-Gleichung ist die **Energieerhaltung pro Volumen**. Jeder Term hat die Einheit
$\text{Pa} = \text{N/m}^2 = \text{N}\,\text{m}/\text{m}^3 = \text{J/m}^3$. Steigt die Bewegungsenergie pro Volumen,
muss der Druck um denselben Betrag fallen.

```aufgabe
id: p9-9-staudruck-check
art: check
titel: Wie groß ist der Staudruck?
niveau: 1
angabe: |
  Wie groß ist der Staudruck $\tfrac12\rho v^2$ von Wasser, das mit $2{,}0\,\text{m/s}$ strömt?
teile:
  - typ: zahl
    loesung: "0.5*1000*2.0^2"
    einheit: "Pa"
    anzeige: '2000'
    fehler:
      - wert: "1000*2.0^2"
        meldung: |
          Du hast den Faktor $\tfrac12$ vergessen.
      - wert: "0.5*1000*2.0"
        meldung: |
          Die Geschwindigkeit steht im Quadrat: $v^2 = 4\,\text{m}^2/\text{s}^2$.
hinweise:
  - 'Setze $\rho = 1000\,\text{kg/m}^3$ und $v = 2{,}0\,\text{m/s}$ in $\tfrac12\rho v^2$ ein.'
loesung: |
  **Ansatz:** Staudruck ist die Bewegungsenergie pro Volumen, $\tfrac12\rho v^2$.
  ---
  **Rechnung:** $\tfrac12\cdot 1000\,\text{kg/m}^3\cdot(2{,}0\,\text{m/s})^2 = 2000\,\text{Pa} = 20\,\text{hPa}$.
```

### Das Venturi-Rohr

Ein waagrechtes Rohr mit einer Verengung heißt nach Giovanni Venturi **Venturi-Rohr**. Die Kontinuitätsgleichung
liefert die Geschwindigkeit in der Enge, $v_2 = v_1 A_1/A_2$. Die waagrechte Bernoulli-Gleichung liefert den
Druckabfall:
$$p_1 - p_2 = \tfrac12\rho\,(v_2^2 - v_1^2).$$

```plot
x: [0, 8]
y: [-1.5, 5]
gleich: true
hoehe: 260
strecken:
  - { von: [0, 1], nach: [2.5, 1] }
  - { von: [2.5, 1], nach: [3.5, 0.45] }
  - { von: [3.5, 0.45], nach: [4.5, 0.45] }
  - { von: [4.5, 0.45], nach: [5.5, 1] }
  - { von: [5.5, 1], nach: [8, 1] }
  - { von: [0, -1], nach: [2.5, -1] }
  - { von: [2.5, -1], nach: [3.5, -0.45] }
  - { von: [3.5, -0.45], nach: [4.5, -0.45] }
  - { von: [4.5, -0.45], nach: [5.5, -1] }
  - { von: [5.5, -1], nach: [8, -1] }
  - { von: [1.1, 1], nach: [1.1, 4.5] }
  - { von: [1.5, 1], nach: [1.5, 4.5] }
  - { von: [3.8, 0.45], nach: [3.8, 4.5] }
  - { von: [4.2, 0.45], nach: [4.2, 4.5] }
  - { von: [1.1, 3.8], nach: [1.5, 3.8], farbe: 0 }
  - { von: [3.8, 2.0], nach: [4.2, 2.0], farbe: 0 }
punkte:
  - { x: 1.3, y: -1.35, label: "weit: v klein, p groß" }
  - { x: 4.6, y: -1.35, label: "eng: v groß, p klein" }
beschriftung: "Venturi-Rohr mit zwei senkrechten Steigrohren als Druckanzeige. Im weiten Teil steht die Flüssigkeit im Steigrohr hoch, der statische Druck ist groß. In der Engstelle strömt das Fluid schneller, der Druck ist kleiner, und die Säule im Steigrohr ist niedriger."
```

Misst man den Druckunterschied, etwa mit zwei Steigrohren oder einem U-Rohr, kann man die Geschwindigkeit
berechnen. So arbeitet das Venturi-Rohr als **Durchflussmesser**. Der Unterdruck in der Engstelle hat viele
Anwendungen: die Wasserstrahlpumpe im Labor, den Vergaser alter Ottomotoren und den Gasbrenner, der Luft ansaugt.

:::beispiel[Die Wasserstrahlpumpe]
In einer Wasserstrahlpumpe strömt Leitungswasser durch eine Düse. Dabei wird es von $2\,\text{m/s}$ auf
$15\,\text{m/s}$ beschleunigt.

**Schritt 1, Bernoulli waagrecht:** $p_1 - p_2 = \tfrac12\rho\,(v_2^2 - v_1^2)$.

**Schritt 2, Rechnung:** $p_1 - p_2 = \tfrac12\cdot 1000\,\text{kg/m}^3\cdot(225 - 4)\,\text{m}^2/\text{s}^2 = 110\,500\,\text{Pa} \approx 1{,}1\,\text{bar}$.

**Antwort:** Hat das Wasser vor der Düse einen Absolutdruck von etwa $1{,}1\,\text{bar}$, bleibt in der Düse fast kein Druck übrig. In der Praxis
begrenzt der Dampfdruck des Wassers den Unterdruck auf etwa $20$ bis $30\,\text{hPa}$. Ein seitlicher Anschluss saugt
deshalb Luft aus einem Gefäß. Im Chemielabor filtert man so unter Vakuum.
:::

:::achtung[Fehler: Die Geschwindigkeit vor der Engstelle vergessen]
In einem Rohr strömt Wasser mit $1{,}5\,\text{m/s}$, in der Engstelle mit $6{,}0\,\text{m/s}$. Ein Schüler rechnet den
Druckabfall als $\tfrac12\cdot 1000\cdot 6{,}0^2\,\text{Pa} = 18\,000\,\text{Pa}$.

Er hat so getan, als stünde das Wasser vorher still. Es hat aber schon Staudruck. Richtig ist
$\tfrac12\cdot 1000\cdot(6{,}0^2 - 1{,}5^2)\,\text{Pa} = \tfrac12\cdot 1000\cdot 33{,}75\,\text{Pa} = 16\,875\,\text{Pa}$.
:::

:::achtung[Fehler: Die Differenz quadriert statt die Quadrate subtrahiert]
Mit denselben Zahlen rechnet eine Schülerin $\tfrac12\cdot 1000\cdot(6{,}0 - 1{,}5)^2\,\text{Pa} = 10\,125\,\text{Pa}$.

In der Bernoulli-Gleichung stehen Energien pro Volumen. Man zieht deshalb $\tfrac12\rho v_1^2$ von $\tfrac12\rho v_2^2$
ab, also die **Quadrate**: $v_2^2 - v_1^2 = 36 - 2{,}25 = 33{,}75$. Das ist etwas anderes als $(v_2 - v_1)^2 = 20{,}25$.
Richtig bleibt $16\,875\,\text{Pa}$.
:::

### Geschwindigkeit messen mit dem Staurohr

Hält man ein Rohr mit der Öffnung gegen die Strömung, kommt das Fluid vor der Öffnung zur Ruhe. Diesen Punkt nennt
man **Staupunkt**. Nach Bernoulli ist der Druck dort um den Staudruck $\tfrac12\rho v^2$ größer als in der
vorbeiströmenden Luft. Das **Staurohr**, nach seinen Erfindern auch Pitot- oder Prandtl-Rohr genannt, misst genau
diese Druckdifferenz $\Delta p$. Daraus folgt die Geschwindigkeit:
$$\Delta p = \tfrac12\rho v^2 \qquad\text{also}\qquad v = \sqrt{\frac{2\,\Delta p}{\rho}}.$$
Jedes Flugzeug misst so seine Geschwindigkeit gegenüber der Luft. Ein Staurohr, das vereist, liefert falsche Werte.
Das hat schon Flugunfälle mitverursacht.

:::beispiel[Ein Staurohr am Kleinflugzeug]
Ein Staurohr misst in Bodennähe ($\rho = 1{,}2\,\text{kg/m}^3$) die Druckdifferenz $1{,}5\,\text{kPa}$.

**Schritt 1, Formel:** $v = \sqrt{2\,\Delta p/\rho}$.

**Schritt 2, Rechnung:** $v = \sqrt{2\cdot 1500\,\text{Pa}/1{,}2\,\text{kg/m}^3} = \sqrt{2500\,\text{m}^2/\text{s}^2} = 50\,\text{m/s}$.

**Antwort:** Das Flugzeug fliegt mit $50\,\text{m/s} = 180\,\text{km/h}$ gegenüber der Luft. Die Einheiten passen:
$\text{Pa}/(\text{kg/m}^3) = (\text{kg}/(\text{m}\,\text{s}^2))\cdot\text{m}^3/\text{kg} = \text{m}^2/\text{s}^2$.
:::

### Ausströmen aus einem Behälter

Ein offener Behälter hat in der Tiefe $h$ unter dem Wasserspiegel ein kleines Loch. An der Oberfläche und am Loch
herrscht Luftdruck. Oben ist das Wasser fast in Ruhe, wenn der Behälter groß ist. Bernoulli zwischen Oberfläche und
Loch, mit der Höhe des Lochs als Nullniveau:
$$p_0 + 0 + \rho g h = p_0 + \tfrac12\rho v^2 + 0.$$
Der Luftdruck und $\rho$ kürzen sich. Es bleibt das **Ausflussgesetz von Torricelli**:
$$v = \sqrt{2 g h}.$$
Das Wasser tritt so schnell aus, als wäre es aus der Höhe $h$ frei gefallen. Ein Fass mit dem Loch $1{,}8\,\text{m}$
unter dem Spiegel spritzt also mit $\sqrt{2\cdot 9{,}81\cdot 1{,}8}\,\text{m/s} = 5{,}9\,\text{m/s}$.

:::achtung
**Grenzen der Bernoulli-Gleichung.** Sie gilt entlang **einer** Strömung, in der sich die Geschwindigkeit ändert.
„Schnelle Luft hat immer weniger Druck“ ist falsch. Die Luft, die aus einem Föhn kommt, ist schnell, hat aber den
Druck der Umgebung. Sie wurde ja vom Gebläse beschleunigt, nicht von einem Druckunterschied. Außerdem vernachlässigt
die Gleichung die Reibung. In langen, engen Leitungen fällt der Druck deshalb stärker, als Bernoulli vorhersagt.
:::

:::merke
**Strömungsaufgaben lösen:**
1. Geschwindigkeiten mit der Kontinuitätsgleichung $A_1 v_1 = A_2 v_2$ bestimmen.
2. Druck mit Bernoulli: $p_1 + \tfrac12\rho v_1^2 + \rho g h_1 = p_2 + \tfrac12\rho v_2^2 + \rho g h_2$.
3. Quadrate subtrahieren, nicht die Differenz quadrieren. Beide Gleichungen zuerst allgemein hinschreiben.
:::

```reflexion
frage: Begründe in eigenen Worten, warum die Bernoulli-Gleichung nichts anderes ist als der Energieerhaltungssatz. Was entspricht der Lageenergie, was der Bewegungsenergie, und welche Rolle spielt der Druck?
antwort: |
  Teilt man die Energien einer kleinen Fluidportion durch ihr Volumen, wird aus $\tfrac12 m v^2$ der Term
  $\tfrac12\rho v^2$ und aus $m g h$ der Term $\rho g h$. Der Druck $p$ ist die Arbeit, die das umgebende Fluid pro
  Volumen an der Portion verrichtet, wenn es sie weiterschiebt. Die Summe aus Druckarbeit, Bewegungs- und Lageenergie
  pro Volumen bleibt ohne Reibung gleich. Wird das Fluid schneller, muss der Druck um genau den Zuwachs an
  Bewegungsenergie pro Volumen sinken.
```

### Aufgaben zur Bernoulli-Gleichung

```aufgabe
id: p9-bernoulli-auswahl
titel: Bernoulli im Alltag
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Welche Erscheinungen beruhen auf dem Druckabfall in einer schneller werdenden Strömung? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Sturm hebt ein Flachdach an."
      - "Ein Eisberg schwimmt."
      - "Eine Wasserstrahlpumpe saugt Luft aus einem Gefäß."
      - "Eine hydraulische Hebebühne hebt ein Auto."
      - "Ein Venturi-Rohr misst den Durchfluss in einer Leitung."
    richtig: [0, 2, 4]
    fehler:
      - wert: [0, 1, 2, 4]
        meldung: |
          Ein Eisberg ruht. Er schwimmt wegen des Auftriebs nach Archimedes, da strömt nichts.
      - wert: [0, 2, 3, 4]
        meldung: |
          Die Hebebühne arbeitet mit ruhendem Öl. Sie beruht auf dem Prinzip von Pascal, nicht auf Bernoulli.
hinweise:
  - Prüfe bei jeder Erscheinung, ob überhaupt etwas strömt.
loesung: |
  **Bernoulli:** Dach im Sturm, Wasserstrahlpumpe und Venturi-Rohr. Überall ist eine schnelle Strömung mit kleinem statischem Druck im Spiel.
  ---
  **Nicht Bernoulli:** Eisberg, Auftrieb nach Archimedes. Hebebühne, Prinzip von Pascal.
```

```aufgabe
id: p9-staudruck-wind
titel: Staudruck des Windes
niveau: 1
lernziel: 7
kompetenz: rechnen
angabe: |
  Wind weht mit $20\,\text{m/s}$ gegen eine Hauswand und kommt dort zur Ruhe. Um wie viel ist der Druck an der Wand größer als in der ungestörten Luft ($\rho = 1{,}2\,\text{kg/m}^3$)?
teile:
  - typ: zahl
    loesung: "0.5*1.2*20^2"
    einheit: "Pa"
    anzeige: '240'
    fehler:
      - wert: "1.2*20^2"
        meldung: |
          Du hast den Faktor $\tfrac12$ im Staudruck vergessen.
      - wert: "0.5*1.2*20"
        meldung: |
          Die Geschwindigkeit steht im Staudruck im **Quadrat**.
hinweise:
  - Vor der Wand ist ein Staupunkt. Der Druck steigt dort um den Staudruck $\tfrac12\rho v^2$.
loesung: |
  **Ansatz:** Die Luft wird an der Wand bis zum Stillstand gebremst. Bernoulli liefert $\Delta p = \tfrac12\rho v^2$.
  ---
  **Rechnung:** $\Delta p = \tfrac12\cdot 1{,}2\,\text{kg/m}^3\cdot(20\,\text{m/s})^2 = 240\,\text{Pa}$. Auf $10\,\text{m}^2$ Wand sind das $2400\,\text{N}$.
```

```aufgabe
id: p9-bernoulli-venturi
titel: Venturi-Rohr
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Wasser strömt mit $2{,}0\,\text{m/s}$ durch ein waagrechtes Rohr mit $10\,\text{cm}^2$ Querschnitt. In einer Verengung beträgt der Querschnitt $2{,}5\,\text{cm}^2$. Berechne die Geschwindigkeit in der Verengung und den Druckunterschied.
teile:
  - typ: zahl
    label: v in der Verengung
    loesung: "2.0*10/2.5"
    einheit: "m/s"
    anzeige: '8{,}0'
    fehler:
      - wert: "2.0*(10/2.5)^2"
        meldung: |
          Hier sind schon die Flächen gegeben. Quadrieren müsste man nur ein Durchmesserverhältnis.
  - typ: zahl
    label: Druckabfall
    loesung: "0.5*1000*(8^2-2^2)"
    einheit: "Pa"
    anzeige: '30\,000'
    fehler:
      - wert: "0.5*1000*8^2"
        meldung: |
          Das Wasser hatte vor der Engstelle schon $2{,}0\,\text{m/s}$. Du musst $v_1^2$ abziehen.
      - wert: "0.5*1000*(8-2)^2"
        meldung: |
          Man subtrahiert die Quadrate, $v_2^2 - v_1^2 = 64 - 4$, nicht das Quadrat der Differenz.
hinweise:
  - Zuerst die Kontinuitätsgleichung.
  - 'Dann waagrechter Bernoulli: $p_1 - p_2 = \tfrac12\rho(v_2^2 - v_1^2)$.'
loesung: |
  **Ansatz:** Zwei Schritte. Die Kontinuitätsgleichung liefert die Geschwindigkeit, Bernoulli den Druck.
  ---
  **Kontinuität:** $v_2 = v_1\dfrac{A_1}{A_2} = 2{,}0\,\text{m/s}\cdot\dfrac{10}{2{,}5} = 8{,}0\,\text{m/s}$.
  ---
  **Bernoulli:** $p_1 - p_2 = \tfrac12\cdot 1000\,\text{kg/m}^3\cdot(64 - 4)\,\text{m}^2/\text{s}^2 = 30\,000\,\text{Pa} = 0{,}3\,\text{bar}$. Mit einem Wasser-Steigrohr wäre das ein Höhenunterschied von gut $3\,\text{m}$.
```

```aufgabe
id: p9-torricelli
titel: Loch im Fass
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Ein großes Wasserfass hat $1{,}25\,\text{m}$ unter dem Wasserspiegel ein kleines Loch. Mit welcher Geschwindigkeit tritt das Wasser aus? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*1.25)"
    einheit: "m/s"
    anzeige: '4{,}95'
    fehler:
      - wert: "2*9.81*1.25"
        meldung: |
          Das ist $v^2$. Du musst noch die Wurzel ziehen.
      - wert: "sqrt(9.81*1.25)"
        meldung: |
          Aus $\rho g h = \tfrac12\rho v^2$ folgt $v^2 = 2gh$. Der Faktor $2$ fehlt.
hinweise:
  - Bernoulli zwischen der ruhenden Wasseroberfläche und dem Loch. An beiden Stellen herrscht Luftdruck.
  - 'Es bleibt $\rho g h = \tfrac12\rho v^2$.'
loesung: |
  **Ansatz:** Bernoulli zwischen Oberfläche (Geschwindigkeit fast null) und Loch. Der Luftdruck wirkt an beiden Stellen und fällt heraus.
  ---
  **Umstellen:** $\rho g h = \tfrac12\rho v^2$, also $v = \sqrt{2gh}$.
  ---
  **Rechnung:** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 1{,}25\,\text{m}} = 4{,}95\,\text{m/s}$, so schnell wie ein Körper nach $1{,}25\,\text{m}$ freiem Fall.
```

```aufgabe
id: p9-pitot
titel: Fahrtmesser in großer Höhe
niveau: 2
lernziel: 7
kompetenz: anwenden
angabe: |
  Das Staurohr eines Flugzeugs misst in $3000\,\text{m}$ Höhe ($\rho = 0{,}90\,\text{kg/m}^3$) die Druckdifferenz $2{,}0\,\text{kPa}$. Wie schnell fliegt das Flugzeug gegenüber der Luft? Gib das Ergebnis in m/s an, gerundet auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "sqrt(2*2000/0.90)"
    einheit: "m/s"
    anzeige: '66{,}7'
    toleranz: 0.1
    fehler:
      - wert: "sqrt(2*2000/1.2)"
        meldung: |
          Du hast die Luftdichte am Boden genommen. In $3000\,\text{m}$ Höhe ist die Luft dünner, $\rho = 0{,}90\,\text{kg/m}^3$.
      - wert: "sqrt(2000/0.90)"
        meldung: |
          Aus $\Delta p = \tfrac12\rho v^2$ folgt $v = \sqrt{2\,\Delta p/\rho}$. Der Faktor $2$ fehlt.
hinweise:
  - 'Die gemessene Differenz ist der Staudruck: $\Delta p = \tfrac12\rho v^2$.'
  - 'Nach $v$ umstellen und die Dichte der Höhe verwenden: $v = \sqrt{2\,\Delta p/\rho}$.'
loesung: |
  **Ansatz:** Das Staurohr misst den Staudruck $\Delta p = \tfrac12\rho v^2$. Das ist eine Umkehraufgabe: gegeben der Druck, gesucht die Geschwindigkeit.
  ---
  **Umstellen:** $v = \sqrt{\dfrac{2\,\Delta p}{\rho}}$.
  ---
  **Rechnung:** $v = \sqrt{\dfrac{2\cdot 2000\,\text{Pa}}{0{,}90\,\text{kg/m}^3}} = 66{,}7\,\text{m/s} = 240\,\text{km/h}$. Mit der Bodendichte hätte man nur $57{,}7\,\text{m/s}$ erhalten. Piloten unterscheiden deshalb angezeigte und wahre Fluggeschwindigkeit.
```

```aufgabe
id: p9-sturm-dach
titel: Sturm über dem Flachdach
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Über ein Flachdach mit $100\,\text{m}^2$ Fläche weht Sturm mit $30\,\text{m/s}$ ($108\,\text{km/h}$). Im Gebäude ruht die Luft. Schätze die Kraft ab, mit der das Dach nach oben gedrückt wird ($\rho_L = 1{,}29\,\text{kg/m}^3$).
teile:
  - typ: zahl
    loesung: "0.5*1.29*30^2*100"
    einheit: "N"
    anzeige: '58\,000'
    toleranz: 500
    fehler:
      - wert: "0.5*1.29*108^2*100"
        meldung: |
          Die Geschwindigkeit muss in m/s stehen. Weil sie im Quadrat steht, liegt man sonst um den Faktor $13$ daneben.
      - wert: "0.5*1.29*30^2"
        meldung: |
          Das ist der Druckunterschied in Pascal. Für die Kraft musst du mit der Dachfläche multiplizieren.
hinweise:
  - Im Haus ruht die Luft. Über dem Dach ist sie schnell. Welcher Druckunterschied folgt aus Bernoulli?
  - 'Kraft = Druckunterschied mal Fläche.'
loesung: |
  **Modell:** Wir vergleichen die ruhende Luft im Haus mit der schnellen Luft über dem Dach. Nach Bernoulli ist der Druck über dem Dach um etwa den Staudruck kleiner. Das ist eine grobe Abschätzung, denn die Strömung um ein Haus ist kompliziert.
  ---
  **Druckunterschied:** $\Delta p = \tfrac12\rho v^2 = \tfrac12\cdot 1{,}29\,\text{kg/m}^3\cdot(30\,\text{m/s})^2 = 581\,\text{Pa}$.
  ---
  **Kraft:** $F = \Delta p\cdot A = 581\,\text{Pa}\cdot 100\,\text{m}^2 \approx 58\,000\,\text{N}$, das Gewicht von fast sechs Tonnen. Deshalb müssen Dächer gut verankert sein.
```

```aufgabe
id: p9-feuerwehr
titel: Der Feuerwehrschlauch
niveau: 3
lernziel: 7
kompetenz: modellieren
angabe: |
  Durch einen waagrechten Feuerwehrschlauch mit $5{,}0\,\text{cm}$ Innendurchmesser fließen $10\,\text{L/s}$. Das Strahlrohr am Ende hat $2{,}0\,\text{cm}$ Durchmesser, dort tritt das Wasser bei Luftdruck aus.

  a) Wie schnell strömt das Wasser im Schlauch und im Strahlrohr? Runde die Geschwindigkeit im Schlauch auf zwei Nachkommastellen, die im Strahlrohr auf eine.

  b) Welcher Überdruck muss im Schlauch kurz vor dem Strahlrohr herrschen? Gib ihn in bar an, gerundet auf eine Nachkommastelle. Vernachlässige die Reibung.
teile:
  - typ: zahl
    label: a) v im Schlauch
    loesung: "0.010/(pi*0.025^2)"
    einheit: "m/s"
    anzeige: '5{,}09'
    toleranz: 0.01
  - typ: zahl
    label: a) v im Strahlrohr
    loesung: "0.010/(pi*0.010^2)"
    einheit: "m/s"
    anzeige: '31{,}8'
    toleranz: 0.1
  - typ: zahl
    label: b) Überdruck
    loesung: "0.5*1000*((0.010/(pi*0.010^2))^2-(0.010/(pi*0.025^2))^2)/1e5"
    einheit: "bar"
    anzeige: '4{,}9'
    toleranz: 0.05
hinweise:
  - '$v = Q/A$ mit $Q = 0{,}010\,\text{m}^3/\text{s}$ und $A = \pi r^2$.'
  - 'Am Austritt herrscht Luftdruck. Der Überdruck im Schlauch ist also $\tfrac12\rho(v_2^2 - v_1^2)$.'
gefuehrt:
  - text: Wie groß ist der Querschnitt des Schlauchs in Quadratmetern?
    teil: { typ: zahl, loesung: "pi*0.025^2" }
    erklaerung: $A_1 = \pi\cdot(0{,}025\,\text{m})^2 = 1{,}96\cdot 10^{-3}\,\text{m}^2$.
  - text: Wie schnell strömt das Wasser im Schlauch?
    teil: { typ: zahl, loesung: "0.010/(pi*0.025^2)", toleranz: 0.01 }
    erklaerung: $v_1 = Q/A_1 = 0{,}010/1{,}96\cdot 10^{-3}\,\text{m/s} = 5{,}09\,\text{m/s}$.
  - text: Wie schnell ist es im Strahlrohr? Nutze das Quadrat des Durchmesserverhältnisses.
    teil: { typ: zahl, loesung: "0.010/(pi*0.010^2)", toleranz: 0.1 }
    erklaerung: $v_2 = v_1\cdot(5{,}0/2{,}0)^2 = 5{,}09\cdot 6{,}25\,\text{m/s} = 31{,}8\,\text{m/s}$.
  - text: Welcher Überdruck in Pascal ist im Schlauch nötig?
    teil: { typ: zahl, loesung: "0.5*1000*((0.010/(pi*0.010^2))^2-(0.010/(pi*0.025^2))^2)", toleranz: 2000 }
    erklaerung: $\Delta p = \tfrac12\cdot 1000\cdot(31{,}8^2 - 5{,}09^2)\,\text{Pa} = 4{,}94\cdot 10^5\,\text{Pa}$, also etwa $4{,}9\,\text{bar}$.
loesung: |
  **Ansatz:** Kontinuität für die Geschwindigkeiten, dann Bernoulli zwischen Schlauch und Austritt. Am Austritt herrscht Luftdruck.
  ---
  **a)** $v_1 = \dfrac{0{,}010\,\text{m}^3/\text{s}}{\pi\cdot(0{,}025\,\text{m})^2} = 5{,}09\,\text{m/s}$ und $v_2 = v_1\cdot(5{,}0/2{,}0)^2 = 31{,}8\,\text{m/s}$.
  ---
  **b)** $p_1 - p_0 = \tfrac12\rho(v_2^2 - v_1^2) = \tfrac12\cdot 1000\,\text{kg/m}^3\cdot(1013 - 25{,}9)\,\text{m}^2/\text{s}^2 = 4{,}94\cdot 10^5\,\text{Pa} \approx 4{,}9\,\text{bar}$.
  ---
  **Einordnung:** Feuerwehrpumpen liefern tatsächlich einige bar, dazu kommt die Reibung im langen Schlauch. Probe: Ohne Engstelle bräuchte man nur $\tfrac12\rho v_1^2 = 0{,}13\,\text{bar}$, das Strahlrohr verlangt den Großteil.
```

## Aeromechanik: wie ein Tragflügel Auftrieb erzeugt

```aufgabe
id: p9-10-check
art: check
titel: "Vorwissen: actio und reactio"
niveau: 1
angabe: |
  Ein Ventilator auf einem Rollwagen bläst Luft nach hinten. In welche Richtung wirkt die Kraft der Luft auf den Ventilator?
teile:
  - typ: auswahl
    optionen:
      - "nach hinten, mit der Luft"
      - "nach vorne, entgegen der weggeblasenen Luft"
      - "gar keine, weil Luft keine Masse hat"
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Der Ventilator drückt die Luft nach hinten. Nach dem dritten Newtonschen Axiom drückt die Luft mit gleich großer Kraft **in Gegenrichtung** auf den Ventilator.
      - wert: 2
        meldung: |
          Luft hat Masse, ein Kubikmeter wiegt gut ein Kilogramm. Wird sie beschleunigt, wirkt eine Gegenkraft auf den, der sie beschleunigt.
hinweise:
  - Denk an das dritte Newtonsche Axiom. Wer übt auf wen welche Kraft aus?
loesung: |
  **Ansatz:** Der Ventilator übt auf die Luft eine Kraft nach hinten aus. Nach actio gleich reactio übt die Luft auf den Ventilator eine gleich große Kraft nach vorne aus.
  ---
  **Antwort:** Nach vorne. So treiben Propeller Flugzeuge und Schiffe an. Wiederholen: [Das dritte Newtonsche Axiom](/lernen/physik1/dynamik/das-dritte-newtonsche-axiom-kraefte-treten-paarweise-auf).
```

Ein Verkehrsflugzeug mit $70$ Tonnen fliegt, ein Segelflugzeug gleitet stundenlang, ein Vogel schwebt fast ohne
Flügelschlag. Was hält sie oben? Der Auftrieb nach Archimedes ist es nicht: Ein Flugzeug verdrängt nur wenige hundert
Kilogramm Luft. Es braucht eine zweite Art von Auftrieb, die erst durch Bewegung entsteht. Sie heißt **dynamischer
Auftrieb**. „Dynamisch“ heißt hier „durch Bewegung“, im Gegensatz zum statischen Auftrieb eines ruhenden Ballons.

Zum Fliegen kursieren viele falsche Erklärungen. Wir gehen langsam vor.

### Was der Flügel mit der Luft macht

**Worum geht es in einem Satz?** Ein Tragflügel lenkt die Luft, die an ihm vorbeiströmt, nach unten ab. Die Luft
drückt dafür den Flügel nach oben.

**Ein Bild zum Ausprobieren:** Halte im fahrenden Auto die flache Hand aus dem Fenster. Ist sie waagrecht, spürst du
kaum Kraft nach oben. Neigst du die Vorderkante leicht nach oben, wird die Hand kräftig angehoben. Deine Hand lenkt
jetzt Luft nach unten ab. Der Winkel zwischen Hand und anströmender Luft heißt **Anstellwinkel**.

**In kleinen Schritten:**

1. **Ablenkung:** Durch den Anstellwinkel und die gewölbte Form folgt die Luft der Flügeloberfläche und verlässt den
   Flügel schräg nach unten. Hinter einem Flugzeug strömt deshalb ständig Luft abwärts. Man nennt das **Abwind**.
2. **Newton:** Um Luft nach unten zu beschleunigen, muss der Flügel eine Kraft nach unten auf sie ausüben. Nach dem
   dritten Newtonschen Axiom übt die Luft eine gleich große Kraft nach oben auf den Flügel aus.
3. **Druck:** Diese Kraft wirkt über den Luftdruck. Über dem Flügel ist der Druck kleiner als in der ungestörten
   Luft, unter dem Flügel etwas größer. Der Druckunterschied mal Flügelfläche ist der Auftrieb.
4. **Bernoulli:** Wo der Druck kleiner ist, also über dem Flügel, strömt die Luft schneller. Das folgt aus der
   Bernoulli-Gleichung. Messungen bestätigen es.

**Was haben wir gezeigt?** Es gibt zwei Beschreibungen. Mit Newton: Luft nach unten, Flügel nach oben. Mit
Bernoulli: oben schnell und kleiner Druck, unten langsamer und größerer Druck. Beide sind zwei Seiten derselben Sache. Sie
widersprechen sich nicht. Beide brauchen aber einen Flügel, der die Strömung umlenkt.

```plot
x: [-1.5, 7]
y: [-2.5, 3]
gleich: true
hoehe: 280
kurven:
  - { x: "4*t", y: "0.55*sin(pi*t)^0.8*(1-0.35*t)+0.3*(1-t)", t: [0, 1], farbe: 3 }
  - { x: "4*t", y: "0.08*sin(pi*t)+0.3*(1-t)", t: [0, 1], farbe: 3 }
graphen:
  - { f: "1.2+0.25*exp(-(x-1.3)^2)-0.35/(1+exp(-2*(x-3)))", farbe: 0, von: -1.5, bis: 7, gestrichelt: true }
  - { f: "-0.6-0.45/(1+exp(-2*(x-3.5)))", farbe: 0, von: -1.5, bis: 7, gestrichelt: true }
vektoren:
  - { von: [1.8, 0.3], nach: [1.8, 2.6], label: "Auftrieb", farbe: 0 }
  - { von: [2.2, 0.3], nach: [2.2, -2.1], label: "Gewichtskraft", farbe: 1 }
  - { von: [4.3, -0.1], nach: [5.6, -0.8], label: "Abwind", farbe: 2 }
  - { von: [-1.4, 0.2], nach: [-0.2, 0.2], label: "Anströmung", farbe: 3 }
beschriftung: "Tragflügel im Querschnitt (violett), leicht angestellt. Die Stromlinien (blau gestrichelt) werden hinter dem Flügel nach unten abgelenkt (grüner Pfeil: Abwind). Im waagrechten Flug mit konstanter Geschwindigkeit sind Auftrieb (blau) und Gewichtskraft (orange) gleich groß. Schub und Luftwiderstand wirken waagrecht und sind weggelassen."
```

### Die Fehlvorstellung von der gleichen Laufzeit

In vielen Schulbüchern stand lange folgende Erklärung: „Die Oberseite des Flügels ist gewölbt, der Weg oben ist
länger. Die Luftteilchen, die sich an der Vorderkante trennen, müssen an der Hinterkante gleichzeitig ankommen. Also
strömt die Luft oben schneller, und nach Bernoulli ist der Druck dort kleiner.“

Diese Erklärung ist **falsch**, und zwar aus drei Gründen.

- **Es gibt keinen Grund für gleiche Laufzeiten.** Kein Naturgesetz verlangt, dass sich getrennte Luftteilchen
  wiedertreffen. Messungen im Windkanal zeigen: Die Luft oben kommt sogar **deutlich früher** an der Hinterkante an
  als die Luft unten.
- **Sie widerspricht der Erfahrung.** Papierflieger mit flachen Flügeln fliegen. Kunstflugzeuge haben symmetrische
  Flügel ohne längeren Weg oben und fliegen auch auf dem Rücken. Entscheidend ist der Anstellwinkel.
- **Sie liefert viel zu wenig Auftrieb.** Das zeigt die folgende Rechnung.

:::achtung[Fehler: Mit „gleicher Laufzeit“ den Auftrieb berechnen]
Ein Kleinflugzeug hat $1000\,\text{kg}$ und $16\,\text{m}^2$ Flügelfläche. Es fliegt mit $60\,\text{m/s}$ in Luft mit
$\rho = 1{,}2\,\text{kg/m}^3$. Der Weg über die Oberseite ist etwa $2\,\%$ länger als unten. Eine Schülerin rechnet mit
gleicher Laufzeit: Oben strömt die Luft dann mit $1{,}02\cdot 60\,\text{m/s} = 61{,}2\,\text{m/s}$. Nach Bernoulli ist
$$\Delta p = \tfrac12\rho\,(v_o^2 - v_u^2) = \tfrac12\cdot 1{,}2\cdot(61{,}2^2 - 60^2)\,\text{Pa} = 87\,\text{Pa}.$$

Nötig wäre aber Gewicht durch Fläche, $\Delta p = 1000\cdot 9{,}81\,\text{N}/16\,\text{m}^2 = 613\,\text{Pa}$. Die
Laufzeit-Erklärung liefert nur ein Siebtel davon. In Wirklichkeit strömt die Luft oben viel schneller als nur
$2\,\%$, weil der angestellte Flügel sie stark umlenkt.
:::

```aufgabe
id: p9-10-laufzeit-check
art: check
titel: Kommt die Luft oben gleichzeitig an?
niveau: 1
angabe: |
  Zwei benachbarte Luftteilchen trennen sich an der Vorderkante eines tragenden Flügels. Eines strömt oben, eines unten vorbei. Was zeigen Messungen im Windkanal?
teile:
  - typ: auswahl
    optionen:
      - "Beide kommen gleichzeitig an der Hinterkante an."
      - "Das obere Teilchen kommt früher an der Hinterkante an."
      - "Das untere Teilchen kommt früher an, weil sein Weg kürzer ist."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das ist die verbreitete Fehlvorstellung der „gleichen Laufzeit“. Kein Gesetz verlangt das, und Messungen widerlegen es.
      - wert: 2
        meldung: |
          Der kürzere Weg allein entscheidet nicht. Oben strömt die Luft so viel schneller, dass sie trotz des längeren Wegs früher ankommt.
hinweise:
  - Über dem Flügel ist der Druck viel kleiner. Wie stark muss die Luft dort beschleunigt werden?
loesung: |
  **Messung:** Rauchspuren im Windkanal zeigen, dass die obere Luft deutlich früher an der Hinterkante ist.
  ---
  **Folgerung:** Die Annahme der gleichen Laufzeit ist falsch. Die Luft oben ist viel schneller, als der etwas längere Weg verlangen würde.
```

### Die Auftriebsformel

Wie groß ist der dynamische Auftrieb? Er wächst mit dem Staudruck der anströmenden Luft und mit der Flügelfläche.
Alles, was von Form und Anstellwinkel abhängt, fasst man in einer Zahl zusammen.

:::formel[Dynamischer Auftrieb]
$$F_A = \tfrac12\, c_A\,\rho\, A\, v^2$$
Dabei ist $\rho$ die Dichte der Luft, $v$ die Geschwindigkeit gegenüber der Luft, $A$ die Flügelfläche (von oben
gesehen) und $c_A$ der **Auftriebsbeiwert**. Er ist eine reine Zahl, die vom Profil und vor allem vom Anstellwinkel
abhängt, typisch zwischen $0{,}2$ und $1{,}5$.
:::

Die Formel hat dieselbe Bauart wie der Luftwiderstand $F_W = \tfrac12 c_w\rho A v^2$ aus
[9.11 Strömungswiderstand](/lernen/physik1/hydro-aeromechanik/stroemungswiderstand). Zwei Folgen sind wichtig:

- **Doppelte Geschwindigkeit, vierfacher Auftrieb.** Deshalb muss ein Flugzeug eine Mindestgeschwindigkeit haben.
- **Der Anstellwinkel lässt sich nicht beliebig steigern.** Bis etwa $15^\circ$ wächst $c_A$ ungefähr linear mit dem
  Winkel. Darüber reißt die Strömung an der Oberseite ab, und der Auftrieb bricht zusammen. Piloten nennen das
  **Strömungsabriss**.

```plot
x: [-4, 20]
y: [-0.4, 1.8]
achsen: { x: "Anstellwinkel α in Grad", y: "Auftriebsbeiwert c_A" }
graphen:
  - { f: "0.1*(x+2)", farbe: 0, von: -4, bis: 14, label: "anliegende Strömung" }
  - { f: "1.6-0.15*(x-14)", farbe: 1, von: 14, bis: 20, label: "Strömungsabriss" }
punkte:
  - { x: 14, y: 1.6, label: "größter Auftrieb bei 14°" }
  - { x: -2, y: 0, label: "kein Auftrieb bei −2°" }
beschriftung: "Auftriebsbeiwert eines gewölbten Flügelprofils über dem Anstellwinkel (vereinfacht). Bis 14 Grad wächst c_A linear um 0,1 pro Grad. Weil das Profil gewölbt ist, liefert es schon bei 0 Grad Auftrieb und erst bei −2 Grad keinen. Über 14 Grad reißt die Strömung ab, und c_A fällt."
```

:::beispiel[Wie langsam darf ein Kleinflugzeug fliegen?]
Ein Kleinflugzeug hat $1000\,\text{kg}$ Masse und $16\,\text{m}^2$ Flügelfläche. Mit ausgefahrenen Landeklappen
erreicht es höchstens $c_A = 1{,}5$. Die Luft hat $1{,}2\,\text{kg/m}^3$.

**Schritt 1, Bedingung:** Im waagrechten Flug ist der Auftrieb gleich der Gewichtskraft:
$\tfrac12 c_A\rho A v^2 = m g$.

**Schritt 2, Umstellen:** $v = \sqrt{\dfrac{2 m g}{c_A\,\rho\, A}}$.

**Schritt 3, Rechnung:** $v = \sqrt{\dfrac{2\cdot 1000\cdot 9{,}81\,\text{N}}{1{,}5\cdot 1{,}2\,\text{kg/m}^3\cdot 16\,\text{m}^2}} = 26\,\text{m/s} = 94\,\text{km/h}$.

**Antwort:** Langsamer kann das Flugzeug nicht waagrecht fliegen. Im Reiseflug mit $60\,\text{m/s}$ reicht schon
$c_A = 2\cdot 9810/(1{,}2\cdot 16\cdot 60^2) = 0{,}28$, also ein kleiner Anstellwinkel.
:::

:::beispiel[Abtrieb am Rennwagen]
Ein Rennwagen hat einen Heckflügel mit $1{,}0\,\text{m}^2$ Fläche und $c_A = 1{,}2$. Er ist umgekehrt eingebaut,
damit er nach **unten** drückt.

**Schritt 1, Einheiten:** $v = 250\,\text{km/h} = 250/3{,}6\,\text{m/s} = 69{,}4\,\text{m/s}$.

**Schritt 2, Rechnung:** $F = \tfrac12\cdot 1{,}2\cdot 1{,}2\,\text{kg/m}^3\cdot 1{,}0\,\text{m}^2\cdot(69{,}4\,\text{m/s})^2 = 3470\,\text{N}$.

**Antwort:** Der Flügel presst das Auto mit $3{,}5\,\text{kN}$ zusätzlich auf die Straße. Das erhöht die Normalkraft
und damit die mögliche Reibung in Kurven.
:::

:::achtung[Fehler: Geschwindigkeit in km/h eingesetzt]
Für den Rennwagen rechnet ein Schüler $\tfrac12\cdot 1{,}2\cdot 1{,}2\cdot 1{,}0\cdot 250^2\,\text{N} = 45\,000\,\text{N}$.

Die Formel braucht SI-Einheiten, also m/s. Weil $v$ im Quadrat steht, ist das Ergebnis um den Faktor
$3{,}6^2 = 13$ zu groß. Richtig sind $3470\,\text{N}$.
:::

Weitere Beispiele für dynamischen Auftrieb: Propeller und Rotorblätter von Hubschraubern sind drehende Tragflügel.
Ein Ball mit Drall nimmt die Luft auf einer Seite mit und lenkt sie ab. Er fliegt deshalb eine Kurve, das ist der
**Magnus-Effekt**. Segel eines Bootes am Wind arbeiten wie senkrecht gestellte Flügel.

:::merke
**Fliegen erklären und berechnen:**
1. Der Flügel lenkt Luft nach unten ab. Die Gegenkraft ist der Auftrieb. Dazu gehört kleiner Druck oben, größerer Druck unten.
2. Nicht mit „gleicher Laufzeit“ argumentieren. Entscheidend sind Anstellwinkel und Umlenkung.
3. Rechnen: $F_A = \tfrac12 c_A\rho A v^2$, im waagrechten Flug gleich $m g$. Geschwindigkeit in m/s.
:::

```reflexion
frage: Wie kann ein Kunstflugzeug mit symmetrischen Flügeln auf dem Rücken fliegen? Und warum widerlegt das die Erklärung mit dem längeren Weg oben?
antwort: |
  Im Rückenflug hebt der Pilot die Nase des Flugzeugs so weit an, dass die Vorderkante des Flügels gegenüber der
  anströmenden Luft wieder nach oben zeigt. Dann lenkt der Flügel die Luft wieder nach unten ab, und die Gegenkraft
  hebt das Flugzeug. Ein symmetrischer Flügel hat oben und unten gleich lange Wege. Nach der Laufzeit-Erklärung könnte er nie
  Auftrieb liefern, und auf dem Rücken müsste ein gewölbter Flügel sogar nach unten ziehen. Beides stimmt nicht. Es
  zählt der Anstellwinkel, also wie stark der Flügel die Luft umlenkt.
```

### Aufgaben zum Tragflügel

```aufgabe
id: p9-flug-erklaerung
titel: Welche Erklärung stimmt?
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Welche Erklärung für den Auftrieb an einem Flugzeugflügel ist physikalisch richtig?
teile:
  - typ: auswahl
    optionen:
      - "Die Luft oben muss gleichzeitig mit der Luft unten an der Hinterkante ankommen, deshalb ist sie schneller."
      - "Der Flügel lenkt Luft nach unten ab. Die Gegenkraft hebt ihn, dabei ist der Druck oben kleiner als unten."
      - "Das Flugzeug verdrängt Luft und schwimmt auf ihr wie ein Schiff auf dem Wasser."
      - "Die Luft prallt nur von unten gegen den Flügel und schiebt ihn hoch, die Oberseite spielt keine Rolle."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Das ist die Fehlvorstellung der gleichen Laufzeit. Kein Gesetz verlangt sie, und die Luft oben kommt in Wirklichkeit früher an.
      - wert: 2
        meldung: |
          Das wäre statischer Auftrieb nach Archimedes. Ein Flugzeug verdrängt aber nur wenige hundert Kilogramm Luft und wiegt viele Tonnen.
      - wert: 3
        meldung: |
          Die Oberseite ist sogar wichtiger. Der größte Teil des Auftriebs kommt vom Unterdruck über dem Flügel, wo die Luft schnell der Wölbung folgt.
hinweise:
  - Welche Erklärung passt auch zu einem Papierflieger mit flachen Flügeln?
loesung: |
  **Ansatz:** Ein richtiger Mechanismus muss auch für flache und symmetrische Flügel gelten.
  ---
  **Antwort:** Der Flügel lenkt Luft nach unten ab (Newton). Dazu gehört ein kleinerer Druck oben und ein größerer unten (Bernoulli). Beide Beschreibungen gehören zusammen.
```

```aufgabe
id: p9-auftrieb-verdoppeln
titel: Doppelt so schnell starten
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ein Flugzeug rollt zum Start. Um welchen Faktor wächst der Auftrieb seiner Flügel, wenn sich die Geschwindigkeit verdoppelt (gleicher Anstellwinkel)?
teile:
  - typ: zahl
    loesung: "2^2"
    anzeige: '4'
    fehler:
      - wert: "2"
        meldung: |
          Der Auftrieb wächst nicht proportional zu $v$, sondern zu $v^2$. Doppelte Geschwindigkeit gibt den vierfachen Staudruck.
      - wert: "8"
        meldung: |
          $v^3$ gehört zur **Leistung** gegen den Luftwiderstand. Der Auftrieb selbst wächst mit $v^2$.
hinweise:
  - 'In $F_A = \tfrac12 c_A\rho A v^2$ steht $v$ im Quadrat.'
loesung: |
  **Ansatz:** $F_A \propto v^2$, alle anderen Größen bleiben gleich.
  ---
  **Ergebnis:** Faktor $2^2 = 4$. Deshalb hebt ein Flugzeug erst ab einer bestimmten Geschwindigkeit ab, dann aber recht plötzlich.
```

```aufgabe
id: p9-segelflugzeug
titel: Mindestgeschwindigkeit eines Segelflugzeugs
niveau: 2
lernziel: 8
kompetenz: anwenden
angabe: |
  Ein Segelflugzeug mit Pilot hat $450\,\text{kg}$ und $15\,\text{m}^2$ Flügelfläche. Der größte Auftriebsbeiwert ist $c_A = 1{,}4$, die Luft hat $1{,}2\,\text{kg/m}^3$. Wie schnell muss es mindestens fliegen? Gib das Ergebnis in m/s an, gerundet auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "sqrt(2*450*9.81/(1.4*1.2*15))"
    einheit: "m/s"
    anzeige: '18{,}7'
    toleranz: 0.1
    fehler:
      - wert: "sqrt(450*9.81/(1.4*1.2*15))"
        meldung: |
          Du hast den Faktor $\tfrac12$ beim Umstellen verloren. Aus $\tfrac12 c_A\rho A v^2 = m g$ folgt $v^2 = 2 m g/(c_A\rho A)$.
      - wert: "2*450*9.81/(1.4*1.2*15)"
        meldung: |
          Das ist $v^2$ in $\text{m}^2/\text{s}^2$. Zieh noch die Wurzel.
hinweise:
  - 'Im waagrechten Gleichgewicht ist $\tfrac12 c_A\rho A v^2 = m g$.'
  - 'Nach $v$ umstellen: $v = \sqrt{2 m g/(c_A\rho A)}$.'
loesung: |
  **Ansatz:** Bei der Mindestgeschwindigkeit trägt der größte mögliche Auftrieb gerade das Gewicht.
  ---
  **Umstellen:** Wir multiplizieren mit $2$ und teilen durch $c_A\rho A$: $v^2 = \dfrac{2 m g}{c_A\rho A}$.
  ---
  **Rechnung:** $v = \sqrt{\dfrac{2\cdot 450\cdot 9{,}81\,\text{N}}{1{,}4\cdot 1{,}2\,\text{kg/m}^3\cdot 15\,\text{m}^2}} = \sqrt{350\,\text{m}^2/\text{s}^2} = 18{,}7\,\text{m/s} \approx 67\,\text{km/h}$.
```

```aufgabe
id: p9-ca-diagramm
titel: Den Auftriebsbeiwert ablesen
niveau: 2
lernziel: 8
kompetenz: verstehen
angabe: |
  Das Diagramm zeigt $c_A$ über dem Anstellwinkel für den Flügel eines Ultraleichtflugzeugs ($12\,\text{m}^2$).

  a) Lies $c_A$ bei $\alpha = 6^\circ$ ab.

  b) Welchen Auftrieb liefert der Flügel bei $6^\circ$, $30\,\text{m/s}$ und $\rho = 1{,}2\,\text{kg/m}^3$?

  c) Ab welchem Anstellwinkel reißt die Strömung ab?
plot:
  x: [-4, 20]
  y: [-0.4, 1.8]
  achsen: { x: "α in Grad", y: "c_A" }
  graphen:
    - { f: "0.1*(x+2)", farbe: 0, von: -4, bis: 14 }
    - { f: "1.6-0.15*(x-14)", farbe: 1, von: 14, bis: 20 }
teile:
  - typ: zahl
    label: a) c_A bei 6°
    loesung: "0.8"
    anzeige: '0{,}8'
    toleranz: 0.03
    fehler:
      - wert: "0.6"
        meldung: |
          Die Gerade geht nicht durch den Ursprung. Bei $0^\circ$ ist $c_A$ schon $0{,}2$. Lies genau bei $6^\circ$ ab.
  - typ: zahl
    label: b) Auftrieb
    loesung: "0.5*0.8*1.2*12*30^2"
    einheit: "N"
    anzeige: '5184'
    toleranz: 30
    fehler:
      - wert: "0.8*1.2*12*30^2"
        meldung: |
          Der Faktor $\tfrac12$ fehlt.
  - typ: zahl
    label: c) Abrisswinkel
    loesung: "14"
    einheit: "°"
    anzeige: '14'
    toleranz: 0.5
hinweise:
  - Suche den Punkt der Geraden über $\alpha = 6^\circ$ und lies den Wert an der senkrechten Achse ab.
  - 'Für b) $F_A = \tfrac12 c_A\rho A v^2$. Für c) suche den höchsten Punkt der Kurve.'
loesung: |
  **a)** Bei $6^\circ$ zeigt die Gerade $c_A = 0{,}8$. Probe mit der Steigung: $0{,}1\cdot(6 + 2) = 0{,}8$.
  ---
  **b)** $F_A = \tfrac12\cdot 0{,}8\cdot 1{,}2\,\text{kg/m}^3\cdot 12\,\text{m}^2\cdot(30\,\text{m/s})^2 = 5184\,\text{N}$. Das trägt $5184/9{,}81 = 528\,\text{kg}$.
  ---
  **c)** Der höchste Punkt liegt bei $14^\circ$. Darüber fällt $c_A$: Die Strömung reißt ab, der Flügel trägt plötzlich weniger. Deshalb warnt im Cockpit ein Signal vor zu großem Anstellwinkel.
```

```aufgabe
id: p9-hochgelegener-flughafen
titel: Landen auf einem hoch gelegenen Flughafen
niveau: 2
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Flugzeug landet auf Meereshöhe ($\rho = 1{,}20\,\text{kg/m}^3$) mit $60\,\text{m/s}$. Wie schnell muss es mit gleichem Anstellwinkel auf einem hoch gelegenen Flughafen landen, wo $\rho = 0{,}96\,\text{kg/m}^3$ ist? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "60*sqrt(1.20/0.96)"
    einheit: "m/s"
    anzeige: '67{,}1'
    toleranz: 0.1
    fehler:
      - wert: "60*1.20/0.96"
        meldung: |
          Der Auftrieb hängt von $\rho v^2$ ab. Wenn $\rho$ um einen Faktor kleiner wird, muss $v^2$ um diesen Faktor wachsen, $v$ also nur um die Wurzel davon.
      - wert: "60*sqrt(0.96/1.20)"
        meldung: |
          In dünnerer Luft braucht man **mehr** Geschwindigkeit, nicht weniger.
hinweise:
  - 'Der Auftrieb muss gleich bleiben, also auch $\rho v^2$.'
  - '$v_2 = v_1\sqrt{\rho_1/\rho_2}$.'
loesung: |
  **Ansatz:** Gewicht, Fläche und $c_A$ sind gleich. Also muss $\rho v^2$ gleich bleiben: $\rho_1 v_1^2 = \rho_2 v_2^2$.
  ---
  **Umstellen:** $v_2 = v_1\sqrt{\rho_1/\rho_2}$.
  ---
  **Rechnung:** $v_2 = 60\,\text{m/s}\cdot\sqrt{1{,}20/0{,}96} = 60\,\text{m/s}\cdot 1{,}118 = 67{,}1\,\text{m/s}$. Hoch gelegene Flughäfen brauchen deshalb längere Pisten.
```

```aufgabe
id: p9-tragfluegel
titel: Druckdifferenz am Verkehrsflugzeug
niveau: 3
lernziel: 8
kompetenz: modellieren
angabe: |
  Ein Flugzeug mit $70\,\text{t}$ Masse und $120\,\text{m}^2$ Flügelfläche fliegt waagrecht mit konstanter Geschwindigkeit.

  a) Welche mittlere Druckdifferenz zwischen Flügelunter- und Flügeloberseite ist nötig? Runde auf ganze Pascal.

  b) Unten strömt die Luft mit $250\,\text{m/s}$ am Flügel vorbei. Wie schnell muss sie oben strömen ($\rho = 0{,}50\,\text{kg/m}^3$ in Reiseflughöhe)? Runde auf ganze m/s.
teile:
  - typ: zahl
    label: a) Druckdifferenz
    loesung: "70000*9.81/120"
    einheit: "Pa"
    anzeige: '5723'
    toleranz: 10
    fehler:
      - wert: "70000/120"
        meldung: |
          Du hast die Masse statt der Gewichtskraft genommen. Druck ist Kraft pro Fläche, also $m g/A$.
  - typ: zahl
    label: b) Geschwindigkeit oben
    loesung: "sqrt(250^2+2*70000*9.81/120/0.50)"
    einheit: "m/s"
    anzeige: '292'
    toleranz: 1
    fehler:
      - wert: "250+2*70000*9.81/120/0.50/250"
        meldung: |
          Du darfst nicht die Geschwindigkeiten addieren. In der Bernoulli-Gleichung stehen die Quadrate: $v_o^2 = v_u^2 + 2\Delta p/\rho$.
hinweise:
  - 'Waagrechter Flug mit konstanter Geschwindigkeit: Auftrieb = Gewicht, also $\Delta p\cdot A = m g$.'
  - 'Bernoulli: $\Delta p = \tfrac12\rho(v_o^2 - v_u^2)$, nach $v_o$ auflösen.'
gefuehrt:
  - text: Wie groß ist die Gewichtskraft des Flugzeugs in Newton?
    teil: { typ: zahl, loesung: "70000*9.81" }
    erklaerung: $F_G = 70\,000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2 = 686\,700\,\text{N}$.
  - text: Welche Druckdifferenz trägt dieses Gewicht auf $120\,\text{m}^2$?
    teil: { typ: zahl, loesung: "70000*9.81/120", toleranz: 10 }
    erklaerung: $\Delta p = 686\,700\,\text{N}/120\,\text{m}^2 = 5723\,\text{Pa}$, nur knapp $6\,\%$ des Luftdrucks auf Meereshöhe.
  - text: Wie groß muss $v_o^2$ sein? Nutze $v_o^2 = v_u^2 + 2\Delta p/\rho$.
    teil: { typ: zahl, loesung: "250^2+2*70000*9.81/120/0.50", toleranz: 50 }
    erklaerung: $v_o^2 = 62\,500 + 2\cdot 5723/0{,}50 = 62\,500 + 22\,890 = 85\,390\,\text{m}^2/\text{s}^2$.
  - text: Ziehe die Wurzel.
    teil: { typ: zahl, loesung: "sqrt(250^2+2*70000*9.81/120/0.50)", toleranz: 1 }
    erklaerung: $v_o = \sqrt{85\,390}\,\text{m/s} = 292\,\text{m/s}$.
loesung: |
  **Ansatz:** Im waagrechten Flug mit konstanter Geschwindigkeit ist der Auftrieb gleich dem Gewicht. Er entsteht aus der Druckdifferenz mal Flügelfläche.
  ---
  **a)** $\Delta p = \dfrac{m g}{A} = \dfrac{70\,000\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{120\,\text{m}^2} = 5723\,\text{Pa}$.
  ---
  **b)** Bernoulli: $\Delta p = \tfrac12\rho(v_o^2 - v_u^2)$, also $v_o = \sqrt{v_u^2 + 2\Delta p/\rho} = \sqrt{62\,500 + 22\,890}\,\text{m/s} = 292\,\text{m/s}$.
  ---
  **Einordnung:** Oben strömt die Luft um $17\,\%$ schneller als unten, viel mehr als die wenigen Prozent längeren Wegs. Auch das widerlegt die Erklärung mit der gleichen Laufzeit.
```

```aufgabe
id: p9-rueckenflug
titel: Ein Flugzeug auf dem Rücken
niveau: 3
lernziel: 8
kompetenz: begruenden
angabe: |
  Eine Mitschülerin erklärt: „Ein Flugzeug fliegt, weil der Weg über die gewölbte Oberseite länger ist und die Luft oben deshalb gleichzeitig ankommen muss.“

  Widerlege diese Erklärung mit zwei Beobachtungen und gib eine richtige Erklärung.
teile:
  - typ: text
    muster: |
      Gegenbeispiele: Kunstflugzeuge mit symmetrischen Flügeln fliegen, auch auf dem Rücken. Papierflieger mit flachen
      Flügeln fliegen. In beiden Fällen gibt es keinen längeren Weg oben. Außerdem zeigen Windkanalmessungen, dass die Luft
      oben früher an der Hinterkante ankommt, es gibt also keine gleiche Laufzeit. Eine Rechnung mit gleicher Laufzeit
      liefert nur einen Bruchteil des nötigen Auftriebs.
      Richtige Erklärung: Durch Anstellwinkel und Form lenkt der Flügel die anströmende Luft nach unten ab. Nach dem dritten
      Newtonschen Axiom wirkt eine gleich große Kraft nach oben auf den Flügel. Dabei herrscht oben ein kleinerer Druck
      (schnellere Strömung, Bernoulli) und unten ein größerer.
hinweise:
  - Welche Flugzeuge oder Flugkörper haben keine gewölbte Oberseite und fliegen trotzdem?
  - Was geschieht mit der Luft hinter dem Flügel? Denk an das dritte Newtonsche Axiom.
loesung: |
  **Gegenbeispiele:** Symmetrische Kunstflugflügel und flache Papierflieger tragen, obwohl beide Wege gleich lang sind. Rückenflug wäre nach der Laufzeit-Erklärung unmöglich.
  ---
  **Messung:** Im Windkanal kommt die obere Luft früher an. Die Voraussetzung „gleiche Laufzeit“ ist also falsch.
  ---
  **Richtige Erklärung:** Der angestellte Flügel lenkt die Luft nach unten ab (Abwind). Die Gegenkraft hebt den Flügel. Damit verbunden sind Unterdruck oben und Überdruck unten.
```

## Strömungswiderstand

```aufgabe
id: p9-11-check
art: check
titel: "Vorwissen: Leistung bei konstanter Geschwindigkeit"
niveau: 1
angabe: |
  Ein Radfahrer fährt mit konstant $10\,\text{m/s}$ gegen eine Widerstandskraft von $40\,\text{N}$. Welche Leistung muss er dafür aufbringen?
teile:
  - typ: zahl
    loesung: "40*10"
    einheit: "W"
    anzeige: '400'
    fehler:
      - wert: "40/10"
        meldung: |
          Leistung ist Kraft **mal** Geschwindigkeit, $P = F\cdot v$. Je schneller man gegen dieselbe Kraft fährt, desto mehr Arbeit pro Sekunde.
hinweise:
  - '$P = F\cdot v$, weil die Arbeit pro Sekunde Kraft mal Weg pro Sekunde ist.'
loesung: |
  **Ansatz:** Bei konstanter Geschwindigkeit ist die Leistung $P = F\cdot v$.
  ---
  **Rechnung:** $P = 40\,\text{N}\cdot 10\,\text{m/s} = 400\,\text{W}$. Wiederholen: [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

Bis jetzt waren unsere Strömungen reibungsfrei. Echte Fluide reiben aber, an Wänden und an sich selbst. Ein Körper, der sich durch ein Fluid bewegt,
wird gebremst. Diese bremsende Kraft heißt **Strömungswiderstand**. Den Luftwiderstand $F_W = \tfrac12 c_w\rho A v^2$
kennst du schon aus dem Kapitel Dynamik, Abschnitt
[Reibung und Luftwiderstand](/lernen/physik1/dynamik/reibung-und-luftwiderstand). Hier lernst du, woher er kommt
und wann eine andere Formel gilt.

### Viskosität: die innere Reibung

Denk dir ein Fluid zwischen zwei Platten. Die untere ruht, die obere wird verschoben. Die Fluidschicht direkt an
jeder Platte haftet an ihr. Dazwischen gleiten die Schichten aneinander vorbei, jede etwas schneller als die
darunter. Zwischen den Schichten wirkt Reibung. Diese **innere Reibung** heißt **Viskosität** oder Zähigkeit,
Formelzeichen $\eta$ (griechisch „eta“).

:::definition[Viskosität]
Die **Viskosität** $\eta$ gibt an, wie stark ein Fluid dem Aneinandervorbeigleiten seiner Schichten widersteht. Je
größer $\eta$, desto zäher das Fluid. Die Einheit ist $\text{Pa}\cdot\text{s}$.
:::

Typische Werte bei $20\,^\circ\text{C}$: Luft $1{,}8\cdot 10^{-5}\,\text{Pa}\cdot\text{s}$, Wasser
$1{,}0\cdot 10^{-3}\,\text{Pa}\cdot\text{s}$, Olivenöl etwa $0{,}08\,\text{Pa}\cdot\text{s}$, Glyzerin etwa
$1{,}4\,\text{Pa}\cdot\text{s}$, Honig etwa $10\,\text{Pa}\cdot\text{s}$. Bei Flüssigkeiten nimmt die Viskosität mit
steigender Temperatur stark ab. Kalter Honig fließt kaum, warmer gut, und Motoröl ist im Winter dickflüssiger.

**Ein Nichtbeispiel:** Viskosität ist nicht dasselbe wie Dichte. Öl schwimmt auf Wasser, hat also eine kleinere
Dichte. Trotzdem ist es viel zäher. Quecksilber ist dreizehnmal so dicht wie Wasser, fließt aber fast genauso leicht.

### Laminar oder turbulent

Bei kleinen Geschwindigkeiten und zähen Fluiden gleiten die Schichten geordnet aneinander vorbei. Die Stromlinien
bleiben glatt. Eine solche Strömung heißt **laminar**, vom lateinischen *lamina*, „Schicht“. Bei großen
Geschwindigkeiten bilden sich hinter einem Körper Wirbel, die Strömung wird ungeordnet. Sie heißt **turbulent**.
Ein Beispiel ist der Rauch einer Kerze: Er steigt erst als glatter Faden auf und zerfällt dann in Wirbel.

Ob eine Strömung laminar oder turbulent ist, entscheidet in der Strömungslehre die **Reynolds-Zahl**
$Re = \rho v d/\eta$. Dabei ist $d$ eine typische Länge, etwa der Durchmesser des Körpers. Ist $Re$ kleiner als
etwa $1$, ist die Umströmung sicher laminar. Bei Tausenden und mehr ist sie turbulent. Ein Auto bei
$108\,\text{km/h}$ hat $Re \approx 3\cdot 10^6$, ein Nebeltröpfchen $Re \approx 0{,}02$.

```aufgabe
id: p9-11-laminar-check
art: check
titel: Laminar oder turbulent?
niveau: 1
angabe: |
  Welche der beiden Strömungen ist laminar?
teile:
  - typ: auswahl
    optionen:
      - "Ein Auto fährt mit $130\\,\\text{km/h}$ auf der Autobahn."
      - "Eine kleine Stahlkugel sinkt langsam in Honig."
    richtig: [1]
    fehler:
      - wert: 0
        meldung: |
          Große Geschwindigkeit, großer Körper und dünne Luft geben eine riesige Reynolds-Zahl. Hinter einem Auto bilden sich starke Wirbel.
hinweise:
  - Laminar heißt langsam, klein und zäh.
loesung: |
  **Ansatz:** Kleine Geschwindigkeit, kleiner Körper und große Viskosität machen die Reynolds-Zahl klein.
  ---
  **Antwort:** Die Kugel in Honig strömt laminar um. Beim Auto ist die Strömung turbulent.
```

### Das Gesetz von Stokes: laminare Umströmung einer Kugel

Für eine kleine Kugel in laminarer Strömung hat George Stokes die Widerstandskraft berechnet.

:::formel[Gesetz von Stokes]
$$F_R = 6\pi\,\eta\, r\, v$$
Dabei ist $\eta$ die Viskosität des Fluids, $r$ der **Radius** der Kugel und $v$ ihre Geschwindigkeit gegenüber dem
Fluid. Die Formel gilt nur bei laminarer Umströmung, also für $Re \lesssim 1$.
:::

Die Kraft wächst **linear** mit der Geschwindigkeit. Doppelt so schnell heißt doppelter Widerstand. Fällt eine kleine
Kugel in einem Fluid, wird sie schneller, bis Reibung und Auftrieb zusammen die Gewichtskraft ausgleichen. Dann sinkt
sie mit konstanter **Endgeschwindigkeit**.

```plot
x: [-3, 3]
y: [-3, 3]
gleich: true
hoehe: 260
kurven:
  - { x: "0.8*cos(t)", y: "0.8*sin(t)", t: [0, "2*pi"], farbe: 3 }
vektoren:
  - { von: [0, -0.2], nach: [0, -2.8], label: "F_G", farbe: 1 }
  - { von: [-0.3, 0.2], nach: [-0.3, 0.6], label: "F_A", farbe: 0 }
  - { von: [0.3, 0.2], nach: [0.3, 2.5], label: "F_R", farbe: 2 }
punkte:
  - { x: 1.9, y: -0.6, label: "sinkt mit v" }
beschriftung: "Freikörperbild einer Stahlkugel, die mit konstanter Endgeschwindigkeit in Öl sinkt. Nach unten wirkt die Gewichtskraft F_G (orange). Nach oben wirken der Auftrieb F_A (blau, klein, weil Öl viel leichter als Stahl ist) und die Stokes-Reibung F_R (grün). Die Kräfte nach oben sind zusammen so groß wie die Gewichtskraft."
```

Im Gleichgewicht gilt $F_R + F_A = F_G$. Mit $V = \tfrac43\pi r^3$ für das Kugelvolumen ist das
$$6\pi\eta r v + \rho_\text{Fl}\, g\,\tfrac43\pi r^3 = \rho_K\, g\,\tfrac43\pi r^3.$$
Wir lösen nach $v$ auf, indem wir den Auftrieb nach rechts bringen und durch $6\pi\eta r$ teilen:
$$v_\text{end} = \frac{2\, r^2\,(\rho_K - \rho_\text{Fl})\, g}{9\,\eta}.$$

:::beispiel[Warum Wolken schweben]
Ein Nebeltröpfchen hat den Radius $r = 10\,\mu\text{m} = 1{,}0\cdot 10^{-5}\,\text{m}$. Es sinkt in Luft
($\eta = 1{,}8\cdot 10^{-5}\,\text{Pa}\cdot\text{s}$). Der Auftrieb in Luft ist winzig, wir lassen ihn weg.

**Schritt 1, Formel:** $v_\text{end} = \dfrac{2 r^2\rho_W g}{9\eta}$.

**Schritt 2, Rechnung:**
$v_\text{end} = \dfrac{2\cdot(1{,}0\cdot 10^{-5}\,\text{m})^2\cdot 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2}{9\cdot 1{,}8\cdot 10^{-5}\,\text{Pa}\cdot\text{s}} = 0{,}012\,\text{m/s}$.

**Antwort:** Etwas mehr als ein Zentimeter pro Sekunde. Schon schwache Aufwinde tragen solche Tröpfchen. Deshalb
fallen Wolken nicht herunter. Erst wenn Tröpfchen zu großen Regentropfen zusammenwachsen, fallen sie. Die Kontrolle
$Re = 1{,}2\cdot 0{,}012\cdot 2\cdot 10^{-5}/1{,}8\cdot 10^{-5} \approx 0{,}02$ bestätigt, dass Stokes gilt.
:::

:::beispiel[Das Kugelfall-Viskosimeter]
Eine Stahlkugel ($r = 1{,}0\,\text{mm}$, $\rho_K = 7800\,\text{kg/m}^3$) sinkt in Glyzerin
($\rho_\text{Fl} = 1260\,\text{kg/m}^3$) mit der gemessenen Endgeschwindigkeit $1{,}0\,\text{cm/s}$. Wie groß ist die
Viskosität?

**Schritt 1, Umstellen:** Aus der Formel für $v_\text{end}$ folgt $\eta = \dfrac{2 r^2(\rho_K - \rho_\text{Fl})\, g}{9\, v}$.

**Schritt 2, Rechnung:**
$\eta = \dfrac{2\cdot(1{,}0\cdot 10^{-3}\,\text{m})^2\cdot 6540\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2}{9\cdot 0{,}010\,\text{m/s}} = 1{,}43\,\text{Pa}\cdot\text{s}$.

**Antwort:** Das passt zum Tabellenwert von Glyzerin. So misst man Viskositäten im Labor: Kugel fallen lassen, Zeit
für eine Messstrecke stoppen. Der Einfluss der Gefäßwand wird dabei vernachlässigt.
:::

:::achtung[Fehler: Beim Kugelfall den Auftrieb vergessen]
Für das Viskosimeter rechnet ein Schüler mit $\rho_K$ statt mit $\rho_K - \rho_\text{Fl}$ und erhält
$\eta = 2\cdot 10^{-6}\cdot 7800\cdot 9{,}81/(9\cdot 0{,}010)\,\text{Pa}\cdot\text{s} = 1{,}70\,\text{Pa}\cdot\text{s}$.

Das ist $19\,\%$ zu viel. In einer Flüssigkeit wirkt neben der Reibung auch der Auftrieb nach oben. Er verkleinert die
Kraft, die die Kugel nach unten treibt. Richtig ist $\rho_K - \rho_\text{Fl} = 6540\,\text{kg/m}^3$ und damit
$\eta = 1{,}43\,\text{Pa}\cdot\text{s}$.
:::

:::achtung[Fehler: Stokes außerhalb seines Gültigkeitsbereichs]
Eine Schülerin berechnet die Fallgeschwindigkeit eines Regentropfens mit $r = 1\,\text{mm}$ nach Stokes:
$v = 2\cdot(10^{-3})^2\cdot 1000\cdot 9{,}81/(9\cdot 1{,}8\cdot 10^{-5})\,\text{m/s} = 121\,\text{m/s}$.

Das sind über $400\,\text{km/h}$, unmöglich für Regen. Bei dieser Größe und Geschwindigkeit ist die Umströmung
turbulent, und Stokes gilt nicht mehr. Mit dem quadratischen Luftwiderstand ergeben sich etwa $6{,}5\,\text{m/s}$,
was zur Messung passt. Prüfe immer, ob ein Ergebnis plausibel ist.
:::

### Turbulente Umströmung: der quadratische Widerstand

Bei Autos, Radfahrern, Bällen und Fallschirmspringern ist die Strömung turbulent. Hinter dem Körper entsteht ein
Gebiet mit Wirbeln und kleinem Druck. Der Druck vorne ist größer als hinten, das bremst. Die Widerstandskraft wächst
dann mit dem **Quadrat** der Geschwindigkeit:

:::formel[Luftwiderstand bei turbulenter Strömung]
$$F_W = \tfrac12\, c_w\,\rho\, A\, v^2$$
Dabei ist $A$ die Stirnfläche, also der Querschnitt senkrecht zur Bewegung, $\rho$ die Dichte des Fluids und $c_w$
der **Widerstandsbeiwert**. Er hängt nur von der Form ab.
:::

Typische $c_w$-Werte: Platte quer zur Strömung $1{,}1$ bis $1{,}3$, aufrechter Radfahrer etwa $0{,}9$, Kugel
$0{,}45$, moderner PKW $0{,}25$ bis $0{,}35$, Stromlinienkörper in Tropfenform etwa $0{,}05$. In der Formel steckt
wieder der Staudruck $\tfrac12\rho v^2$ aus [9.9 Die Bernoulli-Gleichung](/lernen/physik1/hydro-aeromechanik/die-bernoulli-gleichung).

**Folgen der quadratischen Abhängigkeit:**

- Doppelte Geschwindigkeit, **vierfache** Widerstandskraft.
- Die Leistung gegen den Widerstand ist $P = F_W\cdot v \propto v^3$. Doppelte Geschwindigkeit, **achtfache**
  Leistung.

:::beispiel[Wie viel Leistung kostet schnelles Fahren?]
Ein Auto fährt einmal mit $100\,\text{km/h}$ und einmal mit $130\,\text{km/h}$.

**Schritt 1, Verhältnis der Geschwindigkeiten:** $130/100 = 1{,}3$.

**Schritt 2, Leistung:** Weil $P \propto v^3$, wächst die Leistung gegen den Luftwiderstand um $1{,}3^3 = 2{,}2$.

**Antwort:** Nur $30\,\%$ schneller kostet mehr als die doppelte Leistung gegen den Luftwiderstand. Die Fahrt dauert
dabei nur um knapp ein Viertel kürzer. Deshalb steigt der Verbrauch auf der Autobahn so stark.
:::

```aufgabe
id: p9-11-widget-check
art: check
titel: "Vorhersage: Was macht ein größerer c_w-Wert?"
niveau: 1
angabe: |
  Im Widget darunter siehst du die Leistung gegen den Luftwiderstand über der Geschwindigkeit. Sage vorher: Was passiert mit der Kurve, wenn du $c_w$ von $0{,}3$ auf $0{,}6$ verdoppelst?
teile:
  - typ: auswahl
    optionen:
      - "Alle Werte verdoppeln sich, die Form der Kurve bleibt."
      - "Alle Werte verachtfachen sich."
      - "Die Kurve wird zu einer Geraden."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Achtfach wird die Leistung bei doppelter **Geschwindigkeit**. $c_w$ steht in der Formel nur als einfacher Faktor.
      - wert: 2
        meldung: |
          Die Form bestimmt der Faktor $v^3$. Der bleibt, egal wie groß $c_w$ ist.
hinweise:
  - 'Wie steht $c_w$ in $P = \tfrac12 c_w\rho A v^3$?'
loesung: |
  **Ansatz:** $c_w$ ist ein Faktor vor $v^3$. Verdoppeln verdoppelt jeden Wert.
  ---
  **Beobachtung im Widget:** Die Kurve wird an jeder Stelle doppelt so hoch, sie bleibt aber eine kubische Kurve. Ein Lieferwagen mit großem $c_w$ und großem $A$ braucht deshalb viel mehr Leistung.
```

```widget
name: parameter
titel: Luftwiderstand und Leistung eines Autos
props:
  f: "0.5*cw*1.2*A*(x/3.6)^3/1000"
  parameter:
    - { name: cw, min: 0.2, max: 1.2, step: 0.01, wert: 0.3 }
    - { name: A, min: 1.5, max: 4, step: 0.1, wert: 2.2 }
  x: [0, 200]
  y: [0, 120]
```

Die Kurve zeigt die Leistung in kW, die allein gegen den Luftwiderstand nötig ist, über der Geschwindigkeit in km/h.
Erklärung der Beobachtung: In $P = \tfrac12 c_w\rho A v^3$ wirken $c_w$ und $A$ als einfache Faktoren, die
Geschwindigkeit aber in der dritten Potenz.

:::merke
**Welche Widerstandsformel?**
1. Klein, langsam, zäh ($Re \lesssim 1$): Stokes, $F_R = 6\pi\eta r v$, linear in $v$. Beim Sinken in Flüssigkeiten den Auftrieb mitnehmen.
2. Groß, schnell, Luft oder Wasser: $F_W = \tfrac12 c_w\rho A v^2$, quadratisch in $v$.
3. Endgeschwindigkeit: Summe der Kräfte null. Leistung bei konstanter Geschwindigkeit: $P = F\cdot v$.
4. Ergebnis immer auf Plausibilität prüfen.
:::

```reflexion
frage: Warum fallen ein kleiner und ein großer Regentropfen nicht gleich schnell, obwohl im Vakuum alle Körper gleich schnell fallen?
antwort: |
  Im Vakuum wirkt nur die Gewichtskraft, und die Beschleunigung ist für alle Körper $g$. In Luft kommt der
  Strömungswiderstand dazu. Die Gewichtskraft wächst mit dem Volumen, also mit $r^3$. Der Widerstand wächst nur mit $r$
  (Stokes) oder mit der Fläche $r^2$ (turbulent). Bei großen Tropfen überwiegt deshalb das Gewicht stärker, sie
  erreichen eine höhere Endgeschwindigkeit. Kleine Tropfen werden schon bei kleiner Geschwindigkeit vom Widerstand
  ausgebremst.
```

### Aufgaben zum Strömungswiderstand

```aufgabe
id: p9-widerstand-verdoppeln
titel: Doppelt so schnell radeln
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Ein Radfahrer verdoppelt seine Geschwindigkeit. Um welchen Faktor steigt die Leistung, die er gegen den Luftwiderstand aufbringen muss?
teile:
  - typ: zahl
    loesung: "2^3"
    anzeige: '8'
    fehler:
      - wert: "4"
        meldung: |
          Um den Faktor $4$ steigt die **Kraft**. Die Leistung ist Kraft mal Geschwindigkeit, also kommt noch ein Faktor $2$ dazu.
      - wert: "2"
        meldung: |
          Der Luftwiderstand wächst mit $v^2$, die Leistung $P = F_W\cdot v$ also mit $v^3$.
hinweise:
  - '$F_W \propto v^2$ und $P = F_W\cdot v$.'
loesung: |
  **Ansatz:** $F_W \propto v^2$ und $P = F_W\cdot v \propto v^3$.
  ---
  **Ergebnis:** Faktor $2^3 = 8$. Deshalb ist schnelles Radfahren so anstrengend.
```

```aufgabe
id: p9-viskositaet-konzept
titel: Dicht oder zäh?
niveau: 1
lernziel: 9
kompetenz: verstehen
angabe: |
  Speiseöl schwimmt auf Wasser. Welche Aussage ist richtig?
teile:
  - typ: auswahl
    optionen:
      - "Öl hat eine kleinere Dichte als Wasser, ist aber zäher."
      - "Öl hat eine kleinere Dichte und deshalb auch eine kleinere Viskosität."
      - "Öl schwimmt, weil es zäher ist."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Dichte und Viskosität sind verschiedene Größen. Öl ist leichter als Wasser, fließt aber deutlich zäher.
      - wert: 2
        meldung: |
          Ob etwas schwimmt, entscheidet der Dichtevergleich, nicht die Zähigkeit.
hinweise:
  - Was entscheidet über Schwimmen, was über Zähigkeit?
loesung: |
  **Schwimmen:** Öl hat eine kleinere Dichte als Wasser, deshalb schwimmt es oben.
  ---
  **Zähigkeit:** Olivenöl hat etwa die achtzigfache Viskosität von Wasser. Dichte und Viskosität hängen nicht zusammen.
```

```aufgabe
id: p9-luftwiderstand-auto
titel: Luftwiderstand eines Autos
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Auto ($c_w = 0{,}30$, Stirnfläche $2{,}2\,\text{m}^2$) fährt mit $108\,\text{km/h}$. Die Luft hat $\rho = 1{,}2\,\text{kg/m}^3$.

  Berechne die Luftwiderstandskraft und die Leistung, die der Motor allein dafür aufbringen muss.
teile:
  - typ: zahl
    label: Widerstandskraft
    loesung: "0.5*0.30*1.2*2.2*30^2"
    einheit: "N"
    anzeige: '356'
    fehler:
      - wert: "0.5*0.30*1.2*2.2*108^2"
        meldung: |
          Die Geschwindigkeit muss in m/s stehen: $108\,\text{km/h} = 30\,\text{m/s}$. Wegen des Quadrats ist das Ergebnis sonst $13$-mal zu groß.
  - typ: zahl
    label: Leistung
    loesung: "0.5*0.30*1.2*2.2*30^3"
    einheit: "W"
    anzeige: '10\,700'
    toleranz: 50
    fehler:
      - wert: "0.5*0.30*1.2*2.2*30^2"
        meldung: |
          Das ist die Kraft. Leistung ist Kraft mal Geschwindigkeit.
hinweise:
  - '$108\,\text{km/h} = 30\,\text{m/s}$.'
  - 'Leistung bei konstanter Geschwindigkeit: $P = F\cdot v$.'
loesung: |
  **Ansatz:** Turbulente Umströmung, also $F_W = \tfrac12 c_w\rho A v^2$, dann $P = F_W v$.
  ---
  **Kraft:** $F_W = \tfrac12\cdot 0{,}30\cdot 1{,}2\,\text{kg/m}^3\cdot 2{,}2\,\text{m}^2\cdot(30\,\text{m/s})^2 = 356\,\text{N}$.
  ---
  **Leistung:** $P = 356\,\text{N}\cdot 30\,\text{m/s} \approx 10\,700\,\text{W} = 10{,}7\,\text{kW}$. Bei $216\,\text{km/h}$ wären es achtmal so viel, etwa $86\,\text{kW}$.
```

```aufgabe
id: p9-stokes-tropfen
titel: Ein Wolkentröpfchen sinkt
niveau: 2
lernziel: 9
kompetenz: rechnen
angabe: |
  Ein Wassertröpfchen mit $40\,\mu\text{m}$ **Durchmesser** sinkt in Luft ($\eta = 1{,}8\cdot 10^{-5}\,\text{Pa}\cdot\text{s}$). Berechne seine Endgeschwindigkeit nach Stokes, ohne Auftrieb. Gib das Ergebnis in cm/s an, gerundet auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "2*(20e-6)^2*1000*9.81/(9*1.8e-5)*100"
    einheit: "cm/s"
    anzeige: '4{,}8'
    toleranz: 0.05
    fehler:
      - wert: "2*(40e-6)^2*1000*9.81/(9*1.8e-5)*100"
        meldung: |
          In die Formel gehört der Radius, $r = 20\,\mu\text{m}$. Weil $r$ im Quadrat steht, wird das Ergebnis mit dem Durchmesser viermal zu groß.
      - wert: "2*(20e-6)^2*1000*9.81/(9*1.8e-5)"
        meldung: |
          Das ist das Ergebnis in m/s. Gefragt sind cm/s.
hinweise:
  - 'Radius bestimmen: $r = 20\,\mu\text{m} = 2{,}0\cdot 10^{-5}\,\text{m}$.'
  - '$v = 2 r^2\rho g/(9\eta)$, Ergebnis mit $100$ in cm/s umrechnen.'
loesung: |
  **Ansatz:** Das Tröpfchen ist klein und langsam, also gilt Stokes. Gewicht gleich Reibung gibt $v = \dfrac{2 r^2\rho_W g}{9\eta}$.
  ---
  **Radius:** $r = 40\,\mu\text{m}/2 = 2{,}0\cdot 10^{-5}\,\text{m}$.
  ---
  **Rechnung:** $v = \dfrac{2\cdot(2{,}0\cdot 10^{-5}\,\text{m})^2\cdot 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2}{9\cdot 1{,}8\cdot 10^{-5}\,\text{Pa}\cdot\text{s}} = 0{,}048\,\text{m/s} = 4{,}8\,\text{cm/s}$. Probe: Das Nebeltröpfchen aus dem Beispiel „Warum Wolken schweben“ hat $r = 10\,\mu\text{m}$ und sinkt mit $1{,}2\,\text{cm/s}$. Doppelter Radius gibt wegen $v \propto r^2$ die vierfache Geschwindigkeit, $4\cdot 1{,}2\,\text{cm/s} = 4{,}8\,\text{cm/s}$.
```

```aufgabe
id: p9-tempolimit
titel: Was spart ein Tempolimit?
niveau: 2
lernziel: 9
kompetenz: modellieren
angabe: |
  Ein Auto fährt statt mit $130\,\text{km/h}$ nur noch mit $100\,\text{km/h}$. Um wie viel Prozent sinkt die Leistung, die es gegen den Luftwiderstand braucht? Runde auf ganze Prozent.
teile:
  - typ: zahl
    loesung: "(1-(100/130)^3)*100"
    einheit: "%"
    anzeige: '54'
    toleranz: 0.6
    fehler:
      - wert: "(1-(100/130)^2)*100"
        meldung: |
          Das gilt für die Kraft. Die Leistung hängt von $v^3$ ab.
      - wert: "(100/130)^3*100"
        meldung: |
          Das ist der verbleibende Anteil. Gefragt ist, um wie viel die Leistung **sinkt**.
hinweise:
  - '$P \propto v^3$. Berechne das Verhältnis der Leistungen.'
  - Die Einsparung ist $100\,\%$ minus dem verbleibenden Anteil.
loesung: |
  **Ansatz:** Bei gleichem Auto ist $P \propto v^3$. Wir vergleichen die beiden Leistungen als Verhältnis.
  ---
  **Verhältnis:** $\dfrac{P_{100}}{P_{130}} = \left(\dfrac{100}{130}\right)^3 = 0{,}455$.
  ---
  **Einsparung:** $100\,\% - 45{,}5\,\% \approx 54\,\%$. Der Gesamtverbrauch sinkt weniger, weil auch Rollreibung und Motorverluste dazugehören.
```

```aufgabe
id: p9-fallschirm
titel: Endgeschwindigkeit beim Fallschirmsprung
niveau: 2
lernziel: 9
kompetenz: anwenden
angabe: |
  Ein Fallschirmspringer (Masse mit Ausrüstung $80\,\text{kg}$) fällt in Bauchlage. Das Produkt aus Widerstandsbeiwert und Stirnfläche beträgt $c_w A = 0{,}70\,\text{m}^2$, die Luftdichte $1{,}2\,\text{kg/m}^3$. Berechne die Endgeschwindigkeit in m/s, gerundet auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "sqrt(2*80*9.81/(1.2*0.70))"
    einheit: "m/s"
    anzeige: '43{,}2'
    toleranz: 0.1
    fehler:
      - wert: "sqrt(80*9.81/(1.2*0.70))"
        meldung: |
          Beim Umstellen von $m g = \tfrac12 c_w A\rho v^2$ ist der Faktor $2$ verloren gegangen.
hinweise:
  - Bei der Endgeschwindigkeit ist der Springer im Kräftegleichgewicht.
  - '$m g = \tfrac12 c_w\rho A v^2$ nach $v$ auflösen.'
loesung: |
  **Ansatz:** Bei der Endgeschwindigkeit ist die resultierende Kraft null: $m g = \tfrac12 c_w A\rho v^2$.
  ---
  **Umstellen:** $v = \sqrt{\dfrac{2 m g}{c_w A\,\rho}}$.
  ---
  **Rechnung:** $v = \sqrt{\dfrac{2\cdot 80\,\text{kg}\cdot 9{,}81\,\text{m/s}^2}{0{,}70\,\text{m}^2\cdot 1{,}2\,\text{kg/m}^3}} = \sqrt{1869\,\text{m}^2/\text{s}^2} = 43{,}2\,\text{m/s}$, also rund $156\,\text{km/h}$.
```

```aufgabe
id: p9-kugelfall
titel: Die Zähigkeit eines Öls messen
niveau: 3
lernziel: 9
kompetenz: modellieren
angabe: |
  In einem Messzylinder mit Öl ($\rho_\text{Fl} = 880\,\text{kg/m}^3$) sinkt eine Stahlkugel ($r = 1{,}5\,\text{mm}$, $\rho_K = 7800\,\text{kg/m}^3$). Für eine Messstrecke von $20\,\text{cm}$ braucht sie mit konstanter Geschwindigkeit $4{,}0\,\text{s}$.

  a) Wie groß ist die Endgeschwindigkeit?

  b) Berechne die Viskosität des Öls. Runde auf zwei Nachkommastellen.

  c) Prüfe mit $Re = \rho_\text{Fl}\, v\, d/\eta$ ($d$ Kugeldurchmesser), ob Stokes hier gelten darf. Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Endgeschwindigkeit
    loesung: "0.20/4.0"
    einheit: "m/s"
    anzeige: '0{,}05'
  - typ: zahl
    label: b) Viskosität
    loesung: "2*(1.5e-3)^2*(7800-880)*9.81/(9*0.05)"
    einheit: "Pa·s"
    anzeige: '0{,}68'
    toleranz: 0.005
    fehler:
      - wert: "2*(1.5e-3)^2*7800*9.81/(9*0.05)"
        meldung: |
          Du hast den Auftrieb im Öl vergessen. In die Formel gehört $\rho_K - \rho_\text{Fl}$.
  - typ: zahl
    label: c) Reynolds-Zahl
    loesung: "880*0.05*3e-3/(2*(1.5e-3)^2*(7800-880)*9.81/(9*0.05))"
    anzeige: '0{,}19'
    toleranz: 0.01
hinweise:
  - Bei konstanter Geschwindigkeit ist $v = s/t$.
  - 'Im Gleichgewicht ist Reibung plus Auftrieb gleich Gewicht. Daraus folgt $\eta = 2 r^2(\rho_K - \rho_\text{Fl}) g/(9 v)$.'
  - 'Für $Re$ den Durchmesser $d = 3{,}0\,\text{mm}$ einsetzen. Stokes gilt etwa für $Re \lesssim 1$.'
gefuehrt:
  - text: Wie groß ist die Endgeschwindigkeit in m/s?
    teil: { typ: zahl, loesung: "0.20/4.0" }
    erklaerung: $v = 0{,}20\,\text{m}/4{,}0\,\text{s} = 0{,}050\,\text{m/s}$.
  - text: Um wie viel ist die Kugel dichter als das Öl, in kg/m³?
    teil: { typ: zahl, loesung: "7800-880" }
    erklaerung: $\rho_K - \rho_\text{Fl} = 6920\,\text{kg/m}^3$. Diese Differenz treibt die Kugel nach unten, weil der Auftrieb einen Teil des Gewichts aufhebt.
  - text: Wie groß ist die Viskosität?
    teil: { typ: zahl, loesung: "2*(1.5e-3)^2*(7800-880)*9.81/(9*0.05)", toleranz: 0.005 }
    erklaerung: $\eta = 2\cdot(1{,}5\cdot 10^{-3})^2\cdot 6920\cdot 9{,}81/(9\cdot 0{,}050)\,\text{Pa}\cdot\text{s} = 0{,}68\,\text{Pa}\cdot\text{s}$.
  - text: Überlege, ob die Strömung laminar ist, und rechne $Re$ nach.
    teil: { typ: zahl, loesung: "880*0.05*3e-3/(2*(1.5e-3)^2*(7800-880)*9.81/(9*0.05))", toleranz: 0.01 }
    erklaerung: $Re = 880\cdot 0{,}050\cdot 0{,}0030/0{,}68 = 0{,}19$. Das ist kleiner als $1$, die Umströmung ist laminar.
loesung: |
  **Ansatz:** Die Kugel sinkt mit konstanter Geschwindigkeit, also gilt das Kräftegleichgewicht $F_R + F_A = F_G$ mit der Stokes-Reibung.
  ---
  **a)** $v = s/t = 0{,}20\,\text{m}/4{,}0\,\text{s} = 0{,}050\,\text{m/s}$.
  ---
  **b)** $\eta = \dfrac{2 r^2(\rho_K - \rho_\text{Fl})\, g}{9 v} = \dfrac{2\cdot(1{,}5\cdot 10^{-3}\,\text{m})^2\cdot 6920\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2}{9\cdot 0{,}050\,\text{m/s}} = 0{,}68\,\text{Pa}\cdot\text{s}$.
  ---
  **c)** $Re = \dfrac{880\,\text{kg/m}^3\cdot 0{,}050\,\text{m/s}\cdot 3{,}0\cdot 10^{-3}\,\text{m}}{0{,}68\,\text{Pa}\cdot\text{s}} = 0{,}19$. Kleiner als $1$, Stokes darf verwendet werden. Probe der Kräfte: $F_G = 1{,}08\,\text{mN}$, $F_A = 0{,}12\,\text{mN}$, $F_R = 0{,}96\,\text{mN}$. Es gilt $0{,}12 + 0{,}96 = 1{,}08$.
```

## Gemischte Wiederholung

In diesem Abschnitt sind Aufgaben aus diesem Kapitel mit Stoff aus früheren Kapiteln gemischt:

- Einheiten umrechnen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen)
- der waagrechte Wurf: [Waagrechter und schiefer Wurf](/lernen/physik1/kinematik/waagrechter-und-schiefer-wurf)
- das Kräftegleichgewicht: [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper)
- die Leistung: [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad)

Das ist Absicht: In der Prüfung steht nicht
dabei, zu welchem Abschnitt eine Aufgabe gehört. Bei den Aufgaben „Welches Verfahren passt?“ musst du nichts rechnen,
sondern nur den richtigen Ansatz erkennen. Das ist oft der schwerste Teil einer Prüfungsaufgabe.

```aufgabe
id: p9-mix-verfahren-bullauge
titel: "Welches Verfahren passt? Das Fenster eines U-Boots"
niveau: 1
lernziel: 1
kompetenz: verstehen
angabe: |
  Ein U-Boot taucht $200\,\text{m}$ tief ins Meer. Im Inneren herrscht normaler Luftdruck. Gesucht ist die Kraft auf ein rundes Fenster. Welcher Ansatz ist richtig? Du musst nichts rechnen.
teile:
  - typ: auswahl
    optionen:
      - "Überdruck $\\rho_\\text{Meer}\\, g\\, h$ berechnen und mit der Fensterfläche $\\pi r^2$ multiplizieren."
      - "Auftrieb $\\rho_\\text{Meer}\\, g\\, V$ des ganzen U-Boots berechnen."
      - "Bernoulli mit der Fahrgeschwindigkeit des U-Boots."
      - "Absolutdruck $p_0 + \\rho g h$ mal Fensterfläche, ohne den Innendruck zu berücksichtigen."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Der Auftrieb betrifft das ganze Boot. Für ein Fenster zählt der Druck an dieser Stelle mal die Fläche des Fensters.
      - wert: 2
        meldung: |
          Auch ein ruhendes U-Boot wird belastet. Der Druck in der Tiefe ist hydrostatisch, die langsame Fahrt spielt kaum eine Rolle.
      - wert: 3
        meldung: |
          Von innen drückt der Luftdruck dagegen. Netto wirkt nur der Überdruck des Wassers.
hinweise:
  - Welcher Druck wirkt von außen, welcher von innen?
loesung: |
  **Ansatz:** Außen wirkt $p_0 + \rho g h$, innen $p_0$. Netto bleibt der Überdruck $\rho g h$, und die Kraft ist Überdruck mal Fläche.
  ---
  **Zur Einordnung:** Mit $r = 15\,\text{cm}$ wären das $1025\cdot 9{,}81\cdot 200\cdot\pi\cdot 0{,}15^2\,\text{N} \approx 1{,}4\cdot 10^5\,\text{N}$, das Gewicht von $14$ Tonnen. Wiederholen: [9.2 Der Schweredruck in Flüssigkeiten](/lernen/physik1/hydro-aeromechanik/der-schweredruck-in-fluessigkeiten).
```

```aufgabe
id: p9-mix-verfahren-leitung
titel: "Welches Verfahren passt? Eine Leitung verengt sich"
niveau: 1
lernziel: 7
kompetenz: verstehen
angabe: |
  Eine waagrechte Wasserleitung verengt sich. Gegeben sind beide Durchmesser, der Volumenstrom und der Druck im weiten Teil. Gesucht ist der Druck in der Engstelle. In welcher Reihenfolge gehst du vor?
teile:
  - typ: auswahl
    optionen:
      - "Zuerst mit $Q = A v$ beide Geschwindigkeiten, dann Bernoulli für den Druck."
      - "Zuerst Bernoulli, dann die Kontinuitätsgleichung."
      - "Nur das Prinzip von Pascal: Der Druck ist überall gleich."
      - "Nur der Schweredruck $\\rho g h$."
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          Für Bernoulli brauchst du die Geschwindigkeiten. Die liefert erst die Kontinuitätsgleichung.
      - wert: 2
        meldung: |
          Pascal gilt für **ruhende** Flüssigkeiten. In einer Strömung mit Engstelle ist der Druck nicht überall gleich.
      - wert: 3
        meldung: |
          Die Leitung ist waagrecht, Höhenunterschiede spielen keine Rolle. Es geht um Geschwindigkeit und Druck.
hinweise:
  - Welche Größe brauchst du in der Bernoulli-Gleichung, die noch nicht gegeben ist?
loesung: |
  **Ansatz:** Bernoulli verknüpft Druck und Geschwindigkeit. Die Geschwindigkeiten liefert die Kontinuitätsgleichung.
  ---
  **Reihenfolge:** $v_1 = Q/A_1$ und $v_2 = Q/A_2$, dann $p_2 = p_1 - \tfrac12\rho(v_2^2 - v_1^2)$. Wiederholen: [9.9 Die Bernoulli-Gleichung](/lernen/physik1/hydro-aeromechanik/die-bernoulli-gleichung).
```

```aufgabe
id: p9-mix-verfahren-auftriebsart
titel: "Welches Verfahren passt? Zwei Arten von Auftrieb"
niveau: 1
lernziel: 8
kompetenz: verstehen
angabe: |
  Ordne zu. Welche Aussagen sind richtig? (Mehrfachauswahl)
teile:
  - typ: auswahl
    mehrfach: true
    optionen:
      - "Ein Zeppelin, der still in der Luft steht, wird vom statischen Auftrieb $\\rho_L g V$ getragen."
      - "Ein Flugzeug wird vom statischen Auftrieb getragen, weil es Luft verdrängt."
      - "Ein Segelflugzeug wird vom dynamischen Auftrieb $\\tfrac12 c_A\\rho A v^2$ getragen."
      - "Ein Heißluftballon braucht Fahrtwind, um zu schweben."
    richtig: [0, 2]
    fehler:
      - wert: [0, 1, 2]
        meldung: |
          Ein Flugzeug verdrängt nur wenige hundert Kilogramm Luft. Sein statischer Auftrieb ist winzig gegenüber dem Gewicht.
      - wert: [0, 2, 3]
        meldung: |
          Ein Heißluftballon schwebt auch bei Windstille. Er nutzt den statischen Auftrieb der verdrängten kalten Luft.
hinweise:
  - Statischer Auftrieb braucht keine Bewegung, dynamischer schon.
loesung: |
  **Statisch:** Zeppelin und Ballon verdrängen viel Luft und schweben auch in Ruhe, $F_A = \rho_L g V$.
  ---
  **Dynamisch:** Flugzeuge und Segelflugzeuge brauchen Geschwindigkeit, $F_A = \tfrac12 c_A\rho A v^2$. Wiederholen: [9.10 Aeromechanik](/lernen/physik1/hydro-aeromechanik/aeromechanik-wie-ein-tragfluegel-auftrieb-erzeugt).
```

```aufgabe
id: p9-mix-quecksilber-einheit
titel: Dichte umrechnen und Luftdruck berechnen
niveau: 1
lernziel: 5
kompetenz: rechnen
angabe: |
  Quecksilber hat die Dichte $13{,}5\,\text{g/cm}^3$. Ein Barometer zeigt eine Quecksilbersäule von $76{,}0\,\text{cm}$. Wie groß ist der Luftdruck in Pascal? Rechne mit dieser Dichte.
teile:
  - typ: zahl
    loesung: "13.5e3*9.81*0.760"
    einheit: "Pa"
    anzeige: '1{,}007\cdot 10^{5}'
    fehler:
      - wert: "13.5*9.81*0.760"
        meldung: |
          Die Dichte muss in $\text{kg/m}^3$ stehen: $13{,}5\,\text{g/cm}^3 = 13\,500\,\text{kg/m}^3$.
      - wert: "13.5e3*9.81*76.0"
        meldung: |
          Die Höhe muss in Metern stehen: $76{,}0\,\text{cm} = 0{,}760\,\text{m}$.
hinweise:
  - '$1\,\text{g/cm}^3 = 1000\,\text{kg/m}^3$. Dann $p = \rho g h$.'
loesung: |
  **Umrechnen:** $\rho = 13{,}5\,\text{g/cm}^3 = 13\,500\,\text{kg/m}^3$ und $h = 0{,}760\,\text{m}$. Wiederholen: [Vorsilben, Zehnerpotenzen und Umrechnen](/lernen/physik1/groessen-einheiten-messen/vorsilben-zehnerpotenzen-und-umrechnen).
  ---
  **Rechnung:** $p = 13\,500\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}760\,\text{m} = 1{,}007\cdot 10^5\,\text{Pa}$, fast genau der Normaldruck.
```

```aufgabe
id: p9-mix-strahl-wurf
titel: Wie weit spritzt der Strahl?
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Ein großer Wassertank steht auf einem Gerüst. In seiner Seitenwand ist $0{,}80\,\text{m}$ unter dem Wasserspiegel ein kleines Loch. Das Loch liegt $1{,}25\,\text{m}$ über dem Boden. Der Strahl tritt waagrecht aus. In welcher waagrechten Entfernung trifft er auf den Boden? Runde auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "sqrt(2*9.81*0.80)*sqrt(2*1.25/9.81)"
    einheit: "m"
    anzeige: '2{,}0'
    toleranz: 0.02
    fehler:
      - wert: "sqrt(2*9.81*0.80)*sqrt(2*0.80/9.81)"
        meldung: |
          Für die Fallzeit zählt die Höhe des Lochs über dem **Boden**, $1{,}25\,\text{m}$, nicht die Tiefe unter dem Wasserspiegel.
      - wert: "sqrt(2*9.81*0.80)"
        meldung: |
          Das ist die Austrittsgeschwindigkeit. Die Weite ist Geschwindigkeit mal Flugzeit.
hinweise:
  - 'Austrittsgeschwindigkeit nach Torricelli: $v = \sqrt{2 g h_1}$ mit der Tiefe unter dem Spiegel.'
  - 'Dann waagrechter Wurf: Fallzeit $t = \sqrt{2 h_2/g}$ aus der Höhe über dem Boden, Weite $x = v\, t$.'
loesung: |
  **Ansatz:** Zwei Teile. Bernoulli liefert die Austrittsgeschwindigkeit, die Kinematik des waagrechten Wurfs die Weite.
  ---
  **Austritt:** $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 0{,}80\,\text{m}} = 3{,}96\,\text{m/s}$.
  ---
  **Fallzeit:** $t = \sqrt{2\cdot 1{,}25\,\text{m}/9{,}81\,\text{m/s}^2} = 0{,}505\,\text{s}$. Wiederholen: [Waagrechter und schiefer Wurf](/lernen/physik1/kinematik/waagrechter-und-schiefer-wurf).
  ---
  **Weite:** $x = v\, t = 3{,}96\,\text{m/s}\cdot 0{,}505\,\text{s} = 2{,}0\,\text{m}$. Allgemein gilt $x = 2\sqrt{h_1 h_2} = 2\sqrt{0{,}80\cdot 1{,}25}\,\text{m} = 2{,}0\,\text{m}$.
```

```aufgabe
id: p9-mix-kork-seil
titel: Ein Korken an der Leine
niveau: 2
lernziel: 3
kompetenz: anwenden
angabe: |
  Ein Korkstück ($V = 0{,}50\,\text{L}$, $\rho = 240\,\text{kg/m}^3$) ist mit einer Schnur am Boden eines Aquariums festgebunden und schwebt ganz unter Wasser. Wie groß ist die Kraft in der Schnur? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    loesung: "(1000-240)*9.81*0.5e-3"
    einheit: "N"
    anzeige: '3{,}73'
    fehler:
      - wert: "1000*9.81*0.5e-3"
        meldung: |
          Das ist nur der Auftrieb. Ein Teil davon wird schon vom Gewicht des Korkens ausgeglichen. Die Schnur muss nur den Rest halten.
      - wert: "(1000+240)*9.81*0.5e-3"
        meldung: |
          Gewicht und Schnurkraft zeigen beide nach unten, der Auftrieb nach oben. Im Gleichgewicht ist $F_S = F_A - F_G$.
hinweise:
  - Zeichne ein Freikörperbild. Welche Kräfte wirken nach oben, welche nach unten?
  - 'Gleichgewicht: $F_A = F_G + F_S$.'
loesung: |
  **Freikörperbild:** Nach oben wirkt der Auftrieb, nach unten wirken Gewichtskraft und Schnurkraft. Der Korken ruht, also $F_A = F_G + F_S$. Wiederholen: [Das Freikörperbild](/lernen/physik1/dynamik/das-freikoerperbild-alle-kraefte-auf-einen-koerper).
  ---
  **Kräfte:** $F_A = 1000\cdot 9{,}81\cdot 0{,}50\cdot 10^{-3}\,\text{N} = 4{,}91\,\text{N}$ und $F_G = 240\cdot 9{,}81\cdot 0{,}50\cdot 10^{-3}\,\text{N} = 1{,}18\,\text{N}$.
  ---
  **Schnurkraft:** $F_S = 4{,}91\,\text{N} - 1{,}18\,\text{N} = 3{,}73\,\text{N}$.
```

```aufgabe
id: p9-mix-pumpe
titel: Leistung einer Wasserpumpe
niveau: 2
lernziel: 1
kompetenz: anwenden
angabe: |
  Eine Pumpe fördert $2{,}0\,\text{L/s}$ Wasser $15\,\text{m}$ hoch in einen Dachtank. Welche Leistung braucht sie mindestens? Runde auf ganze Watt.
teile:
  - typ: zahl
    loesung: "1000*0.002*9.81*15"
    einheit: "W"
    anzeige: '294'
    toleranz: 1
    fehler:
      - wert: "2.0*9.81*15*1000"
        meldung: |
          $2{,}0\,\text{L}$ Wasser sind $2{,}0\,\text{kg}$, nicht $2000\,\text{kg}$. Pro Sekunde werden also $2{,}0\,\text{kg}$ gehoben.
      - wert: "0.002*9.81*15"
        meldung: |
          Du hast mit dem Volumen statt der Masse gerechnet. Multipliziere mit der Dichte: $m = \rho V$.
hinweise:
  - Welche Masse wird pro Sekunde gehoben?
  - 'Leistung = Hubarbeit pro Sekunde, $P = m g h/t$. Gleichwertig: $P = \rho g h\cdot Q$.'
loesung: |
  **Ansatz:** Pro Sekunde wird die Masse $m = \rho Q\cdot 1\,\text{s} = 2{,}0\,\text{kg}$ um $15\,\text{m}$ gehoben. Die Leistung ist die Hubarbeit pro Sekunde.
  ---
  **Rechnung:** $P = 2{,}0\,\text{kg/s}\cdot 9{,}81\,\text{m/s}^2\cdot 15\,\text{m} = 294\,\text{W}$. Wiederholen: [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
  ---
  **Deutung:** Gleichwertig ist $P = \Delta p\cdot Q$ mit dem Druck $\rho g h = 147\,\text{kPa}$, den die Pumpe erzeugen muss. Druck mal Volumenstrom ist eine Leistung.
```

```aufgabe
id: p9-mix-wasserkraft
titel: Ein Flusskraftwerk
niveau: 2
lernziel: 7
kompetenz: modellieren
angabe: |
  Durch die Turbinen eines Flusskraftwerks fließen $50\,\text{m}^3/\text{s}$ Wasser bei einer Fallhöhe von $20\,\text{m}$. Der Wirkungsgrad ist $85\,\%$. Welche elektrische Leistung liefert es? Gib das Ergebnis in MW an, gerundet auf eine Nachkommastelle.
teile:
  - typ: zahl
    loesung: "0.85*1000*50*9.81*20/1e6"
    einheit: "MW"
    anzeige: '8{,}3'
    toleranz: 0.05
    fehler:
      - wert: "1000*50*9.81*20/1e6"
        meldung: |
          Das ist die Leistung des Wassers. Die elektrische Leistung ist um den Wirkungsgrad kleiner, also mal $0{,}85$.
      - wert: "0.85*50*9.81*20/1e6"
        meldung: |
          $50\,\text{m}^3$ Wasser haben die Masse $50\,000\,\text{kg}$. Multipliziere den Volumenstrom mit der Dichte.
hinweise:
  - 'Pro Sekunde fallen $50\,000\,\text{kg}$ Wasser $20\,\text{m}$ tief. Leistung des Wassers: $P = \rho Q g h$.'
  - Dann mit dem Wirkungsgrad multiplizieren.
loesung: |
  **Ansatz:** Pro Sekunde gibt das Wasser die Lageenergie $\rho Q\, g\, h$ ab. Davon wird der Anteil $\eta = 0{,}85$ zu elektrischer Energie.
  ---
  **Leistung des Wassers:** $1000\,\text{kg/m}^3\cdot 50\,\text{m}^3/\text{s}\cdot 9{,}81\,\text{m/s}^2\cdot 20\,\text{m} = 9{,}81\,\text{MW}$.
  ---
  **Elektrische Leistung:** $0{,}85\cdot 9{,}81\,\text{MW} = 8{,}3\,\text{MW}$. Wiederholen: [Leistung und Wirkungsgrad](/lernen/physik1/arbeit-energie-impuls/leistung-und-wirkungsgrad).
```

```aufgabe
id: p9-mix-eiswuerfel-glas
titel: Der schmelzende Eiswürfel
niveau: 2
lernziel: 4
kompetenz: begruenden
angabe: |
  Ein Eiswürfel mit $27\,\text{g}$ schwimmt in einem randvoll gefüllten Glas Wasser.

  a) Wie viel $\text{cm}^3$ Wasser verdrängt er?

  b) Welches Volumen hat das Schmelzwasser, wenn er geschmolzen ist?

  c) Läuft das Glas über?
teile:
  - typ: zahl
    label: a) verdrängtes Volumen
    loesung: "27"
    einheit: "cm³"
    anzeige: '27'
    fehler:
      - wert: "27/0.917"
        meldung: |
          Das ist das ganze Volumen des Eiswürfels. Ein schwimmender Körper verdrängt aber so viel Wasser, wie er **wiegt**, also $27\,\text{g}$ und damit $27\,\text{cm}^3$.
  - typ: zahl
    label: b) Schmelzwasser
    loesung: "27"
    einheit: "cm³"
    anzeige: '27'
  - typ: auswahl
    label: c) Läuft es über?
    optionen:
      - "Ja"
      - "Nein, der Spiegel bleibt gleich."
      - "Nein, der Spiegel sinkt."
    richtig: [1]
hinweise:
  - Ein schwimmender Körper verdrängt sein Gewicht an Wasser.
  - '$27\,\text{g}$ Wasser haben $27\,\text{cm}^3$.'
loesung: |
  **a)** Schwimmen heißt Auftrieb gleich Gewicht. Der Würfel verdrängt also $27\,\text{g}$ Wasser, das sind $27\,\text{cm}^3$.
  ---
  **b)** Beim Schmelzen bleibt die Masse gleich. $27\,\text{g}$ Schmelzwasser haben $27\,\text{cm}^3$.
  ---
  **c)** Das Schmelzwasser füllt genau das vorher verdrängte Volumen. Der Spiegel bleibt gleich, das Glas läuft nicht über. Wiederholen: [9.5 Schwimmen, Schweben und Sinken](/lernen/physik1/hydro-aeromechanik/schwimmen-schweben-und-sinken).
```

## Prüfungsaufgaben

Diese Aufgaben sind im Stil der schriftlichen Prüfung: mehrere Teilaufgaben, die aufeinander aufbauen, mit einem
Sachzusammenhang. Jede Aufgabe nennt eine Richtzeit. Rechne zuerst ohne Hinweise. Schreib bei jeder Teilaufgabe den
Ansatz in Worten hin, so wie du es in der Prüfung tun würdest.

```aufgabe
id: p9-pruefung-taucher
titel: Tauchgang
niveau: 3
lernziel: 1
kompetenz: anwenden
punkte: 8
angabe: |
  Richtzeit: etwa 15 Minuten.

  Eine Taucherin befindet sich in $20\,\text{m}$ Tiefe in einem Süßwassersee ($p_0 = 1013\,\text{hPa}$).

  a) Wie groß ist der Absolutdruck in dieser Tiefe?

  b) Ihre Lunge enthält dort $6{,}0\,\text{L}$ Luft. Welches Volumen hätte diese Luft an der Oberfläche, wenn sie beim Aufstieg nicht ausatmet? Die Temperatur bleibt gleich, dann gilt für Gase $p\cdot V = \text{konstant}$. Runde auf eine Nachkommastelle.

  c) Ihre Taucherbrille hat eine Glasfläche von $100\,\text{cm}^2$, innen herrscht Luftdruck wie an der Oberfläche. Welche Kraft drückt netto auf das Glas?
teile:
  - typ: zahl
    label: a) Absolutdruck
    loesung: "101300+1000*9.81*20"
    einheit: "Pa"
    anzeige: '297\,500'
  - typ: zahl
    label: b) Volumen an der Oberfläche
    loesung: "6.0*(101300+1000*9.81*20)/101300"
    einheit: "L"
    anzeige: '17{,}6'
  - typ: zahl
    label: c) Kraft auf das Glas
    loesung: "1000*9.81*20*0.01"
    einheit: "N"
    anzeige: '1962'
hinweise:
  - 'a) $p = p_0 + \rho g h$ mit $p_0$ in Pascal.'
  - 'b) $p_1 V_1 = p_2 V_2$ mit dem Absolutdruck in der Tiefe und $p_2 = p_0$.'
  - 'c) Netto wirkt nur der Überdruck; $100\,\text{cm}^2 = 0{,}01\,\text{m}^2$.'
loesung: |
  **a)** $p = 101\,300\,\text{Pa} + 1000\,\text{kg/m}^3\cdot 9{,}81\,\text{m/s}^2\cdot 20\,\text{m} = 297\,500\,\text{Pa} \approx 3\,\text{bar}$.
  ---
  **b)** Für das Gas zählt der Absolutdruck. $V_2 = V_1\cdot\dfrac{p_1}{p_0} = 6{,}0\,\text{L}\cdot\dfrac{297\,500\,\text{Pa}}{101\,300\,\text{Pa}} = 17{,}6\,\text{L}$. Das ist weit mehr als das Lungenvolumen. Deshalb muss man beim Aufsteigen ausatmen. Mehr zu Gasen im Kapitel [Die Gasgesetze](/lernen/physik1/temperatur-waerme-gase/die-gasgesetze).
  ---
  **c)** Überdruck $\Delta p = 196\,200\,\text{Pa}$, also $F = 196\,200\,\text{Pa}\cdot 0{,}01\,\text{m}^2 = 1962\,\text{N}$. Die Maske wird nur deshalb nicht ans Gesicht gepresst, weil man durch die Nase Luft hineinbläst (Druckausgleich).
```

```aufgabe
id: p9-pruefung-ponton
titel: Lastkahn
niveau: 3
lernziel: 4
kompetenz: modellieren
punkte: 8
angabe: |
  Richtzeit: etwa 15 Minuten.

  Ein quaderförmiger Lastkahn ist $20\,\text{m}$ lang, $5{,}0\,\text{m}$ breit und hat leer eine Masse von $30\,\text{t}$. Er fährt auf einem Fluss mit Süßwasser.

  a) Wie tief taucht der leere Kahn ein?

  b) Wie tief taucht er mit $50\,\text{t}$ Ladung ein?

  c) Die Bordwand ist $1{,}5\,\text{m}$ hoch. Welche Ladung in Tonnen könnte er theoretisch höchstens aufnehmen?

  d) Der beladene Kahn aus b) fährt ins Meer ($1025\,\text{kg/m}^3$). Wie tief taucht er dort ein? Runde auf zwei Nachkommastellen.
teile:
  - typ: zahl
    label: a) Tiefgang leer
    loesung: "30000/(1000*20*5)"
    einheit: "m"
    anzeige: '0{,}30'
  - typ: zahl
    label: b) Tiefgang beladen
    loesung: "80000/(1000*20*5)"
    einheit: "m"
    anzeige: '0{,}80'
  - typ: zahl
    label: c) maximale Ladung
    loesung: "(1000*20*5*1.5-30000)/1000"
    einheit: "t"
    anzeige: '120'
  - typ: zahl
    label: d) Tiefgang im Meer
    loesung: "80000/(1025*20*5)"
    einheit: "m"
    anzeige: '0{,}78'
    toleranz: 0.005
hinweise:
  - 'Schwimmbedingung: Masse des verdrängten Wassers gleich Masse von Kahn plus Ladung.'
  - 'Verdrängtes Volumen: $V = 20\,\text{m}\cdot 5\,\text{m}\cdot t$ mit dem Tiefgang $t$.'
loesung: |
  **Ansatz:** Schwimmen heißt $\rho_W\cdot A\cdot t = m_\text{gesamt}$ mit der Grundfläche $A = 100\,\text{m}^2$.
  ---
  **a)** $t = \dfrac{30\,000\,\text{kg}}{1000\,\text{kg/m}^3\cdot 100\,\text{m}^2} = 0{,}30\,\text{m}$.
  ---
  **b)** $t = \dfrac{80\,000\,\text{kg}}{100\,000\,\text{kg/m}} = 0{,}80\,\text{m}$.
  ---
  **c)** Höchstens verdrängt: $100\,\text{m}^2\cdot 1{,}5\,\text{m}\cdot 1000\,\text{kg/m}^3 = 150\,\text{t}$. Ladung: $150\,\text{t} - 30\,\text{t} = 120\,\text{t}$. In der Praxis lässt man einen Sicherheitsabstand, den Freibord.
  ---
  **d)** $t = \dfrac{80\,000\,\text{kg}}{1025\,\text{kg/m}^3\cdot 100\,\text{m}^2} = 0{,}78\,\text{m}$. Im dichteren Salzwasser hebt sich der Kahn um $2\,\text{cm}$.
```

```aufgabe
id: p9-pruefung-wasserleitung
titel: Verengung in einer Wasserleitung
niveau: 3
lernziel: 7
kompetenz: begruenden
punkte: 8
angabe: |
  Richtzeit: etwa 15 Minuten.

  Durch eine waagrechte Wasserleitung fließen $2{,}0\,\text{L/s}$. Der Innendurchmesser verringert sich von $4{,}0\,\text{cm}$ auf $2{,}0\,\text{cm}$. Im weiten Teil herrscht ein Druck von $3{,}0\,\text{bar}$.

  a) Berechne die Strömungsgeschwindigkeiten im weiten und im engen Teil. Runde auf zwei Nachkommastellen.

  b) Berechne den Druck im engen Teil in Pascal.

  c) Begründe, warum der Druck in der Engstelle kleiner sein muss, ohne die Bernoulli-Gleichung zu verwenden.
teile:
  - typ: zahl
    label: a) v im weiten Teil
    loesung: "0.002/(pi*0.02^2)"
    einheit: "m/s"
    anzeige: '1{,}59'
  - typ: zahl
    label: a) v im engen Teil
    loesung: "0.002/(pi*0.01^2)"
    einheit: "m/s"
    anzeige: '6{,}37'
  - typ: zahl
    label: b) Druck im engen Teil
    loesung: "3e5-0.5*1000*((0.002/(pi*0.01^2))^2-(0.002/(pi*0.02^2))^2)"
    einheit: "Pa"
    anzeige: '2{,}81\cdot 10^{5}'
  - typ: text
    label: c) Begründung
    muster: |
      Beim Übergang in die Engstelle wird das Wasser beschleunigt (Kontinuitätsgleichung). Nach Newton braucht jede
      Beschleunigung eine resultierende Kraft in Strömungsrichtung. Diese kann nur aus einem Druckunterschied kommen:
      Der Druck hinter der Wasserportion (im weiten Teil) muss größer sein als vor ihr (im engen Teil).
hinweise:
  - '$v = Q/A$ mit $Q = 0{,}0020\,\text{m}^3/\text{s}$ und $A = \pi r^2$.'
  - 'Waagrecht: $p_2 = p_1 - \tfrac12\rho(v_2^2 - v_1^2)$.'
  - Für c) denke an das zweite Newtonsche Axiom.
loesung: |
  **a)** $v_1 = \dfrac{0{,}0020\,\text{m}^3/\text{s}}{\pi\cdot(0{,}020\,\text{m})^2} = 1{,}59\,\text{m/s}$ und $v_2 = 4 v_1 = 6{,}37\,\text{m/s}$, denn halber Durchmesser heißt ein Viertel der Fläche.
  ---
  **b)** $p_2 = 3{,}0\cdot 10^5\,\text{Pa} - \tfrac12\cdot 1000\,\text{kg/m}^3\cdot(6{,}37^2 - 1{,}59^2)\,\text{m}^2/\text{s}^2 = 3{,}0\cdot 10^5\,\text{Pa} - 19\,000\,\text{Pa} = 2{,}81\cdot 10^5\,\text{Pa}$.
  ---
  **c)** Das Wasser wird in die Engstelle hinein beschleunigt. Beschleunigung braucht eine Kraft, und in einer Strömung liefert sie der Druckunterschied. Also ist der Druck dort kleiner, wohin das Wasser beschleunigt wird.
```

```aufgabe
id: p9-pruefung-kraftwerk
titel: Ein Speicherkraftwerk
niveau: 3
lernziel: 7
kompetenz: modellieren
punkte: 9
angabe: |
  Richtzeit: etwa 20 Minuten.

  Am Fuß einer Staumauer liegt $60\,\text{m}$ unter dem Wasserspiegel eines großen Stausees der Einlauf eines Rohres mit $1{,}2\,\text{m}$ Durchmesser. Am Ende des Rohres strömt das Wasser ins Freie. Reibung wird vernachlässigt.

  a) Wie groß ist der Überdruck des Wassers am Einlauf, solange das Rohr geschlossen ist? Gib ihn in bar an, gerundet auf eine Nachkommastelle.

  b) Mit welcher Geschwindigkeit strömt das Wasser bei offenem Rohr aus, wenn das Rohrende auf der Höhe des Einlaufs liegt? Runde auf eine Nachkommastelle.

  c) Wie groß ist der Volumenstrom? Runde auf ganze $\text{m}^3/\text{s}$.

  d) Welche Leistung trägt dieser Wasserstrom mit sich, also wie viel Bewegungsenergie pro Sekunde? Gib das Ergebnis in MW an, gerundet auf eine Nachkommastelle.
teile:
  - typ: zahl
    label: a) Überdruck
    loesung: "1000*9.81*60/1e5"
    einheit: "bar"
    anzeige: '5{,}9'
    toleranz: 0.05
  - typ: zahl
    label: b) Austrittsgeschwindigkeit
    loesung: "sqrt(2*9.81*60)"
    einheit: "m/s"
    anzeige: '34{,}3'
    toleranz: 0.05
  - typ: zahl
    label: c) Volumenstrom
    loesung: "pi*0.6^2*sqrt(2*9.81*60)"
    einheit: "m³/s"
    anzeige: '39'
    toleranz: 0.5
  - typ: zahl
    label: d) Leistung
    loesung: "0.5*1000*pi*0.6^2*sqrt(2*9.81*60)^3/1e6"
    einheit: "MW"
    anzeige: '22{,}8'
    toleranz: 0.05
hinweise:
  - 'a) Schweredruck $\rho g h$. b) Torricelli, $v = \sqrt{2gh}$.'
  - 'c) $Q = A\cdot v$ mit $A = \pi r^2$, $r = 0{,}60\,\text{m}$.'
  - 'd) Pro Sekunde strömt die Masse $\rho Q$ mit der Geschwindigkeit $v$ aus. Bewegungsenergie pro Sekunde ist $\tfrac12\rho Q v^2$.'
loesung: |
  **a) Ansatz:** Ruhendes Wasser, also Schweredruck. $\rho g h = 1000\cdot 9{,}81\cdot 60\,\text{Pa} = 5{,}89\cdot 10^5\,\text{Pa} = 5{,}9\,\text{bar}$.
  ---
  **b) Ansatz:** Bernoulli zwischen Seeoberfläche und Rohrende, beide bei Luftdruck. $v = \sqrt{2\cdot 9{,}81\,\text{m/s}^2\cdot 60\,\text{m}} = 34{,}3\,\text{m/s}$.
  ---
  **c)** $A = \pi\cdot(0{,}60\,\text{m})^2 = 1{,}13\,\text{m}^2$, also $Q = 1{,}13\,\text{m}^2\cdot 34{,}3\,\text{m/s} = 39\,\text{m}^3/\text{s}$.
  ---
  **d)** $P = \tfrac12\rho Q v^2 = \tfrac12\cdot 1000\,\text{kg/m}^3\cdot 38{,}8\,\text{m}^3/\text{s}\cdot(34{,}3\,\text{m/s})^2 = 22{,}8\,\text{MW}$. Probe: Gleich groß ist $\rho g h\cdot Q = 5{,}89\cdot 10^5\,\text{Pa}\cdot 38{,}8\,\text{m}^3/\text{s}$. Die ganze Lageenergie ist zu Bewegungsenergie geworden. Eine Turbine wandelt sie in elektrische Energie um.
```

```aufgabe
id: p9-pruefung-flugzeug
titel: Ein Kleinflugzeug
niveau: 3
lernziel: 8
kompetenz: modellieren
punkte: 9
angabe: |
  Richtzeit: etwa 20 Minuten.

  Ein Kleinflugzeug hat $1100\,\text{kg}$ Masse und $16{,}2\,\text{m}^2$ Flügelfläche. Die Luft hat $\rho = 1{,}2\,\text{kg/m}^3$.

  a) Beim Start erreichen die Flügel höchstens $c_A = 1{,}4$. Ab welcher Geschwindigkeit kann das Flugzeug abheben? Runde auf eine Nachkommastelle.

  b) Im Reiseflug fliegt es waagrecht mit $55\,\text{m/s}$. Welcher Auftriebsbeiwert ist dafür nötig? Runde auf zwei Nachkommastellen.

  c) Das Produkt aus Widerstandsbeiwert und Stirnfläche ist $c_w A = 0{,}60\,\text{m}^2$. Welche Leistung braucht das Flugzeug im Reiseflug gegen den Luftwiderstand? Gib sie in kW an, gerundet auf eine Nachkommastelle.

  d) Erkläre kurz, warum die Begründung „die Luft muss oben gleichzeitig ankommen“ für den Auftrieb falsch ist.
teile:
  - typ: zahl
    label: a) Abhebegeschwindigkeit
    loesung: "sqrt(2*1100*9.81/(1.4*1.2*16.2))"
    einheit: "m/s"
    anzeige: '28{,}2'
    toleranz: 0.05
  - typ: zahl
    label: b) Auftriebsbeiwert
    loesung: "2*1100*9.81/(1.2*16.2*55^2)"
    anzeige: '0{,}37'
    toleranz: 0.005
  - typ: zahl
    label: c) Leistung
    loesung: "0.5*1.2*0.60*55^3/1000"
    einheit: "kW"
    anzeige: '59{,}9'
    toleranz: 0.05
  - typ: text
    label: d) Begründung
    muster: |
      Es gibt kein Gesetz, das gleiche Laufzeiten verlangt. Messungen zeigen, dass die Luft oben sogar früher ankommt.
      Symmetrische Flügel und flache Flügel liefern ebenfalls Auftrieb, und Flugzeuge fliegen auch auf dem Rücken.
      Entscheidend ist, dass der angestellte Flügel die Luft nach unten ablenkt und dabei oben ein Unterdruck entsteht.
hinweise:
  - 'a) Abheben, wenn $\tfrac12 c_A\rho A v^2 = m g$.'
  - 'b) Dieselbe Gleichung nach $c_A$ umstellen. c) $F_W = \tfrac12 c_w\rho A v^2$, dann $P = F_W v$.'
loesung: |
  **a)** $v = \sqrt{\dfrac{2 m g}{c_A\rho A}} = \sqrt{\dfrac{2\cdot 1100\cdot 9{,}81\,\text{N}}{1{,}4\cdot 1{,}2\,\text{kg/m}^3\cdot 16{,}2\,\text{m}^2}} = 28{,}2\,\text{m/s}$, rund $100\,\text{km/h}$.
  ---
  **b)** $c_A = \dfrac{2 m g}{\rho A v^2} = \dfrac{2\cdot 10\,791\,\text{N}}{1{,}2\,\text{kg/m}^3\cdot 16{,}2\,\text{m}^2\cdot(55\,\text{m/s})^2} = 0{,}37$. Im schnellen Reiseflug genügt ein kleiner Anstellwinkel.
  ---
  **c)** $F_W = \tfrac12\cdot 0{,}60\,\text{m}^2\cdot 1{,}2\,\text{kg/m}^3\cdot(55\,\text{m/s})^2 = 1089\,\text{N}$, also $P = 1089\,\text{N}\cdot 55\,\text{m/s} = 59{,}9\,\text{kW}$.
  ---
  **d)** Gleiche Laufzeiten fordert kein Gesetz, und Messungen widerlegen sie. Der Auftrieb entsteht, weil der Flügel die Luft nach unten umlenkt. Dabei ist der Druck oben kleiner als unten.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die drei wichtigsten Aussagen dieses Kapitels auf, ohne nachzusehen. Vergleiche dann mit der Zusammenfassung darunter.
antwort: |
  Zum Beispiel: (1) Druck ist Kraft pro Fläche, und in einer ruhenden Flüssigkeit wächst er linear mit der Tiefe,
  $p = p_0 + \rho g h$, unabhängig von der Gefäßform. (2) Der Auftrieb ist das Gewicht des verdrängten Fluids, nicht das
  Gewicht des Körpers. Ob ein Körper schwimmt, entscheidet seine mittlere Dichte. (3) In einer Strömung gilt
  $A v = \text{konstant}$ und $p + \tfrac12\rho v^2 + \rho g h = \text{konstant}$. Wo das Fluid schneller wird, sinkt der
  Druck.
```

:::zusammenfassung
- **Druck:** $p = F/A$ mit der Kraft senkrecht zur Fläche, Einheit $1\,\text{Pa} = 1\,\text{N/m}^2$. Druck ist ein
  Skalar, die Druckkraft steht immer senkrecht auf der Fläche. $1\,\text{bar} = 10^5\,\text{Pa}$, $1\,\text{hPa} = 100\,\text{Pa}$.
- **Schweredruck:** $p = p_0 + \rho g h$. Er hängt nur von der Tiefe ab, nicht von der Gefäßform (hydrostatisches
  Paradoxon). Pro $10\,\text{m}$ Wasser kommt etwa $1\,\text{bar}$ dazu. Absolutdruck und Überdruck unterscheiden.
- **Pascal:** Ein äußerer Druck pflanzt sich in einer eingeschlossenen Flüssigkeit überall gleich fort. Hydraulische
  Presse: $F_2/F_1 = A_2/A_1$, die Wege verhalten sich umgekehrt, die Arbeit bleibt gleich.
- **Archimedes:** $F_A = \rho_\text{Fl}\, g\, V_\text{eing}$, das Gewicht des verdrängten Fluids. Ursache ist der
  größere Druck an der Unterseite. Die Tiefe und das Material des Körpers spielen keine Rolle.
- **Schwimmen:** Die mittlere Dichte entscheidet. Ein schwimmender Körper taucht mit dem Anteil
  $\rho_K/\rho_\text{Fl}$ ein, und Auftrieb gleich Gewicht.
- **Luftdruck:** das Gewicht der Luftsäule, etwa $1013\,\text{hPa}$, gemessen mit Barometern. Er nimmt exponentiell ab,
  $p = p_0 e^{-h/H}$ mit $H \approx 8\,\text{km}$, nahe am Boden etwa $1\,\text{hPa}$ pro $8\,\text{m}$.
- **Oberflächenspannung:** Die Oberfläche kostet Energie und zieht sich zusammen, $\sigma = F/l$. Kapillare Steighöhe
  $h = 2\sigma\cos\theta/(\rho g r)$, umgekehrt proportional zum Radius.
- **Strömungen:** Kontinuität $A_1 v_1 = A_2 v_2$ und Bernoulli $p + \tfrac12\rho v^2 + \rho g h = \text{konstant}$. Ein
  Tragflügel lenkt Luft nach unten ab, $F_A = \tfrac12 c_A\rho A v^2$. Widerstand: Stokes $6\pi\eta r v$ bei laminarer,
  $\tfrac12 c_w\rho A v^2$ bei turbulenter Umströmung.
:::

### Die häufigsten Fehler

Jeder Fehler wird von einer Aufgabe in diesem Kapitel gezielt trainiert. Wenn du einen davon bei dir wiedererkennst,
rechne die genannte Aufgabe noch einmal.

1. **Quadratzentimeter wie Zentimeter umrechnen** ($1\,\text{cm}^2 = 0{,}01\,\text{m}^2$ statt $10^{-4}\,\text{m}^2$).
   Training: „Druck unter einem Absatz“ und „Der Reißnagel“.
2. **Masse statt Gewichtskraft in $p = F/A$ einsetzen.** Training: „Der Fakir auf dem Nagelbrett“.
3. **Druck und Kraft verwechseln.** Training: „Auf einem Bein stehen“ und „Wie soll der Ziegel liegen?“.
4. **Überdruck und Absolutdruck verwechseln.** Training: „Druck in 10 m Tiefe“, „Kraft auf das Trommelfell“ und
   „Tauchgang“.
5. **Das Durchmesserverhältnis nicht quadrieren.** Training: „Fehler finden bei einer Presse“, „Spritzdüse“ und
   „Hydraulische Hebebühne“.
6. **Den Auftrieb mit der Dichte des Körpers oder als sein Eigengewicht berechnen.** Training: „Fehler finden beim
   Auftrieb“ und „Eisen oder Aluminium?“.
7. **Glauben, der Auftrieb hänge von der Tiefe ab.** Training: „Hängt der Auftrieb von der Tiefe ab?“.
8. **Mit der Dichte des Materials statt der mittleren Dichte entscheiden.** Training: „Eine hohle Kugel“ und
   „Der Stein im Boot“.
9. **Höhe und Skalenhöhe in verschiedenen Einheiten oder die Faustregel für große Höhen.** Training: „Luftdruck in
   3000 m Höhe“.
10. **Durchmesser statt Radius in Kapillar- oder Stokes-Formel.** Training: „Steighöhe in einer feinen Kapillare“ und
    „Ein Wolkentröpfchen sinkt“.
11. **In Bernoulli die Differenz quadrieren oder $v_1$ vergessen.** Training: „Venturi-Rohr“.
12. **Den Auftrieb am Flügel mit „gleicher Laufzeit“ erklären.** Training: „Welche Erklärung stimmt?“ und „Ein Flugzeug
    auf dem Rücken“.
13. **Geschwindigkeiten in km/h in quadratische Formeln einsetzen.** Training: „Luftwiderstand eines Autos“ und
    „Sturm über dem Flachdach“.
14. **Beim Kugelfall den Auftrieb vergessen.** Training: „Die Zähigkeit eines Öls messen“.

### Lernziel-Selbstcheck

Schätze für jedes Lernziel ein, wie sicher du bist: **1** heißt „noch unsicher“, **2** „mit Nachsehen“, **3** „sicher,
auch in der Prüfung“. Bei einer 1 wiederhole den Abschnitt und rechne seine Aufgabe auf Niveau 3.

1. Druck von Kraft unterscheiden, Drücke berechnen und Einheiten umrechnen.
2. Den Schweredruck herleiten und anwenden, Absolut- und Überdruck unterscheiden, das Paradoxon erklären.
3. Die hydraulische Presse berechnen und mit der Goldenen Regel begründen.
4. Den Auftrieb berechnen, seine Ursache erklären und Dichten durch Wägung bestimmen.
5. Schwimmen, Schweben und Sinken entscheiden, Eintauchtiefen und Nutzlasten berechnen.
6. Den Luftdruck erklären und mit der barometrischen Höhenformel abschätzen.
7. Oberflächenspannung und Kapillarität erklären und Steighöhen berechnen.
8. Kontinuitäts- und Bernoulli-Gleichung auf Rohre, Düsen und Ausfluss anwenden.
9. Den Auftrieb am Flügel richtig erklären und berechnen.
10. Laminare und turbulente Strömung unterscheiden und Widerstände berechnen.

## Mündliche Prüfung

Die folgenden Karten enthalten typische Fragen aus der mündlichen Prüfung. Beantworte jede Frage zuerst laut in ganzen
Sätzen und vergleiche dann mit der Musterantwort und den Kernpunkten.

```karten
- id: p9-k-druck
  frage: Was ist Druck, und worin unterscheidet er sich von einer Kraft?
  antwort: |
    Druck ist Kraft pro Fläche, $p = F/A$, wobei nur der Teil der Kraft senkrecht zur Fläche zählt. Die Einheit ist das
    Pascal, $1\,\text{Pa} = 1\,\text{N/m}^2$; üblich sind auch Hektopascal und bar, $1\,\text{bar} = 10^5\,\text{Pa}$. Eine
    Kraft ist ein Vektor, der Druck in einem ruhenden Fluid ein Skalar. Erst mit einer Fläche entsteht daraus eine Kraft,
    die senkrecht auf der Fläche steht. Beispiel: Auf einem Bein bleibt die Kraft auf den Boden gleich, der Druck verdoppelt sich.
  kernpunkte: ["p = F/A, Kraft senkrecht zur Fläche", "Pa, hPa, bar", "Druck Skalar, Kraft Vektor", "Beispiel gleiche Kraft, anderer Druck"]
- id: p9-k-schweredruck
  frage: Wie hängt der Druck in einer Flüssigkeit von der Tiefe ab? Leite die Formel her.
  antwort: |
    Eine Flüssigkeitssäule mit Grundfläche $A$ und Höhe $h$ hat die Masse $\rho A h$ und das Gewicht $\rho A h g$. Dieses
    Gewicht lastet auf der Fläche $A$, also ist der Schweredruck $\rho g h$. Die Fläche kürzt sich heraus. Mit dem Luftdruck
    an der Oberfläche gilt $p = p_0 + \rho g h$. In Wasser steigt der Druck pro $10\,\text{m}$ um etwa $1\,\text{bar}$.
  kernpunkte: ["Gewicht der Säule durch Fläche", "Fläche kürzt sich", "p = p₀ + ρgh", "10 m Wasser etwa 1 bar"]
- id: p9-k-paradoxon
  frage: Was ist das hydrostatische Paradoxon, und wie löst man es auf?
  antwort: |
    Gefäße mit gleicher Bodenfläche und gleicher Füllhöhe haben gleichen Bodendruck und gleiche Bodenkraft, obwohl sie
    verschieden viel Wasser enthalten. Der Druck hängt nur von der Höhe ab. Die Auflösung: Die schrägen Wände tragen bei
    einem nach oben weiten Gefäß einen Teil des Wassers, bei einem nach oben engen drücken sie zusätzlich nach unten. Eine
    Waage unter dem Gefäß zeigt trotzdem das ganze Gewicht.
  kernpunkte: ["Bodendruck hängt nur von der Füllhöhe ab", "gleiche Bodenkraft trotz verschiedener Wassermenge", "Wände nehmen Kräfte auf"]
- id: p9-k-pascal
  frage: Erkläre die hydraulische Presse. Bekommt man dabei Energie geschenkt?
  antwort: |
    Nach dem Prinzip von Pascal pflanzt sich ein Druck in einer eingeschlossenen Flüssigkeit überall gleich fort. Am großen
    Kolben entsteht daher $F_2 = F_1 A_2/A_1$. Das Öl ist inkompressibel, das verdrängte Volumen ist gleich, also bewegt sich
    der große Kolben nur um $s_2 = s_1 A_1/A_2$. Die Arbeit $F\cdot s$ ist auf beiden Seiten gleich. Das ist die Goldene
    Regel der Mechanik wie bei Hebel und Flaschenzug, Energie wird nicht gewonnen.
  kernpunkte: ["Pascal: Druck überall gleich", "F₂/F₁ = A₂/A₁", "Wege umgekehrt, gleiche Arbeit", "Goldene Regel, Verbindung zu einfachen Maschinen"]
- id: p9-k-archimedes
  frage: Wie lautet das Prinzip von Archimedes, und woher kommt der Auftrieb?
  antwort: |
    Ein eingetauchter Körper erfährt eine Auftriebskraft, die gleich der Gewichtskraft des verdrängten Fluids ist,
    $F_A = \rho_\text{Fl}\, g\, V_\text{eing}$. Ursache ist der Schweredruck: An der Unterseite ist der Druck größer als an
    der Oberseite, die seitlichen Kräfte heben sich auf. Deshalb hängt der Auftrieb nicht von der Tiefe und nicht vom
    Material ab, nur vom verdrängten Volumen und der Dichte des Fluids.
  kernpunkte: ["F_A = Gewicht des verdrängten Fluids", "Druckunterschied unten–oben", "unabhängig von Tiefe und Material"]
- id: p9-k-eigengewicht
  frage: Warum ist es falsch zu sagen, der Auftrieb eines Steins sei so groß wie sein Gewicht? Gib ein Gegenbeispiel.
  antwort: |
    Der Auftrieb ist das Gewicht des verdrängten Wassers, nicht das des Körpers. Ein Stein mit $10\,\text{kg}$ und
    $2700\,\text{kg/m}^3$ verdrängt nur $3{,}7\,\text{L}$ Wasser, sein Auftrieb ist $36\,\text{N}$, sein Gewicht $98\,\text{N}$.
    Deshalb sinkt er. Nur bei einem schwimmenden oder schwebenden Körper sind Auftrieb und Gewicht gleich, und das ist
    eine Folge des Gleichgewichts, keine Definition des Auftriebs.
  kernpunkte: ["Auftrieb hängt vom verdrängten Volumen ab", "Gegenbeispiel sinkender Stein", "Gleichheit nur beim Schwimmen oder Schweben"]
- id: p9-k-schiff
  frage: Warum schwimmt ein Schiff aus Stahl, und warum sinkt es bei einem Leck?
  antwort: |
    Es kommt auf die mittlere Dichte an, also die Gesamtmasse durch das Volumen des ganzen Rumpfs einschließlich der Luft.
    Sie ist kleiner als die Dichte von Wasser. Das Schiff taucht so weit ein, bis das verdrängte Wasser so viel wiegt wie
    das Schiff. Läuft Wasser in den Rumpf, steigt die mittlere Dichte über die von Wasser, und das Schiff sinkt. U-Boote
    und Fische regeln ihre mittlere Dichte mit Tanks oder Schwimmblase.
  kernpunkte: ["mittlere Dichte statt Materialdichte", "verdrängtes Wasser wiegt so viel wie das Schiff", "Leck erhöht mittlere Dichte", "U-Boot, Schwimmblase"]
- id: p9-k-luftdruck
  frage: Wie entsteht der Luftdruck, wie misst man ihn, und warum nimmt er mit der Höhe exponentiell ab?
  antwort: |
    Der Luftdruck ist das Gewicht der Luftsäule über einer Fläche, auf Meereshöhe etwa $1013\,\text{hPa}$. Torricelli maß
    ihn mit einer etwa $760\,\text{mm}$ hohen Quecksilbersäule, heute nimmt man Dosenbarometer oder elektronische Sensoren.
    Weil Luft zusammendrückbar ist, ist ihre Dichte proportional zum Druck. Die Abnahme pro Höhenmeter ist deshalb
    proportional zum Druck selbst, und daraus folgt $p = p_0 e^{-h/H}$ mit $H \approx 8\,\text{km}$. Das ist dieselbe
    Mathematik wie beim radioaktiven Zerfall.
  kernpunkte: ["Gewicht der Luftsäule", "Torricelli, Barometer", "Dichte proportional zum Druck", "exponentiell, H ≈ 8 km"]
- id: p9-k-strohhalm
  frage: Warum kann eine Saugpumpe Wasser nicht höher als etwa 10 m heben?
  antwort: |
    Eine Saugpumpe saugt nicht wirklich. Sie senkt den Druck im Rohr, und der äußere Luftdruck schiebt das Wasser hinein.
    Selbst bei Vakuum im Rohr ist der Druckunterschied höchstens der Luftdruck von etwa $10^5\,\text{Pa}$. Er hält eine
    Wassersäule von $p_0/(\rho g) \approx 10\,\text{m}$. Für tiefere Brunnen braucht man eine Pumpe unten, die drückt.
  kernpunkte: ["Luftdruck schiebt, Pumpe senkt nur den Druck", "höchstens Druckunterschied p₀", "h = p₀/(ρg) ≈ 10 m"]
- id: p9-k-oberflaeche
  frage: Was ist Oberflächenspannung, und warum steigt Wasser in einer dünnen Glasröhre hoch?
  antwort: |
    Teilchen an der Oberfläche haben nach außen keine Nachbarn und werden nach innen gezogen. Eine größere Oberfläche
    kostet deshalb Energie, $\sigma = \Delta E/\Delta A$, und die Oberfläche verhält sich wie eine gespannte Haut. Wasser
    haftet an Glas stärker, als es an sich selbst haftet, und kriecht an der Wand hoch. Am Umfang der Röhre zieht die
    Oberfläche mit $2\pi r\sigma$, bis das Gewicht der Säule gleich groß ist. Daraus folgt $h = 2\sigma/(\rho g r)$: Halber
    Radius, doppelte Höhe.
  kernpunkte: ["Oberflächenteilchen werden nach innen gezogen", "σ als Energie pro Fläche oder Kraft pro Länge", "Adhäsion größer als Kohäsion", "h umgekehrt proportional zu r"]
- id: p9-k-kontinuitaet
  frage: Was sagt die Kontinuitätsgleichung, und woraus folgt sie?
  antwort: |
    In einer inkompressiblen Strömung ohne Zu- und Abflüsse ist der Volumenstrom $Q = A v$ überall gleich, also
    $A_1 v_1 = A_2 v_2$. Wo der Querschnitt kleiner ist, strömt das Fluid schneller. Sie folgt aus der Massenerhaltung:
    Was hineinfließt, muss hinausfließen, und zusammendrücken lässt sich das Fluid nicht. Halber Durchmesser heißt ein
    Viertel der Fläche und vierfache Geschwindigkeit.
  kernpunkte: ["A₁v₁ = A₂v₂", "Massenerhaltung, inkompressibel", "Flächen, nicht Durchmesser"]
- id: p9-k-bernoulli
  frage: Was sagt die Bernoulli-Gleichung, woraus folgt sie, und wo gilt sie nicht?
  antwort: |
    Entlang einer Stromlinie einer idealen Strömung ist $p + \tfrac12\rho v^2 + \rho g h$ konstant. Wo die Strömung schneller
    wird, sinkt der statische Druck. Sie ist der Energieerhaltungssatz pro Volumen, der Druck steht für die Arbeit des
    nachschiebenden Fluids. Man kann den Druckabfall auch mit Newton begründen: Beschleunigung braucht eine Kraft, die
    kommt aus dem Druckunterschied. Sie gilt nicht bei starker Reibung und nicht zum Vergleich verschiedener Strömungen,
    etwa ist die Luft aus einem Föhn schnell, hat aber Umgebungsdruck.
  kernpunkte: ["p + ½ρv² + ρgh = konstant", "Energieerhaltung pro Volumen", "Begründung mit Newton", "Grenzen: Reibung, nur entlang einer Strömung"]
- id: p9-k-fliegen
  frage: Warum fliegt ein Flugzeug? Was ist an der Erklärung mit der gleichen Laufzeit falsch?
  antwort: |
    Der Tragflügel lenkt durch Anstellwinkel und Form die anströmende Luft nach unten ab. Nach dem dritten Newtonschen
    Axiom wirkt eine gleich große Kraft nach oben. Dabei ist der Druck oben kleiner, unten größer, und oben strömt die Luft
    schneller, wie Bernoulli verlangt. Die Laufzeit-Erklärung ist falsch: Kein Gesetz verlangt gleiche Laufzeiten, die Luft
    oben kommt sogar früher an, und symmetrische Flügel tragen auch, sogar im Rückenflug. Rechnet man mit gleicher
    Laufzeit, erhält man nur einen Bruchteil des nötigen Auftriebs. Quantitativ gilt $F_A = \tfrac12 c_A\rho A v^2$.
  kernpunkte: ["Luft wird nach unten abgelenkt, actio gleich reactio", "Unterdruck oben, Bernoulli", "gleiche Laufzeit widerlegt: Messung, Rückenflug", "F_A = ½ c_A ρ A v²"]
- id: p9-k-widerstand
  frage: Welche Arten von Strömungswiderstand gibt es, und was folgt aus der quadratischen Abhängigkeit?
  antwort: |
    Bei kleinen, langsamen Körpern in zähen Fluiden ist die Strömung laminar, der Widerstand folgt Stokes,
    $F_R = 6\pi\eta r v$, also linear in $v$. Bei großen, schnellen Körpern ist sie turbulent, dann gilt
    $F_W = \tfrac12 c_w\rho A v^2$. Doppelte Geschwindigkeit gibt vierfache Kraft und wegen $P = F v$ achtfache Leistung.
    Deshalb steigt der Verbrauch auf der Autobahn stark. Fallende Körper erreichen eine Endgeschwindigkeit, wenn der
    Widerstand das Gewicht ausgleicht.
  kernpunkte: ["laminar: Stokes, linear in v", "turbulent: ½ c_w ρ A v²", "Leistung ∝ v³", "Endgeschwindigkeit"]
- id: p9-k-wolken
  frage: Warum fallen Wolken nicht vom Himmel? Verbinde Hydrodynamik und Meteorologie.
  antwort: |
    Wolkentröpfchen sind sehr klein, etwa $10\,\mu\text{m}$ Radius. Für sie gilt das Gesetz von Stokes, und ihre
    Endgeschwindigkeit $v = 2r^2\rho g/(9\eta)$ ist nur etwa ein Zentimeter pro Sekunde. Schon schwache Aufwinde, wie sie
    beim Aufsteigen warmer Luft entstehen, tragen sie. Erst wenn Tröpfchen zu großen Regentropfen zusammenwachsen, wächst
    das Gewicht mit $r^3$ schneller als der Widerstand, und es regnet. Wie Wolken entstehen, behandelt Kapitel 11 im Abschnitt
    [Luftfeuchtigkeit, Taupunkt, Wolken und Föhn](/lernen/physik1/hauptsaetze-waermekraftmaschinen/luftfeuchtigkeit-taupunkt-wolken-und-foehn).
  kernpunkte: ["Stokes für kleine Tröpfchen", "Endgeschwindigkeit ≈ 1 cm/s", "Aufwinde tragen sie", "Verbindung zu Kapitel 11"]
- id: p9-k-taucher-gas
  frage: Warum muss ein Taucher beim Aufsteigen ausatmen? Verbinde Schweredruck und Gasgesetz.
  antwort: |
    In der Tiefe ist der Druck größer, in $20\,\text{m}$ Wasser etwa $3\,\text{bar}$ absolut. Die Atemluft wird mit diesem
    Druck geatmet. Beim Aufsteigen sinkt der Druck, und nach Boyle-Mariotte, $pV = \text{konstant}$ bei gleicher Temperatur,
    dehnt sich die Luft aus. Aus $6\,\text{L}$ würden an der Oberfläche fast $18\,\text{L}$. Ohne Ausatmen würde die Lunge
    überdehnt. Wichtig ist, mit dem Absolutdruck zu rechnen.
  kernpunkte: ["p = p₀ + ρgh, in 20 m etwa 3 bar", "pV = konstant (Kapitel 10)", "Volumen verdreifacht sich", "Absolutdruck verwenden"]
```
