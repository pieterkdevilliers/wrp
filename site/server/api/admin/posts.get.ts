export default defineEventHandler(async (event) => {
  if (!checkAdminAuth(event)) throw createError({ statusCode: 401, message: 'Unauthorised' })
  return listPosts()
})
