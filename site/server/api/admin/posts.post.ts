import { writeFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) throw createError({ statusCode: 401, message: 'Unauthorised' })
  const body = await readBody(event)
  const slug = slugify(body.title)
  const file = resolve(postsDir(), `${slug}.md`)
  await writeFile(file, serializePost(body))
  return { slug }
})
