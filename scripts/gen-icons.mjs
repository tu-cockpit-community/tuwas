// Renders the app icon and the tray icons for Linux, Windows and macOS without any image library.
// The artwork is the TUWAS logo system (docs/logo): everything is built from its path data on a grid where
// 1 unit = stroke width. The same shapes are drawn by <Logo> in src/renderer/src/components.tsx.
// Usage: npm run icons
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { deflateSync } from 'node:zlib'

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'resources')

// ---------- Brand geometry (docs/logo, symbols tw-tu and tw-was) ----------

const BLUE = [0x00, 0x66, 0x99]
const WHITE = [255, 255, 255]
const BLACK = [0, 0, 0]
const INK = [0x0e, 0x1a, 0x24]
const CORAL = [0xe8, 0x55, 0x3d] // "urgent" dot

/** Absolute M/H/V/L/Z path data to closed polygons (the logo only uses these commands). */
function polygons(d) {
  const out = []
  let current = null
  let x = 0
  let y = 0
  for (const [, command, rest] of d.matchAll(/([MHVLZ])([^MHVLZ]*)/g)) {
    const n = rest.trim() ? rest.trim().split(/[\s,]+/).map(Number) : []
    if (command === 'M') {
      current = [[(x = n[0]), (y = n[1])]]
      out.push(current)
    } else if (command === 'H') current.push([(x = n[0]), y])
    else if (command === 'V') current.push([x, (y = n[0])])
    else if (command === 'L') current.push([(x = n[0]), (y = n[1])])
  }
  return out
}

/** Even-odd point-in-polygons test (a hole is just another polygon). */
function inside(polys, px, py) {
  let crossings = 0
  for (const poly of polys) {
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i]
      const [xj, yj] = poly[j]
      if (yi > py !== yj > py && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) crossings++
    }
  }
  return crossings % 2 === 1
}

const rect = (x, y, w, h) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]]
const inRect = (px, py, x, y, w, h) => px >= x && px < x + w && py >= y && py < y + h

// "TU": 9 × 5 units. "WAS": 15 × 5 units.
const TU = [rect(0, 0, 4, 1), rect(1.5, 1, 1, 4), ...polygons('M5 0H6V4H8V0H9V4L8 5H6L5 4Z')]
const WAS = polygons(
  'M0 0H1V4H2V2H3V4H4V0H5V4L4 5H1L0 4Z M6 5V1L7 0H9L10 1V5H9V3H7V5ZM7 2H9V1.41L8.59 1H7.41L7 1.41Z ' +
    'M12 0H15V1H12.41L12 1.41V2H14L15 3V4L14 5H11V4H13.59L14 3.59V3H12L11 2V1Z'
)
// The TU glyph is a union of shapes, so each part is tested on its own.
const inTu = (x, y) => TU.some((poly) => inside([poly], x, y))
const inWas = (x, y) => inside(WAS, x, y)

// ---------- Scenes: (x, y) in scene units give a colour or null ----------

/** App icon on a 24-unit grid (template 3i/3k): blue square, white block with "TU" cut out, "WAS" below. */
function iconScene(x, y) {
  if (x < 0 || y < 0 || x >= 24 || y >= 24) return null
  if (inRect(x, y, 4.5, 4.75, 15, 8)) return inTu(x - 7.5, y - 6.25) ? BLUE : WHITE
  if (inWas(x - 4.5, y - 14.25)) return WHITE
  return BLUE
}

/** Favicon on a 16-unit grid (template 3m): "WAS" on blue, pixel exact at 16 px. */
function faviconScene(x, y) {
  if (x < 0 || y < 0 || x >= 16 || y >= 16) return null
  return inWas(x - 0.5, y - 5.5) ? WHITE : BLUE
}

/** "WAS" alone, for the macOS template image and as a mask. Same position as in the favicon. */
function wordmarkScene(colour) {
  return (x, y) => (x >= 0 && y >= 0 && x < 16 && y < 16 && inWas(x - 0.5, y - 5.5) ? colour : null)
}

// ---------- Rasteriser ----------

// Signed distance to a rounded rectangle (negative inside).
function roundRect(px, py, x0, y0, x1, y1, r) {
  const qx = Math.abs(px - (x0 + x1) / 2) - ((x1 - x0) / 2 - r)
  const qy = Math.abs(py - (y0 + y1) / 2) - ((y1 - y0) / 2 - r)
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r
}

/** Renders `scene(u, v)` (u, v in 0..1) onto a size x size canvas. A colour may carry an alpha as 4th value. */
function render(size, scene) {
  // Supersampling per axis for smooth edges. At 16 px the logo sits on whole pixels (the favicon grid), so one
  // sample in the middle of each pixel keeps it crisp.
  const samples = size <= 16 ? 1 : size >= 512 ? 2 : 4
  const rgba = Buffer.alloc(size * size * 4)
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let r = 0
      let g = 0
      let b = 0
      let a = 0
      for (let sy = 0; sy < samples; sy++) {
        for (let sx = 0; sx < samples; sx++) {
          const c = scene((px + (sx + 0.5) / samples) / size, (py + (sy + 0.5) / samples) / size)
          if (!c) continue
          const alpha = c[3] ?? 1
          r += c[0] * alpha
          g += c[1] * alpha
          b += c[2] * alpha
          a += alpha
        }
      }
      const i = (py * size + px) * 4
      if (a > 0) {
        rgba[i] = Math.round(r / a)
        rgba[i + 1] = Math.round(g / a)
        rgba[i + 2] = Math.round(b / a)
        rgba[i + 3] = Math.round((a / samples ** 2) * 255)
      }
    }
  }
  return encodePng(size, rgba)
}

/** Puts a scene given in grid units onto the 0..1 canvas. */
const onGrid = (units, scene) => (u, v) => scene(u * units, v * units)

/** "Something is due within 24 hours": coral dot top right with a transparent ring around it. */
const withDot = (scene) => (u, v) => {
  const d = Math.hypot(u - 51 / 64, v - 13 / 64)
  if (d <= 11 / 64) return CORAL
  if (d <= 15 / 64) return null
  return scene(u, v)
}

/**
 * Application icon (template 3k): 824 of 1024 units are the rounded plate, with a soft shadow below it.
 * The plate is the logo icon; the margin stays transparent as on macOS.
 */
const appIcon = (() => {
  const plate = 824 / 1024
  const margin = (1 - plate) / 2
  const radius = (36 / 161) * plate
  const logo = onGrid(24, iconScene)
  return (u, v) => {
    if (roundRect(u, v, margin, margin, 1 - margin, 1 - margin, radius) <= 0) return logo((u - margin) / plate, (v - margin) / plate)
    // soft shadow: 8/1024 down, fading over about 14/1024
    const shadow = roundRect(u, v - 8 / 1024, margin, margin, 1 - margin, 1 - margin, radius)
    const fade = 1 - Math.min(Math.max(shadow / (14 / 1024), 0), 1)
    return fade > 0 ? [...INK, fade * 0.28] : null
  }
})()

// ---------- PNG encoder ----------

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})

function crc32(buffer) {
  let c = 0xffffffff
  for (const byte of buffer) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data])
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length)
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body))
  return Buffer.concat([length, body, crc])
}

function encodePng(size, rgba) {
  const stride = size * 4
  const raw = Buffer.alloc((stride + 1) * size) // each row: filter byte 0 + pixels
  for (let y = 0; y < size; y++) rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  const header = Buffer.alloc(13)
  header.writeUInt32BE(size, 0)
  header.writeUInt32BE(size, 4)
  header.set([8, 6, 0, 0, 0], 8) // 8 bit, RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ])
}

// ---------- Files ----------

const favicon = onGrid(16, faviconScene)
const wordmark = (colour) => onGrid(16, wordmarkScene(colour))

const icons = {
  'resources/icon.png': render(256, appIcon),
  // For the installers (electron-builder turns it into .ico and .icns).
  'build/icon.png': render(1024, appIcon),
  // Linux: the favicon tile, readable on GNOME's dark top bar and on light ones.
  'resources/tray.png': render(32, favicon),
  'resources/tray@2x.png': render(64, favicon),
  'resources/tray-urgent.png': render(32, withDot(favicon)),
  'resources/tray-urgent@2x.png': render(64, withDot(favicon)),
  // macOS: black template image, the menu bar colours it itself (16 pt).
  'resources/trayTemplate.png': render(16, wordmark(BLACK)),
  'resources/trayTemplate@2x.png': render(32, wordmark(BLACK)),
  // Windows: the same tile, visible on light and dark taskbars.
  'resources/tray-win.png': render(32, favicon),
  'resources/tray-win-urgent.png': render(32, withDot(favicon))
}
for (const [name, png] of Object.entries(icons)) {
  const path = join(outDir, '..', name)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, png)
  console.log(name)
}
