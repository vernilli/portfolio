<template>
  <nuxt-link 
    v-if="!hideProject"
    :to="projectUrl" 
    class="portfolio__card d-flex flex-column p-4 pb-5"
  >
    <img 
      class="portfolio__card__image"
      :src="projectImgUrl"
      :alt="projectImgAlt"
    >
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
    hideProject: Boolean,
    projectTitle: String,
    projectDesc: String,
    projectUrl: String,
    projectImgUrl: String,
    projectImgAlt: String,
  },
}
</script>
