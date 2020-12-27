<template>
  <div class="project-page">
    <div class="project-page__hero mb-4">
      <img src="~/static/img/portfolio/ace-english-malta/ace-english-malta-header.jpg" alt="" class="w-100 h-100">
      <h1 class="project-page__title text-center">
        {{ $t('pages.ace.project_title') }}
      </h1>
    </div>

    <main>
      <project-page-nav 
        :anchors="itemsPageNav"
        :activeItem="$t('pages.ace.visible_item_nav')"
      />

      <project-page-main
        :content="$t('pages.ace.project_content', { returnObjects: true })"
        @heading-visible-id="activeItemChanged"
      />
    </main>

    <div class="project-page__other-projects container">
      <h2 class="text-center">
        {{ $t('other_projects') }}
      </h2>
      <portfolio-showcase :hideProject="'ace'" />
    </div>
    
  </div>
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
  computed: {
    pageContent: function() {
      return this.$i18n.messages[this.$i18n.locale].pages.ace.project_content
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
}
</script>
