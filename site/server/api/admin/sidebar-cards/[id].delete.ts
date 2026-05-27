import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const id = getRouterParam(event, 'id')
  const file = resolve(process.cwd(), 'app/data/sidebar-cards.json')
  const cards = JSON.parse(await readFile(file, 'utf-8'))

  const filtered = cards.filter((c: { id: string }) => c.id !== id)
  if (filtered.length === cards.length) {
    throw createError({ statusCode: 404, message: 'Not found' })
  }

  await writeFile(file, JSON.stringify(filtered, null, 2))
  return { ok: true }
})
