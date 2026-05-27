<template>
  <div v-if="cards?.length" class="hero-cta-cards">
    <a
      v-for="card in cards"
      :key="card.id"
      :href="card.href"
      class="hero-cta-card"
      target="_blank"
      rel="noopener"
    >
      <img :src="card.image" :alt="card.title" class="hero-cta-img" />
      <div class="hero-cta-body">
        <p class="hero-cta-title">{{ card.title }}</p>
        <p class="hero-cta-subtitle">{{ card.subtitle }}</p>
        <span class="hero-cta-btn">{{ card.ctaText || 'Find Out More' }}</span>
      </div>
    </a>
  </div>
</template>

<script setup>
const { data: cards } = await useFetch('/api/sidebar-cards')
</script>

<style scoped>
.hero-cta-cards {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-cta-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg);
  flex: 1;
  min-width: 260px;
  max-width: 480px;
  transition: box-shadow 0.2s, transform 0.2s;
}

.hero-cta-card:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.07);
  transform: translateY(-2px);
}

.hero-cta-img {
  width: 100%;
  display: block;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}

.hero-cta-body {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1rem 1.1rem 1.1rem;
  flex: 1;
}

.hero-cta-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero-cta-subtitle {
  font-size: 0.77rem;
  color: var(--ink-2);
  line-height: 1.55;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hero-cta-btn {
  display: block;
  margin-top: 0.6rem;
  background: var(--accent);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.45rem 0.7rem;
  border-radius: 5px;
  text-align: center;
}

@media (max-width: 600px) {
  .hero-cta-card {
    max-width: 100%;
  }
}
</style>
