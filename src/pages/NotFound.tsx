import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="wrap page">
      <div className="empty empty--tall">
        <h1>That page isn't on the shelf</h1>
        <p>The link may be old, or the book may have been renamed.</p>
        <Link to="/explore" className="btn btn--primary">
          Browse the library
        </Link>
      </div>
    </div>
  )
}
