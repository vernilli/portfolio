<template>
  <footer class="footer mt-5">
    <div class="container d-flex flex-wrap align-items-center justify-content-between">
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
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  data() {
    return {
      links: [
        {
          text: "victorvernilli[at]gmail[dot]com",
          link: "mailto:victorvernilli@gmail.com",
        },{
          text: "linkedin",
          link: "https://www.linkedin.com/in/vernilli/",
        },{
          text: "medium",
          link: "https://medium.com/@vernilli",
        },
      ],
      burgerOpen: false,
    }
  },
  
}
</script>
