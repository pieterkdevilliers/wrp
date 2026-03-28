<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Pieter K de Villiers — AI & Automation Consulting',
})

const gcForm = ref(null)

function handleMessage(e) {
  if (e.data && e.data.gcFormHeight && gcForm.value) {
    gcForm.value.style.height = e.data.gcFormHeight + 'px'
  }
}

onMounted(() => {
  window.addEventListener('message', handleMessage)
})

onBeforeUnmount(() => {
  window.removeEventListener('message', handleMessage)
})
</script>


<template>
  <div class="page">

    <SiteNav />

    <!-- HERO -->
    <section class="hero">
      <div class="hero-left">
        <p class="hero-eyebrow">AI &amp; Automation Consulting · UK</p>
        <h1>Your business is losing value in the <em>gaps nobody sees.</em></h1>
        <p class="hero-sub">
          Imagine your full prospect and customer journey - from first touch to loyal advocate - fully mapped out, revealing exactly where automation and AI can seal the leaks, slash delays, and erase the manual effort that's quietly draining your resources.
        </p>
        <div class="hero-actions">
          <a href="https://koalendar.com/u/pieter-de-villiers" class="btn-primary" target="_blank" rel="noopener">Let's Talk</a>
          <a href="#services" class="btn-secondary">See What's Available</a>
        </div>
      </div>
      <div class="hero-right">
        <p class="hero-quote">
          "Most businesses don't have a sales problem or a tech problem. They have a journey problem - and they've been too busy to look at it properly."
        </p>
        <p class="hero-quote-attr">- Pieter K de Villiers, Barefoot Business</p>
        <div class="hero-stats">
          <div>
            <div class="stat-number">10+</div>
            <div class="stat-label">Years shipping AI &amp; automation products, making real impact</div>
          </div>
          <div>
            <div class="stat-number">0→1</div>
            <div class="stat-label">Experienced in taking products from idea to launch as founder &amp; technical lead</div>
          </div>
          <div>
            <div class="stat-number">£2,495</div>
            <div class="stat-label">Fixed-price discovery workshop</div>
          </div>
          <div>
            <div class="stat-number">1 day</div>
            <div class="stat-label">To transform how you see your business</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROBLEM -->
    <section class="problem">
      <div>
        <p class="section-eyebrow">The Problem</p>
        <h2>You don't need more tools. You need clarity.</h2>
        <div class="problem-body">
          <p>Most businesses invest in software, automation, and AI before they understand their own process. So the tools add complexity instead of removing it.</p>
          <p>The result is a patchwork of systems that don't talk to each other, a team doing manual work that should be automated, and customers falling through gaps that nobody has properly mapped.</p>
          <p>Before you spend another pound on technology, you need to see the journey your customers are actually on - not the one you think they're on.</p>
        </div>
      </div>
      <ul class="problem-list">
        <li>Do you find leads are going cold because follow-up depends on someone remembering to do it?</li>
        <li>Is your onboarding process inconsistent because it relies on tribal knowledge?</li>
        <li>Are you using five different tools that were meant to solve the same problem?</li>
        <li>Does your team spend hours each week on tasks that should take minutes?</li>
        <li>Have you thought about adding AI but don't know where it would actually make a difference?</li>
        <li>Does growth feel like it requires more people, when it should require better systems?</li>
      </ul>
    </section>

    <!-- SERVICES -->
    <div id="services">
      <div class="services">
        <div class="services-header">
          <p class="section-eyebrow">Start Here</p>
          <h2>Choose where to begin.</h2>
          <p class="services-intro">Every business is at a different stage. Start with what makes sense for you right now.</p>
        </div>
        <div class="services-grid">

          <div class="service-card">
            <p class="service-price">Free</p>
            <h3>The Book</h3>
            <p class="service-desc">Get a free copy of <em>Barefoot Business</em> - my 2017 Amazon bestseller on building a business that works without you being the bottleneck.</p>
            <a href="#about" class="btn-primary service-cta">Get Your Free Copy</a>
          </div>

          <div class="service-card">
            <p class="service-price">Free</p>
            <h3>Self Assessment</h3>
            <p class="service-desc">Take the Business Journey Scorecard to see exactly where your business is losing value, and get a personalised report in minutes.</p>
            <a href="https://business-journey-health.scoreapp.com/" class="btn-primary service-cta" target="_blank" rel="noopener">Take the Assessment</a>
          </div>

          <div class="service-card">
            <p class="service-price">£249</p>
            <h3>Journey Audit</h3>
            <p class="service-desc">A focused, remote audit of your customer journey. Discover where you're losing time and money, and get a prioritised action plan, delivered within a week.</p>
            <NuxtLink to="/journey-audit" class="btn-primary service-cta">Book a Journey Audit</NuxtLink>
          </div>

          <div class="service-card">
            <p class="service-price">£2,495</p>
            <h3>Workshop</h3>
            <p class="service-desc">A full-day in-person session to map your complete customer journey end-to-end, and leave with a clear picture of exactly what to fix and how.</p>
            <NuxtLink to="/workshop" class="btn-primary service-cta">What's Involved in a Workshop</NuxtLink>
          </div>

        </div>
      </div>
    </div>

    <!-- WHO I WORK WITH -->
    <div class="who">
      <div class="who-header">
        <p class="section-eyebrow">Who I Work With</p>
        <h2>This isn't for everyone. It might be for you.</h2>
      </div>
      <div class="fit-grid">
        <div class="fit-card good">
          <h3>A strong fit if you are...</h3>
          <p>An owner-managed business with 5–50 people that has grown beyond spreadsheets and manual processes, but hasn't yet built a proper operations or technology function. You know things could be slicker. You're ready to invest in getting them right, and you want a partner who can both think strategically and actually build things.</p>
        </div>
        <div class="fit-card good">
          <h3>Also a strong fit if you...</h3>
          <p>Have tried automation tools or AI before and felt like you didn't get the value. Or you're thinking about AI and want someone who can help you make genuinely good decisions - not sell you a solution looking for a problem. You need a technical partner who speaks business, not jargon.</p>
        </div>
        <div class="fit-card notgood">
          <h3>Probably not the right fit if...</h3>
          <p>You're looking for someone to simply execute a brief you've already written. Or you need a team of 10 developers. I'm a specialist, not an agency - I work with a small number of clients at any time, and I'm selective about the engagements I take on.</p>
        </div>
        <div class="fit-card notgood">
          <h3>Also not the right fit if...</h3>
          <p>You want cheap or fast. I offer neither. The businesses I work with see genuine, lasting improvement in how they operate - and that takes proper thinking, proper building, and a willingness to look honestly at how things currently work.</p>
        </div>
      </div>
    </div>

    <!-- ABOUT -->
    <div id="about">
      <section class="about">
        <div class="about-text">
          <img src="/images/pkdv-profile.jpg" alt="Pieter K de Villiers" class="profile-photo" />
          <p class="section-eyebrow">About</p>
          <h2>I've been on both sides of the problem.</h2>
          <div class="about-body">
            <p>I'm Pieter K de Villiers - an AI Product Lead, Technical Product Manager, and former founder who has spent over a decade building the kinds of systems I now help businesses build and implement.</p>
            <p>As a founder, I built MacantaCRM - a no-code CRM and process automation platform - from zero, led the full product lifecycle, and managed the transition post-acquisition. I've been the person trying to make a business run on systems that weren't quite right, and I've been the person building the solutions.</p>
            <p>That combination is rare. Most consultants are either strategic thinkers who hand you a report, or technical builders who need someone else to tell them what to build. I can do both - which means you get strategy that can actually be implemented, and implementation that's grounded in real business thinking.</p>
            <p>I work with a small number of clients at any time, which means you get my full attention - not an account manager who passes you to a junior team.</p>
          </div>
          <div class="credentials">
            <div class="credential">10+ years defining, architecting, and shipping AI-enabled SaaS products</div>
            <div class="credential">Former co-founder: built and sold a no-code automation platform (MacantaCRM)</div>
            <div class="credential">Technical fluency in Python, LangChain, LLM orchestration, GCP, and Kubernetes</div>
            <div class="credential">Business Automation Consultant since 2014 - helping businesses work smarter</div>
            <div class="credential">Author of <em>Barefoot Business</em> (2017 bestseller)</div>
          </div>
        </div>
        <div class="about-bottom">
          <div class="about-book">
            <img src="/images/book_cover.jpg" alt="Barefoot Business by Pieter K de Villiers" class="book-cover" />
          </div>
          <div class="about-form">
            <p class="hero-quote">
              "Too many entrepreneurs are not aware of the key elements outlined in this book and, as such, will always struggle to break out of small business performance and into the big league."
            </p>
            <p class="hero-quote-attr">
              - Martin Norbury, CEO & Founder at The Scalability Coach
            </p>
            <hr>
            <p class="section-eyebrow">Get your free copy</p>
            <client-only>
              <iframe
                ref="gcForm"
                src="https://ee-crm.expertecho.ai/embed/ddb6e6bf-e592-43eb-9155-0e4ee2cf4de8"
                width="100%"
                height="0"
                style="border:none;overflow:hidden;"
                scrolling="no"
              ></iframe>
            </client-only>
          </div>
        </div>
      </section>
    </div>

    <!-- PODCAST APPEARANCES -->
    <PodcastSection />

    <!-- CTA -->
    <div class="cta-section">
      <p class="section-eyebrow">Get Started</p>
      <h2>I take on a limited number of clients. Spaces are genuinely limited.</h2>
      <p>
        I work with a small number of businesses at any one time to ensure every client gets the attention they deserve. If you're interested in working together, the best first step is a short conversation. No commitment - just the first step in the right direction.
      </p>
      <a href="https://koalendar.com/u/pieter-de-villiers" class="btn-primary" target="_blank" rel="noopener">Let's Talk</a>
    </div>

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
  font-size: clamp(2.6rem, 4.5vw, 4rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.035em;
  margin-bottom: 1.75rem;
}

h1 em {
  font-style: italic;
  color: var(--accent);
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.8rem, 2.8vw, 2.5rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.025em;
  margin-bottom: 1.25rem;
}

/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 4rem;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 4rem 6rem 3rem;
  position: relative;
}

.hero-left::after {
  content: '';
  position: absolute;
  right: 0; top: 15%; bottom: 15%;
  width: 1px;
  background: linear-gradient(to bottom, transparent, var(--border), transparent);
}

.hero-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.25rem;
}

.hero-sub {
  font-size: 1.05rem;
  color: var(--ink-2);
  max-width: 480px;
  margin-bottom: 2.5rem;
  line-height: 1.75;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.hero-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 3rem 6rem 4rem;
  background: var(--surface);
}

.hero-quote {
  font-family: 'Playfair Display', serif;
  font-size: 1.45rem;
  line-height: 1.6;
  font-style: italic;
  color: var(--ink);
  margin-bottom: 1.5rem;
}

.hero-quote-attr {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-2);
}

.hero-stats {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  border-top: 1px solid var(--border);
  padding-top: 2rem;
}

.stat-number {
  font-family: 'Inter', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.78rem;
  color: var(--ink-2);
  margin-top: 0.3rem;
  line-height: 1.4;
}

/* HERO ANIMATIONS */
.hero-left > * {
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}

.hero-eyebrow { animation-delay: 0.1s; }
h1 { animation-delay: 0.22s; }
.hero-sub { animation-delay: 0.34s; }
.hero-actions { animation-delay: 0.46s; }

/* SECTION BASE */
section { padding: 7rem 3rem; }

/* PROBLEM */
.problem {
  background: var(--surface-dark);
  color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.problem h2 { color: #ffffff; }

.problem .section-eyebrow { color: var(--accent); }

.problem-body {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.85;
}

.problem-body p + p { margin-top: 1.1rem; }

.problem-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.problem-list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.problem-list li::before {
  content: '→';
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 0.1rem;
  font-weight: 600;
}

/* SERVICES */
.services {
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 3rem;
}

.services-header {
  margin-bottom: 3.5rem;
}

.services-intro {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 480px;
  margin-top: 0.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.service-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-top: 3px solid var(--accent);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
}

.service-price {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.6rem;
}

.service-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.service-desc {
  font-size: 0.88rem;
  color: var(--ink-2);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.5rem;
}

.service-cta {
  display: block;
  text-align: center;
  width: 100%;
}

/* WHO I WORK WITH */
.who {
  max-width: 1100px;
  margin: 0 auto;
  padding: 7rem 3rem;
}

.who-header { margin-bottom: 3.5rem; }

.fit-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.fit-card {
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--bg);
}

.fit-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 0.75rem;
}

.fit-card p {
  font-size: 0.88rem;
  color: var(--ink-2);
  line-height: 1.7;
}

.fit-card.good { border-top: 3px solid var(--accent); }
.fit-card.notgood { border-top: 3px solid transparent; background: var(--surface); }
.fit-card.notgood h3 { color: var(--ink-2); }

/* ABOUT */
.about {
  background: var(--surface-dark);
  color: #ffffff;
  padding: 7rem 3rem;
}

.about-text {
  max-width: 1100px;
  margin: 0 auto;
}

.about-bottom {
  max-width: 1100px;
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 5rem;
  align-items: stretch;
}

.about h2 { color: #ffffff; }

.about .section-eyebrow { color: var(--accent); }

.about-body {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.85;
}

.about-body p + p { margin-top: 1.1rem; }

.profile-photo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  display: block;
  margin-bottom: 1.75rem;
  border: 2px solid rgba(255, 255, 255, 0.12);
}

.credentials {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2.5rem;
}

.credential {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  font-size: 0.88rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
}

.credential::before {
  content: '—';
  color: var(--accent);
  flex-shrink: 0;
  font-weight: 600;
}

.about-book {
  display: flex;
  align-items: stretch;
}

.book-cover {
  width: 100%;
  display: block;
  border-radius: 6px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.22);
  object-fit: cover;
}

.about-form {
  display: flex;
  flex-direction: column;
  background: var(--bg);
  border-radius: 16px;
  padding: 2rem;
}

/* CTA */
.cta-section {
  text-align: center;
  padding: 8rem 3rem;
  max-width: 680px;
  margin: 0 auto;
}

.cta-section p {
  color: var(--ink-2);
  font-size: 1rem;
  margin-bottom: 2.5rem;
  line-height: 1.8;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
  .hero-left { padding: 4.5rem 1.5rem 3rem; }
  .hero-right { padding: 3rem 1.5rem; }
  .problem { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
  .fit-grid { grid-template-columns: 1fr; }
  .about-bottom { grid-template-columns: 1fr; }
  section { padding: 5rem 1.5rem; }
  .who,
  .services { padding: 5rem 1.5rem; }
}

@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>
