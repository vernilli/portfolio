<template>
  <nuxt-link 
    v-if="!hideProject"
    :to="projectUrl" 
    class="portfolio__card d-flex flex-column justify-content-md-between p-4"
  >
    <img 
      class="portfolio__card__image"
      :src="projectImgUrl"
      :alt="projectImgAlt"
    >
    <div>
      <h2 class="portfolio__card__title mb-3">
        {{ projectTitle }}
      </h2>
      <p class="portfolio__card__desc">
        {{ projectDesc }}
      </p>
    </div>

    <span class="portfolio__card__reading-time align-self-start px-2">
      {{ projectReadingTime }}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'portfolio-card',
  props: {
    hideProject: Boolean,
    projectTitle: String,
    projectReadingTime: String,
    projectDesc: String,
    projectUrl: String,
    projectImgUrl: String,
    projectImgAlt: String,
  },
}
</script>
