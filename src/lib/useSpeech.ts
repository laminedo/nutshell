import { useCallback, useEffect, useRef, useState } from 'react'

export type SpeechStatus = 'idle' | 'playing' | 'paused'

const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

const PREFERRED_VOICES = ['Samantha', 'Google US English', 'Microsoft Aria', 'Microsoft Jenny', 'Daniel', 'Karen']

function pickVoice(): SpeechSynthesisVoice | null {
  const english = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'))
  for (const name of PREFERRED_VOICES) {
    const match = english.find((v) => v.name.includes(name))
    if (match) return match
  }
  return english.find((v) => v.default) ?? english[0] ?? null
}

/**
 * Reads a list of sentences aloud with the browser's built-in speech synthesis.
 *
 * Each sentence is its own utterance. That sidesteps Chrome cutting off long
 * utterances, lets the UI follow along sentence by sentence, and makes pause
 * reliable everywhere: pausing cancels the current sentence and resuming restarts it.
 */
export function useSpeech(rate: number) {
  const [status, setStatus] = useState<SpeechStatus>('idle')
  const [index, setIndex] = useState(-1)

  const ref = useRef({
    queue: [] as string[],
    index: -1,
    rate,
    // Bumped whenever playback is redirected, so callbacks from old utterances are ignored.
    token: 0,
    onDone: undefined as (() => void) | undefined,
    // Chrome can garbage-collect an utterance mid-speech and never fire `onend`; holding it prevents that.
    utterance: null as SpeechSynthesisUtterance | null,
    timer: 0,
  })

  const speakAt = useCallback((i: number, token: number) => {
    const r = ref.current
    if (r.token !== token) return
    if (i >= r.queue.length) {
      r.index = -1
      setIndex(-1)
      setStatus('idle')
      const done = r.onDone
      r.onDone = undefined
      done?.()
      return
    }
    const u = new SpeechSynthesisUtterance(r.queue[i])
    const voice = pickVoice()
    if (voice) u.voice = voice
    u.lang = voice?.lang ?? 'en-US'
    u.rate = r.rate
    u.onend = () => speakAt(i + 1, token)
    u.onerror = (e) => {
      if (r.token !== token || e.error === 'interrupted' || e.error === 'canceled') return
      setStatus('idle')
    }
    r.utterance = u
    r.index = i
    setIndex(i)
    setStatus('playing')
    window.speechSynthesis.speak(u)
  }, [])

  const startAt = useCallback(
    (i: number) => {
      const r = ref.current
      const token = ++r.token
      window.clearTimeout(r.timer)
      window.speechSynthesis.cancel()
      r.index = i
      setIndex(i)
      setStatus('playing')
      // Safari drops an utterance queued in the same tick as cancel().
      r.timer = window.setTimeout(() => speakAt(i, token), 60)
    },
    [speakAt],
  )

  const speak = useCallback(
    (sentences: string[], onDone?: () => void) => {
      if (!supported || sentences.length === 0) return
      ref.current.queue = sentences
      ref.current.onDone = onDone
      startAt(0)
    },
    [startAt],
  )

  const halt = useCallback(() => {
    const r = ref.current
    r.token++
    window.clearTimeout(r.timer)
    if (supported) window.speechSynthesis.cancel()
  }, [])

  const pause = useCallback(() => {
    if (ref.current.index < 0) return
    halt()
    setStatus('paused')
  }, [halt])

  const resume = useCallback(() => {
    if (ref.current.index >= 0) startAt(ref.current.index)
  }, [startAt])

  const stop = useCallback(() => {
    halt()
    ref.current.index = -1
    ref.current.onDone = undefined
    setIndex(-1)
    setStatus('idle')
  }, [halt])

  // A new rate takes effect right away by restarting the current sentence.
  useEffect(() => {
    const r = ref.current
    if (r.rate === rate) return
    r.rate = rate
    if (r.index >= 0 && window.speechSynthesis.speaking) startAt(r.index)
  }, [rate, startAt])

  useEffect(() => {
    if (!supported) return
    window.speechSynthesis.getVoices() // voices load lazily in Chrome; this kicks it off
    return halt
  }, [halt])

  return { supported, status, index, speak, pause, resume, stop }
}
