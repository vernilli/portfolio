<template>
  <div>
    <app-navbar site-language="en" />
    <nuxt />
  </div>
</template>

<script lang='ts'>
import AppNavbar from '~/components/AppNavbar.vue'

export default {
  components: {
    AppNavbar,
  },
}
</script>
