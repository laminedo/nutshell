import { useSyncExternalStore } from 'react'

/**
 * Everything the app remembers about the reader lives here, in localStorage.
 * There is no account and no server: clearing site data resets the app.
 */

export interface Progress {
  /** Index of the key idea the reader was last on. */
  idea: number
  /** Indexes of key ideas the reader has moved past. */
  done: number[]
  finished: boolean
  updatedAt: number
}

export interface Highlight {
  id: string
  bookId: string
  idea: number
  /** Selected text. A selection that spans paragraphs keeps one line per paragraph. */
  text: string
  createdAt: number
}

export type ThemePref = 'system' | 'light' | 'dark'

export interface AppState {
  saved: string[]
  progress: Record<string, Progress>
  highlights: Highlight[]
  theme: ThemePref
  /** Index into FONT_SIZES. */
  fontScale: number
  /** Speech rate for audio playback. */
  rate: number
}

export const FONT_SIZES = [16, 18, 20, 22, 25]
export const RATES = [0.8, 1, 1.25, 1.5, 2]

const KEY = 'nutshell:v1'

const defaults: AppState = {
  saved: [],
  progress: {},
  highlights: [],
  theme: 'system',
  fontScale: 2,
  rate: 1,
}

function load(): AppState {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...defaults, ...JSON.parse(raw) } : defaults
  } catch {
    return defaults
  }
}

let state = load()
const listeners = new Set<() => void>()

function notify() {
  listeners.forEach((l) => l())
}

function update(fn: (s: AppState) => AppState) {
  state = fn(state)
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // Storage can be full or blocked (private mode); the app still works for this session.
  }
  notify()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// Keep several open tabs in sync.
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === KEY) {
      state = load()
      notify()
    }
  })
}

/**
 * Subscribe to a slice of state. The selector must return a value straight out
 * of the state (no new arrays or objects), otherwise React sees a change on every render.
 */
export function useStore<T>(selector: (s: AppState) => T): T {
  return useSyncExternalStore(subscribe, () => selector(state))
}

const blank = (): Progress => ({ idea: 0, done: [], finished: false, updatedAt: Date.now() })

function patchProgress(bookId: string, fn: (p: Progress) => Progress) {
  update((s) => ({
    ...s,
    progress: { ...s.progress, [bookId]: { ...fn(s.progress[bookId] ?? blank()), updatedAt: Date.now() } },
  }))
}

export const actions = {
  toggleSaved(bookId: string) {
    update((s) => ({
      ...s,
      saved: s.saved.includes(bookId) ? s.saved.filter((id) => id !== bookId) : [bookId, ...s.saved],
    }))
  },

  /** The reader opened a key idea. */
  visit(bookId: string, idea: number) {
    if (state.progress[bookId]?.idea === idea) return
    patchProgress(bookId, (p) => ({ ...p, idea }))
  },

  /** The reader moved on from a key idea. */
  completeIdea(bookId: string, idea: number) {
    if (state.progress[bookId]?.done.includes(idea)) return
    patchProgress(bookId, (p) => ({ ...p, done: [...p.done, idea] }))
  },

  finish(bookId: string, total: number) {
    if (state.progress[bookId]?.finished) return
    patchProgress(bookId, (p) => ({ ...p, finished: true, done: Array.from({ length: total }, (_, i) => i) }))
  },

  resetProgress(bookId: string) {
    update((s) => {
      const { [bookId]: _removed, ...rest } = s.progress
      return { ...s, progress: rest }
    })
  },

  addHighlight(bookId: string, idea: number, text: string) {
    if (state.highlights.some((h) => h.bookId === bookId && h.idea === idea && h.text === text)) return
    const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`
    update((s) => ({ ...s, highlights: [{ id, bookId, idea, text, createdAt: Date.now() }, ...s.highlights] }))
  },

  removeHighlight(id: string) {
    update((s) => ({ ...s, highlights: s.highlights.filter((h) => h.id !== id) }))
  },

  setTheme(theme: ThemePref) {
    update((s) => ({ ...s, theme }))
  },

  setFontScale(fontScale: number) {
    update((s) => ({ ...s, fontScale: Math.min(FONT_SIZES.length - 1, Math.max(0, fontScale)) }))
  },

  setRate(rate: number) {
    update((s) => ({ ...s, rate }))
  },
}

export function applyTheme(theme: ThemePref) {
  const root = document.documentElement
  if (theme === 'system') delete root.dataset.theme
  else root.dataset.theme = theme
}

const darkQuery = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

function subscribeDark(listener: () => void) {
  darkQuery?.addEventListener('change', listener)
  return () => darkQuery?.removeEventListener('change', listener)
}

/** Whether the app is currently rendering in dark mode, following the system when no choice was made. */
export function useIsDark(): boolean {
  const theme = useStore((s) => s.theme)
  const systemDark = useSyncExternalStore(subscribeDark, () => darkQuery?.matches ?? false)
  return theme === 'dark' || (theme === 'system' && systemDark)
}
