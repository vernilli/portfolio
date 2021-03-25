<template>
  <transition name="fade" mode="out-in">
    <div :key="currentLocale" class="project-page">
      <div class="project-page__hero mobile-image mb-4">
        <img 
          :src="require(`~/static/img/portfolio/${$t('projects[2].heroImg')}`)" 
          alt="" 
          class="w-100 h-100"
        >

        <div class="d-none d-md-block text-center">
          <h1 class="project-page__title">
            {{ $t('projects[2].projectTitle') }}
          </h1>
          <span class="project-page__reading-time">
            {{ $t('projects[2].readingTime') }}
          </span>
        </div>
      </div>

      <div class="d-block d-md-none text-center justify-content-center w-100">
        <h1 class="project-page__title">
          {{ $t('projects[2].projectTitle') }}
        </h1>
        <span class="project-page__reading-time">
          {{ $t('projects[2].readingTime') }}
        </span>
      </div>

      <project-page-summary
        :summaryContent="$t('projects[2].summaryContent', { returnObjects: true })"
      />

      <main>
        <project-page-nav 
          :anchors="itemsPageNav"
          :activeItem="visibleItemNav"
        />

        <project-page-main
          :content="$t('projects[2].projectContent', { returnObjects: true })"
          @heading-visible-id="activeItemChanged"
        />
      </main>

      <div class="project-page__other-projects container">
        <h2 class="text-center">
          {{ $t('otherProjectsCopy') }}
        </h2>
        <portfolio-showcase :hideProject="$t('projects[2].permalink')" />
      </div>
      
    </div>
  </transition>
</template>

<script>
import VvButton from '~/components/VvButton.vue'
import ProjectPageNav from '~/components/ProjectPageNav.vue'
import ProjectPageMain from '~/components/ProjectPageMain.vue'
import ProjectPageSummary from '~/components/ProjectPageSummary.vue'
import PortfolioShowcase from '~/components/PortfolioShowcase.vue'

export default {
  components: {
    VvButton,
    ProjectPageNav,
    ProjectPageMain,
    ProjectPageSummary,
    PortfolioShowcase,
  },
  props: {
    visibleItemNav: String,
  },
  computed: {
    currentLocale () {
      return this.$i18n.locale
    },
    pageContent: function() {
      return this.$i18n.messages[this.$i18n.locale].projects[2].projectContent
    },
    itemsPageNav: function() {
      let ids = []
      for(let i = 0; i < this.pageContent.length ; i++) {
        if(this.pageContent[i].id) {
          let item = {
            id: this.pageContent[i].id,
            heading: this.pageContent[i].heading,
          }
          ids.push(item)
        }

        if(this.pageContent[i].subsections) {
          for(let j = 0; j < this.pageContent[i].subsections.length ; j++) {
            if(this.pageContent[i].subsections[j].id) {
              let item = {
                id: this.pageContent[i].subsections[j].id,
                heading: this.pageContent[i].subsections[j].heading,
                subsection: true,
              }
              ids.push(item)
            }
          }
        }
      }
      return ids
    }
  },
  methods: {
    activeItemChanged: function(el) {
      this.visibleItemNav = el
    },
  },
  mounted() {
    this.visibleItemNav = this.$i18n.messages[this.$i18n.locale].projects[2].visibleItemNav
  },
  head: {
    title: 'Carousel Ad',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '3 min read — How was the process to create a new ad format for greatest mobile advertising platform in Brazil.'
      },{
        hid: 'keywords',
        name: 'keywords',
        content: 'carousel ad, victor vernilli, ux mobile, ux designer, user-centered design'
      },{
        hid: 'author',
        name: 'author',
        content: 'Victor Vernilli'
      },
      // Facebook metadata
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_US'
      },{
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vernilli.com'
      },{
        hid: 'og:title',
        property: 'og:title',
        content: 'Carousel Ad | Victor Vernilli'
      },{
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Victor Vernilli | Product Designer'
      },{
        hid: 'og:og:description',
        property: 'og:og:description',
        content: '3 min read — How was the process to create a new ad format for greatest mobile advertising platform in Brazil.'
      },{
        hid: 'og:image',
        property: 'og:image',
        content: '~/static/img/portfolio/carousel-ad/carousel-ad-thumbnail.jpg'
      },{
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/jpeg'
      },{
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200'
      },{
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '628'
      },{
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      // Twitter metadata
      { 
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },{ 
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Carousel Ad | Victor Vernilli'
      },{
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '~/static/img/portfolio/carousel-ad/carousel-ad-thumbnail.jpg'
      },{
        hid: 'twitter:description',
        name: 'twitter:description',
        content: '3 min read — How was the process to create a new ad format for greatest mobile advertising platform in Brazil.'
      }
    ],
  },
}
</script>
