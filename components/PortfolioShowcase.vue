<template>
  <div class="portfolio__showcase pt-5 pb-3">
    <portfolio-card
      v-if="hideProject != 'ace'"
      :project-title="projects.ace.title"
      :project-desc="siteLanguage === 'pt-br' ? 
        projects.ace.desc.pt : projects.ace.desc.en"
      :project-url="projects.ace.url"
      :projectImgUrl="projects.ace.imageUrl"
      :projectImgAlt="projects.ace.imageAlt"
      :class="projects.ace.background"
    />
    <portfolio-card
      v-if="hideProject != 'time-to-place'"
      :project-title="projects.timeToPlace.title"
      :project-desc="siteLanguage === 'pt-br' ? 
        projects.timeToPlace.desc.pt : projects.timeToPlace.desc.en"
      :project-url="projects.timeToPlace.url"
      :class="projects.timeToPlace.background"
    />
    <portfolio-card
      v-if="hideProject != 'carousel'"
      :project-title="projects.carouselAd.title"
      :project-desc="siteLanguage === 'pt-br' ? 
        projects.carouselAd.desc.pt : projects.timeToPlace.desc.en"
      :project-url="projects.carouselAd.url"
      :class="projects.carouselAd.background"
    />
    <portfolio-card
      v-if="hideProject != 'inloco'"
      :project-title="projects.inloco.title"
      :project-desc="siteLanguage === 'pt-br' ? 
        projects.inloco.desc.pt : projects.inloco.desc.en"
      :project-url="projects.inloco.url"
      :class="projects.inloco.background"
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
    siteLanguage: {
      type: String,
      default: 'en',
    },
    hideProject: String,
  },
  data() {
    return {
      projects: {
        ace: {
          title: 'ACE English Malta',
          desc: {
            en: 'Redesign the ACE English Malta’s site, English School based in Malta',
            pt: 'Redesign do site de uma escola de inglês, localizada em St Julians, Malta',
          },
          url: '/ace-english-malta',
          imageUrl: '~/assets/img/portfolio/site-ace-mockup.png',
          imageAlt: 'Mockup of ACE English Malta website redesign',
          background: 'bg--green-dark'
        },
        timeToPlace: {
          title: 'Time to Place',
          desc: {
            en: 'How is it possible to improve the user experience in mobile ads using context elements?',
            pt: 'Como é possível melhorar a experiência em anúncios utilizando elementos contextuais?',
          },
          url: '/about',
          imageUrl: '~/assets/img/portfolio/site-ace-mockup.png',
          imageAlt: 'Mockup of ACE English Malta website redesign',
          background: 'bg--green-light'
        },
        carouselAd: {
          title: 'Carousel Ad',
          desc: {
            en: 'Researching and utilizing data to create a new mobile ad format',
            pt: 'Pesquisando e utilizando dados para criar um novo formato de anúncio digital',
          },
          url: '/about',
          imageUrl: '~/assets/img/portfolio/site-ace-mockup.png',
          imageAlt: 'Mockup of ACE English Malta website redesign',
          background: 'bg--green'
        },
        inloco: {
          title: 'In Loco Media',
          desc: {
            en: 'Redesign the In Loco Media’s site - greatest mobile advertising platform in Brazil',
            pt: 'Redesign do site da In Loco Media, maior rede de anúncios mobile do Brasil',
          },
          url: '/about',
          imageUrl: '~/assets/img/portfolio/site-ace-mockup.png',
          imageAlt: 'Mockup of ACE English Malta website redesign',
          background: 'bg--green-light'
        },
      }
      
    }
  },
  
  
}
</script>
