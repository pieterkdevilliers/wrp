<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { useSeoMeta } from '#imports'

const siteUrl = 'https://blindspotworks.com'

useSeoMeta({
  title: 'Blindspot Works — Business Automation for Service Businesses',
  description: 'Service businesses lose enquiries, reviews, and repeat clients every week — not because the work isn\'t good, but because the systems aren\'t doing their job. Blindspot Works fixes that.',
  ogTitle: 'Blindspot Works — Find the gaps. Fix the business.',
  ogDescription: 'Service businesses lose enquiries, reviews, and repeat clients every week — not because the work isn\'t good, but because the systems aren\'t doing their job. Blindspot Works fixes that.',
  ogImage: `${siteUrl}/images/pkdv-profile.jpg`,
  ogUrl: siteUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Blindspot Works — Find the gaps. Fix the business.',
  twitterDescription: 'Service businesses lose enquiries, reviews, and repeat clients every week — not because the work isn\'t good, but because the systems aren\'t doing their job. Blindspot Works fixes that.',
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Blindspot Works',
        description: 'Business process improvement and automation consultancy for owner-managed businesses.',
        url: siteUrl,
        founder: {
          '@type': 'Person',
          name: 'Pieter K de Villiers',
          jobTitle: 'Business Process Consultant',
        },
        areaServed: 'GB',
        serviceType: ['Business Process Consulting', 'Automation', 'Customer Journey Mapping'],
      }),
    },
  ],
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
        <p class="hero-eyebrow">Blindspot Works · UK</p>
        <h1>I find the gaps quietly costing your business time and clients - and fix them, <em>without more tools, more staff, or more chaos.</em></h1>
        <p class="hero-sub">
          Enquiries go cold. Satisfied clients don't leave reviews. New clients feel forgotten in week one. I fix all three, automatically, in under two weeks.
        </p>
        <div class="hero-actions">
          <a href="/foundation" class="btn-primary" target="_blank" rel="noopener">See How It Works</a>
          <a href="/lets-talk" class="btn-secondary">Book a Free Call</a>
        </div>
        <HeroCTACards />
      </div>
    </section>

    <!-- PROBLEM -->
    <section class="problem">
      <div>
        <p class="section-eyebrow">The Problem</p>
        <h2>Your business is losing jobs it already has. Here is where they go.</h2>
        <div class="problem-body">
          <p>Most service businesses lose between a third and half of their enquiries. Not because the quote was wrong or the price was too high, but because the response was too slow, the follow-up never happened, or the prospect felt like nobody was really on it.</p>
          <p>The same businesses have few Google reviews, that do not reflect the quality of their work. Not because clients were unhappy, but because nobody asked at the right moment.</p>
          <p>And the clients who do sign up often feel uncertain in the first two weeks, because onboarding depends on whoever has time that week rather than a system that runs the same way every time.</p>
          <p>These are not technology problems. They are process problems. And they are fixable, without adding complexity, without hiring more people, and without spending months on a transformation programme.</p>
        </div>
      </div>
      <ul class="problem-list">
        <li>Do your enquiries get a response within minutes, or does it depend on who is available?</li>
        <li>How many Google reviews did you receive last month versus how many jobs you completed or customers you served?</li>
        <li>What does a new client experience in their first 48 hours, and is it consistent every time?</li>
        <li>Is your follow-up process documented, or does it live in someone's memory?</li>
        <li>When a job is done, does the client hear from you again, or does the relationship go silent?</li>
        <li>Could your business handle twice the enquiry volume with the systems you have today?</li>
      </ul>
    </section>

    <!-- SERVICES -->
    <div id="services">
      <div class="services">
        <div class="services-group">
          <div class="services-group-header">
            <p class="section-eyebrow">Start Here</p>
            <h2>Getting Started</h2>
            <p class="services-intro">Every business is at a different stage. These are the best ways to get clarity on where yours is losing value, with no obligation to go further.</p>
          </div>
          <div class="services-grid">

            <div class="service-card">
              <p class="service-price">Free</p>
              <h3>Value Leak Assessment</h3>
              <p class="service-desc">Find out exactly where your business is losing time, clients, and revenue. The free Value Leak Assessment scores your business across four dimensions and shows you precisely where to focus first. Takes five minutes.</p>
              <a href="/value-leak-assessment" class="btn-primary service-cta" target="_blank" rel="noopener">Take the Free Assessment</a>
            </div>

            <div class="service-card">
              <p class="service-price">Free</p>
              <h3>The Book</h3>
              <p class="service-desc">Get a free copy of <em>Barefoot Business</em>: the 2017 Amazon bestseller on building a business that works without you being the bottleneck.</p>
              <a href="#about" class="btn-primary service-cta">Get Your Free Copy</a>
            </div>

            <div class="service-card">
              <p class="service-price">From £595</p>
              <h3>The Foundation Package</h3>
              <p class="service-desc">A complete automation system for your business, set up and running in under two weeks. Enquiry follow-up, new client welcome sequence, and Google review automation. All done for you.</p>
              <NuxtLink to="/foundation" class="btn-primary service-cta">See What's Included</NuxtLink>
            </div>

          </div>
        </div>

        <div class="services-group">
          <div class="services-group-header">
            <p class="section-eyebrow">Go Deeper</p>
            <h2>Working Together</h2>
            <p class="services-intro">For businesses ready to act on what they've found. These are structured engagements with a clear outcome, whether that's a coaching relationship, a mapped journey, or a running implementation.</p>
          </div>
          <div class="services-grid">

            <div class="service-card">
              <p class="service-price">£495/mo</p>
              <h3>Blindspot Works Coaching</h3>
              <p class="service-desc">An ongoing coaching relationship built around your business, not a generic programme. Fortnightly calls, weekly async check-ins, ongoing research and input that evolves as your business does.</p>
              <NuxtLink to="/coaching" class="btn-primary service-cta">Learn More</NuxtLink>
            </div>

            <div class="service-card">
              <p class="service-price">£2,495</p>
              <h3>White Room Process</h3>
              <p class="service-desc">For business owners who want to get there quicker. A full-day, in-person workshop to map your complete customer journey end-to-end. Required before any implementation work begins. Discounted for existing coaching clients.</p>
              <NuxtLink to="/workshop" class="btn-primary service-cta">What's Involved</NuxtLink>
            </div>

            <div class="service-card">
              <p class="service-price">From £6,995</p>
              <h3>The Clarity Programme</h3>
              <p class="service-desc">A structured six-month engagement that maps your complete customer journey, closes the gaps costing you time and clients, and builds the systems your business needs to run without you. Twelve steps. Four phases. One clear outcome.</p>
              <NuxtLink to="/clarity-programme" class="btn-primary service-cta">Find Out More</NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- WHO I WORK WITH -->
    <div class="who-wrap">
    <div class="who">
      <div class="who-header">
        <p class="section-eyebrow">Who I Work With</p>
        <h2>This isn't for everyone. It might be for you.</h2>
      </div>
      <div class="fit-grid">
        <div class="fit-card good">
          <h3>A strong fit if you are...</h3>
          <p>A service business with a team, trades, professional services, agencies, or any business that handles enquiries, delivers jobs, and wants more Google reviews than it currently has. You know things could run more smoothly. You are ready to invest a small amount monthly to make that happen, and you want it done for you, not handed to you as a project to manage yourself.</p>
        </div>
        <div class="fit-card good">
          <h3>Also a strong fit if you...</h3>
          <p>You have tried software before and it gathered dust. You have bought a CRM that nobody used. You are sceptical of technology promises, and rightly so. This is different because I design the process first, build the automation second, and deliver it working. The system runs in the background. You do not have to manage it.</p>
        </div>
        <div class="fit-card notgood">
          <h3>Probably not the right fit if...</h3>
          <p>You are looking for a cheap tool you can set up yourself, or you want a full agency with a team of ten. I work with a small number of clients personally, I am not the right fit if you need scale or speed over quality and fit.</p>
        </div>
      </div>
    </div>
    </div>

    <!-- TESTIMONIALS -->
    <TestimonialsSection />

    <!-- ABOUT -->
    <div id="about">
      <section class="about">
        <div class="about-text">
          <img src="/images/pkdv-profile.jpg" alt="Pieter K de Villiers" class="profile-photo" />
          <p class="section-eyebrow">About</p>
          <h2>I have been fixing this problem for over a decade. Now the tools to fix it properly are within reach of every small business.</h2>
          <div class="about-body">
            <p>I'm Pieter K de Villiers. I've been working with service business owners on process improvement and automation since 2014, long before AI became a buzzword. The problems I fix now are the same ones I have always fixed: enquiries that go cold, clients who feel forgotten, teams doing manually what should happen automatically.</p>
            <p>The difference is that the tools available today make it faster and more affordable to fix them than ever before. What used to require a significant technology budget can now be set up in two weeks for a few hundred pounds.</p>
            <p>Along the way, I built MacantaCRM, a no-code CRM and process automation platform, from the ground up. Took it to market, and managed the transition through acquisition. I know what it's like to be the business owner trying to keep operations together, and I know what it takes to build systems that genuinely hold up under pressure.</p>
            <p>That background shapes how I work. I'm not a developer who learned to talk to clients, and I'm not a strategist who hands you a report and leaves. I sit at the intersection of business thinking and technical delivery, which means the recommendations I make are ones that can actually be implemented, and the things I build are grounded in how your business works in practice.</p>
            <p>I work with a small number of clients at any time. You'll work with me directly, not an account manager, not a junior consultant.</p>
          </div>
          <div class="credentials">
            <div class="credential">Business process automation consultant since 2014</div>
            <div class="credential">Former co-founder: built and sold MacantaCRM, a no-code CRM and automation platform</div>
            <div class="credential">10+ years working with owners and leadership teams on operational improvement</div>
            <div class="credential">Now applying AI and modern automation tools to the same problems I've always solved</div>
            <div class="credential">Author of<em>Barefoot Business</em>(2017 bestseller)</div>
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
      <a href="https://blindspotworks.com/lets-talk" class="btn-primary" target="_blank" rel="noopener">Let's Talk</a>
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
  padding-top: 4rem;
}

.hero-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 3rem 3rem;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
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
  max-width: 640px;
  margin-bottom: 2.5rem;
  line-height: 1.75;
  font-weight: 400;
}

.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.hero-cta-cards {
  margin-top: 4rem;
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
.hero-cta-cards { animation-delay: 0.58s; }

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

.services-intro {
  color: var(--ink-2);
  font-size: 1rem;
  line-height: 1.7;
  max-width: 480px;
  margin-top: 0.5rem;
}

.services-group + .services-group {
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid var(--border);
}

.services-group-header {
  margin-bottom: 2.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
.who-wrap {
  background: var(--surface);
}

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
.fit-card.notgood { border-top: 3px solid transparent; background: var(--bg); }
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
  .hero-left { padding: 4.5rem 1.5rem 3rem; }
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
