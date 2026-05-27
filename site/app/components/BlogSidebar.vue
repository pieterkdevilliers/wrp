<template>
  <aside v-if="cards?.length" class="blog-sidebar">
    <a
      v-for="card in cards"
      :key="card.id"
      :href="card.href"
      class="sidebar-card"
      target="_blank"
      rel="noopener"
    >
      <img :src="card.image" :alt="card.title" class="sidebar-card-img" />
      <div class="sidebar-card-body">
        <p class="sidebar-card-title">{{ card.title }}</p>
        <p class="sidebar-card-subtitle">{{ card.subtitle }}</p>
        <span class="sidebar-card-cta">{{ card.ctaText || 'Find Out More' }}</span>
      </div>
    </a>
  </aside>
</template>

<script setup>
const { data: cards } = await useFetch('/api/sidebar-cards')
</script>

<style scoped>
.blog-sidebar {
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.sidebar-card {
  display: block;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  background: var(--bg);
  transition: box-shadow 0.2s, transform 0.2s;
}

.sidebar-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.sidebar-card-img {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}

.sidebar-card-body {
  padding: 1rem 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sidebar-card-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
  margin-bottom: 0.35rem;
}

.sidebar-card-subtitle {
  font-size: 0.8rem;
  color: var(--ink-2);
  line-height: 1.5;
}

.sidebar-card-cta {
  display: block;
  margin-top: 0.6rem;
  background: var(--accent);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  text-align: center;
}
</style>
