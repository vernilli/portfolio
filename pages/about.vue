<template>
  <transition name="fade" mode="out-in">
    <div :key="currentLocale" class="container mt-5 pt-5">
      <h1 class="about__title text-center mt-4 mt-md-5 mb-4 mb-md-5">
        {{ $t('position') }}
      </h1>

      <div class="d-flex flex-wrap flex-column flex-md-row align-items-md-center mb-3">
        <div class="about__greetings col-12 col-md-8 pl-0">
          <p class="mb-md-0">
            {{ $t('aboutPage.greetings') }}
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

      <div>
        <p 
          v-for="(paragraph, index) in $t('aboutPage.background', { returnObjects: true })" 
          :key="index"
          v-html="paragraph"
        />
      </div>

      <div class="d-flex justify-content-center">
        <vv-button :text="$t('aboutPage.buttonText')" :path="buttonPath">
          <template v-slot:iconAfter>
            <file-icon />
          </template>
        </vv-button>
      </div>

      <div>
        <h2 class="mt-5 mb-4">
          {{ $t('aboutPage.experience') }}
        </h2>
        <career-list :list="$t('aboutPage.experienceList', { returnObjects: true })" />

        <h2 class="mt-5 mb-4">
          {{ $t('aboutPage.presentation') }}
        </h2>
        <career-list :list="$t('aboutPage.presentationList', { returnObjects: true })" />

        <h2 class="mt-5 mb-4">
          {{ $t('aboutPage.education') }}
        </h2>
        <career-list :list="$t('aboutPage.educationList', { returnObjects: true })" />

      </div>
      
    </div>
  </transition>
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
  computed: {
    currentLocale () {
      return this.$i18n.locale
    },
  },
  data() {
    return {
      buttonPath: "presentations/2017_TDC_ISA.pdf",
    }
  },
}
</script>
