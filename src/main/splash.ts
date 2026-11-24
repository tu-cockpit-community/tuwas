import { BrowserWindow, nativeTheme } from 'electron'

/** The splash stays at least this long, so the animation never just flickers by. */
const MIN_VISIBLE_MS = 1400
/** Safety net: a main window that never shows must not leave the splash on screen. */
const MAX_VISIBLE_MS = 20000
const FADE_MS = 220

const LOGO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 8"><rect width="12" height="8" class="tu"/><g transform="translate(1.5 1.5)" fill="#fff"><rect width="4" height="1"/><rect x="1.5" y="1" width="1" height="4"/><path d="M5 0H6V4H8V0H9V4L8 5H6L5 4Z"/></g><g transform="translate(13 1.5)" class="was"><path fill-rule="evenodd" d="M0 0H1V4H2V2H3V4H4V0H5V4L4 5H1L0 4Z M6 5V1L7 0H9L10 1V5H9V3H7V5ZM7 2H9V1.41L8.59 1H7.41L7 1.41Z M12 0H15V1H12.41L12 1.41V2H14L15 3V4L14 5H11V4H13.59L14 3.59V3H12L11 2V1Z"/></g></svg>`

function html(dark: boolean): string {
  const bg = dark ? '#0e1a24' : '#ffffff'
  const fg = dark ? '#ffffff' : '#006699'
  const muted = dark ? '#8fa6b5' : '#46606f'
  const border = dark ? '#1f3445' : '#d6e2ea'
  return `<!doctype html><meta charset="utf-8"><style>
  html,body{margin:0;height:100%;background:${bg};overflow:hidden;font:13px system-ui,sans-serif;user-select:none;cursor:default}
  body{box-sizing:border-box;border:1px solid ${border};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;animation:in .35s ease-out both}
  .logo{width:210px;animation:pop .7s cubic-bezier(.2,.9,.3,1) both}
  .logo svg{display:block;width:100%;shape-rendering:crispEdges}
  .tu{fill:#006699}.was{fill:${fg}}
  .claim{color:${muted};letter-spacing:.04em;animation:in .6s .35s ease-out both}
  .bar{position:absolute;left:0;right:0;bottom:0;height:3px;background:${border};overflow:hidden}
  .bar i{display:block;height:100%;width:34%;background:#006699;animation:run 1.15s ease-in-out infinite}
  @keyframes in{from{opacity:0}to{opacity:1}}
  @keyframes pop{from{opacity:0;transform:scale(.82)}to{opacity:1;transform:scale(1)}}
  @keyframes run{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}
  @media (prefers-reduced-motion:reduce){*{animation-duration:.01s!important;animation-iteration-count:1!important}}
</style><div class="logo">${LOGO}</div><div class="claim">Für's Studium</div><div class="bar"><i></i></div>`
}

let splash: BrowserWindow | null = null
let shownAt = 0
let maxTimer: NodeJS.Timeout | undefined

export function showSplash(): void {
  if (splash) return
  const win = new BrowserWindow({
    width: 460,
    height: 260,
    frame: false,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    center: true,
    show: false,
    title: 'TUWAS',
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#0e1a24' : '#ffffff',
    webPreferences: { sandbox: true, contextIsolation: true, javascript: false }
  })
  splash = win
  win.on('closed', () => {
    if (splash === win) splash = null
    clearTimeout(maxTimer)
  })
  win.once('ready-to-show', () => {
    shownAt = Date.now()
    win.show()
  })
  void win.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(html(nativeTheme.shouldUseDarkColors))}`)
  maxTimer = setTimeout(closeSplash, MAX_VISIBLE_MS)
}

/** Closes the splash once it has been visible long enough, then fades out. Safe to call without a splash. */
export function closeSplash(): void {
  const win = splash
  if (!win || win.isDestroyed()) return
  splash = null
  clearTimeout(maxTimer)
  const wait = shownAt ? Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt)) : 0
  setTimeout(() => {
    if (win.isDestroyed()) return
    let opacity = 1
    const step = setInterval(() => {
      opacity -= 0.2
      if (win.isDestroyed()) return clearInterval(step)
      if (opacity <= 0) {
        clearInterval(step)
        win.destroy()
      } else win.setOpacity(opacity)
    }, FADE_MS / 5)
  }, wait)
}
