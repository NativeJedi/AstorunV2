<template>
  <div class="container flex-container">
    <app-circular-loader :loading="!isLoaded">
      <div
        v-if="isLoaded"
        class="product-view">
        <h1 class="product-view__title">{{ product.name }}</h1>

        <div class="product-view__body">
          <app-carousel :images="imageUrls"/>

          <div class="product-view__info-container">
            <div class="product-info">
              <div class="product-info__price">{{ product.price }}</div>

              <v-select
                v-model="selectedSizeId"
                :items="sizes"
                :label="$t('label.size')"
                class="product-info__select"
                item-color="primary"
                solo
                dense
                item-text="name.name"
                item-value="id"
                color="primary"/>

              <v-btn
                :hide-details="true"
                :loading="isProductLoading"
                class="product-info__btn"
                color="primary"
                outlined
                @click="addProduct">
                Buy
              </v-btn>
            </div>

            <p class="product-view__description">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </app-circular-loader>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppCarousel from '~/components/AppCarousel';
import AppCircularLoader from '~/components/loaders/AppCircularLoader';
import config from '~/config';

export default {

  name: 'ShopProductPage',

  layout: 'main',

  components: {
    AppCarousel,
    AppCircularLoader,
  },

  data: () => ({
    baseURL: config.baseURL,
    product: null,
    images: [],
    sizes: [],
    isLoaded: false,
    isProductLoading: false,
    selectedSizeId: null,
  }),

  computed: {
    productId() {
      return this.$route.params.product;
    },

    imageUrls() {
      const mainImage = this.product?.['main_image'];
      const imageUrls = this.images.map((item) => item.image);

      return [mainImage, ...imageUrls];
    },
  },

  async created() {
    await Promise.all([
      this.getProduct(),
      this.getProductImages(),
      this.getProductSizes(),
    ]);

    this.isLoaded = true;
  },

  methods: {
    ...mapActions('Cart', ['addProductToCart']),

    async getProduct() {
      [this.product] = await this.$api.get(`shop/products/${this.productId}`);
    },

    async getProductImages() {
      const [response] = await this.$api.get('shop/images/', {
        params: {
          product: this.productId,
        },
      });

      this.images = response?.results || [];
    },

    async getProductSizes() {
      const [response] = await this.$api.get('shop/sizes/', {
        params: {
          product: this.productId,
        },
      });

      this.sizes = response?.results || [];
      this.selectedSizeId = this.sizes[0]?.id;
    },

    async addProduct() {
      this.isProductLoading = true;
      await this.addProductToCart(this.selectedSizeId);
      this.isProductLoading = false;
    },
  },

};
</script>

<style lang="scss">
  .product-view {
    text-align: center;

    &__body {
      display: flex;
    }

    &__info-container {
      padding-left: 40px;
    }

    &__title {
      margin: 40px 0;
    }

    &__description {
      max-width: 400px;
      margin: 20px auto;
      text-align: left;
    }
  }
  .product-info {
    display: flex;
    align-items: center;

    &__price {
      font-size: 18px;
      font-weight: bold;
      margin-right: 40px;
      color: $main-color;
    }

    &__select {
      max-width: 100px;
      margin-right: 20px;

      .v-text-field__details {
        display: none;
      }
    }
    &__btn {
      margin-left: 15px;
    }
  }
</style>
