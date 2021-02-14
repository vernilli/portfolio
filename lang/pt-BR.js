export default {
  name: 'Victor Vernilli',
  nameMobile: 'Vernilli',
  languages: {
    english: 'english',
    portuguese: 'português'
  },
  projectsCopy: 'projetos',
  aboutCopy: 'sobre mim',
  positionCopy: 'Designer de Produto',
  greetingsCopy: [
    'Olá!',
    'Sou Product Designer e acredito que nós podemos fazer a experiência das pessoas mais fácil, mesmo nas mais complexas áreas. Amo história e sobre nosso passado, adoro aprender e descobrir coisas novas.',
    'Também sou um amante de café.<strong> Que tal uma conversa com uma xícara de café?</strong>','Aqui estão alguns projetos que fiz ou participei, espero que goste.'
  ],
  otherProjectsCopy: "Outros projetos",

  aboutPage: {
    greetingsCopy: 'Meu nome é Victor Vernilli e sou um Product Designer. Sou formado em ciência da computação pela UFPE, no Centro de Informática. Apesar de uma formação muito mais técnica, foi da área de UX que mais gostei, desde a primeira que conheci na universidade.',
    altImg: 'Foto de Victor Vernilli',
    backgroundCopy: [
      'O conceito de pensar, se importar e tentar trazer a melhor experiência aos clientes/usuários de um produto ou serviço me chamou muita atenção. Eu adicionava essa etapa, sempre que possível, em todos os projetos que participei durante da universidade.',
      'Acredito que podemos melhorar a experiência das pessoas em qualquer área, mesmo que ela seja muito rejeitada ou odiada. Muitas das vezes essa rejeição pode ser causada porque ninguém pensou nos usuários ao projetar esse produto/serviço. Essa mentalidade veio do tempo que trabalhei com anúncios digitais, também conhecidos no mercado como ads.',
      'Melhorar o uso de um produto/serviço nem sempre é fácil, muitas das vezes nós não temos acesso aos usuários de maneira simples ou se perguntarmos para eles testarem algo, poderemos estar tendenciando os resultados. Foi isso que aprendi com ads: como você pede pra um usuário “testar” um anúncio?',
      'Bastante complicado, mas acredito que sempre existe uma maneira de incluir o usuário durante o processo, não importa a dificuldade. Utilizando várias ferramentas, como testes qualitativos ou quantitativos, testes A/B, análise de Big Data, entre outros.',
    ],
    buttonTextCopy: "Veja mais meu CV",
    experienceCopy: "Experiência",
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
    presentationCopy: "Apresentações",
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
    educationCopy: "Educação",
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
  },

  projects: [
    {
      permalink: 'ace-english-malta',
      projectTitle: "ACE English Malta",
      showcase: {
        desc: 'Redesign do site de uma escola de inglês, localizada em St Julians, Malta',
        imageAlt: 'Computador Macbook com mockup após o redesign do website da ACE English Malta na tela',
        imageUrl: '/img/portfolio/mockup-site-ace.png',
        device: 'desktop',
      },
      visibleItemNav: "objetivos",
      heroImg: 'ace-english-malta/ace-english-malta-header.jpg',
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
          ],
        },
      ],
    },

    {
      permalink: 'time-to-place',
      projectTitle: 'Time to Place',
      showcase: {
        desc: 'Como é possível melhorar a experiência em anúncios utilizando elementos contextuais?',
        imageAlt: '',
        imageUrl: '/img/portfolio/mockup-time-to-place.png',
        device: 'mobile',
      },
      visibleItemNav: "motivation",
      heroImg: 'time-to-place/time-to-place-header.jpg',
      projectContent: [
        {
          id: "motivation",
          heading: "Motivation",
          paragraphs: [
            "Increase the number of asked quotes sent directly to the school(potential students who asked for a quote on the website or send an email or contact the school staff), with no influence on the number of students coming from agencies; Another goal was to <strong>decrease the wasted time</strong> of our sales team answering clients with basic information.",
          ]
        }
      ]
    },

    {
      permalink: 'carousel-ad',
      projectTitle: 'Carousel Ad',
      showcase: {
        desc: 'Pesquisando e utilizando dados para criar um novo formato de anúncio digital',
        imageAlt: '',
        imageUrl: '/img/portfolio/mockup-carousel-ad.png',
        device: 'mobile',
      },
      visibleItemNav: "Motivação",
      heroImg: 'carousel-ad/carousel-ad-header.jpg',
      projectContent: [
        {
          id: "motivacao",
          heading: "Motivação",
          paragraphs: [
            "Durante o tempo que trabalhei na In Loco Media, participei da equipe de Ads Innovation. Essa equipe era responsável por desenvolver novos formatos de anúncios e melhorar os formatos já existentes. E para isso utilizamos metodologias de design centrado no usuário para alcançar nossos objetivos. Um desses novos formatos que criamos seria o carroussel ad ou galeria.",
          ]
        },{
          id: "processo",
          heading: "Processo",
          subsections: [
            {
              id: "pesquisa-ideacao",
              heading: "Pesquisa e Ideação",
              paragraphs: [
                "Antes de desenvolver o formato em si, era preciso decidir QUAL formato deveria ser feito. Listamos quais os formatos nós já oferecíamos aos nossos clientes na época, e vimos quais podiam ser desenvolvidos. Levantamos pontos fortes e fracos de cada formato e identificamos o objetivo e segmentação que combinava melhor com cada um.",
                "A partir disso, vimos quais poderiam ser os objetivos que nosso portfólio não atacava ou não dava um bom suporte. Um exemplo: campanhas para anunciar vários produtos não era suportado pelos nossos anúncios.",
                "Com essas informações internas, começamos a pesquisar sobre formatos que alguns concorrentes - como Facebook, Instagram, Google, etc - ofereciam e qual o melhor valor que podíamos levar para nossos clientes.",
                "Depois dessa análise, encontramos um potêncial grande no anúncio em formato de galeria ou carroussel. Esse novo formato adicionaria algo novo ao nosso portfólio e que nossos clientes conseguiriam enxergar valor.",
              ],
            },
          ],
        },{
          visualContent: {
            contentType: "img",
            style: "full-width",
            source: '/img/portfolio/carousel-ad/carousel-ad-parallax.jpg',
            sourceMobile: '',
            sourceCaption: 'Home page of ACE English Malta website <strong>after</strong> the research and redesign',
            imgAlt: 'A screenshot of the home page of ACE English Malta website after the research and redesign',
          },
        },{
          subsections: [
            {
              id: "prototipacao",
              heading: "Prototipação",
              paragraphs: [
                "Depois de decidido o formato, partimos para a etapa de prototipação. Queríamos criar algo que provesse uma boa experiência para os usuários, que eles não ficassem em dúvidas sobre o que estava sendo anunciado nem o que aconteceria após o clique no mesmo.",
                "Durante a análise de concorrentes, vimos alguns recursos que eram mais utilizados e difundidos no mercado atual de mídia digital. Listamos alguns elementos que seriam necessários para conseguir entregar o valor para nossos clientes.",
                "Criamos vários esboços desse novo formato, com o objetivo de identificar variações dos elementos, posição, dimensões, textos, chamadas, etc. Uma das características era que a peça pudesse ser responsiva, se adaptando a tela do usuário não importa a posição do celular, seja “em pé” ou “deitado”.",
              ],
              visualContent: {
                contentType: "img",
                style: "same",
                source: '/img/portfolio/carousel-ad/carousel-ad-sketch2.jpg',
                sourceMobile: '',
                sourceCaption: 'Esboços de algumas ideias para o anúncio em carroussel',
                imgAlt: 'Esboços de algumas ideias para o anúncio em carroussel',
              },
            },{
              id: "desenvolvimento",
              heading: "Desenvolvimento",
              paragraphs: [
                "Para o desenvolvimento, seria necessário utilizar pacote front-end - HTML, CSS e JS - para criação da peça, que nesse caso é chamada pelo mercado de rich media. Para desenvolvimento de anúncios, é preciso sempre pensar que a peça poderá aparecer nos mais diversos tipos de telas e dispositivos.",
                "Então a preocupação com performance e carregamento são de extrema importância, o que leva ao desenvolvimento de peças leves mas que consigam passar seu objetivo e valor. Levantamos algumas opções para o desenvolvimento, que foram: criar o formato todo do zero; ou utilizar um framework. Recentemente, uma pessoa do nosso time tinha ido ao Google I/O e viu algumas palestrar sobre um novo framework. Então decidimos por adotar o <a href='https://amp.dev/' target='_blank'>AMP</a>. Decidimos desenvolver as duas abordagens e testar qual delas teria uma performance melhor, tanto de carregamento quanto de cliques.",
                "Agora era preciso decidir qual métricas precisaríamos levantar, para conseguir analisar se o novo formato daria certo ou não. Levantamos alguns, como:",
                "<ul><li>Tempo de carregamento</li><li>Tempo de visualização</li><li>Quantidade de arrastes para lado(swipes)</li><li>Quantidade de imagens vistas</li></ul>",
                "Para capturar esses dados, além de utilizar os dados da própria rede de anúncios utilizada, foi utilizado o <a href='https://mixpanel.com/' target='_blank'>Mixpanel</a>, uma ferramenta de analytics baseada em eventos, com ele é possível identificar como foi o comportamento de um usuário dentro de uma página, quais itens ele interagiu, etc. Assim seria possível receber esses dados complementares para entender o comportamento de uso do novo formato.",
              ],
              visualContent: {
                contentType: "img",
                style: "same",
                source: '/img/portfolio/carousel-ad/carousel-ad-high-fid.jpg',
                sourceMobile: '',
                sourceCaption: 'Alguns protótipos em alta fidelidade após iterações realizadas',
                imgAlt: 'Alguns protótipos em alta fidelidade após iterações realizadas',
              },
            },{
              id: "iteracoes",
              heading: "Iterações",
              paragraphs: [
                "Uma parte importante do processo de design centrado no usuário é iterar. Graças ao grande volume das nossas campanhas, conseguimos realizar ciclos de testes de duas semanas de duração, com um número significante de dados coletados. Esse período de duas semanas foi escolhidos pois evitava comportamentos sazonais dos usuários, durante os finais de semana e dias normais. Assim, coletar datos e entender essas informações nos auxiliaram em realizar modificações em cada iteração, alterando elementos, posições, dimensões, textos, chamadas, etc.",
              ],
            }
          ],
        },{
          id: "resultados",
          heading: "Resultados",
          paragraphs: [
            "Ao final de todo esse ciclo, criamos um formato novo, o carroussel ad, um formato para marcas anunciarem mais conteúdo ocupando menos espaço de tela, seja para vários produtos, seja para criar uma história sobre um único produto. Para conseguir ver mais conteúdo, o usuário precisa apenas arrastar os itens para o lado. Foram realizados vários testes, utilizando as duas versões, variando os elementos gráficos, etc.",
            "A versão que decidimos colocar pra frente foi utilizando o AMP, pois ele carregava mais rápido o primeiro frame do anúncio, não fazendo o usuário esperar demais e enquanto o usuário via a primeira imagem, as outras imagens eram carregadas em segundo plano.",
            "A versão com AMP teve também mais tempo de visualização, ou seja, as pessoas ficavam mais tempo olhando o anúncio, o que gerou um número maior de interações dos usuários, além de mais conteúdo visto.",
          ]
        },
        
      ]
    },

    {
      permalink: 'inlocomedia',
      projectTitle: 'In Loco Media',
      showcase: {
        desc: 'Redesign do site da In Loco Media, maior rede de anúncios mobile do Brasil',
        imageAlt: '',
        imageUrl: '/img/portfolio/mockup-site-inlocomedia.png',
        device: 'desktop',
      },
      visibleItemNav: "motivation",
      heroImg: 'ace-english-malta/ace-english-malta-header.jpg',
      projectContent: [
        
      ]
    },

  ]
}