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

    <div v-html="background" />

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
  // layout: 'basic',
  components: {
    CareerList,
    VvButton,
    FileIcon,
  },
  data() {
    return {
      position: "Product Designer",
      altImg: "Picture of Victor Vernilli",
      greetings: "My name is Victor Vernilli and I'm a Product Designer. I've graduated in Computer Science from the Universidade Federal de Pernambuco. Although I had a very technical degree, I fell in love with the idea/concept of UX since the first time I discovered it during college.",
      background: "<p>The concept of thinking, caring about and bringing the best experience to users/customers of a product caught my attention. Because of that, I’ve been trying to apply UX steps on all my projects during the college whenever possible.</p><p>I believe we can improve people' experience in any area, even in a hated and rejected one. Most of the time these feelings are be caused because no one thinks about users when designing the product/service. This sentence became even more true when I'd been working on mobile ads and there were, even in this area, improvements to be made in the user experience.</p><p>I also know that it's not always easy to make those improvements. Many times we can't access the users directly and simply, or if we ask them to test something, we could bias the results. I learned this with ads, how could you ask someone to \"test\" ads?</p><p>That’s quite a hard problem to solve, but I believe there is always a way to include users in the process. There are several tools at your disposal when trying to solve this tough problem, such as: qualitative or quantitative tests, A/B test, Big Data analysis, etc.</p>",
      buttonText: "Check my CV",
      buttonPath: "/assets/presentations/2017_TDC_ISA.pdf",
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
          period: "May 2016 - Dec 2016",
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
    }
  },
}
</script>
