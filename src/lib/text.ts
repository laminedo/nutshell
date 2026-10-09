import type { KeyIdea } from '../data/types'

export interface Span {
  start: number
  end: number
}

/** One thing the narrator says: the title (para -1) or a sentence inside a paragraph. */
export interface Unit extends Span {
  text: string
  para: number
}

export interface Mark extends Span {
  id: string
}

export interface Segment {
  text: string
  markId?: string
  speaking: boolean
}

/** Split a paragraph into sentences, keeping each sentence's character offsets. */
export function splitSentences(text: string): (Span & { text: string })[] {
  const out: (Span & { text: string })[] = []
  const re = /[^.!?]+(?:[.!?]+["'”’)]*|$)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(text))) {
    const lead = m[0].length - m[0].trimStart().length
    const body = m[0].trim()
    if (body) out.push({ text: body, start: m.index + lead, end: m.index + lead + body.length })
  }
  return out
}

/** The narration script for a key idea: its title, then every sentence in order. */
export function buildUnits(idea: KeyIdea): Unit[] {
  const title = /[.!?]$/.test(idea.title) ? idea.title : `${idea.title}.`
  const units: Unit[] = [{ text: title, para: -1, start: 0, end: idea.title.length }]
  idea.body.forEach((p, para) => {
    for (const s of splitSentences(p)) units.push({ ...s, para })
  })
  return units
}

/**
 * Cut a paragraph into runs so that saved highlights and the sentence being
 * read aloud can both be drawn, even where they overlap.
 */
export function segment(text: string, marks: Mark[], speaking: Span | null): Segment[] {
  const cuts = new Set([0, text.length])
  for (const m of marks) {
    cuts.add(m.start)
    cuts.add(m.end)
  }
  if (speaking) {
    cuts.add(speaking.start)
    cuts.add(speaking.end)
  }
  const points = [...cuts].filter((p) => p >= 0 && p <= text.length).sort((a, b) => a - b)
  const segments: Segment[] = []
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i]
    const b = points[i + 1]
    segments.push({
      text: text.slice(a, b),
      markId: marks.find((m) => m.start <= a && m.end >= b)?.id,
      speaking: Boolean(speaking && speaking.start <= a && speaking.end >= b),
    })
  }
  return segments
}

/** Normalise a text selection: trimmed, one line per paragraph it touched. */
export function cleanSelection(raw: string): string {
  return raw
    .split(/\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .join('\n')
}

/** Find where a saved highlight sits inside the paragraphs of a key idea. */
export function locateMarks(body: string[], highlights: { id: string; text: string }[]): Mark[][] {
  const marks: Mark[][] = body.map(() => [])
  for (const h of highlights) {
    for (const chunk of h.text.split('\n')) {
      const para = body.findIndex((p) => p.includes(chunk))
      if (para === -1) continue
      const start = body[para].indexOf(chunk)
      marks[para].push({ id: h.id, start, end: start + chunk.length })
    }
  }
  return marks
}
