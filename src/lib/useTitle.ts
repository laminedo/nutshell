import { useEffect } from 'react'

const SITE = 'Nutshell'

/** Set the browser tab title for the current page. */
export function useTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : `${SITE} — great books, in a nutshell`
  }, [title])
}
