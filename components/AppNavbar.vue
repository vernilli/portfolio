<template>
  <header class="header w-100">
    <div class="container d-flex">
      <div class="header__title">
        <nuxt-link to="/">
          {{ title }}
        </nuxt-link>
      </div>

      <nav>
        <div>
          {{ text.projects.en }}
        </div>
        <div>
          {{ text.about.en }}
        </div>
      </nav>
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
          'en': 'Projects',
          'pt': 'Projetos',
        },
        about: {
          'en': 'About me',
          'pt': 'Sobre mim',
        }
      },
    }
  },
}
</script>
