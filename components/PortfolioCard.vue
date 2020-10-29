<template>
  <nuxt-link :to="projectUrl" class="portfolio__card d-block p-4">
    <h2 class="portfolio__card__title">
      {{ projectTitle }}
    </h2>
    <p class="portfolio__card__desc">
      {{ projectDesc }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: "portfolio-card",
  props: {
    projectTitle: String,
    projectDesc: String,
    projectUrl: String,
  },
}
</script>
