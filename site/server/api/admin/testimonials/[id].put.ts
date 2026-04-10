import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const file = resolve(process.cwd(), 'app/data/testimonials.json')
  const testimonials = JSON.parse(await readFile(file, 'utf-8'))

  const idx = testimonials.findIndex((t: { id: string }) => t.id === id)
  if (idx === -1) {
    throw createError({ statusCode: 404, message: 'Not found' })
  }

  testimonials[idx] = { ...testimonials[idx], ...body, id }
  await writeFile(file, JSON.stringify(testimonials, null, 2))
  return testimonials[idx]
})
