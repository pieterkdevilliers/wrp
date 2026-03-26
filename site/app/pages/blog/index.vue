<script setup>
useSeoMeta({ title: 'Blog — Pieter K de Villiers' })

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').order('date', 'DESC').all()
)

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <div class="blog-page">
    <SiteNav>
      <ul class="nav-links">
        <li><NuxtLink to="/#services">Services</NuxtLink></li>
        <li><NuxtLink to="/#podcasts">Podcasts</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/#about">About</NuxtLink></li>
        <li><a href="https://koalendar.com/u/pieter-de-villiers" class="nav-cta" target="_blank" rel="noopener">Let's Talk</a></li>
      </ul>
    </SiteNav>

    <div class="blog-header">
      <p class="section-eyebrow">Blog</p>
      <h1>Thinking out loud.</h1>
      <p class="blog-intro">Longer-form thoughts on AI, automation, and building better businesses.</p>
    </div>

    <div class="blog-list">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="`/blog/${post.stem.replace('posts/', '')}`"
        class="post-card"
      >
        <span class="post-date">{{ formatDate(post.date) }}</span>
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-desc">{{ post.description }}</p>
        <span class="post-read">Read more →</span>
      </NuxtLink>

      <p v-if="!posts?.length" class="empty">No posts yet.</p>
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
.blog-page {
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: var(--ink-2);
  font-size: 0.85rem;
  font-weight: 500;
}

.nav-links a:hover { color: var(--ink); }

.nav-cta {
  background: var(--accent) !important;
  color: #ffffff !important;
  padding: 0.5rem 1.1rem !important;
  border-radius: 6px;
  font-size: 0.82rem !important;
}

.blog-header {
  max-width: 720px;
  margin: 0 auto;
  padding: 8rem 3rem 4rem;
}

.section-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1rem;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.blog-intro {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.7;
}

.blog-list {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 3rem 7rem;
  display: flex;
  flex-direction: column;
  gap: 1px;
  border-top: 1px solid var(--border);
}

.post-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border);
  text-decoration: none;
  color: inherit;
  transition: opacity 0.15s;
}

.post-card:hover { opacity: 0.75; }

.post-date {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--ink-2);
  letter-spacing: 0.04em;
}

.post-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--ink);
}

.post-desc {
  font-size: 0.92rem;
  color: var(--ink-2);
  line-height: 1.7;
  max-width: 560px;
}

.post-read {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  margin-top: 0.25rem;
}

.empty {
  padding: 3rem 0;
  color: var(--ink-2);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .blog-header { padding: 6rem 1.5rem 3rem; }
  .blog-list { padding: 0 1.5rem 5rem; }
}
</style>
