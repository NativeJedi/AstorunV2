<template>
  <v-card
    max-width="300px"
    shaped
    class="product-card"
    aria-label="View product"
    @click="handleDetailsClick">
    <v-img
      :src="product.main_image"
      height="200px"/>

    <v-card-title>{{ product.name }}</v-card-title>

    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

  name: 'ProductCard',

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    baseURL: 'http://35.246.141.227',
  }),

  methods: {
    handleDetailsClick() {
      this.$emit('viewProduct', this.product);
    },
  },

};
</script>
