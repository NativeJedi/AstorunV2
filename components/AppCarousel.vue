<template>
  <v-carousel
    :show-arrows="false"
    height="400"
    class="app-carousel">
    <v-carousel-item
      v-for="image in images"
      :key="image">
      <img
        :src="image"
        class="app-carousel__image">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {

  name: 'AppCarousel',

  props: {
    images: {
      type: Array,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
.app-carousel {
  width: 400px;
  background-color: #fff;

  &__image {
    height: 100%;
  }
}
</style>
