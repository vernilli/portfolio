<template>
  <footer class="footer mt-5">
    <div class="container d-flex align-items-center justify-content-between pt-5 pb-5">
      <div 
        v-for="(link, index) in links" 
        :key="index" 
        class="footer__links-container col-12 col-md-4 p-0"
      >
        <a 
          :href="link.link"
          target="_blank"
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
