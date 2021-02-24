<template>
  <q-page>
    <div class="containers">
      <Spinner v-if="spinner" />
      <slider  v-else-if="!spinner"></slider>
      <SearchBox @searchBox="getSearchInput" />
      <div class="search_result_box" v-if="searchBox">
        <div
          v-for="(results, index) in searchResluts"
          :key="results.id"
        >
          <SearchResults
            v-bind="results"
            v-if="index >= (currentPagination - 1)*20 && index < currentPagination*20"
            @getRecipe="getRecipeData"
          />
        </div>
      </div>
      <Pagination
        v-if="paginationVisiable"
        :pageNumber="pagination"
        @getPagination="getPageNumber"
        :currentPagination="currentPagination"
      />
      <Recipe v-if="results !== ''" :card="card" :results="results" @closeCard="card = false" />
    </div>
  </q-page>
</template>

<script>
import Slider from '../components/Slider.vue'
import SearchBox from '../components/SearchBox.vue'
import SearchResults from '../components/SearchResults.vue'
import Pagination from '../components/Pagination.vue'
import Spinner from '../components/Spinner.vue'
import Recipe from '../components/Recipe.vue'
import axios from 'axios'
export default {
  name: 'PageIndex',
  components: {
    Slider,
    SearchBox,
    SearchResults,
    Pagination,
    Spinner,
    Recipe
  },
  data () {
    return {
      spinner: true,
      searchBox: false,
      searchResluts: [],
      paginationVisiable: false,
      pagination: 0,
      currentPagination: 1,
      card: false,
      results: ''
    }
  },
  methods: {
    getSearchInput (result) {
      axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${result}`)
        .then(response => {
          this.searchResluts = response.data.data.recipes
          this.pagination = Math.ceil(response.data.data.recipes.length / 20)
          this.searchBox = true
          this.paginationVisiable = true
          this.currentPagination = 1
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRecipeData (id) {
      axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
        .then(response => {
          this.results = response.data.data.recipe
          this.card = true
        })
        .catch(error => {
          console.log(error)
        })
    },
    getPageNumber (num) {
      this.currentPagination = num
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
  .containers{
    max-width: 1120px;
    margin: 0 auto;
  }
  .search_result_box{
    border: 1px solid #FF8C00;
  }
</style>
