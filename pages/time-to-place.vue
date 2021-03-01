<template>
  <transition name="fade" mode="out-in">
    <div :key="currentLocale" class="project-page">
      <div class="project-page__hero mobile-image mb-4">
        <img :src="require(`~/static/img/portfolio/${$t('projects[1].heroImg')}`)" alt="" class="w-100 h-100">
        <h1 class="project-page__title text-center">
          {{ $t('projects[1].projectTitle') }}
        </h1>
      </div>

      <main>
        <project-page-nav 
          :anchors="itemsPageNav"
          :activeItem="visibleItemNav"
        />

        <project-page-main
          :content="$t('projects[1].projectContent', { returnObjects: true })"
          @heading-visible-id="activeItemChanged"
        />
      </main>

      <div class="project-page__other-projects container">
        <h2 class="text-center">
          {{ $t('otherProjectsCopy') }}
        </h2>
        <portfolio-showcase :hideProject="$t('projects[1].permalink')" />
      </div>
      
    </div>
  </transition>
</template>

<script>
import VvButton from '~/components/VvButton.vue'
import ProjectPageNav from '~/components/ProjectPageNav.vue'
import ProjectPageMain from '~/components/ProjectPageMain.vue'
import PortfolioShowcase from '~/components/PortfolioShowcase.vue'

export default {
  // layout: 'basic',
  components: {
    VvButton,
    ProjectPageNav,
    ProjectPageMain,
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
      return this.$i18n.messages[this.$i18n.locale].projects[1].projectContent
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
    this.visibleItemNav = this.$i18n.messages[this.$i18n.locale].projects[1].visibleItemNav
  },
  head: {
    title: 'Portfolio',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Improve people’s experience on mobile ads, using context elements from around them. Generating an improve in interest and performance, in addition to decrease the dislike for ads.'
      },{
        hid: 'keywords',
        name: 'keywords',
        content: 'time to place, context ads, mobile, mobile ad, ux mobile, ux advertising'
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
        content: 'Time to Place | Victor Vernilli'
      },{
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Victor Vernilli | Product Designer'
      },{
        hid: 'og:og:description',
        property: 'og:og:description',
        content: 'Improve people’s experience on mobile ads, using context elements from around them. Generating an improve in interest and performance, in addition to decrease the dislike for ads.'
      },{
        hid: 'og:image',
        property: 'og:image',
        content: '~/static/img/portfolio/time-to-place/time-to-place-thumbnail.jpg'
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
        content: 'Time to Place | Victor Vernilli'
      },{
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '~/static/img/portfolio/time-to-place/time-to-place-thumbnail.jpg'
      },{
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Improve people’s experience on mobile ads, using context elements from around them. Generating an improve in interest and performance, in addition to decrease the dislike for ads.'
      }
    ],
  },
}
</script>
