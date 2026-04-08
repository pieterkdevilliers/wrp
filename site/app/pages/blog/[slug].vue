<script setup>
const slug = useRoute().params.slug

const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryCollection('posts').path(`/posts/${slug}`).first()
)

if (!post.value) throw createError({ statusCode: 404, statusMessage: 'Post not found' })

useSeoMeta({
  title: `${post.value.title} — Blindspot Works`,
  description: post.value.description,
})

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>

<template>
  <div class="post-page">
    <SiteNav />

    <article class="post-wrap">
      <header class="post-header">
        <NuxtLink to="/blog" class="back-link">← All posts</NuxtLink>
        <span class="post-date">{{ formatDate(post.date) }}</span>
        <h1>{{ post.title }}</h1>
        <p v-if="post.description" class="post-desc">{{ post.description }}</p>
      </header>

      <div class="post-body">
        <ContentRenderer :value="post" />
      </div>
    </article>

    <SiteFooter />
  </div>
</template>

<style scoped>
.post-page {
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
}

.post-wrap {
  max-width: 900px;
  margin: 0 auto;
  padding: 8rem 3rem 7rem;
}

.back-link {
  display: inline-block;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--ink-2);
  text-decoration: none;
  margin-bottom: 2rem;
}

.back-link:hover { color: var(--ink); }

.post-date {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--ink-2);
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.post-desc {
  font-size: 1.05rem;
  color: var(--ink-2);
  line-height: 1.7;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 2.5rem;
}

.post-body :deep(h2) {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 2.5rem 0 1rem;
}

.post-body :deep(h3) {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 2rem 0 0.75rem;
}

.post-body :deep(p) {
  font-size: 1rem;
  line-height: 1.85;
  color: var(--ink);
  margin-bottom: 1.25rem;
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}

.post-body :deep(li) {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--ink);
  margin-bottom: 0.35rem;
}

.post-body :deep(strong) {
  font-weight: 700;
  color: var(--ink);
}

.post-body :deep(em) {
  font-style: italic;
}

.post-body :deep(a) {
  color: var(--accent);
  text-decoration: underline;
}

.post-body :deep(blockquote) {
  border-left: 3px solid var(--accent);
  padding: 0.75rem 1.25rem;
  margin: 1.5rem 0;
  background: var(--surface);
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: var(--ink-2);
}

.post-body :deep(code) {
  background: var(--surface);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  font-size: 0.88em;
}

.post-body :deep(pre) {
  background: var(--surface-dark);
  color: rgba(255,255,255,0.85);
  padding: 1.5rem;
  border-radius: 10px;
  overflow-x: auto;
  margin-bottom: 1.25rem;
}

.post-body :deep(pre code) {
  background: none;
  padding: 0;
  font-size: 0.88rem;
}

.post-header {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .post-wrap { padding: 6rem 1.5rem 5rem; }
}
</style>
