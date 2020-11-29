<template>
  <div :class="{'header--burger-opened': burgerOpen}">
    <header class="header bg-white w-100">
      <div class="container d-flex align-items-center justify-content-between pt-2 pt-md-4 pb-2 pb-md-4">
        <div class="header__title">
          <nuxt-link to="/">
            {{ title }}
          </nuxt-link>
        </div>

        <transition name="fade" mode="out-in">
          <!-- ENGLISH VERSION DESKTOP -->
          <nav 
            v-if="language == 'en'"
            class="header__navigation d-none d-lg-flex"
            :key="language"
          >
            <nuxt-link to="/" class="main-link ml-md-4">
              {{ text.projects.en }}
            </nuxt-link>
            <nuxt-link to="/about" class="main-link ml-md-4">
              {{ text.about.en }}
            </nuxt-link>
          </nav>
          <!-- PORTUGUESE VERSION DESKTOP -->
          <nav 
            v-else
            class="header__navigation d-none d-lg-flex"
            :key="language"
          >
            <nuxt-link to="/pt-br" class="main-link ml-md-4">
              {{ text.projects.pt }}
            </nuxt-link>
            <nuxt-link to="/pt-br/sobre" class="main-link ml-md-4">
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
      
      <transition name="fade">
        <!-- ENGLISH VERSION MOBILE -->
        <nav 
          v-if="burgerOpen && language == 'en'"
          class="header__navigation container d-flex d-lg-none flex-column pt-3 pb-4"
          :key="language"
        >
          <nuxt-link to="/" class="d-inline mb-4">
            {{ text.projects.en }}
          </nuxt-link>
          <nuxt-link to="/about" class="d-inline mb-4">
            {{ text.about.en }}
          </nuxt-link>
        </nav>
        <!-- PORTUGUESE VERSION MOBILE -->
        <nav 
          v-if="burgerOpen && language == 'pt-br'" 
          class="header__navigation container d-flex d-lg-none flex-column pt-3 pb-4"
          :key="language"
        >
          <nuxt-link to="/pt-br" class="d-inline mb-4">
            {{ text.projects.pt }}
          </nuxt-link>
          <nuxt-link to="/pt-br/sobre" class="d-inline mb-4">
            {{ text.about.pt }}
          </nuxt-link>
        </nav>
      </transition>

    </header>
  </div>
</template>

<script>
export default {
  name: "app-navbar",
  // props: {
  //   siteLanguage: String,
  // },
  watch: {
    $route () {
      // console.log(this.$route)
      this.language = this.$route.path.includes('pt-br') ? 'pt-br': 'en'
      this.burgerOpen = false
    },
  },
  data() {
    return {
      title: "Victor Vernilli",
      language: "en",
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
  methods: {
    toggleBurger: function () {
      this.burgerOpen = !this.burgerOpen
    },
  },
  mounted() {
    window.addEventListener('resize', function(){
      this.burgerOpen = false
    })
  },
  
}
</script>
