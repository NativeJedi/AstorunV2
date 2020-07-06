<template>
  <div class="app-order-success">
    <img
      class="app-order-success__img"
      src="/images/logo1.png"
      alt="astorun">

    <div class="app-order-success__text">
      <p>Thank you for your purchase</p>
      <p>We will contact you to clarify order details!</p>
    </div>

    <app-direction-link
      :to="localePath({ name: 'shop' })"
      @click="TOGGLE_CART(false)">
      Back to shop
    </app-direction-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import AppDirectionLink from '~/components/AppDirectionLink';

export default {

  name: 'AppCartOrderSuccess',

  components: {
    AppDirectionLink,
  },

  methods: {
    ...mapMutations('Cart', ['TOGGLE_CART']),
  },

};
</script>

<style lang="scss" scoped>
  .app-order-success {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    &__text {
      font-size: 18px;
      margin-bottom: 20px;
      line-height: 24px;

      p {
        margin: 0;
      }
    }

    &__img {
      display: block;
      max-width: 200px;
      margin: 0 auto 40px auto;
    }
  }
</style>
