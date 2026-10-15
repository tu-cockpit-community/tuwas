import { app } from 'electron'
import { spawn, type ChildProcess } from 'node:child_process'
import { existsSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { join } from 'node:path'
import { mergeLernenCourses, lvaKey, type CourseSource, type LernenVorgabe } from '../shared/lernenKurse'
import type { LernenStatus } from '../shared/types'
import { calendarData } from './calendar'
import { getSettings } from './settings'
import { studiesData } from './studies'
import { tasksData } from './tasks'

// The Lernen tab shows the separate Lernen project (a Next.js app) inside TUWAS. TUWAS starts it on demand as a
// local server on 127.0.0.1 and stops it on quit. TUWAS_LERNEN_URL points at an already running one instead.

const READY_TIMEOUT_MS = 60_000

let child: ChildProcess | null = null
let pending: Promise<LernenStatus> | null = null
let ready: LernenStatus | null = null

/** Folder of the Lernen project: TUWAS_LERNEN_DIR, otherwise lernen/ next to the app (development). */
function projectDir(): string | null {
  const candidates = [process.env['TUWAS_LERNEN_DIR'], join(app.getAppPath(), 'lernen')]
  return candidates.find((dir): dir is string => Boolean(dir) && existsSync(join(dir as string, 'package.json'))) ?? null
}

/** What the Lernen server needs from TUWAS, as a file it reads on every request: the user's courses and the SBP setting. */
function enrolledFile(): string {
  return join(app.getPath('userData'), 'lernen-angemeldet.json')
}

/** One source of courses; a failing source counts as empty so that the others still get through. */
function safely(read: () => CourseSource[]): CourseSource[] {
  try {
    return read()
  } catch {
    return []
  }
}

/**
 * Every course TUWAS knows for the user, best source first: the TISS calendar, the grade overview (earlier semesters
 * and courses added by hand), then TUWEL (courses it lists deadlines for). Courses hidden in the calendar stay hidden.
 */
function knownCourses(): CourseSource[][] {
  const hidden = new Set(safely(() => calendarData().courses.filter((course) => course.hidden).map((course) => ({ lva: course.key }))).map((c) => lvaKey(c.lva)))
  const visible = (source: CourseSource[]): CourseSource[] => source.filter((course) => !hidden.has(lvaKey(course.lva)))
  return [
    visible(safely(() => calendarData().courses.map((course) => ({ lva: course.key, titel: course.title, typ: course.type, ects: course.ects })))),
    visible(safely(() => studiesData().courses.map((course) => ({ lva: course.key, titel: course.title, typ: course.type, ects: course.ects, semester: course.semester })))),
    visible(safely(() => tasksData().tasks.flatMap((task) => (task.courseKey ? [{ lva: task.courseKey, titel: task.courseName ?? undefined }] : []))))
  ]
}

/** Keeps the Lernen tab in step with the user's courses and settings. Called at start and whenever they change. */
export function syncLernenCourses(): void {
  try {
    const kurse = mergeLernenCourses(knownCourses())
    const vorgabe: LernenVorgabe = { version: 2, lvas: kurse.map((kurs) => kurs.lva), kurse, sbp: getSettings().lernenSbp }
    const text = JSON.stringify(vorgabe)
    if (existsSync(enrolledFile()) && readFileSync(enrolledFile(), 'utf8') === text) return
    // Write and rename, so the server, which reads the file on every request, never sees it half-written.
    const temp = `${enrolledFile()}.tmp`
    writeFileSync(temp, text)
    renameSync(temp, enrolledFile())
  } catch {
    // The Lernen app keeps the last file it read; without any, it shows everything with content.
  }
}

/** The server's process id. A TUWAS that was killed (crash, kill -9) cannot stop it, and it would keep the port. */
function pidFile(): string {
  return join(app.getPath('userData'), 'lernen-server.pid')
}

/** Stops a Lernen server a previous TUWAS left behind, so the preferred port is free again. Linux only: it checks
 * /proc to be sure the process still is a Next server before stopping it. */
async function stopLeftover(): Promise<void> {
  try {
    const pid = Number(readFileSync(pidFile(), 'utf8'))
    rmSync(pidFile(), { force: true })
    if (!Number.isInteger(pid) || pid <= 1 || !readFileSync(`/proc/${pid}/cmdline`, 'utf8').includes('next-server')) return
    process.kill(pid, 'SIGTERM')
    for (let waited = 0; waited < 2000 && existsSync(`/proc/${pid}`); waited += 100) await new Promise((resolve) => setTimeout(resolve, 100))
  } catch {
    // No file, no such process, or not Linux: nothing left over.
  }
}

const unavailable = (message: string): LernenStatus => ({ state: 'unavailable', message })

/** The port the Lernen server prefers. Progress lives in the browser storage of the frame, which belongs to the
 * origin (host and port), so a port that changes on every start would lose it. */
const PREFERRED_PORT = 47821

function listenOn(port: number): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = createServer()
    server.once('error', reject)
    server.listen(port, '127.0.0.1', () => {
      const { port: bound } = server.address() as { port: number }
      server.close(() => resolve(bound))
    })
  })
}

/** The preferred port if it is free, otherwise any free one. */
function freePort(): Promise<number> {
  return listenOn(PREFERRED_PORT).catch(() => listenOn(0))
}

async function waitUntilServing(url: string, server: ChildProcess): Promise<boolean> {
  const deadline = Date.now() + READY_TIMEOUT_MS
  while (Date.now() < deadline) {
    if (server.exitCode !== null) return false
    try {
      if ((await fetch(url, { signal: AbortSignal.timeout(30_000) })).ok) return true
    } catch {
      // not up yet
    }
    await new Promise((resolve) => setTimeout(resolve, 400))
  }
  return false
}

async function launch(): Promise<LernenStatus> {
  const external = process.env['TUWAS_LERNEN_URL']
  if (external) return { state: 'ready', url: external.replace(/\/$/, '') }

  const dir = projectDir()
  if (!dir) return unavailable('Das Lernen-Projekt wurde nicht gefunden. Lege es nach lernen/ oder setze TUWAS_LERNEN_DIR.')
  if (!existsSync(join(dir, '.next', 'BUILD_ID'))) return unavailable(`Das Lernen-Projekt ist noch nicht gebaut. Im Ordner ${dir}: npm install && npm run build`)

  syncLernenCourses()
  await stopLeftover()
  const port = await freePort()
  const url = `http://127.0.0.1:${port}`
  let output = ''
  const server = spawn('node', [join(dir, 'node_modules', 'next', 'dist', 'bin', 'next'), 'start', '-p', String(port), '-H', '127.0.0.1'], {
    cwd: dir,
    env: { ...process.env, TUWAS_ANGEMELDET: enrolledFile(), LERNEN_DATEN: join(app.getPath('userData'), 'lernen-fortschritt') },
    stdio: ['ignore', 'pipe', 'pipe']
  })
  child = server
  if (server.pid) writeFileSync(pidFile(), String(server.pid))
  for (const stream of [server.stdout, server.stderr]) stream.on('data', (chunk: Buffer) => (output = (output + chunk.toString()).slice(-600)))
  const failed = new Promise<string>((resolve) => {
    server.once('error', (error: NodeJS.ErrnoException) => resolve(error.code === 'ENOENT' ? 'Node.js wurde nicht gefunden. Es muss im PATH liegen.' : error.message))
    server.once('exit', (code) => {
      rmSync(pidFile(), { force: true })
      child = null
      ready = null
      resolve(`Der Lernen-Server wurde beendet (Code ${code}). ${output.trim().split('\n').slice(-2).join(' ')}`)
    })
  })

  const up = await Promise.race([waitUntilServing(`${url}/lernen`, server), failed.then(() => false)])
  if (up) return { state: 'ready', url }
  server.kill()
  return unavailable(await Promise.race([failed, Promise.resolve('Der Lernen-Server ist nicht rechtzeitig gestartet.')]))
}

/** Marks that the Lernen tab has been used, so that the server is warmed up at the next app start. */
const usedMarker = (): string => join(app.getPath('userData'), 'lernen-benutzt')

/** The tab asks for the server: remembers that it is used, then starts it. */
export function openLernen(): Promise<LernenStatus> {
  try {
    writeFileSync(usedMarker(), '')
  } catch {
    // Without the marker the server is only started on demand, as before.
  }
  return startLernen()
}

/** At app start: warms the server up if the tab has been used before (the first page view takes seconds), otherwise leaves it off. */
export function warmUpLernen(): void {
  if (existsSync(usedMarker())) void startLernen()
}

/** Starts the Lernen server if needed. Concurrent calls share one start. */
export function startLernen(): Promise<LernenStatus> {
  if (ready && child) return Promise.resolve(ready)
  pending ??= launch()
    .then((status) => (ready = status.state === 'ready' ? status : null) ?? status)
    .finally(() => {
      pending = null
    })
  return pending
}

/** Stops the Lernen server (also called when the app exits without a regular quit, e.g. in the smoke test). */
export function stopLernen(): void {
  child?.kill()
  child = null
  ready = null
}

app.on('before-quit', stopLernen)
