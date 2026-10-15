# Qualitätsstandard und Gutachten der Lernkurse (mathe3, physik1)

Stand: 05.10.2026. Grundlage sind:

- **Vollständig gelesen:** mathe3 Kapitel 05, 09, 11 und 16 sowie physik1 Kapitel 03, 10, 11 und 12.
- **Überflogen:** alle übrigen Kapitel. Ausgewertet wurden Überschriften und Abschnittsstatistik (Skript), `npm run lernen:pruefen`, eine Stichwortsuche nach Lehrplanthemen und eine Duplikatanalyse.
- **Nachgerechnet:** rund 130 Rechnungen mit python3 (ca. 60 Mathe, 70 Physik).
- **Geprüft:** die Lern-Komponenten unter `components/lernen`, `app/lernen` und `lib/lernen`.
- **Abgeglichen** mit dem SBP-Stoffkatalog (Anlage 1), den drei Musterprüfungen, dem AHS-Oberstufenlehrplan, den SRDP-Grundkompetenzen, Schulbüchern und Uni-Vorkursen.

Dieses Dokument ergänzt den Format-Vertrag [`AUTHORING.md`](./AUTHORING.md). Bei Widerspruch gilt: AUTHORING regelt das **Format**, QUALITAET regelt die **didaktische Mindestqualität**.

**Gesamturteil in einem Satz:** Die Kurse sind fachlich ungewöhnlich sauber, mathe3 deckt den SBP-Stoff fast vollständig ab und erklärt gut. Didaktisch sind sie aber ein Lehrbuch mit angehängten Übungen, kein Lernsystem: zu wenige Übungen je Abschnitt, Übungen kopieren die vorgerechneten Beispiele, es gibt kein Fading, keine Selbsterklärung und kein Fehlerbild-Feedback, und die Plattform verteilt keine Wiederholungen.

---

## A. Verbindliche Qualitätsrubrik

Jede Anforderung ist **prüfbar**: Ein Validator kann sie zählen (V), oder ein Reviewer prüft sie gegen eine Checkliste (R). Ein Kapitel gilt als **abgenommen**, wenn alle Muss-Kriterien (M) erfüllt sind. Soll-Kriterien (S) dürfen höchstens zweimal pro Kapitel begründet fehlen.

**Begriffe**

- **Lernabschnitt:** jede `##`-Überschrift außer „Prüfungsaufgaben“, „Mündliche Prüfung“, „Überblick …“ und „Gemischte Wiederholung“.
- **Aktives Element:** Aufgabe, `check`-Aufgabe, Widget mit Arbeitsauftrag oder `reflexion`.
- **Isomorphe Aufgabe:** gleiche Struktur wie ein Beispiel, aber andere Zahlen, Funktionen oder Kontexte.

### A.1 Je Lernabschnitt

| Nr | Kriterium | Mindestwert | Art |
|---|---|---|---|
| A1 | **Vorwissen aktivieren:** Am Abschnittsbeginn steht eine `art: check`-Frage (oder ein `:::vorwissen`-Kasten) zu einer Voraussetzung, mit Link auf das Herkunftskapitel. | ≥ 1 | M, V |
| A2 | **Durchgerechnete Beispiele** (`:::beispiel`) mit sichtbaren Zwischenschritten. Mindestens eines ist anwendungsbezogen mit Einheiten (Physik: immer). | ≥ 2 (≥ 1 bei reinen Definitionsabschnitten) | M, V |
| A3 | **Jede Definition und jeder Satz** wird im selben Abschnitt durch ≥ 1 Beispiel **und** ≥ 1 Gegen- oder Nichtbeispiel konkretisiert. | 100 % | M, R |
| A4 | **Geführte Aufgabe** (`gefuehrt:`, Fading): ein Beispiel, bei dem die Lernenden ≥ 2 von ≥ 4 Schritten selbst eingeben. Der erste Schritt ist ausgeblendet erst beim zweiten Fading-Element. | ≥ 1 | M, V |
| A5 | **Übungsaufgaben** im Abschnitt (ohne `check`): Davon N1 ≥ 2, N2 ≥ 2, N3 ≥ 1. | ≥ 6 | M, V |
| A6 | **Keine Duplikate:** Keine Übung verwendet denselben Term, Datensatz oder Zahlenkontext wie ein Beispiel desselben Kapitels. Erlaubt sind nur isomorphe Aufgaben. Ausnahme ist eine ausgewiesene „Nachrechnen“-Aufgabe (N1, höchstens 1 pro Abschnitt). | 0 Verstöße | M, V (Duplikatprüfung wie `dup.py`, s. C.0) |
| A7 | **Formatvielfalt:** Die Übungen decken ≥ 3 der folgenden Formate ab. Es gilt `kompetenz` ≥ 3 verschiedene Werte. | ≥ 3 | M, V |
| | Formate: Rechnen · Darstellungswechsel (Graph ↔ Term ↔ Tabelle ↔ Text) · Begründen/Beweisen (`text`) · Fehler finden („Eine Mitschülerin rechnet … Wo ist der Fehler?“) · Umkehraufgabe (Ergebnis gegeben, Parameter gesucht) · Modellieren (Sachkontext) · Abschätzen | | |
| A8 | **Fehlerbilder:** `:::achtung`-Kästen, die eine **konkrete falsche Rechnung** zeigen und korrigieren. Allgemeine Warnungen zählen nicht. | ≥ 2 | M, R |
| A9 | **Fehlerbild-Feedback:** Teile vom Typ `zahl`, `term`, `menge` oder `vektor` haben ≥ 1 `fehler:`-Eintrag. MC-Distraktoren bilden je eine benannte Fehlvorstellung ab und haben eine `fehler`-Meldung. | ≥ 50 % der Teile in N1/N2 (Kapitelgewicht 3: ≥ 70 %) | M, V |
| A10 | **Selbsterklärung:** `reflexion`-Block oder Aufgabe mit `kompetenz: begruenden`, z. B. „Warum darf man hier kürzen?“ oder „Was wäre, wenn …?“. | ≥ 1 | M, V |
| A11 | **Dual Coding:** Bei geometrischem, graphischem, Daten- oder Experimentinhalt gibt es ≥ 1 Plot oder Widget, jeweils mit `beschriftung`. Physik: Freikörperbild bzw. Schaltskizze in jedem Abschnitt mit Kräften bzw. Schaltungen. | ≥ 1 | M, R |
| A12 | **Segmentierung:** höchstens 350 Wörter Fließtext ohne aktives Element oder Beispiel dazwischen, Absätze ≤ 120 Wörter. | 0 Verstöße | M, V |
| A13 | **Hinweise:** N1 ≥ 1, N2 und N3 ≥ 2 gestufte Hinweise. Der letzte Hinweis nennt den Ansatz, nicht das Ergebnis. | 100 % | M, V |
| A14 | **Lösungsweg:** ≥ 3 Schritte (`---`). Schritt 1 nennt Ansatz bzw. Modell und warum. Der letzte Schritt enthält Probe, Plausibilitätscheck oder Antwortsatz. Physik: Einheitenrechnung in jedem Schritt mit Größen. | 100 % (N1 ≥ 2 Schritte) | M, V/R |
| A15 | **Eindeutige Angabe:** Rundung, Einheit, Grad/Bogenmaß, Reihenfolge und verlangte Form sind genannt. | 100 % | M, R |
| A16 | **Merke-Rezept** nach den Beispielen, nicht davor (Beispiel → Abstraktion). | ≥ 1, wenn ein Verfahren gelehrt wird | S, R |
| A17 | **Widget mit Arbeitsauftrag** nach dem Schema Vorhersage → Beobachtung → Erklärung. Vorher steht eine `check`-Frage „Was passiert, wenn …?“. Ein Widget ohne Vorhersagefrage zählt nicht. | wenn ein Widget vorhanden ist | M, V |

### A.2 Je Kapitel

| Nr | Kriterium | Mindestwert | Art |
|---|---|---|---|
| K1 | Lernziele operationalisiert (Verb + Objekt + Bedingung). Jede Aufgabe trägt künftig `lernziel: <index>`. | 6–10 Lernziele; jedes mit ≥ 4 Aufgaben, davon ≥ 1 N3 | M, V |
| K2 | `voraussetzungen` im Frontmatter gepflegt. Eingangsdiagnose am Kapitelanfang mit 5–8 `check`-Fragen zu den Voraussetzungen; jede Frage verlinkt den Herkunftsabschnitt. | ≥ 5 | M, V |
| K3 | Aufgaben gesamt (ohne `check`) | ≥ 6 × Lernabschnitte, mindestens 60. Niveaus 30–40 % / 35–45 % / 20–30 %. | M, V |
| K4 | Prüfungsaufgaben im SBP-Format: mehrteilig, mit `punkte`, Sachkontext, Zeitrichtwert. Musterprüfungsaufgaben dürfen in Kapiteln **nicht** wortgleich vorkommen (sie sind für die Simulationen reserviert). | ≥ 5, davon ≥ 3 ohne Vorlage in einer Musterprüfung | M, V |
| K5 | Abschnitt **„Gemischte Wiederholung“** vor den Prüfungsaufgaben (Interleaving und Spacing). | ≥ 8 Aufgaben; ≥ 4 aus ≥ 2 früheren Kapiteln, ≥ 2 Aufgaben „Welches Verfahren passt?“ ohne Rechenpflicht | M, V |
| K6 | **Zusammenfassung** `:::zusammenfassung` mit 5–8 Kernaussagen. Davor steht `reflexion`: „Schreib zuerst selbst die 3 wichtigsten Aussagen auf“ (generatives Abrufen). | 1 | M, V |
| K7 | Fehlerkatalog des Kapitels (Abschnitt oder Kasten „Die 10 häufigsten Fehler“) mit Verweis auf die Aufgabe, die jeden Fehler trainiert. | ≥ 8 Fehler | M, R |
| K8 | Karten (mündlich) | 12–20, je Lernziel ≥ 1. ≥ 4 „Warum“-, Gegenbeispiel- oder Zusammenhangsfragen; ≥ 2 Karten verbinden zwei Kapitel. | M, V |
| K9 | Trainingsgeneratoren decken jedes rechnende Lernziel ab. In Kapiteln mit Gewicht 3 gibt es ≥ 3 Generatoren für N2/N3 (nicht nur Routine). | ≥ 10 | M, V |
| K10 | Querverweise vor- und rückwärts. Physik verweist an jeder Stelle mit Mathe-Werkzeug (Vektoren, Ableitung, Integral, Exponentialfunktion, Logarithmus, Trigonometrie) auf den mathe3-Abschnitt. | ≥ 5 | M, V |
| K11 | Kalibrierung: Am Kapitelende steht ein Lernziel-Selbstcheck (Konfidenz 1–3 je Lernziel). Die Plattform vergleicht ihn mit den Ergebnissen (siehe D). | 1 | S, V |
| K12 | Umfang: 4.000–9.000 Wörter Fließtext. Mehr Text nur, wenn A12 eingehalten ist. Ein Kapitel unter 3.000 Wörtern gilt als unvollständig. | – | M, V |
| K13 | `npm run lernen:pruefen`: 0 Fehler. Jede Zahl in `loesung` ist ein Rechenausdruck. Zweitkontrolle der Physik durch eine zweite Person mit Protokoll. | – | M |
| K14 | Physik zusätzlich: je Kapitel ≥ 2 Diagramm-Lese-Aufgaben, ≥ 1 Größenordnungsabschätzung (Fermi), ≥ 1 Auswertung von Messdaten mit Messunsicherheit, ≥ 3 qualitative Konzeptfragen (Peer-Instruction-Stil, Distraktoren = Fehlvorstellungen), ≥ 1 Freihand- oder Gedankenexperiment, ≥ 1 Proportionalitätsschluss („Was passiert mit X, wenn Y verdoppelt wird?“). | – | M, V |

### A.3 Je Kurs

| Nr | Kriterium | Mindestwert |
|---|---|---|
| C1 | Prüfungssimulationen. Davon sind die Musterprüfungs-Nachbauten **unverbraucht**: Ihre Zahlen kommen in keinem Kapitel vor. | mathe3 ≥ 9, physik1 ≥ 6 |
| C2 | Diagnosetest (Eingangstest Kurs) mit Kapitelzuordnung: 2 Fragen je Kapitel | 1 |
| C3 | Formelsammlung mit Anker je Kapitel und Kennzeichnung „steht in der Schulformelsammlung / musst du können“ | 1 |
| C4 | Glossar: jede `:::definition` mit stabiler `id` (Grundlage für Suche und Tooltips) | 100 % |
| C5 | Lehrplan-Abdeckungsmatrix (SBP-Anlage 1 und AHS-Lehrplan) mit Status je Thema: abgedeckt / Vertiefung / fehlt | aktuell |

### A.4 Messbarkeit

Der Validator (`scripts/lernen-pruefen.ts`) soll die V-Kriterien als **Warnung mit Kennung** ausgeben, z. B. `Q-A5 09/Tangente und Normale: 5 Übungen < 6`. Ein Kapitel ist erst abnahmefähig, wenn 0 M-Warnungen offen sind.

Dafür nötige Inhalts-Metadaten:

- bereits im Schema: `kompetenz`, `art: check`, `gefuehrt`, `fehler`, `voraussetzungen`, Kasten `zusammenfassung` und `vorwissen`, `reflexion`
- neu: `lernziel` je Aufgabe und `id` für Karten

---

## B. Gap-Liste je Kapitel

### B.0 Kursweite Befunde mathe3 (messbar, Stand heute)

| Kennzahl | Ist | Soll (Rubrik) |
|---|---|---|
| Übungen je Lernabschnitt | Median 4 (Spanne 0–8). 0 Übungen in: 05 „Graphen der Winkelfunktionen“, 14 „Flächenproblem“, 14 „Definition der Integrierbarkeit“, 17 „Lineare Regression“, 02/10 „Überblick“-Abschnitte | ≥ 6 |
| Lernabschnitte ohne `:::beispiel` | 20, u. a.: 05 „Winkel“, 05 „Einheitskreis“, 05 „Graphen“, 09 „Monotonie, Extremstellen und Krümmung“, 11 „Anschauung“, 11 „Eigenschaften konvergenter Folgen“, 12 „Standardgrenzwerte“, 14 „Welche Funktionen sind integrierbar?“, 14 „Eigenschaften des Integrals“, 14 „Hauptsatz“, 15 „Warum“, 15 „Algebraische Form“, 17 „Grundbegriffe“ | 0 |
| Übungen, die ein Beispiel desselben Kapitels **wörtlich wiederholen** | 68 von 731 (9 %). Spitzenreiter: 05 (10/40), 07 (10/41), 06 (7/42), 11 (7/41), 09 (6/45). Die Prüfung erkennt nur identische Terme; mit identischen Sachkontexten ist die Zahl deutlich höher (z. B. `wk-kombi-7aus50`, `wk-baum-mindestens`, `wk-kombi-modell`, `tr-hoehenwinkel`, `tr-zwei-standpunkte`, `gf-eps-1n`, `dr-tangente-aeusserer-punkt`, `dr-produktregel`, `dr-kettenregel` k₃) | 0 |
| Musterprüfungsaufgaben im Kapitel vorgerechnet | Alle drei Musterprüfungen. Beispiele: SK 3.1 in Kap. 09 als `:::beispiel` **und** als Aufgabe, SK 2.3 in Kap. 11 vollständig vorgerechnet, Karigl 4/5 und Winkler 2/3 in Kap. 05, 09, 16. Die „Original“-Simulationen `pruefungen/01–03` sind damit **verbrauchte Testitems**, und die Simulation überschätzt die Prüfungsreife. | 0 im Kapitel; Kapitel nutzen isomorphe Varianten |
| Fading (`gefuehrt`) | 0 Aufgaben im ganzen Kurs | ≥ 1 je Abschnitt |
| Fehlerbilder (`fehler`) | 0 | siehe A9 |
| `reflexion`, `check`, `kompetenz`, `voraussetzungen`, `zusammenfassung`, `vorwissen` | jeweils 0 | siehe A und K |
| Gemischte Wiederholung im Kapitel | 0. Interleaving nur in Kap. 18 (21 Selbsttests) und im Trainer | K5 |
| Referenzkapitel 15 (komplexe Zahlen) | **dünnstes Kapitel**: rund 1.200 Wörter, 16 Aufgaben, 6 Generatoren. AUTHORING.md nennt es Vorbild „mit 6.000–12.000 Wörtern“. Das widerspricht sich. | K3 und K12 erfüllen. Referenzstatus erst danach vergeben. |
| Aufgabenformate | Fast nur Rechnen und MC. „Fehler finden“ ist kursweit selten. Umkehraufgaben gibt es vereinzelt (Steckbrief, Sollwert). Abschätzaufgaben fehlen. | A7 |

### B.0a Abgleich mit Lehrplan und Vorkurs

Quellen:

- RIS, AHS-Lehrplan Anlage A, Fassung 05.10.2026 (BGBl. II Nr. 204/2024). Verpflichtend ist alles, was nicht kursiv [K] gesetzt ist.
- SRDP-Grundkompetenzkatalog, Stand November 2024. Neu ab Mai 2027: WS 3.4 und 3.5 (Normalverteilung).
- Inhaltsverzeichnisse „Mathematik verstehen 5–8“ (DNB-TOC).
- TU Wien AKMATH (LVA 101A26/101A27). Einen „Brückenkurs“ gibt es an der TU nicht.
- Die DMG-Institutsseite empfiehlt „Mathematik verstehen 8, vor allem Kap. 9–13“ (Kompendium).

**Pflicht laut AHS-Lehrplan, im Kurs fehlend oder nur gestreift** (die Schuläquivalenz verlangt Ergänzung, Kennzeichnung als „Vertiefung über SBP hinaus“ erlaubt):

| Lehrplaninhalt (Klasse/Modul) | Status im Kurs | Ziel |
|---|---|---|
| Aussagen und Mengen; nichtdekadische Zahlensysteme (5.) | nur gestreift (01) | Abschnitt in 01 |
| Polarkoordinaten (5., Trigonometrie) | fehlt | Abschnitt in 05 (Brücke zu 15) |
| Trigonometrie in Figuren **und Körpern** (5.) | Körper fehlen | Abschnitt in 05 |
| Funktionen mehrerer Variablen, Formeln funktional (KM3) | fehlt | Abschnitt in 04 |
| Änderungsmaße: absolute/relative Änderung, Änderungsfaktor (KM3, SRDP AN 1.1) | nur Achtung-Kasten (09) | Übungsblock in 04 oder 09 |
| Kegelschnitte: Gleichungen (KM5, verpflichtend) | fehlt (0 Treffer) | Abschnitt in 07 |
| Fundamentalsatz der Algebra (KM6) | fehlt | Abschnitt in 15 |
| Anwendungen der Differentialrechnung in Wirtschaft: Kosten, Erlös, Gewinn (KM6) | nur Grenzkosten | Abschnitt in 09 |
| Konfidenzintervalle (KM7) | Ausblick, 2 Aufgaben (17) | vollwertiger Abschnitt |
| **Einfache Hypothesentests** (KM7, verpflichtend) | fehlt (0 Treffer) | Abschnitt in 17 |
| **Differenzen- und Differentialgleichungen**, Systemdynamik (KM7, verpflichtend) | fehlt (0 Treffer) | neues Kapitel oder Abschnitte in 08/10 |
| Rotationsvolumen, Integralfunktion (SRP-Entwurf A-C) | vorhanden (10/14) | – |
| Prognose- bzw. Streubereiche, σ/√n (SRP-Entwurf DZ-C) | fehlt | Abschnitt in 16/17 |
| [K] Kurven in Parameterdarstellung | fehlt | Vertiefung in 07 |

**Nicht** im Lehrplan, aber im Kurs (SBP- bzw. Uni-Niveau, korrekt so):

- ε-N/ε-δ, Vollständigkeit, Riemann-Integrierbarkeit exakt (SBP „Exaktifizierung“)
- Matrizen, Determinanten, Cramer (SBP)
- Kreuzprodukt (Mathematik verstehen 6, nicht SRP)

Die Abweichung zwischen der Institutsseite (Mathe 2 ohne Matrizen) und der Verordnung ist bekannt. Maßgeblich ist die Verordnung, und der Kurs folgt ihr.

AKMATH (Funktionen, Differential- und Integralrechnung, Vektoren und analytische Geometrie, komplexe Zahlen) ist vollständig enthalten. Komplexe Zahlen sind dort ein eigener Block: ein weiteres Argument, Kap. 15 auszubauen.

### B.1 mathe3: Kapitel für Kapitel

Gaps gegenüber SBP-Anlage 1 (S), AHS-Lehrplan/SRDP-Grundkompetenzen (L), Schulbuch „Mathematik verstehen 5–8“ (B) und Uni-Vorkurs/Brückenkurs (U). Pädagogische Mängel sind mit (P) markiert.

**01 Zahlen**
- (L/U) Fehlende Themen:
  - Grundbegriffe Mengenlehre (Vereinigung, Durchschnitt, Differenz, Mengenschreibweise)
  - Aussagenlogik und Beweistechniken (direkt, indirekt, Kontraposition), im Brückenkurs Standard
  - Teilbarkeit, ggT/kgV, Primfaktorzerlegung (nur gestreift)
  - Zahlensysteme / Binärdarstellung (für Informatik relevant; nur erwähnt)
  - Ungleichungsregeln
- (P) „Betrag und Intervalle“ hat kein Beispiel. Prüfungsaufgaben sind 6/6 `text`, damit nicht automatisch prüfbar.

**02 Gleichungen**
- (L) Fehlende Themen:
  - Gleichungen mit Parameter (Fallunterscheidung)
  - Lösen durch Polynomdivision höheren Grades als eigene Übung (nur gestreift)
  - nichtlineare Gleichungssysteme (z. B. Gerade ∩ Parabel)
  - Wurzelungleichungen
  - Betragsungleichungen mit zwei Beträgen
- (P) „Gleichungen und Äquivalenzumformungen“ hat 1 Aufgabe und 0 Beispiele. Der „Überblick“-Abschnitt hat keine Zuordnungsübung, obwohl er genau dafür gemacht ist („Welcher Typ?“ als MC-Serie).

**03 LGS und Matrizen**
- (L/U) Fehlende Themen:
  - Matrizen als lineare Abbildungen (Drehung, Spiegelung, Streckung): AHS-Lehrplan Wahlbereich, im Uni-Einstieg zentral
  - Übergangsmatrizen und Leontief-Modell (Mathematik verstehen 6, „Matrizen in Anwendungen“)
  - LGS mit Parameter (Lösbarkeit in Abhängigkeit von a)
- (P) „Grundbegriffe“ ohne Beispiel, „Cramersche Regel“ mit 2 Aufgaben.

**04 Funktionen**
- (L) Fehlende Themen:
  - Polynomdivision mit Asymptote (schiefe Asymptote)
  - Logistisches Wachstum: nur erwähnt, ohne Aufgaben
  - Funktionen in mehreren Variablen (AHS 6: „Funktionen in zwei Variablen, Formeln als Funktionen“)
  - Kontextdeutung von Parametern (SRDP FA 1.x/2.x: „Parameter deuten“)
- (P) Mehrere Abschnitte haben nur 2 Aufgaben: lineare Funktionen, Eigenschaften, Transformationen, Betrag, Logarithmus. Das ist für ein Grundlagenkapitel mit Gewicht 3 zu wenig.

**05 Trigonometrie**
- (L/B) Fehlende Themen:
  - Trigonometrie im Raum: Pyramide, Quader, Neigungswinkel, Winkel zwischen Raumdiagonale und Grundfläche (Mathematik verstehen 5/6)
  - Kreissegment und Sehne, Bogen-Sehnen-Vergleich
  - Polarkoordinaten (für Kap. 15 nötig)
  - Summe von Sinusschwingungen und Schwebung (Brücke zu Physik 08)
  - Kosinus-/Tangensfunktion als allgemeine Form
  - Ableitung trigonometrischer Funktionen als Vorgriff (steht in 09)
- (P) „Graphen der Winkelfunktionen“: 358 Wörter, 2 Plots, **0 Aufgaben**.
- (P) „Einheitskreis“ und „Winkel“: 0 Beispiele.
- (P) 10 von 40 Übungen wiederholen Beispiele wörtlich, u. a.:
  - `tr-rechtwinklig-seiten` = Beispiel c = 12, α = 35°
  - `tr-hoehenwinkel` = Beispiel „Turmhöhe“
  - `tr-zwei-standpunkte` = Beispiel „Bergspitze“
  - `tr-gleichung-cos`, `tr-gleichung-doppelwinkel` und `tr-gleichung-quadratisch` = Beispiele im Abschnitt
  - `tr-ssw` = Beispiel „Zwei Lösungen“
- (P) Fehlvorstellungen sind gut adressiert: Prozent ≠ Winkel, Hypotenuse vs. waagrecht, sin⁻¹ ≠ 1/sin, DEG/RAD. Diese Fehler sind aber nicht als `fehler`-Feedback hinterlegt. Typischer Kandidat: `tr-pruefung-strasse` mit Antwort 175,4 m soll die Meldung „waagrecht statt Hypotenuse“ auslösen.

**06 Vektoren**
- (L/U) Fehlende Themen:
  - Vektorraumbegriff / Linearkombination als Basisdarstellung (nur erwähnt)
  - Physikalische Anwendungen: Kräfteparallelogramm, Arbeit als Skalarprodukt (Brücke zu Physik 03/04)
- (P) 7/42 Duplikate, u. a. Karigl-Parallelogramm im Text **und** als Aufgabe **und** in der Simulation 01.

**07 Analytische Geometrie**
- (S) Kreis, Kugel, Gerade und Ebene sind abgedeckt.
- (L/B) Fehlende Themen:
  - Kegelschnitte (Ellipse, Hyperbel, Parabel; Mathematik verstehen 7). Nicht SBP-pflichtig, für die Schuläquivalenz aber Pflicht (mindestens als Vertiefung).
  - Schnitt Kreis–Kreis
  - Tangente von einem äußeren Punkt an den Kreis
  - Winkel Gerade–Ebene: auf Aufgabenzahl prüfen
- (P) 10/41 Duplikate. „Gerade und Ebene“ und „Zwei Ebenen“ haben je 2 Aufgaben.

**08 Folgen und Reihen**
- (L) Fehlende Themen:
  - Differenzengleichungen / rekursive Modelle (AHS 6/7: „Differenzengleichungen“ für Wachstum und Abnahme; SRDP: rekursive Darstellung). Kursweit **fehlen sie** (Suche: 0 Treffer).
  - Kredit- und Tilgungsplan als Tabelle
  - Barwert und Endwert mit unterjähriger Verzinsung
- (P) Vollständige Induktion hat 5 `text`-Aufgaben ohne automatisches Feedback. Hier wäre `gefuehrt` mit Teilschritten (Induktionsanfang, -schritt als Termumformung) prüfbar und stark.

**09 Differentialrechnung**
- (S) vollständig.
- (L/B/U) Fehlende Themen:
  - Graphisches Differenzieren rückwärts: aus dem Graphen von f′ auf f schließen (SRDP AN 3.3). Es gibt nur die Richtung f → f′.
  - Ableitungsfunktion skizzieren lassen (Darstellungswechsel als Aufgabe)
  - Ableitung von Umkehrfunktionen und arcsin/arctan (steht in 13, hier fehlt der Verweis)
  - Implizites Differenzieren (U, Vertiefung)
  - Änderungsmaße der SRDP (absolute/relative Änderung, Änderungsfaktor, Differenzenquotient) als eigener Übungsblock. Bisher nur ein Achtung-Kasten.
  - Kostentheorie: Erlös, Gewinn, Break-even, Cournot (Mathematik verstehen 7, Anwendungsklassiker)
  - Optimierung mit Randextremum als Aufgabe (bisher nur Achtung-Kasten)
  - Linearisierung / Fehlerfortpflanzung als Aufgabe (bisher nur Beispiele): wichtig für die Physik-Messunsicherheit
  - Physikalische Ableitungen (v aus s, a aus v) mit Diagrammen ohne Term
- (P) Duplikate:
  - `dr-produktregel` verwendet exakt die Funktionen des Beispiels (x² sin x, (x²−1)eˣ).
  - `dr-hoehere-ableitungen` = Beispiel.
  - `dr-tangente-aeusserer-punkt` = Beispiel (f = x², Q(1|−3)).
  - `dr-pruefung-kurvendiskussion` = Beispiel SK 3.1 einen Bildschirm weiter oben.
- (P) „Monotonie, Extremstellen und Krümmung“: 552 Wörter, 4 Sätze, **0 Beispiele**, erst danach Aufgaben.
- (P) „Ableitungsregeln“: 855 Wörter Theorie und Beispiele am Stück, danach 8 Aufgaben gebündelt (Blocked practice). Es gibt keine „Welche Regel?“-Sortieraufgabe vor dem Rechnen.
- (P) `dr-kd-rational` gibt f″ in der Angabe vor. Das ist gut als Entlastung, aber eine Variante mit selbst berechnetem f″ fehlt.

**10 Integralrechnung**
- (S) vollständig.
- (L) Fehlende Themen:
  - Integral als Rekonstruktion aus Änderungsrate (SRDP AN 4.3: Bestand aus Rate, Diagrammlesen)
  - Uneigentliche Integrale: stehen in 14, hier nur Verweis
  - Stetige Zufallsvariable (Integral der Dichte): steht in 16 nur als Definition, ohne Aufgabe
  - Einfache Differentialgleichungen y′ = ky, y′ = k(S−y) (AHS 8, Mathematik verstehen 8, Physik-Brücke Zerfall/Abkühlung): **fehlt kursweit**
- (P) Der Überblick „Welche Technik wann?“ hat keine Zuordnungsaufgabe.

**11 Grenzwerte von Folgen**
- (S) vollständig, fachlich sehr gut (Quantorenspiel, Gegenbeispiele, Beweise).
- (U) Fehlende Themen:
  - Teilfolgen, Häufungspunkte und Bolzano–Weierstraß: nur in einer MC-Option erwähnt. Uni-Einstieg und mündliche Prüfungsfrage „beschränkt ⇒ konvergente Teilfolge?“.
  - Cauchy-Folgen als zweite Vollständigkeitsformulierung
  - Majoranten-/Quotientenkriterium für Reihen (Vertiefung)
  - Leibniz-Kriterium: nur erwähnt
- (P) Duplikate:
  - `gf-eps-1n` (ε = 0,001 → 1001, im Text vorgerechnet)
  - `gf-eps-bruch` (= Beispiel, ε = 0,01 → 100)
  - `gf-qn-schwelle` (= Beispiel 0,9ⁿ < 0,001)
  - `gf-bestimmt-divergent-k` (= Beispiel n² − 10n > 1000)
  - `gf-beschraenkt-beweis` (= Beweis im Text)
- (P) „Eigenschaften konvergenter Folgen“ hat 0 Beispiele. Die Beweise sind Lesetext, dazu gibt es kein „Beweis-Puzzle“ und keinen Lückenbeweis (`gefuehrt` wäre ideal).
- (P) „Monotonie und Beschränktheit beweisen“ ist das prüfungsrelevanteste Thema (SK 2.3), hat aber **nur 2 Übungen**.

**12 Grenzwerte und Stetigkeit**
- (S) vollständig.
- (U) Fehlende Themen:
  - Gleichmäßige Stetigkeit (Vertiefung)
  - Umkehrfunktion stetiger Funktionen
- (P) „Standardgrenzwerte“: 0 Beispiele. „Arten von Unstetigkeitsstellen“: 2 Aufgaben. Prüfungsaufgaben sind zu 6/5 Teilen `text`.

**13 Differenzierbarkeit**
- (S) vollständig, inklusive Umkehrfunktion und de l'Hospital.
- (U) Fehlende Themen:
  - Taylorpolynom höheren Grades mit Restglied: Ausblick nur 221 Wörter, 2 Aufgaben
  - Konvexität exakt
  - Ableitung von arcsin/arctan als Aufgabe (prüfen)

**14 Integrierbarkeit**
- (S) vollständig.
- (P) Struktur:
  - Vier Lernabschnitte haben 0 Beispiele: „Flächenproblem“, „Definition“, „Welche Funktionen“, „Eigenschaften“.
  - Der „Hauptsatz“ hat 0 Beispiele. Gerade dort fehlt die Aufgabe „F(x) = ∫ₐˣ f, F′ bestimmen, Graph von F aus Graph von f“.
  - „Flächenproblem“ und „Definition der Integrierbarkeit“ haben 0 Übungen.

**15 Komplexe Zahlen**
- (S) M3-Pflicht (Karigl 6).
- Fehlende Themen:
  - Mengen in ℂ zeichnen: |z − z₀| ≤ r, Re z > 1, arg z = φ (L/U-Standard, typische Prüfungs-Teilaufgabe)
  - Fundamentalsatz der Algebra
  - Polynome mit reellen Koeffizienten: konjugierte Nullstellenpaare
  - Faktorisieren über ℂ
  - Gleichungen zⁿ = w mit Zeichnung des regelmäßigen n-Ecks: Aufgabenzahl erhöhen
  - Exponentialform mit Rechenübungen
  - Anwendung Wechselstrom (Brücke Physik 14)
- (P) Insgesamt nur 16 Aufgaben; jeder Abschnitt hat 2–4. Die Kapitel-Statistik verfehlt K3 und K12 deutlich. **Höchste Mathe-Priorität**, weil das Kapitel Pflichtstoff ist und bisher als Vorbild dient.

**16 Wahrscheinlichkeit**
- (S) vollständig, Bayes didaktisch vorbildlich mit natürlichen Häufigkeiten.
- (L/B) Fehlende Themen:
  - Stetige Zufallsvariablen allgemein: Dichte f(x) = c·x auf [0, 2] normieren, P und E berechnen (Mathematik verstehen 8)
  - Prognose- bzw. Streubereiche μ ± zσ für binomialverteilte Größen als Aufgabe (AHS 8)
  - Erwartungswert von Summen
  - Geometrische Verteilung: nur im Achtung-Kasten erwähnt
  - Kombination mit Wiederholung: Vertiefung ohne Aufgabe
  - Geburtstagsproblem als Aufgabe
  - Simulationen (Gesetz der großen Zahlen) als Widget
- (P) `wk-kombi-7aus50` und `wk-baum-mindestens` wiederholen die Beispiele wörtlich, ebenso `wk-kombi-modell` (Vereinsämter = Beispiel). „Hypergeometrische Verteilung“ hat 3 Aufgaben, „Normalapproximation“ 2.

**17 Statistik**
- (S) vollständig.
- (L) Fehlende Themen:
  - Konfidenzintervall nur als Ausblick (2 Aufgaben). AHS 8 verlangt das Arbeiten mit Konfidenzintervallen (Breite, Stichprobenumfang bestimmen).
  - Hypothesentest fehlt (in älteren Lehrplänen/Büchern enthalten, mindestens Vertiefung)
  - Quantile, empirische Verteilungsfunktion als Aufgabe
- (P) Fehler und Lücken:
  - „Zweidimensionale Daten: lineare Regression“ hat **0 Aufgaben**, obwohl sie Lernziel ist.
  - Insgesamt nur 32 Aufgaben.
  - „Häufigkeiten“ und „Diagramme“ haben je 1–2 Aufgaben.

**18 Prüfungsstrategie**
- (P) Sehr gute Analyse der Musterprüfungen. Der „Lernplan bis 26. Februar 2027“ ist statischer Text und gehört als Funktion in die Plattform (D, P1-4). Die 50 Karten „quer durch“ sind gut, aber ohne Fälligkeit (D, P0-1).

### B.2 physik1: Kapitel für Kapitel

**Kursweite Befunde physik1 (gemessen):**

| Kennzahl | Ist | Soll |
|---|---|---|
| Fließtext je Kapitel | 3.191–5.995 Wörter. **Kein Kapitel** erreicht die AUTHORING-Untergrenze von 6.000. | K12: 4.000–9.000 bei eingehaltener Segmentierung |
| `:::beispiel`-Kästen | 41 im ganzen Kurs. **0** in Kap. 03, 14, 16; in 01, 02, 04, 08 haben ≥ 6 von 8–9 Abschnitten keines. | ≥ 2 je Abschnitt (A2) |
| Aufgaben | 577 (32–47 je Kapitel), Niveauverteilung ≈ 35/43/21 % ok | ≥ 6 je Abschnitt, mindestens 60 je Kapitel |
| Abschnitte ohne Aufgaben | 10 „Wärme und innere Energie“ (der wichtigste für die mündliche Prüfung), 11 „Der zweite Hauptsatz“ (Aufgaben stehen unter dem 3. Hauptsatz), 07 „Gekoppelte Schwingungen“, 05 „Überblick“ | 0 |
| Plots | 36 im Kurs. **0** in 09 und 14. Kap. 03 hat ein einziges Freikörperbild, und das ist falsch (C.1). | Freikörperbild bzw. Schaltskizze bzw. Feldbild je Abschnitt (A11) |
| Selbsterklärung / Vorhersagefragen | 2 Treffer im ganzen Kurs | A10, A17 |
| Messunsicherheit / signifikante Stellen | nur Kap. 01 (37 Treffer), danach 0 | K14 |
| Diagramm lesen, Messdaten auswerten, Fermi-Abschätzung | außer in 01, 02 und 11 praktisch nicht vorhanden | K14 |
| Querverweise auf mathe3 | 0 | K10 |
| Lösungswege ohne Zwischenschritte | 07: 6, 08: 6, insgesamt 35 | 0 (A14) |
| Trainingsgeneratoren | 8–9 je Kapitel (135). Nur Formel-Einsetzen; keine Diagramm-, Konzept- oder gemischten Generatoren | K9: ≥ 10, davon ≥ 3 N2/N3 |
| Prüfungssimulationen | 3 schriftliche (je 7 Aufgaben, 180 min) plus 1 mündlicher Pool mit **11 Fragen**. Schriftlich nie geprüft werden Coulomb/Feld, Induktion in Zahlen, Wechselstrom, Bernoulli, Doppler/Schallpegel, Mischungsrechnung/latente Wärme, Meteorologie, Halbleiter, Messunsicherheit, Drehmoment. `psc-3-waermepumpe` = `p11-waermepumpe` (Dublette). Mündlich fehlen die Kap. 1 („Arbeitsweisen“ ist ausdrücklich Anlage-1-Stoff), 2, 4, 6, 9, 10, 12, 13, 15. | C1: ≥ 6 schriftlich, mündlicher Pool deckt alle 16 Kapitel ab |
| Fehlvorstellungen | gut adressiert: Antrieb/Impetus, actio=reactio am selben Körper (Buch auf Tisch, Pferd und Wagen), Wärme ≠ Temperatur, Faraday-Käfig/Reifen, Vorzeichen des 1. Hauptsatzes | fehlende Fehlvorstellungen siehe je Kapitel, jede als Konzeptaufgabe mit `fehler`-Feedback |

**Abgleich mit dem Lehrplan:** Die Abdeckungsmatrix von PLAN.md (Anlage 1 → Kapitel) ist formal erfüllt. Der heutige AHS-Lehrplan Physik kennt mehrere SBP-Themen kaum, nämlich einfache Maschinen, Kirchhoff, Wechselstrom, Maschinen, Messgeräte, Halbleiter, Hydro- und Aeromechanik, Meteorologie, geometrische/physiologische Optik und optische Geräte. Der Kurs muss sie also selbst tragen, Schulbücher helfen dort wenig (Big Bang 5–8 behandelt einiges nur am Rand).

Umgekehrt führt der Lehrplan Themen, die über die SBP hinausgehen: spezielle Relativitätstheorie, Quanten- und Teilchenphysik, Kosmologie, Strahlungshaushalt und Klima. Für die Schuläquivalenz genügt dafür je ein gekennzeichneter Vertiefungsabschnitt; bevorzugt in 16, Strahlungshaushalt/Klima in 11.

**Je Kapitel** (Inhalte und Aufgabentypen; „FV“ = fehlende Fehlvorstellung als Konzeptaufgabe):

1. **Größen, Einheiten, Messen**
   - Messreihe auswerten: Mittelwert, Standardabweichung, Unsicherheit des Mittelwerts
   - Ausgleichsgerade und Linearisierung (z. B. T² gegen l)
   - Fehlerfortpflanzung über die Linearisierung (Brücke zu mathe3 09)
   - Nur 3 Fermi-Aufgaben
   - `\text{µs}` in Zeile 468/478 erzeugt 21 KaTeX-Warnungen → `\mu\text{s}`
   - 7 von 9 Abschnitten ohne Beispiel
2. **Kinematik**
   - Fläche unter einem nicht konstanten v-t-Diagramm
   - Einholprobleme aus zwei Graphen
   - Relativbewegung in 2D (Boot im Fluss, Querwind)
   - FV: „v = 0 ⇒ a = 0“ (höchster Punkt beim Wurf)
   - 7 von 9 Abschnitten ohne Beispiel
3. **Dynamik**
   - 0 Beispiele, Freikörperbild falsch (C.1)
   - Inhalte:
     - Freikörperbild-Training (Auswahl aus 4 Bildern; Bilder zu Atwood, Lift, Lampe, Rolle, Kugelpendel)
     - Körper die Ebene hinaufgestoßen (a hinauf ≠ a hinab)
     - gekoppelte Körper mit Reibung
     - asymmetrisches Drei-Kräfte-Gleichgewicht
     - F aus einem v-t-Diagramm
     - μ aus einer Messreihe
     - Impulsform dp/dt üben
     - Federn in Reihe herleiten
   - FV:
     - Federwaage zwischen zwei Gewichten
     - Haftreibung in Bewegungsrichtung (anfahrender LKW, Gehen)
     - Normalkraft als Reaktion der Gewichtskraft (als Aufgabe Waage oder Lift)
     - schwere Körper fallen schneller (mit Luftwiderstand)
4. **Arbeit, Energie, Impuls**
   - Kürzestes Kapitel, 1 Beispiel
   - Arbeit als Skalarprodukt (Brücke zu mathe3 06)
   - Arbeit als Fläche unter F(s)
   - P = F·v
   - schiefer Stoß qualitativ, Impuls als Vektor, Schwerpunktsystem
   - Energieflussdiagramme
   - FV: „Energie wird verbraucht“
5. **Drehbewegung und einfache Maschinen**
   - Rollen auf der schiefen Ebene (Voll- vs. Hohlzylinder)
   - Leiter an der Wand
   - Drehimpulserhaltung in Zahlen (Pirouette)
   - Aufgaben im Abschnitt „Überblick“
6. **Kreisbewegung und Gravitation**
   - Gravitationsfeld und -potential mit Bild
   - Gezeiten
   - Kepler II quantitativ
   - Bahnwechsel und Satellitenenergie
   - Freikörperbilder Kurve/Karussell/Looping
   - FV: „Zentrifugalkraft wirft hinaus“ (Inertialsystem vs. mitrotierend)
7. **Schwingungen**
   - x(t), v(t), a(t) als Diagramm mit Phasenbeziehung zum Ablesen
   - Resonanzkurve ablesen
   - gedämpfte Kurve auswerten (Abklingkonstante)
   - Federn in Reihe/parallel in Zahlen
   - Vertiefung „Gekoppelte Schwingungen“ ohne Aufgaben
   - 6 Lösungen ohne Zwischenschritte
8. **Wellen, Akustik**
   - y(x, t) aus zwei Momentaufnahmen
   - Lautsprecher-Interferenz mit Gangunterschied
   - Mach-Kegel
   - Kurven gleicher Lautstärke / Phon
   - Schwebung mit Brücke zu mathe3 05 (Additionstheorem)
   - FV: „Schall transportiert Materie“
   - 1 Beispiel, 6 Lösungen ohne Zwischenschritte
9. **Hydro- und Aeromechanik**
   - 0 Plots: Druck über der Tiefe, barometrische Höhenformel als Graph
   - Oberflächenspannung und Kapillarität
   - Stokes-Reibung quantitativ (Voraussetzung für Millikan in Kap. 12)
   - FV:
     - Auftrieb hängt von der Tiefe ab
     - Tragflügel nur „längerer Weg oben“
10. **Temperatur, Wärme, Gase**
    - „Wärme und innere Energie“ ohne Aufgaben: Zuordnungsaufgabe „hat Temperatur / hat innere Energie / gibt Wärme ab“
    - Kalorimeter mit Gefäßwärmekapazität üben
    - V-T- bzw. p-T-Extrapolation auf −273 °C selbst durchführen
    - Erwärmungskurve ablesen
    - Maxwell-Verteilung als Bild
    - Heißluftballon (Gasdichte)
    - zusammengesetzte Wand
    - Abkühlungsdaten auswerten (Brücke zu exponentieller Abnahme in mathe3 04)
    - FV:
      - Kälte als Stoff
      - Pullover erzeugt Wärme
      - Eis ist immer 0 °C
      - Loch im Ring wird beim Erwärmen kleiner
11. **Hauptsätze, Maschinen, Meteorologie**
    - Aufgaben in den Abschnitt „Der zweite Hauptsatz“ verschieben bzw. ergänzen
    - **Standardaufgabe Kreisprozess** mit 3–4 Teilschritten und Tabelle Q/W/ΔU sowie Wirkungsgrad (Schul- und Uni-Standard)
    - adiabatische Arbeit
    - Entropie bei isothermer Expansion
    - Leistungszahl Kühlschrank in Zahlen
    - Sättigungskurve als Plot
    - Wetterkarte/Isobaren und Fronten als Aufgabe
    - Inversion/Smog
    - Coriolis-Ablenkregel an Kap. 6 anbinden, Luftdruck aus 9 abrufen
    - FV:
      - isotherm = ohne Wärmeaustausch
      - Kühlschrank erzeugt Kälte
12. **Elektrostatik**
    - Kräfte als Vektorsumme (Ladungen im Dreieck oder Quadrat): Lernziel ohne Aufgabe
    - Feldbilder: gleichnamige Ladungen, Platte mit Randfeld, Äquipotentiallinien, E(r) und φ(r); Feldlinien-Widget (in WUENSCHE.md offen)
    - Energieerhaltung im Radialfeld (kleinster Abstand nach Rutherford)
    - Kapazität einer Kugel
    - Energiebilanz beim Laden (die Hälfte geht im Widerstand verloren)
    - Dielektrikum bei getrennter Quelle
    - Millikan aus mehreren Messwerten (ggT)
    - FV:
      - Feldlinien sind Bahnen
      - Ladung sitzt im Inneren eines Leiters
      - Spannung „fließt“
      - größere Ladung erfährt größere Kraft
    - Abschnitt „Natur und Technik“: 591 Wörter, 2 Aufgaben
13. **Gleichstrom**
    - Kennlinien messen und auswerten (Glühlampe, Diode)
    - Batterie ist keine Konstantstromquelle
    - Wheatstone-Brücke
    - Leistungsanpassung
    - Elektrolyse (Faraday), nur Vertiefung
    - FV:
      - Strom wird in der Lampe verbraucht
      - Batterie liefert konstanten Strom
14. **Magnetfeld, Induktion, Wechselstrom**
    - **0 Beispiele, 0 Plots.** Folgendes fehlt:
      - u(t)/i(t) mit Phasenverschiebung an R, L, C
      - Feldlinienbilder (Stabmagnet, Leiter, Spule)
      - Hand-Regeln mit Skizze
      - Wirk- und Blindleistung
      - Schwingkreis (Thomson) als Aufgabe
      - Hall-Effekt und Erdmagnetfeld als Aufgabe
      - Komplexe Zeiger als Vertiefung, Brücke zu mathe3 15
    - FV: Magnetpole = Ladungen
15. **Geometrische Optik**
    - Konstruktionsaufgaben mit Lösungsbild (Strahlengang)
    - Prisma quantitativ
    - Regenbogen
    - additive/subtraktive Farbmischung als Aufgabe
    - Brillenrechnung (Nah- und Fernpunkt)
    - FV:
      - Licht kommt aus dem Auge
      - halb abgedeckte Linse gibt ein halbes Bild
16. **Wellenoptik, Atom-, Kernphysik**
    - 5.995 Wörter ohne einen einzigen Beispiel-Kasten
    - Gegenfeldmethode mit Daten (h aus der Steigung)
    - Rutherford kleinster Abstand
    - Zerfallskurve aus Messdaten (Halbwertszeit ablesen und logarithmisch linearisieren, Brücke zu mathe3 04)
    - Zerfallsreihe/Nuklidkarte
    - Compton qualitativ
    - Dosis mit Wichtungsfaktoren
    - Vertiefung „Moderne Physik“ (Relativität, Quanten, Teilchen) für die Schuläquivalenz

---

## C. Fachliche Fehler und Ungenauigkeiten

### C.0 Methode

Nachgerechnet wurden mit python3 (Auszug, alle **korrekt**):

- 600 Würfe P(90 ≤ X ≤ 110) = 0,7501
- Karigl 0,0317 / 0,6093 / 2,21·10⁻⁶
- SK 4.2: 0,3230 / 0,5155
- Lotto 0,4006 / 0,0224
- Spamfilter 0,9532 / 0,0214
- Flug-Überbuchung, exakter Wert 0,0398
- harmonische Reihe s_n > 10 ab n = 12 367
- Medikament 142,51 mg
- Dose r = 4,301 cm
- Newton cos x = x mit 0,7391
- Grenzkosten 305,71
- Tageslänge 126,8 Tage
- Tangentendreieck 32√3/9

Außerdem wurden die `satz`-Kästen in 12–14 auf vollständige Voraussetzungen geprüft: Rolle, MWS, Hauptsatz, de l'Hospital, Weierstraß und Simpson-Fehler sind korrekt formuliert.

**Mathe:** keine Rechenfehler in den Stichproben. Gefundene Ungenauigkeiten:

| Datei, Stelle | Ist | Korrektur |
|---|---|---|
| 09, Satz „Hinreichende Bedingungen“, Punkt 1 | „Ohne Vorzeichenwechsel liegt kein Extremum vor.“ | Präzisieren: „Hat f′ links und rechts von x₀ (in einer Umgebung) dasselbe Vorzeichen, liegt kein Extremum vor.“ Wechselt f′ in jeder Umgebung unendlich oft das Vorzeichen, ist die Aussage falsch (z. B. x⁴(2 + sin(1/x))). |
| 09, „Wo es keine Ableitung gibt“ | „Sprung: … Sekanten werden beliebig steil“ | Richtig, aber „Sprung“ ist nur eine Form der Unstetigkeit. Ergänzen: „Allgemein gilt: nicht stetig ⇒ nicht differenzierbar (Beweis Kap. 13)“. |
| 16, Pfadregeln / Unabhängigkeit | „Für mehr als zwei Ereignisse verlangt man, dass die Produktformel für jede Auswahl gilt“ | Korrekt. Ergänzen, dass paarweise Unabhängigkeit nicht reicht, mit Gegenbeispiel (zwei Münzen, C = „gleich“). Das ist eine beliebte mündliche Frage. |
| 16, Pfadregeln | „Die Produktregel ist der Multiplikationssatz …“ | Hinweis fehlt, dass die Pfadregel für ≥ 3 Stufen den verallgemeinerten Multiplikationssatz P(A∩B∩C) = P(A)P(B\|A)P(C\|A∩B) nutzt. |
| 16, Normalapproximation | Faustregel nur σ² > 9 | Zusätzlich die Lage nennen, die in Schulbüchern ebenfalls steht (np ≥ 5 und n(1−p) ≥ 5 bzw. Laplace-Bedingung). Die Aufgabe `wk-pruefung-flug` zeigt selbst 15 % relativen Fehler (0,046 vs. 0,040) trotz erfüllter Faustregel. |
| AUTHORING.md, Zeile 6–9 | Referenzkapitel 15 „mindestens so gründlich“, „6.000–12.000 Wörter“ | Kapitel 15 hat ca. 1.200 Wörter. Ein anderes Kapitel als Referenz benennen (z. B. 16) oder Kapitel 15 ausbauen. |
| kurs.yaml (mathe3), `pruefer` | Prüfungsdatum als Fließtext | In `pruefung.datum: 2027-02-26` überführen (Schema existiert, `typen.ts:297`). |

### C.1 physik1

Von 70 nachgerechneten Werten (40 aus 03/10/11/12, 30 aus anderen Kapiteln) ist keiner falsch. Die Abweichungen liegen bei höchstens 1,4 %. Die Vorzeichenkonvention des 1. Hauptsatzes (ΔU = Q + W, W am Gas), Wärme gegenüber innerer Energie, Scheinkräfte und Feld gegenüber Potential sind korrekt und konsistent.

| # | Datei, Stelle | Ist | Korrektur | Schwere |
|---|---|---|---|---|
| 1 | 03, „Die schiefe Ebene“, Plot (Z. 760–773) | Der Pfeil `F_H` läuft von (3 \| 1,73) nach (1,70 \| 2,48) und zeigt damit **hangaufwärts**. Die Ebene fällt nach rechts ab; Abwärtsrichtung (0,866 \| −0,5). Selbst nachgeprüft. | `nach: [4.30, 0.98]`. Komponenten gestrichelt zeichnen. Die Beschriftung „Freikörperbild“ ist falsch, wenn Kräfte und Komponenten gemischt sind: entweder nur F_G, F_N, F_R zeichnen oder das Bild „Kraftzerlegung“ nennen. | **Fehler** |
| 2 | 03, `p3-gewicht` | Kraft auf die Waage über „F = m·a mit a = g, F_G“ | Die Kraft auf die Waage ist das Wechselwirkungspartner von F_N, und F_N = F_G folgt aus dem Gleichgewicht. Ergebnis 785 N (3 signifikante Stellen). | Fehler (Begründung) |
| 3 | 03, Z. 252 vs. `p3-pruefung-axiome-text` (Z. 1305) | Text: „kein Sonderfall des zweiten“. Musterantwort: „Spezialfall von F = ma mit a = 0“ | Musterantwort angleichen. Das 1. Axiom definiert Inertialsysteme. | Widerspruch |
| 4 | 03, `p3-bremsweg-reibung`, Hinweis | „einzige Kraft in Fahrtrichtung“ | „einzige waagrechte Kraft, entgegen der Fahrtrichtung“ | Fehler |
| 5 | 03, `p3-pruefung-aufzug`, `p3-gewicht` | 7848 N, 9448 N, 784,8 N | 2–3 signifikante Stellen laut PLAN.md: 7,85 kN, 9,45 kN, 785 N | Ungenau |
| 6 | 11, Tabelle „Reale Maschinen“ (Z. 454–455) | Carnot-Grenze des Otto- und Dieselmotors mit T_k = Abgastemperatur (900/800 K) | Das kalte Reservoir ist die Umgebung (≈ 300 K): η_C ≈ 87 %. Die Abgaswärme ist ein Verlust und kein Reservoir. | Fehler |
| 7 | 11, Beispiel „Warum ist es auf Bergen kalt?“ | 25 − 0,65·29 = „knapp über 5 °C“. Ein Tageswert für Wien wird mit dem Mittelwert für den Sonnblick verglichen. | 6,1 °C. Gleiche Bezugsgröße wählen (beide Julimittel; Werte aus ZAMG-Klimadaten belegen, nicht verifiziert). | Ungenau |
| 8 | 11, Meteorologie | „Corioliskraft … (Kapitel 3)“. Dort steht nur ein Halbsatz dazu, eine Ablenkregel fehlt. | Ablenkregel herleiten (Kap. 6) und richtig verweisen | Lücke |
| 9 | 10, „Grenzen des Modells“ / `p10-sauerstoffflasche` | ideales Gas „bis einige hundert bar gute Näherung“ | Bei 200–300 bar Abweichungen im %-Bereich (Realgasfaktor). Einschränkung nennen und bei der Aufgabe vermerken. | Ungenau |
| 10 | 10, `p10-strahlung` | „Kleidung ist vor allem Strahlungsschutz“ | Kleidung wirkt vor allem über eingeschlossene Luft gegen Leitung und Konvektion. | Fehler |
| 11 | 10, Beispiel Badewasser | 4,4 kWh ≈ „etwa einen Tag Rad fahren“ (100 W) | 44 h, also knapp zwei Tage | Ungenau |
| 12 | 12, „Coulomb-Kraft gegen Gravitation“ | „bei 1 % Ladungsüberschuss … übersteigt das Gewicht der Erde“ | Gerechnet: 2,1·10²⁵ N gegen m_E·g = 5,9·10²⁵ N. Besser „ist vergleichbar mit“. | Ungenau |
| 13 | 12, Dipol-Plot (Z. 523–541) | Halbellipsen, die senkrecht zur Achse austreten, ohne Pfeile | Feldlinien treten radial aus, laufen auch nach außen und tragen Pfeile. Am besten aus dem Potential numerisch erzeugen bzw. das Feldlinien-Widget nutzen. Das bisherige Bild bestärkt die Fehlvorstellung „Feldlinien = Bahnen“. | Fehler (Darstellung) |
| 14 | 12, `p12-dielektrikum-angeschlossen` | Die Quelle liefert 4 µJ, die Feldenergie steigt um 2 µJ, der Rest bleibt unerklärt. | Erklären: Die Platte wird hineingezogen, das Feld verrichtet mechanische Arbeit (2 µJ). Gute Prüfungsfrage. | Lücke |
| 15 | 12, `p12-arbeit-spannung`; Beispiel „Ablenkung“ | Bewegungsrichtung fehlt, daher ist das Vorzeichen offen. 2,7 mm (Beispiel) vs. 2,75 mm (Aufgabe). | Richtung angeben und eine Rundung vereinheitlichen | Ungenau |
| 16 | `pruefungen`, `psc-3-waermepumpe` | identisch mit `p11-waermepumpe`; Grundwasser 0 °C | Neue Zahlen. Grundwasser realistisch mit 8–12 °C. | Dublette, unrealistisch |
| 17 | 01, Z. 468/478 | `\text{µs}` (21 KaTeX-Warnungen „No character metrics“) | `\mu\text{s}` | Technisch |

---

## D. UI/UX- und Plattform-Anforderungen (priorisiert)

**Befund in Kürze.** Die Plattform hat gute Bausteine:

- Aufgaben mit automatischer Prüfung, gestuften Hinweisen und schrittweise aufdeckbarer Lösung
- Prüfungssimulation mit Timer
- Zufallsgeneratoren (219 Mathe / 134 Physik)
- 76 Widgets
- solide Grundlagen der Barrierefreiheit (Fokusringe, `prefers-reduced-motion`, MathML)

Der **Lernzyklus ist aber nicht geschlossen**:

- Leitner-Fälligkeiten werden gespeichert, aber nie angezeigt (`fortschritt.ts:124-130`, `faellig()` ohne Aufrufer). `muendlich/page.tsx:24` verspricht Abstände, die es nicht gibt.
- „Gelöst“ verfällt nie (`fortschritt.ts:87`).
- Der Trainer wertet Treffer nach geöffneter Lösung als richtig (`Aufgabe.tsx:67`).
- Die ganze Lösung ist ohne Versuch abrufbar (`Aufgabe.tsx:177-181`).
- Die Prüfungssimulation ist nicht reload-fest (`PruefungLauf.tsx:57-63`).
- Es gibt keine Auswertung nach Thema, keinen Lernplan, keinen Diagnosetest, keine Suche, kein Glossar und keine Druckansicht.
- Die neuen Schemafelder (`gefuehrt`, `reflexion`, `fehler`, `kompetenz`, `voraussetzungen`, `pruefung.datum`) haben 0 Inhalt.

### P0: Ohne diese Punkte ist der Kurs kein evidenzbasiertes Lernsystem

| ID | Anforderung | Akzeptanzkriterium |
|---|---|---|
| P0-1 | **Seite „Heute“ je Fach** (`/lernen/[fach]/heute`): fällige Karten und fällige Aufgaben (Spacing), plus 1 neuer Abschnitt laut Lernplan. Zähler „N fällig“ auf Hub und Kursseite. | Eine Karte auf Stufe 2 erscheint frühestens nach 3 Tagen (Test mit gemocktem `Date.now`). Der Text in `muendlich/page.tsx:24` stimmt. |
| P0-2 | **Ehrliche Wertung:** Lösung angesehen ⇒ falsch. Hinweise werden gezählt („richtig mit Hilfe“ ≠ „richtig“). Hilfegestützte Treffer setzen die Stufe ≤ 1. | Unit-Test: Lösung öffnen, dann korrekt eingeben → `training[id].f++`. |
| P0-3 | **Mastery mit Verfall** je Aufgabe, Abschnitt und Lernziel. „Beherrscht“ heißt: 2 ungestützte richtige Abrufe im Abstand von ≥ 1 Tag; nach Fälligkeit „auffrischen“. Balken zeigen beherrscht / in Arbeit / fällig. Abschnitts-Mastery steht im Inhaltsverzeichnis. | Fixture über 3 simulierte Tage. |
| P0-4 | **Retrieval vor Lösung:** „Ganze Lösung“ erst nach einem Versuch oder allen Hinweisen. Ein bewusstes Überspringen zählt als „nicht gewusst“. | Knopf beim ersten Rendern inaktiv. |
| P0-5 | **Prüfungssimulation robust:** laufender Stand in localStorage, `beforeunload`-Warnung, automatische Speicherung nach Abgabe. Speichern erst, wenn alle Selbstbewertungen erledigt sind. | Reload nach 30 min → gleiche Restzeit (±2 s), alle Eingaben vorhanden. |
| P0-6 | **Fortschritt sichern:** Export/Import in der UI, Schemaversion und Migration. Stabile IDs für Karten (`id` oder Hash des Fragetexts) und Abschnitte (`{#anker}`). | Export → Löschen → Import ergibt einen identischen Stand. Eine verschobene Karte behält ihre Stufe. |
| P0-7 | **Validator-Qualitätsprüfung** der Rubrik A (V-Kriterien als `Q-…`-Warnungen), inklusive Duplikatprüfung Beispiel ↔ Übung und Musterprüfung ↔ Kapitel. | `lernen:pruefen` meldet für 09 heute ≥ 1 Q-Warnung je Abschnitt; nach Überarbeitung 0. |

### P1: Lernwirkung, Diagnose, Prüfungsvorbereitung, Barrierefreiheit

| ID | Anforderung | Akzeptanzkriterium |
|---|---|---|
| P1-1 | **Fehlerbild-Feedback** inhaltlich füllen (A9), auch in der Prüfungsauswertung anzeigen. Generische Fehlerbilder automatisch ergänzen: Vorzeichen, Faktor 100, Grad↔Bogenmaß, Kehrwert, Rundung zu früh, Einheit km/h↔m/s, kJ↔J, °C↔K. | ≥ 50 % der Teile in Kapiteln mit Gewicht 3 haben `fehler`. Die Eingabe 175,4 bei `tr-pruefung-strasse` liefert die Meldung „waagrecht statt Straße“. |
| P1-2 | **Konfidenz vor dem Prüfen** (geraten / unsicher / sicher). Eine Kalibrierungsansicht zeigt den Anteil richtig je Stufe. Sicher + falsch ⇒ Wiederholung morgen. | Die Kalibrierungstabelle stimmt bei Fixture-Daten. |
| P1-3 | **Prüfungsauswertung nach Kapitel und Lernziel**, mit Links zum Training und zum Abschnitt. Teilpunkte je Teil statt Gleichverteilung (`PruefungLauf.tsx:92`). | Jede Prüfungsaufgabe hat ein Kapitel (Validator). Die Auswertung zeigt eine Tabelle je Kapitel. |
| P1-4 | **Lernplan bis Prüfungsdatum** aus `pruefung.datum`, Kapitel-`stunden` × `pruefungsgewicht` und Mastery: Tages- und Wochenportionen, Countdown, Simulationen in den letzten 3 Wochen, Neuplanung bei Rückstand. Ersetzt den statischen Plan in Kap. 18. | Für 2027-02-26 ergeben die Tagesportionen in Summe die Reststunden. |
| P1-5 | **Diagnosetest** je Kurs (2 Fragen je Kapitel) und je Kapitel (K2). Bei ≥ 80 % ist das Kapitel „überspringbar“ und kommt in die Wiederholung. Warnung bei unbeherrschten `voraussetzungen`. | Die Voraussetzungen aller 34 Kapitel sind gepflegt. Ein Hinweis erscheint bei einer Lücke. |
| P1-6 | **Interleaving nur über Gelerntes, adaptive Schwierigkeit:** Der gemischte Trainer zieht nur aus begonnenen Kapiteln, gewichtet nach Fälligkeit und Fehlerquote. 3 Treffer ⇒ Niveau +1, 2 Fehler ⇒ −1. | Simulationstest der Auswahlfunktion. |
| P1-7 | **Fading und Selbsterklärung im UI erzwingen:** `reflexion` mit Textfeld, das vor dem Vergleich nicht leer sein darf. `gefuehrt`: „Überlegt, weiter“ zählt nicht als richtig (`GefuehrtLoesen.tsx:87`). | „Vergleichen“ ist bei leerem Feld inaktiv. |
| P1-8 | **Barrierefreiheit:** Widgets mit Ziehpunkten als `role="group"` statt `role="img"` (`Koordinaten.tsx:111`). Messwerte in `aria-live="polite"`. Timer-Ansagen bei 10 und 1 min, „knapp“ nicht nur über Farbe. Abgabedialog als `<dialog>` statt `window.confirm`. Fokus nach „Prüfen“ auf das erste falsche Feld. | axe ohne Fehler auf Kap. 9 und einer laufenden Prüfung. E2E-Tastaturtest löst eine Aufgabe ohne Maus. |
| P1-9 | **Mündliche Prüfung üben:** Kartenmodus „laut antworten“ mit Timer (60–90 s), danach Selbstabgleich der Musterantwort anhand einer Checkliste von 3–4 Kernpunkten je Karte (statt nur gewusst/nicht gewusst). Zufallsprüfung über alle Kapitel. | Jede Karte hat `kernpunkte` (Validator). |
| P1-10 | **Zusammenfassung je Kapitel** als generative Retrieval-Aufgabe (erst selbst schreiben, dann vergleichen). Lernziel-Selbstcheck (K11). | 34/34 Kapitel. |

### P2: Orientierung, Komfort, Motivation

| ID | Anforderung | Akzeptanzkriterium |
|---|---|---|
| P2-1 | **Volltextsuche** über Kapitel, Kästen, Formelsammlung und Karten | „Kettenregel“ findet den Anker in Kap. 9. |
| P2-2 | **Glossar** aus `:::definition` mit Rücklinks und Tooltips im Text | Ein Eintrag je Definition. |
| P2-3 | **Querverweise physik1 ↔ mathe3** (heute 0 in physik1) und automatische Rücklinks „Wird gebraucht in …“ | ≥ 5 je Physikkapitel (K10). |
| P2-4 | **Druckansicht** (`@media print`) für Kapitel, Formelsammlung, Prüfung (Lösungen optional am Ende) und ein „Spickzettel“-Export der Zusammenfassungen | PDF ohne Knöpfe und ohne abgeschnittene SVGs. |
| P2-5 | **Mobil:** Inhaltsverzeichnis einklappbar (`<details>`), Touch-Ziele ≥ 44 px | Bei 375 px ist die erste Überschrift ohne Scrollen sichtbar. |
| P2-6 | **Motivation ohne Ablenkung:** Tagesziel, Serie, Prognose „bei diesem Tempo fertig am …“ vs. Prüfungsdatum | Die Prognose stimmt bei Fixture-Daten. |
| P2-7 | **Server-Sync** (Upgrade-Trigger laut `SHORTCUT` in `fortschritt.ts:8`) und Zusammenführung mit dem Begriffe-Leitner `/wiederholung` | Fortschritt aus Browser A ist in Browser B sichtbar. |
| P2-8 | **Formelsammlung** mit Inhaltsverzeichnis, Filter je Kapitel und Kennzeichnung „steht in der Schulformelsammlung“ | – |

---

## E. Umsetzungsreihenfolge (Empfehlung)

1. **Validator-Qualitätsprüfung (P0-7) und Plattform-P0.** Ohne Messung und ohne Wiederholungsqueue verpufft jede Inhaltsarbeit.
2. **Duplikate und verbrauchte Musterprüfungen bereinigen:** Beispiele isomorph umschreiben, Übungen neu rechnen. Das ist schnell und wirkt sofort auf die Aussagekraft der Simulation.
3. **Kapitel mit Gewicht 3 nach Rubrik A nachrüsten.** Zuerst fallen die meisten Punkte bei mathe3 09, 11, 16, 15 (Pflicht, zu dünn); physik1 03 (Freikörperbilder), 10, 11, 12, 14.
6. **Physik-Fehler C.1 Nr. 1, 2, 4, 6, 10 und 13 sofort korrigieren** (sie lehren Falsches).
4. **Lehrplanlücken** (B.1/B.2) als neue Abschnitte, Vertiefungen klar kennzeichnen.
5. **P1, danach P2.**
