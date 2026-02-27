<template>
  <footer>
    <span>© 2025 Pieter K de Villiers · Cobham, Surrey, UK</span>
    <div class="footer-links">
      <a href="https://linkedin.com/in/pkdevilliers" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://github.com/pieterkdevilliers" target="_blank" rel="noopener">GitHub</a>
      <a href="mailto:pieter@hey.com">pieter@hey.com</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--surface-dark);
  color: rgba(255, 255, 255, 0.35);
  padding: 2.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 400;
}

footer a {
  color: rgba(255, 255, 255, 0.35);
  text-decoration: none;
  transition: color 0.15s;
}

footer a:hover { color: rgba(255, 255, 255, 0.85); }

.footer-links { display: flex; gap: 2rem; }

@media (max-width: 900px) {
  footer {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
