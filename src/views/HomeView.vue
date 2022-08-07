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
          <CardBuy :product="product" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import CardBuy from '../components/CardBuy.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    CardBuy
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  mounted() {
    this.getProducts('')
  },
  watch: {
    group() {
      this.drawer = false
    }
  }
})
</script>

<style>
.main {
  min-height: calc(100% - 113px);
}
</style>
