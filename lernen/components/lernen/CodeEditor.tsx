"use client";

import { useId, useRef } from "react";

/**
 * Schlanker Code-Editor: <textarea> in Monospace mit Zeilennummern. Tab rueckt ein (Shift+Tab aus),
 * Enter uebernimmt die Einrueckung. Damit Tab keine Tastaturfalle ist: Esc, danach verlaesst Tab das Feld.
 * Aenderungen laufen ueber execCommand("insertText"), damit Strg+Z weiter funktioniert.
 */

const EINZUG = "    ";

function ersetze(ta: HTMLTextAreaElement, start: number, ende: number, text: string, selStart: number, selEnde: number) {
  ta.focus();
  ta.setSelectionRange(start, ende);
  let ok = false;
  try {
    ok = document.execCommand("insertText", false, text);
  } catch {
    ok = false;
  }
  if (!ok) {
    ta.setRangeText(text, start, ende, "end");
    ta.dispatchEvent(new Event("input", { bubbles: true }));
  }
  ta.setSelectionRange(selStart, selEnde);
}

export function CodeEditor({
  wert,
  setze,
  label,
  gesperrt,
  zeilenMin = 8,
  beschriftung = "Java-Code",
}: {
  wert: string;
  setze: (s: string) => void;
  label?: React.ReactNode;
  gesperrt?: boolean;
  zeilenMin?: number;
  beschriftung?: string;
}) {
  const id = useId();
  const nummern = useRef<HTMLDivElement>(null);
  const tabFrei = useRef(false);
  const zeilen = wert.split("\n").length;

  function taste(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    const el = e.currentTarget;
    if (e.key === "Escape") {
      tabFrei.current = true;
      return;
    }
    if (e.key === "Tab" && tabFrei.current) return;
    if (e.key !== "Shift") tabFrei.current = false;
    const { selectionStart: a, selectionEnd: b, value: v } = el;
    if (e.key === "Tab" && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      const zeilenStart = v.lastIndexOf("\n", a - 1) + 1;
      if (!e.shiftKey && a === b) return ersetze(el, a, b, EINZUG, a + EINZUG.length, a + EINZUG.length);
      // mehrere Zeilen (oder Shift+Tab): ganze Zeilen ein-/ausruecken
      const endeZeile = v.indexOf("\n", b - (b > a && v[b - 1] === "\n" ? 1 : 0));
      const ende = endeZeile < 0 ? v.length : endeZeile;
      const block = v.slice(zeilenStart, ende);
      const neu = block
        .split("\n")
        .map((z) => (e.shiftKey ? z.replace(/^( {1,4}|\t)/, "") : EINZUG + z))
        .join("\n");
      const ersteVerschiebung = e.shiftKey ? -(block.split("\n")[0].match(/^( {1,4}|\t)/)?.[0].length ?? 0) : EINZUG.length;
      return ersetze(el, zeilenStart, ende, neu, Math.max(zeilenStart, a + ersteVerschiebung), b + (neu.length - block.length));
    }
    if (e.key === "Enter" && !e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      const zeilenStart = v.lastIndexOf("\n", a - 1) + 1;
      const zeile = v.slice(zeilenStart, a);
      let einzug = zeile.match(/^[ \t]*/)?.[0] ?? "";
      if (/[{(]\s*$/.test(zeile)) einzug += EINZUG;
      const text = "\n" + einzug;
      return ersetze(el, a, b, text, a + text.length, a + text.length);
    }
    if (e.key === "}" && a === b) {
      // schliessende Klammer auf einer reinen Einrueckungszeile eine Stufe zurueck
      const zeilenStart = v.lastIndexOf("\n", a - 1) + 1;
      const vor = v.slice(zeilenStart, a);
      if (/^ {4,}$/.test(vor)) {
        e.preventDefault();
        return ersetze(el, a - 4, a, "}", a - 3, a - 3);
      }
    }
  }

  return (
    <div className="code-editor-huelle">
      {label ? (
        <label htmlFor={id} className="eingabe-label">
          {label}
        </label>
      ) : null}
      <div className={`code-editor ${gesperrt ? "gesperrt" : ""}`}>
        <div className="code-editor-nr" aria-hidden="true">
          <div ref={nummern}>
            {Array.from({ length: Math.max(zeilen, zeilenMin) }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        </div>
        <textarea
          id={id}
          className="code-editor-feld"
          value={wert}
          disabled={gesperrt}
          aria-label={label ? undefined : beschriftung}
          aria-describedby={`${id}-hilfe`}
          rows={Math.max(zeilen, zeilenMin)}
          wrap="off"
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          onFocus={() => (tabFrei.current = false)}
          onKeyDown={taste}
          onScroll={(e) => {
            if (nummern.current) nummern.current.style.transform = `translateY(${-e.currentTarget.scrollTop}px)`;
          }}
          onChange={(e) => setze(e.target.value)}
        />
      </div>
      <p id={`${id}-hilfe`} className="eingabe-hilfe">
        Tab rückt ein, Shift+Tab rückt aus. Zum Verlassen des Editors erst Esc, dann Tab.
      </p>
    </div>
  );
}
