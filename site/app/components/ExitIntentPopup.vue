<script setup>
const visible = ref(false)
const cardRef = ref(null)
let previousFocus = null

const { suppress } = useExitIntent(() => {
  previousFocus = document.activeElement
  visible.value = true
  document.body.style.overflow = 'hidden'
})

function close() {
  suppress()
  visible.value = false
  document.body.style.overflow = ''
  nextTick(() => previousFocus?.focus())
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

watch(visible, (val) => {
  if (val) nextTick(() => cardRef.value?.focus())
})
</script>

<template>
  <Teleport to="body">
    <Transition name="eit">
      <div
        v-if="visible"
        class="eit-backdrop"
        @click.self="close"
        @keydown="onKeydown"
        aria-modal="true"
        role="dialog"
        aria-labelledby="eit-headline"
        tabindex="-1"
      >
        <div class="eit-card" ref="cardRef" tabindex="-1">
          <button class="eit-close" @click="close" aria-label="Close scorecard prompt">✕</button>

          <img src="/images/logo-full.png" alt="Blindspot Works" class="eit-logo" />

          <h2 id="eit-headline" class="eit-headline">
            Before you go, do you know where your business is losing value?
          </h2>
          <p class="eit-sub">
            The free Business Blindspot Scorecard takes 5 minutes and tells you exactly where to focus first.
          </p>
          <p class="eit-body">
            Most business owners have a sense that something isn't working. The scorecard shows you specifically what it is, scored across lead generation, client acquisition, and client fulfilment. It's the first step to fixing the leaks in your business and unlocking growth.
          </p>

          <a
            href="https://business-journey-health.scoreapp.com/"
            target="_blank"
            rel="noopener"
            class="btn-primary eit-cta"
            @click="close"
          >Take the Free Scorecard</a>

          <button class="eit-dismiss" @click="close">
            No thanks, I'll figure it out myself
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* BACKDROP */
.eit-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

/* CARD */
.eit-card {
  background: var(--bg);
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 480px;
  width: 100%;
  position: relative;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.22);
  outline: none;
}

/* CLOSE BUTTON */
.eit-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: var(--ink-2);
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.eit-close:hover { color: var(--ink); }

/* LOGO */
.eit-logo {
  height: 24px;
  width: auto;
  display: block;
  margin-bottom: 1.75rem;
}

/* CONTENT */
.eit-headline {
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.eit-sub {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--accent);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.eit-body {
  font-size: 0.9rem;
  color: var(--ink-2);
  line-height: 1.75;
  margin-bottom: 1.75rem;
}

/* CTA */
.eit-cta {
  display: block;
  text-align: center;
  width: 100%;
}

/* DISMISS */
.eit-dismiss {
  display: block;
  width: 100%;
  margin-top: 0.875rem;
  background: none;
  border: none;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: var(--ink-2);
  cursor: pointer;
  text-align: center;
}

.eit-dismiss:hover { color: var(--ink); text-decoration: underline; }

/* MOBILE — bottom sheet */
@media (max-width: 767px) {
  .eit-backdrop {
    background: rgba(0, 0, 0, 0.35);
    align-items: flex-end;
    padding: 0;
  }

  .eit-card {
    border-radius: 20px 20px 0 0;
    max-width: 100%;
    width: 100%;
    max-height: 60vh;
    overflow-y: auto;
    padding: 2rem 1.5rem 2.5rem;
    box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);
  }
}
</style>

<style>
/* Transition — desktop: fade backdrop + scale card */
.eit-enter-active,
.eit-leave-active {
  transition: opacity 0.2s ease;
}
.eit-enter-active .eit-card,
.eit-leave-active .eit-card {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.eit-enter-from,
.eit-leave-to {
  opacity: 0;
}
.eit-enter-from .eit-card,
.eit-leave-to .eit-card {
  opacity: 0;
  transform: scale(0.95);
}

/* Transition — mobile: slide card up from bottom */
@media (max-width: 767px) {
  .eit-enter-active .eit-card,
  .eit-leave-active .eit-card {
    transition: transform 0.25s ease;
  }
  .eit-enter-from .eit-card,
  .eit-leave-to .eit-card {
    opacity: 1;
    transform: translateY(100%);
  }
}
</style>
