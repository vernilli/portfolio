export default {
  name: 'Victor Vernilli',
  nameMobile: 'Vernilli',
  languages: {
    english: 'english',
    portuguese: 'português'
  },
  projects: 'projects',
  about: 'about me',
  position: 'Product Designer',
  greetings: [
    'Hello!',
    'I\'m a Product Designer who believes that we can people’s life easier, even in the most complex areas. I love history and mankind past and eager to discover new things.',
    'I\'m also a coffee lover. <strong>So, let\'s take a coffee and talk.</strong>','Here are some projects that I\'ve done or participated, I hope you like it.'
  ],
  otherProjects: "Other projects",

  aboutPage: {
    greetings: 'My name is Victor Vernilli and I\'m a Product Designer. I\'ve graduated in Computer Science from the Universidade Federal de Pernambuco. Although I had a very technical degree, I fell in love with the idea/concept of UX since the first time I discovered it during college.',
    altImg: 'Picture of Victor Vernilli',
    background: [
      'The concept of thinking, caring about and bringing the best experience to users/customers of a product caught my attention. Because of that, I’ve been trying to apply UX steps on all my projects during the college whenever possible.',
      'I believe we can improve people\' experience in any area, even in a hated and rejected one. Most of the time these feelings are be caused because no one thinks about users when designing the product/service. This sentence became even more true when I\'d been working on mobile ads and there were, even in this area, improvements to be made in the user experience.',
      'I also know that it\'s not always easy to make those improvements. Many times we can\'t access the users directly and simply, or if we ask them to test something, we could bias the results. I learned this with ads, how could you ask someone to "test" ads?',
      'That’s quite a hard problem to solve, but I believe there is always a way to include users in the process. There are several tools at your disposal when trying to solve this tough problem, such as: qualitative or quantitative tests, A/B test, Big Data analysis, etc.',
    ],
    buttonText: "Check my CV",
    experience: "Experience",
    experienceList: [
      {
        title: "Product Designer",
        company: "Indie Campers",
        companyUrl: "https://indiecampers.com/",
        period: "Nov 2019 - Today",
        location: "Lisbon - Portugal",
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
        companyUrl: "https://www.inlocomedia.com/en/",
        period: "Jan 2017 - Dec 2017",
        location: "Recife - Brazil",
        locationFlag: "🇧🇷",
      },{
        title: "Web Designer Intern",
        company: "In Loco Media",
        companyUrl: "https://www.inlocomedia.com/en/",
        period: "May 2016 - Dec 2016",
        location: "Recife - Brazil",
        locationFlag: "🇧🇷",
      },{
        title: "CEO / CMO / Frontend Developer",
        company: "CITi (Junior Entreprise)",
        companyUrl: "https://citi.org.br/",
        period: "Jan 2013 - Dec 2014",
        location: "Recife - Brazil",
        locationFlag: "🇧🇷",
      },
    ],
    presentation: "Presentation",
    presentationList: [
      {
        title: "UX + Mobile Ads: Learning to Create Experiences in Mobile Ads",
        company: "Interaction South America",
        companyUrl: "http://isa.ixda.org/2017/",
        period: "Nov 2017",
        location: "Florianópolis - Brazil",
        locationFlag: "🇧🇷",
      },{
        title: "UX + Mobile Ads: Learning to Create Experiences in Mobile Ads",
        company: "The Developers Conference",
        companyUrl: "https://thedevconf.com/en",
        period: "Nov 2017",
        location: "Porto Alegre - Brazil",
        locationFlag: "🇧🇷",
      },
    ],
    education: "Education",
    educationList: [
      {
        title: "Digital Experience Design - Postgraduate course",
        company: "Faculty of Fine Arts of The University of Lisbon",
        companyUrl: "https://dxd.belasartes.ulisboa.pt/",
        period: "Sep 2020 - Today",
        location: "Lisbon - Portugal",
        locationFlag: "🇵🇹",
      },{
        title: "Computer Science - Bachelor's Degree",
        company: "Faculty of Information Tech of The UFPE",
        companyUrl: "https://www2.cin.ufpe.br/en/",
        period: "Jan 2011 - Jun 2017",
        location: "Recife - Brazil",
        locationFlag: "🇧🇷",
      },{
        title: "iOS Developer / Interaction Designer",
        company: "Apple Developer Academy",
        companyUrl: "https://academy.cin.ufpe.br/index.php/pt/academia",
        period: "Mar 2015 - Mar 2016",
        location: "Recife - Brazil",
        locationFlag: "🇧🇷",
      },{
        title: "Adobe Creative Collection",
        company: "SAGA - Digital Design School",
        companyUrl: "https://saga.art.br/",
        period: "Jan 2009 - Jun 2011",
        location: "Recife - Brazil",
        locationFlag: "🇧🇷",
      },
    ],
  },

  pages: [
    {
      permalink: 'ace-english-malta',
      projectTitle: "ACE English Malta",
      showcase: {
        desc: 'Redesign the ACE English Malta’s site, English School based in Malta',
        imageAlt: 'Computer showing the mockup of ACE English Malta website redesign on screen',
        imageUrl: '/img/portfolio/mockup-site-ace.png',
        device: 'desktop',
      },
      visibleItemNav: "motivation",
      heroImg: 'ace-english-malta/ace-english-malta-header.jpg',
      projectContent: [
        {
          id: "motivation",
          heading: "Motivation",
          paragraphs: [
            "Increase the number of asked quotes sent directly to the school(potential students who asked for a quote on the website or send an email or contact the school staff), with no influence on the number of students coming from agencies; Another goal was to <strong>decrease the wasted time</strong> of our sales team answering clients with basic information.",
          ]
        },{
          id: "context",
          heading: "Context",
          paragraphs: [
            "The majority number of students, who leave their countries to study abroad, made their bookings through agencies, and that is a fact well known in this industry. At ACE English Malta is not different, the amount of students coming through agencies is bigger than students coming directly, otherwise, we would like to make these numbers more balanced. Of course, without changing the absolute number of bookings made by agencies.",
          ]
        },{
          id: "general-scenario",
          heading: "General Scenario",
          paragraphs: [
            "The students are our final clients and the most important stakeholder. Thus, my first step was to understand them better, thus, I’ve elaborated an interview and asked 6 students(from different countries) to participate. Most of our students, 3 out of 4(numbers acquired in our survey on their first day at school) have visited the school website before deciding where they would study. Besides that, they have said several times they had questions regarding what they found on the website. The survey clarified that our website was the first point of contact with a huge number of potential students. Therefore, make the website more accessible and improve its clarity.",
            "Before all, comparing the final result, it has been necessary to gather current numbers to compare with, from how many quotes do we receive to how much time our team was spending answering questions. Since my first week working at ACE, I always heard that we receive lots of emails with simple questions. Thus, my following step should track and organize all this information, then identify if we were wasting too much time or not."
          ]
        },{
          id: "research-process",
          heading: "Research Process",
          paragraphs: [
            "Like every search process, I had to analyze all aspects of the project. In the big picture, language schools as a foreign language have 2 main stakeholders or clients: the final students and the agencies. My main goal, as previously explained, was to focus on increasing the number of students who rather book directly with the school. Therefore, my research goal was to uncover the main reasons the students take into consideration to choose a school and which aspects they are looking for.",
          ],
          subsections: [
            {
              id: "stakeholder-interview",
              heading: "Stakeholders Interview",
              paragraphs: [
                "All English schools have students and agencies as clients, but at the end of the day, the students are our main clients. Every week, dozens of new students arrive, from several countries and ages. The main goal of the interview with students was to understand the whole process taken by the students to choose a place to learn or to improve their English abroad. That research was split into groups considering the most common nationalities.",
                "After creating all objectives we would like to identify during the research, I’ve created a script for a semi-structured interview which will be done with students who fit the profile we were looking for.",
                "During the interviews and after I’ve documented the interviews, I’ve been able to identify a similar flow among the students, coming from direct bookings or agency bookings. Most of the students, at a certain point in their search, have accessed our website. That was a great indicator that there was one big point of contact - students from direct booking or agency booking. If our website was clear and showed the benefits to study at ACE, we could reach both types of students, even with the main goal being to increase direct bookings."
              ],
            },{
              id: "malta-scenario",
              heading: "Malta’s Scenario",
              paragraphs: [
                "Malta has been investing in the “English as a foreign language” industry, and due to diverse geographic and political factors, the country started to attract a lot of new students, from the whole globe. As the industry increased with all those investments, the <a href='https://nso.gov.mt/en/Pages/NSO-Home.aspx' target='_blank'>Maltese government</a> decided to collect data and information from the schools, creating and sharing freely a report with those data. It’s possible to check how many people came to Malta to study in the past years, such as their nationalities, gender, and other detailed information. This report helped me when I was creating a comparator scenario between ACE and other schools in Malta, identifying potential new markets or already reached markets where we could improve."
              ],
            },
          ],
        },{
          visualContent: {
            contentType: "img",
            style: "full-contained",
            source: '/img/portfolio/ace-english-malta/malta-report-desktop.jpg',
            sourceMobile: '',
            sourceCaption: 'Part of the Anual Report made by Malta Government',
            imgAlt: 'Part of the Anual Report made by Malta Government',
          },
        },{
          subsections: [
            {
              id: "website-analysis",
              heading: "Website Analysis",
              paragraphs: [
                "The following step would be to analyze the current (at that time) website version and try to understand if it solves students’/users' needs, which we pointed to during the interviews.",
              ],
              visualContent: {
                contentType: "img",
                style: "same",
                source: '/img/portfolio/ace-english-malta/home-old.jpg',
                sourceMobile: '',
                sourceCaption: 'Home page of ACE English Malta website <strong>before</strong> the research and redesign',
                imgAlt: 'A screenshot of the home page of ACE English Malta website before the research and redesign',
              },
            },{
              id: "competitors-analysis",
              heading: "Competitors Analysis",
              paragraphs: [
                "It would be really hard to analyze all schools around Malta, due to the huge number of English schools, and actually, not all of them were our direct competitors. I’ve worked with the marketing manager and the general manager to review and understand ACE’s strategy and which public they considered the school target. Thus, We’ve created a list of schools that we consider our direct competitors with that strategy in mind. With the list in hand, I’ve started to analyze their website and social media.",
              ],
            },
          ],
        },{
          id: "conception-process",
          heading: "Conception Process",
          subsections: [
            {
              id: "information-architecture",
              heading: "Information Architecture",
              paragraphs: [
                "We should display all information in a clear way to our users, which is more than just aesthetics. As described above, there are many English schools in Malta, thus if a user doesn’t understand/find the information they want quickly and easily, they might look for another school that explains it better.",
                "We observed several factors which people may consider to choose a school: price, country, location, technological techniques in the classroom, etc. During the interviews, I could identify which were the most wanted aspects among our students or which they consider important. Therefore, I documented all the findings and I used them to reformulate the satisfaction survey, which all students fill on their last day at school, aiming to understand better how their stays with ACE were.",
                "After all the research, I invited some students, from different nationalities, who booked directly with the school. I’ve run card sorting sections with them to understand how they would group the information I’ve found on the researches, i.e. course names. Those sections helped me to create an information architecture based on users' experiences.",
              ],
              visualContent: {
                contentType: "img",
                style: "same",
                source: '/img/portfolio/ace-english-malta/ace-english-malta-cardsort3.jpg',
                sourceMobile: '',
                sourceCaption: '<strong>Left</strong>: A card Sorting session on going. <strong>Right</strong>: Final outcome of the a card Sorting session.',
                imgAlt: 'On the left image: A card Sorting session on going, a person looking at a table with card. On the right image: Final outcome of the a card Sorting session, cards grouped by users.',
              },
            },
          ],
        },{
          subsections: [
            {
              id: "prototyping",
              heading: "Prototyping",
              paragraphs: [
                "After all conception research and analysis phases, I had to put all gathered findings on paper and organize it in a way to extract insights from it. Before going directly to develop the website, I've decided to go through two prototype steps: a low-fidelity prototype; and a high-fidelity one. The goal of the first was to understand the better user flow; second to test the interface itself and check with chosen elements work on the interface.",
                "During the research, I've identified the users had questions about the course categories that the school offers. Thus, we decided to put a small paragraph to explain a little bit better about each category. So, I used, in some user tests, the high-fidelity prototype to validate the interface and which UI element worked better.",
              ],
              visualContent: {
                contentType: "img",
                style: "same",
                source: '/img/portfolio/ace-english-malta/ace-english-malta-sketch.jpg',
                sourceMobile: '',
                sourceCaption: 'Sketch of Courses Page',
                imgAlt: 'Sketch on paper of Courses Page',
              },
            },
          ],
        },{
          subsections: [
            {
              id: "seo-copyright",
              heading: "SEO and Copyright",
              paragraphs: [
                "Another huge factor to think about, was the copyright of the website because it directly how users understand ACE School and impact SEO ranking. We've created, together with one of our teachers, some guidelines on how to write the website copy. The website should have a tone of voice not so formal, considering our main target, but not so informal, and each page should have a copy based on keywords focused on SEO. Working directly with one of our teachers was a great idea because he could bring and combine his outstanding English language expertise and his knowledge about the school and our students, to create a copy to explain better and answer potential questions.",
              ],
            },{
              id: "development",
              heading: "Development",
              paragraphs: [
                "I've built the website using WordPress, due to my previous experience with the tool, so I could build it exactly the way I want it. Next, I had to choose which would be our host provider. After analyzing several options, I choose <a href='https://www.cloudways.com/en/' target='_blank'>Cloudways</a>, which has a great support team and a platform where I could scale the machine when and how I need it. Also, they help with loading time and performance in general.",
              ],
            },
          ],
        },{
          visualContent: {
            contentType: "img",
            style: "full-width",
            source: '/img/portfolio/ace-english-malta/home-new.jpg',
            sourceMobile: '',
            sourceCaption: 'Home page of ACE English Malta website <strong>after</strong> the research and redesign',
            imgAlt: 'A screenshot of the home page of ACE English Malta website after the research and redesign',
          },
        },{
          id: "results",
          heading: "Results",
          paragraphs: [
            "We launched the new website version after I ran all the planning process, previously described. After 5 months from the launching, I've compared the new numbers with the old version:",
            "<ul><li>New users: increased by 20%;</li><li>New sessions: increased by 30%;</li><li>36% more visualization on the pages;</li><li>Users spent 8% more time;</li><li>“Get a quote” page access: increased 150+%;</li><li>28% more direct bookings;</li></ul>"
          ],
          visualContent: {
            contentType: "btn",
            source: 'https://www.aceenglishmalta.com/',
            sourceMobile: '',
            sourceCaption: 'Check the final result in live',
          },
        },{
          id: "future-steps",
          heading: "Future Steps",
          paragraphs: [
            "During all these months, I could apply some techniques and tools(i.e. Personas, semi-structured interviews, card sorting, etc), and I plan to apply many others in the new iterations, trying to identify new improvements and potential enhancements. Including new languages to the website aren't so complex, however, they might be small or simple, but they can impact the business significantly. Translating all the content to another language is, indeed, a hard and long job, however, we have to step back to another challenge: understand all the targets more in detail for each new translation.",
            "Curious and unexpected information I found out: 15% of the website access is from Malta. That is a big challenge to understand why those numbers are so high, considering our target is not Maltese people. But this is a conversation for another time."
          ],
        },
      ],
    },

    {
      permalink: 'time-to-place',
      projectTitle: "Time to Place",
      showcase: {
        desc: 'How is it possible to improve the user experience in mobile ads using context elements?',
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
        desc: 'Researching and utilizing data to create a new mobile ad format',
        imageAlt: '',
        imageUrl: '/img/portfolio/mockup-carousel-ad.png',
        device: 'mobile',
      },
      visibleItemNav: "motivation",
      heroImg: 'carousel-ad/carousel-ad-header.jpg',
      projectContent: [
        {
          id: "motivation",
          heading: "Motivation",
          paragraphs: [
            "During my experience at In Loco Media, I worked in the Ads Innovation team. This team was responsible for designing and developing new ad formats and improving the user experience of the existing formats at the time. And for that, we used user-centered design methodologies to reach these goals. One of these new formats was the carousel ad - also known as a gallery ad.",
          ]
        },{
          id: "process",
          heading: "Process",
          subsections: [
            {
              id: "research-ideation",
              heading: "Research and Ideation",
              paragraphs: [
                "Before developing the format itself, it was necessary to decide which format should be made. We listed the formats that we already offered to our clients at that time, and we identified which formats we could develop. We raised positive and negative points for each format and we also identified the goal and segmentation that better combined with each one.",
                "After that, we analyzed which could be the goals that our portfolio didn’t cover or didn't support well. For example, campaigns focused to announce various products simultaneously weren’t cover by our formats.",
                "With this information on hand, we started to research some formats of ours competitors - like Facebook Ads, Instagram Ads, Google Ads, etc - offers and which the best value that we could deliver to our clients.",
                "After this analysis, we found the <strong>carousel ad</strong>. This new format would add something new to our portfolio and our clients could see a new value."
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
              id: "prototyping",
              heading: "Prototyping",
              paragraphs: [
                "With the format finally decided, we started the prototyping step. We wanted to create an ad that provided good experience to users, that wouldn't create doubts about what has been announced nor about what would happen after the click.",
                "By analyzing our competitors, we gathered the resources which were more utilized and widespread in the digital advertising market. We listed some elements that would be required to deliver value to our clients.",
                "We created several sketches of this new format, identifying variations of elements, positions, dimensions, texts, etc.",
              ],
              visualContent: {
                contentType: "img",
                style: "same",
                source: '/img/portfolio/carousel-ad/carousel-ad-sketch2.jpg',
                sourceMobile: '',
                sourceCaption: 'Sketch of some ideas for Carousel Ads',
                imgAlt: 'Sketch of some ideas for Carousel Ads',
              },
            },{
              id: "development",
              heading: "Development",
              paragraphs: [
                "For development, we used front-end techs - HTML, CSS, and JS - for ad creation, which is known in the digital advertising market as rich media. It's always required to think that the ad could appear on various types of screens and devices.",
                "So the attention given to performance and loading time is extremely important, which leads to the development of lighter pieces that provide the proposed goal and value. We raised some options for development, which were: to create all pieces from zero; or to utilize a new framework, <a href='https://amp.dev/' target='_blank'>AMP framework</a>. We decided to develop both and test which would have a better performance, both the loading time as the total clicks.",
                "Now, it was necessary to decide which metrics we would need to analyze to decide if the new format would be a success or not. We listed some metrics, such as:",
                "<ul><li>Loading time</li><li>Viewing time</li><li>Number of swipes</li><li>Number of cards viewed</li></ul>",
                "In order to gather this data, besides getting the data from In Loco Media’ ad network - as views and clicks - we utilized <a href='https://mixpanel.com/' target='_blank'>Mixpanel</a>, a software analytics tool - but an event-based one, in contrast to Google Analytics, a view-based - to understand the users' interest by the content. With Mixpanel it’s possible to identify the user behavior inside of a page - in this case inside the ad - and with which items the user interacted. Then it would be possible to gather this complementary data to understand the user behavior while interacting with this new ad format.",
              ],
              visualContent: {
                contentType: "img",
                style: "same",
                source: '/img/portfolio/carousel-ad/carousel-ad-high-fid.jpg',
                sourceMobile: '',
                sourceCaption: 'High fidelity prototypes of some ideas for Carousel Ads after all iteractions',
                imgAlt: 'High fidelity prototypes of some ideas for Carousel Ads after all iteractions',
              },
            },{
              id: "iterations",
              heading: "Iterations",
              paragraphs: [
                "One important step in the user-centered-design process is iterate. Due to the high volume of our campaigns, we ran a 2-week test cycle with significant collected data. This period of two weeks was chosen because it avoided a seasonal behavior by users during the weekdays compared to weekends. Thus, collect data and understand this information helped us to make some changes for every interaction, changing elements, positions, dimensions, copy, CTA, etc.",
              ],
            }
          ],
        },{
          id: "results",
          heading: "Results",
          paragraphs: [
            "At the end of this cycle, we created a new format, the carousel ad, a new type of ad for brands to announce more content with less screen space. With this ad, it's possible to advertise many products or to create storytelling about a product/service. We run several tests, utilizing both versions and different elements.",
            "The version which we decided to put on our portfolio was the AMP version because it loaded faster than the second version. In this version, the user didn't have to wait for too much and the other images were loaded in the background while the user saw the first image.",
            "The AMP version had more viewing time, which means, the people spent more time viewing the content of the ad which increased the number of swipes and viewed content.",
          ]
        },
        
      ]
    },

    {
      permalink: 'inlocomedia',
      projectTitle: 'In Loco Media',
      showcase: {
        desc: 'Redesign the In Loco Media’s site - greatest mobile advertising platform in Brazil',
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