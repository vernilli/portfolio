<template>
  <footer class="footer mt-5">
    <div class="container d-flex flex-wrap align-items-center justify-content-between">

      <div class="w-100 d-flex flex-wrap align-items-center justify-content-between">
        <div 
          v-for="(link, index) in links" 
          :key="index" 
          class="footer__links-container col-12 col-md-4"
        >
          <a 
            :href="link.link"
            target="_blank"
            class="main-link"
          >
            {{ link.text }}
          </a>
        </div>
      </div>

      <div class="footer__links-container col-12 text-center">
        <!-- <a 
          :href="email.link"
          target="_blank"
          class="main-link"
        > -->
          {{ development.text }}
        <!-- </a> -->
      </div>
      
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    return {
      links: [
        {
          text: 'linkedin',
          link: 'https://www.linkedin.com/in/vernilli/',
        },{
          text: 'victor[dot]vernilli[at]gmail[dot]com',
          link: 'mailto:victor.vernilli@gmail.com',
        //   text: 'medium',
        //   link: 'https://medium.com/@vernilli',
        },{
          text: 'github',
          link: 'https://github.com/vernilli',
        },
      ],
      development: {
        text: 'coded by me with VUE.js & NUXT',
        // link: 'mailto:victor.vernilli@gmail.com',
      },
      burgerOpen: false,
    }
  },
  
}
</script>
