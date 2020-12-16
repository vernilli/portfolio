<template>
  <div class="project-page__nav-container d-none d-xl-flex">
    <ul>
      <li
        v-for="item in anchors"
        :key="item.id"
        :to-element="item.id"
        @click="scrollToElement"
        :class="{ 'subsection': item.subsection }"
      >
        <button
          :class="{ 'active-item': item.id === activeItem }"
        >
          {{ item.heading }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "project-page-nav",
  props: {
    anchors: Array,
    activeItem: String,
  },
  methods: {
    scrollToElement: function(e) {
      e.preventDefault()
      const itemId = e.currentTarget.getAttribute("to-element")
      const offsetTop = document.getElementById(itemId).offsetTop
      scroll({
        top: (offsetTop - 80),
        behavior: "smooth"
      });
    },
  },
}
</script>
