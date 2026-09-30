<script setup>
const siteUrl = 'https://blindspotworks.com'

// Hero video: drop the file in public/videos/ and set e.g. '/videos/always-on-demo.mp4'.
// Leave empty to show the placeholder.
const heroVideoSrc = ''
const heroVideoPoster = ''

useSeoMeta({
  title: 'Never Miss a Job - Blindspot Works',
  description: 'Every missed call is a job someone else just won. The Always-On System answers your phone, follows up enquiries, looks after new clients, and gets you Google reviews — automatically, 24 hours a day.',
  ogTitle: 'Never Miss a Job - Blindspot Works',
  ogDescription: 'Every missed call is a job someone else just won. The Always-On System answers your phone, follows up enquiries, looks after new clients, and gets you Google reviews — automatically, 24 hours a day.',
  ogImage: `${siteUrl}/images/pkdv-profile.jpg`,
  ogUrl: `${siteUrl}/never-miss-a-job`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: `${siteUrl}/never-miss-a-job` }],
})
</script>

<template>
  <div class="page">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <p class="section-eyebrow">For trades and home service businesses</p>
          <h1>"Every missed call is a job someone else just won."</h1>
          <p class="hero-sub">The Always-On System answers your phone, follows up your enquiries, looks after new clients, and gets you more Google reviews - automatically, 24 hours a day.</p>
          <div class="hero-demo">
            <p class="hero-demo-label">Call now to experience an AI receptionist for yourself</p>
            <a href="tel:+447365796399" class="hero-demo-number">07365 796399</a>
            <p class="hero-demo-note">Available 24/7. Ask it anything you'd expect a customer to ask.</p>
          </div>
          <div class="hero-actions">
            <a href="/always-on-system" class="btn-primary" target="_blank" rel="noopener">Book a Free 30-Min Call</a>
            <a href="#solution" class="hero-scroll-link">See what's included ↓</a>
          </div>
        </div>
        <div class="hero-media">
          <video
            v-if="heroVideoSrc"
            class="hero-video"
            :src="heroVideoSrc"
            :poster="heroVideoPoster || undefined"
            controls
            playsinline
            preload="metadata"
          />
          <div v-else class="hero-video-placeholder" aria-label="Video coming soon">
            <span class="hero-video-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span class="hero-video-caption">Video coming soon</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — THE PROBLEM -->
    <section class="problems-section">
      <div class="section-inner">
        <div class="section-heading">
          <p class="section-eyebrow">Sound familiar?</p>
          <h2>Three moments you recognise</h2>
        </div>
        <div class="problems-grid">
          <div class="problem-card">
            <h3>The 6pm call you missed</h3>
            <p>A customer calls about a job. You're on site. Nobody answers. They call the next business on Google. That job is gone before you even know it existed.</p>
          </div>
          <div class="problem-card">
            <h3>The Saturday enquiry</h3>
            <p>Someone fills in your contact form on Saturday morning. You see it Monday. They booked someone else on Saturday afternoon.</p>
          </div>
          <div class="problem-card">
            <h3>The review that never came</h3>
            <p>You did a great job three months ago. The customer was happy. They never left a review. You never asked. Neither did anyone else.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3 — THE SOLUTION -->
    <section id="solution" class="solution-section">
      <div class="section-inner">
        <div class="section-heading">
          <p class="section-eyebrow">The Always-On System</p>
          <h2>Four things running automatically - 24 hours a day.</h2>
          <p class="section-intro">Most trades businesses lose work not because they do bad jobs, but because the systems around the work aren't doing their job. The Always-On System fixes four of them at once, set up in under two weeks, then running on its own.</p>
        </div>
        <div class="steps">
          <div class="step">
            <span class="step-number">1</span>
            <div class="step-content">
              <h3>AI Receptionist - calls and web chat</h3>
              <p>Answers inbound calls and website chat enquiries automatically, 24 hours a day. Qualifies the enquiry, captures the details, and notifies you, even when you're on site, in the evening, or at the weekend.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <div class="step-content">
              <h3>Enquiry follow-up automation</h3>
              <p>Every enquiry that comes in gets a professional response within minutes, automatically. No lead goes cold because someone was too busy to get back to them.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <div class="step-content">
              <h3>12-week new client welcome sequence</h3>
              <p>Every new client receives consistent, professional communication across their first 12 weeks, written in your voice, running automatically from day one.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">4</span>
            <div class="step-content">
              <h3>Google review automation</h3>
              <p>A review request goes out automatically 24 hours after every completed job, timed for when satisfaction is highest. More reviews, without anyone having to remember to ask.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4 — HOW IT WORKS -->
    <section class="process-section">
      <div class="section-inner">
        <div class="section-heading">
          <p class="section-eyebrow">The process</p>
          <h2>From first call to live system in under two weeks.</h2>
        </div>
        <div class="steps">
          <div class="step">
            <span class="step-number">1</span>
            <div class="step-content">
              <h3>Free 30-Min Call</h3>
              <p>We talk through how your business currently handles enquiries, what happens when someone calls, fills in a form, or sends a message. No pitch. No pressure. Just an honest look at where jobs might be slipping through.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <div class="step-content">
              <h3>We Build It <span class="step-meta">Week 1–2</span></h3>
              <p>I set up the AI Receptionist, configure the follow-up sequences, write your 12-week welcome sequence in your voice, and connect everything to your website. You review it before anything goes live.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <div class="step-content">
              <h3>It Runs <span class="step-meta">From Week 2 Onwards</span></h3>
              <p>The system goes live. Calls get answered. Enquiries get followed up. New clients get looked after. Reviews come in. All automatically, without you managing any of it. Monthly check-in included.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5 — PRICING -->
    <section class="pricing-section">
      <div class="section-inner">
        <div class="section-heading">
          <p class="section-eyebrow">The investment</p>
          <h2>Simple and transparent.</h2>
        </div>
        <div class="pricing-layout">
          <div class="pricing-card">
            <div class="pricing-tier">
              <div class="tier-header">
                <h3>Setup</h3>
                <div class="tier-price">
                  <span class="price-now">£595</span>
                </div>
              </div>
              <p class="tier-desc">Everything built and delivered in under two weeks.</p>
            </div>
            <div class="pricing-rule"></div>
            <div class="pricing-tier">
              <div class="tier-header">
                <h3>Monthly</h3>
                <div class="tier-price">
                  <span class="price-now">£147<span class="price-period">/mo</span></span>
                </div>
              </div>
              <p class="tier-desc">Includes your software licence, reduced pricing for additional automations, changes and direct access when something needs attention.</p>
            </div>
            <div class="pricing-footer">
              <p class="pricing-contract">No contract. Cancel any time with 30 days notice.</p>
            </div>
          </div>
          <div class="pricing-callout">
            <p class="callout-text">"The setup covers the full build: AI Receptionist configuration, all four automations, website connection, and a walkthrough when it goes live."</p>
            <a href="/always-on-system" class="btn-primary" target="_blank" rel="noopener">Book a Free 30-Min Call</a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6 — ABOUT -->
    <section class="about-section">
      <div class="section-inner about-inner">
        <div class="about-body">
          <p class="section-eyebrow">Who you're talking to</p>
          <h2>You work directly with me, not handed to an outsourced team.</h2>
          <div class="about-text">
            <p>I'm Pieter K de Villiers. I've been working with service businesses on process improvement and automation since 2014, long before AI became a buzzword. I built and sold MacantaCRM, a no-code CRM and process automation platform. I'm the author of <em>Barefoot Business</em>, an Amazon Number 1 bestseller on building a business that works without you becoming the bottleneck. I also hold an Applied AI and Data Science certification from MIT.</p>
            <p>Every system I build is designed around how your business actually works, not a template dropped in and left running. If I take on your project, I deliver it personally.</p>
          </div>
        </div>
        <div class="about-photo">
          <img src="/images/pkdv-profile.jpg" alt="Pieter K de Villiers" class="profile-photo" />
        </div>
      </div>
    </section>

    <!-- SECTION 7 — FINAL CTA -->
    <section class="cta-section">
      <div class="cta-inner">
        <h2>Stop losing jobs to your voicemail.</h2>
        <p>The 30-minute call is free. No pitch. No hard sell. Just a conversation about whether this is the right fit for your business.</p>
        <div class="cta-actions">
          <a href="/always-on-system" class="btn-primary-inv" target="_blank" rel="noopener">Book Your Free Call</a>
        </div>
        <a href="/automation-readiness" class="cta-text-link">Or take the free Automation Readiness Assessment →</a>
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

/* TYPOGRAPHY */
h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 2.8vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;
}

/* HERO */
.hero {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 6rem 3rem 6rem;
}

.hero-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3.5rem;
  align-items: center;
}

.hero-content {
  min-width: 0;
}

.hero-media {
  min-width: 0;
}

.hero-video,
.hero-video-placeholder {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  background: #000000;
}

.hero-video-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px dashed rgba(255, 255, 255, 0.2);
}

.hero-video-play {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding-left: 4px;
  border-radius: 50%;
  background: var(--accent);
  color: #ffffff;
}

.hero-video-caption {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
}

.hero .section-eyebrow {
  color: var(--accent);
}

.hero-sub {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-wrap: wrap;
}

.hero-scroll-link {
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color 0.15s;
}

.hero-scroll-link:hover {
  color: #ffffff;
}

.hero-demo {
  margin-bottom: 2.5rem;
  padding: 1.5rem 1.75rem;
  max-width: 600px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-left: 3px solid var(--accent);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
}

.hero-demo-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.hero-demo-number {
  display: inline-block;
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  font-weight: 700;
  letter-spacing: 0.01em;
  color: var(--accent);
  text-decoration: none;
  transition: color 0.15s;
}

.hero-demo-number:hover {
  color: #ffffff;
}

.hero-demo-note {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.4rem;
}

/* SHARED */
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-heading {
  max-width: 680px;
  margin-bottom: 3rem;
}

.section-intro {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.8;
  margin-top: 0.75rem;
}

/* SECTION 2 — PROBLEM */
.problems-section {
  padding: 7rem 3rem;
}

.problems-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.problem-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-top: 3px solid var(--accent);
  border-radius: 16px;
  padding: 2rem 1.75rem;
}

.problem-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
  line-height: 1.35;
  margin-bottom: 0.85rem;
}

.problem-card p {
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.8;
}

/* SECTION 3 — SOLUTION */
.solution-section {
  padding: 7rem 3rem;
  background: var(--surface);
}

/* SECTION 4 — HOW IT WORKS */
.process-section {
  padding: 7rem 3rem;
}

/* STEPS (shared between sections 3 and 4) */
.steps {
  display: flex;
  flex-direction: column;
}

.step {
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 2rem;
  padding: 2.5rem 0;
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
  margin-top: 0.15rem;
}

.step-content h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-bottom: 0.6rem;
  line-height: 1.4;
}

.step-meta {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--ink-2);
  margin-left: 0.5rem;
}

.step-content p {
  font-size: 0.95rem;
  color: var(--ink-2);
  line-height: 1.8;
}

/* SECTION 5 — PRICING */
.pricing-section {
  padding: 7rem 3rem;
  background: var(--surface);
}

.pricing-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.pricing-card {
  background: var(--surface-dark);
  color: #ffffff;
  border-radius: 20px;
  padding: 2.5rem;
}

.pricing-tier {
  padding: 1.25rem 0;
}

.pricing-tier:first-child {
  padding-top: 0;
}

.tier-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.tier-header h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
  margin: 0;
}

.tier-price {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-shrink: 0;
}

.price-now {
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.03em;
  line-height: 1;
}

.price-period {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0;
}

.tier-desc {
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.75;
}

.pricing-rule {
  height: 1px;
  background: var(--border-inv);
  margin: 0.25rem 0;
}

.pricing-footer {
  margin-top: 1.5rem;
}

.pricing-contract {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
}

.pricing-callout {
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.callout-text {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--ink);
  line-height: 1.7;
  border-left: 3px solid var(--accent);
  padding-left: 1.25rem;
}

/* SECTION 6 — ABOUT */
.about-section {
  padding: 7rem 3rem;
}

.about-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6rem;
  align-items: center;
}

.about-text {
  margin-top: 1.5rem;
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.85;
}

.about-text p + p {
  margin-top: 1.1rem;
}

.profile-photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
  border: 2px solid var(--border);
}

/* SECTION 7 — FINAL CTA */
.cta-section {
  background: var(--surface-dark);
  padding: 8rem 3rem;
}

.cta-inner {
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
}

.cta-section h2 {
  color: #ffffff;
  margin-bottom: 1.25rem;
}

.cta-section p {
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.btn-primary-inv {
  background: var(--accent);
  color: #ffffff;
  padding: 0.85rem 1.75rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 8px;
  transition: background 0.15s, transform 0.1s;
  display: inline-block;
}

.btn-primary-inv:hover {
  background: var(--accent-dark);
  transform: translateY(-1px);
}

.cta-text-link {
  display: inline-block;
  font-size: 0.88rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.15s;
}

.cta-text-link:hover {
  color: #ffffff;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero { padding: 4rem 1.5rem 4rem; }
  /* Flatten the hero so the video sits between the intro text and the call-now panel */
  .hero-inner { grid-template-columns: 1fr; gap: 0; }
  .hero-content { display: contents; }
  .hero-media { order: 1; margin-bottom: 2.5rem; }
  .hero-demo { order: 2; }
  .hero-actions { order: 3; }
  .problems-section { padding: 5rem 1.5rem; }
  .problems-grid { grid-template-columns: 1fr; }
  .solution-section { padding: 5rem 1.5rem; }
  .process-section { padding: 5rem 1.5rem; }
  .step { grid-template-columns: 2.5rem 1fr; gap: 1.25rem; }
  .pricing-section { padding: 5rem 1.5rem; }
  .pricing-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .pricing-callout { position: static; }
  .about-section { padding: 5rem 1.5rem; }
  .about-inner { grid-template-columns: 1fr; gap: 2rem; }
  .about-photo { order: -1; }
  .profile-photo { width: 96px; height: 96px; }
  .cta-section { padding: 5rem 1.5rem; }
}
</style>
