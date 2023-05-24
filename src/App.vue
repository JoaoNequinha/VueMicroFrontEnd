<template>
  <keep-alive>
    <component
      :is="component"
      @Genre-selected="loadComponent"
      :categories="categories"
      :books="booksList"
    />
  </keep-alive>
</template>

<script setup>
import BookListWrapper from './components/BookListComponent.vue'
import BookGenresWrapper from './components/BookGenresWrapperComponent.vue'
import axios from 'axios'
</script>

<script>
export default {
  name: 'app',
  components: {
    BookListWrapper,
    BookGenresWrapper
  },
  mounted() {
    axios
      .get('http://localhost:3000/categories')
      .then((response) => (this.categories = response.data))
  },

  data() {
    this.storageNameholder = 'test'
    return {
      component: 'BookGenresWrapper',

      categories: [],
      booksList: []
    }
  },
  methods: {
    loadComponent(input) {
      this.loadBooksByCategoryId(input.id)
      let page = input.isClicked == false ? 'GenresPageComponent' : 'BookListWrapper'
      this.component = page
    },
    loadBooksByCategoryId(categoryId) {
      axios
        .get('http://localhost:3000/books/category', { params: { id: categoryId } })
        .then((response) => (this.booksList = response.data))
    }
  }
}
</script>
