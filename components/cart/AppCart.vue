<template>
  <app-dialog
    :visible="isOpened"
    @close="TOGGLE_CART">
    <div
      slot="title"
      class="basket-head">
      <v-btn
        v-if="currentStep.back"
        icon
        class="basket-head__back"
        @click="currentStep = currentStep.back()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h2 class="basket-head__title">{{ currentStep.title }}</h2>
    </div>

    <transition-group
      tag="div"
      name="fade"
      class="basket-body">
      <component
        :is="currentStep.name"
        :key="currentStep.name"
        @next="currentStep = currentStep.next()"/>
    </transition-group>
  </app-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppDialog from '~/components/AppDialog';
import AppCartForm from '~/components/cart/AppCartForm';
import AppCartOrders from '~/components/cart/AppCartOrders';
import AppCartOrderSuccess from '~/components/cart/AppCartOrderSuccess';

const steps = {
  AppCartOrders: {
    name: 'AppCartOrders',
    next: () => steps.AppCartForm,
    title: 'Products in the cart',
  },
  AppCartForm: {
    name: 'AppCartForm',
    back: () => steps.AppCartOrders,
    next: () => steps.AppCartOrderSuccess,
    title: 'Fill in information below',
  },
  AppCartOrderSuccess: {
    name: 'AppCartOrderSuccess',
    title: 'The order is confirmed',
  },
};

export default {

  name: 'AppCart',

  components: {
    AppCartOrders,
    AppCartForm,
    AppCartOrderSuccess,
    AppDialog,
  },

  layout: 'main',

  data: () => ({
    currentStep: steps.AppCartOrders,
  }),

  computed: {
    ...mapGetters('Cart', ['isOpened']),
  },

  methods: {
    ...mapMutations('Cart', [
      'TOGGLE_CART',
    ]),
  },

};
</script>

<style lang="scss" scoped>
  .basket-head {
    display: flex;
    &__title {
      font-weight: 500;
    }

    &__back {
      margin-right: 10px;
      .v-icon {
        font-size: 28px;
        color: #fff;
      }
    }
  }

  .basket-body {
    height: calc(100vh - 116px);
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transition: opacity .3s;
  }
</style>
