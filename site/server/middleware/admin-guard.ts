export default defineEventHandler((event) => {
  if (process.env.NODE_ENV === 'production') {
    const path = getRequestURL(event).pathname
    if (path.startsWith('/admin') || path.startsWith('/api/admin')) {
      throw createError({ statusCode: 404, statusMessage: 'Not Found' })
    }
  }
})
