import { FilePlus, Folder, FolderInput, FolderPlus, Inbox } from 'lucide-react'
import { COURSE_OVERVIEW, courseKeyOfFolder, INBOX } from '../../../shared/notes'
import type { Course, NoteNode, NotesData } from '../../../shared/types'
import { semesterLabel } from '../../../shared/tu'
import { courseLabel, displayName, filesIn, type NoteDirNode, type NoteFileNode } from '../lib/notes'
import { EntryMenu, folderLabel, useDropTarget, type Dropped, type EntryAction } from './EntryActions'

const isDir = (node: NoteNode): node is NoteDirNode => node.kind === 'dir'
const shortDate = new Intl.DateTimeFormat('de-AT', { day: 'numeric', month: 'short' })

/** "heute", "gestern", "vor 3 Tagen", else the date. */
function when(modified: number, now: Date): string {
  const days = Math.floor((new Date(now).setHours(0, 0, 0, 0) - new Date(modified).setHours(0, 0, 0, 0)) / 86_400_000)
  if (days <= 0) return 'heute'
  if (days === 1) return 'gestern'
  if (days < 7) return `vor ${days} Tagen`
  return shortDate.format(modified)
}

const plural = (count: number, one: string, many: string): string => `${count} ${count === 1 ? one : many}`

function contents(dir: NoteDirNode): { notes: NoteFileNode[]; pdfs: number } {
  const files = filesIn(dir.children)
  return { notes: files.filter((file) => file.kind === 'note' && file.name !== COURSE_OVERVIEW), pdfs: files.filter((file) => file.kind === 'pdf').length }
}

export interface HomeProps {
  notes: NotesData
  courses: Course[]
  now: Date
  onOpenFolder: (path: string) => void
  onOpenNote: (path: string) => void
  onAction: (node: NoteNode, action: EntryAction) => void
  onDrop: (dir: string, what: Dropped) => void
  /** New note with the dialog (course, template). */
  onNewNote: () => void
}

/** The start of the notes: a card per course of this semester as the way into its folder, the Inbox, other folders. */
export function NotesHome(props: HomeProps) {
  const { notes, courses } = props
  const semester = notes.tree.find((node): node is NoteDirNode => isDir(node) && node.name === notes.semester)
  const courseDirs = (semester?.children ?? [])
    .filter((node): node is NoteDirNode => isDir(node) && courseKeyOfFolder(node.name) !== null)
    .sort((a, b) => courseLabel(a.name, courses).localeCompare(courseLabel(b.name, courses), 'de', { numeric: true }))
  const inbox = notes.tree.find((node): node is NoteDirNode => isDir(node) && node.name === INBOX)
  const others = [
    ...(semester?.children ?? []).filter((node): node is NoteDirNode => isDir(node) && !courseDirs.includes(node)),
    ...notes.tree.filter((node): node is NoteDirNode => isDir(node) && node !== inbox && node !== semester)
  ]

  return (
    <div className="notes-home">
      <header className="notes-home-head">
        <div>
          <h1>Notizen</h1>
          <p>{semesterLabel(notes.semester)} · ein Ordner pro Fach, darin deine Markdown-Dateien</p>
        </div>
        <div className="notes-home-actions">
          <button type="button" className="button" onClick={props.onNewNote}>
            <FilePlus size={15} aria-hidden="true" /> Neue Notiz
          </button>
          <button type="button" className="button secondary" onClick={() => props.onAction({ kind: 'dir', path: '', name: '', children: notes.tree }, 'newFolder')}>
            <FolderPlus size={15} aria-hidden="true" /> Neuer Ordner
          </button>
          <button type="button" className="button secondary" onClick={() => inbox && props.onAction(inbox, 'import')} disabled={!inbox}>
            <FolderInput size={15} aria-hidden="true" /> Dateien übernehmen
          </button>
        </div>
      </header>

      {courseDirs.length > 0 ? (
        <section aria-label="Fächer" className="course-cards">
          {courseDirs.map((dir) => (
            <CourseCard key={dir.path} {...props} dir={dir} course={courses.find((course) => course.key === courseKeyOfFolder(dir.name))} />
          ))}
          {inbox && <CourseCard {...props} dir={inbox} inbox />}
        </section>
      ) : (
        <p className="notes-home-empty">
          Noch keine Fächer in diesem Semester. Mit verbundenem TISS-Kalender bekommt jedes Fach automatisch seinen Ordner – oder leg selbst
          einen an.
        </p>
      )}

      {others.length > 0 && (
        <section className="notes-home-others" aria-labelledby="notes-home-others">
          <h2 id="notes-home-others">Weitere Ordner</h2>
          <div className="folder-chips">
            {others.map((dir) => (
              <FolderChip key={dir.path} {...props} dir={dir} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function CourseCard(props: HomeProps & { dir: NoteDirNode; course?: Course; inbox?: boolean }) {
  const { dir, course } = props
  const label = props.inbox ? 'Inbox' : folderLabel(dir, props.courses)
  const { notes, pdfs } = contents(dir)
  const recent = [...notes].sort((a, b) => b.modified - a.modified).slice(0, 3)
  const drop = useDropTarget(dir.path, props.onDrop)
  return (
    <article className={`course-card${drop.over ? ' drop-over' : ''}${props.inbox ? ' inbox' : ''}`} {...drop.props}>
      <div className="course-card-head">
        <button type="button" className="course-card-open" onClick={() => props.onOpenFolder(dir.path)}>
          {props.inbox ? (
            <Inbox size={15} aria-hidden="true" className="course-card-icon" />
          ) : (
            <span className="event-swatch" style={{ background: course?.color ?? 'var(--text-muted)' }} aria-hidden="true" />
          )}
          <span className="course-card-name">{label}</span>
        </button>
        <EntryMenu node={dir} label={label} onAction={props.onAction} />
      </div>
      <p className="course-card-title">
        {props.inbox ? 'Schnellnotizen, die noch in ein Fach gehören' : course ? `${course.key} ${course.type ?? ''} ${course.title}`.replace(/\s+/g, ' ') : dir.name}
      </p>
      <p className="course-card-count">
        {plural(notes.length, 'Notiz', 'Notizen')}
        {pdfs > 0 && ` · ${plural(pdfs, 'PDF', 'PDFs')}`}
      </p>
      {recent.length > 0 ? (
        <ul className="course-card-recent" aria-label={`Zuletzt bearbeitet in ${label}`}>
          {recent.map((note) => (
            <li key={note.path}>
              <button type="button" onClick={() => props.onOpenNote(note.path)} title={note.path}>
                <span className="course-card-note">{displayName(note.name)}</span>
                <span className="course-card-when">{when(note.modified, props.now)}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="course-card-empty">Noch leer</p>
      )}
    </article>
  )
}

function FolderChip(props: HomeProps & { dir: NoteDirNode }) {
  const label = folderLabel(props.dir, props.courses)
  const drop = useDropTarget(props.dir.path, props.onDrop)
  return (
    <div className={`folder-chip${drop.over ? ' drop-over' : ''}`} {...drop.props}>
      <button type="button" onClick={() => props.onOpenFolder(props.dir.path)} title={props.dir.path}>
        <Folder size={14} aria-hidden="true" />
        <span>{label}</span>
        <span className="tree-count">{filesIn(props.dir.children).length}</span>
      </button>
      <EntryMenu node={props.dir} label={label} onAction={props.onAction} />
    </div>
  )
}
