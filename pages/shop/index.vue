<template>
  <div class="container">
    <h1 class="main-title">{{ $t('shop.title') }}</h1>

    <nav class="shop-nav">
      <ul class="shop-nav__list">
        <li
          v-for="category in categories"
          :key="category.id"
          class="shop-nav__item">
          <TheCategoryCard :category="category"/>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TheCategoryCard from '~/pages/shop/components/TheCategoryCard';

export default {

  components: {
    TheCategoryCard,
  },

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
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, 250px);
    justify-content: center;
    grid-gap: 24px;
  }
}
</style>
