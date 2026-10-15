"use client";

import { useId, useState } from "react";

/**
 * Denkanstoss zur Selbsterklaerung: erst eigene Ueberlegung aufschreiben (generatives Abrufen),
 * dann mit der Erklaerung vergleichen. Vergleichen geht erst, wenn etwas dasteht.
 */
export function Reflexion({ frage, antwort }: { frage: React.ReactNode; antwort: React.ReactNode }) {
  const id = useId();
  const [offen, setOffen] = useState(false);
  const [text, setText] = useState("");
  return (
    <aside className="reflexion" aria-label="Denk kurz nach">
      <p className="reflexion-kopf">Denk kurz nach</p>
      <div className="reflexion-frage">{frage}</div>
      <label htmlFor={id} className="sr-only">
        Deine Überlegung
      </label>
      <textarea
        id={id}
        className="feld feld-text"
        rows={3}
        value={text}
        readOnly={offen}
        placeholder="Schreib deine Überlegung in ein, zwei Sätzen auf."
        onChange={(e) => setText(e.target.value)}
      />
      {offen ? (
        <div className="reflexion-antwort">{antwort}</div>
      ) : (
        <button type="button" className="knopf knopf-klein" disabled={text.trim().length < 10} onClick={() => setOffen(true)}>
          Mit der Erklärung vergleichen
        </button>
      )}
    </aside>
  );
}
