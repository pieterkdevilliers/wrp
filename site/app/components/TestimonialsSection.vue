<script setup>
const { data: testimonials } = await useFetch('/api/testimonials')

const activeTestimonial = ref(null)

function openModal(t) {
  activeTestimonial.value = t
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  activeTestimonial.value = null
  document.body.style.overflow = ''
}

function onKeydown(e) {
  if (e.key === 'Escape') closeModal()
}
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
          <div class="testimonial-footer">
            <div class="testimonial-author">
              <img :src="t.photo" :alt="t.name" class="testimonial-photo" />
              <div>
                <div class="testimonial-name">{{ t.name }}</div>
                <div class="testimonial-company">{{ t.company }}</div>
              </div>
            </div>
            <button class="read-more" @click="openModal(t)">Read more</button>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <Teleport to="body">
      <div
        v-if="activeTestimonial"
        class="modal-backdrop"
        @click.self="closeModal"
        @keydown="onKeydown"
        tabindex="-1"
      >
        <div class="modal" role="dialog" aria-modal="true">
          <button class="modal-close" @click="closeModal" aria-label="Close">✕</button>
          <div class="modal-author">
            <img :src="activeTestimonial.photo" :alt="activeTestimonial.name" class="modal-photo" />
            <div>
              <div class="modal-name">{{ activeTestimonial.name }}</div>
              <div class="modal-company">{{ activeTestimonial.company }}</div>
            </div>
          </div>
          <p class="modal-quote">"{{ activeTestimonial.quote }}"</p>
        </div>
      </div>
    </Teleport>
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
  align-items: start;
}

.testimonial-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  height: 320px;
}

.testimonial-quote {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--ink);
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  white-space: pre-line;
}

.testimonial-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-shrink: 0;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  min-width: 0;
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

.read-more {
  flex-shrink: 0;
  background: none;
  border: none;
  padding: 0;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
  white-space: nowrap;
}

.read-more:hover {
  text-decoration: underline;
}

/* MODAL */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal {
  background: var(--bg);
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 600px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: none;
  border: none;
  font-size: 1rem;
  color: var(--ink-2);
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.modal-close:hover {
  color: var(--ink);
}

.modal-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-right: 2rem;
}

.modal-photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  flex-shrink: 0;
  border: 1px solid var(--border);
}

.modal-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
}

.modal-company {
  font-size: 0.85rem;
  color: var(--ink-2);
  margin-top: 0.2rem;
}

.modal-quote {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--ink);
  white-space: pre-line;
}

@media (max-width: 900px) {
  .testimonials {
    padding: 5rem 1.5rem;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    height: auto;
    min-height: 280px;
  }
}
</style>
