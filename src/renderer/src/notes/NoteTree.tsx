import type { ReactNode } from 'react'
import { ChevronRight, File, FileText, Folder, Inbox, Info, Presentation } from 'lucide-react'
import { COURSE_OVERVIEW, courseKeyOfFolder, INBOX } from '../../../shared/notes'
import type { Course, NoteNode, NotesData } from '../../../shared/types'
import { semesterLabel } from '../../../shared/tu'
import { courseLabel, displayName, filesIn, sortForDisplay, type NoteDirNode, type NoteFileNode } from '../lib/notes'
import { draggable, EntryMenu, useDropTarget, type Dropped, type EntryAction } from './EntryActions'

interface TreeProps {
  notes: NotesData
  courses: Course[]
  /** The open note and the PDF next to it, highlighted. */
  activePaths: string[]
  /** The folder shown in the folder view, highlighted. */
  activeFolder: string | null
  expanded: Set<string>
  onToggle: (path: string) => void
  onOpen: (node: NoteFileNode) => void
  onOpenFolder: (path: string) => void
  onAction: (node: NoteNode, action: EntryAction) => void
  onDrop: (dir: string, what: Dropped) => void
}

/**
 * Inbox first, then this semester's courses (with their colour and short name), then everything
 * else in the folder – earlier semesters, own folders – as a plain tree.
 */
export function NoteTree(props: TreeProps) {
  const { notes } = props
  const inbox = notes.tree.find((node): node is NoteDirNode => node.kind === 'dir' && node.name === INBOX)
  const semester = notes.tree.find((node): node is NoteDirNode => node.kind === 'dir' && node.name === notes.semester)
  const courseDirs = (semester?.children ?? []).filter((node): node is NoteDirNode => node.kind === 'dir' && courseKeyOfFolder(node.name) !== null)
  const semesterRest = sortForDisplay((semester?.children ?? []).filter((node) => !courseDirs.includes(node as NoteDirNode)))
  const others = notes.tree.filter((node) => node !== inbox && node !== semester)
  const byLabel = (a: NoteDirNode, b: NoteDirNode): number =>
    courseLabel(a.name, props.courses).localeCompare(courseLabel(b.name, props.courses), 'de', { numeric: true })

  return (
    <div className="note-tree" role="tree" aria-label="Notizen">
      {inbox && <TreeRow {...props} node={inbox} depth={0} icon={<Inbox size={15} />} label="Inbox" />}
      {courseDirs.length > 0 && <div className="tree-heading">{semesterLabel(notes.semester)}</div>}
      {courseDirs.sort(byLabel).map((node) => {
        const course = props.courses.find((candidate) => candidate.key === courseKeyOfFolder(node.name))
        return (
          <TreeRow
            {...props}
            key={node.path}
            node={node}
            depth={0}
            icon={<span className="tree-dot" style={{ background: course?.color ?? 'var(--text-muted)' }} />}
            label={courseLabel(node.name, props.courses)}
            title={node.name}
            course
          />
        )
      })}
      {semesterRest.map((node) => (
        <TreeRow {...props} key={node.path} node={node} depth={0} />
      ))}
      {others.length > 0 && <div className="tree-heading">Weitere Ordner</div>}
      {others.map((node) => (
        <TreeRow {...props} key={node.path} node={node} depth={0} label={node.kind === 'dir' ? semesterLabel(node.name) : undefined} />
      ))}
    </div>
  )
}

function fileIcon(node: NoteFileNode): ReactNode {
  if (node.name === COURSE_OVERVIEW) return <Info size={15} />
  if (node.kind === 'pdf') return <Presentation size={15} />
  if (node.kind === 'note') return <FileText size={15} />
  return <File size={15} />
}

type RowProps = TreeProps & { node: NoteNode; depth: number; icon?: ReactNode; label?: string; title?: string; course?: boolean }

const indent = (depth: number): { paddingLeft: string } => ({ paddingLeft: `${4 + depth * 16}px` })

function TreeRow(props: RowProps) {
  return props.node.kind === 'dir' ? <TreeDir {...props} node={props.node} /> : <TreeFile {...props} node={props.node} />
}

function TreeFile(props: RowProps & { node: NoteFileNode }) {
  const { node } = props
  const active = props.activePaths.includes(node.path)
  const label = props.label ?? displayName(node.name)
  return (
    <div className={`tree-item${active ? ' active' : ''}`} style={indent(props.depth)} role="none">
      <span className="tree-toggle" aria-hidden="true" />
      <button
        type="button"
        role="treeitem"
        className={`tree-row${active ? ' active' : ''}${node.kind === 'file' ? ' other' : ''}`}
        title={node.name}
        aria-current={active ? 'true' : undefined}
        {...draggable(node)}
        onClick={() => props.onOpen(node)}
      >
        {props.icon ?? fileIcon(node)}
        <span className="tree-label">{label}</span>
      </button>
      <EntryMenu node={node} label={label} onAction={props.onAction} />
    </div>
  )
}

function TreeDir(props: RowProps & { node: NoteDirNode }) {
  const { node, depth } = props
  const open = props.expanded.has(node.path)
  const count = filesIn(node.children).length
  const label = props.label ?? node.name
  const active = props.activeFolder === node.path
  const drop = useDropTarget(node.path, props.onDrop)
  return (
    <>
      <div className={`tree-item${active ? ' active' : ''}${drop.over ? ' drop-over' : ''}`} style={indent(depth)} role="none" {...drop.props}>
        <button
          type="button"
          className="tree-toggle"
          aria-label={open ? `${label} zuklappen` : `${label} aufklappen`}
          tabIndex={-1}
          onClick={() => props.onToggle(node.path)}
        >
          <ChevronRight size={14} className={`tree-chevron${open ? ' open' : ''}`} />
        </button>
        <button
          type="button"
          role="treeitem"
          className={`tree-row dir${props.course ? ' course' : ''}${active ? ' active' : ''}`}
          title={props.title ?? node.name}
          aria-expanded={open}
          aria-current={active ? 'true' : undefined}
          {...draggable(node)}
          onClick={() => {
            // Opens the folder on the right and shows what's in it here.
            props.onOpenFolder(node.path)
            if (!open) props.onToggle(node.path)
          }}
          onKeyDown={(event) => {
            if ((event.key === 'ArrowRight' && !open) || (event.key === 'ArrowLeft' && open)) {
              event.preventDefault()
              props.onToggle(node.path)
            }
          }}
        >
          {props.icon ?? <Folder size={15} />}
          <span className="tree-label">{label}</span>
          {!props.course && count > 0 && <span className="tree-count">{count}</span>}
        </button>
        <EntryMenu node={node} label={label} onAction={props.onAction} />
      </div>
      {open && node.children.length === 0 && (
        <div className="tree-empty" style={{ paddingLeft: `${4 + (depth + 1) * 16 + 22}px` }}>
          leer
        </div>
      )}
      {open &&
        sortForDisplay(node.children).map((child) => (
          <TreeRow
            key={child.path}
            notes={props.notes}
            courses={props.courses}
            activePaths={props.activePaths}
            activeFolder={props.activeFolder}
            expanded={props.expanded}
            onToggle={props.onToggle}
            onOpen={props.onOpen}
            onOpenFolder={props.onOpenFolder}
            onAction={props.onAction}
            onDrop={props.onDrop}
            node={child}
            depth={depth + 1}
          />
        ))}
    </>
  )
}
