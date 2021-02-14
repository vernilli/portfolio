export default {
  projects: [
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
  ]
}