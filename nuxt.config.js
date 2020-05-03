import en from './locales/en';
import ru from './locales/ru';
import ua from './locales/ua';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'astorun',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Astorun - your online shop' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  styleResources: {
    scss: [
      'assets/styles/tools/tools.scss',
    ],
  },
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      defaultLocale: 'ru',
      locales: [{
        code: 'ru',
        iso: 'ru-RU',
      }, {
        code: 'en',
        iso: 'en-US',
      }, {
        code: 'ua',
        iso: 'ua-UA',
      }],
      vueI18n: {
        fallbackLocale: 'ru',
        messages: {
          en,
          ru,
          ua,
        },
      },
    }],
  ],
};
