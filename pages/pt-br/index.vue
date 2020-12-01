<template>
  <div class="container mt-5 pt-5">
    <h1 class="home__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ position }}
    </h1>
    
    <div class="home__greetings">
      <p 
        v-for="(paragraph, index) in greetings" 
        :key="index"
        v-html="paragraph"
      />
    </div>
    
    <portfolio-showcase :siteLanguage="'pt-br'" />
  </div>
</template>

<script>
import PortfolioShowcase from '~/components/PortfolioShowcase.vue'

export default {
  // layout: 'basic',
  props: {
    siteLanguage: String,
  },
  components: {
    PortfolioShowcase,
  },
  data() {
    return {
      position: "Designer de Produto",
      greetings: [
        "Olá!",
        "Sou Product Designer e acredito que nós podemos fazer a experiência das pessoas mais fácil, mesmo nas mais complexas áreas. Amo história e sobre nosso passado, adoro aprender e descobrir coisas novas.",
        "Também sou um amante de café.<strong> Que tal uma conversa com uma xícara de café?</strong>",
        "Aqui estão alguns projetos que fiz ou participei, espero que goste.",
      ],
    }
  },
}
</script>
