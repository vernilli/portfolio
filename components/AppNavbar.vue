<template>
  <div>
    <header
      class="header bg-white w-100"
      :class="{'on-top': topPage}"
    >
      <div class="container--expanded d-flex align-items-center justify-content-between">
        <div class="header__title">
          <nuxt-link :to="localePath('index')">
            {{ $t('name') }}
          </nuxt-link>
        </div>

        <transition name="fade" mode="out-in">
          <div :key="currentLocale" class="d-flex align-items-center">
            <nav class="header__navigation d-none d-md-flex">
              <nuxt-link 
                :to="localePath('index')" 
                class="main-link ml-3 ml-md-4"
              >
                {{ $t('projectsCopy') }}
              </nuxt-link>
              <nuxt-link 
                :to="localePath('about')" 
                class="main-link ml-3 ml-md-4"
              >
                {{ $t('aboutCopy') }}
              </nuxt-link>
              <a 
                :href="$t('resumePath')" 
                class="main-link ml-3 ml-md-4"
                target="_blank"
              >
                {{ $t('resumeCopy') }}
              </a>
            </nav>

            <div
              @click="toggleBurger"
              class="p-1"
            >
              <burger-icon :width="32" :height="32" class="vv-icon" />
            </div>

          </div>      
        </transition>

      </div>

      <nav 
        v-if="burgerOpen" 
        class="header__lang-switcher d-flex d-md-none flex-column justify-content-center align-items-center mt-5 w-100"
      >
        <nuxt-link 
          :to="localePath('index')" 
          class="mb-3 d-inline-flex text-center"
        >
          {{ $t('projectsCopy') }}
        </nuxt-link>
        <nuxt-link 
          :to="localePath('about')" 
          class="mb-3 d-inline-flex text-center"
        >
          {{ $t('aboutCopy') }}
        </nuxt-link>
        <a 
          :href="$t('resumePath')" 
          class="mb-3 d-inline-flex text-center"
          target="_blank"
        >
          {{ $t('resumeCopy') }}
        </a>
      </nav>
      
    </header>

    <div 
      v-if="burgerOpen" 
      @click="hideBurger"
      class="header__fade-background"
    />
  </div>
</template>

<script>
import BurgerIcon from '~/assets/icn/icon_burger.svg'

export default {
  name: 'app-navbar',
  components: {
    BurgerIcon
  },
  watch: {
    $route () {
      this.langOptionsOpen = false
      this.burgerOpen = false
    },
  },
  data() {
    return {
      langOptionsOpen: false,
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
    isPtLang () {
      return this.$route.path.includes('/pt-BR')
    },
  },
  methods: {
    toggleLangOptions: function () {
      this.langOptionsOpen = !this.langOptionsOpen
    },
    hideLangOptions: function() {
      this.langOptionsOpen = false
    },
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
    window.addEventListener('resize', this.hideBurger)
    window.addEventListener('scroll', this.onScroll)
  },
  
}
</script>
