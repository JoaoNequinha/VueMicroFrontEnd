<template>
  <div class="centered-box" @click="selectedCategory()">
    <p :style="{ color: fontColour }">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'BookGenreComponent',
  data() {
    return {
      fontColour: this.selectColor()
    }
  },
  props: {
    text: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectedCategory() {
      this.$emit('selected-category', { category: this.text, id: this.id, isClicked: true })
    },
    selectColor() {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16)
      return '#' + randomColor
    }
  }
}
</script>

<style scoped>
.centered-box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid black;
  height: 80px;
  width: 150px;
  text-align: center;
  padding: 25px;
  cursor: pointer;
}
.centered-box p {
  text-align: center;
}
.centered-box:hover {
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
}
</style>
