# Lernen

Lernbereich mit Kursinhalten für die TU Wien. Eine Seite, **Fächer** (`/lernen`), gegliedert nach Modulen:

- die Module des Bachelors Informatik (StEOP, Pflicht, Enge Wahl, Vertiefung, Freie Wahl, Bachelorarbeit, Vorkurs) mit den Lehrveranstaltungen, bei denen du angemeldet bist. Für `ep1` gibt es Kapitel, Training, Glossar, Suche und mündliche Fragen, für die übrigen Lernpfad, Quiz und Programmiertests unter `/kurse/<id>`.
- optional die **Studienberechtigungsprüfung** (SBP) als eigenes Modul mit ihren fünf Prüfungen. `mathe3` und `physik1` haben Lernkurse mit Prüfungssimulationen und Formelsammlung, das Wahlfach ist eine LVA der StEOP, die übrigen zeigen ihren Stand.

Was „angemeldet“ heißt und ob die SBP erscheint, gibt TUWAS vor (Einstellungen → Lernen): Die Hostapp schreibt `{"lvas": ["185.A91", …], "sbp": true}` in die Datei, auf die `TUWAS_ANGEMELDET` zeigt, und aktualisiert sie bei jeder Änderung. Ohne diese Variable zeigt die Seite alle Lehrveranstaltungen mit Lernpfad und die SBP.

`/` leitet auf `/lernen` weiter.

## Voraussetzungen

- Node.js 22 und npm
- Für Code-Aufgaben: ein JDK 21 (`java`, `javac`) unter Linux (der Runner nutzt `unshare`, `prlimit` und `timeout`)

## Starten

```sh
npm install
npm run dev        # http://localhost:3000
```

Für korrekte Vorschaubilder beim Teilen setzt du die öffentliche Adresse (sonst gilt `http://localhost:3000`):

```sh
NEXT_PUBLIC_SITE_URL=https://example.org npm run build
```

Mit Code-Aufgaben (siehe Abschnitt Sicherheit; TUWAS selbst schaltet den Runner beim Start der App ein, `EP1_JAVA_RUNNER=0` schaltet ihn dort aus):

```sh
EP1_JAVA_RUNNER=1 npm run dev
```

## Befehle

| Befehl | Zweck |
|---|---|
| `npm run dev` / `build` / `start` | Entwicklungsserver, Produktions-Build, Produktionsserver |
| `npm run lint` | ESLint |
| `npm run lernen:pruefen [-- <fach> [NN]] [--qualitaet]` | Validiert Kursinhalte: Schema, Musterlösungen, Formeln, Generatoren |
| `npm run lernen:test` | Unit-Tests der Lernlogik |
| `npm run lernen:test:java` | Tests des Java-Runners (braucht JDK) |
| `npm run lernen:ablauf` | Vergleicht die Ablauf-Engine mit den in `content/` hinterlegten Java-Ausgaben (alle `ausgabe`-Aufgaben, main-, Ausgabe- und Wert-Tests der Musterlösungen) und bei `zeichnung: true`-Tests die Formenliste mit dem Java-Lauf des Fake-CodeDraw (braucht ein JDK; Zeile „code: Zeichnungs-Tests“, Ziel 100 %); Exit-Code 1 bei Abweichung |
| `npm run lernen:lektion-ablauf -- <kurs> [NN …] [--liste]` | Prüft jeden Java-Block in Kapitel- und Lösungstexten, der „Ablauf ansehen“ bekommt: läuft in echtem Java (JDK) und in der Ablauf-Engine mit gleicher Ausgabe; Exit-Code 1 bei Abweichung |
| `npm run lernen:index` | Erzeugt `content/<fach>/training/index.ts` (läuft vor `dev` und `build` automatisch) |
| `npm run inhalt:exportieren [-- <datei>]` | Erzeugt aus `db/lernen.db` das Inhaltspaket `dist/lernen-inhalt.db` für ein Release |
| `npm run inhalt:test` | Tests des Inhalts-Updaters (Einspielen, Prüfung, Download) |
| `npm run db:migrate` | Wendet die Migrationen auf `db/lernen.db` an |
| `npm run db:backup` | Sichert die Datenbank nach `db/backups/` |
| `npm run db:generate` / `db:studio` | Drizzle-Migration erzeugen / Datenbank im Browser ansehen |

## Aufbau

```
app/          Seiten und API-Routen (Next.js App Router)
components/   UI; components/lernen/ für den Fächer-Bereich samt Widgets
lib/          Logik: lernen/ (Parser, Bewertung, Java-Runner), db/ (Schema, Abfragen), inhalt/ (Inhalts-Updater)
content/      Kursinhalte je Fach: kurs.yaml, kapitel/*.md, training/*.ts, pruefungen/*.yaml
db/           SQLite-Datei lernen.db und Migrationen
scripts/      Validator, Index-Erzeugung, Migration, Datenbank-Sicherung
```

Einen neuen Kurs anlegen (Ablauf, benötigtes Material, Prompts für Claude Code, Einhängen in die App):
[`content/ANLEITUNG-NEUE-KURSE.md`](content/ANLEITUNG-NEUE-KURSE.md).

Kursinhalte schreiben und prüfen: [`content/AUTHORING.md`](content/AUTHORING.md) (Format),
[`content/QUALITAET.md`](content/QUALITAET.md) (didaktische Rubrik), [`content/SPRACHE.md`](content/SPRACHE.md)
(Sprachleitfaden), [`content/WIDGETS.md`](content/WIDGETS.md) (Widget-Optionen).

## Daten

**Lernstand:** Alles Persönliche liegt in **einer** Datei außerhalb des Projekts, `lernstand.jsonl`:

| System | Ort |
|---|---|
| Linux | `$XDG_DATA_HOME/TUWAS/lernen/lernstand.jsonl` (sonst `~/.local/share/tuwas/lernen/lernstand.jsonl`) |
| Windows | `%APPDATA%\tuwas\lernen\lernstand.jsonl` |
| macOS | `~/Library/Application Support/tuwas/lernen/lernstand.jsonl` |

`LERNEN_JOURNAL` (absoluter Dateipfad) legt einen anderen Ort fest. Die Datei ist ein Protokoll: eine Zeile je Ereignis
(gelöste Aufgabe, gelesene Lektion, Karte, Prüfungsversuch, Lernpfad, Quiz, Programmiertest, Begriff, Kurs- und
SBP-Stand), aus denen die App den Stand berechnet. Die App hängt nur an, sie kürzt, überschreibt oder löscht die Datei nie.
Dazu legt sie einmal am Tag eine Kopie in `sicherungen/` daneben (die letzten 30 bleiben).

- **Neuer Checkout oder Inhalts-Update:** Der Lernstand bleibt, denn er liegt weder im Projekt noch in `db/lernen.db`.
- **Anderer Rechner:** Die Datei an denselben Ort kopieren. Zwei Protokolle lassen sich zusammenlegen
  (`cat alt.jsonl >> lernstand.jsonl`); jedes Ereignis hat eine id und zählt einmal.
- **Schutz vor sich selbst** (Linux, optional): `sudo chattr +a lernstand.jsonl` erlaubt nur noch Anhängen, auch dir
  (`chattr -a` hebt es auf).

Beim ersten Start übernimmt die App den alten Stand einmal ins Protokoll: die JSON-Dateien je Kurs aus `LERNEN_DATEN`
(ohne Eintrag `db/fortschritt/`) und die alten Nutzertabellen aus `db/lernen.db` (`kurs_stand`, `lektion_fortschritt`,
`abschnitt_fortschritt`, `quiz_ergebnisse`, `test_versuche`, `begriff_fortschritt`) sowie Status, Note und Antritte der
SBP-Prüfungen. Die alten Dateien und Tabellen bleiben unverändert liegen, werden aber nicht mehr gelesen oder geschrieben
(`lib/lernen/journal.ts`, `lib/lernen/standEreignisse.ts`, `lib/db/queries/kurs-journal.ts`).

Der Browser hält den zuletzt geladenen Stand und eine Warteschlange noch nicht gesendeter Ereignisse im `localStorage`;
ohne Server bleibt sie dort und geht beim nächsten Mal raus (`lib/lernen/fortschrittSync.ts`).

**Inhalt:** `db/lernen.db` (SQLite, Drizzle) enthält nur noch Inhalt: Kurse, Lernpfad-Lektionen, Quizfragen,
Programmiertests, Lernthemen, SBP-Prüfungen und Begriffe. Er kommt aus einem Inhaltspaket und lässt sich aktualisieren
(siehe unten). Das Schema steht in `lib/db/schema.ts`, die Migrationen in `db/migrations/`.

Die Kapitel-Übersichten (Titel, Aufgaben- und Karten-Ids) merkt sich die App je Kurs in `db/cache/` (`LERNEN_CACHE`), damit ein
Neustart nicht alle Kapitel neu einlesen muss. Ändert sich ein Kapitel, wird der Eintrag von selbst neu gebaut; der Ordner
lässt sich jederzeit löschen.

## Inhalte aktualisieren

Am Ende der Seite **Fächer** steht unter „Inhalte“ der Stand und der Knopf **Nach Updates suchen**. Gibt es ein neueres Release,
erscheint **Jetzt aktualisieren**. Der Knopf

1. fragt das neueste Release des Repositories aus `LERNEN_INHALT_REPO` ab (`name/repo`, ohne Eintrag ist er aus),
2. lädt die Datei `lernen-inhalt.db` und prüft Größe und SHA-256 gegen die Prüfsumme, die GitHub zum Release-Asset führt,
3. prüft das Paket (Format, Tabellen und Spalten wie in dieser App, keine Views oder Trigger),
4. sichert die Datenbank nach `db/backups/` und
5. ersetzt den Inhalt in **einer Transaktion**. Bei einem Fehler bleibt alles, wie es war.

Kurse werden aktualisiert oder ergänzt, nie gelöscht. Der Lernstand bleibt unberührt, er liegt in `lernstand.jsonl`.
Begriffe sind dort über Herkunft, Lektion, Abschnitt, Begriff und die laufende Nummer unter gleichen Begriffen
festgehalten, nicht über Zeilen-IDs, und überstehen so ein Update.

**Release veröffentlichen** (im Projekt, dessen Inhalte verteilt werden sollen):

```sh
npm run inhalt:exportieren
gh release create inhalt-2026-10-13 dist/lernen-inhalt.db --title "Inhalte 2026-10-13"
```

Vorher die Texte prüfen: Das Paket enthält Kurs-, Lernpfad- und Begriffstexte, aber nie `kurs_stand`. Ändert sich das Schema
einer Inhaltstabelle, muss `PAKET_FORMAT` in `lib/inhalt/konfig.ts` erhöht werden; Apps und Pakete mit verschiedenem Format
lehnen sich gegenseitig ab.

**Nicht abgedeckt:** Die Fächer unter `content/` (Kapitel, Training, Prüfungen) sind Dateien und zum Teil Code
(`content/<fach>/training/*.ts`). Sie ändern sich mit einer neuen App-Version, nicht über den Knopf.

## Ablaufansicht („Ablauf ansehen“)

Bei Code-Aufgaben und Java-Beispielen in Lektionen gibt es den Knopf **Ablauf ansehen**: Der Code läuft Zeile für Zeile oder Ausdruck für Ausdruck
ab, mit hervorgehobener Zeile, Variablen (Arrays als Zellen), Aufrufstapel bei Methoden und Rekursion, wachsender Konsole und einem Erklärsatz je
Schritt (←/→, Leertaste, Schieberegler, Tempo, Umschalter „Zeile für Zeile“ / „Ausdruck für Ausdruck“).

- `ausgabe`-Aufgaben: der Knopf erscheint erst nach dem ersten Prüfen, weil der Ablauf die Antwort zeigt.
- `code`-Aufgaben: „Meinen Code ablaufen sehen“ führt den aktuellen Editorinhalt mit einem sichtbaren Test aus (auch zum Fehlersuchen).
- Java-Blöcke in Lektionen und Lösungswegen, die lauffähig aussehen (`System.out`, `main`, statische Methode; Zeichnungen: mit `new CodeDraw(`, siehe unten).

**Zeichnungen (CodeDraw):** Programme mit `CodeDraw` laufen im Darsteller wie alle anderen. Daneben (schmal: unter dem Erklärsatz) steht die
**Zeichenfläche**: eine weiße Leinwand in der Größe aus `new CodeDraw(b, h)` mit genau den Formen, die bis zum aktuellen Schritt gezeichnet
und nicht durch `clear()` gelöscht sind. Neue Formen des Schritts haben einen gestrichelten Rahmen; der Erklärsatz sagt, was gezeichnet wird
(„Zeichnet ein gefülltes Rechteck: Ecke links oben bei (20, 40), 60 breit, 30 hoch, Farbe Rot.“). Im Variablenkasten erscheint ein `CodeDraw` als
`CodeDraw 400×400, Farbe Rot, Linienbreite 1` und eine `Color` mit Farbfeld. Das Fake-CodeDraw der Plattform (`lib/lernen/java/codedraw/`) ist das Orakel:
gleiche Methoden, Koordinaten, Farbwerte (`Palette`, `java.awt.Color`), Zahlenformat und Fehler (`new CodeDraw(0, 5)`, `setColor(null)`, …). Die Formen
stehen einmal in `Ablauf.formen`, jeder Schritt hat nur `zeichnung: { anzahl, ab, gezeigt }` (Länge und Löschstand des Protokolls); Hilfen in
`lib/lernen/ablauf/zeichnung.ts`. Ob ein Block den Knopf bekommt, entscheidet `siehtAusfuehrbarAus` (`components/lernen/Md.tsx`): Klassen mit `main` und
Anweisungen mit eigenem Fenster (`new CodeDraw(`), aber nicht Anweisungen mit `import`-Zeile (Dateiausschnitt), nicht Blöcke, die `CodeDraw` nennen
ohne ein Fenster anzulegen, und keine Methoden ohne Aufruf. Bei `code`-Aufgaben sind `zeichnung: true`-Tests wie jeder andere sichtbare Test wählbar.

Die Engine (`lib/lernen/ablauf/`) ist ein eigener Interpreter für die Java-Teilmenge von EP1 K1 und läuft im Browser, ohne Server und ohne JDK.
Nicht unterstützt (mit Meldung): Objekte und eigene Klassen mit `new`, Generics, Collections, `try/catch`, Lambdas, `Math.random()`, `Thread`, CodeDraw-Methoden außerhalb des Fakes (`drawImage` u. a.).
`npm run lernen:ablauf` prüft sie gegen die echten Java-Ausgaben aus `content/` und gegen die Formen des Fake-CodeDraw im echten Java-Lauf (jede Musterlösung mit `zeichnung: true`-Tests, Formenliste exakt gleich); `npm run lernen:lektion-ablauf` dasselbe für die Java-Blöcke in den Kapiteltexten (ein Block mit Knopf muss wirklich laufen); die Typen für Engine und Ansicht stehen in `lib/lernen/ablauf/typen.ts`.

## Marke

Das Logo-System (TUWAS) liegt als Vorlage in `../docs/logo`. In der App:

| Was | Wo |
|---|---|
| Logo-Komponente (Lockup, gestapelt, Balken) | `components/Logo.tsx` |
| Logo-Dateien als SVG | `public/brand/` |
| Favicon, Apple-Icon, Vorschaubild | `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png`, `app/opengraph-image.png` |
| PWA-Icons und Manifest | `public/icons/`, `app/manifest.ts` |
| Farben (TU-Blau `#006699`, Tinte `#0E1A24`, Papier `#E9E7E2`) | Token in `app/globals.css`, Hell und Dunkel |
| Schriften | Archivo (Überschriften 800, Text) und JetBrains Mono (Labels in Versalien), geladen in `app/layout.tsx` |

Die Flächen sind eckig und flach (kleine Radien, keine Schatten), wie das Logo. Die Kontraste der Textfarben
liegen auf allen Flächen bei mindestens 4,5:1.

## Sicherheit

Der Inhalts-Updater lädt nur von GitHub (Release-Datei von `github.com` oder `githubusercontent.com`) und nur aus dem
Repository in `LERNEN_INHALT_REPO`; eine Adresse aus der Oberfläche gibt es nicht. Programmiertests im Paket enthalten
Code, den der Java-Runner ausführt. Das Repository, aus dem aktualisiert wird, muss also vertrauenswürdig sein.

`POST /api/java/pruefen` kompiliert und führt eingereichten Java-Code aus. Der Endpunkt ist nur mit
`EP1_JAVA_RUNNER=1` aktiv und nimmt nur Anfragen von `localhost` an. Die Isolation besteht aus `unshare -rn`
(kein Netz), `prlimit`, `timeout` und einem eigenen Temp-Verzeichnis; es gibt **kein Dateisystem-Sandboxing**.
Das genügt für einen lokalen Betrieb mit einer Person. Vor einem Betrieb für mehrere Personen oder im Netz
braucht es einen Mount-Namespace, `bwrap` oder Container (Details in `lib/lernen/java/runner.ts`).
