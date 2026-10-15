import { useEffect, useRef, useState, type DragEvent, type FormEvent } from 'react'
import { Folder, FolderInput, FolderOpen, FolderPlus, FilePlus, MoreHorizontal, PencilLine, Trash2, X } from 'lucide-react'
import { courseKeyOfFolder, INBOX, isSemesterFolder } from '../../../shared/notes'
import type { Course, NoteNode, NotesData } from '../../../shared/types'
import { semesterLabel } from '../../../shared/tu'
import { Callout } from '../components'
import { courseLabel, dirOf, displayName, sortForDisplay, type NoteDirNode } from '../lib/notes'

// What can be done with a file or folder of the notes, from the tree and from the folder view:
// the "…" menu, the small dialogs it opens, and dragging entries onto folders.

export type EntryAction = 'newNote' | 'newFolder' | 'import' | 'rename' | 'move' | 'trash' | 'show'

/** The Inbox and the semester folders stay where and how they are: TUWAS finds things by them. */
export const isProtected = (node: NoteNode): boolean => node.kind === 'dir' && !node.path.includes('/') && (node.name === INBOX || isSemesterFolder(node.name))

/** How a folder is called in the UI: courses by their short name, semesters as "WS 2026/27". */
export function folderLabel(node: { name: string; path: string }, courses: Course[]): string {
  if (courseKeyOfFolder(node.name)) return courseLabel(node.name, courses)
  if (!node.path.includes('/') && isSemesterFolder(node.name)) return semesterLabel(node.name)
  return node.name
}

export function entryLabel(node: NoteNode, courses: Course[]): string {
  return node.kind === 'dir' ? folderLabel(node, courses) : displayName(node.name)
}

const ACTIONS: { action: EntryAction; label: string; icon: typeof Folder; dirOnly?: boolean; editable?: boolean }[] = [
  { action: 'newNote', label: 'Neue Notiz hier', icon: FilePlus, dirOnly: true },
  { action: 'newFolder', label: 'Neuer Ordner hier', icon: FolderPlus, dirOnly: true },
  { action: 'import', label: 'Dateien hierher übernehmen …', icon: FolderInput, dirOnly: true },
  { action: 'rename', label: 'Umbenennen', icon: PencilLine, editable: true },
  { action: 'move', label: 'Verschieben nach …', icon: Folder, editable: true },
  { action: 'show', label: 'Im Dateimanager zeigen', icon: FolderOpen },
  { action: 'trash', label: 'In den Papierkorb', icon: Trash2, editable: true }
]

/** The "…" button of an entry with its menu. Esc or a click elsewhere closes it. */
export function EntryMenu(props: { node: NoteNode; label: string; onAction: (node: NoteNode, action: EntryAction) => void }) {
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (event: MouseEvent): void => {
      if (!box.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent): void => {
      if (event.key !== 'Escape') return
      setOpen(false)
      button.current?.focus()
    }
    window.addEventListener('mousedown', onDown)
    window.addEventListener('keydown', onKey)
    box.current?.querySelector<HTMLButtonElement>('[role="menuitem"]')?.focus()
    return () => {
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const locked = isProtected(props.node)
  const actions = ACTIONS.filter((entry) => (!entry.dirOnly || props.node.kind === 'dir') && (!entry.editable || !locked))
  return (
    <div className={`entry-menu${open ? ' open' : ''}`} ref={box}>
      <button
        ref={button}
        type="button"
        className="icon-button entry-menu-button"
        aria-label={`Aktionen für ${props.label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation()
          setOpen(!open)
        }}
      >
        <MoreHorizontal size={15} />
      </button>
      {open && (
        <div
          className="entry-menu-list"
          role="menu"
          aria-label={props.label}
          onKeyDown={(event) => {
            // Up and down move between the entries.
            if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
            event.preventDefault()
            const items = [...event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')]
            const index = items.indexOf(document.activeElement as HTMLButtonElement)
            items[(index + (event.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length]?.focus()
          }}
        >
          {actions.map(({ action, label, icon: Icon }) => (
            <button
              key={action}
              type="button"
              role="menuitem"
              className={action === 'trash' ? 'danger' : ''}
              onClick={(event) => {
                event.stopPropagation()
                setOpen(false)
                props.onAction(props.node, action)
              }}
            >
              <Icon size={14} aria-hidden="true" /> {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ---------- Dialogs ----------

function useEscape(onClose: () => void): void {
  const latest = useRef(onClose)
  latest.current = onClose
  useEffect(() => {
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') latest.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
}

/** Asks for a name (new folder, new note, rename). `onSubmit` returns an error to show, or null when done. */
export function NameDialog(props: {
  title: string
  label: string
  initial?: string
  hint?: string
  submitLabel: string
  onSubmit: (name: string) => Promise<string | null>
  onClose: () => void
}) {
  const [name, setName] = useState(props.initial ?? '')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  useEscape(props.onClose)

  const submit = async (event: FormEvent): Promise<void> => {
    event.preventDefault()
    if (!name.trim()) return
    setBusy(true)
    const problem = await props.onSubmit(name.trim())
    setBusy(false)
    if (problem) setError(problem)
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && props.onClose()}>
      <form className="modal card" onSubmit={(event) => void submit(event)} aria-label={props.title}>
        <div className="modal-head">
          <h2>{props.title}</h2>
          <button type="button" className="icon-button" aria-label="Schließen" onClick={props.onClose}>
            <X size={16} />
          </button>
        </div>
        <label className="field">
          <span>{props.label}</span>
          <input
            className="input"
            value={name}
            autoFocus
            spellCheck={false}
            onFocus={(event) => event.currentTarget.select()}
            onChange={(event) => setName(event.target.value)}
          />
          {props.hint && <span className="field-hint">{props.hint}</span>}
        </label>
        {error && <Callout kind="error" title={error} />}
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={props.onClose}>
            Abbrechen
          </button>
          <button type="submit" className="button" disabled={busy || !name.trim()}>
            {props.submitLabel}
          </button>
        </div>
      </form>
    </div>
  )
}

/** Picks the folder to move a file or folder into. Not offered: the folder itself, what's inside it, where it is now. */
export function MoveDialog(props: { notes: NotesData; courses: Course[]; node: NoteNode; onMove: (dir: string) => Promise<string | null>; onClose: () => void }) {
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  useEscape(props.onClose)
  const { node } = props
  const here = dirOf(node.path)
  const allowed = (dir: NoteDirNode): boolean => dir.path !== node.path && !dir.path.startsWith(`${node.path}/`)

  const rows: { dir: NoteDirNode | null; depth: number }[] = [{ dir: null, depth: 0 }]
  const walk = (nodes: NoteNode[], depth: number): void => {
    for (const child of sortForDisplay(nodes)) {
      if (child.kind !== 'dir' || !allowed(child)) continue
      rows.push({ dir: child, depth })
      walk(child.children, depth + 1)
    }
  }
  walk(props.notes.tree, 1)

  const move = async (dir: string): Promise<void> => {
    setBusy(true)
    const problem = await props.onMove(dir)
    setBusy(false)
    if (problem) setError(problem)
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && props.onClose()}>
      <div className="modal card move-dialog" role="dialog" aria-label={`${entryLabel(node, props.courses)} verschieben`}>
        <div className="modal-head">
          <h2>„{entryLabel(node, props.courses)}“ verschieben nach</h2>
          <button type="button" className="icon-button" aria-label="Schließen" onClick={props.onClose}>
            <X size={16} />
          </button>
        </div>
        <div className="move-list">
          {rows.map(({ dir, depth }) => {
            const path = dir?.path ?? ''
            return (
              <button
                key={path || '.'}
                type="button"
                className="move-row"
                style={{ paddingLeft: `${10 + depth * 16}px` }}
                disabled={busy || path === here}
                onClick={() => void move(path)}
              >
                <Folder size={14} aria-hidden="true" />
                <span>{dir ? folderLabel(dir, props.courses) : 'Notizordner (oberste Ebene)'}</span>
                {path === here && <span className="move-here">hier</span>}
              </button>
            )
          })}
        </div>
        {error && <Callout kind="error" title={error} />}
      </div>
    </div>
  )
}

// ---------- Dragging entries onto folders ----------

/** Drag type for entries of the notes (files dropped from outside come as "Files"). */
const ENTRY_TYPE = 'application/x-tuwas-note'

export function draggable(node: NoteNode): { draggable: boolean; onDragStart?: (event: DragEvent) => void } {
  if (isProtected(node)) return { draggable: false }
  return {
    draggable: true,
    onDragStart: (event) => {
      event.dataTransfer.setData(ENTRY_TYPE, node.path)
      event.dataTransfer.effectAllowed = 'move'
    }
  }
}

/** Where something was dropped: an entry of the notes (moved) or files from outside (copied in). */
export type Dropped = { kind: 'entry'; path: string } | { kind: 'files'; files: string[] }

export function dropped(event: DragEvent): Dropped | null {
  const path = event.dataTransfer.getData(ENTRY_TYPE)
  if (path) return { kind: 'entry', path }
  const files = [...event.dataTransfer.files].map((file) => window.tuwas.filePath(file)).filter(Boolean)
  return files.length > 0 ? { kind: 'files', files } : null
}

export const carriesEntryOrFiles = (event: DragEvent): boolean => event.dataTransfer.types.includes(ENTRY_TYPE) || event.dataTransfer.types.includes('Files')

/** Props for a folder that takes drops; `over` highlights it while something hovers over it. */
export function useDropTarget(dir: string, onDrop: (dir: string, what: Dropped) => void): { over: boolean; props: Record<string, (event: DragEvent) => void> } {
  const [over, setOver] = useState(false)
  return {
    over,
    props: {
      onDragOver: (event) => {
        if (!carriesEntryOrFiles(event)) return
        event.preventDefault()
        event.stopPropagation()
        event.dataTransfer.dropEffect = event.dataTransfer.types.includes(ENTRY_TYPE) ? 'move' : 'copy'
        setOver(true)
      },
      onDragLeave: () => setOver(false),
      onDrop: (event) => {
        setOver(false)
        const what = dropped(event)
        if (!what) return
        event.preventDefault()
        event.stopPropagation()
        onDrop(dir, what)
      }
    }
  }
}

/** "Really into the trash?" – for folders it says how much is inside. */
export function TrashDialog(props: { node: NoteNode; courses: Course[]; onTrash: () => Promise<string | null>; onClose: () => void }) {
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  useEscape(props.onClose)
  const label = entryLabel(props.node, props.courses)
  const files = props.node.kind === 'dir' ? countFiles(props.node.children) : 0
  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && props.onClose()}>
      <div className="modal card" role="alertdialog" aria-label={`${label} in den Papierkorb`}>
        <div className="modal-head">
          <h2>„{label}“ in den Papierkorb?</h2>
          <button type="button" className="icon-button" aria-label="Schließen" onClick={props.onClose}>
            <X size={16} />
          </button>
        </div>
        <p>
          {props.node.kind === 'dir'
            ? `Der Ordner kommt samt Inhalt (${files} ${files === 1 ? 'Datei' : 'Dateien'}) in den Papierkorb deines Systems.`
            : 'Die Datei kommt in den Papierkorb deines Systems.'}{' '}
          Von dort lässt sie sich wiederherstellen.
        </p>
        {error && <Callout kind="error" title={error} />}
        <div className="modal-actions">
          <button type="button" className="button secondary" onClick={props.onClose} autoFocus>
            Abbrechen
          </button>
          <button
            type="button"
            className="button danger"
            disabled={busy}
            onClick={async () => {
              setBusy(true)
              const problem = await props.onTrash()
              setBusy(false)
              if (problem) setError(problem)
            }}
          >
            In den Papierkorb
          </button>
        </div>
      </div>
    </div>
  )
}

function countFiles(nodes: NoteNode[]): number {
  return nodes.reduce((sum, node) => sum + (node.kind === 'dir' ? countFiles(node.children) : 1), 0)
}
