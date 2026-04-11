<script setup>
useSeoMeta({ title: 'Blog — Blindspot Works' })

const { data: posts } = await useAsyncData(
  'posts',
  () => queryCollection('posts').order('date', 'DESC').all(),
  { default: () => [], getCachedData: () => undefined }
)

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <div class="blog-page">
    <SiteNav />

    <div class="blog-header">
      <p class="section-eyebrow">Blog</p>
      <h1>Thinking out loud.</h1>
      <p class="blog-intro">Longer-form thoughts on AI, automation, and building better businesses.</p>
    </div>

    <div class="blog-grid">
      <NuxtLink
        v-for="post in posts"
        :key="post.slug"
        :to="`/blog/${post.slug}`"
        class="post-card"
      >
        <div class="post-card-inner">
          <span class="post-date">{{ formatDate(post.date) }}</span>
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-desc">{{ post.description }}</p>
          <span class="post-read">Read more →</span>
        </div>
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

.blog-header {
  max-width: 1100px;
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

.blog-grid {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 3rem 7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.post-card {
  display: flex;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg);
  transition: box-shadow 0.2s, transform 0.2s;
}

.post-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.post-card-inner {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 2rem;
}

.post-date {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--ink-2);
  letter-spacing: 0.04em;
}

.post-title {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: var(--ink);
}

.post-desc {
  font-size: 0.9rem;
  color: var(--ink-2);
  line-height: 1.7;
  flex: 1;
}

.post-read {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  margin-top: 0.5rem;
}

.empty {
  padding: 3rem 0;
  color: var(--ink-2);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .blog-header { padding: 6rem 1.5rem 3rem; }
  .blog-grid {
    grid-template-columns: 1fr;
    padding: 0 1.5rem 5rem;
  }
}
</style>
