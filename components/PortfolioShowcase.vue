<template>
  <div class="portfolio__showcase py-3">
    <portfolio-card
      v-for="(project, index) in $t('projects', { returnObjects: true })" :key="index"
      :hide-project="project.permalink === hideProject"
      :project-url="project.permalink"
      :project-title="project.projectTitle"
      :project-reading-time="project.readingTime"
      :project-desc="project.showcase.desc"
      :project-img-alt="project.showcase.imageAlt"
      :project-img-url="project.showcase.imageUrl"
      :class="[
        backgrounds[index % 4],
      ]"
    />
  </div>
</template>

<script>
import PortfolioCard from '~/components/PortfolioCard.vue'

export default {
  name: 'portfolio-showcase',
  components: {
    PortfolioCard,
  },
  props: {
    hideProject: String,
  },
  data() {
    return {
      backgrounds: [
        'bg--green-dark',
        'bg--green',
        'bg--green-light',
        'bg--blue-dark',
      ],
    }
  }
  
}
</script>
