<template>
  <v-card
    :to="localePath({
      name: 'shop-category',
      params: {
        category: category.name,
      },
    })"
    tile
    class="category-card">
    <v-img :src="category.main_image"/>
    <h4 class="category-card__name">
      {{ $t(`filters.${category.name}`) }}
    </h4>
  </v-card>
</template>

<script>
export default {

  name: 'TheCategoryCard',

  props: {
    category: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
  .category-card {
    position: relative;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    overflow: hidden;

    &:hover {
      &::after {
        background-color: rgba($main-color, 0.7);
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(#000, .5);
      transition: background-color .3s;
    }
    &__name {
      @extend %cent;
      color: #fff;
      font-weight: normal;
      font-size: 24px;
      z-index: 1;
      text-align: center;
    }
  }
</style>
