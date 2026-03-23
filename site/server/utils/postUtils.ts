import { readFile, readdir, writeFile, unlink } from 'fs/promises'
import { resolve } from 'path'
import { existsSync, mkdirSync } from 'fs'

export function postsDir() {
  const dir = resolve(process.cwd(), 'content/posts')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  return dir
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function serializePost(data: { title: string; date: string; description: string; content: string }): string {
  return `---\ntitle: "${data.title.replace(/"/g, '\\"')}"\ndate: "${data.date}"\ndescription: "${data.description.replace(/"/g, '\\"')}"\n---\n\n${data.content}`
}

export function parsePost(raw: string, slug: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return null
  const meta: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(': ')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const val = line.slice(idx + 2).trim().replace(/^"(.*)"$/, '$1')
    meta[key] = val
  }
  return { slug, title: meta.title ?? '', date: meta.date ?? '', description: meta.description ?? '', content: match[2].trim() }
}

export async function listPosts() {
  const dir = postsDir()
  const files = await readdir(dir)
  const posts = await Promise.all(
    files
      .filter(f => f.endsWith('.md'))
      .map(async f => {
        const slug = f.replace(/\.md$/, '')
        const raw = await readFile(resolve(dir, f), 'utf-8')
        return parsePost(raw, slug)
      })
  )
  return posts.filter(Boolean).sort((a, b) => (b!.date > a!.date ? 1 : -1))
}
