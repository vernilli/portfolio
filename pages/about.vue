<template>
  <transition name="fade" mode="out-in">
    <div :key="currentLocale" class="container mt-5 pt-5">
      <h1 class="about__title text-center mt-3 mt-md-5 mb-4 mb-md-5">
        {{ $t('positionCopy') }}
      </h1>

      <div class="d-flex flex-wrap flex-column flex-md-row align-items-md-center mb-4">
        <div class="about__greetings col-12 col-md-8 pl-0">
          <p class="mb-md-0">
            {{ $t('aboutPage.greetingsCopy') }}
          </p>
        </div>
        <div class="about__profile-picture position-relative col-12 col-md-4 pr-md-0">
          <img 
            src="~/static/img/victor-vernilli.jpg"
            :alt="$t('aboutPage.altImg')"
            :title="$t('aboutPage.altImg')"
          >
        </div>
      </div>

      <div class="about__description">
        <p 
          v-for="(paragraph, index) in $t('aboutPage.backgroundCopy', { returnObjects: true })" 
          :key="index"
          v-html="paragraph"
        />
      </div>

      <div class="d-flex justify-content-center">
        <vv-button 
          :text="$t('aboutPage.checkResumeCopy')" 
          :path="$t('resumePath')" 
        />
      </div>

      <div>
        <h2 class="text-center text-md-left mt-5 mb-3 mb-md-4">
          {{ $t('aboutPage.experienceCopy') }}
        </h2>
        <career-list :list="$t('aboutPage.experienceList', { returnObjects: true })" />

        <h2 class="text-center text-md-left mt-5 mb-3 mb-md-4">
          {{ $t('aboutPage.educationCopy') }}
        </h2>
        <career-list :list="$t('aboutPage.educationList', { returnObjects: true })" />

        <h2 class="text-center text-md-left mt-5 mb-3 mb-md-4">
          {{ $t('aboutPage.presentationCopy') }}
        </h2>
        <career-list :list="$t('aboutPage.presentationList', { returnObjects: true })" />

      </div>
      
    </div>
  </transition>
</template>

<script>
import CareerList from '~/components/CareerList.vue'
import VvButton from '~/components/VvButton.vue'
import FileIcon from '~/assets/icn/icon_file.svg'

export default {
  components: {
    CareerList,
    VvButton,
    FileIcon,
  },
  computed: {
    currentLocale () {
      return this.$i18n.locale
    },
  },
  head: {
    title: 'About me',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hello, my name is Victor Vernilli, an end-to-end Product Designer based in Lisbon who enjoys working on multicultural and diverse teams. I believe as the more diverse is the team, the more amazing the outcomes will be.'
      },{
        hid: 'keywords',
        name: 'keywords',
        content: 'victor vernilli, design portfolio, product designer, ux portfolio, mobile portfolio, ux mobile, ux designer, user-centered design, time to place, carousel ad, context ads'
      },{
        hid: 'author',
        name: 'author',
        content: 'Victor Vernilli'
      },
      // Facebook metadata
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'en_US'
      },{
        hid: 'og:url',
        property: 'og:url',
        content: 'https://vernilli.com'
      },{
        hid: 'og:title',
        property: 'og:title',
        content: 'About me | Victor Vernilli'
      },{
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Victor Vernilli | Product Designer'
      },{
        hid: 'og:og:description',
        property: 'og:og:description',
        content: 'Hello, my name is Victor Vernilli, an end-to-end Product Designer based in Lisbon who enjoys working on multicultural and diverse teams. I believe as the more diverse is the team, the more amazing the outcomes will be.'
      },{
        hid: 'og:image',
        property: 'og:image',
        content: '~/static/img/TDC17.jpg'
      },{
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/jpeg'
      },{
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200'
      },{
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '628'
      },{
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      // Twitter metadata
      { 
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },{ 
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'About me | Victor Vernilli'
      },{
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '~/static/img/TDC17.jpg'
      },{
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Hello, my name is Victor Vernilli, an end-to-end Product Designer based in Lisbon who enjoys working on multicultural and diverse teams. I believe as the more diverse is the team, the more amazing the outcomes will be.'
      }
    ],
  },
}
</script>
