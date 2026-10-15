# Anleitung: Kursinhalte für die Lernplattform erstellen

**Für:** Claude Code (und jedes andere LLM mit Datei- und Shell-Zugriff) sowie die Menschen, die es steuern.
**Ziel:** Du bekommst einen **ausstehenden Kurs** und lieferst Kursinhalte, die so genau, so verständlich und so
gründlich geprüft sind wie die drei fertigen Kurse (Mathematik 3, Physik 1, Einführung in die Programmierung 1).
**Stand:** 15.10.2026. Sprache aller Kursinhalte: Deutsch.

> **Schnellstart:** (1) Abschnitt 3 abarbeiten. (2) In Abschnitt 2 einen Kurs wählen. (3) Das Material aus Abschnitt 2a
> bereitstellen (der Mensch, nicht das Modell). (4) Claude Code im Ordner `lernen/` starten und **Prompt A**
> (Abschnitt 11.1) einfügen, Parameter ersetzen. (5) Die STOP-Fragen beantworten (Plan freigeben, Pilotkapitel
> freigeben). (6) Den Kurs einhängen (P7) und übergeben (P8, Abschnitt 10.5).

> **Vorrang bei Widersprüchen:** Das Verhalten des Validators (`npm run lernen:pruefen`, mit `--qualitaet`) entscheidet.
> Danach gelten: für das **Format** [`AUTHORING.md`](./AUTHORING.md) (Format-Vertrag), für **Mengen und didaktische
> Mindestwerte** [`QUALITAET.md`](./QUALITAET.md) Abschnitt A (Rubrik), für die Sprache [`SPRACHE.md`](./SPRACHE.md)
> (Sprachleitfaden), zuletzt dieses Dokument (Ablauf, Prompts, Erfahrungen). AUTHORING.md nennt an einigen Stellen ältere
> Mengen (8 bis 15 Karten, 6 bis 15 Generatoren je Kapitel); es gelten die Rubrikwerte (12 bis 20 Karten, ≥ 10 Generatoren),
> die auch der Validator prüft. AUTHORING.md Abschnitt 3 „Prüfungsbezug“ (120 Minuten, Schulformelsammlung) und Pfade wie
> `zulassung/…` oder `recherche/…` betreffen nur Mathematik 3 und liegen **nicht** im Repository.
> Dieses Dokument ersetzt die drei anderen **nicht**, es sagt dir, wie du sie einsetzt.
>
> **Arbeitsverzeichnis:** Die Lernplattform ist der Ordner **`lernen/`** im TUWAS-Repository (eine eigene Next.js-App
> mit eigener `package.json`; TUWAS zeigt sie im Tab „Lernen“). Früher lag sie in einem eigenen Repository als `lernen/` bzw.
> unter `docs/web`; ältere Notizen, Pläne und Pfade können noch diese Namen tragen. Alle Befehle in diesem Dokument laufen
> in `lernen/`, alle Pfade wie `content/…` sind relativ dazu.

---

## Inhaltsverzeichnis

0. Die zehn Regeln, die alles entscheiden
1. Was die Plattform ist und was schon fertig ist
2. Ausstehende Kurse und wie du deinen wählst
2a. Was der Mensch bereitstellen muss (Material und Angaben)
3. Einrichtung (5 Minuten)
4. Wie die bisherigen Kurse entstanden sind (Prozessanalyse)
5. Der Ablauf für einen neuen Kurs (Phasen P0 bis P8)
6. Dateien und Formate (Spickzettel)
7. Der Qualitätsmaßstab in Kurzform
8. Der Fehlerkatalog: was selbst gute Autor:innen falsch machen
9. Der Validator: was er prüft und was nicht
10. Zusammenarbeit (Crowdsourcing): Regeln, Dateigrenzen, Übergabe
11. Die Prompts zum Kopieren (A Orchestrierung, Q Recherche, W Schreiben, S Simulationen, R Review)
12. Anhang A: Vorlagen (kurs.yaml, Kapitel, Training, Prüfungssimulation)
13. Anhang B: Abnahme-Checkliste

---

## 0. Die zehn Regeln, die alles entscheiden

1. **Der Validator ist dein Gate, nicht dein Beweis.** `0 Fehler, 0 Warnungen, 0 offene Qualitätskriterien` ist
   Pflicht, beweist aber nur Struktur und die Rechnung in `loesung`. In jedem fertigen Kapitel haben unabhängige
   Prüfer danach noch **25 bis 80 echte Fehler** gefunden (Abschnitt 8). Plane die Review-Runde (P6) fest ein.
2. **Erfinde nichts über Prüfungen.** Jede Aussage über Format, Dauer, Hilfsmittel, Punkte, Prüfer:innen, „kommt
   immer dran“ oder „Tutor:innen fragen gern“ braucht eine Quelle im Material. Sonst: „nicht veröffentlicht“,
   „[unsicher]“ oder streichen. Das war die häufigste Fehlerklasse.
3. **Baue Originalaufgaben nach, kopiere sie nie.** Echte Prüfungsaufgaben und Aufgabenblätter werden mit neuen
   Daten, Namen und Formulierungen neu gebaut (`quelle: nach … (abgewandelt)`). Auch Testdaten, Beispieleingaben,
   Antwortoptionen und Methodennamen zählen als Kopie. Einzige Ausnahme: Nachbauten echter Musterprüfungen als
   Prüfungssimulation (`art: original`, P5) dürfen Struktur, Punkte und Zahlen übernehmen, aber nie den Wortlaut.
4. **Schreibe für jemanden, der nichts mehr weiß und allein lernt.** Jeder Begriff wird erklärt, bevor er benutzt
   wird; jedes Symbol wird benannt; jeder Rechenschritt sagt, was passiert und warum (Abschnitt 7.2).
5. **Jede falsche Antwort bekommt, wo möglich, eine gezielte Rückmeldung** (Fehlerbilder). Ein Fehlerbild darf
   **nie** zufällig die richtige Antwort sein, auch nicht in Sonderfällen eines Generators.
6. **Jede Zahl wird unabhängig nachgerechnet**, nicht nur die in `loesung`, sondern auch in Fließtext, Beispielen,
   Hinweisen, Lösungsschritten, Fehlerbild-Meldungen und Karten. Der Validator sieht nur `loesung` und `anzeige`.
7. **Schreibe nie eine halbfertige Kapiteldatei in den Kursordner.** Baue in Teilen in einem Arbeitsordner, setze
   die Datei erst zusammen, wenn alle Teile fertig sind, und lege sie dann als Ganzes ab. Der Validator liest nur
   Dateien unter `content/<kurs>/`: Validiere also sofort nach dem Ablegen (Nummernfilter) und repariere, bis er
   0 Fehler meldet. Ersetzt du eine bestehende Datei, sichere vorher das Original im Arbeitsordner.
8. **Ändere nur die Dateien deines Kurses.** Plattformcode (`app/`, `components/`, `lib/`, `scripts/`) und die
   Handbücher (`AUTHORING.md`, `QUALITAET.md`, `SPRACHE.md`, `WIDGETS.md`) gehören den Maintainern. Brauchst du
   etwas, schreibe es in `content/<kurs>/WUENSCHE.md`.
9. **Stabile IDs.** Aufgaben-IDs, Karten-IDs und Lektionstitel (daraus entsteht die URL) sind der Schlüssel für
   Lernfortschritt und Links. Umbenennen bricht beides.
10. **Der Autor prüft sich nicht allein.** Das Review macht eine **andere** Instanz (andere Sitzung, anderes
    Modell oder anderer Mensch) mit frischem Kontext.

---

## 1. Was die Plattform ist und was schon fertig ist

### 1.1 Was Lernende sehen

Die Plattform ist eine Next.js-16-App im Ordner `lernen/` des TUWAS-Repositorys. TUWAS startet sie als lokalen Server
(`src/main/lernen.ts`) und zeigt sie im Tab „Lernen“; ohne TUWAS läuft sie mit `npm run dev` im Browser. Kurse sind
**Dateien** unter `lernen/content/<kurs>/` (Markdown mit eingebetteten YAML-Blöcken). Erreichbar ist ein Kurs immer unter
`/lernen/<kurs>`; auf der Übersichtsseite „Fächer“ (`/lernen`) erscheint er erst, wenn er einer Lehrveranstaltung
zugeordnet ist (Abschnitt 5, P7). Lernende bekommen:

- **Lektionen:** jede `##`-Überschrift eines Kapitels ist eine eigene Seite (`/lernen/<kurs>/<kapitel>/<lektions-id>`).
- **Interaktive Aufgaben** mit automatischer Prüfung (Zahl, Term, Vektor, Menge, Auswahl, Text, bei Java zusätzlich
  Ausgabe, Lückentext, Spurtabelle, Programmieren mit echtem Java-Runner), gestufte Hinweise, gesperrte Lösung bis zum
  ersten Versuch, **gezielte Fehlerrückmeldung**, **geführtes Lösen** in kleinen Schritten.
- **Wiederholung nach Leitner-Intervallen** (0, 1, 3, 7, 16, 35 Tage) für Karten und Aufgaben, „Heute“-Seite,
  **Mastery** (eine Lektion gilt als gemeistert, wenn ≥ 80 % ihrer Übungen selbständig richtig gelöst sind),
  Lernplan bis zum Prüfungstermin (`pruefung.datum` in `kurs.yaml`).
- **Training** (unbegrenzt viele Zufallsaufgaben aus Generatoren), **Prüfungssimulation** mit Timer,
  **mündliche Prüfung** (Karten mit Selbstabgleich), Formelsammlung, Glossar, Suche, Fokusmodus, eine Kursgliederung
  neben jeder Lektion und eine Brotkrumenleiste mit Kapitelwechsel.
- Der Lernfortschritt liegt in **einer** Datei außerhalb des Projekts (`~/.local/share/tuwas/lernen/lernstand.jsonl`, ein
  Protokoll, an das nur angehängt wird; Details in `lernen/README.md`, Abschnitt „Daten“). Jeder Eintrag verweist auf eine
  **ID** (Aufgabe, Karte, Lektion). Eine umbenannte ID verliert deshalb den Fortschritt aller Lernenden (Regel 9).

### 1.2 Fertige Kurse (Stand 15.10.2026)

Gezählt: Kapiteldateien, ```` ```aufgabe ````-Blöcke in den Kapiteln, Karten mit `id`, `drill(`-Aufrufe in `training/`.

| Kurs | Ordner | Zuordnung (`kurs.yaml`) | Kapitel | Aufgaben | Karten | Generatoren | Besonderheit |
|---|---|---|---|---|---|---|---|
| Mathematik 3 (SBP TU Wien) | `content/mathe3` | `sbp: sbp-mathe3` | 18 | 2.518 | 311 | 307 | Widgets, 9 Prüfungssimulationen, Formelsammlung |
| Physik 1 (SBP TU Wien) | `content/physik1` | `sbp: sbp-physik1` | 16 | 1.941 | 269 | 225 | Widgets, 3 Prüfungssimulationen + 1 mündliche Simulation, Formelsammlung |
| Einführung in die Programmierung 1 | `content/ep1` | `lva: "185.A91"` | 22 | 1.847 | 344 | 282 | Java-Aufgabentypen gegen echtes JDK; **Prüfungssimulationen und Formelsammlung fehlen noch** |

Alle drei bestehen `npm run lernen:pruefen -- <kurs> --qualitaet` mit 0 Fehlern, 0 Warnungen, 0 offenen
Qualitätskriterien, und jedes Kapitel hat eine unabhängige Review-Runde hinter sich.

### 1.3 Vorbilder zum Lesen (bevor du schreibst)

Lies mindestens zwei Kapitel vollständig, eines davon aus der Fachrichtung deines Kurses:

- `content/mathe3/kapitel/10-integralrechnung.md`, `11-grenzwerte-folgen.md`, `15-komplexe-zahlen.md` (rechnende Kurse)
- `content/physik1/kapitel/03-dynamik.md` (Modelle, Freikörperbilder, Konzeptfragen)
- `content/ep1/kapitel/04-schleifen.md`, `06-methoden.md`, `10-rekursion.md` (Programmieren, Java-Aufgabentypen)
- zu jedem Kapitel die Datei in `content/<kurs>/training/` (Generatoren) und die `kurs.yaml` des Kurses

Die fertigen Kurse haben keine `PLAN.md`, `RECHERCHE.md` oder `ANALYSE.md` mehr im Repository. Wie diese Dateien für
einen neuen Kurs aussehen, steht in P1 und P2 (Abschnitt 5).

`15-komplexe-zahlen.md` zeigt die **Syntax**, ist aber seit der Überarbeitung auch inhaltlich ein gutes Beispiel.
Die Mengen (z. B. 100 bis 170 Aufgaben je Kapitel) sind **Obergrenze der Ambition**, die Mindestwerte stehen in der
Rubrik (Abschnitt 7.1).

---

## 2. Ausstehende Kurse und wie du deinen wählst

### 2.1 Liste (Kurse des Bachelorstudiums Informatik an der TU Wien, die noch keinen Lernkurs haben)

Spalte „Typ“ siehe 2.2. „LVA“ und „Prüfung“ stammen aus der Kursliste der Plattform, der Tabelle `kurse` in
`lernen/db/lernen.db` (Stand 13.10.2026; „offen“ = dort noch keine LVA-Nummer bzw. kein Prüfungsmodus eingetragen).
Aktuell abfragen: `sqlite3 db/lernen.db "select lva_nummer, name, ects from kurse order by name"`. Prüfe beides vor
dem Start gegen TISS und das aktuelle Semester.

| LVA | Kurs | ECTS | Prüfung | Typ |
|---|---|---|---|---|
| 104.265 | Algebra und Diskrete Mathematik für INF/WINF | 9 | schriftlich | M |
| offen | Analysis für INF/WINF | 6 | offen | M |
| offen | Statistik und Wahrscheinlichkeitstheorie | 6 | schriftlich (VO), laufend (UE) | M |
| 104.631 | Mathematisches Arbeiten | 2 | prüfungsimmanent | M/T |
| 192.033 | Logic and Reasoning in Computer Science | 6 | schriftlich | M |
| 192.134 | Grundzüge digitaler Systeme | 6 | prüfungsimmanent | M/P |
| offen | Algorithmen und Datenstrukturen | 8 | offen | P |
| offen | Datenbanksysteme | 6 | offen | P |
| 185.A92 | Einführung in die Programmierung 2 | 4 | prüfungsimmanent | P |
| 185.A12 | Logikprogrammierung und Constraints | 6 | prüfungsimmanent | P |
| 194.023 | Programmierparadigmen | 6 | prüfungsimmanent | P |
| 191.002 | Betriebssysteme | 6 | prüfungsimmanent | P |
| 194.024 | Verteilte Systeme | 6 | prüfungsimmanent | P |
| offen | Einführung in Security | 6 | offen | P/T |
| 194.025 | Einführung in Machine Learning | 6 | prüfungsimmanent | M/P |
| 192.151 | Einführung in Deep Learning | 6 | prüfungsimmanent | M/P |
| offen | Einführung in Artificial Intelligence | 6 | offen | M/P |
| 194.166 | Einführung in Information Retrieval | 6 | prüfungsimmanent | M/P |
| 187.B12 | Denkweisen der Informatik | 5,5 | prüfungsimmanent | T |
| 194.020 | Software Engineering | 6 | prüfungsimmanent | T |
| 193.052 | Wissenschaftliches Arbeiten | 3 | prüfungsimmanent | T |
| 280.A69 | Daten- und Informatikrecht | 6 | prüfungsimmanent | T |
| 180.766 | Orientierung Informatik und Wirtschaftsinformatik | 1 | prüfungsimmanent | T |
| 180.771 | Propädeutikum für Informatik (Vorkurs) | 3 | prüfungsimmanent | T |

Nicht als Kurs geeignet: Software-Engineering-Projekt, Bachelorarbeit, freie Wahlfächer (kein fester Stoff).
Bereits fertig: Mathe 3, Physik 1, EP1 (außer den EP1-Prüfungssimulationen, die eine gute **Einstiegsaufgabe** sind).

### 2.2 Kurstypen und was sie ändert

| Typ | Beispiele | Aufgabentypen, die passen | Was du beachten musst |
|---|---|---|---|
| **M** Mathematik, rechnend | Analysis, Statistik, ADM, Logic | `zahl`, `term`, `vektor`, `menge`, `komplex`, `auswahl`, `text`; Plots, Widgets, KaTeX | Vorbild `mathe3`. Beweise im Text; `text`-Aufgaben für Begründungen. |
| **P** Programmieren | AuD, Datenbanken, Paradigmen, BS | `ausgabe`, `code`, `lueckentext`, `zeilen`, `trace`, `richtigfalsch`, `reihenfolge` | Vorbild `ep1`. **Ausgeführt wird nur Java.** Für andere Sprachen (SQL, Haskell, Prolog, C, Python) laufen nur Aufgaben ohne Ausführung (`lueckentext` mit `kompilieren: false`, `trace`, `zeilen`, `auswahl`, `richtigfalsch`). Eine Ausführungsumgebung dafür ist ein Plattformwunsch (`WUENSCHE.md`), kein Autor:innen-Thema. Syntaxhervorhebung gibt es in den Lernseiten nur für ```` ```java ````; Code anderer Sprachen erscheint als einfacher Codeblock ohne Farben. |
| **T** Theorie und Text | Recht, Wiss. Arbeiten, Software Engineering, Denkweisen | `auswahl`, `richtigfalsch`, `text`, `reihenfolge`, `lueckentext` (Text), Karten | Fallbeispiele statt Rechnungen. Gesetzestexte nur mit Paragraph und Fassung zitieren. Die Rubrik gilt trotzdem (geführte Aufgaben mit `auswahl`/`text`-Schritten, Fehlerbilder bei Auswahlfragen als benannte Fehlvorstellungen). |

Wähle einen Kurs, zu dem du **Zugang zum Originalmaterial** hast (Folien, Übungsblätter, Altklausuren, Skript) und
den du selbst nachprüfen kannst. Ein Kurs ohne Quellenmaterial wird zu einem Lehrbuch aus dem Gedächtnis des Modells,
und genau dort entstehen die unbelegten Behauptungen aus Regel 2.

---

## 2a. Was der Mensch bereitstellen muss (Material und Angaben)

Ein Modell kann vieles im Web finden, aber nicht das, was hinter dem TU-Login liegt, und nicht das, was nur der Mensch
weiß. Ohne Originalmaterial entsteht ein Lehrbuch aus dem Gedächtnis des Modells, genau dort entstehen die unbelegten
Behauptungen aus Regel 2. **Ein Agent beginnt deshalb mit diesem Abschnitt:** Er fragt den Menschen gezielt nach den
fehlenden Punkten (bei Claude Code mit einer strukturierten Frage), statt sie zu erraten.

### 2a.1 Ablage

Alles Material kommt in einen Arbeitsordner **außerhalb** des Repositorys, nie nach `lernen/content/` (Abschnitt 10.3):

```
~/kursarbeit/<kurs-id>/quellen/
  tiss/          LVA-Seite (als PDF oder HTML gespeichert), Studienplan-Auszug
  folien/        Vorlesungsfolien, je Einheit eine Datei, Dateiname mit Datum oder Nummer
  skript/        Skript, Mitschriften, Bücher (nur was der Mensch selbst besitzt)
  blaetter/      Übungsblätter, Musterlösungen
  pruefungen/    Altklausuren, Musterprüfungen, Probetests, mit Lösungen falls vorhanden
  tuwel/         Tests, Quiz, Programmiertests (Export oder Screenshots), Kursankündigungen zum Prüfungsmodus
  vowi/          VoWi-Seite der LVA und ihre Anhänge (Prüfungsangaben, Ausarbeitungen, Erfahrungsberichte)
  sonstiges/     Forum-/Discord-Auszüge, eigene Notizen
~/kursarbeit/<kurs-id>/INVENTAR.md   eine Zeile je Datei: Pfad | was | Semester | Quelle/URL | lesbar oder gescannt
```

### 2a.2 Was gebraucht wird

| Muss | Wozu | Woher |
|---|---|---|
| **LVA-Nummer, Name, Semester, Typ** (VO, UE, VU …) | `kurs.yaml` (`lva:`), Zuordnung zur Fächer-Seite | TISS |
| **Stoffkatalog**: LVA-Beschreibung (Inhalt, Lernergebnisse) und der Studienplan-Eintrag | Messlatte für Vollständigkeit (P2) | TISS, Studienplan der Fakultät |
| **Prüfungsmodus des aktuellen Semesters**: Teile, Punkte, Mindestpunkte, Dauer, Hilfsmittel, Termine | Prüfungsnähe (Abschnitt 7.3), `kurs.yaml` → `pruefung` | TISS, TUWEL-Ankündigung, erste Vorlesungsfolien |
| **Vorlesungsfolien** des aktuellen oder letzten Semesters | Stoff, Notation und Reihenfolge der LVA übernehmen | TUWEL (Login: nur der Mensch kann sie herunterladen) |
| **Altklausuren oder Musterprüfungen**, mehrere Jahrgänge | Aufgabentypen, Niveau, Prüfungssimulationen (`art: original`) | TUWEL, VoWi, Fachschaft |

| Sollte | Wozu | Woher |
|---|---|---|
| **Übungsblätter mit Lösungen** | Aufgabenformate, typische Fehler, Nachbauten | TUWEL |
| **Skript oder Lehrbuch** der LVA | Definitionen genau so, wie die LVA sie verwendet | TUWEL, Bibliothek |
| **VoWi-Seite** der LVA mit Anhängen | Erfahrungsberichte, gesammelte Prüfungsfragen, mündliche Fragen | vowi.fsinf.at (Seite und Anhänge speichern) |
| **TUWEL-Tests, Quiz, Programmiertests** | bei prüfungsimmanenten LVAs das eigentliche Prüfungsformat | TUWEL (Export, sonst Screenshots je Frage) |
| **Eigene Ziele**: Prüfungsdatum, angestrebte Note, Vorwissen, Zeitbudget | Umfang, Tiefe, Lernplan (`pruefung.datum`) | der Mensch |

| Kann | Wozu |
|---|---|
| Forum-, Discord- oder Fachschaftsauszüge | Hinweise auf Schwerpunkte, nur paraphrasiert und als Erfahrungsbericht gekennzeichnet |
| Mitschriften, eigene Ausarbeitungen | Erklärungsideen; nie als Beleg für Prüfungsbehauptungen |
| Code-Vorlagen und Testumgebungen der LVA (bei Programmierkursen) | Aufgabentypen `code`, `ausgabe`, `trace` passend bauen |

### 2a.3 Was fehlt, und was das bedeutet

- **Keine Altklausuren:** Prüfungssimulationen nur `art: simulation`, und das Kapitel sagt offen, dass das echte Format
  nicht veröffentlicht ist. Keine Behauptungen über „typische“ Prüfungsaufgaben.
- **Keine Folien und kein Skript:** Der Kurs folgt nur dem Stoffkatalog. Notation und Reihenfolge können von der LVA
  abweichen; das steht in `RECHERCHE.md` unter „offene Fragen“.
- **Gescannte PDFs:** Sie zählen erst als gelesen, wenn ihr Text tatsächlich gelesen ist (Lehre 11, Abschnitt 4.3).
  Claude Code kann PDFs und Bilder direkt mit dem Read-Werkzeug ansehen (bei langen PDFs seitenweise, höchstens 20 Seiten
  je Aufruf); sonst `pdftotext` oder OCR.
- **Nichts davon vorhanden:** nicht anfangen. Der Kurs wird sonst nicht nachprüfbar.

---

## 3. Einrichtung (5 Minuten)

Du brauchst: Git, **Node.js 22**, npm, **python3** (zum Nachrechnen), bei Java-Kursen ein **JDK 21**
(`javac`, `java`), optional `pdftotext` (Poppler) für PDFs.

```bash
git clone <REPO-URL-VON-TUWAS>            # das TUWAS-Repository; die Lernplattform ist der Ordner lernen/
cd <repo>/lernen                            # der Ordner mit package.json und content/ (siehe Kopf dieses Dokuments)
npm install                              # native Pakete (better-sqlite3) brauchen eine C/C++-Toolchain
npm run lernen:test                      # Unit-Tests, erwartet: alle bestehen
npm run lernen:pruefen -- mathe3 09      # Probelauf des Validators an einem fertigen Kapitel, erwartet: 0 Fehler, 0 Warnungen
```

- Der **Validator braucht weder Dev-Server noch Datenbank**. Er ist dein wichtigstes Werkzeug.
- Der Dev-Server (`npm run dev`) ist für die optische Kontrolle. Die Fächer-Seite `/lernen` liest zusätzlich die
  Kursliste aus `db/lernen.db` (lokal, nicht im Repository; ohne sie ist die Seite leer); die Kursseiten selbst
  (`/lernen/<kurs>`) kommen aus den Dateien. Rufe deinen Kurs deshalb direkt unter `/lernen/<kurs>` auf. **Verlasse dich
  auf den Validator, nicht auf eine Vorschau.** Starte keinen zweiten Server, wenn schon einer läuft. Achtung:
  `npm run dev` löscht beim Start den Ordner `.next` und führt automatisch `npm run lernen:index` aus (ebenso
  `npm run build`); Schreib-Agents starten ihn deshalb nicht (Abschnitt 5, P4).
- **Lernstand beim Ausprobieren:** Wer im Dev-Server Aufgaben löst, schreibt in das echte Lernstand-Protokoll des
  Rechners (`~/.local/share/tuwas/lernen/lernstand.jsonl`). Für Tests deshalb immer ein Wegwerf-Protokoll setzen:
  `LERNEN_JOURNAL=/tmp/test-lernstand.jsonl npm run dev`.
- Diese Next.js-Version (16) hat Änderungen gegenüber dem Trainingswissen vieler Modelle. Du schreibst Inhalte, kein
  Next.js. Fasse den App-Code nicht an (Ausnahme: die Einträge beim Einhängen, P7).
- Java-Aufgaben im Browser testen (nur Java-Kurse, lokal): `EP1_JAVA_RUNNER=1 npm run dev -- -H 127.0.0.1`.
  Der Eintrag `allowedDevOrigins` in `next.config.ts` ist dafür nötig; der Dev-Server muss nach Änderungen neu starten.
- Arbeitsordner für Zwischenstände, Notizen und Rechenskripte: ein Ordner **außerhalb** von `lernen/content`
  (z. B. `~/kursarbeit/<kurs>/`). Dort liegen auch heruntergeladene Quellen. **Nichts davon wird eingecheckt.**

---

## 4. Wie die bisherigen Kurse entstanden sind (Prozessanalyse)

Das ist die exakte Abfolge, die zu Mathe 3, Physik 1 und EP1 geführt hat, einschließlich der Umwege. Der Soll-Ablauf
für neue Kurse (Abschnitt 5) ist die verbesserte Fassung davon.

### 4.1 Zeitleiste

| Schritt | Was passierte | Ergebnis | Lehre |
|---|---|---|---|
| 1. Recherche | Ein Agent suchte im Web und in lokalen PDFs **alle** Informationen zur Prüfung: Rechtsgrundlage, Ablauf, Fristen, Prüfer:innen, Format, Altprüfungen, Erfahrungsberichte, Literatur. Jede Aussage trägt die Kennzeichnung „gesichert (Quelle)“ oder „unklar/nur Forum“, am Ende Widersprüche und offene Fragen. | `recherche/sbp-tuwien.md`, `content/physik1/RECHERCHE.md` (beide nicht mehr im Repository) | Die Kennzeichnung gesichert/unklar ist die Grundlage für Regel 2. Ohne sie sickern Forenmeinungen als Fakten in die Kapitel. |
| 2. Plan | Kapitelplan mit Nummer, Dateiname, **id-Präfix**, Inhalt, Prüfungsgewicht (0 bis 3) und geschätzten Stunden; Kurs in Teile gegliedert; Plan deckt den offiziellen Stoffkatalog **vollständig** ab. | `content/<kurs>/PLAN.md`, `kurs.yaml` | Der Stoffkatalog (Verordnung, LVA-Beschreibung, Skript-Inhaltsverzeichnis) ist die Messlatte für Vollständigkeit. |
| 3. Format-Vertrag **vor** den Inhalten | Der Hauptagent baute die Plattform (Parser, Rechenkern mit mathjs, Validator, Widgets) und schrieb `AUTHORING.md` samt einem Referenzkapitel. Erst dann schrieben andere Agents Inhalte. | `AUTHORING.md`, Validator | Ein maschinell prüfbares Format ist der Hebel: Jeder Fehler ist sofort sichtbar, auch von fremden Autor:innen. |
| 4. Erste Generation | Acht Agents schrieben parallel je 1 bis 2 Kapitel (Brief: 6.000 bis 12.000 Wörter, 30 bis 45 Aufgaben, Plots, Widgets, Karten, Generatoren, jede Zahl mit python3 nachgerechnet). Ein weiterer Agent baute die Prüfungssimulationen und die Formelsammlung. | Ein vollständiger, fachlich sauberer Kurs | Fachlich korrekt, aber **ein Lehrbuch mit angehängten Übungen, kein Lernsystem** (nächste Zeile). |
| 5. Audit | Ein Agent prüfte alle Kapitel gegen Lehrplan, Schulbücher und die Musterprüfungen, rechnete rund 130 Werte nach und las acht Kapitel vollständig. | `QUALITAET.md`: **Rubrik (A)**, Gap-Liste je Kapitel (B), Fehlerliste (C), Plattform-Anforderungen (D) | Befund: zu wenige Übungen je Abschnitt, Übungen kopieren die Beispiele, kein Fading, kein Fehlerbild-Feedback, keine Wiederholung. Die Rubrik machte „gut“ **zählbar**. |
| 6. Validator lernt die Rubrik | `--qualitaet` meldet jede zählbare Rubrikregel als `Q-…`. Neue Format-Felder: `art: check`, `lernziel`, `kompetenz`, `fehler`, `gefuehrt`, `reflexion`, `voraussetzungen`, Karten-`id`/`kernpunkte`. | Messbare Abnahme | „Abgenommen“ = 0 Fehler **und** 0 Q-Warnungen. |
| 7. Rework je Kapitel | Pro Kapitel **ein** Agent mit dem Auftrag „von Grund auf neu denken“: Gap-Liste und Fehlerliste umsetzen, jeden Satz nach Sprachleitfaden neu schreiben, Aufgaben-IDs möglichst behalten, Kapitel in Teilen bauen und erst bei Fertigstellung einsetzen, Originale sichern. Wellen von bis zu 9 Agents gleichzeitig. | 34 Kapitel, alle 0 Fehler/0 Q | Abgebrochene Agents (API-Fehler, Stalls) hinterließen einmal abgeschnittene Kapitel. Seitdem: nie halbfertig einsetzen, Agents bei Abbruch **fortsetzen** statt neu starten. |
| 8. Unabhängige Review-Runde | Für **jedes** Kapitel ein frischer Agent: das ganze Kapitel in Leserichtung als Anfänger lesen, jede Zahl nachrechnen, jedes Fehlerbild prüfen, Links prüfen, Aufgaben gegen Originale vergleichen, alle Funde selbst beheben. Die Stichprobe an einem „abgenommenen“ Kapitel fand 16 Fehler, die Runde danach pro Kapitel 25 bis 80. | Weit über tausend Korrekturen; neuer Fehlerkatalog (Abschnitt 8) | Der Validator ist notwendig, nicht hinreichend (Regel 1). Aus den Funden wurden neue Validator-Prüfungen und Plattform-Fixes. |
| 9. Validator wächst mit | Neue Prüfung: ein Fehlerbild darf nie als richtig gewertet werden (44 Treffer in Mathe/Physik, 3 in EP1). Plattform-Bugs aus den Reviews behoben (Bedingungsausdruck `bed ? a : b`, Zusatzkurven im Parameter-Widget). | Weniger blinde Flecken | Jeder Review-Fund, der sich automatisch erkennen lässt, gehört in den Validator. Das ist Maintainer-Arbeit; melde Ideen in `WUENSCHE.md`. |
| 10. Browser-Abnahme | Ein Agent, **eine** Browser-Session, prüfte Hub, Lektionen, Aufgabeninteraktion, Prüfungssimulation, Konsole, Links und Widgets auf Desktop/Handy, hell/dunkel. | 7 Darstellungsfehler behoben | Optische Fehler (abgeschnittene Plotbeschriftungen, Widgets, die nicht tun, was der Text sagt) findet kein Textvalidator. |
| EP1 zusätzlich | **Analyse** des Materials (117 Einträge: Aufgabenblätter, TUWEL-Tests, Programmiertests, Folien), Prüfungsteile mit Punkten, Fragetypen-Schablonen, Gap-Analyse gegen das alte Skript, technische Machbarkeit (Java-Runner), Rework-Plan. Dann Plattform-Erweiterung (Java-Aufgabentypen, sicherer Runner), dann Schreib-Agents, dann Reviews **mit echtem Java** (Beispielausgaben, Compilertexte, Mutationstests der Code-Aufgaben). | 22 Kapitel, 2.815 Java-Prüfungen | Bei prüfungsimmanenten Kursen ist die **Materialanalyse** der wichtigste Schritt. |

### 4.2 Aufwand (Richtwerte aus diesem Projekt)

| Rolle | Dauer | Token-Verbrauch |
|---|---|---|
| Schreib-Agent, ein Kapitel (Neuschreiben mit Rubrik) | 1,5 bis 2,2 Stunden | 0,5 bis 0,75 Mio. |
| Review-Agent, ein Kapitel | 10 bis 55 Minuten | 0,35 bis 0,5 Mio. |

Gemessen wurden Schreiben und Review je Kapitel; Recherche und Plan fielen dagegen kaum ins Gewicht. Ein Kurs mit 15 Kapiteln kostet damit grob 15 · (0,65 + 0,42) ≈ 16 Mio. Token. **Beginne mit einem Pilotkapitel** (P3), bevor du hochskalierst.
Die genutzten Modelle waren die stärksten verfügbaren. Kleinere Modelle machen systematisch mehr Fehler der Klassen
F1 bis F8 in Abschnitt 8.

### 4.3 Die zwölf Lehren

1. Der Format-Vertrag mit Validator muss **vor** den Inhalten stehen.
2. Das Messen der Qualität (Rubrik, Q-Warnungen) hat mehr gebracht als jede Ermahnung im Prompt.
3. Ein Schreib-Agent pro Kapitel, mit exklusiv zugewiesenen Dateien, parallel (höchstens 9 gleichzeitig; die Maschine war oft überlastet).
4. Die Kapitel dürfen nicht kleiner werden, wenn man Fehler repariert: Jede Korrektur muss die Segmentierungsregel (≤ 350 Wörter ohne aktives Element) und die Satzlängenregel weiter einhalten, sonst taucht `Q-A12`/`Q-S2` auf.
5. Arbeite in Teilen im Arbeitsordner, lege die Kapiteldatei erst vollständig ab und validiere sie dann sofort mit Nummernfilter (Regel 7); das Original vorher sichern.
6. Skripte, die Text per regulärem Ausdruck ersetzen, haben mehrfach zu viel überschrieben. Prüfe danach `diff` gegen die Sicherung.
7. Bei API-Abbrüchen (Verbindungsfehler, Zeitüberschreitung, Stalls) den Agent **fortsetzen** (SendMessage/Resume), nicht neu starten.
8. Der Review muss unabhängig sein und mit **konkreten Fehlerklassen** gebrieft werden (Abschnitt 8); „prüfe das Kapitel“ allein findet zu wenig.
9. Mutationstests für Code-Aufgaben (typische falsche Lösungen schreiben und prüfen, dass die Tests sie ablehnen) haben mehrere durchlässige Tests aufgedeckt.
10. Beinahe-Kopien von Originalen fallen nur im direkten Vergleich mit dem Original auf: Der Reviewer braucht die Originaldateien.
11. Gescannte PDFs (Code als Bild) sind keine Quelle, solange sie nicht gelesen sind: Seiten rendern und ansehen oder OCR; sonst die Aussage als „nicht prüfbar“ markieren.
12. Plattformwünsche sammeln (`WUENSCHE.md`), nicht selbst Plattformcode ändern.

---

## 5. Der Ablauf für einen neuen Kurs (Phasen P0 bis P8)

Menschliche Haltepunkte sind mit **STOP** markiert. Dort wartest du auf Freigabe.

### P0. Auswahl, Anspruch, Typ

- Wähle einen Kurs (Abschnitt 2). Arbeiten mehrere Leute am Repository: melde ihn (Draft-Pull-Request `Kurs <id>: in Arbeit` oder die vereinbarte Liste), damit nicht zwei Personen denselben bauen.
- Lege die **KURS-ID** fest: nur `a-z0-9-`, kurz, stabil (Vorbilder: `mathe3`, `physik1`, `ep1`; z. B. `analysis`, `datenbanksysteme`). Sie wird URL-Teil und Schlüssel des Lernfortschritts und ändert sich danach nie.
- Notiere die **LVA-Nummer** genau wie in TISS (`185.A91`); sie kommt in `kurs.yaml` als `lva:` und verbindet den Kurs mit der Fächer-Seite (P7). Bereitet der Kurs eine Prüfung der Studienberechtigung vor, gilt stattdessen `sbp:` mit der Id der Prüfung.
- Bestimme den **Kurstyp** (2.2) und die **Prüfungsteile** mit Punkten (bei prüfungsimmanenten Kursen mehrere).
- Lass dir das Material nach Abschnitt 2a bereitstellen und lege `INVENTAR.md` an. **Nichts davon einchecken** (Abschnitt 10.3).

### P1. Recherche und Analyse (Prompt Q)

Ergebnis: `content/<kurs>/RECHERCHE.md`, bei prüfungsimmanenten Kursen zusätzlich `content/<kurs>/ANALYSE.md`.

`RECHERCHE.md` hat diese Gliederung:
1. Stoffkatalog und Rechtsgrundlage (Verordnung, Studienplan, LVA-Beschreibung mit URL und Fassung)
2. Prüfungsablauf (Anmeldung, Termine, Antritte, Notenschema)
3. Wer prüft (nur öffentliche Angaben)
4. Format, Dauer, Hilfsmittel
5. Altprüfungen/Musterprüfungen (Fundort, Jahr, Umfang), Aufgabenblätter, Tests
6. Literatur und Ressourcen
7. Widersprüche zwischen Quellen, Stand, **offene Fragen** (an wen)
8. Quellenliste mit Abrufdatum

Jede Aussage: **gesichert (Quelle Qn)** oder **unklar/nur Forum**. Fehlt etwas, schreibe „nicht veröffentlicht“.

`ANALYSE.md` (nur bei Blättern/Tests/Quiz; die Gliederung folgt der EP1-Analyse, die nicht im Repository liegt):
Materialinventar → Prüfungsteile mit Punkten und Format → **Aufgabentypen und Schablonen** je Prüfungsteil (z. B. Quiz-Slot 1 = Auswahl zu …) → Gap-Analyse gegen vorhandene Skripte → Rework-Plan (Kapitelstruktur, Lernziele, Aufgabentypen je Kapitel, Generatoren, Simulationen) → offene Fragen.

### P2. Gerüst und Plan  **STOP (Freigabe von `PLAN.md`)**

Lege an:
- `content/<kurs>/kurs.yaml` (Vorlage in Anhang A.1; Schema `KursSchema` in `lib/lernen/typen.ts`)
- `content/<kurs>/PLAN.md`: eine Tabelle `Nr | Datei | Präfix | Inhalt | Prüfungsbezug | Gewicht | Stunden`
- Je Kapitel **6 bis 10 Lernziele** (Verb + Objekt + Bedingung, überprüfbar), später in den Kapitel-Frontmatter.

Regeln für den Plan:
- Er deckt den Stoffkatalog **vollständig** ab. Was über den Prüfungsstoff hinausgeht, wird als „(Vertiefung)“ gekennzeichnet.
- Ein Kapitel hat typischerweise 6 bis 20 Lektionen (`##`-Abschnitte). Kapitel 8 bis 25 pro Kurs.
- Jedes Kapitel hat einen **eindeutigen Präfix** aus 2 bis 3 Buchstaben (`za`, `gl`, `wz` …) für Aufgaben-IDs.
- Das letzte Kapitel ist bei Prüfungskursen eine **Prüfungsstrategie** (Ablauf, Zeitmanagement, Darstellung, Hilfsmittel, typische Punkteverluste, mündliche Antworttechnik, Lernplan). Schreibe es zuletzt, es verweist auf alle anderen.
- Plane die Prüfungssimulationen (P5) mit ein.

### P3. Pilotkapitel  **STOP (Freigabe nach Review)**

1. Schreibe **ein** repräsentatives Kapitel (Prompt W) in der Zielqualität.
2. Validiere (`--qualitaet`), dann **unabhängiger Review** (Prompt R).
3. Prüfe mit dem Maintainer: Stimmt Ton, Tiefe, Umfang? Passen die Aufgabentypen zum Prüfungsformat?
4. Passe den Prompt W an (z. B. zusätzliche Fachregeln), bevor du auf alle Kapitel skalierst.

### P4. Schreib-Welle (Prompt W, ein Agent pro Kapitel)

- Pro Kapitel **ein** Writer, parallel, höchstens 9 gleichzeitig (RAM!). Jeder Writer besitzt exklusiv `kapitel/NN-slug.md` und `training/<slug>.ts`.
- Reihenfolge: Grundlagenkapitel zuerst, abhängige danach (Verweise brauchen existierende Zielseiten), Prüfungsstrategie zuletzt.
- Writer führen `npm run lernen:index` **nicht** aus (das tust du zentral in P7) und starten keinen Dev-Server (er führt `lernen:index` selbst aus, Abschnitt 3). Sie legen keine Dateien außerhalb ihres Kapitels an, außer Wünschen in `WUENSCHE.md`.
- Nach jedem Writer: `npm run lernen:pruefen -- <kurs> <NN> --qualitaet` selbst ausführen. Nicht dem Bericht des Agents glauben.

### P5. Prüfungsmaterial (Prompt S)

- **Prüfungssimulationen** (`pruefungen/*.yaml`): (a) Nachbauten der echten Musterprüfungen/Tests (`art: original`), (b) selbst erstellte (`art: simulation`), die zusammen den **ganzen** Stoff abdecken. Ziel: mindestens 6 Simulationen. Die Zahlen der Original-Nachbauten dürfen in **keinem** Kapitel vorkommen (sie sind „unverbraucht“ zu halten).
- **Formelsammlung** `formelsammlung.md` (ohne Frontmatter), gegliedert nach Kapiteln, mit Taschenrechnerhinweisen.
- Optional: Eingangs-Diagnosetest (dafür gibt es kein eigenes Format; als Prüfungssimulation oder Kapitel umsetzen).
- Das **Glossar** (`/lernen/<kurs>/glossar`) entsteht automatisch aus allen Kästen `:::definition[Begriff]`. Eine Definition
  ohne Titel in eckigen Klammern fehlt im Glossar; eine eigene `id` für Definitionen gibt es nicht.

### P6. Review-Runde (Prompt R, ein **unabhängiger** Reviewer pro Kapitel)

- Frischer Kontext, anderes Modell oder anderer Mensch als der Writer.
- Reviewer bekommt **Zugriff auf die Originale** (für den Kopienvergleich) und das Kapitel.
- Der Reviewer behebt Funde selbst, validiert danach und berichtet nach den Kategorien A bis G, bei Java-Kursen zusätzlich H (Abschnitt 11.5).
- Ergebnisse, die den Validator verbessern würden, gehen in `WUENSCHE.md`.
- Bei Java-Kursen: Beispielausgaben, Compilertexte und Mutationstests mit echtem JDK (Prompt R, Abschnitt „Java“).

### P7. Integration

```bash
cd web
npm run lernen:index                                  # erzeugt content/<kurs>/training/index.ts (nie von Hand ändern; wird mit eingecheckt: 10.2)
npm run lernen:pruefen -- <kurs> --qualitaet          # ganzer Kurs: 0 Fehler, 0 Warnungen, 0 offene Qualitätskriterien
npm run lernen:pruefen                                # alle Kurse (Querverweise zwischen Kursen)
npm run lernen:test                                   # Unit-Tests
```

Dann den Kurs **einhängen**. Ohne diese Schritte existiert er nur unter `/lernen/<kurs>`, und das Training bleibt leer:

1. **Zuordnung:** `lva: "<LVA-Nummer>"` (oder `sbp: <id>`) in `content/<kurs>/kurs.yaml`. Die Fächer-Seite verbindet den
   Kurs über diese Nummer mit der Zeile der Lehrveranstaltung in der Tabelle `kurse` (`db/lernen.db`; Schreibweise egal,
   `185.A91` = `185A91`). Fehlt die LVA dort, erscheint der Kurs nicht auf der Fächer-Seite: das melden, nicht die
   Datenbank von Hand ändern.
2. **Training:** In `components/lernen/Trainer.tsx` in der Tabelle `LADER` eine Zeile
   `<kurs>: () => import("@/content/<kurs>/training"),` ergänzen (Vorbild: die Zeile für `ep1`). Ohne sie bleibt
   `/lernen/<kurs>/training` leer, obwohl der Validator die Generatoren prüft. Das ist eine der beiden Plattform-Dateien,
   die beim Einhängen geändert werden dürfen (Abschnitt 6.9); bei mehreren Beteiligten macht es der Maintainer.
3. Optional: in `scripts/dev.ts` die Seite `/lernen/<kurs>` in `SEITEN` aufnehmen (wird beim Start von `npm run dev`
   vorab kompiliert).
4. **In TUWAS sichtbar machen:** TUWAS zeigt die **gebaute** App. `npm run build` in `lernen/`, dann TUWAS ganz beenden
   (Strg+Q) und neu starten. Im Tab erscheint der Kurs auf der Fächer-Seite nur, wenn man in TISS bei dieser LVA
   angemeldet ist (TUWAS übergibt die eigenen LVAs); `sbp:`-Kurse nur mit eingeschalteter Studienberechtigung
   (Einstellungen → Lernen).
5. `npx tsc --noEmit` und `npm run lint` in `lernen/` (wegen der Zeile in `Trainer.tsx`).

Danach:
- **Link-Durchlauf:** Verweise zwischen Kapiteln sollen auf konkrete **Lektionen** zeigen (`/lernen/<kurs>/<kapitel>/<lektions-id>`), nicht auf Kapitelseiten und nie mit `#anker`. Der Validator prüft, dass das Ziel **existiert**, nicht, dass es **passt** und die Nummer im Linktext stimmt.
- **Stichprobe im Browser** (wenn möglich): drei zufällige Lektionen, eine Aufgabe mit Fehlerbild, ein Widget, eine Prüfungssimulation; Handybreite.
- Aktualisiere die Doku, soweit dein Kurs sie berührt (siehe 10.4).

### P8. Übergabe

Pull Request mit: Kursordner, vollständiger Validator-Ausgabe (letzte Zeilen), Liste der Quellen, Liste der **unbelegten oder unsicheren Stellen**, Liste der Plattformwünsche, Bericht der Review-Runde (Funde je Kapitel). Checkliste Anhang B.

---

## 6. Dateien und Formate (Spickzettel)

Die vollständige Spezifikation steht in [`AUTHORING.md`](./AUTHORING.md) (inklusive Java-Aufgabentypen in
Abschnitt 4a). Hier die Kurzfassung mit den Stellen, an denen Fehler passieren. Anhang A enthält eine **vom Validator
geprüfte** Vorlage zum Kopieren.

### 6.1 Ordner und Dateinamen

```
lernen/content/<kurs>/
  kurs.yaml                  Kursmetadaten (Pflicht: sonst erscheint der Kurs nicht)
  PLAN.md                    Kapitelplan (Autor:innen-Dokument, wird nicht gerendert)
  RECHERCHE.md, ANALYSE.md   Quellen und Analyse (Autor:innen-Dokumente)
  WUENSCHE.md                Plattformwünsche
  formelsammlung.md          optional, Markdown ohne Frontmatter
  kapitel/NN-slug.md         ein Kapitel pro Datei; NN zweistellig; slug = URL-Teil (a-z0-9-)
  pruefungen/NN-name.yaml    Prüfungssimulationen
  training/<slug>.ts         Generatoren eines Kapitels (slug = Kapitel-Slug); index.ts wird generiert
```

### 6.2 Kapitel-Frontmatter (Schema `KapitelMetaSchema`)

```yaml
---
nummer: 9                  # ganze Zahl, bestimmt die Reihenfolge
titel: Differentialrechnung
kurz: Ein Satz für die Kursübersicht.
teil: A                    # Schlüssel aus kurs.yaml -> teile
stunden: 14                # geschätzte Lernzeit (für den Lernplan)
pruefungsgewicht: 3        # 0 bis 3
voraussetzungen: [slug-a, slug-b]   # Kapitel-Slugs
lernziele:
  - Eine Ableitung mit der Kettenregel berechnen         # Index 0, 1, 2 ... wird in Aufgaben als lernziel: n benutzt
---
```

### 6.3 Aufbau eines Kapitels (Soll)

Text vor der ersten `##`-Überschrift ist die **Einleitung** (Wozu? Was kommt in der Prüfung? `:::vorwissen` +
**Eingangsdiagnose** aus 5 bis 8 `art: check`-Aufgaben, jede mit Link zum Herkunftsabschnitt).

Dann die **Lernabschnitte** (je ein `##`, Richtwert 900 bis 2.000 Wörter plus Aufgaben), dann, in dieser Reihenfolge:
`## Gemischte Wiederholung` → `## Prüfungsaufgaben` → `## Zusammenfassung` → `## Mündliche Prüfung`.
Keine `#`-Überschrift im Kapitel. Überschriften ohne Formeln und Sonderzeichen (ℝ, ℂ, `$…$`), damit die Lektions-ID lesbar bleibt.

**Reihenfolge innerhalb eines Lernabschnitts:** Vorwissens-Check → Motivation und Alltagsbild → Begriff fett, in Alltagssprache, dann
exakte Definition/Satz → Erklärung/Herleitung in kleinen Schritten → ≥ 2 durchgerechnete Beispiele → Nichtbeispiel →
typische Fehler (konkrete Fehlrechnung) → Merke-Rezept (**nach** den Beispielen) → geführte Aufgabe → Übungen (leicht nach schwer) → Selbsterklärung.

### 6.4 Bausteine

**Kästen** (Container, nicht verschachteln, schließendes `:::` allein in einer Zeile):
`:::definition[Titel]`, `:::satz`, `:::beweis` (endet mit ∎), `:::beispiel`, `:::merke`, `:::achtung` (typischer Fehler),
`:::tipp`, `:::pruefung` (Prüfungstipp), `:::intuition`, `:::formel`, `:::zusammenfassung`, `:::vorwissen`, `:::anwendung`.

**Aufgabe** (```` ```aufgabe ````, YAML):

| Feld | Bedeutung |
|---|---|
| `id` | kursweit eindeutig, `a-z0-9-`, mit Kapitelpräfix (`gl-quadratisch-1`); **nie ändern** |
| `titel`, `niveau` | 1 Basis · 2 Standard · 3 Prüfungsniveau |
| `art` | `uebung` (Standard) oder `check` (kurze Verständnis-/Vorwissensfrage, kompakt) |
| `lernziel` | Index in `lernziele` des Frontmatters (0-basiert) |
| `kompetenz` | `rechnen` · `verstehen` · `anwenden` · `begruenden` · `modellieren` |
| `quelle`, `punkte` | Herkunft (`nach … (abgewandelt)`), Punkte bei Prüfungsaufgaben |
| `angabe` | Markdown mit KaTeX; **Rundung, Einheit, Form, Reihenfolge nennen** |
| `teile` | Liste der Antwortfelder (Typen unten) |
| `hinweise` | gestuft, vom Denkanstoß zum Ansatz; der letzte nennt den Ansatz, nie das Ergebnis |
| `loesung` | Lösungsweg; Schritte durch eine Zeile `---` getrennt; Schritt 1 = Ansatz und warum; letzter = Probe/Antwortsatz |
| `gefuehrt` | Schritte `{text, teil?, erklaerung}` (Fading); AUTHORING erlaubt 3 bis 6, die Rubrik (A4) verlangt mindestens 4, davon mindestens 2 mit eigenem `teil` (Eingabe). Schritte ohne `teil` sind Denkschritte. `code`-Teile sind hier nicht erlaubt. |
| `plot` | optionale Grafik in der Angabe |

**Antworttypen** (`teile[].typ`; `loesung` ist bei Zahlen ein **rechnender Ausdruck**: `"ln(2)/0.055"`, nicht `"12.6"`):
`zahl` (`toleranz?` absolut, Standard 0,5 % relativ; `einheit?`; `anzeige?`), `komplex`, `vektor` (`vielfaches?`), `menge`
(leere Menge: `[]`), `term` (Stichprobenvergleich; `bereich?`; `plusC?`), `auswahl` (`optionen`, `richtig: [0-basierte Indizes]`, `mehrfach?`),
`text` (Selbsteinschätzung mit `muster`). Java-Kurse zusätzlich: `ausgabe`, `richtigfalsch`, `lueckentext`, `zeilen`, `trace`, `reihenfolge`, `code` (Details in `AUTHORING.md` 4a).

**Fehlerbilder** (`fehler: [{wert, meldung}]` an einem Teil): `wert` wird **wie eine Nutzereingabe** verglichen (bei `auswahl` der Index, bei `vektor`/`menge`
eine Liste, bei `richtigfalsch` eine Liste aus `r`/`f`, bei `code` die Nummer eines Tests oder der Name einer Regel; Details in `AUTHORING.md` 4a). Teile vom Typ `text` haben keine Fehlerbilder. Die `meldung` (Markdown) benennt die **Fehlvorstellung**, erklärt sie und verrät das Ergebnis nicht.
Ziel: ≥ 50 % der Antwortfelder auf Niveau 1/2 haben mindestens ein Fehlerbild; MC-Distraktoren sind benannte Fehlvorstellungen.

**Weitere Blöcke:** ```` ```reflexion ```` (`frage`, `antwort`), ```` ```plot ```` (statische SVG-Grafik; **immer `beschriftung`**), ```` ```widget ````
(`name`, `titel`, `props`; vorhandene Namen: Mathe `parameter, tangente, riemann, folge, einheitskreis, komplex, binomial, normal, vektoren, gauss, statistik, stetigkeit`;
Physik `schwingung, wellen, linse, pv-diagramm, wurf, stromkreis, zerfall`; Props in `WIDGETS.md`), ```` ```karten ```` (`id`, `frage`, `antwort`, `kernpunkte`).

### 6.5 Konventionen

- **Zahlen in Text:** Dezimalkomma als `3{,}5`; in `loesung`/Ausdrücken Dezimalpunkt `3.5`. Geldbeträge ohne `$` („Euro“).
  Innerhalb von Funktionsaufrufen ist das Komma Argumenttrenner: `binomcdf(12, 0.25, 2)`.
- **Rechenfunktionen in `loesung`** (vollständige Liste in `AUTHORING.md` Abschnitt 4): `sqrt, nthRoot, abs, exp, ln, log(x,b), lg, ld, sin, cos, tan (Bogenmaß), asin, atan2, inRad, inGrad, pi, e, i, binom, factorial, binompdf, binomcdf, normcdf, invnorm, integral("f(x)",a,b), det, inv, mean, median, std, variance`.
- **Lernende dürfen** Dezimalkomma, `√`, `π`, `²`, `·`, `ln`, implizite Multiplikation (`2x`) eingeben. Ein **leeres Feld** zählt nicht als Antwort
  („Bitte eine Antwort eingeben.“, weder richtig noch Fehlversuch). Eine Aufgabe mit der Antwort „keine Lösung“ baust du als `menge` mit
  `loesung: []`; Lernende geben dann `leer`, `∅` oder `{}` ein. Bei anderen Typen (`zahl`, `vektor` …) gibt es keine Eingabe für „keine Lösung“.
- **Lektions-ID** = Überschrift als ASCII-Slug: Umlaute `ae/oe/ue/ss`, griechische Buchstaben ausgeschrieben (ε → `epsilon`), alles außer `a-z0-9` wird `-`.
  Beispiel: `## Der Kreis` → `der-kreis`. Gleiche Überschriften in einem Kapitel bekommen `-1`, `-2` angehängt. Eine umbenannte Überschrift bricht alle Links darauf.
- **Links:** `[9.3 Voller Titel](/lernen/<kurs>/<kapitel-slug>/<lektions-id>)`. Nummer **und** voller Titel im Linktext; Nummer = Position der `##` im Zielkapitel.
  Nie „oben“, „unten“, „im vorigen Abschnitt“ ohne Link. Gültige Ziele im eigenen Kurs sind außerdem `/lernen/<kurs>/pruefung`, `…/pruefung/<prüfungs-id>`
  (die `id` aus `pruefungen/*.yaml`), `…/muendlich`, `…/training`, `…/formeln`, `…/glossar`, `…/suche` und `…/wiederholen`.
- **Prüfungsaufgaben** im Kapitel: mehrteilig, mit `punkte`, Sachkontext, Zeitrichtwert; Originale nur als Nachbau.
- **Tabellen:** Ein `|` innerhalb einer Formel in einer Tabellenzelle zerreißt die Zelle (`\middle|` → `\mid` benutzen).

### 6.6 YAML-Fallen (jede davon ist passiert)

| Falle | Folge | Lösung |
|---|---|---|
| Freitext mit `: ` (Doppelpunkt + Leerzeichen) ungequotet, z. B. `erklaerung: $15 : 3 = 5$.` | `YAMLParseError` | Blockskalar `\|` oder einfache Anführungszeichen |
| Freitext mit ` #` (Leerzeichen + Raute) ungequotet, z. B. `meldung: Das ist Fall #2` | Text wird **ohne Fehlermeldung** ab ` #` abgeschnitten (gilt als Kommentar) | Blockskalar `\|` oder `'…'` |
| Freitext beginnt mit `"` (z. B. `meldung: "Mal 5" macht …`) | Fehler | Blockskalar `\|` |
| Backslashes in `"…"` (`\t` wird ein Tab) | falsche Formeln | immer `\|` oder `'…'` |
| Unquotete `true`, `false`, `null`, `~` (z. B. als Antwortoption) | werden Boolean bzw. leer, Schemafehler | `'true'` (`yes`/`no`/`on`/`off` bleiben in der hier benutzten YAML-Version Text) |
| Zahlen ohne Anführungszeichen, wo Text gemeint ist (Option `3.10`, Ausgabe `0123`) | werden zu Zahlen (`3.1`, `123`) oder Schemafehler | `'3.10'` |
| Mehrzeiliger Text ohne `\|` | Zeilen verschmelzen | `\|` |
| Einrückung gemischt (Tabs) | Fehler | nur Leerzeichen |

Faustregel: **Alles, was Text für Menschen ist, steht in `\|`-Blöcken.**

### 6.7 Trainingsgeneratoren (`training/<slug>.ts`)

```ts
import { drill, tz, type Drill } from "@/lib/lernen/training";
export const DRILLS: Drill[] = [
  drill({ id: "xx-d-name", kapitel: "kapitel-slug", titel: "…", niveau: 1,
    erzeuge: (r) => ({ angabe: "…", teile: [{ typ: "zahl", loesung: "…", fehler: [] }], loesung: "Ansatz\n---\nErgebnis" }) }),
];
```

`r`: `int(a,b)`, `intOhne0`, `wahl(liste)`, `vorzeichen()`, `mische(liste)`, `zufall()`. Helfer: `tz`, `koef`, `summand`, `polyTex`, `polyAusdruck`, `bruchTex`, `ggt`.
Die erzeugte Aufgabe hat `angabe`, `teile`, `loesung` und optional **einen** `hinweis` (Einzahl, Text). Ein Feld `hinweise` zeigt die Trainingsseite nicht an,
und der Validator meldet es nicht (er lädt die Datei ohne Typprüfung).
Ziel: ≥ 10 Generatoren je Kapitel (bei Gewicht 3 mindestens 3 auf Niveau 2/3). Der Validator läuft jeden Generator über 200 Seeds (bricht beim ersten Fehler ab;
die Render-Pipeline und Java nur für die ersten 10 Seeds).
**Sonderfälle bedenken** (a = b, Winkel 45°/60°/90°, Wert 0, t = T, bereits sortierte Eingabe): dort fällt ein Fehlerbild leicht mit der Lösung zusammen. Lass das Fehlerbild in dem Fall weg
oder schränke den Parameterbereich ein. `code`-Aufgaben gehen **nicht** in Generatoren.

### 6.8 Prüfungssimulation (`pruefungen/NN-name.yaml`)

`id`, `titel`, `quelle?`, `art` (`original` oder `simulation`), `dauer_minuten`, `hinweis`, `aufgaben[]` (Aufgabenformat, jede mit `punkte`). Hinweise und Lösungen sieht man erst nach Abgabe.
Aufgaben-IDs mit eigenem Präfix je Simulation (`sim4-1`, `pk-1`).

### 6.9 Wer darf was ändern

| Pfad | Dürfen Kurs-Autor:innen ändern? |
|---|---|
| `content/<dein-kurs>/**` | ja (`training/index.ts` nur über `npm run lernen:index`, nie von Hand) |
| `content/AUTHORING.md`, `QUALITAET.md`, `SPRACHE.md`, `WIDGETS.md`, dieses Dokument, andere Kurse | nein (Vorschläge als Pull-Request-Kommentar) |
| `components/lernen/Trainer.tsx` (eine Zeile in `LADER`), `scripts/dev.ts` (`SEITEN`) | nur beim Einhängen (P7) |
| `app/`, sonst `components/`, `lib/`, `scripts/`, `db/`, `package.json`, `next.config.ts` | nein (Wünsche in `content/<kurs>/WUENSCHE.md`) |
| `README.md`, alles außerhalb von `lernen/` (TUWAS selbst) | nein (Kursübersichten pflegt der Maintainer) |

---

## 7. Der Qualitätsmaßstab in Kurzform

### 7.1 Rubrik (Kurzfassung von `QUALITAET.md` Abschnitt A; dort stehen die Details)

Ein Kapitel ist abgenommen, wenn alle Muss-Kriterien erfüllt sind; Soll-Kriterien (hier mit „Soll“ markiert) dürfen höchstens
zweimal pro Kapitel begründet fehlen (QUALITAET.md A).

**Je Lernabschnitt.** Lernabschnitt ist jede `##`-Überschrift außer den Schlussabschnitten. Der Validator erkennt sie an
Wortteilen im Titel (Groß-/Kleinschreibung egal): „Prüfungsaufgaben“, „Mündliche Prüfung“, „Überblick“, „Gemischte Wiederholung“,
„Zusammenfassung“, „Auf einen Blick“, „Eingangs“, „Vorwissen“. Eine Lektion mit einem dieser Wörter im Titel (z. B. „Vorwissen
auffrischen“) zählt also **nicht** als Lernabschnitt und wird nicht nach A1 bis A17 geprüft.

| Nr | Muss |
|---|---|
| A1 | Vorwissens-Check (`art: check` oder `:::vorwissen`) am Anfang, mit Link zum Herkunftsabschnitt |
| A2 | ≥ 2 durchgerechnete Beispiele als `:::beispiel`-Kästen (nur diese zählt der Validator) mit sichtbaren Zwischenschritten (≥ 1 bei reinen Definitionsabschnitten); mindestens eines anwendungsbezogen mit Einheiten (Physik: immer) |
| A3 | Jede Definition/jeder Satz mit ≥ 1 Beispiel **und** ≥ 1 Gegen-/Nichtbeispiel |
| A4 | ≥ 1 **geführte Aufgabe** (`gefuehrt`, ≥ 4 Schritte, davon ≥ 2 selbst einzugeben) |
| A5 | ≥ 6 Übungen (ohne `check`), davon Niveau 1 ≥ 2, Niveau 2 ≥ 2, Niveau 3 ≥ 1 |
| A6 | **Keine Übung wiederholt Term, Datensatz oder Zahlenkontext eines Beispiels** desselben Kapitels (nicht automatisch geprüft!) |
| A7 | ≥ 3 Aufgabenformate (Rechnen, Darstellungswechsel, Begründen, Fehler finden, Umkehraufgabe, Modellieren, Abschätzen) und ≥ 3 verschiedene `kompetenz`-Werte |
| A8 | ≥ 2 `:::achtung`-Kästen mit **konkreter falscher Rechnung** |
| A9 | Fehlerbilder bei ≥ 50 % der Antwortfelder in Niveau-1/2-Übungen (Kapitelgewicht 3: ≥ 70 %; der Validator prüft nur die 50 % und zählt alle Teile außer `text`); MC-Distraktoren sind benannte Fehlvorstellungen mit `fehler`-Meldung |
| A10 | ≥ 1 Selbsterklärung (`reflexion` oder `kompetenz: begruenden`) |
| A11 | Bei Geometrie/Grafik/Daten ≥ 1 Plot oder Widget (mit `beschriftung`); Physik: Freikörperbild/Schaltskizze |
| A12 | ≤ 350 Wörter Fließtext ohne aktives Element oder Beispiel dazwischen; Absätze ≤ 120 Wörter |
| A13 | Hinweise: Niveau 1 ≥ 1, Niveau 2/3 ≥ 2 |
| A14 | Lösungsweg ≥ 3 Schritte (`---`), bei Niveau 1 ≥ 2; Schritt 1 Ansatz+Warum, letzter Probe/Antwortsatz |
| A15 | Eindeutige Angabe (Rundung, Einheit, Grad/Bogenmaß, Form) |
| A16 | Soll: Merke-Rezept **nach** den Beispielen, wenn ein Verfahren gelehrt wird |
| A17 | Widget nur mit vorheriger Vorhersage-Frage (`check`) und Arbeitsauftrag „Vorhersage → Beobachtung → Erklärung“ |

**Je Kapitel**

| Nr | Muss |
|---|---|
| K1 | 6 bis 10 Lernziele; jede Aufgabe trägt `lernziel`; jedes Lernziel hat ≥ 4 Aufgaben, davon ≥ 1 Niveau 3 |
| K2 | `voraussetzungen` gepflegt; Eingangsdiagnose (vor der ersten `##`) mit 5 bis 8 `check`-Fragen und Links (der Validator lässt das erste Kapitel des Kurses hier aus) |
| K3 | Übungen gesamt ≥ 6 × Lernabschnitte, mindestens 60; Niveaumix etwa 35/40/25 % |
| K4 | ≥ 5 Prüfungsaufgaben mit `punkte`, davon ≥ 3 ohne Vorlage in einer Musterprüfung |
| K5 | „Gemischte Wiederholung“ ≥ 8 Aufgaben, ≥ 4 aus ≥ 2 früheren Kapiteln, ≥ 2 „Welches Verfahren passt?“ |
| K6 | `reflexion` („Schreib zuerst selbst die 3 wichtigsten Aussagen auf“) + `:::zusammenfassung` mit 5 bis 8 Kernaussagen |
| K7 | Fehlerkatalog („Die häufigsten Fehler“, ≥ 8), jeder Fehler mit Link auf die Aufgabe, die ihn trainiert |
| K8 | 12 bis 20 Karten mit `id` und `kernpunkte`, je Lernziel ≥ 1, ≥ 4 „Warum“-/Gegenbeispiel-/Zusammenhangsfragen, ≥ 2 Karten verbinden zwei Kapitel |
| K9 | ≥ 10 Trainingsgeneratoren (bei Gewicht 3 ≥ 3 auf Niveau 2/3) |
| K10 | ≥ 5 Querverweise (Physik: zu jedem Mathe-Werkzeug ein Link auf den Mathe-Abschnitt) |
| K11 | Soll: Lernziel-Selbstcheck am Kapitelende (Konfidenz 1 bis 3 je Lernziel) |
| K12 | 4.000 bis 9.000 Wörter Fließtext (mehr nur, wenn A12 gilt; der Validator prüft nur die Untergrenze, die fertigen Kapitel liegen meist darüber) |
| K14 | Physik zusätzlich: Diagramm-Lesen, Fermi-Abschätzung, Messdaten mit Unsicherheit, ≥ 3 Konzeptfragen mit Fehlvorstellungs-Distraktoren, Gedankenexperiment, Proportionalitätsschluss |

Für **Text-/Theoriekurse** (Typ T) gelten dieselben Strukturen: Der Validator zählt Beispiele, geführte Aufgaben, Fehlerbilder. Verwende `auswahl`/`text`-Schritte und benannte Fehlvorstellungen.
Findest du ein Kriterium für deinen Kurstyp unsinnig, **begründe es im Pull-Request** und melde es in `WUENSCHE.md`; schalte nichts still.

### 7.2 Sprache (Kurzfassung von `SPRACHE.md`)

Zielperson: klug, motiviert, hat **alles vergessen**, lernt **allein**. Maßstab: nach dem Lesen bleibt **keine offene Frage**.

1. **Jede Stelle ist für sich verständlich.** Kästen, Hinweise, Lösungsschritte, Karten werden einzeln gelesen. Kein „wie oben“, „bekanntlich“, „offensichtlich“, „trivial“, „analog“.
2. **Fachbegriff erst erklären, dann benutzen:** fett, Alltagssprache, Beispiel, dann exakte Definition. Fremdwörter übersetzen.
3. **Jedes Symbol benennen** („Dabei ist … die …“); Zeichen wie ⇒ beim ersten Auftreten vorlesen; im Fließtext keine Formel-Kurzschrift als Satzteil.
4. **Jeder Rechenschritt sagt, was passiert und warum.** Kein Schritt wird übersprungen.
5. **Erst konkret, dann allgemein:** Zahlenbeispiel → Muster → Regel → Beispiel → Gegenbeispiel. Zu jeder Definition ein Beispiel **und** ein Nichtbeispiel.
6. **Schwere Stellen** (Beweise, Quantoren, Grenzwerte, Wahrscheinlichkeitslogik, Modelle): Ziel in einem Satz → Bild/Alltagsvergleich → kleine begründete Schritte → in Worten zurückübersetzen → typisches Missverständnis auflösen.
7. **Kurze Sätze:** Ø unter 18 Wörter, nie über 30; aktiv; keine Abkürzungen wie „bzw.“, „d. h.“, „i. A.“ im Text; Absätze ≤ 4 bis 5 Sätze.
8. **Ton:** „du“, warm, sachlich, ermutigend, nie herablassend, keine Umgangssprache, keine Übertreibung.

### 7.3 Prüfungsnähe

- Aufgabenformate, Punkteverteilung, Zeitrichtwerte und Antworttechniken folgen dem **realen** Prüfungsformat (aus P1), nicht dem, was ein Modell für plausibel hält.
- Sind Details des aktuellen Semesters nicht veröffentlicht, sagt das Kapitel das offen („Format 2026W nicht veröffentlicht; die Simulationen folgen den Tests 2021 bis 2023“).
- Sachkontexte mit **realistischen** Werten (Bremsverzögerung ≤ 10 m/s², Weltrekorde, Stoffwerte): falsche Größenordnungen schaden dem Vertrauen.

---

## 8. Der Fehlerkatalog: was selbst gute Autor:innen falsch machen

Quelle: die unabhängigen Review-Läufe über alle 56 Kapitel (Mathe 3, Physik 1, EP1). **Brieft jeden Writer und jeden Reviewer mit dieser Tabelle.**
„V“ = erkennt der Validator (teilweise); „–“ = nur ein Mensch/Reviewer erkennt es.

| Nr | Fehlerklasse | Beispiel aus dem Projekt | V | So vermeidest du es |
|---|---|---|---|---|
| F1 | **Fehlerbild-Wert passt nicht zur Meldung** | Wert `-1` mit Meldung „Summand in der Produktregel fehlt“; rechnerisch entsteht `-1` aber, wenn man bei `(y²)'` das `y'` vergisst | – | Für jedes Fehlerbild die **falsche Rechnung selbst durchführen** und den Wert aus ihr ableiten. Meldung nennt genau diesen Fehler. |
| F2 | **Fehlerbild = richtige Antwort** (auch in Sonderfällen/Toleranz) | Fehlerwert 4095 neben Lösung 4096 liegt in der 0,5-%-Toleranz und wurde „richtig“; Generator mit `a = b`, Winkel 60° (1−cos 60° = cos 60°), `t = T` | V | `toleranz` enger setzen (`0.5` absolut bei ganzen Zahlen), Sonderfälle im Generator abfangen. |
| F3 | **Richtige Antwort wird abgelehnt** | Angezeigte gerundete Lösung liegt außerhalb der Standardtoleranz; Lösung mit Leerzeichen am Zeilenende ohne `trim`; „keine Lösung“ als leeres Feld | teilw. | Die in der Angabe verlangte Rundung selbst eintippen und prüfen; `toleranz` bewusst setzen; `trim: true` bei Textausgaben; „keine Lösung“ nur als `menge` mit `loesung: []` (Eingabe `leer`, Abschnitt 6.5). |
| F4 | **Zahlen in Prosa falsch** (nicht in `loesung`) | „5·2246,27 − 10000 ≈ 1231,36“ ist 1231,35; „0,98²²⁸ ≈ 0,0099“ ist 0,00999; „fast zwei Millionen Mal“ ist 1,4 Millionen | – | **Jede** Zahl im Text, in Beispielen, Hinweisen, Lösungsschritten, Meldungen, Karten nachrechnen (python3). |
| F5 | **Unrealistische Werte** | Zug mit −8 m/s², Kugelstoß mit 24,8 m über Weltrekord („plausibel“), Salzlösung mit 90 %, Tarifwerte, Generator mit bis zu −30 m/s² | – | Größenordnungen gegenprüfen; Generator-Parameterbereiche einschränken. |
| F6 | **Absolute Aussagen** | „nur“, „nie“, „immer“, „genau dann“: „Aus sin x/x folgen alle Grenzwerte“, „Quadrieren erhält die Reihenfolge nur, wenn beide ≥ 0“, „festes N reicht nie“ | – | Bedingung nennen („für …“, „meist“) oder streichen. Gegenbeispiel suchen. |
| F7 | **Widget-Aufträge, die das Widget nicht kann** | „f(1) einstellen“ bei einem Widget mit nur ε-Regler; Achsenbereich zu klein; Kreise als Ellipsen wegen ungleicher Skalierung | – | Den Quelltext des Widgets lesen (`components/lernen/widgets/**`); jeden Arbeitsauftrag wirklich ausführen; Vorhersagefrage davor. |
| F8 | **Dubletten und Beinahe-Kopien** | Übung = Beispiel mit gleichen Zahlen; Aufgabe mit den **Testdaten**, Namen oder Antwortoptionen der Originalprüfung; Sudoku-Parameter des Blattes | – | Original daneben legen und vergleichen: Zahlen, Wörter, Methodennamen, Testarrays, Optionen. |
| F9 | **Links nur auf Kapitelebene, mit `#anker`, falsche Nummer/Titel im Linktext, „oben/unten“** | `[Kapitel 12](/lernen/…/arrays)`; Linktext „1.8 Prozentrechnung“, Ziel ist 1.6 | teilw. | Immer `[N.M Voller Titel](…/lektions-id)`; Nummer aus der `##`-Reihenfolge des Zielkapitels bestimmen. Der Validator prüft nur, ob das Ziel existiert. |
| F10 | **Begriff vor Erklärung** | „Basisfall“ in der ersten Fehlermeldung, „TUWEL“, „Modulo“, `^` als „hoch“ in Java (ist XOR), O(n) vor der Einführung | – | Beim Lesen als Anfänger jede Stelle fragen: „Wurde das vorher erklärt?“ – auch in Hinweisen, Meldungen, Karten. |
| F11 | **Unbelegte Prüfungs-/Vorlesungsbehauptungen** | „kommt in jedem Quiz“, „Tutor:innen fragen gern …“, „0 Punkte bei Verstoß“, falsche Jahreszahl, falsche Quellenangabe | – | Regel 2: Beleg oder „[unsicher]“/streichen. `quelle:` exakt. |
| F12 | **Plot/Skizze widerspricht dem Text** | Pfeilrichtung falsch, Knoten und Bäuche vertauscht, Beschriftung „10 kV/m“ bei 1,67-fach langem Pfeil | – | Plot-Geometrie nachrechnen; Beschriftung mit dem Text abgleichen. |
| F13 | **Definition widerspricht Aufgaben** | „mittlere Geschwindigkeit = Δx/Δt“, aber Beispiele rechnen mit dem Gesamtweg | – | Begriffe einmal festlegen und überall gleich benutzen; im Review gezielt nach Widersprüchen suchen. |
| F14 | **Falsche fachliche Detailaussage** | Weißer Lack „strahlt schlecht ab“ (stimmt im Infraroten nicht); Eiffelturm aus Stahl (Schmiedeeisen); Celsius-Skala umgekehrt | – | Faktenbehauptungen mit Quelle prüfen; unsichere Zahlen als „etwa“ kennzeichnen oder streichen. |
| F15 | **Allaussagen verletzt durch Überlauf/Randfall (Java)** | „f(n) ist nie negativ“ falsch ab n = 92 682 (`int`-Überlauf) | – | Obergrenzen in die Vorbedingung; mit Java für Randwerte ausführen. |
| F16 | **Falsche Compiler-/Laufzeitmeldung** | „javac meldet beide Fehler“ (es meldet bei `';' expected` nur diesen); `s == ""` „oft false“ (in JDK 21 `true`) | – | Jede behauptete Meldung mit dem echten JDK reproduzieren. |
| F17 | **Tests lassen falsche Programme durch** | Basisfall `index >= a.length` besteht alle Tests; `<` und `<=` nicht unterschieden | – | **Mutationstest:** je Code-Aufgabe 2 bis 3 typisch falsche Lösungen schreiben, Tests müssen sie ablehnen. |
| F18 | **Beispielausgaben (Java) nicht geprüft** | `:::beispiel`-Ausgabe 8350.57142857143 falsch | – | Alle Programme in Beispielkästen kompilieren und ausführen. |
| F19 | **YAML-Fehler** | siehe 6.6 | V | `\|`-Blöcke. |
| F20 | **Halbfertige/zerstörte Dateien** | Abgebrochener Agent; Regex-Ersetzung löschte einen Block | – | Teile bauen, Datei atomar ersetzen, danach `diff` gegen Sicherung. |
| F21 | **Reparatur bricht die Rubrik** | Eingefügter Satz → `Q-S2` (Satz > 30 Wörter) oder `Q-A12` (> 350 Wörter ohne aktives Element) | V | Nach jeder Reparatur `--qualitaet` erneut. |
| F22 | **Fehlerkatalog/Karten verweisen auf Aufgaben, die den Fehler nicht üben** | „Fehler 11“ zeigt auf Aufgabe ohne diesen Fehler | – | Jeder Katalogeintrag: Link auf eine Aufgabe, die genau diesen Fehler als Fehlerbild enthält. |
| F23 | **Geführter Schritt fragt zwei Dinge bei einem Eingabefeld** | geführter Schritt mit „Stelle 1 und 10“ | – | Ein Schritt = ein Wert. |
| F24 | **Aufgabe verrät die Lösung** | Eingabebeispiel „4,5e-7“ entspricht genau der Lösung; Plot im Lektionstext mit den Messdaten der Übung | – | Beispiele anders wählen als die Aufgabe; Lösung nie in Angabe/Hinweis 1/Plot. |

---

## 9. Der Validator: was er prüft und was nicht

### 9.1 Befehle (aus `lernen/`)

```bash
npm run lernen:pruefen                          # alle Kurse
npm run lernen:pruefen -- <kurs>                # ein Kurs (inkl. Prüfungssimulationen, Training, Querverweise)
npm run lernen:pruefen -- <kurs> 09             # nur Kapiteldateien, die mit "09" beginnen (schnell; Prüfungen werden dabei nicht geprüft)
npm run lernen:pruefen -- <kurs> 09 --qualitaet # zusätzlich jede zählbare Rubrikregel als Q-… (Abnahme: 0 Q)
npm run lernen:test                             # Unit-Tests des Rechenkerns und der Bewertung
npm run lernen:test:java                        # Java-Runner gegen echtes JDK (langsam)
npm run lernen:index                            # generiert training/index.ts
```

**Was der Nummernfilter weglässt:** Der Filter vergleicht den Anfang des Dateinamens (`1` träfe also `10-…` bis `19-…`; gib immer
beide Ziffern an). Mit Filter prüft der Validator **nicht**: `pruefungen/*.yaml`, `formelsammlung.md`, Trainingsdateien anderer
Kapitel und doppelte Aufgaben-IDs zwischen dem gefilterten und anderen Kapiteln. Links im gefilterten Kapitel prüft er gegen alle
vorhandenen Kapitel. Diese Lücken schließt erst der Lauf ohne Filter (P7).

Der Lauf eines Java-Kurses (Tausende `javac`/`java`-Läufe) dauert Minuten. Starte ihn nicht parallel in mehreren Terminals.

### 9.2 Was er prüft

Frontmatter und YAML gegen die Schemas; eindeutige IDs; jede Musterlösung rechnet und besteht ihre **eigene** Prüfung (auch gerundet);
Term-Lösungen sind auswertbar; `anzeige` passt zu `loesung`; **jedes Fehlerbild wird nicht als richtig gewertet**; jede Formel kompiliert mit KaTeX
über die echte Render-Pipeline; Plot-Ausdrücke; Widget-Namen; interne Links (Kapitel, **Lektions-IDs**, Querverweise zwischen Kursen); Generatoren über 200 Seeds;
bei Java: `ausgabe` und `lueckentext` mit echtem Java, `code`-Musterlösungen gegen alle Tests und Regeln, Vorlagen kompilieren, Generatoren (erste 10 Seeds).
Mit `--qualitaet`: die Q-Regeln `Q-A1/A2/A4/A5/A8/A9/A10/A12/A13/A14/A17`, `Q-K1/K2/K3/K4/K5/K6/K8/K9/K10/K12`, `Q-S1` verbotene Floskeln, `Q-S2` Sätze > 30 Wörter, `Q-S3` „⇒“ als Satzteil.
Die Q-Regeln zählen nur, was sich zählen lässt, und sind oft schwächer als die Rubrik: `Q-A4` prüft nur, ob es eine geführte Aufgabe gibt (nicht
4 Schritte); `Q-A9` nur die 50-%-Schwelle; `Q-A12` nur die 350-Wörter-Strecke (nicht die Absatzlänge); `Q-K2` nicht die Links;
`Q-K5` nur „≥ 8 Aufgaben im Abschnitt Gemischte Wiederholung“; `Q-K6` nur, ob ein `:::zusammenfassung`-Kasten existiert; `Q-K12` nur
die Untergrenze 4.000 Wörter. A3, A6, A7, A11, A15, K7 und K14 prüft der Validator gar nicht. 0 Q heißt also nicht „Rubrik erfüllt“.

### 9.3 Was er **nicht** prüft (blinde Flecken, dafür gibt es den Review)

- Ob **Zahlen in Prosa** (Text, Beispiele, Hinweise, Lösungsschritte, Fehlerbild-Meldungen, Karten) stimmen
- Ob ein Fehlerbild-**Wert** zur **Meldung** passt (nur, dass er nicht zufällig richtig ist)
- Ob die gerundete Anzeige-Lösung mit der Toleranz zusammenpasst, **wenn die Angabe eine bestimmte Rundung verlangt**
- Dubletten und **Beinahe-Kopien** von Beispielen/Originalaufgaben (Regel A6 ist nicht automatisiert)
- Ob ein Link **passt** (Ziel existiert, aber falsche Lektion oder falsche Nummer im Text); `#anker`- und reine Kapitel-Links lässt er durchgehen
- Links in `pruefungen/*.yaml` (dort prüft er gar keine Links)
- Ob jede Karte eine `id` hat und ob Karten-IDs eindeutig sind (Regel 9: selbst prüfen)
- Ob ein **Widget-Arbeitsauftrag** ausführbar ist
- Realismus von Werten, fachliche Richtigkeit von Aussagen, Belege für Prüfungsbehauptungen
- Verständlichkeit für Anfänger, Begriffe vor der Erklärung
- Ausgaben in `:::beispiel`-Kästen und Compilertexte im Fließtext (Java)
- Ob `code`-Tests falsche Lösungen erkennen (Mutationstest)
- Das Aussehen (Plot-Beschriftungen, Umbrüche, Handyansicht)

---

## 10. Zusammenarbeit (Crowdsourcing): Regeln, Dateigrenzen, Übergabe

### 10.1 Rollen

| Rolle | Aufgabe |
|---|---|
| **Maintainer** | Pflegt Plattform, Handbücher, Validator, die Kursliste in `db/lernen.db` (Inhaltspaket), Fächer-Seite; nimmt Pull-Requests ab; legt die Lizenz fest. |
| **Kurs-Autor:in** (Mensch, optional mit LLM) | Besitzt `content/<kurs>/` und führt P0 bis P8 aus. |
| **Reviewer:in** (andere Person oder andere Instanz) | Führt P6 für Kapitel aus, die sie nicht geschrieben hat. Ohne Review kein Merge. |

### 10.2 Ablauf in Git

1. **Claim:** Draft-Pull-Request `Kurs <id>: in Arbeit` (oder die vom Maintainer genutzte Liste). Ein Kurs hat **eine** koordinierende Person; Kapitel können auf mehrere Personen verteilt werden.
2. **Branch** `kurs/<id>`; für Kapitelbeiträge `kurs/<id>-kapitel-NN` (Git erlaubt `kurs/<id>` und `kurs/<id>/…` nicht gleichzeitig).
3. **PR 1: Gerüst** (`kurs.yaml`, `PLAN.md`, `RECHERCHE.md`, ggf. `ANALYSE.md`). Der Maintainer gibt den Plan frei, **bevor** Kapitel entstehen (verhindert verworfene Arbeit).
4. **PR 2 bis n: Kapitel**, je Kapitel ein PR mit nur `kapitel/NN-slug.md`, `training/<slug>.ts` (+ `WUENSCHE.md`-Anhänge). `training/index.ts` wird von `npm run lernen:index` erzeugt (deterministisch, sortiert) und mit eingecheckt; nie von Hand ändern. Bei parallelen Kapitel-PRs desselben Kurses entsteht dort ein Konflikt: dann `npm run lernen:index` erneut ausführen statt von Hand zusammenzuführen.
5. **PR n+1: Prüfungsmaterial** (`pruefungen/`, `formelsammlung.md`).
6. Jeder PR enthält die Validator-Ausgabe (Abschnitt 10.5) und die Review-Notizen.

### 10.3 Quellen, Urheberrecht, Datenschutz

- **Keine Dritt-Materialien einchecken:** weder Original-PDFs (Folien, Skripte, Aufgabenblätter, Altklausuren, Lösungen) noch Scans noch Auszüge in Textform über Zitatlänge. Gib die Quelle an (Titel, Semester, Fundort/URL, Abrufdatum) und **baue nach**.
- **Nachbau heißt:** andere Zahlen, Namen, Texte, Testdaten, Antwortoptionen, Methodennamen; erhalten bleibt nur die Aufgabenidee/das Schema. `quelle: nach <Quelle> (abgewandelt)`.
- **Zitate** (Gesetze, Ordnungen, Definitionen aus Lehrbüchern) kurz, wörtlich, mit Paragraph/Seite/Fassung.
- **Personen:** Namen von Lehrenden nur aus öffentlichen Quellen (TISS, Institutsseite), nur in der Funktion. **Keine** Daten von Studierenden, **keine** Forennutzernamen, keine privaten Nachrichten. Erfahrungsberichte (VoWi, Foren) paraphrasieren und als „Erfahrungsbericht“ kennzeichnen.
- **Keine** Zugangsdaten, Tokens, E-Mail-Adressen, lokalen Pfade oder Notizen in Dateien. Prüfe vor dem Einreichen `git diff --stat` und suche nach `/home/`, `@`, `token`, `password`.
- **Lizenz:** Die Lizenz der Inhalte legt der Maintainer fest. Du reichst nur Text ein, den du (oder dein LLM unter deiner Verantwortung) selbst verfasst hast, und kennzeichnest im PR, welche Modelle beteiligt waren. *(Platzhalter für die Maintainer: Lizenztext hier eintragen, bevor Beiträge eingesammelt werden.)*

### 10.4 Dokumentation

- Du änderst nur Dateien in deinem Kursordner, plus die Einträge beim Einhängen (P7: `LADER` in
  `components/lernen/Trainer.tsx`, optional `SEITEN` in `scripts/dev.ts`). Die Zuordnung zur Fächer-Seite steht in deiner
  eigenen `kurs.yaml` (`lva:` bzw. `sbp:`). Maintainer-Arbeit bleibt: fehlende Lehrveranstaltungen in der Kursliste
  (`db/lernen.db`, kommt über das Inhaltspaket, siehe `lernen/README.md`) und Kursübersichten außerhalb von `content/`.
- Neue Plattformfunktionen (Widgets, Aufgabentypen, Ausführungsumgebung für andere Sprachen, Validator-Regeln) beschreibst du in `WUENSCHE.md`: Kapitelnummer, Problem, gewünschtes Verhalten, ein konkretes Beispiel.

### 10.5 Was in jeden PR gehört (Copy-and-paste)

```text
Kurs: <id>   Kapitel: <NN oder "Gerüst" / "Prüfungsmaterial">
Modelle/Werkzeuge: <welche LLMs, welche Version, Claude Code ja/nein>
Validator (letzte Zeilen):
  <Ausgabe von: npm run lernen:pruefen -- <id> <NN> --qualitaet; bei "Prüfungsmaterial" und vor dem Merge ohne <NN>>
  0 Fehler, 0 Warnungen, 0 offene Qualitätskriterien
Unit-Tests: npm run lernen:test -> alle bestehen
Java (nur Java-Kurse): Anzahl Prüfungen gegen echtes Java: <n>, alle bestanden
Review: <wer>, <Datum>, Funde je Kategorie A bis G (Java: bis H, siehe Prompt R): <a/b/c/d/e/f/g/h>, alle behoben: ja/nein
Quellen: <Liste: Titel, Semester, Fundort>
Unbelegte/unsichere Stellen: <Liste mit Datei:Zeile>
Nachgebaute Originalaufgaben: <Aufgaben-IDs -> Vorlage>
Plattformwünsche: <Verweis auf WUENSCHE.md-Eintrag>
Nicht geprüft: <ehrliche Liste>
```

### 10.6 Review durch einen zweiten Menschen (30 Minuten, empfohlen)

Lies zwei Lektionen so, als wüsstest du nichts. Beantworte fünf Aufgaben, **davon zwei absichtlich falsch**: Kommt eine gezielte Meldung? Ist sie richtig? Klicke zwei Links an. Sag, an welcher Stelle du zuerst gestockt hast. Das Urteil „verständlich“ stammt bisher nur von LLM-Lesern.

---

## 11. Die Prompts zum Kopieren

Alle Prompts setzen voraus: Claude Code (oder ein gleichwertiger Agent) läuft in `lernen/` eines Klons dieses Repositories. Ersetze `{…}`:
`{kurs-id}` = KURS-ID aus P0, `{NN}` = zweistellige Kapitelnummer, `{slug}` = Dateiname des Kapitels ohne Nummer und `.md`,
`{praefix}` = Aufgaben-ID-Präfix aus `PLAN.md`, `{Pfade}` = absolute Pfade zu deinem lokalen Material (oder „keins“).
Bei Auswahlen der Form `{M: … | P: … | T: …}` bleibt nur die Variante deines Kurstyps stehen; den Block `{JAVA, nur Java-Kurse: …}`
in Prompt R löschst du bei anderen Kursen ganz.
Modell: **das stärkste verfügbare**. Unterstützt deine Umgebung keine Subagents, führe die Rollen nacheinander in getrennten Sitzungen aus
(der Reviewer darf den Writer-Kontext nicht kennen).

### 11.1 Prompt A: Orchestrierung eines ganzen Kurses

~~~~~text
Du koordinierst den Bau eines neuen Lernkurses für die Plattform in diesem Repository (Verzeichnis lernen/).

Parameter:
- KURS-ID: {kurs-id}   (a-z0-9-)
- Kurs: {LVA-Nummer, Name, Semester}, Prüfungsform: {…}, Kurstyp: {M | P | T}
- Lokales Material (nicht einchecken): {Pfade zu Folien, Übungsblättern, Altklausuren, Skript}

Lies zuerst vollständig und in dieser Reihenfolge: lernen/content/ANLEITUNG-NEUE-KURSE.md, lernen/content/AUTHORING.md,
lernen/content/QUALITAET.md (Abschnitt A), lernen/content/SPRACHE.md, lernen/content/WIDGETS.md, danach zwei Vorbild-Kapitel
(Abschnitt 1.3 der Anleitung) und die kurs.yaml eines fertigen Kurses.

Bevor du irgendetwas schreibst: Prüfe das Material gegen Abschnitt 2a der Anleitung. Frage den Menschen in EINER
gebündelten Frage nach allem, was fehlt (Muss- und Sollte-Punkte), und lege ~/kursarbeit/{kurs-id}/INVENTAR.md an.
Fehlt Muss-Material, beginne nicht mit Kapiteln, sondern sage, was fehlt und was das für den Kurs bedeutet (2a.3).

Führe die Phasen P0 bis P8 der Anleitung aus (Abschnitt 5), einschließlich des Einhängens in P7. Die Meldung beim
Maintainer (P0) und alle Git-Schritte (Branch, Commit, Pull Request in P8) erledigt der Mensch; du bereitest dafür die
Texte vor. Halte dich exakt an:
- die zehn Regeln (Abschnitt 0) und den Fehlerkatalog (Abschnitt 8),
- die Dateigrenzen (Abschnitt 6.9): du änderst nur content/{kurs-id}/,
- die Betriebsregeln: höchstens 9 Subagents gleichzeitig, jeder Writer besitzt genau seine Dateien, bei API-Abbrüchen den Agent fortsetzen
  (nicht neu starten), niemals halbfertige Kapitel in content/ ablegen, `npm run lernen:index` nur du, nur zentral und nie parallel.

Subagents (in Claude Code: Agent-Werkzeug, Typ general-purpose, im Hintergrund; abgebrochene Agents mit SendMessage
fortsetzen, nicht neu starten; den Reviewer immer als NEUEN Agent starten, nie den Writer weiterverwenden):
- Recherche (P1): Prompt Q (Abschnitt 11.2).
- Kapitel (P3, P4): Prompt W (11.3), ein Subagent pro Kapitel.
- Prüfungsmaterial (P5): Prompt S (11.4).
- Review (P6): Prompt R (11.5), ein frischer Subagent pro Kapitel, der den Writer-Kontext nicht kennt.
Fülle die Platzhalter der Prompts vollständig aus, bevor du sie abschickst.

Halte an den mit STOP markierten Stellen an und frage den Menschen (Plan-Freigabe nach P2, Freigabe des Pilotkapitels nach P3).
Verlasse dich nie auf den Bericht eines Subagents: Führe nach jedem Kapitel selbst
`npm run lernen:pruefen -- {kurs-id} <NN> --qualitaet` aus und lies das Ergebnis.

Am Ende (P7): `npm run lernen:index`, dann `npm run lernen:pruefen -- {kurs-id} --qualitaet`, `npm run lernen:pruefen`, `npm run lernen:test`;
danach den Kurs einhängen (P7, Schritte 1 bis 5) und mit `LERNEN_JOURNAL=/tmp/test-lernstand.jsonl npm run dev` drei Lektionen ansehen.
Erstelle die PR-Beschreibung nach Abschnitt 10.5. Berichte ehrlich, was du nicht geprüft hast.
~~~~~

### 11.2 Prompt Q: Recherche und Analyse (P1)

~~~~~text
Recherchiere gründlich ALLE Informationen zu diesem Kurs und schreibe sie nach lernen/content/{kurs-id}/RECHERCHE.md
(und bei prüfungsimmanenten Kursen mit Übungsblättern/Tests nach lernen/content/{kurs-id}/ANALYSE.md).

Kurs: {LVA-Nummer, Name, Institution, Semester}. Kontext: Die Lernenden sind Erwachsene, die den Stoff allein erarbeiten.
Lokales Material (lies es, lade es nicht erneut herunter): {Pfade}. Web-Werkzeuge: nutze die in deiner Umgebung vorhandenen Such- und Abruf-Werkzeuge.

Ermittle, jeweils mit Quellen-URL/Fundort und Abrufdatum:
1. Stoffkatalog (Studienplan, LVA-Beschreibung, Verordnung): wörtlich, mit Fassung.
2. Prüfungsmodus: Teile, Punkte, Mindestpunkte, Notenschlüssel, Termine, Anmeldung, Wiederholungen, Hilfsmittel, Dauer, schriftlich/mündlich/am Rechner.
3. Wer prüft/leitet (nur öffentliche Angaben, nur Funktion).
4. Material: Altklausuren, Musterprüfungen, Übungsblätter, Tests, Folien, Skripte, Bücher (Fundort, Jahr, Umfang, lesbar oder gescannt).
5. Aufgabentypen und Schablonen je Prüfungsteil (z. B. Quiz-Frage 3 = Auswahl zu …), mit Beispielen aus dem Material.
6. Erfahrungsberichte (VoWi, Foren): paraphrasiert, als Erfahrungsbericht gekennzeichnet, ohne Nutzernamen.
7. Widersprüche zwischen Quellen, Stand, offene Fragen (an wen).

REGELN: Kennzeichne JEDE Aussage als „gesichert (Quelle Qn)“ oder „unklar/nur Forum“. Fehlt etwas, schreibe „nicht veröffentlicht“ – erfinde nichts.
Gescannte PDFs (pdftotext liefert leeren Text): rendere die betroffenen Seiten und lies sie als Bild, oder markiere die Stelle als „nicht prüfbar“.
Checke KEINE fremden PDFs/Folien/Lösungen in das Repository ein; nenne sie in der Quellenliste.
Gliederung RECHERCHE.md: 1 Stoff/Rechtsgrundlage, 2 Ablauf, 3 Prüfende, 4 Format/Dauer/Hilfsmittel, 5 Alt-/Musterprüfungen, 6 Literatur, 7 Widersprüche und offene Fragen, 8 Quellen.
Gliederung ANALYSE.md: Materialinventar → Prüfungsteile mit Punkten und Format → Aufgabentypen/Schablonen → Gap-Analyse gegen vorhandene Skripte → Rework-/Kapitelplan-Vorschlag → offene Fragen.
Antworte am Ende mit einer Zusammenfassung (≤ 30 Zeilen): Kernergebnisse, Unsicheres, offene Fragen.
~~~~~

### 11.3 Prompt W: ein Kapitel schreiben (P3, P4)

~~~~~text
Du schreibst EIN Kapitel eines interaktiven Lernkurses (komplett Deutsch). Lernende sind Erwachsene, die den Stoff von Grund auf und ALLEIN lernen.
Maßstab: Nach dem Lesen bleibt keine einzige offene Frage. Alles kognitiv Fordernde wird mit Liebe, Geduld und Genauigkeit in kleinen Schritten erklärt.

Arbeitsverzeichnis: lernen/ des Klons. Kurs: {kurs-id}. Kapitel {NN}, Slug {slug}, Aufgaben-id-Präfix {praefix}, Kurstyp {M|P|T}.
Deine Zeile im Kapitelplan: {Zeile aus PLAN.md}. Lokales Material: {Pfade zu den passenden Folien/Blättern/Altklausuren}.

PFLICHTLEKTÜRE (vollständig, vor dem Schreiben):
1. lernen/content/ANLEITUNG-NEUE-KURSE.md Abschnitte 0, 6, 7, 8
2. lernen/content/AUTHORING.md, lernen/content/SPRACHE.md, lernen/content/QUALITAET.md Abschnitt A, lernen/content/WIDGETS.md
3. lernen/content/{kurs-id}/PLAN.md, RECHERCHE.md (und ANALYSE.md), kurs.yaml; die Überschriften der Nachbarkapitel (für Verweise)
4. Zwei fertige Vorbildkapitel (Anleitung Abschnitt 1.3) samt Trainingsdatei

DEINE DATEIEN (nur diese): lernen/content/{kurs-id}/kapitel/{NN}-{slug}.md und lernen/content/{kurs-id}/training/{slug}.ts.
Plattformwünsche: anhängen an lernen/content/{kurs-id}/WUENSCHE.md (mit Kapitelnummer). Nichts anderes ändern.

FERTIG HEISST:
- `npm run lernen:pruefen -- {kurs-id} {NN} --qualitaet` meldet 0 Fehler, 0 Warnungen, 0 offene Qualitätskriterien (der Validator führt bei Java-Aufgaben echtes Java aus).
- Jede Stelle erfüllt SPRACHE.md. Lies das fertige Kapitel am Ende einmal komplett als Anfänger und repariere jede Stelle, an der man stocken könnte.
- Jede Zahl (Fließtext, Beispiele, Hinweise, Lösungsschritte, Fehlerbild-Meldungen, Karten) ist UNABHÄNGIG nachgerechnet (python3 mit fractions/math; bei Java: javac/java).

KAPITELAUFBAU: Einleitung (Wozu? Prüfungsbezug; :::vorwissen; Eingangsdiagnose aus 5–8 art:check-Aufgaben mit Link zum Herkunftsabschnitt) → Lernabschnitte (je ## = eine Lektionsseite,
900–2000 Wörter plus Aufgaben) → „Gemischte Wiederholung“ (≥ 8 Aufgaben, ≥ 4 aus früheren Kapiteln, ≥ 2 „Welches Verfahren passt?“) → „Prüfungsaufgaben“ (≥ 5 mit punkte, mehrteilig, Zeitrichtwert)
→ „Zusammenfassung“ (reflexion + :::zusammenfassung + Fehlerkatalog „Die häufigsten Fehler“ ≥ 8, jeder mit Link auf die Aufgabe, die ihn übt, + Lernziel-Selbstcheck) → „Mündliche Prüfung“ (12–20 Karten mit id und kernpunkte).

JEDER LERNABSCHNITT: Vorwissens-Check; ≥ 2 Beispiele mit Zwischenschritten; zu jeder Definition ein Beispiel UND ein Nichtbeispiel; ≥ 2 :::achtung mit konkreter Fehlrechnung; Merke-Rezept NACH den Beispielen;
≥ 1 geführte Aufgabe (gefuehrt, ≥ 4 Schritte); ≥ 6 Übungen (Niveau 1/2/3 mindestens 2/2/1) in ≥ 3 Formaten; Fehlerbilder bei ≥ 50 % der Antwortfelder (bei Gewicht 3: ≥ 70 %);
≥ 1 reflexion; Plot/Widget mit beschriftung, wo es hilft (Widget nur mit Vorhersagefrage davor); höchstens 350 Wörter Fließtext ohne aktives Element.
Hinweise gestuft (Niveau 1: ≥ 1; Niveau 2/3: ≥ 2; letzter nennt den Ansatz, nie das Ergebnis). Lösungsweg ≥ 3 Schritte: Ansatz+Warum, … , Probe/Antwortsatz.
Jede Übung trägt lernziel (Index) und möglichst kompetenz. Übungen verwenden NIE Terme, Datensätze oder Zahlenkontexte der Beispiele. Trainingsgeneratoren: ≥ 10 (bei Gewicht 3 ≥ 3 auf Niveau 2/3).
Lektionen werden nie mit „oben/unten/weiter vorne“ referenziert, sondern als Link [N.M Voller Titel](/lernen/{kurs-id}/<kapitel-slug>/<lektions-id>).

QUELLEN UND PRÜFUNGSNÄHE: Baue Aufgaben aus dem Material NACH (neue Zahlen, Namen, Texte, Testdaten, Optionen; `quelle: nach … (abgewandelt)`), kopiere nichts. Originale Musterprüfungsaufgaben
bleiben den Simulationen vorbehalten. Behauptungen über Format, Punkte, Häufigkeit oder Verhalten von Prüfenden NUR mit Beleg im Material; sonst weglassen oder als [unsicher] kennzeichnen.

TYPSPEZIFISCH: {M: Beweise im Text, Plots für Skizzen, mathjs-Ausdrücke in loesung | P: Java-Aufgabentypen (AUTHORING 4a) gegen echtes JDK; jede Compilermeldung und Beispielausgabe selbst ausführen; code-Aufgaben mit Mutationstest | T: Fallbeispiele, auswahl/richtigfalsch/text, keine Rechnungen erzwingen}.

TYPISCHE FEHLER VON AUTOREN (vermeiden; Details in Anleitung Abschnitt 8): Fehlerbild-Wert passt nicht zur Meldung; Fehlerbild ist zufällig die richtige Antwort (Toleranz 0,5 %, Sonderfälle der Generatoren);
richtige gerundete Antwort wird abgelehnt; Zahlen in Prosa falsch; unrealistische Werte; absolute „nur/nie/immer“-Aussagen; Widget-Arbeitsaufträge, die das Widget nicht kann; Beinahe-Kopien von Originalen (auch Testdaten);
Links nur auf Kapitelebene oder mit falscher Nummer; Begriff vor Erklärung; unbelegte Prüfungsbehauptungen; YAML-Fallen (Text mit ": " oder führendem Anführungszeichen NIE ungequotet, immer |-Blöcke).

ARBEITSWEISE: Baue das Kapitel in Teilen in einem Arbeitsordner AUSSERHALB von content/ (z. B. ~/kursarbeit/{kurs-id}/{NN}/). Lege die Kapiteldatei erst ab, wenn alle Teile fertig sind,
und validiere sie dann sofort (der Validator liest nur content/); repariere, bis er 0 Fehler meldet. Gibt es die Datei schon, sichere vorher das Original im Arbeitsordner.
Nie eine halbfertige Datei in content/ liegen lassen. Skripte, die Text per regulärem Ausdruck ersetzen, danach per diff gegen die Sicherung prüfen. Keine Dev-Server, keine Installationen, kein `npm run lernen:index`.
Validiere nur dein Kapitel (Nummernfilter), nicht den ganzen Kurs.

ANTWORT AM ENDE (≤ 25 Zeilen): Validator-Zeile; Anzahl Abschnitte/Aufgaben/geführte Aufgaben/Fehlerbilder/Karten/Generatoren; welche Original-Aufgaben du nachgebaut hast; was du nachgerechnet hast;
unsichere oder unbelegte Stellen; was du NICHT gelesen oder geprüft hast (ehrlich).
~~~~~

### 11.4 Prompt S: Prüfungssimulationen und Formelsammlung (P5)

~~~~~text
Du schreibst KEINE Kapitel, sondern Prüfungsmaterial für den Kurs {kurs-id}: DEINE DATEIEN (nur diese): lernen/content/{kurs-id}/pruefungen/*.yaml und lernen/content/{kurs-id}/formelsammlung.md.

Lies zuerst: lernen/content/ANLEITUNG-NEUE-KURSE.md (Abschnitte 0, 6, 7, 8), AUTHORING.md Abschnitt 7, SPRACHE.md, lernen/content/{kurs-id}/PLAN.md, RECHERCHE.md, ANALYSE.md und das Originalmaterial {Pfade}.

1. Nachbauten der echten Musterprüfungen/Tests (art: original): möglichst originalgetreu in Struktur, Teilaufgaben, Punkten und Zeit, aber mit eigenen Formulierungen
   (Zahlen dürfen hier dem Original folgen – diese Zahlen kommen in KEINEM Kapitel vor).
2. Mindestens {6} selbst erstellte Simulationen (art: simulation), die zusammen den GANZEN Stoff aus PLAN.md abdecken, im Niveau der Originale, mit Anwendungsbezug und realistischen Werten.
   Jede Aufgabe hat mehrere teile (automatisch prüfbar, text für Skizzen/Begründungen), Hinweise und einen Lösungsweg mit ---Schritten, punkte, dauer_minuten.
3. formelsammlung.md: kompakt und vollständig, nach Kapiteln gegliedert (## je Kapitel), Markdown+KaTeX, ohne Frontmatter, mit dem Hinweis, was in der in der Prüfung erlaubten Formelsammlung steht und was man auswendig können muss (nur mit Beleg; sonst „nicht veröffentlicht“).
Aufgaben-ids kursweit eindeutig mit eigenem Präfix je Simulation (z. B. sim1-, sim2-). Jede Zahl unabhängig nachrechnen. Behauptungen zur Prüfung nur mit Beleg.
Validierung: `npm run lernen:pruefen -- {kurs-id}` (Prüfungen und Formelsammlung werden nur ohne Kapitelfilter geprüft; Fehler anderer Dateien ignorieren, deine müssen ✓ sein).
Links in pruefungen/*.yaml prüft der Validator nicht: Vergleiche jede Lektions-ID selbst mit der Überschrift im Zielkapitel (Anleitung Abschnitt 6.5).
ANTWORT (≤ 15 Zeilen): Liste der Prüfungen mit Themenabdeckung, Validator-Ergebnis, offene Punkte.
~~~~~

### 11.5 Prompt R: unabhängiger Review eines Kapitels (P6)

~~~~~text
Du bist NICHT der Autor dieses Kapitels. Du prüfst es so, wie es ein lernender Erwachsener erlebt, der alles vergessen hat und ALLEIN lernt, und so streng wie ein Fachlektor.
Der Nutzer verlangt: „alles so erklären, dass keine einzige Unklarheit übrig bleibt; Sprache ohne kontextloses Fachchinesisch“.

Arbeitsverzeichnis: lernen/. Kurs {kurs-id}, Kapitel {NN}: lernen/content/{kurs-id}/kapitel/{NN}-{slug}.md (Training: lernen/content/{kurs-id}/training/{slug}.ts).
Originalmaterial für den Kopienvergleich: {Pfade}. Validierung: npm run lernen:pruefen -- {kurs-id} {NN} --qualitaet (muss am Ende 0 Fehler, 0 Warnungen, 0 offene Qualitätskriterien melden).

PFLICHTLEKTÜRE: lernen/content/ANLEITUNG-NEUE-KURSE.md Abschnitte 6, 7, 8 und 9.3; SPRACHE.md; QUALITAET.md Abschnitt A; AUTHORING.md (Format). Dann das Kapitel VOLLSTÄNDIG in Leserichtung, Lektion für Lektion, und den ganzen Generator.

PRÜFE (alles, nicht Stichproben):
A. Verständlichkeit: Begriff/Symbol/Kürzel vor seiner Erklärung oder nie erklärt (auch in Hinweisen, Lösungsschritten, Fehlerbild-Meldungen, Karten, Kästen); Rechenschritt ohne „warum“; Sprünge im Gedankengang; Verweise wie „oben“, „wie vorhin“;
   Formel-Kurzschrift als Satzteil; Abkürzungen („bzw.“, „d. h.“); mehrdeutige Aufgaben (Rundung, Einheit, Form, Reihenfolge); herablassender oder floskelhafter Ton.
B. Fachliche Richtigkeit: jede Zahl in Text, Beispielen, Kästen, Hinweisen, Lösungsschritten, Fehlerbild-Meldungen, Karten unabhängig nachrechnen (python3; bei Java mit echtem JDK); Definitionen und Sätze (Voraussetzungen genannt?); Vorzeichen, Einheiten, Rundungen;
   absolute Aussagen („nur“, „nie“, „immer“, „genau dann“) und Allaussagen mit Randfällen; Realismus von Werten; Plots und Widget-Props gegen den Text; Antworten bei auswahl (richtige Option richtig, Distraktoren falsch).
   FEHLERBILDER: Passt der wert jedes Fehlerbilds zur meldung (führt genau dieser Fehler rechnerisch zu diesem Wert)? Ist kein Fehlerbild zufällig die richtige Antwort – auch in Sonderfällen der Generatoren (a = b, Winkel 45°/60°/90°, Wert 0, bereits sortiert)?
   Toleranz: Wird die in der Angabe verlangte gerundete Lösung akzeptiert, und wird ein Fehlerbild in der Nähe NICHT akzeptiert?
C. Didaktik (je Lektion): Aufgabenfolge leicht → schwer? Beispiel und Übung wirklich verschieden (keine Dubletten)? Lösungsweg erklärt „was und warum“? Geführte Aufgabe wirklich geführt (ein Wert pro Schritt)? Verrät die Angabe die Lösung?
D. Links: Jeder Link führt zu einer passenden Lektion mit richtiger Nummer und vollem Titel im Linktext (Nummer = Position der ## im Zielkapitel). Keine Kapitel-Links/#anker, wo eine Lektion gemeint ist.
E. Nachbauten: Vergleiche jede Aufgabe mit `quelle:` gegen das Original: keine gleichen Zahlen, Wörter, Testdaten, Methodennamen, Optionen.
F. Behauptungen über Prüfung, Vorlesung, Häufigkeit, Punkte: Beleg im Material? Sonst streichen oder als [unsicher] kennzeichnen.
G. Widgets: Der Arbeitsauftrag ist mit dem Widget wirklich ausführbar (lies den Quelltext in components/lernen/widgets/**: Regler, Knöpfe, Achsenbereich, Rasterung).
{JAVA, nur Java-Kurse: H. Führe jede Ausgabe in :::beispiel-Kästen und Fließtext mit javac/java (JDK 21) aus. Reproduziere jede behauptete Compiler-/Laufzeitmeldung im exakten Wortlaut (javac meldet manchmal nur den ersten Fehler).
   Schreibe für ~10 code-Aufgaben 2–3 typisch falsche Lösungen und prüfe, dass die Tests sie ablehnen (Mutationstest). Vergleiche die Aufgaben mit den Original-Tests (Testdaten!).}

VORGEHEN: Arbeitsnotizen und Kopien des Originalzustands in einem Ordner außerhalb von content/. BEHEBE jeden Fund selbst in der Kapiteldatei (kleine, gezielte Edits; Sprache nach SPRACHE.md). Ändere keine Aufgaben-IDs. Wenn du Zahlen änderst, rechne neu und halte
Hinweise, Lösungsweg, anzeige, Fehlerbilder und Karten konsistent. Ändere nichts, was du nicht belegen kannst: Unsicheres meldest du. Nach den Edits `--qualitaet` erneut (Reparaturen lösen oft Q-A12/Q-S2 aus).
Regex-Ersetzungen danach per diff prüfen.

ANTWORT AM ENDE (≤ 25 Zeilen): Funde je Kategorie A/B/C/D/E/F/G (davon behoben); die drei schwersten Funde mit Ort; unbelegte Stellen, die du nicht geändert hast; Validator-Zeile danach; ehrlich, welche Teile du nicht gelesen hast.
~~~~~

---

## 12. Anhang A: Vorlagen (vom Validator geprüft)

Diese vier Dateien bilden einen kleinen, **lauffähigen** Kurs. Der Validator meldet für sie `0 Fehler, 0 Warnungen`
(Stand 15.10.2026). Mit `--qualitaet` meldet er erwartungsgemäß Q-Warnungen für **Mengen** (zu wenig Aufgaben, Karten, Wörter): Die Vorlage zeigt die
**Syntax**, nicht die Zielmenge. Ersetze `vorlage`/`vl-` durch deinen Kapitel-Slug bzw. Präfix und `zz-test` (in `kurs.yaml` und in
allen Links) durch deine KURS-ID. Wenn du die Vorlage ausprobierst,
lege sie in einem eigenen Ordner `content/zz-test/` an, validiere mit `npm run lernen:pruefen -- zz-test` und **lösche sie vor dem Einreichen**.

### A.1 `content/<kurs>/kurs.yaml`

~~~~~yaml
id: zz-test
titel: Beispielkurs (Vorlage)
untertitel: Universität · Semester · Kompetenzstufe oder Prüfungsart
# lva: "123.456"   # LVA-Nummer wie in TISS: verbindet den Kurs mit der Fächer-Seite (P7); bei SBP-Kursen stattdessen sbp: <id>
teile:
  A: Grundlagen
  B: Aufbau
  C: Prüfungstraining
pruefung:
  form: schriftlich, danach mündlich
  dauer_minuten: 90
  datum: "2027-02-26"
  hilfsmittel: 'Was laut Quelle erlaubt ist (oder: nicht veröffentlicht)'
  pruefer: Wer prüft (nur aus öffentlichen Quellen)
beschreibung: |
  Was der Kurs abdeckt und wie geprüft wird, in zwei bis drei Absätzen. Unbelegtes als "nicht
  veröffentlicht" kennzeichnen.
~~~~~

### A.2 `content/<kurs>/kapitel/01-vorlage.md`

Alle Bausteine sind einmal gezeigt: Frontmatter, Einleitung mit Vorwissen und Eingangscheck, Lektion mit Definition, Beispielen, Fehlerkästen,
Merke, Tipp, Prüfungstipp, geführter Aufgabe, Textaufgabe, Reflexion, Plot, Widget mit Vorhersagefrage, Übung, Prüfungsaufgabe mit Punkten,
Zusammenfassung und Karten. Die Abschnitte „Gemischte Wiederholung“ sind hier nur als Platzhalter angedeutet.

~~~~~markdown
---
nummer: 1
titel: Vorlage Kapitel
kurz: Ein Satz, der auf der Kursübersicht steht.
teil: A
stunden: 6
pruefungsgewicht: 2
voraussetzungen: []
lernziele:
  - Eine Gleichung der Form $ax + b = c$ nach $x$ auflösen
  - Begründen, warum man bei einer Äquivalenzumformung auf beiden Seiten dasselbe tun muss
---

Einleitung: Wozu braucht man das? Was kommt in der Prüfung dazu vor? (Dieser Text steht vor der ersten
`##`-Überschrift.)

:::vorwissen
Du brauchst nur Grundrechenarten. Wie eine Gleichung aufgebaut ist, erklärt
[1.1 Gleichungen der Form ax + b = c](/lernen/zz-test/vorlage/gleichungen-der-form-ax-b-c).
:::

```aufgabe
id: vl-eingang-1
titel: Eingangscheck Rechenreihenfolge
niveau: 1
art: check
lernziel: 0
kompetenz: rechnen
angabe: Berechne $3 + 4 \cdot 2$.
teile:
  - typ: zahl
    loesung: "3 + 4*2"
    fehler:
      - wert: "14"
        meldung: Du hast von links nach rechts gerechnet. **Punkt vor Strich**, also erst $4 \cdot 2 = 8$, dann $3 + 8$.
hinweise:
  - Welche Rechenart bindet stärker?
loesung: |
  Punkt vor Strich: $4 \cdot 2 = 8$.
  ---
  Dann addieren: $3 + 8 = 11$.
```

## Gleichungen der Form ax + b = c

```aufgabe
id: vl-check-1
titel: Vorwissen zu Lektion 1
niveau: 1
art: check
lernziel: 0
kompetenz: verstehen
angabe: Was ist die Umkehrung von "plus 5"?
teile:
  - typ: auswahl
    optionen: ["minus 5", "mal 5", "geteilt durch 5"]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: |
          "Mal 5" macht nicht rückgängig, was "plus 5" getan hat.
hinweise:
  - Was musst du tun, um wieder bei der Ausgangszahl zu landen?
loesung: |
  Plus 5 wird durch minus 5 rückgängig gemacht.
  ---
  Darum wählst du "minus 5".
```

Eine **Äquivalenzumformung** ist ein Rechenschritt, der die Lösungen einer Gleichung nicht ändert (Alltag:
eine Waage, auf deren beiden Seiten man dasselbe tut).

:::definition[Lineare Gleichung]
Eine Gleichung der Form $ax + b = c$ mit Zahlen $a \neq 0$, $b$, $c$ heißt lineare Gleichung in $x$.
Dabei ist $x$ die gesuchte Zahl.
:::

:::beispiel[Zahlenbeispiel]
Löse $2x + 3 = 11$. Wir ziehen auf beiden Seiten $3$ ab, damit links nur noch $2x$ steht: $2x = 8$.
Dann teilen wir beide Seiten durch $2$: $x = 4$. Probe: $2 \cdot 4 + 3 = 11$ stimmt.
:::

:::beispiel[Zweites Beispiel]
Löse $5x - 2 = 13$. Wir addieren $2$: $5x = 15$. Teilen durch $5$: $x = 3$. Probe: $5 \cdot 3 - 2 = 13$.
:::

:::achtung[Typischer Fehler]
Falsch: $2x + 3 = 11 \Rightarrow 2x = 11 + 3 = 14$. Richtig ist $2x = 11 - 3 = 8$, weil man $3$ abziehen muss.
:::

:::achtung[Noch ein typischer Fehler]
Falsch: $2x = 8 \Rightarrow x = 8 \cdot 2 = 16$. Richtig ist $x = 8 : 2 = 4$.
:::

:::merke
Rezept: erst die Zahl ohne $x$ auf die andere Seite bringen, dann durch den Faktor vor $x$ teilen.
:::

:::tipp
Mach immer die Probe. Setze das Ergebnis in die ursprüngliche Gleichung ein.
:::

:::pruefung[Prüfungstipp]
Schreibe jeden Umformungsschritt auf. Das Wort "weil" im Antwortsatz zeigt, dass du verstehst, was du tust.
:::

```aufgabe
id: vl-gefuehrt-1
titel: Geführt lösen
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Löse $3x + 5 = 20$ in kleinen Schritten.
teile:
  - typ: zahl
    label: '$x$'
    loesung: "(20-5)/3"
    fehler:
      - wert: "25/3"
        meldung: Du hast $5$ addiert statt abgezogen. Die Umkehrung von "plus 5" ist "minus 5".
gefuehrt:
  - text: Welche Zahl ziehst du auf beiden Seiten ab, damit links nur noch $3x$ steht?
    teil: { typ: zahl, loesung: "5" }
    erklaerung: |
      Links steht $3x + 5$. Ziehst du $5$ ab, bleibt $3x$ übrig.
  - text: Was steht rechts, nachdem du $5$ abgezogen hast?
    teil: { typ: zahl, loesung: "20-5" }
    erklaerung: |
      $20 - 5 = 15$.
  - text: Überlege, durch welche Zahl du jetzt teilen musst, damit $x$ allein steht.
    erklaerung: |
      Durch den Faktor vor $x$, also durch $3$.
  - text: Jetzt durch $3$ teilen.
    teil: { typ: zahl, loesung: "15/3" }
    erklaerung: |
      $15 : 3 = 5$.
hinweise:
  - Ziehe zuerst $5$ auf beiden Seiten ab.
loesung: |
  Ansatz: Wir wollen $x$ allein stellen. Zuerst $5$ abziehen: $3x = 15$.
  ---
  Dann durch $3$ teilen: $x = 5$.
  ---
  Probe: $3 \cdot 5 + 5 = 20$ stimmt.
```

```aufgabe
id: vl-text-1
titel: Begründen
niveau: 2
lernziel: 1
kompetenz: begruenden
angabe: Warum muss man bei einer Äquivalenzumformung auf beiden Seiten dasselbe tun?
teile:
  - typ: text
    muster: Weil die Gleichung sonst nicht mehr dieselben Lösungen hat. Wie bei einer Waage bleibt das Gleichgewicht nur, wenn man beiden Seiten dasselbe zufügt oder wegnimmt.
hinweise:
  - Denk an eine Waage.
  - Was passiert, wenn du nur links $3$ abziehst?
loesung: |
  Eine Gleichung sagt, dass links und rechts gleich viel steht.
  ---
  Ändert man nur eine Seite, ist die Gleichheit zerstört.
  ---
  Darum: auf beiden Seiten dasselbe tun.
```

```reflexion
frage: Warum darf man bei $ax + b = c$ durch $a$ teilen, aber nicht, wenn $a = 0$ ist?
antwort: |
  Durch $0$ zu teilen ist nicht definiert. Für $a = 0$ hat die Gleichung gar kein $x$ mehr.
```

```plot
x: [-1, 6]
y: [-2, 12]
achsen: { x: "x", y: "y" }
graphen:
  - { f: "2*x + 3", label: "2x + 3", farbe: 0 }
  - { f: "11", label: "11", farbe: 1, gestrichelt: true }
punkte:
  - { x: 4, y: 11, label: "Lösung x = 4" }
beschriftung: Die Gerade 2x + 3 schneidet die waagrechte Gerade bei 11 im Punkt (4 | 11).
```

```aufgabe
id: vl-widget-vorher
titel: Vorhersage vor dem Widget
niveau: 1
art: check
lernziel: 0
kompetenz: verstehen
angabe: Was passiert mit der Geraden $y = ax$, wenn du $a$ vergrößerst?
teile:
  - typ: auswahl
    optionen: ["Sie wird steiler.", "Sie wird flacher.", "Sie bleibt gleich."]
    richtig: [0]
    fehler:
      - wert: 1
        meldung: Ein größeres $a$ heißt, dass $y$ für dasselbe $x$ größer wird. Das ist steiler, nicht flacher.
hinweise:
  - Setze $x = 1$ ein und vergleiche $a = 1$ mit $a = 3$.
loesung: |
  Für $x = 1$ ist $y = a$.
  ---
  Ein größeres $a$ gibt einen größeren Höhenunterschied, also eine steilere Gerade.
```

```widget
name: parameter
titel: Steigung verändern
props: { f: "a*x + b", parameter: [{ name: a, min: -3, max: 3, step: 0.5, wert: 1 }, { name: b, min: -3, max: 3, step: 0.5, wert: 0 }] }
```

```aufgabe
id: vl-ueb-1
titel: Einfache Gleichung
niveau: 1
lernziel: 0
kompetenz: rechnen
angabe: Löse $4x - 6 = 10$. Gib $x$ an.
teile:
  - typ: zahl
    label: '$x$'
    loesung: "(10+6)/4"
    fehler:
      - wert: "1"
        meldung: Du hast $6$ abgezogen statt addiert. Die Umkehrung von "minus 6" ist "plus 6".
hinweise:
  - Bringe zuerst die Zahl ohne $x$ auf die andere Seite.
loesung: |
  Ansatz: erst $6$ addieren: $4x = 16$.
  ---
  Dann durch $4$ teilen: $x = 4$.
  ---
  Probe: $4 \cdot 4 - 6 = 10$ stimmt.
```

## Gemischte Wiederholung

(Mindestens 8 Aufgaben, davon mindestens 4 aus früheren Kapiteln und 2 "Welches Verfahren passt?".)

## Prüfungsaufgaben

```aufgabe
id: vl-pruef-1
titel: Mehrteilige Prüfungsaufgabe
niveau: 3
lernziel: 0
kompetenz: modellieren
punkte: 6
quelle: nach öffentlicher Musterprüfung (abgewandelt)
angabe: |
  Ein Taxi kostet $3{,}50$ Euro Grundgebühr plus $1{,}80$ Euro pro Kilometer.

  **a)** (3 P.) Wie viele Kilometer fährt man für $21{,}50$ Euro?

  **b)** (3 P.) Begründen Sie, warum der Preis nicht proportional zur Strecke ist.
teile:
  - typ: zahl
    label: 'a) Kilometer'
    loesung: "(21.5-3.5)/1.8"
    einheit: km
  - typ: text
    label: b) Begründung
    muster: Bei $0$ Kilometern zahlt man schon $3{,}50$ Euro. Bei proportionalen Größen wäre der Preis dort $0$.
hinweise:
  - Setze Gesamtpreis = Grundgebühr + Preis pro km mal Strecke an.
  - Löse die Gleichung nach der Strecke auf.
loesung: |
  Ansatz: $3{,}50 + 1{,}80 \cdot s = 21{,}50$.
  ---
  Umformen: $1{,}80 \cdot s = 18$, also $s = 10$.
  ---
  Probe: $3{,}50 + 18 = 21{,}50$ stimmt. Antwort: 10 Kilometer.
```

## Zusammenfassung

```reflexion
frage: Schreib zuerst selbst die 3 wichtigsten Aussagen dieses Kapitels auf.
antwort: |
  1. Eine Äquivalenzumformung ändert die Lösungen nicht. 2. Man tut auf beiden Seiten dasselbe. 3. Die Probe prüft das Ergebnis.
```

:::zusammenfassung
- Lineare Gleichungen löst man mit Äquivalenzumformungen.
- Erst die Zahl ohne $x$ auf die andere Seite, dann durch den Faktor vor $x$ teilen.
- Die Probe zeigt, ob das Ergebnis stimmt.
:::

## Mündliche Prüfung

```karten
- id: vl-k-aequivalenz
  frage: Was ist eine Äquivalenzumformung?
  antwort: |
    Ein Rechenschritt, der die Lösungen einer Gleichung nicht ändert, zum Beispiel auf beiden Seiten dasselbe zu addieren.
  kernpunkte:
    - ändert die Lösungsmenge nicht
    - auf beiden Seiten dasselbe
```
~~~~~

### A.3 `content/<kurs>/training/vorlage.ts`

~~~~~ts
import { drill, tz, type Drill } from "@/lib/lernen/training";

export const DRILLS: Drill[] = [
  drill({
    id: "vl-d-linear",
    kapitel: "vorlage",
    titel: "Lineare Gleichung lösen",
    niveau: 1,
    erzeuge: (r) => {
      const a = r.int(2, 9);
      const x = r.int(-9, 9);
      const b = r.intOhne0(-12, 12);
      const c = a * x + b;
      // Sonderfälle: Fehlerbild "falsches Vorzeichen" nur, wenn es sich vom richtigen Wert unterscheidet
      const falsch = (c + b) / a;
      const fehler = Math.abs(falsch - x) > 0.01 ? [{ wert: String(falsch), meldung: "Du hast $b$ mit falschem Vorzeichen auf die andere Seite gebracht." }] : [];
      return {
        angabe: `Löse $${a}x ${b < 0 ? "-" : "+"} ${Math.abs(b)} = ${c}$.`,
        teile: [{ typ: "zahl", label: "$x$", loesung: `(${c}-(${b}))/${a}`, fehler }],
        loesung: `Zuerst ${b < 0 ? "addieren" : "abziehen"} wir ${Math.abs(b)}: $${a}x = ${tz(c - b)}$.\n---\nDann teilen wir durch ${a}: $x = ${tz(x)}$.`,
      };
    },
  }),
];
~~~~~

### A.4 `content/<kurs>/pruefungen/01-simulation.yaml`

~~~~~yaml
id: simulation-1
titel: Simulation 1
art: simulation
dauer_minuten: 90
hinweis: |
  Selbst erstellte Prüfung im Stil der öffentlichen Musterprüfung. Hinweise und Lösungen siehst du erst nach der Abgabe.
aufgaben:
  - id: sim1-1
    titel: Gleichung lösen
    niveau: 2
    punkte: 10
    angabe: |
      **1)** (10 P.) Lösen Sie $7x - 9 = 40$.
    teile:
      - typ: zahl
        label: '$x$'
        loesung: "(40+9)/7"
    hinweise:
      - Erst $9$ addieren.
    loesung: |
      $7x = 49$.
      ---
      $x = 7$. Probe: $7 \cdot 7 - 9 = 40$.
~~~~~

---

## 13. Anhang B: Abnahme-Checkliste

**Struktur (Validator)**
- [ ] `npm run lernen:pruefen -- <kurs> --qualitaet`: **0 Fehler, 0 Warnungen, 0 offene Qualitätskriterien** (ganzer Kurs, nicht nur ein Kapitel)
- [ ] `npm run lernen:pruefen` (alle Kurse): keine neuen Fehler durch deinen Kurs
- [ ] `npm run lernen:test`: alle bestehen
- [ ] Java-Kurs: alle Java-Prüfungen bestanden (JDK 21)
- [ ] `content/<kurs>/training/index.ts` mit `npm run lernen:index` neu erzeugt und im PR (nie von Hand geändert)

**Eingehängt (P7)**
- [ ] `kurs.yaml` hat `lva:` (oder `sbp:`), und die LVA steht in der Kursliste (`db/lernen.db`)
- [ ] `LADER`-Zeile in `components/lernen/Trainer.tsx`; `/lernen/<kurs>/training` zeigt Aufgaben
- [ ] `npm run build` erfolgreich; nach Neustart von TUWAS erscheint der Kurs im Tab „Lernen“ (bei angemeldeter LVA)

**Inhalt (Review, nicht automatisiert)**
- [ ] Jedes Kapitel wurde von einer **anderen Instanz/Person** gegengelesen (Prompt R) und alle Funde sind behoben
- [ ] Jede Zahl auch in Prosa, Hinweisen, Lösungsschritten, Fehlerbild-Meldungen und Karten ist nachgerechnet
- [ ] Jedes Fehlerbild: Wert gehört zur Meldung; kein Fehlerbild ist die richtige Antwort; Sonderfälle in Generatoren abgefangen
- [ ] Jede in der Angabe verlangte Rundung wird als richtig akzeptiert
- [ ] Keine Übung wiederholt ein Beispiel; keine Aufgabe ist eine Kopie oder Beinahe-Kopie eines Originals (inkl. Testdaten, Namen, Optionen)
- [ ] Jeder Widget-Arbeitsauftrag ist am Widget ausgeführt oder am Quelltext belegt
- [ ] Jeder Link zeigt auf die richtige **Lektion** mit Nummer und vollem Titel; keine „oben/unten“-Verweise
- [ ] Jede Aussage über Prüfung, Format, Punkte, Prüfende hat eine Quelle oder ist als „nicht veröffentlicht“/„[unsicher]“ markiert
- [ ] Werte sind realistisch (Größenordnungen geprüft); keine absoluten „nur/nie/immer“-Aussagen ohne Beleg
- [ ] Java-Kurs: alle Beispielausgaben und Compilermeldungen mit echtem JDK reproduziert; Mutationstest für die `code`-Aufgaben

**Recht und Hygiene**
- [ ] Keine Dritt-PDFs, Scans, Folien, Lösungen, Zugangsdaten, lokalen Pfade oder privaten Daten im PR
- [ ] Beim Ausprobieren nur ein Wegwerf-Protokoll benutzt (`LERNEN_JOURNAL`), nicht den eigenen Lernstand
- [ ] Quellenliste vollständig, Unsicheres benannt, Plattformwünsche in `WUENSCHE.md`
- [ ] PR-Beschreibung nach Abschnitt 10.5 ausgefüllt, beteiligte Modelle genannt

**Optional, empfohlen**
- [ ] Zwei Lektionen und fünf Aufgaben (zwei absichtlich falsch beantwortet) von einem Menschen als Lernender durchgespielt (10.6)
- [ ] Stichprobe im Browser auf Handybreite
