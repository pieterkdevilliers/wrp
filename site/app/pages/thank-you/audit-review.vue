<script setup>
useSeoMeta({
  title: "Your Audit Report Review is confirmed — Blindspot Works",
  robots: 'noindex, nofollow',
})
</script>

<template>
  <ThankYouPage
    eyebrow="Journey Audit · Report Review"
    headline="Your Audit Report Review is confirmed."
    subheadline="The written report will be with you before this call. Check your inbox for the calendar invitation with the call link."
    :steps="[
      'You\'ll receive a calendar confirmation with the call link shortly. Keep it somewhere easy to find, you\'ll need it on the day.',
      'Before we speak, read through the report. You don\'t need to prepare anything formal, just let the findings settle. Note anything that surprised you, anything you want to push back on, and anything you want to understand better.',
      'On the call we\'ll walk through the report together, clarify anything that needs context, and talk about what to do next, in what order and why. Come with questions. The more you challenge what\'s in the report, the more useful the conversation will be.',
    ]"
    :resources="[
      { description: 'If you haven\'t already, the Business Journey Scorecard gives you a useful inside view to bring to the call, it takes five minutes and adds useful context to what the report found.', href: 'https://business-journey-health.scoreapp.com/', label: 'Take the Scorecard', external: true },
      { description: 'If the report has surfaced gaps you want to map in full detail with your team, read more about the White Room Process Workshop, it\'s the natural next step for businesses ready to go deeper.', href: '/workshop', label: 'About the Workshop', external: false },
    ]"
  />
</template>
