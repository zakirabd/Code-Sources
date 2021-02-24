<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="currentPagination"
      color="deep-orange"
      :max="pageNumber"
      :boundary-links="true"
      @click="changePage"
    >
    </q-pagination>
  </div>
</template>
<script>
export default {
  props: {
    pageNumber: {
      type: Number
    },
    currentPagination: {
      type: Number
    }
  },
  methods: {
    changePage () {
      this.$emit('getPagination', this.currentPagination)
    }
  }
}
</script>
