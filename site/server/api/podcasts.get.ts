import { readFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  const file = resolve(process.cwd(), 'app/data/podcasts.json')
  const content = await readFile(file, 'utf-8')
  return JSON.parse(content)
})
