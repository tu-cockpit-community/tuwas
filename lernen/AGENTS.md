# Lernen (Next.js-App im TUWAS-Repository)

Die Lernplattform, die TUWAS im Tab „Lernen“ zeigt. Eigene `package.json`; alle Befehle laufen in diesem Ordner.

- **Neuen Kurs anlegen oder Kursinhalte schreiben:** zuerst `content/ANLEITUNG-NEUE-KURSE.md` vollständig lesen und
  danach vorgehen (Material vom Menschen einholen, Phasen P0 bis P8, Validator als Gate, unabhängiger Review).
- **Aufgabenblätter und Quiz (persönliche Kapitel, nie committen):** Diese Kapitel erzeugt jede Person lokal mit ihrer KI, weil sie die eigenen Lösungen enthalten.
  Anleitung: `content/ANLEITUNG-BLAETTER-QUIZ.md`, Gerüst: `content/ep1/gehaeuse-blaetter/`. Die Dateien `*-blatt<N>-*.md`, `*-probequiz*.md` und `*-blaetter-und-quiz.md`
  in `content/*/kapitel/` sind per `.gitignore` ausgeschlossen; nie `git add -f`, nie committen oder pushen, nie in Pull Requests oder `WUENSCHE.md` kopieren.
- Format, Qualität, Sprache, Widgets: `content/AUTHORING.md`, `content/QUALITAET.md`, `content/SPRACHE.md`,
  `content/WIDGETS.md`.
- Gate für Inhalte: `npm run lernen:pruefen -- <kurs> [NN] --qualitaet`. Tests: `npm run lernen:test`.
- Beim Ausprobieren nie den echten Lernstand benutzen: `LERNEN_JOURNAL=/tmp/test-lernstand.jsonl npm run dev`.
- TUWAS zeigt die gebaute App: nach Änderungen `npm run build` und TUWAS neu starten.
