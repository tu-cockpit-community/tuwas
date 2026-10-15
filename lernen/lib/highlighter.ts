import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

/**
 * Ein einziger, prozessweit wiederverwendeter Shiki-Highlighter (WASM-Setup ist teuer und
 * asynchron). react-markdown verarbeitet sein Plugin-Chain synchron (`runSync`) -- deshalb muss
 * der Highlighter VOR dem Rendern fertig geladen sein; @shikijs/rehype/core nimmt ihn dann rein
 * synchron entgegen. Siehe SkriptMarkdown.tsx, das dafuer eine async Server-Komponente ist.
 */
export function ladeHighlighter(): Promise<Highlighter> {
  highlighterPromise ??= createHighlighter({ themes: ["github-dark"], langs: ["java"] });
  return highlighterPromise;
}
