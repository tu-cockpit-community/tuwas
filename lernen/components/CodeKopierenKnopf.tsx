"use client";

import { useState } from "react";

/** Findet den naechstgelegenen <pre> im selben Codeblock-Wrapper und kopiert dessen Text --
 * bewusst ohne Prop-Drilling des rohen Codes, das <pre> traegt den Text ohnehin schon im DOM. */
export function CodeKopierenKnopf(): React.JSX.Element {
  const [kopiert, setKopiert] = useState(false);

  async function kopieren(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
    const pre = e.currentTarget.closest("[data-code-block]")?.querySelector("pre");
    if (!pre) return;
    try {
      await navigator.clipboard.writeText(pre.innerText);
      setKopiert(true);
      setTimeout(() => setKopiert(false), 1500);
    } catch {
      // Clipboard-API kann in unsicheren Kontexten fehlen -- dann passiert einfach nichts
    }
  }

  return (
    <button
      type="button"
      onClick={kopieren}
      className="text-[10px] font-mono uppercase tracking-wider text-ink-faint hover:text-ink-soft transition-colors"
    >
      {kopiert ? "Kopiert ✓" : "Kopieren"}
    </button>
  );
}
