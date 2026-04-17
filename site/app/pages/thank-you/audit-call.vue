<script setup>
useSeoMeta({
  title: "Your audit call is booked — Blindspot Works",
  robots: 'noindex, nofollow',
})
</script>

<template>
  <ThankYouPage
    eyebrow="Journey Audit · Discovery Call"
    headline="Your audit call is booked."
    subheadline="The first step toward finding what your business is actually losing, and what to do about it."
    :steps="[
      'You\'ll receive a calendar confirmation with the call link shortly. Check your spam folder if it doesn\'t appear within a few minutes.',
      'Before the call, take five minutes to think about the part of your business that feels most chaotic or inconsistent right now. That\'s usually where we start.',
      'The call is 45 minutes. We\'ll map the current state of your business, identify where value is leaking, and outline what a full audit would uncover.',
    ]"
    :resources="[
      { description: 'Take the free Business Journey Scorecard before our call. It gives us a structured starting point and means we spend less time on basics and more time on what matters.', href: 'https://business-journey-health.scoreapp.com/', label: 'Take the Scorecard', external: true },
      { description: 'Find out what Blindspot Works actually does, and how other business owners have used it to close the gaps in their operations.', href: '/coaching', label: 'Learn about Coaching', external: false },
    ]"
  />
</template>
