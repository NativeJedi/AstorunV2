<template>
  <nuxt-link
    :to="to"
    class="app-direction-link"
    @click.native="$emit('click', $event)">
    <slot/>
    <v-icon
      class="app-direction-link__icon"
      color="primary">mdi-chevron-right</v-icon>
  </nuxt-link>
</template>

<script>
export default {

  name: 'AppDirectionLink',

  props: {
    to: {
      type: [Object, String],
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
  .app-direction-link {
    font-size: 24px;
    font-weight: 500;
    border-bottom: 2px solid transparent;

    &:hover,
    &:focus {
      border-color: currentColor;

      .app-direction-link__icon {
        transform: translateX(5px);
      }
    }
  }
</style>
