export default defineEventHandler(async (event) => {
  const { password } = await readBody(event)
  const expected = process.env.ADMIN_PASSWORD ?? 'changeme'

  if (!password || password !== expected) {
    throw createError({ statusCode: 401, message: 'Invalid password' })
  }

  return { ok: true, token: getAdminToken() }
})
