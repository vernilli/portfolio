<template>
  <div class="project-page">
    <div class="project-page__hero mb-4">
      <img src="~/static/img/portfolio/ace-english-malta/ace-english-malta-header.jpg" alt="" class="w-100 h-100">
      <h1 class="project-page__title text-center">
        {{ projectTitle }}
      </h1>
    </div>

    <div 
      v-for="(item, index) in projectContent"
      :key="index"
      class="container"
    >
      <div class="project-page__section">
        <h2 :id="item.id">
          {{ item.heading }}
        </h2>
        <p 
          v-for="(paragraph, index) in item.paragraphs"
          :key="index"
          v-html="paragraph"
        />
      </div>

      <div v-if="item.subsections">
        <div 
          v-for="(section, index) in item.subsections"
          :key="index"
          class="project-page__section"
        >
          <h3 :id="section.id">
            {{ section.heading }}
          </h3>

          <p 
            v-for="(paragraph, index) in section.paragraphs"
            :key="index"
            v-html="paragraph"
          />
        </div>
      </div>

      <div v-if="item.parallax">
        OLAR
      </div>

    </div>

    <div class="project-page__other-projects container">
      <h2 class="text-center">
        {{ otherProjects }}
      </h2>
      <portfolio-showcase :hideProject="'ace'" />
    </div>
    
  </div>
</template>

<script>
import VvButton from '~/components/VvButton.vue'
import PortfolioShowcase from '~/components/PortfolioShowcase.vue'

export default {
  // layout: 'basic',
  components: {
    VvButton,
    PortfolioShowcase,
  },
  data() {
    return {
      projectTitle: "ACE English Malta",
      projectContent: [
        {
          id: "objetivos",
          heading: "Objetivos",
          paragraphs: [
            "Aumentar a quantidade de cotações de curso pedidas de maneira direta(o aluno contatar diretamente a escola), sem influenciar o número de alunos vindos através de agências parceiras; Também reduzir o tempo desperdiçado, pela equipe comercial ou de atendimento ao cliente, respondendo informações básicas.",
          ]
        },{
          id: "contexto",
          heading: "Contexto",
          paragraphs: [
            "A grande maioria de alunos que realizam intercâmbio fora de seus países de origem, fazem suas reservas através agencias de intercambio, esse fato é bem conhecido nesse setor. Na ACE English Malta não é diferente, o maior número de reservas de cursos vêm através de agências, porém queríamos fazer com que esse percentual fosse um pouco mais equilibrado, comparando com de reservas diretas. Claro que sem reduzir o número absoluto de reservas feita por agências.",
          ]
        },{
          id: "cenario-geral",
          heading: "Cenário geral",
          paragraphs: [
            "The students are our final clients and the most important stakeholder. Thus, my first step was to understand them better, thus, I’ve elaborated an interview and asked 6 students(from different countries) to participate. Most of our students, 3 out of 4(numbers acquired in our survey on their first day at school) have visited the school website before deciding where they would study. Besides that, they have said several times they had questions regarding what they found on the website. The survey clarified that our website was the first point of contact with a huge number of potential students. Therefore, make the website more accessible and improve its clarity.",
            "Antes de tudo, para identificar se conseguiria melhorar, era necessário ter um número para se comparar, e até mesmo saber se esse tempo desperdiçado era uma realidade. Desde que comecei a trabalhar na ACE, sempre foi comentado que chegavam muitos e-mails com perguntas que eram muito simples de responder. Então o primeiro passo, antes de tudo, seria começar a rastrear essas informações, para assim identificar se existia ou não esse desperdício."
          ]
        },{
          id: "processo-pesquisa",
          heading: "Processo de pesquisa",
          paragraphs: [
            "Como todo processo de pesquisa, precisei analisar todos os aspectos que envolviam o projeto. No aspecto geral, escolas de idiomas como uma língua estrangeira, têm 2 principais stakeholders, os alunos e as agências de intercâmbio. Meu objetivo, como descrito acima, era focar no aumento em alunos que decidiam reservar diretamente com a escola. Quais os principais motivos que os fazem decidir por fazer um intercâmbio em língua inglesa e quais aspectos procuram em uma escola.",
          ],
          subsections: [
            {
              id: "entrevistas-stakeholders",
              heading: "Entrevistas com stakeholders",
              paragraphs: [
                "Como a escola recebe novos estudantes - pessoas de diversas idades e nacionalidades - todas as semanas, temos uma relação mais direta e próxima com eles se comparados com as agências. O objetivo da pesquisa seria então, tentar entender como funciona todo o processo de tomada de decisão de pessoas que desejam fazer um intercâmbio para aprender ou melhorar o inglês, essa pesquisa seria dividida tentando entender as principais nacionalidades que mais recebemos.",
                "Depois de decididos os objetivos dessa etapa da pesquisa, montei um roteiro de uma entrevista semi-estruturada que seria aplicado com pessoas que se encaixassem com o perfil desejado. Utilizando o nosso sistema interno, filtrei 5 a 10 estudantes de cada um dos países escolhidos.",
                "Durante as entrevistas identifiquei que existia um fluxo parecido entre os alunos, sejam por reservas diretas ou através de agências. Em algum momento, grande parte dos alunos, entrou no site da nossa escola para conhecer mais sobre a escola, seja durante a procura por conta própria pela escola ou para checar algum orçamento recebido de uma agência. Esse era um indicativo que existia pelo menos um ponto de contato em comum entre esses dois subgrupos. Caso nosso site fosse bem explicativo e mostrasse nossos benefícios, poderíamos atingir e impactar os dois tipos de alunos, mesmo que o foco inicial do projeto fosse aumentar o número de reservas diretas."
              ],
            },{
              id: "cenario-malta",
              heading: "Cenário em Malta",
              paragraphs: [
                "Há alguns anos, Malta vem aumentando seu investimento no setor de língua inglesa para não falantes nativos de inglês. Com o crescimento desse setor, o <a href='https://nso.gov.mt/en/Pages/NSO-Home.aspx' target='_blank'>Governo Maltês</a> começou a coletar dados e informações das escolas, criando e disponibilizando gratuitamente, um reporte desses números. É possível saber quantas pessoas vieram estudar inglês em Malta, assim como seu país de origem, sua idade, seu gênero, entre outras informações mais detalhadas. Essa pesquisa me auxiliou consideravelmente a criar um cenário de comparação da nossa escola com o restante das escolas em Malta, identificando possíveis novos mercados para atacar ou mercados que poderíamos melhorar nossos números."
              ],
            },{
              id: "analise-versao-atual",
              heading: "Análise da versão atual",
              paragraphs: [
                "O passo seguinte após as entrevistas seria analisar a versão vigente do website, e tentar entender se ele supria as necessidades que os usuários tinham, necessidades que seriam identificadas durante as entrevistas.",
              ],
            },{
              id: "analise-competidores",
              heading: "Análise de competidores",
              paragraphs: [
                "Graças ao número elevado de escolas, seriam muito complicado analisar todas as escolas, e até certo ponto não são todas as escolas que são nossos concorrentes. Junto com o diretor de marketing e o Diretor geral, revisei e alinhei qual era a visão da escola e qual seria, na opinião deles, o principal público-alvo da instituição. Baseado nessa conversa, comecei a procurar e encontrei algumas outras escolas que se encaixavam no perfil conversado.",
              ],
            }
          ],
        },{
          parallax: true,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
        },{
          id: "processo-concepcao",
          heading: "Processo de concepção",
          subsections: [
            {
              id: "arquitetura-informacao",
              heading: "Arquitetura da informação",
              paragraphs: [
                "Entregar as informações necessárias pros usuários de maneira clara, é mais que uma questão de beleza. Como explicitado acima, existem diversas escolas de inglês em Malta, então se o estudante não entender/encontrar o que deseja de forma rápida e clara, ele possivelmente irá procurar por outra escola que explique melhor.",
                "Existem vários fatores que as pessoas levam em consideração ao escolher uma escola, seja preço, país, localização, tecnologia aplicada em sala de aula, etc. Durante as entrevistas pude identificar quais eram os pontos mais procurados ou que eram considerados importantes para os usuários, e depois de documentar os resultados, conseguimos entender com mais clareza cada ponto. Além disso, reestruturei a pesquisa de satisfação que os alunos preenchem ao final de sua estadia na escola, com a finalidade de entender a experiência de cada um e os fatores, de maneira mais geral, que levaram a escolher uma escola.",
                "Após de toda pesquisa, reunir os cursos e informações que eram necessário, chamei alguns estudantes que se encaixavam no perfil de reservas diretas. Realizei com eles algumas sessões de card sorting com o objetivo de entender como eles iriam agrupar as informações que levantamos, para tentar criar a arquitetura de informações que fosse melhor para os usuários.",
              ],
            }
          ]
        },{
          parallax: false,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
        },{
          subsections: [
            {
              id: "prototipacao",
              heading: "Prototipação",
              paragraphs: [
                "Após toda a fase de concepção, pesquisa e análise, era preciso colocar no papel todo o conhecimento adquirido e entender melhor sobre o nosso cenário em específico. E antes de ir para programação, decidimos passar por dois processos de prototipagem: um em baixa fidelidade, com objetivo de entender fluxo; e outra em alta, para testar a interface em si. Cada uma das versões teve seu papel e sua importância para definir o design/fluxo final.",
                "Por exemplo, durante as pesquisas sentimos falta uma explicação melhor das categorias de cursos que eram oferecidos, e vimos que os usuários ficavam em dúvida no foco dessas categorias. Por isso definimos que iríamos incluir um parágrafo, mesmo que pequeno, para descrevê-los. Utilizamos os testes com o protótipo de baixa fidelidade para identificar qual seria a melhor das opções.",
              ]
            }
          ]
        },{
          parallax: false,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
        },{
          subsections: [
            {
              id: "seo-copyright-desenvolvimento",
              heading: "SEO, Copyright e Desenvolvimento",
              paragraphs: [
                "Outro fator muito importante era o conteúdo escrito e copyright, pois iria influenciar diretamente com o entendimento dos usuários quanto ao SEO. Criei diretrizes e maneiras de como o copyright deveria ser feito, cada uma das páginas teria um foco em seu conteúdo escrita baseado em uma keyword específica para a página. Após isso entramos em contato com um de nossos professores para escrever melhor o conteúdo de cada página, definida por nós anteriormente. A escolha de um professor foi duplamente assertiva, além do alto nível de inglês - escrevendo de maneira coerente e concisa - o professor conhecia nossa escola de dentro, o que auxiliaria na maneira de como criar o conteúdo escrito do site.",
                "Construí o site inteiro utilizando Wordpress, pela familiaridade que eu já tenho com a plataforma, além de auxiliar no processo de construção e suporte. Após fazer uma análise entre alguns possíveis provedores, escolhi hospedar o site na plataforma <a href='https://www.cloudways.com/en/' target='_blank'>Cloudways</a>, que dá um suporte ótimo além de poder escalar o servidor da maneira que quiser, sempre que preciso. Além de auxiliar no desempenho geral de carregamento, velocidade e performance do site.",
              ]
            }
          ]
        },{
          parallax: true,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
        },{
          id: "resultados",
          heading: "Resultados",
          paragraphs: [
            "Após percorrer todo este processo, lançamos a nova versão do website. Após 5 meses do seu lançamento, em comparação com o período anterior, o website recebeu(por questão de confidencialidade, não posso colocar números absolutos):",
            "<ul><li>Aumento 20% de novos usuários;</li><li>Aumento 30% novas sessões;</li><li>36% mais visualizações nas páginas;</li><li>Usuários ficaram 8% mais tempo;</li><li>Aumento de 150+% acessos a página de cotação;</li><li>28% mais reservas diretas;</li></ul>"
          ]
        }
      ],
      otherProjects: "Outros projetos"
    }
  },
}
</script>
