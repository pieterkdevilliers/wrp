import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { randomUUID } from 'crypto'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const body = await readBody(event)
  const file = resolve(process.cwd(), 'app/data/podcasts.json')
  const podcasts = JSON.parse(await readFile(file, 'utf-8'))

  const newPodcast = { id: randomUUID(), ...body }
  podcasts.push(newPodcast)

  await writeFile(file, JSON.stringify(podcasts, null, 2))
  return newPodcast
})
