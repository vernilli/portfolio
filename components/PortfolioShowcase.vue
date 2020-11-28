<template>
  <div class="portfolio__showcase pt-5 pb-3">
    <portfolio-card
      :project-title="projects.ace.title"
      :project-desc="projects.ace.desc"
      :project-url="projects.ace.url"
      :projectImgUrl="projects.ace.imageUrl"
      :projectImgAlt="projects.ace.imageAlt"
      :class="projects.ace.background"
    />
    <portfolio-card
      :project-title="projects.timeToPlace.title"
      :project-desc="projects.timeToPlace.desc"
      :project-url="projects.timeToPlace.url"
      :class="projects.timeToPlace.background"
    />
    <portfolio-card
      :project-title="projects.carouselAd.title"
      :project-desc="projects.carouselAd.desc"
      :project-url="projects.carouselAd.url"
      :class="projects.carouselAd.background"
    />
    <portfolio-card
      :project-title="projects.inloco.title"
      :project-desc="projects.inloco.desc"
      :project-url="projects.inloco.url"
      :class="projects.inloco.background"
    />
    <!-- <portfolio-card
      :project-title="projects.ace.title"
      :project-desc="projects.ace.desc"
      project-url="/pt-br"
      :class="projects.ace.background"
    /> -->
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
          imageUrl: 'img/portfolio/site-ace-mockup.png',
          imageAlt: 'Mockup of ACE English Malta website redesign',
          background: 'bg--green-dark'
        },
        timeToPlace: {
          title: 'Time to Place',
          desc: 'How is it possible to improve the user experience in mobile ads using context elements?',
          url: '/about',
          background: 'bg--green-light'
        },
        carouselAd: {
          title: 'Carousel Ad',
          desc: 'Researching and utilizing data to create a new mobile ad format',
          url: '/about',
          background: 'bg--green'
        },
        inloco: {
          title: 'In Loco Media',
          desc: 'Redesign the In Loco Media’s site - greatest mobile advertising platform in Brazil',
          url: '/about',
          background: 'bg--green-light'
        },
      }
      
    }
  },
  
  
}
</script>
