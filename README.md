<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="resources/brand/logo-lockup-dark.svg">
    <img src="resources/brand/logo-lockup.svg" alt="TUWAS" height="56">
  </picture>
</p>

# TUWAS

Desktop-App fürs Studium an der TU Wien: Kalender aus TISS, Prüfungen mit Anmeldefristen, Abgaben aus TUWEL, Notizen pro Fach.
Läuft im Hintergrund weiter, mit einem kleinen Fenster oben rechts (wie die JetBrains Toolbox).

Kurz, was TUWAS kann:

- **Kalender** aus TISS mit eigenen Terminen, Überschneidungen markiert, LectureTube- und TUWEL-Links, gebuchte
  TUWEL-Termine (z. B. Abgabegespräche)
- **Abgaben & Tests** aus TUWEL, Kreuzerlübungen mit angekreuzten Beispielen, Raum bei Präsenztests,
  Ankündigungen der Kurse
- **Prüfungen**: Termine und Anmeldefristen deiner LVAs, Gruppenanmeldung, LVA-Abmeldefrist
- **Noten**: ECTS und Notendurchschnitt, Bewertungen und Feedback aus TUWEL
- **Notizen** pro Fach mit Live-Editor, eigenen Ordnern, Formeln, PDFs daneben, Bildern per Strg+V, Links zwischen Notizen, PDF-Export;
  TUWEL-Unterlagen landen von selbst im Fach-Ordner
- **Lernen**: Kursinhalte mit Aufgaben, Training und Prüfungssimulation (nur im Entwicklungsordner, siehe [Lernen](#lernen))
- Erinnerungen, Mini-Ansicht beim Symbol, hell/dunkel mit mehreren Farbschemata, Updates von selbst
  (Windows, Linux) – für Linux, Windows und macOS
Plan, Entscheidungen und Hintergründe: [PLAN.md](PLAN.md).

## Installieren

Die fertigen Dateien liegen bei jeder Version unter **[Releases](https://github.com/tu-cockpit-community/tuwas/releases/latest)**
(rechts auf der GitHub-Seite oder über den Link). Dort unter **Assets** die passende Datei herunterladen:

| System | Datei |
|---|---|
| Windows | `TUWAS-…-x64.exe` |
| macOS mit Apple-Chip (M1, M2, M3 …) | `TUWAS-…-mac-arm64.dmg` |
| macOS mit Intel-Chip | `TUWAS-…-mac-x64.dmg` |
| Linux (alle) | `TUWAS-…-x86_64.AppImage` – aktualisiert sich selbst |
| Fedora, wer lieber ein Paket will | `TUWAS-…-x86_64.rpm` |

Welchen Chip dein Mac hat, steht unter  → Über diesen Mac.

### Windows

1. `TUWAS-…-x64.exe` doppelklicken und durchklicken.
2. Windows warnt vor einer „unbekannten App“, weil TUWAS nicht signiert ist: **Weitere Informationen → Trotzdem ausführen**.
3. Das Symbol sitzt **unten rechts in der Taskleiste**, eventuell hinter dem Pfeil **^**. Am besten von dort in die
   Taskleiste ziehen, dann ist es immer sichtbar. Ein Klick öffnet die Mini-Ansicht, ein Rechtsklick das Menü.

### macOS

1. Die `.dmg` öffnen und TUWAS in **Programme** ziehen.
2. TUWAS ist nicht von Apple signiert, deshalb blockiert macOS den ersten Start:
   - TUWAS einmal öffnen; macOS meldet, dass es nicht geöffnet werden kann. Mit „Fertig“ schließen.
   - **Systemeinstellungen → Datenschutz & Sicherheit**, ganz nach unten scrollen, bei TUWAS auf **„Dennoch öffnen“**
     klicken und mit dem Passwort bestätigen.
   - Bei älteren macOS-Versionen geht auch: Rechtsklick auf TUWAS → Öffnen → Öffnen.
3. Das Symbol sitzt **oben rechts in der Menüleiste**. Ist etwas in den nächsten 24 Stunden fällig, steht die Anzahl
   daneben. Tastenkürzel heißen auf dem Mac Cmd statt Strg.
4. **Sagt macOS „TUWAS ist beschädigt“** (bei Version 0.2.0 auf Macs mit Apple-Chip): TUWAS ist nicht kaputt, nur
   nicht von Apple geprüft. TUWAS in Programme ziehen, dann im Terminal (Programme → Dienstprogramme → Terminal):
   ```sh
   xattr -cr /Applications/TUWAS.app
   codesign --force --deep --sign - /Applications/TUWAS.app
   ```
   Danach startet TUWAS normal. Ab Version 0.2.1 sollte das nicht mehr nötig sein.

### Linux (Fedora, GNOME)

1. Für das Symbol oben in der Leiste braucht GNOME die Erweiterung „AppIndicator and KStatusNotifierItem Support“.
   Im Terminal (Aktivitäten → „Terminal“):
   ```sh
   sudo dnf install gnome-shell-extension-appindicator fuse-libs
   ```
   Danach einmal ab- und wieder anmelden und die Erweiterung einschalten:
   ```sh
   gnome-extensions enable appindicatorsupport@rgcjonas.gmail.com
   ```
   (`fuse-libs` braucht das AppImage zum Starten.)
2. **AppImage:** die Datei an einen festen Ort legen, z. B. einen Ordner `~/Programme`. Rechtsklick → Eigenschaften →
   „Als Programm ausführen“ einschalten, dann mit Doppelklick starten. Nicht mehr verschieben, sonst findet der
   Autostart sie nicht (ein Start von Hand repariert das).
3. **Oder RPM:** `sudo dnf install ./TUWAS-…-x86_64.rpm` im Download-Ordner. Danach startet TUWAS aus der App-Übersicht
   oder mit `tuwas`.
4. Ein Klick aufs Symbol öffnet das Menü und gleich die Mini-Ansicht dazu. Abhaken von „Mini-Ansicht“ im Menü
   schließt sie wieder. (GNOME öffnet bei einem Klick immer das Menü, TUWAS hört mit, wann das passiert. Ein
   Doppelklick öffnet oder schließt nur die Mini-Ansicht.)

### Überall gleich

- **Erster Start:** Unter Einstellungen trägst du die TISS-Kalender-URL ein, unter Abgaben meldest du dich bei TUWEL an.
- **Zurück und vor:** Die Daumentasten der Maus (zurück/vor) und Alt+←/→ (Mac: Option) springen zwischen den Ansichten,
  die du zuletzt offen hattest – wie im Browser. In Textfeldern und im Notizeditor bleibt Alt+←/→ beim Cursor.
- **Autostart:** in der App unter Einstellungen oder im Menü des Symbols.
- **Schließen** beendet TUWAS nicht: Das Hauptfenster wird zur Mini-Ansicht beim Symbol, ein Klick daneben schickt sie
  ins Symbol (in den Einstellungen abschaltbar). Ganz beenden mit Strg+Q (Mac: Cmd+Q) oder „Beenden“ im Menü.

## Aktualisieren

TUWAS schaut alle sechs Stunden auf GitHub nach einer neuen Version. **Deine Daten bleiben bei jedem Update erhalten:**
Einstellungen, Zugänge, eigene Termine und Notizen liegen außerhalb des Programms (siehe
[Wo liegen die Daten?](#wo-liegen-die-daten)). Welche Version du hast und ob es eine neue gibt, steht unter
Einstellungen → Info → Updates. Dort steht auch die **Update-Quelle**: der Link zum GitHub-Repository, aus dessen
Releases neue Versionen kommen (Standard `https://github.com/tu-cockpit-community/tuwas`). Wer einen eigenen Fork nutzt, trägt hier
dessen Link ein.

### Windows und Linux (AppImage): von selbst

Du musst nichts tun. TUWAS lädt die neue Version im Hintergrund und installiert sie, wenn du TUWAS das nächste Mal
beendest. Eine Benachrichtigung sagt, wenn sie bereit ist. Wer nicht warten will: Einstellungen → Info → Updates →
**„Jetzt neu starten“**. Unter Windows kann dabei die Warnung „unbekannte App“ kommen: Weitere Informationen →
Trotzdem ausführen.

### macOS: von Hand, in einer Minute

Ohne kostenpflichtige Apple-Signatur darf sich TUWAS auf dem Mac nicht selbst ersetzen. TUWAS sagt dir aber Bescheid:
eine Benachrichtigung „Neue Version von TUWAS“ und unter Einstellungen → Info → Updates der Knopf **„So aktualisierst du“**.
Dann:

1. TUWAS ganz beenden: Cmd+Q oder im Menü des Symbols „Beenden“.
2. Auf der [Releases-Seite](https://github.com/tu-cockpit-community/tuwas/releases/latest) die neue `.dmg` herunterladen
   (Apple-Chip: `…-mac-arm64.dmg`, Intel: `…-mac-x64.dmg`).
3. Die `.dmg` öffnen, TUWAS in **Programme** ziehen und **„Ersetzen“** wählen.
4. TUWAS starten. Weil die neue Fassung wieder nicht signiert ist, blockiert macOS den ersten Start erneut:
   Systemeinstellungen → Datenschutz & Sicherheit → **„Dennoch öffnen“**.
5. Fertig. Autostart, Einstellungen und Zugänge bleiben, wie sie waren.

### Linux (RPM): von Hand

TUWAS sagt Bescheid wie auf dem Mac. Dann die neue `.rpm` von der Releases-Seite laden und im Download-Ordner:
```sh
sudo dnf install ./TUWAS-…-x86_64.rpm
```
Danach TUWAS beenden und neu starten. (Wer das nicht jedes Mal machen will: das AppImage aktualisiert sich selbst.)

### Von sout umsteigen

TUWAS hieß früher **sout**. Mit dem neuen Namen hat die App einen neuen Datenordner und wird als eigenes Programm
installiert; sout selbst aktualisiert sich nicht zu TUWAS. Den Umstieg machst du einmal von Hand:

1. **sout ganz beenden** (Strg+Q, Mac: Cmd+Q) und TUWAS installieren, aber noch nicht starten.
2. **Daten kopieren** (kopieren, nicht verschieben: der alte Ordner bleibt als Sicherung):
   - Linux:
     ```sh
     cp -a ~/.config/sout ~/.config/tuwas
     [ -d ~/.local/share/sout ] && mkdir -p ~/.local/share/tuwas && cp -a ~/.local/share/sout/. ~/.local/share/tuwas/
     rm -f ~/.config/tuwas/secrets.json
     ```
   - Windows (Eingabeaufforderung): `xcopy "%APPDATA%\sout" "%APPDATA%\tuwas" /E /I /H` und danach
     `del "%APPDATA%\tuwas\secrets.json"`
   - macOS:
     ```sh
     cp -a ~/Library/Application\ Support/sout ~/Library/Application\ Support/tuwas
     rm -f ~/Library/Application\ Support/tuwas/secrets.json
     ```
   Damit kommen Einstellungen, eigene Termine, Fächer, Noten und der Lernstand mit.
3. **TUWAS starten**, unter Einstellungen den **TISS-Kalender-Link** neu eintragen und dich bei **TUWEL** neu anmelden.
   Die Zugänge sind mit einem Schlüssel verschlüsselt, der am alten Namen hängt; TUWAS kann sie nicht lesen, deshalb
   löscht Schritt 2 sie. Der Notizordner bleibt, wo er ist.
4. **Autostart** in TUWAS wieder einschalten, falls du ihn genutzt hast, und **sout entfernen**: unter Windows über
   Einstellungen → Apps, am Mac `sout.app` aus Programme löschen, unter Linux das alte Paket bzw. AppImage löschen und
   `rm -f ~/.config/autostart/sout.desktop ~/.local/bin/sout ~/.local/share/applications/sout.desktop`.

## Selbst bauen

Statt die fertigen Dateien herunterzuladen, kannst du TUWAS auch selbst bauen, z. B. um den neuesten Stand vor der
nächsten Version zu haben. Das klingt schwieriger, als es ist: Du tippst ein paar Befehle in ein Terminal, den Rest
erledigt der Computer. Einmal einrichten dauert etwa 15 Minuten, danach geht jedes Update in wenigen Minuten (siehe
[Selbst gebaut aktualisieren](#selbst-gebaut-aktualisieren)).

**Was du brauchst:** [Node.js 22 (LTS)](https://nodejs.org) mit npm und [Git](https://git-scm.com). Wie du sie
installierst, steht unten beim jeweiligen System.

**Ein Terminal öffnen:**

- **Linux:** Aktivitäten → „Terminal“
- **Windows:** Start → „Eingabeaufforderung“ oder „Terminal“
- **macOS:** Programme → Dienstprogramme → „Terminal“

Befehle tippst oder kopierst du dort hinein und bestätigst jede Zeile mit Enter. Manche brauchen etwas Zeit,
dann einfach warten, bis wieder eine Eingabezeile kommt.

### Linux (Fedora, GNOME)

1. Werkzeuge installieren (fragt nach deinem Passwort):
   ```sh
   sudo dnf install nodejs git
   ```
2. Für das Symbol oben in der Leiste braucht GNOME die Erweiterung „AppIndicator and KStatusNotifierItem Support“:
   ```sh
   sudo dnf install gnome-shell-extension-appindicator
   ```
   Danach einmal ab- und wieder anmelden und die Erweiterung einschalten:
   ```sh
   gnome-extensions enable appindicatorsupport@rgcjonas.gmail.com
   ```
3. TUWAS herunterladen und vorbereiten:
   ```sh
   git clone https://github.com/tu-cockpit-community/tuwas.git
   cd tuwas
   npm install
   ```
4. Paket bauen und installieren, eines von beiden:
   - **AppImage** (eine einzelne Datei, keine Installation):
     ```sh
     sudo dnf install fuse-libs
     npm run dist:appimage
     ```
     Die Datei `dist/TUWAS-…-x86_64.AppImage` kannst du an einen festen Ort kopieren, z. B. nach `~/Programme/`.
     Starten mit Doppelklick, oder Rechtsklick → Eigenschaften → „Als Programm ausführen“ einschalten.
   - **RPM** (mit Eintrag in der App-Übersicht):
     ```sh
     sudo dnf install rpm-build
     npm run dist:linux
     sudo dnf install ./dist/TUWAS-*-x86_64.rpm
     ```
     Danach startet TUWAS aus der App-Übersicht oder mit `tuwas`.
5. Ein Klick aufs Symbol öffnet das Menü und gleich die Mini-Ansicht dazu. Abhaken von „Mini-Ansicht“ im Menü
   schließt sie wieder. (GNOME öffnet bei einem Klick immer das Menü, TUWAS hört mit, wann das passiert. Ein
   Doppelklick öffnet oder schließt nur die Mini-Ansicht.)

Ohne Paket geht es auch direkt aus dem Projektordner, siehe
[Ins System einbinden](#ins-system-einbinden-linux-aus-dem-projektordner).

### Windows

1. Werkzeuge installieren, in der Eingabeaufforderung:
   ```
   winget install OpenJS.NodeJS.LTS Git.Git
   ```
   Danach das Fenster schließen und ein **neues** öffnen (sonst kennt es die neuen Befehle noch nicht).
2. TUWAS herunterladen, vorbereiten und den Installer bauen:
   ```
   git clone https://github.com/tu-cockpit-community/tuwas.git
   cd tuwas
   npm install
   npm run dist:win
   ```
3. Im Ordner `tuwas\dist` liegt jetzt `TUWAS-…-x64.exe`. Doppelklicken und durchklicken.
4. Windows warnt beim ersten Start vor einer „unbekannten App“, weil der Installer nicht signiert ist:
   **Weitere Informationen → Trotzdem ausführen**.
5. Das Symbol sitzt **unten rechts in der Taskleiste**, eventuell hinter dem Pfeil **^**. Am besten von dort in
   die Taskleiste ziehen, dann ist es immer sichtbar. Ein Klick öffnet die Mini-Ansicht, ein Rechtsklick das Menü.

### macOS

1. Werkzeuge installieren: Node.js 22 (LTS) von [nodejs.org](https://nodejs.org) herunterladen und installieren.
   Git kommt mit diesem Befehl (ein Fenster fragt nach, mit „Installieren“ bestätigen):
   ```sh
   xcode-select --install
   ```
   Wer [Homebrew](https://brew.sh) hat, kann stattdessen `brew install node@22 git` nehmen.
2. TUWAS herunterladen, vorbereiten und bauen:
   ```sh
   git clone https://github.com/tu-cockpit-community/tuwas.git
   cd tuwas
   npm install
   npm run dist:mac
   ```
3. Im Ordner `tuwas/dist` liegen zwei `.dmg`-Dateien:
   - `…-mac-arm64.dmg` für Macs mit Apple-Chip (M1, M2, M3 …)
   - `…-mac-x64.dmg` für ältere Macs mit Intel

   Welchen Chip du hast, steht unter  → Über diesen Mac. Die passende `.dmg` öffnen und TUWAS in **Programme**
   ziehen.
4. TUWAS ist nicht von Apple signiert, deshalb blockiert macOS den ersten Start:
   - TUWAS einmal öffnen; macOS meldet, dass es nicht geöffnet werden kann. Mit „Fertig“ schließen.
   - **Systemeinstellungen → Datenschutz & Sicherheit**, ganz nach unten scrollen, bei TUWAS auf **„Dennoch öffnen“**
     klicken und mit dem Passwort bestätigen.
   - Bei älteren macOS-Versionen geht auch: Rechtsklick auf TUWAS → Öffnen → Öffnen.
5. Das Symbol sitzt **oben rechts in der Menüleiste**. Ist etwas in den nächsten 24 Stunden fällig, steht die
   Anzahl daneben. Tastenkürzel heißen auf dem Mac Cmd statt Strg.

### Pakete von GitHub bauen lassen

Unter **Actions → „Bauen & testen“ → Run workflow** baut GitHub TUWAS auf echten Linux-, Windows- und Mac-Rechnern,
lässt dort den Testlauf laufen und legt Installer und Screenshots zum Herunterladen ab (unten auf der Seite des Laufs).
Das braucht einen GitHub-Zugang mit Rechten am Repository.

### Selbst gebaut aktualisieren

Eine neue Version holst du dir so wie beim ersten Bauen: neuen Stand herunterladen, neu bauen, neu installieren.
**Deine Daten bleiben dabei erhalten:** Einstellungen, Zugänge, eigene Termine und Notizen liegen außerhalb des
Programms (siehe [Wo liegen die Daten?](#wo-liegen-die-daten)). Welche Version du hast, steht unter Einstellungen → Info.

**1. TUWAS ganz beenden:** Menü des Symbols → „Beenden“, oder Strg+Q (Mac: Cmd+Q). Nur das Fenster zu schließen
reicht nicht, TUWAS läuft sonst im Hintergrund weiter.

**2. Den neuen Stand holen**, im Terminal im Ordner `tuwas`:

```sh
cd tuwas
git pull
npm install
```

`cd tuwas` brauchst du nur, wenn das Terminal nicht schon im Ordner ist. Unter Windows z. B. `cd %USERPROFILE%\tuwas`,
unter Linux und macOS `cd ~/tuwas`, je nachdem, wohin du TUWAS bei der Installation geladen hast.

**3. Neu bauen und installieren**, je nach System:

- **Linux, AppImage:**
  ```sh
  npm run dist:appimage
  ```
  Die neue Datei aus `dist/` über die alte kopieren (gleicher Ort, gleicher Name). Der Autostart findet sie dann
  von selbst. Falls der Name sich geändert hat, startet TUWAS einmal von Hand, dann passt sich der Autostart an.
- **Linux, RPM:**
  ```sh
  npm run dist:linux
  sudo dnf reinstall ./dist/TUWAS-*-x86_64.rpm
  ```
  Meldet dnf, dass das Paket nicht installiert ist (z. B. weil die Version gestiegen ist), stattdessen
  `sudo dnf install ./dist/TUWAS-*-x86_64.rpm`.
- **Linux, aus dem Projektordner** (`npm start` oder `npm run install-desktop`):
  ```sh
  npm run build
  ```
  Danach TUWAS neu starten. Der Autostart nimmt automatisch die neue Fassung. Für den Tab „Lernen“ (neue Kurse und
  Inhalte kommen mit `git pull`) zusätzlich die Lernen-App neu bauen:
  ```sh
  cd lernen && npm install && npm run build
  ```
- **Windows:**
  ```
  npm run dist:win
  ```
  Den neuen Installer aus `dist\` starten und durchklicken. Er ersetzt die alte Version, deine Einstellungen
  bleiben. Die Warnung „unbekannte App“ kann wieder kommen: **Weitere Informationen → Trotzdem ausführen**.
- **macOS:**
  ```sh
  npm run dist:mac
  ```
  1. Die passende `.dmg` aus `dist/` öffnen.
  2. TUWAS in **Programme** ziehen und **„Ersetzen“** wählen.
  3. Weil die neue Fassung wieder nicht signiert ist, blockiert macOS den ersten Start erneut. Wie bei der
     Installation: Systemeinstellungen → Datenschutz & Sicherheit → **„Dennoch öffnen“**.
  4. Den Autostart musst du nicht neu einschalten.

**4. TUWAS starten.** Fertig.

**Wenn etwas hakt:**

- **`git pull` meldet Konflikte:** Du hast im Ordner `tuwas` selbst Dateien geändert. Mit `git stash` legst du deine
  Änderungen beiseite, dann `git pull` nochmal.
- **`npm install` oder das Bauen bricht ab:** Ist Node.js 22 installiert? Prüfen mit `node --version`, die Ausgabe
  sollte `v22` oder höher sein.
- **TUWAS startet nach dem Update gar nicht:** Den Ordner `dist` löschen und Schritt 3 wiederholen.

## Aus dem Quellcode (Entwicklung)

```sh
npm run dev      # Entwicklung mit Live-Reload (F12 öffnet die DevTools)
npm run build    # fertige Version nach out/ bauen
npm start        # bauen und die fertige Version starten
npm run dist     # Paket für dieses System nach dist/
```

Alles, was die App braucht, bündelt electron-vite nach `out/`; deshalb stehen alle npm-Pakete unter
`devDependencies` und kommen nicht ins fertige Paket.

## Ins System einbinden (Linux, aus dem Projektordner)

```sh
npm run build
npm run install-desktop    # Eintrag in der App-Übersicht + Befehl ~/.local/bin/tuwas
```

- **Tastenkürzel für die Mini-Ansicht:** GNOME-Einstellungen → Tastatur → eigene Tastenkombination, Befehl `~/.local/bin/tuwas --mini` (mit vollem Pfad)
- Wieder entfernen: `npm run uninstall-desktop`

## Prüfungen und Anmeldefristen

Im TISS-Kalender steht eine Prüfung erst, wenn du dich angemeldet hast. Deshalb liest TUWAS zusätzlich die
öffentlichen TISS-Seiten deiner LVAs – nur die aus deinem TISS-Kalender, ohne ausgeblendete Fächer. Dafür braucht
es keine Anmeldung; TUWAS liest alle sechs Stunden, eine Seite pro Sekunde. Die Seite „Prüfungen“ zeigt dann:

- **Anmeldung offen:** Was zuerst schließt, steht oben. „In TISS anmelden“ führt direkt zu den Prüfungsterminen der LVA.
- **Anmeldung noch nicht offen:** sortiert danach, was zuerst aufmacht
- **Angemeldet:** sobald die Prüfung in deinem TISS-Kalender steht (TUWAS schaut stündlich nach, „Aktualisieren“ sofort)
- **Vorbei oder nicht nötig:** In dieser Gruppe landen
  - verpasste Fristen
  - Termine, die du schon abgedeckt hast: dieselbe Zeit in einem anderen Raum, ein anderer Termin derselben Prüfung, oder du bist schon angetreten
  - was du mit „Brauche ich nicht“ ausgeblendet hast

Offene und bald öffnende Anmeldungen stehen auch an diesen Stellen:

- auf „Heute“
- im Kalender: die Prüfung gestrichelt, die Anmeldefrist als Balken (Filter „Anmeldungen“)
- in der Mini-Ansicht, wenn sie in den nächsten Tagen enden

TUWAS meldet sich in diesen Fällen:

- sobald eine Anmeldung aufmacht
- vor dem Anmeldeschluss, zu denselben Zeiten wie bei den Abgaben
- wenn TISS einen neuen Prüfungstermin einträgt

Endet eine Anmeldung in den nächsten 24 Stunden, bekommt das Symbol den roten Punkt. Alles das lässt sich in den
Einstellungen abschalten. Die Namen der Prüfungen zeigt TUWAS so, wie TISS sie nennt; manche LVAs tragen dort den
Namen der prüfenden Person ein.

## Notizen

Notizen sind normale Markdown-Dateien in einem Ordner, den du beim ersten Öffnen von „Notizen“ festlegst
(Vorschlag: `~/Studium`). TUWAS legt darin eine Inbox und pro Semester einen Ordner je Fach aus dem TISS-Kalender an:

```
~/Studium/
├── Inbox/                                  Schnellnotizen aus dem Mini-Fenster
└── 2026W/
    └── Beispielkunde (123.456)/            die LVA-Nummer am Ende verbindet den Ordner mit dem Fach
        ├── _fach.md                        Übersicht mit Link zu TISS
        ├── Vorlesung/2026-10-07.md         Mitschrift, aus dem Kalender angelegt
        ├── Übung/Übungsblatt 3.md          Notizen zu einer Abgabe
        ├── Prüfung/
        └── Folien/                         PDFs, werden neben der Notiz angezeigt
```

- **Start:** Ohne offene Notiz zeigt „Notizen“ eine Karte pro Fach dieses Semesters (plus Inbox) mit den zuletzt
  bearbeiteten Notizen. Ein Klick auf das Fach öffnet seinen Ordner.
- **Ordner:** In jedem Ordner gehen „Neue Notiz“, „Neuer Ordner“ und „Dateien übernehmen“, über das „…“-Menü eines
  Eintrags (in der Liste links oder in der Ordneransicht) auch Umbenennen, Verschieben, Papierkorb und „Im Dateimanager
  zeigen“. Dateien und Ordner lassen sich auf andere Ordner ziehen. Markdown-Dateien, PDFs oder ganze Ordner von
  woanders ins Fenster oder auf einen Ordner ziehen kopiert sie hinein; die Originale bleiben, wo sie sind. Die Inbox und
  die Semesterordner bleiben, wie sie sind, und ein umbenannter Fachordner behält seine LVA-Nummer.
- **Schreiben:** Markdown mit Formeln (`$a^2 + b^2 = c^2$`, `$$ … $$` für eigene Zeilen), Code, Tabellen und
  Checklisten (`- [ ]`). Der Editor zeigt das gleich formatiert: Überschriften, Fett, Formeln, Tabellen, Bilder und
  Checkboxen (zum Anklicken) sehen aus wie in der Vorschau, die Markdown-Zeichen erscheinen nur dort, wo der Cursor
  steht. Das `#`-Symbol in der Leiste zeigt sie überall. Die Dateien bleiben normales Markdown. Daneben wahlweise die
  Vorschau („Geteilt“) oder nur „Lesen“. Gespeichert wird von selbst.
- **Kürzel** (Mac: Cmd statt Strg): Strg+B fett, Strg+I kursiv, Strg+M Formel, Strg+Umschalt+M Formelblock, Strg+Umschalt+L Checkliste,
  Strg+E Code, Strg+F suchen in der Notiz, Strg+N neue Notiz, Strg+Umschalt+F alle Notizen durchsuchen.
- **Folien:** PDFs ins Fenster ziehen oder über „Folien daneben“ hinzufügen – sie landen im `Folien/`-Ordner des Fachs.
- **Verknüpft:** Im Kalender legt „Mitschrift anlegen“ die Notiz für genau diese Vorlesung an (mit Zeit und Raum),
  bei Abgaben „Notizen anlegen“ eine für das Übungsblatt. Läuft gerade eine Vorlesung, steht sie oben in der Liste.
- **Tags:** `#prüfung` irgendwo im Text; die Suche findet sie mit `#prüfung`.
- **Bilder:** Ein Bild in der Zwischenablage (z. B. ein Screenshot) mit Strg+V (Mac: Cmd+V) einfügen. Es landet im
  Ordner `Bilder` neben der Notiz.
- **Links zwischen Notizen:** `[[Zusammenfassung]]` oder `[[Zusammenfassung|anderer Text]]`. Nach `[[` schlägt der Editor
  die Notizen vor. Gibt es die Notiz noch nicht, ist der Link grau und ein Klick legt sie an. Im Editor öffnet
  Strg+Klick (Mac: Cmd+Klick) einen Link, ein einfacher Klick setzt den Cursor zum Bearbeiten.
- **Als PDF:** das Symbol mit dem Pfeil in der Notizleiste. Die Notiz kommt so wie in der Vorschau heraus, immer hell.
- **TUWEL-Unterlagen:** Mit TUWEL-Verbindung kommen die Dateien deiner Kurse alle sechs Stunden in den Ordner
  `Unterlagen` des Fachs. Was du dort löschst, kommt nicht wieder. Abschaltbar unter Einstellungen → Notizen.
- Ändert ein anderes Programm eine offene Notiz, zeigt TUWAS die neue Fassung. Hast du gleichzeitig in TUWAS etwas
  geändert, fragt es nach, statt etwas zu überschreiben.

## Lernen

Der Tab „Lernen“ zeigt die Lernen-App aus `lernen/` (Next.js) im Fenster. TUWAS startet sie beim ersten Öffnen des
Tabs im Hintergrund auf `127.0.0.1` (Port 47821, sonst ein freier) und beendet sie beim Schließen. Wenn du den Tab
schon einmal geöffnet hast, wärmt TUWAS sie beim Programmstart vor, damit der Tab sofort da ist; sonst bleibt sie aus.
Der Lernstand liegt in einer Datei außerhalb des Projekts (`~/.local/share/tuwas/lernen/lernstand.jsonl`, siehe unten),
nicht im Browser: ein Neustart, ein anderer Port, ein geleerter Browser-Speicher, ein neuer Checkout oder ein
Inhalts-Update setzen ihn nicht zurück. Die App hängt nur an; auf einen anderen Rechner kopierst du einfach die Datei
(Details in `lernen/README.md`, Abschnitt „Daten“).

Die Seite „Fächer“ zeigt die Module deiner Lehrveranstaltungen; welche das sind, übernimmt TUWAS aus deinen Studiendaten.
Die Prüfungen der Studienberechtigungsprüfung erscheinen nur, wenn du sie unter Einstellungen → Lernen einschaltest.

Voraussetzung: `lernen/` ist gebaut (`npm install && npm run build` im Ordner) und `node` liegt im PATH. In einem
fertigen Paket fehlt der Ordner, dort zeigt der Tab einen Hinweis. Mit `TUWAS_LERNEN_DIR` zeigst du auf einen anderen
Ordner, mit `TUWAS_LERNEN_URL` auf einen schon laufenden Server.

## Wo liegen die Daten?

Unter Linux in `~/.config/tuwas/`, unter Windows in `%APPDATA%\tuwas\`, unter macOS in
`~/Library/Application Support/tuwas/`. Die Tabelle nennt die Linux-Pfade:

| Datei | Inhalt |
|---|---|
| `~/.config/tuwas/settings.json` | Einstellungen |
| `~/.config/tuwas/window.json` | Größe des Hauptfensters (nicht maximiert) |
| `~/.config/tuwas/secrets.json` | Tokens, verschlüsselt (Schlüssel im GNOME-Schlüsselbund) |
| `~/.config/tuwas/calendar.json` | zwischengespeicherte TISS-Termine |
| `~/.config/tuwas/courses.json` | Kurznamen, Farben, ausgeblendete Fächer |
| `~/.config/tuwas/tuwel.json` | zwischengespeicherte TUWEL-Abgaben und -Tests |
| `~/.config/tuwas/todos.json` | eigene To-dos und in TUWAS abgehakte TUWEL-Aufgaben |
| `~/.config/tuwas/reminders.json` | welche Erinnerungen schon gezeigt wurden |
| `~/.config/tuwas/notes.json` | für welche Fächer TUWAS schon einen Notizordner angelegt hat (ein gelöschter kommt nicht wieder) |
| `~/Studium/` (oder der gewählte Ordner) | die Notizen selbst |
| `~/.config/tuwas/Partitions/tuwel/` | die TU-Wien-/TUWEL-Anmeldung (Cookies) für die stille Erneuerung; „Abmelden“ löscht sie |
| `~/.config/tuwas/lernen-angemeldet.json` | deine LVA-Nummern und die SBP-Einstellung für den Lernen-Tab (wird bei jeder Änderung neu geschrieben) |
| `~/.config/tuwas/lernen-benutzt` | leere Datei: der Lernen-Tab wurde schon geöffnet, TUWAS wärmt ihn beim Start vor |
| `~/.local/share/tuwas/lernen/lernstand.jsonl` | der ganze Lernstand des Lernen-Tabs als Protokoll (nur angehängt, nie überschrieben), dazu `sicherungen/` mit einer Kopie pro Tag (30 Tage); Windows `%APPDATA%\tuwas\lernen\`, macOS wie oben |
| `~/.config/tuwas/lernen-fortschritt/` | früherer Lernstand je Kurs (`<kurs>.json`); wird beim ersten Start einmal ins Protokoll übernommen und danach nicht mehr verwendet |
| `~/.config/tuwas/events.json` | eigene Termine (Lerngruppe, Lernblöcke …) |
| `~/.config/tuwas/changes.json` | Neuigkeiten der letzten zwei Wochen (Raumwechsel, neue Aufgaben, Bewertungen …) |
| `~/.config/tuwas/exams.json` | Prüfungstermine und Anmeldefristen von den TISS-Seiten deiner LVAs; was du mit „Brauche ich nicht“ ausgeblendet hast |
| `~/.config/tuwas/courseinfo.json` | ECTS und TUWEL-Link je LVA, von ihrer TISS-Seite |
| `~/.config/tuwas/studies.json` | ECTS- und Notenübersicht mit deinen eingetragenen Noten |
| `~/.config/tuwas/tuwel-extras.json` | Ankündigungen, Kreuzerlübungen, Termine und Bewertungen aus TUWEL |
| `~/.config/tuwas/materials.json` | welche TUWEL-Dateien schon im Notizordner liegen |
| `~/.config/autostart/tuwas.desktop` | nur unter Linux und nur wenn Autostart an ist (Windows/macOS: Anmeldeobjekte des Systems) |

## Startschalter: XWayland und Deutsch (Linux)

TUWAS läuft unter Linux über XWayland (`--ozone-platform=x11`), weil Wayland Apps ihre Fenster nicht selbst
platzieren lässt – das Mini-Fenster muss aber oben rechts unter dem Tray-Symbol sitzen. Außerdem startet es mit
`--lang=de-AT`, damit Datumsfelder und Menüs deutsch sind, auch wenn das System auf Englisch steht.

Electron liest beide Schalter, bevor der App-Code läuft, deshalb müssen sie beim Start übergeben werden. Die
npm-Skripte, der Befehl `tuwas` und der Autostart machen das automatisch; fehlen sie, startet TUWAS sich einmal
selbst mit ihnen neu.

Die Zeile `GetVSyncParametersIfAvailable() failed for 1 times!` im Terminal ist harmlos.

## Testlauf ohne Fenster

```sh
npm run build
npm run smoke              # unter Linux ohne Bildschirm: xvfb-run -a npm run smoke
```

Erzeugt erfundene Testdaten: Fächer wie „Beispielkunde“, Abgaben, TISS-LVA-Seiten mit Prüfungen und Anmeldefristen
und eine zweite Synchronisierung. Diese bringt einen Raumwechsel, einen verschobenen und einen entfallenen Termin, eine
Prüfungsanmeldung, einen neuen Prüfungstermin und eine neue Aufgabe. TUWAS startet unsichtbar damit, legt
Screenshots der Ansichten und `report.json` in `smoke/` ab und meldet, ob alles geklappt hat. Geprüft wird unter
anderem das Speichern der Notizen (von selbst, bei Änderungen von außen, bei Konflikten, beim Schließen), der
Live-Editor (Formeln, Tabelle, Checkbox anklicken), Ordner anlegen, umbenennen, verschieben und von außen übernehmen, das
Erkennen von Änderungen, wie TUWAS jede Prüfung einordnet (offen, angemeldet, nicht nötig …), das Zurück- und
Vorspringen zwischen Ansichten und dass PDFs nur aus dem Notizordner kommen. Nutzt einen eigenen Datenordner und nicht den
Schlüsselbund.

Ohne Testdaten geht es auch direkt: `node_modules/electron/dist/electron . --smoke-test=<ordner>` (unter Linux mit
`--ozone-platform=x11 --lang=de-AT`); bei einem installierten Paket das Programm selbst mit `--smoke-test=<ordner>`.

Hilfen für die Entwicklung (nur ungepackt):

| | |
|---|---|
| `--dump-tiss=<datei>` | speichert deinen TISS-Feed roh in eine Datei (zum Anschauen des Formats) |
| `TUWAS_TISS_FILE=<datei>` | liest den Kalender aus dieser Datei statt von TISS – z. B. für den Testlauf mit echten Daten |
| `--dump-tuwel=<datei>` | speichert, was TUWEL liefert (Zeitleiste, Abgaben, Tests), als JSON |
| `TUWAS_TUWEL_FILE=<datei>` | nimmt diese JSON-Datei statt TUWEL |
| `--probe-tuwel` | prüft, ob TUWEL den gespeicherten Schlüssel noch annimmt (gibt nur „gültig“/„abgelehnt“ aus) |
| `--tuwel-calls=<datei>` | ruft die TUWEL-Funktionen aus `TUWAS_TUWEL_CALLS` (JSON) mit frischem Schlüssel auf und speichert die Antworten; gibt nur Zahlen aus |
| `--dump-exams=<datei>` | liest die TISS-Seiten der LVAs aus deinem Kalender wie die App und speichert die Prüfungen als JSON; gibt nur Zahlen aus |
| `TUWAS_TISS_PAGES=<ordner>` | nimmt die LVA-Seiten aus diesem Ordner (`123456.html` für 123.456) statt von TISS |
| `TUWAS_SMOKE_THEME=light` | Testlauf im hellen statt dunklen Modus |

## Lizenz

MIT – siehe [LICENSE](LICENSE). © 2026 MentorDerGrosse; das Lernen-Modul, das TUWAS-Branding und kleinere
Verbesserungen © 2026 hulrap. Du darfst TUWAS benutzen, verändern und weitergeben, solange der Lizenzhinweis dabei bleibt.

## Danke

Die Raumliste `resources/rooms.csv` (Adressen, TUW-Maps-Codes) stammt aus
[better-tiss-calendar](https://github.com/flofriday/better-tiss-calendar) von flofriday (MIT-Lizenz, siehe `resources/rooms.LICENSE`).
