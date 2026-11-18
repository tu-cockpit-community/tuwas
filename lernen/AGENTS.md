# Lernen (Next.js-App im TUWAS-Repository)

Die Lernplattform, die TUWAS im Tab „Lernen“ zeigt. Eigene `package.json`; alle Befehle laufen in diesem Ordner.

- **Aufgabenblätter und Quiz:** Die Kapitel dazu liegen nur lokal (nie committen) und entstehen nach der Einreichung des Aufgabenblatts zum Lernen.
- Format, Qualität, Sprache, Widgets: `content/AUTHORING.md`, `content/QUALITAET.md`, `content/SPRACHE.md`,
  `content/WIDGETS.md`.
- Gate für Inhalte: `npm run lernen:pruefen -- <kurs> [NN] --qualitaet`. Tests: `npm run lernen:test`.
- Beim Ausprobieren nie den echten Lernstand benutzen: `LERNEN_JOURNAL=/tmp/test-lernstand.jsonl npm run dev`.
- TUWAS zeigt die gebaute App: nach Änderungen `npm run build` und TUWAS neu starten.
