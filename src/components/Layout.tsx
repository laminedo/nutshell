import { useState, type FormEvent } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router'
import { actions, useIsDark, useStore } from '../lib/store'
import { Icon, LogoMark, type IconName } from './Icon'

const nav: { to: string; label: string; icon: IconName }[] = [
  { to: '/', label: 'Discover', icon: 'home' },
  { to: '/explore', label: 'Explore', icon: 'compass' },
  { to: '/library', label: 'Library', icon: 'library' },
]

export function ThemeToggle() {
  const dark = useIsDark()
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={() => actions.setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
    >
      <Icon name={dark ? 'sun' : 'moon'} />
    </button>
  )
}

export function SearchForm({ size = 'md', autoFocus = false }: { size?: 'md' | 'lg'; autoFocus?: boolean }) {
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  function submit(e: FormEvent) {
    e.preventDefault()
    const query = q.trim()
    navigate(query ? `/explore?q=${encodeURIComponent(query)}` : '/explore')
    setQ('')
  }
  return (
    <form className={`search search--${size}`} role="search" onSubmit={submit}>
      <Icon name="search" size={size === 'lg' ? 20 : 18} />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search titles, authors or ideas"
        aria-label="Search books"
        autoFocus={autoFocus}
      />
      {size === 'lg' && (
        <button type="submit" className="btn btn--ink btn--sm">
          Search
        </button>
      )}
    </form>
  )
}

function Header() {
  const { pathname } = useLocation()
  const savedCount = useStore((s) => s.saved).length
  return (
    <header className="hdr">
      <div className="wrap hdr__in">
        <Link to="/" className="logo" aria-label="Nutshell home">
          <LogoMark />
          Nutshell
        </Link>
        <nav className="hdr__nav" aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}>
              {n.label}
              {n.to === '/library' && savedCount > 0 && <span className="count">{savedCount}</span>}
            </NavLink>
          ))}
        </nav>
        {/* The Explore page has its own, larger search field. */}
        <div className="hdr__search">{pathname !== '/explore' && <SearchForm />}</div>
        <ThemeToggle />
      </div>
    </header>
  )
}

function TabBar() {
  return (
    <nav className="tabbar" aria-label="Main">
      {nav.map((n) => (
        <NavLink key={n.to} to={n.to} end={n.to === '/'}>
          <Icon name={n.icon} size={22} />
          {n.label}
        </NavLink>
      ))}
    </nav>
  )
}

export function Layout() {
  return (
    <div className="shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="wrap footer__in">
          <span className="logo logo--sm">
            <LogoMark size={20} />
            Nutshell
          </span>
          <p>
            Original summaries of public-domain classics. No account needed: your library, progress and highlights are
            stored only in this browser.
          </p>
        </div>
      </footer>
      <TabBar />
    </div>
  )
}
