<template>
  <div class="q-pa-md" style="max-width: 100%; margin-bottom: -30px">
    <spinner v-if="spinner"></spinner>
    <q-list v-else-if="!spinner" @click="getRecipe(id)">
      <q-item :key="id" class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img :src="image_url">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ publisher}}</q-item-label>
          <q-item-label caption lines="1">{{ title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>
<script>
import Spinner from 'components/Spinner.vue'
export default {
  props: {
    id: {
      type: String,
      required: true
    },

    image_url: {
      type: String,
      required: true
    },

    publisher: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    }
  },
  components: {
    Spinner
  },
  data () {
    return {
      spinner: true
    }
  },
  methods: {
    changeSpinner () {
      this.spinner = false
    },
    getRecipe (id) {
      this.$emit('getRecipe', id)
    }
  },
  mounted () {
    this.changeSpinner()
  }
}
</script>
<style>
 .search-header{
     background-color: #FF8C00;
 }
</style>
