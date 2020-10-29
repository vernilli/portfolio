<template>
  <header class="header w-100">
    <div class="container d-flex align-items-center justify-content-between pt-md-4 pb-md-4">
      <div class="header__title">
        <nuxt-link to="/">
          {{ title }}
        </nuxt-link>
      </div>

      <nav class="header__navigation d-none d-lg-flex">
        <nuxt-link to="/" class="ml-md-4">
          {{ text.projects.en }}
        </nuxt-link>
        <nuxt-link to="/about" class="ml-md-4">
          {{ text.about.en }}
        </nuxt-link>
      </nav>

      <div 
        id="burger-icon"
        class="d-block d-md-none"
        @click="toggleBurger"
        :class="{'open': isBurgerOpen}"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'app-navbar',
  props: {
    siteLanguage: String,
  },
  data() {
    return {
      title: 'Victor Vernilli',
      text: {
        projects: {
          'en': 'projects',
          'pt': 'projetos',
        },
        about: {
          'en': 'about me',
          'pt': 'sobre mim',
        }
      },
      burgerOpen: false,
    }
  },
  computed: {
    isBurgerOpen: function () {
      return this.burgerOpen
    },
  },
  methods: {
    toggleBurger: function () {
      this.burgerOpen = !this.burgerOpen
    },
  }
}
</script>
