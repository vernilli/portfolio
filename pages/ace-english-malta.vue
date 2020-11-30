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
      class="project-page__section container"
    >
      <h2 :id="item.id">
        {{ item.heading }}
      </h2>
      <p 
        v-for="(paragraph, index) in item.paragraphs"
        :key="index"
        v-html="paragraph"
      />
    </div>

    <div class="container">
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
            "Increase the number of asked quotes sent directly to the school(potential students who asked for a quote on the website or send an email or contact the school staff), with no influence on the number of students coming from agencies; Another goal was to decrease the wasted time of our sales team answering clients with basic information.",
          ]
        },{
          id: "context",
          heading: "Context",
          paragraphs: [
            "The majority number of students, who leave their countries to study abroad, made their bookings through agencies, and that is a fact well known in this industry. At ACE English Malta is not different, the amount of students coming through agencies is bigger than students coming directly, otherwise, we would like to make these numbers more balanced. Of course, without changing the absolute number of bookings made by agencies.",
          ]
        },{
          id: "scenario",
          heading: "General Scenario",
          paragraphs: [
            "The students are our final clients and the most important stakeholder. Thus, my first step was to understand them better, thus, I’ve elaborated an interview and asked 6 students(from different countries) to participate. Most of our students, 3 out of 4(numbers acquired in our survey on their first day at school) have visited the school website before deciding where they would study. Besides that, they have said several times they had questions regarding what they found on the website. The survey clarified that our website was the first point of contact with a huge number of potential students. Therefore, make the website more accessible and improve its clarity.",
            "Before all, comparing the final result, it has been necessary to gather current numbers to compare with, from how many quotes do we receive to how much time our team was spending answering questions. Since my first week working at ACE, I always heard that we receive lots of emails with simple questions. Thus, my following step should track and organize all this information, then identify if we were wasting too much time or not."
          ]
        }
      ],
      otherProjects: "Other projects"
    }
  },
}
</script>
