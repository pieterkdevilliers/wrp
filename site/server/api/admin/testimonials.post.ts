import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'
import { randomUUID } from 'crypto'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const body = await readBody(event)
  const file = resolve(process.cwd(), 'app/data/testimonials.json')
  const testimonials = JSON.parse(await readFile(file, 'utf-8'))

  const newTestimonial = { id: randomUUID(), ...body }
  testimonials.push(newTestimonial)

  await writeFile(file, JSON.stringify(testimonials, null, 2))
  return newTestimonial
})
