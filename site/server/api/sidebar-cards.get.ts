import { readFile } from 'fs/promises'
import { resolve } from 'path'
import { existsSync } from 'fs'

export default defineEventHandler(async () => {
  const file = resolve(process.cwd(), 'app/data/sidebar-cards.json')
  if (!existsSync(file)) return []
  return JSON.parse(await readFile(file, 'utf-8'))
})
