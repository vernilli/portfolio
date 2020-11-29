<template>
  <div class="container mt-5 pt-5">
    <h1 class="about__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ position }}
    </h1>

    <div class="d-flex flex-wrap flex-column flex-md-row align-items-md-center mb-3">
      <div class="about__greetings col-12 col-md-8 pl-md-0">
        <p class="mb-md-0">{{ greetings }}</p>
      </div>
      <div class="about__profile-picture position-relative col-12 col-md-4 pr-md-0">
        <img 
          src="~/assets/img/victor-vernilli.jpg" 
          :alt="altImg"
        >
      </div>
    </div>

    <div 
      v-html="background" 
    />

    <div>
      <h2 class="mt-5 mb-4">{{ experience }}</h2>

      <div>
        <div 
          v-for="(item, index) in experienceList" 
          :key="index"
          class="about__career-item d-flex align-items-start justify-content-between"
        >
          <div class="col-8 p-0 mb-2 mb-md-0">
            <h3 class="about__career-item__position">
              {{ item.title }}
            </h3>
            <a 
              :href="item.companyUrl" 
              target="_blank"
              class="about__career-item__company-conference"
            >
              {{ item.company }}
            </a>
          </div>
          <div class="col-4 p-0 d-flex flex-column align-items-start align-items-md-end">
            <span class="about__career-item__period">
              {{ item.period }}
            </span>
            <span class="about__career-item__location">
              {{ item.location }}
              <span class="flag">
                {{ item.locationFlag }}
              </span>
            </span>
          </div>
        </div>
      </div>

      <h2 class="mt-5 mb-4">{{ presentation }}</h2>

      <h2 class="mt-5 mb-4">{{ education }}</h2>
    </div>
    
  </div>
</template>

<script>

export default {
  // layout: 'basic',
  components: {

  },
  data() {
    return {
      position: "Product Designer",
      altImg: "Picture of Victor Vernilli",
      greetings: "My name is Victor Vernilli and I'm a Product Designer. I've graduated in Computer Science from the Universidade Federal de Pernambuco. Although I had a very technical degree, I fell in love with the idea/concept of UX since the first time I discovered it during college.",
      background: "<p>The concept of thinking, caring about and bringing the best experience to users/customers of a product caught my attention. Because of that, I’ve been trying to apply UX steps on all my projects during the college whenever possible.</p><p>I believe we can improve people' experience in any area, even in a hated and rejected one. Most of the time these feelings are be caused because no one thinks about users when designing the product/service. This sentence became even more true when I'd been working on mobile ads and there were, even in this area, improvements to be made in the user experience.</p><p>I also know that it's not always easy to make those improvements. Many times we can't access the users directly and simply, or if we ask them to test something, we could bias the results. I learned this with ads, how could you ask someone to \"test\" ads?</p><p>That’s quite a hard problem to solve, but I believe there is always a way to include users in the process. There are several tools at your disposal when trying to solve this tough problem, such as: qualitative or quantitative tests, A/B test, Big Data analysis, etc.</p>",
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
          company: "CITi",
          companyUrl: "https://citi.org.br/",
          period: "May 2016 - Dec 2016",
          location: "Recife - Brazil",
          locationFlag: "🇧🇷",
        },
      ],
      presentation: "Presentation",
      education: "Education"

    }
  },
}
</script>
