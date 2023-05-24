<template>
  <div class="card p-2 border-0" style="width: 20%; height: 600px">
    <div class="card-body d-flex flex-column justify-content-center">
      <h5 class="card-title text-center font-weight-bold">
        {{ book.title }}
      </h5>
      <p class="card-text text-center p-0">Description - {{ preview }}</p>
      <p class="text-center" style="font-size: 25px; font-weight: bold">Price: £{{ book.price }}</p>

      <div class="d-flex flex-row justify-content-evenly">
        <button
          type="button"
          class="btn btn-light btn-circle btn-sm m-2"
          @click="decreaseQuantity()"
        >
          -
        </button>
        <p id="quantity-display">{{ quantity }}</p>
        <button
          type="button"
          class="btn btn-light btn-circle btn-sm m-2"
          @click="increaseQuantity()"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookComponent',
  data() {
    this.quantity = 0
    this.preview = this.createPreview()
    this.bookModel = {
      id: this.book.id,
      title: this.book.title,
      description: this.book.description,
      price: this.book.price,
      purchased_quantity: this.quantity
    }

    return {
      quantity: this.quantity,
      purchasedBookModel: this.bookModel
    }
  },

  props: ['book'],
  methods: {
    increaseQuantity() {
      if (this.quantity >= 0) this.quantity++
      this.bookModel.purchased_quantity = this.quantity

      let storedBookModel = this.findBookPurchased(this.purchasedBookModel)

      if (storedBookModel === null) {
        this.addBookToStorage(this.purchasedBookModel)
      } else {
        storedBookModel = this.bookModel
      }
    },
    decreaseQuantity() {
      if (this.quantity > 0) this.quantity--
      this.bookModel.purchased_quantity = this.quantity

      let storedBookModel = this.findBookPurchased(this.purchasedBookModel)

      if (storedBookModel === null) {
        this.addBookToStorage(this.purchasedBookModel)
      } else {
        storedBookModel = this.bookModel
      }

      if (this.quantity === 0) {
        this.removeBookFromStorage(this.purchasedBookModel)
      }
    },
    createPreview() {
      if (this.book.description.length > 40) {
        let prevString = this.book.description.substring(0, 40)

        return (this.preview = prevString + '...')
      }

      return (this.preview = this.book.description)
    },
    findBookPurchased(bookmodel) {
      return sessionStorage.getItem(bookmodel.id) !== null
        ? sessionStorage.getItem(bookmodel.id)
        : null
    },
    addBookToStorage(bookmodel) {
      sessionStorage.setItem(bookmodel.id, bookmodel)
    },
    removeBookFromStorage(bookmodel) {
      sessionStorage.removeItem(bookmodel.id)
    }
  }
}
</script>

<style scoped>
.card-title {
  font-size: 30px;
  font-weight: bold;
}
.btn-circle.btn-sm {
  width: 70px;
  height: 70px;
  padding-bottom: 20px;
  border-radius: 40px;
  border: solid black 4px;
  font-size: 65px;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

#quantity-display {
  border: black solid 2px;
  padding: 2px;
  width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-top: 15px;
}

.card-text {
  height: 3em;
  line-height: 1.5em;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  width: 70%;
  margin-left: 15%;
  font-size: 30px;
}
</style>
