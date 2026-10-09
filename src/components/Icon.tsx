import type { ReactNode } from 'react'

const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 21 21" />
    </>
  ),
  bookmark: <path d="M6.5 4h11v16.5L12 16.5l-5.5 4z" />,
  play: <path d="M8 5v14l11-7z" fill="currentColor" />,
  pause: (
    <>
      <rect x="6.5" y="5" width="3.5" height="14" rx="1" fill="currentColor" />
      <rect x="14" y="5" width="3.5" height="14" rx="1" fill="currentColor" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      <rect x="3" y="14" width="4.5" height="6.5" rx="1.5" />
      <rect x="16.5" y="14" width="4.5" height="6.5" rx="1.5" />
    </>
  ),
  list: <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01" />,
  check: <path d="m5 12.5 5 5 9-10.5" />,
  'chevron-left': <path d="m15 5-7 7 7 7" />,
  'chevron-right': <path d="m9 5 7 7-7 7" />,
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />,
  highlighter: <path d="m14.5 4.5 5 5L10 19l-5.5 1 1-5.5zM13 6l5 5M4 21h16" />,
  trash: <path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13M10.5 11v5.5M13.5 11v5.5" />,
  download: <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />,
  home: <path d="m4 11 8-7 8 7M6 9.5V20h12V9.5" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5z" />
    </>
  ),
  library: <path d="M5 4v16M9.5 4v16M14 6l4.5 14M3 20h18" />,
  restart: <path d="M4 4.5V10h5.5M4.6 13.5A7.5 7.5 0 1 0 6.5 7L4 10" />,
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export function LogoMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M16 3.5c6 0 10 4.9 10 11.3 0 6.7-4.4 12-10 12S6 21.5 6 14.8C6 8.4 10 3.5 16 3.5Z"
        fill="var(--brand)"
      />
      <path
        d="M16 3.5v23.3M11 9.5c2 3.2 2 8.2 0 11.4M21 9.5c-2 3.2-2 8.2 0 11.4"
        fill="none"
        stroke="var(--brand-ink)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}
