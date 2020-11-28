<template>
  <div class="container mt-5 pt-5">
    <h1 class="home__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ position.en }}
    </h1>
    <div 
      v-html="greetings.en" 
      class="home__greetings"
    />
    <portfolio-showcase />
  </div>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import PortfolioShowcase from '~/components/PortfolioShowcase.vue'

export default {
  // layout: 'basic',
  props: {
    siteLanguage: String,
  },
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
  data() {
    return {
      position: {
        "en": "Product Designer",
      },
      greetings: {
        "en": "<p>Hello!</p><p>I'm a Product Designer who believes that we can people’s life easier, even in the most complex areas. I love history and mankind past and eager to discover new things. </p><p>I'm also a coffee lover. <strong>So, let's take a coffee and talk.</strong></p><p>Here are some projects that I've done or participated, I hope you like it.</p>",
      },
    }
  },
}
</script>
