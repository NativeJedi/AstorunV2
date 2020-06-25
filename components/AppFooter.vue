<template>
  <footer class="footer">
    <div class="container footer__container">
      <nav class="footer__nav">
        <ul class="footer__list">
          <li
            v-for="link in navigation"
            :key="link.name"
            class="footer__item"
          >
            <nuxt-link
              :to="localePath({ name: link.name })"
              class="footer__link"
            >
              {{ $t(link.label) }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="footer__copy">&copy; Asto.run {{ currentYear }}</div>
    </div>
  </footer>
</template>

<script>
const navigation = [
  {
    label: 'links.faq',
    name: 'faq',
  },
  {
    label: 'links.rules',
    name: 'rules',
  },
  {
    label: 'links.partner',
    name: 'partnership',
  },
  {
    label: 'links.offer',
    name: 'offer',
  },
];

export default {

  name: 'AppFooter',

  data() {
    return {
      navigation,
    };
  },

  computed: {
    currentYear() {
      const date = new Date();

      return date.getFullYear();
    },
  },

};
</script>

<style lang='scss'>
.footer {
  margin-top: auto;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0 -1px 30px rgba(#000, .3);
  &__container {
    @extend %flex;
    align-items: baseline;
    @media only screen  and (max-width : 767px) {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
  &__nav {
    @media only screen  and (max-width : 767px) {
      width: 100%;
      margin-bottom: 15px;
      font-size: 12px;
    }
  }
  &__list {
    margin: 0;
    @media only screen  and (max-width : 767px) {
      text-align: center;
    }
  }
  &__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 30px;
      @media only screen  and (max-width : 767px) {
        margin-right: 15px;
      }
    }
  }

  &__link {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    color: $main-color;

    &:hover {
      text-decoration: underline;
    }
  }

  &__copy {
    font-weight: 500;
    margin-left: auto;
    @media only screen  and (max-width : 767px) {
      margin: 0 auto;
    }
  }
}
</style>
