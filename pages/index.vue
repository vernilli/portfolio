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
    currentLocale () {
      return this.$i18n.locale
    },
  },
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  },
}
</script>
