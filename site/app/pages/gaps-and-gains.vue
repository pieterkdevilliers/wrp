<script setup>
useSeoMeta({
  title: 'Gaps & Gains — Pieter K de Villiers',
  description: 'The Gaps & Gains podcast — practical conversations on AI, automation, and building better businesses.',
})

useHead({
  script: [
    {
      type: 'text/javascript',
      charset: 'utf-8',
      src: 'https://www.buzzsprout.com/2606605.js?container_id=buzzsprout-small-player&player=small',
    },
  ],
})
</script>

<template>
  <div class="page">
    <SiteNav />

    <div class="podcast-header">
      <p class="section-eyebrow">Podcast</p>
      <h1>Gaps &amp; Gains</h1>
      <p class="podcast-intro">Practical conversations on AI, automation, and building businesses that don't depend on you being the bottleneck.</p>
    </div>

    <div class="player-wrap">
      <div id="buzzsprout-small-player"></div>
    </div>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
}

.podcast-header {
  max-width: 800px;
  margin: 0 auto;
  padding: 8rem 3rem 3rem;
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

.podcast-intro {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.7;
}

.player-wrap {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 3rem 7rem;
}

@media (max-width: 900px) {
  .podcast-header { padding: 6rem 1.5rem 2rem; }
  .player-wrap { padding: 0 1.5rem 5rem; }
}
</style>
