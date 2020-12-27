<template>
  <div class="portfolio__showcase pt-5 pb-3">
    <portfolio-card
      v-for="(project, index) in $t('pages', { returnObjects: true })" :key="index"
      :hide-project="project.permalink === hideProject"
      :project-url="project.permalink"
      :project-title="project.projectTitle"
      :project-desc="project.showcase.desc"
      :projectImgAlt="project.showcase.imageAlt"
      :projectImgUrl="project.showcase.imageUrl"
      :class="[
        project.showcase.background,
        project.showcase.device,
      ]"
    />
  </div>
</template>

<script>
import PortfolioCard from '~/components/PortfolioCard.vue'

export default {
  name: "portfolio-showcase",
  components: {
    PortfolioCard,
  },
  props: {
    hideProject: String,
  },
  
}
</script>
