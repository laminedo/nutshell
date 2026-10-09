import { Link } from 'react-router'
import { minutes, type Book } from '../data'
import { actions, useStore } from '../lib/store'
import { Cover } from './Cover'
import { Icon } from './Icon'

export function SaveButton({ book, variant = 'icon' }: { book: Book; variant?: 'icon' | 'button' }) {
  const saved = useStore((s) => s.saved).includes(book.id)
  const label = saved ? 'Saved' : 'Save'
  return (
    <button
      type="button"
      className={variant === 'icon' ? 'save-btn' : 'btn btn--ghost'}
      aria-pressed={saved}
      aria-label={variant === 'icon' ? `${saved ? 'Remove' : 'Save'} ${book.title} ${saved ? 'from' : 'to'} library` : undefined}
      title={variant === 'icon' ? (saved ? 'Remove from library' : 'Save to library') : undefined}
      onClick={() => actions.toggleSaved(book.id)}
    >
      <Icon name="bookmark" size={variant === 'icon' ? 18 : 20} />
      {variant === 'button' && label}
    </button>
  )
}

export function BookMeta({ book }: { book: Book }) {
  return (
    <p className="meta">
      <Icon name="clock" size={14} />
      {minutes(book)} min
      <span aria-hidden="true">·</span>
      {book.ideas.length} key ideas
    </p>
  )
}

export function BookCard({ book }: { book: Book }) {
  const progress = useStore((s) => s.progress[book.id])
  const pct = progress ? Math.round((progress.done.length / book.ideas.length) * 100) : 0
  return (
    <article className="card">
      <Link to={`/book/${book.id}`} className="card__link">
        <div className="card__cover">
          <Cover book={book} decorative />
          {progress?.finished ? (
            <span className="card__badge">
              <Icon name="check" size={13} /> Finished
            </span>
          ) : pct > 0 ? (
            <span className="card__badge">{pct}%</span>
          ) : null}
        </div>
        <h3 className="card__title">{book.title}</h3>
        <p className="card__author">{book.author}</p>
        <BookMeta book={book} />
      </Link>
      <SaveButton book={book} />
    </article>
  )
}

export function BookRow({ books }: { books: Book[] }) {
  return (
    <div className="row" role="list">
      {books.map((b) => (
        <div role="listitem" key={b.id}>
          <BookCard book={b} />
        </div>
      ))}
    </div>
  )
}

export function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid" role="list">
      {books.map((b) => (
        <div role="listitem" key={b.id}>
          <BookCard book={b} />
        </div>
      ))}
    </div>
  )
}
