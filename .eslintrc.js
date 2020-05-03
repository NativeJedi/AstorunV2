module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'semi': ['error', 'always'],
    'import/extensions': ['error', 'never'],
    'nuxt/no-cjs-in-config': 'off',
    'import/no-extraneous-dependencies': ['error', {'packageDir': ['./', './node_modules/@nuxt/vue-app']}],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/html-closing-bracket-spacing': ['error', {
      'endTag': 'never',
      'selfClosingTag': 'never',
    }],
    'space-before-function-paren': ['error', 'never'],
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': [
          'state'
        ],
      },
    ],
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: ['state'] }],
    'import/resolver': {
      webpack: './webpack.config.js',
    },
  },
};
