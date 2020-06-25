<template>
  <v-app>
    <div class="app-main-wrapper">
      <app-header/>
      <section class="section">
        <nuxt/>
      </section>
      <app-footer/>
    </div>

    <app-cart/>
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter';
import AppHeader from '~/components/AppHeader';
import AppCart from '~/components/cart/AppCart';

export default {

  name: 'MainLayout',

  components: {
    AppCart,
    AppFooter,
    AppHeader,
  },

};
</script>
