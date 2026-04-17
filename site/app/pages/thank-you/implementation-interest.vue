<script setup>
useSeoMeta({
  title: "Your call is booked — Blindspot Works",
  robots: 'noindex, nofollow',
})
</script>

<template>
  <ThankYouPage
    eyebrow="Implementation · Discovery Call"
    headline="Your call is booked."
    subheadline="We'll use the time to understand what you're trying to build or fix, and whether implementation support is the right next step."
    :steps="[
      'You\'ll receive a calendar confirmation with the call link shortly. Check your spam folder if it doesn\'t appear within a few minutes.',
      'Come ready to talk about the specific problem or project, what it is, where it stands, and what\'s been blocking progress.',
      'If you need to reschedule, use the link in the calendar invitation.',
    ]"
    :resources="[
      { description: 'Take the free Business Journey Scorecard before we speak. It helps surface the structural gaps that implementation work usually needs to address.', href: 'https://business-journey-health.scoreapp.com/', label: 'Take the Scorecard', external: true },
      { description: 'Read more about what the White Room Process covers and what past participants have taken away from the two days.', href: '/workshop', label: 'About the Workshop', external: false },
    ]"
  />
</template>
