import { readMultipartFormData } from 'h3'
import { writeFile, mkdir } from 'fs/promises'
import { resolve, extname } from 'path'
import { existsSync } from 'fs'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }

  const parts = await readMultipartFormData(event)
  if (!parts?.length) throw createError({ statusCode: 400, message: 'No file uploaded' })

  const file = parts.find(p => p.name === 'photo')
  if (!file || !file.filename) throw createError({ statusCode: 400, message: 'No file provided' })

  const ext = extname(file.filename).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
    throw createError({ statusCode: 400, message: 'Only JPG, PNG, or WebP files are allowed' })
  }

  const dir = resolve(process.cwd(), 'public/images/testimonials')
  if (!existsSync(dir)) await mkdir(dir, { recursive: true })

  const safeName = file.filename
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, '-')
    .replace(/-+/g, '-')
  const dest = resolve(dir, safeName)
  await writeFile(dest, file.data)

  return { path: `/images/testimonials/${safeName}` }
})
