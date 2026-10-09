import { Link, useParams } from 'react-router'
import { BookGrid } from '../components/BookCard'
import { Icon } from '../components/Icon'
import { booksById, getCollection, minutes } from '../data'
import { useTitle } from '../lib/useTitle'
import NotFound from './NotFound'

export default function Collection() {
  const { id } = useParams()
  const collection = getCollection(id)
  useTitle(collection?.title ?? 'Not found')
  if (!collection) return <NotFound />

  const list = booksById(collection.bookIds)
  const total = list.reduce((n, b) => n + minutes(b), 0)

  return (
    <div className="wrap page">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Discover</Link>
        <Icon name="chevron-right" size={14} />
        <span>Collections</span>
      </nav>
      <header className="page__head">
        <p className="eyebrow eyebrow--brand">Collection</p>
        <h1>{collection.title}</h1>
        <p className="page__sub">{collection.blurb}</p>
        <p className="meta">
          <Icon name="clock" size={14} />
          {list.length} books
          <span aria-hidden="true">·</span>
          about {total} minutes in total
        </p>
      </header>
      <BookGrid books={list} />
    </div>
  )
}
