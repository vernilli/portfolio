<template>
  <div class="portfolio__showcase pt-5 pb-3">
    <portfolio-card
      :project-title="projects.ace.title"
      :project-desc="projects.ace.desc"
      :project-url="projects.ace.url"
    />
    <portfolio-card
      :project-title="projects.ace.title"
      :project-desc="projects.ace.desc"
      :project-url="projects.ace.url"
    />
    <portfolio-card
      :project-title="projects.ace.title"
      :project-desc="projects.ace.desc"
      :project-url="projects.ace.url"
    />
    <portfolio-card
      :project-title="projects.ace.title"
      :project-desc="projects.ace.desc"
      :project-url="projects.ace.url"
    />
    <portfolio-card
      :project-title="projects.ace.title"
      :project-desc="projects.ace.desc"
      :project-url="projects.ace.url"
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
    siteLanguage: String,
  },
  data() {
    return {
      projects: {
        ace: {
          title: 'ACE English Malta',
          desc: 'Redesign the ACE English Malta’s site, English School based in Malta',
          url: '/about',
        } 
      }
      
    }
  },
  
  
}
</script>
