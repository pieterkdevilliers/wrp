export default defineEventHandler((event) => {
  if (process.env.NODE_ENV === 'production' && getRequestURL(event).pathname.startsWith('/admin')) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }
})
