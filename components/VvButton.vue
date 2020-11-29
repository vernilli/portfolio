<template>
  <nuxt-link
    :to="path"
    :class="[
      fullWidth ? 'w-100' : '',
      `vv-button ${buttonSize}`,
    ]"
    target="_blank"
  >
    <slot name="iconBefore"></slot>
    <span class="ml-1 mr-1">
      {{ text }}
    </span>
    <slot name="iconAfter"></slot>
  </nuxt-link>
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
}
</script>
