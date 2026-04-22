<script setup>
const NuxtLinkComponent = resolveComponent('NuxtLink')

defineProps({
  eyebrow: { type: String, required: true },
  headline: { type: String, required: true },
  subheadline: { type: String, required: true },
  steps: { type: Array, required: true },
  extraEyebrow: { type: String, default: null },
  extraParagraphs: { type: Array, default: null },
  extraNote: { type: String, default: null },
  resources: { type: Array, required: true },
})
</script>

<template>
  <div class="page">
    <SiteNav :dark="true" />

    <!-- HERO -->
    <section class="ty-hero">
      <div class="ty-hero-inner">
        <div class="confirm-icon" aria-hidden="true">✓</div>
        <p class="section-eyebrow">{{ eyebrow }}</p>
        <h1>{{ headline }}</h1>
        <p class="hero-sub">{{ subheadline }}</p>
      </div>
    </section>

    <!-- WHAT HAPPENS NEXT -->
    <section class="steps-section">
      <div class="steps-inner">
        <p class="section-eyebrow">What happens next</p>
        <div class="steps">
          <div v-for="(step, i) in steps" :key="i" class="step">
            <span class="step-number">{{ i + 1 }}</span>
            <p class="step-text">{{ step }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- EXTRA CONTENT (optional) -->
    <section v-if="extraParagraphs" class="extra-section">
      <div class="extra-inner">
        <p v-if="extraEyebrow" class="section-eyebrow">{{ extraEyebrow }}</p>
        <div class="extra-body">
          <p v-for="(para, i) in extraParagraphs" :key="i">{{ para }}</p>
        </div>
        <div v-if="extraNote" class="extra-note">{{ extraNote }}</div>
      </div>
    </section>

    <!-- WHILE YOU WAIT -->
    <section class="resources-section">
      <div class="resources-inner">
        <p class="section-eyebrow">While you wait</p>
        <div class="resources">
          <component
            v-for="(r, i) in resources"
            :key="i"
            :is="r.external ? 'a' : NuxtLinkComponent"
            :href="r.external ? r.href : undefined"
            :to="r.external ? undefined : r.href"
            :target="r.external ? '_blank' : undefined"
            :rel="r.external ? 'noopener' : undefined"
            class="resource-card"
          >
            <p class="resource-desc">{{ r.description }}</p>
            <span class="resource-link">{{ r.label }} →</span>
          </component>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<style scoped>
.page {
  background: var(--bg);
  color: var(--ink);
}

/* HERO */
.ty-hero {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 10rem 3rem 7rem;
}

.ty-hero-inner {
  max-width: 680px;
  margin: 0 auto;
}

.confirm-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: 2px solid var(--accent);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
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
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 560px;
}

/* STEPS */
.steps-section {
  padding: 7rem 3rem;
}

.steps-inner {
  max-width: 720px;
  margin: 0 auto;
}

.steps {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
}

.step {
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 2rem;
  padding: 2.25rem 0;
  border-bottom: 1px solid var(--border);
  align-items: start;
}

.step:first-child {
  border-top: 1px solid var(--border);
}

.step-number {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent);
  width: 2rem;
  height: 2rem;
  border: 1.5px solid var(--accent);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.step-text {
  font-size: 1rem;
  color: var(--ink);
  line-height: 1.75;
  margin: 0;
}

/* RESOURCES */
.resources-section {
  background: var(--surface);
  padding: 7rem 3rem;
}

.resources-inner {
  max-width: 720px;
  margin: 0 auto;
}

.resources {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resource-card {
  display: block;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
}

.resource-card:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.07);
  transform: translateY(-2px);
}

.resource-desc {
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.resource-link {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
}

/* EXTRA CONTENT */
.extra-section {
  padding: 7rem 3rem;
  background: var(--surface);
}

.extra-inner {
  max-width: 720px;
  margin: 0 auto;
}

.extra-body {
  margin-top: 2rem;
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.8;
}

.extra-body p + p { margin-top: 1.1rem; }

.extra-note {
  margin-top: 2rem;
  padding: 1.5rem 1.75rem;
  background: var(--bg);
  border-left: 3px solid var(--accent);
  border-radius: 0 10px 10px 0;
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.75;
}

@media (max-width: 900px) {
  .ty-hero { padding: 8rem 1.5rem 5rem; }
  .steps-section { padding: 5rem 1.5rem; }
  .step { grid-template-columns: 2.5rem 1fr; gap: 1.25rem; }
  .extra-section { padding: 5rem 1.5rem; }
  .resources-section { padding: 5rem 1.5rem; }
}
</style>
