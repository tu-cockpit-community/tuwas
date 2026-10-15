Diese Formelsammlung fasst den gesamten Stoff der SBP Mathematik 3 kompakt zusammen, geordnet wie die
Kapitel des Kurses. In der schriftlichen Prüfung darfst du eine Schulformelsammlung verwenden. Diese
Seite ersetzt sie nicht, sie zeigt dir aber, **was** du dort finden musst und welche Voraussetzungen
zu jeder Formel gehören. Ganz unten stehen Hinweise zum Taschenrechner.

## Zahlen und Rechenregeln

**Zahlenmengen:** $\N = \{0, 1, 2, \ldots\} \subset \Z \subset \Q \subset \R \subset \C$.
$\Q$ = Brüche $\frac ab$ mit $a, b \in \Z$, $b \neq 0$ (endliche oder periodische Dezimalzahlen).
Irrational: $\sqrt2$, $\pi$, $e$, $\sqrt3$, … (unendlich, nicht periodisch).

| Menge | $+$ | $-$ | $\cdot$ | $:$ (nicht durch 0) |
|---|---|---|---|---|
| $\N$ | ja | nein | ja | nein |
| $\Z$ | ja | ja | ja | nein |
| $\Q$, $\R$ | ja | ja | ja | ja |

**Bruchrechnen:** $\frac ab + \frac cd = \frac{ad + bc}{bd}$, $\quad\frac ab\cdot\frac cd = \frac{ac}{bd}$, $\quad\frac ab : \frac cd = \frac ab\cdot\frac dc$.

**Binomische Formeln:** $(a \pm b)^2 = a^2 \pm 2ab + b^2$, $\quad(a + b)(a - b) = a^2 - b^2$,
$(a \pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3$.

:::formel[Potenzen und Wurzeln]
Für $a, b > 0$ und $r, s \in \R$:
$$a^r a^s = a^{r+s}, \quad \frac{a^r}{a^s} = a^{r-s}, \quad (a^r)^s = a^{rs}, \quad (ab)^r = a^r b^r, \quad a^{-r} = \frac{1}{a^r}, \quad a^0 = 1$$
$$\sqrt[n]{a} = a^{1/n}, \qquad \sqrt[n]{a^m} = a^{m/n}, \qquad \sqrt{a^2} = \lvert a\rvert \ \text{(für alle } a \in \R)$$
:::

:::formel[Logarithmen]
$\log_a x = y \iff a^y = x$ (für $a > 0$, $a \neq 1$, $x > 0$). $\ln = \log_e$, $\lg = \log_{10}$.
$$\log_a(xy) = \log_a x + \log_a y, \quad \log_a\frac xy = \log_a x - \log_a y, \quad \log_a(x^r) = r\log_a x$$
$$\log_a 1 = 0, \quad \log_a a = 1, \quad a^{\log_a x} = x, \quad \text{Basiswechsel: } \log_a x = \frac{\ln x}{\ln a}$$
:::

**Prozent:** $p\,\%$ von $G$ ist $\frac{p}{100}G$. Zunahme um $p\,\%$: Faktor $1 + \frac{p}{100}$, Abnahme:
$1 - \frac{p}{100}$. Mehrere Änderungen **multiplizieren** sich ($+20\,\%$ dann $-20\,\%$: $1{,}2\cdot 0{,}8 = 0{,}96$).

**Betrag:** $\lvert x\rvert = x$ für $x \ge 0$, $-x$ für $x < 0$. $\lvert x - a\rvert$ = Abstand von $x$ und $a$.
$\lvert x - a\rvert < r \iff a - r < x < a + r$. Dreiecksungleichung $\lvert a + b\rvert \le \lvert a\rvert + \lvert b\rvert$.

**Intervalle:** $[a, b]$ abgeschlossen, $(a, b)$ offen, $[a, b)$ halboffen, $(a, \infty)$ unbeschränkt.

## Gleichungen und Ungleichungen

:::formel[Quadratische Gleichungen]
$ax^2 + bx + c = 0$ ($a \neq 0$): $\displaystyle x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.

$x^2 + px + q = 0$: $\displaystyle x_{1,2} = -\frac p2 \pm \sqrt{\frac{p^2}{4} - q}$.

Diskriminante $D = b^2 - 4ac$: $D > 0$ zwei, $D = 0$ eine (doppelte), $D < 0$ keine reelle Lösung
(zwei konjugiert komplexe).

**Vieta** (für $x^2 + px + q$): $x_1 + x_2 = -p$, $\ x_1 x_2 = q$, $\ x^2 + px + q = (x - x_1)(x - x_2)$.
:::

| Typ | Rezept | Achtung |
|---|---|---|
| biquadratisch $ax^4 + bx^2 + c = 0$ | $u = x^2$ substituieren | nur $u \ge 0$ liefert reelle $x = \pm\sqrt u$ |
| Bruchgleichung | Definitionsmenge, mit Hauptnenner multiplizieren | Lösungen mit $D$ vergleichen |
| Wurzelgleichung | Wurzel isolieren, quadrieren | **Probe** (Scheinlösungen) |
| Betragsgleichung | Fallunterscheidung $x \ge a$ / $x < a$ | Lösung muss zum Fall passen |
| Exponentialgleichung $a^x = b$ | logarithmieren: $x = \frac{\ln b}{\ln a}$ | $b > 0$ nötig |
| Logarithmusgleichung | Regeln anwenden, dann $\log_a x = c \iff x = a^c$ | Argumente $> 0$ |

**Ungleichungen:** Multiplikation/Division mit einer **negativen** Zahl dreht das Zeichen um (auch
Division durch $\ln q < 0$ bei $q < 1$!). Quadratische Ungleichung: Nullstellen bestimmen, Parabel
skizzieren. Bruchungleichung: Fallunterscheidung nach dem Vorzeichen des Nenners oder Vorzeichentabelle.

## Gleichungssysteme, Matrizen, Determinanten

**Gauß-Verfahren:** Durch Vertauschen von Zeilen, Multiplizieren mit $\lambda \neq 0$ und Addieren eines
Vielfachen einer Zeile auf Zeilenstufenform bringen, dann rückwärts einsetzen.

:::merke[Lösbarkeit eines LGS]
- Zeile $0 = c$ mit $c \neq 0$: **keine** Lösung.
- Rang $=$ Anzahl der Variablen: **genau eine** Lösung.
- Rang $<$ Anzahl der Variablen (ohne Widerspruch): **unendlich viele**, Parameterdarstellung mit
  (Variablen − Rang) freien Parametern.
- Quadratisches System $A\vec x = \vec b$: eindeutig lösbar $\iff \det A \neq 0$.

Geometrisch: 2 Variablen = Geraden in der Ebene (schneidend, parallel, identisch);
3 Variablen = Ebenen im Raum (Punkt, Gerade, Ebene oder leer).
:::

**Matrizen:** $(A + B)_{ij} = a_{ij} + b_{ij}$, $\ (\lambda A)_{ij} = \lambda a_{ij}$,
$(AB)_{ij} = \sum_k a_{ik} b_{kj}$ (Zeile mal Spalte; $m\times n$ mal $n\times p$ ergibt $m\times p$).
$AB \neq BA$ im Allgemeinen. Transponierte $(A^T)_{ij} = a_{ji}$, $(AB)^T = B^T A^T$. Einheitsmatrix $E$:
$AE = EA = A$. Inverse: $AA^{-1} = A^{-1}A = E$, $(AB)^{-1} = B^{-1}A^{-1}$.

:::formel[Determinanten und Inverse]
$$\det\begin{pmatrix} a & b\\ c & d\end{pmatrix} = ad - bc, \qquad \begin{pmatrix} a & b\\ c & d\end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b\\ -c & a\end{pmatrix}$$
**Sarrus** ($3\times3$): Summe der drei Produkte der Hauptdiagonalen minus Summe der drei Produkte
der Nebendiagonalen:
$$\det A = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}$$
**Entwicklung** nach der 1. Zeile: $\det A = a_{11}D_{11} - a_{12}D_{12} + a_{13}D_{13}$ ($D_{ij}$: Unterdeterminante ohne Zeile $i$, Spalte $j$).

**Cramer:** $x_i = \frac{\det A_i}{\det A}$, wobei in $A_i$ die $i$-te Spalte durch $\vec b$ ersetzt ist ($\det A \neq 0$).

Regeln: $\det(AB) = \det A\cdot\det B$, $\det A^T = \det A$, Zeilentausch ändert das Vorzeichen,
zwei gleiche Zeilen $\Rightarrow \det = 0$.
:::

**Inverse mit Gauß-Jordan:** $(A \mid E)$ umformen, bis links $E$ steht; rechts steht dann $A^{-1}$.

## Funktionen und Wachstum

| Funktion | Form | Eigenschaften |
|---|---|---|
| linear | $f(x) = kx + d$ | Steigung $k = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$, $d = f(0)$ |
| quadratisch | $f(x) = a(x - x_S)^2 + y_S$ | Scheitel $S(x_S\mid y_S)$, $x_S = -\frac{b}{2a}$ |
| Potenz | $f(x) = x^n$ | gerades $n$: symmetrisch zur $y$-Achse; ungerades: zum Ursprung |
| Exponential | $f(x) = c\cdot a^x = c\cdot e^{\lambda x}$ | $\lambda = \ln a$, immer $> 0$ für $c > 0$ |
| Logarithmus | $f(x) = \log_a x$ | Umkehrfunktion von $a^x$, $D = (0, \infty)$ |

**Symmetrie:** gerade $f(-x) = f(x)$, ungerade $f(-x) = -f(x)$.
**Umkehrfunktion:** existiert für streng monotone $f$; $y = f(x)$ nach $x$ auflösen, Variablen tauschen.
Graph an $y = x$ gespiegelt.
**Verschieben/Strecken:** $f(x - c)$ nach rechts, $f(x) + d$ nach oben, $a f(x)$ in $y$-Richtung,
$f(bx)$ in $x$-Richtung mit Faktor $\frac1b$, $-f(x)$ an der $x$-Achse gespiegelt.
**Rationale Funktion** $\frac{p(x)}{q(x)}$: Polstelle wo $q = 0$, $p \neq 0$; hebbare Lücke wo beide $0$
(nach Kürzen). Asymptote für $x\to\pm\infty$: Grad $p <$ Grad $q$: $y = 0$; gleicher Grad: $y = \frac{\text{Leitkoeff. } p}{\text{Leitkoeff. } q}$.

:::formel[Wachstumsmodelle]
| Modell | Formel | Kennzeichen |
|---|---|---|
| linear | $N(t) = N_0 + kt$ | gleiche **Zunahme** pro Zeiteinheit |
| exponentiell | $N(t) = N_0\,a^t = N_0\,e^{\lambda t}$ | gleicher **Faktor** pro Zeiteinheit |
| beschränkt | $N(t) = S - (S - N_0)\,e^{-kt}$ | Annäherung an die Schranke $S$ |

Prozent pro Zeiteinheit: $a = 1 + \frac{p}{100}$, also $p = (a - 1)\cdot 100 = (e^\lambda - 1)\cdot 100$.

Verdopplungszeit $T_2 = \frac{\ln 2}{\lambda} = \frac{\ln 2}{\ln a}$, Halbwertszeit $T_{1/2} = \frac{\ln 2}{k}$ bei $e^{-kt}$.
:::

## Trigonometrie

:::formel[Rechtwinkeliges Dreieck und Einheitskreis]
$\sin\alpha = \frac{\text{Gegenkathete}}{\text{Hypotenuse}}$, $\cos\alpha = \frac{\text{Ankathete}}{\text{Hypotenuse}}$,
$\tan\alpha = \frac{\text{Gegenkathete}}{\text{Ankathete}} = \frac{\sin\alpha}{\cos\alpha}$.
Pythagoras $a^2 + b^2 = c^2$ (und Umkehrung). Steigung $p\,\%$: $\tan\alpha = \frac{p}{100}$.

Einheitskreis: Punkt $(\cos\alpha, \sin\alpha)$. $\sin^2\alpha + \cos^2\alpha = 1$.
Bogenmaß: $x = \frac{\pi}{180°}\,\alpha$, also entspricht $180°$ dem Wert $\pi$.
:::

| $\alpha$ | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ | $180°$ | $270°$ |
|---|---|---|---|---|---|---|---|
| Bogenmaß | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\pi$ | $\frac{3\pi}{2}$ |
| $\sin$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ | $0$ | $-1$ |
| $\cos$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ | $-1$ | $0$ |
| $\tan$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | – | $0$ | – |

**Quadranten:** $\sin(180° - \alpha) = \sin\alpha$, $\cos(180° - \alpha) = -\cos\alpha$,
$\sin(-\alpha) = -\sin\alpha$, $\cos(-\alpha) = \cos\alpha$, $\sin(\alpha + 180°) = -\sin\alpha$.
Vorzeichen: $\sin > 0$ im I. und II., $\cos > 0$ im I. und IV., $\tan > 0$ im I. und III. Quadranten.

:::formel[Allgemeines Dreieck]
Sinussatz: $\dfrac{a}{\sin\alpha} = \dfrac{b}{\sin\beta} = \dfrac{c}{\sin\gamma}$ (Achtung: $\sin\beta = s$ hat
zwei Lösungen $\beta$ und $180° - \beta$).

Kosinussatz: $c^2 = a^2 + b^2 - 2ab\cos\gamma$.

Fläche: $A = \frac12 ab\sin\gamma = \frac12 c\,h_c$. Winkelsumme $180°$.
:::

**Additionstheoreme:** $\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta$,
$\cos(\alpha \pm \beta) = \cos\alpha\cos\beta \mp \sin\alpha\sin\beta$.
Doppelwinkel: $\sin 2\alpha = 2\sin\alpha\cos\alpha$, $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha$.

**Allgemeine Sinusfunktion** $f(x) = a\sin(b(x - c)) + d$: Amplitude $\lvert a\rvert$, Periode $\frac{2\pi}{b}$,
Verschiebung $c$ nach rechts, Mittellinie $y = d$. $\sin$, $\cos$: Periode $2\pi$; $\tan$: Periode $\pi$.

**Trigonometrische Gleichungen** (alle Lösungen, $k \in \Z$):
$\sin x = s$: $x = x_0 + 2k\pi$ oder $x = \pi - x_0 + 2k\pi$ ($x_0 = \arcsin s$).
$\cos x = c$: $x = \pm x_0 + 2k\pi$ ($x_0 = \arccos c$). $\tan x = t$: $x = x_0 + k\pi$.

## Vektoren

:::formel[Rechnen mit Vektoren]
$\overrightarrow{AB} = B - A$. Betrag $\lvert\vec a\rvert = \sqrt{a_1^2 + a_2^2 + a_3^2}$, Einheitsvektor $\vec a_0 = \frac{\vec a}{\lvert\vec a\rvert}$.

Mittelpunkt $M_{AB} = \frac12(A + B)$, Schwerpunkt $S = \frac13(A + B + C)$, Teilungspunkt mit
$\overline{AT} : \overline{TB} = m : n$: $T = A + \frac{m}{m+n}\overrightarrow{AB}$.
Parallelogramm $ABCD$: $D = A + \overrightarrow{BC} = A + C - B$, Diagonalen halbieren einander.
:::

:::formel[Skalarprodukt und Kreuzprodukt]
$\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3 = \lvert\vec a\rvert\,\lvert\vec b\rvert\cos\varphi$ (eine **Zahl**).
$$\cos\varphi = \frac{\vec a\cdot\vec b}{\lvert\vec a\rvert\,\lvert\vec b\rvert}, \qquad \vec a \perp \vec b \iff \vec a\cdot\vec b = 0$$
Normalvektor in $\R^2$: zu $\begin{pmatrix} a_1\\ a_2\end{pmatrix}$ ist $\begin{pmatrix} -a_2\\ a_1\end{pmatrix}$ normal.

Projektion von $\vec b$ auf $\vec a$: $\vec b_a = \frac{\vec a\cdot\vec b}{\lvert\vec a\rvert^2}\,\vec a$.

Kreuzprodukt (nur $\R^3$, ein **Vektor** normal auf $\vec a$ und $\vec b$):
$$\vec a\times\vec b = \begin{pmatrix} a_2b_3 - a_3b_2\\ a_3b_1 - a_1b_3\\ a_1b_2 - a_2b_1\end{pmatrix}, \qquad \lvert\vec a\times\vec b\rvert = \lvert\vec a\rvert\,\lvert\vec b\rvert\sin\varphi$$
Parallelogrammfläche $\lvert\vec a\times\vec b\rvert$, Dreieck $\frac12\lvert\vec a\times\vec b\rvert$; in $\R^2$: $A_\triangle = \frac12\lvert a_1b_2 - a_2b_1\rvert$.
Spatvolumen $V = \lvert(\vec a\times\vec b)\cdot\vec c\rvert = \lvert\det(\vec a, \vec b, \vec c)\rvert$.
:::

**Linear abhängig:** $\lambda_1\vec a_1 + \ldots + \lambda_n\vec a_n = \vec 0$ hat eine Lösung mit nicht allen $\lambda_i = 0$.
Zwei Vektoren: parallel. Drei Vektoren in $\R^3$: komplanar $\iff \det = 0$.

## Analytische Geometrie

:::formel[Geraden und Ebenen]
Gerade: $g\colon X = P + t\,\vec r$. In $\R^2$ auch $\vec n\cdot X = \vec n\cdot P$, also $ax + by = c$ mit $\vec n = (a, b)$,
oder $y = kx + d$ mit $k = \frac{r_2}{r_1}$.

Ebene: $\varepsilon\colon X = P + s\,\vec u + t\,\vec v$; Normalvektor $\vec n = \vec u\times\vec v$;
Koordinatenform $ax + by + cz = d$ mit $\vec n = (a, b, c)$ und $d = \vec n\cdot P$.

**Hesse’sche Normalform / Abstände:**
$$d(Q, g) = \frac{\lvert a x_Q + b y_Q - c\rvert}{\sqrt{a^2 + b^2}}, \qquad d(Q, \varepsilon) = \frac{\lvert a x_Q + b y_Q + c z_Q - d\rvert}{\sqrt{a^2 + b^2 + c^2}}$$
Lotfußpunkt: $F = Q - \lambda\vec n$ mit $\lambda = \frac{\vec n\cdot Q - d}{\lvert\vec n\rvert^2}$.
:::

**Lage zweier Geraden im Raum:** Richtungsvektoren parallel? Ja: identisch oder echt parallel (Punktprobe).
Nein: Gleichsetzen; lösbar = schneidend, unlösbar = **windschief**.
**Gerade–Ebene:** Geradenpunkt in Koordinatenform einsetzen: eine Lösung = Schnittpunkt, $0 = 0$ = Gerade liegt
in der Ebene, $0 = c \neq 0$ = parallel.
**Winkel:** zwischen Geraden $\cos\varphi = \frac{\lvert\vec r_1\cdot\vec r_2\rvert}{\lvert\vec r_1\rvert\lvert\vec r_2\rvert}$; zwischen Ebenen über die
Normalvektoren; Gerade–Ebene: $\sin\varphi = \frac{\lvert\vec n\cdot\vec r\rvert}{\lvert\vec n\rvert\lvert\vec r\rvert}$.

:::formel[Kreis und Kugel]
Kreis: $(x - m_1)^2 + (y - m_2)^2 = r^2$. Aus $x^2 + y^2 + ax + by + c = 0$ durch quadratisches Ergänzen.
Tangente im Kreispunkt $P$: $(P - M)\cdot(X - P) = 0$, d. h. $\overrightarrow{MP}$ ist Normalvektor.

Gerade und Kreis: einsetzen, quadratische Gleichung; $D > 0$ Sekante, $D = 0$ Tangente, $D < 0$ Passante
(oder: Abstand $d(M, g)$ mit $r$ vergleichen).

Kugel: $(x - m_1)^2 + (y - m_2)^2 + (z - m_3)^2 = r^2$.
Schnitt Kugel–Ebene bei $d = d(M, \varepsilon) < r$: Schnittkreis mit Radius $\rho = \sqrt{r^2 - d^2}$, Mittelpunkt = Lotfußpunkt von $M$.
:::

## Folgen, Reihen, Finanzmathematik

:::formel[Arithmetisch und geometrisch]
| | arithmetisch | geometrisch |
|---|---|---|
| Definition | $a_{n+1} - a_n = d$ | $\frac{a_{n+1}}{a_n} = q$ |
| Glied | $a_n = a_1 + (n - 1)d$ | $a_n = a_1 q^{n-1}$ |
| Summe | $s_n = \frac n2(a_1 + a_n)$ | $s_n = a_1\frac{q^n - 1}{q - 1}$ ($q \neq 1$) |

Unendliche geometrische Reihe: $\sum_{n=0}^{\infty} a_1 q^n = \frac{a_1}{1 - q}$ für $\lvert q\rvert < 1$, sonst divergent.

Summen: $\sum_{k=1}^n k = \frac{n(n+1)}{2}$, $\ \sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$, $\ \sum_{k=1}^n (2k - 1) = n^2$.
:::

**Finanzmathematik** ($q = 1 + \frac{i}{100}$): Zinseszins $K_n = K_0 q^n$, Barwert $K_0 = \frac{K_n}{q^n}$.
Nachschüssige Rente (Rate $R$ am Periodenende): Endwert $E = R\frac{q^n - 1}{q - 1}$, Barwert $B = \frac{E}{q^n}$.
Vorschüssig: jeweils zusätzlich $\cdot q$. Kredit: Barwert aller Raten = Kreditsumme.

**Vollständige Induktion:** (1) Anfang: Aussage für $n_0$ prüfen. (2) Voraussetzung: gilt für ein $n$.
(3) Schritt: daraus für $n + 1$ folgern.

## Grenzwerte und Stetigkeit

:::definition[Grenzwert einer Folge]
$\lim_{n\to\infty} a_n = a \iff$ für jedes $\varepsilon > 0$ gibt es ein $N$, sodass $\lvert a_n - a\rvert < \varepsilon$ für alle $n \ge N$.
:::

- Konvergent $\Rightarrow$ beschränkt; der Grenzwert ist eindeutig.
- **Monotoniekriterium:** monoton und beschränkt $\Rightarrow$ konvergent (Vollständigkeit von $\R$).
- **Grenzwertsätze** (wenn $a_n \to a$, $b_n \to b$): $a_n \pm b_n \to a \pm b$, $a_n b_n \to ab$, $\frac{a_n}{b_n} \to \frac ab$ ($b \neq 0$).
- **Standardgrenzwerte:** $\frac1n \to 0$, $q^n \to 0$ für $\lvert q\rvert < 1$, $\sqrt[n]{n} \to 1$, $\sqrt[n]{a} \to 1$ ($a > 0$),
  $\left(1 + \frac1n\right)^n \to e$, $\left(1 + \frac xn\right)^n \to e^x$, $\frac{n^k}{a^n} \to 0$ ($a > 1$).
- **Rationale Folgen:** durch die höchste Nennerpotenz kürzen. Gleicher Grad: Quotient der Leitkoeffizienten.
- **Monotonie zeigen:** Vorzeichen von $a_{n+1} - a_n$ (oder $\frac{a_{n+1}}{a_n}$ mit 1 vergleichen, wenn $a_n > 0$).
- Harmonische Reihe $\sum\frac1n$ divergiert. Notwendig für Konvergenz einer Reihe: $a_n \to 0$.

:::definition[Stetigkeit]
$f$ ist stetig in $x_0$, wenn $\lim_{x\to x_0} f(x) = f(x_0)$; d. h. beide einseitigen Grenzwerte
existieren und stimmen mit $f(x_0)$ überein. ($\varepsilon$-$\delta$: für jedes $\varepsilon > 0$ gibt es
$\delta > 0$ mit $\lvert x - x_0\rvert < \delta \Rightarrow \lvert f(x) - f(x_0)\rvert < \varepsilon$.)
:::

Unstetigkeiten: **Sprung** (einseitige Grenzwerte verschieden), **Pol** (Grenzwert unendlich),
**hebbar** (Grenzwert existiert, aber $\ne f(x_0)$ oder $f(x_0)$ undefiniert).
Standardgrenzwerte: $\lim_{x\to0}\frac{\sin x}{x} = 1$, $\lim_{x\to0}\frac{e^x - 1}{x} = 1$, $\lim_{x\to\infty}\frac{\ln x}{x} = 0$.

:::satz[Sätze über stetige Funktionen auf einem abgeschlossenen Intervall]
- **Nullstellensatz:** $f$ stetig, $f(a)$ und $f(b)$ mit verschiedenem Vorzeichen $\Rightarrow$ es gibt $\xi \in (a, b)$ mit $f(\xi) = 0$.
- **Zwischenwertsatz:** $f$ nimmt jeden Wert zwischen $f(a)$ und $f(b)$ an.
- **Satz vom Maximum und Minimum:** $f$ nimmt auf $[a, b]$ ein Maximum und ein Minimum an.
- **Bisektion:** Intervall halbieren, Teilintervall mit Vorzeichenwechsel behalten; Fehler nach $n$ Schritten $\le \frac{b - a}{2^n}$.
:::

## Differentialrechnung

:::definition[Ableitung]
$$f'(x_0) = \lim_{h\to0}\frac{f(x_0 + h) - f(x_0)}{h}$$
(Differentialquotient; Differenzenquotient $\frac{f(b) - f(a)}{b - a}$ = mittlere Änderungsrate).
Differenzierbar $\Rightarrow$ stetig, aber nicht umgekehrt (Beispiel $\lvert x\rvert$ bei 0: einseitige Ableitungen $-1$ und $1$).
:::

| $f(x)$ | $f'(x)$ | | $f(x)$ | $f'(x)$ |
|---|---|---|---|---|
| $x^n$ ($n \in \R$) | $n x^{n-1}$ | | $\sin x$ | $\cos x$ |
| $e^x$ | $e^x$ | | $\cos x$ | $-\sin x$ |
| $a^x$ | $a^x\ln a$ | | $\tan x$ | $\frac{1}{\cos^2 x} = 1 + \tan^2 x$ |
| $\ln x$ | $\frac1x$ | | $\sqrt x$ | $\frac{1}{2\sqrt x}$ |
| $\log_a x$ | $\frac{1}{x\ln a}$ | | $\frac1x$ | $-\frac{1}{x^2}$ |

:::formel[Ableitungsregeln]
Summe/Faktor: $(af + bg)' = af' + bg'$. Produkt: $(fg)' = f'g + fg'$.
Quotient: $\left(\frac fg\right)' = \frac{f'g - fg'}{g^2}$. Kette: $\big(f(g(x))\big)' = f'(g(x))\cdot g'(x)$.

Tangente in $x_0$: $y = f(x_0) + f'(x_0)(x - x_0)$. Normale: Steigung $-\frac{1}{f'(x_0)}$.
:::

:::merke[Kurvendiskussion]
1. Definitionsmenge, Symmetrie, Nullstellen ($f = 0$), Verhalten an den Rändern/Asymptoten.
2. Extremstellen: $f'(x_0) = 0$ und $f''(x_0) < 0$ Maximum, $f''(x_0) > 0$ Minimum (oder Vorzeichenwechsel von $f'$).
3. Monotonie: $f' > 0$ wachsend, $f' < 0$ fallend.
4. Wendestellen: $f''(x_0) = 0$ und Vorzeichenwechsel von $f''$ (bzw. $f'''(x_0) \neq 0$). $f'' > 0$ linksgekrümmt (konvex), $f'' < 0$ rechtsgekrümmt.
5. Global: lokale Extrema mit Randwerten bzw. Grenzwerten vergleichen.
:::

:::satz[Mittelwertsatz und Folgerungen]
**Rolle:** $f$ stetig auf $[a, b]$, differenzierbar auf $(a, b)$, $f(a) = f(b)$ $\Rightarrow$ es gibt $\xi \in (a, b)$ mit $f'(\xi) = 0$.

**Mittelwertsatz:** gleiche Voraussetzungen ohne $f(a) = f(b)$ $\Rightarrow$ $f'(\xi) = \frac{f(b) - f(a)}{b - a}$ für ein $\xi \in (a, b)$.

Folgerungen: $f' > 0$ auf einem Intervall $\Rightarrow$ streng wachsend; $f' = 0$ $\Rightarrow$ konstant.
:::

**De l'Hospital:** Bei $\frac00$ oder $\frac\infty\infty$: $\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}$, falls der rechte Grenzwert existiert.
**Newton-Verfahren:** $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$. **Linearisierung:** $f(x) \approx f(x_0) + f'(x_0)(x - x_0)$.
**Taylorpolynom** 2. Grades: $f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2$.
**Physik:** Weg $s(t)$, Geschwindigkeit $v = s'$, Beschleunigung $a = v' = s''$.

## Integralrechnung

| $f(x)$ | Stammfunktion $F(x)$ | | $f(x)$ | Stammfunktion $F(x)$ |
|---|---|---|---|---|
| $x^n$ ($n \neq -1$) | $\frac{x^{n+1}}{n+1}$ | | $\sin x$ | $-\cos x$ |
| $\frac1x$ | $\ln\lvert x\rvert$ | | $\cos x$ | $\sin x$ |
| $e^{kx}$ | $\frac1k e^{kx}$ | | $a^x$ | $\frac{a^x}{\ln a}$ |

(jeweils $+\,C$)

:::formel[Hauptsatz und Rechenregeln]
**Hauptsatz:** $f$ stetig auf $[a, b]$, $F' = f$: $\displaystyle\int_a^b f(x)\,\dd x = F(b) - F(a)$.
Integralfunktion $I(x) = \int_a^x f(t)\,\dd t$ hat die Ableitung $I'(x) = f(x)$.

$\int_a^b (cf + g) = c\int_a^b f + \int_a^b g$, $\quad\int_a^b f = -\int_b^a f$, $\quad\int_a^b f = \int_a^c f + \int_c^b f$.

**Substitution:** $\int f(g(x))\,g'(x)\,\dd x = \int f(u)\,\dd u$ mit $u = g(x)$ (Grenzen mit umrechnen).
**Partielle Integration:** $\int u\,v'\,\dd x = u\,v - \int u'\,v\,\dd x$.
:::

**Fläche:** Integral ist eine Flächen**bilanz**. Fläche zwischen $f$ und $x$-Achse: an den Nullstellen
aufteilen, Beträge addieren. Zwischen zwei Kurven: $A = \int_a^b \lvert f(x) - g(x)\rvert\,\dd x$, Grenzen = Schnittstellen.
**Rotationskörper** um die $x$-Achse: $V = \pi\int_a^b f(x)^2\,\dd x$.
**Mittelwert** von $f$ auf $[a, b]$: $\bar f = \frac{1}{b - a}\int_a^b f(x)\,\dd x$ (Mittelwertsatz der Integralrechnung: $\bar f = f(\xi)$ für stetiges $f$).
**Weg** aus Geschwindigkeit: $s = \int_{t_1}^{t_2} v(t)\,\dd t$. Arbeit $W = \int F(s)\,\dd s$.

:::formel[Riemann-Summen und uneigentliche Integrale]
Zerlegung von $[a, b]$ in $n$ Teile der Breite $\Delta x = \frac{b - a}{n}$:
Untersumme $U_n = \sum m_i\,\Delta x$ (Minimum je Teil), Obersumme $O_n = \sum M_i\,\Delta x$ (Maximum je Teil).
Integrierbar, wenn $\sup U = \inf O$. Stetige und monotone Funktionen sind integrierbar; die
Dirichlet-Funktion nicht. Für monotones $f$: $O_n - U_n = \lvert f(b) - f(a)\rvert\,\Delta x$.

Uneigentlich: $\int_a^\infty f\,\dd x = \lim_{b\to\infty}\int_a^b f\,\dd x$. $\int_1^\infty \frac{1}{x^p}\,\dd x$ konvergiert genau für $p > 1$ (Wert $\frac{1}{p-1}$).

Trapezregel: $\int_a^b f \approx \frac{\Delta x}{2}\big(f(x_0) + 2f(x_1) + \ldots + 2f(x_{n-1}) + f(x_n)\big)$.
Simpson ($n$ gerade): $\frac{\Delta x}{3}\big(f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \ldots + 4f(x_{n-1}) + f(x_n)\big)$.
:::

## Komplexe Zahlen

:::formel[Darstellungen]
$z = a + bi$, $i^2 = -1$, $\operatorname{Re} z = a$, $\operatorname{Im} z = b$. Konjugiert $\bar z = a - bi$, $z\bar z = a^2 + b^2$.

Betrag $r = \lvert z\rvert = \sqrt{a^2 + b^2}$. Argument $\varphi$ mit $\cos\varphi = \frac ar$, $\sin\varphi = \frac br$
(Quadrant beachten! $\tan\varphi = \frac ba$ allein reicht nicht).

Polarform $z = r(\cos\varphi + i\sin\varphi) = r\,e^{i\varphi}$; zurück: $a = r\cos\varphi$, $b = r\sin\varphi$.
:::

| Operation | algebraisch | polar |
|---|---|---|
| $z_1 \pm z_2$ | $(a_1 \pm a_2) + (b_1 \pm b_2)i$ | – |
| $z_1 z_2$ | $(a_1a_2 - b_1b_2) + (a_1b_2 + a_2b_1)i$ | $r_1r_2$, $\varphi_1 + \varphi_2$ |
| $\frac{z_1}{z_2}$ | mit $\bar z_2$ erweitern | $\frac{r_1}{r_2}$, $\varphi_1 - \varphi_2$ |
| $z^n$ | (binomisch) | $r^n$, $n\varphi$ (Moivre) |

**$n$-te Wurzeln** von $w = R(\cos\psi + i\sin\psi)$: $z_k = \sqrt[n]{R}\left(\cos\frac{\psi + 2k\pi}{n} + i\sin\frac{\psi + 2k\pi}{n}\right)$,
$k = 0, \ldots, n-1$ (regelmäßiges $n$-Eck). Potenzen von $i$: Periode 4 ($i, -1, -i, 1$).
**Quadratische Gleichung** mit $D < 0$: $x_{1,2} = \frac{-b \pm i\sqrt{-D}}{2a}$ (konjugiert komplex).
Multiplikation mit $z$ = Drehstreckung (Drehung um $\arg z$, Streckung um $\lvert z\rvert$).

## Wahrscheinlichkeit

**Laplace:** $P(A) = \frac{\text{günstige}}{\text{mögliche}}$. $P(\bar A) = 1 - P(A)$.
**Additionssatz:** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

:::formel[Kombinatorik]
| Auswahl von $k$ aus $n$ | mit Reihenfolge | ohne Reihenfolge |
|---|---|---|
| ohne Wiederholung | $\frac{n!}{(n-k)!}$ | $\binom nk = \frac{n!}{k!\,(n-k)!}$ |
| mit Wiederholung | $n^k$ | $\binom{n+k-1}{k}$ |

Permutationen von $n$ Objekten: $n!$. Produktregel: Anzahlen der Stufen multiplizieren.
:::

:::formel[Bedingte Wahrscheinlichkeit]
$P(A\mid B) = \frac{P(A\cap B)}{P(B)}$. Multiplikation: $P(A\cap B) = P(B)\,P(A\mid B)$.
Unabhängig $\iff P(A\cap B) = P(A)\,P(B)$.

Totale Wahrscheinlichkeit: $P(B) = P(A)P(B\mid A) + P(\bar A)P(B\mid\bar A)$.
**Bayes:** $P(A\mid B) = \frac{P(A)\,P(B\mid A)}{P(A)P(B\mid A) + P(\bar A)P(B\mid\bar A)}$.

Baumdiagramm: Wahrscheinlichkeiten entlang eines Pfades multiplizieren, Pfade addieren.
:::

**Zufallsvariable** $X$ mit Werten $x_i$: $E(X) = \mu = \sum x_i\,P(X = x_i)$,
$V(X) = \sigma^2 = \sum (x_i - \mu)^2 P(X = x_i) = E(X^2) - \mu^2$, $\sigma = \sqrt{V(X)}$. Faires Spiel: $E(\text{Gewinn}) = 0$.

:::formel[Verteilungen]
**Binomial** $X \sim B(n, p)$ ($n$ unabhängige Versuche, Trefferwahrscheinlichkeit $p$):
$$P(X = k) = \binom nk p^k (1 - p)^{n-k}, \qquad \mu = np, \qquad \sigma = \sqrt{np(1 - p)}$$
„Mindestens 1“: $1 - (1 - p)^n$. „Mindestens $k$“: $1 - P(X \le k - 1)$.

**Hypergeometrisch** (Ziehen ohne Zurücklegen, $N$ Stück, davon $M$ „markiert“, $n$ gezogen):
$P(X = k) = \frac{\binom Mk\binom{N-M}{n-k}}{\binom Nn}$, $\ \mu = n\frac MN$.

**Normalverteilung** $N(\mu, \sigma)$: $P(X \le x) = \Phi\left(\frac{x - \mu}{\sigma}\right)$, $\Phi(-z) = 1 - \Phi(z)$,
$P(\mu - z\sigma \le X \le \mu + z\sigma) = 2\Phi(z) - 1$.
:::

| Umgebung | $\mu \pm \sigma$ | $\mu \pm 2\sigma$ | $\mu \pm 3\sigma$ | $\mu \pm 1{,}96\sigma$ | $\mu \pm 2{,}58\sigma$ |
|---|---|---|---|---|---|
| Wahrscheinlichkeit | $68{,}3\,\%$ | $95{,}4\,\%$ | $99{,}7\,\%$ | $95\,\%$ | $99\,\%$ |

**Normalapproximation** der Binomialverteilung (Faustregel $\sigma^2 = np(1-p) > 9$):
$P(X \le k) \approx \Phi\left(\frac{k + 0{,}5 - \mu}{\sigma}\right)$ (Stetigkeitskorrektur).

## Statistik

**Häufigkeiten:** absolut $H_i$, relativ $h_i = \frac{H_i}{n}$, kumuliert = Summe bis zur Klasse $i$.

:::formel[Lage und Streuung]
Arithmetisches Mittel $\bar x = \frac1n\sum x_i$; gewichtet $\bar x = \frac{\sum g_i x_i}{\sum g_i}$.
Geometrisches Mittel (Wachstumsfaktoren) $\bar q = \sqrt[n]{q_1 q_2\cdots q_n}$.
**Median:** mittlerer Wert der geordneten Liste (bei geradem $n$: Mittel der beiden mittleren). Robust gegen Ausreißer.
Modus: häufigster Wert.

Spannweite $x_{\max} - x_{\min}$. Quartile $Q_1$, $Q_3$ (Mediane der unteren/oberen Hälfte),
$IQR = Q_3 - Q_1$. Ausreißer: außerhalb von $[Q_1 - 1{,}5\,IQR;\ Q_3 + 1{,}5\,IQR]$.

Varianz $s^2 = \frac1n\sum (x_i - \bar x)^2 = \overline{x^2} - \bar x^2$ (Stichprobenvarianz mit $\frac{1}{n-1}$).
Standardabweichung $s = \sqrt{s^2}$, Variationskoeffizient $\frac{s}{\bar x}$.
:::

**Boxplot:** Box von $Q_1$ bis $Q_3$ mit Strich beim Median, Whisker bis zum kleinsten/größten Wert, der
kein Ausreißer ist; Ausreißer als Punkte.

:::formel[Regression und Korrelation]
Regressionsgerade $y = kx + d$ (Methode der kleinsten Quadrate):
$$k = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sum (x_i - \bar x)^2} = \frac{s_{xy}}{s_x^2}, \qquad d = \bar y - k\bar x$$
Korrelationskoeffizient $r = \frac{s_{xy}}{s_x s_y} = \frac{\sum (x_i - \bar x)(y_i - \bar y)}{\sqrt{\sum (x_i - \bar x)^2\sum (y_i - \bar y)^2}}$, $-1 \le r \le 1$.
$r$ nahe $\pm1$: starker linearer Zusammenhang. **Korrelation ist keine Kausalität.**
:::

**Konfidenzintervall** für einen Anteil (Ausblick, $n$ groß): $\hat p \pm z\sqrt{\frac{\hat p(1 - \hat p)}{n}}$ mit $z = 1{,}96$ für $95\,\%$.

## Taschenrechner-Hinweise

Erlaubt ist ein ein- oder zweizeiliger, **nicht programmierbarer, nicht grafikfähiger** Rechner (z. B.
Casio fx-82 oder fx-991 ohne CAS, TI-30). Lerne die Tasten **deines** Modells vor der Prüfung.

:::achtung[Winkelmodus]
Vor jeder Trigonometrie-Aufgabe den Modus prüfen: **DEG** (Grad) für Dreiecke und Vermessung,
**RAD** (Bogenmaß) für Funktionen, Ableitungen, Integrale und trigonometrische Gleichungen im
Bogenmaß. $\sin 30 = 0{,}5$ nur in DEG; in RAD ist $\sin 30 \approx -0{,}988$. Das ist der häufigste
Taschenrechnerfehler.
:::

| Aufgabe | Vorgehen |
|---|---|
| Logarithmus zur Basis $a$ | $\log_a x = \frac{\ln x}{\ln a}$ (oder Taste $\log_\square$) |
| $\binom nk$, $n!$ | Taste **nCr** bzw. **x!** (z. B. `50 nCr 7`) |
| Binomialverteilung | einzeln $\binom nk p^k(1-p)^{n-k}$; manche Modelle haben **Bpd/Bcd** im Distributionsmenü |
| Normalverteilung | standardisieren und $\Phi(z)$ aus der Tabelle, oder Menü **Distribution** (Ncd) |
| Statistik | Modus **STAT**, Daten eingeben, $\bar x$, $\sigma_x$ (Division durch $n$) bzw. $s_x$ ($n - 1$) ablesen; Regression im Modus $y = a + bx$ ($a$ ist dann der Achsenabschnitt!) |
| Gleichungssysteme | nur zur **Kontrolle** (EQN-Modus); in der Prüfung zählt der Rechenweg |
| komplexe Zahlen | CMPLX-Modus (fx-991): $a + bi \leftrightarrow r\angle\varphi$ umrechnen, zur Kontrolle |
| Arkusfunktionen | $\sin^{-1}$ liefert nur einen Winkel in $[-90°, 90°]$; den zweiten ($180° - \alpha$) selbst ergänzen |

**Rundung:** Zwischenergebnisse im Speicher (ANS, STO) behalten und erst das Endergebnis runden,
typischerweise auf 2 bis 4 signifikante Stellen und mit Einheit. Wahrscheinlichkeiten auf mindestens
4 Nachkommastellen angeben. Exakte Werte ($\sqrt2$, $\frac{\ln 2}{0{,}055}$) zuerst hinschreiben,
dann den Dezimalwert.
