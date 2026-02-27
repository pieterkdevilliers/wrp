<script setup>
useSeoMeta({
  title: 'Join the Waiting List — Pieter K de Villiers',
})

const form = reactive({
  fname: '',
  lname: '',
  email: '',
  business: '',
  size: '',
  location: '',
  interests: [],
  challenge: '',
  how: '',
})

const submitted = ref(false)

function handleSubmit() {
  // TODO: send form data to your backend or a service (e.g. Airtable, ConvertKit)
  submitted.value = true
}
</script>

<template>
  <div class="page-wrapper">

    <SiteNav dark>
      <NuxtLink to="/" class="nav-back">← Back to site</NuxtLink>
    </SiteNav>

    <div class="page">

      <!-- LEFT: THE CASE -->
      <div class="left">
        <p class="eyebrow">Limited Availability · UK Businesses Only</p>
        <h1>This work is in <em>high demand.</em><br>Spaces are genuinely limited.</h1>
        <p class="lead">
          I work with a small number of businesses at any one time. That's a deliberate choice — not a sales tactic. Every client I take on gets my full attention, and that means I can only take on a handful of engagements per quarter.
        </p>
        <div class="scarcity">
          <div class="scarcity-label">Current Availability</div>
          <div class="scarcity-text">
            I am currently accepting new clients for Q2 2025. I have a small number of workshop slots available. Joining this list is the only way to be considered — I don't take cold enquiries.
          </div>
        </div>
        <p class="benefits-title">What joining the list means</p>
        <div class="benefits">
          <div class="benefit">
            <div class="benefit-icon" />
            <span>You'll be the first to know when a workshop slot becomes available in your area</span>
          </div>
          <div class="benefit">
            <div class="benefit-icon" />
            <span>You'll receive a short, personal note from me — not a newsletter blast — about whether I think we'd be a good fit</span>
          </div>
          <div class="benefit">
            <div class="benefit-icon" />
            <span>Priority access ahead of any public announcement of new slots</span>
          </div>
          <div class="benefit">
            <div class="benefit-icon" />
            <span>Access to my thinking: occasional notes on customer journey strategy, automation, and AI — only when I have something worth saying</span>
          </div>
          <div class="benefit">
            <div class="benefit-icon" />
            <span>No obligation. If it's not the right time, I'll still keep you on the list for when it is.</span>
          </div>
        </div>
        <div class="proof">
          <p class="proof-quote">"The workshop gave us a level of clarity about our business that five years of working in it never had. We could finally see exactly where we were losing people — and what to do about it."</p>
          <p class="proof-attr">— Business Owner, Professional Services · South East England</p>
        </div>
      </div>

      <!-- RIGHT: THE FORM -->
      <div class="right">

        <div v-if="!submitted">
          <div class="form-header">
            <h2>Join the Waiting List</h2>
            <p>Tell me a little about your business. This isn't a commitment — it's the start of a conversation. I read every submission personally.</p>
          </div>

          <form class="form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="field">
                <label for="fname">First Name</label>
                <input id="fname" v-model="form.fname" type="text" placeholder="Your first name" required />
              </div>
              <div class="field">
                <label for="lname">Last Name</label>
                <input id="lname" v-model="form.lname" type="text" placeholder="Your last name" required />
              </div>
            </div>

            <div class="field">
              <label for="email">Email Address</label>
              <input id="email" v-model="form.email" type="email" placeholder="you@yourcompany.com" required />
            </div>

            <div class="field">
              <label for="business">Business Name</label>
              <input id="business" v-model="form.business" type="text" placeholder="Your business name" />
            </div>

            <div class="form-row">
              <div class="field">
                <label for="size">Team Size</label>
                <select id="size" v-model="form.size">
                  <option value="" disabled>Select...</option>
                  <option>Just me</option>
                  <option>2–5 people</option>
                  <option>6–15 people</option>
                  <option>16–50 people</option>
                  <option>50+ people</option>
                </select>
              </div>
              <div class="field">
                <label for="location">Location (City / Region)</label>
                <input id="location" v-model="form.location" type="text" placeholder="e.g. Surrey, London" />
              </div>
            </div>

            <div class="field">
              <label>What are you most interested in? (select all that apply)</label>
              <div class="checkbox-group">
                <label class="checkbox-item">
                  <input v-model="form.interests" type="checkbox" value="journey-mapping" />
                  Journey Mapping Workshop
                </label>
                <label class="checkbox-item">
                  <input v-model="form.interests" type="checkbox" value="automation" />
                  Automation Strategy
                </label>
                <label class="checkbox-item">
                  <input v-model="form.interests" type="checkbox" value="ai" />
                  AI Implementation
                </label>
                <label class="checkbox-item">
                  <input v-model="form.interests" type="checkbox" value="fractional" />
                  Fractional Tech Lead
                </label>
              </div>
            </div>

            <div class="field">
              <label for="challenge">In one or two sentences, what's the biggest challenge in your business right now?</label>
              <textarea id="challenge" v-model="form.challenge" placeholder="e.g. We're losing leads between enquiry and sale and can't figure out where they're going..." />
            </div>

            <div class="field">
              <label for="how">How did you hear about me?</label>
              <select id="how" v-model="form.how">
                <option value="" disabled>Select...</option>
                <option>LinkedIn</option>
                <option>Barefoot Business (book)</option>
                <option>YouTube</option>
                <option>Podcast</option>
                <option>Personal referral</option>
                <option>Web search</option>
                <option>Newsletter / Substack</option>
                <option>Other</option>
              </select>
            </div>

            <div class="submit-area">
              <button type="submit" class="btn-submit">Join the Waiting List →</button>
              <p class="form-disclaimer">
                Your information stays private. I don't share it, sell it, or use it for anything other than getting in touch with you about working together. Unsubscribe at any time.
              </p>
            </div>
          </form>
        </div>

        <!-- SUCCESS STATE -->
        <div v-else class="success-state">
          <div class="success-icon">✦</div>
          <h2>You're on the list.</h2>
          <p>
            Thank you for taking the time to tell me about your business. I'll read your submission personally and be in touch when a slot becomes available — or sooner, if it seems like we might be a strong fit.
          </p>
          <div class="next-steps">
            <p class="next-steps-title">What happens next</p>
            <div class="next-step">
              <span class="next-step-num">1</span>
              <span>You'll receive a short confirmation email from me within 24 hours</span>
            </div>
            <div class="next-step">
              <span class="next-step-num">2</span>
              <span>I'll review your submission and let you know if I think we're a good fit</span>
            </div>
            <div class="next-step">
              <span class="next-step-num">3</span>
              <span>When a workshop slot opens in your area, you'll hear about it first</span>
            </div>
            <div class="next-step">
              <span class="next-step-num">4</span>
              <span>In the meantime, follow me on LinkedIn for my thinking on business operations, AI, and automation</span>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.page-wrapper {
  background: var(--surface-dark);
  color: var(--ink);
  min-height: 100vh;
}

/* NAV SLOT CONTENT */
.nav-back {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
  transition: color 0.15s;
}

.nav-back:hover { color: var(--ink); }

/* LAYOUT */
.page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 68px);
}

/* LEFT COLUMN */
.left {
  padding: 5rem 4rem 5rem 3rem;
  border-right: 1px solid var(--border-inv);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1.25rem;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

h1 em {
  font-style: italic;
  color: #ffffff;
}

.lead {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 2.5rem;
}

.scarcity {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 3px solid var(--ink);
  padding: 1.25rem 1.75rem;
  margin-bottom: 2.5rem;
  border-radius: 0 10px 10px 0;
}

.scarcity-label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0.4rem;
}

.scarcity-text {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
}

.benefits-title {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.35);
  margin-bottom: 1rem;
}

.benefits {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.benefit {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  font-size: 0.88rem;
  color: rgba(0, 0, 0, 0.65);
  line-height: 1.55;
}

.benefit-icon {
  width: 18px;
  height: 18px;
  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.benefit-icon::after {
  content: '✓';
  color: var(--ink);
  font-size: 0.55rem;
  font-weight: 700;
}

.proof {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-inv);
}

.proof-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 0.95rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.65;
  margin-bottom: 0.6rem;
}

.proof-attr {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: rgba(0, 0, 0, 0.35);
  text-transform: uppercase;
}

/* LEFT ANIMATIONS */
.left > * {
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
}

.left > *:nth-child(1) { animation-delay: 0.05s; }
.left > *:nth-child(2) { animation-delay: 0.15s; }
.left > *:nth-child(3) { animation-delay: 0.25s; }
.left > *:nth-child(4) { animation-delay: 0.35s; }
.left > *:nth-child(5) { animation-delay: 0.45s; }
.left > *:nth-child(6) { animation-delay: 0.55s; }

/* RIGHT COLUMN */
.right {
  padding: 5rem 3rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right > * {
  opacity: 0;
  animation: fadeUp 0.6s ease forwards;
  animation-delay: 0.3s;
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.6rem;
  color: var(--ink);
}

.form-header p {
  font-size: 0.88rem;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.6;
}

/* FORM */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

label {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
}

input,
select,
textarea {
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  transition: border-color 0.15s, background 0.15s;
  outline: none;
  width: 100%;
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
}

input::placeholder,
textarea::placeholder {
  color: rgba(0, 0, 0, 0.3);
}

input:focus,
select:focus,
textarea:focus {
  border-color: var(--ink);
  background: rgba(255, 255, 255, 0.38);
}

select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 2.5rem;
}

select option {
  background: #ffffff;
  color: var(--ink);
}

textarea {
  resize: vertical;
  min-height: 90px;
  line-height: 1.6;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.checkbox-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 0.82rem;
  color: rgba(0, 0, 0, 0.6);
  padding: 0.6rem 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.15s;
  user-select: none;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 400;
}

.checkbox-item:hover {
  border-color: rgba(0, 0, 0, 0.2);
  color: rgba(0, 0, 0, 0.85);
  background: rgba(255, 255, 255, 0.2);
}

.checkbox-item input[type="checkbox"] {
  width: 14px;
  height: 14px;
  padding: 0;
  accent-color: var(--accent);
  cursor: pointer;
  flex-shrink: 0;
}

.submit-area { margin-top: 0.5rem; }

.btn-submit {
  width: 100%;
  background: var(--ink);
  color: #ffffff;
  border: none;
  padding: 0.9rem 2rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
  -webkit-font-smoothing: antialiased;
}

.btn-submit:hover { background: #3d3d3f; transform: translateY(-1px); }

.form-disclaimer {
  font-size: 0.72rem;
  color: rgba(0, 0, 0, 0.35);
  line-height: 1.6;
  margin-top: 0.85rem;
  text-align: center;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 400;
}

/* SUCCESS STATE */
.success-state {
  text-align: center;
  padding: 3rem 2rem;
  animation: fadeUp 0.6s ease forwards;
}

.success-icon {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 1.3rem;
}

.success-state h2 {
  font-family: 'Inter', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 1rem;
  color: var(--ink);
}

.success-state > p {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.92rem;
  line-height: 1.75;
  max-width: 380px;
  margin: 0 auto;
}

.next-steps {
  margin-top: 2.5rem;
  text-align: left;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 1.5rem;
  border-radius: 12px;
}

.next-steps-title {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 1rem;
}

.next-step {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.6;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.next-step:last-child { border-bottom: none; }

.next-step-num {
  color: var(--ink);
  font-weight: 600;
  flex-shrink: 0;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .page { grid-template-columns: 1fr; }

  .left {
    padding: 3rem 1.5rem 2.5rem;
    border-right: none;
    border-bottom: 1px solid var(--border-inv);
  }

  .right { padding: 3rem 1.5rem; }
  .form-row { grid-template-columns: 1fr; }
  .checkbox-group { grid-template-columns: 1fr; }
}
</style>
