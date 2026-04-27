const STORAGE_KEY = 'bsw_cookie_consent'
const consent = ref<'all' | 'essential' | null>(null)

function injectAnalytics(): void {
  if (document.getElementById('ZwSg9rf6GA')) return
  const s = document.createElement('script')
  s.setAttribute('data-host', 'https://checkanalytic.com')
  s.src = 'https://checkanalytic.com/js/script.js'
  s.id = 'ZwSg9rf6GA'
  s.async = true
  s.defer = true
  document.head.appendChild(s)
}

// Initialise synchronously from localStorage on client import —
// runs before any component mounts, so hasConsented is correct
// when CookieBanner checks it in onMounted.
if (import.meta.client) {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'all') {
    consent.value = 'all'
    injectAnalytics()
  } else if (stored === 'essential') {
    consent.value = 'essential'
  }
}

export function useCookieConsent() {
  const hasConsented = computed(() => consent.value !== null)
  const hasAnalyticsConsent = computed(() => consent.value === 'all')

  function acceptAll(): void {
    consent.value = 'all'
    localStorage.setItem(STORAGE_KEY, 'all')
    injectAnalytics()
  }

  function acceptEssentialOnly(): void {
    consent.value = 'essential'
    localStorage.setItem(STORAGE_KEY, 'essential')
  }

  function resetConsent(): void {
    consent.value = null
    localStorage.removeItem(STORAGE_KEY)
  }

  return { hasConsented, hasAnalyticsConsent, acceptAll, acceptEssentialOnly, resetConsent }
}
