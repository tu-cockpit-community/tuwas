import { syntaxTree, type HighlightStyle } from '@codemirror/language'
import { RangeSetBuilder, type Extension } from '@codemirror/state'
import { Decoration, EditorView, ViewPlugin, type DecorationSet, type ViewUpdate } from '@codemirror/view'
import type { Tree } from '@lezer/common'
import { highlightTree, type Highlighter } from '@lezer/highlight'

// Syntax highlighting for long notes. CodeMirror's own (syntaxHighlighting) walks the top-level blocks of the note
// from its start up to what is on screen – once per visible range, and the live preview splits the screen into
// several around rendered formulas and tables. At the end of a long note that was most of the time of a keystroke.
// This one jumps to the first visible block through the balanced syntax tree and highlights each visible block on
// its own. Markdown's highlighting rules don't depend on the document around a block, so the result is the same.

const marks = new Map<string, Decoration>()
const mark = (className: string): Decoration => {
  let decoration = marks.get(className)
  if (!decoration) marks.set(className, (decoration = Decoration.mark({ class: className })))
  return decoration
}

/** Highlights from..to of the tree: only the top-level blocks there, each as its own subtree. In order of position. */
export function highlightBlocks(tree: Tree, style: Highlighter, from: number, to: number, put: (from: number, to: number, className: string) => void): void {
  const cursor = tree.cursor()
  if (!cursor.childBefore(from) && !cursor.firstChild()) return
  do {
    if (cursor.to <= from) continue
    if (cursor.from >= to) break
    const node = cursor.node
    const offset = node.from
    highlightTree(node.toTree(), style, (start, end, className) => put(start + offset, end + offset, className), Math.max(0, from - offset), Math.min(node.to, to) - offset)
  } while (cursor.nextSibling())
}

function build(view: EditorView, style: HighlightStyle): DecorationSet {
  const builder = new RangeSetBuilder<Decoration>()
  highlightBlocks(syntaxTree(view.state), style, view.viewport.from, view.viewport.to, (from, to, className) => builder.add(from, to, mark(className)))
  return builder.finish()
}

export function viewportHighlighting(style: HighlightStyle): Extension {
  const plugin = ViewPlugin.fromClass(
    class {
      decorations: DecorationSet
      constructor(view: EditorView) {
        this.decorations = build(view, style)
      }
      update(update: ViewUpdate): void {
        if (update.docChanged || update.viewportChanged || syntaxTree(update.state) !== syntaxTree(update.startState)) {
          this.decorations = build(update.view, style)
        }
      }
    },
    { decorations: (value) => value.decorations }
  )
  // The style's CSS classes, as syntaxHighlighting() would mount them.
  return [plugin, style.module ? EditorView.styleModule.of(style.module) : []]
}
