import { api } from '~/utils/api';

const state = () => ({
  categories: [],
});

const getters = {
  categories: ({ categories }) => categories,
  getCategoryByName: ({ categories }) => (name) => categories.find((c) => c.name === name),
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
};

const actions = {
  async getCategories({ commit }) {
    const [response, error] = await api.get('/shop/categories/');

    if (response) {
      commit('SET_CATEGORIES', response.results);
    }

    return [response, error];
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
