<template>
  <transition name="modal-fade">
    <div
      v-show="visible"
      ref="overlay"
      class="modal-overlay">
      <div
        ref="modal"
        :style="{
          width: `${width}px`,
        }"
        class="modal flex-container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
        <header class="modal__header">
          <slot name="title">
            <h2 v-if="title">{{ $t(title) }}</h2>
          </slot>

          <v-btn
            icon
            aria-label="Close modal"
            color="#fff"
            class="modal__close"
            @click="handleClose">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </header>

        <section class="modal__body flex-container">
          <slot/>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

  name: 'AppDialog',

  model: {
    prop: 'visible',
    event: 'change',
  },

  props: {
    width: {
      type: Number,
      default: 500,
    },

    visible: {
      type: Boolean,
      required: true,
    },

    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    scrollWidth() {
      return window.innerWidth - document.body.clientWidth;
    },
  },

  watch: {
    visible() {
      const { style } = document.body;

      if (this.visible) {
        style.paddingRight = `${this.scrollWidth}px`;
        style.overflow = 'hidden';
        this.$emit('open');
      } else {
        style.paddingRight = null;
        style.overflow = null;
      }
    },
  },

  methods: {
    handleClose() {
      this.$emit('change', false);
      this.$emit('close');
    },
  },

};
</script>

<style lang="scss" scoped>
  .modal-overlay {
    overflow: hidden;
    transition: opacity .2s;
    backface-visibility: visible;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2000;
    background-color: rgba(#000, .3);
  }

  .modal {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    background-color: #fff;
    z-index: 20;
    transition: transform .5s;
    overflow: auto;

    @media only screen and (max-width: 767px) {
      width: 100% !important;
    }

    &__header {
      position: relative;
      display: flex;
      padding: 20px 60px 20px 20px;
      background-color: $main-color;
      color: #fff;
    }

    &__close {
      @extend %cent-y;
      right: 10px;
    }

    &__body {
      height: 100%;
      padding: 20px;
    }
  }

  .modal-fade-enter, .modal-fade-leave-to {
    opacity: 0;
    .modal {
      transform: translateX(100%);
    }
  }
</style>
