<template>
  <v-form
    ref="form"
    v-model="isValid"
    class="app-cart-form"
    @submit.native.prevent="handleSubmit">
    <v-text-field
      v-model="form.name"
      :rules="rules.name"
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
      :prefix="countryCode"
      label="Phone"
      placeholder="(99) 999-99-99"
      type="phone"
      prepend-inner-icon="mdi-phone"/>

    <v-btn
      :loading="isLoading"
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
import { mapGetters } from 'vuex';
import { COUNTRY_CODES } from '~/constants/countryCodes';
import { EmailRule } from '~/validation/rules/email';
import { RequiredRule } from '~/validation/rules/required';

const getFormResult = (formText, [key, value]) => {
  const field = `${key}: ${value}`;

  if (!formText) {
    return field;
  }

  return `${formText}\n${field}`;
};

export default {

  name: 'AppCartForm',

  data() {
    return {
      isValid: false,
      isLoading: false,
      countryCode: COUNTRY_CODES.UA,
      form: {
        name: '',
        email: '',
        phone: '',
      },
      rules: {
        email: [
          EmailRule.call(this),
          RequiredRule.call(this),
        ],
        name: [
          RequiredRule.call(this),
        ],
        phone: [
          RequiredRule.call(this),
        ],
      },
    };
  },

  computed: {
    ...mapGetters('Cart', ['orders']),
  },

  methods: {
    async handleSubmit() {
      const isValid = this.$refs.form.validate();

      if (!isValid) return;

      const form = {
        ...this.form,
        phone: `${this.countryCode} ${this.form.phone}`,
      };

      const formTextResult = Object.entries(form).reduce(getFormResult, '');

      this.isLoading = true;
      const orderId = await this.makeOrder({
        anonymous: formTextResult,
      });
      const isSuccess = await this.sendOrderItems(orderId);
      this.isLoading = false;

      if (isSuccess) {
        this.$emit('next');
      }
    },

    async makeOrder(data) {
      const [order] = await this.$api.post('/shop/orders/', data);

      return order?.id;
    },

    async sendOrderItems(order) {
      if (!order) {
        return null;
      }

      const orders = this.orders.map(({ size, quantity }) => ({
        item: size.id,
        quantity,
        order,
      }));

      const [response] = await this.$api.post('shop/order_items/', orders);

      return Boolean(response);
    },
  },

};
</script>

<style lang="scss">
  .app-cart-form {
    position: relative;
    flex-grow: 1;
    padding-bottom: 75px;
    height: 100%;

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
