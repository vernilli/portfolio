<template>
  <div :class="{'header--burger-opened': isBurgerOpen}">
    <header class="header bg-white w-100">
      <div class="container d-flex align-items-center justify-content-between pt-2 pt-md-4 pb-2 pb-md-4">
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
      
      <transition name="fade">
        <nav v-if="isBurgerOpen" class="header__navigation container d-flex d-lg-none flex-column pt-3 pb-4">
          <nuxt-link to="/" class="d-inline mb-4">
            {{ text.projects.en }}
          </nuxt-link>
          <nuxt-link to="/about" class="d-inline mb-4">
            {{ text.about.en }}
          </nuxt-link>
        </nav>
      </transition>

    </header>
  </div>
</template>

<script>
export default {
  name: "app-navbar",
  props: {
    siteLanguage: String,
  },
  data() {
    return {
      title: "Victor Vernilli",
      text: {
        projects: {
          "en": "projects",
          "pt": "projetos",
        },
        about: {
          "en": "about me",
          "pt": "sobre mim",
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
    hideBurger: function () {
      this.burgerOpen = false
    },
  },
  watch: {
    $route () {
      console.log(this.$route)
      this.hideBurger
    },
  },
}
</script>
