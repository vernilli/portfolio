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
            <nav class="header__navigation d-flex">
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
            </nav>
          
            <!-- <div class="header__lang-switcher d-none d-md-flex position-relative ml-4">
              <div 
                @click="toggleLangOptions"
                class="header__lang-switcher__selector"
              >
                <language-icon :width="24" :height="24" />
                {{ isPtLang ? $t('languages.portuguese') : $t('languages.english') }}
              </div>

              <transition name="fade-up">
                <div
                  v-if="langOptionsOpen"
                  class="header__lang-switcher__selector-options"
                >
                  <nuxt-link v-if="isPtLang" :to="switchLocalePath('en')">
                    {{ $t('languages.english') }}
                  </nuxt-link>
                  <nuxt-link v-else :to="switchLocalePath('pt-BR')">
                    {{ $t('languages.portuguese') }}
                  </nuxt-link>
                </div>
              </transition>
            </div> -->

            <!-- <div 
              id="burger-icon"
              class="d-block d-md-none"
              :class="{'open': burgerOpen}"
              @click="toggleBurger"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div> -->

          </div>      
        </transition>

      </div>

      <!-- <div v-if="burgerOpen" class="header__lang-switcher d-flex d-md-none justify-content-center mt-4">
        <nuxt-link :to="switchLocalePath('en')">
          {{ $t('languages.english') }}
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('pt-BR')">
          {{ $t('languages.portuguese') }}
        </nuxt-link>
      </div> -->
      
    </header>

    <!-- <div 
      v-if="burgerOpen" 
      @click="hideBurger"
      class="header__fade-background"
    /> -->
  </div>
</template>

<script>
// import LanguageIcon from '~/assets/icn/icon_language.svg'

export default {
  name: 'app-navbar',
  components: {
    // LanguageIcon
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
