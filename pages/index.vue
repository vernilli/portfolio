<template>
  <div class="container mt-5 pt-5">
    <h1 class="home__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ position }}
    </h1>
    
    <div class="home__greetings">
      <p 
        v-for="(paragraph, index) in greetings" 
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
      position: "Product Designer",
      greetings: [
        "Hello!",
        "I'm a Product Designer who believes that we can people’s life easier, even in the most complex areas. I love history and mankind past and eager to discover new things. ",
        "I'm also a coffee lover. <strong>So, let's take a coffee and talk.</strong>",
        "Here are some projects that I've done or participated, I hope you like it.",
      ],
    }
  },
}
</script>
