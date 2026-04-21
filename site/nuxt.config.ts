// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/lets-talk': { redirect: { to: 'https://tap-now-link.com/widget/bookings/i-am-curious', statusCode: 302 } },
    '/**': {
      headers: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Content-Security-Policy': [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://checkanalytic.com https://d31env5c5sjhq3.cloudfront.net https://www.buzzsprout.com https://fastapi-rag-2705cfd4c41a.herokuapp.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data: https:",
          "frame-src https://ee-crm.expertecho.ai https://www.buzzsprout.com",
          "connect-src 'self' https://checkanalytic.com https://*.checkanalytic.com https://d31env5c5sjhq3.cloudfront.net https://*.expertecho.ai https://www.buzzsprout.com https://fastapi-rag-2705cfd4c41a.herokuapp.com",
          "object-src 'none'",
          "base-uri 'self'",
        ].join('; '),
      },
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      script: [
        {
          'data-host': 'https://checkanalytic.com',
          src: 'https://checkanalytic.com/js/script.js',
          id: 'ZwSg9rf6GA',
          async: true,
          defer: true,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital@1&display=swap',
        },
      ],
    },
  },
})
