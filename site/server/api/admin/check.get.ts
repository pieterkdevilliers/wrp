export default defineEventHandler((event) => {
  if (!checkAdminAuth(event)) {
    throw createError({ statusCode: 401, message: 'Unauthorised' })
  }
  return { ok: true, token: getAdminToken() }
})
