<template>
  <div class="app-pagination flex-container">
    <div class="app-pagination__records">
      <slot
        v-if="isLoading"
        name="loader"/>

      <slot v-else/>
    </div>

    <div
      v-if="emptyRecords"
      class="app-pagination__placeholder">
      {{ $t(emptyText) }}
    </div>

    <v-pagination
      v-if="count"
      :value="page"
      :length="pages"
      @input="loadData"/>
  </div>
</template>

<script>
import AppCardLoader from '~/components/loaders/AppCardLoader';

export default {

  name: 'AppPagination',

  components: {
    AppCardLoader,
  },

  model: {
    prop: 'records',
    event: 'change',
  },

  props: {
    onLoad: {
      type: Function,
      required: true,
    },

    records: {
      type: Array,
      required: true,
    },

    emptyText: {
      type: String,
      default: 'placeholder.products',
    },
  },

  data() {
    return {
      page: null,
      count: null,
      results: [],
      isLoading: false,
      isLoaded: false,
    };
  },

  computed: {
    emptyRecords() {
      return this.isLoaded && !this.records?.length && !this.isLoading;
    },

    pages() {
      const pages = Math.ceil(this.count / 6);
      return pages > 1 ? pages : 1;
    },
  },

  async created() {
    await this.loadData(1);
    this.isLoaded = true;
  },

  methods: {
    async loadData(page) {
      this.isLoading = true;
      const [response] = await this.onLoad({
        page,
        page_size: 6,
      });
      this.isLoading = false;

      if (response) {
        this.count = response.count;
        this.page = page || 1;
      }

      this.$emit('change', response?.results || []);
    },
  },

};
</script>

<style lang="scss">
  .app-pagination {
    &__records {
      padding: 30px 0;
    }
    .v-pagination {
      margin-top: auto;
    }

    &__placeholder {
      font-size: 22px;
      text-align: center;
      color: $placeholder-color;
    }
  }
</style>
