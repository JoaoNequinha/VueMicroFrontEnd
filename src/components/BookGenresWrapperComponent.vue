<template>
  <div class="GenresPage">
    <div class="Categories-title">
      <h1>Categories of Books</h1>
    </div>
    <div class="Categories-body">
      <BookGenreComponent
        @selected-category="getSelectedCategory"
        v-for="cat in categories"
        :key="cat.id"
        :id="cat.id"
        :text="cat.name"
      ></BookGenreComponent>
    </div>
  </div>
</template>

<script>
import BookGenreComponent from './BookGenreComponent.vue'
export default {
  data() {
    return {}
  },
  props: {
    categories: {
      type: Array
    }
  },

  name: 'BookGenresWrapper',
  components: {
    BookGenreComponent
  },
  methods: {
    getSelectedCategory(selectedCategoryEvent) {
      this.$emit('Genre-selected', selectedCategoryEvent)
    }
  }
}
</script>

<style scoped>
.GenresPage {
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Categories-title {
  align-content: center;
}
.Categories-body {
  display: flex;
  flex-flow: row wrap;
  flex-basis: 50%;
  flex-grow: 1;
  justify-content: center;
  align-content: flex-start;
  row-gap: 50px;
  column-gap: 50px;
  max-width: 500px;
  padding: 20px;
}
h1 {
  text-align: center;
  size: 100%;
}
</style>
