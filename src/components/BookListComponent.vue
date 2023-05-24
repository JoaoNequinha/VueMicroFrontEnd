<template>
  <div>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row flex-wrap flex-grow-1 align-items-stretch w-auto">
        <BookComponent v-for="book in books" :key="book" :book="book"></BookComponent>
      </div>
    </div>
    <div class="d-flex flex-row-reverse m-5" style="height: 150px">
      <button
        type="button"
        class="btn btn-primary btn-lg"
        @click="goToBasket()"
        style="width: 15%; font-size: 30px"
      >
        Go to Basket
      </button>
    </div>
  </div>
</template>

<script>
import BookComponent from './BookComponent.vue'

export default {
  data() {
    return {}
  },
  name: 'BookListWrapper',
  components: {
    BookComponent
  },

  props: {
    books: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToBasket() {
      this.$emit('go-to-basket')
    }
  }
}
</script>

<style scoped></style>
