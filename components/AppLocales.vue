<template>
  <div class="app-locales">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :class="['app-locale-btn', {'is-active': activeLocaleCode === locale.code}]"
    >{{ locale.code }}</nuxt-link>
  </div>
</template>

<script>
export default {

  name: 'AppLocales',

  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },

    activeLocaleCode() {
      return this.availableLocales.find((i) => i.code === this.$i18n.locale)?.code;
    },
  },

};
</script>
