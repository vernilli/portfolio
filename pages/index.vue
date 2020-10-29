<template>
  <div class="container mt-5 pt-5">
    <h1 class="text-center">{{ position.en }}</h1>
    <p>{{ greetings.en }}</p>
  </div>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  // layout: 'basic',
  props: {
    siteLanguage: String,
  },
  components: {

  },
  data() {
    return {
      position: {
        "en": "Product Designer",
        "pt": "Designer de Produto",
      },
      greetings: {
        "en": "Hello! <br>I'm a Product Designer who believes that we can people’s life easier, even in the most complex areas. I love history and mankind past and eager to discover new things. I'm also a coffee lover. <strong>So, let's take a coffee and talk.</strong><br><br>Here are some projects that I've done or participated, I hope you like it.",
        "pt": "Olá! <br>Sou Product Designer e acredito que nós podemos fazer a experiência das pessoas mais fácil, mesmo nas mais complexas áreas. Amo história e sobre nosso passado, adoro aprender e descobrir coisas novas.<br>Também sou um amante de café.<strong> Que tal uma conversa com uma xícara de café?</strong><br><br>Aqui estão alguns projetos que fiz ou participei, espero que goste.",
      },
    }
  },
}
</script>
