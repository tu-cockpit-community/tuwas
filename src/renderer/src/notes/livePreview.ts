import katex from 'katex'
import { syntaxTree } from '@codemirror/language'
import { Facet, StateField, type EditorState, type Extension, type Range, type Transaction } from '@codemirror/state'
import { Decoration, EditorView, ViewPlugin, WidgetType, type DecorationSet, type ViewUpdate } from '@codemirror/view'
import { renderMarkdown } from '../lib/markdown'
import { noteFileUrl, resolveRelative } from '../lib/notes'

// Live preview for the Markdown editor, the way Obsidian and Typora do it: headings, bold, links, formulas,
// checkboxes and pictures look rendered, and the Markdown marks only show where the cursor is. The file itself
// stays plain Markdown – this only changes how it is displayed.

export interface LiveConfig {
  /** Folder of the note (relative to the notes folder): pictures are loaded from there. */
  dir: () => string
  /** Strg/Cmd+click on a link: [[Notiz]], a relative link, or a web address. */
  onWikiLink: (target: string) => void
  onLink: (href: string) => void
}

export const liveConfig = Facet.define<LiveConfig, LiveConfig>({
  combine: (values) => values[values.length - 1] ?? { dir: () => '', onWikiLink: () => {}, onLink: () => {} }
})

// ---------- Widgets ----------

class MathWidget extends WidgetType {
  constructor(
    readonly tex: string,
    readonly display: boolean,
    readonly pos: number
  ) {
    super()
  }
  eq(other: MathWidget): boolean {
    return other.tex === this.tex && other.display === this.display && other.pos === this.pos
  }
  toDOM(view: EditorView): HTMLElement {
    const element = document.createElement(this.display ? 'div' : 'span')
    element.className = this.display ? 'cm-lp-math cm-lp-math-block' : 'cm-lp-math'
    element.innerHTML = katex.renderToString(this.tex, { throwOnError: false, displayMode: this.display })
    element.title = 'Klicken zum Bearbeiten'
    // A click puts the cursor into the formula, which shows its source again.
    element.addEventListener('mousedown', (event) => {
      event.preventDefault()
      view.dispatch({ selection: { anchor: this.pos } })
      view.focus()
    })
    return element
  }
  ignoreEvent(): boolean {
    return true
  }
}

class CheckboxWidget extends WidgetType {
  constructor(
    readonly checked: boolean,
    /** Position of the character between the brackets. */
    readonly pos: number
  ) {
    super()
  }
  eq(other: CheckboxWidget): boolean {
    return other.checked === this.checked && other.pos === this.pos
  }
  toDOM(view: EditorView): HTMLElement {
    const box = document.createElement('input')
    box.type = 'checkbox'
    box.className = 'cm-lp-task'
    box.checked = this.checked
    box.setAttribute('aria-label', this.checked ? 'Erledigt' : 'Offen')
    box.addEventListener('mousedown', (event) => {
      event.preventDefault()
      view.dispatch({ changes: { from: this.pos, to: this.pos + 1, insert: this.checked ? ' ' : 'x' } })
    })
    return box
  }
  ignoreEvent(): boolean {
    return true
  }
}

class TextWidget extends WidgetType {
  constructor(
    readonly text: string,
    readonly className: string
  ) {
    super()
  }
  eq(other: TextWidget): boolean {
    return other.text === this.text && other.className === this.className
  }
  toDOM(): HTMLElement {
    const element = document.createElement('span')
    element.className = this.className
    element.textContent = this.text
    return element
  }
}

class ImageWidget extends WidgetType {
  constructor(
    readonly src: string,
    readonly alt: string
  ) {
    super()
  }
  eq(other: ImageWidget): boolean {
    return other.src === this.src && other.alt === this.alt
  }
  toDOM(): HTMLElement {
    const image = document.createElement('img')
    image.className = 'cm-lp-image'
    image.src = this.src
    image.alt = this.alt
    return image
  }
}

/** A table, rendered like in the reading view; a click goes to its source. */
class TableWidget extends WidgetType {
  constructor(
    readonly source: string,
    readonly dir: string,
    readonly pos: number
  ) {
    super()
  }
  eq(other: TableWidget): boolean {
    return other.source === this.source && other.dir === this.dir && other.pos === this.pos
  }
  toDOM(view: EditorView): HTMLElement {
    const element = document.createElement('div')
    element.className = 'cm-lp-table markdown'
    // Same renderer as the preview: no raw HTML from the note, formulas and links work.
    element.innerHTML = renderMarkdown(this.source, this.dir)
    element.title = 'Klicken zum Bearbeiten'
    element.addEventListener('mousedown', (event) => {
      event.preventDefault()
      view.dispatch({ selection: { anchor: this.pos } })
      view.focus()
    })
    return element
  }
  ignoreEvent(): boolean {
    return true
  }
}

// ---------- Block elements: formula blocks and tables ----------
//
// They replace whole lines, which CodeMirror only takes from a state field. They are found along the top-level
// blocks of the syntax tree; after an edit only around the change, so typing stays cheap in long notes. When the
// cursor moves, the decorations are rebuilt from the list alone.

interface Block {
  from: number
  to: number
  kind: 'math' | 'table'
  /** TeX of the formula, Markdown of the table. */
  source: string
}

/** "$$" blocks among the lines of a paragraph: "$$ … $$" on one line, or from a "$$" line to one ending in "$$". */
function mathIn(state: EditorState, from: number, to: number, blocks: Block[]): void {
  const last = state.doc.lineAt(to).number
  for (let n = state.doc.lineAt(from).number; n <= last; n++) {
    const opening = state.doc.line(n)
    const text = opening.text.trim()
    if (!text.startsWith('$$')) continue
    let closing = opening
    if (!(text.length > 4 && text.endsWith('$$'))) {
      let m = n + 1
      while (m <= last && !state.doc.line(m).text.trim().endsWith('$$')) m++
      if (m > last) continue
      closing = state.doc.line(m)
    }
    const source = state.doc.sliceString(opening.from, closing.to).trim()
    const tex = source.slice(2, -2).trim()
    if (tex) blocks.push({ from: opening.from, to: closing.to, kind: 'math', source: tex })
    n = closing.number
  }
}

/** The widget for a formula block or a table, over its whole lines. */
function blockDecoration(state: EditorState, block: Block): Range<Decoration> {
  const widget = block.kind === 'math' ? new MathWidget(block.source, true, block.from + 2) : new TableWidget(block.source, state.facet(liveConfig).dir(), block.from)
  return Decoration.replace({ widget, block: true }).range(block.from, block.to)
}

/**
 * Formula blocks and tables in the top-level blocks of the syntax tree that reach into from..to, as decorations.
 * Also returns the span those top-level blocks cover: outside of it, what was found before still holds.
 */
function scanBlocks(state: EditorState, from: number, to: number): { ranges: Range<Decoration>[]; from: number; to: number } {
  const blocks: Block[] = []
  let start = from
  let end = to
  const cursor = syntaxTree(state).cursor()
  // Straight to the block before `from` instead of walking from the top of the note.
  if (!cursor.childBefore(from) && !cursor.firstChild()) return { ranges: [], from, to }
  do {
    if (cursor.to < from) continue
    if (cursor.from > to) break
    start = Math.min(start, cursor.from)
    end = Math.max(end, cursor.to)
    if (cursor.name === 'Table') {
      const first = state.doc.lineAt(cursor.from)
      const last = state.doc.lineAt(cursor.to)
      blocks.push({ from: first.from, to: last.to, kind: 'table', source: state.doc.sliceString(first.from, last.to) })
    } else if (cursor.name === 'Paragraph') {
      mathIn(state, cursor.from, cursor.to, blocks)
    }
  } while (cursor.nextSibling())
  return { ranges: blocks.map((block) => blockDecoration(state, block)), from: start, to: end }
}

/** All block widgets, wherever the cursor is; kept up to date piece by piece. */
function allBlocks(previous: DecorationSet, transaction: Transaction): DecorationSet {
  const { state } = transaction
  // The parser works through long notes in steps; when the tree grows without an edit, everything is looked at again.
  if (!transaction.docChanged) return Decoration.set(scanBlocks(state, 0, state.doc.length).ranges)
  let from = state.doc.length
  let to = 0
  transaction.changes.iterChangedRanges((_fromA, _toA, fromB, toB) => {
    from = Math.min(from, fromB)
    to = Math.max(to, toB)
  })
  const scanned = scanBlocks(state, from, to)
  return previous.map(transaction.changes).update({ filterFrom: scanned.from, filterTo: scanned.to, filter: () => false, add: scanned.ranges })
}

/** What is shown: all blocks except those the cursor or a selection is in – they show their Markdown. */
function shownBlocks(all: DecorationSet, state: EditorState): DecorationSet {
  const ranges = state.selection.ranges
  return all.update({
    filterFrom: Math.min(...ranges.map((range) => range.from)),
    filterTo: Math.max(...ranges.map((range) => range.to)),
    filter: (from, to) => !ranges.some((range) => range.from <= to && range.to >= from)
  })
}

const blockField = StateField.define<{ all: DecorationSet; shown: DecorationSet }>({
  create: (state) => {
    const all = Decoration.set(scanBlocks(state, 0, state.doc.length).ranges)
    return { all, shown: shownBlocks(all, state) }
  },
  update: (value, transaction) => {
    const reparsed = transaction.docChanged || syntaxTree(transaction.state) !== syntaxTree(transaction.startState)
    if (!reparsed && !transaction.selection) return value
    const all = reparsed ? allBlocks(value.all, transaction) : value.all
    return { all, shown: shownBlocks(all, transaction.state) }
  },
  provide: (field) => EditorView.decorations.from(field, (value) => value.shown)
})

// ---------- Everything inside a line: only for what is on screen ----------

/** The cursor or a selection touches the lines from..to: their Markdown stays visible. */
function linesTouched(state: EditorState, from: number, to: number): boolean {
  const start = state.doc.lineAt(from).from
  const end = state.doc.lineAt(to).to
  return state.selection.ranges.some((range) => range.from <= end && range.to >= start)
}

const hide = Decoration.replace({})
const line = (className: string): Decoration => Decoration.line({ class: className })

/** "$…$" inside a line, not "$$", not "\$". */
const INLINE_MATH = /(?<![\\$])\$(?!\s)([^$\n]+?)(?<!\s|\\)\$(?!\$)/g
const WIKI_LINK = /\[\[([^[\]|\n]+?)(?:\|([^[\]\n]+?))?\]\]/g

interface Span {
  from: number
  to: number
}

const overlaps = (list: Span[], from: number, to: number): boolean => list.some((range) => from < range.to && to > range.from)

/** Decorations for the visible part of the note; the work depends on the window height, not the note length. */
function inlineDecorations(view: EditorView): DecorationSet {
  const { state } = view
  const config = state.facet(liveConfig)
  const blocks = state.field(blockField).all
  const ranges: Range<Decoration>[] = []
  const selection = state.selection.ranges
  const touched = (from: number, to: number): boolean => selection.some((range) => range.from <= to && range.to >= from)
  const lineTouched = (from: number, to: number): boolean => linesTouched(state, from, to)
  const tree = syntaxTree(state)

  for (const visible of view.visibleRanges) {
    // Code is left alone, and nothing inside a formula is Markdown ("a_1 * b_2").
    const code: Span[] = []
    tree.iterate({
      from: visible.from,
      to: visible.to,
      enter: (node) => {
        if (node.name === 'FencedCode' || node.name === 'CodeBlock' || node.name === 'InlineCode') code.push({ from: node.from, to: node.to })
      }
    })
    const math: Span[] = []
    const tables: Span[] = []
    blocks.between(visible.from, visible.to, (from, to, decoration) => {
      ;(decoration.spec.widget instanceof MathWidget ? math : tables).push({ from, to })
    })

    // Inline formulas and [[links]], line by line.
    for (let pos = visible.from; pos <= visible.to; ) {
      const current = state.doc.lineAt(pos)
      pos = current.to + 1
      if (overlaps(math, current.from, current.to + 1) || overlaps(tables, current.from, current.to + 1)) continue
      for (const match of current.text.matchAll(INLINE_MATH)) {
        const from = current.from + match.index!
        const to = from + match[0].length
        if (overlaps(code, from, to)) continue
        math.push({ from, to })
        if (!touched(from, to)) ranges.push(Decoration.replace({ widget: new MathWidget(match[1]!, false, from + 1) }).range(from, to))
      }
      for (const match of current.text.matchAll(WIKI_LINK)) {
        const from = current.from + match.index!
        const to = from + match[0].length
        if (overlaps(code, from, to) || overlaps(math, from, to)) continue
        const target = match[1]!.trim()
        const textFrom = match[2] ? to - 2 - match[2].length : from + 2
        ranges.push(Decoration.mark({ class: 'cm-lp-link cm-lp-wiki', attributes: { 'data-note': target, title: `${target} – Strg+Klick öffnet` } }).range(textFrom, to - 2))
        if (!touched(from, to)) ranges.push(hide.range(from, textFrom), hide.range(to - 2, to))
      }
    }

    tree.iterate({
      from: visible.from,
      to: visible.to,
      enter: (node) => {
        const { from, to, name } = node
        // Inside a formula or a rendered table nothing else is drawn; what merely contains a formula still is.
        if (math.some((range) => from >= range.from && to <= range.to)) return false
        if (name === 'Table') return false
        switch (name) {
          case 'FencedCode':
          case 'CodeBlock':
            // Only the visible lines of a long code block.
            for (let pos = Math.max(from, visible.from); pos <= Math.min(to, visible.to); ) {
              const current = state.doc.lineAt(pos)
              ranges.push(line('cm-lp-codeblock').range(current.from))
              pos = current.to + 1
            }
            return false
          case 'InlineCode':
            ranges.push(Decoration.mark({ class: 'cm-lp-inline-code' }).range(from, to))
            if (!touched(from, to)) for (const mark of node.node.getChildren('CodeMark')) ranges.push(hide.range(mark.from, mark.to))
            return false
          case 'HeaderMark': {
            // "## " including the space; setext underlines ("===") stay.
            const current = state.doc.lineAt(from)
            if (current.text.trimStart().startsWith('#') && !lineTouched(from, to)) {
              ranges.push(hide.range(from, Math.min(current.to, to + (state.doc.sliceString(to, to + 1) === ' ' ? 1 : 0))))
            }
            return
          }
          case 'EmphasisMark':
          case 'StrikethroughMark': {
            const parent = node.node.parent
            if (parent && !touched(parent.from, parent.to)) ranges.push(hide.range(from, to))
            return
          }
          case 'QuoteMark': {
            const current = state.doc.lineAt(from)
            ranges.push(line('cm-lp-quote').range(current.from))
            if (!lineTouched(from, to)) ranges.push(hide.range(from, Math.min(current.to, to + (state.doc.sliceString(to, to + 1) === ' ' ? 1 : 0))))
            return
          }
          case 'HorizontalRule':
            if (!lineTouched(from, to)) ranges.push(Decoration.replace({ widget: new TextWidget('', 'cm-lp-hr') }).range(from, to))
            return
          case 'ListMark': {
            if (lineTouched(from, to)) return
            const item = node.node.parent
            const task = item?.getChild('Task')?.getChild('TaskMarker')
            if (task && state.doc.lineAt(task.from).number === state.doc.lineAt(from).number) {
              // "- [ ] " becomes a checkbox.
              const checked = state.doc.sliceString(task.from + 1, task.from + 2).toLowerCase() === 'x'
              ranges.push(hide.range(from, task.from))
              ranges.push(Decoration.replace({ widget: new CheckboxWidget(checked, task.from + 1) }).range(task.from, task.to))
              if (checked) ranges.push(Decoration.mark({ class: 'cm-lp-done' }).range(task.to, state.doc.lineAt(task.to).to))
            } else if (/^[-*+]$/.test(state.doc.sliceString(from, to))) {
              ranges.push(Decoration.replace({ widget: new TextWidget('•', 'cm-lp-bullet') }).range(from, to))
            }
            return
          }
          case 'Image': {
            // Within one line only: a replacement here must not span a line break.
            if (touched(from, to) || state.doc.lineAt(from).number !== state.doc.lineAt(to).number) return false
            const match = /^!\[([^\]]*)\]\(\s*<?([^)>\s]+)>?(?:\s+"[^"]*")?\s*\)$/.exec(state.doc.sliceString(from, to))
            if (!match) return false
            const src = /^[a-z][a-z0-9+.-]*:/i.test(match[2]!) ? match[2]! : noteFileUrl(resolveRelative(config.dir(), match[2]!))
            ranges.push(Decoration.replace({ widget: new ImageWidget(src, match[1]!) }).range(from, to))
            return false
          }
          case 'Link': {
            const marks = node.node.getChildren('LinkMark')
            if (marks.length < 2) return
            const url = node.node.getChild('URL')
            const href = url ? state.doc.sliceString(url.from, url.to) : ''
            ranges.push(Decoration.mark({ class: 'cm-lp-link', attributes: { 'data-href': href, title: `${href} – Strg+Klick öffnet` } }).range(marks[0]!.to, marks[1]!.from))
            if (!touched(from, to) && state.doc.lineAt(marks[1]!.from).number === state.doc.lineAt(to).number) {
              ranges.push(hide.range(marks[0]!.from, marks[0]!.to), hide.range(marks[1]!.from, to))
            }
            return false
          }
          case 'URL':
            // A bare web address ("https://…"), outside of a [link](…).
            if (node.node.parent?.name !== 'Link') {
              const href = state.doc.sliceString(from, to)
              ranges.push(Decoration.mark({ class: 'cm-lp-link', attributes: { 'data-href': href, title: `${href} – Strg+Klick öffnet` } }).range(from, to))
            }
            return
        }
      }
    })
  }
  return Decoration.set(ranges, true)
}

const inlinePlugin = ViewPlugin.fromClass(
  class {
    decorations: DecorationSet
    constructor(view: EditorView) {
      this.decorations = inlineDecorations(view)
    }
    update(update: ViewUpdate): void {
      if (update.docChanged || update.viewportChanged || update.selectionSet || syntaxTree(update.state) !== syntaxTree(update.startState)) {
        this.decorations = inlineDecorations(update.view)
      }
    }
  },
  { decorations: (plugin) => plugin.decorations }
)

/** Strg/Cmd+click on a link opens it; a plain click puts the cursor there to edit it. */
const linkClicks = EditorView.domEventHandlers({
  mousedown: (event, view) => {
    if (!(event.ctrlKey || event.metaKey) || event.button !== 0) return false
    const link = (event.target as HTMLElement).closest<HTMLElement>('.cm-lp-link')
    if (!link) return false
    event.preventDefault()
    const config = view.state.facet(liveConfig)
    const note = link.dataset['note']
    if (note) config.onWikiLink(note)
    else if (link.dataset['href']) config.onLink(link.dataset['href'])
    return true
  }
})

export function livePreview(config: LiveConfig): Extension {
  return [liveConfig.of(config), blockField, inlinePlugin, linkClicks]
}
