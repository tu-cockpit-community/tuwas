import { useRef, useState, type PointerEvent, type ReactNode } from 'react'
import { Check, CircleCheck, Copy, Info, TriangleAlert } from 'lucide-react'

const TU = (
  <>
    <rect width="4" height="1" />
    <rect x="1.5" y="1" width="1" height="4" />
    <path d="M5 0H6V4H8V0H9V4L8 5H6L5 4Z" />
  </>
)
const WAS = (
  <path
    fillRule="evenodd"
    d="M0 0H1V4H2V2H3V4H4V0H5V4L4 5H1L0 4Z M6 5V1L7 0H9L10 1V5H9V3H7V5ZM7 2H9V1.41L8.59 1H7.41L7 1.41Z M12 0H15V1H12.41L12 1.41V2H14L15 3V4L14 5H11V4H13.59L14 3.59V3H12L11 2V1Z"
  />
)

/**
 * TUWAS logo (docs/logo), the same artwork as resources/icon.png (scripts/gen-icons.mjs).
 * `lockup`: wide logo, `size` is its height; the wordmark colour follows the theme (--logo-was).
 * `icon`: the square app icon, `size` is its edge length.
 */
export function Logo({ variant = 'icon', size = 32 }: { variant?: 'icon' | 'lockup'; size?: number }) {
  if (variant === 'lockup') {
    return (
      <svg width={(size * 28) / 8} height={size} viewBox="0 0 28 8" role="img" aria-label="TUWAS">
        <rect width="12" height="8" fill="#006699" />
        <g transform="translate(1.5 1.5)" fill="#fff">{TU}</g>
        <g transform="translate(13 1.5)" fill="var(--logo-was)">{WAS}</g>
      </svg>
    )
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-label="TUWAS">
      <rect width="24" height="24" fill="#006699" />
      <rect x="4.5" y="4.75" width="15" height="8" fill="#fff" />
      <g transform="translate(7.5 6.25)" fill="#006699">{TU}</g>
      <g transform="translate(4.5 14.25)" fill="#fff">{WAS}</g>
    </svg>
  )
}

export function Toggle(props: { checked: boolean; label: string; disabled?: boolean; onChange: (checked: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      className="switch"
      aria-checked={props.checked}
      aria-label={props.label}
      disabled={props.disabled}
      onClick={() => props.onChange(!props.checked)}
    />
  )
}

const CALLOUT_ICONS = { ok: CircleCheck, info: Info, warn: TriangleAlert, error: TriangleAlert }

export function Callout(props: { kind: keyof typeof CALLOUT_ICONS; title?: string; children?: ReactNode }) {
  const Icon = CALLOUT_ICONS[props.kind]
  return (
    <div className={`callout ${props.kind}`} role={props.kind === 'error' ? 'alert' : undefined}>
      <Icon size={16} />
      <div className="callout-body">
        {props.title && <div className="callout-title">{props.title}</div>}
        {props.children}
      </div>
    </div>
  )
}

/** A shell command with a copy button. */
export function Command({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = (): void => {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }
  return (
    <span className="command">
      <code>{text}</code>
      <button type="button" className="icon-button" title="Kopieren" aria-label="Befehl kopieren" onClick={copy}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </span>
  )
}

/**
 * The grip between two areas: dragging it makes one of them wider or narrower. Also works with
 * the arrow keys; a double click goes back to the default width.
 */
export function ResizeHandle(props: { label: string; onDrag: (clientX: number) => void; onStep: (delta: number) => void; onReset?: () => void }) {
  const dragging = useRef(false)
  const stop = (event: PointerEvent<HTMLDivElement>): void => {
    if (!dragging.current) return
    dragging.current = false
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    document.body.classList.remove('resizing')
  }
  return (
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label={props.label}
      title={`${props.label}: ziehen zum Verstellen, Doppelklick setzt zurück`}
      tabIndex={0}
      className="resize-handle"
      onPointerDown={(event) => {
        if (event.button !== 0) return
        event.preventDefault()
        dragging.current = true
        event.currentTarget.setPointerCapture(event.pointerId)
        // Over a PDF the iframe would swallow the mouse; body.resizing switches that off.
        document.body.classList.add('resizing')
      }}
      onPointerMove={(event) => {
        if (dragging.current) props.onDrag(event.clientX)
      }}
      onPointerUp={stop}
      onPointerCancel={stop}
      onLostPointerCapture={stop}
      onDoubleClick={props.onReset}
      onKeyDown={(event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
        event.preventDefault()
        props.onStep(event.key === 'ArrowLeft' ? -16 : 16)
      }}
    />
  )
}
