<template>
  <nuxt-link
    v-if="!isExternalLink"
    :to="path"
    :class="[
      fullWidth ? 'w-100' : '',
      `vv-button ${buttonSize}`,
    ]"
    :title="text"
    target="_blank"
  >
    <slot name="iconBefore"></slot>
    <span class="ml-1 mr-1">
      {{ text }}
    </span>
    <slot name="iconAfter"></slot>
  </nuxt-link>

  <a
    v-else
    :href="path"
    :class="[
      fullWidth ? 'w-100' : '',
      `vv-button ${buttonSize}`,
    ]"
    :title="text"
    target="_blank"
  >
    <slot name="iconBefore"></slot>
    <span class="ml-1 mr-1">
      {{ text }}
    </span>
    <slot name="iconAfter"></slot>
  </a>
</template>

<script>
export default {
  name: "vv-button",
  props: {
    text: String,
    path: {
      type: String,
      required: true,
    },
    buttonSize: {
      type: String,
      default: 'md',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isExternalLink: function() {
      return (this.path).includes('http')
    },
  }
}
</script>
