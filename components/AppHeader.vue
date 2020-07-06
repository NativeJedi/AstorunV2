<template>
  <header class="header">
    <div class="container header__container">
      <nuxt-link
        :to="localePath({ name: 'index'} )"
        class="logo">
        <img
          class="logo__img"
          src="/images/logo1.png"
          alt="astorun">
      </nuxt-link>

      <v-app-bar-nav-icon class="btn-menu"/>

      <nav class="nav">
        <ul class="nav__list">
          <li
            v-for="link in navigation"
            :key="link.name"
            class="nav__item">
            <nuxt-link
              :to="localePath({ name: link.name })"
              class="nav__link"
            >{{ $t(link.text) }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <v-btn
        icon
        color="primary"
        class="header__cart"
        @click="TOGGLE_CART(true)">
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <app-locales class="header__languages btn-group"/>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex';
import AppLocales from '~/components/AppLocales';

const navigation = [
  {
    text: 'links.shop',
    name: 'shop',
  },
  // {
  //   text: 'links.collection',
  //   name: 'collection',
  // },
  // {
  //   text: 'links.contacts',
  //   name: 'contacts',
  // },
  // {
  //   text: 'links.news',
  //   name: 'news',
  // },
];

export default {

  name: 'AppHeader',

  components: {
    AppLocales,
  },

  data() {
    return {
      navigation,
      isMenuActive: false,
    };
  },

  methods: {
    ...mapMutations('Cart', ['TOGGLE_CART']),
  },

};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 0 5px 0;
  background-color: #fff;
  box-shadow: 0 1px 20px rgba(#000, .5);
  z-index: 5;
  transition: transform .3s ease-in-out;
  &.is-hidden {
    transform: translateY(-100%);
  }

  &__container {
    @extend %flex-ac;
    line-height: 16px;
  }

  &__cart {
    margin-left: auto;
  }

  &__languages {
    margin-left: 20px;
    text-transform: uppercase;
    font-weight: bold;
    .app-locale-btn.is-active {
      border-bottom: 2px solid $main-color;
      color: $main-color;
    }

    @media only screen and (max-width : 767px) {
      margin-bottom: 30px;
    }
  }
}

.logo {
  display: block;
  width: 70px;
  &__img {
    max-width: 100%;
  }
  @media only screen  and (max-width : 767px) {
    order: 1;
  }
}

.nav {
  margin-left: 60px;
  text-transform: uppercase;
  font-weight: 500;

  @media only screen and (max-width : 767px) {
    margin: auto 0;
    font-weight: bold;
  }
  &__list {
    @extend %flex;
    @media only screen and (max-width : 767px) {
      flex-direction: column;
      text-align: center;
      color: #fff;
    }
  }
  &__item {
    &:not(:last-child) {
      margin-right: 40px;
      @media only screen and (max-width : 767px) {
        margin: 0 0 30px 0;
      }
    }
  }
  &__link {
    &:hover {
      color: $main-color;
    }
    &.nuxt-link-active {
      color: $main-color;
      border-bottom: 2px solid currentColor;
    }
  }
}

.btn-menu {
  display: none;
  order: 2;
  @media only screen and (max-width : 767px) {
    display: block;
  }
}

.scroll-disable {
  overflow: hidden;
}
</style>
