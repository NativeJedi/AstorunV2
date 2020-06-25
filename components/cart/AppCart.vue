<template>
  <app-dialog
    :visible="isOpened"
    @close="TOGGLE_CART">
    <div
      slot="title"
      class="basket-head">
      <h2 class="basket-head__title">Products in the cart</h2>
    </div>

    <div class="basket">
      <app-order-card
        v-for="(order, index) in orders"
        :key="`${order.size.id}-${index}`"
        :order="order"
        @delete="deleteOrder(order.size.id)"
        @changeQuantity="changeQuantity($event, order.size.id)"/>
    </div>

    <app-cart-form/>
  </app-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppDialog from '~/components/AppDialog';
import AppOrderCard from '~/components/cart/AppOrderCard';
import AppCartForm from '~/components/cart/AppCartForm';

export default {

  name: 'AppCart',

  components: {
    AppOrderCard,
    AppCartForm,
    AppDialog,
  },

  layout: 'main',

  computed: {
    ...mapGetters('Cart', ['orders', 'isOpened']),
  },

  methods: {
    ...mapMutations('Cart', [
      'TOGGLE_CART',
      'DELETE_ORDER',
      'CHANGE_QUANTITY',
    ]),

    deleteOrder(id) {
      this.DELETE_ORDER(id);
    },

    changeQuantity(quantity, sizeId) {
      this.CHANGE_QUANTITY({ id: sizeId, quantity });
    },
  },

};
</script>

<style lang="scss" scoped>
  .basket-head {
    &__title {
      font-weight: 500;
    }
  }
  .basket {
    background-color: #fff;
  }
</style>
