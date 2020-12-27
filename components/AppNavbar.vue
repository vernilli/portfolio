<template>
  <div 
    :class="{'header--burger-opened': burgerOpen}"
  >
    <header
      class="header bg-white w-100"
      :class="{'on-top': topPage}"
    >
      <div class="container d-flex align-items-center justify-content-between">
        <div class="header__title d-block d-md-none">
          <nuxt-link :to="localePath('index')">
            {{ $t('nameMobile') }}
          </nuxt-link>
        </div>
        <div class="header__title d-none d-md-block">
          <nuxt-link :to="localePath('index')">
            {{ $t('name') }}
          </nuxt-link>
        </div>

        <div class="d-flex align-items-center">
          <transition name="fade" mode="out-in">
            <nav 
              class="header__navigation d-flex"
              :key="currentLocale"
            >
              <nuxt-link 
                :to="localePath('index')" 
                class="main-link mr-2 mr-md-0 ml-md-4"
              >
                {{ $t('projects') }}
              </nuxt-link>
              <nuxt-link 
                :to="localePath('about')" 
                class="main-link mr-2 mr-md-0 ml-md-4"
              >
                {{ $t('about') }}
              </nuxt-link>
            </nav>
          </transition>

          <div 
            id="burger-icon"
            class="d-block d-md-none"
            :class="{'open': burgerOpen}"
            @click="toggleBurger"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div v-if="burgerOpen" class="header__lang-switcher d-flex d-md-none justify-content-center">
        <nuxt-link :to="switchLocalePath('en')">
          {{ $t('languages.english') }}
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('pt-BR')">
          {{ $t('languages.portuguese') }}
        </nuxt-link>
      </div>

      <div class="header__lang-switcher d-none d-md-flex">
        <nuxt-link :to="switchLocalePath('en')">
          {{ $t('languages.english') }}
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('pt-BR')">
          {{ $t('languages.portuguese') }}
        </nuxt-link>
      </div>

    </header>
  </div>
</template>

<script>
export default {
  name: "app-navbar",
  watch: {
    $route () {
      this.burgerOpen = false
    },
  },
  data() {
    return {
      burgerOpen: false,
      topPage: true,
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    currentLocale () {
      return this.$i18n.locale
    },
  },
  methods: {
    toggleBurger: function () {
      this.burgerOpen = !this.burgerOpen
    },
    hideBurger: function() {
      this.burgerOpen = false
    },
    onScroll: function(e) {
      var windowTop = window.top.scrollY
      if (windowTop >= 150) {
        this.topPage = false
      } else {
        this.topPage = true
      }
    },
  },
  mounted() {
    this.topPage = true
    window.addEventListener("resize", this.hideBurger)
    window.addEventListener("scroll", this.onScroll)
  },
  
}
</script>
