<template>
  <v-card class="basket-card">
    <img
      :src="`${baseURL}${product.main_image}`"
      :alt="product.name"
      class="basket-card__img">

    <div class="basket-card__info">
      <h3 class="basket-card__title">{{ product.name }}</h3>

      <div class="basket-card__row">
        <span class="basket-card__label">Size:</span>
        <span class="basket-card__value">{{ size.name.name }}</span>
      </div>

      <div class="basket-card__row">
        <span class="basket-card__label">Price:</span>
        <span class="basket-card__value">{{ product.price }}</span>
      </div>

      <div class="basket-card__row">
        <span class="basket-card__label">Quantity:</span>
        <app-quantity-input
          :value="order.quantity"
          @change="handleQuantityChange"/>
      </div>
    </div>

    <div class="basket-card__actions">
      <v-btn
        icon
        @click="$emit('delete')">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
import AppQuantityInput from '~/components/AppQuantityInput';

export default {

  name: 'AppOrderCard',

  components: {
    AppQuantityInput,
  },

  props: {
    order: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    baseURL: 'http://35.246.141.227',
  }),

  computed: {
    product() {
      return this.order.product;
    },

    size() {
      return this.order.size;
    },
  },

  methods: {
    handleQuantityChange(value) {
      this.$emit('changeQuantity', value);
    },
  },

};
</script>

<style lang="scss" scoped>
  .basket-card {
    display: grid;
    grid-template-columns: 120px 1fr 24px;
    padding: 20px;
    margin-bottom: 20px;

    &__info {
      margin-left: 20px;
    }


    &__title {
      font-size: 18px;
      margin: 0 0 10px 0;
    }

    &__row {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    &__label {
      display: inline-block;
      min-width: 75px;
    }

    &__value {
      font-weight: bold;
      color: $main-color;
    }
  }
</style>
