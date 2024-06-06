<template>
  <div>
    <div 
      v-for="(item, index) in list" 
      :key="index"
      class="about__career-item d-flex flex-column flex-md-row align-items-start justify-content-between"
    >
      <div class="col-12 col-md-8 p-0 mb-2 mb-md-0">
        <h3 class="about__career-item__position mb-2">
          {{ item.title }}
        </h3>
        <a 
          :href="item.companyUrl" 
          target="_blank"
          class="about__career-item__company-conference main-link text-left"
        >
          {{ item.company }}
          <!-- <external-link-icon :width="20" :height="20" /> -->
        </a>
      </div>
      <div class="col-12 col-md-4 p-0 d-flex flex-column align-items-start align-items-md-end">
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
</template>

<script>
import ExternalLinkIcon from '~/assets/icn/icon_external_link.svg'

export default {
  name: 'career-list',
  components: {
    ExternalLinkIcon
  },
  props: {
    list: Array,
  },
}
</script>
