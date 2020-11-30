<template>
  <div class="project-page">
    <div class="project-page__hero mb-4">
      <img src="~/assets/img/portfolio/ace-english-malta/ace-english-malta-header.jpg" alt="" class="w-100 h-100">
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
            },{
              id: "current-version-analysis",
              heading: "Website Current Version Analysis",
              paragraphs: [
                "The following step would be to analyze the current (at that time) website version and try to understand if it solves students’/users' needs, which we pointed to during the interviews.",
              ],
            },{
              id: "competitors-analysis",
              heading: "Competitors Analysis",
              paragraphs: [
                "It would be really hard to analyze all schools around Malta, due to the huge number of English schools, and actually, not all of them were our direct competitors. I’ve worked with the marketing manager and the general manager to review and understand ACE’s strategy and which public they considered the school target. Thus, We’ve created a list of schools that we consider our direct competitors with that strategy in mind. With the list in hand, I’ve started to analyze their website and social media.",
              ],
            }
          ],
        },{
          parallax: true,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
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
            }
          ]
        },{
          parallax: false,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
        },{
          subsections: [
            {
              id: "prototyping",
              heading: "Prototyping",
              paragraphs: [
                "After all conception research and analysis phases, I had to put all gathered findings on paper and organize it in a way to extract insights from it. Before going directly to develop the website, I've decided to go through two prototype steps: a low-fidelity prototype; and a high-fidelity one. The goal of the first was to understand the better user flow; second to test the interface itself and check with chosen elements work on the interface.",
                "During the research, I've identified the users had questions about the course categories that the school offers. Thus, we decided to put a small paragraph to explain a little bit better about each category. So, I used, in some user tests, the high-fidelity prototype to validate the interface and which UI element worked better.",
              ]
            }
          ]
        },{
          parallax: false,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
        },{
          subsections: [
            {
              id: "seo-copyright-development",
              heading: "SEO, Copyright, and Development",
              paragraphs: [
                "Another huge factor to think about, was the copyright of the website because it directly how users understand ACE School and impact SEO ranking. We've created, together with one of our teachers, some guidelines on how to write the website copy. The website should have a tone of voice not so formal, considering our main target, but not so informal, and each page should have a copy based on keywords focused on SEO. Working directly with one of our teachers was a great idea because he could bring and combine his outstanding English language expertise and his knowledge about the school and our students, to create a copy to explain better and answer potential questions.",
                "I've built the website using WordPress, due to my previous experience with the tool, so I could build it exactly the way I want it. Next, I had to choose which would be our host provider. After analyzing several options, I choose <a href='https://www.cloudways.com/en/' target='_blank'>Cloudways</a>, which has a great support team and a platform where I could scale the machine when and how I need it. Also, they help with loading time and performance in general.",
              ]
            }
          ]
        },{
          parallax: true,
          imgUrl: 'ace-english-malta-parallax-old.jpg'
        },{
          id: "results",
          heading: "Results",
          paragraphs: [
            "We launched the new website version after I ran all the planning process, previously described. After 5 months from the launching, I've compared the new numbers with the old version:",
            "<ul><li>New users: increased by 20%;</li><li>New sessions: increased by 30%;</li><li>36% more visualization on the pages;</li><li>Users spent 8% more time;</li><li>“Get a quote” page access: increased 150+%;</li><li>28% more direct bookings;</li></ul>"
          ]
        }
      ],
      otherProjects: "Other projects"
    }
  },
}
</script>