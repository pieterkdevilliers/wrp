import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const file = resolve(process.cwd(), 'app/data/podcasts.json')
  const podcasts = JSON.parse(await readFile(file, 'utf-8'))

  const idx = podcasts.findIndex((p: { id: string }) => p.id === id)
  if (idx === -1) {
    throw createError({ statusCode: 404, message: 'Not found' })
  }

  podcasts[idx] = { ...podcasts[idx], ...body, id }
  await writeFile(file, JSON.stringify(podcasts, null, 2))
  return podcasts[idx]
})
