import katex from 'katex'
import { syntaxTree } from '@codemirror/language'
import { Facet, StateField, type EditorState, type Extension, type Range } from '@codemirror/state'
import { Decoration, EditorView, WidgetType, type DecorationSet } from '@codemirror/view'
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

/** Above this size the note is shown as plain Markdown: every cursor move re-reads the whole note. */
// SHORTCUT: the decorations are rebuilt for the whole document on each change; fine for notes up to a few
// hundred KB. If very long notes become common, limit the work to view.visibleRanges in a ViewPlugin.
const MAX_LIVE_LENGTH = 300_000

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

// ---------- Building the decorations ----------

const hide = Decoration.replace({})
const line = (className: string): Decoration => Decoration.line({ class: className })

/** "$…$" inside a line, not "$$", not "\$". */
const INLINE_MATH = /(?<![\\$])\$(?!\s)([^$\n]+?)(?<!\s|\\)\$(?!\$)/g
const WIKI_LINK = /\[\[([^[\]|\n]+?)(?:\|([^[\]\n]+?))?\]\]/g

function build(state: EditorState): DecorationSet {
  if (state.doc.length > MAX_LIVE_LENGTH) return Decoration.none
  const config = state.facet(liveConfig)
  const ranges: Range<Decoration>[] = []
  const selection = state.selection.ranges
  /** The cursor or selection touches this range: its Markdown stays visible. */
  const touched = (from: number, to: number): boolean => selection.some((range) => range.from <= to && range.to >= from)
  /** … or the lines it is on. */
  const lineTouched = (from: number, to: number): boolean => touched(state.doc.lineAt(from).from, state.doc.lineAt(to).to)

  // Code (blocks and inline) is left alone by everything below.
  const code: { from: number; to: number }[] = []
  // Formulas are found first; Markdown inside them ("a_1 * b_2") is not Markdown.
  const math: { from: number; to: number }[] = []
  const inside = (list: { from: number; to: number }[], from: number, to: number): boolean => list.some((range) => from < range.to && to > range.from)

  const tree = syntaxTree(state)
  tree.iterate({
    enter: (node) => {
      if (node.name === 'FencedCode' || node.name === 'CodeBlock' || node.name === 'InlineCode') code.push({ from: node.from, to: node.to })
    }
  })

  // $$ … $$ over several lines, or on one line.
  for (let n = 1; n <= state.doc.lines; n++) {
    const first = state.doc.line(n)
    const text = first.text.trim()
    if (!text.startsWith('$$') || inside(code, first.from, first.to)) continue
    let last = first
    if (text === '$$') {
      let m = n + 1
      while (m <= state.doc.lines && state.doc.line(m).text.trim() !== '$$') m++
      if (m > state.doc.lines) continue
      last = state.doc.line(m)
    } else if (!(text.length > 4 && text.endsWith('$$'))) continue
    const source = state.doc.sliceString(first.from, last.to).trim()
    const tex = source.slice(2, -2).trim()
    math.push({ from: first.from, to: last.to })
    n = last.number
    if (!tex || lineTouched(first.from, last.to)) continue
    ranges.push(Decoration.replace({ widget: new MathWidget(tex, true, first.from + 2), block: true }).range(first.from, last.to))
  }

  // Inline formulas, [[links]]: line by line.
  for (let n = 1; n <= state.doc.lines; n++) {
    const current = state.doc.line(n)
    if (inside(math, current.from, current.to)) continue
    for (const match of current.text.matchAll(INLINE_MATH)) {
      const from = current.from + match.index!
      const to = from + match[0].length
      if (inside(code, from, to)) continue
      math.push({ from, to })
      if (!touched(from, to)) ranges.push(Decoration.replace({ widget: new MathWidget(match[1]!, false, from + 1) }).range(from, to))
    }
    for (const match of current.text.matchAll(WIKI_LINK)) {
      const from = current.from + match.index!
      const to = from + match[0].length
      if (inside(code, from, to) || inside(math, from, to)) continue
      const target = match[1]!.trim()
      const textFrom = match[2] ? to - 2 - match[2].length : from + 2
      ranges.push(Decoration.mark({ class: 'cm-lp-link cm-lp-wiki', attributes: { 'data-note': target, title: `${target} – Strg+Klick öffnet` } }).range(textFrom, to - 2))
      if (touched(from, to)) continue
      ranges.push(hide.range(from, textFrom), hide.range(to - 2, to))
    }
  }

  tree.iterate({
    enter: (node) => {
      const { from, to, name } = node
      // Nothing inside a formula is Markdown; what merely contains one (a paragraph, a list item) still is.
      if (math.some((range) => from >= range.from && to <= range.to)) return false
      switch (name) {
        case 'FencedCode':
        case 'CodeBlock':
          for (let pos = from; pos <= to; ) {
            const current = state.doc.lineAt(pos)
            ranges.push(line('cm-lp-codeblock').range(current.from))
            pos = current.to + 1
          }
          return false
        case 'Table': {
          const first = state.doc.lineAt(from)
          const last = state.doc.lineAt(to)
          if (lineTouched(from, to)) return false
          const source = state.doc.sliceString(first.from, last.to)
          ranges.push(Decoration.replace({ widget: new TableWidget(source, config.dir(), first.from), block: true }).range(first.from, last.to))
          return false
        }
        case 'InlineCode':
          ranges.push(Decoration.mark({ class: 'cm-lp-inline-code' }).range(from, to))
          if (!touched(from, to)) {
            const marks = node.node.getChildren('CodeMark')
            for (const mark of marks) ranges.push(hide.range(mark.from, mark.to))
          }
          return false
        case 'HeaderMark': {
          // "## " including the space; setext underlines ("===") stay.
          const current = state.doc.lineAt(from)
          if (current.text.trimStart().startsWith('#') && !lineTouched(from, to)) {
            const end = Math.min(current.to, to + (state.doc.sliceString(to, to + 1) === ' ' ? 1 : 0))
            ranges.push(hide.range(from, end))
          }
          return
        }
        case 'EmphasisMark':
        case 'StrikethroughMark': {
          const parent = node.node.parent
          if (parent && !touched(parent.from, parent.to)) ranges.push(hide.range(from, to))
          return
        }
        case 'QuoteMark':
          ranges.push(line('cm-lp-quote').range(state.doc.lineAt(from).from))
          if (!lineTouched(from, to)) ranges.push(hide.range(from, Math.min(state.doc.lineAt(from).to, to + (state.doc.sliceString(to, to + 1) === ' ' ? 1 : 0))))
          return
        case 'HorizontalRule':
          if (!lineTouched(from, to)) ranges.push(Decoration.replace({ widget: new TextWidget('', 'cm-lp-hr') }).range(from, to))
          return
        case 'ListMark': {
          if (lineTouched(from, to)) return
          const item = node.node.parent
          const task = item?.getChild('Task')?.getChild('TaskMarker')
          const marker = state.doc.sliceString(from, to)
          if (task) {
            // "- [ ] " becomes a checkbox.
            const checked = state.doc.sliceString(task.from + 1, task.from + 2).toLowerCase() === 'x'
            ranges.push(hide.range(from, task.from))
            ranges.push(Decoration.replace({ widget: new CheckboxWidget(checked, task.from + 1) }).range(task.from, task.to))
            if (checked && item) ranges.push(Decoration.mark({ class: 'cm-lp-done' }).range(task.to, state.doc.lineAt(task.to).to))
          } else if (/^[-*+]$/.test(marker)) {
            ranges.push(Decoration.replace({ widget: new TextWidget('•', 'cm-lp-bullet') }).range(from, to))
          }
          return
        }
        case 'Image': {
          if (touched(from, to)) return false
          const text = state.doc.sliceString(from, to)
          const match = /^!\[([^\]]*)\]\(\s*<?([^)>\s]+)>?(?:\s+"[^"]*")?\s*\)$/.exec(text)
          if (!match) return false
          const src = /^[a-z][a-z0-9+.-]*:/i.test(match[2]!) ? match[2]! : noteFileUrl(resolveRelative(config.dir(), match[2]!))
          ranges.push(Decoration.replace({ widget: new ImageWidget(src, match[1]!) }).range(from, to))
          return false
        }
        case 'Link': {
          const marks = node.node.getChildren('LinkMark')
          const url = node.node.getChild('URL')
          if (marks.length < 2) return
          const href = url ? state.doc.sliceString(url.from, url.to) : ''
          ranges.push(Decoration.mark({ class: 'cm-lp-link', attributes: { 'data-href': href, title: `${href} – Strg+Klick öffnet` } }).range(marks[0]!.to, marks[1]!.from))
          if (!touched(from, to)) ranges.push(hide.range(marks[0]!.from, marks[0]!.to), hide.range(marks[1]!.from, to))
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

  return Decoration.set(ranges, true)
}

const decorations = StateField.define<DecorationSet>({
  create: build,
  update: (value, transaction) => (transaction.docChanged || transaction.selection ? build(transaction.state) : value),
  provide: (field) => EditorView.decorations.from(field)
})

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
  return [liveConfig.of(config), decorations, linkClicks]
}
