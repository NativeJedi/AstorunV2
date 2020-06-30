<template>
  <div class="app-cart-orders">
    <div class="app-cart-orders__body">
      <app-order-card
        v-for="(order, index) in orders"
        :key="`${order.size.id}-${index}`"
        :order="order"
        @delete="deleteOrder(order.size.id)"
        @changeQuantity="changeQuantity($event, order.size.id)"/>
    </div>

    <div class="app-cart-orders__footer">
      <v-btn
        block
        large
        color="primary"
        class="app-cart-orders__submit"
        @click="$emit('next')">
        Confirm
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppOrderCard from '~/components/cart/AppOrderCard';

export default {

  name: 'AppCartOrders',

  components: {
    AppOrderCard,
  },

  computed: {
    ...mapGetters('Cart', ['orders']),
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
  .app-cart-orders {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &__body {
      height: 100%;
      overflow-y: auto;
    }

    &__footer {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 65px;
      background-color: #fff;
    }
  }
</style>
