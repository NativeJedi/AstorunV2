<template>
  <div class="app-quantity-input">
    <v-text-field
      :value="value"
      dense
      type="number"
      @change="handleInput"/>
  </div>
</template>

<script>
export default {

  name: 'AppQuantityInput',

  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    value: {
      type: [Number, String],
      required: true,
    },
  },

  methods: {
    handleInput(inputValue) {
      const value = parseInt(inputValue, 10);

      if (!value || value < 1) {
        this.$emit('change', this.value);
        return;
      }

      this.$emit('change', value);
    },
  },

};
</script>

<style lang="scss">
  .app-quantity-input {
    max-width: 100px;
    .v-text-field__details {
      display: none;
    }
  }
</style>
