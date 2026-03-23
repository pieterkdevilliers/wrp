import { unlink } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) throw createError({ statusCode: 401, message: 'Unauthorised' })
  const slug = getRouterParam(event, 'slug')!
  const file = resolve(postsDir(), `${slug}.md`)
  await unlink(file)
  return { ok: true }
})
