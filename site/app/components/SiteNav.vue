<template>
  <nav :class="dark ? 'nav--dark' : 'nav--light'">
    <NuxtLink to="/" class="nav-logo">Pieter K de Villiers</NuxtLink>
    <slot />
  </nav>
</template>

<script setup>
defineProps({
  dark: { type: Boolean, default: false },
})
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-decoration: none;
}

/* Light variant — fixed, frosted (index page) */
.nav--light {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.25rem 3rem;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border);
}

.nav--light .nav-logo { color: var(--ink); }

/* Dark variant — static (waiting-list page) */
.nav--dark {
  padding: 1.5rem 3rem;
  border-bottom: 1px solid var(--border-inv);
}

.nav--dark .nav-logo { color: #ffffff; }

@media (max-width: 900px) {
  .nav--light,
  .nav--dark { padding: 1rem 1.5rem; }
}
</style>
