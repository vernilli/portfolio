<template>
  <div class="container mt-5 pt-5">
    <h1 class="about__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
      {{ position }}
    </h1>

    <div class="d-flex flex-wrap flex-column flex-md-row align-items-md-center mb-3">
      <div class="about__greetings col-12 col-md-8 pl-md-0">
        <p class="mb-md-0">{{ greetings }}</p>
      </div>
      <img 
        src="~/assets/img/victor-vernilli.jpg" 
        :alt="altImg"
        class="about__profile-picture col-12 col-md-4 pr-md-0"
      >
    </div>

    <div 
      v-html="background" 
    />

    <div>
      <h2>{{ experience }}</h2>

      <h2>{{ presentation }}</h2>

      <h2>{{ education }}</h2>
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
      presentation: "Presentation",
      education: "Education"

    }
  },
}
</script>
