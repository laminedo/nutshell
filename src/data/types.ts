export type CategoryId =
  | 'philosophy'
  | 'strategy'
  | 'money'
  | 'productivity'
  | 'mindset'
  | 'nature'
  | 'society'
  | 'selfhelp'
  | 'attraction'
  | 'love'
  | 'spirituality'
  | 'business'
  | 'investing'
  | 'history'
  | 'psychology'
  | 'politics'
  | 'biography'
  | 'fiction'
  | 'health'
  | 'education'
  | 'arts'
  | 'adventure'

export type Motif =
  | 'columns'
  | 'hourglass'
  | 'rings'
  | 'waves'
  | 'chevrons'
  | 'crown'
  | 'dots'
  | 'ziggurat'
  | 'clock'
  | 'bolt'
  | 'sprout'
  | 'sun'
  | 'loops'
  | 'tree'
  | 'horizon'
  | 'door'
  | 'gap'

export interface CoverArt {
  bg: string
  ink: string
  accent: string
  motif: Motif
}

export interface KeyIdea {
  title: string
  /** Paragraphs. Keep them free of abbreviations with periods so sentence splitting for audio stays clean. */
  body: string[]
}

export interface Book {
  id: string
  title: string
  author: string
  year: string
  category: CategoryId
  tagline: string
  about: string
  whoFor: string[]
  aboutAuthor: string
  ideas: KeyIdea[]
  takeaway: string
  cover: CoverArt
}

export interface Category {
  id: CategoryId
  label: string
  color: string
}

export interface Collection {
  id: string
  title: string
  blurb: string
  bookIds: string[]
}

export interface Shelf {
  title: string
  blurb: string
  categories: CategoryId[]
}
