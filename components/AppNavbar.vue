<template>
  <div>
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

        <transition name="fade" mode="out-in">
          <div :key="currentLocale" class="d-flex align-items-center">
            <nav class="header__navigation d-flex">
              <nuxt-link 
                :to="localePath('index')" 
                class="main-link mr-2 mr-md-0 ml-md-4"
              >
                {{ $t('projectsCopy') }}
              </nuxt-link>
              <nuxt-link 
                :to="localePath('about')" 
                class="main-link mr-2 mr-md-0 ml-md-4"
              >
                {{ $t('aboutCopy') }}
              </nuxt-link>
            </nav>
          
            <div class="header__lang-switcher d-none d-md-flex position-relative ml-4">
              <div 
                @click="toggleLangOptions"
                class="header__lang-switcher__selector"
              >
                {{ isPtLang ? $t('languages.portuguese') : $t('languages.english') }}
                <arrow-down-icon 
                  :class="{'options-open': langOptionsOpen}"
                  :width="18" :height="18" 
                />
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
            </div>

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
        </transition>

      </div>

      <div v-if="burgerOpen" class="header__lang-switcher d-flex d-md-none justify-content-center mt-4">
        <nuxt-link :to="switchLocalePath('en')">
          {{ $t('languages.english') }}
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('pt-BR')">
          {{ $t('languages.portuguese') }}
        </nuxt-link>
      </div>
      
    </header>

    <div 
      v-if="burgerOpen" 
      @click="hideBurger"
      class="header__fade-background"
    />
  </div>
</template>

<script>
import ArrowDownIcon from '~/assets/icn/icon_arrow_chevron_down.svg'

export default {
  name: "app-navbar",
  components: {
    ArrowDownIcon
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
    window.addEventListener("resize", this.hideBurger)
    window.addEventListener("scroll", this.onScroll)
  },
  
}
</script>
