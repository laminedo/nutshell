import { useMemo } from 'react'
import { Link } from 'react-router'
import { BookMeta, BookRow, SaveButton } from '../components/BookCard'
import { Cover } from '../components/Cover'
import { Icon } from '../components/Icon'
import { SearchForm } from '../components/Layout'
import {
  books,
  booksById,
  booksIn,
  categories,
  collections,
  dailyPick,
  getBook,
  getCategory,
  shelves,
  totalIdeas,
  type Book,
} from '../data'
import { useStore } from '../lib/store'
import { useTitle } from '../lib/useTitle'

function ContinueCard({ book, idea }: { book: Book; idea: number }) {
  const total = book.ideas.length
  return (
    <Link to={`/read/${book.id}`} className="continue">
      <Cover book={book} decorative />
      <div className="continue__body">
        <p className="eyebrow">
          Key idea {idea + 1} of {total}
        </p>
        <h3>{book.title}</h3>
        <p className="continue__next">{book.ideas[idea].title}</p>
        <div className="bar" aria-hidden="true">
          <span style={{ width: `${(idea / total) * 100}%` }} />
        </div>
      </div>
      <span className="continue__go">
        <Icon name="arrow-right" />
      </span>
    </Link>
  )
}

export default function Home() {
  useTitle()
  const progress = useStore((s) => s.progress)
  const inProgress = useMemo(
    () =>
      Object.entries(progress)
        .filter(([, p]) => !p.finished)
        .sort((a, b) => b[1].updatedAt - a[1].updatedAt)
        .map(([id, p]) => ({ book: getBook(id), idea: p.idea }))
        .filter((x): x is { book: Book; idea: number } => Boolean(x.book))
        .slice(0, 3),
    [progress],
  )

  const pick = dailyPick()
  const fan = [pick, ...books.filter((b) => b.id !== pick.id)].slice(0, 3)

  return (
    <>
      <section className="hero wrap">
        <div className="hero__copy">
          <p className="eyebrow">No account · No paywall</p>
          <h1 className="hero__title">
            Great books, <em>in a nutshell.</em>
          </h1>
          <p className="hero__lede">
            The key ideas from timeless books, distilled into short reads you can finish — or listen to — in under
            five minutes.
          </p>
          <SearchForm size="lg" />
          <ul className="hero__stats">
            <li>
              <b>{books.length}</b> books
            </li>
            <li>
              <b>{totalIdeas}</b> key ideas
            </li>
            <li>
              <b>Read</b> or listen
            </li>
          </ul>
        </div>
        <div className="hero__art">
          {fan.map((b, i) => (
            <Link key={b.id} to={`/book/${b.id}`} className={`hero__cover hero__cover--${i}`} aria-label={b.title}>
              <Cover book={b} decorative />
            </Link>
          ))}
        </div>
      </section>

      {inProgress.length > 0 && (
        <section className="section wrap">
          <div className="section__head">
            <h2>Continue reading</h2>
            <Link to="/library?tab=progress" className="more">
              Library <Icon name="arrow-right" size={16} />
            </Link>
          </div>
          <div className="continue-grid">
            {inProgress.map(({ book, idea }) => (
              <ContinueCard key={book.id} book={book} idea={Math.min(idea, book.ideas.length - 1)} />
            ))}
          </div>
        </section>
      )}

      <section className="section wrap">
        <div className="pick">
          <Link to={`/book/${pick.id}`} className="pick__cover" tabIndex={-1} aria-hidden="true">
            <Cover book={pick} decorative />
          </Link>
          <div className="pick__body">
            <p className="eyebrow eyebrow--brand">Today's pick</p>
            <h2 className="pick__title">
              <Link to={`/book/${pick.id}`}>{pick.title}</Link>
            </h2>
            <p className="pick__author">
              {pick.author} · {getCategory(pick.category).label}
            </p>
            <p className="pick__tagline">{pick.tagline}</p>
            <BookMeta book={pick} />
            <div className="actions">
              <Link to={`/read/${pick.id}`} className="btn btn--primary">
                Read now <Icon name="arrow-right" />
              </Link>
              <SaveButton book={pick} variant="button" />
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section__head">
          <h2>Browse by category</h2>
        </div>
        <div className="chips">
          {categories.map((c) => (
            <Link key={c.id} to={`/explore?category=${c.id}`} className="chip chip--lg">
              <span className="chip__dot" style={{ background: c.color }} />
              {c.label}
              <span className="chip__count">{booksIn([c.id]).length}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap section__head">
          <div>
            <h2>Start here</h2>
            <p className="section__sub">A good first handful if you're new to the shelf.</p>
          </div>
          <Link to="/explore" className="more">
            See all <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="wrap wrap--bleed">
          <BookRow books={books.slice(0, 8)} />
        </div>
      </section>

      <section className="section wrap">
        <div className="section__head">
          <div>
            <h2>Collections</h2>
            <p className="section__sub">Short reading lists built around one question.</p>
          </div>
        </div>
        <div className="collections">
          {collections.map((c) => {
            const list = booksById(c.bookIds)
            return (
              <Link key={c.id} to={`/collection/${c.id}`} className="collection">
                <div className="collection__covers">
                  {list.slice(0, 3).map((b) => (
                    <Cover key={b.id} book={b} decorative />
                  ))}
                </div>
                <h3>{c.title}</h3>
                <p>{c.blurb}</p>
                <span className="collection__count">{list.length} books</span>
              </Link>
            )
          })}
        </div>
      </section>

      {shelves.map((shelf) => (
        <section className="section" key={shelf.title}>
          <div className="wrap section__head">
            <div>
              <h2>{shelf.title}</h2>
              <p className="section__sub">{shelf.blurb}</p>
            </div>
          </div>
          <div className="wrap wrap--bleed">
            <BookRow books={booksIn(shelf.categories)} />
          </div>
        </section>
      ))}
    </>
  )
}
