const STORAGE_KEY = 'bsw_exit_popup_suppressed'
const SUPPRESS_DAYS = 30
const INACTIVITY_MS = 60_000

export function useExitIntent(callback: () => void) {
  const route = useRoute()
  let fired = false
  let inactivityTimer: ReturnType<typeof setTimeout> | null = null

  function isExcludedRoute(): boolean {
    const path = route.path.toLowerCase()
    return path.startsWith('/thank-you') || path.includes('score')
  }

  function isSuppressed(): boolean {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    return Date.now() - new Date(raw).getTime() < SUPPRESS_DAYS * 86_400_000
  }

  function suppress(): void {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString())
  }

  function trigger(): void {
    if (fired || isExcludedRoute() || isSuppressed()) return
    fired = true
    detach()
    callback()
  }

  function onMouseLeave(e: MouseEvent): void {
    if (e.clientY <= 10) trigger()
  }

  function onInteraction(): void {
    if (inactivityTimer) clearTimeout(inactivityTimer)
    inactivityTimer = setTimeout(trigger, INACTIVITY_MS)
  }

  function onPopState(): void {
    trigger()
  }

  function detach(): void {
    document.removeEventListener('mouseleave', onMouseLeave)
    window.removeEventListener('touchstart', onInteraction)
    window.removeEventListener('touchmove', onInteraction)
    window.removeEventListener('scroll', onInteraction)
    window.removeEventListener('popstate', onPopState)
    if (inactivityTimer) {
      clearTimeout(inactivityTimer)
      inactivityTimer = null
    }
  }

  onMounted(() => {
    if (isSuppressed()) return

    const isMobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)

    if (isMobile) {
      inactivityTimer = setTimeout(trigger, INACTIVITY_MS)
      window.addEventListener('touchstart', onInteraction, { passive: true })
      window.addEventListener('touchmove', onInteraction, { passive: true })
      window.addEventListener('scroll', onInteraction, { passive: true })
      window.addEventListener('popstate', onPopState)
    } else {
      document.addEventListener('mouseleave', onMouseLeave)
    }
  })

  // Reset inactivity timer on route change (mobile) — also recheck exclusion
  watch(() => route.path, () => {
    if (fired || !inactivityTimer) return
    clearTimeout(inactivityTimer)
    inactivityTimer = isExcludedRoute() ? null : setTimeout(trigger, INACTIVITY_MS)
  })

  onBeforeUnmount(detach)

  return { suppress }
}
