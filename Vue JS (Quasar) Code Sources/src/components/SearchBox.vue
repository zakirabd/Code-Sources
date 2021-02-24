<template>
  <div class="q-pa-md" style="max-width: 100%">
    <spinner v-if="spinner"></spinner>
    <q-form v-else-if="!spinner">
      <q-input
        v-model="searchInput"
        label="Search Your Recipe (Example: Pizza)"
        lazy-rules
        class="search-box"
        v-on:change="onChangeInput"
      />
    </q-form>
  </div>
</template>
<script>
import Spinner from 'components/Spinner.vue'
export default {
  name: 'SearchBox',
  components: {
    Spinner
  },
  data () {
    return {
      spinner: true,
      searchInput: ''
    }
  },
  methods: {
    onChangeInput () {
      this.$emit('searchBox', this.searchInput)
      this.searchInput = ''
    },
    changeSpinner () {
      this.spinner = false
    }
  },
  mounted () {
    this.changeSpinner()
  }
}
</script>
<style>
  .search-box{
      background-color: none;
      max-width: 100%;
      color: #fff !important;
  }
</style>
