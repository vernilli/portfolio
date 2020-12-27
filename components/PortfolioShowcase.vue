<template>
  <div class="portfolio__showcase pt-5 pb-3">
    <portfolio-card
      v-for="(project, index) in $t('showcase', { returnObjects: true })" :key="index"
      :hide-project="project.permalink === hideProject"
      :project-url="project.permalink"
      :project-title="project.title"
      :project-desc="project.desc"
      :projectImgAlt="project.imageAlt"
      :projectImgUrl="project.imageUrl"
      :class="[
        project.background,
        project.device,
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
