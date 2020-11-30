<template>
  <div class="container mt-5 pt-5">
    <h1 class="home__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ position.pt }}
    </h1>
    <div 
      v-html="greetings.pt" 
      class="home__greetings"
    />
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
      position: {
        "pt": "Designer de Produto",
      },
      greetings: {
        "pt": "<p>Olá!</p><p>Sou Product Designer e acredito que nós podemos fazer a experiência das pessoas mais fácil, mesmo nas mais complexas áreas. Amo história e sobre nosso passado, adoro aprender e descobrir coisas novas.</p><p>Também sou um amante de café.<strong> Que tal uma conversa com uma xícara de café?</strong></p><p>Aqui estão alguns projetos que fiz ou participei, espero que goste.</p>",
      },
    }
  },
}
</script>
