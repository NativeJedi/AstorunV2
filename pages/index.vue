<template>
  <section class="main-wrapper">
    <div class="container">
      <nuxt-link
        :to="{ name: 'index' }"
        class="logo-link">
        <img
          src="~assets/images/logo.png"
          alt="Astorun">
      </nuxt-link>
      <nav class="main-nav">
        <nuxt-link
          :to="{ name: 'shop' }"
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
      <div class="languages btn-group">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          :class="['languages__btn', {'is-active': activeLocaleCode === locale.code}]"
        >{{ locale.code }}</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },

    activeLocaleCode() {
      return this.availableLocales.find((i) => i.code !== this.$i18n.locale)?.code;
    },
  },
};
</script>

<style lang="scss" scoped>
  .main-wrapper {
    @extend %bg-cover !optional;
    background-image: linear-gradient(to left, rgba(#000, 0.5), rgba(#000, 0.5)),
    url('~@/assets/images/bg1.jpg');
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

  .languages {
    margin-top: auto;
    &__btn {
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
</style>
