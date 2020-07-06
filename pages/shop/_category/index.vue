<template>
  <div class="flex-container">
    <v-card>
      <v-card-title>
        <h1 class="shop-title">
          {{ $t('shop.title') }}
        </h1>
      </v-card-title>

      <v-tabs
        v-model="selectedTabIndex"
        centered
        color="primary"
        grow>
        <v-tab
          v-for="gender in genders"
          :key="gender.name">
          {{ $t(gender.label) }}
        </v-tab>
      </v-tabs>
    </v-card>

    <div class="container flex-container">
      <app-pagination
        v-if="isLoaded"
        ref="pagination"
        v-model="products"
        :on-load="loadProductsByFilter">
        <product-loader
          slot="loader"
          class="product-grid"/>

        <div class="product-grid">
          <app-product-card
            v-for="product in products"
            :key="product.id"
            :product="product"
            @viewProduct="handleView"/>
        </div>
      </app-pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppPagination from '~/components/AppPagination';
import ProductLoader from './components/ProductLoader';
import AppProductCard from './components/AppProductCard';

const genders = [
  {
    value: 'man',
    label: 'categories.man',
  },
  {
    value: 'woman',
    label: 'categories.woman',
  },
  {
    value: 'kids',
    label: 'categories.kids',
  },
];

export default {

  name: 'ShopCategoryPage',

  layout: 'main',

  components: {
    ProductLoader,
    AppPagination,
    AppProductCard,
  },

  data: () => ({
    genders,
    selectedTabIndex: 0,
    products: [],
    isLoaded: false,
  }),

  computed: {
    ...mapGetters('Categories', ['getCategoryByName']),

    selectedCategory() {
      return this.getCategoryByName(this.$route.params.category);
    },
  },

  watch: {
    selectedTabIndex: {
      handler() {
        this.$refs.pagination.loadData();
      },
    },
  },

  async created() {
    await this.getCategories();
    this.isLoaded = true;
  },

  methods: {
    ...mapActions('Categories', ['getCategories']),

    loadProductsByFilter(params = {}) {
      return this.$api.get('/shop/products', {
        params: {
          ...params,
          category: this.selectedCategory.id,
          gender: this.selectedTabIndex,
        },
      });
    },

    handleView({ id }) {
      this.$router.push(this.localePath({
        name: 'shop-category-product',
        params: {
          product: id,
        },
      }));
    },
  },

};
</script>

<style lang="scss">
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: 30px;
  justify-content: center;
}

.shop-title {
  width: 100%;
  margin: 20px 0 0 0;
  text-align: center;
}
</style>
