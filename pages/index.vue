<template>
  <transition name="fade" mode="out-in">
    <div :key="currentLocale" class="container mt-5 pt-5">
      <h1 class="home__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
        {{ $t('positionCopy') }}
      </h1>
    
      <div class="home__greetings">
        <p 
          v-for="(paragraph, index) in $t('greetingsCopy', { returnObjects: true })" 
          :key="index"
          v-html="paragraph"
        />
      </div>

      <portfolio-showcase />
    </div>
  </transition>
</template>

<script>
import PortfolioShowcase from '~/components/PortfolioShowcase.vue'

export default {
  components: {
    PortfolioShowcase,
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
  },
  head: {
    title: 'Portfolio',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'My name is Victor Vernilli and I’m a Product Designer. Here are some projects that I did or participated, I hope you like it. I work with UX designer and front-end developer.'
      },{
        hid: 'keywords',
        name: 'keywords',
        content: 'victor vernilli, design portfolio, product designer, ux portfolio, mobile portfolio, ux mobile, ux designer, user-centered design, time to place, carousel ad, context ads'
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
        content: 'Portfolio | Victor Vernilli'
      },{
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Victor Vernilli | Product Designer'
      },{
        hid: 'og:og:description',
        property: 'og:og:description',
        content: 'I’m a Product Designer. Here are some projects that I did or participated, I hope you like it. I work with UX design and front-end development.'
      },{
        hid: 'og:image',
        property: 'og:image',
        content: '~/static/img/TDC17.jpg'
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
        content: 'Portfolio | Victor Vernilli'
      },{
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '~/static/img/TDC17.jpg'
      },{
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'I’m a Product Designer. Here are some projects that I did or participated, I hope you like it. I work with UX design and front-end development.'
      }
    ],
  },
}
</script>