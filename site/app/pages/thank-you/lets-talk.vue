<script setup>
useSeoMeta({
  title: "You're booked in — Blindspot Works",
  robots: 'noindex, nofollow',
})
</script>

<template>
  <ThankYouPage
    eyebrow="Let's Talk · 15-Minute Call"
    headline="You're booked in. Let's talk."
    subheadline="Your 15-minute call is confirmed. Check your inbox for the calendar invitation with the call link."
    :steps="[
      'You\'ll receive a calendar confirmation with the call link in your inbox shortly. Check your spam folder if it doesn\'t arrive within a few minutes.',
      'There\'s nothing to prepare. Come as you are. We\'ll cover the basics of where you are and what you\'re working on.',
      'If you need to reschedule, use the link in the calendar invitation. No awkward emails needed.',
    ]"
    :resources="[
      { description: 'Curious where your business is losing value? Take the free Business Journey Scorecard before our call so we can hit the ground running.', href: 'https://business-journey-health.scoreapp.com/', label: 'Take the Scorecard', external: true },
      { description: 'Find out what Blindspot Works actually does, and how other business owners have used it to close the gaps in their operations.', href: '/coaching', label: 'Learn about Coaching', external: false },
    ]"
  />
</template>
