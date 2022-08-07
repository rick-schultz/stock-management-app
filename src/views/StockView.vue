<template>
  <v-main class="pt-1 main">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="product in $store.state.products"
          :key="product.id"
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            :title="product.name"
            :text="`Current stock: ${product.stock}`"
          >
            <v-btn color="success" class="mx-4 mb-4">
              <router-link
                to="/product"
                class="link"
                @click="this.getProduct(product.id)"
                >Edit Stock</router-link
              >
            </v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
  name: 'StockView',

  mounted() {
    this.getProducts('')
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapActions(['getProduct']),
    validate() {
      this.$refs.form.validate()
    }
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
})
</script>
<style scoped>
.link {
  text-decoration: none;
  color: #000;
}
</style>
