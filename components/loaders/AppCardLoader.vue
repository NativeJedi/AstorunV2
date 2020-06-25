<template>
  <div class="app-card-loader">
    <v-skeleton-loader type="card"/>
    <div class="app-card-loader__row">
      <v-skeleton-loader type="button"/>
      <v-skeleton-loader type="actions"/>
    </div>
  </div>
</template>

<script>
export default {

  name: 'AppCardLoader',

};
</script>

<style lang="scss">
  .app-card-loader {
    max-width: 300px;
    width: 100%;

    &__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px 12px 12px;
      background-color: #fff;
    }

    .v-skeleton-loader {
      &__actions {
        padding: 0;

        &.v-skeleton-loader__bone {
          display: flex;
        }
      }

      &__heading {
        margin: 12px;
      }
    }
  }
</style>
