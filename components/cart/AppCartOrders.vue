<template>
  <div class="app-cart-orders">
    <app-cart-orders-placeholder v-if="!orders.length"/>

    <template v-else>
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
    </template>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppCartOrdersPlaceholder from '~/components/cart/AppCartOrdersPlaceholder';
import AppOrderCard from '~/components/cart/AppOrderCard';

export default {

  name: 'AppCartOrders',

  components: {
    AppCartOrdersPlaceholder,
    AppOrderCard,
  },

  computed: {
    ...mapGetters('Cart', ['orders']),
  },

  methods: {
    ...mapMutations('Cart', [
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

    &__placeholder {
      font-size: 20px;
      font-weight: 500;
      text-align: center;
    }
  }
</style>
