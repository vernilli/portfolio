<template>
  <div class="container mt-5 pt-5">
    <h1 class="about__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ position }}
    </h1>

    <div class="d-flex flex-wrap flex-column flex-md-row align-items-md-center mb-3">
      <div class="about__greetings col-12 col-md-8 pl-0">
        <p class="mb-md-0">{{ greetings }}</p>
      </div>
      <div class="about__profile-picture position-relative col-12 col-md-4 pr-md-0">
        <img 
          src="~/assets/img/victor-vernilli.jpg"
          :alt="altImg"
        >
      </div>
    </div>

    <div>
      <p 
        v-for="(paragraph, index) in background" 
        :key="index"
        v-html="paragraph"
      />
    </div>

    <div class="d-flex justify-content-center">
      <vv-button :text="buttonText" :path="buttonPath">
        <template v-slot:iconAfter>
          <file-icon />
        </template>
      </vv-button>
    </div>

    <div>
      <h2 class="mt-5 mb-4">{{ experience }}</h2>
      <career-list :list="experienceList" />

      <h2 class="mt-5 mb-4">{{ presentation }}</h2>
      <career-list :list="presentationList" />

      <h2 class="mt-5 mb-4">{{ education }}</h2>
      <career-list :list="educationList" />

    </div>
    
  </div>
</template>

<script>
import CareerList from '~/components/CareerList.vue'
import VvButton from '~/components/VvButton.vue'
import FileIcon from '~/assets/icn/icon_file.svg'

export default {
  // layout: 'default',
  components: {
    CareerList,
    VvButton,
    FileIcon,
  },
  data() {
    return {
      position: "Designer de Produto",
      altImg: "Foto de Victor Vernilli",
      greetings: "Meu nome é Victor Vernilli e sou um Product Designer. Sou formado em ciência da computação pela UFPE, no Centro de Informática. Apesar de uma formação muito mais técnica, foi da área de UX que mais gostei, desde a primeira que conheci na universidade.",
      background: [
        "O conceito de pensar, se importar e tentar trazer a melhor experiência aos clientes/usuários de um produto ou serviço me chamou muita atenção. Eu adicionava essa etapa, sempre que possível, em todos os projetos que participei durante da universidade.",
        "Acredito que podemos melhorar a experiência das pessoas em qualquer área, mesmo que ela seja muito rejeitada ou odiada. Muitas das vezes essa rejeição pode ser causada porque ninguém pensou nos usuários ao projetar esse produto/serviço. Essa mentalidade veio do tempo que trabalhei com anúncios digitais, também conhecidos no mercado como ads.",
        "Melhorar o uso de um produto/serviço nem sempre é fácil, muitas das vezes nós não temos acesso aos usuários de maneira simples ou se perguntarmos para eles testarem algo, poderemos estar tendenciando os resultados. Foi isso que aprendi com ads: como você pede pra um usuário “testar” um anúncio?",
        "Bastante complicado, mas acredito que sempre existe uma maneira de incluir o usuário durante o processo, não importa a dificuldade. Utilizando várias ferramentas, como testes qualitativos ou quantitativos, testes A/B, análise de Big Data, entre outros.",
      ],
      buttonText: "Veja mais meu CV",
      buttonPath: "/assets/presentations/2017_TDC_ISA.pdf",
      experience: "Experiência",
      experienceList: [
        {
          title: "Designer de Produto",
          company: "Indie Campers",
          companyUrl: "https://indiecampers.com/",
          period: "Nov 2019 - Atual",
          location: "Lisboa - Portugal",
          locationFlag: "🇵🇹",
        },{
          title: "UX Designer / Web Developer",
          company: "ACE English Malta",
          companyUrl: "https://www.aceenglishmalta.com/",
          period: "Jun 2018 - Nov 2019",
          location: "St Julians - Malta",
          locationFlag: "🇲🇹",
        },{
          title: "UX Engineer",
          company: "In Loco Media",
          companyUrl: "https://www.inlocomedia.com/",
          period: "Jan 2017 - Dez 2017",
          location: "Recife - Brasil",
          locationFlag: "🇧🇷",
        },{
          title: "Web Designer Estágio",
          company: "In Loco Media",
          companyUrl: "https://www.inlocomedia.com/",
          period: "Mai 2016 - Dez 2016",
          location: "Recife - Brasil",
          locationFlag: "🇧🇷",
        },{
          title: "CEO / CMO / Frontend Developer",
          company: "CITi (Empresa Júnior)",
          companyUrl: "https://citi.org.br/",
          period: "Jan 2013 - Dez 2014",
          location: "Recife - Brasil",
          locationFlag: "🇧🇷",
        },
      ],
      presentation: "Apresentações",
      presentationList: [
        {
          title: "UX + Mobile Ads: Aprendendo a Criar Experiência em Anúncios Móveis",
          company: "Interaction South America",
          companyUrl: "http://isa.ixda.org/2017/",
          period: "Nov 2017",
          location: "Florianópolis - Brasil",
          locationFlag: "🇧🇷",
        },{
          title: "UX + Mobile Ads: Aprendendo a Criar Experiência em Anúncios Móveis",
          company: "The Developers Conference",
          companyUrl: "https://thedevconf.com/en",
          period: "Nov 2017",
          location: "Porto Alegre - Brasil",
          locationFlag: "🇧🇷",
        },
      ],
      education: "Educação",
      educationList: [
        {
          title: "Digital Experience Design - Pós-Graduação",
          company: "Faculdade de Belas-Artes da Universidade de Lisboa",
          companyUrl: "https://dxd.belasartes.ulisboa.pt/",
          period: "Set 2020 - Atual",
          location: "Lisboa - Portugal",
          locationFlag: "🇵🇹",
        },{
          title: "Ciência da Computação - Bacharelado",
          company: "Centro de Informática da UFPE",
          companyUrl: "https://www2.cin.ufpe.br/en/",
          period: "Jan 2011 - Jun 2017",
          location: "Recife - Brasil",
          locationFlag: "🇧🇷",
        },{
          title: "iOS Developer / Interaction Designer",
          company: "Apple Developer Academy",
          companyUrl: "https://academy.cin.ufpe.br/index.php/pt/academia",
          period: "Mar 2015 - Mar 2016",
          location: "Recife - Brasil",
          locationFlag: "🇧🇷",
        },{
          title: "Adobe Creative Collection",
          company: "SAGA - Digital Design School",
          companyUrl: "https://saga.art.br/",
          period: "Jan 2009 - Jun 2011",
          location: "Recife - Brasil",
          locationFlag: "🇧🇷",
        },
      ],
    }
  },
}
</script>
