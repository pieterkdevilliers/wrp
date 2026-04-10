<template>
  <NuxtRouteAnnouncer />
  <main id="main-content">
    <NuxtPage />
  </main>
  <div id="my-ai-chat-widget-container"></div>
</template>

<script setup>
useHead({
  script: [
    {
      innerHTML: `window.myAIChatWidgetConfig = {
        accountId: '8cac84dfc71fd596',
        apiKey: '248c0fdaecb701d0320c0a04cb74e29bd85a9d2409e7f8bb54e6b6edf3134392',
        themeColour: "null",
        buttonText: "Any questions?",
        widgetTitle: "Explore Barefoot Business",
        welcomeMessage: "Welcome, how can I help?",
        optInRequired: "true",
      };`,
    },
    {
      src: 'https://d31env5c5sjhq3.cloudfront.net/static/expertecho/widget.js',
      async: true,
      defer: true,
    },
  ],
})
</script>
