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
          <nuxt-link :to="language === 'pt-br' ? '/pt-br' : '/'">
            {{ titleMobile }}
          </nuxt-link>
        </div>
        <div class="header__title d-none d-md-block">
          <nuxt-link :to="language === 'pt-br' ? '/pt-br' : '/'">
            {{ title }}
          </nuxt-link>
        </div>

        <div class="d-flex align-items-center">
          <transition name="fade" mode="out-in">
            <!-- ENGLISH VERSION DESKTOP -->
            <nav 
              v-if="language == 'en'"
              class="header__navigation d-flex"
              :key="language"
            >
              <nuxt-link to="/" class="main-link mr-2 mr-md-0 ml-md-4">
                {{ text.projects.en }}
              </nuxt-link>
              <nuxt-link to="/about" class="main-link mr-2 mr-md-0 ml-md-4">
                {{ text.about.en }}
              </nuxt-link>
            </nav>
            <!-- PORTUGUESE VERSION DESKTOP -->
            <nav 
              v-else
              class="header__navigation d-flex"
              :key="language"
            >
              <nuxt-link to="/pt-br" class="main-link mr-2 mr-md-0 ml-md-4">
                {{ text.projects.pt }}
              </nuxt-link>
              <nuxt-link to="/pt-br/sobre" class="main-link mr-2 mr-md-0 ml-md-4">
                {{ text.about.pt }}
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
      
      <!-- <transition name="fade">
        <nav 
          v-if="burgerOpen && language == 'en'"
          class="header__navigation container d-flex d-md-none flex-column pt-3 pb-4"
          :key="language"
        >
          <nuxt-link to="/" class="d-inline mb-4">
            {{ text.projects.en }}
          </nuxt-link>
          <nuxt-link to="/about" class="d-inline mb-4">
            {{ text.about.en }}
          </nuxt-link>
        </nav>
        <nav 
          v-if="burgerOpen && language == 'pt-br'" 
          class="header__navigation container d-flex d-md-none flex-column pt-3 pb-4"
          :key="language"
        >
          <nuxt-link to="/pt-br" class="d-inline mb-4">
            {{ text.projects.pt }}
          </nuxt-link>
          <nuxt-link to="/pt-br/sobre" class="d-inline mb-4">
            {{ text.about.pt }}
          </nuxt-link>
        </nav>
      </transition> -->

      <div v-if="burgerOpen" class="header__lang-switcher d-flex d-md-none justify-content-center">
        <nuxt-link 
          :to="`${pagePath}`"
          :class="{'active': language === 'en'}"
        >
          {{ languages.english }}
        </nuxt-link>
        <nuxt-link 
          :to="`/pt-br${pagePath}`"
          :class="{'active': language === 'pt-br'}"
        >
          {{ languages.portuguese }}
        </nuxt-link>
      </div>

      <div class="header__lang-switcher d-none d-md-flex">
        <nuxt-link 
          :to="`${pagePath}`"
          :class="{'active': language === 'en'}"
        >
          {{ languages.english }}
        </nuxt-link>
        <nuxt-link 
          :to="`/pt-br${pagePath}`"
          :class="{'active': language === 'pt-br'}"
        >
          {{ languages.portuguese }}
        </nuxt-link>
      </div>

    </header>
  </div>
</template>

<script>
export default {
  name: "app-navbar",
  // props: {
  //   siteLanguage: String,
  // },\
  watch: {
    $route () {
      console.log(this.$route)
      this.language = this.$route.path.includes('pt-br') ? 'pt-br': 'en'
      let isIndex = 
        this.$route.name === 'index' || 
        this.$route.name === 'pt-br'
      let routeName = (this.$route.path).split('/')
      this.pagePath = isIndex ? '/' : `/${routeName.pop()}`
      this.burgerOpen = false
    },
  },
  data() {
    return {
      title: "Victor Vernilli",
      titleMobile: "Vernilli",
      language: "en",
      pagePath: "/",
      languages: {
        english: 'english',
        portuguese: 'português'
      },
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
      topPage: true,
    }
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
