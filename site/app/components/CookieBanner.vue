<script setup>
const { hasConsented, acceptAll, acceptEssentialOnly } = useCookieConsent()

const visible = ref(false)
const bannerRef = ref(null)

onMounted(() => {
  if (!hasConsented.value) {
    visible.value = true
    document.body.style.overflow = 'hidden'
    nextTick(() => bannerRef.value?.focus())
  }
})

function dismiss() {
  visible.value = false
  document.body.style.overflow = ''
}

function handleAcceptAll() {
  dismiss()
  acceptAll()
}

function handleEssentialOnly() {
  dismiss()
  acceptEssentialOnly()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="cb">
      <div v-if="visible" class="cb-backdrop" aria-hidden="true" />
    </Transition>
    <Transition name="cb">
      <div
        v-if="visible"
        ref="bannerRef"
        class="cb-banner"
        role="region"
        aria-label="Cookie consent"
        aria-live="polite"
        tabindex="-1"
      >
        <div class="cb-inner">
          <div class="cb-text">
            <p class="cb-heading">We use cookies</p>
            <p class="cb-body">
              We use essential cookies to make this site work. With your permission we also use analytics cookies to understand how visitors use the site — helping us improve the experience. No advertising cookies. No third-party tracking.
            </p>
          </div>
          <div class="cb-actions">
            <button
              class="cb-btn-primary"
              @click="handleAcceptAll"
              aria-label="Accept all cookies"
            >Accept All</button>
            <button
              class="cb-btn-secondary"
              @click="handleEssentialOnly"
              aria-label="Accept essential cookies only"
            >Essential Only</button>
            <NuxtLink to="/privacy" class="cb-link">Privacy Policy</NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cb-backdrop {
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.25);
  pointer-events: all;
}

.cb-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #0f172a;
  color: #ffffff;
  outline: none;
}

.cb-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.cb-text {
  flex: 1;
  min-width: 0;
}

.cb-heading {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.3rem;
}

.cb-body {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.cb-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.cb-btn-primary {
  background: var(--accent);
  color: #ffffff;
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  min-height: 44px;
  white-space: nowrap;
  transition: background 0.15s;
}

.cb-btn-primary:hover { background: var(--accent-dark); }

.cb-btn-secondary {
  background: transparent;
  color: rgba(255, 255, 255, 0.75);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  min-height: 44px;
  white-space: nowrap;
  transition: border-color 0.15s, color 0.15s;
}

.cb-btn-secondary:hover {
  border-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

.cb-link {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  white-space: nowrap;
}

.cb-link:hover {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: underline;
}

/* Transitions */
.cb-enter-active,
.cb-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.cb-enter-from,
.cb-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Mobile */
@media (max-width: 767px) {
  .cb-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    padding: 1.25rem 1.25rem 1.75rem;
  }

  .cb-actions {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }

  .cb-btn-primary,
  .cb-btn-secondary {
    width: 100%;
    text-align: center;
  }

  .cb-link {
    text-align: center;
    display: block;
    margin-top: 0.25rem;
  }
}
</style>
