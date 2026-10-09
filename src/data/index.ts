import { adventure } from './books/adventure'
import { arts } from './books/arts'
import { attraction } from './books/attraction'
import { biography } from './books/biography'
import { business } from './books/business'
import { education } from './books/education'
import { fiction } from './books/fiction'
import { growth } from './books/growth'
import { health } from './books/health'
import { history } from './books/history'
import { investing } from './books/investing'
import { love } from './books/love'
import { philosophy } from './books/philosophy'
import { politics } from './books/politics'
import { psychology } from './books/psychology'
import { science } from './books/science'
import { selfHelp } from './books/selfHelp'
import { spirituality } from './books/spirituality'
import { strategyMoney } from './books/strategyMoney'
import { world } from './books/world'
import type { Book, Category, CategoryId, Collection, Shelf } from './types'

export type { Book, Category, CategoryId, Collection, KeyIdea, Shelf } from './types'

// Editorial order: the default ("Recommended") order used across the app.
const recommended = [
  'meditations',
  'the-science-of-getting-rich',
  'the-art-of-war',
  'the-prophet',
  'habit',
  'reminiscences-of-a-stock-operator',
  'the-richest-man-in-babylon',
  'the-symposium',
  'self-reliance',
  'acres-of-diamonds',
  'walden',
  'my-life-and-work',
  'the-great-gatsby',
  'south',
  'narrative-of-the-life-of-frederick-douglass',
  'the-republic',
  'memory-ebbinghaus',
  'relativity',
  'the-histories',
  'letters-to-a-young-poet',
  'the-montessori-method',
  'notes-on-nursing',
  'on-the-shortness-of-life',
  'how-to-live-on-24-hours-a-day',
  'a-room-of-ones-own',
  'the-prince',
  'tao-te-ching',
  'autobiography-of-benjamin-franklin',
  'on-liberty',
  'enchiridion',
  'the-wealth-of-nations',
  'as-a-man-thinketh',
  'on-the-origin-of-species',
]

const rank = (id: string) => {
  const i = recommended.indexOf(id)
  return i === -1 ? recommended.length : i
}

export const books: Book[] = [
  ...philosophy,
  ...strategyMoney,
  ...growth,
  ...world,
  ...selfHelp,
  ...attraction,
  ...love,
  ...spirituality,
  ...business,
  ...investing,
  ...history,
  ...psychology,
  ...politics,
  ...biography,
  ...fiction,
  ...science,
  ...health,
  ...education,
  ...arts,
  ...adventure,
].sort(
  (a, b) => rank(a.id) - rank(b.id),
)

const byId = new Map(books.map((b) => [b.id, b]))

export const categories: Category[] = [
  { id: 'philosophy', label: 'Philosophy', color: '#e0a93b' },
  { id: 'mindset', label: 'Mind & Habits', color: '#3f7d4f' },
  { id: 'productivity', label: 'Productivity', color: '#f26b3a' },
  { id: 'money', label: 'Money & Economics', color: '#1e4d40' },
  { id: 'strategy', label: 'Strategy & Leadership', color: '#d23a2a' },
  { id: 'nature', label: 'Science & Nature', color: '#2f5d62' },
  { id: 'society', label: 'Society & Ideas', color: '#2a6fdb' },
  { id: 'selfhelp', label: 'Self-Help', color: '#e9b44c' },
  { id: 'attraction', label: 'Law of Attraction', color: '#7b4fc4' },
  { id: 'love', label: 'Love & Relationships', color: '#d9455f' },
  { id: 'spirituality', label: 'Spirituality', color: '#c9762b' },
  { id: 'business', label: 'Business', color: '#1d4e89' },
  { id: 'investing', label: 'Investing', color: '#3ebd93' },
  { id: 'history', label: 'History', color: '#8d6e3f' },
  { id: 'politics', label: 'Politics & Government', color: '#34495e' },
  { id: 'biography', label: 'Biography & Memoir', color: '#a0522d' },
  { id: 'psychology', label: 'Psychology', color: '#0e7c86' },
  { id: 'health', label: 'Health & Wellness', color: '#4caf7a' },
  { id: 'education', label: 'Education & Learning', color: '#f08a24' },
  { id: 'fiction', label: 'Classic Fiction', color: '#7d3c98' },
  { id: 'arts', label: 'Creativity & the Arts', color: '#e84a8a' },
  { id: 'adventure', label: 'Adventure & Exploration', color: '#1f6fb2' },
]

export const collections: Collection[] = [
  {
    id: 'stoic-starter-kit',
    title: 'The Stoic Starter Kit',
    blurb: 'Three short ancient texts on staying calm, focused and free.',
    bookIds: ['meditations', 'enchiridion', 'on-the-shortness-of-life'],
  },
  {
    id: 'own-your-days',
    title: 'Own Your Days',
    blurb: 'Time, routines and the habits that quietly run your life.',
    bookIds: ['how-to-live-on-24-hours-a-day', 'habit', 'autobiography-of-benjamin-franklin'],
  },
  {
    id: 'money-from-first-principles',
    title: 'Money, From First Principles',
    blurb: 'How wealth is built, by one person and by whole nations.',
    bookIds: ['the-richest-man-in-babylon', 'the-wealth-of-nations', 'autobiography-of-benjamin-franklin'],
  },
  {
    id: 'think-for-yourself',
    title: 'Think for Yourself',
    blurb: 'Four arguments for going your own way.',
    bookIds: ['self-reliance', 'on-liberty', 'walden', 'a-room-of-ones-own'],
  },
  {
    id: 'power-and-strategy',
    title: 'Power & Strategy',
    blurb: 'Three very different playbooks for winning and leading.',
    bookIds: ['the-art-of-war', 'the-prince', 'tao-te-ching'],
  },
  {
    id: 'mind-over-matter',
    title: 'Mind Over Matter',
    blurb: 'The founding texts of the law of attraction.',
    bookIds: ['the-science-of-getting-rich', 'the-master-key-system', 'thought-vibration', 'as-a-man-thinketh'],
  },
  {
    id: 'what-is-love',
    title: 'What Is Love?',
    blurb: 'A philosopher, a poet, a novelist and a preacher answer.',
    bookIds: ['the-symposium', 'on-love', 'the-prophet', 'the-greatest-thing-in-the-world'],
  },
  {
    id: 'the-inner-life',
    title: 'The Inner Life',
    blurb: 'Sacred classics from four traditions.',
    bookIds: ['bhagavad-gita', 'the-dhammapada', 'tao-te-ching', 'confessions'],
  },
  {
    id: 'market-wisdom',
    title: 'Market Wisdom',
    blurb: 'Old lessons about bubbles, patience and your own nerves.',
    bookIds: [
      'reminiscences-of-a-stock-operator',
      'extraordinary-popular-delusions',
      'the-psychology-of-the-stock-market',
      'confusion-de-confusiones',
    ],
  },
  {
    id: 'built-to-sell',
    title: 'Builders & Sellers',
    blurb: 'How the first modern businesses were made and marketed.',
    bookIds: ['my-life-and-work', 'scientific-advertising', 'obvious-adams', 'the-art-of-money-getting'],
  },
  {
    id: 'how-to-learn-anything',
    title: 'How to Learn Anything',
    blurb: 'What a century of research and teaching says about learning well.',
    bookIds: ['memory-ebbinghaus', 'how-we-think', 'talks-to-teachers-on-psychology', 'the-aims-of-education', 'habit'],
  },
  {
    id: 'voices-of-freedom',
    title: 'Voices of Freedom',
    blurb: 'Firsthand accounts of slavery, resistance and self-liberation.',
    bookIds: [
      'narrative-of-the-life-of-frederick-douglass',
      'twelve-years-a-slave',
      'up-from-slavery',
      'civil-disobedience',
      'the-story-of-my-experiments-with-truth',
    ],
  },
  {
    id: 'to-the-ends-of-the-earth',
    title: 'To the Ends of the Earth',
    blurb: 'Ice, oceans and the people who would not turn back.',
    bookIds: ['south', 'the-worst-journey-in-the-world', 'the-south-pole', 'sailing-alone-around-the-world'],
  },
  {
    id: 'how-science-began',
    title: 'How Science Began',
    blurb: 'The books that taught us to trust evidence over authority.',
    bookIds: [
      'novum-organum',
      'on-the-revolutions-of-the-heavenly-spheres',
      'dialogue-concerning-the-two-chief-world-systems',
      'principia',
      'on-the-origin-of-species',
    ],
  },
  {
    id: 'the-creative-life',
    title: 'The Creative Life',
    blurb: 'Advice from artists and writers on making work that matters.',
    bookIds: ['letters-to-a-young-poet', 'the-art-spirit', 'the-elements-of-style', 'a-room-of-ones-own', 'poetics'],
  },
  {
    id: 'who-should-rule',
    title: 'Who Should Rule?',
    blurb: 'Twenty-four centuries of argument about power and consent.',
    bookIds: ['the-republic', 'leviathan', 'second-treatise-of-government', 'the-federalist-papers', 'on-liberty'],
  },
]

export const shelves: Shelf[] = [
  {
    title: 'Calm your mind',
    blurb: 'Philosophy and psychology for a steadier inner life.',
    categories: ['philosophy', 'mindset'],
  },
  {
    title: 'Work, money & power',
    blurb: 'Practical thinking about time, wealth and winning.',
    categories: ['productivity', 'money', 'strategy'],
  },
  {
    title: 'Big ideas about the world',
    blurb: 'Books that changed how we see nature and society.',
    categories: ['nature', 'society'],
  },
  {
    title: 'Believe and become',
    blurb: 'Self-help and the law of attraction, from the original sources.',
    categories: ['selfhelp', 'attraction'],
  },
  {
    title: 'Love & spirit',
    blurb: 'On the heart, the soul and the people we share life with.',
    categories: ['love', 'spirituality'],
  },
  {
    title: 'Build and invest',
    blurb: 'Lessons from founders, sellers and speculators.',
    categories: ['business', 'investing'],
  },
  {
    title: 'The human story',
    blurb: 'History, politics and remarkable lives.',
    categories: ['history', 'politics', 'biography'],
  },
  {
    title: 'Mind and body',
    blurb: 'How we think, learn and stay well.',
    categories: ['psychology', 'education', 'health'],
  },
  {
    title: 'Stories and imagination',
    blurb: 'Great novels, the arts and true adventures.',
    categories: ['fiction', 'arts', 'adventure'],
  },
]

export const getBook = (id: string | undefined) => (id ? byId.get(id) : undefined)

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!

export const getCollection = (id: string | undefined) => collections.find((c) => c.id === id)

export const booksIn = (ids: CategoryId[]) => books.filter((b) => ids.includes(b.category))

export const booksById = (ids: string[]) =>
  ids.map((id) => byId.get(id)).filter((b): b is Book => Boolean(b))

const countWords = (s: string) => s.trim().split(/\s+/).length

const wordCounts = new Map(
  books.map((b) => [
    b.id,
    b.ideas.reduce((n, idea) => n + countWords(idea.title) + idea.body.reduce((m, p) => m + countWords(p), 0), 0) +
      countWords(b.takeaway),
  ]),
)

export const wordCount = (book: Book) => wordCounts.get(book.id) ?? 0

/** Reading time at a relaxed ~200 words per minute. */
export const minutes = (book: Book) => Math.max(1, Math.round(wordCount(book) / 200))

export const totalIdeas = books.reduce((n, b) => n + b.ideas.length, 0)

/** The same pick for everyone on a given calendar day. */
export function dailyPick(date = new Date()): Book {
  const day = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000)
  return books[day % books.length]
}

/** Books that pair well with the given one: same collection first, then same category. */
export function related(book: Book, limit = 4): Book[] {
  const ids = new Set<string>()
  for (const c of collections) if (c.bookIds.includes(book.id)) c.bookIds.forEach((id) => ids.add(id))
  for (const b of books) if (b.category === book.category) ids.add(b.id)
  for (const b of books) ids.add(b.id)
  ids.delete(book.id)
  return booksById([...ids]).slice(0, limit)
}

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')

const searchIndex = books.map((book) => ({
  book,
  fields: [
    { text: normalize(book.title), weight: 6 },
    { text: normalize(book.author), weight: 5 },
    { text: normalize(getCategory(book.category).label), weight: 3 },
    { text: normalize(book.ideas.map((i) => i.title).join(' ')), weight: 3 },
    { text: normalize(`${book.tagline} ${book.about}`), weight: 2 },
    { text: normalize(book.ideas.map((i) => i.body.join(' ')).join(' ')), weight: 1 },
  ],
}))

/** Every word of the query has to appear somewhere; better fields rank higher. */
export function searchBooks(query: string): Book[] {
  const tokens = normalize(query).split(/\s+/).filter(Boolean)
  if (tokens.length === 0) return books
  const scored: { book: Book; score: number }[] = []
  for (const entry of searchIndex) {
    let score = 0
    let matchedAll = true
    for (const token of tokens) {
      const best = Math.max(0, ...entry.fields.filter((f) => f.text.includes(token)).map((f) => f.weight))
      if (best === 0) {
        matchedAll = false
        break
      }
      score += best
    }
    if (matchedAll) scored.push({ book: entry.book, score })
  }
  return scored.sort((a, b) => b.score - a.score).map((s) => s.book)
}
