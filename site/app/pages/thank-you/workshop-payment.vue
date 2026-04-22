<script setup>
useSeoMeta({
  title: "Payment received — Blindspot Works",
  robots: 'noindex, nofollow',
})
</script>

<template>
  <ThankYouPage
    eyebrow="White Room Process · Workshop"
    headline="Payment received. Your White Room day is coming."
    subheadline="Your place on the White Room Process Workshop is confirmed. The next step is agreeing a date and location that works for you and your team."
    :steps="[
      'You\'ll receive a payment confirmation to your inbox shortly. Keep it for your records.',
      'Pieter will be in touch within one working day to agree a date, confirm the location, and send you everything you need to prepare. If you haven\'t heard within 24 hours, email pieter@blindspotworks.com directly.',
      'Once the date is confirmed, you\'ll receive a preparation brief — a short document covering what to bring, who to involve, and how to get the most from the day. There is no homework. Just come ready to think honestly about your business.',
    ]"
    extra-eyebrow="What the day looks like"
    :extra-paragraphs="[
      'The White Room Process Workshop is a full day spent mapping your business from the ground up — your customer journey, your team\'s roles, your systems, and your gaps. It runs in two halves.',
      'In the morning, we map the ideal customer journey. Not how it currently works — how it should work. Every touchpoint, every handoff, every moment your client experiences something. This is the design phase. Nothing is sacred. Everything is on the table.',
      'In the afternoon, we map the internal reality. What needs to happen inside the business to deliver the morning\'s design consistently. Every process, every role, every tool. This is where the gaps become visible — and where the priority action plan is built.',
      'You leave with a complete journey map, a prioritised list of what to fix in what order, and a clear picture of what your business needs to look like to run without you holding everything together.',
    ]"
    extra-note="One thing worth knowing: the most valuable thing you can do before the day is decide who to bring. The White Room works best when the people who understand how the business actually runs are in the room — not just the owner. If you have a team, bring the people who would normally say 'that\'s not how it works' when a new idea is suggested. Those are exactly the voices you want in the room."
    :resources="[
      { description: 'If you haven\'t completed the Business Journey Scorecard yet, it\'s worth doing before the workshop — it gives both of us a useful starting point and takes less than five minutes.', href: 'https://business-journey-health.scoreapp.com/', label: 'Take the Scorecard', external: true },
      { description: 'Read more about what the White Room Process Workshop involves.', href: '/workshop', label: 'About the Workshop', external: false },
    ]"
  />
</template>
