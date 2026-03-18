import podcasts from '../../app/data/podcasts.json'

export default defineEventHandler(() =>
  [...podcasts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)
