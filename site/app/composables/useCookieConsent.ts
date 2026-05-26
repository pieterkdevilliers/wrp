const STORAGE_KEY = 'bsw_cookie_consent'
const consent = ref<'all' | 'essential' | null>(null)

function injectAnalytics(): void {
  if (!document.getElementById('ghl-tracking')) {
    const g = document.createElement('script')
    g.src = 'https://tap-now-link.com/js/external-tracking.js'
    g.setAttribute('data-tracking-id', 'tk_29014db0668147acbf3124b4c45d8d5e')
    g.id = 'ghl-tracking'
    g.async = true
    document.head.appendChild(g)
  }
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
