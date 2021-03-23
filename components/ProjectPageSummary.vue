<template>
  <div class="container my-4 my-md-5 w-100">
    <div class="project-page__summary d-flex flex-wrap justify-content-center m-auto px-2 py-3 py-md-4">

      <div 
        v-for="(item, index) in summaryContent"
        :key="index"
        class="col-12 col-md-4 text-center py-3"
      >
        <div class="project-page__summary__title mb-1">
          {{ item.title }}
        </div>
        <span class="project-page__summary__info">
          {{ item.info }}
        </span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'project-page-summary',
  props: {
    summaryContent: Array,
  },
}
</script>
