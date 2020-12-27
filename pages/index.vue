<template>
  <div class="container mt-5 pt-5">
    <h1 class="home__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ $t('position') }}
    </h1>
    
    <div class="home__greetings">
      <p 
        v-for="(paragraph, index) in $t('greetings', { returnObjects: true })" 
        :key="index"
        v-html="paragraph"
      />
    </div>

    <portfolio-showcase />
  </div>
</template>

<script>
import PortfolioShowcase from '~/components/PortfolioShowcase.vue'

export default {
  components: {
    PortfolioShowcase,
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
