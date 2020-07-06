<template>
  <div class="app-orders-placeholder">
    <p class="app-orders-placeholder__text">There are no goods in your basket yet</p>

    <app-direction-link
      :to="localePath({ name: 'shop' })"
      @click="TOGGLE_CART(false)">
      Go to shop
    </app-direction-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import AppDirectionLink from '~/components/AppDirectionLink';

export default {

  name: 'AppCartOrdersPlaceholder',

  components: {
    AppDirectionLink,
  },

  methods: {
    ...mapMutations('Cart', ['TOGGLE_CART']),
  },

};
</script>

<style lang="scss" scoped>
 .app-orders-placeholder {
   padding: 20px 0;
   text-align: center;
   font-size: 18px;
   font-weight: 500;
 }
</style>
