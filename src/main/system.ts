import { app } from 'electron'
import { execFile, execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { AppInfo } from '../shared/types'

export const X11_FLAG = '--ozone-platform=x11'

/** How long to wait at most for GNOME's X11 settings right after login. */
const XRDB_WAIT_SECONDS = 4

/**
 * Under XWayland with fractional scaling, X11 apps draw at 2x and GNOME scales them down. Chromium
 * then loads the mouse cursor at the unscaled size, so it shrinks over our windows. GNOME publishes
 * the right X11 size as the Xcursor.size resource; hand it to Chromium via XCURSOR_SIZE.
 *
 * Right after login (autostart) XWayland only starts with the first X11 program – us – and GNOME's
 * XSettings service sets the resources a moment later. So if the size isn't there yet, wait for it
 * a few seconds instead of asking once too early.
 */
export function fixCursorSize(): void {
  if (process.env['XCURSOR_SIZE'] || !process.argv.includes(X11_FLAG) || useWslgWayland()) return
  const script = [
    'command -v xrdb >/dev/null || exit 1',
    `i=0; while [ $i -lt ${XRDB_WAIT_SECONDS * 4} ]; do`,
    '  size=$(xrdb -query 2>/dev/null | sed -n "s/^Xcursor\\.size:[[:space:]]*\\([0-9][0-9]*\\).*/\\1/p")',
    '  [ -n "$size" ] && { echo "$size"; exit 0; }',
    '  sleep 0.25; i=$((i + 1))',
    'done; exit 1'
  ].join('\n')
  try {
    const size = execFileSync('sh', ['-c', script], { encoding: 'utf8', timeout: (XRDB_WAIT_SECONDS + 2) * 1000 }).trim()
    if (/^\d+$/.test(size)) process.env['XCURSOR_SIZE'] = size
  } catch {
    // No xrdb, or GNOME didn't publish a size in time: keep Chromium's default size.
  }
}

/**
 * Command line flags TUWAS needs. Electron reads them before any of our code runs, so they only
 * work as real command line flags (see index.ts).
 * - XWayland: Wayland doesn't let apps place their own windows, but the mini window has to sit
 *   under the tray icon.
 * - German: date pickers, context menus etc. in German even if the system language is English.
 */
export function startupArgs(): string[] {
  const args = ['--lang=de-AT']
  if (useWslgWayland()) args.unshift(WAYLAND_FLAG)
  else if (process.platform === 'linux' && process.env['DISPLAY']) args.unshift(X11_FLAG)
  return args
}

export const WAYLAND_FLAG = '--ozone-platform=wayland'
/** Where WSLg keeps its Wayland socket. */
const WSLG_RUNTIME_DIR = '/mnt/wslg/runtime-dir'

/**
 * Under WSLg the mouse pointer is invisible in X11 windows (XWayland) on some monitor setups – the app gets the
 * pointer, but Windows shows none. Wayland windows are fine, so TUWAS uses Wayland there. WSLg has no tray, so the
 * reason for X11 (placing the mini window under the tray icon) does not apply.
 */
export function useWslgWayland(): boolean {
  return (
    process.platform === 'linux' &&
    Boolean(process.env['WSL_DISTRO_NAME'] || process.env['WSL_INTEROP']) &&
    existsSync(join(WSLG_RUNTIME_DIR, 'wayland-0'))
  )
}

/**
 * Arguments for a relaunch if this start is wrong for WSLg (X11 flag given, or a Wayland flag without a runtime
 * folder that holds the socket), else null. The runtime folder is fixed in the environment of the relaunch: Chromium
 * connects to Wayland before any of our code runs, so it cannot be changed in the running process.
 */
export function wslgRelaunchArgs(argv: string[]): string[] | null {
  if (!useWslgWayland()) return null
  const runtimeDir = process.env['XDG_RUNTIME_DIR']
  const socketReachable = Boolean(runtimeDir) && existsSync(join(runtimeDir as string, 'wayland-0'))
  const wrongPlatform = argv.includes(X11_FLAG)
  if (!wrongPlatform && (socketReachable || !argv.includes(WAYLAND_FLAG))) return null
  if (!socketReachable) process.env['XDG_RUNTIME_DIR'] = WSLG_RUNTIME_DIR
  return [...argv.slice(1).filter((arg) => arg !== X11_FLAG), ...(argv.includes(WAYLAND_FLAG) ? [] : [WAYLAND_FLAG])]
}

/** The startup flags not given on this command line (an explicit other value counts as given). */
export function missingStartupArgs(argv: string[]): string[] {
  return startupArgs().filter((arg) => !argv.some((given) => given.startsWith(`${arg.split('=')[0]}=`)))
}

/**
 * Is anything running that can show tray icons? GNOME only has that with the AppIndicator
 * extension, which provides org.kde.StatusNotifierWatcher on the session bus. null = could not check.
 */
export function trayHostAvailable(): Promise<boolean | null> {
  if (process.platform !== 'linux') return Promise.resolve(true)
  return new Promise((resolve) => {
    execFile(
      'gdbus',
      [
        'call', '--session',
        '--dest', 'org.freedesktop.DBus',
        '--object-path', '/org/freedesktop/DBus',
        '--method', 'org.freedesktop.DBus.NameHasOwner',
        'org.kde.StatusNotifierWatcher'
      ],
      { timeout: 3000 },
      (error, stdout) => resolve(error ? null : stdout.includes('true'))
    )
  })
}

export function windowSystem(): AppInfo['windowSystem'] {
  const platform = app.commandLine.getSwitchValue('ozone-platform')
  return platform === 'x11' || platform === 'wayland' ? platform : 'default'
}
