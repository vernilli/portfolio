<template>
  <transition name="fade" mode="out-in">
    <div :key="currentLocale" class="project-page">
      <div class="project-page__hero desktop-image mb-2 mb-md-4">
        <img 
          :src="require(`~/static/img/portfolio/${$t('projects[1].heroImg')}`)" 
          alt="" 
          class="w-100 h-100"
        >

        <div class="d-none d-md-block text-center">
          <h1 class="project-page__title">
            {{ $t('projects[1].projectTitle') }}
          </h1>
          <span class="project-page__reading-time">
            {{ $t('projects[1].readingTime') }}
          </span>
        </div>
      </div>

      <div class="d-block d-md-none text-center justify-content-center w-100">
        <h1 class="project-page__title">
          {{ $t('projects[1].projectTitle') }}
        </h1>
        <span class="project-page__reading-time">
          {{ $t('projects[1].readingTime') }}
        </span>
      </div>

      <project-page-summary
        :summaryContent="$t('projects[1].summaryContent', { returnObjects: true })"
      />

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
    title: 'Indie Campers',
  },
}
</script>
