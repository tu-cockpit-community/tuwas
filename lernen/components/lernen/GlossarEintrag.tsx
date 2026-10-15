"use client";

import { useState } from "react";
import { Md } from "./Md";

/** Glossar-Definition: erst beim Aufklappen rendern (KaTeX fuer hunderte Definitionen waere zu schwer). */
export function GlossarText({ text }: { text: string }) {
  const [offen, setOffen] = useState(false);
  return (
    <details onToggle={(e) => setOffen((e.target as HTMLDetailsElement).open)}>
      <summary className="kasten-aufklapp">Definition anzeigen</summary>
      {offen ? <Md>{text}</Md> : null}
    </details>
  );
}
