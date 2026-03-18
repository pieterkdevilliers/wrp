import { createHash } from 'crypto'
import { getCookie, getRequestHeader } from 'h3'
import type { H3Event } from 'h3'

export function getAdminToken(): string {
  const password = process.env.ADMIN_PASSWORD ?? 'changeme'
  const secret = process.env.ADMIN_SECRET ?? 'dev-secret'
  return createHash('sha256').update(password + secret).digest('hex')
}

export function checkAdminAuth(event: H3Event): boolean {
  const expected = getAdminToken()
  // Cookie-based (SSR / initial page load)
  const cookie = getCookie(event, 'admin_token')
  if (cookie === expected) return true
  // Header-based (client-side fetch from the admin UI)
  const auth = getRequestHeader(event, 'authorization')
  if (auth === `Bearer ${expected}`) return true
  return false
}
