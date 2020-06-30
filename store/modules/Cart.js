import { api } from '~/utils/api';

const addOrderWithQuantity = (stateOrders, order) => {
  const orders = [...stateOrders];

  const stateOrder = orders.find(({ size }) => order.size.id === size.id);

  if (stateOrder) {
    stateOrder.quantity += 1;
    return orders;
  }

  return [...orders, { ...order, quantity: 1 }];
};

function setOrders(state, orders) {
  state.orders = orders;
  this.$cookies.set('orders', orders);
}

const state = () => ({
  orders: [],
  isOpened: false,
});

const getters = {
  isOpened: ({ isOpened }) => isOpened,
  orders: ({ orders }) => orders,
};

const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders;
  },

  ADD_ORDER(state, order) {
    const orders = state.orders.length
      ? addOrderWithQuantity(state.orders, order)
      : [{ ...order, quantity: 1 }];

    setOrders.call(this, state, orders);
  },

  DELETE_ORDER(state, id) {
    const orders = state.orders.filter(({ size }) => size.id !== id);

    setOrders.call(this, state, orders);
  },

  TOGGLE_CART(state) {
    state.isOpened = !state.isOpened;
  },

  CHANGE_QUANTITY(state, { quantity, id }) {
    const orders = state.orders.map((order) => {
      if (order.size.id === id) {
        return {
          ...order,
          quantity,
        };
      }

      return order;
    });

    setOrders.call(this, state, orders);
  },
};

const actions = {
  async addProductToCart({ commit }, sizeId) {
    const [sizes] = await api.post('shop/sizes/by_ids/', {
      ids: [sizeId],
    });

    const size = sizes?.[0] || {};
    const productId = size.product;

    const [products] = await api.post('shop/products/by_ids/', {
      ids: [productId],
    });

    const [product] = products || [];

    commit('ADD_ORDER', {
      size,
      product,
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
