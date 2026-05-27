import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { randomUUID } from 'crypto'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const body = await readBody(event)
  const file = resolve(process.cwd(), 'app/data/sidebar-cards.json')
  const cards = JSON.parse(await readFile(file, 'utf-8'))

  const newCard = { id: randomUUID(), ...body }
  cards.push(newCard)

  await writeFile(file, JSON.stringify(cards, null, 2))
  return newCard
})
