import { readFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) throw createError({ statusCode: 401, message: 'Unauthorised' })
  const slug = getRouterParam(event, 'slug')!
  const file = resolve(postsDir(), `${slug}.md`)
  const raw = await readFile(file, 'utf-8')
  return parsePost(raw, slug)
})
