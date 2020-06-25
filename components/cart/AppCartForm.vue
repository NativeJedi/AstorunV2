<template>
  <v-form
    v-model="isValid"
    class="app-cart-form"
    @submit.native.prevent="handleSubmit">
    <v-text-field
      v-model="form.name"
      label="Name"
      prepend-inner-icon="mdi-account"/>

    <v-text-field
      v-model="form.email"
      :rules="rules.email"
      label="E-mail"
      type="email"
      prepend-inner-icon="mdi-email"/>

    <v-text-field
      v-mask="'(##) ### ## ##'"
      v-model="form.phone"
      :rules="rules.phone"
      label="Phone"
      prefix="+380"
      placeholder="(99) 999-99-99"
      type="phone"
      prepend-inner-icon="mdi-phone"/>

    <v-btn
      block
      large
      type="submit"
      color="primary"
      class="app-cart-form__submit">
      Order
    </v-btn>
  </v-form>
</template>

<script>
import { EmailRule } from '~/validation/rules/email';

export default {

  name: 'AppCartForm',

  data() {
    return {
      isValid: false,
      form: {
        email: '',
      },
      rules: {
        email: [
          EmailRule.call(this),
        ],
      },
    };
  },

  methods: {
    handleSubmit() {
      console.log('submit');
    },
  },

};
</script>

<style lang="scss">
  .app-cart-form {
    position: relative;
    flex-grow: 1;
    padding-bottom: 75px;

    .v-input {
      margin-bottom: 10px;
    }

    &__submit {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
