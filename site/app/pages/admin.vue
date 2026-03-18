<script setup lang="ts">
useSeoMeta({ title: 'Admin — Pieter K de Villiers', robots: 'noindex' })

// ── Auth ──────────────────────────────────────────────────────────────────────
// useCookie creates a JS-readable cookie that is also forwarded in SSR requests
const adminToken = useCookie('admin_token', {
  default: () => '',
  sameSite: 'lax',
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
})

const isLoggedIn = ref(false)
const authChecked = ref(false)
const loginPassword = ref('')
const loginError = ref('')
const loginPending = ref(false)

// useFetch forwards the cookie in SSR so this works on page reload
const { error: authError } = await useFetch('/api/admin/check', {
  ignoreResponseError: true,
})
isLoggedIn.value = !authError.value
authChecked.value = true

// All protected API calls — always sends the token as a header
function apiFetch(url: string, opts: { method?: string; body?: unknown } = {}) {
  return $fetch(url, {
    method: opts.method,
    body: opts.body,
    headers: { Authorization: `Bearer ${adminToken.value}` },
  })
}

async function login() {
  loginError.value = ''
  loginPending.value = true
  try {
    const result = await $fetch<{ ok: boolean; token: string }>('/api/admin/login', {
      method: 'POST',
      body: { password: loginPassword.value },
    })
    adminToken.value = result.token   // sets the cookie via useCookie
    isLoggedIn.value = true
    loginPassword.value = ''
    await loadPodcasts()
  } catch {
    loginError.value = 'Incorrect password.'
  } finally {
    loginPending.value = false
  }
}

function logout() {
  adminToken.value = ''
  isLoggedIn.value = false
  podcasts.value = []
}

// ── Podcasts ──────────────────────────────────────────────────────────────────
const podcasts = ref([])
const saving = ref(false)
const deleting = ref(null)
const editingId = ref(null)

const emptyForm = () => ({ show: '', episode: '', description: '', artwork: '', url: '', date: '' })
const showForm = ref(false)
const form = ref(emptyForm())

async function loadPodcasts() {
  podcasts.value = await apiFetch('/api/admin/podcasts')
}

// Load on mount — client-side only, no SSR cookie-forwarding needed
onMounted(async () => {
  if (isLoggedIn.value) await loadPodcasts()
})

function startAdd() {
  editingId.value = null
  form.value = emptyForm()
  showForm.value = true
}

function startEdit(podcast) {
  editingId.value = podcast.id
  form.value = { ...podcast }
  showForm.value = true
}

function cancelForm() {
  showForm.value = false
  editingId.value = null
}

async function saveForm() {
  saving.value = true
  try {
    if (editingId.value) {
      await apiFetch(`/api/admin/podcasts/${editingId.value}`, { method: 'PUT', body: form.value })
    } else {
      await apiFetch('/api/admin/podcasts', { method: 'POST', body: form.value })
    }
    await loadPodcasts()
    cancelForm()
  } finally {
    saving.value = false
  }
}

async function deletePodcast(id) {
  if (!confirm('Delete this podcast appearance?')) return
  deleting.value = id
  try {
    await apiFetch(`/api/admin/podcasts/${id}`, { method: 'DELETE' })
    await loadPodcasts()
  } finally {
    deleting.value = null
  }
}
</script>

<template>
  <div class="admin-page">

    <!-- LOGIN -->
    <div v-if="authChecked && !isLoggedIn" class="login-wrap">
      <div class="login-box">
        <p class="admin-eyebrow">Barefoot Business</p>
        <h1>Admin</h1>
        <p class="login-sub">Enter your password to continue.</p>
        <form @submit.prevent="login" class="login-form">
          <input
            v-model="loginPassword"
            type="password"
            placeholder="Password"
            class="admin-input"
            autofocus
          />
          <p v-if="loginError" class="form-error">{{ loginError }}</p>
          <button type="submit" class="btn-primary" :disabled="loginPending">
            {{ loginPending ? 'Signing in…' : 'Sign In' }}
          </button>
        </form>
      </div>
    </div>

    <!-- DASHBOARD -->
    <div v-else-if="isLoggedIn" class="dashboard">

      <header class="admin-header">
        <span class="admin-logo">Admin</span>
        <button class="btn-ghost" @click="logout">Sign Out</button>
      </header>

      <main class="admin-main">

        <!-- NOTICE -->
        <div class="notice">
          <strong>Heads up:</strong> Changes write to <code>app/data/podcasts.json</code>. Commit and redeploy to make them permanent in production.
        </div>

        <!-- PODCASTS SECTION -->
        <section class="admin-section">
          <div class="section-header">
            <h2>Podcast Appearances</h2>
            <button class="btn-primary btn-sm" @click="startAdd" v-if="!showForm">+ Add New</button>
          </div>

          <!-- ADD / EDIT FORM -->
          <div v-if="showForm" class="podcast-form">
            <h3>{{ editingId ? 'Edit Appearance' : 'New Appearance' }}</h3>
            <div class="form-grid">
              <label class="form-field">
                <span>Show name</span>
                <input v-model="form.show" type="text" class="admin-input" placeholder="The Podcast Show" />
              </label>
              <label class="form-field">
                <span>Episode title</span>
                <input v-model="form.episode" type="text" class="admin-input" placeholder="Episode title" />
              </label>
              <label class="form-field form-field--full">
                <span>Description</span>
                <textarea v-model="form.description" class="admin-input admin-textarea" rows="3" placeholder="Brief description of the episode…" />
              </label>
              <label class="form-field">
                <span>Artwork URL</span>
                <input v-model="form.artwork" type="url" class="admin-input" placeholder="https://…" />
              </label>
              <label class="form-field">
                <span>Episode URL</span>
                <input v-model="form.url" type="url" class="admin-input" placeholder="https://…" />
              </label>
              <label class="form-field">
                <span>Date</span>
                <input v-model="form.date" type="date" class="admin-input" />
              </label>
            </div>
            <div class="form-actions">
              <button class="btn-primary btn-sm" @click="saveForm" :disabled="saving">
                {{ saving ? 'Saving…' : (editingId ? 'Save Changes' : 'Add Podcast') }}
              </button>
              <button class="btn-ghost btn-sm" @click="cancelForm">Cancel</button>
            </div>
          </div>

          <!-- PODCAST LIST -->
          <div v-if="podcasts.length" class="podcast-list">
            <div v-for="p in podcasts" :key="p.id" class="podcast-row">
              <img :src="p.artwork" :alt="p.show" class="podcast-thumb" />
              <div class="podcast-info">
                <span class="podcast-show-label">{{ p.show }}</span>
                <span class="podcast-ep-label">{{ p.episode }}</span>
                <span class="podcast-date-label">{{ p.date }}</span>
              </div>
              <div class="podcast-actions">
                <button class="btn-ghost btn-sm" @click="startEdit(p)">Edit</button>
                <button
                  class="btn-danger btn-sm"
                  @click="deletePodcast(p.id)"
                  :disabled="deleting === p.id"
                >{{ deleting === p.id ? '…' : 'Delete' }}</button>
              </div>
            </div>
          </div>
          <p v-else class="empty-state">No podcast appearances yet. Add one above.</p>

        </section>

      </main>
    </div>

  </div>
</template>

<style scoped>
.admin-page {
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
}

/* LOGIN */
.login-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

.login-box {
  width: 100%;
  max-width: 380px;
}

.admin-eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.login-box h1 {
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
}

.login-sub {
  color: var(--ink-2);
  font-size: 0.9rem;
  margin-bottom: 1.75rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* DASHBOARD */
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 2.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 10;
}

.admin-logo {
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: -0.01em;
}

.admin-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 2rem 4rem;
}

/* NOTICE */
.notice {
  background: rgba(41, 187, 236, 0.08);
  border: 1px solid rgba(41, 187, 236, 0.25);
  border-radius: 10px;
  padding: 0.85rem 1.25rem;
  font-size: 0.83rem;
  color: var(--ink-2);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.notice code {
  background: rgba(0,0,0,0.06);
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-size: 0.85em;
}

/* SECTION */
.admin-section {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.75rem;
}

.section-header h2 {
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
}

/* FORM */
.podcast-form {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.75rem;
  margin-bottom: 1.75rem;
}

.podcast-form h3 {
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 1.25rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-field--full {
  grid-column: 1 / -1;
}

.form-field span {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ink-2);
  letter-spacing: 0.03em;
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
}

/* INPUTS */
.admin-input {
  width: 100%;
  padding: 0.6rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  color: var(--ink);
  background: var(--bg);
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;
}

.admin-input:focus {
  border-color: var(--accent);
}

.admin-textarea {
  resize: vertical;
  min-height: 80px;
}

.form-error {
  font-size: 0.8rem;
  color: #e05252;
}

/* PODCAST LIST */
.podcast-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.podcast-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
}

.podcast-thumb {
  width: 52px;
  height: 52px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--surface-dark);
}

.podcast-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  min-width: 0;
}

.podcast-show-label {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
}

.podcast-ep-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.podcast-date-label {
  font-size: 0.75rem;
  color: var(--ink-2);
}

.podcast-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.empty-state {
  text-align: center;
  color: var(--ink-2);
  font-size: 0.88rem;
  padding: 2rem 0;
}

/* BUTTONS */
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s;
}

.btn-primary:hover:not(:disabled) { background: var(--accent-dark); }
.btn-primary:disabled { opacity: 0.55; cursor: not-allowed; }

.btn-ghost {
  display: inline-block;
  background: transparent;
  color: var(--ink-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0.7rem 1.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;
}

.btn-ghost:hover { color: var(--ink); border-color: var(--ink-2); }

.btn-danger {
  display: inline-block;
  background: transparent;
  color: #e05252;
  border: 1px solid #e0525233;
  border-radius: 8px;
  padding: 0.7rem 1.4rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
}

.btn-danger:hover:not(:disabled) { background: #e0525210; }
.btn-danger:disabled { opacity: 0.45; cursor: not-allowed; }

.btn-sm {
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
}

@media (max-width: 600px) {
  .admin-header { padding: 1rem 1.25rem; }
  .admin-main { padding: 1.5rem 1.25rem 3rem; }
  .form-grid { grid-template-columns: 1fr; }
  .podcast-row { flex-wrap: wrap; }
  .podcast-actions { width: 100%; justify-content: flex-end; }
}
</style>
