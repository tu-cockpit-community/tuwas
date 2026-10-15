import { app, BrowserWindow, ipcMain, Notification, nativeTheme, screen, shell, type IpcMainEvent, type Rectangle } from 'electron'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DARK_PALETTES, LIGHT_PALETTES, palette } from '../shared/themes'
import { IPC, type View } from '../shared/types'
import { readJson, writeJson } from './jsonFile'
import { preloadPath, rendererHtml, resourcePath, windowIcon } from './paths'
import { getSettings, updateSettings } from './settings'

const MINI_SIZE = { width: 360, height: 560 }
const MINI_MARGIN = 8
/** A click on the tray icon first blurs (and thereby hides) an open mini window – don't reopen it right away. */
const REOPEN_GUARD_MS = 300
/** GNOME opens the tray menu only after the double-click time; a click that just closed the mini view shouldn't bring it back with the menu. */
const MENU_REOPEN_GUARD_MS = 1500

let mainWindow: BrowserWindow | null = null
let miniWindow: BrowserWindow | null = null
let miniHiddenAt = 0
let quitting = false
let onMainClosed: (() => void) | null = null
const miniListeners: (() => void)[] = []

app.on('before-quit', () => {
  quitting = true
})

/** Called when the user closes the main window (not when the app quits). */
export function setOnMainClosed(listener: () => void): void {
  onMainClosed = listener
}

/** The page background of the chosen colour scheme – shown before the page has loaded. */
function backgroundColor(): string {
  const { lightPalette, darkPalette } = getSettings()
  return nativeTheme.shouldUseDarkColors ? palette(DARK_PALETTES, darkPalette).background : palette(LIGHT_PALETTES, lightPalette).background
}

let followingSystem = false

/** Light, dark or as the system says (that also switches the pages' prefers-color-scheme). */
export function applyTheme(): void {
  nativeTheme.themeSource = getSettings().themeMode
  for (const win of BrowserWindow.getAllWindows()) win.setBackgroundColor(backgroundColor())
  if (followingSystem) return
  followingSystem = true
  // The system switched between light and dark.
  nativeTheme.on('updated', () => {
    for (const win of BrowserWindow.getAllWindows()) win.setBackgroundColor(backgroundColor())
  })
}

/** The URL hash tells the page which window it is and what to show: "mini", "calendar", "notes:<note path>". */
function load(win: BrowserWindow, hash: string): void {
  const devServer = process.env['ELECTRON_RENDERER_URL']
  if (!app.isPackaged && devServer) void win.loadURL(`${devServer}#${hash}`)
  else void win.loadFile(rendererHtml(), { hash })
}

/** Only TUWAS's own page – not, say, a file dropped onto the window. */
function isAppUrl(url: string): boolean {
  const devServer = process.env['ELECTRON_RENDERER_URL']
  if (!app.isPackaged && devServer) return url.startsWith(devServer)
  try {
    return url.startsWith('file:') && fileURLToPath(url.split('#')[0]!) === rendererHtml()
  } catch {
    return false
  }
}

/** Web and mail links go to the browser or mail program. */
const isExternal = (url: string): boolean => /^(https?|mailto):/i.test(url)

/** Shared by both windows: links open in the browser, keyboard shortcuts. */
function setUpWebContents(win: BrowserWindow): void {
  const contents = win.webContents
  contents.setWindowOpenHandler(({ url }) => {
    if (isExternal(url)) void shell.openExternal(url)
    return { action: 'deny' }
  })
  contents.on('will-navigate', (event) => {
    if (isAppUrl(event.url)) return
    event.preventDefault()
    if (isExternal(event.url)) void shell.openExternal(event.url)
  })
  contents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return
    const key = input.key.toLowerCase()
    // Strg on Linux and Windows, Cmd on the Mac.
    const command = process.platform === 'darwin' ? input.meta : input.control
    if (command && key === 'q') {
      event.preventDefault()
      app.quit()
    } else if (command && key === 'w') {
      event.preventDefault()
      win.close()
    } else if (key === 'escape' && win === miniWindow) {
      hideMini()
    } else if (key === 'f12' && !app.isPackaged) {
      contents.toggleDevTools()
    }
  })
}

const MAIN_MIN = { width: 760, height: 520 }
/** Below this window width the page is shown at 100 %; wider windows scale up with it (see fitZoom). */
const ZOOM_FROM_WIDTH = 1500
const MAX_ZOOM = 1.6

interface WindowState {
  width: number
  height: number
}

const stateFile = (): string => join(app.getPath('userData'), 'window.json')

const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max)

/** A window about as big as the screen is a maximized one: it cannot be moved, so it is never restored. */
const fillsScreen = (width: number, height: number, area: Rectangle): boolean => width >= area.width * 0.95 && height >= area.height * 0.95

/** The saved size, or a size that fits the screen. The place is left to the window manager: restoring it drifts by the frame on X11. */
function initialState(): WindowState {
  const area = screen.getPrimaryDisplay().workArea
  const saved = readJson(stateFile()) as Partial<WindowState> | undefined
  const number = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value)
  if (saved && number(saved.width) && number(saved.height) && saved.width >= MAIN_MIN.width && saved.height >= MAIN_MIN.height && !fillsScreen(saved.width, saved.height, area)) {
    return { width: saved.width, height: saved.height }
  }
  return {
    width: Math.min(area.width, clamp(Math.round(area.width * 0.62), 1100, 1500)),
    height: Math.min(area.height, clamp(Math.round(area.height * 0.8), 720, 1000))
  }
}

/** Remembers the size across restarts (not while maximized: that state is the system's, not the user's size). */
function rememberState(win: BrowserWindow): void {
  let timer: NodeJS.Timeout | undefined
  const save = (): void => {
    if (win.isDestroyed() || win.isMinimized() || win.isFullScreen() || win.isMaximized()) return
    const { x, y, width, height } = win.getBounds()
    if (fillsScreen(width, height, screen.getDisplayMatching({ x, y, width, height }).workArea)) return
    try {
      writeJson(stateFile(), { width, height })
    } catch {
      // The window just opens at its default size next time.
    }
  }
  const later = (): void => {
    clearTimeout(timer)
    timer = setTimeout(save, 500)
  }
  win.on('resize', later)
  win.on('unmaximize', later)
  win.on('close', save)
}

/** On large screens (a maximized window on a 2880 px display) the 14 px interface looks lost: scale it with the window. */
function fitZoom(win: BrowserWindow): void {
  if (win.isDestroyed()) return
  const zoom = clamp(Math.round((win.getContentSize()[0] / ZOOM_FROM_WIDTH) * 20) / 20, 1, MAX_ZOOM)
  if (win.webContents.getZoomFactor() !== zoom) win.webContents.setZoomFactor(zoom)
}

export function createMainWindow(view: View, show = true, note?: string): BrowserWindow {
  const state = initialState()
  const win = new BrowserWindow({
    width: state.width,
    height: state.height,
    minWidth: MAIN_MIN.width,
    minHeight: MAIN_MIN.height,
    show: false,
    title: 'TUWAS',
    icon: windowIcon(),
    backgroundColor: backgroundColor(),
    // plugins: Chromium's PDF viewer, for slides next to a note.
    webPreferences: { preload: preloadPath(), sandbox: true, contextIsolation: true, plugins: true }
  })
  rememberState(win)
  // The size is only final a moment after the event (maximizing reports the old size at first), so fit after a short pause.
  let fitTimer: NodeJS.Timeout | undefined
  const fitSoon = (): void => {
    fitZoom(win)
    clearTimeout(fitTimer)
    fitTimer = setTimeout(() => fitZoom(win), 200)
  }
  win.on('resize', fitSoon)
  win.on('maximize', fitSoon)
  win.on('unmaximize', fitSoon)
  win.on('restore', fitSoon)
  win.on('enter-full-screen', fitSoon)
  win.on('leave-full-screen', fitSoon)
  win.webContents.on('did-finish-load', fitSoon)
  if (show) win.once('ready-to-show', () => win.show())
  // Closing destroys the window to free memory; the app itself keeps running in the tray.
  win.on('closed', () => {
    mainWindow = null
    syncDock()
    if (!quitting) onMainClosed?.()
  })
  setUpWebContents(win)
  load(win, note ? `${view}:${encodeURIComponent(note)}` : view)
  mainWindow = win
  syncDock()
  return win
}

/** macOS: a Dock icon only while the main window is open – otherwise TUWAS lives in the menu bar. */
export function syncDock(): void {
  if (process.platform !== 'darwin' || !app.dock) return
  if (mainWindow) void app.dock.show()
  else app.dock.hide()
}

export function showMain(view?: View, note?: string): void {
  if (!mainWindow) {
    createMainWindow(view ?? 'today', true, note)
    return
  }
  if (view) mainWindow.webContents.send(IPC.navigate, view, note)
  if (mainWindow.isMinimized()) mainWindow.restore()
  mainWindow.show()
  mainWindow.focus()
}

/** The small Toolbox-like window. Created once and only hidden, so it opens instantly. */
export function createMiniWindow(): BrowserWindow {
  const win = new BrowserWindow({
    ...MINI_SIZE,
    show: false,
    frame: false,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    title: 'TUWAS',
    backgroundColor: backgroundColor(),
    webPreferences: { preload: preloadPath(), sandbox: true, contextIsolation: true }
  })
  win.on('blur', () => hideMini())
  win.on('close', (event) => {
    if (quitting) return
    event.preventDefault()
    hideMini()
  })
  win.on('closed', () => {
    miniWindow = null
  })
  setUpWebContents(win)
  load(win, 'mini')
  miniWindow = win
  return win
}

/**
 * Under the tray icon: Windows and macOS tell where it is (the Windows taskbar is usually at the
 * bottom, so then the window opens above it). Otherwise top right, below GNOME's top bar – or
 * bottom right on Windows. Needs X11/XWayland on Linux to have an effect.
 */
export function positionMini(win: BrowserWindow, anchor?: Rectangle): void {
  const display = anchor ? screen.getDisplayNearestPoint({ x: anchor.x, y: anchor.y }) : screen.getPrimaryDisplay()
  const area = display.workArea
  const right = area.x + area.width - MINI_SIZE.width - MINI_MARGIN
  const atBottom = anchor ? anchor.y > area.y + area.height / 2 : process.platform === 'win32'
  const x = anchor ? Math.round(anchor.x + anchor.width / 2 - MINI_SIZE.width / 2) : right
  win.setPosition(
    Math.min(Math.max(x, area.x + MINI_MARGIN), right),
    atBottom ? area.y + area.height - MINI_SIZE.height - MINI_MARGIN : area.y + MINI_MARGIN
  )
}

export const isMiniVisible = (): boolean => miniWindow?.isVisible() ?? false

/** Called whenever the mini window appears or goes (the tray menu shows it as a tick). */
export function onMiniVisibility(listener: () => void): void {
  miniListeners.push(listener)
}

/** `focus`: false keeps the focus where it is, e.g. in GNOME's open tray menu. */
function showMini(anchor: Rectangle | undefined, focus: boolean): void {
  const win = miniWindow ?? createMiniWindow()
  positionMini(win, anchor)
  if (focus) win.show()
  else win.showInactive()
  // Window managers may place a newly mapped window themselves; insist on our spot.
  positionMini(win, anchor)
  if (focus) win.focus()
  for (const listener of miniListeners) listener()
}

/** `anchor`: where the tray icon is, if the system says so. */
export function toggleMini(anchor?: Rectangle): void {
  if (isMiniVisible()) {
    hideMini()
    return
  }
  if (Date.now() - miniHiddenAt < REOPEN_GUARD_MS) return
  showMini(anchor, true)
}

/**
 * The main window was closed: the small window takes over (like the JetBrains Toolbox) – with
 * focus, so a click anywhere else sends it to the tray icon. Can be switched off in the settings.
 */
export function miniTakesOver(): void {
  if (getSettings().miniOnClose) showMini(undefined, true)
}

/**
 * GNOME: a click on the tray icon opened its menu – the mini view comes along. It doesn't take
 * the focus from the menu, so it stays until it is unticked there ("Mini-Ansicht"), or until it
 * was clicked into and then away from.
 */
export function showMiniWithMenu(): void {
  if (isMiniVisible() || Date.now() - miniHiddenAt < MENU_REOPEN_GUARD_MS) return
  showMini(undefined, false)
}

export function hideMini(): void {
  if (!miniWindow?.isVisible()) return
  miniWindow.hide()
  miniHiddenAt = Date.now()
  for (const listener of miniListeners) listener()
}

/**
 * A note as PDF: a hidden window renders it like the preview (page "print:<path>", always light),
 * says when formulas and pictures are there, then Chromium prints it.
 */
export async function printNote(path: string): Promise<Buffer> {
  const win = new BrowserWindow({ show: false, width: 900, height: 1200, webPreferences: { preload: preloadPath(), sandbox: true, contextIsolation: true } })
  let onReady: ((event: IpcMainEvent) => void) | null = null
  try {
    const ready = new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error('Die Notiz ließ sich nicht für den Druck aufbereiten.')), 20_000)
      onReady = (event) => {
        if (event.sender !== win.webContents) return
        clearTimeout(timer)
        resolve()
      }
      ipcMain.on(IPC.printReady, onReady)
    })
    load(win, `print:${encodeURIComponent(path)}`)
    await ready
    return await win.webContents.printToPDF({ pageSize: 'A4', printBackground: true, margins: { top: 0.6, bottom: 0.6, left: 0.7, right: 0.7 } })
  } finally {
    if (onReady) ipcMain.removeListener(IPC.printReady, onReady)
    win.destroy()
  }
}

/** Where the tray icon sits, for texts. */
export function trayPlace(): string {
  if (process.platform === 'win32') return 'unten rechts in der Taskleiste (eventuell hinter dem Pfeil ^)'
  if (process.platform === 'darwin') return 'oben rechts in der Menüleiste'
  return 'oben rechts in der Leiste'
}

export function notifyRunningInBackground(): void {
  if (getSettings().closeHintShown || !Notification.isSupported()) return
  const quit = process.platform === 'darwin' ? 'Cmd+Q' : 'Strg+Q'
  new Notification({
    title: 'TUWAS läuft im Hintergrund weiter',
    body: `Das Symbol ${trayPlace()} öffnet die Mini-Ansicht. Ganz beenden: ${quit} oder „Beenden“ im Menü des Symbols.`,
    icon: resourcePath('icon.png')
  }).show()
  updateSettings({ closeHintShown: true })
}

export function broadcast(channel: string): void {
  for (const win of BrowserWindow.getAllWindows()) win.webContents.send(channel)
}
