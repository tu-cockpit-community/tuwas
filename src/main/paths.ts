import { app, nativeImage, type NativeImage } from 'electron'
import { existsSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

/** Files from resources/ (icons): next to the project in development, in process.resourcesPath when packaged. */
export function resourcePath(name: string): string {
  return app.isPackaged ? join(process.resourcesPath, name) : join(app.getAppPath(), 'resources', name)
}

/**
 * Icon for windows. X11 stores it as a window property, and with the 256 px file the request gets too large:
 * the window then silently has no icon at all (blank in the taskbar). A 128 px copy of the same image works.
 */
export function windowIcon(): NativeImage {
  return nativeImage.createFromPath(resourcePath('icon.png')).resize({ width: 128, height: 128, quality: 'best' })
}

// Build output layout of electron-vite: out/main, out/preload, out/renderer.
export const preloadPath = (): string => join(__dirname, '../preload/index.js')
export const rendererHtml = (): string => join(__dirname, '../renderer/index.html')

/**
 * The command that starts TUWAS, for a GNOME keyboard shortcut: the AppImage, the installed
 * package's `tuwas`, or from the project folder the one created by `npm run install-desktop`.
 */
export function launcherPath(): string | null {
  if (process.platform !== 'linux') return null
  if (app.isPackaged) return process.env['APPIMAGE'] ?? (existsSync('/usr/bin/tuwas') ? '/usr/bin/tuwas' : process.execPath)
  const path = join(homedir(), '.local', 'bin', 'tuwas')
  return existsSync(path) ? path : null
}
