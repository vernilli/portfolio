<template>
  <div>
    <div 
      v-for="(item, index) in list" 
      :key="index"
      class="about__career-item d-flex flex-column flex-md-row align-items-start justify-content-between"
    >
      <div class="col-12 col-md-8 p-0 mb-2 mb-md-0">
        <h3 class="about__career-item__position">
          {{ item.title }}
        </h3>
        <a 
          :href="item.company_url" 
          target="_blank"
          class="about__career-item__company-conference main-link"
        >
          {{ item.company }}
        </a>
      </div>
      <div class="col-12 col-md-4 p-0 d-flex flex-column align-items-start align-items-md-end">
        <span class="about__career-item__period">
          {{ item.period }}
        </span>
        <span class="about__career-item__location">
          {{ item.location }}
          <span class="flag">
            {{ item.location_flag }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "career-list",
  props: {
    list: Array,
  },
}
</script>
