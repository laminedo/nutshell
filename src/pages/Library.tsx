import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router'
import { BookGrid } from '../components/BookCard'
import { Icon } from '../components/Icon'
import { booksById, getBook, type Book } from '../data'
import { actions, useStore, type Highlight } from '../lib/store'
import { useTitle } from '../lib/useTitle'

const tabs = [
  { id: 'saved', label: 'Saved' },
  { id: 'progress', label: 'In progress' },
  { id: 'finished', label: 'Finished' },
  { id: 'highlights', label: 'Highlights' },
] as const

type TabId = (typeof tabs)[number]['id']

const empties: Record<TabId, { title: string; body: string }> = {
  saved: {
    title: 'Nothing saved yet',
    body: 'Tap the bookmark on any book to keep it here for later.',
  },
  progress: {
    title: 'No books in progress',
    body: 'Start a summary and it will wait here until you finish it.',
  },
  finished: {
    title: 'No finished books yet',
    body: 'Most summaries take under five minutes. Your first one is close.',
  },
  highlights: {
    title: 'No highlights yet',
    body: 'While reading, select any passage and choose Highlight to collect it here.',
  },
}

function exportHighlights(groups: { book: Book; items: Highlight[] }[]) {
  let md = '# My Nutshell highlights\n\n'
  for (const { book, items } of groups) {
    md += `## ${book.title} — ${book.author}\n\n`
    for (const h of items) {
      md += `> ${h.text.replace(/\n/g, ' ')}\n\n`
      md += `Key idea ${h.idea + 1}: ${book.ideas[h.idea]?.title ?? ''}\n\n`
    }
  }
  const url = URL.createObjectURL(new Blob([md], { type: 'text/markdown' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'nutshell-highlights.md'
  a.click()
  URL.revokeObjectURL(url)
}

export default function Library() {
  useTitle('Your library')
  const [params, setParams] = useSearchParams()
  const tab: TabId = tabs.find((t) => t.id === params.get('tab'))?.id ?? 'saved'

  const saved = useStore((s) => s.saved)
  const progress = useStore((s) => s.progress)
  const highlights = useStore((s) => s.highlights)

  const lists = useMemo(() => {
    const entries = Object.entries(progress).sort((a, b) => b[1].updatedAt - a[1].updatedAt)
    return {
      saved: booksById(saved),
      progress: booksById(entries.filter(([, p]) => !p.finished).map(([id]) => id)),
      finished: booksById(entries.filter(([, p]) => p.finished).map(([id]) => id)),
    }
  }, [saved, progress])

  const groups = useMemo(() => {
    const map = new Map<string, Highlight[]>()
    for (const h of highlights) map.set(h.bookId, [...(map.get(h.bookId) ?? []), h])
    return [...map]
      .map(([id, items]) => ({ book: getBook(id), items: [...items].sort((a, b) => a.idea - b.idea) }))
      .filter((g): g is { book: Book; items: Highlight[] } => Boolean(g.book))
  }, [highlights])

  const counts: Record<TabId, number> = {
    saved: lists.saved.length,
    progress: lists.progress.length,
    finished: lists.finished.length,
    highlights: highlights.length,
  }

  return (
    <div className="wrap page">
      <header className="page__head">
        <h1>Your library</h1>
        <p className="page__sub">Kept in this browser only. No account, nothing to sync.</p>
      </header>

      <div className="tabs" role="tablist" aria-label="Library sections">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className="tab"
            onClick={() => setParams(t.id === 'saved' ? {} : { tab: t.id }, { replace: true })}
          >
            {t.label}
            <span className="count">{counts[t.id]}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" aria-label={tabs.find((t) => t.id === tab)!.label}>
        {counts[tab] === 0 ? (
          <div className="empty">
            <h2>{empties[tab].title}</h2>
            <p>{empties[tab].body}</p>
            <Link to="/explore" className="btn btn--primary">
              Find a book
            </Link>
          </div>
        ) : tab === 'highlights' ? (
          <>
            <div className="toolbar">
              <button type="button" className="btn btn--ghost btn--sm" onClick={() => exportHighlights(groups)}>
                <Icon name="download" size={16} /> Export as Markdown
              </button>
            </div>
            {groups.map(({ book, items }) => (
              <section key={book.id} className="hl-group">
                <h2>
                  <Link to={`/book/${book.id}`}>{book.title}</Link>
                  <span>{book.author}</span>
                </h2>
                <ul>
                  {items.map((h) => (
                    <li key={h.id} className="hl">
                      <blockquote>{h.text.replace(/\n/g, ' ')}</blockquote>
                      <div className="hl__foot">
                        <Link to={`/read/${book.id}?idea=${h.idea + 1}`}>
                          Key idea {h.idea + 1}: {book.ideas[h.idea]?.title}
                        </Link>
                        <button
                          type="button"
                          className="icon-btn icon-btn--sm"
                          aria-label="Remove highlight"
                          title="Remove highlight"
                          onClick={() => actions.removeHighlight(h.id)}
                        >
                          <Icon name="trash" size={16} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </>
        ) : (
          <BookGrid books={lists[tab]} />
        )}
      </div>
    </div>
  )
}
