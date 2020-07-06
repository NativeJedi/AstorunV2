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
  css: [
    'normalize.css/normalize.css',
    { src: 'assets/styles/layout/main.scss', lang: 'scss' },
  ],
  extractCSS: true,
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',
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
  plugins: [
    'plugins/api-inject.js',
    'plugins/onAppInit.js',
    'plugins/mask.js',
  ],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#dd5145',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
  proxy: {
    '/api': {
      target: 'http://35.246.141.227/api',
      secure: false,
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
