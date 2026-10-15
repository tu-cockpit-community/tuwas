import { useEffect, useState } from 'react'
import type { LernenStatus } from '../../../shared/types'

/**
 * The Lernen tab: the separate Lernen app (courses, subjects, review) in a frame. The main process starts its
 * local server on demand. `?embed=1` tells it to leave out its own logo, since TUWAS already shows one.
 */
/** `home` counts the clicks on "Lernen" in the menu: each one reloads the overview. */
export default function LernenView({ home }: { home: number }) {
  const [status, setStatus] = useState<LernenStatus | null>(null)
  const [attempt, setAttempt] = useState(0)
  const [frameKey, setFrameKey] = useState(0)

  useEffect(() => {
    let cancelled = false
    setStatus(null)
    void window.tuwas.startLernen().then((next) => {
      if (!cancelled) setStatus(next)
    })
    return () => {
      cancelled = true
    }
  }, [attempt])

  // The page is built from the settings, so a changed SBP setting needs a fresh page (nothing else reloads it).
  useEffect(() => {
    let sbp: boolean | null = null
    const check = (): void =>
      void window.tuwas.getSettings().then((settings) => {
        if (sbp !== null && sbp !== settings.lernenSbp) setFrameKey((n) => n + 1)
        sbp = settings.lernenSbp
      })
    check()
    return window.tuwas.onStateChanged(check)
  }, [])

  if (!status) {
    return (
      <div className="lernen-state" role="status">
        <p>Lernen wird gestartet …</p>
      </div>
    )
  }
  if (status.state === 'unavailable') {
    return (
      <div className="lernen-state">
        <h2>Lernen ist nicht verfügbar</h2>
        <p>{status.message}</p>
        <button type="button" className="button" onClick={() => setAttempt((n) => n + 1)}>
          Erneut versuchen
        </button>
      </div>
    )
  }
  return <iframe key={`${frameKey}-${home}`} className="lernen-frame" title="Lernen" src={`${status.url}/lernen?embed=1`} />
}
