# Mathe-Widgets: Props

Alle Props sind optional. Fehlende Werte bekommen die genannten Defaults. Zahlen dürfen auch Terme
sein (`"pi/2"`, `"2/3"`). Terme sind mathjs-Ausdrücke wie in Plots, auch stückweise mit
`x <= 1 ? x^2 : a*x + b`. Wo Punkte aus den Props kommen, wählt das Widget den Ausschnitt automatisch
(symmetrisch, gleich skaliert, beim Ziehen stabil). Überschreiben lässt er sich mit `x`/`y` bzw. `bereich`.

| name | props (Default) | zeigt |
|---|---|---|
| `parameter` | `f` ("a*sin(b*x+c)+d"), `parameter: [{name, min (-5), max (5), step, wert (1)}]` (ohne Liste: freie Symbole aus f), `x` ([-5,5]; mit `piAchse` [-2π,2π]), `y` (auto), `zusatz: [Terme]`, `piAchse` (false) | Graph mit Reglern, Gleichung mit eingesetzten Werten |
| `tangente` | `f` ("x^2/2"), `x0` (1), `h` (1,5), `x` (x0±2,5), `y` (auto), `ableitung` (Term oder `true` = numerisch), `y_ableitung` | Sekante → Tangente, Differenzenquotient, f′(x0), „h → 0 abspielen“, Knick-Erkennung |
| `riemann` | `f` ("x^2"), `a` (0), `b` (2), `n` (4; 1–200), `art` (unter/ober/links/rechts/mitte), `x`, `y` | Rechtecksummen vs. Integral (Simpson), Differenz |
| `folge` | `a` (Term in n, "(2n-3)/(2+3n)"), `grenzwert` (optional), `n_max` (30; 5–500), `epsilon` (Spanne/10) | Folgenglieder, ε-Schlauch, kleinstes N (bis n_max); ohne Grenzwert Regler „Kandidat c“ |
| `einheitskreis` | `winkel` (30, Grad), `kurve` (true) | sin, cos, tan am Einheitskreis, exakte Werte bei 30°/45°-Vielfachen |
| `komplex` | `z1` ([2,1]), `z2` ([1,2]), `operation` (summe/differenz/produkt/quotient/potenz/wurzeln), `n` (3), `raster` (0,5; 0 = frei), `bereich` bzw. `x`/`y` | Operationen in der Zahlenebene, Polarform, n-te Wurzeln |
| `binomial` | `n` (10), `p` (0,5), `bereich` ([round(np)−2, round(np)+2]), `normal` (false) | Balken, P(a ≤ X ≤ b), E(X), σ, Normalapproximation |
| `normal` | `mu` (0), `sigma` (1), `a` (μ−σ), `b` (μ+σ), `x` (μ±5σ) | Dichte, schattierte Fläche, P(a ≤ X ≤ b) |
| `vektoren` | `a` ([3,1]), `b` ([1,2]), `zeige` (["summe","skalarprodukt","winkel"]; außerdem "differenz","projektion","flaeche"), `raster` (0,5), `bereich` bzw. `x`/`y` | ziehbare Vektoren mit Ergebnissen |
| `gauss` | `matrix` (erweiterte Matrix; Zahlen oder Strings "1/2", "1,5"; Default: 3×3 mit Lösung 2/3/−1) | Gauß-Elimination Schritt für Schritt mit exakten Brüchen, editierbar (1–6 Gleichungen) |
| `statistik` | `daten` ([3,5,7,7,8,10,12]), `paare` ([[x,y], …]) | Kennzahlen (Quartile wie Kapitel 17, Varianz mit n und n−1), Boxplot, Regression |
| `stetigkeit` | `links` ("x+1"), `rechts` ("x^2"), `stelle` (1), `wert` (Zahl oder "links"/"rechts"/"keiner"; Default "links"), `x` (s±2), `y`, `epsdelta` (false) | einseitige Grenzwerte, stetig ja/nein, ε-δ |
