import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { Link, useParams, useSearchParams } from 'react-router'
import { BookCard } from '../components/BookCard'
import { Icon } from '../components/Icon'
import { ThemeToggle } from '../components/Layout'
import { getBook, related, type Book } from '../data'
import { actions, FONT_SIZES, RATES, useStore, type Highlight } from '../lib/store'
import { buildUnits, cleanSelection, locateMarks, segment, type Mark, type Span } from '../lib/text'
import { useSpeech } from '../lib/useSpeech'
import { useTitle } from '../lib/useTitle'
import NotFound from './NotFound'

type Popover = { kind: 'add'; text: string; x: number; y: number } | { kind: 'remove'; id: string; x: number; y: number }

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max)

function Paragraph({ text, marks, speaking }: { text: string; marks: Mark[]; speaking: Span | null }) {
  return (
    <p>
      {segment(text, marks, speaking).map((s, i) =>
        s.markId ? (
          <mark key={i} data-hid={s.markId} className={s.speaking ? 'is-speaking' : undefined}>
            {s.text}
          </mark>
        ) : s.speaking ? (
          <span key={i} className="is-speaking">
            {s.text}
          </span>
        ) : (
          s.text
        ),
      )}
    </p>
  )
}

function Finished({ book, highlights, onRestart }: { book: Book; highlights: Highlight[]; onRestart: () => void }) {
  return (
    <div className="done">
      <span className="done__badge">
        <Icon name="check" size={30} />
      </span>
      <p className="eyebrow">You finished</p>
      <h1>{book.title}</h1>

      <section className="done__card">
        <p className="eyebrow eyebrow--brand">In a nutshell</p>
        <p className="done__takeaway">{book.takeaway}</p>
      </section>

      {highlights.length > 0 && (
        <section className="done__hl">
          <h2>Your highlights</h2>
          <ul>
            {highlights.map((h) => (
              <li key={h.id}>
                <blockquote>{h.text.replace(/\n/g, ' ')}</blockquote>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="actions actions--center">
        <button type="button" className="btn btn--ghost" onClick={onRestart}>
          <Icon name="restart" size={18} /> Read again
        </button>
        <Link to="/library?tab=finished" className="btn btn--ink">
          Go to library
        </Link>
      </div>

      <section className="done__next">
        <h2>Read next</h2>
        <div className="grid grid--3">
          {related(book, 3).map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ReaderView({ book }: { book: Book }) {
  const total = book.ideas.length
  const [params, setParams] = useSearchParams()
  const saved = useStore((s) => s.progress[book.id])
  const fontScale = useStore((s) => s.fontScale)
  const rate = useStore((s) => s.rate)
  const allHighlights = useStore((s) => s.highlights)

  // `step` runs from 0 to total: one per key idea, then the finish screen.
  // Without ?idea= in the URL, open wherever the reader left off.
  const [resumeAt] = useState(() => (saved && !saved.finished ? Math.min(saved.idea, total - 1) : 0))
  const parseStep = useCallback(
    (raw: string | null) => {
      const n = raw === 'done' ? total : Number.parseInt(raw ?? '', 10) - 1
      return Number.isFinite(n) ? clamp(n, 0, total) : resumeAt
    },
    [resumeAt, total],
  )
  const step = parseStep(params.get('idea'))
  const idea = step < total ? book.ideas[step] : null
  // Router updates render a beat after the URL changes, so handlers that can fire
  // in quick succession (arrow keys, the narrator) read the step from the URL itself.
  const liveStep = useCallback(
    () => parseStep(new URLSearchParams(window.location.search).get('idea')),
    [parseStep],
  )

  useTitle(idea ? `${idea.title} · ${book.title}` : `Finished · ${book.title}`)

  const [tocOpen, setTocOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [pop, setPop] = useState<Popover | null>(null)
  const articleRef = useRef<HTMLElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const popRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  // ----- Audio -----
  const units = useMemo(() => (idea ? buildUnits(idea) : []), [idea])
  const { supported, status, index, speak, pause, resume, stop } = useSpeech(rate)
  // Set just before a step change that should keep the narrator talking.
  const keepPlaying = useRef(false)

  // ----- Navigation -----
  // Stepping through ideas replaces the history entry, so Back always leaves the reader.
  const go = useCallback(
    (n: number) => {
      if (status === 'playing') keepPlaying.current = true
      setParams({ idea: n >= total ? 'done' : String(n + 1) }, { replace: true })
    },
    [setParams, status, total],
  )

  const next = useCallback(() => {
    const at = liveStep()
    if (at >= total) return
    actions.completeIdea(book.id, at)
    go(at + 1)
  }, [book.id, go, liveStep, total])

  const previous = useCallback(() => {
    const at = liveStep()
    if (at > 0) go(at - 1)
  }, [go, liveStep])

  const nextRef = useRef(next)
  useEffect(() => {
    nextRef.current = next
  }, [next])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (step < total) actions.visit(book.id, step)
    else actions.finish(book.id, total)
  }, [book.id, step, total])

  const startSpeaking = useCallback(() => {
    speak(
      units.map((u) => u.text),
      () => {
        keepPlaying.current = true
        nextRef.current()
      },
    )
  }, [speak, units])

  useEffect(() => {
    if (keepPlaying.current && units.length > 0) startSpeaking()
    else stop()
    keepPlaying.current = false
  }, [units, startSpeaking, stop])

  const speakingUnit = status !== 'idle' && index >= 0 ? (units[index] ?? null) : null

  // Keep the sentence being read on screen.
  useEffect(() => {
    if (status !== 'playing') return
    const el = articleRef.current?.querySelector('.is-speaking')
    if (!el) return
    const r = el.getBoundingClientRect()
    if (r.top < 90 || r.bottom > window.innerHeight - 140) el.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [index, status])

  function togglePlay() {
    if (status === 'playing') pause()
    else if (status === 'paused') resume()
    else startSpeaking()
  }

  // ----- Highlights -----
  const bookHighlights = useMemo(() => allHighlights.filter((h) => h.bookId === book.id), [allHighlights, book.id])
  const marks = useMemo(
    () =>
      idea
        ? locateMarks(
            idea.body,
            bookHighlights.filter((h) => h.idea === step),
          )
        : [],
    [idea, bookHighlights, step],
  )

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const closeAdd = () => setPop((p) => (p?.kind === 'add' ? null : p))

    function readSelection() {
      const sel = document.getSelection()
      const body = bodyRef.current
      if (!sel || sel.isCollapsed || sel.rangeCount === 0 || !body) return closeAdd()
      const range = sel.getRangeAt(0)
      if (!body.contains(range.commonAncestorContainer)) return closeAdd()
      const text = cleanSelection(sel.toString())
      if (text.length < 3) return closeAdd()
      const rect = range.getBoundingClientRect()
      // On touch screens the system selection menu sits above the text, so go below it.
      const below = coarse || rect.top < 120
      setPop({ kind: 'add', text, x: rect.left + rect.width / 2, y: below ? rect.bottom + 10 : rect.top - 50 })
    }
    function onScroll() {
      setPop((p) => (p?.kind === 'remove' ? null : p))
      readSelection()
    }
    function onPointerDown(e: PointerEvent) {
      const target = e.target as Node
      if (!menuRef.current?.contains(target)) setSettingsOpen(false)
      if (popRef.current?.contains(target)) return
      setPop((p) => (p?.kind === 'remove' ? null : p))
    }

    document.addEventListener('selectionchange', readSelection)
    document.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('selectionchange', readSelection)
      document.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function onBodyClick(e: MouseEvent) {
    const mark = (e.target as HTMLElement).closest<HTMLElement>('mark[data-hid]')
    if (!mark?.dataset.hid || !document.getSelection()?.isCollapsed) return
    setPop({ kind: 'remove', id: mark.dataset.hid, x: e.clientX, y: Math.max(70, e.clientY - 58) })
  }

  function confirmPop() {
    if (!pop) return
    if (pop.kind === 'add') {
      actions.addHighlight(book.id, step, pop.text)
      document.getSelection()?.removeAllRanges()
    } else {
      actions.removeHighlight(pop.id)
    }
    setPop(null)
  }

  // ----- Keyboard -----
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return
      if (e.target instanceof Element && e.target.closest('input, textarea, select')) return
      if (e.key === 'Escape') {
        setTocOpen(false)
        setSettingsOpen(false)
        setPop(null)
      } else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') previous()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, previous])

  const style = { '--read-size': `${FONT_SIZES[fontScale] ?? 20}px` } as CSSProperties

  return (
    <div className="reader" style={style}>
      <header className="rtop">
        <div className="rtop__in">
          <Link to={`/book/${book.id}`} className="icon-btn" aria-label="Close reader" title="Close">
            <Icon name="x" />
          </Link>

          <div className="rtop__mid">
            <p className="rtop__title">{book.title}</p>
            <div
              className="segments"
              role="progressbar"
              aria-label="Reading progress"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={Math.min(step, total)}
            >
              {book.ideas.map((_, i) => (
                <span key={i} className={i < step ? 'is-done' : i === step ? 'is-current' : undefined} />
              ))}
            </div>
          </div>

          <div className="rtop__tools">
            <div className="menu" ref={menuRef}>
              <button
                type="button"
                className="icon-btn icon-btn--text"
                aria-label="Reading settings"
                aria-expanded={settingsOpen}
                title="Reading settings"
                onClick={() => setSettingsOpen((o) => !o)}
              >
                Aa
              </button>
              {settingsOpen && (
                <div className="menu__panel">
                  <div className="menu__row">
                    <span>Text size</span>
                    <div className="stepper">
                      <button
                        type="button"
                        aria-label="Smaller text"
                        disabled={fontScale === 0}
                        onClick={() => actions.setFontScale(fontScale - 1)}
                      >
                        A−
                      </button>
                      <button
                        type="button"
                        aria-label="Larger text"
                        disabled={fontScale === FONT_SIZES.length - 1}
                        onClick={() => actions.setFontScale(fontScale + 1)}
                      >
                        A+
                      </button>
                    </div>
                  </div>
                  <div className="menu__row">
                    <span>Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              className="icon-btn"
              aria-label="Key ideas"
              title="Key ideas"
              onClick={() => setTocOpen(true)}
            >
              <Icon name="list" />
            </button>
          </div>
        </div>
      </header>

      {idea ? (
        <article className="article" ref={articleRef}>
          <p className="eyebrow">
            Key idea {step + 1} of {total}
          </p>
          <h1 className={speakingUnit?.para === -1 ? 'is-speaking' : undefined}>{idea.title}</h1>
          <div className="article__body" ref={bodyRef} onClick={onBodyClick}>
            {idea.body.map((text, i) => (
              <Paragraph
                key={i}
                text={text}
                marks={marks[i] ?? []}
                speaking={speakingUnit?.para === i ? speakingUnit : null}
              />
            ))}
          </div>
          <p className="article__hint">
            <Icon name="highlighter" size={15} /> Select any passage to highlight it.
          </p>
        </article>
      ) : (
        <Finished book={book} highlights={bookHighlights} onRestart={() => go(0)} />
      )}

      {idea && (
        <div className="rbar">
          <div className="rbar__in">
            <button
              type="button"
              className="icon-btn"
              aria-label="Previous key idea"
              title="Previous"
              disabled={step === 0}
              onClick={previous}
            >
              <Icon name="chevron-left" />
            </button>

            {supported && (
              <div className="rbar__audio">
                <button
                  type="button"
                  className="play"
                  aria-label={status === 'playing' ? 'Pause audio' : 'Play audio'}
                  onClick={togglePlay}
                >
                  <Icon name={status === 'playing' ? 'pause' : 'play'} size={22} />
                </button>
                <div className="rbar__label">
                  <b>{status === 'playing' ? 'Listening' : status === 'paused' ? 'Paused' : 'Listen'}</b>
                  <span>
                    Idea {step + 1} of {total}
                  </span>
                </div>
                <button
                  type="button"
                  className="speed"
                  aria-label={`Playback speed ${rate}×. Change speed`}
                  title="Playback speed"
                  onClick={() => actions.setRate(RATES[(RATES.indexOf(rate) + 1) % RATES.length])}
                >
                  {rate}×
                </button>
              </div>
            )}

            <button type="button" className="btn btn--primary rbar__next" onClick={next}>
              {step === total - 1 ? 'Finish' : 'Next'} <Icon name="arrow-right" />
            </button>
          </div>
        </div>
      )}

      {pop && (
        <div
          ref={popRef}
          className="pop"
          style={{ left: clamp(pop.x, 100, window.innerWidth - 100), top: pop.y }}
        >
          {/* Acting on pointer-down keeps the text selection alive until the highlight is saved. */}
          <button
            type="button"
            onPointerDown={(e) => {
              e.preventDefault()
              confirmPop()
            }}
          >
            <Icon name={pop.kind === 'add' ? 'highlighter' : 'trash'} size={16} />
            {pop.kind === 'add' ? 'Highlight' : 'Remove highlight'}
          </button>
        </div>
      )}

      {tocOpen && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Key ideas">
          <button type="button" className="drawer__scrim" aria-label="Close" onClick={() => setTocOpen(false)} />
          <aside className="drawer__panel">
            <header className="drawer__head">
              <div>
                <p className="eyebrow">Key ideas</p>
                <h2>{book.title}</h2>
              </div>
              <button type="button" className="icon-btn" aria-label="Close" onClick={() => setTocOpen(false)}>
                <Icon name="x" />
              </button>
            </header>
            <ol className="toc">
              {book.ideas.map((item, i) => {
                const done = saved?.done.includes(i)
                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      className={`toc__item ${i === step ? 'is-current' : ''}`}
                      aria-current={i === step ? 'step' : undefined}
                      onClick={() => {
                        go(i)
                        setTocOpen(false)
                      }}
                    >
                      <span className={`toc__num ${done ? 'is-done' : ''}`}>
                        {done ? <Icon name="check" size={15} /> : i + 1}
                      </span>
                      <span className="toc__title">{item.title}</span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </aside>
        </div>
      )}
    </div>
  )
}

export default function Reader() {
  const { id } = useParams()
  const book = getBook(id)
  if (!book) return <NotFound />
  // Keyed by book so all reader state resets when moving to another title.
  return <ReaderView key={book.id} book={book} />
}
