<script setup>
useSeoMeta({
  title: 'Journey Audit — Blindspot Works',
  description: 'A focused remote audit of your customer journey for £249. Identify where your business is leaking value and get a prioritised list of automation and AI opportunities.',
})
</script>

<template>
  <div class="page">
    <SiteNav :dark="true" />

    <!-- HERO -->
    <section class="audit-hero">
      <div class="audit-hero-inner">
        <p class="section-eyebrow">Journey Audit · £249</p>
        <h1>Find out exactly where your business is leaking value.</h1>
        <p class="audit-hero-sub">A focused remote engagement that maps the critical stages of your customer journey, surfaces the gaps costing you time and money, and delivers a clear, prioritised action plan, all for a fixed price of £249.</p>
        <div class="hero-actions">
          <a href="https://buy.stripe.com/9B6aEXeEM6D163k8k1eEo02" class="btn-primary" target="_blank" rel="noopener">Book a Journey Audit</a>
        </div>
      </div>
    </section>

    <!-- WHAT IT IS -->
    <section id="detail" class="audit-section">
      <div class="audit-heading">
        <p class="section-eyebrow">What It Is</p>
        <h2>A clear view of your business - without the full-day commitment.</h2>
      </div>
      <div class="audit-inner">
        <div class="audit-content">
          <div class="audit-body">
            <p>The Journey Audit is a structured remote session designed for businesses that know something isn't working, but aren't sure exactly where to focus. It's the right first step if you want clarity before making any investment in automation or AI.</p>
            <p>We start with a focused discovery call where I gather the context I need about your business, your customers, and your current processes. From there, I conduct a structured audit of 3–5 key stages of your customer journey, from first contact through to retention, identifying the friction points, handoff failures, and manual effort that are quietly draining your resources.</p>
            <p>You receive a written report with a clear description of what I found, followed by a prioritised list of automation and AI opportunities ranked by impact and implementation effort. We then review together, so you leave with a genuine understanding of what to do next, not just a document to file away.</p>
          </div>
        </div>

        <div class="audit-sidebar">
          <!-- WHAT YOU GET -->
          <div class="deliverables-card">
            <p class="card-eyebrow">What You Get</p>
            <ul class="deliverables">
              <li>
                <span class="deliverable-icon">→</span>
                <div>
                  <strong>90-minute discovery call</strong>
                  <p>A structured conversation to map your business context, current processes, and biggest pain points.</p>
                </div>
              </li>
              <li>
                <span class="deliverable-icon">→</span>
                <div>
                  <strong>Written Journey Audit report</strong>
                  <p>A clear, jargon-free document covering the 3-5 key journey stages reviewed, with observations on each.</p>
                </div>
              </li>
              <li>
                <span class="deliverable-icon">→</span>
                <div>
                  <strong>Prioritised action plan</strong>
                  <p>What to fix, in what order, and why, based on business impact and effort to implement.</p>
                </div>
              </li>
              <li>
                <span class="deliverable-icon">→</span>
                <div>
                  <strong>30-minute review call</strong>
                  <p>Walk through the findings together and answer your questions so you're clear on the next step.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO IT'S FOR -->
    <section class="for-section">
      <div class="for-inner">
        <p class="section-eyebrow">Who It's For</p>
        <h2>You don't need to be ready for a full engagement.</h2>
        <p class="for-body">The Journey Audit is ideal if you're an owner-managed business that knows things could run more smoothly, but you're not ready to commit to a full-day workshop. It's also the right starting point if you've been aware that things could run more smoothly, but you've never had an outside pair of eyes look at the whole picture honestly. Think of it as the map that tells you whether the territory is worth exploring.</p>
      </div>
    </section>

    <!-- BOOK / PRICING -->
    <section id="book" class="book-section">
      <div class="book-inner">
        <div class="price-card">
          <p class="card-eyebrow">Fixed Price</p>
          <div class="price-amount">£249</div>
          <p class="price-desc">One fixed price. No surprises. Delivered remotely, typically within 5–7 working days of the discovery call.</p>
          <a href="https://buy.stripe.com/9B6aEXeEM6D163k8k1eEo02" class="btn-primary book-cta" target="_blank" rel="noopener">Book a Journey Audit</a>
          <p class="price-note">You'll be taken to a secure Stripe checkout. Once payment is confirmed, I'll be in touch within one working day to schedule your discovery call.</p>
        </div>
        <div class="book-copy">
          <h2>Ready to see where you're losing value?</h2>
          <p>Many clients use the audit as the starting point for ongoing coaching, working through the findings systematically over time, rather than trying to fix everything at once. If that's of interest, we can talk through what that looks like on the review call.</p>
          <p>Most businesses I work with are surprised by what the audit reveals. Not because the problems are complex, but because nobody has ever stepped back to look at the whole picture before.</p>
          <p>For £249, you get a clear, honest view of what's costing you, and a practical list of what to do about it. There's no obligation to take things further, though most do.</p>
          <p class="guarantee">If you're not satisfied with the audit report, I'll refund you in full. No questions asked.</p>
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
.audit-hero {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 10rem 3rem 7rem;
}

.audit-hero-inner {
  max-width: 760px;
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

h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 2.8vw, 2.4rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 1.25rem;
}

.audit-hero-sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.75;
  max-width: 620px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn-secondary-inv {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 8px;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  text-decoration: none;
  transition: all 0.15s;
}

.btn-secondary-inv:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* DETAIL SECTION */
.audit-section {
  padding: 7rem 3rem;
}

.audit-heading {
  max-width: 1100px;
  margin: 0 auto 3rem;
}

.audit-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.audit-body {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.8;
}

.audit-body p + p { margin-top: 1.1rem; }

/* DELIVERABLES CARD */
.deliverables-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 2rem;
  position: sticky;
  top: 6rem;
}

.card-eyebrow {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.deliverables {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.deliverables li {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
}

.deliverable-icon {
  color: var(--accent);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.deliverables strong {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.25rem;
}

.deliverables p {
  font-size: 0.82rem;
  color: var(--ink-2);
  line-height: 1.55;
  margin: 0;
}

/* WHO IT'S FOR */
.for-section {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 7rem 3rem;
}

.for-inner {
  max-width: 720px;
  margin: 0 auto;
}

.for-section .section-eyebrow { color: var(--accent); }
.for-section h2 { color: #ffffff; }

.for-body {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.85;
  margin-top: 0.5rem;
}

/* BOOK SECTION */
.book-section {
  padding: 7rem 3rem;
}

.book-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: center;
}

.price-card {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
}

.price-amount {
  font-family: 'Inter', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.04em;
  line-height: 1;
  margin: 1rem 0;
}

.price-desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

.book-cta {
  display: block;
  text-align: center;
  width: 100%;
}

.price-note {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.6;
  margin-top: 1rem;
}

.book-copy p {
  font-size: 1rem;
  color: var(--ink-2);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.guarantee {
  font-size: 0.9rem !important;
  color: var(--ink) !important;
  font-weight: 500;
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
  margin-top: 1.5rem !important;
}

@media (max-width: 900px) {
  .audit-hero { padding: 8rem 1.5rem 5rem; }
  .audit-section { padding: 5rem 1.5rem; }
  .audit-inner { grid-template-columns: 1fr; gap: 3rem; }
  .deliverables-card { position: static; }
  .for-section { padding: 5rem 1.5rem; }
  .book-section { padding: 5rem 1.5rem; }
  .book-inner { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
