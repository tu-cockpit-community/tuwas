# Lernen (Next.js-App im sout-Repository)

Die Lernplattform, die sout im Tab „Lernen“ zeigt. Eigene `package.json`; alle Befehle laufen in diesem Ordner.

- **Neuen Kurs anlegen oder Kursinhalte schreiben:** zuerst `content/ANLEITUNG-NEUE-KURSE.md` vollständig lesen und
  danach vorgehen (Material vom Menschen einholen, Phasen P0 bis P8, Validator als Gate, unabhängiger Review).
- Format, Qualität, Sprache, Widgets: `content/AUTHORING.md`, `content/QUALITAET.md`, `content/SPRACHE.md`,
  `content/WIDGETS.md`.
- Gate für Inhalte: `npm run lernen:pruefen -- <kurs> [NN] --qualitaet`. Tests: `npm run lernen:test`.
- Beim Ausprobieren nie den echten Lernstand benutzen: `LERNEN_JOURNAL=/tmp/test-lernstand.jsonl npm run dev`.
- sout zeigt die gebaute App: nach Änderungen `npm run build` und sout neu starten.
