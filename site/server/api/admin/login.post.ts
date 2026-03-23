export default defineEventHandler(async (event) => {
  const { password } = await readBody(event)
  const expected = process.env.ADMIN_PASSWORD ?? 'changeme'

  if (!password || password !== expected) {
    throw createError({ statusCode: 401, message: 'Invalid password' })
  }

  setCookie(event, 'admin_token', getAdminToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })

  return { ok: true }
})
