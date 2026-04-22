<script setup>
useSeoMeta({
  title: 'Workshop — Blindspot Works',
  description: 'A focused, facilitated full-day workshop to map your customer journey, reveal hidden gaps, and identify your highest-leverage automation and AI opportunities.',
})
</script>

<template>
  <div class="page">
    <SiteNav :dark="true" />

    <!-- HERO -->
    <section class="workshop-hero">
      <div class="workshop-hero-inner">
        <p class="section-eyebrow">The Workshop</p>
        <h1>One day that changes how you see your business.</h1>
        <p class="workshop-hero-sub">The White Room Process Workshop is a full-day, in-person session for businesses that are ready to see their complete customer journey mapped, end to end, and leave with a clear picture of exactly what to fix, and how. It's the foundation for any implementation work we do together.</p>
        <div class="hero-actions">
          <a href="https://tap-now-link.com/widget/bookings/wrp-interest-lets-talk" class="btn-primary" target="_blank" rel="noopener">Let's Talk</a>
        </div>
      </div>
    </section>

    <!-- DETAIL -->
    <div id="detail">
      <section class="workshop-detail">
        <div class="workshop-heading">
          <p class="section-eyebrow">What We Do</p>
          <h2>A complete picture of your customer's journey, and yours.</h2>
        </div>
        <div class="workshop-inner">
          <div>
            <div class="workshop-body">
              <p>The Customer Journey Mapping Workshop (White Room Process) is a focused, facilitated session with you and your leadership team, held in person, at your premises. (Or a meeting room of your choosing.)</p>
              <p>We map every stage of your prospect and customer journey: how people find you, what happens when they engage, how they buy, how you onboard them, and what keeps them - or doesn't.</p>
              <p>Most business owners have never seen their own business this way. The gaps that are invisible day-to-day become obvious when you step back and look at the whole picture.</p>
              <p>You'll leave with a complete journey map, a prioritised list of improvement opportunities, and clarity on exactly what to fix, in what order, and what the path forward looks like, whether or not you continue working with me.</p>
            </div>
            <div class="workshop-callout">
              "The workshop alone is worth more than most businesses spend on software in a year. It gives you the map before you buy the territory."
            </div>
          </div>
          <div>
            <div class="workshop-details">
              <h3>Workshop Details</h3>
              <div class="detail-row">
                <span class="detail-label">Format</span>
                <span class="detail-value">In-person, at your location</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Duration</span>
                <span class="detail-value">Full day</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Participants</span>
                <span class="detail-value">You + leadership team</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Deliverable</span>
                <span class="detail-value">Full journey map + opportunity report</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Investment</span>
                <span class="detail-value price">£2,495</span>
              </div>
              <p class="coaching-discount">Coaching clients: £1,495 Existing Blindspot Works Coaching clients receive a £1,000 discount.</p>
              <a href="https://tap-now-link.com/widget/bookings/wrp-interest-lets-talk" class="btn-primary workshop-cta" target="_blank" rel="noopener">Let's Talk</a>
            </div>
          </div>
        </div>

      </section>
    </div>

    <!-- WHAT THE DAY LOOKS LIKE -->
    <section class="day-section">
      <div class="day-inner">
        <div class="day-heading-row">
          <p class="section-eyebrow">The Day</p>
          <h2>What the day looks like</h2>
        </div>
        <div class="day-body">
          <p>We start in the morning with context. Your business, your customers, how things currently work. From there, we map every stage of your prospect and customer journey together: how people find you, what happens when they engage, how they buy, how you onboard them, how you retain them, and critically, where things fall through the gaps.</p>
          <p>By the afternoon, the picture is on the wall. We shift from mapping to analysis. Identifying the friction points, the manual effort that should be automated, and the handoff failures that are quietly costing you. You leave with a complete journey map and a prioritised list of what to address, ranked by impact.</p>
          <p>Most business owners have never seen their business this way. The gaps that are invisible day-to-day become obvious when you step back and look at the whole picture.</p>
        </div>
      </div>
    </section>


    <!-- WHAT COMES NEXT -->
    <section class="next-section">
      <div class="next-inner">
        <div class="next-heading">
          <p class="section-eyebrow">After the Workshop</p>
          <h2>What comes next</h2>
        </div>
        <div class="next-body">
          <p>The workshop is a requirement before any implementation work begins. It ensures that what gets built is grounded in how your business actually works, not how we assume it works.</p>
          <p>Many clients come to the workshop after a period of Blindspot Works Coaching. Others use it as a standalone investment and take the findings away to implement themselves or with their own team.</p>
          <p>If you're not sure whether you're ready for the workshop, the right first step is a £249 Audit Call.</p>
          <div class="next-actions">
            <a href="https://tap-now-link.com/widget/bookings/wrp-interest-lets-talk" class="btn-primary" target="_blank" rel="noopener">Let's Talk</a>
            <NuxtLink to="/journey-audit" class="btn-secondary">Start with an Audit Call</NuxtLink>
          </div>
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
.workshop-hero {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 10rem 3rem 7rem;
}

.workshop-hero-inner {
  max-width: 720px;
  margin: 0 auto;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.workshop-hero-sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 580px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-secondary {
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

/* DETAIL */
.workshop-detail {
  padding: 7rem 3rem;
}

.workshop-heading {
  max-width: 1100px;
  margin: 0 auto 3rem;
}

.workshop-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6rem;
  align-items: start;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 2.8vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 1.25rem;
}

.workshop-body {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.8;
}

.workshop-body p + p { margin-top: 1.1rem; }

.workshop-callout {
  background: var(--surface);
  border-left: 3px solid var(--accent);
  border-radius: 0 8px 8px 0;
  padding: 1.25rem 1.75rem;
  margin-top: 2rem;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--ink);
}

.workshop-details {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  position: sticky;
  top: 6rem;
}

.workshop-details h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 0;
  border-bottom: 1px solid var(--border-inv);
  font-size: 0.88rem;
}

.detail-row:last-of-type { border-bottom: none; }

.detail-label { color: rgba(255, 255, 255, 0.4); font-size: 0.78rem; }
.detail-value { color: #ffffff; font-weight: 500; }

.detail-value.price {
  font-family: 'Inter', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.02em;
}

.coaching-discount {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.5;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-inv);
}

.workshop-cta {
  width: 100%;
  text-align: center;
  margin-top: 1.5rem;
  display: block;
}

.day-section {
  padding: 7rem 3rem;
  background: var(--surface);
}

.day-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.day-heading-row {
  margin-bottom: 2.5rem;
}

.day-body {
  max-width: 780px;
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.8;
}

.day-body p + p { margin-top: 1.1rem; }

/* WHAT COMES NEXT */
.next-section {
  padding: 7rem 3rem;
  background: var(--surface-dark);
  color: #ffffff;
}

.next-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.next-heading {
  margin-bottom: 2rem;
}

.next-body {
  max-width: 680px;
}

.next-body p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  margin-bottom: 1.1rem;
}

.next-section h2 { color: #ffffff; }
.next-section .section-eyebrow { color: var(--accent); }

.next-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2.5rem;
}

@media (max-width: 900px) {
  .workshop-hero { padding: 8rem 1.5rem 5rem; }
  .workshop-detail { padding: 5rem 1.5rem; }
  .workshop-inner { grid-template-columns: 1fr; gap: 3rem; }
  .workshop-details { position: static; padding: 1.5rem 1.25rem; border-radius: 14px; }
  .detail-row { flex-direction: column; align-items: flex-start; gap: 0.2rem; }
  .detail-value.price { font-size: 1.2rem; }
  .day-section { padding: 5rem 1.5rem; }
  .next-section { padding: 5rem 1.5rem; }
}
</style>
