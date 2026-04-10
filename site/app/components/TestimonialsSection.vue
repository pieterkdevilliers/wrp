<script setup>
const { data: testimonials } = await useFetch('/api/testimonials')
</script>

<template>
  <div class="testimonials-wrap">
    <div class="testimonials">
      <div class="testimonials-header">
        <p class="section-eyebrow">What Clients Say</p>
        <h2>Results, in their own words.</h2>
      </div>
      <div class="testimonials-grid">
        <div v-for="t in testimonials" :key="t.id" class="testimonial-card">
          <p class="testimonial-quote">"{{ t.quote }}"</p>
          <div class="testimonial-author">
            <img :src="t.photo" :alt="t.name" class="testimonial-photo" />
            <div>
              <div class="testimonial-name">{{ t.name }}</div>
              <div class="testimonial-company">{{ t.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials-wrap {
  background: var(--bg);
}

.testimonials {
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 3rem;
}

.testimonials-header {
  margin-bottom: 3rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.testimonial-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.75rem;
}

.testimonial-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ink);
  flex: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.testimonial-photo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  flex-shrink: 0;
  border: 1px solid var(--border);
}

.testimonial-name {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
}

.testimonial-company {
  font-size: 0.78rem;
  color: var(--ink-2);
  margin-top: 0.2rem;
}

@media (max-width: 900px) {
  .testimonials {
    padding: 5rem 1.5rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
