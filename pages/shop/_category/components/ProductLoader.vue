<template>
  <div class="product-loader">
    <app-card-loader
      v-for="index of 3"
      :key="index"/>
  </div>
</template>

<script>
import AppCardLoader from '~/components/loaders/AppCardLoader';

export default {

  name: 'ProductLoader',

  components: {
    AppCardLoader,
  },

};
</script>
