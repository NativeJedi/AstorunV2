export default function({ app }) {
  const orders = app.$cookies.get('orders');

  if (orders) {
    app.store.commit('Cart/SET_ORDERS', orders);
  }
}
