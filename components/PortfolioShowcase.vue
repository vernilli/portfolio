<template>
  <div class="portfolio__showcase pt-5 pb-3">
    <portfolio-card
      v-if="hideProject != 'ace'"
      :project-url="projects.ace.url"
      :project-title="$t('showcase.ace.title')"
      :project-desc="$t('showcase.ace.desc')"
      :projectImgAlt="$t('showcase.ace.imageAlt')"
      :projectImgUrl="projects.ace.imageUrl"
      :class="[
        projects.ace.background,
        projects.ace.device,
      ]"
    />
    <portfolio-card
      v-if="hideProject != 'time-to-place'"
      :project-url="projects.timeToPlace.url"
      :project-title="$t('showcase.time_to_place.title')"
      :project-desc="$t('showcase.time_to_place.desc')"
      :projectImgAlt="$t('showcase.time_to_place.imageAlt')"
      :projectImgUrl="projects.timeToPlace.imageUrl"
      :class="[
        projects.timeToPlace.background,
        projects.timeToPlace.device,
      ]"
    />
    <portfolio-card
      v-if="hideProject != 'carousel'"
      :project-url="projects.carouselAd.url"
      :project-title="$t('showcase.carousel_ad.title')"
      :project-desc="$t('showcase.carousel_ad.desc')"
      :projectImgAlt="$t('showcase.carousel_ad.imageAlt')"
      :projectImgUrl="projects.carouselAd.imageUrl"
      :class="[
        projects.carouselAd.background,
        projects.carouselAd.device,
      ]"
    />
    <portfolio-card
      v-if="hideProject != 'inloco'"
      :project-url="projects.inloco.url"
      :project-title="$t('showcase.inloco.title')"
      :project-desc="$t('showcase.inloco.desc')"
      :projectImgAlt="$t('showcase.inloco.imageAlt')"
      :projectImgUrl="projects.inloco.imageUrl"
      :class="[
        projects.inloco.background,
        projects.inloco.device,
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
  data() {
    return {
      projects: {
        ace: {
          url: '/ace-english-malta',
          imageUrl: '/img/portfolio/mockup-site-ace.png',
          background: 'bg--green-dark',
          device: 'desktop'
        },
        timeToPlace: {
          url: '/time-to-place',
          imageUrl: '/img/portfolio/mockup-time-to-place.png',
          background: 'bg--green-light',
          device: 'mobile'
        },
        carouselAd: {
          url: '/carousel-ad',
          imageUrl: '/img/portfolio/mockup-carousel-ad.png',
          background: 'bg--green',
          device: 'mobile'
        },
        inloco: {
          url: '/inlocomedia',
          imageUrl: '/img/portfolio/mockup-site-inlocomedia.png',
          background: 'bg--green-light',
          device: 'desktop'
        },
      }
    }
  },
  
  
}
</script>
