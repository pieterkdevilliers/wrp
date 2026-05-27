import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const file = resolve(process.cwd(), 'app/data/sidebar-cards.json')
  const cards = JSON.parse(await readFile(file, 'utf-8'))

  const idx = cards.findIndex((c: { id: string }) => c.id === id)
  if (idx === -1) {
    throw createError({ statusCode: 404, message: 'Not found' })
  }

  cards[idx] = { ...cards[idx], ...body, id }
  await writeFile(file, JSON.stringify(cards, null, 2))
  return cards[idx]
})
