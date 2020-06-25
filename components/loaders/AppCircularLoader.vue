<template>
  <div class="flex-container">
    <slot v-show="!loading"/>

    <v-progress-circular
      v-show="loading"
      :size="90"
      :width="5"
      color="primary"
      indeterminate
      class="app-circular-loader"/>
  </div>
</template>

<script>
export default {

  name: 'AppCircularLoader',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    contentLoaded: {
      type: Boolean,
      default: true,
    },
  },

};
</script>

<style lang="scss">
.app-circular-loader {
  @extend %cent;
}
</style>
