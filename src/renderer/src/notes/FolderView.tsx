import type { ReactNode } from 'react'
import { ChevronRight, File, FilePlus, FileText, Folder, FolderInput, FolderOpen, FolderPlus, Info, Presentation } from 'lucide-react'
import { COURSE_OVERVIEW, courseKeyOfFolder } from '../../../shared/notes'
import type { Course, NoteNode, NotesData } from '../../../shared/types'
import { findNode, filesIn, sortForDisplay, type NoteDirNode, type NoteFileNode } from '../lib/notes'
import { draggable, EntryMenu, entryLabel, folderLabel, useDropTarget, type Dropped, type EntryAction } from './EntryActions'

const changed = new Intl.DateTimeFormat('de-AT', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })

export interface FolderViewProps {
  notes: NotesData
  courses: Course[]
  /** The folder shown, relative to the notes folder. */
  path: string
  /** null: back to the course cards. */
  onOpenFolder: (path: string | null) => void
  onOpenFile: (node: NoteFileNode) => void
  onAction: (node: NoteNode, action: EntryAction) => void
  onDrop: (dir: string, what: Dropped) => void
}

/** A folder of the notes as a list: subfolders and files, each with its menu; files can be dragged onto folders. */
export function FolderView(props: FolderViewProps) {
  const node = findNode(props.notes.tree, props.path)
  if (!node || node.kind !== 'dir') {
    return (
      <div className="notes-empty">
        <Folder size={28} />
        <strong>Diesen Ordner gibt es nicht mehr</strong>
        <button type="button" className="button" onClick={() => props.onOpenFolder(null)}>
          Zu den Fächern
        </button>
      </div>
    )
  }
  return <FolderContents {...props} dir={node} />
}

function FolderContents(props: FolderViewProps & { dir: NoteDirNode }) {
  const { dir, courses } = props
  const key = courseKeyOfFolder(dir.name)
  const course = key ? courses.find((candidate) => candidate.key === key) : undefined
  const drop = useDropTarget(dir.path, props.onDrop)
  const children = sortForDisplay(dir.children)

  // Breadcrumb: "Notizen › WS 2026/27 › EP1 › Vorlesung"
  const parts = dir.path.split('/')
  const crumbs = parts.slice(0, -1).map((name, index) => ({ path: parts.slice(0, index + 1).join('/'), label: folderLabel({ name, path: parts.slice(0, index + 1).join('/') }, courses) }))

  return (
    <div className={`folder-view${drop.over ? ' drop-over' : ''}`} {...drop.props}>
      <header className="folder-view-head">
        <nav className="folder-crumbs" aria-label="Ordnerpfad">
          <button type="button" className="link" onClick={() => props.onOpenFolder(null)}>
            Notizen
          </button>
          {crumbs.map((crumb) => (
            <span key={crumb.path} className="folder-crumb">
              <ChevronRight size={13} aria-hidden="true" />
              <button type="button" className="link" onClick={() => props.onOpenFolder(crumb.path)}>
                {crumb.label}
              </button>
            </span>
          ))}
        </nav>
        <div className="folder-view-title">
          {course && <span className="event-swatch" style={{ background: course.color }} aria-hidden="true" />}
          <h1>{folderLabel(dir, courses)}</h1>
          <EntryMenu node={dir} label={folderLabel(dir, courses)} onAction={props.onAction} />
        </div>
        {course && <p className="folder-view-sub">{`${course.key} ${course.type ?? ''} ${course.title}`.replace(/\s+/g, ' ')}</p>}
        <div className="folder-view-actions">
          <button type="button" className="button small" onClick={() => props.onAction(dir, 'newNote')}>
            <FilePlus size={14} aria-hidden="true" /> Neue Notiz
          </button>
          <button type="button" className="button small secondary" onClick={() => props.onAction(dir, 'newFolder')}>
            <FolderPlus size={14} aria-hidden="true" /> Neuer Ordner
          </button>
          <button type="button" className="button small secondary" onClick={() => props.onAction(dir, 'import')}>
            <FolderInput size={14} aria-hidden="true" /> Dateien übernehmen
          </button>
          <button type="button" className="button small secondary" onClick={() => props.onAction(dir, 'show')}>
            <FolderOpen size={14} aria-hidden="true" /> Im Dateimanager
          </button>
        </div>
      </header>

      {children.length > 0 ? (
        <ul className="folder-list" aria-label={`Inhalt von ${folderLabel(dir, courses)}`}>
          {children.map((child) => (
            <FolderRow key={child.path} {...props} node={child} />
          ))}
        </ul>
      ) : (
        <div className="folder-empty">
          <strong>Noch leer</strong>
          <span>Leg eine Notiz oder einen Ordner an – oder zieh Markdown-Dateien, PDFs oder ganze Ordner hierher. Sie werden hineinkopiert.</span>
        </div>
      )}
      <p className="folder-hint">Dateien und Ordner lassen sich auf andere Ordner ziehen, auch in der Liste links.</p>
    </div>
  )
}

function icon(node: NoteNode): ReactNode {
  if (node.kind === 'dir') return <Folder size={16} />
  if (node.name === COURSE_OVERVIEW) return <Info size={16} />
  if (node.kind === 'pdf') return <Presentation size={16} />
  if (node.kind === 'note') return <FileText size={16} />
  return <File size={16} />
}

function FolderRow(props: FolderViewProps & { node: NoteNode }) {
  const { node } = props
  const label = entryLabel(node, props.courses)
  const drop = useDropTarget(node.path, props.onDrop)
  const meta =
    node.kind === 'dir'
      ? `${filesIn(node.children).length} ${filesIn(node.children).length === 1 ? 'Datei' : 'Dateien'}`
      : changed.format(node.modified)
  return (
    <li className={`folder-row${node.kind === 'dir' ? ' dir' : ''}${drop.over ? ' drop-over' : ''}`} {...(node.kind === 'dir' ? drop.props : {})}>
      <button
        type="button"
        className="folder-row-open"
        title={node.name}
        {...draggable(node)}
        onClick={() => (node.kind === 'dir' ? props.onOpenFolder(node.path) : props.onOpenFile(node))}
      >
        <span className="folder-row-icon" aria-hidden="true">
          {icon(node)}
        </span>
        <span className="folder-row-name">{label}</span>
        <span className="folder-row-meta">{meta}</span>
      </button>
      <EntryMenu node={node} label={label} onAction={props.onAction} />
    </li>
  )
}
