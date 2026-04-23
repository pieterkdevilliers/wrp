<template>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <nav :class="dark ? 'nav--dark' : 'nav--light'">
    <NuxtLink to="/" class="nav-logo">
      <img :src="dark ? '/images/blindspot-logo-inverted-no-tagline.png' : '/images/logo-blindspot-works.png'" alt="Blindspot Works" class="nav-logo-img" />
    </NuxtLink>

    <ul class="nav-links">
      <li><NuxtLink to="/#services">Services</NuxtLink></li>
      <li><NuxtLink to="/coaching">Coaching</NuxtLink></li>
      <li><NuxtLink to="/#podcasts">Podcasts</NuxtLink></li>
      <li><NuxtLink to="/gaps-and-gains">Gaps &amp; Gains</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><NuxtLink to="/#about">About</NuxtLink></li>
      <li><a href="https://blindspotworks.com/lets-talk" class="nav-cta" target="_blank" rel="noopener">Let's Talk</a></li>
    </ul>

    <button class="nav-toggle" @click="open = !open" :aria-expanded="String(open)" aria-label="Toggle menu">
      <span :class="{ open }"></span>
      <span :class="{ open }"></span>
      <span :class="{ open }"></span>
    </button>

    <div class="nav-mobile" :class="{ 'is-open': open }">
      <ul>
        <li><NuxtLink to="/#services" @click="open = false">Services</NuxtLink></li>
        <li><NuxtLink to="/coaching" @click="open = false">Coaching</NuxtLink></li>
        <li><NuxtLink to="/#podcasts" @click="open = false">Podcasts</NuxtLink></li>
        <li><NuxtLink to="/gaps-and-gains" @click="open = false">Gaps &amp; Gains</NuxtLink></li>
        <li><NuxtLink to="/blog" @click="open = false">Blog</NuxtLink></li>
        <li><NuxtLink to="/#about" @click="open = false">About</NuxtLink></li>
        <li><a href="https://blindspotworks.com/lets-talk" class="mobile-cta" target="_blank" rel="noopener" @click="open = false">Let's Talk</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const open = ref(false)

defineProps({
  dark: { type: Boolean, default: false },
})
</script>

<style scoped>
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  z-index: 9999;
  background: var(--accent);
  color: #ffffff;
  padding: 0.6rem 1.2rem;
  border-radius: 0 0 8px 8px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: top 0.1s;
}

.skip-link:focus {
  top: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.nav-logo {
  text-decoration: none;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
}

.nav-logo-img {
  height: 28px;
  width: auto;
  display: block;
}

/* Light variant — fixed, frosted */
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


/* Dark variant — static */
.nav--dark {
  padding: 1.5rem 3rem;
  background: var(--surface-dark);
  border-bottom: 1px solid var(--border-inv);
}


/* Desktop nav links */
.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}

.nav--light .nav-links a {
  text-decoration: none;
  color: var(--ink-2);
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.15s;
}

.nav--light .nav-links a:hover { color: var(--ink); }

.nav--dark .nav-links a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.15s;
}

.nav--dark .nav-links a:hover { color: #ffffff; }

.nav-cta {
  background: var(--accent) !important;
  color: #ffffff !important;
  padding: 0.5rem 1.1rem !important;
  border-radius: 6px;
  font-size: 0.82rem !important;
}

/* Hamburger */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  position: relative;
  z-index: 2;
}

.nav-toggle span {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
  transition: all 0.2s;
}

.nav--light .nav-toggle span { background: var(--ink); }
.nav--dark .nav-toggle span { background: #ffffff; }

/* Mobile menu */
.nav-mobile {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 1.5rem 1.5rem 2rem;
}

.nav--light .nav-mobile {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav--dark .nav-mobile {
  background: var(--surface-dark);
  border-bottom: 1px solid var(--border-inv);
}

.nav-mobile.is-open { display: block; }

.nav-mobile ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.nav-mobile li {
  border-bottom: 1px solid var(--border);
}

.nav--dark .nav-mobile li { border-bottom-color: var(--border-inv); }

.nav-mobile a {
  display: block;
  padding: 1rem 0;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.15s;
}

.nav--light .nav-mobile a { color: var(--ink); }
.nav--light .nav-mobile a:hover { color: var(--accent); }

.nav--dark .nav-mobile a { color: rgba(255, 255, 255, 0.8); }
.nav--dark .nav-mobile a:hover { color: #ffffff; }

.nav-mobile li:last-child { border-bottom: none; }

.mobile-cta {
  color: var(--accent) !important;
  font-weight: 600 !important;
}

@media (max-width: 900px) {
  .nav--light,
  .nav--dark { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
}
</style>
