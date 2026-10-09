import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { Layout } from './components/Layout'
import { applyTheme, useStore } from './lib/store'
import BookDetail from './pages/BookDetail'
import Collection from './pages/Collection'
import Explore from './pages/Explore'
import Home from './pages/Home'
import Library from './pages/Library'
import NotFound from './pages/NotFound'
import Reader from './pages/Reader'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const theme = useStore((s) => s.theme)
  useEffect(() => applyTheme(theme), [theme])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="book/:id" element={<BookDetail />} />
          <Route path="collection/:id" element={<Collection />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* The reader is full-screen and has its own controls. */}
        <Route path="read/:id" element={<Reader />} />
      </Routes>
    </>
  )
}
