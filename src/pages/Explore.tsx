import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import { BookGrid } from '../components/BookCard'
import { Icon } from '../components/Icon'
import { useTitle } from '../lib/useTitle'
import { books, categories, searchBooks, wordCount, type CategoryId } from '../data'

const sorts = [
  { id: 'recommended', label: 'Recommended' },
  { id: 'shortest', label: 'Shortest first' },
  { id: 'title', label: 'Title A–Z' },
]

const sortTitle = (t: string) => t.replace(/^(the|a|an)\s+/i, '')

export default function Explore() {
  useTitle('Explore')
  const [params, setParams] = useSearchParams()
  const urlQuery = params.get('q') ?? ''
  const category = categories.find((c) => c.id === params.get('category'))?.id ?? null
  const sort = sorts.find((s) => s.id === params.get('sort'))?.id ?? 'recommended'

  // Filters live in the URL so a filtered view can be bookmarked or shared.
  // Start from the address bar rather than `params`, which can lag a pending update.
  function set(key: string, value: string | null) {
    const next = new URLSearchParams(window.location.search)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  // The field is driven by local state so typing is instant; the URL follows a moment later.
  const [q, setQ] = useState(urlQuery)
  const written = useRef(urlQuery)
  const timer = useRef(0)

  function onSearch(value: string) {
    setQ(value)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => {
      written.current = value
      set('q', value || null)
    }, 250)
  }

  // Follow the URL when it changes from outside this field (back button, a link).
  useEffect(() => {
    if (urlQuery === written.current) return
    written.current = urlQuery
    setQ(urlQuery)
  }, [urlQuery])

  useEffect(() => () => window.clearTimeout(timer.current), [])

  // On phones the categories are one scrolling row, so bring the active one into view.
  const chipsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const row = chipsRef.current
    const active = row?.querySelector<HTMLElement>('[aria-pressed="true"]')
    if (!row || !active) return
    const offset = active.getBoundingClientRect().left - row.getBoundingClientRect().left
    row.scrollTo({ left: row.scrollLeft + offset - (row.clientWidth - active.offsetWidth) / 2 })
  }, [category])

  const results = useMemo(() => {
    let list = q.trim() ? searchBooks(q) : books
    if (category) list = list.filter((b) => b.category === category)
    if (sort === 'shortest') list = [...list].sort((a, b) => wordCount(a) - wordCount(b))
    if (sort === 'title') list = [...list].sort((a, b) => sortTitle(a.title).localeCompare(sortTitle(b.title)))
    return list
  }, [q, category, sort])

  const filtered = Boolean(q.trim() || category)

  return (
    <div className="wrap page">
      <header className="page__head">
        <h1>Explore</h1>
        <p className="page__sub">Every summary in the library. Search by title, author or the idea you're after.</p>
      </header>

      <div className="search search--lg search--page" role="search">
        <Icon name="search" />
        <input
          type="search"
          value={q}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Try “habits”, “Seneca” or “money”"
          aria-label="Search books"
        />
      </div>

      <div className="filters">
        <div className="chips" role="group" aria-label="Filter by category" ref={chipsRef}>
          <button type="button" className="chip" aria-pressed={!category} onClick={() => set('category', null)}>
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={category === c.id}
              onClick={() => set('category', category === c.id ? null : (c.id satisfies CategoryId))}
            >
              <span className="chip__dot" style={{ background: c.color }} />
              {c.label}
            </button>
          ))}
        </div>
        <label className="select">
          <span className="sr-only">Sort by</span>
          <select value={sort} onChange={(e) => set('sort', e.target.value === 'recommended' ? null : e.target.value)}>
            {sorts.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        {results.length} {results.length === 1 ? 'book' : 'books'}
        {q.trim() && <> for “{q.trim()}”</>}
      </p>

      {results.length > 0 ? (
        <BookGrid books={results} />
      ) : (
        <div className="empty">
          <h2>Nothing matches that yet</h2>
          <p>Try a different word, or clear the filters to see the whole library.</p>
          {filtered && (
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                window.clearTimeout(timer.current)
                written.current = ''
                setQ('')
                setParams({}, { replace: true })
              }}
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  )
}
