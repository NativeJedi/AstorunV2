<template>
  <div class="container">
    <h1 class="main-title">{{ $t('shop.title') }}</h1>

    <nav class="shop-nav">
      <ul class="shop-nav__list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="shop-nav__item">
          <nuxt-link
            :to="localePath({
              name: 'shop-category',
              params: {
                category: category.name,
              },
            })"
            class="shop-nav__link"
          >{{ $t(`filters.${category.name}`) }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {

  layout: 'main',

  computed: {
    ...mapGetters('Categories', ['categories']),
  },

  created() {
    this.getCategories();
  },

  methods: {
    ...mapActions('Categories', ['getCategories']),
  },

};
</script>

<style lang="scss">
.shop-nav {
  text-align: center;

  &__item {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__link {
    font-size: 20px;
    color: $main-color;
    text-transform: uppercase;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
