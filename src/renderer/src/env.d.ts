import type { TuwasApi } from '../../shared/types'

declare global {
  interface Window {
    /** Provided by the preload script (src/preload/index.ts). */
    tuwas: TuwasApi
  }
}

export {}
