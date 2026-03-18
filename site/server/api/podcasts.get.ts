export default defineEventHandler(async () => {
  const data = await useStorage('assets:data').getItem('podcasts.json')
  return data ?? []
})
