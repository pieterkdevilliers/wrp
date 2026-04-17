<script setup>
useSeoMeta({
  title: "Got it — Blindspot Works",
  robots: 'noindex, nofollow',
})
</script>

<template>
  <ThankYouPage
    eyebrow="Coaching · Expression of Interest"
    headline="Got it. You'll hear from me directly."
    subheadline="I've received your interest in ongoing coaching. I'll be in touch within one business day to talk through whether it's the right fit."
    :steps="[
      'I\'ll review your submission and reach out within one business day. Expect a short email from me, not an automated sequence.',
      'If we decide to move forward, we\'ll start with a scoping conversation to make sure the engagement is structured around what your business actually needs.',
      'Coaching engagements are ongoing and built around your specific situation, not a fixed curriculum. The first session is about understanding where you are and what\'s getting in the way.',
    ]"
    :resources="[
      { description: 'Take the free Business Journey Scorecard while you wait. It\'s a good way to surface the patterns we\'ll likely focus on together.', href: 'https://business-journey-health.scoreapp.com/', label: 'Take the Scorecard', external: true },
      { description: 'Read more about what the White Room Process covers and what past participants have taken away from the two days.', href: '/workshop', label: 'About the Workshop', external: false },
    ]"
  />
</template>
