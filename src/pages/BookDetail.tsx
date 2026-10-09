import { Link, useParams } from 'react-router'
import { BookRow, SaveButton } from '../components/BookCard'
import { Cover } from '../components/Cover'
import { Icon } from '../components/Icon'
import { getBook, getCategory, minutes, related } from '../data'
import { actions, useStore } from '../lib/store'
import { useTitle } from '../lib/useTitle'
import NotFound from './NotFound'

export default function BookDetail() {
  const { id } = useParams()
  const book = getBook(id)
  const progress = useStore((s) => (id ? s.progress[id] : undefined))
  const highlights = useStore((s) => s.highlights)
  useTitle(book ? `${book.title} by ${book.author}` : 'Not found')

  if (!book) return <NotFound />

  const total = book.ideas.length
  const category = getCategory(book.category)
  const started = Boolean(progress) && !progress?.finished
  const resumeAt = started ? Math.min(progress!.idea, total - 1) : 0
  const highlightCount = highlights.filter((h) => h.bookId === book.id).length

  const cta = progress?.finished ? 'Read again' : started ? `Continue · idea ${resumeAt + 1} of ${total}` : 'Start reading'

  return (
    <div className="wrap page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/explore">Explore</Link>
        <Icon name="chevron-right" size={14} />
        <Link to={`/explore?category=${category.id}`}>{category.label}</Link>
      </nav>

      <div className="detail">
        <div className="detail__cover">
          <Cover book={book} />
        </div>

        <div className="detail__main">
          <h1 className="detail__title">{book.title}</h1>
          <p className="detail__author">
            {book.author} <span aria-hidden="true">·</span> {book.year}
          </p>
          <p className="detail__tagline">{book.tagline}</p>

          <ul className="facts">
            <li>
              <Icon name="clock" size={18} /> {minutes(book)} min read
            </li>
            <li>
              <Icon name="list" size={18} /> {total} key ideas
            </li>
            <li>
              <Icon name="headphones" size={18} /> Audio
            </li>
            {progress?.finished && (
              <li className="facts__done">
                <Icon name="check" size={18} /> Finished
              </li>
            )}
          </ul>

          <div className="actions">
            <Link to={progress?.finished ? `/read/${book.id}?idea=1` : `/read/${book.id}`} className="btn btn--primary btn--lg">
              {cta} <Icon name="arrow-right" />
            </Link>
            <SaveButton book={book} variant="button" />
          </div>

          <section className="detail__section">
            <h2>What's it about?</h2>
            <p>{book.about}</p>
          </section>

          <section className="detail__section">
            <h2>Who it's for</h2>
            <ul className="bullets">
              {book.whoFor.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          </section>

          <section className="detail__section">
            <div className="detail__section-head">
              <h2>Key ideas</h2>
              {progress && (
                <button type="button" className="link" onClick={() => actions.resetProgress(book.id)}>
                  Reset progress
                </button>
              )}
            </div>
            <ol className="toc">
              {book.ideas.map((idea, i) => {
                const done = progress?.done.includes(i)
                return (
                  <li key={idea.title}>
                    <Link to={`/read/${book.id}?idea=${i + 1}`} className="toc__item">
                      <span className={`toc__num ${done ? 'is-done' : ''}`}>
                        {done ? <Icon name="check" size={15} /> : i + 1}
                      </span>
                      <span className="toc__title">{idea.title}</span>
                      <Icon name="chevron-right" size={16} />
                    </Link>
                  </li>
                )
              })}
            </ol>
            {highlightCount > 0 && (
              <p className="detail__note">
                <Icon name="highlighter" size={16} />
                <Link to="/library?tab=highlights">
                  {highlightCount} {highlightCount === 1 ? 'highlight' : 'highlights'} saved from this book
                </Link>
              </p>
            )}
          </section>

          <section className="detail__section">
            <h2>About the author</h2>
            <p>{book.aboutAuthor}</p>
          </section>
        </div>
      </div>

      <section className="section section--flush">
        <div className="section__head">
          <h2>More like this</h2>
        </div>
        <BookRow books={related(book, 6)} />
      </section>
    </div>
  )
}
