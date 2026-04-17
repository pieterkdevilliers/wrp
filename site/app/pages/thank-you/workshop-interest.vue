<script setup>
useSeoMeta({
  title: "Your call is booked — Blindspot Works",
  robots: 'noindex, nofollow',
})
</script>

<template>
  <ThankYouPage
    eyebrow="White Room Process · Discovery Call"
    headline="Your call is booked."
    subheadline="We'll use the time to talk through the White Room Process, what it involves, and whether it's the right fit for where your business is right now."
    :steps="[
      'You\'ll receive a calendar confirmation with the call link shortly. Check your spam folder if it doesn\'t appear within a few minutes.',
      'There\'s nothing to prepare. Come ready to talk about your business: What\'s working, what isn\'t, and what you\'re trying to change.',
      'If you need to reschedule, use the link in the calendar invitation.',
    ]"
    :resources="[
      { description: 'The Business Journey Scorecard is a good way to benchmark where your business stands before the workshop. Takes about five minutes.', href: 'https://business-journey-health.scoreapp.com/', label: 'Take the Scorecard', external: true },
      { description: 'Find out what Blindspot Works actually does, and how other business owners have used it to close the gaps in their operations.', href: '/coaching', label: 'Learn about Coaching', external: false },
    ]"
  />
</template>
