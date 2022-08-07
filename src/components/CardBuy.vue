<template>
  <v-card :title="product.name" :subtitle="`Current stock: ${product.stock}`">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row class="px-4 pb-4 align-center">
        <v-col cols="7">
          <v-text-field
            rounded
            hide-details
            :rules="stockRules"
            v-model="stock"
            label="Quantity"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-btn
            :disabled="!valid"
            color="success"
            @click="
              ;[
                this.updateStock(`${product.id}/buy?amount=${stock}`),
                this.clearInput(),
                this.$forceUpdate()
              ]
            "
          >
            Buy
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CardBuy',
  props: ['product'],
  data: () => ({
    stock: '',
    valid: true,
    stockRules: [(v) => !!v || 'Stock is required']
  }),

  methods: {
    ...mapActions(['getProducts']),
    ...mapActions(['getProduct']),
    ...mapActions(['updateStock']),
    clearInput() {
      this.stock = ''
      this.stockRules = [true]
      this.valid = true
      this.getProducts()
    }
  }
}
</script>
