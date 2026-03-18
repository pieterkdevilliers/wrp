<template>
  <div id="podcasts" class="podcasts-wrapper">
    <div class="podcasts">
      <div class="podcasts-header">
        <p class="section-eyebrow">Podcast Appearances</p>
        <h2>Conversations worth listening to.</h2>
        <p class="podcasts-intro">Episodes where I've talked about AI, automation, and how small businesses can build better systems.</p>
      </div>
      <div class="podcast-grid">
        <div
          v-for="podcast in podcasts"
          :key="podcast.url"
          class="podcast-card"
        >
          <a :href="podcast.url" target="_blank" rel="noopener" class="podcast-artwork-wrap" tabindex="-1">
            <img :src="podcast.artwork" :alt="podcast.show + ' artwork'" class="podcast-artwork" />
          </a>
          <div class="podcast-meta">
            <span class="podcast-show">{{ podcast.show }}</span>
            <h3 class="podcast-episode">{{ podcast.episode }}</h3>
            <div class="podcast-desc-wrap">
              <p :class="['podcast-desc', { 'podcast-desc--expanded': expanded[podcast.id] }]">{{ podcast.description }}</p>
              <span
                v-if="podcast.description"
                class="podcast-read-more"
                @click="toggle(podcast.id)"
              >{{ expanded[podcast.id] ? 'Show less ↑' : 'Read more ↓' }}</span>
            </div>
            <a :href="podcast.url" target="_blank" rel="noopener" class="podcast-listen">Listen →</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: podcasts } = await useFetch('/api/podcasts', { default: () => [] })
const expanded = ref({})
function toggle(id) {
  expanded.value = { ...expanded.value, [id]: !expanded.value[id] }
}
</script>

<style scoped>
.podcasts-wrapper {
  background: var(--surface);
}

.podcasts {
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 3rem;
}

.podcasts-header {
  margin-bottom: 3.5rem;
}

.podcasts-intro {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 540px;
  margin-top: 0.5rem;
}

.podcast-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.podcast-card {
  display: flex;
  flex-direction: column;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.15s, box-shadow 0.15s;
}

.podcast-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.podcast-artwork-wrap {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: var(--surface-dark);
  display: block;
}

.podcast-artwork {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.2s;
}

.podcast-card:hover .podcast-artwork {
  transform: scale(1.03);
}

.podcast-meta {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.podcast-show {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.5rem;
}

.podcast-episode {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.35;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.podcast-desc-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.podcast-desc {
  font-size: 0.85rem;
  color: var(--ink-2);
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.podcast-desc--expanded {
  display: block;
  overflow: visible;
}

.podcast-read-more {
  display: inline-block;
  margin-top: 0.4rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
  user-select: none;
}

.podcast-read-more:hover {
  text-decoration: underline;
}

.podcast-listen {
  display: inline-block;
  margin-top: 1.25rem;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.02em;
  text-decoration: none;
}

.podcast-listen:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .podcasts {
    padding: 5rem 1.5rem;
  }

  .podcast-grid {
    grid-template-columns: 1fr;
  }

  .podcast-card {
    flex-direction: row;
  }

  .podcast-artwork-wrap {
    width: 100px;
    min-width: 100px;
    aspect-ratio: auto;
  }
}
</style>
