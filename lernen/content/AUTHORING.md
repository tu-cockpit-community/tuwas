# Lernkurse schreiben (Autor:innen-Handbuch)

Dieses Dokument ist der **Format-Vertrag** für alle Kursinhalte unter `content/<fach>/`
(derzeit `mathe3` und `physik1`). Zusammen mit ihm gelten:

- [`QUALITAET.md`](./QUALITAET.md): **verbindliche didaktische Rubrik** (Abschnitt A) und Gap-Listen je Kapitel (B), Fehlerliste (C)
- [`SPRACHE.md`](./SPRACHE.md): **verbindlicher Sprachleitfaden** „maximal verständlich, keine offene Frage“

`mathe3/kapitel/15-komplexe-zahlen.md` zeigt die **Syntax** aller Bausteine. Es ist **kein**
Qualitätsmaßstab: Es erfüllt die Rubrik nicht (zu dünn). Maßstab ist allein die Rubrik.

**Validator (Pflicht nach jeder Änderung):**

```bash
cd web
npm run lernen:pruefen -- mathe3          # ganzer Kurs
npm run lernen:pruefen -- mathe3 09       # nur Kapiteldateien, die mit "09" beginnen
npm run lernen:test                       # Unit-Tests des Rechenkerns und der Bewertung
npm run lernen:test:java                  # Java-Runner gegen echtes JDK (langsam, ~2 min)
```

Mit `--qualitaet` meldet er zusätzlich jedes zählbare Rubrik-Kriterium als `Q-…`-Warnung
(z. B. `npm run lernen:pruefen -- mathe3 09 --qualitaet`). Abnahme heißt: 0 Fehler **und** 0 Q-Warnungen.

Der Validator rechnet jede Musterlösung nach, vergleicht `anzeige` mit `loesung`, kompiliert jede
Formel mit KaTeX, prüft Plots, Widget-Namen, eindeutige ids und lässt jeden Trainingsgenerator über
200 Seeds laufen. **0 Fehler** ist die Abnahmebedingung. Warnungen sollen begründet sein.

Bei Programmier-Aufgaben (Abschnitt 4a) führt er außerdem echtes Java aus (JDK 21 im `PATH`):
`ausgabe`-Code wird kompiliert und ausgeführt und muss genau `loesung` ausgeben, `lueckentext` mit
`code` wird mit jeder Variante kompiliert, `code`-Musterlösungen müssen alle Tests und Regeln
bestehen, und die Vorlage muss kompilieren. Bei Generatoren prüft er Java nur für die ersten 10
Seeds. Ohne JDK meldet er eine Warnung statt eines Fehlers.

---

## 1. Ordnerstruktur

```
content/<fach>/
  kurs.yaml                 Kursmetadaten (Titel, Teile A/B/C, Prüfungsinfo)
  kapitel/NN-slug.md        ein Kapitel pro Datei; NN = zweistellige Nummer, slug = URL
  pruefungen/*.yaml         Prüfungssimulationen (Abschnitt 7)
  training/<slug>.ts        Zufallsaufgaben-Generatoren (Abschnitt 8)
  formelsammlung.md         optional: Formelsammlung (normales Kapitel-Markdown ohne Frontmatter)
```

`training/index.ts` wird von `npm run lernen:index` generiert. **Nicht von Hand bearbeiten.**

## 2. Kapitel-Frontmatter

```yaml
---
nummer: 9
titel: Differentialrechnung
kurz: Ein Satz, der auf der Kursübersicht steht.
teil: A                       # Schlüssel aus kurs.yaml → teile
stunden: 14                   # geschätzte Lernzeit
pruefungsgewicht: 3           # 0–3: wie oft/schwer kommt das in der schriftlichen Prüfung
lernziele:
  - konkret und überprüfbar formuliert ("… berechnen", "… begründen")
---
```

## 3. Aufbau und Stil

- Text vor der ersten `## `-Überschrift ist die **Einleitung**: Was kommt in der Prüfung dazu vor?
  Wozu braucht man es?
- Jede `## `-Überschrift ist ein **Abschnitt** (Inhaltsverzeichnis, Lesefortschritt).
  `###` für Unterabschnitte. Keine `#`-Überschrift im Kapitel (der Titel kommt aus dem Frontmatter).
- Reihenfolge je Abschnitt: Motivation → Definition/Satz → Erklärung/Herleitung → durchgerechnete
  Beispiele → typische Fehler → Aufgaben (vom Leichten zum Schweren).
- Ein Abschnitt **Prüfungsaufgaben** (Niveau 3, gern mit `punkte`) und ein Abschnitt
  **Mündliche Prüfung** (```karten) am Ende jedes Kapitels.
- **Sprache:** Deutsch (österreichische Schulbegriffe sind ok, z. B. „Matura“, „heraußen“ vermeiden).
  Direkte Anrede („du“), aktive Sätze, kein Füllstoff. Herleitungen statt Rezepten, aber jedes
  Rezept zusätzlich als Merke-Kasten. Dezimalkomma in Formeln: `0{,}14`.
- **Prüfungsbezug:** Die schriftliche Prüfung dauert 120 Minuten, nicht-grafikfähiger Taschenrechner
  und Schulformelsammlung sind erlaubt. Aufgaben sind anwendungsnah (Wachstum, Bremsweg, Würfel,
  Steigung) und mit Teilaufgaben a), b), c). Siehe die Musterprüfungen in
  `zulassung/sbp/mathematik-3/` und `recherche/sbp-tuwien.md`.

### Mathe
`$...$` inline, `$$...$$` abgesetzt (KaTeX). Makros: `\R \N \Z \Q \C` und `\dd` (Differential-d).
`\operatorname{Re}`, `\tfrac`, `\begin{aligned}…\end{aligned}`, `\begin{pmatrix}` funktionieren.
Kein `$` für Geldbeträge (schreib „Euro“).

### Kästen (Container-Directives)

```markdown
:::definition[Optionaler Titel]
Inhalt mit **Markdown** und $\LaTeX$.
:::
```

Typen: `definition`, `satz`, `beweis` (endet automatisch mit ∎), `beispiel`, `merke`, `achtung`
(typischer Fehler), `tipp`, `pruefung` (Prüfungstipp), `intuition`, `formel`.
Kästen nicht verschachteln. Doppelpunkte im Fließtext („Prüfer:innen“) sind unproblematisch.

## 4. Aufgaben (```aufgabe)

YAML in einem eingezäunten Block. Für Text mit Backslashes **immer** Blockskalare `|` oder einfache
Anführungszeichen `'...'` verwenden. In `"..."` wird `\t` zu einem Tab.

```aufgabe
id: kz-polar-umrechnen       # im ganzen Kurs eindeutig, a-z 0-9 -, Kapitelpräfix verwenden
titel: In Polarform umrechnen
niveau: 2                    # 1 Basis · 2 Standard · 3 Prüfungsniveau
quelle: Musterprüfung Karigl, Aufgabe 6 (nachgebaut)   # optional
punkte: 10                   # optional (Prüfungsaufgaben)
angabe: |
  Markdown mit $\LaTeX$.
plot: { ... }                # optional, Plot-Spezifikation wie in Abschnitt 5
teile:                       # Antwortfelder, beliebig viele
  - typ: zahl
    label: '$r$'
    loesung: "abs(-2*sqrt(3) + 2i)"
hinweise:                    # gestuft: vom Denkanstoß bis fast zur Lösung
  - Zuerst den Quadranten bestimmen.
loesung: |
  Schritt 1 (Markdown)
  ---
  Schritt 2
  ---
  Schritt 3
```

**Plots im Lösungsweg und in Hinweisen:** Ein eingerückter ```` ```plot ````-Block innerhalb von
`loesung`, `angabe` oder `hinweise` wird als Grafik gerendert und vom Validator geprüft (gleiches
Format wie Abschnitt 5). Er muss so weit eingerückt sein wie der übrige YAML-Blocktext.

**Lösungsweg:** Zeilen, die nur `---` enthalten, trennen Schritte. Die Lernenden decken sie einzeln
auf. Jeder Schritt soll für sich verständlich sein (was wird gemacht, warum). Am Ende eine Probe,
wo es sinnvoll ist.

### Antworttypen (`teile`)

`loesung` ist bei Zahl-Typen ein **mathjs-Ausdruck, der den Wert berechnet**. Schreib die Rechnung
hin, nicht das gerundete Ergebnis: `"ln(2)/0.055"` statt `"12.6"`. Dann prüft der Validator die
Arithmetik. Für die schöne Anzeige gibt es `anzeige` (LaTeX ohne `$`). Sie wird gegen `loesung`
gegengeprüft; mehrere Darstellungen mit `=` oder `\approx` trennen. Bei `vektor` wird jede Komponente
geprüft (`(1 | -8 | 14)` oder `\begin{pmatrix}…\end{pmatrix}`, optional mit Vorfaktor wie `\tfrac{1}{9}`).

| typ | Felder | Prüfung |
|---|---|---|
| `zahl` | `loesung`, `toleranz?` (absolut; Standard 0,5 % relativ), `einheit?`, `anzeige?` | Zahlenvergleich |
| `komplex` | `loesung` (z. B. `"(5+2i)/(6-8i)"`), `toleranz?`, `anzeige?` | Re und Im einzeln |
| `vektor` | `loesung: ["1", "-8", "14"]`, `namen?: ["x","y","z"]`, `vielfaches?: true` (Richtungs-/Normalvektoren: jedes Vielfache gilt) | komponentenweise |
| `menge` | `loesung: ["-sqrt(3)", "sqrt(3)"]` (leer: `[]`) | Reihenfolge egal, Eingabe mit `;` getrennt |
| `term` | `loesung: "3x^2 - 2"`, `variable?: x`, `bereich?: [a, b]` (Stichprobenbereich, z. B. `[0.5, 4]` bei `ln x`), `plusC?: true` (Stammfunktionen) | Termvergleich an Stichproben |
| `auswahl` | `optionen: [...]` (Markdown), `richtig: [0, 2]` (0-basiert), `mehrfach?: true` | exakte Menge |
| `text` | `muster` (Markdown-Musterantwort) | Selbsteinschätzung (Begründungen, Skizzen, Interpretationen) |
| `ausgabe` | `code` (Java), `loesung` (Ausgabe), `stdin?`, `trim?`, `whitespace?`, `codeAnzeigen?` | Konsolenausgabe, siehe 4a |
| `richtigfalsch` | `aussagen: [{text, richtig, erklaerung?}]` | je Aussage, Teilwertung |
| `lueckentext` | `code` **oder** `text` mit `___`, `luecken: [[Varianten…], …]`, `kompilieren?` | je Lücke, Leerraum egal, Teilwertung |
| `zeilen` | `code`, `loesung: [Zeilennummern]` | Menge, Teilwertung |
| `trace` | `spalten`, `loesung: [[Zellen…], …]`, `zeilen?`, `vorgabe?` | zellweise, Teilwertung |
| `reihenfolge` | `elemente` (richtige Reihenfolge), `start?` | Liste exakt |
| `code` | `vorlage`, `tests`, `regeln?`, `musterloesung`, `zeitlimit?` | Java-Runner auf dem Server, siehe 4a |

**Rechenfunktionen in `loesung`:** `sqrt`, `nthRoot(x, n)`, `abs`, `exp`, `ln`, `log(x, b)`, `lg`,
`ld`, `sin cos tan` (Bogenmaß), `asin`/`arcsin`, `atan2(y, x)`, `inRad(grad)`, `inGrad(rad)`, `pi`, `e`,
`i`, `binom(n, k)`, `factorial(n)` bzw. `n!`, `binompdf(n, p, k)`, `binomcdf(n, p, k)` (P(X ≤ k)),
`normcdf(x, mu, sigma)`, `invnorm(p, mu, sigma)`, `integral("f(x)", a, b)`, `det([[1,2],[3,4]])`,
`inv(...)`, `mean`, `median`, `std(…, "uncorrected")`, `variance`. Innerhalb von Funktionsaufrufen
ist das Komma Argumenttrenner, also Dezimalpunkt verwenden: `binomcdf(12, 0.25, 2)`.

**Lernende** dürfen Dezimalkomma, `√`, `π`, `²`, `·`, `ln` und implizite Multiplikation (`2x`)
eingeben. Die Platzhalter zeigen Beispiele.

**Gute Aufgaben:**
- Viele Aufgaben pro Abschnitt, Niveaus gemischt: etwa 35 % Basis, 40 % Standard, 25 % Prüfung.
- Jede Aufgabe mit Niveau ≥ 2 hat mindestens einen Hinweis.
- Möglichst jede Aufgabe ist automatisch prüfbar. `text` nur dort, wo wirklich argumentiert oder
  interpretiert wird (das ist in der mündlichen Prüfung wichtig, also ruhig regelmäßig).
- Anwendungsaufgaben im Stil der Musterprüfungen mit realistischen Zahlen und Einheiten.
- Eindeutig formulieren, welche Form verlangt ist (Grad oder Bogenmaß, Rundung, Reihenfolge der
  Lösungen, „Lösung mit positivem Imaginärteil“).

### Didaktische Felder einer Aufgabe

```yaml
art: check               # uebung (Standard) | check: kurze Verständnis- oder Vorwissensfrage, kompakt dargestellt
lernziel: 2              # Index (0-basiert) in lernziele des Frontmatters
kompetenz: begruenden    # rechnen | verstehen | anwenden | begruenden | modellieren
teile:
  - typ: zahl
    loesung: "(5+2*6)/2"
    fehler:              # Fehlerbilder: typische falsche Antwort -> gezielte Rückmeldung (Markdown)
      - wert: "5+2*6/2"
        meldung: |
          Du hast nur $2\cdot 6$ durch $2$ geteilt. Der Bruchstrich wirkt wie eine Klammer um den
          **ganzen** Zähler: erst $5 + 12 = 17$, dann durch $2$.
gefuehrt:                # Geführtes Lösen: dieselbe Aufgabe in kleinen Schritten mit eigenen Eingaben
  - text: Was steht im Zähler, bevor du teilst?
    teil: { typ: zahl, loesung: "5+2*6" }
    erklaerung: Punkt vor Strich, also $5 + 12 = 17$.
  - text: Jetzt teilen.
    teil: { typ: zahl, loesung: "17/2" }
    erklaerung: $17 : 2 = 8{,}5$.
```

- `fehler.wert` wird genau wie eine Nutzereingabe verglichen (bei `auswahl` der Index, bei `vektor`/`menge` eine Liste).
  Die `meldung` benennt die **Fehlvorstellung** und erklärt sie, ohne das Endergebnis zu verraten.
- `gefuehrt`: 3–6 Schritte. Schritte ohne `teil` sind Denkschritte („Überlege, warum …“).
  Wer geführt löst, bekommt die Aufgabe am nächsten Tag ohne Führung noch einmal (verteilte Wiederholung).

### Weitere Bausteine

````markdown
```reflexion
frage: Warum darf man hier durch $x$ teilen, aber bei $x^2 = x$ nicht?
antwort: |
  Weil … (vollständige Musterüberlegung)
```
````

Kästen zusätzlich zu Abschnitt 3: `:::zusammenfassung` (Kernaussagen am Kapitelende), `:::vorwissen`
(was man aus früheren Kapiteln braucht, mit Link), `:::anwendung` (wo man das im Studium/Alltag braucht).

Frontmatter zusätzlich: `voraussetzungen: [slug, …]` (Kapitel, deren Stoff vorausgesetzt wird).
`kurs.yaml` zusätzlich: `pruefung.datum: JJJJ-MM-TT` (Prüfungstermin des Kurses).

Karten zusätzlich: `id` (stabil, a–z0–9-) und `kernpunkte: [2–4 Stichpunkte]` für den Selbstabgleich.

## 4a. Programmier-Aufgaben (EP1, Java)

Java-Code in Markdown (```` ```java ````) wird überall hervorgehoben, auch in `angabe`, `loesung` und
Hinweisen. Alle Typen unten unterstützen `label` und `fehler` (Fehlerbilder). Bei Teilwertung bekommt
man in Prüfungssimulationen anteilige Punkte.

### `ausgabe`: Konsolenausgabe vorhersagen

`code` ist eine ganze Klasse oder nur Anweisungen (die landen in `main` einer Klasse `Main` mit
`import java.util.*`). Der Validator führt den Code aus; `loesung` muss genau seine Ausgabe sein.
Lernende tippen in ein mehrzeiliges Feld. Vergleich: Zeilenenden egal, abschließende Leerzeilen egal,
sonst exakt. `trim: true` ignoriert Leerzeichen am Zeilenende und Leerzeilen am Rand,
`whitespace: tolerant` zählt jede Folge von Leerraum wie ein Leerzeichen. `stdin` wird als Tastatur-
eingabe eingespeist. Den Code zeigt das Eingabefeld selbst an (mit Zeilennummern); steht er schon in
der Angabe, `codeAnzeigen: false` setzen.

```aufgabe
id: ausd-ganzzahldivision
titel: Ganzzahldivision und Rest
niveau: 1
angabe: Was gibt das Programm aus?
teile:
  - typ: ausgabe
    code: |
      int a = 7, b = -2;
      System.out.println(a / b);
      System.out.println(a % b);
    loesung: |
      -3
      1
    fehler:
      - wert: "-4\n1"
        meldung: Ganzzahldivision rundet **zur Null hin**, nicht nach unten.
hinweise: [Bei int / int fällt der Nachkommaanteil einfach weg.]
loesung: |
  `7 / -2` ergibt `-3` (Richtung 0 gerundet). Der Rest hat das Vorzeichen des Dividenden: `7 % -2 = 1`.
```

### `richtigfalsch`: Aussagen beurteilen (TUWEL-Stil)

```yaml
  - typ: richtigfalsch
    aussagen:
      - { text: "`int` ist ein primitiver Datentyp.", richtig: true }
      - text: "`s1 == s2` vergleicht den Inhalt zweier Strings."
        richtig: false
        erklaerung: "`==` vergleicht Referenzen; für den Inhalt `equals`."
```

Teilwertung: Anteil richtig beurteilter Aussagen. Erst wenn jede Aussage beurteilt ist, wird gewertet.
`fehler.wert` ist eine Liste aus `r`/`f`, z. B. `[r, r, f, f]`.

### `lueckentext`: Code mit Lücken

Lücken sind `___` (drei oder mehr Unterstriche). Je Lücke eine Liste akzeptierter Varianten; die erste
ist die Musterlösung. Verglichen wird ohne Rücksicht auf Leerraum (`i<n` = `i < n`), Wörter bleiben aber
getrennt (`intx` ≠ `int x`). Mit `code` prüft der Validator, dass der Code mit **jeder** Variante
kompiliert (Ausschnitte werden wie bei `ausgabe` in `main` gesetzt); für Fragmente, die allein nicht
kompilieren, `kompilieren: false`. Statt `code` geht auch `text` (Fließtext, nicht kompiliert).

```yaml
  - typ: lueckentext
    code: |
      int summe = 0;
      for (int i = 1; ___; i++) {
          summe ___ i;
      }
    luecken: [["i <= 10", "i < 11"], ["+="]]
```

### `zeilen`: Fehler finden

Der Code wird Zeile für Zeile als Knopf angezeigt; Lernende markieren die fehlerhaften Zeilen.
`loesung` ist die Menge der Zeilennummern (1-basiert).

```yaml
  - typ: zeilen
    label: Welche Zeilen kompilieren nicht?
    code: |
      int a = 3;
      String s = 5;
      System.out.println(a)
    loesung: [2, 3]
```

### `trace`: Variablen verfolgen

Tabelle mit einer Spalte je Variable und einer Zeile je Schritt; zellweise geprüft, Zahlen numerisch
(`2,5` = `2.5`). `zeilen` beschriftet die Schritte, `vorgabe: n` gibt die ersten n Zeilen vor (z. B. den
Startzustand). `fehler.wert` ist die ganze Tabelle zeilenweise als flache Liste.

```yaml
  - typ: trace
    spalten: [i, summe]
    zeilen: [vor der Schleife, nach i = 1, nach i = 2, nach i = 3]
    vorgabe: 1
    loesung: [[1, 0], [2, 1], [3, 3], [4, 6]]
```

### `reihenfolge`: Elemente ordnen

`elemente` stehen in der **richtigen** Reihenfolge; angezeigt werden sie gemischt (deterministisch, nie
schon richtig) oder in der Reihenfolge `start` (Indizes). Bedienung mit Hoch/Runter-Knöpfen (Tastatur).

```yaml
  - typ: reihenfolge
    label: In welcher Reihenfolge erscheinen die Ausgaben von `f(2)`?
    elemente: ["`start 2`", "`start 1`", "`ende 1`", "`ende 2`"]
```

### `code`: Methoden schreiben (Java-Runner)

Lernende bearbeiten `vorlage` in einem Editor (Tab rückt ein); „Prüfen“ schickt den Code an
`POST /api/java/pruefen`. Die Route lädt Tests und Musterlösung selbst aus dem Kurs; der Browser
bekommt nur die Vorlage, die sichtbaren Tests und die Regeln. `musterloesung` bleibt auf dem Server und
wird vom Validator gegen alle Tests und Regeln geprüft. Den Lösungsweg mit lesbarer Musterlösung
schreibst du wie immer in `loesung` (wird erst nach einem Versuch aufgedeckt). (Im Kapitel steht der
Block mit drei Backticks; hier sind es vier, weil er selbst einen ```` ```java ````-Block enthält.)

````aufgabe
id: rek-quersumme
titel: Quersumme rekursiv
niveau: 2
angabe: |
  Implementiere `quersumme(int n)` für `n ≥ 0` **rekursiv** und ohne Schleifen.
teile:
  - typ: code
    vorlage: |
      public class Ziffern {
          public static int quersumme(int n) {
              return 0; // TODO
          }
      }
    musterloesung: |
      public class Ziffern {
          public static int quersumme(int n) {
              if (n < 10) return n;
              return n % 10 + quersumme(n / 10);
          }
      }
    tests:
      - { aufruf: "quersumme(123)", erwartet: "6" }
      - { aufruf: "quersumme(0)", erwartet: "0", beschreibung: "Basisfall 0" }
      - { aufruf: "quersumme(99999)", erwartet: "45", versteckt: true }
    regeln: { keineSchleifenIn: [quersumme], rekursiv: [quersumme], keineHilfsmethoden: true }
    fehler:
      - { wert: 2, meldung: "Was ist die Quersumme einer einstelligen Zahl? Das ist dein Basisfall." }
hinweise: [Die letzte Ziffer ist `n % 10`, der Rest `n / 10`.]
loesung: |
  ```java
  if (n < 10) return n;
  return n % 10 + quersumme(n / 10);
  ```
````

**Tests** (`tests`, mindestens einer):

| Form | Felder | geprüft wird |
|---|---|---|
| Wert | `aufruf` (Java-Ausdruck), `erwartet` (Java-Ausdruck, z. B. `"new int[]{1, 2}"`) | Rückgabewert; Zahlen typunabhängig (`int` 6 = `long` 6), `double` mit `toleranz` (Standard 1e-9), Arrays elementweise |
| In-place | `vorher: "int[] a = {3, 1, 2};"`, `aufruf: "sortiere(a)"`, `ergebnis: "a"`, `erwartet` | Wert von `ergebnis` nach dem Aufruf |
| Ausgabe | `aufruf` (Anweisung, z. B. `"zeichneDreieck(3)"`), `stdout`, `stdin?`, `whitespace?` | Konsolenausgabe während des Aufrufs |
| main | ohne `aufruf`: `stdin`, `stdout` | Ausgabe von `main` der Klasse |
| Zeichnung | `aufruf: "zeichne(new CodeDraw(400, 400))"`, `zeichnung: true`, `reihenfolge?` | Formen wie bei der Musterlösung (siehe unten) |

`beschreibung` ersetzt den Aufruf in der Anzeige, `versteckt: true` zeigt nur bestanden/nicht bestanden.
Aufrufe stehen ohne Klassennamen (`quersumme(5)`); der generierte Prüfer erbt von der Klasse. Daher
darf die Klasse nicht `final` sein und keinen privaten Konstruktor haben. `java.util.*`, `codedraw.*`
und die Imports der Vorlage stehen in Testausdrücken zur Verfügung. Zeitlimit je Test: `zeitlimit`
in ms (Standard 2000). Endlosrekursion meldet der Runner als „Basisfall fehlt?“, eine Endlosschleife
als Zeitüberschreitung; die folgenden Tests laufen dann nicht mehr. Eine `static`-Variable mit
`new Scanner(System.in)` sieht die Testeingabe nicht (sie wird vor dem ersten Test angelegt):
in `main` einen lokalen Scanner verwenden.

**Regeln** (`regeln`, statisch über die Compiler-Tree-API geprüft; jeder Verstoß setzt die Wertung
wie im Programmiertest auf 0):

| Regel | Bedeutung |
|---|---|
| `keineSchleifen: true` / `keineSchleifenIn: [m]` | keine `for`/`while`/`do` (überall bzw. in den Methoden `m`) |
| `rekursiv: [m]` | `m` muss sich selbst aufrufen |
| `keineHilfsmethoden: true` | nur die Methoden der Vorlage |
| `keineFelder: true` | keine zusätzlichen Felder (Klassenvariablen) |
| `signaturBeibehalten` | Standard `true`: Name, Parameter, Rückgabetyp und `static` der Vorlagen-Methoden bleiben |
| `erlaubteApi: ["String.charAt", "String.length", "Math.*", "StringBuilder"]` | nur diese fremden Methoden/Konstruktoren (`Klasse` = ganze Klasse); `System.out.print*` ist immer erlaubt |
| `verboteneApi: ["Arrays.sort"]` | diese Methoden sind verboten |
| `keinStringGleichOperator: true` | kein `==`/`!=` zwischen Strings |
| `keineArrayKopie: true` | kein `clone()`, `System.arraycopy`, `Arrays.copyOf(Range)` |

**Fehlerbilder bei `code`:** `wert` ist die Nummer eines Tests (1-basiert, die Meldung erscheint, wenn
dieser Test scheitert) oder der Name einer Regel (erscheint bei diesem Verstoß).

**Fake-CodeDraw:** Im Runner gibt es das Paket `codedraw` ohne Fenster (`CodeDraw`, `Palette`; Methoden
`drawCircle/fillCircle`, `drawEllipse/fillEllipse`, `drawRectangle/fillRectangle`, `drawSquare/fillSquare`,
`drawLine`, `drawTriangle/fillTriangle`, `drawArc`, `drawPoint`, `drawText`, `setColor`, `setLineWidth`,
`clear`, `show`). Jeder Aufruf wird protokolliert; bei `zeichnung: true` vergleicht der Runner die Formen
mit denen der Musterlösung als Multimenge (±1 px, Farbe und Füllung müssen stimmen, Reihenfolge nur
mit `reihenfolge: true`). Die Rückmeldung zeigt beide Zeichnungen als SVG nebeneinander.

`code`-Teile gehen nur in Kapiteln und Prüfungen (nicht in `gefuehrt` und nicht in Trainings-
generatoren), weil die Route die Aufgabe über ihre `id` vom Server lädt.

**Java-Runner einschalten** (lokal, braucht JDK 21: `sudo apt install openjdk-21-jdk-headless`):

```bash
EP1_JAVA_RUNNER=1 npm run dev -- -H 127.0.0.1
```

Ohne `EP1_JAVA_RUNNER=1` antwortet die Route mit einer Erklärung, wie man ihn einschaltet. Die Route
nimmt nur Anfragen von localhost an (JSON, höchstens 50 KB Quelltext, höchstens 2 Läufe gleichzeitig).
Ausgeführt wird unter `unshare -rn` (kein Netz), `prlimit` und `timeout` mit `java -Xmx128m -Xss8m`
in einem eigenen Temp-Verzeichnis. Der Code läuft dabei als angemeldeter Nutzer ohne Dateisystem-
Sandbox; das ist nur für den lokalen Einzelbetrieb gedacht (siehe `SHORTCUT` in
`lib/lernen/java/runner.ts`).

## 5. Plots (```plot)

Statische SVG-Grafik, serverseitig gerendert. Alle Zahlenfelder akzeptieren auch Ausdrücke
(`"2*pi"`, `"-2*sqrt(3)"`). Ein x-Bereich mit `pi` erzeugt automatisch π-Beschriftung.

```plot
x: [-1, 4]
y: [-2, 10]
gleich: false                 # true: gleiche Skalierung (Kreise rund, Vektoren winkeltreu)
hoehe: 360                    # Standard 360
achsen: { x: "t in s", y: "v in m/s" }
graphen:
  - { f: "25 - x^2", label: "v(t)", farbe: 0, von: 0, bis: 5, gestrichelt: false }
kurven:                       # parametrisch, Parameter t
  - { x: "2*cos(t)", y: "2*sin(t)", t: [0, "2*pi"], farbe: 1 }
flaechen:                     # Fläche zwischen f und g (g Standard 0)
  - { f: "25 - x^2", g: "0", von: 0, bis: 5, farbe: 0 }
punkte:
  - { x: 5, y: 0, label: "Stillstand", offen: false }
vektoren:
  - { von: [0, 0], nach: [3, 4], label: "a" }
strecken:
  - { von: [1, 0], nach: [1, 24], gestrichelt: true }
balken:                       # Säulendiagramm (Verteilungen)
  - { x: 0, y: 0.03 }
beschriftung: Bildunterschrift und zugleich Beschreibung für Screenreader.
```

Farben 0–4: Blau, Orange, Grün, Violett, Ocker (in hell und dunkel getrennt abgestimmt).
**Immer `beschriftung` setzen**, außer bei Plots innerhalb von Aufgaben.

## 6. Interaktive Widgets (```widget) und Karten (```karten)

```widget
name: tangente
titel: Von der Sekante zur Tangente
props: { f: "x^2", x0: 1, h: 1.5 }
```

Mathe-Widgets: `parameter`, `tangente`, `riemann`, `folge`, `einheitskreis`, `komplex`, `binomial`,
`normal`, `vektoren`, `gauss`, `statistik`, `stetigkeit`. Ihre Props stehen in
[`WIDGETS.md`](./WIDGETS.md). Physik-Widgets stehen in `components/lernen/widgets/physik/namen.ts`.
Interne Links (`/lernen/<fach>/<kapitel>`, `/lernen/<fach>/pruefung/<id>`) prüft der Validator.
Ein Widget lohnt sich dort, wo Lernende *etwas verändern und die Wirkung sehen* sollen. 1–4 pro Kapitel.

**Neue Widgets** (nur fachspezifisch, in `components/lernen/widgets/<fach>/`): Client-Komponente
`(p: WidgetProps) => JSX` aus `components/lernen/widgets/vertrag.ts`, Props defensiv lesen (Helfer
`zahl`, `text`, `bereich`), SVG über `<Koordinaten>` aus `components/lernen/Koordinaten.tsx`,
Bedienung per `<input type=range>` mit Label, Farben nur über `FARBEN`/CSS-Tokens. Registrieren in
`widgets/<fach>/index.ts` **und** `widgets/<fach>/namen.ts`.

Mündliche Prüfungsfragen:

```karten
- frage: Was ist eine komplexe Zahl?
  antwort: |
    Antwort in ganzen Sätzen, so wie man sie in der Prüfung sagen würde.
```

8–15 Karten pro Kapitel: Definitionen, Sätze mit Voraussetzungen, „Warum …?“-Fragen,
Zusammenhänge, typische Gegenbeispiele.

## 7. Prüfungssimulationen (`pruefungen/*.yaml`)

```yaml
id: karigl-muster
titel: Musterprüfung Karigl
quelle: zulassung/sbp/mathematik-3/Musterpruefung_1.pdf
art: original            # original = Nachbau einer echten Musterprüfung, simulation = selbst erstellt
dauer_minuten: 120
hinweis: Markdown, z. B. erlaubte Hilfsmittel
aufgaben:                # Liste von Aufgaben im Format aus Abschnitt 4, jeweils mit punkte
  - id: pk-1
    titel: ...
    niveau: 3
    punkte: 10
    angabe: |
      ...
    teile: [...]
    loesung: |
      ...
```

## 8. Zufallsaufgaben (`training/<slug>.ts`)

Generatoren erzeugen aus einem Seed eine vollständige Aufgabe. Damit gibt es unbegrenzt
Routineübung. Eine Datei pro Kapitel, benannt nach dem Kapitel-Slug.

```ts
import { drill, tz, polyTex, polyAusdruck, bruchTex, type Drill } from "@/lib/lernen/training";

export const DRILLS: Drill[] = [
  drill({
    id: "kz-mult",                 // kursweit eindeutig
    kapitel: "komplexe-zahlen",    // Slug des Kapitels (Dateiname ohne Nummer)
    titel: "Komplexe Zahlen multiplizieren",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.intOhne0(-6, 6), b = r.intOhne0(-6, 6), c = r.intOhne0(-6, 6), d = r.intOhne0(-6, 6);
      const z1 = `${a}${b < 0 ? "-" : "+"}${Math.abs(b)}i`;
      const z2 = `${c}${d < 0 ? "-" : "+"}${Math.abs(d)}i`;
      return {
        angabe: `Berechne $(${z1})(${z2})$.`,
        teile: [{ typ: "komplex", loesung: `(${z1})*(${z2})` }],
        loesung: `Ausmultiplizieren und $i^2=-1$ setzen.\n---\nErgebnis: $${a * c - b * d} ${a * d + b * c < 0 ? "-" : "+"} ${Math.abs(a * d + b * c)}i$`,
      };
    },
  }),
];
```

`r`: `int(a,b)`, `intOhne0(a,b)`, `wahl(liste)`, `vorzeichen()`, `mische(liste)`, `zufall()`.
Helfer: `tz(x)` (Zahl mit Dezimalkomma für LaTeX), `koef`, `summand`, `polyTex([an,…,a0])`,
`polyAusdruck(...)`, `bruchTex(z, n)`, `ggt`. Achte auf entartete Fälle (Nenner 0, doppelte
Lösungen, unschöne Zahlen) und erzeuge „schöne“ Aufgaben mit ganzzahligen Zwischenergebnissen.
Ziel: 6–15 Generatoren pro Kapitel, die die Routinefertigkeiten des Kapitels abdecken.

## 9. Abnahme-Checkliste

- [ ] `npm run lernen:pruefen -- <fach>`: 0 Fehler
- [ ] Jede `loesung` zusätzlich unabhängig nachgerechnet (Kopfrechnung, python3 oder zweiter Lösungsweg)
- [ ] Jeder Lösungsweg beginnt mit dem Ansatz und endet mit Ergebnis plus Probe/Interpretation
- [ ] Prüfungsaufgaben und Karten vorhanden
- [ ] Keine Inhalte, die über den SBP-Stoff hinausgehen, ohne sie als „Vertiefung“ zu kennzeichnen
