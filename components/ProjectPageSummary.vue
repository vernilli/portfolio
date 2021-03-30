<template>
  <div class="container--expanded my-4 mb-md-1 px-3 px-4 w-100">
    <div class="project-page__summary d-flex flex-wrap justify-content-center m-auto p-3 py-md-4">

      <div 
        v-for="(item, index) in summaryContent"
        :key="index"
        class="d-flex col-12 col-md-4 py-3 pr-4"
      >
        <div class="project-page__summary__emoji">
          {{ item.emoji }}
        </div>
        <div class="flex-grow-1 pl-3">
          <div class="project-page__summary__title mb-1">
            {{ item.title }}
          </div>
          <span class="project-page__summary__info">
            {{ item.info }}
          </span>
        </div>
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
