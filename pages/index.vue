<template>
  <section class="main-wrapper">
    <div class="container">
      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="logo-link">
        <img
          src="/images/logo.png"
          alt="Astorun">
      </nuxt-link>
      <nav class="main-nav">
        <nuxt-link
          :to="localePath({ name: 'shop' })"
          class="main-nav__link"
        >{{ $t('links.shop') }}</nuxt-link>
        <nuxt-link
          :to="{ name: 'news' }"
          class="main-nav__link"
        >{{ $t('links.news') }}</nuxt-link>
        <nuxt-link
          :to="{ name: 'collection' }"
          class="main-nav__link"
        >{{ $t('links.collection') }}</nuxt-link>
        <nuxt-link
          :to="{ name: 'contacts' }"
          class="main-nav__link"
        >{{ $t('links.contacts') }}</nuxt-link>
      </nav>

      <app-locales class="main-languages"/>
    </div>
  </section>
</template>

<script>
import AppLocales from '~/components/AppLocales';

export default {

  components: {
    AppLocales,
  },

};
</script>

<style lang="scss">
  .main-wrapper {
    @extend %bg-cover !optional;
    background-image: linear-gradient(to left, rgba(#000, 0.5), rgba(#000, 0.5)),
    url('~@/static/images/bg1.jpg');
    text-align: center;
    color: #fff;

    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding: 40px 0;
    }
  }

  .main-nav {
    margin-top: 60px;
    font-size: 24px;
    font-weight: bold;
    font-style: italic;

    &__link {
      display: block;
      padding: 5px 0;
      color: #fff;
      transition: color .2s;
      &:not(:last-child) {
        margin-bottom: 5px;
      }

      &:hover,
      &:focus {
        color: $main-color;
      }
    }
  }

  .main-languages {
    margin-top: auto;
    .app-locale-btn {
      text-decoration: none;
      color: #fff;
      font-size: 25px;
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;
      &:not(:last-child) {
        margin-right: 15px;
      }
      &.is-active {
        border-bottom: 2px solid $main-color;
        color: $main-color;
      }
    }
  }

  .logo-link {
    display: block;
    max-width: 250px;
    margin: 0 auto 20px auto;
    @media only screen and (max-width : 767px) {
      max-width: 200px;
    }
  }
</style>
