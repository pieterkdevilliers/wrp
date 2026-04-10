import { readFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }
  const file = resolve(process.cwd(), 'app/data/testimonials.json')
  const content = await readFile(file, 'utf-8')
  return JSON.parse(content)
})
