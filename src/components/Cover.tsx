import type { CSSProperties, ReactNode } from 'react'
import type { Book, CoverArt, Motif } from '../data/types'

/**
 * Covers are generated, not photographed: a colour pair, a small geometric
 * motif in the lower half and the title set in the display face. The art is
 * drawn on a 100 x 150 canvas and scales with the cover.
 */

type Colors = Pick<CoverArt, 'ink' | 'accent'>

const motifs: Record<Motif, (c: Colors) => ReactNode> = {
  columns: ({ ink, accent }) => (
    <>
      <path d="M14 86 50 70l36 16z" fill={accent} />
      <rect x="16" y="88" width="68" height="4" fill={accent} />
      {[25, 41.7, 58.3, 75].map((x) => (
        <rect key={x} x={x - 3.5} y="95" width="7" height="40" fill={ink} opacity=".9" />
      ))}
      <rect x="12" y="137" width="76" height="4" fill={accent} />
    </>
  ),
  hourglass: ({ ink, accent }) => (
    <>
      <rect x="26" y="74" width="48" height="4" rx="1" fill={ink} />
      <rect x="26" y="136" width="48" height="4" rx="1" fill={ink} />
      <path d="M31 80h38L50 107z" fill={accent} />
      <path d="M50 107l19 27H31z" fill={ink} opacity=".18" />
      <path d="M50 122l9 12H41z" fill={accent} />
      <path d="M50 107v14" stroke={accent} strokeWidth="1.5" />
    </>
  ),
  rings: ({ ink, accent }) => (
    <>
      <circle cx="50" cy="108" r="33" fill="none" stroke={ink} strokeWidth="1.5" strokeDasharray="2 4.5" opacity=".7" />
      <circle cx="50" cy="108" r="22" fill="none" stroke={ink} strokeWidth="1.5" opacity=".45" />
      <circle cx="50" cy="108" r="11" fill={accent} />
    </>
  ),
  waves: ({ ink, accent }) => (
    <>
      {[88, 102, 116, 130].map((y, i) => (
        <path
          key={y}
          d={`M-6 ${y}q14-10 28 0t28 0 28 0 28 0`}
          fill="none"
          stroke={i === 1 ? accent : ink}
          strokeWidth={i === 1 ? 4 : 2.5}
          strokeLinecap="round"
          opacity={i === 1 ? 1 : 0.75}
        />
      ))}
    </>
  ),
  chevrons: ({ ink, accent }) => (
    <>
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M22 ${138 - i * 19}l28-20 28 20`}
          fill="none"
          stroke={i === 2 ? accent : ink}
          strokeWidth="6"
          opacity={i === 2 ? 1 : 0.85}
        />
      ))}
    </>
  ),
  crown: ({ ink, accent }) => (
    <>
      <path d="M20 132V94l15 17 15-27 15 27 15-17v38z" fill={accent} />
      <rect x="20" y="136" width="60" height="4" fill={ink} />
      <circle cx="20" cy="90" r="3" fill={ink} />
      <circle cx="50" cy="80" r="3" fill={ink} />
      <circle cx="80" cy="90" r="3" fill={ink} />
    </>
  ),
  dots: ({ ink, accent }) => (
    <>
      {Array.from({ length: 30 }, (_, i) => {
        const hot = [3, 8, 13, 16, 21, 26].includes(i)
        return (
          <circle
            key={i}
            cx={20 + (i % 6) * 12}
            cy={84 + Math.floor(i / 6) * 12}
            r={hot ? 3.4 : 2.4}
            fill={hot ? accent : ink}
            opacity={hot ? 1 : 0.5}
          />
        )
      })}
    </>
  ),
  ziggurat: ({ ink, accent }) => (
    <>
      <circle cx="74" cy="82" r="8" fill={accent} />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={12 + i * 9.5}
          y={127 - i * 13}
          width={76 - i * 19}
          height="12"
          fill={i % 2 ? accent : ink}
        />
      ))}
    </>
  ),
  clock: ({ ink, accent }) => (
    <>
      <path d="M50 108V75a33 33 0 0 1 28.6 16.5z" fill={accent} />
      <circle cx="50" cy="108" r="33" fill="none" stroke={ink} strokeWidth="2.5" />
      {Array.from({ length: 24 }, (_, i) => (
        <path
          key={i}
          d="M50 78v4"
          stroke={ink}
          strokeWidth={i % 6 === 0 ? 2.2 : 1}
          transform={`rotate(${i * 15} 50 108)`}
        />
      ))}
      <circle cx="50" cy="108" r="2.5" fill={ink} />
    </>
  ),
  bolt: ({ ink, accent }) => (
    <>
      <path d="M58 70 30 110h17l-8 32 32-44H54l9-28z" fill={accent} />
      <path d="M14 140h72" stroke={ink} strokeWidth="2.5" strokeLinecap="round" opacity=".6" />
    </>
  ),
  sprout: ({ ink, accent }) => (
    <>
      <path d="M50 138v-36" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M50 116c-16 0-24-12-24-24 14 0 24 9 24 24z" fill={accent} />
      <path d="M50 104c0-16 10-26 26-26 0 15-10 26-26 26z" fill={accent} />
      <path d="M24 138h52" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  sun: ({ ink, accent }) => (
    <>
      <circle cx="50" cy="150" r="40" fill={accent} />
      {[-72, -48, -24, 0, 24, 48, 72].map((a) => (
        <path key={a} d="M50 102v-10" stroke={ink} strokeWidth="3" strokeLinecap="round" transform={`rotate(${a} 50 150)`} />
      ))}
    </>
  ),
  loops: ({ ink, accent }) => (
    <>
      {[24, 37, 50, 63, 76].map((cx, i) => (
        <circle
          key={cx}
          cx={cx}
          cy="110"
          r="15"
          fill="none"
          stroke={i === 3 ? accent : ink}
          strokeWidth={i === 3 ? 3.5 : 2}
          opacity={i === 3 ? 1 : 0.7}
        />
      ))}
    </>
  ),
  tree: ({ ink, accent }) => (
    <>
      <path
        d="M50 142v-28M50 114 34 96M50 114l16-18M34 96l-9-15M34 96l7-17M66 96l-7-17M66 96l9-15M50 114V92"
        fill="none"
        stroke={ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[
        [25, 79],
        [41, 77],
        [50, 89],
        [59, 77],
        [75, 79],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="4" fill={accent} />
      ))}
    </>
  ),
  horizon: ({ ink, accent }) => (
    <>
      <path d="M29 104a21 21 0 0 1 42 0z" fill={accent} />
      <path d="M12 104h76" stroke={ink} strokeWidth="2" strokeLinecap="round" />
      <path d="M31 113h38M37 121h26M42 129h16M46 137h8" stroke={accent} strokeWidth="2.8" strokeLinecap="round" />
    </>
  ),
  door: ({ ink, accent }) => (
    <>
      <path d="M31 140V96a19 19 0 0 1 38 0v44z" fill={accent} />
      <path d="M50 77v63" stroke={ink} strokeWidth="1.2" opacity=".35" />
      <circle cx="55.5" cy="114" r="2.2" fill={ink} opacity=".8" />
      <path d="M16 140h68" stroke={ink} strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  gap: ({ ink, accent }) => (
    <>
      <circle
        cx="48"
        cy="110"
        r="28"
        fill="none"
        stroke={ink}
        strokeWidth="6"
        strokeDasharray="140 36"
        transform="rotate(-25 48 110)"
      />
      <circle cx="80" cy="80" r="6" fill={accent} />
    </>
  ),
}

interface Props {
  book: Book
  className?: string
  /** Set when the cover sits inside something that already names the book. */
  decorative?: boolean
}

export function Cover({ book, className = '', decorative = false }: Props) {
  const { bg, ink, accent, motif } = book.cover
  const length = book.title.length > 30 ? 'xl' : book.title.length > 19 ? 'lg' : 'md'
  return (
    <div
      className={`cover ${className}`}
      style={{ '--c-bg': bg, '--c-ink': ink } as CSSProperties}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : `${book.title} by ${book.author}`}
      aria-hidden={decorative || undefined}
    >
      <svg className="cover__art" viewBox="0 0 100 150" preserveAspectRatio="xMidYMax slice">
        {motifs[motif]({ ink, accent })}
      </svg>
      <div className="cover__text">
        <span className="cover__title" data-length={length}>
          {book.title}
        </span>
        <span className="cover__author">{book.author}</span>
      </div>
    </div>
  )
}
