<template>
  <div>
    <app-navbar />
    <nuxt />
  </div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue'

export default {
  components: {
    AppNavbar,
  },
}
</script>
